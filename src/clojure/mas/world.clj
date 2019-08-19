(ns mas.world
(:require
  clojure.java.shell))
(defn run-world-gui [hm inst]
  (let [mp (into {} hm)
       iwd (mp "iWorld-class")
       ipts (mp "iPorts-class")
       cmd (str "(ru.igis.sim.WorldGUI/main (into-array String [\"" iwd "\" \"" ipts "\"]))")]
  (println cmd)
  (println (clojure.java.shell/sh  "clj" "-e" cmd))))

