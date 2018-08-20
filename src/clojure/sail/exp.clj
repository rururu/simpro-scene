(ns sail.exp
(:require
  [rete.core :as rete])
(:import
  ru.igis.omtab.OMT
  ru.igis.omtab.Clock
  java.awt.event.ActionListener
  java.util.TimerTask))

(def EVT-LISTENERS (volatile! {}))
(def ES-TIMER nil)
(defn ass-mo-event [evt]
  ;;(println :ASS-MO-EVENT (.getActionCommand evt) (.getName (.getSource evt)))
(let [tpe (.getActionCommand evt)
       obj (.getSource evt)]
  (rete/assert-frame ['MapObEvent 
	'type tpe 
	'label (.getName obj)
	'latitude (.getLatitude obj) 
	'longitude (.getLongitude obj)
	'altitude (.getAltitude obj)
	'course (.getCourse obj)
	'speed (.getSpeed obj)])
  (rete/fire)))

(defn stop-evt-listen []
  (doseq[[pg al] @EVT-LISTENERS]
  (.removeActionListener pg al)))

(defn start-evt-listen []
  (stop-evt-listen)
(doseq[pg (OMT/getPlaygrounds)]
  (let [al (proxy [ActionListener] []
	(actionPerformed [evt] 
	  ;;(println :OMT-GEN-EVT evt)
	  (ass-mo-event evt)))]
    (.addActionListener pg al)
    (vswap! EVT-LISTENERS assoc pg al))))

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
  (stop-evt-listen)
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
(start-evt-listen)
(println "Simulation Started..."))

(defn restart-sim []
  (stop-sim)
(start-sim))

(defn trim-bear [b]
  (cond
  (< b 0) (+ b 360)
  (> b 360) (- b 360)
  true b))

(defn inside [windir headwind]
)

