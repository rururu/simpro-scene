(ns rtv.core
(:use protege.core
  subcla.etoele
  ru.rules)
(:import
  ru.igis.omtab.OMTPoly
  ru.igis.omtab.MapOb
  ru.igis.omtab.OMT))

(def RMMA0 (let [pg0 (first (ru.igis.omtab.OMT/getPlaygrounds))]
  (if (not (.getRuMapMouseAdapter pg0))
    (.setRuMapMouseAdapter pg0 (ru.igis.omtab.gui.RuMapMouseAdapter.)))))
(def LEVCOL20 {-11000	"FD5A009D"
 -10000	"E65A009D"
 -9000	"CF8000FF"
 -8000	"B88000FF"
 -7000	"A14000FF"
 -6000	"8A4000FF"
 -5000	"732000FF"
 -4000	"5C2000FF"
 -3000	"450000FF"
 -2000	"2E0000FF"
 -1000	"170000FF"
 0	"FF00AA00"
 1000	"38FFDF00"
 2000	"54FF8000"
 3000	"70FF8000"
 4000	"8CFF4000"
 5000	"A8FF4000"
 6000	"C4FF0090"
 7000	"E0FF00FF"
 8000	"FCFF00FF"})
(def LEVEL 11)
(def STEP 1)
(defn line-width [mo w]
  (.setStroke (.getLocationMarker mo) (java.awt.BasicStroke. w)))

(defn near [e [y1 x1] [y2 x2]]
  (let [dx (if (> x1 x2) (- x1 x2) (- x2 x1))
       dy (if (> y1 y2) (- y1 y2) (- y2 y1))]
  (and (<= dx e) (<= dy e))))

(defn point
  ([lab lat lon color]
  (if-let [mo (OMT/getMapOb lab)]
    (OMT/removeMapOb mo true))
  (let [ins (foc "OMTPoint" "label" lab)]
    (ssv ins "description" lab)
    (ssv ins "latitude" (MapOb/getDegMin lat))
    (ssv ins "longitude" (MapOb/getDegMin lon))
    (ssv ins "lineColor" color)
    (ssv ins "oval" true)
    (OMT/getOrAdd ins)))
([lab lat lon]
  (point lab lat lon "FFFF0000")))

(defn segment
  ([lab ele points color]
  (if-let [mo (OMT/getMapOb lab)]
    (OMT/removeMapOb mo true))
  (let [ins (foc "OMTSpline" "label" lab)
         [lat lon] (first points)]
    (ssv ins "description" (str ele))
    (ssv ins "latitude" (MapOb/getDegMin lat))
    (ssv ins "longitude" (MapOb/getDegMin lon))
    (ssv ins "lineColor" color)
    (ssvs ins "points" (vec (map #(str (MapOb/getDegMin (first %)) " " 
		        (MapOb/getDegMin (second %))) points)))
    (OMT/getOrAdd ins)))
([lab ele points]
  (segment lab ele points "FF0000FF")))

(defn elevationField [lat lon h w elev step level]
  (def LEVEL level)
(def STEP step)
(doseq [y (range h)]
  (doseq [x (range w)]
    (let [lat (+ lat (* y step))
           lon (+ lon (* x step))
           ele (elevation [lat lon])]
      (if (or (and (>= elev 0) (>=  ele elev))
                (and (< elev 0) (<= ele elev)))
        (rete.core/assert-frame
	['Point
	 'elevation elev
	 'x x
	 'y y
	 'latlon [lat lon]
	 'side (if (or (= x 0)
	                   (= y 0)
	                   (= x (dec w))	
	                   (= y (dec h)))
	            "BORDER")])) ) )))

