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

(defn vv [v proto run]
  (if (= proto :?)
  v
  (if-let [mo (or (OMT/getMapOb proto) (OMT/addMapOb proto))]
    (if-let [hm (.getAttribute mo run)]
      (cond
        (string? v) (or (.get hm v) v)
        (instance? Instance v)
          (let [tit (sv v "title")]
            (if (= tit "?protagonist")
              proto
              (or (.get hm tit) v)))
        true v))
    v)))

(defn pvv [var val proto run]
  (if-let [mo (OMT/getMapOb proto)]
  (if-let [hm (.getAttribute mo run)]
    (let [varnam (if (instance? Instance var) (sv var "title") var)]
      (.put hm varnam val)))))

(defn es-mess
  ([txt mp category]
  (ClojureTab/showESMessage txt mp (CATEGORY category)))
([txt mp category client]
  (ClojureTab/showESMessage txt mp (CATEGORY category))))

(defn go [mo lat lon spd]
  (let [lt (double lat)
      ln (double lon)]
  (if (= spd 0)
    (do (.setLatitude mo lt) (.setLongitude mo ln))
    (let [deg (.bearingsDeg mo lt ln)]
      (if (> spd 0)
        (.setSpeed mo (double spd)))
      (.setCourse mo (int (Math/round deg)) )) )))

(defn degmin-to-deg [?lat p r]
  (MapOb/getDeg (vv ?lat p r)))

(defn latlon-N [rou n p r]
  (let [pts (seq (svs rou "points"))]
  (if (and (<= 0 n) (< n (count pts)))
    (let [poi (nth pts n)
           dmdm (seq (.split poi " "))
           lat (str (nth dmdm 0) " " (nth dmdm 1))
           lon (str (nth dmdm 2) " " (nth dmdm 3))]
      [lat lon])
    [nil nil])))

(defn stop-moving [?obj lt ln p r]
  (let [obj (vv ?obj p r)]
  (when-let [mo (OMT/getMapOb obj)]
    (.setSpeed mo (double 0))
    (.setLatitude mo (double lt))
    (.setLongitude mo (double ln)))))

(defn op-time []
  (str "D-" (Clock/getDay) " " 
	(format "%02d" (Clock/getHour)) ":"
	(format "%02d" (Clock/getMinute)) ":"
	(format "%02d" (Clock/getSecond))))

(defn time-message [?txt cat cls p r]
  (let [txt (vv ?txt p r)
       tim (op-time)]
    (if (empty? cls)
      (es-mess (str tim " " txt) {} cat)
      (doseq [cli cls]
        (es-mess (str tim " " txt) {} cat (sv cli "id"))))))

(defn put-off-map [?obj mos del p r]
  (let [obj (vv ?obj p r)]
  (if (not (null? obj))
    (if-let [mo (OMT/getMapOb obj)]
      (OMT/removeMapOb (.getInstance mo) (is? del))))
  (if (seq mos)
    (OMT/clearMapObs mos (is? del)))))

(defn arriveN [tit obj rou n ?spd rad pro run par]
  (let [[lat lon] (latlon-N rou n pro run)
       spd (Double. (vv ?spd pro run))]
  (if (nil? lat)
    "DONE"
    (let [gor-status (s/gen-id tit)
           arr ['Arrive 'status "START"
	'title gor-status
	'object obj
	'latitude lat
	'longitude lon
	'speed spd
	'radius rad
	'next_actions []
	'run run
	'parent par
	'protagonist pro]]
      (rete.core/assert-frame arr)
      gor-status))))

(defn update-attribute-set [pla ctx p]
  (let [mo (or (OMT/getMapOb pla) (OMT/addMapOb pla))
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

(defn hm-varvals-to-vals [hm p r]
  (doseq [k (.keySet hm)]
  (.put hm k (vv (.get hm k) p r))))

(defn subscenario [sub ?ctx ?pla wai pid p r]
  (if (not (null? sub))
  (let [ctx (if (null? ?ctx) (sv sub "context") (vv ?ctx p r))
        pl0 (vv ?pla p r)
        pla (if (null? pl0)  (sv sub "protagonist") pl0)
        id (s/gen-id (sv sub "title"))]
    (if (not (nil? pla))
      (ssv sub "protagonist" pla))
    (if (not (null? ctx))
      (if-let [hm (s/context-to-hm ctx)]
        (let [mo (or (OMT/getMapOb pla)
	  (OMT/addMapOb pla))]
          (hm-varvals-to-vals hm p r)
          (.putAttribute mo id hm))))
    (ssv sub "parent" pid)
    (ssv sub "id" id)
    (ssv sub "run" r)
    (ssv sub "status" "START")
    (assert-instances [sub])
    (if (= wai true)
      "REPEAT"
      "DONE"))
  "FAILED"))

(defn wait-event [?evt pid p r]
  (if-let [evt (vv ?evt p r)]
  (do
    (ssv evt "parent" pid)
    (assert-instances [evt])
    "REPEAT")
  "FAILED"))

(defn eval-with-context [ctx body]
  (let [bnd (vec (interleave (keys ctx) (vals ctx)))]
  (eval `(let ~bnd ~@body))))

(defn repeat-action-onoff [?ra col flg p r]
  (if (= flg true)
  (do
    (OMT/startProtegeRepeatAction (vv ?ra p r))
    (if (not (null? col))
      (OMT/startProtegeRepeatActions col)))
  (do
    (OMT/removeProtegeRepeatAction (vv ?ra p r))
    (if (not (null? col))
      (OMT/removeProtegeRepeatActions col)) )))

(defn trim-angle [a]
  (cond
  (> a 360) (- a 360)
  (< a 0) (+ a 360)
  true a))

(defn mapob-vv [?obj ?pro ?run]
  (OMT/getMapOb (vv ?obj ?pro ?run)))

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

(defn future-position [?obj ?obs ?posa ?posd ?poss rel rad p r]
  (let [mob (mapob-vv ?obj p r)
      mos (mapob-vv ?obs p r)
      posa (vv ?posa p r)
      posd (vv ?posd p r)
      poss (vv ?poss p r)]
  (if (not (or (nil? mob) (nil? mos) (null? posa) (null? posd) (null? poss)))
    (let [an1 (read-string posa)
          dist (read-string posd)
          spdb (read-string poss)
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
          [mob lat2 lon2 spdb crss spds]))))))

(defn observer-maneuver? [?obs crs spd p r]
  (if-let [mos (mapob-vv ?obs p r)]
  (let [crs2 (.getCourse mos)
        spd2 (.getSpeed mos)]
    (or (not= crs crs2) (not= spd spd2)))))

(defn in-position? [?obj ?obs ?posa ?posd ?poss rel rad p r]
  (let [mob (OMT/getMapOb (vv ?obj p r))
      mos (OMT/getMapOb (vv ?obs p r))
      posa (vv ?posa p r)
      posd (vv ?posd p r)
      poss (vv ?poss p r)]
  (if (not (or (nil? mob) (nil? mos) (null? posa) (null? posd) (null? poss)))
    (let [an1 (read-string posa)
          dist (read-string posd)
          spd (read-string poss)
          ang (if (= rel true) (trim-angle (+ an1 (.getCourse mos))) an1)
          [lat lon] (seq (.position mos ang dist))]
      (or (.near mob lat lon rad) (.abaft mob lat lon)) ) )))

(defn take-position [?obj ?obs ?posa ?posd ?poss rel p r]
  (let [obj (OMT/getMapOb (vv ?obj p r))
      obs (OMT/getMapOb (vv ?obs p r))
      posa (vv ?posa p r)
      posd (vv ?posd p r)
      poss (vv ?poss p r)]
  (when (not (or (nil? obj) (nil? obs) (null? posa) (null? posd) (null? poss)))
    (let [an1 (read-string posa)
          dist (read-string posd)
          spd (read-string poss)
          ang (if (= rel true) (trim-angle (+ an1 (.getCourse obs))) an1)
          pos (.position obs ang dist)
          lat (aget pos 0)
          lon (aget pos 1)]
      (.setLatitude obj (double lat))
      (.setLongitude obj (double lon))
      (.setSpeed obj (.getSpeed obs))
      (.setCourse obj (.getCourse obs)) ) )))

(defn object-message [atit ?obj ?txt ?url cat cls p r]
  (if-let [obj (OMT/getMapOb (vv ?obj p r))]
  (let [txt (vv ?txt p r)
         url (vv ?url p r)
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

(defn link-on-off [?obj ?obs flg ?lic p r]
  (let [obj (OMT/getMapOb (vv ?obj p r))
       obs (OMT/getMapOb (vv ?obs p r))
       lic (vv ?lic p r)]
  (if (not (or (nil? obj) (nil? obs)))
    (do
      (if (is? flg)
        (if (not (null? lic))
          (.linkMapOb obs obj lic))
        (.unlinkMapOb obs obj))
      "DONE")
    "FAILED")))

(defn frame-slot-val [frame slot]
  (let [dw (drop-while #(not= % slot) frame)]
  (if (seq dw)
    (second dw))))

(defn tow-on-off [?obj ?obs flg ?poa ?pod rel p r]
  (let [obj (OMT/getMapOb (vv ?obj p r))
       obs (OMT/getMapOb (vv ?obs p r))
       poa (vv ?poa p r)
       pod (vv ?pod p r)]
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

(defn put-attr-val [obj ?atr ?val p r]
  (let [atri (vv ?atr p r)
       val (vv ?val p r)]
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

(defn put-ob-attributes [?obj atrs vals p r]
  (let [obj (OMT/getMapOb (vv ?obj p r))]
  (if (null? obj)
    "FAILED"
    (do
      (doall (map #(put-attr-val obj %1 %2 p r) atrs vals))
      "DONE"))))

(defn show [atit ?thi ?txt ?lab p r]
  (let [thi (vv ?thi p r)
       txt (vv ?txt p r)
       lab (vv ?lab p r)]
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

(defn attribute-message [?txt ?obj atr cat cls p r]
  (let [txt (vv ?txt p r)
       obj (vv ?obj p r)
       tim (op-time)]
  (if-let [mo (OMT/getMapOb obj)]
    (let [avl (or (.getAttribute mo (sv atr "title")) "")
           mes (cond
	(null? txt) avl
	(not (.contains txt "?$")) (str txt " " avl)
	true (ordered-subst txt avl "?$"))
           mes (.replace mes "?obj" (.getName mo))]
      (if (empty? cls)
        (es-mess (str tim " " mes) nil cat)
        (doseq [cli cls]
          (es-mess (str tim " " mes) nil cat (sv cli "id")))) ))))

(defn put-ob-properties [?obj ?lat ?lon ?crs ?spd p r]
  (let [obj (vv ?obj p r)
       lat (vv ?lat p r)
       lon (vv ?lon p r)
       crs (vv ?crs p r)
       spd (vv ?spd p r)]
  (if (null? obj)
    "FAILED"
    (if-let [mo (OMT/getMapOb obj)]
      (try 
        (if-let [c (if (not (null? crs)) (Integer. crs))]
          (.setCourse mo c))
        (if-let [s (if (not (null? spd)) (Double. spd))]
          (.setSpeed mo s))
        (if (not (or (null? lat) (null? lon)))
          (.setLocation mo lat lon))
        "DONE"
      (catch Exception e
        "FAILED")) ) )))

(defn create-by-model [?mod ?obj p r]
  (let [mod (vv ?mod p r)
       obj (vv ?obj p r)
       typ (.getDirectType mod)
       sls (.getTemplateSlots typ)
       ins (crin (.getName typ))]
  (doseq [slt sls]
    (let [sln (.getName slt)]
      (if (.getAllowsMultipleValues slt)
        (ssvs ins sln (doall (map #(vv % p r) (svs mod sln))))
        (ssv ins sln (vv (sv mod sln) p r)) ) ))
  (pvv ?obj ins p r)))

(defn place-on [mo1 mo2]
  (.setLatitude mo2 (.getLatitude mo1))
(.setLongitude mo2 (.getLongitude mo1)))

(defn getoradd-vv [?obj ?pro ?run]
  (OMT/getOrAdd (vv ?obj ?pro ?run)))

(defn deg-degmin-vv [?degmin ?pro ?run]
  (MapOb/getDeg (vv ?degmin ?pro ?run)))

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
  (let [dav (Double. avl)
        dva (Double. val)]
    (condp = rel
      "=" (= dav dva)
      ">" (> dav dva)
      ">=" (>= dav dva)
      "<" (< dav dva)
      "<=" (<= dav dva)
      "!=" (not= dav dva)
      (do (println (str "Wrong relation " avl " " rel " " val))
        false)))
 (catch NumberFormatException nfe
   (if (= rel "=")
     (= avl val)
     false))))

(defn on-shot-dist? [?obj ?obs ?shd p r]
  (let [mob (mapob-vv ?obj p r)
      mos (mapob-vv ?obs p r)
      shd (vv ?shd p r)]
  (if (not (or (null? mob) (null? mos) (null? shd)))
    (.near mob mos (Double. shd)))))

(defn op-time-sec [tim]
  (let [dt (.split tim " ")
      dd (.split (aget dt 0) "-")
      hms (.split (aget dt 1) ":")
      ds (* (Integer. (aget dd 1)) 3600 24)
      hs (* (Integer. (aget hms 0)) 3600)
      ms (* (Integer. (aget hms 1)) 60)
      ss (Integer. (aget hms 2))]
  (+ ds hs ms ss)))

(defn moving-object-message [atit ?obj ?txt ?url cat cls p r]
  (if-let [obj (OMT/getMapOb (vv ?obj p r))]
  (let [txt (vv ?txt p r)
         url (vv ?url p r)
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

([[act tks]]
  (if-let [tkf (first (re/facts-with-slot-value 'Scenario 'instance = tks))]
    (break-action (sv act "title") (re/slot-value 'run tkf))))

([tit run]
  (doseq [fact (re/facts-with-slot-value 'title = tit)]
    (if (= (re/slot-value 'run fact) run)
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

([[act tks]]
  (if-let [tkf (first (re/facts-with-slot-value 'Scenario 'instance = tks))]
    (break-task act (re/slot-value 'run tkf))))

([act run]
  (doseq [fact (re/facts-with-slot-value 'Task 'instance = act)]
    (when (= (re/slot-value 'run fact) run)
      (doseq [acf (re/facts-with-slot-value 'parent = (re/slot-value 'id fact))]
        (break-action (re/slot-value 'title acf) run))
      (re/retract-fact (first fact))))))

(defn break-scenario
  ([]
  (let [ss (re/fact-list 'Scenario)
         sis (map #(re/slot-value 'instance %) ss)]
    (doseq [ins (DisplayUtilities/pickInstancesFromCollection nil sis "Select Scenarios")]
      (break-scenario ins (re/slot-value 'run (first (filter #(= (re/slot-value 'instance %) ins) ss)))))))

([[act tks]]
  (if-let [tkf (first (re/facts-with-slot-value 'Scenario 'instance = tks))]
    (break-scenario act (re/slot-value 'run tkf))))

([act run]
  (doseq [fact (re/facts-with-slot-value 'Scenario 'instance = act)]
    (when (= (re/slot-value 'run fact) run)
      (doseq [tsf (re/facts-with-slot-value 'Task 'parent = (re/slot-value 'id fact))]
        (break-task (re/slot-value 'instance tsf) (re/slot-value 'id fact)))
      (re/retract-fact (first fact))))))

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
  (instance? Instance v)
    (.getName v)
  (string? v)
    (val-from-str v)
  true 
    (do (println "to-clj-type - unknown type of: " v) v)))

(defn compute [?com p r]
  (let [com (vv ?com p r)]
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
           ;;_ (println :COMPUTE s2)
           rz (load-string s2)]
      (if (and (number? rz) (< rz 0))
        "FAILED"
        "DONE"))
    "FAILED")))

