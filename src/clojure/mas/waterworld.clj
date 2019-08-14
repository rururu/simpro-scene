(ns mas.waterworld
(:import
  sim.util.Bag
  sim.engine.Steppable
  sim.field.grid.Grid2D))
(def GRID-WIDTH 100)
(def GRID-HEIGHT 100)
(def NUM-DROPS-PER-TURN 400)
(def landscape nil)
(def world-drops (volatile! []))
(deftype Raincloud [cstate ]
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

