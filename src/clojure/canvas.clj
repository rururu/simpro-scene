(ns canvas
(:import 
  (java.awt Color Dimension)
  (javax.swing JPanel JFrame)))

(def PANEL nil)
(def FIGURES (volatile! {}))
(defn remove-figure [id]
  (vswap! FIGURES dissoc id)
(.repaint PANEL))

(defn clear-figures
  ([]
  (vreset! FIGURES {})
  (.repaint PANEL))
([prefix]
  (doseq [[k v] @FIGURES]
    (if (.startsWith k prefix)
      (remove-figure k)))))

(defn redraw-figure [id func]
  ;; (redraw-figure :f1 (fn [g] (.setColor g Color/RED) (.fillOval g 200 200 100 160)))
(vswap! FIGURES assoc id func)
(.repaint PANEL))

(defn draw-picture [g width height]
  (.clearRect g 0 0 width height)
(doseq [[id func] (seq @FIGURES)]
  (func g)))

(defn canvas-panel [width height]
  (proxy [JPanel] []
  (paintComponent [g]
    (proxy-super paintComponent g)
    (draw-picture g width height))
  (getPreferredSize []
    (Dimension. width height))))

(defn canvas-frame [title width height]
  (def PANEL (canvas-panel width height))
(doto (JFrame. title)
  (.add PANEL)
  (.pack)
  (.setBackground java.awt.Color/WHITE)
  (.setVisible true)
  (.setDefaultCloseOperation JFrame/DISPOSE_ON_CLOSE)))

