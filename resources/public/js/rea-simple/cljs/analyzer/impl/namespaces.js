// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('cljs.analyzer.impl.namespaces');
goog.require('cljs.core');
/**
 * Given a libspec return a map of :as-alias alias, if was present. Return the
 * libspec with :as-alias elided. If the libspec was *only* :as-alias do not
 * return it.
 */
cljs.analyzer.impl.namespaces.check_and_remove_as_alias = (function cljs$analyzer$impl$namespaces$check_and_remove_as_alias(libspec){
if((((libspec instanceof cljs.core.Symbol)) || ((libspec instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec], null);
} else {
var vec__4421 = libspec;
var seq__4422 = cljs.core.seq.call(null,vec__4421);
var first__4423 = cljs.core.first.call(null,seq__4422);
var seq__4422__$1 = cljs.core.next.call(null,seq__4422);
var lib = first__4423;
var spec = seq__4422__$1;
var libspec__$1 = vec__4421;
var vec__4424 = cljs.core.split_with.call(null,cljs.core.complement.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.call(null,vec__4424,(0),null);
var vec__4427 = cljs.core.nth.call(null,vec__4424,(1),null);
var seq__4428 = cljs.core.seq.call(null,vec__4427);
var first__4429 = cljs.core.first.call(null,seq__4428);
var seq__4428__$1 = cljs.core.next.call(null,seq__4428);
var _ = first__4429;
var first__4429__$1 = cljs.core.first.call(null,seq__4428__$1);
var seq__4428__$2 = cljs.core.next.call(null,seq__4428__$1);
var alias = first__4429__$1;
var post_spec = seq__4428__$2;
var post = vec__4427;
if(cljs.core.seq.call(null,post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.call(null,pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__4430 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count.call(null,libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.call(null,G__4430,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__4430;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__4431 = cljs.core.seq.call(null,new_as_aliases);
var chunk__4432 = null;
var count__4433 = (0);
var i__4434 = (0);
while(true){
if((i__4434 < count__4433)){
var vec__4441 = cljs.core._nth.call(null,chunk__4432,i__4434);
var alias = cljs.core.nth.call(null,vec__4441,(0),null);
var _ = cljs.core.nth.call(null,vec__4441,(1),null);
if((!(cljs.core.contains_QMARK_.call(null,as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__4447 = seq__4431;
var G__4448 = chunk__4432;
var G__4449 = count__4433;
var G__4450 = (i__4434 + (1));
seq__4431 = G__4447;
chunk__4432 = G__4448;
count__4433 = G__4449;
i__4434 = G__4450;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__4431);
if(temp__5804__auto__){
var seq__4431__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4431__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__4431__$1);
var G__4451 = cljs.core.chunk_rest.call(null,seq__4431__$1);
var G__4452 = c__5568__auto__;
var G__4453 = cljs.core.count.call(null,c__5568__auto__);
var G__4454 = (0);
seq__4431 = G__4451;
chunk__4432 = G__4452;
count__4433 = G__4453;
i__4434 = G__4454;
continue;
} else {
var vec__4444 = cljs.core.first.call(null,seq__4431__$1);
var alias = cljs.core.nth.call(null,vec__4444,(0),null);
var _ = cljs.core.nth.call(null,vec__4444,(1),null);
if((!(cljs.core.contains_QMARK_.call(null,as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__4455 = cljs.core.next.call(null,seq__4431__$1);
var G__4456 = null;
var G__4457 = (0);
var G__4458 = (0);
seq__4431 = G__4455;
chunk__4432 = G__4456;
count__4433 = G__4457;
i__4434 = G__4458;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given libspecs, elide all :as-alias. Return a map of :libspecs (filtered)
 * and :as-aliases.
 */
cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_libspecs(var_args){
var G__4460 = arguments.length;
switch (G__4460) {
case 1:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1 = (function (libspecs){
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.call(null,libspecs,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2 = (function (libspecs,as_aliases){
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),as_aliases,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.call(null,(function (ret__$1,libspec){
var map__4461 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias.call(null,libspec);
var map__4461__$1 = cljs.core.__destructure_map.call(null,map__4461);
var as_alias = cljs.core.get.call(null,map__4461__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.call(null,map__4461__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates.call(null,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__4462 = ret__$1;
var G__4462__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.call(null,G__4462,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__4462);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.call(null,G__4462__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__4462__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.call(null,(function (p__4464,p__4465){
var map__4466 = p__4464;
var map__4466__$1 = cljs.core.__destructure_map.call(null,map__4466);
var ret__$1 = map__4466__$1;
var as_aliases = cljs.core.get.call(null,map__4466__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__4467 = p__4465;
var seq__4468 = cljs.core.seq.call(null,vec__4467);
var first__4469 = cljs.core.first.call(null,seq__4468);
var seq__4468__$1 = cljs.core.next.call(null,seq__4468);
var spec_key = first__4469;
var libspecs = seq__4468__$1;
if((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__4470 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.call(null,libspecs,as_aliases);
var map__4470__$1 = cljs.core.__destructure_map.call(null,map__4470);
var as_aliases__$1 = cljs.core.get.call(null,map__4470__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.call(null,map__4470__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__4471 = ret__$1;
var G__4471__$1 = (((!(cljs.core.empty_QMARK_.call(null,as_aliases__$1))))?cljs.core.update.call(null,G__4471,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__4471);
if((!(cljs.core.empty_QMARK_.call(null,libspecs__$1)))){
return cljs.core.update.call(null,G__4471__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.call(null,spec_key,libspecs__$1));
} else {
return G__4471__$1;
}
} else {
return cljs.core.update.call(null,ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.call(null,spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=namespaces.js.map
