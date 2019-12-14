package ru.igis.sim.util;

import ec.util.MersenneTwisterFast;
import sim.engine.SimState;
import sim.field.geo.GeomVectorField;
import sim.util.distribution.AbstractDistribution;
import sim.util.distribution.Normal;
import sim.util.distribution.Uniform;
import sim.util.geo.MasonGeometry;

public class RandomWalker extends Walker {
	private static final long serialVersionUID = 1L;
	
	private double rateMean;
	private double rateStd;
	private double tackTimeMean;
	private double tackTimeStd;
	private Normal normal;
	private int elapsedTime;
	private int tackTime;
	private AbstractDistribution dirDistro;
	
	public RandomWalker(MasonGeometry location, 
			double rate,
			double tackTime,
			int timeLimit,
			Normal normal,
			GeomVectorField bounds) {
		this(location, rate, 0.0, tackTime, 0.0, timeLimit, normal, bounds,
				new Uniform(0, Math.PI * 2, new MersenneTwisterFast()));
	}
	
	public RandomWalker(MasonGeometry location, 
			double rate,
			double tackTime,
			int timeLimit,
			Normal normal,
			GeomVectorField bounds,
			AbstractDistribution dirDistro) {
		this(location, rate, 0.0, tackTime, 0.0, timeLimit, normal, bounds, dirDistro);
	}
	
	public RandomWalker(MasonGeometry location, 
			double rateMean, double rateStd,
			double tackTimeMean, double tackTimeStd,
			int timeLimit,
			Normal normal,
			GeomVectorField bounds) {
		this(location, rateMean, rateStd, tackTimeMean, tackTimeStd, timeLimit, normal, bounds,
				new Uniform(0, Math.PI * 2, new MersenneTwisterFast()));
	}

	public RandomWalker(MasonGeometry location, 
			double rateMean, double rateStd,
			double tackTimeMean, double tackTimeStd,
			int timeLimit,
			Normal normal,
			GeomVectorField bounds,
			AbstractDistribution dirDistro) {
		super(location, dirDistro.nextDouble(), normal.nextDouble(rateMean, rateStd), bounds);
		this.rateMean = rateMean;
		this.rateStd = rateStd;
		this.tackTimeMean = tackTimeMean;
		this.tackTimeStd = tackTimeStd;
		this.normal = normal;
		this.timeLimit = timeLimit;
		this.dirDistro = dirDistro;
		status = START;
	}
	
	@Override
	public void step(SimState state) {
		if (status == START) {
			tackTime = 0;
			elapsedTime = 0;
			determineNewDirection();
		}
		if (status == PROCESS) {
			if (elapsedTime < timeLimit) {
				if (tackTime > 0) {
					super.step(state);
				} else {
					determineNewDirection();
				}
				tackTime--;
				elapsedTime++;
			} else {
				status = DONE;
			}
		}
	}
	
	private void determineNewDirection() {
		direction = dirDistro.nextDouble();
		rate = normal.nextDouble(rateMean, rateStd);
		Vx = rate * Math.sin(direction);
		Vy = rate * Math.cos(direction);
		tackTime = (int) normal.nextDouble(tackTimeMean, tackTimeStd);
	}

	public int getElapsedTime() {
		return elapsedTime;
	}

	public void setElapsedTime(int elapsedTime) {
		this.elapsedTime = elapsedTime;
	}

	public int getTackTime() {
		return tackTime;
	}

	public void setTackTime(int tackTime) {
		this.tackTime = tackTime;
	}

}
