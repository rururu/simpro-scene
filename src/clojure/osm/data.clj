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
(def RROAD nil)
(def BEGIN nil)
(def END nil)
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
(if (nil? mo)
  (println "Try again in other place of line..")
  (let [id (.getName mo)
         rwi (fifos "Railway" "id" id)
         rfs (.getReferences rwi)]
    (if (< (count rfs) 2)
      (do (delin rwi)
        (OMT/removeMapOb mo true)
        (println "Remowed railway" id))
      (println  (count rfs) "references on" id)))))

(defn shortest-dist [rw1 rw2]
  (let [llp1 (read-string (sv rw1 "source"))
       llp2 (read-string (sv rw2 "source"))
       [[la11 lo11] [la12 lo12]] [(first llp1) (last llp1)]
       [[la21 lo21] [la22 lo22]] [(first llp2) (last llp2)]
       dis1 (MapOb/distanceNM la11 lo11 la21 lo21)
       dis2 (MapOb/distanceNM la11 lo11 la22 lo22)
       dis3 (MapOb/distanceNM la12 lo12 la21 lo21)
       dis4 (MapOb/distanceNM la12 lo12 la22 lo22)]
  (min dis1 dis2 dis3 dis4)))

(defn nearest-to [rw from]
  (loop [pool (rest from) dist (shortest-dist rw (first from)) nest (first from)]
  (if (empty? pool) 
    nest
    (let [nsd (shortest-dist rw (first pool))]
      (if (< nsd dist)
        (recur (rest pool) nsd (first pool))
        (recur (rest pool) dist nest))))))

(defn order-railways [[from to] begin end]
  (let [nrw (filter #(< (count (.getReferences %)) 2) (cls-instances "Railway"))
       beg (fifos "Railway" "id" begin)
       end (fifos "Railway" "id" end)]
  (loop [pick beg from (remove #{beg} nrw) to [beg]]
    (if (= pick end)
      to
      (let [p (nearest-to pick from)]
        (recur p (remove #{p} from) (conj to p)))))))

(defn create-railroad [mo]
  (println :MODE MODE RROAD)
(if-let [rws (cond (nil? mo) (do (println "Try again in other place of line..") nil)
	(nil? BEGIN) (do (def BEGIN (.getName mo)) (println :BEGIN BEGIN) nil)
	(nil? END) (do (def END (.getName mo)) (println :END END)
		(order-railways RROAD BEGIN END)))]
  (let [rri (crin "Railroad")
         [frm to] RROAD]
    (ssv rri "from1" frm)
    (ssv rri "to1" to)
    (ssvs rri "railways" rws)
    (.show *prj* rri))))

(defn set-mouse-adapter []
  (let [rmma (proxy [RuMapMouseAdapter] []
	(mouseLeftButtonAction [mo llp runa]
                          ;;(println MODE mo llp runa)
	  (condp = MODE
	    'ADD (add-railway llp)
	    'REMOVE (remove-railway mo)
                            'CREATE (create-railroad mo)
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

(defn mode-create [hm inst]
  (let [mp (into {} hm)
       frm (mp "from1")
       to (mp "to1")]
(if (or (= MODE 'ADD) (= MODE 'REMOVE))
  (if (and (some? frm) (some? to))
    (do (def MODE 'CREATE)
      (def RROAD [frm to])
      (def BEGIN nil)
      (def END nil)
      (ssv inst "status" "MODE CREATE RAILROAD"))
    (ssv inst "status" "Set From1 and To1"))
  (ssv inst "status" "Add railways before"))))

