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

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__19043,handler){
var map__19044 = p__19043;
var map__19044__$1 = cljs.core.__destructure_map.call(null,map__19044);
var uri = cljs.core.get.call(null,map__19044__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__19044__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__19044__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__19044__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__19044__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__19044__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__19044__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__19042_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__19042_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5804__auto___19061 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5804__auto___19061)){
var response_type_19062 = temp__5804__auto___19061;
(this$__$1.responseType = cljs.core.name.call(null,response_type_19062));
} else {
}

var seq__19045_19063 = cljs.core.seq.call(null,headers);
var chunk__19046_19064 = null;
var count__19047_19065 = (0);
var i__19048_19066 = (0);
while(true){
if((i__19048_19066 < count__19047_19065)){
var vec__19055_19067 = cljs.core._nth.call(null,chunk__19046_19064,i__19048_19066);
var k_19068 = cljs.core.nth.call(null,vec__19055_19067,(0),null);
var v_19069 = cljs.core.nth.call(null,vec__19055_19067,(1),null);
this$__$1.setRequestHeader(k_19068,v_19069);


var G__19070 = seq__19045_19063;
var G__19071 = chunk__19046_19064;
var G__19072 = count__19047_19065;
var G__19073 = (i__19048_19066 + (1));
seq__19045_19063 = G__19070;
chunk__19046_19064 = G__19071;
count__19047_19065 = G__19072;
i__19048_19066 = G__19073;
continue;
} else {
var temp__5804__auto___19074 = cljs.core.seq.call(null,seq__19045_19063);
if(temp__5804__auto___19074){
var seq__19045_19075__$1 = temp__5804__auto___19074;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19045_19075__$1)){
var c__5568__auto___19076 = cljs.core.chunk_first.call(null,seq__19045_19075__$1);
var G__19077 = cljs.core.chunk_rest.call(null,seq__19045_19075__$1);
var G__19078 = c__5568__auto___19076;
var G__19079 = cljs.core.count.call(null,c__5568__auto___19076);
var G__19080 = (0);
seq__19045_19063 = G__19077;
chunk__19046_19064 = G__19078;
count__19047_19065 = G__19079;
i__19048_19066 = G__19080;
continue;
} else {
var vec__19058_19081 = cljs.core.first.call(null,seq__19045_19075__$1);
var k_19082 = cljs.core.nth.call(null,vec__19058_19081,(0),null);
var v_19083 = cljs.core.nth.call(null,vec__19058_19081,(1),null);
this$__$1.setRequestHeader(k_19082,v_19083);


var G__19084 = cljs.core.next.call(null,seq__19045_19075__$1);
var G__19085 = null;
var G__19086 = (0);
var G__19087 = (0);
seq__19045_19063 = G__19084;
chunk__19046_19064 = G__19085;
count__19047_19065 = G__19086;
i__19048_19066 = G__19087;
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
