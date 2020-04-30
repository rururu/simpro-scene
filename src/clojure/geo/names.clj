(ns geo.names
(:use 
  protege.core
  clojure.xml)
(:import java.net.URL)
(:gen-class :load-impl-ns false))

(def ^:dynamic *username* "liikalanjoki")
(def ^:dynamic *elev30-url* "http://api.geonames.org/astergdemXML")
(defn call-geonames-elev30 [lat lng]
  ;; Get elevation (step 30m) from Geonames Web Service
;; Arguments can be vectors (length <= 20 on free server)
(let [url (if (vector? lat)
	(let [lats (apply str (interpose "," lat))
	       lngs (apply str (interpose "," lng))]
	   (str *elev30-url* "?lats=" lats "&lngs=" lngs))
	(str *elev30-url* "?lat=" lat "&lng=" lng))
       url (str url "&type=XML&username=" *username*)]
 (try
  (if-let [xml (clojure.xml/parse url)]
    (if (vector? lat)
        (map #(first (:content %)) (filter #(some #{:astergdem} (vals %)) (:content xml)))
        (first (:content (first (:content xml)) )) ))
  (catch Exception e
   (ctpl e)
   ()))))

