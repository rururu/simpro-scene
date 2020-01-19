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
var map__15748 = response;
var map__15748__$1 = (((((!((map__15748 == null))))?(((((map__15748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15748):map__15748);
var status = cljs.core.get.call(null,map__15748__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__15748__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
view3d.client.CLI_REPL = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.js.empty_state.call(null),new cljs.core.Keyword(null,"value","value",305978217),null], null));
view3d.client.RESPONSE = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
view3d.client.repeater = (function view3d$client$repeater(var_args){
var G__15751 = arguments.length;
switch (G__15751) {
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
var c__13747__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13747__auto__){
return (function (){
var f__13748__auto__ = (function (){var switch__13652__auto__ = ((function (c__13747__auto__){
return (function (state_15765){
var state_val_15766 = (state_15765[(1)]);
if((state_val_15766 === (1))){
var state_15765__$1 = state_15765;
var statearr_15767_15807 = state_15765__$1;
(statearr_15767_15807[(2)] = null);

(statearr_15767_15807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15766 === (2))){
var state_15765__$1 = state_15765;
var statearr_15768_15808 = state_15765__$1;
(statearr_15768_15808[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15766 === (3))){
var inst_15763 = (state_15765[(2)]);
var state_15765__$1 = state_15765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15765__$1,inst_15763);
} else {
if((state_val_15766 === (4))){
var inst_15754 = func.call(null);
var inst_15755 = cljs.core.async.timeout.call(null,time_out);
var state_15765__$1 = (function (){var statearr_15770 = state_15765;
(statearr_15770[(7)] = inst_15754);

return statearr_15770;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15765__$1,(7),inst_15755);
} else {
if((state_val_15766 === (5))){
var state_15765__$1 = state_15765;
var statearr_15771_15809 = state_15765__$1;
(statearr_15771_15809[(2)] = null);

(statearr_15771_15809[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15766 === (6))){
var inst_15761 = (state_15765[(2)]);
var state_15765__$1 = state_15765;
var statearr_15772_15810 = state_15765__$1;
(statearr_15772_15810[(2)] = inst_15761);

(statearr_15772_15810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15766 === (7))){
var inst_15757 = (state_15765[(2)]);
var state_15765__$1 = (function (){var statearr_15773 = state_15765;
(statearr_15773[(8)] = inst_15757);

return statearr_15773;
})();
var statearr_15774_15811 = state_15765__$1;
(statearr_15774_15811[(2)] = null);

(statearr_15774_15811[(1)] = (2));


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
});})(c__13747__auto__))
;
return ((function (switch__13652__auto__,c__13747__auto__){
return (function() {
var view3d$client$state_machine__13653__auto__ = null;
var view3d$client$state_machine__13653__auto____0 = (function (){
var statearr_15775 = [null,null,null,null,null,null,null,null,null];
(statearr_15775[(0)] = view3d$client$state_machine__13653__auto__);

(statearr_15775[(1)] = (1));

return statearr_15775;
});
var view3d$client$state_machine__13653__auto____1 = (function (state_15765){
while(true){
var ret_value__13654__auto__ = (function (){try{while(true){
var result__13655__auto__ = switch__13652__auto__.call(null,state_15765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13655__auto__;
}
break;
}
}catch (e15776){if((e15776 instanceof Object)){
var ex__13656__auto__ = e15776;
var statearr_15777_15812 = state_15765;
(statearr_15777_15812[(5)] = ex__13656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15813 = state_15765;
state_15765 = G__15813;
continue;
} else {
return ret_value__13654__auto__;
}
break;
}
});
view3d$client$state_machine__13653__auto__ = function(state_15765){
switch(arguments.length){
case 0:
return view3d$client$state_machine__13653__auto____0.call(this);
case 1:
return view3d$client$state_machine__13653__auto____1.call(this,state_15765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__13653__auto____0;
view3d$client$state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__13653__auto____1;
return view3d$client$state_machine__13653__auto__;
})()
;})(switch__13652__auto__,c__13747__auto__))
})();
var state__13749__auto__ = (function (){var statearr_15778 = f__13748__auto__.call(null);
(statearr_15778[(6)] = c__13747__auto__);

return statearr_15778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13749__auto__);
});})(c__13747__auto__))
);

return c__13747__auto__;
});

view3d.client.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__13747__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13747__auto__){
return (function (){
var f__13748__auto__ = (function (){var switch__13652__auto__ = ((function (c__13747__auto__){
return (function (state_15792){
var state_val_15793 = (state_15792[(1)]);
if((state_val_15793 === (1))){
var state_15792__$1 = state_15792;
var statearr_15794_15814 = state_15792__$1;
(statearr_15794_15814[(2)] = null);

(statearr_15794_15814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15793 === (2))){
var state_15792__$1 = state_15792;
var statearr_15795_15815 = state_15792__$1;
(statearr_15795_15815[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15793 === (3))){
var inst_15790 = (state_15792[(2)]);
var state_15792__$1 = state_15792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15792__$1,inst_15790);
} else {
if((state_val_15793 === (4))){
var inst_15781 = func.call(null,param);
var inst_15782 = cljs.core.async.timeout.call(null,time_out);
var state_15792__$1 = (function (){var statearr_15797 = state_15792;
(statearr_15797[(7)] = inst_15781);

return statearr_15797;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15792__$1,(7),inst_15782);
} else {
if((state_val_15793 === (5))){
var state_15792__$1 = state_15792;
var statearr_15798_15816 = state_15792__$1;
(statearr_15798_15816[(2)] = null);

(statearr_15798_15816[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15793 === (6))){
var inst_15788 = (state_15792[(2)]);
var state_15792__$1 = state_15792;
var statearr_15799_15817 = state_15792__$1;
(statearr_15799_15817[(2)] = inst_15788);

(statearr_15799_15817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15793 === (7))){
var inst_15784 = (state_15792[(2)]);
var state_15792__$1 = (function (){var statearr_15800 = state_15792;
(statearr_15800[(8)] = inst_15784);

return statearr_15800;
})();
var statearr_15801_15818 = state_15792__$1;
(statearr_15801_15818[(2)] = null);

(statearr_15801_15818[(1)] = (2));


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
});})(c__13747__auto__))
;
return ((function (switch__13652__auto__,c__13747__auto__){
return (function() {
var view3d$client$state_machine__13653__auto__ = null;
var view3d$client$state_machine__13653__auto____0 = (function (){
var statearr_15802 = [null,null,null,null,null,null,null,null,null];
(statearr_15802[(0)] = view3d$client$state_machine__13653__auto__);

(statearr_15802[(1)] = (1));

return statearr_15802;
});
var view3d$client$state_machine__13653__auto____1 = (function (state_15792){
while(true){
var ret_value__13654__auto__ = (function (){try{while(true){
var result__13655__auto__ = switch__13652__auto__.call(null,state_15792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13655__auto__;
}
break;
}
}catch (e15803){if((e15803 instanceof Object)){
var ex__13656__auto__ = e15803;
var statearr_15804_15819 = state_15792;
(statearr_15804_15819[(5)] = ex__13656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15820 = state_15792;
state_15792 = G__15820;
continue;
} else {
return ret_value__13654__auto__;
}
break;
}
});
view3d$client$state_machine__13653__auto__ = function(state_15792){
switch(arguments.length){
case 0:
return view3d$client$state_machine__13653__auto____0.call(this);
case 1:
return view3d$client$state_machine__13653__auto____1.call(this,state_15792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__13653__auto____0;
view3d$client$state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__13653__auto____1;
return view3d$client$state_machine__13653__auto__;
})()
;})(switch__13652__auto__,c__13747__auto__))
})();
var state__13749__auto__ = (function (){var statearr_15805 = f__13748__auto__.call(null);
(statearr_15805[(6)] = c__13747__auto__);

return statearr_15805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13749__auto__);
});})(c__13747__auto__))
);

return c__13747__auto__;
});

view3d.client.repeater.cljs$lang$maxFixedArity = 3;

view3d.client.repeater_BANG_ = (function view3d$client$repeater_BANG_(var_args){
var G__15822 = arguments.length;
switch (G__15822) {
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
var c__13747__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13747__auto__){
return (function (){
var f__13748__auto__ = (function (){var switch__13652__auto__ = ((function (c__13747__auto__){
return (function (state_15837){
var state_val_15838 = (state_15837[(1)]);
if((state_val_15838 === (1))){
var state_15837__$1 = state_15837;
var statearr_15839_15880 = state_15837__$1;
(statearr_15839_15880[(2)] = null);

(statearr_15839_15880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15838 === (2))){
var state_15837__$1 = state_15837;
var statearr_15840_15881 = state_15837__$1;
(statearr_15840_15881[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15838 === (3))){
var inst_15835 = (state_15837[(2)]);
var state_15837__$1 = state_15837;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15837__$1,inst_15835);
} else {
if((state_val_15838 === (4))){
var inst_15825 = func.call(null);
var inst_15826 = cljs.core.deref.call(null,time_out);
var inst_15827 = cljs.core.async.timeout.call(null,inst_15826);
var state_15837__$1 = (function (){var statearr_15842 = state_15837;
(statearr_15842[(7)] = inst_15825);

return statearr_15842;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15837__$1,(7),inst_15827);
} else {
if((state_val_15838 === (5))){
var state_15837__$1 = state_15837;
var statearr_15843_15882 = state_15837__$1;
(statearr_15843_15882[(2)] = null);

(statearr_15843_15882[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15838 === (6))){
var inst_15833 = (state_15837[(2)]);
var state_15837__$1 = state_15837;
var statearr_15844_15883 = state_15837__$1;
(statearr_15844_15883[(2)] = inst_15833);

(statearr_15844_15883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15838 === (7))){
var inst_15829 = (state_15837[(2)]);
var state_15837__$1 = (function (){var statearr_15845 = state_15837;
(statearr_15845[(8)] = inst_15829);

return statearr_15845;
})();
var statearr_15846_15884 = state_15837__$1;
(statearr_15846_15884[(2)] = null);

(statearr_15846_15884[(1)] = (2));


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
});})(c__13747__auto__))
;
return ((function (switch__13652__auto__,c__13747__auto__){
return (function() {
var view3d$client$state_machine__13653__auto__ = null;
var view3d$client$state_machine__13653__auto____0 = (function (){
var statearr_15847 = [null,null,null,null,null,null,null,null,null];
(statearr_15847[(0)] = view3d$client$state_machine__13653__auto__);

(statearr_15847[(1)] = (1));

return statearr_15847;
});
var view3d$client$state_machine__13653__auto____1 = (function (state_15837){
while(true){
var ret_value__13654__auto__ = (function (){try{while(true){
var result__13655__auto__ = switch__13652__auto__.call(null,state_15837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13655__auto__;
}
break;
}
}catch (e15848){if((e15848 instanceof Object)){
var ex__13656__auto__ = e15848;
var statearr_15849_15885 = state_15837;
(statearr_15849_15885[(5)] = ex__13656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15848;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15886 = state_15837;
state_15837 = G__15886;
continue;
} else {
return ret_value__13654__auto__;
}
break;
}
});
view3d$client$state_machine__13653__auto__ = function(state_15837){
switch(arguments.length){
case 0:
return view3d$client$state_machine__13653__auto____0.call(this);
case 1:
return view3d$client$state_machine__13653__auto____1.call(this,state_15837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__13653__auto____0;
view3d$client$state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__13653__auto____1;
return view3d$client$state_machine__13653__auto__;
})()
;})(switch__13652__auto__,c__13747__auto__))
})();
var state__13749__auto__ = (function (){var statearr_15850 = f__13748__auto__.call(null);
(statearr_15850[(6)] = c__13747__auto__);

return statearr_15850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13749__auto__);
});})(c__13747__auto__))
);

return c__13747__auto__;
});

view3d.client.repeater_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__13747__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13747__auto__){
return (function (){
var f__13748__auto__ = (function (){var switch__13652__auto__ = ((function (c__13747__auto__){
return (function (state_15865){
var state_val_15866 = (state_15865[(1)]);
if((state_val_15866 === (1))){
var state_15865__$1 = state_15865;
var statearr_15867_15887 = state_15865__$1;
(statearr_15867_15887[(2)] = null);

(statearr_15867_15887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15866 === (2))){
var state_15865__$1 = state_15865;
var statearr_15868_15888 = state_15865__$1;
(statearr_15868_15888[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15866 === (3))){
var inst_15863 = (state_15865[(2)]);
var state_15865__$1 = state_15865;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15865__$1,inst_15863);
} else {
if((state_val_15866 === (4))){
var inst_15853 = func.call(null,param);
var inst_15854 = cljs.core.deref.call(null,time_out);
var inst_15855 = cljs.core.async.timeout.call(null,inst_15854);
var state_15865__$1 = (function (){var statearr_15870 = state_15865;
(statearr_15870[(7)] = inst_15853);

return statearr_15870;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15865__$1,(7),inst_15855);
} else {
if((state_val_15866 === (5))){
var state_15865__$1 = state_15865;
var statearr_15871_15889 = state_15865__$1;
(statearr_15871_15889[(2)] = null);

(statearr_15871_15889[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15866 === (6))){
var inst_15861 = (state_15865[(2)]);
var state_15865__$1 = state_15865;
var statearr_15872_15890 = state_15865__$1;
(statearr_15872_15890[(2)] = inst_15861);

(statearr_15872_15890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15866 === (7))){
var inst_15857 = (state_15865[(2)]);
var state_15865__$1 = (function (){var statearr_15873 = state_15865;
(statearr_15873[(8)] = inst_15857);

return statearr_15873;
})();
var statearr_15874_15891 = state_15865__$1;
(statearr_15874_15891[(2)] = null);

(statearr_15874_15891[(1)] = (2));


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
});})(c__13747__auto__))
;
return ((function (switch__13652__auto__,c__13747__auto__){
return (function() {
var view3d$client$state_machine__13653__auto__ = null;
var view3d$client$state_machine__13653__auto____0 = (function (){
var statearr_15875 = [null,null,null,null,null,null,null,null,null];
(statearr_15875[(0)] = view3d$client$state_machine__13653__auto__);

(statearr_15875[(1)] = (1));

return statearr_15875;
});
var view3d$client$state_machine__13653__auto____1 = (function (state_15865){
while(true){
var ret_value__13654__auto__ = (function (){try{while(true){
var result__13655__auto__ = switch__13652__auto__.call(null,state_15865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13655__auto__;
}
break;
}
}catch (e15876){if((e15876 instanceof Object)){
var ex__13656__auto__ = e15876;
var statearr_15877_15892 = state_15865;
(statearr_15877_15892[(5)] = ex__13656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15893 = state_15865;
state_15865 = G__15893;
continue;
} else {
return ret_value__13654__auto__;
}
break;
}
});
view3d$client$state_machine__13653__auto__ = function(state_15865){
switch(arguments.length){
case 0:
return view3d$client$state_machine__13653__auto____0.call(this);
case 1:
return view3d$client$state_machine__13653__auto____1.call(this,state_15865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__13653__auto____0;
view3d$client$state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__13653__auto____1;
return view3d$client$state_machine__13653__auto__;
})()
;})(switch__13652__auto__,c__13747__auto__))
})();
var state__13749__auto__ = (function (){var statearr_15878 = f__13748__auto__.call(null);
(statearr_15878[(6)] = c__13747__auto__);

return statearr_15878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13749__auto__);
});})(c__13747__auto__))
);

return c__13747__auto__;
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
}catch (e15894){if((e15894 instanceof Error)){
var e = e15894;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e15894;

}
}})()], null),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));

return cljs.core.vreset_BANG_.call(null,view3d.client.RESPONSE,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
});
view3d.client.handle_request = (function view3d$client$handle_request(request){
var temp__5733__auto___15901 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___15901)){
var vie_15902 = temp__5733__auto___15901;
view3d.client.view.call(null,vie_15902);
} else {
}

var temp__5733__auto___15903 = new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___15903)){
var pit_15904 = temp__5733__auto___15903;
view3d.client.pitch.call(null,pit_15904);
} else {
}

var temp__5733__auto___15905 = new cljs.core.Keyword(null,"roll","roll",11266999).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___15905)){
var rol_15906 = temp__5733__auto___15905;
view3d.client.roll.call(null,rol_15906);
} else {
}

var temp__5733__auto___15907 = new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___15907)){
var vec__15895_15908 = temp__5733__auto___15907;
var lat_15909 = cljs.core.nth.call(null,vec__15895_15908,(0),null);
var lon_15910 = cljs.core.nth.call(null,vec__15895_15908,(1),null);
var vec__15898_15911 = czm.core.sample_height.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [geo.calc.radians.call(null,lat_15909),geo.calc.radians.call(null,lon_15910)], null),(0));
var __15912 = cljs.core.nth.call(null,vec__15898_15911,(0),null);
var __15913__$1 = cljs.core.nth.call(null,vec__15898_15911,(1),null);
var sh_15914 = cljs.core.nth.call(null,vec__15898_15911,(2),null);
cljs.core._vreset_BANG_.call(null,view3d.client.RESPONSE,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.RESPONSE),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(sh_15914 | (0))));
} else {
}

return view3d.client.response_request.call(null);
});
view3d.client.handle_vehicle = (function view3d$client$handle_vehicle(vehicle){
var vec__15915 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__15915,(0),null);
var lon = cljs.core.nth.call(null,vec__15915,(1),null);
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
var temp__5733__auto___15918 = new cljs.core.Keyword(null,"vehicle","vehicle",1670166968).cljs$core$IFn$_invoke$arity$1(resp);
if(cljs.core.truth_(temp__5733__auto___15918)){
var vehicle_15919 = temp__5733__auto___15918;
view3d.client.handle_vehicle.call(null,vehicle_15919);
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
}catch (e15920){if((e15920 instanceof Error)){
var e = e15920;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e15920;

}
}})()], null),new cljs.core.Keyword(null,"handler","handler",-195596612),hand,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));

return setTimeout(view3d.client.run_repl,(1000));
});
cljs.core.enable_console_print_BANG_.call(null);
window.onload = view3d.client.on_load.call(null);
view3d.client.run_repl.call(null);

//# sourceMappingURL=client.js.map
