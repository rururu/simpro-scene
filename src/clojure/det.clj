(ns det
(:import
  ru.igis.omtab.OMT
  ru.igis.omtab.NavOb))
(defn detected-zone-det [tgt types areas probs]
  (if (instance? NavOb tgt)
  (let [typ (.getType tgt)]
    (loop [tps types ars areas prs probs]
      (if (seq tps)
        (if (= (first tps) typ)
          (if-let [ara (OMT/getMapOb (first ars))]
            (if (and (.contains ara tgt)
                     (<= (rand) (first prs)))
              true
              (recur (rest tps) (rest ars) (rest prs)))
            (recur (rest tps) (rest ars) (rest prs)))
          (recur (rest tps) (rest ars) (rest prs)))
        false)))))

