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
view3d.client.TERRAIN2_TIO = cljs.core.volatile_BANG_.call(null,(4000));
view3d.client.error_handler = (function view3d$client$error_handler(response){
var map__28748 = response;
var map__28748__$1 = ((((!((map__28748 == null)))?((((map__28748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28748.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28748):map__28748);
var status = cljs.core.get.call(null,map__28748__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__28748__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
view3d.client.repeater = (function view3d$client$repeater(var_args){
var G__28751 = arguments.length;
switch (G__28751) {
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
var c__28472__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28472__auto__){
return (function (){
var f__28473__auto__ = (function (){var switch__28449__auto__ = ((function (c__28472__auto__){
return (function (state_28765){
var state_val_28766 = (state_28765[(1)]);
if((state_val_28766 === (1))){
var state_28765__$1 = state_28765;
var statearr_28767_28807 = state_28765__$1;
(statearr_28767_28807[(2)] = null);

(statearr_28767_28807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28766 === (2))){
var state_28765__$1 = state_28765;
var statearr_28768_28808 = state_28765__$1;
(statearr_28768_28808[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28766 === (3))){
var inst_28763 = (state_28765[(2)]);
var state_28765__$1 = state_28765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28765__$1,inst_28763);
} else {
if((state_val_28766 === (4))){
var inst_28754 = func.call(null);
var inst_28755 = cljs.core.async.timeout.call(null,time_out);
var state_28765__$1 = (function (){var statearr_28770 = state_28765;
(statearr_28770[(7)] = inst_28754);

return statearr_28770;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28765__$1,(7),inst_28755);
} else {
if((state_val_28766 === (5))){
var state_28765__$1 = state_28765;
var statearr_28771_28809 = state_28765__$1;
(statearr_28771_28809[(2)] = null);

(statearr_28771_28809[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28766 === (6))){
var inst_28761 = (state_28765[(2)]);
var state_28765__$1 = state_28765;
var statearr_28772_28810 = state_28765__$1;
(statearr_28772_28810[(2)] = inst_28761);

(statearr_28772_28810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28766 === (7))){
var inst_28757 = (state_28765[(2)]);
var state_28765__$1 = (function (){var statearr_28773 = state_28765;
(statearr_28773[(8)] = inst_28757);

return statearr_28773;
})();
var statearr_28774_28811 = state_28765__$1;
(statearr_28774_28811[(2)] = null);

(statearr_28774_28811[(1)] = (2));


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
});})(c__28472__auto__))
;
return ((function (switch__28449__auto__,c__28472__auto__){
return (function() {
var view3d$client$state_machine__28450__auto__ = null;
var view3d$client$state_machine__28450__auto____0 = (function (){
var statearr_28775 = [null,null,null,null,null,null,null,null,null];
(statearr_28775[(0)] = view3d$client$state_machine__28450__auto__);

(statearr_28775[(1)] = (1));

return statearr_28775;
});
var view3d$client$state_machine__28450__auto____1 = (function (state_28765){
while(true){
var ret_value__28451__auto__ = (function (){try{while(true){
var result__28452__auto__ = switch__28449__auto__.call(null,state_28765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28452__auto__;
}
break;
}
}catch (e28776){if((e28776 instanceof Object)){
var ex__28453__auto__ = e28776;
var statearr_28777_28812 = state_28765;
(statearr_28777_28812[(5)] = ex__28453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28813 = state_28765;
state_28765 = G__28813;
continue;
} else {
return ret_value__28451__auto__;
}
break;
}
});
view3d$client$state_machine__28450__auto__ = function(state_28765){
switch(arguments.length){
case 0:
return view3d$client$state_machine__28450__auto____0.call(this);
case 1:
return view3d$client$state_machine__28450__auto____1.call(this,state_28765);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
view3d$client$state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__28450__auto____0;
view3d$client$state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__28450__auto____1;
return view3d$client$state_machine__28450__auto__;
})()
;})(switch__28449__auto__,c__28472__auto__))
})();
var state__28474__auto__ = (function (){var statearr_28778 = f__28473__auto__.call(null);
(statearr_28778[(6)] = c__28472__auto__);

return statearr_28778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28474__auto__);
});})(c__28472__auto__))
);

return c__28472__auto__;
});

view3d.client.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__28472__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28472__auto__){
return (function (){
var f__28473__auto__ = (function (){var switch__28449__auto__ = ((function (c__28472__auto__){
return (function (state_28792){
var state_val_28793 = (state_28792[(1)]);
if((state_val_28793 === (1))){
var state_28792__$1 = state_28792;
var statearr_28794_28814 = state_28792__$1;
(statearr_28794_28814[(2)] = null);

(statearr_28794_28814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28793 === (2))){
var state_28792__$1 = state_28792;
var statearr_28795_28815 = state_28792__$1;
(statearr_28795_28815[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28793 === (3))){
var inst_28790 = (state_28792[(2)]);
var state_28792__$1 = state_28792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28792__$1,inst_28790);
} else {
if((state_val_28793 === (4))){
var inst_28781 = func.call(null,param);
var inst_28782 = cljs.core.async.timeout.call(null,time_out);
var state_28792__$1 = (function (){var statearr_28797 = state_28792;
(statearr_28797[(7)] = inst_28781);

return statearr_28797;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28792__$1,(7),inst_28782);
} else {
if((state_val_28793 === (5))){
var state_28792__$1 = state_28792;
var statearr_28798_28816 = state_28792__$1;
(statearr_28798_28816[(2)] = null);

(statearr_28798_28816[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28793 === (6))){
var inst_28788 = (state_28792[(2)]);
var state_28792__$1 = state_28792;
var statearr_28799_28817 = state_28792__$1;
(statearr_28799_28817[(2)] = inst_28788);

(statearr_28799_28817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28793 === (7))){
var inst_28784 = (state_28792[(2)]);
var state_28792__$1 = (function (){var statearr_28800 = state_28792;
(statearr_28800[(8)] = inst_28784);

return statearr_28800;
})();
var statearr_28801_28818 = state_28792__$1;
(statearr_28801_28818[(2)] = null);

(statearr_28801_28818[(1)] = (2));


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
});})(c__28472__auto__))
;
return ((function (switch__28449__auto__,c__28472__auto__){
return (function() {
var view3d$client$state_machine__28450__auto__ = null;
var view3d$client$state_machine__28450__auto____0 = (function (){
var statearr_28802 = [null,null,null,null,null,null,null,null,null];
(statearr_28802[(0)] = view3d$client$state_machine__28450__auto__);

(statearr_28802[(1)] = (1));

return statearr_28802;
});
var view3d$client$state_machine__28450__auto____1 = (function (state_28792){
while(true){
var ret_value__28451__auto__ = (function (){try{while(true){
var result__28452__auto__ = switch__28449__auto__.call(null,state_28792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28452__auto__;
}
break;
}
}catch (e28803){if((e28803 instanceof Object)){
var ex__28453__auto__ = e28803;
var statearr_28804_28819 = state_28792;
(statearr_28804_28819[(5)] = ex__28453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28820 = state_28792;
state_28792 = G__28820;
continue;
} else {
return ret_value__28451__auto__;
}
break;
}
});
view3d$client$state_machine__28450__auto__ = function(state_28792){
switch(arguments.length){
case 0:
return view3d$client$state_machine__28450__auto____0.call(this);
case 1:
return view3d$client$state_machine__28450__auto____1.call(this,state_28792);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
view3d$client$state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__28450__auto____0;
view3d$client$state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__28450__auto____1;
return view3d$client$state_machine__28450__auto__;
})()
;})(switch__28449__auto__,c__28472__auto__))
})();
var state__28474__auto__ = (function (){var statearr_28805 = f__28473__auto__.call(null);
(statearr_28805[(6)] = c__28472__auto__);

return statearr_28805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28474__auto__);
});})(c__28472__auto__))
);

return c__28472__auto__;
});

view3d.client.repeater.cljs$lang$maxFixedArity = 3;

view3d.client.repeater_BANG_ = (function view3d$client$repeater_BANG_(var_args){
var G__28822 = arguments.length;
switch (G__28822) {
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
var c__28472__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28472__auto__){
return (function (){
var f__28473__auto__ = (function (){var switch__28449__auto__ = ((function (c__28472__auto__){
return (function (state_28837){
var state_val_28838 = (state_28837[(1)]);
if((state_val_28838 === (1))){
var state_28837__$1 = state_28837;
var statearr_28839_28880 = state_28837__$1;
(statearr_28839_28880[(2)] = null);

(statearr_28839_28880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28838 === (2))){
var state_28837__$1 = state_28837;
var statearr_28840_28881 = state_28837__$1;
(statearr_28840_28881[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28838 === (3))){
var inst_28835 = (state_28837[(2)]);
var state_28837__$1 = state_28837;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28837__$1,inst_28835);
} else {
if((state_val_28838 === (4))){
var inst_28825 = func.call(null);
var inst_28826 = cljs.core.deref.call(null,time_out);
var inst_28827 = cljs.core.async.timeout.call(null,inst_28826);
var state_28837__$1 = (function (){var statearr_28842 = state_28837;
(statearr_28842[(7)] = inst_28825);

return statearr_28842;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28837__$1,(7),inst_28827);
} else {
if((state_val_28838 === (5))){
var state_28837__$1 = state_28837;
var statearr_28843_28882 = state_28837__$1;
(statearr_28843_28882[(2)] = null);

(statearr_28843_28882[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28838 === (6))){
var inst_28833 = (state_28837[(2)]);
var state_28837__$1 = state_28837;
var statearr_28844_28883 = state_28837__$1;
(statearr_28844_28883[(2)] = inst_28833);

(statearr_28844_28883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28838 === (7))){
var inst_28829 = (state_28837[(2)]);
var state_28837__$1 = (function (){var statearr_28845 = state_28837;
(statearr_28845[(8)] = inst_28829);

return statearr_28845;
})();
var statearr_28846_28884 = state_28837__$1;
(statearr_28846_28884[(2)] = null);

(statearr_28846_28884[(1)] = (2));


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
});})(c__28472__auto__))
;
return ((function (switch__28449__auto__,c__28472__auto__){
return (function() {
var view3d$client$state_machine__28450__auto__ = null;
var view3d$client$state_machine__28450__auto____0 = (function (){
var statearr_28847 = [null,null,null,null,null,null,null,null,null];
(statearr_28847[(0)] = view3d$client$state_machine__28450__auto__);

(statearr_28847[(1)] = (1));

return statearr_28847;
});
var view3d$client$state_machine__28450__auto____1 = (function (state_28837){
while(true){
var ret_value__28451__auto__ = (function (){try{while(true){
var result__28452__auto__ = switch__28449__auto__.call(null,state_28837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28452__auto__;
}
break;
}
}catch (e28848){if((e28848 instanceof Object)){
var ex__28453__auto__ = e28848;
var statearr_28849_28885 = state_28837;
(statearr_28849_28885[(5)] = ex__28453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28848;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28886 = state_28837;
state_28837 = G__28886;
continue;
} else {
return ret_value__28451__auto__;
}
break;
}
});
view3d$client$state_machine__28450__auto__ = function(state_28837){
switch(arguments.length){
case 0:
return view3d$client$state_machine__28450__auto____0.call(this);
case 1:
return view3d$client$state_machine__28450__auto____1.call(this,state_28837);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
view3d$client$state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__28450__auto____0;
view3d$client$state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__28450__auto____1;
return view3d$client$state_machine__28450__auto__;
})()
;})(switch__28449__auto__,c__28472__auto__))
})();
var state__28474__auto__ = (function (){var statearr_28850 = f__28473__auto__.call(null);
(statearr_28850[(6)] = c__28472__auto__);

return statearr_28850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28474__auto__);
});})(c__28472__auto__))
);

return c__28472__auto__;
});

view3d.client.repeater_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__28472__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28472__auto__){
return (function (){
var f__28473__auto__ = (function (){var switch__28449__auto__ = ((function (c__28472__auto__){
return (function (state_28865){
var state_val_28866 = (state_28865[(1)]);
if((state_val_28866 === (1))){
var state_28865__$1 = state_28865;
var statearr_28867_28887 = state_28865__$1;
(statearr_28867_28887[(2)] = null);

(statearr_28867_28887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28866 === (2))){
var state_28865__$1 = state_28865;
var statearr_28868_28888 = state_28865__$1;
(statearr_28868_28888[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28866 === (3))){
var inst_28863 = (state_28865[(2)]);
var state_28865__$1 = state_28865;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28865__$1,inst_28863);
} else {
if((state_val_28866 === (4))){
var inst_28853 = func.call(null,param);
var inst_28854 = cljs.core.deref.call(null,time_out);
var inst_28855 = cljs.core.async.timeout.call(null,inst_28854);
var state_28865__$1 = (function (){var statearr_28870 = state_28865;
(statearr_28870[(7)] = inst_28853);

return statearr_28870;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28865__$1,(7),inst_28855);
} else {
if((state_val_28866 === (5))){
var state_28865__$1 = state_28865;
var statearr_28871_28889 = state_28865__$1;
(statearr_28871_28889[(2)] = null);

(statearr_28871_28889[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28866 === (6))){
var inst_28861 = (state_28865[(2)]);
var state_28865__$1 = state_28865;
var statearr_28872_28890 = state_28865__$1;
(statearr_28872_28890[(2)] = inst_28861);

(statearr_28872_28890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28866 === (7))){
var inst_28857 = (state_28865[(2)]);
var state_28865__$1 = (function (){var statearr_28873 = state_28865;
(statearr_28873[(8)] = inst_28857);

return statearr_28873;
})();
var statearr_28874_28891 = state_28865__$1;
(statearr_28874_28891[(2)] = null);

(statearr_28874_28891[(1)] = (2));


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
});})(c__28472__auto__))
;
return ((function (switch__28449__auto__,c__28472__auto__){
return (function() {
var view3d$client$state_machine__28450__auto__ = null;
var view3d$client$state_machine__28450__auto____0 = (function (){
var statearr_28875 = [null,null,null,null,null,null,null,null,null];
(statearr_28875[(0)] = view3d$client$state_machine__28450__auto__);

(statearr_28875[(1)] = (1));

return statearr_28875;
});
var view3d$client$state_machine__28450__auto____1 = (function (state_28865){
while(true){
var ret_value__28451__auto__ = (function (){try{while(true){
var result__28452__auto__ = switch__28449__auto__.call(null,state_28865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28452__auto__;
}
break;
}
}catch (e28876){if((e28876 instanceof Object)){
var ex__28453__auto__ = e28876;
var statearr_28877_28892 = state_28865;
(statearr_28877_28892[(5)] = ex__28453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28893 = state_28865;
state_28865 = G__28893;
continue;
} else {
return ret_value__28451__auto__;
}
break;
}
});
view3d$client$state_machine__28450__auto__ = function(state_28865){
switch(arguments.length){
case 0:
return view3d$client$state_machine__28450__auto____0.call(this);
case 1:
return view3d$client$state_machine__28450__auto____1.call(this,state_28865);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
view3d$client$state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__28450__auto____0;
view3d$client$state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__28450__auto____1;
return view3d$client$state_machine__28450__auto__;
})()
;})(switch__28449__auto__,c__28472__auto__))
})();
var state__28474__auto__ = (function (){var statearr_28878 = f__28473__auto__.call(null);
(statearr_28878[(6)] = c__28472__auto__);

return statearr_28878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28474__auto__);
});})(c__28472__auto__))
);

return c__28472__auto__;
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

view3d.client.by_id.call(null,"view-val").selectedIndex = (function (){var pred__28894 = cljs.core._EQ_;
var expr__28895 = vie;
if(cljs.core.truth_(pred__28894.call(null,"FORWARD",expr__28895))){
return (0);
} else {
if(cljs.core.truth_(pred__28894.call(null,"BACKWARD",expr__28895))){
return (1);
} else {
if(cljs.core.truth_(pred__28894.call(null,"RIGHT",expr__28895))){
return (2);
} else {
if(cljs.core.truth_(pred__28894.call(null,"LEFT",expr__28895))){
return (3);
} else {
if(cljs.core.truth_(pred__28894.call(null,"UP",expr__28895))){
return (4);
} else {
if(cljs.core.truth_(pred__28894.call(null,"DOWN",expr__28895))){
return (5);
} else {
if(cljs.core.truth_(pred__28894.call(null,"FORWARD-RIGHT",expr__28895))){
return (6);
} else {
if(cljs.core.truth_(pred__28894.call(null,"FORWARD-LEFT",expr__28895))){
return (7);
} else {
if(cljs.core.truth_(pred__28894.call(null,"BACKWARD-RIGHT",expr__28895))){
return (8);
} else {
if(cljs.core.truth_(pred__28894.call(null,"BACKWARD-LEFT",expr__28895))){
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
var vec__28897 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__28897,(0),null);
var lon = cljs.core.nth.call(null,vec__28897,(1),null);
var alt = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(vehicle);
var alt__$1 = ((((alt < czm.core.MAX_UPGROUND))?(alt + czm.core.TERRAIN):alt) | (0));
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
var map__28900 = temp__5455__auto__;
var map__28900__$1 = ((((!((map__28900 == null)))?((((map__28900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28900.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28900):map__28900);
var view = cljs.core.get.call(null,map__28900__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var pitch = cljs.core.get.call(null,map__28900__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
var roll = cljs.core.get.call(null,map__28900__$1,new cljs.core.Keyword(null,"roll","roll",11266999));
return view3d.client.camera_control.call(null,view,pitch,roll);
} else {
return null;
}
});
view3d.client.vehicle_hr = (function view3d$client$vehicle_hr(response){
var resp = view3d.client.read_transit.call(null,response);
var temp__5455__auto__ = resp;
if(cljs.core.truth_(temp__5455__auto__)){
var map__28902 = temp__5455__auto__;
var map__28902__$1 = ((((!((map__28902 == null)))?((((map__28902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28902.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28902):map__28902);
var vehicle = cljs.core.get.call(null,map__28902__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
var period = cljs.core.get.call(null,map__28902__$1,new cljs.core.Keyword(null,"period","period",-352129191));
var camera = cljs.core.get.call(null,map__28902__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
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
var temp__5455__auto___28907 = resp.call(null,new cljs.core.Keyword(null,"latlon","latlon",-1285780235));
if(cljs.core.truth_(temp__5455__auto___28907)){
var vec__28904_28908 = temp__5455__auto___28907;
var lat_28909 = cljs.core.nth.call(null,vec__28904_28908,(0),null);
var lon_28910 = cljs.core.nth.call(null,vec__28904_28908,(1),null);
czm.core.terrain_request.call(null,lat_28909,lon_28910);
} else {
if((czm.core.TERRAIN2 >= (0))){
czm.core.terrain_request.call(null,(100),(200));
} else {
}
}

var temp__5455__auto__ = resp.call(null,new cljs.core.Keyword(null,"interval","interval",1708495417));
if(cljs.core.truth_(temp__5455__auto__)){
var inter = temp__5455__auto__;
return cljs.core.vreset_BANG_.call(null,view3d.client.TERRAIN2_TIO,inter);
} else {
return null;
}
});
view3d.client.send_terrain = (function view3d$client$send_terrain(){
return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.client.BASE_URL),"terrain/","?terrain=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(czm.core.TERRAIN2)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),view3d.client.send_terrain_hr,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));
});
view3d.client.send_camera = (function view3d$client$send_camera(){
var cam = cljs.core.deref.call(null,czm.core.CAMERA);
return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.client.BASE_URL),"camera/","?view=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cam.call(null,new cljs.core.Keyword(null,"view","view",1247994814))),"&pitch=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cam.call(null,new cljs.core.Keyword(null,"pitch","pitch",1495126700))),"&roll=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cam.call(null,new cljs.core.Keyword(null,"roll","roll",11266999)))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));
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
cljs.core.enable_console_print_BANG_.call(null);

czm.core.init_3D_view.call(null,view3d.client.BASE_URL,"yes");

view3d.client.repeater.call(null,view3d.client.receive_vehicle,(1000));

view3d.client.repeater_BANG_.call(null,view3d.client.send_terrain,view3d.client.TERRAIN2_TIO);

view3d.client.repeater.call(null,view3d.client.send_camera,(4000));

return view3d.client.show_controls.call(null);
});
window.onload = view3d.client.on_load.call(null);

//# sourceMappingURL=client.js.map
