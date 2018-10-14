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
view3d.client.TERRAIN_TIO = cljs.core.volatile_BANG_.call(null,(4000));
view3d.client.error_handler = (function view3d$client$error_handler(response){
var map__16412 = response;
var map__16412__$1 = ((((!((map__16412 == null)))?((((map__16412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16412.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16412):map__16412);
var status = cljs.core.get.call(null,map__16412__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__16412__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
view3d.client.repeater = (function view3d$client$repeater(var_args){
var G__16415 = arguments.length;
switch (G__16415) {
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
var c__14313__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14313__auto__){
return (function (){
var f__14314__auto__ = (function (){var switch__14223__auto__ = ((function (c__14313__auto__){
return (function (state_16429){
var state_val_16430 = (state_16429[(1)]);
if((state_val_16430 === (1))){
var state_16429__$1 = state_16429;
var statearr_16431_16471 = state_16429__$1;
(statearr_16431_16471[(2)] = null);

(statearr_16431_16471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16430 === (2))){
var state_16429__$1 = state_16429;
var statearr_16432_16472 = state_16429__$1;
(statearr_16432_16472[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16430 === (3))){
var inst_16427 = (state_16429[(2)]);
var state_16429__$1 = state_16429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16429__$1,inst_16427);
} else {
if((state_val_16430 === (4))){
var inst_16418 = func.call(null);
var inst_16419 = cljs.core.async.timeout.call(null,time_out);
var state_16429__$1 = (function (){var statearr_16434 = state_16429;
(statearr_16434[(7)] = inst_16418);

return statearr_16434;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16429__$1,(7),inst_16419);
} else {
if((state_val_16430 === (5))){
var state_16429__$1 = state_16429;
var statearr_16435_16473 = state_16429__$1;
(statearr_16435_16473[(2)] = null);

(statearr_16435_16473[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16430 === (6))){
var inst_16425 = (state_16429[(2)]);
var state_16429__$1 = state_16429;
var statearr_16436_16474 = state_16429__$1;
(statearr_16436_16474[(2)] = inst_16425);

(statearr_16436_16474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16430 === (7))){
var inst_16421 = (state_16429[(2)]);
var state_16429__$1 = (function (){var statearr_16437 = state_16429;
(statearr_16437[(8)] = inst_16421);

return statearr_16437;
})();
var statearr_16438_16475 = state_16429__$1;
(statearr_16438_16475[(2)] = null);

(statearr_16438_16475[(1)] = (2));


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
});})(c__14313__auto__))
;
return ((function (switch__14223__auto__,c__14313__auto__){
return (function() {
var view3d$client$state_machine__14224__auto__ = null;
var view3d$client$state_machine__14224__auto____0 = (function (){
var statearr_16439 = [null,null,null,null,null,null,null,null,null];
(statearr_16439[(0)] = view3d$client$state_machine__14224__auto__);

(statearr_16439[(1)] = (1));

return statearr_16439;
});
var view3d$client$state_machine__14224__auto____1 = (function (state_16429){
while(true){
var ret_value__14225__auto__ = (function (){try{while(true){
var result__14226__auto__ = switch__14223__auto__.call(null,state_16429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14226__auto__;
}
break;
}
}catch (e16440){if((e16440 instanceof Object)){
var ex__14227__auto__ = e16440;
var statearr_16441_16476 = state_16429;
(statearr_16441_16476[(5)] = ex__14227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16477 = state_16429;
state_16429 = G__16477;
continue;
} else {
return ret_value__14225__auto__;
}
break;
}
});
view3d$client$state_machine__14224__auto__ = function(state_16429){
switch(arguments.length){
case 0:
return view3d$client$state_machine__14224__auto____0.call(this);
case 1:
return view3d$client$state_machine__14224__auto____1.call(this,state_16429);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
view3d$client$state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__14224__auto____0;
view3d$client$state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__14224__auto____1;
return view3d$client$state_machine__14224__auto__;
})()
;})(switch__14223__auto__,c__14313__auto__))
})();
var state__14315__auto__ = (function (){var statearr_16442 = f__14314__auto__.call(null);
(statearr_16442[(6)] = c__14313__auto__);

return statearr_16442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14315__auto__);
});})(c__14313__auto__))
);

return c__14313__auto__;
});

view3d.client.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__14313__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14313__auto__){
return (function (){
var f__14314__auto__ = (function (){var switch__14223__auto__ = ((function (c__14313__auto__){
return (function (state_16456){
var state_val_16457 = (state_16456[(1)]);
if((state_val_16457 === (1))){
var state_16456__$1 = state_16456;
var statearr_16458_16478 = state_16456__$1;
(statearr_16458_16478[(2)] = null);

(statearr_16458_16478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16457 === (2))){
var state_16456__$1 = state_16456;
var statearr_16459_16479 = state_16456__$1;
(statearr_16459_16479[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16457 === (3))){
var inst_16454 = (state_16456[(2)]);
var state_16456__$1 = state_16456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16456__$1,inst_16454);
} else {
if((state_val_16457 === (4))){
var inst_16445 = func.call(null,param);
var inst_16446 = cljs.core.async.timeout.call(null,time_out);
var state_16456__$1 = (function (){var statearr_16461 = state_16456;
(statearr_16461[(7)] = inst_16445);

return statearr_16461;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16456__$1,(7),inst_16446);
} else {
if((state_val_16457 === (5))){
var state_16456__$1 = state_16456;
var statearr_16462_16480 = state_16456__$1;
(statearr_16462_16480[(2)] = null);

(statearr_16462_16480[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16457 === (6))){
var inst_16452 = (state_16456[(2)]);
var state_16456__$1 = state_16456;
var statearr_16463_16481 = state_16456__$1;
(statearr_16463_16481[(2)] = inst_16452);

(statearr_16463_16481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16457 === (7))){
var inst_16448 = (state_16456[(2)]);
var state_16456__$1 = (function (){var statearr_16464 = state_16456;
(statearr_16464[(8)] = inst_16448);

return statearr_16464;
})();
var statearr_16465_16482 = state_16456__$1;
(statearr_16465_16482[(2)] = null);

(statearr_16465_16482[(1)] = (2));


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
});})(c__14313__auto__))
;
return ((function (switch__14223__auto__,c__14313__auto__){
return (function() {
var view3d$client$state_machine__14224__auto__ = null;
var view3d$client$state_machine__14224__auto____0 = (function (){
var statearr_16466 = [null,null,null,null,null,null,null,null,null];
(statearr_16466[(0)] = view3d$client$state_machine__14224__auto__);

(statearr_16466[(1)] = (1));

return statearr_16466;
});
var view3d$client$state_machine__14224__auto____1 = (function (state_16456){
while(true){
var ret_value__14225__auto__ = (function (){try{while(true){
var result__14226__auto__ = switch__14223__auto__.call(null,state_16456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14226__auto__;
}
break;
}
}catch (e16467){if((e16467 instanceof Object)){
var ex__14227__auto__ = e16467;
var statearr_16468_16483 = state_16456;
(statearr_16468_16483[(5)] = ex__14227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16484 = state_16456;
state_16456 = G__16484;
continue;
} else {
return ret_value__14225__auto__;
}
break;
}
});
view3d$client$state_machine__14224__auto__ = function(state_16456){
switch(arguments.length){
case 0:
return view3d$client$state_machine__14224__auto____0.call(this);
case 1:
return view3d$client$state_machine__14224__auto____1.call(this,state_16456);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
view3d$client$state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__14224__auto____0;
view3d$client$state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__14224__auto____1;
return view3d$client$state_machine__14224__auto__;
})()
;})(switch__14223__auto__,c__14313__auto__))
})();
var state__14315__auto__ = (function (){var statearr_16469 = f__14314__auto__.call(null);
(statearr_16469[(6)] = c__14313__auto__);

return statearr_16469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14315__auto__);
});})(c__14313__auto__))
);

return c__14313__auto__;
});

view3d.client.repeater.cljs$lang$maxFixedArity = 3;

view3d.client.repeater_BANG_ = (function view3d$client$repeater_BANG_(var_args){
var G__16486 = arguments.length;
switch (G__16486) {
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
var c__14313__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14313__auto__){
return (function (){
var f__14314__auto__ = (function (){var switch__14223__auto__ = ((function (c__14313__auto__){
return (function (state_16501){
var state_val_16502 = (state_16501[(1)]);
if((state_val_16502 === (1))){
var state_16501__$1 = state_16501;
var statearr_16503_16544 = state_16501__$1;
(statearr_16503_16544[(2)] = null);

(statearr_16503_16544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16502 === (2))){
var state_16501__$1 = state_16501;
var statearr_16504_16545 = state_16501__$1;
(statearr_16504_16545[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16502 === (3))){
var inst_16499 = (state_16501[(2)]);
var state_16501__$1 = state_16501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16501__$1,inst_16499);
} else {
if((state_val_16502 === (4))){
var inst_16489 = func.call(null);
var inst_16490 = cljs.core.deref.call(null,time_out);
var inst_16491 = cljs.core.async.timeout.call(null,inst_16490);
var state_16501__$1 = (function (){var statearr_16506 = state_16501;
(statearr_16506[(7)] = inst_16489);

return statearr_16506;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16501__$1,(7),inst_16491);
} else {
if((state_val_16502 === (5))){
var state_16501__$1 = state_16501;
var statearr_16507_16546 = state_16501__$1;
(statearr_16507_16546[(2)] = null);

(statearr_16507_16546[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16502 === (6))){
var inst_16497 = (state_16501[(2)]);
var state_16501__$1 = state_16501;
var statearr_16508_16547 = state_16501__$1;
(statearr_16508_16547[(2)] = inst_16497);

(statearr_16508_16547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16502 === (7))){
var inst_16493 = (state_16501[(2)]);
var state_16501__$1 = (function (){var statearr_16509 = state_16501;
(statearr_16509[(8)] = inst_16493);

return statearr_16509;
})();
var statearr_16510_16548 = state_16501__$1;
(statearr_16510_16548[(2)] = null);

(statearr_16510_16548[(1)] = (2));


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
});})(c__14313__auto__))
;
return ((function (switch__14223__auto__,c__14313__auto__){
return (function() {
var view3d$client$state_machine__14224__auto__ = null;
var view3d$client$state_machine__14224__auto____0 = (function (){
var statearr_16511 = [null,null,null,null,null,null,null,null,null];
(statearr_16511[(0)] = view3d$client$state_machine__14224__auto__);

(statearr_16511[(1)] = (1));

return statearr_16511;
});
var view3d$client$state_machine__14224__auto____1 = (function (state_16501){
while(true){
var ret_value__14225__auto__ = (function (){try{while(true){
var result__14226__auto__ = switch__14223__auto__.call(null,state_16501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14226__auto__;
}
break;
}
}catch (e16512){if((e16512 instanceof Object)){
var ex__14227__auto__ = e16512;
var statearr_16513_16549 = state_16501;
(statearr_16513_16549[(5)] = ex__14227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16550 = state_16501;
state_16501 = G__16550;
continue;
} else {
return ret_value__14225__auto__;
}
break;
}
});
view3d$client$state_machine__14224__auto__ = function(state_16501){
switch(arguments.length){
case 0:
return view3d$client$state_machine__14224__auto____0.call(this);
case 1:
return view3d$client$state_machine__14224__auto____1.call(this,state_16501);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
view3d$client$state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__14224__auto____0;
view3d$client$state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__14224__auto____1;
return view3d$client$state_machine__14224__auto__;
})()
;})(switch__14223__auto__,c__14313__auto__))
})();
var state__14315__auto__ = (function (){var statearr_16514 = f__14314__auto__.call(null);
(statearr_16514[(6)] = c__14313__auto__);

return statearr_16514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14315__auto__);
});})(c__14313__auto__))
);

return c__14313__auto__;
});

view3d.client.repeater_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__14313__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14313__auto__){
return (function (){
var f__14314__auto__ = (function (){var switch__14223__auto__ = ((function (c__14313__auto__){
return (function (state_16529){
var state_val_16530 = (state_16529[(1)]);
if((state_val_16530 === (1))){
var state_16529__$1 = state_16529;
var statearr_16531_16551 = state_16529__$1;
(statearr_16531_16551[(2)] = null);

(statearr_16531_16551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16530 === (2))){
var state_16529__$1 = state_16529;
var statearr_16532_16552 = state_16529__$1;
(statearr_16532_16552[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16530 === (3))){
var inst_16527 = (state_16529[(2)]);
var state_16529__$1 = state_16529;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16529__$1,inst_16527);
} else {
if((state_val_16530 === (4))){
var inst_16517 = func.call(null,param);
var inst_16518 = cljs.core.deref.call(null,time_out);
var inst_16519 = cljs.core.async.timeout.call(null,inst_16518);
var state_16529__$1 = (function (){var statearr_16534 = state_16529;
(statearr_16534[(7)] = inst_16517);

return statearr_16534;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16529__$1,(7),inst_16519);
} else {
if((state_val_16530 === (5))){
var state_16529__$1 = state_16529;
var statearr_16535_16553 = state_16529__$1;
(statearr_16535_16553[(2)] = null);

(statearr_16535_16553[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16530 === (6))){
var inst_16525 = (state_16529[(2)]);
var state_16529__$1 = state_16529;
var statearr_16536_16554 = state_16529__$1;
(statearr_16536_16554[(2)] = inst_16525);

(statearr_16536_16554[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16530 === (7))){
var inst_16521 = (state_16529[(2)]);
var state_16529__$1 = (function (){var statearr_16537 = state_16529;
(statearr_16537[(8)] = inst_16521);

return statearr_16537;
})();
var statearr_16538_16555 = state_16529__$1;
(statearr_16538_16555[(2)] = null);

(statearr_16538_16555[(1)] = (2));


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
});})(c__14313__auto__))
;
return ((function (switch__14223__auto__,c__14313__auto__){
return (function() {
var view3d$client$state_machine__14224__auto__ = null;
var view3d$client$state_machine__14224__auto____0 = (function (){
var statearr_16539 = [null,null,null,null,null,null,null,null,null];
(statearr_16539[(0)] = view3d$client$state_machine__14224__auto__);

(statearr_16539[(1)] = (1));

return statearr_16539;
});
var view3d$client$state_machine__14224__auto____1 = (function (state_16529){
while(true){
var ret_value__14225__auto__ = (function (){try{while(true){
var result__14226__auto__ = switch__14223__auto__.call(null,state_16529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14226__auto__;
}
break;
}
}catch (e16540){if((e16540 instanceof Object)){
var ex__14227__auto__ = e16540;
var statearr_16541_16556 = state_16529;
(statearr_16541_16556[(5)] = ex__14227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16557 = state_16529;
state_16529 = G__16557;
continue;
} else {
return ret_value__14225__auto__;
}
break;
}
});
view3d$client$state_machine__14224__auto__ = function(state_16529){
switch(arguments.length){
case 0:
return view3d$client$state_machine__14224__auto____0.call(this);
case 1:
return view3d$client$state_machine__14224__auto____1.call(this,state_16529);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
view3d$client$state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__14224__auto____0;
view3d$client$state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__14224__auto____1;
return view3d$client$state_machine__14224__auto__;
})()
;})(switch__14223__auto__,c__14313__auto__))
})();
var state__14315__auto__ = (function (){var statearr_16542 = f__14314__auto__.call(null);
(statearr_16542[(6)] = c__14313__auto__);

return statearr_16542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14315__auto__);
});})(c__14313__auto__))
);

return c__14313__auto__;
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
view3d.client.camera_control = (function view3d$client$camera_control(vie,pit,rol){
if(cljs.core.truth_(vie)){
view3d.client.view.call(null,vie);

view3d.client.by_id.call(null,"view-val").selectedIndex = (function (){var pred__16558 = cljs.core._EQ_;
var expr__16559 = vie;
if(cljs.core.truth_(pred__16558.call(null,"FORWARD",expr__16559))){
return (0);
} else {
if(cljs.core.truth_(pred__16558.call(null,"BACKWARD",expr__16559))){
return (1);
} else {
if(cljs.core.truth_(pred__16558.call(null,"RIGHT",expr__16559))){
return (2);
} else {
if(cljs.core.truth_(pred__16558.call(null,"LEFT",expr__16559))){
return (3);
} else {
if(cljs.core.truth_(pred__16558.call(null,"UP",expr__16559))){
return (4);
} else {
if(cljs.core.truth_(pred__16558.call(null,"DOWN",expr__16559))){
return (5);
} else {
if(cljs.core.truth_(pred__16558.call(null,"FORWARD-RIGHT",expr__16559))){
return (6);
} else {
if(cljs.core.truth_(pred__16558.call(null,"FORWARD-LEFT",expr__16559))){
return (7);
} else {
if(cljs.core.truth_(pred__16558.call(null,"BACKWARD-RIGHT",expr__16559))){
return (8);
} else {
if(cljs.core.truth_(pred__16558.call(null,"BACKWARD-LEFT",expr__16559))){
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
view3d.client.vehicle_period_camera = (function view3d$client$vehicle_period_camera(vehicle,period,camera){
var vec__16561 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__16561,(0),null);
var lon = cljs.core.nth.call(null,vec__16561,(1),null);
var alt = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(vehicle);
var alt__$1 = ((((alt < czm.core.MAX_UPGROUND))?czm.core.AAT:alt) | (0));
cljs.core._vreset_BANG_.call(null,view3d.client.VEHICLE,cljs.core.merge.call(null,cljs.core._deref.call(null,view3d.client.VEHICLE),vehicle));

view3d.client.set_html_BANG_.call(null,"onboard-fld",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(vehicle));

view3d.client.set_html_BANG_.call(null,"name-fld",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(vehicle));

view3d.client.set_html_BANG_.call(null,"course-fld",new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(vehicle));

view3d.client.set_html_BANG_.call(null,"speed-fld",new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(vehicle));

view3d.client.set_html_BANG_.call(null,"altitude-fld",alt__$1);

if((period <= (0))){
czm.core.move_to.call(null,lat,lon,new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(vehicle),new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(vehicle));
} else {
czm.core.fly_to.call(null,lat,lon,new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(vehicle),new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(vehicle),period);
}

var temp__5455__auto__ = camera;
if(cljs.core.truth_(temp__5455__auto__)){
var map__16564 = temp__5455__auto__;
var map__16564__$1 = ((((!((map__16564 == null)))?((((map__16564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16564.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16564):map__16564);
var view = cljs.core.get.call(null,map__16564__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var pitch = cljs.core.get.call(null,map__16564__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
var roll = cljs.core.get.call(null,map__16564__$1,new cljs.core.Keyword(null,"roll","roll",11266999));
return view3d.client.camera_control.call(null,view,pitch,roll);
} else {
return null;
}
});
view3d.client.vehicle_hr = (function view3d$client$vehicle_hr(response){
var resp = view3d.client.read_transit.call(null,response);
var temp__5455__auto__ = resp;
if(cljs.core.truth_(temp__5455__auto__)){
var map__16566 = temp__5455__auto__;
var map__16566__$1 = ((((!((map__16566 == null)))?((((map__16566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16566.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16566):map__16566);
var vehicle = cljs.core.get.call(null,map__16566__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
var period = cljs.core.get.call(null,map__16566__$1,new cljs.core.Keyword(null,"period","period",-352129191));
var camera = cljs.core.get.call(null,map__16566__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
return view3d.client.vehicle_period_camera.call(null,vehicle,period,camera);
} else {
return null;
}
});
view3d.client.receive_vehicle = (function view3d$client$receive_vehicle(){
return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.client.BASE_URL),"vehicle/"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),view3d.client.vehicle_hr,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));
});
view3d.client.send_terrain_hr = (function view3d$client$send_terrain_hr(response){
var resp = view3d.client.read_transit.call(null,response);
var temp__5455__auto___16571 = resp.call(null,new cljs.core.Keyword(null,"latlon","latlon",-1285780235));
if(cljs.core.truth_(temp__5455__auto___16571)){
var vec__16568_16572 = temp__5455__auto___16571;
var lat_16573 = cljs.core.nth.call(null,vec__16568_16572,(0),null);
var lon_16574 = cljs.core.nth.call(null,vec__16568_16572,(1),null);
czm.core.terrain_request.call(null,lat_16573,lon_16574);
} else {
if((czm.core.TERRAIN >= (0))){
czm.core.terrain_request.call(null,(100),(200));
} else {
}
}

var temp__5455__auto__ = resp.call(null,new cljs.core.Keyword(null,"interval","interval",1708495417));
if(cljs.core.truth_(temp__5455__auto__)){
var inter = temp__5455__auto__;
return cljs.core.vreset_BANG_.call(null,view3d.client.TERRAIN_TIO,inter);
} else {
return null;
}
});
view3d.client.send_terrain = (function view3d$client$send_terrain(){
return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.client.BASE_URL),"terrain/","?terrain=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(czm.core.TERRAIN)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),view3d.client.send_terrain_hr,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));
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

view3d.client.repeater.call(null,view3d.client.receive_vehicle,(1000));

view3d.client.repeater_BANG_.call(null,view3d.client.send_terrain,view3d.client.TERRAIN_TIO);

return view3d.client.show_controls.call(null);
});
window.onload = view3d.client.on_load.call(null);

//# sourceMappingURL=client.js.map
