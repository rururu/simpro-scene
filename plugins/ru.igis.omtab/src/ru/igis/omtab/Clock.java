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

import java.awt.event.*;
import javax.swing.*;

/**
 * Time pulses generator
 * @author srp
 */
public class Clock implements ActionListener { 
    // current values
    private static long second = 0;
    private static long minute = 0;
    private static long hour = 0;
    private static long day = 0;
    // current time in hours
    private static double currentTime = 0; 
    // current time in milliseconds
    private static long clock = 0;
    private static float timeScale = 1;
    private String curtime = "";
    private static RunaControlPanel runaControlPanel;
    private static Playground runa;
    
    protected Clock(Playground pg0) {
    	runa = pg0;
        Timer timer = runa.getTimer();
        timer.addActionListener(this);
        runaControlPanel = OMT.getRunaControlPanel();
    }

    /**
     * Timer events handler
     * @param ae - Event object
     */    
    public void actionPerformed(ActionEvent ae) {
        manageClock();
    }
    
    private void manageClock(){
        int interval = runa.getUpdateInterval();
        int scaledInterval = Math.round(interval * timeScale);
        if(interval>=1)
            clock += scaledInterval;
        else
            clock += interval;  // if Time Scale < 1:1000 go to 1:1
        currentTime = ((double)clock)/3600000d;
        long secs = clock/1000;
        long mins = secs/60;
        long hrs = mins/60;
        day = hrs/24; 
        second = secs % 60;
        minute = mins % 60;
        hour = hrs % 24;
    	curtime = "D-"+day+" "+hour+":"+minute+":"+second;
        if (runaControlPanel != null){ 
            runaControlPanel.setClock(curtime);
        }
        //System.out.println("currentTime="+currentTime);
    }

    /**
     * Method to change time scale
     * @param ts - new time scale
     */    
    public synchronized static void setTimeScale(float ts){
        timeScale = ts;
    }
    
	/**
     * Return current time in milliseconds
     * @return - milliseconds
     */    
    public synchronized static long getClock() {
		return clock;
	}

	/**
     * Method to set clock milliseconds
     * @param msec - milliseconds
     */    
    public synchronized static void setClock(long msec) {
		clock = msec;
	}

	/**
     * Return current time in hours
     * @return - hour and fraction of hour
     */    
    public synchronized static double getCurrentTime(){
        return currentTime;
    }
    
    /**
     * Return current day
     * @return - current day number
     */    
    public synchronized static long getDay(){
        return day;
    }
    
    /**
     * Return current hour
     * @return - current hour number
     */    
    public synchronized static long getHour(){
        return hour;
    }
    
    /**
     * Return current minute
     * @return - current minute number
     */    
    public synchronized static long getMinute(){
        return minute;
    }
    
    /**
     * Return current second
     * @return - current second number
     */    
    public synchronized static long getSecond(){
        return second;
    }
    
	/**
	 * @return Returns the timeScale.
	 */
	public synchronized static float getTimeScale() {
		return timeScale;
	}
}
