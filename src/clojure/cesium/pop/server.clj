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

(defn category->color [cat]
  (condp = cat
  7 [255 0 0 255]     ;; RED
  6 [255 0 255 255] ;; FUCSIA	
  5 [255 165 0 255] ;; ORANGE
  4 [255 255 0 255] ;; YELLOW
  3 [0 255 0 255]     ;; LIME
  2 [0 255 255 255] ;; AQUA
  1 [0 153 255 255]
  0 [0 0 255 255]     ;; BLUE
  [0 0 0 255]))

(defn category->size [cat]
  (+ 4 (* cat 4)))

(defn send-city-points [inss]
  (let [pts (for [i inss] (vector (sv i "latitude") 
                                           (sv i "longitude")
                                           (category->color (sv i "pop-category"))
                                           (category->size (sv i "pop-category"))))]
  (send-czml (cz/add-points pts 4000))))

(defn fly-to [view]
  (let [{:keys [longitude latitude height heading pitch roll]} view]
  (send-clj-funcall `(cesium.client/camera-fly ~'cesium.client.CAMERA ~longitude ~latitude ~height ~heading ~pitch ~roll))))

