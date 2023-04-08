// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('leaflet_plain.client');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('cljs.reader');
goog.require('mvo.move');
leaflet_plain.client.MAP = cljs.core.volatile_BANG_.call(null,null);
leaflet_plain.client.TO_EVENTS = (2000);
leaflet_plain.client.TO_MOVE = (200);
leaflet_plain.client.OBJECTS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
leaflet_plain.client.MOVERS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
leaflet_plain.client.DATA = null;
leaflet_plain.client.T_SCALE = 1.0;
leaflet_plain.client.DEBUG = true;
leaflet_plain.client.by_id = (function leaflet_plain$client$by_id(id){
return document.getElementById(id);
});
leaflet_plain.client.set_html_BANG_ = (function leaflet_plain$client$set_html_BANG_(id,html){
return (document.getElementById(id).innerHTML = html);
});
leaflet_plain.client.error_handler = (function leaflet_plain$client$error_handler(resp){
var map__20024 = resp;
var map__20024__$1 = cljs.core.__destructure_map.call(null,map__20024);
var status = cljs.core.get.call(null,map__20024__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__20024__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,"AJAX ERROR:",status,status_text);
});
leaflet_plain.client.reqserv = (function leaflet_plain$client$reqserv(service,handler){
return ajax.core.GET.call(null,service,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (resp){
var map__20025 = resp;
var map__20025__$1 = cljs.core.__destructure_map.call(null,map__20025);
var status = cljs.core.get.call(null,map__20025__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__20025__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,"AJAX ERROR:",status,status_text);
})], null));
});
leaflet_plain.client.create_layer = (function leaflet_plain$client$create_layer(lmp){
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
var pred__20026 = cljs.core._EQ_;
var expr__20027 = typ;
if(cljs.core.truth_(pred__20026.call(null,new cljs.core.Keyword(null,"GeoJSON","GeoJSON",33508860),expr__20027))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([tit,(new L.GeoJSON.AJAX(src,cljs.core.clj__GT_js.call(null,arg)))]);
} else {
if(cljs.core.truth_(pred__20026.call(null,new cljs.core.Keyword(null,"Tile","Tile",1227624978),expr__20027))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([tit,L.tileLayer(src,ops__$1)]);
} else {
if(cljs.core.truth_(pred__20026.call(null,new cljs.core.Keyword(null,"TileWMS","TileWMS",695965747),expr__20027))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([tit,L.tileLayer.wms(src,ops__$1)]);
} else {
if(cljs.core.truth_(pred__20026.call(null,new cljs.core.Keyword(null,"ImageOverlay","ImageOverlay",-1637189814),expr__20027))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([tit,L.imageOverlay(src,(function (){var vec__20029 = arg.call(null,new cljs.core.Keyword(null,"imageBounds","imageBounds",-292439838));
var vec__20032 = cljs.core.nth.call(null,vec__20029,(0),null);
var w = cljs.core.nth.call(null,vec__20032,(0),null);
var s = cljs.core.nth.call(null,vec__20032,(1),null);
var vec__20035 = cljs.core.nth.call(null,vec__20029,(1),null);
var e = cljs.core.nth.call(null,vec__20035,(0),null);
var n = cljs.core.nth.call(null,vec__20035,(1),null);
return L.latLngBounds(L.latLng(w,s),L.latLng(e,n));
})())]);
} else {
if(cljs.core.truth_(pred__20026.call(null,new cljs.core.Keyword(null,"VideoOverlay","VideoOverlay",-1281312647),expr__20027))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([tit,L.videoOverlay(src,(function (){var vec__20038 = arg.call(null,new cljs.core.Keyword(null,"videoBounds","videoBounds",-645740944));
var vec__20041 = cljs.core.nth.call(null,vec__20038,(0),null);
var w = cljs.core.nth.call(null,vec__20041,(0),null);
var s = cljs.core.nth.call(null,vec__20041,(1),null);
var vec__20044 = cljs.core.nth.call(null,vec__20038,(1),null);
var e = cljs.core.nth.call(null,vec__20044,(0),null);
var n = cljs.core.nth.call(null,vec__20044,(1),null);
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
leaflet_plain.client.remove_layer = (function leaflet_plain$client$remove_layer(params){
var temp__5802__auto__ = params.call(null,new cljs.core.Keyword(null,"title","title",636505583));
if(cljs.core.truth_(temp__5802__auto__)){
var tit = temp__5802__auto__;
var temp__5804__auto___20047 = cljs.core.deref.call(null,leaflet_plain.client.OBJECTS).call(null,tit);
if(cljs.core.truth_(temp__5804__auto___20047)){
var lay_20048 = temp__5804__auto___20047;
lay_20048.remove();

cljs.core._vreset_BANG_.call(null,leaflet_plain.client.OBJECTS,cljs.core.dissoc.call(null,cljs.core._deref.call(null,leaflet_plain.client.OBJECTS),tit));
} else {
}

var temp__5802__auto____$1 = cljs.core.deref.call(null,leaflet_plain.client.MOVERS).call(null,tit);
if(cljs.core.truth_(temp__5802__auto____$1)){
var mov = temp__5802__auto____$1;
return cljs.core._vreset_BANG_.call(null,leaflet_plain.client.MOVERS,cljs.core.dissoc.call(null,cljs.core._deref.call(null,leaflet_plain.client.MOVERS),tit));
} else {
return null;
}
} else {
return null;
}
});
leaflet_plain.client.remove_tow = (function leaflet_plain$client$remove_tow(params){
var map__20049 = params;
var map__20049__$1 = cljs.core.__destructure_map.call(null,map__20049);
var title = cljs.core.get.call(null,map__20049__$1,new cljs.core.Keyword(null,"title","title",636505583));
var tug = cljs.core.get.call(null,map__20049__$1,new cljs.core.Keyword(null,"tug","tug",804147854));
var temp__5802__auto__ = cljs.core.deref.call(null,leaflet_plain.client.MOVERS).call(null,tug);
if(cljs.core.truth_(temp__5802__auto__)){
var mov = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.deref.call(null,leaflet_plain.client.OBJECTS).call(null,title);
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
leaflet_plain.client.add_tow = (function leaflet_plain$client$add_tow(params){
var map__20050 = params;
var map__20050__$1 = cljs.core.__destructure_map.call(null,map__20050);
var title = cljs.core.get.call(null,map__20050__$1,new cljs.core.Keyword(null,"title","title",636505583));
var tug = cljs.core.get.call(null,map__20050__$1,new cljs.core.Keyword(null,"tug","tug",804147854));
var bear = cljs.core.get.call(null,map__20050__$1,new cljs.core.Keyword(null,"bear","bear",-413943675));
var dist = cljs.core.get.call(null,map__20050__$1,new cljs.core.Keyword(null,"dist","dist",-1401837144));
var temp__5802__auto__ = cljs.core.deref.call(null,leaflet_plain.client.MOVERS).call(null,tug);
if(cljs.core.truth_(temp__5802__auto__)){
var mov = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.deref.call(null,leaflet_plain.client.OBJECTS).call(null,title);
if(cljs.core.truth_(temp__5802__auto____$1)){
var obj = temp__5802__auto____$1;
cljs.core._vreset_BANG_.call(null,mov,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,mov),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tows","tows",-857998397),obj], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((dist / (60)) * mvo.move.PID180),(bear * mvo.move.PID180)], null)));

var temp__5802__auto____$2 = cljs.core.deref.call(null,leaflet_plain.client.MOVERS).call(null,title);
if(cljs.core.truth_(temp__5802__auto____$2)){
var mov__$1 = temp__5802__auto____$2;
return cljs.core._vreset_BANG_.call(null,leaflet_plain.client.MOVERS,cljs.core.dissoc.call(null,cljs.core._deref.call(null,leaflet_plain.client.MOVERS),title));
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
leaflet_plain.client.add_path = (function leaflet_plain$client$add_path(params){
var map__20051 = params;
var map__20051__$1 = cljs.core.__destructure_map.call(null,map__20051);
var title = cljs.core.get.call(null,map__20051__$1,new cljs.core.Keyword(null,"title","title",636505583));
var type = cljs.core.get.call(null,map__20051__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var coord = cljs.core.get.call(null,map__20051__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var options = cljs.core.get.call(null,map__20051__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.truth_(title)){
if(cljs.core.truth_(cljs.core.deref.call(null,leaflet_plain.client.OBJECTS).call(null,title))){
leaflet_plain.client.remove_layer.call(null,params);
} else {
}

var ops = cljs.core.clj__GT_js.call(null,options);
var crd = cljs.core.clj__GT_js.call(null,coord);
var lay = (function (){var pred__20052 = cljs.core._EQ_;
var expr__20053 = type;
if(cljs.core.truth_(pred__20052.call(null,new cljs.core.Keyword(null,"polyline","polyline",-1731551044),expr__20053))){
return (new L.polyline(crd,ops));
} else {
if(cljs.core.truth_(pred__20052.call(null,new cljs.core.Keyword(null,"polygon","polygon",837053759),expr__20053))){
return (new L.polygon(crd,ops));
} else {
if(cljs.core.truth_(pred__20052.call(null,new cljs.core.Keyword(null,"rectangle","rectangle",293163262),expr__20053))){
return (new L.rectangle(crd,ops));
} else {
if(cljs.core.truth_(pred__20052.call(null,new cljs.core.Keyword(null,"circle","circle",1903212362),expr__20053))){
return (new L.circle(crd,ops));
} else {
if(cljs.core.truth_(pred__20052.call(null,new cljs.core.Keyword(null,"circle-marker","circle-marker",-241178759),expr__20053))){
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
cljs.core._vreset_BANG_.call(null,leaflet_plain.client.OBJECTS,cljs.core.assoc.call(null,cljs.core._deref.call(null,leaflet_plain.client.OBJECTS),title,lay));

return lay.addTo(cljs.core.deref.call(null,leaflet_plain.client.MAP));
} else {
return null;
}
} else {
return null;
}
});
leaflet_plain.client.add_marker = (function leaflet_plain$client$add_marker(params){
var map__20055 = params;
var map__20055__$1 = cljs.core.__destructure_map.call(null,map__20055);
var title = cljs.core.get.call(null,map__20055__$1,new cljs.core.Keyword(null,"title","title",636505583));
var coord = cljs.core.get.call(null,map__20055__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var course = cljs.core.get.call(null,map__20055__$1,new cljs.core.Keyword(null,"course","course",1455432948));
var speed = cljs.core.get.call(null,map__20055__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var url = cljs.core.get.call(null,map__20055__$1,new cljs.core.Keyword(null,"url","url",276297046));
var icon_size = cljs.core.get.call(null,map__20055__$1,new cljs.core.Keyword(null,"icon-size","icon-size",414161352));
var draggable = cljs.core.get.call(null,map__20055__$1,new cljs.core.Keyword(null,"draggable","draggable",1676206163));
if(cljs.core.truth_(title)){
if(cljs.core.truth_(cljs.core.deref.call(null,leaflet_plain.client.OBJECTS).call(null,title))){
leaflet_plain.client.remove_layer.call(null,params);
} else {
}

var vec__20056 = coord;
var lat = cljs.core.nth.call(null,vec__20056,(0),null);
var lon = cljs.core.nth.call(null,vec__20056,(1),null);
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
cljs.core._vreset_BANG_.call(null,leaflet_plain.client.OBJECTS,cljs.core.assoc.call(null,cljs.core._deref.call(null,leaflet_plain.client.OBJECTS),title,mrk));

if(cljs.core.truth_(speed)){
cljs.core._vreset_BANG_.call(null,leaflet_plain.client.MOVERS,cljs.core.assoc.call(null,cljs.core._deref.call(null,leaflet_plain.client.MOVERS),title,mvo.move.create_mover.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lon], null),course,speed,mrk)));
} else {
}

mrk.addTo(cljs.core.deref.call(null,leaflet_plain.client.MAP));

return mrk;
} else {
return null;
}
});
leaflet_plain.client.add_popup = (function leaflet_plain$client$add_popup(params){
var map__20059 = params;
var map__20059__$1 = cljs.core.__destructure_map.call(null,map__20059);
var lat = cljs.core.get.call(null,map__20059__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__20059__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html = cljs.core.get.call(null,map__20059__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var pos = (cljs.core.truth_((function (){var and__5043__auto__ = lat;
if(cljs.core.truth_(and__5043__auto__)){
return lon;
} else {
return and__5043__auto__;
}
})())?[lat,lon]:cljs.core.deref.call(null,leaflet_plain.client.MAP).getCenter());
return cljs.core.deref.call(null,leaflet_plain.client.MAP).addLayer((new L.popup(({}))).setLatLng(pos).setContent(html));
});
leaflet_plain.client.set_time_scale = (function leaflet_plain$client$set_time_scale(params){
leaflet_plain.client.T_SCALE = params.call(null,new cljs.core.Keyword(null,"time-scale","time-scale",-650198100));

return mvo.move.set_timeout_hrs.call(null,leaflet_plain.client.TO_MOVE,leaflet_plain.client.T_SCALE);
});
leaflet_plain.client.move_control = (function leaflet_plain$client$move_control(params){
var map__20060 = params;
var map__20060__$1 = cljs.core.__destructure_map.call(null,map__20060);
var title = cljs.core.get.call(null,map__20060__$1,new cljs.core.Keyword(null,"title","title",636505583));
var coord = cljs.core.get.call(null,map__20060__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var course = cljs.core.get.call(null,map__20060__$1,new cljs.core.Keyword(null,"course","course",1455432948));
var speed = cljs.core.get.call(null,map__20060__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var temp__5804__auto__ = cljs.core.deref.call(null,leaflet_plain.client.MOVERS).call(null,title);
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
leaflet_plain.client.set_time_run = (function leaflet_plain$client$set_time_run(params){
return mvo.move.set_time_run.call(null,params.call(null,new cljs.core.Keyword(null,"time-run","time-run",1091379144)));
});
leaflet_plain.client.set_debug = (function leaflet_plain$client$set_debug(params){
return (
leaflet_plain.client.DEBUG = params.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596)))
;
});
leaflet_plain.client.events_hr = (function leaflet_plain$client$events_hr(resp){
var seq__20061 = cljs.core.seq.call(null,cljs.reader.read_string.call(null,resp));
var chunk__20062 = null;
var count__20063 = (0);
var i__20064 = (0);
while(true){
if((i__20064 < count__20063)){
var map__20073 = cljs.core._nth.call(null,chunk__20062,i__20064);
var map__20073__$1 = cljs.core.__destructure_map.call(null,map__20073);
var evt = map__20073__$1;
var event = cljs.core.get.call(null,map__20073__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_(leaflet_plain.client.DEBUG)){
cljs.core.println.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"EVENTS-HR","EVENTS-HR",1465914618),evt], null));
} else {
}

var pred__20074_20081 = cljs.core._EQ_;
var expr__20075_20082 = event;
if(cljs.core.truth_(pred__20074_20081.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__20075_20082))){
leaflet_plain.client.add_path.call(null,evt);
} else {
if(cljs.core.truth_(pred__20074_20081.call(null,new cljs.core.Keyword(null,"marker","marker",865118313),expr__20075_20082))){
leaflet_plain.client.add_marker.call(null,evt);
} else {
if(cljs.core.truth_(pred__20074_20081.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__20075_20082))){
leaflet_plain.client.add_popup.call(null,evt);
} else {
if(cljs.core.truth_(pred__20074_20081.call(null,new cljs.core.Keyword(null,"remove","remove",-131428414),expr__20075_20082))){
leaflet_plain.client.remove_layer.call(null,evt);
} else {
if(cljs.core.truth_(pred__20074_20081.call(null,new cljs.core.Keyword(null,"time-scale","time-scale",-650198100),expr__20075_20082))){
leaflet_plain.client.set_time_scale.call(null,evt);
} else {
if(cljs.core.truth_(pred__20074_20081.call(null,new cljs.core.Keyword(null,"time-run","time-run",1091379144),expr__20075_20082))){
leaflet_plain.client.set_time_run.call(null,evt);
} else {
if(cljs.core.truth_(pred__20074_20081.call(null,new cljs.core.Keyword(null,"move","move",-2110884309),expr__20075_20082))){
leaflet_plain.client.move_control.call(null,evt);
} else {
if(cljs.core.truth_(pred__20074_20081.call(null,new cljs.core.Keyword(null,"tow","tow",-626513071),expr__20075_20082))){
leaflet_plain.client.add_tow.call(null,evt);
} else {
if(cljs.core.truth_(pred__20074_20081.call(null,new cljs.core.Keyword(null,"endtow","endtow",365923324),expr__20075_20082))){
leaflet_plain.client.remove_tow.call(null,evt);
} else {
if(cljs.core.truth_(pred__20074_20081.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),expr__20075_20082))){
leaflet_plain.client.set_debug.call(null,evt);
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


var G__20083 = seq__20061;
var G__20084 = chunk__20062;
var G__20085 = count__20063;
var G__20086 = (i__20064 + (1));
seq__20061 = G__20083;
chunk__20062 = G__20084;
count__20063 = G__20085;
i__20064 = G__20086;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__20061);
if(temp__5804__auto__){
var seq__20061__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20061__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__20061__$1);
var G__20087 = cljs.core.chunk_rest.call(null,seq__20061__$1);
var G__20088 = c__5568__auto__;
var G__20089 = cljs.core.count.call(null,c__5568__auto__);
var G__20090 = (0);
seq__20061 = G__20087;
chunk__20062 = G__20088;
count__20063 = G__20089;
i__20064 = G__20090;
continue;
} else {
var map__20077 = cljs.core.first.call(null,seq__20061__$1);
var map__20077__$1 = cljs.core.__destructure_map.call(null,map__20077);
var evt = map__20077__$1;
var event = cljs.core.get.call(null,map__20077__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_(leaflet_plain.client.DEBUG)){
cljs.core.println.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"EVENTS-HR","EVENTS-HR",1465914618),evt], null));
} else {
}

var pred__20078_20091 = cljs.core._EQ_;
var expr__20079_20092 = event;
if(cljs.core.truth_(pred__20078_20091.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__20079_20092))){
leaflet_plain.client.add_path.call(null,evt);
} else {
if(cljs.core.truth_(pred__20078_20091.call(null,new cljs.core.Keyword(null,"marker","marker",865118313),expr__20079_20092))){
leaflet_plain.client.add_marker.call(null,evt);
} else {
if(cljs.core.truth_(pred__20078_20091.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__20079_20092))){
leaflet_plain.client.add_popup.call(null,evt);
} else {
if(cljs.core.truth_(pred__20078_20091.call(null,new cljs.core.Keyword(null,"remove","remove",-131428414),expr__20079_20092))){
leaflet_plain.client.remove_layer.call(null,evt);
} else {
if(cljs.core.truth_(pred__20078_20091.call(null,new cljs.core.Keyword(null,"time-scale","time-scale",-650198100),expr__20079_20092))){
leaflet_plain.client.set_time_scale.call(null,evt);
} else {
if(cljs.core.truth_(pred__20078_20091.call(null,new cljs.core.Keyword(null,"time-run","time-run",1091379144),expr__20079_20092))){
leaflet_plain.client.set_time_run.call(null,evt);
} else {
if(cljs.core.truth_(pred__20078_20091.call(null,new cljs.core.Keyword(null,"move","move",-2110884309),expr__20079_20092))){
leaflet_plain.client.move_control.call(null,evt);
} else {
if(cljs.core.truth_(pred__20078_20091.call(null,new cljs.core.Keyword(null,"tow","tow",-626513071),expr__20079_20092))){
leaflet_plain.client.add_tow.call(null,evt);
} else {
if(cljs.core.truth_(pred__20078_20091.call(null,new cljs.core.Keyword(null,"endtow","endtow",365923324),expr__20079_20092))){
leaflet_plain.client.remove_tow.call(null,evt);
} else {
if(cljs.core.truth_(pred__20078_20091.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),expr__20079_20092))){
leaflet_plain.client.set_debug.call(null,evt);
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


var G__20093 = cljs.core.next.call(null,seq__20061__$1);
var G__20094 = null;
var G__20095 = (0);
var G__20096 = (0);
seq__20061 = G__20093;
chunk__20062 = G__20094;
count__20063 = G__20095;
i__20064 = G__20096;
continue;
}
} else {
return null;
}
}
break;
}
});
leaflet_plain.client.request_events = (function leaflet_plain$client$request_events(){
ajax.core.GET.call(null,"/events",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),leaflet_plain.client.events_hr,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),leaflet_plain.client.error_handler], null));

return setTimeout(leaflet_plain.client.request_events,leaflet_plain.client.TO_EVENTS);
});
leaflet_plain.client.zoom_display = (function leaflet_plain$client$zoom_display(){
var zoom = cljs.core.deref.call(null,leaflet_plain.client.MAP).getZoom();
cljs.core.println.call(null,new cljs.core.Keyword(null,"ZOOM","ZOOM",-684338556),zoom);

return leaflet_plain.client.set_html_BANG_.call(null,"zoom",["zoom ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zoom)].join(''));
});
leaflet_plain.client.map_hr = (function leaflet_plain$client$map_hr(resp){
var mp = cljs.reader.read_string.call(null,resp);
cljs.core.println.call(null,new cljs.core.Keyword(null,"Map","Map",-197728088));

if(((cljs.core.map_QMARK_.call(null,mp)) && ((!(cljs.core.empty_QMARK_.call(null,mp)))))){
var blms = cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,leaflet_plain.client.create_layer,mp.call(null,new cljs.core.Keyword(null,"base","base",185279322))));
var olms = cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,leaflet_plain.client.create_layer,mp.call(null,new cljs.core.Keyword(null,"overlay","overlay",-139131598))));
var flay = cljs.core.second.call(null,cljs.core.first.call(null,blms));
var lctl = L.control.layers(cljs.core.clj__GT_js.call(null,blms),cljs.core.clj__GT_js.call(null,olms));
flay.addTo(cljs.core.deref.call(null,leaflet_plain.client.MAP));

cljs.core.deref.call(null,leaflet_plain.client.MAP).setView(cljs.core.clj__GT_js.call(null,mp.call(null,new cljs.core.Keyword(null,"center","center",-748944368))),mp.call(null,new cljs.core.Keyword(null,"zoom","zoom",-1827487038)));

(new L.control.mousePosition()).addTo(cljs.core.deref.call(null,leaflet_plain.client.MAP));

lctl.addTo(cljs.core.deref.call(null,leaflet_plain.client.MAP));

leaflet_plain.client.zoom_display.call(null);

return cljs.core.deref.call(null,leaflet_plain.client.MAP).on("zoomend",leaflet_plain.client.zoom_display);
} else {
return leaflet_plain.client.add_popup.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"html","html",-998796897),["<h1>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mp),"</h1>"].join('')], null));
}
});
leaflet_plain.client.request_map = (function leaflet_plain$client$request_map(){
return ajax.core.GET.call(null,"/map",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),leaflet_plain.client.map_hr,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),leaflet_plain.client.error_handler], null));
});
leaflet_plain.client.init = (function leaflet_plain$client$init(){
cljs.core.vreset_BANG_.call(null,leaflet_plain.client.MAP,L.map("map"));

leaflet_plain.client.request_map.call(null);

return cljs.core.println.call(null,"MAP defined..");
});
leaflet_plain.client.move_markers = (function leaflet_plain$client$move_markers(){
var seq__20097_20113 = cljs.core.seq.call(null,cljs.core.deref.call(null,leaflet_plain.client.MOVERS));
var chunk__20098_20114 = null;
var count__20099_20115 = (0);
var i__20100_20116 = (0);
while(true){
if((i__20100_20116 < count__20099_20115)){
var vec__20107_20117 = cljs.core._nth.call(null,chunk__20098_20114,i__20100_20116);
var n_20118 = cljs.core.nth.call(null,vec__20107_20117,(0),null);
var m_20119 = cljs.core.nth.call(null,vec__20107_20117,(1),null);
mvo.move.move.call(null,m_20119);


var G__20120 = seq__20097_20113;
var G__20121 = chunk__20098_20114;
var G__20122 = count__20099_20115;
var G__20123 = (i__20100_20116 + (1));
seq__20097_20113 = G__20120;
chunk__20098_20114 = G__20121;
count__20099_20115 = G__20122;
i__20100_20116 = G__20123;
continue;
} else {
var temp__5804__auto___20124 = cljs.core.seq.call(null,seq__20097_20113);
if(temp__5804__auto___20124){
var seq__20097_20125__$1 = temp__5804__auto___20124;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20097_20125__$1)){
var c__5568__auto___20126 = cljs.core.chunk_first.call(null,seq__20097_20125__$1);
var G__20127 = cljs.core.chunk_rest.call(null,seq__20097_20125__$1);
var G__20128 = c__5568__auto___20126;
var G__20129 = cljs.core.count.call(null,c__5568__auto___20126);
var G__20130 = (0);
seq__20097_20113 = G__20127;
chunk__20098_20114 = G__20128;
count__20099_20115 = G__20129;
i__20100_20116 = G__20130;
continue;
} else {
var vec__20110_20131 = cljs.core.first.call(null,seq__20097_20125__$1);
var n_20132 = cljs.core.nth.call(null,vec__20110_20131,(0),null);
var m_20133 = cljs.core.nth.call(null,vec__20110_20131,(1),null);
mvo.move.move.call(null,m_20133);


var G__20134 = cljs.core.next.call(null,seq__20097_20125__$1);
var G__20135 = null;
var G__20136 = (0);
var G__20137 = (0);
seq__20097_20113 = G__20134;
chunk__20098_20114 = G__20135;
count__20099_20115 = G__20136;
i__20100_20116 = G__20137;
continue;
}
} else {
}
}
break;
}

return setTimeout(leaflet_plain.client.move_markers,leaflet_plain.client.TO_MOVE);
});
cljs.core.enable_console_print_BANG_.call(null);
(window.onload = leaflet_plain.client.init.call(null));
leaflet_plain.client.request_events.call(null);
mvo.move.set_timeout_hrs.call(null,leaflet_plain.client.TO_MOVE,leaflet_plain.client.T_SCALE);
leaflet_plain.client.move_markers.call(null);
cljs.core.println.call(null,"Epilogue done..");

//# sourceMappingURL=client.js.map
