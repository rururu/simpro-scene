// Compiled by ClojureScript 1.10.439 {}
goog.provide('cesium.heat.client');
goog.require('cljs.core');
goog.require('cesium.client');
cesium.heat.client.init_heat = (function cesium$heat$client$init_heat(){
cesium.client.add_terrain.call(null,null,cesium.client.VIEWER);

cesium.client.start_event_processing.call(null,cesium.client.VIEWER);

return cesium.client.add_orbit_button.call(null,cesium.client.CAMERA);
});
cesium.heat.client.tst = (function cesium$heat$client$tst(){
var bnds = ({"west": 147.13833844, "east": 147.13856899, "south": -41.43606916, "north": -41.43582929});
var data = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, ["x",147.1383442264,"y",-41.4360048372,"value",(76)], null),new cljs.core.PersistentArrayMap(null, 3, ["x",147.1384363011,"y",-41.4360298848,"value",(63)], null),new cljs.core.PersistentArrayMap(null, 3, ["x",147.138368102,"y",-41.4358360603,"value",(1)], null),new cljs.core.PersistentArrayMap(null, 3, ["x",147.1385627739,"y",-41.4358799123,"value",(21)], null)], null);
var hm = CesiumHeatmap.create(cesium.client.VIEWER,bnds,cljs.core.PersistentArrayMap.EMPTY);
var valmin = (0);
var valmax = (100);
hm.setWGS84Data(valmin,valmax,cljs.core.clj__GT_js.call(null,data));

return cljs.core.println.call(null,new cljs.core.Keyword(null,"HM","HM",-1913844374),data);
});
cljs.core.enable_console_print_BANG_.call(null);
window.onload = cesium.heat.client.init_heat.call(null);
cesium.heat.client.tst.call(null);

//# sourceMappingURL=client.js.map
