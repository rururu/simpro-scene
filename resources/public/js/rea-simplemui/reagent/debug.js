// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__2171__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__2171 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2172__i = 0, G__2172__a = new Array(arguments.length -  0);
while (G__2172__i < G__2172__a.length) {G__2172__a[G__2172__i] = arguments[G__2172__i + 0]; ++G__2172__i;}
  args = new cljs.core.IndexedSeq(G__2172__a,0,null);
} 
return G__2171__delegate.call(this,args);};
G__2171.cljs$lang$maxFixedArity = 0;
G__2171.cljs$lang$applyTo = (function (arglist__2173){
var args = cljs.core.seq(arglist__2173);
return G__2171__delegate(args);
});
G__2171.cljs$core$IFn$_invoke$arity$variadic = G__2171__delegate;
return G__2171;
})()
);

(o.error = (function() { 
var G__2174__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__2174 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2175__i = 0, G__2175__a = new Array(arguments.length -  0);
while (G__2175__i < G__2175__a.length) {G__2175__a[G__2175__i] = arguments[G__2175__i + 0]; ++G__2175__i;}
  args = new cljs.core.IndexedSeq(G__2175__a,0,null);
} 
return G__2174__delegate.call(this,args);};
G__2174.cljs$lang$maxFixedArity = 0;
G__2174.cljs$lang$applyTo = (function (arglist__2176){
var args = cljs.core.seq(arglist__2176);
return G__2174__delegate(args);
});
G__2174.cljs$core$IFn$_invoke$arity$variadic = G__2174__delegate;
return G__2174;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
