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

(defn event-decision [evs vrs p r]
  (letfn [(if-event-variant [evt vrn p r]
	(condp =  (.getName (.getDirectType evt))
	  "ObAttribute" (if (ob-attribute
		(sv evt "attribute")
		(sv evt "object")
		(sv evt "relation")
		(sv evt "value")
		p r) vrn)
	  "ObProperty" (if (ob-property
		(symbol (sv evt "ob_property"))
		(sv evt "object")
		(sv evt "radius")
		(sv evt "latitude")
		(sv evt "longitude")
		(sv evt "value")
		p r) vrn)
	  "TwoObRelation" (if (two-ob-relation 
		(symbol (sv evt "ob_relation"))
		(sv evt "object")
		(sv evt "observer")
		(sv evt "radius")
		(sv evt "value")
		p r) vrn)))]
  (or 
    (seq (filter #(not (nil? %)) (map #(if-event-variant %1 %2 p r) evs (butlast vrs))))
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

(defn val-from-str [s]
  (try
  (Integer/parseInt s)
  (catch NumberFormatException e
    (try
      (Double/parseDouble s)
      (catch NumberFormatException e
        s)))))

(defn to-clj-type [v]
  (cond 
  (number? v) 
    v
  (= (type v) java.util.Collections$UnmodifiableCollection)
    (vec (map to-clj-type v))
  (instance? Instance v)
    (.getName v)
  (string? v)
    (val-from-str v)
  true 
    (do (println "d/to-clj-type - unknown type of: " v) v)))

(defn from-clj-type [v]
  (if-let [ins (.getInstance *kb* (str v))]
  ins
  v))

(defn input-var-val [idata p r]
  (let [iobj (vv (sv idata "object") p r)
      iobs (vv (sv idata "observer") p r)
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
      [var (to-clj-type (vv (sv idata "variable") p r))])))

(defn proto-var-val [proto run]
  (if-let [mo (OMT/getMapOb proto)]
  (if-let [hm (.getAttribute mo run)]
    (let [keys (.keySet hm)
            vars? (fn [x] (and (string? x) (not (.contains x " "))))
            vars (filter vars? keys)
            vv (mapcat #(list (symbol %) (to-clj-type (.get hm %))) vars)]
      (concat vv ['?pro (to-clj-type proto) '?run run])))))

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

(defn general-decision [idata conditions variants p r]
  (let [cds (map parse-cond conditions)
       prs (interleave cds (range (count cds)))
       body [(cons 'cond prs)]
       bnd1 (vec (mapcat #(input-var-val % p r) idata))
       bnd2 (if (not (null? p)) 
	(proto-var-val p r))
       bnd3 (vec (concat bnd1 bnd2))
       exp `(let ~bnd3 ~@body)
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

(defn to-proto-var-val [bnd vvmap proto run]
  (doseq [var (map name (map first (partition 2 bnd)))]
  (pvv var (from-clj-type (get vvmap var)) proto run)))

(defn set-ob-prop [obp obj val]
  (condp = obp
  'COURSE (.setCourse obj (int val))
  'SPEED (.setSpeed obj (double val))
  'COORDINATES (.setLocation (first val) (second val))
  (println (str "Unimplemented: " obp " " obj " " val))))

(defn to-result-var-val [result vvmap p r]
  (let [iobj (vv (sv result "object") p r)
      var (sv (sv result "variable") "title")
      atr (sv result "attribute")
      obp (sv result "ob_property")
      obj (OMT/getMapOb iobj)
      val (from-clj-type (get vvmap var))]
  (cond
    (nil? obj) (pvv var val p r)
    (and (some? obj) (some? atr) (some? val)) (.putAttribute obj (sv atr "title") val)
    (and (some? obj) (some? obp) (some? val)) (set-ob-prop (symbol obp) obj val))))

(defn o-decision [ida bef chs vrs p r]
  (let [bnd1 (mapcat #(input-var-val % p r) ida)
       bnd2 (if (not (null? p)) 
	(proto-var-val p r))
       bnd3 (if (not (null? bef)) 
                  (parse-let-body (uncomment (sv bef "source")))
                  [])
       bnd4 (vec (concat bnd1 bnd2 bnd3))
       vvm (var-val-map bnd4)
       cchs (count chs)
       cvrs (count vrs)
       cprs (mapcat #(cond-pair %1 %2 vvm) chs (range cchs)) 
       cprs2 (if (> cvrs cchs) (concat cprs [true [cchs vvm]]) cprs)
       exp `(let ~bnd4 (cond ~@cprs2))
       [nv vvm2] (eval exp)]
  (if (< nv cchs)
    (let [cho ((vec chs) nv)]
      (to-proto-var-val bnd2 vvm2 p r)
      (doseq [res (svs cho "results")]
        (to-result-var-val res vvm2 p r))))
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

(defn compute [?com p r]
  (let [com (vv ?com p r)]
  (println :P p :R r)
  (if (not (null? com))
    (let [typ (.getDirectType com)
           ns (sv typ "namespace")
           sc (sv typ "source")
           n2 (if (nil? ns) 
                  "" 
                  (str "(in-ns '" (sv ns "title") ")"))
           sm (partition 2 (rest (mk-frame com)))
           bi (mapcat 
	(fn [[k v]] (list (symbol k) (to-clj-type (vv v p r)) )) 
	sm) 
           s2 (str n2 " (let " (vec bi) " " sc ")")
           _ (println :COMPUTE s2)
           rz (load-string s2)]
      (if (and (number? rz) (< rz 0))
        "FAILED"
        "DONE"))
    "FAILED")))

