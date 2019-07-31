package ru.igis.sim;

import java.awt.Color;

import javax.swing.JFrame;

import sim.display.Console;
import sim.display.Controller;
import sim.display.Display2D;
import sim.display.GUIState;
import sim.engine.SimState;
import sim.portrayal.FieldPortrayal2D;

public class CloAgentsGUI extends GUIState {
	
	public Display2D display;
	public JFrame displayFrame;
	public FieldPortrayal2D areaPortrayal;
	public CloAgentsPorts cloAgentsPorts;

	
	public CloAgentsGUI() { 
		super(new CloAgents(System.currentTimeMillis())); 
		cloAgentsPorts = new mas.cloagents.CloAgentsPortsImpl();
		areaPortrayal = cloAgentsPorts.createAreaPortrayal();
	}

	public CloAgentsGUI(SimState state) {
		super(state);
		// TODO Auto-generated constructor stub
	}
	
	public static String getName() { return "CloAgentsGUI"; }
	
	public static void main(String[] args) {
		CloAgentsGUI vid = new CloAgentsGUI();
		Console c = new Console(vid);
		c.setVisible(true);
	}

	public void start() {
		super.start();
		setupPortrayals();
	}

	public void load(SimState state) {
		super.load(state);
		setupPortrayals();
	}

	public void setupPortrayals() {
		CloAgents cloants = (CloAgents) state;
		// tell the portrayals what to portray and how to portray them
		areaPortrayal.setField(cloants.cloAgentsState.takeArea());
		cloAgentsPorts.cloSetupPorts(areaPortrayal);
		// areaPortrayal.setPortrayalForAll(new OvalPortrayal2D(Color.RED, 0.1));
		// reschedule the displayer
		display.reset();
		display.setBackdrop(Color.white);
		// redraw the display
		display.repaint();
	}
	
	public void init(Controller c) {
		super.init(c);
		display = new Display2D(
				cloAgentsPorts.displayWidth(), 
				cloAgentsPorts.displayHeight(), this);
		display.setClipping(false);
		displayFrame = display.createFrame();
		displayFrame.setTitle("CloAgent Display");
		c.registerFrame(displayFrame);
		// so the frame appears in the "Display" list
		displayFrame.setVisible(true);
		display.attach(areaPortrayal, "CloAgent Area");
	}
}
