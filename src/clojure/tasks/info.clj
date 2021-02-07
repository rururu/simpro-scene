(ns tasks.info
(:use
 protege.core
 navobs.commands
 [hiccup.core :refer [html]])
(:import
 ru.igis.omtab.OMT
 ru.igis.omtab.MapOb
 edu.stanford.smi.protege.model.Project
 edu.stanford.smi.protege.model.Instance
 java.net.URL
 javax.swing.ImageIcon))
(def ROWS (volatile! ()))
(def INFO-BASE "mil_info/InfoBase.pprj")
(def PRJ2 nil)
(def KB2 nil)
(def IO-CLIENT nil)
(def IO-UNION nil)
(def IO-GROUP nil)
(defn load-second-prj [path]
  (let [err (java.util.ArrayList.)]
  (if PRJ2
    (.dispose PRJ2))
  (def PRJ2 (Project. path err))
  (if (> (.size err) 0)
    (apply println (seq err))
    (def KB2 (.getKnowledgeBase PRJ2)))))

(defn sv2 [instance slot-name]
  (.getOwnSlotValue instance (.getSlot KB2 slot-name)))

(defn cls-instances2 [cls-name]
  (.getInstances (.getCls KB2 cls-name)))

(defn general-data [params]
  (let [obj (params :object)
      cli (params :client)
      tsk (cli-get [cli :sit obj :current-tasks])
      tsk (map vector (rest (range)) tsk)]
  (if-let [mo (OMT/getMapOb obj)]
    (html [:h2 obj]
      (format "широта   %.3f" (.getLatitude mo)) [:br]
      (format "долгота  %.3f" (.getLongitude mo)) [:br]
      (format "курс     %d" (.getCourse mo)) [:br]
      (format "скорость %.1f" (.getSpeed mo)) [:br]
      [:h3 "Решаемые задачи"]
      (for [[i t] tsk]
         (str i ". " t "<br>"))))))

(defn maptab [m]
  (if (map? m)
  (mapcat maptab (seq m)) 
  (let [[k v] m]
    (if (map? v)
      (map #(cons k %) (maptab v))
      [[k v]]))))

(defn visibility [params]
  (if (= (params :data) "ready")
  (do (dotimes [i (count @ROWS)] (set-visible (butlast (nth @ROWS i)) (some? (params (str i)))))
    [[600 800] (html [:h2 (params :object)] [:h3 {:style "color:blue"} "Задача выполнена:"] (params :task))])
  (let [cli (params :client)
         obj (params :object)
         clt (params "?клиент")
         cvs (maptab nil)
         tsk "Видимость сил и объектов"
         rows (filter #(= (first %) clt) cvs)]
    (vreset! ROWS rows)
    [[520 600]
      (html [:h2 tsk]
        [:form {:method "post"}
          [:input {:name "client" :value cli :type "hidden"}]
          [:input {:name "object" :value obj :type "hidden"}]
          [:input {:name "task" :value tsk :type "hidden"}]
          [:input {:name "data" :value "ready" :type "hidden"}]
          [:div {:style "width:480px; height:520px; overflow:scroll; border-style:inset;"}
            [:table {:border "1"}
              [:tr [:th "КП/ШП"][:th "Объединение"][:th "Группа"][:th "Видимость"]]
              (for [i (range (count rows))]
                (let [[c u g v] (nth rows i)]
                  [:tr [:td c][:td u][:td g][:td [:input {:name (str i) :type "checkbox" :checked v}]]]))]]
          [:input {:type "submit" :value "Исполнить"}]])])))

(defn io-classes [lst]
  (html [:select {:id "io-classes" :style "width:220px"}
         (for [x lst]
             [:option {:value x} x])]))

(defn io-unions [lst]
  (html [:select {:id "io-unions" :style "width:100%" :onchange "javascript:ask.info.select('io-unions','iogroups')"}
             (for [x lst]
               [:option {:value x} x])]))

(defn io-groups [lst]
  (html [:select {:id "io-groups" :style "width:100%" :onchange "javascript:ask.info.select('io-groups','iogroup')"}
              (for [x lst]
                [:option {:value x} x])]))

(defn iosubclasses [params]
  (if (nil? PRJ2)
  (load-second-prj INFO-BASE))
(if PRJ2
  (if-let [clz (.getCls KB2 (params :name))]
    {:element "io-classes"
     :html (io-classes (map #(.getName %) (.getDirectSubclasses clz)))})))

(defn iosuperclasses [params]
  (if (nil? PRJ2)
  (load-second-prj INFO-BASE))
(if PRJ2
  (if-let [clz (.getCls KB2 (params :name))]
    {:element "io-classes"
     :html (io-classes (map #(.getName %) (.getDirectSuperclasses clz)))})))

(defn iogroups [params]
  (when-let [uni (fifos "MOUnion" "title" (params :name))]
  (def IO-UNION uni)
  (def IO-GROUP (first (svs IO-UNION "moGroups")))
  {:element "io-groups"
   :html (io-groups (map #(sv % "title") (svs IO-UNION "moGroups")))}))

(defn iogroup [params]
  (if-let [gri (fifos "MOGroup" "title" (params :name))]
  (def IO-GROUP gri))
{:status 204})

(defn iobjects [params]
  (if (nil? PRJ2)
  (load-second-prj INFO-BASE))
(if PRJ2
  (let [labf #(sv2 % "label")
         icof #(.substring (sv2 % "url") 22)
         onc "javascript:ask.info.mapob(this.innerText);"]
    {:element "io-objects"
     :html (html 
                [:table {:id "io-objects" :width "100%" :border "1"}
                  (for [io (cls-instances2 (params :name))]
                    (let [no (sv2 io "map-object")]
                      [:tr [:td [:img {:src (icof no)}]][:td {:onclick onc} (labf no)]]))] )} )))

(defn fiocre [uni postfix]
  (let [tit (str (sv uni "title") postfix)]
  (or (fifos "MOGroup" "title" tit)
    (let [zoi @(future (crin "MOGroup"))]
      (println :fi1)
      (ssv zoi "title" tit)
      (ssv zoi "visible" true)
      (ssvs uni "moGroups" (conj (vec (svs uni "moGroups")) zoi))
      zoi))))

(defn situation [params]
  (def IO-CLIENT (fifos "WebClient" "id" (params :client)))
(when IO-CLIENT
  (def IO-UNION (first (svs IO-CLIENT "moUnions")))
  (def IO-GROUP (first (svs IO-UNION "moGroups")))
  ;;{:situation
  (html [:h3 "Объекты"]
    (:html (iosubclasses {:name "Плавучее средство"}))
    [:br]
    [:input {:type "button" :value "подклассы" :onclick "javascript:ask.info.select('io-classes','iosubclasses')"}]
    [:input {:type "button" :value "надклассы" :onclick "javascript:ask.info.select('io-classes','iosuperclasses')"}]
    [:input {:type "button" :value "объекты" :onclick "javascript:ask.info.select('io-classes','iobjects')"}]
    [:div {:style "width:320px; height:480px; overflow:scroll; background-color: white; border-style: ridge;"}
      [:table {:id "io-objects" :width "100%" :border "1"}
        [:tr [:td [:img {:src "img/plark.png"}]][:td "пларк"]]
        [:tr [:td [:img {:src "img/av.png"}]][:td "авианосец"]] ]]
    [:div {:style "width:320px; background-color: white; border-style: ridge;"}
      " удалить объект " [:input {:id "io-delete" :type "checkbox"}]]
    [:h4 "Группа"]
    [:div {:style "width:320px; background-color: white; border-style: ridge;"}
      (io-unions (map #(sv % "title") (svs IO-CLIENT "moUnions")))
      (io-groups (map #(sv % "title") (svs IO-UNION "moGroups")))]
    [:input {:type "button" :value "очистить группу" :onclick "javascript:ask.info.cleargro()"}]
    [:input {:type "button" :value "закрыть" :onclick "javascript:ask.info.close()"}] )))

(defn copyins [ins dep]
  (let [mp (itm ins dep)
       moi (mti mp)]
  (println :MOI (sv moi "label"))
  moi))

(defn setype [moi]
  (if-let [tyn (sv moi "typeName")]
  (if-let [tyi (fifos "Type" "label" tyn)]
    (ssv moi "type" tyi))))

(defn distrib-tows [moi]
  (if-let [tws (svs moi "tow")]
  (loop [tws tws zos [] fos []]
    (if (seq tws)
      (let [tw (first tws)
             ms (svs tw "mapob")
             fs (filter #(= (typ %) "NavOb") ms)
             zs (filter #(let [t (typ %)] (or (= t "OMTCircle") (= t "OMTArc"))) ms)]
        (recur (rest tws) (concat zos zs) (concat fos fs)))
      (do
        (when (seq fos)
          (println :dt1)
          (let [ont (fiocre IO-UNION ".На буксире")]
            (println :dt11)
            (ssvs ont "mapob" (concat (svs ont "mapob") fos)))
          (println :dt2)
          (doseq [fo fos]
            (distrib-tows fo)
            (setype moi)))
        (when (seq zos)
          (println :dt3)
          (let [znt (fiocre IO-UNION ".Зоны")]
            (ssvs znt "mapob" (concat (svs znt "mapob") zos))) )) ))))

(defn add-mapob [params]
  (when (not (fifos "MapOb" "label" (params :label)))
  (if (nil? PRJ2)
    (load-second-prj INFO-BASE))
  (if PRJ2
    (let [lab (params :label)
           mois (cls-instances2 "MapOb")
           flt (filter #(= (sv2 % "label") lab) mois)]
      (if-let [moi (first flt)]
        (let [moi (copyins moi 8)
               mo (OMT/getOrAdd moi)]
          (println :am1)
          (ssvs IO-GROUP "mapob" (conj (vec (svs IO-GROUP "mapob")) moi))
          (println :am2)
          (distrib-tows moi)
          (println :am3)
          (pump-no-add mo (params :client))
          (setype moi)
          {:mapob lab})
        {:mapob :no}))
    {:mapob :no})))

(defn delete-mapob
  ([params]
  (if-let [moi (fifos "MapOb" "label" (params :label))]
    (delete-mapob moi (svs moi "tow"))))
([moi tows]
  (if tows
    (doseq [tow tows]
      (if-let [ms (svs tow "mapob")]
        (doseq [m ms]
          (delete-mapob m (svs m "tow"))))))
  (OMT/removeMapOb moi true)))

(defn refrec [moi tows]
  (if tows
  (doseq [tow tows]
    (if-let [ms (svs tow "mapob")]
      (doseq [m ms]
        (refrec m (svs m "tow"))))))
(when-let [mo (OMT/getMapOb moi)]
  (ssv moi "latitude" (MapOb/getDegMin (.getLatitude mo)))
  (ssv moi "longitude" (MapOb/getDegMin (.getLongitude mo)))))

(defn remrec [moi tows]
  (if tows
  (doseq [tow tows]
    (if-let [ms (svs tow "mapob")]
      (doseq [m ms]
        (remrec m (svs m "tow"))))))
(OMT/removeMapOb moi false))

(defn move-mapob [params]
  (when-let [moi (fifos "MapOb" "label" (params :label))]
  (remrec moi (svs moi "tow"))
  (ssv moi "latitude" (MapOb/getDegMin (read-string (params :lat))))
  (ssv moi "longitude" (MapOb/getDegMin (read-string (params :lon))))
  (if-let [mo (OMT/getOrAdd moi)]
    (pump-no-add mo (params :client)))
  (refrec moi (svs moi "tow"))
  {:status 204}))

(defn clear-group [params]
  (doseq [moi (svs IO-GROUP "mapob")]
  (delete-mapob moi (svs moi "tow"))))

