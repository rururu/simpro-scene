/*
 * Created on 10.03.2005
 *
 * TODO To change the template for this generated file go to
 * Window - Preferences - Java - Code Style - Code Templates
 */
package ru.igis.omtab.gui;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.MouseEvent;

import javax.swing.ImageIcon;
import javax.swing.JMenuItem;
import javax.swing.JPopupMenu;

import ru.igis.omtab.MapOb;
import ru.igis.omtab.NavOb;

import com.bbn.openmap.LightMapHandlerChild;

/**
 * @author srp
 *
 * TODO To change the template for this generated type comment go to
 * Window - Preferences - Java - Code Style - Code Templates
 */
public class RuPopupMenu extends JPopupMenu implements LightMapHandlerChild {

	private NavOb no;
	private JMenuItem item;
	
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;

	/* (non-Javadoc)
	 * @see com.bbn.openmap.LightMapHandlerChild#findAndInit(java.lang.Object)
	 */
	public void findAndInit(Object arg0) {
		// TODO Auto-generated method stub

	}

	/* (non-Javadoc)
	 * @see com.bbn.openmap.LightMapHandlerChild#findAndUndo(java.lang.Object)
	 */
	public void findAndUndo(Object arg0) {
		// TODO Auto-generated method stub

	}
	
	public void event(MouseEvent e, MapOb mo){
		if (mo instanceof NavOb){
			if(item == null)
				createItems(mo.name);
			else
				item.setText(mo.name);
			no = (NavOb) mo;
		}
	}
	
	private void createItems(String name){
		item = new JMenuItem(name,new ImageIcon(getClass().getResource("/ru/igis/omtab/resources/steer.gif")));
		item.addActionListener( new ActionListener(){

			public void actionPerformed(ActionEvent arg0) {
				no.control();
			}
			
		});
		add(item);
	}
}
