(ns wint.test
(:require
 [wint.server :refer [pump-in]]))
(defn exec-task [params]
  (println :PARAMS params)
(condp = (params :task)
  "ttask" (let [{:keys [operator number1 number2]} params
                     res ((resolve (symbol operator)) (read-string number1) (read-string number2))]
                (println :RESULT res)
                (pump-in (assoc params :event :popup
                                                       :html (str "<h1>" res "</h1>"))))
  "heatmap" (let [{:keys [file]} params
                           data (slurp file)
                           data (read-string data)
                           tonum (fn [x] (try (if (string? (nth x 2)) (read-string (nth x 2)) (nth x 2))
                                                  (catch Exception e 0)))
                           maxv (apply max (map tonum  data))
                           data {:max maxv
                                     :data (vec (map #(hash-map :lat (first %) :lng (second %) :value (nth % 2)) data))}]
                      (println :MAX (data :max) :DATA [(first (data :data)) (second (data :data)) ".."])
                      (pump-in (assoc params :event :heatmap
                                                             :title "hm1"
                                                             :data data
                                                             :options {:scaleRadius true
                                                                             :radius 0.001
                                                                             :valueField "value"
                                                                             :useLocalExtrema false})))
  (str "Unimplemented task:" (params :task))))

