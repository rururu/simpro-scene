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
import java.text.*;

import com.bbn.openmap.proj.*;
import com.bbn.openmap.layer.location.*;
import com.bbn.openmap.omGraphics.*;

import edu.stanford.smi.protege.model.*;
/**
 * Base class for all Map Objects
 * @author Ru
 */
public class MapOb extends BasicLocation implements Protegian{
    /**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	
	/**
     * Decimal format for representation of minutes
     */
    public static DecimalFormat df = new DecimalFormat("##.##",new DecimalFormatSymbols(Locale.US));
    
    /**
     * variable for store of instance for this Map Object
     */
    protected Instance instance;
    
    private NavOb whoTows;
    private Collection<Link> linksToMe;
    protected int pgid = -1; // Playground index

    public int getPgid() {
		return pgid;
	}

	/** Creates a new instance of MapOb */
    public MapOb() {
    }
    
    /**
     * Creates Map Object from the Protege Instance
     * @param instance - Protege instance
     * @throws Exception -
     */
    public MapOb(Instance instance) throws Exception {
        this.instance = instance;
        setName((String)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LABEL)));
        setLabel(new OMText(lat, lon, 0, 0, name, OMText.JUSTIFY_LEFT));
        putLocationMarker();
    }
    
    protected void putLocationMarker(){
        setLocationMarker(new OMPoint(lat, lon));
    }
    
    public void setLabelText(String text){
        setLabel(new OMText(lat, lon, 0, 0, text, OMText.JUSTIFY_LEFT));
    }
    
    /**
     * Fabric method for the Map Object creation
     * @param label - name of Map Object
     * @param latitude -
     * @param longitude -
     * @throws Exception -
     * @return - created Map Object
     */
    public static MapOb createMapOb(
        String label,
        String latitude,
        String longitude
    ) throws Exception {
        Cls cls = OpenMapTab.kb.getCls(Ontology.C_MAPOB);
        if(cls!=null){
            Instance inst = OpenMapTab.kb.createInstance(null,cls);
            if(inst!=null){
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LABEL),label);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LATITUDE),latitude);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LONGITUDE),longitude);
                return new MapOb(inst);
            }
        }
        return null;
    }

    /**
     * Corresponding to this Map Object Protege Instance
     * @return - Protege Instance
     */
    public Instance getInstance(){
        return instance;
    }
    
    /**
     * Set location of this Map Object to coordinates from Protege Instance
     * @param instance - Protege Instance
     * @throws Exception - plain
     */
    public void coordFromProtege(Instance instance) throws Exception{
        // set coordinates
        String latitude = (String)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LATITUDE));
        String longitude = (String)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LONGITUDE));
        if(latitude!=null && longitude!=null)
            setLocation(latitude,longitude);
    }
    
    /**
     * Rewrite information from Protege Instance to this object.
     * In this base case only coordinates.
     * @param instance - Protege Instance
     */
    public void mapFromProtege(Instance instance) {
    }
    
    /**
     * Send back to Protege Instance information from this Map Object
     * @param instance - Protege Instance
     */
    public void mapToProtege(Instance instance) {
        // set back coordinates
        String latitude = getLatitudeDM();
        instance.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LATITUDE),latitude);
        String longitude = getLongitudeDM();
        instance.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LONGITUDE),longitude);
    }
    
    /**
     * Latitude of this Map Object as double value
     * @return - Latitude in degrees
     */
    public double getLatitude() {
        return lat;
    }
    
    /**
     * Longitude of this Map Object as double value
     * @return - Longitude in degrees
     */
    public double getLongitude() {
        return lon;
    }
    
    /**
     * Change coordinates of this Map object from the string representation in degrees and minutes:
     * "deg min"
     * @param dmlat - Latitude as "deg min"
     * @param dmlon - Longitude as "deg min"
     * @throws Exception - plain
     */
    public void setLocation(String dmlat,String dmlon) throws Exception{
        setLocation(getDeg(dmlat),getDeg(dmlon));
    }
    
    /**
     * Get string representation of Latitude in degrees and minutes
     * @return - Latitude as "deg min"
     */
    public String getLatitudeDM(){ // returns deg min
        return getDegMin(getLatitude());
    }

    /**
     * Get string representation of Longitude in degrees and minutes
     * @return - Longitude as "deg min"
     */
    public String getLongitudeDM(){ // returns deg min
        return getDegMin(getLongitude());
    }
    
    // return distance in Nautical Miles
    /**
     * Distance in nautical miles beetwin to points
     * @param lat1 - Latitude 1 in degrees
     * @param lon1 - Longitude 1 in degrees
     * @param lat2 - Latitude 2 in degrees
     * @param lon2 - Longitude 2 in degrees
     * @return - Distance in nautical miles
     */
    public static double distanceNM(double lat1,double lon1,double lat2,double lon2){
        lat1 = Math.toRadians(lat1);
        lon1 = Math.toRadians(lon1);
        lat2 = Math.toRadians(lat2);
        lon2 = Math.toRadians(lon2);
        double gcsd = GreatCircle.sphericalDistance(lat1, lon1, lat2, lon2);
        //System.out.println("GreatCircle.spherical_distance(rad) = "+gcsd);
    	double dnm = gcsd * Planet.wgs84_earthEquatorialCircumferenceNMiles
			 / 2f 
             / (double)Math.PI;
        return dnm;
    }

    /**
     * Bearings from the first point onto the second point in radians
     * @param lat1 - Latitude 1 in degrees
     * @param lon1 - Longitude 1 in degrees
     * @param lat2 - Latitude 2 in degrees
     * @param lon2 - Longitude 2 in degrees
     * @return - Bearings in radians
     */
    public static double bearingsRad(double lat1,double lon1,double lat2,double lon2){
        lat1 = Math.toRadians(lat1);
        lon1 = Math.toRadians(lon1);
        lat2 = Math.toRadians(lat2);
        lon2 = Math.toRadians(lon2);
        double bear = GreatCircle.sphericalAzimuth(lat1, lon1, lat2, lon2);
	if (bear<0)
            bear += Math.PI*2f;
        return bear;
    }
    
    /**
     * Bearings from the first point onto the second point in degrees
     * @param lat1 - Latitude 1 in degrees
     * @param lon1 - Longitude 1 in degrees
     * @param lat2 - Latitude 2 in degrees
     * @param lon2 - Longitude 2 in degrees
     * @return - Bearings in degrees
     */
    public static double bearingsDeg(double lat1,double lon1,double lat2,double lon2){
        return Math.toDegrees(bearingsRad(lat1, lon1, lat2, lon2));
    }
    
    /**
     * Distance in nautical miles from this Map Object on the other Map Object
     * @param mo - other Map Object
     * @return - distance in NM
     */
    public double distanceNM(MapOb mo){
        return distanceNM(getLatitude(),getLongitude(),mo.getLatitude(),mo.getLongitude());
    }

    /**
     * Bearings in degrees from this Map Object on the other Map Object
     * @param mo - other Map Object
     * @return - Bearings in degrees
     */
    public double bearingsDeg(MapOb mo){
        return (double)Math.toDegrees(bearingsRad(getLatitude(),getLongitude(),mo.getLatitude(),mo.getLongitude()));
    }
    
    /**
     * Distance from this Map Object to the some point
     * @param lat - Latitude of thr point in degrees
     * @param lon - Longitude of thr point in degrees
     * @return - Distance in nautical miles
     */
    public double distanceNM(double lat,double lon){
        return distanceNM(getLatitude(),getLongitude(),lat,lon);
    }

    /**
     * Bearings from this Map object on the some point
     * @param lat - Latitude of the point in degrees
     * @param lon - Longitude of the point in degrees
     * @return - Bearings in degrees
     */
    public double bearingsDeg(double lat,double lon){
        return (double)Math.toDegrees(bearingsRad(getLatitude(),getLongitude(),lat,lon));
    }
    
    /**
     * Position near (or far) from this Map Object
     * @param az - azimuth of the position in degrees
     * @param dist - Distance of the position in NM
     * @return - double array {lat, lon}
     */
    public double[] position(double az,double dist){
        dist = dist*(double)Math.PI*2/Planet.wgs84_earthEquatorialCircumferenceNMiles;
        az = (double)Math.toRadians(az);
        if(az>Math.PI)
            az += -2*Math.PI;
    	double[] p = GreatCircle.sphericalBetween(Math.toRadians(getLatitude()),Math.toRadians(getLongitude()),dist,az,1);
    	return new double[] {Math.toDegrees(p[2]), Math.toDegrees(p[3])};
    }

    /**
     * Convert string "deg min" in double degrees
     * @param degmin - "deg min"
     * @throws Exception - if format is'nt correct
     * @return - Degrees
     */
    public static double getDeg(String degmin) throws Exception {
        StringTokenizer st = new StringTokenizer(degmin);
        double deg = Float.parseFloat(st.nextToken());
        double min = Float.parseFloat(st.nextToken());
        if(deg>=0)
            return deg+min/60;
        else
            return deg-min/60;
    }
    
    /**
     * Convert double degrees to "deg min" representation
     * @param deg - degrees
     * @return - string in format "deg min"
     */
    public static String getDegMin(double deg){
        double onlydeg,onlymin = 0;
        if(deg>=0){
            onlydeg = Math.floor(deg);
            onlymin = (deg-onlydeg)*60;
        } else {
            onlydeg = Math.ceil(deg);
            onlymin = (onlydeg-deg)*60;
            if(onlydeg==0)
            	onlymin = -onlymin;
        }
        return Math.round(onlydeg)+" "+df.format(onlymin);
    }

    /**
     * Standard Openmap method for setting location of this Map Object
     * @param latitude - Latitude in degrees
     * @param longitude - Longitude in degrees
     */
    public void setGraphicLocations(double latitude, double longitude){
    	if(location instanceof OMPoint) {
	        ((OMPoint)location).setLat(latitude);
	        ((OMPoint)location).setLon(longitude);
    	}
        label.setLat(latitude);
        label.setLon(longitude);
    }
    
    public void hideLabel(){
    	setLabelText("");   
	}
    
    public void showLabel(){
    	setLabelText(name);
	}
    
    public String getDescription(){
		if(instance != null) {
			Instance desc = (Instance) instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_DESCRIPTION));
			if(desc!=null)
				return (String) desc.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_SOURCE));
		}
		return null;
    }
    
    public void setDescription(String d){
		if(instance != null) {
			Instance desc = (Instance) instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_DESCRIPTION));
			if(desc!=null)
				desc.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_SOURCE), d);
		}
    }

    public Instance getDescriptionInstance(){
		if(instance != null) {
			return (Instance) instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_DESCRIPTION));
		}
		return null;
    }
    
    public void setDescriptionInstance(Instance d){
		if(instance != null) {
			instance.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_DESCRIPTION), d);
		}
    }

	public NavOb getWhoTows() {
		return whoTows;
	}

	public void setWhoTows(NavOb whoTows) {
		this.whoTows = whoTows;
	}
    
	public void offTow()
	{
		if(whoTows != null)
		{
			whoTows.removeTow(this);
			whoTows = null;
		}
	}
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void addLinkToMe(Link link)
	{
		if(linksToMe == null)
			linksToMe = new ArrayList();
		linksToMe.add(link);
	}
	
	public void removeLinkToMe(Link link)
	{
		linksToMe.remove(link);
	}

	public Collection<Link> getLinksToMe() {
		return linksToMe;
	}
	
    public String getToolTip(){
		if(instance != null)
			return (String) instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_TOOLTIP));
		return null;
    }
    
    public void setToolTip(String d){
		if(instance != null)
			instance.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_TOOLTIP), d);
    }

}
