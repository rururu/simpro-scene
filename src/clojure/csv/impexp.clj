(ns csv.impexp
(:use protege.core)
(:require
  [clojure-csv.core :as csv]
  [semantic-csv.core :as sc :refer :all])
(:import 
  edu.stanford.smi.protege.model.ValueType))
(defn read-csv [pth]
  (sc/slurp-csv pth))

(defn write-csv [pth data]
  (sc/spit-csv pth data))

(defn predicate [pre val]
  (if (empty? pre)
  (boolean val)
  (eval (read-string (str "(" pre " \"" val "\")")))))

(defn csv-load
  ([hm inst]
  (let [mp (into {} hm)
         clz (mp "class")
         cols (mp "csv-columns")
         file (mp "csv-file")
         pre (mp "predicate")
         cln (.getName clz)
         cmp (reduce 
                   #(assoc %1 (keyword (sv %2 "csv-column"))
                                       (.getName (sv %2 "slot")))
                   {} 
                   cols)]
    (csv-load file cln cmp pre)))
([file cln cmp pre]
  (let [data (read-csv file)]
    (doseq [d data]
      (let [inst (crin cln)]
        (doseq [[col val] d]
          (let [sln (cmp col)
                 slt (slt sln)
                 v (read-string val)
                 svl (condp = (.getValueType slt)
                        ValueType/FLOAT (float v)
                        ValueType/INTEGER (int v)
                        ValueType/BOOLEAN (predicate pre v)
                        val)]
            (ssv inst sln svl))))))))

(defn csv-save
  ([hm inst]
  (let [mp (into {} hm)
         clz (mp "class")
         cols (mp "csv-columns")
         file (mp "csv-file")
         cln (.getName clz)
         cmp (reduce 
                   #(assoc %1 (keyword (sv %2 "csv-column"))
                                       (.getName (sv %2 "slot")))
                   {} 
                   cols)]
    (csv-save file cln cmp)))
([file cln cmp]
  (let [inss (cls-instances cln)
         data (for [i inss] 
                   (reduce-kv
                     #(assoc %1 (keyword %2)
                                         (str (sv i %3)))
                     {} 
                     cmp))]
    (write-csv file data))))

