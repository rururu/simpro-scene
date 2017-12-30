(ns rr
(:use 
  protege.core))

(defn dif-lon [tgt]
  (let [ext (vec (.getExtents tgt))]
  (- (last ext) (second ext))))

(defn num-pts [tgs]
  (loop [i 1 ts (vec tgs) m [0 0]]
  (if (seq ts) 
    (let [t (first ts)
           [im vm] m
           c (if (instance? com.bbn.openmap.omGraphics.OMPoly t)
                (dif-lon t)
                t)]
      (ctpl [i c])
      (recur (inc i) (rest ts) (if (and (number? c) (> c vm))
		[i c] 
		m)))
    m)))

(defn tg-info [n tgs]
  (let [tg (nth tgs (dec n))
       lla (.getLatLonArray tg)]
  [(dif-lon tg) 
   (Math/toDegrees (first lla)) 
   (Math/toDegrees (second lla)) 
   (Math/toDegrees (last (butlast lla)))
   (Math/toDegrees (last lla))]))

(defn omp-flt [tgs]
  (filter #(instance? com.bbn.openmap.omGraphics.OMPoly %) tgs))

