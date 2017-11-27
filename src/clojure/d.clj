(ns d
(:use 
  protege.core
  ru.rules
  a
  e)
(:import 
  edu.stanford.smi.protege.model.Instance
  edu.stanford.smi.protege.ui.DisplayUtilities
  ru.igis.omtab.OMT))

(defn user-decision [vrs]
  [(invoke-later (DisplayUtilities/pickInstanceFromCollection nil vrs 0 "Select Variant"))])

(defn event-decision [evs vrs r]
  (letfn [(if-event-variant [evt vrn r]
	(condp =  (.getName (.getDirectType evt))
	  "ObAttribute" (if (ob-attribute
		(sv evt "attribute")
		(sv evt "object")
		(sv evt "relation")
		(sv evt "value")
		r) vrn)
	  "ObProperty" (if (ob-property
		(symbol (sv evt "ob_property"))
		(sv evt "object")
		(sv evt "radius")
		(sv evt "latitude")
		(sv evt "longitude")
		(sv evt "value")
		r) vrn)
	  "TwoObRelation" (if (two-ob-relation 
		(symbol (sv evt "ob_relation"))
		(sv evt "object")
		(sv evt "observer")
		(sv evt "radius")
		(sv evt "value")
		r) vrn)))]
  (or 
    (seq (filter #(not (nil? %)) (map #(if-event-variant %1 %2 r) evs (butlast vrs))))
    [(last vrs)])))

(defn ob-prop-val [obp obj]
  (condp = obp
  'NAME (.getName obj)
  'COURSE (.getCourse obj)
  'SPEED (.getSpeed obj)
  'COORDINATES [(.getLatitude obj) (.getLongitude obj)]
  'VISIBLE (.isVisible obj)
  (println (str "Unimplemented: " obp " " obj))))

(defn ob-rel-val [obr obj obs]
  (condp = obr
  'DISTANCE (.distanceNM obs obj)
  'BEARING (.bearingsDeg obs obj)
  'COURSE-ANGLE (course-angle obs obj)
  'ABAFT (.abaft obs obj)
  'AHEAD (not (or (.abaft obs obj) (on-beam obs obj)))
  'ON-BEAM (on-beam obs obj)
  (println (str "Unimplemented: " obr " " obs obj))))

(defn from-clj-type [v]
  (if-let [ins (.getInstance *kb* (str v))]
  ins
  v))

(defn input-var-val [idata r]
  (let [iobj (vv (sv idata "object") r)
      iobs (vv (sv idata "observer") r)
      varn (sv (sv idata "variable") "title")
      atr (sv idata "attribute")
      obp (sv idata "ob_property")
      obr (sv idata "ob_relation")
      obj (OMT/getMapOb iobj)
      obs (OMT/getMapOb iobs)
      var (symbol varn)]
  (cond
    (and (some? obj) (some? obr) (some? obs))
      [var (ob-rel-val (symbol obr) obj obs)]
    (and (some? obj) (some? obp))
      [var (ob-prop-val (symbol obp) obj)]
    (and (some? obj) (some? atr))
      [var (to-clj-type (.getAttribute obj (sv atr "title")))]
    (some? obj)
      [var (to-clj-type (vv (sv idata "variable") r))])))

(defn infix-to-prefix [exp]
  (letfn[(fwop [exp]
	(if (some #{(first exp)} '(Math/random)) 
	  exp
	  (infix-to-prefix (first exp))))]
(if (seq? exp)
  (cond
    (< (count exp) 2) (fwop exp)
    (= (first exp) 'not) (list (first exp) (infix-to-prefix (second exp)))
    (and (> (count exp) 2) (some #{(second exp)} '(and or = > < >= <= + - * /)))
      (list (second exp) (infix-to-prefix (first exp)) (infix-to-prefix (nnext exp)))
    true (map infix-to-prefix exp))
  exp)))

(defn parse-cond [cnd]
  (infix-to-prefix (read-string (str "(" cnd ")"))))

(defn general-decision [idata conditions variants r]
  (let [cds (map parse-cond conditions)
       prs (interleave cds (range (count cds)))
       body [(cons 'cond prs)]
       bnd (vec (mapcat #(input-var-val % r) idata))
       exp `(let ~bnd ~@body)
       nv (eval exp)]
  (if (number? nv)
    [(nth (seq variants) nv)]
    [(last variants)])))

(defn var-val-map [bnd]
  (let [p2 (partition 2 bnd)
      vars (map first p2)
      nams (map name vars)]
  (zipmap nams vars)))

(defn parse-let-body [s]
  (read-string (str "[" s "]")))

(defn uncomment [src]
  (rete.core/slurp-with-comments (java.io.StringReader. src)))

(defn t-decision [scr vrs p r]
  (let [scr (vv scr p r) 
       scr (uncomment (sv scr "source"))
       bnd (parse-let-body scr)
       exp `(let ~(vec (butlast (butlast bnd))) ~ (last bnd))
       nv (eval exp)]
  [((vec vrs) nv)]))

(defn cond-pair [cho vn vvm]
  (let [aft (sv cho "after")
      cnd (sv cho "condition")
      cnd3 (parse-cond cnd)
      bnd3 (if (not (null? aft)) 
                 (parse-let-body (uncomment (sv aft "source")))
                 [])
      vvm3 (var-val-map bnd3)
      vvm4 (merge vvm vvm3)]
  [cnd3 `(let ~bnd3
	[~vn ~vvm4])]))

(defn var-val-to-run [bnd vvmap run]
  (doseq [var (map name (map first (partition 2 bnd)))]
  (vvr var (from-clj-type (get vvmap var)) run)))

(defn set-ob-prop [obp obj val]
  (condp = obp
  'COURSE (.setCourse obj (int val))
  'SPEED (.setSpeed obj (double val))
  'COORDINATES (.setLocation (first val) (second val))
  (println (str "Unimplemented: " obp " " obj " " val))))

(defn var-val-to-result [result vvmap r]
  (let [iobj (vv (sv result "object") r)
      var (sv (sv result "variable") "title")
      atr (sv result "attribute")
      obp (sv result "ob_property")
      obj (OMT/getMapOb iobj)
      val (from-clj-type (get vvmap var))]
  (cond
    (nil? obj) (vvr var val r)
    (and (some? obj) (some? atr) (some? val)) (.putAttribute obj (sv atr "title") val)
    (and (some? obj) (some? obp) (some? val)) (set-ob-prop (symbol obp) obj val))))

(defn o-decision [ida bef chs vrs r]
  (let [bnd1 (mapcat #(input-var-val % r) ida)
       bnd2 (if (not (null? bef)) 
                  (parse-let-body (uncomment (sv bef "source")))
                  [])
       bnd3 (vec (concat bnd1 bnd2))
       vvm (var-val-map bnd3)
       cchs (count chs)
       cvrs (count vrs)
       cprs (mapcat #(cond-pair %1 %2 vvm) chs (range cchs)) 
       cprs2 (if (> cvrs cchs) (concat cprs [true [cchs vvm]]) cprs)
       exp `(let ~bnd3 (cond ~@cprs2))
       [nv vvm2] (eval exp)]
  (if (< nv cchs)
    (let [cho ((vec chs) nv)]
      (var-val-to-run bnd2 vvm2 r)
      (doseq [res (svs cho "results")]
        (var-val-to-result res vvm2 r))))
  [((vec vrs) nv)]))

(defn if-activity-status [ats sts vrs run]
  (loop [aa ats ss sts vv (butlast vrs)]
  (if (seq vv)
    (let [typ (.getDirectType (first aa))
           typ (symbol (.getName typ))
           tit (sv (first aa) "title")]
      (if-let [fts (seq (rete.core/facts-with-slot-value typ 'title = tit))]
        (if-let [fts (seq (rete.core/facts-with-slot-value typ 'run = run fts))]
          (if (seq (rete.core/facts-with-slot-value typ 'status = (first ss) fts))
            [(first vv)]
            (recur (rest aa) (rest ss) (rest vv)))
          (recur (rest aa) (rest ss) (rest vv)))
        (recur (rest aa) (rest ss) (rest vv))))
    [(last vrs)])))

(defn label-or-title [obj]
  (or (sv obj "label") (sv obj "title")))

