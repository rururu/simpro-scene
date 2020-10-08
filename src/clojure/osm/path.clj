(ns osm.path
(:require
  [osm.data :as od]))
(def WAY-TYPE "railway")
(def WAY-SUBTYPE "rail")
(def RADIUS 0.01)
(def BRANCHES 4)
(defn simple-dist [[y1 x1] [y2 x2]]
  (+ (Math/abs (- x1 x2)) (Math/abs (- y1 y2))))

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
             (min (simple-dist p b) (simple-dist p e)))
           (seg-desc [s]
             (let [[id b e] (id-beg-end s)]
               [(min-dist p b e) s]))
           (sort-fn [x y]
             (< (first x) (first y)))]
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
    (map second tss))))

