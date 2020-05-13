// Compiled by ClojureScript 1.10.439 {}
goog.provide('cesium.heat.client');
goog.require('cljs.core');
goog.require('cesium.client');
cesium.heat.client.MY_HOME_VIEW = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"latitude","latitude",394867543),60.0,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),30.15,new cljs.core.Keyword(null,"height","height",1025178622),(2000),new cljs.core.Keyword(null,"heading","heading",-1312171873),(130),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(-15),new cljs.core.Keyword(null,"roll","roll",11266999),(0)], null);
cesium.heat.client.HEATMAP = null;
cesium.heat.client.DATA = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [30.278,59.971,(5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [30.395,59.956,(7)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [30.252,59.917,(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [30.343,59.919,(6)], null)], null);
cesium.heat.client.BOUNDS = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"west","west",708776677),30.252,new cljs.core.Keyword(null,"east","east",1189821678),30.395,new cljs.core.Keyword(null,"south","south",1586796293),59.917,new cljs.core.Keyword(null,"north","north",651323902),59.971], null);
cesium.heat.client.OPTIONS = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"radius","radius",-2073122258),(600),new cljs.core.Keyword(null,"maxOpacity","maxOpacity",-33085019),0.8,new cljs.core.Keyword(null,"scaleRadius","scaleRadius",-59738660),false,new cljs.core.Keyword(null,"blur","blur",-453500461),0.85,new cljs.core.Keyword(null,"useLocalExtrema","useLocalExtrema",1349969296),false], null);
cesium.heat.client.heatmap_init = (function cesium$heat$client$heatmap_init(bounds,options){
return (
cesium.heat.client.HEATMAP = CesiumHeatmap.create(cesium.client.VIEWER,cljs.core.clj__GT_js.call(null,bounds),cljs.core.clj__GT_js.call(null,options)))
;
});
cesium.heat.client.heatmap_data = (function cesium$heat$client$heatmap_data(valmin,valmax,data){
return cesium.heat.client.HEATMAP.setWGS84Data(valmin,valmax,cljs.core.clj__GT_js.call(null,(function (){var iter__4434__auto__ = (function cesium$heat$client$heatmap_data_$_iter__14479(s__14480){
return (new cljs.core.LazySeq(null,(function (){
var s__14480__$1 = s__14480;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__14480__$1);
if(temp__5735__auto__){
var s__14480__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14480__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__14480__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__14482 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__14481 = (0);
while(true){
if((i__14481 < size__4433__auto__)){
var vec__14483 = cljs.core._nth.call(null,c__4432__auto__,i__14481);
var x = cljs.core.nth.call(null,vec__14483,(0),null);
var y = cljs.core.nth.call(null,vec__14483,(1),null);
var v = cljs.core.nth.call(null,vec__14483,(2),null);
cljs.core.chunk_append.call(null,b__14482,cljs.core.PersistentHashMap.fromArrays(["x","y","value"],[x,y,v]));

var G__14489 = (i__14481 + (1));
i__14481 = G__14489;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14482),cesium$heat$client$heatmap_data_$_iter__14479.call(null,cljs.core.chunk_rest.call(null,s__14480__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14482),null);
}
} else {
var vec__14486 = cljs.core.first.call(null,s__14480__$2);
var x = cljs.core.nth.call(null,vec__14486,(0),null);
var y = cljs.core.nth.call(null,vec__14486,(1),null);
var v = cljs.core.nth.call(null,vec__14486,(2),null);
return cljs.core.cons.call(null,cljs.core.PersistentHashMap.fromArrays(["x","y","value"],[x,y,v]),cesium$heat$client$heatmap_data_$_iter__14479.call(null,cljs.core.rest.call(null,s__14480__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,data);
})()));
});
cesium.heat.client.init_heat = (function cesium$heat$client$init_heat(){
cesium.client.add_terrain.call(null,null,cesium.client.VIEWER);

cesium.client.camera_home.call(null,cesium.client.CAMERA,cesium.heat.client.MY_HOME_VIEW);

cesium.client.start_event_processing.call(null,cesium.client.VIEWER);

return cesium.client.add_orbit_button.call(null,cesium.client.CAMERA);
});
cljs.core.enable_console_print_BANG_.call(null);
window.onload = cesium.heat.client.init_heat.call(null);
cesium.heat.client.heatmap_init.call(null,cesium.heat.client.BOUNDS,cesium.heat.client.OPTIONS);
cesium.heat.client.heatmap_data.call(null,(0),(8),cesium.heat.client.DATA);

//# sourceMappingURL=client.js.map
