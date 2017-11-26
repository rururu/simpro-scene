(s:FirstORFinalActionDone 0
?a (Action status "DONE" 
	parent ?pid
	instance ?ain
	next_actions ?nacts
	(= (count ?nacts) 0))
?t (Task status "DOING"
	title ?tit
	id ?pid
	final_actions ?facts 
	finish_type OR
	((s/include? ?facts ?ain)
	 (> (count ?facts) 1)))
=>
(println "Task (OR type) DONE:" ?tit)
(modify ?t status "DONE")
(retract ?a))

(a:SubscenarioRepeat 5
?sa (Subscenario status "REPEAT"
	id ?pid
	instance ?ain 
	parent ?par 
	next_actions ?nacts)
(Scenario status "DONE"
	parent ?pid)
=>
(retract ?sa)
(asser Action status "DONE" 
	parent ?par 
	instance ?ain 
	next_actions ?nacts))

(s:LastANDFinalActionDone 0
?a (Action status "DONE" 
	parent ?pid
	instance ?ain 
	next_actions ?nacts
	(= (count ?nacts) 0))
?t (Task status "DOING"
	title ?tit
	id ?pid
	final_actions ?facts 
	finish_type AND
	((s/include? ?facts ?ain)
	 (= (count ?facts) 1)))
=>
(println "Task (AND type) DONE:" ?tit)
(modify ?t status "DONE")
(retract ?a))

(s:InterimFinalActionDone 0
?a (Action status "DONE" 
	parent ?pid
	instance ?ain
	next_actions ?nacts
	(= (count ?nacts) 0))
?t (Task status "DOING"
	id ?pid
	final_actions ?facts 
	finish_type AND
	((s/include? ?facts ?ain)
	 (> (count ?facts) 1)))
=>
(modify ?t final_actions (s/exclude ?facts ?ain))
(retract ?a))

(a:PutOnMap 0
?pom (PutOnMap status "START" 
	title ?tit 
	object ?obj 
	latitude ?lat 
	longitude ?lon 
	mapob ?mos 
	run ?run
	protagonist ?pro
	instance ?ain 
	parent ?par 
	next_actions ?nacts)
=>
(println "Action started:" ?tit "PutOnMap")
(let [obj (a/vv ?obj ?pro ?run)]
  (if (not (a/null? obj))
    (if-let [mo (ru.igis.omtab.OMT/addMapOb obj)]
      (let [lat (a/vv ?lat ?pro ?run)
            lon (a/vv ?lon ?pro ?run)]
        (if (not (or (a/null? lat) (a/null? lon)))
          (.setLocation mo lat lon))) )))
(doseq [mo ?mos]
  (ru.igis.omtab.OMT/addMapOb mo))
(retract ?pom)
(asser Action status "DONE" 
	parent ?par 
	instance ?ain 
	next_actions ?nacts))

(a:ArriveStart 0
?arr (Arrive status "START" 
	title ?tit 
	object ?obj 
	latitude ?lat 
	longitude ?lon 
	speed ?spd 
	run ?run
	protagonist ?pro)
=>
(println "Action started:" ?tit "Arrive")
(if-let [mo (a/mapob-vv ?obj ?pro ?run)]
  (let [lt (a/degmin-to-deg ?lat ?pro ?run)
        ln (a/degmin-to-deg ?lon ?pro ?run)]
    (if (or (nil? lt) (nil? ln))
      (modify ?arr status "FAILED")
      (do (a/go mo lt ln ?spd)
        (modify ?arr status "REPEAT" latitude lt longitude ln))))
  (modify ?arr status "FAILED")))

(a:ArriveRepeat 0
?arr (Arrive status "REPEAT" 
	object ?obj 
	latitude ?lat 
	longitude ?lon 
	radius ?rad
 	run ?run
	protagonist ?pro)
(Clock time ?t)
=>
(if-let [mo (a/mapob-vv ?obj ?pro ?run)]
  (if (or (.near mo ?lat ?lon ?rad) (.abaft mo ?lat ?lon))
    (modify ?arr status "DONE")
    (if (> (.distanceNM mo ?lat ?lon) 100)
      (.setCourse mo (int (.bearingsDeg mo ?lat ?lon)) ) ))
  (modify ?arr status "FAILED")))

(s:StartNextActions 0
?a (Action status "DONE" 
	parent ?pid
	instance ?ain 
	next_actions ?nacts
	(> (count ?nacts) 0))
(Task id ?pid run ?run)
=>
(s/start-tasks-actions ?nacts ?pid ?run)
(retract ?a))

(s:ClearScenarioActivities 0
(Scenario status "DONE"
	title ?tit
	id ?id
	run ?run
	protagonist ?pro)
=>
(s/remove-context-attribute ?pro ?run)
(s/clear-scenario-activities ?id))

(a:SubscenarioStart 0
?sa (Subscenario status "START"
	id ?pid
	title ?tit
	sub_scenario ?sub
	context ?ctx 
	player ?pla 
	wait_subscenario ?wai
	run ?run
	protagonist ?pro)
=>
(println "Action started:" ?tit "Subscenario")
(modify ?sa status (a/subscenario ?sub ?ctx ?pla ?wai ?pid ?pro ?run)))

(a:SubscenarioDone 0
?sa (Subscenario status "DONE"
	instance ?ain 
	parent ?par 
	next_actions ?nacts)
=>
(retract ?sa)
(asser Action status "DONE" 
	parent ?par 
	instance ?ain 
	next_actions ?nacts))

(a:TimeMessage 0
?tm (TimeMessage status "START"
	title ?tit
	clients ?cls
	category ?cat
	text ?txt
	instance ?ain 
	parent ?par
	protagonist ?pro
	run ?run
	next_actions ?nacts)
=>
(println "Action started:" ?tit "TimeMessage")
(a/time-message ?txt ?cat ?cls ?pro ?run)
(retract ?tm)
(asser Action status "DONE" 
	parent ?par 
	instance ?ain 
	next_actions ?nacts))

(a:PutOffMap 0
?pom (PutOffMap status "START"
	title ?tit
	mapob ?mos
	object ?obj
	delete ?del
	instance ?ain
	parent ?par
	run ?run
	protagonist ?pro
	next_actions ?nacts)
=>
(println "Action started:" ?tit "PutOffMap")
(a/put-off-map ?obj ?mos ?del ?pro ?run)
(retract ?pom)
(asser Action status "DONE"
	parent ?par 
	instance ?ain
	next_actions ?nacts))

(a:GoRouteStart 0
?gor (GoRoute status "START"
	title ?tit
	object ?obj
	route ?rou
	spd ?spd
	backward ?bwd
	radius ?rad
	run ?run
	parent ?par
	protagonist ?pro)
=>
(println "Action started:" ?tit "GoRoute")
(let [rou (a/vv ?rou ?pro ?run)
       obj (a/vv ?obj ?pro ?run)
       pts (protege.core/svs rou "points")
       cnt (count pts)
       pnt (if (protege.core/is? ?bwd)
              (dec cnt)
              0)] 
  (modify ?gor status (a/arriveN ?tit obj rou pnt ?spd ?rad ?pro ?run ?par)
	object obj
	route rou
	N pnt)))

(a:GoRouteRepeat 0
?gor (GoRoute status ?sts
	title ?tit
	object ?obj 
	route ?rou
	spd ?spd 
	radius ?rad
	backward ?bwd
	N ?n
	run ?run
	parent ?par
	protagonist ?pro
	((not= ?sts "START")
	 (not= ?sts "DONE")))
(Clock)
(not Arrive title ?sts)
=>
(let [next (if (protege.core/is? ?bwd)
	(dec ?n)
	(inc ?n))]
  (modify ?gor status (a/arriveN ?tit ?obj ?rou next ?spd ?rad ?pro ?run ?par)
	N next)))

(a:GoRouteDone 0
?gor (GoRoute status "DONE" 
	instance ?ain
	parent ?par 
	next_actions ?nacts)
=>
(retract ?gor)
(asser Action status "DONE" 
	parent ?par 
	instance ?ain
	next_actions ?nacts))

(s:LastANDFinalTaskDone 0
?t (Task status "DONE" 
	parent ?pid
	instance ?tin)
?s (Scenario status "DOING"
	id ?pid
	title ?tit
	final_tasks ?ftasks
	((s/include? ?ftasks ?tin)
	 (= (count ?ftasks) 1)))
=>
(println "Scenario DONE:" ?tit)
(modify ?s status "DONE")
(retract ?t))

(a:WaitEventStart 0
?we (WaitEvent status "START"
	id ?pid
	title ?tit
	event ?evt
	run ?run
	protagonist ?pro)
=>
(println "Action started:" ?tit "WaitEvent")
(modify ?we status (a/wait-event ?evt ?pid ?pro ?run)))

(s:StartNextTasks 0
(Task status "DONE" 
	parent ?pid
	run ?run
	next_tasks ?ntasks
	(> (count ?ntasks) 0))
=>
(s/start-tasks-actions ?ntasks ?pid ?run))

(a:WaitEventRepeatTOR 0
?we (WaitEvent status "REPEAT"
	id ?pid
	instance ?ain 
	parent ?par 
	run ?run
	protagonist ?pro
	next_actions ?nacts)
(Clock time ?t)
?tor (TwoObRelation title ?tit2
	ob_relation ?obr
	object ?obj
	observer ?obs
	radius ?rad
	value ?val
	parent ?pid
	(e/two-ob-relation ?obr ?obj ?obs ?rad ?val ?pro ?run))
=>
(retract ?we ?tor)
(asser Action status "DONE" 
	parent ?par 
	instance ?ain 
	next_actions ?nacts))

(a:Calculus 0
?clc (Calculus status "START" 
	title ?tit 
	input_data ?ida 
	source ?src 
	results ?res
	instance ?ain
	run ?run
	parent ?par 
	protagonist ?pro
	next_actions ?nacts)
=>
(println "Action started:" ?tit "Calculus")
(let [bnd (mapcat #(d/input-var-val % ?pro ?run) ?ida)
       bnd2 (if (not (a/null? ?pro))
	(d/proto-var-val ?pro ?run))
       bnd3  (d/parse-let-body (d/uncomment  ?src))
       bnd4 (vec (concat bnd bnd2 bnd3))
       vvm (d/var-val-map bnd4)
       exp `(let ~bnd4 ~vvm)
       ;;_ (println :EXP exp)
       vvm2 (eval exp)]
  (d/to-proto-var-val bnd2 vvm2 ?pro ?run)
  (doseq [re ?res]
    (d/to-result-var-val re vvm2 ?pro ?run)))
(retract ?clc)
(asser Action status "DONE" 
	parent ?par 
	instance ?ain
	next_actions ?nacts))

(d:EventDecision 0
?ed (EventDecision status "START" 
	title ?tit
	events ?evs
	variants ?vrs
	parent ?pid
	run ?run)
=>
(println "Decision:" ?tit "EventDecision")
(s/start-tasks-actions (d/event-decision ?evs ?vrs ?run) ?pid ?run)
(retract ?ed))

(a:LinkOnOff 0
?loo (LinkOnOff status "START" 
	title ?tit 
	object ?obj 
	observer ?obs 
	flag ?flg
	lineColor ?col
	line ?lin
	run ?run
	protagonist ?pro
	instance ?ain 
	parent ?par 
	next_actions ?nacts)
=>
(println (str "Action started: " ?tit " LinkOnOff"))
(let [obj (a/mapob-vv ?obj ?pro ?run)
       obs (a/mapob-vv ?obs ?pro ?run)
       col (a/vv ?col ?pro ?run)
       lin (a/vv ?lin ?pro ?run)]
  (if (and obj obs)
    (let [pg (.getPlayground obs)
           nam (str (.getName obs) "-" (.getName obj))]
      (if (protege.core/is? ?flg)
        (ru.igis.omtab.OMT/addMapOb (ru.igis.omtab.Link. nam obs obj col lin) pg)
        (if-let[lnk (ru.igis.omtab.OMT/getMapOb nam)]
          (ru.igis.omtab.OMT/removeMapOb lnk false)))
      (retract ?loo)
      (asser Action status "DONE" 
	parent ?par 
	instance ?ain 
	next_actions ?nacts))
    (modify ?loo status "FAILED"))))

(d:UserDecision 0
?ud (UserDecision status "START" 
	title ?tit 
	parent ?par
	run ?run
	variants ?vrs)
=>
(println "Decision:" ?tit "UserDecision")
(s/start-tasks-actions (d/user-decision ?vrs) ?par ?run)
(retract ?ud))

(a:RepeatActionOnOff 0
?rao (RepeatActionOnOff status "START" 
	title ?tit 
	collection ?col
	flag ?flg 
	repeat-action ?ra
	instance ?ain 
	run ?run
	parent ?par 
	protagonist ?pro
	next_actions ?nacts)
=>
(println "Action started:" ?tit "RepeatActionOnOff")
(a/repeat-action-onoff ?ra ?col ?flg ?pro ?run)
(retract ?rao)
(asser Action status "DONE" 
	parent ?par 
	instance ?ain 
	next_actions ?nacts))

(a:WaitEventRepeatOP 0
?we (WaitEvent status "REPEAT" 
	id ?pid
	instance ?ain 
	parent ?par 
	run ?run
	protagonist ?pro 
	next_actions ?nacts)
(Clock time ?t)
?op (ObProperty title ?tit2
	ob_property ?prop
	object ?obj
	radius ?rad
	latitude ?lat
	longitude ?lon
	value ?val
	parent ?pid
	(e/ob-property ?prop ?obj ?rad ?lat ?lon ?val ?pro ?run))
=>
(retract ?we ?op)
(asser Action status "DONE" 
	parent ?par 
	instance ?ain 
	next_actions ?nacts))

(a:WaitEventRepeatOA 0
?we (WaitEvent status "REPEAT"
	id ?pid
	instance ?ain 
	parent ?par 
	run ?run
	protagonist ?pro 
	next_actions ?nacts)
(Clock time ?t)
?oa (ObAttribute title ?tit2
	attribute ?atr
	object ?obj
	relation ?rel
	value ?val
	parent ?pid
	(e/ob-attribute ?atr ?obj ?rel ?val ?pro ?run))
=>
(retract ?we ?oa)
(asser Action status "DONE" 
	parent ?par 
	instance ?ain 
	next_actions ?nacts))

(d:GeneralDecision 0
?gd (GeneralDecision status "START" 
	title ?tit
	input_data ?ida
	conditions ?cds
	variants ?vrs
	parent ?par
	run ?run)
=>
(println "Decision:" ?tit "GeneralDecision")
(s/start-tasks-actions (d/general-decision ?ida ?cds ?vrs ?run) ?par ?run)
(retract ?gd))

(a:PositionStart 0
?pos (Position status "START" 
	title ?tit 
	object ?obj
	observer ?obs
	position-angle ?posa 
	position-distance ?posd 
	position-speed ?poss 
	relative ?rel
	radius ?rad
	run ?run
	protagonist ?pro)
=>
(println "Action started:" ?tit "Position")
(if-let [[mob lat lon spdb crss spds] (a/future-position ?obj ?obs ?posa ?posd ?poss ?rel ?rad ?pro ?run)]
  (if (> spdb 0)
    (do (a/go mob lat lon spdb)
      (modify ?pos status "REPEAT"
	course crss
	speed spds))
    (do (a/take-position ?obj ?obs ?posa ?posd ?poss ?rel ?pro ?run)
          (modify ?pos status "DONE")))
  (modify ?pos status "FAILED")))

(a:PutOnPlace 0
?pop (PutOnPlace status "START" 
	title ?tit 
	object ?obj 
	observer ?obs 
	mapob ?mos
	run ?run
	protagonist ?pro
	instance ?ain 
	parent ?par
	next_actions ?nacts)
=>
(println "Action started:" ?tit "PutOnPlace")
(let [obj (a/vv ?obj ?pro ?run)
       obs (a/vv ?obs ?pro ?run)
       sts (if (or (a/null? obs) (and (a/null? obj) (empty? ?mos)))
               "FAILED"
               (if-let [ms (ru.igis.omtab.OMT/getMapOb obs)]
                 (let [lat (.getLatitudeDM ms)
                        lon (.getLongitudeDM ms)]
                   (doseq [mo ?mos]
                     (-> (ru.igis.omtab.OMT/addMapOb mo) 
                       (.setLocation lat lon)))
                   (if (not (a/null? obj))
                     (.setLocation (ru.igis.omtab.OMT/addMapOb obj) lat lon))
                   "DONE")
                 "FAILED"))]
  (retract ?pop)
  (asser Action status sts 
	parent ?par 
	instance ?ain 
	next_actions ?nacts)))

(a:PositionRepeat 0
(Clock time ?t)
?pos (Position status "REPEAT" 
	title ?tit 
	object ?obj
	observer ?obs
	position-angle ?posa 
	position-distance ?posd 
	position-speed ?poss 
	relative ?rel 
	radius ?rad
	run ?run
	protagonist ?pro
	(a/in-position? ?obj ?obs ?posa ?posd ?poss ?rel ?rad ?pro ?run))
=>
(a/take-position ?obj ?obs ?posa ?posd ?poss ?rel ?pro ?run)
(modify ?pos status "DONE"))

(a:ObjectMessageStart 0
?om (ObjectMessage status "START"
	title ?tit
	clients ?cls
	object ?obj
	category ?cat
	text ?txt
	url ?url
	run ?run
	protagonist ?pro)
=>
(println "Action started:" ?tit "ObjectMessage")
(modify ?om status (a/object-message ?tit ?obj ?txt ?url ?cat ?cls ?pro ?run)))

(a:ObjectMessageDone 0
?om (ObjectMessage status "DONE"
	instance ?ain
	parent ?par
	next_actions ?nacts)
=>
(retract ?om)
(asser Action status "DONE" 
	parent ?par 
	instance ?ain
	next_actions ?nacts))

(a:Break 0
?brk (Break status "START"
	title ?tit
	activity ?act
	instance ?ain
	parent ?par
	run ?run
	protagonist ?pro
	next_actions ?nacts)
=>
(println "Action started:" ?tit "Break")
(if-let [act (a/vv ?act ?pro ?run)]
  (do (condp = (protege.core/typ act)
	"Scenario" (a/break-scenario act ?run)
	"Task" (a/break-task act ?run)
	(a/break-action  act ?run))
    (retract ?brk)
    (asser Action status "DONE" 
	parent ?par 
	instance ?ain
	next_actions ?nacts))
  (modify ?brk status "FAILED")))

(a:TowOnOffStart 0
?too (TowOnOff status "START" 
	title ?tit 
	object ?obj 
	observer ?obs 
	flag ?flg
	position-angle ?poa
	position-distance ?pod
	relative ?rel
	run ?run
	protagonist ?pro)
=>
(println "Action started:" ?tit "TowOnOff")
(modify ?too status (a/tow-on-off ?obj ?obs ?flg ?poa ?pod ?rel ?pro ?run)))

(a:TowOnOffDone 0
?too (TowOnOff status "DONE" 
	instance ?ain 
	parent ?par 
	next_actions ?nacts)
=>
(retract ?too)
(asser Action status "DONE" 
	parent ?par 
	instance ?ain 
	next_actions ?nacts))

(a:SearchStart 0
?sea (Search status "START" 
	title ?tit 
	time ?tim
	run ?run
	protagonist ?pro)
(Clock time ?t)
=>
(println "Action started:" ?tit "Search")
(modify ?sea status "OUTSIDE" 
	N (a/to-be ?t (a/vv ?tim ?pro ?run))))

(a:SearchTimeEnd 0
(Clock time ?t)
?sea (Search status ?sta
	N ?n
	((not= ?sta "DONE")
	 (number? ?n)
	 (> ?t ?n)))
=>
(modify ?sea status "DONE"))

(a:SearchDone 0
?sea (Search status "DONE"
	instance ?ain
	parent ?par
	next_actions ?nacts)
=>
(retract ?sea)
(asser Action status "DONE" 
	parent ?par 
	instance ?ain
	next_actions ?nacts))

(a:SearchOutside 0
?sea (Search status "OUTSIDE"
	object ?obj
	observer ?obs
	detect-distance ?dd
	detect-probability ?dp
	client ?cli
	run ?run
	protagonist ?pro)
(Clock)
=>
(let [obs (a/mapob-vv ?obs ?pro ?run)
       obj (a/mapob-vv ?obj ?pro ?run)
       dd (a/vv ?dd ?pro ?run)
       dp (a/vv ?dp ?pro ?run)
       cli (a/vv ?cli ?pro ?run)]
  (if (every? some? [obs obj dd dp])
    (if (<= (.distanceNM obs obj) (read-string dd))
      (if (<= (Math/random) (read-string dp))
        (do (.putAttribute obs "DETECT" (.getName obj))
          (.putAttribute obj "DETECTED-BY" (.getName obs)) 
          ;;(if (not (a/null? cli))
          ;;  (navobs.commands/set-visible true obj (protege.core/sv cli "id")))
          (modify ?sea status "DONE"))
        (modify ?sea status "INSIDE")))
    (modify ?sea status "FAILED"))))

(a:SearchInside 0
?sea (Search status "INSIDE"
	object ?obj
	observer ?obs
	detect-distance ?dd
	run ?run
	protagonist ?pro)
(Clock)
=>
(let [obs (a/mapob-vv ?obs ?pro ?run)
       obj (a/mapob-vv ?obj ?pro ?run)
       dd (a/vv ?dd ?pro ?run)]
  (if (every? some? [obs obj dd])
    (if (> (.distanceNM obs obj) (read-string dd))
      (modify ?sea status "OUTSIDE"))
    (modify ?sea status "FAILED"))))

(a:PutObAttributesStart 0
?poa (PutObAttributes status "START"
	title ?tit
	object ?obj
	attributes ?atrs
	values ?vals
	run ?run
	protagonist ?pro)
=>
(println "Action started:" ?tit "PutObAttributes")
(modify ?poa status (a/put-ob-attributes ?obj ?atrs ?vals ?pro ?run)))

(a:PutObAttributesDone 0
?poa (PutObAttributes status "DONE" 
	instance ?ain 
	parent ?par 
	next_actions ?nacts)
=>
(retract ?poa)
(asser Action status "DONE" 
	parent ?par 
	instance ?ain 
	next_actions ?nacts))

(s:FirstORFinalTaskDone 0
?t (Task status "DONE"
	parent ?pid
	instance ?tin)
?s (Scenario status "DOING" 
	id ?pid
	title ?tit
	final_tasks ?ftasks 
	finish_type OR
	((s/include? ?ftasks ?tin)
	 (>= (count ?ftasks) 1)))
=>
(println "Scenario DONE:" ?tit)
(modify ?s status "DONE")
(retract ?t))

(s:HangingFinalActionDone -5
?ac (Action status "DONE" 
	next_actions ?nacts
	(= (count ?nacts) 0))
=>
(retract ?ac))

(s:InterimFinalTaskDone 0
?t (Task status "DONE"
	parent ?pid
	instance ?tin)
?s (Scenario status "DOING"
	id ?pid
	final_tasks ?ftasks 
	finish_type AND
	((s/include? ?ftasks ?tin)
	 (> (count ?ftasks) 1)))
=>
(modify ?s final_tasks (s/exclude ?ftasks ?tin))
(retract ?t))

(a:AttributeMessage 0
?am (AttributeMessage status "START"
	title ?tit
	clients ?cls
	category ?cat
	text ?txt
	object ?obj
	attribute ?atr
	instance ?ain 
	parent ?par
	protagonist ?pro
	run ?run
	next_actions ?nacts)
=>
(println "Action started:" ?tit "AttributeMessage")
(a/attribute-message ?txt ?obj ?atr ?cat ?cls ?pro ?run)
(retract ?am)
(asser Action status "DONE" 
	parent ?par 
	instance ?ain 
	next_actions ?nacts))

(a:ShowDone 0
?dis (Show status "DONE" 
	instance ?ain
	parent ?par 
	next_actions ?nacts)
=>
(retract ?dis)
(asser Action status "DONE" 
	parent ?par 
	instance ?ain 
	next_actions ?nacts))

(a:ShowStart 0
?dis (Show status "START" 
	title ?tit 
	thing ?thi
	text ?txt
	label ?lab
	run ?run
	protagonist ?pro)
=>
(println "Action started:" ?tit "Show")
(modify ?dis status (a/show ?tit ?thi ?txt ?lab ?pro ?run)))

(a:ComputeStart 0
?cmp (Compute status "START" 
	title ?tit 
	computation ?com 
	run ?run
	protagonist ?pro)
=>
(println "Action started:" ?tit "Compute")
(modify ?cmp status (a/compute ?com ?pro ?run)))

(a:ComputeDone 0
?cmp (Compute status "DONE"
	instance ?ain
	parent ?par 
	next_actions ?nacts)
=>
(retract ?cmp)
(asser Action status "DONE" 
	parent ?par 
	instance ?ain 
	next_actions ?nacts))

(s:StartTask 0
?t (Task status "START" 
	title ?tit
	id ?id
	run ?run
	initial_actions ?iacts)
=>
(println "Task started:" ?tit)
(modify ?t status "DOING")
(s/start-tasks-actions ?iacts ?id ?run))

(a:PutObPropertiesStart 0
?pop (PutObProperties status "START" 
	title ?tit 
	object ?obj
	latitude ?lat
	longitude ?lon
	new_course ?crs
	new_speed ?spd
	run ?run
	protagonist ?pro)
=>
(println "Action started:" ?tit "PutObProperties")
(modify ?pop status (a/put-ob-properties ?obj ?lat ?lon ?crs ?spd ?pro ?run)))

(s:StartScenario 0
?s (Scenario status "START" 
	title ?tit
	id ?id
	run ?run)
	initial_tasks ?itasks)
=>
(println "Scenario started:" ?tit)
(modify ?s status "DOING")
(s/start-tasks-actions ?itasks ?id ?run))

(a:PutObPropertiesDone 0
?pop (PutObProperties status "DONE" 
	instance ?ain
	parent ?par 
	next_actions ?nacts)
=>
(retract ?pop)
(asser Action status "DONE" 
	parent ?par 
	instance ?ain 
	next_actions ?nacts))

(a:CreateByModel 0
?cbm (CreateByModel status "START"
	title ?tit
	model ?mod
	object ?obj
	instance ?ain
	parent ?par
	run ?run
	protagonist ?pro
	next_actions ?nacts)
=>
(println "Action started:" ?tit "CreateByModel")
(a/create-by-model ?mod ?obj ?pro ?run)
(retract ?cbm)
(asser Action status "DONE" 
	parent ?par 
	instance ?ain
	next_actions ?nacts))

(s:JoinTaskDone 0
?t (Task status "DONE"
	run ?run
	instance ?tin)
?j (Join status "START"
	id ?id
	title ?tit
	run ?run
	join_tasks ?jtasks
	(s/include? ?jtasks ?tin))
=>
(modify ?j join_tasks (s/exclude ?jtasks ?tin)
	status "REPEAT")
(retract ?t))

(s:RetractRedundantJoin 0
?j1 (Join status "REPEAT"
	id ?id1
	run ?run
	instance ?jin
	join_tasks ?jtasks1)
?j2 (Join status "REPEAT"
	id ?id2
	run ?run
	instance ?jin
	join_tasks ?jtasks2
	(not= ?id1 ?id2))
=>
(retract ?j2)
(modify ?j1 join_tasks (s/conjunct ?jtasks1 ?jtasks2)))

(s:JoinDone 0
?j (Join status "REPEAT"
	title ?tit
	run ?run
	parent ?pid
	join_tasks ?jtasks
	next_tasks ?ntasks
	(= (count ?jtasks) 0))
=>
(println "Join DONE:" ?tit)
(retract ?j)
(s/start-tasks-actions ?ntasks ?pid ?run))

(a:DelayRepeat 0
(Clock time ?t)
?del (Delay status "REPEAT" 
	N ?n 
	instance ?ain
	parent ?par 
	next_actions ?nacts
	(> ?t ?n))
=>
(retract ?del)
(asser Action status "DONE" 
	parent ?par 
	instance ?ain
	next_actions ?nacts))

(s:EndEmptyTask 0
?ts (Task status "START" 
	title ?tit 
	task_scheme ?tsc
	(empty? ?tsc))
=>
(println "Empty Task DONE:" ?tit)
(modify ?ts status "DONE"))

(a:DeleteResource 0
?dr (DeleteResource status "START"
	title ?tit
	object ?obj
	resource ?res
	instance ?ain
	parent ?par
	run ?run
	protagonist ?pro
	next_actions ?nacts)
=>
(println "Action started:" ?tit "DeleteResource")
(let [mo (a/mapob-vv ?obj ?pro ?run)
       atr (protege.core/sv ?res "title")
       rr (.getAttribute mo atr)]
  (if (seq rr)
    (do (doseq [ins (rest rr)]
            (protege.core/delin ins))
        (.removeAttribute mo atr)
        (retract ?dr)
        (asser Action status "DONE" 
	parent ?par 
	instance ?ain 
	next_actions ?nacts))
    (modify ?dr status "FAILED"))))

(a:DelayStart 0
?d (Delay status "START" 
	title ?tit 
	delay ?del
	protagonist ?pro
	run ?run)
(Clock time ?t)
=>
(println "Action started:" ?tit  "Delay")
(if-let [del (a/vv ?del ?pro ?run)]
  (modify ?d status "REPEAT" 
	N (a/to-be ?t del))
  (modify ?d status "FAILED")))

(a:AssertObjects 0
?aos (AssertObjects status "START"
	title ?tit
	object ?obj
	collection ?col
	instance ?ain
	parent ?par
	run ?run
	protagonist ?pro
	next_actions ?nacts)
=>
(println "Action started:" ?tit "AssertObjects")
(let [obj (a/vv ?obj ?pro ?run)
      inss (if (a/null? obj) ?col (cons obj ?col))]
  (ru.rules/assert-instances inss))
(retract ?aos)
(asser Action status "DONE" 
	parent ?par 
	instance ?ain
	next_actions ?nacts))

(a:Visible 0
?vis (Visible status "START"
	title ?tit
	object ?obj
	mapob ?mos
	flag ?flg
	client ?cli
	instance ?ain
	parent ?par
	run ?run
	protagonist ?pro
	next_actions ?nacts)
=>
(println "Action started:" ?tit "Visible")
(let [cli (a/vv ?cli ?pro ?run)]
  (if (not (a/null? cli))
    (let [visi (protege.core/is? ?flg)
           clid (protege.core/sv cli "id")]
      (if-let [mo (a/mapob-vv ?obj ?pro ?run)]
        (navobs.commands/set-visible (.getName mo) visi clid))
      (doseq [mo ?mos]
        (if-let [mo (ru.igis.omtab.OMT/getMapOb mo)]
          (navobs.commands/set-visible (.getName mo) visi clid))))))
(retract ?vis)
(asser Action status "DONE" 
	parent ?par 
	instance ?ain
	next_actions ?nacts))

(a:AttributesToVariables 0
?atv (AttributesToVariables status "START"
	title ?tit
	objects ?obs
	attributes ?ats
	variables ?vrs
	instance ?ain
	parent ?par
	run ?run
	protagonist ?pro
	next_actions ?nacts)
=>
(println "Action started:" ?tit "AttributesToVariables")
(loop [oo ?obs aa ?ats vv ?vrs]
  (if (and (seq oo) (seq aa) (seq vv))
    (if-let [mo (a/mapob-vv (first oo) ?pro ?run)]
      (when-let [avl (.getAttribute mo (protege.core/sv (first aa) "title"))]
        (a/pvv (first vv) avl ?pro ?run)
        (recur (rest oo) (rest aa) (rest vv))) )))
(retract ?atv)
(asser Action status "DONE" 
	parent ?par 
	instance ?ain
	next_actions ?nacts))

(a:WaitModelClockStart 0
?wms (WaitModelClock status "START" 
	title ?tit 
	time ?tim
	protagonist ?pro
	run ?run)
=>
(println "Action started:" ?tit "WaitModelClock")
(if-let [tim (a/vv ?tim ?pro ?run)]
  (modify ?wms status "REPEAT" 
	N (a/op-time-sec tim))
  (modify ?wms status "FAILED")))

(a:SetModelClock 0
?smc (SetModelClock status "START"
	title ?tit
	time ?tim
	instance ?ain
	parent ?par
	run ?run
	protagonist ?pro
	next_actions ?nacts)
=>
(println "Action started:" ?tit "SetModelClock")
(let [tim (a/vv ?tim ?pro ?run)
      sec (a/op-time-sec tim)]
    (ru.igis.omtab.Clock/setClock (long (* 1000 sec))))
(retract ?smc)
(asser Action status "DONE" 
	parent ?par 
	instance ?ain
	next_actions ?nacts))

(a:LoadResource 0
?lr (LoadResource status "START"
	title ?tit
	object ?obj
	resource ?res
	mapob ?mos
	seed ?sed
                        number ?num
	rename ?ren
	instance ?ain
	parent ?par
	run ?run
	protagonist ?pro
	next_actions ?nacts)
=>
(println "Action started:" ?tit "LoadResource")
(let [mo (a/mapob-vv ?obj ?pro ?run)
       sed (a/vv ?sed ?pro ?run)
       num (a/vv ?num ?pro ?run)
       rr (and mo
            (or (seq ?mos) 
               (and sed num
                 (let [nms (if (protege.core/sv sed "label") "label" "title")
                        nam (protege.core/sv sed nms)
                        rng (range 1 (inc (read-string num)))]
                   (for [i rng] (let [c (.shallowCopy sed nil nil)]
	              (if (protege.core/is? ?ren)
	                (protege.core/ssv c nms (str nam i))) 
                                      c))))))]
  (if (seq rr)
    (do (.putAttribute mo (protege.core/sv ?res "title") (vec (cons 0 rr)))
      (retract ?lr)
      (asser Action status "DONE" 
	parent ?par 
	instance ?ain 
	next_actions ?nacts))
    (modify ?lr status "FAILED"))))

(d:ODecision 0
?od (ODecision status "START" 
	title ?tit
	input_data ?ida
	before ?bef
	choices ?chs
	variants ?vrs
	parent ?par
	run ?run)
=>
(println "Decision:" ?tit "ODecision")
(s/start-tasks-actions (d/o-decision ?ida ?bef ?chs ?vrs ?run) ?par ?run)
(retract ?od))

(a:WaitModelClockRepeat 0
(Clock time ?t)
?wms (WaitModelClock status "REPEAT" 
	N ?n 
	instance ?ain
	parent ?par 
	next_actions ?nacts
	(> ?t ?n))
=>
(retract ?wms)
(asser Action status "DONE" 
	parent ?par 
	instance ?ain
	next_actions ?nacts))

(a:InterceptStart 0
?ict (Intercept status "START" 
	title ?tit 
	object ?obj
	observer ?obs
	position-angle ?posa 
	position-distance ?posd 
	position-speed ?poss 
	relative ?rel 
	radius ?rad
	run ?run
	protagonist ?pro)
=>
(println "Action started:" ?tit "Intercept")
(if-let [[mob lat lon spdb crss spds] (a/future-position ?obj ?obs ?posa ?posd ?poss ?rel ?rad ?pro ?run)]
  (do (a/go mob lat lon spdb)
    (modify ?ict status "REPEAT"
	course crss
	speed spds))
  (modify ?ict status "FAILED")))

(a:InterceptInPosition 0
(Clock time ?t)
?ict (Intercept status "REPEAT" 
	title ?tit 
	object ?obj
	observer ?obs
	position-angle ?posa 
	position-distance ?posd 
	position-speed ?poss 
	relative ?rel 
	radius ?rad
	instance ?ain
	parent ?par 
	run ?run
	protagonist ?pro
	next_actions ?nacts
	(a/in-position? ?obj ?obs ?posa ?posd ?poss ?rel ?rad ?pro ?run))
=>
(a/take-position ?obj ?obs ?posa ?posd ?poss ?rel ?pro ?run)
(retract ?ict)
(asser Action status "DONE" 
	parent ?par 
	instance ?ain
	next_actions ?nacts))

(a:InterceptOnShotDistance 5
(Clock time ?t)
?ict (Intercept status "REPEAT" 
	title ?tit 
	object ?obj
	observer ?obs
	position-angle ?posa 
	position-distance ?posd 
	position-speed ?poss 
	relative ?rel 
	shot_distance ?shd
	instance ?ain
	parent ?par 
	run ?run
	protagonist ?pro
	next_actions ?nacts
	((not (s/qm ?shd))
	 (a/on-shot-dist? ?obj ?obs ?shd ?pro ?run)))
=>
(let [mob (a/mapob-vv ?obj ?pro ?run)
      mos (a/mapob-vv ?obs ?pro ?run)]
  (.setCourse mob (.getCourse mos)))
(retract ?ict)
(asser Action status "DONE" 
	parent ?par 
	instance ?ain
	next_actions ?nacts))

(d:IfActivityStatus 0
?ias (IfActivityStatus status "START" 
	title ?tit 
	activities ?ats
	statuses ?sts
	parent ?par
	run ?run
	variants ?vrs)
=>
(println "Decision:" ?tit "IfActivityStatus")
(s/start-tasks-actions (d/if-activity-status ?ats ?sts ?vrs ?run) ?par ?run)
(retract ?ias))

(a:MovingObjectMessageStart 0
?mom (MovingObjectMessage status "START"
	title ?tit
	clients ?cls
	object ?obj
	category ?cat
	text ?txt
	url ?url
	run ?run
	protagonist ?pro)
=>
(println "Action started:" ?tit "MovingObjectMessage")
(modify ?mom status (a/moving-object-message ?tit ?obj ?txt ?url ?cat ?cls ?pro ?run)))

(a:PositionObserverManeuver -5
(Clock time ?t)
?pos (Position status "REPEAT" 
	course ?crs
	speed ?spd
	object ?obj
	observer ?obs
	position-angle ?posa 
	position-distance ?posd 
	position-speed ?poss 
	relative ?rel
	radius ?rad
	run ?run
	protagonist ?pro
	(a/observer-maneuver? ?obs ?crs ?spd ?pro ?run))
=>
(when-let [[mob lat lon spdb crss spds] (a/future-position ?obj ?obs ?posa ?posd ?poss ?rel ?rad ?pro ?run)]
  (a/go mob lat lon spdb)
  (modify ?pos course crss
	speed spds)))

(a:InterceptObserverManeuver 0
(Clock time ?t)
?ict (Intercept status "REPEAT" 
	course ?crs
	speed ?spd
	object ?obj
	observer ?obs
	position-angle ?posa 
	position-distance ?posd 
	position-speed ?poss 
	relative ?rel
	radius ?rad
	run ?run
	protagonist ?pro
	(a/observer-maneuver? ?obs ?crs ?spd ?pro ?run))
=>
(when-let [[mob lat lon spdb crss spds] (a/future-position ?obj ?obs ?posa ?posd ?poss ?rel ?rad ?pro ?run)]
  (a/go mob lat lon spdb)
  (modify ?ict course crss
	speed spds)))

(a:UseResource 0
?ur (UseResource status "START"
	title ?tit
	object ?obj
	resource ?res
	variable ?var
	instance ?ain
	parent ?par
	run ?run
	protagonist ?pro
	next_actions ?nacts)
=>
(println "Action started:" ?tit "UseResource")
(let [mo (a/mapob-vv ?obj ?pro ?run)
       atr (protege.core/sv ?res "title")
       [idx & rr] (.getAttribute mo atr)]
  (if (and mo atr idx rr)
    (do (if (< idx (count rr))
            (do (a/pvv ?var (nth rr idx) ?pro ?run)
              (.putAttribute mo atr (vec (cons (inc idx) rr))))
            (a/pvv ?var nil ?pro ?run))
      (retract ?ur)
      (asser Action status "DONE" 
	parent ?par 
	instance ?ain 
	next_actions ?nacts))
    (modify ?ur status "FAILED"))))

(a:WaitInZoneStart 0
?wiz (WaitInZone status "START"
	title ?tit)
=>
(println "Action started:" ?tit "WaitInZone")
(modify ?wiz status "REPEAT"))

(a:WaitInZoneRepeat 0
?wiz (WaitInZone status "REPEAT"
	object ?obj
	observer ?obs
	attribute ?atr
	remove_flag ?rfl
	resource ?res
	protagonist ?pro
	run ?run)
(Clock time ?t)
=>
(let [mob (a/mapob-vv ?obj ?pro ?run)
      mos (a/mapob-vv ?obs ?pro ?run)]
  (if (not (or (nil? mob) (nil? mos)))
    (let [atr (protege.core/sv ?atr "title")
          res (protege.core/sv ?res "title")
          coll (.getAttribute mob res)]
      (loop [rr coll]
        (if (seq rr)
          (let [r1 (first rr)]
            (if-let [mor (a/mapob-vv r1 ?pro ?run)]
              (if (.contains mos mor)
	(do (.putAttribute mob atr r1)
	  (if (= ?rfl true)
	    (.putAttribute mob res (remove #{r1} coll)))
	  (modify ?wiz status "DONE"))
	(recur (rest rr))) )) )))
    (modify ?wiz status "FAILED"))))

(a:WaitInZoneDone 0
?wiz (WaitInZone status "DONE"
	instance ?ain
	parent ?par 
	next_actions ?nacts)
=>
(retract ?wiz)
(asser Action status "DONE" 
	parent ?par 
	instance ?ain 
	next_actions ?nacts))

(a:MovingObjectMessageDone 0
?mom (MovingObjectMessage status "DONE"
	instance ?ain
	parent ?par
	next_actions ?nacts)
=>
(retract ?mom)
(asser Action status "DONE" 
	parent ?par 
	instance ?ain
	next_actions ?nacts))

(a:PositionDone 0
?pos (Position status "DONE"
	instance ?ain
	parent ?par 
	next_actions ?nacts)
=>
(retract ?pos)
(asser Action status "DONE" 
	parent ?par 
	instance ?ain
	next_actions ?nacts))

(a:ArriveIntoPolygon 0
?aip (ArriveIntoPolygon status "START" 
	title ?tit 
	object ?obj 
	polygon ?pol 
	spd ?spd 
	instance ?ain
	parent ?par
	run ?run
	protagonist ?pro
	next_actions ?nacts)
=>
(println "Action started:" ?tit "ArriveIntoPolygon")
(if-let [pol (a/vv ?pol ?pro ?run)]
  (let [lat (protege.core/sv pol "latitude")
        lon (protege.core/sv pol "longitude")
        spd (a/vv ?spd ?pro ?run)]
    (retract ?aip)
    (asser Arrive status "START"
	title ?tit
	object ?obj
	latitude lat
	longitude lon
	speed (Float. spd)
	radius 0.2
	instance ?ain
	parent ?par
	run ?run
	protagonist ?pro
	next_actions ?nacts))
  (modify ?aip status "FAILED")))

(a:StartScenarios 0
?ss (StartScenarios status "START"
	id ?pid
	title ?tit
	scenarios ?scs
	default_parameters ?dfs
	instance ?ain
	parent ?par
	run ?run
	protagonist ?pro
	next_actions ?nacts)
=>
(println "Action started:" ?tit "StartScenarios")
(loop [ss ?scs dd ?dfs]
  (when (seq ss)
    (if (= (first dd) true) 
      (a/subscenario (first ss) nil nil false ?pid ?pro ?run)
      (s/start-scenario (first ss) nil))
    (recur (rest ss) (rest dd))))
(retract ?ss)
(asser Action status "DONE" 
	parent ?par 
	instance ?ain
	next_actions ?nacts))

(a:VerticalControlProfile 0
(Clock time ?t)
?vc (VerticalControl status "REPEAT" 
	vc_type "PROFILE"
	title ?tit 
	object ?obj
	alt_profile ?apf
	N ?n
	speed ?spd
	time1 ?tm1
	protagonist ?pro
	run ?run)
(Clock time ?t)
=>
(if-let [mo (a/mapob-vv ?obj ?pro ?run)]
  (let[a0 (.getAltitude mo)
       apf (a/vv ?apf ?pro ?run)
       alts0 (nthrest (protege.core/svs apf "alt") ?n)
       [a1 a2 & alts] (seq alts0)]
    (.setAltitude mo (int (Math/round (+ a0 ?spd)) ))
    (if (and (>= ?t ?tm1) (not (nil? a2)))
      (let [secs0 (nthrest (protege.core/svs apf "second") ?n)
            [s1 s2 & secs] (seq secs0)
            ds (- s2 s1)]
        (.setAltitude mo a1)
        (modify ?vc speed (float (/ (- a2 a1) ds))
	time1  (+ ?tm1 ds)
	N (inc ?n)) ) ))
  (modify ?vc status "FAILED")))

(a:VerticalControlRepeat 0
(Clock time ?t)
?vc (VerticalControl status "REPEAT" 
	object ?obj
	vc_type ?vct
	alt_profile ?apf
	period ?prd 
	protagonist ?pro
	run ?run
	instance ?ain
	parent ?par 
	next_actions ?nacts
	(> ?t ?prd))
=>
(if-let [mo (a/mapob-vv ?obj ?pro ?run)]
  (do
    (if (= ?vct "PROFILE")
      (let[apf (a/vv ?apf ?pro ?run)
           alts (seq (protege.core/svs apf "alt"))]
        (.setAltitude mo (last alts))))
    (.removeAttribute mo "VC_TYPE")))
(retract ?vc)
(asser Action status "DONE" 
	parent ?par 
	instance ?ain
	next_actions ?nacts))

(a:VerticalControlStart 0
?vc (VerticalControl status "START" 
	title ?tit 
	object ?obj
	vc_type ?vct
	height ?hgt
	time ?tim
	alt_profile ?apf
	protagonist ?pro
	run ?run)
(Clock time ?t)
=>
(println "Action started:" ?tit "VerticalControl")
(if-let [mo (a/mapob-vv ?obj ?pro ?run)]
  (do (.putAttribute mo "VC_TYPE" ?vct)
    (condp = ?vct
      "PROFILE"
      (if-let[apf (a/vv ?apf ?pro ?run)]
        (let [[s1 s2 & secs] (seq (protege.core/svs apf "second"))
               [a1 a2 & alts] (seq (protege.core/svs apf "alt"))]
          (.setAltitude mo a1)
          (modify ?vc status "REPEAT"
	speed (float (/ (- a2 a1) (- s2 s1)))
	time1  (+ ?t s2)
	N 1
	period (+ ?t (last secs))))
        (modify ?vc status "FAILED"))
      "RELIEF"
      (let [hgt (a/vv ?hgt ?pro ?run)
            tim (a/vv ?tim ?pro ?run)]
        (if (not (or (nil? hgt) (nil? tim)))
          (do (.setAltitude mo (Integer. hgt))
            (modify ?vc status "REPEAT"
	period (+ ?t (Integer. ?tim)) )) )) ))
  (modify ?vc status "FAILED")))

(a:SetTimeScale 0
?sts (SetTimeScale status "START"
	title ?tit 
	scale ?scl
	instance ?ain
	run ?run
	parent ?par 
	protagonist ?pro
	next_actions ?nacts)
=>
(println "Action started:" ?tit "SetTimeScale")
(if-let [scl (a/vv ?scl ?pro ?run)]
  (ru.igis.omtab.OMT/setTimeScale scl))
(retract ?sts)
(asser Action status "DONE" 
	parent ?par 
	instance ?ain
	next_actions ?nacts))

(a:ConfirmPosition 0
?cp (ConfirmPosition status "START" 
	title ?tit 
	object ?obj
	latitude ?lat
	longitude ?lon
	client ?cli
	run ?run
	protagonist ?pro
	instance ?ain 
	parent ?par 
	next_actions ?nacts)
=>
(println "Action started:" ?tit "ConfirmPosition")
(let [obj (a/vv ?obj ?pro ?run)
       lat (a/degmin-to-deg ?lat ?pro ?run)
       lon (a/degmin-to-deg ?lon ?pro ?run)
       cli (a/vv ?cli ?pro ?run)
       mo (ru.igis.omtab.OMT/getMapOb obj)]
  (if (or (nil? mo) (nil? lat) (nil? lon) (a/null? cli))
    (do (modify ?cp status "FAILED")
      (if (and obj (nil? mo))
        (asser Exception status "ПОТЕРЯН" title (protege.core/sv obj "label") run ?run)))
    (let [bb (int (.bearingsDeg mo lat lon))
           dir (or (.getAttribute mo "SAT-DIR")
	(let [newdir "FORWARD"]
	  (.putAttribute mo "SAT-DIR" newdir)
	  newdir))
           old (or (.getAttribute mo "SAT-BBEAR") bb)
           dif (if (> old bb) (- old bb) (- bb old))
           dir (if (>= dif 180)  (let [newdir (if (= dir "FORWARD") "BACKWARD" "FORWARD")]
		(.putAttribute mo "SAT-DIR" newdir)
		newdir)
 	                 dir)
           crs (if (= dir "FORWARD")
	(+ bb 180)
	bb)
           crs (if (>= crs 360) (- crs 360) crs)]
      ;; (navobs.commands/pump-in-evt (protege.core/sv cli "id")
	;; {:event :update-navob 
	;;	:name (.getName mo)
	;;	:lat (.getLatitude mo)
	;;	:lon (.getLongitude mo)
	;;	:crs crs
	;;	:spd (.getSpeed mo)
	;;	:clk (ru.igis.omtab.Clock/getCurrentTime)})
      (.putAttribute mo "SAT-BBEAR" bb)
      (retract ?cp)
      (asser Action status "DONE" 
	parent ?par 
	instance ?ain 
	next_actions ?nacts)))))

(a:CircleScan 0
?cs (CircleScan status "START"
	title ?tit 
	object ?obj 
	detector ?det
	client ?cli
	text ?txt
	run ?run
	protagonist ?pro
	instance ?ain 
	parent ?par 
	next_actions ?nacts)
=>
(println "Action started:" ?tit "CircleScan")
(let [obj (a/vv ?obj ?pro ?run)
       det (a/vv ?det ?pro ?run)
       cli (a/vv ?cli ?pro ?run)
       mo (ru.igis.omtab.OMT/getMapOb obj)]
  (if (or (nil? mo) (a/null? det))
    (do (modify ?cs status "FAILED")
      (if (and obj (nil? mo))
        (asser Exception status "ПОТЕРЯН" title (protege.core/sv obj "label") run ?run)))
    (let [types (protege.core/svs det "types")
           ranges (protege.core/svs det "ranges")
           probs (protege.core/svs det "probabilities")]
      (doseq [tgt (ru.igis.omtab.OMT/getMapObs)]
        (if (a/detected mo tgt types ranges probs)
          (let [tgn (.getName tgt)]
            (asser Exception status "ОБНАРУЖЕН" title (eval tgn) run ?run)
            (.putAttribute mo "DETECT" (.getName tgt))
            (.putAttribute tgt "DETECTED-BY" (.getName mo)))))
            ;;(if (a/null? cli)
            ;;  (navobs.commands/set-visible tgn true)
            ;;  (let [clid (protege.core/sv cli "id")]
            ;;    (a/es-mess (str (a/op-time) " Докладывает " (.getName mo) ": " ?txt " " tgn
	;; (format " ш %.3f" (.getLatitude tgt))
	;; (format " д %.3f" (.getLongitude tgt))
	;; " курс " (.getCourse tgt)
	;; " скорость " (.getSpeed tgt)) {} 0 clid)
                ;; (navobs.commands/set-visible true tgt clid))) )))
      (retract ?cs)
      (asser Action status "DONE" 
	parent ?par 
	instance ?ain 
	next_actions ?nacts)))))

(d:CatchExceptionStart 0
?ce (CatchException status "START" 
	title ?tit 
	objects ?obs
	statuses ?sts
	parent ?par
	run ?run
	protagonist ?pro
	variants ?vrs)
=>
(let [obs (map #(d/label-or-title (a/vv % ?pro ?run)) ?obs)
       sts (map #(a/vv % ?pro ?run) ?sts)]
  (modify ?ce status "WAIT"
	objects obs
	statuses sts)))

(d:CatchExceptionWait 0
?ce (CatchException status "WAIT" 
	title ?tit 
	objects ?obs
	statuses ?sts
	parent ?par
	run ?run
	variants ?vrs)
?ex (Exception run ?run
	status ?sta
	title ?tit2
	(some #{?sta} ?sts))
=>
(println "Decision:" ?tit "CatchException status WAIT")
(loop [oo ?obs ss ?sts vv ?vrs]
  (if (seq oo)
    (if (and (= (first oo) ?tit2) (= (first ss) ?sta))
      (do (s/start-tasks-actions [(first vv)] ?par ?run)
        (retract ?ce ?ex))
      (recur (rest oo) (rest ss) (rest vv)))
    (modify ?ce status "FAILED"))))

(a:RetractObjects 0
?ros (RetractObjects status "START"
	title ?tit
	object ?obj
	collection ?col
	instance ?ain
	parent ?par
	run ?run
	protagonist ?pro
	next_actions ?nacts)
=>
(println "Action started:" ?tit "RetractObjects")
(let [obj (a/vv ?obj ?pro ?run)
      inss (if (a/null? obj) ?col (cons obj ?col))]
  (ru.rules/retract-instances inss))
(retract ?ros)
(asser Action status "DONE" 
	parent ?par 
	instance ?ain
	next_actions ?nacts))

(a:PolyMovingRepeat 0
?pm (PolyMoving status "REPEAT"
	title ?tit
	object ?obj
	observer ?obs
	time ?tim
	run ?run
	protagonist ?pro
	instance ?ain
	parent ?par 
	next_actions ?nacts)

(Clock time ?t)
=>
(if-let [mob (a/mapob-vv ?obj ?pro ?run)]
  (let [re (poly.moving/pm-repeat mob ?t)]
    (cond
      (< re 0) (modify ?pm status "FAILED")
      (= re 0) (do (retract ?pm)
                       (asser Action status "DONE" 
		parent ?par 
		instance ?ain
		next_actions ?nacts))))
  (modify ?pm status "FAILED")))

(a:PolyMovingStart 0
?pm (PolyMoving status "START"
	title ?tit
	object ?obj
	observer ?obs
	time ?tim
	run ?run
	protagonist ?pro)
(Clock time ?t)
=>
(println "Action started:" ?tit "PolyMoving")
(let [mob (a/mapob-vv ?obj ?pro ?run)
       obs (a/vv ?obs ?pro ?run)
       tim (a/vv ?tim ?pro ?run)]
  (if (or (nil? mob)
            (a/null? obs)
            (a/null? tim)
            (< (poly.moving/pm-start mob obs (a/to-be tim) ?t) 0))
      (modify ?pm status "FAILED")
      (modify ?pm status "REPEAT"))))

(a:PolyMovingNStart 0
?pmn (PolyMovingN status "START"
	title ?tit
	mapob ?mpb
	time ?tim
	run ?run
	protagonist ?pro)
(Clock time ?t)
=>
(println "Action started:" ?tit "PolyMovingN")
(let [tim (a/vv ?tim ?pro ?run)]
  (if (or (empty? ?mpb)
            (a/null? tim)
            (< (poly.moving/pm-start-n ?mpb (a/to-be tim) ?t) 0))
      (modify ?pmn status "FAILED")
      (modify ?pmn status "REPEAT"
	N 1
	time (a/to-be tim)))))

(a:PolyMovingNRepeat 0
?pmn (PolyMovingN status "REPEAT"
	title ?tit
	mapob ?mpb
	N ?n
	time ?tim
	run ?run
	protagonist ?pro
	instance ?ain
	parent ?par 
	next_actions ?nacts)

(Clock time ?t)
=>
(let [re (poly.moving/pm-repeat-n ?mpb ?tim ?n ?t)]
  (cond
      (< re 0) (modify ?pmn status "FAILED")
      (= re 0) (let [nxt (inc ?n)]
	(if (>= nxt (count ?mpb))
	  (do (retract ?pmn)
	     (asser Action status "DONE" 
		parent ?par 
		instance ?ain
		next_actions ?nacts))
	  (modify ?pmn N nxt))))))

(sim:RetractSecondClock 10
?c1 (Clock time ?t1)
?c2 (Clock time ?t2
	(< ?t2 ?t1))
=>
(retract ?c2))

(sim:ExecuteDirective 0
?dr (Directive source ?src)
=>
(load-string ?src)
(retract ?dr))

(sim:RetractMapObEvent -1
?moe (MapObEvent)
=>
(retract ?moe))

(a:MovingTraceRepeat 0
?mt (MovingTrace status "REPEAT"
	title ?tit
	object ?obj
	polygon ?pol
	step ?stp
	instance ?ain
	parent ?par 
	next_actions ?nacts
	run ?run
	protagonist ?pro)
(Clock time ?t)
=>
(let [mo (a/mapob-vv ?obj ?pro ?run)
       mt (if (some? mo)
	(.getAttribute mo "MOTRACE"))]
  (if (some? mt)
    (let[lat (.getLatitude mo)
         lon (.getLongitude mo)
         crs0 (.getCourse mo)
         p2d (-> (ru.igis.omtab.OpenMapTab/getMapBean)
	.getProjection
	(.forward lat lon))
         x0 (.getX p2d)
         y0 (.getY p2d)
         [x1 y1] (:x1y1 mt)
         dx (- x0 x1)
         dy (- y0 x1)
         [crs1 crs2] (:crs1crs2 mt)
         trc1 (:trace mt)]
      (if (> (+ (* dx dx) (* dy dy)) (* ?stp ?stp))
        (let [trc0 (cons (Math/toRadians lat)
	(cons (Math/toRadians lon)
	(if (= crs0 crs1 crs2)
	  (-> trc1 rest rest)
	  trc1)))
               lla (double-array trc0)]
          (.setLocation (:ompoly mt) lla com.bbn.openmap.omGraphics.OMGraphic/RADIANS)
          (.putAttribute mo "MOTRACE" (assoc mt :trace trc0
			:crs1crs2 [crs0 crs1]
			:x1y1 [x0 y0])))))
    (do (retract ?mt)
      (asser Action status "DONE" 
	parent ?par 
	instance ?ain
	next_actions ?nacts)))))

(a:MovingTraceStart 0
?mt (MovingTrace status "START"
	title ?tit
	object ?obj
	polygon ?pol
	instance ?ain
	parent ?par 
	next_actions ?nacts
	run ?run
	protagonist ?pro)
=>
(println "Action started:" ?tit "MovingTrace")
(let [mo (a/mapob-vv ?obj ?pro ?run)
      pol (a/vv ?pol ?pro ?run)]
  (if (and (some? mo) (not (a/null? pol)))
    (let [mt {:ompoly (-> (ru.igis.omtab.OMT/getOrAdd pol)
		.getLocationMarker)
                        :crs1crs2 [0 0]
	:x1y1 [0 0]}]
      (.putAttribute mo "MOTRACE" mt)
      (modify ?mt status "REPEAT"
	polygon pol))
    (do (retract ?mt)
      (asser Action status "DONE" 
	parent ?par 
	instance ?ain
	next_actions ?nacts)))))

(a:WaitObAttributesDone 0
?woa (WaitObAttributes status "DONE" 
	instance ?ain 
	parent ?par 
	next_actions ?nacts)
=>
(retract ?woa)
(asser Action status "DONE" 
	parent ?par 
	instance ?ain 
	next_actions ?nacts))

(d:TDecision 0
?td (TDecision status "START" 
	title ?tit
	script ?scr
	variants ?vrs
	parent ?par
	run ?run)
=>
(println "Decision:" ?tit "TDecision")
(s/start-tasks-actions (d/t-decision ?scr ?vrs ?pro ?run) ?par ?run)
(retract ?td))

(d:Hard 0
?hd (Hard status "START" 
	title ?tit 
	number ?num
	parent ?par
	run ?run
	protagonist ?pro
	variants ?vrs)
=>
(println "Decision:" ?tit "Hard")
(s/start-tasks-actions [((vec ?vrs) (read-string (a/vv ?num ?run)))] ?par ?run)
(retract ?hd))

(a:CombStart 0
?cb (Comb status "START"
	title ?tit 
	object ?obj 
	polygon ?pol
	algo ?alg
	range ?rng
	spd ?spd
	time ?tim
	route ?rte
	run ?run
	protagonist ?pro
	instance ?ain 
	parent ?par 
	next_actions ?nacts)
=>
(println "Action started:" ?tit "Comb")
(let [obj (a/mapob-vv ?obj ?pro ?run)
       pol (a/mapob-vv ?pol ?pro ?run)
       alg (a/vv ?alg ?pro ?run)
       rng (a/vv ?rng ?pro ?run)
       spd (a/vv ?spd ?pro ?run)
       tim (a/vv ?tim ?pro ?run)
       rte (a/vv ?rte ?pro ?run)
       dsp (a/vv ?dsp ?pro ?run)]
  (if (every? some? [obj pol alg  rng spd tim rte])
    (let [hrs (/ (a/to-be tim) 3600)]
      (algo.exe/do-algorithm alg
	{"район" (.getInstance pol)
	 "объект" (.getInstance obj)
	 "Наше-место" [(.getLatitude obj) (.getLongitude obj)]
	 "маршрут" rte
	 "Добн" (read-string rng)
	 "Скорость" (read-string spd)
	 "Время" hrs})
      (modify ?cb status "REPEAT"))
    (modify ?cb status "FAILED"))))

(a:CombRepeat 0
?cb (Comb status "REPEAT"
	title ?tit 
	object ?obj 
	spd ?spd
	route ?rte
	run ?run
	protagonist ?pro
	instance ?ain 
	parent ?par 
	next_actions ?nacts)
(Clock)
=>
(let [obj (a/vv ?obj ?pro ?run)
       spd (a/vv ?spd ?pro ?run)
       rte (a/vv ?rte ?pro ?run)
       tit (s/gen-id ?tit)]
  (when (every? some? [obj spd rte])
    (rete.core/assert-frame 
	['GoRoute 
	 'status "START"
	 'title tit
	 'object obj
	 'route rte
	 'spd spd
	 'radius 0.2])
    (modify ?cb status tit))))

(a:StopRouteStart 0
?sor (StopRoute status "START"
	title ?tit
	object ?obj
	run ?run
	protagonist ?pro)
=>
(println "Action started:" ?tit "StopRoute")
(if-let [obj (a/vv ?obj ?pro ?run)]
  (modify ?sor object obj
	status "WORK")
  (modify ?sor status "FAILED"))))

(a:ArriveDone 0
?arr (Arrive status "DONE"
	object ?obj 
	latitude ?lat 
	longitude ?lon 
	instance ?ain
	parent ?par 
	next_actions ?nacts
 	run ?run
	protagonist ?pro)
=>
(a/stop-moving ?obj ?lat ?lon ?pro ?run)
(retract ?arr)
(asser Action status "DONE" 
	parent ?par 
	instance ?ain
	next_actions ?nacts))

(a:CombDone 0
?cb (Comb status ?sts
	instance ?ain
	parent ?par 
	next_actions ?nacts
	((not= ?sts "START")
	 (not= ?sts "REPEAT")))
(Clock)
(not GoRoute title ?sts)
=>
(retract ?cb)
(asser Action status "DONE" 
	parent ?par 
	instance ?ain
	next_actions ?nacts))

(a:StopRouteWork 0
?gor (GoRoute object ?obj)
?arr (Arrive status "REPEAT" 
	object ?obj)
?sor (StopRoute status "WORK"
	title ?tit
	object ?obj
	run ?run
	parent ?par 
	instance ?ain
	protagonist ?pro
	next_actions ?nacts)
=>
(let [mo (a/mapob-vv ?obj ?pro ?run)]
  (modify ?gor status "DONE")
  (modify ?arr status "DONE"
	latitude (.getLatitude mo)
	longitude (.getLongitude mo))
  (retract ?sor)
  (asser Action status "DONE" 
	parent ?par 
	instance ?ain
	next_actions ?nacts)))

(a:ObjectTaskStart 0
?ot (ObjectTask status "START"
	id ?pid
	title ?tit
	sub_scenario ?sub
	context ?ctx 
	player ?pla 
	wait_subscenario ?wai
	run ?run
	protagonist ?pro)
=>
(println "Action started:" ?tit "ObjectTask")
(modify ?ot status (a/subscenario ?sub ?ctx ?pla ?wai ?pid ?pro ?run)))

(a:ObjectTaskRepeat 5
?ot (ObjectTask status "REPEAT"
	id ?pid
	instance ?ain 
	parent ?par 
	next_actions ?nacts)
(Scenario status "DONE"
	parent ?pid)
=>
(retract ?ot)
(asser Action status "DONE" 
	parent ?par 
	instance ?ain 
	next_actions ?nacts))

(a:ObjectTaskDone 0
?ot (ObjectTask status "DONE"
	instance ?ain 
	parent ?par 
	next_actions ?nacts)
=>
(retract ?ot)
(asser Action status "DONE" 
	parent ?par 
	instance ?ain 
	next_actions ?nacts))

(a:WaitObAttributesStart 0
?woa (WaitObAttributes status "START"
	title ?tit)
=>
(println "Action started:" ?tit "WaitObAttributes")
(modify ?woa status "REPEAT"))

(a:WaitObAttributesRepeat 0
?woa (WaitObAttributes status "REPEAT"
	object ?obj
	attributes ?ats
	relations ?rls
	values ?vls
	connective ?cnv
	run ?run
	protagonist ?pro
	run ?run)
(Clock time ?t)
=>
(if-let [mo (a/mapob-vv ?obj ?pro ?run)]
  (loop [ats ?ats rls ?rls vls ?vls]
    (if (and (seq ats) (seq rls) (seq vls))
      (let [atr (protege.core/sv (first ats) "title")
            rel (first rls)
            val (a/vv (first vls) ?pro ?run)
            avl (.getAttribute mo atr)]
        (if (and avl (a/is-relation avl rel val))
          (if (= ?cnv 'OR)
            (modify ?woa status "DONE")
            (recur (rest ats) (rest rls) (rest vls)))
          (if (= ?cnv 'OR)
            (recur (rest ats) (rest rls) (rest vls)) ) ))
      (if (= ?cnv 'AND)
        (modify ?woa status "DONE")) ) )))

