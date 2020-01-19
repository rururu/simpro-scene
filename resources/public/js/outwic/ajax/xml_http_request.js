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

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__9005,handler){
var map__9006 = p__9005;
var map__9006__$1 = (((((!((map__9006 == null))))?(((((map__9006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9006):map__9006);
var uri = cljs.core.get.call(null,map__9006__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__9006__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__9006__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__9006__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__9006__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__9006__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__9006__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__9006,map__9006__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__9004_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__9004_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__9006,map__9006__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5735__auto___9018 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___9018)){
var response_type_9019 = temp__5735__auto___9018;
this$__$1.responseType = cljs.core.name.call(null,response_type_9019);
} else {
}

var seq__9008_9020 = cljs.core.seq.call(null,headers);
var chunk__9009_9021 = null;
var count__9010_9022 = (0);
var i__9011_9023 = (0);
while(true){
if((i__9011_9023 < count__9010_9022)){
var vec__9012_9024 = cljs.core._nth.call(null,chunk__9009_9021,i__9011_9023);
var k_9025 = cljs.core.nth.call(null,vec__9012_9024,(0),null);
var v_9026 = cljs.core.nth.call(null,vec__9012_9024,(1),null);
this$__$1.setRequestHeader(k_9025,v_9026);


var G__9027 = seq__9008_9020;
var G__9028 = chunk__9009_9021;
var G__9029 = count__9010_9022;
var G__9030 = (i__9011_9023 + (1));
seq__9008_9020 = G__9027;
chunk__9009_9021 = G__9028;
count__9010_9022 = G__9029;
i__9011_9023 = G__9030;
continue;
} else {
var temp__5735__auto___9031 = cljs.core.seq.call(null,seq__9008_9020);
if(temp__5735__auto___9031){
var seq__9008_9032__$1 = temp__5735__auto___9031;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9008_9032__$1)){
var c__4461__auto___9033 = cljs.core.chunk_first.call(null,seq__9008_9032__$1);
var G__9034 = cljs.core.chunk_rest.call(null,seq__9008_9032__$1);
var G__9035 = c__4461__auto___9033;
var G__9036 = cljs.core.count.call(null,c__4461__auto___9033);
var G__9037 = (0);
seq__9008_9020 = G__9034;
chunk__9009_9021 = G__9035;
count__9010_9022 = G__9036;
i__9011_9023 = G__9037;
continue;
} else {
var vec__9015_9038 = cljs.core.first.call(null,seq__9008_9032__$1);
var k_9039 = cljs.core.nth.call(null,vec__9015_9038,(0),null);
var v_9040 = cljs.core.nth.call(null,vec__9015_9038,(1),null);
this$__$1.setRequestHeader(k_9039,v_9040);


var G__9041 = cljs.core.next.call(null,seq__9008_9032__$1);
var G__9042 = null;
var G__9043 = (0);
var G__9044 = (0);
seq__9008_9020 = G__9041;
chunk__9009_9021 = G__9042;
count__9010_9022 = G__9043;
i__9011_9023 = G__9044;
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
