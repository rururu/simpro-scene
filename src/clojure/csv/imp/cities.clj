(ns csv.imp.cities
(:use protege.core
  csv.imp))
(defn load-cities [hm inst]
  (let [pths (file-chooser (.getPath (.getProjectDirectoryFile *prj*)))
       degmin (fn [x] (ru.igis.omtab.MapOb/getDegMin (read-string x)))]
  (when (seq pths)
    (doseq [pth pths]
      (let [csv (read-csv pth)]
        (println (str "In file: " pth " " (count csv) " objects"))
        (vswap! DATA concat csv)))
    (doseq [m @DATA]
      (let [lab (:CITY_NAME m)
             in (foc "City" "label" lab)]
        (ssv in "latitude" (degmin (:LATITUDE m)))
        (ssv in "longitude" (degmin (:LONGITUDE m)))
        (ssv in "country" (:COUNTRY m))
        (ssv in "capital" (= (:CAP m) "Y"))
        (ssv in "population" (int (read-string (:POP m))))
        (ssv in "url" "file:data/images/star10.png")
        (ru.igis.omtab.OMT/getOrAdd in))))))

