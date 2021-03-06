(ns sim
(:use 
  protege.core
  rete.core)
(:import
  ru.igis.omtab.OMT
  ru.igis.omtab.Clock))
(def ES-TIMER nil)
(defn work-sim []
  (if (and (some? ES-TIMER) (OMT/isRunning))
  (let [sec (int (/ (Clock/getClock) 1000))]
    (assert-frame ['Clock 'time sec])
    (fire))))

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
  (proxy [java.util.TimerTask] [] (run [] (work-sim)))
  (long 0) 
  (long 1000))
(println "Simulation Started..."))

(defn restart-sim []
  (stop-sim)
(start-sim))

(defn reset-time []
  (Clock/setClock 0))

