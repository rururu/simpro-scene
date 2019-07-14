(ns mas.stud
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
  (sim.engine.SimState/doLoop mas.stud.Students (into-array String args)))

