package ru.igis.omtab;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Timer;
import java.util.TimerTask;

import com.bbn.openmap.omGraphics.OMGraphic;
import com.bbn.openmap.omGraphics.OMPoly;
import com.bbn.openmap.proj.GreatCircle;

public class PolyMovingManager {

	private List<PolyMover> poly_movers = new ArrayList<PolyMover>();
	private Timer timer = null;
	private int timerDelay = 1000;
	private int defaultTimerDelay = 1000;
	private double timeScale = 1.0;
	
	private static PolyMovingManager polyMovingManager;
	
	static {
		polyMovingManager = new PolyMovingManager(1000);
	}
	
	public static PolyMovingManager getPolyMovingManager() {
		return polyMovingManager;
	}

	public PolyMovingManager(int interval) {
		timerDelay = interval;
	}
	
	/**
     * Called when the timer should be stopped.
     */
    public void stopTimer() {
        if (timer != null) {
            timer.cancel();
            timer.purge();
            timer = null;
        }
    }

    /**
     * Called when the timer should be started.
     * 
     * @param interval the interval that the timer task gets executed on.
     */
	public void resetTimer(int interval) {
		double new_tim_scale = Clock.getTimeScale();
		stopTimer();
		for (PolyMover pm : poly_movers) {
			for (int i = 0; i < pm.point_num; i++) {
				pm.step_dist[i] *= ((double)interval / (double)timerDelay) * (new_tim_scale / timeScale);
			}
		}
		timeScale = new_tim_scale;
		timerDelay = interval;
		timer = new Timer();
		timer.scheduleAtFixedRate(new ManageGraphicsTask(PolyMovingManager.this), 0, timerDelay);
	}
	
	public PolyMover addMovingPoly(OMTPoly start, OMTPoly finish, double time_hrs) {
		OMPoly sta_poly = (OMPoly) start.getLocationMarker(); 
		OMPoly fin_poly = (OMPoly) finish.getLocationMarker(); 
		double[] sta_coord = sta_poly.getLatLonArray();
		double[] fin_ccord = fin_poly.getLatLonArray();
		return addMovingPoly(sta_poly, sta_coord, fin_ccord, time_hrs);
	}

	public PolyMover addMovingPoly(OMPoly poly, double[] start, double[] finish, double time_hrs) {
		PolyMover pm = new PolyMover(poly, start, finish, time_hrs);
		poly_movers.add(pm);
		if(timer == null)
			resetTimer(timerDelay);
		return pm;
	}
	
	public boolean removeMovingPoly(PolyMover pm) {
		if(poly_movers.contains(pm)) {
			boolean ret = poly_movers.remove(pm);
			if (poly_movers.isEmpty())
				stopTimer();
			return ret;
		}
		return false;
	}

    /**
     * Clears the point list.
     */
    public void clearMovingPolies() {
        poly_movers.clear();
        stopTimer();
    }

    /**
     * Simple method to move an OMPoly.
     * 
     * @param pm instance of PolyMover
     */
	protected synchronized int movePoly(PolyMover pm) {
		if (OMT.isRunning()) {
			if (pm.cur_dist[0] <= 0) {
				pm.mov_poly.setLocation(pm.fin_coord, OMGraphic.RADIANS);
				return -1;
			}
			for (int i = 0; i < pm.point_num; i++) {
				pm.cur_dist[i] -= pm.step_dist[i];
				double[] next = GreatCircle.sphericalBetween(pm.fin_coord[i*2], pm.fin_coord[i*2+1], pm.cur_dist[i],
						pm.rev_azimuth[i], 1);
				pm.cur_coord[i*2] = next[2];
				pm.cur_coord[i*2+1] = next[3];
				double rest = pm.cur_dist[i] - pm.step_dist[i];
				if (rest < 0)
					pm.step_dist[i] = pm.cur_dist[i];
			}
			pm.mov_poly.setLocation(pm.cur_coord, OMGraphic.RADIANS);
			return +1;
		}
		return 0;
	}
    
    public class PolyMover {

    	private OMPoly mov_poly;
    	private int point_num;
    	private double[] cur_coord;
		private double[] fin_coord;
    	private double[] rev_azimuth;
    	private double[] cur_dist;
    	private double[] step_dist;
    	
    	public PolyMover(OMPoly poly, double[] start, double[] finish, double time_hrs) {
    		mov_poly = poly;
    		cur_coord = start;
    		fin_coord = finish;
    		point_num = cur_coord.length/2;
    		rev_azimuth = new double[point_num];
    		cur_dist = new double[point_num];
    		step_dist = new double[point_num];
    		for(int i=0; i<point_num; i++) {
    			rev_azimuth[i] = GreatCircle.sphericalAzimuth(fin_coord[i*2], fin_coord[i*2+1], cur_coord[i*2], cur_coord[i*2+1]);
    			cur_dist[i] = GreatCircle.sphericalDistance(cur_coord[i*2], cur_coord[i*2+1], fin_coord[i*2], fin_coord[i*2+1]);
    			step_dist[i] = cur_dist[i] / time_hrs / 3600 / 1000 * timerDelay * timeScale;
    		}
    		
    	}

    	public boolean isMoving() {
    		return poly_movers.contains(this);
    	}

    	public final List<Object> getContent() {
			List<Object> list = Arrays.asList(mov_poly, point_num, cur_coord, fin_coord, rev_azimuth, cur_dist, step_dist);
			return list;
		}
    }
    
    public class ManageGraphicsTask extends TimerTask {

        final PolyMovingManager pmm;

        public ManageGraphicsTask(PolyMovingManager manager) {
        	pmm = manager;
        }
        @Override
        public void run() {
        	List<PolyMover> arrived = new ArrayList<PolyMover>();
            for (PolyMover pm : poly_movers) {
            	if(movePoly(pm) < 0)
            		arrived.add(pm);
            }
            poly_movers.removeAll(arrived);
        }
    }

	public List<PolyMover> getPolyMovers() {
		return poly_movers;
	}

	public Timer getTimer() {
		return timer;
	}

	public int getTimerDelay() {
		return timerDelay;
	}
	
    public void setTimeScale(double new_tim_scale) {
		for (PolyMover pm : poly_movers) {
			for (int i = 0; i < pm.point_num; i++) {
				pm.step_dist[i] *= (new_tim_scale / timeScale);
			}
		}
		timeScale = new_tim_scale;
	}

	public int getDefaultTimerDelay() {
		return defaultTimerDelay;
	}

	public void setDefaultTimerDelay(int defaultTimerDelay) {
		this.defaultTimerDelay = defaultTimerDelay;
	}
}
