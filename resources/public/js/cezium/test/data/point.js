// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('data.point');
goog.require('cljs.core');
goog.require('cesium.client');
data.point.HEL_VIEW = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"latitude","latitude",394867543),60.0,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),25.0,new cljs.core.Keyword(null,"height","height",1025178622),(8848),new cljs.core.Keyword(null,"heading","heading",-1312171873),(0),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(-15),new cljs.core.Keyword(null,"roll","roll",11266999),(0)], null);
data.point.HEL_CLOCK_SET = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"animate","animate",1850194573),true,new cljs.core.Keyword(null,"start","start",-355208981),"2012-08-04T16:00:00Z",new cljs.core.Keyword(null,"stop","stop",-2140911342),"2012-08-04T16:06:00Z",new cljs.core.Keyword(null,"current","current",-1088038603),"2020-08-08T16:00:00Z",new cljs.core.Keyword(null,"mult","mult",1466794774),(4),new cljs.core.Keyword(null,"step","step",1288888124),"SYSTEM_CLOCK_MULTIPLIER",new cljs.core.Keyword(null,"range","range",1639692286),"LOOP_STOP"], null);
data.point.init_client = (function data$point$init_client(){
cesium.client.camera_home.call(null,cesium.client.CAMERA,data.point.HEL_VIEW);

cesium.client.start_event_processing.call(null,cesium.client.PORT,cesium.client.VIEWER);

cesium.client.add_orbit_button.call(null,cesium.client.CAMERA);

cesium.client.mouse_move.call(null);

return cesium.client.clock_settings.call(null,cesium.client.CLOCK,data.point.HEL_CLOCK_SET,cesium.client.VIEWER);
});
cljs.core.enable_console_print_BANG_.call(null);
(window.onload = data.point.init_client.call(null));

//# sourceMappingURL=point.js.map
