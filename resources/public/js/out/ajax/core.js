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
var args__10948__auto__ = [];
var len__10941__auto___13023 = arguments.length;
var i__10942__auto___13024 = (0);
while(true){
if((i__10942__auto___13024 < len__10941__auto___13023)){
args__10948__auto__.push((arguments[i__10942__auto___13024]));

var G__13025 = (i__10942__auto___13024 + (1));
i__10942__auto___13024 = G__13025;
continue;
} else {
}
break;
}

var argseq__10949__auto__ = ((((1) < args__10948__auto__.length))?(new cljs.core.IndexedSeq(args__10948__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10949__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__12247__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"GET",(((f__12247__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__12247__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq13021){
var G__13022 = cljs.core.first.call(null,seq13021);
var seq13021__$1 = cljs.core.next.call(null,seq13021);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__13022,seq13021__$1);
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
var args__10948__auto__ = [];
var len__10941__auto___13028 = arguments.length;
var i__10942__auto___13029 = (0);
while(true){
if((i__10942__auto___13029 < len__10941__auto___13028)){
args__10948__auto__.push((arguments[i__10942__auto___13029]));

var G__13030 = (i__10942__auto___13029 + (1));
i__10942__auto___13029 = G__13030;
continue;
} else {
}
break;
}

var argseq__10949__auto__ = ((((1) < args__10948__auto__.length))?(new cljs.core.IndexedSeq(args__10948__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10949__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__12247__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"HEAD",(((f__12247__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__12247__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq13026){
var G__13027 = cljs.core.first.call(null,seq13026);
var seq13026__$1 = cljs.core.next.call(null,seq13026);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__13027,seq13026__$1);
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
var args__10948__auto__ = [];
var len__10941__auto___13033 = arguments.length;
var i__10942__auto___13034 = (0);
while(true){
if((i__10942__auto___13034 < len__10941__auto___13033)){
args__10948__auto__.push((arguments[i__10942__auto___13034]));

var G__13035 = (i__10942__auto___13034 + (1));
i__10942__auto___13034 = G__13035;
continue;
} else {
}
break;
}

var argseq__10949__auto__ = ((((1) < args__10948__auto__.length))?(new cljs.core.IndexedSeq(args__10948__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10949__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__12247__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"POST",(((f__12247__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__12247__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq13031){
var G__13032 = cljs.core.first.call(null,seq13031);
var seq13031__$1 = cljs.core.next.call(null,seq13031);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__13032,seq13031__$1);
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
var args__10948__auto__ = [];
var len__10941__auto___13038 = arguments.length;
var i__10942__auto___13039 = (0);
while(true){
if((i__10942__auto___13039 < len__10941__auto___13038)){
args__10948__auto__.push((arguments[i__10942__auto___13039]));

var G__13040 = (i__10942__auto___13039 + (1));
i__10942__auto___13039 = G__13040;
continue;
} else {
}
break;
}

var argseq__10949__auto__ = ((((1) < args__10948__auto__.length))?(new cljs.core.IndexedSeq(args__10948__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10949__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__12247__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PUT",(((f__12247__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__12247__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq13036){
var G__13037 = cljs.core.first.call(null,seq13036);
var seq13036__$1 = cljs.core.next.call(null,seq13036);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__13037,seq13036__$1);
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
var args__10948__auto__ = [];
var len__10941__auto___13043 = arguments.length;
var i__10942__auto___13044 = (0);
while(true){
if((i__10942__auto___13044 < len__10941__auto___13043)){
args__10948__auto__.push((arguments[i__10942__auto___13044]));

var G__13045 = (i__10942__auto___13044 + (1));
i__10942__auto___13044 = G__13045;
continue;
} else {
}
break;
}

var argseq__10949__auto__ = ((((1) < args__10948__auto__.length))?(new cljs.core.IndexedSeq(args__10948__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10949__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__12247__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"DELETE",(((f__12247__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__12247__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq13041){
var G__13042 = cljs.core.first.call(null,seq13041);
var seq13041__$1 = cljs.core.next.call(null,seq13041);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__13042,seq13041__$1);
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
var args__10948__auto__ = [];
var len__10941__auto___13048 = arguments.length;
var i__10942__auto___13049 = (0);
while(true){
if((i__10942__auto___13049 < len__10941__auto___13048)){
args__10948__auto__.push((arguments[i__10942__auto___13049]));

var G__13050 = (i__10942__auto___13049 + (1));
i__10942__auto___13049 = G__13050;
continue;
} else {
}
break;
}

var argseq__10949__auto__ = ((((1) < args__10948__auto__.length))?(new cljs.core.IndexedSeq(args__10948__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10949__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__12247__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"OPTIONS",(((f__12247__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__12247__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq13046){
var G__13047 = cljs.core.first.call(null,seq13046);
var seq13046__$1 = cljs.core.next.call(null,seq13046);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__13047,seq13046__$1);
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
var args__10948__auto__ = [];
var len__10941__auto___13053 = arguments.length;
var i__10942__auto___13054 = (0);
while(true){
if((i__10942__auto___13054 < len__10941__auto___13053)){
args__10948__auto__.push((arguments[i__10942__auto___13054]));

var G__13055 = (i__10942__auto___13054 + (1));
i__10942__auto___13054 = G__13055;
continue;
} else {
}
break;
}

var argseq__10949__auto__ = ((((1) < args__10948__auto__.length))?(new cljs.core.IndexedSeq(args__10948__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10949__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__12247__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"TRACE",(((f__12247__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__12247__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq13051){
var G__13052 = cljs.core.first.call(null,seq13051);
var seq13051__$1 = cljs.core.next.call(null,seq13051);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__13052,seq13051__$1);
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
var args__10948__auto__ = [];
var len__10941__auto___13058 = arguments.length;
var i__10942__auto___13059 = (0);
while(true){
if((i__10942__auto___13059 < len__10941__auto___13058)){
args__10948__auto__.push((arguments[i__10942__auto___13059]));

var G__13060 = (i__10942__auto___13059 + (1));
i__10942__auto___13059 = G__13060;
continue;
} else {
}
break;
}

var argseq__10949__auto__ = ((((1) < args__10948__auto__.length))?(new cljs.core.IndexedSeq(args__10948__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10949__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__12247__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PATCH",(((f__12247__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__12247__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq13056){
var G__13057 = cljs.core.first.call(null,seq13056);
var seq13056__$1 = cljs.core.next.call(null,seq13056);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__13057,seq13056__$1);
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
var args__10948__auto__ = [];
var len__10941__auto___13063 = arguments.length;
var i__10942__auto___13064 = (0);
while(true){
if((i__10942__auto___13064 < len__10941__auto___13063)){
args__10948__auto__.push((arguments[i__10942__auto___13064]));

var G__13065 = (i__10942__auto___13064 + (1));
i__10942__auto___13064 = G__13065;
continue;
} else {
}
break;
}

var argseq__10949__auto__ = ((((1) < args__10948__auto__.length))?(new cljs.core.IndexedSeq(args__10948__auto__.slice((1)),(0),null)):null);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10949__auto__);
});

ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__12247__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PURGE",(((f__12247__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__12247__auto__));
});

ajax.core.PURGE.cljs$lang$maxFixedArity = (1);

ajax.core.PURGE.cljs$lang$applyTo = (function (seq13061){
var G__13062 = cljs.core.first.call(null,seq13061);
var seq13061__$1 = cljs.core.next.call(null,seq13061);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic(G__13062,seq13061__$1);
});


//# sourceMappingURL=core.js.map
