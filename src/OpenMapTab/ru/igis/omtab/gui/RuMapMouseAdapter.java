package ru.igis.omtab.gui;

import java.util.ArrayList;
import java.util.List;

import javax.swing.JFrame;
import javax.swing.JLabel;

import com.bbn.openmap.Layer;

import ru.igis.omtab.MapOb;
import ru.igis.omtab.NavOb;

public class RuMapMouseAdapter {
	
	private List<JFrame> open_frames = new ArrayList<JFrame>();

    public boolean mouseLeftButtonClickedOn(MapOb mo, double[] llp, Layer runaLayer) {
    	for(JFrame lpf: open_frames)
    		lpf.dispose();
    	open_frames.clear();
    	return mouseLeftButtonAction(mo, llp, runaLayer);
    }

    public boolean mouseRightButtonClickedOn(MapOb mo, double[] llp, Layer runaLayer) {
    	if(mo != null) {
    		String desc = mo.getDescription();
    		if(desc != null){
    			JFrame df = new JFrame();
        		df.getContentPane().add(new JLabel(desc));
        		df.pack();
        		df.setLocationRelativeTo(null);
        		df.setVisible(true);
        		open_frames.add(df);
        		return true;
    		} else
    			return false;
    	} else
    		return false;
    }
    
    public boolean navobControl(MapOb mo) {
    	if(mo != null && mo instanceof NavOb) {
    		((NavOb)mo).control();
    		return true;
    	} else
    		return false;
    }

    public boolean mouseLeftButtonAction(MapOb mo, double[] llp, Layer runaLayer) {
    	return navobControl(mo);
    }
}
