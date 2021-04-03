(ns two.cents
(:import
  javax.swing.JFrame
  javax.swing.JLabel
  javax.swing.JTextField
  javax.swing.JButton
  java.awt.event.ActionListener
  java.awt.GridLayout
  java.awt.BorderLayout))
(def perm1 (ref 0))
(def opp (ref +))
(defn action-listener [obj func]
  (.addActionListener
  obj (proxy [ActionListener] []
          (actionPerformed [evt] (func evt)))))

(defn add-button [obj symb func]
  (.add obj (doto (JButton. symb) (action-listener func))))

(defn rset [r val]
  (dosync (ref-set r val)))

(defn twocents []
  (let [temp-text (JTextField.)
        get-text #(.getText temp-text)
        get-number #(if (empty? (get-text))
                      0
                      (Double/parseDouble (get-text)))
        clear-text #(.setText temp-text "")
        set-text #(.setText temp-text %1)
        add-opp-button #(add-button %1 %2
                                    (fn [_]
                                      (rset perm1 (get-number))
                                      (clear-text)
                                      (rset opp %3)))
        add-number-button #(add-button %1 (str %2)
                                       (fn [_]
                                         (set-text (str (get-text) %2))))]
    (doto (JFrame. "2Cents Calculator")
      (.add temp-text)
      (#(doseq [i (range 1 10)] (add-number-button %1 i)))
      (add-number-button 0)
      (add-opp-button "+" +)
      (add-opp-button "/" /)
      (add-opp-button "-" -)
      (add-button "=" (fn [_]
                        (set-text (str (@opp @perm1 (get-number))))))
      (add-button "C" (fn [_]
                        (clear-text)
                        (rset perm1 0)))
      (.setLayout (new GridLayout 4 2 3 3))
      (.setSize 250 300)
      (.setVisible true) )))

