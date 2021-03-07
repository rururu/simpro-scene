(ns czml.generator
(:import java.util.Calendar))
(defn sphericalDistance ^double [^double phi1 ^double lambda0 ^double phi ^double lambda]
  (let [pdiff (Math/sin (/ (- phi phi1) 2.0))
       ldiff (Math/sin (/ (- lambda lambda0) 2.0))
       rval (Math/sqrt (+ (* pdiff pdiff) (* (Math/cos phi1) (Math/cos phi) (* ldiff ldiff))))]
  (* 2.0 (Math/asin rval))))

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

(defn iso8601abs [mills]
  (let [cld (Calendar/getInstance)
       _ (.setTimeInMillis cld mills)
        yar (.get cld Calendar/YEAR )
        mon (inc (.get cld Calendar/MONTH))
        dat (.get cld Calendar/DATE)
        hor (.get cld Calendar/HOUR_OF_DAY)
        min (.get cld Calendar/MINUTE)
        sec (.get cld Calendar/SECOND)]
    (format "%04d-%02d-%02dT%02d:%02d:%02dZ" yar mon dat hor min sec)))

(defn delete [id]
  (str "[{\"id\":\"document\",\"version\":\"1.0\"},{\"id\":\"" id "\",\"delete\":true}]"))

(defn add-points
  ([pfx lalo-points height]
  (let [s (str "[{\"id\":\"document\",\"version\":\"1.0\"},"
             (apply 
               str 
               (map 
                 #(let [[iR iG iB iA] (nth %2 2)
                           rgba (str "[" iR "," iG "," iB "," iA "]")]
                     (str "{\"id\":\"" (str pfx %1) "\",\"position\":{\"cartographicDegrees\":[" (second %2) "," (first %2) "," height "]},\"point\":{\"color\":{\"rgba\":" rgba "},\"pixelSize\":" (nth %2 3) ",\"heightReference\":\"RELATIVE_TO_GROUND\"}},"))
                 (range (count lalo-points))  
                 lalo-points)))]
    (str (.substring s 0 (dec (count s))) "]")))
([pfx lalo-points height-ref size]
  (let [s (str "[{\"id\":\"document\",\"version\":\"1.0\"},"
             (apply 
               str 
               (map 
                 #(let [[iR iG iB iA] (nth %2 2)
                           rgba (str "[" iR "," iG "," iB "," iA "]")]
                     (str "{\"id\":\"" (str pfx %1) "\",\"position\":{\"cartographicDegrees\":[" (second %2) "," (first %2) "," (nth %2 3) "]},\"point\":{\"color\":{\"rgba\":" rgba "},\"pixelSize\":" size ",\"heightReference\":\"" height-ref "\"}},"))
                 (range (count lalo-points))  
                 lalo-points)))]
    (str (.substring s 0 (dec (count s))) "]")))
([pfx lalo-points height height-ref size]
  (let [s (str "[{\"id\":\"document\",\"version\":\"1.0\"},"
             (apply 
               str 
               (map 
                 #(let [[iR iG iB iA] (nth %2 2)
                           rgba (str "[" iR "," iG "," iB "," iA "]")]
                     (str "{\"id\":\"" (str pfx %1) "\",\"position\":{\"cartographicDegrees\":[" (second %2) "," (first %2) "," height "]},\"point\":{\"color\":{\"rgba\":" rgba "},\"pixelSize\":" size ",\"heightReference\":\"" height-ref "\"}},"))
                 (range (count lalo-points))  
                 lalo-points)))]
    (str (.substring s 0 (dec (count s))) "]")))
([pfx lalo-points height height-ref [iR iG iB iA] size]
  (let [rgba (str "[" iR "," iG "," iB "," iA "]")
         s (str "[{\"id\":\"document\",\"version\":\"1.0\"},"
              (apply 
                str 
                (map 
                  #(str "{\"id\":\"" (str pfx %1) "\",\"position\":{\"cartographicDegrees\":[" (second %2) "," (first %2) "," height "]},\"point\":{\"color\":{\"rgba\":" rgba "},\"pixelSize\":" size ",\"heightReference\":\"" height-ref "\"}},") 
                  (range (count lalo-points))  
                  lalo-points)))]
    (str (.substring s 0 (dec (count s))) "]"))))

(defn delete-points [pfx number]
  (let [s (str "[{\"id\":\"document\",\"version\":\"1.0\"},"
            (apply str (map #(str "{\"id\":\"" (str pfx %) "\",\"delete\":true},") (range number))))]
  (str (.substring s 0 (dec (count s))) "]")))

(defn add-image [id uri [w s e n] trans]
  (str "[{\"id\":\"document\",\"version\":\"1.0\"},{\"id\":\"" id "\",\"rectangle\":{\"coordinates\":{\"wsenDegrees\":[" w "," s "," e "," n "]},\"material\":{\"image\":{\"image\":{\"uri\":\"" uri "\"},\"color\":{\"rgba\":[255,255,255," (int (* trans 255)) "]}}}}}]"))

(defn lolah->slolah [lolahs knots func-spherical-distance]
  (loop [[[lo1 la1 h1][lo2 la2 h2] :as lst] lolahs elt 0 slolahs [[0 lo1 la1 h1]]]
  (if (some? h2)
    (let [rsec (Math/toRadians (/ knots 60 3600))
           dist (func-spherical-distance
                    (Math/toRadians la1)
                    (Math/toRadians lo1)
                    (Math/toRadians la2)
                    (Math/toRadians lo2))
           time (int (/ dist rsec))
           elt (+ elt time)]
      (recur (rest lst) elt (conj slolahs [elt lo2 la2 h2])))
    [slolahs elt])))

(defn add-point-flight [id lolah-points knots mils height-ref [iR iG iB iA] size func-spherical-distance]
  (let [[coord elt] (lolah->slolah lolah-points knots func-spherical-distance)
       coord (flatten coord)
       coord (interpose "," coord)
       coord (apply str coord)
       rgba (str "[" iR "," iG "," iB "," iA "]")
       epoch (iso8601abs mils)
       s (str "[{\"id\":\"document\",\"version\":\"1.0\"},"
                "{\"id\":\""
                id
                "\",\"position\":{\"cartographicDegrees\":[" 
                coord
                "],\"interpolationAlgorithm\":\"LAGRANGE\",\"interpolationDegree\":1,\"epoch\":\""
                epoch
                "\"},\"point\":{\"color\":{\"rgba\":" rgba "},\"pixelSize\":" size ",\"heightReference\":\"" height-ref "\"}}]")]
  [s elt]))

(defn point-move [id s1 s2 [[lo1 la1 h1] [lo2 la2 h2]] [[iR iG iB iA] size] doc?]
  (let [epo (iso8601abs (* s1 1000))
      epof (iso8601abs (* s2 1000))
      s (str
  "{\"id\":\""
    id 
  "\",\"availability\":\""
    epo "/" epof
  "\",\"position\":{\"cartographicDegrees\":[\""
    epo "\"," lo1 "," la1 ","  h1 ",\""
    epof "\"," lo2 "," la2 "," h2
  "]},\"point\":{\"color\":{\"rgba\":["
    iR "," iG "," iB "," iA
  "]},\"pixelSize\":"
    size
  "}}")]
  (if doc?
    (str "[{\"id\":\"document\",\"version\":\"1.0\"}," s "]")
    s)))

(defn poly-move [id name s1 s2 pts1 pts2 poly-view point-view]
  (let [[[lR lG lB lA] lW [fR fG fB fA]] poly-view
       point-view (or point-view [[0 0 0 0] 0])
       pns (for [i (range (count pts1))] (str id i))
       pts (map #(point-move %1 s1 s2  [%2 %3] point-view false) pns pts1 pts2)
       pts (apply str (interpose "," pts))
       refs (map #(str "\"" % "#position\"") pns)
       refs (apply str (interpose "," refs))
       epo (iso8601abs (* s1 1000))
       epof (iso8601abs (* s2 1000))
       poly (str
  "{\"id\":\""
    id
  "\",\"name\":\""
    name
  "\",\"availability\":\""
    epo "/" epof
  "\",\"polygon\":{\"positions\":{\"epoch\":\""
    epo
  "\",\"references\":["
    refs
  "]},\"perPositionHeight\":true,\"material\":{\"solidColor\":{\"color\":{\"rgba\": ["
    fR "," fG "," fB "," fA
  "]}}},\"outline\":true,\"outlineColor\":{\"rgba\":["
    lR "," lG "," lB "," lA
  "]},\"outlineWidth\":"
    lW
  "}}")
       doc "{\"id\":\"document\",\"version\":\"1.0\"}"]
  (str "[" doc "," pts "," poly "]")))

