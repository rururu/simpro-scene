// Compiled by ClojureScript 1.11.60 {:optimizations :none}
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
var map__43179 = response;
var map__43179__$1 = cljs.core.__destructure_map.call(null,map__43179);
var status = cljs.core.get.call(null,map__43179__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__43179__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
view3d.client.CLI_REPL = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.js.empty_state.call(null),new cljs.core.Keyword(null,"value","value",305978217),null], null));
view3d.client.RESPONSE = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
view3d.client.PORT = (8421);
view3d.client.repeater = (function view3d$client$repeater(var_args){
var G__43181 = arguments.length;
switch (G__43181) {
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

(view3d.client.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__40684__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__40685__auto__ = (function (){var switch__40587__auto__ = (function (state_43195){
var state_val_43196 = (state_43195[(1)]);
if((state_val_43196 === (1))){
var state_43195__$1 = state_43195;
var statearr_43197_43237 = state_43195__$1;
(statearr_43197_43237[(2)] = null);

(statearr_43197_43237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43196 === (2))){
var state_43195__$1 = state_43195;
var statearr_43198_43238 = state_43195__$1;
(statearr_43198_43238[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43196 === (3))){
var inst_43193 = (state_43195[(2)]);
var state_43195__$1 = state_43195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43195__$1,inst_43193);
} else {
if((state_val_43196 === (4))){
var inst_43184 = func.call(null);
var inst_43185 = cljs.core.async.timeout.call(null,time_out);
var state_43195__$1 = (function (){var statearr_43200 = state_43195;
(statearr_43200[(7)] = inst_43184);

return statearr_43200;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43195__$1,(7),inst_43185);
} else {
if((state_val_43196 === (5))){
var state_43195__$1 = state_43195;
var statearr_43201_43239 = state_43195__$1;
(statearr_43201_43239[(2)] = null);

(statearr_43201_43239[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43196 === (6))){
var inst_43191 = (state_43195[(2)]);
var state_43195__$1 = state_43195;
var statearr_43202_43240 = state_43195__$1;
(statearr_43202_43240[(2)] = inst_43191);

(statearr_43202_43240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43196 === (7))){
var inst_43187 = (state_43195[(2)]);
var state_43195__$1 = (function (){var statearr_43203 = state_43195;
(statearr_43203[(8)] = inst_43187);

return statearr_43203;
})();
var statearr_43204_43241 = state_43195__$1;
(statearr_43204_43241[(2)] = null);

(statearr_43204_43241[(1)] = (2));


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
});
return (function() {
var view3d$client$state_machine__40588__auto__ = null;
var view3d$client$state_machine__40588__auto____0 = (function (){
var statearr_43205 = [null,null,null,null,null,null,null,null,null];
(statearr_43205[(0)] = view3d$client$state_machine__40588__auto__);

(statearr_43205[(1)] = (1));

return statearr_43205;
});
var view3d$client$state_machine__40588__auto____1 = (function (state_43195){
while(true){
var ret_value__40589__auto__ = (function (){try{while(true){
var result__40590__auto__ = switch__40587__auto__.call(null,state_43195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40590__auto__;
}
break;
}
}catch (e43206){if((e43206 instanceof Object)){
var ex__40591__auto__ = e43206;
var statearr_43207_43242 = state_43195;
(statearr_43207_43242[(5)] = ex__40591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43243 = state_43195;
state_43195 = G__43243;
continue;
} else {
return ret_value__40589__auto__;
}
break;
}
});
view3d$client$state_machine__40588__auto__ = function(state_43195){
switch(arguments.length){
case 0:
return view3d$client$state_machine__40588__auto____0.call(this);
case 1:
return view3d$client$state_machine__40588__auto____1.call(this,state_43195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__40588__auto____0;
view3d$client$state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__40588__auto____1;
return view3d$client$state_machine__40588__auto__;
})()
})();
var state__40686__auto__ = (function (){var statearr_43208 = f__40685__auto__.call(null);
(statearr_43208[(6)] = c__40684__auto__);

return statearr_43208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40686__auto__);
}));

return c__40684__auto__;
}));

(view3d.client.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__40684__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__40685__auto__ = (function (){var switch__40587__auto__ = (function (state_43222){
var state_val_43223 = (state_43222[(1)]);
if((state_val_43223 === (1))){
var state_43222__$1 = state_43222;
var statearr_43224_43244 = state_43222__$1;
(statearr_43224_43244[(2)] = null);

(statearr_43224_43244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43223 === (2))){
var state_43222__$1 = state_43222;
var statearr_43225_43245 = state_43222__$1;
(statearr_43225_43245[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43223 === (3))){
var inst_43220 = (state_43222[(2)]);
var state_43222__$1 = state_43222;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43222__$1,inst_43220);
} else {
if((state_val_43223 === (4))){
var inst_43211 = func.call(null,param);
var inst_43212 = cljs.core.async.timeout.call(null,time_out);
var state_43222__$1 = (function (){var statearr_43227 = state_43222;
(statearr_43227[(7)] = inst_43211);

return statearr_43227;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43222__$1,(7),inst_43212);
} else {
if((state_val_43223 === (5))){
var state_43222__$1 = state_43222;
var statearr_43228_43246 = state_43222__$1;
(statearr_43228_43246[(2)] = null);

(statearr_43228_43246[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43223 === (6))){
var inst_43218 = (state_43222[(2)]);
var state_43222__$1 = state_43222;
var statearr_43229_43247 = state_43222__$1;
(statearr_43229_43247[(2)] = inst_43218);

(statearr_43229_43247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43223 === (7))){
var inst_43214 = (state_43222[(2)]);
var state_43222__$1 = (function (){var statearr_43230 = state_43222;
(statearr_43230[(8)] = inst_43214);

return statearr_43230;
})();
var statearr_43231_43248 = state_43222__$1;
(statearr_43231_43248[(2)] = null);

(statearr_43231_43248[(1)] = (2));


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
});
return (function() {
var view3d$client$state_machine__40588__auto__ = null;
var view3d$client$state_machine__40588__auto____0 = (function (){
var statearr_43232 = [null,null,null,null,null,null,null,null,null];
(statearr_43232[(0)] = view3d$client$state_machine__40588__auto__);

(statearr_43232[(1)] = (1));

return statearr_43232;
});
var view3d$client$state_machine__40588__auto____1 = (function (state_43222){
while(true){
var ret_value__40589__auto__ = (function (){try{while(true){
var result__40590__auto__ = switch__40587__auto__.call(null,state_43222);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40590__auto__;
}
break;
}
}catch (e43233){if((e43233 instanceof Object)){
var ex__40591__auto__ = e43233;
var statearr_43234_43249 = state_43222;
(statearr_43234_43249[(5)] = ex__40591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43250 = state_43222;
state_43222 = G__43250;
continue;
} else {
return ret_value__40589__auto__;
}
break;
}
});
view3d$client$state_machine__40588__auto__ = function(state_43222){
switch(arguments.length){
case 0:
return view3d$client$state_machine__40588__auto____0.call(this);
case 1:
return view3d$client$state_machine__40588__auto____1.call(this,state_43222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__40588__auto____0;
view3d$client$state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__40588__auto____1;
return view3d$client$state_machine__40588__auto__;
})()
})();
var state__40686__auto__ = (function (){var statearr_43235 = f__40685__auto__.call(null);
(statearr_43235[(6)] = c__40684__auto__);

return statearr_43235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40686__auto__);
}));

return c__40684__auto__;
}));

(view3d.client.repeater.cljs$lang$maxFixedArity = 3);

view3d.client.repeater_BANG_ = (function view3d$client$repeater_BANG_(var_args){
var G__43252 = arguments.length;
switch (G__43252) {
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

(view3d.client.repeater_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__40684__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__40685__auto__ = (function (){var switch__40587__auto__ = (function (state_43267){
var state_val_43268 = (state_43267[(1)]);
if((state_val_43268 === (1))){
var state_43267__$1 = state_43267;
var statearr_43269_43310 = state_43267__$1;
(statearr_43269_43310[(2)] = null);

(statearr_43269_43310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43268 === (2))){
var state_43267__$1 = state_43267;
var statearr_43270_43311 = state_43267__$1;
(statearr_43270_43311[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43268 === (3))){
var inst_43265 = (state_43267[(2)]);
var state_43267__$1 = state_43267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43267__$1,inst_43265);
} else {
if((state_val_43268 === (4))){
var inst_43255 = func.call(null);
var inst_43256 = cljs.core.deref.call(null,time_out);
var inst_43257 = cljs.core.async.timeout.call(null,inst_43256);
var state_43267__$1 = (function (){var statearr_43272 = state_43267;
(statearr_43272[(7)] = inst_43255);

return statearr_43272;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43267__$1,(7),inst_43257);
} else {
if((state_val_43268 === (5))){
var state_43267__$1 = state_43267;
var statearr_43273_43312 = state_43267__$1;
(statearr_43273_43312[(2)] = null);

(statearr_43273_43312[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43268 === (6))){
var inst_43263 = (state_43267[(2)]);
var state_43267__$1 = state_43267;
var statearr_43274_43313 = state_43267__$1;
(statearr_43274_43313[(2)] = inst_43263);

(statearr_43274_43313[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43268 === (7))){
var inst_43259 = (state_43267[(2)]);
var state_43267__$1 = (function (){var statearr_43275 = state_43267;
(statearr_43275[(8)] = inst_43259);

return statearr_43275;
})();
var statearr_43276_43314 = state_43267__$1;
(statearr_43276_43314[(2)] = null);

(statearr_43276_43314[(1)] = (2));


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
});
return (function() {
var view3d$client$state_machine__40588__auto__ = null;
var view3d$client$state_machine__40588__auto____0 = (function (){
var statearr_43277 = [null,null,null,null,null,null,null,null,null];
(statearr_43277[(0)] = view3d$client$state_machine__40588__auto__);

(statearr_43277[(1)] = (1));

return statearr_43277;
});
var view3d$client$state_machine__40588__auto____1 = (function (state_43267){
while(true){
var ret_value__40589__auto__ = (function (){try{while(true){
var result__40590__auto__ = switch__40587__auto__.call(null,state_43267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40590__auto__;
}
break;
}
}catch (e43278){if((e43278 instanceof Object)){
var ex__40591__auto__ = e43278;
var statearr_43279_43315 = state_43267;
(statearr_43279_43315[(5)] = ex__40591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43316 = state_43267;
state_43267 = G__43316;
continue;
} else {
return ret_value__40589__auto__;
}
break;
}
});
view3d$client$state_machine__40588__auto__ = function(state_43267){
switch(arguments.length){
case 0:
return view3d$client$state_machine__40588__auto____0.call(this);
case 1:
return view3d$client$state_machine__40588__auto____1.call(this,state_43267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__40588__auto____0;
view3d$client$state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__40588__auto____1;
return view3d$client$state_machine__40588__auto__;
})()
})();
var state__40686__auto__ = (function (){var statearr_43280 = f__40685__auto__.call(null);
(statearr_43280[(6)] = c__40684__auto__);

return statearr_43280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40686__auto__);
}));

return c__40684__auto__;
}));

(view3d.client.repeater_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__40684__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__40685__auto__ = (function (){var switch__40587__auto__ = (function (state_43295){
var state_val_43296 = (state_43295[(1)]);
if((state_val_43296 === (1))){
var state_43295__$1 = state_43295;
var statearr_43297_43317 = state_43295__$1;
(statearr_43297_43317[(2)] = null);

(statearr_43297_43317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43296 === (2))){
var state_43295__$1 = state_43295;
var statearr_43298_43318 = state_43295__$1;
(statearr_43298_43318[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43296 === (3))){
var inst_43293 = (state_43295[(2)]);
var state_43295__$1 = state_43295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43295__$1,inst_43293);
} else {
if((state_val_43296 === (4))){
var inst_43283 = func.call(null,param);
var inst_43284 = cljs.core.deref.call(null,time_out);
var inst_43285 = cljs.core.async.timeout.call(null,inst_43284);
var state_43295__$1 = (function (){var statearr_43300 = state_43295;
(statearr_43300[(7)] = inst_43283);

return statearr_43300;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43295__$1,(7),inst_43285);
} else {
if((state_val_43296 === (5))){
var state_43295__$1 = state_43295;
var statearr_43301_43319 = state_43295__$1;
(statearr_43301_43319[(2)] = null);

(statearr_43301_43319[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43296 === (6))){
var inst_43291 = (state_43295[(2)]);
var state_43295__$1 = state_43295;
var statearr_43302_43320 = state_43295__$1;
(statearr_43302_43320[(2)] = inst_43291);

(statearr_43302_43320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43296 === (7))){
var inst_43287 = (state_43295[(2)]);
var state_43295__$1 = (function (){var statearr_43303 = state_43295;
(statearr_43303[(8)] = inst_43287);

return statearr_43303;
})();
var statearr_43304_43321 = state_43295__$1;
(statearr_43304_43321[(2)] = null);

(statearr_43304_43321[(1)] = (2));


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
});
return (function() {
var view3d$client$state_machine__40588__auto__ = null;
var view3d$client$state_machine__40588__auto____0 = (function (){
var statearr_43305 = [null,null,null,null,null,null,null,null,null];
(statearr_43305[(0)] = view3d$client$state_machine__40588__auto__);

(statearr_43305[(1)] = (1));

return statearr_43305;
});
var view3d$client$state_machine__40588__auto____1 = (function (state_43295){
while(true){
var ret_value__40589__auto__ = (function (){try{while(true){
var result__40590__auto__ = switch__40587__auto__.call(null,state_43295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40590__auto__;
}
break;
}
}catch (e43306){if((e43306 instanceof Object)){
var ex__40591__auto__ = e43306;
var statearr_43307_43322 = state_43295;
(statearr_43307_43322[(5)] = ex__40591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43323 = state_43295;
state_43295 = G__43323;
continue;
} else {
return ret_value__40589__auto__;
}
break;
}
});
view3d$client$state_machine__40588__auto__ = function(state_43295){
switch(arguments.length){
case 0:
return view3d$client$state_machine__40588__auto____0.call(this);
case 1:
return view3d$client$state_machine__40588__auto____1.call(this,state_43295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__40588__auto____0;
view3d$client$state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__40588__auto____1;
return view3d$client$state_machine__40588__auto__;
})()
})();
var state__40686__auto__ = (function (){var statearr_43308 = f__40685__auto__.call(null);
(statearr_43308[(6)] = c__40684__auto__);

return statearr_43308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40686__auto__);
}));

return c__40684__auto__;
}));

(view3d.client.repeater_BANG_.cljs$lang$maxFixedArity = 3);

view3d.client.read_transit = (function view3d$client$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
view3d.client.by_id = (function view3d$client$by_id(id){
return document.getElementById(id);
});
view3d.client.set_html_BANG_ = (function view3d$client$set_html_BANG_(id,msg){
return (document.getElementById(id).innerHTML = msg);
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
}catch (e43324){if((e43324 instanceof Error)){
var e = e43324;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e43324;

}
}})()], null),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));

return cljs.core.vreset_BANG_.call(null,view3d.client.RESPONSE,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
});
view3d.client.handle_request = (function view3d$client$handle_request(request){
var temp__5802__auto___43331 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5802__auto___43331)){
var vie_43332 = temp__5802__auto___43331;
view3d.client.view.call(null,vie_43332);
} else {
}

var temp__5802__auto___43333 = new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5802__auto___43333)){
var pit_43334 = temp__5802__auto___43333;
view3d.client.pitch.call(null,pit_43334);
} else {
}

var temp__5802__auto___43335 = new cljs.core.Keyword(null,"roll","roll",11266999).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5802__auto___43335)){
var rol_43336 = temp__5802__auto___43335;
view3d.client.roll.call(null,rol_43336);
} else {
}

var temp__5802__auto___43337 = new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5802__auto___43337)){
var vec__43325_43338 = temp__5802__auto___43337;
var lat_43339 = cljs.core.nth.call(null,vec__43325_43338,(0),null);
var lon_43340 = cljs.core.nth.call(null,vec__43325_43338,(1),null);
var vec__43328_43341 = czm.core.sample_height.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [geo.calc.radians.call(null,lat_43339),geo.calc.radians.call(null,lon_43340)], null),(0));
var __43342 = cljs.core.nth.call(null,vec__43328_43341,(0),null);
var __43343__$1 = cljs.core.nth.call(null,vec__43328_43341,(1),null);
var sh_43344 = cljs.core.nth.call(null,vec__43328_43341,(2),null);
cljs.core._vreset_BANG_.call(null,view3d.client.RESPONSE,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.RESPONSE),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(sh_43344 | (0))));
} else {
}

return view3d.client.response_request.call(null);
});
view3d.client.handle_vehicle = (function view3d$client$handle_vehicle(vehicle){
var vec__43345 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__43345,(0),null);
var lon = cljs.core.nth.call(null,vec__43345,(1),null);
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
var temp__5802__auto___43348 = new cljs.core.Keyword(null,"vehicle","vehicle",1670166968).cljs$core$IFn$_invoke$arity$1(resp);
if(cljs.core.truth_(temp__5802__auto___43348)){
var vehicle_43349 = temp__5802__auto___43348;
view3d.client.handle_vehicle.call(null,vehicle_43349);
} else {
}

var temp__5802__auto__ = new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(resp);
if(cljs.core.truth_(temp__5802__auto__)){
var request = temp__5802__auto__;
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
czm.core.init_3D_view.call(null,["http://0.0.0.0/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.client.PORT)].join(''));

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
var temp__5804__auto__ = cljs.core.first.call(null,view3d.client.read_transit.call(null,response));
if(cljs.core.truth_(temp__5804__auto__)){
var req = temp__5804__auto__;
cljs.core.println.call(null,req);

var temp__5802__auto__ = new cljs.core.Keyword(null,"sexp","sexp",-1528364050).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5802__auto__)){
var sexp = temp__5802__auto__;
return evaluate.call(null,sexp);
} else {
return null;
}
} else {
return null;
}
});
ajax.core.GET.call(null,"/cli-repl",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transit","transit",359458387),(function (){try{return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),cljs.core.deref.call(null,view3d.client.CLI_REPL).call(null,new cljs.core.Keyword(null,"value","value",305978217)));
}catch (e43350){if((e43350 instanceof Error)){
var e = e43350;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e43350;

}
}})()], null),new cljs.core.Keyword(null,"handler","handler",-195596612),hand,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));

return setTimeout(view3d.client.run_repl,(1000));
});
view3d.client.tst = (function view3d$client$tst(){
(czm.core.VIEWER.scene.globe.depthTestAgainstTerrain = true);

cljs.core.println.call(null,new cljs.core.Keyword(null,"D","D",-8015893),czm.core.VIEWER.scene.globe.depthTestAgainstTerrain);

var ppc = (new Cesium.PointPrimitiveCollection(({"heightReference": Cesium.HeightReference.CLAMP_TO_GROUND})));
var lla = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [61.6,7.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [61.61,7.51], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [61.6,7.52], null)], null);
var clr = Cesium.Color.YELLOW;
var size = (10);
var prims = czm.core.VIEWER.scene.primitives.add(ppc);
return fillPointPrimColl(prims,cljs.core.clj__GT_js.call(null,lla),clr,size);
});
cljs.core.enable_console_print_BANG_.call(null);
(window.onload = view3d.client.on_load.call(null));
view3d.client.run_repl.call(null);
view3d.client.tst.call(null);

//# sourceMappingURL=client.js.map
