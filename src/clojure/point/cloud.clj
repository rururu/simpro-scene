(ns point.cloud
(:use protege.core)
(:require
  [clojure.java.io :as cio]))
(def TR-LINES 10000)
(def X0 0)
(def Y0 0)
(def Z0 0)
(def R 0)
(def K 0)
(defn point-cloud-gen
  ([xd yd zd func path]
  (with-open [fos (cio/writer path)]
    (point-cloud-gen xd yd zd
      (fn[x y z] (.write fos (str (double x) " " (double y) " " (double z) " " (func x y z) "\n"))))
    (.close fos)))      
([xd yd zd func]
  (let [[xmi xn xma] xd
         [ymi yn yma] yd
         [zmi zn zma] zd
         xs (/ (- xma xmi) xn)
         ys (/ (- yma ymi) yn)
         zs (/ (- zma zmi) zn)]
    (def cnt 1)
    (loop [x xmi y ymi z zmi]
      (if (<= x xma)
        (if (<= y yma)
          (if (<= z zma)
            (do (func x y z)
              (def cnt (inc cnt))
              (if (= (mod cnt TR-LINES) 0)
                (future (println (str "Processed " cnt " lines ..."))))
              (recur x y (+ z zs)))
            (recur x (+ y ys) zmi))
          (recur (+ x xs) ymi zmi))))
    (println "Total " (dec cnt) " lines." ))))

(defn in-sphere? [x y z]
  (< (Math/sqrt (+ (* (- x X0) (- x X0))
                           (* (- y Y0) (- y Y0))
                           (* (* (- z Z0) K) (* (- z Z0) K)))) R))

(defn sphere-surface [x y]
  (let [ur (- (* R R) (* (- x X0) (- x X0)) (* (- y Y0) (- y Y0)))]
  (if (>= ur 0)
    (let [r (Math/sqrt ur)]
      [(+ Z0 r) (- Z0 r)])
    [])))

(defn ball-gen [x0 y0 h0 R color-pos color-neg path]
  (with-open [fos (cio/writer path)]
  (let [s (/ Math/PI 500)
         mx (* Math/PI 2)
         r (/ R 100000)
         teta (range 0 mx s)
         phi (range 0 mx s)]
    (def cnt 1)
    (loop [tes teta fis phi]
      (let [te (first tes)
             fi (first fis)]
        (if (some? te)
          (if (some? fi)
            (let [x (* r (Math/sin te) (Math/cos fi))
                   y (* r (Math/sin te) (Math/sin fi))
                   z (* r (Math/cos te))
                   h (* z 100000)
                   c (if (< (+ h h0) 0) color-neg color-pos)]
              (.write fos (str (+ x x0) " " (+ y y0) " " (+ h h0) " " c "\n"))
              (def cnt (inc cnt))
              (if (= (mod cnt TR-LINES) 0)
                (future (println (str "Processed " cnt " lines ..."))))
              (recur tes (rest fis)))
            (recur (rest tes) phi)))))
    (println "Total " (dec cnt) " lines." )
    (.close fos))))

