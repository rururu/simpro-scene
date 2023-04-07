(ns leaflet.server
(:use
  protege.core)
(:require
  [cognitect.transit :as t]
  [ring.adapter.jetty :as jetty]
  [compojure.core :refer [defroutes GET POST]]
  [compojure.route :as route]
  [compojure.handler :as handler]
  [async.proc :as asp])
(:import 
  [java.io 
    ByteArrayOutputStream
    ByteArrayInputStream]
  clojuretab.ClojureTab
  java.awt.Desktop
  java.net.URI))
(def defonceSYS (defonce SYS 
  (volatile! 
   {:SERVER nil
     :APP nil
     :ROOT (str (System/getProperty "user.dir") "/resources/public/")
     :CHAN (asp/mk-chan)
     :BUSY nil})))
(defn write-transit [x]
  (let [baos (ByteArrayOutputStream.)
        w    (t/writer baos :json)
        _    (t/write w x)
        ret  (.toString baos)]
    (.reset baos)
    ret))

(defn start-page []
  (or (@SYS :PAGE) (println "Start page not defined!")))

(defn map-layers [mapi group]
  (letfn [(laymap [x]
             (println "Layer " (sv x "title"))
             {:type (if-let [t (sv x "wilayer-type")] (keyword t))
               :title (sv x "title")
               :source (sv x "wisource")
               :arguments (if-let [a (sv x "wiarguments")] 
                                  (read-string a))})]
  (if-let [lays (seq (svs mapi group))]
    (vec (map laymap lays)))))

(defn map-controls [mapi]
  (vec (map keyword (svs mapi "wicontrols"))))

(defn response-events []
  (let [evt (deref (future (asp/pump-out (@SYS :CHAN))))]
  ;; (println :EVT evt)
  (write-transit evt)))

(defn response-map []
  (if (@SYS :BUSY) 
  (write-transit "BUSY")
  (let [resp (if-let [mapi (fainst (cls-instances "Map") nil)]
                  (read-string (sv mapi "source"))
                  {})]
    ;;(vswap! SYS assoc :BUSY true)
    (write-transit resp))))

(defn defapp []
  (defroutes app-routes
  (GET "/" [] (slurp (start-page)))
  (GET "/map" [] (response-map))
  (GET "/events" [] (response-events))
  (route/files "/" (do (println [:ROOT (@SYS :ROOT)]) {:root (@SYS :ROOT)}))
  (route/resources "/")
  (route/not-found "Not Found"))

(vswap! SYS assoc :APP
  (handler/site app-routes)))

(defn start-server [hm inst]
  (let [mp (into {} hm)
       port (mp "jlport")]
  (when (nil? (@SYS :APP))
    (defapp)
    (when (nil? (@SYS :SERVER))
      (vswap! SYS assoc :SERVER 
        (jetty/run-jetty (@SYS :APP) {:port (read-string port) :join? false}))
      (vswap! SYS assoc :PAGE (sv inst "jlstart-page"))
      (vswap! SYS assoc :BUSY nil)))))

(defn stop-server [hm inst]
  (when (@SYS :SERVER)
  (.stop (@SYS :SERVER))
  (vswap! SYS assoc :SERVER nil)
  (vswap! SYS assoc :APP nil)
  (println "WebServer stopped.")))

(defn start-client
  ([port]
  (if-let [serv (@SYS :SERVER)]
    (invoke-later (.browse (Desktop/getDesktop) (URI/create (str "http://0.0.0.0:" port))))))
([hm inst]
  (if-let [port (sv inst "jlport")]
    (start-client (read-string port)))))

