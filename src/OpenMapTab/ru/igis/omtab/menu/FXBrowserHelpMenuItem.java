package ru.igis.omtab.menu;

import java.awt.event.ActionEvent;
import javax.swing.SwingUtilities;

import ru.igis.omtab.FXBrowser;

public class FXBrowserHelpMenuItem extends HelpMenuItem {

	private static final long serialVersionUID = 1L;

	public void actionPerformed(ActionEvent ae) {
        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
                try {
					new FXBrowser(source, source);
				} catch (ClassNotFoundException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
            }
        });
	}

}
