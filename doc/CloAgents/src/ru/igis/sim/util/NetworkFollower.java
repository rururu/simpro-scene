package ru.igis.sim.util;

import java.util.List;
import java.util.function.BiFunction;

import com.vividsolutions.jts.geom.Geometry;
import com.vividsolutions.jts.geom.LineString;
import com.vividsolutions.jts.geom.Point;
import com.vividsolutions.jts.planargraph.DirectedEdge;
import com.vividsolutions.jts.planargraph.DirectedEdgeStar;
import com.vividsolutions.jts.planargraph.Node;

import sim.engine.SimState;
import sim.engine.Steppable;
import sim.util.geo.GeomPlanarGraph;
import sim.util.geo.GeomPlanarGraphDirectedEdge;
import sim.util.geo.GeomPlanarGraphEdge;
import sim.util.geo.MasonGeometry;

public class NetworkFollower implements Steppable {
	private static final long serialVersionUID = 1L;

	private GeomPlanarGraph network;
	private MasonGeometry location;
	private double moveRate = 0.0;
	private double currentRate = 0.0;
	private LineFollower lineFollower;
	private BiFunction<List<DirectedEdge>, Object, DirectedEdge> nextEdge;
	private Object nextEdgeParam;

	public NetworkFollower(
			GeomPlanarGraph network,
			LineFollower lineFollower,
			MasonGeometry location, 
			double moveRate,
			BiFunction<List<DirectedEdge>, Object, DirectedEdge> nextEdge,
			Object nextEdgeParam) {
		this.network = network;
		this.location = location;
		this.moveRate = moveRate;
		this.nextEdge = nextEdge;
		this.nextEdgeParam = nextEdgeParam;
		if(lineFollower == null)
			this.lineFollower = findNewPath();
		else
			this.lineFollower = lineFollower;
	}

	private LineFollower findNewPath() {
		// find all the adjacent junctions
		Geometry locgeom = location.getGeometry();
		Node currentJunction = network.findNode(locgeom.getCoordinate());
		if (currentJunction != null) {
			DirectedEdgeStar directedEdgeStar = currentJunction.getOutEdges();
			@SuppressWarnings("unchecked")
			List<DirectedEdge> edges = directedEdgeStar.getEdges();
			if (edges.size() > 0) {
				// pick one
				DirectedEdge next = nextEdge.apply(edges, nextEdgeParam);
				if (next == null)
					return null;
				GeomPlanarGraphDirectedEdge directedEdge = (GeomPlanarGraphDirectedEdge) next;
				GeomPlanarGraphEdge edge = (GeomPlanarGraphEdge) directedEdge.getEdge();
				// and start moving along it
				LineString newRoute = edge.getLine();
				Point startPoint = newRoute.getStartPoint();
				Point endPoint = newRoute.getEndPoint();
				if (startPoint.equals(locgeom))
					return new LineFollower(newRoute, location, moveRate);
				if (endPoint.equals(locgeom))
					return new LineFollower(newRoute, location, -moveRate);
				System.out.println("Where am I?" + location);
				return null;
			}
			System.out.println("No edges " + location);
			return null;
		}
		System.out.println("No junkction " + location);
		return null;
	}
	
	@Override
	public void step(SimState state) {
		if (lineFollower != null) {
			lineFollower.step(state);
			currentRate = lineFollower.getMoveRate();
			if (currentRate == 0.0) {
				lineFollower = findNewPath();
			}
		} else {
			currentRate = 0;
		}
		
	}

	public MasonGeometry getLocation() {
		return location;
	}

	public double getCurrentRate() {
		return currentRate;
	}

}
