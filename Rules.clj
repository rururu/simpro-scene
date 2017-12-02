(s:FirstORFinalActionDone 0
?a (Action status "DONE"
	run ?run
	instance ?ain
	next_actions ?nacts
	(= (count ?nacts) 0))
?t (Task status "DOING"
	run ?run
	finish_type OR
	title ?tit
	final_actions ?facts 
	((s/include? ?facts ?ain)
	 (> (count ?facts) 1)))
=>
(println "Task (OR type) DONE:" ?tit)
(modify ?t status "DONE")
(retract ?a))

(a:SubscenarioRepeat 5
?ss (Subscenario status "REPEAT"
	id ?id
	parent ?pid
	run ?run
	next_actions ?nacts)
(Scenario status "DONE"
	parent ?id)
=>
(retract ?ss)
(a/start-next ?nacts ?pid ?run))

(s:LastANDFinalActionDone 0
?a (Action status "DONE"
	run ?run
	instance ?ain 
	next_actions ?nacts
	(= (count ?nacts) 0))
?t (Task status "DOING"
	run ?run
	finish_type AND
	title ?tit
	final_actions ?facts 
	((s/include? ?facts ?ain)
	 (= (count ?facts) 1)))
=>
(println "Task (AND type) DONE:" ?tit)
(modify ?t status "DONE")
(retract ?a))

(s:InterimFinalActionDone 0
?a (Action status "DONE" 
	run ?run
	instance ?ain
	next_actions ?nacts
	(= (count ?nacts) 0))
?t (Task status "DOING"
	run ?run
	finish_type AND
	final_actions ?facts 
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
	parent ?pid
	run ?run
	next_actions ?nacts)
=>
(println "Action started:" ?tit "PutOnMap")
(let [obj (a/vv ?obj ?run)]
  (if (not (a/null? obj))
    (if-let [mo (ru.igis.omtab.OMT/addMapOb obj)]
      (let [lat (a/vv ?lat ?run)
            lon (a/vv ?lon ?run)]
        (if (not (or (a/null? lat) (a/null? lon)))
          (.setLocation mo lat lon))) )))
(doseq [mo ?mos]
  (ru.igis.omtab.OMT/addMapOb mo))
(retract ?pom)
(a/start-next ?nacts ?pid ?run))

(a:ArriveStart 0
?arr (Arrive status "START" 
	title ?tit 
	object ?obj 
	latitude ?lat 
	longitude ?lon 
	speed ?spd 
	run ?run)
=>
(println "Action started:" ?tit "Arrive")
(if-let [mo (a/mapob-vv ?obj ?run)]
  (let [lt (a/degmin-to-deg ?lat ?run)
        ln (a/degmin-to-deg ?lon ?run)]
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
	parent ?pid
	next_actions ?nacts
 	run ?run)
(Clock time ?t)
=>
(if-let [mo (a/mapob-vv ?obj ?run)]
  (if (or (.near mo ?lat ?lon ?rad) (.abaft mo ?lat ?lon))
    (do (a/stop-moving mo ?lat ?lon)
      (retract ?arr)
      (a/start-next ?nacts ?pid ?run))
    (if (> (.distanceNM mo ?lat ?lon) 100)
      (.setCourse mo (int (.bearingsDeg mo ?lat ?lon)) ) ))
  (modify ?arr status "FAILED")))

(s:ClearScenarioActivities 0
(Scenario status "DONE"
	run ?run)
=>
(s/clear-scenario-activities ?run))

(a:SubscenarioStart 0
?ss (Subscenario status "START"
	title ?tit
	sub_scenario ?sub
	context ?ctx 
	wait_subscenario ?wai
	run ?run)
=>
(println "Action started:" ?tit "Subscenario")
(let [sub (a/vv ?sub ?run)
       ctx (a/vv ?ctx ?run)]
  (if (not (a/null? sub))
    (let [hm (s/context-to-hm ctx)
           id (gensym "Sus")]
      (a/merge-hm-run hm ?run)
      (-> (ru.rules/mk-frame sub)
        (ru.rules/update-frame
	'Scenario
	{'status "START"
	 'run hm
	 'parent id})
        rete.core/assert-frame)
      (asser TwoObRelation parent "Run"
	observer ?run
	object hm)
      (modify ?ot status (if (= ?wai true) "REPEAT" "DONE")
	id id)
    (modify ?ot status "FAILED"))))

(a:SubscenarioDone 0
?ss (Subscenario status "DONE"
	parent ?pid
	run ?run
	next_actions ?nacts)
=>
(retract ?ss)
(a/start-next ?nacts ?pid ?run))

(a:TimeMessage 0
?tm (TimeMessage status "START"
	title ?tit
	clients ?cls
	category ?cat
	text ?txt
	parent ?pid
	run ?run
	next_actions ?nacts)
=>
(println "Action started:" ?tit "TimeMessage")
(a/time-message ?txt ?cat ?cls ?run)
(retract ?tm)
(a/start-next ?nacts ?pid ?run))

(a:PutOffMap 0
?pom (PutOffMap status "START"
	title ?tit
	mapob ?mos
	object ?obj
	delete ?del
	parent ?pid
	run ?run
	next_actions ?nacts)
=>
(println "Action started:" ?tit "PutOffMap")
(a/put-off-map ?obj ?mos ?del ?run)
(retract ?pom)
(a/start-next ?nacts ?pid ?run))

(a:GoRouteStart 0
?gor (GoRoute status "START"
	title ?tit
	object ?obj
	route ?rou
	spd ?spd
	backward ?bwd
	radius ?rad
	run ?run
	parent ?par)
=>
(println "Action started:" ?tit "GoRoute")
(let [rou (a/vv ?rou ?run)
       mo (a/mapob-vv ?obj ?run)
       spd (a/vv ?spd ?run)]
  (if (and rou mo)
    (let [pts (protege.core/svs rou "points")
           cnt (count pts)
           pnt (if (protege.core/is? ?bwd) (dec cnt) 0)
           [lat lon] (a/latlon-N rou pnt)]
      (a/go mo lat lon spd)
      (modify ?gor route rou
	N pnt
	status "REPEAT"))
    (modify ?gor status "FAILED"))))

(a:GoRouteRepeat 0
?gor (GoRoute status ?sts
	title ?tit
	object ?obj 
	route ?rou
	spd ?spd 
	radius ?rad
	backward ?bwd
	N ?n
	parent ?pid
	run ?run
	next_actions ?nacts)
(Clock)
=>
(let [[lat lon] (a/latlon-N ?rou ?n)
       next (if (protege.core/is? ?bwd) (dec ?n) (inc ?n))
       spd (a/vv ?spd ?run)]
  (if-let [mo (a/mapob-vv ?obj ?run)]
    (if (or (.near mo lat lon ?rad) (.abaft mo lat lon))
      (if (or (= next (count rou)) (< next 0))
        (do (a/stop-moving mo lat lon)
          (retract ?gor)
          (a/start-next ?nacts ?pid ?run))
        (let [[lat lon] (a/latlon-N ?rou next)]
          (a/go mo lat lon spd)))
      (if (> (.distanceNM mo lat lon) 100)
        (.setCourse mo (int (.bearingsDeg mo lat lon)))))
    (modify ?gor status "FAILED"))))

(s:LastANDFinalTaskDone 0
?t (Task status "DONE"
	run ?run
	instance ?tin)
?s (Scenario status "DOING"
	run ?run
	finish_type AND
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
	run ?run)
=>
(println "Action started:" ?tit "WaitEvent")
(modify ?we status (a/wait-event ?evt ?pid ?run)))

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
	parent ?pid
	run ?run
	next_actions ?nacts)
(Clock time ?t)
?tor (TwoObRelation title ?tit2
	ob_relation ?obr
	object ?obj
	observer ?obs
	radius ?rad
	value ?val
	parent ?pid
	(e/two-ob-relation ?obr ?obj ?obs ?rad ?val ?run))
=>
(retract ?we ?tor)
(a/start-next ?nacts ?pid ?run))

(a:Calculus 0
?clc (Calculus status "START" 
	title ?tit 
	input_data ?ida 
	source ?src 
	results ?res
	parent ?pid
	run ?run
	next_actions ?nacts)
=>
(println "Action started:" ?tit "Calculus")
(let [bnd (mapcat #(d/input-var-val % ?run) ?ida)
       bnd2  (d/parse-let-body (d/uncomment  ?src))
       bnd3 (vec (concat bnd bnd2))
       vvm (d/var-val-map bnd3)
       exp `(let ~bnd3 ~vvm)
       ;;_ (println :EXP exp)
       vvm2 (eval exp)]
  (d/var-val-to-run bnd2 vvm2 ?run)
  (doseq [re ?res]
    (d/var-val-to-result re vvm2 ?run)))
(retract ?clc)
(a/start-next ?nacts ?pid ?run))

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
	parent ?pid
	run ?run
	next_actions ?nacts)
=>
(println (str "Action started: " ?tit " LinkOnOff"))
(let [obj (a/mapob-vv ?obj ?run)
       obs (a/mapob-vv ?obs ?run)
       col (a/vv ?col ?run)
       lin (a/vv ?lin ?run)]
  (if (and obj obs)
    (let [pg (.getPlayground obs)
           nam (str (.getName obs) "-" (.getName obj))]
      (if (protege.core/is? ?flg)
        (ru.igis.omtab.OMT/addMapOb (ru.igis.omtab.Link. nam obs obj col lin) pg)
        (if-let[lnk (ru.igis.omtab.OMT/getMapOb nam)]
          (ru.igis.omtab.OMT/removeMapOb lnk false)))
      (retract ?loo)
      (a/start-next ?nacts ?pid ?run))
    (modify ?loo status "FAILED"))))

(d:UserDecision 0
?ud (UserDecision status "START" 
	title ?tit 
	parent ?pid
	run ?run
	variants ?vrs)
=>
(println "Decision:" ?tit "UserDecision")
(s/start-tasks-actions (d/user-decision ?vrs) ?pid ?run)
(retract ?ud))

(a:RepeatActionOnOff 0
?rao (RepeatActionOnOff status "START" 
	title ?tit 
	collection ?col
	flag ?flg 
	repeat-action ?ra
	parent ?pid
	run ?run
	next_actions ?nacts)
=>
(println "Action started:" ?tit "RepeatActionOnOff")
(a/repeat-action-onoff ?ra ?col ?flg ?run)
(retract ?rao)
(a/start-next ?nacts ?pid ?run))

(a:WaitEventRepeatOP 0
?we (WaitEvent status "REPEAT" 
	id ?pid
	parent ?pid
	run ?run
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
	(e/ob-property ?prop ?obj ?rad ?lat ?lon ?val ?run))
=>
(retract ?we ?op)
(a/start-next ?nacts ?pid ?run))

(a:WaitEventRepeatOA 0
?we (WaitEvent status "REPEAT"
	id ?pid
	parent ?pid
	run ?run
	next_actions ?nacts)
(Clock time ?t)
?oa (ObAttribute title ?tit2
	attribute ?atr
	object ?obj
	relation ?rel
	value ?val
	parent ?pid
	(e/ob-attribute ?atr ?obj ?rel ?val ?run))
=>
(retract ?we ?oa)
(a/start-next ?nacts ?pid ?run))

(d:GeneralDecision 0
?gd (GeneralDecision status "START" 
	title ?tit
	input_data ?ida
	conditions ?cds
	variants ?vrs
	parent ?pid
	run ?run)
=>
(println "Decision:" ?tit "GeneralDecision")
(s/start-tasks-actions (d/general-decision ?ida ?cds ?vrs ?run) ?pid ?run)
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
	run ?run)
=>
(println "Action started:" ?tit "Position")
(if-let [[mob lat lon spdb crss spds] (a/future-position ?obj ?obs ?posa ?posd ?poss ?rel ?rad ?run)]
  (if (> spdb 0)
    (do (a/go mob lat lon spdb)
      (modify ?pos status "REPEAT"
	course crss
	speed spds))
    (do (a/take-position ?obj ?obs ?posa ?posd ?poss ?rel ?run)
          (modify ?pos status "DONE")))
  (modify ?pos status "FAILED")))

(a:PutOnPlace 0
?pop (PutOnPlace status "START" 
	title ?tit 
	object ?obj 
	observer ?obs 
	mapob ?mos
	parent ?pid
	run ?run
	next_actions ?nacts)
=>
(println "Action started:" ?tit "PutOnPlace")
(let [obj (a/vv ?obj ?run)
       obs (a/vv ?obs ?run)
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
  (a/start-next ?nacts ?pid ?run)))

(a:PositionRepeat 0
?pos (Position status "REPEAT" 
	title ?tit 
	object ?obj
	observer ?obs
	position-angle ?posa 
	position-distance ?posd 
	position-speed ?poss 
	relative ?rel 
	radius ?rad
	parent ?pid
	run ?run
	next_actions ?nacts
	(a/in-position? ?obj ?obs ?posa ?posd ?poss ?rel ?rad ?run))
(Clock)
=>
(a/take-position ?obj ?obs ?posa ?posd ?poss ?rel ?run)
(retract ?pos)
(a/start-next ?nacts ?pid ?run))

(a:ObjectMessageStart 0
?om (ObjectMessage status "START"
	title ?tit
	clients ?cls
	object ?obj
	category ?cat
	text ?txt
	url ?url
	run ?run)
=>
(println "Action started:" ?tit "ObjectMessage")
(modify ?om status (a/object-message ?tit ?obj ?txt ?url ?cat ?cls ?run)))

(a:ObjectMessageDone 0
?om (ObjectMessage status "DONE"
	parent ?pid
	run ?run
	next_actions ?nacts)
=>
(retract ?om)
(a/start-next ?nacts ?pid ?run))

(s:Transitivity of Runs 0
(TwoObRelation parent "Run"
	observer ?run1
	object ?run2)
(TwoObRelation parent "Run"
	observer ?run2
	object ?run3)
=>
(asser TwoObRelation parent "Run"
	observer ?run1
	object ?run3))

(s:Retract Runs Relation for Observer 0
(Scenario status "DONE"
	run ?run)
?tor (TwoObRelation observer ?run)
=>
(retract ?tor))

(s:Retract Runs Relation for Object 0
(Scenario status "DONE"
	run ?run)
?tor (TwoObRelation object ?run)
=>
(retract ?tor))

(a:Break Tasks 0
?brk (Break status "START"
	title ?tit
	activity ?act
	parent ?pid
	run ?run
	next_actions ?nacts
	(= (protege.core/typ act) "Task"))
=>
(println "Action started:" ?tit "Break")
(if-let [act (a/vv ?act ?run)]
  (do (a/break-task act ?run)
    (retract ?brk)
    (a/start-next ?nacts ?pid ?run))
  (modify ?brk status "FAILED")))

(a:Break Actions 0
?brk (Break status "START"
	title ?tit
	activity ?act
	parent ?pid
	run ?run
	next_actions ?nacts
	((not= (protege.core/typ act) "Task")
	 (not= (protege.core/typ act) "Scenario")
	 (not= (protege.core/typ act) "ObjectTaskScenario")))
=>
(println "Action started:" ?tit "Break")
(if-let [act (a/vv ?act ?run)]
  (do (a/break-action  act ?run)
    (retract ?brk)
    (a/start-next ?nacts ?pid ?run))
  (modify ?brk status "FAILED")))

(a:Break Scenarios 0
?brk (Break status "START"
	title ?tit
	activity ?act
	parent ?pid
	run ?run
	next_actions ?nacts
	[(= (protege.core/typ act) "Scenario")
	 (= (protege.core/typ act) "ObjectTaskScenario")])
(TwoObRelation parent "Run"
	observer ?run
	object ?run2)
=>
(println "Action started:" ?tit "Break")
(if-let [act (a/vv ?act ?run)]
  (do (a/break-scenario act ?run2)
    (retract ?brk)
    (a/start-next ?nacts ?pid ?run))
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
	run ?run)
=>
(println "Action started:" ?tit "TowOnOff")
(modify ?too status (a/tow-on-off ?obj ?obs ?flg ?poa ?pod ?rel ?run)))

(a:TowOnOffDone 0
?too (TowOnOff status "DONE" 
	parent ?pid
	run ?run
	next_actions ?nacts)
=>
(retract ?too)
(a/start-next ?nacts ?pid ?run))

(a:SearchStart 0
?sea (Search status "START" 
	title ?tit 
	time ?tim
	run ?run)
(Clock time ?t)
=>
(println "Action started:" ?tit "Search")
(modify ?sea status "OUTSIDE" 
	N (a/to-be ?t (a/vv ?tim ?run))))

(a:SearchTimeEnd 0
(Clock time ?t)
?sea (Search status ?sta
	N ?n
	parent ?pid
	run ?run
	next_actions ?nacts
	((not= ?sta "DONE")
	 (number? ?n)
	 (> ?t ?n)))
=>
(retract ?sea)
(a/start-next ?nacts ?pid ?run))

(a:SearchOutside 0
?sea (Search status "OUTSIDE"
	object ?obj
	observer ?obs
	detect-distance ?dd
	detect-probability ?dp
	client ?cli
	parent ?pid
	run ?run
	next_actions ?nacts)
(Clock)
=>
(let [obs (a/mapob-vv ?obs ?run)
       obj (a/mapob-vv ?obj ?run)
       dd (a/vv ?dd ?run)
       dp (a/vv ?dp ?run)
       cli (a/vv ?cli ?run)]
  (if (every? some? [obs obj dd dp])
    (if (<= (.distanceNM obs obj) (read-string dd))
      (if (<= (Math/random) (read-string dp))
        (do (.putAttribute obs "DETECT" (.getName obj))
          (.putAttribute obj "DETECTED-BY" (.getName obs)) 
          ;;(if (not (a/null? cli))
          ;;  (navobs.commands/set-visible true obj (protege.core/sv cli "id")))
          (do (retract ?sea)
            (a/start-next ?nacts ?pid ?run)))
        (modify ?sea status "INSIDE")))
    (modify ?sea status "FAILED"))))

(a:SearchInside 0
?sea (Search status "INSIDE"
	object ?obj
	observer ?obs
	detect-distance ?dd
	run ?run)
(Clock)
=>
(let [obs (a/mapob-vv ?obs ?run)
       obj (a/mapob-vv ?obj ?run)
       dd (a/vv ?dd ?run)]
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
	run ?run)
=>
(println "Action started:" ?tit "PutObAttributes")
(modify ?poa status (a/put-ob-attributes ?obj ?atrs ?vals ?run)))

(a:PutObAttributesDone 0
?poa (PutObAttributes status "DONE" 
	parent ?pid
	run ?run
	next_actions ?nacts)
=>
(retract ?poa)
(a/start-next ?nacts ?pid ?run))

(s:FirstORFinalTaskDone 0
?t (Task status "DONE"
	run ?run
	instance ?tin
	next_tasks ?ntasks
	(= (count ?ntasks) 0))
?s (Scenario status "DOING" 
	run ?run
	finish_type OR
	title ?tit
	final_tasks ?ftasks 
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
	run ?run
	instance ?tin)
?s (Scenario status "DOING"
	run ?run
	finish_type AND
	final_tasks ?ftasks 
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
	parent ?pid
	run ?run
	next_actions ?nacts)
=>
(println "Action started:" ?tit "AttributeMessage")
(a/attribute-message ?txt ?obj ?atr ?cat ?cls ?run)
(retract ?am)
(a/start-next ?nacts ?pid ?run))

(a:ShowDone 0
?dis (Show status "DONE" 
	parent ?pid
	run ?run
	next_actions ?nacts)
=>
(retract ?dis)
(a/start-next ?nacts ?pid ?run))

(a:ShowStart 0
?dis (Show status "START" 
	title ?tit 
	thing ?thi
	text ?txt
	label ?lab
	run ?run)
=>
(println "Action started:" ?tit "Show")
(modify ?dis status (a/show ?tit ?thi ?txt ?lab ?run)))

(a:ComputeStart 0
?cmp (Compute status "START" 
	title ?tit 
	computation ?com 
	run ?run)
=>
(println "Action started:" ?tit "Compute")
(modify ?cmp status (a/compute ?com ?run)))

(a:ComputeDone 0
?cmp (Compute status "DONE"
	parent ?pid
	run ?run
	next_actions ?nacts)
=>
(retract ?cmp)
(a/start-next ?nacts ?pid ?run))

(s:StartTask 0
?t (Task status "START" 
	title ?tit
	run ?run
	initial_actions ?iacts)
=>
(println "Task started:" ?tit)
(let [tid (gensym "Tsk")]
  (modify ?t id tid
	status "DOING")
  (s/start-tasks-actions ?iacts ?tid ?run)))

(a:PutObPropertiesStart 0
?pop (PutObProperties status "START" 
	title ?tit 
	object ?obj
	latitude ?lat
	longitude ?lon
	new_course ?crs
	new_speed ?spd
	run ?run)
=>
(println "Action started:" ?tit "PutObProperties")
(modify ?pop status (a/put-ob-properties ?obj ?lat ?lon ?crs ?spd ?run)))

(s:StartScenario 0
?s (Scenario status "START"
	id ?sid
	title ?tit
	run ?run
	initial_tasks ?itasks)
=>
(println "Scenario started:" ?tit)
(modify ?s status "DOING")
(s/start-tasks-actions ?itasks ?sid ?run))

(a:PutObPropertiesDone 0
?pop (PutObProperties status "DONE" 
	parent ?pid
	run ?run
	next_actions ?nacts)
=>
(retract ?pop)
(a/start-next ?nacts ?pid ?run))

(a:CreateByModel 0
?cbm (CreateByModel status "START"
	title ?tit
	model ?mod
	object ?obj
	parent ?pid
	run ?run
	next_actions ?nacts)
=>
(println "Action started:" ?tit "CreateByModel")
(a/create-by-model ?mod ?obj ?run)
(retract ?cbm)
(a/start-next ?nacts ?pid ?run))

(s:JoinTaskDone 0
?t (Task status "DONE"
	run ?run
	instance ?tin)
?j (Join status "START"
	run ?run
	title ?tit
	join_tasks ?jtasks
	(s/include? ?jtasks ?tin))
=>
(modify ?j join_tasks (s/exclude ?jtasks ?tin)
	status "REPEAT")
(retract ?t))

(s:RetractRedundantJoin 0
?j1 (Join status "REPEAT"
	run ?run
	instance ?jin
	join_tasks ?jtasks1)
?j2 (Join status "REPEAT"
	run ?run
	instance ?jin
	join_tasks ?jtasks2
	(< (count ?jtasks1) (count ?jtasks2)))
=>
(retract ?j2))

(s:JoinDone 0
?j (Join status "REPEAT"
	title ?tit
	parent ?pid
	run ?run
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
	parent ?pid
	run ?run
	next_actions ?nacts
	(> ?t ?n))
=>
(retract ?del)
(a/start-next ?nacts ?pid ?run))

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
	parent ?pid
	run ?run
	next_actions ?nacts)
=>
(println "Action started:" ?tit "DeleteResource")
(let [mo (a/mapob-vv ?obj ?run)
       atr (protege.core/sv ?res "title")
       rr (.getAttribute mo atr)]
  (if (seq rr)
    (do (doseq [ins (rest rr)]
            (protege.core/delin ins))
        (.removeAttribute mo atr)
        (retract ?dr)
        (a/start-next ?nacts ?pid ?run))
    (modify ?dr status "FAILED"))))

(a:DelayStart 0
?d (Delay status "START" 
	title ?tit 
	delay ?del
	run ?run)
(Clock time ?t)
=>
(println "Action started:" ?tit  "Delay")
(if-let [del (a/vv ?del ?run)]
  (modify ?d status "REPEAT" 
	N (a/to-be ?t del))
  (modify ?d status "FAILED")))

(a:AssertObjects 0
?aos (AssertObjects status "START"
	title ?tit
	object ?obj
	collection ?col
	parent ?pid
	run ?run
	next_actions ?nacts)
=>
(println "Action started:" ?tit "AssertObjects")
(let [obj (a/vv ?obj ?run)
      inss (if (a/null? obj) ?col (cons obj ?col))]
  (ru.rules/assert-instances inss))
(retract ?aos)
(a/start-next ?nacts ?pid ?run))

(a:AttributesToVariables 0
?atv (AttributesToVariables status "START"
	title ?tit
	objects ?obs
	attributes ?ats
	variables ?vrs
	parent ?pid
	run ?run
	next_actions ?nacts)
=>
(println "Action started:" ?tit "AttributesToVariables")
(loop [oo ?obs aa ?ats vv ?vrs]
  (if (and (seq oo) (seq aa) (seq vv))
    (if-let [mo (a/mapob-vv (first oo) ?run)]
      (when-let [avl (.getAttribute mo (protege.core/sv (first aa) "title"))]
        (a/vvr (first vv) avl ?run)
        (recur (rest oo) (rest aa) (rest vv))) )))
(retract ?atv)
(a/start-next ?nacts ?pid ?run))

(a:WaitModelClockStart 0
?wms (WaitModelClock status "START" 
	title ?tit 
	time ?tim
	run ?run)
=>
(println "Action started:" ?tit "WaitModelClock")
(if-let [tim (a/vv ?tim ?run)]
  (modify ?wms status "REPEAT" 
	N (a/op-time-sec tim))
  (modify ?wms status "FAILED")))

(a:SetModelClock 0
?smc (SetModelClock status "START"
	title ?tit
	time ?tim
	parent ?pid
	run ?run
	next_actions ?nacts)
=>
(println "Action started:" ?tit "SetModelClock")
(let [tim (a/vv ?tim ?run)
      sec (a/op-time-sec tim)]
    (ru.igis.omtab.Clock/setClock (long (* 1000 sec))))
(retract ?smc)
(a/start-next ?nacts ?pid ?run))

(a:LoadResource 0
?lr (LoadResource status "START"
	title ?tit
	object ?obj
	resource ?res
	mapob ?mos
	seed ?sed
                        number ?num
	rename ?ren
	parent ?pid
	run ?run
	next_actions ?nacts)
=>
(println "Action started:" ?tit "LoadResource")
(let [mo (a/mapob-vv ?obj ?run)
       sed (a/vv ?sed ?run)
       num (a/vv ?num ?run)
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
      (a/start-next ?nacts ?pid ?run))
    (modify ?lr status "FAILED"))))

(d:ODecision 0
?od (ODecision status "START" 
	title ?tit
	input_data ?ida
	before ?bef
	choices ?chs
	variants ?vrs
	parent ?pid
	run ?run)
=>
(println "Decision:" ?tit "ODecision")
(s/start-tasks-actions (d/o-decision ?ida ?bef ?chs ?vrs ?run) ?pid ?run)
(retract ?od))

(a:WaitModelClockRepeat 0
(Clock time ?t)
?wms (WaitModelClock status "REPEAT" 
	N ?n 
	parent ?pid
	run ?run
	next_actions ?nacts
	(> ?t ?n))
=>
(retract ?wms)
(a/start-next ?nacts ?pid ?run))

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
	run ?run)
=>
(println "Action started:" ?tit "Intercept")
(if-let [[mob lat lon spdb crss spds] (a/future-position ?obj ?obs ?posa ?posd ?poss ?rel ?rad ?run)]
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
	parent ?pid
	run ?run
	next_actions ?nacts
	(a/in-position? ?obj ?obs ?posa ?posd ?poss ?rel ?rad ?run))
=>
(a/take-position ?obj ?obs ?posa ?posd ?poss ?rel ?run)
(retract ?ict)
(a/start-next ?nacts ?pid ?run))

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
	parent ?pid
	run ?run
	next_actions ?nacts
	((not (s/qm ?shd))
	 (a/on-shot-dist? ?obj ?obs ?shd ?run)))
=>
(let [mob (a/mapob-vv ?obj ?run)
       mos (a/mapob-vv ?obs ?run)]
  (.setCourse mob (.getCourse mos)))
(retract ?ict)
(a/start-next ?nacts ?pid ?run))

(d:IfActivityStatus 0
?ias (IfActivityStatus status "START" 
	title ?tit 
	activities ?ats
	statuses ?sts
	parent ?pid
	run ?run
	variants ?vrs)
=>
(println "Decision:" ?tit "IfActivityStatus")
(s/start-tasks-actions (d/if-activity-status ?ats ?sts ?vrs ?run) ?pid ?run)
(retract ?ias))

(a:MovingObjectMessageStart 0
?mom (MovingObjectMessage status "START"
	title ?tit
	clients ?cls
	object ?obj
	category ?cat
	text ?txt
	url ?url
	run ?run)
=>
(println "Action started:" ?tit "MovingObjectMessage")
(modify ?mom status (a/moving-object-message ?tit ?obj ?txt ?url ?cat ?cls ?run)))

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
	(a/observer-maneuver? ?obs ?crs ?spd ?run))
=>
(when-let [[mob lat lon spdb crss spds] (a/future-position ?obj ?obs ?posa ?posd ?poss ?rel ?rad ?run)]
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
	(a/observer-maneuver? ?obs ?crs ?spd ?run))
=>
(when-let [[mob lat lon spdb crss spds] (a/future-position ?obj ?obs ?posa ?posd ?poss ?rel ?rad ?run)]
  (a/go mob lat lon spdb)
  (modify ?ict course crss
	speed spds)))

(a:UseResource 0
?ur (UseResource status "START"
	title ?tit
	object ?obj
	resource ?res
	variable ?var
	parent ?pid
	run ?run
	next_actions ?nacts)
=>
(println "Action started:" ?tit "UseResource")
(let [mo (a/mapob-vv ?obj ?run)
       atr (protege.core/sv ?res "title")
       [idx & rr] (.getAttribute mo atr)]
  (if (and mo atr idx rr)
    (do (if (< idx (count rr))
            (do (a/vvr ?var (nth rr idx) ?run)
              (.putAttribute mo atr (vec (cons (inc idx) rr))))
            (a/vvr ?var nil ?run))
      (retract ?ur)
      (a/start-next ?nacts ?pid ?run))
    (modify ?ur status "FAILED"))))

(a:MovingObjectMessageDone 0
?mom (MovingObjectMessage status "DONE"
	parent ?pid
	run ?run
	next_actions ?nacts)
=>
(retract ?mom)
(a/start-next ?nacts ?pid ?run))

(a:ArriveIntoPolygon 0
?aip (ArriveIntoPolygon status "START" 
	title ?tit 
	object ?obj 
	polygon ?pol 
	spd ?spd 
	run ?run
	next_actions ?nacts)
=>
(println "Action started:" ?tit "ArriveIntoPolygon")
(if-let [pol (a/vv ?pol ?run)]
  (let [lat (protege.core/sv pol "latitude")
        lon (protege.core/sv pol "longitude")
        spd (a/vv ?spd ?run)]
    (retract ?aip)
    (asser Arrive status "START"
	title ?tit
	object ?obj
	latitude lat
	longitude lon
	speed (Float. spd)
	radius 0.2
	run ?run
	next_actions ?nacts))
  (modify ?aip status "FAILED")))

(a:StartScenarios 0
?ss (StartScenarios status "START"
	id ?pid
	title ?tit
	scenarios ?scs
	default_parameters ?dfs
	parent ?pid
	run ?run
	next_actions ?nacts)
=>
(println "Action started:" ?tit "StartScenarios")
(loop [ss ?scs dd ?dfs]
  (when (seq ss)
    (s/start-scenario (first ss) (if (= (first dd) true) {}))
    (recur (rest ss) (rest dd))))
(retract ?ss)
(a/start-next ?nacts ?pid ?run))

(a:VerticalControlProfile 0
?vc (VerticalControl status "REPEAT" 
	vc_type "PROFILE"
	title ?tit 
	object ?obj
	alt_profile ?apf
	N ?n
	speed ?spd
	time1 ?tm1
	run ?run)
(Clock time ?t)
=>
(if-let [mo (a/mapob-vv ?obj ?run)]
  (let[a0 (.getAltitude mo)
       apf (a/vv ?apf ?run)
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
	parent ?pid
	run ?run
	next_actions ?nacts
	(> ?t ?prd))
=>
(if-let [mo (a/mapob-vv ?obj ?run)]
  (do
    (if (= ?vct "PROFILE")
      (let[apf (a/vv ?apf ?run)
           alts (seq (protege.core/svs apf "alt"))]
        (.setAltitude mo (last alts))))
    (.removeAttribute mo "VC_TYPE")))
(retract ?vc)
(a/start-next ?nacts ?pid ?run))

(a:VerticalControlStart 0
?vc (VerticalControl status "START" 
	title ?tit 
	object ?obj
	vc_type ?vct
	height ?hgt
	time ?tim
	alt_profile ?apf
	run ?run)
(Clock time ?t)
=>
(println "Action started:" ?tit "VerticalControl")
(if-let [mo (a/mapob-vv ?obj ?run)]
  (do (.putAttribute mo "VC_TYPE" ?vct)
    (condp = ?vct
      "PROFILE"
      (if-let[apf (a/vv ?apf ?run)]
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
      (let [hgt (a/vv ?hgt ?run)
            tim (a/vv ?tim ?run)]
        (if (not (or (nil? hgt) (nil? tim)))
          (do (.setAltitude mo (Integer. hgt))
            (modify ?vc status "REPEAT"
	period (+ ?t (Integer. ?tim)) )) )) ))
  (modify ?vc status "FAILED")))

(a:SetTimeScale 0
?sts (SetTimeScale status "START"
	title ?tit 
	scale ?scl
	parent ?pid
	run ?run
	next_actions ?nacts)
=>
(println "Action started:" ?tit "SetTimeScale")
(if-let [scl (a/vv ?scl ?run)]
  (ru.igis.omtab.OMT/setTimeScale scl))
(retract ?sts)
(a/start-next ?nacts ?pid ?run))

(a:ConfirmPosition 0
?cp (ConfirmPosition status "START" 
	title ?tit 
	object ?obj
	latitude ?lat
	longitude ?lon
	client ?cli
	parent ?pid
	run ?run
	next_actions ?nacts)
=>
(println "Action started:" ?tit "ConfirmPosition")
(let [obj (a/vv ?obj ?run)
       lat (a/degmin-to-deg ?lat ?run)
       lon (a/degmin-to-deg ?lon ?run)
       cli (a/vv ?cli ?run)
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
      (a/start-next ?nacts ?pid ?run)))))

(a:CircleScan 0
?cs (CircleScan status "START"
	title ?tit 
	object ?obj 
	detector ?det
	client ?cli
	text ?txt
	parent ?pid
	run ?run
	next_actions ?nacts)
=>
(println "Action started:" ?tit "CircleScan")
(let [obj (a/vv ?obj ?run)
       det (a/vv ?det ?run)
       cli (a/vv ?cli ?run)
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
      (a/start-next ?nacts ?pid ?run)))))

(d:CatchExceptionStart 0
?ce (CatchException status "START" 
	title ?tit 
	objects ?obs
	statuses ?sts
	run ?run
	variants ?vrs)
=>
(let [obs (map #(d/label-or-title (a/vv % ?run)) ?obs)
       sts (map #(a/vv % ?run) ?sts)]
  (modify ?ce status "WAIT"
	objects obs
	statuses sts)))

(d:CatchExceptionWait 0
?ce (CatchException status "WAIT" 
	title ?tit 
	objects ?obs
	statuses ?sts
	parent ?pid
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
      (do (s/start-tasks-actions [(first vv)] ?pid ?run)
        (retract ?ce ?ex))
      (recur (rest oo) (rest ss) (rest vv)))
    (modify ?ce status "FAILED"))))

(a:RetractObjects 0
?ros (RetractObjects status "START"
	title ?tit
	object ?obj
	collection ?col
	parent ?pid
	run ?run
	next_actions ?nacts)
=>
(println "Action started:" ?tit "RetractObjects")
(let [obj (a/vv ?obj ?run)
      inss (if (a/null? obj) ?col (cons obj ?col))]
  (ru.rules/retract-instances inss))
(retract ?ros)
(a/start-next ?nacts ?pid ?run))

(a:PolyMovingRepeat 0
?pm (PolyMoving status "REPEAT"
	title ?tit
	object ?obj
	observer ?obs
	time ?tim
	run ?run
	parent ?pid
	next_actions ?nacts)

(Clock time ?t)
=>
(if-let [mob (a/mapob-vv ?obj ?run)]
  (let [re (poly.moving/pm-repeat mob ?t)]
    (cond
      (< re 0) (modify ?pm status "FAILED")
      (= re 0) (do (retract ?pm)
                       (a/start-next ?nacts ?pid ?run))))
  (modify ?pm status "FAILED")))

(a:PolyMovingStart 0
?pm (PolyMoving status "START"
	title ?tit
	object ?obj
	observer ?obs
	time ?tim
	run ?run)
(Clock time ?t)
=>
(println "Action started:" ?tit "PolyMoving")
(let [mob (a/mapob-vv ?obj ?run)
       obs (a/vv ?obs ?run)
       tim (a/vv ?tim ?run)]
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
	run ?run)
(Clock time ?t)
=>
(println "Action started:" ?tit "PolyMovingN")
(let [tim (a/vv ?tim ?run)]
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
	parent ?pid
	run ?run
	next_actions ?nacts)

(Clock time ?t)
=>
(let [re (poly.moving/pm-repeat-n ?mpb ?tim ?n ?t)]
  (cond
      (< re 0) (modify ?pmn status "FAILED")
      (= re 0) (let [nxt (inc ?n)]
	(if (>= nxt (count ?mpb))
	  (do (retract ?pmn)
	     (a/start-next ?nacts ?pid ?run))
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
	parent ?pid
	next_actions ?nacts
	run ?run)
(Clock time ?t)
=>
(let [mo (a/mapob-vv ?obj ?run)
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
      (a/start-next ?nacts ?pid ?run)))))

(a:MovingTraceStart 0
?mt (MovingTrace status "START"
	title ?tit
	object ?obj
	polygon ?pol
	parent ?pid
	next_actions ?nacts
	run ?run)
=>
(println "Action started:" ?tit "MovingTrace")
(let [mo (a/mapob-vv ?obj ?run)
      pol (a/vv ?pol ?run)]
  (if (and (some? mo) (not (a/null? pol)))
    (let [mt {:ompoly (-> (ru.igis.omtab.OMT/getOrAdd pol)
		.getLocationMarker)
                        :crs1crs2 [0 0]
	:x1y1 [0 0]}]
      (.putAttribute mo "MOTRACE" mt)
      (modify ?mt status "REPEAT"
	polygon pol))
    (do (retract ?mt)
      (a/start-next ?nacts ?pid ?run)))))

(a:WaitObAttributesDone 0
?woa (WaitObAttributes status "DONE" 
	parent ?pid
	run ?run
	next_actions ?nacts)
=>
(retract ?woa)
(a/start-next ?nacts ?pid ?run))

(d:TDecision 0
?td (TDecision status "START" 
	title ?tit
	script ?scr
	variants ?vrs
	parent ?pid
	run ?run)
=>
(println "Decision:" ?tit "TDecision")
(s/start-tasks-actions (d/t-decision ?scr ?vrs ?run) ?pid ?run)
(retract ?td))

(d:Hard 0
?hd (Hard status "START" 
	title ?tit 
	number ?num
	parent ?pid
	run ?run
	variants ?vrs)
=>
(println "Decision:" ?tit "Hard")
(s/start-tasks-actions [((vec ?vrs) (read-string (a/vv ?num ?run)))] ?pid ?run)
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
	run ?run)
=>
(println "Action started:" ?tit "Comb")
(let [obj (a/mapob-vv ?obj ?run)
       pol (a/mapob-vv ?pol ?run)
       alg (a/vv ?alg ?run)
       rng (a/vv ?rng ?run)
       spd (a/vv ?spd ?run)
       tim (a/vv ?tim ?run)
       rte (a/vv ?rte ?run)
       dsp (a/vv ?dsp ?run)]
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
	run ?run)
(Clock)
=>
(let [obj (a/vv ?obj ?run)
       spd (a/vv ?spd ?run)
       rte (a/vv ?rte ?run)
       tit (s/gen-id ?tit)]
  (when (every? some? [obj spd rte])
    (rete.core/assert-frame 
	['GoRoute 
	 'status "START"
	 'title tit
	 'object obj
	 'route rte
	 'spd spd
	 'radius 0.2
	 'run ?run])
    (modify ?cb status tit))))

(a:StopRouteStart 0
?sor (StopRoute status "START"
	title ?tit
	object ?obj
	run ?run)
=>
(println "Action started:" ?tit "StopRoute")
(if-let [obj (a/vv ?obj ?run)]
  (modify ?sor object obj
	status "WORK")
  (modify ?sor status "FAILED"))))

(a:CombDone 0
?cb (Comb status ?sts
	parent ?pid
	run ?run
	next_actions ?nacts
	((not= ?sts "START")
	 (not= ?sts "REPEAT")))
(Clock)
(not GoRoute title ?sts)
=>
(retract ?cb)
(a/start-next ?nacts ?pid ?run))

(a:StopRouteWork 0
?gor (GoRoute object ?obj)
?arr (Arrive status "REPEAT" 
	object ?obj)
?sor (StopRoute status "WORK"
	title ?tit
	object ?obj
	parent ?pid
	run ?run
	next_actions ?nacts)
=>
(let [mo (a/mapob-vv ?obj ?run)]
  (modify ?gor status "DONE")
  (modify ?arr status "DONE"
	latitude (.getLatitude mo)
	longitude (.getLongitude mo))
  (retract ?sor)
  (a/start-next ?nacts ?pid ?run)))

(a:ObjectTaskStart 0
?ot (ObjectTask status "START"
	title ?tit
	sub_scenario ?sub
	context ?ctx 
	player ?pla 
	wait_subscenario ?wai
	run ?run)
=>
(println "Action started:" ?tit "ObjectTask")
(let [sub (a/vv ?sub ?run)
       ctx (a/vv ?ctx ?run)
       pla (a/vv ?pla ?run)]
  (if (not (or (a/null? sub) (a/null? pla)))
    (let [hm (s/context-to-hm ctx)
           id (gensym "Ots")]
      (a/merge-hm-run hm ?run)
      (.put hm "?protagonist" pla)
      (-> (ru.rules/mk-frame sub)
        (ru.rules/update-frame
	'Scenario
	{'status "START"
	 'run hm
	 'parent id})
        rete.core/assert-frame)
      (asser TwoObRelation parent "Run"
	observer ?run
	object hm)
      (modify ?ot status (if (= ?wai true) "REPEAT" "DONE")
	id id)
    (modify ?ot status "FAILED"))))

(a:ObjectTaskRepeat 5
?ot (ObjectTask status "REPEAT"
	id ?id
	parent ?pid
	run ?run
	next_actions ?nacts)
(Scenario status "DONE"
	parent ?id)
=>
(retract ?ot)
(a/start-next ?nacts ?pid ?run))

(a:ObjectTaskDone 0
?ot (ObjectTask status "DONE"
	parent ?pid
	run ?run
	next_actions ?nacts)
=>
(retract ?ot)
(a/start-next ?nacts ?pid ?run))

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
	run ?run)
(Clock time ?t)
=>
(if-let [mo (a/mapob-vv ?obj ?run)]
  (loop [ats ?ats rls ?rls vls ?vls]
    (if (and (seq ats) (seq rls) (seq vls))
      (let [atr (protege.core/sv (first ats) "title")
            rel (first rls)
            val (a/vv (first vls) ?run)
            avl (.getAttribute mo atr)]
        (if (and avl (a/is-relation avl rel val))
          (if (= ?cnv 'OR)
            (modify ?woa status "DONE")
            (recur (rest ats) (rest rls) (rest vls)))
          (if (= ?cnv 'OR)
            (recur (rest ats) (rest rls) (rest vls)) ) ))
      (if (= ?cnv 'AND)
        (modify ?woa status "DONE")) ) )))

