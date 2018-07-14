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

package ru.igis.omtab.gui;

import java.awt.event.MouseEvent;
import java.awt.geom.Point2D;

import javax.swing.Icon;
import javax.swing.ImageIcon;

import ru.igis.omtab.MapOb;

import com.bbn.openmap.InformationDelegator;
import com.bbn.openmap.MapBean;
import com.bbn.openmap.event.DistanceMouseMode;
import com.bbn.openmap.event.InfoDisplayEvent;
import com.bbn.openmap.util.Debug;

/**
 * Remake of original Openmap Distance Mouse Mode
 * to display coordinates in gegrees and minutes
 * and distances in Nautical Miles
 * @author ru
 */
public class RuDistanceMouseMode extends DistanceMouseMode {
    
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	/**
     * Sends the mouse event location, x/y and lat/lon, to the
     * InformationDelegator.
     */
    public void fireMouseLocation(MouseEvent e) {
        int x = e.getX(); 
        int y = e.getY();
        Point2D llp = null;
        Debug.message("mousemodedetail", "CoordMouseMode: firing mouse location");
        
        if (infoDelegator != null) {
            if (e.getSource() instanceof MapBean) {
                llp = ((MapBean)e.getSource()).getProjection().inverse(x, y);
            }   
            String infoLine;
            infoLine = createCoordinateInformationLine(x, y, llp);
            
            // setup the info event
            InfoDisplayEvent info = new InfoDisplayEvent(this, infoLine, InformationDelegator.COORDINATE_INFO_LINE);
            // ask the infoDelegator to display the info
            infoDelegator.requestInfoLine(info);
        }
    }

    /**
     * Method to create the information string reflecting information
     * at the LatLonPoint provided.  By default, will return a string
     * for the x and y, and the lat/lon.  If llp is null, just the x,
     * y will be returned.  This method can be changed, or overridden
     * to change what kind of coordinates (UTM, DMS, MGRS) are
     * reflected here.
     */
    protected String createCoordinateInformationLine(int x, int y, Point2D llp) {
        if (llp != null) {
            return "Lat( " + 
                MapOb.getDegMin(llp.getY()) +
                " ), Lon( " + MapOb.getDegMin(llp.getX())  + 
                " ) - x( " + x + " ), y( " + y + " )";
        } else {
            return "x( " + x + " ), y( " + y + " )";
        }
    }
    
    public Icon getGUIIcon(){
        return new ImageIcon(getClass().getResource("/ru/igis/omtab/resources/Distance.gif"));
    }
}