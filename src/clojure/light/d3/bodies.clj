(ns light.d3.bodies
(:require
  [light.cesium.core :as cs])
(:import ru.igis.omtab.NavOb))
(defn points-ring [[cla clo] rad alt N]
  ;; points-ring [center radius altitude points-number]
(let [s (double (/ 360 N))
       degs (range 0 (* N s) s)]
  (vec (map #(concat (reverse (NavOb/position cla clo % rad)) [alt]) degs))))

(defn slices [y]
  (if (empty? (first y))
 ()
 (cons (map first y) (slices (map rest y)))))

(defn rot-body-secs [[cla clo] sec N]
  ;; sec = [[rad1 alt1] [rad2 alt2] [rad3 alt3]...]
(let [rings (map #(points-ring [cla clo] (first %) (second %) N) sec)]
  (slices rings)))

