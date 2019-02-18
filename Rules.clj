(ws:Wind Change Direction 0
?w (Wind direction ?dir1)
?wc (WindChange
	direction ?dir2
	(not= ?dir1 ?dir2))
=>
(let [d (if (< ?dir2 ?dir1) 
            (- ?dir1 ?dir2) 
            (- ?dir2 ?dir1))
       s (if (< ?dir2 ?dir1)
            (if (< d 180)
              'BACKING
              'VEERING)
            (if (< d 180)
              'VEERING
              'BACKING))]
  (println "Wind" s d "new direction" ?dir2)
  (modify ?w direction ?dir2
	shift s
                        shift-degrees d)
  (if-let [wmo (ru.igis.omtab.OMT/getMapOb "Wind")]
    (.setCourse wmo ?dir2))))

(ws:Wind on Map 0
(Wind direction ?dir
	latitude ?lat
	longitude ?lon
	(not (ru.igis.omtab.OMT/getMapOb "Wind")))
=>
(when-let [ins (protege.core/fifos "NavOb" "label" "Wind")]
  (protege.core/ssv ins "latitude" ?lat)
  (protege.core/ssv ins "longitude" ?lon)
  (protege.core/ssv ins "course" ?dir)
  (ru.igis.omtab.OMT/getOrAdd ins)
  (println "Wind on map, direction" ?dir "coords" [?lat ?lon])))

(ws:Wind Veering 1
?b (Boat label ?lab
	tack ?tack)
(Wind shift VEERING)
(not BoatWindShift boat ?lab)
=>
(let [ws (if (= ?tack 'STARBOARD)
	'LIFT
	'HEADER)]
  (println "Boat" ?lab "wind shift" ws)
  (asser BoatWindShift shift ws
	boat ?lab)
  (modify ?b sail-point 'UNDEFINED)))

(ws:Wind Shift End 0
?w (Wind shift ?s (not= ?s 'NIL))
=>
;;(println "Wind Shift End")
(modify ?w shift 'NIL))

(ws:Wind Backing 1
?b (Boat label ?lab
	tack ?tack)
(Wind shift BACKING)
(not BoatWindShift boat ?lab)
=>
(let [ws (if (= ?tack 'STARBOARD)
	'HEADER
	'LIFT)]
  (println "Boat" ?lab "wind shift" ws)
  (asser BoatWindShift shift ws
	boat ?lab)
  (modify ?b sail-point 'UNDEFINED)))

(ws:Boat Wind Shift End 0
?bws (BoatWindShift)
=>
(println "Boat Wind Shift End")
(retract ?bws))

(ss:Big Header on Beating 1
(Skipper status BEATING
	boat ?boat
	epsilon ?e)
(BoatWindShift boat ?boat
	shift HEADER)
(Boat label ?boat tack ?tack
	tack-angle ?taa)
(Wind direction ?dir
	shift-degrees ?sid
	(> ?sid 10))
(not Advice text "BIG HEADER NEW COURSE"
	 boat ?boat)
=>
(let [crs (if (= ?tack 'STARBOARD)
	(+ ?dir ?taa ?e)
	(- ?dir ?taa ?e))
       crs (int (sail.exp/trim-bear crs))]
  (println "Big header on boat" ?boat "recommended course" crs)
  (asser Advice text "BIG HEADER NEW COURSE"
	boat ?boat
	direction ?dir)
  (asser NewCourse boat ?boat
	 course crs)))

(bs:Boat Speed 0
(Boat label ?lab	sail-point ?slp
	speed ?spd)
=>
(if-let [bmo (ru.igis.omtab.OMT/getMapOb ?lab)]
  (let [osp (.getSpeed bmo)
         nsp (condp = ?slp
	'RUNNING 	 ?spd
	'BROADREACH	 (* ?spd 0.8)
	'BEAMREACH	 (* ?spd 0.7)
	'CLOSEREACH	 (* ?spd 0.6)
	'CLOSEHAULED	 (* ?spd 0.5)
	0.0)
         nsp (double (Math/round nsp))]
    (if (not= nsp osp)
      (if (= nsp 0.0)
        (.stopRoute bmo)
        (.setSpeed bmo nsp))))))

(ss:Select on Mark Course 0
(Mark label ?mark)
(Skipper status CAN-ON-MARK
	mark ?mark
	boat ?boat)
(Boat label ?boat)
(Wind direction ?wnd)
=>
(if-let [bmo (ru.igis.omtab.OMT/getMapOb ?boat)]
  (if-let [mmo (ru.igis.omtab.OMT/getMapOb ?mark)]
    (let [bea (.bearingsDeg bmo mmo)]
      (asser NewCourse boat ?boat course (int bea))))))

(ss:Mark Near and Abaft 0
(Route title ?tit	marks ?mm)
(Mark label ?mark)
?s (Skipper mark ?mark
	route ?tit
	lap ?lap
	boat ?boat
	radius ?rad
	status ?sts
	((not= ?sts 'UNDEFINED)
	 (not= ?sts 'OFF-SHORE)))
(Boat label ?boat)
(Clock (sail.exp/near-and-abaft ?boat ?mark ?rad))
=>
(println "Boat" ?boat "abaft the mark" ?mark)
(if (>= ?lap (count ?mm))
  (do (println "Boat" ?boat "finished route" ?tit)
    (modify ?s status 'UNDEFINED
	mark "NIL"
	route (str ?tit " - finished!")
	lap 0))    
  (let [mkn (nth ?mm ?lap)
         mkl (protege.core/sv mkn "label")]
    (ru.rules/assert-instances [mkn])
    (modify ?s status 'UNDEFINED
	mark mkl
	lap (inc ?lap))
    (println "Boat" ?boat "go on next mark" mkl))))

(ss:Start Route 0
(Route title ?tit	marks ?mm)
?s (Skipper boat ?boat
	route ?tit
	lap 0
	mark "NIL")
=>
(when-let [mk1 (first ?mm)]
  (ru.rules/assert-instances [mk1])
  (modify ?s mark (protege.core/sv mk1 "label")
	lap 1)
  (println "Boat" ?boat "started route" ?tit)))

(sim:Start Simulation 0
(Clock time ?t (< ?t 1))
=>
(sail.exp/start-sim))

(bs:Boat on Map 0
(CZMLGenerator)
(Boat label ?lab course ?crs)
(Clock time ?t)
(not CZMLSpan label ?lab)
=>
(when-let [ins (protege.core/fifos "NavOb" "label" ?lab)]
  (protege.core/ssv ins "course" ?crs)
  (if-let [bmo (ru.igis.omtab.OMT/getOrAdd ins)]
    (let [desc (.getDescription bmo)
           alt 2]
      (.setKeepRoute bmo true)
      (.setAltitude bmo alt)
      (sail.exp/camera-control bmo :pitch 6)
      (asser BoatPitch boat ?lab
	slope 'UP
	time 0)
      (asser CZMLSpan label ?lab
	options (read-string desc)
	time ?t)
      (println "Boat on map:" ?lab ", course" ?crs)))))

(bs:Boat Change Course 0
?b (Boat label ?lab course ?ocrs)
?nc (NewCourse boat ?lab
	course ?ncrs)
=>
(retract ?nc)
(if (not= ?ncrs ?ocrs)
  (when-let [bmo (ru.igis.omtab.OMT/getMapOb ?lab)]
    (println "Boat" ?lab "new course" ?ncrs)
    (.setCourse bmo ?ncrs)
    (modify ?b course ?ncrs
	sail-point 'UNDEFINED
	tack 'UNDEFINED))))

(sim:RetractSecondClock 10
?c1 (Clock time ?t1)
?c2 (Clock time ?t2
	(< ?t2 ?t1))
=>
(retract ?c2))

(ss:Shore Ahead 0
?s (Skipper status SHORE-AHEAD
	boat ?boat
	delay ?del
	epsilon ?e)
(Wind direction ?wnd)
(Boat label ?boat
	course ?crs
	tack-angle ?taa
	tack ?tack)
(Clock time ?t)
=>
(let [trn (* 2 (+ ?taa ?e))
       crs (condp = ?tack 
               'STARBOARD (+ ?crs trn)
               'PORT (- ?crs trn))
       crs (sail.exp/trim-bear crs)
       dif (sail.exp/difference crs ?wnd)
       crs (if (<= dif ?taa) ;; INIRONS on new course
               (sail.exp/trim-bear
                 (condp = ?tack 
                   'STARBOARD (+ crs ?taa)
                   'PORT (- crs ?taa)))
               crs)]
  (println "Skipper" ?boat "status" 'OFF-SHORE)
  (modify ?s status 'OFF-SHORE
	time (+ ?t (* ?del 60)))
  (asser NewCourse boat ?boat course crs)))

(ws:Big Oscillation 0
(Wind direction ?dir)
?wc (WindChange randomly true
	big-oscillation ?bos
	big-interval ?bint
	time2 ?t1)
(Clock time ?t2 (> ?t2 ?t1))
=>
(let [[mid min] (read-string ?bos)
       dev (Math/round (sail.exp/rand-mid-min mid min))
       dev (sail.exp/trim-bear dev)
       ndir (Math/round (sail.exp/rand-mid-min ?dir (- ?dir dev)))
       ndir (sail.exp/trim-bear ndir)
       del (sail.exp/rand-mid-min ?bint (- ?bint (max 1 (* ?bint 0.6))))
       del (int (* del 60))]
  (modify ?wc direction ndir
	time2 (+ ?t2 del))))

(ws:Small Oscillation 0
(Wind direction ?dir)
?wc (WindChange randomly true
	small-oscillation ?sos
	small-interval ?sint
	time ?t1)
(Clock time ?t2 (> ?t2 ?t1))
=>
(let [ndir (Math/round (sail.exp/rand-mid-min ?dir (- ?dir ?sos)))
       ndir (sail.exp/trim-bear ndir)
       del (sail.exp/rand-mid-min ?sint (- ?sint (max 1 (* ?sint 0.6))))
       del (int (* del 60))]
  (modify ?wc direction ndir
	time (+ ?t2 del))))

(ws:WindChange Update 1
?wc1 (WindChange asserted true)
?wc2 (WindChange asserted ?ass
	(not= ?ass true))
=>
(retract ?wc1)
(modify ?wc2 asserted true))

(ws:WindChange First 0
?wc (WindChange asserted ?a
	(not= ?a true))
(not WindChange)
=>
(modify ?wc asserted true))

(_bs:Boat Heel 0
(Onboard boat ?boat 
	view ?view)
?b (Boat label ?boat sail-point ?sp
	heel ?heel
	tack ?tk)
=>
(if-let [bh (sail.exp/boat-heel ?boat ?sp ?tk ?view)]
  (let [hel (bh :roll)]
    (if (not= ?heel hel)
      (modify ?b heel hel)))))

(cz:CZML Navob Leg Generation 1
(CZMLGenerator delay ?del
	visibility ?vis)
(Onboard boat ?boat)
(Boat label ?boat sounding ?snd)
?cs (CZMLSpan time ?tim
	label ?lab
	options ?ops
	(not= ?boat ?lab))
(Clock time ?t (> ?t ?tim))
=>
(if-let [omo (ru.igis.omtab.OMT/getMapOb ?lab)]
  (if-let [bmo (ru.igis.omtab.OMT/getMapOb ?boat)]
    (let [dis (.distanceNM omo bmo)]
      (println :SND ?boat ?snd)
      (if (< dis ?vis)
        (cesium.core/navob-leg 
	omo 
	(+ ?del 2)
	(assoc ?ops :sounding ?snd)))
      (modify ?cs time (+ ?t ?del))))))

(bs:Boat Camera Check 0
?onb (Onboard boat ?boat)
?cam (CameraCheck delay ?del
	time ?tim)
(Clock time ?t (> ?t ?tim))
=>
(let [onb (deref pro.server/ONBOARD)]
  (modify ?cam time (+ ?t ?del))
  (if (not= onb ?boat)
    (modify ?onb boat onb))))

(_bs:Boat Camera Check 0
?onb (Onboard boat ?boat
	view ?view)
?cam (CameraCheck delay ?del
	time ?tim)
(Clock time ?t (> ?t ?tim))
=>
(let [onb (deref pro.server/ONBOARD)
       vie (@pro.server/CAMERA :view)]
  (modify ?cam time (+ ?t ?del))
  (if (or (not= onb ?boat) (not= vie ?view))
    (modify ?onb boat onb
	view vie))))

(ss:End of Big Header 0
?a (Advice text "BIG HEADER NEW COURSE"
	direction ?dir1)
(Wind direction ?dir2
	(not= ?dir1 ?dir2))
=>
;;(println "End of big header")
(retract ?a))

(bs:Shore Check 0
(ShoreControl delay ?del
	shore ?sho
	distance ?dis)
?b (Boat label ?boat
	course ?crs
	elevation ?ele
	time ?tim)
?s (Skipper boat ?boat)
(Clock time ?t (> ?t ?tim))
=>
(if-let [bmo (ru.igis.omtab.OMT/getMapOb ?boat)]
  (let [[lat lon] (.position bmo (double ?crs) ?dis)] 
    (println "Elevation ahead request"  ?boat lat lon)
    (pro.server/request {:elevation [lat lon]} true)
    (if-let [resp (pro.server/receive-response)]
      (let [ele (resp :elevation)]
        (println "Elevation" ?boat ele "previous" ?ele)
        (if (and (number? )
              (> ele -7777) 
              (> ?ele 0) 
              (> (- ele ?ele) ?sho))
          (do (println "Shore ahead boat" ?boat ele ?ele)
            (modify ?s status 'SHORE-AHEAD))
          (modify ?b time (+ ?t ?del)
	elevation (if (and (number? ele) (>= ele 0))
		ele 
		?ele))))
      (modify ?b time (+ ?t ?del))))))

(ss:Mark on Map 0
(CZMLGenerator)
(Mark label ?lab latitude ?lat
	 longitude ?lon)
(Clock time ?t)
(not CZMLSpan label ?lab)
=>
(if-let [ins (protege.core/fifos "NavOb" "label" ?lab)]
  (let [mom (ru.igis.omtab.OMT/getOrAdd ins)
         desc (.getDescription mom)
         alt 0]
    (.setAltitude mom alt)
    (asser CZMLSpan  label ?lab
	options (read-string desc)
	time ?t)
    (println "Mark on map:" ?lab ", coords" [?lat ?lon]))))

(bs:Boat Sail Point 0
?b (Boat sail-point UNDEFINED
	label ?boat
	course ?crs
	tack-angle ?taa)
(Wind direction ?wnd)
=>
(let [dif (sail.exp/difference ?crs ?wnd)
       slp (cond	(> dif 168.75) 'RUNNING
	(> dif 101.25) 'BROADREACH
	(> dif 78.74) 'BEAMREACH
                        (> dif 56.25) 'CLOSEREACH
	(> dif ?taa) 'CLOSEHAULED
	true 'INIRONS)
       tck (if (> ?wnd ?crs)
	(if (< (- ?wnd ?crs) 180)
	  'STARBOARD
	  'PORT)
	(if (< (- ?crs ?wnd) 180)
	  'PORT
	  'STARBOARD))]
  (modify ?b sail-point slp tack tck)
  (println "Boat" ?boat "on" tck "tack and" slp)))

(ss:Skipper Status 0
(Mark label ?mark)
(Wind direction ?wnd)
?s (Skipper mark ?mark
	boat ?boat
	epsilon ?e
	status ?sts
	(not= ?sts 'OFF-SHORE))
(Boat label ?boat
	tack-angle ?taa)
(Clock)
=>
(if-let [bmo (ru.igis.omtab.OMT/getMapOb ?boat)]
  (if-let [mmo (ru.igis.omtab.OMT/getMapOb ?mark)]
    (let [bea (.bearingsDeg bmo mmo)
           dif (if (> bea ?wnd) (- bea ?wnd) (- ?wnd bea))
           dif (if (> dif 180) (- 360 dif) dif)
           sts (if (> dif (+ ?taa ?e)) 
	'CAN-ON-MARK
	'BEATING)]
      (when (not= sts ?sts)
        (println "Skipper" ?boat "status" sts)
        (modify ?s status sts))))))

(ss:Gainful Beating Course 0
(Mark label ?mark)
(Skipper status BEATING
	mark ?mark
	boat ?boat
	epsilon ?e)
(Boat label ?boat
	tack-angle ?taa)
(Wind direction ?wnd)
(not Advice text "BIG HEADER NEW COURSE"
	 boat ?boat)
=>
(if-let [bmo (ru.igis.omtab.OMT/getMapOb ?boat)]
  (if-let [mmo (ru.igis.omtab.OMT/getMapOb ?mark)]
    (let [bea (.bearingsDeg bmo mmo)
           crs (if (> ?wnd bea)
	(- ?wnd ?taa ?e)
	(+ ?wnd ?taa ?e))
           crs (sail.exp/trim-bear crs)] 
      (println "Gainful beating course" crs "on boat" ?boat)
      (asser NewCourse
	   boat ?boat 
	   course crs)))))

(bs:Boat Pitching 0
(Onboard boat ?boat)
(Wave pitch ?pit pitch-interval ?pin)
?bp (BoatPitch boat ?boat 
	slope ?slp
	time ?tim)
(Clock time ?t (> ?t ?tim))
=>
(if-let [bmo (ru.igis.omtab.OMT/getMapOb ?boat)]
  (let [[pit slp] (condp = ?slp
	'UP       [(- 6 ?pit) 'DOWN]
	'DOWN [(+ 6 ?pit) 'UP])]
    (sail.exp/camera-control bmo :pitch pit)
    (modify ?bp slope slp
	time (+ ?t ?pin)))))

(ss:Gone off Shore 0
?s (Skipper status OFF-SHORE
	boat ?boat
	time ?t1)
(Clock time ?t2 (> ?t2 ?t1))
=>
(modify ?s status 'UNDEFINED)
(asser ShoreCheck status 'START
	boat ?boat))

