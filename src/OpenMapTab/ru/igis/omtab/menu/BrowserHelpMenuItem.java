package ru.igis.omtab.menu;

import java.awt.Desktop;
import java.awt.event.ActionEvent;
import java.io.IOException;
import java.net.URI;

import javax.swing.SwingUtilities;

public class BrowserHelpMenuItem extends HelpMenuItem {

	private static final long serialVersionUID = 1L;

	public void actionPerformed(ActionEvent ae) {
        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
                	try {
						Desktop.getDesktop().browse(URI.create(source));
					} catch (IOException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
            }
        });
	}

}
