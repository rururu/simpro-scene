(ns navobs.handlers
(:use protege.core)
(:require
  [cognitect.transit :as t]
  [hiccup.core :refer [html]]
  [navobs.commands :as cmd]
  [clojure.core.async :as async :refer [chan alts!! put!]])
(:import 
  [java.io 
    ByteArrayOutputStream
    ByteArrayInputStream]
  ru.igis.omtab.Clock
  clojuretab.ClojureTab))
(def defonceCLI-REPL-CHAN (defonce CLI-REPL-CHAN (chan)))
(def CLI-REPL nil)
(defn write-transit [x]
  (let [baos (ByteArrayOutputStream.)
        w    (t/writer baos :json)
        _    (t/write w x)
        ret  (.toString baos)]
    (.reset baos)
    ret))

(defn read-transit [x]
  (let [bais (ByteArrayInputStream. (.getBytes x "UTF-8"))
        r    (t/reader bais :json)]
    (.reset bais)
    (t/read r)))

(defn index-page []
  (if-let [wsi @cmd/SERVER-INST]
  (let [url (sv wsi "url")]
    (if (.startsWith url "file:")
      (.substring url 5)
      url))))

(defn op-time []
  (write-transit (Clock/getCurrentTime)))

(defn time-scale []
  (write-transit [(Clock/getTimeScale) (Clock/getCurrentTime)]))

(defn events [client]
  (let [evt (deref (future (cmd/pump-out-evt client)))]
  ;; (println :EVT evt)
  (write-transit evt)))

(defn polies [client]
  (write-transit (deref (future (cmd/pump-out-pol client)))))

(defn esmess [client]
  (write-transit (deref (future (cmd/pump-out-mes client)))))

(defn commands [client  params]
  (println [:COMMANDS params])
(let [{:keys [object command task task-params time-scale]} params]
  (condp = command
    "client-list" (cmd/client-list)
    "client" (write-transit (cmd/client-selected client))
    "helm" (write-transit (cmd/helm client object (read-transit task-params)))
    "task-params" (write-transit (cmd/task-params client object task))
    "time-on-off" (cmd/time-on-off)
    "set-time-scale" (cmd/set-time-scale time-scale)
    (str "Wrong command: " command))))

(defn request [params]
  (println [:POST params])
(let [{:keys [client object task]} params]
  (cmd/exec-task client object task params)
  {:status 204}))

(defn allmess []
  (let [mess (ClojureTab/getAdvices)]
  (html
    [:head
      [:script {:type "text/javascript"}
	"function init(){
	  setTimeout('refresh()', 8000)
	}
	function refresh(){
	  window.location.reload()
	  setTimeout('refresh()', 8000)
	}"]]
    [:body {:onload "init()"}
      (for [m mess] [:p m])])))

(defn info [params]
  (println [:INFO params])
(write-transit (ClojureTab/invoke "tasks.info" (params :func) params)))

(defn cli-repl [params]
  (letfn [(cli-repl-chan-out []
	(loop [[bit ch] (alts!! [CLI-REPL-CHAN] :default :none) bits []]
	    (if (= bit :none)
	      bits
	      (recur (alts!! [CLI-REPL-CHAN] :default :none) (conj bits bit)))))]
  (def CLI-REPL params)
  (let [req (deref (future (cli-repl-chan-out)))]
    ;; (println :REQ req)
    (write-transit req))))

(defn replcli [sexp]
  ;; sexp must be string or quote
(put! CLI-REPL-CHAN {:sexp (str sexp)}))

(defn clirepl []
  (read-transit (CLI-REPL :transit)))

