(ns osm.data
(:require
   [clojure.data.json :as json]
   [clojure.xml :as x])
(:import
  ru.igis.omtab.MapOb
  ru.igis.omtab.OMT
  ru.igis.omtab.OMTPoly))

(def OSM-DATA (volatile! []))
(defn railway-api-url [bbx]
  (let [[w s e n] bbx]
  (str "http://overpass.osm.rambler.ru/cgi/interpreter?data=[out:json];(way[railway](" s "," w "," n "," e "););out%20body;%3E;out%20skel%20qt;")))

(defn railway-data [bbx]
  (try
  (let [url (railway-api-url bbx)
         _ (println :URL url)
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

(defn op-rail-lines [rails color]
  (letfn [(omp [id r]
              (let [[[la1 lo1] [la2 lo2]] [(first r) (last r)]
	[lat1 lon1] [(MapOb/getDegMin la1) (MapOb/getDegMin lo1)]
	[lat2 lon2] [(MapOb/getDegMin la2) (MapOb/getDegMin lo2)]]
                (OMTPoly/createOMTPoly 
	(str id)
	lat1
	lon1
	color
	nil
	"false"
	"false"
	[(str lat1 " " lon1) (str lat2 " " lon2)])))]
  (reduce-kv #(assoc %1 %2 [(omp %2 %3) %3]) {} rails)))

