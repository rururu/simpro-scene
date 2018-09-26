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
var map__14488 = response;
var map__14488__$1 = ((((!((map__14488 == null)))?((((map__14488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14488.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14488):map__14488);
var status = cljs.core.get.call(null,map__14488__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__14488__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
view3d.client.repeater = (function view3d$client$repeater(var_args){
var G__14491 = arguments.length;
switch (G__14491) {
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
return (function (state_14505){
var state_val_14506 = (state_14505[(1)]);
if((state_val_14506 === (1))){
var state_14505__$1 = state_14505;
var statearr_14507_14547 = state_14505__$1;
(statearr_14507_14547[(2)] = null);

(statearr_14507_14547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (2))){
var state_14505__$1 = state_14505;
var statearr_14508_14548 = state_14505__$1;
(statearr_14508_14548[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (3))){
var inst_14503 = (state_14505[(2)]);
var state_14505__$1 = state_14505;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14505__$1,inst_14503);
} else {
if((state_val_14506 === (4))){
var inst_14494 = func.call(null);
var inst_14495 = cljs.core.async.timeout.call(null,time_out);
var state_14505__$1 = (function (){var statearr_14510 = state_14505;
(statearr_14510[(7)] = inst_14494);

return statearr_14510;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14505__$1,(7),inst_14495);
} else {
if((state_val_14506 === (5))){
var state_14505__$1 = state_14505;
var statearr_14511_14549 = state_14505__$1;
(statearr_14511_14549[(2)] = null);

(statearr_14511_14549[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (6))){
var inst_14501 = (state_14505[(2)]);
var state_14505__$1 = state_14505;
var statearr_14512_14550 = state_14505__$1;
(statearr_14512_14550[(2)] = inst_14501);

(statearr_14512_14550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (7))){
var inst_14497 = (state_14505[(2)]);
var state_14505__$1 = (function (){var statearr_14513 = state_14505;
(statearr_14513[(8)] = inst_14497);

return statearr_14513;
})();
var statearr_14514_14551 = state_14505__$1;
(statearr_14514_14551[(2)] = null);

(statearr_14514_14551[(1)] = (2));


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
var statearr_14515 = [null,null,null,null,null,null,null,null,null];
(statearr_14515[(0)] = view3d$client$state_machine__11856__auto__);

(statearr_14515[(1)] = (1));

return statearr_14515;
});
var view3d$client$state_machine__11856__auto____1 = (function (state_14505){
while(true){
var ret_value__11857__auto__ = (function (){try{while(true){
var result__11858__auto__ = switch__11855__auto__.call(null,state_14505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11858__auto__;
}
break;
}
}catch (e14516){if((e14516 instanceof Object)){
var ex__11859__auto__ = e14516;
var statearr_14517_14552 = state_14505;
(statearr_14517_14552[(5)] = ex__11859__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14553 = state_14505;
state_14505 = G__14553;
continue;
} else {
return ret_value__11857__auto__;
}
break;
}
});
view3d$client$state_machine__11856__auto__ = function(state_14505){
switch(arguments.length){
case 0:
return view3d$client$state_machine__11856__auto____0.call(this);
case 1:
return view3d$client$state_machine__11856__auto____1.call(this,state_14505);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
view3d$client$state_machine__11856__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__11856__auto____0;
view3d$client$state_machine__11856__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__11856__auto____1;
return view3d$client$state_machine__11856__auto__;
})()
;})(switch__11855__auto__,c__11878__auto__))
})();
var state__11880__auto__ = (function (){var statearr_14518 = f__11879__auto__.call(null);
(statearr_14518[(6)] = c__11878__auto__);

return statearr_14518;
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
return (function (state_14532){
var state_val_14533 = (state_14532[(1)]);
if((state_val_14533 === (1))){
var state_14532__$1 = state_14532;
var statearr_14534_14554 = state_14532__$1;
(statearr_14534_14554[(2)] = null);

(statearr_14534_14554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14533 === (2))){
var state_14532__$1 = state_14532;
var statearr_14535_14555 = state_14532__$1;
(statearr_14535_14555[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14533 === (3))){
var inst_14530 = (state_14532[(2)]);
var state_14532__$1 = state_14532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14532__$1,inst_14530);
} else {
if((state_val_14533 === (4))){
var inst_14521 = func.call(null,param);
var inst_14522 = cljs.core.async.timeout.call(null,time_out);
var state_14532__$1 = (function (){var statearr_14537 = state_14532;
(statearr_14537[(7)] = inst_14521);

return statearr_14537;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14532__$1,(7),inst_14522);
} else {
if((state_val_14533 === (5))){
var state_14532__$1 = state_14532;
var statearr_14538_14556 = state_14532__$1;
(statearr_14538_14556[(2)] = null);

(statearr_14538_14556[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14533 === (6))){
var inst_14528 = (state_14532[(2)]);
var state_14532__$1 = state_14532;
var statearr_14539_14557 = state_14532__$1;
(statearr_14539_14557[(2)] = inst_14528);

(statearr_14539_14557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14533 === (7))){
var inst_14524 = (state_14532[(2)]);
var state_14532__$1 = (function (){var statearr_14540 = state_14532;
(statearr_14540[(8)] = inst_14524);

return statearr_14540;
})();
var statearr_14541_14558 = state_14532__$1;
(statearr_14541_14558[(2)] = null);

(statearr_14541_14558[(1)] = (2));


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
var statearr_14542 = [null,null,null,null,null,null,null,null,null];
(statearr_14542[(0)] = view3d$client$state_machine__11856__auto__);

(statearr_14542[(1)] = (1));

return statearr_14542;
});
var view3d$client$state_machine__11856__auto____1 = (function (state_14532){
while(true){
var ret_value__11857__auto__ = (function (){try{while(true){
var result__11858__auto__ = switch__11855__auto__.call(null,state_14532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11858__auto__;
}
break;
}
}catch (e14543){if((e14543 instanceof Object)){
var ex__11859__auto__ = e14543;
var statearr_14544_14559 = state_14532;
(statearr_14544_14559[(5)] = ex__11859__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14543;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14560 = state_14532;
state_14532 = G__14560;
continue;
} else {
return ret_value__11857__auto__;
}
break;
}
});
view3d$client$state_machine__11856__auto__ = function(state_14532){
switch(arguments.length){
case 0:
return view3d$client$state_machine__11856__auto____0.call(this);
case 1:
return view3d$client$state_machine__11856__auto____1.call(this,state_14532);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
view3d$client$state_machine__11856__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__11856__auto____0;
view3d$client$state_machine__11856__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__11856__auto____1;
return view3d$client$state_machine__11856__auto__;
})()
;})(switch__11855__auto__,c__11878__auto__))
})();
var state__11880__auto__ = (function (){var statearr_14545 = f__11879__auto__.call(null);
(statearr_14545[(6)] = c__11878__auto__);

return statearr_14545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11880__auto__);
});})(c__11878__auto__))
);

return c__11878__auto__;
});

view3d.client.repeater.cljs$lang$maxFixedArity = 3;

view3d.client.repeater_BANG_ = (function view3d$client$repeater_BANG_(var_args){
var G__14562 = arguments.length;
switch (G__14562) {
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
var c__11878__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11878__auto__){
return (function (){
var f__11879__auto__ = (function (){var switch__11855__auto__ = ((function (c__11878__auto__){
return (function (state_14577){
var state_val_14578 = (state_14577[(1)]);
if((state_val_14578 === (1))){
var state_14577__$1 = state_14577;
var statearr_14579_14620 = state_14577__$1;
(statearr_14579_14620[(2)] = null);

(statearr_14579_14620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14578 === (2))){
var state_14577__$1 = state_14577;
var statearr_14580_14621 = state_14577__$1;
(statearr_14580_14621[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14578 === (3))){
var inst_14575 = (state_14577[(2)]);
var state_14577__$1 = state_14577;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14577__$1,inst_14575);
} else {
if((state_val_14578 === (4))){
var inst_14565 = func.call(null);
var inst_14566 = cljs.core.deref.call(null,time_out);
var inst_14567 = cljs.core.async.timeout.call(null,inst_14566);
var state_14577__$1 = (function (){var statearr_14582 = state_14577;
(statearr_14582[(7)] = inst_14565);

return statearr_14582;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14577__$1,(7),inst_14567);
} else {
if((state_val_14578 === (5))){
var state_14577__$1 = state_14577;
var statearr_14583_14622 = state_14577__$1;
(statearr_14583_14622[(2)] = null);

(statearr_14583_14622[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14578 === (6))){
var inst_14573 = (state_14577[(2)]);
var state_14577__$1 = state_14577;
var statearr_14584_14623 = state_14577__$1;
(statearr_14584_14623[(2)] = inst_14573);

(statearr_14584_14623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14578 === (7))){
var inst_14569 = (state_14577[(2)]);
var state_14577__$1 = (function (){var statearr_14585 = state_14577;
(statearr_14585[(8)] = inst_14569);

return statearr_14585;
})();
var statearr_14586_14624 = state_14577__$1;
(statearr_14586_14624[(2)] = null);

(statearr_14586_14624[(1)] = (2));


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
var statearr_14587 = [null,null,null,null,null,null,null,null,null];
(statearr_14587[(0)] = view3d$client$state_machine__11856__auto__);

(statearr_14587[(1)] = (1));

return statearr_14587;
});
var view3d$client$state_machine__11856__auto____1 = (function (state_14577){
while(true){
var ret_value__11857__auto__ = (function (){try{while(true){
var result__11858__auto__ = switch__11855__auto__.call(null,state_14577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11858__auto__;
}
break;
}
}catch (e14588){if((e14588 instanceof Object)){
var ex__11859__auto__ = e14588;
var statearr_14589_14625 = state_14577;
(statearr_14589_14625[(5)] = ex__11859__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14626 = state_14577;
state_14577 = G__14626;
continue;
} else {
return ret_value__11857__auto__;
}
break;
}
});
view3d$client$state_machine__11856__auto__ = function(state_14577){
switch(arguments.length){
case 0:
return view3d$client$state_machine__11856__auto____0.call(this);
case 1:
return view3d$client$state_machine__11856__auto____1.call(this,state_14577);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
view3d$client$state_machine__11856__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__11856__auto____0;
view3d$client$state_machine__11856__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__11856__auto____1;
return view3d$client$state_machine__11856__auto__;
})()
;})(switch__11855__auto__,c__11878__auto__))
})();
var state__11880__auto__ = (function (){var statearr_14590 = f__11879__auto__.call(null);
(statearr_14590[(6)] = c__11878__auto__);

return statearr_14590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11880__auto__);
});})(c__11878__auto__))
);

return c__11878__auto__;
});

view3d.client.repeater_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__11878__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11878__auto__){
return (function (){
var f__11879__auto__ = (function (){var switch__11855__auto__ = ((function (c__11878__auto__){
return (function (state_14605){
var state_val_14606 = (state_14605[(1)]);
if((state_val_14606 === (1))){
var state_14605__$1 = state_14605;
var statearr_14607_14627 = state_14605__$1;
(statearr_14607_14627[(2)] = null);

(statearr_14607_14627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14606 === (2))){
var state_14605__$1 = state_14605;
var statearr_14608_14628 = state_14605__$1;
(statearr_14608_14628[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14606 === (3))){
var inst_14603 = (state_14605[(2)]);
var state_14605__$1 = state_14605;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14605__$1,inst_14603);
} else {
if((state_val_14606 === (4))){
var inst_14593 = func.call(null,param);
var inst_14594 = cljs.core.deref.call(null,time_out);
var inst_14595 = cljs.core.async.timeout.call(null,inst_14594);
var state_14605__$1 = (function (){var statearr_14610 = state_14605;
(statearr_14610[(7)] = inst_14593);

return statearr_14610;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14605__$1,(7),inst_14595);
} else {
if((state_val_14606 === (5))){
var state_14605__$1 = state_14605;
var statearr_14611_14629 = state_14605__$1;
(statearr_14611_14629[(2)] = null);

(statearr_14611_14629[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14606 === (6))){
var inst_14601 = (state_14605[(2)]);
var state_14605__$1 = state_14605;
var statearr_14612_14630 = state_14605__$1;
(statearr_14612_14630[(2)] = inst_14601);

(statearr_14612_14630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14606 === (7))){
var inst_14597 = (state_14605[(2)]);
var state_14605__$1 = (function (){var statearr_14613 = state_14605;
(statearr_14613[(8)] = inst_14597);

return statearr_14613;
})();
var statearr_14614_14631 = state_14605__$1;
(statearr_14614_14631[(2)] = null);

(statearr_14614_14631[(1)] = (2));


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
var statearr_14615 = [null,null,null,null,null,null,null,null,null];
(statearr_14615[(0)] = view3d$client$state_machine__11856__auto__);

(statearr_14615[(1)] = (1));

return statearr_14615;
});
var view3d$client$state_machine__11856__auto____1 = (function (state_14605){
while(true){
var ret_value__11857__auto__ = (function (){try{while(true){
var result__11858__auto__ = switch__11855__auto__.call(null,state_14605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11858__auto__;
}
break;
}
}catch (e14616){if((e14616 instanceof Object)){
var ex__11859__auto__ = e14616;
var statearr_14617_14632 = state_14605;
(statearr_14617_14632[(5)] = ex__11859__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14633 = state_14605;
state_14605 = G__14633;
continue;
} else {
return ret_value__11857__auto__;
}
break;
}
});
view3d$client$state_machine__11856__auto__ = function(state_14605){
switch(arguments.length){
case 0:
return view3d$client$state_machine__11856__auto____0.call(this);
case 1:
return view3d$client$state_machine__11856__auto____1.call(this,state_14605);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
view3d$client$state_machine__11856__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__11856__auto____0;
view3d$client$state_machine__11856__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__11856__auto____1;
return view3d$client$state_machine__11856__auto__;
})()
;})(switch__11855__auto__,c__11878__auto__))
})();
var state__11880__auto__ = (function (){var statearr_14618 = f__11879__auto__.call(null);
(statearr_14618[(6)] = c__11878__auto__);

return statearr_14618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11880__auto__);
});})(c__11878__auto__))
);

return c__11878__auto__;
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

view3d.client.by_id.call(null,"view-val").selectedIndex = (function (){var pred__14634 = cljs.core._EQ_;
var expr__14635 = vie;
if(cljs.core.truth_(pred__14634.call(null,"FORWARD",expr__14635))){
return (0);
} else {
if(cljs.core.truth_(pred__14634.call(null,"BACKWARD",expr__14635))){
return (1);
} else {
if(cljs.core.truth_(pred__14634.call(null,"RIGHT",expr__14635))){
return (2);
} else {
if(cljs.core.truth_(pred__14634.call(null,"LEFT",expr__14635))){
return (3);
} else {
if(cljs.core.truth_(pred__14634.call(null,"UP",expr__14635))){
return (4);
} else {
if(cljs.core.truth_(pred__14634.call(null,"DOWN",expr__14635))){
return (5);
} else {
if(cljs.core.truth_(pred__14634.call(null,"FORWARD-RIGHT",expr__14635))){
return (6);
} else {
if(cljs.core.truth_(pred__14634.call(null,"FORWARD-LEFT",expr__14635))){
return (7);
} else {
if(cljs.core.truth_(pred__14634.call(null,"BACKWARD-RIGHT",expr__14635))){
return (8);
} else {
if(cljs.core.truth_(pred__14634.call(null,"BACKWARD-LEFT",expr__14635))){
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
var vec__14637 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__14637,(0),null);
var lon = cljs.core.nth.call(null,vec__14637,(1),null);
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
var map__14640 = temp__5455__auto__;
var map__14640__$1 = ((((!((map__14640 == null)))?((((map__14640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14640.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14640):map__14640);
var view = cljs.core.get.call(null,map__14640__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var pitch = cljs.core.get.call(null,map__14640__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
var roll = cljs.core.get.call(null,map__14640__$1,new cljs.core.Keyword(null,"roll","roll",11266999));
return view3d.client.camera_control.call(null,view,pitch,roll);
} else {
return null;
}
});
view3d.client.vehicle_hr = (function view3d$client$vehicle_hr(response){
var resp = view3d.client.read_transit.call(null,response);
var temp__5455__auto__ = resp;
if(cljs.core.truth_(temp__5455__auto__)){
var map__14642 = temp__5455__auto__;
var map__14642__$1 = ((((!((map__14642 == null)))?((((map__14642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14642.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14642):map__14642);
var vehicle = cljs.core.get.call(null,map__14642__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
var period = cljs.core.get.call(null,map__14642__$1,new cljs.core.Keyword(null,"period","period",-352129191));
var camera = cljs.core.get.call(null,map__14642__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
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
var temp__5455__auto___14647 = resp.call(null,new cljs.core.Keyword(null,"latlon","latlon",-1285780235));
if(cljs.core.truth_(temp__5455__auto___14647)){
var vec__14644_14648 = temp__5455__auto___14647;
var lat_14649 = cljs.core.nth.call(null,vec__14644_14648,(0),null);
var lon_14650 = cljs.core.nth.call(null,vec__14644_14648,(1),null);
czm.core.terrain_request.call(null,lat_14649,lon_14650);
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
