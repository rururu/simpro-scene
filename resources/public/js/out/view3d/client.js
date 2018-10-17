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
var map__25242 = response;
var map__25242__$1 = ((((!((map__25242 == null)))?((((map__25242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25242.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25242):map__25242);
var status = cljs.core.get.call(null,map__25242__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__25242__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
view3d.client.repeater = (function view3d$client$repeater(var_args){
var G__25245 = arguments.length;
switch (G__25245) {
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
var c__23143__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto__){
return (function (){
var f__23144__auto__ = (function (){var switch__23053__auto__ = ((function (c__23143__auto__){
return (function (state_25259){
var state_val_25260 = (state_25259[(1)]);
if((state_val_25260 === (1))){
var state_25259__$1 = state_25259;
var statearr_25261_25301 = state_25259__$1;
(statearr_25261_25301[(2)] = null);

(statearr_25261_25301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25260 === (2))){
var state_25259__$1 = state_25259;
var statearr_25262_25302 = state_25259__$1;
(statearr_25262_25302[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25260 === (3))){
var inst_25257 = (state_25259[(2)]);
var state_25259__$1 = state_25259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25259__$1,inst_25257);
} else {
if((state_val_25260 === (4))){
var inst_25248 = func.call(null);
var inst_25249 = cljs.core.async.timeout.call(null,time_out);
var state_25259__$1 = (function (){var statearr_25264 = state_25259;
(statearr_25264[(7)] = inst_25248);

return statearr_25264;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25259__$1,(7),inst_25249);
} else {
if((state_val_25260 === (5))){
var state_25259__$1 = state_25259;
var statearr_25265_25303 = state_25259__$1;
(statearr_25265_25303[(2)] = null);

(statearr_25265_25303[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25260 === (6))){
var inst_25255 = (state_25259[(2)]);
var state_25259__$1 = state_25259;
var statearr_25266_25304 = state_25259__$1;
(statearr_25266_25304[(2)] = inst_25255);

(statearr_25266_25304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25260 === (7))){
var inst_25251 = (state_25259[(2)]);
var state_25259__$1 = (function (){var statearr_25267 = state_25259;
(statearr_25267[(8)] = inst_25251);

return statearr_25267;
})();
var statearr_25268_25305 = state_25259__$1;
(statearr_25268_25305[(2)] = null);

(statearr_25268_25305[(1)] = (2));


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
});})(c__23143__auto__))
;
return ((function (switch__23053__auto__,c__23143__auto__){
return (function() {
var view3d$client$state_machine__23054__auto__ = null;
var view3d$client$state_machine__23054__auto____0 = (function (){
var statearr_25269 = [null,null,null,null,null,null,null,null,null];
(statearr_25269[(0)] = view3d$client$state_machine__23054__auto__);

(statearr_25269[(1)] = (1));

return statearr_25269;
});
var view3d$client$state_machine__23054__auto____1 = (function (state_25259){
while(true){
var ret_value__23055__auto__ = (function (){try{while(true){
var result__23056__auto__ = switch__23053__auto__.call(null,state_25259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23056__auto__;
}
break;
}
}catch (e25270){if((e25270 instanceof Object)){
var ex__23057__auto__ = e25270;
var statearr_25271_25306 = state_25259;
(statearr_25271_25306[(5)] = ex__23057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25307 = state_25259;
state_25259 = G__25307;
continue;
} else {
return ret_value__23055__auto__;
}
break;
}
});
view3d$client$state_machine__23054__auto__ = function(state_25259){
switch(arguments.length){
case 0:
return view3d$client$state_machine__23054__auto____0.call(this);
case 1:
return view3d$client$state_machine__23054__auto____1.call(this,state_25259);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
view3d$client$state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__23054__auto____0;
view3d$client$state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__23054__auto____1;
return view3d$client$state_machine__23054__auto__;
})()
;})(switch__23053__auto__,c__23143__auto__))
})();
var state__23145__auto__ = (function (){var statearr_25272 = f__23144__auto__.call(null);
(statearr_25272[(6)] = c__23143__auto__);

return statearr_25272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto__))
);

return c__23143__auto__;
});

view3d.client.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__23143__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto__){
return (function (){
var f__23144__auto__ = (function (){var switch__23053__auto__ = ((function (c__23143__auto__){
return (function (state_25286){
var state_val_25287 = (state_25286[(1)]);
if((state_val_25287 === (1))){
var state_25286__$1 = state_25286;
var statearr_25288_25308 = state_25286__$1;
(statearr_25288_25308[(2)] = null);

(statearr_25288_25308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25287 === (2))){
var state_25286__$1 = state_25286;
var statearr_25289_25309 = state_25286__$1;
(statearr_25289_25309[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25287 === (3))){
var inst_25284 = (state_25286[(2)]);
var state_25286__$1 = state_25286;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25286__$1,inst_25284);
} else {
if((state_val_25287 === (4))){
var inst_25275 = func.call(null,param);
var inst_25276 = cljs.core.async.timeout.call(null,time_out);
var state_25286__$1 = (function (){var statearr_25291 = state_25286;
(statearr_25291[(7)] = inst_25275);

return statearr_25291;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25286__$1,(7),inst_25276);
} else {
if((state_val_25287 === (5))){
var state_25286__$1 = state_25286;
var statearr_25292_25310 = state_25286__$1;
(statearr_25292_25310[(2)] = null);

(statearr_25292_25310[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25287 === (6))){
var inst_25282 = (state_25286[(2)]);
var state_25286__$1 = state_25286;
var statearr_25293_25311 = state_25286__$1;
(statearr_25293_25311[(2)] = inst_25282);

(statearr_25293_25311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25287 === (7))){
var inst_25278 = (state_25286[(2)]);
var state_25286__$1 = (function (){var statearr_25294 = state_25286;
(statearr_25294[(8)] = inst_25278);

return statearr_25294;
})();
var statearr_25295_25312 = state_25286__$1;
(statearr_25295_25312[(2)] = null);

(statearr_25295_25312[(1)] = (2));


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
});})(c__23143__auto__))
;
return ((function (switch__23053__auto__,c__23143__auto__){
return (function() {
var view3d$client$state_machine__23054__auto__ = null;
var view3d$client$state_machine__23054__auto____0 = (function (){
var statearr_25296 = [null,null,null,null,null,null,null,null,null];
(statearr_25296[(0)] = view3d$client$state_machine__23054__auto__);

(statearr_25296[(1)] = (1));

return statearr_25296;
});
var view3d$client$state_machine__23054__auto____1 = (function (state_25286){
while(true){
var ret_value__23055__auto__ = (function (){try{while(true){
var result__23056__auto__ = switch__23053__auto__.call(null,state_25286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23056__auto__;
}
break;
}
}catch (e25297){if((e25297 instanceof Object)){
var ex__23057__auto__ = e25297;
var statearr_25298_25313 = state_25286;
(statearr_25298_25313[(5)] = ex__23057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25314 = state_25286;
state_25286 = G__25314;
continue;
} else {
return ret_value__23055__auto__;
}
break;
}
});
view3d$client$state_machine__23054__auto__ = function(state_25286){
switch(arguments.length){
case 0:
return view3d$client$state_machine__23054__auto____0.call(this);
case 1:
return view3d$client$state_machine__23054__auto____1.call(this,state_25286);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
view3d$client$state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__23054__auto____0;
view3d$client$state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__23054__auto____1;
return view3d$client$state_machine__23054__auto__;
})()
;})(switch__23053__auto__,c__23143__auto__))
})();
var state__23145__auto__ = (function (){var statearr_25299 = f__23144__auto__.call(null);
(statearr_25299[(6)] = c__23143__auto__);

return statearr_25299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto__))
);

return c__23143__auto__;
});

view3d.client.repeater.cljs$lang$maxFixedArity = 3;

view3d.client.repeater_BANG_ = (function view3d$client$repeater_BANG_(var_args){
var G__25316 = arguments.length;
switch (G__25316) {
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
var c__23143__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto__){
return (function (){
var f__23144__auto__ = (function (){var switch__23053__auto__ = ((function (c__23143__auto__){
return (function (state_25331){
var state_val_25332 = (state_25331[(1)]);
if((state_val_25332 === (1))){
var state_25331__$1 = state_25331;
var statearr_25333_25374 = state_25331__$1;
(statearr_25333_25374[(2)] = null);

(statearr_25333_25374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25332 === (2))){
var state_25331__$1 = state_25331;
var statearr_25334_25375 = state_25331__$1;
(statearr_25334_25375[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25332 === (3))){
var inst_25329 = (state_25331[(2)]);
var state_25331__$1 = state_25331;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25331__$1,inst_25329);
} else {
if((state_val_25332 === (4))){
var inst_25319 = func.call(null);
var inst_25320 = cljs.core.deref.call(null,time_out);
var inst_25321 = cljs.core.async.timeout.call(null,inst_25320);
var state_25331__$1 = (function (){var statearr_25336 = state_25331;
(statearr_25336[(7)] = inst_25319);

return statearr_25336;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25331__$1,(7),inst_25321);
} else {
if((state_val_25332 === (5))){
var state_25331__$1 = state_25331;
var statearr_25337_25376 = state_25331__$1;
(statearr_25337_25376[(2)] = null);

(statearr_25337_25376[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25332 === (6))){
var inst_25327 = (state_25331[(2)]);
var state_25331__$1 = state_25331;
var statearr_25338_25377 = state_25331__$1;
(statearr_25338_25377[(2)] = inst_25327);

(statearr_25338_25377[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25332 === (7))){
var inst_25323 = (state_25331[(2)]);
var state_25331__$1 = (function (){var statearr_25339 = state_25331;
(statearr_25339[(8)] = inst_25323);

return statearr_25339;
})();
var statearr_25340_25378 = state_25331__$1;
(statearr_25340_25378[(2)] = null);

(statearr_25340_25378[(1)] = (2));


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
});})(c__23143__auto__))
;
return ((function (switch__23053__auto__,c__23143__auto__){
return (function() {
var view3d$client$state_machine__23054__auto__ = null;
var view3d$client$state_machine__23054__auto____0 = (function (){
var statearr_25341 = [null,null,null,null,null,null,null,null,null];
(statearr_25341[(0)] = view3d$client$state_machine__23054__auto__);

(statearr_25341[(1)] = (1));

return statearr_25341;
});
var view3d$client$state_machine__23054__auto____1 = (function (state_25331){
while(true){
var ret_value__23055__auto__ = (function (){try{while(true){
var result__23056__auto__ = switch__23053__auto__.call(null,state_25331);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23056__auto__;
}
break;
}
}catch (e25342){if((e25342 instanceof Object)){
var ex__23057__auto__ = e25342;
var statearr_25343_25379 = state_25331;
(statearr_25343_25379[(5)] = ex__23057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25380 = state_25331;
state_25331 = G__25380;
continue;
} else {
return ret_value__23055__auto__;
}
break;
}
});
view3d$client$state_machine__23054__auto__ = function(state_25331){
switch(arguments.length){
case 0:
return view3d$client$state_machine__23054__auto____0.call(this);
case 1:
return view3d$client$state_machine__23054__auto____1.call(this,state_25331);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
view3d$client$state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__23054__auto____0;
view3d$client$state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__23054__auto____1;
return view3d$client$state_machine__23054__auto__;
})()
;})(switch__23053__auto__,c__23143__auto__))
})();
var state__23145__auto__ = (function (){var statearr_25344 = f__23144__auto__.call(null);
(statearr_25344[(6)] = c__23143__auto__);

return statearr_25344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto__))
);

return c__23143__auto__;
});

view3d.client.repeater_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__23143__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto__){
return (function (){
var f__23144__auto__ = (function (){var switch__23053__auto__ = ((function (c__23143__auto__){
return (function (state_25359){
var state_val_25360 = (state_25359[(1)]);
if((state_val_25360 === (1))){
var state_25359__$1 = state_25359;
var statearr_25361_25381 = state_25359__$1;
(statearr_25361_25381[(2)] = null);

(statearr_25361_25381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25360 === (2))){
var state_25359__$1 = state_25359;
var statearr_25362_25382 = state_25359__$1;
(statearr_25362_25382[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25360 === (3))){
var inst_25357 = (state_25359[(2)]);
var state_25359__$1 = state_25359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25359__$1,inst_25357);
} else {
if((state_val_25360 === (4))){
var inst_25347 = func.call(null,param);
var inst_25348 = cljs.core.deref.call(null,time_out);
var inst_25349 = cljs.core.async.timeout.call(null,inst_25348);
var state_25359__$1 = (function (){var statearr_25364 = state_25359;
(statearr_25364[(7)] = inst_25347);

return statearr_25364;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25359__$1,(7),inst_25349);
} else {
if((state_val_25360 === (5))){
var state_25359__$1 = state_25359;
var statearr_25365_25383 = state_25359__$1;
(statearr_25365_25383[(2)] = null);

(statearr_25365_25383[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25360 === (6))){
var inst_25355 = (state_25359[(2)]);
var state_25359__$1 = state_25359;
var statearr_25366_25384 = state_25359__$1;
(statearr_25366_25384[(2)] = inst_25355);

(statearr_25366_25384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25360 === (7))){
var inst_25351 = (state_25359[(2)]);
var state_25359__$1 = (function (){var statearr_25367 = state_25359;
(statearr_25367[(8)] = inst_25351);

return statearr_25367;
})();
var statearr_25368_25385 = state_25359__$1;
(statearr_25368_25385[(2)] = null);

(statearr_25368_25385[(1)] = (2));


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
});})(c__23143__auto__))
;
return ((function (switch__23053__auto__,c__23143__auto__){
return (function() {
var view3d$client$state_machine__23054__auto__ = null;
var view3d$client$state_machine__23054__auto____0 = (function (){
var statearr_25369 = [null,null,null,null,null,null,null,null,null];
(statearr_25369[(0)] = view3d$client$state_machine__23054__auto__);

(statearr_25369[(1)] = (1));

return statearr_25369;
});
var view3d$client$state_machine__23054__auto____1 = (function (state_25359){
while(true){
var ret_value__23055__auto__ = (function (){try{while(true){
var result__23056__auto__ = switch__23053__auto__.call(null,state_25359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23056__auto__;
}
break;
}
}catch (e25370){if((e25370 instanceof Object)){
var ex__23057__auto__ = e25370;
var statearr_25371_25386 = state_25359;
(statearr_25371_25386[(5)] = ex__23057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25370;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25387 = state_25359;
state_25359 = G__25387;
continue;
} else {
return ret_value__23055__auto__;
}
break;
}
});
view3d$client$state_machine__23054__auto__ = function(state_25359){
switch(arguments.length){
case 0:
return view3d$client$state_machine__23054__auto____0.call(this);
case 1:
return view3d$client$state_machine__23054__auto____1.call(this,state_25359);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
view3d$client$state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$client$state_machine__23054__auto____0;
view3d$client$state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$client$state_machine__23054__auto____1;
return view3d$client$state_machine__23054__auto__;
})()
;})(switch__23053__auto__,c__23143__auto__))
})();
var state__23145__auto__ = (function (){var statearr_25372 = f__23144__auto__.call(null);
(statearr_25372[(6)] = c__23143__auto__);

return statearr_25372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto__))
);

return c__23143__auto__;
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

view3d.client.by_id.call(null,"view-val").selectedIndex = (function (){var pred__25388 = cljs.core._EQ_;
var expr__25389 = vie;
if(cljs.core.truth_(pred__25388.call(null,"FORWARD",expr__25389))){
return (0);
} else {
if(cljs.core.truth_(pred__25388.call(null,"BACKWARD",expr__25389))){
return (1);
} else {
if(cljs.core.truth_(pred__25388.call(null,"RIGHT",expr__25389))){
return (2);
} else {
if(cljs.core.truth_(pred__25388.call(null,"LEFT",expr__25389))){
return (3);
} else {
if(cljs.core.truth_(pred__25388.call(null,"UP",expr__25389))){
return (4);
} else {
if(cljs.core.truth_(pred__25388.call(null,"DOWN",expr__25389))){
return (5);
} else {
if(cljs.core.truth_(pred__25388.call(null,"FORWARD-RIGHT",expr__25389))){
return (6);
} else {
if(cljs.core.truth_(pred__25388.call(null,"FORWARD-LEFT",expr__25389))){
return (7);
} else {
if(cljs.core.truth_(pred__25388.call(null,"BACKWARD-RIGHT",expr__25389))){
return (8);
} else {
if(cljs.core.truth_(pred__25388.call(null,"BACKWARD-LEFT",expr__25389))){
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
var vec__25391 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__25391,(0),null);
var lon = cljs.core.nth.call(null,vec__25391,(1),null);
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
var map__25394 = temp__5455__auto__;
var map__25394__$1 = ((((!((map__25394 == null)))?((((map__25394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25394.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25394):map__25394);
var view = cljs.core.get.call(null,map__25394__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var pitch = cljs.core.get.call(null,map__25394__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
var roll = cljs.core.get.call(null,map__25394__$1,new cljs.core.Keyword(null,"roll","roll",11266999));
return view3d.client.camera_control.call(null,view,pitch,roll);
} else {
return null;
}
});
view3d.client.vehicle_hr = (function view3d$client$vehicle_hr(response){
var resp = view3d.client.read_transit.call(null,response);
var temp__5455__auto__ = resp;
if(cljs.core.truth_(temp__5455__auto__)){
var map__25396 = temp__5455__auto__;
var map__25396__$1 = ((((!((map__25396 == null)))?((((map__25396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25396.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25396):map__25396);
var vehicle = cljs.core.get.call(null,map__25396__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
var period = cljs.core.get.call(null,map__25396__$1,new cljs.core.Keyword(null,"period","period",-352129191));
var camera = cljs.core.get.call(null,map__25396__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
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
var temp__5455__auto___25401 = resp.call(null,new cljs.core.Keyword(null,"latlon","latlon",-1285780235));
if(cljs.core.truth_(temp__5455__auto___25401)){
var vec__25398_25402 = temp__5455__auto___25401;
var lat_25403 = cljs.core.nth.call(null,vec__25398_25402,(0),null);
var lon_25404 = cljs.core.nth.call(null,vec__25398_25402,(1),null);
czm.core.terrain_request.call(null,lat_25403,lon_25404);
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
