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
  ru.igis.sim.util.RandomWalker
  ru.igis.sim.util.Arriver
  ru.igis.sim.util.RandomEdge))
(def normal-distr (Normal. 0.0 0.0 (MersenneTwisterFast.)))
(def NUM-C-SALMONS 100)
(def NUM-A-SALMONS 100)
(def WIDTH 1000)
(def HEIGHT 1000)
(def RIVERS-URLS ["file:data/shape/hiitolanjoki/hiitolanjoki_l.shp"
 "file:data/shape/hiitolanjoki/hiitolanjoki_l.dbf"])
(def LAKES-URLS ["file:data/shape/hiitolanjoki/hiitolanjoki_a.shp"
 "file:data/shape/hiitolanjoki/hiitolanjoki_a.dbf"])
(def YSALMON_RIVER_ROUTE [["NAME" "Hiitolanjoki"]
 ["NAME" "Кокколанйоки2"]
 ["NAME" "Кокколанйоки1"]
 ["NAME" "Вейяланъярви"]
 ["NAME" "Асиланйоки"]])
(def ASALMON_RIVER_ROUTE [["NAME" "Асиланйоки"]
 ["NAME" "Вейяланъярви"]
 ["NAME" "Кокколанйоки1"]
 ["NAME" "Кокколанйоки2"]
 ["NAME" "Hiitolanjoki"]])
(def ORIGIN (Coordinate. 0.0 0.0))
(def rivers (GeomVectorField. WIDTH HEIGHT))
(def lakes (GeomVectorField. WIDTH HEIGHT))
(def child-salmons (GeomVectorField. WIDTH HEIGHT))
(def young-salmons (GeomVectorField. WIDTH HEIGHT))
(def adult-salmons (GeomVectorField. WIDTH HEIGHT))
(def junctions (GeomVectorField. WIDTH HEIGHT))
(def network (GeomPlanarGraph.))
(def factory (GeometryFactory.))
(def rivers-port (GeomVectorFieldPortrayal.))
(def lakes-port (GeomVectorFieldPortrayal.))
(def csalmons-port (GeomVectorFieldPortrayal.))
(def asalmons-port (GeomVectorFieldPortrayal.))
(def ysalmons-port (GeomVectorFieldPortrayal.))
(def CHILD-RATE 0.0001)
(def YOUNG-RATE 0.0002)
(def ADULT-RATE 0.0003)
(def KIVIJARVI_ROUTES (volatile! {:routes 
 [[29.363 61.450 29.367 61.448 29.373 61.443 29.36 61.447 29.353 61.446 29.348 61.444]
  [29.380 61.445 29.375 61.449 29.372 61.443 29.36 61.447 29.353 61.446 29.348 61.444]
  [29.371 61.442 29.377 61.446 29.372 61.448 29.36 61.447 29.353 61.446 29.348 61.444]]
                :idx 0}))
(def PASTURES (volatile! {:coords 
	[[29.898 61.187]
	 [29.924 61.193]
	 [29.917 61.179]
	 [29.893 61.163]]
                :idx 0}))
(def declare-before (declare
  process
  next-pasture-coord
  create-asalmon-astate
  create-csalmon-astate
  start-ysalmon))
(def SPAWN-PLACES (volatile! {:coords 
	[[29.363 61.450]
	 [29.380 61.445]
	 [29.363 61.445]]
                :idx 0}))
(deftype ChildSalmon [astate ]
	sim.engine.Steppable
	(step [this world] (let [{:keys [phase lake-follower location stopper]} @astate]
  (condp = phase
    :LAKE  (process lake-follower :DONE astate world)
    :DONE (do (.stop stopper)
                 (start-ysalmon (.getCoordinate (.geometry location)) world))
                 ;;(.moveTo lake-follower ORIGIN))
    nil)))
)
(deftype YoungSalmon [astate ]
	sim.engine.Steppable
	(step [this world] (let [{:keys [phase lake-follower river-follower location]} @astate]
  (condp = phase
    :RIVER (process river-follower :DONE astate world)
    nil)))
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
  (.clear child-salmons)
  (.clear young-salmons)
  (.clear adult-salmons)
  (dotimes [i NUM-C-SALMONS]
    (let [astate (create-csalmon-astate world)
           a (ChildSalmon. astate)]
      (.addGeometry child-salmons (:location @astate))
      (vswap! astate assoc :stopper (.scheduleRepeating schedule a))))
  (.setMBR child-salmons (.getMBR rivers))
;;  (.scheduleRepeating schedule 
;;    (.scheduleSpatialIndexUpdater adult-salmons)
;;    Integer/MAX_VALUE 
;;    1.0)
  (.scheduleRepeating schedule 
    (.scheduleSpatialIndexUpdater young-salmons)
    Integer/MAX_VALUE 
    1.0)
  (.scheduleRepeating schedule 
    (.scheduleSpatialIndexUpdater child-salmons)
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
  (.attach display csalmons-port "CSalmons" true)
  (.attach display ysalmons-port "YSalmons" true)
  (.attach display asalmons-port "ASalmons" true)
  display))
	(setup [this display world] (.setField rivers-port rivers)
(.setPortrayalForAll rivers-port (GeomPortrayal. Color/BLUE true))
(.setField lakes-port lakes)
(.setPortrayalForAll lakes-port (GeomPortrayal. Color/LIGHT_GRAY))
(.setField csalmons-port child-salmons)
(.setPortrayalForAll csalmons-port (OvalPortrayal2D. (Color. 255 100 0) 0.2))
(.setField ysalmons-port young-salmons)
(.setPortrayalForAll ysalmons-port (OvalPortrayal2D. (Color. 0 125 0) 0.3))
(.setField asalmons-port adult-salmons)
(.setPortrayalForAll asalmons-port (OvalPortrayal2D. (Color. 101 67 33) 0.4))
(.setScale display 32.0)
(.setScrollPosition display 0.0 0.18))
	(info [this] "Hiitolanjoki's Salmon")
)
(defn process [phase next-key astate world]
  (if (= (.getStatus phase) "DONE")
  (vswap! astate assoc :phase next-key)
  (.step phase world)))

(defn random-route-walker [routes-map loc rate [sx sy] distro]
  (let [rsm @routes-map
       idx (:idx rsm)
       rts (:routes rsm)
       rte (nth rts idx)
       nxt (inc idx)
       rte (into-array Double/TYPE rte)
       rnd (LineFollower/randomisedRoute rte sx sy distro)]
  (vswap! routes-map assoc :idx (if (< nxt (count rts)) nxt 0))
  (LineFollower. rnd factory loc rate)))

(defn next-pasture-coord [pastures]
  (let [pp @pastures
       idx (:idx pp)
       cds (:coords pp)
       crd (nth cds idx)
       nxt (inc idx)]
  (vswap! pastures assoc :idx (if (< nxt (count cds)) nxt 0))
  (Coordinate. (first crd) (second crd))))

(defn create-csalmon-astate [world]
  (let [inp (.createPoint factory (Coordinate. 0.0 0.0))
       loc (MasonGeometry. inp)
       rate (.nextDouble normal-distr CHILD-RATE (/ CHILD-RATE 4))
       lf (random-route-walker KIVIJARVI_ROUTES loc rate [0.002 0.0001] normal-distr)]
  (volatile! {:location loc
                  :phase :LAKE
                  :lake-follower lf})))

(defn create-ysalmon-astate [crd world]
  (let [inp (.createPoint factory crd)
       loc (MasonGeometry. inp)
       rate (.nextDouble normal-distr YOUNG-RATE (/ YOUNG-RATE 4))
       rf (AttributesFollower. 
            rivers 
            (into-array String (map first YSALMON_RIVER_ROUTE))
            (into-array Object (map second YSALMON_RIVER_ROUTE))
            loc 
            rate)]
  (volatile! {:location loc
                  :phase :RIVER
                  :river-follower rf})))

(defn create-asalmon-astate [world]
  (let [rivent (Coordinate. 29.886 61.18)
       loc (MasonGeometry. 
              (.createPoint factory 
                (next-pasture-coord PASTURES)))
       rate (.nextDouble normal-distr ADULT-RATE (/ ADULT-RATE 4))
       lf (RandomWalker. loc rate 100 800 normal-distr lakes)
       bp (RandomWalker. loc rate 0.0 100.0 10.0 600 normal-distr lakes)
       af (Arriver. loc rivent rate lakes bp)
       rf (AttributesFollower. 
            rivers 
            (into-array String (map first ASALMON_RIVER_ROUTE))
            (into-array Object (map second ASALMON_RIVER_ROUTE))
            loc 
            rate)]
  (volatile! {:location loc
                  :phase :LAKE
                  :lake-follower lf
                  :river-arriver af
                  :river-follower rf})))

(defn start-ysalmon [crd world]
  (let [schedule (.schedule world)
       astate (create-ysalmon-astate crd world)
       a (YoungSalmon. astate)]
  (.addGeometry young-salmons (:location @astate))
  (vswap! astate assoc :stopper (.scheduleRepeating schedule a))
  (.setMBR young-salmons (.getMBR rivers))))

