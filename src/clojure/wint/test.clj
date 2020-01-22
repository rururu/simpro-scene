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
                           data (read-string data)]
                      (println :DATA [(first data) (second data) ".."])
                      (pump-in (assoc params :event :heatmap
                                                             :title "hm1"
                                                             :data data
                                                             :options {})))
  (str "Unimplemented task:" (params :task))))

