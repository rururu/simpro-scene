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
 * Copyright (C) 2004 Sorokin R.P. (sorokinru@iias.spb.su)
 * and Object-oriented Geoinformatics Systems Laboratory (http://niggis.iias.spb.su)
 * All Rights Reserved.
 */

package ru.igis.omtab.ra;

import ru.igis.omtab.*;
import edu.stanford.smi.protege.model.*;
/**
 * Reference realisation of Repeat Action interface
 * Simulate drift of spacial objects
 * See Drift class
 * @author ru
 */
public class DriftRepeatAction extends RepeatAction {
	
    public Drift getDrift() {
		return drift;
	}

	public void setDrift(Drift drift) {
		this.drift = drift;
	}

	private Drift drift;
    
    /** Creates a new instance of DriftRepeatAction */
    public DriftRepeatAction() {}

    public DriftRepeatAction(Instance inst) {
    	super(inst);
    }
    /**
     * Creates a new instance of DriftRepeatAction
     * @param dr Drift object
     */
    public DriftRepeatAction(Drift dr) {
        drift = dr;
    }
    
    /**
     * Method implementing periodically repeating action
     * Here is drifting by one step
     * @param time time elapsed between steps
     */
    public synchronized void repeat(double time) {
        if(drift!=null)
            synchronized (drift) {
                drift.drift(time);
            }
    }
    
    /**
     * Method filling information to this RepeatAction object
     * from Protege Instance
     * @param instance Protege Instance describing this Repeat Action
     * @param kb Protege Knowledge Base
     */
    public void fillFromProtege(Instance instance, KnowledgeBase kb){
    	super.fillFromProtege(instance, kb);
        Instance moinst = (Instance)instance.getOwnSlotValue(kb.getSlot(Ontology.S_POLY));
        drift = (Drift) OMT.getOrAdd(moinst);
        Object bnds = instance.getOwnSlotValue(kb.getSlot(Ontology.S_BOUNDS));
        if(bnds!=null)
        	drift.setBounds(new Bounds((Instance) bnds));
    }

    /**
     * Method called while removing this Repeat Action object
     * Should clear created objects
     */
    public void removeObjects(){
        OMT.removeMapOb(drift.getInstance(),false);
    }
}
