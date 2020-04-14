// Compiled by ClojureScript 1.10.439 {}
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
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
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
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__9264,handler){
var map__9265 = p__9264;
var map__9265__$1 = (((((!((map__9265 == null))))?(((((map__9265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9265):map__9265);
var uri = cljs.core.get.call(null,map__9265__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__9265__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__9265__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__9265__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__9265__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__9265__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__9265__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__9265,map__9265__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__9263_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__9263_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__9265,map__9265__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5735__auto___9277 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___9277)){
var response_type_9278 = temp__5735__auto___9277;
this$__$1.responseType = cljs.core.name.call(null,response_type_9278);
} else {
}

var seq__9267_9279 = cljs.core.seq.call(null,headers);
var chunk__9268_9280 = null;
var count__9269_9281 = (0);
var i__9270_9282 = (0);
while(true){
if((i__9270_9282 < count__9269_9281)){
var vec__9271_9283 = cljs.core._nth.call(null,chunk__9268_9280,i__9270_9282);
var k_9284 = cljs.core.nth.call(null,vec__9271_9283,(0),null);
var v_9285 = cljs.core.nth.call(null,vec__9271_9283,(1),null);
this$__$1.setRequestHeader(k_9284,v_9285);


var G__9286 = seq__9267_9279;
var G__9287 = chunk__9268_9280;
var G__9288 = count__9269_9281;
var G__9289 = (i__9270_9282 + (1));
seq__9267_9279 = G__9286;
chunk__9268_9280 = G__9287;
count__9269_9281 = G__9288;
i__9270_9282 = G__9289;
continue;
} else {
var temp__5735__auto___9290 = cljs.core.seq.call(null,seq__9267_9279);
if(temp__5735__auto___9290){
var seq__9267_9291__$1 = temp__5735__auto___9290;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9267_9291__$1)){
var c__4461__auto___9292 = cljs.core.chunk_first.call(null,seq__9267_9291__$1);
var G__9293 = cljs.core.chunk_rest.call(null,seq__9267_9291__$1);
var G__9294 = c__4461__auto___9292;
var G__9295 = cljs.core.count.call(null,c__4461__auto___9292);
var G__9296 = (0);
seq__9267_9279 = G__9293;
chunk__9268_9280 = G__9294;
count__9269_9281 = G__9295;
i__9270_9282 = G__9296;
continue;
} else {
var vec__9274_9297 = cljs.core.first.call(null,seq__9267_9291__$1);
var k_9298 = cljs.core.nth.call(null,vec__9274_9297,(0),null);
var v_9299 = cljs.core.nth.call(null,vec__9274_9297,(1),null);
this$__$1.setRequestHeader(k_9298,v_9299);


var G__9300 = cljs.core.next.call(null,seq__9267_9291__$1);
var G__9301 = null;
var G__9302 = (0);
var G__9303 = (0);
seq__9267_9279 = G__9300;
chunk__9268_9280 = G__9301;
count__9269_9281 = G__9302;
i__9270_9282 = G__9303;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4047__auto__ = body;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers.call(null,this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map
