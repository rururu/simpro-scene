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
var vec__32218 = libspec;
var seq__32219 = cljs.core.seq.call(null,vec__32218);
var first__32220 = cljs.core.first.call(null,seq__32219);
var seq__32219__$1 = cljs.core.next.call(null,seq__32219);
var lib = first__32220;
var spec = seq__32219__$1;
var libspec__$1 = vec__32218;
var vec__32221 = cljs.core.split_with.call(null,cljs.core.complement.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.call(null,vec__32221,(0),null);
var vec__32224 = cljs.core.nth.call(null,vec__32221,(1),null);
var seq__32225 = cljs.core.seq.call(null,vec__32224);
var first__32226 = cljs.core.first.call(null,seq__32225);
var seq__32225__$1 = cljs.core.next.call(null,seq__32225);
var _ = first__32226;
var first__32226__$1 = cljs.core.first.call(null,seq__32225__$1);
var seq__32225__$2 = cljs.core.next.call(null,seq__32225__$1);
var alias = first__32226__$1;
var post_spec = seq__32225__$2;
var post = vec__32224;
if(cljs.core.seq.call(null,post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.call(null,pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__32227 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count.call(null,libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.call(null,G__32227,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__32227;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__32228 = cljs.core.seq.call(null,new_as_aliases);
var chunk__32229 = null;
var count__32230 = (0);
var i__32231 = (0);
while(true){
if((i__32231 < count__32230)){
var vec__32238 = cljs.core._nth.call(null,chunk__32229,i__32231);
var alias = cljs.core.nth.call(null,vec__32238,(0),null);
var _ = cljs.core.nth.call(null,vec__32238,(1),null);
if((!(cljs.core.contains_QMARK_.call(null,as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__32244 = seq__32228;
var G__32245 = chunk__32229;
var G__32246 = count__32230;
var G__32247 = (i__32231 + (1));
seq__32228 = G__32244;
chunk__32229 = G__32245;
count__32230 = G__32246;
i__32231 = G__32247;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__32228);
if(temp__5804__auto__){
var seq__32228__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32228__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__32228__$1);
var G__32248 = cljs.core.chunk_rest.call(null,seq__32228__$1);
var G__32249 = c__5568__auto__;
var G__32250 = cljs.core.count.call(null,c__5568__auto__);
var G__32251 = (0);
seq__32228 = G__32248;
chunk__32229 = G__32249;
count__32230 = G__32250;
i__32231 = G__32251;
continue;
} else {
var vec__32241 = cljs.core.first.call(null,seq__32228__$1);
var alias = cljs.core.nth.call(null,vec__32241,(0),null);
var _ = cljs.core.nth.call(null,vec__32241,(1),null);
if((!(cljs.core.contains_QMARK_.call(null,as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__32252 = cljs.core.next.call(null,seq__32228__$1);
var G__32253 = null;
var G__32254 = (0);
var G__32255 = (0);
seq__32228 = G__32252;
chunk__32229 = G__32253;
count__32230 = G__32254;
i__32231 = G__32255;
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
var G__32257 = arguments.length;
switch (G__32257) {
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
var map__32258 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias.call(null,libspec);
var map__32258__$1 = cljs.core.__destructure_map.call(null,map__32258);
var as_alias = cljs.core.get.call(null,map__32258__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.call(null,map__32258__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates.call(null,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__32259 = ret__$1;
var G__32259__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.call(null,G__32259,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__32259);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.call(null,G__32259__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__32259__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.call(null,(function (p__32261,p__32262){
var map__32263 = p__32261;
var map__32263__$1 = cljs.core.__destructure_map.call(null,map__32263);
var ret__$1 = map__32263__$1;
var as_aliases = cljs.core.get.call(null,map__32263__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__32264 = p__32262;
var seq__32265 = cljs.core.seq.call(null,vec__32264);
var first__32266 = cljs.core.first.call(null,seq__32265);
var seq__32265__$1 = cljs.core.next.call(null,seq__32265);
var spec_key = first__32266;
var libspecs = seq__32265__$1;
if((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__32267 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.call(null,libspecs,as_aliases);
var map__32267__$1 = cljs.core.__destructure_map.call(null,map__32267);
var as_aliases__$1 = cljs.core.get.call(null,map__32267__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.call(null,map__32267__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__32268 = ret__$1;
var G__32268__$1 = (((!(cljs.core.empty_QMARK_.call(null,as_aliases__$1))))?cljs.core.update.call(null,G__32268,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__32268);
if((!(cljs.core.empty_QMARK_.call(null,libspecs__$1)))){
return cljs.core.update.call(null,G__32268__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.call(null,spec_key,libspecs__$1));
} else {
return G__32268__$1;
}
} else {
return cljs.core.update.call(null,ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.call(null,spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=namespaces.js.map
