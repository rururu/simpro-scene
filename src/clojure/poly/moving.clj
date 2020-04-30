(ns poly.moving
(:use
  protege.core)
(:import 
  ru.igis.omtab.OMT
  com.bbn.openmap.omGraphics.OMGraphic
  com.bbn.openmap.proj.GreatCircle
  com.bbn.openmap.proj.ProjMath
  ru.igis.omtab.OMTPoly))
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

(defn pm-repeat [mob ?t]
  (try
  (let [att (.getAttribute mob "PM-PARAMS")
         finis (att :finish)]
    (if (> ?t finis)
        0
        (let [llas (att :sta-points)
               llaf (att :fin-points)
               peri (att :period)
               rest (- finis ?t)
               ratio (/ (- peri rest) peri)
               ipp (step-poly ratio llas llaf)
               arr (double-array ipp)]
           (.. mob (getLocationMarker) (setLocation arr (OMGraphic/RADIANS)))
           1)))
(catch Exception ex
  (println ex)
  -1)))

(defn pm-start [mob obs tim ?t]
  (try
  (let [llaj (.getLLPoints mob)
         llas (map #(ProjMath/degToRad %) (OMTPoly/getLLPoints (svs obs "points")))
         lenj (alength llaj)
         lens (count llas)
         fin (+ ?t tim)
         att {:period tim :finish fin}]
    (.putAttribute mob "PM-PARAMS"
      (cond
         (> lenj lens) (assoc att :sta-points (vec llaj) :fin-points (reppp llas lens lenj))
         (< lenj lens) (assoc att :sta-points (reppp llaj lenj lens) :fin-points llas)
         (= lenj lens) (assoc att :sta-points (vec llaj) :fin-points llas)))
     1)
(catch Exception ex
  (println ex)
  -1)))

(defn pm-repeat-n [?mpb tim ?n ?t]
  (let [mm (into [] ?mpb)
       len (count mm)
       fst (OMT/getMapOb (first mm))
       nxt (inc ?n)
       rep (pm-repeat fst ?t)]
   (if (and (= rep 0)(< nxt len))
       (pm-start fst (nth mm nxt) (/ tim len) ?t))
   rep))

(defn pm-start-n [?mpb tim ?t]
  (let [mm (into [] ?mpb)
       len (count mm)]
  (if (> len 1)
      (pm-start (OMT/getOrAdd (first mm)) (second mm) (/ tim len) ?t)
      -1)))

(defn latlon-to-degmin [llv]
  (let [pts (map #(ru.igis.omtab.MapOb/getDegMin %) llv)
       pts (partition 2 pts)]
  (for [[la lo & re] pts] (str la " " lo))))

(defn set-poly-points [poly llv]
  (if-let [pinst (if (string? poly) (fifos "OMTPoly" "label" poly) poly)]
  (ssvs pinst "points" (latlon-to-degmin llv))))

