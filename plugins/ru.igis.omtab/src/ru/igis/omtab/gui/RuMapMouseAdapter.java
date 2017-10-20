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

    public boolean mouseOn(MapOb mo, Layer runaLayer) {
    	if(mo != null && runaLayer != null) {
        	String tooltip = mo.getToolTip();
        	if(tooltip == null)
        		tooltip = mo.getName();
    		runaLayer.fireRequestToolTip(tooltip);
    		return true;
    	} else if(mo == null && runaLayer != null) {
    		runaLayer.fireHideToolTip();
    		return true;
    	}
    	return false;
    }

    public boolean mouseButton1ClickedOn(MapOb mo, Layer runaLayer) {
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
    		} 
    	}
    	return false;
    }

    public boolean mouseButton3ClickedOn(MapOb mo, Layer runaLayer) {
    	for(JFrame lpf: open_frames)
    		lpf.dispose();
    	open_frames.clear();
    	((NavOb) mo).control();
    	return true;
    }

    public boolean mouseButton2ClickedOn(MapOb mo, Layer runaLayer) {
    	return false;
    }
}
