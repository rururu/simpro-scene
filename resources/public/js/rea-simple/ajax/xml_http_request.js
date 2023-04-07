// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.call(null,(function (headers,header_line){
if(goog.string.isEmptyOrWhitespace(header_line)){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.call(null,headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
ajax.xml_http_request.goog$module$goog$object.set.call(null,global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():XMLHttpRequest);
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__8396,handler){
var map__8397 = p__8396;
var map__8397__$1 = cljs.core.__destructure_map.call(null,map__8397);
var uri = cljs.core.get.call(null,map__8397__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__8397__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__8397__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__8397__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__8397__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__8397__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__8397__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__8395_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__8395_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5804__auto___8414 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5804__auto___8414)){
var response_type_8415 = temp__5804__auto___8414;
(this$__$1.responseType = cljs.core.name.call(null,response_type_8415));
} else {
}

var seq__8398_8416 = cljs.core.seq.call(null,headers);
var chunk__8399_8417 = null;
var count__8400_8418 = (0);
var i__8401_8419 = (0);
while(true){
if((i__8401_8419 < count__8400_8418)){
var vec__8408_8420 = cljs.core._nth.call(null,chunk__8399_8417,i__8401_8419);
var k_8421 = cljs.core.nth.call(null,vec__8408_8420,(0),null);
var v_8422 = cljs.core.nth.call(null,vec__8408_8420,(1),null);
this$__$1.setRequestHeader(k_8421,v_8422);


var G__8423 = seq__8398_8416;
var G__8424 = chunk__8399_8417;
var G__8425 = count__8400_8418;
var G__8426 = (i__8401_8419 + (1));
seq__8398_8416 = G__8423;
chunk__8399_8417 = G__8424;
count__8400_8418 = G__8425;
i__8401_8419 = G__8426;
continue;
} else {
var temp__5804__auto___8427 = cljs.core.seq.call(null,seq__8398_8416);
if(temp__5804__auto___8427){
var seq__8398_8428__$1 = temp__5804__auto___8427;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8398_8428__$1)){
var c__5568__auto___8429 = cljs.core.chunk_first.call(null,seq__8398_8428__$1);
var G__8430 = cljs.core.chunk_rest.call(null,seq__8398_8428__$1);
var G__8431 = c__5568__auto___8429;
var G__8432 = cljs.core.count.call(null,c__5568__auto___8429);
var G__8433 = (0);
seq__8398_8416 = G__8430;
chunk__8399_8417 = G__8431;
count__8400_8418 = G__8432;
i__8401_8419 = G__8433;
continue;
} else {
var vec__8411_8434 = cljs.core.first.call(null,seq__8398_8428__$1);
var k_8435 = cljs.core.nth.call(null,vec__8411_8434,(0),null);
var v_8436 = cljs.core.nth.call(null,vec__8411_8434,(1),null);
this$__$1.setRequestHeader(k_8435,v_8436);


var G__8437 = cljs.core.next.call(null,seq__8398_8428__$1);
var G__8438 = null;
var G__8439 = (0);
var G__8440 = (0);
seq__8398_8416 = G__8437;
chunk__8399_8417 = G__8438;
count__8400_8418 = G__8439;
i__8401_8419 = G__8440;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__5045__auto__ = body;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers.call(null,this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
}));

//# sourceMappingURL=xml_http_request.js.map
