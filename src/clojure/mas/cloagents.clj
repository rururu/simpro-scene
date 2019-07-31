(ns mas.cloagents
(:import
  java.awt.Color
  sim.field.continuous.Continuous2D
  sim.util.Double2D
  sim.portrayal.FieldPortrayal2D
  sim.portrayal.continuous.ContinuousPortrayal2D
  sim.portrayal.simple.OvalPortrayal2D))
(def AREA nil)
(deftype CloAgent [astat ]
	sim.engine.Steppable
	(step [this agents] ;; (println :s (.getSteps (.schedule agents)))
(let [a @astat
       x (+ (:x a) (/ (- 1.0 (* 2 (Math/random))) 1000)) 
       y (+ (:y a) (/ (- 1.0 (* 2 (Math/random))) 1000))]
  (reset! astat {:x x :y y})
  (.setObjectLocation AREA this (Double2D. x y))))
)
(deftype CloAgentsStateImpl []
	ru.igis.sim.CloAgentsState
	(init [this] (def AREA (Continuous2D. 1.0, 10.0, 10.0)))
	(cloStart [this cloants] (let [anum 1000
       rnd (.random cloants)
       sch (.schedule cloants)]
  (.clear AREA)
  (dotimes [i anum]
    (let [x (+ (* (.getWidth AREA) 0.5) (* 5 (.nextDouble rnd)) -0.5)
           y (+ (* (.getHeight AREA) 0.5) (* 5 (.nextDouble rnd)) -0.5)
           ast (atom {:x x :y y})
           ant (CloAgent. ast)]
      (.setObjectLocation AREA ant (Double2D. x y))
      (.scheduleRepeating sch ant)))))
	(takeArea [this] AREA)
)
(deftype CloAgentsPortsImpl []
	ru.igis.sim.CloAgentsPorts
	(createAreaPortrayal [this] (ContinuousPortrayal2D.))
	(displayWidth [this] 800)
	(displayHeight [this] 600)
	(cloSetupPorts [this aport] (.setPortrayalForAll aport (OvalPortrayal2D. Color/RED 0.1)))
)
(defn run-with-GUI [hm inst]
  (println (clojure.java.shell/sh  "clj" "-e" "(ru.igis.sim.CloAgentsGUI/main (into-array String []))")))

