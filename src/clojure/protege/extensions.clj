(ns protege.extensions
(:use protege.core)
(:import
 ru.protege.extensions.QueriesTabHelper))
(defn qt []
  (QueriesTabHelper/getQueriesTab))

(defn qt-search-results []
  (let [qtb (qt)]
  (if qtb
    (.search (first (.getWidgets qtb))))))

(defn qt-query [name]
  (let [qtb (qt)]
  (if qtb
    (.getQueryWithName (.getModel qtb) name))))

(defn qt-do-query [qname args]
  (let [qtb (qt)
       q (qt-query qname)
       args (map str args)]
  (doall (map #(.replaceObject q %1 %2) args (range)))
  (QueriesTabHelper/ruDoUpLoad qtb q)
  (QueriesTabHelper/ruDoSearch qtb q)))

