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
var map__944 = resp;
var map__944__$1 = (((((!((map__944 == null))))?(((((map__944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__944):map__944);
var status = cljs.core.get.call(null,map__944__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__944__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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
var pred__946 = cljs.core._EQ_;
var expr__947 = lmp.call(null,new cljs.core.Keyword(null,"type","type",1174270348));
if(cljs.core.truth_(pred__946.call(null,new cljs.core.Keyword(null,"Base","Base",-418950037),expr__947))){
return wint.client.base_layers.call(null);
} else {
if(cljs.core.truth_(pred__946.call(null,new cljs.core.Keyword(null,"GeoJSON","GeoJSON",33508860),expr__947))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([lmp.call(null,new cljs.core.Keyword(null,"title","title",636505583)),(new L.GeoJSON.AJAX(lmp.call(null,new cljs.core.Keyword(null,"source","source",-433931539)),cljs.core.clj__GT_js.call(null,lmp.call(null,new cljs.core.Keyword(null,"attributes","attributes",-74013604)))))]);
} else {
if(cljs.core.truth_(pred__946.call(null,new cljs.core.Keyword(null,"Tile","Tile",1227624978),expr__947))){
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
var temp__5735__auto___949 = cljs.core.deref.call(null,wint.client.OBJECTS).call(null,tit);
if(cljs.core.truth_(temp__5735__auto___949)){
var lay_950 = temp__5735__auto___949;
lay_950.remove();

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
var map__951 = params;
var map__951__$1 = (((((!((map__951 == null))))?(((((map__951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__951):map__951);
var title = cljs.core.get.call(null,map__951__$1,new cljs.core.Keyword(null,"title","title",636505583));
var type = cljs.core.get.call(null,map__951__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var coord = cljs.core.get.call(null,map__951__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var options = cljs.core.get.call(null,map__951__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.truth_(title)){
if(cljs.core.truth_(cljs.core.deref.call(null,wint.client.OBJECTS).call(null,title))){
wint.client.remove_layer.call(null,params);
} else {
}

var ops = cljs.core.clj__GT_js.call(null,options);
var crd = cljs.core.clj__GT_js.call(null,coord);
var lay = (function (){var pred__953 = cljs.core._EQ_;
var expr__954 = type;
if(cljs.core.truth_(pred__953.call(null,new cljs.core.Keyword(null,"polyline","polyline",-1731551044),expr__954))){
return (new L.polyline(crd,ops));
} else {
if(cljs.core.truth_(pred__953.call(null,new cljs.core.Keyword(null,"polygon","polygon",837053759),expr__954))){
return (new L.polygon(crd,ops));
} else {
if(cljs.core.truth_(pred__953.call(null,new cljs.core.Keyword(null,"rectangle","rectangle",293163262),expr__954))){
return (new L.rectangle(crd,ops));
} else {
if(cljs.core.truth_(pred__953.call(null,new cljs.core.Keyword(null,"circle","circle",1903212362),expr__954))){
return (new L.circle(crd,ops));
} else {
if(cljs.core.truth_(pred__953.call(null,new cljs.core.Keyword(null,"circle-marker","circle-marker",-241178759),expr__954))){
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
var map__956 = params;
var map__956__$1 = (((((!((map__956 == null))))?(((((map__956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__956):map__956);
var title = cljs.core.get.call(null,map__956__$1,new cljs.core.Keyword(null,"title","title",636505583));
var coord = cljs.core.get.call(null,map__956__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var course = cljs.core.get.call(null,map__956__$1,new cljs.core.Keyword(null,"course","course",1455432948));
var speed = cljs.core.get.call(null,map__956__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var url = cljs.core.get.call(null,map__956__$1,new cljs.core.Keyword(null,"url","url",276297046));
var icon_size = cljs.core.get.call(null,map__956__$1,new cljs.core.Keyword(null,"icon-size","icon-size",414161352));
var draggable = cljs.core.get.call(null,map__956__$1,new cljs.core.Keyword(null,"draggable","draggable",1676206163));
if(cljs.core.truth_(title)){
if(cljs.core.truth_(cljs.core.deref.call(null,wint.client.OBJECTS).call(null,title))){
wint.client.remove_layer.call(null,params);
} else {
}

var vec__958 = coord;
var lat = cljs.core.nth.call(null,vec__958,(0),null);
var lon = cljs.core.nth.call(null,vec__958,(1),null);
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
var map__961 = params;
var map__961__$1 = (((((!((map__961 == null))))?(((((map__961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__961):map__961);
var title = cljs.core.get.call(null,map__961__$1,new cljs.core.Keyword(null,"title","title",636505583));
var data = cljs.core.get.call(null,map__961__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var options = cljs.core.get.call(null,map__961__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var map__963 = params;
var map__963__$1 = (((((!((map__963 == null))))?(((((map__963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__963):map__963);
var lat = cljs.core.get.call(null,map__963__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__963__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html = cljs.core.get.call(null,map__963__$1,new cljs.core.Keyword(null,"html","html",-998796897));
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
var map__965 = params;
var map__965__$1 = (((((!((map__965 == null))))?(((((map__965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__965):map__965);
var title = cljs.core.get.call(null,map__965__$1,new cljs.core.Keyword(null,"title","title",636505583));
var coord = cljs.core.get.call(null,map__965__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var course = cljs.core.get.call(null,map__965__$1,new cljs.core.Keyword(null,"course","course",1455432948));
var speed = cljs.core.get.call(null,map__965__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
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
var seq__967 = cljs.core.seq.call(null,wint.client.read_transit.call(null,resp));
var chunk__968 = null;
var count__969 = (0);
var i__970 = (0);
while(true){
if((i__970 < count__969)){
var map__971 = cljs.core._nth.call(null,chunk__968,i__970);
var map__971__$1 = (((((!((map__971 == null))))?(((((map__971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__971):map__971);
var evt = map__971__$1;
var event = cljs.core.get.call(null,map__971__$1,new cljs.core.Keyword(null,"event","event",301435442));
cljs.core.println.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"EVENTS-HR","EVENTS-HR",1465914618),evt], null));

var pred__973_981 = cljs.core._EQ_;
var expr__974_982 = event;
if(cljs.core.truth_(pred__973_981.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__974_982))){
wint.client.add_path.call(null,evt);
} else {
if(cljs.core.truth_(pred__973_981.call(null,new cljs.core.Keyword(null,"marker","marker",865118313),expr__974_982))){
wint.client.add_marker.call(null,evt);
} else {
if(cljs.core.truth_(pred__973_981.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__974_982))){
wint.client.add_popup.call(null,evt);
} else {
if(cljs.core.truth_(pred__973_981.call(null,new cljs.core.Keyword(null,"heatmap","heatmap",-7865851),expr__974_982))){
wint.client.add_heatmap.call(null,evt);
} else {
if(cljs.core.truth_(pred__973_981.call(null,new cljs.core.Keyword(null,"remove","remove",-131428414),expr__974_982))){
wint.client.remove_layer.call(null,evt);
} else {
if(cljs.core.truth_(pred__973_981.call(null,new cljs.core.Keyword(null,"time-scale","time-scale",-650198100),expr__974_982))){
wint.client.set_time_scale.call(null,evt);
} else {
if(cljs.core.truth_(pred__973_981.call(null,new cljs.core.Keyword(null,"move","move",-2110884309),expr__974_982))){
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


var G__983 = seq__967;
var G__984 = chunk__968;
var G__985 = count__969;
var G__986 = (i__970 + (1));
seq__967 = G__983;
chunk__968 = G__984;
count__969 = G__985;
i__970 = G__986;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__967);
if(temp__5735__auto__){
var seq__967__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__967__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__967__$1);
var G__987 = cljs.core.chunk_rest.call(null,seq__967__$1);
var G__988 = c__4461__auto__;
var G__989 = cljs.core.count.call(null,c__4461__auto__);
var G__990 = (0);
seq__967 = G__987;
chunk__968 = G__988;
count__969 = G__989;
i__970 = G__990;
continue;
} else {
var map__976 = cljs.core.first.call(null,seq__967__$1);
var map__976__$1 = (((((!((map__976 == null))))?(((((map__976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__976):map__976);
var evt = map__976__$1;
var event = cljs.core.get.call(null,map__976__$1,new cljs.core.Keyword(null,"event","event",301435442));
cljs.core.println.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"EVENTS-HR","EVENTS-HR",1465914618),evt], null));

var pred__978_991 = cljs.core._EQ_;
var expr__979_992 = event;
if(cljs.core.truth_(pred__978_991.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__979_992))){
wint.client.add_path.call(null,evt);
} else {
if(cljs.core.truth_(pred__978_991.call(null,new cljs.core.Keyword(null,"marker","marker",865118313),expr__979_992))){
wint.client.add_marker.call(null,evt);
} else {
if(cljs.core.truth_(pred__978_991.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__979_992))){
wint.client.add_popup.call(null,evt);
} else {
if(cljs.core.truth_(pred__978_991.call(null,new cljs.core.Keyword(null,"heatmap","heatmap",-7865851),expr__979_992))){
wint.client.add_heatmap.call(null,evt);
} else {
if(cljs.core.truth_(pred__978_991.call(null,new cljs.core.Keyword(null,"remove","remove",-131428414),expr__979_992))){
wint.client.remove_layer.call(null,evt);
} else {
if(cljs.core.truth_(pred__978_991.call(null,new cljs.core.Keyword(null,"time-scale","time-scale",-650198100),expr__979_992))){
wint.client.set_time_scale.call(null,evt);
} else {
if(cljs.core.truth_(pred__978_991.call(null,new cljs.core.Keyword(null,"move","move",-2110884309),expr__979_992))){
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


var G__993 = cljs.core.next.call(null,seq__967__$1);
var G__994 = null;
var G__995 = (0);
var G__996 = (0);
seq__967 = G__993;
chunk__968 = G__994;
count__969 = G__995;
i__970 = G__996;
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
var seq__997_1007 = cljs.core.seq.call(null,cljs.core.deref.call(null,wint.client.MOVERS));
var chunk__998_1008 = null;
var count__999_1009 = (0);
var i__1000_1010 = (0);
while(true){
if((i__1000_1010 < count__999_1009)){
var vec__1001_1011 = cljs.core._nth.call(null,chunk__998_1008,i__1000_1010);
var n_1012 = cljs.core.nth.call(null,vec__1001_1011,(0),null);
var m_1013 = cljs.core.nth.call(null,vec__1001_1011,(1),null);
mvo.move.move.call(null,m_1013);


var G__1014 = seq__997_1007;
var G__1015 = chunk__998_1008;
var G__1016 = count__999_1009;
var G__1017 = (i__1000_1010 + (1));
seq__997_1007 = G__1014;
chunk__998_1008 = G__1015;
count__999_1009 = G__1016;
i__1000_1010 = G__1017;
continue;
} else {
var temp__5735__auto___1018 = cljs.core.seq.call(null,seq__997_1007);
if(temp__5735__auto___1018){
var seq__997_1019__$1 = temp__5735__auto___1018;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__997_1019__$1)){
var c__4461__auto___1020 = cljs.core.chunk_first.call(null,seq__997_1019__$1);
var G__1021 = cljs.core.chunk_rest.call(null,seq__997_1019__$1);
var G__1022 = c__4461__auto___1020;
var G__1023 = cljs.core.count.call(null,c__4461__auto___1020);
var G__1024 = (0);
seq__997_1007 = G__1021;
chunk__998_1008 = G__1022;
count__999_1009 = G__1023;
i__1000_1010 = G__1024;
continue;
} else {
var vec__1004_1025 = cljs.core.first.call(null,seq__997_1019__$1);
var n_1026 = cljs.core.nth.call(null,vec__1004_1025,(0),null);
var m_1027 = cljs.core.nth.call(null,vec__1004_1025,(1),null);
mvo.move.move.call(null,m_1027);


var G__1028 = cljs.core.next.call(null,seq__997_1019__$1);
var G__1029 = null;
var G__1030 = (0);
var G__1031 = (0);
seq__997_1007 = G__1028;
chunk__998_1008 = G__1029;
count__999_1009 = G__1030;
i__1000_1010 = G__1031;
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
