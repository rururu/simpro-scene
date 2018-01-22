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
(def WAY-TYPE "railway")
(def WAY-SUBTYPE "rail")
(def RMMA false)
(def MODE nil)
(def RADIUS 0)
(def W-COLOR "FFFF0000")
(def ROAD nil)
(def BEGIN nil)
(def END nil)
(def ROAD-SUBCLASS nil)
(def F "FORWARD")
(def B "BACKWARD")
(def U "UNDEFINED")
(defn way-api-url [bbx way-type]
  (let [[w s e n] bbx]
  (str "http://overpass.osm.rambler.ru/cgi/interpreter?data=[out:json];(way[" way-type "](" s "," w "," n "," e "););out%20body;%3E;out%20skel%20qt;")))

(defn way-data [bbx way-type]
  (try
  (let [url (way-api-url bbx way-type)
         ;;_ (println :URL url)
         jsn (json/read-str (slurp url) :key-fn keyword)]
      jsn)
  (catch Exception e
    (println e)
    nil)))

(defn get-way-data [[lat lon] rad way-type]
  (let [d (/ rad 60)
       bbx [(- lon d) (- lat d) (+ lon d) (+ lat d)]]
  (vreset! OSM-DATA (way-data bbx way-type))))

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

(defn nodes [data]
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

(defn filter-data [data way-type way-subtype]
  (if-let [els (seq (:elements data))]
  (let [idp (id-points (nodes data))]
    (->> (filter-kkv [:type] "way" els)
      (filter-kkv [:tags (keyword way-type)] way-subtype)
      (id-way-points idp)))))

(defn create-way [[id pts]]
  (if (fifos "Way" "id" (str id))
  []
  (let [[[la1 lo1] [la2 lo2]] [(first pts) (last pts)]
         [lat1 lon1] [(MapOb/getDegMin la1) (MapOb/getDegMin lo1)]
         [lat2 lon2] [(MapOb/getDegMin la2) (MapOb/getDegMin lo2)]
         rwi (crin "Way")
         poi (crin "OMTPoly")
         id (str id)]
    (ssv poi "label" id)
    (ssv poi "description" id)
    (ssv poi "latitude" lat1)
    (ssv poi "longitude" lon1)
    (ssv poi "lineColor" W-COLOR)
    (ssvs poi "points" [(str lat1 " " lon1) (str lat2 " " lon2)])
    (ssv rwi "id" id)
    (ssv rwi "poly" poi)
    (ssv rwi "source" (str (vec pts)))
    [poi])))

(defn add-way [llp]
  (println :MODE MODE)
(get-way-data (seq llp) RADIUS WAY-TYPE)
(if (nil? @OSM-DATA)
  (println :NO-DATA)
  (let [fdt (filter-data @OSM-DATA WAY-TYPE WAY-SUBTYPE)
         ws (mapcat create-way fdt)]
    (println "Created" (count ws) "ways")
    (doseq [w ws]
      (OMT/addMapOb w)))))

(defn remove-way [mo]
  (println :MODE MODE)
(if (nil? mo)
  (println "Try again in other place of line..")
  (let [id (.getName mo)
         wi (fifos "Way" "id" id)
         rfs (.getReferences wi)]
    (if (< (count rfs) 2)
      (do (delin wi)
        (OMT/removeMapOb mo true)
        (println "Remowed way" id))
      (println  (count rfs) "references on" id)))))

(defn shortest-dist [w1 w2]
  (let [llp1 (read-string (sv w1 "source"))
       llp2 (read-string (sv w2 "source"))
       [[la11 lo11] [la12 lo12]] [(first llp1) (last llp1)]
       [[la21 lo21] [la22 lo22]] [(first llp2) (last llp2)]
       dis-var {(MapOb/distanceNM la11 lo11 la21 lo21) F
                     (MapOb/distanceNM la11 lo11 la22 lo22) B
                     (MapOb/distanceNM la12 lo12 la21 lo21) F
                     (MapOb/distanceNM la12 lo12 la22 lo22) B}
      mid (apply min (keys dis-var))
      dir (dis-var mid)]
  [mid dir w2]))

(defn nearest-to [way from]
  (loop [pool (rest from) mid-dir-way (shortest-dist way (first from))]
  (if (empty? pool) 
    mid-dir-way
    (let [[nmid ndir nway :as nmdw] (shortest-dist way (first pool))]
      (if (< nmid (first mid-dir-way))
        (recur (rest pool) nmdw)
        (recur (rest pool) mid-dir-way))))))

(defn mk-dirway [dir way]
  (let [dw (crin "Dirway")]
  (ssv dw "direction" dir)
  (ssv dw "way" way)))

(defn create-dirways [[from to] begin end]
  (let [nws (filter #(< (count (.getReferences %)) 2) (cls-instances "Way"))
       beg (fifos "Way" "id" begin)
       end (fifos "Way" "id" end)]
  (loop [pick beg from (remove #{beg} nws) dws [(mk-dirway U beg)]]
    (if (= pick end)
      dws
      (let [[mid dir way :as p] (nearest-to pick from)
             dw (mk-dirway dir way)]
        (recur way (remove #{p} from) (conj dws dw)))))))

(defn create-road
  ([mo]
  (println :MODE MODE ROAD)
  (cond 
    (nil? mo) (do (println "Try again in other place of line..") nil)
    (nil? BEGIN) (do (def BEGIN (.getName mo)) (println :BEGIN BEGIN) nil)
    (nil? END) (do (def END (.getName mo)) (println :END END)
		(create-road))))
([]
  (if-let [ws (create-dirways ROAD BEGIN END)]
    (let [ri (crin ROAD-SUBCLASS)
           [frm to] ROAD]
      (ssv ri "from1" frm)
      (ssv ri "to1" to)
      (ssvs ri "ways" ws)
      (.show *prj* ri)))))

(defn set-mouse-adapter []
  (let [rmma (proxy [RuMapMouseAdapter] []
	(mouseLeftButtonAction [mo llp runa]
                          ;;(println MODE mo llp runa)
	  (condp = MODE
	    'ADD (add-way llp)
	    'REMOVE (remove-way mo)
                            'CREATE (create-road mo)
	    (println (or (if mo (.getName mo)) (seq llp))))
	  true))
       pgs (seq (OMT/getPlaygrounds))]
  (.setRuMapMouseAdapter (first pgs) rmma)
  (def RMMA true)))

(defn mode-add [hm inst]
  (if (not RMMA)
  (set-mouse-adapter))
(let [mp (into {} hm)
       sel (seq (selection mp "tagvalue"))]
  (if (empty? sel)
    (ssv inst "status" "Select tagvalue for ways!")
    (let [[wt wst] (read-string (sv (first sel) "value"))]
      (println :WAY-TYPE wt :WAY-SUBTYPE wst)
      (def WAY-TYPE wt)
      (def WAY-SUBTYPE wst)
      (def MODE 'ADD)
      (def RADIUS (sv inst "radius"))
      (ssv inst "status" "MODE ADD")))))

(defn mode-remove [hm inst]
  (if (= MODE 'ADD)
  (do (def MODE 'REMOVE)
    (ssv inst "status" "MODE REMOVE"))
  (ssv inst "status" "Add ways before")))

(defn mode-create [hm inst]
  (let [mp (into {} hm)
       frm (mp "from1")
       to (mp "to1")
       rsc (mp "road-subclass")]
(if (or (= MODE 'ADD) (= MODE 'REMOVE))
  (if (and (some? frm) (some? to) (some? rsc))
    (do (def MODE 'CREATE)
      (def ROAD-SUBCLASS rsc)
      (def ROAD [frm to])
      (def BEGIN nil)
      (def END nil)
      (ssv inst "status" "MODE CREATE ROAD"))
    (ssv inst "status" "Set From1, To1 and Road-subclass!"))
  (ssv inst "status" "Add ways before!"))))

