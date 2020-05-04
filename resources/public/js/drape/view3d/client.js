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
var map__26528 = response;
var map__26528__$1 = (((((!((map__26528 == null))))?(((((map__26528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26528):map__26528);
var status = cljs.core.get.call(null,map__26528__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__26528__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
view3d.client.CLI_REPL = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.js.empty_state.call(null),new cljs.core.Keyword(null,"value","value",305978217),null], null));
view3d.client.RESPONSE = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
view3d.client.repeater = (function view3d$client$repeater(var_args){
var G__26531 = arguments.length;
switch (G__26531) {
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
var c__24441__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto__){
return (function (){
var f__24442__auto__ = (function (){var switch__24346__auto__ = ((function (c__24441__auto__){
return (function (state_26545){
var state_val_26546 = (state_26545[(1)]);
if((state_val_26546 === (1))){
var state_26545__$1 = state_26545;
var statearr_26547_26587 = state_26545__$1;
(statearr_26547_26587[(2)] = null);

(statearr_26547_26587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26546 === (2))){
var state_26545__$1 = state_26545;
var statearr_26548_26588 = state_26545__$1;
(statearr_26548_26588[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26546 === (3))){
var inst_26543 = (state_26545[(2)]);
var state_26545__$1 = state_26545;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26545__$1,inst_26543);
} else {
if((state_val_26546 === (4))){
var inst_26534 = func.call(null);
var inst_26535 = cljs.core.async.timeout.call(null,time_out);
var state_26545__$1 = (function (){var statearr_26550 = state_26545;
(statearr_26550[(7)] = inst_26534);

return statearr_26550;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26545__$1,(7),inst_26535);
} else {
if((state_val_26546 === (5))){
var state_26545__$1 = state_26545;
var statearr_26551_26589 = state_26545__$1;
(statearr_26551_26589[(2)] = null);

(statearr_26551_26589[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26546 === (6))){
var inst_26541 = (state_26545[(2)]);
var state_26545__$1 = state_26545;
var statearr_26552_26590 = state_26545__$1;
(statearr_26552_26590[(2)] = inst_26541);

(statearr_26552_26590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26546 === (7))){
var inst_26537 = (state_26545[(2)]);
var state_26545__$1 = (function (){var statearr_26553 = state_26545;
(statearr_26553[(8)] = inst_26537);

return statearr_26553;
})();
var statearr_26554_26591 = state_26545__$1;
(statearr_26554_26591[(2)] = null);

(statearr_26554_26591[(1)] = (2));


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
});})(c__24441__auto__))
;
return ((function (switch__24346__auto__,c__24441__auto__){
return (function() {
var view3d$client$state_machine__24347__auto__ = null;
var view3d$client$state_machine__24347__auto____0 = (function (){
var statearr_26555 = [null,null,null,null,null,null,null,null,null];
(statearr_26555[(0)] = view3d$client$state_machine__24347__auto__);

(statearr_26555[(1)] = (1));

return statearr_26555;
});
var view3d$client$state_machine__24347__auto____1 = (function (state_26545){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_26545);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e26556){if((e26556 instanceof Object)){
var ex__24350__auto__ = e26556;
var statearr_26557_26592 = state_26545;
(statearr_26557_26592[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26593 = state_26545;
state_26545 = G__26593;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
view3d$client$state_machine__24347__auto__ = function(state_26545){
switch(arguments.length){
case 0:
return view3d$client$state_machine__24347__auto____0.call(this);
case 1:
return view3d$client$state_machine__24347__auto____1.call(this,state_26545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__24347__auto____0;
view3d$client$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__24347__auto____1;
return view3d$client$state_machine__24347__auto__;
})()
;})(switch__24346__auto__,c__24441__auto__))
})();
var state__24443__auto__ = (function (){var statearr_26558 = f__24442__auto__.call(null);
(statearr_26558[(6)] = c__24441__auto__);

return statearr_26558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto__))
);

return c__24441__auto__;
});

view3d.client.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__24441__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto__){
return (function (){
var f__24442__auto__ = (function (){var switch__24346__auto__ = ((function (c__24441__auto__){
return (function (state_26572){
var state_val_26573 = (state_26572[(1)]);
if((state_val_26573 === (1))){
var state_26572__$1 = state_26572;
var statearr_26574_26594 = state_26572__$1;
(statearr_26574_26594[(2)] = null);

(statearr_26574_26594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26573 === (2))){
var state_26572__$1 = state_26572;
var statearr_26575_26595 = state_26572__$1;
(statearr_26575_26595[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26573 === (3))){
var inst_26570 = (state_26572[(2)]);
var state_26572__$1 = state_26572;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26572__$1,inst_26570);
} else {
if((state_val_26573 === (4))){
var inst_26561 = func.call(null,param);
var inst_26562 = cljs.core.async.timeout.call(null,time_out);
var state_26572__$1 = (function (){var statearr_26577 = state_26572;
(statearr_26577[(7)] = inst_26561);

return statearr_26577;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26572__$1,(7),inst_26562);
} else {
if((state_val_26573 === (5))){
var state_26572__$1 = state_26572;
var statearr_26578_26596 = state_26572__$1;
(statearr_26578_26596[(2)] = null);

(statearr_26578_26596[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26573 === (6))){
var inst_26568 = (state_26572[(2)]);
var state_26572__$1 = state_26572;
var statearr_26579_26597 = state_26572__$1;
(statearr_26579_26597[(2)] = inst_26568);

(statearr_26579_26597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26573 === (7))){
var inst_26564 = (state_26572[(2)]);
var state_26572__$1 = (function (){var statearr_26580 = state_26572;
(statearr_26580[(8)] = inst_26564);

return statearr_26580;
})();
var statearr_26581_26598 = state_26572__$1;
(statearr_26581_26598[(2)] = null);

(statearr_26581_26598[(1)] = (2));


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
});})(c__24441__auto__))
;
return ((function (switch__24346__auto__,c__24441__auto__){
return (function() {
var view3d$client$state_machine__24347__auto__ = null;
var view3d$client$state_machine__24347__auto____0 = (function (){
var statearr_26582 = [null,null,null,null,null,null,null,null,null];
(statearr_26582[(0)] = view3d$client$state_machine__24347__auto__);

(statearr_26582[(1)] = (1));

return statearr_26582;
});
var view3d$client$state_machine__24347__auto____1 = (function (state_26572){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_26572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e26583){if((e26583 instanceof Object)){
var ex__24350__auto__ = e26583;
var statearr_26584_26599 = state_26572;
(statearr_26584_26599[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26600 = state_26572;
state_26572 = G__26600;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
view3d$client$state_machine__24347__auto__ = function(state_26572){
switch(arguments.length){
case 0:
return view3d$client$state_machine__24347__auto____0.call(this);
case 1:
return view3d$client$state_machine__24347__auto____1.call(this,state_26572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__24347__auto____0;
view3d$client$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__24347__auto____1;
return view3d$client$state_machine__24347__auto__;
})()
;})(switch__24346__auto__,c__24441__auto__))
})();
var state__24443__auto__ = (function (){var statearr_26585 = f__24442__auto__.call(null);
(statearr_26585[(6)] = c__24441__auto__);

return statearr_26585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto__))
);

return c__24441__auto__;
});

view3d.client.repeater.cljs$lang$maxFixedArity = 3;

view3d.client.repeater_BANG_ = (function view3d$client$repeater_BANG_(var_args){
var G__26602 = arguments.length;
switch (G__26602) {
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
var c__24441__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto__){
return (function (){
var f__24442__auto__ = (function (){var switch__24346__auto__ = ((function (c__24441__auto__){
return (function (state_26617){
var state_val_26618 = (state_26617[(1)]);
if((state_val_26618 === (1))){
var state_26617__$1 = state_26617;
var statearr_26619_26660 = state_26617__$1;
(statearr_26619_26660[(2)] = null);

(statearr_26619_26660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26618 === (2))){
var state_26617__$1 = state_26617;
var statearr_26620_26661 = state_26617__$1;
(statearr_26620_26661[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26618 === (3))){
var inst_26615 = (state_26617[(2)]);
var state_26617__$1 = state_26617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26617__$1,inst_26615);
} else {
if((state_val_26618 === (4))){
var inst_26605 = func.call(null);
var inst_26606 = cljs.core.deref.call(null,time_out);
var inst_26607 = cljs.core.async.timeout.call(null,inst_26606);
var state_26617__$1 = (function (){var statearr_26622 = state_26617;
(statearr_26622[(7)] = inst_26605);

return statearr_26622;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26617__$1,(7),inst_26607);
} else {
if((state_val_26618 === (5))){
var state_26617__$1 = state_26617;
var statearr_26623_26662 = state_26617__$1;
(statearr_26623_26662[(2)] = null);

(statearr_26623_26662[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26618 === (6))){
var inst_26613 = (state_26617[(2)]);
var state_26617__$1 = state_26617;
var statearr_26624_26663 = state_26617__$1;
(statearr_26624_26663[(2)] = inst_26613);

(statearr_26624_26663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26618 === (7))){
var inst_26609 = (state_26617[(2)]);
var state_26617__$1 = (function (){var statearr_26625 = state_26617;
(statearr_26625[(8)] = inst_26609);

return statearr_26625;
})();
var statearr_26626_26664 = state_26617__$1;
(statearr_26626_26664[(2)] = null);

(statearr_26626_26664[(1)] = (2));


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
});})(c__24441__auto__))
;
return ((function (switch__24346__auto__,c__24441__auto__){
return (function() {
var view3d$client$state_machine__24347__auto__ = null;
var view3d$client$state_machine__24347__auto____0 = (function (){
var statearr_26627 = [null,null,null,null,null,null,null,null,null];
(statearr_26627[(0)] = view3d$client$state_machine__24347__auto__);

(statearr_26627[(1)] = (1));

return statearr_26627;
});
var view3d$client$state_machine__24347__auto____1 = (function (state_26617){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_26617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e26628){if((e26628 instanceof Object)){
var ex__24350__auto__ = e26628;
var statearr_26629_26665 = state_26617;
(statearr_26629_26665[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26666 = state_26617;
state_26617 = G__26666;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
view3d$client$state_machine__24347__auto__ = function(state_26617){
switch(arguments.length){
case 0:
return view3d$client$state_machine__24347__auto____0.call(this);
case 1:
return view3d$client$state_machine__24347__auto____1.call(this,state_26617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__24347__auto____0;
view3d$client$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__24347__auto____1;
return view3d$client$state_machine__24347__auto__;
})()
;})(switch__24346__auto__,c__24441__auto__))
})();
var state__24443__auto__ = (function (){var statearr_26630 = f__24442__auto__.call(null);
(statearr_26630[(6)] = c__24441__auto__);

return statearr_26630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto__))
);

return c__24441__auto__;
});

view3d.client.repeater_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__24441__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto__){
return (function (){
var f__24442__auto__ = (function (){var switch__24346__auto__ = ((function (c__24441__auto__){
return (function (state_26645){
var state_val_26646 = (state_26645[(1)]);
if((state_val_26646 === (1))){
var state_26645__$1 = state_26645;
var statearr_26647_26667 = state_26645__$1;
(statearr_26647_26667[(2)] = null);

(statearr_26647_26667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26646 === (2))){
var state_26645__$1 = state_26645;
var statearr_26648_26668 = state_26645__$1;
(statearr_26648_26668[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26646 === (3))){
var inst_26643 = (state_26645[(2)]);
var state_26645__$1 = state_26645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26645__$1,inst_26643);
} else {
if((state_val_26646 === (4))){
var inst_26633 = func.call(null,param);
var inst_26634 = cljs.core.deref.call(null,time_out);
var inst_26635 = cljs.core.async.timeout.call(null,inst_26634);
var state_26645__$1 = (function (){var statearr_26650 = state_26645;
(statearr_26650[(7)] = inst_26633);

return statearr_26650;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26645__$1,(7),inst_26635);
} else {
if((state_val_26646 === (5))){
var state_26645__$1 = state_26645;
var statearr_26651_26669 = state_26645__$1;
(statearr_26651_26669[(2)] = null);

(statearr_26651_26669[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26646 === (6))){
var inst_26641 = (state_26645[(2)]);
var state_26645__$1 = state_26645;
var statearr_26652_26670 = state_26645__$1;
(statearr_26652_26670[(2)] = inst_26641);

(statearr_26652_26670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26646 === (7))){
var inst_26637 = (state_26645[(2)]);
var state_26645__$1 = (function (){var statearr_26653 = state_26645;
(statearr_26653[(8)] = inst_26637);

return statearr_26653;
})();
var statearr_26654_26671 = state_26645__$1;
(statearr_26654_26671[(2)] = null);

(statearr_26654_26671[(1)] = (2));


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
});})(c__24441__auto__))
;
return ((function (switch__24346__auto__,c__24441__auto__){
return (function() {
var view3d$client$state_machine__24347__auto__ = null;
var view3d$client$state_machine__24347__auto____0 = (function (){
var statearr_26655 = [null,null,null,null,null,null,null,null,null];
(statearr_26655[(0)] = view3d$client$state_machine__24347__auto__);

(statearr_26655[(1)] = (1));

return statearr_26655;
});
var view3d$client$state_machine__24347__auto____1 = (function (state_26645){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_26645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e26656){if((e26656 instanceof Object)){
var ex__24350__auto__ = e26656;
var statearr_26657_26672 = state_26645;
(statearr_26657_26672[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26673 = state_26645;
state_26645 = G__26673;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
view3d$client$state_machine__24347__auto__ = function(state_26645){
switch(arguments.length){
case 0:
return view3d$client$state_machine__24347__auto____0.call(this);
case 1:
return view3d$client$state_machine__24347__auto____1.call(this,state_26645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__24347__auto____0;
view3d$client$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__24347__auto____1;
return view3d$client$state_machine__24347__auto__;
})()
;})(switch__24346__auto__,c__24441__auto__))
})();
var state__24443__auto__ = (function (){var statearr_26658 = f__24442__auto__.call(null);
(statearr_26658[(6)] = c__24441__auto__);

return statearr_26658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto__))
);

return c__24441__auto__;
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
}catch (e26674){if((e26674 instanceof Error)){
var e = e26674;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e26674;

}
}})()], null),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));

return cljs.core.vreset_BANG_.call(null,view3d.client.RESPONSE,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
});
view3d.client.handle_request = (function view3d$client$handle_request(request){
var temp__5733__auto___26681 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___26681)){
var vie_26682 = temp__5733__auto___26681;
view3d.client.view.call(null,vie_26682);
} else {
}

var temp__5733__auto___26683 = new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___26683)){
var pit_26684 = temp__5733__auto___26683;
view3d.client.pitch.call(null,pit_26684);
} else {
}

var temp__5733__auto___26685 = new cljs.core.Keyword(null,"roll","roll",11266999).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___26685)){
var rol_26686 = temp__5733__auto___26685;
view3d.client.roll.call(null,rol_26686);
} else {
}

var temp__5733__auto___26687 = new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___26687)){
var vec__26675_26688 = temp__5733__auto___26687;
var lat_26689 = cljs.core.nth.call(null,vec__26675_26688,(0),null);
var lon_26690 = cljs.core.nth.call(null,vec__26675_26688,(1),null);
var vec__26678_26691 = czm.core.sample_height.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [geo.calc.radians.call(null,lat_26689),geo.calc.radians.call(null,lon_26690)], null),(0));
var __26692 = cljs.core.nth.call(null,vec__26678_26691,(0),null);
var __26693__$1 = cljs.core.nth.call(null,vec__26678_26691,(1),null);
var sh_26694 = cljs.core.nth.call(null,vec__26678_26691,(2),null);
cljs.core._vreset_BANG_.call(null,view3d.client.RESPONSE,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.RESPONSE),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(sh_26694 | (0))));
} else {
}

return view3d.client.response_request.call(null);
});
view3d.client.handle_vehicle = (function view3d$client$handle_vehicle(vehicle){
var vec__26695 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__26695,(0),null);
var lon = cljs.core.nth.call(null,vec__26695,(1),null);
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
var temp__5733__auto___26698 = new cljs.core.Keyword(null,"vehicle","vehicle",1670166968).cljs$core$IFn$_invoke$arity$1(resp);
if(cljs.core.truth_(temp__5733__auto___26698)){
var vehicle_26699 = temp__5733__auto___26698;
view3d.client.handle_vehicle.call(null,vehicle_26699);
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
}catch (e26700){if((e26700 instanceof Error)){
var e = e26700;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e26700;

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
