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
 * Copyright (C) 2013 Sorokin R.P. (sorokin@oogis.ru)
 * and Object-oriented Geoinformatics Systems Laboratory (http://oogis.ru)
 * All Rights Reserved.
 */

package ru.igis.omtab;

import ru.igis.omtab.gui.RuMapMouseAdapter;

import java.awt.event.MouseEvent;
import java.util.*;

import com.bbn.openmap.omGraphics.*;
import com.bbn.openmap.plugin.PlugInLayer;
import com.bbn.openmap.proj.*;
import com.bbn.openmap.util.*;
import com.bbn.openmap.event.MapMouseListener;
import com.bbn.openmap.graphicLoader.*;

import edu.stanford.smi.protege.model.*;
/**
 * Class supporting simulation
 * @author Ru
 */
public class Playground extends MMLGraphicLoader {
    
    private OMGraphicList mapObs = new OMGraphicList();
    private Map<Instance, MapOb> mapObsMap = new HashMap<Instance, MapOb>();
    private boolean timerRunning;
    private String scenario;
    private OMGraphic selectedGraphic;
    private RuMapMouseAdapter ruMMAdapter;
    private PlugInLayer myPlugInLayer;
    private int pgid; // Playground index

	/**
     * Default constructor
     */    
    public Playground() {
    }
    
    public int getPgid() {
		return pgid;
	}

	/**
     * Standard OpenMap method
     */    
    public synchronized void manageGraphics() {
        // 	Debug.message("animationtester", "AnimationActioner.manageGraphics");
    	double currentTime = Clock.getCurrentTime();
        Projection p = getProjection();

        Iterator<?> it = mapObs.iterator();
        while (it.hasNext()) {
            OMGraphic omg = (OMGraphic) it.next();
            if(omg instanceof NavOb)
            	((NavOb)omg).move(currentTime);
            omg.generate(p);
        }

        OMGraphicHandler receiver = getReceiver();
        if (receiver != null) {
            receiver.setList(mapObs);
        }
    }
    
    /**
     * Add Map obs from the collection of Instances
     * @param inss - collection of Instances representing Map Obs in Protege
     */    
    public synchronized void addMapObs(Collection<?> inss) {
        for(Iterator<?> i=inss.iterator();i.hasNext();)
            addMapOb((Instance)i.next());
    }
    
    /**
     * Create from Instance and add to RuNA Map Object
     * @param inst - Intstance representing Map Object in Protege
     * @return Map Object
     */    
    public synchronized MapOb addMapOb(Instance inst) {
        MapOb mapOb = getMapOb(inst);
        if(mapOb!=null){
        	mapOb.mapFromProtege(inst);
        }else {
        	mapOb =  (MapOb) Util.createObjectForInstance(inst, "ru.igis.omtab");
        	mapOb.pgid = pgid; // Just created mapob belongs to this playground
            if(mapOb!=null){
                mapObs.add(mapOb);
                mapObsMap.put(inst, mapOb); // accumulate all instances added from kb
            }
        }
        return mapOb;
    }
    
    /**
     * Write back to Protege changed attributies of Map Object
     * into slots of corresponding Instances
     * @param inst - Instances corresponding existing in Playground Map Objects
     */    
    public synchronized void mapBackMapOb(Instance inst) {
        MapOb mo = mapObsMap.get(inst);
        mo.mapToProtege(inst);
    }
    
    public Collection<Instance> getMapObInstances() {
		return mapObsMap.keySet();
	}

    /**
     * Search for the Navigating Object corresponding to this Instance
     * and call method control on it
     * @param inst - Instance corresponding to Navigating Object
     */    
    public synchronized void controlObject(Instance inst){
    	NavOb navob = (NavOb) getMapOb(inst);
    	if(navob != null)
    		navob.control();
    }
    
    /**
     * Search Map Object by name
     * @param label - name of Map Object
     * @return Map Object
     */    
    public synchronized MapOb getMapOb(String label){
        for(Iterator<?> i=mapObs.iterator();i.hasNext();){
        	MapOb mo = (MapOb) i.next();
            String name = mo.getName();
            if(name.equals(label))
                return mo;
        }
        return null; 
    }
    
    /**
     * Search polygons containing Map Object
     * @param mo - Map Object
     * @return collection of OMTPoly objects
     */    
    public synchronized Collection<MapOb> inOMTPolies(MapOb mo){
        Collection<MapOb> polies = new ArrayList<MapOb>();
    	for(Iterator<?> i=mapObs.iterator();i.hasNext();){
        	MapOb poly = (MapOb) i.next();
        	if(poly instanceof OMTPoly &&
        		((OMTPoly)poly).contains(mo))
        		polies.add(poly);
        }
        return polies; 
    }
    
    /**
     * Search Map Object for Instance
     * @param instance - Protege Instance corresponding this Map Object
     * @return Map Object
     */    
    public synchronized MapOb getMapOb(Instance instance){
        return mapObsMap.get(instance); 
    }
    
    /**
     * Gives an array of Map Objects for the array of their types.
     * If array of types is empty return all Map Objects
     * @param typs - array of Map Object names
     * @return Array of Map Objects
     */    
    @SuppressWarnings("rawtypes")
	public synchronized Object[] getNavObs(String[] typs){
        java.util.List types = Arrays.asList(typs);
        ArrayList<NavOb> navobs = new ArrayList<NavOb>();
        for(Iterator<?> i=mapObs.iterator();i.hasNext();){
	    MapOb mo = (MapOb) i.next();
            if(mo instanceof NavOb){
                NavOb no = (NavOb)mo;
                if(types.isEmpty() || types.contains(no.getType()))
                    navobs.add(no);
            }
        }
        return navobs.toArray(); 
    }
    
    /**
     * Gives an array of mooving Map Objects for the array of their names
     * @param typs - array of Map Object names
     * @return Array of Map Objects
     */    
    @SuppressWarnings("rawtypes")
	public synchronized Object[] getMovingNavObs(String[] typs){
        java.util.List types = Arrays.asList(typs);
        ArrayList<NavOb> navobs = new ArrayList<NavOb>();
        for(Iterator<?> i=mapObs.iterator();i.hasNext();){
	    MapOb mo = (MapOb) i.next();
            if(mo instanceof NavOb){
                NavOb no = (NavOb)mo;
                if(no.getSpeed()>0f && (types.isEmpty() || types.contains(no.getType())))
                    navobs.add(no);
            }
        }
        return navobs.toArray(); 
    }
    
    /**
     * Add to RuNA new Map Object.
     * If Map Object with the same name exists then it is removed first
     * @param mo - new Map Object
     */    
    public synchronized void addMapOb(MapOb mo){
        MapOb old = getMapOb(mo.getName());
        if(old!=null)
            removeMapOb(old,false);
        mapObs.add(mo);
        Instance inst = mo.getInstance();
        if(inst != null)
        	mapObsMap.put(inst, mo);
    }

    /**
     * Remove from Playground existing Map Object by Instance
     * @param inst - Instance of Map Object to remove
     * @param kbdelete Should corresponding Protege Instance be removed too
     */    
    public synchronized MapOb removeMapOb(Instance inst,boolean kbdelete){
    	MapOb mo = mapObsMap.get(inst);
    	if(mo != null){
    		removeMapOb(mo,kbdelete);
    		return mo;
    	}
    	return null;
    }
    
    /**
     * Remove from Playground existing Map Object
     * @param mo - Map Object to remove
     * @param kbdelete Should corresponding Protege Instance be removed too
     */    
    public synchronized void removeMapOb(MapOb mo,boolean kbdelete){
        if(!(mo instanceof Link))
        	clearLinksAndTows(mo);
    	mapObs.remove(mo);
    	mo.pgid = -1; // Mapob no longer belongs to any playground
        Instance inst = mo.getInstance();
        mapObsMap.remove(inst);
        if(kbdelete)
            OpenMapTab.kb.deleteInstance(inst);
    }
    
    private void clearLinksAndTows(MapOb mo)
    {
        mo.offTow();
        if(mo instanceof NavOb)
        {
        	((NavOb)mo).clearTows();
        	Collection<?> mapObLinks = ((NavOb)mo).getLinks();
            if(mapObLinks != null)
            	for (Iterator<?> iter = mapObLinks.iterator(); iter.hasNext();) 
    				removeMapOb((MapOb) iter.next(), true);
        }
        Collection<?> linksToMapOb = mo.getLinksToMe();
        if(linksToMapOb != null)
        	for (Iterator<?> iter = linksToMapOb.iterator(); iter.hasNext();) 
				removeMapOb((MapOb) iter.next(), true);
    }

    /**
     * Standard OpenMap Component method
     * @param prefix - propery prefix
     * @param props - OpenMap properties object
     */    
    public void setProperties (String prefix, Properties props) {
        super.setProperties(prefix, props);
        String realPrefix = PropUtils.getScopedPropertyPrefix(prefix);
        scenario = props.getProperty(realPrefix + Ontology.S_SCENARIO);
        pgid = new Integer(props.getProperty(realPrefix + Ontology.S_PLAYGROUND_INDEX));
    }
    
    /**
     * @return - Scenario
     */    
    public String getScenario(){
        return scenario;
    }
    
	/**
	 * @return Returns the mapObs.
	 */
	public synchronized OMGraphicList getMapObs() {
		return mapObs;
	}
	/**
	 * @return Returns the timerRunning.
	 */
	public boolean isTimerRunning() {
		return timerRunning;
	}
	public MapMouseListener getMapMouseListener() {
		return this;
	}

	/**
     * Called whenever the mouse is moved on this layer and one of the
     * requested mouse modes is active.
     * <p>
     * Tries to locate a graphic near the mouse, and if it is found,
     * it selected.
     * 
     * @param e the move event
     * @return true if event was consumed (handled), false otherwise
     * @see #getMouseModeServiceList
     */
    public boolean mouseMoved(MouseEvent e) {
        OMGraphic newSelectedGraphic = mapObs.selectClosest(e.getX(),
                e.getY(),
                2.0f);
        if (newSelectedGraphic != selectedGraphic) {
            selectedGraphic = newSelectedGraphic;
            if(ruMMAdapter != null) {
            	ruMMAdapter.mouseOn((MapOb) selectedGraphic, myPlugInLayer);
            	return true;
            }
        }
        return false;
    }

    /**
     * Called whenever the mouse is moved on this layer and one of the
     * requested mouse modes is active, and the gesture is consumed by
     * another active layer. We need to deselect anything that may be
     * selected.
     * 
     * @see #getMouseModeServiceList
     */
    public void mouseMoved() {
    	mapObs.deselect();
    }

    /**
     * Called whenever the mouse is clicked by the user and one of the
     * requested mouse modes is active.
     * 
     * @param e the click event
     * @return true if event was consumed (handled), false otherwise
     * @see #getMouseModeServiceList
     */
    public boolean mouseClicked(MouseEvent e) {
        if (ruMMAdapter != null) {
        	if(e.getButton() == 1)
        		ruMMAdapter.mouseButton1ClickedOn((MapOb) selectedGraphic, myPlugInLayer);
        	else if(e.getButton() == 3)
        		ruMMAdapter.mouseButton3ClickedOn((MapOb) selectedGraphic, myPlugInLayer);
        	else if(e.getButton() == 2)
        		ruMMAdapter.mouseButton2ClickedOn((MapOb) selectedGraphic, myPlugInLayer);
        	else
        		return false;
            return true;
        } else {
            return false;
        }
    }

	protected void setMyPlugInLayer(PlugInLayer myPlugInLayer) {
		this.myPlugInLayer = myPlugInLayer;
	}

	public RuMapMouseAdapter getRuMapMouseAdapter() {
		return ruMMAdapter;
	}

	public void setRuMapMouseAdapter(RuMapMouseAdapter ruMMAdapter) {
		this.ruMMAdapter = ruMMAdapter;
	}
    
    /**
     * Standard OpenMap interface LightMapHandlerChild method.
     * Set RuMapMouseAdapter
     * @param obj - serched object
     */    
    public void findAndInit(Object obj) {
        if (obj instanceof RuMapMouseAdapter) {
        	setRuMapMouseAdapter((RuMapMouseAdapter) obj);
        }
    }

    /**
     * Standard OpenMap interface LightMapHandlerChild method.
     * Clear RuMapMouseAdapter
     * @param obj - searched object
     */    
    public void findAndUndo(Object obj) {
        if (obj instanceof RuMapMouseAdapter) {
        	ruMMAdapter = null;
        }
    }
}
