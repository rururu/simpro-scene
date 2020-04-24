// Compiled by ClojureScript 1.10.439 {}
goog.provide('cesium.client');
goog.require('cljs.core');
cesium.client.VIEWER = (new Cesium.Viewer("cesiumContainer"));
cesium.client.CLOCK = cesium.client.VIEWER.clock;
cesium.client.SCENE = cesium.client.VIEWER.scene;
cesium.client.CAMERA = cesium.client.SCENE.camera;
cesium.client.CANVAS = cesium.client.SCENE.canvas;
cesium.client.HOME_VIEW = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"latitude","latitude",394867543),60.0,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),30.1,new cljs.core.Keyword(null,"height","height",1025178622),(2000),new cljs.core.Keyword(null,"heading","heading",-1312171873),(120),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(-20),new cljs.core.Keyword(null,"roll","roll",11266999),(0)], null);
cesium.client.CLOCK_SET = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"animate","animate",1850194573),true,new cljs.core.Keyword(null,"start","start",-355208981),"2020-08-08T16:00:00Z",new cljs.core.Keyword(null,"stop","stop",-2140911342),"2020-08-08T16:20:00Z",new cljs.core.Keyword(null,"current","current",-1088038603),"2020-08-08T16:00:00Z",new cljs.core.Keyword(null,"mult","mult",1466794774),(4)], null);
cesium.client.CZML_DS = (new Cesium.CzmlDataSource());
cesium.client.CZML_URL = "http://localhost:4448/czml";
cesium.client.CZML_DEBUG = false;
cesium.client.ORBIT = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ring","ring",-974350330),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"next","next",-117701485),(0),new cljs.core.Keyword(null,"center-lpm","center-lpm",937143842),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"radius-nm","radius-nm",-882383113),(0),new cljs.core.Keyword(null,"step-sec","step-sec",-1096271625),(0)], null));
cesium.client.add_imagery_by_asset_id = (function cesium$client$add_imagery_by_asset_id(id,viewer){
var ilays = viewer.imageryLayers;
ilays.remove(ilays.get((0)));

return ilays.addImageryProvider((new Cesium.IonImageryProvider(({"assetId": id}))));
});
cesium.client.add_terrain = (function cesium$client$add_terrain(options,viewer){
viewer.terrainProvider = (new Cesium.createWorldTerrain(options));

return viewer.scene.globe.depthTestAgainstTerrain = true;
});
cesium.client.camera_home = (function cesium$client$camera_home(camera,view){
var map__18313 = view;
var map__18313__$1 = (((((!((map__18313 == null))))?(((((map__18313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18313):map__18313);
var longitude = cljs.core.get.call(null,map__18313__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.call(null,map__18313__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var height = cljs.core.get.call(null,map__18313__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var heading = cljs.core.get.call(null,map__18313__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
var pitch = cljs.core.get.call(null,map__18313__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
var roll = cljs.core.get.call(null,map__18313__$1,new cljs.core.Keyword(null,"roll","roll",11266999));
var pos = (new Cesium.Cartesian3.fromDegrees(longitude,latitude,height));
var orient = (new Cesium.HeadingPitchRoll.fromDegrees(heading,pitch,roll));
cesium.client.HOME_VIEW = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"destination","destination",-253872483),pos,new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"heading","heading",-1312171873),orient.heading,new cljs.core.Keyword(null,"pitch","pitch",1495126700),orient.pitch,new cljs.core.Keyword(null,"roll","roll",11266999),orient.roll], null),new cljs.core.Keyword(null,"duration","duration",1444101068),4.0,new cljs.core.Keyword(null,"maximumHeight","maximumHeight",159239809),(2000),new cljs.core.Keyword(null,"pitchAdjustHeight","pitchAdjustHeight",718386687),(2000),new cljs.core.Keyword(null,"endTransform","endTransform",-1545129030),Cesium.Matrix4.IDENTITY], null));

cesium.client.VIEWER.homeButton.viewModel.command.beforeExecute.addEventListener(((function (map__18313,map__18313__$1,longitude,latitude,height,heading,pitch,roll,pos,orient){
return (function (e){
e.cancel = true;

return camera.flyTo(cesium.client.HOME_VIEW);
});})(map__18313,map__18313__$1,longitude,latitude,height,heading,pitch,roll,pos,orient))
);

return camera.flyTo(cesium.client.HOME_VIEW);
});
cesium.client.clock_settings = (function cesium$client$clock_settings(clock,settings,viewer){
var map__18315 = settings;
var map__18315__$1 = (((((!((map__18315 == null))))?(((((map__18315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18315):map__18315);
var animate = cljs.core.get.call(null,map__18315__$1,new cljs.core.Keyword(null,"animate","animate",1850194573));
var start = cljs.core.get.call(null,map__18315__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop = cljs.core.get.call(null,map__18315__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var current = cljs.core.get.call(null,map__18315__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var mult = cljs.core.get.call(null,map__18315__$1,new cljs.core.Keyword(null,"mult","mult",1466794774));
clock.shouldAnimate = animate;

clock.startTime = Cesium.JulianDate.fromIso8601(start);

clock.stopTime = Cesium.JulianDate.fromIso8601(stop);

clock.currentTime = Cesium.JulianDate.fromIso8601(current);

clock.multiplier = mult;

clock.clockStep = Cesium.ClockStep.SYSTEM_CLOCK_MULTIPLIER;

clock.clockRange = Cesium.ClockRange.LOOP_STOP;

return viewer.timeline.zoomTo(clock.startTime,clock.stopTime);
});
cesium.client.load_data = (function cesium$client$load_data(format,source,options,viewer,processor){
var promise = (function (){var pred__18317 = cljs.core._EQ_;
var expr__18318 = format;
if(cljs.core.truth_(pred__18317.call(null,new cljs.core.Keyword(null,"GeoJSON","GeoJSON",33508860),expr__18318))){
return Cesium.GeoJsonDataSource.load(source,options);
} else {
if(cljs.core.truth_(pred__18317.call(null,new cljs.core.Keyword(null,"CZML","CZML",-1539311408),expr__18318))){
return Cesium.CzmlDataSource.load(source,options);
} else {
if(cljs.core.truth_(pred__18317.call(null,new cljs.core.Keyword(null,"KML","KML",1829561453),expr__18318))){
return Cesium.KmlDataSource.load(source,options);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__18318)].join('')));
}
}
}
})();
return promise.then(((function (promise){
return (function (ds){
viewer.dataSources.add(ds);

return processor.call(null,ds);
});})(promise))
);
});
cesium.client.start_czml_processing = (function cesium$client$start_czml_processing(czml_url,viewer){
var cz_processor = (function cesium$client$start_czml_processing_$_cz_processor(e){
var data = e.data;
if(cesium.client.CZML_DEBUG){
cljs.core.println.call(null,new cljs.core.Keyword(null,"data","data",-232669377),data);
} else {
}

return cesium.client.CZML_DS.process(JSON.parse(data));
});
viewer.dataSources.add(cesium.client.CZML_DS);

return (new EventSource(cesium.client.CZML_URL)).addEventListener("czml",cz_processor,false);
});
cesium.client.position_js = (function cesium$client$position_js(lambda0,phi1,c,az){
var cosphi1 = Math.cos(phi1);
var sinphi1 = Math.sin(phi1);
var cosaz = Math.cos(az);
var sinaz = Math.sin(az);
var sinc = Math.sin(c);
var cosc = Math.cos(c);
var phi2 = Math.asin(((sinphi1 * cosc) + ((cosphi1 * sinc) * cosaz)));
var lam2 = (Math.atan2((sinc * sinaz),((cosphi1 * cosc) - ((sinphi1 * sinc) * cosaz))) + lambda0);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lam2,phi2], null);
});
cesium.client.points_ring_rad = (function cesium$client$points_ring_rad(p__18321,rad_rad,alt,N){
var vec__18322 = p__18321;
var c_lambda = cljs.core.nth.call(null,vec__18322,(0),null);
var c_phi = cljs.core.nth.call(null,vec__18322,(1),null);
var s = ((Math.PI * (2)) / N);
var azs = cljs.core.range.call(null,(0),(N * s),s);
return cljs.core.vec.call(null,cljs.core.map.call(null,((function (s,azs,vec__18322,c_lambda,c_phi){
return (function (p1__18320_SHARP_){
return cljs.core.concat.call(null,cesium.client.position_js.call(null,c_lambda,c_phi,rad_rad,p1__18320_SHARP_),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [alt], null));
});})(s,azs,vec__18322,c_lambda,c_phi))
,azs));
});
cesium.client.look_at = (function cesium$client$look_at(camera,nm){
var cmp = camera.position;
var cmp__$1 = Cesium.Cartographic.fromCartesian(cmp);
var vec__18325 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cmp__$1.longitude,cmp__$1.latitude,cmp__$1.height], null);
var lam = cljs.core.nth.call(null,vec__18325,(0),null);
var phi = cljs.core.nth.call(null,vec__18325,(1),null);
var alt = cljs.core.nth.call(null,vec__18325,(2),null);
var az = camera.heading;
var c = (((nm / (60)) / (180)) * Math.PI);
var vec__18328 = cesium.client.position_js.call(null,lam,phi,c,az);
var lam2 = cljs.core.nth.call(null,vec__18328,(0),null);
var phi2 = cljs.core.nth.call(null,vec__18328,(1),null);
cljs.core.println.call(null,new cljs.core.Keyword(null,"LA","LA",862330307),((lam2 / Math.PI) * (180)),((phi2 / Math.PI) * (180)));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lam2,phi2,alt], null);
});
cesium.client.add_orbit_button = (function cesium$client$add_orbit_button(){
var fly_one = (function cesium$client$add_orbit_button_$_fly_one(cam,next){
return cam.flyTo(({"destination": cljs.core.nth.call(null,cljs.core.deref.call(null,cesium.client.ORBIT).call(null,new cljs.core.Keyword(null,"ring","ring",-974350330)),next), "duration": cljs.core.deref.call(null,cesium.client.ORBIT).call(null,new cljs.core.Keyword(null,"step-sec","step-sec",-1096271625)), "complete": (function (){
return fly_next.call(null,cam,(next + (1)));
}), "cancel": (function (){
return fly_cancel.call(null,cam,next);
})}));
});
var fly_next = (function cesium$client$add_orbit_button_$_fly_next(cam,next){
if((next < cljs.core.count.call(null,cljs.core.deref.call(null,cesium.client.ORBIT).call(null,new cljs.core.Keyword(null,"ring","ring",-974350330))))){
return fly_one.call(null,cam,next);
} else {
return fly_one.call(null,cam,(0));
}
});
var fly_cancel = (function cesium$client$add_orbit_button_$_fly_cancel(cam,next){
return cljs.core._vreset_BANG_.call(null,cesium.client.ORBIT,cljs.core.assoc.call(null,cljs.core._deref.call(null,cesium.client.ORBIT),new cljs.core.Keyword(null,"next","next",-117701485),next));
});
var make_ring = (function cesium$client$add_orbit_button_$_make_ring(){
var vec__18337 = cljs.core.deref.call(null,cesium.client.ORBIT).call(null,new cljs.core.Keyword(null,"center-lpm","center-lpm",937143842));
var clam = cljs.core.nth.call(null,vec__18337,(0),null);
var cphi = cljs.core.nth.call(null,vec__18337,(1),null);
var alt = cljs.core.nth.call(null,vec__18337,(2),null);
var radr = (((cljs.core.deref.call(null,cesium.client.ORBIT).call(null,new cljs.core.Keyword(null,"radius-nm","radius-nm",-882383113)) / (60)) / (180)) * Math.PI);
var prr = cesium.client.points_ring_rad.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clam,cphi], null),radr,alt,(12));
var ring = cljs.core.vec.call(null,cljs.core.map.call(null,((function (vec__18337,clam,cphi,alt,radr,prr){
return (function (p1__18331_SHARP_,p2__18332_SHARP_,p3__18333_SHARP_){
return (new Cesium.Cartesian3(p1__18331_SHARP_,p2__18332_SHARP_,p3__18333_SHARP_));
});})(vec__18337,clam,cphi,alt,radr,prr))
,prr));
return cljs.core._vreset_BANG_.call(null,cesium.client.ORBIT,cljs.core.assoc.call(null,cljs.core._deref.call(null,cesium.client.ORBIT),new cljs.core.Keyword(null,"ring","ring",-974350330),ring));
});
var obut = document.createElement("button");
obut.innerHTML = "Toggle orbit";

obut.classList.add("cesium-button");

document.querySelector(".cesium-viewer-toolbar").prepend(obut);

return obut.onclick = ((function (obut){
return (function (){
return cljs.core.println.call(null,new cljs.core.Keyword(null,"OB","OB",1945345792));
});})(obut))
;
});

//# sourceMappingURL=client.js.map
