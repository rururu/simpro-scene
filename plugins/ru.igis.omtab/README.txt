
                                 OpenMapTab

Protege-Frames plug-in for visualizing geodata and creating GIS applications
           Uses GIS library OpenMap (http://openmap-java.org/)
----------------------------------------------------------------------------

                                 Installation

Because OpenMap uses its own mechanism for building applications from standard
components, you need to put files OpenMapTab-5.2.jar and openmap.jar on class
path of JVM. This is simple. Step by step instruction:

1. Unzip ru.igis.omtab.zip into Protege plugins folder

2. Edit on Linux or Mac OS X run_protege.sh file like this:
   ...
   JARS=<some_other_staff>:plugins/ru.igis.omtab/openmap.jar:plugins/ru.igis.omtab/OpenMapTab-5.2.jar
   ...
   On Windows edit run_protege.bat file replacing ":" to ";" and "/" to "\" and start this file
   or edit Protege.lax file like this:
   ...
   lax.class.path=<some_other_staff>;plugins\ru.igis.omtab\openmap.jar;plugins\ru.igis.omtab\OpenMapTab-5.2.jar
   ...
   and start Protege.exe file

					Use

1. Start Protege and open plugins/ru.igis.omtb/projects/igis.pprj

2. Go to OpenMap Tab and play scenario (button with black triangle)

3. Run timer (by corresponding checkbox)

4. Set time scale to 64:1 (by up arrow) and enjoy spectacle of two ships collision and oil spill

5. To craft your own project you should include igis project into yours. 
   See example project OMTest.pprj with more elaborate oil spill among ice fields.

Remark: To correctly restore OpenMap Tab functionality you need to restart Protege before open other project.
 
Some documentation is in doc folder and OpenMap Tab Help menu.
Feel free to ask me any questions.

                      Ruslan Sorokin (zspovenetsky@gmail.com)
