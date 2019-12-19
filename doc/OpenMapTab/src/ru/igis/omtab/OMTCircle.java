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
import java.awt.geom.Point2D;

import com.bbn.openmap.proj.*;
import com.bbn.openmap.util.*;
import com.bbn.openmap.omGraphics.*;
import edu.stanford.smi.protege.model.*;
/**
 * Class for creation and store Openmap OMCircle object from Protege Instance
 * @author Ru
 */
public class OMTCircle extends MapOb  implements Container{

    /**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;

	/** Creates a new instance of MapOb */
    public OMTCircle() {
    }

    /**
     * Constructor of OMTCircle object from Protege instance
     * @param instance - Protege Instance
     * @throws Exception -
     */
    public OMTCircle(Instance instance) throws Exception {
        super(instance);
        mapFromProtege(instance);
        coordFromProtege(instance);
    }
    
    protected void putLocationMarker(){
        setLocationMarker(new OMCircle());
        ((OMCircle)location).setLineType(OMGraphicConstants.LINETYPE_GREATCIRCLE);
        ((OMCircle)location).setRenderType(OMGraphicConstants.RENDERTYPE_LATLON);
    }
    
    /**
     * Factory method for creating OMTCircle object from string parameters
     * @param label - name of OMTCircle object
     * @param latitude - latitude in form "DD MM.M"
     * @param longitude - longitude in form "DD MM.M"
     * @param lcolor - line color in form "AARRGGBB"
     * @param fcolor - fill color in form "AARRGGBB"
     * @param radius - radius in form "MMM.M" (Nautical Miles)
     * @throws Exception -
     * @return new OMTCircle object
     */
    public static OMTCircle createOMTCircle(
        String label,
        String latitude,
        String longitude,
        String lcolor,
        String fcolor,
        String radius
    ) throws Exception {
        Cls cls = OpenMapTab.kb.getCls(Ontology.C_OMCIRCLE);
        if(cls!=null){
            Instance inst = OpenMapTab.kb.createInstance(null,cls);
            if(inst!=null){
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LABEL),label);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LATITUDE),latitude);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LONGITUDE),longitude);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LINE_COLOR),lcolor);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_FILL_COLOR),fcolor);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_RADIUS),Float.valueOf(radius));
                return new OMTCircle(inst);
            }
        }
        return null;
    }

    /**
     * Rewrite information from Protege Instance to this object.
     * @param instance - Protege Instance
     */
    public void mapFromProtege(Instance instance) {
        String lcolor = (String)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LINE_COLOR));
        if(lcolor!=null){
            Color lcol = ColorFactory.parseColor(lcolor);
            ((OMCircle)location).setLinePaint(lcol);
        }
        String fcolor = (String)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_FILL_COLOR));
        if(fcolor!=null){
            Color fcol = ColorFactory.parseColor(fcolor);
            ((OMCircle)location).setFillPaint(fcol);
        }
        Float radius = (Float)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_RADIUS));
        if(radius!=null){
            ((OMCircle)location).setRadius(radius.doubleValue(),Length.NM);
        }
        Instance line = (Instance)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LINE));
        if(line != null)
        	OMTPoly.setLineAttributies((OMCircle)location, line);
    }
    
    /**
     * Method to determine if Circle contains some Map Object
     * @param mo - Map Object
     * @return - true, if OMTCircle contains this Map Object, else false
     */
    public boolean contains(MapOb mo){
        return contains(mo.getLatitude(),mo.getLongitude());
    }
    
    /**
     * Method to determine if Circle contains some point
     * @param lat - latitude in degrees
     * @param lon - longitude in degrees
     * @return - true, if OMTCircle contains this point, else false
     */
    public boolean contains(double lat,double lon){
    	if(playground != null) {
	        Projection proj = playground.getProjection();
	        generate(proj);
	        Point2D point = proj.forward(lat,lon);
        return ((OMCircle)location).contains(point.getX(),point.getY());
    	} else
    		return false;
    }
    
    /**
     * Standard Openmap method
     * @param latitude - Latitude in degrees
     * @param longitude - Longitude in degrees
     */
    public void setGraphicLocations(double latitude, double longitude){
    	((OMCircle)location).setLatLon(latitude,longitude);
    	label.setLat(latitude);
    	label.setLon(longitude);
    }

    public void setLine(Instance linst){
    	OMTPoly.setLineAttributies((OMCircle)location, linst);
    }
}
