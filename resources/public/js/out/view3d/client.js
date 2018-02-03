// Compiled by ClojureScript 1.9.946 {}
goog.provide('view3d.client');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('cljs.core.async');
goog.require('cognitect.transit');
goog.require('ajax.core');
goog.require('cljs.reader');
goog.require('czm.core');
view3d.client.VEHICLE = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"\u0410\u0432\u0440\u043E\u0440\u0430",new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(60),(30)], null),new cljs.core.Keyword(null,"altitude","altitude",463588637),(4000),new cljs.core.Keyword(null,"speed","speed",1257663751),(160),new cljs.core.Keyword(null,"course","course",1455432948),(270)], null));
view3d.client.BASE_URL = "http://localhost:4444/";
view3d.client.TIO = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vehicle","vehicle",1670166968),(1000)], null);
view3d.client.error_handler = (function view3d$client$error_handler(response){
var map__30342 = response;
var map__30342__$1 = ((((!((map__30342 == null)))?((((map__30342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30342.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30342):map__30342);
var status = cljs.core.get.call(null,map__30342__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__30342__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
view3d.client.repeater = (function view3d$client$repeater(var_args){
var G__30345 = arguments.length;
switch (G__30345) {
case 2:
return view3d.client.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return view3d.client.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

view3d.client.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__28298__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28298__auto__){
return (function (){
var f__28299__auto__ = (function (){var switch__28208__auto__ = ((function (c__28298__auto__){
return (function (state_30359){
var state_val_30360 = (state_30359[(1)]);
if((state_val_30360 === (1))){
var state_30359__$1 = state_30359;
var statearr_30361_30401 = state_30359__$1;
(statearr_30361_30401[(2)] = null);

(statearr_30361_30401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (2))){
var state_30359__$1 = state_30359;
var statearr_30362_30402 = state_30359__$1;
(statearr_30362_30402[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (3))){
var inst_30357 = (state_30359[(2)]);
var state_30359__$1 = state_30359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30359__$1,inst_30357);
} else {
if((state_val_30360 === (4))){
var inst_30348 = func.call(null);
var inst_30349 = cljs.core.async.timeout.call(null,time_out);
var state_30359__$1 = (function (){var statearr_30364 = state_30359;
(statearr_30364[(7)] = inst_30348);

return statearr_30364;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30359__$1,(7),inst_30349);
} else {
if((state_val_30360 === (5))){
var state_30359__$1 = state_30359;
var statearr_30365_30403 = state_30359__$1;
(statearr_30365_30403[(2)] = null);

(statearr_30365_30403[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (6))){
var inst_30355 = (state_30359[(2)]);
var state_30359__$1 = state_30359;
var statearr_30366_30404 = state_30359__$1;
(statearr_30366_30404[(2)] = inst_30355);

(statearr_30366_30404[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30360 === (7))){
var inst_30351 = (state_30359[(2)]);
var state_30359__$1 = (function (){var statearr_30367 = state_30359;
(statearr_30367[(8)] = inst_30351);

return statearr_30367;
})();
var statearr_30368_30405 = state_30359__$1;
(statearr_30368_30405[(2)] = null);

(statearr_30368_30405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__28298__auto__))
;
return ((function (switch__28208__auto__,c__28298__auto__){
return (function() {
var view3d$client$state_machine__28209__auto__ = null;
var view3d$client$state_machine__28209__auto____0 = (function (){
var statearr_30369 = [null,null,null,null,null,null,null,null,null];
(statearr_30369[(0)] = view3d$client$state_machine__28209__auto__);

(statearr_30369[(1)] = (1));

return statearr_30369;
});
var view3d$client$state_machine__28209__auto____1 = (function (state_30359){
while(true){
var ret_value__28210__auto__ = (function (){try{while(true){
var result__28211__auto__ = switch__28208__auto__.call(null,state_30359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28211__auto__;
}
break;
}
}catch (e30370){if((e30370 instanceof Object)){
var ex__28212__auto__ = e30370;
var statearr_30371_30406 = state_30359;
(statearr_30371_30406[(5)] = ex__28212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30370;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30407 = state_30359;
state_30359 = G__30407;
continue;
} else {
return ret_value__28210__auto__;
}
break;
}
});
view3d$client$state_machine__28209__auto__ = function(state_30359){
switch(arguments.length){
case 0:
return view3d$client$state_machine__28209__auto____0.call(this);
case 1:
return view3d$client$state_machine__28209__auto____1.call(this,state_30359);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
view3d$client$state_machine__28209__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__28209__auto____0;
view3d$client$state_machine__28209__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__28209__auto____1;
return view3d$client$state_machine__28209__auto__;
})()
;})(switch__28208__auto__,c__28298__auto__))
})();
var state__28300__auto__ = (function (){var statearr_30372 = f__28299__auto__.call(null);
(statearr_30372[(6)] = c__28298__auto__);

return statearr_30372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28300__auto__);
});})(c__28298__auto__))
);

return c__28298__auto__;
});

view3d.client.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__28298__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28298__auto__){
return (function (){
var f__28299__auto__ = (function (){var switch__28208__auto__ = ((function (c__28298__auto__){
return (function (state_30386){
var state_val_30387 = (state_30386[(1)]);
if((state_val_30387 === (1))){
var state_30386__$1 = state_30386;
var statearr_30388_30408 = state_30386__$1;
(statearr_30388_30408[(2)] = null);

(statearr_30388_30408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30387 === (2))){
var state_30386__$1 = state_30386;
var statearr_30389_30409 = state_30386__$1;
(statearr_30389_30409[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30387 === (3))){
var inst_30384 = (state_30386[(2)]);
var state_30386__$1 = state_30386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30386__$1,inst_30384);
} else {
if((state_val_30387 === (4))){
var inst_30375 = func.call(null,param);
var inst_30376 = cljs.core.async.timeout.call(null,time_out);
var state_30386__$1 = (function (){var statearr_30391 = state_30386;
(statearr_30391[(7)] = inst_30375);

return statearr_30391;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30386__$1,(7),inst_30376);
} else {
if((state_val_30387 === (5))){
var state_30386__$1 = state_30386;
var statearr_30392_30410 = state_30386__$1;
(statearr_30392_30410[(2)] = null);

(statearr_30392_30410[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30387 === (6))){
var inst_30382 = (state_30386[(2)]);
var state_30386__$1 = state_30386;
var statearr_30393_30411 = state_30386__$1;
(statearr_30393_30411[(2)] = inst_30382);

(statearr_30393_30411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30387 === (7))){
var inst_30378 = (state_30386[(2)]);
var state_30386__$1 = (function (){var statearr_30394 = state_30386;
(statearr_30394[(8)] = inst_30378);

return statearr_30394;
})();
var statearr_30395_30412 = state_30386__$1;
(statearr_30395_30412[(2)] = null);

(statearr_30395_30412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__28298__auto__))
;
return ((function (switch__28208__auto__,c__28298__auto__){
return (function() {
var view3d$client$state_machine__28209__auto__ = null;
var view3d$client$state_machine__28209__auto____0 = (function (){
var statearr_30396 = [null,null,null,null,null,null,null,null,null];
(statearr_30396[(0)] = view3d$client$state_machine__28209__auto__);

(statearr_30396[(1)] = (1));

return statearr_30396;
});
var view3d$client$state_machine__28209__auto____1 = (function (state_30386){
while(true){
var ret_value__28210__auto__ = (function (){try{while(true){
var result__28211__auto__ = switch__28208__auto__.call(null,state_30386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28211__auto__;
}
break;
}
}catch (e30397){if((e30397 instanceof Object)){
var ex__28212__auto__ = e30397;
var statearr_30398_30413 = state_30386;
(statearr_30398_30413[(5)] = ex__28212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30414 = state_30386;
state_30386 = G__30414;
continue;
} else {
return ret_value__28210__auto__;
}
break;
}
});
view3d$client$state_machine__28209__auto__ = function(state_30386){
switch(arguments.length){
case 0:
return view3d$client$state_machine__28209__auto____0.call(this);
case 1:
return view3d$client$state_machine__28209__auto____1.call(this,state_30386);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
view3d$client$state_machine__28209__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__28209__auto____0;
view3d$client$state_machine__28209__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__28209__auto____1;
return view3d$client$state_machine__28209__auto__;
})()
;})(switch__28208__auto__,c__28298__auto__))
})();
var state__28300__auto__ = (function (){var statearr_30399 = f__28299__auto__.call(null);
(statearr_30399[(6)] = c__28298__auto__);

return statearr_30399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28300__auto__);
});})(c__28298__auto__))
);

return c__28298__auto__;
});

view3d.client.repeater.cljs$lang$maxFixedArity = 3;

view3d.client.read_transit = (function view3d$client$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
view3d.client.set_html_BANG_ = (function view3d$client$set_html_BANG_(id,msg){
return document.getElementById(id).innerHTML = msg;
});
view3d.client.num_val = (function view3d$client$num_val(x){
if(typeof x === 'number'){
return x;
} else {
return cljs.reader.read_string.call(null,x);
}
});
view3d.client.camera_vehicle = (function view3d$client$camera_vehicle(vehicle,per){
var vec__30415 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__30415,(0),null);
var lon = cljs.core.nth.call(null,vec__30415,(1),null);
cljs.core._vreset_BANG_.call(null,view3d.client.VEHICLE,cljs.core.merge.call(null,cljs.core._deref.call(null,view3d.client.VEHICLE),vehicle));

view3d.client.set_html_BANG_.call(null,"onboard-fld",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(vehicle));

view3d.client.set_html_BANG_.call(null,"name-fld",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(vehicle));

view3d.client.set_html_BANG_.call(null,"course-fld",new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(vehicle));

view3d.client.set_html_BANG_.call(null,"speed-fld",new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(vehicle));

view3d.client.set_html_BANG_.call(null,"altitude-fld",new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(vehicle));

if((per <= (0))){
return czm.core.move_to.call(null,lat,lon,new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(vehicle),new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(vehicle));
} else {
return czm.core.fly_to.call(null,lat,lon,new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(vehicle),new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(vehicle),per);
}
});
view3d.client.vehicle_hr = (function view3d$client$vehicle_hr(response){
var resp = view3d.client.read_transit.call(null,response);
var temp__5455__auto__ = resp;
if(cljs.core.truth_(temp__5455__auto__)){
var map__30418 = temp__5455__auto__;
var map__30418__$1 = ((((!((map__30418 == null)))?((((map__30418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30418.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30418):map__30418);
var vehicle = cljs.core.get.call(null,map__30418__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
var period = cljs.core.get.call(null,map__30418__$1,new cljs.core.Keyword(null,"period","period",-352129191));
return view3d.client.camera_vehicle.call(null,vehicle,period);
} else {
return null;
}
});
view3d.client.receive_vehicle = (function view3d$client$receive_vehicle(){
return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.client.BASE_URL),"vehicle/"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),view3d.client.vehicle_hr,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));
});
view3d.client.view = (function view3d$client$view(dir){
return czm.core.camera.call(null,new cljs.core.Keyword(null,"view","view",1247994814),dir);
});
view3d.client.pitch = (function view3d$client$pitch(deg){
var deg__$1 = view3d.client.num_val.call(null,deg);
if((((-180) <= deg__$1)) && ((deg__$1 <= (180)))){
return czm.core.camera.call(null,new cljs.core.Keyword(null,"pitch","pitch",1495126700),deg__$1);
} else {
return null;
}
});
view3d.client.roll = (function view3d$client$roll(deg){
var deg__$1 = view3d.client.num_val.call(null,deg);
if((((-180) <= deg__$1)) && ((deg__$1 <= (180)))){
return czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),deg__$1);
} else {
return null;
}
});
view3d.client.left_controls = (function view3d$client$left_controls(){
view3d.client.set_html_BANG_.call(null,"camera","<h4>Camera</h4>");

view3d.client.set_html_BANG_.call(null,"onboard","Onboard:");

view3d.client.set_html_BANG_.call(null,"onboard-fld","");

view3d.client.set_html_BANG_.call(null,"view","View:");

view3d.client.set_html_BANG_.call(null,"view-fld","<select onchange='javascript:view3d.client.view(this.value)' style='width:96px'>\n   <option value='FORWARD'>FORWARD</option>\n   <option value='BACKWARD'>BACKWARD</option>\n   <option value='RIGHT'>RIGHT</option>\n   <option value='LEFT'>LEFT</option>\n   <option value='UP'>UP</option>\n   <option value='DOWN'>DOWN</option>\n   <option value='FORWARD-RIGHT'>FORWARD-RIGHT</option>\n   <option value='FORWARD-LEFT'>FORWARD-LEFT</option>\n   <option value='BACKWARD-RIGHT'>BACKWARD-RIGHT</option>\n   <option value='BACKWARD-LEFT'>BACKWARD-LEFT</option>\n   </select>");

view3d.client.set_html_BANG_.call(null,"pitch","Pitch:");

view3d.client.set_html_BANG_.call(null,"pitch-fld","<input value='-10' style='width:90px' id='pitch-val'\n               onchange='javascript:view3d.client.pitch(this.value)'>");

view3d.client.set_html_BANG_.call(null,"roll","Roll:");

return view3d.client.set_html_BANG_.call(null,"roll-fld","<input value='0' style='width:90px'\n               onchange='javascript:view3d.client.roll(this.value)'>");
});
view3d.client.right_conterols = (function view3d$client$right_conterols(){
view3d.client.set_html_BANG_.call(null,"vehicle","<h4>Vehicle</h4>");

view3d.client.set_html_BANG_.call(null,"name","Name:");

view3d.client.set_html_BANG_.call(null,"name-fld","");

view3d.client.set_html_BANG_.call(null,"course","Course:");

view3d.client.set_html_BANG_.call(null,"course-fld","");

view3d.client.set_html_BANG_.call(null,"speed","Speed:");

view3d.client.set_html_BANG_.call(null,"speed-fld","");

view3d.client.set_html_BANG_.call(null,"altitude","Altitude:");

return view3d.client.set_html_BANG_.call(null,"altitude-fld","");
});
view3d.client.show_controls = (function view3d$client$show_controls(){
view3d.client.right_conterols.call(null);

return view3d.client.left_controls.call(null);
});
view3d.client.on_load = (function view3d$client$on_load(){
cljs.core.enable_console_print_BANG_.call(null);

czm.core.init_3D_view.call(null,view3d.client.BASE_URL,"yes");

view3d.client.repeater.call(null,view3d.client.receive_vehicle,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO));

return view3d.client.show_controls.call(null);
});
window.onload = view3d.client.on_load.call(null);

//# sourceMappingURL=client.js.map
