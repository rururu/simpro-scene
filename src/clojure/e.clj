(ns e
(:use 
  protege.core
  a)
(:import
  ru.igis.omtab.OMT
  ru.igis.omtab.MapOb))

(defn try-str-num [x]
  (let [y (and (string? x) (read-string x))]
  (if (number? y) 
    y 
    (if (some? x) x))))

(defn correct-ca [ca]
  (cond
  (> ca 180)  (- ca 360)
  (< ca -180) (+ ca 360)
  true ca))

(defn course-angle [obs obj]
  (let [bea (.bearingsDeg obs obj)
       crs (.getCourse obs)]
  (correct-ca (- bea crs))))

(defn on-beam [obs obj]
  (let [ca (course-angle obs obj)]
  (or 
    (and (> ca 87) (< ca 93))
    (and (< ca -87) (> ca -93)))))

(defn two-ob-relation [obr ?obj ?obs rad ?val p r]
  (let [obj (mapob-vv ?obj p r)
       obs (mapob-vv ?obs p r)
       val (vv ?val p r)]
  (if (and obj obs)
    (condp = obr
      'NEAR (.near obs obj rad)
      'FAR (>= (.distanceNM obs obj) rad)
      'DISTANCE (< (Math/abs (- (.distanceNM obs obj) (read-string val))) rad)
      'BEARING (< (Math/abs (- (.bearingsDeg obs obj) (read-string val))) rad)
      'ABAFT (.abaft obs obj)
      'AHEAD (not (or (.abaft obj obs) (on-beam obs obj)))
      'ON-BEAM (on-beam obs obj)
      'COURSE-ANGLE (< (Math/abs (- (course-angle obs obj) (read-string val))) rad)
      'SAME (= obj obs)
      'INSIDE (.contains obs obj)
      'OUTSIDE (not (.contains obs obj))
      false))))

(defn ob-property [prop ?obj rad ?lat ?lon ?val p r]
  (let [obj (OMT/getMapOb (vv ?obj p r))
       val (vv ?val p r)]
  (if (not (nil? obj))
    (condp = prop
      'NAME (= (.getName obj) val)
      'MOVING (not (= (.getSpeed obj) 0))
      'STOPPED (= (.getSpeed obj) 0)
      'COURSE (let [vvl (if (string? val) (read-string val) val)] 
	(< (Math/abs (- (.getCourse obj) vvl)) rad))
      'SPEED (let [vvl (if (string? val) (read-string val) val)] 
	(< (Math/abs (- (.getSpeed obj) vvl)) rad))
      'ALTITUDE (let [vvl (if (string? val) (read-string val) val)] 
	(< (Math/abs (- (.getAltitude obj) vvl)) rad))
      'NEAR-POINT (< (.distanceNM obj 
	(MapOb/getDeg (vv ?lat p r))
	(MapOb/getDeg (vv ?lon p r))) rad)
      'COORDINATES (let [lat (vv ?lat p r) lon (vv ?lon p r)] (and
	(or (nil? lat) (< (Math/abs (- (.getLatitude obj) (MapOb/getDeg lat))) (/ rad 60)))
	(or (nil? lon) (< (Math/abs (- (.getLongitude obj) (MapOb/getDeg lon))) (/ rad 60))) ))
      false)
    false)))

(defn ob-attribute [atr ?obj rel ?val p r]
  (let [obj (OMT/getMapOb (vv ?obj p r))
       val (vv ?val p r)]
  (if (and (some? obj) (some? atr))
    (let [avl (try-str-num (.getAttribute obj (sv atr "title")))
           vvl (try-str-num val)]
      (condp = rel
        '= (= avl vvl)
        '!= (not= avl vvl)
        '> (> avl vvl)
        '< (< avl vvl)
        '>= (>= avl vvl)
        '<= (<= avl vvl)
        'starts-with (.startsWith (or avl "") (str vvl))
        'ends-with (.endsWith (or avl "") (str vvl))
        'empty (empty? avl)
        'resource-exhausted (>= (first avl) (count (rest avl)))
        'in-some-resource (some #(if-let[p (OMT/getMapOb %)] 
		     (.contains p (OMT/getMapOb vvl))) (rest avl))
        'in-all-resource (every? #(if-let[p (OMT/getMapOb %)] 
		     (.contains p (OMT/getMapOb vvl))) (rest avl))
        false))
    false)))

