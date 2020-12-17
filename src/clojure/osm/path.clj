(ns osm.path
(:use 
 protege.core
 protege.extensions)
(:require
  [osm.func :as of]
  [osm.onto :as oo]
  [path :as p])
(:import
  ru.igis.omtab.OMT
  ru.igis.omtab.MapOb))
(defn simple-dist-osm
  ([ni1 ni2]
  (of/simple-dist 
    [(sv ni1 "x") (sv ni1 "y")]
    [(sv ni2 "x") (sv ni2 "y")]))
([nis]
  (let [sgs (p/mk-segments nis)
         dss (map simple-dist-osm sgs)]
    (apply + dss))))

(defn simple-dir-osm [[ni1 ni2]]
  (of/simple-dir
  [(sv ni1 "x") (sv ni1 "y")]
  [(sv ni2 "x") (sv ni2 "y")]))

(defn is-backward-dir? [x rdir]
  (> (Math/abs (- x rdir)) (* 0.6 Math/PI)))

(defn init-point-osm [x]
  (fifos "Node" "label" x))

(defn find-sequels-osm [noi]
  (let [nds (map oo/mk-node (oo/star-points noi))
       nds (filter some? nds)]
  (distinct nds)))

(defn display-points-osm [pfx nis]
  (if p/TRACE
  (println pfx (map #(sv % "label") nis)))
nis)

(defn wrong-direction-osm [start finish nis]
  (let [sgs (p/mk-segments nis)
       dirs (map simple-dir-osm sgs)
       rdir (simple-dir-osm [start finish])]
  (some #(is-backward-dir? % rdir) dirs)))

