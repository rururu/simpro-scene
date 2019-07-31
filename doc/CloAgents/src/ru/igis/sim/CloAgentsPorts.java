package ru.igis.sim;

import sim.portrayal.FieldPortrayal2D;

public interface CloAgentsPorts {
	
	public FieldPortrayal2D createAreaPortrayal();
	
	public int displayWidth();
	
	public int displayHeight();
	
	public void cloSetupPorts(FieldPortrayal2D area_port);

}
