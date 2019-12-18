package ru.igis.sim.util;

import java.util.List;
import java.util.function.BiFunction;

import com.vividsolutions.jts.geom.Coordinate;
import com.vividsolutions.jts.geom.Geometry;
import com.vividsolutions.jts.geom.LineString;
import com.vividsolutions.jts.geom.Point;
import com.vividsolutions.jts.planargraph.DirectedEdge;
import com.vividsolutions.jts.planargraph.Node;

import sim.engine.SimState;
import sim.util.geo.GeomPlanarGraph;
import sim.util.geo.GeomPlanarGraphDirectedEdge;
import sim.util.geo.GeomPlanarGraphEdge;
import sim.util.geo.MasonGeometry;


public class NetworkFollower extends Phase {
	private static final long serialVersionUID = 1L;

	private GeomPlanarGraph network;
	private double moveRate = 0.0;
	private double rate = 0.0;
	private LineFollower lineFollower;
	private BiFunction<NetworkFollower, SimState, LineFollower> funkEdgeFollower;
	private GeomPlanarGraphEdge followEdge;

	public NetworkFollower(
			GeomPlanarGraph network,
			MasonGeometry location, 
			double moveRate,
			BiFunction<NetworkFollower, SimState, LineFollower> funkEdgeFollower) {
		this.network = network;
		this.location = location;
		this.moveRate = moveRate;
		this.funkEdgeFollower = funkEdgeFollower;
		status = START;
	}

	@SuppressWarnings("unchecked")
	public List<DirectedEdge> outDirectedEdges(Coordinate coord) {
		// find all the adjacent junctions
		Node junc = network.findNode(coord);
		if (junc != null)
			return junc.getOutEdges().getEdges();
		else
			return null;
	}
	
	public LineFollower edgeFollower(DirectedEdge dir_edge) {
		GeomPlanarGraphDirectedEdge gd_edge = (GeomPlanarGraphDirectedEdge) dir_edge;
		followEdge = (GeomPlanarGraphEdge) gd_edge.getEdge();
		LineString newRoute = followEdge.getLine();
		Point startPoint = newRoute.getStartPoint();
		Point endPoint = newRoute.getEndPoint();
		Geometry locgeom = location.getGeometry();
		if (startPoint.equals(locgeom))
			return new LineFollower(newRoute, location, moveRate);
		if (endPoint.equals(locgeom))
			return new LineFollower(newRoute, location, -moveRate);
		System.out.println("Where am I?" + location);
		return null;
	}

	@Override
	public void step(SimState state) {
		if (status == PROCESS) {
			lineFollower.step(state);
			if (lineFollower.status == DONE) {
				lineFollower = funkEdgeFollower.apply(this, state);
				if (lineFollower == null) {
					status = DONE;
				}
			}
		} else if (status == START) {
			if (lineFollower == null)
				lineFollower = funkEdgeFollower.apply(this, state);
			if (lineFollower == null) {
				status = FAILED;
			} else
				status = PROCESS;
		}
	}

	public double getRate() {
		return rate;
	}

	public double getMoveRate() {
		return moveRate;
	}
	public GeomPlanarGraph getNetwork() {
		return network;
	}
	public void setNetwork(GeomPlanarGraph network) {
		this.network = network;
	}
	public LineFollower getLineFollower() {
		return lineFollower;
	}
	public void setLineFollower(LineFollower lineFollower) {
		this.lineFollower = lineFollower;
	}
	public BiFunction<NetworkFollower, SimState, LineFollower> getFunkLineFollower() {
		return funkEdgeFollower;
	}
	public void setFunkLineFollower(BiFunction<NetworkFollower, SimState, LineFollower> funkLineFollower) {
		this.funkEdgeFollower = funkLineFollower;
	}
	public void setMoveRate(double moveRate) {
		this.moveRate = moveRate;
	}
	public void setRate(double rate) {
		this.rate = rate;
	}

	public BiFunction<NetworkFollower, SimState, LineFollower> getFunkEdgeFollower() {
		return funkEdgeFollower;
	}

	public void setFunkEdgeFollower(BiFunction<NetworkFollower, SimState, LineFollower> funkEdgeFollower) {
		this.funkEdgeFollower = funkEdgeFollower;
	}

	public GeomPlanarGraphEdge getFollowEdge() {
		return followEdge;
	}

	public void setFollowEdge(GeomPlanarGraphEdge followEdge) {
		this.followEdge = followEdge;
	}
	
}
