(ns t
(:use protege.core))
(defn tst []
  (println :TST)
(def ii (cls-instances "PolyMoving"))
(println (count ii)))

(defn lla>lolahs [lla h]
  (let [lls (map #(Math/toDegrees %) lla)
       lls (partition 2 lls)]
  (map #(list (second %) (first %) h) lls)))

