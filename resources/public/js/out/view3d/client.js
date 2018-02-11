// Compiled by ClojureScript 1.9.946 {}
goog.provide('view3d.client');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('cljs.core.async');
goog.require('cognitect.transit');
goog.require('ajax.core');
goog.require('cljs.reader');
goog.require('geo.calc');
goog.require('czm.core');
view3d.client.VEHICLE = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"\u0410\u0432\u0440\u043E\u0440\u0430",new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(60),(30)], null),new cljs.core.Keyword(null,"altitude","altitude",463588637),(4000),new cljs.core.Keyword(null,"speed","speed",1257663751),(160),new cljs.core.Keyword(null,"course","course",1455432948),(270)], null));
view3d.client.BASE_URL = "http://localhost:4444/";
view3d.client.TIO = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vehicle","vehicle",1670166968),(1000)], null);
view3d.client.error_handler = (function view3d$client$error_handler(response){
var map__16918 = response;
var map__16918__$1 = ((((!((map__16918 == null)))?((((map__16918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16918.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16918):map__16918);
var status = cljs.core.get.call(null,map__16918__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__16918__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
view3d.client.repeater = (function view3d$client$repeater(var_args){
var G__16921 = arguments.length;
switch (G__16921) {
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
var c__14313__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14313__auto__){
return (function (){
var f__14314__auto__ = (function (){var switch__14223__auto__ = ((function (c__14313__auto__){
return (function (state_16935){
var state_val_16936 = (state_16935[(1)]);
if((state_val_16936 === (1))){
var state_16935__$1 = state_16935;
var statearr_16937_16977 = state_16935__$1;
(statearr_16937_16977[(2)] = null);

(statearr_16937_16977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16936 === (2))){
var state_16935__$1 = state_16935;
var statearr_16938_16978 = state_16935__$1;
(statearr_16938_16978[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16936 === (3))){
var inst_16933 = (state_16935[(2)]);
var state_16935__$1 = state_16935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16935__$1,inst_16933);
} else {
if((state_val_16936 === (4))){
var inst_16924 = func.call(null);
var inst_16925 = cljs.core.async.timeout.call(null,time_out);
var state_16935__$1 = (function (){var statearr_16940 = state_16935;
(statearr_16940[(7)] = inst_16924);

return statearr_16940;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16935__$1,(7),inst_16925);
} else {
if((state_val_16936 === (5))){
var state_16935__$1 = state_16935;
var statearr_16941_16979 = state_16935__$1;
(statearr_16941_16979[(2)] = null);

(statearr_16941_16979[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16936 === (6))){
var inst_16931 = (state_16935[(2)]);
var state_16935__$1 = state_16935;
var statearr_16942_16980 = state_16935__$1;
(statearr_16942_16980[(2)] = inst_16931);

(statearr_16942_16980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16936 === (7))){
var inst_16927 = (state_16935[(2)]);
var state_16935__$1 = (function (){var statearr_16943 = state_16935;
(statearr_16943[(8)] = inst_16927);

return statearr_16943;
})();
var statearr_16944_16981 = state_16935__$1;
(statearr_16944_16981[(2)] = null);

(statearr_16944_16981[(1)] = (2));


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
});})(c__14313__auto__))
;
return ((function (switch__14223__auto__,c__14313__auto__){
return (function() {
var view3d$client$state_machine__14224__auto__ = null;
var view3d$client$state_machine__14224__auto____0 = (function (){
var statearr_16945 = [null,null,null,null,null,null,null,null,null];
(statearr_16945[(0)] = view3d$client$state_machine__14224__auto__);

(statearr_16945[(1)] = (1));

return statearr_16945;
});
var view3d$client$state_machine__14224__auto____1 = (function (state_16935){
while(true){
var ret_value__14225__auto__ = (function (){try{while(true){
var result__14226__auto__ = switch__14223__auto__.call(null,state_16935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14226__auto__;
}
break;
}
}catch (e16946){if((e16946 instanceof Object)){
var ex__14227__auto__ = e16946;
var statearr_16947_16982 = state_16935;
(statearr_16947_16982[(5)] = ex__14227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16983 = state_16935;
state_16935 = G__16983;
continue;
} else {
return ret_value__14225__auto__;
}
break;
}
});
view3d$client$state_machine__14224__auto__ = function(state_16935){
switch(arguments.length){
case 0:
return view3d$client$state_machine__14224__auto____0.call(this);
case 1:
return view3d$client$state_machine__14224__auto____1.call(this,state_16935);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
view3d$client$state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__14224__auto____0;
view3d$client$state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__14224__auto____1;
return view3d$client$state_machine__14224__auto__;
})()
;})(switch__14223__auto__,c__14313__auto__))
})();
var state__14315__auto__ = (function (){var statearr_16948 = f__14314__auto__.call(null);
(statearr_16948[(6)] = c__14313__auto__);

return statearr_16948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14315__auto__);
});})(c__14313__auto__))
);

return c__14313__auto__;
});

view3d.client.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__14313__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14313__auto__){
return (function (){
var f__14314__auto__ = (function (){var switch__14223__auto__ = ((function (c__14313__auto__){
return (function (state_16962){
var state_val_16963 = (state_16962[(1)]);
if((state_val_16963 === (1))){
var state_16962__$1 = state_16962;
var statearr_16964_16984 = state_16962__$1;
(statearr_16964_16984[(2)] = null);

(statearr_16964_16984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16963 === (2))){
var state_16962__$1 = state_16962;
var statearr_16965_16985 = state_16962__$1;
(statearr_16965_16985[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16963 === (3))){
var inst_16960 = (state_16962[(2)]);
var state_16962__$1 = state_16962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16962__$1,inst_16960);
} else {
if((state_val_16963 === (4))){
var inst_16951 = func.call(null,param);
var inst_16952 = cljs.core.async.timeout.call(null,time_out);
var state_16962__$1 = (function (){var statearr_16967 = state_16962;
(statearr_16967[(7)] = inst_16951);

return statearr_16967;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16962__$1,(7),inst_16952);
} else {
if((state_val_16963 === (5))){
var state_16962__$1 = state_16962;
var statearr_16968_16986 = state_16962__$1;
(statearr_16968_16986[(2)] = null);

(statearr_16968_16986[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16963 === (6))){
var inst_16958 = (state_16962[(2)]);
var state_16962__$1 = state_16962;
var statearr_16969_16987 = state_16962__$1;
(statearr_16969_16987[(2)] = inst_16958);

(statearr_16969_16987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16963 === (7))){
var inst_16954 = (state_16962[(2)]);
var state_16962__$1 = (function (){var statearr_16970 = state_16962;
(statearr_16970[(8)] = inst_16954);

return statearr_16970;
})();
var statearr_16971_16988 = state_16962__$1;
(statearr_16971_16988[(2)] = null);

(statearr_16971_16988[(1)] = (2));


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
});})(c__14313__auto__))
;
return ((function (switch__14223__auto__,c__14313__auto__){
return (function() {
var view3d$client$state_machine__14224__auto__ = null;
var view3d$client$state_machine__14224__auto____0 = (function (){
var statearr_16972 = [null,null,null,null,null,null,null,null,null];
(statearr_16972[(0)] = view3d$client$state_machine__14224__auto__);

(statearr_16972[(1)] = (1));

return statearr_16972;
});
var view3d$client$state_machine__14224__auto____1 = (function (state_16962){
while(true){
var ret_value__14225__auto__ = (function (){try{while(true){
var result__14226__auto__ = switch__14223__auto__.call(null,state_16962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14226__auto__;
}
break;
}
}catch (e16973){if((e16973 instanceof Object)){
var ex__14227__auto__ = e16973;
var statearr_16974_16989 = state_16962;
(statearr_16974_16989[(5)] = ex__14227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16990 = state_16962;
state_16962 = G__16990;
continue;
} else {
return ret_value__14225__auto__;
}
break;
}
});
view3d$client$state_machine__14224__auto__ = function(state_16962){
switch(arguments.length){
case 0:
return view3d$client$state_machine__14224__auto____0.call(this);
case 1:
return view3d$client$state_machine__14224__auto____1.call(this,state_16962);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
view3d$client$state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__14224__auto____0;
view3d$client$state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__14224__auto____1;
return view3d$client$state_machine__14224__auto__;
})()
;})(switch__14223__auto__,c__14313__auto__))
})();
var state__14315__auto__ = (function (){var statearr_16975 = f__14314__auto__.call(null);
(statearr_16975[(6)] = c__14313__auto__);

return statearr_16975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14315__auto__);
});})(c__14313__auto__))
);

return c__14313__auto__;
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
var vec__16991 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__16991,(0),null);
var lon = cljs.core.nth.call(null,vec__16991,(1),null);
var alt = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(vehicle);
var alt__$1 = ((((alt < czm.core.MAX_UPGROUND))?czm.core.AAT:alt) | (0));
cljs.core._vreset_BANG_.call(null,view3d.client.VEHICLE,cljs.core.merge.call(null,cljs.core._deref.call(null,view3d.client.VEHICLE),vehicle));

view3d.client.set_html_BANG_.call(null,"onboard-fld",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(vehicle));

view3d.client.set_html_BANG_.call(null,"name-fld",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(vehicle));

view3d.client.set_html_BANG_.call(null,"course-fld",new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(vehicle));

view3d.client.set_html_BANG_.call(null,"speed-fld",new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(vehicle));

view3d.client.set_html_BANG_.call(null,"altitude-fld",alt__$1);

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
var map__16994 = temp__5455__auto__;
var map__16994__$1 = ((((!((map__16994 == null)))?((((map__16994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16994.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16994):map__16994);
var vehicle = cljs.core.get.call(null,map__16994__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
var period = cljs.core.get.call(null,map__16994__$1,new cljs.core.Keyword(null,"period","period",-352129191));
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
