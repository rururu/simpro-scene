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

package ru.igis.omtab;

import java.awt.*;
import com.bbn.openmap.util.*;
import com.bbn.openmap.omGraphics.*;
import edu.stanford.smi.protege.model.*;
/**
 * Class for creation and store Openmap OMPoint object from Protege Instance
 * @author Ru
 */
public class OMTPoint extends MapOb {

    /**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;

	/** Creates a new instance of MapOb */
    public OMTPoint() {
    }

    /**
     * Constructor of OMTPoint object from Protege instance
     * @param instance - Protege Instance
     * @throws Exception -
     */
    public OMTPoint(Instance instance) throws Exception {
        super(instance);
        mapFromProtege(instance);
        coordFromProtege(instance);
    }
    
    /**
     * Factory method for creating OMTPoint object from string parameters
     * @param label - name of OMTPoint object
     * @param latitude - latitude in form "DD MM.M"
     * @param longitude - longitude in form "DD MM.M"
     * @param lcolor - line color in form "AARRGGBB"
     * @param oval - "true" or "false"
     * @param radius - radius in form "MMM.M" (Nautical Miles)
     * @throws Exception -
     * @return new OMTPoint object
     */
    public static OMTPoint createOMTPoint(
        String label,
        String latitude,
        String longitude,
        String lcolor,
        String oval,
        String radius
    ) throws Exception {
        Cls cls = OpenMapTab.kb.getCls(Ontology.C_OMPOINT);
        if(cls!=null){
            Instance inst = OpenMapTab.kb.createInstance(null,cls);
            if(inst!=null){
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LABEL),label);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LATITUDE),latitude);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LONGITUDE),longitude);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LINE_COLOR),lcolor);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_OVAL),new Boolean(oval));
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_POINT_RADIUS),new Integer(radius));
                return new OMTPoint(inst);
            }
        }
        return null;
    }

    /**
     * Rewrite information from Protege Instance to this object.
     * @param instance - Protege Instance
     */
    public void mapFromProtege(Instance instance) {
        Boolean oval = (Boolean)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_OVAL));
        if(oval!=null) 
            ((OMPoint)location).setOval(oval.booleanValue());
        Integer rad = (Integer)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_POINT_RADIUS));
        if(rad!=null) 
            ((OMPoint)location).setRadius(rad.intValue());
        String lcolor = (String)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LINE_COLOR));
        if(lcolor!=null){
            Color lcol = ColorFactory.parseColor(lcolor);
            ((OMPoint)location).setLinePaint(lcol);
        }
    }
}
