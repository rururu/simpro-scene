(s:FirstORFinalActionDone 0
?a (Action status "DONE"
	parent ?pid
	instance ?ain
	next_actions ?nacts)
?t (Task status "DOING"
	id ?pid
	finish_type OR
	title ?tit
	final_actions ?facts 
	((s/include? ?facts ?ain)
	 (not (empty? ?facts))))
=>
(println "Task (OR type) DONE:" ?tit)
(modify ?t status "DONE")
(retract ?a))

(a:SubscenarioRepeat 5
?ss (Subscenario status "REPEAT"
	id ?id
	parent ?pid
	instance ?ain
	run ?run
	next_actions ?nacts)
(Scenario status "DONE"
	parent ?id)
=>
(retract ?ss)
(s/start-next ?nacts ?pid ?ain ?run))

(s:LastANDFinalActionDone 0
?a (Action status "DONE"
	parent ?pid
	instance ?ain 
	next_actions ?nacts)
?t (Task status "DOING"
	id ?pid
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
	parent ?pid
	instance ?ain
	next_actions ?nacts)
?t (Task status "DOING"
	id ?pid
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
	instance ?ain
	run ?run
	next_actions ?nacts)
=>
(println "Action started:" ?tit "PutOnMap")
(let [obj (a/vv ?obj ?run)]
  (if (not (a/null? obj))
    (if-let [mo (ru.igis.omtab.OMT/getOrAdd obj)]
      (let [lat (a/vv ?lat ?run)
            lon (a/vv ?lon ?run)]
        (if (not (or (a/null? lat) (a/null? lon)))
          (.setLocation mo lat lon))) )))
(doseq [mo ?mos]
  (ru.igis.omtab.OMT/getOrAdd mo))
(retract ?pom)
(s/start-next ?nacts ?pid ?ain ?run))

(a:ArriveStart 0
?arr (Arrive status "START" 
	title ?tit 
	object ?obj 
	latitude ?lat 
	longitude ?lon 
	observer ?obs
	speed ?spd1
	spd ?spd2
	run ?run)
=>
(println "Action started:" ?tit "Arrive")
(if-let [mo (a/mapob-vv ?obj ?run)]
  (let [[lt ln] (if-let [obs (a/mapob-vv ?obs ?run)]
	[(.getLatitude obs)
	 (.getLongitude obs)]
	[(a/degmin-to-deg ?lat ?run)
	 (a/degmin-to-deg ?lon ?run)])
         spd (or (a/vv ?spd2 ?run) ?spd1)]
    (if (or (nil? lt) (nil? ln) (a/null? spd))
      (modify ?arr status "FAILED")
      (do (a/go-route mo lt ln)
        (.setSpeed mo (double spd))
        (modify ?arr status "WAIT"
	object mo))))
  (modify ?arr status "FAILED")))

(a:ArriveWait 0
?arr (Arrive status "WAIT" 
	object ?mo
	parent ?pid
	instance ?ain
	next_actions ?nacts
 	run ?run)
?moe (MapObEvent status "STOP_ROUTE"
	object ?mo)
=>
(retract ?moe ?arr)
(s/start-next ?nacts ?pid ?ain ?run))

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
    (let [ctx0 (protege.core/sv sub "context")
           hm0 (s/context-to-hm ctx0)
           hm1 (s/context-to-hm ctx)
           gid (gensym "Sus")]
      (.putAll hm0 hm1)
      (a/merge-hm-run hm0 ?run)
      (-> (ru.rules/mk-frame sub)
        (ru.rules/update-frame
	'Scenario
	{'status "START"
	 'run hm0
	 'parent gid})
        rete.core/assert-frame)
      (asser TwoObRelation parent "Run"
	observer (.hashCode ?run)
	object (.hashCode hm0))
      (modify ?ss status (if (protege.core/is? ?wai) "REPEAT" "DONE")
	id gid))
    (modify ?ss status "FAILED"))))

(a:SubscenarioDone 0
?ss (Subscenario status "DONE"
	parent ?pid
	instance ?ain
	run ?run
	next_actions ?nacts)
=>
(retract ?ss)
(s/start-next ?nacts ?pid ?ain ?run))

(a:TimeMessage 0
?tm (TimeMessage status "START"
	title ?tit
	clients ?cls
	category ?cat
	text ?txt
	parent ?pid
	instance ?ain
	run ?run
	next_actions ?nacts)
=>
(println "Action started:" ?tit "TimeMessage")
(a/time-message ?txt ?cat ?cls ?run)
(retract ?tm)
(s/start-next ?nacts ?pid ?ain ?run))

(a:PutOffMap 0
?pom (PutOffMap status "START"
	title ?tit
	mapob ?mos
	object ?obj
	delete ?del
	parent ?pid
	instance ?ain
	run ?run
	next_actions ?nacts)
=>
(println "Action started:" ?tit "PutOffMap")
(if-let [mo (a/mapob-vv ?obj ?run)]
  (ru.igis.omtab.OMT/removeMapOb mo (protege.core/is? ?del)))
(if (seq ?mos)
  (ru.igis.omtab.OMT/clearMapObs ?mos (protege.core/is? ?del)))
(retract ?pom)
(s/start-next ?nacts ?pid ?ain ?run))

(a:GoRouteStart 0
?gor (GoRoute status "START"
	title ?tit
	object ?obj
	route ?rou
	spd ?spd
	backward ?bwd
	run ?run
	parent ?par)
=>
(println "Action started:" ?tit "GoRoute")
(let [rou (a/vv ?rou ?run)
       mo (a/mapob-vv ?obj ?run)
       sps (a/vv ?spd ?run)]
  (or (and (a/worth? rou) mo (a/worth? sps) 
               (if-let [rte (a/to-route rou ?bwd)]
	(let [speed (a/nors sps)]
	  (.goRoute mo rte)
	  (.setSpeed mo (double speed))
	  (modify ?gor status "WAIT" object mo)
	  true)))
    (modify ?gor status "FAILED"))))

(a:GoRouteWait 0
?gor (GoRoute status "WAIT"
	object ?mo
	parent ?pid
	instance ?ain
	run ?run
	next_actions ?nacts)
?moe (MapObEvent status "STOP_ROUTE"
	object ?mo)
=>
(retract ?moe ?gor)
(s/start-next ?nacts ?pid ?ain ?run))

(s:LastANDFinalTaskDone 0
?t (Task status "DONE"
	parent ?pid
	instance ?tin
	(empty? ?ntasks))
?s (Scenario status "DOING"
	id ?pid
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
	title ?tit
	event ?evt
	run ?run)
=>
(println "Action started:" ?tit "WaitEvent")
(if-let [evt (a/vv ?evt ?run)]
  (let [wid (gensym "Wte")]
    (-> (ru.rules/mk-frame evt)
      (ru.rules/update-frame
	:same-type
	{'parent wid})
        rete.core/assert-frame)
    (modify ?we id wid
	status "REPEAT"))
  (modify ?we status "FAILED")))

(s:StartNextTasks 0
?t (Task status "DONE"
	parent ?pid
	run ?run
	next_tasks ?ntasks
	(not (empty? ?ntasks)))
=>
(s/start-tasks-actions ?ntasks ?pid ?run)
(retract ?t))

(a:WaitEventRepeatTOR 0
?we (WaitEvent status "REPEAT"
	id ?id
	parent ?pid
	instance ?ain
	run ?run
	next_actions ?nacts)
(Clock time ?t)
?tor (TwoObRelation title ?tit2
	ob_relation ?obr
	object ?obj
	observer ?obs
	radius ?rad
	value ?val
	parent ?id
	(e/two-ob-relation ?obr ?obj ?obs ?rad ?val ?run))
=>
(retract ?we ?tor)
(s/start-next ?nacts ?pid ?ain ?run))

(a:Calculus 0
?clc (Calculus status "START" 
	title ?tit 
	input_data ?ida 
	source ?src 
	results ?res
	parent ?pid
	instance ?ain
	run ?run
	next_actions ?nacts)
=>
(println "Action started:" ?tit "Calculus")
(let [bnd0 (d/embed-ctx-vars ?run)
       bnd1 (mapcat #(d/input-var-val % ?run) ?ida)
       bnd2 (d/parse-let-body (d/uncomment  ?src))
       bnd3 (vec (concat bnd0 bnd1 bnd2))
       vvm (d/var-val-map bnd3)
       exp `(let ~bnd3 ~vvm)
       ;;_ (println :EXP exp)
       vvm2 (eval exp)]
  (doseq [re ?res]
    (d/var-val-to-result re vvm2 ?run)))
(retract ?clc)
(s/start-next ?nacts ?pid ?ain ?run))

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
	instance ?ain
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
      (s/start-next ?nacts ?pid ?ain ?run))
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
	instance ?ain
	run ?run
	next_actions ?nacts)
=>
(println "Action started:" ?tit "RepeatActionOnOff")
(a/repeat-action-onoff ?ra ?col ?flg ?run)
(retract ?rao)
(s/start-next ?nacts ?pid ?ain ?run))

(a:WaitEventRepeatOP 0
?we (WaitEvent status "REPEAT" 
	id ?id
	parent ?pid
	instance ?ain
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
	parent ?id
	(e/ob-property ?prop ?obj ?rad ?lat ?lon ?val ?run))
=>
(retract ?we ?op)
(s/start-next ?nacts ?pid ?ain ?run))

(a:WaitEventRepeatOA 0
?we (WaitEvent status "REPEAT"
	id ?id
	parent ?pid
	instance ?ain
	run ?run
	next_actions ?nacts)
(Clock time ?t)
?oa (ObAttribute title ?tit2
	attribute ?atr
	object ?obj
	relation ?rel
	value ?val
	parent ?id
	(e/ob-attribute ?atr ?obj ?rel ?val ?run))
=>
(retract ?we ?oa)
(s/start-next ?nacts ?pid ?ain ?run))

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
	parent ?pid
	instance ?ain
	run ?run
	next_actions ?nacts)
=>
(println "Action started:" ?tit " Position")
(let [mob (a/mapob-vv ?obj ?run)
       mos (a/mapob-vv ?obs ?run)
       posa (a/vv ?posa ?run)
       posd (a/vv ?posd ?run)
       poss (a/vv ?poss ?run)]
  (if (and (some? mob) (some? mos) (a/worth? posa) (a/worth? posd) (a/worth? poss))
    (if-let [[lat lon spdb] (a/future-position mob mos posa posd poss ?rel ?rad)]
      (if (> spdb 0)
        (do (a/go-route mob lat lon)
          (.setSpeed mob (double spdb))
          (modify ?pos status "WAIT"
	object mob
	observer mos
	position-angle posa 
	position-distance posd 
	position-speed poss))
        (do (a/take-position mob mos posa posd poss ?rel)
          (retract ?pos)
          (s/start-next ?nacts ?pid ?ain ?run)))
      (modify ?pos status "FAILED"))
    (modify ?pos status "FAILED"))))

(a:PutOnPlace 0
?pop (PutOnPlace status "START" 
	title ?tit 
	object ?obj 
	observer ?obs 
	mapob ?mos
	parent ?pid
	instance ?ain
	run ?run
	next_actions ?nacts)
=>
(println "Action started:" ?tit "PutOnPlace")
(let [obj (a/vv ?obj ?run)
       obs (a/vv ?obs ?run)
       sts (if (or (a/null? obs) (and (a/null? obj) (empty? ?mos)))
               "FAILED"
               (if-let [ms (ru.igis.omtab.OMT/getOrAdd obs)]
                 (let [lat (.getLatitudeDM ms)
                        lon (.getLongitudeDM ms)]
                   (doseq [mo ?mos]
                     (-> (ru.igis.omtab.OMT/getOrAdd mo) 
                       (.setLocation lat lon)))
                   (if (not (a/null? obj))
                     (.setLocation (ru.igis.omtab.OMT/getOrAdd obj) lat lon))
                   "DONE")
                 "FAILED"))]
  (retract ?pop)
  (s/start-next ?nacts ?pid ?ain ?run)))

(a:PositionWait 0
?pos (Position status "WAIT" 
	object ?mob
	observer ?mos
	position-angle ?posa 
	position-distance ?posd 
	position-speed ?poss 
	relative ?rel 
	run ?run
	instance ?ain
	parent ?pid
	next_actions ?nacts)
?moe (MapObEvent status "STOP_ROUTE"
	object ?mob)
=>
(a/take-position ?mob ?mos ?posa ?posd ?poss ?rel)
(retract ?moe ?pos)
(s/start-next ?nacts ?pid ?ain ?run))

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
	instance ?ain
	run ?run
	next_actions ?nacts)
=>
(retract ?om)
(s/start-next ?nacts ?pid ?ain ?run))

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
?tor (TwoObRelation observer ?obs
	(= (.hashCode ?run) ?obs))
=>
(retract ?tor))

(s:Retract Runs Relation for Object 0
(Scenario status "DONE"
	run ?run)
?tor (TwoObRelation object ?obj
	(= (.hashCode ?run) ?obj))
=>
(retract ?tor))

(a:Break Tasks 0
?brk (Break status "START"
	title ?tit
	activity ?act
	parent ?pid
	instance ?ain
	run ?run
	next_actions ?nacts
	(= (protege.core/typ (a/vv ?act ?run)) "Task"))
=>
(println "Action started:" ?tit "Break")
(if-let [act (a/vv ?act ?run)]
  (do (a/break-task act ?run)
    (retract ?brk)
    (s/start-next ?nacts ?pid ?ain ?run))
  (modify ?brk status "FAILED")))

(a:Break Actions 0
?brk (Break status "START"
	title ?tit
	activity ?act
	parent ?pid
	instance ?ain
	run ?run
	next_actions ?nacts
	(let [act (a/vv ?act ?run)]
	  (and (not= (protege.core/typ act) "Task")
	    (not= (protege.core/typ act) "Scenario")
	    (not= (protege.core/typ act) "MissionScenario"))))
=>
(println "Action started:" ?tit "Break")
(if-let [act (a/vv ?act ?run)]
  (do (a/break-action  act ?run)
    (retract ?brk)
    (s/start-next ?nacts ?pid ?ain ?run))
  (modify ?brk status "FAILED")))

(a:Break Subscenarios 1
?brk (Break status "START"
	title ?tit
	activity ?act
	parent ?pid
	instance ?ain
	run ?run
	next_actions ?nacts
	(let [act (a/vv ?act ?run)]
	  (or (= (protege.core/typ act) "Scenario")
	    (= (protege.core/typ act) "MissionScenario"))))
(TwoObRelation parent "Run"
	observer ?obs
	object ?obj)
(Scenario run ?run2
	((= (.hashCode ?run) ?obs)
	 (= (.hashCode ?run2) ?obj)))
=>
(println "Action started:" ?tit "Break")
(if-let [act (a/vv ?act ?run)]
  (do 
    (a/break-scenario act ?run2)
    (retract ?brk)
    (s/start-next ?nacts ?pid ?ain ?run))
  (modify ?brk status "FAILED")))

(a:Break Scenario 0
?brk (Break status "START"
	title ?tit
	activity ?act
	parent ?pid
	instance ?ain
	run ?run
	next_actions ?nacts
	(let [act (a/vv ?act ?run)]
	  (or (= (protege.core/typ act) "Scenario")
	    (= (protege.core/typ act) "MissionScenario"))))
=>
(println "Action started:" ?tit "Break")
(if-let [act (a/vv ?act ?run)]
  (do 
    (a/break-scenario act ?run)
    (retract ?brk)
    (s/start-next ?nacts ?pid ?ain ?run))
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
	instance ?ain
	run ?run
	next_actions ?nacts)
=>
(retract ?too)
(s/start-next ?nacts ?pid ?ain ?run))

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
	instance ?ain
	run ?run
	next_actions ?nacts
	((not= ?sta "DONE")
	 (number? ?n)
	 (> ?t ?n)))
=>
(retract ?sea)
(s/start-next ?nacts ?pid ?ain ?run))

(a:SearchOutside 0
?sea (Search status "OUTSIDE"
	object ?obj
	observer ?obs
	detect-distance ?dd
	detect-probability ?dp
	client ?cli
	parent ?pid
	instance ?ain
	run ?run
	next_actions ?nacts)
(Clock)
=>
(let [mob (a/mapob-vv ?obj ?run)
       mos (a/mapob-vv ?obs ?run)]
  (cond
    (nil? mos) (modify ?sea status "FAILED")
    (nil? mob) (let [obj (a/vv ?obj ?run)]
	(asser Exception status "LOST" object obj title (protege.core/sv obj "label") run ?run)
	(modify ?sea status "FAILED"))
    true
      (let [dd (a/vv ?dd ?run)
             dp (a/vv ?dp ?run)]
        (if (not (or (a/null? dd) (a/null? dp)))
          (if (<= (.distanceNM mos mob) (read-string dd))
            (if (<= (Math/random) (read-string dp))
              (do (.putAttribute mos "DETECT" (.getName mob))
                (.putAttribute mob "DETECTED-BY" (.getName mos)) 
                (retract ?sea)
                (s/start-next ?nacts ?pid ?ain ?run))
              (modify ?sea status "INSIDE")))
          (modify ?sea status "FAILED"))))))

(a:SearchInside 0
?sea (Search status "INSIDE"
	object ?obj
	observer ?obs
	detect-distance ?dd
	run ?run)
(Clock)
=>
(let [mob (a/mapob-vv ?obj ?run)
       mos (a/mapob-vv ?obs ?run)]
  (cond
    (nil? mos) (modify ?sea status "FAILED")
    (nil? mob) (let [obj (a/vv ?obj ?run)]
	(asser Exception status "LOST" object obj title (protege.core/sv obj "label") run ?run)
	(modify ?sea status "FAILED"))
    true
      (if (> (.distanceNM mos mob) (read-string (a/vv ?dd ?run)))
        (modify ?sea status "OUTSIDE")))))

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
	instance ?ain
	run ?run
	next_actions ?nacts)
=>
(retract ?poa)
(s/start-next ?nacts ?pid ?ain ?run))

(s:FirstORFinalTaskDone 0
?t (Task status "DONE"
	parent ?pid
	instance ?tin
	next_tasks ?ntasks
	(empty? ?ntasks))
?s (Scenario status "DOING" 
	id ?pid
	finish_type OR
	title ?tit
	final_tasks ?ftasks 
	((s/include? ?ftasks ?tin)
	 (not (empty? ?ftasks))))
=>
(println "Scenario DONE:" ?tit)
(modify ?s status "DONE")
(retract ?t))

(s:HangingFinalActionDone -5
?ac (Action status "DONE" 
	next_actions ?nacts
	(empty? ?nacts))
=>
(retract ?ac))

(s:InterimFinalTaskDone 0
?t (Task status "DONE"
	parent ?pid
	instance ?tin
	(empty? ?ntasks))
?s (Scenario status "DOING"
	id ?pid
	finish_type AND
	final_tasks ?ftasks 
	((s/include? ?ftasks ?tin)
	 (> (count ?ftasks) 1)))
=>
(modify ?s final_tasks (s/exclude ?ftasks ?tin))
(retract ?t))

(a:SetCenter 0
?sc (SetCenter status "START"
	title ?tit
	latitude ?lat
	longitude ?lon
	units ?uni
	parent ?pid
	instance ?ain
	run ?run
	next_actions ?nacts)
=>
(println "Action started:" ?tit "SetCenter")
(let [lat (a/vv ?lat ?run)
       lon (a/vv ?lon ?run)]
  (if (and (a/worth? lat) (a/worth? lon))
    (let [dm (= ?uni 'DEG_MIN)
           lat (if dm (ru.igis.omtab.MapOb/getDeg lat) (read-string lat))
           lon (if dm (ru.igis.omtab.MapOb/getDeg lon) (read-string lon))]
       (-> (ru.igis.omtab.OpenMapTab/getMapBean)
          (.setCenter lat lon))
       (retract ?sc)
       (s/start-next ?nacts ?pid ?ain ?run))
    (modify ?sc status"FAILED"))))

(a:GoLayerRouteStart 0
?glr (GoLayerRoute status "START"
	title ?tit
	object ?obj
	layer ?lay
	number ?num
	spd ?spd
	direction ?dir
	run ?run
	parent ?par)
=>
(println "Action started:" ?tit "GoLayerRoute")
(let [mo (a/mapob-vv ?obj ?run)
       lay (a/vv ?lay ?run)
       num (a/vv ?num ?run)
       sps (a/vv ?spd ?run)
       dir (a/vv ?dir ?run)]
  (or (and mo (a/worth? lay) (a/worth? num) (a/worth? sps) (a/worth? dir)
               (if-let [tgs (a/layer-targets (protege.core/sv lay "prettyName"))]
 	(let [gg (vec (first tgs))
	       num (a/nors num)
                               lla (a/omp-lla (nth gg num))
	       bwd (= dir "BACKWARD")
	       [lat lon] (if bwd 
		[(last (butlast lla)) (last lla)]
		[(first lla) (second lla)])
	       rte (a/to-route lla bwd)
	       speed (a/nors sps)]
	  (.setLocation mo lat lon)
	  (.goRoute mo rte)
	  (.setSpeed mo (double speed))
	  (modify ?glr status "WAIT" 
		object mo)
	  true)))
    (modify ?glr status "FAILED"))))

(a:AttributeMessage 0
?am (AttributeMessage status "START"
	title ?tit
	clients ?cls
	category ?cat
	text ?txt
	object ?obj
	attribute ?atr
	parent ?pid
	instance ?ain
	run ?run
	next_actions ?nacts)
=>
(println "Action started:" ?tit "AttributeMessage")
(a/attribute-message ?txt ?obj ?atr ?cat ?cls ?run)
(retract ?am)
(s/start-next ?nacts ?pid ?ain ?run))

(a:GoLayerRouteWait 0
?glr (GoLayerRoute status "WAIT"
	object ?mo
	parent ?pid
	instance ?ain
	run ?run
	next_actions ?nacts)
?moe (MapObEvent status "STOP_ROUTE"
	object ?mo)
=>
(retract ?moe ?glr)
(s/start-next ?nacts ?pid ?ain ?run))

(a:ShowDone 0
?dis (Show status "DONE" 
	parent ?pid
	instance ?ain
	run ?run
	next_actions ?nacts)
=>
(retract ?dis)
(s/start-next ?nacts ?pid ?ain ?run))

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
	instance ?ain
	run ?run
	next_actions ?nacts)
=>
(retract ?cmp)
(s/start-next ?nacts ?pid ?ain ?run))

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
  (s/start-tasks-actions ?iacts tid ?run)))

(a:PutObPropertiesStart 0
?pop (PutObProperties status "START" 
	title ?tit 
	object ?obj
	latitude ?lat
	longitude ?lon
	new_course ?crs
	new_speed ?spd
	new_altitude ?alt
	run ?run)
=>
(println "Action started:" ?tit "PutObProperties")
(modify ?pop status (a/put-ob-properties ?obj ?lat ?lon ?crs ?spd ?alt ?run)))

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

(a:GoRoadStart 0
?gor (GoRoad status "START"
	title ?tit
	object ?obj
	road ?road
	spd ?spd
	direction ?dir
	run ?run
	parent ?par)
=>
(println "Action started:" ?tit "GoRoad")
(let [mo (a/mapob-vv ?obj ?run)
       roa (a/vv ?road ?run)
       dir (a/vv ?dir ?run)
       sps (a/vv ?spd ?run)]
  (if (and (some? mo) (a/worth? roa) (a/worth? dir) (a/worth? sps))
    (let [dws (seq (protege.core/svs roa "dirways"))
           gbw (= dir "BACKWARD")
           dws (if gbw (reverse dws) dws)
           dw (first dws)
           dn (protege.core/sv dw "direction")
           bwd (= dn "BACKWARD")
           bwd (if bwd (not gbw) gbw)
           way (protege.core/sv dw "way")
           lla (read-string (protege.core/sv way "source"))
           [lat lon] (if bwd (last lla) (first lla))
           lla (flatten lla)
           rte (a/to-route lla bwd)
           rsp (a/nors sps)]
      (.setLocation mo lat lon)
      (.goRoute mo rte)
      (.setSpeed mo (double rsp))
      (.putAttribute mo "ROAD-SPEED" rsp)
      (modify ?gor status "WAIT"
	object mo
	road (rest dws)
	direction gbw))
    (modify ?gor status "FAILED"))))

(a:AddResource 0
?ar (AddResource status "START"
	title ?tit
	object ?obj
	resource ?res
	collection ?col
	thing ?thi
	parent ?pid
	instance ?ain
	run ?run
	next_actions ?nacts)
=>
(println "Action started:" ?tit "AddResource")
(let [mo (a/mapob-vv ?obj ?run)
       thi (a/vv ?thi ?run)
       col (concat ?col (if (not (a/null? thi)) [thi]))]
  (if (and mo (not (a/null? ?res)) (seq col))
    (let [atr (protege.core/sv ?res "title")
           avv (.getAttribute mo atr)
           nvv (vec (concat avv col))]
      (.putAttribute mo atr nvv)
      (retract ?ar)
      (s/start-next ?nacts ?pid ?ain ?run))
    (modify ?ar status "FAILED"))))

(a:PutObPropertiesDone 0
?pop (PutObProperties status "DONE" 
	parent ?pid
	instance ?ain
	run ?run
	next_actions ?nacts)
=>
(retract ?pop)
(s/start-next ?nacts ?pid ?ain ?run))

(a:CreateByModel 0
?cbm (CreateByModel status "START"
	title ?tit
	model ?mod
	object ?obj
	parent ?pid
	instance ?ain
	run ?run
	next_actions ?nacts)
=>
(println "Action started:" ?tit "CreateByModel")
(a/create-by-model ?mod ?obj ?run)
(retract ?cbm)
(s/start-next ?nacts ?pid ?pid ?run))

(a:GoRoadWait 0
?gor (GoRoad status "WAIT"
	object ?mo
	road ?dws
	direction ?gbw
	parent ?pid
	instance ?ain
	run ?run
	next_actions ?nacts)
?moe (MapObEvent status "STOP_ROUTE"
	object ?mo)
=>
(retract ?moe)
(if (empty? ?dws)
  (do (.removeAttribute ?mo "ROAD-SPEED")
    (retract ?gor)
    (s/start-next ?nacts ?pid ?ain ?run))
  (let [dw (first ?dws)
       dn (protege.core/sv dw "direction")
       bwd (= dn "BACKWARD")
       bwd (if bwd (not ?gbw) ?gbw)
       way (protege.core/sv dw "way")
       lla (read-string (protege.core/sv way "source"))
       lla (if bwd (butlast lla) (rest lla))
       rte (a/to-route (flatten lla) bwd)
       rsp (.getAttribute ?mo "ROAD-SPEED")]
  (.goRoute ?mo rte)
  (.setSpeed ?mo (double rsp))
  (modify ?gor road (rest ?dws)))))

(a:WaitEventAS 0
?we (WaitEvent status "REPEAT" 
	id ?id
	parent ?pid 
	instance ?ain 
	run ?run
	next_actions ?nacts)
(Clock time ?t)
?as (ActivityStatus parent ?id
	activity ?act
	status ?sts
	(e/act-status ?act ?sts ?run))
=>
(retract ?we ?as)
(s/start-next ?nacts ?pid ?ain ?run))

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
	(empty? ?jtasks))
=>
(println "Join DONE:" ?tit)
(retract ?j)
(s/start-tasks-actions ?ntasks ?pid ?run))

(a:SetScale 0
?ss (SetScale status "START"
	title ?tit
	scale ?scl
	parent ?pid
	instance ?ain
	run ?run
	next_actions ?nacts)
=>
(println "Action started:" ?tit "SetScale")
(let [scl (a/vv ?scl ?run)]
  (if (a/worth? scl)
    (do (-> (ru.igis.omtab.OpenMapTab/getMapBean)
            (.setScale (float (read-string scl))))
       (retract ?ss)
       (s/start-next ?nacts ?pid ?ain ?run))
    (modify ?ss status"FAILED"))))

(a:FlightViewStart 0
?fv (FlightView status "START"
	title ?tit
	object ?obj
	scale ?scl
	run ?run)
(not FlightView)
=>
(println "Action started:" ?tit "FlightView")
(let [mo (a/mapob-vv ?obj ?run)
       scl (a/vv ?scl ?run)]
  (if (and (some? mo) (a/worth? scl))
    (do (-> (ru.igis.omtab.OpenMapTab/getMapBean)
            (.setScale (float (read-string scl))))
       (modify ?fv status "REPEAT"))
    (modify ?fv status"FAILED"))))

(a:FlightViewRepeat 0
?fv (FlightView status "REPEAT"
	title ?tit
	object ?obj
	scale ?scl
	parent ?pid
	instance ?ain
	run ?run
	next_actions ?nacts)
(Clock time ?t)
=>
(if-let [mo (a/mapob-vv ?obj ?run)]
  (-> (ru.igis.omtab.OpenMapTab/getMapBean)
    (.setCenter (.getLatitude mo) (.getLongitude mo)))
  (do (retract ?fv)
    (s/start-next ?nacts ?pid ?ain ?run))))

(a:FlightViewSwitch 1
?fv1 (FlightView status "REPEAT")
?fv2 (FlightView status "START")
=>
(retract ?fv1))

(a:FlightViewStop 1
?fv (FlightView status "REPEAT")
(SetCenter)
=>
(retract ?fv))

(a:Camera 0
?cam (Camera status "START"
	title ?tit
	object ?obj
	view ?vie
	pitch ?pit
	roll ?rol
	parent ?pid
	instance ?ain
	run ?run
	next_actions ?nacts)
=>
(println "Action started:" ?tit "Camera")
(if-let [mo (a/mapob-vv ?obj ?run)]
  (let [vie (a/vv ?vie ?run)
         pit (a/vv ?pit ?run)
         rol (a/vv ?rol ?run)
         cam (if (a/worth? vie) {:view vie} {})
         cam (if (a/worth? pit) (assoc cam :pitch pit) cam)
         cam (if (a/worth? rol) (assoc cam :roll rol) cam)]
    (clojuretab.ClojureTab/invoke 
	"pro.server" 
	"go-onboard"
	(.getName mo))
    (.putAttribute mo "CAMERA" cam)
    (retract ?cam)
    (s/start-next ?nacts ?pid ?ain ?run))
  (modify ?cam status "FAILED")))

(a:DelayRepeat 0
(Clock time ?t)
?del (Delay status "REPEAT" 
	N ?n 
	parent ?pid
	instance ?ain
	run ?run
	next_actions ?nacts
	(> ?t ?n))
=>
(retract ?del)
(s/start-next ?nacts ?pid ?ain ?run))

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
	instance ?ain
	run ?run
	next_actions ?nacts)
=>
(println "Action started:" ?tit "DeleteResource")
(let [mo (a/mapob-vv ?obj ?run)
       atr (protege.core/sv ?res "title")
       rr (.getAttribute mo atr)]
  (if (seq rr)
    (do (doseq [ins (rest rr)]
            (ru.igis.omtab.OMT/removeMapOb ins false)
            (protege.core/delin ins))
        (.removeAttribute mo atr)
        (retract ?dr)
        (s/start-next ?nacts ?pid ?ain ?run))
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
	instance ?ain
	run ?run
	next_actions ?nacts)
=>
(println "Action started:" ?tit "AssertObjects")
(let [obj (a/vv ?obj ?run)
      inss (if (a/null? obj) ?col (cons obj ?col))]
  (a/assert-objects inss ?run))
(retract ?aos)
(s/start-next ?nacts ?pid ?ain ?run))

(a:AttributesToVariables 0
?atv (AttributesToVariables status "START"
	title ?tit
	objects ?obs
	attributes ?ats
	variables ?vrs
	parent ?pid
	instance ?ain
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
(s/start-next ?nacts ?pid ?ain ?run))

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
	instance ?ain
	run ?run
	next_actions ?nacts)
=>
(println "Action started:" ?tit "SetModelClock")
(let [tim (a/vv ?tim ?run)
      sec (a/op-time-sec tim)]
    (ru.igis.omtab.Clock/setClock (long (* 1000 sec))))
(retract ?smc)
(s/start-next ?nacts ?pid ?ain ?run))

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
	instance ?ain
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
      (s/start-next ?nacts ?pid ?ain ?run))
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
	instance ?ain
	run ?run
	next_actions ?nacts
	(> ?t ?n))
=>
(retract ?wms)
(s/start-next ?nacts ?pid ?ain ?run))

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

(a:PositionObserverManeuver -1
?pos (Position status "WAIT" 
	object ?mob
	observer ?mos
	position-angle ?posa 
	position-distance ?posd 
	position-speed ?poss 
	relative ?rel
	radius ?rad
	run ?run)
?moe (MapObEvent status ?stss
	object ?mos
	[(= ?stss "UPD_COURSE")
	 (= ?stss "UPD_SPEED")])
=>
(if-let [[lat lon spdb] (a/future-position ?mob ?mos ?posa ?posd ?poss ?rel ?rad)]
  (.goRoute ?mob lat lon)
  (.stopRoute ?mob))
(retract ?moe))

(a:UseResource 0
?ur (UseResource status "START"
	title ?tit
	object ?obj
	resource ?res
	variable ?var
	parent ?pid
	instance ?ain
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
      (s/start-next ?nacts ?pid ?ain ?run))
    (modify ?ur status "FAILED"))))

(a:MovingObjectMessageDone 0
?mom (MovingObjectMessage status "DONE"
	parent ?pid
	instance ?ain
	run ?run
	next_actions ?nacts)
=>
(retract ?mom)
(s/start-next ?nacts ?pid ?ain ?run))

(a:ArriveIntoPolygon 0
?aip (ArriveIntoPolygon status "START" 
	title ?tit 
	object ?obj 
	polygon ?pol 
	spd ?spd 
	parent ?pid
	instance ?ain
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
	parent ?pid
	instance ?ain
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
	instance ?ain
	run ?run
	next_actions ?nacts)
=>
(println "Action started:" ?tit "StartScenarios")
(loop [ss ?scs dd ?dfs]
  (when (seq ss)
    (s/start-scenario (first ss) (if (= (first dd) true) {}))
    (recur (rest ss) (rest dd))))
(retract ?ss)
(s/start-next ?nacts ?pid ?ain ?run))

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
	instance ?ain
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
(s/start-next ?nacts ?pid ?ain ?run))

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
	instance ?ain
	run ?run
	next_actions ?nacts)
=>
(println "Action started:" ?tit "SetTimeScale")
(if-let [scl (a/vv ?scl ?run)]
  (ru.igis.omtab.OMT/setTimeScale scl))
(retract ?sts)
(s/start-next ?nacts ?pid ?ain ?run))

(a:ConfirmPosition 0
?cp (ConfirmPosition status "START" 
	title ?tit 
	object ?obj
	latitude ?lat
	longitude ?lon
	client ?cli
	parent ?pid
	instance ?ain
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
        (asser Exception status "LOST" object obj title (protege.core/sv obj "label") run ?run)))
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
      (s/start-next ?nacts ?pid ?ain ?run)))))

(a:CircleScan 0
?cs (CircleScan status "START"
	title ?tit 
	object ?obj 
	detector ?det
	client ?cli
	text ?txt
	parent ?pid
	instance ?ain
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
        (asser Exception status "LOST" object obj title (protege.core/sv obj "label") run ?run)))
    (let [types (protege.core/svs det "types")
           ranges (protege.core/svs det "ranges")
           probs (protege.core/svs det "probabilities")]
      (doseq [tgt (ru.igis.omtab.OMT/getMapObs)]
        (if (a/detected mo tgt types ranges probs)
          (let [tgn (.getName tgt)]
            (asser Exception status "DETECTED" object obj title (eval tgn) run ?run)
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
      (s/start-next ?nacts ?pid ?ain ?run)))))

(d:CatchExceptionStart 0
?ce (CatchException status "START" 
	title ?tit 
	objects ?obs
	statuses ?sts
	run ?run
	variants ?vrs)
=>
(modify ?ce status "WAIT"
	objects (map #(a/vv % ?run) ?obs)
	statuses (map #(a/vv % ?run) ?sts)))

(d:CatchExceptionWait 0
?ce (CatchException status "WAIT" 
	title ?tit 
	objects ?obs
	statuses ?sts
	parent ?pid
	run ?run
	variants ?vrs)
?ex (Exception status ?sta
	object ?obj
	((some #{?sta} ?sts)
	 (some #{?obj} ?obs)))
=>
(println "Decision:" ?tit "CatchException status WAIT")
(loop [oo ?obs ss ?sts vv ?vrs]
  (if (seq oo)
    (if (and (= (first oo) ?obj) (= (first ss) ?sta))
      (do (s/start-tasks-actions [(first vv)] ?pid ?run)
        (retract ?ce ?ex))
      (recur (rest oo) (rest ss) (rest vv))))))

(a:RetractObjects 0
?ros (RetractObjects status "START"
	title ?tit
	object ?obj
	collection ?col
	parent ?pid
	instance ?ain
	run ?run
	next_actions ?nacts)
=>
(println "Action started:" ?tit "RetractObjects")
(let [obj (a/vv ?obj ?run)
      inss (if (a/null? obj) ?col (cons obj ?col))]
  (ru.rules/retract-instances inss))
(retract ?ros)
(s/start-next ?nacts ?pid ?ain ?run))

(a:PolyMovingRepeat 0
?pm (PolyMoving status "REPEAT"
	title ?tit
	object ?obj
	observer ?obs
	time ?tim
	run ?run
	parent ?pid
	instance ?ain
	next_actions ?nacts)

(Clock time ?t)
=>
(if-let [mob (a/mapob-vv ?obj ?run)]
  (let [re (poly.moving/pm-repeat mob ?t)]
    (cond
      (< re 0) (modify ?pm status "FAILED")
      (= re 0) (do (retract ?pm)
                       (s/start-next ?nacts ?pid ?ain ?run))))
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
	instance ?ain
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
	     (s/start-next ?nacts ?pid ?ain ?run))
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

(sim:RetractMapObEvent -10
?moe (MapObEvent status ?sts)
=>
;;(println :MapObEvent ?sts)
(retract ?moe))

(a:MovingTraceRepeat 0
?mt (MovingTrace status "REPEAT"
	title ?tit
	object ?obj
	polygon ?pol
	step ?stp
	parent ?pid
	instance ?ain
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
      (s/start-next ?nacts ?pid ?ain ?run)))))

(a:MovingTraceStart 0
?mt (MovingTrace status "START"
	title ?tit
	object ?obj
	polygon ?pol
	parent ?pid
	instance ?ain
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
      (s/start-next ?nacts ?pid ?ain ?run)))))

(a:WaitObAttributesDone 0
?woa (WaitObAttributes status "DONE" 
	parent ?pid
	instance ?ain
	run ?run
	next_actions ?nacts)
=>
(retract ?woa)
(s/start-next ?nacts ?pid ?ain ?run))

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
       tit (gensym "CoRo")]
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

(a:CombDone 0
?cb (Comb status ?sts
	parent ?pid
	instance ?ain
	run ?run
	next_actions ?nacts
	((not= ?sts "START")
	 (not= ?sts "REPEAT")))
(Clock)
(not GoRoute title ?sts)
=>
(retract ?cb)
(s/start-next ?nacts ?pid ?ain ?run))

(a:MissionStart 0
?ot (Mission status "START"
	title ?tit
	sub_scenario ?sub
	context ?ctx 
	player ?pla 
	wait_subscenario ?wai
	run ?run)
=>
(println "Action started:" ?tit "Mission")
(let [sub (a/vv ?sub ?run)
       ctx (a/vv ?ctx ?run)
       pla (a/vv ?pla ?run)
       mo (ru.igis.omtab.OMT/getMapOb pla)]
  (if (and mo (not (a/null? sub)))
    (let [ctx0 (protege.core/sv sub "context")
           hm0 (s/context-to-hm ctx0)
           hm1 (s/context-to-hm ctx)
           gid (gensym "Ots")]
      (.putAll hm0 hm1)
      (a/merge-hm-run hm0 ?run)
      (.put hm0 "?protagonist" pla)
      (-> (ru.rules/mk-frame sub)
        (ru.rules/update-frame
	'Scenario
	{'status "START"
	 'run hm0
	 'parent gid})
        rete.core/assert-frame)
      (asser TwoObRelation parent "Run"
	observer (.hashCode ?run)
	object (.hashCode hm0))
      (modify ?ot status (if (protege.core/is? ?wai) "REPEAT" "DONE")
	id gid))
    (modify ?ot status "FAILED"))))

(a:MissionRepeat 5
?ot (Mission status "REPEAT"
	id ?id
	parent ?pid
	instance ?ain
	run ?run
	next_actions ?nacts)
(Scenario status "DONE"
	parent ?id)
=>
(retract ?ot)
(s/start-next ?nacts ?pid ?ain ?run))

(a:MissionDone 0
?ot (Mission status "DONE"
	parent ?pid
	instance ?ain
	run ?run
	next_actions ?nacts)
=>
(retract ?ot)
(s/start-next ?nacts ?pid ?ain ?run))

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

