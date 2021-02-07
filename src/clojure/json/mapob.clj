(ns json.mapob
(:use 
  protege.core
  clj-json.core)
(:import 
  ru.igis.omtab.OMT
  com.bbn.openmap.proj.ProjMath
  com.bbn.openmap.proj.GreatCircle))
(defn extract-type [typ]
  (if typ
  (let [lab (sv typ "label")
        aa (.split lab ";")]
    (aget aa 0))))

(defn extract-own [typ]
  (if typ
  (let [lab (sv typ "label")
        aa (.split lab ";")]
    (aget aa 1))))

(defn json-color [awt]
  (format "#%02x%02x%02x" (.getRed awt) (.getGreen awt) (.getBlue awt)))

(defn json-opacity [clr]
  (float (/ (.getAlpha clr) 255)))

(defn json-dash-array [omtp]
  (let [stk (.getStroke omtp)
        da (.getDashArray stk)]
  (vec da)))

(defn json-fill [awt]
  (str "rgba(" (.getRed awt) "," (.getGreen awt) "," (.getBlue awt) "," (float (/ (.getAlpha awt) 255)) ")"))

(defn json-common [mo]
  (generate-string
{"type" "Feature"
 "properties" {
  "name" (.getName mo)
 },
 "geometry" {
  "type" "Point"
  "coordinates" [(.getLongitude mo), (.getLatitude mo)]
 }
}
))

(defn json-link [lnk]
  (if-let [mo (.getMapOb lnk)]
  (let [crd [[(.getLongitude mo),(.getLatitude mo)]
                 [(.getLongitude lnk),(.getLatitude lnk)]]]
(generate-string
{"type" "Feature",
 "properties" {
  "name" (str (.getName mo) "-" (.getName lnk))
  "lineColor" "#FFA500"
 },
 "geometry" {
  "type" "LineString",
  "coordinates" crd
  }
}))))

(defn json-links [no lns]
  (letfn [(json-link [lmo]
  (let [crd [[(.getLongitude no),(.getLatitude no)]
                 [(.getLongitude lmo),(.getLatitude lmo)]]]
	(generate-string
	{"type" "Feature",
	 "properties" {
	  "name" (str (.getName no) "-" (.getName lmo))
	  "lineColor" "#FFA500"
	 },
	 "geometry" {
	  "type" "LineString",
	  "coordinates" crd
	  }
	}
	)))]
  (if (seq lns)
    (let [jls (map json-link lns)]
      (str (apply str (interpose ",\n" jls)) "\n,"))
    "")))

(defn json-navob [no]
  (let [typ (.getType no)
      vct (.getAttribute no "VC_TYPE")
      lns (.getAttribute no "LINKS")]
(str 
(json-links no lns)
(generate-string
{"type" "Feature"
 "properties" {
  "name" (.getName no)
  "url" (.getURL no)
  "course" (.getCourse no)
  "speed" (.getSpeed no)
  "altitude" (.getAltitude no)
  "type" (extract-type typ)
  "own" (extract-own typ)
  "vertical_control" (or vct "NONE")
 },
 "geometry" {
  "type" "Point"
  "coordinates" [(.getLongitude no), (.getLatitude no)]
 }
}
))))

(defn json-omtpoly [omtp]
  (let [lm (.getLocationMarker omtp)
      llac (.getLatLonArrayCopy lm)
      dga (ProjMath/arrayRadToDeg llac)
      p2 (partition 2 dga)
      fcrd (fn [x] [(second x), (first x)])
      crd (map fcrd p2)
      ins (.getInstance omtp)
      pol (sv ins "isPolygon")
      fic (.getFillColor lm)
      lic (.getLineColor lm)]
(generate-string
{"type" "Feature",
 "properties" {
  "name" (.getName omtp)
  "fillColor" (json-color fic)
  "lineColor" (json-color lic)
  "opacity" (json-opacity lic)
  "fillOpacity" (json-opacity fic)
  "dashArray" (json-dash-array lm)
  "fill" (json-fill fic)
 },
 "geometry" {
  "type" (if (is? pol) "Polygon" "LineString"),
  "coordinates" (if (is? pol) [crd] crd)
  }
}
)))

(defn json-omtcircle [omtc]
  (let [lm (.getLocationMarker omtc)
      cen (.getCenter lm)
      rad (ProjMath/degToRad (.getRadius lm))
      lla (GreatCircle/earthCircle (.getRadLat cen) (.getRadLon cen) rad 72)
      dga (ProjMath/arrayRadToDeg lla)
      p2 (partition 2 dga)
      fcrd (fn [x] [(second x), (first x)])
      crd [(map fcrd p2)]
      fic (.getFillColor lm)
      lic (.getLineColor lm)]
(generate-string
{"type" "Feature",
 "properties" {
  "name" (.getName omtc)
  "fillColor" (json-color (.getFillColor lm))
  "lineColor" (json-color (.getLineColor lm))
  "opacity" (json-opacity lic)
  "fillOpacity" (json-opacity fic)
  "dashArray" (json-dash-array lm)
  "fill" (json-fill fic)
 },
 "geometry" {
  "type" "Polygon",
  "coordinates" crd
  }
}
)))

(defn json-omtarc [omta]
  (let [lm (.getLocationMarker omta)
      cen (.getCenter lm)
      [cfi cla] [(.getRadLat cen) (.getRadLon cen)]
      rad (ProjMath/degToRad (.getRadius lm))
      sta (.getStartAngle lm)
      ena (+ sta (.getExtentAngle lm))
      degs (concat (range sta ena 5) [ena])
      rads (map #(ProjMath/degToRad %) degs)
      pnts (mapcat #(nnext (GreatCircle/sphericalBetween cfi cla rad % 1)) rads)
      lla (concat [cfi cla] pnts [cfi cla]) 
      dga (map #(ProjMath/radToDeg %) lla)
      p2 (partition 2 dga)
      fcrd (fn [x] [(second x), (first x)])
      crd [(map fcrd p2)]
      fic (.getFillColor lm)
      lic (.getLineColor lm)]
(generate-string
{"type" "Feature",
 "properties" {
  "name" (.getName omta)
  "fillColor" (json-color (.getFillColor lm))
  "lineColor" (json-color (.getLineColor lm))
  "opacity" (json-opacity lic)
  "fillOpacity" (json-opacity fic)
  "dashArray" (json-dash-array lm)
  "fill" (json-fill fic)
 },
 "geometry" {
  "type" "Polygon",
  "coordinates" crd
  }
}
)))

(defn json-mapob [mo]
  (condp = (type mo)
  ru.igis.omtab.NavOb (json-navob mo)
  ru.igis.omtab.OMTPoly (json-omtpoly mo)
  ru.igis.omtab.OMTCircle (json-omtcircle mo)
  ru.igis.omtab.OMTArc (json-omtarc mo)
  ru.igis.omtab.Spill (json-omtpoly mo)
  (json-common mo)))

(defn json-mapobs [mapobs]
  (let [nnm (filter #(not (nil? %)) mapobs)
      jms (map json-mapob nnm)]
  (str "[" (apply str (interpose ",\n" jms)) "]")))

