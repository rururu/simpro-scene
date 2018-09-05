(defproject simpro-scene "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :resource-paths ["src/clojure"]
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [protege "3.5.0"]
                 [protege/standard-extensions "3.5.0"]
                 [protege/looks "3.5.0"]
                 [protege/unicode_panel "3.5.0"]
                 [protege/JGo "3.5.0"]
                 [protege/JGoLayout "3.5.0"]
                 [protege/ClojureTab "1.5.0"]
                 [rete "5.3.0-SNAPSHOT"]
                 [org.clojure/clojurescript "1.9.946"]
                 [org.clojure/core.async "0.4.474"]
                 [ring "1.6.3"]
                 [compojure "1.6.0"]
                 [cljs-ajax "0.7.3"]
                 [com.cognitect/transit-clj "0.8.300"]
                 [com.cognitect/transit-cljs "0.8.243"]
                 [clojure-csv/clojure-csv "2.0.1"]
                 [org.clojure/data.json "0.2.6"]
                 [j18n "1.0.2"]
                 [seesaw "1.4.5"]
                 [semantic-csv "0.2.1-alpha1"]
                 [OpenMapTab "5.2.1"]
                 [org.openmap-java/openmap "5.1.15"]]
  ;; :repositories [["repo" "file:repo"]] ;; for "lein deploy" only !!!!
  :repositories {"local" {:url ~(str (.toURI (java.io.File. "repo"))) :checksum :warn}}
  :main simpro-scene.core)

