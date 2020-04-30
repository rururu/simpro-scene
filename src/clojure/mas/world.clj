(ns mas.world
(:use protege.core)
(:require
  clojure.java.shell))
(defn mult-run-world-gui [hm inst]
  (let [mp (into {} hm)
       iwd (mp "iWorld-class")
       ipts (mp "iPorts-class")
       cmd (str "(ru.igis.sim.WorldGUI/main (into-array String [\"" iwd "\" \"" ipts "\"]))")]
  (println cmd)
  (println (clojure.java.shell/sh  "clj" "-e" cmd))))

(defn one-run-world-gui [hm inst]
  (let [mp (into {} hm)
       iwd (mp "iWorld-class")
       ipts (mp "iPorts-class")]
  (invoke-later (ru.igis.sim.WorldGUI/main (into-array String [(str iwd) (str ipts)])))))

(defn prepare-world [hm inst]
  (let [mp (into {} hm)
       pre (mp "prepare")]
  (if (not (empty? pre))
    (eval (read-string pre)))))

