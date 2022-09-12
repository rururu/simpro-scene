(ns czml.tests
(:require
  [cesium.server :as cs]
  [czml.generator :as cg]))
(def BLUE-BALL-URI "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAADLXpUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjarZVpsuwmDEb/s4osAU0ILQczVGUHWX4+sPsO/W5SlVeBboNlIQkdYaf5158r/YFGOdek5rVEKRlNQ4MbJjXfzXMmzpQDc3pkz0jtuzzps4iu7w9ecq5vhvgeZDvAnPQxVJ4HJBD/4LlE9ayf917usevLoGQh0SQNE8WVpfIRnbmcq21LWz3ONvNr8V7OQpmCXvL0eIeNPWnvCxConIT8FG3mT/ltqD0P5G3BS/5q5Vin45S+yHaO3rP/u8lPZ1tfknlw3wrf5MNfS+621qhrzaOgTUtC7ZRzRx+7p0fxQhxyqqqgO/6GuZ8e6BVb78A/cs9XyhdughhZXaQ0qNGiecZOHWEpT3aMzB2gtqyKc3C/se9Oiz1JyJAKmJ0noKvwRyx0/Mb2B2cVngdBkwnG6BTAl57eBb/bvxlaq+8U0Tlr7fwRF+8kI4yNfV+hBQi0npzayS+le8jv7S5RhdpOc8UGW75uE5fRTXXXkxy2ki1BVZ9KJh8fNa7wbQiGBARyITEqOA7MToQ8VvBpiJxF+QIBsmQ8ECWrSAGcug9uwxqno8vGtxivF4AwKeJAE9IAS9W0qGtFCbVkYmpmxdyqhbUiRYuVUrzs91RzcXXz4u7Vw1uVqtVqqV5rjdqCQ/AasxQlPGpEtAanTRtsNeg3CC6+5NLLrnL5Va+4Wkf5dO3WS/dee/Q2eMjQYWmU4aOOGG3SRClNnTbL9FlnzLZQa0uWLltl+aorVvugRs8R/kbtndy/U6OHGh9QW88/qUHs/jIBVRjZzECMlUDcNwEUNG9muZIqb3KbWQ6WJGKMKG3DGbSJgaBOYlv0we6T3D9yS8juf+XGP5FLG93/QS5tdF/I/crtB2pjn8N+iN2nEDnFO1tw/Poa2FkbucCbXNiRNNx3L0s6gHlvXWefqxePeUUPTEP6cOqBvKIgpXHvo3Cj6GUC2NVq1iU4dj2vhtQhLnyDYTdE6sB2WqFAxE0CQTB1c2499T7n/llEnfhiO2MRdkFUWzVktayswxW7u3zMiGkGr4ygBtwUX9gqPgbpb7sT0yUUWcYNAAAABHNCSVQICAgIfAhkiAAAAMtJREFUGJVtjy0OwkAQhb8lLRhqV66qIKnkBkgMJ+AEBA6B4AIcAY1omiBJqCdVJAhUZU0rSPlNFlF2syWMmsx8894bwbdWSa2Puc/+/DAjRoMe25kvAIQLAQzVi9+Dct0X3iqpNcByogGIM7snqNKmmV+1d8x9hurFvyryCwAS6BiLOHsTZ29rG1QpUoX2yAMw+QCbzag9ixOosAHd4EGVtiFX0SyfxYmbjFpAV0YAdMp1X7gPuBCAVCH5ZiwspKY7bVSNCsD9sBAAH3u8YrUl0+X6AAAAAElFTkSuQmCC")
(defn bburi-to-Everest []
  (cs/send-czml (cg/add-image "ev1" BLUE-BALL-URI [86.92 27.98 86.93 27.99] 200)))

(defn pump-czml-Ktimes-Nsec-delay [K N path]
  (let [tim K
      del N]
 (dotimes [i tim]
   (cs/send-czml (slurp path))
   (println (- tim i))
   (Thread/sleep (* N 1000)))))

(defn pump-czml120t1sec [path]
  (pump-czml-Ktimes-Nsec-delay 120 1 path))

(defn pump-czml120t4sec [path]
  (pump-czml-Ktimes-Nsec-delay 120 4 path))

(defn pump-czml30t4sec [path]
  (pump-czml-Ktimes-Nsec-delay 30 4 path))

