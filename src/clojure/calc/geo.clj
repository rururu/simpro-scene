(ns calc.geo
(:use protege.core)
(:import 
  ru.igis.omtab.Util
  ru.igis.omtab.MapOb))
(defn норм [пеленг]
  (cond 
   (< пеленг 0) (норм (+ пеленг 360))
   (> пеленг 360) (норм (- пеленг 360))
   true пеленг))

(defn коорд [тио]
  ;; координаты точки или объекта
(cond 
  (vector? тио) тио
  (seq? тио) тио
  (instance? ru.igis.omtab.MapOb тио) [(.getLatitude тио) (.getLongitude тио)]
  (instance? edu.stanford.smi.protege.model.Instance тио)
    [(ru.igis.omtab.MapOb/getDeg (protege.core/sv тио "latitude"))
     (ru.igis.omtab.MapOb/getDeg (protege.core/sv тио "longitude"))]))

(defn пеленг-град [тио1 тио2]
  ;; тио - точка или объект
(let [[ш1 д1] (коорд тио1)
        [ш2 д2] (коорд тио2)]
  (MapOb/bearingsDeg ш1 д1 ш2 д2)))

(defn дистанция-мили [тио1 тио2]
  ;; тио - точка или объект
(let [[ш1 д1] (коорд тио1)
        [ш2 д2] (коорд тио2)]
  (MapOb/distanceNM ш1 д1 ш2 д2)))

(defn относительная-позиция [тио пеленг дистанция]
  ;; тио - точка или объект
(let [[ш д] (коорд тио)]
  (seq (Util/relPos ш д пеленг дистанция))))

(defn полигон-на-карту [имя путь]
  (let [pp (map #(str (MapOb/getDegMin (first %)) " " (MapOb/getDegMin (second %))) путь)
       [lad lam lod lom] (seq (.split (first pp) " "))
       lat (str lad " " lam)
       lon (str lod " " lom)
       lcl "FF008000"
       fcl "10008000"
       isp "false"
       rel "false"
       omp (ru.igis.omtab.OMTPoly/createOMTPoly имя lat lon lcl fcl isp rel pp)
       pgs (ru.igis.omtab.OMT/getPlaygrounds)]
  (.getOrAdd (first pgs) omp)))

(defn формировать-маршрут [маршрут путь]
  @(future
  (ssvs маршрут "points" (map #(str (MapOb/getDegMin (first %)) " " (MapOb/getDegMin (second %))) путь))))

(defn вектор-маршрута [маршрут]
  (letfn [(dm->d [dm]
	(let [[lad lam lod lom] (seq (.split dm " "))]
	  (vector (MapOb/getDeg (str lad " " lam)) (MapOb/getDeg (str lod " " lom)))))]
  (if-let [pts (svs маршрут "points")]
    (vec (map dm->d pts)))))

(defn на-маршруте [вектор-точек позиция путь]
  (loop [p1 позиция p2 (first вектор-точек) rst (rest вектор-точек) way путь]
  (let [d12 (дистанция-мили p1 p2)
         dir (пеленг-град p1 p2)]
    (if (< way d12)
      [dir (относительная-позиция p1 dir way)]
      (if (empty? rst)
        [dir p2]
        (recur p2 (first rst) (rest rst) (- way d12)))))))

(defn обновить-маршрут [маршрут]
  (ru.igis.omtab.OMT/removeMapOb маршрут false)
(ru.igis.omtab.OMT/getOrAdd маршрут))

