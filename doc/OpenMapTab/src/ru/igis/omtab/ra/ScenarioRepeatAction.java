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
 * Copyright (C) 2004 Sorokin R.P. (sorokinru@iias.spb.su)
 * and Object-oriented Geoinformatics Systems Laboratory (http://niggis.iias.spb.su)
 * All Rights Reserved.
 */

package ru.igis.omtab.ra;

import ru.igis.omtab.*;
import edu.stanford.smi.protege.model.*;
/**
 * Reference realisation of Repeat Action interface
 * Preiodically invokes static method of some class (scenario)
 * @author ru
 */
public class ScenarioRepeatAction extends RepeatAction {
	
    private String scenario;
    
    public String getScenario() {
		return scenario;
	}

	public void setScenario(String scenario) {
		this.scenario = scenario;
	}

	/** Creates a new instance of ScenarioRepeatAction */
    public ScenarioRepeatAction() {}

    public ScenarioRepeatAction(Instance inst) {
    	super(inst);
    }
    /**
     * Method implementing periodically repeating action
     * @param time time elapsed between steps
     */
    public synchronized void repeat(double time) {
    	try {
			Util.execScenario(scenario);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    }
    
    /**
     * Method filling information to this RepeatAction object
     * from Protege Instance
     * @param instance Protege Instance describing this Repeat Action
     * @param kb Protege Knowledge Base
     */
    public void fillFromProtege(Instance instance, KnowledgeBase kb){
    	super.fillFromProtege(instance, kb);
        scenario = (String)instance.getOwnSlotValue(kb.getSlot(Ontology.S_SCENARIO));
    }

}
