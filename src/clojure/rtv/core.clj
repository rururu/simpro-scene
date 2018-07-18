(ns rtv.core
(:use protege.core
  subcla.etoele)
(:import
  ru.igis.omtab.OMTPoly
  ru.igis.omtab.MapOb
  ru.igis.omtab.OMT))

(def D5MIN (/ 1 12))
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
	 (str (MapOb/getDegMin lat) " " (MapOb/getDegMin (+ lon (* 1 D5MIN))))
	 (str (MapOb/getDegMin (- lat (* 1 D5MIN))) " " (MapOb/getDegMin (+ lon (* 1 D5MIN))))
	 (str (MapOb/getDegMin (- lat (* 1 D5MIN))) " " (MapOb/getDegMin lon))])
       mo (OMT/addMapOb gpo (second (OMT/getPlaygrounds)))]
  (.hideLabel mo)))

(defn field [lat lon w h]
  (doseq [y (range h)]
  (doseq [x (range w)] 
   (gradientPoly (str x y)
	(+ lat (* y 1 D5MIN)) 
	(+ lon (* x 1 D5MIN))
	500
                        "FFFF0000"))))

