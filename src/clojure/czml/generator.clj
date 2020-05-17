(ns czml.generator
)
(defn delete [id]
  (str "[{\"id\":\"document\",\"version\":\"1.0\"},{\"id\":\"" id "\",\"delete\":true}]"))

(defn add-points
  ([lalo-points height]
  (let [s (str "[{\"id\":\"document\",\"version\":\"1.0\"},"
             (apply 
               str 
               (map 
                 #(let [[iR iG iB iA] (nth %2 2)
                           rgba (str "[" iR "," iG "," iB "," iA "]")]
                     (str "{\"id\":\"" %1 "\",\"position\":{\"cartographicDegrees\":[" (second %2) "," (first %2) "," height "]},\"point\":{\"color\":{\"rgba\":" rgba "},\"pixelSize\":" (nth %2 3) ",\"heightReference\":\"RELATIVE_TO_GROUND\"}},"))
                 (range (count lalo-points))  
                 lalo-points)))]
    (str (.substring s 0 (dec (count s))) "]")))
([lalo-points height-ref size]
  (let [s (str "[{\"id\":\"document\",\"version\":\"1.0\"},"
             (apply 
               str 
               (map 
                 #(let [[iR iG iB iA] (nth %2 2)
                           rgba (str "[" iR "," iG "," iB "," iA "]")]
                     (str "{\"id\":\"" %1 "\",\"position\":{\"cartographicDegrees\":[" (second %2) "," (first %2) "," (nth %2 3) "]},\"point\":{\"color\":{\"rgba\":" rgba "},\"pixelSize\":" size ",\"heightReference\":\"" height-ref "\"}},"))
                 (range (count lalo-points))  
                 lalo-points)))]
    (str (.substring s 0 (dec (count s))) "]")))([lalo-points height height-ref size]
  (let [s (str "[{\"id\":\"document\",\"version\":\"1.0\"},"
             (apply 
               str 
               (map 
                 #(let [[iR iG iB iA] (nth %2 2)
                           rgba (str "[" iR "," iG "," iB "," iA "]")]
                     (str "{\"id\":\"" %1 "\",\"position\":{\"cartographicDegrees\":[" (second %2) "," (first %2) "," height "]},\"point\":{\"color\":{\"rgba\":" rgba "},\"pixelSize\":" size ",\"heightReference\":\"" height-ref "\"}},"))
                 (range (count lalo-points))  
                 lalo-points)))]
    (str (.substring s 0 (dec (count s))) "]")))
([lalo-points height height-ref [iR iG iB iA] size]
  (let [rgba (str "[" iR "," iG "," iB "," iA "]")
         s (str "[{\"id\":\"document\",\"version\":\"1.0\"},"
              (apply 
                str 
                (map 
                  #(str "{\"id\":\"" %1 "\",\"position\":{\"cartographicDegrees\":[" (second %2) "," (first %2) "," height "]},\"point\":{\"color\":{\"rgba\":" rgba "},\"pixelSize\":" size ",\"heightReference\":\"" height-ref "\"}},") 
                  (range (count lalo-points))  
                  lalo-points)))]
    (str (.substring s 0 (dec (count s))) "]"))))

(defn delete-points [number]
  (let [s (str "[{\"id\":\"document\",\"version\":\"1.0\"},"
            (apply str (map #(str "{\"id\":\"" % "\",\"delete\":true},") (range number))))]
  (str (.substring s 0 (dec (count s))) "]")))

(defn add-image [id uri [w s e n] trans]
  (str "[{\"id\":\"document\",\"version\":\"1.0\"},{\"id\":\"" id "\",\"rectangle\":{\"coordinates\":{\"wsenDegrees\":[" w "," s "," e "," n "]},\"material\":{\"image\":{\"image\":{\"uri\":\"" uri "\"},\"color\":{\"rgba\":[255,255,255," (int (* trans 255)) "]}}}}}]"))

