(ns cesium.heat.server
(:use protege.core)
(:require
  [cesium.server :refer :all]
  [czml.generator :as cz]))
(def BOUNDS {:west 27.6
  :east 37.8
  :south 53.9
  :north 60.0})
(def OPTIONS {:radius 20
  :maxOpacity 0.8
  :scaleRadius true
  :blur 0.1
  :useLocalExtrema false})
(def DATA [[30.278 59.971 5]
 [30.395 59.956 7]
 [30.252 59.917 8]
 [30.343 59.919 6]])
(defn pop-category [pois]
  (if (number? pois)
  (int (condp > pois
          10000 0
          100000 1
          1000000 2
          5000000 3
          10000000 4
          15000000 5
          20000000 6
          7))
  (for [poi pois] (ssv poi "pop-category" (pop-category (sv poi "population"))))))

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

(defn send-city-points [inss]
  (let [pts (for [i inss] (vector (sv i "latitude") (sv i "longitude")))]
  (send-czml (cz/add-points pts 100 "RELATIVE_TO_GROUND" [255 255 0 255] 4))))

