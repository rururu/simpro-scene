package ru.igis.sim.util;

import com.vividsolutions.jts.geom.Coordinate;

import sim.engine.SimState;
import sim.field.geo.GeomVectorField;
import sim.util.geo.MasonGeometry;

public class Arriver extends Phase {
	private static final long serialVersionUID = 1L;
	
	public static int MOVING = 0;
	public static int BOUND = 1;
	public static int ARRIVED = 2;
	
	private Coordinate position = null;
	private double x;
	private double y;
	private double x1;
	private double y1;
	private double Vx;
	private double Vy;
	private Coordinate finish;
	private double rate;
	private GeomVectorField bounds;
	private Phase bypass;
	private int backsteps = 2;

	public Arriver(MasonGeometry location, Coordinate finish, double rate) {
		this(location, finish, rate, null);
	}

	public Arriver(MasonGeometry location, Coordinate finish, double rate, GeomVectorField bounds) {
		this(location, finish, rate, bounds, null);
	}
	
	public Arriver(MasonGeometry location, Coordinate finish, double rate, GeomVectorField bounds, Phase bypass) {
		this.location = location;
		this.finish = finish;
		this.rate = rate;
		this.bounds = bounds;
		this.bypass = bypass;
		status = START;
	}

	@Override
	public void step(SimState state) {
		// actualization of location position
		if (status == START) {
			position = location.geometry.getCoordinate();
			x = position.x;
			y = position.y;
			x1 = finish.x;
			y1 = finish.y;
			double D = position.distance(finish);
			double T = D / rate;
			Vx = (x1 - x) / T;
			Vy = (y1 - y) / T;
			status = PROCESS;
		}
		if (status == PROCESS) {
			if (bounds == null || bounds.isCovered(position)) {
				// agent inside bounds
				if ((Vx > 0 && (x1 - x) < Vx || Vx < 0 && (x1 - x) > Vx)
						&& (Vy > 0 && (y1 - y) < Vy || Vy < 0 && (y1 - y) > Vy)) {
					// agent near finish
					x = x1;
					y = y1;
					status = DONE;
				} else {
					// agent is arriving
					x += Vx;
					y += Vy;
				}
				position.x = x;
				position.y = y;
				moveLocationTo(position);
			} else {
				// agent encounter obstacle
				if (bypass != null) {
					// there is bypass
					x -= backsteps * Vx;
					y -= backsteps * Vy;
					position.x = x;
					position.y = y;
					moveLocationTo(position);
					status = BYPASS;
					bypass.status = START;
				} else {
					// no bypass
					status = STOPPED;
				}
			}
		} else if (status == BYPASS) {
			// do bypass
			bypass.step(state);
			String bystatus = bypass.status;
			if (bystatus == DONE || bystatus == STOPPED) {
				// continue arriving
				status = START;
			}
		}
	}
	
	public double getRate() {
		return rate;
	}

	public int getBacksteps() {
		return backsteps;
	}

	public void setBacksteps(int backsteps) {
		this.backsteps = backsteps;
	}
}
