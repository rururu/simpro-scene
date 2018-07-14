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

import java.util.*;
import com.bbn.openmap.omGraphics.*;
import edu.stanford.smi.protege.model.*;
/**
 * Class for creation and store Openmap OMSpline object from Protege Instance
 * @author Ru
 */
public class OMTSpline extends OMTPoly {

    /**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;

	/** Creates a new instance of MapOb */
    public OMTSpline() {
    }

    /**
     * Constructor of OMTSpline object from Protege instance
     * @param instance - Protege Instance
     * @throws Exception -
     */
    public OMTSpline(Instance instance) throws Exception {
        super(instance);
    }
    
    public void putLocationMarker(){
        setLocationMarker(new OMSpline());
        ((OMSpline)location).setLineType(OMGraphicConstants.LINETYPE_GREATCIRCLE);
        ((OMSpline)location).setRenderType(OMGraphicConstants.RENDERTYPE_LATLON);
    }
    
    /**
     * Factory method for creating OMTSpline object from string parameters
     * @param label - name of OMTSpline object
     * @param latitude - latitude in form "DD MM.M"
     * @param longitude - longitude in form "DD MM.M"
     * @param lcolor - line color in form "AARRGGBB"
     * @param fcolor - fill color in form "AARRGGBB"
     * @param ispolygon - "true",if this is closed polygon, "false", if this is polyline
     * @param points - collection of Strings each in form "DD MM.M DD MM.M" (latitude longitude)
     * @throws Exception -
     * @return new OMTSpline object
     */
    public static OMTSpline createOMTSpline(
        String label,
        String latitude,
        String longitude,
        String lcolor,
        String fcolor,
        String ispolygon,
        Collection<String> points
    ) throws Exception {
        Cls cls = OpenMapTab.kb.getCls(Ontology.C_OMSPLINE);
        if(cls!=null){
            Instance inst = OpenMapTab.kb.createInstance(null,cls);
            if(inst!=null){
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LABEL),label);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LATITUDE),latitude);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LONGITUDE),longitude);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LINE_COLOR),lcolor);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_FILL_COLOR),fcolor);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_IS_POLYGON),new Boolean(ispolygon));
                inst.setOwnSlotValues(OpenMapTab.kb.getSlot(Ontology.S_POINTS),points);
                return new OMTSpline(inst);
            }
        }
        return null;
    }
}
