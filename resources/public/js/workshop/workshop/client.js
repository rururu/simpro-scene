// Compiled by ClojureScript 1.10.439 {}
goog.provide('workshop.client');
goog.require('cljs.core');
workshop.client.VIEWER = (new Cesium.Viewer("cesiumContainer",({"scene3DOnly": true, "selectionIndicator": false, "baseLayerPicker": false})));
workshop.client.HOME_VIEW = null;
workshop.client.add_imagery_by_asset_id = (function workshop$client$add_imagery_by_asset_id(id){
var ilays = workshop.client.VIEWER.imageryLayers;
ilays.remove(ilays.get((0)));

return ilays.addImageryProvider((new Cesium.IonImageryProvider(({"assetId": id}))));
});
workshop.client.add_terrain = (function workshop$client$add_terrain(){
workshop.client.VIEWER.terrainProvider = (new Cesium.createWorldTerrain(({"requestWaterMask": true, "requestVertexNormals": true})));

return workshop.client.VIEWER.scene.globe.depthTestAgainstTerrain = true;
});
workshop.client.camera_control = (function workshop$client$camera_control(longitude,latitude,height,heading,pitch,roll){
var pos = (new Cesium.Cartesian3.fromDegrees(longitude,latitude,height));
var orient = (new Cesium.HeadingPitchRoll.fromDegrees(heading,pitch,roll));
var cam = workshop.client.VIEWER.scene.camera;
var func = ((function (pos,orient,cam){
return (function (e){
e.cancel = true;

return workshop.client.VIEWER.scene.camera.flyTo(workshop.client.HOME_VIEW);
});})(pos,orient,cam))
;
workshop.client.HOME_VIEW = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"destination","destination",-253872483),pos,new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"heading","heading",-1312171873),orient.heading,new cljs.core.Keyword(null,"pitch","pitch",1495126700),orient.pitch,new cljs.core.Keyword(null,"roll","roll",11266999),orient.roll], null),new cljs.core.Keyword(null,"duration","duration",1444101068),4.0,new cljs.core.Keyword(null,"maximumHeight","maximumHeight",159239809),(2000),new cljs.core.Keyword(null,"pitchAdjustHeight","pitchAdjustHeight",718386687),(2000),new cljs.core.Keyword(null,"endTransform","endTransform",-1545129030),Cesium.Matrix4.IDENTITY], null));

workshop.client.VIEWER.homeButton.viewModel.command.beforeExecute.addEventListener(func);

return cam.flyTo(workshop.client.HOME_VIEW);
});
workshop.client.clock_control = (function workshop$client$clock_control(animate,start,stop,current,mult){
var clk = workshop.client.VIEWER.clock;
clk.shouldAnimate = animate;

clk.startTime = Cesium.JulianDate.fromIso8601(start);

clk.stopTime = Cesium.JulianDate.fromIso8601(stop);

clk.currentTime = Cesium.JulianDate.fromIso8601(current);

clk.multiplier = mult;

clk.clockStep = Cesium.ClockStep.SYSTEM_CLOCK_MULTIPLIER;

clk.clockRange = Cesium.ClockRange.LOOP_STOP;

return workshop.client.VIEWER.timeline.zoomTo(clk.startTime,clk.stopTime);
});
workshop.client.load_kml = (function workshop$client$load_kml(source,ground){
var scene = workshop.client.VIEWER.scene;
var kmlops = ({"camera": scene.camera, "canvas": scene.canvas, "clampToGround": ground});
var promise = Cesium.KmlDataSource.load(source,kmlops);
return promise.then(((function (scene,kmlops,promise){
return (function (ds){
workshop.client.VIEWER.dataSources.add(ds);

var vals = ds.entities.values;
var ebbs = cljs.core.filter.call(null,((function (vals,scene,kmlops,promise){
return (function (p1__5818_SHARP_){
return Cesium.defined(p1__5818_SHARP_.billboard);
});})(vals,scene,kmlops,promise))
,vals);
var seq__5819 = cljs.core.seq.call(null,ebbs);
var chunk__5820 = null;
var count__5821 = (0);
var i__5822 = (0);
while(true){
if((i__5822 < count__5821)){
var ebb = cljs.core._nth.call(null,chunk__5820,i__5822);
ebb.billboard.verticalOrigin = Cesium.VerticalOrigin.BOTTOM;

ebb.label = null;

ebb.billboard.distanceDisplayCondition = (new Cesium.DistanceDisplayCondition(10.0,20000.0));

var pos_5823 = ebb.position.getValue(Cesium.JulianDate.now());
var pos_5824__$1 = Cesium.Cartographic.fromCartesian(pos_5823);
var lat_5825 = Cesium.Math.toDegrees(pos_5824__$1.latitude);
var lon_5826 = Cesium.Math.toDegrees(pos_5824__$1.longitude);
var desc_5827 = ["<table class=\"cesium-infoBox-defaultTable cesium-infoBox-defaultTable-lighter\"><tbody>","<tr><th>Longitude</th><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lon_5826.toFixed((5))),"</td></tr>","<tr><th>Latitude</th><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat_5825.toFixed((5))),"</td></tr>","</tbody></table>"].join('');
ebb.description = desc_5827;


var G__5828 = seq__5819;
var G__5829 = chunk__5820;
var G__5830 = count__5821;
var G__5831 = (i__5822 + (1));
seq__5819 = G__5828;
chunk__5820 = G__5829;
count__5821 = G__5830;
i__5822 = G__5831;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__5819);
if(temp__5735__auto__){
var seq__5819__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5819__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__5819__$1);
var G__5832 = cljs.core.chunk_rest.call(null,seq__5819__$1);
var G__5833 = c__4461__auto__;
var G__5834 = cljs.core.count.call(null,c__4461__auto__);
var G__5835 = (0);
seq__5819 = G__5832;
chunk__5820 = G__5833;
count__5821 = G__5834;
i__5822 = G__5835;
continue;
} else {
var ebb = cljs.core.first.call(null,seq__5819__$1);
ebb.billboard.verticalOrigin = Cesium.VerticalOrigin.BOTTOM;

ebb.label = null;

ebb.billboard.distanceDisplayCondition = (new Cesium.DistanceDisplayCondition(10.0,20000.0));

var pos_5836 = ebb.position.getValue(Cesium.JulianDate.now());
var pos_5837__$1 = Cesium.Cartographic.fromCartesian(pos_5836);
var lat_5838 = Cesium.Math.toDegrees(pos_5837__$1.latitude);
var lon_5839 = Cesium.Math.toDegrees(pos_5837__$1.longitude);
var desc_5840 = ["<table class=\"cesium-infoBox-defaultTable cesium-infoBox-defaultTable-lighter\"><tbody>","<tr><th>Longitude</th><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lon_5839.toFixed((5))),"</td></tr>","<tr><th>Latitude</th><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat_5838.toFixed((5))),"</td></tr>","</tbody></table>"].join('');
ebb.description = desc_5840;


var G__5841 = cljs.core.next.call(null,seq__5819__$1);
var G__5842 = null;
var G__5843 = (0);
var G__5844 = (0);
seq__5819 = G__5841;
chunk__5820 = G__5842;
count__5821 = G__5843;
i__5822 = G__5844;
continue;
}
} else {
return null;
}
}
break;
}
});})(scene,kmlops,promise))
);
});
workshop.client.load_geojson = (function workshop$client$load_geojson(source,ground){
var promise = Cesium.GeoJsonDataSource.load(source,cljs.core.PersistentHashSet.createAsIfByAssoc([ground,new cljs.core.Keyword(null,"clampToGround","clampToGround",1108773872)]));
return promise.then(((function (promise){
return (function (ds){
workshop.client.VIEWER.dataSources.add(ds);

var vals = ds.entities.values;
var epls = cljs.core.filter.call(null,((function (vals,promise){
return (function (p1__5845_SHARP_){
return Cesium.defined(p1__5845_SHARP_.polygon);
});})(vals,promise))
,vals);
var seq__5846 = cljs.core.seq.call(null,epls);
var chunk__5847 = null;
var count__5848 = (0);
var i__5849 = (0);
while(true){
if((i__5849 < count__5848)){
var epl = cljs.core._nth.call(null,chunk__5847,i__5849);
epl.name = epl.properties.neighborhood;

epl.polygon.material = Cesium.Color.fromRandom(({"red": 0.1, "maximumGreen": 0.5, "minimumBlue": 0.5, "alpha": 0.6}));

epl.polygon.classificationType = Cesium.ClassificationType.TERRAIN;

var poss_5850 = epl.polygon.hierarchy.getValue(Cesium.JulianDate.now()).positions;
var cntr_5851 = Cesium.BoundingSphere.fromPoints(poss_5850).center;
var cntr_5852__$1 = Cesium.Ellipsoid.WGS84.scaleToGeodeticSurface(cntr_5851);
epl.position = cntr_5852__$1;

epl.label = ({"text": epl.name, "showBackground": true, "scale": 0.6, "horizontalOrigin": Cesium.HorizontalOrigin.CENTER, "verticalOrigin": Cesium.VerticalOrigin.BOTTOM, "distanceDisplayCondition": (new Cesium.DistanceDisplayCondition(10.0,8000.0)), "disableDepthTestDistance": 100.0});


var G__5853 = seq__5846;
var G__5854 = chunk__5847;
var G__5855 = count__5848;
var G__5856 = (i__5849 + (1));
seq__5846 = G__5853;
chunk__5847 = G__5854;
count__5848 = G__5855;
i__5849 = G__5856;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__5846);
if(temp__5735__auto__){
var seq__5846__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5846__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__5846__$1);
var G__5857 = cljs.core.chunk_rest.call(null,seq__5846__$1);
var G__5858 = c__4461__auto__;
var G__5859 = cljs.core.count.call(null,c__4461__auto__);
var G__5860 = (0);
seq__5846 = G__5857;
chunk__5847 = G__5858;
count__5848 = G__5859;
i__5849 = G__5860;
continue;
} else {
var epl = cljs.core.first.call(null,seq__5846__$1);
epl.name = epl.properties.neighborhood;

epl.polygon.material = Cesium.Color.fromRandom(({"red": 0.1, "maximumGreen": 0.5, "minimumBlue": 0.5, "alpha": 0.6}));

epl.polygon.classificationType = Cesium.ClassificationType.TERRAIN;

var poss_5861 = epl.polygon.hierarchy.getValue(Cesium.JulianDate.now()).positions;
var cntr_5862 = Cesium.BoundingSphere.fromPoints(poss_5861).center;
var cntr_5863__$1 = Cesium.Ellipsoid.WGS84.scaleToGeodeticSurface(cntr_5862);
epl.position = cntr_5863__$1;

epl.label = ({"text": epl.name, "showBackground": true, "scale": 0.6, "horizontalOrigin": Cesium.HorizontalOrigin.CENTER, "verticalOrigin": Cesium.VerticalOrigin.BOTTOM, "distanceDisplayCondition": (new Cesium.DistanceDisplayCondition(10.0,8000.0)), "disableDepthTestDistance": 100.0});


var G__5864 = cljs.core.next.call(null,seq__5846__$1);
var G__5865 = null;
var G__5866 = (0);
var G__5867 = (0);
seq__5846 = G__5864;
chunk__5847 = G__5865;
count__5848 = G__5866;
i__5849 = G__5867;
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
workshop.client.init_client = (function workshop$client$init_client(){
workshop.client.add_imagery_by_asset_id.call(null,(3954));

workshop.client.add_terrain.call(null);

workshop.client.camera_control.call(null,-73.99811446828902,40.67451289564669,2631.082799425431,7.1077496389876025,-31.98722309159895,0.02588325131495497);

workshop.client.clock_control.call(null,true,"2017-07-11T16:00:00Z","2017-07-11T16:20:00Z","2017-07-11T16:00:00Z",(2));

workshop.client.load_kml.call(null,"data/sampleGeocacheLocations.kml",true);

return workshop.client.load_geojson.call(null,"data/sampleNeighborhoods.geojson",true);
});
cljs.core.enable_console_print_BANG_.call(null);
window.onload = workshop.client.init_client.call(null);

//# sourceMappingURL=client.js.map
