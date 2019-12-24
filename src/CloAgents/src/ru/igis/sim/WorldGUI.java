package ru.igis.sim;

import java.awt.Color;
import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;

import javax.swing.JFrame;

import sim.display.Console;
import sim.display.Controller;
import sim.display.Display2D;
import sim.display.GUIState;
import sim.engine.SimState;

public class WorldGUI extends GUIState  {

	public Display2D display;
	public JFrame displayFrame;
	public static IPorts iports;

	
	public WorldGUI(IWorld iworld, IPorts iports) {
		super(new World(System.currentTimeMillis(), iworld));
		WorldGUI.iports = iports;
	}

	public WorldGUI(SimState state) {
		super(state);
	}
	
	public static String getName() { return "WorldGUI"; }
	
	@SuppressWarnings("all")
	public static void main(String[] args) throws ClassNotFoundException, InstantiationException,
			IllegalAccessException, IllegalArgumentException, InvocationTargetException {
		Class<IWorld> iwc = (Class<IWorld>) Class.forName(args[0]);
		Class<IPorts> ipc = (Class<IPorts>) Class.forName(args[1]);
		Constructor[] wcs = iwc.getConstructors();
		Constructor[] pcs = ipc.getConstructors();
		IWorld iworld = (IWorld) wcs[0].newInstance(null);
		IPorts iports = (IPorts) pcs[0].newInstance(null);
		WorldGUI vid = new WorldGUI(iworld, iports);
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
		World w = (World) state;
		iports.setup(display, w);
		display.reset();
		display.setBackdrop(Color.white);
		display.repaint();
	}
	
	public void init(Controller c) {
		super.init(c);
		World w = (World) state;
		display = iports.createDisplay(this, w);
		displayFrame = display.createFrame();
		displayFrame.setTitle("CloAgent Display");
		c.registerFrame(displayFrame);
		displayFrame.setVisible(true);
	}
	
	public static Object getInfo() {
		return iports.info();
	}
}
