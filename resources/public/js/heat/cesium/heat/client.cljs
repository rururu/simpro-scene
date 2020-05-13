(ns cesium.heat.client
(:require 
  [cesium.client :refer
    [add-terrain
     camera-home
     start-event-processing
     add-orbit-button
     VIEWER
     CAMERA]]))
(def MY-HOME-VIEW {:latitude 60.0
  :longitude 30.15
  :height 2000
  :heading 130
  :pitch -15
  :roll 0})
(def HEATMAP nil)
(def DATA [[30.278 59.971 5]
 [30.395 59.956 7]
 [30.252 59.917 8]
 [30.343 59.919 6]])
(def BOUNDS {:west 30.252
  :east 30.395
  :south 59.917
  :north 59.971})
(def OPTIONS {:radius 600
  :maxOpacity 0.8
  :scaleRadius false
  :blur 0.85
  :useLocalExtrema false})
(defn heatmap-init [bounds options]
  (def HEATMAP
  (js/CesiumHeatmap.create 
    VIEWER 
    (clj->js bounds) 
    (clj->js options))))

(defn heatmap-data [valmin valmax data]
  (.setWGS84Data HEATMAP
  valmin 
  valmax 
  (clj->js (for [[x y v] data] (hash-map "x" x "y" y "value" v)))))

(defn init-heat []
  (add-terrain nil VIEWER)
(camera-home CAMERA MY-HOME-VIEW)
(start-event-processing VIEWER)
(add-orbit-button CAMERA))


(enable-console-print!)
(set! (.-onload js/window) (init-heat))
(heatmap-init BOUNDS OPTIONS)
(heatmap-data 0 8 DATA)