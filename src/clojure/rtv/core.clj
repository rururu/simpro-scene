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

(defn field [lat lon w h]
  (doseq [y (range h)]
  (println (for [x (range w)] (gradient (+ lat (* y 3 D5MIN)) (+ lon (* x 3 D5MIN)))))))

(defn gradientPoly [lat lon]
  (let [gra (gradient lat lon)
       gpo (OMTPoly/createOMTPoly
	"po1"
	(MapOb/getDegMin lat)
	(MapOb/getDegMin lon)
	"FFFF0000"
	"20FF0000"
	"true"
	"false"
	[(str (MapOb/getDegMin lat) " " (MapOb/getDegMin lon))
	 (str (MapOb/getDegMin lat) " " (MapOb/getDegMin (+ lon (* 3 D5MIN))))
	 (str (MapOb/getDegMin (- lat (* 3 D5MIN))) " " (MapOb/getDegMin (+ lon (* 3 D5MIN))))
	 (str (MapOb/getDegMin (- lat (* 3 D5MIN))) " " (MapOb/getDegMin lon))])]
  (OMT/addMapOb gpo (second (OMT/getPlaygrounds)))))

