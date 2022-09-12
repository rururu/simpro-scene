(ns winter.client
(:require
  [reagent.core :as r]
  [reagent.dom :as rdom]
  [ajax.core :refer (GET)]
  [cognitect.transit :as t]
  [winter.map :as map]))
(defn request [service handler]
  (GET service {:handler handler
                      :error-handler (fn [resp]
                                                (let [{:keys [status status-text]} resp]
                                                  (println "AJAX ERROR:" status status-text)))}))

(defn zoom-component []
  (fn []
  [:div#zoom (.getZoom @map/MAP)]))

(defn app-component []
  ;;(request "/map" map/map-hr)
[:div
  [zoom-component]])

(defn run []
  (rdom/render [app-component] (js/document.getElementById "app"))
(println "Rendered app.."))

