(defproject simpro-scene "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :resource-paths ["lib/*"
                   "plugins/ru.igis.omtab/OpenMapTab-5.2.jar"
                   "plugins/ru.igis.omtab/openmap.jar"
                   "plugins/clojuretab/ClojureTab-1.5git.jar"
                   "plugins/clojuretab/rete-5.3.0-SNAPSHOT.jar"
                   "src/clojure"]
  :plugins [[lein-expand-resource-paths "0.0.1"]]
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.521"]
                 [org.clojure/core.async "0.3.442"]
                 [ring "1.6.0"]
                 [compojure "1.6.0"]
                 [com.cognitect/transit-clj "0.8.300"]
                 [cljs-ajax "0.5.9"]
                 [com.cognitect/transit-cljs "0.8.239"]]
  :main simpro-scene.core)

