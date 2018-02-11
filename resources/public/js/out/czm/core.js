// Compiled by ClojureScript 1.9.946 {}
goog.provide('czm.core');
goog.require('cljs.core');
goog.require('geo.calc');
czm.core.TERR_PROV = (new Cesium.CesiumTerrainProvider(({"url": "//assets.agi.com/stk-terrain/world", "requestWaterMask": false, "requestVertexNormals": false})));
czm.core.VIEWER = (new Cesium.Viewer("cesiumContainer",({"animation": false})));
czm.core.CZM_SRC = (new Cesium.CzmlDataSource());
czm.core.CAMERA = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view","view",1247994814),"FORWARD",new cljs.core.Keyword(null,"pitch","pitch",1495126700),(-10),new cljs.core.Keyword(null,"roll","roll",11266999),(0)], null));
czm.core.FLY_CTL = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0)], null);
czm.core.AAT = (0);
czm.core.MAX_UPGROUND = (100);
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
czm.core.terraHeightResponse = (function czm$core$terraHeightResponse(pos){
var vec__16901 = czm.core.FLY_CTL;
var lat = cljs.core.nth.call(null,vec__16901,(0),null);
var lon = cljs.core.nth.call(null,vec__16901,(1),null);
var alt = cljs.core.nth.call(null,vec__16901,(2),null);
var head = cljs.core.nth.call(null,vec__16901,(3),null);
var pitch = cljs.core.nth.call(null,vec__16901,(4),null);
var roll = cljs.core.nth.call(null,vec__16901,(5),null);
var per = cljs.core.nth.call(null,vec__16901,(6),null);
czm.core.AAT = (alt + cljs.core.first.call(null,pos).height);

return czm.core.fly_control.call(null,lat,lon,czm.core.AAT,head,pitch,roll,per);
});
czm.core.move_control = (function czm$core$move_control(lat,lon,alt,hea,pit,rol){
var dest = Cesium.Cartesian3.fromDegrees(lon,lat,alt);
return czm.core.VIEWER.camera.setView(({"destination": dest, "orientation": ({"heading": Cesium.Math.toRadians(hea), "pitch": Cesium.Math.toRadians(pit), "roll": Cesium.Math.toRadians(rol)})}));
});
czm.core.fly_to = (function czm$core$fly_to(lat,lon,alt,crs,per){
var pitch = (function (){var pred__16904 = cljs.core._EQ_;
var expr__16905 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,czm.core.CAMERA));
if(cljs.core.truth_(pred__16904.call(null,"UP",expr__16905))){
return (90);
} else {
if(cljs.core.truth_(pred__16904.call(null,"DOWN",expr__16905))){
return (-90);
} else {
return new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,czm.core.CAMERA));
}
}
})();
var roll = new cljs.core.Keyword(null,"roll","roll",11266999).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,czm.core.CAMERA));
var head = czm.core.norm_crs.call(null,(function (){var pred__16907 = cljs.core._EQ_;
var expr__16908 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,czm.core.CAMERA));
if(cljs.core.truth_(pred__16907.call(null,"BACKWARD",expr__16908))){
return (crs + (180));
} else {
if(cljs.core.truth_(pred__16907.call(null,"RIGHT",expr__16908))){
return (crs + (90));
} else {
if(cljs.core.truth_(pred__16907.call(null,"LEFT",expr__16908))){
return (crs - (90));
} else {
if(cljs.core.truth_(pred__16907.call(null,"FORWARD-RIGHT",expr__16908))){
return (crs + (45));
} else {
if(cljs.core.truth_(pred__16907.call(null,"FORWARD-LEFT",expr__16908))){
return (crs - (45));
} else {
if(cljs.core.truth_(pred__16907.call(null,"BACKWARD-RIGHT",expr__16908))){
return (crs + (135));
} else {
if(cljs.core.truth_(pred__16907.call(null,"BACKWARD-LEFT",expr__16908))){
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
if((alt > czm.core.MAX_UPGROUND)){
return czm.core.fly_control.call(null,lat,lon,alt,head,pitch,roll,per);
} else {
czm.core.FLY_CTL = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lon,alt,head,pitch,roll,per], null);

return terraHeightRequest(czm.core.TERR_PROV,lat,lon,czm.core.terraHeightResponse);
}
});
czm.core.move_to = (function czm$core$move_to(lat,lon,alt,crs){
var pitch = (function (){var pred__16910 = cljs.core._EQ_;
var expr__16911 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,czm.core.CAMERA));
if(cljs.core.truth_(pred__16910.call(null,"UP",expr__16911))){
return (90);
} else {
if(cljs.core.truth_(pred__16910.call(null,"DOWN",expr__16911))){
return (-90);
} else {
return new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,czm.core.CAMERA));
}
}
})();
var roll = new cljs.core.Keyword(null,"roll","roll",11266999).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,czm.core.CAMERA));
var head = czm.core.norm_crs.call(null,(function (){var pred__16913 = cljs.core._EQ_;
var expr__16914 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,czm.core.CAMERA));
if(cljs.core.truth_(pred__16913.call(null,"BACKWARD",expr__16914))){
return (crs + (180));
} else {
if(cljs.core.truth_(pred__16913.call(null,"RIGHT",expr__16914))){
return (crs + (90));
} else {
if(cljs.core.truth_(pred__16913.call(null,"LEFT",expr__16914))){
return (crs - (90));
} else {
if(cljs.core.truth_(pred__16913.call(null,"FORWARD-RIGHT",expr__16914))){
return (crs + (45));
} else {
if(cljs.core.truth_(pred__16913.call(null,"FORWARD-LEFT",expr__16914))){
return (crs - (45));
} else {
if(cljs.core.truth_(pred__16913.call(null,"BACKWARD-RIGHT",expr__16914))){
return (crs + (135));
} else {
if(cljs.core.truth_(pred__16913.call(null,"BACKWARD-LEFT",expr__16914))){
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

//# sourceMappingURL=core.js.map
