(ns mas.world.campus
(:import
  java.net.URL
  java.awt.Color
  sim.util.Bag
  sim.field.geo.GeomVectorField
  sim.io.geo.ShapeFileImporter
  sim.io.geo.ShapeFileExporter
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
  com.vividsolutions.jts.linearref.LengthIndexedLine
  ru.igis.sim.util.AStar
  ru.igis.sim.util.LineFollower
  ru.igis.sim.util.NetworkFollower
  ru.igis.sim.util.RandomEdgeFollower))
(def NUM-AGENTS 1)
(def WIDTH 1000)
(def HEIGHT 1000)
(def BUILDINGS-URLS ["file:data/mas/campus/bldg.shp"
 "file:data/mas/campus/bldg.dbf"])
(def ROADS-URLS ["file:data/mas/campus/roads.shp"
 "file:data/mas/campus/roads.dbf"])
(def WALKWAYS-URLS ["file:data/mas/campus/walk_ways.shp"
 "file:data/mas/campus/walk_ways.dbf"])
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
(def ASTAR (AStar.))
(def NODES nil)
(def RATE 0.03)
(def declare-before (declare
  init-world
  start-world
  create-display
  setup-ports
  move
  astar-path-edges))
(deftype Agent [astate ]
	sim.engine.Steppable
	(step [this world] (.step (:net-follower @astate) world))
)
(deftype CampusWorld []
	ru.igis.sim.IWorld
	(initialise [this] (load "mas/world/campus")
(init-world)
(def NODES (vec (.getNodes network))))
	(start [this world] (start-world world))
	(finish [this world] (ShapeFileExporter/write "data/mas/campus/Agents" agents))
)
(deftype CampusPorts []
	ru.igis.sim.IPorts
	(createDisplay [this wgui world] (create-display wgui world))
	(setup [this display world] (setup-ports display world))
	(info [this] (URL. "file:data/mas/campus/CampusWorld.html"))
)
(deftype EdgesPathFollower [epf-state ]
	java.util.function.BiFunction
	(apply [this netfol world] (let [{:keys [path index]} @epf-state]
  (println :IDX index :P (count path))
  (when (< index (count path))
    (vswap! epf-state assoc :index (inc index))
    (.edgeFollower netfol (path index)))))
)
(defn init-world []
  (let [netiter (.nodeIterator network)
       MBR (.getMBR buildings)
       [bsh bdb] BUILDINGS-URLS
       [rsh rdb] ROADS-URLS
       [wsh wdb] WALKWAYS-URLS]
  (println "reading buildings layer") 
  (ShapeFileImporter/read (URL. bsh) (URL. bdb) buildings)
  (println "reading roads layer") 
  (ShapeFileImporter/read (URL. rsh) (URL. rdb) roads)
  (.expandToInclude MBR (.getMBR roads))
  (println "reading walkways layer")
  (ShapeFileImporter/read (URL. wsh) (URL. wdb) walkways)
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

(defn create-astate [world i]
  (let [pat (astar-path-edges (+ i 200) (+ i 700))
       crd1 (.getCoordinate (pat 0))
       crd2 (Coordinate.  (.x crd1) (.y crd1))
       pnt (.createPoint factory crd2)
       loc (MasonGeometry. pnt)
       est (volatile! {:path pat
                            :index 0})      
       epf (EdgesPathFollower. est)
       ntf (NetworkFollower. network loc RATE epf)]
  (println :LOC loc)
  (volatile! {:location loc
                  :net-follower ntf})))

(defn start-world [world]
  (let [schedule (.schedule world)]
  (.clear agents)
  (dotimes [i NUM-AGENTS]
    (let [astate (create-astate world i)
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

(defn setup-ports [display world]
  (.setField walk-port walkways)
(.setPortrayalForAll walk-port (GeomPortrayal. Color/PINK true))
(.setField build-port buildings)
(.setPortrayalForAll build-port (GeomPortrayal. Color/GRAY))
(.setField road-port roads)
(.setPortrayalForAll road-port (GeomPortrayal. Color/LIGHT_GRAY true))
(.setField agent-port agents)
(.setPortrayalForAll agent-port (OvalPortrayal2D. Color/RED 10.0)))

(defn astar-path-edges [n1 n2]
  (vec (.astarPath ASTAR (NODES n1) (NODES n2))))

