(ns cesium.server
(:require [ring.adapter.jetty :as jetty]
              [ring.util.response :as r]
              [compojure.core :refer [defroutes GET]]
              [compojure.handler :as handler]
              [compojure.route :as route]
              [clojure.core.async :refer [chan alts!! put!]]))
(def PORT 4442)
(def ROOT (str (System/getProperty "user.dir") "/resources/public/"))
(def PAGE "workshop.html")
(def SERV nil)
(def defonceCZ-CHAN (defonce CZ-CHAN (chan)))
(def DOC "{\"id\":\"document\",\"version\":\"1.0\"}")
(defn send-czml [czml]
  (put! CZ-CHAN czml))

(defn pump-out-czml []
  (loop [[bit ch] (alts!! [CZ-CHAN] :default :none) bits []]
  (if (= bit :none)
    bits
    (recur (alts!! [CZ-CHAN] :default :none) (conj bits bit)))))

(defn czml-events []
  (let [evt-hr (fn [dat]
                   (str "event: czml\ndata: " dat "\n\n"))
       ee (deref (future (pump-out-czml)))
       resp (if (seq ee)
                 (apply str (map evt-hr ee))
                 "")]
  (-> (r/response resp)
         (r/header "Access-Control-Allow-Origin" "*")
         (r/header "Content-Type" "text/event-stream;charset=utf-8"))))

(defn init-server []
  (defroutes app-routes
  (GET "/" [] (slurp (str ROOT PAGE)))
  (GET "/czml" [] (czml-events))
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

