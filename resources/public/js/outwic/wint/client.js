// Compiled by ClojureScript 1.10.439 {}
goog.provide('wint.client');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('cognitect.transit');
wint.client.MAP = null;
wint.client.TO_EVENTS = (2000);
wint.client.OBS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
wint.client.DATA = null;
wint.client.by_id = (function wint$client$by_id(id){
return document.getElementById(id);
});
wint.client.set_html_BANG_ = (function wint$client$set_html_BANG_(id,html){
return wint.client.by_id.call(null,id).innerHTML = html;
});
wint.client.read_transit = (function wint$client$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
wint.client.error_handler = (function wint$client$error_handler(resp){
var map__16390 = resp;
var map__16390__$1 = (((((!((map__16390 == null))))?(((((map__16390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16390.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16390):map__16390);
var status = cljs.core.get.call(null,map__16390__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__16390__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,"AJAX ERROR:",status,status_text);
});
wint.client.base_layers = (function wint$client$base_layers(){
var tile1 = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png",({"maxZoom": (20), "attribution": "Ru, OpenStreetMap &copy;"}));
var tile2 = L.tileLayer("http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var tile3 = L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var tile4 = L.tileLayer("http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var tile5 = L.tileLayer("http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
return new cljs.core.PersistentArrayMap(null, 5, ["OpenStreetMap",tile1,"Google Satellite",tile2,"Google Streets",tile3,"Google Hybrid",tile4,"Google Terrain",tile5], null);
});
wint.client.create_layer = (function wint$client$create_layer(lmp){
var pred__16392 = cljs.core._EQ_;
var expr__16393 = lmp.call(null,new cljs.core.Keyword(null,"type","type",1174270348));
if(cljs.core.truth_(pred__16392.call(null,new cljs.core.Keyword(null,"Base","Base",-418950037),expr__16393))){
return wint.client.base_layers.call(null);
} else {
if(cljs.core.truth_(pred__16392.call(null,new cljs.core.Keyword(null,"GeoJSON","GeoJSON",33508860),expr__16393))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([lmp.call(null,new cljs.core.Keyword(null,"title","title",636505583)),(new L.GeoJSON.AJAX(lmp.call(null,new cljs.core.Keyword(null,"source","source",-433931539)),cljs.core.clj__GT_js.call(null,lmp.call(null,new cljs.core.Keyword(null,"attributes","attributes",-74013604)))))]);
} else {
if(cljs.core.truth_(pred__16392.call(null,new cljs.core.Keyword(null,"Tile","Tile",1227624978),expr__16393))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([lmp.call(null,new cljs.core.Keyword(null,"title","title",636505583)),L.tileLayer(lmp.call(null,new cljs.core.Keyword(null,"source","source",-433931539)),cljs.core.clj__GT_js.call(null,lmp.call(null,new cljs.core.Keyword(null,"attributes","attributes",-74013604))))]);
} else {
return alert(["Unknown layer class ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lmp.call(null,new cljs.core.Keyword(null,"type","type",1174270348)))].join(''));
}
}
}
});
wint.client.add_heatmap = (function wint$client$add_heatmap(params){
var temp__5733__auto__ = params.call(null,new cljs.core.Keyword(null,"title","title",636505583));
if(cljs.core.truth_(temp__5733__auto__)){
var tit = temp__5733__auto__;
var data = cljs.core.clj__GT_js.call(null,params.call(null,new cljs.core.Keyword(null,"data","data",-232669377)));
var ops = cljs.core.clj__GT_js.call(null,params.call(null,new cljs.core.Keyword(null,"options","options",99638489)));
var lay = (new HeatmapOverlay(ops));
wint.client.DATA = data;

cljs.core._vreset_BANG_.call(null,wint.client.OBS,cljs.core.assoc.call(null,cljs.core._deref.call(null,wint.client.OBS),tit,lay));

lay.addTo(wint.client.MAP);

return lay.setData(data);
} else {
return null;
}
});
wint.client.remove_layer = (function wint$client$remove_layer(params){
var temp__5733__auto__ = params.call(null,new cljs.core.Keyword(null,"title","title",636505583));
if(cljs.core.truth_(temp__5733__auto__)){
var tit = temp__5733__auto__;
var temp__5735__auto__ = cljs.core.deref.call(null,wint.client.OBS).call(null,tit);
if(cljs.core.truth_(temp__5735__auto__)){
var lay = temp__5735__auto__;
lay.remove();

return cljs.core._vreset_BANG_.call(null,wint.client.OBS,cljs.core.dissoc.call(null,cljs.core._deref.call(null,wint.client.OBS),tit));
} else {
return null;
}
} else {
return null;
}
});
wint.client.add_popup = (function wint$client$add_popup(params){
var lat = params.call(null,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = params.call(null,new cljs.core.Keyword(null,"lon","lon",522068437));
var pos = (cljs.core.truth_((function (){var and__4036__auto__ = lat;
if(cljs.core.truth_(and__4036__auto__)){
return lon;
} else {
return and__4036__auto__;
}
})())?[lat,lon]:wint.client.MAP.getCenter());
return wint.client.MAP.addLayer((new L.popup(({}))).setLatLng(pos).setContent(params.call(null,new cljs.core.Keyword(null,"html","html",-998796897))));
});
wint.client.events_hr = (function wint$client$events_hr(resp){
var seq__16395 = cljs.core.seq.call(null,wint.client.read_transit.call(null,resp));
var chunk__16396 = null;
var count__16397 = (0);
var i__16398 = (0);
while(true){
if((i__16398 < count__16397)){
var map__16399 = cljs.core._nth.call(null,chunk__16396,i__16398);
var map__16399__$1 = (((((!((map__16399 == null))))?(((((map__16399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16399):map__16399);
var evt = map__16399__$1;
var event = cljs.core.get.call(null,map__16399__$1,new cljs.core.Keyword(null,"event","event",301435442));
var pred__16401_16409 = cljs.core._EQ_;
var expr__16402_16410 = event;
if(cljs.core.truth_(pred__16401_16409.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__16402_16410))){
wint.client.add_popup.call(null,evt);
} else {
if(cljs.core.truth_(pred__16401_16409.call(null,new cljs.core.Keyword(null,"heatmap","heatmap",-7865851),expr__16402_16410))){
wint.client.add_heatmap.call(null,evt);
} else {
if(cljs.core.truth_(pred__16401_16409.call(null,new cljs.core.Keyword(null,"remove","remove",-131428414),expr__16402_16410))){
wint.client.remove_layer.call(null,evt);
} else {
alert("Unknown event: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,evt], null));
}
}
}


var G__16411 = seq__16395;
var G__16412 = chunk__16396;
var G__16413 = count__16397;
var G__16414 = (i__16398 + (1));
seq__16395 = G__16411;
chunk__16396 = G__16412;
count__16397 = G__16413;
i__16398 = G__16414;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__16395);
if(temp__5735__auto__){
var seq__16395__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16395__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__16395__$1);
var G__16415 = cljs.core.chunk_rest.call(null,seq__16395__$1);
var G__16416 = c__4461__auto__;
var G__16417 = cljs.core.count.call(null,c__4461__auto__);
var G__16418 = (0);
seq__16395 = G__16415;
chunk__16396 = G__16416;
count__16397 = G__16417;
i__16398 = G__16418;
continue;
} else {
var map__16404 = cljs.core.first.call(null,seq__16395__$1);
var map__16404__$1 = (((((!((map__16404 == null))))?(((((map__16404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16404):map__16404);
var evt = map__16404__$1;
var event = cljs.core.get.call(null,map__16404__$1,new cljs.core.Keyword(null,"event","event",301435442));
var pred__16406_16419 = cljs.core._EQ_;
var expr__16407_16420 = event;
if(cljs.core.truth_(pred__16406_16419.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__16407_16420))){
wint.client.add_popup.call(null,evt);
} else {
if(cljs.core.truth_(pred__16406_16419.call(null,new cljs.core.Keyword(null,"heatmap","heatmap",-7865851),expr__16407_16420))){
wint.client.add_heatmap.call(null,evt);
} else {
if(cljs.core.truth_(pred__16406_16419.call(null,new cljs.core.Keyword(null,"remove","remove",-131428414),expr__16407_16420))){
wint.client.remove_layer.call(null,evt);
} else {
alert("Unknown event: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,evt], null));
}
}
}


var G__16421 = cljs.core.next.call(null,seq__16395__$1);
var G__16422 = null;
var G__16423 = (0);
var G__16424 = (0);
seq__16395 = G__16421;
chunk__16396 = G__16422;
count__16397 = G__16423;
i__16398 = G__16424;
continue;
}
} else {
return null;
}
}
break;
}
});
wint.client.request_events = (function wint$client$request_events(){
ajax.core.GET.call(null,"/events",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),wint.client.events_hr,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),wint.client.error_handler], null));

return setTimeout(wint.client.request_events,wint.client.TO_EVENTS);
});
wint.client.map_hr = (function wint$client$map_hr(resp){
var mp = wint.client.read_transit.call(null,resp);
if((!(cljs.core.empty_QMARK_.call(null,mp)))){
var lmps = cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,wint.client.create_layer,mp.call(null,new cljs.core.Keyword(null,"layers","layers",1944875032))));
var flay = cljs.core.second.call(null,cljs.core.first.call(null,lmps));
var lctl = L.control.layers(cljs.core.clj__GT_js.call(null,lmps),null);
var fzoom = ((function (lmps,flay,lctl,mp){
return (function (){
return wint.client.set_html_BANG_.call(null,"zoom",["zoom ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wint.client.MAP.getZoom())].join(''));
});})(lmps,flay,lctl,mp))
;
wint.client.add_heatmap.call(null,cljs.core.PersistentArrayMap.EMPTY);

flay.addTo(wint.client.MAP);

wint.client.MAP.setView(cljs.core.clj__GT_js.call(null,mp.call(null,new cljs.core.Keyword(null,"center","center",-748944368))),mp.call(null,new cljs.core.Keyword(null,"zoom","zoom",-1827487038)));

(new L.control.mousePosition()).addTo(wint.client.MAP);

lctl.addTo(wint.client.MAP);

fzoom.call(null);

return wint.client.MAP.on("zoomend",fzoom);
} else {
return null;
}
});
wint.client.request_map = (function wint$client$request_map(){
return ajax.core.GET.call(null,"/map",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),wint.client.map_hr,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),wint.client.error_handler], null));
});
wint.client.init = (function wint$client$init(){
wint.client.MAP = L.map("MAP");

wint.client.MAP.setView([(0),(0)],(4));

if(cljs.core.truth_(wint.client.by_id.call(null,"LEFT"))){
L.control.sidebar("LEFT",({"position": "left"})).addTo(wint.client.MAP);
} else {
}

if(cljs.core.truth_(wint.client.by_id.call(null,"RIGHT"))){
L.control.sidebar("RIGHT",({"position": "right"})).addTo(wint.client.MAP);
} else {
}

return wint.client.request_map.call(null);
});
wint.client.tst = (function wint$client$tst(){
return wint.client.add_heatmap.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"hm1",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max","max",61366548),(8),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lat","lat",-580793929),(60),new cljs.core.Keyword(null,"lng","lng",1667213918),(30),new cljs.core.Keyword(null,"value","value",305978217),(8)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lat","lat",-580793929),(63),new cljs.core.Keyword(null,"lng","lng",1667213918),(30),new cljs.core.Keyword(null,"value","value",305978217),(6)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lat","lat",-580793929),(66),new cljs.core.Keyword(null,"lng","lng",1667213918),(30),new cljs.core.Keyword(null,"value","value",305978217),(3)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lat","lat",-580793929),(69),new cljs.core.Keyword(null,"lng","lng",1667213918),(30),new cljs.core.Keyword(null,"value","value",305978217),(1)], null)], null)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scaleRadius","scaleRadius",-59738660),true,new cljs.core.Keyword(null,"radius","radius",-2073122258),(2),new cljs.core.Keyword(null,"useLocalExtrema","useLocalExtrema",1349969296),true], null)], null));
});
cljs.core.enable_console_print_BANG_.call(null);
window.onload = wint.client.init.call(null);
wint.client.request_events.call(null);

//# sourceMappingURL=client.js.map
