(ns osm.data
(:use protege.core) 
(:require
   [clojure.data.json :as json])
(:import
  ru.igis.omtab.MapOb
  ru.igis.omtab.OMT
  ru.igis.omtab.OMTPoly
  ru.igis.omtab.gui.RuMapMouseAdapter))

(def OSM-DATA (volatile! []))
(def RMMA false)
(def MODE nil)
(def RADIUS 0)
(def RR-COLOR "FF0000FF")
(def RW-COLOR "FFFF0000")
(defn railway-api-url [bbx]
  (let [[w s e n] bbx]
  (str "http://overpass.osm.rambler.ru/cgi/interpreter?data=[out:json];(way[railway](" s "," w "," n "," e "););out%20body;%3E;out%20skel%20qt;")))

(defn railway-data [bbx]
  (try
  (let [url (railway-api-url bbx)
         ;;_ (println :URL url)
         jsn (json/read-str (slurp url) :key-fn keyword)]
      jsn)
  (catch Exception e
    (println e)
    nil)))

(defn get-railway-data [[lat lon] rad]
  (let [d (/ rad 60)
       bbx [(- lon d) (- lat d) (+ lon d) (+ lat d)]]
  (vreset! OSM-DATA (railway-data bbx))))

(defn tags [data]
  (sort (set (mapcat keys data))))

(defn filter-kk [kk data]
  (filter #(some? (get-in % kk)) data))

(defn filter-kkv [kk v data]
  (filter #(= (get-in % kk) v) data))

(defn filter-kkv-not [kk v data]
  (filter #(not= (get-in % kk) v) data))

(defn tag-stat []
  (let [sta (for [t (tags @OSM-DATA)]
	(let [fl (filter-kk t @OSM-DATA)]
	  [t (count fl)]))
        sta  (filter #(> (second %) 0) sta)]
  (sort second sta)))

(defn op-nodes [data]
  (if-let [els (seq (:elements data))]
  (filter-kkv [:type] "node" els)))

(defn id-points [nodes]
  (reduce #(assoc %1 
	     (:id %2) 
	     [(:lat %2) (:lon %2)]) 
	{} nodes))

(defn id-way-points [idp ways]
  (reduce #(assoc %1 
	     (:id %2) 
	     (map (fn[x] (idp x)) (:nodes %2))) 
	{} ways))

(defn op-rails [data]
  (if-let [els (seq (:elements data))]
  (let [idp (id-points (op-nodes data))]
    (->> (filter-kkv [:type] "way" els)
      (filter-kkv [:tags :railway] "rail")
      (id-way-points idp)))))

(defn create-railway [[id rail]]
  (if (fifos "Railway" "id" (str id))
  []
  (let [[[la1 lo1] [la2 lo2]] [(first rail) (last rail)]
         [lat1 lon1] [(MapOb/getDegMin la1) (MapOb/getDegMin lo1)]
         [lat2 lon2] [(MapOb/getDegMin la2) (MapOb/getDegMin lo2)]
         rwi (crin "Railway")
         poi (crin "OMTPoly")
         id (str id)]
    (ssv poi "label" id)
    (ssv poi "description" id)
    (ssv poi "latitude" lat1)
    (ssv poi "longitude" lon1)
    (ssv poi "lineColor" RW-COLOR)
    (ssvs poi "points" [(str lat1 " " lon1) (str lat2 " " lon2)])
    (ssv rwi "id" id)
    (ssv rwi "poly" poi)
    (ssv rwi "source" (str (vec rail)))
    [poi])))

(defn add-railway [llp]
  (println :MODE MODE)
(get-railway-data (seq llp) RADIUS)
(if (nil? @OSM-DATA)
  (println :NO-DATA)
  (let [opr (op-rails @OSM-DATA)
         rws (mapcat create-railway opr)]
    (println "Created" (count rws) "railways")
    (doseq [rw rws]
      (OMT/addMapOb rw)))))

(defn remove-railway [mo]
  (println :MODE MODE)
(if mo
  (let [moi (.getInstance mo)
         rwi (->> moi .getReferences first .getFrame)
         id (sv rwi "id")
         rfs (.getReferences rwi)]
    (when (< (count rfs) 2)
      (delin rwi)
      (OMT/removeMapOb mo true)
      (println "Remowed railway" id)))))

(defn set-mouse-adapter []
  (let [rmma (proxy [RuMapMouseAdapter] []
	(mouseLeftButtonAction [mo llp runa]
                          ;;(println MODE mo llp runa)
	  (condp = MODE
	    'ADD (add-railway llp)
	    'REMOVE (remove-railway mo)
	    (println (or (if mo (.getName mo)) (seq llp))))
	  true))
       pgs (seq (OMT/getPlaygrounds))]
  (.setRuMapMouseAdapter (first pgs) rmma)
  (def RMMA true)))

(defn mode-add [hm inst]
  (if (not RMMA)
  (set-mouse-adapter))
(def MODE 'ADD)
(def RADIUS (sv inst "radius"))
(ssv inst "status" "MODE ADD"))

(defn mode-remove [hm inst]
  (if (= MODE 'ADD)
  (do (def MODE 'REMOVE)
    (ssv inst "status" "MODE REMOVE"))
  (ssv inst "status" "Add railways before")))

(defn create-railroad [hm inst]
  (let [mp (into {} hm)
       frm (mp "from1")
       to (mp "to1")]
(if (or (= MODE 'ADD) (= MODE 'REMOVE))
  (do (def MODE 'CREATE)
    (ssv inst "status" "MODE CREATE RAILROAD")
    (println :FROM frm :TO to))
  (ssv inst "status" "Add railways before"))))

