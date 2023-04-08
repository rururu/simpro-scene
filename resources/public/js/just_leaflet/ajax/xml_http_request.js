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

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__16606,handler){
var map__16607 = p__16606;
var map__16607__$1 = cljs.core.__destructure_map.call(null,map__16607);
var uri = cljs.core.get.call(null,map__16607__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__16607__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__16607__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__16607__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__16607__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__16607__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__16607__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__16605_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__16605_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5804__auto___16624 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5804__auto___16624)){
var response_type_16625 = temp__5804__auto___16624;
(this$__$1.responseType = cljs.core.name.call(null,response_type_16625));
} else {
}

var seq__16608_16626 = cljs.core.seq.call(null,headers);
var chunk__16609_16627 = null;
var count__16610_16628 = (0);
var i__16611_16629 = (0);
while(true){
if((i__16611_16629 < count__16610_16628)){
var vec__16618_16630 = cljs.core._nth.call(null,chunk__16609_16627,i__16611_16629);
var k_16631 = cljs.core.nth.call(null,vec__16618_16630,(0),null);
var v_16632 = cljs.core.nth.call(null,vec__16618_16630,(1),null);
this$__$1.setRequestHeader(k_16631,v_16632);


var G__16633 = seq__16608_16626;
var G__16634 = chunk__16609_16627;
var G__16635 = count__16610_16628;
var G__16636 = (i__16611_16629 + (1));
seq__16608_16626 = G__16633;
chunk__16609_16627 = G__16634;
count__16610_16628 = G__16635;
i__16611_16629 = G__16636;
continue;
} else {
var temp__5804__auto___16637 = cljs.core.seq.call(null,seq__16608_16626);
if(temp__5804__auto___16637){
var seq__16608_16638__$1 = temp__5804__auto___16637;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16608_16638__$1)){
var c__5568__auto___16639 = cljs.core.chunk_first.call(null,seq__16608_16638__$1);
var G__16640 = cljs.core.chunk_rest.call(null,seq__16608_16638__$1);
var G__16641 = c__5568__auto___16639;
var G__16642 = cljs.core.count.call(null,c__5568__auto___16639);
var G__16643 = (0);
seq__16608_16626 = G__16640;
chunk__16609_16627 = G__16641;
count__16610_16628 = G__16642;
i__16611_16629 = G__16643;
continue;
} else {
var vec__16621_16644 = cljs.core.first.call(null,seq__16608_16638__$1);
var k_16645 = cljs.core.nth.call(null,vec__16621_16644,(0),null);
var v_16646 = cljs.core.nth.call(null,vec__16621_16644,(1),null);
this$__$1.setRequestHeader(k_16645,v_16646);


var G__16647 = cljs.core.next.call(null,seq__16608_16638__$1);
var G__16648 = null;
var G__16649 = (0);
var G__16650 = (0);
seq__16608_16626 = G__16647;
chunk__16609_16627 = G__16648;
count__16610_16628 = G__16649;
i__16611_16629 = G__16650;
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
