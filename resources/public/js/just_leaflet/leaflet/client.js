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
leaflet.client.DEBUG = true;
leaflet.client.by_id = (function leaflet$client$by_id(id){
return document.getElementById(id);
});
leaflet.client.set_html_BANG_ = (function leaflet$client$set_html_BANG_(id,html){
return (document.getElementById(id).innerHTML = html);
});
leaflet.client.error_handler = (function leaflet$client$error_handler(resp){
var map__20845 = resp;
var map__20845__$1 = cljs.core.__destructure_map.call(null,map__20845);
var status = cljs.core.get.call(null,map__20845__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__20845__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,"AJAX ERROR:",status,status_text);
});
leaflet.client.read_transit = (function leaflet$client$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
leaflet.client.reqserv = (function leaflet$client$reqserv(service,handler){
return ajax.core.GET.call(null,service,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (resp){
var map__20846 = resp;
var map__20846__$1 = cljs.core.__destructure_map.call(null,map__20846);
var status = cljs.core.get.call(null,map__20846__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__20846__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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
var pred__20847 = cljs.core._EQ_;
var expr__20848 = typ;
if(cljs.core.truth_(pred__20847.call(null,new cljs.core.Keyword(null,"GeoJSON","GeoJSON",33508860),expr__20848))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([tit,(new L.GeoJSON.AJAX(src,cljs.core.clj__GT_js.call(null,arg)))]);
} else {
if(cljs.core.truth_(pred__20847.call(null,new cljs.core.Keyword(null,"Tile","Tile",1227624978),expr__20848))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([tit,L.tileLayer(src,ops__$1)]);
} else {
if(cljs.core.truth_(pred__20847.call(null,new cljs.core.Keyword(null,"TileWMS","TileWMS",695965747),expr__20848))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([tit,L.tileLayer.wms(src,ops__$1)]);
} else {
if(cljs.core.truth_(pred__20847.call(null,new cljs.core.Keyword(null,"ImageOverlay","ImageOverlay",-1637189814),expr__20848))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([tit,L.imageOverlay(src,(function (){var vec__20850 = arg.call(null,new cljs.core.Keyword(null,"imageBounds","imageBounds",-292439838));
var vec__20853 = cljs.core.nth.call(null,vec__20850,(0),null);
var w = cljs.core.nth.call(null,vec__20853,(0),null);
var s = cljs.core.nth.call(null,vec__20853,(1),null);
var vec__20856 = cljs.core.nth.call(null,vec__20850,(1),null);
var e = cljs.core.nth.call(null,vec__20856,(0),null);
var n = cljs.core.nth.call(null,vec__20856,(1),null);
return L.latLngBounds(L.latLng(w,s),L.latLng(e,n));
})())]);
} else {
if(cljs.core.truth_(pred__20847.call(null,new cljs.core.Keyword(null,"VideoOverlay","VideoOverlay",-1281312647),expr__20848))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([tit,L.videoOverlay(src,(function (){var vec__20859 = arg.call(null,new cljs.core.Keyword(null,"videoBounds","videoBounds",-645740944));
var vec__20862 = cljs.core.nth.call(null,vec__20859,(0),null);
var w = cljs.core.nth.call(null,vec__20862,(0),null);
var s = cljs.core.nth.call(null,vec__20862,(1),null);
var vec__20865 = cljs.core.nth.call(null,vec__20859,(1),null);
var e = cljs.core.nth.call(null,vec__20865,(0),null);
var n = cljs.core.nth.call(null,vec__20865,(1),null);
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
var temp__5804__auto___20868 = cljs.core.deref.call(null,leaflet.client.OBJECTS).call(null,tit);
if(cljs.core.truth_(temp__5804__auto___20868)){
var lay_20869 = temp__5804__auto___20868;
lay_20869.remove();

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
var map__20870 = params;
var map__20870__$1 = cljs.core.__destructure_map.call(null,map__20870);
var title = cljs.core.get.call(null,map__20870__$1,new cljs.core.Keyword(null,"title","title",636505583));
var tug = cljs.core.get.call(null,map__20870__$1,new cljs.core.Keyword(null,"tug","tug",804147854));
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
var map__20871 = params;
var map__20871__$1 = cljs.core.__destructure_map.call(null,map__20871);
var title = cljs.core.get.call(null,map__20871__$1,new cljs.core.Keyword(null,"title","title",636505583));
var tug = cljs.core.get.call(null,map__20871__$1,new cljs.core.Keyword(null,"tug","tug",804147854));
var bear = cljs.core.get.call(null,map__20871__$1,new cljs.core.Keyword(null,"bear","bear",-413943675));
var dist = cljs.core.get.call(null,map__20871__$1,new cljs.core.Keyword(null,"dist","dist",-1401837144));
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
var map__20872 = params;
var map__20872__$1 = cljs.core.__destructure_map.call(null,map__20872);
var title = cljs.core.get.call(null,map__20872__$1,new cljs.core.Keyword(null,"title","title",636505583));
var type = cljs.core.get.call(null,map__20872__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var coord = cljs.core.get.call(null,map__20872__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var options = cljs.core.get.call(null,map__20872__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.truth_(title)){
if(cljs.core.truth_(cljs.core.deref.call(null,leaflet.client.OBJECTS).call(null,title))){
leaflet.client.remove_layer.call(null,params);
} else {
}

var ops = cljs.core.clj__GT_js.call(null,options);
var crd = cljs.core.clj__GT_js.call(null,coord);
var lay = (function (){var pred__20873 = cljs.core._EQ_;
var expr__20874 = type;
if(cljs.core.truth_(pred__20873.call(null,new cljs.core.Keyword(null,"polyline","polyline",-1731551044),expr__20874))){
return (new L.polyline(crd,ops));
} else {
if(cljs.core.truth_(pred__20873.call(null,new cljs.core.Keyword(null,"polygon","polygon",837053759),expr__20874))){
return (new L.polygon(crd,ops));
} else {
if(cljs.core.truth_(pred__20873.call(null,new cljs.core.Keyword(null,"rectangle","rectangle",293163262),expr__20874))){
return (new L.rectangle(crd,ops));
} else {
if(cljs.core.truth_(pred__20873.call(null,new cljs.core.Keyword(null,"circle","circle",1903212362),expr__20874))){
return (new L.circle(crd,ops));
} else {
if(cljs.core.truth_(pred__20873.call(null,new cljs.core.Keyword(null,"circle-marker","circle-marker",-241178759),expr__20874))){
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

return lay.addTo(cljs.core.deref.call(null,leaflet.client.MAP));
} else {
return null;
}
} else {
return null;
}
});
leaflet.client.add_marker = (function leaflet$client$add_marker(params){
var map__20876 = params;
var map__20876__$1 = cljs.core.__destructure_map.call(null,map__20876);
var title = cljs.core.get.call(null,map__20876__$1,new cljs.core.Keyword(null,"title","title",636505583));
var coord = cljs.core.get.call(null,map__20876__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var course = cljs.core.get.call(null,map__20876__$1,new cljs.core.Keyword(null,"course","course",1455432948));
var speed = cljs.core.get.call(null,map__20876__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var url = cljs.core.get.call(null,map__20876__$1,new cljs.core.Keyword(null,"url","url",276297046));
var icon_size = cljs.core.get.call(null,map__20876__$1,new cljs.core.Keyword(null,"icon-size","icon-size",414161352));
var draggable = cljs.core.get.call(null,map__20876__$1,new cljs.core.Keyword(null,"draggable","draggable",1676206163));
if(cljs.core.truth_(title)){
if(cljs.core.truth_(cljs.core.deref.call(null,leaflet.client.OBJECTS).call(null,title))){
leaflet.client.remove_layer.call(null,params);
} else {
}

var vec__20877 = coord;
var lat = cljs.core.nth.call(null,vec__20877,(0),null);
var lon = cljs.core.nth.call(null,vec__20877,(1),null);
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

mrk.addTo(cljs.core.deref.call(null,leaflet.client.MAP));

return mrk;
} else {
return null;
}
});
leaflet.client.add_popup = (function leaflet$client$add_popup(params){
var map__20880 = params;
var map__20880__$1 = cljs.core.__destructure_map.call(null,map__20880);
var lat = cljs.core.get.call(null,map__20880__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__20880__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html = cljs.core.get.call(null,map__20880__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var pos = (cljs.core.truth_((function (){var and__5043__auto__ = lat;
if(cljs.core.truth_(and__5043__auto__)){
return lon;
} else {
return and__5043__auto__;
}
})())?[lat,lon]:cljs.core.deref.call(null,leaflet.client.MAP).getCenter());
return cljs.core.deref.call(null,leaflet.client.MAP).addLayer((new L.popup(({}))).setLatLng(pos).setContent(html));
});
leaflet.client.set_time_scale = (function leaflet$client$set_time_scale(params){
leaflet.client.T_SCALE = params.call(null,new cljs.core.Keyword(null,"time-scale","time-scale",-650198100));

return mvo.move.set_timeout_hrs.call(null,leaflet.client.TO_MOVE,leaflet.client.T_SCALE);
});
leaflet.client.move_control = (function leaflet$client$move_control(params){
var map__20881 = params;
var map__20881__$1 = cljs.core.__destructure_map.call(null,map__20881);
var title = cljs.core.get.call(null,map__20881__$1,new cljs.core.Keyword(null,"title","title",636505583));
var coord = cljs.core.get.call(null,map__20881__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var course = cljs.core.get.call(null,map__20881__$1,new cljs.core.Keyword(null,"course","course",1455432948));
var speed = cljs.core.get.call(null,map__20881__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
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
var seq__20882 = cljs.core.seq.call(null,leaflet.client.read_transit.call(null,resp));
var chunk__20883 = null;
var count__20884 = (0);
var i__20885 = (0);
while(true){
if((i__20885 < count__20884)){
var map__20894 = cljs.core._nth.call(null,chunk__20883,i__20885);
var map__20894__$1 = cljs.core.__destructure_map.call(null,map__20894);
var evt = map__20894__$1;
var event = cljs.core.get.call(null,map__20894__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_(leaflet.client.DEBUG)){
cljs.core.println.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"EVENTS-HR","EVENTS-HR",1465914618),evt], null));
} else {
}

var pred__20895_20902 = cljs.core._EQ_;
var expr__20896_20903 = event;
if(cljs.core.truth_(pred__20895_20902.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__20896_20903))){
leaflet.client.add_path.call(null,evt);
} else {
if(cljs.core.truth_(pred__20895_20902.call(null,new cljs.core.Keyword(null,"marker","marker",865118313),expr__20896_20903))){
leaflet.client.add_marker.call(null,evt);
} else {
if(cljs.core.truth_(pred__20895_20902.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__20896_20903))){
leaflet.client.add_popup.call(null,evt);
} else {
if(cljs.core.truth_(pred__20895_20902.call(null,new cljs.core.Keyword(null,"remove","remove",-131428414),expr__20896_20903))){
leaflet.client.remove_layer.call(null,evt);
} else {
if(cljs.core.truth_(pred__20895_20902.call(null,new cljs.core.Keyword(null,"time-scale","time-scale",-650198100),expr__20896_20903))){
leaflet.client.set_time_scale.call(null,evt);
} else {
if(cljs.core.truth_(pred__20895_20902.call(null,new cljs.core.Keyword(null,"time-run","time-run",1091379144),expr__20896_20903))){
leaflet.client.set_time_run.call(null,evt);
} else {
if(cljs.core.truth_(pred__20895_20902.call(null,new cljs.core.Keyword(null,"move","move",-2110884309),expr__20896_20903))){
leaflet.client.move_control.call(null,evt);
} else {
if(cljs.core.truth_(pred__20895_20902.call(null,new cljs.core.Keyword(null,"tow","tow",-626513071),expr__20896_20903))){
leaflet.client.add_tow.call(null,evt);
} else {
if(cljs.core.truth_(pred__20895_20902.call(null,new cljs.core.Keyword(null,"endtow","endtow",365923324),expr__20896_20903))){
leaflet.client.remove_tow.call(null,evt);
} else {
if(cljs.core.truth_(pred__20895_20902.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),expr__20896_20903))){
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


var G__20904 = seq__20882;
var G__20905 = chunk__20883;
var G__20906 = count__20884;
var G__20907 = (i__20885 + (1));
seq__20882 = G__20904;
chunk__20883 = G__20905;
count__20884 = G__20906;
i__20885 = G__20907;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__20882);
if(temp__5804__auto__){
var seq__20882__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20882__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__20882__$1);
var G__20908 = cljs.core.chunk_rest.call(null,seq__20882__$1);
var G__20909 = c__5568__auto__;
var G__20910 = cljs.core.count.call(null,c__5568__auto__);
var G__20911 = (0);
seq__20882 = G__20908;
chunk__20883 = G__20909;
count__20884 = G__20910;
i__20885 = G__20911;
continue;
} else {
var map__20898 = cljs.core.first.call(null,seq__20882__$1);
var map__20898__$1 = cljs.core.__destructure_map.call(null,map__20898);
var evt = map__20898__$1;
var event = cljs.core.get.call(null,map__20898__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_(leaflet.client.DEBUG)){
cljs.core.println.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"EVENTS-HR","EVENTS-HR",1465914618),evt], null));
} else {
}

var pred__20899_20912 = cljs.core._EQ_;
var expr__20900_20913 = event;
if(cljs.core.truth_(pred__20899_20912.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__20900_20913))){
leaflet.client.add_path.call(null,evt);
} else {
if(cljs.core.truth_(pred__20899_20912.call(null,new cljs.core.Keyword(null,"marker","marker",865118313),expr__20900_20913))){
leaflet.client.add_marker.call(null,evt);
} else {
if(cljs.core.truth_(pred__20899_20912.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__20900_20913))){
leaflet.client.add_popup.call(null,evt);
} else {
if(cljs.core.truth_(pred__20899_20912.call(null,new cljs.core.Keyword(null,"remove","remove",-131428414),expr__20900_20913))){
leaflet.client.remove_layer.call(null,evt);
} else {
if(cljs.core.truth_(pred__20899_20912.call(null,new cljs.core.Keyword(null,"time-scale","time-scale",-650198100),expr__20900_20913))){
leaflet.client.set_time_scale.call(null,evt);
} else {
if(cljs.core.truth_(pred__20899_20912.call(null,new cljs.core.Keyword(null,"time-run","time-run",1091379144),expr__20900_20913))){
leaflet.client.set_time_run.call(null,evt);
} else {
if(cljs.core.truth_(pred__20899_20912.call(null,new cljs.core.Keyword(null,"move","move",-2110884309),expr__20900_20913))){
leaflet.client.move_control.call(null,evt);
} else {
if(cljs.core.truth_(pred__20899_20912.call(null,new cljs.core.Keyword(null,"tow","tow",-626513071),expr__20900_20913))){
leaflet.client.add_tow.call(null,evt);
} else {
if(cljs.core.truth_(pred__20899_20912.call(null,new cljs.core.Keyword(null,"endtow","endtow",365923324),expr__20900_20913))){
leaflet.client.remove_tow.call(null,evt);
} else {
if(cljs.core.truth_(pred__20899_20912.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),expr__20900_20913))){
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


var G__20914 = cljs.core.next.call(null,seq__20882__$1);
var G__20915 = null;
var G__20916 = (0);
var G__20917 = (0);
seq__20882 = G__20914;
chunk__20883 = G__20915;
count__20884 = G__20916;
i__20885 = G__20917;
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
leaflet.client.zoom_display = (function leaflet$client$zoom_display(){
var zoom = cljs.core.deref.call(null,leaflet.client.MAP).getZoom();
cljs.core.println.call(null,new cljs.core.Keyword(null,"ZOOM","ZOOM",-684338556),zoom);

return leaflet.client.set_html_BANG_.call(null,"zoom",["zoom ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zoom)].join(''));
});
leaflet.client.map_hr = (function leaflet$client$map_hr(resp){
var mp = leaflet.client.read_transit.call(null,resp);
cljs.core.println.call(null,new cljs.core.Keyword(null,"Map","Map",-197728088));

if(((cljs.core.map_QMARK_.call(null,mp)) && ((!(cljs.core.empty_QMARK_.call(null,mp)))))){
var blms = cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,leaflet.client.create_layer,mp.call(null,new cljs.core.Keyword(null,"base","base",185279322))));
var olms = cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,leaflet.client.create_layer,mp.call(null,new cljs.core.Keyword(null,"overlay","overlay",-139131598))));
var flay = cljs.core.second.call(null,cljs.core.first.call(null,blms));
var lctl = L.control.layers(cljs.core.clj__GT_js.call(null,blms),cljs.core.clj__GT_js.call(null,olms));
flay.addTo(cljs.core.deref.call(null,leaflet.client.MAP));

cljs.core.deref.call(null,leaflet.client.MAP).setView(cljs.core.clj__GT_js.call(null,mp.call(null,new cljs.core.Keyword(null,"center","center",-748944368))),mp.call(null,new cljs.core.Keyword(null,"zoom","zoom",-1827487038)));

(new L.control.mousePosition()).addTo(cljs.core.deref.call(null,leaflet.client.MAP));

lctl.addTo(cljs.core.deref.call(null,leaflet.client.MAP));

leaflet.client.zoom_display.call(null);

return cljs.core.deref.call(null,leaflet.client.MAP).on("zoomend",leaflet.client.zoom_display);
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
var seq__20918_20934 = cljs.core.seq.call(null,cljs.core.deref.call(null,leaflet.client.MOVERS));
var chunk__20919_20935 = null;
var count__20920_20936 = (0);
var i__20921_20937 = (0);
while(true){
if((i__20921_20937 < count__20920_20936)){
var vec__20928_20938 = cljs.core._nth.call(null,chunk__20919_20935,i__20921_20937);
var n_20939 = cljs.core.nth.call(null,vec__20928_20938,(0),null);
var m_20940 = cljs.core.nth.call(null,vec__20928_20938,(1),null);
mvo.move.move.call(null,m_20940);


var G__20941 = seq__20918_20934;
var G__20942 = chunk__20919_20935;
var G__20943 = count__20920_20936;
var G__20944 = (i__20921_20937 + (1));
seq__20918_20934 = G__20941;
chunk__20919_20935 = G__20942;
count__20920_20936 = G__20943;
i__20921_20937 = G__20944;
continue;
} else {
var temp__5804__auto___20945 = cljs.core.seq.call(null,seq__20918_20934);
if(temp__5804__auto___20945){
var seq__20918_20946__$1 = temp__5804__auto___20945;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20918_20946__$1)){
var c__5568__auto___20947 = cljs.core.chunk_first.call(null,seq__20918_20946__$1);
var G__20948 = cljs.core.chunk_rest.call(null,seq__20918_20946__$1);
var G__20949 = c__5568__auto___20947;
var G__20950 = cljs.core.count.call(null,c__5568__auto___20947);
var G__20951 = (0);
seq__20918_20934 = G__20948;
chunk__20919_20935 = G__20949;
count__20920_20936 = G__20950;
i__20921_20937 = G__20951;
continue;
} else {
var vec__20931_20952 = cljs.core.first.call(null,seq__20918_20946__$1);
var n_20953 = cljs.core.nth.call(null,vec__20931_20952,(0),null);
var m_20954 = cljs.core.nth.call(null,vec__20931_20952,(1),null);
mvo.move.move.call(null,m_20954);


var G__20955 = cljs.core.next.call(null,seq__20918_20946__$1);
var G__20956 = null;
var G__20957 = (0);
var G__20958 = (0);
seq__20918_20934 = G__20955;
chunk__20919_20935 = G__20956;
count__20920_20936 = G__20957;
i__20921_20937 = G__20958;
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
