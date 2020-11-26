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
  "D" ["A" "C"]})
(def F-find-sequels nil)
(def F-near nil)
(def F-display-path nil)
(def MAX-PATHS 2)
(defn equal [e1 e2]
  (or (= e1 e2)
  (= e1 (reverse e2))))

(defn find-sequels [p1]
  (map #(vector p1 %) (SEQUELS p1)))

(defn asser-goal [a b]
  (rete/assert-frame ['Goal 'a (str a) 'b (str b) 'status "START"]))

(defn self [x]
  x)

(defn display-path [pts]
  (println pts))

(defn set-functions [find-seq eq dist disp]
  (def F-find-sequels find-seq)
(def F-equal equal)
(def F-distance dist)
(def F-display-path disp))

(defn set-max-paths [m]
  (def MAX-PATHS m))

(defn clear-paths []
  (def PATHS (volatile! [])))

(defn distance [pth]
  (count pth))

