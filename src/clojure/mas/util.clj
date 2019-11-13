(ns mas.util
(:use 
  protege.core)
(:import
  ru.igis.omtab.OpenMapTab
  ru.igis.omtab.OMT
  ru.igis.omtab.gui.RuMapMouseAdapter
  ru.igis.omtab.MapOb
  ru.igis.omtab.NavOb
  com.bbn.openmap.omGraphics.grid.OMGridData
  com.bbn.openmap.omGraphics.grid.OMGridData$Int
  com.bbn.openmap.omGraphics.grid.OMGridData$Double
  com.bbn.openmap.omGraphics.OMGrid
  com.bbn.openmap.omGraphics.OMRaster
  edu.stanford.smi.protege.ui.DisplayUtilities
  edu.stanford.smi.protege.model.Instance
  java.awt.Color
  java.util.Properties
  ru.igis.sim.FromNumberColorGenerator
  ru.igis.sim.Agents)
(:require  [incanter.core :as i]
  [incanter.charts :as c]
  [incanter.interpolation :as ii]
  [plot.3d :as p3d]))
(def defonceMAS (defonce MAS nil))
(def CONSOLE nil)
(def MAPBEAN nil)
(def PG1 nil)
(def COLGEN nil)
(def HM-DATA nil)
(def INTER nil)
(def HEATMAP nil)
(def MINH false)
(def WIN3D nil)
(defn set-onclick [fun]
  (let [pg0 (first (OMT/getPlaygrounds))
       rumma (proxy [RuMapMouseAdapter] []
                     (mouseLeftButtonClickedOn [mo llp runa]
                       (fun mo (seq llp))
                       (.manageGraphics pg0)
                       true))]
  (.setRuMapMouseAdapter pg0 rumma)))

(defn dms [x]
  (if (number? x)
  (MapOb/getDegMin x)
  (str (MapOb/getDegMin (first x))
        " "
        (MapOb/getDegMin (second x)))))

(defn az-course [az]
  (let [az (if (< az 0)
              (+ az (* Math/PI 2))
              az)
       crs (Math/toDegrees az)] 
  (int crs)))

(defn move-extend-region [pi w h mo [lat lon]]
  (if-let [p (OMT/getMapOb pi)]
  (OMT/removeMapOb p false))
(let [hd (/ h 60)
       mfi (Math/toRadians (- lat (/ hd 2)))
       wd (/ (/ w 60) (Math/cos mfi))
       nw [lat lon]
       ne [lat (+ lon wd)]
       se [(- lat hd) (+ lon wd)]
       sw[(- lat hd) lon]]
  (ssv pi "latitude" (dms lat))
  (ssv pi "longitude" (dms lon))
  (ssvs pi "points" [(dms nw)
                             (dms ne)
                             (dms se)
                             (dms sw)])
  (OMT/getOrAdd pi)))

(defn make-region [pi mo [lat lon]]
  (if-let [p (OMT/getMapOb pi)]
  (OMT/removeMapOb p false))
(let [pp (svs pi "points")]
  (when (empty? pp)
    (ssv pi "latitude" (dms lat))
    (ssv pi "longitude" (dms lon)))
  (ssvs pi "points"
    (concat pp [(dms [lat lon])]))
  (OMT/getOrAdd pi)))

(defn move-region [hm inst]
  (let [mp (into {} hm)
       w (mp "width1") 
       h (mp "height1")
       p (mp "poly")]
    (set-onclick (partial move-extend-region p w h))))

(defn create-route [hm inst]
  (let [mp (into {} hm)]
  (set-onclick (partial make-region (mp "poly")))))

(defn pnt-latlon [pnt]
  (let [[da ma do mo] (.split pnt " ")]
  [(MapOb/getDeg (str da " " ma))
   (MapOb/getDeg (str do " " mo))]))

(defn route-xx [pts [w s]]
  (let [lla (map pnt-latlon pts)
       oo (map second lla)
       oo (str (vec (map #(- % w) oo)))]
  (.substring oo 1 (dec (count oo)))))

(defn to-vec-str [lst]
  (let [aa (str (vec lst))]
  (.substring aa 1 (dec (count aa)))))

(defn points-cut-str [pts fun]
  (let [lla (map pnt-latlon pts)]
  (to-vec-str (map fun lla))))

(defn bbx [pi]
  (let [pts (svs pi "points")
       lla (map pnt-latlon pts)
       las (map first lla)
       los (map second lla)
       w (apply min los)
       s (apply min las)
       e (apply max los)
       n (apply max las)]
  [w s e n]))

(defn dimdeg
  ([pi]
  (let [[w s e n] (bbx pi)]
    (dimdeg w s e n)))
([w s e n]
  [(- e w) (- n s)]))

(defn forces-prop [inss attr]
  (to-vec-str (map #(sv % attr) inss)))

(defn forces-num-prop [inss attr]
  (let [lst (map #(count (svs % attr)) inss)]
  (if (seq lst)
    (to-vec-str lst)
    "0")))

(defn distrib-prop [ins]
  (let [pv (condp = (typ ins)
              "Равномерное1изм" ['U1 (sv ins "xmax") (sv ins "xmin")]
              "Равномерное2изм" ['U2 (sv ins "xmax") (sv ins "xmin") (sv ins "ymax") (sv ins "ymin")]
              "РавномерноеВРайоне" (cons 'UR (bbx (sv (sv ins "район") "poly")))
              "Нормальное1изм" ['N1 (sv ins "meanX") (sv ins "standardDeviationX")]
              "Нормальное2изм" (let [my  (sv ins "meanY")
                                                      kosy (Math/cos (Math/toRadians my))
                                                      sdx  (sv ins "standardDeviationX")
                                                      sdy  (sv ins "standardDeviationY")
                                                      sdy  (* kosy sdx)] 
                                                    ['N2 (sv ins "meanX") sdx my sdy])
              nil)]
  (if pv
    (to-vec-str pv))))

(defn set-routes-props [p prop1 prop2 inss]
  (dotimes [i (count inss)]
  (let [rte (nth (vec inss) i)
         rpo (sv rte "poly")
         rps (svs rpo "points")]
    (.setProperty p (str prop1 (inc i)) (points-cut-str rps first))
    (.setProperty p (str prop2 (inc i)) (points-cut-str rps second)))))

(defn set-map-center [w s e n]
  (let [lat (+ (/ (- n s) 2) s)
       lon (+ (/ (- e w) 2) w)
       mb (OpenMapTab/getMapBean)]
  (.setCenter mb lat lon)))

(defn open-mas [hm inst]
  (let [mp (into {} hm)
       run (mp "run-instance")
       are (mp "район")
       rts (mp "маршруты")
       frs (mp "силы_поиска")
       tgt (mp "цель")
       cln (mp "ячеек")
       agn (mp "агентов")
       pxn (mp "высота_окна")
       dis (mp "распределение")
       [w s e n] (bbx (sv are "poly"))
       p (Properties.)]
  (println pxn)
  (.setProperty p "cells" (str cln))
  (.setProperty p "south" (str s))
  (.setProperty p "west" (str w))
  (.setProperty p "width" (str (- e w)))
  (.setProperty p "height" (str (- n s)))
  (.setProperty p "aNumber" (str agn))
  (.setProperty p "rNumber" (str (count rts)))
  (.setProperty p "aSpeed" (str (sv tgt "speed")))
  (.setProperty p "eSpeed" (to-vec-str (svs tgt "e-speed")))
  (.setProperty p "suSpeed" (forces-prop frs "speed")) 
  (.setProperty p "suDist" (forces-prop frs "distance")) 
  (.setProperty p "suNames" (.replaceAll (forces-prop frs "title") "\"" ""))
  (.setProperty p "suNumbers" (forces-num-prop frs "mapob"))
  (.setProperty p "aDistrib" (distrib-prop dis))
  (.setProperty p "tTime" (str (sv tgt "t-time")))
  (.setProperty p "pixelsV" (str pxn))
  (set-routes-props p "routeLats" "routeLons" rts)
  (println :Properties)
  (println p)
  (ru.rules/run-engine run)
  (sim/start-sim)
  (def  MAS (ru.igis.sim.AgentsWithGUI. p))
  (def CONSOLE (sim.display.Console. MAS))
  (.setVisible CONSOLE true)
  (set-map-center w s e n)))

(defn connect-mas [hm inst]
  (def MAS ru.igis.sim.AgentsWithGUI/awg))

(defn create-grid [data typ s w disc]
  ;; typ = :i -> data = int[][]
;; typ = :d -> data = double[][]
(let [data (into-array data)
       gda (if (= typ :i)
               (OMGridData$Int. data)
               (OMGridData$Double. data))]
  (OMGrid. s w disc disc gda)))

(defn getMapBean []
  (or MAPBEAN
  (do(def MAPBEAN (OpenMapTab/getMapBean))
    MAPBEAN)))

(defn getPlayground1 []
  (or PG1
  (do (def PG1 (second (OMT/getPlaygrounds)))
    PG1)))

(defn colortable []
  (let [ct 
  [(.getRGB (Color. 255 255 255 200))
   (.getRGB (Color. 200 255 255 200))
   (.getRGB (Color. 155 255 255 200))

   (.getRGB (Color. 102 255 255 200))
   (.getRGB (Color. 120 230 255 200))
   (.getRGB (Color. 130 220 255 200))

   (.getRGB (Color. 153 204 255 200))
   (.getRGB (Color. 100 204 255 200))
   (.getRGB (Color.   53 204 255 200))

   (.getRGB (Color.     0 204 204 200))
   (.getRGB (Color.     0 204 164 200))
   (.getRGB (Color.     0 204 132 200))

   (.getRGB (Color.     0 204 102 200))
   (.getRGB (Color.   25 220   80 200))
   (.getRGB (Color.   38 230   64 200))

   (.getRGB (Color.   51 255    51 200))
   (.getRGB (Color. 151 255    33 200))
   (.getRGB (Color. 202 255    18 200))

   (.getRGB (Color. 255 255      0 200))
   (.getRGB (Color. 255 211      0 200))
   (.getRGB (Color. 255 155      0 200))

   (.getRGB (Color. 255 128      0 200))
   (.getRGB (Color. 255   87      0 200))
   (.getRGB (Color. 255   38      0 200))

   (.getRGB (Color. 255     0      0 200))
   (.getRGB (Color. 231     0     48 200))
   (.getRGB (Color. 219     0     86 200))

   (.getRGB (Color. 204     0  102 200))
   (.getRGB (Color. 204 100  102 200))
   (.getRGB (Color. 204 155  102 200))]]
  (into-array Integer/TYPE ct)))

(defn getColGen []
  (or COLGEN
  (let [cog (FromNumberColorGenerator.)]
    (.setColortable cog (colortable))
    (def COLGEN cog)
    COLGEN)))

(defn generate-grid [grid idx]
  (let [mb (getMapBean)
       cog (getColGen)
       pg1 (getPlayground1)
       prj (.getProjection mb)]
  (if (.generate grid prj)
    (let [omg (.generate cog grid prj)
           rec (.getReceiver pg1)
           lis (.getList rec)]
      (if (< idx (.size lis))
        (.remove lis (.get lis idx)))
      (.add lis idx omg)
      (.manageGraphics pg1)))))

(defn heatmap
  ([b alpha view]
  (let [ats (.getAgents mas.util/MAS)
         adh (.getAgentsDistroForHeatmap ats)
         vals (.get adh "adist")
         lons (.get adh "xx")
         lats  (.get adh "yy")
         rtag (.-realTaget ats)
         rtag (list (Math/toDegrees (.getPhi rtag)) (Math/toDegrees (.getLambda rtag)))
         sus (map #(list (Math/toDegrees (.getPhi %)) (Math/toDegrees (.getLambda %))) Agents/sus)
         sus (cons rtag sus)
         ;;rou (.-route ats)
         ;;rxs (map #(Math/toDegrees %) (.-lambdas rou))
         ;;rys (map #(Math/toDegrees %) (.-phis rou))
         ;;pol (map #(list %1 %2) rxs rys)
         inter (ii/interpolate-grid vals :bicubic :xs lons :ys lats)
         xmin (- (first lons) b) xmax (+ (last lons) b)
         ymin (- (first lats) b) ymax (+ (last lats) b)
         f1 (fn[x] (format "%.1f" x))
         hmap (-> (c/heat-map inter
                           xmin xmax
                           ymin ymax
                           :x-label (str (f1 xmin) " < долгота < " (f1 xmax))
                           :y-label (str (f1 ymin) " < широта < " (f1 ymax))
                           :z-label "плотность вероятности"
                           :include-zero? false)
                        (c/set-alpha alpha)
                        (c/add-points (map second sus) (map first sus)))]
                        ;;(c/add-polygon pol))]
    (when view
      (i/view hmap)
      (def INTER inter)
      (def HM-DATA adh)
      (def HEATMAP hmap))
    hmap))
([hm inst]
  (ru.rules/retract-instances [inst])
  (ru.rules/assert-instances [inst])))

(defn adistro-surface-model []
  (if  mas.util/MAS
  (let [ats (.getAgents mas.util/MAS)
         adh (.getAgentsDistroForHeatmap ats)
         z (.get adh "adist")
         xx (.get adh "xx")
         yy (.get adh "yy")
         inter (ii/interpolate-grid z :bicubic :xs xx :ys yy)
         mpr (p3d/mapper inter)
         dsm (p3d/default-surface-model)]
    (.setMapper dsm mpr)
    (.setXMin dsm (first xx))
    (.setXMax dsm (last xx))
    (.setYMin dsm (first yy))
    (.setYMax dsm (last yy))
    (.setDisplayXY dsm true)
    (.setDisplayZ dsm true)
    dsm)))

(defn plot3d [hm inst]
  (when-let [mod (adistro-surface-model)]
  (p3d/viewpoint3d)
  (p3d/plot mod "Агенты" "плотность вероятности" true 100 100 800 800)))

(defn poly-rect [poly]
  (if-let [lmk (.getLocationMarker poly)]
  (if-let [shp (.getShape lmk)]
    (if-let [r (.getBounds shp)]
      [(.getX r) (.getY r) (.getWidth r) (.getHeight r)]))))

(defn place-heatmap [hm [mo] idx aside x0 y0 w0 h0]
  (if-let [prt (poly-rect mo)]
  (let [[x y wid hig] (map int prt)
         W (if aside w0 (+ wid 154))
         H (if aside h0 (+ hig 30))
         X (if aside x0 (- x 40))
         Y (if aside y0 (+ y 5))
         bim (.createBufferedImage hm W H)
         omr (OMRaster. X Y bim)
         pg1 (getPlayground1)
         rec (.getReceiver pg1)
         lis (.getList rec)]
    (if (< idx (.size lis))
      (.remove lis (.get lis idx)))
    (.add lis idx omr)
    (.manageGraphics pg1))))

(defn plot-update [title config typ3d paint x0 y0 w0 h0]
  (if-let [mod (adistro-surface-model)]
  (when-let[mod (condp = typ3d
                     'SURFACE (do (.setSurfaceType mod true) mod)
                     'WIREFRAME (do (.setWireframeType mod true) mod)
                     'CONTOUR (do (.setContourType mod true) mod)
                     'DENSITY (do (.setDensityType mod true) mod)
                     'NO nil)]
    (condp = paint
      'HIDDEN (.setHiddenMode mod true)
      'COLOR (.setSpectrumMode mod true)
      'GRAYSCALE (.setGrayScaleMode mod true)
      'DUAL (.setDualShadeMode mod true)
      'FOG (.setFogMode mod true)
      (.setSpectrumMode mod true))
    (p3d/viewpoint3d)
    (if (nil? WIN3D)
      (def WIN3D (p3d/plot mod "Плотность вероятности" title false x0 y0 w0 h0))
      (do (.setContentPane WIN3D (p3d/panel3d mod title config))
        (.validate WIN3D)
        (.repaint WIN3D))))))

(defn switch3d [hm inst]
  (ru.rules/retract-instances [inst])
(def WIN3D nil)
(ru.rules/assert-instances [inst]))

(defn clear-pg1 []
  (let [pg1 (getPlayground1)
       rec (.getReceiver pg1)
       lis (.getList rec)]
  (.clear lis)
  (.manageGraphics pg1)))

(defn tow-off [mo]
  (let [inst (.getInstance mo)
       refs (.getReferences inst)
       flt (filter #(= "Tow" (.getName (.getDirectType (.getFrame %)))) refs)]
  (if (seq flt)
    (let [inst (.getFrame (first flt))
           refs (.getReferences inst)
           flt (filter #(= "NavOb" (.getName (.getDirectType (.getFrame %)))) refs)]
      (if (seq flt)
        (if-let [inst (.getFrame (first flt))]
          (if-let [mo0 (OMT/getMapOb inst)]
            (.removeTow mo0 mo))))))))

(defn trace-line
  ([pins moi]
  (ssvs pins "mapob" [moi])
  (ssvs pins "points" []))
([pins N moi]
  (if-let [mo (ru.igis.omtab.OMT/getMapOb moi)]
    (trace-line pins N (.getLatitude mo) (.getLongitude mo))))
([pins N lat lon]
  (let [pts (svs pins "points")
         pts (cons (str (MapOb/getDegMin lat)
                          " "
                          (MapOb/getDegMin lon))
                        pts)
         pts (if (> (count pts) N)
                 (butlast pts)
                 pts)] 
    (ssvs pins "points" pts)
    (OMT/removeMapOb pins false)
    (.hideLabel (OMT/getOrAdd pins)))))

(defn add-modriven
  ([name]
  (if-let [ags (.getAgents MAS)]
    (let [pg1 (getPlayground1)
           rec (.getReceiver pg1)
           lis (.getList rec)
           tgs (.getTargets lis)
           flt (filter #(and (instance? NavOb %) (= (.getName %) name)) tgs)]
      (if (seq flt)
        (.addMODriven ags (first flt))))))
([hm inst]
  (let [mp (into {} hm)
         rts (mp "маршруты")
         frs (mp "силы_поиска")
         frs (drop (count rts) frs)]
    (if-let [sfr (DisplayUtilities/pickInstanceFromCollection nil frs 0 "Управляемые силы")]
      (doseq [moi (svs sfr "mapob")]
        (let [mo (OMT/getOrAdd moi)]
          (tow-off mo)
          (OMT/controlObject moi)
          (mas.util/add-modriven (.getName mo))
          (if (ru.rules/confirm (str "Показывать след " (.getName mo)))
            (if-let [pins (fifos "След" "object" moi)] 
              (do (trace-line pins moi)
                (ru.rules/assert-instances [pins]))
              (println "No instance of class След")))))))))

(defn standard-dev3 [?mos ?mx ?my ?sdx]
  (loop [mos ?mos i 0]
  (when-let [moi (first mos)]
    (if (> i 0)
      (ssv moi "radius" (float (* ?sdx i))))
    (let [mo (OMT/getOrAdd moi)]
      (.setLocation mo (double ?my) (double ?mx))
      (recur (rest mos) (inc i))))))

