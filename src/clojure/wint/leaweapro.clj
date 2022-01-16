(ns wint.leaweapro
(:use protege.core)
(:require
  [async.proc :as asp]
  [wint.server :as ws]))
(defn calculator [params]
  (let [{:keys [operation number1 number2]} params
                     res ((resolve (symbol operation))
                            (read-string number1)
                            (read-string number2))]
  ;;(println :RESULT res)
  (asp/pump-in (@ws/SYS :CHAN) 
    {:event :popup
      :html (str "<h1>" res "</h1>")})))

(defn exec-task [params]
  (condp = (params :task)
  "calc" (calculator params)
  (str "Unimplemented task: " (params :task))))

