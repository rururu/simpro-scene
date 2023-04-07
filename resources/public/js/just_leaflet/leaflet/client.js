// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('leaflet.client');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('cognitect.transit');
goog.require('mvo.move');
leaflet.client.MAP = cljs.core.volatile_BANG_.call(null,null);
leaflet.client.TO_EVENTS = (2000);
leaflet.client.TO_MOVE = (200);
leaflet.client.OBJECTS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
leaflet.client.MOVERS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
leaflet.client.DATA = null;
leaflet.client.T_SCALE = 1.0;
leaflet.client.DEBUG = false;
leaflet.client.by_id = (function leaflet$client$by_id(id){
return document.getElementById(id);
});
leaflet.client.set_html_BANG_ = (function leaflet$client$set_html_BANG_(id,html){
return (document.getElementById(id).innerHTML = html);
});
leaflet.client.error_handler = (function leaflet$client$error_handler(resp){
var map__22611 = resp;
var map__22611__$1 = cljs.core.__destructure_map.call(null,map__22611);
var status = cljs.core.get.call(null,map__22611__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__22611__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,"AJAX ERROR:",status,status_text);
});
leaflet.client.read_transit = (function leaflet$client$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
leaflet.client.reqserv = (function leaflet$client$reqserv(service,handler){
return ajax.core.GET.call(null,service,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (resp){
var map__22612 = resp;
var map__22612__$1 = cljs.core.__destructure_map.call(null,map__22612);
var status = cljs.core.get.call(null,map__22612__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__22612__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,"AJAX ERROR:",status,status_text);
})], null));
});
leaflet.client.create_layer = (function leaflet$client$create_layer(lmp){
cljs.core.println.call(null,new cljs.core.Keyword(null,"Layer","Layer",1156245758),lmp);

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
var pred__22613 = cljs.core._EQ_;
var expr__22614 = typ;
if(cljs.core.truth_(pred__22613.call(null,new cljs.core.Keyword(null,"GeoJSON","GeoJSON",33508860),expr__22614))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([tit,(new L.GeoJSON.AJAX(src,cljs.core.clj__GT_js.call(null,arg)))]);
} else {
if(cljs.core.truth_(pred__22613.call(null,new cljs.core.Keyword(null,"Tile","Tile",1227624978),expr__22614))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([tit,L.tileLayer(src,ops__$1)]);
} else {
if(cljs.core.truth_(pred__22613.call(null,new cljs.core.Keyword(null,"TileWMS","TileWMS",695965747),expr__22614))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([tit,L.tileLayer.wms(src,ops__$1)]);
} else {
if(cljs.core.truth_(pred__22613.call(null,new cljs.core.Keyword(null,"ImageOverlay","ImageOverlay",-1637189814),expr__22614))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([tit,L.imageOverlay(src,(function (){var vec__22616 = arg.call(null,new cljs.core.Keyword(null,"imageBounds","imageBounds",-292439838));
var vec__22619 = cljs.core.nth.call(null,vec__22616,(0),null);
var w = cljs.core.nth.call(null,vec__22619,(0),null);
var s = cljs.core.nth.call(null,vec__22619,(1),null);
var vec__22622 = cljs.core.nth.call(null,vec__22616,(1),null);
var e = cljs.core.nth.call(null,vec__22622,(0),null);
var n = cljs.core.nth.call(null,vec__22622,(1),null);
return L.latLngBounds(L.latLng(w,s),L.latLng(e,n));
})())]);
} else {
if(cljs.core.truth_(pred__22613.call(null,new cljs.core.Keyword(null,"VideoOverlay","VideoOverlay",-1281312647),expr__22614))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([tit,L.videoOverlay(src,(function (){var vec__22625 = arg.call(null,new cljs.core.Keyword(null,"videoBounds","videoBounds",-645740944));
var vec__22628 = cljs.core.nth.call(null,vec__22625,(0),null);
var w = cljs.core.nth.call(null,vec__22628,(0),null);
var s = cljs.core.nth.call(null,vec__22628,(1),null);
var vec__22631 = cljs.core.nth.call(null,vec__22625,(1),null);
var e = cljs.core.nth.call(null,vec__22631,(0),null);
var n = cljs.core.nth.call(null,vec__22631,(1),null);
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
leaflet.client.remove_layer = (function leaflet$client$remove_layer(params){
var temp__5802__auto__ = params.call(null,new cljs.core.Keyword(null,"title","title",636505583));
if(cljs.core.truth_(temp__5802__auto__)){
var tit = temp__5802__auto__;
var temp__5804__auto___22634 = cljs.core.deref.call(null,leaflet.client.OBJECTS).call(null,tit);
if(cljs.core.truth_(temp__5804__auto___22634)){
var lay_22635 = temp__5804__auto___22634;
lay_22635.remove();

cljs.core._vreset_BANG_.call(null,leaflet.client.OBJECTS,cljs.core.dissoc.call(null,cljs.core._deref.call(null,leaflet.client.OBJECTS),tit));
} else {
}

var temp__5802__auto____$1 = cljs.core.deref.call(null,leaflet.client.MOVERS).call(null,tit);
if(cljs.core.truth_(temp__5802__auto____$1)){
var mov = temp__5802__auto____$1;
return cljs.core._vreset_BANG_.call(null,leaflet.client.MOVERS,cljs.core.dissoc.call(null,cljs.core._deref.call(null,leaflet.client.MOVERS),tit));
} else {
return null;
}
} else {
return null;
}
});
leaflet.client.remove_tow = (function leaflet$client$remove_tow(params){
var map__22636 = params;
var map__22636__$1 = cljs.core.__destructure_map.call(null,map__22636);
var title = cljs.core.get.call(null,map__22636__$1,new cljs.core.Keyword(null,"title","title",636505583));
var tug = cljs.core.get.call(null,map__22636__$1,new cljs.core.Keyword(null,"tug","tug",804147854));
var temp__5802__auto__ = cljs.core.deref.call(null,leaflet.client.MOVERS).call(null,tug);
if(cljs.core.truth_(temp__5802__auto__)){
var mov = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.deref.call(null,leaflet.client.OBJECTS).call(null,title);
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
leaflet.client.add_tow = (function leaflet$client$add_tow(params){
var map__22637 = params;
var map__22637__$1 = cljs.core.__destructure_map.call(null,map__22637);
var title = cljs.core.get.call(null,map__22637__$1,new cljs.core.Keyword(null,"title","title",636505583));
var tug = cljs.core.get.call(null,map__22637__$1,new cljs.core.Keyword(null,"tug","tug",804147854));
var bear = cljs.core.get.call(null,map__22637__$1,new cljs.core.Keyword(null,"bear","bear",-413943675));
var dist = cljs.core.get.call(null,map__22637__$1,new cljs.core.Keyword(null,"dist","dist",-1401837144));
var temp__5802__auto__ = cljs.core.deref.call(null,leaflet.client.MOVERS).call(null,tug);
if(cljs.core.truth_(temp__5802__auto__)){
var mov = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.deref.call(null,leaflet.client.OBJECTS).call(null,title);
if(cljs.core.truth_(temp__5802__auto____$1)){
var obj = temp__5802__auto____$1;
cljs.core._vreset_BANG_.call(null,mov,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,mov),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tows","tows",-857998397),obj], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((dist / (60)) * mvo.move.PID180),(bear * mvo.move.PID180)], null)));

var temp__5802__auto____$2 = cljs.core.deref.call(null,leaflet.client.MOVERS).call(null,title);
if(cljs.core.truth_(temp__5802__auto____$2)){
var mov__$1 = temp__5802__auto____$2;
return cljs.core._vreset_BANG_.call(null,leaflet.client.MOVERS,cljs.core.dissoc.call(null,cljs.core._deref.call(null,leaflet.client.MOVERS),title));
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
leaflet.client.add_path = (function leaflet$client$add_path(params){
var map__22638 = params;
var map__22638__$1 = cljs.core.__destructure_map.call(null,map__22638);
var title = cljs.core.get.call(null,map__22638__$1,new cljs.core.Keyword(null,"title","title",636505583));
var type = cljs.core.get.call(null,map__22638__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var coord = cljs.core.get.call(null,map__22638__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var options = cljs.core.get.call(null,map__22638__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.truth_(title)){
if(cljs.core.truth_(cljs.core.deref.call(null,leaflet.client.OBJECTS).call(null,title))){
leaflet.client.remove_layer.call(null,params);
} else {
}

var ops = cljs.core.clj__GT_js.call(null,options);
var crd = cljs.core.clj__GT_js.call(null,coord);
var lay = (function (){var pred__22639 = cljs.core._EQ_;
var expr__22640 = type;
if(cljs.core.truth_(pred__22639.call(null,new cljs.core.Keyword(null,"polyline","polyline",-1731551044),expr__22640))){
return (new L.polyline(crd,ops));
} else {
if(cljs.core.truth_(pred__22639.call(null,new cljs.core.Keyword(null,"polygon","polygon",837053759),expr__22640))){
return (new L.polygon(crd,ops));
} else {
if(cljs.core.truth_(pred__22639.call(null,new cljs.core.Keyword(null,"rectangle","rectangle",293163262),expr__22640))){
return (new L.rectangle(crd,ops));
} else {
if(cljs.core.truth_(pred__22639.call(null,new cljs.core.Keyword(null,"circle","circle",1903212362),expr__22640))){
return (new L.circle(crd,ops));
} else {
if(cljs.core.truth_(pred__22639.call(null,new cljs.core.Keyword(null,"circle-marker","circle-marker",-241178759),expr__22640))){
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
cljs.core._vreset_BANG_.call(null,leaflet.client.OBJECTS,cljs.core.assoc.call(null,cljs.core._deref.call(null,leaflet.client.OBJECTS),title,lay));

return lay.addTo(leaflet.client.MAP);
} else {
return null;
}
} else {
return null;
}
});
leaflet.client.add_marker = (function leaflet$client$add_marker(params){
var map__22642 = params;
var map__22642__$1 = cljs.core.__destructure_map.call(null,map__22642);
var title = cljs.core.get.call(null,map__22642__$1,new cljs.core.Keyword(null,"title","title",636505583));
var coord = cljs.core.get.call(null,map__22642__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var course = cljs.core.get.call(null,map__22642__$1,new cljs.core.Keyword(null,"course","course",1455432948));
var speed = cljs.core.get.call(null,map__22642__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var url = cljs.core.get.call(null,map__22642__$1,new cljs.core.Keyword(null,"url","url",276297046));
var icon_size = cljs.core.get.call(null,map__22642__$1,new cljs.core.Keyword(null,"icon-size","icon-size",414161352));
var draggable = cljs.core.get.call(null,map__22642__$1,new cljs.core.Keyword(null,"draggable","draggable",1676206163));
if(cljs.core.truth_(title)){
if(cljs.core.truth_(cljs.core.deref.call(null,leaflet.client.OBJECTS).call(null,title))){
leaflet.client.remove_layer.call(null,params);
} else {
}

var vec__22643 = coord;
var lat = cljs.core.nth.call(null,vec__22643,(0),null);
var lon = cljs.core.nth.call(null,vec__22643,(1),null);
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
cljs.core._vreset_BANG_.call(null,leaflet.client.OBJECTS,cljs.core.assoc.call(null,cljs.core._deref.call(null,leaflet.client.OBJECTS),title,mrk));

if(cljs.core.truth_(speed)){
cljs.core._vreset_BANG_.call(null,leaflet.client.MOVERS,cljs.core.assoc.call(null,cljs.core._deref.call(null,leaflet.client.MOVERS),title,mvo.move.create_mover.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lon], null),course,speed,mrk)));
} else {
}

mrk.addTo(leaflet.client.MAP);

return mrk;
} else {
return null;
}
});
leaflet.client.add_popup = (function leaflet$client$add_popup(params){
var map__22646 = params;
var map__22646__$1 = cljs.core.__destructure_map.call(null,map__22646);
var lat = cljs.core.get.call(null,map__22646__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__22646__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html = cljs.core.get.call(null,map__22646__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var pos = (cljs.core.truth_((function (){var and__5043__auto__ = lat;
if(cljs.core.truth_(and__5043__auto__)){
return lon;
} else {
return and__5043__auto__;
}
})())?[lat,lon]:leaflet.client.MAP.getCenter());
return cljs.core.deref.call(null,leaflet.client.MAP).addLayer((new L.popup(({}))).setLatLng(pos).setContent(html));
});
leaflet.client.set_time_scale = (function leaflet$client$set_time_scale(params){
leaflet.client.T_SCALE = params.call(null,new cljs.core.Keyword(null,"time-scale","time-scale",-650198100));

return mvo.move.set_timeout_hrs.call(null,leaflet.client.TO_MOVE,leaflet.client.T_SCALE);
});
leaflet.client.move_control = (function leaflet$client$move_control(params){
var map__22647 = params;
var map__22647__$1 = cljs.core.__destructure_map.call(null,map__22647);
var title = cljs.core.get.call(null,map__22647__$1,new cljs.core.Keyword(null,"title","title",636505583));
var coord = cljs.core.get.call(null,map__22647__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var course = cljs.core.get.call(null,map__22647__$1,new cljs.core.Keyword(null,"course","course",1455432948));
var speed = cljs.core.get.call(null,map__22647__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var temp__5804__auto__ = cljs.core.deref.call(null,leaflet.client.MOVERS).call(null,title);
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
leaflet.client.set_time_run = (function leaflet$client$set_time_run(params){
return mvo.move.set_time_run.call(null,params.call(null,new cljs.core.Keyword(null,"time-run","time-run",1091379144)));
});
leaflet.client.set_debug = (function leaflet$client$set_debug(params){
return (
leaflet.client.DEBUG = params.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596)))
;
});
leaflet.client.events_hr = (function leaflet$client$events_hr(resp){
var seq__22648 = cljs.core.seq.call(null,leaflet.client.read_transit.call(null,resp));
var chunk__22649 = null;
var count__22650 = (0);
var i__22651 = (0);
while(true){
if((i__22651 < count__22650)){
var map__22660 = cljs.core._nth.call(null,chunk__22649,i__22651);
var map__22660__$1 = cljs.core.__destructure_map.call(null,map__22660);
var evt = map__22660__$1;
var event = cljs.core.get.call(null,map__22660__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_(leaflet.client.DEBUG)){
cljs.core.println.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"EVENTS-HR","EVENTS-HR",1465914618),evt], null));
} else {
}

var pred__22661_22668 = cljs.core._EQ_;
var expr__22662_22669 = event;
if(cljs.core.truth_(pred__22661_22668.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__22662_22669))){
leaflet.client.add_path.call(null,evt);
} else {
if(cljs.core.truth_(pred__22661_22668.call(null,new cljs.core.Keyword(null,"marker","marker",865118313),expr__22662_22669))){
leaflet.client.add_marker.call(null,evt);
} else {
if(cljs.core.truth_(pred__22661_22668.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__22662_22669))){
leaflet.client.add_popup.call(null,evt);
} else {
if(cljs.core.truth_(pred__22661_22668.call(null,new cljs.core.Keyword(null,"remove","remove",-131428414),expr__22662_22669))){
leaflet.client.remove_layer.call(null,evt);
} else {
if(cljs.core.truth_(pred__22661_22668.call(null,new cljs.core.Keyword(null,"time-scale","time-scale",-650198100),expr__22662_22669))){
leaflet.client.set_time_scale.call(null,evt);
} else {
if(cljs.core.truth_(pred__22661_22668.call(null,new cljs.core.Keyword(null,"time-run","time-run",1091379144),expr__22662_22669))){
leaflet.client.set_time_run.call(null,evt);
} else {
if(cljs.core.truth_(pred__22661_22668.call(null,new cljs.core.Keyword(null,"move","move",-2110884309),expr__22662_22669))){
leaflet.client.move_control.call(null,evt);
} else {
if(cljs.core.truth_(pred__22661_22668.call(null,new cljs.core.Keyword(null,"tow","tow",-626513071),expr__22662_22669))){
leaflet.client.add_tow.call(null,evt);
} else {
if(cljs.core.truth_(pred__22661_22668.call(null,new cljs.core.Keyword(null,"endtow","endtow",365923324),expr__22662_22669))){
leaflet.client.remove_tow.call(null,evt);
} else {
if(cljs.core.truth_(pred__22661_22668.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),expr__22662_22669))){
leaflet.client.set_debug.call(null,evt);
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


var G__22670 = seq__22648;
var G__22671 = chunk__22649;
var G__22672 = count__22650;
var G__22673 = (i__22651 + (1));
seq__22648 = G__22670;
chunk__22649 = G__22671;
count__22650 = G__22672;
i__22651 = G__22673;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__22648);
if(temp__5804__auto__){
var seq__22648__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22648__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__22648__$1);
var G__22674 = cljs.core.chunk_rest.call(null,seq__22648__$1);
var G__22675 = c__5568__auto__;
var G__22676 = cljs.core.count.call(null,c__5568__auto__);
var G__22677 = (0);
seq__22648 = G__22674;
chunk__22649 = G__22675;
count__22650 = G__22676;
i__22651 = G__22677;
continue;
} else {
var map__22664 = cljs.core.first.call(null,seq__22648__$1);
var map__22664__$1 = cljs.core.__destructure_map.call(null,map__22664);
var evt = map__22664__$1;
var event = cljs.core.get.call(null,map__22664__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_(leaflet.client.DEBUG)){
cljs.core.println.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"EVENTS-HR","EVENTS-HR",1465914618),evt], null));
} else {
}

var pred__22665_22678 = cljs.core._EQ_;
var expr__22666_22679 = event;
if(cljs.core.truth_(pred__22665_22678.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__22666_22679))){
leaflet.client.add_path.call(null,evt);
} else {
if(cljs.core.truth_(pred__22665_22678.call(null,new cljs.core.Keyword(null,"marker","marker",865118313),expr__22666_22679))){
leaflet.client.add_marker.call(null,evt);
} else {
if(cljs.core.truth_(pred__22665_22678.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__22666_22679))){
leaflet.client.add_popup.call(null,evt);
} else {
if(cljs.core.truth_(pred__22665_22678.call(null,new cljs.core.Keyword(null,"remove","remove",-131428414),expr__22666_22679))){
leaflet.client.remove_layer.call(null,evt);
} else {
if(cljs.core.truth_(pred__22665_22678.call(null,new cljs.core.Keyword(null,"time-scale","time-scale",-650198100),expr__22666_22679))){
leaflet.client.set_time_scale.call(null,evt);
} else {
if(cljs.core.truth_(pred__22665_22678.call(null,new cljs.core.Keyword(null,"time-run","time-run",1091379144),expr__22666_22679))){
leaflet.client.set_time_run.call(null,evt);
} else {
if(cljs.core.truth_(pred__22665_22678.call(null,new cljs.core.Keyword(null,"move","move",-2110884309),expr__22666_22679))){
leaflet.client.move_control.call(null,evt);
} else {
if(cljs.core.truth_(pred__22665_22678.call(null,new cljs.core.Keyword(null,"tow","tow",-626513071),expr__22666_22679))){
leaflet.client.add_tow.call(null,evt);
} else {
if(cljs.core.truth_(pred__22665_22678.call(null,new cljs.core.Keyword(null,"endtow","endtow",365923324),expr__22666_22679))){
leaflet.client.remove_tow.call(null,evt);
} else {
if(cljs.core.truth_(pred__22665_22678.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),expr__22666_22679))){
leaflet.client.set_debug.call(null,evt);
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


var G__22680 = cljs.core.next.call(null,seq__22648__$1);
var G__22681 = null;
var G__22682 = (0);
var G__22683 = (0);
seq__22648 = G__22680;
chunk__22649 = G__22681;
count__22650 = G__22682;
i__22651 = G__22683;
continue;
}
} else {
return null;
}
}
break;
}
});
leaflet.client.request_events = (function leaflet$client$request_events(){
ajax.core.GET.call(null,"/events",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),leaflet.client.events_hr,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),leaflet.client.error_handler], null));

return setTimeout(leaflet.client.request_events,leaflet.client.TO_EVENTS);
});
leaflet.client.map_hr = (function leaflet$client$map_hr(resp){
var mp = leaflet.client.read_transit.call(null,resp);
cljs.core.println.call(null,new cljs.core.Keyword(null,"Map","Map",-197728088));

if(((cljs.core.map_QMARK_.call(null,mp)) && ((!(cljs.core.empty_QMARK_.call(null,mp)))))){
var blms = cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,leaflet.client.create_layer,mp.call(null,new cljs.core.Keyword(null,"base","base",185279322))));
var olms = cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,leaflet.client.create_layer,mp.call(null,new cljs.core.Keyword(null,"overlay","overlay",-139131598))));
var flay = cljs.core.second.call(null,cljs.core.first.call(null,blms));
var lctl = L.control.layers(cljs.core.clj__GT_js.call(null,blms),cljs.core.clj__GT_js.call(null,olms));
var fzoom = (function (){
return leaflet.client.set_html_BANG_.call(null,"zoom",["zoom ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,leaflet.client.MAP).getZoom())].join(''));
});
flay.addTo(cljs.core.deref.call(null,leaflet.client.MAP));

cljs.core.deref.call(null,leaflet.client.MAP).setView(cljs.core.clj__GT_js.call(null,mp.call(null,new cljs.core.Keyword(null,"center","center",-748944368))),mp.call(null,new cljs.core.Keyword(null,"zoom","zoom",-1827487038)));

(new L.control.mousePosition()).addTo(cljs.core.deref.call(null,leaflet.client.MAP));

lctl.addTo(cljs.core.deref.call(null,leaflet.client.MAP));

fzoom.call(null);

return cljs.core.deref.call(null,leaflet.client.MAP).on("zoomend",fzoom);
} else {
return leaflet.client.add_popup.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"html","html",-998796897),["<h1>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mp),"</h1>"].join('')], null));
}
});
leaflet.client.request_map = (function leaflet$client$request_map(){
return ajax.core.GET.call(null,"/map",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),leaflet.client.map_hr,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),leaflet.client.error_handler], null));
});
leaflet.client.init = (function leaflet$client$init(){
cljs.core.vreset_BANG_.call(null,leaflet.client.MAP,L.map("map"));

leaflet.client.request_map.call(null);

return cljs.core.println.call(null,"MAP defined..");
});
leaflet.client.move_markers = (function leaflet$client$move_markers(){
var seq__22684_22700 = cljs.core.seq.call(null,cljs.core.deref.call(null,leaflet.client.MOVERS));
var chunk__22685_22701 = null;
var count__22686_22702 = (0);
var i__22687_22703 = (0);
while(true){
if((i__22687_22703 < count__22686_22702)){
var vec__22694_22704 = cljs.core._nth.call(null,chunk__22685_22701,i__22687_22703);
var n_22705 = cljs.core.nth.call(null,vec__22694_22704,(0),null);
var m_22706 = cljs.core.nth.call(null,vec__22694_22704,(1),null);
mvo.move.move.call(null,m_22706);


var G__22707 = seq__22684_22700;
var G__22708 = chunk__22685_22701;
var G__22709 = count__22686_22702;
var G__22710 = (i__22687_22703 + (1));
seq__22684_22700 = G__22707;
chunk__22685_22701 = G__22708;
count__22686_22702 = G__22709;
i__22687_22703 = G__22710;
continue;
} else {
var temp__5804__auto___22711 = cljs.core.seq.call(null,seq__22684_22700);
if(temp__5804__auto___22711){
var seq__22684_22712__$1 = temp__5804__auto___22711;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22684_22712__$1)){
var c__5568__auto___22713 = cljs.core.chunk_first.call(null,seq__22684_22712__$1);
var G__22714 = cljs.core.chunk_rest.call(null,seq__22684_22712__$1);
var G__22715 = c__5568__auto___22713;
var G__22716 = cljs.core.count.call(null,c__5568__auto___22713);
var G__22717 = (0);
seq__22684_22700 = G__22714;
chunk__22685_22701 = G__22715;
count__22686_22702 = G__22716;
i__22687_22703 = G__22717;
continue;
} else {
var vec__22697_22718 = cljs.core.first.call(null,seq__22684_22712__$1);
var n_22719 = cljs.core.nth.call(null,vec__22697_22718,(0),null);
var m_22720 = cljs.core.nth.call(null,vec__22697_22718,(1),null);
mvo.move.move.call(null,m_22720);


var G__22721 = cljs.core.next.call(null,seq__22684_22712__$1);
var G__22722 = null;
var G__22723 = (0);
var G__22724 = (0);
seq__22684_22700 = G__22721;
chunk__22685_22701 = G__22722;
count__22686_22702 = G__22723;
i__22687_22703 = G__22724;
continue;
}
} else {
}
}
break;
}

return setTimeout(leaflet.client.move_markers,leaflet.client.TO_MOVE);
});
cljs.core.enable_console_print_BANG_.call(null);
(window.onload = leaflet.client.init.call(null));
leaflet.client.request_events.call(null);
mvo.move.set_timeout_hrs.call(null,leaflet.client.TO_MOVE,leaflet.client.T_SCALE);
leaflet.client.move_markers.call(null);
cljs.core.println.call(null,"Epilogue done..");

//# sourceMappingURL=client.js.map
