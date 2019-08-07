(ns mas.world
(:import
  java.net.URL
  java.awt.Color
  sim.util.Bag
  sim.field.geo.GeomVectorField
  sim.io.geo.ShapeFileImporter
  sim.util.geo.GeomPlanarGraph
  sim.util.geo.MasonGeometry
  sim.util.geo.PointMoveTo
  sim.display.Display2D
  sim.portrayal.geo.GeomPortrayal
  sim.portrayal.geo.GeomVectorFieldPortrayal
  com.vividsolutions.jts.geom.Envelope
  com.vividsolutions.jts.geom.Coordinate
  com.vividsolutions.jts.geom.GeometryFactory
  com.vividsolutions.jts.linearref.LengthIndexedLine))
(def WIDTH 1000)
(def HEIGHT 1000)
(def NUM-AGENTS 10)
(def buildings (GeomVectorField. WIDTH HEIGHT))
(def roads (GeomVectorField. WIDTH HEIGHT))
(def walkways (GeomVectorField. WIDTH HEIGHT))
(def agents (GeomVectorField. WIDTH HEIGHT))
(def junctions (GeomVectorField. WIDTH HEIGHT))
(def network (GeomPlanarGraph.))
(def factory (GeometryFactory.))
(def build-port (GeomVectorFieldPortrayal.))
(def road-port (GeomVectorFieldPortrayal.))
(def walk-port (GeomVectorFieldPortrayal.))
(def declare-before (declare
  init-world
  start-world
  create-display
  setup-ports
  move))
(deftype Agent [astate ]
	sim.engine.Steppable
	(step [this world] (move astate world))
)
(deftype IWorldImpl []
	ru.igis.sim.IWorld
	(initialise [this] (load "mas/world")
(init-world))
	(start [this world] (start-world world))
)
(deftype IPortsImpl []
	ru.igis.sim.IPorts
	(createDisplay [this wgui world] (create-display wgui world))
	(setup [this display world] (setup-ports display world))
)
(defn init-world []
  (let [netiter (.nodeIterator network)
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
           point (.createPoint factory coord)]
      (.addGeometry junctions (MasonGeometry. point))))))

(defn move-to [coord]
  nil)

(defn set-new-route [line start astate]
  (let [seg (LengthIndexedLine. line)
       sind (.getStartIndex seg)
       eind (.getEndIndex seg)]
  (vswap! astate assoc
    :segment seg
    :start-index sind
    :end-index eind)
  (if start
    (do (vswap! astate assoc
            :curr-index sind
            :move-rate (:base-rate @astate))
      (move-to (.extractPoint seg sind)))
    (do (vswap! astate assoc
            :curr-index eind
            :move-rate -(:base-rate @astate))
      (move-to (.extractPoint seg eind))))))

(defn create-astate [world]
  (let [point (.createPoint factory (Coordinate. 10 10))
       loc (MasonGeometry. point)
       base-rate 1.0
       astate (volatile! {:base-rate base-rate
                                 :move-rate base-rate
                                 :segment nil
                                 :start-index 0.0
                                 :end-index 0.0
                                 :curr-index 0.0
                                 :point-to (PointMoveTo.)
                                 })
       rand (.random world)
       ww-geos (.getGeometries walkways)
       wwn (.nextInt rand (.numObjs ww-geos))
       mg (.get ww-geos wwn)]
  (set! (.isMovable loc) true)
  (set-new-route (.getGeometry mg) true astate)
  (println :LOC loc)
  (if (.nextBoolean rand)
         (do (.addStringAttribute loc "TYPE" "STUDENT")
               (.addIntegerAttribute loc "AGE"
                 (int (+ 20.0 (* 2.0 (.nextGaussian rand))))))
         (do (.addStringAttribute loc "TYPE" "FACULTY")
               (.addIntegerAttribute loc "AGE"
                  (int (+ 40.0 (* 9.0 (.nextGaussian rand)))))))
  (let [base-rate (* base-rate (Math/abs (.nextGaussian rand)))]
    (.addDoubleAttribute loc "MOVE RATE" base-rate)
    (vswap! astate assoc
      :location loc
      :base-rate base-rate))
  astate))

(defn start-world [world]
  (let [schedule (.schedule world)]
  (.clear agents)
  (dotimes [i NUM-AGENTS]
    (let [astate (create-astate world)
           a (Agent. astate)]
      (.addGeometry agents (:location @astate))
      (.scheduleRepeating schedule a)))
  (.setMBR agents (.getMBR buildings))
  (.scheduleRepeating schedule 
    (.scheduleSpatialIndexUpdater agents)
    Integer/MAX_VALUE 
    1.0)))

(defn create-display [wgui world]
  (let [display (Display2D. WIDTH HEIGHT wgui)]
  (.attach display build-port "Buildings" true)
  (.attach display road-port "Roads" true)
  (.attach display walk-port "Walkways" true)
  display))

(defn move [astate world]
  (println :AS astate))

(defn setup-ports [display world]
  (.setField walk-port walkways)
(.setPortrayalForAll walk-port (GeomPortrayal. Color/PINK true))
(.setField build-port buildings)
(.setPortrayalForAll build-port (GeomPortrayal. Color/GRAY))
(.setField road-port roads)
(.setPortrayalForAll road-port (GeomPortrayal. Color/LIGHT_GRAY true)))

