(ns menu.item
(:use protege.core)
(:import clojuretab.ClojureTab))
(defn clojure-work []
  (println "Loading Clojure Programs...")
(if-let [wps (ClojureTab/findAnnotated (cls-instances "WorkingPrograms") nil)]
  (loop [i 1 pins (svs wps "cloPrograms")]
    (when (seq pins)
      (println (str " 1." i " " (sv (first pins) "title") " = " (ClojureTab/loadProgram (first pins)) ))
      (recur (inc i) (rest pins))))
  (println "  Annotated instance of WorkingPrograms not found!")))

