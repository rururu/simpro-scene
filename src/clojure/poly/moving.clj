(ns poly.moving
(:use
  protege.core)
(:import 
  ru.igis.omtab.OMT
  com.bbn.openmap.omGraphics.OMGraphic
  com.bbn.openmap.proj.GreatCircle
  com.bbn.openmap.proj.ProjMath
  ru.igis.omtab.OMTPoly))
(defn canon-point-seq [pts islla?]
  ;; begins point sequence from northest point
;; and arrange it clockwise
(let [pts (if islla?
              (partition 2 pts)
              pts)]
  (loop [pp pts N -90 K -1]
    (if (seq pp)
      (if (> (ffirst pp) N)
        (recur (rest pp) (ffirst pp) (inc K))
        (recur (rest pp) N K))
      (let [pp (concat (drop K pts) (take K pts))
            pp (if (> (second (last pp)) (second (first pp)))
                  (cons (first pp) (reverse (rest pp)))
                  pp)]
        (if islla?
          (flatten pp)
          pp))))))

(defn mix-lists-by-n [n x y]
  ; while mixing take n elements from x and one element from y repeatedly
(cond
  (< (.size x) n)(concat x y)
  (< (.size y) 1) x
 true (concat (take n x)(take 1 y)(mix-lists-by-n n (drop n x)(drop 1 y)))))

(defn evenly-mix-lists [x y]
  ; if lists differ in length remarkably, repeatedly takes from longer list more than from shorter one
(let [lx (.size x)
       ly (.size y)]
 (if (> lx ly)
     (mix-lists-by-n (int (Math/floor (float (/ lx ly)))) x y)
     (mix-lists-by-n (int (Math/floor (float (/ ly lx)))) y x))))

(defn points-repeater [min max]
  ; min always less then max
; Returns vector of numbers for repetition of points
(let [nd (/ min max)
       nr (.numerator nd)
       dr (.denominator nd)]
 (if (= nr 1)
     (list dr)
     (let [mr (- nr 1)
            ce (int (Math/floor (float (/ dr nr))))
            rs (- dr (* ce mr))
            df (- (- rs ce) 1)]
       (if (< df 2)
           (concat (repeat mr ce)(list rs))
           (let [m2 (- mr df)
                  c2 (+ ce 1)
                  r2 (- rs df)]
             (concat (evenly-mix-lists (repeat df c2)(repeat m2 ce))(list r2)) )) )) ))

(defn repeat-points [points repeater]
  ; Repeat some points to fit certain number
(letfn [(rp [pp r r0]
            (cond
                (empty? r) (rp pp r0 r0)
                (seq pp) (concat 
                                 (repeat (first r) (first pp))
                                 (rp (rest pp) (rest r) r0) )))]
  (rp points repeater repeater)))

(defn reppp [lla le1 le2]
  (apply concat (repeat-points (partition 2 lla) (points-repeater (/ le1 2)(/ le2 2)))))

(defn step-poly [ratio llas llaf]
  (if (and (seq llas) (seq llaf))
  (let [[p1 l1 & llas2] llas
         [p2 l2 & llaf2] llaf
         d0 (GreatCircle/sphericalDistance p1 l1 p2 l2)
         dis (* d0 ratio)
         azi (GreatCircle/sphericalAzimuth p1 l1 p2 l2)
         poi (GreatCircle/sphericalBetween p1 l1 dis azi 1)]
    (lazy-cat [(aget poi 2)] [(aget poi 3)] (step-poly ratio llas2 llaf2)) )))

(defn equalize-polys [mob mos]
  (let [llab (.getLLPoints mob)
      llas (.getLLPoints mos)
      llab (canon-point-seq llab true)
      llas (canon-point-seq llas true)
      lenb (count llab)
      lens (count llas)
      llab (into-array Double/TYPE llab)
      llas (into-array Double/TYPE llas)]
  (cond
    (= lenb lens) [llab llas]
    (> lenb lens) [llab (into-array Double/TYPE (reppp llas lens lenb))]
    (< lenb lens) [(into-array Double/TYPE (reppp llab lenb lens)) llas])))

(defn poly-mover [mob mos tim pmm]
  (let [[llab llas] (equalize-polys mob mos)]
  (.addMovingPoly pmm (.getLocationMarker mob) llab llas (/ tim 3600))))

(defn latlon-to-degmin [llv]
  (let [pts (map #(ru.igis.omtab.MapOb/getDegMin %) llv)
       pts (partition 2 pts)]
  (for [[la lo & re] pts] (str la " " lo))))

(defn set-poly-points [poly llv]
  (if-let [pinst (if (string? poly) (fifos "OMTPoly" "label" poly) poly)]
  (ssvs pinst "points" (latlon-to-degmin llv))))

