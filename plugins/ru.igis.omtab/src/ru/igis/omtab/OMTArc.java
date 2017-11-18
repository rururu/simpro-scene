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
import java.awt.geom.Arc2D;
import java.awt.geom.Point2D;

import com.bbn.openmap.proj.*;
import com.bbn.openmap.util.*;
import com.bbn.openmap.omGraphics.*;

import edu.stanford.smi.protege.model.*;
/**
 * Class for creation and store Openmap OMArc object from Protege Instance
 * @author Ru
 */
public class OMTArc extends MapOb implements Container{

    /**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	private double rustart = 784;

	/** Creates a new instance of MapOb */
    public OMTArc() {
    }

    /**
     * Constructor of OMTArc object from Protege instance
     * @param instance - Protege Instance
     * @throws Exception -
     */
    public OMTArc(Instance instance) throws Exception {
        super(instance);
        mapFromProtege(instance);
        coordFromProtege(instance);
    }
    
    protected void putLocationMarker(){
        setLocationMarker(new OMArc());
        ((OMArc)location).setLineType(OMGraphicConstants.LINETYPE_GREATCIRCLE);
        ((OMArc)location).setRenderType(OMGraphicConstants.RENDERTYPE_LATLON);
    }
    
    /**
     * Factory method for creating OMTArc object from string parameters
     * @param label - name of OMTArc object
     * @param latitude - latitude in form "DD MM.M"
     * @param longitude - longitude in form "DD MM.M"
     * @param lcolor - line color in form "AARRGGBB"
     * @param radius - radius in form "MMM.M" (Nautical Miles)
     * @param start - start azimuth of arc in form "DDD.D" (degrees)
     * @param extent - extention of arc clockwise in form "DDD.D" (degrees)
     * @param type - type of arc, either OPEN (default), PIE or CHORD
     * @throws Exception -
     * @return new OMTArc object
     */
    public static OMTArc createOTMArc(
        String label,
        String latitude,
        String longitude,
        String lcolor,
        String radius,
        String start,
        String extent,
        String type
    ) throws Exception {
        Cls cls = OpenMapTab.kb.getCls(Ontology.C_OMARC);
        if(cls!=null){
            Instance inst = OpenMapTab.kb.createInstance(null,cls);
            if(inst!=null){
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LABEL),label);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LATITUDE),latitude);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LONGITUDE),longitude);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LINE_COLOR),lcolor);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_RADIUS),new Float(radius));
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_ANGLE),new Float(start));
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_EXTENT),new Float(extent));
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_ARC_TYPE),type);
                return new OMTArc(inst);
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
            ((OMArc)location).setLinePaint(lcol);
        }
        String fcolor = (String)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_FILL_COLOR));
        if(fcolor!=null){
            Color fcol = ColorFactory.parseColor(fcolor);
            ((OMArc)location).setFillPaint(fcol);
        }
        Float radius = (Float)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_RADIUS));
        if(radius!=null){
            ((OMArc)location).setRadius(radius.doubleValue(),Length.NM);
        }
        Float angl = (Float)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_ANGLE));
        if(angl!=null){
        	rustart = angl.doubleValue();
            ((OMArc)location).setStart(rustart);
        }
        Float extent = (Float)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_EXTENT));
        if(extent!=null){
            ((OMArc)location).setExtent(extent.doubleValue());
        }
        Instance line = (Instance)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LINE));
        if(line != null){
        	OMTPoly.setLineAttributies((OMArc)location, line);
       }
        String type = (String)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_ARC_TYPE));
        if(type != null){
        	if(type.equals(Ontology.CHORD))
        		((OMArc)location).setArcType(Arc2D.CHORD);
        	else if(type.equals(Ontology.PIE))
        		((OMArc)location).setArcType(Arc2D.PIE);
       }
    }
    
    /**
     * Standard Openmap method
     * @param latitude - Latitude in degrees
     * @param longitude - Longitude in degrees
     */
    public void setGraphicLocations(double latitude, double longitude){
    	((OMArc)location).setLatLon(latitude,longitude);
    	label.setLat(latitude);
    	label.setLon(longitude);
    }

    public void setLine(Instance linst){
    	OMTPoly.setLineAttributies((OMArc)location, linst);
    }
    /**
     * Set Course from int
     * @param deg - course in degrees
     */    
    public void setCourse(int deg){
        if(deg>=0f && deg<360f){
        	double direction = deg + rustart;
        	if(direction > 360)
        		direction -= 360;
          ((OMArc)location).setStart(direction);
      }
    }
    /**
     * Method to determine if Arc contains some point
     * @param lat - latitude in degrees
     * @param lon - longitude in degrees
     * @return - true, if OMTCircle contains this point, else false
     */
    public boolean contains(double lat,double lon){
    	if(playground != null) {
	        Projection proj = playground.getProjection();
	        generate(proj);
	        Point2D point = proj.forward(lat,lon);
        return ((OMArc)location).contains(point.getX(),point.getY());
    	} else
    		return false;
    }
    /**
     * Method to determine if Arc contains some Map Object
     * @param mo - Map Object
     * @return - true, if OMTCircle contains this Map Object, else false
     */
    public boolean contains(MapOb mo){
        return contains(mo.getLatitude(),mo.getLongitude());
    }
}
