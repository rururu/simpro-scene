(ns cesium.mig
(:import
  ru.igis.omtab.OpenMapTab
  com.bbn.openmap.omGraphics.OMGraphic
  com.bbn.openmap.omGraphics.OMGraphicList
  com.bbn.openmap.proj.GreatCircle))
(def HJ [["NAME" "Hiitolanjoki"]
 ["NAME" "Kokkolanjoki2"]
 ["NAME" "Kokkolanjoki1"]
 ["NAME" "Veijalanjarvi"]
 ["NAME" "Asilanjoki"]])
(defn from-shape-by-attributes [layer height col-vals start]
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

