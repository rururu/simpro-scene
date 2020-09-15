(ns s
(:use 
  protege.core
  ru.rules
  sim)
(:import 
  ru.igis.omtab.OMT
  ru.igis.omtab.Clock
  ru.igis.omtab.Context
  ru.igis.omtab.OpenMapTab
  java.util.HashMap
  edu.stanford.smi.protege.ui.DisplayUtilities
  edu.stanford.smi.protege.util.ModalDialog
  clojuretab.ClojureTab))
(def TRACE false)
(defn qm [x]
  (or 
  (nil? x)
  (= x :?)))

(defn updated-with-mp? [hm mp]
  (when mp
  (doseq [[k v] mp]
    (.put hm k v))
  true))

(defn context-to-hm
  ([ctx]
  (let [hm (HashMap.)]
    (if ctx
      (doseq [p (svs ctx "pairs")]
        (let [var (sv p "variable")
               tit (sv var "title")]
          (condp = (.getName (.getDirectType p))
            "ValuePair" (.put hm tit (sv p "value"))
            "ObjectPair" (.put hm tit (sv p "object"))
            "CollectionPair" (.put hm tit (svs p "collection"))
            "StringCollectionPair" (.put hm tit (svs p "string-collection")) )) ))
    hm))
([ctx pro mp]
  (let [hm (context-to-hm ctx)]
    (if pro
      (.put hm "?protagonist" pro))
    (or (updated-with-mp? hm mp)
         (.update (Context.) hm "Update Parameters"))
    hm)))

(defn start-scenario [siorti mp ipx]
  (if-let [si (if (string? siorti) (fifos "Scenario" "title" siorti) siorti)]
  (-> (ru.rules/mk-frame si)
    (ru.rules/update-frame
	'Scenario
	{'status "START"
	 'run (context-to-hm (sv si "context") (sv si "protagonist") mp)
	 'id (gensym ipx)})
    rete.core/assert-frame)
  true))

(defn start-tasks-actions [tas pid run]
  (doseq [ta tas]
  (-> (ru.rules/mk-frame ta)
    (ru.rules/update-frame
	:same-type
	{'status "START"
	 'parent pid
	 'run run})
    rete.core/assert-frame)))

(defn start-next [nacts pid ain run]
  (if (empty? nacts)
  (rete.core/assert-frame
    ['Action 'status "DONE"
	'parent pid
	'instance ain
	'next_actions nacts])
  (s/start-tasks-actions nacts pid run)))

(defn include? [y x]
  (some #{x} y))

(defn exclude [y x]
  (remove #{x} y))

(defn run-some-scenario []
  (if (some? ES-TIMER)
  (let [col  (edu.stanford.smi.protege.util.CollectionUtilities/createCollection (cls "Scenario"))
         ss (edu.stanford.smi.protege.ui.DisplayUtilities/pickInstances nil *kb* col)]
    (if (seq ss)
      (doseq [s ss]
        (if-let [pro (sv s "protagonist")]
          (or (OMT/getMapOb pro) (OMT/getOrAdd pro)))
        (start-scenario s nil "Adm")) ))
  (println "Simulation not started!")))

(defn run-annotated-scenario []
  (if (some? ES-TIMER)
  (let [all (cls-instances "Scenario")
        sf (.getSystemFrames *kb*)
        ac (.getAnnotationCls sf)
        is (.getName (.getAnnotatedInstanceSlot sf))
        ais (map #(sv % is) (.getInstances ac))
        nis (filter #(not (nil? %)) ais)
        sis (filter #(= (.getName (.getDirectType %)) "Scenario") nis)
        ss (edu.stanford.smi.protege.ui.DisplayUtilities/pickInstancesFromCollection nil sis "Select Start Scenarios")]
    (if (seq ss)
      (doseq [s ss]
        (if-let [pro (sv s "protagonist")]
          (or (OMT/getMapOb pro) (OMT/getOrAdd pro)))
        (start-scenario s nil "Adm")) ))
  (println "Simulation not started!")))

(defn mission-button-support []
  (let [me (proxy [ru.igis.omtab.MissionExecutor] []
	(execMission [no]
	  (if-let [typ (sv (.getInstance no) "type")]
	    (let [tt (svs typ "missions")
	           sel (DisplayUtilities/pickInstancesFromCollection nil tt "SelectMissions")]
	       (doseq [ms sel]
	         (when-let [si (fifos "Scenario" "title" (sv ms "label"))]
	           (ssv si "protagonist" (.getInstance no))
  	           (start-scenario si nil "Adm"))) ) )))]
  (OMT/clearMissionExecutors)
  (OMT/addMissionExecutor me)
  (println [:ME-ADDED me])))

(defn show-labels []
  (let [ii (OMT/getMapObInstances)
      tt (DisplayUtilities/pickInstancesFromCollection nil ii "Toggle Labels Visible")]
  (doseq [t tt]
    (if-let[mo (OMT/getMapOb t)]
      (.showLabel mo)) )))

(defn hide-labels []
  (let [ii (OMT/getMapObInstances)
      tt (DisplayUtilities/pickInstancesFromCollection nil ii "Toggle Labels Visible")]
  (doseq [t tt]
    (if-let[mo (OMT/getMapOb t)]
      (.hideLabel mo)) )))

(defn find-general-scenario [title]
  ;; Title of specific scenario STARTS WITH title of general scenario
(first (seq (filter #(.startsWith title (sv % "title")) (cls-instances "Scenario")))))

(defn player-start-scenario [player siorti mp]
  (if-let [pla (if (string? player) (fifos "MapOb" "label" player) player)]
  (when-let [si (if (string? siorti) 
	(or (fifos "Scenario" "title" siorti) (find-general-scenario siorti))
	siorti)]
    (ssv si "protagonist" pla)
    (start-scenario si mp "Pla"))))

(defn clear-scenario-activities [run]
  (let [acts (rete.core/facts-with-slot-value 'run = run)
       fids (map first acts)]
  (doseq [fid fids]
     (rete.core/retract-fact fid))))

(defn trace [bool]
  (def TRACE bool))

