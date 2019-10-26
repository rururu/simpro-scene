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
  sim.util.distribution.Normal
  sim.display.Display2D
  sim.portrayal.geo.GeomPortrayal
  sim.portrayal.geo.GeomVectorFieldPortrayal
  sim.portrayal.simple.OvalPortrayal2D
  com.vividsolutions.jts.geom.Envelope
  com.vividsolutions.jts.geom.Coordinate
  com.vividsolutions.jts.geom.GeometryFactory
  com.vividsolutions.jts.linearref.LengthIndexedLine
  ec.util.MersenneTwisterFast
  ru.igis.sim.util.LineFollower
  ru.igis.sim.util.NetworkFollower
  ru.igis.sim.util.AttributesFollower
  ru.igis.sim.util.Arriver
  ru.igis.sim.util.RandomEdge))
(def random-gen (MersenneTwisterFast.))
(def normal-distr (Normal. 0.0 0.0 random-gen))
(def NUM-A-SALMONS 1000)
(def NUM-Y-SALMONS 1000)
(def WIDTH 1000)
(def HEIGHT 1000)
(def RIVERS-URLS ["file:data/shape/hiitolanjoki/hiitolanjoki_l.shp"
 "file:data/shape/hiitolanjoki/hiitolanjoki_l.dbf"])
(def LAKES-URLS ["file:data/shape/hiitolanjoki/hiitolanjoki_a.shp"
 "file:data/shape/hiitolanjoki/hiitolanjoki_a.dbf"])
(def ASALMON_RIVER_ROUTE [["NAME" "Асиланйоки"]
 ["NAME" "Вейяланъярви"]
 ["NAME" "Кокколанйоки1"]
 ["NAME" "Кокколанйоки2"]
 ["NAME" "Hiitolanjoki"]])
(def YSALMON_RIVER_ROUTE [["NAME" "Hiitolanjoki"]
 ["NAME" "Кокколанйоки2"]
 ["NAME" "Кокколанйоки1"]
 ["NAME" "Вейяланъярви"]
 ["NAME" "Асиланйоки"]])
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
(def YOUNG-RATE 0.00001)
(def ADULT-RATE 0.00002)
(def KIVIJARVI_ROUTE [29.360 61.446
 29.366 61.446 
 29.374 61.446 
 29.36 61.446])
(deftype AdultSalmon [astate ]
	sim.engine.Steppable
	(step [this world] (condp = (:phase @astate)
  :LAKE (.step (:lake-follower @astate) world)
  :RIVER (.step (:river-follower @astate) world))
(if (= (.getRate (:lake-follower @astate)) 0.0)
  (vswap! astate assoc :phase :RIVER)))
)
(deftype YoungSalmon [astate ]
	sim.engine.Steppable
	(step [this world] (condp = (:phase @astate)
  :LAKE1 (if (= (.getMoveRate (:lake-follower1 @astate)) 0.0)
                (vswap! astate assoc :phase :LAKE2)
                (.step (:lake-follower1 @astate) world))
  :LAKE2 (if (= (.getRate (:lake-follower2 @astate)) 0.0)
                (vswap! astate assoc :phase :RIVER)
                (.step (:lake-follower2 @astate) world))
  :RIVER (.step (:river-follower @astate) world)))
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
(.setPortrayalForAll asalmons-port (OvalPortrayal2D. Color/RED 0.30))
(.setField ysalmons-port young-salmons)
(.setPortrayalForAll ysalmons-port (OvalPortrayal2D. Color/ORANGE 0.2))
(.setScale display 64.0)
(.setScrollPosition display 0.208 0.28))
	(info [this] "Hiitolanjoki's Salmon")
)
(defn random-route-walker [route loc rate]
  (let [rte (into-array Double/TYPE route)
       rnd (LineFollower/randomisedRoute rte 0.002 0.0015 random-gen)]
  (LineFollower. rnd factory loc rate)))

(defn create-asalmon-astate [world]
  (let [re (ru.igis.sim.util.RandomEdge.)
       point1 (.createPoint factory (Coordinate. 30.017 61.203))
       point2 (Coordinate. 29.882 61.179)
       loc (MasonGeometry. point1)
       rate  (.nextDouble normal-distr ADULT-RATE (/ ADULT-RATE 4))
       lf (Arriver. loc point2 rate)
       rf (AttributesFollower. 
            rivers 
            (into-array String (map first ASALMON_RIVER_ROUTE))
            (into-array Object (map second ASALMON_RIVER_ROUTE))
            loc 
            rate)]
  (volatile! {:location loc
                  :phase :LAKE
                  :lake-follower lf
                  :river-follower rf})))

(defn create-ysalmon-astate [world]
  (let [re (ru.igis.sim.util.RandomEdge.)
       inp (.createPoint factory (Coordinate. 29.0 61.0))
       hii (Coordinate. 29.347 61.444)
       loc (MasonGeometry. inp)
       rate (.nextDouble normal-distr YOUNG-RATE (/ YOUNG-RATE 4))
       lf (random-route-walker KIVIJARVI_ROUTE loc rate)
       af (Arriver. loc hii rate)
       rf (AttributesFollower. 
            rivers 
            (into-array String (map first YSALMON_RIVER_ROUTE))
            (into-array Object (map second YSALMON_RIVER_ROUTE))
            loc 
            rate)]
  (volatile! {:location loc
                  :phase :LAKE1
                  :lake-follower1 lf
                  :lake-follower2 af
                  :river-follower rf})))

