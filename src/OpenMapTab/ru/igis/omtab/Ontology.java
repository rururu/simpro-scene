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

/**
 * Constants of OpenMap Tab Ontology
 * @author Ru
 */
public interface Ontology {
    // Class Names
    public static final String C_COMMAND =      "Command";
    public static final String C_BOUNDS =      	"Bounds";
    public static final String C_DESCRIPTION =  "Description";
    public static final String C_DRIFT =        "Drift";
    public static final String C_FIELD =        "Field";
    public static final String C_LINE =         "Line";
    public static final String C_ICON_SCALE =   "IconScale";
    public static final String C_LINK =         "Link";
    public static final String C_MAPOB =        "MapOb";
    public static final String C_MULTIUSER =    "MultiUser";
    public static final String C_NAVOB =        "NavOb";
    public static final String C_OMPOINT =      "OMTPoint";
    public static final String C_OMARC =        "OMTArc";
    public static final String C_OMCIRCLE =     "OMTCircle";
    public static final String C_OMRECT =       "OMTRect";
    public static final String C_OMPOLY =       "OMTPoly";
    public static final String C_OMRASTER =     "OMTRaster";
    public static final String C_OMSPLINE =     "OMTSpline";
    public static final String C_OMTEXT =       "OMTText";
    public static final String C_OPENMAP =      "Openmap";
    public static final String C_PROPERTY =     "Property";
    public static final String C_RA =           "RepeatAction";
    public static final String C_PLAYGROUND =   "Playground";
    public static final String C_SPILL =        "Spill";
    // Slot Names
    public static final String S_ACCURACY =     "accuracy";
    public static final String S_ALTITUDE =     "altitude";
    public static final String S_ANGLE =        "angle";
    public static final String S_ARC_TYPE =	    "arcType";
    public static final String S_BASIC_SCALE =	"basicScale";
    public static final String S_BOLD =         "BOLD";
    public static final String S_BOUNDS =       "bounds";
    public static final String S_CAP_DECORATION = "capDecoration";
    public static final String S_COMSUBCLS =    "commandSubclass";
    public static final String S_COURSE =       "course";
    public static final String S_CSV_DELIM =    "csv_delimiter";
    public static final String S_CURTIME =      "curtime";
    public static final String S_DAMPING = 		"damping";
    public static final String S_DASH_PATTERN = "dashPattern";
    public static final String S_DESCRIPTION =  "description";
    public static final String S_DISTANCE =     "distance";
    public static final String S_EAST =         "east";
    public static final String S_INCLUDED =     "included";
    public static final String S_EXCLUDED =     "excluded";
    public static final String S_EXTENT =       "extent";
    public static final String S_FIELD =        "field";
    public static final String S_FILL_COLOR =   "fillColor";
    public static final String S_FONT_NAME =    "fontName";
    public static final String S_FONT_SIZE =    "fontSize";
    public static final String S_ICON_SCALE =   "iconScale";
    public static final String S_INTERVAL =     "interval";
    public static final String S_INTERVAL2 =     "interval2";
    public static final String S_IS_POLYGON =   "isPolygon";
    public static final String S_ITALIC =       "ITALIC";
    public static final String S_JOINT_DECORATION = "jointDecoration";
    public static final String S_LABEL =        "label";
    public static final String S_LAST_CONNECT = "lastConnect";
    public static final String S_LATITUDE =     "latitude";
    public static final String S_LEADER =     	"leader";
    public static final String S_LIFETIME =   	"lifetime";
    public static final String S_LIFETIME2 =   	"lifetime2";
    public static final String S_LINE =   		"line";
    public static final String S_LINE_COLOR =   "lineColor";
    public static final String S_LINE_TYPE =    "lineType";
    public static final String S_LINE_WIDTH =   "lineWidth";
    public static final String S_LONGITUDE =    "longitude";
    public static final String S_MAPOB =        "mapob";
    public static final String S_MAX_SCALE =	"maxScale";
    public static final String S_MESSAGES =     "messages";
    public static final String S_MIN_SCALE =	"minScale";
    public static final String S_N =            "N";
    public static final String S_NORTH =        "north";
    public static final String S_OVAL =         "oval";
    public static final String S_PARAMS =       "parameters";
    public static final String S_PERIOD =       "period";
    public static final String S_PERIOD2 =      "period2";
    public static final String S_PLAYGROUND_INDEX = "playground-index";
    public static final String S_POINT_RADIUS = "point-radius";
    public static final String S_POINTS =       "points";
    public static final String S_POLY =         "poly";
    public static final String S_PROPERTY =     "property";
    public static final String S_RADIUS =       "radius";
    public static final String S_RELATIVE =     "relative";
    public static final String S_RUNNING =     	"running";
    public static final String S_SCENARIO =     "scenario";
    public static final String S_SPEED =        "speed";
    public static final String S_VERTICAL_SPEED = "verticalSpeed";
    public static final String S_SPEED2 =       "speed2";
    public static final String S_SPILL =        "spill";
    public static final String S_SOURCE =		"source";
    public static final String S_SOUTH =        "south";
    public static final String S_SYNCHRO =      "synchro";
    public static final String S_TIMESCALE =    "timescale";
    public static final String S_TEXT =   		"text";
    public static final String S_TEXT_COLOR =   "textColor";
    public static final String S_TOW =          "tow";
    public static final String S_TYPE =         "type";
    public static final String S_URL =          "url";
    public static final String S_WEST =         "west";
    public static final String S_X =         	"X";
    public static final String S_Y =         	"Y";
    // Field parameters
    public static final String FP_SPEED =       "speed";
    public static final String FP_DIRECTION =   "direction";
    // Symbols
    public static final String BEVEL =          "BEVEL";
    public static final String BUTT =           "BUTT";
    public static final String CHORD =          "CHORD";
    public static final String COLON =          "COLON";
    public static final String COMMA =          "COMMA";
    public static final String GREAT_CIRCLE =   "GREAT_CIRCLE";
    public static final String HOUR =           "HOUR";
    public static final String MINUTE =         "MINUTE";
    public static final String MITER =          "MITER";
    public static final String ROUND =          "ROUND";
    public static final String PIE =            "PIE";
    public static final String RHUMB =          "RHUMB";
    public static final String SECOND =         "SECOND";
    public static final String SEMICOLON =      "SEMICOLON";
    public static final String SQUARE =         "SQUARE";
    public static final String STRAIGHT =       "STRAIGHT";
}
