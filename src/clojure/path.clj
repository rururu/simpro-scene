(ns path
(:require
  [rete.core :as rete]))
(def SEQUELS {[3 1]{"B" [2 2] "D" [1 1]}
  [2 2]{"A" [3 1] "C" [1 3]}
  [1 3]{"B" [2 2] "D" [1 1]}
  [1 1]{"A" [3 1] "C" [1 3]}
  [9 3]{"F" [8 5] "G" [7 4]}
  [8 5]{"I" [6 6] "E" [9 3]}
  [7 4]{"H" [5 3] "E" [9 3]}
  [6 6]{"R" [4 7] "F" [8 5]}
  [5 3]{"J" [4 4] "G" [7 4]}
  [4 4]{"K" [5 5] "H" [5 3]}
  [4 7]{"L" [2 8] "I" [6 6]}
  [5 5]{"M" [3 6] "J" [4 4]}
  [3 6]{"N" [2 5] "K" [5 5]}
  [2 8]{"P" [1 7] "R" [4 7]}
  [2 5]{"P" [1 7] "M" [3 6]}
  [1 7]{"N" [2 5] "L" [2 8]}})
(def F-find-sequels nil)
(def F-near nil)
(def F-display-path nil)
(def MAX-PATHS 2)
(defn near [v1 v2]
  (= v1 v2))

(defn find-sequels [p1]
  (SEQUELS p1))

(defn asser-goal [a b]
  (rete/assert-frame ['Goal 'a (str a) 'b (str b) 'status "START"]))

(defn self [x]
  x)

(defn display-path [pts]
  (println pts))

(defn set-functions [find-seq near dist disp]
  (def F-find-sequels find-seq)
(def F-near near)
(def F-distance dist)
(def F-display-path disp))

(defn set-max-paths [m]
  (def MAX-PATHS m))

(defn clear-paths []
  (def PATHS (volatile! [])))

(defn distance [pts]
  (count pts))

