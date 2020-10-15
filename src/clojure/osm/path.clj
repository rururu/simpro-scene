(ns osm.path
(:use protege.core)
(:require
  [osm.data :as od])
(:import
  ru.igis.omtab.OMT
  ru.igis.omtab.MapOb))
(def WAY-TYPE "railway")
(def WAY-SUBTYPE "rail")
(def RADIUS 0.005)
(def BRANCHES 2)
(defn simple-dist [[y1 x1] [y2 x2]]
  (let [sx (Math/abs (- x1 x2))
       sy (Math/abs (- y1 y2))]
  (Math/sqrt (+ (* sx sx) (* sy sy)))))

(defn find-segments
  ([[lat lon]]
  (find-segments [lat lon] RADIUS WAY-TYPE WAY-SUBTYPE))
([[lat lon] wtype wsubtype]
  (let [ss (find-segments [lat lon] RADIUS wtype wsubtype)]
    (if (< (count ss) 1)
      (find-segments [lat lon] (* 10 RADIUS) wtype wsubtype)
      ss)))
([[lat lon] rad wtype wsubtype]
  (let [d (/ rad 60)
         bbx [(- lon d) (- lat d) (+ lon d) (+ lat d)]
         wda (od/way-data bbx wtype)]
    (od/filter-data wda wtype wsubtype))))

(defn nearest-segment [p segs]
  (letfn [(id-beg-end [s]
             [(first s) (first (second s)) (last (second s))])]
  (let [[id b e :as ibe1] (id-beg-end (first segs))
         mid1 (min (simple-dist p b) (simple-dist p e))
         nsg1 (first segs)] 
    (loop [ibe ibe1 r (rest segs) mid mid1 nsg nsg1]
      (if (empty? r) 
        nsg
        (let [[id b e :as ibe2] (id-beg-end (first r))
               mid2 (min (simple-dist p b) (simple-dist p e))
               nsg2 (first r)]
          (if (< mid2 mid)
            (recur ibe2 (rest r) mid2 nsg2)
            (recur ibe (rest r) mid nsg))))))))

(defn sort-segments [p segs]
  (letfn [(id-beg-end [s]
             [(first s) (first (second s)) (last (second s))])
           (min-dist [p b e]
             (let [bd (simple-dist p b)
                    ed (simple-dist p e)]
               (if (< bd ed)
                 [bd e]
                 [ed b])))
           (seg-desc [s]
             (let [[id b e] (id-beg-end s)]
               [(min-dist p b e) s]))
           (sort-fn [x y]
             (< (ffirst x) (ffirst y)))]
  (sort sort-fn (map seg-desc segs))))

(defn find-branches
  ([p]
  (find-branches p WAY-TYPE WAY-SUBTYPE BRANCHES))
([p n]
  (find-branches p WAY-TYPE WAY-SUBTYPE n))
([p wtype wsubtype]
  (find-branches p wtype wsubtype BRANCHES))
([p wtype wsubtype n]
  (let [sgs (find-segments p wtype wsubtype)
         sss (sort-segments p sgs)
         tss (take n sss)]
    (map #(let [[[mind farp] [id s]] %]
                  (vswap! SEGMENTS assoc id s) 
                  [id farp]) tss))))

(defn near [v1 v2]
  (or (= v1 v2)
  (and (< (Math/abs (- (first v1) (first v2))) RADIUS)
          (< (Math/abs (- (second v1) (second v2))) RADIUS))))

(defn display-path [pts]
  (println pts))

(defn display-detailed
  ([]
  (map display-detailed 
    (range (min 6 (count @path/PATHS)))
    ["FFFFFF00" "FFFF6000" "FFFF0000" "FF7B3F00" "FF008000" "FF0000FF"]))
([n clr]
  (if-let [ids (butlast (rest (nth @path/PATHS n)))]
    (display-detailed [ids clr])))
([[ids clr]]
  (if (number? ids) 
    (if-let [pts (@SEGMENTS ids)]
      (let [id (str ids)
            [[la1 lo1] [la2 lo2]] [(first pts) (last pts)]
            [lat1 lon1] [(MapOb/getDegMin la1) (MapOb/getDegMin lo1)]
            [lat2 lon2] [(MapOb/getDegMin la2) (MapOb/getDegMin lo2)]
            poi (foc "OMTPoly" "label" id)
            tsf (fn [[y x]]
                   (str (MapOb/getDegMin y) " " (MapOb/getDegMin x)))] 
         (ssv poi "description" id)
         (ssv poi "latitude" lat1)
         (ssv poi "longitude" lon1)
         (ssv poi "lineColor" clr)
         (ssv poi "line" (fifos "Line" "label" "L2"))
         (ssvs poi "points" (map tsf pts))
         (OMT/getOrAdd poi)
         poi))
    (doseq [id ids]
      (display-detailed [id clr])))))

(defn distance [pts]
  (if (and (seq pts) (vector? (first pts))) ;; list points
  (if (empty? (rest pts))
    0
    (+ (simple-dist (first pts) (second pts))
      (distance (rest pts))))
  (apply + (map #(distance (@SEGMENTS %))  pts))))

