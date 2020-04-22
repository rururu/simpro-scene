(ns cesium.testclient
(:require 
  [cesium.client :refer
    [add-imagery-by-asset-id
     add-terrain
     camera-home
     clock-settings
     load-data
     start-czml-processing
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
(def tHOME-VIEW {:longitude -73.998114468289017509
  :latitude 40.674512895646692812
  :height 2631.082799425431
  :heading 7.1077496389876024807
  :pitch -31.987223091598949054
  :roll 0.025883251314954971306})
(defn init-client []
  (camera-home CAMERA HOME-VIEW)
(start-czml-processing CZML-URL VIEWER))


(enable-console-print!)
(set! (.-onload js/window) (init-client))