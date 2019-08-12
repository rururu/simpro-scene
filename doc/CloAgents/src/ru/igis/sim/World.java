package ru.igis.sim;

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
	
	public static void main(String[] args) {
		doLoop(World.class, args);
		System.exit(0);
	}
}
