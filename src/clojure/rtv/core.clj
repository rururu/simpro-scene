(ns rtv.core
(:use protege.core
  subcla.etoele)
(:import
  ru.igis.omtab.OMTPoly
  ru.igis.omtab.MapOb
  ru.igis.omtab.OMT))

(def D5MIN (double (/ 1 12)))
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

