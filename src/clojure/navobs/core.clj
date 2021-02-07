(ns navobs.core
(:use protege.core)
(:require
  [protege.core :as p]
  [ring.adapter.jetty :as jetty]
  [compojure.core :refer [defroutes GET POST]]
  [compojure.route :as route]
  [compojure.handler :as handler]
  [navobs.commands :as cmd]
  [navobs.handlers :as hs])
(:import 
  ru.igis.omtab.OMT
  java.awt.event.ActionListener))
(def APP nil)
(def SERVER nil)
(def ROOT (str (System/getProperty "user.dir")
       "/resources/public/"))
(def EVT-ACT-LISS (volatile! {}))
(defn defapp []
  (defroutes app-routes
  (GET "/testside" [] (slurp "resources/public/ol-sidebar/ol3.html"))
  (GET "/" [] (slurp (hs/index-page)))
  (POST "/" [& params] (hs/request params))
  (GET "/optime" [] (hs/op-time))
  (GET "/timscale" [] (hs/time-scale))
  (GET "/info/" [& params] (hs/info params))
  (GET "/events/:cli" [cli] (hs/events cli))
  (GET "/polies/:cli" [cli] (hs/polies cli))
  (GET "/esmess/:cli" [cli] (hs/esmess cli))
  (GET "/allmess" [] (hs/allmess))
  (GET "/commands/:cli" [cli & params] (hs/commands cli params))
  (GET "/cli-repl" [& params] (hs/cli-repl params))
  (route/files "/" (do (println [:ROOT-FILES ROOT]) {:root ROOT}))
  (route/resources "/")
  (route/not-found "Not Found"))

(def APP
  (handler/site app-routes)))

(defn start-server
  ([inst]
  (start-server  inst
	(p/sv inst "port")
	nil))
([hm inst]
  (let [mp (into {} hm)
         port (or (mp "port") 4444)]
    (start-server inst port nil)))
([inst port thea]
  (when (nil? APP)
    (defapp)
    (doseq[pg (OMT/getPlaygrounds)]
      (let [al (proxy [ActionListener] []
	(actionPerformed [evt] 
	  (cmd/pump-mo-event evt)))]
        (.addActionListener pg al)
        (vswap! EVT-ACT-LISS assoc pg al)))
    (when (nil? SERVER)
      (def SERVER (jetty/run-jetty APP {:port port :join? false}))
      (vreset! cmd/SERVER-INST inst)))))

(defn stop-server [hm inst]
  (when SERVER
  (.stop SERVER)
  (println :STOP-DONE)
  (def SERVER nil)
  (vreset! cmd/SERVER-INST nil)
  (println :SERVER-NIL-DONE)
  (def APP nil)
  (println :APP-NIL-DONE)
  (doseq[[pg al] @EVT-ACT-LISS]
    (.removeActionListener pg al))
  (println "Navobs Server stopped.")))

