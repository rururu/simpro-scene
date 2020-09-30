(ns path
(:require
  [rete.core :as rete]))
(def E 0.1)
(def SEGMENTS {[3 1]{"B" [2 2] "D" [1 1]}
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
(defn near [v1 v2]
  ;;(or (= v1 v2)
;;  (and (< (Math/abs (- (first v1) (first v2))) E)
;;          (< (Math/abs (- (second v1) (second v2))) E)))
(= v1 v2))

(defn find-segments [p1]
  (SEGMENTS p1))

(defn asser-path [tp id a b sgs sts]
  (rete/assert-frame [tp 'id id 'a a 'b b 'segments sgs 'status sts]))

(defn self [x]
  x)

