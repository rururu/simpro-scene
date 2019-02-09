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
var map__19016 = s;
var map__19016__$1 = (((((!((map__19016 == null))))?(((((map__19016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19016):map__19016);
var name = cljs.core.get.call(null,map__19016__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__19016__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__19019 = info;
var map__19020 = G__19019;
var map__19020__$1 = (((((!((map__19020 == null))))?(((((map__19020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19020):map__19020);
var shadow = cljs.core.get.call(null,map__19020__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__19019__$1 = G__19019;
while(true){
var d__$2 = d__$1;
var map__19022 = G__19019__$1;
var map__19022__$1 = (((((!((map__19022 == null))))?(((((map__19022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19022):map__19022);
var shadow__$1 = cljs.core.get.call(null,map__19022__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__19024 = (d__$2 + (1));
var G__19025 = shadow__$1;
d__$1 = G__19024;
G__19019__$1 = G__19025;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__19026){
var map__19027 = p__19026;
var map__19027__$1 = (((((!((map__19027 == null))))?(((((map__19027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19027):map__19027);
var name_var = map__19027__$1;
var name = cljs.core.get.call(null,map__19027__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__19027__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__19029 = info;
var map__19029__$1 = (((((!((map__19029 == null))))?(((((map__19029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19029):map__19029);
var ns = cljs.core.get.call(null,map__19029__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__19029__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__19032 = arguments.length;
switch (G__19032) {
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
var G__19034 = cp;
switch (G__19034) {
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
var seq__19036_19040 = cljs.core.seq.call(null,s);
var chunk__19037_19041 = null;
var count__19038_19042 = (0);
var i__19039_19043 = (0);
while(true){
if((i__19039_19043 < count__19038_19042)){
var c_19044 = cljs.core._nth.call(null,chunk__19037_19041,i__19039_19043);
sb.append(cljs.compiler.escape_char.call(null,c_19044));


var G__19045 = seq__19036_19040;
var G__19046 = chunk__19037_19041;
var G__19047 = count__19038_19042;
var G__19048 = (i__19039_19043 + (1));
seq__19036_19040 = G__19045;
chunk__19037_19041 = G__19046;
count__19038_19042 = G__19047;
i__19039_19043 = G__19048;
continue;
} else {
var temp__5720__auto___19049 = cljs.core.seq.call(null,seq__19036_19040);
if(temp__5720__auto___19049){
var seq__19036_19050__$1 = temp__5720__auto___19049;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19036_19050__$1)){
var c__4461__auto___19051 = cljs.core.chunk_first.call(null,seq__19036_19050__$1);
var G__19052 = cljs.core.chunk_rest.call(null,seq__19036_19050__$1);
var G__19053 = c__4461__auto___19051;
var G__19054 = cljs.core.count.call(null,c__4461__auto___19051);
var G__19055 = (0);
seq__19036_19040 = G__19052;
chunk__19037_19041 = G__19053;
count__19038_19042 = G__19054;
i__19039_19043 = G__19055;
continue;
} else {
var c_19056 = cljs.core.first.call(null,seq__19036_19050__$1);
sb.append(cljs.compiler.escape_char.call(null,c_19056));


var G__19057 = cljs.core.next.call(null,seq__19036_19050__$1);
var G__19058 = null;
var G__19059 = (0);
var G__19060 = (0);
seq__19036_19040 = G__19057;
chunk__19037_19041 = G__19058;
count__19038_19042 = G__19059;
i__19039_19043 = G__19060;
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
var map__19061_19066 = ast;
var map__19061_19067__$1 = (((((!((map__19061_19066 == null))))?(((((map__19061_19066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19061_19066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19061_19066):map__19061_19066);
var env_19068 = cljs.core.get.call(null,map__19061_19067__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_19068))){
var map__19063_19069 = env_19068;
var map__19063_19070__$1 = (((((!((map__19063_19069 == null))))?(((((map__19063_19069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19063_19069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19063_19069):map__19063_19069);
var line_19071 = cljs.core.get.call(null,map__19063_19070__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_19072 = cljs.core.get.call(null,map__19063_19070__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__19063_19069,map__19063_19070__$1,line_19071,column_19072,map__19061_19066,map__19061_19067__$1,env_19068){
return (function (m){
var minfo = (function (){var G__19065 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__19065,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__19065;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_19071 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__19063_19069,map__19063_19070__$1,line_19071,column_19072,map__19061_19066,map__19061_19067__$1,env_19068){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_19072)?(column_19072 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__19063_19069,map__19063_19070__$1,line_19071,column_19072,map__19061_19066,map__19061_19067__$1,env_19068){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__19063_19069,map__19063_19070__$1,line_19071,column_19072,map__19061_19066,map__19061_19067__$1,env_19068))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__19063_19069,map__19063_19070__$1,line_19071,column_19072,map__19061_19066,map__19061_19067__$1,env_19068))
,cljs.core.sorted_map.call(null)));
});})(map__19063_19069,map__19063_19070__$1,line_19071,column_19072,map__19061_19066,map__19061_19067__$1,env_19068))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__19081 = arguments.length;
switch (G__19081) {
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
var len__4641__auto___19088 = arguments.length;
var i__4642__auto___19089 = (0);
while(true){
if((i__4642__auto___19089 < len__4641__auto___19088)){
args_arr__4662__auto__.push((arguments[i__4642__auto___19089]));

var G__19090 = (i__4642__auto___19089 + (1));
i__4642__auto___19089 = G__19090;
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
var s_19091 = (function (){var G__19082 = a;
if((!(typeof a === 'string'))){
return G__19082.toString();
} else {
return G__19082;
}
})();
var temp__5724__auto___19092 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5724__auto___19092 == null)){
} else {
var sm_data_19093 = temp__5724__auto___19092;
cljs.core.swap_BANG_.call(null,sm_data_19093,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),((function (sm_data_19093,temp__5724__auto___19092,s_19091){
return (function (p1__19073_SHARP_){
return (p1__19073_SHARP_ + s_19091.length);
});})(sm_data_19093,temp__5724__auto___19092,s_19091))
);
}

cljs.core.print.call(null,s_19091);

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

var seq__19083 = cljs.core.seq.call(null,xs);
var chunk__19084 = null;
var count__19085 = (0);
var i__19086 = (0);
while(true){
if((i__19086 < count__19085)){
var x = cljs.core._nth.call(null,chunk__19084,i__19086);
cljs.compiler.emits.call(null,x);


var G__19094 = seq__19083;
var G__19095 = chunk__19084;
var G__19096 = count__19085;
var G__19097 = (i__19086 + (1));
seq__19083 = G__19094;
chunk__19084 = G__19095;
count__19085 = G__19096;
i__19086 = G__19097;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__19083);
if(temp__5720__auto__){
var seq__19083__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19083__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__19083__$1);
var G__19098 = cljs.core.chunk_rest.call(null,seq__19083__$1);
var G__19099 = c__4461__auto__;
var G__19100 = cljs.core.count.call(null,c__4461__auto__);
var G__19101 = (0);
seq__19083 = G__19098;
chunk__19084 = G__19099;
count__19085 = G__19100;
i__19086 = G__19101;
continue;
} else {
var x = cljs.core.first.call(null,seq__19083__$1);
cljs.compiler.emits.call(null,x);


var G__19102 = cljs.core.next.call(null,seq__19083__$1);
var G__19103 = null;
var G__19104 = (0);
var G__19105 = (0);
seq__19083 = G__19102;
chunk__19084 = G__19103;
count__19085 = G__19104;
i__19086 = G__19105;
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
cljs.compiler.emits.cljs$lang$applyTo = (function (seq19075){
var G__19076 = cljs.core.first.call(null,seq19075);
var seq19075__$1 = cljs.core.next.call(null,seq19075);
var G__19077 = cljs.core.first.call(null,seq19075__$1);
var seq19075__$2 = cljs.core.next.call(null,seq19075__$1);
var G__19078 = cljs.core.first.call(null,seq19075__$2);
var seq19075__$3 = cljs.core.next.call(null,seq19075__$2);
var G__19079 = cljs.core.first.call(null,seq19075__$3);
var seq19075__$4 = cljs.core.next.call(null,seq19075__$3);
var G__19080 = cljs.core.first.call(null,seq19075__$4);
var seq19075__$5 = cljs.core.next.call(null,seq19075__$4);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19076,G__19077,G__19078,G__19079,G__19080,seq19075__$5);
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__19106){
var map__19107 = p__19106;
var map__19107__$1 = (((((!((map__19107 == null))))?(((((map__19107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19107):map__19107);
var m = map__19107__$1;
var gen_line = cljs.core.get.call(null,map__19107__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__19116 = arguments.length;
switch (G__19116) {
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
var len__4641__auto___19122 = arguments.length;
var i__4642__auto___19123 = (0);
while(true){
if((i__4642__auto___19123 < len__4641__auto___19122)){
args_arr__4662__auto__.push((arguments[i__4642__auto___19123]));

var G__19124 = (i__4642__auto___19123 + (1));
i__4642__auto___19123 = G__19124;
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

var seq__19117_19125 = cljs.core.seq.call(null,xs);
var chunk__19118_19126 = null;
var count__19119_19127 = (0);
var i__19120_19128 = (0);
while(true){
if((i__19120_19128 < count__19119_19127)){
var x_19129 = cljs.core._nth.call(null,chunk__19118_19126,i__19120_19128);
cljs.compiler.emits.call(null,x_19129);


var G__19130 = seq__19117_19125;
var G__19131 = chunk__19118_19126;
var G__19132 = count__19119_19127;
var G__19133 = (i__19120_19128 + (1));
seq__19117_19125 = G__19130;
chunk__19118_19126 = G__19131;
count__19119_19127 = G__19132;
i__19120_19128 = G__19133;
continue;
} else {
var temp__5720__auto___19134 = cljs.core.seq.call(null,seq__19117_19125);
if(temp__5720__auto___19134){
var seq__19117_19135__$1 = temp__5720__auto___19134;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19117_19135__$1)){
var c__4461__auto___19136 = cljs.core.chunk_first.call(null,seq__19117_19135__$1);
var G__19137 = cljs.core.chunk_rest.call(null,seq__19117_19135__$1);
var G__19138 = c__4461__auto___19136;
var G__19139 = cljs.core.count.call(null,c__4461__auto___19136);
var G__19140 = (0);
seq__19117_19125 = G__19137;
chunk__19118_19126 = G__19138;
count__19119_19127 = G__19139;
i__19120_19128 = G__19140;
continue;
} else {
var x_19141 = cljs.core.first.call(null,seq__19117_19135__$1);
cljs.compiler.emits.call(null,x_19141);


var G__19142 = cljs.core.next.call(null,seq__19117_19135__$1);
var G__19143 = null;
var G__19144 = (0);
var G__19145 = (0);
seq__19117_19125 = G__19142;
chunk__19118_19126 = G__19143;
count__19119_19127 = G__19144;
i__19120_19128 = G__19145;
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
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq19110){
var G__19111 = cljs.core.first.call(null,seq19110);
var seq19110__$1 = cljs.core.next.call(null,seq19110);
var G__19112 = cljs.core.first.call(null,seq19110__$1);
var seq19110__$2 = cljs.core.next.call(null,seq19110__$1);
var G__19113 = cljs.core.first.call(null,seq19110__$2);
var seq19110__$3 = cljs.core.next.call(null,seq19110__$2);
var G__19114 = cljs.core.first.call(null,seq19110__$3);
var seq19110__$4 = cljs.core.next.call(null,seq19110__$3);
var G__19115 = cljs.core.first.call(null,seq19110__$4);
var seq19110__$5 = cljs.core.next.call(null,seq19110__$4);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19111,G__19112,G__19113,G__19114,G__19115,seq19110__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19146_19150 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19147_19151 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19148_19152 = true;
var _STAR_print_fn_STAR__temp_val__19149_19153 = ((function (_STAR_print_newline_STAR__orig_val__19146_19150,_STAR_print_fn_STAR__orig_val__19147_19151,_STAR_print_newline_STAR__temp_val__19148_19152,sb__4572__auto__){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__19146_19150,_STAR_print_fn_STAR__orig_val__19147_19151,_STAR_print_newline_STAR__temp_val__19148_19152,sb__4572__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19148_19152;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19149_19153;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19147_19151;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19146_19150;
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
var vec__19154 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__19154,(0),null);
var name = cljs.core.nth.call(null,vec__19154,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,((function (vec__19154,ns,name){
return (function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
});})(vec__19154,ns,name))
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
var vec__19157 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__19157,(0),null);
var flags = cljs.core.nth.call(null,vec__19157,(1),null);
var pattern = cljs.core.nth.call(null,vec__19157,(2),null);
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
var temp__5718__auto__ = (function (){var and__4036__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4036__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var value = temp__5718__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.Symbol,(function (x){
var temp__5718__auto__ = (function (){var and__4036__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4036__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var value = temp__5718__auto__;
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
return (function (p1__19160_SHARP_){
return ((function (items){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__19160_SHARP_);
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
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__19162){
var map__19163 = p__19162;
var map__19163__$1 = (((((!((map__19163 == null))))?(((((map__19163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19163):map__19163);
var ast = map__19163__$1;
var info = cljs.core.get.call(null,map__19163__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__19163__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__19163__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5718__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5718__auto__)){
var const_expr = temp__5718__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__19165 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__19165__$1 = (((((!((map__19165 == null))))?(((((map__19165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19165):map__19165);
var cenv = map__19165__$1;
var options = cljs.core.get.call(null,map__19165__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__19167 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__4036__auto__;
}
})())){
return clojure.set.difference.call(null,G__19167,cljs.analyzer.es5_allowed);
} else {
return G__19167;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4047__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__19168 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__19168,reserved);
} else {
return G__19168;
}
})();
var env__19008__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19008__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__19169_19170 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__19169_19171__$1 = (((G__19169_19170 instanceof cljs.core.Keyword))?G__19169_19170.fqn:null);
switch (G__19169_19171__$1) {
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19008__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__19173){
var map__19174 = p__19173;
var map__19174__$1 = (((((!((map__19174 == null))))?(((((map__19174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19174):map__19174);
var arg = map__19174__$1;
var env = cljs.core.get.call(null,map__19174__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__19174__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__19174__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__19174__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__19176 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__19176__$1 = (((((!((map__19176 == null))))?(((((map__19176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19176):map__19176);
var name = cljs.core.get.call(null,map__19176__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__19008__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19008__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19008__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__19178){
var map__19179 = p__19178;
var map__19179__$1 = (((((!((map__19179 == null))))?(((((map__19179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19179):map__19179);
var expr = cljs.core.get.call(null,map__19179__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__19179__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__19179__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19008__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19008__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19008__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,((function (keys__$1){
return (function (p1__19181_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__19181_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__19182){
var map__19183 = p__19182;
var map__19183__$1 = (((((!((map__19183 == null))))?(((((map__19183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19183):map__19183);
var env = cljs.core.get.call(null,map__19183__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__19183__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__19183__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__19008__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19008__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19008__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__19185){
var map__19186 = p__19185;
var map__19186__$1 = (((((!((map__19186 == null))))?(((((map__19186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19186):map__19186);
var items = cljs.core.get.call(null,map__19186__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__19186__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19008__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19008__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19008__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,((function (items__$1){
return (function (p1__19188_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__19188_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__19189){
var map__19190 = p__19189;
var map__19190__$1 = (((((!((map__19190 == null))))?(((((map__19190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19190):map__19190);
var items = cljs.core.get.call(null,map__19190__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__19190__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19008__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19008__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19008__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5720__auto___19208 = cljs.core.seq.call(null,items);
if(temp__5720__auto___19208){
var items_19209__$1 = temp__5720__auto___19208;
var vec__19192_19210 = items_19209__$1;
var seq__19193_19211 = cljs.core.seq.call(null,vec__19192_19210);
var first__19194_19212 = cljs.core.first.call(null,seq__19193_19211);
var seq__19193_19213__$1 = cljs.core.next.call(null,seq__19193_19211);
var vec__19195_19214 = first__19194_19212;
var k_19215 = cljs.core.nth.call(null,vec__19195_19214,(0),null);
var v_19216 = cljs.core.nth.call(null,vec__19195_19214,(1),null);
var r_19217 = seq__19193_19213__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_19215),"\": ",emit_js_object_val.call(null,v_19216));

var seq__19198_19218 = cljs.core.seq.call(null,r_19217);
var chunk__19199_19219 = null;
var count__19200_19220 = (0);
var i__19201_19221 = (0);
while(true){
if((i__19201_19221 < count__19200_19220)){
var vec__19202_19222 = cljs.core._nth.call(null,chunk__19199_19219,i__19201_19221);
var k_19223__$1 = cljs.core.nth.call(null,vec__19202_19222,(0),null);
var v_19224__$1 = cljs.core.nth.call(null,vec__19202_19222,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_19223__$1),"\": ",emit_js_object_val.call(null,v_19224__$1));


var G__19225 = seq__19198_19218;
var G__19226 = chunk__19199_19219;
var G__19227 = count__19200_19220;
var G__19228 = (i__19201_19221 + (1));
seq__19198_19218 = G__19225;
chunk__19199_19219 = G__19226;
count__19200_19220 = G__19227;
i__19201_19221 = G__19228;
continue;
} else {
var temp__5720__auto___19229__$1 = cljs.core.seq.call(null,seq__19198_19218);
if(temp__5720__auto___19229__$1){
var seq__19198_19230__$1 = temp__5720__auto___19229__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19198_19230__$1)){
var c__4461__auto___19231 = cljs.core.chunk_first.call(null,seq__19198_19230__$1);
var G__19232 = cljs.core.chunk_rest.call(null,seq__19198_19230__$1);
var G__19233 = c__4461__auto___19231;
var G__19234 = cljs.core.count.call(null,c__4461__auto___19231);
var G__19235 = (0);
seq__19198_19218 = G__19232;
chunk__19199_19219 = G__19233;
count__19200_19220 = G__19234;
i__19201_19221 = G__19235;
continue;
} else {
var vec__19205_19236 = cljs.core.first.call(null,seq__19198_19230__$1);
var k_19237__$1 = cljs.core.nth.call(null,vec__19205_19236,(0),null);
var v_19238__$1 = cljs.core.nth.call(null,vec__19205_19236,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_19237__$1),"\": ",emit_js_object_val.call(null,v_19238__$1));


var G__19239 = cljs.core.next.call(null,seq__19198_19230__$1);
var G__19240 = null;
var G__19241 = (0);
var G__19242 = (0);
seq__19198_19218 = G__19239;
chunk__19199_19219 = G__19240;
count__19200_19220 = G__19241;
i__19201_19221 = G__19242;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__19243){
var map__19244 = p__19243;
var map__19244__$1 = (((((!((map__19244 == null))))?(((((map__19244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19244):map__19244);
var keys = cljs.core.get.call(null,map__19244__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__19244__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__19244__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19008__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19008__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19008__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__19246){
var map__19247 = p__19246;
var map__19247__$1 = (((((!((map__19247 == null))))?(((((map__19247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19247):map__19247);
var items = cljs.core.get.call(null,map__19247__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__19247__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19008__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19008__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19008__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__19249){
var map__19250 = p__19249;
var map__19250__$1 = (((((!((map__19250 == null))))?(((((map__19250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19250):map__19250);
var expr = cljs.core.get.call(null,map__19250__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__19252){
var map__19253 = p__19252;
var map__19253__$1 = (((((!((map__19253 == null))))?(((((map__19253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19253):map__19253);
var form = cljs.core.get.call(null,map__19253__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__19253__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__19008__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19008__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19008__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__19255 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__19255__$1 = (((((!((map__19255 == null))))?(((((map__19255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19255):map__19255);
var op = cljs.core.get.call(null,map__19255__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__19255__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__19255__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__19257 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__19257__$1 = (((((!((map__19257 == null))))?(((((map__19257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19257):map__19257);
var op = cljs.core.get.call(null,map__19257__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__19257__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__19257__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__19259){
var map__19260 = p__19259;
var map__19260__$1 = (((((!((map__19260 == null))))?(((((map__19260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19260):map__19260);
var test = cljs.core.get.call(null,map__19260__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__19260__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__19260__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__19260__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__19260__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__19262){
var map__19263 = p__19262;
var map__19263__$1 = (((((!((map__19263 == null))))?(((((map__19263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19263):map__19263);
var v = cljs.core.get.call(null,map__19263__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__19263__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__19263__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__19263__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__19265_19285 = cljs.core.seq.call(null,nodes);
var chunk__19266_19286 = null;
var count__19267_19287 = (0);
var i__19268_19288 = (0);
while(true){
if((i__19268_19288 < count__19267_19287)){
var map__19269_19289 = cljs.core._nth.call(null,chunk__19266_19286,i__19268_19288);
var map__19269_19290__$1 = (((((!((map__19269_19289 == null))))?(((((map__19269_19289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19269_19289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19269_19289):map__19269_19289);
var ts_19291 = cljs.core.get.call(null,map__19269_19290__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__19270_19292 = cljs.core.get.call(null,map__19269_19290__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__19270_19293__$1 = (((((!((map__19270_19292 == null))))?(((((map__19270_19292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19270_19292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19270_19292):map__19270_19292);
var then_19294 = cljs.core.get.call(null,map__19270_19293__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__19273_19295 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_19291));
var chunk__19274_19296 = null;
var count__19275_19297 = (0);
var i__19276_19298 = (0);
while(true){
if((i__19276_19298 < count__19275_19297)){
var test_19299 = cljs.core._nth.call(null,chunk__19274_19296,i__19276_19298);
cljs.compiler.emitln.call(null,"case ",test_19299,":");


var G__19300 = seq__19273_19295;
var G__19301 = chunk__19274_19296;
var G__19302 = count__19275_19297;
var G__19303 = (i__19276_19298 + (1));
seq__19273_19295 = G__19300;
chunk__19274_19296 = G__19301;
count__19275_19297 = G__19302;
i__19276_19298 = G__19303;
continue;
} else {
var temp__5720__auto___19304 = cljs.core.seq.call(null,seq__19273_19295);
if(temp__5720__auto___19304){
var seq__19273_19305__$1 = temp__5720__auto___19304;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19273_19305__$1)){
var c__4461__auto___19306 = cljs.core.chunk_first.call(null,seq__19273_19305__$1);
var G__19307 = cljs.core.chunk_rest.call(null,seq__19273_19305__$1);
var G__19308 = c__4461__auto___19306;
var G__19309 = cljs.core.count.call(null,c__4461__auto___19306);
var G__19310 = (0);
seq__19273_19295 = G__19307;
chunk__19274_19296 = G__19308;
count__19275_19297 = G__19309;
i__19276_19298 = G__19310;
continue;
} else {
var test_19311 = cljs.core.first.call(null,seq__19273_19305__$1);
cljs.compiler.emitln.call(null,"case ",test_19311,":");


var G__19312 = cljs.core.next.call(null,seq__19273_19305__$1);
var G__19313 = null;
var G__19314 = (0);
var G__19315 = (0);
seq__19273_19295 = G__19312;
chunk__19274_19296 = G__19313;
count__19275_19297 = G__19314;
i__19276_19298 = G__19315;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_19294);
} else {
cljs.compiler.emitln.call(null,then_19294);
}

cljs.compiler.emitln.call(null,"break;");


var G__19316 = seq__19265_19285;
var G__19317 = chunk__19266_19286;
var G__19318 = count__19267_19287;
var G__19319 = (i__19268_19288 + (1));
seq__19265_19285 = G__19316;
chunk__19266_19286 = G__19317;
count__19267_19287 = G__19318;
i__19268_19288 = G__19319;
continue;
} else {
var temp__5720__auto___19320 = cljs.core.seq.call(null,seq__19265_19285);
if(temp__5720__auto___19320){
var seq__19265_19321__$1 = temp__5720__auto___19320;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19265_19321__$1)){
var c__4461__auto___19322 = cljs.core.chunk_first.call(null,seq__19265_19321__$1);
var G__19323 = cljs.core.chunk_rest.call(null,seq__19265_19321__$1);
var G__19324 = c__4461__auto___19322;
var G__19325 = cljs.core.count.call(null,c__4461__auto___19322);
var G__19326 = (0);
seq__19265_19285 = G__19323;
chunk__19266_19286 = G__19324;
count__19267_19287 = G__19325;
i__19268_19288 = G__19326;
continue;
} else {
var map__19277_19327 = cljs.core.first.call(null,seq__19265_19321__$1);
var map__19277_19328__$1 = (((((!((map__19277_19327 == null))))?(((((map__19277_19327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19277_19327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19277_19327):map__19277_19327);
var ts_19329 = cljs.core.get.call(null,map__19277_19328__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__19278_19330 = cljs.core.get.call(null,map__19277_19328__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__19278_19331__$1 = (((((!((map__19278_19330 == null))))?(((((map__19278_19330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19278_19330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19278_19330):map__19278_19330);
var then_19332 = cljs.core.get.call(null,map__19278_19331__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__19281_19333 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_19329));
var chunk__19282_19334 = null;
var count__19283_19335 = (0);
var i__19284_19336 = (0);
while(true){
if((i__19284_19336 < count__19283_19335)){
var test_19337 = cljs.core._nth.call(null,chunk__19282_19334,i__19284_19336);
cljs.compiler.emitln.call(null,"case ",test_19337,":");


var G__19338 = seq__19281_19333;
var G__19339 = chunk__19282_19334;
var G__19340 = count__19283_19335;
var G__19341 = (i__19284_19336 + (1));
seq__19281_19333 = G__19338;
chunk__19282_19334 = G__19339;
count__19283_19335 = G__19340;
i__19284_19336 = G__19341;
continue;
} else {
var temp__5720__auto___19342__$1 = cljs.core.seq.call(null,seq__19281_19333);
if(temp__5720__auto___19342__$1){
var seq__19281_19343__$1 = temp__5720__auto___19342__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19281_19343__$1)){
var c__4461__auto___19344 = cljs.core.chunk_first.call(null,seq__19281_19343__$1);
var G__19345 = cljs.core.chunk_rest.call(null,seq__19281_19343__$1);
var G__19346 = c__4461__auto___19344;
var G__19347 = cljs.core.count.call(null,c__4461__auto___19344);
var G__19348 = (0);
seq__19281_19333 = G__19345;
chunk__19282_19334 = G__19346;
count__19283_19335 = G__19347;
i__19284_19336 = G__19348;
continue;
} else {
var test_19349 = cljs.core.first.call(null,seq__19281_19343__$1);
cljs.compiler.emitln.call(null,"case ",test_19349,":");


var G__19350 = cljs.core.next.call(null,seq__19281_19343__$1);
var G__19351 = null;
var G__19352 = (0);
var G__19353 = (0);
seq__19281_19333 = G__19350;
chunk__19282_19334 = G__19351;
count__19283_19335 = G__19352;
i__19284_19336 = G__19353;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_19332);
} else {
cljs.compiler.emitln.call(null,then_19332);
}

cljs.compiler.emitln.call(null,"break;");


var G__19354 = cljs.core.next.call(null,seq__19265_19321__$1);
var G__19355 = null;
var G__19356 = (0);
var G__19357 = (0);
seq__19265_19285 = G__19354;
chunk__19266_19286 = G__19355;
count__19267_19287 = G__19356;
i__19268_19288 = G__19357;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__19358){
var map__19359 = p__19358;
var map__19359__$1 = (((((!((map__19359 == null))))?(((((map__19359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19359):map__19359);
var throw$ = cljs.core.get.call(null,map__19359__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__19359__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__19362 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__19362,(0),null);
var rstr = cljs.core.nth.call(null,vec__19362,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__19362,fstr,rstr,ret_t,axstr){
return (function (p1__19361_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__19361_SHARP_);
});})(idx,vec__19362,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__19365 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19365),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__19365;
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
return (function (p1__19366_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__19366_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__19367 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__19368 = cljs.core.seq.call(null,vec__19367);
var first__19369 = cljs.core.first.call(null,seq__19368);
var seq__19368__$1 = cljs.core.next.call(null,seq__19368);
var p = first__19369;
var first__19369__$1 = cljs.core.first.call(null,seq__19368__$1);
var seq__19368__$2 = cljs.core.next.call(null,seq__19368__$1);
var ts = first__19369__$1;
var first__19369__$2 = cljs.core.first.call(null,seq__19368__$2);
var seq__19368__$3 = cljs.core.next.call(null,seq__19368__$2);
var n = first__19369__$2;
var xs = seq__19368__$3;
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
var vec__19370 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__19371 = cljs.core.seq.call(null,vec__19370);
var first__19372 = cljs.core.first.call(null,seq__19371);
var seq__19371__$1 = cljs.core.next.call(null,seq__19371);
var p = first__19372;
var first__19372__$1 = cljs.core.first.call(null,seq__19371__$1);
var seq__19371__$2 = cljs.core.next.call(null,seq__19371__$1);
var ts = first__19372__$1;
var xs = seq__19371__$2;
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
var G__19375 = arguments.length;
switch (G__19375) {
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
var vec__19383 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__19373_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__19373_SHARP_);
} else {
return p1__19373_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__19384 = cljs.core.seq.call(null,vec__19383);
var first__19385 = cljs.core.first.call(null,seq__19384);
var seq__19384__$1 = cljs.core.next.call(null,seq__19384);
var x = first__19385;
var ys = seq__19384__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__19386 = cljs.core.seq.call(null,ys);
var chunk__19387 = null;
var count__19388 = (0);
var i__19389 = (0);
while(true){
if((i__19389 < count__19388)){
var next_line = cljs.core._nth.call(null,chunk__19387,i__19389);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__19395 = seq__19386;
var G__19396 = chunk__19387;
var G__19397 = count__19388;
var G__19398 = (i__19389 + (1));
seq__19386 = G__19395;
chunk__19387 = G__19396;
count__19388 = G__19397;
i__19389 = G__19398;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__19386);
if(temp__5720__auto__){
var seq__19386__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19386__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__19386__$1);
var G__19399 = cljs.core.chunk_rest.call(null,seq__19386__$1);
var G__19400 = c__4461__auto__;
var G__19401 = cljs.core.count.call(null,c__4461__auto__);
var G__19402 = (0);
seq__19386 = G__19399;
chunk__19387 = G__19400;
count__19388 = G__19401;
i__19389 = G__19402;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__19386__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__19403 = cljs.core.next.call(null,seq__19386__$1);
var G__19404 = null;
var G__19405 = (0);
var G__19406 = (0);
seq__19386 = G__19403;
chunk__19387 = G__19404;
count__19388 = G__19405;
i__19389 = G__19406;
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

var seq__19390_19407 = cljs.core.seq.call(null,docs__$2);
var chunk__19391_19408 = null;
var count__19392_19409 = (0);
var i__19393_19410 = (0);
while(true){
if((i__19393_19410 < count__19392_19409)){
var e_19411 = cljs.core._nth.call(null,chunk__19391_19408,i__19393_19410);
if(cljs.core.truth_(e_19411)){
print_comment_lines.call(null,e_19411);
} else {
}


var G__19412 = seq__19390_19407;
var G__19413 = chunk__19391_19408;
var G__19414 = count__19392_19409;
var G__19415 = (i__19393_19410 + (1));
seq__19390_19407 = G__19412;
chunk__19391_19408 = G__19413;
count__19392_19409 = G__19414;
i__19393_19410 = G__19415;
continue;
} else {
var temp__5720__auto___19416 = cljs.core.seq.call(null,seq__19390_19407);
if(temp__5720__auto___19416){
var seq__19390_19417__$1 = temp__5720__auto___19416;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19390_19417__$1)){
var c__4461__auto___19418 = cljs.core.chunk_first.call(null,seq__19390_19417__$1);
var G__19419 = cljs.core.chunk_rest.call(null,seq__19390_19417__$1);
var G__19420 = c__4461__auto___19418;
var G__19421 = cljs.core.count.call(null,c__4461__auto___19418);
var G__19422 = (0);
seq__19390_19407 = G__19419;
chunk__19391_19408 = G__19420;
count__19392_19409 = G__19421;
i__19393_19410 = G__19422;
continue;
} else {
var e_19423 = cljs.core.first.call(null,seq__19390_19417__$1);
if(cljs.core.truth_(e_19423)){
print_comment_lines.call(null,e_19423);
} else {
}


var G__19424 = cljs.core.next.call(null,seq__19390_19417__$1);
var G__19425 = null;
var G__19426 = (0);
var G__19427 = (0);
seq__19390_19407 = G__19424;
chunk__19391_19408 = G__19425;
count__19392_19409 = G__19426;
i__19393_19410 = G__19427;
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
return (function (p1__19429_SHARP_){
return goog.string.startsWith(p1__19429_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__19430){
var map__19431 = p__19430;
var map__19431__$1 = (((((!((map__19431 == null))))?(((((map__19431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19431):map__19431);
var doc = cljs.core.get.call(null,map__19431__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__19431__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__19431__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.call(null,map__19431__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__19431__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__19431__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__19431__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__19431__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__19431__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emits.call(null," = ",(function (){var temp__5718__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__5718__auto__)){
var define = temp__5718__auto__;
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__19433){
var map__19434 = p__19433;
var map__19434__$1 = (((((!((map__19434 == null))))?(((((map__19434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19434):map__19434);
var name = cljs.core.get.call(null,map__19434__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__19434__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__19434__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__19436_19454 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__19437_19455 = null;
var count__19438_19456 = (0);
var i__19439_19457 = (0);
while(true){
if((i__19439_19457 < count__19438_19456)){
var vec__19440_19458 = cljs.core._nth.call(null,chunk__19437_19455,i__19439_19457);
var i_19459 = cljs.core.nth.call(null,vec__19440_19458,(0),null);
var param_19460 = cljs.core.nth.call(null,vec__19440_19458,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_19460);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__19461 = seq__19436_19454;
var G__19462 = chunk__19437_19455;
var G__19463 = count__19438_19456;
var G__19464 = (i__19439_19457 + (1));
seq__19436_19454 = G__19461;
chunk__19437_19455 = G__19462;
count__19438_19456 = G__19463;
i__19439_19457 = G__19464;
continue;
} else {
var temp__5720__auto___19465 = cljs.core.seq.call(null,seq__19436_19454);
if(temp__5720__auto___19465){
var seq__19436_19466__$1 = temp__5720__auto___19465;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19436_19466__$1)){
var c__4461__auto___19467 = cljs.core.chunk_first.call(null,seq__19436_19466__$1);
var G__19468 = cljs.core.chunk_rest.call(null,seq__19436_19466__$1);
var G__19469 = c__4461__auto___19467;
var G__19470 = cljs.core.count.call(null,c__4461__auto___19467);
var G__19471 = (0);
seq__19436_19454 = G__19468;
chunk__19437_19455 = G__19469;
count__19438_19456 = G__19470;
i__19439_19457 = G__19471;
continue;
} else {
var vec__19443_19472 = cljs.core.first.call(null,seq__19436_19466__$1);
var i_19473 = cljs.core.nth.call(null,vec__19443_19472,(0),null);
var param_19474 = cljs.core.nth.call(null,vec__19443_19472,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_19474);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__19475 = cljs.core.next.call(null,seq__19436_19466__$1);
var G__19476 = null;
var G__19477 = (0);
var G__19478 = (0);
seq__19436_19454 = G__19475;
chunk__19437_19455 = G__19476;
count__19438_19456 = G__19477;
i__19439_19457 = G__19478;
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

var seq__19446_19479 = cljs.core.seq.call(null,params);
var chunk__19447_19480 = null;
var count__19448_19481 = (0);
var i__19449_19482 = (0);
while(true){
if((i__19449_19482 < count__19448_19481)){
var param_19483 = cljs.core._nth.call(null,chunk__19447_19480,i__19449_19482);
cljs.compiler.emit.call(null,param_19483);

if(cljs.core._EQ_.call(null,param_19483,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__19484 = seq__19446_19479;
var G__19485 = chunk__19447_19480;
var G__19486 = count__19448_19481;
var G__19487 = (i__19449_19482 + (1));
seq__19446_19479 = G__19484;
chunk__19447_19480 = G__19485;
count__19448_19481 = G__19486;
i__19449_19482 = G__19487;
continue;
} else {
var temp__5720__auto___19488 = cljs.core.seq.call(null,seq__19446_19479);
if(temp__5720__auto___19488){
var seq__19446_19489__$1 = temp__5720__auto___19488;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19446_19489__$1)){
var c__4461__auto___19490 = cljs.core.chunk_first.call(null,seq__19446_19489__$1);
var G__19491 = cljs.core.chunk_rest.call(null,seq__19446_19489__$1);
var G__19492 = c__4461__auto___19490;
var G__19493 = cljs.core.count.call(null,c__4461__auto___19490);
var G__19494 = (0);
seq__19446_19479 = G__19491;
chunk__19447_19480 = G__19492;
count__19448_19481 = G__19493;
i__19449_19482 = G__19494;
continue;
} else {
var param_19495 = cljs.core.first.call(null,seq__19446_19489__$1);
cljs.compiler.emit.call(null,param_19495);

if(cljs.core._EQ_.call(null,param_19495,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__19496 = cljs.core.next.call(null,seq__19446_19489__$1);
var G__19497 = null;
var G__19498 = (0);
var G__19499 = (0);
seq__19446_19479 = G__19496;
chunk__19447_19480 = G__19497;
count__19448_19481 = G__19498;
i__19449_19482 = G__19499;
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

var seq__19450_19500 = cljs.core.seq.call(null,params);
var chunk__19451_19501 = null;
var count__19452_19502 = (0);
var i__19453_19503 = (0);
while(true){
if((i__19453_19503 < count__19452_19502)){
var param_19504 = cljs.core._nth.call(null,chunk__19451_19501,i__19453_19503);
cljs.compiler.emit.call(null,param_19504);

if(cljs.core._EQ_.call(null,param_19504,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__19505 = seq__19450_19500;
var G__19506 = chunk__19451_19501;
var G__19507 = count__19452_19502;
var G__19508 = (i__19453_19503 + (1));
seq__19450_19500 = G__19505;
chunk__19451_19501 = G__19506;
count__19452_19502 = G__19507;
i__19453_19503 = G__19508;
continue;
} else {
var temp__5720__auto___19509 = cljs.core.seq.call(null,seq__19450_19500);
if(temp__5720__auto___19509){
var seq__19450_19510__$1 = temp__5720__auto___19509;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19450_19510__$1)){
var c__4461__auto___19511 = cljs.core.chunk_first.call(null,seq__19450_19510__$1);
var G__19512 = cljs.core.chunk_rest.call(null,seq__19450_19510__$1);
var G__19513 = c__4461__auto___19511;
var G__19514 = cljs.core.count.call(null,c__4461__auto___19511);
var G__19515 = (0);
seq__19450_19500 = G__19512;
chunk__19451_19501 = G__19513;
count__19452_19502 = G__19514;
i__19453_19503 = G__19515;
continue;
} else {
var param_19516 = cljs.core.first.call(null,seq__19450_19510__$1);
cljs.compiler.emit.call(null,param_19516);

if(cljs.core._EQ_.call(null,param_19516,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__19517 = cljs.core.next.call(null,seq__19450_19510__$1);
var G__19518 = null;
var G__19519 = (0);
var G__19520 = (0);
seq__19450_19500 = G__19517;
chunk__19451_19501 = G__19518;
count__19452_19502 = G__19519;
i__19453_19503 = G__19520;
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
var seq__19521 = cljs.core.seq.call(null,params);
var chunk__19522 = null;
var count__19523 = (0);
var i__19524 = (0);
while(true){
if((i__19524 < count__19523)){
var param = cljs.core._nth.call(null,chunk__19522,i__19524);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__19525 = seq__19521;
var G__19526 = chunk__19522;
var G__19527 = count__19523;
var G__19528 = (i__19524 + (1));
seq__19521 = G__19525;
chunk__19522 = G__19526;
count__19523 = G__19527;
i__19524 = G__19528;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__19521);
if(temp__5720__auto__){
var seq__19521__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19521__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__19521__$1);
var G__19529 = cljs.core.chunk_rest.call(null,seq__19521__$1);
var G__19530 = c__4461__auto__;
var G__19531 = cljs.core.count.call(null,c__4461__auto__);
var G__19532 = (0);
seq__19521 = G__19529;
chunk__19522 = G__19530;
count__19523 = G__19531;
i__19524 = G__19532;
continue;
} else {
var param = cljs.core.first.call(null,seq__19521__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__19533 = cljs.core.next.call(null,seq__19521__$1);
var G__19534 = null;
var G__19535 = (0);
var G__19536 = (0);
seq__19521 = G__19533;
chunk__19522 = G__19534;
count__19523 = G__19535;
i__19524 = G__19536;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__19537){
var map__19538 = p__19537;
var map__19538__$1 = (((((!((map__19538 == null))))?(((((map__19538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19538):map__19538);
var expr = cljs.core.get.call(null,map__19538__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__19538__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__19538__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__19538__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__19538__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__19538__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__19008__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19008__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19008__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__19540){
var map__19541 = p__19540;
var map__19541__$1 = (((((!((map__19541 == null))))?(((((map__19541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19541):map__19541);
var f = map__19541__$1;
var expr = cljs.core.get.call(null,map__19541__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__19541__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__19541__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__19541__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__19541__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__19541__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__19541__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__19541__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__19008__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19008__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_19551__$1 = (function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_19552 = cljs.compiler.munge.call(null,name_19551__$1);
var delegate_name_19553 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_19552),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_19553," = function (");

var seq__19543_19554 = cljs.core.seq.call(null,params);
var chunk__19544_19555 = null;
var count__19545_19556 = (0);
var i__19546_19557 = (0);
while(true){
if((i__19546_19557 < count__19545_19556)){
var param_19558 = cljs.core._nth.call(null,chunk__19544_19555,i__19546_19557);
cljs.compiler.emit.call(null,param_19558);

if(cljs.core._EQ_.call(null,param_19558,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__19559 = seq__19543_19554;
var G__19560 = chunk__19544_19555;
var G__19561 = count__19545_19556;
var G__19562 = (i__19546_19557 + (1));
seq__19543_19554 = G__19559;
chunk__19544_19555 = G__19560;
count__19545_19556 = G__19561;
i__19546_19557 = G__19562;
continue;
} else {
var temp__5720__auto___19563 = cljs.core.seq.call(null,seq__19543_19554);
if(temp__5720__auto___19563){
var seq__19543_19564__$1 = temp__5720__auto___19563;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19543_19564__$1)){
var c__4461__auto___19565 = cljs.core.chunk_first.call(null,seq__19543_19564__$1);
var G__19566 = cljs.core.chunk_rest.call(null,seq__19543_19564__$1);
var G__19567 = c__4461__auto___19565;
var G__19568 = cljs.core.count.call(null,c__4461__auto___19565);
var G__19569 = (0);
seq__19543_19554 = G__19566;
chunk__19544_19555 = G__19567;
count__19545_19556 = G__19568;
i__19546_19557 = G__19569;
continue;
} else {
var param_19570 = cljs.core.first.call(null,seq__19543_19564__$1);
cljs.compiler.emit.call(null,param_19570);

if(cljs.core._EQ_.call(null,param_19570,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__19571 = cljs.core.next.call(null,seq__19543_19564__$1);
var G__19572 = null;
var G__19573 = (0);
var G__19574 = (0);
seq__19543_19554 = G__19571;
chunk__19544_19555 = G__19572;
count__19545_19556 = G__19573;
i__19546_19557 = G__19574;
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

cljs.compiler.emitln.call(null,"var ",mname_19552," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_19575 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_19575,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_19553,".call(this,");

var seq__19547_19576 = cljs.core.seq.call(null,params);
var chunk__19548_19577 = null;
var count__19549_19578 = (0);
var i__19550_19579 = (0);
while(true){
if((i__19550_19579 < count__19549_19578)){
var param_19580 = cljs.core._nth.call(null,chunk__19548_19577,i__19550_19579);
cljs.compiler.emit.call(null,param_19580);

if(cljs.core._EQ_.call(null,param_19580,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__19581 = seq__19547_19576;
var G__19582 = chunk__19548_19577;
var G__19583 = count__19549_19578;
var G__19584 = (i__19550_19579 + (1));
seq__19547_19576 = G__19581;
chunk__19548_19577 = G__19582;
count__19549_19578 = G__19583;
i__19550_19579 = G__19584;
continue;
} else {
var temp__5720__auto___19585 = cljs.core.seq.call(null,seq__19547_19576);
if(temp__5720__auto___19585){
var seq__19547_19586__$1 = temp__5720__auto___19585;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19547_19586__$1)){
var c__4461__auto___19587 = cljs.core.chunk_first.call(null,seq__19547_19586__$1);
var G__19588 = cljs.core.chunk_rest.call(null,seq__19547_19586__$1);
var G__19589 = c__4461__auto___19587;
var G__19590 = cljs.core.count.call(null,c__4461__auto___19587);
var G__19591 = (0);
seq__19547_19576 = G__19588;
chunk__19548_19577 = G__19589;
count__19549_19578 = G__19590;
i__19550_19579 = G__19591;
continue;
} else {
var param_19592 = cljs.core.first.call(null,seq__19547_19586__$1);
cljs.compiler.emit.call(null,param_19592);

if(cljs.core._EQ_.call(null,param_19592,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__19593 = cljs.core.next.call(null,seq__19547_19586__$1);
var G__19594 = null;
var G__19595 = (0);
var G__19596 = (0);
seq__19547_19576 = G__19593;
chunk__19548_19577 = G__19594;
count__19549_19578 = G__19595;
i__19550_19579 = G__19596;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_19552,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_19552,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_19551__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_19552,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_19553,";");

cljs.compiler.emitln.call(null,"return ",mname_19552,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19008__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__19600){
var map__19601 = p__19600;
var map__19601__$1 = (((((!((map__19601 == null))))?(((((map__19601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19601):map__19601);
var variadic = cljs.core.get.call(null,map__19601__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__19601__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__19601__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__19601__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__19601__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__19601__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__19601__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__19601,map__19601__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__19597_SHARP_){
var and__4036__auto__ = p1__19597_SHARP_;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__19597_SHARP_));
} else {
return and__4036__auto__;
}
});})(map__19601,map__19601__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
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
var name_19636__$1 = (function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_19637 = cljs.compiler.munge.call(null,name_19636__$1);
var maxparams_19638 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_19639 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_19636__$1,mname_19637,maxparams_19638,loop_locals,map__19601,map__19601__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_19637),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_19636__$1,mname_19637,maxparams_19638,loop_locals,map__19601,map__19601__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_19640 = cljs.core.sort_by.call(null,((function (name_19636__$1,mname_19637,maxparams_19638,mmap_19639,loop_locals,map__19601,map__19601__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__19598_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__19598_SHARP_)));
});})(name_19636__$1,mname_19637,maxparams_19638,mmap_19639,loop_locals,map__19601,map__19601__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_19639));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_19637," = null;");

var seq__19603_19641 = cljs.core.seq.call(null,ms_19640);
var chunk__19604_19642 = null;
var count__19605_19643 = (0);
var i__19606_19644 = (0);
while(true){
if((i__19606_19644 < count__19605_19643)){
var vec__19607_19645 = cljs.core._nth.call(null,chunk__19604_19642,i__19606_19644);
var n_19646 = cljs.core.nth.call(null,vec__19607_19645,(0),null);
var meth_19647 = cljs.core.nth.call(null,vec__19607_19645,(1),null);
cljs.compiler.emits.call(null,"var ",n_19646," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_19647))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_19647);
} else {
cljs.compiler.emit_fn_method.call(null,meth_19647);
}

cljs.compiler.emitln.call(null,";");


var G__19648 = seq__19603_19641;
var G__19649 = chunk__19604_19642;
var G__19650 = count__19605_19643;
var G__19651 = (i__19606_19644 + (1));
seq__19603_19641 = G__19648;
chunk__19604_19642 = G__19649;
count__19605_19643 = G__19650;
i__19606_19644 = G__19651;
continue;
} else {
var temp__5720__auto___19652 = cljs.core.seq.call(null,seq__19603_19641);
if(temp__5720__auto___19652){
var seq__19603_19653__$1 = temp__5720__auto___19652;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19603_19653__$1)){
var c__4461__auto___19654 = cljs.core.chunk_first.call(null,seq__19603_19653__$1);
var G__19655 = cljs.core.chunk_rest.call(null,seq__19603_19653__$1);
var G__19656 = c__4461__auto___19654;
var G__19657 = cljs.core.count.call(null,c__4461__auto___19654);
var G__19658 = (0);
seq__19603_19641 = G__19655;
chunk__19604_19642 = G__19656;
count__19605_19643 = G__19657;
i__19606_19644 = G__19658;
continue;
} else {
var vec__19610_19659 = cljs.core.first.call(null,seq__19603_19653__$1);
var n_19660 = cljs.core.nth.call(null,vec__19610_19659,(0),null);
var meth_19661 = cljs.core.nth.call(null,vec__19610_19659,(1),null);
cljs.compiler.emits.call(null,"var ",n_19660," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_19661))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_19661);
} else {
cljs.compiler.emit_fn_method.call(null,meth_19661);
}

cljs.compiler.emitln.call(null,";");


var G__19662 = cljs.core.next.call(null,seq__19603_19653__$1);
var G__19663 = null;
var G__19664 = (0);
var G__19665 = (0);
seq__19603_19641 = G__19662;
chunk__19604_19642 = G__19663;
count__19605_19643 = G__19664;
i__19606_19644 = G__19665;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_19637," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_19638),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_19638)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_19638));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__19613_19666 = cljs.core.seq.call(null,ms_19640);
var chunk__19614_19667 = null;
var count__19615_19668 = (0);
var i__19616_19669 = (0);
while(true){
if((i__19616_19669 < count__19615_19668)){
var vec__19617_19670 = cljs.core._nth.call(null,chunk__19614_19667,i__19616_19669);
var n_19671 = cljs.core.nth.call(null,vec__19617_19670,(0),null);
var meth_19672 = cljs.core.nth.call(null,vec__19617_19670,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_19672))){
cljs.compiler.emitln.call(null,"default:");

var restarg_19673 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_19673," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_19674 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_19673," = new cljs.core.IndexedSeq(",a_19674,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_19671,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_19638)),(((cljs.core.count.call(null,maxparams_19638) > (1)))?", ":null),restarg_19673,");");
} else {
var pcnt_19675 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_19672));
cljs.compiler.emitln.call(null,"case ",pcnt_19675,":");

cljs.compiler.emitln.call(null,"return ",n_19671,".call(this",(((pcnt_19675 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_19675,maxparams_19638)),null,(1),null)),(2),null))),");");
}


var G__19676 = seq__19613_19666;
var G__19677 = chunk__19614_19667;
var G__19678 = count__19615_19668;
var G__19679 = (i__19616_19669 + (1));
seq__19613_19666 = G__19676;
chunk__19614_19667 = G__19677;
count__19615_19668 = G__19678;
i__19616_19669 = G__19679;
continue;
} else {
var temp__5720__auto___19680 = cljs.core.seq.call(null,seq__19613_19666);
if(temp__5720__auto___19680){
var seq__19613_19681__$1 = temp__5720__auto___19680;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19613_19681__$1)){
var c__4461__auto___19682 = cljs.core.chunk_first.call(null,seq__19613_19681__$1);
var G__19683 = cljs.core.chunk_rest.call(null,seq__19613_19681__$1);
var G__19684 = c__4461__auto___19682;
var G__19685 = cljs.core.count.call(null,c__4461__auto___19682);
var G__19686 = (0);
seq__19613_19666 = G__19683;
chunk__19614_19667 = G__19684;
count__19615_19668 = G__19685;
i__19616_19669 = G__19686;
continue;
} else {
var vec__19620_19687 = cljs.core.first.call(null,seq__19613_19681__$1);
var n_19688 = cljs.core.nth.call(null,vec__19620_19687,(0),null);
var meth_19689 = cljs.core.nth.call(null,vec__19620_19687,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_19689))){
cljs.compiler.emitln.call(null,"default:");

var restarg_19690 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_19690," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_19691 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_19690," = new cljs.core.IndexedSeq(",a_19691,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_19688,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_19638)),(((cljs.core.count.call(null,maxparams_19638) > (1)))?", ":null),restarg_19690,");");
} else {
var pcnt_19692 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_19689));
cljs.compiler.emitln.call(null,"case ",pcnt_19692,":");

cljs.compiler.emitln.call(null,"return ",n_19688,".call(this",(((pcnt_19692 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_19692,maxparams_19638)),null,(1),null)),(2),null))),");");
}


var G__19693 = cljs.core.next.call(null,seq__19613_19681__$1);
var G__19694 = null;
var G__19695 = (0);
var G__19696 = (0);
seq__19613_19666 = G__19693;
chunk__19614_19667 = G__19694;
count__19615_19668 = G__19695;
i__19616_19669 = G__19696;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_19697 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_19640)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_19697,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_19637,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_19637,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_19636__$1,mname_19637,maxparams_19638,mmap_19639,ms_19640,loop_locals,map__19601,map__19601__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__19599_SHARP_){
var vec__19623 = p1__19599_SHARP_;
var n = cljs.core.nth.call(null,vec__19623,(0),null);
var m = cljs.core.nth.call(null,vec__19623,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_19636__$1,mname_19637,maxparams_19638,mmap_19639,ms_19640,loop_locals,map__19601,map__19601__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_19640),".cljs$lang$applyTo;");
} else {
}

var seq__19626_19698 = cljs.core.seq.call(null,ms_19640);
var chunk__19627_19699 = null;
var count__19628_19700 = (0);
var i__19629_19701 = (0);
while(true){
if((i__19629_19701 < count__19628_19700)){
var vec__19630_19702 = cljs.core._nth.call(null,chunk__19627_19699,i__19629_19701);
var n_19703 = cljs.core.nth.call(null,vec__19630_19702,(0),null);
var meth_19704 = cljs.core.nth.call(null,vec__19630_19702,(1),null);
var c_19705 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_19704));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_19704))){
cljs.compiler.emitln.call(null,mname_19637,".cljs$core$IFn$_invoke$arity$variadic = ",n_19703,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_19637,".cljs$core$IFn$_invoke$arity$",c_19705," = ",n_19703,";");
}


var G__19706 = seq__19626_19698;
var G__19707 = chunk__19627_19699;
var G__19708 = count__19628_19700;
var G__19709 = (i__19629_19701 + (1));
seq__19626_19698 = G__19706;
chunk__19627_19699 = G__19707;
count__19628_19700 = G__19708;
i__19629_19701 = G__19709;
continue;
} else {
var temp__5720__auto___19710 = cljs.core.seq.call(null,seq__19626_19698);
if(temp__5720__auto___19710){
var seq__19626_19711__$1 = temp__5720__auto___19710;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19626_19711__$1)){
var c__4461__auto___19712 = cljs.core.chunk_first.call(null,seq__19626_19711__$1);
var G__19713 = cljs.core.chunk_rest.call(null,seq__19626_19711__$1);
var G__19714 = c__4461__auto___19712;
var G__19715 = cljs.core.count.call(null,c__4461__auto___19712);
var G__19716 = (0);
seq__19626_19698 = G__19713;
chunk__19627_19699 = G__19714;
count__19628_19700 = G__19715;
i__19629_19701 = G__19716;
continue;
} else {
var vec__19633_19717 = cljs.core.first.call(null,seq__19626_19711__$1);
var n_19718 = cljs.core.nth.call(null,vec__19633_19717,(0),null);
var meth_19719 = cljs.core.nth.call(null,vec__19633_19717,(1),null);
var c_19720 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_19719));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_19719))){
cljs.compiler.emitln.call(null,mname_19637,".cljs$core$IFn$_invoke$arity$variadic = ",n_19718,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_19637,".cljs$core$IFn$_invoke$arity$",c_19720," = ",n_19718,";");
}


var G__19721 = cljs.core.next.call(null,seq__19626_19711__$1);
var G__19722 = null;
var G__19723 = (0);
var G__19724 = (0);
seq__19626_19698 = G__19721;
chunk__19627_19699 = G__19722;
count__19628_19700 = G__19723;
i__19629_19701 = G__19724;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_19637,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__19725){
var map__19726 = p__19725;
var map__19726__$1 = (((((!((map__19726 == null))))?(((((map__19726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19726):map__19726);
var statements = cljs.core.get.call(null,map__19726__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__19726__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__19726__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__19728_19732 = cljs.core.seq.call(null,statements);
var chunk__19729_19733 = null;
var count__19730_19734 = (0);
var i__19731_19735 = (0);
while(true){
if((i__19731_19735 < count__19730_19734)){
var s_19736 = cljs.core._nth.call(null,chunk__19729_19733,i__19731_19735);
cljs.compiler.emitln.call(null,s_19736);


var G__19737 = seq__19728_19732;
var G__19738 = chunk__19729_19733;
var G__19739 = count__19730_19734;
var G__19740 = (i__19731_19735 + (1));
seq__19728_19732 = G__19737;
chunk__19729_19733 = G__19738;
count__19730_19734 = G__19739;
i__19731_19735 = G__19740;
continue;
} else {
var temp__5720__auto___19741 = cljs.core.seq.call(null,seq__19728_19732);
if(temp__5720__auto___19741){
var seq__19728_19742__$1 = temp__5720__auto___19741;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19728_19742__$1)){
var c__4461__auto___19743 = cljs.core.chunk_first.call(null,seq__19728_19742__$1);
var G__19744 = cljs.core.chunk_rest.call(null,seq__19728_19742__$1);
var G__19745 = c__4461__auto___19743;
var G__19746 = cljs.core.count.call(null,c__4461__auto___19743);
var G__19747 = (0);
seq__19728_19732 = G__19744;
chunk__19729_19733 = G__19745;
count__19730_19734 = G__19746;
i__19731_19735 = G__19747;
continue;
} else {
var s_19748 = cljs.core.first.call(null,seq__19728_19742__$1);
cljs.compiler.emitln.call(null,s_19748);


var G__19749 = cljs.core.next.call(null,seq__19728_19742__$1);
var G__19750 = null;
var G__19751 = (0);
var G__19752 = (0);
seq__19728_19732 = G__19749;
chunk__19729_19733 = G__19750;
count__19730_19734 = G__19751;
i__19731_19735 = G__19752;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__19753){
var map__19754 = p__19753;
var map__19754__$1 = (((((!((map__19754 == null))))?(((((map__19754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19754):map__19754);
var try$ = cljs.core.get.call(null,map__19754__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__19754__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__19754__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__19754__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__19754__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__19756,is_loop){
var map__19757 = p__19756;
var map__19757__$1 = (((((!((map__19757 == null))))?(((((map__19757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19757):map__19757);
var expr = cljs.core.get.call(null,map__19757__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__19757__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__19757__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__19759_19769 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__19760_19770 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR__orig_val__19759_19769,context,map__19757,map__19757__$1,expr,bindings,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__19759_19769,context,map__19757,map__19757__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__19760_19770;

try{var seq__19761_19771 = cljs.core.seq.call(null,bindings);
var chunk__19762_19772 = null;
var count__19763_19773 = (0);
var i__19764_19774 = (0);
while(true){
if((i__19764_19774 < count__19763_19773)){
var map__19765_19775 = cljs.core._nth.call(null,chunk__19762_19772,i__19764_19774);
var map__19765_19776__$1 = (((((!((map__19765_19775 == null))))?(((((map__19765_19775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19765_19775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19765_19775):map__19765_19775);
var binding_19777 = map__19765_19776__$1;
var init_19778 = cljs.core.get.call(null,map__19765_19776__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_19777);

cljs.compiler.emitln.call(null," = ",init_19778,";");


var G__19779 = seq__19761_19771;
var G__19780 = chunk__19762_19772;
var G__19781 = count__19763_19773;
var G__19782 = (i__19764_19774 + (1));
seq__19761_19771 = G__19779;
chunk__19762_19772 = G__19780;
count__19763_19773 = G__19781;
i__19764_19774 = G__19782;
continue;
} else {
var temp__5720__auto___19783 = cljs.core.seq.call(null,seq__19761_19771);
if(temp__5720__auto___19783){
var seq__19761_19784__$1 = temp__5720__auto___19783;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19761_19784__$1)){
var c__4461__auto___19785 = cljs.core.chunk_first.call(null,seq__19761_19784__$1);
var G__19786 = cljs.core.chunk_rest.call(null,seq__19761_19784__$1);
var G__19787 = c__4461__auto___19785;
var G__19788 = cljs.core.count.call(null,c__4461__auto___19785);
var G__19789 = (0);
seq__19761_19771 = G__19786;
chunk__19762_19772 = G__19787;
count__19763_19773 = G__19788;
i__19764_19774 = G__19789;
continue;
} else {
var map__19767_19790 = cljs.core.first.call(null,seq__19761_19784__$1);
var map__19767_19791__$1 = (((((!((map__19767_19790 == null))))?(((((map__19767_19790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19767_19790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19767_19790):map__19767_19790);
var binding_19792 = map__19767_19791__$1;
var init_19793 = cljs.core.get.call(null,map__19767_19791__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_19792);

cljs.compiler.emitln.call(null," = ",init_19793,";");


var G__19794 = cljs.core.next.call(null,seq__19761_19784__$1);
var G__19795 = null;
var G__19796 = (0);
var G__19797 = (0);
seq__19761_19771 = G__19794;
chunk__19762_19772 = G__19795;
count__19763_19773 = G__19796;
i__19764_19774 = G__19797;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__19759_19769;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__19798){
var map__19799 = p__19798;
var map__19799__$1 = (((((!((map__19799 == null))))?(((((map__19799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19799):map__19799);
var frame = cljs.core.get.call(null,map__19799__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__19799__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__19799__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4518__auto___19801 = cljs.core.count.call(null,exprs);
var i_19802 = (0);
while(true){
if((i_19802 < n__4518__auto___19801)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_19802)," = ",exprs.call(null,i_19802),";");

var G__19803 = (i_19802 + (1));
i_19802 = G__19803;
continue;
} else {
}
break;
}

var n__4518__auto___19804 = cljs.core.count.call(null,exprs);
var i_19805 = (0);
while(true){
if((i_19805 < n__4518__auto___19804)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_19805))," = ",temps.call(null,i_19805),";");

var G__19806 = (i_19805 + (1));
i_19805 = G__19806;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__19807){
var map__19808 = p__19807;
var map__19808__$1 = (((((!((map__19808 == null))))?(((((map__19808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19808):map__19808);
var expr = cljs.core.get.call(null,map__19808__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__19808__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__19808__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__19810_19818 = cljs.core.seq.call(null,bindings);
var chunk__19811_19819 = null;
var count__19812_19820 = (0);
var i__19813_19821 = (0);
while(true){
if((i__19813_19821 < count__19812_19820)){
var map__19814_19822 = cljs.core._nth.call(null,chunk__19811_19819,i__19813_19821);
var map__19814_19823__$1 = (((((!((map__19814_19822 == null))))?(((((map__19814_19822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19814_19822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19814_19822):map__19814_19822);
var binding_19824 = map__19814_19823__$1;
var init_19825 = cljs.core.get.call(null,map__19814_19823__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_19824)," = ",init_19825,";");


var G__19826 = seq__19810_19818;
var G__19827 = chunk__19811_19819;
var G__19828 = count__19812_19820;
var G__19829 = (i__19813_19821 + (1));
seq__19810_19818 = G__19826;
chunk__19811_19819 = G__19827;
count__19812_19820 = G__19828;
i__19813_19821 = G__19829;
continue;
} else {
var temp__5720__auto___19830 = cljs.core.seq.call(null,seq__19810_19818);
if(temp__5720__auto___19830){
var seq__19810_19831__$1 = temp__5720__auto___19830;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19810_19831__$1)){
var c__4461__auto___19832 = cljs.core.chunk_first.call(null,seq__19810_19831__$1);
var G__19833 = cljs.core.chunk_rest.call(null,seq__19810_19831__$1);
var G__19834 = c__4461__auto___19832;
var G__19835 = cljs.core.count.call(null,c__4461__auto___19832);
var G__19836 = (0);
seq__19810_19818 = G__19833;
chunk__19811_19819 = G__19834;
count__19812_19820 = G__19835;
i__19813_19821 = G__19836;
continue;
} else {
var map__19816_19837 = cljs.core.first.call(null,seq__19810_19831__$1);
var map__19816_19838__$1 = (((((!((map__19816_19837 == null))))?(((((map__19816_19837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19816_19837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19816_19837):map__19816_19837);
var binding_19839 = map__19816_19838__$1;
var init_19840 = cljs.core.get.call(null,map__19816_19838__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_19839)," = ",init_19840,";");


var G__19841 = cljs.core.next.call(null,seq__19810_19831__$1);
var G__19842 = null;
var G__19843 = (0);
var G__19844 = (0);
seq__19810_19818 = G__19841;
chunk__19811_19819 = G__19842;
count__19812_19820 = G__19843;
i__19813_19821 = G__19844;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__19847){
var map__19848 = p__19847;
var map__19848__$1 = (((((!((map__19848 == null))))?(((((map__19848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19848):map__19848);
var expr = map__19848__$1;
var f = cljs.core.get.call(null,map__19848__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__19848__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__19848__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var temp__5720__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,tag));
if(cljs.core.truth_(temp__5720__auto__)){
var ps = temp__5720__auto__;
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
var or__4047__auto____$1 = (function (){var temp__5720__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(temp__5720__auto__)){
var ns_str = temp__5720__auto__;
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
var vec__19850 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__19848,map__19848__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__19848,map__19848__$1,expr,f,args,env){
return (function (p1__19845_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__19845_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__19848,map__19848__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__19848,map__19848__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__19848,map__19848__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__19848,map__19848__$1,expr,f,args,env){
return (function (p1__19846_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__19846_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__19848,map__19848__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__19848,map__19848__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__19850,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__19850,(1),null);
var env__19008__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19008__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_19853 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_19853,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_19854 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_19854,args)),(((mfa_19854 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_19854,args)),"], 0))");
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
var fprop_19855 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_19855," ? ",f__$1,fprop_19855,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_19855," ? ",f__$1,fprop_19855,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19008__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__19856){
var map__19857 = p__19856;
var map__19857__$1 = (((((!((map__19857 == null))))?(((((map__19857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19857):map__19857);
var ctor = cljs.core.get.call(null,map__19857__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__19857__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__19857__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19008__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19008__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19008__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__19859){
var map__19860 = p__19859;
var map__19860__$1 = (((((!((map__19860 == null))))?(((((map__19860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19860):map__19860);
var target = cljs.core.get.call(null,map__19860__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__19860__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__19860__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19008__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19008__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19008__auto__))){
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
var map__19862 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__19862__$1 = (((((!((map__19862 == null))))?(((((map__19862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19862):map__19862);
var options = cljs.core.get.call(null,map__19862__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__19862__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__19863 = options;
var map__19863__$1 = (((((!((map__19863 == null))))?(((((map__19863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19863):map__19863);
var target = cljs.core.get.call(null,map__19863__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__19863__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__19864 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__19869 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__19869__$1 = (((((!((map__19869 == null))))?(((((map__19869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19869):map__19869);
var node_libs = cljs.core.get.call(null,map__19869__$1,true);
var libs_to_load = cljs.core.get.call(null,map__19869__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__19864,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__19864,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__19871_19887 = cljs.core.seq.call(null,libs_to_load);
var chunk__19872_19888 = null;
var count__19873_19889 = (0);
var i__19874_19890 = (0);
while(true){
if((i__19874_19890 < count__19873_19889)){
var lib_19891 = cljs.core._nth.call(null,chunk__19872_19888,i__19874_19890);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_19891)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_19891),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_19891),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_19891),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_19891),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_19891,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_19891),"');");
}

}
}
}


var G__19892 = seq__19871_19887;
var G__19893 = chunk__19872_19888;
var G__19894 = count__19873_19889;
var G__19895 = (i__19874_19890 + (1));
seq__19871_19887 = G__19892;
chunk__19872_19888 = G__19893;
count__19873_19889 = G__19894;
i__19874_19890 = G__19895;
continue;
} else {
var temp__5720__auto___19896 = cljs.core.seq.call(null,seq__19871_19887);
if(temp__5720__auto___19896){
var seq__19871_19897__$1 = temp__5720__auto___19896;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19871_19897__$1)){
var c__4461__auto___19898 = cljs.core.chunk_first.call(null,seq__19871_19897__$1);
var G__19899 = cljs.core.chunk_rest.call(null,seq__19871_19897__$1);
var G__19900 = c__4461__auto___19898;
var G__19901 = cljs.core.count.call(null,c__4461__auto___19898);
var G__19902 = (0);
seq__19871_19887 = G__19899;
chunk__19872_19888 = G__19900;
count__19873_19889 = G__19901;
i__19874_19890 = G__19902;
continue;
} else {
var lib_19903 = cljs.core.first.call(null,seq__19871_19897__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_19903)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_19903),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_19903),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_19903),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_19903),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_19903,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_19903),"');");
}

}
}
}


var G__19904 = cljs.core.next.call(null,seq__19871_19897__$1);
var G__19905 = null;
var G__19906 = (0);
var G__19907 = (0);
seq__19871_19887 = G__19904;
chunk__19872_19888 = G__19905;
count__19873_19889 = G__19906;
i__19874_19890 = G__19907;
continue;
}
} else {
}
}
break;
}

var seq__19875_19908 = cljs.core.seq.call(null,node_libs);
var chunk__19876_19909 = null;
var count__19877_19910 = (0);
var i__19878_19911 = (0);
while(true){
if((i__19878_19911 < count__19877_19910)){
var lib_19912 = cljs.core._nth.call(null,chunk__19876_19909,i__19878_19911);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_19912)," = require('",lib_19912,"');");


var G__19913 = seq__19875_19908;
var G__19914 = chunk__19876_19909;
var G__19915 = count__19877_19910;
var G__19916 = (i__19878_19911 + (1));
seq__19875_19908 = G__19913;
chunk__19876_19909 = G__19914;
count__19877_19910 = G__19915;
i__19878_19911 = G__19916;
continue;
} else {
var temp__5720__auto___19917 = cljs.core.seq.call(null,seq__19875_19908);
if(temp__5720__auto___19917){
var seq__19875_19918__$1 = temp__5720__auto___19917;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19875_19918__$1)){
var c__4461__auto___19919 = cljs.core.chunk_first.call(null,seq__19875_19918__$1);
var G__19920 = cljs.core.chunk_rest.call(null,seq__19875_19918__$1);
var G__19921 = c__4461__auto___19919;
var G__19922 = cljs.core.count.call(null,c__4461__auto___19919);
var G__19923 = (0);
seq__19875_19908 = G__19920;
chunk__19876_19909 = G__19921;
count__19877_19910 = G__19922;
i__19878_19911 = G__19923;
continue;
} else {
var lib_19924 = cljs.core.first.call(null,seq__19875_19918__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_19924)," = require('",lib_19924,"');");


var G__19925 = cljs.core.next.call(null,seq__19875_19918__$1);
var G__19926 = null;
var G__19927 = (0);
var G__19928 = (0);
seq__19875_19908 = G__19925;
chunk__19876_19909 = G__19926;
count__19877_19910 = G__19927;
i__19878_19911 = G__19928;
continue;
}
} else {
}
}
break;
}

var seq__19879_19929 = cljs.core.seq.call(null,global_exports_libs);
var chunk__19880_19930 = null;
var count__19881_19931 = (0);
var i__19882_19932 = (0);
while(true){
if((i__19882_19932 < count__19881_19931)){
var lib_19933 = cljs.core._nth.call(null,chunk__19880_19930,i__19882_19932);
var map__19883_19934 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_19933));
var map__19883_19935__$1 = (((((!((map__19883_19934 == null))))?(((((map__19883_19934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19883_19934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19883_19934):map__19883_19934);
var global_exports_19936 = cljs.core.get.call(null,map__19883_19935__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_19936,lib_19933);


var G__19937 = seq__19879_19929;
var G__19938 = chunk__19880_19930;
var G__19939 = count__19881_19931;
var G__19940 = (i__19882_19932 + (1));
seq__19879_19929 = G__19937;
chunk__19880_19930 = G__19938;
count__19881_19931 = G__19939;
i__19882_19932 = G__19940;
continue;
} else {
var temp__5720__auto___19941 = cljs.core.seq.call(null,seq__19879_19929);
if(temp__5720__auto___19941){
var seq__19879_19942__$1 = temp__5720__auto___19941;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19879_19942__$1)){
var c__4461__auto___19943 = cljs.core.chunk_first.call(null,seq__19879_19942__$1);
var G__19944 = cljs.core.chunk_rest.call(null,seq__19879_19942__$1);
var G__19945 = c__4461__auto___19943;
var G__19946 = cljs.core.count.call(null,c__4461__auto___19943);
var G__19947 = (0);
seq__19879_19929 = G__19944;
chunk__19880_19930 = G__19945;
count__19881_19931 = G__19946;
i__19882_19932 = G__19947;
continue;
} else {
var lib_19948 = cljs.core.first.call(null,seq__19879_19942__$1);
var map__19885_19949 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_19948));
var map__19885_19950__$1 = (((((!((map__19885_19949 == null))))?(((((map__19885_19949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19885_19949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19885_19949):map__19885_19949);
var global_exports_19951 = cljs.core.get.call(null,map__19885_19950__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_19951,lib_19948);


var G__19952 = cljs.core.next.call(null,seq__19879_19942__$1);
var G__19953 = null;
var G__19954 = (0);
var G__19955 = (0);
seq__19879_19929 = G__19952;
chunk__19880_19930 = G__19953;
count__19881_19931 = G__19954;
i__19882_19932 = G__19955;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__19956){
var map__19957 = p__19956;
var map__19957__$1 = (((((!((map__19957 == null))))?(((((map__19957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19957):map__19957);
var name = cljs.core.get.call(null,map__19957__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__19957__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__19957__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__19957__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__19957__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__19957__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__19957__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__19959){
var map__19960 = p__19959;
var map__19960__$1 = (((((!((map__19960 == null))))?(((((map__19960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19960):map__19960);
var name = cljs.core.get.call(null,map__19960__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__19960__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__19960__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__19960__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__19960__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__19960__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__19960__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__19962){
var map__19963 = p__19962;
var map__19963__$1 = (((((!((map__19963 == null))))?(((((map__19963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19963):map__19963);
var t = cljs.core.get.call(null,map__19963__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__19963__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__19963__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__19963__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__19963__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__19965_19983 = cljs.core.seq.call(null,protocols);
var chunk__19966_19984 = null;
var count__19967_19985 = (0);
var i__19968_19986 = (0);
while(true){
if((i__19968_19986 < count__19967_19985)){
var protocol_19987 = cljs.core._nth.call(null,chunk__19966_19984,i__19968_19986);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_19987)),"}");


var G__19988 = seq__19965_19983;
var G__19989 = chunk__19966_19984;
var G__19990 = count__19967_19985;
var G__19991 = (i__19968_19986 + (1));
seq__19965_19983 = G__19988;
chunk__19966_19984 = G__19989;
count__19967_19985 = G__19990;
i__19968_19986 = G__19991;
continue;
} else {
var temp__5720__auto___19992 = cljs.core.seq.call(null,seq__19965_19983);
if(temp__5720__auto___19992){
var seq__19965_19993__$1 = temp__5720__auto___19992;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19965_19993__$1)){
var c__4461__auto___19994 = cljs.core.chunk_first.call(null,seq__19965_19993__$1);
var G__19995 = cljs.core.chunk_rest.call(null,seq__19965_19993__$1);
var G__19996 = c__4461__auto___19994;
var G__19997 = cljs.core.count.call(null,c__4461__auto___19994);
var G__19998 = (0);
seq__19965_19983 = G__19995;
chunk__19966_19984 = G__19996;
count__19967_19985 = G__19997;
i__19968_19986 = G__19998;
continue;
} else {
var protocol_19999 = cljs.core.first.call(null,seq__19965_19993__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_19999)),"}");


var G__20000 = cljs.core.next.call(null,seq__19965_19993__$1);
var G__20001 = null;
var G__20002 = (0);
var G__20003 = (0);
seq__19965_19983 = G__20000;
chunk__19966_19984 = G__20001;
count__19967_19985 = G__20002;
i__19968_19986 = G__20003;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__19969_20004 = cljs.core.seq.call(null,fields__$1);
var chunk__19970_20005 = null;
var count__19971_20006 = (0);
var i__19972_20007 = (0);
while(true){
if((i__19972_20007 < count__19971_20006)){
var fld_20008 = cljs.core._nth.call(null,chunk__19970_20005,i__19972_20007);
cljs.compiler.emitln.call(null,"this.",fld_20008," = ",fld_20008,";");


var G__20009 = seq__19969_20004;
var G__20010 = chunk__19970_20005;
var G__20011 = count__19971_20006;
var G__20012 = (i__19972_20007 + (1));
seq__19969_20004 = G__20009;
chunk__19970_20005 = G__20010;
count__19971_20006 = G__20011;
i__19972_20007 = G__20012;
continue;
} else {
var temp__5720__auto___20013 = cljs.core.seq.call(null,seq__19969_20004);
if(temp__5720__auto___20013){
var seq__19969_20014__$1 = temp__5720__auto___20013;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19969_20014__$1)){
var c__4461__auto___20015 = cljs.core.chunk_first.call(null,seq__19969_20014__$1);
var G__20016 = cljs.core.chunk_rest.call(null,seq__19969_20014__$1);
var G__20017 = c__4461__auto___20015;
var G__20018 = cljs.core.count.call(null,c__4461__auto___20015);
var G__20019 = (0);
seq__19969_20004 = G__20016;
chunk__19970_20005 = G__20017;
count__19971_20006 = G__20018;
i__19972_20007 = G__20019;
continue;
} else {
var fld_20020 = cljs.core.first.call(null,seq__19969_20014__$1);
cljs.compiler.emitln.call(null,"this.",fld_20020," = ",fld_20020,";");


var G__20021 = cljs.core.next.call(null,seq__19969_20014__$1);
var G__20022 = null;
var G__20023 = (0);
var G__20024 = (0);
seq__19969_20004 = G__20021;
chunk__19970_20005 = G__20022;
count__19971_20006 = G__20023;
i__19972_20007 = G__20024;
continue;
}
} else {
}
}
break;
}

var seq__19973_20025 = cljs.core.seq.call(null,pmasks);
var chunk__19974_20026 = null;
var count__19975_20027 = (0);
var i__19976_20028 = (0);
while(true){
if((i__19976_20028 < count__19975_20027)){
var vec__19977_20029 = cljs.core._nth.call(null,chunk__19974_20026,i__19976_20028);
var pno_20030 = cljs.core.nth.call(null,vec__19977_20029,(0),null);
var pmask_20031 = cljs.core.nth.call(null,vec__19977_20029,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_20030,"$ = ",pmask_20031,";");


var G__20032 = seq__19973_20025;
var G__20033 = chunk__19974_20026;
var G__20034 = count__19975_20027;
var G__20035 = (i__19976_20028 + (1));
seq__19973_20025 = G__20032;
chunk__19974_20026 = G__20033;
count__19975_20027 = G__20034;
i__19976_20028 = G__20035;
continue;
} else {
var temp__5720__auto___20036 = cljs.core.seq.call(null,seq__19973_20025);
if(temp__5720__auto___20036){
var seq__19973_20037__$1 = temp__5720__auto___20036;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19973_20037__$1)){
var c__4461__auto___20038 = cljs.core.chunk_first.call(null,seq__19973_20037__$1);
var G__20039 = cljs.core.chunk_rest.call(null,seq__19973_20037__$1);
var G__20040 = c__4461__auto___20038;
var G__20041 = cljs.core.count.call(null,c__4461__auto___20038);
var G__20042 = (0);
seq__19973_20025 = G__20039;
chunk__19974_20026 = G__20040;
count__19975_20027 = G__20041;
i__19976_20028 = G__20042;
continue;
} else {
var vec__19980_20043 = cljs.core.first.call(null,seq__19973_20037__$1);
var pno_20044 = cljs.core.nth.call(null,vec__19980_20043,(0),null);
var pmask_20045 = cljs.core.nth.call(null,vec__19980_20043,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_20044,"$ = ",pmask_20045,";");


var G__20046 = cljs.core.next.call(null,seq__19973_20037__$1);
var G__20047 = null;
var G__20048 = (0);
var G__20049 = (0);
seq__19973_20025 = G__20046;
chunk__19974_20026 = G__20047;
count__19975_20027 = G__20048;
i__19976_20028 = G__20049;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__20050){
var map__20051 = p__20050;
var map__20051__$1 = (((((!((map__20051 == null))))?(((((map__20051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20051):map__20051);
var t = cljs.core.get.call(null,map__20051__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__20051__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__20051__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__20051__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__20051__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__20053_20071 = cljs.core.seq.call(null,protocols);
var chunk__20054_20072 = null;
var count__20055_20073 = (0);
var i__20056_20074 = (0);
while(true){
if((i__20056_20074 < count__20055_20073)){
var protocol_20075 = cljs.core._nth.call(null,chunk__20054_20072,i__20056_20074);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_20075)),"}");


var G__20076 = seq__20053_20071;
var G__20077 = chunk__20054_20072;
var G__20078 = count__20055_20073;
var G__20079 = (i__20056_20074 + (1));
seq__20053_20071 = G__20076;
chunk__20054_20072 = G__20077;
count__20055_20073 = G__20078;
i__20056_20074 = G__20079;
continue;
} else {
var temp__5720__auto___20080 = cljs.core.seq.call(null,seq__20053_20071);
if(temp__5720__auto___20080){
var seq__20053_20081__$1 = temp__5720__auto___20080;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20053_20081__$1)){
var c__4461__auto___20082 = cljs.core.chunk_first.call(null,seq__20053_20081__$1);
var G__20083 = cljs.core.chunk_rest.call(null,seq__20053_20081__$1);
var G__20084 = c__4461__auto___20082;
var G__20085 = cljs.core.count.call(null,c__4461__auto___20082);
var G__20086 = (0);
seq__20053_20071 = G__20083;
chunk__20054_20072 = G__20084;
count__20055_20073 = G__20085;
i__20056_20074 = G__20086;
continue;
} else {
var protocol_20087 = cljs.core.first.call(null,seq__20053_20081__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_20087)),"}");


var G__20088 = cljs.core.next.call(null,seq__20053_20081__$1);
var G__20089 = null;
var G__20090 = (0);
var G__20091 = (0);
seq__20053_20071 = G__20088;
chunk__20054_20072 = G__20089;
count__20055_20073 = G__20090;
i__20056_20074 = G__20091;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__20057_20092 = cljs.core.seq.call(null,fields__$1);
var chunk__20058_20093 = null;
var count__20059_20094 = (0);
var i__20060_20095 = (0);
while(true){
if((i__20060_20095 < count__20059_20094)){
var fld_20096 = cljs.core._nth.call(null,chunk__20058_20093,i__20060_20095);
cljs.compiler.emitln.call(null,"this.",fld_20096," = ",fld_20096,";");


var G__20097 = seq__20057_20092;
var G__20098 = chunk__20058_20093;
var G__20099 = count__20059_20094;
var G__20100 = (i__20060_20095 + (1));
seq__20057_20092 = G__20097;
chunk__20058_20093 = G__20098;
count__20059_20094 = G__20099;
i__20060_20095 = G__20100;
continue;
} else {
var temp__5720__auto___20101 = cljs.core.seq.call(null,seq__20057_20092);
if(temp__5720__auto___20101){
var seq__20057_20102__$1 = temp__5720__auto___20101;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20057_20102__$1)){
var c__4461__auto___20103 = cljs.core.chunk_first.call(null,seq__20057_20102__$1);
var G__20104 = cljs.core.chunk_rest.call(null,seq__20057_20102__$1);
var G__20105 = c__4461__auto___20103;
var G__20106 = cljs.core.count.call(null,c__4461__auto___20103);
var G__20107 = (0);
seq__20057_20092 = G__20104;
chunk__20058_20093 = G__20105;
count__20059_20094 = G__20106;
i__20060_20095 = G__20107;
continue;
} else {
var fld_20108 = cljs.core.first.call(null,seq__20057_20102__$1);
cljs.compiler.emitln.call(null,"this.",fld_20108," = ",fld_20108,";");


var G__20109 = cljs.core.next.call(null,seq__20057_20102__$1);
var G__20110 = null;
var G__20111 = (0);
var G__20112 = (0);
seq__20057_20092 = G__20109;
chunk__20058_20093 = G__20110;
count__20059_20094 = G__20111;
i__20060_20095 = G__20112;
continue;
}
} else {
}
}
break;
}

var seq__20061_20113 = cljs.core.seq.call(null,pmasks);
var chunk__20062_20114 = null;
var count__20063_20115 = (0);
var i__20064_20116 = (0);
while(true){
if((i__20064_20116 < count__20063_20115)){
var vec__20065_20117 = cljs.core._nth.call(null,chunk__20062_20114,i__20064_20116);
var pno_20118 = cljs.core.nth.call(null,vec__20065_20117,(0),null);
var pmask_20119 = cljs.core.nth.call(null,vec__20065_20117,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_20118,"$ = ",pmask_20119,";");


var G__20120 = seq__20061_20113;
var G__20121 = chunk__20062_20114;
var G__20122 = count__20063_20115;
var G__20123 = (i__20064_20116 + (1));
seq__20061_20113 = G__20120;
chunk__20062_20114 = G__20121;
count__20063_20115 = G__20122;
i__20064_20116 = G__20123;
continue;
} else {
var temp__5720__auto___20124 = cljs.core.seq.call(null,seq__20061_20113);
if(temp__5720__auto___20124){
var seq__20061_20125__$1 = temp__5720__auto___20124;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20061_20125__$1)){
var c__4461__auto___20126 = cljs.core.chunk_first.call(null,seq__20061_20125__$1);
var G__20127 = cljs.core.chunk_rest.call(null,seq__20061_20125__$1);
var G__20128 = c__4461__auto___20126;
var G__20129 = cljs.core.count.call(null,c__4461__auto___20126);
var G__20130 = (0);
seq__20061_20113 = G__20127;
chunk__20062_20114 = G__20128;
count__20063_20115 = G__20129;
i__20064_20116 = G__20130;
continue;
} else {
var vec__20068_20131 = cljs.core.first.call(null,seq__20061_20125__$1);
var pno_20132 = cljs.core.nth.call(null,vec__20068_20131,(0),null);
var pmask_20133 = cljs.core.nth.call(null,vec__20068_20131,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_20132,"$ = ",pmask_20133,";");


var G__20134 = cljs.core.next.call(null,seq__20061_20125__$1);
var G__20135 = null;
var G__20136 = (0);
var G__20137 = (0);
seq__20061_20113 = G__20134;
chunk__20062_20114 = G__20135;
count__20063_20115 = G__20136;
i__20064_20116 = G__20137;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__20138){
var map__20139 = p__20138;
var map__20139__$1 = (((((!((map__20139 == null))))?(((((map__20139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20139):map__20139);
var target = cljs.core.get.call(null,map__20139__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__20139__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__20139__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__20139__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__20139__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19008__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19008__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19008__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__20141){
var map__20142 = p__20141;
var map__20142__$1 = (((((!((map__20142 == null))))?(((((map__20142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20142):map__20142);
var op = cljs.core.get.call(null,map__20142__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__20142__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__20142__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__20142__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__20142__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4036__auto__ = code;
if(cljs.core.truth_(and__4036__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4036__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__19008__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19008__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19008__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__20148 = cljs.core.seq.call(null,table);
var chunk__20149 = null;
var count__20150 = (0);
var i__20151 = (0);
while(true){
if((i__20151 < count__20150)){
var vec__20152 = cljs.core._nth.call(null,chunk__20149,i__20151);
var sym = cljs.core.nth.call(null,vec__20152,(0),null);
var value = cljs.core.nth.call(null,vec__20152,(1),null);
var ns_20158 = cljs.core.namespace.call(null,sym);
var name_20159 = cljs.core.name.call(null,sym);
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


var G__20160 = seq__20148;
var G__20161 = chunk__20149;
var G__20162 = count__20150;
var G__20163 = (i__20151 + (1));
seq__20148 = G__20160;
chunk__20149 = G__20161;
count__20150 = G__20162;
i__20151 = G__20163;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__20148);
if(temp__5720__auto__){
var seq__20148__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20148__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__20148__$1);
var G__20164 = cljs.core.chunk_rest.call(null,seq__20148__$1);
var G__20165 = c__4461__auto__;
var G__20166 = cljs.core.count.call(null,c__4461__auto__);
var G__20167 = (0);
seq__20148 = G__20164;
chunk__20149 = G__20165;
count__20150 = G__20166;
i__20151 = G__20167;
continue;
} else {
var vec__20155 = cljs.core.first.call(null,seq__20148__$1);
var sym = cljs.core.nth.call(null,vec__20155,(0),null);
var value = cljs.core.nth.call(null,vec__20155,(1),null);
var ns_20168 = cljs.core.namespace.call(null,sym);
var name_20169 = cljs.core.name.call(null,sym);
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


var G__20170 = cljs.core.next.call(null,seq__20148__$1);
var G__20171 = null;
var G__20172 = (0);
var G__20173 = (0);
seq__20148 = G__20170;
chunk__20149 = G__20171;
count__20150 = G__20172;
i__20151 = G__20173;
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
var G__20175 = arguments.length;
switch (G__20175) {
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
var k_20180 = cljs.core.first.call(null,ks);
var vec__20176_20181 = cljs.core.conj.call(null,prefix,k_20180);
var top_20182 = cljs.core.nth.call(null,vec__20176_20181,(0),null);
var prefix_SINGLEQUOTE__20183 = vec__20176_20181;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_20180)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__20183) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_20182)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_20182)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__20183)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_20182);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__20183)),";");
}
} else {
}

var m_20184 = cljs.core.get.call(null,externs,k_20180);
if(cljs.core.empty_QMARK_.call(null,m_20184)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__20183,m_20184,top_level,known_externs);
}

var G__20185 = cljs.core.next.call(null,ks);
ks = G__20185;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map
