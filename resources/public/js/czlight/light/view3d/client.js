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
var map__3021 = response;
var map__3021__$1 = (((((!((map__3021 == null))))?(((((map__3021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3021):map__3021);
var status = cljs.core.get.call(null,map__3021__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__3021__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
light.view3d.client.CLI_REPL = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.js.empty_state.call(null),new cljs.core.Keyword(null,"value","value",305978217),null], null));
light.view3d.client.RESPONSE = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
light.view3d.client.PORT = (8448);
light.view3d.client.repeater = (function light$view3d$client$repeater(var_args){
var G__3024 = arguments.length;
switch (G__3024) {
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
var c__2673__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2673__auto__){
return (function (){
var f__2674__auto__ = (function (){var switch__2650__auto__ = ((function (c__2673__auto__){
return (function (state_3038){
var state_val_3039 = (state_3038[(1)]);
if((state_val_3039 === (1))){
var state_3038__$1 = state_3038;
var statearr_3040_3080 = state_3038__$1;
(statearr_3040_3080[(2)] = null);

(statearr_3040_3080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3039 === (2))){
var state_3038__$1 = state_3038;
var statearr_3041_3081 = state_3038__$1;
(statearr_3041_3081[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3039 === (3))){
var inst_3036 = (state_3038[(2)]);
var state_3038__$1 = state_3038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3038__$1,inst_3036);
} else {
if((state_val_3039 === (4))){
var inst_3027 = func.call(null);
var inst_3028 = cljs.core.async.timeout.call(null,time_out);
var state_3038__$1 = (function (){var statearr_3043 = state_3038;
(statearr_3043[(7)] = inst_3027);

return statearr_3043;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3038__$1,(7),inst_3028);
} else {
if((state_val_3039 === (5))){
var state_3038__$1 = state_3038;
var statearr_3044_3082 = state_3038__$1;
(statearr_3044_3082[(2)] = null);

(statearr_3044_3082[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3039 === (6))){
var inst_3034 = (state_3038[(2)]);
var state_3038__$1 = state_3038;
var statearr_3045_3083 = state_3038__$1;
(statearr_3045_3083[(2)] = inst_3034);

(statearr_3045_3083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3039 === (7))){
var inst_3030 = (state_3038[(2)]);
var state_3038__$1 = (function (){var statearr_3046 = state_3038;
(statearr_3046[(8)] = inst_3030);

return statearr_3046;
})();
var statearr_3047_3084 = state_3038__$1;
(statearr_3047_3084[(2)] = null);

(statearr_3047_3084[(1)] = (2));


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
});})(c__2673__auto__))
;
return ((function (switch__2650__auto__,c__2673__auto__){
return (function() {
var light$view3d$client$state_machine__2651__auto__ = null;
var light$view3d$client$state_machine__2651__auto____0 = (function (){
var statearr_3048 = [null,null,null,null,null,null,null,null,null];
(statearr_3048[(0)] = light$view3d$client$state_machine__2651__auto__);

(statearr_3048[(1)] = (1));

return statearr_3048;
});
var light$view3d$client$state_machine__2651__auto____1 = (function (state_3038){
while(true){
var ret_value__2652__auto__ = (function (){try{while(true){
var result__2653__auto__ = switch__2650__auto__.call(null,state_3038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2653__auto__;
}
break;
}
}catch (e3049){if((e3049 instanceof Object)){
var ex__2654__auto__ = e3049;
var statearr_3050_3085 = state_3038;
(statearr_3050_3085[(5)] = ex__2654__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3086 = state_3038;
state_3038 = G__3086;
continue;
} else {
return ret_value__2652__auto__;
}
break;
}
});
light$view3d$client$state_machine__2651__auto__ = function(state_3038){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__2651__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__2651__auto____1.call(this,state_3038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__2651__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__2651__auto____0;
light$view3d$client$state_machine__2651__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__2651__auto____1;
return light$view3d$client$state_machine__2651__auto__;
})()
;})(switch__2650__auto__,c__2673__auto__))
})();
var state__2675__auto__ = (function (){var statearr_3051 = f__2674__auto__.call(null);
(statearr_3051[(6)] = c__2673__auto__);

return statearr_3051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2675__auto__);
});})(c__2673__auto__))
);

return c__2673__auto__;
});

light.view3d.client.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__2673__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2673__auto__){
return (function (){
var f__2674__auto__ = (function (){var switch__2650__auto__ = ((function (c__2673__auto__){
return (function (state_3065){
var state_val_3066 = (state_3065[(1)]);
if((state_val_3066 === (1))){
var state_3065__$1 = state_3065;
var statearr_3067_3087 = state_3065__$1;
(statearr_3067_3087[(2)] = null);

(statearr_3067_3087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3066 === (2))){
var state_3065__$1 = state_3065;
var statearr_3068_3088 = state_3065__$1;
(statearr_3068_3088[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3066 === (3))){
var inst_3063 = (state_3065[(2)]);
var state_3065__$1 = state_3065;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3065__$1,inst_3063);
} else {
if((state_val_3066 === (4))){
var inst_3054 = func.call(null,param);
var inst_3055 = cljs.core.async.timeout.call(null,time_out);
var state_3065__$1 = (function (){var statearr_3070 = state_3065;
(statearr_3070[(7)] = inst_3054);

return statearr_3070;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3065__$1,(7),inst_3055);
} else {
if((state_val_3066 === (5))){
var state_3065__$1 = state_3065;
var statearr_3071_3089 = state_3065__$1;
(statearr_3071_3089[(2)] = null);

(statearr_3071_3089[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3066 === (6))){
var inst_3061 = (state_3065[(2)]);
var state_3065__$1 = state_3065;
var statearr_3072_3090 = state_3065__$1;
(statearr_3072_3090[(2)] = inst_3061);

(statearr_3072_3090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3066 === (7))){
var inst_3057 = (state_3065[(2)]);
var state_3065__$1 = (function (){var statearr_3073 = state_3065;
(statearr_3073[(8)] = inst_3057);

return statearr_3073;
})();
var statearr_3074_3091 = state_3065__$1;
(statearr_3074_3091[(2)] = null);

(statearr_3074_3091[(1)] = (2));


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
});})(c__2673__auto__))
;
return ((function (switch__2650__auto__,c__2673__auto__){
return (function() {
var light$view3d$client$state_machine__2651__auto__ = null;
var light$view3d$client$state_machine__2651__auto____0 = (function (){
var statearr_3075 = [null,null,null,null,null,null,null,null,null];
(statearr_3075[(0)] = light$view3d$client$state_machine__2651__auto__);

(statearr_3075[(1)] = (1));

return statearr_3075;
});
var light$view3d$client$state_machine__2651__auto____1 = (function (state_3065){
while(true){
var ret_value__2652__auto__ = (function (){try{while(true){
var result__2653__auto__ = switch__2650__auto__.call(null,state_3065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2653__auto__;
}
break;
}
}catch (e3076){if((e3076 instanceof Object)){
var ex__2654__auto__ = e3076;
var statearr_3077_3092 = state_3065;
(statearr_3077_3092[(5)] = ex__2654__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3093 = state_3065;
state_3065 = G__3093;
continue;
} else {
return ret_value__2652__auto__;
}
break;
}
});
light$view3d$client$state_machine__2651__auto__ = function(state_3065){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__2651__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__2651__auto____1.call(this,state_3065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__2651__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__2651__auto____0;
light$view3d$client$state_machine__2651__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__2651__auto____1;
return light$view3d$client$state_machine__2651__auto__;
})()
;})(switch__2650__auto__,c__2673__auto__))
})();
var state__2675__auto__ = (function (){var statearr_3078 = f__2674__auto__.call(null);
(statearr_3078[(6)] = c__2673__auto__);

return statearr_3078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2675__auto__);
});})(c__2673__auto__))
);

return c__2673__auto__;
});

light.view3d.client.repeater.cljs$lang$maxFixedArity = 3;

light.view3d.client.repeater_BANG_ = (function light$view3d$client$repeater_BANG_(var_args){
var G__3095 = arguments.length;
switch (G__3095) {
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
var c__2673__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2673__auto__){
return (function (){
var f__2674__auto__ = (function (){var switch__2650__auto__ = ((function (c__2673__auto__){
return (function (state_3110){
var state_val_3111 = (state_3110[(1)]);
if((state_val_3111 === (1))){
var state_3110__$1 = state_3110;
var statearr_3112_3153 = state_3110__$1;
(statearr_3112_3153[(2)] = null);

(statearr_3112_3153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3111 === (2))){
var state_3110__$1 = state_3110;
var statearr_3113_3154 = state_3110__$1;
(statearr_3113_3154[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3111 === (3))){
var inst_3108 = (state_3110[(2)]);
var state_3110__$1 = state_3110;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3110__$1,inst_3108);
} else {
if((state_val_3111 === (4))){
var inst_3098 = func.call(null);
var inst_3099 = cljs.core.deref.call(null,time_out);
var inst_3100 = cljs.core.async.timeout.call(null,inst_3099);
var state_3110__$1 = (function (){var statearr_3115 = state_3110;
(statearr_3115[(7)] = inst_3098);

return statearr_3115;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3110__$1,(7),inst_3100);
} else {
if((state_val_3111 === (5))){
var state_3110__$1 = state_3110;
var statearr_3116_3155 = state_3110__$1;
(statearr_3116_3155[(2)] = null);

(statearr_3116_3155[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3111 === (6))){
var inst_3106 = (state_3110[(2)]);
var state_3110__$1 = state_3110;
var statearr_3117_3156 = state_3110__$1;
(statearr_3117_3156[(2)] = inst_3106);

(statearr_3117_3156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3111 === (7))){
var inst_3102 = (state_3110[(2)]);
var state_3110__$1 = (function (){var statearr_3118 = state_3110;
(statearr_3118[(8)] = inst_3102);

return statearr_3118;
})();
var statearr_3119_3157 = state_3110__$1;
(statearr_3119_3157[(2)] = null);

(statearr_3119_3157[(1)] = (2));


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
});})(c__2673__auto__))
;
return ((function (switch__2650__auto__,c__2673__auto__){
return (function() {
var light$view3d$client$state_machine__2651__auto__ = null;
var light$view3d$client$state_machine__2651__auto____0 = (function (){
var statearr_3120 = [null,null,null,null,null,null,null,null,null];
(statearr_3120[(0)] = light$view3d$client$state_machine__2651__auto__);

(statearr_3120[(1)] = (1));

return statearr_3120;
});
var light$view3d$client$state_machine__2651__auto____1 = (function (state_3110){
while(true){
var ret_value__2652__auto__ = (function (){try{while(true){
var result__2653__auto__ = switch__2650__auto__.call(null,state_3110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2653__auto__;
}
break;
}
}catch (e3121){if((e3121 instanceof Object)){
var ex__2654__auto__ = e3121;
var statearr_3122_3158 = state_3110;
(statearr_3122_3158[(5)] = ex__2654__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3159 = state_3110;
state_3110 = G__3159;
continue;
} else {
return ret_value__2652__auto__;
}
break;
}
});
light$view3d$client$state_machine__2651__auto__ = function(state_3110){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__2651__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__2651__auto____1.call(this,state_3110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__2651__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__2651__auto____0;
light$view3d$client$state_machine__2651__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__2651__auto____1;
return light$view3d$client$state_machine__2651__auto__;
})()
;})(switch__2650__auto__,c__2673__auto__))
})();
var state__2675__auto__ = (function (){var statearr_3123 = f__2674__auto__.call(null);
(statearr_3123[(6)] = c__2673__auto__);

return statearr_3123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2675__auto__);
});})(c__2673__auto__))
);

return c__2673__auto__;
});

light.view3d.client.repeater_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__2673__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2673__auto__){
return (function (){
var f__2674__auto__ = (function (){var switch__2650__auto__ = ((function (c__2673__auto__){
return (function (state_3138){
var state_val_3139 = (state_3138[(1)]);
if((state_val_3139 === (1))){
var state_3138__$1 = state_3138;
var statearr_3140_3160 = state_3138__$1;
(statearr_3140_3160[(2)] = null);

(statearr_3140_3160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3139 === (2))){
var state_3138__$1 = state_3138;
var statearr_3141_3161 = state_3138__$1;
(statearr_3141_3161[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3139 === (3))){
var inst_3136 = (state_3138[(2)]);
var state_3138__$1 = state_3138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3138__$1,inst_3136);
} else {
if((state_val_3139 === (4))){
var inst_3126 = func.call(null,param);
var inst_3127 = cljs.core.deref.call(null,time_out);
var inst_3128 = cljs.core.async.timeout.call(null,inst_3127);
var state_3138__$1 = (function (){var statearr_3143 = state_3138;
(statearr_3143[(7)] = inst_3126);

return statearr_3143;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3138__$1,(7),inst_3128);
} else {
if((state_val_3139 === (5))){
var state_3138__$1 = state_3138;
var statearr_3144_3162 = state_3138__$1;
(statearr_3144_3162[(2)] = null);

(statearr_3144_3162[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3139 === (6))){
var inst_3134 = (state_3138[(2)]);
var state_3138__$1 = state_3138;
var statearr_3145_3163 = state_3138__$1;
(statearr_3145_3163[(2)] = inst_3134);

(statearr_3145_3163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3139 === (7))){
var inst_3130 = (state_3138[(2)]);
var state_3138__$1 = (function (){var statearr_3146 = state_3138;
(statearr_3146[(8)] = inst_3130);

return statearr_3146;
})();
var statearr_3147_3164 = state_3138__$1;
(statearr_3147_3164[(2)] = null);

(statearr_3147_3164[(1)] = (2));


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
});})(c__2673__auto__))
;
return ((function (switch__2650__auto__,c__2673__auto__){
return (function() {
var light$view3d$client$state_machine__2651__auto__ = null;
var light$view3d$client$state_machine__2651__auto____0 = (function (){
var statearr_3148 = [null,null,null,null,null,null,null,null,null];
(statearr_3148[(0)] = light$view3d$client$state_machine__2651__auto__);

(statearr_3148[(1)] = (1));

return statearr_3148;
});
var light$view3d$client$state_machine__2651__auto____1 = (function (state_3138){
while(true){
var ret_value__2652__auto__ = (function (){try{while(true){
var result__2653__auto__ = switch__2650__auto__.call(null,state_3138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2653__auto__;
}
break;
}
}catch (e3149){if((e3149 instanceof Object)){
var ex__2654__auto__ = e3149;
var statearr_3150_3165 = state_3138;
(statearr_3150_3165[(5)] = ex__2654__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3166 = state_3138;
state_3138 = G__3166;
continue;
} else {
return ret_value__2652__auto__;
}
break;
}
});
light$view3d$client$state_machine__2651__auto__ = function(state_3138){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__2651__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__2651__auto____1.call(this,state_3138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__2651__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__2651__auto____0;
light$view3d$client$state_machine__2651__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__2651__auto____1;
return light$view3d$client$state_machine__2651__auto__;
})()
;})(switch__2650__auto__,c__2673__auto__))
})();
var state__2675__auto__ = (function (){var statearr_3151 = f__2674__auto__.call(null);
(statearr_3151[(6)] = c__2673__auto__);

return statearr_3151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2675__auto__);
});})(c__2673__auto__))
);

return c__2673__auto__;
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
light.view3d.client.zoom = (function light$view3d$client$zoom(mode){
var pred__3167 = cljs.core._EQ_;
var expr__3168 = mode;
if(cljs.core.truth_(pred__3167.call(null,(1),expr__3168))){
return light.czm.core.zoom_in.call(null);
} else {
if(cljs.core.truth_(pred__3167.call(null,(-1),expr__3168))){
return light.czm.core.zoom_out.call(null);
} else {
if(cljs.core.truth_(pred__3167.call(null,(0),expr__3168))){
return light.czm.core.zoom_no.call(null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__3168)].join('')));
}
}
}
});
light.view3d.client.zoom_amount = (function light$view3d$client$zoom_amount(amount){
return light.czm.core.zoom_amount.call(null,amount);
});
light.view3d.client.response_request = (function light$view3d$client$response_request(){
var resp = cljs.core.deref.call(null,light.view3d.client.RESPONSE);
if((!(cljs.core.empty_QMARK_.call(null,resp)))){
ajax.core.GET.call(null,"/response",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response","response",-1068424192),(function (){try{return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),resp);
}catch (e3170){if((e3170 instanceof Error)){
var e = e3170;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e3170;

}
}})()], null),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),light.view3d.client.error_handler], null));

return cljs.core.vreset_BANG_.call(null,light.view3d.client.RESPONSE,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
});
light.view3d.client.handle_request = (function light$view3d$client$handle_request(request){
var temp__5733__auto___3177 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___3177)){
var vie_3178 = temp__5733__auto___3177;
light.view3d.client.view.call(null,vie_3178);
} else {
}

var temp__5733__auto___3179 = new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___3179)){
var pit_3180 = temp__5733__auto___3179;
light.view3d.client.pitch.call(null,pit_3180);
} else {
}

var temp__5733__auto___3181 = new cljs.core.Keyword(null,"roll","roll",11266999).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___3181)){
var rol_3182 = temp__5733__auto___3181;
light.view3d.client.roll.call(null,rol_3182);
} else {
}

var temp__5733__auto___3183 = new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___3183)){
var vec__3171_3184 = temp__5733__auto___3183;
var lat_3185 = cljs.core.nth.call(null,vec__3171_3184,(0),null);
var lon_3186 = cljs.core.nth.call(null,vec__3171_3184,(1),null);
var vec__3174_3187 = light.czm.core.sample_height.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [light.geo.calc.radians.call(null,lat_3185),light.geo.calc.radians.call(null,lon_3186)], null),(0));
var __3188 = cljs.core.nth.call(null,vec__3174_3187,(0),null);
var __3189__$1 = cljs.core.nth.call(null,vec__3174_3187,(1),null);
var sh_3190 = cljs.core.nth.call(null,vec__3174_3187,(2),null);
cljs.core._vreset_BANG_.call(null,light.view3d.client.RESPONSE,cljs.core.assoc.call(null,cljs.core._deref.call(null,light.view3d.client.RESPONSE),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(sh_3190 | (0))));
} else {
}

return light.view3d.client.response_request.call(null);
});
light.view3d.client.handle_vehicle = (function light$view3d$client$handle_vehicle(vehicle){
var vec__3191 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__3191,(0),null);
var lon = cljs.core.nth.call(null,vec__3191,(1),null);
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
var temp__5733__auto___3194 = new cljs.core.Keyword(null,"vehicle","vehicle",1670166968).cljs$core$IFn$_invoke$arity$1(resp);
if(cljs.core.truth_(temp__5733__auto___3194)){
var vehicle_3195 = temp__5733__auto___3194;
light.view3d.client.handle_vehicle.call(null,vehicle_3195);
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
light.view3d.client.elev = (function light$view3d$client$elev(vev){
return cljs.core._vreset_BANG_.call(null,light.view3d.client.VEHICLE,cljs.core.assoc.call(null,cljs.core._deref.call(null,light.view3d.client.VEHICLE),new cljs.core.Keyword(null,"view-elevation","view-elevation",-681076231),light.view3d.client.num_val.call(null,vev)));
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

light.view3d.client.set_html_BANG_.call(null,"roll-sld","<input type='range' style='width:150px' id='roll-vals'\n               min='-180' value='0' max='180'\n               oninput='javascript:light.view3d.client.roll(this.value)'>");

light.view3d.client.set_html_BANG_.call(null,"elev","Elevation:");

return light.view3d.client.set_html_BANG_.call(null,"elev-fld","<input value='4' style='width:144px' id='input-elev'\n                     onchange='javascript:light.view3d.client.elev(this.value)'>");
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
light.view3d.client.middle_controls = (function light$view3d$client$middle_controls(){
light.view3d.client.set_html_BANG_.call(null,"zoom-up","<img src='img/binB.png' width='24' height='24' id='zup' \n    onclick='javascript:light.view3d.client.zoom(1);'>");

light.view3d.client.set_html_BANG_.call(null,"zoom-dn","<img src='img/binS.png' width='24' height='24' id='zdn'\n    onclick='javascript:light.view3d.client.zoom(-1);'>");

light.view3d.client.set_html_BANG_.call(null,"zoom-no","<img src='img/binN.png' width='24' height='24' id='zno'\n    onclick='javascript:light.view3d.client.zoom(0);'>");

return light.view3d.client.set_html_BANG_.call(null,"zoom-amount","<input type='range' style='width:150px' id='zfa'\n               min='10' value='200' max='10000'\n               oninput='javascript:light.view3d.client.zoom_amount(this.value)'>");
});
light.view3d.client.show_controls = (function light$view3d$client$show_controls(){
light.view3d.client.right_controls.call(null);

light.view3d.client.left_controls.call(null);

return light.view3d.client.middle_controls.call(null);
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
}catch (e3196){if((e3196 instanceof Error)){
var e = e3196;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e3196;

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
