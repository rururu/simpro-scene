// Compiled by ClojureScript 1.10.439 {}
goog.provide('workshop.client');
goog.require('cljs.core');
workshop.client.VIEWER = (new Cesium.Viewer("cesiumContainer",({"scene3DOnly": true, "selectionIndicator": false, "baseLayerPicker": false})));
workshop.client.CLOCK = workshop.client.VIEWER.clock;
workshop.client.SCENE = workshop.client.VIEWER.scene;
workshop.client.CAMERA = workshop.client.SCENE.camera;
workshop.client.CANVAS = workshop.client.SCENE.canvas;
workshop.client.HOME_VIEW = null;
workshop.client.PEPIC = null;
workshop.client.Neighborhoods = workshop.client.VIEWER.entities.add((new Cesium.Entity()));
workshop.client.add_imagery_by_asset_id = (function workshop$client$add_imagery_by_asset_id(id){
var ilays = workshop.client.VIEWER.imageryLayers;
ilays.remove(ilays.get((0)));

return ilays.addImageryProvider((new Cesium.IonImageryProvider(({"assetId": id}))));
});
workshop.client.add_terrain = (function workshop$client$add_terrain(){
workshop.client.VIEWER.terrainProvider = (new Cesium.createWorldTerrain(({"requestWaterMask": true, "requestVertexNormals": true})));

return workshop.client.SCENE.globe.depthTestAgainstTerrain = true;
});
workshop.client.camera_control = (function workshop$client$camera_control(longitude,latitude,height,heading,pitch,roll){
var pos = (new Cesium.Cartesian3.fromDegrees(longitude,latitude,height));
var orient = (new Cesium.HeadingPitchRoll.fromDegrees(heading,pitch,roll));
workshop.client.HOME_VIEW = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"destination","destination",-253872483),pos,new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"heading","heading",-1312171873),orient.heading,new cljs.core.Keyword(null,"pitch","pitch",1495126700),orient.pitch,new cljs.core.Keyword(null,"roll","roll",11266999),orient.roll], null),new cljs.core.Keyword(null,"duration","duration",1444101068),4.0,new cljs.core.Keyword(null,"maximumHeight","maximumHeight",159239809),(2000),new cljs.core.Keyword(null,"pitchAdjustHeight","pitchAdjustHeight",718386687),(2000),new cljs.core.Keyword(null,"endTransform","endTransform",-1545129030),Cesium.Matrix4.IDENTITY], null));

workshop.client.VIEWER.homeButton.viewModel.command.beforeExecute.addEventListener(((function (pos,orient){
return (function (e){
e.cancel = true;

return workshop.client.CAMERA.flyTo(workshop.client.HOME_VIEW);
});})(pos,orient))
);

return workshop.client.CAMERA.flyTo(workshop.client.HOME_VIEW);
});
workshop.client.clock_control = (function workshop$client$clock_control(animate,start,stop,current,mult){
workshop.client.CLOCK.shouldAnimate = animate;

workshop.client.CLOCK.startTime = Cesium.JulianDate.fromIso8601(start);

workshop.client.CLOCK.stopTime = Cesium.JulianDate.fromIso8601(stop);

workshop.client.CLOCK.currentTime = Cesium.JulianDate.fromIso8601(current);

workshop.client.CLOCK.multiplier = mult;

workshop.client.CLOCK.clockStep = Cesium.ClockStep.SYSTEM_CLOCK_MULTIPLIER;

workshop.client.CLOCK.clockRange = Cesium.ClockRange.LOOP_STOP;

return workshop.client.VIEWER.timeline.zoomTo(workshop.client.CLOCK.startTime,workshop.client.CLOCK.stopTime);
});
workshop.client.load_kml = (function workshop$client$load_kml(source,ground){
var kmlops = ({"camera": workshop.client.CAMERA, "canvas": workshop.client.CANVAS, "clampToGround": ground});
var promise = Cesium.KmlDataSource.load(source,kmlops);
return promise.then(((function (kmlops,promise){
return (function (ds){
workshop.client.VIEWER.dataSources.add(ds);

var vals = ds.entities.values;
var ebbs = cljs.core.filter.call(null,((function (vals,kmlops,promise){
return (function (p1__5268_SHARP_){
return Cesium.defined(p1__5268_SHARP_.billboard);
});})(vals,kmlops,promise))
,vals);
var seq__5269 = cljs.core.seq.call(null,ebbs);
var chunk__5270 = null;
var count__5271 = (0);
var i__5272 = (0);
while(true){
if((i__5272 < count__5271)){
var ebb = cljs.core._nth.call(null,chunk__5270,i__5272);
ebb.billboard.verticalOrigin = Cesium.VerticalOrigin.BOTTOM;

ebb.label = null;

ebb.billboard.distanceDisplayCondition = (new Cesium.DistanceDisplayCondition(10.0,20000.0));

var pos_5273 = ebb.position.getValue(Cesium.JulianDate.now());
var pos_5274__$1 = Cesium.Cartographic.fromCartesian(pos_5273);
var lat_5275 = Cesium.Math.toDegrees(pos_5274__$1.latitude);
var lon_5276 = Cesium.Math.toDegrees(pos_5274__$1.longitude);
var desc_5277 = ["<table class=\"cesium-infoBox-defaultTable cesium-infoBox-defaultTable-lighter\"><tbody>","<tr><th>Longitude</th><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lon_5276.toFixed((5))),"</td></tr>","<tr><th>Latitude</th><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat_5275.toFixed((5))),"</td></tr>","</tbody></table>"].join('');
ebb.description = desc_5277;


var G__5278 = seq__5269;
var G__5279 = chunk__5270;
var G__5280 = count__5271;
var G__5281 = (i__5272 + (1));
seq__5269 = G__5278;
chunk__5270 = G__5279;
count__5271 = G__5280;
i__5272 = G__5281;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__5269);
if(temp__5735__auto__){
var seq__5269__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5269__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__5269__$1);
var G__5282 = cljs.core.chunk_rest.call(null,seq__5269__$1);
var G__5283 = c__4461__auto__;
var G__5284 = cljs.core.count.call(null,c__4461__auto__);
var G__5285 = (0);
seq__5269 = G__5282;
chunk__5270 = G__5283;
count__5271 = G__5284;
i__5272 = G__5285;
continue;
} else {
var ebb = cljs.core.first.call(null,seq__5269__$1);
ebb.billboard.verticalOrigin = Cesium.VerticalOrigin.BOTTOM;

ebb.label = null;

ebb.billboard.distanceDisplayCondition = (new Cesium.DistanceDisplayCondition(10.0,20000.0));

var pos_5286 = ebb.position.getValue(Cesium.JulianDate.now());
var pos_5287__$1 = Cesium.Cartographic.fromCartesian(pos_5286);
var lat_5288 = Cesium.Math.toDegrees(pos_5287__$1.latitude);
var lon_5289 = Cesium.Math.toDegrees(pos_5287__$1.longitude);
var desc_5290 = ["<table class=\"cesium-infoBox-defaultTable cesium-infoBox-defaultTable-lighter\"><tbody>","<tr><th>Longitude</th><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lon_5289.toFixed((5))),"</td></tr>","<tr><th>Latitude</th><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat_5288.toFixed((5))),"</td></tr>","</tbody></table>"].join('');
ebb.description = desc_5290;


var G__5291 = cljs.core.next.call(null,seq__5269__$1);
var G__5292 = null;
var G__5293 = (0);
var G__5294 = (0);
seq__5269 = G__5291;
chunk__5270 = G__5292;
count__5271 = G__5293;
i__5272 = G__5294;
continue;
}
} else {
return null;
}
}
break;
}
});})(kmlops,promise))
);
});
workshop.client.load_geojson = (function workshop$client$load_geojson(source,ground){
var promise = Cesium.GeoJsonDataSource.load(source,cljs.core.PersistentHashSet.createAsIfByAssoc([ground,new cljs.core.Keyword(null,"clampToGround","clampToGround",1108773872)]));
return promise.then(((function (promise){
return (function (ds){
workshop.client.VIEWER.dataSources.add(ds);

var vals = ds.entities.values;
var epls = cljs.core.filter.call(null,((function (vals,promise){
return (function (p1__5295_SHARP_){
return Cesium.defined(p1__5295_SHARP_.polygon);
});})(vals,promise))
,vals);
var seq__5296 = cljs.core.seq.call(null,epls);
var chunk__5297 = null;
var count__5298 = (0);
var i__5299 = (0);
while(true){
if((i__5299 < count__5298)){
var epl = cljs.core._nth.call(null,chunk__5297,i__5299);
epl.name = epl.properties.neighborhood;

epl.polygon.material = Cesium.Color.fromRandom(({"minimumRed": 0.5, "maximumGreen": 0.5, "blue": 0.1, "alpha": 0.6}));

epl.polygon.classificationType = Cesium.ClassificationType.TERRAIN;

var poss_5300 = epl.polygon.hierarchy.getValue(Cesium.JulianDate.now()).positions;
var cntr_5301 = Cesium.BoundingSphere.fromPoints(poss_5300).center;
var cntr_5302__$1 = Cesium.Ellipsoid.WGS84.scaleToGeodeticSurface(cntr_5301);
epl.position = cntr_5302__$1;

epl.parent = workshop.client.Neighborhoods;

epl.label = ({"text": epl.name, "showBackground": true, "scale": 0.6, "horizontalOrigin": Cesium.HorizontalOrigin.CENTER, "verticalOrigin": Cesium.VerticalOrigin.BOTTOM, "distanceDisplayCondition": (new Cesium.DistanceDisplayCondition(10.0,8000.0)), "disableDepthTestDistance": 100.0});


var G__5303 = seq__5296;
var G__5304 = chunk__5297;
var G__5305 = count__5298;
var G__5306 = (i__5299 + (1));
seq__5296 = G__5303;
chunk__5297 = G__5304;
count__5298 = G__5305;
i__5299 = G__5306;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__5296);
if(temp__5735__auto__){
var seq__5296__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5296__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__5296__$1);
var G__5307 = cljs.core.chunk_rest.call(null,seq__5296__$1);
var G__5308 = c__4461__auto__;
var G__5309 = cljs.core.count.call(null,c__4461__auto__);
var G__5310 = (0);
seq__5296 = G__5307;
chunk__5297 = G__5308;
count__5298 = G__5309;
i__5299 = G__5310;
continue;
} else {
var epl = cljs.core.first.call(null,seq__5296__$1);
epl.name = epl.properties.neighborhood;

epl.polygon.material = Cesium.Color.fromRandom(({"minimumRed": 0.5, "maximumGreen": 0.5, "blue": 0.1, "alpha": 0.6}));

epl.polygon.classificationType = Cesium.ClassificationType.TERRAIN;

var poss_5311 = epl.polygon.hierarchy.getValue(Cesium.JulianDate.now()).positions;
var cntr_5312 = Cesium.BoundingSphere.fromPoints(poss_5311).center;
var cntr_5313__$1 = Cesium.Ellipsoid.WGS84.scaleToGeodeticSurface(cntr_5312);
epl.position = cntr_5313__$1;

epl.parent = workshop.client.Neighborhoods;

epl.label = ({"text": epl.name, "showBackground": true, "scale": 0.6, "horizontalOrigin": Cesium.HorizontalOrigin.CENTER, "verticalOrigin": Cesium.VerticalOrigin.BOTTOM, "distanceDisplayCondition": (new Cesium.DistanceDisplayCondition(10.0,8000.0)), "disableDepthTestDistance": 100.0});


var G__5314 = cljs.core.next.call(null,seq__5296__$1);
var G__5315 = null;
var G__5316 = (0);
var G__5317 = (0);
seq__5296 = G__5314;
chunk__5297 = G__5315;
count__5298 = G__5316;
i__5299 = G__5317;
continue;
}
} else {
return null;
}
}
break;
}
});})(promise))
);
});
workshop.client.camera_modes = (function workshop$client$camera_modes(entity){
var fme = document.getElementById("freeMode");
var dme = document.getElementById("droneMode");
var cmf = ((function (fme,dme){
return (function (e){
if(cljs.core.truth_(dme.checked)){
return workshop.client.VIEWER.trackedEntity = entity;
} else {
workshop.client.VIEWER.trackedEntity = null;

return workshop.client.CAMERA.flyTo(workshop.client.HOME_VIEW);
}
});})(fme,dme))
;
fme.addEventListener("change",cmf);

dme.addEventListener("change",cmf);

return workshop.client.VIEWER.trackedEntityChanged.addEventListener(((function (fme,dme,cmf){
return (function (e){
if(cljs.core._EQ_.call(null,workshop.client.VIEWER.trackedEntity,entity)){
fme.checked = false;

return dme.checked = true;
} else {
return null;
}
});})(fme,dme,cmf))
);
});
workshop.client.drone_flight = (function workshop$client$drone_flight(drone){
workshop.client.camera_modes.call(null,drone);

var dpos = drone.position;
drone.model = ({"uri": "models/drone/CesiumDrone.gltf", "minimumPixelSize": (128), "maximumScale": (1000), "silhouetteColor": Cesium.Color.WHITE, "silhouetteSize": (2)});

drone.orientation = (new Cesium.VelocityOrientationProperty(dpos));

return dpos.setInterpolationOptions(({"interpolationDegree": (3), "interpolationAlgorithm": Cesium.HermitePolynomialApproximation}));
});
workshop.client.load_drone_flight = (function workshop$client$load_drone_flight(source){
var promise = Cesium.CzmlDataSource.load(source);
return promise.then(((function (promise){
return (function (ds){
workshop.client.VIEWER.dataSources.add(ds);

return workshop.client.drone_flight.call(null,ds.entities.getById("Aircraft/Aircraft1"));
});})(promise))
);
});
workshop.client.add_3D_tileset = (function workshop$client$add_3D_tileset(id){
var city = workshop.client.SCENE.primitives.add((new Cesium.Cesium3DTileset(({"url": Cesium.IonResource.fromAssetId(id)}))));
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
var pred__5318 = cljs.core._EQ_;
var expr__5319 = tile_sty.options.item(tile_sty.selectedIndex).value;
if(cljs.core.truth_(pred__5318.call(null,"none",expr__5319))){
return city.style = sty_default;
} else {
if(cljs.core.truth_(pred__5318.call(null,"height",expr__5319))){
return city.style = sty_height;
} else {
if(cljs.core.truth_(pred__5318.call(null,"transparent",expr__5319))){
return city.style = sty_transp;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__5319)].join('')));
}
}
}
});})(city,load_indi,sty_default,sty_transp,sty_height,tile_sty,hoff))
);
});
workshop.client.mouse_interactivity = (function workshop$client$mouse_interactivity(){
var input_action = (function workshop$client$mouse_interactivity_$_input_action(mov){
var ppic = workshop.client.SCENE.pick(mov.endPosition);
var epic = (cljs.core.truth_(Cesium.defined(ppic))?ppic.id:null);
if(cljs.core.truth_(Cesium.defined(workshop.client.PEPIC))){
workshop.client.PEPIC.billboard.scale = 1.0;

workshop.client.PEPIC.billboard.color = Cesium.Color.WHITE;
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
workshop.client.PEPIC = epic)
;
} else {
return null;
}
});
var hand = (new Cesium.ScreenSpaceEventHandler(workshop.client.CANVAS));
return hand.setInputAction(input_action,Cesium.ScreenSpaceEventType.MOUSE_MOVE);
});
workshop.client.extras = (function workshop$client$extras(){
var nbe = document.getElementById("neighborhoods");
var she = document.getElementById("shadows");
nbe.addEventListener("change",((function (nbe,she){
return (function (e){
return workshop.client.Neighborhoods.show = e.target.checked;
});})(nbe,she))
);

return she.addEventListener("change",((function (nbe,she){
return (function (e){
return workshop.client.VIEWER.shadows = e.target.checked;
});})(nbe,she))
);
});
workshop.client.init_client = (function workshop$client$init_client(){
workshop.client.add_imagery_by_asset_id.call(null,(3954));

workshop.client.add_terrain.call(null);

workshop.client.camera_control.call(null,-73.99811446828902,40.67451289564669,2631.082799425431,7.1077496389876025,-31.98722309159895,0.02588325131495497);

workshop.client.clock_control.call(null,true,"2017-07-11T16:00:00Z","2017-07-11T16:20:00Z","2017-07-11T16:00:00Z",(2));

workshop.client.load_kml.call(null,"data/sampleGeocacheLocations.kml",true);

workshop.client.load_geojson.call(null,"data/sampleNeighborhoods.geojson",true);

workshop.client.load_drone_flight.call(null,"data/sampleFlight.czml");

workshop.client.add_3D_tileset.call(null,(75343));

workshop.client.mouse_interactivity.call(null);

return workshop.client.extras.call(null);
});
cljs.core.enable_console_print_BANG_.call(null);
window.onload = workshop.client.init_client.call(null);

//# sourceMappingURL=client.js.map
