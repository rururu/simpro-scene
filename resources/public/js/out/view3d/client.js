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
var map__12717 = response;
var map__12717__$1 = ((((!((map__12717 == null)))?((((map__12717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12717.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12717):map__12717);
var status = cljs.core.get.call(null,map__12717__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__12717__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
view3d.client.repeater = (function view3d$client$repeater(var_args){
var G__12720 = arguments.length;
switch (G__12720) {
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
var c__12247__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12247__auto__){
return (function (){
var f__12248__auto__ = (function (){var switch__12224__auto__ = ((function (c__12247__auto__){
return (function (state_12734){
var state_val_12735 = (state_12734[(1)]);
if((state_val_12735 === (1))){
var state_12734__$1 = state_12734;
var statearr_12736_12776 = state_12734__$1;
(statearr_12736_12776[(2)] = null);

(statearr_12736_12776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12735 === (2))){
var state_12734__$1 = state_12734;
var statearr_12737_12777 = state_12734__$1;
(statearr_12737_12777[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12735 === (3))){
var inst_12732 = (state_12734[(2)]);
var state_12734__$1 = state_12734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12734__$1,inst_12732);
} else {
if((state_val_12735 === (4))){
var inst_12723 = func.call(null);
var inst_12724 = cljs.core.async.timeout.call(null,time_out);
var state_12734__$1 = (function (){var statearr_12739 = state_12734;
(statearr_12739[(7)] = inst_12723);

return statearr_12739;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12734__$1,(7),inst_12724);
} else {
if((state_val_12735 === (5))){
var state_12734__$1 = state_12734;
var statearr_12740_12778 = state_12734__$1;
(statearr_12740_12778[(2)] = null);

(statearr_12740_12778[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12735 === (6))){
var inst_12730 = (state_12734[(2)]);
var state_12734__$1 = state_12734;
var statearr_12741_12779 = state_12734__$1;
(statearr_12741_12779[(2)] = inst_12730);

(statearr_12741_12779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12735 === (7))){
var inst_12726 = (state_12734[(2)]);
var state_12734__$1 = (function (){var statearr_12742 = state_12734;
(statearr_12742[(8)] = inst_12726);

return statearr_12742;
})();
var statearr_12743_12780 = state_12734__$1;
(statearr_12743_12780[(2)] = null);

(statearr_12743_12780[(1)] = (2));


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
});})(c__12247__auto__))
;
return ((function (switch__12224__auto__,c__12247__auto__){
return (function() {
var view3d$client$state_machine__12225__auto__ = null;
var view3d$client$state_machine__12225__auto____0 = (function (){
var statearr_12744 = [null,null,null,null,null,null,null,null,null];
(statearr_12744[(0)] = view3d$client$state_machine__12225__auto__);

(statearr_12744[(1)] = (1));

return statearr_12744;
});
var view3d$client$state_machine__12225__auto____1 = (function (state_12734){
while(true){
var ret_value__12226__auto__ = (function (){try{while(true){
var result__12227__auto__ = switch__12224__auto__.call(null,state_12734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12227__auto__;
}
break;
}
}catch (e12745){if((e12745 instanceof Object)){
var ex__12228__auto__ = e12745;
var statearr_12746_12781 = state_12734;
(statearr_12746_12781[(5)] = ex__12228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12745;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12782 = state_12734;
state_12734 = G__12782;
continue;
} else {
return ret_value__12226__auto__;
}
break;
}
});
view3d$client$state_machine__12225__auto__ = function(state_12734){
switch(arguments.length){
case 0:
return view3d$client$state_machine__12225__auto____0.call(this);
case 1:
return view3d$client$state_machine__12225__auto____1.call(this,state_12734);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
view3d$client$state_machine__12225__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__12225__auto____0;
view3d$client$state_machine__12225__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__12225__auto____1;
return view3d$client$state_machine__12225__auto__;
})()
;})(switch__12224__auto__,c__12247__auto__))
})();
var state__12249__auto__ = (function (){var statearr_12747 = f__12248__auto__.call(null);
(statearr_12747[(6)] = c__12247__auto__);

return statearr_12747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12249__auto__);
});})(c__12247__auto__))
);

return c__12247__auto__;
});

view3d.client.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__12247__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12247__auto__){
return (function (){
var f__12248__auto__ = (function (){var switch__12224__auto__ = ((function (c__12247__auto__){
return (function (state_12761){
var state_val_12762 = (state_12761[(1)]);
if((state_val_12762 === (1))){
var state_12761__$1 = state_12761;
var statearr_12763_12783 = state_12761__$1;
(statearr_12763_12783[(2)] = null);

(statearr_12763_12783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12762 === (2))){
var state_12761__$1 = state_12761;
var statearr_12764_12784 = state_12761__$1;
(statearr_12764_12784[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12762 === (3))){
var inst_12759 = (state_12761[(2)]);
var state_12761__$1 = state_12761;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12761__$1,inst_12759);
} else {
if((state_val_12762 === (4))){
var inst_12750 = func.call(null,param);
var inst_12751 = cljs.core.async.timeout.call(null,time_out);
var state_12761__$1 = (function (){var statearr_12766 = state_12761;
(statearr_12766[(7)] = inst_12750);

return statearr_12766;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12761__$1,(7),inst_12751);
} else {
if((state_val_12762 === (5))){
var state_12761__$1 = state_12761;
var statearr_12767_12785 = state_12761__$1;
(statearr_12767_12785[(2)] = null);

(statearr_12767_12785[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12762 === (6))){
var inst_12757 = (state_12761[(2)]);
var state_12761__$1 = state_12761;
var statearr_12768_12786 = state_12761__$1;
(statearr_12768_12786[(2)] = inst_12757);

(statearr_12768_12786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12762 === (7))){
var inst_12753 = (state_12761[(2)]);
var state_12761__$1 = (function (){var statearr_12769 = state_12761;
(statearr_12769[(8)] = inst_12753);

return statearr_12769;
})();
var statearr_12770_12787 = state_12761__$1;
(statearr_12770_12787[(2)] = null);

(statearr_12770_12787[(1)] = (2));


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
});})(c__12247__auto__))
;
return ((function (switch__12224__auto__,c__12247__auto__){
return (function() {
var view3d$client$state_machine__12225__auto__ = null;
var view3d$client$state_machine__12225__auto____0 = (function (){
var statearr_12771 = [null,null,null,null,null,null,null,null,null];
(statearr_12771[(0)] = view3d$client$state_machine__12225__auto__);

(statearr_12771[(1)] = (1));

return statearr_12771;
});
var view3d$client$state_machine__12225__auto____1 = (function (state_12761){
while(true){
var ret_value__12226__auto__ = (function (){try{while(true){
var result__12227__auto__ = switch__12224__auto__.call(null,state_12761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12227__auto__;
}
break;
}
}catch (e12772){if((e12772 instanceof Object)){
var ex__12228__auto__ = e12772;
var statearr_12773_12788 = state_12761;
(statearr_12773_12788[(5)] = ex__12228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12789 = state_12761;
state_12761 = G__12789;
continue;
} else {
return ret_value__12226__auto__;
}
break;
}
});
view3d$client$state_machine__12225__auto__ = function(state_12761){
switch(arguments.length){
case 0:
return view3d$client$state_machine__12225__auto____0.call(this);
case 1:
return view3d$client$state_machine__12225__auto____1.call(this,state_12761);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
view3d$client$state_machine__12225__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__12225__auto____0;
view3d$client$state_machine__12225__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__12225__auto____1;
return view3d$client$state_machine__12225__auto__;
})()
;})(switch__12224__auto__,c__12247__auto__))
})();
var state__12249__auto__ = (function (){var statearr_12774 = f__12248__auto__.call(null);
(statearr_12774[(6)] = c__12247__auto__);

return statearr_12774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12249__auto__);
});})(c__12247__auto__))
);

return c__12247__auto__;
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
var vec__12790 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__12790,(0),null);
var lon = cljs.core.nth.call(null,vec__12790,(1),null);
cljs.core._vreset_BANG_.call(null,view3d.client.VEHICLE,cljs.core.merge.call(null,cljs.core._deref.call(null,view3d.client.VEHICLE),vehicle));

view3d.client.set_html_BANG_.call(null,"onboard-fld",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(vehicle));

view3d.client.set_html_BANG_.call(null,"name-fld",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(vehicle));

view3d.client.set_html_BANG_.call(null,"course-fld",new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(vehicle));

view3d.client.set_html_BANG_.call(null,"speed-fld",new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(vehicle));

view3d.client.set_html_BANG_.call(null,"altitude-fld",((new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(vehicle) + cljs.core.deref.call(null,czm.core.HEIGHT)) | (0)));

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
var map__12793 = temp__5455__auto__;
var map__12793__$1 = ((((!((map__12793 == null)))?((((map__12793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12793.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12793):map__12793);
var vehicle = cljs.core.get.call(null,map__12793__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
var period = cljs.core.get.call(null,map__12793__$1,new cljs.core.Keyword(null,"period","period",-352129191));
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
