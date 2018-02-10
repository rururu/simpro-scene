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
var map__13503 = response;
var map__13503__$1 = ((((!((map__13503 == null)))?((((map__13503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13503.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13503):map__13503);
var status = cljs.core.get.call(null,map__13503__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__13503__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
view3d.client.repeater = (function view3d$client$repeater(var_args){
var G__13506 = arguments.length;
switch (G__13506) {
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
var c__12259__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12259__auto__){
return (function (){
var f__12260__auto__ = (function (){var switch__12236__auto__ = ((function (c__12259__auto__){
return (function (state_13520){
var state_val_13521 = (state_13520[(1)]);
if((state_val_13521 === (1))){
var state_13520__$1 = state_13520;
var statearr_13522_13562 = state_13520__$1;
(statearr_13522_13562[(2)] = null);

(statearr_13522_13562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13521 === (2))){
var state_13520__$1 = state_13520;
var statearr_13523_13563 = state_13520__$1;
(statearr_13523_13563[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13521 === (3))){
var inst_13518 = (state_13520[(2)]);
var state_13520__$1 = state_13520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13520__$1,inst_13518);
} else {
if((state_val_13521 === (4))){
var inst_13509 = func.call(null);
var inst_13510 = cljs.core.async.timeout.call(null,time_out);
var state_13520__$1 = (function (){var statearr_13525 = state_13520;
(statearr_13525[(7)] = inst_13509);

return statearr_13525;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13520__$1,(7),inst_13510);
} else {
if((state_val_13521 === (5))){
var state_13520__$1 = state_13520;
var statearr_13526_13564 = state_13520__$1;
(statearr_13526_13564[(2)] = null);

(statearr_13526_13564[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13521 === (6))){
var inst_13516 = (state_13520[(2)]);
var state_13520__$1 = state_13520;
var statearr_13527_13565 = state_13520__$1;
(statearr_13527_13565[(2)] = inst_13516);

(statearr_13527_13565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13521 === (7))){
var inst_13512 = (state_13520[(2)]);
var state_13520__$1 = (function (){var statearr_13528 = state_13520;
(statearr_13528[(8)] = inst_13512);

return statearr_13528;
})();
var statearr_13529_13566 = state_13520__$1;
(statearr_13529_13566[(2)] = null);

(statearr_13529_13566[(1)] = (2));


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
});})(c__12259__auto__))
;
return ((function (switch__12236__auto__,c__12259__auto__){
return (function() {
var view3d$client$state_machine__12237__auto__ = null;
var view3d$client$state_machine__12237__auto____0 = (function (){
var statearr_13530 = [null,null,null,null,null,null,null,null,null];
(statearr_13530[(0)] = view3d$client$state_machine__12237__auto__);

(statearr_13530[(1)] = (1));

return statearr_13530;
});
var view3d$client$state_machine__12237__auto____1 = (function (state_13520){
while(true){
var ret_value__12238__auto__ = (function (){try{while(true){
var result__12239__auto__ = switch__12236__auto__.call(null,state_13520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12239__auto__;
}
break;
}
}catch (e13531){if((e13531 instanceof Object)){
var ex__12240__auto__ = e13531;
var statearr_13532_13567 = state_13520;
(statearr_13532_13567[(5)] = ex__12240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13568 = state_13520;
state_13520 = G__13568;
continue;
} else {
return ret_value__12238__auto__;
}
break;
}
});
view3d$client$state_machine__12237__auto__ = function(state_13520){
switch(arguments.length){
case 0:
return view3d$client$state_machine__12237__auto____0.call(this);
case 1:
return view3d$client$state_machine__12237__auto____1.call(this,state_13520);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
view3d$client$state_machine__12237__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__12237__auto____0;
view3d$client$state_machine__12237__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__12237__auto____1;
return view3d$client$state_machine__12237__auto__;
})()
;})(switch__12236__auto__,c__12259__auto__))
})();
var state__12261__auto__ = (function (){var statearr_13533 = f__12260__auto__.call(null);
(statearr_13533[(6)] = c__12259__auto__);

return statearr_13533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12261__auto__);
});})(c__12259__auto__))
);

return c__12259__auto__;
});

view3d.client.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__12259__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12259__auto__){
return (function (){
var f__12260__auto__ = (function (){var switch__12236__auto__ = ((function (c__12259__auto__){
return (function (state_13547){
var state_val_13548 = (state_13547[(1)]);
if((state_val_13548 === (1))){
var state_13547__$1 = state_13547;
var statearr_13549_13569 = state_13547__$1;
(statearr_13549_13569[(2)] = null);

(statearr_13549_13569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13548 === (2))){
var state_13547__$1 = state_13547;
var statearr_13550_13570 = state_13547__$1;
(statearr_13550_13570[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13548 === (3))){
var inst_13545 = (state_13547[(2)]);
var state_13547__$1 = state_13547;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13547__$1,inst_13545);
} else {
if((state_val_13548 === (4))){
var inst_13536 = func.call(null,param);
var inst_13537 = cljs.core.async.timeout.call(null,time_out);
var state_13547__$1 = (function (){var statearr_13552 = state_13547;
(statearr_13552[(7)] = inst_13536);

return statearr_13552;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13547__$1,(7),inst_13537);
} else {
if((state_val_13548 === (5))){
var state_13547__$1 = state_13547;
var statearr_13553_13571 = state_13547__$1;
(statearr_13553_13571[(2)] = null);

(statearr_13553_13571[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13548 === (6))){
var inst_13543 = (state_13547[(2)]);
var state_13547__$1 = state_13547;
var statearr_13554_13572 = state_13547__$1;
(statearr_13554_13572[(2)] = inst_13543);

(statearr_13554_13572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13548 === (7))){
var inst_13539 = (state_13547[(2)]);
var state_13547__$1 = (function (){var statearr_13555 = state_13547;
(statearr_13555[(8)] = inst_13539);

return statearr_13555;
})();
var statearr_13556_13573 = state_13547__$1;
(statearr_13556_13573[(2)] = null);

(statearr_13556_13573[(1)] = (2));


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
});})(c__12259__auto__))
;
return ((function (switch__12236__auto__,c__12259__auto__){
return (function() {
var view3d$client$state_machine__12237__auto__ = null;
var view3d$client$state_machine__12237__auto____0 = (function (){
var statearr_13557 = [null,null,null,null,null,null,null,null,null];
(statearr_13557[(0)] = view3d$client$state_machine__12237__auto__);

(statearr_13557[(1)] = (1));

return statearr_13557;
});
var view3d$client$state_machine__12237__auto____1 = (function (state_13547){
while(true){
var ret_value__12238__auto__ = (function (){try{while(true){
var result__12239__auto__ = switch__12236__auto__.call(null,state_13547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12239__auto__;
}
break;
}
}catch (e13558){if((e13558 instanceof Object)){
var ex__12240__auto__ = e13558;
var statearr_13559_13574 = state_13547;
(statearr_13559_13574[(5)] = ex__12240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13575 = state_13547;
state_13547 = G__13575;
continue;
} else {
return ret_value__12238__auto__;
}
break;
}
});
view3d$client$state_machine__12237__auto__ = function(state_13547){
switch(arguments.length){
case 0:
return view3d$client$state_machine__12237__auto____0.call(this);
case 1:
return view3d$client$state_machine__12237__auto____1.call(this,state_13547);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
view3d$client$state_machine__12237__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__12237__auto____0;
view3d$client$state_machine__12237__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__12237__auto____1;
return view3d$client$state_machine__12237__auto__;
})()
;})(switch__12236__auto__,c__12259__auto__))
})();
var state__12261__auto__ = (function (){var statearr_13560 = f__12260__auto__.call(null);
(statearr_13560[(6)] = c__12259__auto__);

return statearr_13560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12261__auto__);
});})(c__12259__auto__))
);

return c__12259__auto__;
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
var vec__13576 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__13576,(0),null);
var lon = cljs.core.nth.call(null,vec__13576,(1),null);
var alt = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(vehicle);
var alt__$1 = ((((alt < czm.core.MAX_UPGROUND))?(alt + czm.core.FH):alt) | (0));
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
var map__13579 = temp__5455__auto__;
var map__13579__$1 = ((((!((map__13579 == null)))?((((map__13579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13579.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13579):map__13579);
var vehicle = cljs.core.get.call(null,map__13579__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
var period = cljs.core.get.call(null,map__13579__$1,new cljs.core.Keyword(null,"period","period",-352129191));
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
