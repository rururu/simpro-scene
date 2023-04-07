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
var vec__26019 = libspec;
var seq__26020 = cljs.core.seq.call(null,vec__26019);
var first__26021 = cljs.core.first.call(null,seq__26020);
var seq__26020__$1 = cljs.core.next.call(null,seq__26020);
var lib = first__26021;
var spec = seq__26020__$1;
var libspec__$1 = vec__26019;
var vec__26022 = cljs.core.split_with.call(null,cljs.core.complement.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.call(null,vec__26022,(0),null);
var vec__26025 = cljs.core.nth.call(null,vec__26022,(1),null);
var seq__26026 = cljs.core.seq.call(null,vec__26025);
var first__26027 = cljs.core.first.call(null,seq__26026);
var seq__26026__$1 = cljs.core.next.call(null,seq__26026);
var _ = first__26027;
var first__26027__$1 = cljs.core.first.call(null,seq__26026__$1);
var seq__26026__$2 = cljs.core.next.call(null,seq__26026__$1);
var alias = first__26027__$1;
var post_spec = seq__26026__$2;
var post = vec__26025;
if(cljs.core.seq.call(null,post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.call(null,pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__26028 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count.call(null,libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.call(null,G__26028,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__26028;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__26029 = cljs.core.seq.call(null,new_as_aliases);
var chunk__26030 = null;
var count__26031 = (0);
var i__26032 = (0);
while(true){
if((i__26032 < count__26031)){
var vec__26039 = cljs.core._nth.call(null,chunk__26030,i__26032);
var alias = cljs.core.nth.call(null,vec__26039,(0),null);
var _ = cljs.core.nth.call(null,vec__26039,(1),null);
if((!(cljs.core.contains_QMARK_.call(null,as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__26045 = seq__26029;
var G__26046 = chunk__26030;
var G__26047 = count__26031;
var G__26048 = (i__26032 + (1));
seq__26029 = G__26045;
chunk__26030 = G__26046;
count__26031 = G__26047;
i__26032 = G__26048;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__26029);
if(temp__5804__auto__){
var seq__26029__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26029__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__26029__$1);
var G__26049 = cljs.core.chunk_rest.call(null,seq__26029__$1);
var G__26050 = c__5568__auto__;
var G__26051 = cljs.core.count.call(null,c__5568__auto__);
var G__26052 = (0);
seq__26029 = G__26049;
chunk__26030 = G__26050;
count__26031 = G__26051;
i__26032 = G__26052;
continue;
} else {
var vec__26042 = cljs.core.first.call(null,seq__26029__$1);
var alias = cljs.core.nth.call(null,vec__26042,(0),null);
var _ = cljs.core.nth.call(null,vec__26042,(1),null);
if((!(cljs.core.contains_QMARK_.call(null,as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__26053 = cljs.core.next.call(null,seq__26029__$1);
var G__26054 = null;
var G__26055 = (0);
var G__26056 = (0);
seq__26029 = G__26053;
chunk__26030 = G__26054;
count__26031 = G__26055;
i__26032 = G__26056;
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
var G__26058 = arguments.length;
switch (G__26058) {
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
var map__26059 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias.call(null,libspec);
var map__26059__$1 = cljs.core.__destructure_map.call(null,map__26059);
var as_alias = cljs.core.get.call(null,map__26059__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.call(null,map__26059__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates.call(null,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__26060 = ret__$1;
var G__26060__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.call(null,G__26060,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__26060);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.call(null,G__26060__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__26060__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.call(null,(function (p__26062,p__26063){
var map__26064 = p__26062;
var map__26064__$1 = cljs.core.__destructure_map.call(null,map__26064);
var ret__$1 = map__26064__$1;
var as_aliases = cljs.core.get.call(null,map__26064__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__26065 = p__26063;
var seq__26066 = cljs.core.seq.call(null,vec__26065);
var first__26067 = cljs.core.first.call(null,seq__26066);
var seq__26066__$1 = cljs.core.next.call(null,seq__26066);
var spec_key = first__26067;
var libspecs = seq__26066__$1;
if((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__26068 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.call(null,libspecs,as_aliases);
var map__26068__$1 = cljs.core.__destructure_map.call(null,map__26068);
var as_aliases__$1 = cljs.core.get.call(null,map__26068__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.call(null,map__26068__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__26069 = ret__$1;
var G__26069__$1 = (((!(cljs.core.empty_QMARK_.call(null,as_aliases__$1))))?cljs.core.update.call(null,G__26069,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__26069);
if((!(cljs.core.empty_QMARK_.call(null,libspecs__$1)))){
return cljs.core.update.call(null,G__26069__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.call(null,spec_key,libspecs__$1));
} else {
return G__26069__$1;
}
} else {
return cljs.core.update.call(null,ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.call(null,spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=namespaces.js.map
