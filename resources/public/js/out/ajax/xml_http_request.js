// Compiled by ClojureScript 1.9.521 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__21616,handler){
var map__21617 = p__21616;
var map__21617__$1 = ((((!((map__21617 == null)))?((((map__21617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21617.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21617):map__21617);
var uri = cljs.core.get.call(null,map__21617__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__21617__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__21617__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__21617__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__21617__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__21617__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__21617__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__21617,map__21617__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__21615_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__21615_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__21617,map__21617__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___21629 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___21629)){
var response_type_21630 = temp__4657__auto___21629;
this$__$1.responseType = cljs.core.name.call(null,response_type_21630);
} else {
}

var seq__21619_21631 = cljs.core.seq.call(null,headers);
var chunk__21620_21632 = null;
var count__21621_21633 = (0);
var i__21622_21634 = (0);
while(true){
if((i__21622_21634 < count__21621_21633)){
var vec__21623_21635 = cljs.core._nth.call(null,chunk__21620_21632,i__21622_21634);
var k_21636 = cljs.core.nth.call(null,vec__21623_21635,(0),null);
var v_21637 = cljs.core.nth.call(null,vec__21623_21635,(1),null);
this$__$1.setRequestHeader(k_21636,v_21637);

var G__21638 = seq__21619_21631;
var G__21639 = chunk__21620_21632;
var G__21640 = count__21621_21633;
var G__21641 = (i__21622_21634 + (1));
seq__21619_21631 = G__21638;
chunk__21620_21632 = G__21639;
count__21621_21633 = G__21640;
i__21622_21634 = G__21641;
continue;
} else {
var temp__4657__auto___21642 = cljs.core.seq.call(null,seq__21619_21631);
if(temp__4657__auto___21642){
var seq__21619_21643__$1 = temp__4657__auto___21642;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21619_21643__$1)){
var c__20113__auto___21644 = cljs.core.chunk_first.call(null,seq__21619_21643__$1);
var G__21645 = cljs.core.chunk_rest.call(null,seq__21619_21643__$1);
var G__21646 = c__20113__auto___21644;
var G__21647 = cljs.core.count.call(null,c__20113__auto___21644);
var G__21648 = (0);
seq__21619_21631 = G__21645;
chunk__21620_21632 = G__21646;
count__21621_21633 = G__21647;
i__21622_21634 = G__21648;
continue;
} else {
var vec__21626_21649 = cljs.core.first.call(null,seq__21619_21643__$1);
var k_21650 = cljs.core.nth.call(null,vec__21626_21649,(0),null);
var v_21651 = cljs.core.nth.call(null,vec__21626_21649,(1),null);
this$__$1.setRequestHeader(k_21650,v_21651);

var G__21652 = cljs.core.next.call(null,seq__21619_21643__$1);
var G__21653 = null;
var G__21654 = (0);
var G__21655 = (0);
seq__21619_21631 = G__21652;
chunk__21620_21632 = G__21653;
count__21621_21633 = G__21654;
i__21622_21634 = G__21655;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__19294__auto__ = body;
if(cljs.core.truth_(or__19294__auto__)){
return or__19294__auto__;
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