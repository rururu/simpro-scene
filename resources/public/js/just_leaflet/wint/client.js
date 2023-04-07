// Compiled by ClojureScript 1.11.60 {:optimizations :none}
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
wint.client.DEBUG = false;
wint.client.by_id = (function wint$client$by_id(id){
return document.getElementById(id);
});
wint.client.set_html_BANG_ = (function wint$client$set_html_BANG_(id,html){
return (wint.client.by_id.call(null,id).innerHTML = html);
});
wint.client.read_transit = (function wint$client$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
wint.client.error_handler = (function wint$client$error_handler(resp){
var map__43063 = resp;
var map__43063__$1 = cljs.core.__destructure_map.call(null,map__43063);
var status = cljs.core.get.call(null,map__43063__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__43063__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,"AJAX ERROR:",status,status_text);
});
wint.client.create_layer = (function wint$client$create_layer(lmp){
var tit = lmp.call(null,new cljs.core.Keyword(null,"title","title",636505583));
var typ = lmp.call(null,new cljs.core.Keyword(null,"type","type",1174270348));
var src = lmp.call(null,new cljs.core.Keyword(null,"source","source",-433931539));
var arg = lmp.call(null,new cljs.core.Keyword(null,"arguments","arguments",-1182834456));
var ops = (function (){var or__5045__auto__ = arg.call(null,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var ops__$1 = cljs.core.clj__GT_js.call(null,ops);
var pred__43064 = cljs.core._EQ_;
var expr__43065 = typ;
if(cljs.core.truth_(pred__43064.call(null,new cljs.core.Keyword(null,"GeoJSON","GeoJSON",33508860),expr__43065))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([tit,(new L.GeoJSON.AJAX(src,cljs.core.clj__GT_js.call(null,arg)))]);
} else {
if(cljs.core.truth_(pred__43064.call(null,new cljs.core.Keyword(null,"Tile","Tile",1227624978),expr__43065))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([tit,L.tileLayer(src,ops__$1)]);
} else {
if(cljs.core.truth_(pred__43064.call(null,new cljs.core.Keyword(null,"TileWMS","TileWMS",695965747),expr__43065))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([tit,L.tileLayer.wms(src,ops__$1)]);
} else {
if(cljs.core.truth_(pred__43064.call(null,new cljs.core.Keyword(null,"ImageOverlay","ImageOverlay",-1637189814),expr__43065))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([tit,L.imageOverlay(src,(function (){var vec__43067 = arg.call(null,new cljs.core.Keyword(null,"imageBounds","imageBounds",-292439838));
var vec__43070 = cljs.core.nth.call(null,vec__43067,(0),null);
var w = cljs.core.nth.call(null,vec__43070,(0),null);
var s = cljs.core.nth.call(null,vec__43070,(1),null);
var vec__43073 = cljs.core.nth.call(null,vec__43067,(1),null);
var e = cljs.core.nth.call(null,vec__43073,(0),null);
var n = cljs.core.nth.call(null,vec__43073,(1),null);
return L.latLngBounds(L.latLng(w,s),L.latLng(e,n));
})())]);
} else {
if(cljs.core.truth_(pred__43064.call(null,new cljs.core.Keyword(null,"VideoOverlay","VideoOverlay",-1281312647),expr__43065))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([tit,L.videoOverlay(src,(function (){var vec__43076 = arg.call(null,new cljs.core.Keyword(null,"videoBounds","videoBounds",-645740944));
var vec__43079 = cljs.core.nth.call(null,vec__43076,(0),null);
var w = cljs.core.nth.call(null,vec__43079,(0),null);
var s = cljs.core.nth.call(null,vec__43079,(1),null);
var vec__43082 = cljs.core.nth.call(null,vec__43076,(1),null);
var e = cljs.core.nth.call(null,vec__43082,(0),null);
var n = cljs.core.nth.call(null,vec__43082,(1),null);
return L.latLngBounds(L.latLng(w,s),L.latLng(e,n));
})())]);
} else {
return alert(["Unknown layer class ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lmp.call(null,new cljs.core.Keyword(null,"type","type",1174270348)))].join(''));
}
}
}
}
}
});
wint.client.remove_layer = (function wint$client$remove_layer(params){
var temp__5802__auto__ = params.call(null,new cljs.core.Keyword(null,"title","title",636505583));
if(cljs.core.truth_(temp__5802__auto__)){
var tit = temp__5802__auto__;
var temp__5804__auto___43085 = cljs.core.deref.call(null,wint.client.OBJECTS).call(null,tit);
if(cljs.core.truth_(temp__5804__auto___43085)){
var lay_43086 = temp__5804__auto___43085;
lay_43086.remove();

cljs.core._vreset_BANG_.call(null,wint.client.OBJECTS,cljs.core.dissoc.call(null,cljs.core._deref.call(null,wint.client.OBJECTS),tit));
} else {
}

var temp__5802__auto____$1 = cljs.core.deref.call(null,wint.client.MOVERS).call(null,tit);
if(cljs.core.truth_(temp__5802__auto____$1)){
var mov = temp__5802__auto____$1;
return cljs.core._vreset_BANG_.call(null,wint.client.MOVERS,cljs.core.dissoc.call(null,cljs.core._deref.call(null,wint.client.MOVERS),tit));
} else {
return null;
}
} else {
return null;
}
});
wint.client.remove_tow = (function wint$client$remove_tow(params){
var map__43087 = params;
var map__43087__$1 = cljs.core.__destructure_map.call(null,map__43087);
var title = cljs.core.get.call(null,map__43087__$1,new cljs.core.Keyword(null,"title","title",636505583));
var tug = cljs.core.get.call(null,map__43087__$1,new cljs.core.Keyword(null,"tug","tug",804147854));
var temp__5802__auto__ = cljs.core.deref.call(null,wint.client.MOVERS).call(null,tug);
if(cljs.core.truth_(temp__5802__auto__)){
var mov = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.deref.call(null,wint.client.OBJECTS).call(null,title);
if(cljs.core.truth_(temp__5802__auto____$1)){
var obj = temp__5802__auto____$1;
return cljs.core._vreset_BANG_.call(null,mov,cljs.core.assoc.call(null,cljs.core._deref.call(null,mov),new cljs.core.Keyword(null,"tows","tows",-857998397),cljs.core.dissoc.call(null,cljs.core.deref.call(null,mov).call(null,new cljs.core.Keyword(null,"tows","tows",-857998397)),obj)));
} else {
return null;
}
} else {
return null;
}
});
wint.client.add_tow = (function wint$client$add_tow(params){
var map__43088 = params;
var map__43088__$1 = cljs.core.__destructure_map.call(null,map__43088);
var title = cljs.core.get.call(null,map__43088__$1,new cljs.core.Keyword(null,"title","title",636505583));
var tug = cljs.core.get.call(null,map__43088__$1,new cljs.core.Keyword(null,"tug","tug",804147854));
var bear = cljs.core.get.call(null,map__43088__$1,new cljs.core.Keyword(null,"bear","bear",-413943675));
var dist = cljs.core.get.call(null,map__43088__$1,new cljs.core.Keyword(null,"dist","dist",-1401837144));
var temp__5802__auto__ = cljs.core.deref.call(null,wint.client.MOVERS).call(null,tug);
if(cljs.core.truth_(temp__5802__auto__)){
var mov = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.deref.call(null,wint.client.OBJECTS).call(null,title);
if(cljs.core.truth_(temp__5802__auto____$1)){
var obj = temp__5802__auto____$1;
cljs.core._vreset_BANG_.call(null,mov,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,mov),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tows","tows",-857998397),obj], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((dist / (60)) * mvo.move.PID180),(bear * mvo.move.PID180)], null)));

var temp__5802__auto____$2 = cljs.core.deref.call(null,wint.client.MOVERS).call(null,title);
if(cljs.core.truth_(temp__5802__auto____$2)){
var mov__$1 = temp__5802__auto____$2;
return cljs.core._vreset_BANG_.call(null,wint.client.MOVERS,cljs.core.dissoc.call(null,cljs.core._deref.call(null,wint.client.MOVERS),title));
} else {
return null;
}
} else {
return alert("Object ",title," on tow of ",tug," is missing!");
}
} else {
return alert("Tug "," for object "," on tow  is missing!");
}
});
wint.client.add_path = (function wint$client$add_path(params){
var map__43089 = params;
var map__43089__$1 = cljs.core.__destructure_map.call(null,map__43089);
var title = cljs.core.get.call(null,map__43089__$1,new cljs.core.Keyword(null,"title","title",636505583));
var type = cljs.core.get.call(null,map__43089__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var coord = cljs.core.get.call(null,map__43089__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var options = cljs.core.get.call(null,map__43089__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.truth_(title)){
if(cljs.core.truth_(cljs.core.deref.call(null,wint.client.OBJECTS).call(null,title))){
wint.client.remove_layer.call(null,params);
} else {
}

var ops = cljs.core.clj__GT_js.call(null,options);
var crd = cljs.core.clj__GT_js.call(null,coord);
var lay = (function (){var pred__43090 = cljs.core._EQ_;
var expr__43091 = type;
if(cljs.core.truth_(pred__43090.call(null,new cljs.core.Keyword(null,"polyline","polyline",-1731551044),expr__43091))){
return (new L.polyline(crd,ops));
} else {
if(cljs.core.truth_(pred__43090.call(null,new cljs.core.Keyword(null,"polygon","polygon",837053759),expr__43091))){
return (new L.polygon(crd,ops));
} else {
if(cljs.core.truth_(pred__43090.call(null,new cljs.core.Keyword(null,"rectangle","rectangle",293163262),expr__43091))){
return (new L.rectangle(crd,ops));
} else {
if(cljs.core.truth_(pred__43090.call(null,new cljs.core.Keyword(null,"circle","circle",1903212362),expr__43091))){
return (new L.circle(crd,ops));
} else {
if(cljs.core.truth_(pred__43090.call(null,new cljs.core.Keyword(null,"circle-marker","circle-marker",-241178759),expr__43091))){
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
var map__43093 = params;
var map__43093__$1 = cljs.core.__destructure_map.call(null,map__43093);
var title = cljs.core.get.call(null,map__43093__$1,new cljs.core.Keyword(null,"title","title",636505583));
var coord = cljs.core.get.call(null,map__43093__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var course = cljs.core.get.call(null,map__43093__$1,new cljs.core.Keyword(null,"course","course",1455432948));
var speed = cljs.core.get.call(null,map__43093__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var url = cljs.core.get.call(null,map__43093__$1,new cljs.core.Keyword(null,"url","url",276297046));
var icon_size = cljs.core.get.call(null,map__43093__$1,new cljs.core.Keyword(null,"icon-size","icon-size",414161352));
var draggable = cljs.core.get.call(null,map__43093__$1,new cljs.core.Keyword(null,"draggable","draggable",1676206163));
if(cljs.core.truth_(title)){
if(cljs.core.truth_(cljs.core.deref.call(null,wint.client.OBJECTS).call(null,title))){
wint.client.remove_layer.call(null,params);
} else {
}

var vec__43094 = coord;
var lat = cljs.core.nth.call(null,vec__43094,(0),null);
var lon = cljs.core.nth.call(null,vec__43094,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": url, "iconSize": (function (){var or__5045__auto__ = cljs.core.clj__GT_js.call(null,icon_size);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(32),(32)];
}
})()}));
var ops = ({"title": title, "icon": ico, "rotationAngle": course, "rotationOrigin": "center center", "draggable": (function (){var or__5045__auto__ = cljs.core.clj__GT_js.call(null,draggable);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
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
var map__43097 = params;
var map__43097__$1 = cljs.core.__destructure_map.call(null,map__43097);
var title = cljs.core.get.call(null,map__43097__$1,new cljs.core.Keyword(null,"title","title",636505583));
var data = cljs.core.get.call(null,map__43097__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var options = cljs.core.get.call(null,map__43097__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var map__43098 = params;
var map__43098__$1 = cljs.core.__destructure_map.call(null,map__43098);
var lat = cljs.core.get.call(null,map__43098__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__43098__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html = cljs.core.get.call(null,map__43098__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var pos = (cljs.core.truth_((function (){var and__5043__auto__ = lat;
if(cljs.core.truth_(and__5043__auto__)){
return lon;
} else {
return and__5043__auto__;
}
})())?[lat,lon]:wint.client.MAP.getCenter());
return wint.client.MAP.addLayer((new L.popup(({}))).setLatLng(pos).setContent(html));
});
wint.client.set_time_scale = (function wint$client$set_time_scale(params){
wint.client.T_SCALE = params.call(null,new cljs.core.Keyword(null,"time-scale","time-scale",-650198100));

return mvo.move.set_timeout_hrs.call(null,wint.client.TO_MOVE,wint.client.T_SCALE);
});
wint.client.move_control = (function wint$client$move_control(params){
var map__43099 = params;
var map__43099__$1 = cljs.core.__destructure_map.call(null,map__43099);
var title = cljs.core.get.call(null,map__43099__$1,new cljs.core.Keyword(null,"title","title",636505583));
var coord = cljs.core.get.call(null,map__43099__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var course = cljs.core.get.call(null,map__43099__$1,new cljs.core.Keyword(null,"course","course",1455432948));
var speed = cljs.core.get.call(null,map__43099__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var temp__5804__auto__ = cljs.core.deref.call(null,wint.client.MOVERS).call(null,title);
if(cljs.core.truth_(temp__5804__auto__)){
var mv = temp__5804__auto__;
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
wint.client.set_time_run = (function wint$client$set_time_run(params){
return mvo.move.set_time_run.call(null,params.call(null,new cljs.core.Keyword(null,"time-run","time-run",1091379144)));
});
wint.client.set_debug = (function wint$client$set_debug(params){
return (
wint.client.DEBUG = params.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596)))
;
});
wint.client.events_hr = (function wint$client$events_hr(resp){
var seq__43100 = cljs.core.seq.call(null,wint.client.read_transit.call(null,resp));
var chunk__43101 = null;
var count__43102 = (0);
var i__43103 = (0);
while(true){
if((i__43103 < count__43102)){
var map__43112 = cljs.core._nth.call(null,chunk__43101,i__43103);
var map__43112__$1 = cljs.core.__destructure_map.call(null,map__43112);
var evt = map__43112__$1;
var event = cljs.core.get.call(null,map__43112__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_(wint.client.DEBUG)){
cljs.core.println.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"EVENTS-HR","EVENTS-HR",1465914618),evt], null));
} else {
}

var pred__43113_43120 = cljs.core._EQ_;
var expr__43114_43121 = event;
if(cljs.core.truth_(pred__43113_43120.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__43114_43121))){
wint.client.add_path.call(null,evt);
} else {
if(cljs.core.truth_(pred__43113_43120.call(null,new cljs.core.Keyword(null,"marker","marker",865118313),expr__43114_43121))){
wint.client.add_marker.call(null,evt);
} else {
if(cljs.core.truth_(pred__43113_43120.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__43114_43121))){
wint.client.add_popup.call(null,evt);
} else {
if(cljs.core.truth_(pred__43113_43120.call(null,new cljs.core.Keyword(null,"heatmap","heatmap",-7865851),expr__43114_43121))){
wint.client.add_heatmap.call(null,evt);
} else {
if(cljs.core.truth_(pred__43113_43120.call(null,new cljs.core.Keyword(null,"remove","remove",-131428414),expr__43114_43121))){
wint.client.remove_layer.call(null,evt);
} else {
if(cljs.core.truth_(pred__43113_43120.call(null,new cljs.core.Keyword(null,"time-scale","time-scale",-650198100),expr__43114_43121))){
wint.client.set_time_scale.call(null,evt);
} else {
if(cljs.core.truth_(pred__43113_43120.call(null,new cljs.core.Keyword(null,"time-run","time-run",1091379144),expr__43114_43121))){
wint.client.set_time_run.call(null,evt);
} else {
if(cljs.core.truth_(pred__43113_43120.call(null,new cljs.core.Keyword(null,"move","move",-2110884309),expr__43114_43121))){
wint.client.move_control.call(null,evt);
} else {
if(cljs.core.truth_(pred__43113_43120.call(null,new cljs.core.Keyword(null,"tow","tow",-626513071),expr__43114_43121))){
wint.client.add_tow.call(null,evt);
} else {
if(cljs.core.truth_(pred__43113_43120.call(null,new cljs.core.Keyword(null,"endtow","endtow",365923324),expr__43114_43121))){
wint.client.remove_tow.call(null,evt);
} else {
if(cljs.core.truth_(pred__43113_43120.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),expr__43114_43121))){
wint.client.set_debug.call(null,evt);
} else {
alert("Unknown event: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,evt], null));
}
}
}
}
}
}
}
}
}
}
}


var G__43122 = seq__43100;
var G__43123 = chunk__43101;
var G__43124 = count__43102;
var G__43125 = (i__43103 + (1));
seq__43100 = G__43122;
chunk__43101 = G__43123;
count__43102 = G__43124;
i__43103 = G__43125;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__43100);
if(temp__5804__auto__){
var seq__43100__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43100__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__43100__$1);
var G__43126 = cljs.core.chunk_rest.call(null,seq__43100__$1);
var G__43127 = c__5568__auto__;
var G__43128 = cljs.core.count.call(null,c__5568__auto__);
var G__43129 = (0);
seq__43100 = G__43126;
chunk__43101 = G__43127;
count__43102 = G__43128;
i__43103 = G__43129;
continue;
} else {
var map__43116 = cljs.core.first.call(null,seq__43100__$1);
var map__43116__$1 = cljs.core.__destructure_map.call(null,map__43116);
var evt = map__43116__$1;
var event = cljs.core.get.call(null,map__43116__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_(wint.client.DEBUG)){
cljs.core.println.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"EVENTS-HR","EVENTS-HR",1465914618),evt], null));
} else {
}

var pred__43117_43130 = cljs.core._EQ_;
var expr__43118_43131 = event;
if(cljs.core.truth_(pred__43117_43130.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__43118_43131))){
wint.client.add_path.call(null,evt);
} else {
if(cljs.core.truth_(pred__43117_43130.call(null,new cljs.core.Keyword(null,"marker","marker",865118313),expr__43118_43131))){
wint.client.add_marker.call(null,evt);
} else {
if(cljs.core.truth_(pred__43117_43130.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__43118_43131))){
wint.client.add_popup.call(null,evt);
} else {
if(cljs.core.truth_(pred__43117_43130.call(null,new cljs.core.Keyword(null,"heatmap","heatmap",-7865851),expr__43118_43131))){
wint.client.add_heatmap.call(null,evt);
} else {
if(cljs.core.truth_(pred__43117_43130.call(null,new cljs.core.Keyword(null,"remove","remove",-131428414),expr__43118_43131))){
wint.client.remove_layer.call(null,evt);
} else {
if(cljs.core.truth_(pred__43117_43130.call(null,new cljs.core.Keyword(null,"time-scale","time-scale",-650198100),expr__43118_43131))){
wint.client.set_time_scale.call(null,evt);
} else {
if(cljs.core.truth_(pred__43117_43130.call(null,new cljs.core.Keyword(null,"time-run","time-run",1091379144),expr__43118_43131))){
wint.client.set_time_run.call(null,evt);
} else {
if(cljs.core.truth_(pred__43117_43130.call(null,new cljs.core.Keyword(null,"move","move",-2110884309),expr__43118_43131))){
wint.client.move_control.call(null,evt);
} else {
if(cljs.core.truth_(pred__43117_43130.call(null,new cljs.core.Keyword(null,"tow","tow",-626513071),expr__43118_43131))){
wint.client.add_tow.call(null,evt);
} else {
if(cljs.core.truth_(pred__43117_43130.call(null,new cljs.core.Keyword(null,"endtow","endtow",365923324),expr__43118_43131))){
wint.client.remove_tow.call(null,evt);
} else {
if(cljs.core.truth_(pred__43117_43130.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),expr__43118_43131))){
wint.client.set_debug.call(null,evt);
} else {
alert("Unknown event: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,evt], null));
}
}
}
}
}
}
}
}
}
}
}


var G__43132 = cljs.core.next.call(null,seq__43100__$1);
var G__43133 = null;
var G__43134 = (0);
var G__43135 = (0);
seq__43100 = G__43132;
chunk__43101 = G__43133;
count__43102 = G__43134;
i__43103 = G__43135;
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
var blms = cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,wint.client.create_layer,mp.call(null,new cljs.core.Keyword(null,"base","base",185279322))));
var olms = cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,wint.client.create_layer,mp.call(null,new cljs.core.Keyword(null,"overlay","overlay",-139131598))));
var flay = cljs.core.second.call(null,cljs.core.first.call(null,blms));
var lctl = L.control.layers(cljs.core.clj__GT_js.call(null,blms),cljs.core.clj__GT_js.call(null,olms));
var fzoom = (function (){
return wint.client.set_html_BANG_.call(null,"zoom",["zoom ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wint.client.MAP.getZoom())].join(''));
});
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
var seq__43136_43152 = cljs.core.seq.call(null,cljs.core.deref.call(null,wint.client.MOVERS));
var chunk__43137_43153 = null;
var count__43138_43154 = (0);
var i__43139_43155 = (0);
while(true){
if((i__43139_43155 < count__43138_43154)){
var vec__43146_43156 = cljs.core._nth.call(null,chunk__43137_43153,i__43139_43155);
var n_43157 = cljs.core.nth.call(null,vec__43146_43156,(0),null);
var m_43158 = cljs.core.nth.call(null,vec__43146_43156,(1),null);
mvo.move.move.call(null,m_43158);


var G__43159 = seq__43136_43152;
var G__43160 = chunk__43137_43153;
var G__43161 = count__43138_43154;
var G__43162 = (i__43139_43155 + (1));
seq__43136_43152 = G__43159;
chunk__43137_43153 = G__43160;
count__43138_43154 = G__43161;
i__43139_43155 = G__43162;
continue;
} else {
var temp__5804__auto___43163 = cljs.core.seq.call(null,seq__43136_43152);
if(temp__5804__auto___43163){
var seq__43136_43164__$1 = temp__5804__auto___43163;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43136_43164__$1)){
var c__5568__auto___43165 = cljs.core.chunk_first.call(null,seq__43136_43164__$1);
var G__43166 = cljs.core.chunk_rest.call(null,seq__43136_43164__$1);
var G__43167 = c__5568__auto___43165;
var G__43168 = cljs.core.count.call(null,c__5568__auto___43165);
var G__43169 = (0);
seq__43136_43152 = G__43166;
chunk__43137_43153 = G__43167;
count__43138_43154 = G__43168;
i__43139_43155 = G__43169;
continue;
} else {
var vec__43149_43170 = cljs.core.first.call(null,seq__43136_43164__$1);
var n_43171 = cljs.core.nth.call(null,vec__43149_43170,(0),null);
var m_43172 = cljs.core.nth.call(null,vec__43149_43170,(1),null);
mvo.move.move.call(null,m_43172);


var G__43173 = cljs.core.next.call(null,seq__43136_43164__$1);
var G__43174 = null;
var G__43175 = (0);
var G__43176 = (0);
seq__43136_43152 = G__43173;
chunk__43137_43153 = G__43174;
count__43138_43154 = G__43175;
i__43139_43155 = G__43176;
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
(window.onload = wint.client.init.call(null));
wint.client.request_events.call(null);
mvo.move.set_timeout_hrs.call(null,wint.client.TO_MOVE,wint.client.T_SCALE);
wint.client.move_markers.call(null);

//# sourceMappingURL=client.js.map
