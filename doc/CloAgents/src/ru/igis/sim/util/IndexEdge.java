package ru.igis.sim.util;

import java.util.List;
import java.util.function.BiFunction;

import com.vividsolutions.jts.planargraph.DirectedEdge;

public class IndexEdge implements BiFunction<List<DirectedEdge>, Object, DirectedEdge> {

	@Override
	public DirectedEdge apply(List<DirectedEdge> edges, Object index) {
		return edges.get((Integer) index);
	}

}
