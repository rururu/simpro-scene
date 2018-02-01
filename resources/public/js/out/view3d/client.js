// Compiled by ClojureScript 1.9.521 {}
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
var map__23370 = response;
var map__23370__$1 = ((((!((map__23370 == null)))?((((map__23370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23370.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23370):map__23370);
var status = cljs.core.get.call(null,map__23370__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__23370__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("AJAX ERROR: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
view3d.client.repeater = (function view3d$client$repeater(var_args){
var args23372 = [];
var len__8166__auto___23435 = arguments.length;
var i__8167__auto___23436 = (0);
while(true){
if((i__8167__auto___23436 < len__8166__auto___23435)){
args23372.push((arguments[i__8167__auto___23436]));

var G__23437 = (i__8167__auto___23436 + (1));
i__8167__auto___23436 = G__23437;
continue;
} else {
}
break;
}

var G__23374 = args23372.length;
switch (G__23374) {
case 2:
return view3d.client.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return view3d.client.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23372.length)].join('')));

}
});

view3d.client.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__9488__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9488__auto__){
return (function (){
var f__9489__auto__ = (function (){var switch__9467__auto__ = ((function (c__9488__auto__){
return (function (state_23388){
var state_val_23389 = (state_23388[(1)]);
if((state_val_23389 === (1))){
var state_23388__$1 = state_23388;
var statearr_23390_23439 = state_23388__$1;
(statearr_23390_23439[(2)] = null);

(statearr_23390_23439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23389 === (2))){
var state_23388__$1 = state_23388;
var statearr_23391_23440 = state_23388__$1;
(statearr_23391_23440[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23389 === (3))){
var inst_23386 = (state_23388[(2)]);
var state_23388__$1 = state_23388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23388__$1,inst_23386);
} else {
if((state_val_23389 === (4))){
var inst_23377 = func.call(null);
var inst_23378 = cljs.core.async.timeout.call(null,time_out);
var state_23388__$1 = (function (){var statearr_23393 = state_23388;
(statearr_23393[(7)] = inst_23377);

return statearr_23393;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23388__$1,(7),inst_23378);
} else {
if((state_val_23389 === (5))){
var state_23388__$1 = state_23388;
var statearr_23394_23441 = state_23388__$1;
(statearr_23394_23441[(2)] = null);

(statearr_23394_23441[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23389 === (6))){
var inst_23384 = (state_23388[(2)]);
var state_23388__$1 = state_23388;
var statearr_23395_23442 = state_23388__$1;
(statearr_23395_23442[(2)] = inst_23384);

(statearr_23395_23442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23389 === (7))){
var inst_23380 = (state_23388[(2)]);
var state_23388__$1 = (function (){var statearr_23396 = state_23388;
(statearr_23396[(8)] = inst_23380);

return statearr_23396;
})();
var statearr_23397_23443 = state_23388__$1;
(statearr_23397_23443[(2)] = null);

(statearr_23397_23443[(1)] = (2));


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
});})(c__9488__auto__))
;
return ((function (switch__9467__auto__,c__9488__auto__){
return (function() {
var view3d$client$state_machine__9468__auto__ = null;
var view3d$client$state_machine__9468__auto____0 = (function (){
var statearr_23401 = [null,null,null,null,null,null,null,null,null];
(statearr_23401[(0)] = view3d$client$state_machine__9468__auto__);

(statearr_23401[(1)] = (1));

return statearr_23401;
});
var view3d$client$state_machine__9468__auto____1 = (function (state_23388){
while(true){
var ret_value__9469__auto__ = (function (){try{while(true){
var result__9470__auto__ = switch__9467__auto__.call(null,state_23388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9470__auto__;
}
break;
}
}catch (e23402){if((e23402 instanceof Object)){
var ex__9471__auto__ = e23402;
var statearr_23403_23444 = state_23388;
(statearr_23403_23444[(5)] = ex__9471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23445 = state_23388;
state_23388 = G__23445;
continue;
} else {
return ret_value__9469__auto__;
}
break;
}
});
view3d$client$state_machine__9468__auto__ = function(state_23388){
switch(arguments.length){
case 0:
return view3d$client$state_machine__9468__auto____0.call(this);
case 1:
return view3d$client$state_machine__9468__auto____1.call(this,state_23388);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
view3d$client$state_machine__9468__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__9468__auto____0;
view3d$client$state_machine__9468__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__9468__auto____1;
return view3d$client$state_machine__9468__auto__;
})()
;})(switch__9467__auto__,c__9488__auto__))
})();
var state__9490__auto__ = (function (){var statearr_23404 = f__9489__auto__.call(null);
(statearr_23404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9488__auto__);

return statearr_23404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9490__auto__);
});})(c__9488__auto__))
);

return c__9488__auto__;
});

view3d.client.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__9488__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9488__auto__){
return (function (){
var f__9489__auto__ = (function (){var switch__9467__auto__ = ((function (c__9488__auto__){
return (function (state_23418){
var state_val_23419 = (state_23418[(1)]);
if((state_val_23419 === (1))){
var state_23418__$1 = state_23418;
var statearr_23420_23446 = state_23418__$1;
(statearr_23420_23446[(2)] = null);

(statearr_23420_23446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23419 === (2))){
var state_23418__$1 = state_23418;
var statearr_23421_23447 = state_23418__$1;
(statearr_23421_23447[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23419 === (3))){
var inst_23416 = (state_23418[(2)]);
var state_23418__$1 = state_23418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23418__$1,inst_23416);
} else {
if((state_val_23419 === (4))){
var inst_23407 = func.call(null,param);
var inst_23408 = cljs.core.async.timeout.call(null,time_out);
var state_23418__$1 = (function (){var statearr_23423 = state_23418;
(statearr_23423[(7)] = inst_23407);

return statearr_23423;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23418__$1,(7),inst_23408);
} else {
if((state_val_23419 === (5))){
var state_23418__$1 = state_23418;
var statearr_23424_23448 = state_23418__$1;
(statearr_23424_23448[(2)] = null);

(statearr_23424_23448[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23419 === (6))){
var inst_23414 = (state_23418[(2)]);
var state_23418__$1 = state_23418;
var statearr_23425_23449 = state_23418__$1;
(statearr_23425_23449[(2)] = inst_23414);

(statearr_23425_23449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23419 === (7))){
var inst_23410 = (state_23418[(2)]);
var state_23418__$1 = (function (){var statearr_23426 = state_23418;
(statearr_23426[(8)] = inst_23410);

return statearr_23426;
})();
var statearr_23427_23450 = state_23418__$1;
(statearr_23427_23450[(2)] = null);

(statearr_23427_23450[(1)] = (2));


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
});})(c__9488__auto__))
;
return ((function (switch__9467__auto__,c__9488__auto__){
return (function() {
var view3d$client$state_machine__9468__auto__ = null;
var view3d$client$state_machine__9468__auto____0 = (function (){
var statearr_23431 = [null,null,null,null,null,null,null,null,null];
(statearr_23431[(0)] = view3d$client$state_machine__9468__auto__);

(statearr_23431[(1)] = (1));

return statearr_23431;
});
var view3d$client$state_machine__9468__auto____1 = (function (state_23418){
while(true){
var ret_value__9469__auto__ = (function (){try{while(true){
var result__9470__auto__ = switch__9467__auto__.call(null,state_23418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9470__auto__;
}
break;
}
}catch (e23432){if((e23432 instanceof Object)){
var ex__9471__auto__ = e23432;
var statearr_23433_23451 = state_23418;
(statearr_23433_23451[(5)] = ex__9471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23452 = state_23418;
state_23418 = G__23452;
continue;
} else {
return ret_value__9469__auto__;
}
break;
}
});
view3d$client$state_machine__9468__auto__ = function(state_23418){
switch(arguments.length){
case 0:
return view3d$client$state_machine__9468__auto____0.call(this);
case 1:
return view3d$client$state_machine__9468__auto____1.call(this,state_23418);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
view3d$client$state_machine__9468__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__9468__auto____0;
view3d$client$state_machine__9468__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__9468__auto____1;
return view3d$client$state_machine__9468__auto__;
})()
;})(switch__9467__auto__,c__9488__auto__))
})();
var state__9490__auto__ = (function (){var statearr_23434 = f__9489__auto__.call(null);
(statearr_23434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9488__auto__);

return statearr_23434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9490__auto__);
});})(c__9488__auto__))
);

return c__9488__auto__;
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
var vec__23456 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__23456,(0),null);
var lon = cljs.core.nth.call(null,vec__23456,(1),null);
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
var temp__4655__auto__ = resp;
if(cljs.core.truth_(temp__4655__auto__)){
var map__23461 = temp__4655__auto__;
var map__23461__$1 = ((((!((map__23461 == null)))?((((map__23461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23461.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23461):map__23461);
var vehicle = cljs.core.get.call(null,map__23461__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
var period = cljs.core.get.call(null,map__23461__$1,new cljs.core.Keyword(null,"period","period",-352129191));
return view3d.client.camera_vehicle.call(null,vehicle,period);
} else {
return null;
}
});
view3d.client.receive_vehicle = (function view3d$client$receive_vehicle(){
return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.client.BASE_URL),cljs.core.str.cljs$core$IFn$_invoke$arity$1("vehicle/")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),view3d.client.vehicle_hr,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));
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