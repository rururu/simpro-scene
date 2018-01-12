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
 * Interface for implementation actions called on button Task click
 * on NavObFrame form
 * @author Ru
 */
public interface MissionExecutor {
    
    /**
     * Method incapsulating task action functionallity
     * @param no - Navigating Object whom button Task was ckicked on
     */
    public void execMission(NavOb no);
    
}
