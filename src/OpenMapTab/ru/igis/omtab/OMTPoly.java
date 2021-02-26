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
import java.util.*;
import com.bbn.openmap.proj.*;
import com.bbn.openmap.util.*;
import com.bbn.openmap.omGraphics.*;

import edu.stanford.smi.protege.model.*;
/**
 * Class for creation and store Openmap OMPoly object from Protege Instance
 * @author Ru
 */
public class OMTPoly extends MapOb  implements Container{

    /**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;

	/** Creates a new instance of MapOb */
    public OMTPoly() {
    }

    /**
     * Constructor of OMTPoly object from Protege instance
     * @param instance - Protege Instance
     * @throws Exception -
     */
    public OMTPoly(Instance instance) throws Exception {
        super(instance);
        mapFromProtege(instance);
        coordFromProtege(instance);
    }
    
    protected void putLocationMarker(){
        setLocationMarker(new OMPoly());
        ((OMPoly)location).setLineType(OMGraphicConstants.LINETYPE_GREATCIRCLE);
        ((OMPoly)location).setRenderType(OMGraphicConstants.RENDERTYPE_LATLON);
    }
    
    /**
     * Factory method for creating OMTPoly object from string parameters
     * @param label - name of OMTPoly object
     * @param latitude - latitude in form "DD MM.M"
     * @param longitude - longitude in form "DD MM.M"
     * @param lcolor - line color in form "AARRGGBB"
     * @param fcolor - fill color in form "AARRGGBB"
     * @param ispolygon - "true",if this is closed polygon, "false", if this is polyline
     * @param relative - "true",if this is "towable" polygon, "false", if not
     * @param points - collection of Strings each in form "DD MM.M DD MM.M" (latitude longitude)
     * @throws Exception -
     * @return new OMTPoly object
     */
    public static OMTPoly createOMTPoly(
        String label,
        String latitude,
        String longitude,
        String lcolor,
        String fcolor,
        String ispolygon,
        String relative,
        Collection<String> points
    ) throws Exception {
        Cls cls = OpenMapTab.kb.getCls(Ontology.C_OMPOLY);
        if(cls!=null){
            Instance inst = OpenMapTab.kb.createInstance(null,cls);
            if(inst!=null){
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LABEL),label);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LATITUDE),latitude);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LONGITUDE),longitude);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LINE_COLOR),lcolor);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_FILL_COLOR),fcolor);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_IS_POLYGON),Boolean.getBoolean(ispolygon));
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_RELATIVE),Boolean.getBoolean(relative));
                inst.setOwnSlotValues(OpenMapTab.kb.getSlot(Ontology.S_POINTS),points);
                return new OMTPoly(inst);
            }
        }
        return null;
    }

    /**
     * Rewrite information from Protege Instance to this object.
     * @param instance - Protege Instance
     */
    @SuppressWarnings("unchecked")
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
        Boolean ispolygon = (Boolean)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_IS_POLYGON));
        if(ispolygon!=null) 
            ((OMPoly)location).setIsPolygon(ispolygon.booleanValue());
        Collection<String> points = instance.getOwnSlotValues(OpenMapTab.kb.getSlot(Ontology.S_POINTS));
        if(points!=null) 
            ((OMPoly)location).setLocation(getLLPoints(points),OMGraphic.DECIMAL_DEGREES);
        Boolean relative = (Boolean)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_RELATIVE));
        if(relative!=null && relative) 
            relcoords = setRelativeCoords(getLLPoints(points));
        setRenderType(OMGraphicConstants.RENDERTYPE_LATLON);
        Instance line = (Instance)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LINE));
        if(line != null)
        	setLineAttributies((OMPoly)location, line);
    }
    
    /**
     * Method to determine if Poly contains some Map Object
     * @param mo - Map Object
     * @return - true, if OMTPoly contains this Map Object, else false
     */
    public boolean contains(MapOb mo){
        return contains(mo.getLatitude(),mo.getLongitude());
    }
    
    /**
     * Method to determine if Poly contains some point
     * @param lat - latitude in degrees
     * @param lon - longitude in degrees
     * @return - true, if OMTPoly contains this point, else false
     */
    public synchronized boolean contains(double lat,double lon){
    	if(playground != null) {
	    	Projection proj = playground.getProjection();
	        Point2D point = (Point2D) proj.forward(lat,lon);
	        ((OMPoly)location).generate(proj);
	        return ((OMPoly)location).contains(point.getX(),point.getY());
		} else
			return false;
	    }
    
    /**
     * Set part of LatLonArray as points of OMPoly object
     * @param llpoints - array of coordinates {deg}
     */
    public void setLLPoints(double[] llpoints) {
    	((OMPoly)location).setLocation(llpoints, OMGraphic.DECIMAL_DEGREES);
    	setLocationMarker(location);
    }
    
    /**
     * Return LatLonArray of corresponding OMPoly object
     * @return array of coordinates
     */
    public double[] getLLPoints(){
        return ((OMPoly)location).getLatLonArrayCopy();
    }
    
    /**
     * Create Collection of Strings in form "DD MM.M DD MM.M" (latitude longitude)
     * from array of doubles (latitude longitude)
     * @param llpoints - array of doubles {latitude, longitude,..}
     * @return Collection of Strings in form "DD MM.M DD MM.M"
     */
    public static Collection<String> getDMPoints(double[] llpoints){
    	ArrayList<String> dmpoints = new ArrayList<String>();
    	for(int i=0;i<llpoints.length;i+=2){
    		dmpoints.add(MapOb.getDegMin(llpoints[i])+" "+MapOb.getDegMin(llpoints[i+1]));
    	}
    	return dmpoints;
    }
    
    /**
     * Create array of points's coordinates in degrees 
     * from Collection of Strings in form "DD MM.M DD MM.M" (latitude longitude)
     * @param points - Collection of Strings in form "DD MM.M DD MM.M" (latitude longitude)
     * @return array of points
     */
    public static double[] getLLPoints(Collection<String> points){
        double[] llpoints = new double[points.size()*2];
        int k = 0;
        for(Iterator<String> i=points.iterator();i.hasNext();){
            StringTokenizer st = new StringTokenizer(i.next());
            try{
                llpoints[k] = MapOb.getDeg(st.nextToken()+" "+st.nextToken());
                llpoints[k+1] = MapOb.getDeg(st.nextToken()+" "+st.nextToken());
                k++;
                k++;
            }catch(Exception exc){}
        }
        if(k==llpoints.length)
            return llpoints;
        else {  // if errors in some points then skip these points
            double[] sllpnts = new double[k];
            System.arraycopy(llpoints, 0, sllpnts, 0, k);
            return sllpnts;
        }
    }
    
    private double[] relcoords = null;
    
    private double[] setRelativeCoords(double[] coords){
    	double[] relcoords = new double[coords.length];
    	// polygon center calculation
    	double clat = 0, clon = 0;
    	for(int i=0; i<coords.length; i+=2){
    		coords[i] = ProjMath.degToRad(coords[i]);
    		coords[i+1] = ProjMath.degToRad(coords[i+1]);
    		clat += coords[i];
    		clon += coords[i+1];
    	}
    	clat = clat / coords.length * 2;
    	clon = clon / coords.length * 2;
    	// polygon relative center coords calculation
    	for(int i=0; i<coords.length; i+=2){
    		relcoords[i] = GreatCircle.sphericalAzimuth(clat, clon, coords[i], coords[i+1]);
    		relcoords[i+1] = GreatCircle.sphericalDistance(clat, clon, coords[i], coords[i+1]);
    	}
    	return relcoords;
    }
    
    /**
     * Towing polygon to new (weight) center and turning it on new direction by recalculating its points 
     * @param center_lat - latitude of new center (degrees)
     * @param center_lon - longitude of new center (degrees)
     * @param direction - new direction  (degrees) in a sense that initial direction was 0 (north)
     */
    public void tow(double center_lat, double center_lon, double direction){
    	if(relcoords != null){
            setLabel(new OMText(center_lat, center_lon, 0, 0, name, OMText.JUSTIFY_LEFT));    	}
    		double[] coords = new double[relcoords.length];
    		double dir_rad = ProjMath.degToRad(direction);
    		//dir_rad = (dir_rad > Math.PI) ? (dir_rad - 2 * Math.PI) : dir_rad;
    		double c_phi = ProjMath.degToRad(center_lat);
    		double c_lambda = ProjMath.degToRad(center_lon);
    		// calculate coords relatively to center and direction
        	for(int i=0; i<coords.length; i+=2){
        		double az = relcoords[i] + dir_rad;
        		az = (az > 2 * Math.PI) ? (az - 2 * Math.PI) : az;
        		double[] coord = GreatCircle.sphericalBetween(c_phi, c_lambda, relcoords[i+1], az, 1);
        		coords[i] = coord[2];
        		coords[i+1] = coord[3];
        	}
            ((OMPoly)location).setLocation(coords, OMGraphic.RADIANS);
    }
    
    protected static void setLineAttributies(OMGraphic omg, Instance linst){
    	String lineType = (String)linst.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LINE_TYPE));
        String lineWidth = (String)linst.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LINE_WIDTH));
        String dashPattern = (String)linst.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_DASH_PATTERN));
        String capDecoration = (String)linst.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_CAP_DECORATION));
        String jointDecoration = (String)linst.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_JOINT_DECORATION));
        if(lineType != null){
        	int lt = OMGraphicConstants.LINETYPE_GREATCIRCLE;
        	if(lineType.equals(Ontology.RHUMB))
        		lt = OMGraphicConstants.LINETYPE_RHUMB;
        	else if(lineType.equals(Ontology.STRAIGHT))
        		lt = OMGraphicConstants.LINETYPE_STRAIGHT;
        	omg.setLineType(lt);
        }
        float width = 1.0f;
        int cap = BasicStroke.CAP_SQUARE;
        int join = BasicStroke.JOIN_MITER;
        float miterlimit = 10.0f;
        float[] dash = null;
        float dashphase = 0.0f;
        if(lineWidth != null)
        	width = Float.valueOf(lineWidth).floatValue();
        if(dashPattern != null)
        	dash = BasicStrokeEditorMenu.stringToDashArray(dashPattern);
        if(capDecoration != null){
        	if(capDecoration.equals(Ontology.BUTT))
        		cap = BasicStroke.CAP_BUTT;
        	else if(capDecoration.equals(Ontology.ROUND))
        		cap = BasicStroke.CAP_ROUND;
        }
        if(jointDecoration != null){
        	if(jointDecoration.equals(Ontology.BEVEL))
        		join = BasicStroke.JOIN_BEVEL;
        	else if(jointDecoration.equals(Ontology.ROUND))
        		join = BasicStroke.JOIN_ROUND;
        }
        BasicStroke bs = new BasicStroke(width,cap,join,miterlimit,dash,dashphase);
        omg.setStroke(bs);
    }
    
    public void setLine(Instance linst){
    	setLineAttributies((OMPoly)location, linst);
    }
}
