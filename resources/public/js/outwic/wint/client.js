// Compiled by ClojureScript 1.10.439 {}
goog.provide('wint.client');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('cognitect.transit');
wint.client.MAP = null;
wint.client.TO_EVENTS = (2000);
wint.client.OBS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
wint.client.by_id = (function wint$client$by_id(id){
return document.getElementById(id);
});
wint.client.read_transit = (function wint$client$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
wint.client.error_handler = (function wint$client$error_handler(resp){
var map__19398 = resp;
var map__19398__$1 = (((((!((map__19398 == null))))?(((((map__19398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19398):map__19398);
var status = cljs.core.get.call(null,map__19398__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__19398__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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
var pred__19400 = cljs.core._EQ_;
var expr__19401 = lmp.call(null,new cljs.core.Keyword(null,"type","type",1174270348));
if(cljs.core.truth_(pred__19400.call(null,new cljs.core.Keyword(null,"Base","Base",-418950037),expr__19401))){
return wint.client.base_layers.call(null);
} else {
if(cljs.core.truth_(pred__19400.call(null,new cljs.core.Keyword(null,"GeoJSON","GeoJSON",33508860),expr__19401))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([lmp.call(null,new cljs.core.Keyword(null,"title","title",636505583)),(new L.GeoJSON.AJAX(lmp.call(null,new cljs.core.Keyword(null,"source","source",-433931539)),cljs.core.clj__GT_js.call(null,lmp.call(null,new cljs.core.Keyword(null,"attributes","attributes",-74013604)))))]);
} else {
if(cljs.core.truth_(pred__19400.call(null,new cljs.core.Keyword(null,"Tile","Tile",1227624978),expr__19401))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([lmp.call(null,new cljs.core.Keyword(null,"title","title",636505583)),L.tileLayer(lmp.call(null,new cljs.core.Keyword(null,"source","source",-433931539)),cljs.core.clj__GT_js.call(null,lmp.call(null,new cljs.core.Keyword(null,"attributes","attributes",-74013604))))]);
} else {
return alert(["Unknown layer class ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lmp.call(null,new cljs.core.Keyword(null,"type","type",1174270348)))].join(''));
}
}
}
});
wint.client.add_heatmap = (function wint$client$add_heatmap(params){
return (new L.heatLayer(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [60.8786,30.3785188667,(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [60.8838,30.3885188667,(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [60.8839,30.3745188667,(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [60.8869090667,30.3657417333,(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [60.8894207167,30.4015351167,(5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [60.8927369333,30.4087452333,(4)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [60.8883536333,30.3888573833,(7)], null)], null)),({"max": 0.01}))).addTo(wint.client.MAP);
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
var seq__19403 = cljs.core.seq.call(null,wint.client.read_transit.call(null,resp));
var chunk__19404 = null;
var count__19405 = (0);
var i__19406 = (0);
while(true){
if((i__19406 < count__19405)){
var map__19407 = cljs.core._nth.call(null,chunk__19404,i__19406);
var map__19407__$1 = (((((!((map__19407 == null))))?(((((map__19407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19407):map__19407);
var evt = map__19407__$1;
var event = cljs.core.get.call(null,map__19407__$1,new cljs.core.Keyword(null,"event","event",301435442));
cljs.core.println.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"EVENTS-HR","EVENTS-HR",1465914618),evt], null));

var pred__19409_19417 = cljs.core._EQ_;
var expr__19410_19418 = event;
if(cljs.core.truth_(pred__19409_19417.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__19410_19418))){
wint.client.add_popup.call(null,evt);
} else {
alert("Unknown event: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,evt], null));
}


var G__19419 = seq__19403;
var G__19420 = chunk__19404;
var G__19421 = count__19405;
var G__19422 = (i__19406 + (1));
seq__19403 = G__19419;
chunk__19404 = G__19420;
count__19405 = G__19421;
i__19406 = G__19422;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__19403);
if(temp__5735__auto__){
var seq__19403__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19403__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__19403__$1);
var G__19423 = cljs.core.chunk_rest.call(null,seq__19403__$1);
var G__19424 = c__4461__auto__;
var G__19425 = cljs.core.count.call(null,c__4461__auto__);
var G__19426 = (0);
seq__19403 = G__19423;
chunk__19404 = G__19424;
count__19405 = G__19425;
i__19406 = G__19426;
continue;
} else {
var map__19412 = cljs.core.first.call(null,seq__19403__$1);
var map__19412__$1 = (((((!((map__19412 == null))))?(((((map__19412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19412):map__19412);
var evt = map__19412__$1;
var event = cljs.core.get.call(null,map__19412__$1,new cljs.core.Keyword(null,"event","event",301435442));
cljs.core.println.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"EVENTS-HR","EVENTS-HR",1465914618),evt], null));

var pred__19414_19427 = cljs.core._EQ_;
var expr__19415_19428 = event;
if(cljs.core.truth_(pred__19414_19427.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__19415_19428))){
wint.client.add_popup.call(null,evt);
} else {
alert("Unknown event: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,evt], null));
}


var G__19429 = cljs.core.next.call(null,seq__19403__$1);
var G__19430 = null;
var G__19431 = (0);
var G__19432 = (0);
seq__19403 = G__19429;
chunk__19404 = G__19430;
count__19405 = G__19431;
i__19406 = G__19432;
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
cljs.core.println.call(null,new cljs.core.Keyword(null,"RMR","RMR",1600693036),mp);

if((!(cljs.core.empty_QMARK_.call(null,mp)))){
var lmps = cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,wint.client.create_layer,mp.call(null,new cljs.core.Keyword(null,"layers","layers",1944875032))));
var flay = cljs.core.second.call(null,cljs.core.first.call(null,lmps));
var lctl = L.control.layers(cljs.core.clj__GT_js.call(null,lmps),null);
wint.client.add_heatmap.call(null,cljs.core.PersistentArrayMap.EMPTY);

flay.addTo(wint.client.MAP);

wint.client.MAP.setView(cljs.core.clj__GT_js.call(null,mp.call(null,new cljs.core.Keyword(null,"center","center",-748944368))),mp.call(null,new cljs.core.Keyword(null,"zoom","zoom",-1827487038)));

(new L.control.mousePosition()).addTo(wint.client.MAP);

return lctl.addTo(wint.client.MAP);
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
cljs.core.enable_console_print_BANG_.call(null);
window.onload = wint.client.init.call(null);
wint.client.request_events.call(null);

//# sourceMappingURL=client.js.map
