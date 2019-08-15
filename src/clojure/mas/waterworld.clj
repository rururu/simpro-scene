(ns mas.waterworld
(:import
  sim.util.Bag
  sim.engine.Steppable
  sim.field.grid.Grid2D
  sim.field.grid.ObjectGrid2D
  sim.field.geo.GeomGridField
  sim.field.geo.GeomGridField$GridDataType
  sim.io.geo.ArcInfoASCGridImporter
  sim.util.gui.SimpleColorMap
  java.awt.Color
  java.awt.Graphics2D
  java.io.FileInputStream
  java.util.zip.GZIPInputStream
  sim.portrayal.grid.ObjectGridPortrayal2D
  sim.portrayal.simple.RectanglePortrayal2D
  sim.portrayal.DrawInfo2D
  sim.display.Display2D))
(def GRID-WIDTH 100)
(def GRID-HEIGHT 100)
(def NUM-DROPS-PER-TURN 400)
(def LAND "/home/ru/mas/pro/GeoMasondemo/data/elevation.txt.gz")
(def landscape nil)
(def world-drops (volatile! []))
(def ground (ObjectGridPortrayal2D.))
(def water (ObjectGridPortrayal2D.))
(def declare-before (declare
  add-drop
  remove-drop
  land-flat
  land-gradient-in
  land-ele-data
  create-display
  setup-ports))
(deftype WaterWorldPorts []
	ru.igis.sim.IPorts
	(createDisplay [this wgui world] (create-display wgui world))
	(setup [this display world] (setup-ports display world))
)
(deftype Raindrop [dstate ]
	sim.engine.Steppable
	(step [this world] (let [dst @dstate
       basin (:basin dst)
       stopper (:stopper dst)
       bst @basin
       loc-x (:loc-x bst)
       loc-y (:loc-y bst)
       my-height (:cumulative-height bst)
       neighbors (Bag.)
       _ (.getMooreNeighbors landscape loc-x loc-y 1 Grid2D/TOROIDAL true neighbors nil nil)
       minheight (apply min (map #(get % :cumulative-height) neighbors))
       mins (filter #(= (:cumulative-height %) minheight) neighbors)]
  (if (>= minheight my-height)
    (if (or (= 0 loc-x) (= 0 loc-y) 
          (= loc-x (dec (.getWidth landscape))) 
          (= loc-y (dec (.getHeight landscape))))
      (do (.stop stopper)
        (remove-drop basin this)
        (vreset! world-drops (remove #{this} @world-drops)))
      (let [idx (.nextInt (.random world) (count mins))
             newbasin (nth mins idx)]
        (add-drop newbasin this)
        (vswap! dstate assoc
          :basin newbasin))))))
)
(deftype Raincloud []
	sim.engine.Steppable
	(step [this world] (let [rnd (.random world)
       sch (.schedule world)]
  (dotimes [i NUM-DROPS-PER-TURN]
    (let [x (.nextInt GRID-WIDTH)
           y (.nextInt GRID-HEIGHT)
           b (.get landscape x y)
           ds (volatile! {:basin b})
           d (Raindrop. ds)
           s (.scheduleRepeating d)]
      (vswap! ds assoc :stopper s)
      (vreset! world-drops (cons d @world-drops))
      (add-drop b d)))))
)
(deftype WaterWorld []
	ru.igis.sim.IWorld
	(initialise [this] (load "mas/waterworld"))
	(start [this world] (def landscape
  (condp = LAND
    "FLAT" (land-flat)
    "GRADIENT-IN" (land-gradient-in)
    (land-ele-data LAND)))
(.scheduleRepeating (.schedule world) (Raincloud.)))
)
(defn add-drop [basin drop]
  (let [bst @basin]
  (vswap! basin assoc
    :drops (cons drop (:drops bst))
    :cumulative-height (+ (:raindrop-factor bst) 
                                      (:cumulative-height bst)))))

(defn add-drops [basin drops]
  (let [bst @basin]
  (vswap! basin assoc
    :drops (concat drops (:drops bst))
    :cumulative-height (+ (* (:raindrop-factor bst)
                                          (count drops))
                                      (:cumulative-height bst)))))

(defn remove-drop [basin drop]
  (let [bst @basin]
  (vswap! basin assoc
    :drops (remove #{drop} (:drops bst))
    :cumulative-height (- (:cumulative-height bst)
                                     (:raindrop-factor bst)))))

(defn remove-drops [basin drops]
  (doseq [drop drops]
  (remove-drop basin drop)))

(defn land-flat []
  (let [og2d (ObjectGrid2D. GRID-WIDTH GRID-HEIGHT)]
  (dotimes [i GRID-WIDTH]
    (dotimes [j GRID-HEIGHT]
      (.set og2d i j {:loc-x i
                            :loc-y j
                            :base-height 0
                            :cumulative-height 0
                            :raindrop-factor 1})))))

(defn land-gradient-in []
  (let [og2d (ObjectGrid2D. GRID-WIDTH GRID-HEIGHT)
       hwid (/ GRID-WIDTH 2)
       hhei (/ GRID-HEIGHT)]
  (dotimes [i GRID-WIDTH]
    (dotimes [j GRID-HEIGHT]
      (let [k1 (- i hwid)
             k2 (- j hhei)
             hei (int (Math/sqrt (+ (* k1 k1) (* k2 k2))))]
        (.set og2d i j {:loc-x i
                              :loc-y j
                              :base-height hei
                              :cumulative-height hei
                              :raindrop-factor 1}))))))

(defn land-ele-data [gz]
  (let [efi (GeomGridField.)
       ins (FileInputStream. LAND)
       cin (GZIPInputStream. ins)
       _ (ArcInfoASCGridImporter/read cin GeomGridField$GridDataType/INTEGER efi)
       _ (def GRID-WIDTH (.getGridWidth efi))
       _ (def GRID-HEIGHT (.getGridHeight efi))
       og2d (ObjectGrid2D. GRID-WIDTH GRID-HEIGHT)
       ele (.getGrid efi)]
  (dotimes [x GRID-WIDTH]
    (dotimes [y GRID-HEIGHT]
      (let [hei (.get ele x y)]
        (.set og2d x y {:loc-x x
                              :loc-y y
                              :base-height hei
                              :cumulative-height hei
                              :raindrop-factor 1}))))))

(defn create-display [wgui world]
  (let [display (Display2D. 600 600 wgui)]
  (.setClipping false)
  (.attach display ground "Ground")
  (.attach display water "Water")
  display))

(defn setup-ports [display world]
  (let [ele-colors (SimpleColorMap. 0 300 (Color. 250 246 237) (Color. 53 44 36))
       dep-colors (SimpleColorMap. 0 10 (Color. 70 100 200 0) (Color. 70 100 200 255))
       GroundPort (proxy [RectanglePortrayal2D] []
                            (draw [object ^Graphics2D graphics ^DrawInfo2D info]
                              (let [drw (.draw info)
                                     scl (.scale this)
                                     wid (* (.width drw) scl)
                                     hei (* (.height drw) scl)
                                     x (int (- (.x drw) (/ wid 2.0)))
                                     y (int (- (.y drw) (/ hei 2.0)))
                                     bh (:base-height @object)]
                                 (.setColor graphics (.getColor ele-colors bh))
                                 (.fillRect graphics x y (int wid) (int hei)))))
       WaterPort (proxy [RectanglePortrayal2D] []
                            (draw [object ^Graphics2D graphics ^DrawInfo2D info]
                              (let [drw (.draw info)
                                     scl (.scale this)
                                     wid (* (.width drw) scl)
                                     hei (* (.height drw) scl)
                                     x (int (- (.x drw) (/ wid 2.0)))
                                     y (int (- (.y drw) (/ hei 2.0)))
                                     bh (:base-height @object)]
                                 (.setColor graphics (.getColor dep-colors bh))
                                 (.fillRect graphics x y (int wid) (int hei)))))]
  (.setField ground landscape)
  (.setPortrayalForAll ground GroundPort)
  (.setField water landscape)
  (.setPortrayalForAll water GroundPort)))

