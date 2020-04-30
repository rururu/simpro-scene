package ru.igis.omtab;

import javax.swing.JOptionPane;

import ru.igis.omtab.ra.RepeatAction;
import edu.stanford.smi.protege.model.Instance;
import edu.stanford.smi.protege.model.KnowledgeBase;

public class Demo {
	
	public static Instance srai;
	public static KnowledgeBase kb = OpenMapTab.getKb();
	
	public static void collision(String ship1, String ship2, String coll_ra, String spill_ra) throws InterruptedException{
		Instance si1 = OpenMapTab.findForSlotValue("NavOb", "label", ship1);
		Instance si2 = OpenMapTab.findForSlotValue("NavOb", "label", ship2);
		if(si1==null) {
			JOptionPane.showMessageDialog(null, "Instance of NavOb with label="+ship1+" not found!");
			return;
		}
		if(si2==null) {
			JOptionPane.showMessageDialog(null, "Instance of NavOb with label="+ship2+" not found!");
			return;
		}
		OMT.getOrAdd(si1);
		OMT.getOrAdd(si2);
		Instance rai = OpenMapTab.findForSlotValue("RepeatAction", "label", coll_ra);
		srai = OpenMapTab.findForSlotValue("RepeatAction", "label", spill_ra);
		if(rai==null) {
			JOptionPane.showMessageDialog(null, "Instance of RepeatAction with label="+coll_ra+" not found!");
			return;
		}
		if(srai==null) {
			JOptionPane.showMessageDialog(null, "Instance of RepeatAction with label="+spill_ra+" not found!");
			return;
		}
		CollisionRepeatAction cra = new Demo().new CollisionRepeatAction(rai, (NavOb) OMT.getMapOb(si1), (NavOb) OMT.getMapOb(si2));
		Playground[] pgs =	OMT.getPlaygrounds();
		cra.start(pgs[cra.getPgid()].getTimer());
		//OMT.setTimerRunning(true);
		//Clock.setTimeScale(64);
	}
	
	class CollisionRepeatAction extends RepeatAction {
		
		private NavOb no1;
		private NavOb no2;
		boolean switch_scale = true;
		
		CollisionRepeatAction(Instance crai, NavOb no1, NavOb no2){
			super(crai);
			this.no1 = no1;
			this.no2 = no2;
	    	OpenMapTab.getMapBean().setCenter(no1.getLatitude(), no2.getLongitude());
	    	OpenMapTab.getMapBean().setScale((float)1000000);
		}
		
	    public synchronized void repeat(double elapsed) {
			double dist = no1.distanceNM(no2);
			if(no1.getSpeed()!=0 && no2.getSpeed()!=0)
				System.out.println("Distance="+dist);
			if(dist<1.0){
				no1.setSpeed(0);
				no2.setSpeed(0);
				Instance poly = (Instance) srai.getOwnSlotValue(kb.getSlot("poly"));
				if(poly==null)
					poly = (Instance) srai.getOwnSlotValue(kb.getSlot("spill"));
				poly.setOwnSlotValue(kb.getSlot("latitude"), MapOb.getDegMin(no2.getLatitude()));
				poly.setOwnSlotValue(kb.getSlot("longitude"), MapOb.getDegMin(no2.getLongitude()));
				OMT.startProtegeRepeatAction(srai);
				if(switch_scale) {
			    	OpenMapTab.getMapBean().setCenter(no1.getLatitude(), no2.getLongitude());
			    	OpenMapTab.getMapBean().setScale((float)250000);
			    	switch_scale = false;
				}
			}
			
	    }
	}


}
