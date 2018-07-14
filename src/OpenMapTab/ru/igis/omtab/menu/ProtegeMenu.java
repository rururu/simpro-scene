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

package ru.igis.omtab.menu;

import com.bbn.openmap.gui.*;
import ru.igis.omtab.*;
/**
 *
 * @author  ru
 */
public class ProtegeMenu extends AbstractOpenMapMenu {
    
    /**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	
	private String defaultText = "Protege";
    private int defaultMnemonic= 'P';
    private AddObjectsMenuItem addObjectsMenuItem;
    private RemoveObjectsMenuItem removeObjectsMenuItem;
    private MapBackObjectsMenuItem mapBackObjectsMenuItem;
    private StartRepeatActionsMenuItem startRepeatActions;
    private RemoveRepeatActionsMenuItem removeRepeatActions;
    private ChangeMapMenuItem changeMapMenuItem;

    /** Creates a new instance of ProtegeMenu */
    public ProtegeMenu() {
        super();
        setText(defaultText);
        setMnemonic(defaultMnemonic);

        addObjectsMenuItem = new AddObjectsMenuItem();
        removeObjectsMenuItem = new RemoveObjectsMenuItem();
        mapBackObjectsMenuItem = new MapBackObjectsMenuItem();
        startRepeatActions = new StartRepeatActionsMenuItem();
        removeRepeatActions = new RemoveRepeatActionsMenuItem();
        changeMapMenuItem = new ChangeMapMenuItem();
        
        add(addObjectsMenuItem);
        add(removeObjectsMenuItem);
        add(mapBackObjectsMenuItem);
        add(startRepeatActions);
        add(removeRepeatActions);
        add(changeMapMenuItem);
    }

    public void findAndInit(Object obj) {
        if (obj instanceof OMT) {
            addObjectsMenuItem.setOMT((OMT)obj);
            removeObjectsMenuItem.setOMT((OMT)obj);
            mapBackObjectsMenuItem.setOMT((OMT)obj);
            startRepeatActions.setOMT((OMT)obj);
            removeRepeatActions.setOMT((OMT)obj);
        }
    }

    public void findAndUndo(Object obj) {
        if (obj instanceof OMT) {
            addObjectsMenuItem.setOMT(null);
            removeObjectsMenuItem.setOMT(null);
            mapBackObjectsMenuItem.setOMT(null);
            startRepeatActions.setOMT(null);
            removeRepeatActions.setOMT(null);
        }
    }
}
