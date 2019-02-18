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
var map__15712 = response;
var map__15712__$1 = (((((!((map__15712 == null))))?(((((map__15712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15712):map__15712);
var status = cljs.core.get.call(null,map__15712__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__15712__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
view3d.client.CLI_REPL = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.js.empty_state.call(null),new cljs.core.Keyword(null,"value","value",305978217),null], null));
view3d.client.RESPONSE = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
view3d.client.repeater = (function view3d$client$repeater(var_args){
var G__15715 = arguments.length;
switch (G__15715) {
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
var c__15582__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15582__auto__){
return (function (){
var f__15583__auto__ = (function (){var switch__15559__auto__ = ((function (c__15582__auto__){
return (function (state_15729){
var state_val_15730 = (state_15729[(1)]);
if((state_val_15730 === (1))){
var state_15729__$1 = state_15729;
var statearr_15731_15771 = state_15729__$1;
(statearr_15731_15771[(2)] = null);

(statearr_15731_15771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15730 === (2))){
var state_15729__$1 = state_15729;
var statearr_15732_15772 = state_15729__$1;
(statearr_15732_15772[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15730 === (3))){
var inst_15727 = (state_15729[(2)]);
var state_15729__$1 = state_15729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15729__$1,inst_15727);
} else {
if((state_val_15730 === (4))){
var inst_15718 = func.call(null);
var inst_15719 = cljs.core.async.timeout.call(null,time_out);
var state_15729__$1 = (function (){var statearr_15734 = state_15729;
(statearr_15734[(7)] = inst_15718);

return statearr_15734;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15729__$1,(7),inst_15719);
} else {
if((state_val_15730 === (5))){
var state_15729__$1 = state_15729;
var statearr_15735_15773 = state_15729__$1;
(statearr_15735_15773[(2)] = null);

(statearr_15735_15773[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15730 === (6))){
var inst_15725 = (state_15729[(2)]);
var state_15729__$1 = state_15729;
var statearr_15736_15774 = state_15729__$1;
(statearr_15736_15774[(2)] = inst_15725);

(statearr_15736_15774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15730 === (7))){
var inst_15721 = (state_15729[(2)]);
var state_15729__$1 = (function (){var statearr_15737 = state_15729;
(statearr_15737[(8)] = inst_15721);

return statearr_15737;
})();
var statearr_15738_15775 = state_15729__$1;
(statearr_15738_15775[(2)] = null);

(statearr_15738_15775[(1)] = (2));


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
});})(c__15582__auto__))
;
return ((function (switch__15559__auto__,c__15582__auto__){
return (function() {
var view3d$client$state_machine__15560__auto__ = null;
var view3d$client$state_machine__15560__auto____0 = (function (){
var statearr_15739 = [null,null,null,null,null,null,null,null,null];
(statearr_15739[(0)] = view3d$client$state_machine__15560__auto__);

(statearr_15739[(1)] = (1));

return statearr_15739;
});
var view3d$client$state_machine__15560__auto____1 = (function (state_15729){
while(true){
var ret_value__15561__auto__ = (function (){try{while(true){
var result__15562__auto__ = switch__15559__auto__.call(null,state_15729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15562__auto__;
}
break;
}
}catch (e15740){if((e15740 instanceof Object)){
var ex__15563__auto__ = e15740;
var statearr_15741_15776 = state_15729;
(statearr_15741_15776[(5)] = ex__15563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15777 = state_15729;
state_15729 = G__15777;
continue;
} else {
return ret_value__15561__auto__;
}
break;
}
});
view3d$client$state_machine__15560__auto__ = function(state_15729){
switch(arguments.length){
case 0:
return view3d$client$state_machine__15560__auto____0.call(this);
case 1:
return view3d$client$state_machine__15560__auto____1.call(this,state_15729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__15560__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__15560__auto____0;
view3d$client$state_machine__15560__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__15560__auto____1;
return view3d$client$state_machine__15560__auto__;
})()
;})(switch__15559__auto__,c__15582__auto__))
})();
var state__15584__auto__ = (function (){var statearr_15742 = f__15583__auto__.call(null);
(statearr_15742[(6)] = c__15582__auto__);

return statearr_15742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15584__auto__);
});})(c__15582__auto__))
);

return c__15582__auto__;
});

view3d.client.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__15582__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15582__auto__){
return (function (){
var f__15583__auto__ = (function (){var switch__15559__auto__ = ((function (c__15582__auto__){
return (function (state_15756){
var state_val_15757 = (state_15756[(1)]);
if((state_val_15757 === (1))){
var state_15756__$1 = state_15756;
var statearr_15758_15778 = state_15756__$1;
(statearr_15758_15778[(2)] = null);

(statearr_15758_15778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (2))){
var state_15756__$1 = state_15756;
var statearr_15759_15779 = state_15756__$1;
(statearr_15759_15779[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (3))){
var inst_15754 = (state_15756[(2)]);
var state_15756__$1 = state_15756;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15756__$1,inst_15754);
} else {
if((state_val_15757 === (4))){
var inst_15745 = func.call(null,param);
var inst_15746 = cljs.core.async.timeout.call(null,time_out);
var state_15756__$1 = (function (){var statearr_15761 = state_15756;
(statearr_15761[(7)] = inst_15745);

return statearr_15761;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15756__$1,(7),inst_15746);
} else {
if((state_val_15757 === (5))){
var state_15756__$1 = state_15756;
var statearr_15762_15780 = state_15756__$1;
(statearr_15762_15780[(2)] = null);

(statearr_15762_15780[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (6))){
var inst_15752 = (state_15756[(2)]);
var state_15756__$1 = state_15756;
var statearr_15763_15781 = state_15756__$1;
(statearr_15763_15781[(2)] = inst_15752);

(statearr_15763_15781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (7))){
var inst_15748 = (state_15756[(2)]);
var state_15756__$1 = (function (){var statearr_15764 = state_15756;
(statearr_15764[(8)] = inst_15748);

return statearr_15764;
})();
var statearr_15765_15782 = state_15756__$1;
(statearr_15765_15782[(2)] = null);

(statearr_15765_15782[(1)] = (2));


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
});})(c__15582__auto__))
;
return ((function (switch__15559__auto__,c__15582__auto__){
return (function() {
var view3d$client$state_machine__15560__auto__ = null;
var view3d$client$state_machine__15560__auto____0 = (function (){
var statearr_15766 = [null,null,null,null,null,null,null,null,null];
(statearr_15766[(0)] = view3d$client$state_machine__15560__auto__);

(statearr_15766[(1)] = (1));

return statearr_15766;
});
var view3d$client$state_machine__15560__auto____1 = (function (state_15756){
while(true){
var ret_value__15561__auto__ = (function (){try{while(true){
var result__15562__auto__ = switch__15559__auto__.call(null,state_15756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15562__auto__;
}
break;
}
}catch (e15767){if((e15767 instanceof Object)){
var ex__15563__auto__ = e15767;
var statearr_15768_15783 = state_15756;
(statearr_15768_15783[(5)] = ex__15563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15784 = state_15756;
state_15756 = G__15784;
continue;
} else {
return ret_value__15561__auto__;
}
break;
}
});
view3d$client$state_machine__15560__auto__ = function(state_15756){
switch(arguments.length){
case 0:
return view3d$client$state_machine__15560__auto____0.call(this);
case 1:
return view3d$client$state_machine__15560__auto____1.call(this,state_15756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__15560__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__15560__auto____0;
view3d$client$state_machine__15560__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__15560__auto____1;
return view3d$client$state_machine__15560__auto__;
})()
;})(switch__15559__auto__,c__15582__auto__))
})();
var state__15584__auto__ = (function (){var statearr_15769 = f__15583__auto__.call(null);
(statearr_15769[(6)] = c__15582__auto__);

return statearr_15769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15584__auto__);
});})(c__15582__auto__))
);

return c__15582__auto__;
});

view3d.client.repeater.cljs$lang$maxFixedArity = 3;

view3d.client.repeater_BANG_ = (function view3d$client$repeater_BANG_(var_args){
var G__15786 = arguments.length;
switch (G__15786) {
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
var c__15582__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15582__auto__){
return (function (){
var f__15583__auto__ = (function (){var switch__15559__auto__ = ((function (c__15582__auto__){
return (function (state_15801){
var state_val_15802 = (state_15801[(1)]);
if((state_val_15802 === (1))){
var state_15801__$1 = state_15801;
var statearr_15803_15844 = state_15801__$1;
(statearr_15803_15844[(2)] = null);

(statearr_15803_15844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15802 === (2))){
var state_15801__$1 = state_15801;
var statearr_15804_15845 = state_15801__$1;
(statearr_15804_15845[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15802 === (3))){
var inst_15799 = (state_15801[(2)]);
var state_15801__$1 = state_15801;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15801__$1,inst_15799);
} else {
if((state_val_15802 === (4))){
var inst_15789 = func.call(null);
var inst_15790 = cljs.core.deref.call(null,time_out);
var inst_15791 = cljs.core.async.timeout.call(null,inst_15790);
var state_15801__$1 = (function (){var statearr_15806 = state_15801;
(statearr_15806[(7)] = inst_15789);

return statearr_15806;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15801__$1,(7),inst_15791);
} else {
if((state_val_15802 === (5))){
var state_15801__$1 = state_15801;
var statearr_15807_15846 = state_15801__$1;
(statearr_15807_15846[(2)] = null);

(statearr_15807_15846[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15802 === (6))){
var inst_15797 = (state_15801[(2)]);
var state_15801__$1 = state_15801;
var statearr_15808_15847 = state_15801__$1;
(statearr_15808_15847[(2)] = inst_15797);

(statearr_15808_15847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15802 === (7))){
var inst_15793 = (state_15801[(2)]);
var state_15801__$1 = (function (){var statearr_15809 = state_15801;
(statearr_15809[(8)] = inst_15793);

return statearr_15809;
})();
var statearr_15810_15848 = state_15801__$1;
(statearr_15810_15848[(2)] = null);

(statearr_15810_15848[(1)] = (2));


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
});})(c__15582__auto__))
;
return ((function (switch__15559__auto__,c__15582__auto__){
return (function() {
var view3d$client$state_machine__15560__auto__ = null;
var view3d$client$state_machine__15560__auto____0 = (function (){
var statearr_15811 = [null,null,null,null,null,null,null,null,null];
(statearr_15811[(0)] = view3d$client$state_machine__15560__auto__);

(statearr_15811[(1)] = (1));

return statearr_15811;
});
var view3d$client$state_machine__15560__auto____1 = (function (state_15801){
while(true){
var ret_value__15561__auto__ = (function (){try{while(true){
var result__15562__auto__ = switch__15559__auto__.call(null,state_15801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15562__auto__;
}
break;
}
}catch (e15812){if((e15812 instanceof Object)){
var ex__15563__auto__ = e15812;
var statearr_15813_15849 = state_15801;
(statearr_15813_15849[(5)] = ex__15563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15850 = state_15801;
state_15801 = G__15850;
continue;
} else {
return ret_value__15561__auto__;
}
break;
}
});
view3d$client$state_machine__15560__auto__ = function(state_15801){
switch(arguments.length){
case 0:
return view3d$client$state_machine__15560__auto____0.call(this);
case 1:
return view3d$client$state_machine__15560__auto____1.call(this,state_15801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__15560__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__15560__auto____0;
view3d$client$state_machine__15560__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__15560__auto____1;
return view3d$client$state_machine__15560__auto__;
})()
;})(switch__15559__auto__,c__15582__auto__))
})();
var state__15584__auto__ = (function (){var statearr_15814 = f__15583__auto__.call(null);
(statearr_15814[(6)] = c__15582__auto__);

return statearr_15814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15584__auto__);
});})(c__15582__auto__))
);

return c__15582__auto__;
});

view3d.client.repeater_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__15582__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15582__auto__){
return (function (){
var f__15583__auto__ = (function (){var switch__15559__auto__ = ((function (c__15582__auto__){
return (function (state_15829){
var state_val_15830 = (state_15829[(1)]);
if((state_val_15830 === (1))){
var state_15829__$1 = state_15829;
var statearr_15831_15851 = state_15829__$1;
(statearr_15831_15851[(2)] = null);

(statearr_15831_15851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (2))){
var state_15829__$1 = state_15829;
var statearr_15832_15852 = state_15829__$1;
(statearr_15832_15852[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (3))){
var inst_15827 = (state_15829[(2)]);
var state_15829__$1 = state_15829;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15829__$1,inst_15827);
} else {
if((state_val_15830 === (4))){
var inst_15817 = func.call(null,param);
var inst_15818 = cljs.core.deref.call(null,time_out);
var inst_15819 = cljs.core.async.timeout.call(null,inst_15818);
var state_15829__$1 = (function (){var statearr_15834 = state_15829;
(statearr_15834[(7)] = inst_15817);

return statearr_15834;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15829__$1,(7),inst_15819);
} else {
if((state_val_15830 === (5))){
var state_15829__$1 = state_15829;
var statearr_15835_15853 = state_15829__$1;
(statearr_15835_15853[(2)] = null);

(statearr_15835_15853[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (6))){
var inst_15825 = (state_15829[(2)]);
var state_15829__$1 = state_15829;
var statearr_15836_15854 = state_15829__$1;
(statearr_15836_15854[(2)] = inst_15825);

(statearr_15836_15854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (7))){
var inst_15821 = (state_15829[(2)]);
var state_15829__$1 = (function (){var statearr_15837 = state_15829;
(statearr_15837[(8)] = inst_15821);

return statearr_15837;
})();
var statearr_15838_15855 = state_15829__$1;
(statearr_15838_15855[(2)] = null);

(statearr_15838_15855[(1)] = (2));


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
});})(c__15582__auto__))
;
return ((function (switch__15559__auto__,c__15582__auto__){
return (function() {
var view3d$client$state_machine__15560__auto__ = null;
var view3d$client$state_machine__15560__auto____0 = (function (){
var statearr_15839 = [null,null,null,null,null,null,null,null,null];
(statearr_15839[(0)] = view3d$client$state_machine__15560__auto__);

(statearr_15839[(1)] = (1));

return statearr_15839;
});
var view3d$client$state_machine__15560__auto____1 = (function (state_15829){
while(true){
var ret_value__15561__auto__ = (function (){try{while(true){
var result__15562__auto__ = switch__15559__auto__.call(null,state_15829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15562__auto__;
}
break;
}
}catch (e15840){if((e15840 instanceof Object)){
var ex__15563__auto__ = e15840;
var statearr_15841_15856 = state_15829;
(statearr_15841_15856[(5)] = ex__15563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15857 = state_15829;
state_15829 = G__15857;
continue;
} else {
return ret_value__15561__auto__;
}
break;
}
});
view3d$client$state_machine__15560__auto__ = function(state_15829){
switch(arguments.length){
case 0:
return view3d$client$state_machine__15560__auto____0.call(this);
case 1:
return view3d$client$state_machine__15560__auto____1.call(this,state_15829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__15560__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__15560__auto____0;
view3d$client$state_machine__15560__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__15560__auto____1;
return view3d$client$state_machine__15560__auto__;
})()
;})(switch__15559__auto__,c__15582__auto__))
})();
var state__15584__auto__ = (function (){var statearr_15842 = f__15583__auto__.call(null);
(statearr_15842[(6)] = c__15582__auto__);

return statearr_15842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15584__auto__);
});})(c__15582__auto__))
);

return c__15582__auto__;
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
}catch (e15858){if((e15858 instanceof Error)){
var e = e15858;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e15858;

}
}})()], null),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));

return cljs.core.vreset_BANG_.call(null,view3d.client.RESPONSE,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
});
view3d.client.handle_request = (function view3d$client$handle_request(request){
var temp__5718__auto___15865 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5718__auto___15865)){
var vie_15866 = temp__5718__auto___15865;
view3d.client.view.call(null,vie_15866);
} else {
}

var temp__5718__auto___15867 = new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5718__auto___15867)){
var pit_15868 = temp__5718__auto___15867;
view3d.client.pitch.call(null,pit_15868);
} else {
}

var temp__5718__auto___15869 = new cljs.core.Keyword(null,"roll","roll",11266999).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5718__auto___15869)){
var rol_15870 = temp__5718__auto___15869;
view3d.client.roll.call(null,rol_15870);
} else {
}

var temp__5718__auto___15871 = new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5718__auto___15871)){
var vec__15859_15872 = temp__5718__auto___15871;
var lat_15873 = cljs.core.nth.call(null,vec__15859_15872,(0),null);
var lon_15874 = cljs.core.nth.call(null,vec__15859_15872,(1),null);
var vec__15862_15875 = czm.core.sample_height.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [geo.calc.radians.call(null,lat_15873),geo.calc.radians.call(null,lon_15874)], null),(0));
var __15876 = cljs.core.nth.call(null,vec__15862_15875,(0),null);
var __15877__$1 = cljs.core.nth.call(null,vec__15862_15875,(1),null);
var sh_15878 = cljs.core.nth.call(null,vec__15862_15875,(2),null);
cljs.core._vreset_BANG_.call(null,view3d.client.RESPONSE,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.RESPONSE),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(sh_15878 | (0))));
} else {
}

return view3d.client.response_request.call(null);
});
view3d.client.handle_vehicle = (function view3d$client$handle_vehicle(vehicle){
var vec__15879 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__15879,(0),null);
var lon = cljs.core.nth.call(null,vec__15879,(1),null);
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
var temp__5718__auto___15882 = new cljs.core.Keyword(null,"vehicle","vehicle",1670166968).cljs$core$IFn$_invoke$arity$1(resp);
if(cljs.core.truth_(temp__5718__auto___15882)){
var vehicle_15883 = temp__5718__auto___15882;
view3d.client.handle_vehicle.call(null,vehicle_15883);
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
}catch (e15884){if((e15884 instanceof Error)){
var e = e15884;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e15884;

}
}})()], null),new cljs.core.Keyword(null,"handler","handler",-195596612),hand,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));

return setTimeout(view3d.client.run_repl,(1000));
});
cljs.core.enable_console_print_BANG_.call(null);
window.onload = view3d.client.on_load.call(null);
view3d.client.run_repl.call(null);

//# sourceMappingURL=client.js.map
