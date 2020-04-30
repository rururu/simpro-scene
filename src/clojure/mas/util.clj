(ns mas.util
(:use 
  protege.core)
(:import
  ru.igis.omtab.OpenMapTab
  ru.igis.omtab.OMT
  ru.igis.omtab.gui.RuMapMouseAdapter
  ru.igis.omtab.MapOb
  ru.igis.omtab.NavOb
  ru.oogis.kml.Base64
  com.bbn.openmap.omGraphics.grid.OMGridData
  com.bbn.openmap.omGraphics.grid.OMGridData$Int
  com.bbn.openmap.omGraphics.grid.OMGridData$Double
  com.bbn.openmap.omGraphics.OMGrid
  com.bbn.openmap.omGraphics.OMRaster
  com.bbn.openmap.omGraphics.OMPoint
  Acme.JPM.Encoders.GifEncoder
  edu.stanford.smi.protege.ui.DisplayUtilities
  edu.stanford.smi.protege.model.Instance
  java.awt.Color
  java.util.Properties
  ru.igis.sim.FromNumberColorGenerator
  ru.igis.sim.Agents)
(:require  [incanter.core :as i]
  [incanter.charts :as c]
  [incanter.interpolation :as ii]
  [plot.3d :as p3d]
  [async.proc :as asp]
  [cesium.core :as cs]))
(def defonceMAS (defonce MAS nil))
(def CONSOLE nil)
(def MAPBEAN nil)
(def PG1 nil)
(def COLGEN nil)
(def HM-DATA nil)
(def INTER nil)
(def HEATMAP nil)
(def MINH false)
(def MODRIVEN (volatile! {}))
(def D-WIDTH 1200)
(def CS-DISTAT (volatile! "START"))
(def OM-DISTAT (volatile! "START"))
(def SEND-HMCZ-N 1)
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

(defn rs-speed [rs]
  (* (Math/toDegrees rs) 60 3600))

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

(defn sval-list [inss slt]
  (to-vec-str (map #(sv % slt) inss)))

(defn sval-num [inss slt]
  (let [lst (map #(count (svs % slt)) inss)]
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

(defn initial-assert [tgt are rts frs]
  (ru.rules/assert-instances (vec (concat [tgt] [are] rts frs))))

(defn distrib-course [ins]
  (let [pv (condp = (typ ins)
              "НормальноеКурса" ['N1 (sv ins "meanC") (sv ins "standardDeviationC")]
              "РавномерноеКурса" ['U1 (sv ins "cmin") (sv ins "cmax")]
              nil)]
  (if pv
    (to-vec-str pv))))

(defn distrib-speed [ins]
  (let [pv (condp = (typ ins)
              "НормальноеСкорости" ['N1 (sv ins "meanS") (sv ins "standardDeviationS")]
              "РавномерноеСкорости" ['U1 (sv ins "smin") (sv ins "smax")]
              nil)]
  (if pv
    (to-vec-str pv))))

(defn points-rad [poli]
  (letfn [(philam [pnt]
             (let [[n1 n2 n3 n4] (.split pnt " ")
                     lat (MapOb/getDeg (str n1 " " n2)) 
                     lon (MapOb/getDeg (str n3 " " n4))]
               [(Math/toRadians lat) (Math/toRadians lon)]))]
  (println :POLI poli)
  (if poli
    (flatten (map philam (svs poli "points"))))))

(defn params [prs]
  [(map #(sv % "сила") prs)
 (map #(sv % "цель") prs)
 (map #(sv (sv % "сила") "маршрут") prs)
 (map #(sv % "скорость_поиска") prs)
 (map #(sv % "дистанция_обнаружения") prs)
 (map #(sv % "скорость_уклонения") prs)
 (map #(sv % "дистанция_уклонения") prs)])

(defn open-mas
  ([hm inst]
  (let [mp (into {} hm)
         run (mp "run-instance")
         are (mp "район")
         tgt (mp "цель")
         [frs tgs rts sss dds ess tds] (params (selection mp "силы_на_маршрутах"))
         cln (mp "ячеек")
         agn (mp "агентов")
         dis (mp "распределение")
         bnd (mp "граница")
         [w s e n] (bbx (sv are "poly"))]
    (open-mas inst run are tgt frs rts sss dds ess tds cln agn dis bnd [w s e n])))
([mod run are tgt frs rts sss dds ess tds cln agn dis bnd [w s e n]]
  (let [p (Properties.)]
    (.setProperty p "cells" (str cln))
    (.setProperty p "south" (str s))
    (.setProperty p "west" (str w))
    (.setProperty p "width" (str (- e w)))
    (.setProperty p "height" (str (- n s)))
    (.setProperty p "aNumber" (str agn))
    (.setProperty p "rNumber" (str (count rts)))
    (.setProperty p "eSpeed" (to-vec-str ess))
    (.setProperty p "suSpeed" (to-vec-str sss)) 
    (.setProperty p "suDist" (to-vec-str dds)) 
    (.setProperty p "tDist" (to-vec-str tds)) 
    (.setProperty p "suNames" (.replaceAll (sval-list frs "title") "\"" ""))
    (.setProperty p "suNumbers" (sval-num frs "mapob"))
    (.setProperty p "aDistrib" (distrib-prop dis))
    (.setProperty p "dDistrib" (distrib-course (sv tgt "course-distro")))
    (.setProperty p "sDistrib" (distrib-speed (sv tgt "speed-distro")))
    (.setProperty p "boundary" (to-vec-str (points-rad bnd)))
    (.setProperty p "tTime" (str (sv tgt "t-time")))
    (.setProperty p "dWidth" (str D-WIDTH))
    (set-routes-props p "routeLats" "routeLons" rts)
    (println :Properties)
    (doseq [pi p]
      (println pi))
    (ru.rules/run-engine run)
    (initial-assert tgt are rts frs)
    (sim/start-sim)
    (def  MAS (ru.igis.sim.AgentsWithGUI. p))
    (def CONSOLE (sim.display.Console. MAS))
    (.setVisible CONSOLE true)
    (set-map-center w s e n))))

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

(defn heatmap [b alpha view]
  (let [adh (Agents/getAgentsDistroForHeatmap)
       vals (.get adh "adist")
       lons (.get adh "xx")
       lats  (.get adh "yy")
       rtag (Agents/realTaget)
       rtag (list (Math/toDegrees (.getPhi rtag)) (Math/toDegrees (.getLambda rtag)))
       sus (map #(list (Math/toDegrees (.getPhi %)) (Math/toDegrees (.getLambda %))) Agents/sus)
       sus (cons rtag sus)
       ;;rou (.-route ats)
       ;;rxs (map #(Math/toDegrees %) (.-lambdas rou))
       ;;rys (map #(Math/toDegrees %) (.-phis rou))
       ;;pol (map #(list %1 %2) rxs rys)
       inter (ii/interpolate-grid vals :bicubic :xs lons :ys lats)
       xmin (- (first lons) b)
       xmax (+ (last lons) b)
       ymin (- (first lats) b)
       ymax (+ (last lats) b)
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
  (def HM-DATA adh)
  (when view
    (i/view hmap)
    (def INTER inter)
    (def HEATMAP hmap))
  hmap))

(defn adistro-surface-model []
  (if mas.util/MAS
  (let [adh (Agents/getAgentsDistroForHeatmap)
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

(defn plot-update [title config typ3d paint x0 y0 w0 h0 frame]
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
    (if (instance? javax.swing.JFrame frame)
      (do (.setContentPane frame (p3d/panel3d mod title config))
        (.validate frame)
        (.repaint frame)
        frame)
      (p3d/plot mod "Плотность вероятности" title false x0 y0 w0 h0)))))

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

(defn standard-dev3 [mos dist]
  (let [mx (sv dist "meanX")
       my (sv dist "meanY")
       sdx (sv dist "standardDeviationX")]
  (loop [ms mos i 0]
    (when-let [moi (first ms)]
      (if (> i 0)
        (ssv moi "radius" (float (* sdx i))))
      (let [mo (OMT/getOrAdd moi)]
        (.setLocation mo (double my) (double mx))
        (recur (rest ms) (inc i)))))))

(defn add-controlled
  ([hm inst]
  (let [mp (into {} hm)]
    (doseq [prw (selection mp "управляемые_силы")]
      (add-controlled 
        (sv prw "сила") 
        (sv prw "скорость_поиска") 
        (sv prw "дистанция_обнаружения")
        (sv prw "скорость_уклонения")
        (sv prw "дистанция_уклонения"))
      (wint.igis/check-no-add (svs (sv prw "сила") "mapob")))))
([for ss dd es td]
  (if mas.util/MAS
    (when-let [ats (.getAgents mas.util/MAS)]
      (loop [mois (svs for "mapob") trs (svs for "следы")]
        (when (seq mois)
          (when-let [mo (OMT/getOrAdd (first mois))]
            (println :УПЕ (.getName mo))
            (if (not (@MODRIVEN mo))
              (vswap! MODRIVEN assoc (first mois) (.addMODriven ats mo es td dd)))
            (if-let [tr (first trs)]
              (ru.rules/assert-instances [tr])))
          (recur (rest mois) (rest trs))))))))

(defn remove-controlled
  ([hm inst]
  (let [mp (into {} hm)]
    (doseq [prw (selection mp "управляемые_силы")]
      (remove-controlled (sv prw "сила")))))
([for]
  (if mas.util/MAS
    (when-let [ats (.getAgents mas.util/MAS)]
      (loop [mois (svs for "mapob")]
        (when (seq mois)
          (when-let [mod (@MODRIVEN (first mois))]
            (.removeMODriven ats mod)
            (vswap! MODRIVEN dissoc (first mois)))
          (recur (rest mois))))))))

(defn find-param-row [tgt for]
  (let [tbl (first (cls-instances "Таблица параметров"))
        rows (svs tbl "ряд_параметров")
        rows (filter #(= (sv % "сила") for) rows)
        rows (filter #(= (sv % "цель") tgt) rows)]
  (if (seq rows)
    [(sv (first rows) "N")
     (sv (first rows) "сила")
     (sv (first rows) "цель")
     (sv (first rows) "скорость_поиска")
     (sv (first rows) "дистанция_обнаружения")
     (sv (first rows) "скорость_уклонения")
     (sv (first rows) "дистанция_уклонения")]
    (do (ru.rules/display 
            (str "Строка не найдена для цели " 
              (sv tgt "title")
              " и силы " 
              (sv for "title"))) nil))))

(defn a-display-czm-clear []
  (cs/delete-points (count (Agents/targets)))
(cs/delete-points (count (Agents/searchUnits)))
(cs/delete-points (count (Agents/moDrivens))))

(defn a-display-czm
  ([hm inst]
  (let [mp (into {} hm)]
    (a-display-czm 
      (mp "display-TO") 
      [(mp "height1") (mp "height-reference")]
      [[(read-string (mp "t-color"))
        (read-string (mp "su-color"))
        (read-string (mp "md-color"))]
       [(mp "t-size") (mp "su-size") (mp "md-size")]])))
([timeout [height height-ref] [colors sizes]]
  (if mas.util/MAS
    (if (not= @CS-DISTAT "RUN")
      (asp/start-process CS-DISTAT
        #(a-display-czm height height-ref colors sizes)
        timeout
        #(a-display-czm-clear))
      (asp/stop-process CS-DISTAT))))     
([height height-ref [t-clr su-clr md-clr] [t-siz su-siz md-siz]]
  (a-display-czm (Agents/targets) height height-ref t-clr t-siz)
  (a-display-czm (Agents/searchUnits) height height-ref su-clr su-siz)
  (a-display-czm (Agents/moDrivens) height height-ref md-clr md-siz)
  true)  
([as height height-ref color size]
  (if (> (.size as) 0)
    (cs/send-points (Agents/points as) height height-ref color size))))

(defn a-display-om
  ([hm inst]
  (let [mp (into {} hm)]
    (a-display-om
      (read-string (mp "playground-index"))
      (mp "display-TO") 
      [(read-string (mp "t-color"))
        (read-string (mp "su-color"))
        (read-string (mp "md-color"))]
       [(mp "t-size") (mp "su-size") (mp "md-size")])))
([pgn timeout colors sizes]
  (if-let [pg (nth (OMT/getPlaygrounds) pgn)]
    (if mas.util/MAS
      (let [omgl (.getMapObs pg)]
        (if (not= @OM-DISTAT "RUN")
          (asp/start-process OM-DISTAT
            #(a-display-om colors sizes omgl)
            timeout
            #(.clear omgl))
          (asp/stop-process OM-DISTAT)))))) 
([colors sizes omgl]
  (let [tgs (Agents/targets)
         sus (Agents/searchUnits)
         mds (Agents/moDrivens)
         ags [tgs sus mds]
         lic (Color. 0 0 0 0)]
    (.clear omgl)
    (loop [c colors s sizes a ags]
      (if (seq c)
        (when (> (.size (first a)) 0)
          (doseq [[lat lon] (Agents/points (first a))]
            (let [p (OMPoint. lat lon (first s))
                   [r g b a] (first c)
                   fic (Color. r g b a)]
              (.setLineColor p lic)
              (.setFillColor p fic)
              (.setOval p true)
              (.add omgl p)))
          (recur (rest c) (rest s) (rest a)))))
    true)))

(defn poly-wsen [poly]
  (let [llp (.getLLPoints poly)
       llp (partition 2 llp)
       las (map first llp)
       los (map second llp)
       w (apply min los)
       s (apply min las)
       e (apply max los)
       n (apply max las)]
  (vec (map #(Math/toDegrees %) [w s e n]))))

(defn send-heatmap-czm [mo trans]
  (let [hm (mas.util/heatmap 0.0 0.5 false)
       _ (.clearSubtitles hm)
       _ (.removeLegend hm)
       _ (.setBorderVisible hm false)
       file (str SEND-HMCZ-N ".gif")
       path (str "resources/public/" file)
       [L T R B] [60 10 12 60]
       wsen (poly-wsen mo)
       prt (poly-rect mo)
       [x y wid hei] (map int prt)
       bim (.createBufferedImage hm wid hei)
       bim (.getSubimage bim L T (- wid L R) (- hei T B))
       fos (java.io.FileOutputStream. path)
       gie (Acme.JPM.Encoders.GifEncoder. bim fos)]
  (.delete (java.io.File. (str "resources/public/" (dec SEND-HMCZ-N) ".gif")))
  (.encode gie)
  (cesium.core/send-image "heatmap" file wsen trans)
  (def SEND-HMCZ-N (inc SEND-HMCZ-N))))

