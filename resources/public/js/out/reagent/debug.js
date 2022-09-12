// Compiled by ClojureScript 1.11.4 {:optimizations :none}
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
var G__1401__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__1401 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1402__i = 0, G__1402__a = new Array(arguments.length -  0);
while (G__1402__i < G__1402__a.length) {G__1402__a[G__1402__i] = arguments[G__1402__i + 0]; ++G__1402__i;}
  args = new cljs.core.IndexedSeq(G__1402__a,0,null);
} 
return G__1401__delegate.call(this,args);};
G__1401.cljs$lang$maxFixedArity = 0;
G__1401.cljs$lang$applyTo = (function (arglist__1403){
var args = cljs.core.seq(arglist__1403);
return G__1401__delegate(args);
});
G__1401.cljs$core$IFn$_invoke$arity$variadic = G__1401__delegate;
return G__1401;
})()
);

(o.error = (function() { 
var G__1404__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__1404 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1405__i = 0, G__1405__a = new Array(arguments.length -  0);
while (G__1405__i < G__1405__a.length) {G__1405__a[G__1405__i] = arguments[G__1405__i + 0]; ++G__1405__i;}
  args = new cljs.core.IndexedSeq(G__1405__a,0,null);
} 
return G__1404__delegate.call(this,args);};
G__1404.cljs$lang$maxFixedArity = 0;
G__1404.cljs$lang$applyTo = (function (arglist__1406){
var args = cljs.core.seq(arglist__1406);
return G__1404__delegate(args);
});
G__1404.cljs$core$IFn$_invoke$arity$variadic = G__1404__delegate;
return G__1404;
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
