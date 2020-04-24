(ns cesium.client
)
(def VIEWER (js/Cesium.Viewer. "cesiumContainer"))
(def CLOCK (.-clock VIEWER))
(def SCENE (.-scene VIEWER))
(def CAMERA (.-camera SCENE))
(def CANVAS (.-canvas SCENE))
(def HOME-VIEW {:latitude 60.0
  :longitude 30.1
  :height 2000
  :heading 120
  :pitch -20
  :roll 0})
(def CLOCK-SET {:animate true
  :start "2020-08-08T16:00:00Z"
  :stop "2020-08-08T16:20:00Z"
  :current "2020-08-08T16:00:00Z"
  :mult 4})
(def CZML-DS (js/Cesium.CzmlDataSource.))
(def CZML-URL "http://localhost:4448/czml")
(def CZML-DEBUG false)
(def ORBIT (volatile! 
  {:ring []
    :next 0
    :center-lpm [0 0 0]
    :radius-nm 0
    :step-sec 0}))
(defn add-imagery-by-asset-id [id viewer]
  (let [ilays (.-imageryLayers viewer)]
  (.remove ilays (.get ilays 0))
  (.addImageryProvider ilays (js/Cesium.IonImageryProvider. #js{:assetId id}))))

(defn add-terrain [options viewer]
  (set! (.-terrainProvider viewer) (js/Cesium.createWorldTerrain. options))
(set! (.-depthTestAgainstTerrain (.-globe (.-scene viewer))) true))

(defn camera-home [camera view ]
  (let [{:keys [longitude latitude height heading pitch roll]} view
       pos (js/Cesium.Cartesian3.fromDegrees. longitude latitude height)
       orient (js/Cesium.HeadingPitchRoll.fromDegrees. heading pitch roll)]
  (def HOME-VIEW (clj->js {:destination pos
                                         :orientation {:heading (.-heading orient)
                                                              :pitch (.-pitch orient)
                                                              :roll (.-roll orient)}
                                         ;; animation options
                                         :duration 4.0
                                         :maximumHeight 2000
                                         :pitchAdjustHeight 2000
                                         :endTransform js/Cesium.Matrix4.IDENTITY}))
  (.addEventListener (.-beforeExecute (.-command (.-viewModel (.-homeButton VIEWER))))
                                 (fn [e]
                                   (set! (.-cancel e) true)
                                   (.flyTo camera HOME-VIEW)))
  (.flyTo camera HOME-VIEW)))

(defn clock-settings [clock settings viewer]
  (let [{:keys [animate start stop current mult]} settings]
  (set! (.-shouldAnimate clock) animate)
  (set! (.-startTime clock) (js/Cesium.JulianDate.fromIso8601 start))
  (set! (.-stopTime clock) (js/Cesium.JulianDate.fromIso8601 stop))
  (set! (.-currentTime clock) (js/Cesium.JulianDate.fromIso8601 current))
  (set! (.-multiplier clock) mult)
  (set! (.-clockStep clock) js/Cesium.ClockStep.SYSTEM_CLOCK_MULTIPLIER)
  (set! (.-clockRange clock) js/Cesium.ClockRange.LOOP_STOP)
  (.zoomTo (.-timeline viewer) (.-startTime clock) (.-stopTime clock))))

(defn load-data [format source options viewer processor]
  (let [promise (condp = format
                       :GeoJSON (js/Cesium.GeoJsonDataSource.load source options)
                       :CZML (js/Cesium.CzmlDataSource.load source options)
                       :KML (js/Cesium.KmlDataSource.load source options))]
  (.then promise (fn [ds] 
                            (.add (.-dataSources viewer) ds)
                            (processor ds)))))

(defn start-czml-processing [czml-url viewer]
  (letfn [(cz-processor [e]
             (let [data (.-data e)]
               (if CZML-DEBUG
                 (println :data data))
               (.process CZML-DS (js/JSON.parse data))))]
  (.add (.-dataSources viewer) CZML-DS)
  (.addEventListener (js/EventSource. CZML-URL) "czml" cz-processor false)))

(defn position-js [^double lambda0 ^double phi1 ^double c ^double az]
  (let [cosphi1 (js/Math.cos phi1)
       sinphi1 (js/Math.sin phi1)
       cosaz (js/Math.cos az)
       sinaz (js/Math.sin az)
       sinc (js/Math.sin c)
       cosc (js/Math.cos c)
       phi2 (js/Math.asin (+ (* sinphi1 cosc) (* cosphi1 sinc cosaz)))
       lam2 (+ (js/Math.atan2 (* sinc sinaz) (- (* cosphi1 cosc) (* sinphi1 sinc cosaz))) lambda0)]
  [lam2 phi2]))

(defn points-ring-rad [[c-lambda c-phi] rad-rad alt N]
  (let [s (double (/ (* js/Math.PI 2) N))
       azs (range 0 (* N s) s)]
  (vec (map #(concat (position-js c-lambda c-phi rad-rad %) [alt]) azs))))

(defn look-at [camera nm]
  (let [cmp (.-position camera)
       cmp (js/Cesium.Cartographic.fromCartesian cmp)
       [lam phi alt] [(.-longitude cmp) (.-latitude cmp) (.-height cmp)]
       az (.-heading camera)
       c (* (/ nm 60 180) js/Math.PI)
       [lam2 phi2] (position-js lam phi c az)]
  (println :LA (* (/ lam2 js/Math.PI) 180) (* (/ phi2 js/Math.PI) 180))
  [lam2 phi2 alt]))

(defn add-orbit-button []
  (letfn[(fly-one [cam next]
            (.flyTo cam #js{:destination (nth (@ORBIT :ring) next)
                                       :duration (@ORBIT :step-sec)
                                       :complete #(fly-next cam (inc next))
                                       :cancel #(fly-cancel cam next)}))
          (fly-next [cam next]
            (if (< next (count (@ORBIT :ring)))
              (fly-one cam next)
              (fly-one cam 0)))
          (fly-cancel [cam next]
             (vswap! ORBIT assoc :next next))
          (make-ring []
            (let [[clam cphi alt] (@ORBIT :center-lpm)
                    radr (* (/ (@ORBIT :radius-nm) 60 180) js/Math.PI)
                    prr (points-ring-rad [clam cphi] radr alt 12)
                    ring (vec (map #(js/Cesium.Cartesian3. %1 %2 %3) prr))]
              (vswap! ORBIT assoc :ring ring)))]            
            
  (let [obut (.createElement js/document "button")]
    (set! (.-innerHTML obut) "Toggle orbit")
    (.add (.-classList obut) "cesium-button")
    (.prepend (.querySelector js/document ".cesium-viewer-toolbar") obut)
    (set! (.-onclick obut)
      (fn []
        (println :OB))))))

