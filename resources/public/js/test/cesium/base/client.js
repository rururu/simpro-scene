// Compiled by ClojureScript 1.10.439 {}
goog.provide('cesium.base.client');
goog.require('cljs.core');
cesium.base.client.VIEWER = (new Cesium.Viewer("cesiumContainer"));
cesium.base.client.CLOCK = cesium.base.client.VIEWER.clock;
cesium.base.client.SCENE = cesium.base.client.VIEWER.scene;
cesium.base.client.CAMERA = cesium.base.client.SCENE.camera;
cesium.base.client.CANVAS = cesium.base.client.SCENE.canvas;
cesium.base.client.HOME_VIEW = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),30.1,new cljs.core.Keyword(null,"latitude","latitude",394867543),60.0,new cljs.core.Keyword(null,"height","height",1025178622),(2500),new cljs.core.Keyword(null,"heading","heading",-1312171873),(120),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(-20),new cljs.core.Keyword(null,"roll","roll",11266999),(0)], null);
cesium.base.client.CLOCK_SET = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"animate","animate",1850194573),true,new cljs.core.Keyword(null,"start","start",-355208981),"2020-08-08T16:00:00Z",new cljs.core.Keyword(null,"stop","stop",-2140911342),"2020-08-08T16:20:00Z",new cljs.core.Keyword(null,"current","current",-1088038603),"2020-08-08T16:00:00Z",new cljs.core.Keyword(null,"mult","mult",1466794774),(4)], null);
cesium.base.client.add_imagery_by_asset_id = (function cesium$base$client$add_imagery_by_asset_id(id,viewer){
var ilays = viewer.imageryLayers;
ilays.remove(ilays.get((0)));

return ilays.addImageryProvider((new Cesium.IonImageryProvider(({"assetId": id}))));
});
cesium.base.client.add_terrain = (function cesium$base$client$add_terrain(options,viewer){
viewer.terrainProvider = (new Cesium.createWorldTerrain(options));

return viewer.scene.globe.depthTestAgainstTerrain = true;
});
cesium.base.client.camera_home = (function cesium$base$client$camera_home(camera,view){
var map__20083 = view;
var map__20083__$1 = (((((!((map__20083 == null))))?(((((map__20083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20083):map__20083);
var longitude = cljs.core.get.call(null,map__20083__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var latitude = cljs.core.get.call(null,map__20083__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var height = cljs.core.get.call(null,map__20083__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var heading = cljs.core.get.call(null,map__20083__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
var pitch = cljs.core.get.call(null,map__20083__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
var roll = cljs.core.get.call(null,map__20083__$1,new cljs.core.Keyword(null,"roll","roll",11266999));
var pos = (new Cesium.Cartesian3.fromDegrees(longitude,latitude,height));
var orient = (new Cesium.HeadingPitchRoll.fromDegrees(heading,pitch,roll));
cesium.base.client.HOME_VIEW = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"destination","destination",-253872483),pos,new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"heading","heading",-1312171873),orient.heading,new cljs.core.Keyword(null,"pitch","pitch",1495126700),orient.pitch,new cljs.core.Keyword(null,"roll","roll",11266999),orient.roll], null),new cljs.core.Keyword(null,"duration","duration",1444101068),4.0,new cljs.core.Keyword(null,"maximumHeight","maximumHeight",159239809),(2000),new cljs.core.Keyword(null,"pitchAdjustHeight","pitchAdjustHeight",718386687),(2000),new cljs.core.Keyword(null,"endTransform","endTransform",-1545129030),Cesium.Matrix4.IDENTITY], null));

cesium.base.client.VIEWER.homeButton.viewModel.command.beforeExecute.addEventListener(((function (map__20083,map__20083__$1,longitude,latitude,height,heading,pitch,roll,pos,orient){
return (function (e){
e.cancel = true;

return camera.flyTo(cesium.base.client.HOME_VIEW);
});})(map__20083,map__20083__$1,longitude,latitude,height,heading,pitch,roll,pos,orient))
);

return camera.flyTo(cesium.base.client.HOME_VIEW);
});
cesium.base.client.clock_settings = (function cesium$base$client$clock_settings(clock,settings,viewer){
var map__20085 = settings;
var map__20085__$1 = (((((!((map__20085 == null))))?(((((map__20085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20085):map__20085);
var animate = cljs.core.get.call(null,map__20085__$1,new cljs.core.Keyword(null,"animate","animate",1850194573));
var start = cljs.core.get.call(null,map__20085__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop = cljs.core.get.call(null,map__20085__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var current = cljs.core.get.call(null,map__20085__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var mult = cljs.core.get.call(null,map__20085__$1,new cljs.core.Keyword(null,"mult","mult",1466794774));
clock.shouldAnimate = animate;

clock.startTime = Cesium.JulianDate.fromIso8601(start);

clock.stopTime = Cesium.JulianDate.fromIso8601(stop);

clock.currentTime = Cesium.JulianDate.fromIso8601(current);

clock.multiplier = mult;

clock.clockStep = Cesium.ClockStep.SYSTEM_CLOCK_MULTIPLIER;

clock.clockRange = Cesium.ClockRange.LOOP_STOP;

return viewer.timeline.zoomTo(clock.startTime,clock.stopTime);
});
cesium.base.client.load_data = (function cesium$base$client$load_data(format,source,options,viewer,processor){
var promise = (function (){var pred__20087 = cljs.core._EQ_;
var expr__20088 = format;
if(cljs.core.truth_(pred__20087.call(null,new cljs.core.Keyword(null,"GeoJSON","GeoJSON",33508860),expr__20088))){
return Cesium.GeoJsonDataSource.load(source,options);
} else {
if(cljs.core.truth_(pred__20087.call(null,new cljs.core.Keyword(null,"CZML","CZML",-1539311408),expr__20088))){
return Cesium.CzmlDataSource.load(source,options);
} else {
if(cljs.core.truth_(pred__20087.call(null,new cljs.core.Keyword(null,"KML","KML",1829561453),expr__20088))){
return Cesium.KmlDataSource.load(source,options);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__20088)].join('')));
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

//# sourceMappingURL=client.js.map
