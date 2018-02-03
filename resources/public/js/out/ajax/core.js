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
var args__24525__auto__ = [];
var len__24518__auto___26600 = arguments.length;
var i__24519__auto___26601 = (0);
while(true){
if((i__24519__auto___26601 < len__24518__auto___26600)){
args__24525__auto__.push((arguments[i__24519__auto___26601]));

var G__26602 = (i__24519__auto___26601 + (1));
i__24519__auto___26601 = G__26602;
continue;
} else {
}
break;
}

var argseq__24526__auto__ = ((((1) < args__24525__auto__.length))?(new cljs.core.IndexedSeq(args__24525__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24526__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__25735__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"GET",(((f__25735__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__25735__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq26598){
var G__26599 = cljs.core.first.call(null,seq26598);
var seq26598__$1 = cljs.core.next.call(null,seq26598);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__26599,seq26598__$1);
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
var args__24525__auto__ = [];
var len__24518__auto___26605 = arguments.length;
var i__24519__auto___26606 = (0);
while(true){
if((i__24519__auto___26606 < len__24518__auto___26605)){
args__24525__auto__.push((arguments[i__24519__auto___26606]));

var G__26607 = (i__24519__auto___26606 + (1));
i__24519__auto___26606 = G__26607;
continue;
} else {
}
break;
}

var argseq__24526__auto__ = ((((1) < args__24525__auto__.length))?(new cljs.core.IndexedSeq(args__24525__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24526__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__25735__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"HEAD",(((f__25735__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__25735__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq26603){
var G__26604 = cljs.core.first.call(null,seq26603);
var seq26603__$1 = cljs.core.next.call(null,seq26603);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__26604,seq26603__$1);
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
var args__24525__auto__ = [];
var len__24518__auto___26610 = arguments.length;
var i__24519__auto___26611 = (0);
while(true){
if((i__24519__auto___26611 < len__24518__auto___26610)){
args__24525__auto__.push((arguments[i__24519__auto___26611]));

var G__26612 = (i__24519__auto___26611 + (1));
i__24519__auto___26611 = G__26612;
continue;
} else {
}
break;
}

var argseq__24526__auto__ = ((((1) < args__24525__auto__.length))?(new cljs.core.IndexedSeq(args__24525__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24526__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__25735__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"POST",(((f__25735__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__25735__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq26608){
var G__26609 = cljs.core.first.call(null,seq26608);
var seq26608__$1 = cljs.core.next.call(null,seq26608);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__26609,seq26608__$1);
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
var args__24525__auto__ = [];
var len__24518__auto___26615 = arguments.length;
var i__24519__auto___26616 = (0);
while(true){
if((i__24519__auto___26616 < len__24518__auto___26615)){
args__24525__auto__.push((arguments[i__24519__auto___26616]));

var G__26617 = (i__24519__auto___26616 + (1));
i__24519__auto___26616 = G__26617;
continue;
} else {
}
break;
}

var argseq__24526__auto__ = ((((1) < args__24525__auto__.length))?(new cljs.core.IndexedSeq(args__24525__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24526__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__25735__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PUT",(((f__25735__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__25735__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq26613){
var G__26614 = cljs.core.first.call(null,seq26613);
var seq26613__$1 = cljs.core.next.call(null,seq26613);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__26614,seq26613__$1);
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
var args__24525__auto__ = [];
var len__24518__auto___26620 = arguments.length;
var i__24519__auto___26621 = (0);
while(true){
if((i__24519__auto___26621 < len__24518__auto___26620)){
args__24525__auto__.push((arguments[i__24519__auto___26621]));

var G__26622 = (i__24519__auto___26621 + (1));
i__24519__auto___26621 = G__26622;
continue;
} else {
}
break;
}

var argseq__24526__auto__ = ((((1) < args__24525__auto__.length))?(new cljs.core.IndexedSeq(args__24525__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24526__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__25735__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"DELETE",(((f__25735__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__25735__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq26618){
var G__26619 = cljs.core.first.call(null,seq26618);
var seq26618__$1 = cljs.core.next.call(null,seq26618);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__26619,seq26618__$1);
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
var args__24525__auto__ = [];
var len__24518__auto___26625 = arguments.length;
var i__24519__auto___26626 = (0);
while(true){
if((i__24519__auto___26626 < len__24518__auto___26625)){
args__24525__auto__.push((arguments[i__24519__auto___26626]));

var G__26627 = (i__24519__auto___26626 + (1));
i__24519__auto___26626 = G__26627;
continue;
} else {
}
break;
}

var argseq__24526__auto__ = ((((1) < args__24525__auto__.length))?(new cljs.core.IndexedSeq(args__24525__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24526__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__25735__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"OPTIONS",(((f__25735__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__25735__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq26623){
var G__26624 = cljs.core.first.call(null,seq26623);
var seq26623__$1 = cljs.core.next.call(null,seq26623);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__26624,seq26623__$1);
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
var args__24525__auto__ = [];
var len__24518__auto___26630 = arguments.length;
var i__24519__auto___26631 = (0);
while(true){
if((i__24519__auto___26631 < len__24518__auto___26630)){
args__24525__auto__.push((arguments[i__24519__auto___26631]));

var G__26632 = (i__24519__auto___26631 + (1));
i__24519__auto___26631 = G__26632;
continue;
} else {
}
break;
}

var argseq__24526__auto__ = ((((1) < args__24525__auto__.length))?(new cljs.core.IndexedSeq(args__24525__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24526__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__25735__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"TRACE",(((f__25735__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__25735__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq26628){
var G__26629 = cljs.core.first.call(null,seq26628);
var seq26628__$1 = cljs.core.next.call(null,seq26628);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__26629,seq26628__$1);
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
var args__24525__auto__ = [];
var len__24518__auto___26635 = arguments.length;
var i__24519__auto___26636 = (0);
while(true){
if((i__24519__auto___26636 < len__24518__auto___26635)){
args__24525__auto__.push((arguments[i__24519__auto___26636]));

var G__26637 = (i__24519__auto___26636 + (1));
i__24519__auto___26636 = G__26637;
continue;
} else {
}
break;
}

var argseq__24526__auto__ = ((((1) < args__24525__auto__.length))?(new cljs.core.IndexedSeq(args__24525__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24526__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__25735__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PATCH",(((f__25735__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__25735__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq26633){
var G__26634 = cljs.core.first.call(null,seq26633);
var seq26633__$1 = cljs.core.next.call(null,seq26633);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__26634,seq26633__$1);
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
var args__24525__auto__ = [];
var len__24518__auto___26640 = arguments.length;
var i__24519__auto___26641 = (0);
while(true){
if((i__24519__auto___26641 < len__24518__auto___26640)){
args__24525__auto__.push((arguments[i__24519__auto___26641]));

var G__26642 = (i__24519__auto___26641 + (1));
i__24519__auto___26641 = G__26642;
continue;
} else {
}
break;
}

var argseq__24526__auto__ = ((((1) < args__24525__auto__.length))?(new cljs.core.IndexedSeq(args__24525__auto__.slice((1)),(0),null)):null);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24526__auto__);
});

ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__25735__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PURGE",(((f__25735__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__25735__auto__));
});

ajax.core.PURGE.cljs$lang$maxFixedArity = (1);

ajax.core.PURGE.cljs$lang$applyTo = (function (seq26638){
var G__26639 = cljs.core.first.call(null,seq26638);
var seq26638__$1 = cljs.core.next.call(null,seq26638);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic(G__26639,seq26638__$1);
});


//# sourceMappingURL=core.js.map
