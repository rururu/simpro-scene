(ns cesium.mig
(:require
  [cesium.server :as cs]
  [czml.generator :as cg])
(:import
  ru.igis.omtab.OpenMapTab
  com.bbn.openmap.omGraphics.OMGraphic
  com.bbn.openmap.omGraphics.OMGraphicList
  com.bbn.openmap.proj.GreatCircle))
(def H-JOKI {:layer "Hiitolanjoki Rivers"
  :head [61.444 29.346]
  :path [["NAME" "Hiitolanjoki"]
             ["NAME" "Kokkolanjoki2"]
             ["NAME" "Kokkolanjoki1"]
             ["NAME" "Veijalanjarvi"]
             ["NAME" "Asilanjoki"]]
  :estuary [61.18 29.885]
  :speed 2})
(defn set-wsen-view [w s e n]
  (let [mb (OpenMapTab/getMapBean)
       prj (.getProjection mb)
       scl (.getScale mb)
       ul (.getUpperLeft prj)
       lr (.getLowerRight prj)
       [cw cs ce cn] [(.getX ul) (.getY lr) (.getX lr) (.getY ul)]]
 (if (or (> cw w) (> cs s) (> e ce) (> n cn))
   (let [celat (/ (+ s n) 2)
          celon (/ (+ w e) 2)]
     (.setCenter mb celat celon)
     (.setScale mb (* 1.2 scl))     
     (if (< (.getScale mb) 50000000)
       (set-wsen-view w s e n))))))

(defn from-shape-by-attributes [layer col-vals start height]
  (let [mb (OpenMapTab/getMapBean)
       start (map #(Math/toRadians %) start)
       cms (.getComponents mb)]
  (if-let [slr (first (filter #(= (.getName %) layer) cms))]
    (let [dbh (.getDbf (.getSpatialIndex slr))
           dbf (.getDbf dbh)
           lst (.getList slr)
           rad (loop [[[col val] & cvrst] col-vals path [start]]
                   (if (some? col)
                     (let [idx (.getColumnIndexForName dbf col)]
                       (if-let [epl (first (filter #(and (not (instance? OMGraphicList %))
                                                             (= (nth (.getRecordDataForOMGraphic dbh %) idx) val)) lst))]
                         (let [lla (.getRawllpts epl)
                                pa2 (partition 2 lla)
                                [p1 l1] (last path)
                                [p2 l2] (first pa2)
                                [p3 l3] (last pa2)
                                d1 (GreatCircle/sphericalDistance p1 l1 p2 l2)
                                d2 (GreatCircle/sphericalDistance p1 l1 p3 l3)
                                nxt (if (< d2 d1)
                                        (reverse pa2)
                                        pa2)] 
                           (recur cvrst (concat path nxt)))))
                     path))]
      (map #(let [[phi lam] %] [(Math/toDegrees lam) (Math/toDegrees phi) height]) rad)))))

(defn go-shape-attributes [id color size knots height start layer attrs]
  (let [pts (from-shape-by-attributes layer attrs start height)
       func-dist #(com.bbn.openmap.proj.GreatCircle/sphericalDistance %1 %2 %3 %4)
       czml (cg/add-point-flight id pts knots 2 "RELATIVE_TO_GROUND" color size func-dist)]
  (cs/send-czml czml)))

(defn go-river [id color size knots height river direction]
  (let [[lah loh] (river :head)
        [lae loe] (river :estuary)
        w (min lah lae)
        s (min loh loe)
        e (max loh loe)
        n (max lah lae)]
  (set-wsen-view w s e n)
  (go-shape-attributes id color size
    (condp = direction
      :down (+ knots (river :speed))
      :up (- knots (river :speed)))
    (or height 16)
    (condp = direction
      :down (river :head)
      :up (river :estuary))
    (river :layer)
    (condp = direction
      :down (river :path)
      :up (reverse (river :path))))))

