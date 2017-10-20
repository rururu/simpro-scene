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

import java.awt.BorderLayout;
import java.awt.Component;
import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Properties;

import edu.stanford.smi.protege.model.Cls;
import edu.stanford.smi.protege.model.Instance;
import edu.stanford.smi.protege.model.KnowledgeBase;
import edu.stanford.smi.protege.model.Project;
import edu.stanford.smi.protege.model.Slot;
import edu.stanford.smi.protege.model.SystemFrames;
import edu.stanford.smi.protege.model.WidgetDescriptor;
import edu.stanford.smi.protege.ui.DisplayUtilities;
import edu.stanford.smi.protege.util.CollectionUtilities;
import edu.stanford.smi.protege.widget.AbstractTabWidget;

import com.bbn.openmap.Layer;
import com.bbn.openmap.LayerHandler;
import com.bbn.openmap.MapBean;
import com.bbn.openmap.PropertyHandler;
import com.bbn.openmap.graphicLoader.GraphicLoader;
import com.bbn.openmap.gui.BasicMapPanel;
import com.bbn.openmap.gui.OverlayMapPanel;
import com.bbn.openmap.plugin.PlugIn;
import com.bbn.openmap.plugin.PlugInLayer;
import com.bbn.openmap.plugin.graphicLoader.GraphicLoaderPlugIn;
import com.bbn.openmap.util.Debug;

/**
 * Main OpenMap Tab class
 * @author Ru
 * @version 1.0
 */
public class OpenMapTab extends AbstractTabWidget {
    
    /**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	
	private static OpenMapTab openMapTab;
    private static MapBean mapBean;
    private static BasicMapPanel basicMapPanel;
	private static Properties properties;
    private static com.bbn.openmap.gui.MenuBar menuBar;
    protected static KnowledgeBase kb;
	protected static boolean reflectNavOb = false;
    
    /** Creates a new instance of OpenMapTab */
    public OpenMapTab() {
        openMapTab = this;
    }
    
    /**
     * Standard Protege method
     */    
    public void setup(WidgetDescriptor descriptor, Project project){
        super.setup(descriptor,project);
        kb = project.getKnowledgeBase();
        System.gc();
    }
    
	/**
     * Standard Protege method
     */    
	public void initialize() {
        setLabel("OpenMap");
    	Cls omcls = kb.getCls(Ontology.C_OPENMAP);
    	if(omcls != null)
    	{
    		Collection<Instance> ominss = omcls.getInstances();
    		if(!ominss.isEmpty())
    		{
    			Instance omi = findAnnotated(ominss, null);
    			if (omi == null)
    				omi = ominss.iterator().next();
    			setMap(omi);
    			arrangePlaygrounds();
    		}
    	}
    }
	
	private void arrangePlaygrounds(){
		BasicMapPanel bmp = OpenMapTab.getBasicMapPanel();
		LayerHandler layhand = (LayerHandler) bmp.getMapComponentByType(LayerHandler.class);
		Layer[] lays = layhand.getMapLayers();
		Map<Integer,Playground> pgmap = new HashMap<Integer, Playground>();
		for(Layer lay: lays){
			if(lay instanceof PlugInLayer){
				PlugIn plugin = ((PlugInLayer) lay).getPlugIn();
				if(plugin instanceof GraphicLoaderPlugIn){
					GraphicLoader gloader = ((GraphicLoaderPlugIn) plugin).getGraphicLoader();
					if(gloader instanceof Playground){
						Playground pg = (Playground) gloader;
						Integer pgid = pg.getPgid();
						pgmap.put(pgid, pg);
						pg.setMyPlugInLayer((PlugInLayer) lay);
						layhand.moveLayer(lay, pgid);
					}
				}
			}
		}
		OMT.playgrounds = new Playground[pgmap.size()];
		System.out.println("Active Playgrounds:");
		for(int i=0;i<pgmap.size();i++){
			Playground pg = pgmap.get(i);
			OMT.playgrounds[i] = pg;
			if(i == 0)
				OMT.clock = new Clock(pg);
			System.out.println(i+" - "+pg.getName());
		}
	}
	
	private void setMap(Instance omi){
		Collection<Instance> openmaps = CollectionUtilities.createCollection(omi);
        properties = getKnowledgeBaseProperties(openmaps,new Properties());
        PropertyHandler propertyHandler = new PropertyHandler(properties);
        Debug.init();
        basicMapPanel = new OverlayMapPanel(propertyHandler);
        mapBean = basicMapPanel.getMapBean();
        mapBean.showLayerPalettes();
        menuBar = (com.bbn.openmap.gui.MenuBar)basicMapPanel.getMapMenuBar();
        add(menuBar,BorderLayout.NORTH);
        add((Component)basicMapPanel,BorderLayout.CENTER); 
	}
    
    @SuppressWarnings("unchecked")
	private Properties getKnowledgeBaseProperties(Collection<Instance> pinstances,Properties properties){
        for(Iterator<Instance> i=pinstances.iterator();i.hasNext();){
            Instance pinstance = i.next();
            Cls directType = pinstance.getDirectType();
            String label = (String)pinstance.getOwnSlotValue(kb.getSlot(Ontology.S_LABEL));
            if (directType.getName().equals(Ontology.C_OPENMAP))
            	label = "openmap";
            Collection<Slot> pslots = directType.getTemplateSlots();
            for(Iterator<Slot> j=pslots.iterator();j.hasNext();){
                Slot pslot = j.next();
                String pslotname = pslot.getName();
                // Discard openmap.label and the same ..
                if(pslotname.equals(Ontology.S_LABEL))
                    continue;
                if(pslotname.startsWith(Ontology.S_PROPERTY)) {
                	String prop_val = (String) pinstance.getOwnSlotValue(pslot);
                	String[] kv = prop_val.split( "=" );
                	if(kv.length == 2)
                		properties.put(label+"."+kv[0], kv[1]);
                	else
                		System.out.println("Wrong slot \"property\" value: "+prop_val);
                    continue;
                }
                String key = label+"."+pslot.getName();
                String value = "";
                if(pslot.getAllowsMultipleValues()){
                    Collection<Instance> values = pinstance.getOwnSlotValues(pslot);
                    value = collectionToString(values);
                    properties = getKnowledgeBaseProperties(values,properties);
                }else
                    value = (String) pinstance.getOwnSlotValue(pslot);
                if(value!=null) {
                    properties.put(key, value);
                    //System.out.println(key+" :: "+value);
                }
            }
        }
        return properties;
    }
    
    private String collectionToString(Collection<Instance> coll){
        String retval = "";
        for(Iterator<Instance> i=coll.iterator();i.hasNext();){
            Instance inst = i.next();
            retval += (String)inst.getOwnSlotValue(kb.getSlot(Ontology.S_LABEL))+" ";
        }
        return retval;
    }
    /**
     * Return this object
     */    
    public static OpenMapTab getOpenMapTab(){
        return openMapTab;
    }
	/**
	 * @return Returns the mapBean.
	 */
	public static MapBean getMapBean() {
		return mapBean;
	}
	
    /**
     * Return Instance having annotation (Instance Notes)
     * @param inss - collection of instances to choose from, if null returns first instance with given annotation text
     * @param text - annotation text for search, if null returns first with any annotation
     */    
	public static Instance findAnnotated(Collection<Instance> inss, String text)
	{
		if (inss == null && text == null)
			return null;
		SystemFrames sf = kb.getSystemFrames();
		Cls acls = sf.getAnnotationCls();
		Slot tslot = sf.getAnnotationTextSlot();
		Slot islot = sf.getAnnotatedInstanceSlot();
		Collection<Instance> ainss = acls.getInstances();
		for (Iterator<Instance> iter = ainss.iterator(); iter.hasNext();) {
			Instance ainst = iter.next();
			Object txt = ainst.getOwnSlotValue(tslot);
			Object inst = ainst.getOwnSlotValue(islot);
			if ((inss == null || inss.contains(inst)) && (text == null || text.startsWith((String) txt)))
				return (Instance) inst;
		}
		return null;
	}

    /**
     * Return properties loaded from Knowledge Base during initialization
     */    
	public static Properties getProperties() {
		return properties;
	}
	
	public static void changeMap(){
		if(openMapTab != null){
	        Instance selected = DisplayUtilities.pickInstance(
	                openMapTab,
	                CollectionUtilities.createCollection(kb.getCls(Ontology.C_OPENMAP)),
	                "Select Openmap Instance");
	        if (selected != null) {
	        	openMapTab.remove(menuBar);
	        	openMapTab.remove(basicMapPanel);
	        	openMapTab.setMap(selected);
	        }
		}
	}
	/**
	 * @return Returns the OverlyMapPanel.
	 */
    public static BasicMapPanel getBasicMapPanel() {
		return basicMapPanel;
	}
	/**
	 * @return Returns instance for given class name, slot name and slot value.
     * @param clsname - class name.
     * @param slot - slot name.
     * @param value - slot value.
	 */
    public static Instance findForSlotValue(String clsname, String slot, Object value) {
        Collection<Instance> inss;
        if (clsname != null) {
            Cls cls = kb.getCls(clsname);
            inss = cls.getInstances();
        } else {
            inss = kb.getInstances();
        }
        for (Instance inst : inss) {
            Object val = inst.getOwnSlotValue(kb.getSlot(slot));
            if (val!=null && val.equals(value)) {
                return inst;
            }
        }
        return null;
    }
	/**
	 * @returns Returns current KnowledgeBase.
	 */
    public static KnowledgeBase getKb() {
		return kb;
	}
}
