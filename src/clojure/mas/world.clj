(ns mas.world
(:import
  java.net.URL
  sim.util.Bag
  sim.field.geo.GeomVectorField
  sim.io.geo.ShapeFileImporter
  sim.util.geo.MasonGeometry
  sim.display.Display2D
  com.vividsolutions.jts.geom.Envelope
  java.awt.Color))
(def WIDTH 1000)
(def HEIGHT 1000)
(def NUM_AGENTS 50)
(def buildings (GeomVectorField. WIDTH HEIGHT))
(def walkways (GeomVectorField. WIDTH HEIGHT))
(def roads (GeomVectorField. WIDTH HEIGHT))
(def display nil)
(def colorMap nil)
(deftype Agent [astat ]
	sim.engine.Steppable
	(step [this agents] nil)
)
(deftype IWorldImpl []
	ru.igis.sim.IWorld
	(init [this] (let [buildings (GeomVectorField. 1000 1000)
       roads (GeomVectorField. 1000 1000) 
       walkways (GeomVectorField. 1000 1000)
       masked (Bag.)
       _ (.add masked "NAME")
       _ (.add masked "FLOORS")
       _ (.add masked "ADDR_NUM")
       _ (println "reading buildings layer") 
       _ (ShapeFileImporter/read (URL. "file:data/campus/bldg.shp") buildings)
       MBR (.getMBR buildings)
       _ (println "reading roads layer") 
       _ (ShapeFileImporter/read (URL. "file:data/campus/roads.shp") roads)
       _ (.expandToInclude MBR (.getMBR roads))
       _ (println "reading walkways layer")
       _ (ShapeFileImporter/read (URL. "file:data/campus/walk_ways.shp") walkways)
       _ (.expandToInclude MBR (.getMBR walkways))]
  (println "Done reading data")
  (.setMBR buildings MBR)
  (.setMBR roads MBR)
  (.setMBR walkways MBR)))
	(start [this word] nil)
)
(deftype IPortsImpl []
	ru.igis.sim.IPorts
	(createDisplay [this wgui] (def dispay (Display2D. WIDTH HEIGHT wgui)))
	(setup [this world display] nil)
)
