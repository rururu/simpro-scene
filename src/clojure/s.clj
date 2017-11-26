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

(defn qm [x]
  (or 
  (nil? x)
  (= x :?)))

(defn context-to-hm [ctx]
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

(defn update-with-mp [hm mp]
  (doseq [[k v] mp]
  (.put hm k v))
true)

(defn context-to-attributes [ctx mo mp run]
  (if-let [hm (context-to-hm ctx)]
  (when (if mp
              (update-with-mp hm mp)
              (not= (.update (Context.) hm "Update Parameters")
	    ModalDialog/OPTION_CANCEL))
    (.putAttribute mo run hm)
    true)))

(defn gen-id [tit]
  (let [id (name (gensym (.substring tit 0 (min (count tit) 8))))]
  (.replaceAll id " " "_")))

(defn start-scenario [siorti mp]
  (if-let [si (if (string? siorti) (fifos "Scenario" "title" siorti) siorti)]
  (let [pro (sv si "protagonist")
         ctx (sv si "context")
         id (gen-id (sv si "title"))
         mo (and pro (or (OMT/getMapOb pro)
	           (OMT/addMapOb pro)))]
    (when (or (nil? pro) 
	(and (some? mo)
	  (context-to-attributes ctx mo mp id)))
      (ssv si "id" id)
      (ssv si "run" id)
      (ssv si "status" "START")
      (assert-instances [si])
      true))))

(defn start-tasks-actions [tas pid run proto]
  (assert-instances 
  (map 
    #(do (ssv % "status" "START")
	(ssv % "id" (gen-id (sv % "title")))
	(ssv % "parent" pid)
	(ssv % "run" run)
	(or (= proto :?) (ssv % "protagonist" proto))
	%)
    tas)))

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
          (or (OMT/getMapOb pro) (OMT/addMapOb pro)))
        (start-scenario s nil)) ))
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
          (or (OMT/getMapOb pro) (OMT/addMapOb pro)))
        (start-scenario s nil)) ))
  (println "Simulation not started!")))

(defn task-button-support []
  (let [te (proxy [ru.igis.omtab.TaskExecutor] []
	(execTask [no]
	  (if-let [typ (sv (.getInstance no) "type")]
	    (let [tt (svs typ "tasks")
	           sel (DisplayUtilities/pickInstancesFromCollection nil tt "SelectTasks")]
	       (doseq [ts sel]
	         (when-let [si (fifos "Scenario" "title" (sv ts "label"))]
	           (ssv si "protagonist" (.getInstance no))
  	           (start-scenario si nil))) ) )))]
  (OMT/clearTaskExecutors)
  (OMT/addTaskExecutor te)
  (println [:TE-ADDED te])))

(defn remove-context-attribute [pro run]
  (if (not= pro :?)
  (if-let [mo (OMT/getMapOb pro)]
    (.removeAttribute mo run))))

(defn conjunct [y1 y2]
  (filter #(include? y1 %) y2))

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
    (start-scenario si mp))))

(defn clear-scenario-activities [id]
  (let [acts (rete.core/facts-with-slot-value 'run = id)
       fids (map first acts)]
  (doseq [fid fids]
     (rete.core/retract-fact fid))))

