// Compiled by ClojureScript 1.9.293 {}
goog.provide('view3d.client');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('cljs.core.async');
goog.require('cognitect.transit');
goog.require('ajax.core');
goog.require('czm.core');
view3d.client.VEHICLE = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(60),(30)], null),new cljs.core.Keyword(null,"altitude","altitude",463588637),(4000),new cljs.core.Keyword(null,"speed","speed",1257663751),(160),new cljs.core.Keyword(null,"course","course",1455432948),(270)], null));
view3d.client.PORT = (4444);
view3d.client.HOST = "http://localhost:";
view3d.client.URL = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"directives","directives",-2003276356),[cljs.core.str(view3d.client.HOST),cljs.core.str(view3d.client.PORT),cljs.core.str("/directives/")].join('')], null);
view3d.client.TIO = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"directives","directives",-2003276356),(1000)], null);
view3d.client.error_handler = (function view3d$client$error_handler(response){
var map__10026 = response;
var map__10026__$1 = ((((!((map__10026 == null)))?((((map__10026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10026.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10026):map__10026);
var status = cljs.core.get.call(null,map__10026__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__10026__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str("AJAX ERROR: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
view3d.client.repeater = (function view3d$client$repeater(var_args){
var args10028 = [];
var len__7774__auto___10091 = arguments.length;
var i__7775__auto___10092 = (0);
while(true){
if((i__7775__auto___10092 < len__7774__auto___10091)){
args10028.push((arguments[i__7775__auto___10092]));

var G__10093 = (i__7775__auto___10092 + (1));
i__7775__auto___10092 = G__10093;
continue;
} else {
}
break;
}

var G__10030 = args10028.length;
switch (G__10030) {
case 2:
return view3d.client.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return view3d.client.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10028.length)].join('')));

}
});

view3d.client.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__9239__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9239__auto__){
return (function (){
var f__9240__auto__ = (function (){var switch__9218__auto__ = ((function (c__9239__auto__){
return (function (state_10044){
var state_val_10045 = (state_10044[(1)]);
if((state_val_10045 === (1))){
var state_10044__$1 = state_10044;
var statearr_10046_10095 = state_10044__$1;
(statearr_10046_10095[(2)] = null);

(statearr_10046_10095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10045 === (2))){
var state_10044__$1 = state_10044;
var statearr_10047_10096 = state_10044__$1;
(statearr_10047_10096[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10045 === (3))){
var inst_10042 = (state_10044[(2)]);
var state_10044__$1 = state_10044;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10044__$1,inst_10042);
} else {
if((state_val_10045 === (4))){
var inst_10033 = func.call(null);
var inst_10034 = cljs.core.async.timeout.call(null,time_out);
var state_10044__$1 = (function (){var statearr_10049 = state_10044;
(statearr_10049[(7)] = inst_10033);

return statearr_10049;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10044__$1,(7),inst_10034);
} else {
if((state_val_10045 === (5))){
var state_10044__$1 = state_10044;
var statearr_10050_10097 = state_10044__$1;
(statearr_10050_10097[(2)] = null);

(statearr_10050_10097[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10045 === (6))){
var inst_10040 = (state_10044[(2)]);
var state_10044__$1 = state_10044;
var statearr_10051_10098 = state_10044__$1;
(statearr_10051_10098[(2)] = inst_10040);

(statearr_10051_10098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10045 === (7))){
var inst_10036 = (state_10044[(2)]);
var state_10044__$1 = (function (){var statearr_10052 = state_10044;
(statearr_10052[(8)] = inst_10036);

return statearr_10052;
})();
var statearr_10053_10099 = state_10044__$1;
(statearr_10053_10099[(2)] = null);

(statearr_10053_10099[(1)] = (2));


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
});})(c__9239__auto__))
;
return ((function (switch__9218__auto__,c__9239__auto__){
return (function() {
var view3d$client$state_machine__9219__auto__ = null;
var view3d$client$state_machine__9219__auto____0 = (function (){
var statearr_10057 = [null,null,null,null,null,null,null,null,null];
(statearr_10057[(0)] = view3d$client$state_machine__9219__auto__);

(statearr_10057[(1)] = (1));

return statearr_10057;
});
var view3d$client$state_machine__9219__auto____1 = (function (state_10044){
while(true){
var ret_value__9220__auto__ = (function (){try{while(true){
var result__9221__auto__ = switch__9218__auto__.call(null,state_10044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9221__auto__;
}
break;
}
}catch (e10058){if((e10058 instanceof Object)){
var ex__9222__auto__ = e10058;
var statearr_10059_10100 = state_10044;
(statearr_10059_10100[(5)] = ex__9222__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10101 = state_10044;
state_10044 = G__10101;
continue;
} else {
return ret_value__9220__auto__;
}
break;
}
});
view3d$client$state_machine__9219__auto__ = function(state_10044){
switch(arguments.length){
case 0:
return view3d$client$state_machine__9219__auto____0.call(this);
case 1:
return view3d$client$state_machine__9219__auto____1.call(this,state_10044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__9219__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__9219__auto____0;
view3d$client$state_machine__9219__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__9219__auto____1;
return view3d$client$state_machine__9219__auto__;
})()
;})(switch__9218__auto__,c__9239__auto__))
})();
var state__9241__auto__ = (function (){var statearr_10060 = f__9240__auto__.call(null);
(statearr_10060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9239__auto__);

return statearr_10060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9241__auto__);
});})(c__9239__auto__))
);

return c__9239__auto__;
});

view3d.client.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__9239__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9239__auto__){
return (function (){
var f__9240__auto__ = (function (){var switch__9218__auto__ = ((function (c__9239__auto__){
return (function (state_10074){
var state_val_10075 = (state_10074[(1)]);
if((state_val_10075 === (1))){
var state_10074__$1 = state_10074;
var statearr_10076_10102 = state_10074__$1;
(statearr_10076_10102[(2)] = null);

(statearr_10076_10102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10075 === (2))){
var state_10074__$1 = state_10074;
var statearr_10077_10103 = state_10074__$1;
(statearr_10077_10103[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10075 === (3))){
var inst_10072 = (state_10074[(2)]);
var state_10074__$1 = state_10074;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10074__$1,inst_10072);
} else {
if((state_val_10075 === (4))){
var inst_10063 = func.call(null,param);
var inst_10064 = cljs.core.async.timeout.call(null,time_out);
var state_10074__$1 = (function (){var statearr_10079 = state_10074;
(statearr_10079[(7)] = inst_10063);

return statearr_10079;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10074__$1,(7),inst_10064);
} else {
if((state_val_10075 === (5))){
var state_10074__$1 = state_10074;
var statearr_10080_10104 = state_10074__$1;
(statearr_10080_10104[(2)] = null);

(statearr_10080_10104[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10075 === (6))){
var inst_10070 = (state_10074[(2)]);
var state_10074__$1 = state_10074;
var statearr_10081_10105 = state_10074__$1;
(statearr_10081_10105[(2)] = inst_10070);

(statearr_10081_10105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10075 === (7))){
var inst_10066 = (state_10074[(2)]);
var state_10074__$1 = (function (){var statearr_10082 = state_10074;
(statearr_10082[(8)] = inst_10066);

return statearr_10082;
})();
var statearr_10083_10106 = state_10074__$1;
(statearr_10083_10106[(2)] = null);

(statearr_10083_10106[(1)] = (2));


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
});})(c__9239__auto__))
;
return ((function (switch__9218__auto__,c__9239__auto__){
return (function() {
var view3d$client$state_machine__9219__auto__ = null;
var view3d$client$state_machine__9219__auto____0 = (function (){
var statearr_10087 = [null,null,null,null,null,null,null,null,null];
(statearr_10087[(0)] = view3d$client$state_machine__9219__auto__);

(statearr_10087[(1)] = (1));

return statearr_10087;
});
var view3d$client$state_machine__9219__auto____1 = (function (state_10074){
while(true){
var ret_value__9220__auto__ = (function (){try{while(true){
var result__9221__auto__ = switch__9218__auto__.call(null,state_10074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9221__auto__;
}
break;
}
}catch (e10088){if((e10088 instanceof Object)){
var ex__9222__auto__ = e10088;
var statearr_10089_10107 = state_10074;
(statearr_10089_10107[(5)] = ex__9222__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10088;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10108 = state_10074;
state_10074 = G__10108;
continue;
} else {
return ret_value__9220__auto__;
}
break;
}
});
view3d$client$state_machine__9219__auto__ = function(state_10074){
switch(arguments.length){
case 0:
return view3d$client$state_machine__9219__auto____0.call(this);
case 1:
return view3d$client$state_machine__9219__auto____1.call(this,state_10074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__9219__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__9219__auto____0;
view3d$client$state_machine__9219__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__9219__auto____1;
return view3d$client$state_machine__9219__auto__;
})()
;})(switch__9218__auto__,c__9239__auto__))
})();
var state__9241__auto__ = (function (){var statearr_10090 = f__9240__auto__.call(null);
(statearr_10090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9239__auto__);

return statearr_10090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9241__auto__);
});})(c__9239__auto__))
);

return c__9239__auto__;
});

view3d.client.repeater.cljs$lang$maxFixedArity = 3;

view3d.client.read_transit = (function view3d$client$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
view3d.client.camera_vehicle = (function view3d$client$camera_vehicle(vehicle,per){
var vec__10112 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__10112,(0),null);
var lon = cljs.core.nth.call(null,vec__10112,(1),null);
cljs.core._vreset_BANG_.call(null,view3d.client.VEHICLE,cljs.core.merge.call(null,cljs.core._deref.call(null,view3d.client.VEHICLE),vehicle));

if((per <= (0))){
return czm.core.move_to.call(null,lat,lon,((new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(vehicle) / 3.28084) | (0)),new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(vehicle));
} else {
return czm.core.fly_to.call(null,lat,lon,((new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(vehicle) / 3.28084) | (0)),new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(vehicle),per);
}
});
view3d.client.directives_handler = (function view3d$client$directives_handler(response){
var seq__10133 = cljs.core.seq.call(null,view3d.client.read_transit.call(null,response));
var chunk__10134 = null;
var count__10135 = (0);
var i__10136 = (0);
while(true){
if((i__10136 < count__10135)){
var map__10137 = cljs.core._nth.call(null,chunk__10134,i__10136);
var map__10137__$1 = ((((!((map__10137 == null)))?((((map__10137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10137.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10137):map__10137);
var dir = map__10137__$1;
var directive = cljs.core.get.call(null,map__10137__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__10139_10151 = cljs.core._EQ_;
var expr__10140_10152 = directive;
if(cljs.core.truth_(pred__10139_10151.call(null,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968),expr__10140_10152))){
var map__10142_10153 = dir;
var map__10142_10154__$1 = ((((!((map__10142_10153 == null)))?((((map__10142_10153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10142_10153.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10142_10153):map__10142_10153);
var vehicle_10155 = cljs.core.get.call(null,map__10142_10154__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
var period_10156 = cljs.core.get.call(null,map__10142_10154__$1,new cljs.core.Keyword(null,"period","period",-352129191));
view3d.client.camera_vehicle.call(null,vehicle_10155,period_10156);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__10140_10152)].join('')));
}

var G__10157 = seq__10133;
var G__10158 = chunk__10134;
var G__10159 = count__10135;
var G__10160 = (i__10136 + (1));
seq__10133 = G__10157;
chunk__10134 = G__10158;
count__10135 = G__10159;
i__10136 = G__10160;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10133);
if(temp__4657__auto__){
var seq__10133__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10133__$1)){
var c__7480__auto__ = cljs.core.chunk_first.call(null,seq__10133__$1);
var G__10161 = cljs.core.chunk_rest.call(null,seq__10133__$1);
var G__10162 = c__7480__auto__;
var G__10163 = cljs.core.count.call(null,c__7480__auto__);
var G__10164 = (0);
seq__10133 = G__10161;
chunk__10134 = G__10162;
count__10135 = G__10163;
i__10136 = G__10164;
continue;
} else {
var map__10144 = cljs.core.first.call(null,seq__10133__$1);
var map__10144__$1 = ((((!((map__10144 == null)))?((((map__10144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10144.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10144):map__10144);
var dir = map__10144__$1;
var directive = cljs.core.get.call(null,map__10144__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__10146_10165 = cljs.core._EQ_;
var expr__10147_10166 = directive;
if(cljs.core.truth_(pred__10146_10165.call(null,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968),expr__10147_10166))){
var map__10149_10167 = dir;
var map__10149_10168__$1 = ((((!((map__10149_10167 == null)))?((((map__10149_10167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10149_10167.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10149_10167):map__10149_10167);
var vehicle_10169 = cljs.core.get.call(null,map__10149_10168__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
var period_10170 = cljs.core.get.call(null,map__10149_10168__$1,new cljs.core.Keyword(null,"period","period",-352129191));
view3d.client.camera_vehicle.call(null,vehicle_10169,period_10170);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__10147_10166)].join('')));
}

var G__10171 = cljs.core.next.call(null,seq__10133__$1);
var G__10172 = null;
var G__10173 = (0);
var G__10174 = (0);
seq__10133 = G__10171;
chunk__10134 = G__10172;
count__10135 = G__10173;
i__10136 = G__10174;
continue;
}
} else {
return null;
}
}
break;
}
});
view3d.client.receive_directives = (function view3d$client$receive_directives(){
return ajax.core.GET.call(null,new cljs.core.Keyword(null,"directives","directives",-2003276356).cljs$core$IFn$_invoke$arity$1(view3d.client.URL),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),view3d.client.directives_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));
});
view3d.client.on_load = (function view3d$client$on_load(){
cljs.core.enable_console_print_BANG_.call(null);

return view3d.client.repeater.call(null,view3d.client.receive_directives,new cljs.core.Keyword(null,"directives","directives",-2003276356).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO));
});
window.onload = view3d.client.on_load.call(null);

//# sourceMappingURL=client.js.map