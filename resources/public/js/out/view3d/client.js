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
view3d.client.TIO = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vehicle","vehicle",1670166968),(1000),new cljs.core.Keyword(null,"camera","camera",-1190348585),(1100)], null);
view3d.client.error_handler = (function view3d$client$error_handler(response){
var map__29998 = response;
var map__29998__$1 = ((((!((map__29998 == null)))?((((map__29998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29998.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29998):map__29998);
var status = cljs.core.get.call(null,map__29998__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__29998__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
view3d.client.repeater = (function view3d$client$repeater(var_args){
var G__30001 = arguments.length;
switch (G__30001) {
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
var c__12256__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12256__auto__){
return (function (){
var f__12257__auto__ = (function (){var switch__12233__auto__ = ((function (c__12256__auto__){
return (function (state_30015){
var state_val_30016 = (state_30015[(1)]);
if((state_val_30016 === (1))){
var state_30015__$1 = state_30015;
var statearr_30017_30057 = state_30015__$1;
(statearr_30017_30057[(2)] = null);

(statearr_30017_30057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30016 === (2))){
var state_30015__$1 = state_30015;
var statearr_30018_30058 = state_30015__$1;
(statearr_30018_30058[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30016 === (3))){
var inst_30013 = (state_30015[(2)]);
var state_30015__$1 = state_30015;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30015__$1,inst_30013);
} else {
if((state_val_30016 === (4))){
var inst_30004 = func.call(null);
var inst_30005 = cljs.core.async.timeout.call(null,time_out);
var state_30015__$1 = (function (){var statearr_30020 = state_30015;
(statearr_30020[(7)] = inst_30004);

return statearr_30020;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30015__$1,(7),inst_30005);
} else {
if((state_val_30016 === (5))){
var state_30015__$1 = state_30015;
var statearr_30021_30059 = state_30015__$1;
(statearr_30021_30059[(2)] = null);

(statearr_30021_30059[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30016 === (6))){
var inst_30011 = (state_30015[(2)]);
var state_30015__$1 = state_30015;
var statearr_30022_30060 = state_30015__$1;
(statearr_30022_30060[(2)] = inst_30011);

(statearr_30022_30060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30016 === (7))){
var inst_30007 = (state_30015[(2)]);
var state_30015__$1 = (function (){var statearr_30023 = state_30015;
(statearr_30023[(8)] = inst_30007);

return statearr_30023;
})();
var statearr_30024_30061 = state_30015__$1;
(statearr_30024_30061[(2)] = null);

(statearr_30024_30061[(1)] = (2));


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
});})(c__12256__auto__))
;
return ((function (switch__12233__auto__,c__12256__auto__){
return (function() {
var view3d$client$state_machine__12234__auto__ = null;
var view3d$client$state_machine__12234__auto____0 = (function (){
var statearr_30025 = [null,null,null,null,null,null,null,null,null];
(statearr_30025[(0)] = view3d$client$state_machine__12234__auto__);

(statearr_30025[(1)] = (1));

return statearr_30025;
});
var view3d$client$state_machine__12234__auto____1 = (function (state_30015){
while(true){
var ret_value__12235__auto__ = (function (){try{while(true){
var result__12236__auto__ = switch__12233__auto__.call(null,state_30015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12236__auto__;
}
break;
}
}catch (e30026){if((e30026 instanceof Object)){
var ex__12237__auto__ = e30026;
var statearr_30027_30062 = state_30015;
(statearr_30027_30062[(5)] = ex__12237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30063 = state_30015;
state_30015 = G__30063;
continue;
} else {
return ret_value__12235__auto__;
}
break;
}
});
view3d$client$state_machine__12234__auto__ = function(state_30015){
switch(arguments.length){
case 0:
return view3d$client$state_machine__12234__auto____0.call(this);
case 1:
return view3d$client$state_machine__12234__auto____1.call(this,state_30015);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
view3d$client$state_machine__12234__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__12234__auto____0;
view3d$client$state_machine__12234__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__12234__auto____1;
return view3d$client$state_machine__12234__auto__;
})()
;})(switch__12233__auto__,c__12256__auto__))
})();
var state__12258__auto__ = (function (){var statearr_30028 = f__12257__auto__.call(null);
(statearr_30028[(6)] = c__12256__auto__);

return statearr_30028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12258__auto__);
});})(c__12256__auto__))
);

return c__12256__auto__;
});

view3d.client.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__12256__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12256__auto__){
return (function (){
var f__12257__auto__ = (function (){var switch__12233__auto__ = ((function (c__12256__auto__){
return (function (state_30042){
var state_val_30043 = (state_30042[(1)]);
if((state_val_30043 === (1))){
var state_30042__$1 = state_30042;
var statearr_30044_30064 = state_30042__$1;
(statearr_30044_30064[(2)] = null);

(statearr_30044_30064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30043 === (2))){
var state_30042__$1 = state_30042;
var statearr_30045_30065 = state_30042__$1;
(statearr_30045_30065[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30043 === (3))){
var inst_30040 = (state_30042[(2)]);
var state_30042__$1 = state_30042;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30042__$1,inst_30040);
} else {
if((state_val_30043 === (4))){
var inst_30031 = func.call(null,param);
var inst_30032 = cljs.core.async.timeout.call(null,time_out);
var state_30042__$1 = (function (){var statearr_30047 = state_30042;
(statearr_30047[(7)] = inst_30031);

return statearr_30047;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30042__$1,(7),inst_30032);
} else {
if((state_val_30043 === (5))){
var state_30042__$1 = state_30042;
var statearr_30048_30066 = state_30042__$1;
(statearr_30048_30066[(2)] = null);

(statearr_30048_30066[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30043 === (6))){
var inst_30038 = (state_30042[(2)]);
var state_30042__$1 = state_30042;
var statearr_30049_30067 = state_30042__$1;
(statearr_30049_30067[(2)] = inst_30038);

(statearr_30049_30067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30043 === (7))){
var inst_30034 = (state_30042[(2)]);
var state_30042__$1 = (function (){var statearr_30050 = state_30042;
(statearr_30050[(8)] = inst_30034);

return statearr_30050;
})();
var statearr_30051_30068 = state_30042__$1;
(statearr_30051_30068[(2)] = null);

(statearr_30051_30068[(1)] = (2));


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
});})(c__12256__auto__))
;
return ((function (switch__12233__auto__,c__12256__auto__){
return (function() {
var view3d$client$state_machine__12234__auto__ = null;
var view3d$client$state_machine__12234__auto____0 = (function (){
var statearr_30052 = [null,null,null,null,null,null,null,null,null];
(statearr_30052[(0)] = view3d$client$state_machine__12234__auto__);

(statearr_30052[(1)] = (1));

return statearr_30052;
});
var view3d$client$state_machine__12234__auto____1 = (function (state_30042){
while(true){
var ret_value__12235__auto__ = (function (){try{while(true){
var result__12236__auto__ = switch__12233__auto__.call(null,state_30042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12236__auto__;
}
break;
}
}catch (e30053){if((e30053 instanceof Object)){
var ex__12237__auto__ = e30053;
var statearr_30054_30069 = state_30042;
(statearr_30054_30069[(5)] = ex__12237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30070 = state_30042;
state_30042 = G__30070;
continue;
} else {
return ret_value__12235__auto__;
}
break;
}
});
view3d$client$state_machine__12234__auto__ = function(state_30042){
switch(arguments.length){
case 0:
return view3d$client$state_machine__12234__auto____0.call(this);
case 1:
return view3d$client$state_machine__12234__auto____1.call(this,state_30042);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
view3d$client$state_machine__12234__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__12234__auto____0;
view3d$client$state_machine__12234__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__12234__auto____1;
return view3d$client$state_machine__12234__auto__;
})()
;})(switch__12233__auto__,c__12256__auto__))
})();
var state__12258__auto__ = (function (){var statearr_30055 = f__12257__auto__.call(null);
(statearr_30055[(6)] = c__12256__auto__);

return statearr_30055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12258__auto__);
});})(c__12256__auto__))
);

return c__12256__auto__;
});

view3d.client.repeater.cljs$lang$maxFixedArity = 3;

view3d.client.read_transit = (function view3d$client$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
view3d.client.by_id = (function view3d$client$by_id(id){
return document.getElementById(id);
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
view3d.client.camera_vehicle = (function view3d$client$camera_vehicle(vehicle,per){
var vec__30071 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__30071,(0),null);
var lon = cljs.core.nth.call(null,vec__30071,(1),null);
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
view3d.client.camera_control = (function view3d$client$camera_control(vie,pit,rol){
if(cljs.core.truth_(vie)){
view3d.client.view.call(null,vie);

view3d.client.by_id.call(null,"view-val").selectedIndex = (function (){var pred__30074 = cljs.core._EQ_;
var expr__30075 = vie;
if(cljs.core.truth_(pred__30074.call(null,"FORWARD",expr__30075))){
return (0);
} else {
if(cljs.core.truth_(pred__30074.call(null,"BACKWARD",expr__30075))){
return (1);
} else {
if(cljs.core.truth_(pred__30074.call(null,"RIGHT",expr__30075))){
return (2);
} else {
if(cljs.core.truth_(pred__30074.call(null,"LEFT",expr__30075))){
return (3);
} else {
if(cljs.core.truth_(pred__30074.call(null,"UP",expr__30075))){
return (4);
} else {
if(cljs.core.truth_(pred__30074.call(null,"DOWN",expr__30075))){
return (5);
} else {
if(cljs.core.truth_(pred__30074.call(null,"FORWARD-RIGHT",expr__30075))){
return (6);
} else {
if(cljs.core.truth_(pred__30074.call(null,"FORWARD-LEFT",expr__30075))){
return (7);
} else {
if(cljs.core.truth_(pred__30074.call(null,"BACKWARD-RIGHT",expr__30075))){
return (8);
} else {
if(cljs.core.truth_(pred__30074.call(null,"BACKWARD-LEFT",expr__30075))){
return (9);
} else {
return (0);
}
}
}
}
}
}
}
}
}
}
})();
} else {
}

if(cljs.core.truth_(pit)){
view3d.client.pitch.call(null,pit);

view3d.client.by_id.call(null,"pitch-val").setAttribute("value",pit);
} else {
}

if(cljs.core.truth_(rol)){
view3d.client.roll.call(null,rol);

return view3d.client.by_id.call(null,"roll-val").setAttribute("value",rol);
} else {
return null;
}
});
view3d.client.vehicle_hr = (function view3d$client$vehicle_hr(response){
var resp = view3d.client.read_transit.call(null,response);
var temp__5455__auto__ = resp;
if(cljs.core.truth_(temp__5455__auto__)){
var map__30077 = temp__5455__auto__;
var map__30077__$1 = ((((!((map__30077 == null)))?((((map__30077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30077.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30077):map__30077);
var vehicle = cljs.core.get.call(null,map__30077__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
var period = cljs.core.get.call(null,map__30077__$1,new cljs.core.Keyword(null,"period","period",-352129191));
return view3d.client.camera_vehicle.call(null,vehicle,period);
} else {
return null;
}
});
view3d.client.camera_hr = (function view3d$client$camera_hr(response){
var resp = view3d.client.read_transit.call(null,response);
var temp__5455__auto__ = resp;
if(cljs.core.truth_(temp__5455__auto__)){
var map__30079 = temp__5455__auto__;
var map__30079__$1 = ((((!((map__30079 == null)))?((((map__30079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30079.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30079):map__30079);
var view = cljs.core.get.call(null,map__30079__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var pitch = cljs.core.get.call(null,map__30079__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
var roll = cljs.core.get.call(null,map__30079__$1,new cljs.core.Keyword(null,"roll","roll",11266999));
return view3d.client.camera_control.call(null,view,pitch,roll);
} else {
return null;
}
});
view3d.client.receive_vehicle = (function view3d$client$receive_vehicle(){
return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.client.BASE_URL),"vehicle/"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),view3d.client.vehicle_hr,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));
});
view3d.client.receive_camera = (function view3d$client$receive_camera(){
return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.client.BASE_URL),"camera/"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),view3d.client.camera_hr,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));
});
view3d.client.left_controls = (function view3d$client$left_controls(){
view3d.client.set_html_BANG_.call(null,"camera","<h4>Camera</h4>");

view3d.client.set_html_BANG_.call(null,"onboard","Onboard:");

view3d.client.set_html_BANG_.call(null,"onboard-fld","");

view3d.client.set_html_BANG_.call(null,"view","View:");

view3d.client.set_html_BANG_.call(null,"view-fld","<select onchange='javascript:view3d.client.view(this.value)' style='width:96px' id='view-val'>\n   <option value='FORWARD'>FORWARD</option>\n   <option value='BACKWARD'>BACKWARD</option>\n   <option value='RIGHT'>RIGHT</option>\n   <option value='LEFT'>LEFT</option>\n   <option value='UP'>UP</option>\n   <option value='DOWN'>DOWN</option>\n   <option value='FORWARD-RIGHT'>FORWARD-RIGHT</option>\n   <option value='FORWARD-LEFT'>FORWARD-LEFT</option>\n   <option value='BACKWARD-RIGHT'>BACKWARD-RIGHT</option>\n   <option value='BACKWARD-LEFT'>BACKWARD-LEFT</option>\n   </select>");

view3d.client.set_html_BANG_.call(null,"pitch","Pitch:");

view3d.client.set_html_BANG_.call(null,"pitch-fld","<input value='-10' style='width:90px' id='pitch-val'\n               onchange='javascript:view3d.client.pitch(this.value)'>");

view3d.client.set_html_BANG_.call(null,"roll","Roll:");

return view3d.client.set_html_BANG_.call(null,"roll-fld","<input value='0' style='width:90px' id='roll-val'\n               onchange='javascript:view3d.client.roll(this.value)'>");
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

view3d.client.repeater.call(null,view3d.client.receive_camera,new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO));

return view3d.client.show_controls.call(null);
});
window.onload = view3d.client.on_load.call(null);

//# sourceMappingURL=client.js.map
