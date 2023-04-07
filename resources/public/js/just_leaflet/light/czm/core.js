// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('light.czm.core');
goog.require('cljs.core');
goog.require('light.geo.calc');
light.czm.core.VIEWER = (new Cesium.Viewer("cesiumContainer",({"imageryProvider": Cesium.createWorldImagery(), "terrainProvider": Cesium.createWorldTerrain(), "animation": false, "shouldAnimate": true})));
light.czm.core.CZML_SRC = (new Cesium.CzmlDataSource());
light.czm.core.CZML_DATA = null;
light.czm.core.CAMERA = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view","view",1247994814),(0),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(0),new cljs.core.Keyword(null,"roll","roll",11266999),(0)], null));
light.czm.core.MAX_UPGROUND = (100);
light.czm.core.ALT = (0);
light.czm.core.ZOOM = (0);
light.czm.core.ZOOM_AMOUNT = (200);
light.czm.core.norm_crs = (function light$czm$core$norm_crs(x){
if((x > (360))){
return (x - (360));
} else {
if((x < (0))){
return (x + (360));
} else {
return x;

}
}
});
light.czm.core.cz_processor = (function light$czm$core$cz_processor(e){
light.czm.core.CZML_DATA = JSON.parse(e.data);

return light.czm.core.CZML_SRC.process(light.czm.core.CZML_DATA);
});
light.czm.core.fly_control = (function light$czm$core$fly_control(lat,lon,alt,hea,pit,rol,per){
var dest = Cesium.Cartesian3.fromDegrees(lon,lat,alt);
return light.czm.core.VIEWER.camera.flyTo(({"destination": dest, "orientation": ({"heading": Cesium.Math.toRadians(hea), "pitch": Cesium.Math.toRadians(pit), "roll": Cesium.Math.toRadians(rol)}), "maximumHeight": alt, "duration": per, "easingFunction": (function (time){
return time;
})}));
});
light.czm.core.move_control = (function light$czm$core$move_control(lat,lon,alt,hea,pit,rol){
var dest = Cesium.Cartesian3.fromDegrees(lon,lat,alt);
return light.czm.core.VIEWER.camera.setView(({"destination": dest, "orientation": ({"heading": Cesium.Math.toRadians(hea), "pitch": Cesium.Math.toRadians(pit), "roll": Cesium.Math.toRadians(rol)})}));
});
light.czm.core.sample_height = (function light$czm$core$sample_height(p__42563,alt){
var vec__42564 = p__42563;
var phi = cljs.core.nth.call(null,vec__42564,(0),null);
var lam = cljs.core.nth.call(null,vec__42564,(1),null);
var pos = (new Cesium.Cartographic(lam,phi,alt));
var sh = light.czm.core.VIEWER.scene.sampleHeight(pos);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [phi,lam,(function (){var or__5045__auto__ = sh;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (-7777);
}
})()], null);
});
light.czm.core.fly_to = (function light$czm$core$fly_to(lat,lon,alt,crs,per){
var pitch = new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,light.czm.core.CAMERA));
var roll = new cljs.core.Keyword(null,"roll","roll",11266999).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,light.czm.core.CAMERA));
var head = light.czm.core.norm_crs.call(null,(crs + new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,light.czm.core.CAMERA))));
if((alt > light.czm.core.MAX_UPGROUND)){
return light.czm.core.fly_control.call(null,lat,lon,alt,head,pitch,roll,per);
} else {
var vec__42567 = light.czm.core.sample_height.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [light.geo.calc.radians.call(null,lat),light.geo.calc.radians.call(null,lon)], null),light.czm.core.ALT);
var _ = cljs.core.nth.call(null,vec__42567,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__42567,(1),null);
var sh = cljs.core.nth.call(null,vec__42567,(2),null);
if((sh > (-7777))){
light.czm.core.ALT = ((sh + alt) | (0));
} else {
}

return light.czm.core.fly_control.call(null,lat,lon,light.czm.core.ALT,head,pitch,roll,per);
}
});
light.czm.core.init_3D_view = (function light$czm$core$init_3D_view(url){
light.czm.core.VIEWER.dataSources.add(light.czm.core.CZML_SRC);

(new EventSource([cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),"/czml"].join(''))).addEventListener("czml",light.czm.core.cz_processor,false);

return cljs.core.println.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"INIT-3D-VIEW","INIT-3D-VIEW",-1398074686),url], null));
});
light.czm.core.hig_ray = (function light$czm$core$hig_ray(lat,lon,bea,dis,step,alt){
var ray = light.geo.calc.ray.call(null,lat,lon,bea,dis,step);
return cljs.core.map.call(null,(function (p1__42570_SHARP_){
return light.czm.core.sample_height.call(null,p1__42570_SHARP_,alt);
}),ray);
});
light.czm.core.los_end = (function light$czm$core$los_end(lat,lon,bea,dis,step,alt){
var hir = light.czm.core.hig_ray.call(null,lat,lon,bea,dis,step,alt);
var f = cljs.core.first.call(null,hir);
var r = cljs.core.rest.call(null,hir);
while(true){
if(cljs.core.seq.call(null,r)){
var h1 = cljs.core.nth.call(null,f,(2));
var fr = cljs.core.first.call(null,r);
var h2 = cljs.core.nth.call(null,fr,(2));
if((h2 <= alt)){
var G__42571 = fr;
var G__42572 = cljs.core.rest.call(null,r);
f = G__42571;
r = G__42572;
continue;
} else {
if((((h1 > (-7777))) && ((h1 <= alt)))){
return f;
} else {
return cljs.core.first.call(null,hir);

}
}
} else {
if((cljs.core.nth.call(null,f,(2)) > (-7777))){
return f;
} else {
return cljs.core.first.call(null,hir);
}
}
break;
}
});
light.czm.core.los_sector = (function light$czm$core$los_sector(center,sector,dist,alt,dist_step,bea_step){
var vec__42573 = center;
var lat = cljs.core.nth.call(null,vec__42573,(0),null);
var lon = cljs.core.nth.call(null,vec__42573,(1),null);
var vec__42576 = sector;
var start = cljs.core.nth.call(null,vec__42576,(0),null);
var end = cljs.core.nth.call(null,vec__42576,(1),null);
var losec = (function (){var iter__5523__auto__ = (function light$czm$core$los_sector_$_iter__42579(s__42580){
return (new cljs.core.LazySeq(null,(function (){
var s__42580__$1 = s__42580;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__42580__$1);
if(temp__5804__auto__){
var s__42580__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42580__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__42580__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__42582 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__42581 = (0);
while(true){
if((i__42581 < size__5522__auto__)){
var bea = cljs.core._nth.call(null,c__5521__auto__,i__42581);
cljs.core.chunk_append.call(null,b__42582,light.czm.core.los_end.call(null,lat,lon,bea,dist,dist_step,alt));

var G__42583 = (i__42581 + (1));
i__42581 = G__42583;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42582),light$czm$core$los_sector_$_iter__42579.call(null,cljs.core.chunk_rest.call(null,s__42580__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42582),null);
}
} else {
var bea = cljs.core.first.call(null,s__42580__$2);
return cljs.core.cons.call(null,light.czm.core.los_end.call(null,lat,lon,bea,dist,dist_step,alt),light$czm$core$los_sector_$_iter__42579.call(null,cljs.core.rest.call(null,s__42580__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.range.call(null,start,end,bea_step));
})();
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [light.geo.calc.radians.call(null,lat),light.geo.calc.radians.call(null,lon),alt], null),losec);
});
light.czm.core.zoom_in = (function light$czm$core$zoom_in(){
light.czm.core.VIEWER.camera.zoomIn(light.czm.core.ZOOM_AMOUNT);

return (
light.czm.core.ZOOM = (light.czm.core.ZOOM + (1)))
;
});
light.czm.core.zoom_out = (function light$czm$core$zoom_out(){
if((light.czm.core.ZOOM > (0))){
light.czm.core.VIEWER.camera.zoomOut(light.czm.core.ZOOM_AMOUNT);

return (
light.czm.core.ZOOM = (light.czm.core.ZOOM - (1)))
;
} else {
return null;
}
});
light.czm.core.zoom_no = (function light$czm$core$zoom_no(){
while(true){
if((light.czm.core.ZOOM > (0))){
light.czm.core.VIEWER.camera.zoomOut(light.czm.core.ZOOM_AMOUNT);

light.czm.core.ZOOM = (light.czm.core.ZOOM - (1));

continue;
} else {
return null;
}
break;
}
});
light.czm.core.zoom_amount = (function light$czm$core$zoom_amount(amount){
return (
light.czm.core.ZOOM_AMOUNT = amount)
;
});

//# sourceMappingURL=core.js.map
