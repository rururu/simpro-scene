package ru.igis.sim.util;

import sim.engine.SimState;
import sim.field.geo.GeomVectorField;
import sim.util.geo.MasonGeometry;

public class AttributesFollower extends Phase {
  private static final long serialVersionUID = 1L;
  
  private LineFollower lineFollower;
  private int length;
  private int lap;
  private GeomVectorField gvField;
  private String[] attrNames;
  private Object[] attrValues;
  private double absMoveRate;
  
  public AttributesFollower(GeomVectorField gvField, String[] attrNames, Object[] attrValues, MasonGeometry location, double absMoveRate) {
    this.gvField = gvField;
    this.attrNames = attrNames;
    this.attrValues = attrValues;
    this.location = location;
    this.absMoveRate = absMoveRate;
    status = START;
  }

  
	public void step(SimState state) {
		if (status == START) {
			length = attrNames.length;
			lap = 0;
			lineFollower = new LineFollower(gvField, attrNames[lap], attrValues[lap], location, absMoveRate);
			status = PROCESS;
		}
		if (lineFollower != null) {
			lineFollower.step(state);
			if (lineFollower.status == DONE) {
				lap++;
				if (lap >= length) {
					lineFollower = null;
				} else {
					lineFollower = new LineFollower(gvField, attrNames[lap], attrValues[lap], location, absMoveRate);
				}
			}
		} else {
			status = DONE;
		}
	}
  
  public LineFollower getLineFollower() { return lineFollower; }
  
  public int getLength() { return length; }
  
  public int getLap() { return lap; }
    
  public double getRate() { return lineFollower.getRate(); }
}
