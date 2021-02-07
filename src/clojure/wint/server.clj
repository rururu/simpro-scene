(ns wint.server
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
     :NAMESPACE nil
     :CHAN (asp/mk-chan)
     :BUSY nil})))
(defn write-transit [x]
  (let [baos (ByteArrayOutputStream.)
        w    (t/writer baos :json)
        _    (t/write w x)
        ret  (.toString baos)]
    (.reset baos)
    ret))

(defn param-row [par-inst]
  (let [name (sv par-inst "title")
       wid (or (sv par-inst "width") 120)
       size (if-let [s (sv par-inst "size")] (str "size=\"" s "\""))
       mult (if (is? (sv par-inst "multiple")) "multiple=\"true\"")
       value (or (sv par-inst "widefault-value") (vec (svs par-inst "wiparam-options")))]
  (str
  "            <tr><td>" name "</td><td>"
  (if (vector? value)
    (str "<select name=\"" name "\" style=\"width:" wid "px\"" mult " " size ">\n"
      (apply str 
        (for [x value]
          (str
  "              <option value=\"" x "\">" x "</option>\n")))
  "                </select></td></tr>\n")
    (str "<input name=\"" name "\" style=\"width:" wid "px\" type=\"text\" value=\"" value "\" /></td></tr>\n")))))

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

(defn to-vec-param [p]
  (if (vector? p) p [p]))

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
  (if-let [cli (fainst (cls-instances "WiClient") nil)]
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
  (ClojureTab/invoke (@SYS :NAMESPACE) "exec-task" params)
  {:status 204}
  (catch Exception e
    (println :ERROR e)
    (str "Task execution error for parameters:" params))))

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
  (let [resp (if-let [mapi (fainst (cls-instances "WiMap") nil)]
                   {:zoom (sv mapi "wizoom") 
                     :center (read-string (sv mapi "wicenter"))
                     :base (map-layers mapi "wibase")
                     :overlay (map-layers mapi "wioverlay")}
                   {})]
    ;;(vswap! SYS assoc :BUSY true)
    (write-transit resp))))

(defn defapp []
  (defroutes app-routes
  (GET "/" [] (slurp (start-page)))
  (POST "/" [& params] (request params))
  (GET "/map" [] (response-map))
  (GET "/events" [] (response-events))
  (route/files "/" (do (println [:ROOT (@SYS :ROOT)]) {:root (@SYS :ROOT)}))
  (route/resources "/")
  (route/not-found "Not Found"))

(vswap! SYS assoc :APP
  (handler/site app-routes)))

(defn start-server [hm inst]
  (let [mp (into {} hm)
       nsi (mp "cloNamespace")
       port (mp "wiport")]
  (if (nil? (@SYS :NAMESPACE))
    (vswap! SYS assoc :NAMESPACE (sv nsi "title")))
  (when (nil? (@SYS :APP))
    (defapp)
    (when (nil? (@SYS :SERVER))
      (vswap! SYS assoc :SERVER 
        (jetty/run-jetty (@SYS :APP) {:port (read-string port) :join? false}))
      (vswap! SYS assoc :BUSY nil)))))

(defn stop-server [hm inst]
  (when (@SYS :SERVER)
  (.stop (@SYS :SERVER))
  (vswap! SYS assoc :SERVER nil)
  (vswap! SYS assoc :APP nil)
  (println "WebServer stopped.")))

(defn par-ops-gen [hm inst]
  (let [mp (into {} hm)
       ops (vec (map #(sv % (mp "wislot")) (mp "wilist")))
       pins (crin "WiOptionParameter")]
  (ssvs inst "wiparam-options" ops)
  (ssvs pins "wiparam-options" ops)
  (ssv pins "title" (mp "title"))
  (ssv pins "width" (mp "width"))
  (ssv pins "size" (mp "size"))
  (ssv pins "multiple" (mp "multiple"))))

(defn start-client
  ([port]
  (if-let [serv (@SYS :SERVER)]
    (invoke-later (.browse (Desktop/getDesktop) (URI/create (str "http://0.0.0.0:" port))))))
([hm inst]
  (if-let [port (sv inst "wiport")]
    (start-client (read-string port)))))

