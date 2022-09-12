(ns winter.client
(:require
  [reagent.core :as r]
  [reagent.dom :as rdom]
  [ajax.core :refer (GET)]
  [cognitect.transit :as t]
  [winter.map :as map]))
(def MODELS (r/atom []))
(defn read-transit [x]
  (t/read (t/reader :json) x))

(defn reqserv [service handler]
  (GET service {:handler handler
                      :error-handler (fn [resp]
                                                (let [{:keys [status status-text]} resp]
                                                  (println "AJAX ERROR:" status status-text)))}))

(defn models []
  [:div (let [mm @MODELS]
         (if (seq mm) mm ""))])

(defn left-component []
  [:div#acc-left
  [:h3 "Модели"]
    [models]
  [:h3 "Действующая модель"]
    [:div [:p
      "Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet"
  ]]
  [:h3 "Параметры целей"]
    [:div [:p
      "Nam enim risus, molestie et, porta ac, aliquam ac, risus. Quisque lobortis."
  ]]
  [:h3 "Параметры наблюдателей"]
    [:div [:p
      "Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus."
  ]]
  [:h3 "Параметры модели"]
    [:div [:p
      "Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus."
  ]]
  [:h3 "Описание модели"]
    [:div [:p
      "Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus."
  ]]
])

(defn right-component []
  [:div#acc-right
  [:h3 "Ручное управление"]
    [:div [:p
      "Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer"
  ]]
  [:h3 "Сценарное управление"]
    [:div [:p
      "Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet"
  ]]
  [:h3 "Командное управление"]
    [:div [:p
      "Nam enim risus, molestie et, porta ac, aliquam ac, risus. Quisque lobortis."
  ]]
  [:h3 "Маршруты"]
    [:div [:p
      "Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus."
  ]]
  [:h3 "Объкты"]
    [:div [:p
      "Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus."
  ]]
  [:h3 "Районы"]
    [:div [:p
      "Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus."
  ]]
])

(defn app-component []
  [:div
  [left-component]
  [right-component]])

(defn run []
  (println "Request data from server..")
(reqserv "/map" map/map-hr)
(reqserv "/models" (fn [resp] (reset! MODELS (read-transit resp))))
(println "Rendering app..")
(rdom/render [app-component] (js/document.getElementById "app")))


(enable-console-print!)
(println "println enabled..")
(run)