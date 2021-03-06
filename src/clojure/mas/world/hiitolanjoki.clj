(ns mas.world.hiitolanjoki
(:use
  protege.core)
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
  sim.util.geo.AttributeValue
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
  ru.igis.omtab.OpenMapTab
  com.bbn.openmap.layer.shape.SpatialIndex
  com.bbn.openmap.proj.GreatCircle
  edu.stanford.smi.protege.model.Instance))
(def normal-distro (Normal. 0.0 0.0 (MersenneTwisterFast.)))
(def INIT-NUM-SPAWN 12)
(def WIDTH 800)
(def HEIGHT 800)
(def RIVERS-URLS ["file:data/mas/hiitolanjoki/shape/hiitolanjoki_l.shp"
 "file:data/mas/hiitolanjoki/shape/hiitolanjoki_l.dbf"])
(def LAKES-URLS ["file:data/mas/hiitolanjoki/shape/hiitolanjoki_a.shp"
 "file:data/mas/hiitolanjoki/shape/hiitolanjoki_a.dbf"])
(def YSALMON_RIVER_ROUTE [["NAME" "Hiitolanjoki"]
 ["NAME" "Kokkolanjoki2"]
 ["NAME" "Kokkolanjoki1"]
 ["NAME" "Veijalanjarvi"]
 ["NAME" "Asilanjoki"]])
(def ASALMON_RIVER_ROUTE [["NAME" "Asilanjoki"]
 ["NAME" "Veijalanjarvi"]
 ["NAME" "Kokkolanjoki1"]
 ["NAME" "Kokkolanjoki2"]
 ["NAME" "Hiitolanjoki"]])
(def rivers (GeomVectorField. WIDTH HEIGHT))
(def lakes (GeomVectorField. WIDTH HEIGHT))
(def young-salmons (GeomVectorField. WIDTH HEIGHT))
(def child-salmons (GeomVectorField. WIDTH HEIGHT))
(def adult-salmons (GeomVectorField. WIDTH HEIGHT))
(def AGENT-LAYERS {:update-interval 50
  :path  "data/mas/hiitolanjoki/shape/agents/"
  :layers [["Child_Salmons" child-salmons]
              ["Young_Salmons" young-salmons]
              ["Adult_Salmons" adult-salmons]]})
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
(def ESTUARY (Coordinate. 29.886 61.18))
(def ADULT-LIFE 24000)
(def CZ-POINTS {:update-interval 400
  :height 10
  :point-sets [["c" child-salmons [255 255 0 255] 4]
                     ["y" young-salmons [0 255 0 255] 8]
                     ["a" adult-salmons [255 0 0 255] 12]]})
(def declare-before (declare
  process
  relay-process
  create-asalmon-astate
  create-csalmon-astate
  start-ysalmon
  start-asalmon
  spawn
  snapshot
  update-shape
  steps
  get-lalo-points))
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
                   life-start
                   lake-follower 
                   river-arriver 
                   river-follower 
                   spawn-arriver]} ast]
  (if (> (- (steps world) life-start) ADULT-LIFE)
    (relay-process lake-follower ast)
    (condp = phase
      :LAKE        (process lake-follower :TORIVER astate world)
      :TORIVER   (process river-arriver :RIVER astate world)
      :RIVER       (process river-follower :TOSPAWN astate world)
      :TOSPAWN (process spawn-arriver :DONE astate world)
      :DONE       (do (relay-process spawn-arriver ast)
                         (spawn (:children-way ast) world NUM-SPAWN))
      nil))))
)
(deftype Shooter []
	sim.engine.Steppable
	(step [this world] (let [interval (:update-interval AGENT-LAYERS)
       ss (steps world)]
  (when (= (mod ss interval) 0)
    (println :steps ss)
    (snapshot)
    (update-shape (:path AGENT-LAYERS) (map first (:layers AGENT-LAYERS))))))
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
	(start [this world] (.clear child-salmons)
(.clear young-salmons)
(.clear adult-salmons)
(spawn KIVIJARVI-WAYS world INIT-NUM-SPAWN)
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
  1.0)
;;(.scheduleRepeating (.schedule world) (Cesiumer.))
(.scheduleRepeating (.schedule world) (Shooter.)))
	(finish [this world] (snapshot))
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
	(info [this] "<img src='file:data/mas/hiitolanjoki/Logo.png'")
)
(defn steps [world]
  (.getSteps (.schedule world)))

(defn process [phase next-key astate world]
  (if (= (.getStatus phase) "DONE")
  (vswap! astate assoc :phase next-key)
  (.step phase world)))

(defn relay-process [phase ast]
  (let [{:keys [location stopper]} ast
       crd (.getCoordinate (.geometry location))
       x (.x crd)
       y (.y crd)]
  (.moveLocationTo phase (Coordinate. 0.0 0.0))
  (.stop stopper)
  [x y ast]))

(defn random-ways-walker [ways-map loc rate sx sy distro]
  (let [wm @ways-map
       idx (:idx wm)
       ws (:ways wm)
       way (nth ws idx)
       way (into-array Double/TYPE way)
       nxt (inc idx)
       rnd (LineFollower/randomisedRoute way sx sy distro)]
  (vswap! ways-map assoc :idx (if (< nxt (count ws)) nxt 0))
  (LineFollower. rnd factory loc rate)))

(defn spawn-places-arriver [ways-map loc rate sx sy bound bypass]
  (let [wm @ways-map
       idx (:idx wm)
       ws (:ways wm)
       way (nth ws idx)
       nxt (inc idx)
       crd (Coordinate. (first way) (second way))
       way (into-array Double/TYPE way)
       rnd (LineFollower/randomisedRoute way sx sy normal-distro)]
  (vswap! ways-map assoc :idx (if (< nxt (count ws)) nxt 0))
  [(Arriver. loc crd rate bound bypass)
   way]))

(defn create-csalmon-astate [way world]
  (let [crd (Coordinate.  (first way) (second way))
       inp (.createPoint factory crd)
       loc (MasonGeometry. inp)
       rate (.nextDouble normal-distro CHILD-RATE (/ CHILD-RATE 4))
       way (into-array Double/TYPE way)
       rnd (LineFollower/randomisedRoute way 0.002 0.0001 normal-distro)
       lf (LineFollower. rnd factory loc rate)]
  (volatile! {:location loc
                  :phase :LAKE
                  :lake-follower lf})))

(defn create-ysalmon-astate [crd world]
  (let [inp (.createPoint factory crd)
       loc (MasonGeometry. inp)
       rate (.nextDouble normal-distro YOUNG-RATE (/ YOUNG-RATE 4))
       rf (AttributesFollower. 
            rivers 
            (into-array String (map first YSALMON_RIVER_ROUTE))
            (into-array Object (map second YSALMON_RIVER_ROUTE))
            loc 
            rate)
       lf (random-ways-walker LADOGA-WAYS loc rate 0.002 0.0001 normal-distro)]
  (volatile! {:location loc
                  :phase :RIVER
                  :river-follower rf
                  :lake-follower lf})))

(defn create-asalmon-astate [crd world]
  (let [inp (.createPoint factory crd)
       loc (MasonGeometry. inp)
       rate (.nextDouble normal-distro ADULT-RATE (/ ADULT-RATE 4))
       lf (RandomWalker. loc rate 100 800 normal-distro lakes)
       bp (RandomWalker. loc rate 0.0 50.0 5.0 600 normal-distro lakes)
       af (Arriver. loc ESTUARY rate lakes bp)
       rf (AttributesFollower. 
            rivers 
            (into-array String (map first ASALMON_RIVER_ROUTE))
            (into-array Object (map second ASALMON_RIVER_ROUTE))
            loc 
            rate)
       bp2 (RandomWalker. loc rate 0.0 10.0 4.0 100 normal-distro lakes)
       [spa cw] (spawn-places-arriver KIVIJARVI-WAYS loc rate 0.002 0.0001 lakes bp2)]
  (volatile! {:location loc
                  :phase :LAKE
                  :lake-follower lf
                  :river-arriver af
                  :river-follower rf
                  :spawn-arriver spa
                  :children-way cw})))

(defn start-ysalmon [[x y ast] world]
  (let [schedule (.schedule world)
       crd (Coordinate. x y)
       astate (create-ysalmon-astate crd world)
       loc (:location @astate)
       a (YoungSalmon. astate)]
  (.addGeometry young-salmons loc)
  (vswap! astate assoc :stopper (.scheduleRepeating schedule a)
                                  :life-start (:life-start ast))
  (.setUserData loc astate)))

(defn start-asalmon [[x y ast] world]
  (let [schedule (.schedule world)
       crd (Coordinate. x y)
       astate (create-asalmon-astate crd world)
       loc (:location @astate)
       a (AdultSalmon. astate)]
  (.addGeometry adult-salmons loc)
  (vswap! astate assoc :stopper (.scheduleRepeating schedule a)
                                  :life-start (:life-start ast))
  (.setUserData loc astate)))

(defn spawn
  ([way world]
  (let [schedule (.schedule world)
         astate (create-csalmon-astate way world)
         loc (:location @astate)
         a (ChildSalmon. astate)]
    (.addGeometry child-salmons loc)
    (vswap! astate assoc :stopper (.scheduleRepeating schedule a)
                                     :life-start (steps world))
    (.setUserData loc astate)))
([way-or-vol world N]
  (dotimes [i N]
    (if (volatile? way-or-vol)
      (let [wm @way-or-vol
             idx (:idx wm)
             ws (:ways wm)
             way (nth ws idx)
             nxt (inc idx)]
        (vswap! way-or-vol assoc :idx (if (< nxt (count ws)) nxt 0)) 
        (spawn way world))
      (spawn way-or-vol world)))))

(defn snapshot []
  (doseq [[lay ags] (:layers AGENT-LAYERS)]
  (let [fin (str (:path AGENT-LAYERS) lay)
         shp (clojure.java.io/file (str fin ".shp"))]
    (if (> (.size (.getGeometries ags)) 0)
      (ShapeFileExporter/write fin ags)
      (if (.exists shp)
        (clojure.java.io/delete-file shp))))))

(defn update-shape [path lays]
  (let [mb (OpenMapTab/getMapBean)
       cms (.getComponents mb)]
  (doseq [lay lays]
    (let [shp (str path lay ".shp")
           lr (first (filter #(= (.getName %) lay) cms))]
      (when (and lr (.exists (clojure.java.io/file shp)))
        (.setSpatialIndex lr (SpatialIndex/locateAndSetShapeData shp))
        (.doPrepare lr))))))

(defn agent-state [field index]
  (.getUserData (.get (.getGeometries field) index)))

(defn save-points-lola
  ([y]
  (if (instance? Instance y)
    (let [pp (utils.poly/latlon (svs y "points"))]
      (vec (interleave (map second pp) (map first pp))))
    (vec (for [poi y] (save-points-lola poi)))))
([y f]
  (spit f (save-points-lola y))))

(defn save-routes []
  (println "Prepare World..")
(println "Write" KIVIJARVI-ROUTES-FILE)
(save-points-lola (cls-instances "KIVIJARVI_ROUTES") KIVIJARVI-ROUTES-FILE)
(println "Write" LADOGA-ROUTES-FILE)
(save-points-lola (cls-instances "LADOGA_ROUTES") LADOGA-ROUTES-FILE))

