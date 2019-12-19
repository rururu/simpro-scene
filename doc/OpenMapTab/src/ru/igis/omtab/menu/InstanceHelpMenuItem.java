package ru.igis.omtab.menu;

import java.awt.event.ActionEvent;

import edu.stanford.smi.protege.model.Instance;

public class InstanceHelpMenuItem extends HelpMenuItem {

	private static final long serialVersionUID = 1L;

	@Override
	public void actionPerformed(ActionEvent ae) {
		Instance ins = kb.getInstance(source);
		if(ins!=null)
			prj.show(ins);
		else if (informationDelegator != null) {
			informationDelegator.displayMessage("InstanceHelpMenuItem","Instance "+source+" not found!");
		}
	}

}
