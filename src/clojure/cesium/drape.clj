(ns cesium.drape
(:use protege.core)
(:require
  [cesium.server :refer :all]
  [czml.generator :refer :all]))
(defn degminsec-to-deg [[deg min sec]]
  (+ deg (/ min 60) (/ sec 60 60)))

(defn calculate-wsen [[lat lon] deviation]
  (let [[lat lon] (if (and (vector lat) (vector lon))
                       [(degminsec-to-deg lat) (degminsec-to-deg lon)]
                       [lat lon])]
  [(- lon deviation) (- lat deviation) (+ lon deviation) (+ lat deviation)]))

(defn drape-peak [hm inst]
  (let [mp (into {} hm)
       peak (mp "peak")
       flag (mp "flag")
       trans (mp "transparency")
       trans (int (* trans 255))]
  (send-czml 
    (add-image "flag"
      (sv flag "source")
      (calculate-wsen 
        [(read-string (sv peak "latitude"))
         (read-string (sv peak "longitude"))]
        0.01) 
      trans))))

