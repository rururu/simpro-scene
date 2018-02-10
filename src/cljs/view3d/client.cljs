(ns view3d.client
(:require
  [goog.string :as gstring]
  [goog.string.format]
  [cljs.core.async :refer [<! timeout close!]]
  [cognitect.transit :as t]
  [ajax.core :refer (GET)]
  [cljs.reader :as rdr]
  [geo.calc :refer [norm-crs]]
  [czm.core :as czm])
(:require-macros 
  [cljs.core.async.macros :refer [go]]))

(def VEHICLE (volatile! {:name "Аврора"
               :coord [60 30]
               :altitude 4000
               :speed 160
               :course 270}))
(def BASE-URL "http://localhost:4444/")
(def TIO {:vehicle 1000})
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

(defn set-html! [id msg]
  (set! (.-innerHTML (.getElementById js/document id)) msg))

(defn num-val [x]
  (if (number? x) x (rdr/read-string x)))

(defn camera-vehicle [vehicle per]
  (let [[lat lon] (:coord vehicle)
       alt (:altitude vehicle)
       alt (int (if (< alt czm/MAX-UPGROUND) 
	(+ alt czm/FH) 
	alt))]
  (vswap! VEHICLE merge vehicle)
  (set-html! "onboard-fld" (:name vehicle))
  (set-html! "name-fld" (:name vehicle))
  (set-html! "course-fld" (:course vehicle))
  (set-html! "speed-fld" (:speed vehicle))
  (set-html! "altitude-fld" alt)
  (if (<= per 0)
    (czm/move-to lat lon 
	(:altitude vehicle)
	(:course vehicle))
    (czm/fly-to lat lon 
	(:altitude vehicle)
	(:course vehicle) 
	per))))

(defn vehicle-hr [response]
  (let [resp (read-transit response)]
  ;;(println :RESP resp)
  (if-let [{:keys [vehicle period]} resp]
    (camera-vehicle vehicle period))))

(defn receive-vehicle []
  (GET (str BASE-URL "vehicle/") 
	{:handler vehicle-hr
                         :error-handler error-handler}))

(defn view [dir]
  (czm/camera :view dir))

(defn pitch [deg]
  (let [deg (num-val deg)]
  (if (<= -180 deg 180)
    (czm/camera :pitch deg))))

(defn roll [deg]
  (let [deg (num-val deg)]
  (if (<= -180 deg 180)
    (czm/camera :roll deg))))

(defn left-controls []
  (set-html! "camera" "<h4>Camera</h4>")
(set-html! "onboard" "Onboard:")
(set-html! "onboard-fld" "")
(set-html! "view" "View:")
(set-html! "view-fld" 
  "<select onchange='javascript:view3d.client.view(this.value)' style='width:96px'>
   <option value='FORWARD'>FORWARD</option>
   <option value='BACKWARD'>BACKWARD</option>
   <option value='RIGHT'>RIGHT</option>
   <option value='LEFT'>LEFT</option>
   <option value='UP'>UP</option>
   <option value='DOWN'>DOWN</option>
   <option value='FORWARD-RIGHT'>FORWARD-RIGHT</option>
   <option value='FORWARD-LEFT'>FORWARD-LEFT</option>
   <option value='BACKWARD-RIGHT'>BACKWARD-RIGHT</option>
   <option value='BACKWARD-LEFT'>BACKWARD-LEFT</option>
   </select>")
(set-html! "pitch" "Pitch:")
(set-html! "pitch-fld" 
  "<input value='-10' style='width:90px' id='pitch-val'
               onchange='javascript:view3d.client.pitch(this.value)'>")
(set-html! "roll" "Roll:")
(set-html! "roll-fld" 
  "<input value='0' style='width:90px'
               onchange='javascript:view3d.client.roll(this.value)'>"))

(defn right-conterols []
  (set-html! "vehicle" "<h4>Vehicle</h4>")
(set-html! "name" "Name:")
(set-html! "name-fld" "")
(set-html! "course" "Course:")
(set-html! "course-fld" "")
(set-html! "speed" "Speed:")
(set-html! "speed-fld" "")
(set-html! "altitude" "Altitude:")
(set-html! "altitude-fld" ""))

(defn show-controls []
  (right-conterols)
(left-controls))

(defn on-load []
  (enable-console-print!)
(czm/init-3D-view BASE-URL "yes")
(repeater receive-vehicle (:vehicle TIO))
(show-controls))


(set! (.-onload js/window) (on-load))