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

(defn inside [windir headwind]
)

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

