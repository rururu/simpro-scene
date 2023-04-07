// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___1742 = arguments.length;
var i__5770__auto___1743 = (0);
while(true){
if((i__5770__auto___1743 < len__5769__auto___1742)){
args__5775__auto__.push((arguments[i__5770__auto___1743]));

var G__1744 = (i__5770__auto___1743 + (1));
i__5770__auto___1743 = G__1744;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__1737){
var map__1738 = p__1737;
var map__1738__$1 = cljs.core.__destructure_map.call(null,map__1738);
var separator = cljs.core.get.call(null,map__1738__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var temp__5802__auto__ = cljs.core.seq.call(null,camel_snake_kebab.internals.string_separator.split.call(null,separator,s));
if(temp__5802__auto__){
var vec__1739 = temp__5802__auto__;
var seq__1740 = cljs.core.seq.call(null,vec__1739);
var first__1741 = cljs.core.first.call(null,seq__1740);
var seq__1740__$1 = cljs.core.next.call(null,seq__1740);
var first = first__1741;
var rest = seq__1740__$1;
return clojure.string.join.call(null,sep,cljs.core.cons.call(null,first_fn.call(null,first),cljs.core.map.call(null,rest_fn,rest)));
} else {
return "";
}
}));

(camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq1732){
var G__1733 = cljs.core.first.call(null,seq1732);
var seq1732__$1 = cljs.core.next.call(null,seq1732);
var G__1734 = cljs.core.first.call(null,seq1732__$1);
var seq1732__$2 = cljs.core.next.call(null,seq1732__$1);
var G__1735 = cljs.core.first.call(null,seq1732__$2);
var seq1732__$3 = cljs.core.next.call(null,seq1732__$2);
var G__1736 = cljs.core.first.call(null,seq1732__$3);
var seq1732__$4 = cljs.core.next.call(null,seq1732__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1733,G__1734,G__1735,G__1736,seq1732__$4);
}));

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__5045__auto__ = camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,clojure.string.upper_case.call(null,s));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return clojure.string.capitalize.call(null,s);
}
});

//# sourceMappingURL=misc.js.map
