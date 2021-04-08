(ns als.gorillanotes
(:require 
  [gorilla-notes.core :as gn]
  [gorilla-notes.components.leaflet.providers :as leaflet-providers]
  [clojure.java.browse :refer [browse-url]]))
(defn -main [& args]
  (edu.stanford.smi.protege.Application/main (into-array String []))
(gn/start-server!)
(future (browse-url "http://localhost:1903"))
(gn/reset-notes!)
(gn/add-note! [:h1 "Hello, Ru!"]))

(defn p-code []
  (gn/add-note!
[:p/code {:code "(defn abcd [x] (+ x 9))"}]))

(defn p-math []
  (gn/add-note!
[:p/math
 "(ax ^2 + bx + c = 0 )"]))

(defn p-html []
  (gn/add-note!
[:p/html
(str "<h4>h4</h4>"
     "<h5>h5</h5>")]))

(defn p-leaflet []
  (gn/add-note!
[:p/leafletmap
    {:tile-layer leaflet-providers/Stamen-TonerLite}
    [{:type   :view
      :center [51.49, -0.08]
      :zoom   12
      :height 600
      :width  700}
     {:type   :rectangle
      :bounds [[51.49, -0.08]
               [51.5, -0.06]]}
     {:type      :circle
      :center    [51.505, -0.09]
      :fillColor :blue
      :radius    200}
     {:type      :polygon
      :positions [[51.515, -0.09]
                  [51.52, -0.1]
                  [51.52, -0.12]]
      :color     :purple}
     {:type      :polygon
      :positions [[[51.51, -0.12]
                   [51.51, -0.13]
                   [51.53, -0.13]]
                  [[51.51, -0.05]
                   [51.51, -0.07]
                   [51.53, -0.07]]]
      :color     :purple}
     {:type      :line
      :positions [[51.505, -0.09]
                  [51.51, -0.1]
                  [51.51, -0.12]]
      :color     :lime}
     {:type      :line
      :positions [[[51.5, -0.1]
                   [51.5, -0.12]
                   [51.52, -0.12]]
                  [[51.5, -0.05]
                   [51.5, -0.06]
                   [51.52, -0.06]]]
      :color     :lime}
     {:type     :marker
      :position [51.505, -0.09]}
     {:type     :marker
      :position [51.51, -0.12]
      :popup    "wow"}
     {:type      :circlemarker
      :center    [51.52, -0.06]
      :fillColor :blue
      :radius    200
      :popup     "square the circle"}]]))

(defn p-markdown []
  (gn/add-note!
[:p/markdown "### Midje\n\nTests of the Midje test framework are rendered as follows:"]))

(defn p-quil []
  (gn/add-note!
[:p/quil
{:draw         '(fn [{:keys [circles]}]
                 (q/background 255)
                 (doseq [{[x y] :pos [r g b] :color} circles]
                   (q/fill r g b)
                   (q/ellipse x y 10 10)))
 :update-state '(fn [{:keys [width height] :as state}]
                 (update state :circles conj {:pos   [(+ 20 (rand-int (- width 40)))
                                                      (+ 20 (rand-int (- height 40)))]
                                              :color (repeatedly 3 #(rand-int 250))}))
 :init         '(fn [width height]
                 (fn []
                   {:width   width
                    :height  height
                    :circles []}))}]))

(defn p-player []
  (gn/add-note!
[:p/player
 {:width  "100%"
  :height "100%"
  :url    "https://www.youtube.com/watch?v=G512fvK9KXA"}]))

(defn p-plot []
  (gn/add-note!
[:div
 [:h5 "Plot:"]
   (into [:ul]
      (for [i (range 9)]
        [:li
         i " "
         [:p/sparklinespot
          {:data      (for [j (range 999)]
                        (+ (* 0.2 (rand))
                           (Math/sin (* i j))))
           :limit     100
           :svgWidth  100
           :svgHeight 20}]]))]))

(defn p-slider []
  (gn/add-note!
[:p/slider :x {:min 0 :max 100 :initial-value 0}]))

(defn p-sci []
  (gn/add-note!
[:p/sci '(+ 1 2)]))

(defn p-vega []
  (gn/add-note!
[:p/vega
{:description "A simple bar chart with embedded data."
 :data        {:values [{:a "A" :b 28} {:a "B" :b 55} {:a "C" :b 43}
                        {:a "D" :b 91} {:a "E" :b 81} {:a "F" :b 53}
                        {:a "G" :b 19} {:a "H" :b 87} {:a "I" :b 52}]}
 :mark        :bar
 :encoding    {:x {:field :a :type :nominal :axis {:labelAngle 0}}
               :y {:field :b :type :quantitative}}}]))

(defn p-dataset []
  (gn/add-note!
[:p/dataset 
 {:columnDefs [{:headerName "a", :field "a"} {:headerName "b", :field "b"}],
   :rowData ({"a" 1, "b" 4} {"a" 2, "b" 5} {"a" 3, "b" 6})}]))

