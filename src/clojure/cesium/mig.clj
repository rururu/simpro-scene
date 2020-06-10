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
  com.bbn.openmap.omGraphics.OMGraphic
  com.bbn.openmap.omGraphics.OMGraphicList
  com.bbn.openmap.proj.GreatCircle
  java.net.URL
  sim.field.geo.GeomVectorField
  sim.io.geo.ShapeFileImporter
  sim.util.geo.AttributeValue
  com.vividsolutions.jts.geom.Coordinate))
(def LAKES ["file:data/mas/hiitolanjoki/shape/hiitolanjoki_a.shp"
 "file:data/mas/hiitolanjoki/shape/hiitolanjoki_a.dbf"])
(def RIVERS ["file:data/mas/hiitolanjoki/shape/hiitolanjoki_l.shp"
 "file:data/mas/hiitolanjoki/shape/hiitolanjoki_l.dbf"])
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

(defn gv-field-from-shape [shp dbf]
  (let [gvf (GeomVectorField.)]
  (ShapeFileImporter/read (URL. shp) (URL. dbf) gvf)
  gvf))

(defn simple-dist [[lo1 la1 & _] [lo2 la2 & _]]
  (+ (Math/abs (- lo1 lo2)) (Math/abs (- la1 la2))))

(defn from-gv-field-by-attributes [gv-field col-vals start height]
  (loop [[[col val] & cvrst] col-vals path [(conj start height)]]
  (if (some? col)
    (let [ps (map #(list (.x %) (.y %) height) (.getCoordinates (.geometry (.getGeometry gv-field col (AttributeValue. val)))))
           p1 (last path)
           p2 (first ps)
           p3 (last ps)
           d1 (simple-dist p1 p2)
           d2 (simple-dist p1 p3)
           nxt (if (< d2 d1)
                   (reverse ps)
                   ps)] 
      (recur cvrst (concat path nxt)))
    path)))

(defn go-gv-field-attributes [id color size knots height start gv-field attrs]
  ;; returns time of going in sec
(let [pts (from-gv-field-by-attributes gv-field attrs start height)
       func-dist #(com.bbn.openmap.proj.GreatCircle/sphericalDistance %1 %2 %3 %4)
       mils (+ (Clock/getClock) 2000)
       [czml elt] (cg/add-point-flight id pts knots mils "RELATIVE_TO_GROUND" color size func-dist)]
  (cs/send-czml czml)
  elt))

(defn go-river [id color size knots height river direction]
  ;; returns time of going in sec
(let [[lah loh] (river :head)
        [lae loe] (river :estuary)
        gvf (river :gv-field)]
  (go-gv-field-attributes id color size
    (condp = direction
      :down (+ knots (river :speed))
      :up (- knots (river :speed)))
    (or height 16)
    (condp = direction
      :down (river :head)
      :up (river :estuary))
    (cond
      (instance? GeomVectorField gvf) gvf
      (vector? gvf) (gv-field-from-shape (first gvf) (second gvf)))
    (condp = direction
      :down (river :path)
      :up (reverse (river :path))))))

(defn model-clock []
  (let [run (OMT/isRunning)
       scl (Clock/getTimeScale)
       str (Clock/getClock)
       stp (+ str 3600000)
       start (cg/iso8601abs str)
       stop (cg/iso8601abs stp)
       sec (Clock/getSecond)
       mult (if run (int scl) 0)
       cs {:animate true
              :start start
              :stop stop
              :current start
              :mult mult
              :step "SYSTEM_CLOCK_MULTIPLIER"
              :range "UNBOUNDED"}]
  (cs/send-clock cs)))

(defn river-map [rinst]
  {:layer (sv (sv rinst "layer") "prettyName")
  :head (read-string (sv rinst "head"))
  :path (vec (map #(vector %1 %2) (svs rinst "attrs") (svs rinst "values")))
  :estuary (read-string (sv rinst "estuary"))
  :speed (sv rinst "river-speed")})

(defn rand-step [s]
  (- (* 2 s (Math/random)) s))

(defn next-covered
  ([lon lat slon step gv-field]
  (loop [i 4 sl slon st step]
    (if (> i 0)
      (if-let [ncvd (next-covered lon lat sl st 10 gv-field)]
        ncvd
        (recur (dec i) (* sl 2) (* st 2)))
      [lon lat])))
([lon lat slon step n gv-field]
  (loop [j n]
    (if (> j 0)
      (let [lon1 (+ lon (rand-step slon))
             lat1 (+ lat (rand-step step))]
        (if (.isCovered gv-field (Coordinate. lon1 lat1))
          [lon1 lat1]
          (recur (dec j))))))))

(defn random-walk [start steps step height gv-field]
  (let [phi (Math/toRadians (second start))
       slon (/ step (Math/cos phi))]
  (println slon step)
  (loop [n steps [lon lat] start path [(conj start height)]]
    (if (> n 0)
      (let [nxt (next-covered lon lat slon step gv-field)]
        (recur (dec n) nxt (conj path (conj nxt height))))
      path))))

(defn set-points [pts inst]
  (let [pts (map #(str (MapOb/getDegMin (second %)) " " (MapOb/getDegMin (first %))) pts)]
  (ssvs inst "points" pts)))

(defn go-random-walk [id color size knots height start steps step gv-field]
  ;; returns time of going in sec
(let [pts (random-walk start steps step height gv-field)
       func-dist #(com.bbn.openmap.proj.GreatCircle/sphericalDistance %1 %2 %3 %4)
       mils (+ (Clock/getClock) 2000)
       [czml elt] (cg/add-point-flight id pts knots mils "RELATIVE_TO_GROUND" color size func-dist)]
  (cs/send-czml czml)
  elt))

