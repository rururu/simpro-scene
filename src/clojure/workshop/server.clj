(ns workshop.server
(:require [ring.adapter.jetty :as jetty]
              [ring.util.response :as r]
              [compojure.core :refer [defroutes GET]]
              [compojure.handler :as handler]
              [compojure.route :as route]))
(def PORT 4442)
(def ROOT (str (System/getProperty "user.dir") "/resources/public/"))
(def PAGE "workshop.html")
(def SERV nil)
(defn init-server []
  (defroutes app-routes
  (GET "/" [] (slurp (str ROOT PAGE)))
  (route/files "/" (do (println [:ROOT-FILES ROOT]) {:root ROOT}))
  (route/resources "/")
  (route/not-found "Workshop Server: Not Found!"))

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
  (start-server)))

(defn stop-server
  ([]
  (when-let [serv SERV]
    (.stop serv)
    (def SERV nil)
    (println "Server stopped!")))
([hm inst]
  (stop-server)))

