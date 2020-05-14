(ns cesium.heat.server
(:use protege.core)
(:require
  [cesium.server :refer :all]))
(def BOUNDS {:west 0
  :east 100
  :south 0
  :north 70})
(def OPTIONS {:radius 20
  :maxOpacity 0.8
  :scaleRadius true
  :blur 1.0
  :useLocalExtrema false})
(def DATA [[30.278 59.971 5]
 [30.395 59.956 7]
 [30.252 59.917 8]
 [30.343 59.919 6]])
(defn send-heatmap-init [bounds options]
  (send-clj-funcall `(cesium.heat.client/heatmap-init ~bounds ~options)))

(defn send-heatmap-data [valmin valmax data]
  (send-clj-funcall `(cesium.heat.client/heatmap-data ~valmin ~valmax ~data)))

(defn heatmap-data [x-slot y-slot value-slot inss]
  (let [data (map #(vector (sv % x-slot) (sv % y-slot) (sv % value-slot)) inss)
       vals (map #(nth % 2) data)
       valmin (apply min vals)
       valmax (apply max vals)]
  [valmin valmax (vec data)]))

