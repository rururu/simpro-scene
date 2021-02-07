(ns navobs.commands
(:use 
  protege.core
  json.mapob
  [hiccup.core :refer [html]]
  [clojure.core.async :as async :refer [chan alts!! put!]])
(:import
  ru.igis.omtab.OMT
  ru.igis.omtab.MapOb
  ru.igis.omtab.NavOb
  ru.igis.omtab.OMTPoly
  ru.igis.omtab.OMTCircle
  ru.igis.omtab.OMTArc
  ru.igis.omtab.Link
  ru.igis.omtab.Clock 
  edu.stanford.smi.protege.model.Instance
  edu.stanford.smi.protege.model.DefaultSimpleInstance
  edu.stanford.smi.protege.ui.DisplayUtilities
  clojuretab.ClojureTab
  javax.swing.ImageIcon
  java.net.URL))
(def defonceCLIENTS (defonce CLIENTS (atom {})))
(def defonceSERVER-INST (defonce SERVER-INST (volatile! nil)))
(def SITYPS nil)
(def CLOSE-TASK [:button
  {:type "button"
   :onclick "navobs.core.close_task()"} "Отмена"])
(defn cli-get [path]
  (get-in @CLIENTS path))

(defn cli-put [path val]
  (swap! CLIENTS assoc-in path val))

(defn pump-in-evt
  ([val]
  (doseq [clid (keys @CLIENTS)]
    (pump-in-evt clid val)))
([client val]
  ;;(println [:PIE client val])
  (if-let [chn (cli-get [client :evt-chan])]
    (put! chn val))))

(defn pump-in-pol [client val]
  ;;(println [:PIP client val])
(if-let [chn (cli-get [client :pol-chan])]
  (put! chn val)))

(defn pump-in-mes
  ([val]
  (doseq [cli (keys @CLIENTS)]
    (pump-in-mes cli val)))
([client val]
  (if-let [chn (cli-get [client :mes-chan])]
    (put! chn val))))

(defn pump-lnk-add [link clid]
  (let [mo1 (.getMo1 link)
       mo2 (.getMo2 link)
       color (.getColor link)
       color (str "#" (.substring color 2))
       wid (.getWidth link)
       name1 (.getName mo1)
       name2 (.getName mo2)]
  (if (and (cli-get [clid :sit name1 :visible])
              (cli-get [clid :sit name2 :visible]))
    (pump-in-evt clid {:event :add-link 
	         :link (.getName link)
	         :names [name1 name2]
	         :options {:color color :weight (int wid)}}))))

(defn object-url [no]
  (if-let[moi (.getInstance no)]
  (if-let [url (sv moi "url")]
    (.substring url 10))))

(defn pump-no-add [mo clid]
  (let [curt (Clock/getCurrentTime)
       name (.getName mo)
       evt {:event :create-navob
              :name name
              :lat (.getLatitude mo)
              :lon (.getLongitude mo)
              :crs (.getCourse mo)
              :spd (.getSpeed mo)
              :control (cli-get [clid :sit name :controlled])
              :steer (cli-get [clid :sit name :steerable])
              :clk curt
              :url (object-url mo)
              :type (cli-get [clid :sit name :type])}
       rrte (drop (.getNextPointIndex mo) (.getRoute mo))]
  (pump-in-evt clid evt)
  (if (seq rrte)
    (pump-in-evt clid {:event :set-route 
                                 :name (.getName mo)
                                 :clk curt
                                 :route (map seq rrte)}))))

(defn pump-no-upd [mo clid cmd]
  (let [evt {:name (.getName mo)
               :clk (Clock/getCurrentTime)}]
  (pump-in-evt clid
    (condp = cmd
      "UPD_SPEED" (assoc evt :event :set-speed :spd (.getSpeed mo))
      "UPD_COURSE" (assoc evt :event :set-course :crs (.getCourse mo))
      "UPD_ROUTE" (assoc evt :event :set-route :route (map seq (drop
				(.getNextPointIndex mo)
				(.getRoute mo))))
      "UPD_LOCATION" (assoc evt :event :set-location :loc [(.getLatitude mo)
				(.getLongitude mo)])))))

(defn zone-options [lm]
  (let [lic (.getLineColor lm)
       fic (.getFillColor lm)]
  {:weight 1
   :color (json-color lic)
   :fillColor (json-color fic)
   :lineColor (json-color lic)
   :opacity (json-opacity lic)
   :fillOpacity (json-opacity fic)
   :dashArray (json-dash-array lm)
   :fill (json-fill fic)}))

(defn pump-zon-create [mo clid base typ]
  (let [lm (.getLocationMarker mo)
       props {:type typ
                  :radius (* (.getRadius lm) 60)
                  :dashArray (json-dash-array lm)}
       props (if (= typ :arc)
                   (merge props {:start (.getStartAngle lm)
                                          :extent (.getExtentAngle lm)})
                   props)]
  (pump-in-evt clid
    {:event :create-zone
     :zone (.getName mo)
     :base base
     :properties props
     :options (zone-options lm)})))

(defn client-list []
  (if-let [ser @SERVER-INST]
  (if-let [clis (seq (svs ser "clients"))]
    (let [tits (map #(sv % "title") clis)
           ids (map #(sv % "id") clis)
           cns (map #(list %1 %2) ids tits)
           cns (cons ["" "Клиент"] cns)]
      (html
        [:select {:style "width:240px"
                     :onchange "javascript:navobs.core.client_selected(this.value)"}
           (for [[c n] cns] [:option {:value c} n])]))
    "Client list empty!")
  "WebServer instance not found!"))

(defn find-zone-base [obj]
  (let [ref (.getReferences obj)
       frs (map #(.getFrame %) ref)
       flt (filter #(= (.getName (.getDirectType %)) "Tow") frs)]
  (if (seq flt)
    (let [ref2 (.getReferences (first flt))
           frs2 (map #(.getFrame %) ref2)
           flt2 (filter #(instance? DefaultSimpleInstance %) frs2)] 
      (if (seq flt2)
         (sv (first flt2) "label"))))))

(defn mapob-on-map [mo clid]
  (let [name (.getName mo)]
  (if (cli-get [clid :sit name :visible])
    (cond
      (instance? NavOb mo)      (pump-no-add mo clid)
      (instance? OMTPoly mo)   (pump-in-pol clid [name (json-omtpoly mo)])
      (instance? OMTCircle mo) (if-let [base (find-zone-base (.getInstance mo))]
		    (pump-zon-create mo clid base :circle)
		    (pump-in-pol clid [name (json-omtcircle mo)]))
      (instance? OMTArc mo)     (if-let [base (find-zone-base (.getInstance mo))]
		 (pump-zon-create mo clid base :arc)
		 (pump-in-pol clid [name (json-omtarc mo)]))))))

(defn mapob-from-map [mo clid]
  (pump-in-evt clid {:name (.getName mo) :event
              (cond (instance? NavOb mo) :delete-navob
	(instance? OMTPoly mo) :delete-poly
	(or (instance? OMTCircle mo) (instance? OMTArc mo))
	  (if (find-zone-base (.getInstance mo))
	    :delete-zone
	    :delete-poly)
	(instance? Link mo) :delete-link)}))

(defn pump-mo-event
  ([evt]
  ;; (println :MO-EVENT (.getActionCommand evt) (.getName (.getSource evt)))
  (pump-mo-event (.getActionCommand evt) (.getSource evt)))
([cmd mo]
  (doseq [clid (keys @CLIENTS)]
    (cond
      (.startsWith cmd "UPD") (pump-no-upd mo clid cmd)
      (= cmd "ADDED") (if (instance? Link mo) 
	            (pump-lnk-add mo clid)
	            (mapob-on-map mo clid))
      (= cmd "REMOVED") (mapob-from-map mo clid)))))

(defn create-situation-map [sit]
  (letfn [(sit-mob [mob [ctl str]]
	(let [typ (sv mob "type")
	       ltp (if typ (sv typ "label"))]
	  (if typ 
                            (def SITYPS (set (cons typ SITYPS))))
	  [{:inst mob
                            :type ltp
  	  :controlled ctl
  	  :steerable str
	    :visible false}]))
          (sit-gro [gro]
	(mapcat #(sit-mob % 
		[(sv gro "controlled")
		 (sv gro "steerable")]) (svs gro "mapob")))
          (sit-uni [uni]
	(mapcat sit-gro (svs uni "moGroups")))
          (sit-any [any]
	(cond
	  (has-typ any "MOUnion") (sit-uni any)
	  (has-typ any "MOGroup") (sit-gro any)
	  (has-typ any "MapOb") (sit-mob any [true true true])))]
  (def SITYPS nil)
  (let [sm (reduce #(assoc %1 (sv (:inst %2) "label") %2) {} (mapcat sit-any sit))]
    [sm SITYPS])))

(defn sel-html [lst pfx]
  (html [:select {:style "width:220px"
                      :size (min (count lst) 64)
                      :onchange 
  (str "javascript:navobs.core." pfx "_selected(this.value)")}
    (for [e (sort lst)] [:option {:value e} e])]))

(defn repair-task-typ [ttyp]
  (if (.startsWith ttyp "Documented")
  (.substring ttyp 10)
  ttyp))

(defn create-task-map [type]
  (letfn [(task-map [mp tsk]
            (let [dt (repair-task-typ (typ tsk))]
              (assoc mp dt
                (conj (mp dt) (sv tsk "label")))))
          (repair-tss [tss]
            (if (= (count tss) 1)
              (cons "Задачи" tss)
              tss))]
  (->> (reduce task-map {} (svs type "tasks"))
    (reduce-kv #(assoc %1 %2 (sel-html (repair-tss %3) "task")) {}))))

(defn init-situation-map [sit sit-map]
  (letfn [(ini-mob [mob]
	(vswap! sit-map assoc-in [(sv mob "label") :visible] true))
          (ini-gro [gro]
	(doall (map ini-mob (svs gro "mapob"))))
          (ini-uni [uni]
	(doall (map ini-gro (svs uni "moGroups"))))
          (ini-any [any]
	(condp = (.getName (.getDirectType  any))
	  "MOUnion" (ini-uni any)
	  "MOGroup" (ini-gro any)
	  (ini-mob any)))]
  (doall (map ini-any sit))))

(defn situation-on-map [clid cli mode]
  (let [[sitmap sityps] (create-situation-map (svs cli "moUnions"))
       ctrloo (filter #(get-in sitmap [% :controlled]) (keys sitmap))
       obsel (sel-html ctrloo "object")
       sitmap (volatile!  sitmap)
       tkmap (reduce #(assoc %1 (sv %2 "label") (create-task-map %2)) {} sityps)]
  (init-situation-map (svs cli "initial-situation") sitmap)
  (cli-put [clid :sit] @sitmap)
  (println  :TYPES clid (count sityps))
  (pump-in-evt clid {:event :task-map
                                           :ob-selector obsel
                                           :task-map tkmap})
  (println :MODE mode)
  (doseq [[name mom] (seq (cli-get [clid :sit]))]
    (let [moi (:inst mom)]
      (when-let [mo (if (= mode :initial)
                               (OMT/getOrAdd moi)
                               (OMT/getMapOb moi))]
        (mapob-on-map mo clid)
        (println mode name (if-let [t (sv moi "type")] (sv t "label"))))))))

(defn client-selected [clid]
  (let [ser @SERVER-INST
       cli (fifos "WebClient" "id" clid)]
  (if (and ser cli)
    (do
      (if (@CLIENTS clid)
        (situation-on-map clid cli :current)
        (do
          (cli-put [clid :evt-chan] (chan))
          (cli-put [clid :pol-chan] (chan))
          (cli-put [clid :mes-chan] (chan))
          (situation-on-map clid cli :initial)))
      {:name  (sv cli "title")
        :lat       (sv cli "lat") 
        :lon      (sv cli "lon") 
        :zoom   (sv cli "scale")
        :color   (sv cli "color")
        :delta-t (sv cli "delta_t")
        :scale (Clock/getTimeScale)
        :clock (if (OMT/isRunning) (Clock/getCurrentTime) -1)})
    (println "ERROR: client" clid cli "server" ser))))

(defn find-expar-vals [grp obj tsk pnam]
  (letfn [(pte [obj tsk pnam loa]
            (and (= obj (sv loa "platform"))
                    (= tsk (sv loa "task"))
                    (= pnam (sv (sv loa "expendable") "title"))))]
  (if-let [flt (seq (filter #(pte obj tsk pnam %) (svs grp "loads")))]
    (map #(or (sv % "label") (sv % "title")) (svs (first flt) "objects")))))

(defn group-of [client object]
  (if-let [mo (OMT/getMapOb object)]
  (if-let [cli (fifos "WebClient" "id" client)]
    (loop [uu (svs cli "moUnions")]
      (if (seq uu)
        (if-let [flt (seq (filter #(some #{(.getInstance mo)} (svs % "mapob")) 
                                         (svs (first uu) "moGroups")))]
          (first flt)
          (recur (rest uu))))))))

(defn params-and-doc [client object task]
  (let [mo (OMT/getMapOb object)
       obj (.getInstance mo)
       type (.getType mo)
       tsk (first (filter #(= (sv % "label") task) (svs type "tasks")))
       grp (group-of client object)]
  [(for [prm (svs tsk "parameters")]
     (let [pnam (sv prm "title")]
       [pnam  
       (condp = (typ prm)
         "ValueParameter" (sv prm "param-value")
         "OptionParameter" (vec (svs prm "options"))
         "ObjectParameter" (vec (map #(or (sv % "label") (sv % "title")) (svs prm "objects")))
         "ExpendableParameter" (vec (find-expar-vals grp obj tsk pnam)))]))
   (if-let [doc (sv tsk "document")]
     (sv doc "source"))]))

(defn param-row [[name opts]]
  [:tr [:td name]
  [:td (if (vector? opts)
          [:select {:name name :style "width:120px"}
            (for [x opts] [:option {:value (str x)} (str x)])]
          [:input {:name name :type "text" :value (str opts) :style "width:120px"}])]])

(defn expend
  ([client object task params]
  (let [mo (OMT/getMapOb object)
         obj (.getInstance mo)
         type (.getType mo)
         tsk (first (filter #(= (sv % "label") task) (svs type "tasks")))
         grp (group-of client object)
         epm (filter #(= (typ %) "ExpendableParameter") (svs tsk "parameters"))
         epm (map #(sv % "title") epm)]
    (doseq [[p v] params]
      (if (some #{p} epm)
        (expend grp obj tsk p v)))))

([grp obj tsk pnam pval]
  (letfn [(pte [obj tsk pnam loa]
              (and (= obj (sv loa "platform"))
                      (= tsk (sv loa "task"))
                      (= pnam (sv (sv loa "expendable") "title"))))]
    (if-let [flt (seq (filter #(pte obj tsk pnam %) (svs grp "loads")))]
      (let [load (first flt)
             vals (vec (svs load "objects"))]
        (ssvs load "objects" (remove #(or (= (sv % "label") pval) (= (sv % "title") pval)) vals)))))))

(defn task-params [client object task]
  (let [[params doc] (params-and-doc client object task)]
  [object
       (html [:h2 object]
             [:h3 task]
             [:form {:method "post"}
              [:input {:name "client" :value client :type "hidden"}]
              [:input {:name "object" :value object :type "hidden"}]
              [:input {:name "task" :value task :type "hidden"}]
              [:table
               (if (seq params)
                 (for [p params] (param-row p)))]
              [:br][:br]
              [:input {:type "submit" :value "Исполнить" :style "background-color: #BCE;"}]
              CLOSE-TASK])
       doc]))

(defn rpt [evt]
  (let [r ""
        r (if-let [crs (evt :crs)] (str r "Курс: " crs "</br>") r) 
        r (if-let [spd (evt :spd)] (str r "Скорость: " spd "</br>") r) 
        r (if-let [lat (evt :lat)] (str r "Широта: " lat "</br>") r) 
        r (if-let [lon (evt :lon)] (str r "Долгота: " lon) r)]
    r))

(defn helm [client name params]
  (let [{:keys [lat lon crs spd]} params
        evt {:event :steer-navob :name name}
        evt (assoc evt
                   :lat (if (and (number? lat) (> 90 lat -90))
                          lat)
                   :lon (if (and (number? lon) (> 180 lon -180))
                          lon)
                   :crs (if (and (number? crs) (>= 360 crs 0))
                          crs)
                   :spd (if (and (number? spd) (>= spd 0))
                          spd))]
    (let [html
          (if (or (evt :lat) (evt :lon) (evt :crs) (evt :spd))
            (when-let [mo (OMT/getMapOb name)]
              (if-let [lat (evt :lat)]
	(.setLatitude mo (double lat)))
              (if-let [lon (evt :lon)]
	(.setLongitude mo (double lon)))
              (if-let [crs (evt :crs)]
	(.setCourse mo (int crs)))
              (if-let [spd (evt :spd)]
	(.setSpeed mo (double spd)))
              (pump-in-evt client (assoc evt :clk (Clock/getCurrentTime)))
              (html [:h2 name] [:h3 "Исполнил"] (rpt evt)))
            (html [:h3 "Неверная команда!"]))]
      (pump-in-evt client {:event :add-popup :name name :time 4000 :html html})
      [name nil])))

(defn wrong-params [client object task params]
  (let [[rig _] (params-and-doc client object task)
      eig (dissoc params :client :object :task)
      rpp (set (map first rig))
      epp (set (map name (keys eig)))
      dif (clojure.set/difference rpp epp)]
  (if (seq dif)
    (html [:h2 object]
      [:h3 {:style "color:red"} "Ошибка запуска задачи:"]
      task [:br]
      [:u {:style "color:red"} "Не заданы параметры:"] [:br]
      (for [p dif]
        (str "- " p "<br>")) ))))

(defn add-current-task [clid name task]
  (cli-put [clid :sit name :current-tasks]
	(conj (cli-get [clid :sit name :current-tasks]) task)))

(defn remove-current-task [name task]
  (doseq [clid (keys @CLIENTS)]
  (if (cli-get [clid :sit name])
    (cli-put [clid :sit name :current-tasks]
	(remove #{task} (cli-get [clid :sit name :current-tasks]))))))

(defn exec-info-calc-task [tsk params]
  (if (instance? Instance tsk)
  (let [ns (sv tsk "cloNamespace")]
    (last (for [fin (svs tsk "cloFunctions")]
	(ClojureTab/invoke (sv ns "title") (first (seq (.split (sv fin "title") " "))) params))))
  (if-let [tsk (or (fifos "InfoTask" "label" tsk) (fifos "CalcTask" "label" tsk))]
    (exec-info-calc-task tsk))))

(defn unkeys [mp]
  (reduce-kv #(assoc %1 (name %2) %3) {} mp))

(defn exec-task [client object task params]
  (let [tpe (.getType (OMT/getMapOb object))
       tsk (first (filter #(= (sv % "label") task) (svs tpe "tasks")))
       ttyp (repair-task-typ (typ tsk))]
  (if (or (= ttyp "InfoTask") (= ttyp "CalcTask"))
    (let [res (exec-info-calc-task tsk params)
           htm (if res
                    (str res (html CLOSE-TASK)) 
                    (html [:h2 object] [:h3 {:style "color:red"} "Ошибка запуска задачи:"] task CLOSE-TASK))]
      (pump-in-evt client {:event :task-performed 
	:html htm}))
    (if-let [htm (wrong-params client object task params)]
      (pump-in-evt client {:event :task-performed 
	:html htm})
      (let [ctxmap (reduce-kv 
	#(assoc %1 %2 
		(or 
		  (fifos "MapOb" "label" %3) 
		  (fifos "ZoneDefence" "title" %3) 
		  (fifos "DetectionOntology" "title" %3) 
		  (fifos "DefeatOntology" "title" %3) 
		  (fifos "ScenarioOntology" "title" %3) 
		  (fifos "Algorithm Ontology" "title" %3) 
		  %3))
	{} 
	params)
             ctxmap (unkeys ctxmap)
             clinst (fifos "WebClient" "id" client)
             ctxmap (assoc ctxmap "?client" clinst)]
          (when (ClojureTab/invoke "s" "player-start-scenario" object task ctxmap)
            (expend client object task params)
            (pump-in-evt client {:event :task-performed
	:html (html [:h2 object] "Начал выполнение задачи" [:h3 task] CLOSE-TASK)})
            (add-current-task client object task)))))))

(defn time-on-off []
  (if (OMT/isRunning)
  (do (OMT/setTimerRunning false)
    (pump-in-evt {:event :time :action :stop :clock (Clock/getCurrentTime)}))
  (do (OMT/setTimerRunning true)
    (pump-in-evt {:event :time :action :run :clock (Clock/getCurrentTime)})))
{:status 204})

(defn set-time-scale [tsc]
  (OMT/setTimeScale tsc)
{:status 204})

(defn pump-out [chn]
  (loop [[bit ch] (alts!! [chn] :default :none) bits []]
    (if (= bit :none)
      bits
      (recur (alts!! [chn] :default :none) (conj bits bit)))))

(defn pump-out-evt [client]
  (if-let [chn (cli-get [client :evt-chan])]
  (pump-out chn)))

(defn pump-out-pol [client]
  (if-let [chn (cli-get [client :pol-chan])]
  (pump-out chn)))

(defn pump-out-mes [client]
  (if-let [chn (cli-get [client :mes-chan])]
  (pump-out chn)))

(defn get-visible [mo clid]
  (cli-get [clid :sit (.getName mo) :visible]))

(defn set-visible
  ([mo visi]
  (doseq [clid (keys @CLIENTS)]
    (set-visible mo clid visi)))
([mo clid visi]
  (let [ovis (get-visible mo clid)]
    (when (not= visi ovis)
      (cli-put [clid :sit (.getName mo) :visible] visi)
      (if visi
        (mapob-on-map mo clid)
        (mapob-from-map mo clid))))))

(defn where-visible [mo]
  (filter #(get-visible mo %) (keys @CLIENTS)))

