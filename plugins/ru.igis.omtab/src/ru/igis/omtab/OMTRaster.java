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
import com.bbn.openmap.omGraphics.*;
import edu.stanford.smi.protege.model.*;

import java.io.File;
import java.net.*;

import javax.swing.*;
/**
 * Class for creation and store Openmap OMRaster object from Protege Instance
 * @author Ru
 */
public class OMTRaster extends MapOb {
    
    /**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	
	protected ImageIcon directImage;
	protected String source_url;
	private ImageIcon mirrorImage;

	/** Creates a new instance of MapOb */
    public OMTRaster() {
    }

    /**
     * Constructor of OMTRaster object from Protege instance
     * @param instance - Protege Instance
     * @throws Exception -
     */
    public OMTRaster(Instance instance) throws Exception {
        super(instance);
        mapFromProtege(instance);
        coordFromProtege(instance);
    }

    protected void putLocationMarker(){
        setLocationMarker(new OMRaster());
        ((OMRaster)location).setLineType(OMGraphicConstants.LINETYPE_GREATCIRCLE);
        ((OMRaster)location).setRenderType(OMGraphicConstants.RENDERTYPE_OFFSET);
    }
    
    /**
     * Factory method for creating OMTRaster object from string parameters
     * @param label - name of OMTRaster object
     * @param latitude - latitude in form "DD MM.M"
     * @param longitude - longitude in form "DD MM.M"
     * @param url - url of file containing Icon Image of this object
     * @param start - start angle of image orientation in form "DDD.D" (degrees)
     * @throws Exception -
     * @return new OMTRaster object
     */
    public static OMTRaster createOMTRaster(
        String label,
        String latitude,
        String longitude,
        String url,
        String start
    ) throws Exception {
        Cls cls = OpenMapTab.kb.getCls(Ontology.C_OMRASTER);
        if(cls!=null){
            Instance inst = OpenMapTab.kb.createInstance(null,cls);
            if(inst!=null){
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LABEL),label);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LATITUDE),latitude);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_LONGITUDE),longitude);
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_ANGLE),new Float(start));
                inst.setOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_URL),url);
                return new OMTRaster(inst);
            }
        }
        return null;
    }

     /**
     * Rewrite information from Protege Instance to this object.
     * @param instance - Protege Instance
     * @throws Exception -
     */
    public void mapFromProtege(Instance instance) {
        fromSlotANGLE(instance);
        fromSlotURL(instance);
    }
    public void fromSlotANGLE(Instance instance){
        Float start = (Float)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_ANGLE));
        if(start!=null) 
            ((OMRaster)location).setRotationAngle(start.floatValue());
    }
    public void fromSlotURL(Instance instance) {
    	source_url = (String)instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_URL));
        if(source_url!=null){
			try {
				URL url = new URL(source_url);
	            String path = url.getPath();
	            File file = new File(path);
	            if(!file.exists())
	            	System.out.println("File "+file.getPath()+" not exists!");
	            else {
		            directImage = new ImageIcon(url);
		            mirrorImage = loadMirrorImage(path);
		            Instance is = (Instance) instance.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_ICON_SCALE));
		            if(is==null){
			            ((OMRaster)location).setImageIcon(directImage);
			            // put image center to coordinates
			            ((OMRaster)location).setX(-directImage.getIconWidth()/2);
			            ((OMRaster)location).setY(-directImage.getIconHeight()/2);
		            }
	            }
			} catch (MalformedURLException e) {
				System.out.println("OMTRaster.fromSlotURL: malformed url: "+source_url);
				e.printStackTrace();
			}
        }
    }
    /**
     * Standard Openmap method
     * @param latitude - Latitude in degrees
     * @param longitude - Longitude in degrees
     */
    public void setGraphicLocations(double latitude, double longitude){
        ((OMRaster)location).setLat(latitude);
        ((OMRaster)location).setLon(longitude);
        label.setLat(latitude);
        label.setLon(longitude);
    }

    /**
     * Method to change rotation angle of image
     * @param deg - new angle of image orientation in degrees
     */
    public void setCourse(int deg){
        if(deg>=0f && deg<360f){
        	mirror(deg);
        	double direction = ProjMath.degToRad(deg);
            ((OMRaster)location).setRotationAngle(direction);
        }
    }
    
    /**
     * Return image url
     * @return - current image url
     */    
	public String getURL() {
		return source_url;
	}

    protected void mirror(int deg){
    	if(mirrorImage != null){
    		if(deg < 180){
	            ((OMRaster)location).setImageIcon(mirrorImage);
	            ((OMRaster)location).setX(-mirrorImage.getIconWidth()/2);
	            ((OMRaster)location).setY(-mirrorImage.getIconHeight()/2);
    		} else {
	            ((OMRaster)location).setImageIcon(directImage);
	            ((OMRaster)location).setX(-directImage.getIconWidth()/2);
	            ((OMRaster)location).setY(-directImage.getIconHeight()/2);
    		}
    	}
    }
    
    private ImageIcon loadMirrorImage(String path){
    	path = path.substring(0, path.lastIndexOf('.'))+".gi0";
		File f2 = new File(path);
		if(f2.exists()) 
			try {
				URL url = new URL("file:" + path);
				return new ImageIcon(url);
			} catch (Exception e) {
				return null;
			}
		else
			return null;
    }

}
