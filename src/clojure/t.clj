(ns t
(:use protege.core))
(defn tst []
  (println :TST)
(def ii (cls-instances "PolyMoving"))
(println (count ii)))

(defn pmu [i]
  (let [ob (sv i "object")
      os (sv i "observer")]
  (ssv i "observer2" os)
  (ssv i "observer" ob)))

