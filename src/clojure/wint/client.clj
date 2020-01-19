(ns wint.client
(:require
  [ajax.core :refer (GET)]
  [cognitect.transit :as t]))
(def MAP nil)
(defn by-id [id]
  (.getElementById js/document id))

(defn read-transit [x]
  (t/read (t/reader :json) x))

(defn error-handler [resp]
  (let [{:keys [status status-text]} resp]
  (println "AJAX ERROR:" status status-text)))

(defn create-layer [lmp]
  (condp = (lmp :class)
  :tile (js/ol.layer.Tile. #js{:title (lmp :title)
                                       :source (condp = (lmp :source)
                                                     :osm (js/ol.source.OSM.)
                                                     :xyz  (js/ol.source.XYZ. #js{:url (lmp :url)})
                                                     (js/alert (str "Unknown layer source " (lmp :source))))})
   (js/alert (str "Unknown layer class " (lmp :class)))))

(defn create-view [vmp]
  (js/ol.View. #js{:center (js/ol.proj.fromLonLat (clj->js (vmp :center)))
                        :zoom (vmp :zoom)}))

(defn create-control [ctl]
  (condp = ctl
  :mouse (js/ol.control.MousePosition. #js{:coordinateFormat (js/ol.coordinate.createStringXY 4)
                                                               :projection "EPSG:4326"})
  :layer-switcher (js/ol.control.LayerSwitcher. #js{:mouseover true})
  (js/alert (str "Unknown control " ctl))))

(defn request-map-hr [resp]
  (let [mp (read-transit resp)]
  (println :RMR mp)
  (when (not (empty? mp))
    (doseq [lay (mp :layers)]
      (.addLayer MAP (create-layer lay)))
    (doseq [ctl (mp :controls)]
      (.addControl MAP (create-control ctl)))
    (.setView MAP (create-view (mp :view))))))

(defn request-map []
  (GET "/map" {:handler request-map-hr
                      :error-handler error-handler}))

(defn init []
  (def MAP (js/ol.Map. #js{:target (by-id "MAP")}))
(if (by-id "LEFT")
  (.addControl MAP (js/ol.control.Sidebar. #js{:element "LEFT" :position "left"})))
(if (by-id "RIGHT")
  (.addControl MAP (js/ol.control.Sidebar. #js{:element "RIGHT" :position "right"})))
(request-map))

