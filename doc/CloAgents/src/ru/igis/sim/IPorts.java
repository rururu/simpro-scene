package ru.igis.sim;

import sim.display.Display2D;

public interface IPorts {
	
	public Display2D createDisplay(WorldGUI wgui, World world);
	
	public void setup(Display2D display, World world);

}
