(ns pro.server
(:require [ring.adapter.jetty :as jetty]
              [ring.util.response :as r]
              [compojure.core :refer [defroutes GET]]
              [compojure.handler :as handler]
              [compojure.route :as route]
              [cognitect.transit :as t]
              [cesium.core :as czs])

(:import java.io.ByteArrayOutputStream
             ru.igis.omtab.OMT))

(def PORT 4444)
(def ROOT (str (System/getProperty "user.dir") "/resources/public/"))
(def APP nil)
(def SERV nil)
(def ONBOARD (volatile! nil))
(defn write-transit [x]
  (let [baos (ByteArrayOutputStream.)
        w    (t/writer baos :json)
        _    (t/write w x)
        ret  (.toString baos)]
    (.reset baos)
    ret))

(defn response1 [funoarg]
  (-> (r/response (write-transit (deref (future-call funoarg))))
       (r/header "Access-Control-Allow-Origin" "*")
       (r/charset "UTF-8")))

(defn view3D-in-browser []
  (let [address (str "http://localhost:" PORT)]
  (println "Location:" address)
  (when (java.awt.Desktop/isDesktopSupported)
    (.browse (java.awt.Desktop/getDesktop) (java.net.URI. address)))))

(defn vehicle-data []
  (if-let [onb @ONBOARD]
  (if-let [mo (OMT/getMapOb onb)]
    {:vehicle
      {:name onb
       :coord [(.getLatitude mo) (.getLongitude mo)]
       :altitude (.getAltitude mo)
       :speed (or (.getAttribute mo "ROAD-SPEED") (.getSpeed mo))
       :course (.getCourse mo)}
     :period 1})))

(defn init-server []
  (defroutes app-routes
  (GET "/" [] (slurp (str ROOT "cezium.html")))
  (GET "/czml/" [] (czs/events))
  (GET "/vehicle/" [] (response1 vehicle-data))
  (route/files "/" (do (println [:ROOT-FILES ROOT]) {:root ROOT}))
  (route/resources "/")
  (route/not-found "Pro Server: Not Found!"))

(def APP
  (handler/site app-routes)))

(defn start-server
  ([]
    (start-server PORT))
([port]
  (if (nil? APP)
    (init-server))
  (def SERV (jetty/run-jetty APP {:port port :join? false}))))

(defn stop-server []
  (when-let [serv SERV]
  (.stop serv)
  (def SERV nil)
  (println "Server stopped!")))

