(ns czml.onto
(:use protege.core)
(:require
   [clojure.data.json :as json])
(:import java.util.Calendar
  edu.stanford.smi.protege.model.Instance
  edu.stanford.smi.protege.model.ValueType))
(def DECLARE (declare packet-map))
(def CIRC-BND [4000.0 40000.0])
(def TABLE [[24.939 60.168 "Helsinki" 632 ["11.12.2021" 10] ["12.12.2021" 35 ] ["13.12.2021" 64] ["14.12.2021" 82]]
 [22.266 60.450 "Turku" 330 ["11.12.2021" 114] ["12.12.2021" 77] ["13.12.2021" 54 ] ["14.12.2021" 0]]
 [23.770 61.493 "Tampere" 227 ["11.12.2021" 45] ["12.12.2021" 28] ["13.12.2021" 77] ["14.12.2021" 11]]
 [24.656 60.205 "Espoo" 272 ["11.12.2021" 83] ["12.12.2021" 77] ["13.12.2021" 60] ["14.12.2021" 52]]
 [21.806 61.428 "Pori" 84 ["11.12.2021" 12] ["12.12.2021" 24] ["13.12.2021" 18] ["14.12.2021" 23]]
 [24.462 60.991 "Hämeenlinna" 68 ["11.12.2021" 73] ["12.12.2021" 53] ["13.12.2021" 94] ["14.12.2021" 121]]
 [26.705 60.868 "Kouvola" 82 ["11.12.2021" 12] ["12.12.2021" 35] ["13.12.2021" 10] ["14.12.2021" 28]]
 [28.189 61.055 "Lappeenranta" 72 ["11.12.2021" 56] ["12.12.2021" 78] ["13.12.2021" 97] ["14.12.2021" 104]]
 [26.942 60.463 "Kotka" 52 ["11.12.2021" 0] ["12.12.2021" 12] ["13.12.2021" 23] ["14.12.2021" 0]]
 [27.196 63.560 "Iisalmi" 21 ["11.12.2021" 56] ["12.12.2021" 65] ["13.12.2021" 75] ["14.12.2021" 63]]
 [30.028 63.317 "Lieksa" 11 ["11.12.2021" 111] ["12.12.2021" 107] ["13.12.2021" 92] ["14.12.2021" 81]]
 [21.615 63.095 "Vaasa" 67 ["11.12.2021" 0] ["12.12.2021" 120] ["13.12.2021" 60] ["14.12.2021" 0]]
 [27.272 61.688 "Mikkeli" 53 ["11.12.2021" 120] ["12.12.2021" 60] ["13.12.2021" 0] ["14.12.2021" 120]]
 [22.850 62.787 "Seinäjoki" 64 ["11.12.2021" 120] ["12.12.2021" 110] ["13.12.2021" 100] ["14.12.2021" 90]]
 [27.674 62.892 "Kuopio" 117 ["11.12.2021" 0] ["12.12.2021" 10] ["13.12.2021" 20] ["14.12.2021" 30]]
 [29.757 62.597 "Joensuu" 76 ["11.12.2021" 0] ["12.12.2021" 120] ["13.12.2021" 0] ["14.12.2021" 120]]])
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

(defn before [dmy1 dmy2]
  (let [[d1 m1 y1] (.split dmy1 "\\.")
       cld1 (Calendar/getInstance)
       [d2 m2 y2] (.split dmy2 "\\.")
       cld2 (Calendar/getInstance)]
  (.set cld1 (read-string y1) (dec (read-string m1)) (read-string d1) 0 0 0)
  (.set cld2 (read-string y2) (dec (read-string m2)) (read-string d2) 0 0 0)
  (.before cld1 cld2)))

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
  (if (not= (.getName slt) "title")
  (if (.getAllowsMultipleValues slt)
    (if (= (.getValueType slt) ValueType/STRING)
      (read-string (str "[" (apply str (interpose "," (.getOwnSlotValues pki slt))) "]"))
      (vec (map (fn [x] (packet-map x )) (.getOwnSlotValues pki slt))))
    (packet-map (.getOwnSlotValue pki slt)))))

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

(defn mk-circle-pki [id [from to] [lon lat] value1 bounds1 dates2 values2 bounds2 alpha]
  (let [fre (iso8601dmy from)
       toe (iso8601dmy to)
       ava (str fre "/" toe)
       crd [(str "\"" fre "\", " lon ", " lat ", " 0)
             (str "\"" toe "\", " lon ", " lat ", " 0)]
       sma (str (inorm (norm value1 bounds1) CIRC-BND))
       coi (foc "Color" "title" id)
       sci (foc "SolidColor" "title" id)
       mti (foc "Material" "title" id)
       eli (foc "Ellipse" "title" id)
       poi (foc "Position" "title" id)
       pki (foc "Packet" "title" id)]
  (ssv coi "title" id)
  (ssvs coi "rgba" (date-value-colors dates2 values2 bounds2 alpha))
  (ssv sci "title" id)
  (ssv sci "color" coi)
  (ssv mti "title" id)
  (ssv mti "solidColor" sci) 
  (ssv eli "title" id)
  (ssv eli "semiMinorAxis" sma)
  (ssv eli "semiMajorAxis" sma)
  (ssv eli "heightReference" "CLAMP_TO_GROUND")
  (ssv eli "material" mti)
  (ssv poi "title" id)
  (ssvs poi "cartographicDegrees" crd)
  (ssv pki "id" id)
  (ssv pki "availability" ava)
  (ssv pki "position" poi)
  (ssv pki "ellipse" eli)
  pki))

(defn mk-label-pki [id [from to] [lon lat] value1 bounds1 text scale [r g b alpha]]
  (let [fre (iso8601dmy from)
       toe (iso8601dmy to)
       ava (str fre "/" toe)
       sma (inorm (norm value1 bounds1) CIRC-BND)
       rad (/ sma 1852 60.) ;; degrees
       lat (+ lat rad) ;; label above circle
       crd [(str "\"" fre "\", " lon ", " lat ", " 0)
             (str "\"" toe "\", " lon ", " lat ", " 0)]
       rgba [(str "\"" fre "\", " r ", " g ", " b ", " alpha)
               (str "\"" toe "\", " r ", " g ", " b ", " alpha)]
       coi (foc "Color" "title" id)
       lab (foc "Label" "title" id)
       poi (foc "Position" "title" id)
       pki (foc "Packet" "title" id)]
  (ssv coi "title" id)
  (ssvs coi "rgba" rgba)
  (ssv lab "title" id)
  (ssv lab "text" text)
  (ssv lab "fillColor" coi)
  (ssv lab "heightReference" "CLAMP_TO_GROUND")
  (ssv lab "scale" (float scale))
  (ssv poi "title" id)
  (ssvs poi "cartographicDegrees" crd)
  (ssv pki "id" id)
  (ssv pki "availability" ava)
  (ssv pki "position" poi)
  (ssv pki "label" lab)
  pki))

(defn mk-row [name from-to lon-lat label value1 bounds1 bounds2 data-values2]
  (let [dates2 (map first data-values2)
      values2 (map second data-values2)
      value3 (* value1 0.75)
      value4 (* value1 0.5)
      value5 (* value1 0.25)
      rwi (foc "Row" "title" name)
      pks [(mk-label-pki (str name "-lab") from-to lon-lat value1 bounds1 label 0.5 [255 255 0 255])
             (mk-circle-pki (str name "-circ1") from-to lon-lat value1 bounds1 dates2 values2 bounds2 100)
             (mk-circle-pki (str name "-circ2") from-to lon-lat value3 bounds1 dates2 values2 bounds2 150)
             (mk-circle-pki (str name "-circ3") from-to lon-lat value4 bounds1 dates2 values2 bounds2 200)
             (mk-circle-pki (str name "-circ4") from-to lon-lat value5 bounds1 dates2 values2 bounds2 255)]]
  (ssvs rwi "packets" pks)
  rwi))

(defn calc-bounds1 [table]
  (let [nn (for [[lon lat lab v1 & dv2s] table] v1)]
  [(apply min nn) (apply max nn)]))

(defn calc-bounds2 [table]
  (let [nn (apply concat (for [dv (for [[lon lat lab v1 & dv2s] table] dv2s)] (map second dv)))]
  [(apply min nn) (apply max nn)]))

(defn calc-from-to [table]
  (let [dd (apply concat (for [dv (for [[lon lat lab v1 & dv2s] table] dv2s)] (map first dv)))
        sd (sort before dd)]
  [(first sd) (last sd)]))

(defn mk-table [name table]
  (let [bounds1 (calc-bounds1 table)
       bounds2 (calc-bounds2 table)
       from-to (calc-from-to table)]
  (loop [i 1 tab table rows []]
    (if (empty? tab)
      (let [tbi (foc "Table" "title" name)]
        (ssvs tbi "rows" rows)
        tbi)
      (let [[lon lat lab v1 & dv2s] (first tab)
              row (mk-row (str name i) from-to [lon lat] lab v1 bounds1 bounds2 dv2s)]
        (recur (inc i) (rest tab) (conj rows row)))))))

(defn mk-table-doc [name table]
  (let [dci (foc "Document" "name" name)
      tab (mk-table name table)
      rws (svs tab "rows")
      pks (map #(svs % "packets") rws)
      pks (apply concat pks)]
  (ssv dci "id" "document")
  (ssv dci "version" "1.0")
  (ssvs dci "packets" pks)
  dci))

