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
var map__7495 = s;
var map__7495__$1 = (((((!((map__7495 == null))))?(((((map__7495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7495):map__7495);
var name = cljs.core.get.call(null,map__7495__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__7495__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__7498 = info;
var map__7499 = G__7498;
var map__7499__$1 = (((((!((map__7499 == null))))?(((((map__7499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7499):map__7499);
var shadow = cljs.core.get.call(null,map__7499__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__7498__$1 = G__7498;
while(true){
var d__$2 = d__$1;
var map__7501 = G__7498__$1;
var map__7501__$1 = (((((!((map__7501 == null))))?(((((map__7501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7501):map__7501);
var shadow__$1 = cljs.core.get.call(null,map__7501__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__7503 = (d__$2 + (1));
var G__7504 = shadow__$1;
d__$1 = G__7503;
G__7498__$1 = G__7504;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__7505){
var map__7506 = p__7505;
var map__7506__$1 = (((((!((map__7506 == null))))?(((((map__7506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7506):map__7506);
var name_var = map__7506__$1;
var name = cljs.core.get.call(null,map__7506__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__7506__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__7508 = info;
var map__7508__$1 = (((((!((map__7508 == null))))?(((((map__7508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7508):map__7508);
var ns = cljs.core.get.call(null,map__7508__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__7508__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__7511 = arguments.length;
switch (G__7511) {
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
var G__7513 = cp;
switch (G__7513) {
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
var seq__7515_7519 = cljs.core.seq.call(null,s);
var chunk__7516_7520 = null;
var count__7517_7521 = (0);
var i__7518_7522 = (0);
while(true){
if((i__7518_7522 < count__7517_7521)){
var c_7523 = cljs.core._nth.call(null,chunk__7516_7520,i__7518_7522);
sb.append(cljs.compiler.escape_char.call(null,c_7523));


var G__7524 = seq__7515_7519;
var G__7525 = chunk__7516_7520;
var G__7526 = count__7517_7521;
var G__7527 = (i__7518_7522 + (1));
seq__7515_7519 = G__7524;
chunk__7516_7520 = G__7525;
count__7517_7521 = G__7526;
i__7518_7522 = G__7527;
continue;
} else {
var temp__5735__auto___7528 = cljs.core.seq.call(null,seq__7515_7519);
if(temp__5735__auto___7528){
var seq__7515_7529__$1 = temp__5735__auto___7528;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7515_7529__$1)){
var c__4461__auto___7530 = cljs.core.chunk_first.call(null,seq__7515_7529__$1);
var G__7531 = cljs.core.chunk_rest.call(null,seq__7515_7529__$1);
var G__7532 = c__4461__auto___7530;
var G__7533 = cljs.core.count.call(null,c__4461__auto___7530);
var G__7534 = (0);
seq__7515_7519 = G__7531;
chunk__7516_7520 = G__7532;
count__7517_7521 = G__7533;
i__7518_7522 = G__7534;
continue;
} else {
var c_7535 = cljs.core.first.call(null,seq__7515_7529__$1);
sb.append(cljs.compiler.escape_char.call(null,c_7535));


var G__7536 = cljs.core.next.call(null,seq__7515_7529__$1);
var G__7537 = null;
var G__7538 = (0);
var G__7539 = (0);
seq__7515_7519 = G__7536;
chunk__7516_7520 = G__7537;
count__7517_7521 = G__7538;
i__7518_7522 = G__7539;
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
var map__7540_7545 = ast;
var map__7540_7546__$1 = (((((!((map__7540_7545 == null))))?(((((map__7540_7545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7540_7545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7540_7545):map__7540_7545);
var env_7547 = cljs.core.get.call(null,map__7540_7546__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_7547))){
var map__7542_7548 = env_7547;
var map__7542_7549__$1 = (((((!((map__7542_7548 == null))))?(((((map__7542_7548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7542_7548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7542_7548):map__7542_7548);
var line_7550 = cljs.core.get.call(null,map__7542_7549__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_7551 = cljs.core.get.call(null,map__7542_7549__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__7542_7548,map__7542_7549__$1,line_7550,column_7551,map__7540_7545,map__7540_7546__$1,env_7547){
return (function (m){
var minfo = (function (){var G__7544 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__7544,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__7544;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_7550 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__7542_7548,map__7542_7549__$1,line_7550,column_7551,map__7540_7545,map__7540_7546__$1,env_7547){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_7551)?(column_7551 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__7542_7548,map__7542_7549__$1,line_7550,column_7551,map__7540_7545,map__7540_7546__$1,env_7547){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__7542_7548,map__7542_7549__$1,line_7550,column_7551,map__7540_7545,map__7540_7546__$1,env_7547))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__7542_7548,map__7542_7549__$1,line_7550,column_7551,map__7540_7545,map__7540_7546__$1,env_7547))
,cljs.core.sorted_map.call(null)));
});})(map__7542_7548,map__7542_7549__$1,line_7550,column_7551,map__7540_7545,map__7540_7546__$1,env_7547))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__7560 = arguments.length;
switch (G__7560) {
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
var len__4641__auto___7567 = arguments.length;
var i__4642__auto___7568 = (0);
while(true){
if((i__4642__auto___7568 < len__4641__auto___7567)){
args_arr__4662__auto__.push((arguments[i__4642__auto___7568]));

var G__7569 = (i__4642__auto___7568 + (1));
i__4642__auto___7568 = G__7569;
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
var s_7570 = (function (){var G__7561 = a;
if((!(typeof a === 'string'))){
return G__7561.toString();
} else {
return G__7561;
}
})();
var temp__5739__auto___7571 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___7571 == null)){
} else {
var sm_data_7572 = temp__5739__auto___7571;
cljs.core.swap_BANG_.call(null,sm_data_7572,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),((function (sm_data_7572,temp__5739__auto___7571,s_7570){
return (function (p1__7552_SHARP_){
return (p1__7552_SHARP_ + s_7570.length);
});})(sm_data_7572,temp__5739__auto___7571,s_7570))
);
}

cljs.core.print.call(null,s_7570);

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

var seq__7562 = cljs.core.seq.call(null,xs);
var chunk__7563 = null;
var count__7564 = (0);
var i__7565 = (0);
while(true){
if((i__7565 < count__7564)){
var x = cljs.core._nth.call(null,chunk__7563,i__7565);
cljs.compiler.emits.call(null,x);


var G__7573 = seq__7562;
var G__7574 = chunk__7563;
var G__7575 = count__7564;
var G__7576 = (i__7565 + (1));
seq__7562 = G__7573;
chunk__7563 = G__7574;
count__7564 = G__7575;
i__7565 = G__7576;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__7562);
if(temp__5735__auto__){
var seq__7562__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7562__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__7562__$1);
var G__7577 = cljs.core.chunk_rest.call(null,seq__7562__$1);
var G__7578 = c__4461__auto__;
var G__7579 = cljs.core.count.call(null,c__4461__auto__);
var G__7580 = (0);
seq__7562 = G__7577;
chunk__7563 = G__7578;
count__7564 = G__7579;
i__7565 = G__7580;
continue;
} else {
var x = cljs.core.first.call(null,seq__7562__$1);
cljs.compiler.emits.call(null,x);


var G__7581 = cljs.core.next.call(null,seq__7562__$1);
var G__7582 = null;
var G__7583 = (0);
var G__7584 = (0);
seq__7562 = G__7581;
chunk__7563 = G__7582;
count__7564 = G__7583;
i__7565 = G__7584;
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
cljs.compiler.emits.cljs$lang$applyTo = (function (seq7554){
var G__7555 = cljs.core.first.call(null,seq7554);
var seq7554__$1 = cljs.core.next.call(null,seq7554);
var G__7556 = cljs.core.first.call(null,seq7554__$1);
var seq7554__$2 = cljs.core.next.call(null,seq7554__$1);
var G__7557 = cljs.core.first.call(null,seq7554__$2);
var seq7554__$3 = cljs.core.next.call(null,seq7554__$2);
var G__7558 = cljs.core.first.call(null,seq7554__$3);
var seq7554__$4 = cljs.core.next.call(null,seq7554__$3);
var G__7559 = cljs.core.first.call(null,seq7554__$4);
var seq7554__$5 = cljs.core.next.call(null,seq7554__$4);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7555,G__7556,G__7557,G__7558,G__7559,seq7554__$5);
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__7585){
var map__7586 = p__7585;
var map__7586__$1 = (((((!((map__7586 == null))))?(((((map__7586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7586):map__7586);
var m = map__7586__$1;
var gen_line = cljs.core.get.call(null,map__7586__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__7595 = arguments.length;
switch (G__7595) {
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
var len__4641__auto___7601 = arguments.length;
var i__4642__auto___7602 = (0);
while(true){
if((i__4642__auto___7602 < len__4641__auto___7601)){
args_arr__4662__auto__.push((arguments[i__4642__auto___7602]));

var G__7603 = (i__4642__auto___7602 + (1));
i__4642__auto___7602 = G__7603;
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

var seq__7596_7604 = cljs.core.seq.call(null,xs);
var chunk__7597_7605 = null;
var count__7598_7606 = (0);
var i__7599_7607 = (0);
while(true){
if((i__7599_7607 < count__7598_7606)){
var x_7608 = cljs.core._nth.call(null,chunk__7597_7605,i__7599_7607);
cljs.compiler.emits.call(null,x_7608);


var G__7609 = seq__7596_7604;
var G__7610 = chunk__7597_7605;
var G__7611 = count__7598_7606;
var G__7612 = (i__7599_7607 + (1));
seq__7596_7604 = G__7609;
chunk__7597_7605 = G__7610;
count__7598_7606 = G__7611;
i__7599_7607 = G__7612;
continue;
} else {
var temp__5735__auto___7613 = cljs.core.seq.call(null,seq__7596_7604);
if(temp__5735__auto___7613){
var seq__7596_7614__$1 = temp__5735__auto___7613;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7596_7614__$1)){
var c__4461__auto___7615 = cljs.core.chunk_first.call(null,seq__7596_7614__$1);
var G__7616 = cljs.core.chunk_rest.call(null,seq__7596_7614__$1);
var G__7617 = c__4461__auto___7615;
var G__7618 = cljs.core.count.call(null,c__4461__auto___7615);
var G__7619 = (0);
seq__7596_7604 = G__7616;
chunk__7597_7605 = G__7617;
count__7598_7606 = G__7618;
i__7599_7607 = G__7619;
continue;
} else {
var x_7620 = cljs.core.first.call(null,seq__7596_7614__$1);
cljs.compiler.emits.call(null,x_7620);


var G__7621 = cljs.core.next.call(null,seq__7596_7614__$1);
var G__7622 = null;
var G__7623 = (0);
var G__7624 = (0);
seq__7596_7604 = G__7621;
chunk__7597_7605 = G__7622;
count__7598_7606 = G__7623;
i__7599_7607 = G__7624;
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
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq7589){
var G__7590 = cljs.core.first.call(null,seq7589);
var seq7589__$1 = cljs.core.next.call(null,seq7589);
var G__7591 = cljs.core.first.call(null,seq7589__$1);
var seq7589__$2 = cljs.core.next.call(null,seq7589__$1);
var G__7592 = cljs.core.first.call(null,seq7589__$2);
var seq7589__$3 = cljs.core.next.call(null,seq7589__$2);
var G__7593 = cljs.core.first.call(null,seq7589__$3);
var seq7589__$4 = cljs.core.next.call(null,seq7589__$3);
var G__7594 = cljs.core.first.call(null,seq7589__$4);
var seq7589__$5 = cljs.core.next.call(null,seq7589__$4);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7590,G__7591,G__7592,G__7593,G__7594,seq7589__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__7625_7629 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__7626_7630 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__7627_7631 = true;
var _STAR_print_fn_STAR__temp_val__7628_7632 = ((function (_STAR_print_newline_STAR__orig_val__7625_7629,_STAR_print_fn_STAR__orig_val__7626_7630,_STAR_print_newline_STAR__temp_val__7627_7631,sb__4572__auto__){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__7625_7629,_STAR_print_fn_STAR__orig_val__7626_7630,_STAR_print_newline_STAR__temp_val__7627_7631,sb__4572__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__7627_7631;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__7628_7632;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__7626_7630;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__7625_7629;
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
var vec__7633 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__7633,(0),null);
var name = cljs.core.nth.call(null,vec__7633,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,((function (vec__7633,ns,name){
return (function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
});})(vec__7633,ns,name))
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
var vec__7636 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__7636,(0),null);
var flags = cljs.core.nth.call(null,vec__7636,(1),null);
var pattern = cljs.core.nth.call(null,vec__7636,(2),null);
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
return (function (p1__7639_SHARP_){
return ((function (items){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__7639_SHARP_);
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
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__7641){
var map__7642 = p__7641;
var map__7642__$1 = (((((!((map__7642 == null))))?(((((map__7642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7642):map__7642);
var ast = map__7642__$1;
var info = cljs.core.get.call(null,map__7642__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__7642__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__7642__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__7644 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__7644__$1 = (((((!((map__7644 == null))))?(((((map__7644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7644):map__7644);
var cenv = map__7644__$1;
var options = cljs.core.get.call(null,map__7644__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__7646 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__4036__auto__;
}
})())){
return clojure.set.difference.call(null,G__7646,cljs.analyzer.es5_allowed);
} else {
return G__7646;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4047__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__7647 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__7647,reserved);
} else {
return G__7647;
}
})();
var env__7487__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7487__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__7648_7649 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__7648_7650__$1 = (((G__7648_7649 instanceof cljs.core.Keyword))?G__7648_7649.fqn:null);
switch (G__7648_7650__$1) {
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7487__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__7652){
var map__7653 = p__7652;
var map__7653__$1 = (((((!((map__7653 == null))))?(((((map__7653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7653):map__7653);
var arg = map__7653__$1;
var env = cljs.core.get.call(null,map__7653__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__7653__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__7653__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__7653__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__7655 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__7655__$1 = (((((!((map__7655 == null))))?(((((map__7655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7655):map__7655);
var name = cljs.core.get.call(null,map__7655__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__7487__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7487__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7487__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__7657){
var map__7658 = p__7657;
var map__7658__$1 = (((((!((map__7658 == null))))?(((((map__7658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7658):map__7658);
var expr = cljs.core.get.call(null,map__7658__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__7658__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__7658__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__7487__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7487__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7487__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,((function (keys__$1){
return (function (p1__7660_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__7660_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__7661){
var map__7662 = p__7661;
var map__7662__$1 = (((((!((map__7662 == null))))?(((((map__7662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7662):map__7662);
var env = cljs.core.get.call(null,map__7662__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__7662__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__7662__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__7487__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7487__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7487__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__7664){
var map__7665 = p__7664;
var map__7665__$1 = (((((!((map__7665 == null))))?(((((map__7665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7665):map__7665);
var items = cljs.core.get.call(null,map__7665__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__7665__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__7487__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7487__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7487__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,((function (items__$1){
return (function (p1__7667_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__7667_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__7668){
var map__7669 = p__7668;
var map__7669__$1 = (((((!((map__7669 == null))))?(((((map__7669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7669):map__7669);
var items = cljs.core.get.call(null,map__7669__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__7669__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__7487__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7487__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7487__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5735__auto___7687 = cljs.core.seq.call(null,items);
if(temp__5735__auto___7687){
var items_7688__$1 = temp__5735__auto___7687;
var vec__7671_7689 = items_7688__$1;
var seq__7672_7690 = cljs.core.seq.call(null,vec__7671_7689);
var first__7673_7691 = cljs.core.first.call(null,seq__7672_7690);
var seq__7672_7692__$1 = cljs.core.next.call(null,seq__7672_7690);
var vec__7674_7693 = first__7673_7691;
var k_7694 = cljs.core.nth.call(null,vec__7674_7693,(0),null);
var v_7695 = cljs.core.nth.call(null,vec__7674_7693,(1),null);
var r_7696 = seq__7672_7692__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_7694),"\": ",emit_js_object_val.call(null,v_7695));

var seq__7677_7697 = cljs.core.seq.call(null,r_7696);
var chunk__7678_7698 = null;
var count__7679_7699 = (0);
var i__7680_7700 = (0);
while(true){
if((i__7680_7700 < count__7679_7699)){
var vec__7681_7701 = cljs.core._nth.call(null,chunk__7678_7698,i__7680_7700);
var k_7702__$1 = cljs.core.nth.call(null,vec__7681_7701,(0),null);
var v_7703__$1 = cljs.core.nth.call(null,vec__7681_7701,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_7702__$1),"\": ",emit_js_object_val.call(null,v_7703__$1));


var G__7704 = seq__7677_7697;
var G__7705 = chunk__7678_7698;
var G__7706 = count__7679_7699;
var G__7707 = (i__7680_7700 + (1));
seq__7677_7697 = G__7704;
chunk__7678_7698 = G__7705;
count__7679_7699 = G__7706;
i__7680_7700 = G__7707;
continue;
} else {
var temp__5735__auto___7708__$1 = cljs.core.seq.call(null,seq__7677_7697);
if(temp__5735__auto___7708__$1){
var seq__7677_7709__$1 = temp__5735__auto___7708__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7677_7709__$1)){
var c__4461__auto___7710 = cljs.core.chunk_first.call(null,seq__7677_7709__$1);
var G__7711 = cljs.core.chunk_rest.call(null,seq__7677_7709__$1);
var G__7712 = c__4461__auto___7710;
var G__7713 = cljs.core.count.call(null,c__4461__auto___7710);
var G__7714 = (0);
seq__7677_7697 = G__7711;
chunk__7678_7698 = G__7712;
count__7679_7699 = G__7713;
i__7680_7700 = G__7714;
continue;
} else {
var vec__7684_7715 = cljs.core.first.call(null,seq__7677_7709__$1);
var k_7716__$1 = cljs.core.nth.call(null,vec__7684_7715,(0),null);
var v_7717__$1 = cljs.core.nth.call(null,vec__7684_7715,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_7716__$1),"\": ",emit_js_object_val.call(null,v_7717__$1));


var G__7718 = cljs.core.next.call(null,seq__7677_7709__$1);
var G__7719 = null;
var G__7720 = (0);
var G__7721 = (0);
seq__7677_7697 = G__7718;
chunk__7678_7698 = G__7719;
count__7679_7699 = G__7720;
i__7680_7700 = G__7721;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__7722){
var map__7723 = p__7722;
var map__7723__$1 = (((((!((map__7723 == null))))?(((((map__7723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7723):map__7723);
var keys = cljs.core.get.call(null,map__7723__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__7723__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__7723__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__7487__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7487__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7487__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__7725){
var map__7726 = p__7725;
var map__7726__$1 = (((((!((map__7726 == null))))?(((((map__7726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7726):map__7726);
var items = cljs.core.get.call(null,map__7726__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__7726__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__7487__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7487__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7487__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__7728){
var map__7729 = p__7728;
var map__7729__$1 = (((((!((map__7729 == null))))?(((((map__7729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7729):map__7729);
var expr = cljs.core.get.call(null,map__7729__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__7731){
var map__7732 = p__7731;
var map__7732__$1 = (((((!((map__7732 == null))))?(((((map__7732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7732.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7732):map__7732);
var form = cljs.core.get.call(null,map__7732__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__7732__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__7487__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7487__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7487__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__7734 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__7734__$1 = (((((!((map__7734 == null))))?(((((map__7734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7734):map__7734);
var op = cljs.core.get.call(null,map__7734__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__7734__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__7734__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__7736 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__7736__$1 = (((((!((map__7736 == null))))?(((((map__7736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7736):map__7736);
var op = cljs.core.get.call(null,map__7736__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__7736__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__7736__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__7738){
var map__7739 = p__7738;
var map__7739__$1 = (((((!((map__7739 == null))))?(((((map__7739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7739):map__7739);
var test = cljs.core.get.call(null,map__7739__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__7739__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__7739__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__7739__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__7739__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__7741){
var map__7742 = p__7741;
var map__7742__$1 = (((((!((map__7742 == null))))?(((((map__7742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7742):map__7742);
var v = cljs.core.get.call(null,map__7742__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__7742__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__7742__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__7742__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__7744_7764 = cljs.core.seq.call(null,nodes);
var chunk__7745_7765 = null;
var count__7746_7766 = (0);
var i__7747_7767 = (0);
while(true){
if((i__7747_7767 < count__7746_7766)){
var map__7748_7768 = cljs.core._nth.call(null,chunk__7745_7765,i__7747_7767);
var map__7748_7769__$1 = (((((!((map__7748_7768 == null))))?(((((map__7748_7768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7748_7768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7748_7768):map__7748_7768);
var ts_7770 = cljs.core.get.call(null,map__7748_7769__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__7749_7771 = cljs.core.get.call(null,map__7748_7769__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__7749_7772__$1 = (((((!((map__7749_7771 == null))))?(((((map__7749_7771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7749_7771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7749_7771):map__7749_7771);
var then_7773 = cljs.core.get.call(null,map__7749_7772__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__7752_7774 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_7770));
var chunk__7753_7775 = null;
var count__7754_7776 = (0);
var i__7755_7777 = (0);
while(true){
if((i__7755_7777 < count__7754_7776)){
var test_7778 = cljs.core._nth.call(null,chunk__7753_7775,i__7755_7777);
cljs.compiler.emitln.call(null,"case ",test_7778,":");


var G__7779 = seq__7752_7774;
var G__7780 = chunk__7753_7775;
var G__7781 = count__7754_7776;
var G__7782 = (i__7755_7777 + (1));
seq__7752_7774 = G__7779;
chunk__7753_7775 = G__7780;
count__7754_7776 = G__7781;
i__7755_7777 = G__7782;
continue;
} else {
var temp__5735__auto___7783 = cljs.core.seq.call(null,seq__7752_7774);
if(temp__5735__auto___7783){
var seq__7752_7784__$1 = temp__5735__auto___7783;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7752_7784__$1)){
var c__4461__auto___7785 = cljs.core.chunk_first.call(null,seq__7752_7784__$1);
var G__7786 = cljs.core.chunk_rest.call(null,seq__7752_7784__$1);
var G__7787 = c__4461__auto___7785;
var G__7788 = cljs.core.count.call(null,c__4461__auto___7785);
var G__7789 = (0);
seq__7752_7774 = G__7786;
chunk__7753_7775 = G__7787;
count__7754_7776 = G__7788;
i__7755_7777 = G__7789;
continue;
} else {
var test_7790 = cljs.core.first.call(null,seq__7752_7784__$1);
cljs.compiler.emitln.call(null,"case ",test_7790,":");


var G__7791 = cljs.core.next.call(null,seq__7752_7784__$1);
var G__7792 = null;
var G__7793 = (0);
var G__7794 = (0);
seq__7752_7774 = G__7791;
chunk__7753_7775 = G__7792;
count__7754_7776 = G__7793;
i__7755_7777 = G__7794;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_7773);
} else {
cljs.compiler.emitln.call(null,then_7773);
}

cljs.compiler.emitln.call(null,"break;");


var G__7795 = seq__7744_7764;
var G__7796 = chunk__7745_7765;
var G__7797 = count__7746_7766;
var G__7798 = (i__7747_7767 + (1));
seq__7744_7764 = G__7795;
chunk__7745_7765 = G__7796;
count__7746_7766 = G__7797;
i__7747_7767 = G__7798;
continue;
} else {
var temp__5735__auto___7799 = cljs.core.seq.call(null,seq__7744_7764);
if(temp__5735__auto___7799){
var seq__7744_7800__$1 = temp__5735__auto___7799;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7744_7800__$1)){
var c__4461__auto___7801 = cljs.core.chunk_first.call(null,seq__7744_7800__$1);
var G__7802 = cljs.core.chunk_rest.call(null,seq__7744_7800__$1);
var G__7803 = c__4461__auto___7801;
var G__7804 = cljs.core.count.call(null,c__4461__auto___7801);
var G__7805 = (0);
seq__7744_7764 = G__7802;
chunk__7745_7765 = G__7803;
count__7746_7766 = G__7804;
i__7747_7767 = G__7805;
continue;
} else {
var map__7756_7806 = cljs.core.first.call(null,seq__7744_7800__$1);
var map__7756_7807__$1 = (((((!((map__7756_7806 == null))))?(((((map__7756_7806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7756_7806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7756_7806):map__7756_7806);
var ts_7808 = cljs.core.get.call(null,map__7756_7807__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__7757_7809 = cljs.core.get.call(null,map__7756_7807__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__7757_7810__$1 = (((((!((map__7757_7809 == null))))?(((((map__7757_7809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7757_7809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7757_7809):map__7757_7809);
var then_7811 = cljs.core.get.call(null,map__7757_7810__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__7760_7812 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_7808));
var chunk__7761_7813 = null;
var count__7762_7814 = (0);
var i__7763_7815 = (0);
while(true){
if((i__7763_7815 < count__7762_7814)){
var test_7816 = cljs.core._nth.call(null,chunk__7761_7813,i__7763_7815);
cljs.compiler.emitln.call(null,"case ",test_7816,":");


var G__7817 = seq__7760_7812;
var G__7818 = chunk__7761_7813;
var G__7819 = count__7762_7814;
var G__7820 = (i__7763_7815 + (1));
seq__7760_7812 = G__7817;
chunk__7761_7813 = G__7818;
count__7762_7814 = G__7819;
i__7763_7815 = G__7820;
continue;
} else {
var temp__5735__auto___7821__$1 = cljs.core.seq.call(null,seq__7760_7812);
if(temp__5735__auto___7821__$1){
var seq__7760_7822__$1 = temp__5735__auto___7821__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7760_7822__$1)){
var c__4461__auto___7823 = cljs.core.chunk_first.call(null,seq__7760_7822__$1);
var G__7824 = cljs.core.chunk_rest.call(null,seq__7760_7822__$1);
var G__7825 = c__4461__auto___7823;
var G__7826 = cljs.core.count.call(null,c__4461__auto___7823);
var G__7827 = (0);
seq__7760_7812 = G__7824;
chunk__7761_7813 = G__7825;
count__7762_7814 = G__7826;
i__7763_7815 = G__7827;
continue;
} else {
var test_7828 = cljs.core.first.call(null,seq__7760_7822__$1);
cljs.compiler.emitln.call(null,"case ",test_7828,":");


var G__7829 = cljs.core.next.call(null,seq__7760_7822__$1);
var G__7830 = null;
var G__7831 = (0);
var G__7832 = (0);
seq__7760_7812 = G__7829;
chunk__7761_7813 = G__7830;
count__7762_7814 = G__7831;
i__7763_7815 = G__7832;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_7811);
} else {
cljs.compiler.emitln.call(null,then_7811);
}

cljs.compiler.emitln.call(null,"break;");


var G__7833 = cljs.core.next.call(null,seq__7744_7800__$1);
var G__7834 = null;
var G__7835 = (0);
var G__7836 = (0);
seq__7744_7764 = G__7833;
chunk__7745_7765 = G__7834;
count__7746_7766 = G__7835;
i__7747_7767 = G__7836;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__7837){
var map__7838 = p__7837;
var map__7838__$1 = (((((!((map__7838 == null))))?(((((map__7838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7838):map__7838);
var throw$ = cljs.core.get.call(null,map__7838__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__7838__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__7841 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__7841,(0),null);
var rstr = cljs.core.nth.call(null,vec__7841,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__7841,fstr,rstr,ret_t,axstr){
return (function (p1__7840_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__7840_SHARP_);
});})(idx,vec__7841,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__7844 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7844),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__7844;
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
return (function (p1__7845_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__7845_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__7846 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__7847 = cljs.core.seq.call(null,vec__7846);
var first__7848 = cljs.core.first.call(null,seq__7847);
var seq__7847__$1 = cljs.core.next.call(null,seq__7847);
var p = first__7848;
var first__7848__$1 = cljs.core.first.call(null,seq__7847__$1);
var seq__7847__$2 = cljs.core.next.call(null,seq__7847__$1);
var ts = first__7848__$1;
var first__7848__$2 = cljs.core.first.call(null,seq__7847__$2);
var seq__7847__$3 = cljs.core.next.call(null,seq__7847__$2);
var n = first__7848__$2;
var xs = seq__7847__$3;
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
var vec__7849 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__7850 = cljs.core.seq.call(null,vec__7849);
var first__7851 = cljs.core.first.call(null,seq__7850);
var seq__7850__$1 = cljs.core.next.call(null,seq__7850);
var p = first__7851;
var first__7851__$1 = cljs.core.first.call(null,seq__7850__$1);
var seq__7850__$2 = cljs.core.next.call(null,seq__7850__$1);
var ts = first__7851__$1;
var xs = seq__7850__$2;
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
var G__7854 = arguments.length;
switch (G__7854) {
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
var vec__7862 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__7852_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__7852_SHARP_);
} else {
return p1__7852_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__7863 = cljs.core.seq.call(null,vec__7862);
var first__7864 = cljs.core.first.call(null,seq__7863);
var seq__7863__$1 = cljs.core.next.call(null,seq__7863);
var x = first__7864;
var ys = seq__7863__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__7865 = cljs.core.seq.call(null,ys);
var chunk__7866 = null;
var count__7867 = (0);
var i__7868 = (0);
while(true){
if((i__7868 < count__7867)){
var next_line = cljs.core._nth.call(null,chunk__7866,i__7868);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__7874 = seq__7865;
var G__7875 = chunk__7866;
var G__7876 = count__7867;
var G__7877 = (i__7868 + (1));
seq__7865 = G__7874;
chunk__7866 = G__7875;
count__7867 = G__7876;
i__7868 = G__7877;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__7865);
if(temp__5735__auto__){
var seq__7865__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7865__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__7865__$1);
var G__7878 = cljs.core.chunk_rest.call(null,seq__7865__$1);
var G__7879 = c__4461__auto__;
var G__7880 = cljs.core.count.call(null,c__4461__auto__);
var G__7881 = (0);
seq__7865 = G__7878;
chunk__7866 = G__7879;
count__7867 = G__7880;
i__7868 = G__7881;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__7865__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__7882 = cljs.core.next.call(null,seq__7865__$1);
var G__7883 = null;
var G__7884 = (0);
var G__7885 = (0);
seq__7865 = G__7882;
chunk__7866 = G__7883;
count__7867 = G__7884;
i__7868 = G__7885;
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

var seq__7869_7886 = cljs.core.seq.call(null,docs__$2);
var chunk__7870_7887 = null;
var count__7871_7888 = (0);
var i__7872_7889 = (0);
while(true){
if((i__7872_7889 < count__7871_7888)){
var e_7890 = cljs.core._nth.call(null,chunk__7870_7887,i__7872_7889);
if(cljs.core.truth_(e_7890)){
print_comment_lines.call(null,e_7890);
} else {
}


var G__7891 = seq__7869_7886;
var G__7892 = chunk__7870_7887;
var G__7893 = count__7871_7888;
var G__7894 = (i__7872_7889 + (1));
seq__7869_7886 = G__7891;
chunk__7870_7887 = G__7892;
count__7871_7888 = G__7893;
i__7872_7889 = G__7894;
continue;
} else {
var temp__5735__auto___7895 = cljs.core.seq.call(null,seq__7869_7886);
if(temp__5735__auto___7895){
var seq__7869_7896__$1 = temp__5735__auto___7895;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7869_7896__$1)){
var c__4461__auto___7897 = cljs.core.chunk_first.call(null,seq__7869_7896__$1);
var G__7898 = cljs.core.chunk_rest.call(null,seq__7869_7896__$1);
var G__7899 = c__4461__auto___7897;
var G__7900 = cljs.core.count.call(null,c__4461__auto___7897);
var G__7901 = (0);
seq__7869_7886 = G__7898;
chunk__7870_7887 = G__7899;
count__7871_7888 = G__7900;
i__7872_7889 = G__7901;
continue;
} else {
var e_7902 = cljs.core.first.call(null,seq__7869_7896__$1);
if(cljs.core.truth_(e_7902)){
print_comment_lines.call(null,e_7902);
} else {
}


var G__7903 = cljs.core.next.call(null,seq__7869_7896__$1);
var G__7904 = null;
var G__7905 = (0);
var G__7906 = (0);
seq__7869_7886 = G__7903;
chunk__7870_7887 = G__7904;
count__7871_7888 = G__7905;
i__7872_7889 = G__7906;
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
return (function (p1__7908_SHARP_){
return goog.string.startsWith(p1__7908_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__7909){
var map__7910 = p__7909;
var map__7910__$1 = (((((!((map__7910 == null))))?(((((map__7910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7910):map__7910);
var doc = cljs.core.get.call(null,map__7910__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__7910__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__7910__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.call(null,map__7910__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__7910__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__7910__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__7910__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__7910__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__7910__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__7912){
var map__7913 = p__7912;
var map__7913__$1 = (((((!((map__7913 == null))))?(((((map__7913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7913):map__7913);
var name = cljs.core.get.call(null,map__7913__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__7913__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__7913__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__7915_7933 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__7916_7934 = null;
var count__7917_7935 = (0);
var i__7918_7936 = (0);
while(true){
if((i__7918_7936 < count__7917_7935)){
var vec__7919_7937 = cljs.core._nth.call(null,chunk__7916_7934,i__7918_7936);
var i_7938 = cljs.core.nth.call(null,vec__7919_7937,(0),null);
var param_7939 = cljs.core.nth.call(null,vec__7919_7937,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_7939);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__7940 = seq__7915_7933;
var G__7941 = chunk__7916_7934;
var G__7942 = count__7917_7935;
var G__7943 = (i__7918_7936 + (1));
seq__7915_7933 = G__7940;
chunk__7916_7934 = G__7941;
count__7917_7935 = G__7942;
i__7918_7936 = G__7943;
continue;
} else {
var temp__5735__auto___7944 = cljs.core.seq.call(null,seq__7915_7933);
if(temp__5735__auto___7944){
var seq__7915_7945__$1 = temp__5735__auto___7944;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7915_7945__$1)){
var c__4461__auto___7946 = cljs.core.chunk_first.call(null,seq__7915_7945__$1);
var G__7947 = cljs.core.chunk_rest.call(null,seq__7915_7945__$1);
var G__7948 = c__4461__auto___7946;
var G__7949 = cljs.core.count.call(null,c__4461__auto___7946);
var G__7950 = (0);
seq__7915_7933 = G__7947;
chunk__7916_7934 = G__7948;
count__7917_7935 = G__7949;
i__7918_7936 = G__7950;
continue;
} else {
var vec__7922_7951 = cljs.core.first.call(null,seq__7915_7945__$1);
var i_7952 = cljs.core.nth.call(null,vec__7922_7951,(0),null);
var param_7953 = cljs.core.nth.call(null,vec__7922_7951,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_7953);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__7954 = cljs.core.next.call(null,seq__7915_7945__$1);
var G__7955 = null;
var G__7956 = (0);
var G__7957 = (0);
seq__7915_7933 = G__7954;
chunk__7916_7934 = G__7955;
count__7917_7935 = G__7956;
i__7918_7936 = G__7957;
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

var seq__7925_7958 = cljs.core.seq.call(null,params);
var chunk__7926_7959 = null;
var count__7927_7960 = (0);
var i__7928_7961 = (0);
while(true){
if((i__7928_7961 < count__7927_7960)){
var param_7962 = cljs.core._nth.call(null,chunk__7926_7959,i__7928_7961);
cljs.compiler.emit.call(null,param_7962);

if(cljs.core._EQ_.call(null,param_7962,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7963 = seq__7925_7958;
var G__7964 = chunk__7926_7959;
var G__7965 = count__7927_7960;
var G__7966 = (i__7928_7961 + (1));
seq__7925_7958 = G__7963;
chunk__7926_7959 = G__7964;
count__7927_7960 = G__7965;
i__7928_7961 = G__7966;
continue;
} else {
var temp__5735__auto___7967 = cljs.core.seq.call(null,seq__7925_7958);
if(temp__5735__auto___7967){
var seq__7925_7968__$1 = temp__5735__auto___7967;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7925_7968__$1)){
var c__4461__auto___7969 = cljs.core.chunk_first.call(null,seq__7925_7968__$1);
var G__7970 = cljs.core.chunk_rest.call(null,seq__7925_7968__$1);
var G__7971 = c__4461__auto___7969;
var G__7972 = cljs.core.count.call(null,c__4461__auto___7969);
var G__7973 = (0);
seq__7925_7958 = G__7970;
chunk__7926_7959 = G__7971;
count__7927_7960 = G__7972;
i__7928_7961 = G__7973;
continue;
} else {
var param_7974 = cljs.core.first.call(null,seq__7925_7968__$1);
cljs.compiler.emit.call(null,param_7974);

if(cljs.core._EQ_.call(null,param_7974,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7975 = cljs.core.next.call(null,seq__7925_7968__$1);
var G__7976 = null;
var G__7977 = (0);
var G__7978 = (0);
seq__7925_7958 = G__7975;
chunk__7926_7959 = G__7976;
count__7927_7960 = G__7977;
i__7928_7961 = G__7978;
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

var seq__7929_7979 = cljs.core.seq.call(null,params);
var chunk__7930_7980 = null;
var count__7931_7981 = (0);
var i__7932_7982 = (0);
while(true){
if((i__7932_7982 < count__7931_7981)){
var param_7983 = cljs.core._nth.call(null,chunk__7930_7980,i__7932_7982);
cljs.compiler.emit.call(null,param_7983);

if(cljs.core._EQ_.call(null,param_7983,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7984 = seq__7929_7979;
var G__7985 = chunk__7930_7980;
var G__7986 = count__7931_7981;
var G__7987 = (i__7932_7982 + (1));
seq__7929_7979 = G__7984;
chunk__7930_7980 = G__7985;
count__7931_7981 = G__7986;
i__7932_7982 = G__7987;
continue;
} else {
var temp__5735__auto___7988 = cljs.core.seq.call(null,seq__7929_7979);
if(temp__5735__auto___7988){
var seq__7929_7989__$1 = temp__5735__auto___7988;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7929_7989__$1)){
var c__4461__auto___7990 = cljs.core.chunk_first.call(null,seq__7929_7989__$1);
var G__7991 = cljs.core.chunk_rest.call(null,seq__7929_7989__$1);
var G__7992 = c__4461__auto___7990;
var G__7993 = cljs.core.count.call(null,c__4461__auto___7990);
var G__7994 = (0);
seq__7929_7979 = G__7991;
chunk__7930_7980 = G__7992;
count__7931_7981 = G__7993;
i__7932_7982 = G__7994;
continue;
} else {
var param_7995 = cljs.core.first.call(null,seq__7929_7989__$1);
cljs.compiler.emit.call(null,param_7995);

if(cljs.core._EQ_.call(null,param_7995,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7996 = cljs.core.next.call(null,seq__7929_7989__$1);
var G__7997 = null;
var G__7998 = (0);
var G__7999 = (0);
seq__7929_7979 = G__7996;
chunk__7930_7980 = G__7997;
count__7931_7981 = G__7998;
i__7932_7982 = G__7999;
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
var seq__8000 = cljs.core.seq.call(null,params);
var chunk__8001 = null;
var count__8002 = (0);
var i__8003 = (0);
while(true){
if((i__8003 < count__8002)){
var param = cljs.core._nth.call(null,chunk__8001,i__8003);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__8004 = seq__8000;
var G__8005 = chunk__8001;
var G__8006 = count__8002;
var G__8007 = (i__8003 + (1));
seq__8000 = G__8004;
chunk__8001 = G__8005;
count__8002 = G__8006;
i__8003 = G__8007;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__8000);
if(temp__5735__auto__){
var seq__8000__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8000__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__8000__$1);
var G__8008 = cljs.core.chunk_rest.call(null,seq__8000__$1);
var G__8009 = c__4461__auto__;
var G__8010 = cljs.core.count.call(null,c__4461__auto__);
var G__8011 = (0);
seq__8000 = G__8008;
chunk__8001 = G__8009;
count__8002 = G__8010;
i__8003 = G__8011;
continue;
} else {
var param = cljs.core.first.call(null,seq__8000__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__8012 = cljs.core.next.call(null,seq__8000__$1);
var G__8013 = null;
var G__8014 = (0);
var G__8015 = (0);
seq__8000 = G__8012;
chunk__8001 = G__8013;
count__8002 = G__8014;
i__8003 = G__8015;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__8016){
var map__8017 = p__8016;
var map__8017__$1 = (((((!((map__8017 == null))))?(((((map__8017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8017):map__8017);
var expr = cljs.core.get.call(null,map__8017__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__8017__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__8017__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__8017__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__8017__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__8017__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__7487__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7487__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7487__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__8019){
var map__8020 = p__8019;
var map__8020__$1 = (((((!((map__8020 == null))))?(((((map__8020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8020):map__8020);
var f = map__8020__$1;
var expr = cljs.core.get.call(null,map__8020__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__8020__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__8020__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__8020__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__8020__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__8020__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__8020__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__8020__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__7487__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7487__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_8030__$1 = (function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_8031 = cljs.compiler.munge.call(null,name_8030__$1);
var delegate_name_8032 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_8031),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_8032," = function (");

var seq__8022_8033 = cljs.core.seq.call(null,params);
var chunk__8023_8034 = null;
var count__8024_8035 = (0);
var i__8025_8036 = (0);
while(true){
if((i__8025_8036 < count__8024_8035)){
var param_8037 = cljs.core._nth.call(null,chunk__8023_8034,i__8025_8036);
cljs.compiler.emit.call(null,param_8037);

if(cljs.core._EQ_.call(null,param_8037,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__8038 = seq__8022_8033;
var G__8039 = chunk__8023_8034;
var G__8040 = count__8024_8035;
var G__8041 = (i__8025_8036 + (1));
seq__8022_8033 = G__8038;
chunk__8023_8034 = G__8039;
count__8024_8035 = G__8040;
i__8025_8036 = G__8041;
continue;
} else {
var temp__5735__auto___8042 = cljs.core.seq.call(null,seq__8022_8033);
if(temp__5735__auto___8042){
var seq__8022_8043__$1 = temp__5735__auto___8042;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8022_8043__$1)){
var c__4461__auto___8044 = cljs.core.chunk_first.call(null,seq__8022_8043__$1);
var G__8045 = cljs.core.chunk_rest.call(null,seq__8022_8043__$1);
var G__8046 = c__4461__auto___8044;
var G__8047 = cljs.core.count.call(null,c__4461__auto___8044);
var G__8048 = (0);
seq__8022_8033 = G__8045;
chunk__8023_8034 = G__8046;
count__8024_8035 = G__8047;
i__8025_8036 = G__8048;
continue;
} else {
var param_8049 = cljs.core.first.call(null,seq__8022_8043__$1);
cljs.compiler.emit.call(null,param_8049);

if(cljs.core._EQ_.call(null,param_8049,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__8050 = cljs.core.next.call(null,seq__8022_8043__$1);
var G__8051 = null;
var G__8052 = (0);
var G__8053 = (0);
seq__8022_8033 = G__8050;
chunk__8023_8034 = G__8051;
count__8024_8035 = G__8052;
i__8025_8036 = G__8053;
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

cljs.compiler.emitln.call(null,"var ",mname_8031," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_8054 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_8054,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_8032,".call(this,");

var seq__8026_8055 = cljs.core.seq.call(null,params);
var chunk__8027_8056 = null;
var count__8028_8057 = (0);
var i__8029_8058 = (0);
while(true){
if((i__8029_8058 < count__8028_8057)){
var param_8059 = cljs.core._nth.call(null,chunk__8027_8056,i__8029_8058);
cljs.compiler.emit.call(null,param_8059);

if(cljs.core._EQ_.call(null,param_8059,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__8060 = seq__8026_8055;
var G__8061 = chunk__8027_8056;
var G__8062 = count__8028_8057;
var G__8063 = (i__8029_8058 + (1));
seq__8026_8055 = G__8060;
chunk__8027_8056 = G__8061;
count__8028_8057 = G__8062;
i__8029_8058 = G__8063;
continue;
} else {
var temp__5735__auto___8064 = cljs.core.seq.call(null,seq__8026_8055);
if(temp__5735__auto___8064){
var seq__8026_8065__$1 = temp__5735__auto___8064;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8026_8065__$1)){
var c__4461__auto___8066 = cljs.core.chunk_first.call(null,seq__8026_8065__$1);
var G__8067 = cljs.core.chunk_rest.call(null,seq__8026_8065__$1);
var G__8068 = c__4461__auto___8066;
var G__8069 = cljs.core.count.call(null,c__4461__auto___8066);
var G__8070 = (0);
seq__8026_8055 = G__8067;
chunk__8027_8056 = G__8068;
count__8028_8057 = G__8069;
i__8029_8058 = G__8070;
continue;
} else {
var param_8071 = cljs.core.first.call(null,seq__8026_8065__$1);
cljs.compiler.emit.call(null,param_8071);

if(cljs.core._EQ_.call(null,param_8071,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__8072 = cljs.core.next.call(null,seq__8026_8065__$1);
var G__8073 = null;
var G__8074 = (0);
var G__8075 = (0);
seq__8026_8055 = G__8072;
chunk__8027_8056 = G__8073;
count__8028_8057 = G__8074;
i__8029_8058 = G__8075;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_8031,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_8031,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_8030__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_8031,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_8032,";");

cljs.compiler.emitln.call(null,"return ",mname_8031,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7487__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__8079){
var map__8080 = p__8079;
var map__8080__$1 = (((((!((map__8080 == null))))?(((((map__8080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8080):map__8080);
var variadic = cljs.core.get.call(null,map__8080__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__8080__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__8080__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__8080__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__8080__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__8080__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__8080__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__8080,map__8080__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__8076_SHARP_){
var and__4036__auto__ = p1__8076_SHARP_;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__8076_SHARP_));
} else {
return and__4036__auto__;
}
});})(map__8080,map__8080__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
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
var name_8115__$1 = (function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_8116 = cljs.compiler.munge.call(null,name_8115__$1);
var maxparams_8117 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_8118 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_8115__$1,mname_8116,maxparams_8117,loop_locals,map__8080,map__8080__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_8116),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_8115__$1,mname_8116,maxparams_8117,loop_locals,map__8080,map__8080__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_8119 = cljs.core.sort_by.call(null,((function (name_8115__$1,mname_8116,maxparams_8117,mmap_8118,loop_locals,map__8080,map__8080__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__8077_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__8077_SHARP_)));
});})(name_8115__$1,mname_8116,maxparams_8117,mmap_8118,loop_locals,map__8080,map__8080__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_8118));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_8116," = null;");

var seq__8082_8120 = cljs.core.seq.call(null,ms_8119);
var chunk__8083_8121 = null;
var count__8084_8122 = (0);
var i__8085_8123 = (0);
while(true){
if((i__8085_8123 < count__8084_8122)){
var vec__8086_8124 = cljs.core._nth.call(null,chunk__8083_8121,i__8085_8123);
var n_8125 = cljs.core.nth.call(null,vec__8086_8124,(0),null);
var meth_8126 = cljs.core.nth.call(null,vec__8086_8124,(1),null);
cljs.compiler.emits.call(null,"var ",n_8125," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_8126))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_8126);
} else {
cljs.compiler.emit_fn_method.call(null,meth_8126);
}

cljs.compiler.emitln.call(null,";");


var G__8127 = seq__8082_8120;
var G__8128 = chunk__8083_8121;
var G__8129 = count__8084_8122;
var G__8130 = (i__8085_8123 + (1));
seq__8082_8120 = G__8127;
chunk__8083_8121 = G__8128;
count__8084_8122 = G__8129;
i__8085_8123 = G__8130;
continue;
} else {
var temp__5735__auto___8131 = cljs.core.seq.call(null,seq__8082_8120);
if(temp__5735__auto___8131){
var seq__8082_8132__$1 = temp__5735__auto___8131;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8082_8132__$1)){
var c__4461__auto___8133 = cljs.core.chunk_first.call(null,seq__8082_8132__$1);
var G__8134 = cljs.core.chunk_rest.call(null,seq__8082_8132__$1);
var G__8135 = c__4461__auto___8133;
var G__8136 = cljs.core.count.call(null,c__4461__auto___8133);
var G__8137 = (0);
seq__8082_8120 = G__8134;
chunk__8083_8121 = G__8135;
count__8084_8122 = G__8136;
i__8085_8123 = G__8137;
continue;
} else {
var vec__8089_8138 = cljs.core.first.call(null,seq__8082_8132__$1);
var n_8139 = cljs.core.nth.call(null,vec__8089_8138,(0),null);
var meth_8140 = cljs.core.nth.call(null,vec__8089_8138,(1),null);
cljs.compiler.emits.call(null,"var ",n_8139," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_8140))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_8140);
} else {
cljs.compiler.emit_fn_method.call(null,meth_8140);
}

cljs.compiler.emitln.call(null,";");


var G__8141 = cljs.core.next.call(null,seq__8082_8132__$1);
var G__8142 = null;
var G__8143 = (0);
var G__8144 = (0);
seq__8082_8120 = G__8141;
chunk__8083_8121 = G__8142;
count__8084_8122 = G__8143;
i__8085_8123 = G__8144;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_8116," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_8117),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_8117)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_8117));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__8092_8145 = cljs.core.seq.call(null,ms_8119);
var chunk__8093_8146 = null;
var count__8094_8147 = (0);
var i__8095_8148 = (0);
while(true){
if((i__8095_8148 < count__8094_8147)){
var vec__8096_8149 = cljs.core._nth.call(null,chunk__8093_8146,i__8095_8148);
var n_8150 = cljs.core.nth.call(null,vec__8096_8149,(0),null);
var meth_8151 = cljs.core.nth.call(null,vec__8096_8149,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_8151))){
cljs.compiler.emitln.call(null,"default:");

var restarg_8152 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_8152," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_8153 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_8152," = new cljs.core.IndexedSeq(",a_8153,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_8150,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_8117)),(((cljs.core.count.call(null,maxparams_8117) > (1)))?", ":null),restarg_8152,");");
} else {
var pcnt_8154 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_8151));
cljs.compiler.emitln.call(null,"case ",pcnt_8154,":");

cljs.compiler.emitln.call(null,"return ",n_8150,".call(this",(((pcnt_8154 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_8154,maxparams_8117)),null,(1),null)),(2),null))),");");
}


var G__8155 = seq__8092_8145;
var G__8156 = chunk__8093_8146;
var G__8157 = count__8094_8147;
var G__8158 = (i__8095_8148 + (1));
seq__8092_8145 = G__8155;
chunk__8093_8146 = G__8156;
count__8094_8147 = G__8157;
i__8095_8148 = G__8158;
continue;
} else {
var temp__5735__auto___8159 = cljs.core.seq.call(null,seq__8092_8145);
if(temp__5735__auto___8159){
var seq__8092_8160__$1 = temp__5735__auto___8159;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8092_8160__$1)){
var c__4461__auto___8161 = cljs.core.chunk_first.call(null,seq__8092_8160__$1);
var G__8162 = cljs.core.chunk_rest.call(null,seq__8092_8160__$1);
var G__8163 = c__4461__auto___8161;
var G__8164 = cljs.core.count.call(null,c__4461__auto___8161);
var G__8165 = (0);
seq__8092_8145 = G__8162;
chunk__8093_8146 = G__8163;
count__8094_8147 = G__8164;
i__8095_8148 = G__8165;
continue;
} else {
var vec__8099_8166 = cljs.core.first.call(null,seq__8092_8160__$1);
var n_8167 = cljs.core.nth.call(null,vec__8099_8166,(0),null);
var meth_8168 = cljs.core.nth.call(null,vec__8099_8166,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_8168))){
cljs.compiler.emitln.call(null,"default:");

var restarg_8169 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_8169," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_8170 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_8169," = new cljs.core.IndexedSeq(",a_8170,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_8167,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_8117)),(((cljs.core.count.call(null,maxparams_8117) > (1)))?", ":null),restarg_8169,");");
} else {
var pcnt_8171 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_8168));
cljs.compiler.emitln.call(null,"case ",pcnt_8171,":");

cljs.compiler.emitln.call(null,"return ",n_8167,".call(this",(((pcnt_8171 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_8171,maxparams_8117)),null,(1),null)),(2),null))),");");
}


var G__8172 = cljs.core.next.call(null,seq__8092_8160__$1);
var G__8173 = null;
var G__8174 = (0);
var G__8175 = (0);
seq__8092_8145 = G__8172;
chunk__8093_8146 = G__8173;
count__8094_8147 = G__8174;
i__8095_8148 = G__8175;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_8176 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_8119)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_8176,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_8116,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_8116,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_8115__$1,mname_8116,maxparams_8117,mmap_8118,ms_8119,loop_locals,map__8080,map__8080__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__8078_SHARP_){
var vec__8102 = p1__8078_SHARP_;
var n = cljs.core.nth.call(null,vec__8102,(0),null);
var m = cljs.core.nth.call(null,vec__8102,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_8115__$1,mname_8116,maxparams_8117,mmap_8118,ms_8119,loop_locals,map__8080,map__8080__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_8119),".cljs$lang$applyTo;");
} else {
}

var seq__8105_8177 = cljs.core.seq.call(null,ms_8119);
var chunk__8106_8178 = null;
var count__8107_8179 = (0);
var i__8108_8180 = (0);
while(true){
if((i__8108_8180 < count__8107_8179)){
var vec__8109_8181 = cljs.core._nth.call(null,chunk__8106_8178,i__8108_8180);
var n_8182 = cljs.core.nth.call(null,vec__8109_8181,(0),null);
var meth_8183 = cljs.core.nth.call(null,vec__8109_8181,(1),null);
var c_8184 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_8183));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_8183))){
cljs.compiler.emitln.call(null,mname_8116,".cljs$core$IFn$_invoke$arity$variadic = ",n_8182,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_8116,".cljs$core$IFn$_invoke$arity$",c_8184," = ",n_8182,";");
}


var G__8185 = seq__8105_8177;
var G__8186 = chunk__8106_8178;
var G__8187 = count__8107_8179;
var G__8188 = (i__8108_8180 + (1));
seq__8105_8177 = G__8185;
chunk__8106_8178 = G__8186;
count__8107_8179 = G__8187;
i__8108_8180 = G__8188;
continue;
} else {
var temp__5735__auto___8189 = cljs.core.seq.call(null,seq__8105_8177);
if(temp__5735__auto___8189){
var seq__8105_8190__$1 = temp__5735__auto___8189;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8105_8190__$1)){
var c__4461__auto___8191 = cljs.core.chunk_first.call(null,seq__8105_8190__$1);
var G__8192 = cljs.core.chunk_rest.call(null,seq__8105_8190__$1);
var G__8193 = c__4461__auto___8191;
var G__8194 = cljs.core.count.call(null,c__4461__auto___8191);
var G__8195 = (0);
seq__8105_8177 = G__8192;
chunk__8106_8178 = G__8193;
count__8107_8179 = G__8194;
i__8108_8180 = G__8195;
continue;
} else {
var vec__8112_8196 = cljs.core.first.call(null,seq__8105_8190__$1);
var n_8197 = cljs.core.nth.call(null,vec__8112_8196,(0),null);
var meth_8198 = cljs.core.nth.call(null,vec__8112_8196,(1),null);
var c_8199 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_8198));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_8198))){
cljs.compiler.emitln.call(null,mname_8116,".cljs$core$IFn$_invoke$arity$variadic = ",n_8197,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_8116,".cljs$core$IFn$_invoke$arity$",c_8199," = ",n_8197,";");
}


var G__8200 = cljs.core.next.call(null,seq__8105_8190__$1);
var G__8201 = null;
var G__8202 = (0);
var G__8203 = (0);
seq__8105_8177 = G__8200;
chunk__8106_8178 = G__8201;
count__8107_8179 = G__8202;
i__8108_8180 = G__8203;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_8116,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__8204){
var map__8205 = p__8204;
var map__8205__$1 = (((((!((map__8205 == null))))?(((((map__8205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8205):map__8205);
var statements = cljs.core.get.call(null,map__8205__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__8205__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__8205__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__8207_8211 = cljs.core.seq.call(null,statements);
var chunk__8208_8212 = null;
var count__8209_8213 = (0);
var i__8210_8214 = (0);
while(true){
if((i__8210_8214 < count__8209_8213)){
var s_8215 = cljs.core._nth.call(null,chunk__8208_8212,i__8210_8214);
cljs.compiler.emitln.call(null,s_8215);


var G__8216 = seq__8207_8211;
var G__8217 = chunk__8208_8212;
var G__8218 = count__8209_8213;
var G__8219 = (i__8210_8214 + (1));
seq__8207_8211 = G__8216;
chunk__8208_8212 = G__8217;
count__8209_8213 = G__8218;
i__8210_8214 = G__8219;
continue;
} else {
var temp__5735__auto___8220 = cljs.core.seq.call(null,seq__8207_8211);
if(temp__5735__auto___8220){
var seq__8207_8221__$1 = temp__5735__auto___8220;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8207_8221__$1)){
var c__4461__auto___8222 = cljs.core.chunk_first.call(null,seq__8207_8221__$1);
var G__8223 = cljs.core.chunk_rest.call(null,seq__8207_8221__$1);
var G__8224 = c__4461__auto___8222;
var G__8225 = cljs.core.count.call(null,c__4461__auto___8222);
var G__8226 = (0);
seq__8207_8211 = G__8223;
chunk__8208_8212 = G__8224;
count__8209_8213 = G__8225;
i__8210_8214 = G__8226;
continue;
} else {
var s_8227 = cljs.core.first.call(null,seq__8207_8221__$1);
cljs.compiler.emitln.call(null,s_8227);


var G__8228 = cljs.core.next.call(null,seq__8207_8221__$1);
var G__8229 = null;
var G__8230 = (0);
var G__8231 = (0);
seq__8207_8211 = G__8228;
chunk__8208_8212 = G__8229;
count__8209_8213 = G__8230;
i__8210_8214 = G__8231;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__8232){
var map__8233 = p__8232;
var map__8233__$1 = (((((!((map__8233 == null))))?(((((map__8233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8233):map__8233);
var try$ = cljs.core.get.call(null,map__8233__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__8233__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__8233__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__8233__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__8233__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__8235,is_loop){
var map__8236 = p__8235;
var map__8236__$1 = (((((!((map__8236 == null))))?(((((map__8236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8236):map__8236);
var expr = cljs.core.get.call(null,map__8236__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__8236__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__8236__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__8238_8248 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__8239_8249 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR__orig_val__8238_8248,context,map__8236,map__8236__$1,expr,bindings,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__8238_8248,context,map__8236,map__8236__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__8239_8249;

try{var seq__8240_8250 = cljs.core.seq.call(null,bindings);
var chunk__8241_8251 = null;
var count__8242_8252 = (0);
var i__8243_8253 = (0);
while(true){
if((i__8243_8253 < count__8242_8252)){
var map__8244_8254 = cljs.core._nth.call(null,chunk__8241_8251,i__8243_8253);
var map__8244_8255__$1 = (((((!((map__8244_8254 == null))))?(((((map__8244_8254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8244_8254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8244_8254):map__8244_8254);
var binding_8256 = map__8244_8255__$1;
var init_8257 = cljs.core.get.call(null,map__8244_8255__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_8256);

cljs.compiler.emitln.call(null," = ",init_8257,";");


var G__8258 = seq__8240_8250;
var G__8259 = chunk__8241_8251;
var G__8260 = count__8242_8252;
var G__8261 = (i__8243_8253 + (1));
seq__8240_8250 = G__8258;
chunk__8241_8251 = G__8259;
count__8242_8252 = G__8260;
i__8243_8253 = G__8261;
continue;
} else {
var temp__5735__auto___8262 = cljs.core.seq.call(null,seq__8240_8250);
if(temp__5735__auto___8262){
var seq__8240_8263__$1 = temp__5735__auto___8262;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8240_8263__$1)){
var c__4461__auto___8264 = cljs.core.chunk_first.call(null,seq__8240_8263__$1);
var G__8265 = cljs.core.chunk_rest.call(null,seq__8240_8263__$1);
var G__8266 = c__4461__auto___8264;
var G__8267 = cljs.core.count.call(null,c__4461__auto___8264);
var G__8268 = (0);
seq__8240_8250 = G__8265;
chunk__8241_8251 = G__8266;
count__8242_8252 = G__8267;
i__8243_8253 = G__8268;
continue;
} else {
var map__8246_8269 = cljs.core.first.call(null,seq__8240_8263__$1);
var map__8246_8270__$1 = (((((!((map__8246_8269 == null))))?(((((map__8246_8269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8246_8269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8246_8269):map__8246_8269);
var binding_8271 = map__8246_8270__$1;
var init_8272 = cljs.core.get.call(null,map__8246_8270__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_8271);

cljs.compiler.emitln.call(null," = ",init_8272,";");


var G__8273 = cljs.core.next.call(null,seq__8240_8263__$1);
var G__8274 = null;
var G__8275 = (0);
var G__8276 = (0);
seq__8240_8250 = G__8273;
chunk__8241_8251 = G__8274;
count__8242_8252 = G__8275;
i__8243_8253 = G__8276;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__8238_8248;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__8277){
var map__8278 = p__8277;
var map__8278__$1 = (((((!((map__8278 == null))))?(((((map__8278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8278):map__8278);
var frame = cljs.core.get.call(null,map__8278__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__8278__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__8278__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4518__auto___8280 = cljs.core.count.call(null,exprs);
var i_8281 = (0);
while(true){
if((i_8281 < n__4518__auto___8280)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_8281)," = ",exprs.call(null,i_8281),";");

var G__8282 = (i_8281 + (1));
i_8281 = G__8282;
continue;
} else {
}
break;
}

var n__4518__auto___8283 = cljs.core.count.call(null,exprs);
var i_8284 = (0);
while(true){
if((i_8284 < n__4518__auto___8283)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_8284))," = ",temps.call(null,i_8284),";");

var G__8285 = (i_8284 + (1));
i_8284 = G__8285;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__8286){
var map__8287 = p__8286;
var map__8287__$1 = (((((!((map__8287 == null))))?(((((map__8287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8287):map__8287);
var expr = cljs.core.get.call(null,map__8287__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__8287__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__8287__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__8289_8297 = cljs.core.seq.call(null,bindings);
var chunk__8290_8298 = null;
var count__8291_8299 = (0);
var i__8292_8300 = (0);
while(true){
if((i__8292_8300 < count__8291_8299)){
var map__8293_8301 = cljs.core._nth.call(null,chunk__8290_8298,i__8292_8300);
var map__8293_8302__$1 = (((((!((map__8293_8301 == null))))?(((((map__8293_8301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8293_8301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8293_8301):map__8293_8301);
var binding_8303 = map__8293_8302__$1;
var init_8304 = cljs.core.get.call(null,map__8293_8302__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_8303)," = ",init_8304,";");


var G__8305 = seq__8289_8297;
var G__8306 = chunk__8290_8298;
var G__8307 = count__8291_8299;
var G__8308 = (i__8292_8300 + (1));
seq__8289_8297 = G__8305;
chunk__8290_8298 = G__8306;
count__8291_8299 = G__8307;
i__8292_8300 = G__8308;
continue;
} else {
var temp__5735__auto___8309 = cljs.core.seq.call(null,seq__8289_8297);
if(temp__5735__auto___8309){
var seq__8289_8310__$1 = temp__5735__auto___8309;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8289_8310__$1)){
var c__4461__auto___8311 = cljs.core.chunk_first.call(null,seq__8289_8310__$1);
var G__8312 = cljs.core.chunk_rest.call(null,seq__8289_8310__$1);
var G__8313 = c__4461__auto___8311;
var G__8314 = cljs.core.count.call(null,c__4461__auto___8311);
var G__8315 = (0);
seq__8289_8297 = G__8312;
chunk__8290_8298 = G__8313;
count__8291_8299 = G__8314;
i__8292_8300 = G__8315;
continue;
} else {
var map__8295_8316 = cljs.core.first.call(null,seq__8289_8310__$1);
var map__8295_8317__$1 = (((((!((map__8295_8316 == null))))?(((((map__8295_8316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8295_8316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8295_8316):map__8295_8316);
var binding_8318 = map__8295_8317__$1;
var init_8319 = cljs.core.get.call(null,map__8295_8317__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_8318)," = ",init_8319,";");


var G__8320 = cljs.core.next.call(null,seq__8289_8310__$1);
var G__8321 = null;
var G__8322 = (0);
var G__8323 = (0);
seq__8289_8297 = G__8320;
chunk__8290_8298 = G__8321;
count__8291_8299 = G__8322;
i__8292_8300 = G__8323;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__8326){
var map__8327 = p__8326;
var map__8327__$1 = (((((!((map__8327 == null))))?(((((map__8327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8327):map__8327);
var expr = map__8327__$1;
var f = cljs.core.get.call(null,map__8327__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__8327__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__8327__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__8329 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__8327,map__8327__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__8327,map__8327__$1,expr,f,args,env){
return (function (p1__8324_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__8324_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__8327,map__8327__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__8327,map__8327__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__8327,map__8327__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__8327,map__8327__$1,expr,f,args,env){
return (function (p1__8325_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__8325_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__8327,map__8327__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__8327,map__8327__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__8329,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__8329,(1),null);
var env__7487__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7487__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_8332 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_8332,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_8333 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_8333,args)),(((mfa_8333 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_8333,args)),"], 0))");
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
var fprop_8334 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_8334," ? ",f__$1,fprop_8334,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_8334," ? ",f__$1,fprop_8334,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7487__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__8335){
var map__8336 = p__8335;
var map__8336__$1 = (((((!((map__8336 == null))))?(((((map__8336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8336):map__8336);
var ctor = cljs.core.get.call(null,map__8336__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__8336__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__8336__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__7487__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7487__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7487__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__8338){
var map__8339 = p__8338;
var map__8339__$1 = (((((!((map__8339 == null))))?(((((map__8339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8339):map__8339);
var target = cljs.core.get.call(null,map__8339__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__8339__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__8339__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__7487__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7487__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7487__auto__))){
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
var map__8341 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__8341__$1 = (((((!((map__8341 == null))))?(((((map__8341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8341):map__8341);
var options = cljs.core.get.call(null,map__8341__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__8341__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__8342 = options;
var map__8342__$1 = (((((!((map__8342 == null))))?(((((map__8342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8342):map__8342);
var target = cljs.core.get.call(null,map__8342__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__8342__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__8343 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__8348 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__8348__$1 = (((((!((map__8348 == null))))?(((((map__8348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8348):map__8348);
var node_libs = cljs.core.get.call(null,map__8348__$1,true);
var libs_to_load = cljs.core.get.call(null,map__8348__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__8343,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__8343,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__8350_8366 = cljs.core.seq.call(null,libs_to_load);
var chunk__8351_8367 = null;
var count__8352_8368 = (0);
var i__8353_8369 = (0);
while(true){
if((i__8353_8369 < count__8352_8368)){
var lib_8370 = cljs.core._nth.call(null,chunk__8351_8367,i__8353_8369);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_8370)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_8370),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_8370),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_8370),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_8370),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_8370,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_8370),"');");
}

}
}
}


var G__8371 = seq__8350_8366;
var G__8372 = chunk__8351_8367;
var G__8373 = count__8352_8368;
var G__8374 = (i__8353_8369 + (1));
seq__8350_8366 = G__8371;
chunk__8351_8367 = G__8372;
count__8352_8368 = G__8373;
i__8353_8369 = G__8374;
continue;
} else {
var temp__5735__auto___8375 = cljs.core.seq.call(null,seq__8350_8366);
if(temp__5735__auto___8375){
var seq__8350_8376__$1 = temp__5735__auto___8375;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8350_8376__$1)){
var c__4461__auto___8377 = cljs.core.chunk_first.call(null,seq__8350_8376__$1);
var G__8378 = cljs.core.chunk_rest.call(null,seq__8350_8376__$1);
var G__8379 = c__4461__auto___8377;
var G__8380 = cljs.core.count.call(null,c__4461__auto___8377);
var G__8381 = (0);
seq__8350_8366 = G__8378;
chunk__8351_8367 = G__8379;
count__8352_8368 = G__8380;
i__8353_8369 = G__8381;
continue;
} else {
var lib_8382 = cljs.core.first.call(null,seq__8350_8376__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_8382)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_8382),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_8382),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_8382),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_8382),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_8382,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_8382),"');");
}

}
}
}


var G__8383 = cljs.core.next.call(null,seq__8350_8376__$1);
var G__8384 = null;
var G__8385 = (0);
var G__8386 = (0);
seq__8350_8366 = G__8383;
chunk__8351_8367 = G__8384;
count__8352_8368 = G__8385;
i__8353_8369 = G__8386;
continue;
}
} else {
}
}
break;
}

var seq__8354_8387 = cljs.core.seq.call(null,node_libs);
var chunk__8355_8388 = null;
var count__8356_8389 = (0);
var i__8357_8390 = (0);
while(true){
if((i__8357_8390 < count__8356_8389)){
var lib_8391 = cljs.core._nth.call(null,chunk__8355_8388,i__8357_8390);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_8391)," = require('",lib_8391,"');");


var G__8392 = seq__8354_8387;
var G__8393 = chunk__8355_8388;
var G__8394 = count__8356_8389;
var G__8395 = (i__8357_8390 + (1));
seq__8354_8387 = G__8392;
chunk__8355_8388 = G__8393;
count__8356_8389 = G__8394;
i__8357_8390 = G__8395;
continue;
} else {
var temp__5735__auto___8396 = cljs.core.seq.call(null,seq__8354_8387);
if(temp__5735__auto___8396){
var seq__8354_8397__$1 = temp__5735__auto___8396;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8354_8397__$1)){
var c__4461__auto___8398 = cljs.core.chunk_first.call(null,seq__8354_8397__$1);
var G__8399 = cljs.core.chunk_rest.call(null,seq__8354_8397__$1);
var G__8400 = c__4461__auto___8398;
var G__8401 = cljs.core.count.call(null,c__4461__auto___8398);
var G__8402 = (0);
seq__8354_8387 = G__8399;
chunk__8355_8388 = G__8400;
count__8356_8389 = G__8401;
i__8357_8390 = G__8402;
continue;
} else {
var lib_8403 = cljs.core.first.call(null,seq__8354_8397__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_8403)," = require('",lib_8403,"');");


var G__8404 = cljs.core.next.call(null,seq__8354_8397__$1);
var G__8405 = null;
var G__8406 = (0);
var G__8407 = (0);
seq__8354_8387 = G__8404;
chunk__8355_8388 = G__8405;
count__8356_8389 = G__8406;
i__8357_8390 = G__8407;
continue;
}
} else {
}
}
break;
}

var seq__8358_8408 = cljs.core.seq.call(null,global_exports_libs);
var chunk__8359_8409 = null;
var count__8360_8410 = (0);
var i__8361_8411 = (0);
while(true){
if((i__8361_8411 < count__8360_8410)){
var lib_8412 = cljs.core._nth.call(null,chunk__8359_8409,i__8361_8411);
var map__8362_8413 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_8412));
var map__8362_8414__$1 = (((((!((map__8362_8413 == null))))?(((((map__8362_8413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8362_8413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8362_8413):map__8362_8413);
var global_exports_8415 = cljs.core.get.call(null,map__8362_8414__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_8415,lib_8412);


var G__8416 = seq__8358_8408;
var G__8417 = chunk__8359_8409;
var G__8418 = count__8360_8410;
var G__8419 = (i__8361_8411 + (1));
seq__8358_8408 = G__8416;
chunk__8359_8409 = G__8417;
count__8360_8410 = G__8418;
i__8361_8411 = G__8419;
continue;
} else {
var temp__5735__auto___8420 = cljs.core.seq.call(null,seq__8358_8408);
if(temp__5735__auto___8420){
var seq__8358_8421__$1 = temp__5735__auto___8420;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8358_8421__$1)){
var c__4461__auto___8422 = cljs.core.chunk_first.call(null,seq__8358_8421__$1);
var G__8423 = cljs.core.chunk_rest.call(null,seq__8358_8421__$1);
var G__8424 = c__4461__auto___8422;
var G__8425 = cljs.core.count.call(null,c__4461__auto___8422);
var G__8426 = (0);
seq__8358_8408 = G__8423;
chunk__8359_8409 = G__8424;
count__8360_8410 = G__8425;
i__8361_8411 = G__8426;
continue;
} else {
var lib_8427 = cljs.core.first.call(null,seq__8358_8421__$1);
var map__8364_8428 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_8427));
var map__8364_8429__$1 = (((((!((map__8364_8428 == null))))?(((((map__8364_8428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8364_8428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8364_8428):map__8364_8428);
var global_exports_8430 = cljs.core.get.call(null,map__8364_8429__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_8430,lib_8427);


var G__8431 = cljs.core.next.call(null,seq__8358_8421__$1);
var G__8432 = null;
var G__8433 = (0);
var G__8434 = (0);
seq__8358_8408 = G__8431;
chunk__8359_8409 = G__8432;
count__8360_8410 = G__8433;
i__8361_8411 = G__8434;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__8435){
var map__8436 = p__8435;
var map__8436__$1 = (((((!((map__8436 == null))))?(((((map__8436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8436):map__8436);
var name = cljs.core.get.call(null,map__8436__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__8436__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__8436__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__8436__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__8436__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__8436__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__8436__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__8438){
var map__8439 = p__8438;
var map__8439__$1 = (((((!((map__8439 == null))))?(((((map__8439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8439):map__8439);
var name = cljs.core.get.call(null,map__8439__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__8439__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__8439__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__8439__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__8439__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__8439__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__8439__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__8441){
var map__8442 = p__8441;
var map__8442__$1 = (((((!((map__8442 == null))))?(((((map__8442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8442):map__8442);
var t = cljs.core.get.call(null,map__8442__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__8442__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__8442__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__8442__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__8442__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__8444_8462 = cljs.core.seq.call(null,protocols);
var chunk__8445_8463 = null;
var count__8446_8464 = (0);
var i__8447_8465 = (0);
while(true){
if((i__8447_8465 < count__8446_8464)){
var protocol_8466 = cljs.core._nth.call(null,chunk__8445_8463,i__8447_8465);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_8466)),"}");


var G__8467 = seq__8444_8462;
var G__8468 = chunk__8445_8463;
var G__8469 = count__8446_8464;
var G__8470 = (i__8447_8465 + (1));
seq__8444_8462 = G__8467;
chunk__8445_8463 = G__8468;
count__8446_8464 = G__8469;
i__8447_8465 = G__8470;
continue;
} else {
var temp__5735__auto___8471 = cljs.core.seq.call(null,seq__8444_8462);
if(temp__5735__auto___8471){
var seq__8444_8472__$1 = temp__5735__auto___8471;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8444_8472__$1)){
var c__4461__auto___8473 = cljs.core.chunk_first.call(null,seq__8444_8472__$1);
var G__8474 = cljs.core.chunk_rest.call(null,seq__8444_8472__$1);
var G__8475 = c__4461__auto___8473;
var G__8476 = cljs.core.count.call(null,c__4461__auto___8473);
var G__8477 = (0);
seq__8444_8462 = G__8474;
chunk__8445_8463 = G__8475;
count__8446_8464 = G__8476;
i__8447_8465 = G__8477;
continue;
} else {
var protocol_8478 = cljs.core.first.call(null,seq__8444_8472__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_8478)),"}");


var G__8479 = cljs.core.next.call(null,seq__8444_8472__$1);
var G__8480 = null;
var G__8481 = (0);
var G__8482 = (0);
seq__8444_8462 = G__8479;
chunk__8445_8463 = G__8480;
count__8446_8464 = G__8481;
i__8447_8465 = G__8482;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__8448_8483 = cljs.core.seq.call(null,fields__$1);
var chunk__8449_8484 = null;
var count__8450_8485 = (0);
var i__8451_8486 = (0);
while(true){
if((i__8451_8486 < count__8450_8485)){
var fld_8487 = cljs.core._nth.call(null,chunk__8449_8484,i__8451_8486);
cljs.compiler.emitln.call(null,"this.",fld_8487," = ",fld_8487,";");


var G__8488 = seq__8448_8483;
var G__8489 = chunk__8449_8484;
var G__8490 = count__8450_8485;
var G__8491 = (i__8451_8486 + (1));
seq__8448_8483 = G__8488;
chunk__8449_8484 = G__8489;
count__8450_8485 = G__8490;
i__8451_8486 = G__8491;
continue;
} else {
var temp__5735__auto___8492 = cljs.core.seq.call(null,seq__8448_8483);
if(temp__5735__auto___8492){
var seq__8448_8493__$1 = temp__5735__auto___8492;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8448_8493__$1)){
var c__4461__auto___8494 = cljs.core.chunk_first.call(null,seq__8448_8493__$1);
var G__8495 = cljs.core.chunk_rest.call(null,seq__8448_8493__$1);
var G__8496 = c__4461__auto___8494;
var G__8497 = cljs.core.count.call(null,c__4461__auto___8494);
var G__8498 = (0);
seq__8448_8483 = G__8495;
chunk__8449_8484 = G__8496;
count__8450_8485 = G__8497;
i__8451_8486 = G__8498;
continue;
} else {
var fld_8499 = cljs.core.first.call(null,seq__8448_8493__$1);
cljs.compiler.emitln.call(null,"this.",fld_8499," = ",fld_8499,";");


var G__8500 = cljs.core.next.call(null,seq__8448_8493__$1);
var G__8501 = null;
var G__8502 = (0);
var G__8503 = (0);
seq__8448_8483 = G__8500;
chunk__8449_8484 = G__8501;
count__8450_8485 = G__8502;
i__8451_8486 = G__8503;
continue;
}
} else {
}
}
break;
}

var seq__8452_8504 = cljs.core.seq.call(null,pmasks);
var chunk__8453_8505 = null;
var count__8454_8506 = (0);
var i__8455_8507 = (0);
while(true){
if((i__8455_8507 < count__8454_8506)){
var vec__8456_8508 = cljs.core._nth.call(null,chunk__8453_8505,i__8455_8507);
var pno_8509 = cljs.core.nth.call(null,vec__8456_8508,(0),null);
var pmask_8510 = cljs.core.nth.call(null,vec__8456_8508,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_8509,"$ = ",pmask_8510,";");


var G__8511 = seq__8452_8504;
var G__8512 = chunk__8453_8505;
var G__8513 = count__8454_8506;
var G__8514 = (i__8455_8507 + (1));
seq__8452_8504 = G__8511;
chunk__8453_8505 = G__8512;
count__8454_8506 = G__8513;
i__8455_8507 = G__8514;
continue;
} else {
var temp__5735__auto___8515 = cljs.core.seq.call(null,seq__8452_8504);
if(temp__5735__auto___8515){
var seq__8452_8516__$1 = temp__5735__auto___8515;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8452_8516__$1)){
var c__4461__auto___8517 = cljs.core.chunk_first.call(null,seq__8452_8516__$1);
var G__8518 = cljs.core.chunk_rest.call(null,seq__8452_8516__$1);
var G__8519 = c__4461__auto___8517;
var G__8520 = cljs.core.count.call(null,c__4461__auto___8517);
var G__8521 = (0);
seq__8452_8504 = G__8518;
chunk__8453_8505 = G__8519;
count__8454_8506 = G__8520;
i__8455_8507 = G__8521;
continue;
} else {
var vec__8459_8522 = cljs.core.first.call(null,seq__8452_8516__$1);
var pno_8523 = cljs.core.nth.call(null,vec__8459_8522,(0),null);
var pmask_8524 = cljs.core.nth.call(null,vec__8459_8522,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_8523,"$ = ",pmask_8524,";");


var G__8525 = cljs.core.next.call(null,seq__8452_8516__$1);
var G__8526 = null;
var G__8527 = (0);
var G__8528 = (0);
seq__8452_8504 = G__8525;
chunk__8453_8505 = G__8526;
count__8454_8506 = G__8527;
i__8455_8507 = G__8528;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__8529){
var map__8530 = p__8529;
var map__8530__$1 = (((((!((map__8530 == null))))?(((((map__8530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8530):map__8530);
var t = cljs.core.get.call(null,map__8530__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__8530__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__8530__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__8530__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__8530__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__8532_8550 = cljs.core.seq.call(null,protocols);
var chunk__8533_8551 = null;
var count__8534_8552 = (0);
var i__8535_8553 = (0);
while(true){
if((i__8535_8553 < count__8534_8552)){
var protocol_8554 = cljs.core._nth.call(null,chunk__8533_8551,i__8535_8553);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_8554)),"}");


var G__8555 = seq__8532_8550;
var G__8556 = chunk__8533_8551;
var G__8557 = count__8534_8552;
var G__8558 = (i__8535_8553 + (1));
seq__8532_8550 = G__8555;
chunk__8533_8551 = G__8556;
count__8534_8552 = G__8557;
i__8535_8553 = G__8558;
continue;
} else {
var temp__5735__auto___8559 = cljs.core.seq.call(null,seq__8532_8550);
if(temp__5735__auto___8559){
var seq__8532_8560__$1 = temp__5735__auto___8559;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8532_8560__$1)){
var c__4461__auto___8561 = cljs.core.chunk_first.call(null,seq__8532_8560__$1);
var G__8562 = cljs.core.chunk_rest.call(null,seq__8532_8560__$1);
var G__8563 = c__4461__auto___8561;
var G__8564 = cljs.core.count.call(null,c__4461__auto___8561);
var G__8565 = (0);
seq__8532_8550 = G__8562;
chunk__8533_8551 = G__8563;
count__8534_8552 = G__8564;
i__8535_8553 = G__8565;
continue;
} else {
var protocol_8566 = cljs.core.first.call(null,seq__8532_8560__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_8566)),"}");


var G__8567 = cljs.core.next.call(null,seq__8532_8560__$1);
var G__8568 = null;
var G__8569 = (0);
var G__8570 = (0);
seq__8532_8550 = G__8567;
chunk__8533_8551 = G__8568;
count__8534_8552 = G__8569;
i__8535_8553 = G__8570;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__8536_8571 = cljs.core.seq.call(null,fields__$1);
var chunk__8537_8572 = null;
var count__8538_8573 = (0);
var i__8539_8574 = (0);
while(true){
if((i__8539_8574 < count__8538_8573)){
var fld_8575 = cljs.core._nth.call(null,chunk__8537_8572,i__8539_8574);
cljs.compiler.emitln.call(null,"this.",fld_8575," = ",fld_8575,";");


var G__8576 = seq__8536_8571;
var G__8577 = chunk__8537_8572;
var G__8578 = count__8538_8573;
var G__8579 = (i__8539_8574 + (1));
seq__8536_8571 = G__8576;
chunk__8537_8572 = G__8577;
count__8538_8573 = G__8578;
i__8539_8574 = G__8579;
continue;
} else {
var temp__5735__auto___8580 = cljs.core.seq.call(null,seq__8536_8571);
if(temp__5735__auto___8580){
var seq__8536_8581__$1 = temp__5735__auto___8580;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8536_8581__$1)){
var c__4461__auto___8582 = cljs.core.chunk_first.call(null,seq__8536_8581__$1);
var G__8583 = cljs.core.chunk_rest.call(null,seq__8536_8581__$1);
var G__8584 = c__4461__auto___8582;
var G__8585 = cljs.core.count.call(null,c__4461__auto___8582);
var G__8586 = (0);
seq__8536_8571 = G__8583;
chunk__8537_8572 = G__8584;
count__8538_8573 = G__8585;
i__8539_8574 = G__8586;
continue;
} else {
var fld_8587 = cljs.core.first.call(null,seq__8536_8581__$1);
cljs.compiler.emitln.call(null,"this.",fld_8587," = ",fld_8587,";");


var G__8588 = cljs.core.next.call(null,seq__8536_8581__$1);
var G__8589 = null;
var G__8590 = (0);
var G__8591 = (0);
seq__8536_8571 = G__8588;
chunk__8537_8572 = G__8589;
count__8538_8573 = G__8590;
i__8539_8574 = G__8591;
continue;
}
} else {
}
}
break;
}

var seq__8540_8592 = cljs.core.seq.call(null,pmasks);
var chunk__8541_8593 = null;
var count__8542_8594 = (0);
var i__8543_8595 = (0);
while(true){
if((i__8543_8595 < count__8542_8594)){
var vec__8544_8596 = cljs.core._nth.call(null,chunk__8541_8593,i__8543_8595);
var pno_8597 = cljs.core.nth.call(null,vec__8544_8596,(0),null);
var pmask_8598 = cljs.core.nth.call(null,vec__8544_8596,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_8597,"$ = ",pmask_8598,";");


var G__8599 = seq__8540_8592;
var G__8600 = chunk__8541_8593;
var G__8601 = count__8542_8594;
var G__8602 = (i__8543_8595 + (1));
seq__8540_8592 = G__8599;
chunk__8541_8593 = G__8600;
count__8542_8594 = G__8601;
i__8543_8595 = G__8602;
continue;
} else {
var temp__5735__auto___8603 = cljs.core.seq.call(null,seq__8540_8592);
if(temp__5735__auto___8603){
var seq__8540_8604__$1 = temp__5735__auto___8603;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8540_8604__$1)){
var c__4461__auto___8605 = cljs.core.chunk_first.call(null,seq__8540_8604__$1);
var G__8606 = cljs.core.chunk_rest.call(null,seq__8540_8604__$1);
var G__8607 = c__4461__auto___8605;
var G__8608 = cljs.core.count.call(null,c__4461__auto___8605);
var G__8609 = (0);
seq__8540_8592 = G__8606;
chunk__8541_8593 = G__8607;
count__8542_8594 = G__8608;
i__8543_8595 = G__8609;
continue;
} else {
var vec__8547_8610 = cljs.core.first.call(null,seq__8540_8604__$1);
var pno_8611 = cljs.core.nth.call(null,vec__8547_8610,(0),null);
var pmask_8612 = cljs.core.nth.call(null,vec__8547_8610,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_8611,"$ = ",pmask_8612,";");


var G__8613 = cljs.core.next.call(null,seq__8540_8604__$1);
var G__8614 = null;
var G__8615 = (0);
var G__8616 = (0);
seq__8540_8592 = G__8613;
chunk__8541_8593 = G__8614;
count__8542_8594 = G__8615;
i__8543_8595 = G__8616;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__8617){
var map__8618 = p__8617;
var map__8618__$1 = (((((!((map__8618 == null))))?(((((map__8618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8618):map__8618);
var target = cljs.core.get.call(null,map__8618__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__8618__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__8618__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__8618__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__8618__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__7487__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7487__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7487__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__8620){
var map__8621 = p__8620;
var map__8621__$1 = (((((!((map__8621 == null))))?(((((map__8621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8621):map__8621);
var op = cljs.core.get.call(null,map__8621__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__8621__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__8621__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__8621__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__8621__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4036__auto__ = code;
if(cljs.core.truth_(and__4036__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4036__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__7487__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7487__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7487__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__8627 = cljs.core.seq.call(null,table);
var chunk__8628 = null;
var count__8629 = (0);
var i__8630 = (0);
while(true){
if((i__8630 < count__8629)){
var vec__8631 = cljs.core._nth.call(null,chunk__8628,i__8630);
var sym = cljs.core.nth.call(null,vec__8631,(0),null);
var value = cljs.core.nth.call(null,vec__8631,(1),null);
var ns_8637 = cljs.core.namespace.call(null,sym);
var name_8638 = cljs.core.name.call(null,sym);
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


var G__8639 = seq__8627;
var G__8640 = chunk__8628;
var G__8641 = count__8629;
var G__8642 = (i__8630 + (1));
seq__8627 = G__8639;
chunk__8628 = G__8640;
count__8629 = G__8641;
i__8630 = G__8642;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__8627);
if(temp__5735__auto__){
var seq__8627__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8627__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__8627__$1);
var G__8643 = cljs.core.chunk_rest.call(null,seq__8627__$1);
var G__8644 = c__4461__auto__;
var G__8645 = cljs.core.count.call(null,c__4461__auto__);
var G__8646 = (0);
seq__8627 = G__8643;
chunk__8628 = G__8644;
count__8629 = G__8645;
i__8630 = G__8646;
continue;
} else {
var vec__8634 = cljs.core.first.call(null,seq__8627__$1);
var sym = cljs.core.nth.call(null,vec__8634,(0),null);
var value = cljs.core.nth.call(null,vec__8634,(1),null);
var ns_8647 = cljs.core.namespace.call(null,sym);
var name_8648 = cljs.core.name.call(null,sym);
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


var G__8649 = cljs.core.next.call(null,seq__8627__$1);
var G__8650 = null;
var G__8651 = (0);
var G__8652 = (0);
seq__8627 = G__8649;
chunk__8628 = G__8650;
count__8629 = G__8651;
i__8630 = G__8652;
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
var G__8654 = arguments.length;
switch (G__8654) {
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
var k_8659 = cljs.core.first.call(null,ks);
var vec__8655_8660 = cljs.core.conj.call(null,prefix,k_8659);
var top_8661 = cljs.core.nth.call(null,vec__8655_8660,(0),null);
var prefix_SINGLEQUOTE__8662 = vec__8655_8660;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_8659)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__8662) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_8661)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_8661)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__8662)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_8661);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__8662)),";");
}
} else {
}

var m_8663 = cljs.core.get.call(null,externs,k_8659);
if(cljs.core.empty_QMARK_.call(null,m_8663)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__8662,m_8663,top_level,known_externs);
}

var G__8664 = cljs.core.next.call(null,ks);
ks = G__8664;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map
