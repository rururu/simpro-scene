(ns mas.cloagents
)
(deftype CloAgent []

	:load-ns false

	sim.engine.Steppable
	(step [this agents] (println :s (.getSteps (.schedule agents))))
)
