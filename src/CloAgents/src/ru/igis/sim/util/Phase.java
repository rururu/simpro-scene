package ru.igis.sim.util;

import com.vividsolutions.jts.geom.Coordinate;

import sim.engine.SimState;
import sim.engine.Steppable;
import sim.util.geo.MasonGeometry;
import sim.util.geo.PointMoveTo;

public class Phase implements Steppable {
	private static final long serialVersionUID = 1L;
	
	@SuppressWarnings("unused")
	public static String START = "START";
	@SuppressWarnings("unused")
	public static String PROCESS = "PROCESS";
	@SuppressWarnings("unused")
	public static String STOPPED = "STOPPED";
	@SuppressWarnings("unused")
	public static String BYPASS = "BYPASS";
	@SuppressWarnings("unused")
	public static String DONE = "DONE";
	@SuppressWarnings("unused")
	public static String FAILED = "FAILED";
	
	protected String status;
	protected MasonGeometry location;
	protected int timeLimit;
	private PointMoveTo pmt = new PointMoveTo();;

	@Override
	public void step(SimState arg0) {
		// TODO Auto-generated method stub

	}

    public void moveLocationTo(Coordinate c) {
        pmt.setCoordinate(c);
        location.getGeometry().apply(pmt);
        location.geometry.geometryChanged();
    }

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public MasonGeometry getLocation() {
		return location;
	}

	public void setLocation(MasonGeometry location) {
		this.location = location;
	}

	public int getTimeLimit() {
		return timeLimit;
	}

	public void setTimeLimit(int timeLimit) {
		this.timeLimit = timeLimit;
	}

}
