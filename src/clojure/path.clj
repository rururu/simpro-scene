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
(def MAX-PATHS 2)
(def TRACE false)
(defn equal [e1 e2]
  (or (= e1 e2)
  (= e1 (reverse e2))))

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

(defn set-functions [ini-pnt fin-seq eql dst dis-seg]
  (def F-init-point ini-pnt)
(def F-find-sequels fin-seq)
(def F-equal eql)
(def F-distance dst)
(def F-display-segments dis-seg))

(defn set-max-paths [m]
  (def MAX-PATHS m))

(defn trace [bool]
  (def TRACE bool))

