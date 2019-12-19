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

import javax.swing.*;
import java.awt.event.*;
import ru.igis.omtab.*;
/**
 *
 * @author  ru
 */
public class StartRepeatActionsMenuItem extends JMenuItem implements ActionListener {
    
    /**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	
	private OMT omt;

    /** Creates a new instance of AddObjectsMenuItem */
    public StartRepeatActionsMenuItem() {
        super("Start Repeat Actions");
        setMnemonic('S');
        addActionListener(this);
    }
    
    public void actionPerformed(ActionEvent e) {
        if(omt!=null)
            omt.cmdStartRepeatActions();
    }
    
    public void setOMT(OMT r){
        omt = r;
    }
}
