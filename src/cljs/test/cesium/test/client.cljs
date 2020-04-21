(ns cesium.test.client
(:require 
  [cesium.base.client :refer
    [add-imagery-by-asset-id
     add-terrain
     camera-home
     clock-settings
     load-data
     VIEWER
     CLOCK
     SCENE
     CAMERA
     CANVAS
     HOME-VIEW
     CLOCK-SET]]))
(def tHOME-VIEW {:longitude -73.998114468289017509
  :latitude 40.674512895646692812
  :height 2631.082799425431
  :heading 7.1077496389876024807
  :pitch -31.987223091598949054
  :roll 0.025883251314954971306})
(defn init-client []
  ;;(add-imagery-by-asset-id 3954 VIEWER)
(add-terrain #js{:requestVertexNormals true} VIEWER)
(camera-home CAMERA tHOME-VIEW)
(clock-settings CLOCK CLOCK-SET VIEWER)
(load-data :GeoJSON "data/sampleNeighborhoods.geojson" #js{:clampToGround true} VIEWER #(println :D %))
(load-data :KML "data/sampleGeocacheLocations.kml" #js{
                          :camera CAMERA
                          :canvas CANVAS
                          :clampToGround true} VIEWER #(println :D %))
(load-data :CZML "data/sampleFlight.czml" nil VIEWER #(println :D %)))


(enable-console-print!)
(set! (.-onload js/window) (init-client))