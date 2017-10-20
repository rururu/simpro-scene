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
public class OMTText extends MapOb {

    /**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;

	/** Creates a new instance of MapOb */
    public OMTText() {
    }

    /**
     * Constructor of OMTPoint object from Protege instance
     * @param instance - Protege Instance
     * @throws Exception -
     */
    public OMTText(Instance instance) throws Exception {
        super(instance);
        mapFromProtege(instance);
        coordFromProtege(instance);
    }
    
    /**
     * Factory method for creating OMTPoint object from string parameters
     * @param label - name of OMTPoint object
     * @param latitude - latitude in form "DD MM.M"
     * @param longitude - longitude in form "DD MM.M"
     * @param tcolor - text color in form "AARRGGBB"
     * @param fontName - Font Name
     * @param fontSize - integer
     * @param bold - "true" or "false"
     * @param italic - "true" or "false"
     * @param angle - degrees (float)
     * @throws Exception -
     * @return new OMTPoint object
     */
    public static OMTText createOMTText(
        String label,
        String text,
        String x,
        String y,
        String latitude,
        String longitude,
        String tcolor,
        String fontName,
		String fontSize,
		String bold,
		String italic,
		String angle
    ) throws Exception {
        Cls cls = OpenMapTab.kb.getCls(Ontology.C_OMTEXT);
        if(cls!=null){
            Instance inst = OpenMapTab.kb.createInstance(null,cls);
            if(inst!=null){
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LABEL),label);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LATITUDE),latitude);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LONGITUDE),longitude);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_TEXT_COLOR),tcolor);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_TEXT),text);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_FONT_NAME),fontName);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_X),new Integer(x));
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_Y),new Integer(y));
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_FONT_SIZE),new Integer(fontSize));
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_BOLD),new Boolean(bold));
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_ITALIC),new Boolean(italic));
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_ANGLE),new Float(angle));
                return new OMTText(inst);
            }
        }
        return null;
    }

    /**
     * Rewrite information from Protege Instance to this object.
     * @param instance - Protege Instance
     * @throws Exception 
     */
    public void mapFromProtege(Instance instance) {
        String text = (String)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_TEXT));
        String fontName = (String)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_FONT_NAME));
        Integer fontSize = (Integer)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_FONT_SIZE));
        Boolean bold = (Boolean)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_BOLD));
        Boolean italic = (Boolean)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_ITALIC));
        Integer X = (Integer)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_X));
        Integer Y = (Integer)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_Y));
        String latitude = (String)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LATITUDE));
        String longitude = (String)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LONGITUDE));
        if(text == null)
        	text = "text";
        String fname = "System";
        if(fontName != null)
        	fname = fontName;
        int size = 12;
        if(fontSize != null)
        	size = fontSize.intValue();
        int style = Font.PLAIN;
        if(bold != null && bold.booleanValue())
        	style = Font.BOLD;
        if(italic != null && italic.booleanValue())
        	style += Font.ITALIC;
        Font font = new Font(fname, style, size);
        int x = 0;
        int y = 0;
    	if(X != null){
    		x = X.intValue();
    	}
    	if(Y != null){
    		y = Y.intValue();
    	}
        if(latitude!=null && longitude!=null){
            try {
				setLocation(latitude,longitude);
	        	setLocationMarker(new OMText(lat, lon, x, y, text, font, OMText.JUSTIFY_LEFT));
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
        } else 
        	setLocationMarker(new OMText(x, y, text, font, OMText.JUSTIFY_LEFT));
        Float angle = (Float)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_ANGLE));
        if(angle!=null)
            ((OMText)location).setRotationAngle(angle.floatValue());
        String lcolor = (String)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_TEXT_COLOR));
        if(lcolor!=null){
            Color lcol = ColorFactory.parseColor(lcolor);
            ((OMText)location).setLinePaint(lcol);
        }
    }
}
