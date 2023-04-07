// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('winter.map');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cognitect.transit');
winter.map.defonceMAP = (((typeof winter !== 'undefined') && (typeof winter.map !== 'undefined') && (typeof winter.map.MAP !== 'undefined'))?null:winter.map.MAP = reagent.core.atom.call(null,L.map("MAP")));
winter.map.set_html_BANG_ = (function winter$map$set_html_BANG_(id,html){
return (document.getElementById(id).innerHTML = html);
});
winter.map.read_transit = (function winter$map$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
winter.map.add_popup = (function winter$map$add_popup(params){
var map__10214 = params;
var map__10214__$1 = cljs.core.__destructure_map.call(null,map__10214);
var lat = cljs.core.get.call(null,map__10214__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__10214__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html = cljs.core.get.call(null,map__10214__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var pos = (cljs.core.truth_((function (){var and__5043__auto__ = lat;
if(cljs.core.truth_(and__5043__auto__)){
return lon;
} else {
return and__5043__auto__;
}
})())?[lat,lon]:winter.map.MAP.getCenter());
return cljs.core.deref.call(null,winter.map.MAP).addLayer((new L.popup(({}))).setLatLng(pos).setContent(html));
});
winter.map.create_layer = (function winter$map$create_layer(lmp){
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
var pred__10215 = cljs.core._EQ_;
var expr__10216 = typ;
if(cljs.core.truth_(pred__10215.call(null,new cljs.core.Keyword(null,"GeoJSON","GeoJSON",33508860),expr__10216))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([tit,(new L.GeoJSON.AJAX(src,cljs.core.clj__GT_js.call(null,arg)))]);
} else {
if(cljs.core.truth_(pred__10215.call(null,new cljs.core.Keyword(null,"Tile","Tile",1227624978),expr__10216))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([tit,L.tileLayer(src,ops__$1)]);
} else {
if(cljs.core.truth_(pred__10215.call(null,new cljs.core.Keyword(null,"TileWMS","TileWMS",695965747),expr__10216))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([tit,L.tileLayer.wms(src,ops__$1)]);
} else {
if(cljs.core.truth_(pred__10215.call(null,new cljs.core.Keyword(null,"ImageOverlay","ImageOverlay",-1637189814),expr__10216))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([tit,L.imageOverlay(src,(function (){var vec__10218 = arg.call(null,new cljs.core.Keyword(null,"imageBounds","imageBounds",-292439838));
var vec__10221 = cljs.core.nth.call(null,vec__10218,(0),null);
var w = cljs.core.nth.call(null,vec__10221,(0),null);
var s = cljs.core.nth.call(null,vec__10221,(1),null);
var vec__10224 = cljs.core.nth.call(null,vec__10218,(1),null);
var e = cljs.core.nth.call(null,vec__10224,(0),null);
var n = cljs.core.nth.call(null,vec__10224,(1),null);
return L.latLngBounds(L.latLng(w,s),L.latLng(e,n));
})())]);
} else {
if(cljs.core.truth_(pred__10215.call(null,new cljs.core.Keyword(null,"VideoOverlay","VideoOverlay",-1281312647),expr__10216))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([tit,L.videoOverlay(src,(function (){var vec__10227 = arg.call(null,new cljs.core.Keyword(null,"videoBounds","videoBounds",-645740944));
var vec__10230 = cljs.core.nth.call(null,vec__10227,(0),null);
var w = cljs.core.nth.call(null,vec__10230,(0),null);
var s = cljs.core.nth.call(null,vec__10230,(1),null);
var vec__10233 = cljs.core.nth.call(null,vec__10227,(1),null);
var e = cljs.core.nth.call(null,vec__10233,(0),null);
var n = cljs.core.nth.call(null,vec__10233,(1),null);
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
winter.map.map_hr = (function winter$map$map_hr(resp){
var mp = winter.map.read_transit.call(null,resp);
cljs.core.println.call(null,new cljs.core.Keyword(null,"RMR","RMR",1600693036),mp);

if(((cljs.core.map_QMARK_.call(null,mp)) && ((!(cljs.core.empty_QMARK_.call(null,mp)))))){
var blms = cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,winter.map.create_layer,mp.call(null,new cljs.core.Keyword(null,"base","base",185279322))));
var olms = cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,winter.map.create_layer,mp.call(null,new cljs.core.Keyword(null,"overlay","overlay",-139131598))));
var flay = cljs.core.second.call(null,cljs.core.first.call(null,blms));
var lctl = L.control.layers(cljs.core.clj__GT_js.call(null,blms),cljs.core.clj__GT_js.call(null,olms));
flay.addTo(cljs.core.deref.call(null,winter.map.MAP));

cljs.core.deref.call(null,winter.map.MAP).setView(cljs.core.clj__GT_js.call(null,mp.call(null,new cljs.core.Keyword(null,"center","center",-748944368))),mp.call(null,new cljs.core.Keyword(null,"zoom","zoom",-1827487038)));

(new L.control.mousePosition()).addTo(cljs.core.deref.call(null,winter.map.MAP));

return lctl.addTo(cljs.core.deref.call(null,winter.map.MAP));
} else {
return winter.map.add_popup.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"html","html",-998796897),["<h1>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mp),"</h1>"].join('')], null));
}
});

//# sourceMappingURL=map.js.map
