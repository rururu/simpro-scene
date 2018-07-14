/*
 * The contents of this file are subject to the Mozilla Public License
 * Version 1.1 (the "License");  you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for
 * the specific language governing rights and limitations under the License.
 *
 * Copyright (C) 2013 Sorokin R.P. (sorokinru@oogis.ru)
 * and Object-oriented Geoinformatics Systems Laboratory (http://oogis.ru)
 * All Rights Reserved.
 */

package ru.igis.omtab.ra;

import java.util.ArrayList;
import java.util.List;

import ru.igis.omtab.*;

import com.bbn.openmap.omGraphics.*;

import edu.stanford.smi.protege.model.*;
/**
 * Reference realisation of Repeat Action interface
 * Simulate periodical generation of Spill objects and corresponding 
 * RepeatActions
 * @author ru
 */
public class DropRepeatAction extends RepeatAction {
    private Instance spill_inst;
    private String spill_label;
    private Field field;
    private double lifetime2;
    private double period2;
    private List<Spill> spills = new ArrayList<Spill>();
    private int cnt = 0;
    private Playground pgd;
    private Bounds bounds;

    /** Creates a new instance of SpillRepeatAction */
    public DropRepeatAction() {}
    
    public DropRepeatAction(Instance inst) {
    	super(inst);
    }
    /**
     * Method implementing periodically repeating action
     * Here is generates Spill objects and RepeatActions for them
     * @param time time elapsed between steps
     */
	public synchronized void repeat(double time) {
        if(spill_inst!=null){
        	Spill spill = createCurrentSpill(spill_inst, spill_label);
    		startSpillRA(spill);
        	if(field != null)
        		startPofigRA(spill, field);
        	spills.add(spill);
        }
    }
    
    private Spill createCurrentSpill(Instance instance, String label){
        try {
        	Spill spill = new Spill(instance);
            String current_name = label+cnt++;
            spill.setName(current_name);
	        spill.putLocationMarker();
	    	spill.mapFromProtege(instance);
			spill.coordFromProtege(instance);
	        spill.setLabel(new OMText(spill.lat, spill.lon, 0, 0, current_name, OMText.JUSTIFY_LEFT));
	    	pgd.addMapOb(spill);
	    	return spill;
		} catch (Exception e) {
			System.out.println("SpillRepeatAction ERROR: problem with "+spill_label);
			e.printStackTrace();
			return null;
		}
    }
    
    private void startSpillRA(Spill spill){
    	SpillRepeatAction sra = new SpillRepeatAction(spill);
    	sra.setLifetime(lifetime2);
    	sra.setPeriod(period2);
    	sra.setName(spill.getName()+"sra");
    	sra.setPgid(pgd.getPgid());
		spill.setBounds(bounds);
    	sra.start(pgd.getTimer());
    }

    private void startPofigRA(Spill spill, Field field){
    	OMTPolyOnFieldRepeatAction pofigra = new OMTPolyOnFieldRepeatAction(spill, field);
    	pofigra.setLifetime(lifetime2);
    	pofigra.setPeriod(period2);
    	pofigra.setName(spill.getName()+"pofra");
    	pofigra.setBounds(bounds);
    	pofigra.start(pgd.getTimer());
    }

    /**
     * Method filling information to this RepeatAction object
     * from Protege Instance
     * @param instance Protege Instance describing this Repeat Action
     * @param kb Protege Knowledge Base
     */
    public void fillFromProtege(Instance instance, KnowledgeBase kb){
    	super.fillFromProtege(instance, kb);
        String interval2 = (String)instance.getOwnSlotValue(kb.getSlot(Ontology.S_INTERVAL2));
        int lt2sv = (Integer)instance.getOwnSlotValue(kb.getSlot(Ontology.S_LIFETIME2));
        int prd2 = (Integer)instance.getOwnSlotValue(kb.getSlot(Ontology.S_PERIOD2));
        if(interval2.equals(MSEC)){
        	lifetime2 = ((double)lt2sv)/3600000d;
        	period2 = ((double)prd2)/3600000d;
        } else if(interval2.equals(SECOND)){
        	lifetime2 = ((double)lt2sv)/3600d;
        	period2 = ((double)prd2)/3600d;
        } else if(interval2.equals(MINUTE)) {
        	lifetime2 = ((double)lt2sv)/60d;
        	period2 = ((double)prd2)/60d;
        } else if(interval2.equals(HOUR)) {
        	lifetime2 = ((double)lt2sv);
        	period2 = ((double)prd2);
        } else {
        	lifetime2 = 0d;
        	period2 = 0d;
        }
        spill_inst = (Instance)instance.getOwnSlotValue(kb.getSlot(Ontology.S_SPILL));
        spill_label = (String)spill_inst.getOwnSlotValue(kb.getSlot(Ontology.S_LABEL));
        Object bnds = instance.getOwnSlotValue(kb.getSlot(Ontology.S_BOUNDS));
        if(bnds!=null)
        	bounds = new Bounds((Instance) bnds);
        Instance moinst = (Instance)instance.getOwnSlotValue(kb.getSlot(Ontology.S_FIELD));
       	field = (Field) OMT.getOrAdd(moinst);
        pgd = OMT.getPlaygrounds()[pgid];
    }

    /**
     * Method called while removing this Repeat Action object
     * Should clear created objects
     */
    public void removeObjects(){
    	for(Spill spill: spills)
          OMT.removeMapOb(spill.getInstance(),false);
    	if(field != null)
    		OMT.removeMapOb(field.getInstance(),false);
    }

    public Bounds getBounds() {
		return bounds;
	}

	public void setBounds(Bounds bounds) {
		this.bounds = bounds;
	}
}
