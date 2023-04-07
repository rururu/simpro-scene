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

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__29994,handler){
var map__29995 = p__29994;
var map__29995__$1 = cljs.core.__destructure_map.call(null,map__29995);
var uri = cljs.core.get.call(null,map__29995__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__29995__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__29995__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__29995__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__29995__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__29995__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__29995__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__29993_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__29993_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5804__auto___30012 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5804__auto___30012)){
var response_type_30013 = temp__5804__auto___30012;
(this$__$1.responseType = cljs.core.name.call(null,response_type_30013));
} else {
}

var seq__29996_30014 = cljs.core.seq.call(null,headers);
var chunk__29997_30015 = null;
var count__29998_30016 = (0);
var i__29999_30017 = (0);
while(true){
if((i__29999_30017 < count__29998_30016)){
var vec__30006_30018 = cljs.core._nth.call(null,chunk__29997_30015,i__29999_30017);
var k_30019 = cljs.core.nth.call(null,vec__30006_30018,(0),null);
var v_30020 = cljs.core.nth.call(null,vec__30006_30018,(1),null);
this$__$1.setRequestHeader(k_30019,v_30020);


var G__30021 = seq__29996_30014;
var G__30022 = chunk__29997_30015;
var G__30023 = count__29998_30016;
var G__30024 = (i__29999_30017 + (1));
seq__29996_30014 = G__30021;
chunk__29997_30015 = G__30022;
count__29998_30016 = G__30023;
i__29999_30017 = G__30024;
continue;
} else {
var temp__5804__auto___30025 = cljs.core.seq.call(null,seq__29996_30014);
if(temp__5804__auto___30025){
var seq__29996_30026__$1 = temp__5804__auto___30025;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29996_30026__$1)){
var c__5568__auto___30027 = cljs.core.chunk_first.call(null,seq__29996_30026__$1);
var G__30028 = cljs.core.chunk_rest.call(null,seq__29996_30026__$1);
var G__30029 = c__5568__auto___30027;
var G__30030 = cljs.core.count.call(null,c__5568__auto___30027);
var G__30031 = (0);
seq__29996_30014 = G__30028;
chunk__29997_30015 = G__30029;
count__29998_30016 = G__30030;
i__29999_30017 = G__30031;
continue;
} else {
var vec__30009_30032 = cljs.core.first.call(null,seq__29996_30026__$1);
var k_30033 = cljs.core.nth.call(null,vec__30009_30032,(0),null);
var v_30034 = cljs.core.nth.call(null,vec__30009_30032,(1),null);
this$__$1.setRequestHeader(k_30033,v_30034);


var G__30035 = cljs.core.next.call(null,seq__29996_30026__$1);
var G__30036 = null;
var G__30037 = (0);
var G__30038 = (0);
seq__29996_30014 = G__30035;
chunk__29997_30015 = G__30036;
count__29998_30016 = G__30037;
i__29999_30017 = G__30038;
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
