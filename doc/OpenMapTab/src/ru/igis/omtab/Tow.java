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

import com.bbn.openmap.proj.*;
/**
 * Class supporting tow functionallity
 * @author ru
 */
public class Tow {
    /**
     * whole circle in radians
     */
    public static double Pim2 = Math.PI*2d;         

    MapOb mapOb;
    double angl = 0f; // rad
    double dist = 0f; // rad
    double crs = 0f; // rad
    double course_deg = 0f;
    boolean relative = true;
    Link link = null;

    /**
     * Constructor with all Object type parameters
     * @param mo - Map Object to put on tow
     * @param a - angle from Towing object on towed object in degrees
     * @param d - distance from Towing object on towed object in NM
     * @param r - is towed object must change rotation angle synchronously
     * with towing object
     */
    public Tow(MapOb mo,Float a,Float d,Boolean r){
        mapOb = mo;
        if(mo instanceof NavOb)
            ((NavOb)mo).setSpeed(0);
        if(mo instanceof Link)
            link = (Link)mo;
        if(a!=null)
            setAngle(a.doubleValue());
        if(d!=null)
            setDistance(d.doubleValue());
        if(r!=null)
            relative = r.booleanValue();
    }

    /**
     * Constructor with simple type parameters
     * @param mo - Map Object to put on tow
     * @param a - angle from Towing object on towed object in degrees
     * @param d - distance from Towing object on towed object in NM
     * @param r is towed object must change rotation angle synchronously with towing object
     */
    public Tow(MapOb mo,double a,double d,boolean r){
        mapOb = mo;
        if(mo instanceof NavOb)
            ((NavOb)mo).setSpeed(0);
        if(mo instanceof Link)
            link = (Link)mo;
        setAngle(a);
        setDistance(d);
        relative = r;
    }

    /**
     * Method for towing to appropriate position
     * @param lat - latitude in degrees
     * @param lon - longitude in degrees
     */
    public void tow(double lat,double lon){
        double az = angl;
        if(relative){
            az += crs;
            if(az>Pim2)
                az -= Pim2;
        }
        double[] p = GreatCircle.sphericalBetween(Math.toRadians(lat), Math.toRadians(lon), dist, az, 1);
        if(mapOb instanceof OMTPoly){
        	((OMTPoly) mapOb).tow(p[2], p[3], course_deg);
        } else {
        	mapOb.setLocation(Math.toDegrees(p[2]),Math.toDegrees(p[3]));
        }
    }
    
    protected void towExtended(double lat,double lon){
    	if(!(mapOb instanceof NavOb))
    		tow(lat, lon);
    }

    /**
     * Method to get towed object
     * @return - Map Object
     */
    public MapOb getMapOb(){
        return mapOb;
    }

    /**
     * Method to change angle from towing object to towed object
     * @param deg - new angle in degrees
     */
    public void setAngle(double deg){
        if(deg<0)
            deg += 360f;
        angl = ProjMath.degToRad(deg);
    }

    /**
     * Method to change distance from towing object to towed object
     * @param nm - new distance in NM
     */
    public void setDistance(double nm){
        dist = Math.toRadians(nm/60);
    }
    
    /**
     * Method to change relativeness of rotation angle of towed object
     * @param r - new relative flag
     */
    public void setRelative(boolean r){
        relative = r;
    }
    
    /**
     * Method for turning towed object
     * @param course - new course (int degrees)
     * @parm speed - new speed (double knots)
     * @parm lat - new latitude (double degrees)
     * @parm lon - new longitude (double degrees)
     */
	protected void turn(int course, double speed, double lat, double lon) {
		course_deg = course;
		crs = ProjMath.degToRad(course);
		tow(lat, lon);
		if (mapOb instanceof NavOb){
			((NavOb) mapOb).setCourse(course);
			((NavOb) mapOb).setSpeed(speed);
		} else if (mapOb instanceof OMTArc) {
			((OMTArc) mapOb).setCourse(course);
		}
	}
}
