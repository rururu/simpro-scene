(ns cesium.core
(:require
    [ring.util.response :as r]
    [async.proc :as asp])
(:import java.util.Calendar))

(def CZ-CHAN (asp/mk-chan))
(defn send-event [typ dat]
  ;; (println [:CZ-EVT typ dat])
(asp/pump-in CZ-CHAN [typ (.trim dat)]))

(defn events []
  (let [evt-hr (fn [[typ dat]]
                   (str "event: " typ "\ndata: " dat "\n\n"))
       ee (deref (future (asp/pump-out CZ-CHAN)))
       resp (if (seq ee)
                 (apply str (map evt-hr ee))
                 "")]
  (-> (r/response resp)
         (r/header "Access-Control-Allow-Origin" "*")
         (r/header "Content-Type" "text/event-stream;charset=utf-8"))))

(defn iso8601curt []
  (let [cld (Calendar/getInstance)
       yar (.get cld Calendar/YEAR )
       mon (inc (.get cld Calendar/MONTH))
       dat (.get cld Calendar/DATE)
       hor (.get cld Calendar/HOUR_OF_DAY)
       min (.get cld Calendar/MINUTE)
       sec (.get cld Calendar/SECOND)]
    (format "%04d-%02d-%02dT%02d:%02d:%02dZ" yar mon dat hor min sec)))

(defn iso8601futt [sec]
  (let [cld (Calendar/getInstance)
       mil (.getTimeInMillis cld)
       _ (.setTimeInMillis cld (+ mil (* sec 1000)))
        yar (.get cld Calendar/YEAR )
        mon (inc (.get cld Calendar/MONTH))
        dat (.get cld Calendar/DATE)
        hor (.get cld Calendar/HOUR_OF_DAY)
        min (.get cld Calendar/MINUTE)
        sec (.get cld Calendar/SECOND)]
    (format "%04d-%02d-%02dT%02d:%02d:%02dZ" yar mon dat hor min sec)))

(defn doc
  ([]
  (str "{\"id\":\"document\",\"version\":\"1.0\",\"clock\":{\"currentTime\":\"" (iso8601curt) "\"}}"))
([iso]
  (str "{\"id\":\"document\",\"version\":\"1.0\",\"clock\":{\"currentTime\":\"" iso "\"}}")))

(defn send-doc
  ([]
  (send-doc (doc)))
([doc]
  (send-event "czml" doc)
  (def DOC-SENT true))
([_ fut]
  (send-event "czml" (doc fut))
  (def DOC-SENT true)))

(defn location [label scale img-url lat lon alt span-sec]
  (let [p (str "{\"id\":\""
               label
               "\",\"availability\":\""
               (iso8601curt) "/" (iso8601futt span-sec)
               "\",\"label\":{\"scale\":" 
               scale
               " ,\"pixelOffset\":{\"cartesian2\":[8, -24]},\"text\":\""
               label
               "\"},\"billboard\":{\"scale\":"
               scale
               ",\"image\":\""
               img-url
               "\"},\"position\":{\"cartographicDegrees\":["
               lon
               ", "
               lat
               ", "
               alt
               "]}}")]
  (if (not DOC-SENT)
    (send-doc))
  (send-event "czml" p)))

(defn boat-leg [label lab-scl img-url bil-scl [tim1 lon1 lat1 alt1] [tim2 lon2 lat2 alt2]]
  (let [p (str "{\"id\":\""
               label
               "\",\"label\":{\"scale\":"
               lab-scl
               ",\"pixelOffset\":{\"cartesian2\":[8, -8]},\"text\":\""
               label
               "\"},\"billboard\":{\"scale\":"
               bil-scl
               ",\"heightReference\":\"RELATIVE_TO_GROUND\",\"verticalOrigin\":\"BOTTOM\",\"image\":\""
               img-url
               "\"},\"position\":{\"cartographicDegrees\":[\""
               tim1
               "\", "
               lon1
               ", "
               lat1
               ", "
               alt1
               ",\""
               tim2
               "\", "
               lon2
               ", "
               lat2
               ", "
               alt2
               "]}}")]
  (if (not DOC-SENT)
    (send-doc))
  (send-event "czml" p)))

(defn point-out [txt [lat lon] dist max-dist]
  (let [min-scl 0.25
       scl (+ min-scl (* (- 1 min-scl) (- 1 (/ dist max-dist))))]
  (location txt scl "img/arrdn.png" lat lon 100 40)))

(defn new-doc []
  (def DOC-SENT false))

