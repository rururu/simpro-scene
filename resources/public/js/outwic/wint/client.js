// Compiled by ClojureScript 1.10.439 {}
goog.provide('wint.client');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('cognitect.transit');
goog.require('mvo.move');
wint.client.MAP = null;
wint.client.TO_EVENTS = (2000);
wint.client.TO_MOVE = (200);
wint.client.OBJECTS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
wint.client.MOVERS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
wint.client.DATA = null;
wint.client.T_SCALE = 1.0;
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
var map__29364 = resp;
var map__29364__$1 = (((((!((map__29364 == null))))?(((((map__29364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29364):map__29364);
var status = cljs.core.get.call(null,map__29364__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__29364__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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
var pred__29366 = cljs.core._EQ_;
var expr__29367 = lmp.call(null,new cljs.core.Keyword(null,"type","type",1174270348));
if(cljs.core.truth_(pred__29366.call(null,new cljs.core.Keyword(null,"Base","Base",-418950037),expr__29367))){
return wint.client.base_layers.call(null);
} else {
if(cljs.core.truth_(pred__29366.call(null,new cljs.core.Keyword(null,"GeoJSON","GeoJSON",33508860),expr__29367))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([lmp.call(null,new cljs.core.Keyword(null,"title","title",636505583)),(new L.GeoJSON.AJAX(lmp.call(null,new cljs.core.Keyword(null,"source","source",-433931539)),cljs.core.clj__GT_js.call(null,lmp.call(null,new cljs.core.Keyword(null,"attributes","attributes",-74013604)))))]);
} else {
if(cljs.core.truth_(pred__29366.call(null,new cljs.core.Keyword(null,"Tile","Tile",1227624978),expr__29367))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([lmp.call(null,new cljs.core.Keyword(null,"title","title",636505583)),L.tileLayer(lmp.call(null,new cljs.core.Keyword(null,"source","source",-433931539)),cljs.core.clj__GT_js.call(null,lmp.call(null,new cljs.core.Keyword(null,"attributes","attributes",-74013604))))]);
} else {
return alert(["Unknown layer class ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lmp.call(null,new cljs.core.Keyword(null,"type","type",1174270348)))].join(''));
}
}
}
});
wint.client.remove_layer = (function wint$client$remove_layer(params){
var temp__5733__auto__ = params.call(null,new cljs.core.Keyword(null,"title","title",636505583));
if(cljs.core.truth_(temp__5733__auto__)){
var tit = temp__5733__auto__;
var temp__5735__auto___29369 = cljs.core.deref.call(null,wint.client.OBJECTS).call(null,tit);
if(cljs.core.truth_(temp__5735__auto___29369)){
var lay_29370 = temp__5735__auto___29369;
lay_29370.remove();

cljs.core._vreset_BANG_.call(null,wint.client.OBJECTS,cljs.core.dissoc.call(null,cljs.core._deref.call(null,wint.client.OBJECTS),tit));
} else {
}

var temp__5733__auto____$1 = cljs.core.deref.call(null,wint.client.MOVERS).call(null,tit);
if(cljs.core.truth_(temp__5733__auto____$1)){
var mov = temp__5733__auto____$1;
return cljs.core._vreset_BANG_.call(null,wint.client.MOVERS,cljs.core.dissoc.call(null,cljs.core._deref.call(null,wint.client.MOVERS),mov));
} else {
return null;
}
} else {
return null;
}
});
wint.client.add_path = (function wint$client$add_path(params){
var map__29371 = params;
var map__29371__$1 = (((((!((map__29371 == null))))?(((((map__29371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29371):map__29371);
var title = cljs.core.get.call(null,map__29371__$1,new cljs.core.Keyword(null,"title","title",636505583));
var type = cljs.core.get.call(null,map__29371__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var coord = cljs.core.get.call(null,map__29371__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var options = cljs.core.get.call(null,map__29371__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.truth_(title)){
if(cljs.core.truth_(cljs.core.deref.call(null,wint.client.OBJECTS).call(null,title))){
wint.client.remove_layer.call(null,params);
} else {
}

var ops = cljs.core.clj__GT_js.call(null,options);
var crd = cljs.core.clj__GT_js.call(null,coord);
var lay = (function (){var pred__29373 = cljs.core._EQ_;
var expr__29374 = type;
if(cljs.core.truth_(pred__29373.call(null,new cljs.core.Keyword(null,"polyline","polyline",-1731551044),expr__29374))){
return (new L.polyline(crd,ops));
} else {
if(cljs.core.truth_(pred__29373.call(null,new cljs.core.Keyword(null,"polygon","polygon",837053759),expr__29374))){
return (new L.polygon(crd,ops));
} else {
if(cljs.core.truth_(pred__29373.call(null,new cljs.core.Keyword(null,"rectangle","rectangle",293163262),expr__29374))){
return (new L.rectangle(crd,ops));
} else {
if(cljs.core.truth_(pred__29373.call(null,new cljs.core.Keyword(null,"circle","circle",1903212362),expr__29374))){
return (new L.circle(crd,ops));
} else {
if(cljs.core.truth_(pred__29373.call(null,new cljs.core.Keyword(null,"circle-marker","circle-marker",-241178759),expr__29374))){
return (new L.circleMarker(crd,ops));
} else {
return null;
}
}
}
}
}
})();
if(cljs.core.truth_(lay)){
cljs.core._vreset_BANG_.call(null,wint.client.OBJECTS,cljs.core.assoc.call(null,cljs.core._deref.call(null,wint.client.OBJECTS),title,lay));

return lay.addTo(wint.client.MAP);
} else {
return null;
}
} else {
return null;
}
});
wint.client.add_marker = (function wint$client$add_marker(params){
var map__29376 = params;
var map__29376__$1 = (((((!((map__29376 == null))))?(((((map__29376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29376):map__29376);
var title = cljs.core.get.call(null,map__29376__$1,new cljs.core.Keyword(null,"title","title",636505583));
var coord = cljs.core.get.call(null,map__29376__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var course = cljs.core.get.call(null,map__29376__$1,new cljs.core.Keyword(null,"course","course",1455432948));
var speed = cljs.core.get.call(null,map__29376__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var url = cljs.core.get.call(null,map__29376__$1,new cljs.core.Keyword(null,"url","url",276297046));
var icon_size = cljs.core.get.call(null,map__29376__$1,new cljs.core.Keyword(null,"icon-size","icon-size",414161352));
var draggable = cljs.core.get.call(null,map__29376__$1,new cljs.core.Keyword(null,"draggable","draggable",1676206163));
if(cljs.core.truth_(title)){
if(cljs.core.truth_(cljs.core.deref.call(null,wint.client.OBJECTS).call(null,title))){
wint.client.remove_layer.call(null,params);
} else {
}

var vec__29378 = coord;
var lat = cljs.core.nth.call(null,vec__29378,(0),null);
var lon = cljs.core.nth.call(null,vec__29378,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": url, "iconSize": (function (){var or__4047__auto__ = cljs.core.clj__GT_js.call(null,icon_size);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return [(32),(32)];
}
})()}));
var ops = ({"title": title, "icon": ico, "rotationAngle": course, "rotationOrigin": "center center", "draggable": (function (){var or__4047__auto__ = cljs.core.clj__GT_js.call(null,draggable);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return true;
}
})()});
var mrk = (new L.marker(pos,ops));
cljs.core._vreset_BANG_.call(null,wint.client.OBJECTS,cljs.core.assoc.call(null,cljs.core._deref.call(null,wint.client.OBJECTS),title,mrk));

if(cljs.core.truth_(speed)){
cljs.core._vreset_BANG_.call(null,wint.client.MOVERS,cljs.core.assoc.call(null,cljs.core._deref.call(null,wint.client.MOVERS),title,mvo.move.create_mover.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lon], null),course,speed,mrk)));
} else {
}

mrk.addTo(wint.client.MAP);

return mrk;
} else {
return null;
}
});
wint.client.add_heatmap = (function wint$client$add_heatmap(params){
var map__29381 = params;
var map__29381__$1 = (((((!((map__29381 == null))))?(((((map__29381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29381):map__29381);
var title = cljs.core.get.call(null,map__29381__$1,new cljs.core.Keyword(null,"title","title",636505583));
var data = cljs.core.get.call(null,map__29381__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var options = cljs.core.get.call(null,map__29381__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.truth_(title)){
if(cljs.core.truth_(cljs.core.deref.call(null,wint.client.OBJECTS).call(null,title))){
wint.client.remove_layer.call(null,params);
} else {
}

var data__$1 = cljs.core.clj__GT_js.call(null,data);
var lay = (new HeatmapOverlay(cljs.core.clj__GT_js.call(null,options)));
wint.client.DATA = data__$1;

cljs.core._vreset_BANG_.call(null,wint.client.OBJECTS,cljs.core.assoc.call(null,cljs.core._deref.call(null,wint.client.OBJECTS),title,lay));

lay.addTo(wint.client.MAP);

return lay.setData(data__$1);
} else {
return null;
}
});
wint.client.add_popup = (function wint$client$add_popup(params){
var map__29383 = params;
var map__29383__$1 = (((((!((map__29383 == null))))?(((((map__29383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29383):map__29383);
var lat = cljs.core.get.call(null,map__29383__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__29383__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html = cljs.core.get.call(null,map__29383__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var pos = (cljs.core.truth_((function (){var and__4036__auto__ = lat;
if(cljs.core.truth_(and__4036__auto__)){
return lon;
} else {
return and__4036__auto__;
}
})())?[lat,lon]:wint.client.MAP.getCenter());
return wint.client.MAP.addLayer((new L.popup(({}))).setLatLng(pos).setContent(html));
});
wint.client.set_time_scale = (function wint$client$set_time_scale(params){
wint.client.T_SCALE = params.call(null,new cljs.core.Keyword(null,"time-scale","time-scale",-650198100));

return mvo.move.set_timeout_hrs.call(null,wint.client.TO_MOVE,wint.client.T_SCALE);
});
wint.client.move_control = (function wint$client$move_control(params){
var map__29385 = params;
var map__29385__$1 = (((((!((map__29385 == null))))?(((((map__29385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29385):map__29385);
var title = cljs.core.get.call(null,map__29385__$1,new cljs.core.Keyword(null,"title","title",636505583));
var coord = cljs.core.get.call(null,map__29385__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var course = cljs.core.get.call(null,map__29385__$1,new cljs.core.Keyword(null,"course","course",1455432948));
var speed = cljs.core.get.call(null,map__29385__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var temp__5735__auto__ = cljs.core.deref.call(null,wint.client.MOVERS).call(null,title);
if(cljs.core.truth_(temp__5735__auto__)){
var mv = temp__5735__auto__;
if(cljs.core.truth_(coord)){
mvo.move.set_coord.call(null,mv,coord);
} else {
}

if(cljs.core.truth_(course)){
mvo.move.set_course.call(null,mv,course);
} else {
}

if(cljs.core.truth_(speed)){
return mvo.move.set_speed.call(null,mv,speed);
} else {
return null;
}
} else {
return null;
}
});
wint.client.events_hr = (function wint$client$events_hr(resp){
var seq__29387 = cljs.core.seq.call(null,wint.client.read_transit.call(null,resp));
var chunk__29388 = null;
var count__29389 = (0);
var i__29390 = (0);
while(true){
if((i__29390 < count__29389)){
var map__29391 = cljs.core._nth.call(null,chunk__29388,i__29390);
var map__29391__$1 = (((((!((map__29391 == null))))?(((((map__29391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29391):map__29391);
var evt = map__29391__$1;
var event = cljs.core.get.call(null,map__29391__$1,new cljs.core.Keyword(null,"event","event",301435442));
var pred__29393_29401 = cljs.core._EQ_;
var expr__29394_29402 = event;
if(cljs.core.truth_(pred__29393_29401.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__29394_29402))){
wint.client.add_path.call(null,evt);
} else {
if(cljs.core.truth_(pred__29393_29401.call(null,new cljs.core.Keyword(null,"marker","marker",865118313),expr__29394_29402))){
wint.client.add_marker.call(null,evt);
} else {
if(cljs.core.truth_(pred__29393_29401.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__29394_29402))){
wint.client.add_popup.call(null,evt);
} else {
if(cljs.core.truth_(pred__29393_29401.call(null,new cljs.core.Keyword(null,"heatmap","heatmap",-7865851),expr__29394_29402))){
wint.client.add_heatmap.call(null,evt);
} else {
if(cljs.core.truth_(pred__29393_29401.call(null,new cljs.core.Keyword(null,"remove","remove",-131428414),expr__29394_29402))){
wint.client.remove_layer.call(null,evt);
} else {
if(cljs.core.truth_(pred__29393_29401.call(null,new cljs.core.Keyword(null,"time-scale","time-scale",-650198100),expr__29394_29402))){
wint.client.set_time_scale.call(null,evt);
} else {
if(cljs.core.truth_(pred__29393_29401.call(null,new cljs.core.Keyword(null,"move","move",-2110884309),expr__29394_29402))){
wint.client.move_control.call(null,evt);
} else {
alert("Unknown event: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,evt], null));
}
}
}
}
}
}
}


var G__29403 = seq__29387;
var G__29404 = chunk__29388;
var G__29405 = count__29389;
var G__29406 = (i__29390 + (1));
seq__29387 = G__29403;
chunk__29388 = G__29404;
count__29389 = G__29405;
i__29390 = G__29406;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__29387);
if(temp__5735__auto__){
var seq__29387__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29387__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__29387__$1);
var G__29407 = cljs.core.chunk_rest.call(null,seq__29387__$1);
var G__29408 = c__4461__auto__;
var G__29409 = cljs.core.count.call(null,c__4461__auto__);
var G__29410 = (0);
seq__29387 = G__29407;
chunk__29388 = G__29408;
count__29389 = G__29409;
i__29390 = G__29410;
continue;
} else {
var map__29396 = cljs.core.first.call(null,seq__29387__$1);
var map__29396__$1 = (((((!((map__29396 == null))))?(((((map__29396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29396):map__29396);
var evt = map__29396__$1;
var event = cljs.core.get.call(null,map__29396__$1,new cljs.core.Keyword(null,"event","event",301435442));
var pred__29398_29411 = cljs.core._EQ_;
var expr__29399_29412 = event;
if(cljs.core.truth_(pred__29398_29411.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__29399_29412))){
wint.client.add_path.call(null,evt);
} else {
if(cljs.core.truth_(pred__29398_29411.call(null,new cljs.core.Keyword(null,"marker","marker",865118313),expr__29399_29412))){
wint.client.add_marker.call(null,evt);
} else {
if(cljs.core.truth_(pred__29398_29411.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__29399_29412))){
wint.client.add_popup.call(null,evt);
} else {
if(cljs.core.truth_(pred__29398_29411.call(null,new cljs.core.Keyword(null,"heatmap","heatmap",-7865851),expr__29399_29412))){
wint.client.add_heatmap.call(null,evt);
} else {
if(cljs.core.truth_(pred__29398_29411.call(null,new cljs.core.Keyword(null,"remove","remove",-131428414),expr__29399_29412))){
wint.client.remove_layer.call(null,evt);
} else {
if(cljs.core.truth_(pred__29398_29411.call(null,new cljs.core.Keyword(null,"time-scale","time-scale",-650198100),expr__29399_29412))){
wint.client.set_time_scale.call(null,evt);
} else {
if(cljs.core.truth_(pred__29398_29411.call(null,new cljs.core.Keyword(null,"move","move",-2110884309),expr__29399_29412))){
wint.client.move_control.call(null,evt);
} else {
alert("Unknown event: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,evt], null));
}
}
}
}
}
}
}


var G__29413 = cljs.core.next.call(null,seq__29387__$1);
var G__29414 = null;
var G__29415 = (0);
var G__29416 = (0);
seq__29387 = G__29413;
chunk__29388 = G__29414;
count__29389 = G__29415;
i__29390 = G__29416;
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

if(((cljs.core.map_QMARK_.call(null,mp)) && ((!(cljs.core.empty_QMARK_.call(null,mp)))))){
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
return wint.client.add_popup.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"html","html",-998796897),["<h1>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mp),"</h1>"].join('')], null));
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
wint.client.move_markers = (function wint$client$move_markers(){
var seq__29417_29427 = cljs.core.seq.call(null,cljs.core.deref.call(null,wint.client.MOVERS));
var chunk__29418_29428 = null;
var count__29419_29429 = (0);
var i__29420_29430 = (0);
while(true){
if((i__29420_29430 < count__29419_29429)){
var vec__29421_29431 = cljs.core._nth.call(null,chunk__29418_29428,i__29420_29430);
var n_29432 = cljs.core.nth.call(null,vec__29421_29431,(0),null);
var m_29433 = cljs.core.nth.call(null,vec__29421_29431,(1),null);
mvo.move.move.call(null,m_29433);


var G__29434 = seq__29417_29427;
var G__29435 = chunk__29418_29428;
var G__29436 = count__29419_29429;
var G__29437 = (i__29420_29430 + (1));
seq__29417_29427 = G__29434;
chunk__29418_29428 = G__29435;
count__29419_29429 = G__29436;
i__29420_29430 = G__29437;
continue;
} else {
var temp__5735__auto___29438 = cljs.core.seq.call(null,seq__29417_29427);
if(temp__5735__auto___29438){
var seq__29417_29439__$1 = temp__5735__auto___29438;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29417_29439__$1)){
var c__4461__auto___29440 = cljs.core.chunk_first.call(null,seq__29417_29439__$1);
var G__29441 = cljs.core.chunk_rest.call(null,seq__29417_29439__$1);
var G__29442 = c__4461__auto___29440;
var G__29443 = cljs.core.count.call(null,c__4461__auto___29440);
var G__29444 = (0);
seq__29417_29427 = G__29441;
chunk__29418_29428 = G__29442;
count__29419_29429 = G__29443;
i__29420_29430 = G__29444;
continue;
} else {
var vec__29424_29445 = cljs.core.first.call(null,seq__29417_29439__$1);
var n_29446 = cljs.core.nth.call(null,vec__29424_29445,(0),null);
var m_29447 = cljs.core.nth.call(null,vec__29424_29445,(1),null);
mvo.move.move.call(null,m_29447);


var G__29448 = cljs.core.next.call(null,seq__29417_29439__$1);
var G__29449 = null;
var G__29450 = (0);
var G__29451 = (0);
seq__29417_29427 = G__29448;
chunk__29418_29428 = G__29449;
count__29419_29429 = G__29450;
i__29420_29430 = G__29451;
continue;
}
} else {
}
}
break;
}

return setTimeout(wint.client.move_markers,wint.client.TO_MOVE);
});
wint.client.tst = (function wint$client$tst(){
return wint.client.add_heatmap.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"hm1",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max","max",61366548),(8),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lat","lat",-580793929),(60),new cljs.core.Keyword(null,"lng","lng",1667213918),(30),new cljs.core.Keyword(null,"value","value",305978217),(8)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lat","lat",-580793929),(63),new cljs.core.Keyword(null,"lng","lng",1667213918),(30),new cljs.core.Keyword(null,"value","value",305978217),(6)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lat","lat",-580793929),(66),new cljs.core.Keyword(null,"lng","lng",1667213918),(30),new cljs.core.Keyword(null,"value","value",305978217),(3)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lat","lat",-580793929),(69),new cljs.core.Keyword(null,"lng","lng",1667213918),(30),new cljs.core.Keyword(null,"value","value",305978217),(1)], null)], null)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scaleRadius","scaleRadius",-59738660),true,new cljs.core.Keyword(null,"radius","radius",-2073122258),(2),new cljs.core.Keyword(null,"useLocalExtrema","useLocalExtrema",1349969296),true], null)], null));
});
cljs.core.enable_console_print_BANG_.call(null);
window.onload = wint.client.init.call(null);
wint.client.request_events.call(null);
mvo.move.set_timeout_hrs.call(null,wint.client.TO_MOVE,wint.client.T_SCALE);
wint.client.move_markers.call(null);

//# sourceMappingURL=client.js.map
