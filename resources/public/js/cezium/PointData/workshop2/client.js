// Compiled by ClojureScript 1.10.439 {}
goog.provide('workshop2.client');
goog.require('cljs.core');
goog.require('cesium.client');
workshop2.client.W2_HOME_VIEW = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),-73.99811446828902,new cljs.core.Keyword(null,"latitude","latitude",394867543),40.67451289564669,new cljs.core.Keyword(null,"height","height",1025178622),2631.082799425431,new cljs.core.Keyword(null,"heading","heading",-1312171873),7.1077496389876025,new cljs.core.Keyword(null,"pitch","pitch",1495126700),-31.98722309159895,new cljs.core.Keyword(null,"roll","roll",11266999),0.02588325131495497], null);
workshop2.client.W2_CLOCK_SET = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"animate","animate",1850194573),true,new cljs.core.Keyword(null,"step","step",1288888124),"SYSTEM_CLOCK",new cljs.core.Keyword(null,"range","range",1639692286),"UNBOUNDED",new cljs.core.Keyword(null,"start","start",-355208981),"2017-07-11T16:00:00Z",new cljs.core.Keyword(null,"stop","stop",-2140911342),"2017-07-11T16:20:00Z",new cljs.core.Keyword(null,"current","current",-1088038603),"2017-07-11T16:00:00Z",new cljs.core.Keyword(null,"mult","mult",1466794774),(2)], null);
workshop2.client.Neighborhoods = cesium.client.VIEWER.entities.add((new Cesium.Entity()));
workshop2.client.PEPIC = null;
workshop2.client.kml_adjustment = (function workshop2$client$kml_adjustment(ds){
cesium.client.VIEWER.dataSources.add(ds);

var vals = ds.entities.values;
var ebbs = cljs.core.filter.call(null,((function (vals){
return (function (p1__1320_SHARP_){
return Cesium.defined(p1__1320_SHARP_.billboard);
});})(vals))
,vals);
var seq__1321 = cljs.core.seq.call(null,ebbs);
var chunk__1322 = null;
var count__1323 = (0);
var i__1324 = (0);
while(true){
if((i__1324 < count__1323)){
var ebb = cljs.core._nth.call(null,chunk__1322,i__1324);
ebb.billboard.verticalOrigin = Cesium.VerticalOrigin.BOTTOM;

ebb.label = null;

ebb.billboard.distanceDisplayCondition = (new Cesium.DistanceDisplayCondition(10.0,20000.0));

var pos_1325 = ebb.position.getValue(Cesium.JulianDate.now());
var pos_1326__$1 = Cesium.Cartographic.fromCartesian(pos_1325);
var lat_1327 = Cesium.Math.toDegrees(pos_1326__$1.latitude);
var lon_1328 = Cesium.Math.toDegrees(pos_1326__$1.longitude);
var desc_1329 = ["<table class=\"cesium-infoBox-defaultTable cesium-infoBox-defaultTable-lighter\"><tbody>","<tr><th>Longitude</th><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lon_1328.toFixed((5))),"</td></tr>","<tr><th>Latitude</th><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat_1327.toFixed((5))),"</td></tr>","</tbody></table>"].join('');
ebb.description = desc_1329;


var G__1330 = seq__1321;
var G__1331 = chunk__1322;
var G__1332 = count__1323;
var G__1333 = (i__1324 + (1));
seq__1321 = G__1330;
chunk__1322 = G__1331;
count__1323 = G__1332;
i__1324 = G__1333;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__1321);
if(temp__5735__auto__){
var seq__1321__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1321__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__1321__$1);
var G__1334 = cljs.core.chunk_rest.call(null,seq__1321__$1);
var G__1335 = c__4461__auto__;
var G__1336 = cljs.core.count.call(null,c__4461__auto__);
var G__1337 = (0);
seq__1321 = G__1334;
chunk__1322 = G__1335;
count__1323 = G__1336;
i__1324 = G__1337;
continue;
} else {
var ebb = cljs.core.first.call(null,seq__1321__$1);
ebb.billboard.verticalOrigin = Cesium.VerticalOrigin.BOTTOM;

ebb.label = null;

ebb.billboard.distanceDisplayCondition = (new Cesium.DistanceDisplayCondition(10.0,20000.0));

var pos_1338 = ebb.position.getValue(Cesium.JulianDate.now());
var pos_1339__$1 = Cesium.Cartographic.fromCartesian(pos_1338);
var lat_1340 = Cesium.Math.toDegrees(pos_1339__$1.latitude);
var lon_1341 = Cesium.Math.toDegrees(pos_1339__$1.longitude);
var desc_1342 = ["<table class=\"cesium-infoBox-defaultTable cesium-infoBox-defaultTable-lighter\"><tbody>","<tr><th>Longitude</th><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lon_1341.toFixed((5))),"</td></tr>","<tr><th>Latitude</th><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat_1340.toFixed((5))),"</td></tr>","</tbody></table>"].join('');
ebb.description = desc_1342;


var G__1343 = cljs.core.next.call(null,seq__1321__$1);
var G__1344 = null;
var G__1345 = (0);
var G__1346 = (0);
seq__1321 = G__1343;
chunk__1322 = G__1344;
count__1323 = G__1345;
i__1324 = G__1346;
continue;
}
} else {
return null;
}
}
break;
}
});
workshop2.client.geojson_adjustment = (function workshop2$client$geojson_adjustment(ds){
cesium.client.VIEWER.dataSources.add(ds);

var vals = ds.entities.values;
var epls = cljs.core.filter.call(null,((function (vals){
return (function (p1__1347_SHARP_){
return Cesium.defined(p1__1347_SHARP_.polygon);
});})(vals))
,vals);
var seq__1348 = cljs.core.seq.call(null,epls);
var chunk__1349 = null;
var count__1350 = (0);
var i__1351 = (0);
while(true){
if((i__1351 < count__1350)){
var epl = cljs.core._nth.call(null,chunk__1349,i__1351);
epl.name = epl.properties.neighborhood;

epl.polygon.material = Cesium.Color.fromRandom(({"red": 0.1, "maximumGreen": 0.5, "minimumBlue": 0.5, "alpha": 0.6}));

epl.polygon.classificationType = Cesium.ClassificationType.TERRAIN;

var poss_1352 = epl.polygon.hierarchy.getValue(Cesium.JulianDate.now()).positions;
var cntr_1353 = Cesium.BoundingSphere.fromPoints(poss_1352).center;
var cntr_1354__$1 = Cesium.Ellipsoid.WGS84.scaleToGeodeticSurface(cntr_1353);
epl.position = cntr_1354__$1;

epl.parent = workshop2.client.Neighborhoods;

epl.label = ({"text": epl.name, "showBackground": true, "scale": 0.6, "horizontalOrigin": Cesium.HorizontalOrigin.CENTER, "verticalOrigin": Cesium.VerticalOrigin.BOTTOM, "distanceDisplayCondition": (new Cesium.DistanceDisplayCondition(10.0,8000.0)), "disableDepthTestDistance": 100.0});


var G__1355 = seq__1348;
var G__1356 = chunk__1349;
var G__1357 = count__1350;
var G__1358 = (i__1351 + (1));
seq__1348 = G__1355;
chunk__1349 = G__1356;
count__1350 = G__1357;
i__1351 = G__1358;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__1348);
if(temp__5735__auto__){
var seq__1348__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1348__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__1348__$1);
var G__1359 = cljs.core.chunk_rest.call(null,seq__1348__$1);
var G__1360 = c__4461__auto__;
var G__1361 = cljs.core.count.call(null,c__4461__auto__);
var G__1362 = (0);
seq__1348 = G__1359;
chunk__1349 = G__1360;
count__1350 = G__1361;
i__1351 = G__1362;
continue;
} else {
var epl = cljs.core.first.call(null,seq__1348__$1);
epl.name = epl.properties.neighborhood;

epl.polygon.material = Cesium.Color.fromRandom(({"red": 0.1, "maximumGreen": 0.5, "minimumBlue": 0.5, "alpha": 0.6}));

epl.polygon.classificationType = Cesium.ClassificationType.TERRAIN;

var poss_1363 = epl.polygon.hierarchy.getValue(Cesium.JulianDate.now()).positions;
var cntr_1364 = Cesium.BoundingSphere.fromPoints(poss_1363).center;
var cntr_1365__$1 = Cesium.Ellipsoid.WGS84.scaleToGeodeticSurface(cntr_1364);
epl.position = cntr_1365__$1;

epl.parent = workshop2.client.Neighborhoods;

epl.label = ({"text": epl.name, "showBackground": true, "scale": 0.6, "horizontalOrigin": Cesium.HorizontalOrigin.CENTER, "verticalOrigin": Cesium.VerticalOrigin.BOTTOM, "distanceDisplayCondition": (new Cesium.DistanceDisplayCondition(10.0,8000.0)), "disableDepthTestDistance": 100.0});


var G__1366 = cljs.core.next.call(null,seq__1348__$1);
var G__1367 = null;
var G__1368 = (0);
var G__1369 = (0);
seq__1348 = G__1366;
chunk__1349 = G__1367;
count__1350 = G__1368;
i__1351 = G__1369;
continue;
}
} else {
return null;
}
}
break;
}
});
workshop2.client.camera_modes = (function workshop2$client$camera_modes(entity){
var fme = document.getElementById("freeMode");
var dme = document.getElementById("droneMode");
var cmf = ((function (fme,dme){
return (function (e){
if(cljs.core.truth_(dme.checked)){
return cesium.client.VIEWER.trackedEntity = entity;
} else {
cesium.client.VIEWER.trackedEntity = null;

return cesium.client.CAMERA.flyTo(workshop2.client.W2_HOME_VIEW);
}
});})(fme,dme))
;
fme.addEventListener("change",cmf);

dme.addEventListener("change",cmf);

return cesium.client.VIEWER.trackedEntityChanged.addEventListener(((function (fme,dme,cmf){
return (function (e){
if(cljs.core._EQ_.call(null,cesium.client.VIEWER.trackedEntity,entity)){
fme.checked = false;

return dme.checked = true;
} else {
return null;
}
});})(fme,dme,cmf))
);
});
workshop2.client.drone_flight = (function workshop2$client$drone_flight(drone){
workshop2.client.camera_modes.call(null,drone);

var dpos = drone.position;
drone.model = ({"uri": "models/drone/CesiumDrone.gltf", "minimumPixelSize": (128), "maximumScale": (1000), "silhouetteColor": Cesium.Color.WHITE, "silhouetteSize": (2)});

drone.orientation = (new Cesium.VelocityOrientationProperty(dpos));

return dpos.setInterpolationOptions(({"interpolationDegree": (3), "interpolationAlgorithm": Cesium.HermitePolynomialApproximation}));
});
workshop2.client.add_3D_tileset = (function workshop2$client$add_3D_tileset(id){
var city = cesium.client.SCENE.primitives.add((new Cesium.Cesium3DTileset(({"url": Cesium.IonResource.fromAssetId(id)}))));
var load_indi = document.getElementById("loadingIndicator");
var sty_default = (new Cesium.Cesium3DTileStyle(({"color": "color('white')", "show": true})));
var sty_transp = (new Cesium.Cesium3DTileStyle(({"color": "color('white', 0.3)", "show": true})));
var sty_height = (new Cesium.Cesium3DTileStyle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"conditions","conditions",-1647236270),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["${height} >= 300","rgba(45, 0, 75, 0.5)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["${height} >= 200","rgb(102, 71, 151)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["${height} >= 100","rgb(170, 162, 204)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["${height} >= 50","rgb(224, 226, 238)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["${height} >= 25","rgb(252, 230, 200)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["${height} >= 10","rgb(248, 176, 87)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["${height} >= 5","rgb(198, 106, 11)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["true","rgb(127, 59, 8)"], null)], null)], null)], null))));
var tile_sty = document.getElementById("tileStyle");
var hoff = (-32);
load_indi.style.display = "block";

city.readyPromise.then(((function (city,load_indi,sty_default,sty_transp,sty_height,tile_sty,hoff){
return (function (ts){
load_indi.style.display = "none";

var bds = ts.boundingSphere;
var crt = Cesium.Cartographic.fromCartesian(bds.center);
var poss = Cesium.Cartesian3.fromRadians(crt.longitude,crt.latitude,0.0);
var poso = Cesium.Cartesian3.fromRadians(crt.longitude,crt.latitude,hoff);
var trans = Cesium.Cartesian3.subtract(poso,poss,(new Cesium.Cartesian3()));
return ts.modelMatrix = Cesium.Matrix4.fromTranslation(trans);
});})(city,load_indi,sty_default,sty_transp,sty_height,tile_sty,hoff))
);

city.style = sty_default;

return tile_sty.addEventListener("change",((function (city,load_indi,sty_default,sty_transp,sty_height,tile_sty,hoff){
return (function (e){
var pred__1370 = cljs.core._EQ_;
var expr__1371 = tile_sty.options.item(tile_sty.selectedIndex).value;
if(cljs.core.truth_(pred__1370.call(null,"none",expr__1371))){
return city.style = sty_default;
} else {
if(cljs.core.truth_(pred__1370.call(null,"height",expr__1371))){
return city.style = sty_height;
} else {
if(cljs.core.truth_(pred__1370.call(null,"transparent",expr__1371))){
return city.style = sty_transp;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__1371)].join('')));
}
}
}
});})(city,load_indi,sty_default,sty_transp,sty_height,tile_sty,hoff))
);
});
workshop2.client.mouse_interactivity = (function workshop2$client$mouse_interactivity(){
var input_action = (function workshop2$client$mouse_interactivity_$_input_action(mov){
var ppic = cesium.client.SCENE.pick(mov.endPosition);
var epic = (cljs.core.truth_(Cesium.defined(ppic))?ppic.id:null);
if(cljs.core.truth_(Cesium.defined(workshop2.client.PEPIC))){
workshop2.client.PEPIC.billboard.scale = 1.0;

workshop2.client.PEPIC.billboard.color = Cesium.Color.WHITE;
} else {
}

if(cljs.core.truth_((function (){var and__4036__auto__ = Cesium.defined(epic);
if(cljs.core.truth_(and__4036__auto__)){
return Cesium.defined(epic.billboard);
} else {
return and__4036__auto__;
}
})())){
epic.billboard.scale = 2.0;

epic.billboard.color = Cesium.Color.ORANGERED;

return (
workshop2.client.PEPIC = epic)
;
} else {
return null;
}
});
var hand = (new Cesium.ScreenSpaceEventHandler(cesium.client.CANVAS));
return hand.setInputAction(input_action,Cesium.ScreenSpaceEventType.MOUSE_MOVE);
});
workshop2.client.extras = (function workshop2$client$extras(){
var nbe = document.getElementById("neighborhoods");
var she = document.getElementById("shadows");
nbe.addEventListener("change",((function (nbe,she){
return (function (e){
return workshop2.client.Neighborhoods.show = e.target.checked;
});})(nbe,she))
);

return she.addEventListener("change",((function (nbe,she){
return (function (e){
return cesium.client.VIEWER.shadows = e.target.checked;
});})(nbe,she))
);
});
workshop2.client.init_workshop2_client = (function workshop2$client$init_workshop2_client(){
cesium.client.add_imagery_by_asset_id.call(null,(3954),cesium.client.VIEWER);

cesium.client.add_terrain.call(null,({"requestWaterMask": true, "requestVertexNormals": true}),cesium.client.VIEWER);

cesium.client.camera_home.call(null,cesium.client.CAMERA,workshop2.client.W2_HOME_VIEW);

cesium.client.clock_settings.call(null,cesium.client.CLOCK,workshop2.client.W2_CLOCK_SET,cesium.client.VIEWER);

cesium.client.load_data.call(null,new cljs.core.Keyword(null,"KML","KML",1829561453),"data/sampleGeocacheLocations.kml",({"camera": cesium.client.CAMERA, "canvas": cesium.client.CANVAS, "clampToGround": true}),cesium.client.VIEWER,workshop2.client.kml_adjustment);

cesium.client.load_data.call(null,new cljs.core.Keyword(null,"GeoJSON","GeoJSON",33508860),"data/sampleNeighborhoods.geojson",({"clampToGround": true}),cesium.client.VIEWER,workshop2.client.geojson_adjustment);

cesium.client.load_data.call(null,new cljs.core.Keyword(null,"CZML","CZML",-1539311408),"data/sampleFlight.czml",null,cesium.client.VIEWER,(function (p1__1373_SHARP_){
return workshop2.client.drone_flight.call(null,p1__1373_SHARP_.entities.getById("Aircraft/Aircraft1"));
}));

workshop2.client.add_3D_tileset.call(null,(75343));

workshop2.client.mouse_interactivity.call(null);

return workshop2.client.extras.call(null);
});
cljs.core.enable_console_print_BANG_.call(null);
window.onload = workshop2.client.init_workshop2_client.call(null);

//# sourceMappingURL=client.js.map
