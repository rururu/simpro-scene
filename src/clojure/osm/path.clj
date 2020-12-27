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
(def TRACE true)
(def NEAR 0.0005)
(def NODE-YXS [])
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

(defn if-display-edges [pfx egs]
  (if TRACE 
  (println pfx (map #(sv % "label") egs)))
egs)

(defn vertex1 [e]
  [(sv e "x") (sv e "y")])

(defn vertex2 [e]
  [(sv e "x2") (sv e "y2")])

(defn far-vertex [e pnt]
  (let [v1 (vertex1 e)
       v2 (vertex2 e)]
  (if (> (of/simple-dist v1 pnt) (of/simple-dist v2 pnt))
    v1
    v2)))

(defn edges-distance [egs]
  (apply + (map #(of/simple-dist (vertex1 %) (vertex2 %)) egs)))

(defn wrong-direction [sta med fin]
  (let [rdir (of/simple-dir sta fin)
       mdir (of/simple-dir sta med)
       ang (Math/abs (- rdir mdir))]
  (> ang (/ Math/PI 2))))

(defn near [p1 p2]
  (< (of/simple-dist p1 p2) NEAR))

(defn set-near [deg]
  (def NEAR deg))

(defn find-new-node [xy]
  (let [box (of/bbx xy (oo/get-radius))]
  (if (not (some #(of/in-bbx % box) NODE-YXS))
    (when-let [noi (oo/mk-node xy)]
      (def NODE-YXS (conj NODE-YXS [(sv noi "y") (sv noi "x")]))
      noi))))

(defn mk-road [tit sub frm to xy egs]
  (let [drs (oo/edges-dirs xy egs)
       lbs (map #(sv % "label") egs)
       ptss (map oo/edge-pts egs)
       pth (map #(vector %1 [%2 %3] %4) drs lbs ptss egs)
       rdi (foc sub "title" tit)]
    (ssv rdi "from1" frm)
    (ssv rdi "to1" to)
    (ssvs rdi "dirways" (map oo/create-dirway pth))
    rdi))

(defn trace [bool]
  (def TRACE bool))

