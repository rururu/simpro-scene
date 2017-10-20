
                                 ClojureTab

 Contains:
1. Integrated development environment for Clojure language (https://clojure.org/)
2. Protege API for Clojure language
3. Rule engine and Expert system shell rete4frames (https://github.com/rururu/rete4frames)
4. Algorithms visual development environment
----------------------------------------------------------------------------

                                 Installation

Because Clojure uses its own mechanism for building applications from program files, you need to put current folder, files ClojureTab-1.5.jar and clojure-1.8.0.jar and rete-5.3.0-SNAPSHOT.j on class path of JVM. This is simple. Step by step instruction:

1. Unzip clojuretab.zip into Protege plugins folder

2. On Linux and Mac edit run_protege.sh file like this:
   ...
   JARS=<some_other_staff>:.:plugins/clojuretab/clojure-1.8.0.jar:plugins/clojuretab/rete-5.3.0-SNAPSHOT.jar:plugins/clojuretab/ClojureTab-1.5.jar
   ...
   On Windows edit run_protege.bat file replacing ":" to ";" and "/" to "\" and start this file
   or edit Protege.lax file like this:
   ...
   lax.class.path=<some_other_staff>;.;plugins\clojuretab\clojure-1.8.0.jar;plugins\clojuretab\rete-5.3.0-SNAPSHOT.jar;plugins\clojuretab\ClojureTab-1.5.jar
   ...
   and start Protege.exe file

					Use

1. Start Protege and open plugins/clojuretab/projects/Examples.pprj

2. Go to Instances Tab and unfold RuleEngine class

3. Select some instance of Run class and push Run button on it

4. Expert system starts and dialog with you (see screencast1 on a page https://github.com/rururu/r4f-pro)

5. To craft your own Clojure programs create a new project and include in it Clojure.pprj project

6. To craft your own Expert systems create a new project and include in it RuleEngine.pprj project

Feel free to ask me any questions.

                      Ruslan Sorokin (zspovenetsky@gmail.com)
