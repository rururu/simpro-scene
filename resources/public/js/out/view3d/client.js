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
var map__19710 = response;
var map__19710__$1 = ((((!((map__19710 == null)))?((((map__19710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19710.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19710):map__19710);
var status = cljs.core.get.call(null,map__19710__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__19710__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
view3d.client.repeater = (function view3d$client$repeater(var_args){
var G__19713 = arguments.length;
switch (G__19713) {
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
return (function (state_19727){
var state_val_19728 = (state_19727[(1)]);
if((state_val_19728 === (1))){
var state_19727__$1 = state_19727;
var statearr_19729_19769 = state_19727__$1;
(statearr_19729_19769[(2)] = null);

(statearr_19729_19769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19728 === (2))){
var state_19727__$1 = state_19727;
var statearr_19730_19770 = state_19727__$1;
(statearr_19730_19770[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19728 === (3))){
var inst_19725 = (state_19727[(2)]);
var state_19727__$1 = state_19727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19727__$1,inst_19725);
} else {
if((state_val_19728 === (4))){
var inst_19716 = func.call(null);
var inst_19717 = cljs.core.async.timeout.call(null,time_out);
var state_19727__$1 = (function (){var statearr_19732 = state_19727;
(statearr_19732[(7)] = inst_19716);

return statearr_19732;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19727__$1,(7),inst_19717);
} else {
if((state_val_19728 === (5))){
var state_19727__$1 = state_19727;
var statearr_19733_19771 = state_19727__$1;
(statearr_19733_19771[(2)] = null);

(statearr_19733_19771[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19728 === (6))){
var inst_19723 = (state_19727[(2)]);
var state_19727__$1 = state_19727;
var statearr_19734_19772 = state_19727__$1;
(statearr_19734_19772[(2)] = inst_19723);

(statearr_19734_19772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19728 === (7))){
var inst_19719 = (state_19727[(2)]);
var state_19727__$1 = (function (){var statearr_19735 = state_19727;
(statearr_19735[(8)] = inst_19719);

return statearr_19735;
})();
var statearr_19736_19773 = state_19727__$1;
(statearr_19736_19773[(2)] = null);

(statearr_19736_19773[(1)] = (2));


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
var statearr_19737 = [null,null,null,null,null,null,null,null,null];
(statearr_19737[(0)] = view3d$client$state_machine__12225__auto__);

(statearr_19737[(1)] = (1));

return statearr_19737;
});
var view3d$client$state_machine__12225__auto____1 = (function (state_19727){
while(true){
var ret_value__12226__auto__ = (function (){try{while(true){
var result__12227__auto__ = switch__12224__auto__.call(null,state_19727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12227__auto__;
}
break;
}
}catch (e19738){if((e19738 instanceof Object)){
var ex__12228__auto__ = e19738;
var statearr_19739_19774 = state_19727;
(statearr_19739_19774[(5)] = ex__12228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19775 = state_19727;
state_19727 = G__19775;
continue;
} else {
return ret_value__12226__auto__;
}
break;
}
});
view3d$client$state_machine__12225__auto__ = function(state_19727){
switch(arguments.length){
case 0:
return view3d$client$state_machine__12225__auto____0.call(this);
case 1:
return view3d$client$state_machine__12225__auto____1.call(this,state_19727);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
view3d$client$state_machine__12225__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__12225__auto____0;
view3d$client$state_machine__12225__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__12225__auto____1;
return view3d$client$state_machine__12225__auto__;
})()
;})(switch__12224__auto__,c__12247__auto__))
})();
var state__12249__auto__ = (function (){var statearr_19740 = f__12248__auto__.call(null);
(statearr_19740[(6)] = c__12247__auto__);

return statearr_19740;
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
return (function (state_19754){
var state_val_19755 = (state_19754[(1)]);
if((state_val_19755 === (1))){
var state_19754__$1 = state_19754;
var statearr_19756_19776 = state_19754__$1;
(statearr_19756_19776[(2)] = null);

(statearr_19756_19776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19755 === (2))){
var state_19754__$1 = state_19754;
var statearr_19757_19777 = state_19754__$1;
(statearr_19757_19777[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19755 === (3))){
var inst_19752 = (state_19754[(2)]);
var state_19754__$1 = state_19754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19754__$1,inst_19752);
} else {
if((state_val_19755 === (4))){
var inst_19743 = func.call(null,param);
var inst_19744 = cljs.core.async.timeout.call(null,time_out);
var state_19754__$1 = (function (){var statearr_19759 = state_19754;
(statearr_19759[(7)] = inst_19743);

return statearr_19759;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19754__$1,(7),inst_19744);
} else {
if((state_val_19755 === (5))){
var state_19754__$1 = state_19754;
var statearr_19760_19778 = state_19754__$1;
(statearr_19760_19778[(2)] = null);

(statearr_19760_19778[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19755 === (6))){
var inst_19750 = (state_19754[(2)]);
var state_19754__$1 = state_19754;
var statearr_19761_19779 = state_19754__$1;
(statearr_19761_19779[(2)] = inst_19750);

(statearr_19761_19779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19755 === (7))){
var inst_19746 = (state_19754[(2)]);
var state_19754__$1 = (function (){var statearr_19762 = state_19754;
(statearr_19762[(8)] = inst_19746);

return statearr_19762;
})();
var statearr_19763_19780 = state_19754__$1;
(statearr_19763_19780[(2)] = null);

(statearr_19763_19780[(1)] = (2));


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
var statearr_19764 = [null,null,null,null,null,null,null,null,null];
(statearr_19764[(0)] = view3d$client$state_machine__12225__auto__);

(statearr_19764[(1)] = (1));

return statearr_19764;
});
var view3d$client$state_machine__12225__auto____1 = (function (state_19754){
while(true){
var ret_value__12226__auto__ = (function (){try{while(true){
var result__12227__auto__ = switch__12224__auto__.call(null,state_19754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12227__auto__;
}
break;
}
}catch (e19765){if((e19765 instanceof Object)){
var ex__12228__auto__ = e19765;
var statearr_19766_19781 = state_19754;
(statearr_19766_19781[(5)] = ex__12228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19782 = state_19754;
state_19754 = G__19782;
continue;
} else {
return ret_value__12226__auto__;
}
break;
}
});
view3d$client$state_machine__12225__auto__ = function(state_19754){
switch(arguments.length){
case 0:
return view3d$client$state_machine__12225__auto____0.call(this);
case 1:
return view3d$client$state_machine__12225__auto____1.call(this,state_19754);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
view3d$client$state_machine__12225__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__12225__auto____0;
view3d$client$state_machine__12225__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__12225__auto____1;
return view3d$client$state_machine__12225__auto__;
})()
;})(switch__12224__auto__,c__12247__auto__))
})();
var state__12249__auto__ = (function (){var statearr_19767 = f__12248__auto__.call(null);
(statearr_19767[(6)] = c__12247__auto__);

return statearr_19767;
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
var vec__19783 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__19783,(0),null);
var lon = cljs.core.nth.call(null,vec__19783,(1),null);
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
var map__19786 = temp__5455__auto__;
var map__19786__$1 = ((((!((map__19786 == null)))?((((map__19786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19786.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19786):map__19786);
var vehicle = cljs.core.get.call(null,map__19786__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
var period = cljs.core.get.call(null,map__19786__$1,new cljs.core.Keyword(null,"period","period",-352129191));
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
