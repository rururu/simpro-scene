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
import java.util.concurrent.CopyOnWriteArrayList;

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
    public static final String MAP_ERROR = "Error while mapToProtege from navob ";
    
    private double speed;		// speed under control in knots
    private double veticalSpeed;// vertical speed under control in m/s
    private int course;			// course under control in degrees
    private double altitude;		// altitude in meters
    private Object type;
    private long lastClock;
    private NavObFrame navObFrame;
    private Collection<Tow> tows;
    OMScalingIcon omsi;
    
    private CopyOnWriteArrayList<double[]> route;
    private int nextPointIndex;
    private double lastPosTime;
    private double lastLat;
    private double lastLon;
    private double lastLeg;
    private double lastAzi;
    private boolean keepRoute;
    private double rad_hrs;		// speed in radians per hour
    
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
     * Set Vertical Speed from String
     * @param vspeed - Vertical Speed in m/s
     */    
    public void setVerticalSpeed(String vspeed){
        try{
            setVerticalSpeed(Double.parseDouble(vspeed));
        }catch(NumberFormatException nfe){}
    }
    /**
     * Change coordinates of this Nav object in degrees
     * @param latitude - Latitude in degrees
     * @param longitude - Longitude in degrees
     */
	public void setLocation(double latitude, double longitude) {
		if (route != null)
			stopRoute();
		super.setLocation(latitude, longitude);
		towExtended();
		updateNavObFrame();
		if (playground != null) {
			playground.fireMOEvent(this, Playground.UPD_LOCATION);
		}
	}

    /**
     * Change coordinates of this Nav object from the string representation in degrees and minutes:
     * "deg min"
     * @param dmlat - Latitude as "deg min"
     * @param dmlon - Longitude as "deg min"
     * @throws Exception -
     */
	public void setLocation(String dmlat, String dmlon) throws Exception {
		setLocation(getDeg(dmlat),getDeg(dmlon));
	}
    /**
     * Set Latitude from double
     * @param deglat - latitude in degrees
     */    
	public void setLatitude(double deglat) {
		if (deglat > -90f && deglat < 90f) {
			setLocation(deglat, lon);
		}
	}
    
    /**
     * Set Longitude from double
     * @param deglon - longitude in degrees
     */    
	public void setLongitude(double deglon) {
		if (deglon > -180f && deglon < 180f) {
			setLocation(lat, deglon);
		}
	}
    /**
     * Set Course from int
     * @param deg - course in degrees
     */    
	public void setCourse(int deg) {
		if (nextPointIndex > 0) {
			if (speed > 0) {
				// 24 hours way
				double[] ohw = position(lat, lon, (double) deg, speed * 24);
				goRoute(ohw);
			}
		}
		setCourse0(deg);
	}

	private void setCourse0(int deg) {
		if (course != deg && deg >= 0f && deg < 360f) {
			course = deg;
			mirror(deg);
			((OMRaster) location).setRotationAngle(ProjMath.degToRad(deg));
			updateNavObFrame();
			if (tows != null)
				for (Iterator<Tow> i = tows.iterator(); i.hasNext();) {
					Tow tow = i.next();
					tow.turn(deg, getSpeed(), lat, lon);
				}
			if (playground != null) {
				playground.fireMOEvent(this, Playground.UPD_COURSE);
			}
		}
	}

    /**
     * Set Speed from double
     * @param knots - speed in knots (nautical miles per hour)
     */    
	public void setSpeed(double knots) {
		if (nextPointIndex > 0) {
			// if we are standing in the end of route and start
			if (speed == 0 && nextPointIndex == route.size() && knots > 0) {
				// 24 hours way
				double[] ohw = position(lat, lon, (double) course, knots * 24);
				goRoute(ohw);
			// if we are start or change speed
			} else if (knots > 0 && knots != speed) { 
				speed = 0; // first of all stop
				double latrad = Math.toRadians(lat);
				double lonrad = Math.toRadians(lon);
				double[] here = new double[] {latrad, lonrad};
				// insert new point here and go from it
				route.add(nextPointIndex, here);
				nextPointIndex++;
				lastLat = latrad;
				lastLon = lonrad;
				lastPosTime = Clock.getCurrentTime();
				lastLeg = -1;
			}
		}
		setSpeed0(knots);
	}

	private void setSpeed0(double knots) {
		rad_hrs = Math.toRadians(knots / 60);
		if (speed != knots) {
			speed = knots;
			updateNavObFrame();
			if (tows != null)
				for (Iterator<Tow> i = tows.iterator(); i.hasNext();) {
					Tow tow = i.next();
					tow.turn(getCourse(), knots, lat, lon);
				}
			if (playground != null) {
				playground.fireMOEvent(this, Playground.UPD_SPEED);
			}
		}
	}

    /**
     * Set VerticalSpeed from int
     * @param vspeed - VerticalSpeed in meters per second
     */    
	public void setVerticalSpeed(double vspeed) {
		if (veticalSpeed != vspeed) {
			veticalSpeed = vspeed;
        	lastClock = Clock.getClock() / 1000;
			updateNavObFrame();
			if (playground != null) {
				playground.fireMOEvent(this, Playground.UPD_VERTICAL_SPEED);
			}
		}
	}
	
    /**
     * Method for setting altitude of this object
     * @param altitude - Alitude in meters
     */
	public void setAltitude(int altitude) {
		if (this.altitude != altitude) {
			this.altitude = altitude;
        	lastClock = Clock.getClock() / 1000;
			updateNavObFrame();
			if (playground != null) {
				playground.fireMOEvent(this, Playground.UPD_ALTITUDE);
			}
		}
	}

    /**
     * Return current course
     * @return - current course in degrees
     */    
    public int getCourse(){ // returns deg
        return course;
    }
    
    /**
     * Return current speed
     * @return - current speed in knots
     */    
    public double getSpeed(){ // returns knots
        return speed;
    }
    
    /**
     * Return current vertical speed
     * @return - current vertical speed in meters per second
     */    
    public double getVerticalSpeed(){ // returns meters per second
        return veticalSpeed;
    }
    
    /**
     * Method for altitude of this object
     * @return Altitude in meters
     */
	public int getAltitude() {
		return (int) altitude;
	}
	
    /**
     * Move this object for one step.
     * Simultaneously move objects that this object is towing
     * @param currentTime - Current Time in hours
     */    
	public void move(double currentTime) {
		if (speed > 0) {
			boolean stop_route = false;
			double eltime = currentTime - lastPosTime;
			double way = rad_hrs * eltime;
			if (lastLeg > 0 && way < lastLeg) {
				double[] pos = GreatCircle.sphericalBetween(lastLat, lastLon,
						way, lastAzi, 1);
				super.setLocation(Math.toDegrees(pos[2]), Math.toDegrees(pos[3]));
			} else {
				double[] llci = along(lastLat, lastLon, nextPointIndex, way);
				lastLat = llci[0];
				lastLon = llci[1];
				lastAzi = llci[2];
				nextPointIndex = (int) llci[3];
				super.setLocation(Math.toDegrees(lastLat), Math.toDegrees(lastLon));
				int crs = (int) Math.toDegrees(lastAzi);
				if (crs < 0)
					crs += 360;
				if (crs != course)
					setCourse0(crs);
				lastPosTime = currentTime;
				if (nextPointIndex == route.size()) {
					stop_route = true;
					setSpeed0(0);
					if (!keepRoute)
						initRoute();
					else
						lastLeg = -1;
				} else {
					double[] nextPount = route.get(nextPointIndex);
					lastLeg = GreatCircle.sphericalDistance(lastLat, lastLon, nextPount[0], nextPount[1]);
				}
			}
			if (veticalSpeed != 0) {
				long clock = Clock.getClock() / 1000;
				long elsec = clock - lastClock;
				altitude += veticalSpeed * elsec;
				lastClock = clock;
			}
			towExtended();
			updateNavObFrame();
			if (stop_route && playground != null) {
				playground.fireMOEvent(this, Playground.STOP_ROUTE);
			}
		}
	}

    /**
     * Position, next point, course of object along the route on given distance
     * @param lat1 - latitude of given position of object (rad)
     * @param lon1 - longitude of given position of object (rad)
     * @param iRoute - index of next point of route (int)
     * @param way - distance of relative point from given position (rad)
     * @return - double array of 4: (0) lat, (1) lon, (2) azimuth (double), (3) index of next point of route or -1.
     */
	public double[] along(double lat1, double lon1, int iRoute, double way) {
		double[] point2 = route.get(iRoute);
		double dist12 = GreatCircle.sphericalDistance(lat1, lon1, point2[0], point2[1]);
		double bear12 = GreatCircle.sphericalAzimuth(lat1, lon1, point2[0], point2[1]);
		if (way < dist12) {
			double[] pos = GreatCircle.sphericalBetween(lat1, lon1, way, bear12, 1);
			return new double[] {pos[2], pos[3], bear12, iRoute};
		} else if (iRoute == route.size()-1) {
			return new double[] {point2[0], point2[1], bear12, iRoute+1};
		} else {
			return along(point2[0], point2[1], iRoute+1, way-dist12);
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
            navObFrame.setVerticalSpeed(getVerticalSpeed());
        }
    }
    
    /**
     * Setting main attributies of this object from slot values of
     * corresponding Protege Instance
     * @param instance - Protege Instance representing this Navigating Object
     */    
    public void mapFromProtege(Instance instance) {
        // create route
        initRoute();
        keepRoute = false;
        fromSlotTYPE(instance);
        fromSlotCOURSE(instance);
        fromSlotALTITUDE(instance);
        fromSlotSPEED(instance);
        fromSlotVSPEED(instance);
        fromSlotTOW(instance);
        fromSlotICON_SCALE(instance);
        fromSlotURL(instance);
    }
    
    protected void fromSlotICON_SCALE(Instance instance){
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
    protected void fromSlotTYPE(Instance instance){
        type = instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_TYPE));
    }
    protected void fromSlotCOURSE(Instance instance){
        Integer crs = (Integer)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_COURSE));
        if(crs!=null)
            setCourse(crs.intValue());
    }
    protected void fromSlotALTITUDE(Instance instance){
        Integer alt = (Integer)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_ALTITUDE));
        if(alt!=null)
            setAltitude(alt.intValue());
    }
    protected void fromSlotSPEED(Instance instance){
        Float spd = (Float)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_SPEED));
        if(spd!=null) 
            setSpeed(spd.doubleValue());
    }
    protected void fromSlotVSPEED(Instance instance){
        Float vsp = (Float) instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_VERTICAL_SPEED));
        if(vsp!=null) 
            setVerticalSpeed(vsp.floatValue());
    }
    @SuppressWarnings("unchecked")
    protected void fromSlotTOW(Instance instance){
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
        Float vspeed = new Float(getVerticalSpeed());
       	instance.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_VERTICAL_SPEED),vspeed);
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
     * Call RuNA method execMission with this object as argument
     */    
    public void execMission(){
        OMT.execMission(this);
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
		playground.manageGraphics();
    }
    protected void setFormLongitude(String dmlon){
		setLongitude(dmlon);
		reflect();
		playground.manageGraphics();
    }
    protected void setFormCourse(String course){
		setCourse(course);
		reflect();
		playground.manageGraphics();
    }
    protected void setFormAltitude(String altitude){
		setAltitude(altitude);
		reflect();
		playground.manageGraphics();
    }
    protected void setFormSpeed(String speed){
   		setSpeed(speed);
		reflect();
		playground.manageGraphics();
    }
    protected void setFormVerticalSpeed(String vspeed){
   		setVerticalSpeed(vspeed);
		reflect();
		playground.manageGraphics();
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
	
	private void initRoute() {
        route = new CopyOnWriteArrayList<double[]>();
        route.add(new double[]{ Math.toRadians(lat), Math.toRadians(lon) });
        nextPointIndex = 1;
        lastLeg = -1;
	}
	
	/**
     * Set further route for this NavOb
     * @param iwp - instance with slot "points"
     */    
	@SuppressWarnings("unchecked")
	public void goRoute(Instance iwp)
	{
		goRoute(iwp.getOwnSlotValues(OpenMapTab.kb.getSlot(Ontology.S_POINTS)));
	}
	/**
     * Set further route for this NavOb
     * @param points - points of route {"lat_deg lat_min lon_deg lon_min"}
     */    
	public void goRoute(Collection<String> points)
	{
		CopyOnWriteArrayList<double[]> alrte = new CopyOnWriteArrayList<double[]>();
		for(String s: points) {
            StringTokenizer st = new StringTokenizer(s);
            try{
                double lat = Math.toRadians(MapOb.getDeg(st.nextToken()+" "+st.nextToken()));
                double lon = Math.toRadians(MapOb.getDeg(st.nextToken()+" "+st.nextToken()));
    			alrte.add(new double[]{lat, lon});
            }catch(Exception exc){}
		}
		goRouteRad(alrte);
	}
	/**
     * Set further route for this NavOb
     * @param lat - latitude of single route point
     * @param lon - longitude of single route point
     */    
	public void goRoute(double lat, double lon)
	{
		goRoute(new double[]{lat, lon});
	}
	/**
     * Set further route for this NavOb
     * @param poly - OMTPoly whose points would be route
     */    
	public void goRoute(OMTPoly poly)
	{
		goRouteRad(poly.getLLPoints());
	}
	/**
     * Set further route for this NavOb
     * @param rte - route in degrees
     */
	public void goRoute(double[] rte) {
		goRouteRad(ProjMath.arrayDegToRad(rte));
	}
	/**
     * Set further route for this NavOb
     * @param lla - LatLonArray (deg) of route points
     */    
	public void goRouteRad(double[] lla)
	{
		CopyOnWriteArrayList<double[]> alrte = new CopyOnWriteArrayList<double[]>();
		for(int k=0;k<lla.length;k+=2) {
			double lat = lla[k];
			double lon = lla[k+1];
    		alrte.add(new double[]{lat, lon});
		}
		goRouteRad(alrte);
	}
	/**
     * Set further route for this NavOb
     * @param rte - route in radians
     */    
	private void goRouteRad(CopyOnWriteArrayList<double[]> rte) {
		if (rte.size() > 0) {
			double spd = speed;
			speed = 0;
			route.removeAll(route.subList(nextPointIndex, route.size()));
			double latrad = Math.toRadians(lat);
			double lonrad = Math.toRadians(lon);
			if (spd > 0) {
				route.add(nextPointIndex, new double[] {latrad, lonrad});
				nextPointIndex++;
			}
			route.addAll(rte);
			lastLat = latrad;
			lastLon = lonrad;
			lastPosTime = Clock.getCurrentTime();
			lastLeg = -1;
			speed = spd;
			if (playground != null) {
				playground.fireMOEvent(this, Playground.UPD_ROUTE);
			}
		}
	}
	/**
     * Stop this NavOb and cut further route
     */    
	public void stopRoute() {
		setSpeed0(0);
		route.removeAll(route.subList(nextPointIndex, route.size()));
		route.add(nextPointIndex, new double[] { Math.toRadians(lat), Math.toRadians(lon) });
		nextPointIndex++;
		lastLat = Math.toRadians(lat);
		lastLon = Math.toRadians(lon);
		lastPosTime = Clock.getCurrentTime();
	}
	/**
     * Put log point of route as points of
     * @param poly - OMTPoly
     * @param length - number of points from NavOb (-1 - all points)
     */
	public void putLog(OMTPoly poly, int length) {
		poly.setLLPoints(log(length));
	}
	
	/**
     * Put log point of route as points of
     * @param poly - Instance of class "OMTPoly"
     * @param length - number of points from NavOb (-1 - all points)
     */
	public void putLog(Instance poly, int length) {
		poly.setOwnSlotValues(OpenMapTab.kb.getSlot(Ontology.S_POINTS), 
				OMTPoly.getDMPoints(log(length)));
	}
	
	/**
     * Put rest of route as points of
     * @param poly - OMTPoly
     */
	public void putRestOfRoute(OMTPoly poly) {
		poly.setLLPoints(restOfRoute());
	}
	
	/**
     * Log point of route
     * @param length - number of points from NavOb (-1 - all points)
     * @return log points
     */
	public double[] log(int length) {
		if(nextPointIndex > 0) {
			List<double[]> log = route.subList(0, nextPointIndex);
			if(speed > 0)
				log.add(new double[]{ Math.toRadians(lat), Math.toRadians(lon) });
			double[] llp = Util.flatten(log);
			ProjMath.arrayRadToDeg(llp);
			length = length * 2;
			if(length < 0 || length > llp.length)
				return Arrays.copyOf(llp, llp.length);
			else
				return Arrays.copyOfRange(llp, llp.length-length, llp.length);
		} else
			return null;
	}

	/**
     * Rest points of route (further points)
     * @return array of points
     */
	public double[] restOfRoute() {
		if(nextPointIndex > 0) {
			List<double[]> ror = route.subList(nextPointIndex, route.size());
			double[] llp = Util.flatten(ror);
			return ProjMath.arrayRadToDeg(llp);
		} else
			return null;
	}	
    /**
     * Relative point on some bearing and distance from given point
     * @param lat - latitude of given point (degrees)
     * @param lon - longitude of given point (degrees)
     * @param bear - bearing of relative point (degrees)
     * @param dist - distance of relative point from given point (NM)
     * @return - array of two numbers - latitude and longitude (degrees)
     */
    public static double[] position(double lat, double lon, double bear, double dist){
        double c = Math.toRadians(dist/60);
        double az = Math.toRadians(bear); // bear in rad
        double fi = Math.toRadians(lat);
        double la = Math.toRadians(lon);
        double[] p = GreatCircle.sphericalBetween(fi, la, c, az, 1);
        return new double[]{Math.toDegrees(p[2]), Math.toDegrees(p[3])};
    }
	/**
     * @return points of current route
     */
	public CopyOnWriteArrayList<double[]> getRoute() {
		return route;
	}

	/**
     * @return index of next point of route
     */
	public int getNextPointIndex() {
		return nextPointIndex;
	}

	/**
     * @return time (hours) of last point pass
     */
	public double getLastPosTime() {
		return lastPosTime;
	}

	/**
     * Keeping route means accumulation of log after passing every route
     * @return keeping status
     */
	public boolean isKeepRoute() {
		return keepRoute;
	}

	/**
     * Keeping route means accumulation of log after passing every route
     * @param keepRoute - keeping ststus
     */
	public void setKeepRoute(boolean keepRoute) {
		this.keepRoute = keepRoute;
	}
	/**
     * Calculate a route along the Great Circle 
     * @param from_lat - latitude of initial point
     * @param from_lon - longitude of initial point
     * @param to_lat - latitude of destination point
     * @param to_lon - longitude of destination point
     * @param step - distance between points in NM
     * @return array of route points in degrees
     */
	public static double[] greatCircleRoute(double from_lat, double from_lon, double to_lat, double to_lon, double step){
		double dist = MapOb.distanceNM(from_lat, from_lon, to_lat, to_lon);
		if(dist <= step)
			return new double[]{to_lat, to_lon};
		else {
			int n = (int) (dist / step);
			double[] gc = GreatCircle.greatCircle(Math.toRadians(from_lat), Math.toRadians(from_lon), Math.toRadians(to_lat), Math.toRadians(to_lon), n, true);
			ProjMath.arrayRadToDeg(gc);
			return Arrays.copyOfRange(gc, 2, gc.length);
		}
	}
}
