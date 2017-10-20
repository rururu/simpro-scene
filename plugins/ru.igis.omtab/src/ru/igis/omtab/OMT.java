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

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.StringTokenizer;

import javax.swing.JFrame;
import javax.swing.JOptionPane;

import com.bbn.openmap.MapHandlerChild;
import com.bbn.openmap.omGraphics.OMGraphic;

import ru.igis.omtab.ra.RepeatAction;
import edu.stanford.smi.protege.model.Cls;
import edu.stanford.smi.protege.model.Instance;
import edu.stanford.smi.protege.ui.DisplayUtilities;
import edu.stanford.smi.protege.util.CollectionUtilities;

public class OMT extends MapHandlerChild {
	
    private static Map<Instance, Integer> mopgMap = new HashMap<Instance, Integer>();
    private static Map<Instance, RepeatAction> raMap = new HashMap<Instance, RepeatAction>();
    private static Collection<TaskExecutor> taskExecutors = new ArrayList<TaskExecutor>();
    private static RunaControlPanel runaControlPanel;
    protected static Playground[] playgrounds;
    protected static Clock clock;
    protected static ArrayList<ActionListener> molisteners = new ArrayList<ActionListener>();
    
	public static final int MO_EVENT = 0;
	public static final String ADDED = "ADDED";
	public static final String REMOVED = "REMOVED";
	public static final String UPDATED = "UPDATED";

	protected static void fireMOEvent(Object mo, String command) {
		if (mo != null) {
			ActionEvent event = new ActionEvent(mo, MO_EVENT, command);
			for (ActionListener listener : molisteners) {
				listener.actionPerformed(event);
			}
		}
	}

    /**
     * Adds ActionListener for ActionEvents of creating, updating or removing MapObs 
     * (NavObs updated by location or setCourse and setSpeed methods,
     *  OMTPolies updated when towing, Links updated by method updateLine())
     * @param al - ActionListener for ActionEvents(MapOb, MO_EVENT, command:
     * 				{"ADDED" / "REMOVED" / "UPDATED" })
     */    
    public static void addActionListener(ActionListener al) {
    	molisteners.add(al);
    }

    public static void removeActionListener(ActionListener al) {
    	molisteners.remove(al);
    }

	public static MapOb getMapOb(Instance inst) {
    	Integer pgi = mopgMap.get(inst);
    	if(pgi != null)
    		return playgrounds[pgi].getMapOb(inst);
    	else
    		return null;
    }
    
    public static MapOb addMapOb(Instance inst) {
    	if(inst != null) {
	    	int pgi = -1;
	    	String pgids = (String) inst.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_PLAYGROUND_INDEX));
	    	if(pgids != null)
	    		pgi = new Integer(pgids);
	    	else
	    		pgi = 0;
	    	MapOb mo = playgrounds[pgi].addMapOb(inst);
	    	mopgMap.put(inst, pgi);
	    	fireMOEvent(mo, ADDED);
	    	return mo;
    	} else
    		return null;
    }
    
    public static MapOb getOrAdd(Instance inst) {
    	MapOb mo = getMapOb(inst);
    	if(mo==null)
    		mo = addMapOb(inst);
    	return mo;
    }
    
    public static void removeMapOb(Instance inst, boolean kbdelete) {
    	Integer pgi = mopgMap.get(inst);
    	if(pgi != null){
    		MapOb mo = playgrounds[pgi].removeMapOb(inst, kbdelete);
    		fireMOEvent (mo, REMOVED);
    	}
    }
    
    public static void clearMapObs(Collection<Instance> inss, boolean kbdelete) {
    	for(Instance inst: inss)
    		removeMapOb(inst, kbdelete);
    }
    
    public static Collection<Instance> getMapObInstances() {
        Collection<Instance> allmobs = new ArrayList<Instance>();
    	Playground[] pgs = playgrounds;
    	for(int i=0;i<pgs.length;i++) {
			Collection<Instance> mobs = pgs[i].getMapObInstances();
			allmobs.addAll(mobs);
    	}
    	return allmobs;
    }
    
    public static Collection<OMGraphic> getMapObs() {
        Collection<OMGraphic> allmobs = new ArrayList<OMGraphic>();
    	Playground[] pgs = playgrounds;
    	for(int i=0;i<pgs.length;i++) {
			Collection<OMGraphic> mobs = pgs[i].getMapObs();
			allmobs.addAll(mobs);
    	}
    	return allmobs;
    }
    
    public static Collection<Instance> getNavObInstances() {
    	return Util.filter(getMapObInstances(), OpenMapTab.kb.getCls(Ontology.C_NAVOB));
    }
    
    public static MapOb getMapOb(String label) {
    	Playground[] pgs = playgrounds;
    	for(int i=0;i<pgs.length;i++) {
			MapOb mob = pgs[i].getMapOb(label);
			if(mob!=null)
				return mob;
    	}
    	return null;
    }
    
    public static void controlObject(Instance inst) {
    	Integer pgi = mopgMap.get(inst);
    	if(pgi != null)
    		playgrounds[pgi].controlObject(inst);
    }

    public static void mapBackMapOb(Instance inst) {
    	Integer pgi = mopgMap.get(inst);
    	if(pgi != null)
    		playgrounds[pgi].mapBackMapOb(inst);
    }

    private static void managePlaygroundsGraphics() {
		Playground[] pgs = playgrounds;
    	for(int i=0;i<pgs.length;i++) {
    		pgs[i].manageGraphics();
    	}
    }

    public void cmdAddObsToMap(){
    	Cls moc = OpenMapTab.kb.getCls(Ontology.C_MAPOB);
    	Collection<Cls> clss = CollectionUtilities.createCollection(moc);
        @SuppressWarnings("unchecked")
		Collection<Instance> inss = DisplayUtilities.pickInstances(new JFrame(),OpenMapTab.kb,clss);
        for(Instance inst: inss) {
        	OMT.addMapOb(inst);
        }
       	managePlaygroundsGraphics();
    }
    
    @SuppressWarnings("unchecked")
	public void cmdRemObsFromMap(){
		Collection<Instance> coll = OMT.getMapObInstances();
        int ans = JOptionPane.showConfirmDialog(new JFrame(),"Remove All Objects?");
        if(ans != JOptionPane.OK_OPTION)
            coll = DisplayUtilities.pickInstancesFromCollection(new JFrame(),coll,"Select Objects");
        for(Instance inst: coll)
        	OMT.removeMapOb(inst, false);
    	managePlaygroundsGraphics();
    }
    
	public static void cmdControlObject(){
        Collection<Instance> navobs = OMT.getNavObInstances();
        if(!navobs.isEmpty()){
            Instance inst = DisplayUtilities.pickInstanceFromCollection(new JFrame(),navobs,0, "Select Object");
            if(inst != null) {
        		OMT.controlObject(inst);
            } else
                return;
        } else
            JOptionPane.showMessageDialog(null,"No objects");
    }
    
    @SuppressWarnings("unchecked")
	public void cmdMapBackObjects(){
		int ans = JOptionPane.showConfirmDialog(new JFrame(),"Map Back All Objects?");
    	Collection<Instance> coll = OMT.getMapObInstances();
        if(ans != JOptionPane.OK_OPTION)
            coll = DisplayUtilities.pickInstancesFromCollection(new JFrame(),coll,"Select Objects");
        for(Instance inst: coll)
        	OMT.mapBackMapOb(inst);
   }

    public void cmdRemoveRepeatActions(){
        @SuppressWarnings("unchecked")
		Collection<Instance> inss = DisplayUtilities.pickInstancesFromCollection(
            new JFrame(), raMap.keySet(), "Remove Repeat Actions"
        );
        removeProtegeRepeatActions(inss);
    }

    public void cmdStartRepeatActions(){
        @SuppressWarnings("unchecked")
		Collection<Cls> racls = OpenMapTab.kb.getClsNameMatches(Ontology.C_RA,1);
        @SuppressWarnings("unchecked")
		Collection<Instance> inss = DisplayUtilities.pickInstances(
        		new JFrame(),OpenMapTab.kb,racls,"Start Repeat Actions"
        );
        startProtegeRepeatActions(inss);
   }

    /**
     * Start RepeatActions from the collection of Instances
     * @param inss - collection of Instances of class RepeatAction in Protege
     */    
    public static synchronized void startProtegeRepeatActions(Collection<Instance> inss) {
        for(Instance inst: inss)
            startProtegeRepeatAction(inst);
    }
    
    /**
     * Start RepeatAction from Instance 
     * return false if it is already started or of error
     * @param inst - Intstance of class RepeatAction in Protege
     */    
    public static synchronized boolean startProtegeRepeatAction(Instance inst) {
    	if(raMap.get(inst) == null) {
	    	RepeatAction ra = (RepeatAction) Util.createObjectForInstance(inst, "ru.igis.omtab.ra");
	    	int pgid = ra.getPgid();
	        ra.start(playgrounds[pgid].getTimer());
	        raMap.put(inst, ra);
	        return true;
    	} else
    		return false;
    }

    /**
     * Remove RepeatAction from Instance 
     * return false if RA was not started 
     * @param inst - Intstance of class RepeatAction in Protege
     */    
    public static synchronized void removeProtegeRepeatAction(Instance inst) {
    	RepeatAction ra = raMap.get(inst);
    	if(ra != null) {
        	int pgid = ra.getPgid();
    		ra.stop(playgrounds[pgid].getTimer());
    		raMap.remove(inst);
    	}
    }

    /**
     * Remove RepeatActions from the collection of Instances
     * @param inss - collection of Instances of class RepeatAction in Protege
     */    
    public static synchronized void removeProtegeRepeatActions(Collection<Instance> inss) {
        for(Instance inst: inss)
            removeProtegeRepeatAction(inst);
    }
    
    /**
     * Set new time scale
     * @param timeScale - new time scale
     */    
    public static void setTimeScale(String timeScale){
        StringTokenizer st = new StringTokenizer(timeScale,":");
        if(st.countTokens() == 2){
        	String nums = st.nextToken();
        	String dens = st.nextToken();
        	try {
				int num = Integer.parseInt(nums);
				int den = Integer.parseInt(dens);
				float ts = (float) num / (float) den;
				if (ts >= 0.001) {
					Clock.setTimeScale(ts);
	                if(runaControlPanel!=null)
	                    runaControlPanel.updateTimeScaleText(timeScale);
				}
			} catch (NumberFormatException e) {}
    	}
    }

    /**
     * Return contains of slot scenario of picked by user Instanse
     * of class Command or its subclass that is a value of slot
     * commandSubclass of first instance of class RuNA in Protege
     * @return - command String
     */    
    public static String getCommand(){
    	Cls comcls = OpenMapTab.kb.getCls(Ontology.C_COMMAND);
        Instance cominst = DisplayUtilities.pickInstance(
                    runaControlPanel, 
                    CollectionUtilities.createCollection(comcls)
        );
        if(cominst!=null){
        	return (String)cominst.getOwnSlotValue(OpenMapTab.kb.getSlot(Ontology.S_SCENARIO));
        } else
        	return null;
    }
    
    private static boolean running = false;
    
	public static boolean isRunning() {
		return running;
	}

	/**
	 * @param timerRunning The timerRunning to set.
	 */
	public static void setTimerRunning(boolean timerRunning) {
		setTimerRunning(timerRunning, true);
	}
	protected static void setTimerRunning(boolean timerRunning, boolean updateGUI) {
    	Playground[] pgs = playgrounds;
        if (timerRunning) {
           	managePlaygroundsGraphics();
        	if(updateGUI && runaControlPanel != null) 
	            runaControlPanel.setRunTimerSelected(true);
	        runaControlPanel.setSliderEnabled(false);  // to prevent moving objects during slider adjustment
        	for(int i=0;i<pgs.length;i++)
        		pgs[i].getTimer().restart();
        	running = true;
        } else {
        	for(int i=0;i<pgs.length;i++)
        		pgs[i].getTimer().stop();
        	running = false;
        	if(updateGUI && runaControlPanel != null)
	            runaControlPanel.setRunTimerSelected(false);
            runaControlPanel.setSliderEnabled(true);  // release slider adjustment
        }
	}
	
	protected static void setUpdateInterval(int itvl) {
    	Playground[] pgs = OMT.playgrounds;
    	for(int i=0;i<pgs.length;i++)
    		pgs[i].setUpdateInterval(itvl);
	}
	
	protected void disableDrivenGUI(){
        if(runaControlPanel!=null)
            runaControlPanel.disableDrivenGUI();
	}
	
	public static String getScenario() {
		return playgrounds[0].getScenario();
	}
    /**
     * Standard Openmap method
     * @param obj -
     */
    public void findAndInit(Object obj) {
        if (obj instanceof RunaControlPanel) {
        	System.out.println("RunaControlPanel found ...");
            runaControlPanel = (RunaControlPanel)obj;
        }
    }
    
    /**
     * Standard Openmap method
     * @param obj -
     */
    public void findAndUndo(Object obj) {
        if (obj instanceof RunaControlPanel) {
            runaControlPanel = null;
        }
    }
   
    protected static RunaControlPanel getRunaControlPanel() {
		return runaControlPanel;
	}

    /**
     * Method called on button Task on Map object form click
     * Calling all registered Task Executors
     * @param no - Navigating Object on wich form button Task was clicked
     */     
   protected static synchronized void execTask(NavOb no){
       for(Iterator<TaskExecutor> i=taskExecutors.iterator();i.hasNext();){
           TaskExecutor te = (TaskExecutor)i.next();
           te.execTask(no);
       }
   }
    
   /**
    * Registering new Task Executor
    * @param ta - program called on button Task on NavOb Form click
    */    
   public static synchronized void addTaskExecutor(TaskExecutor ta){
       taskExecutors.add(ta);
   }

   /**
    * Remove existing Task Executor
    * @param ta - program called on button Task on NavOb Form click
    */    
   public static synchronized void removeTaskExecutor(TaskExecutor ta){
       taskExecutors.remove(ta);
   }

   /**
    * Remove all registered Task Executors atonce
    */    
   public static synchronized void clearTaskExecutors(){
       taskExecutors.clear();
   }

	public static Playground[] getPlaygrounds() {
		return playgrounds;
	}

}
