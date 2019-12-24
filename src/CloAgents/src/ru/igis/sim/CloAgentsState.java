package ru.igis.sim;

import sim.field.continuous.Continuous2D;

public interface CloAgentsState {
	
	public void init();
	
	public void cloStart(CloAgents cloants);
	
	public Continuous2D takeArea();

}
