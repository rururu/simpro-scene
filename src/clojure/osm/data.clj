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
(def SHOW true)
(defn unref [inst]
  (< (count (.getReferences inst)) 2))

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
  (if SHOW
    (OMT/getOrAdd egi))
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
    (when SHOW
      (OMT/getOrAdd noi)
      (println "Created Node from" (count egs) "edges."))
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

(defn connected-nodes
  ([hm inst]
  (if-let [n1 (sv inst "node")]
    (ssvs inst "nodes" (connected-nodes n1))
    (println "Fill node slot!")))
([n1]
  (letfn [(far-end [p1 e]
             (let [p [(sv e "x") (sv e "y")]
                    p2 [(sv e "x2") (sv e "y2")]]
                (if (> (simple-dist p1 p) (simple-dist p1 p2))
                  p1
                  p2)))]
    (let [p1 [(sv n1 "x") (sv n1 "y")]
          egs (svs n1 "edges")
          pts (map #(far-end p1 %) egs)]
      (map mk-node pts)))))

