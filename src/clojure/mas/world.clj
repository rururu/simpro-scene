(ns mas.world
(:import
  java.net.URL
  java.awt.Color
  sim.util.Bag
  sim.field.geo.GeomVectorField
  sim.io.geo.ShapeFileImporter
  sim.util.geo.GeomPlanarGraph
  sim.util.geo.MasonGeometry
  sim.display.Display2D
  sim.portrayal.geo.GeomPortrayal
  sim.portrayal.geo.GeomVectorFieldPortrayal
  com.vividsolutions.jts.geom.Envelope
  com.vividsolutions.jts.geom.GeometryFactory))
(deftype Agent [astat ]
	sim.engine.Steppable
	(step [this agents] nil)
)
(deftype IWorldImpl [^java.util.HashMap wstate ]
	ru.igis.sim.IWorld
	(initialise [this] (let [width 1000
       height 1000
       num-agents 50
       buildings (GeomVectorField. width height)
       roads (GeomVectorField. width height) 
       walkways (GeomVectorField. width height)
       agents (GeomVectorField. width height) 
       network (GeomPlanarGraph.)
       netiter (.nodeIterator network)
       fact (GeometryFactory.)
       junctions (GeomVectorField. width height) 
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
  (.setMBR walkways MBR)
  (.createFromGeomField network walkways)
  (while (.hasNext netiter)
    (let [node (.next netiter)
           coord (.getCoordinate node)
           point (.createPoint fact coord)]
      (.addGeometry junctions (MasonGeometry. point))))
  ;; Store world state
  (.put wstate :width width)
  (.put wstate :height height)
  (.put wstate :num-agents num-agents)
  (.put wstate :buildings buildings)
  (.put wstate :roads roads)
  (.put wstate :walkways walkways)
  (.put wstate :agents agents)))
	(start [this world] (let [wst (into {} (.wstate (.iworld world)))
       agents (:agents wst)
       buildings (:buildings wst)]
  (.clear agents)
  (.setMBR agents (.getMBR buildings))
  (.scheduleRepeating (.schedule world) (.scheduleSpatialIndexUpdater agents) Integer/MAX_VALUE 1.0)))
)
(deftype IPortsImpl []
	ru.igis.sim.IPorts
	(createDisplay [this wgui world] (let [build-port (GeomVectorFieldPortrayal.)
       road-port (GeomVectorFieldPortrayal.)
       walk-port (GeomVectorFieldPortrayal.)
       wstate (.wstate (.iworld world))
       wst (into {} wstate)
       display (Display2D. (:width wst) (:height wst) wgui)]
  (.attach display build-port "Buildings" true)
  (.attach display road-port "Roads" true)
  (.attach display walk-port "Walkways" true)
  (.put wstate :build-port build-port)
  (.put wstate :road-port road-port)
  (.put wstate :walk-port walk-port)
  (println :DISP display)
  display))
	(setup [this display world] (let [wst (into {} (.wstate (.iworld world)))
       build-port (:build-port wst)
       road-port (:road-port wst)
       walk-port (:walk-port wst)]
  (.setField walk-port (:walkways wst))
  (.setPortrayalForAll walk-port (GeomPortrayal. Color/PINK true))
  (.setField build-port (:buildings wst))
  (.setPortrayalForAll build-port (GeomPortrayal. Color/GRAY))
  (.setField road-port (:roads wst))
  (.setPortrayalForAll road-port (GeomPortrayal. Color/LIGHT_GRAY true))))
)
