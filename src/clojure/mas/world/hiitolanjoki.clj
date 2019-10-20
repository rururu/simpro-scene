(ns mas.world.hiitolanjoki
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
  ru.igis.sim.util.LineFollower
  ru.igis.sim.util.NetworkFollower
  ru.igis.sim.util.RandomEdge))
(def NUM-A-SALMONS 100)
(def NUM-Y-SALMONS 100)
(def WIDTH 1000)
(def HEIGHT 1000)
(def RIVERS-URLS ["file:data/shape/hiitolanjoki/hiitolanjoki_l.shp"
 "file:data/shape/hiitolanjoki/hiitolanjoki_l.dbf"])
(def LAKES-URLS ["file:data/shape/hiitolanjoki/hiitolanjoki_a.shp"
 "file:data/shape/hiitolanjoki/hiitolanjoki_a.dbf"])
(def rivers (GeomVectorField. WIDTH HEIGHT))
(def lakes (GeomVectorField. WIDTH HEIGHT))
(def adult-salmons (GeomVectorField. WIDTH HEIGHT))
(def young-salmons (GeomVectorField. WIDTH HEIGHT))
(def junctions (GeomVectorField. WIDTH HEIGHT))
(def network (GeomPlanarGraph.))
(def factory (GeometryFactory.))
(def rivers-port (GeomVectorFieldPortrayal.))
(def lakes-port (GeomVectorFieldPortrayal.))
(def asalmons-port (GeomVectorFieldPortrayal.))
(def ysalmons-port (GeomVectorFieldPortrayal.))
(def declare-before (declare
  create-asalmon-astate
  create-ysalmon-astate))
(deftype AdultSalmon [astate ]
	sim.engine.Steppable
	(step [this world] (.step (:net-follower @astate) world))
)
(deftype YoungSalmon [astate ]
	sim.engine.Steppable
	(step [this world] (.step (:net-follower @astate) world))
)
(deftype JokiWorld []
	ru.igis.sim.IWorld
	(initialise [this] (load "mas/world/hiitolanjoki")
(let [netiter (.nodeIterator network)
       MBR (.getMBR rivers)
       [rsh rdb] RIVERS-URLS
       [lsh ldb] LAKES-URLS]
  (println "reading rivers layer") 
  (ShapeFileImporter/read (URL. rsh) (URL. rdb) rivers)
  (println "reading lakes layer") 
  (ShapeFileImporter/read (URL. lsh) (URL. ldb) lakes)
  (.expandToInclude MBR (.getMBR lakes))
  (println "Done reading data")
  (.setMBR rivers MBR)
  (.setMBR lakes MBR)
  (.createFromGeomField network rivers)
  (while (.hasNext netiter)
    (let [node (.next netiter)
           coord (.getCoordinate node)
           point (.createPoint factory coord)]
      (.addGeometry junctions (MasonGeometry. point))))))
	(start [this world] (let [schedule (.schedule world)]
  (.clear adult-salmons)
  (.clear young-salmons)
  (dotimes [i NUM-A-SALMONS]
    (let [astate (create-asalmon-astate world)
           a (AdultSalmon. astate)]
      (.addGeometry adult-salmons (:location @astate))
      (.scheduleRepeating schedule a)))
  (dotimes [i NUM-Y-SALMONS]
    (let [astate (create-ysalmon-astate world)
           a (YoungSalmon. astate)]
      (.addGeometry young-salmons (:location @astate))
      (.scheduleRepeating schedule a)))
  (.setMBR adult-salmons (.getMBR rivers))
  (.setMBR young-salmons (.getMBR rivers))
  (.scheduleRepeating schedule 
    (.scheduleSpatialIndexUpdater adult-salmons)
    Integer/MAX_VALUE 
    1.0)
  (.scheduleRepeating schedule 
    (.scheduleSpatialIndexUpdater young-salmons)
    Integer/MAX_VALUE 
    1.0)))
	(finish [this world] ;;(ShapeFileExporter/write "data/mas/campus/Agents" agents)
nil)
)
(deftype JokiPorts []
	ru.igis.sim.IPorts
	(createDisplay [this wgui world] (let [display (Display2D. WIDTH HEIGHT wgui)]
  (.attach display rivers-port "Rivers" true)
  (.attach display lakes-port "Lakes" true)
  (.attach display asalmons-port "ASalmons" true)
  (.attach display ysalmons-port "YSalmons" true)
  display))
	(setup [this display world] (.setField rivers-port rivers)
(.setPortrayalForAll rivers-port (GeomPortrayal. Color/BLUE true))
(.setField lakes-port lakes)
(.setPortrayalForAll lakes-port (GeomPortrayal. Color/LIGHT_GRAY))
(.setField asalmons-port adult-salmons)
(.setPortrayalForAll asalmons-port (OvalPortrayal2D. Color/RED 3.0))
(.setField ysalmons-port young-salmons)
(.setPortrayalForAll ysalmons-port (OvalPortrayal2D. Color/ORANGE 2.0)))
	(info [this] "Hiitolanjoki's Salmon")
)
(defn create-asalmon-astate [world]
  (let [re (ru.igis.sim.util.RandomEdge.)
       point (.createPoint factory (Coordinate. 10 10))
       loc (MasonGeometry. point)
       rand (.random world)
       rivgs (.getGeometries rivers)
       next (.nextInt rand (.numObjs rivgs))
       rig (.get rivgs next)
       rate 0.001
       lf (LineFollower. (.getGeometry rig) loc rate)
       nwf (NetworkFollower. network lf loc rate re world)]
  (volatile! {:location loc
                  :net-follower nwf})))

(defn create-ysalmon-astate [world]
  (let [re (ru.igis.sim.util.RandomEdge.)
       point (.createPoint factory (Coordinate. 10 10))
       loc (MasonGeometry. point)
       rand (.random world)
       rivgs (.getGeometries rivers)
       next (.nextInt rand (.numObjs rivgs))
       rig (.get rivgs next)
       rate 0.001
       lf (LineFollower. (.getGeometry rig) loc rate)
       nwf (NetworkFollower. network lf loc rate re world)]
  (volatile! {:location loc
                  :net-follower nwf})))

