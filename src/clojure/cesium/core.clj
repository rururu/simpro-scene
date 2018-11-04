(ns cesium.core
(:require
    [ring.util.response :as r]
    [async.proc :as asp]
    [clojure.data.json :as json])
(:import java.util.Calendar))

(def defo-CZ-CHAN (defonce CZ-CHAN (asp/mk-chan)))
(def DOC-SENT false)
(def BASE-URL "")
(def IMG-PATH "img/")
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
  (json/write-str {:id "document" :version "1.0"}))
([iso]
  (json/write-str {:id "document" :version "1.0" :clock {:currentTime iso}})))

(defn send-doc
  ([]
  (send-doc (doc)))
([doc]
  (send-event "czml" doc)
  (def DOC-SENT true))
([_ iso]
  (send-event "czml" (doc iso))
  (def DOC-SENT true)))

(defn send-doc-curt []
  (send-doc (doc (iso8601curt))))

(defn location [label scale img-url lat lon alt span-sec]
  (let [p {:id label
           :availability (str (iso8601curt) "/" (iso8601futt span-sec))
           :label {:scale scale
                     :pixelOffset {:cartesian2 [8, -24]}
                     :text label}
           :billboard {:scale scale
                            :image img-url}
           :position {:cartographicDegrees [lon lat alt]}}]
  (if (not DOC-SENT)
    (send-doc-curt))
  (send-event "czml" (json/write-str p))))

(defn boat-leg [label lab-scl lab-off img-url bil-scl [tim1 lon1 lat1 alt1] [tim2 lon2 lat2 alt2]]
  (let [p {:id label
           :label {:scale lab-scl
                     :pixelOffset {:cartesian2 lab-off}
                     :text label}
           :billboard {:scale bil-scl
                            :heightReference "RELATIVE_TO_GROUND"
                            :verticalOrigin "BOTTOM"
                            :image img-url}
           :position {:cartographicDegrees [tim1 lon1 lat1 alt1 tim2 lon2 lat2 alt2]}}]
  (if (not DOC-SENT)
    (send-doc-curt))
  (send-event "czml" (json/write-str p))))

(defn point-out [txt [lat lon] dist max-dist]
  (let [min-scl 0.25
       scl (+ min-scl (* (- 1 min-scl) (- 1 (/ dist max-dist))))]
  (location txt scl "img/arrdn.png" lat lon 100 40)))

(defn new-doc []
  (def DOC-SENT false))

(defn base-url [url]
  (def BASE-URL url))

(defn dec16 [hex]
  (map (fn [[x y]] (Integer/parseInt (str x y) 16)) (partition 2 hex)))

(defn dome [label lab-scl lab-off [x y z] lin-color transp [tim1 lon1 lat1 alt1] [tim2 lon2 lat2 alt2]]
  (let [[a r g b] (dec16 lin-color)
       p {:id label
           :label {:scale lab-scl
                     :pixelOffset {:cartesian2 lab-off}
                     :text label}
           :ellipsoid {:show  true
                           :radii {:cartesian [x y z]}
                           :material {:grid {:color {:rgba [r g b a]}
                                                    :lineCount {:cartesian2 [10, 10]}
                                                    :cellAlpha transp}}}
           :position {:cartographicDegrees [tim1 lon1 lat1 alt1 tim2 lon2 lat2 alt2]}}]
  (if (not DOC-SENT)
    (send-doc-curt))
  (send-event "czml" (json/write-str p))))

(defn navob-leg [no lab-scl lab-off bil-scl intl-sec]
  (let [lab (.getName no)
       lat1 (.getLatitude no)
       lon1 (.getLongitude no)
       alt1 (.getAltitude no)
       crs (.getCourse no)
       spd (.getSpeed no)
       vsd (.getVerticalSpeed no)
       dis (double (/ (* spd intl-sec) 3600))
       [lat2 lon2] (seq (.position no (double crs) dis))
       alt2 (+ alt1 (* vsd intl-sec))
       tim1 (iso8601curt)
       tim2 (iso8601futt intl-sec)
       bil (or (.getDescription no) "no.png")
       bil (str BASE-URL IMG-PATH bil)]
  (boat-leg lab lab-scl lab-off bil bil-scl [tim1 lon1 lat1 alt1] [tim2 lon2 lat2 alt2])))

