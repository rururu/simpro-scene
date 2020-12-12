(ns osm.path
(:use 
 protege.core
 protege.extensions)
(:require
  [osm.data :as od])
(:import
  ru.igis.omtab.OMT
  ru.igis.omtab.MapOb))
(def WAY-TYPE "railway")
(def WAY-SUBTYPE "rail")
(def SEARCH-RAD 0.005)
(def JOINT-RAD 0.0005)
(def BRANCHES 4)
(def SEGMENTS (volatile! {}))
(def CYCLES (volatile! 0))
(def PATHS (volatile! []))
(defn simple-dist [[y1 x1] [y2 x2]]
  ;;(let [sx (Math/abs (- x1 x2))
;;       sy (Math/abs (- y1 y2))]
;;  (Math/sqrt (+ (* sx sx) (* sy sy))))
(MapOb/distanceNM y1 x1 y2 x2))

(defn create-bbx
  ([id [clat clon] rad]
  (create-bbx id [(- clon rad) (- clat rad) (+ clon rad) (+ clat rad)]))
([id [w s e n]]
(let [tsf (fn [[y x]]
               (str (MapOb/getDegMin y) " " (MapOb/getDegMin x)))
       id (str id)
       clat (MapOb/getDegMin (/ (+ s n) 2))
       clon (MapOb/getDegMin (/ (+ w e) 2))
       pts [[n w] [n e] [s e] [s w] [n w]]
       pts (map tsf pts)
       poi (foc "OMTPoly" "label" id)]
    (ssv poi "latitude" clat)
    (ssv poi "longitude" clon)
    (ssv poi "lineColor" "FF0000FF")
    ;; (ssv poi "line" (fifos "Line" "label" "L3"))
    (ssvs poi "points" pts)
    (OMT/getOrAdd poi)
    poi)))

(defn find-segments
  ([[lat lon]]
  (find-segments [lat lon] SEARCH-RAD WAY-TYPE WAY-SUBTYPE))
([[lat lon] wtype wsubtype]
  (if-let [ss (seq (find-segments [lat lon] SEARCH-RAD wtype wsubtype))]
    ss
    (if-let [ss (seq (find-segments [lat lon] (* 2 SEARCH-RAD) wtype wsubtype))]
      ss
      (if-let [ss (seq (find-segments [lat lon] (* 4 SEARCH-RAD) wtype wsubtype))]
        ss
        (find-segments [lat lon] (* 8 SEARCH-RAD) wtype wsubtype)))))
([[lat lon] rad wtype wsubtype]
  (let [d rad
         bbx [(- lon d) (- lat d) (+ lon d) (+ lat d)]
         wda (od/way-data bbx wtype)
         fda (od/filter-data wda wtype wsubtype)]
    (create-bbx (gensym) bbx)
    ;; transform segment format into: [id p1 p2 ...]
    (map #(cons (first %) (second %)) fda))))

(defn sort-and-if-reverse-segments [p segs]
  (letfn [(mindist-id-ifrevseg [p s]
             (let [[id b e] [(first s) (second s) (last s)]
                     bd (simple-dist p b)
                     ed (simple-dist p e)]
               (if (< bd ed)
                 (cons bd (cons id (rest s)))
                 (cons ed (cons id (reverse (rest s)))))))
           (sort-fn [x y]
             (< (first x) (first y)))]
  (map rest (sort sort-fn (map #(mindist-id-ifrevseg p %) segs)))))

(defn find-branches
  ([p w]
  (find-branches p WAY-TYPE WAY-SUBTYPE BRANCHES))
([p n w]
  (find-branches p WAY-TYPE WAY-SUBTYPE n))
([p wtype wsubtype w]
  (find-branches p wtype wsubtype BRANCHES))
([p wtype wsubtype n w]
  (let [inside-joint-rad #(< (simple-dist (second %) p) JOINT-RAD)
         sgs (find-segments p wtype wsubtype)
         sss (sort-and-if-reverse-segments p sgs)
         sss (if (= w :inside-joint)
                 (filter inside-joint-rad sss)
                 sss)
         tss (take n sss)]
    (doall (map #(vswap! SEGMENTS assoc (first %) (rest %)) tss))
    tss)))

(defn near [v1 v2]
  (or (= v1 v2)
  (and (< (Math/abs (- (first v1) (first v2))) JOINT-RAD)
          (< (Math/abs (- (second v1) (second v2))) JOINT-RAD))))

(defn distance [pts]
  (if (and (seq pts) (vector? (first pts))) ;; list points
  (if (empty? (rest pts))
    0
    (+ (simple-dist (first pts) (second pts))
      (distance (rest pts))))
  (apply + (map #(distance (@SEGMENTS %))  pts))))

(defn direction [p1 p2]
  (let [[lat1 lon1] p1
        [lat2 lon2] p2]
  (MapOb/bearingsDeg lat1 lon1 lat2 lon2)))

(defn display-detailed
  ([]
  (map display-detailed 
    (range (min 6 (count @PATHS)))
    ["FFFFFF00" "FFFF6000" "FFFF0000" "FF7B3F00" "FF008000" "FF0000FF"]))
([n clr]
  (if-let [ids (butlast (rest (nth @PATHS n)))]
    (display-detailed [ids clr])))
([[ids clr]]
  (cond
    (number? ids) 
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
    (string? ids)
    nil
    true
    (doseq [id ids]
      (display-detailed [id clr])))))

(defn display-path [pts]
  (println pts)
(display-detailed [pts "FFFF6000"]))

(defn create-line [[id & pts]]
  (od/create-line [id pts]))

(defn observe [p rad]
  (map create-line (find-segments p rad WAY-TYPE WAY-SUBTYPE)))

(defn select-connecting-edges[n1 n2]
  (let [e1 (svs n1 "edges")
       e2 (svs n2 "edges")
       e3 (clojure.set/difference (set e1) (set e2))]
  e3))

