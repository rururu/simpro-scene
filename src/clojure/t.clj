(ns t
(:use protege.core)
(:require [vlaaad.reveal :as reveal]))
(defn tst []
  (println :TST)
(System/setProperty "vlaaad.reveal.prefs" "{:theme :light}")
(add-tap (reveal/ui)))

(defn lla>lolahs [lla h]
  (let [lls (map #(Math/toDegrees %) lla)
       lls (partition 2 lls)]
  (map #(list (second %) (first %) h) lls)))

(defn to-rgba [hex-color]
  (let [[a r g b] (vec (map (fn [[x y]] (Integer/parseInt (str x y) 16)) (partition 2 hex-color)))]
  [r g b a]))

(defn line-rgba [mo]
  (let [lm (.getLocationMarker mo)
      clr (.getLineColor lm)]
  [(.getRed clr) (.getGreen clr) (.getBlue clr) (.getAlpha clr)]))

(defn fill-rgba [mo]
  (let [lm (.getLocationMarker mo)
      clr (.getFillColor lm)]
  [(.getRed clr) (.getGreen clr) (.getBlue clr) (.getAlpha clr)]))

