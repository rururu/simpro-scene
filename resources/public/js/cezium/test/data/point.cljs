(ns data.point
(:require 
  [cesium.client :refer
    [add-terrain
     camera-home
     start-event-processing
     add-orbit-button
     mouse-move
     clock-settings
     PORT
     VIEWER
     CLOCK
     SCENE
     CAMERA
     CANVAS
     HOME-VIEW
     EVENT-DEBUG]]))
(def HEL-VIEW {:latitude 60.0
  :longitude 25.0
  :height 8848
  :heading 0
  :pitch -15
  :roll 0})
(def HEL-CLOCK-SET {:animate true
  :start "2012-08-04T16:00:00Z"
  :stop "2012-08-04T16:06:00Z"
  :current "2020-08-08T16:00:00Z"
  :mult 4
  :step "SYSTEM_CLOCK_MULTIPLIER"
  :range "LOOP_STOP"})
(defn init-client []
  ;;(add-terrain nil VIEWER)
(camera-home CAMERA HEL-VIEW)
(start-event-processing PORT VIEWER)
(add-orbit-button CAMERA)
(mouse-move)
(clock-settings CLOCK HEL-CLOCK-SET VIEWER))


(enable-console-print!)
(set! (.-onload js/window) (init-client))