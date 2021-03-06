(ns drape.server
(:use protege.core)
(:require
  [cesium.server :refer :all]
  [czml.generator :refer :all]))
(def FLAG-COUNT 0)
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
       trans (mp "transparency")]
    (add-image "flag"
      (sv flag "source")
      (calculate-wsen 
        [(read-string (sv peak "latitude"))
         (read-string (sv peak "longitude"))]
        0.01) 
      trans)))

(defn normaz [az]
  (cond 
  (> az Math/PI) (- az (* 2 Math/PI))
  (< az (- Math/PI)) (+ az (* 2 Math/PI))
  true az))

(defn position [^double lambda0 ^double phi1 ^double c ^double az]
  (let [cosphi1 (Math/cos phi1)
       sinphi1 (Math/sin phi1)
       cosaz (Math/cos az)
       sinaz (Math/sin az)
       sinc (Math/sin c)
       cosc (Math/cos c)
       phi2 (Math/asin (+ (* sinphi1 cosc) (* cosphi1 sinc cosaz)))
       lam2 (+ (Math/atan2 (* sinc sinaz) (- (* cosphi1 cosc) (* sinphi1 sinc cosaz))) lambda0)]
  [lam2 phi2]))

(defn fly-to [place heading distance height pitch]
  (let [hgt (or (sv place "height") height)
       lat (read-string (sv place "latitude"))
       lon (read-string (sv place "longitude"))
       lat (degminsec-to-deg lat)
       lon (degminsec-to-deg lon)
       phi (Math/toRadians lat)
       lam (Math/toRadians lon)
       c (Math/toRadians (/ distance 1852 60))
       az (normaz (+ Math/PI (Math/toRadians heading)))
       [lam2 phi2] (position lam phi c az)
       lon2 (Math/toDegrees lam2)
       lat2 (Math/toDegrees phi2)
       cmd (str "cesium.client.camera_fly(cesium.client.CAMERA, "
                     lon2 ", "
                     lat2 ", "
                     hgt ", "
                     heading ", "
                     pitch ", 0)")]
  (send-js cmd)))

(defn tour-add-flag [hm inst]
  (let [mp (into {} hm)]
  (if-let [place (first (selection mp "places"))]
    (if-let [flag (first (selection mp "flags"))]
      (let [trans (or (mp "transparency") 0.5)]
        (def FLAG-COUNT (inc FLAG-COUNT))
        (send-czml
          (add-image FLAG-COUNT
            (sv flag "source")
            (calculate-wsen 
              [(read-string (sv place "latitude"))
               (read-string (sv place "longitude"))]
              0.01) 
            trans)))))))

(defn tour-goto-selected [hm inst]
  (let [mp (into {} hm)]
  (if-let [place (first (selection mp "places"))]
    (let [height (sv place "height")]
      (when (> FLAG-COUNT 0)
        (send-czml (delete-points (inc FLAG-COUNT)))
        (def FLAG-COUNT 0))
      (fly-to place
              180
              4000
              (or height 1000)
              (if height 0 -15))))))

(defn tour-drape-place [hm inst]
  (let [mp (into {} hm)]
  (if-let [place (first (selection mp "places"))]
    (if-let [flag (first (selection mp "flags"))]
      (let [trans (or (mp "transparency") 0.5)]
        (send-czml
          (add-image 0
            (sv flag "source")
            (calculate-wsen 
              [(read-string (sv place "latitude"))
               (read-string (sv place "longitude"))]
              0.01) 
            trans)))))))

