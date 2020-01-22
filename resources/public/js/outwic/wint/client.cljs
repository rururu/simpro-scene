(ns wint.client
(:require
  [ajax.core :refer (GET)]
  [cognitect.transit :as t]))
(def MAP nil)
(def TO-EVENTS 2000)
(def OBS (volatile! {}))
(defn by-id [id]
  (.getElementById js/document id))

(defn read-transit [x]
  (t/read (t/reader :json) x))

(defn error-handler [resp]
  (let [{:keys [status status-text]} resp]
  (println "AJAX ERROR:" status status-text)))

(defn base-layers []
  (let [tile1 (js/L.tileLayer "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                                   #js{:maxZoom 20
                                       :attribution "Ru, OpenStreetMap &copy;"})
        tile2 (js/L.tileLayer "http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
                                   #js{:maxZoom 20
                                       :subdomains #js["mt0" "mt1" "mt2" "mt3"]
                                       :attribution "Ru, Google &copy;"})
        tile3 (js/L.tileLayer "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
                                   #js{:maxZoom 20
                                       :subdomains #js["mt0" "mt1" "mt2" "mt3"]
                                       :attribution "Ru, Google &copy;"})
        tile4 (js/L.tileLayer "http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}"
                                   #js{:maxZoom 20
                                       :subdomains #js["mt0" "mt1" "mt2" "mt3"]
                                       :attribution "Ru, Google &copy;"})
        tile5 (js/L.tileLayer "http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}"
                                   #js{:maxZoom 20
                                       :subdomains #js["mt0" "mt1" "mt2" "mt3"]
                                       :attribution "Ru, Google &copy;"})]
  {"OpenStreetMap" tile1
    "Google Satellite" tile2
    "Google Streets" tile3
    "Google Hybrid" tile4
    "Google Terrain" tile5}))

(defn create-layer [lmp]
  (condp = (lmp :type)
  :Base (base-layers)
  :GeoJSON {(lmp :title) (L.GeoJSON.AJAX. (lmp :source) (clj->js (lmp :attributes)))}
  :Tile {(lmp :title) (L.tileLayer (lmp :source) (clj->js (lmp :attributes)))}
  (js/alert (str "Unknown layer class " (lmp :type)))))

(defn add-heatmap [params]
  (if-let [tit (params :title)]
  (let [lay (js/L.heatLayer. 
                 (clj->js (params :data))
                 (clj->js (params :options)))]
    (vswap! OBS assoc tit lay)
    (.addTo lay MAP))))

(defn remove-layer [params]
  (if-let [tit (params :title)]
  (when-let [lay (@OBS tit)]
    (.remove lay)
    (vswap! OBS dissoc tit))))

(defn add-popup [params]
  (let [lat (params :lat)
       lon (params :lon)
       pos (if (and lat lon)
               #js[lat lon]
               (.getCenter MAP))]
  (.addLayer MAP (-> (js/L.popup. #js{})
                             (.setLatLng pos)
                             (.setContent (params :html))))))

(defn events-hr [resp]
  (doseq [{:keys [event] :as evt} (read-transit resp)]
  ;;(println [:EVENTS-HR evt])
  (condp = event
    :popup (add-popup evt)
    :heatmap (add-heatmap evt)
    :remove (remove-layer evt)
    (js/alert "Unknown event: " [event evt]))))

(defn request-events []
  (GET "/events" {:handler events-hr
                      :error-handler error-handler})
(js/setTimeout request-events TO-EVENTS))

(defn map-hr [resp]
  (let [mp (read-transit resp)]
  (println :RMR mp)
  (if (not (empty? mp))
    (let [lmps (apply merge (map create-layer (mp :layers)))
           flay (second (first  lmps)) 
           lctl (js/L.control.layers (clj->js lmps) nil)]
      (add-heatmap {})
      (.addTo flay MAP)
      (.setView MAP (clj->js (mp :center)) (mp :zoom))
      (.addTo (js/L.control.mousePosition.) MAP)
      (.addTo lctl MAP)))))

(defn request-map []
  (GET "/map" {:handler map-hr
                      :error-handler error-handler}))

(defn init []
  (def MAP (js/L.map "MAP"))
(.setView MAP #js[0 0] 4)
(if (by-id "LEFT")
  (.addTo (js/L.control.sidebar "LEFT" #js{:position "left"}) MAP))
(if (by-id "RIGHT")
  (.addTo (js/L.control.sidebar "RIGHT" #js{:position "right"}) MAP))
(request-map))


(enable-console-print!)
(set! (.-onload js/window) (init))
(request-events)