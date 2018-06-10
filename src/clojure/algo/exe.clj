(ns algo.exe
(:use protege.core)
(:require
  [rete.core :as rete])
(:import
  edu.stanford.smi.protege.model.Instance))

(def do-next nil)
(def destruct nil)
(def TRACE false)
(def DEBUG false)
(defn set-global [key val]
  (.setClientInformation *kb* key val))

(defn get-global [key]
  (.getClientInformation *kb* key))

(defn uncomment [src]
  (rete.core/slurp-with-comments (java.io.StringReader. src)))

(defn trans-obs [obs]
  (if (= (count obs) 1)
  (first obs)
  (vec obs)))

(defn destruct [lst]
  (mapcat #(if (symbol? %) [%] (destruct %)) lst))

(defn var-val-map [bnd]
  (let [p2 (partition 2 bnd)
      vars (destruct (map first p2))
      nams (map name vars)]
  (zipmap nams vars)))

(defn to-bnd [id]
  (if-let [pmap (get-global id)]
  (reduce #(concat %1 [(symbol %2) `(get (get-global ~id) ~%2)]) [] (keys pmap))))

(defn trace [bool]
  (def TRACE bool))

(defn debug [bool]
  (def DEBUG bool))

(defn do-trace [inst id]
  (when TRACE
  (println :id id :binding (get-global id))
  (println (typ inst) (sv inst "title"))))

(defn do-input [inp id]
  (if-let [pmap (get-global id)]
  (let [code (sv inp "code")
         vmap (reduce-kv #(assoc %1 (name %2) %3) 
	{} 
	(read-string (str "{" (uncomment  code) "}")))
         _ (if DEBUG (println :vmap vmap))
         omap (reduce #(assoc %1 (sv %2 "variable") (trans-obs (svs %2 "objects")))
	{}
	(svs inp "object-rows"))
         _ (if DEBUG (println :omap omap))
         vvm (merge vmap omap pmap)]
    (if DEBUG (println :vvm vvm))
    (set-global id vvm)
    (do-next (sv inp "next") id))))

(defn do-code [pord id]
  (if-let [bnd1 (to-bnd id)]
  (let [bnd2 (read-string (str "[" (uncomment  (sv pord "code")) "]"))
         bnd3 (vec (concat bnd1 bnd2))
         vvm1 (var-val-map bnd3)
         expr `(let ~bnd3 ~vvm1)
         _ (if DEBUG (println :expr expr))
         vvm2  (try (eval expr) (catch Exception e (println e) nil))]
    (if DEBUG (println :vvm2 vvm2))
    (if vvm2 
      (set-global id vvm2))
    vvm2)))

(defn do-process [proc id]
  (if (do-code proc id)
  (do-next (sv proc "next") id)))

(defn do-variant [vrt vrts id]
  (if (<= 1 vrt (count vrts))
  (do-next (nth vrts (dec vrt)) id)))

(defn do-decision [dec id]
  (let [vvm (do-code dec id)]
  (do-variant (vvm "variant") 
	(vec (svs dec "variants")) 
	id)))

(defn do-algorithm [algo pmap]
  (let [id (name (gensym "algo"))]
  (set-global id pmap)
  (get-global (do-next (sv algo "begin") id))))

(defn do-preproc [prep id]
  (if-let [pmap (get-global id)]
  (if-let [pmap2 (do-algorithm (sv prep "algorithm") pmap)]
    (set-global id (merge pmap pmap2))))
(do-next (sv prep "next") id))

(defn wait-concurrent-pmap [futs]
  (apply merge (map get-global (map deref futs))))

(defn do-concurrent [conc id]
  (loop [curs (svs conc "currents") futs []]
  (if (seq curs)
    (recur (rest curs) 
              (conj futs 
	(future (let [id2 (name (gensym id))]
	             (set-global id2 (get-global id))
	             (do-next (first curs) id2)))))
    (do
      (set-global id (wait-concurrent-pmap futs))
      (do-next (sv (sv conc "wait") "next") id)))))

(defn do-next [inst id]
  (when (some? inst)
  (do-trace inst id)
  (condp = (typ inst)
    "Process" (do-process inst id)
    "AlgoDecision" (do-decision inst id)
    "PredefinedProcess" (do-preproc inst id)
    "Input" (do-input inst id)
    "Concurrent" (do-concurrent inst id)
    "AlgoWait" id
    (do (println (str "Unknown type: " typ)) nil))
  id))

(defn start-algorithm [hm inst]
  (let [mp (into {} hm)]
  (trace (is? (mp "trace")))
  (debug (is? (mp "debug")))
  (future (do-algorithm inst {}))))

