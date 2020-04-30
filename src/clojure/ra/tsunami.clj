(ns ra.tsunami
(:use
  protege.core
  c)
(:import
  ru.igis.omtab.OMT
  com.bbn.openmap.omGraphics.OMGraphic)
(:gen-class
  :name ru.igis.omtab.ra.TsunamiRA
  :extends ru.igis.omtab.ra.SpillRepeatAction
  :post-init pinit))

(def ^:dynamic *strm3-url* "http://api.geonames.org/srtm3")
(def ^:dynamic *username* "liikalanjoki")
(def FL-OMP nil)
(def FL-RCRD (volatile! []))
(def TABFUN nil)
(def TRA nil)
(defn -pinit [this obj]
  (vreset! FL-RCRD [])
(let [tsu (sv obj "poly") 
       flo (sv obj "flood")
       tfn (sv obj "tabfun")]
  (println [:TSUNAMI (and tsu (sv tsu "label"))
                :FLOOD (and flo (sv flo "label"))
                :TABFUN (and tfn (sv tfn "title"))])
  (if tsu
    (def TABFUN (c/create-tabfun tfn)))
  (if flo
    (def FL-OMP (.getLocationMarker (OMT/getOrAdd flo))))))

(defn call-geonames-20elevations [coords]
  ;: Get Elevation - Aster Global Digital Elevation Model V1 2009
;: Returns map {coord1 elev1coord2 elev2 ..} 
(let [crds (take 20 coords)
       lats (map first crds)
       lngs (map second crds)
       lats (apply str (interpose "," lats))
       lngs (apply str (interpose "," lngs))
       url (str *strm3-url* "?lats=" lats "&lngs=" lngs "&username=" *username*)]
 (try
  (if-let [dat (slurp url)]
    (let [v (read-string (str "[" dat "]"))
           v (interleave coords v)]
      (partition 2 v)))
  (catch Exception e
   (ctpl e)
   nil))))

(defn recalc-fl-rcrd [fl-rcrd aal crd-els]
  (try
(vec (map 
  #(if (> (first %1) 0)
      (cons 
        (if (> aal (second %2)) 1 0) 
        (map (fn [x] (Math/toRadians x)) (first %2)))
      %1)
  fl-rcrd 
  crd-els))
(catch Exception e
  (println [:ERR (map second crd-els)])
  (throw e))))

(defn collect-elevations [crd]
  (map #(vector % (subcla.etoele/elevation %)) crd))

(defn -repeat [this ^double time]
  (let [spi (.getSpill this)
       llp (.getLLP spi)
       crd (map #(Math/toDegrees %) llp)
       crd (partition 2 crd)
       len (count crd)
       els (collect-elevations crd)
       rad (.getCurrentRadius spi)
       aal (c/smooth-tabfun rad TABFUN)]
  (println :R rad :W aal )
  (if (empty? @FL-RCRD)
    (vreset! FL-RCRD (map #(cons 1 %) (partition 2 llp)))
    (vswap! FL-RCRD recalc-fl-rcrd aal els))
  (.setLocation  FL-OMP 
	(double-array (mapcat rest @FL-RCRD))
	(OMGraphic/RADIANS))
  (.spill spi time)))

