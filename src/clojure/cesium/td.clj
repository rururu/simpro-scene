(ns cesium.td
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
  com.vividsolutions.jts.geom.GeometryFactory
  ec.util.MersenneTwisterFast
  sim.util.distribution.Normal
  sim.util.distribution.Uniform))
(def TRACES (volatile! {}))
(defn clock-scale []
  [(Clock/getClock) (Clock/getTimeScale)])

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

(defn simple-dist [[lo1 la1] [lo2 la2]]
  (+ (Math/abs (- lo1 lo2)) (Math/abs (- la1 la2))))

(defn geoms-to-path [geoms start]
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
        (rest path)))))

(defn insert-height [path height]
  (map #(list (first %) (second %) height) path))

(defn go-route [id pts spd]
  (if-let [mo (OMT/getMapOb id)]
  (let [rte (map #(let [[lon lat _] %] [lat lon]) pts)
         rte (flatten rte)
         rte (double-array rte)
         [lon lat _] (first pts)]
    (.stopRoute mo)
    (.setLocation mo (double lat) (double lon))
    (.goRoute mo rte)
    (.setSpeed mo (double spd)))))

(defn go-geoms-path [id look knots height geoms incz inom start]
  ;; returns time of going in sec and waypoints
;; if finish = nil, only bare path included in czml, else with added start and finish
(let [color (look :color)
       size (look :size)
       pth (geoms-to-path geoms start)
       pts (insert-height pth height)
       func-dist #(com.bbn.openmap.proj.GreatCircle/sphericalDistance %1 %2 %3 %4)
       mils (+ (Clock/getClock) 2000)
       [czml elt] (cg/add-point-flight id pts knots mils "RELATIVE_TO_GROUND" color size func-dist)]
  (vswap! TRACES assoc id pts)
  (if (and (is? incz) (some? cs/SERV))
    (cs/send-czml czml))
  (if (is? inom)
    (go-route id pts knots))
  elt))

(defn go-pathway [obj paw spd hgt icz iom dir look]
  (let [spd (if (string? spd) (read-string spd) spd)
       dir (if (string? dir) (read-string dir) dir)
       look (if (string? look) (read-string look) look)
       hgt (if (string? hgt) (read-string hgt) hgt)
       id (sv obj "label")
       lay (sv paw "layer")
       ats (svs paw "attributes")
       vls (svs paw "values")
       vtp (sv paw "value-type")
       str (read-string (sv paw "start"))
       fin (read-string (sv paw "finish"))
       ats (map #(sv % "title") ats)
       gvf (gv-field-from-shape (sv lay "shapeFile"))
       vls (condp = vtp
              "INTEGER" (map #(int (read-string %)) vls)
              "DOUBLE" (map #(double (read-string %)) vls)
              vls)
       geoms (geoms-by-attrs ats vls gvf)
       geoms (condp = dir
                    :forward geoms
                    :backward (reverse geoms))
       start (condp = dir
                  :forward str
                  :backward fin)]
  (def GVF gvf)
  (go-geoms-path id look spd hgt geoms icz iom start)))

(defn get-geometry [attr value gvf valtyp]
  (condp = valtyp
  :int (.getGeometry gvf attr (AttributeValue. (int value)))
  :double (.getGeometry gvf attr (AttributeValue. (double value)))
  (.getGeometry gvf attr (AttributeValue. value))))

