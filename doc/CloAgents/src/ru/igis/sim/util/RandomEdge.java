package ru.igis.sim.util;

import java.util.List;
import java.util.function.BiFunction;

import com.vividsolutions.jts.planargraph.DirectedEdge;

import sim.engine.SimState;

public class RandomEdge implements BiFunction<List<DirectedEdge>, Object, DirectedEdge> {

	@Override
	public DirectedEdge apply(List<DirectedEdge> edges, Object state) {
		SimState sim_state = (SimState) state;
		return edges.get(sim_state.random.nextInt(edges.size()));
	}

}
