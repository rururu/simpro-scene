// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.js');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('cljs.env');
goog.require('cljs.spec.alpha');
goog.require('cljs.analyzer');
goog.require('cljs.compiler');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.tagged_literals');
goog.require('goog.crypt.base64');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
goog.require("cljs.core$macros");
cljs.js.debug_prn = (function cljs$js$debug_prn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___11643 = arguments.length;
var i__4642__auto___11644 = (0);
while(true){
if((i__4642__auto___11644 < len__4641__auto___11643)){
args__4647__auto__.push((arguments[i__4642__auto___11644]));

var G__11645 = (i__4642__auto___11644 + (1));
i__4642__auto___11644 = G__11645;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var _STAR_print_fn_STAR__orig_val__11641 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__11642 = cljs.core._STAR_print_err_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11642;

try{return cljs.core.apply.call(null,cljs.core.println,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11641;
}});

cljs.js.debug_prn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.js.debug_prn.cljs$lang$applyTo = (function (seq11640){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11640));
});

/**
 * Given a namespace as a symbol return the relative path sans extension
 */
cljs.js.ns__GT_relpath = (function cljs$js$ns__GT_relpath(ns_sym){
return clojure.string.replace.call(null,cljs.analyzer.munge_path.call(null,ns_sym),".","/");
});
cljs.js.file__GT_ns = (function cljs$js$file__GT_ns(file){
var lib_name = cljs.core.subs.call(null,clojure.string.replace.call(null,file,"/","."),(0),(cljs.core.count.call(null,file) - (5)));
return cljs.core.symbol.call(null,cljs.core.demunge.call(null,lib_name));
});
cljs.js.drop_macros_suffix = (function cljs$js$drop_macros_suffix(ns_name){
if(cljs.core.truth_(ns_name)){
if(clojure.string.ends_with_QMARK_.call(null,ns_name,"$macros")){
return cljs.core.subs.call(null,ns_name,(0),(cljs.core.count.call(null,ns_name) - (7)));
} else {
return ns_name;
}
} else {
return null;
}
});
cljs.js.elide_macros_suffix = (function cljs$js$elide_macros_suffix(sym){
return cljs.core.symbol.call(null,cljs.js.drop_macros_suffix.call(null,cljs.core.namespace.call(null,sym)),cljs.core.name.call(null,sym));
});
cljs.js.resolve_symbol = (function cljs$js$resolve_symbol(sym){
if(clojure.string.starts_with_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym),".")){
return sym;
} else {
return cljs.js.elide_macros_suffix.call(null,cljs.analyzer.resolve_symbol.call(null,sym));
}
});
cljs.js.read = (function cljs$js$read(eof,rdr){
var _STAR_ns_STAR__orig_val__11646 = cljs.core._STAR_ns_STAR_;
var _STAR_ns_STAR__temp_val__11647 = cljs.core.symbol.call(null,cljs.js.drop_macros_suffix.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_)));
cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__11647;

try{return cljs.tools.reader.read.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eof","eof",-489063237),eof,new cljs.core.Keyword(null,"read-cond","read-cond",1056899244),new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs","cljs",1492417629),null], null), null)], null),rdr);
}finally {cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__11646;
}});
cljs.js.atom_QMARK_ = (function cljs$js$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
cljs.js.valid_name_QMARK_ = (function cljs$js$valid_name_QMARK_(x){
return (((x == null)) || ((x instanceof cljs.core.Symbol)) || (typeof x === 'string'));
});
cljs.js.valid_opts_QMARK_ = (function cljs$js$valid_opts_QMARK_(x){
return (((x == null)) || (cljs.core.map_QMARK_.call(null,x)));
});
if((typeof cljs !== 'undefined') && (typeof cljs.js !== 'undefined') && (typeof cljs.js._STAR_load_fn_STAR_ !== 'undefined')){
} else {
/**
 * Each runtime environment provides a different way to load a library.
 *   Whatever function *load-fn* is bound to will be passed two arguments - a
 *   map and a callback function: The map will have the following keys:
 * 
 *   :name   - the name of the library (a symbol)
 *   :macros - modifier signaling a macros namespace load
 *   :path   - munged relative library path (a string)
 * 
 *   It is up to the implementor to correctly resolve the corresponding .cljs,
 *   .cljc, or .js resource (the order must be respected). If :macros is true
 *   resolution should only consider .clj or .cljc resources (the order must be
 *   respected). Upon resolution the callback should be invoked with a map
 *   containing the following keys:
 * 
 *   :lang       - the language, :clj or :js
 *   :source     - the source of the library (a string)
 *   :file       - optional, the file path, it will be added to AST's :file keyword
 *              (but not in :meta)
 *   :cache      - optional, if a :clj namespace has been precompiled to :js, can
 *              give an analysis cache for faster loads.
 *   :source-map - optional, if a :clj namespace has been precompiled to :js, can
 *              give a V3 source map JSON
 * 
 *   If the resource could not be resolved, the callback should be invoked with
 *   nil.
 */
cljs.js._STAR_load_fn_STAR_ = (function cljs$js$_STAR_load_fn_STAR_(m,cb){
throw (new Error("No *load-fn* set"));
});
}
if((typeof cljs !== 'undefined') && (typeof cljs.js !== 'undefined') && (typeof cljs.js._STAR_eval_fn_STAR_ !== 'undefined')){
} else {
/**
 * Each runtime environment provides various ways to eval JavaScript
 *   source. Whatever function *eval-fn* is bound to will be passed a map
 *   containing the following keys:
 * 
 *   :source - the source of the library (string)
 *   :name   - used to unique identify the script (symbol)
 *   :cache  - if the source was originally ClojureScript, will be given the
 *          analysis cache.
 * 
 *   The result of evaluation should be the return value.
 */
cljs.js._STAR_eval_fn_STAR_ = (function cljs$js$_STAR_eval_fn_STAR_(m){
throw (new Error("No *eval-fn* set"));
});
}
/**
 * A default JavaScript evaluation function.
 */
cljs.js.js_eval = (function cljs$js$js_eval(p__11648){
var map__11649 = p__11648;
var map__11649__$1 = (((((!((map__11649 == null))))?(((((map__11649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11649):map__11649);
var resource = map__11649__$1;
var source = cljs.core.get.call(null,map__11649__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return eval(source);
});
cljs.js.wrap_error = (function cljs$js$wrap_error(ex){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),ex], null);
});
/**
 * Construct an empty compiler state. Required to invoke analyze, compile,
 * eval and eval-str.
 */
cljs.js.empty_state = (function cljs$js$empty_state(var_args){
var G__11652 = arguments.length;
switch (G__11652) {
case 0:
return cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.js.empty_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0 = (function (){
var G__11653 = cljs.env.default_compiler_env.call(null);
cljs.core.swap_BANG_.call(null,G__11653,((function (G__11653){
return (function (state){
});})(G__11653))
);

return G__11653;
});

cljs.js.empty_state.cljs$core$IFn$_invoke$arity$1 = (function (init){
var G__11654 = cljs.js.empty_state.call(null);
cljs.core.swap_BANG_.call(null,G__11654,init);

return G__11654;
});

cljs.js.empty_state.cljs$lang$maxFixedArity = 1;

cljs.js.load_analysis_cache_BANG_ = (function cljs$js$load_analysis_cache_BANG_(state,ns,cache){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns], null),cache);
});
cljs.js.load_source_map_BANG_ = (function cljs$js$load_source_map_BANG_(state,ns,sm_json){
var sm = cljs.source_map.decode.call(null,JSON.parse(sm_json));
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-maps","source-maps",-552851697),ns], null),sm);
});
cljs.js.sm_data = (function cljs$js$sm_data(){
return cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),cljs.core.sorted_map.call(null),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0),new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(0)], null));
});
cljs.js.prefix = (function cljs$js$prefix(s,pre){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
});
cljs.js.append_source_map = (function cljs$js$append_source_map(state,name,source,sb,sm_data,p__11656){
var map__11657 = p__11656;
var map__11657__$1 = (((((!((map__11657 == null))))?(((((map__11657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11657):map__11657);
var opts = map__11657__$1;
var output_dir = cljs.core.get.call(null,map__11657__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var asset_path = cljs.core.get.call(null,map__11657__$1,new cljs.core.Keyword(null,"asset-path","asset-path",1500889617));
var source_map_timestamp = cljs.core.get.call(null,map__11657__$1,new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633));
var t = (new Date()).valueOf();
var mn = (cljs.core.truth_(name)?cljs.core.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)):["cljs-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''));
var smn = (function (){var G__11659 = mn;
if(cljs.core.truth_(name)){
return clojure.string.replace.call(null,G__11659,".","/");
} else {
return G__11659;
}
})();
var ts = (new Date()).valueOf();
var out = (function (){var or__4047__auto__ = output_dir;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return asset_path;
}
})();
var src = (function (){var G__11660 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(smn),".cljs"].join('');
var G__11660__$1 = ((source_map_timestamp === true)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11660),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join(''):G__11660);
if(cljs.core.truth_(out)){
return cljs.js.prefix.call(null,G__11660__$1,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(out),"/"].join(''));
} else {
return G__11660__$1;
}
})();
var file = (function (){var G__11661 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(smn),".js"].join('');
var G__11661__$1 = ((source_map_timestamp === true)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11661),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join(''):G__11661);
if(cljs.core.truth_(out)){
return cljs.js.prefix.call(null,G__11661__$1,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(out),"/"].join(''));
} else {
return G__11661__$1;
}
})();
var json = cljs.source_map.encode.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([src,new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(sm_data)]),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lines","lines",-700165781),(new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(sm_data) + (3)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,json);
} else {
}

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-maps","source-maps",-552851697),cljs.core.symbol.call(null,mn)], null),cljs.source_map.invert_reverse_map.call(null,new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(sm_data)));

return sb.append(["\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"\n//# sourceMappingURL=data:application/json;base64,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.crypt.base64.encodeString(clojure.string.replace.call(null,encodeURIComponent(json),/%([0-9A-F]{2})/,((function (t,mn,smn,ts,out,src,file,json,map__11657,map__11657__$1,opts,output_dir,asset_path,source_map_timestamp){
return (function (p__11662){
var vec__11663 = p__11662;
var _ = cljs.core.nth.call(null,vec__11663,(0),null);
var match = cljs.core.nth.call(null,vec__11663,(1),null);
return String.fromCharCode(["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(match)].join(''));
});})(t,mn,smn,ts,out,src,file,json,map__11657,map__11657__$1,opts,output_dir,asset_path,source_map_timestamp))
)))].join(''));
});
cljs.js.alias_map = (function cljs$js$alias_map(compiler,cljs_ns){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,(function (p__11666){
var vec__11667 = p__11666;
var k = cljs.core.nth.call(null,vec__11667,(0),null);
var v = cljs.core.nth.call(null,vec__11667,(1),null);
return cljs.core.symbol_identical_QMARK_.call(null,k,v);
}),cljs.core.merge.call(null,cljs.core.get_in.call(null,compiler,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs_ns,new cljs.core.Keyword(null,"requires","requires",-1201390927)], null)),cljs.core.get_in.call(null,compiler,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs_ns,new cljs.core.Keyword(null,"require-macros","require-macros",707947416)], null)))));
});
cljs.js._STAR_loaded_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
/**
 * Like cljs.core/run!, but for an async procedure, and with the
 *   ability to break prior to processing the entire collection.
 * 
 *   Chains successive calls to the supplied procedure for items in
 *   the collection. The procedure should accept an item from the
 *   collection and a callback of one argument. If the break? predicate,
 *   when applied to the procedure callback value, yields a truthy
 *   result, terminates early calling the supplied cb with the callback
 *   value. Otherwise, when complete, calls cb with nil.
 */
cljs.js.run_async_BANG_ = (function cljs$js$run_async_BANG_(proc,coll,break_QMARK_,cb){
if(cljs.core.seq.call(null,coll)){
return proc.call(null,cljs.core.first.call(null,coll),(function (res){
if(cljs.core.truth_(break_QMARK_.call(null,res))){
return cb.call(null,res);
} else {
return cljs.js.run_async_BANG_.call(null,proc,cljs.core.rest.call(null,coll),break_QMARK_,cb);
}
}));
} else {
return cb.call(null,null);
}
});
cljs.js.process_deps = (function cljs$js$process_deps(bound_vars,names,opts,cb){
return cljs.js.run_async_BANG_.call(null,(function (name,cb__$1){
return cljs.js.require.call(null,bound_vars,name,null,opts,cb__$1);
}),names,new cljs.core.Keyword(null,"error","error",-978969032),cb);
});
cljs.js.process_macros_deps = (function cljs$js$process_macros_deps(bound_vars,cache,opts,cb){
return cljs.js.process_deps.call(null,bound_vars,cljs.core.distinct.call(null,cljs.core.vals.call(null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416).cljs$core$IFn$_invoke$arity$1(cache))),cljs.core.dissoc.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933),true),new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518)),cb);
});
cljs.js.process_libs_deps = (function cljs$js$process_libs_deps(bound_vars,cache,opts,cb){
return cljs.js.process_deps.call(null,bound_vars,cljs.core.distinct.call(null,cljs.core.concat.call(null,cljs.core.vals.call(null,new cljs.core.Keyword(null,"requires","requires",-1201390927).cljs$core$IFn$_invoke$arity$1(cache)),cljs.core.vals.call(null,new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(cache)))),cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933)),cb);
});
cljs.js.pre_file_side_effects = (function cljs$js$pre_file_side_effects(st,name,file,opts){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Pre-file side-effects",file);
} else {
}

if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,st),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name,new cljs.core.Keyword(null,"defs","defs",1398449717)], null));
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"cljs.core$macros","cljs.core$macros",-2057787548,null),"null",new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),"null"], null), null).call(null,name));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.swap_BANG_.call(null,st,cljs.core.update,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs.core.dissoc,name);
} else {
return null;
}
});
cljs.js.post_file_side_effects = (function cljs$js$post_file_side_effects(file,opts){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Post-file side-effects",file);
} else {
}

return cljs.core._STAR_unchecked_arrays_STAR_ = false;;
});
cljs.js.require = (function cljs$js$require(var_args){
var G__11671 = arguments.length;
switch (G__11671) {
case 2:
return cljs.js.require.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.js.require.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.require.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.require.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.require.cljs$core$IFn$_invoke$arity$2 = (function (name,cb){
return cljs.js.require.call(null,name,null,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$3 = (function (name,opts,cb){
return cljs.js.require.call(null,null,name,opts,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$4 = (function (bound_vars,name,opts,cb){
return cljs.js.require.call(null,bound_vars,name,null,opts,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,name,reload,opts,cb){
var bound_vars__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env.default_compiler_env.call(null),new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469),cljs.tagged_literals._STAR_cljs_data_readers_STAR_,new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006),new cljs.core.Keyword(null,"load-macros","load-macros",459797395).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427),new cljs.core.Keyword(null,"analyze-deps","analyze-deps",1000677285).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106),(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128),(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),bound_vars);
var aname = (function (){var G__11672 = name;
if(cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.analyzer.macro_ns_name.call(null,G__11672);
} else {
return G__11672;
}
})();
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"reload","reload",863702807),reload)){
cljs.core.swap_BANG_.call(null,cljs.js._STAR_loaded_STAR_,cljs.core.disj,aname);
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"reload-all","reload-all",761570200),reload)){
cljs.core.reset_BANG_.call(null,cljs.js._STAR_loaded_STAR_,cljs.core.PersistentHashSet.EMPTY);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,["Loading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))?" macros":null))," namespace"].join(''));
} else {
}

if((!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,cljs.js._STAR_loaded_STAR_),aname)))){
var env = new cljs.core.Keyword(null,"*env*","*env*",1860548436).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
try{return new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106).cljs$core$IFn$_invoke$arity$1(bound_vars__$1).call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"macros","macros",811339431),new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"path","path",-188191168),cljs.js.ns__GT_relpath.call(null,name)], null),((function (env,bound_vars__$1,aname){
return (function (resource){
if(((cljs.core.map_QMARK_.call(null,resource)) || ((resource == null)))){
} else {
throw (new Error(["Assert failed: ","*load-fn* may only return a map or nil","\n","(or (map? resource) (nil? resource))"].join('')));
}

if(cljs.core.truth_(resource)){
var map__11674 = resource;
var map__11674__$1 = (((((!((map__11674 == null))))?(((((map__11674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11674):map__11674);
var lang = cljs.core.get.call(null,map__11674__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var source = cljs.core.get.call(null,map__11674__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var cache = cljs.core.get.call(null,map__11674__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var source_map = cljs.core.get.call(null,map__11674__$1,new cljs.core.Keyword(null,"source-map","source-map",1706252311));
var file = cljs.core.get.call(null,map__11674__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var pred__11676 = cljs.core.keyword_identical_QMARK_;
var expr__11677 = lang;
if(cljs.core.truth_(pred__11676.call(null,new cljs.core.Keyword(null,"clj","clj",-660495428),expr__11677))){
cljs.js.pre_file_side_effects.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),aname,file,opts);

return cljs.js.eval_str_STAR_.call(null,bound_vars__$1,source,name,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cljs-file","cljs-file",-1499001049),file),((function (pred__11676,expr__11677,map__11674,map__11674__$1,lang,source,cache,source_map,file,env,bound_vars__$1,aname){
return (function (res){
cljs.js.post_file_side_effects.call(null,file,opts);

if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cb.call(null,res);
} else {
cljs.core.swap_BANG_.call(null,cljs.js._STAR_loaded_STAR_,cljs.core.conj,aname);

return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),true], null));
}
});})(pred__11676,expr__11677,map__11674,map__11674__$1,lang,source,cache,source_map,file,env,bound_vars__$1,aname))
);
} else {
if(cljs.core.truth_(pred__11676.call(null,new cljs.core.Keyword(null,"js","js",1768080579),expr__11677))){
return cljs.js.process_macros_deps.call(null,bound_vars__$1,cache,opts,((function (pred__11676,expr__11677,map__11674,map__11674__$1,lang,source,cache,source_map,file,env,bound_vars__$1,aname){
return (function (res){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cb.call(null,res);
} else {
return cljs.js.process_libs_deps.call(null,bound_vars__$1,cache,opts,((function (pred__11676,expr__11677,map__11674,map__11674__$1,lang,source,cache,source_map,file,env,bound_vars__$1,aname){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb.call(null,res__$1);
} else {
var res__$2 = (function (){try{new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128).cljs$core$IFn$_invoke$arity$1(bound_vars__$1).call(null,resource);

if(cljs.core.truth_(cache)){
cljs.js.load_analysis_cache_BANG_.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),aname,cache);

cljs.analyzer.register_specs.call(null,cache);
} else {
}

if(cljs.core.truth_(source_map)){
return cljs.js.load_source_map_BANG_.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),aname,source_map);
} else {
return null;
}
}catch (e11679){var cause = e11679;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,env,["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return cb.call(null,res__$2);
} else {
cljs.core.swap_BANG_.call(null,cljs.js._STAR_loaded_STAR_,cljs.core.conj,aname);

return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),true], null));
}
}
});})(pred__11676,expr__11677,map__11674,map__11674__$1,lang,source,cache,source_map,file,env,bound_vars__$1,aname))
);
}
});})(pred__11676,expr__11677,map__11674,map__11674__$1,lang,source,cache,source_map,file,env,bound_vars__$1,aname))
);
} else {
return cb.call(null,cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,env,["Invalid :lang specified ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang),", only :clj or :js allowed"].join(''))));
}
}
} else {
return cb.call(null,cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,env,cljs.analyzer.error_message.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))?new cljs.core.Keyword(null,"undeclared-macros-ns","undeclared-macros-ns",-438029430):new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605),name,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493),cljs.core.name.call(null,name)], null)))));
}
});})(env,bound_vars__$1,aname))
);
}catch (e11673){var cause = e11673;
return cb.call(null,cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,env,["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause)));
}} else {
return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),true], null));
}
});

cljs.js.require.cljs$lang$maxFixedArity = 5;

cljs.js.patch_alias_map = (function cljs$js$patch_alias_map(compiler,in$,from,to){
var patch = (function (k,add_if_present_QMARK_){
return cljs.core.swap_BANG_.call(null,compiler,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),in$,k], null),(function (m){
var replaced = clojure.walk.postwalk_replace.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([from,to]),m);
if(cljs.core.truth_((function (){var and__4036__auto__ = add_if_present_QMARK_;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([to]),cljs.core.vals.call(null,replaced));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.assoc.call(null,replaced,from,to);
} else {
return replaced;
}
}));
});
var patch_renames = ((function (patch){
return (function (k){
return cljs.core.swap_BANG_.call(null,compiler,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),in$,k], null),((function (patch){
return (function (m){
if(cljs.core.truth_(m)){
return cljs.core.reduce.call(null,((function (patch){
return (function (acc,p__11681){
var vec__11682 = p__11681;
var renamed = cljs.core.nth.call(null,vec__11682,(0),null);
var qualified_sym = cljs.core.nth.call(null,vec__11682,(1),null);
var entry = vec__11682;
if(cljs.core._EQ_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(from),cljs.core.namespace.call(null,qualified_sym))){
return cljs.core.assoc.call(null,acc,renamed,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(to),cljs.core.name.call(null,qualified_sym)));
} else {
return cljs.core.merge.call(null,acc,entry);
}
});})(patch))
,cljs.core.PersistentArrayMap.EMPTY,m);
} else {
return null;
}
});})(patch))
);
});})(patch))
;
patch.call(null,new cljs.core.Keyword(null,"requires","requires",-1201390927),true);

patch.call(null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),true);

patch.call(null,new cljs.core.Keyword(null,"uses","uses",232664692),false);

patch.call(null,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),false);

patch_renames.call(null,new cljs.core.Keyword(null,"renames","renames",343278368));

return patch_renames.call(null,new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512));
});
cljs.js.self_require_QMARK_ = (function cljs$js$self_require_QMARK_(deps,opts){
var and__4036__auto__ = new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts) === true;
if(and__4036__auto__){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.analyzer._STAR_cljs_ns_STAR_]),deps);
} else {
return and__4036__auto__;
}
});
cljs.js.load_deps = (function cljs$js$load_deps(var_args){
var G__11687 = arguments.length;
switch (G__11687) {
case 5:
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 7:
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.load_deps.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,lib,deps,cb){
return cljs.js.load_deps.call(null,bound_vars,ana_env,lib,deps,null,null,cb);
});

cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7 = (function (bound_vars,ana_env,lib,deps,reload,opts,cb){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Loading dependencies for",lib);
} else {
}

var _STAR_cljs_dep_set_STAR__orig_val__11688 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
var _STAR_cljs_dep_set_STAR__temp_val__11689 = (function (){var lib__$1 = (cljs.core.truth_(cljs.js.self_require_QMARK_.call(null,deps,opts))?new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null):lib);
return cljs.core.vary_meta.call(null,cljs.core.conj.call(null,new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612).cljs$core$IFn$_invoke$arity$1(bound_vars),lib__$1),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dep-path","dep-path",723826558)], null),cljs.core.conj,lib__$1);
})();
cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__temp_val__11689;

try{var bound_vars__$1 = cljs.core.assoc.call(null,bound_vars,new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_);
if((!(cljs.core.every_QMARK_.call(null,((function (bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__11688,_STAR_cljs_dep_set_STAR__temp_val__11689){
return (function (p1__11685_SHARP_){
return (!(cljs.core.contains_QMARK_.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_,p1__11685_SHARP_)));
});})(bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__11688,_STAR_cljs_dep_set_STAR__temp_val__11689))
,deps)))){
return cb.call(null,cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,ana_env,["Circular dependency detected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," -> ",cljs.core.conj.call(null,new cljs.core.Keyword(null,"dep-path","dep-path",723826558).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_)),cljs.core.some.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_,deps)))))].join(''))));
} else {
if(cljs.core.seq.call(null,deps)){
var dep = cljs.core.first.call(null,deps);
var opts_SINGLEQUOTE_ = cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"context","context",-830191113)),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320)),new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.js.require.call(null,bound_vars__$1,dep,reload,opts_SINGLEQUOTE_,((function (dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__11688,_STAR_cljs_dep_set_STAR__temp_val__11689){
return (function (res){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Loading result:",res);
} else {
}

if(cljs.core.not.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cljs.js.load_deps.call(null,bound_vars__$1,ana_env,lib,cljs.core.next.call(null,deps),null,opts,cb);
} else {
var temp__5733__auto__ = (function (){var cljs_ns = cljs.analyzer.clj_ns__GT_cljs_ns.call(null,dep);
return cljs.core.get.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([dep,null]),cljs_ns,cljs_ns);
})();
if(cljs.core.truth_(temp__5733__auto__)){
var cljs_dep = temp__5733__auto__;
return cljs.js.require.call(null,bound_vars__$1,cljs_dep,opts_SINGLEQUOTE_,((function (cljs_dep,temp__5733__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__11688,_STAR_cljs_dep_set_STAR__temp_val__11689){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb.call(null,res__$1);
} else {
cljs.js.patch_alias_map.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),lib,dep,cljs_dep);

return cljs.js.load_deps.call(null,bound_vars__$1,ana_env,lib,cljs.core.next.call(null,deps),null,opts,((function (cljs_dep,temp__5733__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__11688,_STAR_cljs_dep_set_STAR__temp_val__11689){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return cb.call(null,res__$2);
} else {
return cb.call(null,cljs.core.update.call(null,res__$2,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766),cljs.core.assoc,dep,cljs_dep));
}
});})(cljs_dep,temp__5733__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__11688,_STAR_cljs_dep_set_STAR__temp_val__11689))
);
}
});})(cljs_dep,temp__5733__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__11688,_STAR_cljs_dep_set_STAR__temp_val__11689))
);
} else {
return cb.call(null,res);
}
}
});})(dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__11688,_STAR_cljs_dep_set_STAR__temp_val__11689))
);
} else {
return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null));
}
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__orig_val__11688;
}});

cljs.js.load_deps.cljs$lang$maxFixedArity = 7;

cljs.js.analyze_deps = (function cljs$js$analyze_deps(var_args){
var G__11693 = arguments.length;
switch (G__11693) {
case 5:
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,lib,deps,cb){
return cljs.js.analyze_deps.call(null,bound_vars,ana_env,lib,deps,null,cb);
});

cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6 = (function (bound_vars,ana_env,lib,deps,opts,cb){
var _STAR_cljs_dep_set_STAR__orig_val__11694 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
var _STAR_cljs_dep_set_STAR__temp_val__11695 = cljs.core.vary_meta.call(null,cljs.core.conj.call(null,new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612).cljs$core$IFn$_invoke$arity$1(bound_vars),lib),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dep-path","dep-path",723826558)], null),cljs.core.conj,lib);
cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__temp_val__11695;

try{var compiler = cljs.core.deref.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars));
var bound_vars__$1 = cljs.core.assoc.call(null,bound_vars,new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_);
if((!(cljs.core.every_QMARK_.call(null,((function (compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__11694,_STAR_cljs_dep_set_STAR__temp_val__11695){
return (function (p1__11691_SHARP_){
return (!(cljs.core.contains_QMARK_.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_,p1__11691_SHARP_)));
});})(compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__11694,_STAR_cljs_dep_set_STAR__temp_val__11695))
,deps)))){
return cb.call(null,cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,ana_env,["Circular dependency detected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," -> ",cljs.core.conj.call(null,new cljs.core.Keyword(null,"dep-path","dep-path",723826558).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_)),cljs.core.some.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_,deps)))))].join(''))));
} else {
if(cljs.core.seq.call(null,deps)){
var dep = cljs.core.first.call(null,deps);
try{return new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106).cljs$core$IFn$_invoke$arity$1(bound_vars__$1).call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),dep,new cljs.core.Keyword(null,"path","path",-188191168),cljs.js.ns__GT_relpath.call(null,dep)], null),((function (dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__11694,_STAR_cljs_dep_set_STAR__temp_val__11695){
return (function (resource){
if(((cljs.core.map_QMARK_.call(null,resource)) || ((resource == null)))){
} else {
throw (new Error(["Assert failed: ","*load-fn* may only return a map or nil","\n","(or (map? resource) (nil? resource))"].join('')));
}

if(cljs.core.not.call(null,resource)){
var temp__5733__auto__ = (function (){var cljs_ns = cljs.analyzer.clj_ns__GT_cljs_ns.call(null,dep);
return cljs.core.get.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([dep,null]),cljs_ns,cljs_ns);
})();
if(cljs.core.truth_(temp__5733__auto__)){
var cljs_dep = temp__5733__auto__;
cljs.js.patch_alias_map.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),lib,dep,cljs_dep);

return cljs.js.analyze_deps.call(null,bound_vars__$1,ana_env,lib,cljs.core.cons.call(null,cljs_dep,cljs.core.next.call(null,deps)),opts,((function (cljs_dep,temp__5733__auto__,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__11694,_STAR_cljs_dep_set_STAR__temp_val__11695){
return (function (res){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cb.call(null,res);
} else {
return cb.call(null,cljs.core.update.call(null,res,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766),cljs.core.assoc,dep,cljs_dep));
}
});})(cljs_dep,temp__5733__auto__,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__11694,_STAR_cljs_dep_set_STAR__temp_val__11695))
);
} else {
return cb.call(null,cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,ana_env,cljs.analyzer.error_message.call(null,new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605),dep,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493),cljs.core.name.call(null,dep)], null)))));
}
} else {
var map__11697 = resource;
var map__11697__$1 = (((((!((map__11697 == null))))?(((((map__11697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11697):map__11697);
var name = cljs.core.get.call(null,map__11697__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var lang = cljs.core.get.call(null,map__11697__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var source = cljs.core.get.call(null,map__11697__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var file = cljs.core.get.call(null,map__11697__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var pred__11699 = cljs.core.keyword_identical_QMARK_;
var expr__11700 = lang;
if(cljs.core.truth_(pred__11699.call(null,new cljs.core.Keyword(null,"clj","clj",-660495428),expr__11700))){
cljs.js.pre_file_side_effects.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),name,file,opts);

return cljs.js.analyze_str_STAR_.call(null,bound_vars__$1,source,name,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cljs-file","cljs-file",-1499001049),file),((function (pred__11699,expr__11700,map__11697,map__11697__$1,name,lang,source,file,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__11694,_STAR_cljs_dep_set_STAR__temp_val__11695){
return (function (res){
cljs.js.post_file_side_effects.call(null,file,opts);

if(cljs.core.not.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cljs.js.analyze_deps.call(null,bound_vars__$1,ana_env,lib,cljs.core.next.call(null,deps),opts,cb);
} else {
return cb.call(null,res);
}
});})(pred__11699,expr__11700,map__11697,map__11697__$1,name,lang,source,file,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__11694,_STAR_cljs_dep_set_STAR__temp_val__11695))
);
} else {
if(cljs.core.truth_(pred__11699.call(null,new cljs.core.Keyword(null,"js","js",1768080579),expr__11700))){
return cljs.js.analyze_deps.call(null,bound_vars__$1,ana_env,lib,cljs.core.next.call(null,deps),opts,cb);
} else {
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,ana_env,["Invalid :lang specified ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang),", only :clj or :js allowed"].join('')));
}
}
}
});})(dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__11694,_STAR_cljs_dep_set_STAR__temp_val__11695))
);
}catch (e11696){var cause = e11696;
return cb.call(null,cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,ana_env,["Could not analyze dep ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dep)].join(''),cause)));
}} else {
return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null));
}
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__orig_val__11694;
}});

cljs.js.analyze_deps.cljs$lang$maxFixedArity = 6;

cljs.js.load_macros = (function cljs$js$load_macros(bound_vars,k,macros,lib,reload,reloads,opts,cb){
if(cljs.core.seq.call(null,macros)){
var nsym = cljs.core.first.call(null,cljs.core.vals.call(null,macros));
var k__$1 = (function (){var or__4047__auto__ = reload.call(null,k);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = cljs.core.get_in.call(null,reloads,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,nsym], null));
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
var or__4047__auto____$2 = (function (){var and__4036__auto__ = cljs.core._EQ_.call(null,nsym,cljs.core.name);
if(and__4036__auto__){
var and__4036__auto____$1 = new cljs.core.Keyword(null,"*reload-macros*","*reload-macros*",-820635806).cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__4036__auto____$1)){
return new cljs.core.Keyword(null,"reload","reload",863702807);
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(or__4047__auto____$2)){
return or__4047__auto____$2;
} else {
return null;
}
}
}
})();
var opts_SINGLEQUOTE_ = cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933),true),new cljs.core.Keyword(null,"context","context",-830191113)),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320)),new cljs.core.Keyword(null,"ns","ns",441598760)),new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518));
return cljs.js.require.call(null,bound_vars,nsym,k__$1,opts_SINGLEQUOTE_,((function (nsym,k__$1,opts_SINGLEQUOTE_){
return (function (res){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cljs.js.load_macros.call(null,bound_vars,k__$1,cljs.core.next.call(null,macros),lib,reload,reloads,opts,cb);
} else {
var temp__5733__auto__ = (function (){var cljs_ns = cljs.analyzer.clj_ns__GT_cljs_ns.call(null,nsym);
return cljs.core.get.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([nsym,null]),cljs_ns,cljs_ns);
})();
if(cljs.core.truth_(temp__5733__auto__)){
var cljs_dep = temp__5733__auto__;
return cljs.js.require.call(null,bound_vars,cljs_dep,k__$1,opts_SINGLEQUOTE_,((function (cljs_dep,temp__5733__auto__,nsym,k__$1,opts_SINGLEQUOTE_){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb.call(null,res__$1);
} else {
cljs.js.patch_alias_map.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars),lib,nsym,cljs_dep);

return cljs.js.load_macros.call(null,bound_vars,k__$1,cljs.core.next.call(null,macros),lib,reload,reloads,opts,((function (cljs_dep,temp__5733__auto__,nsym,k__$1,opts_SINGLEQUOTE_){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return cb.call(null,res__$2);
} else {
return cb.call(null,cljs.core.update.call(null,res__$2,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766),cljs.core.assoc,nsym,cljs_dep));
}
});})(cljs_dep,temp__5733__auto__,nsym,k__$1,opts_SINGLEQUOTE_))
);
}
});})(cljs_dep,temp__5733__auto__,nsym,k__$1,opts_SINGLEQUOTE_))
);
} else {
return cb.call(null,res);
}
}
});})(nsym,k__$1,opts_SINGLEQUOTE_))
);
} else {
return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null));
}
});
cljs.js.rewrite_ns_ast = (function cljs$js$rewrite_ns_ast(var_args){
var G__11706 = arguments.length;
switch (G__11706) {
case 2:
return cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$2 = (function (ast,smap){
return cljs.js.rewrite_ns_ast.call(null,ast,smap,false);
});

cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3 = (function (ast,smap,macros_QMARK_){
var vec__11707 = (cljs.core.truth_(macros_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),new cljs.core.Keyword(null,"require-macros","require-macros",707947416),new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uses","uses",232664692),new cljs.core.Keyword(null,"requires","requires",-1201390927),new cljs.core.Keyword(null,"renames","renames",343278368)], null));
var uk = cljs.core.nth.call(null,vec__11707,(0),null);
var rk = cljs.core.nth.call(null,vec__11707,(1),null);
var renk = cljs.core.nth.call(null,vec__11707,(2),null);
var rewrite_renames = ((function (vec__11707,uk,rk,renk){
return (function (m){
if(cljs.core.truth_(m)){
return cljs.core.reduce.call(null,((function (vec__11707,uk,rk,renk){
return (function (acc,p__11710){
var vec__11711 = p__11710;
var renamed = cljs.core.nth.call(null,vec__11711,(0),null);
var qualified_sym = cljs.core.nth.call(null,vec__11711,(1),null);
var entry = vec__11711;
var from = cljs.core.symbol.call(null,cljs.core.namespace.call(null,qualified_sym));
var to = cljs.core.get.call(null,smap,from);
if((!((to == null)))){
return cljs.core.assoc.call(null,acc,renamed,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(to),cljs.core.name.call(null,qualified_sym)));
} else {
return cljs.core.merge.call(null,acc,entry);
}
});})(vec__11707,uk,rk,renk))
,cljs.core.PersistentArrayMap.EMPTY,m);
} else {
return null;
}
});})(vec__11707,uk,rk,renk))
;
var rewrite_deps = ((function (vec__11707,uk,rk,renk,rewrite_renames){
return (function (deps){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (vec__11707,uk,rk,renk,rewrite_renames){
return (function (dep){
var temp__5733__auto__ = cljs.core.get.call(null,smap,dep);
if(cljs.core.truth_(temp__5733__auto__)){
var new_dep = temp__5733__auto__;
return new_dep;
} else {
return dep;
}
});})(vec__11707,uk,rk,renk,rewrite_renames))
),deps);
});})(vec__11707,uk,rk,renk,rewrite_renames))
;
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,ast,uk,((function (vec__11707,uk,rk,renk,rewrite_renames,rewrite_deps){
return (function (p1__11703_SHARP_){
return clojure.walk.postwalk_replace.call(null,smap,p1__11703_SHARP_);
});})(vec__11707,uk,rk,renk,rewrite_renames,rewrite_deps))
),rk,((function (vec__11707,uk,rk,renk,rewrite_renames,rewrite_deps){
return (function (p1__11704_SHARP_){
return cljs.core.merge.call(null,smap,clojure.walk.postwalk_replace.call(null,smap,p1__11704_SHARP_));
});})(vec__11707,uk,rk,renk,rewrite_renames,rewrite_deps))
),renk,rewrite_renames),new cljs.core.Keyword(null,"deps","deps",1883360319),rewrite_deps);
});

cljs.js.rewrite_ns_ast.cljs$lang$maxFixedArity = 3;

cljs.js.check_macro_autoload_inferring_missing = (function cljs$js$check_macro_autoload_inferring_missing(p__11715,cenv){
var map__11716 = p__11715;
var map__11716__$1 = (((((!((map__11716 == null))))?(((((map__11716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11716):map__11716);
var ast = map__11716__$1;
var requires = cljs.core.get.call(null,map__11716__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var name = cljs.core.get.call(null,map__11716__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var namespaces = new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cenv));
var missing_require_macros = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (namespaces,map__11716,map__11716__$1,ast,requires,name){
return (function (p__11718){
var vec__11719 = p__11718;
var _ = cljs.core.nth.call(null,vec__11719,(0),null);
var full_ns = cljs.core.nth.call(null,vec__11719,(1),null);
var map__11722 = cljs.core.get.call(null,namespaces,full_ns);
var map__11722__$1 = (((((!((map__11722 == null))))?(((((map__11722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11722):map__11722);
var use_macros = cljs.core.get.call(null,map__11722__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var require_macros = cljs.core.get.call(null,map__11722__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var or__4047__auto__ = cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([full_ns]),cljs.core.vals.call(null,use_macros));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([full_ns]),cljs.core.vals.call(null,require_macros));
}
});})(namespaces,map__11716,map__11716__$1,ast,requires,name))
),requires);
var ast_SINGLEQUOTE_ = cljs.core.update_in.call(null,ast,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"require-macros","require-macros",707947416)], null),cljs.core.merge,missing_require_macros);
cljs.core.swap_BANG_.call(null,cenv,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name,new cljs.core.Keyword(null,"require-macros","require-macros",707947416)], null),cljs.core.merge,missing_require_macros);

return ast_SINGLEQUOTE_;
});
cljs.js.ns_side_effects = (function cljs$js$ns_side_effects(var_args){
var G__11727 = arguments.length;
switch (G__11727) {
case 5:
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,ast,opts,cb){
return cljs.js.ns_side_effects.call(null,false,bound_vars,ana_env,ast,opts,cb);
});

cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6 = (function (load,bound_vars,ana_env,p__11728,opts,cb){
var map__11729 = p__11728;
var map__11729__$1 = (((((!((map__11729 == null))))?(((((map__11729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11729):map__11729);
var ast = map__11729__$1;
var op = cljs.core.get.call(null,map__11729__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Namespace side effects for",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast));
} else {
}

if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null).call(null,op))){
var check_uses_and_load_macros = ((function (map__11729,map__11729__$1,ast,op){
return (function cljs$js$check_uses_and_load_macros(res,rewritten_ast){
var env = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars);
var map__11748 = rewritten_ast;
var map__11748__$1 = (((((!((map__11748 == null))))?(((((map__11748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11748):map__11748);
var uses = cljs.core.get.call(null,map__11748__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var use_macros = cljs.core.get.call(null,map__11748__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var reload = cljs.core.get.call(null,map__11748__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var reloads = cljs.core.get.call(null,map__11748__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var name = cljs.core.get.call(null,map__11748__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cb.call(null,res);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006).cljs$core$IFn$_invoke$arity$1(bound_vars))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Processing :use-macros for",name);
} else {
}

return cljs.js.load_macros.call(null,bound_vars,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),use_macros,name,reload,reloads,opts,((function (env,map__11748,map__11748__$1,uses,use_macros,reload,reloads,name,map__11729,map__11729__$1,ast,op){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb.call(null,res__$1);
} else {
var map__11750 = cljs.js.rewrite_ns_ast.call(null,rewritten_ast,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766).cljs$core$IFn$_invoke$arity$1(res__$1),true);
var map__11750__$1 = (((((!((map__11750 == null))))?(((((map__11750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11750):map__11750);
var rewritten_ast__$1 = map__11750__$1;
var require_macros = cljs.core.get.call(null,map__11750__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Processing :require-macros for",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast));
} else {
}

return cljs.js.load_macros.call(null,bound_vars,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),require_macros,name,reload,reloads,opts,((function (map__11750,map__11750__$1,rewritten_ast__$1,require_macros,env,map__11748,map__11748__$1,uses,use_macros,reload,reloads,name,map__11729,map__11729__$1,ast,op){
return (function (res_SINGLEQUOTE_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE_))){
return cb.call(null,res_SINGLEQUOTE_);
} else {
var map__11752 = cljs.js.rewrite_ns_ast.call(null,rewritten_ast__$1,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766).cljs$core$IFn$_invoke$arity$1(res__$1),true);
var map__11752__$1 = (((((!((map__11752 == null))))?(((((map__11752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11752):map__11752);
var rewritten_ast__$2 = map__11752__$1;
var use_macros__$1 = cljs.core.get.call(null,map__11752__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var res_SINGLEQUOTE___$1 = (function (){try{if(cljs.core.seq.call(null,use_macros__$1)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Checking :use-macros for",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast));
} else {
}

var _STAR_analyze_deps_STAR__orig_val__11755_11768 = cljs.analyzer._STAR_analyze_deps_STAR_;
var _STAR_compiler_STAR__orig_val__11756_11769 = cljs.env._STAR_compiler_STAR_;
var _STAR_analyze_deps_STAR__temp_val__11757_11770 = new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427).cljs$core$IFn$_invoke$arity$1(bound_vars);
var _STAR_compiler_STAR__temp_val__11758_11771 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars);
cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__temp_val__11757_11770;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__11758_11771;

try{cljs.analyzer.check_use_macros.call(null,use_macros__$1,env);
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__11756_11769;

cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__orig_val__11755_11768;
}} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}catch (e11754){var cause = e11754;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,ana_env,["Could not parse ns form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE___$1))){
return cb.call(null,res_SINGLEQUOTE___$1);
} else {
try{var _STAR_analyze_deps_STAR__orig_val__11760 = cljs.analyzer._STAR_analyze_deps_STAR_;
var _STAR_compiler_STAR__orig_val__11761 = cljs.env._STAR_compiler_STAR_;
var _STAR_analyze_deps_STAR__temp_val__11762 = new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427).cljs$core$IFn$_invoke$arity$1(bound_vars);
var _STAR_compiler_STAR__temp_val__11763 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars);
cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__temp_val__11762;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__11763;

try{var ast_SINGLEQUOTE_ = cljs.js.check_macro_autoload_inferring_missing.call(null,cljs.analyzer.check_rename_macros_inferring_missing.call(null,cljs.analyzer.check_use_macros_inferring_missing.call(null,rewritten_ast__$2,env),env),env);
return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),ast_SINGLEQUOTE_], null));
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__11761;

cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__orig_val__11760;
}}catch (e11759){var cause = e11759;
return cb.call(null,cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,ana_env,["Could not parse ns form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause)));
}}
}
});})(map__11750,map__11750__$1,rewritten_ast__$1,require_macros,env,map__11748,map__11748__$1,uses,use_macros,reload,reloads,name,map__11729,map__11729__$1,ast,op))
);
}
});})(env,map__11748,map__11748__$1,uses,use_macros,reload,reloads,name,map__11729,map__11729__$1,ast,op))
);
} else {
try{if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Checking uses");
} else {
}

cljs.analyzer.check_uses.call(null,(cljs.core.truth_((function (){var and__4036__auto__ = new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427).cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.seq.call(null,uses);
} else {
return and__4036__auto__;
}
})())?cljs.analyzer.missing_uses.call(null,uses,env):null),env);

return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),ast], null));
}catch (e11764){var cause = e11764;
return cb.call(null,cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,ana_env,["Could not parse ns form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause)));
}}
}
});})(map__11729,map__11729__$1,ast,op))
;
if(cljs.core.truth_((function (){var and__4036__auto__ = load;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.seq.call(null,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
} else {
return and__4036__auto__;
}
})())){
var map__11765 = ast;
var map__11765__$1 = (((((!((map__11765 == null))))?(((((map__11765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11765):map__11765);
var reload = cljs.core.get.call(null,map__11765__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var name = cljs.core.get.call(null,map__11765__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var deps = cljs.core.get.call(null,map__11765__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
return cljs.js.load_deps.call(null,bound_vars,ana_env,name,deps,(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reload);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reload);
}
})(),cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933)),((function (map__11765,map__11765__$1,reload,name,deps,map__11729,map__11729__$1,ast,op){
return (function (p1__11724_SHARP_){
return check_uses_and_load_macros.call(null,p1__11724_SHARP_,cljs.js.rewrite_ns_ast.call(null,ast,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766).cljs$core$IFn$_invoke$arity$1(p1__11724_SHARP_)));
});})(map__11765,map__11765__$1,reload,name,deps,map__11729,map__11729__$1,ast,op))
);
} else {
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.not.call(null,load);
if(and__4036__auto__){
var and__4036__auto____$1 = new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427).cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__4036__auto____$1)){
return cljs.core.seq.call(null,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})())){
return cljs.js.analyze_deps.call(null,bound_vars,ana_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast),cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933)),((function (map__11729,map__11729__$1,ast,op){
return (function (p1__11725_SHARP_){
return check_uses_and_load_macros.call(null,p1__11725_SHARP_,cljs.js.rewrite_ns_ast.call(null,ast,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766).cljs$core$IFn$_invoke$arity$1(p1__11725_SHARP_)));
});})(map__11729,map__11729__$1,ast,op))
);
} else {
return check_uses_and_load_macros.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null),ast);

}
}
} else {
return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),ast], null));
}
});

cljs.js.ns_side_effects.cljs$lang$maxFixedArity = 6;

cljs.js.node_side_effects = (function cljs$js$node_side_effects(bound_vars,sb,deps,ns_name,emit_nil_result_QMARK_){
var seq__11772_11784 = cljs.core.seq.call(null,deps);
var chunk__11773_11785 = null;
var count__11774_11786 = (0);
var i__11775_11787 = (0);
while(true){
if((i__11775_11787 < count__11774_11786)){
var dep_11788 = cljs.core._nth.call(null,chunk__11773_11785,i__11775_11787);
sb.append((function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11776_11789 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11777_11790 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11778_11791 = true;
var _STAR_print_fn_STAR__temp_val__11779_11792 = ((function (seq__11772_11784,chunk__11773_11785,count__11774_11786,i__11775_11787,_STAR_print_newline_STAR__orig_val__11776_11789,_STAR_print_fn_STAR__orig_val__11777_11790,_STAR_print_newline_STAR__temp_val__11778_11791,sb__4572__auto__,dep_11788){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(seq__11772_11784,chunk__11773_11785,count__11774_11786,i__11775_11787,_STAR_print_newline_STAR__orig_val__11776_11789,_STAR_print_fn_STAR__orig_val__11777_11790,_STAR_print_newline_STAR__temp_val__11778_11791,sb__4572__auto__,dep_11788))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11778_11791;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11779_11792;

try{cljs.compiler.emitln.call(null,cljs.core.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,dep_11788)," = require('",dep_11788,"');");
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11777_11790;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11776_11789;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
})());


var G__11793 = seq__11772_11784;
var G__11794 = chunk__11773_11785;
var G__11795 = count__11774_11786;
var G__11796 = (i__11775_11787 + (1));
seq__11772_11784 = G__11793;
chunk__11773_11785 = G__11794;
count__11774_11786 = G__11795;
i__11775_11787 = G__11796;
continue;
} else {
var temp__5735__auto___11797 = cljs.core.seq.call(null,seq__11772_11784);
if(temp__5735__auto___11797){
var seq__11772_11798__$1 = temp__5735__auto___11797;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11772_11798__$1)){
var c__4461__auto___11799 = cljs.core.chunk_first.call(null,seq__11772_11798__$1);
var G__11800 = cljs.core.chunk_rest.call(null,seq__11772_11798__$1);
var G__11801 = c__4461__auto___11799;
var G__11802 = cljs.core.count.call(null,c__4461__auto___11799);
var G__11803 = (0);
seq__11772_11784 = G__11800;
chunk__11773_11785 = G__11801;
count__11774_11786 = G__11802;
i__11775_11787 = G__11803;
continue;
} else {
var dep_11804 = cljs.core.first.call(null,seq__11772_11798__$1);
sb.append((function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11780_11805 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11781_11806 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11782_11807 = true;
var _STAR_print_fn_STAR__temp_val__11783_11808 = ((function (seq__11772_11784,chunk__11773_11785,count__11774_11786,i__11775_11787,_STAR_print_newline_STAR__orig_val__11780_11805,_STAR_print_fn_STAR__orig_val__11781_11806,_STAR_print_newline_STAR__temp_val__11782_11807,sb__4572__auto__,dep_11804,seq__11772_11798__$1,temp__5735__auto___11797){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(seq__11772_11784,chunk__11773_11785,count__11774_11786,i__11775_11787,_STAR_print_newline_STAR__orig_val__11780_11805,_STAR_print_fn_STAR__orig_val__11781_11806,_STAR_print_newline_STAR__temp_val__11782_11807,sb__4572__auto__,dep_11804,seq__11772_11798__$1,temp__5735__auto___11797))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11782_11807;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11783_11808;

try{cljs.compiler.emitln.call(null,cljs.core.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,dep_11804)," = require('",dep_11804,"');");
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11781_11806;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11780_11805;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
})());


var G__11809 = cljs.core.next.call(null,seq__11772_11798__$1);
var G__11810 = null;
var G__11811 = (0);
var G__11812 = (0);
seq__11772_11784 = G__11809;
chunk__11773_11785 = G__11810;
count__11774_11786 = G__11811;
i__11775_11787 = G__11812;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.seq.call(null,deps);
if(and__4036__auto__){
return emit_nil_result_QMARK_;
} else {
return and__4036__auto__;
}
})())){
return sb.append("null;");
} else {
return null;
}
});
cljs.js.global_exports_side_effects = (function cljs$js$global_exports_side_effects(bound_vars,sb,deps,ns_name,emit_nil_result_QMARK_){
var map__11813 = cljs.core.deref.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars));
var map__11813__$1 = (((((!((map__11813 == null))))?(((((map__11813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11813):map__11813);
var js_dependency_index = cljs.core.get.call(null,map__11813__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var seq__11815_11831 = cljs.core.seq.call(null,deps);
var chunk__11816_11832 = null;
var count__11817_11833 = (0);
var i__11818_11834 = (0);
while(true){
if((i__11818_11834 < count__11817_11833)){
var dep_11835 = cljs.core._nth.call(null,chunk__11816_11832,i__11818_11834);
var map__11819_11836 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,dep_11835));
var map__11819_11837__$1 = (((((!((map__11819_11836 == null))))?(((((map__11819_11836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11819_11836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11819_11836):map__11819_11836);
var global_exports_11838 = cljs.core.get.call(null,map__11819_11837__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
sb.append((function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11821_11839 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11822_11840 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11823_11841 = true;
var _STAR_print_fn_STAR__temp_val__11824_11842 = ((function (seq__11815_11831,chunk__11816_11832,count__11817_11833,i__11818_11834,_STAR_print_newline_STAR__orig_val__11821_11839,_STAR_print_fn_STAR__orig_val__11822_11840,_STAR_print_newline_STAR__temp_val__11823_11841,sb__4572__auto__,map__11819_11836,map__11819_11837__$1,global_exports_11838,dep_11835,map__11813,map__11813__$1,js_dependency_index){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(seq__11815_11831,chunk__11816_11832,count__11817_11833,i__11818_11834,_STAR_print_newline_STAR__orig_val__11821_11839,_STAR_print_fn_STAR__orig_val__11822_11840,_STAR_print_newline_STAR__temp_val__11823_11841,sb__4572__auto__,map__11819_11836,map__11819_11837__$1,global_exports_11838,dep_11835,map__11813,map__11813__$1,js_dependency_index))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11823_11841;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11824_11842;

try{cljs.compiler.emit_global_export.call(null,ns_name,global_exports_11838,dep_11835);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11822_11840;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11821_11839;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
})());


var G__11843 = seq__11815_11831;
var G__11844 = chunk__11816_11832;
var G__11845 = count__11817_11833;
var G__11846 = (i__11818_11834 + (1));
seq__11815_11831 = G__11843;
chunk__11816_11832 = G__11844;
count__11817_11833 = G__11845;
i__11818_11834 = G__11846;
continue;
} else {
var temp__5735__auto___11847 = cljs.core.seq.call(null,seq__11815_11831);
if(temp__5735__auto___11847){
var seq__11815_11848__$1 = temp__5735__auto___11847;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11815_11848__$1)){
var c__4461__auto___11849 = cljs.core.chunk_first.call(null,seq__11815_11848__$1);
var G__11850 = cljs.core.chunk_rest.call(null,seq__11815_11848__$1);
var G__11851 = c__4461__auto___11849;
var G__11852 = cljs.core.count.call(null,c__4461__auto___11849);
var G__11853 = (0);
seq__11815_11831 = G__11850;
chunk__11816_11832 = G__11851;
count__11817_11833 = G__11852;
i__11818_11834 = G__11853;
continue;
} else {
var dep_11854 = cljs.core.first.call(null,seq__11815_11848__$1);
var map__11825_11855 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,dep_11854));
var map__11825_11856__$1 = (((((!((map__11825_11855 == null))))?(((((map__11825_11855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11825_11855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11825_11855):map__11825_11855);
var global_exports_11857 = cljs.core.get.call(null,map__11825_11856__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
sb.append((function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11827_11858 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11828_11859 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11829_11860 = true;
var _STAR_print_fn_STAR__temp_val__11830_11861 = ((function (seq__11815_11831,chunk__11816_11832,count__11817_11833,i__11818_11834,_STAR_print_newline_STAR__orig_val__11827_11858,_STAR_print_fn_STAR__orig_val__11828_11859,_STAR_print_newline_STAR__temp_val__11829_11860,sb__4572__auto__,map__11825_11855,map__11825_11856__$1,global_exports_11857,dep_11854,seq__11815_11848__$1,temp__5735__auto___11847,map__11813,map__11813__$1,js_dependency_index){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(seq__11815_11831,chunk__11816_11832,count__11817_11833,i__11818_11834,_STAR_print_newline_STAR__orig_val__11827_11858,_STAR_print_fn_STAR__orig_val__11828_11859,_STAR_print_newline_STAR__temp_val__11829_11860,sb__4572__auto__,map__11825_11855,map__11825_11856__$1,global_exports_11857,dep_11854,seq__11815_11848__$1,temp__5735__auto___11847,map__11813,map__11813__$1,js_dependency_index))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11829_11860;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11830_11861;

try{cljs.compiler.emit_global_export.call(null,ns_name,global_exports_11857,dep_11854);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11828_11859;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11827_11858;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
})());


var G__11862 = cljs.core.next.call(null,seq__11815_11848__$1);
var G__11863 = null;
var G__11864 = (0);
var G__11865 = (0);
seq__11815_11831 = G__11862;
chunk__11816_11832 = G__11863;
count__11817_11833 = G__11864;
i__11818_11834 = G__11865;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.seq.call(null,deps);
if(and__4036__auto__){
return emit_nil_result_QMARK_;
} else {
return and__4036__auto__;
}
})())){
return sb.append("null;");
} else {
return null;
}
});
/**
 * Returns a new function that calls f but discards any return value,
 *   returning nil instead, thus avoiding any inadvertent trampoline continuation
 *   if a function happens to be returned.
 */
cljs.js.trampoline_safe = (function cljs$js$trampoline_safe(f){
return cljs.core.comp.call(null,cljs.core.constantly.call(null,null),f);
});
cljs.js.analyze_str_STAR_ = (function cljs$js$analyze_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.call(null,source,(1),name);
var cb__$1 = cljs.js.trampoline_safe.call(null,cb);
var eof = {};
var aenv = cljs.analyzer.empty_env.call(null);
var the_ns = (function (){var or__4047__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
}
})();
var bound_vars__$1 = (function (){var G__11868 = cljs.core.merge.call(null,bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.call(null,G__11868,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data.call(null));
} else {
return G__11868;
}
})();
return cljs.core.trampoline.call(null,((function (rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1){
return (function cljs$js$analyze_str_STAR__$_analyze_loop(last_ast,ns){
var _STAR_compiler_STAR__orig_val__11869 = cljs.env._STAR_compiler_STAR_;
var _STAR_cljs_ns_STAR__orig_val__11870 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__11871 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__11872 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__11873 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__11874 = cljs.core._STAR_ns_STAR_;
var _STAR_passes_STAR__orig_val__11875 = cljs.analyzer._STAR_passes_STAR_;
var _STAR_alias_map_STAR__orig_val__11876 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__11877 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__11878 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__11879 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_cljs_file_STAR__orig_val__11880 = cljs.analyzer._STAR_cljs_file_STAR_;
var _STAR_compiler_STAR__temp_val__11881 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__11882 = ns;
var _STAR_checked_arrays_STAR__temp_val__11883 = new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__11884 = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__11885 = (function (){var and__4036__auto__ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4036__auto__)){
return new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4036__auto__;
}
})();
var _STAR_ns_STAR__temp_val__11886 = cljs.core.create_ns.call(null,ns);
var _STAR_passes_STAR__temp_val__11887 = new cljs.core.Keyword(null,"*passes*","*passes*",1335562782).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_alias_map_STAR__temp_val__11888 = cljs.js.alias_map.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),ns);
var _STAR_data_readers_STAR__temp_val__11889 = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__11890 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__11891 = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_file_STAR__temp_val__11892 = new cljs.core.Keyword(null,"cljs-file","cljs-file",-1499001049).cljs$core$IFn$_invoke$arity$1(opts);
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__11881;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__11882;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__11883;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__11884;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__11885;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__11886;

cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR__temp_val__11887;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__11888;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__11889;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__11890;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__11891;

cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__temp_val__11892;

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.js.read.call(null,eof,rdr)], null);
}catch (e11893){var cause = e11893;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv,["Could not analyze ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cb__$1.call(null,res);
} else {
var form = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
if((!((eof === form)))){
var aenv__$1 = (function (){var G__11894 = cljs.core.assoc.call(null,aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_));
var G__11894__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.call(null,G__11894,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__11894);
if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.call(null,G__11894__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true);
} else {
return G__11894__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.analyzer.analyze.call(null,aenv__$1,form,null,opts)], null);
}catch (e11895){var cause = e11895;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv__$1,["Could not analyze ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb__$1.call(null,res__$1);
} else {
var ast = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res__$1);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.js.trampoline_safe.call(null,cljs.js.ns_side_effects).call(null,bound_vars__$1,aenv__$1,ast,opts,((function (ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__11869,_STAR_cljs_ns_STAR__orig_val__11870,_STAR_checked_arrays_STAR__orig_val__11871,_STAR_cljs_static_fns_STAR__orig_val__11872,_STAR_fn_invoke_direct_STAR__orig_val__11873,_STAR_ns_STAR__orig_val__11874,_STAR_passes_STAR__orig_val__11875,_STAR_alias_map_STAR__orig_val__11876,_STAR_data_readers_STAR__orig_val__11877,resolve_symbol_orig_val__11878,_STAR_source_map_data_STAR__orig_val__11879,_STAR_cljs_file_STAR__orig_val__11880,_STAR_compiler_STAR__temp_val__11881,_STAR_cljs_ns_STAR__temp_val__11882,_STAR_checked_arrays_STAR__temp_val__11883,_STAR_cljs_static_fns_STAR__temp_val__11884,_STAR_fn_invoke_direct_STAR__temp_val__11885,_STAR_ns_STAR__temp_val__11886,_STAR_passes_STAR__temp_val__11887,_STAR_alias_map_STAR__temp_val__11888,_STAR_data_readers_STAR__temp_val__11889,resolve_symbol_temp_val__11890,_STAR_source_map_data_STAR__temp_val__11891,_STAR_cljs_file_STAR__temp_val__11892,rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return cb__$1.call(null,res__$2);
} else {
return cljs.core.trampoline.call(null,cljs$js$analyze_str_STAR__$_analyze_loop,ast,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast));
}
});})(ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__11869,_STAR_cljs_ns_STAR__orig_val__11870,_STAR_checked_arrays_STAR__orig_val__11871,_STAR_cljs_static_fns_STAR__orig_val__11872,_STAR_fn_invoke_direct_STAR__orig_val__11873,_STAR_ns_STAR__orig_val__11874,_STAR_passes_STAR__orig_val__11875,_STAR_alias_map_STAR__orig_val__11876,_STAR_data_readers_STAR__orig_val__11877,resolve_symbol_orig_val__11878,_STAR_source_map_data_STAR__orig_val__11879,_STAR_cljs_file_STAR__orig_val__11880,_STAR_compiler_STAR__temp_val__11881,_STAR_cljs_ns_STAR__temp_val__11882,_STAR_checked_arrays_STAR__temp_val__11883,_STAR_cljs_static_fns_STAR__temp_val__11884,_STAR_fn_invoke_direct_STAR__temp_val__11885,_STAR_ns_STAR__temp_val__11886,_STAR_passes_STAR__temp_val__11887,_STAR_alias_map_STAR__temp_val__11888,_STAR_data_readers_STAR__temp_val__11889,resolve_symbol_temp_val__11890,_STAR_source_map_data_STAR__temp_val__11891,_STAR_cljs_file_STAR__temp_val__11892,rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1))
);
} else {
return ((function (ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__11869,_STAR_cljs_ns_STAR__orig_val__11870,_STAR_checked_arrays_STAR__orig_val__11871,_STAR_cljs_static_fns_STAR__orig_val__11872,_STAR_fn_invoke_direct_STAR__orig_val__11873,_STAR_ns_STAR__orig_val__11874,_STAR_passes_STAR__orig_val__11875,_STAR_alias_map_STAR__orig_val__11876,_STAR_data_readers_STAR__orig_val__11877,resolve_symbol_orig_val__11878,_STAR_source_map_data_STAR__orig_val__11879,_STAR_cljs_file_STAR__orig_val__11880,_STAR_compiler_STAR__temp_val__11881,_STAR_cljs_ns_STAR__temp_val__11882,_STAR_checked_arrays_STAR__temp_val__11883,_STAR_cljs_static_fns_STAR__temp_val__11884,_STAR_fn_invoke_direct_STAR__temp_val__11885,_STAR_ns_STAR__temp_val__11886,_STAR_passes_STAR__temp_val__11887,_STAR_alias_map_STAR__temp_val__11888,_STAR_data_readers_STAR__temp_val__11889,resolve_symbol_temp_val__11890,_STAR_source_map_data_STAR__temp_val__11891,_STAR_cljs_file_STAR__temp_val__11892,rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1){
return (function (){
return cljs$js$analyze_str_STAR__$_analyze_loop.call(null,ast,ns);
});
;})(ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__11869,_STAR_cljs_ns_STAR__orig_val__11870,_STAR_checked_arrays_STAR__orig_val__11871,_STAR_cljs_static_fns_STAR__orig_val__11872,_STAR_fn_invoke_direct_STAR__orig_val__11873,_STAR_ns_STAR__orig_val__11874,_STAR_passes_STAR__orig_val__11875,_STAR_alias_map_STAR__orig_val__11876,_STAR_data_readers_STAR__orig_val__11877,resolve_symbol_orig_val__11878,_STAR_source_map_data_STAR__orig_val__11879,_STAR_cljs_file_STAR__orig_val__11880,_STAR_compiler_STAR__temp_val__11881,_STAR_cljs_ns_STAR__temp_val__11882,_STAR_checked_arrays_STAR__temp_val__11883,_STAR_cljs_static_fns_STAR__temp_val__11884,_STAR_fn_invoke_direct_STAR__temp_val__11885,_STAR_ns_STAR__temp_val__11886,_STAR_passes_STAR__temp_val__11887,_STAR_alias_map_STAR__temp_val__11888,_STAR_data_readers_STAR__temp_val__11889,resolve_symbol_temp_val__11890,_STAR_source_map_data_STAR__temp_val__11891,_STAR_cljs_file_STAR__temp_val__11892,rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1))
}
}
} else {
return cb__$1.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),last_ast], null));
}
}
}finally {cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__orig_val__11880;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__11879;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__11878;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__11877;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__11876;

cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR__orig_val__11875;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__11874;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__11873;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__11872;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__11871;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__11870;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__11869;
}});})(rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1))
,null,the_ns);
});
/**
 * Analyze ClojureScript source. The compiler state will be populated with
 * the results of analyzes. The parameters:
 * 
 * state (atom)
 *   the compiler state
 * 
 * source (string)
 *   the ClojureScript source
 * 
 * name (symbol or string)
 *   optional, the name of the source
 * 
 * opts (map)
 *   compilation options.
 * 
 *    :eval             - eval function to invoke, see *eval-fn*
 *    :load             - library resolution function, see *load-fn*
 *    :source-map       - set to true to generate inline source map information
 *    :def-emits-var    - sets whether def (and derived) forms return either a Var
 *                        (if set to true) or the def init value (if false).
 *                        Defaults to false.
 *    :checked-arrays   - if :warn or :error, checks inferred types and values passed
 *                        to aget/aset. Logs for incorrect values if :warn, throws if
 *                        :error. Defaults to false.
 *    :static-fns       - employ static dispatch to specific function arities in
 *                        emitted JavaScript, as opposed to making use of the
 *                        `call` construct. Defaults to false.
 *    :fn-invoke-direct - if `true`, does not generate `.call(null...)` calls for
 *                        unknown functions, but instead direct invokes via
 *                        `f(a0,a1...)`. Defaults to `false`.
 *    :target           - use `:nodejs` if targeting Node.js. Takes no other options
 *                        at the moment.
 *    :ns               - optional, the namespace in which to evaluate the source.
 *    :verbose          - optional, emit details from compiler activity. Defaults to
 *                        false.
 *    :context          - optional, sets the context for the source. Possible values
 *                        are `:expr`, `:statement` and `:return`. Defaults to
 *                        `:expr`.
 * 
 * cb (function)
 *   callback, will be invoked with a map. If successful the map will contain
 *   a key :value, the actual value is not meaningful. If unsuccessful the
 *   map will contain a key :error with an ex-info instance describing the cause
 *   of failure.
 */
cljs.js.analyze_str = (function cljs$js$analyze_str(var_args){
var G__11897 = arguments.length;
switch (G__11897) {
case 3:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.analyze_str.call(null,state,source,null,cb);
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.analyze_str.call(null,state,source,name,null,cb);
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){
if(cljs.js.atom_QMARK_.call(null,state)){
} else {
throw (new Error("Assert failed: (atom? state)"));
}

if(typeof source === 'string'){
} else {
throw (new Error("Assert failed: (string? source)"));
}

if(cljs.js.valid_name_QMARK_.call(null,name)){
} else {
throw (new Error("Assert failed: (valid-name? name)"));
}

if(cljs.js.valid_opts_QMARK_.call(null,opts)){
} else {
throw (new Error("Assert failed: (valid-opts? opts)"));
}

if(cljs.core.fn_QMARK_.call(null,cb)){
} else {
throw (new Error("Assert failed: (fn? cb)"));
}

return cljs.js.analyze_str_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),state,new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469),cljs.tagged_literals._STAR_cljs_data_readers_STAR_,new cljs.core.Keyword(null,"*passes*","*passes*",1335562782),(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"passes","passes",-2141861841).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.analyzer._STAR_passes_STAR_;
}
})(),new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427),new cljs.core.Keyword(null,"analyze-deps","analyze-deps",1000677285).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_,new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006),new cljs.core.Keyword(null,"load-macros","load-macros",459797395).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106),(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128),(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),source,name,opts,cb);
});

cljs.js.analyze_str.cljs$lang$maxFixedArity = 5;

cljs.js.eval_STAR_ = (function cljs$js$eval_STAR_(bound_vars,form,opts,cb){
var the_ns = (function (){var or__4047__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
}
})();
var bound_vars__$1 = (function (){var G__11899 = cljs.core.merge.call(null,bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.call(null,G__11899,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data.call(null));
} else {
return G__11899;
}
})();
cljs.js.clear_fns_BANG_.call(null);

var _STAR_compiler_STAR__orig_val__11900 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR__orig_val__11901 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR__orig_val__11902 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__11903 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__11904 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__11905 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__11906 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR__orig_val__11907 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__11908 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__11909 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__11910 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_compiler_STAR__temp_val__11911 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_eval_fn_STAR__temp_val__11912 = new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__11913 = new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_checked_arrays_STAR__temp_val__11914 = new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__11915 = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__11916 = (function (){var and__4036__auto__ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4036__auto__)){
return new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4036__auto__;
}
})();
var _STAR_ns_STAR__temp_val__11917 = cljs.core.create_ns.call(null,new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432).cljs$core$IFn$_invoke$arity$1(bound_vars__$1));
var _STAR_alias_map_STAR__temp_val__11918 = cljs.js.alias_map.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432).cljs$core$IFn$_invoke$arity$1(bound_vars__$1));
var _STAR_data_readers_STAR__temp_val__11919 = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__11920 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__11921 = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__11911;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__temp_val__11912;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__11913;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__11914;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__11915;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__11916;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__11917;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__11918;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__11919;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__11920;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__11921;

try{var aenv = cljs.analyzer.empty_env.call(null);
var aenv__$1 = (function (){var G__11922 = cljs.core.assoc.call(null,aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_));
var G__11922__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.call(null,G__11922,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__11922);
if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.call(null,G__11922__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true);
} else {
return G__11922__$1;
}
})();
var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.analyzer.analyze.call(null,aenv__$1,form,null,opts)], null);
}catch (e11923){var cause = e11923;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv__$1,["Could not eval ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cb.call(null,res);
} else {
var ast = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
var vec__11924 = ((cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"nodejs","nodejs",321212524)))?(function (){var map__11927 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
var map__11927__$1 = (((((!((map__11927 == null))))?(((((map__11927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11927):map__11927);
var node_libs = cljs.core.get.call(null,map__11927__$1,true);
var libs_to_load = cljs.core.get.call(null,map__11927__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"deps","deps",1883360319),libs_to_load)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,ast], null));
var node_deps = cljs.core.nth.call(null,vec__11924,(0),null);
var ast__$1 = cljs.core.nth.call(null,vec__11924,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast__$1)))){
return cljs.js.ns_side_effects.call(null,true,bound_vars__$1,aenv__$1,ast__$1,opts,((function (ast,vec__11924,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__11900,_STAR_eval_fn_STAR__orig_val__11901,_STAR_cljs_ns_STAR__orig_val__11902,_STAR_checked_arrays_STAR__orig_val__11903,_STAR_cljs_static_fns_STAR__orig_val__11904,_STAR_fn_invoke_direct_STAR__orig_val__11905,_STAR_ns_STAR__orig_val__11906,_STAR_alias_map_STAR__orig_val__11907,_STAR_data_readers_STAR__orig_val__11908,resolve_symbol_orig_val__11909,_STAR_source_map_data_STAR__orig_val__11910,_STAR_compiler_STAR__temp_val__11911,_STAR_eval_fn_STAR__temp_val__11912,_STAR_cljs_ns_STAR__temp_val__11913,_STAR_checked_arrays_STAR__temp_val__11914,_STAR_cljs_static_fns_STAR__temp_val__11915,_STAR_fn_invoke_direct_STAR__temp_val__11916,_STAR_ns_STAR__temp_val__11917,_STAR_alias_map_STAR__temp_val__11918,_STAR_data_readers_STAR__temp_val__11919,resolve_symbol_temp_val__11920,_STAR_source_map_data_STAR__temp_val__11921,the_ns,bound_vars__$1){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb.call(null,res__$1);
} else {
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast__$1);
var sb = (new goog.string.StringBuffer());
sb.append((function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11929_11937 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11930_11938 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11931_11939 = true;
var _STAR_print_fn_STAR__temp_val__11932_11940 = ((function (_STAR_print_newline_STAR__orig_val__11929_11937,_STAR_print_fn_STAR__orig_val__11930_11938,_STAR_print_newline_STAR__temp_val__11931_11939,sb__4572__auto__,ns_name,sb,ast,vec__11924,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__11900,_STAR_eval_fn_STAR__orig_val__11901,_STAR_cljs_ns_STAR__orig_val__11902,_STAR_checked_arrays_STAR__orig_val__11903,_STAR_cljs_static_fns_STAR__orig_val__11904,_STAR_fn_invoke_direct_STAR__orig_val__11905,_STAR_ns_STAR__orig_val__11906,_STAR_alias_map_STAR__orig_val__11907,_STAR_data_readers_STAR__orig_val__11908,resolve_symbol_orig_val__11909,_STAR_source_map_data_STAR__orig_val__11910,_STAR_compiler_STAR__temp_val__11911,_STAR_eval_fn_STAR__temp_val__11912,_STAR_cljs_ns_STAR__temp_val__11913,_STAR_checked_arrays_STAR__temp_val__11914,_STAR_cljs_static_fns_STAR__temp_val__11915,_STAR_fn_invoke_direct_STAR__temp_val__11916,_STAR_ns_STAR__temp_val__11917,_STAR_alias_map_STAR__temp_val__11918,_STAR_data_readers_STAR__temp_val__11919,resolve_symbol_temp_val__11920,_STAR_source_map_data_STAR__temp_val__11921,the_ns,bound_vars__$1){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__11929_11937,_STAR_print_fn_STAR__orig_val__11930_11938,_STAR_print_newline_STAR__temp_val__11931_11939,sb__4572__auto__,ns_name,sb,ast,vec__11924,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__11900,_STAR_eval_fn_STAR__orig_val__11901,_STAR_cljs_ns_STAR__orig_val__11902,_STAR_checked_arrays_STAR__orig_val__11903,_STAR_cljs_static_fns_STAR__orig_val__11904,_STAR_fn_invoke_direct_STAR__orig_val__11905,_STAR_ns_STAR__orig_val__11906,_STAR_alias_map_STAR__orig_val__11907,_STAR_data_readers_STAR__orig_val__11908,resolve_symbol_orig_val__11909,_STAR_source_map_data_STAR__orig_val__11910,_STAR_compiler_STAR__temp_val__11911,_STAR_eval_fn_STAR__temp_val__11912,_STAR_cljs_ns_STAR__temp_val__11913,_STAR_checked_arrays_STAR__temp_val__11914,_STAR_cljs_static_fns_STAR__temp_val__11915,_STAR_fn_invoke_direct_STAR__temp_val__11916,_STAR_ns_STAR__temp_val__11917,_STAR_alias_map_STAR__temp_val__11918,_STAR_data_readers_STAR__temp_val__11919,resolve_symbol_temp_val__11920,_STAR_source_map_data_STAR__temp_val__11921,the_ns,bound_vars__$1))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11931_11939;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11932_11940;

try{cljs.compiler.emitln.call(null,["goog.provide(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,ns_name)),"\");"].join(''));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11930_11938;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11929_11937;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
})());

if((node_deps == null)){
} else {
cljs.js.node_side_effects.call(null,bound_vars__$1,sb,node_deps,ns_name,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts));
}

cljs.js.global_exports_side_effects.call(null,bound_vars__$1,sb,cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast__$1)),ns_name,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts));

return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.js._STAR_eval_fn_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),sb.toString()], null))], null));
}
});})(ast,vec__11924,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__11900,_STAR_eval_fn_STAR__orig_val__11901,_STAR_cljs_ns_STAR__orig_val__11902,_STAR_checked_arrays_STAR__orig_val__11903,_STAR_cljs_static_fns_STAR__orig_val__11904,_STAR_fn_invoke_direct_STAR__orig_val__11905,_STAR_ns_STAR__orig_val__11906,_STAR_alias_map_STAR__orig_val__11907,_STAR_data_readers_STAR__orig_val__11908,resolve_symbol_orig_val__11909,_STAR_source_map_data_STAR__orig_val__11910,_STAR_compiler_STAR__temp_val__11911,_STAR_eval_fn_STAR__temp_val__11912,_STAR_cljs_ns_STAR__temp_val__11913,_STAR_checked_arrays_STAR__temp_val__11914,_STAR_cljs_static_fns_STAR__temp_val__11915,_STAR_fn_invoke_direct_STAR__temp_val__11916,_STAR_ns_STAR__temp_val__11917,_STAR_alias_map_STAR__temp_val__11918,_STAR_data_readers_STAR__temp_val__11919,resolve_symbol_temp_val__11920,_STAR_source_map_data_STAR__temp_val__11921,the_ns,bound_vars__$1))
);
} else {
var src = (function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11933_11941 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11934_11942 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11935_11943 = true;
var _STAR_print_fn_STAR__temp_val__11936_11944 = ((function (_STAR_print_newline_STAR__orig_val__11933_11941,_STAR_print_fn_STAR__orig_val__11934_11942,_STAR_print_newline_STAR__temp_val__11935_11943,sb__4572__auto__,ast,vec__11924,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__11900,_STAR_eval_fn_STAR__orig_val__11901,_STAR_cljs_ns_STAR__orig_val__11902,_STAR_checked_arrays_STAR__orig_val__11903,_STAR_cljs_static_fns_STAR__orig_val__11904,_STAR_fn_invoke_direct_STAR__orig_val__11905,_STAR_ns_STAR__orig_val__11906,_STAR_alias_map_STAR__orig_val__11907,_STAR_data_readers_STAR__orig_val__11908,resolve_symbol_orig_val__11909,_STAR_source_map_data_STAR__orig_val__11910,_STAR_compiler_STAR__temp_val__11911,_STAR_eval_fn_STAR__temp_val__11912,_STAR_cljs_ns_STAR__temp_val__11913,_STAR_checked_arrays_STAR__temp_val__11914,_STAR_cljs_static_fns_STAR__temp_val__11915,_STAR_fn_invoke_direct_STAR__temp_val__11916,_STAR_ns_STAR__temp_val__11917,_STAR_alias_map_STAR__temp_val__11918,_STAR_data_readers_STAR__temp_val__11919,resolve_symbol_temp_val__11920,_STAR_source_map_data_STAR__temp_val__11921,the_ns,bound_vars__$1){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__11933_11941,_STAR_print_fn_STAR__orig_val__11934_11942,_STAR_print_newline_STAR__temp_val__11935_11943,sb__4572__auto__,ast,vec__11924,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__11900,_STAR_eval_fn_STAR__orig_val__11901,_STAR_cljs_ns_STAR__orig_val__11902,_STAR_checked_arrays_STAR__orig_val__11903,_STAR_cljs_static_fns_STAR__orig_val__11904,_STAR_fn_invoke_direct_STAR__orig_val__11905,_STAR_ns_STAR__orig_val__11906,_STAR_alias_map_STAR__orig_val__11907,_STAR_data_readers_STAR__orig_val__11908,resolve_symbol_orig_val__11909,_STAR_source_map_data_STAR__orig_val__11910,_STAR_compiler_STAR__temp_val__11911,_STAR_eval_fn_STAR__temp_val__11912,_STAR_cljs_ns_STAR__temp_val__11913,_STAR_checked_arrays_STAR__temp_val__11914,_STAR_cljs_static_fns_STAR__temp_val__11915,_STAR_fn_invoke_direct_STAR__temp_val__11916,_STAR_ns_STAR__temp_val__11917,_STAR_alias_map_STAR__temp_val__11918,_STAR_data_readers_STAR__temp_val__11919,resolve_symbol_temp_val__11920,_STAR_source_map_data_STAR__temp_val__11921,the_ns,bound_vars__$1))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11935_11943;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11936_11944;

try{cljs.compiler.emit.call(null,ast__$1);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11934_11942;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11933_11941;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
})();
return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.js._STAR_eval_fn_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),src], null))], null));
}
}
}finally {cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__11910;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__11909;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__11908;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__11907;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__11906;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__11905;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__11904;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__11903;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__11902;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__orig_val__11901;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__11900;
}});
/**
 * Evaluate a single ClojureScript form. The parameters:
 * 
 * state (atom)
 *   the compiler state
 * 
 * form (s-expr)
 *   the ClojureScript source
 * 
 * opts (map)
 *   compilation options.
 * 
 *    :eval             - eval function to invoke, see *eval-fn*
 *    :load             - library resolution function, see *load-fn*
 *    :source-map       - set to true to generate inline source map information
 *    :def-emits-var    - sets whether def (and derived) forms return either a Var
 *                        (if set to true) or the def init value (if false). Default
 *                        is false.
 *    :checked-arrays   - if :warn or :error, checks inferred types and values passed
 *                        to aget/aset. Logs for incorrect values if :warn, throws if
 *                        :error. Defaults to false.
 *    :static-fns       - employ static dispatch to specific function arities in
 *                        emitted JavaScript, as opposed to making use of the
 *                        `call` construct. Defaults to false.
 *    :fn-invoke-direct - if `true`, does not generate `.call(null...)` calls for
 *                        unknown functions, but instead direct invokes via
 *                        `f(a0,a1...)`. Defaults to `false`.
 *    :target           - use `:nodejs` if targeting Node.js. Takes no other options
 *                        at the moment.
 *    :ns               - optional, the namespace in which to evaluate the source.
 *    :verbose          - optional, emit details from compiler activity. Defaults to
 *                        false.
 *    :context          - optional, sets the context for the source. Possible values
 *                        are `:expr`, `:statement` and `:return`. Defaults to
 *                        `:expr`.
 * 
 * cb (function)
 *   callback, will be invoked with a map. If successful the map will contain
 *   a key :value with the result of evalution. If unsuccessful the map will
 *   contain a key :error with an ex-info instance describing the cause of
 *   failure.
 */
cljs.js.eval = (function cljs$js$eval(var_args){
var G__11946 = arguments.length;
switch (G__11946) {
case 3:
return cljs.js.eval.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.eval.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.eval.cljs$core$IFn$_invoke$arity$3 = (function (state,form,cb){
return cljs.js.eval.call(null,state,form,null,cb);
});

cljs.js.eval.cljs$core$IFn$_invoke$arity$4 = (function (state,form,opts,cb){
return cljs.js.eval_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),state,new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469),cljs.tagged_literals._STAR_cljs_data_readers_STAR_,new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427),new cljs.core.Keyword(null,"analyze-deps","analyze-deps",1000677285).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_,new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006),new cljs.core.Keyword(null,"load-macros","load-macros",459797395).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106),(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128),(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),form,opts,cb);
});

cljs.js.eval.cljs$lang$maxFixedArity = 4;

cljs.js.compile_str_STAR_ = (function cljs$js$compile_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.call(null,source,(1),name);
var cb__$1 = cljs.js.trampoline_safe.call(null,cb);
var eof = {};
var aenv = cljs.analyzer.empty_env.call(null);
var sb = (new goog.string.StringBuffer());
var the_ns = (function (){var or__4047__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
}
})();
var bound_vars__$1 = (function (){var G__11950 = cljs.core.merge.call(null,bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.call(null,G__11950,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data.call(null));
} else {
return G__11950;
}
})();
return cljs.core.trampoline.call(null,((function (rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function cljs$js$compile_str_STAR__$_compile_loop(ns){
var _STAR_compiler_STAR__orig_val__11951 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR__orig_val__11952 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR__orig_val__11953 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__11954 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__11955 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__11956 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__11957 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR__orig_val__11958 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__11959 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__11960 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__11961 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_compiler_STAR__temp_val__11962 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_eval_fn_STAR__temp_val__11963 = new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__11964 = ns;
var _STAR_checked_arrays_STAR__temp_val__11965 = new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__11966 = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__11967 = (function (){var and__4036__auto__ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4036__auto__)){
return new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4036__auto__;
}
})();
var _STAR_ns_STAR__temp_val__11968 = cljs.core.create_ns.call(null,ns);
var _STAR_alias_map_STAR__temp_val__11969 = cljs.js.alias_map.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),ns);
var _STAR_data_readers_STAR__temp_val__11970 = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__11971 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__11972 = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__11962;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__temp_val__11963;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__11964;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__11965;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__11966;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__11967;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__11968;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__11969;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__11970;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__11971;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__11972;

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.js.read.call(null,eof,rdr)], null);
}catch (e11973){var cause = e11973;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv,["Could not compile ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cb__$1.call(null,res);
} else {
var form = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
if((!((eof === form)))){
var aenv__$1 = (function (){var G__11974 = cljs.core.assoc.call(null,aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_));
var G__11974__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.call(null,G__11974,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__11974);
if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.call(null,G__11974__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true);
} else {
return G__11974__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.analyzer.analyze.call(null,aenv__$1,form,null,opts)], null);
}catch (e11975){var cause = e11975;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv__$1,["Could not compile ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb__$1.call(null,res__$1);
} else {
var ast = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res__$1);
var vec__11976 = ((cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"nodejs","nodejs",321212524)))?(function (){var map__11979 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
var map__11979__$1 = (((((!((map__11979 == null))))?(((((map__11979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11979):map__11979);
var node_libs = cljs.core.get.call(null,map__11979__$1,true);
var libs_to_load = cljs.core.get.call(null,map__11979__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"deps","deps",1883360319),libs_to_load)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,ast], null));
var node_deps = cljs.core.nth.call(null,vec__11976,(0),null);
var ast__$1 = cljs.core.nth.call(null,vec__11976,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast__$1)))){
return cljs.js.trampoline_safe.call(null,cljs.js.ns_side_effects).call(null,bound_vars__$1,aenv__$1,ast__$1,opts,((function (ast,vec__11976,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__11951,_STAR_eval_fn_STAR__orig_val__11952,_STAR_cljs_ns_STAR__orig_val__11953,_STAR_checked_arrays_STAR__orig_val__11954,_STAR_cljs_static_fns_STAR__orig_val__11955,_STAR_fn_invoke_direct_STAR__orig_val__11956,_STAR_ns_STAR__orig_val__11957,_STAR_alias_map_STAR__orig_val__11958,_STAR_data_readers_STAR__orig_val__11959,resolve_symbol_orig_val__11960,_STAR_source_map_data_STAR__orig_val__11961,_STAR_compiler_STAR__temp_val__11962,_STAR_eval_fn_STAR__temp_val__11963,_STAR_cljs_ns_STAR__temp_val__11964,_STAR_checked_arrays_STAR__temp_val__11965,_STAR_cljs_static_fns_STAR__temp_val__11966,_STAR_fn_invoke_direct_STAR__temp_val__11967,_STAR_ns_STAR__temp_val__11968,_STAR_alias_map_STAR__temp_val__11969,_STAR_data_readers_STAR__temp_val__11970,resolve_symbol_temp_val__11971,_STAR_source_map_data_STAR__temp_val__11972,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return cb__$1.call(null,res__$2);
} else {
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast__$1);
sb.append((function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11981_11989 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11982_11990 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11983_11991 = true;
var _STAR_print_fn_STAR__temp_val__11984_11992 = ((function (_STAR_print_newline_STAR__orig_val__11981_11989,_STAR_print_fn_STAR__orig_val__11982_11990,_STAR_print_newline_STAR__temp_val__11983_11991,sb__4572__auto__,ns_name,ast,vec__11976,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__11951,_STAR_eval_fn_STAR__orig_val__11952,_STAR_cljs_ns_STAR__orig_val__11953,_STAR_checked_arrays_STAR__orig_val__11954,_STAR_cljs_static_fns_STAR__orig_val__11955,_STAR_fn_invoke_direct_STAR__orig_val__11956,_STAR_ns_STAR__orig_val__11957,_STAR_alias_map_STAR__orig_val__11958,_STAR_data_readers_STAR__orig_val__11959,resolve_symbol_orig_val__11960,_STAR_source_map_data_STAR__orig_val__11961,_STAR_compiler_STAR__temp_val__11962,_STAR_eval_fn_STAR__temp_val__11963,_STAR_cljs_ns_STAR__temp_val__11964,_STAR_checked_arrays_STAR__temp_val__11965,_STAR_cljs_static_fns_STAR__temp_val__11966,_STAR_fn_invoke_direct_STAR__temp_val__11967,_STAR_ns_STAR__temp_val__11968,_STAR_alias_map_STAR__temp_val__11969,_STAR_data_readers_STAR__temp_val__11970,resolve_symbol_temp_val__11971,_STAR_source_map_data_STAR__temp_val__11972,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__11981_11989,_STAR_print_fn_STAR__orig_val__11982_11990,_STAR_print_newline_STAR__temp_val__11983_11991,sb__4572__auto__,ns_name,ast,vec__11976,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__11951,_STAR_eval_fn_STAR__orig_val__11952,_STAR_cljs_ns_STAR__orig_val__11953,_STAR_checked_arrays_STAR__orig_val__11954,_STAR_cljs_static_fns_STAR__orig_val__11955,_STAR_fn_invoke_direct_STAR__orig_val__11956,_STAR_ns_STAR__orig_val__11957,_STAR_alias_map_STAR__orig_val__11958,_STAR_data_readers_STAR__orig_val__11959,resolve_symbol_orig_val__11960,_STAR_source_map_data_STAR__orig_val__11961,_STAR_compiler_STAR__temp_val__11962,_STAR_eval_fn_STAR__temp_val__11963,_STAR_cljs_ns_STAR__temp_val__11964,_STAR_checked_arrays_STAR__temp_val__11965,_STAR_cljs_static_fns_STAR__temp_val__11966,_STAR_fn_invoke_direct_STAR__temp_val__11967,_STAR_ns_STAR__temp_val__11968,_STAR_alias_map_STAR__temp_val__11969,_STAR_data_readers_STAR__temp_val__11970,resolve_symbol_temp_val__11971,_STAR_source_map_data_STAR__temp_val__11972,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11983_11991;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11984_11992;

try{cljs.compiler.emit.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res__$2));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11982_11990;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11981_11989;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
})());

if((node_deps == null)){
} else {
cljs.js.node_side_effects.call(null,bound_vars__$1,sb,node_deps,ns_name,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts));
}

return cljs.core.trampoline.call(null,cljs$js$compile_str_STAR__$_compile_loop,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast__$1));
}
});})(ast,vec__11976,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__11951,_STAR_eval_fn_STAR__orig_val__11952,_STAR_cljs_ns_STAR__orig_val__11953,_STAR_checked_arrays_STAR__orig_val__11954,_STAR_cljs_static_fns_STAR__orig_val__11955,_STAR_fn_invoke_direct_STAR__orig_val__11956,_STAR_ns_STAR__orig_val__11957,_STAR_alias_map_STAR__orig_val__11958,_STAR_data_readers_STAR__orig_val__11959,resolve_symbol_orig_val__11960,_STAR_source_map_data_STAR__orig_val__11961,_STAR_compiler_STAR__temp_val__11962,_STAR_eval_fn_STAR__temp_val__11963,_STAR_cljs_ns_STAR__temp_val__11964,_STAR_checked_arrays_STAR__temp_val__11965,_STAR_cljs_static_fns_STAR__temp_val__11966,_STAR_fn_invoke_direct_STAR__temp_val__11967,_STAR_ns_STAR__temp_val__11968,_STAR_alias_map_STAR__temp_val__11969,_STAR_data_readers_STAR__temp_val__11970,resolve_symbol_temp_val__11971,_STAR_source_map_data_STAR__temp_val__11972,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
);
} else {
sb.append((function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11985_11993 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11986_11994 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11987_11995 = true;
var _STAR_print_fn_STAR__temp_val__11988_11996 = ((function (_STAR_print_newline_STAR__orig_val__11985_11993,_STAR_print_fn_STAR__orig_val__11986_11994,_STAR_print_newline_STAR__temp_val__11987_11995,sb__4572__auto__,ast,vec__11976,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__11951,_STAR_eval_fn_STAR__orig_val__11952,_STAR_cljs_ns_STAR__orig_val__11953,_STAR_checked_arrays_STAR__orig_val__11954,_STAR_cljs_static_fns_STAR__orig_val__11955,_STAR_fn_invoke_direct_STAR__orig_val__11956,_STAR_ns_STAR__orig_val__11957,_STAR_alias_map_STAR__orig_val__11958,_STAR_data_readers_STAR__orig_val__11959,resolve_symbol_orig_val__11960,_STAR_source_map_data_STAR__orig_val__11961,_STAR_compiler_STAR__temp_val__11962,_STAR_eval_fn_STAR__temp_val__11963,_STAR_cljs_ns_STAR__temp_val__11964,_STAR_checked_arrays_STAR__temp_val__11965,_STAR_cljs_static_fns_STAR__temp_val__11966,_STAR_fn_invoke_direct_STAR__temp_val__11967,_STAR_ns_STAR__temp_val__11968,_STAR_alias_map_STAR__temp_val__11969,_STAR_data_readers_STAR__temp_val__11970,resolve_symbol_temp_val__11971,_STAR_source_map_data_STAR__temp_val__11972,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__11985_11993,_STAR_print_fn_STAR__orig_val__11986_11994,_STAR_print_newline_STAR__temp_val__11987_11995,sb__4572__auto__,ast,vec__11976,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__11951,_STAR_eval_fn_STAR__orig_val__11952,_STAR_cljs_ns_STAR__orig_val__11953,_STAR_checked_arrays_STAR__orig_val__11954,_STAR_cljs_static_fns_STAR__orig_val__11955,_STAR_fn_invoke_direct_STAR__orig_val__11956,_STAR_ns_STAR__orig_val__11957,_STAR_alias_map_STAR__orig_val__11958,_STAR_data_readers_STAR__orig_val__11959,resolve_symbol_orig_val__11960,_STAR_source_map_data_STAR__orig_val__11961,_STAR_compiler_STAR__temp_val__11962,_STAR_eval_fn_STAR__temp_val__11963,_STAR_cljs_ns_STAR__temp_val__11964,_STAR_checked_arrays_STAR__temp_val__11965,_STAR_cljs_static_fns_STAR__temp_val__11966,_STAR_fn_invoke_direct_STAR__temp_val__11967,_STAR_ns_STAR__temp_val__11968,_STAR_alias_map_STAR__temp_val__11969,_STAR_data_readers_STAR__temp_val__11970,resolve_symbol_temp_val__11971,_STAR_source_map_data_STAR__temp_val__11972,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11987_11995;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11988_11996;

try{cljs.compiler.emit.call(null,ast__$1);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11986_11994;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11985_11993;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
})());

return ((function (ast,vec__11976,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__11951,_STAR_eval_fn_STAR__orig_val__11952,_STAR_cljs_ns_STAR__orig_val__11953,_STAR_checked_arrays_STAR__orig_val__11954,_STAR_cljs_static_fns_STAR__orig_val__11955,_STAR_fn_invoke_direct_STAR__orig_val__11956,_STAR_ns_STAR__orig_val__11957,_STAR_alias_map_STAR__orig_val__11958,_STAR_data_readers_STAR__orig_val__11959,resolve_symbol_orig_val__11960,_STAR_source_map_data_STAR__orig_val__11961,_STAR_compiler_STAR__temp_val__11962,_STAR_eval_fn_STAR__temp_val__11963,_STAR_cljs_ns_STAR__temp_val__11964,_STAR_checked_arrays_STAR__temp_val__11965,_STAR_cljs_static_fns_STAR__temp_val__11966,_STAR_fn_invoke_direct_STAR__temp_val__11967,_STAR_ns_STAR__temp_val__11968,_STAR_alias_map_STAR__temp_val__11969,_STAR_data_readers_STAR__temp_val__11970,resolve_symbol_temp_val__11971,_STAR_source_map_data_STAR__temp_val__11972,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (){
return cljs$js$compile_str_STAR__$_compile_loop.call(null,ns);
});
;})(ast,vec__11976,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__11951,_STAR_eval_fn_STAR__orig_val__11952,_STAR_cljs_ns_STAR__orig_val__11953,_STAR_checked_arrays_STAR__orig_val__11954,_STAR_cljs_static_fns_STAR__orig_val__11955,_STAR_fn_invoke_direct_STAR__orig_val__11956,_STAR_ns_STAR__orig_val__11957,_STAR_alias_map_STAR__orig_val__11958,_STAR_data_readers_STAR__orig_val__11959,resolve_symbol_orig_val__11960,_STAR_source_map_data_STAR__orig_val__11961,_STAR_compiler_STAR__temp_val__11962,_STAR_eval_fn_STAR__temp_val__11963,_STAR_cljs_ns_STAR__temp_val__11964,_STAR_checked_arrays_STAR__temp_val__11965,_STAR_cljs_static_fns_STAR__temp_val__11966,_STAR_fn_invoke_direct_STAR__temp_val__11967,_STAR_ns_STAR__temp_val__11968,_STAR_alias_map_STAR__temp_val__11969,_STAR_data_readers_STAR__temp_val__11970,resolve_symbol_temp_val__11971,_STAR_source_map_data_STAR__temp_val__11972,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
}
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.append_source_map.call(null,cljs.env._STAR_compiler_STAR_,name,source,sb,cljs.core.deref.call(null,cljs.compiler._STAR_source_map_data_STAR_),opts);
} else {
}

return cb__$1.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),sb.toString()], null));
}
}
}finally {cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__11961;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__11960;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__11959;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__11958;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__11957;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__11956;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__11955;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__11954;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__11953;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__orig_val__11952;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__11951;
}});})(rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
,the_ns);
});
/**
 * Compile ClojureScript source into JavaScript. The parameters:
 * 
 * state (atom)
 *   the compiler state
 * 
 * source (string)
 *   the ClojureScript source
 * 
 * name (symbol or string)
 *   optional, the name of the source - used as key in :source-maps
 * 
 * opts (map)
 *   compilation options.
 * 
 *    :eval             - eval function to invoke, see *eval-fn*
 *    :load             - library resolution function, see *load-fn*
 *    :source-map       - set to true to generate inline source map information
 *    :def-emits-var    - sets whether def (and derived) forms return either a Var
 *                        (if set to true) or the def init value (if false). Default
 *                        is false.
 *    :checked-arrays   - if :warn or :error, checks inferred types and values passed
 *                        to aget/aset. Logs for incorrect values if :warn, throws if
 *                        :error. Defaults to false.
 *    :static-fns       - employ static dispatch to specific function arities in
 *                        emitted JavaScript, as opposed to making use of the
 *                        `call` construct. Defaults to false.
 *    :fn-invoke-direct - if `true`, does not generate `.call(null...)` calls for
 *                        unknown functions, but instead direct invokes via
 *                        `f(a0,a1...)`. Defaults to `false`.
 *    :target           - use `:nodejs` if targeting Node.js. Takes no other options
 *                        at the moment.
 *    :ns               - optional, the namespace in which to evaluate the source.
 *    :verbose          - optional, emit details from compiler activity. Defaults to
 *                        false.
 *    :context          - optional, sets the context for the source. Possible values
 *                        are `:expr`, `:statement` and `:return`. Defaults to
 *                        `:expr`.
 * 
 * cb (function)
 *   callback, will be invoked with a map. If successful the map will contain
 *   a key :value with the compilation result (string). If unsuccessful the map
 *   will contain a key :error with an ex-info instance describing the cause
 *   of failure.
 */
cljs.js.compile_str = (function cljs$js$compile_str(var_args){
var G__11998 = arguments.length;
switch (G__11998) {
case 3:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.compile_str.call(null,state,source,null,cb);
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.compile_str.call(null,state,source,name,null,cb);
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){
if(cljs.js.atom_QMARK_.call(null,state)){
} else {
throw (new Error("Assert failed: (atom? state)"));
}

if(typeof source === 'string'){
} else {
throw (new Error("Assert failed: (string? source)"));
}

if(cljs.js.valid_name_QMARK_.call(null,name)){
} else {
throw (new Error("Assert failed: (valid-name? name)"));
}

if(cljs.js.valid_opts_QMARK_.call(null,opts)){
} else {
throw (new Error("Assert failed: (valid-opts? opts)"));
}

if(cljs.core.fn_QMARK_.call(null,cb)){
} else {
throw (new Error("Assert failed: (fn? cb)"));
}

return cljs.js.compile_str_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),state,new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469),cljs.tagged_literals._STAR_cljs_data_readers_STAR_,new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_,new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427),new cljs.core.Keyword(null,"analyze-deps","analyze-deps",1000677285).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006),new cljs.core.Keyword(null,"load-macros","load-macros",459797395).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106),(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128),(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))?cljs.js.sm_data.call(null):null)], null),source,name,opts,cb);
});

cljs.js.compile_str.cljs$lang$maxFixedArity = 5;

cljs.js.eval_str_STAR_ = (function cljs$js$eval_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.call(null,source,(1),name);
var cb__$1 = cljs.js.trampoline_safe.call(null,cb);
var eof = {};
var aenv = cljs.analyzer.empty_env.call(null);
var sb = (new goog.string.StringBuffer());
var the_ns = (function (){var or__4047__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
}
})();
var bound_vars__$1 = (function (){var G__12002 = cljs.core.merge.call(null,bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.call(null,G__12002,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data.call(null));
} else {
return G__12002;
}
})();
var aname = (function (){var G__12003 = name;
if(cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.analyzer.macro_ns_name.call(null,G__12003);
} else {
return G__12003;
}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Evaluating",name);
} else {
}

cljs.js.clear_fns_BANG_.call(null);

return cljs.core.trampoline.call(null,((function (rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function cljs$js$eval_str_STAR__$_compile_loop(ns){
var _STAR_compiler_STAR__orig_val__12004 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR__orig_val__12005 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR__orig_val__12006 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__12007 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__12008 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__12009 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__12010 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR__orig_val__12011 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__12012 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__12013 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__12014 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_cljs_file_STAR__orig_val__12015 = cljs.analyzer._STAR_cljs_file_STAR_;
var _STAR_compiler_STAR__temp_val__12016 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_eval_fn_STAR__temp_val__12017 = new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__12018 = ns;
var _STAR_checked_arrays_STAR__temp_val__12019 = new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__12020 = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__12021 = (function (){var and__4036__auto__ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4036__auto__)){
return new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4036__auto__;
}
})();
var _STAR_ns_STAR__temp_val__12022 = cljs.core.create_ns.call(null,ns);
var _STAR_alias_map_STAR__temp_val__12023 = cljs.js.alias_map.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),ns);
var _STAR_data_readers_STAR__temp_val__12024 = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__12025 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__12026 = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_file_STAR__temp_val__12027 = new cljs.core.Keyword(null,"cljs-file","cljs-file",-1499001049).cljs$core$IFn$_invoke$arity$1(opts);
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__12016;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__temp_val__12017;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__12018;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__12019;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__12020;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__12021;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__12022;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__12023;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__12024;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__12025;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__12026;

cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__temp_val__12027;

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.js.read.call(null,eof,rdr)], null);
}catch (e12028){var cause = e12028;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv,["Could not eval ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cb__$1.call(null,res);
} else {
var form = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
if((!((eof === form)))){
var aenv__$1 = (function (){var G__12029 = cljs.core.assoc.call(null,aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,ns));
var G__12029__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.call(null,G__12029,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__12029);
if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.call(null,G__12029__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true);
} else {
return G__12029__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.analyzer.analyze.call(null,aenv__$1,form,null,opts)], null);
}catch (e12030){var cause = e12030;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv__$1,["Could not eval ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb__$1.call(null,res__$1);
} else {
var ast = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res__$1);
var ns_SINGLEQUOTE_ = cljs.analyzer._STAR_cljs_ns_STAR_;
var vec__12031 = ((cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"nodejs","nodejs",321212524)))?(function (){var map__12034 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
var map__12034__$1 = (((((!((map__12034 == null))))?(((((map__12034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12034):map__12034);
var node_libs = cljs.core.get.call(null,map__12034__$1,true);
var libs_to_load = cljs.core.get.call(null,map__12034__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"deps","deps",1883360319),libs_to_load)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,ast], null));
var node_deps = cljs.core.nth.call(null,vec__12031,(0),null);
var ast__$1 = cljs.core.nth.call(null,vec__12031,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast__$1)))){
sb.append((function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__12036_12047 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__12037_12048 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__12038_12049 = true;
var _STAR_print_fn_STAR__temp_val__12039_12050 = ((function (_STAR_print_newline_STAR__orig_val__12036_12047,_STAR_print_fn_STAR__orig_val__12037_12048,_STAR_print_newline_STAR__temp_val__12038_12049,sb__4572__auto__,ast,ns_SINGLEQUOTE_,vec__12031,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__12004,_STAR_eval_fn_STAR__orig_val__12005,_STAR_cljs_ns_STAR__orig_val__12006,_STAR_checked_arrays_STAR__orig_val__12007,_STAR_cljs_static_fns_STAR__orig_val__12008,_STAR_fn_invoke_direct_STAR__orig_val__12009,_STAR_ns_STAR__orig_val__12010,_STAR_alias_map_STAR__orig_val__12011,_STAR_data_readers_STAR__orig_val__12012,resolve_symbol_orig_val__12013,_STAR_source_map_data_STAR__orig_val__12014,_STAR_cljs_file_STAR__orig_val__12015,_STAR_compiler_STAR__temp_val__12016,_STAR_eval_fn_STAR__temp_val__12017,_STAR_cljs_ns_STAR__temp_val__12018,_STAR_checked_arrays_STAR__temp_val__12019,_STAR_cljs_static_fns_STAR__temp_val__12020,_STAR_fn_invoke_direct_STAR__temp_val__12021,_STAR_ns_STAR__temp_val__12022,_STAR_alias_map_STAR__temp_val__12023,_STAR_data_readers_STAR__temp_val__12024,resolve_symbol_temp_val__12025,_STAR_source_map_data_STAR__temp_val__12026,_STAR_cljs_file_STAR__temp_val__12027,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__12036_12047,_STAR_print_fn_STAR__orig_val__12037_12048,_STAR_print_newline_STAR__temp_val__12038_12049,sb__4572__auto__,ast,ns_SINGLEQUOTE_,vec__12031,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__12004,_STAR_eval_fn_STAR__orig_val__12005,_STAR_cljs_ns_STAR__orig_val__12006,_STAR_checked_arrays_STAR__orig_val__12007,_STAR_cljs_static_fns_STAR__orig_val__12008,_STAR_fn_invoke_direct_STAR__orig_val__12009,_STAR_ns_STAR__orig_val__12010,_STAR_alias_map_STAR__orig_val__12011,_STAR_data_readers_STAR__orig_val__12012,resolve_symbol_orig_val__12013,_STAR_source_map_data_STAR__orig_val__12014,_STAR_cljs_file_STAR__orig_val__12015,_STAR_compiler_STAR__temp_val__12016,_STAR_eval_fn_STAR__temp_val__12017,_STAR_cljs_ns_STAR__temp_val__12018,_STAR_checked_arrays_STAR__temp_val__12019,_STAR_cljs_static_fns_STAR__temp_val__12020,_STAR_fn_invoke_direct_STAR__temp_val__12021,_STAR_ns_STAR__temp_val__12022,_STAR_alias_map_STAR__temp_val__12023,_STAR_data_readers_STAR__temp_val__12024,resolve_symbol_temp_val__12025,_STAR_source_map_data_STAR__temp_val__12026,_STAR_cljs_file_STAR__temp_val__12027,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__12038_12049;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__12039_12050;

try{cljs.compiler.emitln.call(null,["goog.provide(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast__$1))),"\");"].join(''));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__12037_12048;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__12036_12047;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
})());

return cljs.js.trampoline_safe.call(null,cljs.js.ns_side_effects).call(null,true,bound_vars__$1,aenv__$1,ast__$1,opts,((function (ast,ns_SINGLEQUOTE_,vec__12031,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__12004,_STAR_eval_fn_STAR__orig_val__12005,_STAR_cljs_ns_STAR__orig_val__12006,_STAR_checked_arrays_STAR__orig_val__12007,_STAR_cljs_static_fns_STAR__orig_val__12008,_STAR_fn_invoke_direct_STAR__orig_val__12009,_STAR_ns_STAR__orig_val__12010,_STAR_alias_map_STAR__orig_val__12011,_STAR_data_readers_STAR__orig_val__12012,resolve_symbol_orig_val__12013,_STAR_source_map_data_STAR__orig_val__12014,_STAR_cljs_file_STAR__orig_val__12015,_STAR_compiler_STAR__temp_val__12016,_STAR_eval_fn_STAR__temp_val__12017,_STAR_cljs_ns_STAR__temp_val__12018,_STAR_checked_arrays_STAR__temp_val__12019,_STAR_cljs_static_fns_STAR__temp_val__12020,_STAR_fn_invoke_direct_STAR__temp_val__12021,_STAR_ns_STAR__temp_val__12022,_STAR_alias_map_STAR__temp_val__12023,_STAR_data_readers_STAR__temp_val__12024,resolve_symbol_temp_val__12025,_STAR_source_map_data_STAR__temp_val__12026,_STAR_cljs_file_STAR__temp_val__12027,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return cb__$1.call(null,res__$2);
} else {
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast__$1);
if((node_deps == null)){
} else {
cljs.js.node_side_effects.call(null,bound_vars__$1,sb,node_deps,ns_name,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts));
}

cljs.js.global_exports_side_effects.call(null,bound_vars__$1,sb,cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast__$1)),ns_name,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts));

return cljs.core.trampoline.call(null,cljs$js$eval_str_STAR__$_compile_loop,ns_SINGLEQUOTE_);
}
});})(ast,ns_SINGLEQUOTE_,vec__12031,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__12004,_STAR_eval_fn_STAR__orig_val__12005,_STAR_cljs_ns_STAR__orig_val__12006,_STAR_checked_arrays_STAR__orig_val__12007,_STAR_cljs_static_fns_STAR__orig_val__12008,_STAR_fn_invoke_direct_STAR__orig_val__12009,_STAR_ns_STAR__orig_val__12010,_STAR_alias_map_STAR__orig_val__12011,_STAR_data_readers_STAR__orig_val__12012,resolve_symbol_orig_val__12013,_STAR_source_map_data_STAR__orig_val__12014,_STAR_cljs_file_STAR__orig_val__12015,_STAR_compiler_STAR__temp_val__12016,_STAR_eval_fn_STAR__temp_val__12017,_STAR_cljs_ns_STAR__temp_val__12018,_STAR_checked_arrays_STAR__temp_val__12019,_STAR_cljs_static_fns_STAR__temp_val__12020,_STAR_fn_invoke_direct_STAR__temp_val__12021,_STAR_ns_STAR__temp_val__12022,_STAR_alias_map_STAR__temp_val__12023,_STAR_data_readers_STAR__temp_val__12024,resolve_symbol_temp_val__12025,_STAR_source_map_data_STAR__temp_val__12026,_STAR_cljs_file_STAR__temp_val__12027,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
);
} else {
var env__5815__auto___12051 = cljs.core.assoc.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),new cljs.core.Keyword(null,"options","options",99638489),opts);
var env__5815__auto___12052__$1 = ((cljs.core.map_QMARK_.call(null,env__5815__auto___12051))?cljs.core.atom.call(null,env__5815__auto___12051):(((((env__5815__auto___12051 instanceof cljs.core.Atom)) && (cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,env__5815__auto___12051)))))?env__5815__auto___12051:(function(){throw (new Error(["Compiler environment must be a map or atom containing a map, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,env__5815__auto___12051))].join('')))})()
));
var _STAR_compiler_STAR__orig_val__12040_12053 = cljs.env._STAR_compiler_STAR_;
var _STAR_compiler_STAR__temp_val__12041_12054 = env__5815__auto___12052__$1;
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__12041_12054;

try{sb.append((function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__12042_12055 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__12043_12056 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__12044_12057 = true;
var _STAR_print_fn_STAR__temp_val__12045_12058 = ((function (_STAR_print_newline_STAR__orig_val__12042_12055,_STAR_print_fn_STAR__orig_val__12043_12056,_STAR_print_newline_STAR__temp_val__12044_12057,sb__4572__auto__,_STAR_compiler_STAR__orig_val__12040_12053,_STAR_compiler_STAR__temp_val__12041_12054,env__5815__auto___12051,env__5815__auto___12052__$1,ast,ns_SINGLEQUOTE_,vec__12031,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__12004,_STAR_eval_fn_STAR__orig_val__12005,_STAR_cljs_ns_STAR__orig_val__12006,_STAR_checked_arrays_STAR__orig_val__12007,_STAR_cljs_static_fns_STAR__orig_val__12008,_STAR_fn_invoke_direct_STAR__orig_val__12009,_STAR_ns_STAR__orig_val__12010,_STAR_alias_map_STAR__orig_val__12011,_STAR_data_readers_STAR__orig_val__12012,resolve_symbol_orig_val__12013,_STAR_source_map_data_STAR__orig_val__12014,_STAR_cljs_file_STAR__orig_val__12015,_STAR_compiler_STAR__temp_val__12016,_STAR_eval_fn_STAR__temp_val__12017,_STAR_cljs_ns_STAR__temp_val__12018,_STAR_checked_arrays_STAR__temp_val__12019,_STAR_cljs_static_fns_STAR__temp_val__12020,_STAR_fn_invoke_direct_STAR__temp_val__12021,_STAR_ns_STAR__temp_val__12022,_STAR_alias_map_STAR__temp_val__12023,_STAR_data_readers_STAR__temp_val__12024,resolve_symbol_temp_val__12025,_STAR_source_map_data_STAR__temp_val__12026,_STAR_cljs_file_STAR__temp_val__12027,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__12042_12055,_STAR_print_fn_STAR__orig_val__12043_12056,_STAR_print_newline_STAR__temp_val__12044_12057,sb__4572__auto__,_STAR_compiler_STAR__orig_val__12040_12053,_STAR_compiler_STAR__temp_val__12041_12054,env__5815__auto___12051,env__5815__auto___12052__$1,ast,ns_SINGLEQUOTE_,vec__12031,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__12004,_STAR_eval_fn_STAR__orig_val__12005,_STAR_cljs_ns_STAR__orig_val__12006,_STAR_checked_arrays_STAR__orig_val__12007,_STAR_cljs_static_fns_STAR__orig_val__12008,_STAR_fn_invoke_direct_STAR__orig_val__12009,_STAR_ns_STAR__orig_val__12010,_STAR_alias_map_STAR__orig_val__12011,_STAR_data_readers_STAR__orig_val__12012,resolve_symbol_orig_val__12013,_STAR_source_map_data_STAR__orig_val__12014,_STAR_cljs_file_STAR__orig_val__12015,_STAR_compiler_STAR__temp_val__12016,_STAR_eval_fn_STAR__temp_val__12017,_STAR_cljs_ns_STAR__temp_val__12018,_STAR_checked_arrays_STAR__temp_val__12019,_STAR_cljs_static_fns_STAR__temp_val__12020,_STAR_fn_invoke_direct_STAR__temp_val__12021,_STAR_ns_STAR__temp_val__12022,_STAR_alias_map_STAR__temp_val__12023,_STAR_data_readers_STAR__temp_val__12024,resolve_symbol_temp_val__12025,_STAR_source_map_data_STAR__temp_val__12026,_STAR_cljs_file_STAR__temp_val__12027,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__12044_12057;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__12045_12058;

try{cljs.compiler.emit.call(null,ast__$1);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__12043_12056;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__12042_12055;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
})());
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__12040_12053;
}
return ((function (ast,ns_SINGLEQUOTE_,vec__12031,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__12004,_STAR_eval_fn_STAR__orig_val__12005,_STAR_cljs_ns_STAR__orig_val__12006,_STAR_checked_arrays_STAR__orig_val__12007,_STAR_cljs_static_fns_STAR__orig_val__12008,_STAR_fn_invoke_direct_STAR__orig_val__12009,_STAR_ns_STAR__orig_val__12010,_STAR_alias_map_STAR__orig_val__12011,_STAR_data_readers_STAR__orig_val__12012,resolve_symbol_orig_val__12013,_STAR_source_map_data_STAR__orig_val__12014,_STAR_cljs_file_STAR__orig_val__12015,_STAR_compiler_STAR__temp_val__12016,_STAR_eval_fn_STAR__temp_val__12017,_STAR_cljs_ns_STAR__temp_val__12018,_STAR_checked_arrays_STAR__temp_val__12019,_STAR_cljs_static_fns_STAR__temp_val__12020,_STAR_fn_invoke_direct_STAR__temp_val__12021,_STAR_ns_STAR__temp_val__12022,_STAR_alias_map_STAR__temp_val__12023,_STAR_data_readers_STAR__temp_val__12024,resolve_symbol_temp_val__12025,_STAR_source_map_data_STAR__temp_val__12026,_STAR_cljs_file_STAR__temp_val__12027,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (){
return cljs$js$eval_str_STAR__$_compile_loop.call(null,ns_SINGLEQUOTE_);
});
;})(ast,ns_SINGLEQUOTE_,vec__12031,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__12004,_STAR_eval_fn_STAR__orig_val__12005,_STAR_cljs_ns_STAR__orig_val__12006,_STAR_checked_arrays_STAR__orig_val__12007,_STAR_cljs_static_fns_STAR__orig_val__12008,_STAR_fn_invoke_direct_STAR__orig_val__12009,_STAR_ns_STAR__orig_val__12010,_STAR_alias_map_STAR__orig_val__12011,_STAR_data_readers_STAR__orig_val__12012,resolve_symbol_orig_val__12013,_STAR_source_map_data_STAR__orig_val__12014,_STAR_cljs_file_STAR__orig_val__12015,_STAR_compiler_STAR__temp_val__12016,_STAR_eval_fn_STAR__temp_val__12017,_STAR_cljs_ns_STAR__temp_val__12018,_STAR_checked_arrays_STAR__temp_val__12019,_STAR_cljs_static_fns_STAR__temp_val__12020,_STAR_fn_invoke_direct_STAR__temp_val__12021,_STAR_ns_STAR__temp_val__12022,_STAR_alias_map_STAR__temp_val__12023,_STAR_data_readers_STAR__temp_val__12024,resolve_symbol_temp_val__12025,_STAR_source_map_data_STAR__temp_val__12026,_STAR_cljs_file_STAR__temp_val__12027,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
}
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.append_source_map.call(null,cljs.env._STAR_compiler_STAR_,aname,source,sb,cljs.core.deref.call(null,cljs.compiler._STAR_source_map_data_STAR_),opts);
} else {
}

if((aname instanceof cljs.core.Symbol)){
cljs.analyzer.dump_specs.call(null,aname);
} else {
}

var js_source = sb.toString();
var evalm = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"path","path",-188191168),cljs.js.ns__GT_relpath.call(null,name),new cljs.core.Keyword(null,"source","source",-433931539),js_source,new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),aname], null))], null);
var complete = ((function (js_source,evalm,form,res,_STAR_compiler_STAR__orig_val__12004,_STAR_eval_fn_STAR__orig_val__12005,_STAR_cljs_ns_STAR__orig_val__12006,_STAR_checked_arrays_STAR__orig_val__12007,_STAR_cljs_static_fns_STAR__orig_val__12008,_STAR_fn_invoke_direct_STAR__orig_val__12009,_STAR_ns_STAR__orig_val__12010,_STAR_alias_map_STAR__orig_val__12011,_STAR_data_readers_STAR__orig_val__12012,resolve_symbol_orig_val__12013,_STAR_source_map_data_STAR__orig_val__12014,_STAR_cljs_file_STAR__orig_val__12015,_STAR_compiler_STAR__temp_val__12016,_STAR_eval_fn_STAR__temp_val__12017,_STAR_cljs_ns_STAR__temp_val__12018,_STAR_checked_arrays_STAR__temp_val__12019,_STAR_cljs_static_fns_STAR__temp_val__12020,_STAR_fn_invoke_direct_STAR__temp_val__12021,_STAR_ns_STAR__temp_val__12022,_STAR_alias_map_STAR__temp_val__12023,_STAR_data_readers_STAR__temp_val__12024,resolve_symbol_temp_val__12025,_STAR_source_map_data_STAR__temp_val__12026,_STAR_cljs_file_STAR__temp_val__12027,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb__$1.call(null,res__$1);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,js_source);
} else {
}

var res__$2 = (function (){try{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"value","value",305978217),cljs.js._STAR_eval_fn_STAR_.call(null,evalm)], null);
}catch (e12046){var cause = e12046;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv,"ERROR",cause));
}})();
return cb__$1.call(null,res__$2);
}
});})(js_source,evalm,form,res,_STAR_compiler_STAR__orig_val__12004,_STAR_eval_fn_STAR__orig_val__12005,_STAR_cljs_ns_STAR__orig_val__12006,_STAR_checked_arrays_STAR__orig_val__12007,_STAR_cljs_static_fns_STAR__orig_val__12008,_STAR_fn_invoke_direct_STAR__orig_val__12009,_STAR_ns_STAR__orig_val__12010,_STAR_alias_map_STAR__orig_val__12011,_STAR_data_readers_STAR__orig_val__12012,resolve_symbol_orig_val__12013,_STAR_source_map_data_STAR__orig_val__12014,_STAR_cljs_file_STAR__orig_val__12015,_STAR_compiler_STAR__temp_val__12016,_STAR_eval_fn_STAR__temp_val__12017,_STAR_cljs_ns_STAR__temp_val__12018,_STAR_checked_arrays_STAR__temp_val__12019,_STAR_cljs_static_fns_STAR__temp_val__12020,_STAR_fn_invoke_direct_STAR__temp_val__12021,_STAR_ns_STAR__temp_val__12022,_STAR_alias_map_STAR__temp_val__12023,_STAR_data_readers_STAR__temp_val__12024,resolve_symbol_temp_val__12025,_STAR_source_map_data_STAR__temp_val__12026,_STAR_cljs_file_STAR__temp_val__12027,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;
var temp__5733__auto__ = new cljs.core.Keyword(null,"cache-source","cache-source",-190922003).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5733__auto__)){
var f = temp__5733__auto__;
return cljs.js.trampoline_safe.call(null,f).call(null,evalm,complete);
} else {
return complete.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null));
}
}
}
}finally {cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__orig_val__12015;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__12014;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__12013;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__12012;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__12011;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__12010;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__12009;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__12008;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__12007;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__12006;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__orig_val__12005;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__12004;
}});})(rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
,new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432).cljs$core$IFn$_invoke$arity$1(bound_vars__$1));
});
/**
 * Evalute ClojureScript source given as a string. The parameters:
 * 
 *   state (atom)
 *  the compiler state
 * 
 *   source (string)
 *  the ClojureScript source
 * 
 *   name (symbol or string)
 *  optional, the name of the source - used as key in :source-maps
 * 
 *   opts (map)
 *  compilation options.
 * 
 *  :eval             - eval function to invoke, see *eval-fn*
 *  :load             - library resolution function, see *load-fn*
 *  :source-map       - set to true to generate inline source map information
 *  :cache-source     - optional, a function to run side-effects with the
 *                      compilation result prior to actual evalution. This function
 *                      takes two arguments, the first is the eval map, the source
 *                      will be under :source. The second argument is a callback of
 *                      one argument. If an error occurs an :error key should be
 *                      supplied.
 *  :def-emits-var    - sets whether def (and derived) forms return either a Var
 *                      (if set to true) or the def init value (if false). Default
 *                      is false.
 *  :checked-arrays   - if :warn or :error, checks inferred types and values passed
 *                      to aget/aset. Logs for incorrect values if :warn, throws if
 *                      :error. Defaults to false.
 *  :static-fns       - employ static dispatch to specific function arities in
 *                      emitted JavaScript, as opposed to making use of the
 *                      `call` construct. Defaults to false.
 *  :fn-invoke-direct - if `true`, does not generate `.call(null...)` calls for
 *                      unknown functions, but instead direct invokes via
 *                      `f(a0,a1...)`. Defaults to `false`.
 *  :target           - use `:nodejs` if targeting Node.js. Takes no other options
 *                      at the moment.
 *  :ns               - optional, the namespace in which to evaluate the source.
 *  :verbose          - optional, emit details from compiler activity. Defaults to
 *                      false.
 *  :context          - optional, sets the context for the source. Possible values
 *                   are `:expr`, `:statement` and `:return`. Defaults to
 *                    `:expr`.
 * 
 *   cb (function)
 *  callback, will be invoked with a map. If succesful the map will contain
 *  a :value key with the result of evaluation and :ns the current namespace.
 *  If unsuccessful will contain a :error key with an ex-info instance describing
 *  the cause of failure.
 */
cljs.js.eval_str = (function cljs$js$eval_str(var_args){
var G__12060 = arguments.length;
switch (G__12060) {
case 3:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.eval_str.call(null,state,source,null,cb);
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.eval_str.call(null,state,source,name,null,cb);
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){
if(cljs.js.atom_QMARK_.call(null,state)){
} else {
throw (new Error("Assert failed: (atom? state)"));
}

if(typeof source === 'string'){
} else {
throw (new Error("Assert failed: (string? source)"));
}

if(cljs.js.valid_name_QMARK_.call(null,name)){
} else {
throw (new Error("Assert failed: (valid-name? name)"));
}

if(cljs.js.valid_opts_QMARK_.call(null,opts)){
} else {
throw (new Error("Assert failed: (valid-opts? opts)"));
}

if(cljs.core.fn_QMARK_.call(null,cb)){
} else {
throw (new Error("Assert failed: (fn? cb)"));
}

return cljs.js.eval_str_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),state,new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469),cljs.tagged_literals._STAR_cljs_data_readers_STAR_,new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427),new cljs.core.Keyword(null,"analyze-deps","analyze-deps",1000677285).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_,new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006),new cljs.core.Keyword(null,"load-macros","load-macros",459797395).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106),(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128),(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),source,name,opts,cb);
});

cljs.js.eval_str.cljs$lang$maxFixedArity = 5;

if((typeof cljs !== 'undefined') && (typeof cljs.js !== 'undefined') && (typeof cljs.js.fn_index !== 'undefined')){
} else {
cljs.js.fn_index = cljs.core.volatile_BANG_.call(null,(0));
}
if((typeof cljs !== 'undefined') && (typeof cljs.js !== 'undefined') && (typeof cljs.js.fn_refs !== 'undefined')){
} else {
cljs.js.fn_refs = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Clears saved functions.
 */
cljs.js.clear_fns_BANG_ = (function cljs$js$clear_fns_BANG_(){
return cljs.core.vreset_BANG_.call(null,cljs.js.fn_refs,cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Saves a function, returning a numeric representation.
 */
cljs.js.put_fn = (function cljs$js$put_fn(f){
var n = cljs.core._vreset_BANG_.call(null,cljs.js.fn_index,(cljs.core._deref.call(null,cljs.js.fn_index) + (1)));
cljs.core._vreset_BANG_.call(null,cljs.js.fn_refs,cljs.core.assoc.call(null,cljs.core._deref.call(null,cljs.js.fn_refs),n,f));

return n;
});
/**
 * Gets a function, given its numeric representation.
 */
cljs.js.get_fn = (function cljs$js$get_fn(n){
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.js.fn_refs),n);
});
cljs.js.emit_fn = (function cljs$js$emit_fn(f){
return cljs.core.print.call(null,"cljs.js.get_fn(",cljs.js.put_fn.call(null,f),")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Function,(function (f){
return cljs.js.emit_fn.call(null,f);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.Var,(function (f){
return cljs.js.emit_fn.call(null,f);
}));
cljs.js.eval_impl = (function cljs$js$eval_impl(var_args){
var G__12063 = arguments.length;
switch (G__12063) {
case 1:
return cljs.js.eval_impl.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.js.eval_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.eval_impl.cljs$core$IFn$_invoke$arity$1 = (function (form){
return cljs.js.eval_impl.call(null,form,cljs.core._STAR_ns_STAR_.name);
});

cljs.js.eval_impl.cljs$core$IFn$_invoke$arity$2 = (function (form,ns){
var result = cljs.core.atom.call(null,null);
var st_12068 = cljs.env._STAR_compiler_STAR_;
cljs.js.eval.call(null,st_12068,form,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true], null),((function (st_12068,result){
return (function (p__12064){
var map__12065 = p__12064;
var map__12065__$1 = (((((!((map__12065 == null))))?(((((map__12065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12065):map__12065);
var value = cljs.core.get.call(null,map__12065__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__12065__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(error)){
throw error;
} else {
return cljs.core.reset_BANG_.call(null,result,value);
}
});})(st_12068,result))
);

return cljs.core.deref.call(null,result);
});

cljs.js.eval_impl.cljs$lang$maxFixedArity = 2;

cljs.core._STAR_eval_STAR_ = cljs.js.eval_impl;

//# sourceMappingURL=js.js.map