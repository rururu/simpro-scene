(ns mas.world.turcana
)
(def WIN-WIDTH 400)
(def WIN-HEIGHT 400)
(def MONTHS-OF-WEATHER 144)
(def HERDER-VISION 1)
(def agents [])
(def pop-dens-grid 0)
(def rain-grid 0)
(def mon-rain-grids [])
(def ndvi-grid 0)
(def veget-grid )
(def agent-grid )
(def veg-grow-rate (volatile! 0.1))
(def veg-cons-rate (volatile! 0.1))
(def veg-max-level (volatile! 1))
(def veg-engy-peruni (volatile! 15))
(def birth-engy (volatile! 20))
(def engy-cons-rate (volatile! 1))
(def starv-level (volatile! -2))
(def ini-with-ndvi (volatile! true))
(def agents-num (volatile! 50))
(def month (volatile! 0))
(deftype Turcanian [tstate ]
	sim.engine.Steppable
	(step [this world] nil)
)
(deftype TurcanaModel []
	ru.igis.sim.IWorld
	(initialise [this] nil)
	(start [this world] nil)
)
(deftype TurcanaModelGUI []
	ru.igis.sim.IPorts
	(createDisplay [this wgui world] nil)
	(setup [this display world] nil)
	(info [this] nil)
)
