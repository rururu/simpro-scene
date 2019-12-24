package ru.igis.sim.util;

import com.vividsolutions.jts.geom.Coordinate;
import com.vividsolutions.jts.geom.GeometryFactory;
import com.vividsolutions.jts.geom.LineString;
import com.vividsolutions.jts.linearref.LengthIndexedLine;

import sim.engine.SimState;
import sim.field.geo.GeomVectorField;
import sim.util.distribution.Normal;
import sim.util.geo.AttributeValue;
import sim.util.geo.MasonGeometry;

public class LineFollower extends Phase {
	private static final long serialVersionUID = 1L;

	private Coordinate position;
	private double currentIndex;
	private LengthIndexedLine lindline;
	private double rate = 0.0;
	private double startIndex;
	private double endIndex;
	
	public LineFollower(GeomVectorField gvField, String attrName, Object attrValue, MasonGeometry location, double absRate) {
		MasonGeometry masline = gvField.getGeometry(attrName, new AttributeValue(attrValue));
		if(masline != null) {
			LineString lineString = (LineString) masline.geometry;
			location.isMovable = true; 
			this.location = location;
			lindline = new LengthIndexedLine(lineString);
			startIndex = lindline.getStartIndex();
			endIndex = lindline.getEndIndex();
			Coordinate start = lindline.extractPoint(startIndex);
			Coordinate end = lindline.extractPoint(endIndex);
			Coordinate loc = location.geometry.getCoordinate();
			if (loc.distance(start) < loc.distance(end)) {
				this.rate = absRate;
			} else {
				this.rate = -absRate;
			}
			status = START;
		} else
			System.out.println("Line (MasonGeometry) not found for attribute "+attrName+" value "+attrValue+"!");
	}

	public LineFollower(MasonGeometry masline, MasonGeometry location, double moveRate) {
		this((LineString) masline.geometry, location, moveRate);
	}
	
	public LineFollower(double[] xys, GeometryFactory factory, MasonGeometry location, double moveRate) {
		Coordinate[] coords = new Coordinate[xys.length / 2];
		for(int i=0; i<xys.length; i += 2) {
			coords[i/2] = new Coordinate(xys[i], xys[i+1]);
		}
		LineString lineString = factory.createLineString(coords);
		location.isMovable = true; 
		this.location = location;
		this.rate = moveRate;
		lindline = new LengthIndexedLine(lineString);
		startIndex = lindline.getStartIndex();
		endIndex = lindline.getEndIndex();
		status = START;
	}

	public LineFollower(LineString lineString, MasonGeometry location, double moveRate) {
		location.isMovable = true; 
		this.location = location;
		this.rate = moveRate;
		lindline = new LengthIndexedLine(lineString);
		startIndex = lindline.getStartIndex();
		endIndex = lindline.getEndIndex();
		status = START;
	}
	
	@Override
	public void step(SimState state) {
		// actualization of location position
		if(status == START) {
			if (rate > 0)
				currentIndex = startIndex;
			else
				currentIndex = endIndex;
			status = PROCESS;
		}
		if (status == PROCESS) {
			currentIndex += rate;
			if (currentIndex > endIndex) {
				currentIndex = endIndex;
				status = DONE;
			} else if (currentIndex < startIndex) {
				currentIndex = startIndex;
				status = DONE;
			}
			position = lindline.extractPoint(currentIndex);
			moveLocationTo(position);
		}
	}
	
	public static double[] randomisedRoute(double[] xyMeans, double stdX, double stdY, Normal normal) {
		int length = xyMeans.length;
		if (length >= 6) {
			double[] randRoute = new double[length];
			randRoute[0] = xyMeans[0];
			randRoute[1] = xyMeans[1];
			for (int i = 2; i < length-2; i += 2) {
				randRoute[i] = normal.nextDouble(xyMeans[i], stdX);
				randRoute[i + 1] = normal.nextDouble(xyMeans[i + 1], stdY);
			}
			randRoute[length-2] = xyMeans[length-2];
			randRoute[length-1] = xyMeans[length-1];
			return randRoute;
		} else
			return xyMeans;
	}

	public double getRate() {
		return rate;
	}
}
