(ns fit.points
(:use  protege.core))

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

