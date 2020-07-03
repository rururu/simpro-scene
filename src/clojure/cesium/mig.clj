(ns cesium.mig
(:use protege.core)
(:require
  [cesium.server :as cs]
  [czml.generator :as cg])
(:import
  ru.igis.omtab.OpenMapTab
  ru.igis.omtab.Clock
  ru.igis.omtab.OMT
  ru.igis.omtab.MapOb
  ru.igis.omtab.gui.RuMapMouseAdapter
  com.bbn.openmap.omGraphics.OMGraphic
  com.bbn.openmap.omGraphics.OMGraphicList
  com.bbn.openmap.proj.GreatCircle
  java.net.URL
  sim.field.geo.GeomVectorField
  sim.io.geo.ShapeFileImporter
  sim.util.geo.AttributeValue
  com.vividsolutions.jts.geom.Coordinate
  com.vividsolutions.jts.geom.GeometryFactory))
(def LAKES (volatile! {}))
(def RIVERS (volatile! {}))
(def H-JOKI {:layer "Hiitolanjoki Rivers"
  :head [29.346 61.444]
  :path [["NAME" "Hiitolanjoki"]
             ["NAME" "Kokkolanjoki2"]
             ["NAME" "Kokkolanjoki1"]
             ["NAME" "Veijalanjarvi"]
             ["NAME" "Asilanjoki"]]
  :estuary [29.885 61.18]
  :speed 2
  :gv-field RIVERS})
(def WPS [[29.919 61.161]
 [29.912 61.170]
 [29.918 61.174]
 [29.909 61.176]
 [29.912 61.180]
 [29.888 61.179]])
(def GeomFACTORY (GeometryFactory.))
(def POINTS (volatile! {}))
(def DTREE [[:N [:W :S] [:E :S]]
 [:S [:W :N] [:E :N]]
 [:W [:N :E] [:S :E]]
 [:E [:N :W] [:S :W]]
 [:NE [:NW :SW] [:SE :SW]]
 [:SW [:NW :NE] [:SE :NE]]
 [:NW [:SW :SE] [:NE :SE]]
 [:SE [:SW :NW] [:NE :NW]]])
(def SMAP {:N [0 1]
 :S [0 -1]
 :W [-1 0]
 :E [1 0]
 :NW [-1 1]
 :NE [1 1]
 :SW [-1 -1]
 :SE [1 -1]})
(defn set-points [pts inst]
  (let [pts (map #(str (MapOb/getDegMin (second %)) " " (MapOb/getDegMin (first %))) pts)]
  (ssvs inst "points" pts)))

(defn simple-dist [[lo1 la1] [lo2 la2]]
  (+ (Math/abs (- lo1 lo2)) (Math/abs (- la1 la2))))

(defn gv-field-from-shape
  ([shp]
  (let [dbf (str (.substring shp 0 (- (count shp) 4)) ".dbf")]
    (gv-field-from-shape (str "file:" shp) (str "file:" dbf))))
([shp dbf]
  (let [gvf (GeomVectorField.)]
    (ShapeFileImporter/read (URL. shp) (URL. dbf) gvf)
    gvf)))

(defn geoms-by-attrs [attrs vals gv-field]
  (map #(.geometry (.getGeometry gv-field %1 (AttributeValue. %2))) attrs vals))

(defn geoms-to-path
  ;; if finish, both start and finish added to path, else bare path
([geoms start finish]
  (concat [start] (geoms-to-path geoms start) [finish])) 
([geoms start]
  (let [lss (map #(.getCoordinates %) geoms)
         lss (map (fn[z] (map #(list (.x %) (.y %)) z)) lss)]
    (loop [[ps & rss] lss path [start]]
      (if (some? ps)
        (let [p1 (last path)
               p2 (first ps)
               p3 (last ps)
               d1 (simple-dist p1 p2)
               d2 (simple-dist p1 p3)
               nxt (if (< d2 d1)
                       (reverse ps)
                       ps)] 
          (recur rss (concat path nxt)))
        (rest path))))))

(defn insert-height [path height]
  (map #(list (first %) (second %) height) path))

(defn river-map [name]
  (or (@RIVERS name)
  (let [rinst (fifos "River" "title" name)
         lay (sv rinst "layer")
         ats (svs rinst "attrs")
         vls (svs rinst "values")
         gvf (gv-field-from-shape (sv lay "shapeFile"))
         mp {:layer (sv lay "prettyName")
                 :gv-field gvf
                 :geoms (geoms-by-attrs ats vls gvf)
                 :head (read-string (sv rinst "head"))
                 :estuary (read-string (sv rinst "estuary"))
                 :flow-speed (sv rinst "flow-speed")}]
    (vswap! RIVERS assoc name mp)
    mp)))

(defn lake-map [name]
  (or (@LAKES name)
  (let [linst (fifos "Lake" "title" name)
         lay (sv linst "layer")
         ats (svs linst "attrs")
         vls (svs linst "values")
         gvf (gv-field-from-shape (sv lay "shapeFile"))
         mp {:layer (sv lay "prettyName")
                 :gv-field gvf
                 :geoms (geoms-by-attrs ats vls gvf)}]
    (vswap! LAKES assoc name mp)
    mp)))

(defn rand-step [s]
  (- (* 2 s (Math/random)) s))

(defn rand-step-closer [step start finish]
  (let [d (Math/abs (- start finish))
       s (* (Math/random) step)]
  (cond
    (< d s) finish
    (< start finish) (+ start s)
    true (- start s))))

(defn next-closer [lo1 la1 lo2 la2 slon step]
  (let [lo3 (rand-step-closer slon lo1 lo2)
       la3 (rand-step-closer step la1 la2)]
  (cond
    (and (= lo3 lo2) (= la3 la2)) [lo3 la3]
    (and (not= lo3 lo2) (not= la3 la2)) [lo3 la3]
    (= lo3 lo2) [(+ lo3 (rand-step slon)) la3]
    (= la3 la2) [lo3 (+ la3 (rand-step step))])))

(defn random-walk-closer [start finish steps step]
  (let [phi (Math/toRadians (second start))
       slon (/ step (Math/cos phi))
       [lof laf] finish]
  (loop [n steps [los las] start path [start]]
    (if (> n 0)
      (let [[lon lan :as nxt] (next-closer los las lof laf slon step)
             newp (conj path nxt)]
        (if (and (== lon lof) (== lan laf))
          newp
          (recur (dec n) nxt newp)))
      path))))

(defn random-by-waypoints [wps limstp steps step]
  (let [rvs (< (rand) 0.5)
       wps (if rvs (reverse wps) wps)
       pth (loop [[s f & r :as ws] wps path []]
	  (cond
	    (> (count path) limstp)
	      path
	    (and s f)
	      (let [rwc1 (random-walk-closer s f steps step)]
	        (if (< (count rwc1) steps)
	          (recur (rest ws) (concat path rwc1))
	          (let [rwc2 (random-walk-closer f s steps step)]
	            (if (< (count rwc2) steps)
	              (recur (rest ws) (concat path (reverse rwc2)))
	              (recur (cons (last rwc1) (rest ws)) (concat path rwc1))))))
	    true
	      path))]
  (if rvs (reverse pth) pth)))

(defn go-geoms-path [id look knots geoms start finish]
  ;; returns time of going in sec and waypoints
;; if finish = nil, only bare path included in czml, else with added start and finish
(let [color (look :color)
       size (look :size)
       height (look :height)
       pth (if finish 
               (geoms-to-path geoms start finish)
               (geoms-to-path geoms start))
       wps [(first pth) (last pth)]
       pts (insert-height pth height)
       func-dist #(com.bbn.openmap.proj.GreatCircle/sphericalDistance %1 %2 %3 %4)
       mils (+ (Clock/getClock) 2000)
       [czml elt] (cg/add-point-flight id pts knots mils "RELATIVE_TO_GROUND" color size func-dist)]
  (vswap! POINTS assoc id pts)
  (cs/send-czml czml)
  [elt wps]))

(defn go-river [id look knots river direction]
  ;; returns time of going in sec and waypoints
(go-geoms-path id look
  (condp = direction
    :down (+ knots (river :flow-speed))
    :up knots)
  (condp = direction
    :down (river :geoms)
    :up (reverse (river :geoms)))
  (condp = direction
    :down (river :head)
    :up (river :estuary))
  (condp = direction
    :down (river :estuary)
    :up (river :head))))

(defn go-random-by-waypoints [id look knots wps limstp steps step]
  ;; returns time of going in sec and Nwps - 2 waypoints
(let [color (look :color)
       size (look :size)
       height (look :height)
       pth (random-by-waypoints wps limstp steps step)
       wpn (count wps)
       wps (take-nth wpn pth)
       wps (cond
                (< (count wps) 3) pth
                (= (last wps) (last pth)) wps
                true (concat wps [(last pth)]))
       pts (insert-height pth height)
       func-dist #(com.bbn.openmap.proj.GreatCircle/sphericalDistance %1 %2 %3 %4)
       mils (+ (Clock/getClock) 2000)
       [czml elt] (cg/add-point-flight id pts knots mils "RELATIVE_TO_GROUND" color size func-dist)]
  (vswap! POINTS assoc id pth)
  (cs/send-czml czml)
  [elt wps]))

(defn model-clock [clk scl]
  (let [stp (+ clk 3600000)
       start (cg/iso8601abs clk)
       stop (cg/iso8601abs stp)
       mult (int scl)
       cs {:animate true
              :start start
              :stop stop
              :current start
              :mult mult
              :step "SYSTEM_CLOCK_MULTIPLIER"
              :range "UNBOUNDED"}]
  (cs/send-clock cs)))

(defn clock-scale []
  [(Clock/getClock) (Clock/getTimeScale)])

(defn look [age look]
  (let [[c s] (condp = age
                 "child" [[0 255 0 255] 5]
                 "young" [[255 255 0 255] 7]
                 "adult" [[255 94 1 255] 9]
                 "old" [[220 20 60 255] 11])]
  (assoc look :color c :size s)))

(defn dms [x]
  (if (number? x)
  (MapOb/getDegMin x)
  (str (MapOb/getDegMin (first x))
        " "
        (MapOb/getDegMin (second x)))))

(defn make-region [pi mo [lat lon]]
  (if-let [p (OMT/getMapOb pi)]
  (OMT/removeMapOb p false))
(let [pp (svs pi "points")]
  (when (empty? pp)
    (ssv pi "latitude" (dms lat))
    (ssv pi "longitude" (dms lon)))
  (ssvs pi "points"
    (concat pp [(dms [lat lon])]))
  (OMT/getOrAdd pi)))

(defn set-onclick [fun]
  (let [pg0 (first (OMT/getPlaygrounds))
       rumma (proxy [RuMapMouseAdapter] []
                     (mouseLeftButtonClickedOn [mo llp runa]
                       (fun mo (seq llp))
                       (.manageGraphics pg0)
                       true))]
  (.setRuMapMouseAdapter pg0 rumma)))

(defn build-route [hm inst]
  (let [mp (into {} hm)]
  (set-onclick (partial make-region (mp "poly")))))

(defn walk-route-waypoints [wri]
  (let [poli (if (string? wri) 
               (fifos "OMTPoly" "label" wri)
               (sv wri "poly"))]
  (map #(let [[lag lam log lom] (.split % " ")]
                    [(MapOb/getDeg (str log " " lom))
                     (MapOb/getDeg (str lag " " lam))])
    (svs poli "points"))))

(defn rwrw []
  (def pts (random-by-waypoints (reverse (walk-route-waypoints "Sempelejarvi")) 1000 200 0.002))
(set-points pts (fifos "OMTPoly" "label" "p0"))
(def pts (random-by-waypoints (reverse (walk-route-waypoints "Sempelejarvi")) 1000 200 0.002))
(set-points pts (fifos "OMTPoly" "label" "p1"))
(def pts (random-by-waypoints (reverse (walk-route-waypoints "Sempelejarvi")) 1000 200 0.002))
(set-points pts (fifos "OMTPoly" "label" "p2"))
(def pts (random-by-waypoints (reverse (walk-route-waypoints "Sempelejarvi")) 1000 200 0.002))
(set-points pts (fifos "OMTPoly" "label" "p3")))

