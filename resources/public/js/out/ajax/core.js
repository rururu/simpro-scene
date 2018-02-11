// Compiled by ClojureScript 1.9.946 {}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('ajax.url');
goog.require('ajax.json');
goog.require('ajax.transit');
goog.require('ajax.ring');
goog.require('ajax.formats');
goog.require('ajax.util');
goog.require('ajax.interceptors');
goog.require('ajax.simple');
goog.require('ajax.easy');
goog.require('ajax.protocols');
goog.require('ajax.xhrio');
goog.require('ajax.xml_http_request');
ajax.core.to_interceptor = ajax.interceptors.to_interceptor;
ajax.core.abort = (function ajax$core$abort(this$){

return ajax.protocols._abort.call(null,this$);
});
ajax.core.json_request_format = ajax.json.json_request_format;
ajax.core.json_response_format = ajax.json.json_response_format;
ajax.core.transit_request_format = ajax.transit.transit_request_format;
ajax.core.transit_response_format = ajax.transit.transit_response_format;
ajax.core.ring_response_format = ajax.ring.ring_response_format;
ajax.core.url_request_format = ajax.url.url_request_format;
ajax.core.text_request_format = ajax.formats.text_request_format;
ajax.core.text_response_format = ajax.formats.text_response_format;
ajax.core.raw_response_format = ajax.formats.raw_response_format;
ajax.core.default_interceptors = ajax.simple.default_interceptors;
ajax.core.ajax_request = ajax.simple.ajax_request;
ajax.core.default_formats = ajax.easy.default_formats;
ajax.core.detect_response_format = ajax.easy.detect_response_format;
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__10187__auto__ = [];
var len__10180__auto___12262 = arguments.length;
var i__10181__auto___12263 = (0);
while(true){
if((i__10181__auto___12263 < len__10180__auto___12262)){
args__10187__auto__.push((arguments[i__10181__auto___12263]));

var G__12264 = (i__10181__auto___12263 + (1));
i__10181__auto___12263 = G__12264;
continue;
} else {
}
break;
}

var argseq__10188__auto__ = ((((1) < args__10187__auto__.length))?(new cljs.core.IndexedSeq(args__10187__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10188__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__11397__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"GET",(((f__11397__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__11397__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq12260){
var G__12261 = cljs.core.first.call(null,seq12260);
var seq12260__$1 = cljs.core.next.call(null,seq12260);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__12261,seq12260__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__10187__auto__ = [];
var len__10180__auto___12267 = arguments.length;
var i__10181__auto___12268 = (0);
while(true){
if((i__10181__auto___12268 < len__10180__auto___12267)){
args__10187__auto__.push((arguments[i__10181__auto___12268]));

var G__12269 = (i__10181__auto___12268 + (1));
i__10181__auto___12268 = G__12269;
continue;
} else {
}
break;
}

var argseq__10188__auto__ = ((((1) < args__10187__auto__.length))?(new cljs.core.IndexedSeq(args__10187__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10188__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__11397__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"HEAD",(((f__11397__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__11397__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq12265){
var G__12266 = cljs.core.first.call(null,seq12265);
var seq12265__$1 = cljs.core.next.call(null,seq12265);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__12266,seq12265__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__10187__auto__ = [];
var len__10180__auto___12272 = arguments.length;
var i__10181__auto___12273 = (0);
while(true){
if((i__10181__auto___12273 < len__10180__auto___12272)){
args__10187__auto__.push((arguments[i__10181__auto___12273]));

var G__12274 = (i__10181__auto___12273 + (1));
i__10181__auto___12273 = G__12274;
continue;
} else {
}
break;
}

var argseq__10188__auto__ = ((((1) < args__10187__auto__.length))?(new cljs.core.IndexedSeq(args__10187__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10188__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__11397__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"POST",(((f__11397__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__11397__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq12270){
var G__12271 = cljs.core.first.call(null,seq12270);
var seq12270__$1 = cljs.core.next.call(null,seq12270);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__12271,seq12270__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__10187__auto__ = [];
var len__10180__auto___12277 = arguments.length;
var i__10181__auto___12278 = (0);
while(true){
if((i__10181__auto___12278 < len__10180__auto___12277)){
args__10187__auto__.push((arguments[i__10181__auto___12278]));

var G__12279 = (i__10181__auto___12278 + (1));
i__10181__auto___12278 = G__12279;
continue;
} else {
}
break;
}

var argseq__10188__auto__ = ((((1) < args__10187__auto__.length))?(new cljs.core.IndexedSeq(args__10187__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10188__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__11397__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PUT",(((f__11397__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__11397__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq12275){
var G__12276 = cljs.core.first.call(null,seq12275);
var seq12275__$1 = cljs.core.next.call(null,seq12275);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__12276,seq12275__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__10187__auto__ = [];
var len__10180__auto___12282 = arguments.length;
var i__10181__auto___12283 = (0);
while(true){
if((i__10181__auto___12283 < len__10180__auto___12282)){
args__10187__auto__.push((arguments[i__10181__auto___12283]));

var G__12284 = (i__10181__auto___12283 + (1));
i__10181__auto___12283 = G__12284;
continue;
} else {
}
break;
}

var argseq__10188__auto__ = ((((1) < args__10187__auto__.length))?(new cljs.core.IndexedSeq(args__10187__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10188__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__11397__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"DELETE",(((f__11397__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__11397__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq12280){
var G__12281 = cljs.core.first.call(null,seq12280);
var seq12280__$1 = cljs.core.next.call(null,seq12280);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__12281,seq12280__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__10187__auto__ = [];
var len__10180__auto___12287 = arguments.length;
var i__10181__auto___12288 = (0);
while(true){
if((i__10181__auto___12288 < len__10180__auto___12287)){
args__10187__auto__.push((arguments[i__10181__auto___12288]));

var G__12289 = (i__10181__auto___12288 + (1));
i__10181__auto___12288 = G__12289;
continue;
} else {
}
break;
}

var argseq__10188__auto__ = ((((1) < args__10187__auto__.length))?(new cljs.core.IndexedSeq(args__10187__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10188__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__11397__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"OPTIONS",(((f__11397__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__11397__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq12285){
var G__12286 = cljs.core.first.call(null,seq12285);
var seq12285__$1 = cljs.core.next.call(null,seq12285);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__12286,seq12285__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__10187__auto__ = [];
var len__10180__auto___12292 = arguments.length;
var i__10181__auto___12293 = (0);
while(true){
if((i__10181__auto___12293 < len__10180__auto___12292)){
args__10187__auto__.push((arguments[i__10181__auto___12293]));

var G__12294 = (i__10181__auto___12293 + (1));
i__10181__auto___12293 = G__12294;
continue;
} else {
}
break;
}

var argseq__10188__auto__ = ((((1) < args__10187__auto__.length))?(new cljs.core.IndexedSeq(args__10187__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10188__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__11397__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"TRACE",(((f__11397__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__11397__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq12290){
var G__12291 = cljs.core.first.call(null,seq12290);
var seq12290__$1 = cljs.core.next.call(null,seq12290);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__12291,seq12290__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__10187__auto__ = [];
var len__10180__auto___12297 = arguments.length;
var i__10181__auto___12298 = (0);
while(true){
if((i__10181__auto___12298 < len__10180__auto___12297)){
args__10187__auto__.push((arguments[i__10181__auto___12298]));

var G__12299 = (i__10181__auto___12298 + (1));
i__10181__auto___12298 = G__12299;
continue;
} else {
}
break;
}

var argseq__10188__auto__ = ((((1) < args__10187__auto__.length))?(new cljs.core.IndexedSeq(args__10187__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10188__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__11397__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PATCH",(((f__11397__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__11397__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq12295){
var G__12296 = cljs.core.first.call(null,seq12295);
var seq12295__$1 = cljs.core.next.call(null,seq12295);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__12296,seq12295__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PURGE = (function ajax$core$PURGE(var_args){
var args__10187__auto__ = [];
var len__10180__auto___12302 = arguments.length;
var i__10181__auto___12303 = (0);
while(true){
if((i__10181__auto___12303 < len__10180__auto___12302)){
args__10187__auto__.push((arguments[i__10181__auto___12303]));

var G__12304 = (i__10181__auto___12303 + (1));
i__10181__auto___12303 = G__12304;
continue;
} else {
}
break;
}

var argseq__10188__auto__ = ((((1) < args__10187__auto__.length))?(new cljs.core.IndexedSeq(args__10187__auto__.slice((1)),(0),null)):null);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10188__auto__);
});

ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__11397__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PURGE",(((f__11397__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__11397__auto__));
});

ajax.core.PURGE.cljs$lang$maxFixedArity = (1);

ajax.core.PURGE.cljs$lang$applyTo = (function (seq12300){
var G__12301 = cljs.core.first.call(null,seq12300);
var seq12300__$1 = cljs.core.next.call(null,seq12300);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic(G__12301,seq12300__$1);
});


//# sourceMappingURL=core.js.map
