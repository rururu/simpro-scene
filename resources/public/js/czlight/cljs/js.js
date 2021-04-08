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
var len__4641__auto___9530 = arguments.length;
var i__4642__auto___9531 = (0);
while(true){
if((i__4642__auto___9531 < len__4641__auto___9530)){
args__4647__auto__.push((arguments[i__4642__auto___9531]));

var G__9532 = (i__4642__auto___9531 + (1));
i__4642__auto___9531 = G__9532;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var _STAR_print_fn_STAR__orig_val__9528 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__9529 = cljs.core._STAR_print_err_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__9529;

try{return cljs.core.apply.call(null,cljs.core.println,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__9528;
}});

cljs.js.debug_prn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.js.debug_prn.cljs$lang$applyTo = (function (seq9527){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9527));
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
var _STAR_ns_STAR__orig_val__9533 = cljs.core._STAR_ns_STAR_;
var _STAR_ns_STAR__temp_val__9534 = cljs.core.symbol.call(null,cljs.js.drop_macros_suffix.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_)));
cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__9534;

try{return cljs.tools.reader.read.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eof","eof",-489063237),eof,new cljs.core.Keyword(null,"read-cond","read-cond",1056899244),new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs","cljs",1492417629),null], null), null)], null),rdr);
}finally {cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__9533;
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
cljs.js.js_eval = (function cljs$js$js_eval(p__9535){
var map__9536 = p__9535;
var map__9536__$1 = (((((!((map__9536 == null))))?(((((map__9536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9536):map__9536);
var resource = map__9536__$1;
var source = cljs.core.get.call(null,map__9536__$1,new cljs.core.Keyword(null,"source","source",-433931539));
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
var G__9539 = arguments.length;
switch (G__9539) {
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
var G__9540 = cljs.env.default_compiler_env.call(null);
cljs.core.swap_BANG_.call(null,G__9540,((function (G__9540){
return (function (state){
});})(G__9540))
);

return G__9540;
});

cljs.js.empty_state.cljs$core$IFn$_invoke$arity$1 = (function (init){
var G__9541 = cljs.js.empty_state.call(null);
cljs.core.swap_BANG_.call(null,G__9541,init);

return G__9541;
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
cljs.js.append_source_map = (function cljs$js$append_source_map(state,name,source,sb,sm_data,p__9543){
var map__9544 = p__9543;
var map__9544__$1 = (((((!((map__9544 == null))))?(((((map__9544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9544):map__9544);
var opts = map__9544__$1;
var output_dir = cljs.core.get.call(null,map__9544__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var asset_path = cljs.core.get.call(null,map__9544__$1,new cljs.core.Keyword(null,"asset-path","asset-path",1500889617));
var source_map_timestamp = cljs.core.get.call(null,map__9544__$1,new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633));
var t = (new Date()).valueOf();
var mn = (cljs.core.truth_(name)?cljs.core.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)):["cljs-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''));
var smn = (function (){var G__9546 = mn;
if(cljs.core.truth_(name)){
return clojure.string.replace.call(null,G__9546,".","/");
} else {
return G__9546;
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
var src = (function (){var G__9547 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(smn),".cljs"].join('');
var G__9547__$1 = ((source_map_timestamp === true)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9547),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join(''):G__9547);
if(cljs.core.truth_(out)){
return cljs.js.prefix.call(null,G__9547__$1,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(out),"/"].join(''));
} else {
return G__9547__$1;
}
})();
var file = (function (){var G__9548 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(smn),".js"].join('');
var G__9548__$1 = ((source_map_timestamp === true)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9548),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join(''):G__9548);
if(cljs.core.truth_(out)){
return cljs.js.prefix.call(null,G__9548__$1,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(out),"/"].join(''));
} else {
return G__9548__$1;
}
})();
var json = cljs.source_map.encode.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([src,new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(sm_data)]),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lines","lines",-700165781),(new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(sm_data) + (3)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,json);
} else {
}

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-maps","source-maps",-552851697),cljs.core.symbol.call(null,mn)], null),cljs.source_map.invert_reverse_map.call(null,new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(sm_data)));

return sb.append(["\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"\n//# sourceMappingURL=data:application/json;base64,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.crypt.base64.encodeString(clojure.string.replace.call(null,encodeURIComponent(json),/%([0-9A-F]{2})/,((function (t,mn,smn,ts,out,src,file,json,map__9544,map__9544__$1,opts,output_dir,asset_path,source_map_timestamp){
return (function (p__9549){
var vec__9550 = p__9549;
var _ = cljs.core.nth.call(null,vec__9550,(0),null);
var match = cljs.core.nth.call(null,vec__9550,(1),null);
return String.fromCharCode(["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(match)].join(''));
});})(t,mn,smn,ts,out,src,file,json,map__9544,map__9544__$1,opts,output_dir,asset_path,source_map_timestamp))
)))].join(''));
});
cljs.js.alias_map = (function cljs$js$alias_map(compiler,cljs_ns){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,(function (p__9553){
var vec__9554 = p__9553;
var k = cljs.core.nth.call(null,vec__9554,(0),null);
var v = cljs.core.nth.call(null,vec__9554,(1),null);
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
var G__9558 = arguments.length;
switch (G__9558) {
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
var aname = (function (){var G__9559 = name;
if(cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.analyzer.macro_ns_name.call(null,G__9559);
} else {
return G__9559;
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
var map__9561 = resource;
var map__9561__$1 = (((((!((map__9561 == null))))?(((((map__9561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9561):map__9561);
var lang = cljs.core.get.call(null,map__9561__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var source = cljs.core.get.call(null,map__9561__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var cache = cljs.core.get.call(null,map__9561__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var source_map = cljs.core.get.call(null,map__9561__$1,new cljs.core.Keyword(null,"source-map","source-map",1706252311));
var file = cljs.core.get.call(null,map__9561__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var pred__9563 = cljs.core.keyword_identical_QMARK_;
var expr__9564 = lang;
if(cljs.core.truth_(pred__9563.call(null,new cljs.core.Keyword(null,"clj","clj",-660495428),expr__9564))){
cljs.js.pre_file_side_effects.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),aname,file,opts);

return cljs.js.eval_str_STAR_.call(null,bound_vars__$1,source,name,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cljs-file","cljs-file",-1499001049),file),((function (pred__9563,expr__9564,map__9561,map__9561__$1,lang,source,cache,source_map,file,env,bound_vars__$1,aname){
return (function (res){
cljs.js.post_file_side_effects.call(null,file,opts);

if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cb.call(null,res);
} else {
cljs.core.swap_BANG_.call(null,cljs.js._STAR_loaded_STAR_,cljs.core.conj,aname);

return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),true], null));
}
});})(pred__9563,expr__9564,map__9561,map__9561__$1,lang,source,cache,source_map,file,env,bound_vars__$1,aname))
);
} else {
if(cljs.core.truth_(pred__9563.call(null,new cljs.core.Keyword(null,"js","js",1768080579),expr__9564))){
return cljs.js.process_macros_deps.call(null,bound_vars__$1,cache,opts,((function (pred__9563,expr__9564,map__9561,map__9561__$1,lang,source,cache,source_map,file,env,bound_vars__$1,aname){
return (function (res){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cb.call(null,res);
} else {
return cljs.js.process_libs_deps.call(null,bound_vars__$1,cache,opts,((function (pred__9563,expr__9564,map__9561,map__9561__$1,lang,source,cache,source_map,file,env,bound_vars__$1,aname){
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
}catch (e9566){var cause = e9566;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,env,["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return cb.call(null,res__$2);
} else {
cljs.core.swap_BANG_.call(null,cljs.js._STAR_loaded_STAR_,cljs.core.conj,aname);

return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),true], null));
}
}
});})(pred__9563,expr__9564,map__9561,map__9561__$1,lang,source,cache,source_map,file,env,bound_vars__$1,aname))
);
}
});})(pred__9563,expr__9564,map__9561,map__9561__$1,lang,source,cache,source_map,file,env,bound_vars__$1,aname))
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
}catch (e9560){var cause = e9560;
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
return (function (acc,p__9568){
var vec__9569 = p__9568;
var renamed = cljs.core.nth.call(null,vec__9569,(0),null);
var qualified_sym = cljs.core.nth.call(null,vec__9569,(1),null);
var entry = vec__9569;
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
var G__9574 = arguments.length;
switch (G__9574) {
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

var _STAR_cljs_dep_set_STAR__orig_val__9575 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
var _STAR_cljs_dep_set_STAR__temp_val__9576 = (function (){var lib__$1 = (cljs.core.truth_(cljs.js.self_require_QMARK_.call(null,deps,opts))?new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null):lib);
return cljs.core.vary_meta.call(null,cljs.core.conj.call(null,new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612).cljs$core$IFn$_invoke$arity$1(bound_vars),lib__$1),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dep-path","dep-path",723826558)], null),cljs.core.conj,lib__$1);
})();
cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__temp_val__9576;

try{var bound_vars__$1 = cljs.core.assoc.call(null,bound_vars,new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_);
if((!(cljs.core.every_QMARK_.call(null,((function (bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__9575,_STAR_cljs_dep_set_STAR__temp_val__9576){
return (function (p1__9572_SHARP_){
return (!(cljs.core.contains_QMARK_.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_,p1__9572_SHARP_)));
});})(bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__9575,_STAR_cljs_dep_set_STAR__temp_val__9576))
,deps)))){
return cb.call(null,cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,ana_env,["Circular dependency detected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," -> ",cljs.core.conj.call(null,new cljs.core.Keyword(null,"dep-path","dep-path",723826558).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_)),cljs.core.some.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_,deps)))))].join(''))));
} else {
if(cljs.core.seq.call(null,deps)){
var dep = cljs.core.first.call(null,deps);
var opts_SINGLEQUOTE_ = cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"context","context",-830191113)),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320)),new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.js.require.call(null,bound_vars__$1,dep,reload,opts_SINGLEQUOTE_,((function (dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__9575,_STAR_cljs_dep_set_STAR__temp_val__9576){
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
return cljs.js.require.call(null,bound_vars__$1,cljs_dep,opts_SINGLEQUOTE_,((function (cljs_dep,temp__5733__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__9575,_STAR_cljs_dep_set_STAR__temp_val__9576){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb.call(null,res__$1);
} else {
cljs.js.patch_alias_map.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),lib,dep,cljs_dep);

return cljs.js.load_deps.call(null,bound_vars__$1,ana_env,lib,cljs.core.next.call(null,deps),null,opts,((function (cljs_dep,temp__5733__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__9575,_STAR_cljs_dep_set_STAR__temp_val__9576){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return cb.call(null,res__$2);
} else {
return cb.call(null,cljs.core.update.call(null,res__$2,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766),cljs.core.assoc,dep,cljs_dep));
}
});})(cljs_dep,temp__5733__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__9575,_STAR_cljs_dep_set_STAR__temp_val__9576))
);
}
});})(cljs_dep,temp__5733__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__9575,_STAR_cljs_dep_set_STAR__temp_val__9576))
);
} else {
return cb.call(null,res);
}
}
});})(dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__9575,_STAR_cljs_dep_set_STAR__temp_val__9576))
);
} else {
return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null));
}
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__orig_val__9575;
}});

cljs.js.load_deps.cljs$lang$maxFixedArity = 7;

cljs.js.analyze_deps = (function cljs$js$analyze_deps(var_args){
var G__9580 = arguments.length;
switch (G__9580) {
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
var _STAR_cljs_dep_set_STAR__orig_val__9581 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
var _STAR_cljs_dep_set_STAR__temp_val__9582 = cljs.core.vary_meta.call(null,cljs.core.conj.call(null,new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612).cljs$core$IFn$_invoke$arity$1(bound_vars),lib),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dep-path","dep-path",723826558)], null),cljs.core.conj,lib);
cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__temp_val__9582;

try{var compiler = cljs.core.deref.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars));
var bound_vars__$1 = cljs.core.assoc.call(null,bound_vars,new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_);
if((!(cljs.core.every_QMARK_.call(null,((function (compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__9581,_STAR_cljs_dep_set_STAR__temp_val__9582){
return (function (p1__9578_SHARP_){
return (!(cljs.core.contains_QMARK_.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_,p1__9578_SHARP_)));
});})(compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__9581,_STAR_cljs_dep_set_STAR__temp_val__9582))
,deps)))){
return cb.call(null,cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,ana_env,["Circular dependency detected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," -> ",cljs.core.conj.call(null,new cljs.core.Keyword(null,"dep-path","dep-path",723826558).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_)),cljs.core.some.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_,deps)))))].join(''))));
} else {
if(cljs.core.seq.call(null,deps)){
var dep = cljs.core.first.call(null,deps);
try{return new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106).cljs$core$IFn$_invoke$arity$1(bound_vars__$1).call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),dep,new cljs.core.Keyword(null,"path","path",-188191168),cljs.js.ns__GT_relpath.call(null,dep)], null),((function (dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__9581,_STAR_cljs_dep_set_STAR__temp_val__9582){
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

return cljs.js.analyze_deps.call(null,bound_vars__$1,ana_env,lib,cljs.core.cons.call(null,cljs_dep,cljs.core.next.call(null,deps)),opts,((function (cljs_dep,temp__5733__auto__,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__9581,_STAR_cljs_dep_set_STAR__temp_val__9582){
return (function (res){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cb.call(null,res);
} else {
return cb.call(null,cljs.core.update.call(null,res,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766),cljs.core.assoc,dep,cljs_dep));
}
});})(cljs_dep,temp__5733__auto__,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__9581,_STAR_cljs_dep_set_STAR__temp_val__9582))
);
} else {
return cb.call(null,cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,ana_env,cljs.analyzer.error_message.call(null,new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605),dep,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493),cljs.core.name.call(null,dep)], null)))));
}
} else {
var map__9584 = resource;
var map__9584__$1 = (((((!((map__9584 == null))))?(((((map__9584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9584):map__9584);
var name = cljs.core.get.call(null,map__9584__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var lang = cljs.core.get.call(null,map__9584__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var source = cljs.core.get.call(null,map__9584__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var file = cljs.core.get.call(null,map__9584__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var pred__9586 = cljs.core.keyword_identical_QMARK_;
var expr__9587 = lang;
if(cljs.core.truth_(pred__9586.call(null,new cljs.core.Keyword(null,"clj","clj",-660495428),expr__9587))){
cljs.js.pre_file_side_effects.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),name,file,opts);

return cljs.js.analyze_str_STAR_.call(null,bound_vars__$1,source,name,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cljs-file","cljs-file",-1499001049),file),((function (pred__9586,expr__9587,map__9584,map__9584__$1,name,lang,source,file,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__9581,_STAR_cljs_dep_set_STAR__temp_val__9582){
return (function (res){
cljs.js.post_file_side_effects.call(null,file,opts);

if(cljs.core.not.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cljs.js.analyze_deps.call(null,bound_vars__$1,ana_env,lib,cljs.core.next.call(null,deps),opts,cb);
} else {
return cb.call(null,res);
}
});})(pred__9586,expr__9587,map__9584,map__9584__$1,name,lang,source,file,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__9581,_STAR_cljs_dep_set_STAR__temp_val__9582))
);
} else {
if(cljs.core.truth_(pred__9586.call(null,new cljs.core.Keyword(null,"js","js",1768080579),expr__9587))){
return cljs.js.analyze_deps.call(null,bound_vars__$1,ana_env,lib,cljs.core.next.call(null,deps),opts,cb);
} else {
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,ana_env,["Invalid :lang specified ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang),", only :clj or :js allowed"].join('')));
}
}
}
});})(dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__9581,_STAR_cljs_dep_set_STAR__temp_val__9582))
);
}catch (e9583){var cause = e9583;
return cb.call(null,cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,ana_env,["Could not analyze dep ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dep)].join(''),cause)));
}} else {
return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null));
}
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__orig_val__9581;
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
var G__9593 = arguments.length;
switch (G__9593) {
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
var vec__9594 = (cljs.core.truth_(macros_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),new cljs.core.Keyword(null,"require-macros","require-macros",707947416),new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uses","uses",232664692),new cljs.core.Keyword(null,"requires","requires",-1201390927),new cljs.core.Keyword(null,"renames","renames",343278368)], null));
var uk = cljs.core.nth.call(null,vec__9594,(0),null);
var rk = cljs.core.nth.call(null,vec__9594,(1),null);
var renk = cljs.core.nth.call(null,vec__9594,(2),null);
var rewrite_renames = ((function (vec__9594,uk,rk,renk){
return (function (m){
if(cljs.core.truth_(m)){
return cljs.core.reduce.call(null,((function (vec__9594,uk,rk,renk){
return (function (acc,p__9597){
var vec__9598 = p__9597;
var renamed = cljs.core.nth.call(null,vec__9598,(0),null);
var qualified_sym = cljs.core.nth.call(null,vec__9598,(1),null);
var entry = vec__9598;
var from = cljs.core.symbol.call(null,cljs.core.namespace.call(null,qualified_sym));
var to = cljs.core.get.call(null,smap,from);
if((!((to == null)))){
return cljs.core.assoc.call(null,acc,renamed,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(to),cljs.core.name.call(null,qualified_sym)));
} else {
return cljs.core.merge.call(null,acc,entry);
}
});})(vec__9594,uk,rk,renk))
,cljs.core.PersistentArrayMap.EMPTY,m);
} else {
return null;
}
});})(vec__9594,uk,rk,renk))
;
var rewrite_deps = ((function (vec__9594,uk,rk,renk,rewrite_renames){
return (function (deps){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (vec__9594,uk,rk,renk,rewrite_renames){
return (function (dep){
var temp__5733__auto__ = cljs.core.get.call(null,smap,dep);
if(cljs.core.truth_(temp__5733__auto__)){
var new_dep = temp__5733__auto__;
return new_dep;
} else {
return dep;
}
});})(vec__9594,uk,rk,renk,rewrite_renames))
),deps);
});})(vec__9594,uk,rk,renk,rewrite_renames))
;
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,ast,uk,((function (vec__9594,uk,rk,renk,rewrite_renames,rewrite_deps){
return (function (p1__9590_SHARP_){
return clojure.walk.postwalk_replace.call(null,smap,p1__9590_SHARP_);
});})(vec__9594,uk,rk,renk,rewrite_renames,rewrite_deps))
),rk,((function (vec__9594,uk,rk,renk,rewrite_renames,rewrite_deps){
return (function (p1__9591_SHARP_){
return cljs.core.merge.call(null,smap,clojure.walk.postwalk_replace.call(null,smap,p1__9591_SHARP_));
});})(vec__9594,uk,rk,renk,rewrite_renames,rewrite_deps))
),renk,rewrite_renames),new cljs.core.Keyword(null,"deps","deps",1883360319),rewrite_deps);
});

cljs.js.rewrite_ns_ast.cljs$lang$maxFixedArity = 3;

cljs.js.check_macro_autoload_inferring_missing = (function cljs$js$check_macro_autoload_inferring_missing(p__9602,cenv){
var map__9603 = p__9602;
var map__9603__$1 = (((((!((map__9603 == null))))?(((((map__9603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9603):map__9603);
var ast = map__9603__$1;
var requires = cljs.core.get.call(null,map__9603__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var name = cljs.core.get.call(null,map__9603__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var namespaces = new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cenv));
var missing_require_macros = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (namespaces,map__9603,map__9603__$1,ast,requires,name){
return (function (p__9605){
var vec__9606 = p__9605;
var _ = cljs.core.nth.call(null,vec__9606,(0),null);
var full_ns = cljs.core.nth.call(null,vec__9606,(1),null);
var map__9609 = cljs.core.get.call(null,namespaces,full_ns);
var map__9609__$1 = (((((!((map__9609 == null))))?(((((map__9609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9609):map__9609);
var use_macros = cljs.core.get.call(null,map__9609__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var require_macros = cljs.core.get.call(null,map__9609__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var or__4047__auto__ = cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([full_ns]),cljs.core.vals.call(null,use_macros));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([full_ns]),cljs.core.vals.call(null,require_macros));
}
});})(namespaces,map__9603,map__9603__$1,ast,requires,name))
),requires);
var ast_SINGLEQUOTE_ = cljs.core.update_in.call(null,ast,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"require-macros","require-macros",707947416)], null),cljs.core.merge,missing_require_macros);
cljs.core.swap_BANG_.call(null,cenv,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name,new cljs.core.Keyword(null,"require-macros","require-macros",707947416)], null),cljs.core.merge,missing_require_macros);

return ast_SINGLEQUOTE_;
});
cljs.js.ns_side_effects = (function cljs$js$ns_side_effects(var_args){
var G__9614 = arguments.length;
switch (G__9614) {
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

cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6 = (function (load,bound_vars,ana_env,p__9615,opts,cb){
var map__9616 = p__9615;
var map__9616__$1 = (((((!((map__9616 == null))))?(((((map__9616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9616):map__9616);
var ast = map__9616__$1;
var op = cljs.core.get.call(null,map__9616__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Namespace side effects for",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast));
} else {
}

if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null).call(null,op))){
var check_uses_and_load_macros = ((function (map__9616,map__9616__$1,ast,op){
return (function cljs$js$check_uses_and_load_macros(res,rewritten_ast){
var env = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars);
var map__9635 = rewritten_ast;
var map__9635__$1 = (((((!((map__9635 == null))))?(((((map__9635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9635):map__9635);
var uses = cljs.core.get.call(null,map__9635__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var use_macros = cljs.core.get.call(null,map__9635__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var reload = cljs.core.get.call(null,map__9635__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var reloads = cljs.core.get.call(null,map__9635__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var name = cljs.core.get.call(null,map__9635__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cb.call(null,res);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006).cljs$core$IFn$_invoke$arity$1(bound_vars))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Processing :use-macros for",name);
} else {
}

return cljs.js.load_macros.call(null,bound_vars,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),use_macros,name,reload,reloads,opts,((function (env,map__9635,map__9635__$1,uses,use_macros,reload,reloads,name,map__9616,map__9616__$1,ast,op){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb.call(null,res__$1);
} else {
var map__9637 = cljs.js.rewrite_ns_ast.call(null,rewritten_ast,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766).cljs$core$IFn$_invoke$arity$1(res__$1),true);
var map__9637__$1 = (((((!((map__9637 == null))))?(((((map__9637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9637):map__9637);
var rewritten_ast__$1 = map__9637__$1;
var require_macros = cljs.core.get.call(null,map__9637__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Processing :require-macros for",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast));
} else {
}

return cljs.js.load_macros.call(null,bound_vars,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),require_macros,name,reload,reloads,opts,((function (map__9637,map__9637__$1,rewritten_ast__$1,require_macros,env,map__9635,map__9635__$1,uses,use_macros,reload,reloads,name,map__9616,map__9616__$1,ast,op){
return (function (res_SINGLEQUOTE_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE_))){
return cb.call(null,res_SINGLEQUOTE_);
} else {
var map__9639 = cljs.js.rewrite_ns_ast.call(null,rewritten_ast__$1,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766).cljs$core$IFn$_invoke$arity$1(res__$1),true);
var map__9639__$1 = (((((!((map__9639 == null))))?(((((map__9639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9639):map__9639);
var rewritten_ast__$2 = map__9639__$1;
var use_macros__$1 = cljs.core.get.call(null,map__9639__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var res_SINGLEQUOTE___$1 = (function (){try{if(cljs.core.seq.call(null,use_macros__$1)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Checking :use-macros for",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast));
} else {
}

var _STAR_analyze_deps_STAR__orig_val__9642_9655 = cljs.analyzer._STAR_analyze_deps_STAR_;
var _STAR_compiler_STAR__orig_val__9643_9656 = cljs.env._STAR_compiler_STAR_;
var _STAR_analyze_deps_STAR__temp_val__9644_9657 = new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427).cljs$core$IFn$_invoke$arity$1(bound_vars);
var _STAR_compiler_STAR__temp_val__9645_9658 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars);
cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__temp_val__9644_9657;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__9645_9658;

try{cljs.analyzer.check_use_macros.call(null,use_macros__$1,env);
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__9643_9656;

cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__orig_val__9642_9655;
}} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}catch (e9641){var cause = e9641;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,ana_env,["Could not parse ns form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE___$1))){
return cb.call(null,res_SINGLEQUOTE___$1);
} else {
try{var _STAR_analyze_deps_STAR__orig_val__9647 = cljs.analyzer._STAR_analyze_deps_STAR_;
var _STAR_compiler_STAR__orig_val__9648 = cljs.env._STAR_compiler_STAR_;
var _STAR_analyze_deps_STAR__temp_val__9649 = new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427).cljs$core$IFn$_invoke$arity$1(bound_vars);
var _STAR_compiler_STAR__temp_val__9650 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars);
cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__temp_val__9649;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__9650;

try{var ast_SINGLEQUOTE_ = cljs.js.check_macro_autoload_inferring_missing.call(null,cljs.analyzer.check_rename_macros_inferring_missing.call(null,cljs.analyzer.check_use_macros_inferring_missing.call(null,rewritten_ast__$2,env),env),env);
return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),ast_SINGLEQUOTE_], null));
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__9648;

cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__orig_val__9647;
}}catch (e9646){var cause = e9646;
return cb.call(null,cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,ana_env,["Could not parse ns form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause)));
}}
}
});})(map__9637,map__9637__$1,rewritten_ast__$1,require_macros,env,map__9635,map__9635__$1,uses,use_macros,reload,reloads,name,map__9616,map__9616__$1,ast,op))
);
}
});})(env,map__9635,map__9635__$1,uses,use_macros,reload,reloads,name,map__9616,map__9616__$1,ast,op))
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
}catch (e9651){var cause = e9651;
return cb.call(null,cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,ana_env,["Could not parse ns form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause)));
}}
}
});})(map__9616,map__9616__$1,ast,op))
;
if(cljs.core.truth_((function (){var and__4036__auto__ = load;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.seq.call(null,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
} else {
return and__4036__auto__;
}
})())){
var map__9652 = ast;
var map__9652__$1 = (((((!((map__9652 == null))))?(((((map__9652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9652):map__9652);
var reload = cljs.core.get.call(null,map__9652__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var name = cljs.core.get.call(null,map__9652__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var deps = cljs.core.get.call(null,map__9652__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
return cljs.js.load_deps.call(null,bound_vars,ana_env,name,deps,(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reload);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reload);
}
})(),cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933)),((function (map__9652,map__9652__$1,reload,name,deps,map__9616,map__9616__$1,ast,op){
return (function (p1__9611_SHARP_){
return check_uses_and_load_macros.call(null,p1__9611_SHARP_,cljs.js.rewrite_ns_ast.call(null,ast,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766).cljs$core$IFn$_invoke$arity$1(p1__9611_SHARP_)));
});})(map__9652,map__9652__$1,reload,name,deps,map__9616,map__9616__$1,ast,op))
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
return cljs.js.analyze_deps.call(null,bound_vars,ana_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast),cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933)),((function (map__9616,map__9616__$1,ast,op){
return (function (p1__9612_SHARP_){
return check_uses_and_load_macros.call(null,p1__9612_SHARP_,cljs.js.rewrite_ns_ast.call(null,ast,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766).cljs$core$IFn$_invoke$arity$1(p1__9612_SHARP_)));
});})(map__9616,map__9616__$1,ast,op))
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
var seq__9659_9671 = cljs.core.seq.call(null,deps);
var chunk__9660_9672 = null;
var count__9661_9673 = (0);
var i__9662_9674 = (0);
while(true){
if((i__9662_9674 < count__9661_9673)){
var dep_9675 = cljs.core._nth.call(null,chunk__9660_9672,i__9662_9674);
sb.append((function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__9663_9676 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__9664_9677 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__9665_9678 = true;
var _STAR_print_fn_STAR__temp_val__9666_9679 = ((function (seq__9659_9671,chunk__9660_9672,count__9661_9673,i__9662_9674,_STAR_print_newline_STAR__orig_val__9663_9676,_STAR_print_fn_STAR__orig_val__9664_9677,_STAR_print_newline_STAR__temp_val__9665_9678,sb__4572__auto__,dep_9675){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(seq__9659_9671,chunk__9660_9672,count__9661_9673,i__9662_9674,_STAR_print_newline_STAR__orig_val__9663_9676,_STAR_print_fn_STAR__orig_val__9664_9677,_STAR_print_newline_STAR__temp_val__9665_9678,sb__4572__auto__,dep_9675))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__9665_9678;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__9666_9679;

try{cljs.compiler.emitln.call(null,cljs.core.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,dep_9675)," = require('",dep_9675,"');");
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__9664_9677;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__9663_9676;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
})());


var G__9680 = seq__9659_9671;
var G__9681 = chunk__9660_9672;
var G__9682 = count__9661_9673;
var G__9683 = (i__9662_9674 + (1));
seq__9659_9671 = G__9680;
chunk__9660_9672 = G__9681;
count__9661_9673 = G__9682;
i__9662_9674 = G__9683;
continue;
} else {
var temp__5735__auto___9684 = cljs.core.seq.call(null,seq__9659_9671);
if(temp__5735__auto___9684){
var seq__9659_9685__$1 = temp__5735__auto___9684;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9659_9685__$1)){
var c__4461__auto___9686 = cljs.core.chunk_first.call(null,seq__9659_9685__$1);
var G__9687 = cljs.core.chunk_rest.call(null,seq__9659_9685__$1);
var G__9688 = c__4461__auto___9686;
var G__9689 = cljs.core.count.call(null,c__4461__auto___9686);
var G__9690 = (0);
seq__9659_9671 = G__9687;
chunk__9660_9672 = G__9688;
count__9661_9673 = G__9689;
i__9662_9674 = G__9690;
continue;
} else {
var dep_9691 = cljs.core.first.call(null,seq__9659_9685__$1);
sb.append((function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__9667_9692 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__9668_9693 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__9669_9694 = true;
var _STAR_print_fn_STAR__temp_val__9670_9695 = ((function (seq__9659_9671,chunk__9660_9672,count__9661_9673,i__9662_9674,_STAR_print_newline_STAR__orig_val__9667_9692,_STAR_print_fn_STAR__orig_val__9668_9693,_STAR_print_newline_STAR__temp_val__9669_9694,sb__4572__auto__,dep_9691,seq__9659_9685__$1,temp__5735__auto___9684){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(seq__9659_9671,chunk__9660_9672,count__9661_9673,i__9662_9674,_STAR_print_newline_STAR__orig_val__9667_9692,_STAR_print_fn_STAR__orig_val__9668_9693,_STAR_print_newline_STAR__temp_val__9669_9694,sb__4572__auto__,dep_9691,seq__9659_9685__$1,temp__5735__auto___9684))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__9669_9694;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__9670_9695;

try{cljs.compiler.emitln.call(null,cljs.core.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,dep_9691)," = require('",dep_9691,"');");
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__9668_9693;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__9667_9692;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
})());


var G__9696 = cljs.core.next.call(null,seq__9659_9685__$1);
var G__9697 = null;
var G__9698 = (0);
var G__9699 = (0);
seq__9659_9671 = G__9696;
chunk__9660_9672 = G__9697;
count__9661_9673 = G__9698;
i__9662_9674 = G__9699;
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
var map__9700 = cljs.core.deref.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars));
var map__9700__$1 = (((((!((map__9700 == null))))?(((((map__9700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9700):map__9700);
var js_dependency_index = cljs.core.get.call(null,map__9700__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var seq__9702_9718 = cljs.core.seq.call(null,deps);
var chunk__9703_9719 = null;
var count__9704_9720 = (0);
var i__9705_9721 = (0);
while(true){
if((i__9705_9721 < count__9704_9720)){
var dep_9722 = cljs.core._nth.call(null,chunk__9703_9719,i__9705_9721);
var map__9706_9723 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,dep_9722));
var map__9706_9724__$1 = (((((!((map__9706_9723 == null))))?(((((map__9706_9723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9706_9723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9706_9723):map__9706_9723);
var global_exports_9725 = cljs.core.get.call(null,map__9706_9724__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
sb.append((function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__9708_9726 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__9709_9727 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__9710_9728 = true;
var _STAR_print_fn_STAR__temp_val__9711_9729 = ((function (seq__9702_9718,chunk__9703_9719,count__9704_9720,i__9705_9721,_STAR_print_newline_STAR__orig_val__9708_9726,_STAR_print_fn_STAR__orig_val__9709_9727,_STAR_print_newline_STAR__temp_val__9710_9728,sb__4572__auto__,map__9706_9723,map__9706_9724__$1,global_exports_9725,dep_9722,map__9700,map__9700__$1,js_dependency_index){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(seq__9702_9718,chunk__9703_9719,count__9704_9720,i__9705_9721,_STAR_print_newline_STAR__orig_val__9708_9726,_STAR_print_fn_STAR__orig_val__9709_9727,_STAR_print_newline_STAR__temp_val__9710_9728,sb__4572__auto__,map__9706_9723,map__9706_9724__$1,global_exports_9725,dep_9722,map__9700,map__9700__$1,js_dependency_index))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__9710_9728;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__9711_9729;

try{cljs.compiler.emit_global_export.call(null,ns_name,global_exports_9725,dep_9722);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__9709_9727;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__9708_9726;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
})());


var G__9730 = seq__9702_9718;
var G__9731 = chunk__9703_9719;
var G__9732 = count__9704_9720;
var G__9733 = (i__9705_9721 + (1));
seq__9702_9718 = G__9730;
chunk__9703_9719 = G__9731;
count__9704_9720 = G__9732;
i__9705_9721 = G__9733;
continue;
} else {
var temp__5735__auto___9734 = cljs.core.seq.call(null,seq__9702_9718);
if(temp__5735__auto___9734){
var seq__9702_9735__$1 = temp__5735__auto___9734;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9702_9735__$1)){
var c__4461__auto___9736 = cljs.core.chunk_first.call(null,seq__9702_9735__$1);
var G__9737 = cljs.core.chunk_rest.call(null,seq__9702_9735__$1);
var G__9738 = c__4461__auto___9736;
var G__9739 = cljs.core.count.call(null,c__4461__auto___9736);
var G__9740 = (0);
seq__9702_9718 = G__9737;
chunk__9703_9719 = G__9738;
count__9704_9720 = G__9739;
i__9705_9721 = G__9740;
continue;
} else {
var dep_9741 = cljs.core.first.call(null,seq__9702_9735__$1);
var map__9712_9742 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,dep_9741));
var map__9712_9743__$1 = (((((!((map__9712_9742 == null))))?(((((map__9712_9742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9712_9742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9712_9742):map__9712_9742);
var global_exports_9744 = cljs.core.get.call(null,map__9712_9743__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
sb.append((function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__9714_9745 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__9715_9746 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__9716_9747 = true;
var _STAR_print_fn_STAR__temp_val__9717_9748 = ((function (seq__9702_9718,chunk__9703_9719,count__9704_9720,i__9705_9721,_STAR_print_newline_STAR__orig_val__9714_9745,_STAR_print_fn_STAR__orig_val__9715_9746,_STAR_print_newline_STAR__temp_val__9716_9747,sb__4572__auto__,map__9712_9742,map__9712_9743__$1,global_exports_9744,dep_9741,seq__9702_9735__$1,temp__5735__auto___9734,map__9700,map__9700__$1,js_dependency_index){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(seq__9702_9718,chunk__9703_9719,count__9704_9720,i__9705_9721,_STAR_print_newline_STAR__orig_val__9714_9745,_STAR_print_fn_STAR__orig_val__9715_9746,_STAR_print_newline_STAR__temp_val__9716_9747,sb__4572__auto__,map__9712_9742,map__9712_9743__$1,global_exports_9744,dep_9741,seq__9702_9735__$1,temp__5735__auto___9734,map__9700,map__9700__$1,js_dependency_index))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__9716_9747;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__9717_9748;

try{cljs.compiler.emit_global_export.call(null,ns_name,global_exports_9744,dep_9741);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__9715_9746;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__9714_9745;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
})());


var G__9749 = cljs.core.next.call(null,seq__9702_9735__$1);
var G__9750 = null;
var G__9751 = (0);
var G__9752 = (0);
seq__9702_9718 = G__9749;
chunk__9703_9719 = G__9750;
count__9704_9720 = G__9751;
i__9705_9721 = G__9752;
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
var bound_vars__$1 = (function (){var G__9755 = cljs.core.merge.call(null,bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.call(null,G__9755,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data.call(null));
} else {
return G__9755;
}
})();
return cljs.core.trampoline.call(null,((function (rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1){
return (function cljs$js$analyze_str_STAR__$_analyze_loop(last_ast,ns){
var _STAR_compiler_STAR__orig_val__9756 = cljs.env._STAR_compiler_STAR_;
var _STAR_cljs_ns_STAR__orig_val__9757 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__9758 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__9759 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__9760 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__9761 = cljs.core._STAR_ns_STAR_;
var _STAR_passes_STAR__orig_val__9762 = cljs.analyzer._STAR_passes_STAR_;
var _STAR_alias_map_STAR__orig_val__9763 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__9764 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__9765 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__9766 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_cljs_file_STAR__orig_val__9767 = cljs.analyzer._STAR_cljs_file_STAR_;
var _STAR_compiler_STAR__temp_val__9768 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__9769 = ns;
var _STAR_checked_arrays_STAR__temp_val__9770 = new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__9771 = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__9772 = (function (){var and__4036__auto__ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4036__auto__)){
return new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4036__auto__;
}
})();
var _STAR_ns_STAR__temp_val__9773 = cljs.core.create_ns.call(null,ns);
var _STAR_passes_STAR__temp_val__9774 = new cljs.core.Keyword(null,"*passes*","*passes*",1335562782).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_alias_map_STAR__temp_val__9775 = cljs.js.alias_map.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),ns);
var _STAR_data_readers_STAR__temp_val__9776 = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__9777 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__9778 = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_file_STAR__temp_val__9779 = new cljs.core.Keyword(null,"cljs-file","cljs-file",-1499001049).cljs$core$IFn$_invoke$arity$1(opts);
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__9768;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__9769;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__9770;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__9771;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__9772;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__9773;

cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR__temp_val__9774;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__9775;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__9776;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__9777;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__9778;

cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__temp_val__9779;

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.js.read.call(null,eof,rdr)], null);
}catch (e9780){var cause = e9780;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv,["Could not analyze ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cb__$1.call(null,res);
} else {
var form = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
if((!((eof === form)))){
var aenv__$1 = (function (){var G__9781 = cljs.core.assoc.call(null,aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_));
var G__9781__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.call(null,G__9781,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__9781);
if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.call(null,G__9781__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true);
} else {
return G__9781__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.analyzer.analyze.call(null,aenv__$1,form,null,opts)], null);
}catch (e9782){var cause = e9782;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv__$1,["Could not analyze ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb__$1.call(null,res__$1);
} else {
var ast = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res__$1);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.js.trampoline_safe.call(null,cljs.js.ns_side_effects).call(null,bound_vars__$1,aenv__$1,ast,opts,((function (ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__9756,_STAR_cljs_ns_STAR__orig_val__9757,_STAR_checked_arrays_STAR__orig_val__9758,_STAR_cljs_static_fns_STAR__orig_val__9759,_STAR_fn_invoke_direct_STAR__orig_val__9760,_STAR_ns_STAR__orig_val__9761,_STAR_passes_STAR__orig_val__9762,_STAR_alias_map_STAR__orig_val__9763,_STAR_data_readers_STAR__orig_val__9764,resolve_symbol_orig_val__9765,_STAR_source_map_data_STAR__orig_val__9766,_STAR_cljs_file_STAR__orig_val__9767,_STAR_compiler_STAR__temp_val__9768,_STAR_cljs_ns_STAR__temp_val__9769,_STAR_checked_arrays_STAR__temp_val__9770,_STAR_cljs_static_fns_STAR__temp_val__9771,_STAR_fn_invoke_direct_STAR__temp_val__9772,_STAR_ns_STAR__temp_val__9773,_STAR_passes_STAR__temp_val__9774,_STAR_alias_map_STAR__temp_val__9775,_STAR_data_readers_STAR__temp_val__9776,resolve_symbol_temp_val__9777,_STAR_source_map_data_STAR__temp_val__9778,_STAR_cljs_file_STAR__temp_val__9779,rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return cb__$1.call(null,res__$2);
} else {
return cljs.core.trampoline.call(null,cljs$js$analyze_str_STAR__$_analyze_loop,ast,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast));
}
});})(ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__9756,_STAR_cljs_ns_STAR__orig_val__9757,_STAR_checked_arrays_STAR__orig_val__9758,_STAR_cljs_static_fns_STAR__orig_val__9759,_STAR_fn_invoke_direct_STAR__orig_val__9760,_STAR_ns_STAR__orig_val__9761,_STAR_passes_STAR__orig_val__9762,_STAR_alias_map_STAR__orig_val__9763,_STAR_data_readers_STAR__orig_val__9764,resolve_symbol_orig_val__9765,_STAR_source_map_data_STAR__orig_val__9766,_STAR_cljs_file_STAR__orig_val__9767,_STAR_compiler_STAR__temp_val__9768,_STAR_cljs_ns_STAR__temp_val__9769,_STAR_checked_arrays_STAR__temp_val__9770,_STAR_cljs_static_fns_STAR__temp_val__9771,_STAR_fn_invoke_direct_STAR__temp_val__9772,_STAR_ns_STAR__temp_val__9773,_STAR_passes_STAR__temp_val__9774,_STAR_alias_map_STAR__temp_val__9775,_STAR_data_readers_STAR__temp_val__9776,resolve_symbol_temp_val__9777,_STAR_source_map_data_STAR__temp_val__9778,_STAR_cljs_file_STAR__temp_val__9779,rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1))
);
} else {
return ((function (ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__9756,_STAR_cljs_ns_STAR__orig_val__9757,_STAR_checked_arrays_STAR__orig_val__9758,_STAR_cljs_static_fns_STAR__orig_val__9759,_STAR_fn_invoke_direct_STAR__orig_val__9760,_STAR_ns_STAR__orig_val__9761,_STAR_passes_STAR__orig_val__9762,_STAR_alias_map_STAR__orig_val__9763,_STAR_data_readers_STAR__orig_val__9764,resolve_symbol_orig_val__9765,_STAR_source_map_data_STAR__orig_val__9766,_STAR_cljs_file_STAR__orig_val__9767,_STAR_compiler_STAR__temp_val__9768,_STAR_cljs_ns_STAR__temp_val__9769,_STAR_checked_arrays_STAR__temp_val__9770,_STAR_cljs_static_fns_STAR__temp_val__9771,_STAR_fn_invoke_direct_STAR__temp_val__9772,_STAR_ns_STAR__temp_val__9773,_STAR_passes_STAR__temp_val__9774,_STAR_alias_map_STAR__temp_val__9775,_STAR_data_readers_STAR__temp_val__9776,resolve_symbol_temp_val__9777,_STAR_source_map_data_STAR__temp_val__9778,_STAR_cljs_file_STAR__temp_val__9779,rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1){
return (function (){
return cljs$js$analyze_str_STAR__$_analyze_loop.call(null,ast,ns);
});
;})(ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__9756,_STAR_cljs_ns_STAR__orig_val__9757,_STAR_checked_arrays_STAR__orig_val__9758,_STAR_cljs_static_fns_STAR__orig_val__9759,_STAR_fn_invoke_direct_STAR__orig_val__9760,_STAR_ns_STAR__orig_val__9761,_STAR_passes_STAR__orig_val__9762,_STAR_alias_map_STAR__orig_val__9763,_STAR_data_readers_STAR__orig_val__9764,resolve_symbol_orig_val__9765,_STAR_source_map_data_STAR__orig_val__9766,_STAR_cljs_file_STAR__orig_val__9767,_STAR_compiler_STAR__temp_val__9768,_STAR_cljs_ns_STAR__temp_val__9769,_STAR_checked_arrays_STAR__temp_val__9770,_STAR_cljs_static_fns_STAR__temp_val__9771,_STAR_fn_invoke_direct_STAR__temp_val__9772,_STAR_ns_STAR__temp_val__9773,_STAR_passes_STAR__temp_val__9774,_STAR_alias_map_STAR__temp_val__9775,_STAR_data_readers_STAR__temp_val__9776,resolve_symbol_temp_val__9777,_STAR_source_map_data_STAR__temp_val__9778,_STAR_cljs_file_STAR__temp_val__9779,rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1))
}
}
} else {
return cb__$1.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),last_ast], null));
}
}
}finally {cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__orig_val__9767;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__9766;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__9765;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__9764;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__9763;

cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR__orig_val__9762;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__9761;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__9760;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__9759;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__9758;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__9757;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__9756;
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
var G__9784 = arguments.length;
switch (G__9784) {
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
var bound_vars__$1 = (function (){var G__9786 = cljs.core.merge.call(null,bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.call(null,G__9786,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data.call(null));
} else {
return G__9786;
}
})();
cljs.js.clear_fns_BANG_.call(null);

var _STAR_compiler_STAR__orig_val__9787 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR__orig_val__9788 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR__orig_val__9789 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__9790 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__9791 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__9792 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__9793 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR__orig_val__9794 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__9795 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__9796 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__9797 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_compiler_STAR__temp_val__9798 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_eval_fn_STAR__temp_val__9799 = new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__9800 = new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_checked_arrays_STAR__temp_val__9801 = new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__9802 = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__9803 = (function (){var and__4036__auto__ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4036__auto__)){
return new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4036__auto__;
}
})();
var _STAR_ns_STAR__temp_val__9804 = cljs.core.create_ns.call(null,new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432).cljs$core$IFn$_invoke$arity$1(bound_vars__$1));
var _STAR_alias_map_STAR__temp_val__9805 = cljs.js.alias_map.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432).cljs$core$IFn$_invoke$arity$1(bound_vars__$1));
var _STAR_data_readers_STAR__temp_val__9806 = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__9807 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__9808 = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__9798;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__temp_val__9799;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__9800;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__9801;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__9802;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__9803;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__9804;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__9805;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__9806;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__9807;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__9808;

try{var aenv = cljs.analyzer.empty_env.call(null);
var aenv__$1 = (function (){var G__9809 = cljs.core.assoc.call(null,aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_));
var G__9809__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.call(null,G__9809,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__9809);
if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.call(null,G__9809__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true);
} else {
return G__9809__$1;
}
})();
var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.analyzer.analyze.call(null,aenv__$1,form,null,opts)], null);
}catch (e9810){var cause = e9810;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv__$1,["Could not eval ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cb.call(null,res);
} else {
var ast = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
var vec__9811 = ((cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"nodejs","nodejs",321212524)))?(function (){var map__9814 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
var map__9814__$1 = (((((!((map__9814 == null))))?(((((map__9814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9814):map__9814);
var node_libs = cljs.core.get.call(null,map__9814__$1,true);
var libs_to_load = cljs.core.get.call(null,map__9814__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"deps","deps",1883360319),libs_to_load)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,ast], null));
var node_deps = cljs.core.nth.call(null,vec__9811,(0),null);
var ast__$1 = cljs.core.nth.call(null,vec__9811,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast__$1)))){
return cljs.js.ns_side_effects.call(null,true,bound_vars__$1,aenv__$1,ast__$1,opts,((function (ast,vec__9811,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__9787,_STAR_eval_fn_STAR__orig_val__9788,_STAR_cljs_ns_STAR__orig_val__9789,_STAR_checked_arrays_STAR__orig_val__9790,_STAR_cljs_static_fns_STAR__orig_val__9791,_STAR_fn_invoke_direct_STAR__orig_val__9792,_STAR_ns_STAR__orig_val__9793,_STAR_alias_map_STAR__orig_val__9794,_STAR_data_readers_STAR__orig_val__9795,resolve_symbol_orig_val__9796,_STAR_source_map_data_STAR__orig_val__9797,_STAR_compiler_STAR__temp_val__9798,_STAR_eval_fn_STAR__temp_val__9799,_STAR_cljs_ns_STAR__temp_val__9800,_STAR_checked_arrays_STAR__temp_val__9801,_STAR_cljs_static_fns_STAR__temp_val__9802,_STAR_fn_invoke_direct_STAR__temp_val__9803,_STAR_ns_STAR__temp_val__9804,_STAR_alias_map_STAR__temp_val__9805,_STAR_data_readers_STAR__temp_val__9806,resolve_symbol_temp_val__9807,_STAR_source_map_data_STAR__temp_val__9808,the_ns,bound_vars__$1){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb.call(null,res__$1);
} else {
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast__$1);
var sb = (new goog.string.StringBuffer());
sb.append((function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__9816_9824 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__9817_9825 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__9818_9826 = true;
var _STAR_print_fn_STAR__temp_val__9819_9827 = ((function (_STAR_print_newline_STAR__orig_val__9816_9824,_STAR_print_fn_STAR__orig_val__9817_9825,_STAR_print_newline_STAR__temp_val__9818_9826,sb__4572__auto__,ns_name,sb,ast,vec__9811,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__9787,_STAR_eval_fn_STAR__orig_val__9788,_STAR_cljs_ns_STAR__orig_val__9789,_STAR_checked_arrays_STAR__orig_val__9790,_STAR_cljs_static_fns_STAR__orig_val__9791,_STAR_fn_invoke_direct_STAR__orig_val__9792,_STAR_ns_STAR__orig_val__9793,_STAR_alias_map_STAR__orig_val__9794,_STAR_data_readers_STAR__orig_val__9795,resolve_symbol_orig_val__9796,_STAR_source_map_data_STAR__orig_val__9797,_STAR_compiler_STAR__temp_val__9798,_STAR_eval_fn_STAR__temp_val__9799,_STAR_cljs_ns_STAR__temp_val__9800,_STAR_checked_arrays_STAR__temp_val__9801,_STAR_cljs_static_fns_STAR__temp_val__9802,_STAR_fn_invoke_direct_STAR__temp_val__9803,_STAR_ns_STAR__temp_val__9804,_STAR_alias_map_STAR__temp_val__9805,_STAR_data_readers_STAR__temp_val__9806,resolve_symbol_temp_val__9807,_STAR_source_map_data_STAR__temp_val__9808,the_ns,bound_vars__$1){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__9816_9824,_STAR_print_fn_STAR__orig_val__9817_9825,_STAR_print_newline_STAR__temp_val__9818_9826,sb__4572__auto__,ns_name,sb,ast,vec__9811,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__9787,_STAR_eval_fn_STAR__orig_val__9788,_STAR_cljs_ns_STAR__orig_val__9789,_STAR_checked_arrays_STAR__orig_val__9790,_STAR_cljs_static_fns_STAR__orig_val__9791,_STAR_fn_invoke_direct_STAR__orig_val__9792,_STAR_ns_STAR__orig_val__9793,_STAR_alias_map_STAR__orig_val__9794,_STAR_data_readers_STAR__orig_val__9795,resolve_symbol_orig_val__9796,_STAR_source_map_data_STAR__orig_val__9797,_STAR_compiler_STAR__temp_val__9798,_STAR_eval_fn_STAR__temp_val__9799,_STAR_cljs_ns_STAR__temp_val__9800,_STAR_checked_arrays_STAR__temp_val__9801,_STAR_cljs_static_fns_STAR__temp_val__9802,_STAR_fn_invoke_direct_STAR__temp_val__9803,_STAR_ns_STAR__temp_val__9804,_STAR_alias_map_STAR__temp_val__9805,_STAR_data_readers_STAR__temp_val__9806,resolve_symbol_temp_val__9807,_STAR_source_map_data_STAR__temp_val__9808,the_ns,bound_vars__$1))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__9818_9826;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__9819_9827;

try{cljs.compiler.emitln.call(null,["goog.provide(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,ns_name)),"\");"].join(''));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__9817_9825;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__9816_9824;
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
});})(ast,vec__9811,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__9787,_STAR_eval_fn_STAR__orig_val__9788,_STAR_cljs_ns_STAR__orig_val__9789,_STAR_checked_arrays_STAR__orig_val__9790,_STAR_cljs_static_fns_STAR__orig_val__9791,_STAR_fn_invoke_direct_STAR__orig_val__9792,_STAR_ns_STAR__orig_val__9793,_STAR_alias_map_STAR__orig_val__9794,_STAR_data_readers_STAR__orig_val__9795,resolve_symbol_orig_val__9796,_STAR_source_map_data_STAR__orig_val__9797,_STAR_compiler_STAR__temp_val__9798,_STAR_eval_fn_STAR__temp_val__9799,_STAR_cljs_ns_STAR__temp_val__9800,_STAR_checked_arrays_STAR__temp_val__9801,_STAR_cljs_static_fns_STAR__temp_val__9802,_STAR_fn_invoke_direct_STAR__temp_val__9803,_STAR_ns_STAR__temp_val__9804,_STAR_alias_map_STAR__temp_val__9805,_STAR_data_readers_STAR__temp_val__9806,resolve_symbol_temp_val__9807,_STAR_source_map_data_STAR__temp_val__9808,the_ns,bound_vars__$1))
);
} else {
var src = (function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__9820_9828 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__9821_9829 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__9822_9830 = true;
var _STAR_print_fn_STAR__temp_val__9823_9831 = ((function (_STAR_print_newline_STAR__orig_val__9820_9828,_STAR_print_fn_STAR__orig_val__9821_9829,_STAR_print_newline_STAR__temp_val__9822_9830,sb__4572__auto__,ast,vec__9811,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__9787,_STAR_eval_fn_STAR__orig_val__9788,_STAR_cljs_ns_STAR__orig_val__9789,_STAR_checked_arrays_STAR__orig_val__9790,_STAR_cljs_static_fns_STAR__orig_val__9791,_STAR_fn_invoke_direct_STAR__orig_val__9792,_STAR_ns_STAR__orig_val__9793,_STAR_alias_map_STAR__orig_val__9794,_STAR_data_readers_STAR__orig_val__9795,resolve_symbol_orig_val__9796,_STAR_source_map_data_STAR__orig_val__9797,_STAR_compiler_STAR__temp_val__9798,_STAR_eval_fn_STAR__temp_val__9799,_STAR_cljs_ns_STAR__temp_val__9800,_STAR_checked_arrays_STAR__temp_val__9801,_STAR_cljs_static_fns_STAR__temp_val__9802,_STAR_fn_invoke_direct_STAR__temp_val__9803,_STAR_ns_STAR__temp_val__9804,_STAR_alias_map_STAR__temp_val__9805,_STAR_data_readers_STAR__temp_val__9806,resolve_symbol_temp_val__9807,_STAR_source_map_data_STAR__temp_val__9808,the_ns,bound_vars__$1){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__9820_9828,_STAR_print_fn_STAR__orig_val__9821_9829,_STAR_print_newline_STAR__temp_val__9822_9830,sb__4572__auto__,ast,vec__9811,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__9787,_STAR_eval_fn_STAR__orig_val__9788,_STAR_cljs_ns_STAR__orig_val__9789,_STAR_checked_arrays_STAR__orig_val__9790,_STAR_cljs_static_fns_STAR__orig_val__9791,_STAR_fn_invoke_direct_STAR__orig_val__9792,_STAR_ns_STAR__orig_val__9793,_STAR_alias_map_STAR__orig_val__9794,_STAR_data_readers_STAR__orig_val__9795,resolve_symbol_orig_val__9796,_STAR_source_map_data_STAR__orig_val__9797,_STAR_compiler_STAR__temp_val__9798,_STAR_eval_fn_STAR__temp_val__9799,_STAR_cljs_ns_STAR__temp_val__9800,_STAR_checked_arrays_STAR__temp_val__9801,_STAR_cljs_static_fns_STAR__temp_val__9802,_STAR_fn_invoke_direct_STAR__temp_val__9803,_STAR_ns_STAR__temp_val__9804,_STAR_alias_map_STAR__temp_val__9805,_STAR_data_readers_STAR__temp_val__9806,resolve_symbol_temp_val__9807,_STAR_source_map_data_STAR__temp_val__9808,the_ns,bound_vars__$1))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__9822_9830;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__9823_9831;

try{cljs.compiler.emit.call(null,ast__$1);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__9821_9829;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__9820_9828;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
})();
return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.js._STAR_eval_fn_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),src], null))], null));
}
}
}finally {cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__9797;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__9796;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__9795;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__9794;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__9793;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__9792;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__9791;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__9790;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__9789;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__orig_val__9788;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__9787;
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
var G__9833 = arguments.length;
switch (G__9833) {
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
var bound_vars__$1 = (function (){var G__9837 = cljs.core.merge.call(null,bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.call(null,G__9837,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data.call(null));
} else {
return G__9837;
}
})();
return cljs.core.trampoline.call(null,((function (rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function cljs$js$compile_str_STAR__$_compile_loop(ns){
var _STAR_compiler_STAR__orig_val__9838 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR__orig_val__9839 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR__orig_val__9840 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__9841 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__9842 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__9843 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__9844 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR__orig_val__9845 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__9846 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__9847 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__9848 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_compiler_STAR__temp_val__9849 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_eval_fn_STAR__temp_val__9850 = new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__9851 = ns;
var _STAR_checked_arrays_STAR__temp_val__9852 = new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__9853 = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__9854 = (function (){var and__4036__auto__ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4036__auto__)){
return new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4036__auto__;
}
})();
var _STAR_ns_STAR__temp_val__9855 = cljs.core.create_ns.call(null,ns);
var _STAR_alias_map_STAR__temp_val__9856 = cljs.js.alias_map.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),ns);
var _STAR_data_readers_STAR__temp_val__9857 = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__9858 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__9859 = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__9849;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__temp_val__9850;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__9851;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__9852;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__9853;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__9854;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__9855;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__9856;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__9857;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__9858;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__9859;

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.js.read.call(null,eof,rdr)], null);
}catch (e9860){var cause = e9860;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv,["Could not compile ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cb__$1.call(null,res);
} else {
var form = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
if((!((eof === form)))){
var aenv__$1 = (function (){var G__9861 = cljs.core.assoc.call(null,aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_));
var G__9861__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.call(null,G__9861,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__9861);
if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.call(null,G__9861__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true);
} else {
return G__9861__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.analyzer.analyze.call(null,aenv__$1,form,null,opts)], null);
}catch (e9862){var cause = e9862;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv__$1,["Could not compile ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb__$1.call(null,res__$1);
} else {
var ast = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res__$1);
var vec__9863 = ((cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"nodejs","nodejs",321212524)))?(function (){var map__9866 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
var map__9866__$1 = (((((!((map__9866 == null))))?(((((map__9866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9866):map__9866);
var node_libs = cljs.core.get.call(null,map__9866__$1,true);
var libs_to_load = cljs.core.get.call(null,map__9866__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"deps","deps",1883360319),libs_to_load)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,ast], null));
var node_deps = cljs.core.nth.call(null,vec__9863,(0),null);
var ast__$1 = cljs.core.nth.call(null,vec__9863,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast__$1)))){
return cljs.js.trampoline_safe.call(null,cljs.js.ns_side_effects).call(null,bound_vars__$1,aenv__$1,ast__$1,opts,((function (ast,vec__9863,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__9838,_STAR_eval_fn_STAR__orig_val__9839,_STAR_cljs_ns_STAR__orig_val__9840,_STAR_checked_arrays_STAR__orig_val__9841,_STAR_cljs_static_fns_STAR__orig_val__9842,_STAR_fn_invoke_direct_STAR__orig_val__9843,_STAR_ns_STAR__orig_val__9844,_STAR_alias_map_STAR__orig_val__9845,_STAR_data_readers_STAR__orig_val__9846,resolve_symbol_orig_val__9847,_STAR_source_map_data_STAR__orig_val__9848,_STAR_compiler_STAR__temp_val__9849,_STAR_eval_fn_STAR__temp_val__9850,_STAR_cljs_ns_STAR__temp_val__9851,_STAR_checked_arrays_STAR__temp_val__9852,_STAR_cljs_static_fns_STAR__temp_val__9853,_STAR_fn_invoke_direct_STAR__temp_val__9854,_STAR_ns_STAR__temp_val__9855,_STAR_alias_map_STAR__temp_val__9856,_STAR_data_readers_STAR__temp_val__9857,resolve_symbol_temp_val__9858,_STAR_source_map_data_STAR__temp_val__9859,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return cb__$1.call(null,res__$2);
} else {
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast__$1);
sb.append((function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__9868_9876 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__9869_9877 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__9870_9878 = true;
var _STAR_print_fn_STAR__temp_val__9871_9879 = ((function (_STAR_print_newline_STAR__orig_val__9868_9876,_STAR_print_fn_STAR__orig_val__9869_9877,_STAR_print_newline_STAR__temp_val__9870_9878,sb__4572__auto__,ns_name,ast,vec__9863,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__9838,_STAR_eval_fn_STAR__orig_val__9839,_STAR_cljs_ns_STAR__orig_val__9840,_STAR_checked_arrays_STAR__orig_val__9841,_STAR_cljs_static_fns_STAR__orig_val__9842,_STAR_fn_invoke_direct_STAR__orig_val__9843,_STAR_ns_STAR__orig_val__9844,_STAR_alias_map_STAR__orig_val__9845,_STAR_data_readers_STAR__orig_val__9846,resolve_symbol_orig_val__9847,_STAR_source_map_data_STAR__orig_val__9848,_STAR_compiler_STAR__temp_val__9849,_STAR_eval_fn_STAR__temp_val__9850,_STAR_cljs_ns_STAR__temp_val__9851,_STAR_checked_arrays_STAR__temp_val__9852,_STAR_cljs_static_fns_STAR__temp_val__9853,_STAR_fn_invoke_direct_STAR__temp_val__9854,_STAR_ns_STAR__temp_val__9855,_STAR_alias_map_STAR__temp_val__9856,_STAR_data_readers_STAR__temp_val__9857,resolve_symbol_temp_val__9858,_STAR_source_map_data_STAR__temp_val__9859,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__9868_9876,_STAR_print_fn_STAR__orig_val__9869_9877,_STAR_print_newline_STAR__temp_val__9870_9878,sb__4572__auto__,ns_name,ast,vec__9863,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__9838,_STAR_eval_fn_STAR__orig_val__9839,_STAR_cljs_ns_STAR__orig_val__9840,_STAR_checked_arrays_STAR__orig_val__9841,_STAR_cljs_static_fns_STAR__orig_val__9842,_STAR_fn_invoke_direct_STAR__orig_val__9843,_STAR_ns_STAR__orig_val__9844,_STAR_alias_map_STAR__orig_val__9845,_STAR_data_readers_STAR__orig_val__9846,resolve_symbol_orig_val__9847,_STAR_source_map_data_STAR__orig_val__9848,_STAR_compiler_STAR__temp_val__9849,_STAR_eval_fn_STAR__temp_val__9850,_STAR_cljs_ns_STAR__temp_val__9851,_STAR_checked_arrays_STAR__temp_val__9852,_STAR_cljs_static_fns_STAR__temp_val__9853,_STAR_fn_invoke_direct_STAR__temp_val__9854,_STAR_ns_STAR__temp_val__9855,_STAR_alias_map_STAR__temp_val__9856,_STAR_data_readers_STAR__temp_val__9857,resolve_symbol_temp_val__9858,_STAR_source_map_data_STAR__temp_val__9859,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__9870_9878;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__9871_9879;

try{cljs.compiler.emit.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res__$2));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__9869_9877;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__9868_9876;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
})());

if((node_deps == null)){
} else {
cljs.js.node_side_effects.call(null,bound_vars__$1,sb,node_deps,ns_name,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts));
}

return cljs.core.trampoline.call(null,cljs$js$compile_str_STAR__$_compile_loop,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast__$1));
}
});})(ast,vec__9863,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__9838,_STAR_eval_fn_STAR__orig_val__9839,_STAR_cljs_ns_STAR__orig_val__9840,_STAR_checked_arrays_STAR__orig_val__9841,_STAR_cljs_static_fns_STAR__orig_val__9842,_STAR_fn_invoke_direct_STAR__orig_val__9843,_STAR_ns_STAR__orig_val__9844,_STAR_alias_map_STAR__orig_val__9845,_STAR_data_readers_STAR__orig_val__9846,resolve_symbol_orig_val__9847,_STAR_source_map_data_STAR__orig_val__9848,_STAR_compiler_STAR__temp_val__9849,_STAR_eval_fn_STAR__temp_val__9850,_STAR_cljs_ns_STAR__temp_val__9851,_STAR_checked_arrays_STAR__temp_val__9852,_STAR_cljs_static_fns_STAR__temp_val__9853,_STAR_fn_invoke_direct_STAR__temp_val__9854,_STAR_ns_STAR__temp_val__9855,_STAR_alias_map_STAR__temp_val__9856,_STAR_data_readers_STAR__temp_val__9857,resolve_symbol_temp_val__9858,_STAR_source_map_data_STAR__temp_val__9859,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
);
} else {
sb.append((function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__9872_9880 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__9873_9881 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__9874_9882 = true;
var _STAR_print_fn_STAR__temp_val__9875_9883 = ((function (_STAR_print_newline_STAR__orig_val__9872_9880,_STAR_print_fn_STAR__orig_val__9873_9881,_STAR_print_newline_STAR__temp_val__9874_9882,sb__4572__auto__,ast,vec__9863,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__9838,_STAR_eval_fn_STAR__orig_val__9839,_STAR_cljs_ns_STAR__orig_val__9840,_STAR_checked_arrays_STAR__orig_val__9841,_STAR_cljs_static_fns_STAR__orig_val__9842,_STAR_fn_invoke_direct_STAR__orig_val__9843,_STAR_ns_STAR__orig_val__9844,_STAR_alias_map_STAR__orig_val__9845,_STAR_data_readers_STAR__orig_val__9846,resolve_symbol_orig_val__9847,_STAR_source_map_data_STAR__orig_val__9848,_STAR_compiler_STAR__temp_val__9849,_STAR_eval_fn_STAR__temp_val__9850,_STAR_cljs_ns_STAR__temp_val__9851,_STAR_checked_arrays_STAR__temp_val__9852,_STAR_cljs_static_fns_STAR__temp_val__9853,_STAR_fn_invoke_direct_STAR__temp_val__9854,_STAR_ns_STAR__temp_val__9855,_STAR_alias_map_STAR__temp_val__9856,_STAR_data_readers_STAR__temp_val__9857,resolve_symbol_temp_val__9858,_STAR_source_map_data_STAR__temp_val__9859,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__9872_9880,_STAR_print_fn_STAR__orig_val__9873_9881,_STAR_print_newline_STAR__temp_val__9874_9882,sb__4572__auto__,ast,vec__9863,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__9838,_STAR_eval_fn_STAR__orig_val__9839,_STAR_cljs_ns_STAR__orig_val__9840,_STAR_checked_arrays_STAR__orig_val__9841,_STAR_cljs_static_fns_STAR__orig_val__9842,_STAR_fn_invoke_direct_STAR__orig_val__9843,_STAR_ns_STAR__orig_val__9844,_STAR_alias_map_STAR__orig_val__9845,_STAR_data_readers_STAR__orig_val__9846,resolve_symbol_orig_val__9847,_STAR_source_map_data_STAR__orig_val__9848,_STAR_compiler_STAR__temp_val__9849,_STAR_eval_fn_STAR__temp_val__9850,_STAR_cljs_ns_STAR__temp_val__9851,_STAR_checked_arrays_STAR__temp_val__9852,_STAR_cljs_static_fns_STAR__temp_val__9853,_STAR_fn_invoke_direct_STAR__temp_val__9854,_STAR_ns_STAR__temp_val__9855,_STAR_alias_map_STAR__temp_val__9856,_STAR_data_readers_STAR__temp_val__9857,resolve_symbol_temp_val__9858,_STAR_source_map_data_STAR__temp_val__9859,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__9874_9882;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__9875_9883;

try{cljs.compiler.emit.call(null,ast__$1);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__9873_9881;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__9872_9880;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
})());

return ((function (ast,vec__9863,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__9838,_STAR_eval_fn_STAR__orig_val__9839,_STAR_cljs_ns_STAR__orig_val__9840,_STAR_checked_arrays_STAR__orig_val__9841,_STAR_cljs_static_fns_STAR__orig_val__9842,_STAR_fn_invoke_direct_STAR__orig_val__9843,_STAR_ns_STAR__orig_val__9844,_STAR_alias_map_STAR__orig_val__9845,_STAR_data_readers_STAR__orig_val__9846,resolve_symbol_orig_val__9847,_STAR_source_map_data_STAR__orig_val__9848,_STAR_compiler_STAR__temp_val__9849,_STAR_eval_fn_STAR__temp_val__9850,_STAR_cljs_ns_STAR__temp_val__9851,_STAR_checked_arrays_STAR__temp_val__9852,_STAR_cljs_static_fns_STAR__temp_val__9853,_STAR_fn_invoke_direct_STAR__temp_val__9854,_STAR_ns_STAR__temp_val__9855,_STAR_alias_map_STAR__temp_val__9856,_STAR_data_readers_STAR__temp_val__9857,resolve_symbol_temp_val__9858,_STAR_source_map_data_STAR__temp_val__9859,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (){
return cljs$js$compile_str_STAR__$_compile_loop.call(null,ns);
});
;})(ast,vec__9863,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__9838,_STAR_eval_fn_STAR__orig_val__9839,_STAR_cljs_ns_STAR__orig_val__9840,_STAR_checked_arrays_STAR__orig_val__9841,_STAR_cljs_static_fns_STAR__orig_val__9842,_STAR_fn_invoke_direct_STAR__orig_val__9843,_STAR_ns_STAR__orig_val__9844,_STAR_alias_map_STAR__orig_val__9845,_STAR_data_readers_STAR__orig_val__9846,resolve_symbol_orig_val__9847,_STAR_source_map_data_STAR__orig_val__9848,_STAR_compiler_STAR__temp_val__9849,_STAR_eval_fn_STAR__temp_val__9850,_STAR_cljs_ns_STAR__temp_val__9851,_STAR_checked_arrays_STAR__temp_val__9852,_STAR_cljs_static_fns_STAR__temp_val__9853,_STAR_fn_invoke_direct_STAR__temp_val__9854,_STAR_ns_STAR__temp_val__9855,_STAR_alias_map_STAR__temp_val__9856,_STAR_data_readers_STAR__temp_val__9857,resolve_symbol_temp_val__9858,_STAR_source_map_data_STAR__temp_val__9859,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
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
}finally {cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__9848;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__9847;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__9846;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__9845;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__9844;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__9843;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__9842;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__9841;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__9840;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__orig_val__9839;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__9838;
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
var G__9885 = arguments.length;
switch (G__9885) {
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
var bound_vars__$1 = (function (){var G__9889 = cljs.core.merge.call(null,bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.call(null,G__9889,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data.call(null));
} else {
return G__9889;
}
})();
var aname = (function (){var G__9890 = name;
if(cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.analyzer.macro_ns_name.call(null,G__9890);
} else {
return G__9890;
}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Evaluating",name);
} else {
}

cljs.js.clear_fns_BANG_.call(null);

return cljs.core.trampoline.call(null,((function (rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function cljs$js$eval_str_STAR__$_compile_loop(ns){
var _STAR_compiler_STAR__orig_val__9891 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR__orig_val__9892 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR__orig_val__9893 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__9894 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__9895 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__9896 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__9897 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR__orig_val__9898 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__9899 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__9900 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__9901 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_cljs_file_STAR__orig_val__9902 = cljs.analyzer._STAR_cljs_file_STAR_;
var _STAR_compiler_STAR__temp_val__9903 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_eval_fn_STAR__temp_val__9904 = new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__9905 = ns;
var _STAR_checked_arrays_STAR__temp_val__9906 = new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__9907 = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__9908 = (function (){var and__4036__auto__ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4036__auto__)){
return new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4036__auto__;
}
})();
var _STAR_ns_STAR__temp_val__9909 = cljs.core.create_ns.call(null,ns);
var _STAR_alias_map_STAR__temp_val__9910 = cljs.js.alias_map.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),ns);
var _STAR_data_readers_STAR__temp_val__9911 = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__9912 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__9913 = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_file_STAR__temp_val__9914 = new cljs.core.Keyword(null,"cljs-file","cljs-file",-1499001049).cljs$core$IFn$_invoke$arity$1(opts);
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__9903;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__temp_val__9904;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__9905;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__9906;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__9907;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__9908;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__9909;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__9910;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__9911;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__9912;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__9913;

cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__temp_val__9914;

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.js.read.call(null,eof,rdr)], null);
}catch (e9915){var cause = e9915;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv,["Could not eval ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cb__$1.call(null,res);
} else {
var form = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
if((!((eof === form)))){
var aenv__$1 = (function (){var G__9916 = cljs.core.assoc.call(null,aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,ns));
var G__9916__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.call(null,G__9916,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__9916);
if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.call(null,G__9916__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true);
} else {
return G__9916__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.analyzer.analyze.call(null,aenv__$1,form,null,opts)], null);
}catch (e9917){var cause = e9917;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv__$1,["Could not eval ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb__$1.call(null,res__$1);
} else {
var ast = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res__$1);
var ns_SINGLEQUOTE_ = cljs.analyzer._STAR_cljs_ns_STAR_;
var vec__9918 = ((cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"nodejs","nodejs",321212524)))?(function (){var map__9921 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
var map__9921__$1 = (((((!((map__9921 == null))))?(((((map__9921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9921):map__9921);
var node_libs = cljs.core.get.call(null,map__9921__$1,true);
var libs_to_load = cljs.core.get.call(null,map__9921__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"deps","deps",1883360319),libs_to_load)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,ast], null));
var node_deps = cljs.core.nth.call(null,vec__9918,(0),null);
var ast__$1 = cljs.core.nth.call(null,vec__9918,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast__$1)))){
sb.append((function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__9923_9934 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__9924_9935 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__9925_9936 = true;
var _STAR_print_fn_STAR__temp_val__9926_9937 = ((function (_STAR_print_newline_STAR__orig_val__9923_9934,_STAR_print_fn_STAR__orig_val__9924_9935,_STAR_print_newline_STAR__temp_val__9925_9936,sb__4572__auto__,ast,ns_SINGLEQUOTE_,vec__9918,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__9891,_STAR_eval_fn_STAR__orig_val__9892,_STAR_cljs_ns_STAR__orig_val__9893,_STAR_checked_arrays_STAR__orig_val__9894,_STAR_cljs_static_fns_STAR__orig_val__9895,_STAR_fn_invoke_direct_STAR__orig_val__9896,_STAR_ns_STAR__orig_val__9897,_STAR_alias_map_STAR__orig_val__9898,_STAR_data_readers_STAR__orig_val__9899,resolve_symbol_orig_val__9900,_STAR_source_map_data_STAR__orig_val__9901,_STAR_cljs_file_STAR__orig_val__9902,_STAR_compiler_STAR__temp_val__9903,_STAR_eval_fn_STAR__temp_val__9904,_STAR_cljs_ns_STAR__temp_val__9905,_STAR_checked_arrays_STAR__temp_val__9906,_STAR_cljs_static_fns_STAR__temp_val__9907,_STAR_fn_invoke_direct_STAR__temp_val__9908,_STAR_ns_STAR__temp_val__9909,_STAR_alias_map_STAR__temp_val__9910,_STAR_data_readers_STAR__temp_val__9911,resolve_symbol_temp_val__9912,_STAR_source_map_data_STAR__temp_val__9913,_STAR_cljs_file_STAR__temp_val__9914,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__9923_9934,_STAR_print_fn_STAR__orig_val__9924_9935,_STAR_print_newline_STAR__temp_val__9925_9936,sb__4572__auto__,ast,ns_SINGLEQUOTE_,vec__9918,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__9891,_STAR_eval_fn_STAR__orig_val__9892,_STAR_cljs_ns_STAR__orig_val__9893,_STAR_checked_arrays_STAR__orig_val__9894,_STAR_cljs_static_fns_STAR__orig_val__9895,_STAR_fn_invoke_direct_STAR__orig_val__9896,_STAR_ns_STAR__orig_val__9897,_STAR_alias_map_STAR__orig_val__9898,_STAR_data_readers_STAR__orig_val__9899,resolve_symbol_orig_val__9900,_STAR_source_map_data_STAR__orig_val__9901,_STAR_cljs_file_STAR__orig_val__9902,_STAR_compiler_STAR__temp_val__9903,_STAR_eval_fn_STAR__temp_val__9904,_STAR_cljs_ns_STAR__temp_val__9905,_STAR_checked_arrays_STAR__temp_val__9906,_STAR_cljs_static_fns_STAR__temp_val__9907,_STAR_fn_invoke_direct_STAR__temp_val__9908,_STAR_ns_STAR__temp_val__9909,_STAR_alias_map_STAR__temp_val__9910,_STAR_data_readers_STAR__temp_val__9911,resolve_symbol_temp_val__9912,_STAR_source_map_data_STAR__temp_val__9913,_STAR_cljs_file_STAR__temp_val__9914,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__9925_9936;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__9926_9937;

try{cljs.compiler.emitln.call(null,["goog.provide(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast__$1))),"\");"].join(''));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__9924_9935;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__9923_9934;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
})());

return cljs.js.trampoline_safe.call(null,cljs.js.ns_side_effects).call(null,true,bound_vars__$1,aenv__$1,ast__$1,opts,((function (ast,ns_SINGLEQUOTE_,vec__9918,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__9891,_STAR_eval_fn_STAR__orig_val__9892,_STAR_cljs_ns_STAR__orig_val__9893,_STAR_checked_arrays_STAR__orig_val__9894,_STAR_cljs_static_fns_STAR__orig_val__9895,_STAR_fn_invoke_direct_STAR__orig_val__9896,_STAR_ns_STAR__orig_val__9897,_STAR_alias_map_STAR__orig_val__9898,_STAR_data_readers_STAR__orig_val__9899,resolve_symbol_orig_val__9900,_STAR_source_map_data_STAR__orig_val__9901,_STAR_cljs_file_STAR__orig_val__9902,_STAR_compiler_STAR__temp_val__9903,_STAR_eval_fn_STAR__temp_val__9904,_STAR_cljs_ns_STAR__temp_val__9905,_STAR_checked_arrays_STAR__temp_val__9906,_STAR_cljs_static_fns_STAR__temp_val__9907,_STAR_fn_invoke_direct_STAR__temp_val__9908,_STAR_ns_STAR__temp_val__9909,_STAR_alias_map_STAR__temp_val__9910,_STAR_data_readers_STAR__temp_val__9911,resolve_symbol_temp_val__9912,_STAR_source_map_data_STAR__temp_val__9913,_STAR_cljs_file_STAR__temp_val__9914,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
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
});})(ast,ns_SINGLEQUOTE_,vec__9918,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__9891,_STAR_eval_fn_STAR__orig_val__9892,_STAR_cljs_ns_STAR__orig_val__9893,_STAR_checked_arrays_STAR__orig_val__9894,_STAR_cljs_static_fns_STAR__orig_val__9895,_STAR_fn_invoke_direct_STAR__orig_val__9896,_STAR_ns_STAR__orig_val__9897,_STAR_alias_map_STAR__orig_val__9898,_STAR_data_readers_STAR__orig_val__9899,resolve_symbol_orig_val__9900,_STAR_source_map_data_STAR__orig_val__9901,_STAR_cljs_file_STAR__orig_val__9902,_STAR_compiler_STAR__temp_val__9903,_STAR_eval_fn_STAR__temp_val__9904,_STAR_cljs_ns_STAR__temp_val__9905,_STAR_checked_arrays_STAR__temp_val__9906,_STAR_cljs_static_fns_STAR__temp_val__9907,_STAR_fn_invoke_direct_STAR__temp_val__9908,_STAR_ns_STAR__temp_val__9909,_STAR_alias_map_STAR__temp_val__9910,_STAR_data_readers_STAR__temp_val__9911,resolve_symbol_temp_val__9912,_STAR_source_map_data_STAR__temp_val__9913,_STAR_cljs_file_STAR__temp_val__9914,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
);
} else {
var env__1364__auto___9938 = cljs.core.assoc.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),new cljs.core.Keyword(null,"options","options",99638489),opts);
var env__1364__auto___9939__$1 = ((cljs.core.map_QMARK_.call(null,env__1364__auto___9938))?cljs.core.atom.call(null,env__1364__auto___9938):(((((env__1364__auto___9938 instanceof cljs.core.Atom)) && (cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,env__1364__auto___9938)))))?env__1364__auto___9938:(function(){throw (new Error(["Compiler environment must be a map or atom containing a map, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,env__1364__auto___9938))].join('')))})()
));
var _STAR_compiler_STAR__orig_val__9927_9940 = cljs.env._STAR_compiler_STAR_;
var _STAR_compiler_STAR__temp_val__9928_9941 = env__1364__auto___9939__$1;
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__9928_9941;

try{sb.append((function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__9929_9942 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__9930_9943 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__9931_9944 = true;
var _STAR_print_fn_STAR__temp_val__9932_9945 = ((function (_STAR_print_newline_STAR__orig_val__9929_9942,_STAR_print_fn_STAR__orig_val__9930_9943,_STAR_print_newline_STAR__temp_val__9931_9944,sb__4572__auto__,_STAR_compiler_STAR__orig_val__9927_9940,_STAR_compiler_STAR__temp_val__9928_9941,env__1364__auto___9938,env__1364__auto___9939__$1,ast,ns_SINGLEQUOTE_,vec__9918,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__9891,_STAR_eval_fn_STAR__orig_val__9892,_STAR_cljs_ns_STAR__orig_val__9893,_STAR_checked_arrays_STAR__orig_val__9894,_STAR_cljs_static_fns_STAR__orig_val__9895,_STAR_fn_invoke_direct_STAR__orig_val__9896,_STAR_ns_STAR__orig_val__9897,_STAR_alias_map_STAR__orig_val__9898,_STAR_data_readers_STAR__orig_val__9899,resolve_symbol_orig_val__9900,_STAR_source_map_data_STAR__orig_val__9901,_STAR_cljs_file_STAR__orig_val__9902,_STAR_compiler_STAR__temp_val__9903,_STAR_eval_fn_STAR__temp_val__9904,_STAR_cljs_ns_STAR__temp_val__9905,_STAR_checked_arrays_STAR__temp_val__9906,_STAR_cljs_static_fns_STAR__temp_val__9907,_STAR_fn_invoke_direct_STAR__temp_val__9908,_STAR_ns_STAR__temp_val__9909,_STAR_alias_map_STAR__temp_val__9910,_STAR_data_readers_STAR__temp_val__9911,resolve_symbol_temp_val__9912,_STAR_source_map_data_STAR__temp_val__9913,_STAR_cljs_file_STAR__temp_val__9914,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__9929_9942,_STAR_print_fn_STAR__orig_val__9930_9943,_STAR_print_newline_STAR__temp_val__9931_9944,sb__4572__auto__,_STAR_compiler_STAR__orig_val__9927_9940,_STAR_compiler_STAR__temp_val__9928_9941,env__1364__auto___9938,env__1364__auto___9939__$1,ast,ns_SINGLEQUOTE_,vec__9918,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__9891,_STAR_eval_fn_STAR__orig_val__9892,_STAR_cljs_ns_STAR__orig_val__9893,_STAR_checked_arrays_STAR__orig_val__9894,_STAR_cljs_static_fns_STAR__orig_val__9895,_STAR_fn_invoke_direct_STAR__orig_val__9896,_STAR_ns_STAR__orig_val__9897,_STAR_alias_map_STAR__orig_val__9898,_STAR_data_readers_STAR__orig_val__9899,resolve_symbol_orig_val__9900,_STAR_source_map_data_STAR__orig_val__9901,_STAR_cljs_file_STAR__orig_val__9902,_STAR_compiler_STAR__temp_val__9903,_STAR_eval_fn_STAR__temp_val__9904,_STAR_cljs_ns_STAR__temp_val__9905,_STAR_checked_arrays_STAR__temp_val__9906,_STAR_cljs_static_fns_STAR__temp_val__9907,_STAR_fn_invoke_direct_STAR__temp_val__9908,_STAR_ns_STAR__temp_val__9909,_STAR_alias_map_STAR__temp_val__9910,_STAR_data_readers_STAR__temp_val__9911,resolve_symbol_temp_val__9912,_STAR_source_map_data_STAR__temp_val__9913,_STAR_cljs_file_STAR__temp_val__9914,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__9931_9944;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__9932_9945;

try{cljs.compiler.emit.call(null,ast__$1);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__9930_9943;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__9929_9942;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
})());
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__9927_9940;
}
return ((function (ast,ns_SINGLEQUOTE_,vec__9918,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__9891,_STAR_eval_fn_STAR__orig_val__9892,_STAR_cljs_ns_STAR__orig_val__9893,_STAR_checked_arrays_STAR__orig_val__9894,_STAR_cljs_static_fns_STAR__orig_val__9895,_STAR_fn_invoke_direct_STAR__orig_val__9896,_STAR_ns_STAR__orig_val__9897,_STAR_alias_map_STAR__orig_val__9898,_STAR_data_readers_STAR__orig_val__9899,resolve_symbol_orig_val__9900,_STAR_source_map_data_STAR__orig_val__9901,_STAR_cljs_file_STAR__orig_val__9902,_STAR_compiler_STAR__temp_val__9903,_STAR_eval_fn_STAR__temp_val__9904,_STAR_cljs_ns_STAR__temp_val__9905,_STAR_checked_arrays_STAR__temp_val__9906,_STAR_cljs_static_fns_STAR__temp_val__9907,_STAR_fn_invoke_direct_STAR__temp_val__9908,_STAR_ns_STAR__temp_val__9909,_STAR_alias_map_STAR__temp_val__9910,_STAR_data_readers_STAR__temp_val__9911,resolve_symbol_temp_val__9912,_STAR_source_map_data_STAR__temp_val__9913,_STAR_cljs_file_STAR__temp_val__9914,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (){
return cljs$js$eval_str_STAR__$_compile_loop.call(null,ns_SINGLEQUOTE_);
});
;})(ast,ns_SINGLEQUOTE_,vec__9918,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__9891,_STAR_eval_fn_STAR__orig_val__9892,_STAR_cljs_ns_STAR__orig_val__9893,_STAR_checked_arrays_STAR__orig_val__9894,_STAR_cljs_static_fns_STAR__orig_val__9895,_STAR_fn_invoke_direct_STAR__orig_val__9896,_STAR_ns_STAR__orig_val__9897,_STAR_alias_map_STAR__orig_val__9898,_STAR_data_readers_STAR__orig_val__9899,resolve_symbol_orig_val__9900,_STAR_source_map_data_STAR__orig_val__9901,_STAR_cljs_file_STAR__orig_val__9902,_STAR_compiler_STAR__temp_val__9903,_STAR_eval_fn_STAR__temp_val__9904,_STAR_cljs_ns_STAR__temp_val__9905,_STAR_checked_arrays_STAR__temp_val__9906,_STAR_cljs_static_fns_STAR__temp_val__9907,_STAR_fn_invoke_direct_STAR__temp_val__9908,_STAR_ns_STAR__temp_val__9909,_STAR_alias_map_STAR__temp_val__9910,_STAR_data_readers_STAR__temp_val__9911,resolve_symbol_temp_val__9912,_STAR_source_map_data_STAR__temp_val__9913,_STAR_cljs_file_STAR__temp_val__9914,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
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
var complete = ((function (js_source,evalm,form,res,_STAR_compiler_STAR__orig_val__9891,_STAR_eval_fn_STAR__orig_val__9892,_STAR_cljs_ns_STAR__orig_val__9893,_STAR_checked_arrays_STAR__orig_val__9894,_STAR_cljs_static_fns_STAR__orig_val__9895,_STAR_fn_invoke_direct_STAR__orig_val__9896,_STAR_ns_STAR__orig_val__9897,_STAR_alias_map_STAR__orig_val__9898,_STAR_data_readers_STAR__orig_val__9899,resolve_symbol_orig_val__9900,_STAR_source_map_data_STAR__orig_val__9901,_STAR_cljs_file_STAR__orig_val__9902,_STAR_compiler_STAR__temp_val__9903,_STAR_eval_fn_STAR__temp_val__9904,_STAR_cljs_ns_STAR__temp_val__9905,_STAR_checked_arrays_STAR__temp_val__9906,_STAR_cljs_static_fns_STAR__temp_val__9907,_STAR_fn_invoke_direct_STAR__temp_val__9908,_STAR_ns_STAR__temp_val__9909,_STAR_alias_map_STAR__temp_val__9910,_STAR_data_readers_STAR__temp_val__9911,resolve_symbol_temp_val__9912,_STAR_source_map_data_STAR__temp_val__9913,_STAR_cljs_file_STAR__temp_val__9914,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb__$1.call(null,res__$1);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,js_source);
} else {
}

var res__$2 = (function (){try{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"value","value",305978217),cljs.js._STAR_eval_fn_STAR_.call(null,evalm)], null);
}catch (e9933){var cause = e9933;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv,"ERROR",cause));
}})();
return cb__$1.call(null,res__$2);
}
});})(js_source,evalm,form,res,_STAR_compiler_STAR__orig_val__9891,_STAR_eval_fn_STAR__orig_val__9892,_STAR_cljs_ns_STAR__orig_val__9893,_STAR_checked_arrays_STAR__orig_val__9894,_STAR_cljs_static_fns_STAR__orig_val__9895,_STAR_fn_invoke_direct_STAR__orig_val__9896,_STAR_ns_STAR__orig_val__9897,_STAR_alias_map_STAR__orig_val__9898,_STAR_data_readers_STAR__orig_val__9899,resolve_symbol_orig_val__9900,_STAR_source_map_data_STAR__orig_val__9901,_STAR_cljs_file_STAR__orig_val__9902,_STAR_compiler_STAR__temp_val__9903,_STAR_eval_fn_STAR__temp_val__9904,_STAR_cljs_ns_STAR__temp_val__9905,_STAR_checked_arrays_STAR__temp_val__9906,_STAR_cljs_static_fns_STAR__temp_val__9907,_STAR_fn_invoke_direct_STAR__temp_val__9908,_STAR_ns_STAR__temp_val__9909,_STAR_alias_map_STAR__temp_val__9910,_STAR_data_readers_STAR__temp_val__9911,resolve_symbol_temp_val__9912,_STAR_source_map_data_STAR__temp_val__9913,_STAR_cljs_file_STAR__temp_val__9914,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
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
}finally {cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__orig_val__9902;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__9901;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__9900;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__9899;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__9898;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__9897;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__9896;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__9895;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__9894;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__9893;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__orig_val__9892;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__9891;
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
var G__9947 = arguments.length;
switch (G__9947) {
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
var G__9950 = arguments.length;
switch (G__9950) {
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
var st_9955 = cljs.env._STAR_compiler_STAR_;
cljs.js.eval.call(null,st_9955,form,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true], null),((function (st_9955,result){
return (function (p__9951){
var map__9952 = p__9951;
var map__9952__$1 = (((((!((map__9952 == null))))?(((((map__9952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9952):map__9952);
var value = cljs.core.get.call(null,map__9952__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__9952__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(error)){
throw error;
} else {
return cljs.core.reset_BANG_.call(null,result,value);
}
});})(st_9955,result))
);

return cljs.core.deref.call(null,result);
});

cljs.js.eval_impl.cljs$lang$maxFixedArity = 2;

cljs.core._STAR_eval_STAR_ = cljs.js.eval_impl;

//# sourceMappingURL=js.js.map