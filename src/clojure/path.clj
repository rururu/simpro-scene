(ns path
(:use protege.core)
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

(defn find-sequels [p1]
  (SEQUELS p1))

(defn quote [x]
  x)

(defn distance [pth]
  (count pth))

(defn display-points [pfx pts]
  (if TRACE
  (println pfx pts))
pts)

(defn set-functions [ini-pnt fin-seq pnt-eql dst dis-pts]
  (def F-init-point ini-pnt)
(def F-find-sequels fin-seq)
(def F-points-equal pnt-eql)
(def F-distance dst)
(def F-display-points dis-pts))

(defn trace [bool]
  (def TRACE bool))

(defn init-point-dir [x]
  (let [[gid pid] (.split x ":")]
  (if-let [gri (fifos "Graph" "id" gid)]
    (or (fifos "Point" "id" pid)
      (do (println "Point" pid "not found for graph" gid "!") nil))
    (do (println "Graph" gid "not found!") nil))))

(defn find-sequels-dir [p1]
  (svs p1 "points1"))

(defn display-points-dir [pfx pts]
  (letfn [(disp [p]
             (cond
               (string? p) p
               (vector? p) (vec (map disp p))
               true (sv p "id")))]
  (if TRACE
    (println pfx (map disp pts)))
  pts))

(defn set-functions-dir [ini-pnt fin-seq pnt-eql dst dis-pts wro-dir]
  (def F-init-point ini-pnt)
(def F-find-sequels fin-seq)
(def F-points-equal pnt-eql)
(def F-distance dst)
(def F-display-points dis-pts)
(def F-wrong-direction wro-dir))

(defn latitude [p]
  (read-string (sv p "status")))

(defn direction [[p1 p2]]
  (if (> (latitude p1) (latitude p2))
  :down
  :up))

(defn mk-segments [pts]
  (let [[f s & r] pts]
  (if (seq r)
    (cons [f s] (mk-segments (rest pts)))
    [[f s]])))

(defn wrong-direction [start finish points]
  (let [sgs (mk-segments points)
       dirs (map direction sgs)
       rdir (direction [start finish])]
  (some #(not= % rdir) dirs)))

