// Compiled by ClojureScript 1.10.439 {}
goog.provide('cesium.testclient');
goog.require('cljs.core');
goog.require('cesium.client');
cesium.testclient.tHOME_VIEW = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),-73.99811446828902,new cljs.core.Keyword(null,"latitude","latitude",394867543),40.67451289564669,new cljs.core.Keyword(null,"height","height",1025178622),2631.082799425431,new cljs.core.Keyword(null,"heading","heading",-1312171873),7.1077496389876025,new cljs.core.Keyword(null,"pitch","pitch",1495126700),-31.98722309159895,new cljs.core.Keyword(null,"roll","roll",11266999),0.02588325131495497], null);
cesium.testclient.init_client = (function cesium$testclient$init_client(){
cesium.client.camera_home.call(null,cesium.client.CAMERA,cesium.client.HOME_VIEW);

return cesium.client.start_czml_processing.call(null,cesium.client.CZML_URL,cesium.client.VIEWER);
});
cljs.core.enable_console_print_BANG_.call(null);
window.onload = cesium.testclient.init_client.call(null);

//# sourceMappingURL=testclient.js.map
