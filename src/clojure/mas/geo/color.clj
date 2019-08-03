(ns mas.geo.color
(:import
  java.net.URL
  sim.util.Bag
  sim.field.geo.GeomVectorField
  sim.io.geo.ShapeFileImporter
  sim.util.geo.MasonGeometry))
(def WIDTH 300)
(def HEIGHT 300)
(def NUM_AGENTS 50)
(def county (GeomVectorField. WIDTH HEIGHT))
(def agents (GeomVectorField. WIDTH HEIGHT))
(deftype ColorAgent [astat ]
	sim.engine.Steppable
	(step [this agents] nil)
)
(deftype ColorState []
	ru.igis.sim.CloAgentsState
	(init [this] (let [pol-bnd (URL. "pol.shp")
       pol-db (URL. "pol.dbf")
       empty (Bag.)
       county (GeomVectorField. 300 300)]
  (ShapeFileImporter/read pol-bnd county empty MasonGeometry)
  (.computeConvexHull county)
  (.computeUnion county)))
	(cloStart [this cloants] nil)
)
(deftype ColorPorts []
	ru.igis.sim.CloAgentsPorts
	(createAreaPortrayal [this] nil)
	(displayHeight [this] 600)
	(displayWidth [this] 800)
	(cloSetupPorts [this aport] nil)
)
