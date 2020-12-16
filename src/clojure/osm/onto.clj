(ns osm.onto
(:use protege.core) 
(:require
  [osm.func :as f])
(:import
  ru.igis.omtab.MapOb
  ru.igis.omtab.OMT
  ru.igis.omtab.OMTPoly
  ru.igis.omtab.gui.RuMapMouseAdapter
  edu.stanford.smi.protege.ui.DisplayUtilities))
(def KIND "way")
(def KIND-TYPE "railway")
(def KIND-SUBTYPE "rail")
(def RADIUS ;; 50 meters
0.0005)
(def defonceMODE (defonce MODE nil))
(def defoncePATH (defonce PATH []))
(def defonceRMMA (defonce RMMA nil))
(defn unref [inst]
  (< (count (.getReferences inst)) 2))

(defn find-unref [cls]
  (doseq [ins (cls-instances cls)]
  (if (unref ins)
    (.show *prj* ins))))

(defn delete-unref [cls]
  (doseq [ins (cls-instances cls)]
  (when (unref ins)
    (delin ins)
    (print ".")))
(println))

(defn create-line [[id pts]]
  (let [id (str id)
       [[la1 lo1] [la2 lo2]] [(first pts) (last pts)]
       [lat1 lon1] [(MapOb/getDegMin la1) (MapOb/getDegMin lo1)]
       [lat2 lon2] [(MapOb/getDegMin la2) (MapOb/getDegMin lo2)]
       poi (foc "OMTPoly" "label" id)]
    (ssv poi "description" id)
    (ssv poi "latitude" lat1)
    (ssv poi "longitude" lon1)
    (ssv poi "lineColor" "FF009900")
    (ssv poi "line" (fifos "Line" "label" "L3"))
    (ssvs poi "points" [(str lat1 " " lon1) (str lat2 " " lon2)])
    (OMT/getOrAdd poi)
    poi))

(defn create-dirway [[dir [id pts] lin]]
  (let [dw (crin "Dirway")
       way (foc "Way" "id" id)]
  (ssv way "poly" lin)
  (ssv way "source" (str (vec pts)))
  (ssv dw "direction" dir)
  (ssv dw "way" way)
  dw))

(defn get-control-center []
  (fainst (cls-instances "RoadControl") nil))

(defn get-kind []
  (or (sv (get-control-center) "kind") KIND))

(defn get-kind-type []
  (if-let [tvi (sv (get-control-center) "tagvalue")]
  (first (read-string (sv tvi "value")))
  KIND-TYPE))

(defn get-kind-subtype []
  (if-let [tvi (sv (get-control-center) "tagvalue")]
  (second (read-string (sv tvi "value")))
  KIND-SUBTYPE))

(defn get-radius []
  (or (sv (get-control-center) "radius") RADIUS))

(defn get-server []
  (if-let [srv (sv (get-control-center) "server")]
  (f/SRV-MAP srv)
  f/SERVER))

(defn is-show? []
  (is? (sv (get-control-center) "show")))

(defn add-way [llp]
  (println :MODE MODE)
(let [k (get-kind)
       kt (get-kind-type)
       kst (get-kind-subtype)
       rad (get-radius)
       box (f/bbx (reverse llp) rad)
       oda (f/osm-data box k kt)
       ipss (f/filter-data oda k kt kst)]
  (if (empty? ipss)
    (println "Try in other location..")
    (if (empty? PATH)
      (do (def PATH (vec (map #(vector nil % (create-line %)) ipss)))
        (println "Initial" (count PATH) "ways.."))
      (let [[ldir lips llin] (last PATH)
             [sdi [ld nd] ips :as short] (f/nearest-to lips ipss)]
        (if (nil? short)
          (println "No continuation!")
          (let [lin (create-line ips)]
            (def PATH         
              (if (= (count PATH) 1)
                [[ld lips llin] [nd ips lin]]
                (conj PATH [nd ips lin])))
            (println "In PATH" (count PATH) "ways.."))) ) ))))

(defn create-dirway [[dir [id pts] lin]]
  (let [dw (crin "Dirway")
       way (foc "Way" "id" (str id))]
  (ssv way "poly" lin)
  (ssv way "source" (str (vec pts)))
  (ssv dw "direction" dir)
  (ssv dw "way" way)
  dw))

(defn star-points [noi]
  (letfn [(far-end [p1 e]
             (let [p [(sv e "x") (sv e "y")]
                    p2 [(sv e "x2") (sv e "y2")]]
                (if (> (f/simple-dist p1 p) (f/simple-dist p1 p2))
                  p1
                  p2)))]
  (let [p1 [(sv noi "x") (sv noi "y")]
         egs (svs noi "edges")]
    (map #(far-end p1 %) egs))))

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

(defn mk-edge [iLine]
  (let [egi (foc "Edge" "label" (str (first iLine)))
       ps (rest iLine)
       tsf (fn [[x y]] (str (MapOb/getDegMin y) " " (MapOb/getDegMin x)))]
  (ssv egi "x" (float (ffirst ps)))
  (ssv egi "y" (float (second (first ps))))
  (ssv egi "x2" (float (first (last ps))))
  (ssv egi "y2" (float (second (last ps))))
  (ssvs egi "xx" (map #(str (first %)) ps))
  (ssvs egi "yy" (map #(str (second %)) ps))
  (ssvs egi "points" (map tsf ps))
  (ssv egi "latitude" "0 0")
  (ssv egi "longitude" "0 0")
  (ssv egi "lineColor" "FFFF6800")
  (if (is-show?)
    (OMT/getOrAdd egi))
  egi))

(defn mk-node [xy]
  (if-let [ils (seq (f/iLines-with-beg-or-end-in-bbx 
                           xy (get-radius) (get-kind) (get-kind-type) (get-kind-subtype)))]
  (let [ils (f/sort-iLines xy ils)
         egs (map mk-edge ils)
         ned (f/nearest-end xy (first ils))
         noi (foc "Node" "label" (str "N" ned))
         [x y] ned]
    (ssv noi "x" (float x)) 
    (ssv noi "y" (float y)) 
    (ssv noi "latitude" (MapOb/getDegMin y))
    (ssv noi "longitude" (MapOb/getDegMin x))
    (ssv noi "lineColor" "FFFF6800")
    (ssv noi "point-radius" (int 6))
    (ssv noi "oval" true)
    (ssvs noi "edges" egs)
    (when (is-show?)
      (OMT/getOrAdd noi)
      (println "Created Node from" (count egs) "edges."))
    noi)
  (when (is-show?)
    (println "No edges")
    nil)))

(defn show-mapob [hm inst]
  (OMT/getOrAdd inst))

(defn show-node [hm inst]
  (show-mapob nil inst)
(doseq [egi (svs inst "edges")]
 (show-mapob nil egi)))

(defn hide-mapob [hm inst]
  (if-let[moi (fifos "MapOb" "label" (sv inst "label"))]
  (if-let [mo (OMT/getMapOb moi)]
    (OMT/removeMapOb mo false))))

(defn hide-node [hm inst]
  (hide-mapob nil inst)
(doseq [egi (svs inst "edges")]
 (hide-mapob nil egi)))

(defn mode-nodes [hm inst]
  (if (nil? RMMA)
  (def RMMA (set-mouse-adapter)))
(let [srv (get-server)]
  (f/set-server srv)
  (def MODE 'NODES)
  (ssv inst "status" (str "MODE " MODE))
  (println 
    :MODE MODE 
    :SERVER srv
    :KIND (get-kind)
    :TAGS (get-kind-type) (get-kind-subtype) 
    :RADIUS (get-radius))))

(defn mode-add [hm inst]
  (if (nil? RMMA)
  (def RMMA (set-mouse-adapter)))
(let [srv (get-server)]
  (f/set-server srv)
  (def MODE 'ADD)
  (ssv inst "status" (str "MODE " MODE))
  (println 
    :MODE MODE 
    :SERVER srv
    :KIND (get-kind)
    :TAGS (get-kind-type) (get-kind-subtype) 
    :RADIUS (get-radius))))

(defn mode-remove [hm inst]
  (if (= MODE 'ADD)
  (do (def MODE 'REMOVE)
    (ssv inst "status" "MODE REMOVE"))
  (ssv inst "status" "Add ways before")))

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

(defn clear-path [hm inst]
  (def PATH [])
(ssv inst "status" "CLEAR"))

(defn show-roads [hm inst]
  (if-let [sel (seq (DisplayUtilities/pickInstances nil *kb* [(cls "RoadSubclasses")]))]
  (doseq [rd sel]
    (doseq [dw (svs rd "dirways")]
       (-> (sv dw "way")
         (sv "poly")
         OMT/getOrAdd)))))

(defn hide-roads [hm inst]
  (if-let [sel (seq (DisplayUtilities/pickInstances nil *kb* [(cls "RoadSubclasses")]))]
  (doseq [rd sel]
    (doseq [dw (svs rd "dirways")]
       (OMT/removeMapOb 
         (-> (sv dw "way")
           (sv "poly"))
         false)))))

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

(defn connected-nodes [hm inst]
  (if-let [noi (sv inst "node")]
  (ssvs inst "nodes" (map mk-node (star-points noi)))
  (println "Fill node slot!")))

