(ns vr.dashcli
(:require
  [clj-telnet.core :as tn])
(:import
  ru.igis.omtab.MapOb))
(def PORT 10470)
(def defTELNET (defonce TELNET nil))
(def NMEA nil)
(def STOP-TOKEN "AIVDM")
(def START-TOKEN "RMC")
(def BOAT-DATA nil)
(defn get-nmea-data []
  (try
  (when (nil? TELNET)
    (def TELNET (tn/get-telnet "localhost" PORT))
    (println :TELNET "connected" :PORT PORT))
  (def NMEA (tn/read-until TELNET STOP-TOKEN))
  (println (count NMEA))
  NMEA
  (catch Exception e
    (println :TELNET (.getMessage e) :PORT PORT)
    nil)))

(defn close-telnet []
  (when (some? TELNET)
  (tn/kill-telnet TELNET)
  (def TELNET nil)))

(defn round-speed [s]
  (let [s (* s 100)
       s (Math/round s)]
  (double (/ s 100))))

(defn parse-coord [c1 c2]
  (let [c (read-string c1)
      mf (- c (int c))
      dm (/ (int c) 100)
      d (int dm)
      m (int (* (- dm d) 100))
      m (+ m mf)
      d (if (or (= c2 "S") (= c2 "W")) (* d -1) d)]
  (MapOb/getDeg (str d " " m))))

(defn parse-nmea-data [data]
  (let [data (and data (rest (.split NMEA START-TOKEN)))]
  (if (not (empty? data))
    (let [[_ time sts lat1 lat2 lon1 lon2 spd crs date] (.split (first data) ",")]
      [time
       (parse-coord lat1 lat2)
       (parse-coord lon1 lon2)
       (round-speed (read-string spd))
       (read-string crs)
       date]))))

(defn get-boat-data []
  (def BOAT-DATA 
  (or (parse-nmea-data  (get-nmea-data)) (Thread/sleep 10000)
       (parse-nmea-data  (get-nmea-data)) (Thread/sleep 10000)
       (parse-nmea-data  (get-nmea-data)) (Thread/sleep 10000)
       (parse-nmea-data  (get-nmea-data))))                      
(close-telnet)
BOAT-DATA)

