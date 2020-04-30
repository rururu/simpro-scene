// Compiled by ClojureScript 1.10.439 {}
goog.provide('cesium.test.client');
goog.require('cljs.core');
goog.require('cesium.base.client');
cesium.test.client.tHOME_VIEW = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),-73.99811446828902,new cljs.core.Keyword(null,"latitude","latitude",394867543),40.67451289564669,new cljs.core.Keyword(null,"height","height",1025178622),2631.082799425431,new cljs.core.Keyword(null,"heading","heading",-1312171873),7.1077496389876025,new cljs.core.Keyword(null,"pitch","pitch",1495126700),-31.98722309159895,new cljs.core.Keyword(null,"roll","roll",11266999),0.02588325131495497], null);
cesium.test.client.init_client = (function cesium$test$client$init_client(){
cesium.base.client.add_terrain.call(null,({"requestVertexNormals": true}),cesium.base.client.VIEWER);

cesium.base.client.camera_home.call(null,cesium.base.client.CAMERA,cesium.base.client.HOME_VIEW);

cesium.base.client.clock_settings.call(null,cesium.base.client.CLOCK,cesium.base.client.CLOCK_SET,cesium.base.client.VIEWER);

cesium.base.client.load_data.call(null,new cljs.core.Keyword(null,"GeoJSON","GeoJSON",33508860),"earth-coastlines-1km.geo.json",null,cesium.base.client.VIEWER,(function (p1__14858_SHARP_){
return cljs.core.println.call(null,new cljs.core.Keyword(null,"D","D",-8015893),p1__14858_SHARP_);
}));

cesium.base.client.load_data.call(null,new cljs.core.Keyword(null,"KML","KML",1829561453),"2012_Earthquakes_Mag5.kml",({"camera": cesium.base.client.CAMERA, "canvas": cesium.base.client.CANVAS, "clampToGround": true}),cesium.base.client.VIEWER,(function (p1__14859_SHARP_){
return cljs.core.println.call(null,new cljs.core.Keyword(null,"D","D",-8015893),p1__14859_SHARP_);
}));

return cesium.base.client.load_data.call(null,new cljs.core.Keyword(null,"CZML","CZML",-1539311408),"data/sampleFlight.czml",null,cesium.base.client.VIEWER,(function (p1__14860_SHARP_){
return cljs.core.println.call(null,new cljs.core.Keyword(null,"D","D",-8015893),p1__14860_SHARP_);
}));
});
cljs.core.enable_console_print_BANG_.call(null);
window.onload = cesium.test.client.init_client.call(null);

//# sourceMappingURL=client.js.map
