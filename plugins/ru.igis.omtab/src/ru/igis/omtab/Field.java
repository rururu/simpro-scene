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

import java.io.*;
import java.awt.*;
import java.net.*;
import java.util.*;

import com.bbn.openmap.util.*;
import com.bbn.openmap.proj.*;
import com.bbn.openmap.omGraphics.*;

import edu.stanford.smi.protege.model.*;
/**
 * Class for simulation of extensive objects arbitrary movements.
 * Represented by list of named matrices each of wich representing
 * distribution of some parameter along the one rectangular area
 * in space descibed by latitude and longitude coordinates of points
 * in witch values of parameters are known. Coordinates must go through
 * equal intervals.
 * (For example, distributions of sea current speed and direction)
 * @author Ru
 */
public class Field extends OMTRect {
    
    /**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	
	/**
     * Starting latitude in degrees
     */
    protected double lat0;
    /**
     * Startin longitude in degrees
     */
    protected double lon0;
    /**
     * Latitude step
     */
    protected double dlat;
    /**
     * Longitude step
     */
    protected double dlon;
    /**
     * Count of longitude values
     */
    protected int lonCount;
    /**
     * Count of latitude values
     */
    protected int latCount;
    /**
     * Hashtable storing all data
     */
    protected Hashtable<String, ?> parameters;
    /**
     * Used cvs delimiter (" ",",",":".";")
     */
    protected String csv_delim;

    /** Creates a new instance of MapOb */
    public Field() {
    }

    /**
     * Constructor of Spill object from Protege instance
     * @param instance - Protege Instance
     * @throws Exception -
     */
    public Field(Instance instance) throws Exception {
        super(instance);
    }
    
    /**
     * Factory method for creating Drift object from string parameters.
     * Data for parameters must be in cvs files pointed by URLs.
     * @param label - name of Field object
     * @param latitude - latitude in form "DD MM.M"
     * @param longitude - longitude in form "DD MM.M"
     * @param lcolor - border line color in form "AARRGGBB"
     * @param fcolor - fill color in form "AARRGGBB"
     * @param north - bounding north latitude in form "DD MM.M"
     * @param south - bounding south latitude in form "DD MM.M"
     * @param east - bounding east longitude in form "DD MM.M"
     * @param west - bounding west longitude in form "DD MM.M"
     * @param params - each parameter in form "paramname paramURL"
     * @throws Exception -
     * @return - new Field object
     */
    public static Field createField(
        String label,
        String latitude,
        String longitude,
        String lcolor,
        String fcolor,
        String north,
        String south,
        String east,
        String west,
        String[] params
    ) throws Exception {
        Cls cls = OpenMapTab.kb.getCls(Ontology.C_FIELD);
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
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_PARAMS),Arrays.asList(params));
                return new Field(inst);
            }
        }
        return null;
    }

    /**
     * Rewrite information from Protege Instance to this object.
     * @param instance - Protege instance
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
            }catch(Exception exc){}
        }
        csv_delim = (String)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_CSV_DELIM));
        if(csv_delim.equals(Ontology.COMMA))
            csv_delim = ",";
        else if(csv_delim.equals(Ontology.COLON))
            csv_delim = ":";
        else if(csv_delim.equals(Ontology.SEMICOLON))
            csv_delim = ";";
        else
            csv_delim = " ";
        @SuppressWarnings("unchecked")
		Collection<Instance> params = instance.getOwnSlotValues(OpenMapTab.kb.getSlot(Ontology.S_PARAMS));
        if(params!=null) 
            setParameters(params,csv_delim);
        setRenderType(OMGraphicConstants.RENDERTYPE_LATLON);
        Instance line = (Instance)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LINE));
        if(line != null)
        	OMTPoly.setLineAttributies((OMPoly)location, line);
    }
    
    /**
     * Read data from cvs files and put them in Hashtable
     * @param params - Collection of parameters names
     * @param delim - cvs-delimiter in parameters files (" " or "," or ":" or ";")
     */
    @SuppressWarnings({ "unchecked", "rawtypes" })
	public void setParameters(Collection<Instance> params,String delim){
        Hashtable hash = new Hashtable();
        String line;
        int cnt = 0;
        for(Instance param_inst: params){
            String param = (String)param_inst.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_TEXT));
            StringTokenizer st = new StringTokenizer(param);
            try{
                String key = st.nextToken();
                String urs = st.nextToken();
                URL url = new URL(urs);
                try{
                    Vector rows = new Vector();
                    BufferedReader br = new BufferedReader(new InputStreamReader(url.openStream()));
                    System.out.println("Reading Field parameter "+key+" from URL: "+urs+" ...");
                    // defining longitude parameters
                    if(br.ready()){
                        line = br.readLine();
                        StringTokenizer st1 = new StringTokenizer(line,delim);
                        st1.nextToken();
                        double lon0s = Double.parseDouble(st1.nextToken()); 
                        double dlons = Double.parseDouble(st1.nextToken()) - lon0s;
                        if(cnt==0){ // first parameter
                            lon0 = lon0s;
                            dlon = dlons;
                        } else if(cnt>0 && (lon0!=lon0s || dlon!=dlons)){ // rest parameters
                            System.out.println("Inconsistent longitude data while reading parameter "+key);
                            continue;
                        }
                    }
                    // defining latitude parameters
                    if(br.ready()){
                        line = br.readLine();
                        StringTokenizer st1 = new StringTokenizer(line,delim);
                        double lat0s = Double.parseDouble(st1.nextToken()); 
                        if(cnt==0){ // first parameter
                            lat0 = lat0s;
                        } else if(cnt>0 && lat0!=lat0s){ // rest parameters
                            System.out.println("Inconsistent begin latitude while reading parameter "+key);
                            continue;
                        }
                        Vector v = makeVector(st1);
                        if(cnt==0){ // first parameter
                            lonCount = v.size();
                        } else if(cnt>0 && lonCount!=v.size()){ // rest parameters
                            System.out.println("Inconsistent longitude count while reading parameter "+key);
                            continue;
                        }
                        rows.add(v);
                    }
                    if(br.ready()){
                        line = br.readLine();
                        StringTokenizer st1 = new StringTokenizer(line,delim);
                        double dlats = Double.parseDouble(st1.nextToken()) - lat0; 
                        if(cnt==0){ // first parameter
                            dlat = dlats;
                        } else if(cnt>0 && dlat!=dlats){ // rest parameters
                            System.out.println("Inconsistent latitude delta while reading parameter "+key);
                            continue;
                        }
                        rows.add(makeVector(st1));
                    }
                    while(br.ready()){
                        line = br.readLine();
                        StringTokenizer st1 = new StringTokenizer(line,delim);
                        st1.nextToken(); 
                        rows.add(makeVector(st1));
                    }
                    if(cnt==0){ // first parameter
                        latCount = rows.size();
                    } else if(cnt>0 && latCount!=rows.size()){ // rest parameters
                        System.out.println("Inconsistent latitude count while reading parameter "+key);
                        continue;
                    }
                    try{
                        hash.put(key, makeArray(rows));
                    }catch(NumberFormatException nfe){
                        System.out.println("Incorrect data while reading parameter "+key);
                        continue;
                    }
                }catch(IOException ioexc){
                   System.out.println("IOException while opening URL: "+urs);
                   continue;
                }catch(Exception exc){
                   System.out.println("Exception while reading parameter "+key+": "+exc.getMessage());
                   exc.printStackTrace();
                   continue;
                }
            }catch(Exception exc){}
            cnt++;
        }
        parameters = hash;
    }
    
    /**
     * Hashtable with all parameters
     * @return - Hashtable with all parameters
     */
    public Hashtable<String, ?> getParameters(){
        return parameters;
    }
    
    /**
     * Return Data array for specific parameter
     * @param param - Name of parameter
     * @return - Data array
     */
    public double[][] getParameter(String param){
        return (double[][])parameters.get(param);
    }
    
    /**
     * Starting lataitude
     * @return - Latitude in degrees
     */
    public double getLat0(){
        return lat0;
    }
    
    /**
     * Startin longitude
     * @return - Longitude in degrees
     */
    public double getLon0(){
        return lon0;
    }
    
    /**
     * Latitude step
     * @return - step in degrees
     */
    public double getDLat(){
        return dlat;
    }
    
    /**
     * Longitude step
     * @return - step in degrees
     */
    public double getDLon(){
        return dlon;
    }
    
    /**
     * Number of latitudes
     * @return - number of latitudes
     */
    public int getLatCount(){
        return latCount;
    }
    
    /**
     * Number of longitudes
     * @return - number of longitudes
     */
    public int getLonCount(){
        return lonCount;
    }
    
    @SuppressWarnings({ "unchecked", "rawtypes" })
	protected Vector makeVector(StringTokenizer st){
        Vector vector = new Vector();
        while(st.hasMoreTokens())
            vector.add(st.nextToken());
        return vector;
    }
    
    protected double[][] makeArray(Vector<Vector<String>> rows){
        double[][] a = new double[latCount][lonCount];
        for(int i=0;i<latCount;i++){
            Vector<String> row = (Vector<String>)rows.elementAt(i);
            for(int j=0;j<lonCount;j++)
                a[i][j] = Double.parseDouble((String)row.elementAt(j));
        }
        return a;
    }
    
     /**
     * Moves Array of points in radians
     * @param llp -Array of points (radians)
     * @param time - time in hours
     * @param speed -Matrix of speed (nfi X nla) (knots)
     * @param course -Matrix of course (nfi X nla) (degrees)
     * @param nfi -Dimension of matrix along Latitude
     * @param nla -Dimension of matrix along Longitude
     * @param fi0 -Begin (bottommost) Latitude (radians)
     * @param la0 -Begin (leftmost) Longitude (radians)
     * @param dfi -Step along Latitude (radians)
     * @param dla -Step along Longitude (radians)
     * @param bounds - 
     * @return Array of points for new Location
     */    
    public double[] moveLLPArray(
        double[] llp,double time,double[][] speed,double[][] course,int nfi,int nla,double fi0,double la0,double dfi,double dla, Bounds bounds){
        for(int i=0;i<llp.length;i+=2){
            double fi = llp[i];
            double la = llp[i+1];
            int indexFi = (int)Math.floor((fi-fi0)/dfi);
            int indexLa = (int)Math.floor((la-la0)/dla);
            if(0<=indexFi && 0<=indexLa && indexFi<nfi && indexLa<nla){
            	double az = Math.toRadians(course[indexFi][indexLa]);
            	double di = Math.toRadians(speed[indexFi][indexLa]*time/60d);
                double[] p = GreatCircle.sphericalBetween(fi, la, di, az, 1);
                if(bounds==null || bounds.inBounds(p[2], p[3])){
    	            llp[i] = p[2];
    	            llp[i+1] = p[3];
                }
            }
        }
        return llp;
    }
    
    /**
     * Moves Array of points with a help of this Field object
     * on one step along the time
     * @param llp - array of points
     * @param time - time in hours
     * @param bounds -
     * @return - same array with new coordinates
     */
    public double[] moveLLPArray(double[] llp,double time,Bounds bounds){
        return moveLLPArray(
            llp,
            time,
            getParameter(Ontology.FP_SPEED),
            getParameter(Ontology.FP_DIRECTION),
            latCount,
            lonCount,
            ProjMath.degToRad(lat0),
            ProjMath.degToRad(lon0),
            ProjMath.degToRad(dlat),
            ProjMath.degToRad(dlon),
            bounds
       );
    }

    /**
     * Pretty print representation of this object
     * @return - representation of this object
     */
    public String toString(){
        String retval = "lat0="+lat0+" lon0="+lon0+"\n";
        retval += "dlat="+dlat+" dlon="+dlon+"\n";
        retval += "latCount="+latCount+" lonCount="+lonCount+"\n";
        Enumeration<String> keys = parameters.keys();
        while(keys.hasMoreElements()){
            Object key = keys.nextElement();
            retval += "parameter="+key+"\n";
            double[][] a = (double[][])parameters.get(key);
            for(int i=0;i<latCount;i++){
                for(int j=0;j<lonCount;j++)
                    retval += a[i][j]+" ";
                retval += "\n";
            }
        }
        return retval;
    }
}
