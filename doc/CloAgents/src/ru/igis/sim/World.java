package ru.igis.sim;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;

import sim.engine.SimState;

public class World extends SimState  {
	private static final long serialVersionUID = 1L;
	public IWorld iworld;

	public World(long seed, IWorld iworld) {
		super(seed);
		this.iworld = iworld;
		iworld.initialise();
	}

	public void start() {
		super.start();
		iworld.start(this);
	}
	
	@SuppressWarnings("all")
	public static void main(String[] args) throws ClassNotFoundException, InstantiationException,
			IllegalAccessException, IllegalArgumentException, InvocationTargetException {
		Class<IWorld> iwc = (Class<IWorld>) Class.forName(args[0]);
		Long max = Long.parseLong(args[1]);
		Integer trc = Integer.parseInt(args[2]);
		Constructor[] wcs = iwc.getConstructors();
		IWorld iworld = (IWorld) wcs[0].newInstance(null);
		World world = new World(System.currentTimeMillis(), iworld);
		world.start();
		long steps = 0;
		do
			if (!world.schedule.step(world))
				break;
			else {
				steps = world.schedule.getSteps();
				if (steps%trc == 0)
					System.out.println("Steps: "+steps);
			}	
		while (steps < max);
		world.finish();
		System.exit(0);
	}
}
