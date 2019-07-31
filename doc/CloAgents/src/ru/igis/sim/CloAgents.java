package ru.igis.sim;

import sim.engine.SimState;

public class CloAgents extends SimState {
	private static final long serialVersionUID = 1L;
	
	public CloAgentsState cloAgentsState;
	
	public CloAgents(long seed) {
		super(seed);
		// Create and init CloAgentsStateImpl
		cloAgentsState = new mas.cloagents.CloAgentsStateImpl();
		cloAgentsState.init();
	}
	
	public void start() {
		super.start();
		cloAgentsState.cloStart(this);
	}
	
	public static void main(String[] args) {
		doLoop(CloAgents.class, args);
		System.exit(0);
	}
}
