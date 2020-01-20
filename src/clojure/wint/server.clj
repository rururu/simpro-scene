(ns wint.server
(:use
  protege.core
  [clojure.core.async :as async :refer [chan alts!! put!]])
(:require
  [cognitect.transit :as t]
  [ring.adapter.jetty :as jetty]
  [compojure.core :refer [defroutes GET POST]]
  [compojure.route :as route]
  [compojure.handler :as handler])
(:import 
  [java.io 
    ByteArrayOutputStream
    ByteArrayInputStream]
  clojuretab.ClojureTab))
(def APP nil)
(def ROOT (str (System/getProperty "user.dir")
       "/resources/public/"))
(def SERVER nil)
(def NAMESPACE nil)
(def defonceCHAN (defonce CHAN (chan)))
(defn write-transit [x]
  (let [baos (ByteArrayOutputStream.)
        w    (t/writer baos :json)
        _    (t/write w x)
        ret  (.toString baos)]
    (.reset baos)
    ret))

(defn param-row [par-inst]
  (let [name (sv par-inst "title")
       value (or (sv par-inst "widefault-value") (vec (svs par-inst "wiparam-options")))]
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
  (params-form (sv task "wiid") 
                       (sv task "wiheader") 
                       (svs task "wiparameters") 
                       (sv task "wiexec-button") 
                       (sv task "wifooter")))
([id header params exec-but footer]
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
  "          </form><br>\n"
  "          <h4>" footer "</h4>\n")))

(defn sidebar
  ([side-bar]
  (sidebar (sv side-bar "wiside") (svs side-bar "witasks")))
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
    "        <li><a href=\"#" (sv tk "wiid") "\" role=\"tab\"><i class=\"" (sv tk "wii-class") "\"></i></a></li>\n")))
    "      </ul>\n"
    "    </div>\n"
    "    <div class=\"sidebar-content\">\n"
    (apply str 
      (for [tk tasks]
        (str 
    "      <div class=\"sidebar-pane\" id=\"" (sv tk "wiid") "\">\n"
    "        <h1 class=\"sidebar-header\">" (sv tk "title") "<span class=\"sidebar-close\"><i class=\"" caret "\"></i></span></h1>\n"
          (params-form tk) 
    "      </div>\n\n")))
    "    </div>\n"
    "  </div>\n"))))

(defn update-start-page [hm inst]
  (if-let [cli (first (cls-instances "WiClient"))]
  (if-let [wc (first (cls-instances "ClsMain"))]
    (if-let [idx (first (svs wc "html"))]
      (let [src (sv idx "source")
             sbs (apply str (map sidebar (svs cli "wisidebars")))
             tit (str "  <title>" (sv cli "wiheader") "</title>\n")
             hdr (str "   <div id=\"header\" style=\"background:" (sv cli "wicolor") ";text-align:center;\">" (sv cli "wiheader") "</div>\n")
             src (.replace src "<SIDEBARS>" sbs)
             src (.replace src "<HEADER>" hdr)
             src (.replace src "<TITLE>" tit)
             spg (sv inst "wistart-page")]
          (spit spg src))))))

(defn start-page []
  (if-let [ws (first (cls-instances "WiServer"))]
  (sv ws "wistart-page")))

(defn request [params]
  (println [:POST params])
(try
  (ClojureTab/invoke NAMESPACE "exec-task" params)
  {:status 204}
  (catch Exception e
    (println :ERROR e)
    (str "Task execution error for parameters:" params))))

(defn map-layers [mapi]
  (letfn [(laymap [x]
             {:type (if-let [t (sv x "wilayer-type")] (keyword t))
               :title (sv x "title")
               :source (sv x "wisource")
               :attributes (if-let [a (sv x "wiattributes")] (read-string a))})]
  (vec (map laymap (svs mapi "wilayers")))))

(defn pump-in [result]
  (put! CHAN result))

(defn pump-out [chn]
  (loop [[bit ch] (alts!! [chn] :default :none) bits []]
    (if (= bit :none)
      bits
      (recur (alts!! [chn] :default :none) (conj bits bit)))))

(defn map-controls [mapi]
  (vec (map keyword (svs mapi "wicontrols"))))

(defn response-events []
  (let [evt (deref (future (pump-out CHAN)))]
  ;; (println :EVT evt)
  (write-transit evt)))

(defn response-map []
  (let [resp (if-let [mapi (first (cls-instances "WiMap"))]
                 {:zoom (sv mapi "wizoom") 
                   :center (read-string (sv mapi "wicenter"))
                   :layers (map-layers mapi)}
                 {})]
  (write-transit resp)))

(defn defapp []
  (defroutes app-routes
  (GET "/" [] (slurp (start-page)))
  (POST "/" [& params] (request params))
  (GET "/map" [] (response-map))
  (GET "/events" [] (response-events))
  (route/files "/" (do (println [:ROOT-FILES ROOT]) {:root ROOT}))
  (route/resources "/")
  (route/not-found "Not Found"))

(def APP
  (handler/site app-routes)))

(defn start-server [hm inst]
  (let [mp (into {} hm)
       nsi (mp "cloNamespace")
       port (mp "wiport")]
  (if (nil? NAMESPACE)
    (def NAMESPACE (sv nsi "title")))
  (when (nil? APP)
    (defapp)
    (if (nil? SERVER)
      (def SERVER (jetty/run-jetty APP {:port (read-string port) :join? false}))))))

(defn stop-server [hm inst]
  (when SERVER
  (.stop SERVER)
  (def SERVER nil)
  (def APP nil)
  (println "WebServer stopped.")))

