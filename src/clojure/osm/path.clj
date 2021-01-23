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
  ru.igis.omtab.MapOb
  edu.stanford.smi.protege.ui.DisplayUtilities))
(def TRACE true)
(def NEAR 0.0005)
(def NODE-YXS [])
(def FRAME nil)
(def GOAL-RAD 0.001)
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

(defn from-goal [sta cur fin]
  (let [rdir (of/simple-dir sta fin)
       cdir (of/simple-dir sta cur)
       arc (Math/abs (- rdir cdir))
       hpi (/ Math/PI 2)]
  (and (> arc hpi) (< arc (* hpi 3)))))

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

(defn goal-behind [sta cur fin]
  (let [rdir (of/simple-dir sta fin)
       gdir (of/simple-dir cur fin)
       arg (Math/abs (- rdir gdir))
       hpi (/ Math/PI 2)]
  (and (> arg hpi) (< arg (* hpi 3)))))

(defn near [p1 p2]
  (< (of/simple-dist p1 p2) NEAR))

(defn set-near [deg]
  (def NEAR deg))

(defn find-new-node [xy]
  (let [box (of/bbx xy GOAL-RAD)]
  (if (not (some #(of/in-bbx % box) NODE-YXS))
    (when-let [noi (oo/fmk-node xy)]
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
    (.show *prj* rdi)
    rdi))

(defn clear-NODE-YXS []
  (def NODE-YXS []))

(defn trace [bool]
  (def TRACE bool))

(defn create-dirways [hm inst]
  (let [mp (into {} hm)
      egs (selection mp "edges")
      dir (mp "direct")
      pth (map #(vector dir [(sv % "label") (oo/edge-pts %)] %) egs)]
  (ssvs inst "dirways" (map oo/create-dirway pth))))

(defn replace-dirway-in-road [hm inst]
  (let [mp (into {} hm)]
  (if-let [rod (mp "road")]
    (if-let [new (first (selection mp "dirways"))]
      (if-let [old (DisplayUtilities/pickInstanceFromCollection 
                                nil 
                                (svs rod "dirways") 
                                0
                                (str "Select Dirway of Road " (sv rod "title")))]
        (if (ru.rules/confirm (str "Replace Dirway " (.getBrowserText old) 
                                                                 " on " (.getBrowserText new)))
            (let [dws (svs rod "dirways")
                   dws (replace {old new} dws)]
              (ssvs rod "dirways" dws)
              (.show *prj* rod)) ))
      (ru.rules/confirm (str "Select New Dirway to Replace Existing in Road "  (sv rod "title"))))
    (ru.rules/confirm "Select Road to Update"))))

(defn set-goal-rad [r]
  (def GOAL-RAD r))

(defn restore-edge [way]
  (let [id (sv way "id")
       src (sv way "source")
       src (read-string src)
       src (map reverse src)
       iln (cons id src)
       edg (oo/mk-edge iln)]
  (ssv way "poly" edg)))

(defn mk-dir-road [road dir]
  (if (has-typ road "RoadSubclasses")
  (let [i (crin "DirectedRoad")]
    (ssv i "road" road)
    (ssv i "direction" dir)
    i)))

(defn fill-dir-route [hm inst]
  (let [mp (into {} hm)
      drt (mp "directed-route")
      rds (mp "roads")
      drs (mp "directions")]
  (if (some? drt)
    (if (and (seq rds) (seq drs) (= (count rds) (count drs)))
      (let [dds (map mk-dir-road rds drs)]
        (ssvs drt "directed-roads" dds))
      (if (empty? drs)
        (let [dds (svs drt "directed-roads")
              rds (map #(sv % "road") dds)
              drs (map #(sv % "direction") dds)]
          (ssvs inst "roads" rds)
          (ssvs inst "directions" drs)))))))

