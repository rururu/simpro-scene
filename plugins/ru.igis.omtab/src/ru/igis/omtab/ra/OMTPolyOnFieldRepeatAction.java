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

import com.bbn.openmap.omGraphics.*;
import edu.stanford.smi.protege.model.*;
/**
 * Reference realisation of Repeat Action interface
 * Simulate movement of spacial objects under influence of Field
 * See Field class
 * @author ru
 */
public class OMTPolyOnFieldRepeatAction extends RepeatAction {
	
    private OMTPoly poly;
    private Field field;
    private Bounds bounds;

    /**
     * Creates a new instance of PolyOnField RepeatAction
     * @param p OMTPoly object
     * @param f Field object
     */
    public OMTPolyOnFieldRepeatAction(OMTPoly p, Field f) {
        poly = p;
        field = f;
    }

    /** Creates a new instance of OMTPolyOnFieldRepeatAction */
    public OMTPolyOnFieldRepeatAction() {}

    public OMTPolyOnFieldRepeatAction(Instance inst) {
    	super(inst);
    }
    /**
     * Method implementing periodically repeating action
     * Here is moving points along the Field of vectors by one step
     * @param time time elapsed between steps
     */
    public synchronized void repeat(double time) {
        if(poly!=null)
            synchronized (poly) {
                OMPoly lm = (OMPoly)poly.getLocationMarker();
                double[] llp = lm.getLatLonArray();
                llp = field.moveLLPArray(llp,time,bounds);
                lm.setLocation(llp,OMGraphicConstants.RADIANS);
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
        poly = (OMTPoly) OMT.getOrAdd(moinst);
        Object bnds = instance.getOwnSlotValue(kb.getSlot(Ontology.S_BOUNDS));
        if(bnds!=null)
        	bounds = new Bounds((Instance) bnds);
        moinst = (Instance)instance.getOwnSlotValue(kb.getSlot(Ontology.S_FIELD));
        field = (Field) OMT.getOrAdd(moinst);
    }

    /**
     * Method called while removing this Repeat Action object
     * Should clear created objects
     */
    public void removeObjects(){
        OMT.removeMapOb(poly.getInstance(),false);
   		OMT.removeMapOb(field.getInstance(),false);
    }

	public Bounds getBounds() {
		return bounds;
	}

	public void setBounds(Bounds bounds) {
		this.bounds = bounds;
	}

	public OMTPoly getPoly() {
		return poly;
	}

	public void setPoly(OMTPoly poly) {
		this.poly = poly;
	}

	public Field getField() {
		return field;
	}

	public void setField(Field field) {
		this.field = field;
	}
}
