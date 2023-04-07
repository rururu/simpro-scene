// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('cljs.analyzer');
goog.require('cljs.analyzer.impl');
goog.require('cljs.env');
goog.require('cljs.source_map');
goog.require('cljs.tools.reader');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.mapcat.call(null,(function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.call(null,clojure.string.replace.call(null,cljs.core.name.call(null,lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_source_map_data_gen_col_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.call(null,ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv.call(null,(function (xs,ns,_){
if(cljs.core._EQ_.call(null,needle,cljs.compiler.get_first_ns_segment.call(null,ns))){
return cljs.core.reduced.call(null,needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__28377 = s;
var map__28377__$1 = cljs.core.__destructure_map.call(null,map__28377);
var name = cljs.core.get.call(null,map__28377__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__28377__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__28379 = info;
var map__28380 = G__28379;
var map__28380__$1 = cljs.core.__destructure_map.call(null,map__28380);
var shadow = cljs.core.get.call(null,map__28380__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__28379__$1 = G__28379;
while(true){
var d__$2 = d__$1;
var map__28382 = G__28379__$1;
var map__28382__$1 = cljs.core.__destructure_map.call(null,map__28382);
var shadow__$1 = cljs.core.get.call(null,map__28382__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__28383 = (d__$2 + (1));
var G__28384 = shadow__$1;
d__$1 = G__28383;
G__28379__$1 = G__28384;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__28385){
var map__28386 = p__28385;
var map__28386__$1 = cljs.core.__destructure_map.call(null,map__28386);
var name_var = map__28386__$1;
var name = cljs.core.get.call(null,map__28386__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__28386__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__28387 = info;
var map__28387__$1 = cljs.core.__destructure_map.call(null,map__28387);
var ns = cljs.core.get.call(null,map__28387__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__28387__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if((!((cljs.core.get.call(null,reserved,s) == null)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__28389 = arguments.length;
switch (G__28389) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
}));

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.impl.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if((!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null)))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):(((!((renamed == null))))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if(((field === true) || ((depth === (0))))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",(25),(1),(11790),(11790),new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)])).call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
}));

(cljs.compiler.munge.cljs$lang$maxFixedArity = 2);

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__28391 = cp;
switch (G__28391) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if(((((31) < cp)) && ((cp < (127))))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.call(null,"0000",unpadded.length);
return ["\\u",pad,cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__28393_28397 = cljs.core.seq.call(null,s);
var chunk__28394_28398 = null;
var count__28395_28399 = (0);
var i__28396_28400 = (0);
while(true){
if((i__28396_28400 < count__28395_28399)){
var c_28401 = cljs.core._nth.call(null,chunk__28394_28398,i__28396_28400);
sb.append(cljs.compiler.escape_char.call(null,c_28401));


var G__28402 = seq__28393_28397;
var G__28403 = chunk__28394_28398;
var G__28404 = count__28395_28399;
var G__28405 = (i__28396_28400 + (1));
seq__28393_28397 = G__28402;
chunk__28394_28398 = G__28403;
count__28395_28399 = G__28404;
i__28396_28400 = G__28405;
continue;
} else {
var temp__5804__auto___28406 = cljs.core.seq.call(null,seq__28393_28397);
if(temp__5804__auto___28406){
var seq__28393_28407__$1 = temp__5804__auto___28406;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28393_28407__$1)){
var c__5568__auto___28408 = cljs.core.chunk_first.call(null,seq__28393_28407__$1);
var G__28409 = cljs.core.chunk_rest.call(null,seq__28393_28407__$1);
var G__28410 = c__5568__auto___28408;
var G__28411 = cljs.core.count.call(null,c__5568__auto___28408);
var G__28412 = (0);
seq__28393_28397 = G__28409;
chunk__28394_28398 = G__28410;
count__28395_28399 = G__28411;
i__28396_28400 = G__28412;
continue;
} else {
var c_28413 = cljs.core.first.call(null,seq__28393_28407__$1);
sb.append(cljs.compiler.escape_char.call(null,c_28413));


var G__28414 = cljs.core.next.call(null,seq__28393_28407__$1);
var G__28415 = null;
var G__28416 = (0);
var G__28417 = (0);
seq__28393_28397 = G__28414;
chunk__28394_28398 = G__28415;
count__28395_28399 = G__28416;
i__28396_28400 = G__28417;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\""].join('');
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__5642__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__28418_28421 = ast;
var map__28418_28422__$1 = cljs.core.__destructure_map.call(null,map__28418_28421);
var env_28423 = cljs.core.get.call(null,map__28418_28422__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_28423))){
var map__28419_28424 = env_28423;
var map__28419_28425__$1 = cljs.core.__destructure_map.call(null,map__28419_28424);
var line_28426 = cljs.core.get.call(null,map__28419_28425__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_28427 = cljs.core.get.call(null,map__28419_28425__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__28420 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__28420,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__28420;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_28426 - (1))], null),cljs.core.fnil.call(null,(function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_28427)?(column_28427 - (1)):(0))], null),cljs.core.fnil.call(null,(function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map.call(null)));
}));
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__28436 = arguments.length;
switch (G__28436) {
case 0:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___28443 = arguments.length;
var i__5770__auto___28444 = (0);
while(true){
if((i__5770__auto___28444 < len__5769__auto___28443)){
args_arr__5794__auto__.push((arguments[i__5770__auto___28444]));

var G__28445 = (i__5770__auto___28444 + (1));
i__5770__auto___28444 = G__28445;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((5)),(0),null));
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5795__auto__);

}
});

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1 = (function (a){
if((a == null)){
} else {
if(cljs.analyzer.impl.cljs_map_QMARK_.call(null,a)){
cljs.compiler.emit.call(null,a);
} else {
if(cljs.analyzer.impl.cljs_seq_QMARK_.call(null,a)){
cljs.core.apply.call(null,cljs.compiler.emits,a);
} else {
if(typeof a === 'function'){
a.call(null);
} else {
var s_28446 = (function (){var G__28437 = a;
if((!(typeof a === 'string'))){
return G__28437.toString();
} else {
return G__28437;
}
})();
var temp__5808__auto___28447 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5808__auto___28447 == null)){
} else {
var sm_data_28448 = temp__5808__auto___28447;
cljs.core.swap_BANG_.call(null,sm_data_28448,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__28428_SHARP_){
return (p1__28428_SHARP_ + s_28446.length);
}));
}

cljs.core.print.call(null,s_28446);

}
}
}
}

return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.call(null,a);

return cljs.compiler.emits.call(null,b);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

return cljs.compiler.emits.call(null,c);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

return cljs.compiler.emits.call(null,d);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

return cljs.compiler.emits.call(null,e);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

var seq__28438 = cljs.core.seq.call(null,xs);
var chunk__28439 = null;
var count__28440 = (0);
var i__28441 = (0);
while(true){
if((i__28441 < count__28440)){
var x = cljs.core._nth.call(null,chunk__28439,i__28441);
cljs.compiler.emits.call(null,x);


var G__28449 = seq__28438;
var G__28450 = chunk__28439;
var G__28451 = count__28440;
var G__28452 = (i__28441 + (1));
seq__28438 = G__28449;
chunk__28439 = G__28450;
count__28440 = G__28451;
i__28441 = G__28452;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__28438);
if(temp__5804__auto__){
var seq__28438__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28438__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__28438__$1);
var G__28453 = cljs.core.chunk_rest.call(null,seq__28438__$1);
var G__28454 = c__5568__auto__;
var G__28455 = cljs.core.count.call(null,c__5568__auto__);
var G__28456 = (0);
seq__28438 = G__28453;
chunk__28439 = G__28454;
count__28440 = G__28455;
i__28441 = G__28456;
continue;
} else {
var x = cljs.core.first.call(null,seq__28438__$1);
cljs.compiler.emits.call(null,x);


var G__28457 = cljs.core.next.call(null,seq__28438__$1);
var G__28458 = null;
var G__28459 = (0);
var G__28460 = (0);
seq__28438 = G__28457;
chunk__28439 = G__28458;
count__28440 = G__28459;
i__28441 = G__28460;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq28430){
var G__28431 = cljs.core.first.call(null,seq28430);
var seq28430__$1 = cljs.core.next.call(null,seq28430);
var G__28432 = cljs.core.first.call(null,seq28430__$1);
var seq28430__$2 = cljs.core.next.call(null,seq28430__$1);
var G__28433 = cljs.core.first.call(null,seq28430__$2);
var seq28430__$3 = cljs.core.next.call(null,seq28430__$2);
var G__28434 = cljs.core.first.call(null,seq28430__$3);
var seq28430__$4 = cljs.core.next.call(null,seq28430__$3);
var G__28435 = cljs.core.first.call(null,seq28430__$4);
var seq28430__$5 = cljs.core.next.call(null,seq28430__$4);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28431,G__28432,G__28433,G__28434,G__28435,seq28430__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__28461){
var map__28462 = p__28461;
var map__28462__$1 = cljs.core.__destructure_map.call(null,map__28462);
var m = map__28462__$1;
var gen_line = cljs.core.get.call(null,map__28462__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__28470 = arguments.length;
switch (G__28470) {
case 0:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___28476 = arguments.length;
var i__5770__auto___28477 = (0);
while(true){
if((i__5770__auto___28477 < len__5769__auto___28476)){
args_arr__5794__auto__.push((arguments[i__5770__auto___28477]));

var G__28478 = (i__5770__auto___28477 + (1));
i__5770__auto___28477 = G__28478;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((5)),(0),null));
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5795__auto__);

}
});

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1 = (function (a){
cljs.compiler.emits.call(null,a);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

var seq__28471_28479 = cljs.core.seq.call(null,xs);
var chunk__28472_28480 = null;
var count__28473_28481 = (0);
var i__28474_28482 = (0);
while(true){
if((i__28474_28482 < count__28473_28481)){
var x_28483 = cljs.core._nth.call(null,chunk__28472_28480,i__28474_28482);
cljs.compiler.emits.call(null,x_28483);


var G__28484 = seq__28471_28479;
var G__28485 = chunk__28472_28480;
var G__28486 = count__28473_28481;
var G__28487 = (i__28474_28482 + (1));
seq__28471_28479 = G__28484;
chunk__28472_28480 = G__28485;
count__28473_28481 = G__28486;
i__28474_28482 = G__28487;
continue;
} else {
var temp__5804__auto___28488 = cljs.core.seq.call(null,seq__28471_28479);
if(temp__5804__auto___28488){
var seq__28471_28489__$1 = temp__5804__auto___28488;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28471_28489__$1)){
var c__5568__auto___28490 = cljs.core.chunk_first.call(null,seq__28471_28489__$1);
var G__28491 = cljs.core.chunk_rest.call(null,seq__28471_28489__$1);
var G__28492 = c__5568__auto___28490;
var G__28493 = cljs.core.count.call(null,c__5568__auto___28490);
var G__28494 = (0);
seq__28471_28479 = G__28491;
chunk__28472_28480 = G__28492;
count__28473_28481 = G__28493;
i__28474_28482 = G__28494;
continue;
} else {
var x_28495 = cljs.core.first.call(null,seq__28471_28489__$1);
cljs.compiler.emits.call(null,x_28495);


var G__28496 = cljs.core.next.call(null,seq__28471_28489__$1);
var G__28497 = null;
var G__28498 = (0);
var G__28499 = (0);
seq__28471_28479 = G__28496;
chunk__28472_28480 = G__28497;
count__28473_28481 = G__28498;
i__28474_28482 = G__28499;
continue;
}
} else {
}
}
break;
}

return cljs.compiler._emitln.call(null);
}));

/** @this {Function} */
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq28464){
var G__28465 = cljs.core.first.call(null,seq28464);
var seq28464__$1 = cljs.core.next.call(null,seq28464);
var G__28466 = cljs.core.first.call(null,seq28464__$1);
var seq28464__$2 = cljs.core.next.call(null,seq28464__$1);
var G__28467 = cljs.core.first.call(null,seq28464__$2);
var seq28464__$3 = cljs.core.next.call(null,seq28464__$2);
var G__28468 = cljs.core.first.call(null,seq28464__$3);
var seq28464__$4 = cljs.core.next.call(null,seq28464__$3);
var G__28469 = cljs.core.first.call(null,seq28464__$4);
var seq28464__$5 = cljs.core.next.call(null,seq28464__$4);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28465,G__28466,G__28467,G__28468,G__28469,seq28464__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28500_28504 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28501_28505 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28502_28506 = true;
var _STAR_print_fn_STAR__temp_val__28503_28507 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28502_28506);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28503_28507);

try{cljs.compiler.emit.call(null,expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28501_28505);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28500_28504);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__5642__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant*"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}









cljs.compiler.all_distinct_QMARK_ = (function cljs$compiler$all_distinct_QMARK_(xs){
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,xs);
});
cljs.compiler.emit_constant_no_meta = (function cljs$compiler$emit_constant_no_meta(x){
if(cljs.analyzer.impl.cljs_seq_QMARK_.call(null,x)){
return cljs.compiler.emit_list.call(null,x,cljs.compiler.emit_constants_comma_sep);
} else {
if(cljs.core.record_QMARK_.call(null,x)){
var vec__28508 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__28508,(0),null);
var name = cljs.core.nth.call(null,vec__28508,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,(function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
}));
} else {
if(cljs.analyzer.impl.cljs_map_QMARK_.call(null,x)){
return cljs.compiler.emit_map.call(null,cljs.core.keys.call(null,x),cljs.core.vals.call(null,x),cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_);
} else {
if(cljs.analyzer.impl.cljs_vector_QMARK_.call(null,x)){
return cljs.compiler.emit_vector.call(null,x,cljs.compiler.emit_constants_comma_sep);
} else {
if(cljs.analyzer.impl.cljs_set_QMARK_.call(null,x)){
return cljs.compiler.emit_set.call(null,x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_);
} else {
return cljs.compiler.emit_constant_STAR_.call(null,x);

}
}
}
}
}
});
cljs.compiler.emit_constant = (function cljs$compiler$emit_constant(v){
var m = cljs.analyzer.elide_irrelevant_meta.call(null,cljs.core.meta.call(null,v));
if((!((cljs.core.seq.call(null,m) == null)))){
return cljs.compiler.emit_with_meta.call(null,(function (){
return cljs.compiler.emit_constant_no_meta.call(null,v);
}),(function (){
return cljs.compiler.emit_constant_no_meta.call(null,m);
}));
} else {
return cljs.compiler.emit_constant_no_meta.call(null,v);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.call(null,["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.pr_str.call(null,cljs.core.type.call(null,x))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.call(null,"NaN");
} else {
if(cljs.core.not.call(null,isFinite(x))){
return cljs.compiler.emits.call(null,(((x > (0)))?"Infinity":"-Infinity"));
} else {
if((((x === (0))) && ((((1) / x) < (0))))){
return cljs.compiler.emits.call(null,"(-0)");
} else {
return cljs.compiler.emits.call(null,"(",x,")");

}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__28511 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__28511,(0),null);
var flags = cljs.core.nth.call(null,vec__28511,(1),null);
var pattern = cljs.core.nth.call(null,vec__28511,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[ns,"/",name].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = (((!((ns == null))))?[ns,"/",name].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.Keyword,(function (x){
var temp__5802__auto__ = (function (){var and__5043__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__5043__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var value = temp__5802__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.Symbol,(function (x){
var temp__5802__auto__ = (function (){var and__5043__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__5043__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var value = temp__5802__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.compiler.emit_constants_comma_sep = (function cljs$compiler$emit_constants_comma_sep(cs){
return (function (){
return cljs.core.doall.call(null,cljs.core.map_indexed.call(null,(function (i,m){
if(cljs.core.even_QMARK_.call(null,i)){
return cljs.compiler.emit_constant.call(null,m);
} else {
return cljs.compiler.emits.call(null,m);
}
}),cljs.compiler.comma_sep.call(null,cs)));
});
});
cljs.compiler.array_map_threshold = (8);
cljs.compiler.emit_inst = (function cljs$compiler$emit_inst(inst_ms){
return cljs.compiler.emits.call(null,"new Date(",inst_ms,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Date,(function (date){
return cljs.compiler.emit_inst.call(null,date.getTime());
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.tagged_literals.JSValue,(function (v){
var items = v.val;
if(cljs.core.map_QMARK_.call(null,items)){
return cljs.compiler.emit_js_object.call(null,items,(function (p1__28514_SHARP_){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__28514_SHARP_);
});
}));
} else {
return cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__28516){
var map__28517 = p__28516;
var map__28517__$1 = cljs.core.__destructure_map.call(null,map__28517);
var ast = map__28517__$1;
var info = cljs.core.get.call(null,map__28517__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__28517__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__28517__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5802__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5802__auto__)){
var const_expr = temp__5802__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__28518 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__28518__$1 = cljs.core.__destructure_map.call(null,map__28518);
var cenv = map__28518__$1;
var options = cljs.core.get.call(null,map__28518__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__5045__auto__ = js_module_name;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,ast));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__28519 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__5043__auto__;
}
})())){
return clojure.set.difference.call(null,G__28519,cljs.analyzer.es5_allowed);
} else {
return G__28519;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__5045__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__28520 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__28520,reserved);
} else {
return G__28520;
}
})();
var env__9256__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__28521_28522 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__28521_28523__$1 = (((G__28521_28522 instanceof cljs.core.Keyword))?G__28521_28522.fqn:null);
switch (G__28521_28523__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace.call(null,var_name))){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"].",cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved));
} else {
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.call(null,"default",cljs.core.name.call(null,var_name));
} else {
return and__5043__auto__;
}
})())){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"]");
} else {
cljs.compiler.emits.call(null,info__$2);
}

break;
default:
cljs.compiler.emits.call(null,info__$2);

}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"binding","binding",539932593),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"local","local",-1497766724),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__28525){
var map__28526 = p__28525;
var map__28526__$1 = cljs.core.__destructure_map.call(null,map__28526);
var arg = map__28526__$1;
var env = cljs.core.get.call(null,map__28526__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__28526__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__28526__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__28526__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__28527 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__28527__$1 = cljs.core.__destructure_map.call(null,map__28527);
var name = cljs.core.get.call(null,map__28527__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__9256__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__28528){
var map__28529 = p__28528;
var map__28529__$1 = cljs.core.__destructure_map.call(null,map__28529);
var expr = cljs.core.get.call(null,map__28529__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__28529__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__28529__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9256__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,(function (p1__28530_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__28530_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count.call(null,keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count.call(null,keys) === (0))){
return cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(distinct_keys_QMARK_.call(null,keys))){
return cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.createAsIfByAssoc([",comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"])");
}
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",comma_sep.call(null,keys),"],[",comma_sep.call(null,vals),"])");

}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__28531){
var map__28532 = p__28531;
var map__28532__$1 = cljs.core.__destructure_map.call(null,map__28532);
var env = cljs.core.get.call(null,map__28532__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__28532__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__28532__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__9256__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_list = (function cljs$compiler$emit_list(items,comma_sep){
if(cljs.core.empty_QMARK_.call(null,items)){
return cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
return cljs.compiler.emits.call(null,"cljs.core.list(",comma_sep.call(null,items),")");
}
});
cljs.compiler.emit_vector = (function cljs$compiler$emit_vector(items,comma_sep){
if(cljs.core.empty_QMARK_.call(null,items)){
return cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt = cljs.core.count.call(null,items);
if((cnt < (32))){
return cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",comma_sep.call(null,items),"], null)");
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",comma_sep.call(null,items),"], true)");
}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__28533){
var map__28534 = p__28533;
var map__28534__$1 = cljs.core.__destructure_map.call(null,map__28534);
var items = cljs.core.get.call(null,map__28534__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__28534__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9256__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,(function (p1__28535_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__28535_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count.call(null,items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_.call(null,items)){
return cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(distinct_constants_QMARK_.call(null,items))){
return cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.createAsIfByAssoc([",comma_sep.call(null,items),"])");

}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__28536){
var map__28537 = p__28536;
var map__28537__$1 = cljs.core.__destructure_map.call(null,map__28537);
var items = cljs.core.get.call(null,map__28537__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__28537__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9256__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5804__auto___28560 = cljs.core.seq.call(null,items);
if(temp__5804__auto___28560){
var items_28561__$1 = temp__5804__auto___28560;
var vec__28538_28562 = items_28561__$1;
var seq__28539_28563 = cljs.core.seq.call(null,vec__28538_28562);
var first__28540_28564 = cljs.core.first.call(null,seq__28539_28563);
var seq__28539_28565__$1 = cljs.core.next.call(null,seq__28539_28563);
var vec__28541_28566 = first__28540_28564;
var k_28567 = cljs.core.nth.call(null,vec__28541_28566,(0),null);
var v_28568 = cljs.core.nth.call(null,vec__28541_28566,(1),null);
var r_28569 = seq__28539_28565__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_28567),"\": ",emit_js_object_val.call(null,v_28568));

var seq__28544_28570 = cljs.core.seq.call(null,r_28569);
var chunk__28545_28571 = null;
var count__28546_28572 = (0);
var i__28547_28573 = (0);
while(true){
if((i__28547_28573 < count__28546_28572)){
var vec__28554_28574 = cljs.core._nth.call(null,chunk__28545_28571,i__28547_28573);
var k_28575__$1 = cljs.core.nth.call(null,vec__28554_28574,(0),null);
var v_28576__$1 = cljs.core.nth.call(null,vec__28554_28574,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_28575__$1),"\": ",emit_js_object_val.call(null,v_28576__$1));


var G__28577 = seq__28544_28570;
var G__28578 = chunk__28545_28571;
var G__28579 = count__28546_28572;
var G__28580 = (i__28547_28573 + (1));
seq__28544_28570 = G__28577;
chunk__28545_28571 = G__28578;
count__28546_28572 = G__28579;
i__28547_28573 = G__28580;
continue;
} else {
var temp__5804__auto___28581__$1 = cljs.core.seq.call(null,seq__28544_28570);
if(temp__5804__auto___28581__$1){
var seq__28544_28582__$1 = temp__5804__auto___28581__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28544_28582__$1)){
var c__5568__auto___28583 = cljs.core.chunk_first.call(null,seq__28544_28582__$1);
var G__28584 = cljs.core.chunk_rest.call(null,seq__28544_28582__$1);
var G__28585 = c__5568__auto___28583;
var G__28586 = cljs.core.count.call(null,c__5568__auto___28583);
var G__28587 = (0);
seq__28544_28570 = G__28584;
chunk__28545_28571 = G__28585;
count__28546_28572 = G__28586;
i__28547_28573 = G__28587;
continue;
} else {
var vec__28557_28588 = cljs.core.first.call(null,seq__28544_28582__$1);
var k_28589__$1 = cljs.core.nth.call(null,vec__28557_28588,(0),null);
var v_28590__$1 = cljs.core.nth.call(null,vec__28557_28588,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_28589__$1),"\": ",emit_js_object_val.call(null,v_28590__$1));


var G__28591 = cljs.core.next.call(null,seq__28544_28582__$1);
var G__28592 = null;
var G__28593 = (0);
var G__28594 = (0);
seq__28544_28570 = G__28591;
chunk__28545_28571 = G__28592;
count__28546_28572 = G__28593;
i__28547_28573 = G__28594;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_js_array = (function cljs$compiler$emit_js_array(items,comma_sep){
return cljs.compiler.emits.call(null,"[",comma_sep.call(null,items),"]");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__28595){
var map__28596 = p__28595;
var map__28596__$1 = cljs.core.__destructure_map.call(null,map__28596);
var keys = cljs.core.get.call(null,map__28596__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__28596__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__28596__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9256__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__28597){
var map__28598 = p__28597;
var map__28598__$1 = cljs.core.__destructure_map.call(null,map__28598);
var items = cljs.core.get.call(null,map__28598__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__28598__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9256__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__28599){
var map__28600 = p__28599;
var map__28600__$1 = cljs.core.__destructure_map.call(null,map__28600);
var expr = cljs.core.get.call(null,map__28600__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__28601){
var map__28602 = p__28601;
var map__28602__$1 = cljs.core.__destructure_map.call(null,map__28602);
var form = cljs.core.get.call(null,map__28602__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__28602__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__9256__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__28603 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__28603__$1 = cljs.core.__destructure_map.call(null,map__28603);
var op = cljs.core.get.call(null,map__28603__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__28603__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__28603__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__5045__auto__ = (function (){var and__5043__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842));
if(and__5043__auto__){
var and__5043__auto____$1 = form;
if(cljs.core.truth_(and__5043__auto____$1)){
return (!(((((typeof form === 'string') && (cljs.core._EQ_.call(null,form,"")))) || (((typeof form === 'number') && ((form === (0))))))));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = (!((const_expr == null)));
if(and__5043__auto__){
return cljs.compiler.truthy_constant_QMARK_.call(null,const_expr);
} else {
return and__5043__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(expr){
var map__28604 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__28604__$1 = cljs.core.__destructure_map.call(null,map__28604);
var op = cljs.core.get.call(null,map__28604__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__28604__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__28604__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__5045__auto__ = ((cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842))) && (((form === false) || ((form == null)))));
if(or__5045__auto__){
return or__5045__auto__;
} else {
var and__5043__auto__ = (!((const_expr == null)));
if(and__5043__auto__){
return cljs.compiler.falsey_constant_QMARK_.call(null,const_expr);
} else {
return and__5043__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__5045__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__28605){
var map__28606 = p__28605;
var map__28606__$1 = cljs.core.__destructure_map.call(null,map__28606);
var test__$1 = cljs.core.get.call(null,map__28606__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__28606__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__28606__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__28606__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__28606__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__5045__auto__ = unchecked;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test__$1);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test__$1))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test__$1))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test__$1,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test__$1,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test__$1,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__28607){
var map__28608 = p__28607;
var map__28608__$1 = cljs.core.__destructure_map.call(null,map__28608);
var v = cljs.core.get.call(null,map__28608__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__28608__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__28608__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__28608__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__28609_28637 = cljs.core.seq.call(null,nodes);
var chunk__28610_28638 = null;
var count__28611_28639 = (0);
var i__28612_28640 = (0);
while(true){
if((i__28612_28640 < count__28611_28639)){
var map__28625_28641 = cljs.core._nth.call(null,chunk__28610_28638,i__28612_28640);
var map__28625_28642__$1 = cljs.core.__destructure_map.call(null,map__28625_28641);
var ts_28643 = cljs.core.get.call(null,map__28625_28642__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__28626_28644 = cljs.core.get.call(null,map__28625_28642__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__28626_28645__$1 = cljs.core.__destructure_map.call(null,map__28626_28644);
var then_28646 = cljs.core.get.call(null,map__28626_28645__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__28627_28647 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_28643));
var chunk__28628_28648 = null;
var count__28629_28649 = (0);
var i__28630_28650 = (0);
while(true){
if((i__28630_28650 < count__28629_28649)){
var test_28651__$1 = cljs.core._nth.call(null,chunk__28628_28648,i__28630_28650);
cljs.compiler.emitln.call(null,"case ",test_28651__$1,":");


var G__28652 = seq__28627_28647;
var G__28653 = chunk__28628_28648;
var G__28654 = count__28629_28649;
var G__28655 = (i__28630_28650 + (1));
seq__28627_28647 = G__28652;
chunk__28628_28648 = G__28653;
count__28629_28649 = G__28654;
i__28630_28650 = G__28655;
continue;
} else {
var temp__5804__auto___28656 = cljs.core.seq.call(null,seq__28627_28647);
if(temp__5804__auto___28656){
var seq__28627_28657__$1 = temp__5804__auto___28656;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28627_28657__$1)){
var c__5568__auto___28658 = cljs.core.chunk_first.call(null,seq__28627_28657__$1);
var G__28659 = cljs.core.chunk_rest.call(null,seq__28627_28657__$1);
var G__28660 = c__5568__auto___28658;
var G__28661 = cljs.core.count.call(null,c__5568__auto___28658);
var G__28662 = (0);
seq__28627_28647 = G__28659;
chunk__28628_28648 = G__28660;
count__28629_28649 = G__28661;
i__28630_28650 = G__28662;
continue;
} else {
var test_28663__$1 = cljs.core.first.call(null,seq__28627_28657__$1);
cljs.compiler.emitln.call(null,"case ",test_28663__$1,":");


var G__28664 = cljs.core.next.call(null,seq__28627_28657__$1);
var G__28665 = null;
var G__28666 = (0);
var G__28667 = (0);
seq__28627_28647 = G__28664;
chunk__28628_28648 = G__28665;
count__28629_28649 = G__28666;
i__28630_28650 = G__28667;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_28646);
} else {
cljs.compiler.emitln.call(null,then_28646);
}

cljs.compiler.emitln.call(null,"break;");


var G__28668 = seq__28609_28637;
var G__28669 = chunk__28610_28638;
var G__28670 = count__28611_28639;
var G__28671 = (i__28612_28640 + (1));
seq__28609_28637 = G__28668;
chunk__28610_28638 = G__28669;
count__28611_28639 = G__28670;
i__28612_28640 = G__28671;
continue;
} else {
var temp__5804__auto___28672 = cljs.core.seq.call(null,seq__28609_28637);
if(temp__5804__auto___28672){
var seq__28609_28673__$1 = temp__5804__auto___28672;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28609_28673__$1)){
var c__5568__auto___28674 = cljs.core.chunk_first.call(null,seq__28609_28673__$1);
var G__28675 = cljs.core.chunk_rest.call(null,seq__28609_28673__$1);
var G__28676 = c__5568__auto___28674;
var G__28677 = cljs.core.count.call(null,c__5568__auto___28674);
var G__28678 = (0);
seq__28609_28637 = G__28675;
chunk__28610_28638 = G__28676;
count__28611_28639 = G__28677;
i__28612_28640 = G__28678;
continue;
} else {
var map__28631_28679 = cljs.core.first.call(null,seq__28609_28673__$1);
var map__28631_28680__$1 = cljs.core.__destructure_map.call(null,map__28631_28679);
var ts_28681 = cljs.core.get.call(null,map__28631_28680__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__28632_28682 = cljs.core.get.call(null,map__28631_28680__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__28632_28683__$1 = cljs.core.__destructure_map.call(null,map__28632_28682);
var then_28684 = cljs.core.get.call(null,map__28632_28683__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__28633_28685 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_28681));
var chunk__28634_28686 = null;
var count__28635_28687 = (0);
var i__28636_28688 = (0);
while(true){
if((i__28636_28688 < count__28635_28687)){
var test_28689__$1 = cljs.core._nth.call(null,chunk__28634_28686,i__28636_28688);
cljs.compiler.emitln.call(null,"case ",test_28689__$1,":");


var G__28690 = seq__28633_28685;
var G__28691 = chunk__28634_28686;
var G__28692 = count__28635_28687;
var G__28693 = (i__28636_28688 + (1));
seq__28633_28685 = G__28690;
chunk__28634_28686 = G__28691;
count__28635_28687 = G__28692;
i__28636_28688 = G__28693;
continue;
} else {
var temp__5804__auto___28694__$1 = cljs.core.seq.call(null,seq__28633_28685);
if(temp__5804__auto___28694__$1){
var seq__28633_28695__$1 = temp__5804__auto___28694__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28633_28695__$1)){
var c__5568__auto___28696 = cljs.core.chunk_first.call(null,seq__28633_28695__$1);
var G__28697 = cljs.core.chunk_rest.call(null,seq__28633_28695__$1);
var G__28698 = c__5568__auto___28696;
var G__28699 = cljs.core.count.call(null,c__5568__auto___28696);
var G__28700 = (0);
seq__28633_28685 = G__28697;
chunk__28634_28686 = G__28698;
count__28635_28687 = G__28699;
i__28636_28688 = G__28700;
continue;
} else {
var test_28701__$1 = cljs.core.first.call(null,seq__28633_28695__$1);
cljs.compiler.emitln.call(null,"case ",test_28701__$1,":");


var G__28702 = cljs.core.next.call(null,seq__28633_28695__$1);
var G__28703 = null;
var G__28704 = (0);
var G__28705 = (0);
seq__28633_28685 = G__28702;
chunk__28634_28686 = G__28703;
count__28635_28687 = G__28704;
i__28636_28688 = G__28705;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_28684);
} else {
cljs.compiler.emitln.call(null,then_28684);
}

cljs.compiler.emitln.call(null,"break;");


var G__28706 = cljs.core.next.call(null,seq__28609_28673__$1);
var G__28707 = null;
var G__28708 = (0);
var G__28709 = (0);
seq__28609_28637 = G__28706;
chunk__28610_28638 = G__28707;
count__28611_28639 = G__28708;
i__28612_28640 = G__28709;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__28710){
var map__28711 = p__28710;
var map__28711__$1 = cljs.core.__destructure_map.call(null,map__28711);
var throw$ = cljs.core.get.call(null,map__28711__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__28711__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(goog.string.startsWith(t,"!")){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(goog.string.startsWith(t,"{")){
return t;
} else {
if(goog.string.startsWith(t,"function")){
var idx = t.lastIndexOf(":");
var vec__28713 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__28713,(0),null);
var rstr = cljs.core.nth.call(null,vec__28713,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,(function (p1__28712_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__28712_SHARP_);
}),clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__28716 = ["function(",clojure.string.join.call(null,",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__28716,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__28716;
}
} else {
if(goog.string.endsWith(t,"=")){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),"="].join('');
} else {
return cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t)))));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return ["{",clojure.string.join.call(null,"|",cljs.core.map.call(null,(function (p1__28717_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__28717_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__28718 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__28719 = cljs.core.seq.call(null,vec__28718);
var first__28720 = cljs.core.first.call(null,seq__28719);
var seq__28719__$1 = cljs.core.next.call(null,seq__28719);
var p = first__28720;
var first__28720__$1 = cljs.core.first.call(null,seq__28719__$1);
var seq__28719__$2 = cljs.core.next.call(null,seq__28719__$1);
var ts = first__28720__$1;
var first__28720__$2 = cljs.core.first.call(null,seq__28719__$2);
var seq__28719__$3 = cljs.core.next.call(null,seq__28719__$2);
var n = first__28720__$2;
var xs = seq__28719__$3;
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__5043__auto__){
var and__5043__auto____$1 = ts;
if(cljs.core.truth_(and__5043__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__28721 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__28722 = cljs.core.seq.call(null,vec__28721);
var first__28723 = cljs.core.first.call(null,seq__28722);
var seq__28722__$1 = cljs.core.next.call(null,seq__28722);
var p = first__28723;
var first__28723__$1 = cljs.core.first.call(null,seq__28722__$1);
var seq__28722__$2 = cljs.core.next.call(null,seq__28722__$1);
var ts = first__28723__$1;
var xs = seq__28722__$2;
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__5043__auto__){
var and__5043__auto____$1 = ts;
if(cljs.core.truth_(and__5043__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__28726 = arguments.length;
switch (G__28726) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
}));

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = (function cljs$compiler$print_comment_lines(e){
var vec__28734 = cljs.core.map.call(null,(function (p1__28724_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__28724_SHARP_);
} else {
return p1__28724_SHARP_;
}
}),clojure.string.split_lines.call(null,e));
var seq__28735 = cljs.core.seq.call(null,vec__28734);
var first__28736 = cljs.core.first.call(null,seq__28735);
var seq__28735__$1 = cljs.core.next.call(null,seq__28735);
var x = first__28736;
var ys = seq__28735__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__28737 = cljs.core.seq.call(null,ys);
var chunk__28738 = null;
var count__28739 = (0);
var i__28740 = (0);
while(true){
if((i__28740 < count__28739)){
var next_line = cljs.core._nth.call(null,chunk__28738,i__28740);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__28746 = seq__28737;
var G__28747 = chunk__28738;
var G__28748 = count__28739;
var G__28749 = (i__28740 + (1));
seq__28737 = G__28746;
chunk__28738 = G__28747;
count__28739 = G__28748;
i__28740 = G__28749;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__28737);
if(temp__5804__auto__){
var seq__28737__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28737__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__28737__$1);
var G__28750 = cljs.core.chunk_rest.call(null,seq__28737__$1);
var G__28751 = c__5568__auto__;
var G__28752 = cljs.core.count.call(null,c__5568__auto__);
var G__28753 = (0);
seq__28737 = G__28750;
chunk__28738 = G__28751;
count__28739 = G__28752;
i__28740 = G__28753;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__28737__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__28754 = cljs.core.next.call(null,seq__28737__$1);
var G__28755 = null;
var G__28756 = (0);
var G__28757 = (0);
seq__28737 = G__28754;
chunk__28738 = G__28755;
count__28739 = G__28756;
i__28740 = G__28757;
continue;
}
} else {
return null;
}
}
break;
}
});
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__28741_28758 = cljs.core.seq.call(null,docs__$2);
var chunk__28742_28759 = null;
var count__28743_28760 = (0);
var i__28744_28761 = (0);
while(true){
if((i__28744_28761 < count__28743_28760)){
var e_28762 = cljs.core._nth.call(null,chunk__28742_28759,i__28744_28761);
if(cljs.core.truth_(e_28762)){
print_comment_lines.call(null,e_28762);
} else {
}


var G__28763 = seq__28741_28758;
var G__28764 = chunk__28742_28759;
var G__28765 = count__28743_28760;
var G__28766 = (i__28744_28761 + (1));
seq__28741_28758 = G__28763;
chunk__28742_28759 = G__28764;
count__28743_28760 = G__28765;
i__28744_28761 = G__28766;
continue;
} else {
var temp__5804__auto___28767 = cljs.core.seq.call(null,seq__28741_28758);
if(temp__5804__auto___28767){
var seq__28741_28768__$1 = temp__5804__auto___28767;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28741_28768__$1)){
var c__5568__auto___28769 = cljs.core.chunk_first.call(null,seq__28741_28768__$1);
var G__28770 = cljs.core.chunk_rest.call(null,seq__28741_28768__$1);
var G__28771 = c__5568__auto___28769;
var G__28772 = cljs.core.count.call(null,c__5568__auto___28769);
var G__28773 = (0);
seq__28741_28758 = G__28770;
chunk__28742_28759 = G__28771;
count__28743_28760 = G__28772;
i__28744_28761 = G__28773;
continue;
} else {
var e_28774 = cljs.core.first.call(null,seq__28741_28768__$1);
if(cljs.core.truth_(e_28774)){
print_comment_lines.call(null,e_28774);
} else {
}


var G__28775 = cljs.core.next.call(null,seq__28741_28768__$1);
var G__28776 = null;
var G__28777 = (0);
var G__28778 = (0);
seq__28741_28758 = G__28775;
chunk__28742_28759 = G__28776;
count__28743_28760 = G__28777;
i__28744_28761 = G__28778;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
}));

(cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3);

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return ((typeof x === 'string') || (((x === true) || (((x === false) || (typeof x === 'number'))))));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__5043__auto__ = cljs.core.some.call(null,(function (p1__28780_SHARP_){
return goog.string.startsWith(p1__28780_SHARP_,"@define");
}),jsdoc);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = opts;
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__5043__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)], null));
if(cljs.compiler.valid_define_value_QMARK_.call(null,define)){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__28781){
var map__28782 = p__28781;
var map__28782__$1 = cljs.core.__destructure_map.call(null,map__28782);
var doc = cljs.core.get.call(null,map__28782__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__28782__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test__$1 = cljs.core.get.call(null,map__28782__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.call(null,map__28782__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.call(null,map__28782__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__28782__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__28782__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__28782__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__28782__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__28782__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__5045__auto__ = init;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,(cljs.core.truth_(goog_define)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["@define {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog_define),"}"].join('')], null):null),jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__5802__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__5802__auto__)){
var define = temp__5802__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"the-var","the-var",1428415613),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__5043__auto__)){
return test__$1;
} else {
return and__5043__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test__$1,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__28783){
var map__28784 = p__28783;
var map__28784__$1 = cljs.core.__destructure_map.call(null,map__28784);
var name = cljs.core.get.call(null,map__28784__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__28784__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__28784__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__28785_28809 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__28786_28810 = null;
var count__28787_28811 = (0);
var i__28788_28812 = (0);
while(true){
if((i__28788_28812 < count__28787_28811)){
var vec__28795_28813 = cljs.core._nth.call(null,chunk__28786_28810,i__28788_28812);
var i_28814 = cljs.core.nth.call(null,vec__28795_28813,(0),null);
var param_28815 = cljs.core.nth.call(null,vec__28795_28813,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_28815);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__28816 = seq__28785_28809;
var G__28817 = chunk__28786_28810;
var G__28818 = count__28787_28811;
var G__28819 = (i__28788_28812 + (1));
seq__28785_28809 = G__28816;
chunk__28786_28810 = G__28817;
count__28787_28811 = G__28818;
i__28788_28812 = G__28819;
continue;
} else {
var temp__5804__auto___28820 = cljs.core.seq.call(null,seq__28785_28809);
if(temp__5804__auto___28820){
var seq__28785_28821__$1 = temp__5804__auto___28820;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28785_28821__$1)){
var c__5568__auto___28822 = cljs.core.chunk_first.call(null,seq__28785_28821__$1);
var G__28823 = cljs.core.chunk_rest.call(null,seq__28785_28821__$1);
var G__28824 = c__5568__auto___28822;
var G__28825 = cljs.core.count.call(null,c__5568__auto___28822);
var G__28826 = (0);
seq__28785_28809 = G__28823;
chunk__28786_28810 = G__28824;
count__28787_28811 = G__28825;
i__28788_28812 = G__28826;
continue;
} else {
var vec__28798_28827 = cljs.core.first.call(null,seq__28785_28821__$1);
var i_28828 = cljs.core.nth.call(null,vec__28798_28827,(0),null);
var param_28829 = cljs.core.nth.call(null,vec__28798_28827,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_28829);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__28830 = cljs.core.next.call(null,seq__28785_28821__$1);
var G__28831 = null;
var G__28832 = (0);
var G__28833 = (0);
seq__28785_28809 = G__28830;
chunk__28786_28810 = G__28831;
count__28787_28811 = G__28832;
i__28788_28812 = G__28833;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__28801_28834 = cljs.core.seq.call(null,params);
var chunk__28802_28835 = null;
var count__28803_28836 = (0);
var i__28804_28837 = (0);
while(true){
if((i__28804_28837 < count__28803_28836)){
var param_28838 = cljs.core._nth.call(null,chunk__28802_28835,i__28804_28837);
cljs.compiler.emit.call(null,param_28838);

if(cljs.core._EQ_.call(null,param_28838,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__28839 = seq__28801_28834;
var G__28840 = chunk__28802_28835;
var G__28841 = count__28803_28836;
var G__28842 = (i__28804_28837 + (1));
seq__28801_28834 = G__28839;
chunk__28802_28835 = G__28840;
count__28803_28836 = G__28841;
i__28804_28837 = G__28842;
continue;
} else {
var temp__5804__auto___28843 = cljs.core.seq.call(null,seq__28801_28834);
if(temp__5804__auto___28843){
var seq__28801_28844__$1 = temp__5804__auto___28843;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28801_28844__$1)){
var c__5568__auto___28845 = cljs.core.chunk_first.call(null,seq__28801_28844__$1);
var G__28846 = cljs.core.chunk_rest.call(null,seq__28801_28844__$1);
var G__28847 = c__5568__auto___28845;
var G__28848 = cljs.core.count.call(null,c__5568__auto___28845);
var G__28849 = (0);
seq__28801_28834 = G__28846;
chunk__28802_28835 = G__28847;
count__28803_28836 = G__28848;
i__28804_28837 = G__28849;
continue;
} else {
var param_28850 = cljs.core.first.call(null,seq__28801_28844__$1);
cljs.compiler.emit.call(null,param_28850);

if(cljs.core._EQ_.call(null,param_28850,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__28851 = cljs.core.next.call(null,seq__28801_28844__$1);
var G__28852 = null;
var G__28853 = (0);
var G__28854 = (0);
seq__28801_28834 = G__28851;
chunk__28802_28835 = G__28852;
count__28803_28836 = G__28853;
i__28804_28837 = G__28854;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__28805_28855 = cljs.core.seq.call(null,params);
var chunk__28806_28856 = null;
var count__28807_28857 = (0);
var i__28808_28858 = (0);
while(true){
if((i__28808_28858 < count__28807_28857)){
var param_28859 = cljs.core._nth.call(null,chunk__28806_28856,i__28808_28858);
cljs.compiler.emit.call(null,param_28859);

if(cljs.core._EQ_.call(null,param_28859,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__28860 = seq__28805_28855;
var G__28861 = chunk__28806_28856;
var G__28862 = count__28807_28857;
var G__28863 = (i__28808_28858 + (1));
seq__28805_28855 = G__28860;
chunk__28806_28856 = G__28861;
count__28807_28857 = G__28862;
i__28808_28858 = G__28863;
continue;
} else {
var temp__5804__auto___28864 = cljs.core.seq.call(null,seq__28805_28855);
if(temp__5804__auto___28864){
var seq__28805_28865__$1 = temp__5804__auto___28864;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28805_28865__$1)){
var c__5568__auto___28866 = cljs.core.chunk_first.call(null,seq__28805_28865__$1);
var G__28867 = cljs.core.chunk_rest.call(null,seq__28805_28865__$1);
var G__28868 = c__5568__auto___28866;
var G__28869 = cljs.core.count.call(null,c__5568__auto___28866);
var G__28870 = (0);
seq__28805_28855 = G__28867;
chunk__28806_28856 = G__28868;
count__28807_28857 = G__28869;
i__28808_28858 = G__28870;
continue;
} else {
var param_28871 = cljs.core.first.call(null,seq__28805_28865__$1);
cljs.compiler.emit.call(null,param_28871);

if(cljs.core._EQ_.call(null,param_28871,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__28872 = cljs.core.next.call(null,seq__28805_28865__$1);
var G__28873 = null;
var G__28874 = (0);
var G__28875 = (0);
seq__28805_28855 = G__28872;
chunk__28806_28856 = G__28873;
count__28807_28857 = G__28874;
i__28808_28858 = G__28875;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__28876 = cljs.core.seq.call(null,params);
var chunk__28877 = null;
var count__28878 = (0);
var i__28879 = (0);
while(true){
if((i__28879 < count__28878)){
var param = cljs.core._nth.call(null,chunk__28877,i__28879);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__28880 = seq__28876;
var G__28881 = chunk__28877;
var G__28882 = count__28878;
var G__28883 = (i__28879 + (1));
seq__28876 = G__28880;
chunk__28877 = G__28881;
count__28878 = G__28882;
i__28879 = G__28883;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__28876);
if(temp__5804__auto__){
var seq__28876__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28876__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__28876__$1);
var G__28884 = cljs.core.chunk_rest.call(null,seq__28876__$1);
var G__28885 = c__5568__auto__;
var G__28886 = cljs.core.count.call(null,c__5568__auto__);
var G__28887 = (0);
seq__28876 = G__28884;
chunk__28877 = G__28885;
count__28878 = G__28886;
i__28879 = G__28887;
continue;
} else {
var param = cljs.core.first.call(null,seq__28876__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__28888 = cljs.core.next.call(null,seq__28876__$1);
var G__28889 = null;
var G__28890 = (0);
var G__28891 = (0);
seq__28876 = G__28888;
chunk__28877 = G__28889;
count__28878 = G__28890;
i__28879 = G__28891;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__28892){
var map__28893 = p__28892;
var map__28893__$1 = cljs.core.__destructure_map.call(null,map__28893);
var expr = cljs.core.get.call(null,map__28893__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__28893__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__28893__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__28893__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__28893__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__28893__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__9256__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if((((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice)))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__28894){
var map__28895 = p__28894;
var map__28895__$1 = cljs.core.__destructure_map.call(null,map__28895);
var f = map__28895__$1;
var expr = cljs.core.get.call(null,map__28895__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__28895__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__28895__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__28895__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__28895__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__28895__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__28895__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__28895__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__9256__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_28904__$1 = (function (){var or__5045__auto__ = name;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_28905 = cljs.compiler.munge.call(null,name_28904__$1);
var delegate_name_28906 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_28905),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_28906," = function (");

var seq__28896_28907 = cljs.core.seq.call(null,params);
var chunk__28897_28908 = null;
var count__28898_28909 = (0);
var i__28899_28910 = (0);
while(true){
if((i__28899_28910 < count__28898_28909)){
var param_28911 = cljs.core._nth.call(null,chunk__28897_28908,i__28899_28910);
cljs.compiler.emit.call(null,param_28911);

if(cljs.core._EQ_.call(null,param_28911,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__28912 = seq__28896_28907;
var G__28913 = chunk__28897_28908;
var G__28914 = count__28898_28909;
var G__28915 = (i__28899_28910 + (1));
seq__28896_28907 = G__28912;
chunk__28897_28908 = G__28913;
count__28898_28909 = G__28914;
i__28899_28910 = G__28915;
continue;
} else {
var temp__5804__auto___28916 = cljs.core.seq.call(null,seq__28896_28907);
if(temp__5804__auto___28916){
var seq__28896_28917__$1 = temp__5804__auto___28916;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28896_28917__$1)){
var c__5568__auto___28918 = cljs.core.chunk_first.call(null,seq__28896_28917__$1);
var G__28919 = cljs.core.chunk_rest.call(null,seq__28896_28917__$1);
var G__28920 = c__5568__auto___28918;
var G__28921 = cljs.core.count.call(null,c__5568__auto___28918);
var G__28922 = (0);
seq__28896_28907 = G__28919;
chunk__28897_28908 = G__28920;
count__28898_28909 = G__28921;
i__28899_28910 = G__28922;
continue;
} else {
var param_28923 = cljs.core.first.call(null,seq__28896_28917__$1);
cljs.compiler.emit.call(null,param_28923);

if(cljs.core._EQ_.call(null,param_28923,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__28924 = cljs.core.next.call(null,seq__28896_28917__$1);
var G__28925 = null;
var G__28926 = (0);
var G__28927 = (0);
seq__28896_28907 = G__28924;
chunk__28897_28908 = G__28925;
count__28898_28909 = G__28926;
i__28899_28910 = G__28927;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_28905," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_28928 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_28928,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_28906,".call(this,");

var seq__28900_28929 = cljs.core.seq.call(null,params);
var chunk__28901_28930 = null;
var count__28902_28931 = (0);
var i__28903_28932 = (0);
while(true){
if((i__28903_28932 < count__28902_28931)){
var param_28933 = cljs.core._nth.call(null,chunk__28901_28930,i__28903_28932);
cljs.compiler.emit.call(null,param_28933);

if(cljs.core._EQ_.call(null,param_28933,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__28934 = seq__28900_28929;
var G__28935 = chunk__28901_28930;
var G__28936 = count__28902_28931;
var G__28937 = (i__28903_28932 + (1));
seq__28900_28929 = G__28934;
chunk__28901_28930 = G__28935;
count__28902_28931 = G__28936;
i__28903_28932 = G__28937;
continue;
} else {
var temp__5804__auto___28938 = cljs.core.seq.call(null,seq__28900_28929);
if(temp__5804__auto___28938){
var seq__28900_28939__$1 = temp__5804__auto___28938;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28900_28939__$1)){
var c__5568__auto___28940 = cljs.core.chunk_first.call(null,seq__28900_28939__$1);
var G__28941 = cljs.core.chunk_rest.call(null,seq__28900_28939__$1);
var G__28942 = c__5568__auto___28940;
var G__28943 = cljs.core.count.call(null,c__5568__auto___28940);
var G__28944 = (0);
seq__28900_28929 = G__28941;
chunk__28901_28930 = G__28942;
count__28902_28931 = G__28943;
i__28903_28932 = G__28944;
continue;
} else {
var param_28945 = cljs.core.first.call(null,seq__28900_28939__$1);
cljs.compiler.emit.call(null,param_28945);

if(cljs.core._EQ_.call(null,param_28945,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__28946 = cljs.core.next.call(null,seq__28900_28939__$1);
var G__28947 = null;
var G__28948 = (0);
var G__28949 = (0);
seq__28900_28929 = G__28946;
chunk__28901_28930 = G__28947;
count__28902_28931 = G__28948;
i__28903_28932 = G__28949;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_28905,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_28905,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_28904__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_28905,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_28906,";");

cljs.compiler.emitln.call(null,"return ",mname_28905,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__28953){
var map__28954 = p__28953;
var map__28954__$1 = cljs.core.__destructure_map.call(null,map__28954);
var variadic = cljs.core.get.call(null,map__28954__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__28954__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__28954__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__28954__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__28954__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__28954__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.call(null,map__28954__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.call(null,map__28954__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,(function (p1__28950_SHARP_){
var and__5043__auto__ = p1__28950_SHARP_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__28950_SHARP_));
} else {
return and__5043__auto__;
}
}),recur_frames));
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,recur_params,(cljs.core.truth_((function (){var or__5045__auto__ = in_loop;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.seq.call(null,recur_params);
}
})())?cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets):null))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_29006__$1 = (function (){var or__5045__auto__ = name;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_29007 = cljs.compiler.munge.call(null,name_29006__$1);
var maxparams_29008 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_29009 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_29007),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_29010 = cljs.core.sort_by.call(null,(function (p1__28951_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__28951_SHARP_)));
}),cljs.core.seq.call(null,mmap_29009));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_29007," = null;");

var seq__28955_29011 = cljs.core.seq.call(null,ms_29010);
var chunk__28956_29012 = null;
var count__28957_29013 = (0);
var i__28958_29014 = (0);
while(true){
if((i__28958_29014 < count__28957_29013)){
var vec__28965_29015 = cljs.core._nth.call(null,chunk__28956_29012,i__28958_29014);
var n_29016 = cljs.core.nth.call(null,vec__28965_29015,(0),null);
var meth_29017 = cljs.core.nth.call(null,vec__28965_29015,(1),null);
cljs.compiler.emits.call(null,"var ",n_29016," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_29017))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_29017);
} else {
cljs.compiler.emit_fn_method.call(null,meth_29017);
}

cljs.compiler.emitln.call(null,";");


var G__29018 = seq__28955_29011;
var G__29019 = chunk__28956_29012;
var G__29020 = count__28957_29013;
var G__29021 = (i__28958_29014 + (1));
seq__28955_29011 = G__29018;
chunk__28956_29012 = G__29019;
count__28957_29013 = G__29020;
i__28958_29014 = G__29021;
continue;
} else {
var temp__5804__auto___29022 = cljs.core.seq.call(null,seq__28955_29011);
if(temp__5804__auto___29022){
var seq__28955_29023__$1 = temp__5804__auto___29022;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28955_29023__$1)){
var c__5568__auto___29024 = cljs.core.chunk_first.call(null,seq__28955_29023__$1);
var G__29025 = cljs.core.chunk_rest.call(null,seq__28955_29023__$1);
var G__29026 = c__5568__auto___29024;
var G__29027 = cljs.core.count.call(null,c__5568__auto___29024);
var G__29028 = (0);
seq__28955_29011 = G__29025;
chunk__28956_29012 = G__29026;
count__28957_29013 = G__29027;
i__28958_29014 = G__29028;
continue;
} else {
var vec__28968_29029 = cljs.core.first.call(null,seq__28955_29023__$1);
var n_29030 = cljs.core.nth.call(null,vec__28968_29029,(0),null);
var meth_29031 = cljs.core.nth.call(null,vec__28968_29029,(1),null);
cljs.compiler.emits.call(null,"var ",n_29030," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_29031))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_29031);
} else {
cljs.compiler.emit_fn_method.call(null,meth_29031);
}

cljs.compiler.emitln.call(null,";");


var G__29032 = cljs.core.next.call(null,seq__28955_29023__$1);
var G__29033 = null;
var G__29034 = (0);
var G__29035 = (0);
seq__28955_29011 = G__29032;
chunk__28956_29012 = G__29033;
count__28957_29013 = G__29034;
i__28958_29014 = G__29035;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_29007," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_29008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_29008)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_29008));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__28971_29036 = cljs.core.seq.call(null,ms_29010);
var chunk__28972_29037 = null;
var count__28973_29038 = (0);
var i__28974_29039 = (0);
while(true){
if((i__28974_29039 < count__28973_29038)){
var vec__28981_29040 = cljs.core._nth.call(null,chunk__28972_29037,i__28974_29039);
var n_29041 = cljs.core.nth.call(null,vec__28981_29040,(0),null);
var meth_29042 = cljs.core.nth.call(null,vec__28981_29040,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_29042))){
cljs.compiler.emitln.call(null,"default:");

var restarg_29043 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_29043," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_29044 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_29043," = new cljs.core.IndexedSeq(",a_29044,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_29041,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_29008)),(((cljs.core.count.call(null,maxparams_29008) > (1)))?", ":null),restarg_29043,");");
} else {
var pcnt_29045 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_29042));
cljs.compiler.emitln.call(null,"case ",pcnt_29045,":");

cljs.compiler.emitln.call(null,"return ",n_29041,".call(this",(((pcnt_29045 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_29045,maxparams_29008)),null,(1),null)),(2),null))),");");
}


var G__29046 = seq__28971_29036;
var G__29047 = chunk__28972_29037;
var G__29048 = count__28973_29038;
var G__29049 = (i__28974_29039 + (1));
seq__28971_29036 = G__29046;
chunk__28972_29037 = G__29047;
count__28973_29038 = G__29048;
i__28974_29039 = G__29049;
continue;
} else {
var temp__5804__auto___29050 = cljs.core.seq.call(null,seq__28971_29036);
if(temp__5804__auto___29050){
var seq__28971_29051__$1 = temp__5804__auto___29050;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28971_29051__$1)){
var c__5568__auto___29052 = cljs.core.chunk_first.call(null,seq__28971_29051__$1);
var G__29053 = cljs.core.chunk_rest.call(null,seq__28971_29051__$1);
var G__29054 = c__5568__auto___29052;
var G__29055 = cljs.core.count.call(null,c__5568__auto___29052);
var G__29056 = (0);
seq__28971_29036 = G__29053;
chunk__28972_29037 = G__29054;
count__28973_29038 = G__29055;
i__28974_29039 = G__29056;
continue;
} else {
var vec__28984_29057 = cljs.core.first.call(null,seq__28971_29051__$1);
var n_29058 = cljs.core.nth.call(null,vec__28984_29057,(0),null);
var meth_29059 = cljs.core.nth.call(null,vec__28984_29057,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_29059))){
cljs.compiler.emitln.call(null,"default:");

var restarg_29060 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_29060," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_29061 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_29060," = new cljs.core.IndexedSeq(",a_29061,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_29058,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_29008)),(((cljs.core.count.call(null,maxparams_29008) > (1)))?", ":null),restarg_29060,");");
} else {
var pcnt_29062 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_29059));
cljs.compiler.emitln.call(null,"case ",pcnt_29062,":");

cljs.compiler.emitln.call(null,"return ",n_29058,".call(this",(((pcnt_29062 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_29062,maxparams_29008)),null,(1),null)),(2),null))),");");
}


var G__29063 = cljs.core.next.call(null,seq__28971_29051__$1);
var G__29064 = null;
var G__29065 = (0);
var G__29066 = (0);
seq__28971_29036 = G__29063;
chunk__28972_29037 = G__29064;
count__28973_29038 = G__29065;
i__28974_29039 = G__29066;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_29067 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_29010)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_29067,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_29007,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_29007,".cljs$lang$applyTo = ",cljs.core.some.call(null,(function (p1__28952_SHARP_){
var vec__28987 = p1__28952_SHARP_;
var n = cljs.core.nth.call(null,vec__28987,(0),null);
var m = cljs.core.nth.call(null,vec__28987,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_29010),".cljs$lang$applyTo;");
} else {
}

var seq__28990_29068 = cljs.core.seq.call(null,ms_29010);
var chunk__28991_29069 = null;
var count__28992_29070 = (0);
var i__28993_29071 = (0);
while(true){
if((i__28993_29071 < count__28992_29070)){
var vec__29000_29072 = cljs.core._nth.call(null,chunk__28991_29069,i__28993_29071);
var n_29073 = cljs.core.nth.call(null,vec__29000_29072,(0),null);
var meth_29074 = cljs.core.nth.call(null,vec__29000_29072,(1),null);
var c_29075 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_29074));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_29074))){
cljs.compiler.emitln.call(null,mname_29007,".cljs$core$IFn$_invoke$arity$variadic = ",n_29073,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_29007,".cljs$core$IFn$_invoke$arity$",c_29075," = ",n_29073,";");
}


var G__29076 = seq__28990_29068;
var G__29077 = chunk__28991_29069;
var G__29078 = count__28992_29070;
var G__29079 = (i__28993_29071 + (1));
seq__28990_29068 = G__29076;
chunk__28991_29069 = G__29077;
count__28992_29070 = G__29078;
i__28993_29071 = G__29079;
continue;
} else {
var temp__5804__auto___29080 = cljs.core.seq.call(null,seq__28990_29068);
if(temp__5804__auto___29080){
var seq__28990_29081__$1 = temp__5804__auto___29080;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28990_29081__$1)){
var c__5568__auto___29082 = cljs.core.chunk_first.call(null,seq__28990_29081__$1);
var G__29083 = cljs.core.chunk_rest.call(null,seq__28990_29081__$1);
var G__29084 = c__5568__auto___29082;
var G__29085 = cljs.core.count.call(null,c__5568__auto___29082);
var G__29086 = (0);
seq__28990_29068 = G__29083;
chunk__28991_29069 = G__29084;
count__28992_29070 = G__29085;
i__28993_29071 = G__29086;
continue;
} else {
var vec__29003_29087 = cljs.core.first.call(null,seq__28990_29081__$1);
var n_29088 = cljs.core.nth.call(null,vec__29003_29087,(0),null);
var meth_29089 = cljs.core.nth.call(null,vec__29003_29087,(1),null);
var c_29090 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_29089));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_29089))){
cljs.compiler.emitln.call(null,mname_29007,".cljs$core$IFn$_invoke$arity$variadic = ",n_29088,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_29007,".cljs$core$IFn$_invoke$arity$",c_29090," = ",n_29088,";");
}


var G__29091 = cljs.core.next.call(null,seq__28990_29081__$1);
var G__29092 = null;
var G__29093 = (0);
var G__29094 = (0);
seq__28990_29068 = G__29091;
chunk__28991_29069 = G__29092;
count__28992_29070 = G__29093;
i__28993_29071 = G__29094;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_29007,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__29095){
var map__29096 = p__29095;
var map__29096__$1 = cljs.core.__destructure_map.call(null,map__29096);
var statements = cljs.core.get.call(null,map__29096__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__29096__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__29096__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__29097_29101 = cljs.core.seq.call(null,statements);
var chunk__29098_29102 = null;
var count__29099_29103 = (0);
var i__29100_29104 = (0);
while(true){
if((i__29100_29104 < count__29099_29103)){
var s_29105 = cljs.core._nth.call(null,chunk__29098_29102,i__29100_29104);
cljs.compiler.emitln.call(null,s_29105);


var G__29106 = seq__29097_29101;
var G__29107 = chunk__29098_29102;
var G__29108 = count__29099_29103;
var G__29109 = (i__29100_29104 + (1));
seq__29097_29101 = G__29106;
chunk__29098_29102 = G__29107;
count__29099_29103 = G__29108;
i__29100_29104 = G__29109;
continue;
} else {
var temp__5804__auto___29110 = cljs.core.seq.call(null,seq__29097_29101);
if(temp__5804__auto___29110){
var seq__29097_29111__$1 = temp__5804__auto___29110;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29097_29111__$1)){
var c__5568__auto___29112 = cljs.core.chunk_first.call(null,seq__29097_29111__$1);
var G__29113 = cljs.core.chunk_rest.call(null,seq__29097_29111__$1);
var G__29114 = c__5568__auto___29112;
var G__29115 = cljs.core.count.call(null,c__5568__auto___29112);
var G__29116 = (0);
seq__29097_29101 = G__29113;
chunk__29098_29102 = G__29114;
count__29099_29103 = G__29115;
i__29100_29104 = G__29116;
continue;
} else {
var s_29117 = cljs.core.first.call(null,seq__29097_29111__$1);
cljs.compiler.emitln.call(null,s_29117);


var G__29118 = cljs.core.next.call(null,seq__29097_29111__$1);
var G__29119 = null;
var G__29120 = (0);
var G__29121 = (0);
seq__29097_29101 = G__29118;
chunk__29098_29102 = G__29119;
count__29099_29103 = G__29120;
i__29100_29104 = G__29121;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__29122){
var map__29123 = p__29122;
var map__29123__$1 = cljs.core.__destructure_map.call(null,map__29123);
var try$ = cljs.core.get.call(null,map__29123__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__29123__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__29123__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__29123__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__29123__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__5045__auto__ = name;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.unwrap_quote.call(null,finally$)))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :const (:op (ana/unwrap-quote finally)))"].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__29124,is_loop){
var map__29125 = p__29124;
var map__29125__$1 = cljs.core.__destructure_map.call(null,map__29125);
var expr = cljs.core.get.call(null,map__29125__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__29125__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__29125__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__29126_29136 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__29127_29137 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,(function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__29127_29137);

try{var seq__29128_29138 = cljs.core.seq.call(null,bindings);
var chunk__29129_29139 = null;
var count__29130_29140 = (0);
var i__29131_29141 = (0);
while(true){
if((i__29131_29141 < count__29130_29140)){
var map__29134_29142 = cljs.core._nth.call(null,chunk__29129_29139,i__29131_29141);
var map__29134_29143__$1 = cljs.core.__destructure_map.call(null,map__29134_29142);
var binding_29144 = map__29134_29143__$1;
var init_29145 = cljs.core.get.call(null,map__29134_29143__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_29144);

cljs.compiler.emitln.call(null," = ",init_29145,";");


var G__29146 = seq__29128_29138;
var G__29147 = chunk__29129_29139;
var G__29148 = count__29130_29140;
var G__29149 = (i__29131_29141 + (1));
seq__29128_29138 = G__29146;
chunk__29129_29139 = G__29147;
count__29130_29140 = G__29148;
i__29131_29141 = G__29149;
continue;
} else {
var temp__5804__auto___29150 = cljs.core.seq.call(null,seq__29128_29138);
if(temp__5804__auto___29150){
var seq__29128_29151__$1 = temp__5804__auto___29150;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29128_29151__$1)){
var c__5568__auto___29152 = cljs.core.chunk_first.call(null,seq__29128_29151__$1);
var G__29153 = cljs.core.chunk_rest.call(null,seq__29128_29151__$1);
var G__29154 = c__5568__auto___29152;
var G__29155 = cljs.core.count.call(null,c__5568__auto___29152);
var G__29156 = (0);
seq__29128_29138 = G__29153;
chunk__29129_29139 = G__29154;
count__29130_29140 = G__29155;
i__29131_29141 = G__29156;
continue;
} else {
var map__29135_29157 = cljs.core.first.call(null,seq__29128_29151__$1);
var map__29135_29158__$1 = cljs.core.__destructure_map.call(null,map__29135_29157);
var binding_29159 = map__29135_29158__$1;
var init_29160 = cljs.core.get.call(null,map__29135_29158__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_29159);

cljs.compiler.emitln.call(null," = ",init_29160,";");


var G__29161 = cljs.core.next.call(null,seq__29128_29151__$1);
var G__29162 = null;
var G__29163 = (0);
var G__29164 = (0);
seq__29128_29138 = G__29161;
chunk__29129_29139 = G__29162;
count__29130_29140 = G__29163;
i__29131_29141 = G__29164;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__29126_29136);
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__29165){
var map__29166 = p__29165;
var map__29166__$1 = cljs.core.__destructure_map.call(null,map__29166);
var frame = cljs.core.get.call(null,map__29166__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__29166__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__29166__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__5636__auto___29167 = cljs.core.count.call(null,exprs);
var i_29168 = (0);
while(true){
if((i_29168 < n__5636__auto___29167)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_29168)," = ",exprs.call(null,i_29168),";");

var G__29169 = (i_29168 + (1));
i_29168 = G__29169;
continue;
} else {
}
break;
}

var n__5636__auto___29170 = cljs.core.count.call(null,exprs);
var i_29171 = (0);
while(true){
if((i_29171 < n__5636__auto___29170)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_29171))," = ",temps.call(null,i_29171),";");

var G__29172 = (i_29171 + (1));
i_29171 = G__29172;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__29173){
var map__29174 = p__29173;
var map__29174__$1 = cljs.core.__destructure_map.call(null,map__29174);
var expr = cljs.core.get.call(null,map__29174__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__29174__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__29174__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__29175_29183 = cljs.core.seq.call(null,bindings);
var chunk__29176_29184 = null;
var count__29177_29185 = (0);
var i__29178_29186 = (0);
while(true){
if((i__29178_29186 < count__29177_29185)){
var map__29181_29187 = cljs.core._nth.call(null,chunk__29176_29184,i__29178_29186);
var map__29181_29188__$1 = cljs.core.__destructure_map.call(null,map__29181_29187);
var binding_29189 = map__29181_29188__$1;
var init_29190 = cljs.core.get.call(null,map__29181_29188__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_29189)," = ",init_29190,";");


var G__29191 = seq__29175_29183;
var G__29192 = chunk__29176_29184;
var G__29193 = count__29177_29185;
var G__29194 = (i__29178_29186 + (1));
seq__29175_29183 = G__29191;
chunk__29176_29184 = G__29192;
count__29177_29185 = G__29193;
i__29178_29186 = G__29194;
continue;
} else {
var temp__5804__auto___29195 = cljs.core.seq.call(null,seq__29175_29183);
if(temp__5804__auto___29195){
var seq__29175_29196__$1 = temp__5804__auto___29195;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29175_29196__$1)){
var c__5568__auto___29197 = cljs.core.chunk_first.call(null,seq__29175_29196__$1);
var G__29198 = cljs.core.chunk_rest.call(null,seq__29175_29196__$1);
var G__29199 = c__5568__auto___29197;
var G__29200 = cljs.core.count.call(null,c__5568__auto___29197);
var G__29201 = (0);
seq__29175_29183 = G__29198;
chunk__29176_29184 = G__29199;
count__29177_29185 = G__29200;
i__29178_29186 = G__29201;
continue;
} else {
var map__29182_29202 = cljs.core.first.call(null,seq__29175_29196__$1);
var map__29182_29203__$1 = cljs.core.__destructure_map.call(null,map__29182_29202);
var binding_29204 = map__29182_29203__$1;
var init_29205 = cljs.core.get.call(null,map__29182_29203__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_29204)," = ",init_29205,";");


var G__29206 = cljs.core.next.call(null,seq__29175_29196__$1);
var G__29207 = null;
var G__29208 = (0);
var G__29209 = (0);
seq__29175_29183 = G__29206;
chunk__29176_29184 = G__29207;
count__29177_29185 = G__29208;
i__29178_29186 = G__29209;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym).replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__29212){
var map__29213 = p__29212;
var map__29213__$1 = cljs.core.__destructure_map.call(null,map__29213);
var expr = map__29213__$1;
var f = cljs.core.get.call(null,map__29213__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__29213__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__29213__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__5043__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__5043__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__5043__auto__ = protocol;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = tag;
if(cljs.core.truth_(and__5043__auto____$1)){
var or__5045__auto__ = (function (){var and__5043__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = protocol;
if(cljs.core.truth_(and__5043__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto____$2 = (function (){var or__5045__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__5043__auto____$2)){
var or__5045__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__5045__auto____$1){
return or__5045__auto____$1;
} else {
var and__5043__auto____$3 = (!(cljs.core.set_QMARK_.call(null,tag)));
if(and__5043__auto____$3){
var and__5043__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null).call(null,tag));
if(and__5043__auto____$4){
var temp__5804__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,cljs.core.vary_meta.call(null,tag,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true)));
if(cljs.core.truth_(temp__5804__auto__)){
var ps = temp__5804__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
}
} else {
return and__5043__auto____$2;
}
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})();
var first_arg_tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var opt_not_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,first_arg_tag,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var opt_count_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null).call(null,first_arg_tag))));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var ftag = cljs.analyzer.infer_tag.call(null,env,f);
var js_QMARK_ = (function (){var or__5045__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null));
if(or__5045__auto__){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null));
if(or__5045__auto____$1){
return or__5045__auto____$1;
} else {
return new cljs.core.Keyword(null,"foreign","foreign",990521149).cljs$core$IFn$_invoke$arity$1(info);
}
}
})();
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__5045__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__5045__auto__){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (function (){var temp__5804__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(temp__5804__auto__)){
var ns_str = temp__5804__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return (!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),ns)));
}
}
})():null);
var keyword_QMARK_ = (function (){var or__5045__auto__ = cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),ftag);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var f__$1 = cljs.analyzer.unwrap_quote.call(null,f);
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"const","const",1709929842))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f__$1) instanceof cljs.core.Keyword)));
}
})();
var vec__29214 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return (arity > mfa);
} else {
return and__5043__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__29210_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__29210_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__29211_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__29211_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__29214,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__29214,(1),null);
var env__9256__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(opt_count_QMARK_){
cljs.compiler.emits.call(null,"((",cljs.core.first.call(null,args),").length)");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_29217 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_29217,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_29218 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_29218,args)),(((mfa_29218 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_29218,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = js_QMARK_;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__5043__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1));
} else {
return and__5043__auto__;
}
})())){
var fprop_29219 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.call(null,"(",f__$1,fprop_29219," ? ",f__$1,fprop_29219,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_29219," ? ",f__$1,fprop_29219,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__29220){
var map__29221 = p__29220;
var map__29221__$1 = cljs.core.__destructure_map.call(null,map__29221);
var ctor = cljs.core.get.call(null,map__29221__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__29221__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__29221__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9256__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__29222){
var map__29223 = p__29222;
var map__29223__$1 = cljs.core.__destructure_map.call(null,map__29223);
var target = cljs.core.get.call(null,map__29223__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__29223__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__29223__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9256__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(",target," = ",val,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.sublib_select = (function cljs$compiler$sublib_select(sublib){
if(cljs.core.truth_(sublib)){
var xs = clojure.string.split.call(null,sublib,/\./);
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__29224_SHARP_){
return ["['",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29224_SHARP_),"']"].join('');
}),xs));
} else {
return null;
}
});
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
var vec__29225 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib);
var lib_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__29225,(0),null);
var sublib = cljs.core.nth.call(null,vec__29225,(1),null);
return cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib)," = goog.global",cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (prop){
return ["[\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"\"]"].join('');
}),clojure.string.split.call(null,cljs.core.name.call(null,(function (){var or__5045__auto__ = cljs.core.get.call(null,global_exports,cljs.core.symbol.call(null,lib_SINGLEQUOTE_));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.call(null,global_exports,cljs.core.name.call(null,lib_SINGLEQUOTE_));
}
})()),/\./))),cljs.compiler.sublib_select.call(null,sublib),";");
});
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__29228 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__29228__$1 = cljs.core.__destructure_map.call(null,map__29228);
var options = cljs.core.get.call(null,map__29228__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__29228__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__29229 = options;
var map__29229__$1 = cljs.core.__destructure_map.call(null,map__29229);
var target = cljs.core.get.call(null,map__29229__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.call(null,map__29229__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.call(null,map__29229__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__29230 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__29236 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__29236__$1 = cljs.core.__destructure_map.call(null,map__29236);
var node_libs = cljs.core.get.call(null,map__29236__$1,true);
var libs_to_load = cljs.core.get.call(null,map__29236__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__29230,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__29230,(1),null);
var vec__29233 = (function (){var map__29237 = cljs.core.group_by.call(null,cljs.analyzer.goog_module_dep_QMARK_,libs_to_load);
var map__29237__$1 = cljs.core.__destructure_map.call(null,map__29237);
var goog_modules = cljs.core.get.call(null,map__29237__$1,true);
var libs_to_load__$1 = cljs.core.get.call(null,map__29237__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog_modules,libs_to_load__$1], null);
})();
var goog_modules = cljs.core.nth.call(null,vec__29233,(0),null);
var libs_to_load__$1 = cljs.core.nth.call(null,vec__29233,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__29238_29282 = cljs.core.seq.call(null,libs_to_load__$1);
var chunk__29239_29283 = null;
var count__29240_29284 = (0);
var i__29241_29285 = (0);
while(true){
if((i__29241_29285 < count__29240_29284)){
var lib_29286 = cljs.core._nth.call(null,chunk__29239_29283,i__29241_29285);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_29286)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_29286),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_29286),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_29286),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_29286),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_29286,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_29286),"');");
}

}
}
}


var G__29287 = seq__29238_29282;
var G__29288 = chunk__29239_29283;
var G__29289 = count__29240_29284;
var G__29290 = (i__29241_29285 + (1));
seq__29238_29282 = G__29287;
chunk__29239_29283 = G__29288;
count__29240_29284 = G__29289;
i__29241_29285 = G__29290;
continue;
} else {
var temp__5804__auto___29291 = cljs.core.seq.call(null,seq__29238_29282);
if(temp__5804__auto___29291){
var seq__29238_29292__$1 = temp__5804__auto___29291;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29238_29292__$1)){
var c__5568__auto___29293 = cljs.core.chunk_first.call(null,seq__29238_29292__$1);
var G__29294 = cljs.core.chunk_rest.call(null,seq__29238_29292__$1);
var G__29295 = c__5568__auto___29293;
var G__29296 = cljs.core.count.call(null,c__5568__auto___29293);
var G__29297 = (0);
seq__29238_29282 = G__29294;
chunk__29239_29283 = G__29295;
count__29240_29284 = G__29296;
i__29241_29285 = G__29297;
continue;
} else {
var lib_29298 = cljs.core.first.call(null,seq__29238_29292__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_29298)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_29298),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_29298),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_29298),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_29298),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_29298,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_29298),"');");
}

}
}
}


var G__29299 = cljs.core.next.call(null,seq__29238_29292__$1);
var G__29300 = null;
var G__29301 = (0);
var G__29302 = (0);
seq__29238_29282 = G__29299;
chunk__29239_29283 = G__29300;
count__29240_29284 = G__29301;
i__29241_29285 = G__29302;
continue;
}
} else {
}
}
break;
}

var seq__29242_29303 = cljs.core.seq.call(null,node_libs);
var chunk__29243_29304 = null;
var count__29244_29305 = (0);
var i__29245_29306 = (0);
while(true){
if((i__29245_29306 < count__29244_29305)){
var lib_29307 = cljs.core._nth.call(null,chunk__29243_29304,i__29245_29306);
var vec__29252_29308 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_29307);
var lib_SINGLEQUOTE__29309 = cljs.core.nth.call(null,vec__29252_29308,(0),null);
var sublib_29310 = cljs.core.nth.call(null,vec__29252_29308,(1),null);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_29307)," = require('",lib_SINGLEQUOTE__29309,"')",cljs.compiler.sublib_select.call(null,sublib_29310),";");


var G__29311 = seq__29242_29303;
var G__29312 = chunk__29243_29304;
var G__29313 = count__29244_29305;
var G__29314 = (i__29245_29306 + (1));
seq__29242_29303 = G__29311;
chunk__29243_29304 = G__29312;
count__29244_29305 = G__29313;
i__29245_29306 = G__29314;
continue;
} else {
var temp__5804__auto___29315 = cljs.core.seq.call(null,seq__29242_29303);
if(temp__5804__auto___29315){
var seq__29242_29316__$1 = temp__5804__auto___29315;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29242_29316__$1)){
var c__5568__auto___29317 = cljs.core.chunk_first.call(null,seq__29242_29316__$1);
var G__29318 = cljs.core.chunk_rest.call(null,seq__29242_29316__$1);
var G__29319 = c__5568__auto___29317;
var G__29320 = cljs.core.count.call(null,c__5568__auto___29317);
var G__29321 = (0);
seq__29242_29303 = G__29318;
chunk__29243_29304 = G__29319;
count__29244_29305 = G__29320;
i__29245_29306 = G__29321;
continue;
} else {
var lib_29322 = cljs.core.first.call(null,seq__29242_29316__$1);
var vec__29255_29323 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_29322);
var lib_SINGLEQUOTE__29324 = cljs.core.nth.call(null,vec__29255_29323,(0),null);
var sublib_29325 = cljs.core.nth.call(null,vec__29255_29323,(1),null);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_29322)," = require('",lib_SINGLEQUOTE__29324,"')",cljs.compiler.sublib_select.call(null,sublib_29325),";");


var G__29326 = cljs.core.next.call(null,seq__29242_29316__$1);
var G__29327 = null;
var G__29328 = (0);
var G__29329 = (0);
seq__29242_29303 = G__29326;
chunk__29243_29304 = G__29327;
count__29244_29305 = G__29328;
i__29245_29306 = G__29329;
continue;
}
} else {
}
}
break;
}

var seq__29258_29330 = cljs.core.seq.call(null,goog_modules);
var chunk__29259_29331 = null;
var count__29260_29332 = (0);
var i__29261_29333 = (0);
while(true){
if((i__29261_29333 < count__29260_29332)){
var lib_29334 = cljs.core._nth.call(null,chunk__29259_29331,i__29261_29333);
var vec__29268_29335 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_29334);
var lib_SINGLEQUOTE__29336 = cljs.core.nth.call(null,vec__29268_29335,(0),null);
var sublib_29337 = cljs.core.nth.call(null,vec__29268_29335,(1),null);
cljs.compiler.emitln.call(null,"goog.require('",lib_SINGLEQUOTE__29336,"');");

cljs.compiler.emitln.call(null,"goog.scope(function(){");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_goog_module_lib.call(null,lib_29334)," = goog.module.get('",lib_SINGLEQUOTE__29336,"')",cljs.compiler.sublib_select.call(null,sublib_29337),";");

cljs.compiler.emitln.call(null,"});");


var G__29338 = seq__29258_29330;
var G__29339 = chunk__29259_29331;
var G__29340 = count__29260_29332;
var G__29341 = (i__29261_29333 + (1));
seq__29258_29330 = G__29338;
chunk__29259_29331 = G__29339;
count__29260_29332 = G__29340;
i__29261_29333 = G__29341;
continue;
} else {
var temp__5804__auto___29342 = cljs.core.seq.call(null,seq__29258_29330);
if(temp__5804__auto___29342){
var seq__29258_29343__$1 = temp__5804__auto___29342;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29258_29343__$1)){
var c__5568__auto___29344 = cljs.core.chunk_first.call(null,seq__29258_29343__$1);
var G__29345 = cljs.core.chunk_rest.call(null,seq__29258_29343__$1);
var G__29346 = c__5568__auto___29344;
var G__29347 = cljs.core.count.call(null,c__5568__auto___29344);
var G__29348 = (0);
seq__29258_29330 = G__29345;
chunk__29259_29331 = G__29346;
count__29260_29332 = G__29347;
i__29261_29333 = G__29348;
continue;
} else {
var lib_29349 = cljs.core.first.call(null,seq__29258_29343__$1);
var vec__29271_29350 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_29349);
var lib_SINGLEQUOTE__29351 = cljs.core.nth.call(null,vec__29271_29350,(0),null);
var sublib_29352 = cljs.core.nth.call(null,vec__29271_29350,(1),null);
cljs.compiler.emitln.call(null,"goog.require('",lib_SINGLEQUOTE__29351,"');");

cljs.compiler.emitln.call(null,"goog.scope(function(){");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_goog_module_lib.call(null,lib_29349)," = goog.module.get('",lib_SINGLEQUOTE__29351,"')",cljs.compiler.sublib_select.call(null,sublib_29352),";");

cljs.compiler.emitln.call(null,"});");


var G__29353 = cljs.core.next.call(null,seq__29258_29343__$1);
var G__29354 = null;
var G__29355 = (0);
var G__29356 = (0);
seq__29258_29330 = G__29353;
chunk__29259_29331 = G__29354;
count__29260_29332 = G__29355;
i__29261_29333 = G__29356;
continue;
}
} else {
}
}
break;
}

var seq__29274_29357 = cljs.core.seq.call(null,global_exports_libs);
var chunk__29275_29358 = null;
var count__29276_29359 = (0);
var i__29277_29360 = (0);
while(true){
if((i__29277_29360 < count__29276_29359)){
var lib_29361 = cljs.core._nth.call(null,chunk__29275_29358,i__29277_29360);
var map__29280_29362 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,cljs.core.first.call(null,cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_29361))));
var map__29280_29363__$1 = cljs.core.__destructure_map.call(null,map__29280_29362);
var global_exports_29364 = cljs.core.get.call(null,map__29280_29363__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_29364,lib_29361);


var G__29365 = seq__29274_29357;
var G__29366 = chunk__29275_29358;
var G__29367 = count__29276_29359;
var G__29368 = (i__29277_29360 + (1));
seq__29274_29357 = G__29365;
chunk__29275_29358 = G__29366;
count__29276_29359 = G__29367;
i__29277_29360 = G__29368;
continue;
} else {
var temp__5804__auto___29369 = cljs.core.seq.call(null,seq__29274_29357);
if(temp__5804__auto___29369){
var seq__29274_29370__$1 = temp__5804__auto___29369;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29274_29370__$1)){
var c__5568__auto___29371 = cljs.core.chunk_first.call(null,seq__29274_29370__$1);
var G__29372 = cljs.core.chunk_rest.call(null,seq__29274_29370__$1);
var G__29373 = c__5568__auto___29371;
var G__29374 = cljs.core.count.call(null,c__5568__auto___29371);
var G__29375 = (0);
seq__29274_29357 = G__29372;
chunk__29275_29358 = G__29373;
count__29276_29359 = G__29374;
i__29277_29360 = G__29375;
continue;
} else {
var lib_29376 = cljs.core.first.call(null,seq__29274_29370__$1);
var map__29281_29377 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,cljs.core.first.call(null,cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_29376))));
var map__29281_29378__$1 = cljs.core.__destructure_map.call(null,map__29281_29377);
var global_exports_29379 = cljs.core.get.call(null,map__29281_29378__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_29379,lib_29376);


var G__29380 = cljs.core.next.call(null,seq__29274_29370__$1);
var G__29381 = null;
var G__29382 = (0);
var G__29383 = (0);
seq__29274_29357 = G__29380;
chunk__29275_29358 = G__29381;
count__29276_29359 = G__29382;
i__29277_29360 = G__29383;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__29384){
var map__29385 = p__29384;
var map__29385__$1 = cljs.core.__destructure_map.call(null,map__29385);
var name = cljs.core.get.call(null,map__29385__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__29385__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__29385__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__29385__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__29385__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__29385__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__29385__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__29386){
var map__29387 = p__29386;
var map__29387__$1 = cljs.core.__destructure_map.call(null,map__29387);
var name = cljs.core.get.call(null,map__29387__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__29387__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__29387__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__29387__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__29387__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__29387__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__29387__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__29388){
var map__29389 = p__29388;
var map__29389__$1 = cljs.core.__destructure_map.call(null,map__29389);
var t = cljs.core.get.call(null,map__29389__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__29389__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__29389__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__29389__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__29389__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__29390_29414 = cljs.core.seq.call(null,protocols);
var chunk__29391_29415 = null;
var count__29392_29416 = (0);
var i__29393_29417 = (0);
while(true){
if((i__29393_29417 < count__29392_29416)){
var protocol_29418 = cljs.core._nth.call(null,chunk__29391_29415,i__29393_29417);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_29418)),"}");


var G__29419 = seq__29390_29414;
var G__29420 = chunk__29391_29415;
var G__29421 = count__29392_29416;
var G__29422 = (i__29393_29417 + (1));
seq__29390_29414 = G__29419;
chunk__29391_29415 = G__29420;
count__29392_29416 = G__29421;
i__29393_29417 = G__29422;
continue;
} else {
var temp__5804__auto___29423 = cljs.core.seq.call(null,seq__29390_29414);
if(temp__5804__auto___29423){
var seq__29390_29424__$1 = temp__5804__auto___29423;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29390_29424__$1)){
var c__5568__auto___29425 = cljs.core.chunk_first.call(null,seq__29390_29424__$1);
var G__29426 = cljs.core.chunk_rest.call(null,seq__29390_29424__$1);
var G__29427 = c__5568__auto___29425;
var G__29428 = cljs.core.count.call(null,c__5568__auto___29425);
var G__29429 = (0);
seq__29390_29414 = G__29426;
chunk__29391_29415 = G__29427;
count__29392_29416 = G__29428;
i__29393_29417 = G__29429;
continue;
} else {
var protocol_29430 = cljs.core.first.call(null,seq__29390_29424__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_29430)),"}");


var G__29431 = cljs.core.next.call(null,seq__29390_29424__$1);
var G__29432 = null;
var G__29433 = (0);
var G__29434 = (0);
seq__29390_29414 = G__29431;
chunk__29391_29415 = G__29432;
count__29392_29416 = G__29433;
i__29393_29417 = G__29434;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__29394_29435 = cljs.core.seq.call(null,fields__$1);
var chunk__29395_29436 = null;
var count__29396_29437 = (0);
var i__29397_29438 = (0);
while(true){
if((i__29397_29438 < count__29396_29437)){
var fld_29439 = cljs.core._nth.call(null,chunk__29395_29436,i__29397_29438);
cljs.compiler.emitln.call(null,"this.",fld_29439," = ",fld_29439,";");


var G__29440 = seq__29394_29435;
var G__29441 = chunk__29395_29436;
var G__29442 = count__29396_29437;
var G__29443 = (i__29397_29438 + (1));
seq__29394_29435 = G__29440;
chunk__29395_29436 = G__29441;
count__29396_29437 = G__29442;
i__29397_29438 = G__29443;
continue;
} else {
var temp__5804__auto___29444 = cljs.core.seq.call(null,seq__29394_29435);
if(temp__5804__auto___29444){
var seq__29394_29445__$1 = temp__5804__auto___29444;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29394_29445__$1)){
var c__5568__auto___29446 = cljs.core.chunk_first.call(null,seq__29394_29445__$1);
var G__29447 = cljs.core.chunk_rest.call(null,seq__29394_29445__$1);
var G__29448 = c__5568__auto___29446;
var G__29449 = cljs.core.count.call(null,c__5568__auto___29446);
var G__29450 = (0);
seq__29394_29435 = G__29447;
chunk__29395_29436 = G__29448;
count__29396_29437 = G__29449;
i__29397_29438 = G__29450;
continue;
} else {
var fld_29451 = cljs.core.first.call(null,seq__29394_29445__$1);
cljs.compiler.emitln.call(null,"this.",fld_29451," = ",fld_29451,";");


var G__29452 = cljs.core.next.call(null,seq__29394_29445__$1);
var G__29453 = null;
var G__29454 = (0);
var G__29455 = (0);
seq__29394_29435 = G__29452;
chunk__29395_29436 = G__29453;
count__29396_29437 = G__29454;
i__29397_29438 = G__29455;
continue;
}
} else {
}
}
break;
}

var seq__29398_29456 = cljs.core.seq.call(null,pmasks);
var chunk__29399_29457 = null;
var count__29400_29458 = (0);
var i__29401_29459 = (0);
while(true){
if((i__29401_29459 < count__29400_29458)){
var vec__29408_29460 = cljs.core._nth.call(null,chunk__29399_29457,i__29401_29459);
var pno_29461 = cljs.core.nth.call(null,vec__29408_29460,(0),null);
var pmask_29462 = cljs.core.nth.call(null,vec__29408_29460,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_29461,"$ = ",pmask_29462,";");


var G__29463 = seq__29398_29456;
var G__29464 = chunk__29399_29457;
var G__29465 = count__29400_29458;
var G__29466 = (i__29401_29459 + (1));
seq__29398_29456 = G__29463;
chunk__29399_29457 = G__29464;
count__29400_29458 = G__29465;
i__29401_29459 = G__29466;
continue;
} else {
var temp__5804__auto___29467 = cljs.core.seq.call(null,seq__29398_29456);
if(temp__5804__auto___29467){
var seq__29398_29468__$1 = temp__5804__auto___29467;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29398_29468__$1)){
var c__5568__auto___29469 = cljs.core.chunk_first.call(null,seq__29398_29468__$1);
var G__29470 = cljs.core.chunk_rest.call(null,seq__29398_29468__$1);
var G__29471 = c__5568__auto___29469;
var G__29472 = cljs.core.count.call(null,c__5568__auto___29469);
var G__29473 = (0);
seq__29398_29456 = G__29470;
chunk__29399_29457 = G__29471;
count__29400_29458 = G__29472;
i__29401_29459 = G__29473;
continue;
} else {
var vec__29411_29474 = cljs.core.first.call(null,seq__29398_29468__$1);
var pno_29475 = cljs.core.nth.call(null,vec__29411_29474,(0),null);
var pmask_29476 = cljs.core.nth.call(null,vec__29411_29474,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_29475,"$ = ",pmask_29476,";");


var G__29477 = cljs.core.next.call(null,seq__29398_29468__$1);
var G__29478 = null;
var G__29479 = (0);
var G__29480 = (0);
seq__29398_29456 = G__29477;
chunk__29399_29457 = G__29478;
count__29400_29458 = G__29479;
i__29401_29459 = G__29480;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__29481){
var map__29482 = p__29481;
var map__29482__$1 = cljs.core.__destructure_map.call(null,map__29482);
var t = cljs.core.get.call(null,map__29482__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__29482__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__29482__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__29482__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__29482__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__29483_29507 = cljs.core.seq.call(null,protocols);
var chunk__29484_29508 = null;
var count__29485_29509 = (0);
var i__29486_29510 = (0);
while(true){
if((i__29486_29510 < count__29485_29509)){
var protocol_29511 = cljs.core._nth.call(null,chunk__29484_29508,i__29486_29510);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_29511)),"}");


var G__29512 = seq__29483_29507;
var G__29513 = chunk__29484_29508;
var G__29514 = count__29485_29509;
var G__29515 = (i__29486_29510 + (1));
seq__29483_29507 = G__29512;
chunk__29484_29508 = G__29513;
count__29485_29509 = G__29514;
i__29486_29510 = G__29515;
continue;
} else {
var temp__5804__auto___29516 = cljs.core.seq.call(null,seq__29483_29507);
if(temp__5804__auto___29516){
var seq__29483_29517__$1 = temp__5804__auto___29516;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29483_29517__$1)){
var c__5568__auto___29518 = cljs.core.chunk_first.call(null,seq__29483_29517__$1);
var G__29519 = cljs.core.chunk_rest.call(null,seq__29483_29517__$1);
var G__29520 = c__5568__auto___29518;
var G__29521 = cljs.core.count.call(null,c__5568__auto___29518);
var G__29522 = (0);
seq__29483_29507 = G__29519;
chunk__29484_29508 = G__29520;
count__29485_29509 = G__29521;
i__29486_29510 = G__29522;
continue;
} else {
var protocol_29523 = cljs.core.first.call(null,seq__29483_29517__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_29523)),"}");


var G__29524 = cljs.core.next.call(null,seq__29483_29517__$1);
var G__29525 = null;
var G__29526 = (0);
var G__29527 = (0);
seq__29483_29507 = G__29524;
chunk__29484_29508 = G__29525;
count__29485_29509 = G__29526;
i__29486_29510 = G__29527;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__29487_29528 = cljs.core.seq.call(null,fields__$1);
var chunk__29488_29529 = null;
var count__29489_29530 = (0);
var i__29490_29531 = (0);
while(true){
if((i__29490_29531 < count__29489_29530)){
var fld_29532 = cljs.core._nth.call(null,chunk__29488_29529,i__29490_29531);
cljs.compiler.emitln.call(null,"this.",fld_29532," = ",fld_29532,";");


var G__29533 = seq__29487_29528;
var G__29534 = chunk__29488_29529;
var G__29535 = count__29489_29530;
var G__29536 = (i__29490_29531 + (1));
seq__29487_29528 = G__29533;
chunk__29488_29529 = G__29534;
count__29489_29530 = G__29535;
i__29490_29531 = G__29536;
continue;
} else {
var temp__5804__auto___29537 = cljs.core.seq.call(null,seq__29487_29528);
if(temp__5804__auto___29537){
var seq__29487_29538__$1 = temp__5804__auto___29537;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29487_29538__$1)){
var c__5568__auto___29539 = cljs.core.chunk_first.call(null,seq__29487_29538__$1);
var G__29540 = cljs.core.chunk_rest.call(null,seq__29487_29538__$1);
var G__29541 = c__5568__auto___29539;
var G__29542 = cljs.core.count.call(null,c__5568__auto___29539);
var G__29543 = (0);
seq__29487_29528 = G__29540;
chunk__29488_29529 = G__29541;
count__29489_29530 = G__29542;
i__29490_29531 = G__29543;
continue;
} else {
var fld_29544 = cljs.core.first.call(null,seq__29487_29538__$1);
cljs.compiler.emitln.call(null,"this.",fld_29544," = ",fld_29544,";");


var G__29545 = cljs.core.next.call(null,seq__29487_29538__$1);
var G__29546 = null;
var G__29547 = (0);
var G__29548 = (0);
seq__29487_29528 = G__29545;
chunk__29488_29529 = G__29546;
count__29489_29530 = G__29547;
i__29490_29531 = G__29548;
continue;
}
} else {
}
}
break;
}

var seq__29491_29549 = cljs.core.seq.call(null,pmasks);
var chunk__29492_29550 = null;
var count__29493_29551 = (0);
var i__29494_29552 = (0);
while(true){
if((i__29494_29552 < count__29493_29551)){
var vec__29501_29553 = cljs.core._nth.call(null,chunk__29492_29550,i__29494_29552);
var pno_29554 = cljs.core.nth.call(null,vec__29501_29553,(0),null);
var pmask_29555 = cljs.core.nth.call(null,vec__29501_29553,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_29554,"$ = ",pmask_29555,";");


var G__29556 = seq__29491_29549;
var G__29557 = chunk__29492_29550;
var G__29558 = count__29493_29551;
var G__29559 = (i__29494_29552 + (1));
seq__29491_29549 = G__29556;
chunk__29492_29550 = G__29557;
count__29493_29551 = G__29558;
i__29494_29552 = G__29559;
continue;
} else {
var temp__5804__auto___29560 = cljs.core.seq.call(null,seq__29491_29549);
if(temp__5804__auto___29560){
var seq__29491_29561__$1 = temp__5804__auto___29560;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29491_29561__$1)){
var c__5568__auto___29562 = cljs.core.chunk_first.call(null,seq__29491_29561__$1);
var G__29563 = cljs.core.chunk_rest.call(null,seq__29491_29561__$1);
var G__29564 = c__5568__auto___29562;
var G__29565 = cljs.core.count.call(null,c__5568__auto___29562);
var G__29566 = (0);
seq__29491_29549 = G__29563;
chunk__29492_29550 = G__29564;
count__29493_29551 = G__29565;
i__29494_29552 = G__29566;
continue;
} else {
var vec__29504_29567 = cljs.core.first.call(null,seq__29491_29561__$1);
var pno_29568 = cljs.core.nth.call(null,vec__29504_29567,(0),null);
var pmask_29569 = cljs.core.nth.call(null,vec__29504_29567,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_29568,"$ = ",pmask_29569,";");


var G__29570 = cljs.core.next.call(null,seq__29491_29561__$1);
var G__29571 = null;
var G__29572 = (0);
var G__29573 = (0);
seq__29491_29549 = G__29570;
chunk__29492_29550 = G__29571;
count__29493_29551 = G__29572;
i__29494_29552 = G__29573;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__29574){
var map__29575 = p__29574;
var map__29575__$1 = cljs.core.__destructure_map.call(null,map__29575);
var target = cljs.core.get.call(null,map__29575__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__29575__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__29575__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__29575__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__29575__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9256__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"host-field","host-field",-72662140),(function (ast){
return cljs.compiler.emit_dot.call(null,ast);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"host-call","host-call",1059629755),(function (ast){
return cljs.compiler.emit_dot.call(null,ast);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__29576){
var map__29577 = p__29576;
var map__29577__$1 = cljs.core.__destructure_map.call(null,map__29577);
var op = cljs.core.get.call(null,map__29577__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__29577__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__29577__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__29577__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__29577__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__5043__auto__ = code;
if(cljs.core.truth_(and__5043__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__5043__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__9256__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__29582 = cljs.core.seq.call(null,table);
var chunk__29583 = null;
var count__29584 = (0);
var i__29585 = (0);
while(true){
if((i__29585 < count__29584)){
var vec__29592 = cljs.core._nth.call(null,chunk__29583,i__29585);
var sym = cljs.core.nth.call(null,vec__29592,(0),null);
var value = cljs.core.nth.call(null,vec__29592,(1),null);
var ns_29598 = cljs.core.namespace.call(null,sym);
var name_29599 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__29600 = seq__29582;
var G__29601 = chunk__29583;
var G__29602 = count__29584;
var G__29603 = (i__29585 + (1));
seq__29582 = G__29600;
chunk__29583 = G__29601;
count__29584 = G__29602;
i__29585 = G__29603;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__29582);
if(temp__5804__auto__){
var seq__29582__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29582__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__29582__$1);
var G__29604 = cljs.core.chunk_rest.call(null,seq__29582__$1);
var G__29605 = c__5568__auto__;
var G__29606 = cljs.core.count.call(null,c__5568__auto__);
var G__29607 = (0);
seq__29582 = G__29604;
chunk__29583 = G__29605;
count__29584 = G__29606;
i__29585 = G__29607;
continue;
} else {
var vec__29595 = cljs.core.first.call(null,seq__29582__$1);
var sym = cljs.core.nth.call(null,vec__29595,(0),null);
var value = cljs.core.nth.call(null,vec__29595,(1),null);
var ns_29608 = cljs.core.namespace.call(null,sym);
var name_29609 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__29610 = cljs.core.next.call(null,seq__29582__$1);
var G__29611 = null;
var G__29612 = (0);
var G__29613 = (0);
seq__29582 = G__29610;
chunk__29583 = G__29611;
count__29584 = G__29612;
i__29585 = G__29613;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__29615 = arguments.length;
switch (G__29615) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.call(null,cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?cljs.analyzer.get_externs.call(null):null));
}));

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq.call(null,cljs.core.keys.call(null,externs));
while(true){
if(ks){
var k_29620 = cljs.core.first.call(null,ks);
var vec__29616_29621 = cljs.core.conj.call(null,prefix,k_29620);
var top_29622 = cljs.core.nth.call(null,vec__29616_29621,(0),null);
var prefix_SINGLEQUOTE__29623 = vec__29616_29621;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_29620)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__29623) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_29622)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_29622)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__29623)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_29622);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__29623)),";");
}
} else {
}

var m_29624 = cljs.core.get.call(null,externs,k_29620);
if(cljs.core.empty_QMARK_.call(null,m_29624)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__29623,m_29624,top_level,known_externs);
}

var G__29625 = cljs.core.next.call(null,ks);
ks = G__29625;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=compiler.js.map
