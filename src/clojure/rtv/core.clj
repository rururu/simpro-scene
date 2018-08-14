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
(def LEVCOL20 {0	"FD0000FF"
1	"E60000FF"
2	"CF0000FF"
3	"B80000FF"
4	"A10000FF"
5	"8A0000FF"
6	"730000FF"
7	"5C0000FF"
8	"450000FF"
9	"2E0000FF"
10	"170000FF"
11	"FF00AA00"
12	"38FF0000"
13	"54FF0000"
14	"70FF0000"
15	"8CFF0000"
16	"A8FF0000"
17	"C4FF0000"
18	"E0FF0000"
19	"FCFF0000"})
(def LEVEL 11)
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
  ([lab points color]
  (if-let [mo (OMT/getMapOb lab)]
    (OMT/removeMapOb mo true))
  (let [ins (foc "OMTSpline" "label" lab)
         [lat lon] (first points)]
    (ssv ins "description" lab)
    (ssv ins "latitude" (MapOb/getDegMin lat))
    (ssv ins "longitude" (MapOb/getDegMin lon))
    (ssv ins "lineColor" color)
    (ssvs ins "points" (vec (map #(str (MapOb/getDegMin (first %)) " " 
		        (MapOb/getDegMin (second %))) points)))
    (OMT/getOrAdd ins)))
([lab points]
  (segment lab points "FF0000FF")))

(defn elevationField [lat lon h w ele step level]
  (def LEVEL level)
(doseq [y (range h)]
  (doseq [x (range w)]
    (let [lat (+ lat (* y step))
           lon (+ lon (* x step))]
      (if (>= (elevation [lat lon]) ele)
        (rete.core/assert-frame
	['Point
	 'x x
	 'y y
	 'latlon [lat lon]
	 'side (if (or (= x 0)
	                   (= y 0)
	                   (= x (dec w))	
	                   (= y (dec h)))
	            "BORDER")])) ) )))

