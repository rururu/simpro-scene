(ns als.reveal
(:require [vlaaad.reveal :as reveal]))
(defn -main [& args]
  (edu.stanford.smi.protege.Application/main (into-array String []))
(System/setProperty "vlaaad.reveal.prefs" "{:theme :light}")
(add-tap (reveal/ui)))

