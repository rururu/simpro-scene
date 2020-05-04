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
var map__36695 = response;
var map__36695__$1 = (((((!((map__36695 == null))))?(((((map__36695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36695):map__36695);
var status = cljs.core.get.call(null,map__36695__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__36695__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
view3d.client.CLI_REPL = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.js.empty_state.call(null),new cljs.core.Keyword(null,"value","value",305978217),null], null));
view3d.client.RESPONSE = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
view3d.client.repeater = (function view3d$client$repeater(var_args){
var G__36698 = arguments.length;
switch (G__36698) {
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
return (function (state_36712){
var state_val_36713 = (state_36712[(1)]);
if((state_val_36713 === (1))){
var state_36712__$1 = state_36712;
var statearr_36714_36754 = state_36712__$1;
(statearr_36714_36754[(2)] = null);

(statearr_36714_36754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36713 === (2))){
var state_36712__$1 = state_36712;
var statearr_36715_36755 = state_36712__$1;
(statearr_36715_36755[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36713 === (3))){
var inst_36710 = (state_36712[(2)]);
var state_36712__$1 = state_36712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36712__$1,inst_36710);
} else {
if((state_val_36713 === (4))){
var inst_36701 = func.call(null);
var inst_36702 = cljs.core.async.timeout.call(null,time_out);
var state_36712__$1 = (function (){var statearr_36717 = state_36712;
(statearr_36717[(7)] = inst_36701);

return statearr_36717;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36712__$1,(7),inst_36702);
} else {
if((state_val_36713 === (5))){
var state_36712__$1 = state_36712;
var statearr_36718_36756 = state_36712__$1;
(statearr_36718_36756[(2)] = null);

(statearr_36718_36756[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36713 === (6))){
var inst_36708 = (state_36712[(2)]);
var state_36712__$1 = state_36712;
var statearr_36719_36757 = state_36712__$1;
(statearr_36719_36757[(2)] = inst_36708);

(statearr_36719_36757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36713 === (7))){
var inst_36704 = (state_36712[(2)]);
var state_36712__$1 = (function (){var statearr_36720 = state_36712;
(statearr_36720[(8)] = inst_36704);

return statearr_36720;
})();
var statearr_36721_36758 = state_36712__$1;
(statearr_36721_36758[(2)] = null);

(statearr_36721_36758[(1)] = (2));


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
var statearr_36722 = [null,null,null,null,null,null,null,null,null];
(statearr_36722[(0)] = view3d$client$state_machine__24347__auto__);

(statearr_36722[(1)] = (1));

return statearr_36722;
});
var view3d$client$state_machine__24347__auto____1 = (function (state_36712){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_36712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e36723){if((e36723 instanceof Object)){
var ex__24350__auto__ = e36723;
var statearr_36724_36759 = state_36712;
(statearr_36724_36759[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36723;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36760 = state_36712;
state_36712 = G__36760;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
view3d$client$state_machine__24347__auto__ = function(state_36712){
switch(arguments.length){
case 0:
return view3d$client$state_machine__24347__auto____0.call(this);
case 1:
return view3d$client$state_machine__24347__auto____1.call(this,state_36712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__24347__auto____0;
view3d$client$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__24347__auto____1;
return view3d$client$state_machine__24347__auto__;
})()
;})(switch__24346__auto__,c__24441__auto__))
})();
var state__24443__auto__ = (function (){var statearr_36725 = f__24442__auto__.call(null);
(statearr_36725[(6)] = c__24441__auto__);

return statearr_36725;
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
return (function (state_36739){
var state_val_36740 = (state_36739[(1)]);
if((state_val_36740 === (1))){
var state_36739__$1 = state_36739;
var statearr_36741_36761 = state_36739__$1;
(statearr_36741_36761[(2)] = null);

(statearr_36741_36761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36740 === (2))){
var state_36739__$1 = state_36739;
var statearr_36742_36762 = state_36739__$1;
(statearr_36742_36762[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36740 === (3))){
var inst_36737 = (state_36739[(2)]);
var state_36739__$1 = state_36739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36739__$1,inst_36737);
} else {
if((state_val_36740 === (4))){
var inst_36728 = func.call(null,param);
var inst_36729 = cljs.core.async.timeout.call(null,time_out);
var state_36739__$1 = (function (){var statearr_36744 = state_36739;
(statearr_36744[(7)] = inst_36728);

return statearr_36744;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36739__$1,(7),inst_36729);
} else {
if((state_val_36740 === (5))){
var state_36739__$1 = state_36739;
var statearr_36745_36763 = state_36739__$1;
(statearr_36745_36763[(2)] = null);

(statearr_36745_36763[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36740 === (6))){
var inst_36735 = (state_36739[(2)]);
var state_36739__$1 = state_36739;
var statearr_36746_36764 = state_36739__$1;
(statearr_36746_36764[(2)] = inst_36735);

(statearr_36746_36764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36740 === (7))){
var inst_36731 = (state_36739[(2)]);
var state_36739__$1 = (function (){var statearr_36747 = state_36739;
(statearr_36747[(8)] = inst_36731);

return statearr_36747;
})();
var statearr_36748_36765 = state_36739__$1;
(statearr_36748_36765[(2)] = null);

(statearr_36748_36765[(1)] = (2));


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
var statearr_36749 = [null,null,null,null,null,null,null,null,null];
(statearr_36749[(0)] = view3d$client$state_machine__24347__auto__);

(statearr_36749[(1)] = (1));

return statearr_36749;
});
var view3d$client$state_machine__24347__auto____1 = (function (state_36739){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_36739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e36750){if((e36750 instanceof Object)){
var ex__24350__auto__ = e36750;
var statearr_36751_36766 = state_36739;
(statearr_36751_36766[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36767 = state_36739;
state_36739 = G__36767;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
view3d$client$state_machine__24347__auto__ = function(state_36739){
switch(arguments.length){
case 0:
return view3d$client$state_machine__24347__auto____0.call(this);
case 1:
return view3d$client$state_machine__24347__auto____1.call(this,state_36739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__24347__auto____0;
view3d$client$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__24347__auto____1;
return view3d$client$state_machine__24347__auto__;
})()
;})(switch__24346__auto__,c__24441__auto__))
})();
var state__24443__auto__ = (function (){var statearr_36752 = f__24442__auto__.call(null);
(statearr_36752[(6)] = c__24441__auto__);

return statearr_36752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto__))
);

return c__24441__auto__;
});

view3d.client.repeater.cljs$lang$maxFixedArity = 3;

view3d.client.repeater_BANG_ = (function view3d$client$repeater_BANG_(var_args){
var G__36769 = arguments.length;
switch (G__36769) {
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
return (function (state_36784){
var state_val_36785 = (state_36784[(1)]);
if((state_val_36785 === (1))){
var state_36784__$1 = state_36784;
var statearr_36786_36827 = state_36784__$1;
(statearr_36786_36827[(2)] = null);

(statearr_36786_36827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (2))){
var state_36784__$1 = state_36784;
var statearr_36787_36828 = state_36784__$1;
(statearr_36787_36828[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (3))){
var inst_36782 = (state_36784[(2)]);
var state_36784__$1 = state_36784;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36784__$1,inst_36782);
} else {
if((state_val_36785 === (4))){
var inst_36772 = func.call(null);
var inst_36773 = cljs.core.deref.call(null,time_out);
var inst_36774 = cljs.core.async.timeout.call(null,inst_36773);
var state_36784__$1 = (function (){var statearr_36789 = state_36784;
(statearr_36789[(7)] = inst_36772);

return statearr_36789;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36784__$1,(7),inst_36774);
} else {
if((state_val_36785 === (5))){
var state_36784__$1 = state_36784;
var statearr_36790_36829 = state_36784__$1;
(statearr_36790_36829[(2)] = null);

(statearr_36790_36829[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (6))){
var inst_36780 = (state_36784[(2)]);
var state_36784__$1 = state_36784;
var statearr_36791_36830 = state_36784__$1;
(statearr_36791_36830[(2)] = inst_36780);

(statearr_36791_36830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (7))){
var inst_36776 = (state_36784[(2)]);
var state_36784__$1 = (function (){var statearr_36792 = state_36784;
(statearr_36792[(8)] = inst_36776);

return statearr_36792;
})();
var statearr_36793_36831 = state_36784__$1;
(statearr_36793_36831[(2)] = null);

(statearr_36793_36831[(1)] = (2));


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
var statearr_36794 = [null,null,null,null,null,null,null,null,null];
(statearr_36794[(0)] = view3d$client$state_machine__24347__auto__);

(statearr_36794[(1)] = (1));

return statearr_36794;
});
var view3d$client$state_machine__24347__auto____1 = (function (state_36784){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_36784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e36795){if((e36795 instanceof Object)){
var ex__24350__auto__ = e36795;
var statearr_36796_36832 = state_36784;
(statearr_36796_36832[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36833 = state_36784;
state_36784 = G__36833;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
view3d$client$state_machine__24347__auto__ = function(state_36784){
switch(arguments.length){
case 0:
return view3d$client$state_machine__24347__auto____0.call(this);
case 1:
return view3d$client$state_machine__24347__auto____1.call(this,state_36784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__24347__auto____0;
view3d$client$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__24347__auto____1;
return view3d$client$state_machine__24347__auto__;
})()
;})(switch__24346__auto__,c__24441__auto__))
})();
var state__24443__auto__ = (function (){var statearr_36797 = f__24442__auto__.call(null);
(statearr_36797[(6)] = c__24441__auto__);

return statearr_36797;
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
return (function (state_36812){
var state_val_36813 = (state_36812[(1)]);
if((state_val_36813 === (1))){
var state_36812__$1 = state_36812;
var statearr_36814_36834 = state_36812__$1;
(statearr_36814_36834[(2)] = null);

(statearr_36814_36834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36813 === (2))){
var state_36812__$1 = state_36812;
var statearr_36815_36835 = state_36812__$1;
(statearr_36815_36835[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36813 === (3))){
var inst_36810 = (state_36812[(2)]);
var state_36812__$1 = state_36812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36812__$1,inst_36810);
} else {
if((state_val_36813 === (4))){
var inst_36800 = func.call(null,param);
var inst_36801 = cljs.core.deref.call(null,time_out);
var inst_36802 = cljs.core.async.timeout.call(null,inst_36801);
var state_36812__$1 = (function (){var statearr_36817 = state_36812;
(statearr_36817[(7)] = inst_36800);

return statearr_36817;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36812__$1,(7),inst_36802);
} else {
if((state_val_36813 === (5))){
var state_36812__$1 = state_36812;
var statearr_36818_36836 = state_36812__$1;
(statearr_36818_36836[(2)] = null);

(statearr_36818_36836[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36813 === (6))){
var inst_36808 = (state_36812[(2)]);
var state_36812__$1 = state_36812;
var statearr_36819_36837 = state_36812__$1;
(statearr_36819_36837[(2)] = inst_36808);

(statearr_36819_36837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36813 === (7))){
var inst_36804 = (state_36812[(2)]);
var state_36812__$1 = (function (){var statearr_36820 = state_36812;
(statearr_36820[(8)] = inst_36804);

return statearr_36820;
})();
var statearr_36821_36838 = state_36812__$1;
(statearr_36821_36838[(2)] = null);

(statearr_36821_36838[(1)] = (2));


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
var statearr_36822 = [null,null,null,null,null,null,null,null,null];
(statearr_36822[(0)] = view3d$client$state_machine__24347__auto__);

(statearr_36822[(1)] = (1));

return statearr_36822;
});
var view3d$client$state_machine__24347__auto____1 = (function (state_36812){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_36812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e36823){if((e36823 instanceof Object)){
var ex__24350__auto__ = e36823;
var statearr_36824_36839 = state_36812;
(statearr_36824_36839[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36840 = state_36812;
state_36812 = G__36840;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
view3d$client$state_machine__24347__auto__ = function(state_36812){
switch(arguments.length){
case 0:
return view3d$client$state_machine__24347__auto____0.call(this);
case 1:
return view3d$client$state_machine__24347__auto____1.call(this,state_36812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__24347__auto____0;
view3d$client$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__24347__auto____1;
return view3d$client$state_machine__24347__auto__;
})()
;})(switch__24346__auto__,c__24441__auto__))
})();
var state__24443__auto__ = (function (){var statearr_36825 = f__24442__auto__.call(null);
(statearr_36825[(6)] = c__24441__auto__);

return statearr_36825;
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
}catch (e36841){if((e36841 instanceof Error)){
var e = e36841;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e36841;

}
}})()], null),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));

return cljs.core.vreset_BANG_.call(null,view3d.client.RESPONSE,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
});
view3d.client.handle_request = (function view3d$client$handle_request(request){
var temp__5733__auto___36848 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___36848)){
var vie_36849 = temp__5733__auto___36848;
view3d.client.view.call(null,vie_36849);
} else {
}

var temp__5733__auto___36850 = new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___36850)){
var pit_36851 = temp__5733__auto___36850;
view3d.client.pitch.call(null,pit_36851);
} else {
}

var temp__5733__auto___36852 = new cljs.core.Keyword(null,"roll","roll",11266999).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___36852)){
var rol_36853 = temp__5733__auto___36852;
view3d.client.roll.call(null,rol_36853);
} else {
}

var temp__5733__auto___36854 = new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto___36854)){
var vec__36842_36855 = temp__5733__auto___36854;
var lat_36856 = cljs.core.nth.call(null,vec__36842_36855,(0),null);
var lon_36857 = cljs.core.nth.call(null,vec__36842_36855,(1),null);
var vec__36845_36858 = czm.core.sample_height.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [geo.calc.radians.call(null,lat_36856),geo.calc.radians.call(null,lon_36857)], null),(0));
var __36859 = cljs.core.nth.call(null,vec__36845_36858,(0),null);
var __36860__$1 = cljs.core.nth.call(null,vec__36845_36858,(1),null);
var sh_36861 = cljs.core.nth.call(null,vec__36845_36858,(2),null);
cljs.core._vreset_BANG_.call(null,view3d.client.RESPONSE,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.RESPONSE),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(sh_36861 | (0))));
} else {
}

return view3d.client.response_request.call(null);
});
view3d.client.handle_vehicle = (function view3d$client$handle_vehicle(vehicle){
var vec__36862 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__36862,(0),null);
var lon = cljs.core.nth.call(null,vec__36862,(1),null);
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
var temp__5733__auto___36865 = new cljs.core.Keyword(null,"vehicle","vehicle",1670166968).cljs$core$IFn$_invoke$arity$1(resp);
if(cljs.core.truth_(temp__5733__auto___36865)){
var vehicle_36866 = temp__5733__auto___36865;
view3d.client.handle_vehicle.call(null,vehicle_36866);
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
}catch (e36867){if((e36867 instanceof Error)){
var e = e36867;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e36867;

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
