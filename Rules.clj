(czm:Check Onboard 0
(CZMLGenerator delay ?del)
?onb (Onboard label ?lab
	time ?tim)
(Clock time ?t (> ?t ?tim))
=>
(let [onb (deref light.pro.server/ONBOARD)
       fut (+ ?t ?del)]
  (if (not= onb ?lab)
    (modify ?onb time fut label onb)
    (modify ?onb time fut))))

(czm:CZML Navob Leg Generation 1
(CZMLGenerator delay ?del
	visibility ?vis)
(Onboard label ?onb)
?cs (CZMLSpan time ?tim
	object ?obj
	options ?ops)
(Clock time ?t (> ?t ?tim))
=>
(if-let [omo (ru.igis.omtab.OMT/getMapOb ?onb)]
  (if-let [nmo (ru.igis.omtab.OMT/getMapOb ?obj)]
    (let [dis (.distanceNM omo nmo)]
      (if (< dis ?vis)
        (light.cesium.core/navob-leg 
	nmo
	dis
	(+ ?del 2)
	?ops))
      (modify ?cs time (+ ?t ?del))))))

(czm:CZMLSpan Init 0
?cs (CZMLSpan time ?tim
	object ?obj
	options ?ops
	((not (string? ?obj))
	 (not (string? ?ops))))
=>
(modify ?cs object (protege.core/sv ?obj "label")
	options (apply hash-map
		(mapcat #(list (read-string (protege.core/sv % "keyword"))
			(read-string (protege.core/sv % "argument"))) ?ops))))

(sim0:RetractMapObEvent0 -10
?moe (MapObEvent0 object ?obj)
=>
(retract ?moe))

(sim0:RetractSecondClock0 10
?c1 (Clock0 time ?t1)
?c2 (Clock0 time ?t2
	(< ?t2 ?t1))
=>
(retract ?c2))

(sim0:Start Simulation 0
(CZMLGenerator)
(not Clock0)
=>
(light.sim/start-sim))

(czm0:Check Onboard 0
(CZMLGenerator delay ?del)
?onb (Onboard label ?lab
	time ?tim)
(Clock0 time ?t (> ?t ?tim))
=>
(let [onb (deref light.pro.server/ONBOARD)
       fut (+ ?t ?del)]
  (if (not= onb ?lab)
    (modify ?onb time fut label onb)
    (modify ?onb time fut))))

(czm0:CZML Navob Leg Generation 1
(CZMLGenerator delay ?del
	visibility ?vis)
(Onboard label ?onb)
?cs (CZMLSpan time ?tim
	object ?obj
	options ?ops)
(Clock0 time ?t (> ?t ?tim))
=>
(if-let [omo (ru.igis.omtab.OMT/getMapOb ?onb)]
  (if-let [nmo (ru.igis.omtab.OMT/getMapOb ?obj)]
    (let [dis (.distanceNM omo nmo)]
      (if (< dis ?vis)
        (light.cesium.core/navob-leg 
	nmo
	dis
	(+ ?del 2)
	?ops))
      (modify ?cs time (+ ?t ?del))))))

