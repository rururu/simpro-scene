package ru.igis.omtab.plugin;

import java.awt.Font;
import java.net.URL;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.Properties;

import com.bbn.openmap.dataAccess.shape.DbfTableModel;
import com.bbn.openmap.dataAccess.shape.EsriGraphicList;
import com.bbn.openmap.omGraphics.OMGraphic;
import com.bbn.openmap.omGraphics.OMGraphicList;
import com.bbn.openmap.omGraphics.OMTextLabeler;
import com.bbn.openmap.plugin.esri.EsriPlugIn;
import com.bbn.openmap.util.PropUtils;

public class RuEsriPlugIn extends EsriPlugIn {
    String[] columns;
    Font font;
    boolean allLabels = false;

    public void setProperties(String prefix, Properties properties) {
        super.setProperties(prefix, properties);
        prefix = PropUtils.getScopedPropertyPrefix(prefix);
        String colnames = properties.getProperty(prefix + "columnNames");
        if(colnames != null)
        	columns = colnames.split(",");
        font = createFont(properties.getProperty(prefix + "fontName"),
           properties.getProperty(prefix + "fontStyle"),
           properties.getProperty(prefix + "fontSize0"));
        allLabels = (properties.getProperty(prefix + "labelsNumber") == "ALL");
        
    }

	@SuppressWarnings("rawtypes")
	public EsriGraphicList getGeometry(URL shp) {
        EsriGraphicList egl = EsriGraphicList.getEsriGraphicList(shp,
                getDrawingAttributes(),
                getModel(),
                null);
        if(columns != null && columns.length > 0) {
	        DbfTableModel tm = egl.getTable();
	        int[] idx = new int[columns.length];
	        for(int i=0; i<columns.length; i++) {
	            idx[i] = tm.getColumnIndexForName(columns[i]);
	        }
	        Iterator gei = egl.iterator();
	        for(Iterator tai = tm.getRecords(); tai.hasNext();)
	        {
	           OMGraphic omg = (OMGraphic) gei.next();
	           ArrayList al = (ArrayList) tai.next();
	           String label = "";
	           for(int i=0; i<idx.length; i++) {
	              label += al.get(idx[i])+" ";
	           }
	           if(!(omg instanceof OMGraphicList))
	              putTextLabeler(omg, label);
	           else if(allLabels)
	              for(Iterator<OMGraphic> i=((OMGraphicList) omg).iterator(); i.hasNext();)
	                 putTextLabeler(i.next(), label);
	           else
	              putTextLabeler((OMGraphic) ((OMGraphicList) omg).iterator().next(), label);
	        }
        }
        return egl;
    }

    private void putTextLabeler(OMGraphic omg, String label) {
       OMTextLabeler omtl = new OMTextLabeler(label);
       omtl.setFont(font);
       omg.putAttribute(OMGraphic.LABEL, omtl);
   }

    private Font createFont(String name, String style, String size) {
        int istyle = Font.PLAIN;
        if(style == "BOLD")
           istyle = Font.BOLD;
        else if(style == "ITALIC")
           istyle = Font.ITALIC;
        else if(style == "BOLD|ITALIC")
           istyle = (Font.BOLD | Font.ITALIC);
        int isize = 8;
        try{ isize = Integer.parseInt(size); } catch (NumberFormatException nfe) {}
        return new Font(name, istyle, isize);
    }
}
