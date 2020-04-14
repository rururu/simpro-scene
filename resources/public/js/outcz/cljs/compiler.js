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
var map__7431 = s;
var map__7431__$1 = (((((!((map__7431 == null))))?(((((map__7431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7431):map__7431);
var name = cljs.core.get.call(null,map__7431__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__7431__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__7434 = info;
var map__7435 = G__7434;
var map__7435__$1 = (((((!((map__7435 == null))))?(((((map__7435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7435):map__7435);
var shadow = cljs.core.get.call(null,map__7435__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__7434__$1 = G__7434;
while(true){
var d__$2 = d__$1;
var map__7437 = G__7434__$1;
var map__7437__$1 = (((((!((map__7437 == null))))?(((((map__7437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7437):map__7437);
var shadow__$1 = cljs.core.get.call(null,map__7437__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__7439 = (d__$2 + (1));
var G__7440 = shadow__$1;
d__$1 = G__7439;
G__7434__$1 = G__7440;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__7441){
var map__7442 = p__7441;
var map__7442__$1 = (((((!((map__7442 == null))))?(((((map__7442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7442):map__7442);
var name_var = map__7442__$1;
var name = cljs.core.get.call(null,map__7442__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__7442__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__7444 = info;
var map__7444__$1 = (((((!((map__7444 == null))))?(((((map__7444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7444):map__7444);
var ns = cljs.core.get.call(null,map__7444__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__7444__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__7447 = arguments.length;
switch (G__7447) {
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
var G__7449 = cp;
switch (G__7449) {
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
var seq__7451_7455 = cljs.core.seq.call(null,s);
var chunk__7452_7456 = null;
var count__7453_7457 = (0);
var i__7454_7458 = (0);
while(true){
if((i__7454_7458 < count__7453_7457)){
var c_7459 = cljs.core._nth.call(null,chunk__7452_7456,i__7454_7458);
sb.append(cljs.compiler.escape_char.call(null,c_7459));


var G__7460 = seq__7451_7455;
var G__7461 = chunk__7452_7456;
var G__7462 = count__7453_7457;
var G__7463 = (i__7454_7458 + (1));
seq__7451_7455 = G__7460;
chunk__7452_7456 = G__7461;
count__7453_7457 = G__7462;
i__7454_7458 = G__7463;
continue;
} else {
var temp__5735__auto___7464 = cljs.core.seq.call(null,seq__7451_7455);
if(temp__5735__auto___7464){
var seq__7451_7465__$1 = temp__5735__auto___7464;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7451_7465__$1)){
var c__4461__auto___7466 = cljs.core.chunk_first.call(null,seq__7451_7465__$1);
var G__7467 = cljs.core.chunk_rest.call(null,seq__7451_7465__$1);
var G__7468 = c__4461__auto___7466;
var G__7469 = cljs.core.count.call(null,c__4461__auto___7466);
var G__7470 = (0);
seq__7451_7455 = G__7467;
chunk__7452_7456 = G__7468;
count__7453_7457 = G__7469;
i__7454_7458 = G__7470;
continue;
} else {
var c_7471 = cljs.core.first.call(null,seq__7451_7465__$1);
sb.append(cljs.compiler.escape_char.call(null,c_7471));


var G__7472 = cljs.core.next.call(null,seq__7451_7465__$1);
var G__7473 = null;
var G__7474 = (0);
var G__7475 = (0);
seq__7451_7455 = G__7472;
chunk__7452_7456 = G__7473;
count__7453_7457 = G__7474;
i__7454_7458 = G__7475;
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
var map__7476_7481 = ast;
var map__7476_7482__$1 = (((((!((map__7476_7481 == null))))?(((((map__7476_7481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7476_7481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7476_7481):map__7476_7481);
var env_7483 = cljs.core.get.call(null,map__7476_7482__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_7483))){
var map__7478_7484 = env_7483;
var map__7478_7485__$1 = (((((!((map__7478_7484 == null))))?(((((map__7478_7484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7478_7484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7478_7484):map__7478_7484);
var line_7486 = cljs.core.get.call(null,map__7478_7485__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_7487 = cljs.core.get.call(null,map__7478_7485__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__7478_7484,map__7478_7485__$1,line_7486,column_7487,map__7476_7481,map__7476_7482__$1,env_7483){
return (function (m){
var minfo = (function (){var G__7480 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__7480,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__7480;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_7486 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__7478_7484,map__7478_7485__$1,line_7486,column_7487,map__7476_7481,map__7476_7482__$1,env_7483){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_7487)?(column_7487 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__7478_7484,map__7478_7485__$1,line_7486,column_7487,map__7476_7481,map__7476_7482__$1,env_7483){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__7478_7484,map__7478_7485__$1,line_7486,column_7487,map__7476_7481,map__7476_7482__$1,env_7483))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__7478_7484,map__7478_7485__$1,line_7486,column_7487,map__7476_7481,map__7476_7482__$1,env_7483))
,cljs.core.sorted_map.call(null)));
});})(map__7478_7484,map__7478_7485__$1,line_7486,column_7487,map__7476_7481,map__7476_7482__$1,env_7483))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__7496 = arguments.length;
switch (G__7496) {
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
var len__4641__auto___7503 = arguments.length;
var i__4642__auto___7504 = (0);
while(true){
if((i__4642__auto___7504 < len__4641__auto___7503)){
args_arr__4662__auto__.push((arguments[i__4642__auto___7504]));

var G__7505 = (i__4642__auto___7504 + (1));
i__4642__auto___7504 = G__7505;
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
var s_7506 = (function (){var G__7497 = a;
if((!(typeof a === 'string'))){
return G__7497.toString();
} else {
return G__7497;
}
})();
var temp__5739__auto___7507 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___7507 == null)){
} else {
var sm_data_7508 = temp__5739__auto___7507;
cljs.core.swap_BANG_.call(null,sm_data_7508,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),((function (sm_data_7508,temp__5739__auto___7507,s_7506){
return (function (p1__7488_SHARP_){
return (p1__7488_SHARP_ + s_7506.length);
});})(sm_data_7508,temp__5739__auto___7507,s_7506))
);
}

cljs.core.print.call(null,s_7506);

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

var seq__7498 = cljs.core.seq.call(null,xs);
var chunk__7499 = null;
var count__7500 = (0);
var i__7501 = (0);
while(true){
if((i__7501 < count__7500)){
var x = cljs.core._nth.call(null,chunk__7499,i__7501);
cljs.compiler.emits.call(null,x);


var G__7509 = seq__7498;
var G__7510 = chunk__7499;
var G__7511 = count__7500;
var G__7512 = (i__7501 + (1));
seq__7498 = G__7509;
chunk__7499 = G__7510;
count__7500 = G__7511;
i__7501 = G__7512;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__7498);
if(temp__5735__auto__){
var seq__7498__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7498__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__7498__$1);
var G__7513 = cljs.core.chunk_rest.call(null,seq__7498__$1);
var G__7514 = c__4461__auto__;
var G__7515 = cljs.core.count.call(null,c__4461__auto__);
var G__7516 = (0);
seq__7498 = G__7513;
chunk__7499 = G__7514;
count__7500 = G__7515;
i__7501 = G__7516;
continue;
} else {
var x = cljs.core.first.call(null,seq__7498__$1);
cljs.compiler.emits.call(null,x);


var G__7517 = cljs.core.next.call(null,seq__7498__$1);
var G__7518 = null;
var G__7519 = (0);
var G__7520 = (0);
seq__7498 = G__7517;
chunk__7499 = G__7518;
count__7500 = G__7519;
i__7501 = G__7520;
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
cljs.compiler.emits.cljs$lang$applyTo = (function (seq7490){
var G__7491 = cljs.core.first.call(null,seq7490);
var seq7490__$1 = cljs.core.next.call(null,seq7490);
var G__7492 = cljs.core.first.call(null,seq7490__$1);
var seq7490__$2 = cljs.core.next.call(null,seq7490__$1);
var G__7493 = cljs.core.first.call(null,seq7490__$2);
var seq7490__$3 = cljs.core.next.call(null,seq7490__$2);
var G__7494 = cljs.core.first.call(null,seq7490__$3);
var seq7490__$4 = cljs.core.next.call(null,seq7490__$3);
var G__7495 = cljs.core.first.call(null,seq7490__$4);
var seq7490__$5 = cljs.core.next.call(null,seq7490__$4);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7491,G__7492,G__7493,G__7494,G__7495,seq7490__$5);
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__7521){
var map__7522 = p__7521;
var map__7522__$1 = (((((!((map__7522 == null))))?(((((map__7522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7522):map__7522);
var m = map__7522__$1;
var gen_line = cljs.core.get.call(null,map__7522__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__7531 = arguments.length;
switch (G__7531) {
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
var len__4641__auto___7537 = arguments.length;
var i__4642__auto___7538 = (0);
while(true){
if((i__4642__auto___7538 < len__4641__auto___7537)){
args_arr__4662__auto__.push((arguments[i__4642__auto___7538]));

var G__7539 = (i__4642__auto___7538 + (1));
i__4642__auto___7538 = G__7539;
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

var seq__7532_7540 = cljs.core.seq.call(null,xs);
var chunk__7533_7541 = null;
var count__7534_7542 = (0);
var i__7535_7543 = (0);
while(true){
if((i__7535_7543 < count__7534_7542)){
var x_7544 = cljs.core._nth.call(null,chunk__7533_7541,i__7535_7543);
cljs.compiler.emits.call(null,x_7544);


var G__7545 = seq__7532_7540;
var G__7546 = chunk__7533_7541;
var G__7547 = count__7534_7542;
var G__7548 = (i__7535_7543 + (1));
seq__7532_7540 = G__7545;
chunk__7533_7541 = G__7546;
count__7534_7542 = G__7547;
i__7535_7543 = G__7548;
continue;
} else {
var temp__5735__auto___7549 = cljs.core.seq.call(null,seq__7532_7540);
if(temp__5735__auto___7549){
var seq__7532_7550__$1 = temp__5735__auto___7549;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7532_7550__$1)){
var c__4461__auto___7551 = cljs.core.chunk_first.call(null,seq__7532_7550__$1);
var G__7552 = cljs.core.chunk_rest.call(null,seq__7532_7550__$1);
var G__7553 = c__4461__auto___7551;
var G__7554 = cljs.core.count.call(null,c__4461__auto___7551);
var G__7555 = (0);
seq__7532_7540 = G__7552;
chunk__7533_7541 = G__7553;
count__7534_7542 = G__7554;
i__7535_7543 = G__7555;
continue;
} else {
var x_7556 = cljs.core.first.call(null,seq__7532_7550__$1);
cljs.compiler.emits.call(null,x_7556);


var G__7557 = cljs.core.next.call(null,seq__7532_7550__$1);
var G__7558 = null;
var G__7559 = (0);
var G__7560 = (0);
seq__7532_7540 = G__7557;
chunk__7533_7541 = G__7558;
count__7534_7542 = G__7559;
i__7535_7543 = G__7560;
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
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq7525){
var G__7526 = cljs.core.first.call(null,seq7525);
var seq7525__$1 = cljs.core.next.call(null,seq7525);
var G__7527 = cljs.core.first.call(null,seq7525__$1);
var seq7525__$2 = cljs.core.next.call(null,seq7525__$1);
var G__7528 = cljs.core.first.call(null,seq7525__$2);
var seq7525__$3 = cljs.core.next.call(null,seq7525__$2);
var G__7529 = cljs.core.first.call(null,seq7525__$3);
var seq7525__$4 = cljs.core.next.call(null,seq7525__$3);
var G__7530 = cljs.core.first.call(null,seq7525__$4);
var seq7525__$5 = cljs.core.next.call(null,seq7525__$4);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7526,G__7527,G__7528,G__7529,G__7530,seq7525__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__7561_7565 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__7562_7566 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__7563_7567 = true;
var _STAR_print_fn_STAR__temp_val__7564_7568 = ((function (_STAR_print_newline_STAR__orig_val__7561_7565,_STAR_print_fn_STAR__orig_val__7562_7566,_STAR_print_newline_STAR__temp_val__7563_7567,sb__4572__auto__){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__7561_7565,_STAR_print_fn_STAR__orig_val__7562_7566,_STAR_print_newline_STAR__temp_val__7563_7567,sb__4572__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__7563_7567;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__7564_7568;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__7562_7566;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__7561_7565;
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
var vec__7569 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__7569,(0),null);
var name = cljs.core.nth.call(null,vec__7569,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,((function (vec__7569,ns,name){
return (function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
});})(vec__7569,ns,name))
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
var vec__7572 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__7572,(0),null);
var flags = cljs.core.nth.call(null,vec__7572,(1),null);
var pattern = cljs.core.nth.call(null,vec__7572,(2),null);
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
return (function (p1__7575_SHARP_){
return ((function (items){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__7575_SHARP_);
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
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__7577){
var map__7578 = p__7577;
var map__7578__$1 = (((((!((map__7578 == null))))?(((((map__7578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7578):map__7578);
var ast = map__7578__$1;
var info = cljs.core.get.call(null,map__7578__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__7578__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__7578__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__7580 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__7580__$1 = (((((!((map__7580 == null))))?(((((map__7580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7580):map__7580);
var cenv = map__7580__$1;
var options = cljs.core.get.call(null,map__7580__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__7582 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__4036__auto__;
}
})())){
return clojure.set.difference.call(null,G__7582,cljs.analyzer.es5_allowed);
} else {
return G__7582;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4047__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__7583 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__7583,reserved);
} else {
return G__7583;
}
})();
var env__6251__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6251__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__7584_7585 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__7584_7586__$1 = (((G__7584_7585 instanceof cljs.core.Keyword))?G__7584_7585.fqn:null);
switch (G__7584_7586__$1) {
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6251__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__7588){
var map__7589 = p__7588;
var map__7589__$1 = (((((!((map__7589 == null))))?(((((map__7589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7589):map__7589);
var arg = map__7589__$1;
var env = cljs.core.get.call(null,map__7589__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__7589__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__7589__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__7589__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__7591 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__7591__$1 = (((((!((map__7591 == null))))?(((((map__7591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7591):map__7591);
var name = cljs.core.get.call(null,map__7591__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__6251__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6251__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6251__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__7593){
var map__7594 = p__7593;
var map__7594__$1 = (((((!((map__7594 == null))))?(((((map__7594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7594):map__7594);
var expr = cljs.core.get.call(null,map__7594__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__7594__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__7594__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6251__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6251__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6251__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,((function (keys__$1){
return (function (p1__7596_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__7596_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__7597){
var map__7598 = p__7597;
var map__7598__$1 = (((((!((map__7598 == null))))?(((((map__7598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7598):map__7598);
var env = cljs.core.get.call(null,map__7598__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__7598__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__7598__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__6251__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6251__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6251__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__7600){
var map__7601 = p__7600;
var map__7601__$1 = (((((!((map__7601 == null))))?(((((map__7601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7601):map__7601);
var items = cljs.core.get.call(null,map__7601__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__7601__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6251__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6251__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6251__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,((function (items__$1){
return (function (p1__7603_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__7603_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__7604){
var map__7605 = p__7604;
var map__7605__$1 = (((((!((map__7605 == null))))?(((((map__7605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7605):map__7605);
var items = cljs.core.get.call(null,map__7605__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__7605__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6251__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6251__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6251__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5735__auto___7623 = cljs.core.seq.call(null,items);
if(temp__5735__auto___7623){
var items_7624__$1 = temp__5735__auto___7623;
var vec__7607_7625 = items_7624__$1;
var seq__7608_7626 = cljs.core.seq.call(null,vec__7607_7625);
var first__7609_7627 = cljs.core.first.call(null,seq__7608_7626);
var seq__7608_7628__$1 = cljs.core.next.call(null,seq__7608_7626);
var vec__7610_7629 = first__7609_7627;
var k_7630 = cljs.core.nth.call(null,vec__7610_7629,(0),null);
var v_7631 = cljs.core.nth.call(null,vec__7610_7629,(1),null);
var r_7632 = seq__7608_7628__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_7630),"\": ",emit_js_object_val.call(null,v_7631));

var seq__7613_7633 = cljs.core.seq.call(null,r_7632);
var chunk__7614_7634 = null;
var count__7615_7635 = (0);
var i__7616_7636 = (0);
while(true){
if((i__7616_7636 < count__7615_7635)){
var vec__7617_7637 = cljs.core._nth.call(null,chunk__7614_7634,i__7616_7636);
var k_7638__$1 = cljs.core.nth.call(null,vec__7617_7637,(0),null);
var v_7639__$1 = cljs.core.nth.call(null,vec__7617_7637,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_7638__$1),"\": ",emit_js_object_val.call(null,v_7639__$1));


var G__7640 = seq__7613_7633;
var G__7641 = chunk__7614_7634;
var G__7642 = count__7615_7635;
var G__7643 = (i__7616_7636 + (1));
seq__7613_7633 = G__7640;
chunk__7614_7634 = G__7641;
count__7615_7635 = G__7642;
i__7616_7636 = G__7643;
continue;
} else {
var temp__5735__auto___7644__$1 = cljs.core.seq.call(null,seq__7613_7633);
if(temp__5735__auto___7644__$1){
var seq__7613_7645__$1 = temp__5735__auto___7644__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7613_7645__$1)){
var c__4461__auto___7646 = cljs.core.chunk_first.call(null,seq__7613_7645__$1);
var G__7647 = cljs.core.chunk_rest.call(null,seq__7613_7645__$1);
var G__7648 = c__4461__auto___7646;
var G__7649 = cljs.core.count.call(null,c__4461__auto___7646);
var G__7650 = (0);
seq__7613_7633 = G__7647;
chunk__7614_7634 = G__7648;
count__7615_7635 = G__7649;
i__7616_7636 = G__7650;
continue;
} else {
var vec__7620_7651 = cljs.core.first.call(null,seq__7613_7645__$1);
var k_7652__$1 = cljs.core.nth.call(null,vec__7620_7651,(0),null);
var v_7653__$1 = cljs.core.nth.call(null,vec__7620_7651,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_7652__$1),"\": ",emit_js_object_val.call(null,v_7653__$1));


var G__7654 = cljs.core.next.call(null,seq__7613_7645__$1);
var G__7655 = null;
var G__7656 = (0);
var G__7657 = (0);
seq__7613_7633 = G__7654;
chunk__7614_7634 = G__7655;
count__7615_7635 = G__7656;
i__7616_7636 = G__7657;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__7658){
var map__7659 = p__7658;
var map__7659__$1 = (((((!((map__7659 == null))))?(((((map__7659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7659):map__7659);
var keys = cljs.core.get.call(null,map__7659__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__7659__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__7659__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6251__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6251__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6251__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__7661){
var map__7662 = p__7661;
var map__7662__$1 = (((((!((map__7662 == null))))?(((((map__7662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7662):map__7662);
var items = cljs.core.get.call(null,map__7662__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__7662__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6251__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6251__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6251__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__7664){
var map__7665 = p__7664;
var map__7665__$1 = (((((!((map__7665 == null))))?(((((map__7665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7665):map__7665);
var expr = cljs.core.get.call(null,map__7665__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__7667){
var map__7668 = p__7667;
var map__7668__$1 = (((((!((map__7668 == null))))?(((((map__7668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7668):map__7668);
var form = cljs.core.get.call(null,map__7668__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__7668__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__6251__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6251__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6251__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__7670 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__7670__$1 = (((((!((map__7670 == null))))?(((((map__7670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7670):map__7670);
var op = cljs.core.get.call(null,map__7670__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__7670__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__7670__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__7672 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__7672__$1 = (((((!((map__7672 == null))))?(((((map__7672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7672):map__7672);
var op = cljs.core.get.call(null,map__7672__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__7672__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__7672__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__7674){
var map__7675 = p__7674;
var map__7675__$1 = (((((!((map__7675 == null))))?(((((map__7675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7675):map__7675);
var test = cljs.core.get.call(null,map__7675__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__7675__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__7675__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__7675__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__7675__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__7677){
var map__7678 = p__7677;
var map__7678__$1 = (((((!((map__7678 == null))))?(((((map__7678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7678):map__7678);
var v = cljs.core.get.call(null,map__7678__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__7678__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__7678__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__7678__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__7680_7700 = cljs.core.seq.call(null,nodes);
var chunk__7681_7701 = null;
var count__7682_7702 = (0);
var i__7683_7703 = (0);
while(true){
if((i__7683_7703 < count__7682_7702)){
var map__7684_7704 = cljs.core._nth.call(null,chunk__7681_7701,i__7683_7703);
var map__7684_7705__$1 = (((((!((map__7684_7704 == null))))?(((((map__7684_7704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7684_7704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7684_7704):map__7684_7704);
var ts_7706 = cljs.core.get.call(null,map__7684_7705__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__7685_7707 = cljs.core.get.call(null,map__7684_7705__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__7685_7708__$1 = (((((!((map__7685_7707 == null))))?(((((map__7685_7707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7685_7707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7685_7707):map__7685_7707);
var then_7709 = cljs.core.get.call(null,map__7685_7708__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__7688_7710 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_7706));
var chunk__7689_7711 = null;
var count__7690_7712 = (0);
var i__7691_7713 = (0);
while(true){
if((i__7691_7713 < count__7690_7712)){
var test_7714 = cljs.core._nth.call(null,chunk__7689_7711,i__7691_7713);
cljs.compiler.emitln.call(null,"case ",test_7714,":");


var G__7715 = seq__7688_7710;
var G__7716 = chunk__7689_7711;
var G__7717 = count__7690_7712;
var G__7718 = (i__7691_7713 + (1));
seq__7688_7710 = G__7715;
chunk__7689_7711 = G__7716;
count__7690_7712 = G__7717;
i__7691_7713 = G__7718;
continue;
} else {
var temp__5735__auto___7719 = cljs.core.seq.call(null,seq__7688_7710);
if(temp__5735__auto___7719){
var seq__7688_7720__$1 = temp__5735__auto___7719;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7688_7720__$1)){
var c__4461__auto___7721 = cljs.core.chunk_first.call(null,seq__7688_7720__$1);
var G__7722 = cljs.core.chunk_rest.call(null,seq__7688_7720__$1);
var G__7723 = c__4461__auto___7721;
var G__7724 = cljs.core.count.call(null,c__4461__auto___7721);
var G__7725 = (0);
seq__7688_7710 = G__7722;
chunk__7689_7711 = G__7723;
count__7690_7712 = G__7724;
i__7691_7713 = G__7725;
continue;
} else {
var test_7726 = cljs.core.first.call(null,seq__7688_7720__$1);
cljs.compiler.emitln.call(null,"case ",test_7726,":");


var G__7727 = cljs.core.next.call(null,seq__7688_7720__$1);
var G__7728 = null;
var G__7729 = (0);
var G__7730 = (0);
seq__7688_7710 = G__7727;
chunk__7689_7711 = G__7728;
count__7690_7712 = G__7729;
i__7691_7713 = G__7730;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_7709);
} else {
cljs.compiler.emitln.call(null,then_7709);
}

cljs.compiler.emitln.call(null,"break;");


var G__7731 = seq__7680_7700;
var G__7732 = chunk__7681_7701;
var G__7733 = count__7682_7702;
var G__7734 = (i__7683_7703 + (1));
seq__7680_7700 = G__7731;
chunk__7681_7701 = G__7732;
count__7682_7702 = G__7733;
i__7683_7703 = G__7734;
continue;
} else {
var temp__5735__auto___7735 = cljs.core.seq.call(null,seq__7680_7700);
if(temp__5735__auto___7735){
var seq__7680_7736__$1 = temp__5735__auto___7735;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7680_7736__$1)){
var c__4461__auto___7737 = cljs.core.chunk_first.call(null,seq__7680_7736__$1);
var G__7738 = cljs.core.chunk_rest.call(null,seq__7680_7736__$1);
var G__7739 = c__4461__auto___7737;
var G__7740 = cljs.core.count.call(null,c__4461__auto___7737);
var G__7741 = (0);
seq__7680_7700 = G__7738;
chunk__7681_7701 = G__7739;
count__7682_7702 = G__7740;
i__7683_7703 = G__7741;
continue;
} else {
var map__7692_7742 = cljs.core.first.call(null,seq__7680_7736__$1);
var map__7692_7743__$1 = (((((!((map__7692_7742 == null))))?(((((map__7692_7742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7692_7742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7692_7742):map__7692_7742);
var ts_7744 = cljs.core.get.call(null,map__7692_7743__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__7693_7745 = cljs.core.get.call(null,map__7692_7743__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__7693_7746__$1 = (((((!((map__7693_7745 == null))))?(((((map__7693_7745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7693_7745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7693_7745):map__7693_7745);
var then_7747 = cljs.core.get.call(null,map__7693_7746__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__7696_7748 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_7744));
var chunk__7697_7749 = null;
var count__7698_7750 = (0);
var i__7699_7751 = (0);
while(true){
if((i__7699_7751 < count__7698_7750)){
var test_7752 = cljs.core._nth.call(null,chunk__7697_7749,i__7699_7751);
cljs.compiler.emitln.call(null,"case ",test_7752,":");


var G__7753 = seq__7696_7748;
var G__7754 = chunk__7697_7749;
var G__7755 = count__7698_7750;
var G__7756 = (i__7699_7751 + (1));
seq__7696_7748 = G__7753;
chunk__7697_7749 = G__7754;
count__7698_7750 = G__7755;
i__7699_7751 = G__7756;
continue;
} else {
var temp__5735__auto___7757__$1 = cljs.core.seq.call(null,seq__7696_7748);
if(temp__5735__auto___7757__$1){
var seq__7696_7758__$1 = temp__5735__auto___7757__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7696_7758__$1)){
var c__4461__auto___7759 = cljs.core.chunk_first.call(null,seq__7696_7758__$1);
var G__7760 = cljs.core.chunk_rest.call(null,seq__7696_7758__$1);
var G__7761 = c__4461__auto___7759;
var G__7762 = cljs.core.count.call(null,c__4461__auto___7759);
var G__7763 = (0);
seq__7696_7748 = G__7760;
chunk__7697_7749 = G__7761;
count__7698_7750 = G__7762;
i__7699_7751 = G__7763;
continue;
} else {
var test_7764 = cljs.core.first.call(null,seq__7696_7758__$1);
cljs.compiler.emitln.call(null,"case ",test_7764,":");


var G__7765 = cljs.core.next.call(null,seq__7696_7758__$1);
var G__7766 = null;
var G__7767 = (0);
var G__7768 = (0);
seq__7696_7748 = G__7765;
chunk__7697_7749 = G__7766;
count__7698_7750 = G__7767;
i__7699_7751 = G__7768;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_7747);
} else {
cljs.compiler.emitln.call(null,then_7747);
}

cljs.compiler.emitln.call(null,"break;");


var G__7769 = cljs.core.next.call(null,seq__7680_7736__$1);
var G__7770 = null;
var G__7771 = (0);
var G__7772 = (0);
seq__7680_7700 = G__7769;
chunk__7681_7701 = G__7770;
count__7682_7702 = G__7771;
i__7683_7703 = G__7772;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__7773){
var map__7774 = p__7773;
var map__7774__$1 = (((((!((map__7774 == null))))?(((((map__7774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7774):map__7774);
var throw$ = cljs.core.get.call(null,map__7774__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__7774__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__7777 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__7777,(0),null);
var rstr = cljs.core.nth.call(null,vec__7777,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__7777,fstr,rstr,ret_t,axstr){
return (function (p1__7776_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__7776_SHARP_);
});})(idx,vec__7777,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__7780 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7780),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__7780;
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
return (function (p1__7781_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__7781_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__7782 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__7783 = cljs.core.seq.call(null,vec__7782);
var first__7784 = cljs.core.first.call(null,seq__7783);
var seq__7783__$1 = cljs.core.next.call(null,seq__7783);
var p = first__7784;
var first__7784__$1 = cljs.core.first.call(null,seq__7783__$1);
var seq__7783__$2 = cljs.core.next.call(null,seq__7783__$1);
var ts = first__7784__$1;
var first__7784__$2 = cljs.core.first.call(null,seq__7783__$2);
var seq__7783__$3 = cljs.core.next.call(null,seq__7783__$2);
var n = first__7784__$2;
var xs = seq__7783__$3;
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
var vec__7785 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__7786 = cljs.core.seq.call(null,vec__7785);
var first__7787 = cljs.core.first.call(null,seq__7786);
var seq__7786__$1 = cljs.core.next.call(null,seq__7786);
var p = first__7787;
var first__7787__$1 = cljs.core.first.call(null,seq__7786__$1);
var seq__7786__$2 = cljs.core.next.call(null,seq__7786__$1);
var ts = first__7787__$1;
var xs = seq__7786__$2;
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
var G__7790 = arguments.length;
switch (G__7790) {
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
var vec__7798 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__7788_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__7788_SHARP_);
} else {
return p1__7788_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__7799 = cljs.core.seq.call(null,vec__7798);
var first__7800 = cljs.core.first.call(null,seq__7799);
var seq__7799__$1 = cljs.core.next.call(null,seq__7799);
var x = first__7800;
var ys = seq__7799__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__7801 = cljs.core.seq.call(null,ys);
var chunk__7802 = null;
var count__7803 = (0);
var i__7804 = (0);
while(true){
if((i__7804 < count__7803)){
var next_line = cljs.core._nth.call(null,chunk__7802,i__7804);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__7810 = seq__7801;
var G__7811 = chunk__7802;
var G__7812 = count__7803;
var G__7813 = (i__7804 + (1));
seq__7801 = G__7810;
chunk__7802 = G__7811;
count__7803 = G__7812;
i__7804 = G__7813;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__7801);
if(temp__5735__auto__){
var seq__7801__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7801__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__7801__$1);
var G__7814 = cljs.core.chunk_rest.call(null,seq__7801__$1);
var G__7815 = c__4461__auto__;
var G__7816 = cljs.core.count.call(null,c__4461__auto__);
var G__7817 = (0);
seq__7801 = G__7814;
chunk__7802 = G__7815;
count__7803 = G__7816;
i__7804 = G__7817;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__7801__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__7818 = cljs.core.next.call(null,seq__7801__$1);
var G__7819 = null;
var G__7820 = (0);
var G__7821 = (0);
seq__7801 = G__7818;
chunk__7802 = G__7819;
count__7803 = G__7820;
i__7804 = G__7821;
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

var seq__7805_7822 = cljs.core.seq.call(null,docs__$2);
var chunk__7806_7823 = null;
var count__7807_7824 = (0);
var i__7808_7825 = (0);
while(true){
if((i__7808_7825 < count__7807_7824)){
var e_7826 = cljs.core._nth.call(null,chunk__7806_7823,i__7808_7825);
if(cljs.core.truth_(e_7826)){
print_comment_lines.call(null,e_7826);
} else {
}


var G__7827 = seq__7805_7822;
var G__7828 = chunk__7806_7823;
var G__7829 = count__7807_7824;
var G__7830 = (i__7808_7825 + (1));
seq__7805_7822 = G__7827;
chunk__7806_7823 = G__7828;
count__7807_7824 = G__7829;
i__7808_7825 = G__7830;
continue;
} else {
var temp__5735__auto___7831 = cljs.core.seq.call(null,seq__7805_7822);
if(temp__5735__auto___7831){
var seq__7805_7832__$1 = temp__5735__auto___7831;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7805_7832__$1)){
var c__4461__auto___7833 = cljs.core.chunk_first.call(null,seq__7805_7832__$1);
var G__7834 = cljs.core.chunk_rest.call(null,seq__7805_7832__$1);
var G__7835 = c__4461__auto___7833;
var G__7836 = cljs.core.count.call(null,c__4461__auto___7833);
var G__7837 = (0);
seq__7805_7822 = G__7834;
chunk__7806_7823 = G__7835;
count__7807_7824 = G__7836;
i__7808_7825 = G__7837;
continue;
} else {
var e_7838 = cljs.core.first.call(null,seq__7805_7832__$1);
if(cljs.core.truth_(e_7838)){
print_comment_lines.call(null,e_7838);
} else {
}


var G__7839 = cljs.core.next.call(null,seq__7805_7832__$1);
var G__7840 = null;
var G__7841 = (0);
var G__7842 = (0);
seq__7805_7822 = G__7839;
chunk__7806_7823 = G__7840;
count__7807_7824 = G__7841;
i__7808_7825 = G__7842;
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
return (function (p1__7844_SHARP_){
return goog.string.startsWith(p1__7844_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__7845){
var map__7846 = p__7845;
var map__7846__$1 = (((((!((map__7846 == null))))?(((((map__7846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7846):map__7846);
var doc = cljs.core.get.call(null,map__7846__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__7846__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__7846__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.call(null,map__7846__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__7846__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__7846__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__7846__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__7846__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__7846__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__7848){
var map__7849 = p__7848;
var map__7849__$1 = (((((!((map__7849 == null))))?(((((map__7849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7849):map__7849);
var name = cljs.core.get.call(null,map__7849__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__7849__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__7849__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__7851_7869 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__7852_7870 = null;
var count__7853_7871 = (0);
var i__7854_7872 = (0);
while(true){
if((i__7854_7872 < count__7853_7871)){
var vec__7855_7873 = cljs.core._nth.call(null,chunk__7852_7870,i__7854_7872);
var i_7874 = cljs.core.nth.call(null,vec__7855_7873,(0),null);
var param_7875 = cljs.core.nth.call(null,vec__7855_7873,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_7875);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__7876 = seq__7851_7869;
var G__7877 = chunk__7852_7870;
var G__7878 = count__7853_7871;
var G__7879 = (i__7854_7872 + (1));
seq__7851_7869 = G__7876;
chunk__7852_7870 = G__7877;
count__7853_7871 = G__7878;
i__7854_7872 = G__7879;
continue;
} else {
var temp__5735__auto___7880 = cljs.core.seq.call(null,seq__7851_7869);
if(temp__5735__auto___7880){
var seq__7851_7881__$1 = temp__5735__auto___7880;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7851_7881__$1)){
var c__4461__auto___7882 = cljs.core.chunk_first.call(null,seq__7851_7881__$1);
var G__7883 = cljs.core.chunk_rest.call(null,seq__7851_7881__$1);
var G__7884 = c__4461__auto___7882;
var G__7885 = cljs.core.count.call(null,c__4461__auto___7882);
var G__7886 = (0);
seq__7851_7869 = G__7883;
chunk__7852_7870 = G__7884;
count__7853_7871 = G__7885;
i__7854_7872 = G__7886;
continue;
} else {
var vec__7858_7887 = cljs.core.first.call(null,seq__7851_7881__$1);
var i_7888 = cljs.core.nth.call(null,vec__7858_7887,(0),null);
var param_7889 = cljs.core.nth.call(null,vec__7858_7887,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_7889);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__7890 = cljs.core.next.call(null,seq__7851_7881__$1);
var G__7891 = null;
var G__7892 = (0);
var G__7893 = (0);
seq__7851_7869 = G__7890;
chunk__7852_7870 = G__7891;
count__7853_7871 = G__7892;
i__7854_7872 = G__7893;
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

var seq__7861_7894 = cljs.core.seq.call(null,params);
var chunk__7862_7895 = null;
var count__7863_7896 = (0);
var i__7864_7897 = (0);
while(true){
if((i__7864_7897 < count__7863_7896)){
var param_7898 = cljs.core._nth.call(null,chunk__7862_7895,i__7864_7897);
cljs.compiler.emit.call(null,param_7898);

if(cljs.core._EQ_.call(null,param_7898,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7899 = seq__7861_7894;
var G__7900 = chunk__7862_7895;
var G__7901 = count__7863_7896;
var G__7902 = (i__7864_7897 + (1));
seq__7861_7894 = G__7899;
chunk__7862_7895 = G__7900;
count__7863_7896 = G__7901;
i__7864_7897 = G__7902;
continue;
} else {
var temp__5735__auto___7903 = cljs.core.seq.call(null,seq__7861_7894);
if(temp__5735__auto___7903){
var seq__7861_7904__$1 = temp__5735__auto___7903;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7861_7904__$1)){
var c__4461__auto___7905 = cljs.core.chunk_first.call(null,seq__7861_7904__$1);
var G__7906 = cljs.core.chunk_rest.call(null,seq__7861_7904__$1);
var G__7907 = c__4461__auto___7905;
var G__7908 = cljs.core.count.call(null,c__4461__auto___7905);
var G__7909 = (0);
seq__7861_7894 = G__7906;
chunk__7862_7895 = G__7907;
count__7863_7896 = G__7908;
i__7864_7897 = G__7909;
continue;
} else {
var param_7910 = cljs.core.first.call(null,seq__7861_7904__$1);
cljs.compiler.emit.call(null,param_7910);

if(cljs.core._EQ_.call(null,param_7910,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7911 = cljs.core.next.call(null,seq__7861_7904__$1);
var G__7912 = null;
var G__7913 = (0);
var G__7914 = (0);
seq__7861_7894 = G__7911;
chunk__7862_7895 = G__7912;
count__7863_7896 = G__7913;
i__7864_7897 = G__7914;
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

var seq__7865_7915 = cljs.core.seq.call(null,params);
var chunk__7866_7916 = null;
var count__7867_7917 = (0);
var i__7868_7918 = (0);
while(true){
if((i__7868_7918 < count__7867_7917)){
var param_7919 = cljs.core._nth.call(null,chunk__7866_7916,i__7868_7918);
cljs.compiler.emit.call(null,param_7919);

if(cljs.core._EQ_.call(null,param_7919,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7920 = seq__7865_7915;
var G__7921 = chunk__7866_7916;
var G__7922 = count__7867_7917;
var G__7923 = (i__7868_7918 + (1));
seq__7865_7915 = G__7920;
chunk__7866_7916 = G__7921;
count__7867_7917 = G__7922;
i__7868_7918 = G__7923;
continue;
} else {
var temp__5735__auto___7924 = cljs.core.seq.call(null,seq__7865_7915);
if(temp__5735__auto___7924){
var seq__7865_7925__$1 = temp__5735__auto___7924;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7865_7925__$1)){
var c__4461__auto___7926 = cljs.core.chunk_first.call(null,seq__7865_7925__$1);
var G__7927 = cljs.core.chunk_rest.call(null,seq__7865_7925__$1);
var G__7928 = c__4461__auto___7926;
var G__7929 = cljs.core.count.call(null,c__4461__auto___7926);
var G__7930 = (0);
seq__7865_7915 = G__7927;
chunk__7866_7916 = G__7928;
count__7867_7917 = G__7929;
i__7868_7918 = G__7930;
continue;
} else {
var param_7931 = cljs.core.first.call(null,seq__7865_7925__$1);
cljs.compiler.emit.call(null,param_7931);

if(cljs.core._EQ_.call(null,param_7931,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7932 = cljs.core.next.call(null,seq__7865_7925__$1);
var G__7933 = null;
var G__7934 = (0);
var G__7935 = (0);
seq__7865_7915 = G__7932;
chunk__7866_7916 = G__7933;
count__7867_7917 = G__7934;
i__7868_7918 = G__7935;
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
var seq__7936 = cljs.core.seq.call(null,params);
var chunk__7937 = null;
var count__7938 = (0);
var i__7939 = (0);
while(true){
if((i__7939 < count__7938)){
var param = cljs.core._nth.call(null,chunk__7937,i__7939);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7940 = seq__7936;
var G__7941 = chunk__7937;
var G__7942 = count__7938;
var G__7943 = (i__7939 + (1));
seq__7936 = G__7940;
chunk__7937 = G__7941;
count__7938 = G__7942;
i__7939 = G__7943;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__7936);
if(temp__5735__auto__){
var seq__7936__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7936__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__7936__$1);
var G__7944 = cljs.core.chunk_rest.call(null,seq__7936__$1);
var G__7945 = c__4461__auto__;
var G__7946 = cljs.core.count.call(null,c__4461__auto__);
var G__7947 = (0);
seq__7936 = G__7944;
chunk__7937 = G__7945;
count__7938 = G__7946;
i__7939 = G__7947;
continue;
} else {
var param = cljs.core.first.call(null,seq__7936__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7948 = cljs.core.next.call(null,seq__7936__$1);
var G__7949 = null;
var G__7950 = (0);
var G__7951 = (0);
seq__7936 = G__7948;
chunk__7937 = G__7949;
count__7938 = G__7950;
i__7939 = G__7951;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__7952){
var map__7953 = p__7952;
var map__7953__$1 = (((((!((map__7953 == null))))?(((((map__7953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7953):map__7953);
var expr = cljs.core.get.call(null,map__7953__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__7953__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__7953__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__7953__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__7953__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__7953__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__6251__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6251__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6251__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__7955){
var map__7956 = p__7955;
var map__7956__$1 = (((((!((map__7956 == null))))?(((((map__7956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7956):map__7956);
var f = map__7956__$1;
var expr = cljs.core.get.call(null,map__7956__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__7956__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__7956__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__7956__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__7956__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__7956__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__7956__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__7956__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__6251__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6251__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_7966__$1 = (function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_7967 = cljs.compiler.munge.call(null,name_7966__$1);
var delegate_name_7968 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_7967),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_7968," = function (");

var seq__7958_7969 = cljs.core.seq.call(null,params);
var chunk__7959_7970 = null;
var count__7960_7971 = (0);
var i__7961_7972 = (0);
while(true){
if((i__7961_7972 < count__7960_7971)){
var param_7973 = cljs.core._nth.call(null,chunk__7959_7970,i__7961_7972);
cljs.compiler.emit.call(null,param_7973);

if(cljs.core._EQ_.call(null,param_7973,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7974 = seq__7958_7969;
var G__7975 = chunk__7959_7970;
var G__7976 = count__7960_7971;
var G__7977 = (i__7961_7972 + (1));
seq__7958_7969 = G__7974;
chunk__7959_7970 = G__7975;
count__7960_7971 = G__7976;
i__7961_7972 = G__7977;
continue;
} else {
var temp__5735__auto___7978 = cljs.core.seq.call(null,seq__7958_7969);
if(temp__5735__auto___7978){
var seq__7958_7979__$1 = temp__5735__auto___7978;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7958_7979__$1)){
var c__4461__auto___7980 = cljs.core.chunk_first.call(null,seq__7958_7979__$1);
var G__7981 = cljs.core.chunk_rest.call(null,seq__7958_7979__$1);
var G__7982 = c__4461__auto___7980;
var G__7983 = cljs.core.count.call(null,c__4461__auto___7980);
var G__7984 = (0);
seq__7958_7969 = G__7981;
chunk__7959_7970 = G__7982;
count__7960_7971 = G__7983;
i__7961_7972 = G__7984;
continue;
} else {
var param_7985 = cljs.core.first.call(null,seq__7958_7979__$1);
cljs.compiler.emit.call(null,param_7985);

if(cljs.core._EQ_.call(null,param_7985,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7986 = cljs.core.next.call(null,seq__7958_7979__$1);
var G__7987 = null;
var G__7988 = (0);
var G__7989 = (0);
seq__7958_7969 = G__7986;
chunk__7959_7970 = G__7987;
count__7960_7971 = G__7988;
i__7961_7972 = G__7989;
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

cljs.compiler.emitln.call(null,"var ",mname_7967," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_7990 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_7990,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_7968,".call(this,");

var seq__7962_7991 = cljs.core.seq.call(null,params);
var chunk__7963_7992 = null;
var count__7964_7993 = (0);
var i__7965_7994 = (0);
while(true){
if((i__7965_7994 < count__7964_7993)){
var param_7995 = cljs.core._nth.call(null,chunk__7963_7992,i__7965_7994);
cljs.compiler.emit.call(null,param_7995);

if(cljs.core._EQ_.call(null,param_7995,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7996 = seq__7962_7991;
var G__7997 = chunk__7963_7992;
var G__7998 = count__7964_7993;
var G__7999 = (i__7965_7994 + (1));
seq__7962_7991 = G__7996;
chunk__7963_7992 = G__7997;
count__7964_7993 = G__7998;
i__7965_7994 = G__7999;
continue;
} else {
var temp__5735__auto___8000 = cljs.core.seq.call(null,seq__7962_7991);
if(temp__5735__auto___8000){
var seq__7962_8001__$1 = temp__5735__auto___8000;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7962_8001__$1)){
var c__4461__auto___8002 = cljs.core.chunk_first.call(null,seq__7962_8001__$1);
var G__8003 = cljs.core.chunk_rest.call(null,seq__7962_8001__$1);
var G__8004 = c__4461__auto___8002;
var G__8005 = cljs.core.count.call(null,c__4461__auto___8002);
var G__8006 = (0);
seq__7962_7991 = G__8003;
chunk__7963_7992 = G__8004;
count__7964_7993 = G__8005;
i__7965_7994 = G__8006;
continue;
} else {
var param_8007 = cljs.core.first.call(null,seq__7962_8001__$1);
cljs.compiler.emit.call(null,param_8007);

if(cljs.core._EQ_.call(null,param_8007,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__8008 = cljs.core.next.call(null,seq__7962_8001__$1);
var G__8009 = null;
var G__8010 = (0);
var G__8011 = (0);
seq__7962_7991 = G__8008;
chunk__7963_7992 = G__8009;
count__7964_7993 = G__8010;
i__7965_7994 = G__8011;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_7967,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_7967,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_7966__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_7967,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_7968,";");

cljs.compiler.emitln.call(null,"return ",mname_7967,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6251__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__8015){
var map__8016 = p__8015;
var map__8016__$1 = (((((!((map__8016 == null))))?(((((map__8016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8016):map__8016);
var variadic = cljs.core.get.call(null,map__8016__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__8016__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__8016__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__8016__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__8016__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__8016__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__8016__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__8016,map__8016__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__8012_SHARP_){
var and__4036__auto__ = p1__8012_SHARP_;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__8012_SHARP_));
} else {
return and__4036__auto__;
}
});})(map__8016,map__8016__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
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
var name_8051__$1 = (function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_8052 = cljs.compiler.munge.call(null,name_8051__$1);
var maxparams_8053 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_8054 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_8051__$1,mname_8052,maxparams_8053,loop_locals,map__8016,map__8016__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_8052),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_8051__$1,mname_8052,maxparams_8053,loop_locals,map__8016,map__8016__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_8055 = cljs.core.sort_by.call(null,((function (name_8051__$1,mname_8052,maxparams_8053,mmap_8054,loop_locals,map__8016,map__8016__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__8013_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__8013_SHARP_)));
});})(name_8051__$1,mname_8052,maxparams_8053,mmap_8054,loop_locals,map__8016,map__8016__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_8054));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_8052," = null;");

var seq__8018_8056 = cljs.core.seq.call(null,ms_8055);
var chunk__8019_8057 = null;
var count__8020_8058 = (0);
var i__8021_8059 = (0);
while(true){
if((i__8021_8059 < count__8020_8058)){
var vec__8022_8060 = cljs.core._nth.call(null,chunk__8019_8057,i__8021_8059);
var n_8061 = cljs.core.nth.call(null,vec__8022_8060,(0),null);
var meth_8062 = cljs.core.nth.call(null,vec__8022_8060,(1),null);
cljs.compiler.emits.call(null,"var ",n_8061," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_8062))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_8062);
} else {
cljs.compiler.emit_fn_method.call(null,meth_8062);
}

cljs.compiler.emitln.call(null,";");


var G__8063 = seq__8018_8056;
var G__8064 = chunk__8019_8057;
var G__8065 = count__8020_8058;
var G__8066 = (i__8021_8059 + (1));
seq__8018_8056 = G__8063;
chunk__8019_8057 = G__8064;
count__8020_8058 = G__8065;
i__8021_8059 = G__8066;
continue;
} else {
var temp__5735__auto___8067 = cljs.core.seq.call(null,seq__8018_8056);
if(temp__5735__auto___8067){
var seq__8018_8068__$1 = temp__5735__auto___8067;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8018_8068__$1)){
var c__4461__auto___8069 = cljs.core.chunk_first.call(null,seq__8018_8068__$1);
var G__8070 = cljs.core.chunk_rest.call(null,seq__8018_8068__$1);
var G__8071 = c__4461__auto___8069;
var G__8072 = cljs.core.count.call(null,c__4461__auto___8069);
var G__8073 = (0);
seq__8018_8056 = G__8070;
chunk__8019_8057 = G__8071;
count__8020_8058 = G__8072;
i__8021_8059 = G__8073;
continue;
} else {
var vec__8025_8074 = cljs.core.first.call(null,seq__8018_8068__$1);
var n_8075 = cljs.core.nth.call(null,vec__8025_8074,(0),null);
var meth_8076 = cljs.core.nth.call(null,vec__8025_8074,(1),null);
cljs.compiler.emits.call(null,"var ",n_8075," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_8076))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_8076);
} else {
cljs.compiler.emit_fn_method.call(null,meth_8076);
}

cljs.compiler.emitln.call(null,";");


var G__8077 = cljs.core.next.call(null,seq__8018_8068__$1);
var G__8078 = null;
var G__8079 = (0);
var G__8080 = (0);
seq__8018_8056 = G__8077;
chunk__8019_8057 = G__8078;
count__8020_8058 = G__8079;
i__8021_8059 = G__8080;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_8052," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_8053),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_8053)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_8053));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__8028_8081 = cljs.core.seq.call(null,ms_8055);
var chunk__8029_8082 = null;
var count__8030_8083 = (0);
var i__8031_8084 = (0);
while(true){
if((i__8031_8084 < count__8030_8083)){
var vec__8032_8085 = cljs.core._nth.call(null,chunk__8029_8082,i__8031_8084);
var n_8086 = cljs.core.nth.call(null,vec__8032_8085,(0),null);
var meth_8087 = cljs.core.nth.call(null,vec__8032_8085,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_8087))){
cljs.compiler.emitln.call(null,"default:");

var restarg_8088 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_8088," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_8089 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_8088," = new cljs.core.IndexedSeq(",a_8089,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_8086,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_8053)),(((cljs.core.count.call(null,maxparams_8053) > (1)))?", ":null),restarg_8088,");");
} else {
var pcnt_8090 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_8087));
cljs.compiler.emitln.call(null,"case ",pcnt_8090,":");

cljs.compiler.emitln.call(null,"return ",n_8086,".call(this",(((pcnt_8090 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_8090,maxparams_8053)),null,(1),null)),(2),null))),");");
}


var G__8091 = seq__8028_8081;
var G__8092 = chunk__8029_8082;
var G__8093 = count__8030_8083;
var G__8094 = (i__8031_8084 + (1));
seq__8028_8081 = G__8091;
chunk__8029_8082 = G__8092;
count__8030_8083 = G__8093;
i__8031_8084 = G__8094;
continue;
} else {
var temp__5735__auto___8095 = cljs.core.seq.call(null,seq__8028_8081);
if(temp__5735__auto___8095){
var seq__8028_8096__$1 = temp__5735__auto___8095;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8028_8096__$1)){
var c__4461__auto___8097 = cljs.core.chunk_first.call(null,seq__8028_8096__$1);
var G__8098 = cljs.core.chunk_rest.call(null,seq__8028_8096__$1);
var G__8099 = c__4461__auto___8097;
var G__8100 = cljs.core.count.call(null,c__4461__auto___8097);
var G__8101 = (0);
seq__8028_8081 = G__8098;
chunk__8029_8082 = G__8099;
count__8030_8083 = G__8100;
i__8031_8084 = G__8101;
continue;
} else {
var vec__8035_8102 = cljs.core.first.call(null,seq__8028_8096__$1);
var n_8103 = cljs.core.nth.call(null,vec__8035_8102,(0),null);
var meth_8104 = cljs.core.nth.call(null,vec__8035_8102,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_8104))){
cljs.compiler.emitln.call(null,"default:");

var restarg_8105 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_8105," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_8106 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_8105," = new cljs.core.IndexedSeq(",a_8106,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_8103,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_8053)),(((cljs.core.count.call(null,maxparams_8053) > (1)))?", ":null),restarg_8105,");");
} else {
var pcnt_8107 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_8104));
cljs.compiler.emitln.call(null,"case ",pcnt_8107,":");

cljs.compiler.emitln.call(null,"return ",n_8103,".call(this",(((pcnt_8107 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_8107,maxparams_8053)),null,(1),null)),(2),null))),");");
}


var G__8108 = cljs.core.next.call(null,seq__8028_8096__$1);
var G__8109 = null;
var G__8110 = (0);
var G__8111 = (0);
seq__8028_8081 = G__8108;
chunk__8029_8082 = G__8109;
count__8030_8083 = G__8110;
i__8031_8084 = G__8111;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_8112 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_8055)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_8112,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_8052,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_8052,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_8051__$1,mname_8052,maxparams_8053,mmap_8054,ms_8055,loop_locals,map__8016,map__8016__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__8014_SHARP_){
var vec__8038 = p1__8014_SHARP_;
var n = cljs.core.nth.call(null,vec__8038,(0),null);
var m = cljs.core.nth.call(null,vec__8038,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_8051__$1,mname_8052,maxparams_8053,mmap_8054,ms_8055,loop_locals,map__8016,map__8016__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_8055),".cljs$lang$applyTo;");
} else {
}

var seq__8041_8113 = cljs.core.seq.call(null,ms_8055);
var chunk__8042_8114 = null;
var count__8043_8115 = (0);
var i__8044_8116 = (0);
while(true){
if((i__8044_8116 < count__8043_8115)){
var vec__8045_8117 = cljs.core._nth.call(null,chunk__8042_8114,i__8044_8116);
var n_8118 = cljs.core.nth.call(null,vec__8045_8117,(0),null);
var meth_8119 = cljs.core.nth.call(null,vec__8045_8117,(1),null);
var c_8120 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_8119));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_8119))){
cljs.compiler.emitln.call(null,mname_8052,".cljs$core$IFn$_invoke$arity$variadic = ",n_8118,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_8052,".cljs$core$IFn$_invoke$arity$",c_8120," = ",n_8118,";");
}


var G__8121 = seq__8041_8113;
var G__8122 = chunk__8042_8114;
var G__8123 = count__8043_8115;
var G__8124 = (i__8044_8116 + (1));
seq__8041_8113 = G__8121;
chunk__8042_8114 = G__8122;
count__8043_8115 = G__8123;
i__8044_8116 = G__8124;
continue;
} else {
var temp__5735__auto___8125 = cljs.core.seq.call(null,seq__8041_8113);
if(temp__5735__auto___8125){
var seq__8041_8126__$1 = temp__5735__auto___8125;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8041_8126__$1)){
var c__4461__auto___8127 = cljs.core.chunk_first.call(null,seq__8041_8126__$1);
var G__8128 = cljs.core.chunk_rest.call(null,seq__8041_8126__$1);
var G__8129 = c__4461__auto___8127;
var G__8130 = cljs.core.count.call(null,c__4461__auto___8127);
var G__8131 = (0);
seq__8041_8113 = G__8128;
chunk__8042_8114 = G__8129;
count__8043_8115 = G__8130;
i__8044_8116 = G__8131;
continue;
} else {
var vec__8048_8132 = cljs.core.first.call(null,seq__8041_8126__$1);
var n_8133 = cljs.core.nth.call(null,vec__8048_8132,(0),null);
var meth_8134 = cljs.core.nth.call(null,vec__8048_8132,(1),null);
var c_8135 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_8134));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_8134))){
cljs.compiler.emitln.call(null,mname_8052,".cljs$core$IFn$_invoke$arity$variadic = ",n_8133,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_8052,".cljs$core$IFn$_invoke$arity$",c_8135," = ",n_8133,";");
}


var G__8136 = cljs.core.next.call(null,seq__8041_8126__$1);
var G__8137 = null;
var G__8138 = (0);
var G__8139 = (0);
seq__8041_8113 = G__8136;
chunk__8042_8114 = G__8137;
count__8043_8115 = G__8138;
i__8044_8116 = G__8139;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_8052,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__8140){
var map__8141 = p__8140;
var map__8141__$1 = (((((!((map__8141 == null))))?(((((map__8141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8141):map__8141);
var statements = cljs.core.get.call(null,map__8141__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__8141__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__8141__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__8143_8147 = cljs.core.seq.call(null,statements);
var chunk__8144_8148 = null;
var count__8145_8149 = (0);
var i__8146_8150 = (0);
while(true){
if((i__8146_8150 < count__8145_8149)){
var s_8151 = cljs.core._nth.call(null,chunk__8144_8148,i__8146_8150);
cljs.compiler.emitln.call(null,s_8151);


var G__8152 = seq__8143_8147;
var G__8153 = chunk__8144_8148;
var G__8154 = count__8145_8149;
var G__8155 = (i__8146_8150 + (1));
seq__8143_8147 = G__8152;
chunk__8144_8148 = G__8153;
count__8145_8149 = G__8154;
i__8146_8150 = G__8155;
continue;
} else {
var temp__5735__auto___8156 = cljs.core.seq.call(null,seq__8143_8147);
if(temp__5735__auto___8156){
var seq__8143_8157__$1 = temp__5735__auto___8156;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8143_8157__$1)){
var c__4461__auto___8158 = cljs.core.chunk_first.call(null,seq__8143_8157__$1);
var G__8159 = cljs.core.chunk_rest.call(null,seq__8143_8157__$1);
var G__8160 = c__4461__auto___8158;
var G__8161 = cljs.core.count.call(null,c__4461__auto___8158);
var G__8162 = (0);
seq__8143_8147 = G__8159;
chunk__8144_8148 = G__8160;
count__8145_8149 = G__8161;
i__8146_8150 = G__8162;
continue;
} else {
var s_8163 = cljs.core.first.call(null,seq__8143_8157__$1);
cljs.compiler.emitln.call(null,s_8163);


var G__8164 = cljs.core.next.call(null,seq__8143_8157__$1);
var G__8165 = null;
var G__8166 = (0);
var G__8167 = (0);
seq__8143_8147 = G__8164;
chunk__8144_8148 = G__8165;
count__8145_8149 = G__8166;
i__8146_8150 = G__8167;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__8168){
var map__8169 = p__8168;
var map__8169__$1 = (((((!((map__8169 == null))))?(((((map__8169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8169):map__8169);
var try$ = cljs.core.get.call(null,map__8169__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__8169__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__8169__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__8169__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__8169__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__8171,is_loop){
var map__8172 = p__8171;
var map__8172__$1 = (((((!((map__8172 == null))))?(((((map__8172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8172):map__8172);
var expr = cljs.core.get.call(null,map__8172__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__8172__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__8172__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__8174_8184 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__8175_8185 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR__orig_val__8174_8184,context,map__8172,map__8172__$1,expr,bindings,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__8174_8184,context,map__8172,map__8172__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__8175_8185;

try{var seq__8176_8186 = cljs.core.seq.call(null,bindings);
var chunk__8177_8187 = null;
var count__8178_8188 = (0);
var i__8179_8189 = (0);
while(true){
if((i__8179_8189 < count__8178_8188)){
var map__8180_8190 = cljs.core._nth.call(null,chunk__8177_8187,i__8179_8189);
var map__8180_8191__$1 = (((((!((map__8180_8190 == null))))?(((((map__8180_8190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8180_8190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8180_8190):map__8180_8190);
var binding_8192 = map__8180_8191__$1;
var init_8193 = cljs.core.get.call(null,map__8180_8191__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_8192);

cljs.compiler.emitln.call(null," = ",init_8193,";");


var G__8194 = seq__8176_8186;
var G__8195 = chunk__8177_8187;
var G__8196 = count__8178_8188;
var G__8197 = (i__8179_8189 + (1));
seq__8176_8186 = G__8194;
chunk__8177_8187 = G__8195;
count__8178_8188 = G__8196;
i__8179_8189 = G__8197;
continue;
} else {
var temp__5735__auto___8198 = cljs.core.seq.call(null,seq__8176_8186);
if(temp__5735__auto___8198){
var seq__8176_8199__$1 = temp__5735__auto___8198;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8176_8199__$1)){
var c__4461__auto___8200 = cljs.core.chunk_first.call(null,seq__8176_8199__$1);
var G__8201 = cljs.core.chunk_rest.call(null,seq__8176_8199__$1);
var G__8202 = c__4461__auto___8200;
var G__8203 = cljs.core.count.call(null,c__4461__auto___8200);
var G__8204 = (0);
seq__8176_8186 = G__8201;
chunk__8177_8187 = G__8202;
count__8178_8188 = G__8203;
i__8179_8189 = G__8204;
continue;
} else {
var map__8182_8205 = cljs.core.first.call(null,seq__8176_8199__$1);
var map__8182_8206__$1 = (((((!((map__8182_8205 == null))))?(((((map__8182_8205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8182_8205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8182_8205):map__8182_8205);
var binding_8207 = map__8182_8206__$1;
var init_8208 = cljs.core.get.call(null,map__8182_8206__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_8207);

cljs.compiler.emitln.call(null," = ",init_8208,";");


var G__8209 = cljs.core.next.call(null,seq__8176_8199__$1);
var G__8210 = null;
var G__8211 = (0);
var G__8212 = (0);
seq__8176_8186 = G__8209;
chunk__8177_8187 = G__8210;
count__8178_8188 = G__8211;
i__8179_8189 = G__8212;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__8174_8184;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__8213){
var map__8214 = p__8213;
var map__8214__$1 = (((((!((map__8214 == null))))?(((((map__8214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8214):map__8214);
var frame = cljs.core.get.call(null,map__8214__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__8214__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__8214__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4518__auto___8216 = cljs.core.count.call(null,exprs);
var i_8217 = (0);
while(true){
if((i_8217 < n__4518__auto___8216)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_8217)," = ",exprs.call(null,i_8217),";");

var G__8218 = (i_8217 + (1));
i_8217 = G__8218;
continue;
} else {
}
break;
}

var n__4518__auto___8219 = cljs.core.count.call(null,exprs);
var i_8220 = (0);
while(true){
if((i_8220 < n__4518__auto___8219)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_8220))," = ",temps.call(null,i_8220),";");

var G__8221 = (i_8220 + (1));
i_8220 = G__8221;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__8222){
var map__8223 = p__8222;
var map__8223__$1 = (((((!((map__8223 == null))))?(((((map__8223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8223):map__8223);
var expr = cljs.core.get.call(null,map__8223__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__8223__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__8223__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__8225_8233 = cljs.core.seq.call(null,bindings);
var chunk__8226_8234 = null;
var count__8227_8235 = (0);
var i__8228_8236 = (0);
while(true){
if((i__8228_8236 < count__8227_8235)){
var map__8229_8237 = cljs.core._nth.call(null,chunk__8226_8234,i__8228_8236);
var map__8229_8238__$1 = (((((!((map__8229_8237 == null))))?(((((map__8229_8237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8229_8237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8229_8237):map__8229_8237);
var binding_8239 = map__8229_8238__$1;
var init_8240 = cljs.core.get.call(null,map__8229_8238__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_8239)," = ",init_8240,";");


var G__8241 = seq__8225_8233;
var G__8242 = chunk__8226_8234;
var G__8243 = count__8227_8235;
var G__8244 = (i__8228_8236 + (1));
seq__8225_8233 = G__8241;
chunk__8226_8234 = G__8242;
count__8227_8235 = G__8243;
i__8228_8236 = G__8244;
continue;
} else {
var temp__5735__auto___8245 = cljs.core.seq.call(null,seq__8225_8233);
if(temp__5735__auto___8245){
var seq__8225_8246__$1 = temp__5735__auto___8245;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8225_8246__$1)){
var c__4461__auto___8247 = cljs.core.chunk_first.call(null,seq__8225_8246__$1);
var G__8248 = cljs.core.chunk_rest.call(null,seq__8225_8246__$1);
var G__8249 = c__4461__auto___8247;
var G__8250 = cljs.core.count.call(null,c__4461__auto___8247);
var G__8251 = (0);
seq__8225_8233 = G__8248;
chunk__8226_8234 = G__8249;
count__8227_8235 = G__8250;
i__8228_8236 = G__8251;
continue;
} else {
var map__8231_8252 = cljs.core.first.call(null,seq__8225_8246__$1);
var map__8231_8253__$1 = (((((!((map__8231_8252 == null))))?(((((map__8231_8252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8231_8252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8231_8252):map__8231_8252);
var binding_8254 = map__8231_8253__$1;
var init_8255 = cljs.core.get.call(null,map__8231_8253__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_8254)," = ",init_8255,";");


var G__8256 = cljs.core.next.call(null,seq__8225_8246__$1);
var G__8257 = null;
var G__8258 = (0);
var G__8259 = (0);
seq__8225_8233 = G__8256;
chunk__8226_8234 = G__8257;
count__8227_8235 = G__8258;
i__8228_8236 = G__8259;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__8262){
var map__8263 = p__8262;
var map__8263__$1 = (((((!((map__8263 == null))))?(((((map__8263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8263):map__8263);
var expr = map__8263__$1;
var f = cljs.core.get.call(null,map__8263__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__8263__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__8263__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__8265 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__8263,map__8263__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__8263,map__8263__$1,expr,f,args,env){
return (function (p1__8260_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__8260_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__8263,map__8263__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__8263,map__8263__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__8263,map__8263__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__8263,map__8263__$1,expr,f,args,env){
return (function (p1__8261_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__8261_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__8263,map__8263__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__8263,map__8263__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__8265,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__8265,(1),null);
var env__6251__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6251__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_8268 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_8268,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_8269 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_8269,args)),(((mfa_8269 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_8269,args)),"], 0))");
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
var fprop_8270 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_8270," ? ",f__$1,fprop_8270,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_8270," ? ",f__$1,fprop_8270,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6251__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__8271){
var map__8272 = p__8271;
var map__8272__$1 = (((((!((map__8272 == null))))?(((((map__8272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8272):map__8272);
var ctor = cljs.core.get.call(null,map__8272__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__8272__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__8272__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6251__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6251__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6251__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__8274){
var map__8275 = p__8274;
var map__8275__$1 = (((((!((map__8275 == null))))?(((((map__8275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8275):map__8275);
var target = cljs.core.get.call(null,map__8275__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__8275__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__8275__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6251__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6251__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6251__auto__))){
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
var map__8277 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__8277__$1 = (((((!((map__8277 == null))))?(((((map__8277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8277):map__8277);
var options = cljs.core.get.call(null,map__8277__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__8277__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__8278 = options;
var map__8278__$1 = (((((!((map__8278 == null))))?(((((map__8278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8278):map__8278);
var target = cljs.core.get.call(null,map__8278__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__8278__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__8279 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__8284 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__8284__$1 = (((((!((map__8284 == null))))?(((((map__8284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8284):map__8284);
var node_libs = cljs.core.get.call(null,map__8284__$1,true);
var libs_to_load = cljs.core.get.call(null,map__8284__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__8279,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__8279,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__8286_8302 = cljs.core.seq.call(null,libs_to_load);
var chunk__8287_8303 = null;
var count__8288_8304 = (0);
var i__8289_8305 = (0);
while(true){
if((i__8289_8305 < count__8288_8304)){
var lib_8306 = cljs.core._nth.call(null,chunk__8287_8303,i__8289_8305);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_8306)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_8306),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_8306),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_8306),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_8306),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_8306,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_8306),"');");
}

}
}
}


var G__8307 = seq__8286_8302;
var G__8308 = chunk__8287_8303;
var G__8309 = count__8288_8304;
var G__8310 = (i__8289_8305 + (1));
seq__8286_8302 = G__8307;
chunk__8287_8303 = G__8308;
count__8288_8304 = G__8309;
i__8289_8305 = G__8310;
continue;
} else {
var temp__5735__auto___8311 = cljs.core.seq.call(null,seq__8286_8302);
if(temp__5735__auto___8311){
var seq__8286_8312__$1 = temp__5735__auto___8311;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8286_8312__$1)){
var c__4461__auto___8313 = cljs.core.chunk_first.call(null,seq__8286_8312__$1);
var G__8314 = cljs.core.chunk_rest.call(null,seq__8286_8312__$1);
var G__8315 = c__4461__auto___8313;
var G__8316 = cljs.core.count.call(null,c__4461__auto___8313);
var G__8317 = (0);
seq__8286_8302 = G__8314;
chunk__8287_8303 = G__8315;
count__8288_8304 = G__8316;
i__8289_8305 = G__8317;
continue;
} else {
var lib_8318 = cljs.core.first.call(null,seq__8286_8312__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_8318)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_8318),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_8318),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_8318),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_8318),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_8318,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_8318),"');");
}

}
}
}


var G__8319 = cljs.core.next.call(null,seq__8286_8312__$1);
var G__8320 = null;
var G__8321 = (0);
var G__8322 = (0);
seq__8286_8302 = G__8319;
chunk__8287_8303 = G__8320;
count__8288_8304 = G__8321;
i__8289_8305 = G__8322;
continue;
}
} else {
}
}
break;
}

var seq__8290_8323 = cljs.core.seq.call(null,node_libs);
var chunk__8291_8324 = null;
var count__8292_8325 = (0);
var i__8293_8326 = (0);
while(true){
if((i__8293_8326 < count__8292_8325)){
var lib_8327 = cljs.core._nth.call(null,chunk__8291_8324,i__8293_8326);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_8327)," = require('",lib_8327,"');");


var G__8328 = seq__8290_8323;
var G__8329 = chunk__8291_8324;
var G__8330 = count__8292_8325;
var G__8331 = (i__8293_8326 + (1));
seq__8290_8323 = G__8328;
chunk__8291_8324 = G__8329;
count__8292_8325 = G__8330;
i__8293_8326 = G__8331;
continue;
} else {
var temp__5735__auto___8332 = cljs.core.seq.call(null,seq__8290_8323);
if(temp__5735__auto___8332){
var seq__8290_8333__$1 = temp__5735__auto___8332;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8290_8333__$1)){
var c__4461__auto___8334 = cljs.core.chunk_first.call(null,seq__8290_8333__$1);
var G__8335 = cljs.core.chunk_rest.call(null,seq__8290_8333__$1);
var G__8336 = c__4461__auto___8334;
var G__8337 = cljs.core.count.call(null,c__4461__auto___8334);
var G__8338 = (0);
seq__8290_8323 = G__8335;
chunk__8291_8324 = G__8336;
count__8292_8325 = G__8337;
i__8293_8326 = G__8338;
continue;
} else {
var lib_8339 = cljs.core.first.call(null,seq__8290_8333__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_8339)," = require('",lib_8339,"');");


var G__8340 = cljs.core.next.call(null,seq__8290_8333__$1);
var G__8341 = null;
var G__8342 = (0);
var G__8343 = (0);
seq__8290_8323 = G__8340;
chunk__8291_8324 = G__8341;
count__8292_8325 = G__8342;
i__8293_8326 = G__8343;
continue;
}
} else {
}
}
break;
}

var seq__8294_8344 = cljs.core.seq.call(null,global_exports_libs);
var chunk__8295_8345 = null;
var count__8296_8346 = (0);
var i__8297_8347 = (0);
while(true){
if((i__8297_8347 < count__8296_8346)){
var lib_8348 = cljs.core._nth.call(null,chunk__8295_8345,i__8297_8347);
var map__8298_8349 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_8348));
var map__8298_8350__$1 = (((((!((map__8298_8349 == null))))?(((((map__8298_8349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8298_8349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8298_8349):map__8298_8349);
var global_exports_8351 = cljs.core.get.call(null,map__8298_8350__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_8351,lib_8348);


var G__8352 = seq__8294_8344;
var G__8353 = chunk__8295_8345;
var G__8354 = count__8296_8346;
var G__8355 = (i__8297_8347 + (1));
seq__8294_8344 = G__8352;
chunk__8295_8345 = G__8353;
count__8296_8346 = G__8354;
i__8297_8347 = G__8355;
continue;
} else {
var temp__5735__auto___8356 = cljs.core.seq.call(null,seq__8294_8344);
if(temp__5735__auto___8356){
var seq__8294_8357__$1 = temp__5735__auto___8356;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8294_8357__$1)){
var c__4461__auto___8358 = cljs.core.chunk_first.call(null,seq__8294_8357__$1);
var G__8359 = cljs.core.chunk_rest.call(null,seq__8294_8357__$1);
var G__8360 = c__4461__auto___8358;
var G__8361 = cljs.core.count.call(null,c__4461__auto___8358);
var G__8362 = (0);
seq__8294_8344 = G__8359;
chunk__8295_8345 = G__8360;
count__8296_8346 = G__8361;
i__8297_8347 = G__8362;
continue;
} else {
var lib_8363 = cljs.core.first.call(null,seq__8294_8357__$1);
var map__8300_8364 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_8363));
var map__8300_8365__$1 = (((((!((map__8300_8364 == null))))?(((((map__8300_8364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8300_8364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8300_8364):map__8300_8364);
var global_exports_8366 = cljs.core.get.call(null,map__8300_8365__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_8366,lib_8363);


var G__8367 = cljs.core.next.call(null,seq__8294_8357__$1);
var G__8368 = null;
var G__8369 = (0);
var G__8370 = (0);
seq__8294_8344 = G__8367;
chunk__8295_8345 = G__8368;
count__8296_8346 = G__8369;
i__8297_8347 = G__8370;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__8371){
var map__8372 = p__8371;
var map__8372__$1 = (((((!((map__8372 == null))))?(((((map__8372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8372):map__8372);
var name = cljs.core.get.call(null,map__8372__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__8372__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__8372__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__8372__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__8372__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__8372__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__8372__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__8374){
var map__8375 = p__8374;
var map__8375__$1 = (((((!((map__8375 == null))))?(((((map__8375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8375):map__8375);
var name = cljs.core.get.call(null,map__8375__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__8375__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__8375__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__8375__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__8375__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__8375__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__8375__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__8377){
var map__8378 = p__8377;
var map__8378__$1 = (((((!((map__8378 == null))))?(((((map__8378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8378):map__8378);
var t = cljs.core.get.call(null,map__8378__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__8378__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__8378__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__8378__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__8378__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__8380_8398 = cljs.core.seq.call(null,protocols);
var chunk__8381_8399 = null;
var count__8382_8400 = (0);
var i__8383_8401 = (0);
while(true){
if((i__8383_8401 < count__8382_8400)){
var protocol_8402 = cljs.core._nth.call(null,chunk__8381_8399,i__8383_8401);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_8402)),"}");


var G__8403 = seq__8380_8398;
var G__8404 = chunk__8381_8399;
var G__8405 = count__8382_8400;
var G__8406 = (i__8383_8401 + (1));
seq__8380_8398 = G__8403;
chunk__8381_8399 = G__8404;
count__8382_8400 = G__8405;
i__8383_8401 = G__8406;
continue;
} else {
var temp__5735__auto___8407 = cljs.core.seq.call(null,seq__8380_8398);
if(temp__5735__auto___8407){
var seq__8380_8408__$1 = temp__5735__auto___8407;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8380_8408__$1)){
var c__4461__auto___8409 = cljs.core.chunk_first.call(null,seq__8380_8408__$1);
var G__8410 = cljs.core.chunk_rest.call(null,seq__8380_8408__$1);
var G__8411 = c__4461__auto___8409;
var G__8412 = cljs.core.count.call(null,c__4461__auto___8409);
var G__8413 = (0);
seq__8380_8398 = G__8410;
chunk__8381_8399 = G__8411;
count__8382_8400 = G__8412;
i__8383_8401 = G__8413;
continue;
} else {
var protocol_8414 = cljs.core.first.call(null,seq__8380_8408__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_8414)),"}");


var G__8415 = cljs.core.next.call(null,seq__8380_8408__$1);
var G__8416 = null;
var G__8417 = (0);
var G__8418 = (0);
seq__8380_8398 = G__8415;
chunk__8381_8399 = G__8416;
count__8382_8400 = G__8417;
i__8383_8401 = G__8418;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__8384_8419 = cljs.core.seq.call(null,fields__$1);
var chunk__8385_8420 = null;
var count__8386_8421 = (0);
var i__8387_8422 = (0);
while(true){
if((i__8387_8422 < count__8386_8421)){
var fld_8423 = cljs.core._nth.call(null,chunk__8385_8420,i__8387_8422);
cljs.compiler.emitln.call(null,"this.",fld_8423," = ",fld_8423,";");


var G__8424 = seq__8384_8419;
var G__8425 = chunk__8385_8420;
var G__8426 = count__8386_8421;
var G__8427 = (i__8387_8422 + (1));
seq__8384_8419 = G__8424;
chunk__8385_8420 = G__8425;
count__8386_8421 = G__8426;
i__8387_8422 = G__8427;
continue;
} else {
var temp__5735__auto___8428 = cljs.core.seq.call(null,seq__8384_8419);
if(temp__5735__auto___8428){
var seq__8384_8429__$1 = temp__5735__auto___8428;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8384_8429__$1)){
var c__4461__auto___8430 = cljs.core.chunk_first.call(null,seq__8384_8429__$1);
var G__8431 = cljs.core.chunk_rest.call(null,seq__8384_8429__$1);
var G__8432 = c__4461__auto___8430;
var G__8433 = cljs.core.count.call(null,c__4461__auto___8430);
var G__8434 = (0);
seq__8384_8419 = G__8431;
chunk__8385_8420 = G__8432;
count__8386_8421 = G__8433;
i__8387_8422 = G__8434;
continue;
} else {
var fld_8435 = cljs.core.first.call(null,seq__8384_8429__$1);
cljs.compiler.emitln.call(null,"this.",fld_8435," = ",fld_8435,";");


var G__8436 = cljs.core.next.call(null,seq__8384_8429__$1);
var G__8437 = null;
var G__8438 = (0);
var G__8439 = (0);
seq__8384_8419 = G__8436;
chunk__8385_8420 = G__8437;
count__8386_8421 = G__8438;
i__8387_8422 = G__8439;
continue;
}
} else {
}
}
break;
}

var seq__8388_8440 = cljs.core.seq.call(null,pmasks);
var chunk__8389_8441 = null;
var count__8390_8442 = (0);
var i__8391_8443 = (0);
while(true){
if((i__8391_8443 < count__8390_8442)){
var vec__8392_8444 = cljs.core._nth.call(null,chunk__8389_8441,i__8391_8443);
var pno_8445 = cljs.core.nth.call(null,vec__8392_8444,(0),null);
var pmask_8446 = cljs.core.nth.call(null,vec__8392_8444,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_8445,"$ = ",pmask_8446,";");


var G__8447 = seq__8388_8440;
var G__8448 = chunk__8389_8441;
var G__8449 = count__8390_8442;
var G__8450 = (i__8391_8443 + (1));
seq__8388_8440 = G__8447;
chunk__8389_8441 = G__8448;
count__8390_8442 = G__8449;
i__8391_8443 = G__8450;
continue;
} else {
var temp__5735__auto___8451 = cljs.core.seq.call(null,seq__8388_8440);
if(temp__5735__auto___8451){
var seq__8388_8452__$1 = temp__5735__auto___8451;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8388_8452__$1)){
var c__4461__auto___8453 = cljs.core.chunk_first.call(null,seq__8388_8452__$1);
var G__8454 = cljs.core.chunk_rest.call(null,seq__8388_8452__$1);
var G__8455 = c__4461__auto___8453;
var G__8456 = cljs.core.count.call(null,c__4461__auto___8453);
var G__8457 = (0);
seq__8388_8440 = G__8454;
chunk__8389_8441 = G__8455;
count__8390_8442 = G__8456;
i__8391_8443 = G__8457;
continue;
} else {
var vec__8395_8458 = cljs.core.first.call(null,seq__8388_8452__$1);
var pno_8459 = cljs.core.nth.call(null,vec__8395_8458,(0),null);
var pmask_8460 = cljs.core.nth.call(null,vec__8395_8458,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_8459,"$ = ",pmask_8460,";");


var G__8461 = cljs.core.next.call(null,seq__8388_8452__$1);
var G__8462 = null;
var G__8463 = (0);
var G__8464 = (0);
seq__8388_8440 = G__8461;
chunk__8389_8441 = G__8462;
count__8390_8442 = G__8463;
i__8391_8443 = G__8464;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__8465){
var map__8466 = p__8465;
var map__8466__$1 = (((((!((map__8466 == null))))?(((((map__8466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8466):map__8466);
var t = cljs.core.get.call(null,map__8466__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__8466__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__8466__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__8466__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__8466__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__8468_8486 = cljs.core.seq.call(null,protocols);
var chunk__8469_8487 = null;
var count__8470_8488 = (0);
var i__8471_8489 = (0);
while(true){
if((i__8471_8489 < count__8470_8488)){
var protocol_8490 = cljs.core._nth.call(null,chunk__8469_8487,i__8471_8489);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_8490)),"}");


var G__8491 = seq__8468_8486;
var G__8492 = chunk__8469_8487;
var G__8493 = count__8470_8488;
var G__8494 = (i__8471_8489 + (1));
seq__8468_8486 = G__8491;
chunk__8469_8487 = G__8492;
count__8470_8488 = G__8493;
i__8471_8489 = G__8494;
continue;
} else {
var temp__5735__auto___8495 = cljs.core.seq.call(null,seq__8468_8486);
if(temp__5735__auto___8495){
var seq__8468_8496__$1 = temp__5735__auto___8495;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8468_8496__$1)){
var c__4461__auto___8497 = cljs.core.chunk_first.call(null,seq__8468_8496__$1);
var G__8498 = cljs.core.chunk_rest.call(null,seq__8468_8496__$1);
var G__8499 = c__4461__auto___8497;
var G__8500 = cljs.core.count.call(null,c__4461__auto___8497);
var G__8501 = (0);
seq__8468_8486 = G__8498;
chunk__8469_8487 = G__8499;
count__8470_8488 = G__8500;
i__8471_8489 = G__8501;
continue;
} else {
var protocol_8502 = cljs.core.first.call(null,seq__8468_8496__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_8502)),"}");


var G__8503 = cljs.core.next.call(null,seq__8468_8496__$1);
var G__8504 = null;
var G__8505 = (0);
var G__8506 = (0);
seq__8468_8486 = G__8503;
chunk__8469_8487 = G__8504;
count__8470_8488 = G__8505;
i__8471_8489 = G__8506;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__8472_8507 = cljs.core.seq.call(null,fields__$1);
var chunk__8473_8508 = null;
var count__8474_8509 = (0);
var i__8475_8510 = (0);
while(true){
if((i__8475_8510 < count__8474_8509)){
var fld_8511 = cljs.core._nth.call(null,chunk__8473_8508,i__8475_8510);
cljs.compiler.emitln.call(null,"this.",fld_8511," = ",fld_8511,";");


var G__8512 = seq__8472_8507;
var G__8513 = chunk__8473_8508;
var G__8514 = count__8474_8509;
var G__8515 = (i__8475_8510 + (1));
seq__8472_8507 = G__8512;
chunk__8473_8508 = G__8513;
count__8474_8509 = G__8514;
i__8475_8510 = G__8515;
continue;
} else {
var temp__5735__auto___8516 = cljs.core.seq.call(null,seq__8472_8507);
if(temp__5735__auto___8516){
var seq__8472_8517__$1 = temp__5735__auto___8516;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8472_8517__$1)){
var c__4461__auto___8518 = cljs.core.chunk_first.call(null,seq__8472_8517__$1);
var G__8519 = cljs.core.chunk_rest.call(null,seq__8472_8517__$1);
var G__8520 = c__4461__auto___8518;
var G__8521 = cljs.core.count.call(null,c__4461__auto___8518);
var G__8522 = (0);
seq__8472_8507 = G__8519;
chunk__8473_8508 = G__8520;
count__8474_8509 = G__8521;
i__8475_8510 = G__8522;
continue;
} else {
var fld_8523 = cljs.core.first.call(null,seq__8472_8517__$1);
cljs.compiler.emitln.call(null,"this.",fld_8523," = ",fld_8523,";");


var G__8524 = cljs.core.next.call(null,seq__8472_8517__$1);
var G__8525 = null;
var G__8526 = (0);
var G__8527 = (0);
seq__8472_8507 = G__8524;
chunk__8473_8508 = G__8525;
count__8474_8509 = G__8526;
i__8475_8510 = G__8527;
continue;
}
} else {
}
}
break;
}

var seq__8476_8528 = cljs.core.seq.call(null,pmasks);
var chunk__8477_8529 = null;
var count__8478_8530 = (0);
var i__8479_8531 = (0);
while(true){
if((i__8479_8531 < count__8478_8530)){
var vec__8480_8532 = cljs.core._nth.call(null,chunk__8477_8529,i__8479_8531);
var pno_8533 = cljs.core.nth.call(null,vec__8480_8532,(0),null);
var pmask_8534 = cljs.core.nth.call(null,vec__8480_8532,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_8533,"$ = ",pmask_8534,";");


var G__8535 = seq__8476_8528;
var G__8536 = chunk__8477_8529;
var G__8537 = count__8478_8530;
var G__8538 = (i__8479_8531 + (1));
seq__8476_8528 = G__8535;
chunk__8477_8529 = G__8536;
count__8478_8530 = G__8537;
i__8479_8531 = G__8538;
continue;
} else {
var temp__5735__auto___8539 = cljs.core.seq.call(null,seq__8476_8528);
if(temp__5735__auto___8539){
var seq__8476_8540__$1 = temp__5735__auto___8539;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8476_8540__$1)){
var c__4461__auto___8541 = cljs.core.chunk_first.call(null,seq__8476_8540__$1);
var G__8542 = cljs.core.chunk_rest.call(null,seq__8476_8540__$1);
var G__8543 = c__4461__auto___8541;
var G__8544 = cljs.core.count.call(null,c__4461__auto___8541);
var G__8545 = (0);
seq__8476_8528 = G__8542;
chunk__8477_8529 = G__8543;
count__8478_8530 = G__8544;
i__8479_8531 = G__8545;
continue;
} else {
var vec__8483_8546 = cljs.core.first.call(null,seq__8476_8540__$1);
var pno_8547 = cljs.core.nth.call(null,vec__8483_8546,(0),null);
var pmask_8548 = cljs.core.nth.call(null,vec__8483_8546,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_8547,"$ = ",pmask_8548,";");


var G__8549 = cljs.core.next.call(null,seq__8476_8540__$1);
var G__8550 = null;
var G__8551 = (0);
var G__8552 = (0);
seq__8476_8528 = G__8549;
chunk__8477_8529 = G__8550;
count__8478_8530 = G__8551;
i__8479_8531 = G__8552;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__8553){
var map__8554 = p__8553;
var map__8554__$1 = (((((!((map__8554 == null))))?(((((map__8554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8554):map__8554);
var target = cljs.core.get.call(null,map__8554__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__8554__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__8554__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__8554__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__8554__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6251__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6251__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6251__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__8556){
var map__8557 = p__8556;
var map__8557__$1 = (((((!((map__8557 == null))))?(((((map__8557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8557):map__8557);
var op = cljs.core.get.call(null,map__8557__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__8557__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__8557__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__8557__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__8557__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4036__auto__ = code;
if(cljs.core.truth_(and__4036__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4036__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__6251__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6251__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6251__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__8563 = cljs.core.seq.call(null,table);
var chunk__8564 = null;
var count__8565 = (0);
var i__8566 = (0);
while(true){
if((i__8566 < count__8565)){
var vec__8567 = cljs.core._nth.call(null,chunk__8564,i__8566);
var sym = cljs.core.nth.call(null,vec__8567,(0),null);
var value = cljs.core.nth.call(null,vec__8567,(1),null);
var ns_8573 = cljs.core.namespace.call(null,sym);
var name_8574 = cljs.core.name.call(null,sym);
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


var G__8575 = seq__8563;
var G__8576 = chunk__8564;
var G__8577 = count__8565;
var G__8578 = (i__8566 + (1));
seq__8563 = G__8575;
chunk__8564 = G__8576;
count__8565 = G__8577;
i__8566 = G__8578;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__8563);
if(temp__5735__auto__){
var seq__8563__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8563__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__8563__$1);
var G__8579 = cljs.core.chunk_rest.call(null,seq__8563__$1);
var G__8580 = c__4461__auto__;
var G__8581 = cljs.core.count.call(null,c__4461__auto__);
var G__8582 = (0);
seq__8563 = G__8579;
chunk__8564 = G__8580;
count__8565 = G__8581;
i__8566 = G__8582;
continue;
} else {
var vec__8570 = cljs.core.first.call(null,seq__8563__$1);
var sym = cljs.core.nth.call(null,vec__8570,(0),null);
var value = cljs.core.nth.call(null,vec__8570,(1),null);
var ns_8583 = cljs.core.namespace.call(null,sym);
var name_8584 = cljs.core.name.call(null,sym);
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


var G__8585 = cljs.core.next.call(null,seq__8563__$1);
var G__8586 = null;
var G__8587 = (0);
var G__8588 = (0);
seq__8563 = G__8585;
chunk__8564 = G__8586;
count__8565 = G__8587;
i__8566 = G__8588;
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
var G__8590 = arguments.length;
switch (G__8590) {
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
var k_8595 = cljs.core.first.call(null,ks);
var vec__8591_8596 = cljs.core.conj.call(null,prefix,k_8595);
var top_8597 = cljs.core.nth.call(null,vec__8591_8596,(0),null);
var prefix_SINGLEQUOTE__8598 = vec__8591_8596;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_8595)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__8598) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_8597)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_8597)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__8598)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_8597);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__8598)),";");
}
} else {
}

var m_8599 = cljs.core.get.call(null,externs,k_8595);
if(cljs.core.empty_QMARK_.call(null,m_8599)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__8598,m_8599,top_level,known_externs);
}

var G__8600 = cljs.core.next.call(null,ks);
ks = G__8600;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map
