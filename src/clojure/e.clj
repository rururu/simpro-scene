(ns e
(:use 
  protege.core
  a)
(:import
  ru.igis.omtab.OMT
  ru.igis.omtab.MapOb))

(defn try-str-num [x]
  (if (string? x)
  (try 
    (let [rs (read-string x)]
      (if (number? rs) rs x))
    (catch Exception e
      x))
  x))

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

(defn two-ob-relation [obr ?obj ?obs rad ?val r]
  (let [obj (mapob-vv ?obj r)
       obs (mapob-vv ?obs r)
       val (vv ?val r)]
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

(defn ob-property [prop ?obj rad ?lat ?lon ?val r]
  (let [obj (OMT/getMapOb (vv ?obj r))
       val (vv ?val r)]
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
	(MapOb/getDeg (vv ?lat r))
	(MapOb/getDeg (vv ?lon r))) rad)
      'COORDINATES (let [lat (vv ?lat r) lon (vv ?lon r)] (and
	(or (nil? lat) (< (Math/abs (- (.getLatitude obj) (MapOb/getDeg lat))) (/ rad 60)))
	(or (nil? lon) (< (Math/abs (- (.getLongitude obj) (MapOb/getDeg lon))) (/ rad 60))) ))
      false)
    false)))

(defn ob-attribute [atr ?obj rel ?val r]
  (let [obj (OMT/getMapOb (vv ?obj r))
       val (vv ?val r)
       rel (if (string? rel) (symbol rel) rel)]
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
        'starts-with (and avl vvl(.startsWith avl (str vvl)))
        'ends-with (and avl vvl(.endsWith avl (str vvl)))
        'empty (empty? avl)
        'resource-exhausted (>= (first avl) (count (rest avl)))
        'in-some-resource (some #(if-let[p (OMT/getMapOb %)] 
		     (.contains p (OMT/getMapOb vvl))) (rest avl))
        'in-all-resource (every? #(if-let[p (OMT/getMapOb %)] 
		     (.contains p (OMT/getMapOb vvl))) (rest avl))
        false)))))

