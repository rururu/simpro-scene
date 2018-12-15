(ns find.path
(:use protege.core)
(:require [a])
(:import
  ru.igis.omtab.OMT
  ru.igis.omtab.MapOb))

(def DPI8 (/ Math/PI 8))
(def MPI8 (- (/ Math/PI 8)))
(def DIRS [[:N]
 [:N :W]
 [:N :E]
 [:S]
 [:S :W]
 [:S :E]
 [:W]
 [:E]])
(defn from-to [omp]
  (let [lla (.getLatLonArray omp)]
  [(first lla) (second lla) (last (butlast lla)) (last lla)]))

(defn find-near [omps [cfi cla] rad]
  (let [[w s e n] [(- cla rad) (- cfi rad) (+ cla rad) (+ cfi rad)]]
  (filter #(let [[ffi fla tfi tla] (from-to %)]
               (or (and (< w fla e) (< s ffi n))
                    (and (< w tla e) (< s tfi n)))) omps)))

(defn rumb [fi1 la1 fi2 la2]
  (let [dPI8 (/ Math/PI 8)
       mPI8 (- dPI8)
       ang (Math/atan2 (- fi1 fi2) (- la1 la2))]
  (if (>= ang 0)
    (cond 
      (< ang DPI8) [:W]
      (< ang (* DPI8 3)) [:S :W]
      (< ang (* DPI8 5)) [:S]
      (< ang (* DPI8 7)) [:S :E]
      true [:E])
    (cond 
      (> ang MPI8) [:W]
      (> ang (* MPI8 3)) [:N :W]
      (> ang (* MPI8 5)) [:N]
      (> ang (* MPI8 7)) [:N :E]
      true [:E]))))

(defn dir-near [[cfi cla] rad [ffi fla & r]]
  (let [[w s e n] [(- cla rad) (- cfi rad) (+ cla rad) (+ cfi rad)]]
  (if (and (< w fla e) (< s ffi n))
    :FROM
    :TO)))

(defn e00-id [omp]
  (let [tst (.toString (.getAttribute omp "APP_OBJECT"))
       a1 (.split tst " ")
       a2 (.split (get a1 1) ":")]
  (get a2 1)))

(defn find-ways [omps from rad func-id]
  (letfn [(omp-ft-rmb-dir-id [x] 
            (let [ft (from-to x)
                   rmb (apply rumb ft)
                   dir (dir-near from rad ft)
                   id (func-id x)]
              [ft rmb dir id]))]
  (map omp-ft-rmb-dir-id (find-near omps from rad))))

(defn backward-dir [dir]
  (if (> (count dir) 1)
  [(first (backward-dir [(first dir)]))
   (first (backward-dir [(second dir)]))]
  [(get {:N :S
           :S :N
           :W :E
           :E :W}  (first dir))]))

(defn broad-dirs [dir]
  (if (= (count dir) 1)
  (filter (fn [x] (some #{(first dir)} x)) DIRS)
  (list [(first dir)] dir [(second dir)])))

(defn narrow-dirs [dir]
  [dir])

(defn search-step [omps from rad to func-awd-dirs func-id]
  (letfn [(only-allowed [awd dir from-or-to]
	(let [dir (if (= from-or-to :FROM)
	              dir
	              (backward-dir dir))]
	  (some #{dir} awd)))]
  (if-let [ways (seq (find-ways omps from rad func-id))]
    (let [dir (apply rumb (concat from to))
           awd (func-awd-dirs dir)]
      (filter #(only-allowed awd (nth % 1) (nth % 2)) ways)))))

(defn create-pathways [ways parent]
  (for [[ft rmb dir id] ways]
  (let [ins (foc "Pathway" "id" id)]
    (ssvs ins "from-to" (map float ft))
    (ssv ins "direction" (str dir))
    (ssv ins "rumb" (str rmb))
    (ssv ins "parent" parent)
    ins)))

(defn create-polys [pways color]
  (for [pway pways]
  (let [ins (foc "OMTPoly" "label" (sv pway "id"))
         [ffi fla tfi tla] (vec (svs pway "from-to"))
         flat (MapOb/getDegMin (Math/toDegrees ffi))
         flon (MapOb/getDegMin (Math/toDegrees fla))
         tlat (MapOb/getDegMin (Math/toDegrees tfi))
         tlon (MapOb/getDegMin (Math/toDegrees tla))]
    (ssv ins "latitude" flat)
    (ssv ins "longitude" flon)
    (ssv ins "lineColor" color)
    (ssv ins "line" (fifos "Line" "label" "Line2"))
    (ssvs ins "points" [(str flat " " flon) (str tlat " " tlon)])
    (if (nil?  (sv pway "poly"))
      (ssv pway "poly" ins))
    ins)))

(defn display-mobs [mobs]
  (doseq [mob mobs]
  (OMT/getOrAdd mob)))

