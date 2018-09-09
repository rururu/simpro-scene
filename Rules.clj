(ws:Wind Change Direction 0
?w (Wind direction ?dir)
?moe (MapObEvent type "UPD_COURSE"
	label "Wind"
	course ?crs
	(not= ?crs ?dir))
=>
(let [d (if (< ?crs ?dir) 
            (- ?dir ?crs) 
            (- ?crs ?dir))
       s (if (< ?crs ?dir)
            (if (< d 180)
              'BACKING
              'VEERING)
            (if (< d 180)
              'VEERING
              'BACKING))]
  (println "Wind" s d "new direction" ?crs)
  (retract ?moe)
  (modify ?w direction ?crs
	shift s
                        shift-degrees d)))

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
  (println "Wind on map, direction" ?dir ",coords" [?lat ?lon])))

(ss:Winward on Beating 0
(Skipper status BEATING
	boat ?boat)
(Boat label ?boat
	course ?crs
	tack ?tack)
?ws (WindShift boat ?boat
	shift LIFT)
(Wind shift-degrees ?sid)
=>
(if-let [bmo (ru.igis.omtab.OMT/getMapOb ?boat)]
  (let [crs (if (= ?tack 'STARBOARD)
	(+ ?crs ?sid)
	(- ?crs ?sid))
         crs (int (sail.exp/trim-bear crs))]
    (println "Windward" ?boat)
    (retract ?ws)
    (.setCourse bmo crs))))

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

(ws:Boat Wind Shift End -1
?bws (BoatWindShift)
=>
;;(println "Boat Wind Shift End")
(retract ?bws))

(ss:Bear off or Go About on Beating 0
(Skipper status BEATING
	boat ?boat)
?ws (WindShift boat ?boat
	shift HEADER)
(Wind shift-degrees ?sid)
?b (Boat label ?boat
	course ?crs
	tack ?tack)
=>
(if-let [bmo (ru.igis.omtab.OMT/getMapOb ?boat)]
  (if (> ?sid 12)
    (modify ?b turn 'GO-ABOUT)
    (let [crs (if (= ?tack 'STARBOARD)
	(- ?crs ?sid)
	(+ ?crs ?sid))
           crs (int (sail.exp/trim-bear crs))]
      (println :OCRS ?crs :SID ?sid :NCRS crs)
      (retract ?ws)
      (.setCourse bmo crs)))))

(ss:Winward till Can on Mark 1
?s (Skipper status BEATING
	boat ?boat
	mark ?mark)
?ws (WindShift boat ?boat
	shift LIFT)
(Wind shift-degrees ?sid)
(Boat label ?boat (< (sail.exp/course-away-from-mark ?boat ?mark) ?sid))
=>
(println "Skipper" ?boat "status" 'GO-ON-MARK)
(retract ?ws)
(modify ?s status 'GO-ON-MARK))

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
      (.setCourse bmo (int bea))))))

(ss:Mark Abaft 0
(Route title ?tit	marks ?mm)
(Mark label ?mark)
?s (Skipper mark ?mark
	route ?tit
	lap ?lap
	boat ?boat
	status ?sts
	(not= ?sts 'UNDEFINED))
(Boat label ?boat)
(Clock (sail.exp/abaft ?boat ?mark))
=>
(println "Boat" ?boat "abaft the mark" ?mark)
(if (> ?lap (count ?mm))
  (println "Boat" ?boat "finished route" ?tit)
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
(Boat label ?lab course ?crs
	(not (ru.igis.omtab.OMT/getMapOb ?lab)))
=>
(when-let [ins (protege.core/fifos "NavOb" "label" ?lab)]
  (protege.core/ssv ins "course" ?crs)
  (ru.igis.omtab.OMT/getOrAdd ins)
  (println "Boat on map:" ?lab ", course" ?crs)))

(sim:RetractMapObEvent -10
?me (MapObEvent)
=>
(retract ?me))

(bs:Boat Change Course 0
?b (Boat label ?lab course ?ocrs)
?moe (MapObEvent type "UPD_COURSE"
	label ?lab
	course ?ncrs
	(not= ?ncrs ?ocrs))
=>
(println "Boat" ?lab "new course" ?ncrs)
(retract ?moe)
(modify ?b course ?ncrs
	sail-point 'UNDEFINED
	tack 'UNDEFINED))

(sim:RetractSecondClock 10
?c1 (Clock time ?t1)
?c2 (Clock time ?t2
	(< ?t2 ?t1))
=>
(retract ?c2))

(ss:Mark on Map 0
(Mark label ?lab latitude ?lat
	 longitude ?lon
	 url ?url
	 (not (ru.igis.omtab.OMT/getMapOb ?lab)))
=>
(when-let [ins (protege.core/fifos "NavOb" "label" ?lab)]
  (ru.igis.omtab.OMT/getOrAdd ins)
  (println "Mark on map:" ?lab ", coords" [?lat ?lon])))

(bs:Boat Sail Point 0
?b (Boat sail-point UNDEFINED
	label ?boat
	course ?crs
	tack-angle ?taa)
(Wind direction ?wnd)
=>
(let [dif (if (> ?crs ?wnd) (- ?crs ?wnd) (- ?wnd ?crs))
       dif (if (> dif 180) (- 360 dif) dif)
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
	status ?sts
	epsilon ?e)
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
        (.setCourse bmo (int bea))
        (println "Skipper" ?boat "status" sts)
        (modify ?s status sts))))))

(ss:Select Beating Course 0
(Mark label ?mark)
(Skipper status BEATING
	mark ?mark
	boat ?boat
	epsilon ?e)
(Boat label ?boat
	tack-angle ?taa)
(Wind direction ?wnd)
=>
(if-let [bmo (ru.igis.omtab.OMT/getMapOb ?boat)]
  (if-let [mmo (ru.igis.omtab.OMT/getMapOb ?mark)]
    (let [bea (.bearingsDeg bmo mmo)
           crs (if (> ?wnd bea)
	(- ?wnd ?taa ?e)
	(+ ?wnd ?taa ?e))
           crs (sail.exp/trim-bear crs)]
      (.setCourse bmo (int crs))))))

(ss:Make for Mark Advice 0
?b (Boat label ?boat)
(Mark label ?mark)
?s (Skipper advice MAKE-FOR-MARK
	boat ?boat
	mark ?mark)
=>
(if-let [bmo (ru.igis.omtab.OMT/getMapOb ?boat)]
  (when-let [mmo (ru.igis.omtab.OMT/getMapOb ?mark)]
    (.setCourse bmo (int (.bearingsDeg bmo mmo)))
    (modify ?s advice 'NIL
	status 'CRS-ON-MARK))))

(ss:Beating till Gainful 0
?s (Skipper status BEATING
	mark ?mark
	boat ?boat
	epsilon ?e)
?b (Boat wind CLOSEHAULED
	turn DONE
	label ?boat
	tack-angle ?taa)
(Clock (> (sail.exp/course-away-from-mark ?boat ?mark) (* 2 (+ ?taa ?e))))
=>
(println "Boat" ?boat "turn" 'GO-ABOUT)
(modify ?b turn 'GO-ABOUT))

(ss:Go-about While Beating 0
?b (Boat turn GO-ABOUT
	wind CLOSEHAULED
	label ?boat
	course ?crs
	tack-angle ?taa
	tack ?tack)
=>
(if-let [bmo (ru.igis.omtab.OMT/getMapOb ?boat)]
  (let [e 2
         trn (* 2 (+ ?taa e))
         crs (condp = ?tack 
                 'STARBOARD (+ ?crs trn)
                 'PORT (- ?crs trn))
         crs (sail.exp/trim-bear crs)]
    (modify ?b turn 'DOING)
    (.setCourse bmo crs))))

