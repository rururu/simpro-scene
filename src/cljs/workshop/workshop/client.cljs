(ns workshop.client
)
(def VIEWER (js/Cesium.Viewer. 
  "cesiumContainer" 
  #js{:scene3DOnly true
         :selectionIndicator false
         :baseLayerPicker false}))
(def HOME-VIEW nil)
(defn add-imagery-by-asset-id [id]
  (let [ilays (.-imageryLayers VIEWER)]
  (.remove ilays (.get ilays 0))
  (.addImageryProvider ilays (js/Cesium.IonImageryProvider. #js{:assetId id}))))

(defn add-terrain []
  (set! (.-terrainProvider VIEWER) 
         (js/Cesium.createWorldTerrain. #js{:requestWaterMask true
                                                                 :requestVertexNormals true}))
(set! (.-depthTestAgainstTerrain (.-globe (.-scene VIEWER))) true))

(defn camera-control [longitude latitude height heading pitch roll]
  (let [pos (js/Cesium.Cartesian3.fromDegrees. longitude latitude height)
       orient (js/Cesium.HeadingPitchRoll.fromDegrees. heading pitch roll)
       cam (.-camera (.-scene VIEWER))
       func (fn [e]
                 (set! (.-cancel e) true)
                 (.flyTo (.-camera (.-scene VIEWER)) HOME-VIEW))]
  (def HOME-VIEW (clj->js {:destination pos
                                         :orientation {:heading (.-heading orient)
                                                              :pitch (.-pitch orient)
                                                              :roll (.-roll orient)}
                                         ;; animation options
                                         :duration 4.0
                                         :maximumHeight 2000
                                         :pitchAdjustHeight 2000
                                         :endTransform js/Cesium.Matrix4.IDENTITY}))
  (.addEventListener (.-beforeExecute (.-command (.-viewModel (.-homeButton VIEWER)))) func)
  (.flyTo cam HOME-VIEW)))

(defn clock-control [animate start stop current mult]
  (let [clk (.-clock VIEWER)]
  (set! (.-shouldAnimate clk) animate)
  (set! (.-startTime clk) (js/Cesium.JulianDate.fromIso8601 start))
  (set! (.-stopTime clk) (js/Cesium.JulianDate.fromIso8601 stop))
  (set! (.-currentTime clk) (js/Cesium.JulianDate.fromIso8601 current))
  (set! (.-multiplier clk) mult)
  (set! (.-clockStep clk) js/Cesium.ClockStep.SYSTEM_CLOCK_MULTIPLIER)
  (set! (.-clockRange clk) js/Cesium.ClockRange.LOOP_STOP)
  (.zoomTo (.-timeline VIEWER) (.-startTime clk) (.-stopTime clk))))

(defn load-kml [source ground]
  (let [scene (.-scene VIEWER)
       kmlops #js{:camera (.-camera scene)
                          :canvas (.-canvas scene)
                          :clampToGround ground}
       promise (js/Cesium.KmlDataSource.load source kmlops)]
  (.then promise (fn [ds] 
                            (.add (.-dataSources VIEWER) ds)
                            (let [vals (.-values (.-entities ds))
                                   ebbs (filter #(js/Cesium.defined (.-billboard %)) vals)]
                              (doseq [ebb ebbs]
                                (set! (.-verticalOrigin (.-billboard ebb)) js/Cesium.VerticalOrigin.BOTTOM)
                                (set! (.-label ebb) nil)
                                (set! (.-distanceDisplayCondition (.-billboard ebb)) (js/Cesium.DistanceDisplayCondition. 10.0 20000.0))
                                ;; Infobox modification
                                (let [pos (.getValue (.-position ebb) (js/Cesium.JulianDate.now))
                                       pos (js/Cesium.Cartographic.fromCartesian pos)
                                       lat (js/Cesium.Math.toDegrees (.-latitude pos))
                                       lon (js/Cesium.Math.toDegrees (.-longitude pos))
                                       desc (str "<table class=\"cesium-infoBox-defaultTable cesium-infoBox-defaultTable-lighter\"><tbody>"
                                                      "<tr><th>Longitude</th><td>" (.toFixed lon 5) "</td></tr>"
                                                      "<tr><th>Latitude</th><td>" (.toFixed lat 5) "</td></tr>"
                                                      "</tbody></table>")]
                                  (set! (.-description ebb) desc))) ) ))))

(defn load-geojson [source ground]
  (let [promise (js/Cesium.GeoJsonDataSource.load source #{:clampToGround ground})]
  (.then promise (fn [ds] 
                            (.add (.-dataSources VIEWER) ds)
                            (let [vals (.-values (.-entities ds))
                                   epls (filter #(js/Cesium.defined (.-polygon %)) vals)]
                              (doseq [epl epls]
                                (set! (.-name epl) (.-neighborhood (.-properties epl)))
                                (set! (.-material (.-polygon epl)) (js/Cesium.Color.fromRandom
                                                                                     #js{:red 0.1
                                                                                            :maximumGreen 0.5
                                                                                            :minimumBlue 0.5
                                                                                            :alpha 0.6}))
                                (set! (.-classificationType (.-polygon epl)) js/Cesium.ClassificationType.TERRAIN)
                                (let [poss (.-positions (.getValue (.-hierarchy (.-polygon epl)) (js/Cesium.JulianDate.now)))
                                        cntr (.-center (js/Cesium.BoundingSphere.fromPoints poss))
                                        cntr (js/Cesium.Ellipsoid.WGS84.scaleToGeodeticSurface cntr)]
                                  (set! (.-position epl) cntr)
                                  (set! (.-label epl) #js{:text (.-name epl)
                                                                    :showBackground true
                                                                    :scale 0.6
                                                                    :horizontalOrigin js/Cesium.HorizontalOrigin.CENTER
                                                                    :verticalOrigin js/Cesium.VerticalOrigin.BOTTOM
                                                                    :distanceDisplayCondition (js/Cesium.DistanceDisplayCondition. 10.0 8000.0)
                                                                    :disableDepthTestDistance 100.0}))) ) ))))

(defn init-client []
  ;;;; Adding Imagery

(add-imagery-by-asset-id 3954)

;;;; Adding Terrain

(add-terrain)

;;;; Camera Control

(camera-control -73.998114468289017509
                           40.674512895646692812
                           2631.082799425431
                           7.1077496389876024807
                          -31.987223091598949054
                           0.025883251314954971306)

;;;; Clock Control

(clock-control true
                      "2017-07-11T16:00:00Z"
                      "2017-07-11T16:20:00Z"
                      "2017-07-11T16:00:00Z"
                      2)

;;;; Load KML Source

(load-kml "data/sampleGeocacheLocations.kml" true)

;;;; Load GeoJSON Source

(load-geojson "data/sampleNeighborhoods.geojson" true))


(enable-console-print!)
(set! (.-onload js/window) (init-client))