(ns cesium.server
(:use protege.core)
(:require [ring.adapter.jetty :as jetty]
              [ring.util.response :as r]
              [compojure.core :refer [defroutes GET]]
              [compojure.handler :as handler]
              [compojure.route :as route]
              [clojure.core.async :refer [chan alts!! put!]]
              [czml.generator :refer :all])
(:import java.awt.Desktop
             java.net.URI))
(def PORT 8448)
(def ROOT (str (System/getProperty "user.dir") "/resources/public/"))
(def SERV nil)
(def defonceEVT-CHAN (defonce EVT-CHAN (chan)))
(def DOC "{\"id\":\"document\",\"version\":\"1.0\"}")
(defn clj->js-str [obj]
  (cond
  (nil? obj)
  "null"
  (string? obj)
  (str "\"" obj "\"")
  (or (number? obj) (symbol? obj) (= obj true) (= obj false))
  (str obj)
  (map? obj)
  (apply str (concat ["{"] (interpose "," (for [[k v] obj] (str (name k) ":" (clj->js-str v)))) ["}"]))
  (or (vector? obj) (list? obj))
  (apply str (concat ["["] (interpose "," (map clj->js-str obj)) ["]"]))
  true
  ""))

(defn clj-funcall->js-str [fcl]
  (let [[func & args] fcl
        func (.replace (str func) "/" ".")
        func (.replace func "-" "_")
        args (map clj->js-str args)
        args (interpose "," args)]
  (apply str (concat [func "("] args [")"]))))

(defn send-czml [czml]
  (let [czml (.replaceAll czml "\\n" "")
       evt (str "event: czml\ndata: " czml "\n\n")]
  (put! EVT-CHAN evt)))

(defn send-kml [kml]
  (let [kml (.replaceAll kml "\\n" "")
       evt (str "event: kml\ndata: " kml "\n\n")]
  (put! EVT-CHAN evt)))

(defn send-js [js]
  (let [js (.replaceAll js "\\n" "")
       evt (str "event: js\ndata: " js "\n\n")]
  (put! EVT-CHAN evt)))

(defn send-clj-funcall [fcl]
  (let [js (clj-funcall->js-str fcl)
       evt (str "event: js\ndata: " js "\n\n")]
  (put! EVT-CHAN evt)))

(defn send-clock [cs]
  (send-clj-funcall 
  `(cesium.client/clock-settings 
     ~'cesium.client.CLOCK 
     ~(cs :animate)
     ~(cs :start)
     ~(cs :stop)
     ~(cs :current)
     ~(cs :mult)
     ~(cs :step)
     ~(cs :range)
     ~'cesium.client.VIEWER)))

(defn send-camera [longitude latitude height heading pitch roll]
  (send-clj-funcall 
  `(cesium.client/camera-fly 
     ~'cesium.client.CAMERA
     ~longitude 
     ~latitude
     ~height
     ~heading
     ~pitch
     ~roll)))

(defn pump-out-events []
  (loop [[bit ch] (alts!! [EVT-CHAN] :default :none) bits []]
  (if (= bit :none)
    bits
    (recur (alts!! [EVT-CHAN] :default :none) (conj bits bit)))))

(defn event-response []
  (let [ee (deref (future (pump-out-events)))
       resp (if (seq ee)
                 (apply str ee)
                 "")]
  (-> (r/response resp)
         (r/header "Access-Control-Allow-Origin" "*")
         (r/header "Content-Type" "text/event-stream;charset=utf-8"))))

(defn find-page []
  (if-let [clm (fainst (cls-instances "ClsMain") nil)]
  (if-let [htm (first (svs clm "html"))]
    (str (sv htm "store-in") "/" (sv htm "title") ".html")
    (do (println :PAGE-NOT-FOUND) nil))
  (do (println :ClsMain-NOT-FOUND) nil)))

(defn init-server []
  (defroutes app-routes
  (GET "/" [] (slurp (find-page)))
  (GET "/event" [] (event-response))
  (route/files "/" (do (println [:ROOT ROOT]) {:root ROOT}))
  (route/resources "/")
  (route/not-found "Cesium Server: Not Found!"))

(defonce APP
  (handler/site app-routes)))

(defn start-server
  ([]
  (if (nil? SERV)
    (init-server))
  (def SERV (jetty/run-jetty APP {:port PORT :join? false})))
([hm inst]
  (start-server)))

(defn stop-server
  ([]
  (when-let [serv SERV]
    (.stop serv)
    (def SERV nil)
    (println "Server stopped!")))
([hm inst]
  (stop-server)))

(defn start-client
  ([]
  (if-let [serv SERV]
    (invoke-later (.browse (Desktop/getDesktop) (URI/create (str "http://localhost:" PORT))))))
([hm inst]
  (start-client)))

(defn restart-clock [start-mil scl]
  (let [start (iso8601abs start-mil)
       stop (iso8601abs (+ start-mil 3600000))
       mult (int scl)
       cs {:animate true
              :start start
              :stop stop
              :current start
              :mult mult
              :step "SYSTEM_CLOCK_MULTIPLIER"
              :range "UNBOUNDED"}]
  (send-clock cs)))

