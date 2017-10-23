(ns sim
(:require
  [protege.core :as p]
  [rete.core :as rete])
(:import
  ru.igis.omtab.OMT
  ru.igis.omtab.Clock
  ru.igis.omtab.MapOb
  ru.igis.omtab.NavOb
  edu.stanford.smi.protege.ui.DisplayUtilities))

(def ES-TIMER nil)
(defn mapob-event [evt]
  ;;(println [:MAPOB-EVENT (.getName (.getSource evt))])
(let [obj (.getSource evt)]
  (if (instance? MapOb obj)
    (rete/assert-frame
       ['MapObEvent 'status (.getActionCommand evt)
	'label (.getName obj)
	'lat (.getLatitude obj)
	'lon (.getLongitude obj)
	'course (if (instance? NavOb obj) (.getCourse obj))
	'speed (if (instance? NavOb obj) (.getSpeed obj))]))))

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
  (proxy [java.util.TimerTask] [] (run [] (work-sim)))
  (long 0) 
  (long 1000))
(println "Simulation Started..."))

(defn restart-sim []
  (stop-sim)
(start-sim))

(defn exec-activity []
  (letfn [(get-old [cln sln slv clz]
	(if-let [ins (p/fifos cln sln slv)]
	  (let [cly (.getDirectType ins)]
	    (.addDirectType ins clz)
	    (.removeDirectType ins cly)
	    ins)))]
  (let [clz (edu.stanford.smi.protege.ui.DisplayUtilities/pickCls nil p/*kb* [(p/cls "Activity")])
         cln (.getName clz)
         ins (or (get-old "Activity" "title" "test" clz) (p/foc cln "title" "test"))]
    (when (clojuretab.ClojureTab/showModalInstance ins (str cln ". Fill Slots as Needed"))
      (p/ssv ins "status" "START")
      (ru.rules/assert-instances [ins])))))

(defn toggle-visible []
  (let [ii (OMT/getMapObInstances)
       tt (DisplayUtilities/pickInstancesFromCollection nil ii "Toggle Labels Visible")]
  (doseq [t tt]
    (if-let[mo (OMT/getMapOb t)]
      (.setVisible mo (not (.isVisible mo)) )) )))

