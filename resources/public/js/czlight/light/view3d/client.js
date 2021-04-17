// Compiled by ClojureScript 1.10.439 {}
goog.provide('light.view3d.client');
goog.require('cljs.core');
goog.require('cljs.js');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('cljs.core.async');
goog.require('cognitect.transit');
goog.require('ajax.core');
goog.require('cljs.reader');
goog.require('light.geo.calc');
goog.require('light.czm.core');
light.view3d.client.VEHICLE = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"\u0410\u0432\u0440\u043E\u0440\u0430",new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(60),(30)], null),new cljs.core.Keyword(null,"altitude","altitude",463588637),(4000),new cljs.core.Keyword(null,"speed","speed",1257663751),(160),new cljs.core.Keyword(null,"course","course",1455432948),(270)], null));
light.view3d.client.error_handler = (function light$view3d$client$error_handler(response){
var map__3199 = response;
var map__3199__$1 = (((((!((map__3199 == null))))?(((((map__3199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3199):map__3199);
var status = cljs.core.get.call(null,map__3199__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__3199__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
light.view3d.client.CLI_REPL = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.js.empty_state.call(null),new cljs.core.Keyword(null,"value","value",305978217),null], null));
light.view3d.client.RESPONSE = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
light.view3d.client.PORT = (8448);
light.view3d.client.repeater = (function light$view3d$client$repeater(var_args){
var G__3202 = arguments.length;
switch (G__3202) {
case 2:
return light.view3d.client.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return light.view3d.client.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

light.view3d.client.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__3069__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3069__auto__){
return (function (){
var f__3070__auto__ = (function (){var switch__3046__auto__ = ((function (c__3069__auto__){
return (function (state_3216){
var state_val_3217 = (state_3216[(1)]);
if((state_val_3217 === (1))){
var state_3216__$1 = state_3216;
var statearr_3218_3258 = state_3216__$1;
(statearr_3218_3258[(2)] = null);

(statearr_3218_3258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3217 === (2))){
var state_3216__$1 = state_3216;
var statearr_3219_3259 = state_3216__$1;
(statearr_3219_3259[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3217 === (3))){
var inst_3214 = (state_3216[(2)]);
var state_3216__$1 = state_3216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3216__$1,inst_3214);
} else {
if((state_val_3217 === (4))){
var inst_3205 = func.call(null);
var inst_3206 = cljs.core.async.timeout.call(null,time_out);
var state_3216__$1 = (function (){var statearr_3221 = state_3216;
(statearr_3221[(7)] = inst_3205);

return statearr_3221;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3216__$1,(7),inst_3206);
} else {
if((state_val_3217 === (5))){
var state_3216__$1 = state_3216;
var statearr_3222_3260 = state_3216__$1;
(statearr_3222_3260[(2)] = null);

(statearr_3222_3260[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3217 === (6))){
var inst_3212 = (state_3216[(2)]);
var state_3216__$1 = state_3216;
var statearr_3223_3261 = state_3216__$1;
(statearr_3223_3261[(2)] = inst_3212);

(statearr_3223_3261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3217 === (7))){
var inst_3208 = (state_3216[(2)]);
var state_3216__$1 = (function (){var statearr_3224 = state_3216;
(statearr_3224[(8)] = inst_3208);

return statearr_3224;
})();
var statearr_3225_3262 = state_3216__$1;
(statearr_3225_3262[(2)] = null);

(statearr_3225_3262[(1)] = (2));


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
});})(c__3069__auto__))
;
return ((function (switch__3046__auto__,c__3069__auto__){
return (function() {
var light$view3d$client$state_machine__3047__auto__ = null;
var light$view3d$client$state_machine__3047__auto____0 = (function (){
var statearr_3226 = [null,null,null,null,null,null,null,null,null];
(statearr_3226[(0)] = light$view3d$client$state_machine__3047__auto__);

(statearr_3226[(1)] = (1));

return statearr_3226;
});
var light$view3d$client$state_machine__3047__auto____1 = (function (state_3216){
while(true){
var ret_value__3048__auto__ = (function (){try{while(true){
var result__3049__auto__ = switch__3046__auto__.call(null,state_3216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3049__auto__;
}
break;
}
}catch (e3227){if((e3227 instanceof Object)){
var ex__3050__auto__ = e3227;
var statearr_3228_3263 = state_3216;
(statearr_3228_3263[(5)] = ex__3050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3264 = state_3216;
state_3216 = G__3264;
continue;
} else {
return ret_value__3048__auto__;
}
break;
}
});
light$view3d$client$state_machine__3047__auto__ = function(state_3216){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__3047__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__3047__auto____1.call(this,state_3216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__3047__auto____0;
light$view3d$client$state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__3047__auto____1;
return light$view3d$client$state_machine__3047__auto__;
})()
;})(switch__3046__auto__,c__3069__auto__))
})();
var state__3071__auto__ = (function (){var statearr_3229 = f__3070__auto__.call(null);
(statearr_3229[(6)] = c__3069__auto__);

return statearr_3229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3071__auto__);
});})(c__3069__auto__))
);

return c__3069__auto__;
});

light.view3d.client.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__3069__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3069__auto__){
return (function (){
var f__3070__auto__ = (function (){var switch__3046__auto__ = ((function (c__3069__auto__){
return (function (state_3243){
var state_val_3244 = (state_3243[(1)]);
if((state_val_3244 === (1))){
var state_3243__$1 = state_3243;
var statearr_3245_3265 = state_3243__$1;
(statearr_3245_3265[(2)] = null);

(statearr_3245_3265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3244 === (2))){
var state_3243__$1 = state_3243;
var statearr_3246_3266 = state_3243__$1;
(statearr_3246_3266[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3244 === (3))){
var inst_3241 = (state_3243[(2)]);
var state_3243__$1 = state_3243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3243__$1,inst_3241);
} else {
if((state_val_3244 === (4))){
var inst_3232 = func.call(null,param);
var inst_3233 = cljs.core.async.timeout.call(null,time_out);
var state_3243__$1 = (function (){var statearr_3248 = state_3243;
(statearr_3248[(7)] = inst_3232);

return statearr_3248;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3243__$1,(7),inst_3233);
} else {
if((state_val_3244 === (5))){
var state_3243__$1 = state_3243;
var statearr_3249_3267 = state_3243__$1;
(statearr_3249_3267[(2)] = null);

(statearr_3249_3267[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3244 === (6))){
var inst_3239 = (state_3243[(2)]);
var state_3243__$1 = state_3243;
var statearr_3250_3268 = state_3243__$1;
(statearr_3250_3268[(2)] = inst_3239);

(statearr_3250_3268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3244 === (7))){
var inst_3235 = (state_3243[(2)]);
var state_3243__$1 = (function (){var statearr_3251 = state_3243;
(statearr_3251[(8)] = inst_3235);

return statearr_3251;
})();
var statearr_3252_3269 = state_3243__$1;
(statearr_3252_3269[(2)] = null);

(statearr_3252_3269[(1)] = (2));


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
});})(c__3069__auto__))
;
return ((function (switch__3046__auto__,c__3069__auto__){
return (function() {
var light$view3d$client$state_machine__3047__auto__ = null;
var light$view3d$client$state_machine__3047__auto____0 = (function (){
var statearr_3253 = [null,null,null,null,null,null,null,null,null];
(statearr_3253[(0)] = light$view3d$client$state_machine__3047__auto__);

(statearr_3253[(1)] = (1));

return statearr_3253;
});
var light$view3d$client$state_machine__3047__auto____1 = (function (state_3243){
while(true){
var ret_value__3048__auto__ = (function (){try{while(true){
var result__3049__auto__ = switch__3046__auto__.call(null,state_3243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3049__auto__;
}
break;
}
}catch (e3254){if((e3254 instanceof Object)){
var ex__3050__auto__ = e3254;
var statearr_3255_3270 = state_3243;
(statearr_3255_3270[(5)] = ex__3050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3271 = state_3243;
state_3243 = G__3271;
continue;
} else {
return ret_value__3048__auto__;
}
break;
}
});
light$view3d$client$state_machine__3047__auto__ = function(state_3243){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__3047__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__3047__auto____1.call(this,state_3243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__3047__auto____0;
light$view3d$client$state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__3047__auto____1;
return light$view3d$client$state_machine__3047__auto__;
})()
;})(switch__3046__auto__,c__3069__auto__))
})();
var state__3071__auto__ = (function (){var statearr_3256 = f__3070__auto__.call(null);
(statearr_3256[(6)] = c__3069__auto__);

return statearr_3256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3071__auto__);
});})(c__3069__auto__))
);

return c__3069__auto__;
});

light.view3d.client.repeater.cljs$lang$maxFixedArity = 3;

light.view3d.client.repeater_BANG_ = (function light$view3d$client$repeater_BANG_(var_args){
var G__3273 = arguments.length;
switch (G__3273) {
case 2:
return light.view3d.client.repeater_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return light.view3d.client.repeater_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

light.view3d.client.repeater_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__3069__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3069__auto__){
return (function (){
var f__3070__auto__ = (function (){var switch__3046__auto__ = ((function (c__3069__auto__){
return (function (state_3288){
var state_val_3289 = (state_3288[(1)]);
if((state_val_3289 === (1))){
var state_3288__$1 = state_3288;
var statearr_3290_3331 = state_3288__$1;
(statearr_3290_3331[(2)] = null);

(statearr_3290_3331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3289 === (2))){
var state_3288__$1 = state_3288;
var statearr_3291_3332 = state_3288__$1;
(statearr_3291_3332[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3289 === (3))){
var inst_3286 = (state_3288[(2)]);
var state_3288__$1 = state_3288;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3288__$1,inst_3286);
} else {
if((state_val_3289 === (4))){
var inst_3276 = func.call(null);
var inst_3277 = cljs.core.deref.call(null,time_out);
var inst_3278 = cljs.core.async.timeout.call(null,inst_3277);
var state_3288__$1 = (function (){var statearr_3293 = state_3288;
(statearr_3293[(7)] = inst_3276);

return statearr_3293;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3288__$1,(7),inst_3278);
} else {
if((state_val_3289 === (5))){
var state_3288__$1 = state_3288;
var statearr_3294_3333 = state_3288__$1;
(statearr_3294_3333[(2)] = null);

(statearr_3294_3333[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3289 === (6))){
var inst_3284 = (state_3288[(2)]);
var state_3288__$1 = state_3288;
var statearr_3295_3334 = state_3288__$1;
(statearr_3295_3334[(2)] = inst_3284);

(statearr_3295_3334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3289 === (7))){
var inst_3280 = (state_3288[(2)]);
var state_3288__$1 = (function (){var statearr_3296 = state_3288;
(statearr_3296[(8)] = inst_3280);

return statearr_3296;
})();
var statearr_3297_3335 = state_3288__$1;
(statearr_3297_3335[(2)] = null);

(statearr_3297_3335[(1)] = (2));


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
});})(c__3069__auto__))
;
return ((function (switch__3046__auto__,c__3069__auto__){
return (function() {
var light$view3d$client$state_machine__3047__auto__ = null;
var light$view3d$client$state_machine__3047__auto____0 = (function (){
var statearr_3298 = [null,null,null,null,null,null,null,null,null];
(statearr_3298[(0)] = light$view3d$client$state_machine__3047__auto__);

(statearr_3298[(1)] = (1));

return statearr_3298;
});
var light$view3d$client$state_machine__3047__auto____1 = (function (state_3288){
while(true){
var ret_value__3048__auto__ = (function (){try{while(true){
var result__3049__auto__ = switch__3046__auto__.call(null,state_3288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3049__auto__;
}
break;
}
}catch (e3299){if((e3299 instanceof Object)){
var ex__3050__auto__ = e3299;
var statearr_3300_3336 = state_3288;
(statearr_3300_3336[(5)] = ex__3050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3337 = state_3288;
state_3288 = G__3337;
continue;
} else {
return ret_value__3048__auto__;
}
break;
}
});
light$view3d$client$state_machine__3047__auto__ = function(state_3288){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__3047__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__3047__auto____1.call(this,state_3288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__3047__auto____0;
light$view3d$client$state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__3047__auto____1;
return light$view3d$client$state_machine__3047__auto__;
})()
;})(switch__3046__auto__,c__3069__auto__))
})();
var state__3071__auto__ = (function (){var statearr_3301 = f__3070__auto__.call(null);
(statearr_3301[(6)] = c__3069__auto__);

return statearr_3301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3071__auto__);
});})(c__3069__auto__))
);

return c__3069__auto__;
});

light.view3d.client.repeater_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__3069__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3069__auto__){
return (function (){
var f__3070__auto__ = (function (){var switch__3046__auto__ = ((function (c__3069__auto__){
return (function (state_3316){
var state_val_3317 = (state_3316[(1)]);
if((state_val_3317 === (1))){
var state_3316__$1 = state_3316;
var statearr_3318_3338 = state_3316__$1;
(statearr_3318_3338[(2)] = null);

(statearr_3318_3338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3317 === (2))){
var state_3316__$1 = state_3316;
var statearr_3319_3339 = state_3316__$1;
(statearr_3319_3339[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3317 === (3))){
var inst_3314 = (state_3316[(2)]);
var state_3316__$1 = state_3316;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3316__$1,inst_3314);
} else {
if((state_val_3317 === (4))){
var inst_3304 = func.call(null,param);
var inst_3305 = cljs.core.deref.call(null,time_out);
var inst_3306 = cljs.core.async.timeout.call(null,inst_3305);
var state_3316__$1 = (function (){var statearr_3321 = state_3316;
(statearr_3321[(7)] = inst_3304);

return statearr_3321;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3316__$1,(7),inst_3306);
} else {
if((state_val_3317 === (5))){
var state_3316__$1 = state_3316;
var statearr_3322_3340 = state_3316__$1;
(statearr_3322_3340[(2)] = null);

(statearr_3322_3340[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3317 === (6))){
var inst_3312 = (state_3316[(2)]);
var state_3316__$1 = state_3316;
var statearr_3323_3341 = state_3316__$1;
(statearr_3323_3341[(2)] = inst_3312);

(statearr_3323_3341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3317 === (7))){
var inst_3308 = (state_3316[(2)]);
var state_3316__$1 = (function (){var statearr_3324 = state_3316;
(statearr_3324[(8)] = inst_3308);

return statearr_3324;
})();
var statearr_3325_3342 = state_3316__$1;
(statearr_3325_3342[(2)] = null);

(statearr_3325_3342[(1)] = (2));


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
});})(c__3069__auto__))
;
return ((function (switch__3046__auto__,c__3069__auto__){
return (function() {
var light$view3d$client$state_machine__3047__auto__ = null;
var light$view3d$client$state_machine__3047__auto____0 = (function (){
var statearr_3326 = [null,null,null,null,null,null,null,null,null];
(statearr_3326[(0)] = light$view3d$client$state_machine__3047__auto__);

(statearr_3326[(1)] = (1));

return statearr_3326;
});
var light$view3d$client$state_machine__3047__auto____1 = (function (state_3316){
while(true){
var ret_value__3048__auto__ = (function (){try{while(true){
var result__3049__auto__ = switch__3046__auto__.call(null,state_3316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3049__auto__;
}
break;
}
}catch (e3327){if((e3327 instanceof Object)){
var ex__3050__auto__ = e3327;
var statearr_3328_3343 = state_3316;
(statearr_3328_3343[(5)] = ex__3050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3344 = state_3316;
state_3316 = G__3344;
continue;
} else {
return ret_value__3048__auto__;
}
break;
}
});
light$view3d$client$state_machine__3047__auto__ = function(state_3316){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__3047__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__3047__auto____1.call(this,state_3316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__3047__auto____0;
light$view3d$client$state_machine__3047__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__3047__auto____1;
return light$view3d$client$state_machine__3047__auto__;
})()
;})(switch__3046__auto__,c__3069__auto__))
})();
var state__3071__auto__ = (function (){var statearr_3329 = f__3070__auto__.call(null);
(statearr_3329[(6)] = c__3069__auto__);

return statearr_3329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3071__auto__);
});})(c__3069__auto__))
);

return c__3069__auto__;
});

light.view3d.client.repeater_BANG_.cljs$lang$maxFixedArity = 3;

light.view3d.client.read_transit = (function light$view3d$client$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
light.view3d.client.by_id = (function light$view3d$client$by_id(id){
return document.getElementById(id);
});
light.view3d.client.set_html_BANG_ = (function light$view3d$client$set_html_BANG_(id,msg){
return document.getElementById(id).innerHTML = msg;
});
light.view3d.client.num_val = (function light$view3d$client$num_val(x){
if(typeof x === 'number'){
return x;
} else {
return cljs.reader.read_string.call(null,x);
}
});
light.view3d.client.view = (function light$view3d$client$view(deg){
var deg__$1 = light.view3d.client.num_val.call(null,deg);
if(((((-180) <= deg__$1)) && ((deg__$1 <= (180))))){
cljs.core._vreset_BANG_.call(null,light.czm.core.CAMERA,cljs.core.assoc.call(null,cljs.core._deref.call(null,light.czm.core.CAMERA),new cljs.core.Keyword(null,"view","view",1247994814),deg__$1));

return light.view3d.client.set_html_BANG_.call(null,"view-fld",deg__$1);
} else {
return null;
}
});
light.view3d.client.pitch = (function light$view3d$client$pitch(deg){
var deg__$1 = light.view3d.client.num_val.call(null,deg);
if(((((-90) <= deg__$1)) && ((deg__$1 <= (90))))){
cljs.core._vreset_BANG_.call(null,light.czm.core.CAMERA,cljs.core.assoc.call(null,cljs.core._deref.call(null,light.czm.core.CAMERA),new cljs.core.Keyword(null,"pitch","pitch",1495126700),deg__$1));

return light.view3d.client.set_html_BANG_.call(null,"pitch-fld",deg__$1);
} else {
return null;
}
});
light.view3d.client.roll = (function light$view3d$client$roll(deg){
var deg__$1 = light.view3d.client.num_val.call(null,deg);
if(((((-180) <= deg__$1)) && ((deg__$1 <= (180))))){
cljs.core._vreset_BANG_.call(null,light.czm.core.CAMERA,cljs.core.assoc.call(null,cljs.core._deref.call(null,light.czm.core.CAMERA),new cljs.core.Keyword(null,"roll","roll",11266999),deg__$1));

return light.view3d.client.set_html_BANG_.call(null,"roll-fld",deg__$1);
} else {
return null;
}
});
light.view3d.client.response_request = (function light$view3d$client$response_request(){
var resp = cljs.core.deref.call(null,light.view3d.client.RESPONSE);
if((!(cljs.core.empty_QMARK_.call(null,resp)))){
ajax.core.GET.call(null,"/response",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response","response",-1068424192),(function (){try{return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),resp);
}catch (e3345){if((e3345 instanceof Error)){
var e = e3345;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e3345;

}
}})()], null),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),light.view3d.client.error_handler], null));

return cljs.core.vreset_BANG_.call(null,light.view3d.client.RESPONSE,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
});
light.view3d.client.handle_request = (function light$view3d$client$handle_request(request){
var temp__5733__auto___3352 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___3352)){
var vie_3353 = temp__5733__auto___3352;
light.view3d.client.view.call(null,vie_3353);
} else {
}

var temp__5733__auto___3354 = new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___3354)){
var pit_3355 = temp__5733__auto___3354;
light.view3d.client.pitch.call(null,pit_3355);
} else {
}

var temp__5733__auto___3356 = new cljs.core.Keyword(null,"roll","roll",11266999).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___3356)){
var rol_3357 = temp__5733__auto___3356;
light.view3d.client.roll.call(null,rol_3357);
} else {
}

var temp__5733__auto___3358 = new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___3358)){
var vec__3346_3359 = temp__5733__auto___3358;
var lat_3360 = cljs.core.nth.call(null,vec__3346_3359,(0),null);
var lon_3361 = cljs.core.nth.call(null,vec__3346_3359,(1),null);
var vec__3349_3362 = light.czm.core.sample_height.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [light.geo.calc.radians.call(null,lat_3360),light.geo.calc.radians.call(null,lon_3361)], null),(0));
var __3363 = cljs.core.nth.call(null,vec__3349_3362,(0),null);
var __3364__$1 = cljs.core.nth.call(null,vec__3349_3362,(1),null);
var sh_3365 = cljs.core.nth.call(null,vec__3349_3362,(2),null);
cljs.core._vreset_BANG_.call(null,light.view3d.client.RESPONSE,cljs.core.assoc.call(null,cljs.core._deref.call(null,light.view3d.client.RESPONSE),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(sh_3365 | (0))));
} else {
}

return light.view3d.client.response_request.call(null);
});
light.view3d.client.handle_vehicle = (function light$view3d$client$handle_vehicle(vehicle){
var vec__3366 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__3366,(0),null);
var lon = cljs.core.nth.call(null,vec__3366,(1),null);
var alt = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(vehicle);
var crs = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(vehicle);
var head = light.czm.core.norm_crs.call(null,(crs + new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,light.czm.core.CAMERA))));
cljs.core._vreset_BANG_.call(null,light.view3d.client.VEHICLE,cljs.core.merge.call(null,cljs.core._deref.call(null,light.view3d.client.VEHICLE),vehicle));

light.view3d.client.set_html_BANG_.call(null,"onboard-fld",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(vehicle));

light.view3d.client.set_html_BANG_.call(null,"name-fld",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(vehicle));

light.view3d.client.set_html_BANG_.call(null,"course-fld",new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(vehicle));

light.view3d.client.set_html_BANG_.call(null,"speed-fld",new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(vehicle));

light.view3d.client.set_html_BANG_.call(null,"altitude-fld",light.czm.core.ALT);

light.view3d.client.set_html_BANG_.call(null,"view-dir",light.geo.calc.rumb.call(null,head));

return light.czm.core.fly_to.call(null,lat,lon,alt,crs,1.2);
});
light.view3d.client.vehicle_hr = (function light$view3d$client$vehicle_hr(response){
var resp = light.view3d.client.read_transit.call(null,response);
var temp__5733__auto___3369 = new cljs.core.Keyword(null,"vehicle","vehicle",1670166968).cljs$core$IFn$_invoke$arity$1(resp);
if(cljs.core.truth_(temp__5733__auto___3369)){
var vehicle_3370 = temp__5733__auto___3369;
light.view3d.client.handle_vehicle.call(null,vehicle_3370);
} else {
}

var temp__5733__auto__ = new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(resp);
if(cljs.core.truth_(temp__5733__auto__)){
var request = temp__5733__auto__;
return light.view3d.client.handle_request.call(null,request);
} else {
return null;
}
});
light.view3d.client.receive_vehicle = (function light$view3d$client$receive_vehicle(){
return ajax.core.GET.call(null,"/vehicle",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.deref.call(null,light.czm.core.CAMERA),new cljs.core.Keyword(null,"handler","handler",-195596612),light.view3d.client.vehicle_hr,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),light.view3d.client.error_handler], null));
});
light.view3d.client.left_controls = (function light$view3d$client$left_controls(){
light.view3d.client.set_html_BANG_.call(null,"camera","<h4>Camera</h4>");

light.view3d.client.set_html_BANG_.call(null,"onboard","Onboard:");

light.view3d.client.set_html_BANG_.call(null,"onboard-fld","");

light.view3d.client.set_html_BANG_.call(null,"view","View:");

light.view3d.client.set_html_BANG_.call(null,"view-fld",(0));

light.view3d.client.set_html_BANG_.call(null,"view-sld","<input type='range' style='width:150px' id='roll-vals'\n               min='-180' value='0' max='180'\n               oninput='javascript:light.view3d.client.view(this.value)'>");

light.view3d.client.set_html_BANG_.call(null,"pitch","Pitch:");

light.view3d.client.set_html_BANG_.call(null,"pitch-fld",(0));

light.view3d.client.set_html_BANG_.call(null,"pitch-sld","<input type='range' style='width:150px' id='pitch-vals'\n               min='-90' value='0' max='90'\n               oninput='javascript:light.view3d.client.pitch(this.value)'>");

light.view3d.client.set_html_BANG_.call(null,"roll","Roll:");

light.view3d.client.set_html_BANG_.call(null,"roll-fld",(0));

return light.view3d.client.set_html_BANG_.call(null,"roll-sld","<input type='range' style='width:150px' id='roll-vals'\n               min='-180' value='0' max='180'\n               oninput='javascript:light.view3d.client.roll(this.value)'>");
});
light.view3d.client.right_controls = (function light$view3d$client$right_controls(){
light.view3d.client.set_html_BANG_.call(null,"vehicle","<h4>Vehicle</h4>");

light.view3d.client.set_html_BANG_.call(null,"name","Name:");

light.view3d.client.set_html_BANG_.call(null,"name-fld","");

light.view3d.client.set_html_BANG_.call(null,"course","Course:");

light.view3d.client.set_html_BANG_.call(null,"course-fld","");

light.view3d.client.set_html_BANG_.call(null,"speed","Speed:");

light.view3d.client.set_html_BANG_.call(null,"speed-fld","");

light.view3d.client.set_html_BANG_.call(null,"altitude","Altitude:");

return light.view3d.client.set_html_BANG_.call(null,"altitude-fld","");
});
light.view3d.client.show_controls = (function light$view3d$client$show_controls(){
light.view3d.client.right_controls.call(null);

return light.view3d.client.left_controls.call(null);
});
light.view3d.client.on_load = (function light$view3d$client$on_load(){
light.czm.core.init_3D_view.call(null,["http://0.0.0.0:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(light.view3d.client.PORT)].join(''));

light.view3d.client.repeater.call(null,light.view3d.client.receive_vehicle,(1000));

return light.view3d.client.show_controls.call(null);
});
light.view3d.client.run_repl = (function light$view3d$client$run_repl(){
var result = (function light$view3d$client$run_repl_$_result(res){
cljs.core.println.call(null,res);

return cljs.core._vreset_BANG_.call(null,light.view3d.client.CLI_REPL,cljs.core.assoc.call(null,cljs.core._deref.call(null,light.view3d.client.CLI_REPL),new cljs.core.Keyword(null,"value","value",305978217),res.call(null,new cljs.core.Keyword(null,"value","value",305978217))));
});
var evaluate = (function light$view3d$client$run_repl_$_evaluate(source){
return cljs.js.eval_str.call(null,cljs.core.deref.call(null,light.view3d.client.CLI_REPL).call(null,new cljs.core.Keyword(null,"state","state",-1988618099)),source,null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)], null),result);
});
var hand = (function light$view3d$client$run_repl_$_hand(response){
var temp__5735__auto__ = cljs.core.first.call(null,light.view3d.client.read_transit.call(null,response));
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
ajax.core.GET.call(null,"/cli-repl",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transit","transit",359458387),(function (){try{return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),cljs.core.deref.call(null,light.view3d.client.CLI_REPL).call(null,new cljs.core.Keyword(null,"value","value",305978217)));
}catch (e3371){if((e3371 instanceof Error)){
var e = e3371;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e3371;

}
}})()], null),new cljs.core.Keyword(null,"handler","handler",-195596612),hand,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),light.view3d.client.error_handler], null));

return setTimeout(light.view3d.client.run_repl,(1000));
});
light.view3d.client.tst = (function light$view3d$client$tst(){
light.czm.core.VIEWER.scene.globe.depthTestAgainstTerrain = true;

cljs.core.println.call(null,new cljs.core.Keyword(null,"D","D",-8015893),light.czm.core.VIEWER.scene.globe.depthTestAgainstTerrain);

var ppc = (new Cesium.PointPrimitiveCollection(({"heightReference": Cesium.HeightReference.CLAMP_TO_GROUND})));
var lla = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [61.6,7.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [61.61,7.51], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [61.6,7.52], null)], null);
var clr = Cesium.Color.YELLOW;
var size = (10);
var prims = light.czm.core.VIEWER.scene.primitives.add(ppc);
return fillPointPrimColl(prims,cljs.core.clj__GT_js.call(null,lla),clr,size);
});
cljs.core.enable_console_print_BANG_.call(null);
window.onload = light.view3d.client.on_load.call(null);
light.view3d.client.run_repl.call(null);
light.view3d.client.tst.call(null);

//# sourceMappingURL=client.js.map
