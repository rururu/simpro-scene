(ns cesium.migra
(:import
  ru.igis.omtab.OpenMapTab
  com.bbn.openmap.omGraphics.OMGraphic
  com.bbn.openmap.omGraphics.OMGraphicList))
(defn from-shape-by-attributes [layer column value]
  (let [mb (OpenMapTab/getMapBean)
       cms (.getComponents mb)
       slr (first (filter #(= (.getName %) layer) cms))
       dbh (.getDbf (.getSpatialIndex slr))
       dbf (.getDbf dbh)
       idx (.getColumnIndexForName dbf column)
       lst (.getList slr)
       _ (doseq [e lst] (println (.getRecordDataForOMGraphic dbh e)))
       flt (filter #(and (not (instance? OMGraphicList %))
                         (= (nth (.getRecordDataForOMGraphic dbh %) idx) value)) lst)]
  flt))

