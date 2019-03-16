(ns sim
(:require
  [protege.core :as p]
  [rete.core :as rete])
(:import
  ru.igis.omtab.OMT
  ru.igis.omtab.Clock
  ru.igis.omtab.MapOb
  ru.igis.omtab.NavOb
  java.util.HashMap
  edu.stanford.smi.protege.ui.DisplayUtilities
  java.awt.event.ActionListener))

(def ES-TIMER nil)
(def EVT-LISTENERS (volatile! {}))
(defn mapob-event [evt]
  ;;(println :MAPOB-EVENT (.getName (.getSource evt)))
(let [obj (.getSource evt)
       nob (instance? NavOb obj)]
  (rete/assert-frame
    ['MapObEvent 'status (.getActionCommand evt)
	'label (.getName obj)
	'lat (.getLatitude obj)
	'lon (.getLongitude obj)
	'course (if nob (.getCourse obj))
	'speed (if nob (.getSpeed obj))
	'altitude (if nob (.getAltitude obj))
	'verticalSpeed (if nob (.getverticalSpeed obj))
	'route (if nob (.getRoute obj)) ])))

(defn ass-mo-event [evt]
  ;;(println :ASS-MO-EVENT (.getActionCommand evt) (.getName (.getSource evt)))
(let [sts (.getActionCommand evt)
       obj (.getSource evt)]
  (condp = sts 
    "STOP_ROUTE"
    (do (rete/assert-frame ['MapObEvent 
	'status sts 
	'object obj 
	'lat (.getLatitude obj) 
	'lon (.getLongitude obj)])
      (rete/fire))
    true)))

(defn start-evt-listen []
  (doseq[pg (OMT/getPlaygrounds)]
  (let [al (proxy [ActionListener] []
	(actionPerformed [evt] 
	  ;;(println :OMT-GEN-EVT evt)
	  (ass-mo-event evt)))]
    (.addActionListener pg al)
    (vswap! EVT-LISTENERS assoc pg al))))

(defn stop-evt-listen []
  (doseq[[pg al] @EVT-LISTENERS]
  (.removeActionListener pg al)))

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
  (proxy [java.util.TimerTask] [] (run [] (work-sim)))
  (long 0) 
  (long 1000))
(start-evt-listen)
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
      (-> (ru.rules/mk-frame ins)
        (ru.rules/update-frame
	:same-type
	{'status "START"
	 'run (HashMap.)})
        rete.core/assert-frame)))))

(defn toggle-visible []
  (let [ii (OMT/getMapObInstances)
       tt (DisplayUtilities/pickInstancesFromCollection nil ii "Toggle Labels Visible")]
  (doseq [t tt]
    (if-let[mo (OMT/getMapOb t)]
      (.setVisible mo (not (.isVisible mo)) )) )))

