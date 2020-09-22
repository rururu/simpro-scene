(ns graph
(:require
  [rete.core :as rete]))
(def E 0.1)
(def EDGES {[]{"id" []}})
(defn near [v1 v2]
  ;;(or (= v1 v2)
;;  (and (< (Math/abs (- (first v1) (first v2))) E)
;;          (< (Math/abs (- (second v1) (second v2))) E)))
(= v1 v2))

(defn edge-gen
  ([p1 tp]
 (let [egs (EDGES p1)]
   (doseq [[id p2] egs]
     (edge-gen id p1 p2 tp))))
([id p1 p2 tp]
  (rete/assert-frame [tp 'id id 'b p1 'e p2])))

(defn test []
  (edge-gen "ab" [3.05 1.06] [2.02 2.03] 'Edge)
(edge-gen "bc" [2.07 2.04] [1.05 3.04] 'Edge)
(edge-gen "cd" [1.01 3.02] [1.09 1.05] 'Edge)
(edge-gen "ad" [3.07 1.03] [1.07 1.09] 'Edge)
(edge-gen "G1" [3 1] [1 3] 'Goal)
(edge-gen "G2" [3 1] [1 3] 'Goal)
(edge-gen "G3" [3 1] [1 3] 'Goal)
(edge-gen "G4" [3 1] [1 3] 'Goal))

