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
(def INIT-NUM-SPAWN 12)
(def WIDTH 800)
(def HEIGHT 800)
(def RIVERS-URLS ["file:data/mas/hiitolanjoki/shape/hiitolanjoki_l.shp"
 "file:data/mas/hiitolanjoki/shape/hiitolanjoki_l.dbf"])
(def LAKES-URLS ["file:data/mas/hiitolanjoki/shape/hiitolanjoki_a.shp"
 "file:data/mas/hiitolanjoki/shape/hiitolanjoki_a.dbf"])
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
(def rivers (GeomVectorField. WIDTH HEIGHT))
(def lakes (GeomVectorField. WIDTH HEIGHT))
(def young-salmons (GeomVectorField. WIDTH HEIGHT))
(def child-salmons (GeomVectorField. WIDTH HEIGHT))
(def adult-salmons (GeomVectorField. WIDTH HEIGHT))
(def factory (GeometryFactory.))
(def rivers-port (GeomVectorFieldPortrayal.))
(def lakes-port (GeomVectorFieldPortrayal.))
(def csalmons-port (GeomVectorFieldPortrayal.))
(def asalmons-port (GeomVectorFieldPortrayal.))
(def ysalmons-port (GeomVectorFieldPortrayal.))
(def CHILD-RATE 0.0001)
(def YOUNG-RATE 0.0002)
(def ADULT-RATE 0.0003)
(def KIVIJARVI-ROUTES-FILE "data/mas/hiitolanjoki/kivijarvi_ways.clj")
(def LADOGA-ROUTES-FILE "data/mas/hiitolanjoki/ladoga_ways.clj")
(def KIVIJARVI-WAYS (volatile! {:ways (read-string (slurp KIVIJARVI-ROUTES-FILE))
                :idx 0}))
(def LADOGA-WAYS (volatile! {:ways (read-string (slurp LADOGA-ROUTES-FILE))
                :idx 0}))
(def NUM-SPAWN 8)
(def SPAWN-PLACES (volatile! {:places 
	[[29.363 61.450]
	 [29.380 61.445]
	 [29.363 61.445]]
                :idx 0}))
(def ESTUARY (Coordinate. 29.886 61.18))
(def declare-before (declare
  process
  relay-process
  next-pasture-coord
  create-asalmon-astate
  create-csalmon-astate
  start-ysalmon
  start-asalmon
  spawn))
(deftype ChildSalmon [cstate ]
	sim.engine.Steppable
	(step [this world] (let [cst @cstate
       {:keys [phase lake-follower]} cst]
  (condp = phase
    :LAKE  (process lake-follower :DONE cstate world)
    :DONE (start-ysalmon (relay-process lake-follower cst) world)
    nil)))
)
(deftype YoungSalmon [ystate ]
	sim.engine.Steppable
	(step [this world] (let [yst @ystate
       {:keys [phase lake-follower river-follower]} yst]
  (condp = phase
    :RIVER (process river-follower :LAKE ystate world)
    :LAKE  (process lake-follower :DONE ystate world)
    :DONE (start-asalmon (relay-process lake-follower yst) world)
    nil)))
)
(deftype AdultSalmon [astate ]
	sim.engine.Steppable
	(step [this world] (let [ast @astate
       {:keys [phase 
                   lake-follower 
                   river-arriver 
                   river-follower 
                   spawn-arriver]} ast]
  (condp = phase
    :LAKE        (process lake-follower :TORIVER astate world)
    :TORIVER   (process river-arriver :RIVER astate world)
    :RIVER       (process river-follower :TOSPAWN astate world)
    :TOSPAWN (process spawn-arriver :DONE astate world)
    :DONE       (spawn (relay-process spawn-arriver ast) world NUM-SPAWN)
    nil)))
)
(deftype JokiWorld []
	ru.igis.sim.IWorld
	(initialise [this] (load "mas/world/hiitolanjoki")
(let [MBR (.getMBR rivers)
       [rsh rdb] RIVERS-URLS
       [lsh ldb] LAKES-URLS]
  (println "reading rivers layer") 
  (ShapeFileImporter/read (URL. rsh) (URL. rdb) rivers)
  (println "reading lakes layer") 
  (ShapeFileImporter/read (URL. lsh) (URL. ldb) lakes)
  (.expandToInclude MBR (.getMBR lakes))
  (println "Done reading data")
  (.setMBR rivers MBR) 
  (.setMBR lakes MBR)))
	(start [this world] (def WORLD world)
(def THIS this)
(.clear child-salmons)
(.clear young-salmons)
(.clear adult-salmons)
(dotimes [i INIT-NUM-SPAWN]
  (spawn (Coordinate. 0.0 0.0) world))
(.setMBR child-salmons (.getMBR rivers))
(.setMBR young-salmons (.getMBR rivers))
(.setMBR adult-salmons (.getMBR rivers))
(.scheduleRepeating (.schedule world)
  (.scheduleSpatialIndexUpdater child-salmons)
  Integer/MAX_VALUE 
  1.0)
(.scheduleRepeating (.schedule world)
  (.scheduleSpatialIndexUpdater young-salmons)
  Integer/MAX_VALUE 
  1.0)
(.scheduleRepeating (.schedule world)
  (.scheduleSpatialIndexUpdater adult-salmons)
  Integer/MAX_VALUE 
  1.0))
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
(.setPortrayalForAll ysalmons-port (OvalPortrayal2D. (Color. 0 200 0) 0.3))
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

(defn relay-process [phase astate]
  (let [{:keys [location stopper]} astate
       crd (.getCoordinate (.geometry location))
       x (.x crd)
       y (.y crd)]
  (.moveLocationTo phase (Coordinate. 0.0 0.0))
  (.stop stopper)
  [x y]))

(defn random-ways-walker [ways-map loc rate [sx sy] distro]
  (let [rsm @ways-map
       idx (:idx rsm)
       rts (:ways rsm)
       rte (nth rts idx)
       nxt (inc idx)
       rte (into-array Double/TYPE rte)
       rnd (LineFollower/randomisedRoute rte sx sy distro)]
  (vswap! ways-map assoc :idx (if (< nxt (count rts)) nxt 0))
  (LineFollower. rnd factory loc rate)))

(defn places-arriver [places-map loc rate bound bypass]
  (let [pm @places-map
       idx (:idx pm)
       ps (:places pm)
       [lo la] (nth ps idx)
       nxt (inc idx)
       crd (Coordinate. lo la)]
  (vswap! places-map assoc :idx (if (< nxt (count ps)) nxt 0))
  (Arriver. loc crd rate bound bypass)))

(defn next-pasture-coord [pastures]
  (let [pp @pastures
       idx (:idx pp)
       cds (:coords pp)
       crd (nth cds idx)
       nxt (inc idx)]
  (vswap! pastures assoc :idx (if (< nxt (count cds)) nxt 0))
  (Coordinate. (first crd) (second crd))))

(defn create-csalmon-astate [crd world]
  (let [inp (.createPoint factory crd)
       loc (MasonGeometry. inp)
       rate (.nextDouble normal-distr CHILD-RATE (/ CHILD-RATE 4))
       lf (random-ways-walker KIVIJARVI-WAYS loc rate [0.002 0.0001] normal-distr)]
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
            rate)
       lf (random-ways-walker LADOGA-WAYS loc rate [0.002 0.0001] normal-distr)]
  (volatile! {:location loc
                  :phase :RIVER
                  :river-follower rf
                  :lake-follower lf})))

(defn create-asalmon-astate [crd world]
  (let [inp (.createPoint factory crd)
       loc (MasonGeometry. inp)
       rate (.nextDouble normal-distr ADULT-RATE (/ ADULT-RATE 4))
       lf (RandomWalker. loc rate 100 800 normal-distr lakes)
       bp (RandomWalker. loc rate 0.0 50.0 5.0 600 normal-distr lakes)
       af (Arriver. loc ESTUARY rate lakes bp)
       rf (AttributesFollower. 
            rivers 
            (into-array String (map first ASALMON_RIVER_ROUTE))
            (into-array Object (map second ASALMON_RIVER_ROUTE))
            loc 
            rate)
       bp2 (RandomWalker. loc rate 0.0 20.0 4.0 200 normal-distr lakes)
       pa (places-arriver SPAWN-PLACES loc rate lakes bp2)]
  (volatile! {:location loc
                  :phase :LAKE
                  :lake-follower lf
                  :river-arriver af
                  :river-follower rf
                  :spawn-arriver pa})))

(defn start-ysalmon [[x y] world]
  (let [schedule (.schedule world)
       crd (Coordinate. x y)
       astate (create-ysalmon-astate crd world)
       a (YoungSalmon. astate)]
  (.addGeometry young-salmons (:location @astate))
  (vswap! astate assoc :stopper (.scheduleRepeating schedule a))))

(defn start-asalmon [[x y] world]
  (let [schedule (.schedule world)
       crd (Coordinate. x y)
       astate (create-asalmon-astate crd world)
       a (AdultSalmon. astate)]
  (.addGeometry adult-salmons (:location @astate))
  (vswap! astate assoc :stopper (.scheduleRepeating schedule a))))

(defn spawn
  ([crd world]
  (let [schedule (.schedule world)
         astate (create-csalmon-astate crd world)
         a (ChildSalmon. astate)]
    (.addGeometry child-salmons (:location @astate))
    (vswap! astate assoc :stopper (.scheduleRepeating schedule a))))
([[x y] world N]
  (dotimes [i N]
    (spawn (Coordinate. x y) world))))

