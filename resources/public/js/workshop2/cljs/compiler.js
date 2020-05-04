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
var map__30061 = s;
var map__30061__$1 = (((((!((map__30061 == null))))?(((((map__30061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30061):map__30061);
var name = cljs.core.get.call(null,map__30061__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__30061__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__30064 = info;
var map__30065 = G__30064;
var map__30065__$1 = (((((!((map__30065 == null))))?(((((map__30065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30065):map__30065);
var shadow = cljs.core.get.call(null,map__30065__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__30064__$1 = G__30064;
while(true){
var d__$2 = d__$1;
var map__30067 = G__30064__$1;
var map__30067__$1 = (((((!((map__30067 == null))))?(((((map__30067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30067):map__30067);
var shadow__$1 = cljs.core.get.call(null,map__30067__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__30069 = (d__$2 + (1));
var G__30070 = shadow__$1;
d__$1 = G__30069;
G__30064__$1 = G__30070;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__30071){
var map__30072 = p__30071;
var map__30072__$1 = (((((!((map__30072 == null))))?(((((map__30072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30072):map__30072);
var name_var = map__30072__$1;
var name = cljs.core.get.call(null,map__30072__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__30072__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__30074 = info;
var map__30074__$1 = (((((!((map__30074 == null))))?(((((map__30074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30074):map__30074);
var ns = cljs.core.get.call(null,map__30074__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__30074__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__30077 = arguments.length;
switch (G__30077) {
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
var G__30079 = cp;
switch (G__30079) {
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
var seq__30081_30085 = cljs.core.seq.call(null,s);
var chunk__30082_30086 = null;
var count__30083_30087 = (0);
var i__30084_30088 = (0);
while(true){
if((i__30084_30088 < count__30083_30087)){
var c_30089 = cljs.core._nth.call(null,chunk__30082_30086,i__30084_30088);
sb.append(cljs.compiler.escape_char.call(null,c_30089));


var G__30090 = seq__30081_30085;
var G__30091 = chunk__30082_30086;
var G__30092 = count__30083_30087;
var G__30093 = (i__30084_30088 + (1));
seq__30081_30085 = G__30090;
chunk__30082_30086 = G__30091;
count__30083_30087 = G__30092;
i__30084_30088 = G__30093;
continue;
} else {
var temp__5735__auto___30094 = cljs.core.seq.call(null,seq__30081_30085);
if(temp__5735__auto___30094){
var seq__30081_30095__$1 = temp__5735__auto___30094;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30081_30095__$1)){
var c__4461__auto___30096 = cljs.core.chunk_first.call(null,seq__30081_30095__$1);
var G__30097 = cljs.core.chunk_rest.call(null,seq__30081_30095__$1);
var G__30098 = c__4461__auto___30096;
var G__30099 = cljs.core.count.call(null,c__4461__auto___30096);
var G__30100 = (0);
seq__30081_30085 = G__30097;
chunk__30082_30086 = G__30098;
count__30083_30087 = G__30099;
i__30084_30088 = G__30100;
continue;
} else {
var c_30101 = cljs.core.first.call(null,seq__30081_30095__$1);
sb.append(cljs.compiler.escape_char.call(null,c_30101));


var G__30102 = cljs.core.next.call(null,seq__30081_30095__$1);
var G__30103 = null;
var G__30104 = (0);
var G__30105 = (0);
seq__30081_30085 = G__30102;
chunk__30082_30086 = G__30103;
count__30083_30087 = G__30104;
i__30084_30088 = G__30105;
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
var map__30106_30111 = ast;
var map__30106_30112__$1 = (((((!((map__30106_30111 == null))))?(((((map__30106_30111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30106_30111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30106_30111):map__30106_30111);
var env_30113 = cljs.core.get.call(null,map__30106_30112__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_30113))){
var map__30108_30114 = env_30113;
var map__30108_30115__$1 = (((((!((map__30108_30114 == null))))?(((((map__30108_30114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30108_30114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30108_30114):map__30108_30114);
var line_30116 = cljs.core.get.call(null,map__30108_30115__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_30117 = cljs.core.get.call(null,map__30108_30115__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__30108_30114,map__30108_30115__$1,line_30116,column_30117,map__30106_30111,map__30106_30112__$1,env_30113){
return (function (m){
var minfo = (function (){var G__30110 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__30110,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__30110;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_30116 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__30108_30114,map__30108_30115__$1,line_30116,column_30117,map__30106_30111,map__30106_30112__$1,env_30113){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_30117)?(column_30117 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__30108_30114,map__30108_30115__$1,line_30116,column_30117,map__30106_30111,map__30106_30112__$1,env_30113){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__30108_30114,map__30108_30115__$1,line_30116,column_30117,map__30106_30111,map__30106_30112__$1,env_30113))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__30108_30114,map__30108_30115__$1,line_30116,column_30117,map__30106_30111,map__30106_30112__$1,env_30113))
,cljs.core.sorted_map.call(null)));
});})(map__30108_30114,map__30108_30115__$1,line_30116,column_30117,map__30106_30111,map__30106_30112__$1,env_30113))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__30126 = arguments.length;
switch (G__30126) {
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
var len__4641__auto___30133 = arguments.length;
var i__4642__auto___30134 = (0);
while(true){
if((i__4642__auto___30134 < len__4641__auto___30133)){
args_arr__4662__auto__.push((arguments[i__4642__auto___30134]));

var G__30135 = (i__4642__auto___30134 + (1));
i__4642__auto___30134 = G__30135;
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
var s_30136 = (function (){var G__30127 = a;
if((!(typeof a === 'string'))){
return G__30127.toString();
} else {
return G__30127;
}
})();
var temp__5739__auto___30137 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___30137 == null)){
} else {
var sm_data_30138 = temp__5739__auto___30137;
cljs.core.swap_BANG_.call(null,sm_data_30138,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),((function (sm_data_30138,temp__5739__auto___30137,s_30136){
return (function (p1__30118_SHARP_){
return (p1__30118_SHARP_ + s_30136.length);
});})(sm_data_30138,temp__5739__auto___30137,s_30136))
);
}

cljs.core.print.call(null,s_30136);

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

var seq__30128 = cljs.core.seq.call(null,xs);
var chunk__30129 = null;
var count__30130 = (0);
var i__30131 = (0);
while(true){
if((i__30131 < count__30130)){
var x = cljs.core._nth.call(null,chunk__30129,i__30131);
cljs.compiler.emits.call(null,x);


var G__30139 = seq__30128;
var G__30140 = chunk__30129;
var G__30141 = count__30130;
var G__30142 = (i__30131 + (1));
seq__30128 = G__30139;
chunk__30129 = G__30140;
count__30130 = G__30141;
i__30131 = G__30142;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__30128);
if(temp__5735__auto__){
var seq__30128__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30128__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__30128__$1);
var G__30143 = cljs.core.chunk_rest.call(null,seq__30128__$1);
var G__30144 = c__4461__auto__;
var G__30145 = cljs.core.count.call(null,c__4461__auto__);
var G__30146 = (0);
seq__30128 = G__30143;
chunk__30129 = G__30144;
count__30130 = G__30145;
i__30131 = G__30146;
continue;
} else {
var x = cljs.core.first.call(null,seq__30128__$1);
cljs.compiler.emits.call(null,x);


var G__30147 = cljs.core.next.call(null,seq__30128__$1);
var G__30148 = null;
var G__30149 = (0);
var G__30150 = (0);
seq__30128 = G__30147;
chunk__30129 = G__30148;
count__30130 = G__30149;
i__30131 = G__30150;
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
cljs.compiler.emits.cljs$lang$applyTo = (function (seq30120){
var G__30121 = cljs.core.first.call(null,seq30120);
var seq30120__$1 = cljs.core.next.call(null,seq30120);
var G__30122 = cljs.core.first.call(null,seq30120__$1);
var seq30120__$2 = cljs.core.next.call(null,seq30120__$1);
var G__30123 = cljs.core.first.call(null,seq30120__$2);
var seq30120__$3 = cljs.core.next.call(null,seq30120__$2);
var G__30124 = cljs.core.first.call(null,seq30120__$3);
var seq30120__$4 = cljs.core.next.call(null,seq30120__$3);
var G__30125 = cljs.core.first.call(null,seq30120__$4);
var seq30120__$5 = cljs.core.next.call(null,seq30120__$4);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30121,G__30122,G__30123,G__30124,G__30125,seq30120__$5);
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__30151){
var map__30152 = p__30151;
var map__30152__$1 = (((((!((map__30152 == null))))?(((((map__30152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30152):map__30152);
var m = map__30152__$1;
var gen_line = cljs.core.get.call(null,map__30152__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__30161 = arguments.length;
switch (G__30161) {
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
var len__4641__auto___30167 = arguments.length;
var i__4642__auto___30168 = (0);
while(true){
if((i__4642__auto___30168 < len__4641__auto___30167)){
args_arr__4662__auto__.push((arguments[i__4642__auto___30168]));

var G__30169 = (i__4642__auto___30168 + (1));
i__4642__auto___30168 = G__30169;
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

var seq__30162_30170 = cljs.core.seq.call(null,xs);
var chunk__30163_30171 = null;
var count__30164_30172 = (0);
var i__30165_30173 = (0);
while(true){
if((i__30165_30173 < count__30164_30172)){
var x_30174 = cljs.core._nth.call(null,chunk__30163_30171,i__30165_30173);
cljs.compiler.emits.call(null,x_30174);


var G__30175 = seq__30162_30170;
var G__30176 = chunk__30163_30171;
var G__30177 = count__30164_30172;
var G__30178 = (i__30165_30173 + (1));
seq__30162_30170 = G__30175;
chunk__30163_30171 = G__30176;
count__30164_30172 = G__30177;
i__30165_30173 = G__30178;
continue;
} else {
var temp__5735__auto___30179 = cljs.core.seq.call(null,seq__30162_30170);
if(temp__5735__auto___30179){
var seq__30162_30180__$1 = temp__5735__auto___30179;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30162_30180__$1)){
var c__4461__auto___30181 = cljs.core.chunk_first.call(null,seq__30162_30180__$1);
var G__30182 = cljs.core.chunk_rest.call(null,seq__30162_30180__$1);
var G__30183 = c__4461__auto___30181;
var G__30184 = cljs.core.count.call(null,c__4461__auto___30181);
var G__30185 = (0);
seq__30162_30170 = G__30182;
chunk__30163_30171 = G__30183;
count__30164_30172 = G__30184;
i__30165_30173 = G__30185;
continue;
} else {
var x_30186 = cljs.core.first.call(null,seq__30162_30180__$1);
cljs.compiler.emits.call(null,x_30186);


var G__30187 = cljs.core.next.call(null,seq__30162_30180__$1);
var G__30188 = null;
var G__30189 = (0);
var G__30190 = (0);
seq__30162_30170 = G__30187;
chunk__30163_30171 = G__30188;
count__30164_30172 = G__30189;
i__30165_30173 = G__30190;
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
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq30155){
var G__30156 = cljs.core.first.call(null,seq30155);
var seq30155__$1 = cljs.core.next.call(null,seq30155);
var G__30157 = cljs.core.first.call(null,seq30155__$1);
var seq30155__$2 = cljs.core.next.call(null,seq30155__$1);
var G__30158 = cljs.core.first.call(null,seq30155__$2);
var seq30155__$3 = cljs.core.next.call(null,seq30155__$2);
var G__30159 = cljs.core.first.call(null,seq30155__$3);
var seq30155__$4 = cljs.core.next.call(null,seq30155__$3);
var G__30160 = cljs.core.first.call(null,seq30155__$4);
var seq30155__$5 = cljs.core.next.call(null,seq30155__$4);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30156,G__30157,G__30158,G__30159,G__30160,seq30155__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30191_30195 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30192_30196 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30193_30197 = true;
var _STAR_print_fn_STAR__temp_val__30194_30198 = ((function (_STAR_print_newline_STAR__orig_val__30191_30195,_STAR_print_fn_STAR__orig_val__30192_30196,_STAR_print_newline_STAR__temp_val__30193_30197,sb__4572__auto__){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__30191_30195,_STAR_print_fn_STAR__orig_val__30192_30196,_STAR_print_newline_STAR__temp_val__30193_30197,sb__4572__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30193_30197;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30194_30198;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30192_30196;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30191_30195;
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
var vec__30199 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__30199,(0),null);
var name = cljs.core.nth.call(null,vec__30199,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,((function (vec__30199,ns,name){
return (function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
});})(vec__30199,ns,name))
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
var vec__30202 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__30202,(0),null);
var flags = cljs.core.nth.call(null,vec__30202,(1),null);
var pattern = cljs.core.nth.call(null,vec__30202,(2),null);
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
return (function (p1__30205_SHARP_){
return ((function (items){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__30205_SHARP_);
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
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__30207){
var map__30208 = p__30207;
var map__30208__$1 = (((((!((map__30208 == null))))?(((((map__30208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30208):map__30208);
var ast = map__30208__$1;
var info = cljs.core.get.call(null,map__30208__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__30208__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__30208__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__30210 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__30210__$1 = (((((!((map__30210 == null))))?(((((map__30210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30210):map__30210);
var cenv = map__30210__$1;
var options = cljs.core.get.call(null,map__30210__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__30212 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__4036__auto__;
}
})())){
return clojure.set.difference.call(null,G__30212,cljs.analyzer.es5_allowed);
} else {
return G__30212;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4047__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__30213 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__30213,reserved);
} else {
return G__30213;
}
})();
var env__18473__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18473__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__30214_30215 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__30214_30216__$1 = (((G__30214_30215 instanceof cljs.core.Keyword))?G__30214_30215.fqn:null);
switch (G__30214_30216__$1) {
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__30218){
var map__30219 = p__30218;
var map__30219__$1 = (((((!((map__30219 == null))))?(((((map__30219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30219):map__30219);
var arg = map__30219__$1;
var env = cljs.core.get.call(null,map__30219__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__30219__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__30219__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__30219__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__30221 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__30221__$1 = (((((!((map__30221 == null))))?(((((map__30221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30221):map__30221);
var name = cljs.core.get.call(null,map__30221__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__30223){
var map__30224 = p__30223;
var map__30224__$1 = (((((!((map__30224 == null))))?(((((map__30224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30224):map__30224);
var expr = cljs.core.get.call(null,map__30224__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__30224__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__30224__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return (function (p1__30226_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__30226_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__30227){
var map__30228 = p__30227;
var map__30228__$1 = (((((!((map__30228 == null))))?(((((map__30228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30228):map__30228);
var env = cljs.core.get.call(null,map__30228__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__30228__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__30228__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__30230){
var map__30231 = p__30230;
var map__30231__$1 = (((((!((map__30231 == null))))?(((((map__30231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30231):map__30231);
var items = cljs.core.get.call(null,map__30231__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__30231__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return (function (p1__30233_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__30233_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__30234){
var map__30235 = p__30234;
var map__30235__$1 = (((((!((map__30235 == null))))?(((((map__30235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30235):map__30235);
var items = cljs.core.get.call(null,map__30235__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__30235__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var temp__5735__auto___30253 = cljs.core.seq.call(null,items);
if(temp__5735__auto___30253){
var items_30254__$1 = temp__5735__auto___30253;
var vec__30237_30255 = items_30254__$1;
var seq__30238_30256 = cljs.core.seq.call(null,vec__30237_30255);
var first__30239_30257 = cljs.core.first.call(null,seq__30238_30256);
var seq__30238_30258__$1 = cljs.core.next.call(null,seq__30238_30256);
var vec__30240_30259 = first__30239_30257;
var k_30260 = cljs.core.nth.call(null,vec__30240_30259,(0),null);
var v_30261 = cljs.core.nth.call(null,vec__30240_30259,(1),null);
var r_30262 = seq__30238_30258__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_30260),"\": ",emit_js_object_val.call(null,v_30261));

var seq__30243_30263 = cljs.core.seq.call(null,r_30262);
var chunk__30244_30264 = null;
var count__30245_30265 = (0);
var i__30246_30266 = (0);
while(true){
if((i__30246_30266 < count__30245_30265)){
var vec__30247_30267 = cljs.core._nth.call(null,chunk__30244_30264,i__30246_30266);
var k_30268__$1 = cljs.core.nth.call(null,vec__30247_30267,(0),null);
var v_30269__$1 = cljs.core.nth.call(null,vec__30247_30267,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_30268__$1),"\": ",emit_js_object_val.call(null,v_30269__$1));


var G__30270 = seq__30243_30263;
var G__30271 = chunk__30244_30264;
var G__30272 = count__30245_30265;
var G__30273 = (i__30246_30266 + (1));
seq__30243_30263 = G__30270;
chunk__30244_30264 = G__30271;
count__30245_30265 = G__30272;
i__30246_30266 = G__30273;
continue;
} else {
var temp__5735__auto___30274__$1 = cljs.core.seq.call(null,seq__30243_30263);
if(temp__5735__auto___30274__$1){
var seq__30243_30275__$1 = temp__5735__auto___30274__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30243_30275__$1)){
var c__4461__auto___30276 = cljs.core.chunk_first.call(null,seq__30243_30275__$1);
var G__30277 = cljs.core.chunk_rest.call(null,seq__30243_30275__$1);
var G__30278 = c__4461__auto___30276;
var G__30279 = cljs.core.count.call(null,c__4461__auto___30276);
var G__30280 = (0);
seq__30243_30263 = G__30277;
chunk__30244_30264 = G__30278;
count__30245_30265 = G__30279;
i__30246_30266 = G__30280;
continue;
} else {
var vec__30250_30281 = cljs.core.first.call(null,seq__30243_30275__$1);
var k_30282__$1 = cljs.core.nth.call(null,vec__30250_30281,(0),null);
var v_30283__$1 = cljs.core.nth.call(null,vec__30250_30281,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_30282__$1),"\": ",emit_js_object_val.call(null,v_30283__$1));


var G__30284 = cljs.core.next.call(null,seq__30243_30275__$1);
var G__30285 = null;
var G__30286 = (0);
var G__30287 = (0);
seq__30243_30263 = G__30284;
chunk__30244_30264 = G__30285;
count__30245_30265 = G__30286;
i__30246_30266 = G__30287;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__30288){
var map__30289 = p__30288;
var map__30289__$1 = (((((!((map__30289 == null))))?(((((map__30289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30289):map__30289);
var keys = cljs.core.get.call(null,map__30289__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__30289__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__30289__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__30291){
var map__30292 = p__30291;
var map__30292__$1 = (((((!((map__30292 == null))))?(((((map__30292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30292):map__30292);
var items = cljs.core.get.call(null,map__30292__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__30292__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__30294){
var map__30295 = p__30294;
var map__30295__$1 = (((((!((map__30295 == null))))?(((((map__30295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30295):map__30295);
var expr = cljs.core.get.call(null,map__30295__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__30297){
var map__30298 = p__30297;
var map__30298__$1 = (((((!((map__30298 == null))))?(((((map__30298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30298):map__30298);
var form = cljs.core.get.call(null,map__30298__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__30298__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var map__30300 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__30300__$1 = (((((!((map__30300 == null))))?(((((map__30300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30300):map__30300);
var op = cljs.core.get.call(null,map__30300__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__30300__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__30300__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__30302 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__30302__$1 = (((((!((map__30302 == null))))?(((((map__30302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30302):map__30302);
var op = cljs.core.get.call(null,map__30302__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__30302__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__30302__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__30304){
var map__30305 = p__30304;
var map__30305__$1 = (((((!((map__30305 == null))))?(((((map__30305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30305):map__30305);
var test = cljs.core.get.call(null,map__30305__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__30305__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__30305__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__30305__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__30305__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__30307){
var map__30308 = p__30307;
var map__30308__$1 = (((((!((map__30308 == null))))?(((((map__30308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30308):map__30308);
var v = cljs.core.get.call(null,map__30308__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__30308__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__30308__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__30308__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__30310_30330 = cljs.core.seq.call(null,nodes);
var chunk__30311_30331 = null;
var count__30312_30332 = (0);
var i__30313_30333 = (0);
while(true){
if((i__30313_30333 < count__30312_30332)){
var map__30314_30334 = cljs.core._nth.call(null,chunk__30311_30331,i__30313_30333);
var map__30314_30335__$1 = (((((!((map__30314_30334 == null))))?(((((map__30314_30334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30314_30334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30314_30334):map__30314_30334);
var ts_30336 = cljs.core.get.call(null,map__30314_30335__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__30315_30337 = cljs.core.get.call(null,map__30314_30335__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__30315_30338__$1 = (((((!((map__30315_30337 == null))))?(((((map__30315_30337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30315_30337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30315_30337):map__30315_30337);
var then_30339 = cljs.core.get.call(null,map__30315_30338__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__30318_30340 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_30336));
var chunk__30319_30341 = null;
var count__30320_30342 = (0);
var i__30321_30343 = (0);
while(true){
if((i__30321_30343 < count__30320_30342)){
var test_30344 = cljs.core._nth.call(null,chunk__30319_30341,i__30321_30343);
cljs.compiler.emitln.call(null,"case ",test_30344,":");


var G__30345 = seq__30318_30340;
var G__30346 = chunk__30319_30341;
var G__30347 = count__30320_30342;
var G__30348 = (i__30321_30343 + (1));
seq__30318_30340 = G__30345;
chunk__30319_30341 = G__30346;
count__30320_30342 = G__30347;
i__30321_30343 = G__30348;
continue;
} else {
var temp__5735__auto___30349 = cljs.core.seq.call(null,seq__30318_30340);
if(temp__5735__auto___30349){
var seq__30318_30350__$1 = temp__5735__auto___30349;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30318_30350__$1)){
var c__4461__auto___30351 = cljs.core.chunk_first.call(null,seq__30318_30350__$1);
var G__30352 = cljs.core.chunk_rest.call(null,seq__30318_30350__$1);
var G__30353 = c__4461__auto___30351;
var G__30354 = cljs.core.count.call(null,c__4461__auto___30351);
var G__30355 = (0);
seq__30318_30340 = G__30352;
chunk__30319_30341 = G__30353;
count__30320_30342 = G__30354;
i__30321_30343 = G__30355;
continue;
} else {
var test_30356 = cljs.core.first.call(null,seq__30318_30350__$1);
cljs.compiler.emitln.call(null,"case ",test_30356,":");


var G__30357 = cljs.core.next.call(null,seq__30318_30350__$1);
var G__30358 = null;
var G__30359 = (0);
var G__30360 = (0);
seq__30318_30340 = G__30357;
chunk__30319_30341 = G__30358;
count__30320_30342 = G__30359;
i__30321_30343 = G__30360;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_30339);
} else {
cljs.compiler.emitln.call(null,then_30339);
}

cljs.compiler.emitln.call(null,"break;");


var G__30361 = seq__30310_30330;
var G__30362 = chunk__30311_30331;
var G__30363 = count__30312_30332;
var G__30364 = (i__30313_30333 + (1));
seq__30310_30330 = G__30361;
chunk__30311_30331 = G__30362;
count__30312_30332 = G__30363;
i__30313_30333 = G__30364;
continue;
} else {
var temp__5735__auto___30365 = cljs.core.seq.call(null,seq__30310_30330);
if(temp__5735__auto___30365){
var seq__30310_30366__$1 = temp__5735__auto___30365;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30310_30366__$1)){
var c__4461__auto___30367 = cljs.core.chunk_first.call(null,seq__30310_30366__$1);
var G__30368 = cljs.core.chunk_rest.call(null,seq__30310_30366__$1);
var G__30369 = c__4461__auto___30367;
var G__30370 = cljs.core.count.call(null,c__4461__auto___30367);
var G__30371 = (0);
seq__30310_30330 = G__30368;
chunk__30311_30331 = G__30369;
count__30312_30332 = G__30370;
i__30313_30333 = G__30371;
continue;
} else {
var map__30322_30372 = cljs.core.first.call(null,seq__30310_30366__$1);
var map__30322_30373__$1 = (((((!((map__30322_30372 == null))))?(((((map__30322_30372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30322_30372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30322_30372):map__30322_30372);
var ts_30374 = cljs.core.get.call(null,map__30322_30373__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__30323_30375 = cljs.core.get.call(null,map__30322_30373__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__30323_30376__$1 = (((((!((map__30323_30375 == null))))?(((((map__30323_30375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30323_30375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30323_30375):map__30323_30375);
var then_30377 = cljs.core.get.call(null,map__30323_30376__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__30326_30378 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_30374));
var chunk__30327_30379 = null;
var count__30328_30380 = (0);
var i__30329_30381 = (0);
while(true){
if((i__30329_30381 < count__30328_30380)){
var test_30382 = cljs.core._nth.call(null,chunk__30327_30379,i__30329_30381);
cljs.compiler.emitln.call(null,"case ",test_30382,":");


var G__30383 = seq__30326_30378;
var G__30384 = chunk__30327_30379;
var G__30385 = count__30328_30380;
var G__30386 = (i__30329_30381 + (1));
seq__30326_30378 = G__30383;
chunk__30327_30379 = G__30384;
count__30328_30380 = G__30385;
i__30329_30381 = G__30386;
continue;
} else {
var temp__5735__auto___30387__$1 = cljs.core.seq.call(null,seq__30326_30378);
if(temp__5735__auto___30387__$1){
var seq__30326_30388__$1 = temp__5735__auto___30387__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30326_30388__$1)){
var c__4461__auto___30389 = cljs.core.chunk_first.call(null,seq__30326_30388__$1);
var G__30390 = cljs.core.chunk_rest.call(null,seq__30326_30388__$1);
var G__30391 = c__4461__auto___30389;
var G__30392 = cljs.core.count.call(null,c__4461__auto___30389);
var G__30393 = (0);
seq__30326_30378 = G__30390;
chunk__30327_30379 = G__30391;
count__30328_30380 = G__30392;
i__30329_30381 = G__30393;
continue;
} else {
var test_30394 = cljs.core.first.call(null,seq__30326_30388__$1);
cljs.compiler.emitln.call(null,"case ",test_30394,":");


var G__30395 = cljs.core.next.call(null,seq__30326_30388__$1);
var G__30396 = null;
var G__30397 = (0);
var G__30398 = (0);
seq__30326_30378 = G__30395;
chunk__30327_30379 = G__30396;
count__30328_30380 = G__30397;
i__30329_30381 = G__30398;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_30377);
} else {
cljs.compiler.emitln.call(null,then_30377);
}

cljs.compiler.emitln.call(null,"break;");


var G__30399 = cljs.core.next.call(null,seq__30310_30366__$1);
var G__30400 = null;
var G__30401 = (0);
var G__30402 = (0);
seq__30310_30330 = G__30399;
chunk__30311_30331 = G__30400;
count__30312_30332 = G__30401;
i__30313_30333 = G__30402;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__30403){
var map__30404 = p__30403;
var map__30404__$1 = (((((!((map__30404 == null))))?(((((map__30404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30404):map__30404);
var throw$ = cljs.core.get.call(null,map__30404__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__30404__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__30407 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__30407,(0),null);
var rstr = cljs.core.nth.call(null,vec__30407,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__30407,fstr,rstr,ret_t,axstr){
return (function (p1__30406_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__30406_SHARP_);
});})(idx,vec__30407,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__30410 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30410),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__30410;
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
return (function (p1__30411_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__30411_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__30412 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__30413 = cljs.core.seq.call(null,vec__30412);
var first__30414 = cljs.core.first.call(null,seq__30413);
var seq__30413__$1 = cljs.core.next.call(null,seq__30413);
var p = first__30414;
var first__30414__$1 = cljs.core.first.call(null,seq__30413__$1);
var seq__30413__$2 = cljs.core.next.call(null,seq__30413__$1);
var ts = first__30414__$1;
var first__30414__$2 = cljs.core.first.call(null,seq__30413__$2);
var seq__30413__$3 = cljs.core.next.call(null,seq__30413__$2);
var n = first__30414__$2;
var xs = seq__30413__$3;
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
var vec__30415 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__30416 = cljs.core.seq.call(null,vec__30415);
var first__30417 = cljs.core.first.call(null,seq__30416);
var seq__30416__$1 = cljs.core.next.call(null,seq__30416);
var p = first__30417;
var first__30417__$1 = cljs.core.first.call(null,seq__30416__$1);
var seq__30416__$2 = cljs.core.next.call(null,seq__30416__$1);
var ts = first__30417__$1;
var xs = seq__30416__$2;
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
var G__30420 = arguments.length;
switch (G__30420) {
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
var vec__30428 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__30418_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__30418_SHARP_);
} else {
return p1__30418_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__30429 = cljs.core.seq.call(null,vec__30428);
var first__30430 = cljs.core.first.call(null,seq__30429);
var seq__30429__$1 = cljs.core.next.call(null,seq__30429);
var x = first__30430;
var ys = seq__30429__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__30431 = cljs.core.seq.call(null,ys);
var chunk__30432 = null;
var count__30433 = (0);
var i__30434 = (0);
while(true){
if((i__30434 < count__30433)){
var next_line = cljs.core._nth.call(null,chunk__30432,i__30434);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__30440 = seq__30431;
var G__30441 = chunk__30432;
var G__30442 = count__30433;
var G__30443 = (i__30434 + (1));
seq__30431 = G__30440;
chunk__30432 = G__30441;
count__30433 = G__30442;
i__30434 = G__30443;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__30431);
if(temp__5735__auto__){
var seq__30431__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30431__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__30431__$1);
var G__30444 = cljs.core.chunk_rest.call(null,seq__30431__$1);
var G__30445 = c__4461__auto__;
var G__30446 = cljs.core.count.call(null,c__4461__auto__);
var G__30447 = (0);
seq__30431 = G__30444;
chunk__30432 = G__30445;
count__30433 = G__30446;
i__30434 = G__30447;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__30431__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__30448 = cljs.core.next.call(null,seq__30431__$1);
var G__30449 = null;
var G__30450 = (0);
var G__30451 = (0);
seq__30431 = G__30448;
chunk__30432 = G__30449;
count__30433 = G__30450;
i__30434 = G__30451;
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

var seq__30435_30452 = cljs.core.seq.call(null,docs__$2);
var chunk__30436_30453 = null;
var count__30437_30454 = (0);
var i__30438_30455 = (0);
while(true){
if((i__30438_30455 < count__30437_30454)){
var e_30456 = cljs.core._nth.call(null,chunk__30436_30453,i__30438_30455);
if(cljs.core.truth_(e_30456)){
print_comment_lines.call(null,e_30456);
} else {
}


var G__30457 = seq__30435_30452;
var G__30458 = chunk__30436_30453;
var G__30459 = count__30437_30454;
var G__30460 = (i__30438_30455 + (1));
seq__30435_30452 = G__30457;
chunk__30436_30453 = G__30458;
count__30437_30454 = G__30459;
i__30438_30455 = G__30460;
continue;
} else {
var temp__5735__auto___30461 = cljs.core.seq.call(null,seq__30435_30452);
if(temp__5735__auto___30461){
var seq__30435_30462__$1 = temp__5735__auto___30461;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30435_30462__$1)){
var c__4461__auto___30463 = cljs.core.chunk_first.call(null,seq__30435_30462__$1);
var G__30464 = cljs.core.chunk_rest.call(null,seq__30435_30462__$1);
var G__30465 = c__4461__auto___30463;
var G__30466 = cljs.core.count.call(null,c__4461__auto___30463);
var G__30467 = (0);
seq__30435_30452 = G__30464;
chunk__30436_30453 = G__30465;
count__30437_30454 = G__30466;
i__30438_30455 = G__30467;
continue;
} else {
var e_30468 = cljs.core.first.call(null,seq__30435_30462__$1);
if(cljs.core.truth_(e_30468)){
print_comment_lines.call(null,e_30468);
} else {
}


var G__30469 = cljs.core.next.call(null,seq__30435_30462__$1);
var G__30470 = null;
var G__30471 = (0);
var G__30472 = (0);
seq__30435_30452 = G__30469;
chunk__30436_30453 = G__30470;
count__30437_30454 = G__30471;
i__30438_30455 = G__30472;
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
return (function (p1__30474_SHARP_){
return goog.string.startsWith(p1__30474_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__30475){
var map__30476 = p__30475;
var map__30476__$1 = (((((!((map__30476 == null))))?(((((map__30476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30476):map__30476);
var doc = cljs.core.get.call(null,map__30476__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__30476__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__30476__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.call(null,map__30476__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__30476__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__30476__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__30476__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__30476__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__30476__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__30478){
var map__30479 = p__30478;
var map__30479__$1 = (((((!((map__30479 == null))))?(((((map__30479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30479):map__30479);
var name = cljs.core.get.call(null,map__30479__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__30479__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__30479__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__30481_30499 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__30482_30500 = null;
var count__30483_30501 = (0);
var i__30484_30502 = (0);
while(true){
if((i__30484_30502 < count__30483_30501)){
var vec__30485_30503 = cljs.core._nth.call(null,chunk__30482_30500,i__30484_30502);
var i_30504 = cljs.core.nth.call(null,vec__30485_30503,(0),null);
var param_30505 = cljs.core.nth.call(null,vec__30485_30503,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_30505);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__30506 = seq__30481_30499;
var G__30507 = chunk__30482_30500;
var G__30508 = count__30483_30501;
var G__30509 = (i__30484_30502 + (1));
seq__30481_30499 = G__30506;
chunk__30482_30500 = G__30507;
count__30483_30501 = G__30508;
i__30484_30502 = G__30509;
continue;
} else {
var temp__5735__auto___30510 = cljs.core.seq.call(null,seq__30481_30499);
if(temp__5735__auto___30510){
var seq__30481_30511__$1 = temp__5735__auto___30510;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30481_30511__$1)){
var c__4461__auto___30512 = cljs.core.chunk_first.call(null,seq__30481_30511__$1);
var G__30513 = cljs.core.chunk_rest.call(null,seq__30481_30511__$1);
var G__30514 = c__4461__auto___30512;
var G__30515 = cljs.core.count.call(null,c__4461__auto___30512);
var G__30516 = (0);
seq__30481_30499 = G__30513;
chunk__30482_30500 = G__30514;
count__30483_30501 = G__30515;
i__30484_30502 = G__30516;
continue;
} else {
var vec__30488_30517 = cljs.core.first.call(null,seq__30481_30511__$1);
var i_30518 = cljs.core.nth.call(null,vec__30488_30517,(0),null);
var param_30519 = cljs.core.nth.call(null,vec__30488_30517,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_30519);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__30520 = cljs.core.next.call(null,seq__30481_30511__$1);
var G__30521 = null;
var G__30522 = (0);
var G__30523 = (0);
seq__30481_30499 = G__30520;
chunk__30482_30500 = G__30521;
count__30483_30501 = G__30522;
i__30484_30502 = G__30523;
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

var seq__30491_30524 = cljs.core.seq.call(null,params);
var chunk__30492_30525 = null;
var count__30493_30526 = (0);
var i__30494_30527 = (0);
while(true){
if((i__30494_30527 < count__30493_30526)){
var param_30528 = cljs.core._nth.call(null,chunk__30492_30525,i__30494_30527);
cljs.compiler.emit.call(null,param_30528);

if(cljs.core._EQ_.call(null,param_30528,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__30529 = seq__30491_30524;
var G__30530 = chunk__30492_30525;
var G__30531 = count__30493_30526;
var G__30532 = (i__30494_30527 + (1));
seq__30491_30524 = G__30529;
chunk__30492_30525 = G__30530;
count__30493_30526 = G__30531;
i__30494_30527 = G__30532;
continue;
} else {
var temp__5735__auto___30533 = cljs.core.seq.call(null,seq__30491_30524);
if(temp__5735__auto___30533){
var seq__30491_30534__$1 = temp__5735__auto___30533;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30491_30534__$1)){
var c__4461__auto___30535 = cljs.core.chunk_first.call(null,seq__30491_30534__$1);
var G__30536 = cljs.core.chunk_rest.call(null,seq__30491_30534__$1);
var G__30537 = c__4461__auto___30535;
var G__30538 = cljs.core.count.call(null,c__4461__auto___30535);
var G__30539 = (0);
seq__30491_30524 = G__30536;
chunk__30492_30525 = G__30537;
count__30493_30526 = G__30538;
i__30494_30527 = G__30539;
continue;
} else {
var param_30540 = cljs.core.first.call(null,seq__30491_30534__$1);
cljs.compiler.emit.call(null,param_30540);

if(cljs.core._EQ_.call(null,param_30540,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__30541 = cljs.core.next.call(null,seq__30491_30534__$1);
var G__30542 = null;
var G__30543 = (0);
var G__30544 = (0);
seq__30491_30524 = G__30541;
chunk__30492_30525 = G__30542;
count__30493_30526 = G__30543;
i__30494_30527 = G__30544;
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

var seq__30495_30545 = cljs.core.seq.call(null,params);
var chunk__30496_30546 = null;
var count__30497_30547 = (0);
var i__30498_30548 = (0);
while(true){
if((i__30498_30548 < count__30497_30547)){
var param_30549 = cljs.core._nth.call(null,chunk__30496_30546,i__30498_30548);
cljs.compiler.emit.call(null,param_30549);

if(cljs.core._EQ_.call(null,param_30549,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__30550 = seq__30495_30545;
var G__30551 = chunk__30496_30546;
var G__30552 = count__30497_30547;
var G__30553 = (i__30498_30548 + (1));
seq__30495_30545 = G__30550;
chunk__30496_30546 = G__30551;
count__30497_30547 = G__30552;
i__30498_30548 = G__30553;
continue;
} else {
var temp__5735__auto___30554 = cljs.core.seq.call(null,seq__30495_30545);
if(temp__5735__auto___30554){
var seq__30495_30555__$1 = temp__5735__auto___30554;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30495_30555__$1)){
var c__4461__auto___30556 = cljs.core.chunk_first.call(null,seq__30495_30555__$1);
var G__30557 = cljs.core.chunk_rest.call(null,seq__30495_30555__$1);
var G__30558 = c__4461__auto___30556;
var G__30559 = cljs.core.count.call(null,c__4461__auto___30556);
var G__30560 = (0);
seq__30495_30545 = G__30557;
chunk__30496_30546 = G__30558;
count__30497_30547 = G__30559;
i__30498_30548 = G__30560;
continue;
} else {
var param_30561 = cljs.core.first.call(null,seq__30495_30555__$1);
cljs.compiler.emit.call(null,param_30561);

if(cljs.core._EQ_.call(null,param_30561,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__30562 = cljs.core.next.call(null,seq__30495_30555__$1);
var G__30563 = null;
var G__30564 = (0);
var G__30565 = (0);
seq__30495_30545 = G__30562;
chunk__30496_30546 = G__30563;
count__30497_30547 = G__30564;
i__30498_30548 = G__30565;
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
var seq__30566 = cljs.core.seq.call(null,params);
var chunk__30567 = null;
var count__30568 = (0);
var i__30569 = (0);
while(true){
if((i__30569 < count__30568)){
var param = cljs.core._nth.call(null,chunk__30567,i__30569);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__30570 = seq__30566;
var G__30571 = chunk__30567;
var G__30572 = count__30568;
var G__30573 = (i__30569 + (1));
seq__30566 = G__30570;
chunk__30567 = G__30571;
count__30568 = G__30572;
i__30569 = G__30573;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__30566);
if(temp__5735__auto__){
var seq__30566__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30566__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__30566__$1);
var G__30574 = cljs.core.chunk_rest.call(null,seq__30566__$1);
var G__30575 = c__4461__auto__;
var G__30576 = cljs.core.count.call(null,c__4461__auto__);
var G__30577 = (0);
seq__30566 = G__30574;
chunk__30567 = G__30575;
count__30568 = G__30576;
i__30569 = G__30577;
continue;
} else {
var param = cljs.core.first.call(null,seq__30566__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__30578 = cljs.core.next.call(null,seq__30566__$1);
var G__30579 = null;
var G__30580 = (0);
var G__30581 = (0);
seq__30566 = G__30578;
chunk__30567 = G__30579;
count__30568 = G__30580;
i__30569 = G__30581;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__30582){
var map__30583 = p__30582;
var map__30583__$1 = (((((!((map__30583 == null))))?(((((map__30583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30583):map__30583);
var expr = cljs.core.get.call(null,map__30583__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__30583__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__30583__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__30583__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__30583__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__30583__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__30585){
var map__30586 = p__30585;
var map__30586__$1 = (((((!((map__30586 == null))))?(((((map__30586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30586):map__30586);
var f = map__30586__$1;
var expr = cljs.core.get.call(null,map__30586__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__30586__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__30586__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__30586__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__30586__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__30586__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__30586__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__30586__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__18473__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18473__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_30596__$1 = (function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_30597 = cljs.compiler.munge.call(null,name_30596__$1);
var delegate_name_30598 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_30597),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_30598," = function (");

var seq__30588_30599 = cljs.core.seq.call(null,params);
var chunk__30589_30600 = null;
var count__30590_30601 = (0);
var i__30591_30602 = (0);
while(true){
if((i__30591_30602 < count__30590_30601)){
var param_30603 = cljs.core._nth.call(null,chunk__30589_30600,i__30591_30602);
cljs.compiler.emit.call(null,param_30603);

if(cljs.core._EQ_.call(null,param_30603,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__30604 = seq__30588_30599;
var G__30605 = chunk__30589_30600;
var G__30606 = count__30590_30601;
var G__30607 = (i__30591_30602 + (1));
seq__30588_30599 = G__30604;
chunk__30589_30600 = G__30605;
count__30590_30601 = G__30606;
i__30591_30602 = G__30607;
continue;
} else {
var temp__5735__auto___30608 = cljs.core.seq.call(null,seq__30588_30599);
if(temp__5735__auto___30608){
var seq__30588_30609__$1 = temp__5735__auto___30608;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30588_30609__$1)){
var c__4461__auto___30610 = cljs.core.chunk_first.call(null,seq__30588_30609__$1);
var G__30611 = cljs.core.chunk_rest.call(null,seq__30588_30609__$1);
var G__30612 = c__4461__auto___30610;
var G__30613 = cljs.core.count.call(null,c__4461__auto___30610);
var G__30614 = (0);
seq__30588_30599 = G__30611;
chunk__30589_30600 = G__30612;
count__30590_30601 = G__30613;
i__30591_30602 = G__30614;
continue;
} else {
var param_30615 = cljs.core.first.call(null,seq__30588_30609__$1);
cljs.compiler.emit.call(null,param_30615);

if(cljs.core._EQ_.call(null,param_30615,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__30616 = cljs.core.next.call(null,seq__30588_30609__$1);
var G__30617 = null;
var G__30618 = (0);
var G__30619 = (0);
seq__30588_30599 = G__30616;
chunk__30589_30600 = G__30617;
count__30590_30601 = G__30618;
i__30591_30602 = G__30619;
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

cljs.compiler.emitln.call(null,"var ",mname_30597," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_30620 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_30620,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_30598,".call(this,");

var seq__30592_30621 = cljs.core.seq.call(null,params);
var chunk__30593_30622 = null;
var count__30594_30623 = (0);
var i__30595_30624 = (0);
while(true){
if((i__30595_30624 < count__30594_30623)){
var param_30625 = cljs.core._nth.call(null,chunk__30593_30622,i__30595_30624);
cljs.compiler.emit.call(null,param_30625);

if(cljs.core._EQ_.call(null,param_30625,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__30626 = seq__30592_30621;
var G__30627 = chunk__30593_30622;
var G__30628 = count__30594_30623;
var G__30629 = (i__30595_30624 + (1));
seq__30592_30621 = G__30626;
chunk__30593_30622 = G__30627;
count__30594_30623 = G__30628;
i__30595_30624 = G__30629;
continue;
} else {
var temp__5735__auto___30630 = cljs.core.seq.call(null,seq__30592_30621);
if(temp__5735__auto___30630){
var seq__30592_30631__$1 = temp__5735__auto___30630;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30592_30631__$1)){
var c__4461__auto___30632 = cljs.core.chunk_first.call(null,seq__30592_30631__$1);
var G__30633 = cljs.core.chunk_rest.call(null,seq__30592_30631__$1);
var G__30634 = c__4461__auto___30632;
var G__30635 = cljs.core.count.call(null,c__4461__auto___30632);
var G__30636 = (0);
seq__30592_30621 = G__30633;
chunk__30593_30622 = G__30634;
count__30594_30623 = G__30635;
i__30595_30624 = G__30636;
continue;
} else {
var param_30637 = cljs.core.first.call(null,seq__30592_30631__$1);
cljs.compiler.emit.call(null,param_30637);

if(cljs.core._EQ_.call(null,param_30637,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__30638 = cljs.core.next.call(null,seq__30592_30631__$1);
var G__30639 = null;
var G__30640 = (0);
var G__30641 = (0);
seq__30592_30621 = G__30638;
chunk__30593_30622 = G__30639;
count__30594_30623 = G__30640;
i__30595_30624 = G__30641;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_30597,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_30597,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_30596__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_30597,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_30598,";");

cljs.compiler.emitln.call(null,"return ",mname_30597,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18473__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__30645){
var map__30646 = p__30645;
var map__30646__$1 = (((((!((map__30646 == null))))?(((((map__30646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30646):map__30646);
var variadic = cljs.core.get.call(null,map__30646__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__30646__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__30646__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__30646__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__30646__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__30646__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__30646__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__30646,map__30646__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__30642_SHARP_){
var and__4036__auto__ = p1__30642_SHARP_;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__30642_SHARP_));
} else {
return and__4036__auto__;
}
});})(map__30646,map__30646__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
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
var name_30681__$1 = (function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_30682 = cljs.compiler.munge.call(null,name_30681__$1);
var maxparams_30683 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_30684 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_30681__$1,mname_30682,maxparams_30683,loop_locals,map__30646,map__30646__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_30682),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_30681__$1,mname_30682,maxparams_30683,loop_locals,map__30646,map__30646__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_30685 = cljs.core.sort_by.call(null,((function (name_30681__$1,mname_30682,maxparams_30683,mmap_30684,loop_locals,map__30646,map__30646__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__30643_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__30643_SHARP_)));
});})(name_30681__$1,mname_30682,maxparams_30683,mmap_30684,loop_locals,map__30646,map__30646__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_30684));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_30682," = null;");

var seq__30648_30686 = cljs.core.seq.call(null,ms_30685);
var chunk__30649_30687 = null;
var count__30650_30688 = (0);
var i__30651_30689 = (0);
while(true){
if((i__30651_30689 < count__30650_30688)){
var vec__30652_30690 = cljs.core._nth.call(null,chunk__30649_30687,i__30651_30689);
var n_30691 = cljs.core.nth.call(null,vec__30652_30690,(0),null);
var meth_30692 = cljs.core.nth.call(null,vec__30652_30690,(1),null);
cljs.compiler.emits.call(null,"var ",n_30691," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30692))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_30692);
} else {
cljs.compiler.emit_fn_method.call(null,meth_30692);
}

cljs.compiler.emitln.call(null,";");


var G__30693 = seq__30648_30686;
var G__30694 = chunk__30649_30687;
var G__30695 = count__30650_30688;
var G__30696 = (i__30651_30689 + (1));
seq__30648_30686 = G__30693;
chunk__30649_30687 = G__30694;
count__30650_30688 = G__30695;
i__30651_30689 = G__30696;
continue;
} else {
var temp__5735__auto___30697 = cljs.core.seq.call(null,seq__30648_30686);
if(temp__5735__auto___30697){
var seq__30648_30698__$1 = temp__5735__auto___30697;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30648_30698__$1)){
var c__4461__auto___30699 = cljs.core.chunk_first.call(null,seq__30648_30698__$1);
var G__30700 = cljs.core.chunk_rest.call(null,seq__30648_30698__$1);
var G__30701 = c__4461__auto___30699;
var G__30702 = cljs.core.count.call(null,c__4461__auto___30699);
var G__30703 = (0);
seq__30648_30686 = G__30700;
chunk__30649_30687 = G__30701;
count__30650_30688 = G__30702;
i__30651_30689 = G__30703;
continue;
} else {
var vec__30655_30704 = cljs.core.first.call(null,seq__30648_30698__$1);
var n_30705 = cljs.core.nth.call(null,vec__30655_30704,(0),null);
var meth_30706 = cljs.core.nth.call(null,vec__30655_30704,(1),null);
cljs.compiler.emits.call(null,"var ",n_30705," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30706))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_30706);
} else {
cljs.compiler.emit_fn_method.call(null,meth_30706);
}

cljs.compiler.emitln.call(null,";");


var G__30707 = cljs.core.next.call(null,seq__30648_30698__$1);
var G__30708 = null;
var G__30709 = (0);
var G__30710 = (0);
seq__30648_30686 = G__30707;
chunk__30649_30687 = G__30708;
count__30650_30688 = G__30709;
i__30651_30689 = G__30710;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_30682," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_30683),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_30683)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_30683));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__30658_30711 = cljs.core.seq.call(null,ms_30685);
var chunk__30659_30712 = null;
var count__30660_30713 = (0);
var i__30661_30714 = (0);
while(true){
if((i__30661_30714 < count__30660_30713)){
var vec__30662_30715 = cljs.core._nth.call(null,chunk__30659_30712,i__30661_30714);
var n_30716 = cljs.core.nth.call(null,vec__30662_30715,(0),null);
var meth_30717 = cljs.core.nth.call(null,vec__30662_30715,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30717))){
cljs.compiler.emitln.call(null,"default:");

var restarg_30718 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_30718," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_30719 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_30718," = new cljs.core.IndexedSeq(",a_30719,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_30716,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_30683)),(((cljs.core.count.call(null,maxparams_30683) > (1)))?", ":null),restarg_30718,");");
} else {
var pcnt_30720 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_30717));
cljs.compiler.emitln.call(null,"case ",pcnt_30720,":");

cljs.compiler.emitln.call(null,"return ",n_30716,".call(this",(((pcnt_30720 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_30720,maxparams_30683)),null,(1),null)),(2),null))),");");
}


var G__30721 = seq__30658_30711;
var G__30722 = chunk__30659_30712;
var G__30723 = count__30660_30713;
var G__30724 = (i__30661_30714 + (1));
seq__30658_30711 = G__30721;
chunk__30659_30712 = G__30722;
count__30660_30713 = G__30723;
i__30661_30714 = G__30724;
continue;
} else {
var temp__5735__auto___30725 = cljs.core.seq.call(null,seq__30658_30711);
if(temp__5735__auto___30725){
var seq__30658_30726__$1 = temp__5735__auto___30725;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30658_30726__$1)){
var c__4461__auto___30727 = cljs.core.chunk_first.call(null,seq__30658_30726__$1);
var G__30728 = cljs.core.chunk_rest.call(null,seq__30658_30726__$1);
var G__30729 = c__4461__auto___30727;
var G__30730 = cljs.core.count.call(null,c__4461__auto___30727);
var G__30731 = (0);
seq__30658_30711 = G__30728;
chunk__30659_30712 = G__30729;
count__30660_30713 = G__30730;
i__30661_30714 = G__30731;
continue;
} else {
var vec__30665_30732 = cljs.core.first.call(null,seq__30658_30726__$1);
var n_30733 = cljs.core.nth.call(null,vec__30665_30732,(0),null);
var meth_30734 = cljs.core.nth.call(null,vec__30665_30732,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30734))){
cljs.compiler.emitln.call(null,"default:");

var restarg_30735 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_30735," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_30736 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_30735," = new cljs.core.IndexedSeq(",a_30736,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_30733,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_30683)),(((cljs.core.count.call(null,maxparams_30683) > (1)))?", ":null),restarg_30735,");");
} else {
var pcnt_30737 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_30734));
cljs.compiler.emitln.call(null,"case ",pcnt_30737,":");

cljs.compiler.emitln.call(null,"return ",n_30733,".call(this",(((pcnt_30737 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_30737,maxparams_30683)),null,(1),null)),(2),null))),");");
}


var G__30738 = cljs.core.next.call(null,seq__30658_30726__$1);
var G__30739 = null;
var G__30740 = (0);
var G__30741 = (0);
seq__30658_30711 = G__30738;
chunk__30659_30712 = G__30739;
count__30660_30713 = G__30740;
i__30661_30714 = G__30741;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_30742 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_30685)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_30742,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_30682,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_30682,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_30681__$1,mname_30682,maxparams_30683,mmap_30684,ms_30685,loop_locals,map__30646,map__30646__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__30644_SHARP_){
var vec__30668 = p1__30644_SHARP_;
var n = cljs.core.nth.call(null,vec__30668,(0),null);
var m = cljs.core.nth.call(null,vec__30668,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_30681__$1,mname_30682,maxparams_30683,mmap_30684,ms_30685,loop_locals,map__30646,map__30646__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_30685),".cljs$lang$applyTo;");
} else {
}

var seq__30671_30743 = cljs.core.seq.call(null,ms_30685);
var chunk__30672_30744 = null;
var count__30673_30745 = (0);
var i__30674_30746 = (0);
while(true){
if((i__30674_30746 < count__30673_30745)){
var vec__30675_30747 = cljs.core._nth.call(null,chunk__30672_30744,i__30674_30746);
var n_30748 = cljs.core.nth.call(null,vec__30675_30747,(0),null);
var meth_30749 = cljs.core.nth.call(null,vec__30675_30747,(1),null);
var c_30750 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_30749));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30749))){
cljs.compiler.emitln.call(null,mname_30682,".cljs$core$IFn$_invoke$arity$variadic = ",n_30748,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_30682,".cljs$core$IFn$_invoke$arity$",c_30750," = ",n_30748,";");
}


var G__30751 = seq__30671_30743;
var G__30752 = chunk__30672_30744;
var G__30753 = count__30673_30745;
var G__30754 = (i__30674_30746 + (1));
seq__30671_30743 = G__30751;
chunk__30672_30744 = G__30752;
count__30673_30745 = G__30753;
i__30674_30746 = G__30754;
continue;
} else {
var temp__5735__auto___30755 = cljs.core.seq.call(null,seq__30671_30743);
if(temp__5735__auto___30755){
var seq__30671_30756__$1 = temp__5735__auto___30755;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30671_30756__$1)){
var c__4461__auto___30757 = cljs.core.chunk_first.call(null,seq__30671_30756__$1);
var G__30758 = cljs.core.chunk_rest.call(null,seq__30671_30756__$1);
var G__30759 = c__4461__auto___30757;
var G__30760 = cljs.core.count.call(null,c__4461__auto___30757);
var G__30761 = (0);
seq__30671_30743 = G__30758;
chunk__30672_30744 = G__30759;
count__30673_30745 = G__30760;
i__30674_30746 = G__30761;
continue;
} else {
var vec__30678_30762 = cljs.core.first.call(null,seq__30671_30756__$1);
var n_30763 = cljs.core.nth.call(null,vec__30678_30762,(0),null);
var meth_30764 = cljs.core.nth.call(null,vec__30678_30762,(1),null);
var c_30765 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_30764));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_30764))){
cljs.compiler.emitln.call(null,mname_30682,".cljs$core$IFn$_invoke$arity$variadic = ",n_30763,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_30682,".cljs$core$IFn$_invoke$arity$",c_30765," = ",n_30763,";");
}


var G__30766 = cljs.core.next.call(null,seq__30671_30756__$1);
var G__30767 = null;
var G__30768 = (0);
var G__30769 = (0);
seq__30671_30743 = G__30766;
chunk__30672_30744 = G__30767;
count__30673_30745 = G__30768;
i__30674_30746 = G__30769;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_30682,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__30770){
var map__30771 = p__30770;
var map__30771__$1 = (((((!((map__30771 == null))))?(((((map__30771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30771):map__30771);
var statements = cljs.core.get.call(null,map__30771__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__30771__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__30771__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__30773_30777 = cljs.core.seq.call(null,statements);
var chunk__30774_30778 = null;
var count__30775_30779 = (0);
var i__30776_30780 = (0);
while(true){
if((i__30776_30780 < count__30775_30779)){
var s_30781 = cljs.core._nth.call(null,chunk__30774_30778,i__30776_30780);
cljs.compiler.emitln.call(null,s_30781);


var G__30782 = seq__30773_30777;
var G__30783 = chunk__30774_30778;
var G__30784 = count__30775_30779;
var G__30785 = (i__30776_30780 + (1));
seq__30773_30777 = G__30782;
chunk__30774_30778 = G__30783;
count__30775_30779 = G__30784;
i__30776_30780 = G__30785;
continue;
} else {
var temp__5735__auto___30786 = cljs.core.seq.call(null,seq__30773_30777);
if(temp__5735__auto___30786){
var seq__30773_30787__$1 = temp__5735__auto___30786;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30773_30787__$1)){
var c__4461__auto___30788 = cljs.core.chunk_first.call(null,seq__30773_30787__$1);
var G__30789 = cljs.core.chunk_rest.call(null,seq__30773_30787__$1);
var G__30790 = c__4461__auto___30788;
var G__30791 = cljs.core.count.call(null,c__4461__auto___30788);
var G__30792 = (0);
seq__30773_30777 = G__30789;
chunk__30774_30778 = G__30790;
count__30775_30779 = G__30791;
i__30776_30780 = G__30792;
continue;
} else {
var s_30793 = cljs.core.first.call(null,seq__30773_30787__$1);
cljs.compiler.emitln.call(null,s_30793);


var G__30794 = cljs.core.next.call(null,seq__30773_30787__$1);
var G__30795 = null;
var G__30796 = (0);
var G__30797 = (0);
seq__30773_30777 = G__30794;
chunk__30774_30778 = G__30795;
count__30775_30779 = G__30796;
i__30776_30780 = G__30797;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__30798){
var map__30799 = p__30798;
var map__30799__$1 = (((((!((map__30799 == null))))?(((((map__30799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30799):map__30799);
var try$ = cljs.core.get.call(null,map__30799__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__30799__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__30799__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__30799__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__30799__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__30801,is_loop){
var map__30802 = p__30801;
var map__30802__$1 = (((((!((map__30802 == null))))?(((((map__30802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30802):map__30802);
var expr = cljs.core.get.call(null,map__30802__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__30802__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__30802__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__30804_30814 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__30805_30815 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR__orig_val__30804_30814,context,map__30802,map__30802__$1,expr,bindings,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__30804_30814,context,map__30802,map__30802__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__30805_30815;

try{var seq__30806_30816 = cljs.core.seq.call(null,bindings);
var chunk__30807_30817 = null;
var count__30808_30818 = (0);
var i__30809_30819 = (0);
while(true){
if((i__30809_30819 < count__30808_30818)){
var map__30810_30820 = cljs.core._nth.call(null,chunk__30807_30817,i__30809_30819);
var map__30810_30821__$1 = (((((!((map__30810_30820 == null))))?(((((map__30810_30820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30810_30820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30810_30820):map__30810_30820);
var binding_30822 = map__30810_30821__$1;
var init_30823 = cljs.core.get.call(null,map__30810_30821__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_30822);

cljs.compiler.emitln.call(null," = ",init_30823,";");


var G__30824 = seq__30806_30816;
var G__30825 = chunk__30807_30817;
var G__30826 = count__30808_30818;
var G__30827 = (i__30809_30819 + (1));
seq__30806_30816 = G__30824;
chunk__30807_30817 = G__30825;
count__30808_30818 = G__30826;
i__30809_30819 = G__30827;
continue;
} else {
var temp__5735__auto___30828 = cljs.core.seq.call(null,seq__30806_30816);
if(temp__5735__auto___30828){
var seq__30806_30829__$1 = temp__5735__auto___30828;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30806_30829__$1)){
var c__4461__auto___30830 = cljs.core.chunk_first.call(null,seq__30806_30829__$1);
var G__30831 = cljs.core.chunk_rest.call(null,seq__30806_30829__$1);
var G__30832 = c__4461__auto___30830;
var G__30833 = cljs.core.count.call(null,c__4461__auto___30830);
var G__30834 = (0);
seq__30806_30816 = G__30831;
chunk__30807_30817 = G__30832;
count__30808_30818 = G__30833;
i__30809_30819 = G__30834;
continue;
} else {
var map__30812_30835 = cljs.core.first.call(null,seq__30806_30829__$1);
var map__30812_30836__$1 = (((((!((map__30812_30835 == null))))?(((((map__30812_30835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30812_30835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30812_30835):map__30812_30835);
var binding_30837 = map__30812_30836__$1;
var init_30838 = cljs.core.get.call(null,map__30812_30836__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_30837);

cljs.compiler.emitln.call(null," = ",init_30838,";");


var G__30839 = cljs.core.next.call(null,seq__30806_30829__$1);
var G__30840 = null;
var G__30841 = (0);
var G__30842 = (0);
seq__30806_30816 = G__30839;
chunk__30807_30817 = G__30840;
count__30808_30818 = G__30841;
i__30809_30819 = G__30842;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__30804_30814;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__30843){
var map__30844 = p__30843;
var map__30844__$1 = (((((!((map__30844 == null))))?(((((map__30844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30844):map__30844);
var frame = cljs.core.get.call(null,map__30844__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__30844__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__30844__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4518__auto___30846 = cljs.core.count.call(null,exprs);
var i_30847 = (0);
while(true){
if((i_30847 < n__4518__auto___30846)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_30847)," = ",exprs.call(null,i_30847),";");

var G__30848 = (i_30847 + (1));
i_30847 = G__30848;
continue;
} else {
}
break;
}

var n__4518__auto___30849 = cljs.core.count.call(null,exprs);
var i_30850 = (0);
while(true){
if((i_30850 < n__4518__auto___30849)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_30850))," = ",temps.call(null,i_30850),";");

var G__30851 = (i_30850 + (1));
i_30850 = G__30851;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__30852){
var map__30853 = p__30852;
var map__30853__$1 = (((((!((map__30853 == null))))?(((((map__30853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30853):map__30853);
var expr = cljs.core.get.call(null,map__30853__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__30853__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__30853__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__30855_30863 = cljs.core.seq.call(null,bindings);
var chunk__30856_30864 = null;
var count__30857_30865 = (0);
var i__30858_30866 = (0);
while(true){
if((i__30858_30866 < count__30857_30865)){
var map__30859_30867 = cljs.core._nth.call(null,chunk__30856_30864,i__30858_30866);
var map__30859_30868__$1 = (((((!((map__30859_30867 == null))))?(((((map__30859_30867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30859_30867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30859_30867):map__30859_30867);
var binding_30869 = map__30859_30868__$1;
var init_30870 = cljs.core.get.call(null,map__30859_30868__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_30869)," = ",init_30870,";");


var G__30871 = seq__30855_30863;
var G__30872 = chunk__30856_30864;
var G__30873 = count__30857_30865;
var G__30874 = (i__30858_30866 + (1));
seq__30855_30863 = G__30871;
chunk__30856_30864 = G__30872;
count__30857_30865 = G__30873;
i__30858_30866 = G__30874;
continue;
} else {
var temp__5735__auto___30875 = cljs.core.seq.call(null,seq__30855_30863);
if(temp__5735__auto___30875){
var seq__30855_30876__$1 = temp__5735__auto___30875;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30855_30876__$1)){
var c__4461__auto___30877 = cljs.core.chunk_first.call(null,seq__30855_30876__$1);
var G__30878 = cljs.core.chunk_rest.call(null,seq__30855_30876__$1);
var G__30879 = c__4461__auto___30877;
var G__30880 = cljs.core.count.call(null,c__4461__auto___30877);
var G__30881 = (0);
seq__30855_30863 = G__30878;
chunk__30856_30864 = G__30879;
count__30857_30865 = G__30880;
i__30858_30866 = G__30881;
continue;
} else {
var map__30861_30882 = cljs.core.first.call(null,seq__30855_30876__$1);
var map__30861_30883__$1 = (((((!((map__30861_30882 == null))))?(((((map__30861_30882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30861_30882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30861_30882):map__30861_30882);
var binding_30884 = map__30861_30883__$1;
var init_30885 = cljs.core.get.call(null,map__30861_30883__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_30884)," = ",init_30885,";");


var G__30886 = cljs.core.next.call(null,seq__30855_30876__$1);
var G__30887 = null;
var G__30888 = (0);
var G__30889 = (0);
seq__30855_30863 = G__30886;
chunk__30856_30864 = G__30887;
count__30857_30865 = G__30888;
i__30858_30866 = G__30889;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__30892){
var map__30893 = p__30892;
var map__30893__$1 = (((((!((map__30893 == null))))?(((((map__30893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30893):map__30893);
var expr = map__30893__$1;
var f = cljs.core.get.call(null,map__30893__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__30893__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__30893__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__30895 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30893,map__30893__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30893,map__30893__$1,expr,f,args,env){
return (function (p1__30890_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__30890_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30893,map__30893__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30893,map__30893__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30893,map__30893__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30893,map__30893__$1,expr,f,args,env){
return (function (p1__30891_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__30891_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30893,map__30893__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30893,map__30893__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__30895,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__30895,(1),null);
var env__18473__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18473__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_30898 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_30898,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_30899 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_30899,args)),(((mfa_30899 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_30899,args)),"], 0))");
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
var fprop_30900 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_30900," ? ",f__$1,fprop_30900,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_30900," ? ",f__$1,fprop_30900,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__30901){
var map__30902 = p__30901;
var map__30902__$1 = (((((!((map__30902 == null))))?(((((map__30902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30902):map__30902);
var ctor = cljs.core.get.call(null,map__30902__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__30902__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__30902__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__30904){
var map__30905 = p__30904;
var map__30905__$1 = (((((!((map__30905 == null))))?(((((map__30905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30905):map__30905);
var target = cljs.core.get.call(null,map__30905__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__30905__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__30905__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var map__30907 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__30907__$1 = (((((!((map__30907 == null))))?(((((map__30907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30907):map__30907);
var options = cljs.core.get.call(null,map__30907__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__30907__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__30908 = options;
var map__30908__$1 = (((((!((map__30908 == null))))?(((((map__30908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30908):map__30908);
var target = cljs.core.get.call(null,map__30908__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__30908__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__30909 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__30914 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__30914__$1 = (((((!((map__30914 == null))))?(((((map__30914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30914):map__30914);
var node_libs = cljs.core.get.call(null,map__30914__$1,true);
var libs_to_load = cljs.core.get.call(null,map__30914__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__30909,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__30909,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__30916_30932 = cljs.core.seq.call(null,libs_to_load);
var chunk__30917_30933 = null;
var count__30918_30934 = (0);
var i__30919_30935 = (0);
while(true){
if((i__30919_30935 < count__30918_30934)){
var lib_30936 = cljs.core._nth.call(null,chunk__30917_30933,i__30919_30935);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_30936)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_30936),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_30936),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_30936),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_30936),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_30936,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_30936),"');");
}

}
}
}


var G__30937 = seq__30916_30932;
var G__30938 = chunk__30917_30933;
var G__30939 = count__30918_30934;
var G__30940 = (i__30919_30935 + (1));
seq__30916_30932 = G__30937;
chunk__30917_30933 = G__30938;
count__30918_30934 = G__30939;
i__30919_30935 = G__30940;
continue;
} else {
var temp__5735__auto___30941 = cljs.core.seq.call(null,seq__30916_30932);
if(temp__5735__auto___30941){
var seq__30916_30942__$1 = temp__5735__auto___30941;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30916_30942__$1)){
var c__4461__auto___30943 = cljs.core.chunk_first.call(null,seq__30916_30942__$1);
var G__30944 = cljs.core.chunk_rest.call(null,seq__30916_30942__$1);
var G__30945 = c__4461__auto___30943;
var G__30946 = cljs.core.count.call(null,c__4461__auto___30943);
var G__30947 = (0);
seq__30916_30932 = G__30944;
chunk__30917_30933 = G__30945;
count__30918_30934 = G__30946;
i__30919_30935 = G__30947;
continue;
} else {
var lib_30948 = cljs.core.first.call(null,seq__30916_30942__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_30948)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_30948),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_30948),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_30948),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_30948),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_30948,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_30948),"');");
}

}
}
}


var G__30949 = cljs.core.next.call(null,seq__30916_30942__$1);
var G__30950 = null;
var G__30951 = (0);
var G__30952 = (0);
seq__30916_30932 = G__30949;
chunk__30917_30933 = G__30950;
count__30918_30934 = G__30951;
i__30919_30935 = G__30952;
continue;
}
} else {
}
}
break;
}

var seq__30920_30953 = cljs.core.seq.call(null,node_libs);
var chunk__30921_30954 = null;
var count__30922_30955 = (0);
var i__30923_30956 = (0);
while(true){
if((i__30923_30956 < count__30922_30955)){
var lib_30957 = cljs.core._nth.call(null,chunk__30921_30954,i__30923_30956);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_30957)," = require('",lib_30957,"');");


var G__30958 = seq__30920_30953;
var G__30959 = chunk__30921_30954;
var G__30960 = count__30922_30955;
var G__30961 = (i__30923_30956 + (1));
seq__30920_30953 = G__30958;
chunk__30921_30954 = G__30959;
count__30922_30955 = G__30960;
i__30923_30956 = G__30961;
continue;
} else {
var temp__5735__auto___30962 = cljs.core.seq.call(null,seq__30920_30953);
if(temp__5735__auto___30962){
var seq__30920_30963__$1 = temp__5735__auto___30962;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30920_30963__$1)){
var c__4461__auto___30964 = cljs.core.chunk_first.call(null,seq__30920_30963__$1);
var G__30965 = cljs.core.chunk_rest.call(null,seq__30920_30963__$1);
var G__30966 = c__4461__auto___30964;
var G__30967 = cljs.core.count.call(null,c__4461__auto___30964);
var G__30968 = (0);
seq__30920_30953 = G__30965;
chunk__30921_30954 = G__30966;
count__30922_30955 = G__30967;
i__30923_30956 = G__30968;
continue;
} else {
var lib_30969 = cljs.core.first.call(null,seq__30920_30963__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_30969)," = require('",lib_30969,"');");


var G__30970 = cljs.core.next.call(null,seq__30920_30963__$1);
var G__30971 = null;
var G__30972 = (0);
var G__30973 = (0);
seq__30920_30953 = G__30970;
chunk__30921_30954 = G__30971;
count__30922_30955 = G__30972;
i__30923_30956 = G__30973;
continue;
}
} else {
}
}
break;
}

var seq__30924_30974 = cljs.core.seq.call(null,global_exports_libs);
var chunk__30925_30975 = null;
var count__30926_30976 = (0);
var i__30927_30977 = (0);
while(true){
if((i__30927_30977 < count__30926_30976)){
var lib_30978 = cljs.core._nth.call(null,chunk__30925_30975,i__30927_30977);
var map__30928_30979 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_30978));
var map__30928_30980__$1 = (((((!((map__30928_30979 == null))))?(((((map__30928_30979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30928_30979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30928_30979):map__30928_30979);
var global_exports_30981 = cljs.core.get.call(null,map__30928_30980__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_30981,lib_30978);


var G__30982 = seq__30924_30974;
var G__30983 = chunk__30925_30975;
var G__30984 = count__30926_30976;
var G__30985 = (i__30927_30977 + (1));
seq__30924_30974 = G__30982;
chunk__30925_30975 = G__30983;
count__30926_30976 = G__30984;
i__30927_30977 = G__30985;
continue;
} else {
var temp__5735__auto___30986 = cljs.core.seq.call(null,seq__30924_30974);
if(temp__5735__auto___30986){
var seq__30924_30987__$1 = temp__5735__auto___30986;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30924_30987__$1)){
var c__4461__auto___30988 = cljs.core.chunk_first.call(null,seq__30924_30987__$1);
var G__30989 = cljs.core.chunk_rest.call(null,seq__30924_30987__$1);
var G__30990 = c__4461__auto___30988;
var G__30991 = cljs.core.count.call(null,c__4461__auto___30988);
var G__30992 = (0);
seq__30924_30974 = G__30989;
chunk__30925_30975 = G__30990;
count__30926_30976 = G__30991;
i__30927_30977 = G__30992;
continue;
} else {
var lib_30993 = cljs.core.first.call(null,seq__30924_30987__$1);
var map__30930_30994 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_30993));
var map__30930_30995__$1 = (((((!((map__30930_30994 == null))))?(((((map__30930_30994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30930_30994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30930_30994):map__30930_30994);
var global_exports_30996 = cljs.core.get.call(null,map__30930_30995__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_30996,lib_30993);


var G__30997 = cljs.core.next.call(null,seq__30924_30987__$1);
var G__30998 = null;
var G__30999 = (0);
var G__31000 = (0);
seq__30924_30974 = G__30997;
chunk__30925_30975 = G__30998;
count__30926_30976 = G__30999;
i__30927_30977 = G__31000;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__31001){
var map__31002 = p__31001;
var map__31002__$1 = (((((!((map__31002 == null))))?(((((map__31002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31002):map__31002);
var name = cljs.core.get.call(null,map__31002__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__31002__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__31002__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__31002__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__31002__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__31002__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__31002__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__31004){
var map__31005 = p__31004;
var map__31005__$1 = (((((!((map__31005 == null))))?(((((map__31005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31005):map__31005);
var name = cljs.core.get.call(null,map__31005__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__31005__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__31005__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__31005__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__31005__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__31005__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__31005__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__31007){
var map__31008 = p__31007;
var map__31008__$1 = (((((!((map__31008 == null))))?(((((map__31008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31008):map__31008);
var t = cljs.core.get.call(null,map__31008__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__31008__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__31008__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__31008__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__31008__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__31010_31028 = cljs.core.seq.call(null,protocols);
var chunk__31011_31029 = null;
var count__31012_31030 = (0);
var i__31013_31031 = (0);
while(true){
if((i__31013_31031 < count__31012_31030)){
var protocol_31032 = cljs.core._nth.call(null,chunk__31011_31029,i__31013_31031);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_31032)),"}");


var G__31033 = seq__31010_31028;
var G__31034 = chunk__31011_31029;
var G__31035 = count__31012_31030;
var G__31036 = (i__31013_31031 + (1));
seq__31010_31028 = G__31033;
chunk__31011_31029 = G__31034;
count__31012_31030 = G__31035;
i__31013_31031 = G__31036;
continue;
} else {
var temp__5735__auto___31037 = cljs.core.seq.call(null,seq__31010_31028);
if(temp__5735__auto___31037){
var seq__31010_31038__$1 = temp__5735__auto___31037;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31010_31038__$1)){
var c__4461__auto___31039 = cljs.core.chunk_first.call(null,seq__31010_31038__$1);
var G__31040 = cljs.core.chunk_rest.call(null,seq__31010_31038__$1);
var G__31041 = c__4461__auto___31039;
var G__31042 = cljs.core.count.call(null,c__4461__auto___31039);
var G__31043 = (0);
seq__31010_31028 = G__31040;
chunk__31011_31029 = G__31041;
count__31012_31030 = G__31042;
i__31013_31031 = G__31043;
continue;
} else {
var protocol_31044 = cljs.core.first.call(null,seq__31010_31038__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_31044)),"}");


var G__31045 = cljs.core.next.call(null,seq__31010_31038__$1);
var G__31046 = null;
var G__31047 = (0);
var G__31048 = (0);
seq__31010_31028 = G__31045;
chunk__31011_31029 = G__31046;
count__31012_31030 = G__31047;
i__31013_31031 = G__31048;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__31014_31049 = cljs.core.seq.call(null,fields__$1);
var chunk__31015_31050 = null;
var count__31016_31051 = (0);
var i__31017_31052 = (0);
while(true){
if((i__31017_31052 < count__31016_31051)){
var fld_31053 = cljs.core._nth.call(null,chunk__31015_31050,i__31017_31052);
cljs.compiler.emitln.call(null,"this.",fld_31053," = ",fld_31053,";");


var G__31054 = seq__31014_31049;
var G__31055 = chunk__31015_31050;
var G__31056 = count__31016_31051;
var G__31057 = (i__31017_31052 + (1));
seq__31014_31049 = G__31054;
chunk__31015_31050 = G__31055;
count__31016_31051 = G__31056;
i__31017_31052 = G__31057;
continue;
} else {
var temp__5735__auto___31058 = cljs.core.seq.call(null,seq__31014_31049);
if(temp__5735__auto___31058){
var seq__31014_31059__$1 = temp__5735__auto___31058;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31014_31059__$1)){
var c__4461__auto___31060 = cljs.core.chunk_first.call(null,seq__31014_31059__$1);
var G__31061 = cljs.core.chunk_rest.call(null,seq__31014_31059__$1);
var G__31062 = c__4461__auto___31060;
var G__31063 = cljs.core.count.call(null,c__4461__auto___31060);
var G__31064 = (0);
seq__31014_31049 = G__31061;
chunk__31015_31050 = G__31062;
count__31016_31051 = G__31063;
i__31017_31052 = G__31064;
continue;
} else {
var fld_31065 = cljs.core.first.call(null,seq__31014_31059__$1);
cljs.compiler.emitln.call(null,"this.",fld_31065," = ",fld_31065,";");


var G__31066 = cljs.core.next.call(null,seq__31014_31059__$1);
var G__31067 = null;
var G__31068 = (0);
var G__31069 = (0);
seq__31014_31049 = G__31066;
chunk__31015_31050 = G__31067;
count__31016_31051 = G__31068;
i__31017_31052 = G__31069;
continue;
}
} else {
}
}
break;
}

var seq__31018_31070 = cljs.core.seq.call(null,pmasks);
var chunk__31019_31071 = null;
var count__31020_31072 = (0);
var i__31021_31073 = (0);
while(true){
if((i__31021_31073 < count__31020_31072)){
var vec__31022_31074 = cljs.core._nth.call(null,chunk__31019_31071,i__31021_31073);
var pno_31075 = cljs.core.nth.call(null,vec__31022_31074,(0),null);
var pmask_31076 = cljs.core.nth.call(null,vec__31022_31074,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_31075,"$ = ",pmask_31076,";");


var G__31077 = seq__31018_31070;
var G__31078 = chunk__31019_31071;
var G__31079 = count__31020_31072;
var G__31080 = (i__31021_31073 + (1));
seq__31018_31070 = G__31077;
chunk__31019_31071 = G__31078;
count__31020_31072 = G__31079;
i__31021_31073 = G__31080;
continue;
} else {
var temp__5735__auto___31081 = cljs.core.seq.call(null,seq__31018_31070);
if(temp__5735__auto___31081){
var seq__31018_31082__$1 = temp__5735__auto___31081;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31018_31082__$1)){
var c__4461__auto___31083 = cljs.core.chunk_first.call(null,seq__31018_31082__$1);
var G__31084 = cljs.core.chunk_rest.call(null,seq__31018_31082__$1);
var G__31085 = c__4461__auto___31083;
var G__31086 = cljs.core.count.call(null,c__4461__auto___31083);
var G__31087 = (0);
seq__31018_31070 = G__31084;
chunk__31019_31071 = G__31085;
count__31020_31072 = G__31086;
i__31021_31073 = G__31087;
continue;
} else {
var vec__31025_31088 = cljs.core.first.call(null,seq__31018_31082__$1);
var pno_31089 = cljs.core.nth.call(null,vec__31025_31088,(0),null);
var pmask_31090 = cljs.core.nth.call(null,vec__31025_31088,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_31089,"$ = ",pmask_31090,";");


var G__31091 = cljs.core.next.call(null,seq__31018_31082__$1);
var G__31092 = null;
var G__31093 = (0);
var G__31094 = (0);
seq__31018_31070 = G__31091;
chunk__31019_31071 = G__31092;
count__31020_31072 = G__31093;
i__31021_31073 = G__31094;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__31095){
var map__31096 = p__31095;
var map__31096__$1 = (((((!((map__31096 == null))))?(((((map__31096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31096):map__31096);
var t = cljs.core.get.call(null,map__31096__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__31096__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__31096__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__31096__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__31096__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__31098_31116 = cljs.core.seq.call(null,protocols);
var chunk__31099_31117 = null;
var count__31100_31118 = (0);
var i__31101_31119 = (0);
while(true){
if((i__31101_31119 < count__31100_31118)){
var protocol_31120 = cljs.core._nth.call(null,chunk__31099_31117,i__31101_31119);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_31120)),"}");


var G__31121 = seq__31098_31116;
var G__31122 = chunk__31099_31117;
var G__31123 = count__31100_31118;
var G__31124 = (i__31101_31119 + (1));
seq__31098_31116 = G__31121;
chunk__31099_31117 = G__31122;
count__31100_31118 = G__31123;
i__31101_31119 = G__31124;
continue;
} else {
var temp__5735__auto___31125 = cljs.core.seq.call(null,seq__31098_31116);
if(temp__5735__auto___31125){
var seq__31098_31126__$1 = temp__5735__auto___31125;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31098_31126__$1)){
var c__4461__auto___31127 = cljs.core.chunk_first.call(null,seq__31098_31126__$1);
var G__31128 = cljs.core.chunk_rest.call(null,seq__31098_31126__$1);
var G__31129 = c__4461__auto___31127;
var G__31130 = cljs.core.count.call(null,c__4461__auto___31127);
var G__31131 = (0);
seq__31098_31116 = G__31128;
chunk__31099_31117 = G__31129;
count__31100_31118 = G__31130;
i__31101_31119 = G__31131;
continue;
} else {
var protocol_31132 = cljs.core.first.call(null,seq__31098_31126__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_31132)),"}");


var G__31133 = cljs.core.next.call(null,seq__31098_31126__$1);
var G__31134 = null;
var G__31135 = (0);
var G__31136 = (0);
seq__31098_31116 = G__31133;
chunk__31099_31117 = G__31134;
count__31100_31118 = G__31135;
i__31101_31119 = G__31136;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__31102_31137 = cljs.core.seq.call(null,fields__$1);
var chunk__31103_31138 = null;
var count__31104_31139 = (0);
var i__31105_31140 = (0);
while(true){
if((i__31105_31140 < count__31104_31139)){
var fld_31141 = cljs.core._nth.call(null,chunk__31103_31138,i__31105_31140);
cljs.compiler.emitln.call(null,"this.",fld_31141," = ",fld_31141,";");


var G__31142 = seq__31102_31137;
var G__31143 = chunk__31103_31138;
var G__31144 = count__31104_31139;
var G__31145 = (i__31105_31140 + (1));
seq__31102_31137 = G__31142;
chunk__31103_31138 = G__31143;
count__31104_31139 = G__31144;
i__31105_31140 = G__31145;
continue;
} else {
var temp__5735__auto___31146 = cljs.core.seq.call(null,seq__31102_31137);
if(temp__5735__auto___31146){
var seq__31102_31147__$1 = temp__5735__auto___31146;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31102_31147__$1)){
var c__4461__auto___31148 = cljs.core.chunk_first.call(null,seq__31102_31147__$1);
var G__31149 = cljs.core.chunk_rest.call(null,seq__31102_31147__$1);
var G__31150 = c__4461__auto___31148;
var G__31151 = cljs.core.count.call(null,c__4461__auto___31148);
var G__31152 = (0);
seq__31102_31137 = G__31149;
chunk__31103_31138 = G__31150;
count__31104_31139 = G__31151;
i__31105_31140 = G__31152;
continue;
} else {
var fld_31153 = cljs.core.first.call(null,seq__31102_31147__$1);
cljs.compiler.emitln.call(null,"this.",fld_31153," = ",fld_31153,";");


var G__31154 = cljs.core.next.call(null,seq__31102_31147__$1);
var G__31155 = null;
var G__31156 = (0);
var G__31157 = (0);
seq__31102_31137 = G__31154;
chunk__31103_31138 = G__31155;
count__31104_31139 = G__31156;
i__31105_31140 = G__31157;
continue;
}
} else {
}
}
break;
}

var seq__31106_31158 = cljs.core.seq.call(null,pmasks);
var chunk__31107_31159 = null;
var count__31108_31160 = (0);
var i__31109_31161 = (0);
while(true){
if((i__31109_31161 < count__31108_31160)){
var vec__31110_31162 = cljs.core._nth.call(null,chunk__31107_31159,i__31109_31161);
var pno_31163 = cljs.core.nth.call(null,vec__31110_31162,(0),null);
var pmask_31164 = cljs.core.nth.call(null,vec__31110_31162,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_31163,"$ = ",pmask_31164,";");


var G__31165 = seq__31106_31158;
var G__31166 = chunk__31107_31159;
var G__31167 = count__31108_31160;
var G__31168 = (i__31109_31161 + (1));
seq__31106_31158 = G__31165;
chunk__31107_31159 = G__31166;
count__31108_31160 = G__31167;
i__31109_31161 = G__31168;
continue;
} else {
var temp__5735__auto___31169 = cljs.core.seq.call(null,seq__31106_31158);
if(temp__5735__auto___31169){
var seq__31106_31170__$1 = temp__5735__auto___31169;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31106_31170__$1)){
var c__4461__auto___31171 = cljs.core.chunk_first.call(null,seq__31106_31170__$1);
var G__31172 = cljs.core.chunk_rest.call(null,seq__31106_31170__$1);
var G__31173 = c__4461__auto___31171;
var G__31174 = cljs.core.count.call(null,c__4461__auto___31171);
var G__31175 = (0);
seq__31106_31158 = G__31172;
chunk__31107_31159 = G__31173;
count__31108_31160 = G__31174;
i__31109_31161 = G__31175;
continue;
} else {
var vec__31113_31176 = cljs.core.first.call(null,seq__31106_31170__$1);
var pno_31177 = cljs.core.nth.call(null,vec__31113_31176,(0),null);
var pmask_31178 = cljs.core.nth.call(null,vec__31113_31176,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_31177,"$ = ",pmask_31178,";");


var G__31179 = cljs.core.next.call(null,seq__31106_31170__$1);
var G__31180 = null;
var G__31181 = (0);
var G__31182 = (0);
seq__31106_31158 = G__31179;
chunk__31107_31159 = G__31180;
count__31108_31160 = G__31181;
i__31109_31161 = G__31182;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__31183){
var map__31184 = p__31183;
var map__31184__$1 = (((((!((map__31184 == null))))?(((((map__31184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31184):map__31184);
var target = cljs.core.get.call(null,map__31184__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__31184__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__31184__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__31184__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__31184__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__31186){
var map__31187 = p__31186;
var map__31187__$1 = (((((!((map__31187 == null))))?(((((map__31187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31187):map__31187);
var op = cljs.core.get.call(null,map__31187__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__31187__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__31187__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__31187__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__31187__$1,new cljs.core.Keyword(null,"args","args",1315556576));
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

var seq__31193 = cljs.core.seq.call(null,table);
var chunk__31194 = null;
var count__31195 = (0);
var i__31196 = (0);
while(true){
if((i__31196 < count__31195)){
var vec__31197 = cljs.core._nth.call(null,chunk__31194,i__31196);
var sym = cljs.core.nth.call(null,vec__31197,(0),null);
var value = cljs.core.nth.call(null,vec__31197,(1),null);
var ns_31203 = cljs.core.namespace.call(null,sym);
var name_31204 = cljs.core.name.call(null,sym);
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


var G__31205 = seq__31193;
var G__31206 = chunk__31194;
var G__31207 = count__31195;
var G__31208 = (i__31196 + (1));
seq__31193 = G__31205;
chunk__31194 = G__31206;
count__31195 = G__31207;
i__31196 = G__31208;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__31193);
if(temp__5735__auto__){
var seq__31193__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31193__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__31193__$1);
var G__31209 = cljs.core.chunk_rest.call(null,seq__31193__$1);
var G__31210 = c__4461__auto__;
var G__31211 = cljs.core.count.call(null,c__4461__auto__);
var G__31212 = (0);
seq__31193 = G__31209;
chunk__31194 = G__31210;
count__31195 = G__31211;
i__31196 = G__31212;
continue;
} else {
var vec__31200 = cljs.core.first.call(null,seq__31193__$1);
var sym = cljs.core.nth.call(null,vec__31200,(0),null);
var value = cljs.core.nth.call(null,vec__31200,(1),null);
var ns_31213 = cljs.core.namespace.call(null,sym);
var name_31214 = cljs.core.name.call(null,sym);
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


var G__31215 = cljs.core.next.call(null,seq__31193__$1);
var G__31216 = null;
var G__31217 = (0);
var G__31218 = (0);
seq__31193 = G__31215;
chunk__31194 = G__31216;
count__31195 = G__31217;
i__31196 = G__31218;
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
var G__31220 = arguments.length;
switch (G__31220) {
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
var k_31225 = cljs.core.first.call(null,ks);
var vec__31221_31226 = cljs.core.conj.call(null,prefix,k_31225);
var top_31227 = cljs.core.nth.call(null,vec__31221_31226,(0),null);
var prefix_SINGLEQUOTE__31228 = vec__31221_31226;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_31225)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__31228) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_31227)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_31227)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__31228)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_31227);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__31228)),";");
}
} else {
}

var m_31229 = cljs.core.get.call(null,externs,k_31225);
if(cljs.core.empty_QMARK_.call(null,m_31229)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__31228,m_31229,top_level,known_externs);
}

var G__31230 = cljs.core.next.call(null,ks);
ks = G__31230;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map
