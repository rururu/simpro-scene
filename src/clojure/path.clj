(ns path
(:require
  [rete.core :as rete]))
(def SEQUELS {"A" ["A1" "A2" "B" "D"]
  "A1" ["A"]
  "A2" ["A"]
  "B" ["A" "C"]
  "C" ["C1" "C2" "B" "D"]
  "C1" ["C"]
  "C2" ["C"]
  "D" ["A" "C"]
  "X" ["Y" "Z" "W"]
  "Y" ["X" "U" "S"]
  "Z" ["X" "U"]
  "W" ["X" "V" "P"]
  "U" ["Y" "Z" "S"]
  "V" ["W" "S" "R"]
  "S" ["Y" "U" "V" "R" "Q"]
  "R" ["V" "S" "P"]
  "Q" ["S" "P"]
  "P" ["W" "R" "Q"]})
(def TRACE false)
(defn point-equal [p1 p2]
  (= p1 p2))

(defn segment-equal [s1 s2]
  (or (= s1 s2)
  (= s1 (reverse s2))))

(defn find-sequels [p1]
  (map #(vector p1 %) (SEQUELS p1)))

(defn quote [x]
  x)

(defn distance [pth]
  (count pth))

(defn display-segments [pfx sgs]
  (if TRACE
  (println pfx sgs))
sgs)

(defn set-functions [ini-pnt fin-seq pnt-eql seg-eql dst dis-seg]
  (def F-init-point ini-pnt)
(def F-find-sequels fin-seq)
(def F-points-equal pnt-eql)
(def F-segment-equal seg-eql)
(def F-distance dst)
(def F-display-segments dis-seg))

(defn trace [bool]
  (def TRACE bool))

