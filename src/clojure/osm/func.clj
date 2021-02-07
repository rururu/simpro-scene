(ns osm.func
(:require
   [clojure.data.json :as json]))
(def SRV-MAP {"KUMI"
  "https://overpass.kumi.systems/api/interpreter"
  "MAIN"
  "https://overpass-api.de/api/interpreter"
  "RUSSIAN"
  "https://overpass.openstreetmap.ru/api/interpreter"
  "FRENCH"
  "https://overpass.openstreetmap.fr/api/interpreter"
  "TAIWAN"
  "https://overpass.nchc.org.tw/api/interpreter"})
(def SERVER "https://overpass-api.de/api/interpreter")
(def URL nil)
(def DATA nil)
(defn bbx [[x y] rad]
  (let [dy rad
       dx (/ dy (Math/abs (Math/cos (Math/toRadians y))))]
  [(- x dx) (- y dy) (+ x dx) (+ y dy)]))

(defn in-bbx [[y x] [w s e n]]
  (and (> x w) (> y s) (< x e) (< y n)))

(defn simple-dist [[x1 y1] [x2 y2]]
  (let [sx (- x2 x1)
       sy (- y2 y1)]
  (Math/sqrt (+ (* sx sx) (* sy sy)))))

(defn simple-dir [[x1 y1] [x2 y2]]
  ;; Result fom -Pi to Pi
(let [sx (- x2 x1)
       sy (- y2 y1)]
  (Math/atan2 sy sx)))

(defn set-server [url]
  (def SERVER url))

(defn osm-api-url [bbx kind kind-type]
  (let [[w s e n] bbx]
  (str SERVER 
        "?data=[out:json];(" 
        kind 
        "["
        kind-type 
        "](" 
        s 
        "," 
        w
        ","
        n
        ","
        e 
        "););out%20body;%3E;out%20skel%20qt;")))

(defn osm-data [bbx kind kind-type]
  (try
  (let [url (osm-api-url bbx kind kind-type)
         ;;_ (println :URL url)
         jsn (json/read-str (slurp url) :key-fn keyword)]
      jsn)
  (catch Exception e
    (println (.getMessage e))
    (try
      (def URL (osm-api-url bbx kind kind-type))
      (def DATA (slurp URL))   
      (json/read-str DATA :key-fn keyword)
      (catch Exception e
        (println (.getMessage e))
        nil))
    nil)))

(defn tags [data]
  (sort (set (mapcat keys data))))

(defn filter-kk [kk data]
  (filter #(some? (get-in % kk)) data))

(defn filter-kkv [kk v data]
  (filter #(= (get-in % kk) v) data))

(defn filter-kkv-not [kk v data]
  (filter #(not= (get-in % kk) v) data))

(defn tag-stat [odata]
  (let [sta (for [t (tags odata)]
	(let [fl (filter-kk t odata)]
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

(defn id-osm-points [idp ways]
  (reduce #(assoc %1 
	     (:id %2) 
	     (map (fn[x] (idp x)) (:nodes %2))) 
	{} ways))

(defn filter-data [data kind kind-type kind-subtype]
  (if-let [els (seq (:elements data))]
  (let [idp (id-points (nodes data))]
    (->> (filter-kkv [:type] kind els)
      (filter-kkv [:tags (keyword kind-type)] kind-subtype)
      (id-osm-points idp)))))

(defn iLines-with-beg-or-end-in-bbx [[x y] rad kind kind-type kind-subtype]
  ;; iLine = (id (x1 y1) (x2 y2)...)
(let [box (bbx [x y] rad)
       oda (osm-data box kind kind-type)
       fda (filter-data oda kind kind-type kind-subtype)
       fbe (filter #(or (in-bbx (first (second %)) box) (in-bbx (last (second %)) box)) (seq fda))]
  (map #(cons (first %) (map reverse (second %))) fbe)))

(defn shortest-dist [ips1 ips2]
  (if (not= ips1 ips2)
  (let [llp1 (second ips1)
         llp2 (second ips2)
         [f1 l1] [(first llp1) (last llp1)]
         [f2 l2] [(first llp2) (last llp2)]
         dis-var {(simple-dist f1 f2) ["BACKWARD" "FORWARD"]
                       (simple-dist f1 l2) ["BACKWARD" "BACKWARD"]
                       (simple-dist l1 f2) ["FORWARD" "FORWARD"]
                       (simple-dist l1 l2) ["FORWARD" "BACKWARD"]}
        sdi (apply min (keys dis-var))
        dir (dis-var sdi)]
    [sdi dir ips2])))

(defn nearest-to [ips from]
  (loop [pool (rest from) sdi-dir-ips (shortest-dist ips (first from))]
  (cond
    (empty? pool) sdi-dir-ips
    (nil? sdi-dir-ips)
      (recur (rest (rest pool)) (shortest-dist ips (first (rest from))))
    (= ips (first pool)) (recur (rest pool) sdi-dir-ips)
    true
      (let [[nsdi ndir nips :as short] (shortest-dist ips (first pool))]
        (if (< nsdi (first sdi-dir-ips))
          (recur (rest pool) short)
          (recur (rest pool) sdi-dir-ips))))))

(defn sort-iLines [xy iLines]
  (let [mindis (fn[ps] (min (simple-dist xy (first ps)) (simple-dist xy (last ps))))
       lst1 (map #(cons (mindis (rest %)) (cons (first %) (rest %))) iLines)
       lst2 (sort-by first lst1)]
  (map rest lst2)))

(defn nearest-end [xy iLine]
  (if (< (simple-dist xy (second iLine)) (simple-dist xy (last iLine)))
  (second iLine)
  (last iLine)))

