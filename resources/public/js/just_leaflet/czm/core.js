// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('czm.core');
goog.require('cljs.core');
goog.require('geo.calc');
czm.core.VIEWER = (new Cesium.Viewer("cesiumContainer",({"imageryProvider": Cesium.createWorldImagery(), "terrainProvider": Cesium.createWorldTerrain(), "animation": false, "shouldAnimate": true})));
czm.core.CZML_SRC = (new Cesium.CzmlDataSource());
czm.core.CAMERA = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view","view",1247994814),(0),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(0),new cljs.core.Keyword(null,"roll","roll",11266999),(0)], null));
czm.core.MAX_UPGROUND = (100);
czm.core.ALT = (0);
czm.core.norm_crs = (function czm$core$norm_crs(x){
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
czm.core.cz_processor = (function czm$core$cz_processor(e){
var data = e.data;
var data__$1 = JSON.parse(data);
return czm.core.CZML_SRC.process(data__$1);
});
czm.core.fly_control = (function czm$core$fly_control(lat,lon,alt,hea,pit,rol,per){
var dest = Cesium.Cartesian3.fromDegrees(lon,lat,alt);
return czm.core.VIEWER.camera.flyTo(({"destination": dest, "orientation": ({"heading": Cesium.Math.toRadians(hea), "pitch": Cesium.Math.toRadians(pit), "roll": Cesium.Math.toRadians(rol)}), "maximumHeight": alt, "duration": per, "easingFunction": (function (time){
return time;
})}));
});
czm.core.move_control = (function czm$core$move_control(lat,lon,alt,hea,pit,rol){
var dest = Cesium.Cartesian3.fromDegrees(lon,lat,alt);
return czm.core.VIEWER.camera.setView(({"destination": dest, "orientation": ({"heading": Cesium.Math.toRadians(hea), "pitch": Cesium.Math.toRadians(pit), "roll": Cesium.Math.toRadians(rol)})}));
});
czm.core.sample_height = (function czm$core$sample_height(p__38019,alt){
var vec__38020 = p__38019;
var phi = cljs.core.nth.call(null,vec__38020,(0),null);
var lam = cljs.core.nth.call(null,vec__38020,(1),null);
var pos = (new Cesium.Cartographic(lam,phi,alt));
var sh = czm.core.VIEWER.scene.sampleHeight(pos);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [phi,lam,(function (){var or__5045__auto__ = sh;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (-7777);
}
})()], null);
});
czm.core.fly_to = (function czm$core$fly_to(lat,lon,alt,crs,per){
var pitch = new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,czm.core.CAMERA));
var roll = new cljs.core.Keyword(null,"roll","roll",11266999).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,czm.core.CAMERA));
var head = czm.core.norm_crs.call(null,(crs + new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,czm.core.CAMERA))));
if((alt > czm.core.MAX_UPGROUND)){
return czm.core.fly_control.call(null,lat,lon,alt,head,pitch,roll,per);
} else {
var vec__38023 = czm.core.sample_height.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [geo.calc.radians.call(null,lat),geo.calc.radians.call(null,lon)], null),czm.core.ALT);
var _ = cljs.core.nth.call(null,vec__38023,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__38023,(1),null);
var sh = cljs.core.nth.call(null,vec__38023,(2),null);
if((sh > (-7777))){
czm.core.ALT = ((sh + alt) | (0));
} else {
}

return czm.core.fly_control.call(null,lat,lon,czm.core.ALT,head,pitch,roll,per);
}
});
czm.core.init_3D_view = (function czm$core$init_3D_view(url){
czm.core.VIEWER.dataSources.add(czm.core.CZML_SRC);

(new EventSource(url)).addEventListener("czml",czm.core.cz_processor,false);

return cljs.core.println.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"INIT-3D-VIEW","INIT-3D-VIEW",-1398074686),url], null));
});
czm.core.hig_ray = (function czm$core$hig_ray(lat,lon,bea,dis,step,alt){
var ray = geo.calc.ray.call(null,lat,lon,bea,dis,step);
return cljs.core.map.call(null,(function (p1__38026_SHARP_){
return czm.core.sample_height.call(null,p1__38026_SHARP_,alt);
}),ray);
});
czm.core.los_end = (function czm$core$los_end(lat,lon,bea,dis,step,alt){
var hir = czm.core.hig_ray.call(null,lat,lon,bea,dis,step,alt);
var f = cljs.core.first.call(null,hir);
var r = cljs.core.rest.call(null,hir);
while(true){
if(cljs.core.seq.call(null,r)){
var h1 = cljs.core.nth.call(null,f,(2));
var fr = cljs.core.first.call(null,r);
var h2 = cljs.core.nth.call(null,fr,(2));
if((h2 <= alt)){
var G__38027 = fr;
var G__38028 = cljs.core.rest.call(null,r);
f = G__38027;
r = G__38028;
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
czm.core.los_sector = (function czm$core$los_sector(center,sector,dist,alt,dist_step,bea_step){
var vec__38029 = center;
var lat = cljs.core.nth.call(null,vec__38029,(0),null);
var lon = cljs.core.nth.call(null,vec__38029,(1),null);
var vec__38032 = sector;
var start = cljs.core.nth.call(null,vec__38032,(0),null);
var end = cljs.core.nth.call(null,vec__38032,(1),null);
var losec = (function (){var iter__5523__auto__ = (function czm$core$los_sector_$_iter__38035(s__38036){
return (new cljs.core.LazySeq(null,(function (){
var s__38036__$1 = s__38036;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__38036__$1);
if(temp__5804__auto__){
var s__38036__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38036__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__38036__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__38038 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__38037 = (0);
while(true){
if((i__38037 < size__5522__auto__)){
var bea = cljs.core._nth.call(null,c__5521__auto__,i__38037);
cljs.core.chunk_append.call(null,b__38038,czm.core.los_end.call(null,lat,lon,bea,dist,dist_step,alt));

var G__38039 = (i__38037 + (1));
i__38037 = G__38039;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38038),czm$core$los_sector_$_iter__38035.call(null,cljs.core.chunk_rest.call(null,s__38036__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38038),null);
}
} else {
var bea = cljs.core.first.call(null,s__38036__$2);
return cljs.core.cons.call(null,czm.core.los_end.call(null,lat,lon,bea,dist,dist_step,alt),czm$core$los_sector_$_iter__38035.call(null,cljs.core.rest.call(null,s__38036__$2)));
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
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [geo.calc.radians.call(null,lat),geo.calc.radians.call(null,lon),alt], null),losec);
});

//# sourceMappingURL=core.js.map
