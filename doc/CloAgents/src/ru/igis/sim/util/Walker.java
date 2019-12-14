package ru.igis.sim.util;

import com.vividsolutions.jts.geom.Coordinate;

import sim.engine.SimState;
import sim.field.geo.GeomVectorField;
import sim.util.geo.MasonGeometry;

public class Walker extends Phase {
	private static final long serialVersionUID = 1L;
	
	private Coordinate position = null;
	protected double direction;
	private double x;
	private double y;
	protected double Vx;
	protected double Vy;
	protected double rate;
	private GeomVectorField bounds;
	private int backsteps = 4;
	
	public Walker(MasonGeometry location, int course, double rate) {
		this(location, Math.toRadians(course), rate, null);
	}
	
	public Walker(MasonGeometry location, int course, double rate, GeomVectorField bounds) {
		this(location, Math.toRadians(course), rate, bounds);
	}
	
	public Walker(MasonGeometry location, double direction, double rate, GeomVectorField bounds) {
		this.location = location;
		this.direction = direction;
		this.bounds = bounds;
		this.rate = rate;
		Vx = rate * Math.sin(direction);
		Vy = rate * Math.cos(direction);
		status = START;
	}

	@Override
	public void step(SimState step) {
		// actualization of location position
		if (status == START) {
			position = location.geometry.getCoordinate();
			x = position.x;
			y = position.y;
			status = PROCESS;
		}
		if (status == PROCESS) {
			if (bounds == null || bounds.isCovered(position)) {
				// agent inside bounds
				x += Vx;
				y += Vy;
				position.x = x;
				position.y = y;
				moveLocationTo(position);
			} else {
				// agent encounter obstacle
				x -= backsteps * Vx;
				y -= backsteps * Vy;
				position.x = x;
				position.y = y;
				moveLocationTo(position);
				direction -= Math.PI / 2 * (2 + Math.random() - Math.random());
				if (direction < 0)
					direction += 2 * Math.PI;
				Vx = rate * Math.sin(direction);
				Vy = rate * Math.cos(direction);
			}
		}
	}

	public double getRate() {
		return rate;
	}

	public double getDirection() {
		return direction;
	}
	
	public int getCourse() {
		return (int) Math.toDegrees(direction);
	}

	public int getBacksteps() {
		return backsteps;
	}

	public void setBacksteps(int backsteps) {
		this.backsteps = backsteps;
	}

}
