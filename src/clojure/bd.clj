(ns bd
(:use 
  protege.core
  ru.rules)
(:import 
  ru.igis.omtab.OMT
  ru.igis.omtab.NavOb))
(defn damaged [?typ ?lat ?lon ?rad]
  (let [obs (OMT/getMapObs)
       obs (filter #(instance? NavOb %) obs)
       obs (filter #(= (.getType %) ?typ) obs)]
   (filter #(.near % ?lat ?lon ?rad) obs)))

