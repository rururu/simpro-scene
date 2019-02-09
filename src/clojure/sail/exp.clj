(ns sail.exp
(:use protege.core)
(:require
  [rete.core :as rete])
(:import
  ru.igis.omtab.OMT
  ru.igis.omtab.MapOb
  ru.igis.omtab.Clock
  java.awt.event.ActionListener
  java.util.TimerTask))

(def ES-TIMER nil)
(def URLS {"Mark" "http://localhost:4444/img/buoy3.png"
 "Boat" "http://localhost:4444/img/yacht.png"})
(defn work-sim []
  (if (and (some? ES-TIMER) (OMT/isRunning))
  (let [msec (Clock/getClock)
         sec (int (/ msec 1000))
         frm ['Clock 'time sec]]
    (rete/assert-frame frm)
    (rete/fire))))

(defn stop-sim []
  (when (some? ES-TIMER)
  (.cancel ES-TIMER)
  (def ES-TIMER nil)
  (println "Simulation Stoped...")))

(defn start-sim []
  (if (some? ES-TIMER)
  (stop-sim))
(def ES-TIMER (java.util.Timer.))
(.schedule 
  ES-TIMER 
  (proxy [TimerTask] [] (run [] (work-sim)))
  (long 0) 
  (long 1000))
(println "Simulation Started..."))

(defn restart-sim []
  (stop-sim)
(start-sim))

(defn trim-bear [b]
  (cond
  (< b 0) (+ b 360)
  (> b 360) (- b 360)
  true b))

(defn difference [course windir]
  (let [dif (if (> course windir) (- course windir) (- windir course))]
  (if (> dif 180) (- 360 dif) dif)))

(defn show-route [lab]
  (if-let [mo (OMT/getMapOb lab)]
  (let [rte (.getRoute mo)
         deg (map #(map (fn[x] (Math/toDegrees x)) %) rte)
         pnt (map #(str (MapOb/getDegMin (first %)) " " (MapOb/getDegMin (second %))) deg)
         pli (foc "OMTPoly" "label" (str lab "-route"))]
    (if-let [omo (OMT/getMapOb pli)]
      (OMT/removeMapOb omo false))
    (when (> (count deg) 0)
      (ssv pli "latitude" (MapOb/getDegMin (ffirst deg)))
      (ssv pli "longitude" (MapOb/getDegMin (second (first deg)))))
    (ssvs pli "points" pnt)
    (OMT/getOrAdd pli))))

(defn near-and-abaft [boat mark radius]
  (if-let [bmo (ru.igis.omtab.OMT/getMapOb boat)]
  (if-let [mmo (ru.igis.omtab.OMT/getMapOb mark)]
    (and (.near bmo mmo radius) (.abaft bmo mmo)))))

(defn rand-mid-min [mid min]
  (let [dev (rand (- mid min))]
  (if (> (rand) 0.5)
    (+ mid dev)
    (- mid dev))))

(defn camera-control [bmo k v]
  (vreset! pro.server/REQUEST {k v}))

(defn boat-heel [boat sail-point tack view]
  (let [view (cond
                 (or (and (>= view 0) (< view 46)) (and (< view 0) (> view -46))) 1
                 (or (> view 134) (< view -134)) 2
                 true 0)]
  (if-let [bmo (ru.igis.omtab.OMT/getMapOb boat)]
    (if (> view 0)
      (let [heel (condp = sail-point
	'BROADREACH  2
	'BEAMREACH    4
	'CLOSEREACH   7
	'CLOSEHAULED 10
	0)
             sign (condp = tack
	'STARBOARD (if (= view 1) -1 1)
	'PORT            (if (= view 1) 1 -1)
	1)]
        (sail.exp/camera-control bmo :roll (* heel sign)))
      (sail.exp/camera-control bmo :roll 0)))))

(defn boat-leg [label lab-scl lab-off img-url bil-scl [tim1 lon1 lat1 alt1] [tim2 lon2 lat2 alt2]]
  (let [p {:id label
           :label {:scale lab-scl
                     :pixelOffset {:cartesian2 lab-off}
                     :text label}
           :billboard {:scale bil-scl
                            :heightReference "RELATIVE_TO_GROUND"
                            :verticalOrigin "BOTTOM"
                            :image img-url}
           :position {:cartographicDegrees [tim1 lon1 lat1 alt1 tim2 lon2 lat2 alt2]}}]
  (if (not cesium.core/DOC-SENT)
    (cesium.core/send-doc-curt))
  (cesium.core/send-event "czml" (clojure.data.json/write-str p))))

(defn navob-leg [no lab-scl lab-off bil-scl intl-sec]
  (let [lab (.getName no)
       lat1 (.getLatitude no)
       lon1 (.getLongitude no)
       alt1 (.getAltitude no)
       crs (.getCourse no)
       spd (.getSpeed no)
       vsd (.getVerticalSpeed no)
       dis (double (/ (* spd intl-sec) 3600))
       [lat2 lon2] (seq (.position no (double crs) dis))
       alt2 (+ alt1 (* vsd intl-sec))
       tim1 (cesium.core/iso8601curt)
       tim2 (cesium.core/iso8601futt intl-sec)
       bil (or (.getDescription no) "no.png")
       bil (str cesium.core/BASE-URL cesium.core/IMG-PATH bil)]
  (boat-leg lab lab-scl lab-off bil bil-scl [tim1 lon1 lat1 alt1] [tim2 lon2 lat2 alt2])))

