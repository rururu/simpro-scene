(ns rtv.core
(:use protege.core
  subcla.etoele)
(:import
  ru.igis.omtab.OMTPoly
  ru.igis.omtab.MapOb
  ru.igis.omtab.OMT))

(def D5MIN (double (/ 1 12)))
(def MAXD 11000)
(def MAXH 9000)
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
11	"1CFF0000"
12	"38FF0000"
13	"54FF0000"
14	"70FF0000"
15	"8CFF0000"
16	"A8FF0000"
17	"C4FF0000"
18	"E0FF0000"
19	"FCFF0000"})
(defn gradient [lat lon]
  (let [ec    (elevation [lat lon])
       en    (elevation [(+ lat D5MIN) lon])
       ene  (elevation [(+ lat D5MIN) (+ lon D5MIN)])
       enw (elevation [(+ lat D5MIN) (- lon D5MIN)])
       es    (elevation [(- lat D5MIN) lon])
       ese  (elevation [(- lat D5MIN) (+ lon D5MIN)])
       esw (elevation [(- lat D5MIN) (- lon D5MIN)])
       ee    (elevation [lat (+ lon D5MIN)])
       ew   (elevation [lat (- lon D5MIN)])
       mim (min ec en ene enw es ese esw ee ew)
       maz (max ec en ene enw es ese esw ee ew)]
  ;;(println ec en ene enw es ese esw ee ew)
  (- maz mim)))

(defn grad-to-transpar [grad gmax color]
  (let [itr (int (* (/ 255 gmax) grad))
       itr (if (> itr 255) 255 itr)
       xtr (format "%02x" itr)] 
  (str xtr (.substring color 2))))

(defn gradientPoly [id lat lon gmax color]
  (let [gra (gradient lat lon)
       ;;_ (println gra)
       gtp (grad-to-transpar gra gmax color)
       gpo (OMTPoly/createOMTPoly
	(str id)
	(MapOb/getDegMin lat)
	(MapOb/getDegMin lon)
	gtp
	gtp
	"true"
	"false"
	[(str (MapOb/getDegMin lat) " " (MapOb/getDegMin lon))
	 (str (MapOb/getDegMin lat) " " (MapOb/getDegMin (+ lon (* 3 D5MIN))))
	 (str (MapOb/getDegMin (- lat (* 3 D5MIN))) " " (MapOb/getDegMin (+ lon (* 3 D5MIN))))
	 (str (MapOb/getDegMin (- lat (* 3 D5MIN))) " " (MapOb/getDegMin lon))])
       mo (OMT/addMapOb gpo (second (OMT/getPlaygrounds)))]
  (.hideLabel mo)))

(defn field [lat lon w h]
  (doseq [y (range h)]
  (doseq [x (range w)] 
   (gradientPoly (str x y)
	(+ lat (* y 3 D5MIN)) 
	(+ lon (* x 3 D5MIN))
	500
                        "FFFF0000"))))

(defn slope1 [lat lon]
  (let [cde (fn [p] [p (elevation p)])
       c    (cde [lat lon])
       n    (cde [(+ lat D5MIN) lon])
       ne  (cde [(+ lat D5MIN) (+ lon D5MIN)])
       nw (cde [(+ lat D5MIN) (- lon D5MIN)])
       s    (cde [(- lat D5MIN) lon])
       se  (cde [(- lat D5MIN) (+ lon D5MIN)])
       sw (cde [(- lat D5MIN) (- lon D5MIN)])
       e    (cde [lat (+ lon D5MIN)])
       w   (cde [lat (- lon D5MIN)])
       dif (fn [x] (let [x (map second x)]
	(- (apply max x) (apply min x))))
       m (hash-map 
	(dif [w c e])    [(first w) (first e)]
	(dif [s c n])     [(first s) (first n)]
	(dif [sw c ne]) [(first sw) (first ne)]
	(dif [nw c se]) [(first nw) (first se)])]
  (m (apply min (keys m)))))

(defn slope1Line [id lat lon color]
  (let [slo (slope1 lat lon)
       pnt #(str (MapOb/getDegMin (first %)) " " (MapOb/getDegMin (second %)))
       lin [(pnt (first slo)) (pnt (second slo))]
       _ (println lin)
       gpo (OMTPoly/createOMTPoly
	(str id)
	(MapOb/getDegMin lat)
	(MapOb/getDegMin lon)
	color
	color
	"false"
	"false"
	lin)
       mo (OMT/addMapOb gpo (second (OMT/getPlaygrounds)))]
  (.hideLabel mo)))

(defn fieldSlope [lat lon w h]
  (doseq [y (range h)]
  (doseq [x (range w)] 
   (slope1Line (str x y)
	(+ lat (* y 3 D5MIN)) 
	(+ lon (* x 3 D5MIN))
                        "FFFF0000"))))

(defn level1 [ele disc]
  (let [pele (+ ele MAXD)
       rele (/ pele (+ MAXD MAXH))
       dele (* rele disc)]
  (int dele)))

(defn isoPoly [id lat lon]
  (let [disc 20
       ele (elevation [lat lon])
       lev (level1 ele disc)
       ;;_ (println :lev lev)
       color (LEVCOL20 lev)
       pol (OMTPoly/createOMTPoly
	(str id)
	(MapOb/getDegMin lat)
	(MapOb/getDegMin lon)
	color
	color
	"true"
	"false"
	[(str (MapOb/getDegMin lat) " " (MapOb/getDegMin lon))
	 (str (MapOb/getDegMin lat) " " (MapOb/getDegMin (+ lon (* 3 D5MIN))))
	 (str (MapOb/getDegMin (- lat (* 3 D5MIN))) " " (MapOb/getDegMin (+ lon (* 3 D5MIN))))
	 (str (MapOb/getDegMin (- lat (* 3 D5MIN))) " " (MapOb/getDegMin lon))])
           mo (OMT/addMapOb pol (second (OMT/getPlaygrounds)))]
      (.hideLabel mo)))

(defn fieldIso [lat lon w h]
  (doseq [y (range h)]
  (doseq [x (range w)] 
   (isoPoly (str x y)
	(+ lat (* y 3 D5MIN)) 
	(+ lon (* x 3 D5MIN))))))

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
        (.hideLabel mo)))))
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
	(+ lat (* y 3 D5MIN)) 
	(+ lon (* x 3 D5MIN))))))
([lat lon w h level disc color]
  (doseq [y (range h)]
    (doseq [x (range w)] 
      (levelPoint (str x ":" y)
	(+ lat (* y 3 D5MIN)) 
	(+ lon (* x 3 D5MIN))
	level
	disc
	color)))))

