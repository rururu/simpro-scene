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
import java.awt.Component;
import java.awt.Container;
import java.lang.reflect.*;

import com.bbn.openmap.MapBean;
import com.bbn.openmap.geo.*;
import com.bbn.openmap.layer.editor.EditorLayer;
import com.bbn.openmap.omGraphics.OMGraphic;
import com.bbn.openmap.omGraphics.OMGraphicList;
import com.bbn.openmap.omGraphics.OMPoly;
import com.bbn.openmap.proj.*;

import edu.stanford.smi.protege.model.*;
import edu.stanford.smi.protege.ui.ProjectManager;
import edu.stanford.smi.protege.ui.ProjectView;
import edu.stanford.smi.protege.widget.TabWidget;
/**
 * OpenMapTab utilities class
 * @author Ru
 */
public class Util {
    
    /** Creates a new instance of Util */
    public Util() {
    }
    
	protected static KnowledgeBase kb = OpenMapTab.getKb();
	protected static Project prj = kb.getProject();
    public static int drawn_index = 0;
    
    /**
     * Filter instances of only one class
     * @param coll - Collection of instances
     * @param cls - Needed class
     * @return - Collection of instances
     */    
    @SuppressWarnings({ "unchecked", "rawtypes" })
	public static Collection<Instance> filter(Collection<Instance> coll,Cls cls){
        Collection res = new ArrayList();
        for(Instance inst: coll){
            Collection types = inst.getDirectTypes();
            if(types.contains(cls))
                res.add(inst);
        }
        return res;
    }
    
    /**
     * Intersection point with polygon along the course
     * @param lat1 - Latitude of current point (degrees)
     * @param lon1 - Longitude of current point (degrees)
     * @param course - Current course (degrees)
     * @param llp - Array of lat lon points of polygon (radians)
     * @param givePoint - Flag if gives up point or only check fact of intersection
     * @return [-1,-1,Float.MAX_VALUE,-1] -if there is not an intersection point,
     * [0,-1,Float.MAX_VALUE,-1] -if there is an intersection point and givePoint=false,
     * [lat(degrees),lon(degrees),distance(NM),bear(degrees)] -if there is an intersection point and givePoint=true,
     * where bear is bearings from southern point of intersected segment on northern, 
     * or from eastern on western if their latitude is the same
     */    
    public static double[] intersectionPoint(double lat1,double lon1,int course,double[] llp,boolean givePoint){
        lat1 = ProjMath.degToRad(lat1);
        lon1 = ProjMath.degToRad(lon1);
        double crs = ProjMath.degToRad((double)course);
        double[] isp = new double[]{-1f,-1f,Float.MAX_VALUE,-1f};
        double lat2 = 0;
        double lon2 = 0;
        double lat3 = 0;
        double lon3 = 0;
        for(int i=0;i<llp.length;i+=2){
            lat2 = llp[i];
            lon2 = llp[i+1];
            if(i<llp.length-2){
                lat3 = llp[i+2];
                lon3 = llp[i+3];
            } else if(llp.length<5){
                break;
            } else {
                lat3 = llp[0];
                lon3 = llp[1];
            }
            double bear1 = GreatCircle.sphericalAzimuth(lat1, lon1, lat2, lon2);
            // Azimuth calculated from zero in both directions (+/-)
            if (bear1<0)
                bear1 += Math.PI*2f;
            double bear2 = GreatCircle.sphericalAzimuth(lat1, lon1, lat3, lon3);
            if (bear2<0)
                bear2 += Math.PI*2f;
            double bmax = Math.max(bear1,bear2);
            double bmin = Math.min(bear1,bear2);
            if(
                (((bmax-bmin)<=Math.PI) && (bmin<=crs) && (crs<=bmax)) ||
                (((bmax-bmin)>Math.PI) && ((crs<bmin) || (bmax<crs)))
            ){
                // Our course do between two bearings
                if(!givePoint){
                    // Fast exit when only fact is needed
                    isp[0] = 0f;
                    return isp;
                }
                double[] point = getIntersectionPointRad(lat1,lon1,crs,lat2,lon2,lat3,lon3);
                if(point!=null){
                    double gcsd = GreatCircle.sphericalDistance(lat1, lon1, point[0], point[1]);
                    if(gcsd<isp[2]){
                        isp[0] = point[0];
                        isp[1] = point[1];
                        isp[2] = gcsd;
                    	if(lon2<lon3)
                    		isp[3] = GreatCircle.sphericalAzimuth(lat2, lon2, lat3, lon3);
                    	else
                    		isp[3] = GreatCircle.sphericalAzimuth(lat3, lon3, lat2, lon2);
                        if (isp[3]<0)
                        	isp[3] += Math.PI*2f;
                    }
                }
            }
        }
        if(isp[0]>=0){
            isp[0] = ProjMath.radToDeg(isp[0]);
            isp[1] = ProjMath.radToDeg(isp[1]);
            isp[2] = isp[2] * Planet.wgs84_earthEquatorialCircumferenceNMiles
                            / 2f 
                            / (double)Math.PI;
            isp[3] = ProjMath.radToDeg(isp[3]);
        }
        return isp;
    }
    // All parameters are in radians
    private static double[] getIntersectionPointRad(double lat1,double lon1,double crs,double lat2,double lon2,double lat3,double lon3){
        double gcsd1 = GreatCircle.sphericalDistance(lat1, lon1, lat2, lon2);
        double gcsd2 = GreatCircle.sphericalDistance(lat1, lon1, lat3, lon3);
        double maxdi = Math.max(gcsd1,gcsd2);
        // Point along our course on a max from two distances
        double[] p = GreatCircle.sphericalBetween(lat1, lon1, maxdi, crs, 1);
        double[] point = Intersection.getSegIntersection(lat2,lon2,lat3,lon3,lat1,lon1,p[2],p[3]);
        if(point[0]<Math.PI/2 && point[1]<Math.PI)
            return point;
        point[0] = point[2];
        point[1] = point[3];
        if(point[0]<Math.PI/2 && point[1]<Math.PI)
            return point;
        else
            return null;
    }

    /**
     * Method of execution of scenario
     * @param scenario - String in form "FULLCLASS METHOD PARAM1 PARAM2 ..."
     * @throws Exception -
     */
    @SuppressWarnings({ "unchecked", "rawtypes" })
	public static void execScenario(String scenario) throws Exception {
        String SYNTAX_ERROR = "SYNTAX ERROR in Scenario Call: ";
        StringQuoteTokenizer sqt = new StringQuoteTokenizer(scenario);
        if(sqt.hasMoreTokens()){
            String className = sqt.nextToken();
            if(sqt.hasMoreTokens()){
                String methodName = sqt.nextToken();
                ArrayList al = new ArrayList();
                // Parse parameters
                while(sqt.hasMoreTokens()){
                    String nt = sqt.nextToken().trim();
                    al.add(nt);
                }
                Object[] params = al.toArray();
                Class[] types = new Class[params.length];
                for(int i=0;i<types.length;i++)
                    try{
                        types[i] = Class.forName("java.lang.String");
                    } catch (Exception exc) {}
                Class c = Class.forName(className);
                if(c!=null){
                    Constructor constr = c.getConstructor(new Class[]{}); // constructor with 0 parameters
                    if(constr!=null){
                        Method method = c.getMethod(methodName,types);
                        if(method!=null){
                            Object[] const_params = new Object[]{};
                            Object obj = constr.newInstance(const_params);
                            method.invoke(obj,params);
                        } else
                            throw new Exception("ERROR, Method "+methodName+" not found!");
                    } else
                        throw new Exception("ERROR, Constructor "+className+" not found!");
                } else
                    throw new Exception("ERROR, Class "+className+" not found!");
            } else
                throw new Exception(SYNTAX_ERROR+scenario);
        } else
            throw new Exception(SYNTAX_ERROR+scenario);
    }

    static class StringQuoteTokenizer {
        private String delim = " \n\t\"";
        private StringTokenizer st;
 
        /** Creates a new instance of StringQuoteTokenizer */
        public StringQuoteTokenizer(String str) {
            st = new StringTokenizer(str,delim,true);
        }

        public boolean hasMoreTokens(){
            return st.hasMoreTokens();
        }

        public String nextToken(){
            if(st.hasMoreTokens()){
                String next = st.nextToken(delim);
                if(next.length()>1 || delim.indexOf(next)<0)
                    return next;
                else if(next.equals("\"")){
                    String inQuoteToken = st.nextToken("\"\\");
                    String closeToken = st.nextToken("\"\\");
                    while(closeToken.equals("\\")){
                        inQuoteToken += st.nextToken("\"\\"); // this is the '"'
                        inQuoteToken += st.nextToken("\"\\");
                        closeToken = st.nextToken("\"\\");
                    }
                    return inQuoteToken;
                }else
                    return nextToken();
            } else
                return null;
        }
    }
    
    /**
     * Point on some azimuth and distance from some point
     * @param lat - latitude of initial point (degrees)
     * @param lon - longitude of initial point (degrees)
     * @param azdeg - azimuth of relative point (degrees)
     * @param dist - distance of relative point from initial point (NM)
     * @return - array of two numbers - latitude and longitude (degrees)
     */
    public static double[] relPos(double lat,double lon,double azdeg,double dist){
        double c = dist*NavOb.Pi10800; // dist in rad
        double az = Math.toRadians(azdeg);
        double[] p = GreatCircle.sphericalBetween(Math.toRadians(lat), Math.toRadians(lon), (double)c, (double)az,1);
        return new double[]{ Math.toDegrees(p[2]), Math.toDegrees(p[3]) };
    }
    
    public static TabWidget getTab(String fullClassName){
    	ProjectManager pm = ProjectManager.getProjectManager();
    	ProjectView pv = pm.getCurrentProjectView();
    	return pv.getTabByClassName(fullClassName);
    }
    
    public static Component getComponentOfClass(Container container, String className) {
        Component[] comps = container.getComponents();
        for (int i=0;i<comps.length;i++){
            if(comps[i].getClass().getName().equals(className))
                return comps[i];
            try {
                Component inner = getComponentOfClass((Container)comps[i], className);
                if(inner != null)
                	return inner;
			} catch (Exception e) {
			}
        }
        return null;
    }
    
    /*
    public static void main(String[] args) throws Exception {
        double[] rp = relPos(60f,30f,360f,60f);
        System.out.println("fp= "+rp[0]+" "+rp[1]);
    }
    */ 
    public static void printRadArrayInDeg(double[] rad_array, int how_many){
    	how_many = (how_many==0) ? rad_array.length : how_many * 2;
    	for(int i=0; i<how_many; i+=2){
    		System.out.println(i/2+" ["+ProjMath.radToDeg(rad_array[i])+", "+ProjMath.radToDeg(rad_array[i+1])+"]");
    	}
    }
    
    /**
     * Calculates a random tack for maneuvering in a closed area.
     * @param lt_deg - current latitude of the ship 
     * @param ln_deg - current longitude of the ship 
     * @param spd_knt - current speed of the ship
     * @param midtack_hrs - middle tack time
     * @param scatter_hrs - scatter of tack time
     * @param poly - OMTPoly of area
     * @return array { sec_to_turn, random_course }
     */
    public static double[] randomTack(
    		double lt_deg,
    		double ln_deg,
    		double spd_knt,
    		double midtack_hrs,
    		double scatter_hrs,
    		OMTPoly poly) {
    	double[] pos = null;
    	double tack_hrs = -1;
    	double new_course = -1;
    	int cnt = 0;
    	do {
    		new_course = Math.random() * 360;
    		tack_hrs = midtack_hrs + scatter_hrs * (Math.random() - 0.5);
    		double tack = tack_hrs * spd_knt;
    		pos = relPos(lt_deg, ln_deg, new_course, tack);
    		cnt++;
    	} while (!poly.contains(pos[0], pos[1]) && cnt<100);
    	if(cnt>=100){
    		double[] llp = poly.getLLPoints();
    		double lt_max = llp[0];
    		double lt_min = llp[0];
    		double ln_max = llp[1];
    		double ln_min = llp[2];
    		for(int i=0; i<llp.length-1; i+=2) {
    			if(llp[i]>lt_max)
    				lt_max = llp[i];
    			else if(llp[i]<lt_min)
    				lt_min = llp[i];
    			if(llp[i+1]>ln_max)
    				ln_max = llp[i+1];
    			else if(llp[i+1]<ln_min)
    				ln_min = llp[i+1];
    		}
    		double lt_cen = ProjMath.radToDeg((lt_max + lt_min)/2);
    		double ln_cen = ProjMath.radToDeg((ln_max + ln_min)/2);
    		new_course = MapOb.bearingsDeg(lt_deg, ln_deg, lt_cen, ln_cen);
    		double dis = MapOb.distanceNM(lt_deg, ln_deg, lt_cen, ln_cen);
    		tack_hrs = dis / spd_knt;
    	}
		double tack_sec = tack_hrs * 3600;
    	return new double[] {tack_sec, new_course};
    }
    
    /**
     * Create map from instance slots.
     * @param instance - Instance
     * @return Map of {slot_name: slot_value}
     */
    public static Map<Object, Object> instanceMap(Instance instance){
        Map<Object, Object> map = new HashMap<Object, Object>();
        Collection<Slot> templateSlots = instance.getDirectType().getTemplateSlots();
        for (Slot slot : templateSlots) {
            Object value = (slot.getAllowsMultipleValues() ? instance.getOwnSlotValues(slot)
                                                            : instance.getOwnSlotValue(slot));
            map.put(slot.getName(), value);
        }
        return map;
    }

    /**
     * Create object of instance direct type class.
     * @param inst - Instance
     * @param pack - full name of class package
     * @return created object
     */
	public static Object createObjectForInstance(Instance inst, String pack) {
		Cls cls = inst.getDirectType();
		String clname = pack + "." + cls.getName();
		Class<?> cl = null;
		try {
			cl = Class.forName(clname);
		} catch (ClassNotFoundException e) {
			cl = null;
			for (Object scls : cls.getDirectSuperclasses()) {
				String sclname = pack + "." + ((Cls) scls).getName();
				try {
					cl = Class.forName(sclname);
				} catch (ClassNotFoundException e1) {
					continue;
				}
			}
			if (cl == null) {
				System.out.println("Util.createObjectForInstance: Class not found: " + clname);
				return null;
			}
		}
		try {
			Constructor<?> cons = cl.getConstructor(new Class[] { Instance.class });
			return cons.newInstance(new Object[] { inst });
		} catch (Exception e) {
			System.out.println("Util.createObjectForInstance: Exception:");
			e.printStackTrace();
			return null;
		}
	}
    
    public static void createDrawnPolygons(){
    	drawn_index = 0;
    	MapBean mb = OpenMapTab.getMapBean();
    	Component[] comps = mb.getComponents();
    	EditorLayer el = null;
    	for(Component it : comps) {
    		if(it instanceof EditorLayer)
    			el = (EditorLayer) it;
    	}
    	if(el!=null){
    		OMGraphicList omgl = el.getOMGraphics();
    		for(OMGraphic omg : omgl.getTargets())
    			if(omg instanceof OMPoly)
    				prj.show(createOMTPolyInstance((OMPoly) omg));
    	}
    		
    }
    
    public static double middleCoord(double[] lla, int off) {
    	double sum_coord = 0;
    	for(int i=0;i<lla.length;i += 2)
    		sum_coord += lla[i+off];
    	return sum_coord / (lla.length / 2);
    }
    
    public static Instance createOMTPolyInstance(OMPoly poly) {
    	Instance ins = kb.createInstance(null, kb.getCls(Ontology.C_OMPOLY));
    	double[] lla = poly.getLatLonArray();
    	Collection<String> points = new ArrayList<String>();
    	for(int i=0;i<lla.length;i += 2) {
    		String lats = MapOb.getDegMin(ProjMath.radToDeg(lla[i]));
    		String lons = MapOb.getDegMin(ProjMath.radToDeg(lla[i+1]));
    		points.add(lats+" "+lons);
    	}
    	ins.setOwnSlotValues(kb.getSlot(Ontology.S_POINTS), points);
    	drawn_index++;
    	ins.setOwnSlotValue(kb.getSlot(Ontology.S_LABEL), "DrawnPolygon"+drawn_index);
    	ins.setOwnSlotValue(kb.getSlot(Ontology.S_LATITUDE), MapOb.getDegMin(ProjMath.radToDeg(middleCoord(lla, 0))));
    	ins.setOwnSlotValue(kb.getSlot(Ontology.S_LONGITUDE), MapOb.getDegMin(ProjMath.radToDeg(middleCoord(lla, 1))));
    	return ins;
    }
    
}
