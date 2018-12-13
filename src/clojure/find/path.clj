(ns find.path
(:require [a]))

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
  [[(first lla) (second lla)] [(last (butlast lla)) (last lla)]]))

(defn find-near [omps [cfi cla] rad]
  (let [[w s e n] [(- cla rad) (- cfi rad) (+ cla rad) (+ cfi rad)]]
  (filter #(let [[[ffi fla] [tfi tla]] (from-to %)]
               (or (and (< w fla e) (< s ffi n))
                    (and (< w tla e) (< s tfi n)))) omps)))

(defn rumb [[fi1 la1] [fi2 la2]]
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

(defn dir-near [[cfi cla] rad [[ffi fla] & r]]
  (let [[w s e n] [(- cla rad) (- cfi rad) (+ cla rad) (+ cfi rad)]]
  (if (and (< w fla e) (< s ffi n))
    :FROM
    :TO)))

(defn e00-id [omp]
  (let [tst (.toString (.getAttribute omp "APP_OBJECT"))
       a1 (.split tst " ")
       a2 (.split (get a1 1) ":")]
  (read-string (get a2 1))))

(defn find-ways [omps from rad func-id]
  (letfn [(omp-ft-rmb-dir-id [x] 
            (let [ft (from-to x)
                   rmb (apply rumb ft)
                   dir (dir-near from rad ft)
                   id (func-id x)]
              [x ft rmb dir id]))]
  (map omp-ft-rmb-dir-id (find-near omps from rad))))

(defn backward-dir [dir]
  (if (> (count dir) 1)
  [(first (backward-dir [(first dir)]))
   (first (backward-dir [(second dir)]))]
  [(get {:N :S
           :S :N
           :W :E
           :E :W}  (first dir))]))

(defn broad-dirs-map [dir]
  (if (= (count dir) 1)
  (filter (fn [x] (some #{(first dir)} x)) DIRS)
  (list [(first dir)] dir [(second dir)])))

(defn narrow-dirs-map [dir]
  [dir])

(defn search-step [omps from rad dir func-dir func-id]
  (if-let [ways (seq (find-ways omps from rad func-id))]
  0))

