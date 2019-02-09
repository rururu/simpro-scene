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
var map__22038 = response;
var map__22038__$1 = (((((!((map__22038 == null))))?(((((map__22038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22038):map__22038);
var status = cljs.core.get.call(null,map__22038__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__22038__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
view3d.client.CLI_REPL = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.js.empty_state.call(null),new cljs.core.Keyword(null,"value","value",305978217),null], null));
view3d.client.RESPONSE = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
view3d.client.repeater = (function view3d$client$repeater(var_args){
var G__22041 = arguments.length;
switch (G__22041) {
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
var c__17863__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17863__auto__){
return (function (){
var f__17864__auto__ = (function (){var switch__17840__auto__ = ((function (c__17863__auto__){
return (function (state_22055){
var state_val_22056 = (state_22055[(1)]);
if((state_val_22056 === (1))){
var state_22055__$1 = state_22055;
var statearr_22057_22097 = state_22055__$1;
(statearr_22057_22097[(2)] = null);

(statearr_22057_22097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22056 === (2))){
var state_22055__$1 = state_22055;
var statearr_22058_22098 = state_22055__$1;
(statearr_22058_22098[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22056 === (3))){
var inst_22053 = (state_22055[(2)]);
var state_22055__$1 = state_22055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22055__$1,inst_22053);
} else {
if((state_val_22056 === (4))){
var inst_22044 = func.call(null);
var inst_22045 = cljs.core.async.timeout.call(null,time_out);
var state_22055__$1 = (function (){var statearr_22060 = state_22055;
(statearr_22060[(7)] = inst_22044);

return statearr_22060;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22055__$1,(7),inst_22045);
} else {
if((state_val_22056 === (5))){
var state_22055__$1 = state_22055;
var statearr_22061_22099 = state_22055__$1;
(statearr_22061_22099[(2)] = null);

(statearr_22061_22099[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22056 === (6))){
var inst_22051 = (state_22055[(2)]);
var state_22055__$1 = state_22055;
var statearr_22062_22100 = state_22055__$1;
(statearr_22062_22100[(2)] = inst_22051);

(statearr_22062_22100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22056 === (7))){
var inst_22047 = (state_22055[(2)]);
var state_22055__$1 = (function (){var statearr_22063 = state_22055;
(statearr_22063[(8)] = inst_22047);

return statearr_22063;
})();
var statearr_22064_22101 = state_22055__$1;
(statearr_22064_22101[(2)] = null);

(statearr_22064_22101[(1)] = (2));


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
});})(c__17863__auto__))
;
return ((function (switch__17840__auto__,c__17863__auto__){
return (function() {
var view3d$client$state_machine__17841__auto__ = null;
var view3d$client$state_machine__17841__auto____0 = (function (){
var statearr_22065 = [null,null,null,null,null,null,null,null,null];
(statearr_22065[(0)] = view3d$client$state_machine__17841__auto__);

(statearr_22065[(1)] = (1));

return statearr_22065;
});
var view3d$client$state_machine__17841__auto____1 = (function (state_22055){
while(true){
var ret_value__17842__auto__ = (function (){try{while(true){
var result__17843__auto__ = switch__17840__auto__.call(null,state_22055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17843__auto__;
}
break;
}
}catch (e22066){if((e22066 instanceof Object)){
var ex__17844__auto__ = e22066;
var statearr_22067_22102 = state_22055;
(statearr_22067_22102[(5)] = ex__17844__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17842__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22103 = state_22055;
state_22055 = G__22103;
continue;
} else {
return ret_value__17842__auto__;
}
break;
}
});
view3d$client$state_machine__17841__auto__ = function(state_22055){
switch(arguments.length){
case 0:
return view3d$client$state_machine__17841__auto____0.call(this);
case 1:
return view3d$client$state_machine__17841__auto____1.call(this,state_22055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__17841__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__17841__auto____0;
view3d$client$state_machine__17841__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__17841__auto____1;
return view3d$client$state_machine__17841__auto__;
})()
;})(switch__17840__auto__,c__17863__auto__))
})();
var state__17865__auto__ = (function (){var statearr_22068 = f__17864__auto__.call(null);
(statearr_22068[(6)] = c__17863__auto__);

return statearr_22068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17865__auto__);
});})(c__17863__auto__))
);

return c__17863__auto__;
});

view3d.client.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__17863__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17863__auto__){
return (function (){
var f__17864__auto__ = (function (){var switch__17840__auto__ = ((function (c__17863__auto__){
return (function (state_22082){
var state_val_22083 = (state_22082[(1)]);
if((state_val_22083 === (1))){
var state_22082__$1 = state_22082;
var statearr_22084_22104 = state_22082__$1;
(statearr_22084_22104[(2)] = null);

(statearr_22084_22104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22083 === (2))){
var state_22082__$1 = state_22082;
var statearr_22085_22105 = state_22082__$1;
(statearr_22085_22105[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22083 === (3))){
var inst_22080 = (state_22082[(2)]);
var state_22082__$1 = state_22082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22082__$1,inst_22080);
} else {
if((state_val_22083 === (4))){
var inst_22071 = func.call(null,param);
var inst_22072 = cljs.core.async.timeout.call(null,time_out);
var state_22082__$1 = (function (){var statearr_22087 = state_22082;
(statearr_22087[(7)] = inst_22071);

return statearr_22087;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22082__$1,(7),inst_22072);
} else {
if((state_val_22083 === (5))){
var state_22082__$1 = state_22082;
var statearr_22088_22106 = state_22082__$1;
(statearr_22088_22106[(2)] = null);

(statearr_22088_22106[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22083 === (6))){
var inst_22078 = (state_22082[(2)]);
var state_22082__$1 = state_22082;
var statearr_22089_22107 = state_22082__$1;
(statearr_22089_22107[(2)] = inst_22078);

(statearr_22089_22107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22083 === (7))){
var inst_22074 = (state_22082[(2)]);
var state_22082__$1 = (function (){var statearr_22090 = state_22082;
(statearr_22090[(8)] = inst_22074);

return statearr_22090;
})();
var statearr_22091_22108 = state_22082__$1;
(statearr_22091_22108[(2)] = null);

(statearr_22091_22108[(1)] = (2));


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
});})(c__17863__auto__))
;
return ((function (switch__17840__auto__,c__17863__auto__){
return (function() {
var view3d$client$state_machine__17841__auto__ = null;
var view3d$client$state_machine__17841__auto____0 = (function (){
var statearr_22092 = [null,null,null,null,null,null,null,null,null];
(statearr_22092[(0)] = view3d$client$state_machine__17841__auto__);

(statearr_22092[(1)] = (1));

return statearr_22092;
});
var view3d$client$state_machine__17841__auto____1 = (function (state_22082){
while(true){
var ret_value__17842__auto__ = (function (){try{while(true){
var result__17843__auto__ = switch__17840__auto__.call(null,state_22082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17843__auto__;
}
break;
}
}catch (e22093){if((e22093 instanceof Object)){
var ex__17844__auto__ = e22093;
var statearr_22094_22109 = state_22082;
(statearr_22094_22109[(5)] = ex__17844__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17842__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22110 = state_22082;
state_22082 = G__22110;
continue;
} else {
return ret_value__17842__auto__;
}
break;
}
});
view3d$client$state_machine__17841__auto__ = function(state_22082){
switch(arguments.length){
case 0:
return view3d$client$state_machine__17841__auto____0.call(this);
case 1:
return view3d$client$state_machine__17841__auto____1.call(this,state_22082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__17841__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__17841__auto____0;
view3d$client$state_machine__17841__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__17841__auto____1;
return view3d$client$state_machine__17841__auto__;
})()
;})(switch__17840__auto__,c__17863__auto__))
})();
var state__17865__auto__ = (function (){var statearr_22095 = f__17864__auto__.call(null);
(statearr_22095[(6)] = c__17863__auto__);

return statearr_22095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17865__auto__);
});})(c__17863__auto__))
);

return c__17863__auto__;
});

view3d.client.repeater.cljs$lang$maxFixedArity = 3;

view3d.client.repeater_BANG_ = (function view3d$client$repeater_BANG_(var_args){
var G__22112 = arguments.length;
switch (G__22112) {
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
var c__17863__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17863__auto__){
return (function (){
var f__17864__auto__ = (function (){var switch__17840__auto__ = ((function (c__17863__auto__){
return (function (state_22127){
var state_val_22128 = (state_22127[(1)]);
if((state_val_22128 === (1))){
var state_22127__$1 = state_22127;
var statearr_22129_22170 = state_22127__$1;
(statearr_22129_22170[(2)] = null);

(statearr_22129_22170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22128 === (2))){
var state_22127__$1 = state_22127;
var statearr_22130_22171 = state_22127__$1;
(statearr_22130_22171[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22128 === (3))){
var inst_22125 = (state_22127[(2)]);
var state_22127__$1 = state_22127;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22127__$1,inst_22125);
} else {
if((state_val_22128 === (4))){
var inst_22115 = func.call(null);
var inst_22116 = cljs.core.deref.call(null,time_out);
var inst_22117 = cljs.core.async.timeout.call(null,inst_22116);
var state_22127__$1 = (function (){var statearr_22132 = state_22127;
(statearr_22132[(7)] = inst_22115);

return statearr_22132;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22127__$1,(7),inst_22117);
} else {
if((state_val_22128 === (5))){
var state_22127__$1 = state_22127;
var statearr_22133_22172 = state_22127__$1;
(statearr_22133_22172[(2)] = null);

(statearr_22133_22172[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22128 === (6))){
var inst_22123 = (state_22127[(2)]);
var state_22127__$1 = state_22127;
var statearr_22134_22173 = state_22127__$1;
(statearr_22134_22173[(2)] = inst_22123);

(statearr_22134_22173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22128 === (7))){
var inst_22119 = (state_22127[(2)]);
var state_22127__$1 = (function (){var statearr_22135 = state_22127;
(statearr_22135[(8)] = inst_22119);

return statearr_22135;
})();
var statearr_22136_22174 = state_22127__$1;
(statearr_22136_22174[(2)] = null);

(statearr_22136_22174[(1)] = (2));


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
});})(c__17863__auto__))
;
return ((function (switch__17840__auto__,c__17863__auto__){
return (function() {
var view3d$client$state_machine__17841__auto__ = null;
var view3d$client$state_machine__17841__auto____0 = (function (){
var statearr_22137 = [null,null,null,null,null,null,null,null,null];
(statearr_22137[(0)] = view3d$client$state_machine__17841__auto__);

(statearr_22137[(1)] = (1));

return statearr_22137;
});
var view3d$client$state_machine__17841__auto____1 = (function (state_22127){
while(true){
var ret_value__17842__auto__ = (function (){try{while(true){
var result__17843__auto__ = switch__17840__auto__.call(null,state_22127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17843__auto__;
}
break;
}
}catch (e22138){if((e22138 instanceof Object)){
var ex__17844__auto__ = e22138;
var statearr_22139_22175 = state_22127;
(statearr_22139_22175[(5)] = ex__17844__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17842__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22176 = state_22127;
state_22127 = G__22176;
continue;
} else {
return ret_value__17842__auto__;
}
break;
}
});
view3d$client$state_machine__17841__auto__ = function(state_22127){
switch(arguments.length){
case 0:
return view3d$client$state_machine__17841__auto____0.call(this);
case 1:
return view3d$client$state_machine__17841__auto____1.call(this,state_22127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__17841__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__17841__auto____0;
view3d$client$state_machine__17841__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__17841__auto____1;
return view3d$client$state_machine__17841__auto__;
})()
;})(switch__17840__auto__,c__17863__auto__))
})();
var state__17865__auto__ = (function (){var statearr_22140 = f__17864__auto__.call(null);
(statearr_22140[(6)] = c__17863__auto__);

return statearr_22140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17865__auto__);
});})(c__17863__auto__))
);

return c__17863__auto__;
});

view3d.client.repeater_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__17863__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17863__auto__){
return (function (){
var f__17864__auto__ = (function (){var switch__17840__auto__ = ((function (c__17863__auto__){
return (function (state_22155){
var state_val_22156 = (state_22155[(1)]);
if((state_val_22156 === (1))){
var state_22155__$1 = state_22155;
var statearr_22157_22177 = state_22155__$1;
(statearr_22157_22177[(2)] = null);

(statearr_22157_22177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22156 === (2))){
var state_22155__$1 = state_22155;
var statearr_22158_22178 = state_22155__$1;
(statearr_22158_22178[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22156 === (3))){
var inst_22153 = (state_22155[(2)]);
var state_22155__$1 = state_22155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22155__$1,inst_22153);
} else {
if((state_val_22156 === (4))){
var inst_22143 = func.call(null,param);
var inst_22144 = cljs.core.deref.call(null,time_out);
var inst_22145 = cljs.core.async.timeout.call(null,inst_22144);
var state_22155__$1 = (function (){var statearr_22160 = state_22155;
(statearr_22160[(7)] = inst_22143);

return statearr_22160;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22155__$1,(7),inst_22145);
} else {
if((state_val_22156 === (5))){
var state_22155__$1 = state_22155;
var statearr_22161_22179 = state_22155__$1;
(statearr_22161_22179[(2)] = null);

(statearr_22161_22179[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22156 === (6))){
var inst_22151 = (state_22155[(2)]);
var state_22155__$1 = state_22155;
var statearr_22162_22180 = state_22155__$1;
(statearr_22162_22180[(2)] = inst_22151);

(statearr_22162_22180[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22156 === (7))){
var inst_22147 = (state_22155[(2)]);
var state_22155__$1 = (function (){var statearr_22163 = state_22155;
(statearr_22163[(8)] = inst_22147);

return statearr_22163;
})();
var statearr_22164_22181 = state_22155__$1;
(statearr_22164_22181[(2)] = null);

(statearr_22164_22181[(1)] = (2));


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
});})(c__17863__auto__))
;
return ((function (switch__17840__auto__,c__17863__auto__){
return (function() {
var view3d$client$state_machine__17841__auto__ = null;
var view3d$client$state_machine__17841__auto____0 = (function (){
var statearr_22165 = [null,null,null,null,null,null,null,null,null];
(statearr_22165[(0)] = view3d$client$state_machine__17841__auto__);

(statearr_22165[(1)] = (1));

return statearr_22165;
});
var view3d$client$state_machine__17841__auto____1 = (function (state_22155){
while(true){
var ret_value__17842__auto__ = (function (){try{while(true){
var result__17843__auto__ = switch__17840__auto__.call(null,state_22155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17843__auto__;
}
break;
}
}catch (e22166){if((e22166 instanceof Object)){
var ex__17844__auto__ = e22166;
var statearr_22167_22182 = state_22155;
(statearr_22167_22182[(5)] = ex__17844__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17842__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22183 = state_22155;
state_22155 = G__22183;
continue;
} else {
return ret_value__17842__auto__;
}
break;
}
});
view3d$client$state_machine__17841__auto__ = function(state_22155){
switch(arguments.length){
case 0:
return view3d$client$state_machine__17841__auto____0.call(this);
case 1:
return view3d$client$state_machine__17841__auto____1.call(this,state_22155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$client$state_machine__17841__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__17841__auto____0;
view3d$client$state_machine__17841__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__17841__auto____1;
return view3d$client$state_machine__17841__auto__;
})()
;})(switch__17840__auto__,c__17863__auto__))
})();
var state__17865__auto__ = (function (){var statearr_22168 = f__17864__auto__.call(null);
(statearr_22168[(6)] = c__17863__auto__);

return statearr_22168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17865__auto__);
});})(c__17863__auto__))
);

return c__17863__auto__;
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
}catch (e22184){if((e22184 instanceof Error)){
var e = e22184;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e22184;

}
}})()], null),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));

return cljs.core.vreset_BANG_.call(null,view3d.client.RESPONSE,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
});
view3d.client.handle_request = (function view3d$client$handle_request(request){
var temp__5718__auto___22191 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5718__auto___22191)){
var vie_22192 = temp__5718__auto___22191;
view3d.client.view.call(null,vie_22192);
} else {
}

var temp__5718__auto___22193 = new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5718__auto___22193)){
var pit_22194 = temp__5718__auto___22193;
view3d.client.pitch.call(null,pit_22194);
} else {
}

var temp__5718__auto___22195 = new cljs.core.Keyword(null,"roll","roll",11266999).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5718__auto___22195)){
var rol_22196 = temp__5718__auto___22195;
view3d.client.roll.call(null,rol_22196);
} else {
}

var temp__5718__auto___22197 = new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5718__auto___22197)){
var vec__22185_22198 = temp__5718__auto___22197;
var lat_22199 = cljs.core.nth.call(null,vec__22185_22198,(0),null);
var lon_22200 = cljs.core.nth.call(null,vec__22185_22198,(1),null);
var vec__22188_22201 = czm.core.sample_height.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [geo.calc.radians.call(null,lat_22199),geo.calc.radians.call(null,lon_22200)], null),(0));
var __22202 = cljs.core.nth.call(null,vec__22188_22201,(0),null);
var __22203__$1 = cljs.core.nth.call(null,vec__22188_22201,(1),null);
var sh_22204 = cljs.core.nth.call(null,vec__22188_22201,(2),null);
cljs.core._vreset_BANG_.call(null,view3d.client.RESPONSE,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.RESPONSE),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(sh_22204 | (0))));
} else {
}

return view3d.client.response_request.call(null);
});
view3d.client.handle_vehicle = (function view3d$client$handle_vehicle(vehicle){
var vec__22205 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__22205,(0),null);
var lon = cljs.core.nth.call(null,vec__22205,(1),null);
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
var temp__5718__auto___22208 = new cljs.core.Keyword(null,"vehicle","vehicle",1670166968).cljs$core$IFn$_invoke$arity$1(resp);
if(cljs.core.truth_(temp__5718__auto___22208)){
var vehicle_22209 = temp__5718__auto___22208;
view3d.client.handle_vehicle.call(null,vehicle_22209);
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
}catch (e22210){if((e22210 instanceof Error)){
var e = e22210;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"NOT-TRANSIT","NOT-TRANSIT",-458316464));
} else {
throw e22210;

}
}})()], null),new cljs.core.Keyword(null,"handler","handler",-195596612),hand,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));

return setTimeout(view3d.client.run_repl,(1000));
});
cljs.core.enable_console_print_BANG_.call(null);
window.onload = view3d.client.on_load.call(null);
view3d.client.run_repl.call(null);

//# sourceMappingURL=client.js.map
