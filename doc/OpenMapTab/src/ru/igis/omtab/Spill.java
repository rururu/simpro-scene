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
 * Class for simulation of spill
 * @author Ru
 */
public class Spill extends OMTSpline {
    
    /**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	
	/**
     * Number of approximation points
     */
    protected int N;  // number of points
    /**
     * Speed of spill in knots
     */
    protected double speed;
    /**
     * Direction of spill in degrees
     */
    protected double radius;
    /**
     * Array of approximation points's coordinates
     */
    protected double[] llp;
    /**
     * Array of approximation points's movment directions
     */
    protected double[] dir;
    /**
     * Current radius of spill
     */
    protected double currad;
    /**
     * Damping of speed in one hour (1-0)
     */
    protected double damping;
    /**
     * Bounds on spill
     */
    protected Bounds bounds;

    /** Creates a new instance of MapOb */
    public Spill() {
    }

    /**
     * Constructor of Spill object from Protege instance
     * @param instance - Protege instance
     * @throws Exception -
     */
    public Spill(Instance instance) throws Exception {
        super(instance);
    }
    
    /**
     * Factory method for creating Drift object from string parameters
     * @param label - name of Spill object
     * @param latitude - latitude in form "DD MM.M"
     * @param longitude - longitude in form "DD MM.M"
     * @param lcolor - border line color in form "AARRGGBB"
     * @param fcolor - fill color in form "AARRGGBB"
     * @param N - number of approximation points in form "N"
     * @param speed - speed of spill in form "KK.K"
     * @param radius - maximal radius of spill in form "NMM.M"
     * @param damping - of spill speed on one hour {1 - 0} 
     * @throws Exception -
     * @return - Spill object
     */
    public static Spill createSpill(
        String label,
        String latitude,
        String longitude,
        String lcolor,
        String fcolor,
        String N,
        String speed,
        String radius,
        String damping
    ) throws Exception {
        Cls cls = OpenMapTab.kb.getCls(Ontology.C_SPILL);
        if(cls!=null){
            Instance inst = OpenMapTab.kb.createInstance(null,cls);
            if(inst!=null){
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LABEL),label);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LATITUDE),latitude);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LONGITUDE),longitude);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LINE_COLOR),lcolor);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_FILL_COLOR),fcolor);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_N),Integer.getInteger(N, 0));
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_SPEED),Float.valueOf(speed));
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_RADIUS),Float.valueOf(radius));
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_DAMPING),Float.valueOf(damping));
                return new Spill(inst);
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
        if(n!=null && spd!=null && rds!=null) {
            N = n.intValue();
            radius = rds.doubleValue();
            speed = spd.doubleValue();
            createDirs(N);
            createPoints(N);
        }
        Float dmp = (Float)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_DAMPING));
        if(dmp!=null && dmp>0 && dmp<=1)
        	damping = dmp.doubleValue();
        else
        	damping = 0f;
        setRenderType(OMGraphicConstants.RENDERTYPE_LATLON);
        Instance line = (Instance)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LINE));
        if(line != null)
        	setLineAttributies((OMPoly)location, line);
    }
    
    /**
     * Create approximation points
     * @param n - number of points
     */
    protected void createPoints(int n){
        llp = new double[n+n+2];
    }
    
    // In the beginning all points are in the same location
    /**
     * Initialize points by putting all of them to this location
     */
    protected void initPoints(){
        for(int i=0;i<llp.length;i+=2){
            llp[i] = Math.toRadians(lat);
            llp[i+1] = Math.toRadians(lon);
        }
        currad = 0f;
    }
    
    // Creates n directions in radians around the world
    /**
     * Create array of directions for all points 
     * by evenly dividing circumference between them
     * @param n - number of points
     */
    protected void createDirs(int n){
        dir = new double[n+1];
        double step = Math.PI*2/n;
        for(int i=0;i<n;i++)
            dir[i] = i*step;
        dir[n] = dir[0];
    }

    /**
     * Method for calculation of new coordinates for points approximating
     * spill polygon
     * @param llp - array of points
     * @param dist - distance of spill on one step in NM
     * @param dir - array of spill directions for every point in radians
     * @return - same array with recalculated points's coorinates
     */
    public double[] spill(double[] llp,double dist,double[] dir){
    	double rads = Math.toRadians(dist/60d);
        for(int i=0;i<llp.length;i+=2){
            double fi = llp[i];
            double la = llp[i+1];
            double[] p = GreatCircle.sphericalBetween(fi, la, rads, dir[i/2], 1);
            if(bounds==null || bounds.inBounds(p[2], p[3])){
	            llp[i] = p[2];
	            llp[i+1] = p[3];
            }
        }
        return llp;
    }
    
    /**
     * Spill on one step
     * @param time - elapsed time on one step in hours
     */
    public void spill(double time){
        if(currad<radius){
        	double step = speed*time;
            if(currad+step>radius)
            	step = radius-currad;
            llp = spill(llp,step,dir);
            ((OMPoly)location).setLocation(llp,OMGraphic.RADIANS);
            if(damping>0)
            	speed = speed*(1-damping);
            currad += step;
        }
    }

    /**
     * Change coordinates of this Spill object from the string representation in degrees and minutes:
     * "deg min" and initialize its points to this new location
     * @param dmlat - Latitude as "deg min"
     * @param dmlon - Longitude as "deg min"
     * @throws Exception -
     */
    public void setLocation(String dmlat,String dmlon) throws Exception{
		super.setLocation(dmlat,dmlon);
    	initPoints();
        ((OMPoly)location).setLocation(llp,OMGraphic.RADIANS);
    }
    
    /**
     * Return number of points
     * @return - number of points
     */
    public int getN(){
        return N;  // number of points
    }
    
    /**
     * Current speed of spill
     * @return - speed in knots
     */
    public double getSpeed(){
        return speed;
    }
    
    /**
     * Set new speed of spill
     * @param s - new speed in knots
     */
    public void setSpeed(double s){
        speed = s;
    }
    
    /**
     * Set new damping of spill
     * @param d - new damping from {1 - 0} of spill speed on one hour
     */
    public void setDamping(double d){
        damping = d;
    }
    
    /**
     * Damping of spill
     * @return damping from {1 - 0} of spill speed on one hour
     */
    public double getDamping(){
        return damping;
    }
    
    /**
     * Maximum radius of spill
     * @return - maximum radius in NM
     */
    public double getRadius(){
        return radius;
    }
    
    /**
     * Set new maximum radius
     * @param r - new radius in NM
     */
    public void setRadius(double r){
        radius = r;
    }
    
    /**
     * Array of approximating points's coordinates
     * @return - array of coordinates
     */
    public double[] getLLP(){
        return llp;
    }

    /**
     * Array of directions for points movement
     * @return - array of directions
     */
    public double[] getDir(){
        return dir;
    }
    
    /**
     * Current radius of spill
     * @return - radius in NM
     */
    public double getCurrentRadius(){
        return currad;   // current radius;
    }

    public Bounds getBounds() {
		return bounds;
	}

	public void setBounds(Bounds bounds) {
		this.bounds = bounds;
	}
}
