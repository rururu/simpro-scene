(ns pro.smp0
(:use protege.core)
(:import
  ru.igis.omtab.MapOb
  com.bbn.openmap.omGraphics.OMGraphic))
(defn to-degrees [pnt]
  (let [[lag lam log lom] (.split pnt " ")]
  [(MapOb/getDeg (str lag " " lam)) (MapOb/getDeg (str log " " lom))]))

(defn rand-pnt [pnt ddg]
  (if (string? pnt)
  (let [pnt (to-degrees pnt)
        [lat lon] (rand-pnt pnt ddg)]
    (str (MapOb/getDegMin lat) " " (MapOb/getDegMin lon)))
  (let [[lat lon] pnt
        r1 (- (rand (* 2 ddg)) ddg)
        r2 (- (rand (* 2 ddg)) ddg)]
    [(+ lat r1) (+ lon r2)])))

(defn rand-mid
  ([pts ratio]
  (loop [ps pts ps2 []]
    (if (seq (rest ps))
      (recur (rest ps) 
        (concat ps2 [(first ps) (rand-mid (first ps) (second ps) ratio)]))
      (concat ps2 [(first ps)])))) 
([p1 p2 ratio]
  (if (string? p1)
    (let [a (to-degrees p1)
          b (to-degrees p2)
          [lat lon] (rand-mid a b ratio)]
      (str (MapOb/getDegMin lat) " " (MapOb/getDegMin lon)))
    (let [[lat1 lon1] p1
           [lat2 lon2] p2
           dlat (Math/abs (- lat1 lat2))
           dlon (Math/abs (- lon1 lon2))
           dist (Math/sqrt (+ (* dlat dlat) (* dlon dlon)))
           ddg (* dist ratio)
           latm (/ (+ lat1 lat2) 2)
           lonm (/ (+ lon1 lon2) 2)]
      (rand-pnt [latm lonm] ddg)))))

(defn double-points [omp ratio]
  (let [lab (str (sv omp "label") "D")
      pts (svs omp "points")
      pts2 (rand-mid pts ratio)
      omp2 (or (fifos "OMTPoly" "label" lab)
                 (.copy omp *kb* nil false))]
  (ssv omp2 "label" lab)
  (ssvs omp2 "points" pts2)))

(defn randomize-points [mob ddg]
  (let [lla (.getLLPoints mob)
      rnd (fn[x] (+ (- (rand (* 2 ddg)) ddg) x))
      lla (map rnd lla)
      arr (double-array lla)
      lm (.getLocationMarker mob)]
  (.setLocation lm arr (OMGraphic/RADIANS))))

