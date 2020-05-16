(ns cesium.pop.server
(:use protege.core)
(:require
  [cesium.server :refer :all]
  [czml.generator :as cz]))
(def POP-VIEW {:latitude 57.0
  :longitude 30.0
  :height 400000
  :heading 0
  :pitch -60
  :roll 0})
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

(defn send-city-points [inss]
  (let [pts (for [i inss] (vector (sv i "latitude") (sv i "longitude")))]
  (send-czml (cz/add-points pts 100 "RELATIVE_TO_GROUND" [255 255 0 255] 4))))

(defn fly-to [view]
  (let [{:keys [longitude latitude height heading pitch roll]} view]
  (send-clj-funcall `(cesium.client/camera-fly ~'cesium.client.CAMERA ~longitude ~latitude ~height ~heading ~pitch ~roll))))

