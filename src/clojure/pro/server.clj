(ns pro.server
(:use protege.core)
(:require [ring.adapter.jetty :as jetty]
              [ring.util.response :as r]
              [compojure.core :refer [defroutes GET]]
              [compojure.handler :as handler]
              [compojure.route :as route]
              [cognitect.transit :as t]
              [cesium.core :as czs])
(:import java.io.ByteArrayOutputStream
             ru.igis.omtab.OMT
             edu.stanford.smi.protege.ui.DisplayUtilities))

(def PORT 4444)
(def ROOT (str (System/getProperty "user.dir") "/resources/public/"))
(def APP nil)
(def SERV nil)
(def ONBOARD (volatile! nil))
(def TERRA-CTL (volatile!
{:terrain 0
  :latlon [0 0]
  :interval 4000
  :intl-upd 4000}))
(defn write-transit [x]
  (let [baos (ByteArrayOutputStream.)
        w    (t/writer baos :json)
        _    (t/write w x)
        ret  (.toString baos)]
    (.reset baos)
    ret))

(defn mp-vehicle-period-camera []
  (if-let [onb @ONBOARD]
  (if-let [mo (OMT/getMapOb onb)]
    (let [spd (.getSpeed mo)]
      (.putAttribute mo "ROAD-SPEED" spd)
      {:vehicle
        {:name onb
         :coord [(.getLatitude mo) (.getLongitude mo)]
         :altitude (.getAltitude mo)
         :speed spd
         :course (.getCourse mo)}
       :period 1
       :camera (.getAttribute mo "CAMERA")}))))

(defn response-func0 [func0]
  (-> (r/response (write-transit (deref (future-call func0))))
       (r/header "Access-Control-Allow-Origin" "*")
       (r/charset "UTF-8")))

(defn view3D-in-browser []
  (let [address (str "http://localhost:" PORT)]
  (println "Location:" address)
  (when (java.awt.Desktop/isDesktopSupported)
    (.browse (java.awt.Desktop/getDesktop) (java.net.URI. address)))))

(defn receive-terrain [params]
  (let [newterr (read-string (params :terrain))
       {:keys [terrain latlon interval intl-upd]} @TERRA-CTL]
  (if (> newterr 0)
    (vswap! TERRA-CTL assoc :terrain newterr))
  (cond
    (< terrain 0) {:latlon latlon}
    (not= interval intl-upd) (do (vswap! TERRA-CTL assoc :interval intl-upd)
		{:interval interval})
    true {:status 204})))

(defn init-server []
  (defroutes app-routes
  (GET "/" [] (slurp (str ROOT "cezium.html")))
  (GET "/czml/" [] (czs/events))
  (GET "/vehicle/" [] (response-func0 mp-vehicle-period-camera))
  (GET "/terrain/" [& params] (response-func0 #(receive-terrain params)))
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

(defn go-onboard
  ([hm inst]
  (if-let [sel (DisplayUtilities/pickInstanceFromCollection nil (OMT/getNavObInstances) 0 "Select NavOb")]
    (let [lab (sv sel "label")]
      (ssv inst "onboard" lab)
      (vreset! ONBOARD lab))))
([lab]
  (when-let [inst (first (cls-instances "CeziumControl"))]
    (ssv inst "onboard" lab)
    (vreset! ONBOARD lab))))

(defn terrain-interval
  ([]
  (@TERRA-CTL :interval))
([inter]
  (vswap! TERRA-CTL assoc :intl-upd inter)))

(defn request-terrain [lat lon]
  (vswap! TERRA-CTL assoc :terrain -1))

(defn terrain []
  (@TERRA-CTL :terrain))

