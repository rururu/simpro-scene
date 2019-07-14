(ns mas.stud.Students
(:import
  sim.engine.SimState)

(:gen-class
  :name mas.stud.Students
  :extends sim.engine.SimState
  ;; alias method start() in superclass. (Don't name it 'super-start'. Use a Java name.)
  :exposes-methods {start superStart}
  :state state
  :init init
  :main true))

(defn -init [seed]
  [[seed] {}])

(defn -main [& args]
  (let [state (mas.stud.Students. (System/currentTimeMillis))]
  (println :S1 state)
  (.start state)
  (println :S2 state)
  (println :SS (.getSteps (.-schedule state)))
  (println :ST (.step (.-schedule state) state))
  (println :i)
  (.finish state)
  (println :finish)))

(defn -start [this]
  (.superStart this))

