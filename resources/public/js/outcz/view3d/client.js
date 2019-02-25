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
var map__3163 = response;
var map__3163__$1 = (((((!((map__3163 == null))))?(((((map__3163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3163):map__3163);
var status = cljs.core.get.call(null,map__3163__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__3163__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
view3d.client.CLI_REPL = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.js.empty_state.call(null),new cljs.core.Keyword(null,"value","value",305978217),null], null));
view3d.client.RESPONSE = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
view3d.client.repeater = (function view3d$client$repeater(var_args){
var G__3166 = arguments.length;
switch (G__3166) {
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
var c__3033__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3033__auto__){
return (function (){
var f__3034__auto__ = (function (){var switch__3010__auto__ = ((function (c__3033__auto__){
return (function (state_3180){
var state_val_3181 = (state_3180[(1)]);
if((state_val_3181 === (1))){
var state_3180__$1 = state_3180;
var statearr_3182_3222 = state_3180__$1;
(statearr_3182_3222[(2)] = null);

(statearr_3182_3222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3181 === (2))){
var state_3180__$1 = state_3180;
var statearr_3183_3223 = state_3180__$1;
(statearr_3183_3223[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3181 === (3))){
var inst_3178 = (state_3180[(2)]);
var state_3180__$1 = state_3180;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3180__$1,inst_3178);
} else {
if((state_val_3181 === (4))){
var inst_3169 = func.call(null);
var inst_3170 = cljs.core.async.timeout.call(null,time_out);
var state_3180__$1 = (function (){var statearr_3185 = state_3180;
(statearr_3185[(7)] = inst_3169);

return statearr_3185;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3180__$1,(7),inst_3170);
} else {
if((state_val_3181 === (5))){
var state_3180__$1 = state_3180;
var statearr_3186_3224 = state_3180__$1;
(statearr_3186_3224[(2)] = null);

(statearr_3186_3224[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3181 === (6))){
var inst_3176 = (state_3180[(2)]);
var state_3180__$1 = state_3180;
var statearr_3187_3225 = state_3180__$1;
(statearr_3187_3225[(2)] = inst_3176);

(statearr_3187_3225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3181 === (7))){
var inst_3172 = (state_3180[(2)]);
var state_3180__$1 = (function (){var statearr_3188 = state_3180;
(statearr_3188[(8)] = inst_3172);

return statearr_3188;
})();
var statearr_3189_3226 = state_3180__$1;
(statearr_3189_3226[(2)] = null);

(statearr_3189_3226[(1)] = (2));


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
});})(c__3033__auto__))
;
return ((function (switch__3010__auto__,c__3033__auto__){
return (function() {
var view3d$client$state_machine__3011__auto__ = null;
var view3d$client$state_machine__3011__auto____0 = (function (){
var statearr_3190 = [null,null,null,null,null,null,null,null,null];
(statearr_3190[(0)] = view3d$client$state_machine__3011__auto__);

(statearr_3190[(1)] = (1));

return statearr_3190;
});
var view3d$client$state_machine__3011__auto____1 = (function (state_3180){
while(true){
var ret_value__3012__auto__ = (function (){try{while(true){
var result__3013__auto__ = switch__3010__auto__.call(null,state_3180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3013__auto__;
}
break;
}
}catch (e3191){if((e3191 instanceof Object)){
var ex__3014__auto__ = e3191;
var statearr_3192_3227 = state_3180;
(statearr_3192_3227[(5)] = ex__3014__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3228 = state_3180;
state_3180 = G__3228;
continue;
} else {
return ret_value__3012__auto__;
}
break;
}
});
view3d$client$state_machine__3011__auto__ = function(state_3180){
switch(arguments.length){
case 0:
return view3d$client$state_machine__3011__auto____0.call(this);
case 1:
return view3d$client$state_machine__3011__auto____1.call(this,state_3180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__3011__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__3011__auto____0;
view3d$client$state_machine__3011__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__3011__auto____1;
return view3d$client$state_machine__3011__auto__;
})()
;})(switch__3010__auto__,c__3033__auto__))
})();
var state__3035__auto__ = (function (){var statearr_3193 = f__3034__auto__.call(null);
(statearr_3193[(6)] = c__3033__auto__);

return statearr_3193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3035__auto__);
});})(c__3033__auto__))
);

return c__3033__auto__;
});

view3d.client.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__3033__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3033__auto__){
return (function (){
var f__3034__auto__ = (function (){var switch__3010__auto__ = ((function (c__3033__auto__){
return (function (state_3207){
var state_val_3208 = (state_3207[(1)]);
if((state_val_3208 === (1))){
var state_3207__$1 = state_3207;
var statearr_3209_3229 = state_3207__$1;
(statearr_3209_3229[(2)] = null);

(statearr_3209_3229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3208 === (2))){
var state_3207__$1 = state_3207;
var statearr_3210_3230 = state_3207__$1;
(statearr_3210_3230[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3208 === (3))){
var inst_3205 = (state_3207[(2)]);
var state_3207__$1 = state_3207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3207__$1,inst_3205);
} else {
if((state_val_3208 === (4))){
var inst_3196 = func.call(null,param);
var inst_3197 = cljs.core.async.timeout.call(null,time_out);
var state_3207__$1 = (function (){var statearr_3212 = state_3207;
(statearr_3212[(7)] = inst_3196);

return statearr_3212;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3207__$1,(7),inst_3197);
} else {
if((state_val_3208 === (5))){
var state_3207__$1 = state_3207;
var statearr_3213_3231 = state_3207__$1;
(statearr_3213_3231[(2)] = null);

(statearr_3213_3231[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3208 === (6))){
var inst_3203 = (state_3207[(2)]);
var state_3207__$1 = state_3207;
var statearr_3214_3232 = state_3207__$1;
(statearr_3214_3232[(2)] = inst_3203);

(statearr_3214_3232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3208 === (7))){
var inst_3199 = (state_3207[(2)]);
var state_3207__$1 = (function (){var statearr_3215 = state_3207;
(statearr_3215[(8)] = inst_3199);

return statearr_3215;
})();
var statearr_3216_3233 = state_3207__$1;
(statearr_3216_3233[(2)] = null);

(statearr_3216_3233[(1)] = (2));


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
});})(c__3033__auto__))
;
return ((function (switch__3010__auto__,c__3033__auto__){
return (function() {
var view3d$client$state_machine__3011__auto__ = null;
var view3d$client$state_machine__3011__auto____0 = (function (){
var statearr_3217 = [null,null,null,null,null,null,null,null,null];
(statearr_3217[(0)] = view3d$client$state_machine__3011__auto__);

(statearr_3217[(1)] = (1));

return statearr_3217;
});
var view3d$client$state_machine__3011__auto____1 = (function (state_3207){
while(true){
var ret_value__3012__auto__ = (function (){try{while(true){
var result__3013__auto__ = switch__3010__auto__.call(null,state_3207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3013__auto__;
}
break;
}
}catch (e3218){if((e3218 instanceof Object)){
var ex__3014__auto__ = e3218;
var statearr_3219_3234 = state_3207;
(statearr_3219_3234[(5)] = ex__3014__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3235 = state_3207;
state_3207 = G__3235;
continue;
} else {
return ret_value__3012__auto__;
}
break;
}
});
view3d$client$state_machine__3011__auto__ = function(state_3207){
switch(arguments.length){
case 0:
return view3d$client$state_machine__3011__auto____0.call(this);
case 1:
return view3d$client$state_machine__3011__auto____1.call(this,state_3207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__3011__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__3011__auto____0;
view3d$client$state_machine__3011__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__3011__auto____1;
return view3d$client$state_machine__3011__auto__;
})()
;})(switch__3010__auto__,c__3033__auto__))
})();
var state__3035__auto__ = (function (){var statearr_3220 = f__3034__auto__.call(null);
(statearr_3220[(6)] = c__3033__auto__);

return statearr_3220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3035__auto__);
});})(c__3033__auto__))
);

return c__3033__auto__;
});

view3d.client.repeater.cljs$lang$maxFixedArity = 3;

view3d.client.repeater_BANG_ = (function view3d$client$repeater_BANG_(var_args){
var G__3237 = arguments.length;
switch (G__3237) {
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
var c__3033__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3033__auto__){
return (function (){
var f__3034__auto__ = (function (){var switch__3010__auto__ = ((function (c__3033__auto__){
return (function (state_3252){
var state_val_3253 = (state_3252[(1)]);
if((state_val_3253 === (1))){
var state_3252__$1 = state_3252;
var statearr_3254_3295 = state_3252__$1;
(statearr_3254_3295[(2)] = null);

(statearr_3254_3295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3253 === (2))){
var state_3252__$1 = state_3252;
var statearr_3255_3296 = state_3252__$1;
(statearr_3255_3296[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3253 === (3))){
var inst_3250 = (state_3252[(2)]);
var state_3252__$1 = state_3252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3252__$1,inst_3250);
} else {
if((state_val_3253 === (4))){
var inst_3240 = func.call(null);
var inst_3241 = cljs.core.deref.call(null,time_out);
var inst_3242 = cljs.core.async.timeout.call(null,inst_3241);
var state_3252__$1 = (function (){var statearr_3257 = state_3252;
(statearr_3257[(7)] = inst_3240);

return statearr_3257;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3252__$1,(7),inst_3242);
} else {
if((state_val_3253 === (5))){
var state_3252__$1 = state_3252;
var statearr_3258_3297 = state_3252__$1;
(statearr_3258_3297[(2)] = null);

(statearr_3258_3297[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3253 === (6))){
var inst_3248 = (state_3252[(2)]);
var state_3252__$1 = state_3252;
var statearr_3259_3298 = state_3252__$1;
(statearr_3259_3298[(2)] = inst_3248);

(statearr_3259_3298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3253 === (7))){
var inst_3244 = (state_3252[(2)]);
var state_3252__$1 = (function (){var statearr_3260 = state_3252;
(statearr_3260[(8)] = inst_3244);

return statearr_3260;
})();
var statearr_3261_3299 = state_3252__$1;
(statearr_3261_3299[(2)] = null);

(statearr_3261_3299[(1)] = (2));


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
});})(c__3033__auto__))
;
return ((function (switch__3010__auto__,c__3033__auto__){
return (function() {
var view3d$client$state_machine__3011__auto__ = null;
var view3d$client$state_machine__3011__auto____0 = (function (){
var statearr_3262 = [null,null,null,null,null,null,null,null,null];
(statearr_3262[(0)] = view3d$client$state_machine__3011__auto__);

(statearr_3262[(1)] = (1));

return statearr_3262;
});
var view3d$client$state_machine__3011__auto____1 = (function (state_3252){
while(true){
var ret_value__3012__auto__ = (function (){try{while(true){
var result__3013__auto__ = switch__3010__auto__.call(null,state_3252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3013__auto__;
}
break;
}
}catch (e3263){if((e3263 instanceof Object)){
var ex__3014__auto__ = e3263;
var statearr_3264_3300 = state_3252;
(statearr_3264_3300[(5)] = ex__3014__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3263;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3301 = state_3252;
state_3252 = G__3301;
continue;
} else {
return ret_value__3012__auto__;
}
break;
}
});
view3d$client$state_machine__3011__auto__ = function(state_3252){
switch(arguments.length){
case 0:
return view3d$client$state_machine__3011__auto____0.call(this);
case 1:
return view3d$client$state_machine__3011__auto____1.call(this,state_3252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__3011__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__3011__auto____0;
view3d$client$state_machine__3011__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__3011__auto____1;
return view3d$client$state_machine__3011__auto__;
})()
;})(switch__3010__auto__,c__3033__auto__))
})();
var state__3035__auto__ = (function (){var statearr_3265 = f__3034__auto__.call(null);
(statearr_3265[(6)] = c__3033__auto__);

return statearr_3265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3035__auto__);
});})(c__3033__auto__))
);

return c__3033__auto__;
});

view3d.client.repeater_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__3033__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3033__auto__){
return (function (){
var f__3034__auto__ = (function (){var switch__3010__auto__ = ((function (c__3033__auto__){
return (function (state_3280){
var state_val_3281 = (state_3280[(1)]);
if((state_val_3281 === (1))){
var state_3280__$1 = state_3280;
var statearr_3282_3302 = state_3280__$1;
(statearr_3282_3302[(2)] = null);

(statearr_3282_3302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3281 === (2))){
var state_3280__$1 = state_3280;
var statearr_3283_3303 = state_3280__$1;
(statearr_3283_3303[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3281 === (3))){
var inst_3278 = (state_3280[(2)]);
var state_3280__$1 = state_3280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3280__$1,inst_3278);
} else {
if((state_val_3281 === (4))){
var inst_3268 = func.call(null,param);
var inst_3269 = cljs.core.deref.call(null,time_out);
var inst_3270 = cljs.core.async.timeout.call(null,inst_3269);
var state_3280__$1 = (function (){var statearr_3285 = state_3280;
(statearr_3285[(7)] = inst_3268);

return statearr_3285;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3280__$1,(7),inst_3270);
} else {
if((state_val_3281 === (5))){
var state_3280__$1 = state_3280;
var statearr_3286_3304 = state_3280__$1;
(statearr_3286_3304[(2)] = null);

(statearr_3286_3304[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3281 === (6))){
var inst_3276 = (state_3280[(2)]);
var state_3280__$1 = state_3280;
var statearr_3287_3305 = state_3280__$1;
(statearr_3287_3305[(2)] = inst_3276);

(statearr_3287_3305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3281 === (7))){
var inst_3272 = (state_3280[(2)]);
var state_3280__$1 = (function (){var statearr_3288 = state_3280;
(statearr_3288[(8)] = inst_3272);

return statearr_3288;
})();
var statearr_3289_3306 = state_3280__$1;
(statearr_3289_3306[(2)] = null);

(statearr_3289_3306[(1)] = (2));


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
});})(c__3033__auto__))
;
return ((function (switch__3010__auto__,c__3033__auto__){
return (function() {
var view3d$client$state_machine__3011__auto__ = null;
var view3d$client$state_machine__3011__auto____0 = (function (){
var statearr_3290 = [null,null,null,null,null,null,null,null,null];
(statearr_3290[(0)] = view3d$client$state_machine__3011__auto__);

(statearr_3290[(1)] = (1));

return statearr_3290;
});
var view3d$client$state_machine__3011__auto____1 = (function (state_3280){
while(true){
var ret_value__3012__auto__ = (function (){try{while(true){
var result__3013__auto__ = switch__3010__auto__.call(null,state_3280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3013__auto__;
}
break;
}
}catch (e3291){if((e3291 instanceof Object)){
var ex__3014__auto__ = e3291;
var statearr_3292_3307 = state_3280;
(statearr_3292_3307[(5)] = ex__3014__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3308 = state_3280;
state_3280 = G__3308;
continue;
} else {
return ret_value__3012__auto__;
}
break;
}
});
view3d$client$state_machine__3011__auto__ = function(state_3280){
switch(arguments.length){
case 0:
return view3d$client$state_machine__3011__auto____0.call(this);
case 1:
return view3d$client$state_machine__3011__auto____1.call(this,state_3280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__3011__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__3011__auto____0;
view3d$client$state_machine__3011__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__3011__auto____1;
return view3d$client$state_machine__3011__auto__;
})()
;})(switch__3010__auto__,c__3033__auto__))
})();
var state__3035__auto__ = (function (){var statearr_3293 = f__3034__auto__.call(null);
(statearr_3293[(6)] = c__3033__auto__);

return statearr_3293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3035__auto__);
});})(c__3033__auto__))
);

return c__3033__auto__;
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
}catch (e3309){if((e3309 instanceof Error)){
var e = e3309;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e3309;

}
}})()], null),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));

return cljs.core.vreset_BANG_.call(null,view3d.client.RESPONSE,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
});
view3d.client.handle_request = (function view3d$client$handle_request(request){
var temp__5718__auto___3316 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5718__auto___3316)){
var vie_3317 = temp__5718__auto___3316;
view3d.client.view.call(null,vie_3317);
} else {
}

var temp__5718__auto___3318 = new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5718__auto___3318)){
var pit_3319 = temp__5718__auto___3318;
view3d.client.pitch.call(null,pit_3319);
} else {
}

var temp__5718__auto___3320 = new cljs.core.Keyword(null,"roll","roll",11266999).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5718__auto___3320)){
var rol_3321 = temp__5718__auto___3320;
view3d.client.roll.call(null,rol_3321);
} else {
}

var temp__5718__auto___3322 = new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5718__auto___3322)){
var vec__3310_3323 = temp__5718__auto___3322;
var lat_3324 = cljs.core.nth.call(null,vec__3310_3323,(0),null);
var lon_3325 = cljs.core.nth.call(null,vec__3310_3323,(1),null);
var vec__3313_3326 = czm.core.sample_height.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [geo.calc.radians.call(null,lat_3324),geo.calc.radians.call(null,lon_3325)], null),(0));
var __3327 = cljs.core.nth.call(null,vec__3313_3326,(0),null);
var __3328__$1 = cljs.core.nth.call(null,vec__3313_3326,(1),null);
var sh_3329 = cljs.core.nth.call(null,vec__3313_3326,(2),null);
cljs.core._vreset_BANG_.call(null,view3d.client.RESPONSE,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.RESPONSE),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(sh_3329 | (0))));
} else {
}

return view3d.client.response_request.call(null);
});
view3d.client.handle_vehicle = (function view3d$client$handle_vehicle(vehicle){
var vec__3330 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__3330,(0),null);
var lon = cljs.core.nth.call(null,vec__3330,(1),null);
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
var temp__5718__auto___3333 = new cljs.core.Keyword(null,"vehicle","vehicle",1670166968).cljs$core$IFn$_invoke$arity$1(resp);
if(cljs.core.truth_(temp__5718__auto___3333)){
var vehicle_3334 = temp__5718__auto___3333;
view3d.client.handle_vehicle.call(null,vehicle_3334);
} else {
}

var temp__5718__auto__ = new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(resp);
if(cljs.core.truth_(temp__5718__auto__)){
var request = temp__5718__auto__;
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
var temp__5720__auto__ = cljs.core.first.call(null,view3d.client.read_transit.call(null,response));
if(cljs.core.truth_(temp__5720__auto__)){
var req = temp__5720__auto__;
cljs.core.println.call(null,req);

var temp__5718__auto__ = new cljs.core.Keyword(null,"sexp","sexp",-1528364050).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5718__auto__)){
var sexp = temp__5718__auto__;
return evaluate.call(null,sexp);
} else {
return null;
}
} else {
return null;
}
});
ajax.core.GET.call(null,"/cli-repl",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transit","transit",359458387),(function (){try{return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),cljs.core.deref.call(null,view3d.client.CLI_REPL).call(null,new cljs.core.Keyword(null,"value","value",305978217)));
}catch (e3335){if((e3335 instanceof Error)){
var e = e3335;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e3335;

}
}})()], null),new cljs.core.Keyword(null,"handler","handler",-195596612),hand,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));

return setTimeout(view3d.client.run_repl,(1000));
});
cljs.core.enable_console_print_BANG_.call(null);
window.onload = view3d.client.on_load.call(null);
view3d.client.run_repl.call(null);

//# sourceMappingURL=client.js.map
