/*
 * Created on 21.11.2004
 *
 * TODO To change the template for this generated file go to
 * Window - Preferences - Java - Code Style - Code Templates
 */
package ru.igis.omtab;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Iterator;


import com.bbn.openmap.OMComponent;

import edu.stanford.smi.protege.event.ClsAdapter;
import edu.stanford.smi.protege.event.ClsEvent;
import edu.stanford.smi.protege.event.FrameAdapter;
import edu.stanford.smi.protege.event.FrameEvent;
import edu.stanford.smi.protege.model.Cls;
import edu.stanford.smi.protege.model.Frame;
import edu.stanford.smi.protege.model.Instance;
import edu.stanford.smi.protege.model.KnowledgeBase;
import edu.stanford.smi.protege.model.Slot;
/**
 * @author Ru
 *
 * TODO To change the template for this generated type comment go to
 * Window - Preferences - Java - Code Style - Code Templates
 */
public class NavObReflector extends OMComponent {
	private Playground runa;
	private KnowledgeBase  kb;
	private Cls noCls;
	private Slot label;
	private Slot latitude;
	private Slot longitude;
	private Slot course;
	private Slot speed;
	private Slot type;
	private Slot url;
	private Slot tow;
	private Slot iconscale;
	private static boolean reflectCreation;
    
	public final static transient String reflectCreationProperty = ".reflectCreation";

	 /**
	  * Sets the properties for the <code>OMComponent</code>.
	  * 
	  * @param prefix the token to prefix the property names
	  * @param props the <code>Properties</code> object
	  */
	 public void setProperties(String prefix, java.util.Properties props) {
	     super.setProperties(prefix, props);
	     
	     String refcr = props.getProperty(prefix + reflectCreationProperty);
	     if(refcr == null)
	    	 reflectCreation = true;
	     else if(refcr.equals("true"))
	    	 reflectCreation = true;
	     else if(refcr.equals("false"))
	    	 reflectCreation = false;
	     else
	     {
	    	 reflectCreation = true;
	    	 System.out.println("Wrong "+prefix + reflectCreationProperty+" property value: "+refcr);
	     }
	 }
	/**
	 * @return Returns the reflectCreation.
	 */
	public static boolean isReflectCreation() {
		return reflectCreation;
	}
	/**
	 * @param rc The reflectCreation to set.
	 */
	public static void setReflectCreation(boolean rc) {
		reflectCreation = rc;
	}
	/* (non-Javadoc)
	 * @see com.bbn.openmap.LightMapHandlerChild#findAndInit(java.lang.Object)
	 */
	public void findAndInit(Object arg0) {
		if(arg0 instanceof Playground && ((Playground) arg0).getPgid() == 0){
			runa = (Playground) arg0;
			OpenMapTab.reflectNavOb = true;
			kb = OpenMapTab.kb;
			init();
		}
	}

	/* (non-Javadoc)
	 * @see com.bbn.openmap.LightMapHandlerChild#findAndUndo(java.lang.Object)
	 */
	public void findAndUndo(Object arg0) {
		if(arg0 instanceof Playground && ((Playground) arg0).getPgid() == 0)
			runa = null ;
	}
	private void init(){
		if(kb != null){
			label = kb.getSlot(Ontology.S_LABEL);
			latitude = kb.getSlot(Ontology.S_LATITUDE);
			longitude = kb.getSlot(Ontology.S_LONGITUDE);
			course = kb.getSlot(Ontology.S_COURSE);
			speed = kb.getSlot(Ontology.S_SPEED);
			type = kb.getSlot(Ontology.S_TYPE);
			tow = kb.getSlot(Ontology.S_TOW);
			url = kb.getSlot(Ontology.S_URL);
			iconscale = kb.getSlot(Ontology.S_ICON_SCALE);
			noCls = kb.getCls(Ontology.C_NAVOB);
			@SuppressWarnings("unchecked")
			Collection<Cls> nosubs = new ArrayList<Cls>(noCls.getSubclasses());
			Collections.addAll(nosubs, noCls);
			for(Cls cls: nosubs) {
				if(cls != null)
					addNavObClsListener(cls);
				Collection<Instance> instances = cls.getInstances();
				for (Iterator<Instance> iter = instances.iterator(); iter.hasNext();) {
					Instance instance = iter.next();
					reflectAndAddSlotListener(instance);
				}
			}
		}
	}
	private void addNavObClsListener(Cls noCls){
		noCls.addClsListener(new ClsAdapter(){
			public void directInstanceAdded(ClsEvent evt){
				if(reflectCreation){
					Instance instance = evt.getInstance();
					reflectAndAddSlotListener(instance);
				}
			}
			public void directInstanceRemoved(ClsEvent event){
				Instance instance = event.getInstance();
				if(runa != null){
					NavOb navob = (NavOb) runa.getMapOb(instance);
					if(navob != null){
						runa.removeMapOb(navob,false);
						runa.manageGraphics();
					}
				}
			}
		});
	}
	public void reflectAndAddSlotListener(Instance instance){
		if(runa != null){
			runa.addMapOb(instance);
			runa.manageGraphics();
			((Frame)instance).addFrameListener(new FrameAdapter(){
				public void ownSlotValueChanged(FrameEvent event){
					Slot slot = event.getSlot();
					Instance instance = (Instance) event.getFrame();
					changeSlotValue(instance,slot);
				} 
			});
		}
	}
	public void changeSlotValue(Instance instance,Slot slot){
		NavOb navob = (NavOb) runa.getMapOb(instance);
		if(navob != null){
			if(slot.equals(latitude)){
		        String newLatitude = (String)instance.getOwnSlotValue(latitude);
				navob.setLatitude(newLatitude);
			} else if(slot.equals(longitude)){
		        String newLongitude = (String)instance.getOwnSlotValue(longitude);
				navob.setLongitude(newLongitude);
			} else if(slot.equals(label)){
		        String newLabel = (String)instance.getOwnSlotValue(label);
				navob.setLabelText(newLabel);
				navob.setName(newLabel);
			} else if(slot.equals(course))
				navob.fromSlotCOURSE(instance);
			else if(slot.equals(speed))
				navob.fromSlotSPEED(instance);
			else if(slot.equals(type))
				navob.fromSlotTYPE(instance);
			else if(slot.equals(tow))
				navob.fromSlotTOW(instance);
			else if(slot.equals(iconscale))
				navob.fromSlotICON_SCALE(instance);
			else if(slot.equals(url))
				try {
					navob.fromSlotURL(instance);
					navob.generate(runa.getProjection());
				} catch (Exception e) {
					System.out.println("Wrong url: "+instance.getOwnSlotValue(url));
				}
			runa.manageGraphics();
		}
	}
}
