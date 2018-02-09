(ns czm.core
)

(def TERR-PROV (js/Cesium.CesiumTerrainProvider.
  #js{:url "//assets.agi.com/stk-terrain/world"
        :requestWaterMask false
        :requestVertexNormals false}))
(def VIEWER (js/Cesium.Viewer. 
  "cesiumContainer" 
  #js{:animation false}))
(def CZM-SRC (js/Cesium.CzmlDataSource.))
(def CAMERA (volatile! {:view "FORWARD"
               :pitch -10
               :roll 0}))
(def HEIGHT (volatile! 0))
(defn norm-crs [x]
  (cond
   (> x 360) (- x 360)
   (< x 0) (+ x 360)
   true x))

(defn cz-processor [e]
  (let [data (.-data e)
       data (js/JSON.parse data)]
  ;;(println [:CZML data])
  (.process CZM-SRC data)))

(defn fly-control [lat lon alt hea pit rol per]
  (let [dest (js/Cesium.Cartesian3.fromDegrees lon lat alt)]
  (.flyTo (.-camera VIEWER)
            #js{:destination dest
                  :orientation #js{:heading (js/Cesium.Math.toRadians hea)
                                           :pitch   (js/Cesium.Math.toRadians pit)
                                           :roll    (js/Cesium.Math.toRadians rol)}
                  :maximumHeight alt
                  :duration per
                  :easingFunction (fn [time] time)})))

(defn move-control [lat lon alt hea pit rol]
  ;;(println :MC lat lon alt hea pit rol)
(let [dest (js/Cesium.Cartesian3.fromDegrees lon lat alt)]
  (.setView (.-camera VIEWER)
            #js{:destination dest
                  :orientation #js{:heading (js/Cesium.Math.toRadians hea)
                                           :pitch   (js/Cesium.Math.toRadians pit)
                                           :roll    (js/Cesium.Math.toRadians rol)}})))

(defn fly-to [lat lon alt crs per]
  (let [pitch (condp = (:view @CAMERA)
                "UP" 90
                "DOWN" -90
                (:pitch @CAMERA))
        roll (:roll @CAMERA)
        head (norm-crs (condp = (:view @CAMERA)
                         "BACKWARD" (+ crs 180)
                         "RIGHT" (+ crs 90)
                         "LEFT" (- crs 90)
                         "FORWARD-RIGHT" (+ crs 45)
                         "FORWARD-LEFT" (- crs 45)
                         "BACKWARD-RIGHT" (+ crs 135)
                         "BACKWARD-LEFT" (- crs 135)
                         crs))]
    (fly-control lat lon (+ alt @HEIGHT) head pitch roll per))
(js/terraHeightRequest TERR-PROV lat lon terraHeightResponse))

(defn move-to [lat lon alt crs]
  (let [pitch (condp = (:view @CAMERA)
                "UP" 90
                "DOWN" -90
                (:pitch @CAMERA))
        roll (:roll @CAMERA)
        head (norm-crs (condp = (:view @CAMERA)
                         "BACKWARD" (+ crs 180)
                         "RIGHT" (+ crs 90)
                         "LEFT" (- crs 90)
                         "FORWARD-RIGHT" (+ crs 45)
                         "FORWARD-LEFT" (- crs 45)
                         "BACKWARD-RIGHT" (+ crs 135)
                         "BACKWARD-LEFT" (- crs 135)
                         crs))]
    (move-control lat lon alt head pitch roll)))

(defn camera [key val]
  (vswap! CAMERA assoc key val))

(defn init-3D-view [base-url terra]
  (if (= terra "yes")
  (set! (.-terrainProvider VIEWER) TERR-PROV))
(.add (.-dataSources VIEWER) CZM-SRC)
(.addEventListener (js/EventSource. (str base-url "czml/")) "czml" cz-processor false)
(println [:INIT-3D-VIEW :BASE base-url :TERRA terra]))

(defn terraHeightResponse [pos]
  (vreset! HEIGHT (.-height (first pos))))

