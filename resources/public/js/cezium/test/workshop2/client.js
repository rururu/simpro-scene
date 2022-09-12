// Compiled by ClojureScript 1.11.4 {:optimizations :none}
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
var ebbs = cljs.core.filter.call(null,(function (p1__16076_SHARP_){
return Cesium.defined(p1__16076_SHARP_.billboard);
}),vals);
var seq__16077 = cljs.core.seq.call(null,ebbs);
var chunk__16078 = null;
var count__16079 = (0);
var i__16080 = (0);
while(true){
if((i__16080 < count__16079)){
var ebb = cljs.core._nth.call(null,chunk__16078,i__16080);
(ebb.billboard.verticalOrigin = Cesium.VerticalOrigin.BOTTOM);

(ebb.label = null);

(ebb.billboard.distanceDisplayCondition = (new Cesium.DistanceDisplayCondition(10.0,20000.0)));

var pos_16081 = ebb.position.getValue(Cesium.JulianDate.now());
var pos_16082__$1 = Cesium.Cartographic.fromCartesian(pos_16081);
var lat_16083 = Cesium.Math.toDegrees(pos_16082__$1.latitude);
var lon_16084 = Cesium.Math.toDegrees(pos_16082__$1.longitude);
var desc_16085 = ["<table class=\"cesium-infoBox-defaultTable cesium-infoBox-defaultTable-lighter\"><tbody>","<tr><th>Longitude</th><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lon_16084.toFixed((5))),"</td></tr>","<tr><th>Latitude</th><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat_16083.toFixed((5))),"</td></tr>","</tbody></table>"].join('');
(ebb.description = desc_16085);


var G__16086 = seq__16077;
var G__16087 = chunk__16078;
var G__16088 = count__16079;
var G__16089 = (i__16080 + (1));
seq__16077 = G__16086;
chunk__16078 = G__16087;
count__16079 = G__16088;
i__16080 = G__16089;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__16077);
if(temp__5735__auto__){
var seq__16077__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16077__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__16077__$1);
var G__16090 = cljs.core.chunk_rest.call(null,seq__16077__$1);
var G__16091 = c__4679__auto__;
var G__16092 = cljs.core.count.call(null,c__4679__auto__);
var G__16093 = (0);
seq__16077 = G__16090;
chunk__16078 = G__16091;
count__16079 = G__16092;
i__16080 = G__16093;
continue;
} else {
var ebb = cljs.core.first.call(null,seq__16077__$1);
(ebb.billboard.verticalOrigin = Cesium.VerticalOrigin.BOTTOM);

(ebb.label = null);

(ebb.billboard.distanceDisplayCondition = (new Cesium.DistanceDisplayCondition(10.0,20000.0)));

var pos_16094 = ebb.position.getValue(Cesium.JulianDate.now());
var pos_16095__$1 = Cesium.Cartographic.fromCartesian(pos_16094);
var lat_16096 = Cesium.Math.toDegrees(pos_16095__$1.latitude);
var lon_16097 = Cesium.Math.toDegrees(pos_16095__$1.longitude);
var desc_16098 = ["<table class=\"cesium-infoBox-defaultTable cesium-infoBox-defaultTable-lighter\"><tbody>","<tr><th>Longitude</th><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lon_16097.toFixed((5))),"</td></tr>","<tr><th>Latitude</th><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat_16096.toFixed((5))),"</td></tr>","</tbody></table>"].join('');
(ebb.description = desc_16098);


var G__16099 = cljs.core.next.call(null,seq__16077__$1);
var G__16100 = null;
var G__16101 = (0);
var G__16102 = (0);
seq__16077 = G__16099;
chunk__16078 = G__16100;
count__16079 = G__16101;
i__16080 = G__16102;
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
var epls = cljs.core.filter.call(null,(function (p1__16103_SHARP_){
return Cesium.defined(p1__16103_SHARP_.polygon);
}),vals);
var seq__16104 = cljs.core.seq.call(null,epls);
var chunk__16105 = null;
var count__16106 = (0);
var i__16107 = (0);
while(true){
if((i__16107 < count__16106)){
var epl = cljs.core._nth.call(null,chunk__16105,i__16107);
(epl.name = epl.properties.neighborhood);

(epl.polygon.material = Cesium.Color.fromRandom(({"red": 0.1, "maximumGreen": 0.5, "minimumBlue": 0.5, "alpha": 0.6})));

(epl.polygon.classificationType = Cesium.ClassificationType.TERRAIN);

var poss_16108 = epl.polygon.hierarchy.getValue(Cesium.JulianDate.now()).positions;
var cntr_16109 = Cesium.BoundingSphere.fromPoints(poss_16108).center;
var cntr_16110__$1 = Cesium.Ellipsoid.WGS84.scaleToGeodeticSurface(cntr_16109);
(epl.position = cntr_16110__$1);

(epl.parent = workshop2.client.Neighborhoods);

(epl.label = ({"text": epl.name, "showBackground": true, "scale": 0.6, "horizontalOrigin": Cesium.HorizontalOrigin.CENTER, "verticalOrigin": Cesium.VerticalOrigin.BOTTOM, "distanceDisplayCondition": (new Cesium.DistanceDisplayCondition(10.0,8000.0)), "disableDepthTestDistance": 100.0}));


var G__16111 = seq__16104;
var G__16112 = chunk__16105;
var G__16113 = count__16106;
var G__16114 = (i__16107 + (1));
seq__16104 = G__16111;
chunk__16105 = G__16112;
count__16106 = G__16113;
i__16107 = G__16114;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__16104);
if(temp__5735__auto__){
var seq__16104__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16104__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__16104__$1);
var G__16115 = cljs.core.chunk_rest.call(null,seq__16104__$1);
var G__16116 = c__4679__auto__;
var G__16117 = cljs.core.count.call(null,c__4679__auto__);
var G__16118 = (0);
seq__16104 = G__16115;
chunk__16105 = G__16116;
count__16106 = G__16117;
i__16107 = G__16118;
continue;
} else {
var epl = cljs.core.first.call(null,seq__16104__$1);
(epl.name = epl.properties.neighborhood);

(epl.polygon.material = Cesium.Color.fromRandom(({"red": 0.1, "maximumGreen": 0.5, "minimumBlue": 0.5, "alpha": 0.6})));

(epl.polygon.classificationType = Cesium.ClassificationType.TERRAIN);

var poss_16119 = epl.polygon.hierarchy.getValue(Cesium.JulianDate.now()).positions;
var cntr_16120 = Cesium.BoundingSphere.fromPoints(poss_16119).center;
var cntr_16121__$1 = Cesium.Ellipsoid.WGS84.scaleToGeodeticSurface(cntr_16120);
(epl.position = cntr_16121__$1);

(epl.parent = workshop2.client.Neighborhoods);

(epl.label = ({"text": epl.name, "showBackground": true, "scale": 0.6, "horizontalOrigin": Cesium.HorizontalOrigin.CENTER, "verticalOrigin": Cesium.VerticalOrigin.BOTTOM, "distanceDisplayCondition": (new Cesium.DistanceDisplayCondition(10.0,8000.0)), "disableDepthTestDistance": 100.0}));


var G__16122 = cljs.core.next.call(null,seq__16104__$1);
var G__16123 = null;
var G__16124 = (0);
var G__16125 = (0);
seq__16104 = G__16122;
chunk__16105 = G__16123;
count__16106 = G__16124;
i__16107 = G__16125;
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
var cmf = (function (e){
if(cljs.core.truth_(dme.checked)){
return (cesium.client.VIEWER.trackedEntity = entity);
} else {
(cesium.client.VIEWER.trackedEntity = null);

return cesium.client.CAMERA.flyTo(workshop2.client.W2_HOME_VIEW);
}
});
fme.addEventListener("change",cmf);

dme.addEventListener("change",cmf);

return cesium.client.VIEWER.trackedEntityChanged.addEventListener((function (e){
if(cljs.core._EQ_.call(null,cesium.client.VIEWER.trackedEntity,entity)){
(fme.checked = false);

return (dme.checked = true);
} else {
return null;
}
}));
});
workshop2.client.drone_flight = (function workshop2$client$drone_flight(drone){
workshop2.client.camera_modes.call(null,drone);

var dpos = drone.position;
(drone.model = ({"uri": "models/drone/CesiumDrone.gltf", "minimumPixelSize": (128), "maximumScale": (1000), "silhouetteColor": Cesium.Color.WHITE, "silhouetteSize": (2)}));

(drone.orientation = (new Cesium.VelocityOrientationProperty(dpos)));

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
var pred__16126 = cljs.core._EQ_;
var expr__16127 = tile_sty.options.item(tile_sty.selectedIndex).value;
if(cljs.core.truth_(pred__16126.call(null,"none",expr__16127))){
return (city.style = sty_default);
} else {
if(cljs.core.truth_(pred__16126.call(null,"height",expr__16127))){
return (city.style = sty_height);
} else {
if(cljs.core.truth_(pred__16126.call(null,"transparent",expr__16127))){
return (city.style = sty_transp);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__16127)].join('')));
}
}
}
}));
});
workshop2.client.mouse_interactivity = (function workshop2$client$mouse_interactivity(){
var input_action = (function workshop2$client$mouse_interactivity_$_input_action(mov){
var ppic = cesium.client.SCENE.pick(mov.endPosition);
var epic = (cljs.core.truth_(Cesium.defined(ppic))?ppic.id:null);
if(cljs.core.truth_(Cesium.defined(workshop2.client.PEPIC))){
(workshop2.client.PEPIC.billboard.scale = 1.0);

(workshop2.client.PEPIC.billboard.color = Cesium.Color.WHITE);
} else {
}

if(cljs.core.truth_((function (){var and__4251__auto__ = Cesium.defined(epic);
if(cljs.core.truth_(and__4251__auto__)){
return Cesium.defined(epic.billboard);
} else {
return and__4251__auto__;
}
})())){
(epic.billboard.scale = 2.0);

(epic.billboard.color = Cesium.Color.ORANGERED);

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
nbe.addEventListener("change",(function (e){
return (workshop2.client.Neighborhoods.show = e.target.checked);
}));

return she.addEventListener("change",(function (e){
return (cesium.client.VIEWER.shadows = e.target.checked);
}));
});
workshop2.client.init_workshop2_client = (function workshop2$client$init_workshop2_client(){
cesium.client.add_imagery_by_asset_id.call(null,(3954),cesium.client.VIEWER);

cesium.client.add_terrain.call(null,({"requestWaterMask": true, "requestVertexNormals": true}),cesium.client.VIEWER);

cesium.client.camera_home.call(null,cesium.client.CAMERA,workshop2.client.W2_HOME_VIEW);

cesium.client.clock_settings.call(null,cesium.client.CLOCK,workshop2.client.W2_CLOCK_SET,cesium.client.VIEWER);

cesium.client.load_data.call(null,new cljs.core.Keyword(null,"KML","KML",1829561453),"data/sampleGeocacheLocations.kml",({"camera": cesium.client.CAMERA, "canvas": cesium.client.CANVAS, "clampToGround": true}),cesium.client.VIEWER,workshop2.client.kml_adjustment);

cesium.client.load_data.call(null,new cljs.core.Keyword(null,"GeoJSON","GeoJSON",33508860),"data/sampleNeighborhoods.geojson",({"clampToGround": true}),cesium.client.VIEWER,workshop2.client.geojson_adjustment);

cesium.client.load_data.call(null,new cljs.core.Keyword(null,"CZML","CZML",-1539311408),"data/sampleFlight.czml",null,cesium.client.VIEWER,(function (p1__16129_SHARP_){
return workshop2.client.drone_flight.call(null,p1__16129_SHARP_.entities.getById("Aircraft/Aircraft1"));
}));

workshop2.client.add_3D_tileset.call(null,(75343));

workshop2.client.mouse_interactivity.call(null);

return workshop2.client.extras.call(null);
});
cljs.core.enable_console_print_BANG_.call(null);
(window.onload = workshop2.client.init_workshop2_client.call(null));

//# sourceMappingURL=client.js.map
