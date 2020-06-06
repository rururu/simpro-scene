(ns see.saw
(:use
  protege.core
  rete.core)
(:require
  [seesaw.core :as s]))
(defn center! [frame]
  (.setLocationRelativeTo frame nil))

(defn slider [head min max func size mits mats]
  (let [[wid hig] size
        sld (s/slider 
              :value 1994 
              :min min 
              :max max
              :minor-tick-spacing mits
              :major-tick-spacing mats
              :paint-ticks? true
              :paint-labels? true
              :paint-track? true)]
    (s/invoke-later
      (doto (s/frame :title head
                     :content sld
                     :on-close :dispose
                     :size [wid :by hig])
        center!
        s/show!))
    (s/listen sld 
              :state-changed (fn[e] (func [head (.getValue(.getSource e)) (System/currentTimeMillis)])))))

(defn timeline [header min max mits mats]
  (slider 
  header 
  min 
  max 
  (fn [[head val tim]] 
	(rete.core/assert-frame ['Slider 'title head 'slider-value val 'time tim])
	(rete.core/fire))
  [1000 100]
  mits
  mats))

