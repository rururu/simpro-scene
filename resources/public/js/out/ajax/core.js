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
var args__19358__auto__ = [];
var len__19351__auto___21433 = arguments.length;
var i__19352__auto___21434 = (0);
while(true){
if((i__19352__auto___21434 < len__19351__auto___21433)){
args__19358__auto__.push((arguments[i__19352__auto___21434]));

var G__21435 = (i__19352__auto___21434 + (1));
i__19352__auto___21434 = G__21435;
continue;
} else {
}
break;
}

var argseq__19359__auto__ = ((((1) < args__19358__auto__.length))?(new cljs.core.IndexedSeq(args__19358__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19359__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__20568__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"GET",(((f__20568__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__20568__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq21431){
var G__21432 = cljs.core.first.call(null,seq21431);
var seq21431__$1 = cljs.core.next.call(null,seq21431);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__21432,seq21431__$1);
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
var args__19358__auto__ = [];
var len__19351__auto___21438 = arguments.length;
var i__19352__auto___21439 = (0);
while(true){
if((i__19352__auto___21439 < len__19351__auto___21438)){
args__19358__auto__.push((arguments[i__19352__auto___21439]));

var G__21440 = (i__19352__auto___21439 + (1));
i__19352__auto___21439 = G__21440;
continue;
} else {
}
break;
}

var argseq__19359__auto__ = ((((1) < args__19358__auto__.length))?(new cljs.core.IndexedSeq(args__19358__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19359__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__20568__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"HEAD",(((f__20568__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__20568__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq21436){
var G__21437 = cljs.core.first.call(null,seq21436);
var seq21436__$1 = cljs.core.next.call(null,seq21436);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__21437,seq21436__$1);
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
var args__19358__auto__ = [];
var len__19351__auto___21443 = arguments.length;
var i__19352__auto___21444 = (0);
while(true){
if((i__19352__auto___21444 < len__19351__auto___21443)){
args__19358__auto__.push((arguments[i__19352__auto___21444]));

var G__21445 = (i__19352__auto___21444 + (1));
i__19352__auto___21444 = G__21445;
continue;
} else {
}
break;
}

var argseq__19359__auto__ = ((((1) < args__19358__auto__.length))?(new cljs.core.IndexedSeq(args__19358__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19359__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__20568__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"POST",(((f__20568__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__20568__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq21441){
var G__21442 = cljs.core.first.call(null,seq21441);
var seq21441__$1 = cljs.core.next.call(null,seq21441);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__21442,seq21441__$1);
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
var args__19358__auto__ = [];
var len__19351__auto___21448 = arguments.length;
var i__19352__auto___21449 = (0);
while(true){
if((i__19352__auto___21449 < len__19351__auto___21448)){
args__19358__auto__.push((arguments[i__19352__auto___21449]));

var G__21450 = (i__19352__auto___21449 + (1));
i__19352__auto___21449 = G__21450;
continue;
} else {
}
break;
}

var argseq__19359__auto__ = ((((1) < args__19358__auto__.length))?(new cljs.core.IndexedSeq(args__19358__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19359__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__20568__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PUT",(((f__20568__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__20568__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq21446){
var G__21447 = cljs.core.first.call(null,seq21446);
var seq21446__$1 = cljs.core.next.call(null,seq21446);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__21447,seq21446__$1);
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
var args__19358__auto__ = [];
var len__19351__auto___21453 = arguments.length;
var i__19352__auto___21454 = (0);
while(true){
if((i__19352__auto___21454 < len__19351__auto___21453)){
args__19358__auto__.push((arguments[i__19352__auto___21454]));

var G__21455 = (i__19352__auto___21454 + (1));
i__19352__auto___21454 = G__21455;
continue;
} else {
}
break;
}

var argseq__19359__auto__ = ((((1) < args__19358__auto__.length))?(new cljs.core.IndexedSeq(args__19358__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19359__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__20568__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"DELETE",(((f__20568__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__20568__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq21451){
var G__21452 = cljs.core.first.call(null,seq21451);
var seq21451__$1 = cljs.core.next.call(null,seq21451);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__21452,seq21451__$1);
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
var args__19358__auto__ = [];
var len__19351__auto___21458 = arguments.length;
var i__19352__auto___21459 = (0);
while(true){
if((i__19352__auto___21459 < len__19351__auto___21458)){
args__19358__auto__.push((arguments[i__19352__auto___21459]));

var G__21460 = (i__19352__auto___21459 + (1));
i__19352__auto___21459 = G__21460;
continue;
} else {
}
break;
}

var argseq__19359__auto__ = ((((1) < args__19358__auto__.length))?(new cljs.core.IndexedSeq(args__19358__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19359__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__20568__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"OPTIONS",(((f__20568__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__20568__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq21456){
var G__21457 = cljs.core.first.call(null,seq21456);
var seq21456__$1 = cljs.core.next.call(null,seq21456);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__21457,seq21456__$1);
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
var args__19358__auto__ = [];
var len__19351__auto___21463 = arguments.length;
var i__19352__auto___21464 = (0);
while(true){
if((i__19352__auto___21464 < len__19351__auto___21463)){
args__19358__auto__.push((arguments[i__19352__auto___21464]));

var G__21465 = (i__19352__auto___21464 + (1));
i__19352__auto___21464 = G__21465;
continue;
} else {
}
break;
}

var argseq__19359__auto__ = ((((1) < args__19358__auto__.length))?(new cljs.core.IndexedSeq(args__19358__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19359__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__20568__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"TRACE",(((f__20568__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__20568__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq21461){
var G__21462 = cljs.core.first.call(null,seq21461);
var seq21461__$1 = cljs.core.next.call(null,seq21461);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__21462,seq21461__$1);
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
var args__19358__auto__ = [];
var len__19351__auto___21468 = arguments.length;
var i__19352__auto___21469 = (0);
while(true){
if((i__19352__auto___21469 < len__19351__auto___21468)){
args__19358__auto__.push((arguments[i__19352__auto___21469]));

var G__21470 = (i__19352__auto___21469 + (1));
i__19352__auto___21469 = G__21470;
continue;
} else {
}
break;
}

var argseq__19359__auto__ = ((((1) < args__19358__auto__.length))?(new cljs.core.IndexedSeq(args__19358__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19359__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__20568__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PATCH",(((f__20568__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__20568__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq21466){
var G__21467 = cljs.core.first.call(null,seq21466);
var seq21466__$1 = cljs.core.next.call(null,seq21466);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__21467,seq21466__$1);
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
var args__19358__auto__ = [];
var len__19351__auto___21473 = arguments.length;
var i__19352__auto___21474 = (0);
while(true){
if((i__19352__auto___21474 < len__19351__auto___21473)){
args__19358__auto__.push((arguments[i__19352__auto___21474]));

var G__21475 = (i__19352__auto___21474 + (1));
i__19352__auto___21474 = G__21475;
continue;
} else {
}
break;
}

var argseq__19359__auto__ = ((((1) < args__19358__auto__.length))?(new cljs.core.IndexedSeq(args__19358__auto__.slice((1)),(0),null)):null);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19359__auto__);
});

ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__20568__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PURGE",(((f__20568__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__20568__auto__));
});

ajax.core.PURGE.cljs$lang$maxFixedArity = (1);

ajax.core.PURGE.cljs$lang$applyTo = (function (seq21471){
var G__21472 = cljs.core.first.call(null,seq21471);
var seq21471__$1 = cljs.core.next.call(null,seq21471);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic(G__21472,seq21471__$1);
});


//# sourceMappingURL=core.js.map
