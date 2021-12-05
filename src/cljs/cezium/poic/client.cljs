(ns poic.client
(:require 
  [cesium.client :refer
    [add-imagery-by-asset-id
     add-terrain
     camera-home
     clock-settings
     load-data
     start-event-processing
     look-at
     add-orbit-button
     mouse-move
     PORT
     VIEWER
     CLOCK
     SCENE
     CAMERA
     CANVAS
     HOME-VIEW
     CLOCK-SET
     EVENT-DEBUG]]))
(def GOMULODA {:latitude 59.97
  :longitude 30.02
  :height 800
  :heading 0
  :pitch -20
  :roll 0})
(def FIORD {:latitude (- 61.172 0.02)
  :longitude 6.0 
  :height 400
  :heading 0
  :pitch -20
  :roll 0})
(defn point-cloud []
  (let [ts1 (js/Cesium.Cesium3DTileset. #js{:url "PointCloud/tileset.json"
                                                             :maximumScreenSpaceError 0})
      ps (.-primitives SCENE)
      ts2 (.add ps ts1)]
  (.then (.-readyPromise ts2) 
    (fn[ts] (.add ps ts)
             (.flyToBoundingSphere CAMERA (.-_boundingSphere (.-boundingVolume ts)))))))

(defn add-terrain-transparent  [options viewer]
  (set! (.-terrainProvider viewer) (js/Cesium.createWorldTerrain. options))
(set! (.-depthTestAgainstTerrain (.-globe (.-scene viewer))) false))

(defn init-client []
  (add-terrain-transparent nil VIEWER)
(camera-home CAMERA FIORD)
(start-event-processing PORT VIEWER)
(add-orbit-button CAMERA)
(mouse-move)
(point-cloud))


(enable-console-print!)
(set! (.-onload js/window) (init-client))