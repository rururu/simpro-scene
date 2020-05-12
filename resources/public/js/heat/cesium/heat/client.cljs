(ns cesium.heat.client
(:require 
  [cesium.client :refer
    [add-terrain
     start-event-processing
     add-orbit-button
     VIEWER
     CAMERA]]))
(defn init-heat []
  (add-terrain nil VIEWER)
(start-event-processing VIEWER)
(add-orbit-button CAMERA))

(defn tst []
  (let [bnds #js{:west 147.13833844
                       :east 147.13856899
                       :south -41.43606916
                       :north -41.43582929}
       data [{"x" 147.1383442264 "y" -41.4360048372 "value" 76}
                 {"x" 147.1384363011 "y" -41.4360298848 "value" 63}
                  {"x" 147.138368102 "y" -41.4358360603 "value" 1}
                  {"x" 147.1385627739 "y" -41.4358799123 "value" 21}]
       hm (js/CesiumHeatmap.create VIEWER bnds {})
       valmin 0
       valmax 100]
  (.setWGS84Data hm valmin valmax (clj->js data))
  (println :HM data)))


(enable-console-print!)
(set! (.-onload js/window) (init-heat))
(tst)