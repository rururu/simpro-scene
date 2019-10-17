package ru.igis.sim.util;

import com.vividsolutions.jts.geom.Coordinate;
import com.vividsolutions.jts.geom.LineString;
import com.vividsolutions.jts.linearref.LengthIndexedLine;

import sim.engine.SimState;
import sim.engine.Steppable;
import sim.util.geo.MasonGeometry;
import sim.util.geo.PointMoveTo;

public class LineFollower implements Steppable {
	private static final long serialVersionUID = 1L;

	private MasonGeometry location;
	private Coordinate position;
	private double currentIndex;
	private LengthIndexedLine lindline;
	private double moveRate = 0.0;
	private double startIndex;
	private double endIndex;
	private PointMoveTo pmt = new PointMoveTo();

	public LineFollower(MasonGeometry masline, MasonGeometry location, double moveRate) {
		this((LineString) masline.geometry, location, moveRate);
	}

	public LineFollower(LineString lineString, MasonGeometry location, double moveRate) {
		location.isMovable = true; 
		this.location = location;
		this.moveRate = moveRate;
		lindline = new LengthIndexedLine(lineString);
		startIndex = lindline.getStartIndex();
		endIndex = lindline.getEndIndex();
		if (moveRate > 0)
			currentIndex = startIndex;
		else
			currentIndex = endIndex;
		position = lindline.extractPoint(currentIndex);
		moveTo(position);
	}
	
    private void moveTo(Coordinate c)
    {
        pmt.setCoordinate(c);
        location.getGeometry().apply(pmt);
        location.geometry.geometryChanged();
    }

	@Override
	public void step(SimState state) {
		if (moveRate != 0.0) {
			currentIndex += moveRate;
			if (currentIndex > endIndex) {
				currentIndex = endIndex;
				moveRate = 0.0;
			} else if (currentIndex < startIndex) {
				currentIndex = startIndex;
				moveRate = 0.0;
			}
			position = lindline.extractPoint(currentIndex);
			moveTo(position);
		}
	}

	public MasonGeometry getLocation() {
		return location;
	}

	public Coordinate getPosition() {
		return position;
	}

	public double getMoveRate() {
		return moveRate;
	}
}
