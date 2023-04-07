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

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__36119,handler){
var map__36120 = p__36119;
var map__36120__$1 = cljs.core.__destructure_map.call(null,map__36120);
var uri = cljs.core.get.call(null,map__36120__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__36120__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__36120__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__36120__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__36120__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__36120__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__36120__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__36118_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__36118_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5804__auto___36137 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5804__auto___36137)){
var response_type_36138 = temp__5804__auto___36137;
(this$__$1.responseType = cljs.core.name.call(null,response_type_36138));
} else {
}

var seq__36121_36139 = cljs.core.seq.call(null,headers);
var chunk__36122_36140 = null;
var count__36123_36141 = (0);
var i__36124_36142 = (0);
while(true){
if((i__36124_36142 < count__36123_36141)){
var vec__36131_36143 = cljs.core._nth.call(null,chunk__36122_36140,i__36124_36142);
var k_36144 = cljs.core.nth.call(null,vec__36131_36143,(0),null);
var v_36145 = cljs.core.nth.call(null,vec__36131_36143,(1),null);
this$__$1.setRequestHeader(k_36144,v_36145);


var G__36146 = seq__36121_36139;
var G__36147 = chunk__36122_36140;
var G__36148 = count__36123_36141;
var G__36149 = (i__36124_36142 + (1));
seq__36121_36139 = G__36146;
chunk__36122_36140 = G__36147;
count__36123_36141 = G__36148;
i__36124_36142 = G__36149;
continue;
} else {
var temp__5804__auto___36150 = cljs.core.seq.call(null,seq__36121_36139);
if(temp__5804__auto___36150){
var seq__36121_36151__$1 = temp__5804__auto___36150;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36121_36151__$1)){
var c__5568__auto___36152 = cljs.core.chunk_first.call(null,seq__36121_36151__$1);
var G__36153 = cljs.core.chunk_rest.call(null,seq__36121_36151__$1);
var G__36154 = c__5568__auto___36152;
var G__36155 = cljs.core.count.call(null,c__5568__auto___36152);
var G__36156 = (0);
seq__36121_36139 = G__36153;
chunk__36122_36140 = G__36154;
count__36123_36141 = G__36155;
i__36124_36142 = G__36156;
continue;
} else {
var vec__36134_36157 = cljs.core.first.call(null,seq__36121_36151__$1);
var k_36158 = cljs.core.nth.call(null,vec__36134_36157,(0),null);
var v_36159 = cljs.core.nth.call(null,vec__36134_36157,(1),null);
this$__$1.setRequestHeader(k_36158,v_36159);


var G__36160 = cljs.core.next.call(null,seq__36121_36151__$1);
var G__36161 = null;
var G__36162 = (0);
var G__36163 = (0);
seq__36121_36139 = G__36160;
chunk__36122_36140 = G__36161;
count__36123_36141 = G__36162;
i__36124_36142 = G__36163;
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
