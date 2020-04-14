(ns workshop.client
)
(def VIEWER (js/Cesium.Viewer. 
  "cesiumContainer" 
  #js{:scene3DOnly true
         :selectionIndicator false
         :baseLayerPicker false}))
(def HOME-VIEW nil)
(defn add-terrain []
  (set! (.-terrainProvider VIEWER) 
         (js/Cesium.createWorldTerrain. #js{:requestWaterMask true
                                                                 :requestVertexNormals true}))
(set! (.-depthTestAgainstTerrain (.-globe (.-scene VIEWER))) true))

(defn add-imagery-by-asset-id [id]
  (let [ilays (.-imageryLayers VIEWER)]
  (.remove ilays (.get ilays 0))
  (.addImageryProvider ilays (js/Cesium.IonImageryProvider. #js{:assetId id}))))

(defn camera-control [longitude latitude height heading pitch roll]
  (letfn [(home-func [e]
            (set! (.-cancel e) true)
            (.flyTo (.-camera (.-scene VIEWER)) HOME-VIEW))]
(let [pos (js/Cesium.Cartesian3.fromDegrees. longitude latitude height)
       orient (js/Cesium.HeadingPitchRoll.fromDegrees. heading pitch roll)
       cam (.-camera (.-scene VIEWER))]

  (def HOME-VIEW (clj->js {:destination pos
                            :orientation {:heading (.-heading orient)
                                                 :pitch (.-pitch orient)
                                                 :roll (.-roll orient)}
                            ;; animation options
                            :duration 4.0
                            :maximumHeight 2000
                            :pitchAdjustHeight 2000
                            :endTransform js/Cesium.Matrix4.IDENTITY}))
  (.addEventListener (.-beforeExecute (.-command (.-viewModel (.-homeButton VIEWER)))) home-func)
  (.flyTo cam HOME-VIEW))))

(defn init-client []
  ;; Adding Imagery

(add-imagery-by-asset-id 3954)

;; Adding Terrain

(add-terrain)

;; Camera Control

(camera-control -73.998114468289017509
                           40.674512895646692812
                           2631.082799425431
                           7.1077496389876024807
                          -31.987223091598949054
                           0.025883251314954971306))

