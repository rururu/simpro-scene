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
  sim.portrayal.simple.OvalPortrayal2D
  com.vividsolutions.jts.geom.Envelope
  com.vividsolutions.jts.geom.Coordinate
  com.vividsolutions.jts.geom.GeometryFactory
  com.vividsolutions.jts.linearref.LengthIndexedLine)
(:require
  clojure.java.shell))
(def WIDTH 1000)
(def HEIGHT 1000)
(def NUM-AGENTS 1000)
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
(def agent-port (GeomVectorFieldPortrayal.))
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
(deftype CampusWorld []
	ru.igis.sim.IWorld
	(initialise [this] (load "mas/world")
(init-world))
	(start [this world] (start-world world))
)
(deftype CampusPorts []
	ru.igis.sim.IPorts
	(createDisplay [this wgui world] (create-display wgui world))
	(setup [this display world] (setup-ports display world))
)
(defn init-world []
  (let [netiter (.nodeIterator network)
       masked (Bag.)
       MBR (.getMBR buildings)]
  (.add masked "NAME")
  (.add masked "FLOORS")
  (.add masked "ADDR_NUM")
  (println "reading buildings layer") 
  (ShapeFileImporter/read (URL. "file:data/campus/bldg.shp") buildings)
  (println "reading roads layer") 
  (ShapeFileImporter/read (URL. "file:data/campus/roads.shp") roads)
  (.expandToInclude MBR (.getMBR roads))
  (println "reading walkways layer")
  (ShapeFileImporter/read (URL. "file:data/campus/walk_ways.shp") walkways)
  (.expandToInclude MBR (.getMBR walkways))
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

(defn move-to [coord point-to loc-geo]
  (.setCoordinate point-to coord)
(.apply loc-geo point-to)
(.geometryChanged loc-geo))

(defn find-new-path [world loc-geo]
  (if-let [curr-junc (.findNode network (.getCoordinate loc-geo))]
  (let [des (.getOutEdges curr-junc)
         edges (.getEdges des)
         nxt (.nextInt (.random world) (count edges))
         dired (nth (seq edges) nxt)
         edge (.getEdge dired)
         newp (.getLine edge)
         startp (.getStartPoint newp)
         endp (.getEndPoint newp)]
    (if (= startp loc-geo)
      [newp true]
      (if (= endp loc-geo)
        [newp false]
        (do (println "Where am I?") nil))))))

(defn set-new-route [line start astate point-to loc-geo]
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
      (move-to (.extractPoint seg sind) point-to loc-geo))
    (do (vswap! astate assoc
            :curr-index eind
            :move-rate (- (:base-rate @astate)))
      (move-to (.extractPoint seg eind) point-to loc-geo)))))

(defn create-astate [world]
  (let [point (.createPoint factory (Coordinate. 10 10))
       loc (MasonGeometry. point)
       loc-geo (.getGeometry loc)
       point-to (PointMoveTo.)
       base-rate 1.0
       astate (volatile! {:base-rate base-rate
                                 :move-rate base-rate
                                 :segment nil
                                 :start-index 0.0
                                 :end-index 0.0
                                 :curr-index 0.0
                                 :point-to point-to
                                 })
       rand (.random world)
       ww-geos (.getGeometries walkways)
       wwn (.nextInt rand (.numObjs ww-geos))
       mg (.get ww-geos wwn)]
  (set! (.isMovable loc) true)
  (set-new-route (.getGeometry mg) true astate point-to loc-geo)
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
  (.attach display agent-port "Agents" true)
  display))

(defn move [astate world]
  (let [ast @astate
       move-rate (:move-rate ast)
       curr-index (:curr-index ast)
       start-index (:start-index ast)
       end-index (:end-index ast)
       point-to (:point-to ast)
       location (:location ast)
       loc-geo (.getGeometry location)]
  (if (or (and (> move-rate 0) (>= curr-index end-index))
           (and (< move-rate 0) (<= curr-index start-index)))
    (let [[newp start] (find-new-path world loc-geo)]
      (set-new-route newp start astate point-to loc-geo))
    (let [curr-index (+ curr-index move-rate)
           curr-index (if (< move-rate 0)
                              (if (< curr-index start-index)
                                  start-index
                                  curr-index)
                              (if (> curr-index end-index)
                                  end-index
                                  curr-index))
           curr-pos (.extractPoint (:segment ast) curr-index)]
      (move-to curr-pos point-to loc-geo)
      (vswap! astate assoc :curr-index curr-index)))))

(defn setup-ports [display world]
  (.setField walk-port walkways)
(.setPortrayalForAll walk-port (GeomPortrayal. Color/PINK true))
(.setField build-port buildings)
(.setPortrayalForAll build-port (GeomPortrayal. Color/GRAY))
(.setField road-port roads)
(.setPortrayalForAll road-port (GeomPortrayal. Color/LIGHT_GRAY true))
(.setField agent-port agents)
(.setPortrayalForAll agent-port (OvalPortrayal2D. Color/RED 10.0)))

(defn run-world-gui [hm inst]
  (let [mp (into {} hm)
       iwd (mp "iWorld-class")
       ipts (mp "iPorts-class")
       cmd (str "(ru.igis.sim.WorldGUI/main (into-array String [\"" iwd "\" \"" ipts "\"]))")]
  (println cmd)
  (println (clojure.java.shell/sh  "clj" "-e" cmd))))

