(ns osm.search
(:require
  [osm.data :as od]))

(def RADIUS 0.01)
(def WAY-SUBTYPE "rail")
(def WAY-TYPE "railway")
(defn find-ways [[lat lon]]
  (let [d (/ RADIUS 60)
       bbx [(- lon d) (- lat d) (+ lon d) (+ lat d)]
       wda (od/way-data bbx WAY-TYPE)]
  (od/filter-data wda WAY-TYPE WAY-SUBTYPE)))

