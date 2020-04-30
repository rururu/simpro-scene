package ru.igis.sim.util;

import java.util.List;
import java.util.function.BiFunction;

import com.vividsolutions.jts.geom.Coordinate;
import com.vividsolutions.jts.planargraph.DirectedEdge;

import sim.engine.SimState;

public class RandomEdgeFollower implements BiFunction<NetworkFollower, SimState, LineFollower> {

	@Override
	public LineFollower apply(NetworkFollower net_follower, SimState state) {
		Coordinate coord = net_follower.location.geometry.getCoordinate();
		List<DirectedEdge> out_edges = net_follower.outDirectedEdges(coord);
		if (out_edges != null) {
			DirectedEdge nextEdge = out_edges.get(state.random.nextInt(out_edges.size()));
			return net_follower.edgeFollower(nextEdge);
		} else
			return null;
	}

}
