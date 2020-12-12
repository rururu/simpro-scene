(ns osm.data
(:use protege.core) 
(:require
   [clojure.data.json :as json])
(:import
  ru.igis.omtab.MapOb
  ru.igis.omtab.OMT
  ru.igis.omtab.OMTPoly
  ru.igis.omtab.gui.RuMapMouseAdapter
  edu.stanford.smi.protege.ui.DisplayUtilities))
(def SRV-MAP {"KUMI"
  "https://overpass.kumi.systems/api/interpreter"
  "MAIN"
  "https://overpass-api.de/api/interpreter"
  "RUSSIAN"
  "https://overpass.openstreetmap.ru/api/interpreter"
  "FRENCH"
  "https://overpass.openstreetmap.ru/api/interpreter"
  "TAIWAN"
  "https://overpass.nchc.org.tw/api/interpreter"})
(def SERVER "https://overpass-api.de/api/interpreter")
(def OSM-DATA (volatile! []))
(def WAY-TYPE "railway")
(def WAY-SUBTYPE "rail")
(def MODE nil)
(def RMMA nil)
(def RADIUS ;; 50 meters
0.0005)
(def W-COLOR "FFFF0000")
(def F "FORWARD")
(def B "BACKWARD")
(def PATH [])
(defn unref [inst]
  (< (count (.getReferences inst)) 2))

(defn set-server [url]
  (def SERVER url))

(defn way-api-url [bbx way-type]
  (let [[w s e n] bbx]
  (str SERVER "?data=[out:json];(way[" way-type "](" s "," w "," n "," e "););out%20body;%3E;out%20skel%20qt;")))

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

(defn create-line [[id pts]]
  (let [id (str id)
       [[la1 lo1] [la2 lo2]] [(first pts) (last pts)]
       [lat1 lon1] [(MapOb/getDegMin la1) (MapOb/getDegMin lo1)]
       [lat2 lon2] [(MapOb/getDegMin la2) (MapOb/getDegMin lo2)]
       poi (foc "OMTPoly" "label" id)]
    (ssv poi "description" id)
    (ssv poi "latitude" lat1)
    (ssv poi "longitude" lon1)
    (ssv poi "lineColor" W-COLOR)
    (ssv poi "line" (fifos "Line" "label" "L3"))
    (ssvs poi "points" [(str lat1 " " lon1) (str lat2 " " lon2)])
    (OMT/getOrAdd poi)
    poi))

(defn shortest-dist [ips1 ips2]
  (if (not= ips1 ips2)
  (let [llp1 (second ips1)
         llp2 (second ips2)
         [[la11 lo11] [la12 lo12]] [(first llp1) (last llp1)]
         [[la21 lo21] [la22 lo22]] [(first llp2) (last llp2)]
         dis-var {(MapOb/distanceNM la11 lo11 la21 lo21) [B F]	;; f1 f2
                     (MapOb/distanceNM la11 lo11 la22 lo22) [B B]	;; f1 l2
                     (MapOb/distanceNM la12 lo12 la21 lo21) [F F]	;; l1 f2
                     (MapOb/distanceNM la12 lo12 la22 lo22) [F B]}	;; l1 l2
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

(defn create-dirway [[dir [id pts] lin]]
  (let [dw (crin "Dirway")
       way (foc "Way" "id" id)]
  (ssv way "poly" lin)
  (ssv way "source" (str (vec pts)))
  (ssv dw "direction" dir)
  (ssv dw "way" way)
  dw))

(defn add-way [llp]
  (println :MODE MODE)
(get-way-data (seq llp) RADIUS WAY-TYPE)
(if (nil? @OSM-DATA)
  (println :NO-DATA)
  (let [ipss (filter-data @OSM-DATA WAY-TYPE WAY-SUBTYPE)]
    (if (empty? ipss)
      (println "Try in other location..")
      (if (empty? PATH)
        (do (def PATH (vec (map #(vector nil % (create-line %)) ipss)))
          (println "Initial" (count PATH) "ways.."))
        (let [[ldir lips llin] (last PATH)
               [sdi [ld nd] ips :as short] (nearest-to lips ipss)]
          (if (nil? short)
            (println "No continuation!")
            (let [lin (create-line ips)]
              (def PATH         
                (if (= (count PATH) 1)
                  [[ld lips llin] [nd ips lin]]
                  (conj PATH [nd ips lin])))
              (println "In PATH" (count PATH) "ways..")))) )))))

(defn remove-way [mo]
  (println :MODE MODE)
(if-let [lp (last PATH)]
  (if (some? (first lp))
    (do (OMT/removeMapOb (nth lp 2) true)
      (def PATH (vec (butlast PATH)))
      (println "Remains" (count PATH) "ways..")) 
    (if (nil? mo)
      (println "Try again in other place of line..")
      (let [id (.getName mo)]
        (OMT/removeMapOb mo true)
        (def PATH (vec (filter #(not= (str (first (second %))) id) PATH)))
        (println "Removed from PATH way" id "," "remains" (count PATH)))))))

(defn hide-roads [hm inst]
  (if-let [sel (seq (DisplayUtilities/pickInstances nil *kb* [(cls "Road")]))]
  (doseq [rd sel]
    (doseq [dw (svs rd "dirways")]
       (OMT/removeMapOb 
         (-> (sv dw "way")
           (sv "poly"))
         false)))))

(defn in-bbx [[y x] [w s e n]]
  (and (> x w) (> y s) (< x e) (< x n)))

(defn show-bbx
  ([id [clat clon] rad]
  (show-bbx id [(- clon rad) (- clat rad) (+ clon rad) (+ clat rad)]))
([id [w s e n]]
(let [tsf (fn [[y x]]
               (str (MapOb/getDegMin y) " " (MapOb/getDegMin x)))
       id (str id)
       clat (MapOb/getDegMin (/ (+ s n) 2))
       clon (MapOb/getDegMin (/ (+ w e) 2))
       pts [[n w] [n e] [s e] [s w] [n w]]
       pts (map tsf pts)
       poi (foc "OMTPoly" "label" id)]
    (ssv poi "latitude" clat)
    (ssv poi "longitude" clon)
    (ssv poi "lineColor" "FF00AA00")
    ;; (ssv poi "line" (fifos "Line" "label" "L3"))
    (ssvs poi "points" pts)
    (OMT/getOrAdd poi)
    poi)))

(defn find-elements-with-beg-or-end-in-bbx
  ([[x y]]
  (find-elements-with-beg-or-end-in-bbx [x y] RADIUS WAY-TYPE WAY-SUBTYPE))
([[x y] wtype wsubtype]
  (if-let [ss (seq (find-elements-with-beg-or-end-in-bbx [x y] RADIUS wtype wsubtype))]
    ss
    (if-let [ss (seq (find-elements-with-beg-or-end-in-bbx [x y] (* 2 RADIUS) wtype wsubtype))]
      ss
      (if-let [ss (seq (find-elements-with-beg-or-end-in-bbx [x y] (* 4 RADIUS) wtype wsubtype))]
        ss
        (find-elements-with-beg-or-end-in-bbx [x y] (* 8 RADIUS) wtype wsubtype)))))
([[x y] rad wtype wsubtype]
  (let [dy rad
         dx (/ dy (Math/abs (Math/cos (Math/toRadians y))))
         bbx [(- x dx) (- y dy) (+ x dx) (+ y dy)]
         wda (way-data bbx wtype)
         fda (filter-data wda wtype wsubtype)
         fbe (filter #(or (in-bbx (first (second %)) bbx) (in-bbx (last (second %)) bbx)) (seq fda))]
    (show-bbx (gensym "bbx") bbx)
    (map #(cons (first %) (map reverse (second %))) fbe))))

(defn show-mapob [hm inst]
  (OMT/getOrAdd inst))

(defn hide-mapob [hm inst]
  (if-let[moi (fifos "MapOb" "label" (sv inst "label"))]
  (if-let [mo (OMT/getMapOb moi)]
    (OMT/removeMapOb mo false))))

(defn mk-edge [s]
  (let [egi (foc "Edge" "label" (str (first s)))
       crs (rest s)
       tsf (fn [[x y]] (str (MapOb/getDegMin y) " " (MapOb/getDegMin x)))]
  (ssv egi "x" (float (ffirst crs)))
  (ssv egi "y" (float (second (first crs))))
  (ssv egi "x2" (float (first (last crs))))
  (ssv egi "y2" (float (second (last crs))))
  (ssvs egi "xx" (map #(str (first %)) crs))
  (ssvs egi "yy" (map #(str (second %)) crs))
  (ssvs egi "points" (map tsf crs))
  (ssv egi "latitude" "0 0")
  (ssv egi "longitude" "0 0")
  (ssv egi "lineColor" "FFFF6800")
  (OMT/getOrAdd egi)
  egi))

(defn mk-node [[x y]]
  (if-let [sgs (seq (find-elements-with-beg-or-end-in-bbx [x y]))]
  (let [egs (map mk-edge sgs)
         noi (foc "Node" "label" (str "N" [x y]))]
    (ssv noi "x" (float x)) 
    (ssv noi "y" (float y)) 
    (ssv noi "latitude" (MapOb/getDegMin y))
    (ssv noi "longitude" (MapOb/getDegMin x))
    (ssv noi "lineColor" "FFFF6800")
    (ssv noi "point-radius" (int 6))
    (ssv noi "oval" true)
    (ssvs noi "edges" egs)
    (OMT/getOrAdd noi)
    (println "Created Node from" (count egs) "edges.")
    noi)))

(defn set-mouse-adapter []
  (let [rmma (proxy [RuMapMouseAdapter] []
	(mouseLeftButtonAction [mo llp runa]
                            (println MODE mo (seq llp) (.getName runa))
	  (condp = MODE
	    'ADD (add-way llp)
	    'REMOVE (remove-way mo)
                          'NODES (mk-node (reverse llp))
	    (println (or (if mo (.getName mo)) (seq llp))))
	  true))
       pgs (seq (OMT/getPlaygrounds))]
  (.setRuMapMouseAdapter (first pgs) rmma)
  rmma))

(defn mode-nodes [hm inst]
  (if (nil? RMMA)
  (set-mouse-adapter))
(let [mp (into {} hm)
       sel (seq (selection mp "tagvalue"))]
  (if (empty? sel)
    (ssv inst "status" "Select tagvalue for nodes!")
    (let [[wt wst] (read-string (sv (first sel) "value"))
          srv (SRV-MAP (sv inst "server"))]
      (set-server srv)
      (def WAY-TYPE wt)
      (def WAY-SUBTYPE wst)
      (def MODE 'NODES)
      (def RADIUS (sv inst "radius"))
      (ssv inst "status" "MODE NODES")
      (println :SERVER srv :WAY-TYPE wt :WAY-SUBTYPE wst)))))

(defn mode-add [hm inst]
  (if (nil? RMMA)
  (set-mouse-adapter))
(let [mp (into {} hm)
       sel (seq (selection mp "tagvalue"))]
  (if (empty? sel)
    (ssv inst "status" "Select tagvalue for ways!")
    (let [[wt wst] (read-string (sv (first sel) "value"))
          srv (SRV-MAP (sv inst "server"))]
      (set-server srv)
      (def WAY-TYPE wt)
      (def WAY-SUBTYPE wst)
      (def MODE 'ADD)
      (def RADIUS (sv inst "radius"))
      (ssv inst "status" "MODE ADD")
      (println :SERVER srv :WAY-TYPE wt :WAY-SUBTYPE wst)))))

(defn mode-remove [hm inst]
  (if (= MODE 'ADD)
  (do (def MODE 'REMOVE)
    (ssv inst "status" "MODE REMOVE"))
  (ssv inst "status" "Add ways before")))

(defn clear-path [hm inst]
  (def PATH [])
(ssv inst "status" "CLEAR"))

(defn show-roads [hm inst]
  (if-let [sel (seq (DisplayUtilities/pickInstances nil *kb* [(cls "Road")]))]
  (doseq [rd sel]
    (doseq [dw (svs rd "dirways")]
       (-> (sv dw "way")
         (sv "poly")
         OMT/getOrAdd)))))

(defn create-road [hm inst]
  (if (not (empty? PATH))
  (let [mp (into {} hm)
         ri (crin (mp "road-subclass"))]
    (ssv ri "from1" (mp "from1"))
    (ssv ri "to1" (mp "to1"))
    (ssvs ri "dirways" (map create-dirway PATH))
    (.show *prj* ri)
    (def MODE 'CREATE)
    (ssv inst "status" (str "MODE CREATE, in PATH " (count PATH) " ways.")))
  (ssv inst "status" "Add ways before!")))

(defn delete-unref [cls]
  (doseq [ins (cls-instances cls)]
  (when (unref ins)
    (delin ins)
    (print ".")))
(println))

(defn find-unref [cls]
  (doseq [ins (cls-instances cls)]
  (if (unref ins)
    (.show *prj* ins))))

