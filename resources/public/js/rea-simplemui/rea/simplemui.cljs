(ns rea.simplemui
(:require-macros
  [reagent-mui.util :refer [react-component]])
(:require 
  [reagent.core :as r]
  [reagent.dom :as rdom]
  [reagent-mui.material.css-baseline :refer [css-baseline]]
  [reagent-mui.colors :as colors]
  [reagent-mui.styles :as styles]
  [reagent-mui.material.text-field :refer [text-field]]))
(def CUSTOM-TEME {:palette {:primary   colors/purple
               :secondary colors/green}})
(def CLASSES (let [prefix "rmui-example"]
  {:root (str prefix "-root")
    :text-field (str prefix "-text-field")}))
(def TEXT-STATE (defonce text-state (r/atom "foobar")))
(defn greeting [message]
  [:h1 message])

(defn event-value [e]
  (.. e -target -value))

(defn main []
  [:div
   [greeting "Точное время"]
   [text-field
    {:value @text-state
     :label "Text input"
     :placeholder "Placeholder"
     :helper-text "Helper text"
     :class (:text-field CLASSES)
     :on-change (fn [e] (reset! text-state (event-value e)))}]])

(defn run []
  (rdom/render [main] (js/document.getElementById "app")))

