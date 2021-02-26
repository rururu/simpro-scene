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
import com.bbn.openmap.proj.*;
import com.bbn.openmap.omGraphics.*;

import edu.stanford.smi.protege.model.*;
/**
 * Class for simulation of spill with drift
 * @author Ru
 */
public class Drift extends Spill {
    
    /**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	
	/**
     * Direction of drift in degrees
     */
    protected int course;     // wind direction
    /**
     * Speed of drift in knots
     */
    protected double speed2;   // wind speed
    /**
     * Direction of drift in radians
     */
    protected double driang;   // drift angle;
    /**
     * Bounds on drift
     */
    protected Bounds bounds;

    /** Creates a new instance of MapOb */
    public Drift() {
    }

    /**
     * Constructor of Drift object from Protege instance
     * @param instance - Protege Instance
     * @throws Exception -
     */
    public Drift(Instance instance) throws Exception {
        super(instance);
    }
    
    /**
     * Factory method for creating Drift object from string parameters
     * @param label - name of Drift object
     * @param latitude - latitude in form "DD MM.M"
     * @param longitude - longitude in form "DD MM.M"
     * @param lcolor - border line color in form "AARRGGBB"
     * @param fcolor - fill color in form "AARRGGBB"
     * @param N - number of approximation points in form "N"
     * @param speed - speed of spill in form "KK.K"
     * @param radius - maximal radius of spill in form "NMM.M"
     * @param speed2 - speed of drift in form "KK.K"
     * @param course - course of drift in form "DDD"
     * @throws Exception -
     * @return Drift object
     */
    public static Drift createDrift(
        String label,
        String latitude,
        String longitude,
        String lcolor,
        String fcolor,
        String N,
        String speed,
        String radius,
        String speed2,
        String course
    ) throws Exception {
        Cls cls = OpenMapTab.kb.getCls(Ontology.C_DRIFT);
        if(cls!=null){
            Instance inst = OpenMapTab.kb.createInstance(null,cls);
            if(inst!=null){
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LABEL),label);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LATITUDE),latitude);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LONGITUDE),longitude);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LINE_COLOR),lcolor);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_FILL_COLOR),fcolor);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_N),Integer.parseInt(N));
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_SPEED),Float.valueOf(speed));
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_RADIUS),Float.valueOf(radius));
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_SPEED2),Float.valueOf(speed2));
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_COURSE),Float.valueOf(course));
                return new Drift(inst);
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
            ((OMPoly)location).setLinePaint(lcol);
        }
        String fcolor = (String)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_FILL_COLOR));
        if(fcolor!=null){
            Color fcol = ColorFactory.parseColor(fcolor);
            ((OMPoly)location).setFillPaint(fcol);
        }
        ((OMPoly)location).setIsPolygon(true);
        Integer n = (Integer)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_N));
        Float spd = (Float)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_SPEED));
        Float rds = (Float)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_RADIUS));
        Float spd2 = (Float)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_SPEED2));
        Integer crs = (Integer)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_COURSE));
        if(n!=null && spd!=null && rds!=null && spd2!=null && crs!=null) {
            N = n.intValue(); 
            radius = rds.doubleValue();
            speed = spd.doubleValue();
            speed2 = spd2.doubleValue();
            course = crs.intValue();
            driang = course*(double)Math.PI*2/360f;
            createDirs(N);
            createPoints(N);
            ((OMPoly)location).setLocation(llp,OMGraphic.RADIANS);
        }
        setRenderType(OMGraphicConstants.RENDERTYPE_LATLON);
        Instance line = (Instance)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LINE));
        if(line != null)
        	setLineAttributies((OMPoly)location, line);
    }

    /**
     * Method for calculation of new coordinates for points approximating
     * drift polygon
     * @param llp - array of points
     * @param dist - distance of spill on one step in NM
     * @param dir - array of spill directions for every point in radians
     * @param dd - distance of drift on one step in NM
     * @param da - direction of drift in radians
     * @return - same array with recalculated points's coorinates
     */
    public double[] drift(double[] llp,double dist,double[] dir,double dd,double da){
        for(int i=0;i<llp.length;i+=2){
            double fi = llp[i];
            double la = llp[i+1];
            double[] p1 = GreatCircle.sphericalBetween(fi, la, Math.toRadians(dist), dir[i/2], 1);
            double[] p2 = GreatCircle.sphericalBetween(p1[2], p1[3], Math.toRadians(dd), da, 1);
            if(bounds==null || bounds.inBounds(p2[2], p2[3])){
	            llp[i] = p2[2];
	            llp[i+1] = p2[3];
            }
        }
        return llp;
    }
    
    /**
     * Drift on one step
     * @param time - elapsed time on one step in hours
     */
    public void drift(double time){
        double dist1 = 0;
        if(currad<radius){
            dist1 = speed*time;
            if(dist1+currad>radius){
                dist1 = radius-currad;
            }
            currad += dist1;
        }
        double dist2 = speed2*time;
        llp = drift(llp,dist1,dir,dist2,driang);
        ((OMPoly)location).setLocation(llp,OMGraphic.RADIANS);
    }
    
    /**
     * Current drift speed
     * @return - drift speed in knots
     */
    public double getDriftSpeed(){
        return speed2;
    }
    
    /**
     * Set new drift speed
     * @param s2 - new speed in knots
     */
    public void setDriftSpeed(double s2){
        speed2 = s2;
    }
    

    /**
     * Current drift course in degrees
     * @return - drift course in degrees
     */
    public double getDriftCourse(){
        return course;
    }

    /**
     * Set new drift course
     * @param c - new drift course in degrees
     */
    public void setDriftCourse(int c){
        course = c;
        driang = course*Math.PI*2/360f;
    }

	public Bounds getBounds() {
		return bounds;
	}

	public void setBounds(Bounds bounds) {
		this.bounds = bounds;
	}
}
