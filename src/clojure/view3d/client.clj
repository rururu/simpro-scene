(ns view3d.client
(:require
  [goog.string :as gstring]
  [goog.string.format]
  [cljs.core.async :refer [<! timeout close!]]
  [cognitect.transit :as t]
  [ajax.core :refer (GET)]
  [czm.core :as czm])
(:require-macros 
  [cljs.core.async.macros :refer [go]]))

(def VEHICLE (volatile! {:coord [60 30]
               :altitude 4000
               :speed 160
               :course 270}))
(def PORT 4444)
(def HOST "http://localhost:")
(def URL {:directives (str HOST PORT "/directives/")})
(def TIO {:directives 1000})
(def error-handler (fn [response]
  (let [{:keys [status status-text]} response]
    (println (str "AJAX ERROR: " status " " status-text)))))
(defn repeater
  ([func time-out]
  (go (while true
           (func)
           (<! (timeout time-out)))))
([func param time-out]
  (go (while true
           (func param)
           (<! (timeout time-out))))))

(defn read-transit [x]
  (t/read (t/reader :json) x))

(defn camera-vehicle [vehicle per]
  (let [[lat lon] (:coord vehicle)]
  (vswap! VEHICLE merge vehicle)
  (if (<= per 0)
    (czm/move-to lat lon 
	(int (/ (:altitude vehicle) 3.28084)) 
	(:course vehicle))
    (czm/fly-to lat lon 
	(int (/ (:altitude vehicle) 3.28084)) 
	(:course vehicle) 
	per))))

(defn directives-handler [response]
  (doseq [{:keys [directive] :as dir} (read-transit response)]
  ;;(println [:DIRECTIVE dir])
  (condp = directive
    :vehicle (let [{:keys [vehicle period]} dir]
	(camera-vehicle vehicle period)))))

(defn receive-directives []
  (GET (:directives URL) {:handler directives-handler
                       :error-handler error-handler}))

(defn on-load []
  (enable-console-print!)
(repeater receive-directives (:directives TIO)))

