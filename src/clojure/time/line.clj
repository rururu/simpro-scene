(ns time.line
(:use protege.core)
(:import 
  clojuretab.ClojureTab
  ru.igis.omtab.OMT))
(defn manage-graphics []
  (doseq [pg (ru.igis.omtab.OMT/getPlaygrounds)]
  (.manageGraphics pg)))

(defn add-mo [mo]
  (ru.igis.omtab.OMT/getOrAdd mo)
(manage-graphics))

(defn remove-mo [mo]
  (ru.igis.omtab.OMT/removeMapOb mo false)
(manage-graphics))

