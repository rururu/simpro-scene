// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('cesium.workshop.client');
goog.require('cljs.core');
cesium.workshop.client.VIEWER = (new Cesium.Viewer("cesiumContainer",({"scene3DOnly": true, "selectionIndicator": false, "baseLayerPicker": false})));
cesium.workshop.client.CLOCK = cesium.workshop.client.VIEWER.clock;
cesium.workshop.client.SCENE = cesium.workshop.client.VIEWER.scene;
cesium.workshop.client.CAMERA = cesium.workshop.client.SCENE.camera;
cesium.workshop.client.CANVAS = cesium.workshop.client.SCENE.canvas;
cesium.workshop.client.HOME_VIEW = null;
cesium.workshop.client.PEPIC = null;
cesium.workshop.client.Neighborhoods = cesium.workshop.client.VIEWER.entities.add((new Cesium.Entity()));
cesium.workshop.client.add_imagery_by_asset_id = (function cesium$workshop$client$add_imagery_by_asset_id(id){
var ilays = cesium.workshop.client.VIEWER.imageryLayers;
ilays.remove(ilays.get((0)));

return ilays.addImageryProvider((new Cesium.IonImageryProvider(({"assetId": id}))));
});
cesium.workshop.client.add_terrain = (function cesium$workshop$client$add_terrain(){
(cesium.workshop.client.VIEWER.terrainProvider = (new Cesium.createWorldTerrain(({"requestWaterMask": true, "requestVertexNormals": true}))));

return (cesium.workshop.client.SCENE.globe.depthTestAgainstTerrain = true);
});
cesium.workshop.client.camera_control = (function cesium$workshop$client$camera_control(longitude,latitude,height,heading,pitch,roll){
var pos = (new Cesium.Cartesian3.fromDegrees(longitude,latitude,height));
var orient = (new Cesium.HeadingPitchRoll.fromDegrees(heading,pitch,roll));
cesium.workshop.client.HOME_VIEW = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"destination","destination",-253872483),pos,new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"heading","heading",-1312171873),orient.heading,new cljs.core.Keyword(null,"pitch","pitch",1495126700),orient.pitch,new cljs.core.Keyword(null,"roll","roll",11266999),orient.roll], null),new cljs.core.Keyword(null,"duration","duration",1444101068),4.0,new cljs.core.Keyword(null,"maximumHeight","maximumHeight",159239809),(2000),new cljs.core.Keyword(null,"pitchAdjustHeight","pitchAdjustHeight",718386687),(2000),new cljs.core.Keyword(null,"endTransform","endTransform",-1545129030),Cesium.Matrix4.IDENTITY], null));

cesium.workshop.client.VIEWER.homeButton.viewModel.command.beforeExecute.addEventListener((function (e){
(e.cancel = true);

return cesium.workshop.client.CAMERA.flyTo(cesium.workshop.client.HOME_VIEW);
}));

return cesium.workshop.client.CAMERA.flyTo(cesium.workshop.client.HOME_VIEW);
});
cesium.workshop.client.clock_control = (function cesium$workshop$client$clock_control(animate,start,stop,current,mult){
(cesium.workshop.client.CLOCK.shouldAnimate = animate);

(cesium.workshop.client.CLOCK.startTime = Cesium.JulianDate.fromIso8601(start));

(cesium.workshop.client.CLOCK.stopTime = Cesium.JulianDate.fromIso8601(stop));

(cesium.workshop.client.CLOCK.currentTime = Cesium.JulianDate.fromIso8601(current));

(cesium.workshop.client.CLOCK.multiplier = mult);

(cesium.workshop.client.CLOCK.clockStep = Cesium.ClockStep.SYSTEM_CLOCK_MULTIPLIER);

(cesium.workshop.client.CLOCK.clockRange = Cesium.ClockRange.LOOP_STOP);

return cesium.workshop.client.VIEWER.timeline.zoomTo(cesium.workshop.client.CLOCK.startTime,cesium.workshop.client.CLOCK.stopTime);
});
cesium.workshop.client.load_kml = (function cesium$workshop$client$load_kml(source,ground){
var kmlops = ({"camera": cesium.workshop.client.CAMERA, "canvas": cesium.workshop.client.CANVAS, "clampToGround": ground});
var promise = Cesium.KmlDataSource.load(source,kmlops);
return promise.then((function (ds){
cesium.workshop.client.VIEWER.dataSources.add(ds);

var vals = ds.entities.values;
var ebbs = cljs.core.filter.call(null,(function (p1__10238_SHARP_){
return Cesium.defined(p1__10238_SHARP_.billboard);
}),vals);
var seq__10239 = cljs.core.seq.call(null,ebbs);
var chunk__10240 = null;
var count__10241 = (0);
var i__10242 = (0);
while(true){
if((i__10242 < count__10241)){
var ebb = cljs.core._nth.call(null,chunk__10240,i__10242);
(ebb.billboard.verticalOrigin = Cesium.VerticalOrigin.BOTTOM);

(ebb.label = null);

(ebb.billboard.distanceDisplayCondition = (new Cesium.DistanceDisplayCondition(10.0,20000.0)));

var pos_10243 = ebb.position.getValue(Cesium.JulianDate.now());
var pos_10244__$1 = Cesium.Cartographic.fromCartesian(pos_10243);
var lat_10245 = Cesium.Math.toDegrees(pos_10244__$1.latitude);
var lon_10246 = Cesium.Math.toDegrees(pos_10244__$1.longitude);
var desc_10247 = ["<table class=\"cesium-infoBox-defaultTable cesium-infoBox-defaultTable-lighter\"><tbody>","<tr><th>Longitude</th><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lon_10246.toFixed((5))),"</td></tr>","<tr><th>Latitude</th><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat_10245.toFixed((5))),"</td></tr>","</tbody></table>"].join('');
(ebb.description = desc_10247);


var G__10248 = seq__10239;
var G__10249 = chunk__10240;
var G__10250 = count__10241;
var G__10251 = (i__10242 + (1));
seq__10239 = G__10248;
chunk__10240 = G__10249;
count__10241 = G__10250;
i__10242 = G__10251;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__10239);
if(temp__5804__auto__){
var seq__10239__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10239__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__10239__$1);
var G__10252 = cljs.core.chunk_rest.call(null,seq__10239__$1);
var G__10253 = c__5568__auto__;
var G__10254 = cljs.core.count.call(null,c__5568__auto__);
var G__10255 = (0);
seq__10239 = G__10252;
chunk__10240 = G__10253;
count__10241 = G__10254;
i__10242 = G__10255;
continue;
} else {
var ebb = cljs.core.first.call(null,seq__10239__$1);
(ebb.billboard.verticalOrigin = Cesium.VerticalOrigin.BOTTOM);

(ebb.label = null);

(ebb.billboard.distanceDisplayCondition = (new Cesium.DistanceDisplayCondition(10.0,20000.0)));

var pos_10256 = ebb.position.getValue(Cesium.JulianDate.now());
var pos_10257__$1 = Cesium.Cartographic.fromCartesian(pos_10256);
var lat_10258 = Cesium.Math.toDegrees(pos_10257__$1.latitude);
var lon_10259 = Cesium.Math.toDegrees(pos_10257__$1.longitude);
var desc_10260 = ["<table class=\"cesium-infoBox-defaultTable cesium-infoBox-defaultTable-lighter\"><tbody>","<tr><th>Longitude</th><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lon_10259.toFixed((5))),"</td></tr>","<tr><th>Latitude</th><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat_10258.toFixed((5))),"</td></tr>","</tbody></table>"].join('');
(ebb.description = desc_10260);


var G__10261 = cljs.core.next.call(null,seq__10239__$1);
var G__10262 = null;
var G__10263 = (0);
var G__10264 = (0);
seq__10239 = G__10261;
chunk__10240 = G__10262;
count__10241 = G__10263;
i__10242 = G__10264;
continue;
}
} else {
return null;
}
}
break;
}
}));
});
cesium.workshop.client.load_geojson = (function cesium$workshop$client$load_geojson(source,ground){
var promise = Cesium.GeoJsonDataSource.load(source,({"clampToGround": ground}));
return promise.then((function (ds){
cesium.workshop.client.VIEWER.dataSources.add(ds);

var vals = ds.entities.values;
var epls = cljs.core.filter.call(null,(function (p1__10265_SHARP_){
return Cesium.defined(p1__10265_SHARP_.polygon);
}),vals);
var seq__10266 = cljs.core.seq.call(null,epls);
var chunk__10267 = null;
var count__10268 = (0);
var i__10269 = (0);
while(true){
if((i__10269 < count__10268)){
var epl = cljs.core._nth.call(null,chunk__10267,i__10269);
(epl.name = epl.properties.neighborhood);

(epl.polygon.material = Cesium.Color.fromRandom(({"red": 0.1, "maximumGreen": 0.5, "minimumBlue": 0.5, "alpha": 0.6})));

(epl.polygon.classificationType = Cesium.ClassificationType.TERRAIN);

var poss_10270 = epl.polygon.hierarchy.getValue(Cesium.JulianDate.now()).positions;
var cntr_10271 = Cesium.BoundingSphere.fromPoints(poss_10270).center;
var cntr_10272__$1 = Cesium.Ellipsoid.WGS84.scaleToGeodeticSurface(cntr_10271);
(epl.position = cntr_10272__$1);

(epl.parent = cesium.workshop.client.Neighborhoods);

(epl.label = ({"text": epl.name, "showBackground": true, "scale": 0.6, "horizontalOrigin": Cesium.HorizontalOrigin.CENTER, "verticalOrigin": Cesium.VerticalOrigin.BOTTOM, "distanceDisplayCondition": (new Cesium.DistanceDisplayCondition(10.0,8000.0)), "disableDepthTestDistance": 100.0}));


var G__10273 = seq__10266;
var G__10274 = chunk__10267;
var G__10275 = count__10268;
var G__10276 = (i__10269 + (1));
seq__10266 = G__10273;
chunk__10267 = G__10274;
count__10268 = G__10275;
i__10269 = G__10276;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__10266);
if(temp__5804__auto__){
var seq__10266__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10266__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__10266__$1);
var G__10277 = cljs.core.chunk_rest.call(null,seq__10266__$1);
var G__10278 = c__5568__auto__;
var G__10279 = cljs.core.count.call(null,c__5568__auto__);
var G__10280 = (0);
seq__10266 = G__10277;
chunk__10267 = G__10278;
count__10268 = G__10279;
i__10269 = G__10280;
continue;
} else {
var epl = cljs.core.first.call(null,seq__10266__$1);
(epl.name = epl.properties.neighborhood);

(epl.polygon.material = Cesium.Color.fromRandom(({"red": 0.1, "maximumGreen": 0.5, "minimumBlue": 0.5, "alpha": 0.6})));

(epl.polygon.classificationType = Cesium.ClassificationType.TERRAIN);

var poss_10281 = epl.polygon.hierarchy.getValue(Cesium.JulianDate.now()).positions;
var cntr_10282 = Cesium.BoundingSphere.fromPoints(poss_10281).center;
var cntr_10283__$1 = Cesium.Ellipsoid.WGS84.scaleToGeodeticSurface(cntr_10282);
(epl.position = cntr_10283__$1);

(epl.parent = cesium.workshop.client.Neighborhoods);

(epl.label = ({"text": epl.name, "showBackground": true, "scale": 0.6, "horizontalOrigin": Cesium.HorizontalOrigin.CENTER, "verticalOrigin": Cesium.VerticalOrigin.BOTTOM, "distanceDisplayCondition": (new Cesium.DistanceDisplayCondition(10.0,8000.0)), "disableDepthTestDistance": 100.0}));


var G__10284 = cljs.core.next.call(null,seq__10266__$1);
var G__10285 = null;
var G__10286 = (0);
var G__10287 = (0);
seq__10266 = G__10284;
chunk__10267 = G__10285;
count__10268 = G__10286;
i__10269 = G__10287;
continue;
}
} else {
return null;
}
}
break;
}
}));
});
cesium.workshop.client.camera_modes = (function cesium$workshop$client$camera_modes(entity){
var fme = document.getElementById("freeMode");
var dme = document.getElementById("droneMode");
var cmf = (function (e){
if(cljs.core.truth_(dme.checked)){
return (cesium.workshop.client.VIEWER.trackedEntity = entity);
} else {
(cesium.workshop.client.VIEWER.trackedEntity = null);

return cesium.workshop.client.CAMERA.flyTo(cesium.workshop.client.HOME_VIEW);
}
});
fme.addEventListener("change",cmf);

dme.addEventListener("change",cmf);

return cesium.workshop.client.VIEWER.trackedEntityChanged.addEventListener((function (e){
if(cljs.core._EQ_.call(null,cesium.workshop.client.VIEWER.trackedEntity,entity)){
(fme.checked = false);

return (dme.checked = true);
} else {
return null;
}
}));
});
cesium.workshop.client.drone_flight = (function cesium$workshop$client$drone_flight(drone){
cesium.workshop.client.camera_modes.call(null,drone);

var dpos = drone.position;
(drone.model = ({"uri": "models/drone/CesiumDrone.gltf", "minimumPixelSize": (128), "maximumScale": (1000), "silhouetteColor": Cesium.Color.WHITE, "silhouetteSize": (2)}));

(drone.orientation = (new Cesium.VelocityOrientationProperty(dpos)));

return dpos.setInterpolationOptions(({"interpolationDegree": (3), "interpolationAlgorithm": Cesium.HermitePolynomialApproximation}));
});
cesium.workshop.client.load_drone_flight = (function cesium$workshop$client$load_drone_flight(source){
var promise = Cesium.CzmlDataSource.load(source);
return promise.then((function (ds){
cesium.workshop.client.VIEWER.dataSources.add(ds);

return cesium.workshop.client.drone_flight.call(null,ds.entities.getById("Aircraft/Aircraft1"));
}));
});
cesium.workshop.client.add_3D_tileset = (function cesium$workshop$client$add_3D_tileset(id){
var city = cesium.workshop.client.SCENE.primitives.add((new Cesium.Cesium3DTileset(({"url": Cesium.IonResource.fromAssetId(id)}))));
var load_indi = document.getElementById("loadingIndicator");
var sty_default = (new Cesium.Cesium3DTileStyle(({"color": "color('white')", "show": true})));
var sty_transp = (new Cesium.Cesium3DTileStyle(({"color": "color('white', 0.3)", "show": true})));
var sty_height = (new Cesium.Cesium3DTileStyle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"conditions","conditions",-1647236270),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["${height} >= 300","rgba(45, 0, 75, 0.5)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["${height} >= 200","rgb(102, 71, 151)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["${height} >= 100","rgb(170, 162, 204)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["${height} >= 50","rgb(224, 226, 238)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["${height} >= 25","rgb(252, 230, 200)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["${height} >= 10","rgb(248, 176, 87)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["${height} >= 5","rgb(198, 106, 11)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["true","rgb(127, 59, 8)"], null)], null)], null)], null))));
var tile_sty = document.getElementById("tileStyle");
var hoff = (-32);
(load_indi.style.display = "block");

city.readyPromise.then((function (ts){
(load_indi.style.display = "none");

var bds = ts.boundingSphere;
var crt = Cesium.Cartographic.fromCartesian(bds.center);
var poss = Cesium.Cartesian3.fromRadians(crt.longitude,crt.latitude,0.0);
var poso = Cesium.Cartesian3.fromRadians(crt.longitude,crt.latitude,hoff);
var trans = Cesium.Cartesian3.subtract(poso,poss,(new Cesium.Cartesian3()));
return (ts.modelMatrix = Cesium.Matrix4.fromTranslation(trans));
}));

(city.style = sty_default);

return tile_sty.addEventListener("change",(function (e){
var pred__10288 = cljs.core._EQ_;
var expr__10289 = tile_sty.options.item(tile_sty.selectedIndex).value;
if(cljs.core.truth_(pred__10288.call(null,"none",expr__10289))){
return (city.style = sty_default);
} else {
if(cljs.core.truth_(pred__10288.call(null,"height",expr__10289))){
return (city.style = sty_height);
} else {
if(cljs.core.truth_(pred__10288.call(null,"transparent",expr__10289))){
return (city.style = sty_transp);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__10289)].join('')));
}
}
}
}));
});
cesium.workshop.client.mouse_interactivity = (function cesium$workshop$client$mouse_interactivity(){
var input_action = (function cesium$workshop$client$mouse_interactivity_$_input_action(mov){
var ppic = cesium.workshop.client.SCENE.pick(mov.endPosition);
var epic = (cljs.core.truth_(Cesium.defined(ppic))?ppic.id:null);
if(cljs.core.truth_(Cesium.defined(cesium.workshop.client.PEPIC))){
(cesium.workshop.client.PEPIC.billboard.scale = 1.0);

(cesium.workshop.client.PEPIC.billboard.color = Cesium.Color.WHITE);
} else {
}

if(cljs.core.truth_((function (){var and__5043__auto__ = Cesium.defined(epic);
if(cljs.core.truth_(and__5043__auto__)){
return Cesium.defined(epic.billboard);
} else {
return and__5043__auto__;
}
})())){
(epic.billboard.scale = 2.0);

(epic.billboard.color = Cesium.Color.ORANGERED);

return (
cesium.workshop.client.PEPIC = epic)
;
} else {
return null;
}
});
var hand = (new Cesium.ScreenSpaceEventHandler(cesium.workshop.client.CANVAS));
return hand.setInputAction(input_action,Cesium.ScreenSpaceEventType.MOUSE_MOVE);
});
cesium.workshop.client.extras = (function cesium$workshop$client$extras(){
var nbe = document.getElementById("neighborhoods");
var she = document.getElementById("shadows");
nbe.addEventListener("change",(function (e){
return (cesium.workshop.client.Neighborhoods.show = e.target.checked);
}));

return she.addEventListener("change",(function (e){
return (cesium.workshop.client.VIEWER.shadows = e.target.checked);
}));
});
cesium.workshop.client.init_client = (function cesium$workshop$client$init_client(){
cesium.workshop.client.add_imagery_by_asset_id.call(null,(3954));

cesium.workshop.client.add_terrain.call(null);

cesium.workshop.client.camera_control.call(null,-73.99811446828902,40.67451289564669,2631.082799425431,7.1077496389876025,-31.98722309159895,0.02588325131495497);

cesium.workshop.client.clock_control.call(null,true,"2017-07-11T16:00:00Z","2017-07-11T16:20:00Z","2017-07-11T16:00:00Z",(2));

cesium.workshop.client.load_kml.call(null,"data/sampleGeocacheLocations.kml",true);

cesium.workshop.client.load_geojson.call(null,"data/sampleNeighborhoods.geojson",true);

cesium.workshop.client.load_drone_flight.call(null,"data/sampleFlight.czml");

cesium.workshop.client.add_3D_tileset.call(null,(75343));

cesium.workshop.client.mouse_interactivity.call(null);

return cesium.workshop.client.extras.call(null);
});
cljs.core.enable_console_print_BANG_.call(null);
(window.onload = cesium.workshop.client.init_client.call(null));

//# sourceMappingURL=client.js.map
