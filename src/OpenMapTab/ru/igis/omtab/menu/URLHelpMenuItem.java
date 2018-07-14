package ru.igis.omtab.menu;

import java.awt.event.ActionEvent;

import com.bbn.openmap.Environment;

public class URLHelpMenuItem extends HelpMenuItem {
	
	private static final long serialVersionUID = 1L;

	public void actionPerformed(ActionEvent ae) {
		if (informationDelegator != null) {
			informationDelegator.displayURL(Environment.get(Environment.HelpURL, source));
		}
	}
}
