(ns zd
(:use 
  protege.core
  a
  [navobs.commands :as nc])
(:import 
  ru.igis.omtab.Clock
  ru.igis.omtab.OMT
  ru.igis.omtab.Link))
(defn hit-or-miss [atk tps pbs]
  (let [typ (sv atk "type")]
  (loop [tt tps pp pbs]
    (if (seq pp)
      (if (= typ (first tt))
        (if (< (Math/random) (first pp))
	"HIT"
	"FREE")
        (recur (rest tt) (rest pp)))
      "FREE"))))

(defn ray-on [atk zob]
  (let [moa (OMT/getMapOb atk)
       moz (OMT/getMapOb zob)]
  (if (and moa moz)
    (let [pg (.getPlayground moz)
           nam (str (.getName moz) "-" (.getName moa))
           col "FFFF0000"
           lnk (Link. nam moz moa col nil)]
      (OMT/addMapOb lnk pg)))))

(defn ray-off [atk zob]
  (let [moa (OMT/getMapOb atk)
       moz (OMT/getMapOb zob)]
  (if (and moa moz)
    (let [name (str (.getName moz) "-" (.getName moa))]
      (if-let [lnk (OMT/getMapOb name)]
        (OMT/removeMapOb lnk false))))))

(defn yellow [ars zob]
  (doseq [ar ars]
  (when-let [mo (OMT/getMapOb ar)]
    (.setLinePaint (.getLocationMarker mo) java.awt.Color/YELLOW)
    (if-let [moz (OMT/getMapOb zob)]
      (let [zone (.getName mo)]
        (navobs.commands/pump-in-evt
	{:event :update-zone
	 :base (.getName moz)
	 :zone zone
	 :options {:color "#ffff00"}})) ))))

(defn on-tow [mob area]
  (if-let [amo (OMT/getOrAdd area)]
  (.onTow mob amo 0 0 false)))

(defn segment-contains? [ar1 moa moz dis]
  (if (> dis (sv ar1 "radius"))
  (let [ext (sv ar1 "extent")
         ang (sv ar1 "angle")
         an2 (+ ang ext)
         an2 (cond
	(> an2 360) (- an2 360)
	(< an2 0) (+ an2 360)
	true an2)
         bear (.bearingsDeg moz moa)]
    (or (and (> an2 ang) (>= bear ang) (<= bear an2))
         (and (> ang an2) (or (>= bear ang) (<= bear an2))) ))))

(defn areas-contain? [areas atk zob dis]
  (let [moa (OMT/getMapOb atk)
       moz (OMT/getMapOb zob)
       [ar1 ar2] (seq areas)]
  (if (and moa (.isVisible moa) (.near moa moz dis)) 
    (if ar2 
      (segment-contains? ar1 moa moz dis)
      (if (= (.getName (.getDirectType ar1)) "OMTArc")
        (.contains (OMT/getMapOb ar1) moa)
        true)))))

(defn create-channels [tit zos chn]
  (letfn [(mk-channel [n]
	(let [chn (str tit n)
	       frm (list 'Channel 'title chn 'status "FREE")]
	  (rete.core/assert-frame frm)
	  chn))]
  (when-let [mo (OMT/getMapOb zos)]
    (.putAttribute mo "CHANNELS_NUMBER" chn)
    (map mk-channel (range chn)))))

(defn zone-destroyed? [zob ars]
  (if (if-let [mo (OMT/getMapOb zob)]
	(= (.getAttribute mo "STATUS") "DESTROYED")
	true)
  (do (doseq [ar ars]
	(if-let [amo (OMT/getMapOb ar)]
	  (OMT/removeMapOb ar false)))
      true)))

(defn coverage [areas]
  (if-let [[ar1 ar2] (seq areas)]
  (if (nil? ar2)
    (sv ar1 "radius")
    (sv ar2 "radius"))
  0))

(defn reduce-composite [atk cmp zob cli]
  (let [moa (OMT/getMapOb atk)]
    ;;(zd/upd-display-suffix moa cmp)
    (es-mess (str (sv atk "label") ": состав " cmp) nil 3 cli) 
    (.putAttribute moa "REMAIN" cmp)
    (when (< cmp 1)
      (ray-off atk zob)
      (.setSpeed moa 0.0)
      (.setVisible moa false)
      (.putAttribute moa "STATUS" "DESTROYED"))))

