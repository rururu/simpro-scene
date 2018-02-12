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
var map__12705 = response;
var map__12705__$1 = ((((!((map__12705 == null)))?((((map__12705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12705.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12705):map__12705);
var status = cljs.core.get.call(null,map__12705__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__12705__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
view3d.client.repeater = (function view3d$client$repeater(var_args){
var G__12708 = arguments.length;
switch (G__12708) {
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
var c__11878__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11878__auto__){
return (function (){
var f__11879__auto__ = (function (){var switch__11855__auto__ = ((function (c__11878__auto__){
return (function (state_12722){
var state_val_12723 = (state_12722[(1)]);
if((state_val_12723 === (1))){
var state_12722__$1 = state_12722;
var statearr_12724_12764 = state_12722__$1;
(statearr_12724_12764[(2)] = null);

(statearr_12724_12764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12723 === (2))){
var state_12722__$1 = state_12722;
var statearr_12725_12765 = state_12722__$1;
(statearr_12725_12765[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12723 === (3))){
var inst_12720 = (state_12722[(2)]);
var state_12722__$1 = state_12722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12722__$1,inst_12720);
} else {
if((state_val_12723 === (4))){
var inst_12711 = func.call(null);
var inst_12712 = cljs.core.async.timeout.call(null,time_out);
var state_12722__$1 = (function (){var statearr_12727 = state_12722;
(statearr_12727[(7)] = inst_12711);

return statearr_12727;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12722__$1,(7),inst_12712);
} else {
if((state_val_12723 === (5))){
var state_12722__$1 = state_12722;
var statearr_12728_12766 = state_12722__$1;
(statearr_12728_12766[(2)] = null);

(statearr_12728_12766[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12723 === (6))){
var inst_12718 = (state_12722[(2)]);
var state_12722__$1 = state_12722;
var statearr_12729_12767 = state_12722__$1;
(statearr_12729_12767[(2)] = inst_12718);

(statearr_12729_12767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12723 === (7))){
var inst_12714 = (state_12722[(2)]);
var state_12722__$1 = (function (){var statearr_12730 = state_12722;
(statearr_12730[(8)] = inst_12714);

return statearr_12730;
})();
var statearr_12731_12768 = state_12722__$1;
(statearr_12731_12768[(2)] = null);

(statearr_12731_12768[(1)] = (2));


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
});})(c__11878__auto__))
;
return ((function (switch__11855__auto__,c__11878__auto__){
return (function() {
var view3d$client$state_machine__11856__auto__ = null;
var view3d$client$state_machine__11856__auto____0 = (function (){
var statearr_12732 = [null,null,null,null,null,null,null,null,null];
(statearr_12732[(0)] = view3d$client$state_machine__11856__auto__);

(statearr_12732[(1)] = (1));

return statearr_12732;
});
var view3d$client$state_machine__11856__auto____1 = (function (state_12722){
while(true){
var ret_value__11857__auto__ = (function (){try{while(true){
var result__11858__auto__ = switch__11855__auto__.call(null,state_12722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11858__auto__;
}
break;
}
}catch (e12733){if((e12733 instanceof Object)){
var ex__11859__auto__ = e12733;
var statearr_12734_12769 = state_12722;
(statearr_12734_12769[(5)] = ex__11859__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12770 = state_12722;
state_12722 = G__12770;
continue;
} else {
return ret_value__11857__auto__;
}
break;
}
});
view3d$client$state_machine__11856__auto__ = function(state_12722){
switch(arguments.length){
case 0:
return view3d$client$state_machine__11856__auto____0.call(this);
case 1:
return view3d$client$state_machine__11856__auto____1.call(this,state_12722);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
view3d$client$state_machine__11856__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__11856__auto____0;
view3d$client$state_machine__11856__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__11856__auto____1;
return view3d$client$state_machine__11856__auto__;
})()
;})(switch__11855__auto__,c__11878__auto__))
})();
var state__11880__auto__ = (function (){var statearr_12735 = f__11879__auto__.call(null);
(statearr_12735[(6)] = c__11878__auto__);

return statearr_12735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11880__auto__);
});})(c__11878__auto__))
);

return c__11878__auto__;
});

view3d.client.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__11878__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11878__auto__){
return (function (){
var f__11879__auto__ = (function (){var switch__11855__auto__ = ((function (c__11878__auto__){
return (function (state_12749){
var state_val_12750 = (state_12749[(1)]);
if((state_val_12750 === (1))){
var state_12749__$1 = state_12749;
var statearr_12751_12771 = state_12749__$1;
(statearr_12751_12771[(2)] = null);

(statearr_12751_12771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12750 === (2))){
var state_12749__$1 = state_12749;
var statearr_12752_12772 = state_12749__$1;
(statearr_12752_12772[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12750 === (3))){
var inst_12747 = (state_12749[(2)]);
var state_12749__$1 = state_12749;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12749__$1,inst_12747);
} else {
if((state_val_12750 === (4))){
var inst_12738 = func.call(null,param);
var inst_12739 = cljs.core.async.timeout.call(null,time_out);
var state_12749__$1 = (function (){var statearr_12754 = state_12749;
(statearr_12754[(7)] = inst_12738);

return statearr_12754;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12749__$1,(7),inst_12739);
} else {
if((state_val_12750 === (5))){
var state_12749__$1 = state_12749;
var statearr_12755_12773 = state_12749__$1;
(statearr_12755_12773[(2)] = null);

(statearr_12755_12773[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12750 === (6))){
var inst_12745 = (state_12749[(2)]);
var state_12749__$1 = state_12749;
var statearr_12756_12774 = state_12749__$1;
(statearr_12756_12774[(2)] = inst_12745);

(statearr_12756_12774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12750 === (7))){
var inst_12741 = (state_12749[(2)]);
var state_12749__$1 = (function (){var statearr_12757 = state_12749;
(statearr_12757[(8)] = inst_12741);

return statearr_12757;
})();
var statearr_12758_12775 = state_12749__$1;
(statearr_12758_12775[(2)] = null);

(statearr_12758_12775[(1)] = (2));


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
});})(c__11878__auto__))
;
return ((function (switch__11855__auto__,c__11878__auto__){
return (function() {
var view3d$client$state_machine__11856__auto__ = null;
var view3d$client$state_machine__11856__auto____0 = (function (){
var statearr_12759 = [null,null,null,null,null,null,null,null,null];
(statearr_12759[(0)] = view3d$client$state_machine__11856__auto__);

(statearr_12759[(1)] = (1));

return statearr_12759;
});
var view3d$client$state_machine__11856__auto____1 = (function (state_12749){
while(true){
var ret_value__11857__auto__ = (function (){try{while(true){
var result__11858__auto__ = switch__11855__auto__.call(null,state_12749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11858__auto__;
}
break;
}
}catch (e12760){if((e12760 instanceof Object)){
var ex__11859__auto__ = e12760;
var statearr_12761_12776 = state_12749;
(statearr_12761_12776[(5)] = ex__11859__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12777 = state_12749;
state_12749 = G__12777;
continue;
} else {
return ret_value__11857__auto__;
}
break;
}
});
view3d$client$state_machine__11856__auto__ = function(state_12749){
switch(arguments.length){
case 0:
return view3d$client$state_machine__11856__auto____0.call(this);
case 1:
return view3d$client$state_machine__11856__auto____1.call(this,state_12749);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
view3d$client$state_machine__11856__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__11856__auto____0;
view3d$client$state_machine__11856__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__11856__auto____1;
return view3d$client$state_machine__11856__auto__;
})()
;})(switch__11855__auto__,c__11878__auto__))
})();
var state__11880__auto__ = (function (){var statearr_12762 = f__11879__auto__.call(null);
(statearr_12762[(6)] = c__11878__auto__);

return statearr_12762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11880__auto__);
});})(c__11878__auto__))
);

return c__11878__auto__;
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
var vec__12778 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__12778,(0),null);
var lon = cljs.core.nth.call(null,vec__12778,(1),null);
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

view3d.client.by_id.call(null,"view-val").selectedIndex = (function (){var pred__12781 = cljs.core._EQ_;
var expr__12782 = vie;
if(cljs.core.truth_(pred__12781.call(null,"FORWARD",expr__12782))){
return (0);
} else {
if(cljs.core.truth_(pred__12781.call(null,"BACKWARD",expr__12782))){
return (1);
} else {
if(cljs.core.truth_(pred__12781.call(null,"RIGHT",expr__12782))){
return (2);
} else {
if(cljs.core.truth_(pred__12781.call(null,"LEFT",expr__12782))){
return (3);
} else {
if(cljs.core.truth_(pred__12781.call(null,"UP",expr__12782))){
return (4);
} else {
if(cljs.core.truth_(pred__12781.call(null,"DOWN",expr__12782))){
return (5);
} else {
if(cljs.core.truth_(pred__12781.call(null,"FORWARD-RIGHT",expr__12782))){
return (6);
} else {
if(cljs.core.truth_(pred__12781.call(null,"FORWARD-LEFT",expr__12782))){
return (7);
} else {
if(cljs.core.truth_(pred__12781.call(null,"BACKWARD-RIGHT",expr__12782))){
return (8);
} else {
if(cljs.core.truth_(pred__12781.call(null,"BACKWARD-LEFT",expr__12782))){
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
var map__12784 = temp__5455__auto__;
var map__12784__$1 = ((((!((map__12784 == null)))?((((map__12784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12784.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12784):map__12784);
var vehicle = cljs.core.get.call(null,map__12784__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
var period = cljs.core.get.call(null,map__12784__$1,new cljs.core.Keyword(null,"period","period",-352129191));
return view3d.client.camera_vehicle.call(null,vehicle,period);
} else {
return null;
}
});
view3d.client.camera_hr = (function view3d$client$camera_hr(response){
var resp = view3d.client.read_transit.call(null,response);
var temp__5455__auto__ = resp;
if(cljs.core.truth_(temp__5455__auto__)){
var map__12786 = temp__5455__auto__;
var map__12786__$1 = ((((!((map__12786 == null)))?((((map__12786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12786.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12786):map__12786);
var view = cljs.core.get.call(null,map__12786__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var pitch = cljs.core.get.call(null,map__12786__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
var roll = cljs.core.get.call(null,map__12786__$1,new cljs.core.Keyword(null,"roll","roll",11266999));
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
