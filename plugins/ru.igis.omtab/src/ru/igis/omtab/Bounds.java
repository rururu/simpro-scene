/*
 * The contents of this file are subject to the Mozilla Public License
 * Version 1.1 (the "License");  you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for
 * the specific language governing rights and limitations under the License.
 *
 * Copyright (C) 2014 Sorokin R.P. (sorokinru@oogis.ru)
 * and Object-oriented Geoinformatic System Research Laboratory (http://oogis.ru)
 * All Rights Reserved.
 */

package ru.igis.omtab;

import java.util.Collection;

import com.bbn.openmap.proj.ProjMath;

import edu.stanford.smi.protege.model.Instance;

/**
 * Class for store and check restrictions of coordinates
 */
public class Bounds {
	
	private OMTPoly[] included;
	private OMTPoly[] excluded;
	
    /**
     * Create Bounds and load OMTPolys from corresponding slots.
     * Get OMTPolys and set arrays: 
     * included and excluded
     * @param instance
     */
	public Bounds(Instance instance){
		Collection<?> inss = instance.getOwnSlotValues(OpenMapTab.kb.getSlot(Ontology.S_INCLUDED));
		if(!inss.isEmpty()){
			included = new OMTPoly[inss.size()];
			int i = 0;
			for(Object ins: inss){
				included[i] = (OMTPoly) OMT.addMapOb((Instance) ins);
				i++;
			}
		}
		inss = instance.getOwnSlotValues(OpenMapTab.kb.getSlot(Ontology.S_EXCLUDED));
		if(!inss.isEmpty()){
			excluded = new OMTPoly[inss.size()];
			int i = 0;
			for(Object ins: inss){
				excluded[i] = (OMTPoly) OMT.addMapOb((Instance) ins);
				i++;
			}
		}
	}
	
    /**
     * Check if point fulfill restrictions of Bounds.
     * @param lat - latitude of point in degrees 
     * @param lon - longitude of point in degrees 
     * @return true if point is in Bounds
     */
	public boolean inBounds(double lat, double lon){
		double lat1 = ProjMath.radToDeg(lat);
		double lon1 = ProjMath.radToDeg(lon);
		if (included!=null)
			for(OMTPoly poly: included)
				if(!poly.contains(lat1, lon1))
					return false;
		if (excluded!=null)
			for(OMTPoly poly: excluded)
				if(poly.contains(lat1, lon1))
					return false;
		return true;
	}

	public OMTPoly[] getIncluded() {
		return included;
	}

	public void setIncluded(OMTPoly[] included) {
		this.included = included;
	}

	public OMTPoly[] getExcluded() {
		return excluded;
	}

	public void setExcluded(OMTPoly[] excluded) {
		this.excluded = excluded;
	}

}
