(ns leaflet_plain.client
(:require
  [ajax.core :refer (GET)]
  ;;[cognitect.transit :as t]
  [cljs.reader :as rdr]
  [mvo.move :as mvo]))
(def MAP (volatile! nil))
(def TO-EVENTS 2000)
(def TO-MOVE 200)
(def OBJECTS (volatile! {}))
(def MOVERS (volatile! {}))
(def DATA nil)
(def T-SCALE 1.0)
(def DEBUG true)
(defn by-id [id]
  (.getElementById js/document id))

(defn set-html! [id html]
  (set! (.-innerHTML (.getElementById js/document id)) html))

(defn error-handler [resp]
  (let [{:keys [status status-text]} resp]
  (println "AJAX ERROR:" status status-text)))

(defn reqserv [service handler]
  (GET service {:handler handler
                      :error-handler (fn [resp]
                                                (let [{:keys [status status-text]} resp]
                                                  (println "AJAX ERROR:" status status-text)))}))

(defn create-layer [lmp]
  (println :Layer lmp)
(let [tit (lmp :title)
       typ (lmp :type)
       src (lmp :source)
       arg (lmp :arguments)
       ops (or (arg :options) {})
       ops (clj->js ops)]
  (condp = typ
    :GeoJSON {tit (L.GeoJSON.AJAX. src (clj->js arg))}
    :Tile {tit (L.tileLayer src ops)}
    :TileWMS {tit  (L.tileLayer.wms src ops)}
    :ImageOverlay {tit (L.imageOverlay src (let [[[w s][e n]] (arg :imageBounds)]
                                                                     (L.latLngBounds (L.latLng w s) (L.latLng e n))))}
    :VideoOverlay {tit (L.videoOverlay src (let [[[w s][e n]] (arg :videoBounds)]
                                                                   (L.latLngBounds (L.latLng w s) (L.latLng e n))))}
    (js/alert (str "Unknown layer class " (lmp :type))))))

(defn remove-layer [params]
  (if-let [tit (params :title)]
  (do
    (when-let [lay (@OBJECTS tit)]
      (.remove lay)
      (vswap! OBJECTS dissoc tit))
    (if-let [mov (@MOVERS tit)]
      (vswap! MOVERS dissoc tit)))))

(defn remove-tow [params]
  (let [{:keys [title tug]} params]
  (if-let [mov (@MOVERS tug)]
    (if-let [obj (@OBJECTS title)]
      (vswap! mov assoc :tows
        (dissoc (@mov :tows) obj))))))

(defn add-tow [params]
  (let [{:keys [title tug bear dist]} params]
  (if-let [mov (@MOVERS tug)]
    (if-let [obj (@OBJECTS title)]
      (do
        (vswap! mov assoc-in [:tows obj]
          [(* (/ dist 60) mvo/PID180) (* bear mvo/PID180)])
        (if-let [mov (@MOVERS title)]
          (vswap! MOVERS dissoc title)))
      (js/alert "Object " title " on tow of " tug " is missing!"))
    (js/alert "Tug "" for object "" on tow  is missing!"))))

(defn add-path [params]
  (let [{:keys [title type coord options]} params]
  (when title
    (if (@OBJECTS title)
      (remove-layer params))
    (let [ops (clj->js options)
           crd (clj->js coord)
           lay (condp = type
                   :polyline (js/L.polyline. crd ops)
                   :polygon (js/L.polygon. crd ops)
                   :rectangle (js/L.rectangle. crd ops)
                   :circle (js/L.circle. crd ops)
                   :circle-marker (js/L.circleMarker. crd ops)
                   nil)]
         (when lay
           (vswap! OBJECTS assoc title lay)
           (.addTo lay @MAP))))))

(defn add-marker [params]
  (let [{:keys [title coord course speed url icon-size draggable]} params]
  (when title
    (if (@OBJECTS title)
      (remove-layer params))
    (let [[lat lon] coord
           pos (js/L.LatLng. lat lon)
           ico (js/L.icon #js{:iconUrl url :iconSize (or (clj->js icon-size) #js[32, 32])})
           ops #js{:title title
                         :icon ico 
                         :rotationAngle course
                         :rotationOrigin "center center"
                         :draggable (or (clj->js draggable) true)}
            mrk (js/L.marker. pos ops)]
       (vswap! OBJECTS assoc title mrk)
       (if speed
         (vswap! MOVERS assoc title
           (mvo/create-mover [lat lon] course speed mrk)))
       (.addTo mrk @MAP)
       mrk))))

(defn add-popup [params]
  (let [{:keys [lat lon html]} params
       pos (if (and lat lon)
               #js[lat lon]
               (.getCenter @MAP))]
  (.addLayer @MAP (-> (js/L.popup. #js{})
                             (.setLatLng pos)
                             (.setContent html)))))

(defn set-time-scale [params]
  (def T-SCALE (params :time-scale))
(mvo/set-timeout-hrs TO-MOVE T-SCALE))

(defn move-control [params]
  (let [{:keys [title coord course speed]} params]
  (when-let [mv (@MOVERS title)]
    (if coord
      (mvo/set-coord mv coord))
    (if course
      (mvo/set-course mv course))
    (if speed
      (mvo/set-speed mv speed)))))

(defn set-time-run [params]
  (mvo/set-time-run (params :time-run)))

(defn set-debug [params]
  (def DEBUG (params :debug)))

(defn events-hr [resp]
  (doseq [{:keys [event] :as evt} (rdr/read-string resp)]
  (if DEBUG (println [:EVENTS-HR evt]))
  (condp = event
    :path (add-path evt)
    :marker (add-marker evt)
    :popup (add-popup evt)
    :remove (remove-layer evt)
    :time-scale (set-time-scale evt)
    :time-run (set-time-run evt)
    :move (move-control evt)
    :tow (add-tow evt)
    :endtow (remove-tow evt)
    :debug (set-debug evt)
    (js/alert "Unknown event: " [event evt]))))

(defn request-events []
  (GET "/events" {:handler events-hr
                      :error-handler error-handler})
(js/setTimeout request-events TO-EVENTS))

(defn zoom-display []
  (let [zoom (.getZoom @MAP)]
  (println :ZOOM zoom)
  (set-html! "zoom" (str "zoom " zoom))))

(defn map-hr [resp]
  (let [mp (rdr/read-string resp)]
  (println :Map)
  (if (and (map? mp) (not (empty? mp)))
    (let [blms (apply merge (map create-layer (mp :base)))
          olms (apply merge (map create-layer (mp :overlay)))
          flay (second (first  blms)) 
          lctl (js/L.control.layers (clj->js blms) (clj->js olms))]
      (.addTo flay @MAP)
      (.setView @MAP (clj->js (mp :center)) (mp :zoom))
      (.addTo (js/L.control.mousePosition.) @MAP)
      (.addTo lctl @MAP)
      (zoom-display)
      (.on @MAP "zoomend" zoom-display))
    (add-popup {:html (str "<h1>" mp "</h1>")}))))

(defn request-map []
  (GET "/map" {:handler map-hr
                      :error-handler error-handler}))

(defn init []
  (vreset! MAP (js/L.map "map"))
(request-map)
(println "MAP defined.."))

(defn move-markers []
  (doseq [[n m] @MOVERS]
  (mvo/move m))
(js/setTimeout move-markers TO-MOVE))


(enable-console-print!)
(set! (.-onload js/window) (init))
(request-events)
(mvo/set-timeout-hrs TO-MOVE T-SCALE)
(move-markers)
(println "Epilogue done..")