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
var map__12143 = response;
var map__12143__$1 = ((((!((map__12143 == null)))?((((map__12143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12143.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12143):map__12143);
var status = cljs.core.get.call(null,map__12143__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__12143__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
view3d.client.repeater = (function view3d$client$repeater(var_args){
var G__12146 = arguments.length;
switch (G__12146) {
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
var c__11867__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11867__auto__){
return (function (){
var f__11868__auto__ = (function (){var switch__11844__auto__ = ((function (c__11867__auto__){
return (function (state_12160){
var state_val_12161 = (state_12160[(1)]);
if((state_val_12161 === (1))){
var state_12160__$1 = state_12160;
var statearr_12162_12202 = state_12160__$1;
(statearr_12162_12202[(2)] = null);

(statearr_12162_12202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12161 === (2))){
var state_12160__$1 = state_12160;
var statearr_12163_12203 = state_12160__$1;
(statearr_12163_12203[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12161 === (3))){
var inst_12158 = (state_12160[(2)]);
var state_12160__$1 = state_12160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12160__$1,inst_12158);
} else {
if((state_val_12161 === (4))){
var inst_12149 = func.call(null);
var inst_12150 = cljs.core.async.timeout.call(null,time_out);
var state_12160__$1 = (function (){var statearr_12165 = state_12160;
(statearr_12165[(7)] = inst_12149);

return statearr_12165;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12160__$1,(7),inst_12150);
} else {
if((state_val_12161 === (5))){
var state_12160__$1 = state_12160;
var statearr_12166_12204 = state_12160__$1;
(statearr_12166_12204[(2)] = null);

(statearr_12166_12204[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12161 === (6))){
var inst_12156 = (state_12160[(2)]);
var state_12160__$1 = state_12160;
var statearr_12167_12205 = state_12160__$1;
(statearr_12167_12205[(2)] = inst_12156);

(statearr_12167_12205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12161 === (7))){
var inst_12152 = (state_12160[(2)]);
var state_12160__$1 = (function (){var statearr_12168 = state_12160;
(statearr_12168[(8)] = inst_12152);

return statearr_12168;
})();
var statearr_12169_12206 = state_12160__$1;
(statearr_12169_12206[(2)] = null);

(statearr_12169_12206[(1)] = (2));


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
});})(c__11867__auto__))
;
return ((function (switch__11844__auto__,c__11867__auto__){
return (function() {
var view3d$client$state_machine__11845__auto__ = null;
var view3d$client$state_machine__11845__auto____0 = (function (){
var statearr_12170 = [null,null,null,null,null,null,null,null,null];
(statearr_12170[(0)] = view3d$client$state_machine__11845__auto__);

(statearr_12170[(1)] = (1));

return statearr_12170;
});
var view3d$client$state_machine__11845__auto____1 = (function (state_12160){
while(true){
var ret_value__11846__auto__ = (function (){try{while(true){
var result__11847__auto__ = switch__11844__auto__.call(null,state_12160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11847__auto__;
}
break;
}
}catch (e12171){if((e12171 instanceof Object)){
var ex__11848__auto__ = e12171;
var statearr_12172_12207 = state_12160;
(statearr_12172_12207[(5)] = ex__11848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12208 = state_12160;
state_12160 = G__12208;
continue;
} else {
return ret_value__11846__auto__;
}
break;
}
});
view3d$client$state_machine__11845__auto__ = function(state_12160){
switch(arguments.length){
case 0:
return view3d$client$state_machine__11845__auto____0.call(this);
case 1:
return view3d$client$state_machine__11845__auto____1.call(this,state_12160);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
view3d$client$state_machine__11845__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__11845__auto____0;
view3d$client$state_machine__11845__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__11845__auto____1;
return view3d$client$state_machine__11845__auto__;
})()
;})(switch__11844__auto__,c__11867__auto__))
})();
var state__11869__auto__ = (function (){var statearr_12173 = f__11868__auto__.call(null);
(statearr_12173[(6)] = c__11867__auto__);

return statearr_12173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11869__auto__);
});})(c__11867__auto__))
);

return c__11867__auto__;
});

view3d.client.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__11867__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11867__auto__){
return (function (){
var f__11868__auto__ = (function (){var switch__11844__auto__ = ((function (c__11867__auto__){
return (function (state_12187){
var state_val_12188 = (state_12187[(1)]);
if((state_val_12188 === (1))){
var state_12187__$1 = state_12187;
var statearr_12189_12209 = state_12187__$1;
(statearr_12189_12209[(2)] = null);

(statearr_12189_12209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12188 === (2))){
var state_12187__$1 = state_12187;
var statearr_12190_12210 = state_12187__$1;
(statearr_12190_12210[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12188 === (3))){
var inst_12185 = (state_12187[(2)]);
var state_12187__$1 = state_12187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12187__$1,inst_12185);
} else {
if((state_val_12188 === (4))){
var inst_12176 = func.call(null,param);
var inst_12177 = cljs.core.async.timeout.call(null,time_out);
var state_12187__$1 = (function (){var statearr_12192 = state_12187;
(statearr_12192[(7)] = inst_12176);

return statearr_12192;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12187__$1,(7),inst_12177);
} else {
if((state_val_12188 === (5))){
var state_12187__$1 = state_12187;
var statearr_12193_12211 = state_12187__$1;
(statearr_12193_12211[(2)] = null);

(statearr_12193_12211[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12188 === (6))){
var inst_12183 = (state_12187[(2)]);
var state_12187__$1 = state_12187;
var statearr_12194_12212 = state_12187__$1;
(statearr_12194_12212[(2)] = inst_12183);

(statearr_12194_12212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12188 === (7))){
var inst_12179 = (state_12187[(2)]);
var state_12187__$1 = (function (){var statearr_12195 = state_12187;
(statearr_12195[(8)] = inst_12179);

return statearr_12195;
})();
var statearr_12196_12213 = state_12187__$1;
(statearr_12196_12213[(2)] = null);

(statearr_12196_12213[(1)] = (2));


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
});})(c__11867__auto__))
;
return ((function (switch__11844__auto__,c__11867__auto__){
return (function() {
var view3d$client$state_machine__11845__auto__ = null;
var view3d$client$state_machine__11845__auto____0 = (function (){
var statearr_12197 = [null,null,null,null,null,null,null,null,null];
(statearr_12197[(0)] = view3d$client$state_machine__11845__auto__);

(statearr_12197[(1)] = (1));

return statearr_12197;
});
var view3d$client$state_machine__11845__auto____1 = (function (state_12187){
while(true){
var ret_value__11846__auto__ = (function (){try{while(true){
var result__11847__auto__ = switch__11844__auto__.call(null,state_12187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11847__auto__;
}
break;
}
}catch (e12198){if((e12198 instanceof Object)){
var ex__11848__auto__ = e12198;
var statearr_12199_12214 = state_12187;
(statearr_12199_12214[(5)] = ex__11848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12215 = state_12187;
state_12187 = G__12215;
continue;
} else {
return ret_value__11846__auto__;
}
break;
}
});
view3d$client$state_machine__11845__auto__ = function(state_12187){
switch(arguments.length){
case 0:
return view3d$client$state_machine__11845__auto____0.call(this);
case 1:
return view3d$client$state_machine__11845__auto____1.call(this,state_12187);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
view3d$client$state_machine__11845__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__11845__auto____0;
view3d$client$state_machine__11845__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__11845__auto____1;
return view3d$client$state_machine__11845__auto__;
})()
;})(switch__11844__auto__,c__11867__auto__))
})();
var state__11869__auto__ = (function (){var statearr_12200 = f__11868__auto__.call(null);
(statearr_12200[(6)] = c__11867__auto__);

return statearr_12200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11869__auto__);
});})(c__11867__auto__))
);

return c__11867__auto__;
});

view3d.client.repeater.cljs$lang$maxFixedArity = 3;

view3d.client.repeater_BANG_ = (function view3d$client$repeater_BANG_(var_args){
var G__12217 = arguments.length;
switch (G__12217) {
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
var c__11867__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11867__auto__){
return (function (){
var f__11868__auto__ = (function (){var switch__11844__auto__ = ((function (c__11867__auto__){
return (function (state_12232){
var state_val_12233 = (state_12232[(1)]);
if((state_val_12233 === (1))){
var state_12232__$1 = state_12232;
var statearr_12234_12275 = state_12232__$1;
(statearr_12234_12275[(2)] = null);

(statearr_12234_12275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12233 === (2))){
var state_12232__$1 = state_12232;
var statearr_12235_12276 = state_12232__$1;
(statearr_12235_12276[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12233 === (3))){
var inst_12230 = (state_12232[(2)]);
var state_12232__$1 = state_12232;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12232__$1,inst_12230);
} else {
if((state_val_12233 === (4))){
var inst_12220 = func.call(null);
var inst_12221 = cljs.core.deref.call(null,time_out);
var inst_12222 = cljs.core.async.timeout.call(null,inst_12221);
var state_12232__$1 = (function (){var statearr_12237 = state_12232;
(statearr_12237[(7)] = inst_12220);

return statearr_12237;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12232__$1,(7),inst_12222);
} else {
if((state_val_12233 === (5))){
var state_12232__$1 = state_12232;
var statearr_12238_12277 = state_12232__$1;
(statearr_12238_12277[(2)] = null);

(statearr_12238_12277[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12233 === (6))){
var inst_12228 = (state_12232[(2)]);
var state_12232__$1 = state_12232;
var statearr_12239_12278 = state_12232__$1;
(statearr_12239_12278[(2)] = inst_12228);

(statearr_12239_12278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12233 === (7))){
var inst_12224 = (state_12232[(2)]);
var state_12232__$1 = (function (){var statearr_12240 = state_12232;
(statearr_12240[(8)] = inst_12224);

return statearr_12240;
})();
var statearr_12241_12279 = state_12232__$1;
(statearr_12241_12279[(2)] = null);

(statearr_12241_12279[(1)] = (2));


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
});})(c__11867__auto__))
;
return ((function (switch__11844__auto__,c__11867__auto__){
return (function() {
var view3d$client$state_machine__11845__auto__ = null;
var view3d$client$state_machine__11845__auto____0 = (function (){
var statearr_12242 = [null,null,null,null,null,null,null,null,null];
(statearr_12242[(0)] = view3d$client$state_machine__11845__auto__);

(statearr_12242[(1)] = (1));

return statearr_12242;
});
var view3d$client$state_machine__11845__auto____1 = (function (state_12232){
while(true){
var ret_value__11846__auto__ = (function (){try{while(true){
var result__11847__auto__ = switch__11844__auto__.call(null,state_12232);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11847__auto__;
}
break;
}
}catch (e12243){if((e12243 instanceof Object)){
var ex__11848__auto__ = e12243;
var statearr_12244_12280 = state_12232;
(statearr_12244_12280[(5)] = ex__11848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12281 = state_12232;
state_12232 = G__12281;
continue;
} else {
return ret_value__11846__auto__;
}
break;
}
});
view3d$client$state_machine__11845__auto__ = function(state_12232){
switch(arguments.length){
case 0:
return view3d$client$state_machine__11845__auto____0.call(this);
case 1:
return view3d$client$state_machine__11845__auto____1.call(this,state_12232);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
view3d$client$state_machine__11845__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__11845__auto____0;
view3d$client$state_machine__11845__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__11845__auto____1;
return view3d$client$state_machine__11845__auto__;
})()
;})(switch__11844__auto__,c__11867__auto__))
})();
var state__11869__auto__ = (function (){var statearr_12245 = f__11868__auto__.call(null);
(statearr_12245[(6)] = c__11867__auto__);

return statearr_12245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11869__auto__);
});})(c__11867__auto__))
);

return c__11867__auto__;
});

view3d.client.repeater_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__11867__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11867__auto__){
return (function (){
var f__11868__auto__ = (function (){var switch__11844__auto__ = ((function (c__11867__auto__){
return (function (state_12260){
var state_val_12261 = (state_12260[(1)]);
if((state_val_12261 === (1))){
var state_12260__$1 = state_12260;
var statearr_12262_12282 = state_12260__$1;
(statearr_12262_12282[(2)] = null);

(statearr_12262_12282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12261 === (2))){
var state_12260__$1 = state_12260;
var statearr_12263_12283 = state_12260__$1;
(statearr_12263_12283[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12261 === (3))){
var inst_12258 = (state_12260[(2)]);
var state_12260__$1 = state_12260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12260__$1,inst_12258);
} else {
if((state_val_12261 === (4))){
var inst_12248 = func.call(null,param);
var inst_12249 = cljs.core.deref.call(null,time_out);
var inst_12250 = cljs.core.async.timeout.call(null,inst_12249);
var state_12260__$1 = (function (){var statearr_12265 = state_12260;
(statearr_12265[(7)] = inst_12248);

return statearr_12265;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12260__$1,(7),inst_12250);
} else {
if((state_val_12261 === (5))){
var state_12260__$1 = state_12260;
var statearr_12266_12284 = state_12260__$1;
(statearr_12266_12284[(2)] = null);

(statearr_12266_12284[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12261 === (6))){
var inst_12256 = (state_12260[(2)]);
var state_12260__$1 = state_12260;
var statearr_12267_12285 = state_12260__$1;
(statearr_12267_12285[(2)] = inst_12256);

(statearr_12267_12285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12261 === (7))){
var inst_12252 = (state_12260[(2)]);
var state_12260__$1 = (function (){var statearr_12268 = state_12260;
(statearr_12268[(8)] = inst_12252);

return statearr_12268;
})();
var statearr_12269_12286 = state_12260__$1;
(statearr_12269_12286[(2)] = null);

(statearr_12269_12286[(1)] = (2));


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
});})(c__11867__auto__))
;
return ((function (switch__11844__auto__,c__11867__auto__){
return (function() {
var view3d$client$state_machine__11845__auto__ = null;
var view3d$client$state_machine__11845__auto____0 = (function (){
var statearr_12270 = [null,null,null,null,null,null,null,null,null];
(statearr_12270[(0)] = view3d$client$state_machine__11845__auto__);

(statearr_12270[(1)] = (1));

return statearr_12270;
});
var view3d$client$state_machine__11845__auto____1 = (function (state_12260){
while(true){
var ret_value__11846__auto__ = (function (){try{while(true){
var result__11847__auto__ = switch__11844__auto__.call(null,state_12260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11847__auto__;
}
break;
}
}catch (e12271){if((e12271 instanceof Object)){
var ex__11848__auto__ = e12271;
var statearr_12272_12287 = state_12260;
(statearr_12272_12287[(5)] = ex__11848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12288 = state_12260;
state_12260 = G__12288;
continue;
} else {
return ret_value__11846__auto__;
}
break;
}
});
view3d$client$state_machine__11845__auto__ = function(state_12260){
switch(arguments.length){
case 0:
return view3d$client$state_machine__11845__auto____0.call(this);
case 1:
return view3d$client$state_machine__11845__auto____1.call(this,state_12260);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
view3d$client$state_machine__11845__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__11845__auto____0;
view3d$client$state_machine__11845__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__11845__auto____1;
return view3d$client$state_machine__11845__auto__;
})()
;})(switch__11844__auto__,c__11867__auto__))
})();
var state__11869__auto__ = (function (){var statearr_12273 = f__11868__auto__.call(null);
(statearr_12273[(6)] = c__11867__auto__);

return statearr_12273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11869__auto__);
});})(c__11867__auto__))
);

return c__11867__auto__;
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

view3d.client.by_id.call(null,"view-val").selectedIndex = (function (){var pred__12289 = cljs.core._EQ_;
var expr__12290 = vie;
if(cljs.core.truth_(pred__12289.call(null,"FORWARD",expr__12290))){
return (0);
} else {
if(cljs.core.truth_(pred__12289.call(null,"BACKWARD",expr__12290))){
return (1);
} else {
if(cljs.core.truth_(pred__12289.call(null,"RIGHT",expr__12290))){
return (2);
} else {
if(cljs.core.truth_(pred__12289.call(null,"LEFT",expr__12290))){
return (3);
} else {
if(cljs.core.truth_(pred__12289.call(null,"UP",expr__12290))){
return (4);
} else {
if(cljs.core.truth_(pred__12289.call(null,"DOWN",expr__12290))){
return (5);
} else {
if(cljs.core.truth_(pred__12289.call(null,"FORWARD-RIGHT",expr__12290))){
return (6);
} else {
if(cljs.core.truth_(pred__12289.call(null,"FORWARD-LEFT",expr__12290))){
return (7);
} else {
if(cljs.core.truth_(pred__12289.call(null,"BACKWARD-RIGHT",expr__12290))){
return (8);
} else {
if(cljs.core.truth_(pred__12289.call(null,"BACKWARD-LEFT",expr__12290))){
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
var vec__12292 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__12292,(0),null);
var lon = cljs.core.nth.call(null,vec__12292,(1),null);
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
var map__12295 = temp__5455__auto__;
var map__12295__$1 = ((((!((map__12295 == null)))?((((map__12295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12295.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12295):map__12295);
var view = cljs.core.get.call(null,map__12295__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var pitch = cljs.core.get.call(null,map__12295__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
var roll = cljs.core.get.call(null,map__12295__$1,new cljs.core.Keyword(null,"roll","roll",11266999));
return view3d.client.camera_control.call(null,view,pitch,roll);
} else {
return null;
}
});
view3d.client.vehicle_hr = (function view3d$client$vehicle_hr(response){
var resp = view3d.client.read_transit.call(null,response);
var temp__5455__auto__ = resp;
if(cljs.core.truth_(temp__5455__auto__)){
var map__12297 = temp__5455__auto__;
var map__12297__$1 = ((((!((map__12297 == null)))?((((map__12297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12297.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12297):map__12297);
var vehicle = cljs.core.get.call(null,map__12297__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
var period = cljs.core.get.call(null,map__12297__$1,new cljs.core.Keyword(null,"period","period",-352129191));
var camera = cljs.core.get.call(null,map__12297__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
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
var temp__5455__auto___12302 = resp.call(null,new cljs.core.Keyword(null,"latlon","latlon",-1285780235));
if(cljs.core.truth_(temp__5455__auto___12302)){
var vec__12299_12303 = temp__5455__auto___12302;
var lat_12304 = cljs.core.nth.call(null,vec__12299_12303,(0),null);
var lon_12305 = cljs.core.nth.call(null,vec__12299_12303,(1),null);
czm.core.terrain_request.call(null,lat_12304,lon_12305);
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
