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
var map__12643 = response;
var map__12643__$1 = ((((!((map__12643 == null)))?((((map__12643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12643.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12643):map__12643);
var status = cljs.core.get.call(null,map__12643__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__12643__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
view3d.client.repeater = (function view3d$client$repeater(var_args){
var G__12646 = arguments.length;
switch (G__12646) {
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
return (function (state_12660){
var state_val_12661 = (state_12660[(1)]);
if((state_val_12661 === (1))){
var state_12660__$1 = state_12660;
var statearr_12662_12702 = state_12660__$1;
(statearr_12662_12702[(2)] = null);

(statearr_12662_12702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12661 === (2))){
var state_12660__$1 = state_12660;
var statearr_12663_12703 = state_12660__$1;
(statearr_12663_12703[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12661 === (3))){
var inst_12658 = (state_12660[(2)]);
var state_12660__$1 = state_12660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12660__$1,inst_12658);
} else {
if((state_val_12661 === (4))){
var inst_12649 = func.call(null);
var inst_12650 = cljs.core.async.timeout.call(null,time_out);
var state_12660__$1 = (function (){var statearr_12665 = state_12660;
(statearr_12665[(7)] = inst_12649);

return statearr_12665;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12660__$1,(7),inst_12650);
} else {
if((state_val_12661 === (5))){
var state_12660__$1 = state_12660;
var statearr_12666_12704 = state_12660__$1;
(statearr_12666_12704[(2)] = null);

(statearr_12666_12704[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12661 === (6))){
var inst_12656 = (state_12660[(2)]);
var state_12660__$1 = state_12660;
var statearr_12667_12705 = state_12660__$1;
(statearr_12667_12705[(2)] = inst_12656);

(statearr_12667_12705[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12661 === (7))){
var inst_12652 = (state_12660[(2)]);
var state_12660__$1 = (function (){var statearr_12668 = state_12660;
(statearr_12668[(8)] = inst_12652);

return statearr_12668;
})();
var statearr_12669_12706 = state_12660__$1;
(statearr_12669_12706[(2)] = null);

(statearr_12669_12706[(1)] = (2));


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
var statearr_12670 = [null,null,null,null,null,null,null,null,null];
(statearr_12670[(0)] = view3d$client$state_machine__12234__auto__);

(statearr_12670[(1)] = (1));

return statearr_12670;
});
var view3d$client$state_machine__12234__auto____1 = (function (state_12660){
while(true){
var ret_value__12235__auto__ = (function (){try{while(true){
var result__12236__auto__ = switch__12233__auto__.call(null,state_12660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12236__auto__;
}
break;
}
}catch (e12671){if((e12671 instanceof Object)){
var ex__12237__auto__ = e12671;
var statearr_12672_12707 = state_12660;
(statearr_12672_12707[(5)] = ex__12237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12708 = state_12660;
state_12660 = G__12708;
continue;
} else {
return ret_value__12235__auto__;
}
break;
}
});
view3d$client$state_machine__12234__auto__ = function(state_12660){
switch(arguments.length){
case 0:
return view3d$client$state_machine__12234__auto____0.call(this);
case 1:
return view3d$client$state_machine__12234__auto____1.call(this,state_12660);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
view3d$client$state_machine__12234__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__12234__auto____0;
view3d$client$state_machine__12234__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__12234__auto____1;
return view3d$client$state_machine__12234__auto__;
})()
;})(switch__12233__auto__,c__12256__auto__))
})();
var state__12258__auto__ = (function (){var statearr_12673 = f__12257__auto__.call(null);
(statearr_12673[(6)] = c__12256__auto__);

return statearr_12673;
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
return (function (state_12687){
var state_val_12688 = (state_12687[(1)]);
if((state_val_12688 === (1))){
var state_12687__$1 = state_12687;
var statearr_12689_12709 = state_12687__$1;
(statearr_12689_12709[(2)] = null);

(statearr_12689_12709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (2))){
var state_12687__$1 = state_12687;
var statearr_12690_12710 = state_12687__$1;
(statearr_12690_12710[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (3))){
var inst_12685 = (state_12687[(2)]);
var state_12687__$1 = state_12687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12687__$1,inst_12685);
} else {
if((state_val_12688 === (4))){
var inst_12676 = func.call(null,param);
var inst_12677 = cljs.core.async.timeout.call(null,time_out);
var state_12687__$1 = (function (){var statearr_12692 = state_12687;
(statearr_12692[(7)] = inst_12676);

return statearr_12692;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12687__$1,(7),inst_12677);
} else {
if((state_val_12688 === (5))){
var state_12687__$1 = state_12687;
var statearr_12693_12711 = state_12687__$1;
(statearr_12693_12711[(2)] = null);

(statearr_12693_12711[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (6))){
var inst_12683 = (state_12687[(2)]);
var state_12687__$1 = state_12687;
var statearr_12694_12712 = state_12687__$1;
(statearr_12694_12712[(2)] = inst_12683);

(statearr_12694_12712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12688 === (7))){
var inst_12679 = (state_12687[(2)]);
var state_12687__$1 = (function (){var statearr_12695 = state_12687;
(statearr_12695[(8)] = inst_12679);

return statearr_12695;
})();
var statearr_12696_12713 = state_12687__$1;
(statearr_12696_12713[(2)] = null);

(statearr_12696_12713[(1)] = (2));


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
var statearr_12697 = [null,null,null,null,null,null,null,null,null];
(statearr_12697[(0)] = view3d$client$state_machine__12234__auto__);

(statearr_12697[(1)] = (1));

return statearr_12697;
});
var view3d$client$state_machine__12234__auto____1 = (function (state_12687){
while(true){
var ret_value__12235__auto__ = (function (){try{while(true){
var result__12236__auto__ = switch__12233__auto__.call(null,state_12687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12236__auto__;
}
break;
}
}catch (e12698){if((e12698 instanceof Object)){
var ex__12237__auto__ = e12698;
var statearr_12699_12714 = state_12687;
(statearr_12699_12714[(5)] = ex__12237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12715 = state_12687;
state_12687 = G__12715;
continue;
} else {
return ret_value__12235__auto__;
}
break;
}
});
view3d$client$state_machine__12234__auto__ = function(state_12687){
switch(arguments.length){
case 0:
return view3d$client$state_machine__12234__auto____0.call(this);
case 1:
return view3d$client$state_machine__12234__auto____1.call(this,state_12687);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
view3d$client$state_machine__12234__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__12234__auto____0;
view3d$client$state_machine__12234__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__12234__auto____1;
return view3d$client$state_machine__12234__auto__;
})()
;})(switch__12233__auto__,c__12256__auto__))
})();
var state__12258__auto__ = (function (){var statearr_12700 = f__12257__auto__.call(null);
(statearr_12700[(6)] = c__12256__auto__);

return statearr_12700;
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
var vec__12716 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__12716,(0),null);
var lon = cljs.core.nth.call(null,vec__12716,(1),null);
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

view3d.client.by_id.call(null,"view-val").selectedIndex = (function (){var pred__12719 = cljs.core._EQ_;
var expr__12720 = vie;
if(cljs.core.truth_(pred__12719.call(null,"FORWARD",expr__12720))){
return (0);
} else {
if(cljs.core.truth_(pred__12719.call(null,"BACKWARD",expr__12720))){
return (1);
} else {
if(cljs.core.truth_(pred__12719.call(null,"RIGHT",expr__12720))){
return (2);
} else {
if(cljs.core.truth_(pred__12719.call(null,"LEFT",expr__12720))){
return (3);
} else {
if(cljs.core.truth_(pred__12719.call(null,"UP",expr__12720))){
return (4);
} else {
if(cljs.core.truth_(pred__12719.call(null,"DOWN",expr__12720))){
return (5);
} else {
if(cljs.core.truth_(pred__12719.call(null,"FORWARD-RIGHT",expr__12720))){
return (6);
} else {
if(cljs.core.truth_(pred__12719.call(null,"FORWARD-LEFT",expr__12720))){
return (7);
} else {
if(cljs.core.truth_(pred__12719.call(null,"BACKWARD-RIGHT",expr__12720))){
return (8);
} else {
if(cljs.core.truth_(pred__12719.call(null,"BACKWARD-LEFT",expr__12720))){
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
var map__12722 = temp__5455__auto__;
var map__12722__$1 = ((((!((map__12722 == null)))?((((map__12722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12722.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12722):map__12722);
var vehicle = cljs.core.get.call(null,map__12722__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
var period = cljs.core.get.call(null,map__12722__$1,new cljs.core.Keyword(null,"period","period",-352129191));
return view3d.client.camera_vehicle.call(null,vehicle,period);
} else {
return null;
}
});
view3d.client.camera_hr = (function view3d$client$camera_hr(response){
var resp = view3d.client.read_transit.call(null,response);
var temp__5455__auto__ = resp;
if(cljs.core.truth_(temp__5455__auto__)){
var map__12724 = temp__5455__auto__;
var map__12724__$1 = ((((!((map__12724 == null)))?((((map__12724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12724.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12724):map__12724);
var view = cljs.core.get.call(null,map__12724__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var pitch = cljs.core.get.call(null,map__12724__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
var roll = cljs.core.get.call(null,map__12724__$1,new cljs.core.Keyword(null,"roll","roll",11266999));
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
