(ns mas.world.util
(:use
  protege.core)
(:require
  [utils.poly :as up])
(:import
  edu.stanford.smi.protege.model.Instance))
(def KIVIJARVI-ROUTES-FILE "data/mas/hiitolanjoki/kivijarvi_ways.clj")
(def LADOGA-ROUTES-FILE "data/mas/hiitolanjoki/ladoga_ways.clj")
(defn save-points-lola
  ([y]
  (if (instance? Instance y)
    (let [pp (up/latlon (svs y "points"))]
      (vec (interleave (map second pp) (map first pp))))
    (vec (for [poi y] (save-points-lola poi)))))
([y f]
  (spit f (save-points-lola y))))

(defn prepare-world [hm ins]
  (println "Prepare World..")
(println "Write" KIVIJARVI-ROUTES-FILE)
(save-points-lola (cls-instances "KIVIJARVI_ROUTES") KIVIJARVI-ROUTES-FILE)
(println "Write" LADOGA-ROUTES-FILE)
(save-points-lola (cls-instances "LADOGA_ROUTES") LADOGA-ROUTES-FILE))

