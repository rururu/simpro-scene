(ns cesium.server
(:require [ring.adapter.jetty :as jetty]
              [ring.util.response :as r]
              [compojure.core :refer [defroutes GET]]
              [compojure.handler :as handler]
              [compojure.route :as route]
              [clojure.core.async :refer [chan alts!! put!]]
              [czml.generator :refer :all]))
(def PORT 4442)
(def ROOT (str (System/getProperty "user.dir") "/resources/public/"))
(def PAGE "test.html")
(def SERV nil)
(def defonceEVT-CHAN (defonce EVT-CHAN (chan)))
(def DOC "{\"id\":\"document\",\"version\":\"1.0\"}")
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

(defn init-server []
  (defroutes app-routes
  (GET "/" [] (slurp (str ROOT PAGE)))
  (GET "/event" [] (event-response))
  (route/files "/" (do (println [:ROOT ROOT]) {:root ROOT}))
  (route/resources "/")
  (route/not-found "Cesium Server: Not Found!"))

(defonce APP
  (handler/site app-routes)))

(defn start-server
  ([]
  (start-server PORT))
([port]
  (if (nil? SERV)
    (init-server))
  (def SERV (jetty/run-jetty APP {:port port :join? false})))
([hm inst]
  (let [mp (into {} hm)]
    (def PORT (mp "port"))
    (def PAGE (mp "page"))
    (start-server))))

(defn stop-server
  ([]
  (when-let [serv SERV]
    (.stop serv)
    (def SERV nil)
    (println "Server stopped!")))
([hm inst]
  (stop-server)))

