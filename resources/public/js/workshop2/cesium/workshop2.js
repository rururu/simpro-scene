// Compiled by ClojureScript 1.10.439 {}
goog.provide('cesium.workshop2');
goog.require('cljs.core');
goog.require('cesium.client');
cesium.workshop2.W2_HOME_VIEW = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),-73.99811446828902,new cljs.core.Keyword(null,"latitude","latitude",394867543),40.67451289564669,new cljs.core.Keyword(null,"height","height",1025178622),2631.082799425431,new cljs.core.Keyword(null,"heading","heading",-1312171873),7.1077496389876025,new cljs.core.Keyword(null,"pitch","pitch",1495126700),-31.98722309159895,new cljs.core.Keyword(null,"roll","roll",11266999),0.02588325131495497], null);
cesium.workshop2.W2_CLOCK_SET = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"animate","animate",1850194573),true,new cljs.core.Keyword(null,"start","start",-355208981),"2017-07-11T16:00:00Z",new cljs.core.Keyword(null,"stop","stop",-2140911342),"2017-07-11T16:20:00Z",new cljs.core.Keyword(null,"current","current",-1088038603),"2017-07-11T16:00:00Z",new cljs.core.Keyword(null,"mult","mult",1466794774),(2)], null);
cesium.workshop2.Neighborhoods = cesium.client.VIEWER.entities.add((new Cesium.Entity()));
cesium.workshop2.PEPIC = null;
cesium.workshop2.kml_adjustment = (function cesium$workshop2$kml_adjustment(ds){
cesium.client.VIEWER.dataSources.add(ds);

var vals = ds.entities.values;
var ebbs = cljs.core.filter.call(null,((function (vals){
return (function (p1__15727_SHARP_){
return Cesium.defined(p1__15727_SHARP_.billboard);
});})(vals))
,vals);
var seq__15728 = cljs.core.seq.call(null,ebbs);
var chunk__15729 = null;
var count__15730 = (0);
var i__15731 = (0);
while(true){
if((i__15731 < count__15730)){
var ebb = cljs.core._nth.call(null,chunk__15729,i__15731);
ebb.billboard.verticalOrigin = Cesium.VerticalOrigin.BOTTOM;

ebb.label = null;

ebb.billboard.distanceDisplayCondition = (new Cesium.DistanceDisplayCondition(10.0,20000.0));

var pos_15732 = ebb.position.getValue(Cesium.JulianDate.now());
var pos_15733__$1 = Cesium.Cartographic.fromCartesian(pos_15732);
var lat_15734 = Cesium.Math.toDegrees(pos_15733__$1.latitude);
var lon_15735 = Cesium.Math.toDegrees(pos_15733__$1.longitude);
var desc_15736 = ["<table class=\"cesium-infoBox-defaultTable cesium-infoBox-defaultTable-lighter\"><tbody>","<tr><th>Longitude</th><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lon_15735.toFixed((5))),"</td></tr>","<tr><th>Latitude</th><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat_15734.toFixed((5))),"</td></tr>","</tbody></table>"].join('');
ebb.description = desc_15736;


var G__15737 = seq__15728;
var G__15738 = chunk__15729;
var G__15739 = count__15730;
var G__15740 = (i__15731 + (1));
seq__15728 = G__15737;
chunk__15729 = G__15738;
count__15730 = G__15739;
i__15731 = G__15740;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__15728);
if(temp__5735__auto__){
var seq__15728__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15728__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__15728__$1);
var G__15741 = cljs.core.chunk_rest.call(null,seq__15728__$1);
var G__15742 = c__4461__auto__;
var G__15743 = cljs.core.count.call(null,c__4461__auto__);
var G__15744 = (0);
seq__15728 = G__15741;
chunk__15729 = G__15742;
count__15730 = G__15743;
i__15731 = G__15744;
continue;
} else {
var ebb = cljs.core.first.call(null,seq__15728__$1);
ebb.billboard.verticalOrigin = Cesium.VerticalOrigin.BOTTOM;

ebb.label = null;

ebb.billboard.distanceDisplayCondition = (new Cesium.DistanceDisplayCondition(10.0,20000.0));

var pos_15745 = ebb.position.getValue(Cesium.JulianDate.now());
var pos_15746__$1 = Cesium.Cartographic.fromCartesian(pos_15745);
var lat_15747 = Cesium.Math.toDegrees(pos_15746__$1.latitude);
var lon_15748 = Cesium.Math.toDegrees(pos_15746__$1.longitude);
var desc_15749 = ["<table class=\"cesium-infoBox-defaultTable cesium-infoBox-defaultTable-lighter\"><tbody>","<tr><th>Longitude</th><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lon_15748.toFixed((5))),"</td></tr>","<tr><th>Latitude</th><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat_15747.toFixed((5))),"</td></tr>","</tbody></table>"].join('');
ebb.description = desc_15749;


var G__15750 = cljs.core.next.call(null,seq__15728__$1);
var G__15751 = null;
var G__15752 = (0);
var G__15753 = (0);
seq__15728 = G__15750;
chunk__15729 = G__15751;
count__15730 = G__15752;
i__15731 = G__15753;
continue;
}
} else {
return null;
}
}
break;
}
});
cesium.workshop2.geojson_adjustment = (function cesium$workshop2$geojson_adjustment(ds){
cesium.client.VIEWER.dataSources.add(ds);

var vals = ds.entities.values;
var epls = cljs.core.filter.call(null,((function (vals){
return (function (p1__15754_SHARP_){
return Cesium.defined(p1__15754_SHARP_.polygon);
});})(vals))
,vals);
var seq__15755 = cljs.core.seq.call(null,epls);
var chunk__15756 = null;
var count__15757 = (0);
var i__15758 = (0);
while(true){
if((i__15758 < count__15757)){
var epl = cljs.core._nth.call(null,chunk__15756,i__15758);
epl.name = epl.properties.neighborhood;

epl.polygon.material = Cesium.Color.fromRandom(({"red": 0.1, "maximumGreen": 0.5, "minimumBlue": 0.5, "alpha": 0.6}));

epl.polygon.classificationType = Cesium.ClassificationType.TERRAIN;

var poss_15759 = epl.polygon.hierarchy.getValue(Cesium.JulianDate.now()).positions;
var cntr_15760 = Cesium.BoundingSphere.fromPoints(poss_15759).center;
var cntr_15761__$1 = Cesium.Ellipsoid.WGS84.scaleToGeodeticSurface(cntr_15760);
epl.position = cntr_15761__$1;

epl.parent = cesium.workshop2.Neighborhoods;

epl.label = ({"text": epl.name, "showBackground": true, "scale": 0.6, "horizontalOrigin": Cesium.HorizontalOrigin.CENTER, "verticalOrigin": Cesium.VerticalOrigin.BOTTOM, "distanceDisplayCondition": (new Cesium.DistanceDisplayCondition(10.0,8000.0)), "disableDepthTestDistance": 100.0});


var G__15762 = seq__15755;
var G__15763 = chunk__15756;
var G__15764 = count__15757;
var G__15765 = (i__15758 + (1));
seq__15755 = G__15762;
chunk__15756 = G__15763;
count__15757 = G__15764;
i__15758 = G__15765;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__15755);
if(temp__5735__auto__){
var seq__15755__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15755__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__15755__$1);
var G__15766 = cljs.core.chunk_rest.call(null,seq__15755__$1);
var G__15767 = c__4461__auto__;
var G__15768 = cljs.core.count.call(null,c__4461__auto__);
var G__15769 = (0);
seq__15755 = G__15766;
chunk__15756 = G__15767;
count__15757 = G__15768;
i__15758 = G__15769;
continue;
} else {
var epl = cljs.core.first.call(null,seq__15755__$1);
epl.name = epl.properties.neighborhood;

epl.polygon.material = Cesium.Color.fromRandom(({"red": 0.1, "maximumGreen": 0.5, "minimumBlue": 0.5, "alpha": 0.6}));

epl.polygon.classificationType = Cesium.ClassificationType.TERRAIN;

var poss_15770 = epl.polygon.hierarchy.getValue(Cesium.JulianDate.now()).positions;
var cntr_15771 = Cesium.BoundingSphere.fromPoints(poss_15770).center;
var cntr_15772__$1 = Cesium.Ellipsoid.WGS84.scaleToGeodeticSurface(cntr_15771);
epl.position = cntr_15772__$1;

epl.parent = cesium.workshop2.Neighborhoods;

epl.label = ({"text": epl.name, "showBackground": true, "scale": 0.6, "horizontalOrigin": Cesium.HorizontalOrigin.CENTER, "verticalOrigin": Cesium.VerticalOrigin.BOTTOM, "distanceDisplayCondition": (new Cesium.DistanceDisplayCondition(10.0,8000.0)), "disableDepthTestDistance": 100.0});


var G__15773 = cljs.core.next.call(null,seq__15755__$1);
var G__15774 = null;
var G__15775 = (0);
var G__15776 = (0);
seq__15755 = G__15773;
chunk__15756 = G__15774;
count__15757 = G__15775;
i__15758 = G__15776;
continue;
}
} else {
return null;
}
}
break;
}
});
cesium.workshop2.camera_modes = (function cesium$workshop2$camera_modes(entity){
var fme = document.getElementById("freeMode");
var dme = document.getElementById("droneMode");
var cmf = ((function (fme,dme){
return (function (e){
if(cljs.core.truth_(dme.checked)){
return cesium.client.VIEWER.trackedEntity = entity;
} else {
cesium.client.VIEWER.trackedEntity = null;

return cesium.client.CAMERA.flyTo(cesium.workshop2.W2_HOME_VIEW);
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
cesium.workshop2.drone_flight = (function cesium$workshop2$drone_flight(drone){
cesium.workshop2.camera_modes.call(null,drone);

var dpos = drone.position;
drone.model = ({"uri": "models/drone/CesiumDrone.gltf", "minimumPixelSize": (128), "maximumScale": (1000), "silhouetteColor": Cesium.Color.WHITE, "silhouetteSize": (2)});

drone.orientation = (new Cesium.VelocityOrientationProperty(dpos));

return dpos.setInterpolationOptions(({"interpolationDegree": (3), "interpolationAlgorithm": Cesium.HermitePolynomialApproximation}));
});
cesium.workshop2.add_3D_tileset = (function cesium$workshop2$add_3D_tileset(id){
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
var pred__15777 = cljs.core._EQ_;
var expr__15778 = tile_sty.options.item(tile_sty.selectedIndex).value;
if(cljs.core.truth_(pred__15777.call(null,"none",expr__15778))){
return city.style = sty_default;
} else {
if(cljs.core.truth_(pred__15777.call(null,"height",expr__15778))){
return city.style = sty_height;
} else {
if(cljs.core.truth_(pred__15777.call(null,"transparent",expr__15778))){
return city.style = sty_transp;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__15778)].join('')));
}
}
}
});})(city,load_indi,sty_default,sty_transp,sty_height,tile_sty,hoff))
);
});
cesium.workshop2.mouse_interactivity = (function cesium$workshop2$mouse_interactivity(){
var input_action = (function cesium$workshop2$mouse_interactivity_$_input_action(mov){
var ppic = cesium.client.SCENE.pick(mov.endPosition);
var epic = (cljs.core.truth_(Cesium.defined(ppic))?ppic.id:null);
if(cljs.core.truth_(Cesium.defined(cesium.workshop2.PEPIC))){
cesium.workshop2.PEPIC.billboard.scale = 1.0;

cesium.workshop2.PEPIC.billboard.color = Cesium.Color.WHITE;
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
cesium.workshop2.PEPIC = epic)
;
} else {
return null;
}
});
var hand = (new Cesium.ScreenSpaceEventHandler(cesium.client.CANVAS));
return hand.setInputAction(input_action,Cesium.ScreenSpaceEventType.MOUSE_MOVE);
});
cesium.workshop2.extras = (function cesium$workshop2$extras(){
var nbe = document.getElementById("neighborhoods");
var she = document.getElementById("shadows");
nbe.addEventListener("change",((function (nbe,she){
return (function (e){
return cesium.workshop2.Neighborhoods.show = e.target.checked;
});})(nbe,she))
);

return she.addEventListener("change",((function (nbe,she){
return (function (e){
return cesium.client.VIEWER.shadows = e.target.checked;
});})(nbe,she))
);
});
cesium.workshop2.init_workshop2_client = (function cesium$workshop2$init_workshop2_client(){
cesium.client.add_imagery_by_asset_id.call(null,(3954),cesium.client.VIEWER);

cesium.client.add_terrain.call(null,({"requestWaterMask": true, "requestVertexNormals": true}),cesium.client.VIEWER);

cesium.client.camera_home.call(null,cesium.client.CAMERA,cesium.workshop2.W2_HOME_VIEW);

cesium.client.clock_settings.call(null,cesium.client.CLOCK,cesium.workshop2.W2_CLOCK_SET,cesium.client.VIEWER);

cesium.client.load_data.call(null,new cljs.core.Keyword(null,"KML","KML",1829561453),"data/sampleGeocacheLocations.kml",({"camera": cesium.client.CAMERA, "canvas": cesium.client.CANVAS, "clampToGround": true}),cesium.client.VIEWER,cesium.workshop2.kml_adjustment);

cesium.client.load_data.call(null,new cljs.core.Keyword(null,"GeoJSON","GeoJSON",33508860),"data/sampleNeighborhoods.geojson",({"clampToGround": true}),cesium.client.VIEWER,cesium.workshop2.geojson_adjustment);

cesium.client.load_data.call(null,new cljs.core.Keyword(null,"CZML","CZML",-1539311408),"data/sampleFlight.czml",null,cesium.client.VIEWER,(function (p1__15780_SHARP_){
return cesium.workshop2.drone_flight.call(null,p1__15780_SHARP_.entities.getById("Aircraft/Aircraft1"));
}));

cesium.workshop2.add_3D_tileset.call(null,(75343));

cesium.workshop2.mouse_interactivity.call(null);

return cesium.workshop2.extras.call(null);
});
cljs.core.enable_console_print_BANG_.call(null);
window.onload = cesium.workshop2.init_workshop2_client.call(null);

//# sourceMappingURL=workshop2.js.map
