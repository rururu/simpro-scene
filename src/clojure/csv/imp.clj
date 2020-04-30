(ns csv.imp
(:use protege.core)
(:require
  [clojure.java.io :as io]
  [clojure-csv.core :as csv]
  [semantic-csv.core :as sc :refer :all])
(:import 
  javax.swing.JFileChooser
  edu.stanford.smi.protege.model.ValueType
  edu.stanford.smi.protege.model.Instance))

(def DATA (volatile! []))
(def CLS :Class)
(def LAB :Label)
(def TIT :Title)
(def IMAP (volatile! {}))
(defn read-csv [pth]
  (sc/slurp-csv pth))

(defn file-chooser [s]
  (let [fc (JFileChooser. s)]
  (.setMultiSelectionEnabled fc true)
  (if-let [rv (.showOpenDialog fc nil)]
    (map #(.getPath %) (.getSelectedFiles fc)))))

(defn read-files [hm inst]
  (let [pths (file-chooser (.getPath (.getProjectDirectoryFile *prj*)))]
  (when (seq pths)
    (doseq [pth pths]
      (let [csv (read-csv pth)
             csv (filter #(or (not (empty? (LAB %)))
	              (not (empty? (TIT %)))) csv)]
        (println (str "In file: " pth " " (count csv) " objects"))
        (vswap! DATA concat csv))))))

(defn create-bare-instances
  ([]
  (vreset! IMAP {})
  (doseq [m @DATA]
    (if-let [[clz nam ins] (create-bare-instances m)]
      (vswap! IMAP assoc-in [clz nam] ins))))
([m]
  (let [clz (CLS m)]
    (if-let [ins (crin clz)]
      (if-let [lab (get m LAB)]
        (do (ssv ins "label" lab) [clz lab ins])
        (if-let [tit (get m TIT)]
          (do (ssv ins "title" tit) [clz tit ins])))))))

(defn find-value [slt val]
  (let [vv (for [[clz inss] (seq @IMAP)]
 	(get inss val))
       vv (filter some? vv)]
  (if (> (count vv) 1)
    (println (str "Ambiguity for slot " (.getName slt) " value: " val " "
	(vec (map #(or (sv % "label") (sv % "title")) vv)))))
  (first vv)))

(defn trans-val [slt val]
  (cond 
  (integer? val) val
  (number? val) (float val)
  (instance? Instance val) val
  (not (empty? val))
    (condp = (.getValueType slt)
      ValueType/FLOAT (float (read-string val))
      ValueType/INTEGER (int (read-string val))
      ValueType/INSTANCE (find-value slt val)
      val)
  true val))

(defn trans-vals [slt val]
  (if (not (empty? val))
  (vec (map #(trans-val slt %) (read-string val)))))

(defn fill-instances
  ([]
  (doseq [m @DATA]
    (fill-instances (CLS m) (or (LAB m) (TIT m)) m)))
([clz nam m]
  (when-let [ins (get-in @IMAP [clz nam])]
    (println (str "Instance: " nam))
    (let [typ (.getDirectType ins)
           sls (.getTemplateSlots typ)
           snm (into {} (map #(vector (.toLowerCase (name %)) %) (keys m)))]
      (doseq [sl sls]
        (if-let [val (m (snm (.getName sl)))]
          (let [sn (.getName sl)
                 mv (.getAllowsMultipleValues sl)]
            (if (and (not= sn "label") (not= sn "title"))
              (if-let [val (if mv (trans-vals sl val) (trans-val sl val))]
                (try
                  (if mv (ssvs ins sn val) (ssv ins sn val))
                  (catch Exception e
	(println (str "Wrong value: " val " for slot: " sn 
		" for obj: " (or (sv ins "label") (sv ins "title")))) )))) )))) )))

(defn crea-inst [hm inst]
  (create-bare-instances)
(fill-instances)
(vreset! DATA {}))

