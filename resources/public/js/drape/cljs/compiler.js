// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
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
var map__18481 = s;
var map__18481__$1 = (((((!((map__18481 == null))))?(((((map__18481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18481):map__18481);
var name = cljs.core.get.call(null,map__18481__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__18481__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__18484 = info;
var map__18485 = G__18484;
var map__18485__$1 = (((((!((map__18485 == null))))?(((((map__18485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18485):map__18485);
var shadow = cljs.core.get.call(null,map__18485__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__18484__$1 = G__18484;
while(true){
var d__$2 = d__$1;
var map__18487 = G__18484__$1;
var map__18487__$1 = (((((!((map__18487 == null))))?(((((map__18487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18487):map__18487);
var shadow__$1 = cljs.core.get.call(null,map__18487__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__18489 = (d__$2 + (1));
var G__18490 = shadow__$1;
d__$1 = G__18489;
G__18484__$1 = G__18490;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__18491){
var map__18492 = p__18491;
var map__18492__$1 = (((((!((map__18492 == null))))?(((((map__18492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18492):map__18492);
var name_var = map__18492__$1;
var name = cljs.core.get.call(null,map__18492__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__18492__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__18494 = info;
var map__18494__$1 = (((((!((map__18494 == null))))?(((((map__18494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18494):map__18494);
var ns = cljs.core.get.call(null,map__18494__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__18494__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$")),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('')));
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
var G__18497 = arguments.length;
switch (G__18497) {
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

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
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
var ms = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",(17),(1),(11321),(11321),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)])).call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__18499 = cp;
switch (G__18499) {
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
return ["\\u",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad),cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__18501_18505 = cljs.core.seq.call(null,s);
var chunk__18502_18506 = null;
var count__18503_18507 = (0);
var i__18504_18508 = (0);
while(true){
if((i__18504_18508 < count__18503_18507)){
var c_18509 = cljs.core._nth.call(null,chunk__18502_18506,i__18504_18508);
sb.append(cljs.compiler.escape_char.call(null,c_18509));


var G__18510 = seq__18501_18505;
var G__18511 = chunk__18502_18506;
var G__18512 = count__18503_18507;
var G__18513 = (i__18504_18508 + (1));
seq__18501_18505 = G__18510;
chunk__18502_18506 = G__18511;
count__18503_18507 = G__18512;
i__18504_18508 = G__18513;
continue;
} else {
var temp__5735__auto___18514 = cljs.core.seq.call(null,seq__18501_18505);
if(temp__5735__auto___18514){
var seq__18501_18515__$1 = temp__5735__auto___18514;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18501_18515__$1)){
var c__4461__auto___18516 = cljs.core.chunk_first.call(null,seq__18501_18515__$1);
var G__18517 = cljs.core.chunk_rest.call(null,seq__18501_18515__$1);
var G__18518 = c__4461__auto___18516;
var G__18519 = cljs.core.count.call(null,c__4461__auto___18516);
var G__18520 = (0);
seq__18501_18505 = G__18517;
chunk__18502_18506 = G__18518;
count__18503_18507 = G__18519;
i__18504_18508 = G__18520;
continue;
} else {
var c_18521 = cljs.core.first.call(null,seq__18501_18515__$1);
sb.append(cljs.compiler.escape_char.call(null,c_18521));


var G__18522 = cljs.core.next.call(null,seq__18501_18515__$1);
var G__18523 = null;
var G__18524 = (0);
var G__18525 = (0);
seq__18501_18505 = G__18522;
chunk__18502_18506 = G__18523;
count__18503_18507 = G__18524;
i__18504_18508 = G__18525;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__4524__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4525__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4526__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4527__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4528__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4528__auto__,method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__18526_18531 = ast;
var map__18526_18532__$1 = (((((!((map__18526_18531 == null))))?(((((map__18526_18531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18526_18531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18526_18531):map__18526_18531);
var env_18533 = cljs.core.get.call(null,map__18526_18532__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_18533))){
var map__18528_18534 = env_18533;
var map__18528_18535__$1 = (((((!((map__18528_18534 == null))))?(((((map__18528_18534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18528_18534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18528_18534):map__18528_18534);
var line_18536 = cljs.core.get.call(null,map__18528_18535__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_18537 = cljs.core.get.call(null,map__18528_18535__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__18528_18534,map__18528_18535__$1,line_18536,column_18537,map__18526_18531,map__18526_18532__$1,env_18533){
return (function (m){
var minfo = (function (){var G__18530 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__18530,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__18530;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_18536 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__18528_18534,map__18528_18535__$1,line_18536,column_18537,map__18526_18531,map__18526_18532__$1,env_18533){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_18537)?(column_18537 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__18528_18534,map__18528_18535__$1,line_18536,column_18537,map__18526_18531,map__18526_18532__$1,env_18533){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__18528_18534,map__18528_18535__$1,line_18536,column_18537,map__18526_18531,map__18526_18532__$1,env_18533))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__18528_18534,map__18528_18535__$1,line_18536,column_18537,map__18526_18531,map__18526_18532__$1,env_18533))
,cljs.core.sorted_map.call(null)));
});})(map__18528_18534,map__18528_18535__$1,line_18536,column_18537,map__18526_18531,map__18526_18532__$1,env_18533))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__18546 = arguments.length;
switch (G__18546) {
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
var args_arr__4662__auto__ = [];
var len__4641__auto___18553 = arguments.length;
var i__4642__auto___18554 = (0);
while(true){
if((i__4642__auto___18554 < len__4641__auto___18553)){
args_arr__4662__auto__.push((arguments[i__4642__auto___18554]));

var G__18555 = (i__4642__auto___18554 + (1));
i__4642__auto___18554 = G__18555;
continue;
} else {
}
break;
}

var argseq__4663__auto__ = (new cljs.core.IndexedSeq(args_arr__4662__auto__.slice((5)),(0),null));
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4663__auto__);

}
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1 = (function (a){
if((a == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,a)){
cljs.compiler.emit.call(null,a);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,a)){
cljs.core.apply.call(null,cljs.compiler.emits,a);
} else {
if(goog.isFunction(a)){
a.call(null);
} else {
var s_18556 = (function (){var G__18547 = a;
if((!(typeof a === 'string'))){
return G__18547.toString();
} else {
return G__18547;
}
})();
var temp__5739__auto___18557 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___18557 == null)){
} else {
var sm_data_18558 = temp__5739__auto___18557;
cljs.core.swap_BANG_.call(null,sm_data_18558,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),((function (sm_data_18558,temp__5739__auto___18557,s_18556){
return (function (p1__18538_SHARP_){
return (p1__18538_SHARP_ + s_18556.length);
});})(sm_data_18558,temp__5739__auto___18557,s_18556))
);
}

cljs.core.print.call(null,s_18556);

}
}
}
}

return null;
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.call(null,a);

return cljs.compiler.emits.call(null,b);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

return cljs.compiler.emits.call(null,c);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

return cljs.compiler.emits.call(null,d);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

return cljs.compiler.emits.call(null,e);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

var seq__18548 = cljs.core.seq.call(null,xs);
var chunk__18549 = null;
var count__18550 = (0);
var i__18551 = (0);
while(true){
if((i__18551 < count__18550)){
var x = cljs.core._nth.call(null,chunk__18549,i__18551);
cljs.compiler.emits.call(null,x);


var G__18559 = seq__18548;
var G__18560 = chunk__18549;
var G__18561 = count__18550;
var G__18562 = (i__18551 + (1));
seq__18548 = G__18559;
chunk__18549 = G__18560;
count__18550 = G__18561;
i__18551 = G__18562;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__18548);
if(temp__5735__auto__){
var seq__18548__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18548__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__18548__$1);
var G__18563 = cljs.core.chunk_rest.call(null,seq__18548__$1);
var G__18564 = c__4461__auto__;
var G__18565 = cljs.core.count.call(null,c__4461__auto__);
var G__18566 = (0);
seq__18548 = G__18563;
chunk__18549 = G__18564;
count__18550 = G__18565;
i__18551 = G__18566;
continue;
} else {
var x = cljs.core.first.call(null,seq__18548__$1);
cljs.compiler.emits.call(null,x);


var G__18567 = cljs.core.next.call(null,seq__18548__$1);
var G__18568 = null;
var G__18569 = (0);
var G__18570 = (0);
seq__18548 = G__18567;
chunk__18549 = G__18568;
count__18550 = G__18569;
i__18551 = G__18570;
continue;
}
} else {
return null;
}
}
break;
}
});

/** @this {Function} */
cljs.compiler.emits.cljs$lang$applyTo = (function (seq18540){
var G__18541 = cljs.core.first.call(null,seq18540);
var seq18540__$1 = cljs.core.next.call(null,seq18540);
var G__18542 = cljs.core.first.call(null,seq18540__$1);
var seq18540__$2 = cljs.core.next.call(null,seq18540__$1);
var G__18543 = cljs.core.first.call(null,seq18540__$2);
var seq18540__$3 = cljs.core.next.call(null,seq18540__$2);
var G__18544 = cljs.core.first.call(null,seq18540__$3);
var seq18540__$4 = cljs.core.next.call(null,seq18540__$3);
var G__18545 = cljs.core.first.call(null,seq18540__$4);
var seq18540__$5 = cljs.core.next.call(null,seq18540__$4);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18541,G__18542,G__18543,G__18544,G__18545,seq18540__$5);
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__18571){
var map__18572 = p__18571;
var map__18572__$1 = (((((!((map__18572 == null))))?(((((map__18572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18572):map__18572);
var m = map__18572__$1;
var gen_line = cljs.core.get.call(null,map__18572__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__18581 = arguments.length;
switch (G__18581) {
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
var args_arr__4662__auto__ = [];
var len__4641__auto___18587 = arguments.length;
var i__4642__auto___18588 = (0);
while(true){
if((i__4642__auto___18588 < len__4641__auto___18587)){
args_arr__4662__auto__.push((arguments[i__4642__auto___18588]));

var G__18589 = (i__4642__auto___18588 + (1));
i__4642__auto___18588 = G__18589;
continue;
} else {
}
break;
}

var argseq__4663__auto__ = (new cljs.core.IndexedSeq(args_arr__4662__auto__.slice((5)),(0),null));
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4663__auto__);

}
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1 = (function (a){
cljs.compiler.emits.call(null,a);

return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

var seq__18582_18590 = cljs.core.seq.call(null,xs);
var chunk__18583_18591 = null;
var count__18584_18592 = (0);
var i__18585_18593 = (0);
while(true){
if((i__18585_18593 < count__18584_18592)){
var x_18594 = cljs.core._nth.call(null,chunk__18583_18591,i__18585_18593);
cljs.compiler.emits.call(null,x_18594);


var G__18595 = seq__18582_18590;
var G__18596 = chunk__18583_18591;
var G__18597 = count__18584_18592;
var G__18598 = (i__18585_18593 + (1));
seq__18582_18590 = G__18595;
chunk__18583_18591 = G__18596;
count__18584_18592 = G__18597;
i__18585_18593 = G__18598;
continue;
} else {
var temp__5735__auto___18599 = cljs.core.seq.call(null,seq__18582_18590);
if(temp__5735__auto___18599){
var seq__18582_18600__$1 = temp__5735__auto___18599;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18582_18600__$1)){
var c__4461__auto___18601 = cljs.core.chunk_first.call(null,seq__18582_18600__$1);
var G__18602 = cljs.core.chunk_rest.call(null,seq__18582_18600__$1);
var G__18603 = c__4461__auto___18601;
var G__18604 = cljs.core.count.call(null,c__4461__auto___18601);
var G__18605 = (0);
seq__18582_18590 = G__18602;
chunk__18583_18591 = G__18603;
count__18584_18592 = G__18604;
i__18585_18593 = G__18605;
continue;
} else {
var x_18606 = cljs.core.first.call(null,seq__18582_18600__$1);
cljs.compiler.emits.call(null,x_18606);


var G__18607 = cljs.core.next.call(null,seq__18582_18600__$1);
var G__18608 = null;
var G__18609 = (0);
var G__18610 = (0);
seq__18582_18590 = G__18607;
chunk__18583_18591 = G__18608;
count__18584_18592 = G__18609;
i__18585_18593 = G__18610;
continue;
}
} else {
}
}
break;
}

return cljs.compiler._emitln.call(null);
});

/** @this {Function} */
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq18575){
var G__18576 = cljs.core.first.call(null,seq18575);
var seq18575__$1 = cljs.core.next.call(null,seq18575);
var G__18577 = cljs.core.first.call(null,seq18575__$1);
var seq18575__$2 = cljs.core.next.call(null,seq18575__$1);
var G__18578 = cljs.core.first.call(null,seq18575__$2);
var seq18575__$3 = cljs.core.next.call(null,seq18575__$2);
var G__18579 = cljs.core.first.call(null,seq18575__$3);
var seq18575__$4 = cljs.core.next.call(null,seq18575__$3);
var G__18580 = cljs.core.first.call(null,seq18575__$4);
var seq18575__$5 = cljs.core.next.call(null,seq18575__$4);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18576,G__18577,G__18578,G__18579,G__18580,seq18575__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18611_18615 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18612_18616 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18613_18617 = true;
var _STAR_print_fn_STAR__temp_val__18614_18618 = ((function (_STAR_print_newline_STAR__orig_val__18611_18615,_STAR_print_fn_STAR__orig_val__18612_18616,_STAR_print_newline_STAR__temp_val__18613_18617,sb__4572__auto__){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__18611_18615,_STAR_print_fn_STAR__orig_val__18612_18616,_STAR_print_newline_STAR__temp_val__18613_18617,sb__4572__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18613_18617;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18614_18618;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18612_18616;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18611_18615;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4524__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4525__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4526__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4527__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4528__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant*"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4528__auto__,method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__));
})();
}









cljs.compiler.all_distinct_QMARK_ = (function cljs$compiler$all_distinct_QMARK_(xs){
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,xs);
});
cljs.compiler.emit_constant_no_meta = (function cljs$compiler$emit_constant_no_meta(x){
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x)){
return cljs.compiler.emit_list.call(null,x,cljs.compiler.emit_constants_comma_sep);
} else {
if(cljs.core.record_QMARK_.call(null,x)){
var vec__18619 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__18619,(0),null);
var name = cljs.core.nth.call(null,vec__18619,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,((function (vec__18619,ns,name){
return (function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
});})(vec__18619,ns,name))
);
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x)){
return cljs.compiler.emit_map.call(null,cljs.core.keys.call(null,x),cljs.core.vals.call(null,x),cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_);
} else {
if(cljs.analyzer.cljs_vector_QMARK_.call(null,x)){
return cljs.compiler.emit_vector.call(null,x,cljs.compiler.emit_constants_comma_sep);
} else {
if(cljs.analyzer.cljs_set_QMARK_.call(null,x)){
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
return cljs.compiler.emit_with_meta.call(null,((function (m){
return (function (){
return cljs.compiler.emit_constant_no_meta.call(null,v);
});})(m))
,((function (m){
return (function (){
return cljs.compiler.emit_constant_no_meta.call(null,m);
});})(m))
);
} else {
return cljs.compiler.emit_constant_no_meta.call(null,v);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.call(null,["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.type.call(null,x)))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
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
return cljs.compiler.emits.call(null,"(",x,")");

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
var vec__18622 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__18622,(0),null);
var flags = cljs.core.nth.call(null,vec__18622,(1),null);
var pattern = cljs.core.nth.call(null,vec__18622,(2),null);
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

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = (((!((ns == null))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
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
var temp__5733__auto__ = (function (){var and__4036__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4036__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.Symbol,(function (x){
var temp__5733__auto__ = (function (){var and__4036__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4036__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
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
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.tagged_literals.JSValue,(function (v){
var items = v.val;
if(cljs.core.map_QMARK_.call(null,items)){
return cljs.compiler.emit_js_object.call(null,items,((function (items){
return (function (p1__18625_SHARP_){
return ((function (items){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__18625_SHARP_);
});
;})(items))
});})(items))
);
} else {
return cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__18627){
var map__18628 = p__18627;
var map__18628__$1 = (((((!((map__18628 == null))))?(((((map__18628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18628):map__18628);
var ast = map__18628__$1;
var info = cljs.core.get.call(null,map__18628__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__18628__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__18628__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__18630 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__18630__$1 = (((((!((map__18630 == null))))?(((((map__18630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18630):map__18630);
var cenv = map__18630__$1;
var options = cljs.core.get.call(null,map__18630__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__4047__auto__ = js_module_name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
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
var reserved = (function (){var G__18632 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__4036__auto__;
}
})())){
return clojure.set.difference.call(null,G__18632,cljs.analyzer.es5_allowed);
} else {
return G__18632;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4047__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__18633 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__18633,reserved);
} else {
return G__18633;
}
})();
var env__18473__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18473__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__18634_18635 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__18634_18636__$1 = (((G__18634_18635 instanceof cljs.core.Keyword))?G__18634_18635.fqn:null);
switch (G__18634_18636__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace.call(null,var_name))){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"].",cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved));
} else {
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core._EQ_.call(null,"default",cljs.core.name.call(null,var_name));
} else {
return and__4036__auto__;
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18473__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__18638){
var map__18639 = p__18638;
var map__18639__$1 = (((((!((map__18639 == null))))?(((((map__18639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18639):map__18639);
var arg = map__18639__$1;
var env = cljs.core.get.call(null,map__18639__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__18639__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__18639__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__18639__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__18641 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__18641__$1 = (((((!((map__18641 == null))))?(((((map__18641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18641):map__18641);
var name = cljs.core.get.call(null,map__18641__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__18473__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18473__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18473__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__18643){
var map__18644 = p__18643;
var map__18644__$1 = (((((!((map__18644 == null))))?(((((map__18644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18644):map__18644);
var expr = cljs.core.get.call(null,map__18644__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__18644__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__18644__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__18473__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18473__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18473__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,((function (keys__$1){
return (function (p1__18646_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__18646_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
});})(keys__$1))
,keys__$1)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count.call(null,keys__$1))));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__18647){
var map__18648 = p__18647;
var map__18648__$1 = (((((!((map__18648 == null))))?(((((map__18648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18648):map__18648);
var env = cljs.core.get.call(null,map__18648__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__18648__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__18648__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__18473__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18473__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18473__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__18650){
var map__18651 = p__18650;
var map__18651__$1 = (((((!((map__18651 == null))))?(((((map__18651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18651):map__18651);
var items = cljs.core.get.call(null,map__18651__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__18651__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__18473__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18473__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18473__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,((function (items__$1){
return (function (p1__18653_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__18653_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
});})(items__$1))
,items__$1)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count.call(null,items__$1))));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__18654){
var map__18655 = p__18654;
var map__18655__$1 = (((((!((map__18655 == null))))?(((((map__18655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18655):map__18655);
var items = cljs.core.get.call(null,map__18655__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__18655__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__18473__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18473__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18473__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5735__auto___18673 = cljs.core.seq.call(null,items);
if(temp__5735__auto___18673){
var items_18674__$1 = temp__5735__auto___18673;
var vec__18657_18675 = items_18674__$1;
var seq__18658_18676 = cljs.core.seq.call(null,vec__18657_18675);
var first__18659_18677 = cljs.core.first.call(null,seq__18658_18676);
var seq__18658_18678__$1 = cljs.core.next.call(null,seq__18658_18676);
var vec__18660_18679 = first__18659_18677;
var k_18680 = cljs.core.nth.call(null,vec__18660_18679,(0),null);
var v_18681 = cljs.core.nth.call(null,vec__18660_18679,(1),null);
var r_18682 = seq__18658_18678__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_18680),"\": ",emit_js_object_val.call(null,v_18681));

var seq__18663_18683 = cljs.core.seq.call(null,r_18682);
var chunk__18664_18684 = null;
var count__18665_18685 = (0);
var i__18666_18686 = (0);
while(true){
if((i__18666_18686 < count__18665_18685)){
var vec__18667_18687 = cljs.core._nth.call(null,chunk__18664_18684,i__18666_18686);
var k_18688__$1 = cljs.core.nth.call(null,vec__18667_18687,(0),null);
var v_18689__$1 = cljs.core.nth.call(null,vec__18667_18687,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_18688__$1),"\": ",emit_js_object_val.call(null,v_18689__$1));


var G__18690 = seq__18663_18683;
var G__18691 = chunk__18664_18684;
var G__18692 = count__18665_18685;
var G__18693 = (i__18666_18686 + (1));
seq__18663_18683 = G__18690;
chunk__18664_18684 = G__18691;
count__18665_18685 = G__18692;
i__18666_18686 = G__18693;
continue;
} else {
var temp__5735__auto___18694__$1 = cljs.core.seq.call(null,seq__18663_18683);
if(temp__5735__auto___18694__$1){
var seq__18663_18695__$1 = temp__5735__auto___18694__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18663_18695__$1)){
var c__4461__auto___18696 = cljs.core.chunk_first.call(null,seq__18663_18695__$1);
var G__18697 = cljs.core.chunk_rest.call(null,seq__18663_18695__$1);
var G__18698 = c__4461__auto___18696;
var G__18699 = cljs.core.count.call(null,c__4461__auto___18696);
var G__18700 = (0);
seq__18663_18683 = G__18697;
chunk__18664_18684 = G__18698;
count__18665_18685 = G__18699;
i__18666_18686 = G__18700;
continue;
} else {
var vec__18670_18701 = cljs.core.first.call(null,seq__18663_18695__$1);
var k_18702__$1 = cljs.core.nth.call(null,vec__18670_18701,(0),null);
var v_18703__$1 = cljs.core.nth.call(null,vec__18670_18701,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_18702__$1),"\": ",emit_js_object_val.call(null,v_18703__$1));


var G__18704 = cljs.core.next.call(null,seq__18663_18695__$1);
var G__18705 = null;
var G__18706 = (0);
var G__18707 = (0);
seq__18663_18683 = G__18704;
chunk__18664_18684 = G__18705;
count__18665_18685 = G__18706;
i__18666_18686 = G__18707;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__18708){
var map__18709 = p__18708;
var map__18709__$1 = (((((!((map__18709 == null))))?(((((map__18709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18709):map__18709);
var keys = cljs.core.get.call(null,map__18709__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__18709__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__18709__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__18473__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18473__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18473__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__18711){
var map__18712 = p__18711;
var map__18712__$1 = (((((!((map__18712 == null))))?(((((map__18712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18712):map__18712);
var items = cljs.core.get.call(null,map__18712__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__18712__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__18473__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18473__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18473__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__18714){
var map__18715 = p__18714;
var map__18715__$1 = (((((!((map__18715 == null))))?(((((map__18715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18715):map__18715);
var expr = cljs.core.get.call(null,map__18715__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__18717){
var map__18718 = p__18717;
var map__18718__$1 = (((((!((map__18718 == null))))?(((((map__18718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18718):map__18718);
var form = cljs.core.get.call(null,map__18718__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__18718__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__18473__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18473__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18473__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__18720 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__18720__$1 = (((((!((map__18720 == null))))?(((((map__18720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18720):map__18720);
var op = cljs.core.get.call(null,map__18720__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__18720__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__18720__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4047__auto__ = (function (){var and__4036__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842));
if(and__4036__auto__){
var and__4036__auto____$1 = form;
if(cljs.core.truth_(and__4036__auto____$1)){
return (!(((((typeof form === 'string') && (cljs.core._EQ_.call(null,form,"")))) || (((typeof form === 'number') && ((form === (0))))))));
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var and__4036__auto__ = (!((const_expr == null)));
if(and__4036__auto__){
return cljs.compiler.truthy_constant_QMARK_.call(null,const_expr);
} else {
return and__4036__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(expr){
var map__18722 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__18722__$1 = (((((!((map__18722 == null))))?(((((map__18722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18722):map__18722);
var op = cljs.core.get.call(null,map__18722__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__18722__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__18722__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4047__auto__ = ((cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842))) && (((form === false) || ((form == null)))));
if(or__4047__auto__){
return or__4047__auto__;
} else {
var and__4036__auto__ = (!((const_expr == null)));
if(and__4036__auto__){
return cljs.compiler.falsey_constant_QMARK_.call(null,const_expr);
} else {
return and__4036__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__4047__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__18724){
var map__18725 = p__18724;
var map__18725__$1 = (((((!((map__18725 == null))))?(((((map__18725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18725):map__18725);
var test = cljs.core.get.call(null,map__18725__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__18725__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__18725__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__18725__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__18725__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__4047__auto__ = unchecked;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__18727){
var map__18728 = p__18727;
var map__18728__$1 = (((((!((map__18728 == null))))?(((((map__18728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18728):map__18728);
var v = cljs.core.get.call(null,map__18728__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__18728__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__18728__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__18728__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__18730_18750 = cljs.core.seq.call(null,nodes);
var chunk__18731_18751 = null;
var count__18732_18752 = (0);
var i__18733_18753 = (0);
while(true){
if((i__18733_18753 < count__18732_18752)){
var map__18734_18754 = cljs.core._nth.call(null,chunk__18731_18751,i__18733_18753);
var map__18734_18755__$1 = (((((!((map__18734_18754 == null))))?(((((map__18734_18754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18734_18754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18734_18754):map__18734_18754);
var ts_18756 = cljs.core.get.call(null,map__18734_18755__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__18735_18757 = cljs.core.get.call(null,map__18734_18755__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__18735_18758__$1 = (((((!((map__18735_18757 == null))))?(((((map__18735_18757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18735_18757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18735_18757):map__18735_18757);
var then_18759 = cljs.core.get.call(null,map__18735_18758__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__18738_18760 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_18756));
var chunk__18739_18761 = null;
var count__18740_18762 = (0);
var i__18741_18763 = (0);
while(true){
if((i__18741_18763 < count__18740_18762)){
var test_18764 = cljs.core._nth.call(null,chunk__18739_18761,i__18741_18763);
cljs.compiler.emitln.call(null,"case ",test_18764,":");


var G__18765 = seq__18738_18760;
var G__18766 = chunk__18739_18761;
var G__18767 = count__18740_18762;
var G__18768 = (i__18741_18763 + (1));
seq__18738_18760 = G__18765;
chunk__18739_18761 = G__18766;
count__18740_18762 = G__18767;
i__18741_18763 = G__18768;
continue;
} else {
var temp__5735__auto___18769 = cljs.core.seq.call(null,seq__18738_18760);
if(temp__5735__auto___18769){
var seq__18738_18770__$1 = temp__5735__auto___18769;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18738_18770__$1)){
var c__4461__auto___18771 = cljs.core.chunk_first.call(null,seq__18738_18770__$1);
var G__18772 = cljs.core.chunk_rest.call(null,seq__18738_18770__$1);
var G__18773 = c__4461__auto___18771;
var G__18774 = cljs.core.count.call(null,c__4461__auto___18771);
var G__18775 = (0);
seq__18738_18760 = G__18772;
chunk__18739_18761 = G__18773;
count__18740_18762 = G__18774;
i__18741_18763 = G__18775;
continue;
} else {
var test_18776 = cljs.core.first.call(null,seq__18738_18770__$1);
cljs.compiler.emitln.call(null,"case ",test_18776,":");


var G__18777 = cljs.core.next.call(null,seq__18738_18770__$1);
var G__18778 = null;
var G__18779 = (0);
var G__18780 = (0);
seq__18738_18760 = G__18777;
chunk__18739_18761 = G__18778;
count__18740_18762 = G__18779;
i__18741_18763 = G__18780;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_18759);
} else {
cljs.compiler.emitln.call(null,then_18759);
}

cljs.compiler.emitln.call(null,"break;");


var G__18781 = seq__18730_18750;
var G__18782 = chunk__18731_18751;
var G__18783 = count__18732_18752;
var G__18784 = (i__18733_18753 + (1));
seq__18730_18750 = G__18781;
chunk__18731_18751 = G__18782;
count__18732_18752 = G__18783;
i__18733_18753 = G__18784;
continue;
} else {
var temp__5735__auto___18785 = cljs.core.seq.call(null,seq__18730_18750);
if(temp__5735__auto___18785){
var seq__18730_18786__$1 = temp__5735__auto___18785;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18730_18786__$1)){
var c__4461__auto___18787 = cljs.core.chunk_first.call(null,seq__18730_18786__$1);
var G__18788 = cljs.core.chunk_rest.call(null,seq__18730_18786__$1);
var G__18789 = c__4461__auto___18787;
var G__18790 = cljs.core.count.call(null,c__4461__auto___18787);
var G__18791 = (0);
seq__18730_18750 = G__18788;
chunk__18731_18751 = G__18789;
count__18732_18752 = G__18790;
i__18733_18753 = G__18791;
continue;
} else {
var map__18742_18792 = cljs.core.first.call(null,seq__18730_18786__$1);
var map__18742_18793__$1 = (((((!((map__18742_18792 == null))))?(((((map__18742_18792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18742_18792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18742_18792):map__18742_18792);
var ts_18794 = cljs.core.get.call(null,map__18742_18793__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__18743_18795 = cljs.core.get.call(null,map__18742_18793__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__18743_18796__$1 = (((((!((map__18743_18795 == null))))?(((((map__18743_18795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18743_18795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18743_18795):map__18743_18795);
var then_18797 = cljs.core.get.call(null,map__18743_18796__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__18746_18798 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_18794));
var chunk__18747_18799 = null;
var count__18748_18800 = (0);
var i__18749_18801 = (0);
while(true){
if((i__18749_18801 < count__18748_18800)){
var test_18802 = cljs.core._nth.call(null,chunk__18747_18799,i__18749_18801);
cljs.compiler.emitln.call(null,"case ",test_18802,":");


var G__18803 = seq__18746_18798;
var G__18804 = chunk__18747_18799;
var G__18805 = count__18748_18800;
var G__18806 = (i__18749_18801 + (1));
seq__18746_18798 = G__18803;
chunk__18747_18799 = G__18804;
count__18748_18800 = G__18805;
i__18749_18801 = G__18806;
continue;
} else {
var temp__5735__auto___18807__$1 = cljs.core.seq.call(null,seq__18746_18798);
if(temp__5735__auto___18807__$1){
var seq__18746_18808__$1 = temp__5735__auto___18807__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18746_18808__$1)){
var c__4461__auto___18809 = cljs.core.chunk_first.call(null,seq__18746_18808__$1);
var G__18810 = cljs.core.chunk_rest.call(null,seq__18746_18808__$1);
var G__18811 = c__4461__auto___18809;
var G__18812 = cljs.core.count.call(null,c__4461__auto___18809);
var G__18813 = (0);
seq__18746_18798 = G__18810;
chunk__18747_18799 = G__18811;
count__18748_18800 = G__18812;
i__18749_18801 = G__18813;
continue;
} else {
var test_18814 = cljs.core.first.call(null,seq__18746_18808__$1);
cljs.compiler.emitln.call(null,"case ",test_18814,":");


var G__18815 = cljs.core.next.call(null,seq__18746_18808__$1);
var G__18816 = null;
var G__18817 = (0);
var G__18818 = (0);
seq__18746_18798 = G__18815;
chunk__18747_18799 = G__18816;
count__18748_18800 = G__18817;
i__18749_18801 = G__18818;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_18797);
} else {
cljs.compiler.emitln.call(null,then_18797);
}

cljs.compiler.emitln.call(null,"break;");


var G__18819 = cljs.core.next.call(null,seq__18730_18786__$1);
var G__18820 = null;
var G__18821 = (0);
var G__18822 = (0);
seq__18730_18750 = G__18819;
chunk__18731_18751 = G__18820;
count__18732_18752 = G__18821;
i__18733_18753 = G__18822;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__18823){
var map__18824 = p__18823;
var map__18824__$1 = (((((!((map__18824 == null))))?(((((map__18824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18824):map__18824);
var throw$ = cljs.core.get.call(null,map__18824__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__18824__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__18827 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__18827,(0),null);
var rstr = cljs.core.nth.call(null,vec__18827,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__18827,fstr,rstr,ret_t,axstr){
return (function (p1__18826_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__18826_SHARP_);
});})(idx,vec__18827,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__18830 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18830),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__18830;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
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
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"|",cljs.core.map.call(null,((function (ts__$1,xs){
return (function (p1__18831_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__18831_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__18832 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__18833 = cljs.core.seq.call(null,vec__18832);
var first__18834 = cljs.core.first.call(null,seq__18833);
var seq__18833__$1 = cljs.core.next.call(null,seq__18833);
var p = first__18834;
var first__18834__$1 = cljs.core.first.call(null,seq__18833__$1);
var seq__18833__$2 = cljs.core.next.call(null,seq__18833__$1);
var ts = first__18834__$1;
var first__18834__$2 = cljs.core.first.call(null,seq__18833__$2);
var seq__18833__$3 = cljs.core.next.call(null,seq__18833__$2);
var n = first__18834__$2;
var xs = seq__18833__$3;
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__4036__auto__){
var and__4036__auto____$1 = ts;
if(cljs.core.truth_(and__4036__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__18835 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__18836 = cljs.core.seq.call(null,vec__18835);
var first__18837 = cljs.core.first.call(null,seq__18836);
var seq__18836__$1 = cljs.core.next.call(null,seq__18836);
var p = first__18837;
var first__18837__$1 = cljs.core.first.call(null,seq__18836__$1);
var seq__18836__$2 = cljs.core.next.call(null,seq__18836__$1);
var ts = first__18837__$1;
var xs = seq__18836__$2;
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__4036__auto__){
var and__4036__auto____$1 = ts;
if(cljs.core.truth_(and__4036__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
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
var G__18840 = arguments.length;
switch (G__18840) {
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

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__18848 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__18838_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__18838_SHARP_);
} else {
return p1__18838_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__18849 = cljs.core.seq.call(null,vec__18848);
var first__18850 = cljs.core.first.call(null,seq__18849);
var seq__18849__$1 = cljs.core.next.call(null,seq__18849);
var x = first__18850;
var ys = seq__18849__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__18851 = cljs.core.seq.call(null,ys);
var chunk__18852 = null;
var count__18853 = (0);
var i__18854 = (0);
while(true){
if((i__18854 < count__18853)){
var next_line = cljs.core._nth.call(null,chunk__18852,i__18854);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__18860 = seq__18851;
var G__18861 = chunk__18852;
var G__18862 = count__18853;
var G__18863 = (i__18854 + (1));
seq__18851 = G__18860;
chunk__18852 = G__18861;
count__18853 = G__18862;
i__18854 = G__18863;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__18851);
if(temp__5735__auto__){
var seq__18851__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18851__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__18851__$1);
var G__18864 = cljs.core.chunk_rest.call(null,seq__18851__$1);
var G__18865 = c__4461__auto__;
var G__18866 = cljs.core.count.call(null,c__4461__auto__);
var G__18867 = (0);
seq__18851 = G__18864;
chunk__18852 = G__18865;
count__18853 = G__18866;
i__18854 = G__18867;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__18851__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__18868 = cljs.core.next.call(null,seq__18851__$1);
var G__18869 = null;
var G__18870 = (0);
var G__18871 = (0);
seq__18851 = G__18868;
chunk__18852 = G__18869;
count__18853 = G__18870;
i__18854 = G__18871;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__18855_18872 = cljs.core.seq.call(null,docs__$2);
var chunk__18856_18873 = null;
var count__18857_18874 = (0);
var i__18858_18875 = (0);
while(true){
if((i__18858_18875 < count__18857_18874)){
var e_18876 = cljs.core._nth.call(null,chunk__18856_18873,i__18858_18875);
if(cljs.core.truth_(e_18876)){
print_comment_lines.call(null,e_18876);
} else {
}


var G__18877 = seq__18855_18872;
var G__18878 = chunk__18856_18873;
var G__18879 = count__18857_18874;
var G__18880 = (i__18858_18875 + (1));
seq__18855_18872 = G__18877;
chunk__18856_18873 = G__18878;
count__18857_18874 = G__18879;
i__18858_18875 = G__18880;
continue;
} else {
var temp__5735__auto___18881 = cljs.core.seq.call(null,seq__18855_18872);
if(temp__5735__auto___18881){
var seq__18855_18882__$1 = temp__5735__auto___18881;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18855_18882__$1)){
var c__4461__auto___18883 = cljs.core.chunk_first.call(null,seq__18855_18882__$1);
var G__18884 = cljs.core.chunk_rest.call(null,seq__18855_18882__$1);
var G__18885 = c__4461__auto___18883;
var G__18886 = cljs.core.count.call(null,c__4461__auto___18883);
var G__18887 = (0);
seq__18855_18872 = G__18884;
chunk__18856_18873 = G__18885;
count__18857_18874 = G__18886;
i__18858_18875 = G__18887;
continue;
} else {
var e_18888 = cljs.core.first.call(null,seq__18855_18882__$1);
if(cljs.core.truth_(e_18888)){
print_comment_lines.call(null,e_18888);
} else {
}


var G__18889 = cljs.core.next.call(null,seq__18855_18882__$1);
var G__18890 = null;
var G__18891 = (0);
var G__18892 = (0);
seq__18855_18872 = G__18889;
chunk__18856_18873 = G__18890;
count__18857_18874 = G__18891;
i__18858_18875 = G__18892;
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
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return ((typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number'));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__4036__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__18894_SHARP_){
return goog.string.startsWith(p1__18894_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__4036__auto__)){
var and__4036__auto____$1 = opts;
if(cljs.core.truth_(and__4036__auto____$1)){
var and__4036__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__4036__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)], null));
if(cljs.compiler.valid_define_value_QMARK_.call(null,define)){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__4036__auto____$2;
}
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__18895){
var map__18896 = p__18895;
var map__18896__$1 = (((((!((map__18896 == null))))?(((((map__18896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18896):map__18896);
var doc = cljs.core.get.call(null,map__18896__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__18896__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__18896__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.call(null,map__18896__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__18896__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__18896__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__18896__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__18896__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__18896__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__4047__auto__ = init;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

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
cljs.compiler.emits.call(null," = ",(function (){var temp__5733__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__5733__auto__)){
var define = temp__5733__auto__;
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

if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__4036__auto__){
return test;
} else {
return and__4036__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__18898){
var map__18899 = p__18898;
var map__18899__$1 = (((((!((map__18899 == null))))?(((((map__18899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18899):map__18899);
var name = cljs.core.get.call(null,map__18899__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__18899__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__18899__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__18901_18919 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__18902_18920 = null;
var count__18903_18921 = (0);
var i__18904_18922 = (0);
while(true){
if((i__18904_18922 < count__18903_18921)){
var vec__18905_18923 = cljs.core._nth.call(null,chunk__18902_18920,i__18904_18922);
var i_18924 = cljs.core.nth.call(null,vec__18905_18923,(0),null);
var param_18925 = cljs.core.nth.call(null,vec__18905_18923,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_18925);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__18926 = seq__18901_18919;
var G__18927 = chunk__18902_18920;
var G__18928 = count__18903_18921;
var G__18929 = (i__18904_18922 + (1));
seq__18901_18919 = G__18926;
chunk__18902_18920 = G__18927;
count__18903_18921 = G__18928;
i__18904_18922 = G__18929;
continue;
} else {
var temp__5735__auto___18930 = cljs.core.seq.call(null,seq__18901_18919);
if(temp__5735__auto___18930){
var seq__18901_18931__$1 = temp__5735__auto___18930;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18901_18931__$1)){
var c__4461__auto___18932 = cljs.core.chunk_first.call(null,seq__18901_18931__$1);
var G__18933 = cljs.core.chunk_rest.call(null,seq__18901_18931__$1);
var G__18934 = c__4461__auto___18932;
var G__18935 = cljs.core.count.call(null,c__4461__auto___18932);
var G__18936 = (0);
seq__18901_18919 = G__18933;
chunk__18902_18920 = G__18934;
count__18903_18921 = G__18935;
i__18904_18922 = G__18936;
continue;
} else {
var vec__18908_18937 = cljs.core.first.call(null,seq__18901_18931__$1);
var i_18938 = cljs.core.nth.call(null,vec__18908_18937,(0),null);
var param_18939 = cljs.core.nth.call(null,vec__18908_18937,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_18939);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__18940 = cljs.core.next.call(null,seq__18901_18931__$1);
var G__18941 = null;
var G__18942 = (0);
var G__18943 = (0);
seq__18901_18919 = G__18940;
chunk__18902_18920 = G__18941;
count__18903_18921 = G__18942;
i__18904_18922 = G__18943;
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

var seq__18911_18944 = cljs.core.seq.call(null,params);
var chunk__18912_18945 = null;
var count__18913_18946 = (0);
var i__18914_18947 = (0);
while(true){
if((i__18914_18947 < count__18913_18946)){
var param_18948 = cljs.core._nth.call(null,chunk__18912_18945,i__18914_18947);
cljs.compiler.emit.call(null,param_18948);

if(cljs.core._EQ_.call(null,param_18948,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__18949 = seq__18911_18944;
var G__18950 = chunk__18912_18945;
var G__18951 = count__18913_18946;
var G__18952 = (i__18914_18947 + (1));
seq__18911_18944 = G__18949;
chunk__18912_18945 = G__18950;
count__18913_18946 = G__18951;
i__18914_18947 = G__18952;
continue;
} else {
var temp__5735__auto___18953 = cljs.core.seq.call(null,seq__18911_18944);
if(temp__5735__auto___18953){
var seq__18911_18954__$1 = temp__5735__auto___18953;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18911_18954__$1)){
var c__4461__auto___18955 = cljs.core.chunk_first.call(null,seq__18911_18954__$1);
var G__18956 = cljs.core.chunk_rest.call(null,seq__18911_18954__$1);
var G__18957 = c__4461__auto___18955;
var G__18958 = cljs.core.count.call(null,c__4461__auto___18955);
var G__18959 = (0);
seq__18911_18944 = G__18956;
chunk__18912_18945 = G__18957;
count__18913_18946 = G__18958;
i__18914_18947 = G__18959;
continue;
} else {
var param_18960 = cljs.core.first.call(null,seq__18911_18954__$1);
cljs.compiler.emit.call(null,param_18960);

if(cljs.core._EQ_.call(null,param_18960,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__18961 = cljs.core.next.call(null,seq__18911_18954__$1);
var G__18962 = null;
var G__18963 = (0);
var G__18964 = (0);
seq__18911_18944 = G__18961;
chunk__18912_18945 = G__18962;
count__18913_18946 = G__18963;
i__18914_18947 = G__18964;
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

var seq__18915_18965 = cljs.core.seq.call(null,params);
var chunk__18916_18966 = null;
var count__18917_18967 = (0);
var i__18918_18968 = (0);
while(true){
if((i__18918_18968 < count__18917_18967)){
var param_18969 = cljs.core._nth.call(null,chunk__18916_18966,i__18918_18968);
cljs.compiler.emit.call(null,param_18969);

if(cljs.core._EQ_.call(null,param_18969,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__18970 = seq__18915_18965;
var G__18971 = chunk__18916_18966;
var G__18972 = count__18917_18967;
var G__18973 = (i__18918_18968 + (1));
seq__18915_18965 = G__18970;
chunk__18916_18966 = G__18971;
count__18917_18967 = G__18972;
i__18918_18968 = G__18973;
continue;
} else {
var temp__5735__auto___18974 = cljs.core.seq.call(null,seq__18915_18965);
if(temp__5735__auto___18974){
var seq__18915_18975__$1 = temp__5735__auto___18974;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18915_18975__$1)){
var c__4461__auto___18976 = cljs.core.chunk_first.call(null,seq__18915_18975__$1);
var G__18977 = cljs.core.chunk_rest.call(null,seq__18915_18975__$1);
var G__18978 = c__4461__auto___18976;
var G__18979 = cljs.core.count.call(null,c__4461__auto___18976);
var G__18980 = (0);
seq__18915_18965 = G__18977;
chunk__18916_18966 = G__18978;
count__18917_18967 = G__18979;
i__18918_18968 = G__18980;
continue;
} else {
var param_18981 = cljs.core.first.call(null,seq__18915_18975__$1);
cljs.compiler.emit.call(null,param_18981);

if(cljs.core._EQ_.call(null,param_18981,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__18982 = cljs.core.next.call(null,seq__18915_18975__$1);
var G__18983 = null;
var G__18984 = (0);
var G__18985 = (0);
seq__18915_18965 = G__18982;
chunk__18916_18966 = G__18983;
count__18917_18967 = G__18984;
i__18918_18968 = G__18985;
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
var seq__18986 = cljs.core.seq.call(null,params);
var chunk__18987 = null;
var count__18988 = (0);
var i__18989 = (0);
while(true){
if((i__18989 < count__18988)){
var param = cljs.core._nth.call(null,chunk__18987,i__18989);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__18990 = seq__18986;
var G__18991 = chunk__18987;
var G__18992 = count__18988;
var G__18993 = (i__18989 + (1));
seq__18986 = G__18990;
chunk__18987 = G__18991;
count__18988 = G__18992;
i__18989 = G__18993;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__18986);
if(temp__5735__auto__){
var seq__18986__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18986__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__18986__$1);
var G__18994 = cljs.core.chunk_rest.call(null,seq__18986__$1);
var G__18995 = c__4461__auto__;
var G__18996 = cljs.core.count.call(null,c__4461__auto__);
var G__18997 = (0);
seq__18986 = G__18994;
chunk__18987 = G__18995;
count__18988 = G__18996;
i__18989 = G__18997;
continue;
} else {
var param = cljs.core.first.call(null,seq__18986__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__18998 = cljs.core.next.call(null,seq__18986__$1);
var G__18999 = null;
var G__19000 = (0);
var G__19001 = (0);
seq__18986 = G__18998;
chunk__18987 = G__18999;
count__18988 = G__19000;
i__18989 = G__19001;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__19002){
var map__19003 = p__19002;
var map__19003__$1 = (((((!((map__19003 == null))))?(((((map__19003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19003):map__19003);
var expr = cljs.core.get.call(null,map__19003__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__19003__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__19003__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__19003__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__19003__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__19003__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__18473__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18473__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18473__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__19005){
var map__19006 = p__19005;
var map__19006__$1 = (((((!((map__19006 == null))))?(((((map__19006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19006):map__19006);
var f = map__19006__$1;
var expr = cljs.core.get.call(null,map__19006__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__19006__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__19006__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__19006__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__19006__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__19006__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__19006__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__19006__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__18473__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18473__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_19016__$1 = (function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_19017 = cljs.compiler.munge.call(null,name_19016__$1);
var delegate_name_19018 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_19017),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_19018," = function (");

var seq__19008_19019 = cljs.core.seq.call(null,params);
var chunk__19009_19020 = null;
var count__19010_19021 = (0);
var i__19011_19022 = (0);
while(true){
if((i__19011_19022 < count__19010_19021)){
var param_19023 = cljs.core._nth.call(null,chunk__19009_19020,i__19011_19022);
cljs.compiler.emit.call(null,param_19023);

if(cljs.core._EQ_.call(null,param_19023,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__19024 = seq__19008_19019;
var G__19025 = chunk__19009_19020;
var G__19026 = count__19010_19021;
var G__19027 = (i__19011_19022 + (1));
seq__19008_19019 = G__19024;
chunk__19009_19020 = G__19025;
count__19010_19021 = G__19026;
i__19011_19022 = G__19027;
continue;
} else {
var temp__5735__auto___19028 = cljs.core.seq.call(null,seq__19008_19019);
if(temp__5735__auto___19028){
var seq__19008_19029__$1 = temp__5735__auto___19028;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19008_19029__$1)){
var c__4461__auto___19030 = cljs.core.chunk_first.call(null,seq__19008_19029__$1);
var G__19031 = cljs.core.chunk_rest.call(null,seq__19008_19029__$1);
var G__19032 = c__4461__auto___19030;
var G__19033 = cljs.core.count.call(null,c__4461__auto___19030);
var G__19034 = (0);
seq__19008_19019 = G__19031;
chunk__19009_19020 = G__19032;
count__19010_19021 = G__19033;
i__19011_19022 = G__19034;
continue;
} else {
var param_19035 = cljs.core.first.call(null,seq__19008_19029__$1);
cljs.compiler.emit.call(null,param_19035);

if(cljs.core._EQ_.call(null,param_19035,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__19036 = cljs.core.next.call(null,seq__19008_19029__$1);
var G__19037 = null;
var G__19038 = (0);
var G__19039 = (0);
seq__19008_19019 = G__19036;
chunk__19009_19020 = G__19037;
count__19010_19021 = G__19038;
i__19011_19022 = G__19039;
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

cljs.compiler.emitln.call(null,"var ",mname_19017," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_19040 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_19040,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_19018,".call(this,");

var seq__19012_19041 = cljs.core.seq.call(null,params);
var chunk__19013_19042 = null;
var count__19014_19043 = (0);
var i__19015_19044 = (0);
while(true){
if((i__19015_19044 < count__19014_19043)){
var param_19045 = cljs.core._nth.call(null,chunk__19013_19042,i__19015_19044);
cljs.compiler.emit.call(null,param_19045);

if(cljs.core._EQ_.call(null,param_19045,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__19046 = seq__19012_19041;
var G__19047 = chunk__19013_19042;
var G__19048 = count__19014_19043;
var G__19049 = (i__19015_19044 + (1));
seq__19012_19041 = G__19046;
chunk__19013_19042 = G__19047;
count__19014_19043 = G__19048;
i__19015_19044 = G__19049;
continue;
} else {
var temp__5735__auto___19050 = cljs.core.seq.call(null,seq__19012_19041);
if(temp__5735__auto___19050){
var seq__19012_19051__$1 = temp__5735__auto___19050;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19012_19051__$1)){
var c__4461__auto___19052 = cljs.core.chunk_first.call(null,seq__19012_19051__$1);
var G__19053 = cljs.core.chunk_rest.call(null,seq__19012_19051__$1);
var G__19054 = c__4461__auto___19052;
var G__19055 = cljs.core.count.call(null,c__4461__auto___19052);
var G__19056 = (0);
seq__19012_19041 = G__19053;
chunk__19013_19042 = G__19054;
count__19014_19043 = G__19055;
i__19015_19044 = G__19056;
continue;
} else {
var param_19057 = cljs.core.first.call(null,seq__19012_19051__$1);
cljs.compiler.emit.call(null,param_19057);

if(cljs.core._EQ_.call(null,param_19057,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__19058 = cljs.core.next.call(null,seq__19012_19051__$1);
var G__19059 = null;
var G__19060 = (0);
var G__19061 = (0);
seq__19012_19041 = G__19058;
chunk__19013_19042 = G__19059;
count__19014_19043 = G__19060;
i__19015_19044 = G__19061;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_19017,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_19017,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_19016__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_19017,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_19018,";");

cljs.compiler.emitln.call(null,"return ",mname_19017,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18473__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__19065){
var map__19066 = p__19065;
var map__19066__$1 = (((((!((map__19066 == null))))?(((((map__19066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19066):map__19066);
var variadic = cljs.core.get.call(null,map__19066__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__19066__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__19066__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__19066__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__19066__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__19066__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__19066__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__19066,map__19066__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__19062_SHARP_){
var and__4036__auto__ = p1__19062_SHARP_;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__19062_SHARP_));
} else {
return and__4036__auto__;
}
});})(map__19066,map__19066__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,recur_frames)),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets))));
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
var name_19101__$1 = (function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_19102 = cljs.compiler.munge.call(null,name_19101__$1);
var maxparams_19103 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_19104 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_19101__$1,mname_19102,maxparams_19103,loop_locals,map__19066,map__19066__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_19102),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_19101__$1,mname_19102,maxparams_19103,loop_locals,map__19066,map__19066__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_19105 = cljs.core.sort_by.call(null,((function (name_19101__$1,mname_19102,maxparams_19103,mmap_19104,loop_locals,map__19066,map__19066__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__19063_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__19063_SHARP_)));
});})(name_19101__$1,mname_19102,maxparams_19103,mmap_19104,loop_locals,map__19066,map__19066__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_19104));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_19102," = null;");

var seq__19068_19106 = cljs.core.seq.call(null,ms_19105);
var chunk__19069_19107 = null;
var count__19070_19108 = (0);
var i__19071_19109 = (0);
while(true){
if((i__19071_19109 < count__19070_19108)){
var vec__19072_19110 = cljs.core._nth.call(null,chunk__19069_19107,i__19071_19109);
var n_19111 = cljs.core.nth.call(null,vec__19072_19110,(0),null);
var meth_19112 = cljs.core.nth.call(null,vec__19072_19110,(1),null);
cljs.compiler.emits.call(null,"var ",n_19111," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_19112))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_19112);
} else {
cljs.compiler.emit_fn_method.call(null,meth_19112);
}

cljs.compiler.emitln.call(null,";");


var G__19113 = seq__19068_19106;
var G__19114 = chunk__19069_19107;
var G__19115 = count__19070_19108;
var G__19116 = (i__19071_19109 + (1));
seq__19068_19106 = G__19113;
chunk__19069_19107 = G__19114;
count__19070_19108 = G__19115;
i__19071_19109 = G__19116;
continue;
} else {
var temp__5735__auto___19117 = cljs.core.seq.call(null,seq__19068_19106);
if(temp__5735__auto___19117){
var seq__19068_19118__$1 = temp__5735__auto___19117;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19068_19118__$1)){
var c__4461__auto___19119 = cljs.core.chunk_first.call(null,seq__19068_19118__$1);
var G__19120 = cljs.core.chunk_rest.call(null,seq__19068_19118__$1);
var G__19121 = c__4461__auto___19119;
var G__19122 = cljs.core.count.call(null,c__4461__auto___19119);
var G__19123 = (0);
seq__19068_19106 = G__19120;
chunk__19069_19107 = G__19121;
count__19070_19108 = G__19122;
i__19071_19109 = G__19123;
continue;
} else {
var vec__19075_19124 = cljs.core.first.call(null,seq__19068_19118__$1);
var n_19125 = cljs.core.nth.call(null,vec__19075_19124,(0),null);
var meth_19126 = cljs.core.nth.call(null,vec__19075_19124,(1),null);
cljs.compiler.emits.call(null,"var ",n_19125," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_19126))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_19126);
} else {
cljs.compiler.emit_fn_method.call(null,meth_19126);
}

cljs.compiler.emitln.call(null,";");


var G__19127 = cljs.core.next.call(null,seq__19068_19118__$1);
var G__19128 = null;
var G__19129 = (0);
var G__19130 = (0);
seq__19068_19106 = G__19127;
chunk__19069_19107 = G__19128;
count__19070_19108 = G__19129;
i__19071_19109 = G__19130;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_19102," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_19103),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_19103)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_19103));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__19078_19131 = cljs.core.seq.call(null,ms_19105);
var chunk__19079_19132 = null;
var count__19080_19133 = (0);
var i__19081_19134 = (0);
while(true){
if((i__19081_19134 < count__19080_19133)){
var vec__19082_19135 = cljs.core._nth.call(null,chunk__19079_19132,i__19081_19134);
var n_19136 = cljs.core.nth.call(null,vec__19082_19135,(0),null);
var meth_19137 = cljs.core.nth.call(null,vec__19082_19135,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_19137))){
cljs.compiler.emitln.call(null,"default:");

var restarg_19138 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_19138," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_19139 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_19138," = new cljs.core.IndexedSeq(",a_19139,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_19136,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_19103)),(((cljs.core.count.call(null,maxparams_19103) > (1)))?", ":null),restarg_19138,");");
} else {
var pcnt_19140 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_19137));
cljs.compiler.emitln.call(null,"case ",pcnt_19140,":");

cljs.compiler.emitln.call(null,"return ",n_19136,".call(this",(((pcnt_19140 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_19140,maxparams_19103)),null,(1),null)),(2),null))),");");
}


var G__19141 = seq__19078_19131;
var G__19142 = chunk__19079_19132;
var G__19143 = count__19080_19133;
var G__19144 = (i__19081_19134 + (1));
seq__19078_19131 = G__19141;
chunk__19079_19132 = G__19142;
count__19080_19133 = G__19143;
i__19081_19134 = G__19144;
continue;
} else {
var temp__5735__auto___19145 = cljs.core.seq.call(null,seq__19078_19131);
if(temp__5735__auto___19145){
var seq__19078_19146__$1 = temp__5735__auto___19145;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19078_19146__$1)){
var c__4461__auto___19147 = cljs.core.chunk_first.call(null,seq__19078_19146__$1);
var G__19148 = cljs.core.chunk_rest.call(null,seq__19078_19146__$1);
var G__19149 = c__4461__auto___19147;
var G__19150 = cljs.core.count.call(null,c__4461__auto___19147);
var G__19151 = (0);
seq__19078_19131 = G__19148;
chunk__19079_19132 = G__19149;
count__19080_19133 = G__19150;
i__19081_19134 = G__19151;
continue;
} else {
var vec__19085_19152 = cljs.core.first.call(null,seq__19078_19146__$1);
var n_19153 = cljs.core.nth.call(null,vec__19085_19152,(0),null);
var meth_19154 = cljs.core.nth.call(null,vec__19085_19152,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_19154))){
cljs.compiler.emitln.call(null,"default:");

var restarg_19155 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_19155," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_19156 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_19155," = new cljs.core.IndexedSeq(",a_19156,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_19153,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_19103)),(((cljs.core.count.call(null,maxparams_19103) > (1)))?", ":null),restarg_19155,");");
} else {
var pcnt_19157 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_19154));
cljs.compiler.emitln.call(null,"case ",pcnt_19157,":");

cljs.compiler.emitln.call(null,"return ",n_19153,".call(this",(((pcnt_19157 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_19157,maxparams_19103)),null,(1),null)),(2),null))),");");
}


var G__19158 = cljs.core.next.call(null,seq__19078_19146__$1);
var G__19159 = null;
var G__19160 = (0);
var G__19161 = (0);
seq__19078_19131 = G__19158;
chunk__19079_19132 = G__19159;
count__19080_19133 = G__19160;
i__19081_19134 = G__19161;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_19162 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_19105)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_19162,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_19102,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_19102,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_19101__$1,mname_19102,maxparams_19103,mmap_19104,ms_19105,loop_locals,map__19066,map__19066__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__19064_SHARP_){
var vec__19088 = p1__19064_SHARP_;
var n = cljs.core.nth.call(null,vec__19088,(0),null);
var m = cljs.core.nth.call(null,vec__19088,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_19101__$1,mname_19102,maxparams_19103,mmap_19104,ms_19105,loop_locals,map__19066,map__19066__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_19105),".cljs$lang$applyTo;");
} else {
}

var seq__19091_19163 = cljs.core.seq.call(null,ms_19105);
var chunk__19092_19164 = null;
var count__19093_19165 = (0);
var i__19094_19166 = (0);
while(true){
if((i__19094_19166 < count__19093_19165)){
var vec__19095_19167 = cljs.core._nth.call(null,chunk__19092_19164,i__19094_19166);
var n_19168 = cljs.core.nth.call(null,vec__19095_19167,(0),null);
var meth_19169 = cljs.core.nth.call(null,vec__19095_19167,(1),null);
var c_19170 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_19169));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_19169))){
cljs.compiler.emitln.call(null,mname_19102,".cljs$core$IFn$_invoke$arity$variadic = ",n_19168,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_19102,".cljs$core$IFn$_invoke$arity$",c_19170," = ",n_19168,";");
}


var G__19171 = seq__19091_19163;
var G__19172 = chunk__19092_19164;
var G__19173 = count__19093_19165;
var G__19174 = (i__19094_19166 + (1));
seq__19091_19163 = G__19171;
chunk__19092_19164 = G__19172;
count__19093_19165 = G__19173;
i__19094_19166 = G__19174;
continue;
} else {
var temp__5735__auto___19175 = cljs.core.seq.call(null,seq__19091_19163);
if(temp__5735__auto___19175){
var seq__19091_19176__$1 = temp__5735__auto___19175;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19091_19176__$1)){
var c__4461__auto___19177 = cljs.core.chunk_first.call(null,seq__19091_19176__$1);
var G__19178 = cljs.core.chunk_rest.call(null,seq__19091_19176__$1);
var G__19179 = c__4461__auto___19177;
var G__19180 = cljs.core.count.call(null,c__4461__auto___19177);
var G__19181 = (0);
seq__19091_19163 = G__19178;
chunk__19092_19164 = G__19179;
count__19093_19165 = G__19180;
i__19094_19166 = G__19181;
continue;
} else {
var vec__19098_19182 = cljs.core.first.call(null,seq__19091_19176__$1);
var n_19183 = cljs.core.nth.call(null,vec__19098_19182,(0),null);
var meth_19184 = cljs.core.nth.call(null,vec__19098_19182,(1),null);
var c_19185 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_19184));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_19184))){
cljs.compiler.emitln.call(null,mname_19102,".cljs$core$IFn$_invoke$arity$variadic = ",n_19183,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_19102,".cljs$core$IFn$_invoke$arity$",c_19185," = ",n_19183,";");
}


var G__19186 = cljs.core.next.call(null,seq__19091_19176__$1);
var G__19187 = null;
var G__19188 = (0);
var G__19189 = (0);
seq__19091_19163 = G__19186;
chunk__19092_19164 = G__19187;
count__19093_19165 = G__19188;
i__19094_19166 = G__19189;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_19102,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__19190){
var map__19191 = p__19190;
var map__19191__$1 = (((((!((map__19191 == null))))?(((((map__19191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19191):map__19191);
var statements = cljs.core.get.call(null,map__19191__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__19191__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__19191__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__19193_19197 = cljs.core.seq.call(null,statements);
var chunk__19194_19198 = null;
var count__19195_19199 = (0);
var i__19196_19200 = (0);
while(true){
if((i__19196_19200 < count__19195_19199)){
var s_19201 = cljs.core._nth.call(null,chunk__19194_19198,i__19196_19200);
cljs.compiler.emitln.call(null,s_19201);


var G__19202 = seq__19193_19197;
var G__19203 = chunk__19194_19198;
var G__19204 = count__19195_19199;
var G__19205 = (i__19196_19200 + (1));
seq__19193_19197 = G__19202;
chunk__19194_19198 = G__19203;
count__19195_19199 = G__19204;
i__19196_19200 = G__19205;
continue;
} else {
var temp__5735__auto___19206 = cljs.core.seq.call(null,seq__19193_19197);
if(temp__5735__auto___19206){
var seq__19193_19207__$1 = temp__5735__auto___19206;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19193_19207__$1)){
var c__4461__auto___19208 = cljs.core.chunk_first.call(null,seq__19193_19207__$1);
var G__19209 = cljs.core.chunk_rest.call(null,seq__19193_19207__$1);
var G__19210 = c__4461__auto___19208;
var G__19211 = cljs.core.count.call(null,c__4461__auto___19208);
var G__19212 = (0);
seq__19193_19197 = G__19209;
chunk__19194_19198 = G__19210;
count__19195_19199 = G__19211;
i__19196_19200 = G__19212;
continue;
} else {
var s_19213 = cljs.core.first.call(null,seq__19193_19207__$1);
cljs.compiler.emitln.call(null,s_19213);


var G__19214 = cljs.core.next.call(null,seq__19193_19207__$1);
var G__19215 = null;
var G__19216 = (0);
var G__19217 = (0);
seq__19193_19197 = G__19214;
chunk__19194_19198 = G__19215;
count__19195_19199 = G__19216;
i__19196_19200 = G__19217;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__19218){
var map__19219 = p__19218;
var map__19219__$1 = (((((!((map__19219 == null))))?(((((map__19219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19219):map__19219);
var try$ = cljs.core.get.call(null,map__19219__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__19219__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__19219__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__19219__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__19219__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__19221,is_loop){
var map__19222 = p__19221;
var map__19222__$1 = (((((!((map__19222 == null))))?(((((map__19222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19222):map__19222);
var expr = cljs.core.get.call(null,map__19222__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__19222__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__19222__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__19224_19234 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__19225_19235 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR__orig_val__19224_19234,context,map__19222,map__19222__$1,expr,bindings,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__19224_19234,context,map__19222,map__19222__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__19225_19235;

try{var seq__19226_19236 = cljs.core.seq.call(null,bindings);
var chunk__19227_19237 = null;
var count__19228_19238 = (0);
var i__19229_19239 = (0);
while(true){
if((i__19229_19239 < count__19228_19238)){
var map__19230_19240 = cljs.core._nth.call(null,chunk__19227_19237,i__19229_19239);
var map__19230_19241__$1 = (((((!((map__19230_19240 == null))))?(((((map__19230_19240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19230_19240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19230_19240):map__19230_19240);
var binding_19242 = map__19230_19241__$1;
var init_19243 = cljs.core.get.call(null,map__19230_19241__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_19242);

cljs.compiler.emitln.call(null," = ",init_19243,";");


var G__19244 = seq__19226_19236;
var G__19245 = chunk__19227_19237;
var G__19246 = count__19228_19238;
var G__19247 = (i__19229_19239 + (1));
seq__19226_19236 = G__19244;
chunk__19227_19237 = G__19245;
count__19228_19238 = G__19246;
i__19229_19239 = G__19247;
continue;
} else {
var temp__5735__auto___19248 = cljs.core.seq.call(null,seq__19226_19236);
if(temp__5735__auto___19248){
var seq__19226_19249__$1 = temp__5735__auto___19248;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19226_19249__$1)){
var c__4461__auto___19250 = cljs.core.chunk_first.call(null,seq__19226_19249__$1);
var G__19251 = cljs.core.chunk_rest.call(null,seq__19226_19249__$1);
var G__19252 = c__4461__auto___19250;
var G__19253 = cljs.core.count.call(null,c__4461__auto___19250);
var G__19254 = (0);
seq__19226_19236 = G__19251;
chunk__19227_19237 = G__19252;
count__19228_19238 = G__19253;
i__19229_19239 = G__19254;
continue;
} else {
var map__19232_19255 = cljs.core.first.call(null,seq__19226_19249__$1);
var map__19232_19256__$1 = (((((!((map__19232_19255 == null))))?(((((map__19232_19255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19232_19255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19232_19255):map__19232_19255);
var binding_19257 = map__19232_19256__$1;
var init_19258 = cljs.core.get.call(null,map__19232_19256__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_19257);

cljs.compiler.emitln.call(null," = ",init_19258,";");


var G__19259 = cljs.core.next.call(null,seq__19226_19249__$1);
var G__19260 = null;
var G__19261 = (0);
var G__19262 = (0);
seq__19226_19236 = G__19259;
chunk__19227_19237 = G__19260;
count__19228_19238 = G__19261;
i__19229_19239 = G__19262;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__19224_19234;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__19263){
var map__19264 = p__19263;
var map__19264__$1 = (((((!((map__19264 == null))))?(((((map__19264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19264):map__19264);
var frame = cljs.core.get.call(null,map__19264__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__19264__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__19264__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4518__auto___19266 = cljs.core.count.call(null,exprs);
var i_19267 = (0);
while(true){
if((i_19267 < n__4518__auto___19266)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_19267)," = ",exprs.call(null,i_19267),";");

var G__19268 = (i_19267 + (1));
i_19267 = G__19268;
continue;
} else {
}
break;
}

var n__4518__auto___19269 = cljs.core.count.call(null,exprs);
var i_19270 = (0);
while(true){
if((i_19270 < n__4518__auto___19269)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_19270))," = ",temps.call(null,i_19270),";");

var G__19271 = (i_19270 + (1));
i_19270 = G__19271;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__19272){
var map__19273 = p__19272;
var map__19273__$1 = (((((!((map__19273 == null))))?(((((map__19273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19273):map__19273);
var expr = cljs.core.get.call(null,map__19273__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__19273__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__19273__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__19275_19283 = cljs.core.seq.call(null,bindings);
var chunk__19276_19284 = null;
var count__19277_19285 = (0);
var i__19278_19286 = (0);
while(true){
if((i__19278_19286 < count__19277_19285)){
var map__19279_19287 = cljs.core._nth.call(null,chunk__19276_19284,i__19278_19286);
var map__19279_19288__$1 = (((((!((map__19279_19287 == null))))?(((((map__19279_19287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19279_19287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19279_19287):map__19279_19287);
var binding_19289 = map__19279_19288__$1;
var init_19290 = cljs.core.get.call(null,map__19279_19288__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_19289)," = ",init_19290,";");


var G__19291 = seq__19275_19283;
var G__19292 = chunk__19276_19284;
var G__19293 = count__19277_19285;
var G__19294 = (i__19278_19286 + (1));
seq__19275_19283 = G__19291;
chunk__19276_19284 = G__19292;
count__19277_19285 = G__19293;
i__19278_19286 = G__19294;
continue;
} else {
var temp__5735__auto___19295 = cljs.core.seq.call(null,seq__19275_19283);
if(temp__5735__auto___19295){
var seq__19275_19296__$1 = temp__5735__auto___19295;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19275_19296__$1)){
var c__4461__auto___19297 = cljs.core.chunk_first.call(null,seq__19275_19296__$1);
var G__19298 = cljs.core.chunk_rest.call(null,seq__19275_19296__$1);
var G__19299 = c__4461__auto___19297;
var G__19300 = cljs.core.count.call(null,c__4461__auto___19297);
var G__19301 = (0);
seq__19275_19283 = G__19298;
chunk__19276_19284 = G__19299;
count__19277_19285 = G__19300;
i__19278_19286 = G__19301;
continue;
} else {
var map__19281_19302 = cljs.core.first.call(null,seq__19275_19296__$1);
var map__19281_19303__$1 = (((((!((map__19281_19302 == null))))?(((((map__19281_19302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19281_19302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19281_19302):map__19281_19302);
var binding_19304 = map__19281_19303__$1;
var init_19305 = cljs.core.get.call(null,map__19281_19303__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_19304)," = ",init_19305,";");


var G__19306 = cljs.core.next.call(null,seq__19275_19296__$1);
var G__19307 = null;
var G__19308 = (0);
var G__19309 = (0);
seq__19275_19283 = G__19306;
chunk__19276_19284 = G__19307;
count__19277_19285 = G__19308;
i__19278_19286 = G__19309;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__19312){
var map__19313 = p__19312;
var map__19313__$1 = (((((!((map__19313 == null))))?(((((map__19313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19313):map__19313);
var expr = map__19313__$1;
var f = cljs.core.get.call(null,map__19313__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__19313__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__19313__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__4036__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__4036__auto__){
var and__4036__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__4036__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__4036__auto__ = protocol;
if(cljs.core.truth_(and__4036__auto__)){
var and__4036__auto____$1 = tag;
if(cljs.core.truth_(and__4036__auto____$1)){
var or__4047__auto__ = (function (){var and__4036__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__4036__auto____$2){
var and__4036__auto____$3 = protocol;
if(cljs.core.truth_(and__4036__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__4036__auto____$3;
}
} else {
return and__4036__auto____$2;
}
})();
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var and__4036__auto____$2 = (function (){var or__4047__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__4047__auto____$1){
return or__4047__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__4036__auto____$2)){
var or__4047__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__4047__auto____$1){
return or__4047__auto____$1;
} else {
var and__4036__auto____$3 = (!(cljs.core.set_QMARK_.call(null,tag)));
if(and__4036__auto____$3){
var and__4036__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null).call(null,tag));
if(and__4036__auto____$4){
var temp__5735__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,tag));
if(cljs.core.truth_(temp__5735__auto__)){
var ps = temp__5735__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__4036__auto____$4;
}
} else {
return and__4036__auto____$3;
}
}
} else {
return and__4036__auto____$2;
}
}
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})();
var opt_not_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = ((cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null))));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__4047__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__4047__auto__){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = (function (){var temp__5735__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(temp__5735__auto__)){
var ns_str = temp__5735__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
return (!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),ns)));
}
}
})():null);
var keyword_QMARK_ = (function (){var or__4047__auto__ = cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),cljs.analyzer.infer_tag.call(null,env,f));
if(or__4047__auto__){
return or__4047__auto__;
} else {
var f__$1 = cljs.analyzer.unwrap_quote.call(null,f);
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"const","const",1709929842))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f__$1) instanceof cljs.core.Keyword)));
}
})();
var vec__19315 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__4036__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__4036__auto__)){
return (arity > mfa);
} else {
return and__4036__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__19313,map__19313__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__19313,map__19313__$1,expr,f,args,env){
return (function (p1__19310_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__19310_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__19313,map__19313__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__19313,map__19313__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__19313,map__19313__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__19313,map__19313__$1,expr,f,args,env){
return (function (p1__19311_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__19311_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__19313,map__19313__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__19313,map__19313__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__19315,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__19315,(1),null);
var env__18473__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18473__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_19318 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_19318,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_19319 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_19319,args)),(((mfa_19319 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_19319,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = js_QMARK_;
if(or__4047__auto____$1){
return or__4047__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__4036__auto__){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1));
} else {
return and__4036__auto__;
}
})())){
var fprop_19320 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_19320," ? ",f__$1,fprop_19320,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_19320," ? ",f__$1,fprop_19320,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18473__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__19321){
var map__19322 = p__19321;
var map__19322__$1 = (((((!((map__19322 == null))))?(((((map__19322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19322):map__19322);
var ctor = cljs.core.get.call(null,map__19322__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__19322__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__19322__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__18473__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18473__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18473__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__19324){
var map__19325 = p__19324;
var map__19325__$1 = (((((!((map__19325 == null))))?(((((map__19325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19325):map__19325);
var target = cljs.core.get.call(null,map__19325__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__19325__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__19325__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__18473__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18473__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18473__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
return cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib)," = goog.global",cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (prop){
return ["[\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"\"]"].join('');
}),clojure.string.split.call(null,cljs.core.name.call(null,(function (){var or__4047__auto__ = cljs.core.get.call(null,global_exports,cljs.core.symbol.call(null,lib));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.get.call(null,global_exports,cljs.core.name.call(null,lib));
}
})()),/\./))),";");
});
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__19327 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__19327__$1 = (((((!((map__19327 == null))))?(((((map__19327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19327):map__19327);
var options = cljs.core.get.call(null,map__19327__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__19327__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__19328 = options;
var map__19328__$1 = (((((!((map__19328 == null))))?(((((map__19328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19328):map__19328);
var target = cljs.core.get.call(null,map__19328__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__19328__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__19329 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__19334 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__19334__$1 = (((((!((map__19334 == null))))?(((((map__19334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19334):map__19334);
var node_libs = cljs.core.get.call(null,map__19334__$1,true);
var libs_to_load = cljs.core.get.call(null,map__19334__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__19329,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__19329,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__19336_19352 = cljs.core.seq.call(null,libs_to_load);
var chunk__19337_19353 = null;
var count__19338_19354 = (0);
var i__19339_19355 = (0);
while(true){
if((i__19339_19355 < count__19338_19354)){
var lib_19356 = cljs.core._nth.call(null,chunk__19337_19353,i__19339_19355);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_19356)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_19356),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_19356),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_19356),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_19356),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_19356,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_19356),"');");
}

}
}
}


var G__19357 = seq__19336_19352;
var G__19358 = chunk__19337_19353;
var G__19359 = count__19338_19354;
var G__19360 = (i__19339_19355 + (1));
seq__19336_19352 = G__19357;
chunk__19337_19353 = G__19358;
count__19338_19354 = G__19359;
i__19339_19355 = G__19360;
continue;
} else {
var temp__5735__auto___19361 = cljs.core.seq.call(null,seq__19336_19352);
if(temp__5735__auto___19361){
var seq__19336_19362__$1 = temp__5735__auto___19361;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19336_19362__$1)){
var c__4461__auto___19363 = cljs.core.chunk_first.call(null,seq__19336_19362__$1);
var G__19364 = cljs.core.chunk_rest.call(null,seq__19336_19362__$1);
var G__19365 = c__4461__auto___19363;
var G__19366 = cljs.core.count.call(null,c__4461__auto___19363);
var G__19367 = (0);
seq__19336_19352 = G__19364;
chunk__19337_19353 = G__19365;
count__19338_19354 = G__19366;
i__19339_19355 = G__19367;
continue;
} else {
var lib_19368 = cljs.core.first.call(null,seq__19336_19362__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_19368)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_19368),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_19368),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_19368),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_19368),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_19368,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_19368),"');");
}

}
}
}


var G__19369 = cljs.core.next.call(null,seq__19336_19362__$1);
var G__19370 = null;
var G__19371 = (0);
var G__19372 = (0);
seq__19336_19352 = G__19369;
chunk__19337_19353 = G__19370;
count__19338_19354 = G__19371;
i__19339_19355 = G__19372;
continue;
}
} else {
}
}
break;
}

var seq__19340_19373 = cljs.core.seq.call(null,node_libs);
var chunk__19341_19374 = null;
var count__19342_19375 = (0);
var i__19343_19376 = (0);
while(true){
if((i__19343_19376 < count__19342_19375)){
var lib_19377 = cljs.core._nth.call(null,chunk__19341_19374,i__19343_19376);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_19377)," = require('",lib_19377,"');");


var G__19378 = seq__19340_19373;
var G__19379 = chunk__19341_19374;
var G__19380 = count__19342_19375;
var G__19381 = (i__19343_19376 + (1));
seq__19340_19373 = G__19378;
chunk__19341_19374 = G__19379;
count__19342_19375 = G__19380;
i__19343_19376 = G__19381;
continue;
} else {
var temp__5735__auto___19382 = cljs.core.seq.call(null,seq__19340_19373);
if(temp__5735__auto___19382){
var seq__19340_19383__$1 = temp__5735__auto___19382;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19340_19383__$1)){
var c__4461__auto___19384 = cljs.core.chunk_first.call(null,seq__19340_19383__$1);
var G__19385 = cljs.core.chunk_rest.call(null,seq__19340_19383__$1);
var G__19386 = c__4461__auto___19384;
var G__19387 = cljs.core.count.call(null,c__4461__auto___19384);
var G__19388 = (0);
seq__19340_19373 = G__19385;
chunk__19341_19374 = G__19386;
count__19342_19375 = G__19387;
i__19343_19376 = G__19388;
continue;
} else {
var lib_19389 = cljs.core.first.call(null,seq__19340_19383__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_19389)," = require('",lib_19389,"');");


var G__19390 = cljs.core.next.call(null,seq__19340_19383__$1);
var G__19391 = null;
var G__19392 = (0);
var G__19393 = (0);
seq__19340_19373 = G__19390;
chunk__19341_19374 = G__19391;
count__19342_19375 = G__19392;
i__19343_19376 = G__19393;
continue;
}
} else {
}
}
break;
}

var seq__19344_19394 = cljs.core.seq.call(null,global_exports_libs);
var chunk__19345_19395 = null;
var count__19346_19396 = (0);
var i__19347_19397 = (0);
while(true){
if((i__19347_19397 < count__19346_19396)){
var lib_19398 = cljs.core._nth.call(null,chunk__19345_19395,i__19347_19397);
var map__19348_19399 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_19398));
var map__19348_19400__$1 = (((((!((map__19348_19399 == null))))?(((((map__19348_19399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19348_19399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19348_19399):map__19348_19399);
var global_exports_19401 = cljs.core.get.call(null,map__19348_19400__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_19401,lib_19398);


var G__19402 = seq__19344_19394;
var G__19403 = chunk__19345_19395;
var G__19404 = count__19346_19396;
var G__19405 = (i__19347_19397 + (1));
seq__19344_19394 = G__19402;
chunk__19345_19395 = G__19403;
count__19346_19396 = G__19404;
i__19347_19397 = G__19405;
continue;
} else {
var temp__5735__auto___19406 = cljs.core.seq.call(null,seq__19344_19394);
if(temp__5735__auto___19406){
var seq__19344_19407__$1 = temp__5735__auto___19406;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19344_19407__$1)){
var c__4461__auto___19408 = cljs.core.chunk_first.call(null,seq__19344_19407__$1);
var G__19409 = cljs.core.chunk_rest.call(null,seq__19344_19407__$1);
var G__19410 = c__4461__auto___19408;
var G__19411 = cljs.core.count.call(null,c__4461__auto___19408);
var G__19412 = (0);
seq__19344_19394 = G__19409;
chunk__19345_19395 = G__19410;
count__19346_19396 = G__19411;
i__19347_19397 = G__19412;
continue;
} else {
var lib_19413 = cljs.core.first.call(null,seq__19344_19407__$1);
var map__19350_19414 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_19413));
var map__19350_19415__$1 = (((((!((map__19350_19414 == null))))?(((((map__19350_19414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19350_19414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19350_19414):map__19350_19414);
var global_exports_19416 = cljs.core.get.call(null,map__19350_19415__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_19416,lib_19413);


var G__19417 = cljs.core.next.call(null,seq__19344_19407__$1);
var G__19418 = null;
var G__19419 = (0);
var G__19420 = (0);
seq__19344_19394 = G__19417;
chunk__19345_19395 = G__19418;
count__19346_19396 = G__19419;
i__19347_19397 = G__19420;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__19421){
var map__19422 = p__19421;
var map__19422__$1 = (((((!((map__19422 == null))))?(((((map__19422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19422):map__19422);
var name = cljs.core.get.call(null,map__19422__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__19422__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__19422__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__19422__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__19422__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__19422__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__19422__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__19424){
var map__19425 = p__19424;
var map__19425__$1 = (((((!((map__19425 == null))))?(((((map__19425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19425):map__19425);
var name = cljs.core.get.call(null,map__19425__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__19425__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__19425__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__19425__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__19425__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__19425__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__19425__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__19427){
var map__19428 = p__19427;
var map__19428__$1 = (((((!((map__19428 == null))))?(((((map__19428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19428):map__19428);
var t = cljs.core.get.call(null,map__19428__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__19428__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__19428__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__19428__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__19428__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__19430_19448 = cljs.core.seq.call(null,protocols);
var chunk__19431_19449 = null;
var count__19432_19450 = (0);
var i__19433_19451 = (0);
while(true){
if((i__19433_19451 < count__19432_19450)){
var protocol_19452 = cljs.core._nth.call(null,chunk__19431_19449,i__19433_19451);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_19452)),"}");


var G__19453 = seq__19430_19448;
var G__19454 = chunk__19431_19449;
var G__19455 = count__19432_19450;
var G__19456 = (i__19433_19451 + (1));
seq__19430_19448 = G__19453;
chunk__19431_19449 = G__19454;
count__19432_19450 = G__19455;
i__19433_19451 = G__19456;
continue;
} else {
var temp__5735__auto___19457 = cljs.core.seq.call(null,seq__19430_19448);
if(temp__5735__auto___19457){
var seq__19430_19458__$1 = temp__5735__auto___19457;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19430_19458__$1)){
var c__4461__auto___19459 = cljs.core.chunk_first.call(null,seq__19430_19458__$1);
var G__19460 = cljs.core.chunk_rest.call(null,seq__19430_19458__$1);
var G__19461 = c__4461__auto___19459;
var G__19462 = cljs.core.count.call(null,c__4461__auto___19459);
var G__19463 = (0);
seq__19430_19448 = G__19460;
chunk__19431_19449 = G__19461;
count__19432_19450 = G__19462;
i__19433_19451 = G__19463;
continue;
} else {
var protocol_19464 = cljs.core.first.call(null,seq__19430_19458__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_19464)),"}");


var G__19465 = cljs.core.next.call(null,seq__19430_19458__$1);
var G__19466 = null;
var G__19467 = (0);
var G__19468 = (0);
seq__19430_19448 = G__19465;
chunk__19431_19449 = G__19466;
count__19432_19450 = G__19467;
i__19433_19451 = G__19468;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__19434_19469 = cljs.core.seq.call(null,fields__$1);
var chunk__19435_19470 = null;
var count__19436_19471 = (0);
var i__19437_19472 = (0);
while(true){
if((i__19437_19472 < count__19436_19471)){
var fld_19473 = cljs.core._nth.call(null,chunk__19435_19470,i__19437_19472);
cljs.compiler.emitln.call(null,"this.",fld_19473," = ",fld_19473,";");


var G__19474 = seq__19434_19469;
var G__19475 = chunk__19435_19470;
var G__19476 = count__19436_19471;
var G__19477 = (i__19437_19472 + (1));
seq__19434_19469 = G__19474;
chunk__19435_19470 = G__19475;
count__19436_19471 = G__19476;
i__19437_19472 = G__19477;
continue;
} else {
var temp__5735__auto___19478 = cljs.core.seq.call(null,seq__19434_19469);
if(temp__5735__auto___19478){
var seq__19434_19479__$1 = temp__5735__auto___19478;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19434_19479__$1)){
var c__4461__auto___19480 = cljs.core.chunk_first.call(null,seq__19434_19479__$1);
var G__19481 = cljs.core.chunk_rest.call(null,seq__19434_19479__$1);
var G__19482 = c__4461__auto___19480;
var G__19483 = cljs.core.count.call(null,c__4461__auto___19480);
var G__19484 = (0);
seq__19434_19469 = G__19481;
chunk__19435_19470 = G__19482;
count__19436_19471 = G__19483;
i__19437_19472 = G__19484;
continue;
} else {
var fld_19485 = cljs.core.first.call(null,seq__19434_19479__$1);
cljs.compiler.emitln.call(null,"this.",fld_19485," = ",fld_19485,";");


var G__19486 = cljs.core.next.call(null,seq__19434_19479__$1);
var G__19487 = null;
var G__19488 = (0);
var G__19489 = (0);
seq__19434_19469 = G__19486;
chunk__19435_19470 = G__19487;
count__19436_19471 = G__19488;
i__19437_19472 = G__19489;
continue;
}
} else {
}
}
break;
}

var seq__19438_19490 = cljs.core.seq.call(null,pmasks);
var chunk__19439_19491 = null;
var count__19440_19492 = (0);
var i__19441_19493 = (0);
while(true){
if((i__19441_19493 < count__19440_19492)){
var vec__19442_19494 = cljs.core._nth.call(null,chunk__19439_19491,i__19441_19493);
var pno_19495 = cljs.core.nth.call(null,vec__19442_19494,(0),null);
var pmask_19496 = cljs.core.nth.call(null,vec__19442_19494,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_19495,"$ = ",pmask_19496,";");


var G__19497 = seq__19438_19490;
var G__19498 = chunk__19439_19491;
var G__19499 = count__19440_19492;
var G__19500 = (i__19441_19493 + (1));
seq__19438_19490 = G__19497;
chunk__19439_19491 = G__19498;
count__19440_19492 = G__19499;
i__19441_19493 = G__19500;
continue;
} else {
var temp__5735__auto___19501 = cljs.core.seq.call(null,seq__19438_19490);
if(temp__5735__auto___19501){
var seq__19438_19502__$1 = temp__5735__auto___19501;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19438_19502__$1)){
var c__4461__auto___19503 = cljs.core.chunk_first.call(null,seq__19438_19502__$1);
var G__19504 = cljs.core.chunk_rest.call(null,seq__19438_19502__$1);
var G__19505 = c__4461__auto___19503;
var G__19506 = cljs.core.count.call(null,c__4461__auto___19503);
var G__19507 = (0);
seq__19438_19490 = G__19504;
chunk__19439_19491 = G__19505;
count__19440_19492 = G__19506;
i__19441_19493 = G__19507;
continue;
} else {
var vec__19445_19508 = cljs.core.first.call(null,seq__19438_19502__$1);
var pno_19509 = cljs.core.nth.call(null,vec__19445_19508,(0),null);
var pmask_19510 = cljs.core.nth.call(null,vec__19445_19508,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_19509,"$ = ",pmask_19510,";");


var G__19511 = cljs.core.next.call(null,seq__19438_19502__$1);
var G__19512 = null;
var G__19513 = (0);
var G__19514 = (0);
seq__19438_19490 = G__19511;
chunk__19439_19491 = G__19512;
count__19440_19492 = G__19513;
i__19441_19493 = G__19514;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__19515){
var map__19516 = p__19515;
var map__19516__$1 = (((((!((map__19516 == null))))?(((((map__19516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19516):map__19516);
var t = cljs.core.get.call(null,map__19516__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__19516__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__19516__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__19516__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__19516__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__19518_19536 = cljs.core.seq.call(null,protocols);
var chunk__19519_19537 = null;
var count__19520_19538 = (0);
var i__19521_19539 = (0);
while(true){
if((i__19521_19539 < count__19520_19538)){
var protocol_19540 = cljs.core._nth.call(null,chunk__19519_19537,i__19521_19539);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_19540)),"}");


var G__19541 = seq__19518_19536;
var G__19542 = chunk__19519_19537;
var G__19543 = count__19520_19538;
var G__19544 = (i__19521_19539 + (1));
seq__19518_19536 = G__19541;
chunk__19519_19537 = G__19542;
count__19520_19538 = G__19543;
i__19521_19539 = G__19544;
continue;
} else {
var temp__5735__auto___19545 = cljs.core.seq.call(null,seq__19518_19536);
if(temp__5735__auto___19545){
var seq__19518_19546__$1 = temp__5735__auto___19545;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19518_19546__$1)){
var c__4461__auto___19547 = cljs.core.chunk_first.call(null,seq__19518_19546__$1);
var G__19548 = cljs.core.chunk_rest.call(null,seq__19518_19546__$1);
var G__19549 = c__4461__auto___19547;
var G__19550 = cljs.core.count.call(null,c__4461__auto___19547);
var G__19551 = (0);
seq__19518_19536 = G__19548;
chunk__19519_19537 = G__19549;
count__19520_19538 = G__19550;
i__19521_19539 = G__19551;
continue;
} else {
var protocol_19552 = cljs.core.first.call(null,seq__19518_19546__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_19552)),"}");


var G__19553 = cljs.core.next.call(null,seq__19518_19546__$1);
var G__19554 = null;
var G__19555 = (0);
var G__19556 = (0);
seq__19518_19536 = G__19553;
chunk__19519_19537 = G__19554;
count__19520_19538 = G__19555;
i__19521_19539 = G__19556;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__19522_19557 = cljs.core.seq.call(null,fields__$1);
var chunk__19523_19558 = null;
var count__19524_19559 = (0);
var i__19525_19560 = (0);
while(true){
if((i__19525_19560 < count__19524_19559)){
var fld_19561 = cljs.core._nth.call(null,chunk__19523_19558,i__19525_19560);
cljs.compiler.emitln.call(null,"this.",fld_19561," = ",fld_19561,";");


var G__19562 = seq__19522_19557;
var G__19563 = chunk__19523_19558;
var G__19564 = count__19524_19559;
var G__19565 = (i__19525_19560 + (1));
seq__19522_19557 = G__19562;
chunk__19523_19558 = G__19563;
count__19524_19559 = G__19564;
i__19525_19560 = G__19565;
continue;
} else {
var temp__5735__auto___19566 = cljs.core.seq.call(null,seq__19522_19557);
if(temp__5735__auto___19566){
var seq__19522_19567__$1 = temp__5735__auto___19566;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19522_19567__$1)){
var c__4461__auto___19568 = cljs.core.chunk_first.call(null,seq__19522_19567__$1);
var G__19569 = cljs.core.chunk_rest.call(null,seq__19522_19567__$1);
var G__19570 = c__4461__auto___19568;
var G__19571 = cljs.core.count.call(null,c__4461__auto___19568);
var G__19572 = (0);
seq__19522_19557 = G__19569;
chunk__19523_19558 = G__19570;
count__19524_19559 = G__19571;
i__19525_19560 = G__19572;
continue;
} else {
var fld_19573 = cljs.core.first.call(null,seq__19522_19567__$1);
cljs.compiler.emitln.call(null,"this.",fld_19573," = ",fld_19573,";");


var G__19574 = cljs.core.next.call(null,seq__19522_19567__$1);
var G__19575 = null;
var G__19576 = (0);
var G__19577 = (0);
seq__19522_19557 = G__19574;
chunk__19523_19558 = G__19575;
count__19524_19559 = G__19576;
i__19525_19560 = G__19577;
continue;
}
} else {
}
}
break;
}

var seq__19526_19578 = cljs.core.seq.call(null,pmasks);
var chunk__19527_19579 = null;
var count__19528_19580 = (0);
var i__19529_19581 = (0);
while(true){
if((i__19529_19581 < count__19528_19580)){
var vec__19530_19582 = cljs.core._nth.call(null,chunk__19527_19579,i__19529_19581);
var pno_19583 = cljs.core.nth.call(null,vec__19530_19582,(0),null);
var pmask_19584 = cljs.core.nth.call(null,vec__19530_19582,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_19583,"$ = ",pmask_19584,";");


var G__19585 = seq__19526_19578;
var G__19586 = chunk__19527_19579;
var G__19587 = count__19528_19580;
var G__19588 = (i__19529_19581 + (1));
seq__19526_19578 = G__19585;
chunk__19527_19579 = G__19586;
count__19528_19580 = G__19587;
i__19529_19581 = G__19588;
continue;
} else {
var temp__5735__auto___19589 = cljs.core.seq.call(null,seq__19526_19578);
if(temp__5735__auto___19589){
var seq__19526_19590__$1 = temp__5735__auto___19589;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19526_19590__$1)){
var c__4461__auto___19591 = cljs.core.chunk_first.call(null,seq__19526_19590__$1);
var G__19592 = cljs.core.chunk_rest.call(null,seq__19526_19590__$1);
var G__19593 = c__4461__auto___19591;
var G__19594 = cljs.core.count.call(null,c__4461__auto___19591);
var G__19595 = (0);
seq__19526_19578 = G__19592;
chunk__19527_19579 = G__19593;
count__19528_19580 = G__19594;
i__19529_19581 = G__19595;
continue;
} else {
var vec__19533_19596 = cljs.core.first.call(null,seq__19526_19590__$1);
var pno_19597 = cljs.core.nth.call(null,vec__19533_19596,(0),null);
var pmask_19598 = cljs.core.nth.call(null,vec__19533_19596,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_19597,"$ = ",pmask_19598,";");


var G__19599 = cljs.core.next.call(null,seq__19526_19590__$1);
var G__19600 = null;
var G__19601 = (0);
var G__19602 = (0);
seq__19526_19578 = G__19599;
chunk__19527_19579 = G__19600;
count__19528_19580 = G__19601;
i__19529_19581 = G__19602;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__19603){
var map__19604 = p__19603;
var map__19604__$1 = (((((!((map__19604 == null))))?(((((map__19604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19604):map__19604);
var target = cljs.core.get.call(null,map__19604__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__19604__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__19604__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__19604__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__19604__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__18473__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18473__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18473__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__19606){
var map__19607 = p__19606;
var map__19607__$1 = (((((!((map__19607 == null))))?(((((map__19607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19607):map__19607);
var op = cljs.core.get.call(null,map__19607__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__19607__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__19607__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__19607__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__19607__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4036__auto__ = code;
if(cljs.core.truth_(and__4036__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4036__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__18473__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18473__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18473__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__19613 = cljs.core.seq.call(null,table);
var chunk__19614 = null;
var count__19615 = (0);
var i__19616 = (0);
while(true){
if((i__19616 < count__19615)){
var vec__19617 = cljs.core._nth.call(null,chunk__19614,i__19616);
var sym = cljs.core.nth.call(null,vec__19617,(0),null);
var value = cljs.core.nth.call(null,vec__19617,(1),null);
var ns_19623 = cljs.core.namespace.call(null,sym);
var name_19624 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__19625 = seq__19613;
var G__19626 = chunk__19614;
var G__19627 = count__19615;
var G__19628 = (i__19616 + (1));
seq__19613 = G__19625;
chunk__19614 = G__19626;
count__19615 = G__19627;
i__19616 = G__19628;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__19613);
if(temp__5735__auto__){
var seq__19613__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19613__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__19613__$1);
var G__19629 = cljs.core.chunk_rest.call(null,seq__19613__$1);
var G__19630 = c__4461__auto__;
var G__19631 = cljs.core.count.call(null,c__4461__auto__);
var G__19632 = (0);
seq__19613 = G__19629;
chunk__19614 = G__19630;
count__19615 = G__19631;
i__19616 = G__19632;
continue;
} else {
var vec__19620 = cljs.core.first.call(null,seq__19613__$1);
var sym = cljs.core.nth.call(null,vec__19620,(0),null);
var value = cljs.core.nth.call(null,vec__19620,(1),null);
var ns_19633 = cljs.core.namespace.call(null,sym);
var name_19634 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__19635 = cljs.core.next.call(null,seq__19613__$1);
var G__19636 = null;
var G__19637 = (0);
var G__19638 = (0);
seq__19613 = G__19635;
chunk__19614 = G__19636;
count__19615 = G__19637;
i__19616 = G__19638;
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
var G__19640 = arguments.length;
switch (G__19640) {
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

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.call(null,cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?new cljs.core.Keyword("cljs.analyzer","externs","cljs.analyzer/externs",893359239).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)):null));
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq.call(null,cljs.core.keys.call(null,externs));
while(true){
if(ks){
var k_19645 = cljs.core.first.call(null,ks);
var vec__19641_19646 = cljs.core.conj.call(null,prefix,k_19645);
var top_19647 = cljs.core.nth.call(null,vec__19641_19646,(0),null);
var prefix_SINGLEQUOTE__19648 = vec__19641_19646;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_19645)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__19648) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_19647)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_19647)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__19648)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_19647);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__19648)),";");
}
} else {
}

var m_19649 = cljs.core.get.call(null,externs,k_19645);
if(cljs.core.empty_QMARK_.call(null,m_19649)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__19648,m_19649,top_level,known_externs);
}

var G__19650 = cljs.core.next.call(null,ks);
ks = G__19650;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map
