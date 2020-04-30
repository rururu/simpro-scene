// Compiled by ClojureScript 1.10.439 {}
goog.provide('view3d.client');
goog.require('cljs.core');
goog.require('cljs.js');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('cljs.core.async');
goog.require('cognitect.transit');
goog.require('ajax.core');
goog.require('cljs.reader');
goog.require('geo.calc');
goog.require('czm.core');
view3d.client.VEHICLE = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"\u0410\u0432\u0440\u043E\u0440\u0430",new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(60),(30)], null),new cljs.core.Keyword(null,"altitude","altitude",463588637),(4000),new cljs.core.Keyword(null,"speed","speed",1257663751),(160),new cljs.core.Keyword(null,"course","course",1455432948),(270)], null));
view3d.client.error_handler = (function view3d$client$error_handler(response){
var map__40215 = response;
var map__40215__$1 = (((((!((map__40215 == null))))?(((((map__40215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40215):map__40215);
var status = cljs.core.get.call(null,map__40215__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__40215__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
view3d.client.CLI_REPL = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.js.empty_state.call(null),new cljs.core.Keyword(null,"value","value",305978217),null], null));
view3d.client.RESPONSE = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
view3d.client.repeater = (function view3d$client$repeater(var_args){
var G__40218 = arguments.length;
switch (G__40218) {
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
var c__16675__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16675__auto__){
return (function (){
var f__16676__auto__ = (function (){var switch__16508__auto__ = ((function (c__16675__auto__){
return (function (state_40232){
var state_val_40233 = (state_40232[(1)]);
if((state_val_40233 === (1))){
var state_40232__$1 = state_40232;
var statearr_40234_40274 = state_40232__$1;
(statearr_40234_40274[(2)] = null);

(statearr_40234_40274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (2))){
var state_40232__$1 = state_40232;
var statearr_40235_40275 = state_40232__$1;
(statearr_40235_40275[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (3))){
var inst_40230 = (state_40232[(2)]);
var state_40232__$1 = state_40232;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40232__$1,inst_40230);
} else {
if((state_val_40233 === (4))){
var inst_40221 = func.call(null);
var inst_40222 = cljs.core.async.timeout.call(null,time_out);
var state_40232__$1 = (function (){var statearr_40237 = state_40232;
(statearr_40237[(7)] = inst_40221);

return statearr_40237;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40232__$1,(7),inst_40222);
} else {
if((state_val_40233 === (5))){
var state_40232__$1 = state_40232;
var statearr_40238_40276 = state_40232__$1;
(statearr_40238_40276[(2)] = null);

(statearr_40238_40276[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (6))){
var inst_40228 = (state_40232[(2)]);
var state_40232__$1 = state_40232;
var statearr_40239_40277 = state_40232__$1;
(statearr_40239_40277[(2)] = inst_40228);

(statearr_40239_40277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (7))){
var inst_40224 = (state_40232[(2)]);
var state_40232__$1 = (function (){var statearr_40240 = state_40232;
(statearr_40240[(8)] = inst_40224);

return statearr_40240;
})();
var statearr_40241_40278 = state_40232__$1;
(statearr_40241_40278[(2)] = null);

(statearr_40241_40278[(1)] = (2));


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
});})(c__16675__auto__))
;
return ((function (switch__16508__auto__,c__16675__auto__){
return (function() {
var view3d$client$state_machine__16509__auto__ = null;
var view3d$client$state_machine__16509__auto____0 = (function (){
var statearr_40242 = [null,null,null,null,null,null,null,null,null];
(statearr_40242[(0)] = view3d$client$state_machine__16509__auto__);

(statearr_40242[(1)] = (1));

return statearr_40242;
});
var view3d$client$state_machine__16509__auto____1 = (function (state_40232){
while(true){
var ret_value__16510__auto__ = (function (){try{while(true){
var result__16511__auto__ = switch__16508__auto__.call(null,state_40232);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16511__auto__;
}
break;
}
}catch (e40243){if((e40243 instanceof Object)){
var ex__16512__auto__ = e40243;
var statearr_40244_40279 = state_40232;
(statearr_40244_40279[(5)] = ex__16512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40280 = state_40232;
state_40232 = G__40280;
continue;
} else {
return ret_value__16510__auto__;
}
break;
}
});
view3d$client$state_machine__16509__auto__ = function(state_40232){
switch(arguments.length){
case 0:
return view3d$client$state_machine__16509__auto____0.call(this);
case 1:
return view3d$client$state_machine__16509__auto____1.call(this,state_40232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__16509__auto____0;
view3d$client$state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__16509__auto____1;
return view3d$client$state_machine__16509__auto__;
})()
;})(switch__16508__auto__,c__16675__auto__))
})();
var state__16677__auto__ = (function (){var statearr_40245 = f__16676__auto__.call(null);
(statearr_40245[(6)] = c__16675__auto__);

return statearr_40245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16677__auto__);
});})(c__16675__auto__))
);

return c__16675__auto__;
});

view3d.client.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__16675__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16675__auto__){
return (function (){
var f__16676__auto__ = (function (){var switch__16508__auto__ = ((function (c__16675__auto__){
return (function (state_40259){
var state_val_40260 = (state_40259[(1)]);
if((state_val_40260 === (1))){
var state_40259__$1 = state_40259;
var statearr_40261_40281 = state_40259__$1;
(statearr_40261_40281[(2)] = null);

(statearr_40261_40281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40260 === (2))){
var state_40259__$1 = state_40259;
var statearr_40262_40282 = state_40259__$1;
(statearr_40262_40282[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40260 === (3))){
var inst_40257 = (state_40259[(2)]);
var state_40259__$1 = state_40259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40259__$1,inst_40257);
} else {
if((state_val_40260 === (4))){
var inst_40248 = func.call(null,param);
var inst_40249 = cljs.core.async.timeout.call(null,time_out);
var state_40259__$1 = (function (){var statearr_40264 = state_40259;
(statearr_40264[(7)] = inst_40248);

return statearr_40264;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40259__$1,(7),inst_40249);
} else {
if((state_val_40260 === (5))){
var state_40259__$1 = state_40259;
var statearr_40265_40283 = state_40259__$1;
(statearr_40265_40283[(2)] = null);

(statearr_40265_40283[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40260 === (6))){
var inst_40255 = (state_40259[(2)]);
var state_40259__$1 = state_40259;
var statearr_40266_40284 = state_40259__$1;
(statearr_40266_40284[(2)] = inst_40255);

(statearr_40266_40284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40260 === (7))){
var inst_40251 = (state_40259[(2)]);
var state_40259__$1 = (function (){var statearr_40267 = state_40259;
(statearr_40267[(8)] = inst_40251);

return statearr_40267;
})();
var statearr_40268_40285 = state_40259__$1;
(statearr_40268_40285[(2)] = null);

(statearr_40268_40285[(1)] = (2));


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
});})(c__16675__auto__))
;
return ((function (switch__16508__auto__,c__16675__auto__){
return (function() {
var view3d$client$state_machine__16509__auto__ = null;
var view3d$client$state_machine__16509__auto____0 = (function (){
var statearr_40269 = [null,null,null,null,null,null,null,null,null];
(statearr_40269[(0)] = view3d$client$state_machine__16509__auto__);

(statearr_40269[(1)] = (1));

return statearr_40269;
});
var view3d$client$state_machine__16509__auto____1 = (function (state_40259){
while(true){
var ret_value__16510__auto__ = (function (){try{while(true){
var result__16511__auto__ = switch__16508__auto__.call(null,state_40259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16511__auto__;
}
break;
}
}catch (e40270){if((e40270 instanceof Object)){
var ex__16512__auto__ = e40270;
var statearr_40271_40286 = state_40259;
(statearr_40271_40286[(5)] = ex__16512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40287 = state_40259;
state_40259 = G__40287;
continue;
} else {
return ret_value__16510__auto__;
}
break;
}
});
view3d$client$state_machine__16509__auto__ = function(state_40259){
switch(arguments.length){
case 0:
return view3d$client$state_machine__16509__auto____0.call(this);
case 1:
return view3d$client$state_machine__16509__auto____1.call(this,state_40259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__16509__auto____0;
view3d$client$state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__16509__auto____1;
return view3d$client$state_machine__16509__auto__;
})()
;})(switch__16508__auto__,c__16675__auto__))
})();
var state__16677__auto__ = (function (){var statearr_40272 = f__16676__auto__.call(null);
(statearr_40272[(6)] = c__16675__auto__);

return statearr_40272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16677__auto__);
});})(c__16675__auto__))
);

return c__16675__auto__;
});

view3d.client.repeater.cljs$lang$maxFixedArity = 3;

view3d.client.repeater_BANG_ = (function view3d$client$repeater_BANG_(var_args){
var G__40289 = arguments.length;
switch (G__40289) {
case 2:
return view3d.client.repeater_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return view3d.client.repeater_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

view3d.client.repeater_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__16675__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16675__auto__){
return (function (){
var f__16676__auto__ = (function (){var switch__16508__auto__ = ((function (c__16675__auto__){
return (function (state_40304){
var state_val_40305 = (state_40304[(1)]);
if((state_val_40305 === (1))){
var state_40304__$1 = state_40304;
var statearr_40306_40347 = state_40304__$1;
(statearr_40306_40347[(2)] = null);

(statearr_40306_40347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40305 === (2))){
var state_40304__$1 = state_40304;
var statearr_40307_40348 = state_40304__$1;
(statearr_40307_40348[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40305 === (3))){
var inst_40302 = (state_40304[(2)]);
var state_40304__$1 = state_40304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40304__$1,inst_40302);
} else {
if((state_val_40305 === (4))){
var inst_40292 = func.call(null);
var inst_40293 = cljs.core.deref.call(null,time_out);
var inst_40294 = cljs.core.async.timeout.call(null,inst_40293);
var state_40304__$1 = (function (){var statearr_40309 = state_40304;
(statearr_40309[(7)] = inst_40292);

return statearr_40309;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40304__$1,(7),inst_40294);
} else {
if((state_val_40305 === (5))){
var state_40304__$1 = state_40304;
var statearr_40310_40349 = state_40304__$1;
(statearr_40310_40349[(2)] = null);

(statearr_40310_40349[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40305 === (6))){
var inst_40300 = (state_40304[(2)]);
var state_40304__$1 = state_40304;
var statearr_40311_40350 = state_40304__$1;
(statearr_40311_40350[(2)] = inst_40300);

(statearr_40311_40350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40305 === (7))){
var inst_40296 = (state_40304[(2)]);
var state_40304__$1 = (function (){var statearr_40312 = state_40304;
(statearr_40312[(8)] = inst_40296);

return statearr_40312;
})();
var statearr_40313_40351 = state_40304__$1;
(statearr_40313_40351[(2)] = null);

(statearr_40313_40351[(1)] = (2));


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
});})(c__16675__auto__))
;
return ((function (switch__16508__auto__,c__16675__auto__){
return (function() {
var view3d$client$state_machine__16509__auto__ = null;
var view3d$client$state_machine__16509__auto____0 = (function (){
var statearr_40314 = [null,null,null,null,null,null,null,null,null];
(statearr_40314[(0)] = view3d$client$state_machine__16509__auto__);

(statearr_40314[(1)] = (1));

return statearr_40314;
});
var view3d$client$state_machine__16509__auto____1 = (function (state_40304){
while(true){
var ret_value__16510__auto__ = (function (){try{while(true){
var result__16511__auto__ = switch__16508__auto__.call(null,state_40304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16511__auto__;
}
break;
}
}catch (e40315){if((e40315 instanceof Object)){
var ex__16512__auto__ = e40315;
var statearr_40316_40352 = state_40304;
(statearr_40316_40352[(5)] = ex__16512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40353 = state_40304;
state_40304 = G__40353;
continue;
} else {
return ret_value__16510__auto__;
}
break;
}
});
view3d$client$state_machine__16509__auto__ = function(state_40304){
switch(arguments.length){
case 0:
return view3d$client$state_machine__16509__auto____0.call(this);
case 1:
return view3d$client$state_machine__16509__auto____1.call(this,state_40304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__16509__auto____0;
view3d$client$state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__16509__auto____1;
return view3d$client$state_machine__16509__auto__;
})()
;})(switch__16508__auto__,c__16675__auto__))
})();
var state__16677__auto__ = (function (){var statearr_40317 = f__16676__auto__.call(null);
(statearr_40317[(6)] = c__16675__auto__);

return statearr_40317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16677__auto__);
});})(c__16675__auto__))
);

return c__16675__auto__;
});

view3d.client.repeater_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__16675__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16675__auto__){
return (function (){
var f__16676__auto__ = (function (){var switch__16508__auto__ = ((function (c__16675__auto__){
return (function (state_40332){
var state_val_40333 = (state_40332[(1)]);
if((state_val_40333 === (1))){
var state_40332__$1 = state_40332;
var statearr_40334_40354 = state_40332__$1;
(statearr_40334_40354[(2)] = null);

(statearr_40334_40354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40333 === (2))){
var state_40332__$1 = state_40332;
var statearr_40335_40355 = state_40332__$1;
(statearr_40335_40355[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40333 === (3))){
var inst_40330 = (state_40332[(2)]);
var state_40332__$1 = state_40332;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40332__$1,inst_40330);
} else {
if((state_val_40333 === (4))){
var inst_40320 = func.call(null,param);
var inst_40321 = cljs.core.deref.call(null,time_out);
var inst_40322 = cljs.core.async.timeout.call(null,inst_40321);
var state_40332__$1 = (function (){var statearr_40337 = state_40332;
(statearr_40337[(7)] = inst_40320);

return statearr_40337;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40332__$1,(7),inst_40322);
} else {
if((state_val_40333 === (5))){
var state_40332__$1 = state_40332;
var statearr_40338_40356 = state_40332__$1;
(statearr_40338_40356[(2)] = null);

(statearr_40338_40356[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40333 === (6))){
var inst_40328 = (state_40332[(2)]);
var state_40332__$1 = state_40332;
var statearr_40339_40357 = state_40332__$1;
(statearr_40339_40357[(2)] = inst_40328);

(statearr_40339_40357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40333 === (7))){
var inst_40324 = (state_40332[(2)]);
var state_40332__$1 = (function (){var statearr_40340 = state_40332;
(statearr_40340[(8)] = inst_40324);

return statearr_40340;
})();
var statearr_40341_40358 = state_40332__$1;
(statearr_40341_40358[(2)] = null);

(statearr_40341_40358[(1)] = (2));


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
});})(c__16675__auto__))
;
return ((function (switch__16508__auto__,c__16675__auto__){
return (function() {
var view3d$client$state_machine__16509__auto__ = null;
var view3d$client$state_machine__16509__auto____0 = (function (){
var statearr_40342 = [null,null,null,null,null,null,null,null,null];
(statearr_40342[(0)] = view3d$client$state_machine__16509__auto__);

(statearr_40342[(1)] = (1));

return statearr_40342;
});
var view3d$client$state_machine__16509__auto____1 = (function (state_40332){
while(true){
var ret_value__16510__auto__ = (function (){try{while(true){
var result__16511__auto__ = switch__16508__auto__.call(null,state_40332);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16511__auto__;
}
break;
}
}catch (e40343){if((e40343 instanceof Object)){
var ex__16512__auto__ = e40343;
var statearr_40344_40359 = state_40332;
(statearr_40344_40359[(5)] = ex__16512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40360 = state_40332;
state_40332 = G__40360;
continue;
} else {
return ret_value__16510__auto__;
}
break;
}
});
view3d$client$state_machine__16509__auto__ = function(state_40332){
switch(arguments.length){
case 0:
return view3d$client$state_machine__16509__auto____0.call(this);
case 1:
return view3d$client$state_machine__16509__auto____1.call(this,state_40332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__16509__auto____0;
view3d$client$state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__16509__auto____1;
return view3d$client$state_machine__16509__auto__;
})()
;})(switch__16508__auto__,c__16675__auto__))
})();
var state__16677__auto__ = (function (){var statearr_40345 = f__16676__auto__.call(null);
(statearr_40345[(6)] = c__16675__auto__);

return statearr_40345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16677__auto__);
});})(c__16675__auto__))
);

return c__16675__auto__;
});

view3d.client.repeater_BANG_.cljs$lang$maxFixedArity = 3;

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
view3d.client.view = (function view3d$client$view(deg){
var deg__$1 = view3d.client.num_val.call(null,deg);
if(((((-180) <= deg__$1)) && ((deg__$1 <= (180))))){
cljs.core._vreset_BANG_.call(null,czm.core.CAMERA,cljs.core.assoc.call(null,cljs.core._deref.call(null,czm.core.CAMERA),new cljs.core.Keyword(null,"view","view",1247994814),deg__$1));

return view3d.client.set_html_BANG_.call(null,"view-fld",deg__$1);
} else {
return null;
}
});
view3d.client.pitch = (function view3d$client$pitch(deg){
var deg__$1 = view3d.client.num_val.call(null,deg);
if(((((-90) <= deg__$1)) && ((deg__$1 <= (90))))){
cljs.core._vreset_BANG_.call(null,czm.core.CAMERA,cljs.core.assoc.call(null,cljs.core._deref.call(null,czm.core.CAMERA),new cljs.core.Keyword(null,"pitch","pitch",1495126700),deg__$1));

return view3d.client.set_html_BANG_.call(null,"pitch-fld",deg__$1);
} else {
return null;
}
});
view3d.client.roll = (function view3d$client$roll(deg){
var deg__$1 = view3d.client.num_val.call(null,deg);
if(((((-180) <= deg__$1)) && ((deg__$1 <= (180))))){
cljs.core._vreset_BANG_.call(null,czm.core.CAMERA,cljs.core.assoc.call(null,cljs.core._deref.call(null,czm.core.CAMERA),new cljs.core.Keyword(null,"roll","roll",11266999),deg__$1));

return view3d.client.set_html_BANG_.call(null,"roll-fld",deg__$1);
} else {
return null;
}
});
view3d.client.response_request = (function view3d$client$response_request(){
var resp = cljs.core.deref.call(null,view3d.client.RESPONSE);
if((!(cljs.core.empty_QMARK_.call(null,resp)))){
ajax.core.GET.call(null,"/response",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response","response",-1068424192),(function (){try{return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),resp);
}catch (e40361){if((e40361 instanceof Error)){
var e = e40361;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e40361;

}
}})()], null),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));

return cljs.core.vreset_BANG_.call(null,view3d.client.RESPONSE,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
});
view3d.client.handle_request = (function view3d$client$handle_request(request){
var temp__5733__auto___40368 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___40368)){
var vie_40369 = temp__5733__auto___40368;
view3d.client.view.call(null,vie_40369);
} else {
}

var temp__5733__auto___40370 = new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___40370)){
var pit_40371 = temp__5733__auto___40370;
view3d.client.pitch.call(null,pit_40371);
} else {
}

var temp__5733__auto___40372 = new cljs.core.Keyword(null,"roll","roll",11266999).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___40372)){
var rol_40373 = temp__5733__auto___40372;
view3d.client.roll.call(null,rol_40373);
} else {
}

var temp__5733__auto___40374 = new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___40374)){
var vec__40362_40375 = temp__5733__auto___40374;
var lat_40376 = cljs.core.nth.call(null,vec__40362_40375,(0),null);
var lon_40377 = cljs.core.nth.call(null,vec__40362_40375,(1),null);
var vec__40365_40378 = czm.core.sample_height.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [geo.calc.radians.call(null,lat_40376),geo.calc.radians.call(null,lon_40377)], null),(0));
var __40379 = cljs.core.nth.call(null,vec__40365_40378,(0),null);
var __40380__$1 = cljs.core.nth.call(null,vec__40365_40378,(1),null);
var sh_40381 = cljs.core.nth.call(null,vec__40365_40378,(2),null);
cljs.core._vreset_BANG_.call(null,view3d.client.RESPONSE,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.RESPONSE),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(sh_40381 | (0))));
} else {
}

return view3d.client.response_request.call(null);
});
view3d.client.handle_vehicle = (function view3d$client$handle_vehicle(vehicle){
var vec__40382 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__40382,(0),null);
var lon = cljs.core.nth.call(null,vec__40382,(1),null);
var alt = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(vehicle);
var crs = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(vehicle);
var head = czm.core.norm_crs.call(null,(crs + new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,czm.core.CAMERA))));
cljs.core._vreset_BANG_.call(null,view3d.client.VEHICLE,cljs.core.merge.call(null,cljs.core._deref.call(null,view3d.client.VEHICLE),vehicle));

view3d.client.set_html_BANG_.call(null,"onboard-fld",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(vehicle));

view3d.client.set_html_BANG_.call(null,"name-fld",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(vehicle));

view3d.client.set_html_BANG_.call(null,"course-fld",new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(vehicle));

view3d.client.set_html_BANG_.call(null,"speed-fld",new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(vehicle));

view3d.client.set_html_BANG_.call(null,"altitude-fld",czm.core.ALT);

view3d.client.set_html_BANG_.call(null,"view-dir",geo.calc.rumb.call(null,head));

return czm.core.fly_to.call(null,lat,lon,alt,crs,1.2);
});
view3d.client.vehicle_hr = (function view3d$client$vehicle_hr(response){
var resp = view3d.client.read_transit.call(null,response);
var temp__5733__auto___40385 = new cljs.core.Keyword(null,"vehicle","vehicle",1670166968).cljs$core$IFn$_invoke$arity$1(resp);
if(cljs.core.truth_(temp__5733__auto___40385)){
var vehicle_40386 = temp__5733__auto___40385;
view3d.client.handle_vehicle.call(null,vehicle_40386);
} else {
}

var temp__5733__auto__ = new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(resp);
if(cljs.core.truth_(temp__5733__auto__)){
var request = temp__5733__auto__;
return view3d.client.handle_request.call(null,request);
} else {
return null;
}
});
view3d.client.receive_vehicle = (function view3d$client$receive_vehicle(){
return ajax.core.GET.call(null,"/vehicle",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.deref.call(null,czm.core.CAMERA),new cljs.core.Keyword(null,"handler","handler",-195596612),view3d.client.vehicle_hr,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));
});
view3d.client.left_controls = (function view3d$client$left_controls(){
view3d.client.set_html_BANG_.call(null,"camera","<h4>Camera</h4>");

view3d.client.set_html_BANG_.call(null,"onboard","Onboard:");

view3d.client.set_html_BANG_.call(null,"onboard-fld","");

view3d.client.set_html_BANG_.call(null,"view","View:");

view3d.client.set_html_BANG_.call(null,"view-fld",(0));

view3d.client.set_html_BANG_.call(null,"view-sld","<input type='range' style='width:150px' id='roll-vals'\n               min='-180' value='0' max='180'\n               oninput='javascript:view3d.client.view(this.value)'>");

view3d.client.set_html_BANG_.call(null,"pitch","Pitch:");

view3d.client.set_html_BANG_.call(null,"pitch-fld",(0));

view3d.client.set_html_BANG_.call(null,"pitch-sld","<input type='range' style='width:150px' id='pitch-vals'\n               min='-90' value='0' max='90'\n               oninput='javascript:view3d.client.pitch(this.value)'>");

view3d.client.set_html_BANG_.call(null,"roll","Roll:");

view3d.client.set_html_BANG_.call(null,"roll-fld",(0));

return view3d.client.set_html_BANG_.call(null,"roll-sld","<input type='range' style='width:150px' id='roll-vals'\n               min='-180' value='0' max='180'\n               oninput='javascript:view3d.client.roll(this.value)'>");
});
view3d.client.right_controls = (function view3d$client$right_controls(){
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
view3d.client.right_controls.call(null);

return view3d.client.left_controls.call(null);
});
view3d.client.on_load = (function view3d$client$on_load(){
czm.core.init_3D_view.call(null);

view3d.client.repeater.call(null,view3d.client.receive_vehicle,(1000));

return view3d.client.show_controls.call(null);
});
view3d.client.run_repl = (function view3d$client$run_repl(){
var result = (function view3d$client$run_repl_$_result(res){
cljs.core.println.call(null,res);

return cljs.core._vreset_BANG_.call(null,view3d.client.CLI_REPL,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.CLI_REPL),new cljs.core.Keyword(null,"value","value",305978217),res.call(null,new cljs.core.Keyword(null,"value","value",305978217))));
});
var evaluate = (function view3d$client$run_repl_$_evaluate(source){
return cljs.js.eval_str.call(null,cljs.core.deref.call(null,view3d.client.CLI_REPL).call(null,new cljs.core.Keyword(null,"state","state",-1988618099)),source,null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)], null),result);
});
var hand = (function view3d$client$run_repl_$_hand(response){
var temp__5735__auto__ = cljs.core.first.call(null,view3d.client.read_transit.call(null,response));
if(cljs.core.truth_(temp__5735__auto__)){
var req = temp__5735__auto__;
cljs.core.println.call(null,req);

var temp__5733__auto__ = new cljs.core.Keyword(null,"sexp","sexp",-1528364050).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5733__auto__)){
var sexp = temp__5733__auto__;
return evaluate.call(null,sexp);
} else {
return null;
}
} else {
return null;
}
});
ajax.core.GET.call(null,"/cli-repl",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transit","transit",359458387),(function (){try{return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),cljs.core.deref.call(null,view3d.client.CLI_REPL).call(null,new cljs.core.Keyword(null,"value","value",305978217)));
}catch (e40387){if((e40387 instanceof Error)){
var e = e40387;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e40387;

}
}})()], null),new cljs.core.Keyword(null,"handler","handler",-195596612),hand,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));

return setTimeout(view3d.client.run_repl,(1000));
});
view3d.client.tst = (function view3d$client$tst(){
czm.core.VIEWER.scene.globe.depthTestAgainstTerrain = true;

cljs.core.println.call(null,new cljs.core.Keyword(null,"D","D",-8015893),czm.core.VIEWER.scene.globe.depthTestAgainstTerrain);

var ppc = (new Cesium.PointPrimitiveCollection(({"heightReference": Cesium.HeightReference.CLAMP_TO_GROUND})));
var lla = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [61.6,7.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [61.61,7.51], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [61.6,7.52], null)], null);
var clr = Cesium.Color.YELLOW;
var size = (10);
var prims = czm.core.VIEWER.scene.primitives.add(ppc);
return fillPointPrimColl(prims,cljs.core.clj__GT_js.call(null,lla),clr,size);
});
cljs.core.enable_console_print_BANG_.call(null);
window.onload = view3d.client.on_load.call(null);
view3d.client.run_repl.call(null);
view3d.client.tst.call(null);

//# sourceMappingURL=client.js.map
