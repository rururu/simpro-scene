(ns winter.map
(:require
  [reagent.core :as r]
  [cognitect.transit :as t]))
(def defonceMAP (defonce MAP  (r/atom (js/L.map "MAP"))))
(defn set-html! [id html]
  (set! (.-innerHTML (.getElementById js/document id)) html))

(defn read-transit [x]
  (t/read (t/reader :json) x))

(defn add-popup [params]
  (let [{:keys [lat lon html]} params
       pos (if (and lat lon)
               #js[lat lon]
               (.getCenter MAP))]
  (.addLayer @MAP (-> (js/L.popup. #js{})
                             (.setLatLng pos)
                             (.setContent html)))))

(defn create-layer [lmp]
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

(defn map-hr [resp]
  (let [mp (read-transit resp)]
  (println :RMR mp)
  (if (and (map? mp) (not (empty? mp)))
    (let [blms (apply merge (map create-layer (mp :base)))
          olms (apply merge (map create-layer (mp :overlay)))
          flay (second (first  blms)) 
          lctl (js/L.control.layers (clj->js blms) (clj->js olms))]
       ;;   fzoom (fn [] (set-html! "zoom" (str "zoom " (.getZoom @MAP))))]
       ;;(add-heatmap {})
      (.addTo flay @MAP)
      (.setView @MAP (clj->js (mp :center)) (mp :zoom))
      (.addTo (js/L.control.mousePosition.) @MAP)
      (.addTo lctl @MAP))
      ;;(fzoom)
      ;;(.on @MAP "zoomend" fzoom))
    (add-popup {:html (str "<h1>" mp "</h1>")}))))

