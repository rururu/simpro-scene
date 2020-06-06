(ns menu.item
(:use protege.core)
(:import clojuretab.ClojureTab))
(defn clojure-work []
  (println "INITIALIZING EXPERT SYSTEM")
(println "1. Loading Clojure Programs...")
(if-let [wps (ClojureTab/findAnnotated (cls-instances "WorkingPrograms") nil)]
  (loop [i 1 pins (svs wps "cloPrograms")]
    (when (seq pins)
      (println (str " 1." i " " (sv (first pins) "title") " = " (ClojureTab/loadProgram (first pins)) ))
      (recur (inc i) (rest pins)) ) )
  (println "  Annotated instance of WorkingPrograms not found!"))
(println "2. Starting Expert System.")
(if-let [run (ClojureTab/findAnnotated (cls-instances "Run") nil)]
  (ClojureTab/invoke "ru.rules" "run-engine" run)
  (println "  Annotated instance of Run not found!"))
(println "3. Starting Simulation.")
(ClojureTab/invoke "sim" "start-sim")
(println "4. Mission Button Support.")
(ClojureTab/invoke "s" "mission-button-support")
(println "EXPERT SYSTEM INITIALIZED")
(println "5. Starting Cesium.")
(if-let [csi (ClojureTab/findAnnotated (cls-instances "CesiumServer") nil)]
  (do (ClojureTab/invoke "cesium.server" "start-server" (sv csi "port"))
    (clojure.java.browse/browse-url (str "http://localhost:" (sv csi "port")))
    (println "Cesium started.."))
  (println "Annotated instance of CesiumServer not found!")))

