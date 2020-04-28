(ns cesium.drape
(:require 
  [cesium.client :refer
    [add-terrain
     camera-home
     start-czml-processing
     add-orbit-button
     VIEWER
     CAMERA
     HOME-VIEW
     CZML-DEBUG
     CZML-URL]]))
(defn init-drape []
  (add-terrain nil VIEWER)
(camera-home CAMERA HOME-VIEW)
(start-czml-processing CZML-URL VIEWER)
(add-orbit-button CAMERA))


(enable-console-print!)
(set! (.-onload js/window) (init-drape))