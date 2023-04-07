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
var G__3508__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__3508 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3509__i = 0, G__3509__a = new Array(arguments.length -  0);
while (G__3509__i < G__3509__a.length) {G__3509__a[G__3509__i] = arguments[G__3509__i + 0]; ++G__3509__i;}
  args = new cljs.core.IndexedSeq(G__3509__a,0,null);
} 
return G__3508__delegate.call(this,args);};
G__3508.cljs$lang$maxFixedArity = 0;
G__3508.cljs$lang$applyTo = (function (arglist__3510){
var args = cljs.core.seq(arglist__3510);
return G__3508__delegate(args);
});
G__3508.cljs$core$IFn$_invoke$arity$variadic = G__3508__delegate;
return G__3508;
})()
);

(o.error = (function() { 
var G__3511__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__3511 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3512__i = 0, G__3512__a = new Array(arguments.length -  0);
while (G__3512__i < G__3512__a.length) {G__3512__a[G__3512__i] = arguments[G__3512__i + 0]; ++G__3512__i;}
  args = new cljs.core.IndexedSeq(G__3512__a,0,null);
} 
return G__3511__delegate.call(this,args);};
G__3511.cljs$lang$maxFixedArity = 0;
G__3511.cljs$lang$applyTo = (function (arglist__3513){
var args = cljs.core.seq(arglist__3513);
return G__3511__delegate(args);
});
G__3511.cljs$core$IFn$_invoke$arity$variadic = G__3511__delegate;
return G__3511;
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
