// Compiled by ClojureScript 1.9.946 {}
goog.provide('czm.core');
goog.require('cljs.core');
czm.core.TERR_PROV = (new Cesium.CesiumTerrainProvider(({"url": "//assets.agi.com/stk-terrain/world", "requestWaterMask": false, "requestVertexNormals": false})));
czm.core.VIEWER = (new Cesium.Viewer("cesiumContainer",({"animation": false})));
czm.core.CZM_SRC = (new Cesium.CzmlDataSource());
czm.core.CAMERA = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view","view",1247994814),"FORWARD",new cljs.core.Keyword(null,"pitch","pitch",1495126700),(-10),new cljs.core.Keyword(null,"roll","roll",11266999),(0)], null));
czm.core.HEIGHT = cljs.core.volatile_BANG_.call(null,(0));
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
return czm.core.CZM_SRC.process(data__$1);
});
czm.core.fly_control = (function czm$core$fly_control(lat,lon,alt,hea,pit,rol,per){
var dest = Cesium.Cartesian3.fromDegrees(lon,lat,alt);
return czm.core.VIEWER.camera.flyTo(({"destination": dest, "orientation": ({"heading": Cesium.Math.toRadians(hea), "pitch": Cesium.Math.toRadians(pit), "roll": Cesium.Math.toRadians(rol)}), "maximumHeight": alt, "duration": per, "easingFunction": ((function (dest){
return (function (time){
return time;
});})(dest))
}));
});
czm.core.move_control = (function czm$core$move_control(lat,lon,alt,hea,pit,rol){
var dest = Cesium.Cartesian3.fromDegrees(lon,lat,alt);
return czm.core.VIEWER.camera.setView(({"destination": dest, "orientation": ({"heading": Cesium.Math.toRadians(hea), "pitch": Cesium.Math.toRadians(pit), "roll": Cesium.Math.toRadians(rol)})}));
});
czm.core.fly_to = (function czm$core$fly_to(lat,lon,alt,crs,per){
var pitch_12706 = (function (){var pred__12700 = cljs.core._EQ_;
var expr__12701 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,czm.core.CAMERA));
if(cljs.core.truth_(pred__12700.call(null,"UP",expr__12701))){
return (90);
} else {
if(cljs.core.truth_(pred__12700.call(null,"DOWN",expr__12701))){
return (-90);
} else {
return new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,czm.core.CAMERA));
}
}
})();
var roll_12707 = new cljs.core.Keyword(null,"roll","roll",11266999).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,czm.core.CAMERA));
var head_12708 = czm.core.norm_crs.call(null,(function (){var pred__12703 = cljs.core._EQ_;
var expr__12704 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,czm.core.CAMERA));
if(cljs.core.truth_(pred__12703.call(null,"BACKWARD",expr__12704))){
return (crs + (180));
} else {
if(cljs.core.truth_(pred__12703.call(null,"RIGHT",expr__12704))){
return (crs + (90));
} else {
if(cljs.core.truth_(pred__12703.call(null,"LEFT",expr__12704))){
return (crs - (90));
} else {
if(cljs.core.truth_(pred__12703.call(null,"FORWARD-RIGHT",expr__12704))){
return (crs + (45));
} else {
if(cljs.core.truth_(pred__12703.call(null,"FORWARD-LEFT",expr__12704))){
return (crs - (45));
} else {
if(cljs.core.truth_(pred__12703.call(null,"BACKWARD-RIGHT",expr__12704))){
return (crs + (135));
} else {
if(cljs.core.truth_(pred__12703.call(null,"BACKWARD-LEFT",expr__12704))){
return (crs - (135));
} else {
return crs;
}
}
}
}
}
}
}
})());
czm.core.fly_control.call(null,lat,lon,(alt + cljs.core.deref.call(null,czm.core.HEIGHT)),head_12708,pitch_12706,roll_12707,per);

return terraHeightRequest(czm.core.TERR_PROV,lat,lon,czm.core.terraHeightResponse);
});
czm.core.move_to = (function czm$core$move_to(lat,lon,alt,crs){
var pitch = (function (){var pred__12709 = cljs.core._EQ_;
var expr__12710 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,czm.core.CAMERA));
if(cljs.core.truth_(pred__12709.call(null,"UP",expr__12710))){
return (90);
} else {
if(cljs.core.truth_(pred__12709.call(null,"DOWN",expr__12710))){
return (-90);
} else {
return new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,czm.core.CAMERA));
}
}
})();
var roll = new cljs.core.Keyword(null,"roll","roll",11266999).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,czm.core.CAMERA));
var head = czm.core.norm_crs.call(null,(function (){var pred__12712 = cljs.core._EQ_;
var expr__12713 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,czm.core.CAMERA));
if(cljs.core.truth_(pred__12712.call(null,"BACKWARD",expr__12713))){
return (crs + (180));
} else {
if(cljs.core.truth_(pred__12712.call(null,"RIGHT",expr__12713))){
return (crs + (90));
} else {
if(cljs.core.truth_(pred__12712.call(null,"LEFT",expr__12713))){
return (crs - (90));
} else {
if(cljs.core.truth_(pred__12712.call(null,"FORWARD-RIGHT",expr__12713))){
return (crs + (45));
} else {
if(cljs.core.truth_(pred__12712.call(null,"FORWARD-LEFT",expr__12713))){
return (crs - (45));
} else {
if(cljs.core.truth_(pred__12712.call(null,"BACKWARD-RIGHT",expr__12713))){
return (crs + (135));
} else {
if(cljs.core.truth_(pred__12712.call(null,"BACKWARD-LEFT",expr__12713))){
return (crs - (135));
} else {
return crs;
}
}
}
}
}
}
}
})());
return czm.core.move_control.call(null,lat,lon,alt,head,pitch,roll);
});
czm.core.camera = (function czm$core$camera(key,val){
return cljs.core._vreset_BANG_.call(null,czm.core.CAMERA,cljs.core.assoc.call(null,cljs.core._deref.call(null,czm.core.CAMERA),key,val));
});
czm.core.init_3D_view = (function czm$core$init_3D_view(base_url,terra){
if(cljs.core._EQ_.call(null,terra,"yes")){
czm.core.VIEWER.terrainProvider = czm.core.TERR_PROV;
} else {
}

czm.core.VIEWER.dataSources.add(czm.core.CZM_SRC);

(new EventSource([cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_url),"czml/"].join(''))).addEventListener("czml",czm.core.cz_processor,false);

return cljs.core.println.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"INIT-3D-VIEW","INIT-3D-VIEW",-1398074686),new cljs.core.Keyword(null,"BASE","BASE",146158779),base_url,new cljs.core.Keyword(null,"TERRA","TERRA",2001561299),terra], null));
});
czm.core.terraHeightResponse = (function czm$core$terraHeightResponse(pos){
return cljs.core.vreset_BANG_.call(null,czm.core.HEIGHT,cljs.core.first.call(null,pos).height);
});

//# sourceMappingURL=core.js.map
