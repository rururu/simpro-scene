(p:Check:  Max Solutions -> Postprocessing 1
?w (Work status "CHECK")
(Goal max-solutions ?msl)
(Solution)
=>
(when (>= (count (rete.core/fact-list 'Solution)) ?msl)
  (if path/TRACE
    (println :POSTPROCESSING))
  (modify ?w status "POSTPROCESSING")))

(ExecuteInstruction 100
?ins (Instruction source ?src)
=>
(load-string ?src)
(retract ?ins))

(p:Extension -> Postprocessing - Many Solutions -1
?w (Work status "EXTENSION")
(Solution)
=>
(if path/TRACE
  (println :POSTPROCESSING))
(modify ?w status "POSTPROCESSING"))

(p:Optimization -> Postprocessing - One Solution -1
?w (Work status "OPTIMIZATION")
(Solution path ?pth)
(not Solution)
=>
(when path/TRACE
  (path/F-display-points :OPTIMIZED ?pth)
  (println :POSTPROCESSING))
(modify ?w status "POSTPROCESSING"))

(p:Optimization: Solutions Optimized 0
(Work status "OPTIMIZATION")
(Solution path ?pth)
(not Solution)
=>
(rete.core/problem-solved)
(if path/TRACE
  (path/F-display-points :OPTIMIZED ?pth)))

(p:Optimization: Solutions Optimization 0
(Work status "OPTIMIZATION")
?s1 (Solution path ?pth1
	a ?a 
	b ?b)
?s2 (Solution path ?pth2
	a ?a 
	b ?b)
=>
(if path/TRACE
  (path/F-display-points "Optimization between" [?pth1 "and" ?pth2]))
(if (< (path/F-distance ?pth1) (path/F-distance ?pth2))
  (retract ?s2)
  (retract ?s1)))

(p:Extension: Direction Assesment Forward 1
(Work status "EXTENSION")
(Goal a ?a b ?b)
?p (Path1 status "OPEN"
	a ?a
	points ?pts
	(path/F-wrong-direction ?a ?b ?pts))
=>
(retract ?p))

(p:Extension: Direction Assesment Backward 1
(Work status "EXTENSION")
(Goal a ?a b ?b)
?p (Path1 status "OPEN"
	a ?b
	points ?pts
	(path/F-wrong-direction ?b ?a ?pts))
=>
(retract ?p))

(p:Extension -> Optimization -1
?w (Work status "EXTENSION")
(not Path1 status "OPEN")
=>
(if path/TRACE
  (println :OPTIMIZATION))
(modify ?w status "OPTIMIZATION"))

(p:Check:  Max Solutions -> Optimization 1
?w (Work status "CHECK")
(Goal max-solutions ?msl)
(Solution)
=>
(when (>= (count (rete.core/fact-list 'Solution)) ?msl)
  (if path/TRACE
    (println :OPTIMIZATION))
  (modify ?w status "OPTIMIZATION")))

(p:Check -> Extension -1
?w (Work status "CHECK")
(not Path1 status "OPEN")
=>
(if path/TRACE
  (println :EXTENSION))
(modify ?w status "EXTENSION"))

(p:Extension -> Check -1
?w (Work status "EXTENSION")
(Path1 status "OPEN")
=>
(if path/TRACE
  (println :CHECK))
(modify ?w status "CHECK"))

(p:Check: Long Path1 Retract 0
(Work status "CHECK")
(Solution path ?pth)
?p (Path1 points ?pts
	(> (count ?pts) (count ?pth)))
=>
(retract ?p))

(p:Extension: Path0 Extension 0
(Work status "EXTENSION")
?p (Path0 status "OPEN"
	a ?a 
	b ?b
	points ?pts)
=>
(let [sqs (path/F-find-sequels ?b)]
  (doseq [sp sqs]
    (if (not (some #{sp} ?pts))
      (asser Path1 a ?a
	b (path/argval sp)
	status "OPEN"
	points (path/F-display-points "Path" (conj ?pts sp)))))
  (asser Path1 a ?a b ?b
	status "CLOSED"
	points ?pts))
  (retract ?p)))

(p:Check: Goal Start 0
(Work status "CHECK")
?g (Goal status "START"
	a ?a 
	b ?b)
=>
(let [ia (path/F-init-point ?a)
       ib (path/F-init-point ?b)]
  (asser Path0 a ia
	b ia
	status "OPEN"
	points [ia])
  (asser Path0 a ib
	b ib
	status "OPEN"
	points [ib])
  (modify ?g a ia b ib
	status "RUN"))
(if path/TRACE
  (println "Goal" [?a ?b])))

(p:Check: Two Path1 Connection 0
(Work status "CHECK")
?g (Goal status "RUN"
	a ?a 
	b ?b)
?p1 (Path1 a ?a status ?sts1
	points ?pts1)
?p2 (Path1 a ?b status ?sts2
	points ?pts2
	((some #{"OPEN"} [?sts1 ?sts2]) 
	 (path/F-points-equal (last ?pts1) (last ?pts2))))
=>
(if path/TRACE
  (path/F-display-points "Solution" (concat (butlast ?pts1) (reverse ?pts2))))
(asser Solution path (vec (concat (butlast ?pts1) (reverse ?pts2))))
(modify ?p1 status "CLOSED")
(modify ?p2 status "CLOSED"))

(p:Check: Path1 to Path0 -1
(Work status "CHECK")
?p (Path1 status "OPEN"
	a ?a 
	b ?b
	points ?pts)
=>
(retract ?p)
(asser Path0 status "OPEN"
	a ?a
	b ?b
	points ?pts))

