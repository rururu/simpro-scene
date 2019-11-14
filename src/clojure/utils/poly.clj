(ns utils.poly
(:use 
  protege.core)
(:import
  ru.igis.omtab.OpenMapTab
  ru.igis.omtab.OMT
  ru.igis.omtab.gui.RuMapMouseAdapter
  ru.igis.omtab.MapOb
  ru.igis.omtab.NavOb))
(defn set-onclick [fun]
  (let [pg0 (first (OMT/getPlaygrounds))
       rumma (proxy [RuMapMouseAdapter] []
                     (mouseLeftButtonClickedOn [mo llp runa]
                       (fun mo (seq llp))
                       (.manageGraphics pg0)
                       true))]
  (.setRuMapMouseAdapter pg0 rumma)))

(defn dms [y]
  (cond
  (number? y) (MapOb/getDegMin y)
  (number? (first y)) (str (MapOb/getDegMin (first y))
                                 " "
                                 (MapOb/getDegMin (second y)))
  true (vec (map dms y))))

(defn latlon [y]
  (if (string? y)
  (let [[da ma do mo] (.split y " ")]
    [(MapOb/getDeg (str da " " ma))
     (MapOb/getDeg (str do " " mo))])
  (vec (map latlon y))))

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

(defn move-extend-region [pi w h mo [lat lon]]
  (if-let [p (OMT/getMapOb pi)]
  (OMT/removeMapOb p false))
(let [hd (/ h 60)
       mfi (Math/toRadians (- lat (/ hd 2)))
       wd (/ (/ w 60) (Math/cos mfi))
       nw [lat lon]
       ne [lat (+ lon wd)]
       se [(- lat hd) (+ lon wd)]
       sw[(- lat hd) lon]]
  (ssv pi "latitude" (dms lat))
  (ssv pi "longitude" (dms lon))
  (ssvs pi "points" [(dms nw)
                             (dms ne)
                             (dms se)
                             (dms sw)])
  (OMT/getOrAdd pi)))

(defn create-route [hm inst]
  (let [mp (into {} hm)]
  (set-onclick (partial make-region (mp "poly")))))

(defn move-region [hm inst]
  (let [mp (into {} hm)
       w (mp "width") 
       h (mp "height")
       p (mp "poly")]
    (set-onclick (partial move-extend-region p w h))))

