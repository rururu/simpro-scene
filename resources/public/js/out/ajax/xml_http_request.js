// Compiled by ClojureScript 1.9.293 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__7839,handler){
var map__7840 = p__7839;
var map__7840__$1 = ((((!((map__7840 == null)))?((((map__7840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7840.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7840):map__7840);
var uri = cljs.core.get.call(null,map__7840__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__7840__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__7840__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__7840__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__7840__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__7840__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__7840__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__7840,map__7840__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__7838_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__7838_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__7840,map__7840__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___7852 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___7852)){
var response_type_7853 = temp__4657__auto___7852;
this$__$1.responseType = cljs.core.name.call(null,response_type_7853);
} else {
}

var seq__7842_7854 = cljs.core.seq.call(null,headers);
var chunk__7843_7855 = null;
var count__7844_7856 = (0);
var i__7845_7857 = (0);
while(true){
if((i__7845_7857 < count__7844_7856)){
var vec__7846_7858 = cljs.core._nth.call(null,chunk__7843_7855,i__7845_7857);
var k_7859 = cljs.core.nth.call(null,vec__7846_7858,(0),null);
var v_7860 = cljs.core.nth.call(null,vec__7846_7858,(1),null);
this$__$1.setRequestHeader(k_7859,v_7860);

var G__7861 = seq__7842_7854;
var G__7862 = chunk__7843_7855;
var G__7863 = count__7844_7856;
var G__7864 = (i__7845_7857 + (1));
seq__7842_7854 = G__7861;
chunk__7843_7855 = G__7862;
count__7844_7856 = G__7863;
i__7845_7857 = G__7864;
continue;
} else {
var temp__4657__auto___7865 = cljs.core.seq.call(null,seq__7842_7854);
if(temp__4657__auto___7865){
var seq__7842_7866__$1 = temp__4657__auto___7865;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7842_7866__$1)){
var c__7480__auto___7867 = cljs.core.chunk_first.call(null,seq__7842_7866__$1);
var G__7868 = cljs.core.chunk_rest.call(null,seq__7842_7866__$1);
var G__7869 = c__7480__auto___7867;
var G__7870 = cljs.core.count.call(null,c__7480__auto___7867);
var G__7871 = (0);
seq__7842_7854 = G__7868;
chunk__7843_7855 = G__7869;
count__7844_7856 = G__7870;
i__7845_7857 = G__7871;
continue;
} else {
var vec__7849_7872 = cljs.core.first.call(null,seq__7842_7866__$1);
var k_7873 = cljs.core.nth.call(null,vec__7849_7872,(0),null);
var v_7874 = cljs.core.nth.call(null,vec__7849_7872,(1),null);
this$__$1.setRequestHeader(k_7873,v_7874);

var G__7875 = cljs.core.next.call(null,seq__7842_7866__$1);
var G__7876 = null;
var G__7877 = (0);
var G__7878 = (0);
seq__7842_7854 = G__7875;
chunk__7843_7855 = G__7876;
count__7844_7856 = G__7877;
i__7845_7857 = G__7878;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__6666__auto__ = body;
if(cljs.core.truth_(or__6666__auto__)){
return or__6666__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map