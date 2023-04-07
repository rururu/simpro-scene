// Compiled by ClojureScript 1.11.60 {:optimizations :none}
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
var map__42605 = response;
var map__42605__$1 = cljs.core.__destructure_map.call(null,map__42605);
var status = cljs.core.get.call(null,map__42605__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__42605__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
light.view3d.client.CLI_REPL = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.js.empty_state.call(null),new cljs.core.Keyword(null,"value","value",305978217),null], null));
light.view3d.client.RESPONSE = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
light.view3d.client.PORT = (8448);
light.view3d.client.repeater = (function light$view3d$client$repeater(var_args){
var G__42607 = arguments.length;
switch (G__42607) {
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

(light.view3d.client.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__40684__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__40685__auto__ = (function (){var switch__40587__auto__ = (function (state_42621){
var state_val_42622 = (state_42621[(1)]);
if((state_val_42622 === (1))){
var state_42621__$1 = state_42621;
var statearr_42623_42663 = state_42621__$1;
(statearr_42623_42663[(2)] = null);

(statearr_42623_42663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42622 === (2))){
var state_42621__$1 = state_42621;
var statearr_42624_42664 = state_42621__$1;
(statearr_42624_42664[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42622 === (3))){
var inst_42619 = (state_42621[(2)]);
var state_42621__$1 = state_42621;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42621__$1,inst_42619);
} else {
if((state_val_42622 === (4))){
var inst_42610 = func.call(null);
var inst_42611 = cljs.core.async.timeout.call(null,time_out);
var state_42621__$1 = (function (){var statearr_42626 = state_42621;
(statearr_42626[(7)] = inst_42610);

return statearr_42626;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42621__$1,(7),inst_42611);
} else {
if((state_val_42622 === (5))){
var state_42621__$1 = state_42621;
var statearr_42627_42665 = state_42621__$1;
(statearr_42627_42665[(2)] = null);

(statearr_42627_42665[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42622 === (6))){
var inst_42617 = (state_42621[(2)]);
var state_42621__$1 = state_42621;
var statearr_42628_42666 = state_42621__$1;
(statearr_42628_42666[(2)] = inst_42617);

(statearr_42628_42666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42622 === (7))){
var inst_42613 = (state_42621[(2)]);
var state_42621__$1 = (function (){var statearr_42629 = state_42621;
(statearr_42629[(8)] = inst_42613);

return statearr_42629;
})();
var statearr_42630_42667 = state_42621__$1;
(statearr_42630_42667[(2)] = null);

(statearr_42630_42667[(1)] = (2));


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
var light$view3d$client$state_machine__40588__auto__ = null;
var light$view3d$client$state_machine__40588__auto____0 = (function (){
var statearr_42631 = [null,null,null,null,null,null,null,null,null];
(statearr_42631[(0)] = light$view3d$client$state_machine__40588__auto__);

(statearr_42631[(1)] = (1));

return statearr_42631;
});
var light$view3d$client$state_machine__40588__auto____1 = (function (state_42621){
while(true){
var ret_value__40589__auto__ = (function (){try{while(true){
var result__40590__auto__ = switch__40587__auto__.call(null,state_42621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40590__auto__;
}
break;
}
}catch (e42632){if((e42632 instanceof Object)){
var ex__40591__auto__ = e42632;
var statearr_42633_42668 = state_42621;
(statearr_42633_42668[(5)] = ex__40591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42669 = state_42621;
state_42621 = G__42669;
continue;
} else {
return ret_value__40589__auto__;
}
break;
}
});
light$view3d$client$state_machine__40588__auto__ = function(state_42621){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__40588__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__40588__auto____1.call(this,state_42621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__40588__auto____0;
light$view3d$client$state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__40588__auto____1;
return light$view3d$client$state_machine__40588__auto__;
})()
})();
var state__40686__auto__ = (function (){var statearr_42634 = f__40685__auto__.call(null);
(statearr_42634[(6)] = c__40684__auto__);

return statearr_42634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40686__auto__);
}));

return c__40684__auto__;
}));

(light.view3d.client.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__40684__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__40685__auto__ = (function (){var switch__40587__auto__ = (function (state_42648){
var state_val_42649 = (state_42648[(1)]);
if((state_val_42649 === (1))){
var state_42648__$1 = state_42648;
var statearr_42650_42670 = state_42648__$1;
(statearr_42650_42670[(2)] = null);

(statearr_42650_42670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42649 === (2))){
var state_42648__$1 = state_42648;
var statearr_42651_42671 = state_42648__$1;
(statearr_42651_42671[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42649 === (3))){
var inst_42646 = (state_42648[(2)]);
var state_42648__$1 = state_42648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42648__$1,inst_42646);
} else {
if((state_val_42649 === (4))){
var inst_42637 = func.call(null,param);
var inst_42638 = cljs.core.async.timeout.call(null,time_out);
var state_42648__$1 = (function (){var statearr_42653 = state_42648;
(statearr_42653[(7)] = inst_42637);

return statearr_42653;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42648__$1,(7),inst_42638);
} else {
if((state_val_42649 === (5))){
var state_42648__$1 = state_42648;
var statearr_42654_42672 = state_42648__$1;
(statearr_42654_42672[(2)] = null);

(statearr_42654_42672[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42649 === (6))){
var inst_42644 = (state_42648[(2)]);
var state_42648__$1 = state_42648;
var statearr_42655_42673 = state_42648__$1;
(statearr_42655_42673[(2)] = inst_42644);

(statearr_42655_42673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42649 === (7))){
var inst_42640 = (state_42648[(2)]);
var state_42648__$1 = (function (){var statearr_42656 = state_42648;
(statearr_42656[(8)] = inst_42640);

return statearr_42656;
})();
var statearr_42657_42674 = state_42648__$1;
(statearr_42657_42674[(2)] = null);

(statearr_42657_42674[(1)] = (2));


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
var light$view3d$client$state_machine__40588__auto__ = null;
var light$view3d$client$state_machine__40588__auto____0 = (function (){
var statearr_42658 = [null,null,null,null,null,null,null,null,null];
(statearr_42658[(0)] = light$view3d$client$state_machine__40588__auto__);

(statearr_42658[(1)] = (1));

return statearr_42658;
});
var light$view3d$client$state_machine__40588__auto____1 = (function (state_42648){
while(true){
var ret_value__40589__auto__ = (function (){try{while(true){
var result__40590__auto__ = switch__40587__auto__.call(null,state_42648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40590__auto__;
}
break;
}
}catch (e42659){if((e42659 instanceof Object)){
var ex__40591__auto__ = e42659;
var statearr_42660_42675 = state_42648;
(statearr_42660_42675[(5)] = ex__40591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42676 = state_42648;
state_42648 = G__42676;
continue;
} else {
return ret_value__40589__auto__;
}
break;
}
});
light$view3d$client$state_machine__40588__auto__ = function(state_42648){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__40588__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__40588__auto____1.call(this,state_42648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__40588__auto____0;
light$view3d$client$state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__40588__auto____1;
return light$view3d$client$state_machine__40588__auto__;
})()
})();
var state__40686__auto__ = (function (){var statearr_42661 = f__40685__auto__.call(null);
(statearr_42661[(6)] = c__40684__auto__);

return statearr_42661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40686__auto__);
}));

return c__40684__auto__;
}));

(light.view3d.client.repeater.cljs$lang$maxFixedArity = 3);

light.view3d.client.repeater_BANG_ = (function light$view3d$client$repeater_BANG_(var_args){
var G__42678 = arguments.length;
switch (G__42678) {
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

(light.view3d.client.repeater_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__40684__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__40685__auto__ = (function (){var switch__40587__auto__ = (function (state_42693){
var state_val_42694 = (state_42693[(1)]);
if((state_val_42694 === (1))){
var state_42693__$1 = state_42693;
var statearr_42695_42736 = state_42693__$1;
(statearr_42695_42736[(2)] = null);

(statearr_42695_42736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42694 === (2))){
var state_42693__$1 = state_42693;
var statearr_42696_42737 = state_42693__$1;
(statearr_42696_42737[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42694 === (3))){
var inst_42691 = (state_42693[(2)]);
var state_42693__$1 = state_42693;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42693__$1,inst_42691);
} else {
if((state_val_42694 === (4))){
var inst_42681 = func.call(null);
var inst_42682 = cljs.core.deref.call(null,time_out);
var inst_42683 = cljs.core.async.timeout.call(null,inst_42682);
var state_42693__$1 = (function (){var statearr_42698 = state_42693;
(statearr_42698[(7)] = inst_42681);

return statearr_42698;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42693__$1,(7),inst_42683);
} else {
if((state_val_42694 === (5))){
var state_42693__$1 = state_42693;
var statearr_42699_42738 = state_42693__$1;
(statearr_42699_42738[(2)] = null);

(statearr_42699_42738[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42694 === (6))){
var inst_42689 = (state_42693[(2)]);
var state_42693__$1 = state_42693;
var statearr_42700_42739 = state_42693__$1;
(statearr_42700_42739[(2)] = inst_42689);

(statearr_42700_42739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42694 === (7))){
var inst_42685 = (state_42693[(2)]);
var state_42693__$1 = (function (){var statearr_42701 = state_42693;
(statearr_42701[(8)] = inst_42685);

return statearr_42701;
})();
var statearr_42702_42740 = state_42693__$1;
(statearr_42702_42740[(2)] = null);

(statearr_42702_42740[(1)] = (2));


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
var light$view3d$client$state_machine__40588__auto__ = null;
var light$view3d$client$state_machine__40588__auto____0 = (function (){
var statearr_42703 = [null,null,null,null,null,null,null,null,null];
(statearr_42703[(0)] = light$view3d$client$state_machine__40588__auto__);

(statearr_42703[(1)] = (1));

return statearr_42703;
});
var light$view3d$client$state_machine__40588__auto____1 = (function (state_42693){
while(true){
var ret_value__40589__auto__ = (function (){try{while(true){
var result__40590__auto__ = switch__40587__auto__.call(null,state_42693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40590__auto__;
}
break;
}
}catch (e42704){if((e42704 instanceof Object)){
var ex__40591__auto__ = e42704;
var statearr_42705_42741 = state_42693;
(statearr_42705_42741[(5)] = ex__40591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42742 = state_42693;
state_42693 = G__42742;
continue;
} else {
return ret_value__40589__auto__;
}
break;
}
});
light$view3d$client$state_machine__40588__auto__ = function(state_42693){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__40588__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__40588__auto____1.call(this,state_42693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__40588__auto____0;
light$view3d$client$state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__40588__auto____1;
return light$view3d$client$state_machine__40588__auto__;
})()
})();
var state__40686__auto__ = (function (){var statearr_42706 = f__40685__auto__.call(null);
(statearr_42706[(6)] = c__40684__auto__);

return statearr_42706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40686__auto__);
}));

return c__40684__auto__;
}));

(light.view3d.client.repeater_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__40684__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__40685__auto__ = (function (){var switch__40587__auto__ = (function (state_42721){
var state_val_42722 = (state_42721[(1)]);
if((state_val_42722 === (1))){
var state_42721__$1 = state_42721;
var statearr_42723_42743 = state_42721__$1;
(statearr_42723_42743[(2)] = null);

(statearr_42723_42743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (2))){
var state_42721__$1 = state_42721;
var statearr_42724_42744 = state_42721__$1;
(statearr_42724_42744[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (3))){
var inst_42719 = (state_42721[(2)]);
var state_42721__$1 = state_42721;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42721__$1,inst_42719);
} else {
if((state_val_42722 === (4))){
var inst_42709 = func.call(null,param);
var inst_42710 = cljs.core.deref.call(null,time_out);
var inst_42711 = cljs.core.async.timeout.call(null,inst_42710);
var state_42721__$1 = (function (){var statearr_42726 = state_42721;
(statearr_42726[(7)] = inst_42709);

return statearr_42726;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42721__$1,(7),inst_42711);
} else {
if((state_val_42722 === (5))){
var state_42721__$1 = state_42721;
var statearr_42727_42745 = state_42721__$1;
(statearr_42727_42745[(2)] = null);

(statearr_42727_42745[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (6))){
var inst_42717 = (state_42721[(2)]);
var state_42721__$1 = state_42721;
var statearr_42728_42746 = state_42721__$1;
(statearr_42728_42746[(2)] = inst_42717);

(statearr_42728_42746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (7))){
var inst_42713 = (state_42721[(2)]);
var state_42721__$1 = (function (){var statearr_42729 = state_42721;
(statearr_42729[(8)] = inst_42713);

return statearr_42729;
})();
var statearr_42730_42747 = state_42721__$1;
(statearr_42730_42747[(2)] = null);

(statearr_42730_42747[(1)] = (2));


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
var light$view3d$client$state_machine__40588__auto__ = null;
var light$view3d$client$state_machine__40588__auto____0 = (function (){
var statearr_42731 = [null,null,null,null,null,null,null,null,null];
(statearr_42731[(0)] = light$view3d$client$state_machine__40588__auto__);

(statearr_42731[(1)] = (1));

return statearr_42731;
});
var light$view3d$client$state_machine__40588__auto____1 = (function (state_42721){
while(true){
var ret_value__40589__auto__ = (function (){try{while(true){
var result__40590__auto__ = switch__40587__auto__.call(null,state_42721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40590__auto__;
}
break;
}
}catch (e42732){if((e42732 instanceof Object)){
var ex__40591__auto__ = e42732;
var statearr_42733_42748 = state_42721;
(statearr_42733_42748[(5)] = ex__40591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42732;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42749 = state_42721;
state_42721 = G__42749;
continue;
} else {
return ret_value__40589__auto__;
}
break;
}
});
light$view3d$client$state_machine__40588__auto__ = function(state_42721){
switch(arguments.length){
case 0:
return light$view3d$client$state_machine__40588__auto____0.call(this);
case 1:
return light$view3d$client$state_machine__40588__auto____1.call(this,state_42721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
light$view3d$client$state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$0 = light$view3d$client$state_machine__40588__auto____0;
light$view3d$client$state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$1 = light$view3d$client$state_machine__40588__auto____1;
return light$view3d$client$state_machine__40588__auto__;
})()
})();
var state__40686__auto__ = (function (){var statearr_42734 = f__40685__auto__.call(null);
(statearr_42734[(6)] = c__40684__auto__);

return statearr_42734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40686__auto__);
}));

return c__40684__auto__;
}));

(light.view3d.client.repeater_BANG_.cljs$lang$maxFixedArity = 3);

light.view3d.client.read_transit = (function light$view3d$client$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
light.view3d.client.by_id = (function light$view3d$client$by_id(id){
return document.getElementById(id);
});
light.view3d.client.set_html_BANG_ = (function light$view3d$client$set_html_BANG_(id,msg){
return (document.getElementById(id).innerHTML = msg);
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
var pred__42750 = cljs.core._EQ_;
var expr__42751 = mode;
if(cljs.core.truth_(pred__42750.call(null,(1),expr__42751))){
return light.czm.core.zoom_in.call(null);
} else {
if(cljs.core.truth_(pred__42750.call(null,(-1),expr__42751))){
return light.czm.core.zoom_out.call(null);
} else {
if(cljs.core.truth_(pred__42750.call(null,(0),expr__42751))){
return light.czm.core.zoom_no.call(null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__42751)].join('')));
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
}catch (e42753){if((e42753 instanceof Error)){
var e = e42753;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e42753;

}
}})()], null),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),light.view3d.client.error_handler], null));

return cljs.core.vreset_BANG_.call(null,light.view3d.client.RESPONSE,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
});
light.view3d.client.handle_request = (function light$view3d$client$handle_request(request){
var temp__5802__auto___42760 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5802__auto___42760)){
var vie_42761 = temp__5802__auto___42760;
light.view3d.client.view.call(null,vie_42761);
} else {
}

var temp__5802__auto___42762 = new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5802__auto___42762)){
var pit_42763 = temp__5802__auto___42762;
light.view3d.client.pitch.call(null,pit_42763);
} else {
}

var temp__5802__auto___42764 = new cljs.core.Keyword(null,"roll","roll",11266999).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5802__auto___42764)){
var rol_42765 = temp__5802__auto___42764;
light.view3d.client.roll.call(null,rol_42765);
} else {
}

var temp__5802__auto___42766 = new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5802__auto___42766)){
var vec__42754_42767 = temp__5802__auto___42766;
var lat_42768 = cljs.core.nth.call(null,vec__42754_42767,(0),null);
var lon_42769 = cljs.core.nth.call(null,vec__42754_42767,(1),null);
var vec__42757_42770 = light.czm.core.sample_height.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [light.geo.calc.radians.call(null,lat_42768),light.geo.calc.radians.call(null,lon_42769)], null),(0));
var __42771 = cljs.core.nth.call(null,vec__42757_42770,(0),null);
var __42772__$1 = cljs.core.nth.call(null,vec__42757_42770,(1),null);
var sh_42773 = cljs.core.nth.call(null,vec__42757_42770,(2),null);
cljs.core._vreset_BANG_.call(null,light.view3d.client.RESPONSE,cljs.core.assoc.call(null,cljs.core._deref.call(null,light.view3d.client.RESPONSE),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(sh_42773 | (0))));
} else {
}

return light.view3d.client.response_request.call(null);
});
light.view3d.client.handle_vehicle = (function light$view3d$client$handle_vehicle(vehicle){
var vec__42774 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__42774,(0),null);
var lon = cljs.core.nth.call(null,vec__42774,(1),null);
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
var temp__5802__auto___42777 = new cljs.core.Keyword(null,"vehicle","vehicle",1670166968).cljs$core$IFn$_invoke$arity$1(resp);
if(cljs.core.truth_(temp__5802__auto___42777)){
var vehicle_42778 = temp__5802__auto___42777;
light.view3d.client.handle_vehicle.call(null,vehicle_42778);
} else {
}

var temp__5802__auto__ = new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(resp);
if(cljs.core.truth_(temp__5802__auto__)){
var request = temp__5802__auto__;
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
var temp__5804__auto__ = cljs.core.first.call(null,light.view3d.client.read_transit.call(null,response));
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
ajax.core.GET.call(null,"/cli-repl",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transit","transit",359458387),(function (){try{return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),cljs.core.deref.call(null,light.view3d.client.CLI_REPL).call(null,new cljs.core.Keyword(null,"value","value",305978217)));
}catch (e42779){if((e42779 instanceof Error)){
var e = e42779;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e42779;

}
}})()], null),new cljs.core.Keyword(null,"handler","handler",-195596612),hand,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),light.view3d.client.error_handler], null));

return setTimeout(light.view3d.client.run_repl,(1000));
});
light.view3d.client.tst = (function light$view3d$client$tst(){
(light.czm.core.VIEWER.scene.globe.depthTestAgainstTerrain = true);

cljs.core.println.call(null,new cljs.core.Keyword(null,"D","D",-8015893),light.czm.core.VIEWER.scene.globe.depthTestAgainstTerrain);

var ppc = (new Cesium.PointPrimitiveCollection(({"heightReference": Cesium.HeightReference.CLAMP_TO_GROUND})));
var lla = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [61.6,7.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [61.61,7.51], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [61.6,7.52], null)], null);
var clr = Cesium.Color.YELLOW;
var size = (10);
var prims = light.czm.core.VIEWER.scene.primitives.add(ppc);
return fillPointPrimColl(prims,cljs.core.clj__GT_js.call(null,lla),clr,size);
});
cljs.core.enable_console_print_BANG_.call(null);
(window.onload = light.view3d.client.on_load.call(null));
light.view3d.client.run_repl.call(null);
light.view3d.client.tst.call(null);

//# sourceMappingURL=client.js.map
