(ns web.server
(:use
  protege.core)
(:require
  [cognitect.transit :as t]
  [ring.adapter.jetty :as jetty]
  [compojure.core :refer [defroutes GET POST]]
  [compojure.route :as route]
  [compojure.handler :as handler])
(:import 
  [java.io 
    ByteArrayOutputStream
    ByteArrayInputStream]))
(def APP nil)
(def ROOT (str (System/getProperty "user.dir")
       "/resources/public/"))
(def SERVER nil)
(defn write-transit [x]
  (let [baos (ByteArrayOutputStream.)
        w    (t/writer baos :json)
        _    (t/write w x)
        ret  (.toString baos)]
    (.reset baos)
    ret))

(defn param-row [par-inst]
  (let [name (sv par-inst "title")
       value (or (sv par-inst "default-value") (vec (svs par-inst "param-options")))]
  (str
  "            <tr><td>" name "</td><td>"
  (if (vector? value)
    (str "<select name=\"" name "\" style=\"width:120px\">\n"
      (apply str 
        (for [x value]
          (str
  "              <option value=\"" x "\">" x "</option>\n")))
  "                </select></td></tr>\n")
    (str "<input name=\"" name "\" style=\"width:120px\" type=\"text\" value=\"" value "\" /></td></tr>\n")))))

(defn params-form
  ([task]
  (params-form (sv task "id") 
                       (sv task "header") 
                       (svs task "parameters") 
                       (sv task "exec-button") 
                       (sv task "cancel-button")
                       (sv task "footer")))
([id header params exec-but cancel-but footer]
  (str
  "          <h3>" header "</h3>\n"
  "          <form method=\"post\">\n"
  "            <input name=\"task\" value=\"" id "\" type=\"hidden\"/>\n"
  "            <table>\n"
  (if (seq params)
    (apply str
      (for [p params] (param-row p))))
  "            </table><br><br>\n"
  "            <input type=\"submit\" value=\"" exec-but "\" background-color=\"#BCE;\"/>\n"
  "            <button type=\"button\" onclick=\"web.client.cancel_task()\">" cancel-but "</button>\n"
  "          </form><br>\n"
  "          <h4>" footer "</h4>\n")))

(defn sidebar
  ([side-bar]
  (sidebar (sv side-bar "side") (svs side-bar "tasks")))
([side tasks]
  (let [caret (if (= side "LEFT") 
                    "fa fa-caret-left"
                    "fa fa-caret-right")]
    (str
    "  <div id=\"" side "\" class=\"sidebar collapsed\">\n"
    "    <div class=\"sidebar-tabs\">\n"
    "      <ul role=\"tablist\">\n"
    (apply str 
      (for [tk tasks]
        (str 
    "        <li><a href=\"#" (sv tk "id") "\" role=\"tab\"><i class=\"" (sv tk "i-class") "\"></i></a></li>\n")))
    "      </ul>\n"
    "    </div>\n"
    "    <div class=\"sidebar-content\">\n"
    (apply str 
      (for [tk tasks]
        (str 
    "      <div class=\"sidebar-pane\" id=\"" (sv tk "id") "\">\n"
    "        <h1 class=\"sidebar-header\">" (sv tk "title") "<span class=\"sidebar-close\"><i class=\"" caret "\"></i></span></h1>\n"
          (params-form tk) 
    "      </div>\n\n")))
    "    </div>\n"
    "  </div>\n"))))

(defn update-start-page [hm inst]
  (if-let [cli (first (cls-instances "Client"))]
  (if-let [wc (first (cls-instances "ClsMain"))]
    (if-let [idx (first (svs wc "html"))]
      (let [src (sv idx "source")
             sbs (apply str (map sidebar (svs cli "sidebars")))
             tit (str "  <title>" (sv cli "header") "</title>\n")
             hdr (str "   <div id=\"header\" style=\"background:" (sv cli "color") ";text-align:center;\">" (sv cli "header") "</div>\n")
             src (.replace src "<SIDEBARS>" sbs)
             src (.replace src "<HEADER>" hdr)
             src (.replace src "<TITLE>" tit)
             spg (sv inst "start-page")]
          (spit spg src))))))

(defn start-page []
  (if-let [ws (first (cls-instances "WebServer"))]
  (sv ws "start-page")))

(defn request [params]
  (println [:POST params]))

(defn response-map []
  (let [resp {:view {:zoom 8 :center [60 30]}
                 :layers [{:type :osm :title "OSM"}
                             {:type :xyz :title "Lay1" :url "file:.."}
                             {:type :xyz :title "Lay2" :url "file:.."}]
                 :controls [:mouse]}]
  (write-transit resp)))

(defn defapp []
  (defroutes app-routes
  (GET "/" [] (slurp (start-page)))
  (POST "/" [& params] (request params))
  (GET "/map" [] (response-map))
  (route/files "/" (do (println [:ROOT-FILES ROOT]) {:root ROOT}))
  (route/resources "/")
  (route/not-found "Not Found"))

(def APP
  (handler/site app-routes)))

(defn start-server [hm inst]
  (when (nil? APP)
  (defapp)
  (if (nil? SERVER)
    (def SERVER (jetty/run-jetty APP {:port (read-string (sv inst "port")) :join? false})))))

(defn stop-server [hm inst]
  (when SERVER
  (.stop SERVER)
  (def SERVER nil)
  (def APP nil)
  (println "WebServer stopped.")))

