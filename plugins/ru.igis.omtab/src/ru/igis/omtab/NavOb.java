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

import com.bbn.openmap.proj.*;
import com.bbn.openmap.omGraphics.*;

import edu.stanford.smi.protege.model.*;
/**
 * Navigating Object class
 * @author Ru
 */
public class NavOb extends OMTRaster {
    
    /**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	
	/**
     * one arc minute in radians
     */    
    public static double Pi10800 = Math.PI/10800d;
    public static double Pi180 = Math.PI/180d;
    public static final String MAP_ERROR = "Error while mapToProtege from navob ";
    
    private double speed;		// speed under control in knots
    private double speed2;		// speed used for movement in knots
    private double tangage;		// tangage under control in degrees
    private double tangage2;	// tangage used for movement in degrees
    private int course;			// course under control in degrees
    private int altitude;		// altitude in meters
    private double direction;	// direction in radians corresponding to course
    private double direction2;	// direction in radians used for movement
    private Object type;
    private double lastTurnTime = -1;
    private double lastTurnLat;
    private double lastTurnLon;
    private int lastTurnAlt;
    private NavObFrame navObFrame;
    private Collection<Tow> tows;
    OMScalingIcon omsi;
    
    // Before the last turn parameters
	private double speed3;
	private double lastTurnTime3;
	private double lastTurnLat3;
	private double lastTurnLon3;
	private double direction3;
    
    // Before before the last turn parameters
	private double speed4;
	private double lastTurnTime4;
	private double lastTurnLat4;
	private double lastTurnLon4;
	private double direction4;
    
    /** Creates a new instance of MapOb */
    public NavOb(){
    }

    /**
     * Constructor that creates Navigating object from Protege Instance
     * @param instance - Instance of this Navigating object
     * @throws Exception -
     */    
    public NavOb(Instance instance) throws Exception {
        super(instance);
        mapFromProtege(instance);
     }
    
    /**
     * Fabric method that creates Navigating Object from String parameters
     * @param label -
     * @param type -
     * @param latitude -
     * @param longitude -
     * @param altitude -
     * @param course -
     * @param speed -
     * @param url - path to Navigating Object Image Icon file
     * @throws Exception -
     * @return - created new Navigating Object
     */    
    public static NavOb createNavOb(
        String label,
        String type,
        String latitude,
        String longitude,
        String altitude,
        String course,
        String speed,
        String url
    ) throws Exception {
        Cls cls = OpenMapTab.kb.getCls(Ontology.C_NAVOB);
        if(cls!=null){
            Instance inst = OpenMapTab.kb.createInstance(null,cls);
            if(inst!=null){
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LABEL),label);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_TYPE),type);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LATITUDE),latitude);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LONGITUDE),longitude);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_ALTITUDE),new Integer(altitude));
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_COURSE),new Integer(course));
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_SPEED),new Float(speed));
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_URL),url);
                return new NavOb(inst);
            }
        }
        return null;
    }
    
    /**
     * Set Latitude from String
     * @param dmlat - latitude string in form "degrees minutes"
     */    
    public void setLatitude(String dmlat){
        try{
            setLatitude(getDeg(dmlat));
        }catch(Exception nfe){}
    }

    /**
     * Set Longitude from String
     * @param dmlon - longitude string in form "degrees minutes"
     */    
    public void setLongitude(String dmlon){
        try{
            setLongitude(getDeg(dmlon));
        }catch(Exception nfe){}
    }

    /**
     * Set Course from String
     * @param course - course in form "degrees"
     */    
    public void setCourse(String course){
        try{
            setCourse(Integer.parseInt(course));
        }catch(NumberFormatException nfe){}
    }
    /**
     * Set Altitude from String
     * @param altitude - course in form "meters"
     */    
    public void setAltitude(String altitude){
        try{
            setAltitude(Integer.parseInt(altitude));
        }catch(NumberFormatException nfe){}
    }
    /**
     * Set Speed from String
     * @param speed - speed in form "knots"
     */    
    public void setSpeed(String speed){
        try{
            setSpeed(Float.parseFloat(speed));
        }catch(NumberFormatException nfe){}
    }
    /**
     * Set Tangage from String
     * @param tangage - tangage in form "degrees"
     */    
    public void setTangage(String tangage){
        try{
            setTangage(Float.parseFloat(tangage));
        }catch(NumberFormatException nfe){}
    }
    /**
     * Set Latitude from double
     * @param deglat - latitude in degrees
     */    
    public void setLatitude(double deglat){
        if(deglat>-90f && deglat<90f){
            setLocation(deglat,lon);
            updateRPNOF();
            OMT.fireMOEvent(this, OMT.UPDATED);
        }
    }
    
    /**
     * Set Longitude from double
     * @param deglon - longitude in degrees
     */    
    public void setLongitude(double deglon){
        if(deglon>-180f && deglon<180f){
            setLocation(lat,deglon);
            updateRPNOF();
            OMT.fireMOEvent(this, OMT.UPDATED);
        }
    }
    
    /**
     * Change coordinates of this Nav object from the string representation in degrees and minutes:
     * "deg min"
     * @param dmlat - Latitude as "deg min"
     * @param dmlon - Longitude as "deg min"
     * @throws Exception -
     */
    public void setLocation(String dmlat,String dmlon) throws Exception{
    	super.setLocation(dmlat,dmlon);
    	updateRPNOF();
        OMT.fireMOEvent(this, OMT.UPDATED);
    }
    
    public void updateRPNOF(){
        lastTurnLat = ProjMath.degToRad(lat);
        lastTurnLon = ProjMath.degToRad(lon);
        lastTurnTime = Clock.getCurrentTime();
        updateNavObFrame();
    }
    
    /**
     * Set Course from int
     * @param deg - course in degrees
     */    
    public void setCourse(int deg){
        if(deg>=0f && deg<360f){
        	course = deg;
        	direction = ProjMath.degToRad(deg);
        	mirror(deg);
            ((OMRaster)location).setRotationAngle(direction);
            updateNavObFrame();
            if(tows!=null)
                for(Iterator<Tow> i=tows.iterator();i.hasNext();){
                    Tow tow = i.next();
                    tow.turn(deg, getSpeed(), lat, lon);
                }
            OMT.fireMOEvent(this, OMT.UPDATED);
        }
    }
    /**
     * Set Speed from double
     * @param knots - speed in knots (nautical miles per hour)
     */    
    public void setSpeed(double knots){
        speed = knots;
        updateNavObFrame();
        if(tows!=null)
            for(Iterator<Tow> i=tows.iterator();i.hasNext();){
                Tow tow = i.next();
                tow.turn(getCourse(), knots, lat, lon);
            }
        OMT.fireMOEvent(this, OMT.UPDATED);
    }
    /**
     * Set Tangage from double
     * @param angle - tangage in degrees
     */    
    public void setTangage(double angle){
        tangage = angle;
        updateNavObFrame();
        OMT.fireMOEvent(this, OMT.UPDATED);
    }
    /**
     * Return current course
     * @return - current course in degrees
     */    
    public int getCourse(){ // returns deg
        return course;
    }
    /**
     * Return current course
     * @return - current course in radians
     */    
    public double getCourseRad(){ // returns rad
        return direction;
    }
    /**
     * Return current speed
     * @return - current speed in knots
     */    
    public double getSpeed(){ // returns knots
        return speed;
    }
    public double getTangage(){ // returns knots
        return tangage;
    }
    /**
     * Return coordinates of object for given time (after last turn or before the last turn)
     * @param time - operation time in hours (ex. Clock.getCurrentTime())
     * @return - [latitude, longitude]
     */    
    public double[] placeByTime(double time){
    	if(time >= lastTurnTime){
	        double c = speed2*(time-lastTurnTime)*Pi10800; // trip in rad
	        double[] p = GreatCircle.sphericalBetween(lastTurnLat, lastTurnLon, (double)c, direction2, 1);
	        double lat = p[2]/Pi180;
	        double lon = p[3]/Pi180;
	    	return new double[]{lat, lon};
    	} else if(time >= lastTurnTime3){
	        double c = speed4*(time-lastTurnTime3)*Pi10800; // trip in rad
	        double[] p = GreatCircle.sphericalBetween(lastTurnLat3, lastTurnLon3, (double)c, direction3, 1);
	        double lat = p[2]/Pi180;
	        double lon = p[3]/Pi180;
	    	return new double[]{lat, lon};
    	} else {
	        double c = speed4*(time-lastTurnTime4)*Pi10800; // trip in rad
	        double[] p = GreatCircle.sphericalBetween(lastTurnLat4, lastTurnLon4, (double)c, direction4, 1);
	        double lat = p[2]/Pi180;
	        double lon = p[3]/Pi180;
	    	return new double[]{lat, lon};
    	}
    }
    
    /**
     * Move this object for one step.
     * Calculate time elapsed from last change of course/speed and
     * corresponding way. After that calculate new coordinates of
     * this object and remove it in this location.
     * Simaltaniously move objects that this object is towing
     * @param currentTime - Current Time in hours
     */    
    public void move(double currentTime){
        if(lastTurnTime<0){
            setLatitude(lat);
            setLongitude(lon);
        }
        // change reference point if course or speed changed
        if(direction2 != direction || speed2 != speed || tangage2 != tangage){
            // Store last turn parameters
            lastTurnTime4 = lastTurnTime3;
            lastTurnLat4 = lastTurnLat3;
            lastTurnLon4 = lastTurnLon3;
        	direction4 = direction3;
        	speed4 = speed3;
            lastTurnTime3 = lastTurnTime;
            lastTurnLat3 = lastTurnLat;
            lastTurnLon3 = lastTurnLon;
        	direction3 = direction2;
        	speed3 = speed2;
        	// Update last turn parameters
            lastTurnLat = ProjMath.degToRad(lat);
            lastTurnLon = ProjMath.degToRad(lon);
            lastTurnAlt = altitude;
            lastTurnTime = currentTime;
            if(direction2 != direction){
                direction2 = direction;
            }
            if(speed2 != speed){
                speed2 = speed;
            }
            if(tangage2 != tangage){
            	tangage2 = tangage;
            }
        }
        if (speed2 > 0f) {
            double c = speed2*(currentTime-lastTurnTime)*Pi10800; // trip in rad
            double[] p = GreatCircle.sphericalBetween(lastTurnLat, lastTurnLon, (double)c, direction2, 1);
            double lat = p[2]/Pi180;
            double lon = p[3]/Pi180;
            setLocation(lat,lon);
            if (tangage2 != 0) {
            	double cm = c/Pi180*60*1852; //trip in meters
            	double da = cm * Math.tan(tangage2*Pi180);
            	altitude = lastTurnAlt + (int) Math.round(da);
            }
            // tow extended objects if speed > 0
            if (speed2 > 0f)
            	towExtended();
            updateNavObFrame();
        }
    }
    
	protected void towExtended() {
		if (tows!=null && !tows.isEmpty()) {
			for (Iterator<Tow> i = tows.iterator(); i.hasNext();) {
				Tow tow = i.next();
				tow.towExtended(lat, lon);
			}
		}
	}
    
    /**
     * Create NavObFrame for this object to control it
     */    
    public void control(){
        navObFrame = new NavObFrame(this);
        navObFrame.pack();
        navObFrame.setSize(200,220);
        navObFrame.setVisible(true);
        updateNavObFrame();
        OMT.fireMOEvent(this, OMT.UPDATED);
    }
    
    /**
     * Update NavObFrame by refreshing its fields: latitude,
     * longitude, course, speed
     */    
    public void updateNavObFrame(){
        if(navObFrame!=null){
            navObFrame.setLat(getLatitudeDM());
            navObFrame.setLon(getLongitudeDM());
            navObFrame.setCourse(getCourse());
            navObFrame.setAltitude(getAltitude());
            navObFrame.setSpeed(getSpeed());
            navObFrame.setTangage(getTangage());
        }
    }
    
    /**
     * Setting main attributies of this object from slot values of
     * corresponding Protege Instance
     * @param instance - Protege Instance representing this Navigating Object
     */    
    public void mapFromProtege(Instance instance) {
        fromSlotTYPE(instance);
        fromSlotCOURSE(instance);
        fromSlotALTITUDE(instance);
        fromSlotSPEED(instance);
        fromSlotTANGAGE(instance);
        fromSlotTOW(instance);
        fromSlotICON_SCALE(instance);
        fromSlotURL(instance);
    }
    public void fromSlotICON_SCALE(Instance instance){
        Instance is = (Instance) instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_ICON_SCALE));
        if(is!=null && directImage!=null){
            Float bass = (Float) is.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_BASIC_SCALE));
            Float mins = (Float) is.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_MIN_SCALE));
            Float maxs = (Float) is.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_MAX_SCALE));
            omsi = new OMScalingIcon(lat, lon, directImage);
            omsi.setBaseScale(bass);
            omsi.setMinScale(mins);
            omsi.setMaxScale(maxs);
            omsi.putAttribute(OMGraphicConstants.LABEL, new OMTextLabeler(name, OMText.JUSTIFY_LEFT,
                                                                          OMTextLabeler.ANCHOR_RIGHT));
            setLocationMarker(omsi);
            setLabel(new OMText(lat, lon, 0, 0, "", OMText.JUSTIFY_LEFT));
        }
    }
    public void fromSlotTYPE(Instance instance){
        type = instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_TYPE));
    }
    public void fromSlotCOURSE(Instance instance){
        Integer crs = (Integer)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_COURSE));
        if(crs!=null)
            setCourse(crs.intValue());
    }
    public void fromSlotALTITUDE(Instance instance){
        Integer alt = (Integer)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_ALTITUDE));
        if(alt!=null)
            setAltitude(alt.intValue());
    }
    public void fromSlotSPEED(Instance instance){
        Float spd = (Float)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_SPEED));
        if(spd!=null) 
            setSpeed(spd.doubleValue());
    }
    public void fromSlotTANGAGE(Instance instance){
        Float tng = (Float)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_TANGAGE));
        if(tng!=null) 
            setTangage(tng.doubleValue());
    }
    @SuppressWarnings("unchecked")
	public void fromSlotTOW(Instance instance){
        Collection<Instance> towinss = instance.getOwnSlotValues(OpenMapTab.kb.getSlot(Ontology.S_TOW));
        if(!towinss.isEmpty()){
            tows = null;
            for(Iterator<Instance> i=towinss.iterator();i.hasNext();){
                Instance tins = i.next();
                Collection<Instance> moinss = tins.getOwnSlotValues(OpenMapTab.kb.getSlot(Ontology.S_MAPOB));
                Float angl = (Float)tins.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_ANGLE));
                Float dist = (Float)tins.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_DISTANCE));
                Boolean rel = (Boolean)tins.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_RELATIVE));
                for(Iterator<Instance> j= moinss.iterator();j.hasNext();){
                    Instance moins = j.next();
                    MapOb mo = OMT.addMapOb(moins);
                    Tow tow = new Tow(mo,angl,dist,rel);
                    addTow(tow);
                }
            }
            towExtended();
        }
    }
    /**
     * Returning Back to Protege changed attributies of this
     * Navigatin object
     * @param instance - Protege Instance describing this object
     */    
    public void mapToProtege(Instance instance) {
		super.mapToProtege(instance);
		// set back coordinates
//    	mapLatToProtege(instance);
//    	mapLonToProtege(instance);
        // set back course and speed
        Integer course = new Integer(getCourse());
       	instance.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_COURSE),course);
        Integer alt = new Integer(getAltitude());
       	instance.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_ALTITUDE),alt);
        Float speed = new Float(getSpeed());
       	instance.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_SPEED),speed);
        Float tangage = new Float(getTangage());
       	instance.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_TANGAGE),tangage);
		// set back tow objects
        if(tows!=null)
            for(Iterator<Tow> i=tows.iterator();i.hasNext();){
                Tow tow = i.next();
                MapOb mo = tow.getMapOb();
                Instance inst = mo.getInstance();
                mo.mapToProtege(inst);
            }
    }
//    public void mapLatToProtege(Instance instance){
//        String latitude = getLatitudeDM();
//        String oldlat = (String) instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LATITUDE));
//        if(oldlat==null || !oldlat.equals(latitude))
//        	instance.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LATITUDE),latitude);
//    }
//    public void mapLonToProtege(Instance instance){
//        String longitude = getLongitudeDM();
//        String oldlon = (String) instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LONGITUDE));
//        if(oldlon==null || !oldlon.equals(longitude))
//        	instance.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LONGITUDE),longitude);
//    }
    /**
     * Call RuNA method execTask with this object as argument
     */    
    public void execTask(){
        OMT.execTask(this);
    }
    
    /**
     * Add new Tow object to this object.
     * Set its course and coordinates to those of this object
     * @param tow - Tow object
     */    
	public synchronized void addTow(Tow tow){
        if(tows==null)
            tows = Collections.synchronizedList(new ArrayList<Tow>());
        tows.add(tow);
        tow.turn(getCourse(), getSpeed(), lat, lon);
    }
    
    /**
     * Remove Tow object for Map Object from this Navigating Object
     * @param mo - Map Object on tow just now
     */    
    public synchronized void removeTow(MapOb mo){
        if(tows!=null)
            for(Iterator<Tow> i=tows.iterator();i.hasNext();){
                Tow tow = i.next();
                if(tow.getMapOb()==mo){
                	mo.setWhoTows(null);
                    i.remove();
                    return;
                }
            }
    }
    
    /**
     * Put Map Object on tow in new position relative to this object
     * that is defined by angle
     * @param mo - Map object on tow
     * @param a - angle in degrees
     */    
    public void setTowAngle(MapOb mo,double a){
        if(tows!=null)
            for(Iterator<Tow> i=tows.iterator();i.hasNext();){
                Tow tow = i.next();
                if(tow.getMapOb()==mo){
                    tow.setAngle(a);
                    return;
                }
            }
    }
    
    /**
     * Put Map Object on tow in new position relative to this object
     * that is defined by distance
     * @param mo - Map Object on tow
     * @param d - distance in nautical miles
     */    
    public void setTowDistance(MapOb mo,double d){
        if(tows!=null)
            for(Iterator<Tow> i=tows.iterator();i.hasNext();){
                Tow tow = i.next();
                if(tow.getMapOb()==mo){
                    tow.setDistance(d);
                    return;
                }
            }
    }
    
    /**
     * Remove all tows at once
     */    
    public synchronized void clearTows(){
    	if(tows != null)
    		tows.clear();
    }
    
    /**
     * Return all current tows
     * @return - Collection of current tows
     */    
    public Collection<Tow> getTows(){
        return tows;
    }

	/**
     * Get Map Object on tow by this navob 
     * Both objects must be on a map
     * @param mo - Map Object 
     * @param angle - tow angle
     * @param distance - tow distance
     * @param relative - if tow relative to this navov course
     * @return true if success
     */    
    public boolean onTow(MapOb mo, double angle, double distance, boolean relative)
    {
    	if(mo.getWhoTows() != null)
    		return false;
    	if(OMT.getMapOb(instance) != null && OMT.getMapOb(mo.instance) != null)
    	{
	    	addTow(new Tow(mo, angle, distance, relative));
	    	mo.setWhoTows(this);
	    	return true;
    	}
    	else
    		return false;
    }
       
    /**
     * Return type of this object
     * @return - String containing type
     */    
    public Object getType(){
        return type;
    }
    protected void setFormLatitude(String dmlat){
   		setLatitude(dmlat);
		reflect();
		OMT.playgrounds[pgid].manageGraphics();
    }
    protected void setFormLongitude(String dmlon){
		setLongitude(dmlon);
		reflect();
		OMT.playgrounds[pgid].manageGraphics();
    }
    protected void setFormCourse(String course){
		setCourse(course);
		reflect();
		OMT.playgrounds[pgid].manageGraphics();
    }
    protected void setFormAltitude(String altitude){
		setAltitude(altitude);
		reflect();
		OMT.playgrounds[pgid].manageGraphics();
    }
    protected void setFormSpeed(String speed){
   		setSpeed(speed);
		reflect();
		OMT.playgrounds[pgid].manageGraphics();
    }
    protected void setFormTangage(String angle){
   		setTangage(angle);
		reflect();
		OMT.playgrounds[pgid].manageGraphics();
    }
	public void reflect(){
    	if(OpenMapTab.reflectNavOb)
    		try {
				mapToProtege(instance);
			} catch (Exception e) {
				System.out.println(MAP_ERROR+getName());
			}
	}
	
    /**
     * Check if point abaft the beam
     * @param lat - latitude of point in degrees
     * @param lon - longitude of point in degrees
     * @return true if abaft
     */    
	public boolean abaft(double lat, double lon)
	{
		double bear = bearingsDeg(lat, lon);
		double ca = Math.abs(bear - getCourse());
		return ( ca > 90f && ca < 270f );
	}

    /**
     * Check if Map Object abaft the beam
     * @param mo - Map Object
     * @return true if abaft
     */    
	public boolean abaft(MapOb mo)
	{
		double bear = bearingsDeg(mo);
		double ca = Math.abs(bear - getCourse());
		return ( ca > 90f && ca < 270f );
	}

    /**
     * Check if point near then radius
     * @param lat - latitude of point in degrees
     * @param lon - longitude of point in degrees
     * @param radius - radius in nautical miles
     * @return true if near
     */    
	public boolean near(double lat, double lon, double radius)
	{
		double dist = distanceNM(lat, lon);
		return ( dist < radius );
	}

	/**
     * Check if Map Object near then radius
     * @param mo - Map Object
     * @param radius - radius in nautical miles
     * @return true if near
     */    
	public boolean near(MapOb mo, double radius)
	{
		double dist = distanceNM(mo);
		return ( dist < radius );
	}
	
    /**
     * Method for altitude of this object
     * @return Altitude in meters
     */
	public int getAltitude() {
		return altitude;
	}
    /**
     * Method for setting altitude of this object
     * @param altitude - Alitude in meters
     */
	public void setAltitude(int altitude) {
		this.altitude = altitude;
		updateNavObFrame();
	}
}
