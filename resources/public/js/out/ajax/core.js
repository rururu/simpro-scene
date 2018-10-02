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
var args__27518__auto__ = [];
var len__27511__auto___29593 = arguments.length;
var i__27512__auto___29594 = (0);
while(true){
if((i__27512__auto___29594 < len__27511__auto___29593)){
args__27518__auto__.push((arguments[i__27512__auto___29594]));

var G__29595 = (i__27512__auto___29594 + (1));
i__27512__auto___29594 = G__29595;
continue;
} else {
}
break;
}

var argseq__27519__auto__ = ((((1) < args__27518__auto__.length))?(new cljs.core.IndexedSeq(args__27518__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27519__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__28728__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"GET",(((f__28728__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__28728__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq29591){
var G__29592 = cljs.core.first.call(null,seq29591);
var seq29591__$1 = cljs.core.next.call(null,seq29591);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__29592,seq29591__$1);
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
var args__27518__auto__ = [];
var len__27511__auto___29598 = arguments.length;
var i__27512__auto___29599 = (0);
while(true){
if((i__27512__auto___29599 < len__27511__auto___29598)){
args__27518__auto__.push((arguments[i__27512__auto___29599]));

var G__29600 = (i__27512__auto___29599 + (1));
i__27512__auto___29599 = G__29600;
continue;
} else {
}
break;
}

var argseq__27519__auto__ = ((((1) < args__27518__auto__.length))?(new cljs.core.IndexedSeq(args__27518__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27519__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__28728__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"HEAD",(((f__28728__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__28728__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq29596){
var G__29597 = cljs.core.first.call(null,seq29596);
var seq29596__$1 = cljs.core.next.call(null,seq29596);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__29597,seq29596__$1);
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
var args__27518__auto__ = [];
var len__27511__auto___29603 = arguments.length;
var i__27512__auto___29604 = (0);
while(true){
if((i__27512__auto___29604 < len__27511__auto___29603)){
args__27518__auto__.push((arguments[i__27512__auto___29604]));

var G__29605 = (i__27512__auto___29604 + (1));
i__27512__auto___29604 = G__29605;
continue;
} else {
}
break;
}

var argseq__27519__auto__ = ((((1) < args__27518__auto__.length))?(new cljs.core.IndexedSeq(args__27518__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27519__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__28728__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"POST",(((f__28728__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__28728__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq29601){
var G__29602 = cljs.core.first.call(null,seq29601);
var seq29601__$1 = cljs.core.next.call(null,seq29601);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__29602,seq29601__$1);
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
var args__27518__auto__ = [];
var len__27511__auto___29608 = arguments.length;
var i__27512__auto___29609 = (0);
while(true){
if((i__27512__auto___29609 < len__27511__auto___29608)){
args__27518__auto__.push((arguments[i__27512__auto___29609]));

var G__29610 = (i__27512__auto___29609 + (1));
i__27512__auto___29609 = G__29610;
continue;
} else {
}
break;
}

var argseq__27519__auto__ = ((((1) < args__27518__auto__.length))?(new cljs.core.IndexedSeq(args__27518__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27519__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__28728__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PUT",(((f__28728__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__28728__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq29606){
var G__29607 = cljs.core.first.call(null,seq29606);
var seq29606__$1 = cljs.core.next.call(null,seq29606);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__29607,seq29606__$1);
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
var args__27518__auto__ = [];
var len__27511__auto___29613 = arguments.length;
var i__27512__auto___29614 = (0);
while(true){
if((i__27512__auto___29614 < len__27511__auto___29613)){
args__27518__auto__.push((arguments[i__27512__auto___29614]));

var G__29615 = (i__27512__auto___29614 + (1));
i__27512__auto___29614 = G__29615;
continue;
} else {
}
break;
}

var argseq__27519__auto__ = ((((1) < args__27518__auto__.length))?(new cljs.core.IndexedSeq(args__27518__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27519__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__28728__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"DELETE",(((f__28728__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__28728__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq29611){
var G__29612 = cljs.core.first.call(null,seq29611);
var seq29611__$1 = cljs.core.next.call(null,seq29611);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__29612,seq29611__$1);
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
var args__27518__auto__ = [];
var len__27511__auto___29618 = arguments.length;
var i__27512__auto___29619 = (0);
while(true){
if((i__27512__auto___29619 < len__27511__auto___29618)){
args__27518__auto__.push((arguments[i__27512__auto___29619]));

var G__29620 = (i__27512__auto___29619 + (1));
i__27512__auto___29619 = G__29620;
continue;
} else {
}
break;
}

var argseq__27519__auto__ = ((((1) < args__27518__auto__.length))?(new cljs.core.IndexedSeq(args__27518__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27519__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__28728__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"OPTIONS",(((f__28728__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__28728__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq29616){
var G__29617 = cljs.core.first.call(null,seq29616);
var seq29616__$1 = cljs.core.next.call(null,seq29616);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__29617,seq29616__$1);
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
var args__27518__auto__ = [];
var len__27511__auto___29623 = arguments.length;
var i__27512__auto___29624 = (0);
while(true){
if((i__27512__auto___29624 < len__27511__auto___29623)){
args__27518__auto__.push((arguments[i__27512__auto___29624]));

var G__29625 = (i__27512__auto___29624 + (1));
i__27512__auto___29624 = G__29625;
continue;
} else {
}
break;
}

var argseq__27519__auto__ = ((((1) < args__27518__auto__.length))?(new cljs.core.IndexedSeq(args__27518__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27519__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__28728__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"TRACE",(((f__28728__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__28728__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq29621){
var G__29622 = cljs.core.first.call(null,seq29621);
var seq29621__$1 = cljs.core.next.call(null,seq29621);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__29622,seq29621__$1);
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
var args__27518__auto__ = [];
var len__27511__auto___29628 = arguments.length;
var i__27512__auto___29629 = (0);
while(true){
if((i__27512__auto___29629 < len__27511__auto___29628)){
args__27518__auto__.push((arguments[i__27512__auto___29629]));

var G__29630 = (i__27512__auto___29629 + (1));
i__27512__auto___29629 = G__29630;
continue;
} else {
}
break;
}

var argseq__27519__auto__ = ((((1) < args__27518__auto__.length))?(new cljs.core.IndexedSeq(args__27518__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27519__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__28728__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PATCH",(((f__28728__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__28728__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq29626){
var G__29627 = cljs.core.first.call(null,seq29626);
var seq29626__$1 = cljs.core.next.call(null,seq29626);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__29627,seq29626__$1);
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
var args__27518__auto__ = [];
var len__27511__auto___29633 = arguments.length;
var i__27512__auto___29634 = (0);
while(true){
if((i__27512__auto___29634 < len__27511__auto___29633)){
args__27518__auto__.push((arguments[i__27512__auto___29634]));

var G__29635 = (i__27512__auto___29634 + (1));
i__27512__auto___29634 = G__29635;
continue;
} else {
}
break;
}

var argseq__27519__auto__ = ((((1) < args__27518__auto__.length))?(new cljs.core.IndexedSeq(args__27518__auto__.slice((1)),(0),null)):null);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27519__auto__);
});

ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__28728__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PURGE",(((f__28728__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__28728__auto__));
});

ajax.core.PURGE.cljs$lang$maxFixedArity = (1);

ajax.core.PURGE.cljs$lang$applyTo = (function (seq29631){
var G__29632 = cljs.core.first.call(null,seq29631);
var seq29631__$1 = cljs.core.next.call(null,seq29631);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic(G__29632,seq29631__$1);
});


//# sourceMappingURL=core.js.map
