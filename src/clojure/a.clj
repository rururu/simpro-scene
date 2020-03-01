(ns a
(:use 
  protege.core
  ru.rules)
(:require 
  [rete.core :as re])
(:import 
  ru.igis.omtab.OMT
  ru.igis.omtab.Clock
  ru.igis.omtab.MapOb
  ru.igis.omtab.NavOb
  ru.igis.omtab.Util
  edu.stanford.smi.protege.model.Instance
  java.util.HashMap
  clojuretab.ClojureTab
  com.bbn.openmap.geo.Intersection
  com.bbn.openmap.geo.Geo
  com.bbn.openmap.proj.ProjMath
  edu.stanford.smi.protege.ui.DisplayUtilities))
(def CATEGORY {
1 "#4444FF"
2 "#FFFF00"
3 "#FF4444"
"1" "#4444FF"
"2" "#FFFF00"
"3" "#FF4444"
})
(defn null? [x]
  (or 
  (nil? x)
  (= x :?)
  (and (string? x) (empty? x))))

(defn worth? [x]
  (not (null? x)))

(defn nors [x]
  (if (string? x) (read-string x) x))

(defn to-be
  ([del]
 (let [[n u] (seq (.split del " "))
        d (read-string n)]
   (condp = u
     "sec" d
     "min" (* d 60)
     "hrs" (* d 3600)
     "days" (* d 3600 24))))
([sec del]
 (+ sec (to-be del))))

(defn vv [v run]
  (if (instance? Instance v)
  (or (.get run (sv v "title")) v)
  (or (.get run v) v)))

(defn vvr [var val run]
  (let [varnam (if (instance? Instance var) (sv var "title") var)]
  (.put run varnam val)))

(defn es-mess
  ([txt mp category]
  (ClojureTab/showESMessage txt mp (CATEGORY category)))
([txt mp category client]
  (ClojureTab/showESMessage txt mp (CATEGORY category))))

(defn degmin-to-deg [?lat r]
  (MapOb/getDeg (vv ?lat r)))

(defn op-time []
  (str "D-" (Clock/getDay) " " 
	(format "%02d" (Clock/getHour)) ":"
	(format "%02d" (Clock/getMinute)) ":"
	(format "%02d" (Clock/getSecond))))

(defn time-message [?txt cat cls r]
  (let [txt (vv ?txt r)
       tim (op-time)]
    (if (empty? cls)
      (es-mess (str tim " " txt) {} cat)
      (doseq [cli cls]
        (es-mess (str tim " " txt) {} cat (sv cli "id"))))))

(defn update-attribute-set [pla ctx p]
  (let [mo (OMT/getOrAdd pla)
       atts (.getAttributes mo)
       asi (sv pla "attributeSet")
       hm1 (or atts (if (nil? asi) (HashMap.))) ;; (AttributeSet/instanceToMap asi)))
       hm2 ctx] ;; (AttributeSet/instanceToMap ctx)]
  (doseq [k (.keySet hm2)]
    (if-let [v (.get hm2 k)]
      (if (not (= k "CLASS"))
        (.put hm1 k v)) ))
  (doseq [k (.keySet hm1)]
    (.put hm1 k (vv (.get hm1 k) p)))
  (.setAttributes mo hm1)))

(defn eval-with-context [ctx body]
  (let [bnd (vec (interleave (keys ctx) (vals ctx)))]
  (eval `(let ~bnd ~@body))))

(defn repeat-action-onoff [?ra col flg r]
  (if (= flg true)
  (do
    (OMT/startProtegeRepeatAction (vv ?ra r))
    (if (not (null? col))
      (OMT/startProtegeRepeatActions col)))
  (do
    (OMT/removeProtegeRepeatAction (vv ?ra r))
    (if (not (null? col))
      (OMT/removeProtegeRepeatActions col)) )))

(defn trim-angle [a]
  (cond
  (> a 360) (- a 360)
  (< a 0) (+ a 360)
  true a))

(defn mapob-vv [?obj ?run]
  (OMT/getMapOb (vv ?obj ?run)))

(defn meeting-point
  ([mot mob spd radius]
 (let [spt (.getSpeed mot)
        lat (.getLatitude mot)
        lot (.getLongitude mot)
        crt (.getCourse mot)
        lao (.getLatitude mob)
        loo (.getLongitude mob)
        dla (Math/abs (- lat lao))
        dlo (Math/abs (- lot loo))]
   (if (and (> spt 0) (or (> dla radius) (> dlo radius)))
     (let [g1 (Geo. lat lot)
            nms1 (/ spt 3600)
            gaz (Geo/radians (double crt))]
       (meeting-point g1 nms1 gaz lao loo spd radius))
     [lat lot])))
([g1 nms1 gaz lao loo spd radius]
 (let [g2 (Geo. lao loo)
        nms2 (/ spd 3600)
        g3 (meeting-point g1 nms1 gaz g2 nms2 radius)]
   (if (nil? g3)
     [99 189]
     [(.getLatitude g3) (.getLongitude g3)])))
([g1 nms1 gaz g2 nms2 radius]
 (let [d1 (Geo/distance g1 g2) 
       g3 (Geo/offset g1 d1 gaz)
       t1 (/ (Geo/nm d1) nms1)
       t2 (/ (Geo/distanceNM g2 g3) nms2)
       mv (/ (+ nms1 nms2) 2)
       eps (/ radius mv)
       meps (- 0 eps)]
   (if (>= t1 t2)
       (loop [d (- d1 (/ d1 2)) ma d1 mi 0]
	(let [g3 (Geo/offset g1 d gaz)
	      t1 (/ (Geo/nm d) nms1)
	      t2 (/ (Geo/distanceNM g2 g3) nms2)
	      dt (- t1 t2)]
	  (cond
	    (or (= dt eps) (= dt meps)) g3
	    (and (> dt 0) (> dt eps)) (recur (- d (/ (- d mi) 2)) d mi)
	    (and (< dt 0) (< dt meps)) (recur (+ d (/ (- ma d) 2)) ma d)
	    true g3)) )) )))

(defn future-position [mob mos posa posd poss rel rad]
  (let [an1 (nors posa)
       dist (nors posd)
       spdb (nors poss)
       crss (.getCourse mos)
       spds (.getSpeed mos)
       ang (if (= rel true) (trim-angle (+ an1 crss)) an1)
       [lat lon] (a/meeting-point mos mob spdb rad)]
  (if (> lat 90)
    (do (println (str "Position off " (.getName mos) " unreachable by " (.getName mob) "!"))
      (println [:OBSERV (.getLatitude mos) (.getLongitude mos) (.getCourse mos) (.getSpeed mos)])
      (println [:OBJECT (.getLatitude mob) (.getLongitude mob) (.getCourse mob) (.getSpeed mob)])
      nil)
    (let [[lat2 lon2] (seq (Util/relPos lat lon ang dist))]
      [lat2 lon2 spdb]))))

(defn take-position [mob mos posa posd poss rel]
  (let [an1 (nors posa)
       dist (nors posd)
       spd (nors poss)
       ang (if (= rel true) (trim-angle (+ an1 (.getCourse mos))) an1)
       pos (.position mos ang dist)
       lat (aget pos 0)
       lon (aget pos 1)]
  (.setLatitude mob (double lat))
  (.setLongitude mob (double lon))
  (.setSpeed mob (.getSpeed mos))
  (.setCourse mob (.getCourse mos))))

(defn object-message [atit ?obj ?txt ?url cat cls r]
  (if-let [obj (OMT/getMapOb (vv ?obj r))]
  (let [txt (vv ?txt r)
         url (vv ?url r)
         spl (seq (.split txt "\\?"))
         lab (.getName obj)
         lat (.getLatitudeDM obj)
         lon (.getLongitudeDM obj)
         tim (op-time)
         c2 [lab lat lon]
         c3 (concat (interleave spl c2) (nthrest spl (count c2)))
         txt2 (apply str c3)
         mp {"url" url "?title" atit "?time" tim "?object" lab "?latitude" lat "?longitude" lon}]
    (if (empty? cls)
      (es-mess (str tim " " txt2) mp cat)
      (doseq [cli cls]
        (es-mess (str tim " " txt2) mp cat (sv cli "id"))))
    "DONE")
  "FAILED"))

(defn frame-slot-val [frame slot]
  (let [dw (drop-while #(not= % slot) frame)]
  (if (seq dw)
    (second dw))))

(defn tow-on-off [?obj ?obs flg ?poa ?pod rel r]
  (let [obj (OMT/getMapOb (vv ?obj r))
       obs (OMT/getMapOb (vv ?obs r))
       poa (vv ?poa r)
       pod (vv ?pod r)]
  (if (not (or (nil? obj) (nil? obs) (null? poa) (null? pod)))
    (do
      (if (= flg true)
        (let [ang (Double. poa)
               dist (Double. pod)
               relt (if rel true false)]
          (.onTow obs obj ang dist relt))
        (.removeTow obs obj))
      "DONE")
    "FAILED")))

(defn put-attr-val [obj ?atr ?val r]
  (let [atri (vv ?atr r)
       val (vv ?val r)]
  (if (not (or (null? atri) (null? val)))
    (let [num (read-string val)
           exp (seq (.split val "="))
           atr (if (instance? Instance atri) (sv atri "title") atri)]
      (cond
        (number? num) (.putAttribute obj atr num)
        (> (count exp) 1)
          (let [newn (read-string (second exp))
                 oldn (or (.getAttribute obj atr) 0)]
            (condp = (first exp)
	"+" (.putAttribute obj atr (+ oldn newn))
	"-" (.putAttribute obj atr (- oldn newn))
	"*" (.putAttribute obj atr (* oldn newn))
	"/" (.putAttribute obj atr (/ oldn newn)) ))
        true (.putAttribute obj atr val)) ) )))

(defn put-ob-attributes [?obj atrs vals r]
  (let [obj (OMT/getMapOb (vv ?obj r))]
  (if (null? obj)
    "FAILED"
    (do
      (doall (map #(put-attr-val obj %1 %2 r) atrs vals))
      "DONE"))))

(defn show [atit ?thi ?txt ?lab r]
  (let [thi (vv ?thi r)
       txt (vv ?txt r)
       lab (vv ?lab r)]
  (if (not (null? thi))
    (if (ClojureTab/showModalInstance thi (or txt ""))
      "DONE"
      "FAILED")
    (if (ClojureTab/showModal atit (javax.swing.JLabel. lab) (or txt ""))
      "DONE"
      "FAILED"))))

(defn ordered-subst [txt avl pfx]
  (loop [a (.split avl " ") i (count a) r txt]
  (if (> i 0)
    (recur a (dec i) (.replace r (str pfx i) (aget a (dec i))))
    r)))

(defn attribute-message [?txt ?obj atr cat cls r]
  (let [txt (vv ?txt r)
       obj (vv ?obj r)
       tim (op-time)]
  (if-let [mo (OMT/getMapOb obj)]
    (let [avl (str (or (.getAttribute mo (sv atr "title")) ""))
           mes (cond
	(null? txt) avl
	(not (.contains txt "?$")) (str txt " " avl)
	true (ordered-subst txt avl "?$"))
           mes (.replace mes "?obj" (.getName mo))]
      (if (empty? cls)
        (es-mess (str tim " " mes) nil cat)
        (doseq [cli cls]
          (es-mess (str tim " " mes) nil cat (sv cli "id")))) ))))

(defn put-ob-properties [?obj ?lat ?lon ?crs ?spd ?alt r]
  (let [obj (vv ?obj r)
       lat (vv ?lat r)
       lon (vv ?lon r)
       crs (vv ?crs r)
       spd (vv ?spd r)
       alt (vv ?alt r)]
  (if (null? obj)
    "FAILED"
    (if-let [mo (OMT/getMapOb obj)]
      (try 
        (if (not (or (null? lat) (null? lon)))
          (.setLocation mo lat lon))
        (if-let [c (if (not (null? crs)) (Integer. crs))]
          (.setCourse mo c))
        (if-let [s (if (not (null? spd)) (Double. spd))]
          (.setSpeed mo s))
        (if-let [a (if (not (null? alt)) (Integer. alt))]
          (.setAltitude mo a))
        "DONE"
      (catch Exception e
        "FAILED")) ) )))

(defn create-by-model [?mod ?obj r]
  (let [mod (vv ?mod r)
       obj (vv ?obj r)
       typ (.getDirectType mod)
       sls (.getTemplateSlots typ)
       ins (crin (.getName typ))]
  (doseq [slt sls]
    (let [sln (.getName slt)]
      (if (.getAllowsMultipleValues slt)
        (ssvs ins sln (doall (map #(vv % r) (svs mod sln))))
        (ssv ins sln (vv (sv mod sln) r)) ) ))
  (vvr ?obj ins r)))

(defn place-on [mo1 mo2]
  (.setLatitude mo2 (.getLatitude mo1))
(.setLongitude mo2 (.getLongitude mo1)))

(defn geo-azi [g1 g2]
  (let [nor (Geo. 0.0 0.0 0.1)
      ang (Geo/angle nor g1 g2)
      azi (.azimuth g1 g2)
      mpi (Math/PI)]
  (if (> azi mpi)
    (- (* 2 mpi) ang)
    ang)))

(defn flight-start [mo spd lat-start lon-start lat-finish lon-finish]
  (let [name (.getName mo)
      g-start (Geo. lat-start lon-start)
      g-finish (Geo. lat-finish lon-finish)
      azimuth (geo-azi g-start g-finish)
      full-rad (.distance g-start g-finish)
      velo-nms (/ spd 3600)]
  (.setCourse mo (int (Geo/degrees azimuth)))
  (.setSpeed mo 0.0)
  (.setLatitude mo lat-start)
  (.setLongitude mo lon-start)
  ;; (pump-speed name spd)
  [g-finish azimuth full-rad velo-nms]))

(defn flight-in-point? [?obj lat-start lon-start g-finish azimuth full-rad velo-nms start-sec curr-sec p r]
  (if-let [mo (mapob-vv ?obj p r)]
  (let [ela-sec (- curr-sec start-sec)
         curr-nm (* velo-nms ela-sec)
         curr-rad (Geo/nmToAngle curr-nm)]
    (if (>= curr-rad full-rad)
      (do 
        (.setLatitude mo (.getLatitude g-finish))
        (.setLongitude mo (.getLongitude g-finish))
        (.setCourse mo 90)
        true)
      (let [name (.getName mo)
             g-curr (Geo/offset (Geo. lat-start lon-start) curr-rad azimuth)
             new-azi (geo-azi g-curr g-finish)
             new-crs (int (Geo/degrees new-azi))]
        (.setLatitude mo (.getLatitude g-curr))
        (.setLongitude mo (.getLongitude g-curr))
        (.setCourse mo new-crs)
        ;; (pump-speed name (* velo-nms 3600))
        false)))
  (do (println [:FLIGHT-IN-POINT? :OBJ ?obj :NOT-ON-MAP :PROTO p :RUN r])
    false)))

(defn is-relation [avl rel val]
  (try
  (let [dav (nors avl)
        dva (nors  val)]
    (condp = rel
      '= (= dav dva)
      '> (> dav dva)
      '>= (>= dav dva)
      '< (< dav dva)
      '<= (<= dav dva)
      '!= (not= dav dva)
      (do (println (str "Wrong relation " avl " " rel " " val))
        false)))
 (catch NumberFormatException nfe
   (if (= rel '=)
     (= avl val)
     false))))

(defn op-time-sec [tim]
  (let [dt (.split tim " ")
      dd (.split (aget dt 0) "-")
      hms (.split (aget dt 1) ":")
      ds (* (Integer. (aget dd 1)) 3600 24)
      hs (* (Integer. (aget hms 0)) 3600)
      ms (* (Integer. (aget hms 1)) 60)
      ss (Integer. (aget hms 2))]
  (+ ds hs ms ss)))

(defn moving-object-message [atit ?obj ?txt ?url cat cls r]
  (if-let [obj (OMT/getMapOb (vv ?obj r))]
  (let [txt (vv ?txt r)
         url (vv ?url r)
         spl (seq (.split txt "\\?"))
         lab (.getName obj)
         lat (.getLatitudeDM obj)
         lon (.getLongitudeDM obj)
         crs (.getCourse obj)
         spd (.getSpeed obj)
         tim (op-time)
         c2 [lab lat lon crs spd]
         c3 (concat (interleave spl c2) (nthrest spl (count c2)))
         txt2 (apply str c3)
         mp {"url" url "?title" atit "?time" tim "?object" lab "?latitude" lat "?longitude" lon "course" crs "speed" spd}]
    (if (empty? cls)
      (es-mess (str tim " " txt2) mp cat)
      (doseq [cli cls]
        (es-mess (str tim " " txt2) mp cat (sv cli "id"))))
    "DONE")
  "FAILED"))

(defn clock []
  (int (/ (Clock/getClock) 1000)))

(defn detected [mo tgt types ranges probs]
  (if (instance? NavOb tgt)
  (let [typ (.getType tgt)]
    (loop [tps types rns ranges prs probs]
      (if (seq tps)
        (if (= (first tps) typ)
          (if (and (<= (.distanceNM mo tgt) (first rns))
                   (<= (rand) (first prs)))
            true
            (recur (rest tps) (rest rns) (rest prs)))
          (recur (rest tps) (rest rns) (rest prs)))
        false)))))

(defn break-action
  ([]
  (let [ss (re/fact-list 'Scenario)
         sis (map #(re/slot-value 'instance %) ss)]
    (if-let [sins (DisplayUtilities/pickInstanceFromCollection nil sis 0 "Select Scenario")]
      (let [sft (first (filter #(= (re/slot-value 'instance %) sins) ss))
             sid (re/slot-value 'id sft)
             run (re/slot-value 'run sft)
             tt (re/facts-with-slot-value 'Task 'parent = sid)
             tt (filter #(not= (re/slot-value 'status %) "DONE") tt)
             tis (map #(re/slot-value 'instance %) tt)]
        (if-let [tins (DisplayUtilities/pickInstanceFromCollection nil tis 0 "Select Task")]
          (let [tid (re/slot-value 'id (first (filter #(= (re/slot-value 'instance %) tins) tt)))
                 aa (re/facts-with-slot-value 'parent = tid)
                 tts (map #(re/slot-value 'title %) aa)
                 xis (map #(foc "Aux" "title" %) tts)]
            (doseq [ins (DisplayUtilities/pickInstancesFromCollection nil xis "Select Actions")]
              (break-action (sv ins "title") run))
            (doseq [xi xis]
              (delin xi))))))))

([act run]
  (doseq [fact (re/facts-with-slot-value 'instance = act)]
    (if (identical? (re/slot-value 'run fact) run)
      (re/retract-fact (first fact))))))

(defn break-task
  ([]
  (let [ss (re/fact-list 'Scenario)
         sis (map #(re/slot-value 'instance %) ss)]
    (if-let [ins (DisplayUtilities/pickInstanceFromCollection nil sis 0 "Select Scenario")]
      (let [sft (first (filter #(= (re/slot-value 'instance %) ins) ss))
             sid (re/slot-value 'id sft)
             run (re/slot-value 'run sft)
             tt (re/facts-with-slot-value 'Task 'parent = sid)
             tt (filter #(not= (re/slot-value 'status %) "DONE") tt)
             tis (map #(re/slot-value 'instance %) tt)]
        (doseq [ins (DisplayUtilities/pickInstancesFromCollection nil tis "Select Tasks")]
          (break-task ins run))))))

([act run]
  (doseq [fact (re/facts-with-slot-value 'Task 'instance = act)]
    (when (identical? (re/slot-value 'run fact) run)
      (doseq [acf (re/facts-with-slot-value 'parent = (re/slot-value 'id fact))]
        (re/retract-fact (first acf)))
      (re/retract-fact (first fact))
      (println "Task breaked " (re/slot-value 'title fact))))))

(defn break-scenario
  ([]
  (let [ss (re/fact-list 'Scenario)
         sis (map #(re/slot-value 'instance %) ss)]
    (doseq [ins (DisplayUtilities/pickInstancesFromCollection nil sis "Select Scenarios")]
      (break-scenario (re/slot-value 'run (first (filter #(= (re/slot-value 'instance %) ins) ss)))))))

([run]
  (doseq [fact (re/facts-with-slot-value 'run = run)]
    (re/retract-fact (first fact))))

([act run]
  (doseq [fact (re/facts-with-slot-value 'instance = act)]
    (if (= (re/slot-value 'run fact) run)
      (break-scenario run)))))

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
  (nil? v)
    v
  (number? v) 
    v
  (= (type v) java.util.Collections$UnmodifiableCollection)
    (vec (map to-clj-type v))
  (or (instance? Instance v) (instance? MapOb v))
    (.getName v)
  (string? v)
    (val-from-str v)
  true 
    (do (println "to-clj-type - unknown type of: " v) v)))

(defn compute [?com r]
  (let [com (vv ?com r)]
  (if (not (null? com))
    (let [typ (.getDirectType com)
           ns (sv typ "namespace")
           sc (sv typ "source")
           n2 (if (nil? ns) 
                  "" 
                  (str "(in-ns '" (sv ns "title") ")"))
           sm (partition 2 (rest (mk-frame com)))
           bi (mapcat 
	(fn [[k v]] (list (symbol k) (to-clj-type (vv v r)) )) 
	sm) 
           s2 (str n2 " (let " (vec bi) " " sc ")")
           ;;_ (println :COMPUTE s2)
           rz (load-string s2)]
      (if (and (number? rz) (< rz 0))
        "FAILED"
        "DONE"))
    "FAILED")))

(defn merge-hm-run [hm run]
  (doseq [h (.keySet hm)]
  (.put hm h (vv (.get hm h) run)))
(doseq [r (.keySet run)]
  (if (nil? (.get hm r))
    (.put hm r (.get run r)))))

(defn assert-objects [inss run]
  (letfn [(frm-suv [ins]
            (let [[typ & svals] (ru.rules/mk-frame ins) 
                   suf (fn [[k v]]
	   [k (vv v run)])]
              (cons typ (mapcat suf (partition 2 svals)))))]
  (doseq [ins inss]
    (rete.core/assert-frame (frm-suv ins)))))

(defn layer-targets [name]
  (if-let [flt (seq (->> (ru.igis.omtab.OpenMapTab/getMapBean)
	.getComponents
	(filter #(= (.getName %) name))))]
  (-> (first flt)
    .getList
    .getTargets)))

(defn subst-hm-vars [hm s]
  (reduce #(.replaceAll %1 (str "\\" %2) (str (.get hm %2))) s (.keySet hm)))

(defn inner-point [[y1 x1] [y2 x2] T t]
  (let [yt (+ y1 (/ (* t (- y2 y1)) T))
       xt (+ x1 (/ (* t (- x2 x1)) T))]
  [yt xt]))

(defn next-way-point [way sec V]
  ;; returns [course rway] or [course rtime(sec)]
(loop [[p1 p2 & rway] way t (/ sec 3600)]
  (let [[la1 lo1] p1
         [la2 lo2] p2
         D (MapOb/distanceNM la1 lo1 la2 lo2)
         C (int (MapOb/bearingsDeg la1 lo1 la2 lo2))
         T (/ D V)]
    (if (< t T)
      [C (cons (inner-point p1 p2 T t) (cons p2 rway))]
      (let [rt (- t T)]
        (if (empty? rway)
          [C (int (* rt 3600))]
          (let [rway (cons p2 rway)]
            (if (> rt 0)
              (recur rway rt)
              [C rway]))))))))

(defn go-route [mo tlt tln]
  (let [step 100
       flt (.getLatitude mo)
       fln (.getLongitude mo)
       rte (NavOb/greatCircleRoute 
	(double flt) (double fln) 
	(double tlt) (double tln) 
	(double step))]
  (.goRoute mo rte)))

(defn reverse-route [rou]
  (letfn [(rr [y] (if (empty? y)
	  y
	  (cons (second y) (cons (first y) (rr (nnext y))))))]
  (rr (reverse rou))))

(defn to-route [rou bwd]
  ;;(println :TO-ROUTE (seq rou) bwd)
(let [b (is? bwd)
       f (not b)
       s (or (sequential? rou) (= (str (type rou)) "class [D"))
       c (and s (string? (first rou)))]
  (cond
    (and f c) rou
    (and f s (not c)) (into-array Double/TYPE rou)
    f rou
    c (reverse rou)
    (and s (not c)) (into-array Double/TYPE (reverse-route rou))
    (instance? Instance rou) (reverse (svs rou "points")))))

(defn omp-lla [omp]
  (ProjMath/arrayRadToDeg (.getLatLonArrayCopy omp)))

