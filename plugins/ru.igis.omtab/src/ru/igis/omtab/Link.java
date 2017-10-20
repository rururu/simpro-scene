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
import java.util.*;
import com.bbn.openmap.util.*;
import com.bbn.openmap.omGraphics.*;
import edu.stanford.smi.protege.model.*;
/**
 * Class to represent some link between this Map Object and other Map Object,
 * tow rope, comunication link, pointig arrow and so on..
 * @author Ru
 */
public class Link extends MapOb {

    /**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	
	private double[] points = new double[]{60f,30f,60f,30f};
    private Instance moinst;
    private MapOb mo;

    /** Creates a new instance of MapOb */
    public Link() {
    }

    /**
     * Constructor of Link object from Protege instance
     * @param instance - Protege Instance
     * @throws Exception -
     */
    public Link(Instance instance) throws Exception {
        super(instance);
        mapFromProtege(instance);
        coordFromProtege(instance);
    }
    
    protected void putLocationMarker(){
        setLocationMarker(new OMLine());
        ((OMLine)location).setLineType(OMGraphicConstants.LINETYPE_GREATCIRCLE);
        ((OMLine)location).setRenderType(OMGraphicConstants.RENDERTYPE_LATLON);
    }
    
    /**
     * Factory method for creating Link object from string parameters
     * @param label - name of Link object
     * @param latitude - latitude in form "DD MM.M"
     * @param longitude - longitude in form "DD MM.M"
     * @param lcolor - line color in form "AARRGGBB"
     * @param molab - name of other Map Object
     * @throws Exception -
     * @return - new Link Object
     */
    public static Link createLink(
        String label,
        String latitude,
        String longitude,
        String lcolor,
        String molab
    ) throws Exception {
        Cls cls = OpenMapTab.kb.getCls(Ontology.C_LINK);
        if(cls!=null){
            Instance inst = OpenMapTab.kb.createInstance(null,cls);
            if(inst!=null){
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LABEL),label);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LATITUDE),latitude);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LONGITUDE),longitude);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LINE_COLOR),lcolor);
                Cls mocls = OpenMapTab.kb.getCls(Ontology.C_MAPOB);
                Collection<Instance> moiss = mocls.getInstances();
                for(Iterator<Instance> i=moiss.iterator();i.hasNext();){
                    Instance mois = (Instance)i.next();
                    String moismk = (String)mois.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LABEL));
                    if(moismk != null && moismk.equals(molab)){
                        inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_MAPOB),mois);
                        break;
                    }
                }
                return new Link(inst);
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
            ((OMLine)location).setLinePaint(lcol);
        }
        moinst = (Instance)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_MAPOB));
        if(moinst!=null){
            updateLine();
        }
        setRenderType(OMGraphicConstants.RENDERTYPE_LATLON);
    }
    
    /**
     * Method to update line if one of Map object moved
     */
    public void updateLine(){
    	if(pgid >= 0) {
	        mo = OMT.playgrounds[pgid].getMapOb(moinst);
	        if(mo!=null){
	        	if(points==null)
	        		points = new double[4];
	            points[0] = lat;
	            points[1] = lon;
	            points[2] = mo.getLatitude();
	            points[3] = mo.getLongitude();
	            ((OMLine)location).setLL(points);
	        }
        }
    }
    
    /**
     * Standard Openmap method
     * @param latitude - latitude in degrees
     * @param longitude - longitude in degrees
     */
    public void setGraphicLocations(double latitude, double longitude){
        updateLine();
        label.setLat(latitude);
        label.setLon(longitude);
    }

	public MapOb getMapOb() {
		return mo;
	}
}
