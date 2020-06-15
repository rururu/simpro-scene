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
(defn set-points [pts inst]
  (let [pts (map #(str (MapOb/getDegMin (second %)) " " (MapOb/getDegMin (first %))) pts)]
  (ssvs inst "points" pts)))

(defn gv-field-from-shape
  ([shp]
  (let [dbf (str (.substring shp 0 (- (count shp) 4)) ".dbf")]
    (gv-field-from-shape (str "file:" shp) (str "file:" dbf))))
([shp dbf]
  (let [gvf (GeomVectorField.)]
    (ShapeFileImporter/read (URL. shp) (URL. dbf) gvf)
    gvf)))

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

(defn rand-step [s]
  (- (* 2 s (Math/random)) s))

(defn rand-step-closer [step start finish]
  (let [d (Math/abs (- start finish))
       s (* (Math/random) step)]
  (cond
    (< d s) finish
    (< start finish) (+ start s)
    true (- start s))))

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

(defn next-covered-closer [lo1 la1 lo2 la2 slon step gv-field]
  (let [lo3 (rand-step-closer slon lo1 lo2)
       la3 (rand-step-closer step la1 la2)]
  (if (.isCovered gv-field (Coordinate. lo3 la3))
    [lo3 la3]
    (next-covered lo1 la1 slon step gv-field))))

(defn random-walk [start steps step height gv-field]
  (let [phi (Math/toRadians (second start))
       slon (/ step (Math/cos phi))]
  (loop [n steps [lon lat] start path [(conj start height)]]
    (if (> n 0)
      (let [nxt (next-covered lon lat slon step gv-field)]
        (recur (dec n) nxt (conj path (conj nxt height))))
      path))))

(defn random-walk-closer [start finish steps step height gv-field]
  (let [phi (Math/toRadians (second start))
       slon (/ step (Math/cos phi))
       [lof laf] finish]
  (loop [n steps [los las] start path [(conj start height)]]
    (if (> n 0)
      (let [[lor lar] (next-covered los las slon step gv-field)
             [lon lan :as nxt] (next-covered-closer lor lar lof laf slon step gv-field)
             newp (conj path (conj nxt height))]
        (if (and (== lon lof) (== lan laf))
          newp
          (recur (dec n) nxt newp)))
      path))))

(defn random-by-waypoints [wps limstp steps step height gv-field]
  (loop [[s f & r :as ws] wps path []]
  (cond
    (> (count path) limstp)
      path
    (and s f)
      (let [rwc1 (random-walk-closer s f steps step height gv-field)]
        (if (< (count rwc1) steps)
          (recur (rest ws) (concat path rwc1))
          (let [rwc2 (random-walk-closer f s steps step height gv-field)]
            (if (< (count rwc2) steps)
              (recur (rest ws) (concat path (reverse rwc2)))
              (recur (cons (last rwc1) (rest ws)) (concat path rwc1))))))
    true
      path)))

(defn go-gv-field-attributes [id color size knots height start gv-field attrs]
  ;; returns time of going in sec
(let [pts (from-gv-field-by-attributes gv-field attrs start height)
       func-dist #(com.bbn.openmap.proj.GreatCircle/sphericalDistance %1 %2 %3 %4)
       mils (+ (Clock/getClock) 2000)
       [czml elt] (cg/add-point-flight id pts knots mils "RELATIVE_TO_GROUND" color size func-dist)]
  (cs/send-czml czml)
  elt))

(defn go-random-walk [id color size knots height start steps step gv-field]
  ;; returns time of going in sec and 6 waypoints
(let [pts (random-walk start steps step height gv-field)
       func-dist #(com.bbn.openmap.proj.GreatCircle/sphericalDistance %1 %2 %3 %4)
       mils (+ (Clock/getClock) 2000)
       [czml elt] (cg/add-point-flight id pts knots mils "RELATIVE_TO_GROUND" color size func-dist)
       k (max 2 (int (/ (count pts) 5)))
       wps (concat [(first pts)] (take-nth k pts) [(last pts)])]
  (cs/send-czml czml)
  [elt wps]))

(defn go-river
  ;; returns time of going in sec
([inst knots height river direction]
  (let [id (protege.core/sv inst "id")
         color (read-string (protege.core/sv inst "color"))
         size (protege.core/sv inst "size")]
    (go-river id color size knots height river direction)))
([id color size knots height river direction]
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
      (river :gv-field)
      (condp = direction
        :down (river :path)
        :up (reverse (river :path)))))))

(defn go-lakes-walk
  ([inst knots height start steps step lakes]
  (let [id (protege.core/sv inst "id")
         color (read-string (protege.core/sv inst "color"))
         size (protege.core/sv inst "size")]
    (go-lakes-walk id color size knots height start steps step lakes)))
([id color size knots height start steps step lakes]
  (go-random-walk id color size knots height start steps step (lakes :gv-field))))

(defn go-lakes-by-waypoints
  ;; returns time of going in sec
([inst knots height wps limstp steps step lakes]
  (let [id (protege.core/sv inst "id")
         color (read-string (protege.core/sv inst "color"))
         size (protege.core/sv inst "size")]
    (go-lakes-by-waypoints id color size knots height wps limstp steps step height (lakes :gv-field))))
([id color size knots height wps limstp steps step gv-field]
  (let [wps (random-by-waypoints wps limstp steps step height gv-field)
         func-dist #(com.bbn.openmap.proj.GreatCircle/sphericalDistance %1 %2 %3 %4)
         mils (+ (Clock/getClock) 2000)
         [czml elt] (cg/add-point-flight id wps knots mils "RELATIVE_TO_GROUND" color size func-dist)]
    (cs/send-czml czml)
   elt)))

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
  (let [name (sv rinst "title")]
  (or (@RIVERS name)
    (let [lay (sv rinst "layer")
           mp {:layer (sv lay "prettyName")
                   :head (read-string (sv rinst "head"))
                   :path (vec (map #(vector %1 %2) (svs rinst "attrs") (svs rinst "values")))
                   :estuary (read-string (sv rinst "estuary"))
                   :speed (sv rinst "river-speed")
                   :gv-field (gv-field-from-shape (sv lay "shapeFile"))}]
      (vswap! RIVERS assoc name mp)
      mp))))

(defn lakes-map [linst]
  (let [name (sv linst "title")]
  (or (@LAKES name)
    (let [lay (sv linst "layer")
           mp {:layer (sv lay "prettyName")
                   :gv-field (gv-field-from-shape (sv lay "shapeFile"))}]
      (vswap! LAKES assoc name mp)
      mp))))

