(ns quil.midadded
(:use protege.core)
(:require 
  [quil.core :as q]))
(defn setup []
  (q/frame-rate 30)
(q/color-mode :hsb))

(defn draw []
  (q/background 240)
(let [period 100
       cur (mod (q/frame-count) period)
       angle (q/map-range cur
                           0 period
                           0 q/PI)]
  (q/fill (q/map-range cur 0 period 0 255) 255 255)
  (q/ellipse 100 100
               (* 150 (q/sin angle))
               (* 150 (q/cos angle)))))

(defn show-frame-rate [options]
  (let [; retrieve existing draw function or use empty one if not present
       draw (:draw options (fn []))
       ; updated-draw will replace draw
       updated-draw (fn []
                       (draw) ; call user-provided draw function
                       (q/fill 0)
                       (q/text-num (q/current-frame-rate) 20 40))]
  ; set updated-draw as :draw function
  (assoc options :draw updated-draw)))

(defn run []
  (q/defsketch midadd
  :title "Middleware Added"
  :size [400 400]
  :setup setup
  :draw draw
  :middleware [show-frame-rate]))

