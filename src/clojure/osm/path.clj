(ns osm.path
(:require
  [osm.data :as od]))
(def WAY-TYPE "railway")
(def WAY-SUBTYPE "rail")
(def RADIUS 0.01)
(defn find-segments
  ([[lat lon]]
  (find-segments [lat lon] RADIUS WAY-TYPE WAY-SUBTYPE))
([[lat lon] rad wtype wsubtype]
  (let [d (/ rad 60)
         bbx [(- lon d) (- lat d) (+ lon d) (+ lat d)]
         wda (od/way-data bbx wtype)]
    (od/filter-data wda wtype wsubtype))))

