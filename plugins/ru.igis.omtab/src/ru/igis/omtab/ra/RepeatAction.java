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

package ru.igis.omtab.ra;

import javax.swing.Timer;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import ru.igis.omtab.*;
import edu.stanford.smi.protege.model.*;
/**
 * Implementation of class RepeatAction in Protege
 * @author ru
 */
public abstract class RepeatAction implements ActionListener {

	protected Instance instance = null;
	/**
     * Name of this Object
     */
	public static String MSEC = "MSEC";
    /**
     * Interval value SECOND
     */    
	public static String SECOND = "SECOND";
    /**
     * Interval value MINUTE
     */    
	public static String MINUTE = "MINUTE";
    /**
     * Interval value HOUR
     */    
	public static String HOUR = "HOUR";

    /**
     * Name of repeat action
     */
	private String name;
    /**
     * Maximum duration of process in hours, 0 means infinity
     */    
	private double lifetime = 0;
    /**
     * Time to end the process
     */    
	private double endtime = 0;
    /**
     * Last time of execution of repeating action
     */    
	private double lasttime = 0;
    /**
     * Period between execution of repeating action in hours
     */    
	private double period = 0;
    /**
     * Timer for this repeat action
     */    
	//private Timer timer;
    /**
     * Playground index for this repeat action
     */    
	protected int pgid = 0;
	
    public RepeatAction() {
    }
	
    /** Creates a new instance of ProtegeRepeatAction
     * @param instance -
     *  */
    public RepeatAction(Instance instance) {
    	this.instance = instance;
    	KnowledgeBase kb =instance.getKnowledgeBase();
    	fillFromProtege(instance, kb);
    }
    
    /**
     * Method that implement repeating action
     * @param elapsed elapsed time between calls (hours)
     */
    public synchronized void repeat(double elapsed) {
    	System.out.println("RepeatAction: "+name+" elapsed yet "+elapsed+" hours.");
    }
    
    /**
     * Starts execution of repeating action
     * @param timer -
     */
    public void start(Timer timer) {
    	lasttime = Clock.getCurrentTime();
    	if(lifetime > 0)
    		endtime = lasttime + lifetime;
    	else
    		endtime = Double.MAX_VALUE;
    	if(period > 0) 
    		timer.addActionListener(this);
    }
    
    /**
     * Timer events handler
     * @param ae - Event object
     */    
    public void actionPerformed(ActionEvent ae) {
		double ctime = Clock.getCurrentTime();
		if(ctime > endtime)
			if(instance != null)
				OMT.removeProtegeRepeatAction(instance);
			else
				stop(OMT.getPlaygrounds()[pgid].getTimer());
		else {
			double elapsed = ctime - lasttime;
			if(elapsed > period) {
				lasttime = ctime;
				repeat(elapsed);
			}
		}
    }

    /**
     * Stops the execution of repeating action 
     * @param timer -
     */
    public void stop(Timer timer) {
    	timer.removeActionListener(this);
    	removeObjects();
    }

    public void removeObjects() {}

	/**
     * Take information from Protege Instance
     * and put it to RepeatAction object
     * @param instance Instance of subclass of Protege RepeatAction class
     * @param kb Knowledge Base
     */
    public void fillFromProtege(Instance instance, KnowledgeBase kb){
        name = (String)instance.getOwnSlotValue(kb.getSlot(Ontology.S_LABEL));
        String pgis = (String)instance.getOwnSlotValue(kb.getSlot(Ontology.S_PLAYGROUND_INDEX));
        if(pgis != null)
        	pgid = new Integer(pgis);
        String interval = (String)instance.getOwnSlotValue(kb.getSlot(Ontology.S_INTERVAL));
        int ltsv = (Integer)instance.getOwnSlotValue(kb.getSlot(Ontology.S_LIFETIME));
        int prd = (Integer)instance.getOwnSlotValue(kb.getSlot(Ontology.S_PERIOD));
        if(interval.equals(MSEC)){
        	lifetime = ((double)ltsv)/3600000d;
        	period = ((double)prd)/3600000d;
        } else if(interval.equals(SECOND)) {
        	lifetime = ((double)ltsv)/3600d;
        	period = ((double)prd)/3600d;
        } else if(interval.equals(MINUTE)) {
        	lifetime = ((double)ltsv)/60d;
        	period = ((double)prd)/60d;
        } else if(interval.equals(HOUR)) {
        	lifetime = ((double)ltsv);
        	period = ((double)prd);
        } else {
        	lifetime = 0d;
        	period = 0d;
        }
    }

    public double getPeriod() {
		return period;
	}

	public void setPeriod(double period) {
		this.period = period;
	}

	public String getName(){
        return name;
    }
    
    public void setName(String name){
        this.name = name;
    }
    
    public double getLifetime() {
		return lifetime;
	}

    public void setLifetime(double lifetime) {
		this.lifetime = lifetime;
	}

	public Instance getInstance() {
		return instance;
	}

	public void setInstance(Instance instance) {
		this.instance = instance;
	}

	public int getPgid() {
		return pgid;
	}

	public void setPgid(int pgid) {
		this.pgid = pgid;
	}

}
