(ns quil.one
(:use protege.core)
(:require 
  [quil.core :as q]
  [quil.middleware :as m]))
(def MIN-R 10)
(defn setup []
  {:x 0 :y 0 :r MIN-R})

(defn update [state]
  (update-in state [:r] inc))

(defn draw [state]
  (q/background 255)
(q/ellipse (:x state) (:y state) (:r state) (:r state)))

(defn shrink [r]
  (max MIN-R (dec r)))

(defn mouse-moved [state event]
  (-> state
  (assoc :x (:x event) :y (:y event))
  (update-in [:r] shrink)))

(defn run []
  (q/defsketch one
   :title "One"
   :size [900 900]
   :setup setup
   :draw draw
   :update update
   :mouse-moved mouse-moved
   :middleware [m/fun-mode]))

