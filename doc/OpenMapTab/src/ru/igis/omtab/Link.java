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

import java.awt.BasicStroke;
import java.awt.Color;
import java.awt.Stroke;
import java.util.*;

import com.bbn.openmap.omGraphics.*;
import com.bbn.openmap.util.ColorFactory;

import edu.stanford.smi.protege.model.*;
/**
 * Class to represent some link between two MapObs,
 * tow rope, comunication link, pointig arrow and so on..
 * @author Ru
 */
public class Link extends MapOb {

    /**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	
	private double[] points;
    private Instance[] moinss;
    private MapOb mo1;
    private MapOb mo2;
    private String color;

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
    }

    /**
     * Constructor of Link object from two MapObs
     * @param name name of Link object
     * @param mo1 first MapOb
     * @param mo2 second MapOb
     * @param lcolor line color ("AARRGGBB") (optional)
     * @param line instance of Line (optional)
     * @throws Exception throws
     */
    public Link(String name, MapOb mo1, MapOb mo2, String lcolor, Instance line) throws Exception {
        super();
        putLocationMarker();
        this.mo1 = mo1;
        this.mo2 = mo2;
        if(lcolor!=null){
        	color = lcolor;
            Color lcol = ColorFactory.parseColor(lcolor);
            ((OMLine)location).setLinePaint(lcol);
        }
        if(line != null)
        	OMTPoly.setLineAttributies((OMLine)location, line);
    	points = new double[4];
    	setName(name);
        updateLink();
    }

    protected void putLocationMarker(){
        setLocationMarker(new OMLine());
        ((OMLine)location).setLineType(OMGraphicConstants.LINETYPE_GREATCIRCLE);
        ((OMLine)location).setRenderType(OMGraphicConstants.RENDERTYPE_LATLON);
    }

    /**
     * Factory method for creating Link object from string parameters
     * @param label - name of Link object
     * @param lcolor - line color in form "AARRGGBB"
     * @param line - instance of class Line
     * @param mapob - collection of instances of class MapOb
     * @throws Exception -
     * @return - new Link Object
     */
    public static Link createLink(
            String label,
            String lcolor,
            Instance line,
            Collection<Instance> mapob
        ) throws Exception {
            Cls cls = OpenMapTab.kb.getCls(Ontology.C_OMPOLY);
            if(cls!=null){
                Instance inst = OpenMapTab.kb.createInstance(null,cls);
                if(inst!=null){
                    inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LABEL),label);
                    inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LINE_COLOR),lcolor);
                    inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LINE),line);
                    inst.setOwnSlotValues(OpenMapTab.kb.getSlot(Ontology.S_MAPOB),mapob);
                    return new Link(inst);
                }
            }
            return null;
    }

    /**
     * Rewrite information from Protege Instance to this object.
     * @param instance - Protege Instance
     */
    public void mapFromProtege(Instance instance){
        color = (String)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LINE_COLOR));
        if(color!=null){
            Color lcol = ColorFactory.parseColor(color);
            ((OMLine)location).setLinePaint(lcol);
        }
        Instance line = (Instance)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LINE));
        if(line != null)
        	OMTPoly.setLineAttributies((OMLine)location, line);
    	@SuppressWarnings("unchecked")
		Collection<Instance> mapob = instance.getOwnSlotValues(OpenMapTab.kb.getSlot(Ontology.S_MAPOB));
    	moinss = mapob.toArray(new DefaultInstance[mapob.size()]);
    	points = new double[4];
        if(moinss.length > 1){
            updateLink();
        }
    }
    
    /**
     * Method to update line if one of Map object moved
     */
	public synchronized void updateLink() {
		if (mo1 == null)
			mo1 = OMT.getMapOb(moinss[0]);
		if (mo2 == null)
			mo2 = OMT.getMapOb(moinss[1]);
		if (mo1 != null && mo2 != null) {
			points[0] = mo1.getLatitude();
			points[1] = mo1.getLongitude();
			points[2] = mo2.getLatitude();
			points[3] = mo2.getLongitude();
			((OMLine) location).setLL(points);
		} else {
			OMT.removeMapOb(this.getInstance(), false);
		}
	}

	public MapOb getMo1() {
		return mo1;
	}

	public MapOb getMo2() {
		return mo2;
	}

	public String getColor() {
		return color;
	}
	
	public float getWidth() {
		Stroke stroke = ((OMLine) location).getStroke();
		if(stroke!=null)
			return ((BasicStroke) stroke).getLineWidth();
		else
			return 0;
	}
    
}
