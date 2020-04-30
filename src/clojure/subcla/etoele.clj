(ns subcla.etoele
(:gen-class
  :name com.bbn.openmap.layer.etopo.ETOPOEleLayer
  :extends com.bbn.openmap.layer.etopo.ETOPOLayer
  :exposes {dataBuffer {:get getDataBuffer}
                  bufferWidth {:get getBufferWidth}
                  bufferHeight {:get getBufferHeight}}
  :post-init pinit))

(def THIS nil)
(def SCX nil)
(def SCY nil)
(def BUFWID nil)
(defn -pinit [this]
  (def THIS this)
(println :THIS this))

(defn elevation [[lat lon]]
  (let [bwd (or BUFWID (do (def BUFWID (.getBufferWidth THIS)) BUFWID))
       scy (or SCY (do (def SCY (float (/ (.getBufferHeight THIS) 180.0))) SCY))
       scx (or SCX (do (def SCX (float (/ bwd 360.0))) SCX))
       lat_idx (int (* (- 90.0 lat) scy))
       lon_idx (int (* lon scx))
       ofs (+ lon_idx (* lat_idx bwd))]
  (aget (.getDataBuffer THIS) ofs)))

