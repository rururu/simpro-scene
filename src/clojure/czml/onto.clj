(ns czml.onto
(:use protege.core)
(:require
   [clojure.data.json :as json])
(:import java.util.Calendar
  edu.stanford.smi.protege.model.Instance
  edu.stanford.smi.protege.model.ValueType))
(def DECLARE (declare packet-map))
(def CIRC-BND [4000.0 40000.0])
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

(defn iso8601dmy [dmy]
  (let [[d m y] (.split dmy "\\.")
       cld (Calendar/getInstance)
       _ (.set cld (read-string y) (dec (read-string m)) (read-string d) 0 0 0)
       yar (.get cld Calendar/YEAR )
       mon (inc (.get cld Calendar/MONTH))
       dat (.get cld Calendar/DATE)
       hor (.get cld Calendar/HOUR_OF_DAY)
       min (.get cld Calendar/MINUTE)
       sec (.get cld Calendar/SECOND)]
  (format "%04d-%02d-%02dT%02d:%02d:%02dZ" yar mon dat hor min sec)))

(defn colgen-rgb [v]
  (letfn [(up [v]
             (if (== v 0)
               0
               (int (/ (* v 255) 0.333))))
           (dn [v]
             (if (== v 0.333)
               0
               (int (/ (* (- 0.333 v) 255) 0.333))))
           (red-yel [v]
             [255 (up v) 0])
           (yel-gre [v]
             [(dn v) 255 0])
           (gre-blu [v]
             [0 (dn v) (up v)])] 
  (cond
     (<= v 0.333) (red-yel v)
     (<= v 0.666) (yel-gre (- v 0.333))
     (<= v 1.000) (gre-blu (- v 0.666)))))

(defn find-packet [id]
  (when-let [p (fifos "Packet" "id" id)]
  (.show *prj* p)
  p))

(defn keyword-val [pki slt]
  (if (.getAllowsMultipleValues slt)
  (if (= (.getValueType slt) ValueType/STRING)
    (read-string (str "[" (apply str (interpose "," (.getOwnSlotValues pki slt))) "]"))
    (vec (map (fn [x] (packet-map x )) (.getOwnSlotValues pki slt))))
  (packet-map (.getOwnSlotValue pki slt))))

(defn packet-map [p]
  ;; packet to map
;; p - instance
(if (instance? Instance p)
  (let [typ (.getDirectType p)
         sls (.getTemplateSlots typ)
         mp (apply hash-map 
                 (mapcat
                   #(let [v (keyword-val p %)]
                        (if (if (seqable? v) 
                              (not (empty? v))
                              (some? v))
                          (list (keyword (.getName %)) v)))
                   sls))]
    mp)
  p))

(defn document-map [doci]
  ;; document instance to map
(let [mp (packet-map doci)]
  (vec (cons (dissoc mp :packets) (mp :packets)))))

(defn document-json [doci]
  (json/write-str (document-map doci)))

(defn norm [value [minval maxval]]
  (double (/ (- value minval) (- maxval minval))))

(defn inorm [value [minval maxval]]
  (+ minval (* value (- maxval minval))))

(defn date-value-colors [dates values bounds alpha]
  (vec
(map
    #(let [d (iso8601dmy %1)
              nv (norm %2 bounds)
              [r g b] (colgen-rgb nv)]
          (str "\"" d "\", " r ", " g ", " b ", " alpha))
    dates
    values)))

(defn date-value-circle-pki [id [from to] [lon lat] value1 bounds1 dates2 values2 bounds2 alpha]
  (let [fre (iso8601dmy from)
       toe (iso8601dmy to)
       ava (str fre "/" toe)
       crd [(str "\"" fre "\", " lon ", " lat ", " 0)
             (str "\"" toe "\", " lon ", " lat ", " 0)]
       sma (str(inorm (norm value1 bounds1) CIRC-BND))
       coi (crin "Color")
       sci (crin "SolidColor")
       mti (crin "Material")
       eli (crin "Ellipse")
       poi (crin "Position")
       pki (crin "Packet")]
  (ssvs coi "rgba" (date-value-colors dates2 values2 bounds2 alpha))
  (ssv sci "color" coi)
  (ssv mti "solidColor" sci) 
  (ssv eli "semiMinorAxis" sma)
  (ssv eli "semiMajorAxis" sma)
  (ssv eli "heightReference" "CLAMP_TO_GROUND")
  (ssv eli "material" mti)
  (ssvs poi "cartographicDegrees" crd)
  (ssv pki "id" id)
  (ssv pki "availability" ava)
  (ssv pki "position" poi)
  (ssv pki "ellipse" eli)
  pki))

