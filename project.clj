(defproject simpro-scene "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :plugins [[lein-expand-resource-paths "0.0.1"]]
  :resource-paths ["lib/*"
                   "plugins/ru.igis.omtab/OpenMapTab-5.2.jar"
                   "plugins/ru.igis.omtab/openmap.jar"
                   "plugins/clojuretab/ClojureTab-1.5git.jar"
                   "plugins/clojuretab/rete-5.3.0-SNAPSHOT.jar"
                   "src/clojure"]
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.9.946"]
                 [org.clojure/core.async "0.4.474"]
                 [ring "1.6.3"]
                 [compojure "1.6.0"]
                 [cljs-ajax "0.7.3"]
                 [com.cognitect/transit-clj "0.8.300"]
                 [com.cognitect/transit-cljs "0.8.243"]]
  :main simpro-scene.core)

