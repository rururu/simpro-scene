(ns rtv.core
(:use protege.core
  subcla.etoele
  ru.rules)
(:import
  ru.igis.omtab.OMTPoly
  ru.igis.omtab.MapOb
  ru.igis.omtab.OMT))

(def STEPD 0.25)
(def MAXH 9000)
(def MAXD 11000)
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
(def RMMA0 (let [pg0 (first (ru.igis.omtab.OMT/getPlaygrounds))]
  (if (not (.getRuMapMouseAdapter pg0))
    (.setRuMapMouseAdapter pg0 (ru.igis.omtab.gui.RuMapMouseAdapter.)))))
(defn fill-color
  ([mo r g b]
  (fill-color mo r g b 255))
([mo r g b a]
  (let [mo (if (string? mo) 
	(ru.igis.omtab.OMT/getMapOb mo)
	mo)]
    (.setFillPaint (.getLocationMarker mo) (java.awt.Color. r g b a)))))

(defn level1 [ele disc]
  (let [pele (+ ele MAXD)
       rele (/ pele (+ MAXD MAXH))
       dele (* rele disc)]
  (int dele)))

(defn point
  ([lab lat lon color]
  (if-let [mo (OMT/getMapOb lab)]
    (OMT/removeMapOb mo true))
  (let [ins (crin "OMTPoint")]
    (ssv ins "label" lab) 
    (ssv ins "latitude" (MapOb/getDegMin lat))
    (ssv ins "longitude" (MapOb/getDegMin lon))
    (ssv ins "lineColor" color)
    (ssv ins "oval" true)
    (OMT/getOrAdd ins)))
([lab lat lon]
  (point lab lat lon "FFFF0000")))

(defn assert-point [lat lon mo]
  (rete.core/assert-frame
	['Point
	 'lat lat
	 'lon lon
	 'mapob mo
	 'north nil
	 'south nil
	 'west nil
	 'east nil
	 'border false]))

(defn levelPoint
  ([id lat lon level disc color]
  (let [ele (elevation [lat lon])
         lev (level1 ele disc)]
    (if (= lev level)
      (let [mo (point (str id) lat lon color)]
        (.setDescription mo (str "<html>id: " id 
	"<br>lat: " lat 
	"<br>lon: " lon
	"<br>ele: " ele
	"<br>lev: " lev))
        (.hideLabel mo)
        (assert-point lat lon mo)))))
([id lat lon]
  (let [disc 20
         ele (elevation [lat lon])
         lev (level1 ele disc)
         mo  (point (str id) lat lon (LEVCOL20 lev))]
    (.setDescription mo (str "<html>id: " id 
	"<br>lat: " lat 
	"<br>lon: " lon
	"<br>ele: " ele
	"<br>lev: " lev))
    (.hideLabel mo))))

(defn pointsField
  ([lat lon w h]
  (doseq [y (range h)]
    (doseq [x (range w)] 
     (levelPoint (str x ":" y)
	(+ lat (* y STEPD)) 
	(+ lon (* x STEPD))))))
([lat lon w h level disc color]
  (doseq [y (range h)]
    (doseq [x (range w)] 
      (levelPoint (str x ":" y)
	(+ lat (* y STEPD)) 
	(+ lon (* x STEPD))
	level
	disc
	color)))))

