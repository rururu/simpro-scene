(ns rea.simple
(:require 
  [reagent.core :as r]
  [reagent.dom :as rdom]
  [clojure.string :as str]))
(def TIMER (defonce timer (r/atom (js/Date.))))
(def TIME-COLOR (defonce time-color (r/atom "#080")))
(def TIME-UPDATER (defonce time-updater (js/setInterval
  #(reset! timer (js/Date.)) 1000)))
(defn greeting [message]
  [:h1 message])

(defn clock []
  (let [time-str (-> @timer .toTimeString (str/split " ") first)]
    [:div.example-clock
    {:style {:color @time-color}}
    time-str]))

(defn color-input []
  [:div.color-input
 "Digits color: "
 [:input {:type "text"
             :value @time-color
             :on-change #(reset! time-color (-> % .-target .-value))}]])

(defn simple-example []
  [:div
   [greeting "Точное время"]
   [clock]
   [color-input]])

(defn run []
  (rdom/render [simple-example] (js/document.getElementById "app")))

