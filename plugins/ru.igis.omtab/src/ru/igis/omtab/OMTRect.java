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
 * Class for creation and store Openmap OMRect object from Protege Instance
 * @author Ru
 */
public class OMTRect extends MapOb  implements Container{

    /**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;

	/** Creates a new instance of MapOb */
    public OMTRect() {
    }

    /**
     * Constructor of OMTRect object from Protege instance
     * @param instance - Protege Instance
     * @throws Exception -
     */
    public OMTRect(Instance instance) throws Exception {
        super(instance);
        mapFromProtege(instance);
        coordFromProtege(instance);
    }
    
    protected void putLocationMarker(){
        setLocationMarker(new OMRect());
        ((OMRect)location).setLineType(OMGraphicConstants.LINETYPE_GREATCIRCLE);
        ((OMRect)location).setRenderType(OMGraphicConstants.RENDERTYPE_LATLON);
    }
    
    /**
     * Factory method for creating OMTRect object from string parameters
     * @param label - name of OMTRect object
     * @param latitude - latitude in form "DD MM.M"
     * @param longitude - longitude in form "DD MM.M"
     * @param lcolor - line color in form "AARRGGBB"
     * @param fcolor - fill color in form "AARRGGBB"
     * @param north - north bound in form "DD MM.M"
     * @param south - south bound in form "DD MM.M"
     * @param east - east bound in form "DD MM.M"
     * @param west - west bound in form "DD MM.M"
     * @throws Exception -
     * @return new OMTRect object
     */
    public static OMTRect createOMTRect(
        String label,
        String latitude,
        String longitude,
        String lcolor,
        String fcolor,
        String north,
        String south,
        String east,
        String west
    ) throws Exception {
        Cls cls = OpenMapTab.kb.getCls(Ontology.C_OMRECT);
        if(cls!=null){
            Instance inst = OpenMapTab.kb.createInstance(null,cls);
            if(inst!=null){
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LABEL),label);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LATITUDE),latitude);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LONGITUDE),longitude);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LINE_COLOR),lcolor);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_FILL_COLOR),fcolor);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_NORTH),north);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_SOUTH),south);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_EAST),east);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_WEST),west);
                return new OMTRect(inst);
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
            ((OMRect)location).setLinePaint(lcol);
        }
        String fcolor = (String)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_FILL_COLOR));
        if(fcolor!=null){
            Color fcol = ColorFactory.parseColor(fcolor);
            ((OMRect)location).setFillPaint(fcol);
        }
        String north = (String)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_NORTH));
        String south = (String)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_SOUTH));
        String east = (String)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_EAST));
        String west = (String)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_WEST));
        if(north!=null && south!=null && east!=null && west!=null){
            try{
                double nlat = MapOb.getDeg(north);
                double slat = MapOb.getDeg(south);
                double elon = MapOb.getDeg(east);
                double wlon = MapOb.getDeg(west);
                ((OMRect)location).setLocation(nlat,wlon,slat,elon,OMGraphic.LINETYPE_GREATCIRCLE);
            }catch(Exception exc){
            	System.out.println("ERROR: OMTRect wrong coords!");
            }
        }
        setRenderType(OMGraphicConstants.RENDERTYPE_LATLON);
        Instance line = (Instance)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LINE));
        if(line != null)
        	OMTPoly.setLineAttributies((OMRect)location, line);
    }
    
    /**
     * Method to determine if Rect contains some Map Object
     * @param mo - Map Object
     * @return - true, if OMTRect contains this Map Object, else false
     */
    public boolean contains(MapOb mo){
        return contains(mo.getLatitude(),mo.getLongitude());
    }
    
    /**
     * Method to determine if Rect contains some point
     * @param lat - latitude in degrees
     * @param lon - longitude in degrees
     * @return - true, if OMTRect contains this point, else false
     */
    public boolean contains(double lat,double lon){
    	if(pgid >= 0) {
	    	Projection proj = OMT.playgrounds[pgid].getProjection();
	        Point2D point = proj.forward(lat,lon);
	        return ((OMRect)location).contains(point.getX(),point.getY());
		} else
			return false;
	    }

    /*
    /**
     * Standard Openmap method
     * @param latitudeN - Latitude of upper lef corner in degrees
     * @param longitudeW - Longitude of upper lef corner in degrees
     */
    /*
    public void setGraphicLocations(double latitudeN, double longitudeW){
    	OMRect omr = (OMRect)location;
    	double latitudeS = omr.getSouthLat() + (latitudeN - omr.getNorthLat());
    	double longitudeE = omr.getEastLon() + (longitudeW - omr.getWestLon());
        omr.setLocation(latitudeN,longitudeW,latitudeS,longitudeE,OMGraphic.LINETYPE_GREATCIRCLE);
    	label.setLat(latitudeN);
    	label.setLon(longitudeW);
    }
    */

    public void setLine(Instance linst){
    	OMTPoly.setLineAttributies((OMRect)location, linst);
    }
}
