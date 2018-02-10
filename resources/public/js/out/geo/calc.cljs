(ns geo.calc
)

(defn radians [deg]
  (/ (* deg js/Math.PI) 180))

(defn degrees [rad]
  (/ (* rad 180) js/Math.PI))

(defn spherical-between-js [^double phi1 ^double lambda0 ^double c ^double az]
  (let [cosphi1 (js/Math.cos phi1)
       sinphi1 (js/Math.sin phi1)
       cosaz (js/Math.cos az)
       sinaz (js/Math.sin az)
       sinc (js/Math.sin c)
       cosc (js/Math.cos c)
       phi2 (js/Math.asin (+ (* sinphi1 cosc) (* cosphi1 sinc cosaz)))
       lam2 (+ (js/Math.atan2 (* sinc sinaz) (- (* cosphi1 cosc) (* sinphi1 sinc cosaz))) lambda0)]
  [phi2 lam2]))

(defn future-pos-js [[lat lon] crs spd tim]
  (let [phi (radians lat)
       lam (radians lon)
       dir (radians crs)
       way (* spd tim)
       way (radians (/ way 60))
       [phi2 lam2] (spherical-between-js phi lam way dir)]
   [(degrees phi2) (degrees lam2)]))

(defn norm-crs [x]
  (cond
   (> x 360) (- x 360)
   (< x 0) (+ x 360)
   true x))

