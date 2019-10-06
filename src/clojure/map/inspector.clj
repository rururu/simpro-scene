(ns map.inspector
(:use 
  protege.core
  clojure.stacktrace)
(:import 
  ru.igis.omtab.OpenMapTab
  ru.igis.omtab.OMT
  ru.igis.omtab.MapOb
  javax.swing.JFrame
  com.bbn.openmap.omGraphics.OMPoly
  com.bbn.openmap.omGraphics.OMGraphicList
  edu.stanford.smi.protege.util.SelectionListener))
(def ^:dynamic *mb* ; MapBean
(OpenMapTab/getMapBean))
(def ^:dynamic *mem* [])
(def ^:dynamic *inspector* (.createRuntimeClsWidget *prj* (foc "MInspector" "title" "Map Inspector")))
(defn gem [i]
  (if (< i (.size *mem*))
    (nth *mem* i)))

(defn pum [x]
  (def ^:dynamic *mem* (conj *mem* x))
(Integer. (- (.size *mem*) 1)))

(defn show [w]
  (let [f (JFrame. (.getName w))]
  (.. f (getContentPane) (add  w))
  (.setLocationRelativeTo f nil)
  (.pack f)
  (.setVisible f true)))

(defn isw [s]
  (.getSlotWidget *inspector* (.getSlot *kb* s)))

(defn foc-m-layer [lr]
  (when-let [ins (foc "MLayer" "title" (.getName lr))]
  (ssv ins "pointer" (pum lr))
  ins))

(defn foc-m-polygon [omp pfx]
  (let [lla (.getLatLonArray omp)
      tit (str (gensym pfx) " " (/ (alength lla) 2))
      ins (foc "MPolygon" "title" (str tit))]
  (ssv ins "pointer" (pum omp))
  ins))

(defn del-m-polygons-and-layers []
  (let [mps (cls-instances "MPolygon")]
  (doseq [mp mps]
     (delin mp)))
(let [mps (cls-instances "MLayer")]
  (doseq [mp mps]
     (delin mp))))

(defn omgl-map [omgl fn]
  ; Collect applications of function fn to every OMPoly in OMGraphicList
(letfn [(om [oml fn]
            (let [fir (first oml)
                  rst (rest oml)
                  one (cond
	     (instance? OMPoly fir) (list (fn fir))
	     (instance? OMGraphicList fir) (om (.getTargets fir) fn))
                  two (if (seq rst)
                             (om rst fn))]
                 (concat one two)))]
  (om (.getTargets omgl) fn)))

(defn m-layer-polygons [mlr]
  ; Return MLayer instance slot m-polygons collection.
; Create it if needed from pointer to Layer object.
(or (seq (svs mlr "m-polygons"))
     (let [lr (gem (sv mlr "pointer"))
           tit (.getName lr)
           mps (omgl-map (.getList lr) #(foc-m-polygon % tit))]
        (ssvs mlr "m-polygons" mps)
        mps)))

(defn add-sel-fn0 [sw fn0]
  (.addSelectionListener sw
  (proxy [SelectionListener] []
    (selectionChanged [evt] (fn0)) )))

(defn select-layer []
  (let  [sel (.getSelection (isw "m-layers"))]
  (if (seq sel)
      (let [mlr (first sel)
            mps (m-layer-polygons mlr)]
        (.setValues (isw "m-polygons") mps) ))))

(defn points-from-lla [lla]
  (letfn [(point [a i]
            (let [la (Math/toDegrees (aget a i))
                   lo (Math/toDegrees (aget a (+ i 1)))]
              (str (MapOb/getDegMin la) " " (MapOb/getDegMin lo)) ))]
  (loop [pp (vec '()) k 0 m (- (alength lla) 1)]
    (if (>= k m)
        pp
        (recur (conj pp (point lla k)) (+ k 2) m) ))))

(defn m-polygon-poly [mp]
  ; Return MPolygon instance slot m-poly value: OMPoly instance.
; Create it if needed from pointer to OMPoly object.
(or (sv mp "poly")
     (let [omp (gem (sv mp "pointer"))
           lla (.getLatLonArray omp)
           ins (crin "OMTPoly")
           pts (points-from-lla lla)
           fst (.split (first pts) " ")]
        (ssv ins "label" (sv mp "title"))
        (ssvs ins "points" pts)
        (ssv ins "lineColor" "FFFF0000")
        (ssv ins "latitude" (str (aget fst 0) " " (aget fst 1)))
        (ssv ins "longitude" (str (aget fst 2) " " (aget fst 3)))
        (ssv ins "line" (foc "Line" "label" "L2"))
        (ssv mp "poly" ins)
        ins)))

(defn shake-map []
  (let [scl (.getScale *mb*)]
  (.setScale *mb* (* scl 0.005))
  (Thread/sleep 200)
  (.setScale *mb* scl)))

(defn select-polygon []
  (let  [sel (.getSelection (isw "m-polygons"))]
  (if (seq sel)
      (let [mp (first sel)
             pol (m-polygon-poly mp)]
        (OMT/getOrAdd pol)
        (shake-map)
        (.show *prj* pol) ))))

(defn new-inspector []
  (del-m-polygons-and-layers)
(def ^:dynamic *mem* [])
(let [lsw (isw "m-layers")
       psw (isw "m-polygons")]
  (add-sel-fn0 lsw select-layer)
  (add-sel-fn0 psw select-polygon)
  (.setValues lsw (map foc-m-layer  (.getComponents *mb*)))
  (show *inspector*)))

