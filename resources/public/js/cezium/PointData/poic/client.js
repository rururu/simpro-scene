// Compiled by ClojureScript 1.10.439 {}
goog.provide('poic.client');
goog.require('cljs.core');
goog.require('cesium.client');
poic.client.GOMULODA = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"latitude","latitude",394867543),59.97,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),30.02,new cljs.core.Keyword(null,"height","height",1025178622),(800),new cljs.core.Keyword(null,"heading","heading",-1312171873),(0),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(-20),new cljs.core.Keyword(null,"roll","roll",11266999),(0)], null);
poic.client.FIORD = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"latitude","latitude",394867543),(61.172 - 0.02),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),6.0,new cljs.core.Keyword(null,"height","height",1025178622),(400),new cljs.core.Keyword(null,"heading","heading",-1312171873),(0),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(-20),new cljs.core.Keyword(null,"roll","roll",11266999),(0)], null);
poic.client.point_cloud = (function poic$client$point_cloud(){
var ts1 = (new Cesium.Cesium3DTileset(({"url": "PointCloud/tileset.json", "maximumScreenSpaceError": (0)})));
var ps = cesium.client.SCENE.primitives;
var ts2 = ps.add(ts1);
return ts2.readyPromise.then(((function (ts1,ps,ts2){
return (function (ts){
ps.add(ts);

return cesium.client.CAMERA.flyToBoundingSphere(ts.boundingVolume._boundingSphere);
});})(ts1,ps,ts2))
);
});
poic.client.add_terrain_transparent = (function poic$client$add_terrain_transparent(options,viewer){
viewer.terrainProvider = (new Cesium.createWorldTerrain(options));

return viewer.scene.globe.depthTestAgainstTerrain = false;
});
poic.client.init_client = (function poic$client$init_client(){
poic.client.add_terrain_transparent.call(null,null,cesium.client.VIEWER);

cesium.client.camera_home.call(null,cesium.client.CAMERA,poic.client.FIORD);

cesium.client.start_event_processing.call(null,cesium.client.PORT,cesium.client.VIEWER);

cesium.client.add_orbit_button.call(null,cesium.client.CAMERA);

cesium.client.mouse_move.call(null);

return poic.client.point_cloud.call(null);
});
cljs.core.enable_console_print_BANG_.call(null);
window.onload = poic.client.init_client.call(null);

//# sourceMappingURL=client.js.map
