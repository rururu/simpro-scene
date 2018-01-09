(ns osm.data
(:require
   [clojure.data.json :as json]
   [clojure.xml :as x]))

(def OSM-DATA (volatile! []))
(defn osm-api-url [bbx]
  (let [[w s e n] bbx] 
  (str "http://api.openstreetmap.org/api/0.6/map?bbox=" w "," s "," e "," n)))

(defn railway-api-url [bbx]
  (let [[w s e n] bbx]
  (str "https://www.overpass-api.de/api/interpreter?data=[out:json];(way[railway](" s "," w "," n "," e "););out%20body;%3E;out%20skel%20qt;")))

(defn tag-tags-namcor [tag]
  (let [cnt (:content tag)
       tt (filter #(= (:tag %) :tag) cnt)
       m {"id" (:id (:attrs tag))
             "lat" (read-string (:lat (:attrs tag)))
             "lon" (read-string (:lon (:attrs tag)))}
       ml (cons m (map #(assoc {} (:k (:attrs %)) (:v (:attrs %))) tt))]
  (apply merge ml)))

(defn osm-data [bbx]
  (try
  (let [curl (osm-api-url bbx)
         xml (x/parse curl)
         cnt (:content xml)
         nods (filter #(= (:tag %) :node) cnt)
         nnn (filter #(some? (:content %)) nods)]
      (map tag-tags-namcor nnn))
  (catch Exception e
    (println e)
    nil)))

(defn railway-data [bbx]
  (try
  (let [curl (railway-api-url bbx)
         jsn (json/read-str (slurp curl) :key-fn keyword)]
      jsn)
  (catch Exception e
    (println e)
    nil)))

(defn filter-k [k data]
  (filter #(some? (get % k)) data))

(defn filter-kv [k v data]
  (filter #(= (get % k) v) data))

(defn tags [data]
  (sort (set (mapcat keys data))))

(defn get-osm-data [[lat lon] rad]
  (let [d (/ rad 60)
       bbx [(- lon d) (- lat d) (+ lon d) (+ lat d)]]
  (vreset! OSM-DATA (osm-data bbx))))

(defn filter-kv-not [k v data]
  (filter #(not= (get % k) v) data))

(defn get-railway-data [[lat lon] rad]
  (let [d (/ rad 60)
       bbx [(- lon d) (- lat d) (+ lon d) (+ lat d)]]
  (vreset! OSM-DATA (railway-data bbx))))

(defn obsolete [[lat1 lon1] [lat2 lon2]]
  (or (> (Math/abs (- lat1 lat2)) 0.02)
     (> (Math/abs (- lon1 lon2)) 0.02)))

(defn tag-stat []
  (let [sta (for [t (tags @OSM-DATA)]
	(let [fl (filter-k t @OSM-DATA)]
	  [t (count fl)]))
        sta  (filter #(> (second %) 0) sta)]
  (sort second sta)))

