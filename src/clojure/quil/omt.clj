(ns quil.omt
(:use protege.core)
(:require 
  [quil.core :as q]
  [quil.middleware :as m])
(:import
  com.bbn.openmap.image.SunJPEGFormatter
  ru.igis.omtab.OpenMapTab
  java.io.FileOutputStream))
(def BG-PATH "data/CurrentMap.jpeg")
(def SIZE [1200 800])
(def LATLON [89 0])
(defn save-current-map []
  (let [fmt (SunJPEGFormatter.)
       mb (OpenMapTab/getMapBean)
       cnt (.getCenter mb)
       prj (.getProjection mb)
       wid (dec (.getWidth prj))
       hei (dec (.getHeight prj))
       bts (.getImageFromMapBean fmt mb wid hei)
       fil (FileOutputStream. BG-PATH)]
  (.write fil bts)
  (.close fil)
  (println [wid hei])
  [wid hei prj]))

(defn forward [prj [lat lon]]
  (let [p2d (.forward prj (double lat) (double lon))]
  [(.getX p2d) (.getY p2d)]))

(defn setup []
  (let [[wid hei prj] (save-current-map)]
  {:proj prj
    :latlon [0 0]
    :image (q/load-image BG-PATH)}))

(defn update [state]
  (assoc state :latlon LATLON))

(defn draw [state]
  (let [img (:image state)
       pnt (:latlon state)
       [x y] (forward (:proj state) pnt)]
  (if (q/loaded? img)
    (q/image img 0 0))
  (q/stroke-weight 4)
  (q/stroke 255 0 0)
  (q/point x y)))

(defn run []
  (q/defsketch omt
   :title "OMT"
   :size SIZE
   :setup setup
   :update update
   :draw draw
   :middleware [m/fun-mode]))

