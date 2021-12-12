(ns data.point
(:use protege.core)
(:require
  [cesium.server :as cs]
  [czml.onto :as czo]))
(def CZML "[
{
\"id\":\"document\",
\"name\":\"CZMLCircle-TimeDynamic\",
\"version\":\"1.0\"
},
{
\"id\":\"Circle1\",
\"availability\":\"2012-08-04T16:00:00Z/2012-08-04T16:05:00Z\",
\"position\":{
\"epoch\":\"2012-08-04T16:00:00Z\",
\"cartographicDegrees\":[
0,
25,
60.2,
0,
300,
25,
61.2,
0
]
},
\"ellipse\":{
\"semiMinorAxis\":4000.0,
\"semiMajorAxis\":4000.0,
\"heightReference\":\"CLAMP_TO_GROUND\",
\"material\":{
\"solidColor\":{
\"color\":{
\"rgba\":[\"2012-08-04T16:00:00Z\",255,0,20,128,
\"2012-08-04T16:01:00Z\",255,255,0,128,
\"2012-08-04T16:02:00Z\",0,255,0,128,
\"2012-08-04T16:03:00Z\",0,0,255,128,
\"2012-08-04T16:04:00Z\",0,255,0,128,
\"2012-08-04T16:05:00Z\",255,255,0,128,
\"2012-08-04T16:06:00Z\",255,0,0,128
]
}
}
}
}
},
{
\"id\":\"Circle2\",
\"availability\":\"2012-08-04T16:00:00Z/2012-08-04T16:05:00Z\",
\"position\":{
\"epoch\":\"2012-08-04T16:00:00Z\",
\"cartographicDegrees\":[
0,
25,
60.2,
0,
300,
25,
61.2,
0
]
},
\"ellipse\":{
\"semiMinorAxis\":3800.0,
\"semiMajorAxis\":3800.0,
\"heightReference\":\"CLAMP_TO_GROUND\",
\"material\":{
\"solidColor\":{
\"color\":{
\"rgba\":[\"2012-08-04T16:00:00Z\",255,0,20,255,
\"2012-08-04T16:01:00Z\",255,255,0,255,
\"2012-08-04T16:02:00Z\",0,255,0,255,
\"2012-08-04T16:03:00Z\",0,0,255,255,
\"2012-08-04T16:04:00Z\",0,255,0,255,
\"2012-08-04T16:05:00Z\",255,255,0,255,
\"2012-08-04T16:06:00Z\",255,0,0,255
]
}
}
}
}
}
]")
(defn test []
  (cs/send-czml CZML))

