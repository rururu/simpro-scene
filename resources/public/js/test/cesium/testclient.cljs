(ns cesium.testclient
(:require 
  [cesium.client :refer
    [add-imagery-by-asset-id
     add-terrain
     camera-home
     clock-settings
     load-data
     start-czml-processing
     look-at
     add-orbit-button
     VIEWER
     CLOCK
     SCENE
     CAMERA
     CANVAS
     HOME-VIEW
     CLOCK-SET
     CZML-DS
     CZML-URL
     CZML-DEBUG]]))
(defn init-client []
  (camera-home CAMERA HOME-VIEW)
(start-czml-processing CZML-URL VIEWER)
(add-orbit-button))


(enable-console-print!)
(set! (.-onload js/window) (init-client))