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
var map__21901 = s;
var map__21901__$1 = (((((!((map__21901 == null))))?(((((map__21901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21901):map__21901);
var name = cljs.core.get.call(null,map__21901__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__21901__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__21904 = info;
var map__21905 = G__21904;
var map__21905__$1 = (((((!((map__21905 == null))))?(((((map__21905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21905):map__21905);
var shadow = cljs.core.get.call(null,map__21905__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__21904__$1 = G__21904;
while(true){
var d__$2 = d__$1;
var map__21907 = G__21904__$1;
var map__21907__$1 = (((((!((map__21907 == null))))?(((((map__21907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21907):map__21907);
var shadow__$1 = cljs.core.get.call(null,map__21907__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__21909 = (d__$2 + (1));
var G__21910 = shadow__$1;
d__$1 = G__21909;
G__21904__$1 = G__21910;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__21911){
var map__21912 = p__21911;
var map__21912__$1 = (((((!((map__21912 == null))))?(((((map__21912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21912):map__21912);
var name_var = map__21912__$1;
var name = cljs.core.get.call(null,map__21912__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__21912__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__21914 = info;
var map__21914__$1 = (((((!((map__21914 == null))))?(((((map__21914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21914):map__21914);
var ns = cljs.core.get.call(null,map__21914__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__21914__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__21917 = arguments.length;
switch (G__21917) {
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
var G__21919 = cp;
switch (G__21919) {
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
var seq__21921_21925 = cljs.core.seq.call(null,s);
var chunk__21922_21926 = null;
var count__21923_21927 = (0);
var i__21924_21928 = (0);
while(true){
if((i__21924_21928 < count__21923_21927)){
var c_21929 = cljs.core._nth.call(null,chunk__21922_21926,i__21924_21928);
sb.append(cljs.compiler.escape_char.call(null,c_21929));


var G__21930 = seq__21921_21925;
var G__21931 = chunk__21922_21926;
var G__21932 = count__21923_21927;
var G__21933 = (i__21924_21928 + (1));
seq__21921_21925 = G__21930;
chunk__21922_21926 = G__21931;
count__21923_21927 = G__21932;
i__21924_21928 = G__21933;
continue;
} else {
var temp__5735__auto___21934 = cljs.core.seq.call(null,seq__21921_21925);
if(temp__5735__auto___21934){
var seq__21921_21935__$1 = temp__5735__auto___21934;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21921_21935__$1)){
var c__4461__auto___21936 = cljs.core.chunk_first.call(null,seq__21921_21935__$1);
var G__21937 = cljs.core.chunk_rest.call(null,seq__21921_21935__$1);
var G__21938 = c__4461__auto___21936;
var G__21939 = cljs.core.count.call(null,c__4461__auto___21936);
var G__21940 = (0);
seq__21921_21925 = G__21937;
chunk__21922_21926 = G__21938;
count__21923_21927 = G__21939;
i__21924_21928 = G__21940;
continue;
} else {
var c_21941 = cljs.core.first.call(null,seq__21921_21935__$1);
sb.append(cljs.compiler.escape_char.call(null,c_21941));


var G__21942 = cljs.core.next.call(null,seq__21921_21935__$1);
var G__21943 = null;
var G__21944 = (0);
var G__21945 = (0);
seq__21921_21925 = G__21942;
chunk__21922_21926 = G__21943;
count__21923_21927 = G__21944;
i__21924_21928 = G__21945;
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
var map__21946_21951 = ast;
var map__21946_21952__$1 = (((((!((map__21946_21951 == null))))?(((((map__21946_21951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21946_21951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21946_21951):map__21946_21951);
var env_21953 = cljs.core.get.call(null,map__21946_21952__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_21953))){
var map__21948_21954 = env_21953;
var map__21948_21955__$1 = (((((!((map__21948_21954 == null))))?(((((map__21948_21954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21948_21954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21948_21954):map__21948_21954);
var line_21956 = cljs.core.get.call(null,map__21948_21955__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21957 = cljs.core.get.call(null,map__21948_21955__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__21948_21954,map__21948_21955__$1,line_21956,column_21957,map__21946_21951,map__21946_21952__$1,env_21953){
return (function (m){
var minfo = (function (){var G__21950 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__21950,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__21950;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_21956 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__21948_21954,map__21948_21955__$1,line_21956,column_21957,map__21946_21951,map__21946_21952__$1,env_21953){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_21957)?(column_21957 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__21948_21954,map__21948_21955__$1,line_21956,column_21957,map__21946_21951,map__21946_21952__$1,env_21953){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__21948_21954,map__21948_21955__$1,line_21956,column_21957,map__21946_21951,map__21946_21952__$1,env_21953))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__21948_21954,map__21948_21955__$1,line_21956,column_21957,map__21946_21951,map__21946_21952__$1,env_21953))
,cljs.core.sorted_map.call(null)));
});})(map__21948_21954,map__21948_21955__$1,line_21956,column_21957,map__21946_21951,map__21946_21952__$1,env_21953))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__21966 = arguments.length;
switch (G__21966) {
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
var len__4641__auto___21973 = arguments.length;
var i__4642__auto___21974 = (0);
while(true){
if((i__4642__auto___21974 < len__4641__auto___21973)){
args_arr__4662__auto__.push((arguments[i__4642__auto___21974]));

var G__21975 = (i__4642__auto___21974 + (1));
i__4642__auto___21974 = G__21975;
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
var s_21976 = (function (){var G__21967 = a;
if((!(typeof a === 'string'))){
return G__21967.toString();
} else {
return G__21967;
}
})();
var temp__5739__auto___21977 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___21977 == null)){
} else {
var sm_data_21978 = temp__5739__auto___21977;
cljs.core.swap_BANG_.call(null,sm_data_21978,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),((function (sm_data_21978,temp__5739__auto___21977,s_21976){
return (function (p1__21958_SHARP_){
return (p1__21958_SHARP_ + s_21976.length);
});})(sm_data_21978,temp__5739__auto___21977,s_21976))
);
}

cljs.core.print.call(null,s_21976);

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

var seq__21968 = cljs.core.seq.call(null,xs);
var chunk__21969 = null;
var count__21970 = (0);
var i__21971 = (0);
while(true){
if((i__21971 < count__21970)){
var x = cljs.core._nth.call(null,chunk__21969,i__21971);
cljs.compiler.emits.call(null,x);


var G__21979 = seq__21968;
var G__21980 = chunk__21969;
var G__21981 = count__21970;
var G__21982 = (i__21971 + (1));
seq__21968 = G__21979;
chunk__21969 = G__21980;
count__21970 = G__21981;
i__21971 = G__21982;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__21968);
if(temp__5735__auto__){
var seq__21968__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21968__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__21968__$1);
var G__21983 = cljs.core.chunk_rest.call(null,seq__21968__$1);
var G__21984 = c__4461__auto__;
var G__21985 = cljs.core.count.call(null,c__4461__auto__);
var G__21986 = (0);
seq__21968 = G__21983;
chunk__21969 = G__21984;
count__21970 = G__21985;
i__21971 = G__21986;
continue;
} else {
var x = cljs.core.first.call(null,seq__21968__$1);
cljs.compiler.emits.call(null,x);


var G__21987 = cljs.core.next.call(null,seq__21968__$1);
var G__21988 = null;
var G__21989 = (0);
var G__21990 = (0);
seq__21968 = G__21987;
chunk__21969 = G__21988;
count__21970 = G__21989;
i__21971 = G__21990;
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
cljs.compiler.emits.cljs$lang$applyTo = (function (seq21960){
var G__21961 = cljs.core.first.call(null,seq21960);
var seq21960__$1 = cljs.core.next.call(null,seq21960);
var G__21962 = cljs.core.first.call(null,seq21960__$1);
var seq21960__$2 = cljs.core.next.call(null,seq21960__$1);
var G__21963 = cljs.core.first.call(null,seq21960__$2);
var seq21960__$3 = cljs.core.next.call(null,seq21960__$2);
var G__21964 = cljs.core.first.call(null,seq21960__$3);
var seq21960__$4 = cljs.core.next.call(null,seq21960__$3);
var G__21965 = cljs.core.first.call(null,seq21960__$4);
var seq21960__$5 = cljs.core.next.call(null,seq21960__$4);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21961,G__21962,G__21963,G__21964,G__21965,seq21960__$5);
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__21991){
var map__21992 = p__21991;
var map__21992__$1 = (((((!((map__21992 == null))))?(((((map__21992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21992):map__21992);
var m = map__21992__$1;
var gen_line = cljs.core.get.call(null,map__21992__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__22001 = arguments.length;
switch (G__22001) {
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
var len__4641__auto___22007 = arguments.length;
var i__4642__auto___22008 = (0);
while(true){
if((i__4642__auto___22008 < len__4641__auto___22007)){
args_arr__4662__auto__.push((arguments[i__4642__auto___22008]));

var G__22009 = (i__4642__auto___22008 + (1));
i__4642__auto___22008 = G__22009;
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

var seq__22002_22010 = cljs.core.seq.call(null,xs);
var chunk__22003_22011 = null;
var count__22004_22012 = (0);
var i__22005_22013 = (0);
while(true){
if((i__22005_22013 < count__22004_22012)){
var x_22014 = cljs.core._nth.call(null,chunk__22003_22011,i__22005_22013);
cljs.compiler.emits.call(null,x_22014);


var G__22015 = seq__22002_22010;
var G__22016 = chunk__22003_22011;
var G__22017 = count__22004_22012;
var G__22018 = (i__22005_22013 + (1));
seq__22002_22010 = G__22015;
chunk__22003_22011 = G__22016;
count__22004_22012 = G__22017;
i__22005_22013 = G__22018;
continue;
} else {
var temp__5735__auto___22019 = cljs.core.seq.call(null,seq__22002_22010);
if(temp__5735__auto___22019){
var seq__22002_22020__$1 = temp__5735__auto___22019;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22002_22020__$1)){
var c__4461__auto___22021 = cljs.core.chunk_first.call(null,seq__22002_22020__$1);
var G__22022 = cljs.core.chunk_rest.call(null,seq__22002_22020__$1);
var G__22023 = c__4461__auto___22021;
var G__22024 = cljs.core.count.call(null,c__4461__auto___22021);
var G__22025 = (0);
seq__22002_22010 = G__22022;
chunk__22003_22011 = G__22023;
count__22004_22012 = G__22024;
i__22005_22013 = G__22025;
continue;
} else {
var x_22026 = cljs.core.first.call(null,seq__22002_22020__$1);
cljs.compiler.emits.call(null,x_22026);


var G__22027 = cljs.core.next.call(null,seq__22002_22020__$1);
var G__22028 = null;
var G__22029 = (0);
var G__22030 = (0);
seq__22002_22010 = G__22027;
chunk__22003_22011 = G__22028;
count__22004_22012 = G__22029;
i__22005_22013 = G__22030;
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
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq21995){
var G__21996 = cljs.core.first.call(null,seq21995);
var seq21995__$1 = cljs.core.next.call(null,seq21995);
var G__21997 = cljs.core.first.call(null,seq21995__$1);
var seq21995__$2 = cljs.core.next.call(null,seq21995__$1);
var G__21998 = cljs.core.first.call(null,seq21995__$2);
var seq21995__$3 = cljs.core.next.call(null,seq21995__$2);
var G__21999 = cljs.core.first.call(null,seq21995__$3);
var seq21995__$4 = cljs.core.next.call(null,seq21995__$3);
var G__22000 = cljs.core.first.call(null,seq21995__$4);
var seq21995__$5 = cljs.core.next.call(null,seq21995__$4);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21996,G__21997,G__21998,G__21999,G__22000,seq21995__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22031_22035 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22032_22036 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22033_22037 = true;
var _STAR_print_fn_STAR__temp_val__22034_22038 = ((function (_STAR_print_newline_STAR__orig_val__22031_22035,_STAR_print_fn_STAR__orig_val__22032_22036,_STAR_print_newline_STAR__temp_val__22033_22037,sb__4572__auto__){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__22031_22035,_STAR_print_fn_STAR__orig_val__22032_22036,_STAR_print_newline_STAR__temp_val__22033_22037,sb__4572__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22033_22037;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22034_22038;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22032_22036;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22031_22035;
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
var vec__22039 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__22039,(0),null);
var name = cljs.core.nth.call(null,vec__22039,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,((function (vec__22039,ns,name){
return (function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
});})(vec__22039,ns,name))
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
var vec__22042 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__22042,(0),null);
var flags = cljs.core.nth.call(null,vec__22042,(1),null);
var pattern = cljs.core.nth.call(null,vec__22042,(2),null);
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
return (function (p1__22045_SHARP_){
return ((function (items){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__22045_SHARP_);
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
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__22047){
var map__22048 = p__22047;
var map__22048__$1 = (((((!((map__22048 == null))))?(((((map__22048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22048):map__22048);
var ast = map__22048__$1;
var info = cljs.core.get.call(null,map__22048__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__22048__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__22048__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__22050 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__22050__$1 = (((((!((map__22050 == null))))?(((((map__22050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22050):map__22050);
var cenv = map__22050__$1;
var options = cljs.core.get.call(null,map__22050__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__22052 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__4036__auto__;
}
})())){
return clojure.set.difference.call(null,G__22052,cljs.analyzer.es5_allowed);
} else {
return G__22052;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4047__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__22053 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__22053,reserved);
} else {
return G__22053;
}
})();
var env__20721__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20721__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__22054_22055 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__22054_22056__$1 = (((G__22054_22055 instanceof cljs.core.Keyword))?G__22054_22055.fqn:null);
switch (G__22054_22056__$1) {
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20721__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__22058){
var map__22059 = p__22058;
var map__22059__$1 = (((((!((map__22059 == null))))?(((((map__22059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22059):map__22059);
var arg = map__22059__$1;
var env = cljs.core.get.call(null,map__22059__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__22059__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__22059__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__22059__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__22061 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__22061__$1 = (((((!((map__22061 == null))))?(((((map__22061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22061):map__22061);
var name = cljs.core.get.call(null,map__22061__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__20721__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20721__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20721__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__22063){
var map__22064 = p__22063;
var map__22064__$1 = (((((!((map__22064 == null))))?(((((map__22064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22064):map__22064);
var expr = cljs.core.get.call(null,map__22064__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__22064__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__22064__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__20721__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20721__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20721__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,((function (keys__$1){
return (function (p1__22066_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__22066_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__22067){
var map__22068 = p__22067;
var map__22068__$1 = (((((!((map__22068 == null))))?(((((map__22068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22068):map__22068);
var env = cljs.core.get.call(null,map__22068__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__22068__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__22068__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__20721__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20721__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20721__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__22070){
var map__22071 = p__22070;
var map__22071__$1 = (((((!((map__22071 == null))))?(((((map__22071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22071):map__22071);
var items = cljs.core.get.call(null,map__22071__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__22071__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__20721__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20721__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20721__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,((function (items__$1){
return (function (p1__22073_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__22073_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__22074){
var map__22075 = p__22074;
var map__22075__$1 = (((((!((map__22075 == null))))?(((((map__22075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22075):map__22075);
var items = cljs.core.get.call(null,map__22075__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__22075__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__20721__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20721__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20721__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5735__auto___22093 = cljs.core.seq.call(null,items);
if(temp__5735__auto___22093){
var items_22094__$1 = temp__5735__auto___22093;
var vec__22077_22095 = items_22094__$1;
var seq__22078_22096 = cljs.core.seq.call(null,vec__22077_22095);
var first__22079_22097 = cljs.core.first.call(null,seq__22078_22096);
var seq__22078_22098__$1 = cljs.core.next.call(null,seq__22078_22096);
var vec__22080_22099 = first__22079_22097;
var k_22100 = cljs.core.nth.call(null,vec__22080_22099,(0),null);
var v_22101 = cljs.core.nth.call(null,vec__22080_22099,(1),null);
var r_22102 = seq__22078_22098__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_22100),"\": ",emit_js_object_val.call(null,v_22101));

var seq__22083_22103 = cljs.core.seq.call(null,r_22102);
var chunk__22084_22104 = null;
var count__22085_22105 = (0);
var i__22086_22106 = (0);
while(true){
if((i__22086_22106 < count__22085_22105)){
var vec__22087_22107 = cljs.core._nth.call(null,chunk__22084_22104,i__22086_22106);
var k_22108__$1 = cljs.core.nth.call(null,vec__22087_22107,(0),null);
var v_22109__$1 = cljs.core.nth.call(null,vec__22087_22107,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_22108__$1),"\": ",emit_js_object_val.call(null,v_22109__$1));


var G__22110 = seq__22083_22103;
var G__22111 = chunk__22084_22104;
var G__22112 = count__22085_22105;
var G__22113 = (i__22086_22106 + (1));
seq__22083_22103 = G__22110;
chunk__22084_22104 = G__22111;
count__22085_22105 = G__22112;
i__22086_22106 = G__22113;
continue;
} else {
var temp__5735__auto___22114__$1 = cljs.core.seq.call(null,seq__22083_22103);
if(temp__5735__auto___22114__$1){
var seq__22083_22115__$1 = temp__5735__auto___22114__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22083_22115__$1)){
var c__4461__auto___22116 = cljs.core.chunk_first.call(null,seq__22083_22115__$1);
var G__22117 = cljs.core.chunk_rest.call(null,seq__22083_22115__$1);
var G__22118 = c__4461__auto___22116;
var G__22119 = cljs.core.count.call(null,c__4461__auto___22116);
var G__22120 = (0);
seq__22083_22103 = G__22117;
chunk__22084_22104 = G__22118;
count__22085_22105 = G__22119;
i__22086_22106 = G__22120;
continue;
} else {
var vec__22090_22121 = cljs.core.first.call(null,seq__22083_22115__$1);
var k_22122__$1 = cljs.core.nth.call(null,vec__22090_22121,(0),null);
var v_22123__$1 = cljs.core.nth.call(null,vec__22090_22121,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_22122__$1),"\": ",emit_js_object_val.call(null,v_22123__$1));


var G__22124 = cljs.core.next.call(null,seq__22083_22115__$1);
var G__22125 = null;
var G__22126 = (0);
var G__22127 = (0);
seq__22083_22103 = G__22124;
chunk__22084_22104 = G__22125;
count__22085_22105 = G__22126;
i__22086_22106 = G__22127;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__22128){
var map__22129 = p__22128;
var map__22129__$1 = (((((!((map__22129 == null))))?(((((map__22129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22129):map__22129);
var keys = cljs.core.get.call(null,map__22129__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__22129__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__22129__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__20721__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20721__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20721__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__22131){
var map__22132 = p__22131;
var map__22132__$1 = (((((!((map__22132 == null))))?(((((map__22132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22132):map__22132);
var items = cljs.core.get.call(null,map__22132__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__22132__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__20721__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20721__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20721__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__22134){
var map__22135 = p__22134;
var map__22135__$1 = (((((!((map__22135 == null))))?(((((map__22135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22135):map__22135);
var expr = cljs.core.get.call(null,map__22135__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__22137){
var map__22138 = p__22137;
var map__22138__$1 = (((((!((map__22138 == null))))?(((((map__22138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22138):map__22138);
var form = cljs.core.get.call(null,map__22138__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__22138__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__20721__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20721__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20721__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__22140 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__22140__$1 = (((((!((map__22140 == null))))?(((((map__22140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22140):map__22140);
var op = cljs.core.get.call(null,map__22140__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__22140__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__22140__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__22142 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__22142__$1 = (((((!((map__22142 == null))))?(((((map__22142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22142):map__22142);
var op = cljs.core.get.call(null,map__22142__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__22142__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__22142__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__22144){
var map__22145 = p__22144;
var map__22145__$1 = (((((!((map__22145 == null))))?(((((map__22145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22145):map__22145);
var test__$1 = cljs.core.get.call(null,map__22145__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__22145__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__22145__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__22145__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__22145__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__4047__auto__ = unchecked;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__22147){
var map__22148 = p__22147;
var map__22148__$1 = (((((!((map__22148 == null))))?(((((map__22148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22148):map__22148);
var v = cljs.core.get.call(null,map__22148__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__22148__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__22148__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__22148__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__22150_22170 = cljs.core.seq.call(null,nodes);
var chunk__22151_22171 = null;
var count__22152_22172 = (0);
var i__22153_22173 = (0);
while(true){
if((i__22153_22173 < count__22152_22172)){
var map__22154_22174 = cljs.core._nth.call(null,chunk__22151_22171,i__22153_22173);
var map__22154_22175__$1 = (((((!((map__22154_22174 == null))))?(((((map__22154_22174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22154_22174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22154_22174):map__22154_22174);
var ts_22176 = cljs.core.get.call(null,map__22154_22175__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__22155_22177 = cljs.core.get.call(null,map__22154_22175__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__22155_22178__$1 = (((((!((map__22155_22177 == null))))?(((((map__22155_22177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22155_22177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22155_22177):map__22155_22177);
var then_22179 = cljs.core.get.call(null,map__22155_22178__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__22158_22180 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_22176));
var chunk__22159_22181 = null;
var count__22160_22182 = (0);
var i__22161_22183 = (0);
while(true){
if((i__22161_22183 < count__22160_22182)){
var test_22184__$1 = cljs.core._nth.call(null,chunk__22159_22181,i__22161_22183);
cljs.compiler.emitln.call(null,"case ",test_22184__$1,":");


var G__22185 = seq__22158_22180;
var G__22186 = chunk__22159_22181;
var G__22187 = count__22160_22182;
var G__22188 = (i__22161_22183 + (1));
seq__22158_22180 = G__22185;
chunk__22159_22181 = G__22186;
count__22160_22182 = G__22187;
i__22161_22183 = G__22188;
continue;
} else {
var temp__5735__auto___22189 = cljs.core.seq.call(null,seq__22158_22180);
if(temp__5735__auto___22189){
var seq__22158_22190__$1 = temp__5735__auto___22189;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22158_22190__$1)){
var c__4461__auto___22191 = cljs.core.chunk_first.call(null,seq__22158_22190__$1);
var G__22192 = cljs.core.chunk_rest.call(null,seq__22158_22190__$1);
var G__22193 = c__4461__auto___22191;
var G__22194 = cljs.core.count.call(null,c__4461__auto___22191);
var G__22195 = (0);
seq__22158_22180 = G__22192;
chunk__22159_22181 = G__22193;
count__22160_22182 = G__22194;
i__22161_22183 = G__22195;
continue;
} else {
var test_22196__$1 = cljs.core.first.call(null,seq__22158_22190__$1);
cljs.compiler.emitln.call(null,"case ",test_22196__$1,":");


var G__22197 = cljs.core.next.call(null,seq__22158_22190__$1);
var G__22198 = null;
var G__22199 = (0);
var G__22200 = (0);
seq__22158_22180 = G__22197;
chunk__22159_22181 = G__22198;
count__22160_22182 = G__22199;
i__22161_22183 = G__22200;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_22179);
} else {
cljs.compiler.emitln.call(null,then_22179);
}

cljs.compiler.emitln.call(null,"break;");


var G__22201 = seq__22150_22170;
var G__22202 = chunk__22151_22171;
var G__22203 = count__22152_22172;
var G__22204 = (i__22153_22173 + (1));
seq__22150_22170 = G__22201;
chunk__22151_22171 = G__22202;
count__22152_22172 = G__22203;
i__22153_22173 = G__22204;
continue;
} else {
var temp__5735__auto___22205 = cljs.core.seq.call(null,seq__22150_22170);
if(temp__5735__auto___22205){
var seq__22150_22206__$1 = temp__5735__auto___22205;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22150_22206__$1)){
var c__4461__auto___22207 = cljs.core.chunk_first.call(null,seq__22150_22206__$1);
var G__22208 = cljs.core.chunk_rest.call(null,seq__22150_22206__$1);
var G__22209 = c__4461__auto___22207;
var G__22210 = cljs.core.count.call(null,c__4461__auto___22207);
var G__22211 = (0);
seq__22150_22170 = G__22208;
chunk__22151_22171 = G__22209;
count__22152_22172 = G__22210;
i__22153_22173 = G__22211;
continue;
} else {
var map__22162_22212 = cljs.core.first.call(null,seq__22150_22206__$1);
var map__22162_22213__$1 = (((((!((map__22162_22212 == null))))?(((((map__22162_22212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22162_22212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22162_22212):map__22162_22212);
var ts_22214 = cljs.core.get.call(null,map__22162_22213__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__22163_22215 = cljs.core.get.call(null,map__22162_22213__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__22163_22216__$1 = (((((!((map__22163_22215 == null))))?(((((map__22163_22215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22163_22215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22163_22215):map__22163_22215);
var then_22217 = cljs.core.get.call(null,map__22163_22216__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__22166_22218 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_22214));
var chunk__22167_22219 = null;
var count__22168_22220 = (0);
var i__22169_22221 = (0);
while(true){
if((i__22169_22221 < count__22168_22220)){
var test_22222__$1 = cljs.core._nth.call(null,chunk__22167_22219,i__22169_22221);
cljs.compiler.emitln.call(null,"case ",test_22222__$1,":");


var G__22223 = seq__22166_22218;
var G__22224 = chunk__22167_22219;
var G__22225 = count__22168_22220;
var G__22226 = (i__22169_22221 + (1));
seq__22166_22218 = G__22223;
chunk__22167_22219 = G__22224;
count__22168_22220 = G__22225;
i__22169_22221 = G__22226;
continue;
} else {
var temp__5735__auto___22227__$1 = cljs.core.seq.call(null,seq__22166_22218);
if(temp__5735__auto___22227__$1){
var seq__22166_22228__$1 = temp__5735__auto___22227__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22166_22228__$1)){
var c__4461__auto___22229 = cljs.core.chunk_first.call(null,seq__22166_22228__$1);
var G__22230 = cljs.core.chunk_rest.call(null,seq__22166_22228__$1);
var G__22231 = c__4461__auto___22229;
var G__22232 = cljs.core.count.call(null,c__4461__auto___22229);
var G__22233 = (0);
seq__22166_22218 = G__22230;
chunk__22167_22219 = G__22231;
count__22168_22220 = G__22232;
i__22169_22221 = G__22233;
continue;
} else {
var test_22234__$1 = cljs.core.first.call(null,seq__22166_22228__$1);
cljs.compiler.emitln.call(null,"case ",test_22234__$1,":");


var G__22235 = cljs.core.next.call(null,seq__22166_22228__$1);
var G__22236 = null;
var G__22237 = (0);
var G__22238 = (0);
seq__22166_22218 = G__22235;
chunk__22167_22219 = G__22236;
count__22168_22220 = G__22237;
i__22169_22221 = G__22238;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_22217);
} else {
cljs.compiler.emitln.call(null,then_22217);
}

cljs.compiler.emitln.call(null,"break;");


var G__22239 = cljs.core.next.call(null,seq__22150_22206__$1);
var G__22240 = null;
var G__22241 = (0);
var G__22242 = (0);
seq__22150_22170 = G__22239;
chunk__22151_22171 = G__22240;
count__22152_22172 = G__22241;
i__22153_22173 = G__22242;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__22243){
var map__22244 = p__22243;
var map__22244__$1 = (((((!((map__22244 == null))))?(((((map__22244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22244):map__22244);
var throw$ = cljs.core.get.call(null,map__22244__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__22244__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__22247 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__22247,(0),null);
var rstr = cljs.core.nth.call(null,vec__22247,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__22247,fstr,rstr,ret_t,axstr){
return (function (p1__22246_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__22246_SHARP_);
});})(idx,vec__22247,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__22250 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22250),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__22250;
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
return (function (p1__22251_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__22251_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__22252 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__22253 = cljs.core.seq.call(null,vec__22252);
var first__22254 = cljs.core.first.call(null,seq__22253);
var seq__22253__$1 = cljs.core.next.call(null,seq__22253);
var p = first__22254;
var first__22254__$1 = cljs.core.first.call(null,seq__22253__$1);
var seq__22253__$2 = cljs.core.next.call(null,seq__22253__$1);
var ts = first__22254__$1;
var first__22254__$2 = cljs.core.first.call(null,seq__22253__$2);
var seq__22253__$3 = cljs.core.next.call(null,seq__22253__$2);
var n = first__22254__$2;
var xs = seq__22253__$3;
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
var vec__22255 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__22256 = cljs.core.seq.call(null,vec__22255);
var first__22257 = cljs.core.first.call(null,seq__22256);
var seq__22256__$1 = cljs.core.next.call(null,seq__22256);
var p = first__22257;
var first__22257__$1 = cljs.core.first.call(null,seq__22256__$1);
var seq__22256__$2 = cljs.core.next.call(null,seq__22256__$1);
var ts = first__22257__$1;
var xs = seq__22256__$2;
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
var G__22260 = arguments.length;
switch (G__22260) {
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
var vec__22268 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__22258_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__22258_SHARP_);
} else {
return p1__22258_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__22269 = cljs.core.seq.call(null,vec__22268);
var first__22270 = cljs.core.first.call(null,seq__22269);
var seq__22269__$1 = cljs.core.next.call(null,seq__22269);
var x = first__22270;
var ys = seq__22269__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__22271 = cljs.core.seq.call(null,ys);
var chunk__22272 = null;
var count__22273 = (0);
var i__22274 = (0);
while(true){
if((i__22274 < count__22273)){
var next_line = cljs.core._nth.call(null,chunk__22272,i__22274);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__22280 = seq__22271;
var G__22281 = chunk__22272;
var G__22282 = count__22273;
var G__22283 = (i__22274 + (1));
seq__22271 = G__22280;
chunk__22272 = G__22281;
count__22273 = G__22282;
i__22274 = G__22283;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__22271);
if(temp__5735__auto__){
var seq__22271__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22271__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__22271__$1);
var G__22284 = cljs.core.chunk_rest.call(null,seq__22271__$1);
var G__22285 = c__4461__auto__;
var G__22286 = cljs.core.count.call(null,c__4461__auto__);
var G__22287 = (0);
seq__22271 = G__22284;
chunk__22272 = G__22285;
count__22273 = G__22286;
i__22274 = G__22287;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__22271__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__22288 = cljs.core.next.call(null,seq__22271__$1);
var G__22289 = null;
var G__22290 = (0);
var G__22291 = (0);
seq__22271 = G__22288;
chunk__22272 = G__22289;
count__22273 = G__22290;
i__22274 = G__22291;
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

var seq__22275_22292 = cljs.core.seq.call(null,docs__$2);
var chunk__22276_22293 = null;
var count__22277_22294 = (0);
var i__22278_22295 = (0);
while(true){
if((i__22278_22295 < count__22277_22294)){
var e_22296 = cljs.core._nth.call(null,chunk__22276_22293,i__22278_22295);
if(cljs.core.truth_(e_22296)){
print_comment_lines.call(null,e_22296);
} else {
}


var G__22297 = seq__22275_22292;
var G__22298 = chunk__22276_22293;
var G__22299 = count__22277_22294;
var G__22300 = (i__22278_22295 + (1));
seq__22275_22292 = G__22297;
chunk__22276_22293 = G__22298;
count__22277_22294 = G__22299;
i__22278_22295 = G__22300;
continue;
} else {
var temp__5735__auto___22301 = cljs.core.seq.call(null,seq__22275_22292);
if(temp__5735__auto___22301){
var seq__22275_22302__$1 = temp__5735__auto___22301;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22275_22302__$1)){
var c__4461__auto___22303 = cljs.core.chunk_first.call(null,seq__22275_22302__$1);
var G__22304 = cljs.core.chunk_rest.call(null,seq__22275_22302__$1);
var G__22305 = c__4461__auto___22303;
var G__22306 = cljs.core.count.call(null,c__4461__auto___22303);
var G__22307 = (0);
seq__22275_22292 = G__22304;
chunk__22276_22293 = G__22305;
count__22277_22294 = G__22306;
i__22278_22295 = G__22307;
continue;
} else {
var e_22308 = cljs.core.first.call(null,seq__22275_22302__$1);
if(cljs.core.truth_(e_22308)){
print_comment_lines.call(null,e_22308);
} else {
}


var G__22309 = cljs.core.next.call(null,seq__22275_22302__$1);
var G__22310 = null;
var G__22311 = (0);
var G__22312 = (0);
seq__22275_22292 = G__22309;
chunk__22276_22293 = G__22310;
count__22277_22294 = G__22311;
i__22278_22295 = G__22312;
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
return (function (p1__22314_SHARP_){
return goog.string.startsWith(p1__22314_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__22315){
var map__22316 = p__22315;
var map__22316__$1 = (((((!((map__22316 == null))))?(((((map__22316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22316):map__22316);
var doc = cljs.core.get.call(null,map__22316__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__22316__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test__$1 = cljs.core.get.call(null,map__22316__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.call(null,map__22316__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__22316__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__22316__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__22316__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__22316__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__22316__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
return test__$1;
} else {
return and__4036__auto__;
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__22318){
var map__22319 = p__22318;
var map__22319__$1 = (((((!((map__22319 == null))))?(((((map__22319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22319):map__22319);
var name = cljs.core.get.call(null,map__22319__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__22319__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__22319__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__22321_22339 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__22322_22340 = null;
var count__22323_22341 = (0);
var i__22324_22342 = (0);
while(true){
if((i__22324_22342 < count__22323_22341)){
var vec__22325_22343 = cljs.core._nth.call(null,chunk__22322_22340,i__22324_22342);
var i_22344 = cljs.core.nth.call(null,vec__22325_22343,(0),null);
var param_22345 = cljs.core.nth.call(null,vec__22325_22343,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_22345);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__22346 = seq__22321_22339;
var G__22347 = chunk__22322_22340;
var G__22348 = count__22323_22341;
var G__22349 = (i__22324_22342 + (1));
seq__22321_22339 = G__22346;
chunk__22322_22340 = G__22347;
count__22323_22341 = G__22348;
i__22324_22342 = G__22349;
continue;
} else {
var temp__5735__auto___22350 = cljs.core.seq.call(null,seq__22321_22339);
if(temp__5735__auto___22350){
var seq__22321_22351__$1 = temp__5735__auto___22350;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22321_22351__$1)){
var c__4461__auto___22352 = cljs.core.chunk_first.call(null,seq__22321_22351__$1);
var G__22353 = cljs.core.chunk_rest.call(null,seq__22321_22351__$1);
var G__22354 = c__4461__auto___22352;
var G__22355 = cljs.core.count.call(null,c__4461__auto___22352);
var G__22356 = (0);
seq__22321_22339 = G__22353;
chunk__22322_22340 = G__22354;
count__22323_22341 = G__22355;
i__22324_22342 = G__22356;
continue;
} else {
var vec__22328_22357 = cljs.core.first.call(null,seq__22321_22351__$1);
var i_22358 = cljs.core.nth.call(null,vec__22328_22357,(0),null);
var param_22359 = cljs.core.nth.call(null,vec__22328_22357,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_22359);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__22360 = cljs.core.next.call(null,seq__22321_22351__$1);
var G__22361 = null;
var G__22362 = (0);
var G__22363 = (0);
seq__22321_22339 = G__22360;
chunk__22322_22340 = G__22361;
count__22323_22341 = G__22362;
i__22324_22342 = G__22363;
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

var seq__22331_22364 = cljs.core.seq.call(null,params);
var chunk__22332_22365 = null;
var count__22333_22366 = (0);
var i__22334_22367 = (0);
while(true){
if((i__22334_22367 < count__22333_22366)){
var param_22368 = cljs.core._nth.call(null,chunk__22332_22365,i__22334_22367);
cljs.compiler.emit.call(null,param_22368);

if(cljs.core._EQ_.call(null,param_22368,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__22369 = seq__22331_22364;
var G__22370 = chunk__22332_22365;
var G__22371 = count__22333_22366;
var G__22372 = (i__22334_22367 + (1));
seq__22331_22364 = G__22369;
chunk__22332_22365 = G__22370;
count__22333_22366 = G__22371;
i__22334_22367 = G__22372;
continue;
} else {
var temp__5735__auto___22373 = cljs.core.seq.call(null,seq__22331_22364);
if(temp__5735__auto___22373){
var seq__22331_22374__$1 = temp__5735__auto___22373;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22331_22374__$1)){
var c__4461__auto___22375 = cljs.core.chunk_first.call(null,seq__22331_22374__$1);
var G__22376 = cljs.core.chunk_rest.call(null,seq__22331_22374__$1);
var G__22377 = c__4461__auto___22375;
var G__22378 = cljs.core.count.call(null,c__4461__auto___22375);
var G__22379 = (0);
seq__22331_22364 = G__22376;
chunk__22332_22365 = G__22377;
count__22333_22366 = G__22378;
i__22334_22367 = G__22379;
continue;
} else {
var param_22380 = cljs.core.first.call(null,seq__22331_22374__$1);
cljs.compiler.emit.call(null,param_22380);

if(cljs.core._EQ_.call(null,param_22380,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__22381 = cljs.core.next.call(null,seq__22331_22374__$1);
var G__22382 = null;
var G__22383 = (0);
var G__22384 = (0);
seq__22331_22364 = G__22381;
chunk__22332_22365 = G__22382;
count__22333_22366 = G__22383;
i__22334_22367 = G__22384;
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

var seq__22335_22385 = cljs.core.seq.call(null,params);
var chunk__22336_22386 = null;
var count__22337_22387 = (0);
var i__22338_22388 = (0);
while(true){
if((i__22338_22388 < count__22337_22387)){
var param_22389 = cljs.core._nth.call(null,chunk__22336_22386,i__22338_22388);
cljs.compiler.emit.call(null,param_22389);

if(cljs.core._EQ_.call(null,param_22389,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__22390 = seq__22335_22385;
var G__22391 = chunk__22336_22386;
var G__22392 = count__22337_22387;
var G__22393 = (i__22338_22388 + (1));
seq__22335_22385 = G__22390;
chunk__22336_22386 = G__22391;
count__22337_22387 = G__22392;
i__22338_22388 = G__22393;
continue;
} else {
var temp__5735__auto___22394 = cljs.core.seq.call(null,seq__22335_22385);
if(temp__5735__auto___22394){
var seq__22335_22395__$1 = temp__5735__auto___22394;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22335_22395__$1)){
var c__4461__auto___22396 = cljs.core.chunk_first.call(null,seq__22335_22395__$1);
var G__22397 = cljs.core.chunk_rest.call(null,seq__22335_22395__$1);
var G__22398 = c__4461__auto___22396;
var G__22399 = cljs.core.count.call(null,c__4461__auto___22396);
var G__22400 = (0);
seq__22335_22385 = G__22397;
chunk__22336_22386 = G__22398;
count__22337_22387 = G__22399;
i__22338_22388 = G__22400;
continue;
} else {
var param_22401 = cljs.core.first.call(null,seq__22335_22395__$1);
cljs.compiler.emit.call(null,param_22401);

if(cljs.core._EQ_.call(null,param_22401,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__22402 = cljs.core.next.call(null,seq__22335_22395__$1);
var G__22403 = null;
var G__22404 = (0);
var G__22405 = (0);
seq__22335_22385 = G__22402;
chunk__22336_22386 = G__22403;
count__22337_22387 = G__22404;
i__22338_22388 = G__22405;
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
var seq__22406 = cljs.core.seq.call(null,params);
var chunk__22407 = null;
var count__22408 = (0);
var i__22409 = (0);
while(true){
if((i__22409 < count__22408)){
var param = cljs.core._nth.call(null,chunk__22407,i__22409);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__22410 = seq__22406;
var G__22411 = chunk__22407;
var G__22412 = count__22408;
var G__22413 = (i__22409 + (1));
seq__22406 = G__22410;
chunk__22407 = G__22411;
count__22408 = G__22412;
i__22409 = G__22413;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__22406);
if(temp__5735__auto__){
var seq__22406__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22406__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__22406__$1);
var G__22414 = cljs.core.chunk_rest.call(null,seq__22406__$1);
var G__22415 = c__4461__auto__;
var G__22416 = cljs.core.count.call(null,c__4461__auto__);
var G__22417 = (0);
seq__22406 = G__22414;
chunk__22407 = G__22415;
count__22408 = G__22416;
i__22409 = G__22417;
continue;
} else {
var param = cljs.core.first.call(null,seq__22406__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__22418 = cljs.core.next.call(null,seq__22406__$1);
var G__22419 = null;
var G__22420 = (0);
var G__22421 = (0);
seq__22406 = G__22418;
chunk__22407 = G__22419;
count__22408 = G__22420;
i__22409 = G__22421;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__22422){
var map__22423 = p__22422;
var map__22423__$1 = (((((!((map__22423 == null))))?(((((map__22423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22423):map__22423);
var expr = cljs.core.get.call(null,map__22423__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__22423__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__22423__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__22423__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__22423__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__22423__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__20721__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20721__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20721__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__22425){
var map__22426 = p__22425;
var map__22426__$1 = (((((!((map__22426 == null))))?(((((map__22426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22426):map__22426);
var f = map__22426__$1;
var expr = cljs.core.get.call(null,map__22426__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__22426__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__22426__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__22426__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__22426__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__22426__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__22426__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__22426__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__20721__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20721__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_22436__$1 = (function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_22437 = cljs.compiler.munge.call(null,name_22436__$1);
var delegate_name_22438 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_22437),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_22438," = function (");

var seq__22428_22439 = cljs.core.seq.call(null,params);
var chunk__22429_22440 = null;
var count__22430_22441 = (0);
var i__22431_22442 = (0);
while(true){
if((i__22431_22442 < count__22430_22441)){
var param_22443 = cljs.core._nth.call(null,chunk__22429_22440,i__22431_22442);
cljs.compiler.emit.call(null,param_22443);

if(cljs.core._EQ_.call(null,param_22443,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__22444 = seq__22428_22439;
var G__22445 = chunk__22429_22440;
var G__22446 = count__22430_22441;
var G__22447 = (i__22431_22442 + (1));
seq__22428_22439 = G__22444;
chunk__22429_22440 = G__22445;
count__22430_22441 = G__22446;
i__22431_22442 = G__22447;
continue;
} else {
var temp__5735__auto___22448 = cljs.core.seq.call(null,seq__22428_22439);
if(temp__5735__auto___22448){
var seq__22428_22449__$1 = temp__5735__auto___22448;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22428_22449__$1)){
var c__4461__auto___22450 = cljs.core.chunk_first.call(null,seq__22428_22449__$1);
var G__22451 = cljs.core.chunk_rest.call(null,seq__22428_22449__$1);
var G__22452 = c__4461__auto___22450;
var G__22453 = cljs.core.count.call(null,c__4461__auto___22450);
var G__22454 = (0);
seq__22428_22439 = G__22451;
chunk__22429_22440 = G__22452;
count__22430_22441 = G__22453;
i__22431_22442 = G__22454;
continue;
} else {
var param_22455 = cljs.core.first.call(null,seq__22428_22449__$1);
cljs.compiler.emit.call(null,param_22455);

if(cljs.core._EQ_.call(null,param_22455,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__22456 = cljs.core.next.call(null,seq__22428_22449__$1);
var G__22457 = null;
var G__22458 = (0);
var G__22459 = (0);
seq__22428_22439 = G__22456;
chunk__22429_22440 = G__22457;
count__22430_22441 = G__22458;
i__22431_22442 = G__22459;
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

cljs.compiler.emitln.call(null,"var ",mname_22437," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_22460 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_22460,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_22438,".call(this,");

var seq__22432_22461 = cljs.core.seq.call(null,params);
var chunk__22433_22462 = null;
var count__22434_22463 = (0);
var i__22435_22464 = (0);
while(true){
if((i__22435_22464 < count__22434_22463)){
var param_22465 = cljs.core._nth.call(null,chunk__22433_22462,i__22435_22464);
cljs.compiler.emit.call(null,param_22465);

if(cljs.core._EQ_.call(null,param_22465,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__22466 = seq__22432_22461;
var G__22467 = chunk__22433_22462;
var G__22468 = count__22434_22463;
var G__22469 = (i__22435_22464 + (1));
seq__22432_22461 = G__22466;
chunk__22433_22462 = G__22467;
count__22434_22463 = G__22468;
i__22435_22464 = G__22469;
continue;
} else {
var temp__5735__auto___22470 = cljs.core.seq.call(null,seq__22432_22461);
if(temp__5735__auto___22470){
var seq__22432_22471__$1 = temp__5735__auto___22470;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22432_22471__$1)){
var c__4461__auto___22472 = cljs.core.chunk_first.call(null,seq__22432_22471__$1);
var G__22473 = cljs.core.chunk_rest.call(null,seq__22432_22471__$1);
var G__22474 = c__4461__auto___22472;
var G__22475 = cljs.core.count.call(null,c__4461__auto___22472);
var G__22476 = (0);
seq__22432_22461 = G__22473;
chunk__22433_22462 = G__22474;
count__22434_22463 = G__22475;
i__22435_22464 = G__22476;
continue;
} else {
var param_22477 = cljs.core.first.call(null,seq__22432_22471__$1);
cljs.compiler.emit.call(null,param_22477);

if(cljs.core._EQ_.call(null,param_22477,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__22478 = cljs.core.next.call(null,seq__22432_22471__$1);
var G__22479 = null;
var G__22480 = (0);
var G__22481 = (0);
seq__22432_22461 = G__22478;
chunk__22433_22462 = G__22479;
count__22434_22463 = G__22480;
i__22435_22464 = G__22481;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_22437,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_22437,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_22436__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_22437,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_22438,";");

cljs.compiler.emitln.call(null,"return ",mname_22437,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20721__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__22485){
var map__22486 = p__22485;
var map__22486__$1 = (((((!((map__22486 == null))))?(((((map__22486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22486):map__22486);
var variadic = cljs.core.get.call(null,map__22486__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__22486__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__22486__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__22486__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__22486__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__22486__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__22486__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__22486,map__22486__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__22482_SHARP_){
var and__4036__auto__ = p1__22482_SHARP_;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__22482_SHARP_));
} else {
return and__4036__auto__;
}
});})(map__22486,map__22486__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
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
var name_22521__$1 = (function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_22522 = cljs.compiler.munge.call(null,name_22521__$1);
var maxparams_22523 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_22524 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_22521__$1,mname_22522,maxparams_22523,loop_locals,map__22486,map__22486__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_22522),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_22521__$1,mname_22522,maxparams_22523,loop_locals,map__22486,map__22486__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_22525 = cljs.core.sort_by.call(null,((function (name_22521__$1,mname_22522,maxparams_22523,mmap_22524,loop_locals,map__22486,map__22486__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__22483_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__22483_SHARP_)));
});})(name_22521__$1,mname_22522,maxparams_22523,mmap_22524,loop_locals,map__22486,map__22486__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_22524));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_22522," = null;");

var seq__22488_22526 = cljs.core.seq.call(null,ms_22525);
var chunk__22489_22527 = null;
var count__22490_22528 = (0);
var i__22491_22529 = (0);
while(true){
if((i__22491_22529 < count__22490_22528)){
var vec__22492_22530 = cljs.core._nth.call(null,chunk__22489_22527,i__22491_22529);
var n_22531 = cljs.core.nth.call(null,vec__22492_22530,(0),null);
var meth_22532 = cljs.core.nth.call(null,vec__22492_22530,(1),null);
cljs.compiler.emits.call(null,"var ",n_22531," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_22532))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_22532);
} else {
cljs.compiler.emit_fn_method.call(null,meth_22532);
}

cljs.compiler.emitln.call(null,";");


var G__22533 = seq__22488_22526;
var G__22534 = chunk__22489_22527;
var G__22535 = count__22490_22528;
var G__22536 = (i__22491_22529 + (1));
seq__22488_22526 = G__22533;
chunk__22489_22527 = G__22534;
count__22490_22528 = G__22535;
i__22491_22529 = G__22536;
continue;
} else {
var temp__5735__auto___22537 = cljs.core.seq.call(null,seq__22488_22526);
if(temp__5735__auto___22537){
var seq__22488_22538__$1 = temp__5735__auto___22537;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22488_22538__$1)){
var c__4461__auto___22539 = cljs.core.chunk_first.call(null,seq__22488_22538__$1);
var G__22540 = cljs.core.chunk_rest.call(null,seq__22488_22538__$1);
var G__22541 = c__4461__auto___22539;
var G__22542 = cljs.core.count.call(null,c__4461__auto___22539);
var G__22543 = (0);
seq__22488_22526 = G__22540;
chunk__22489_22527 = G__22541;
count__22490_22528 = G__22542;
i__22491_22529 = G__22543;
continue;
} else {
var vec__22495_22544 = cljs.core.first.call(null,seq__22488_22538__$1);
var n_22545 = cljs.core.nth.call(null,vec__22495_22544,(0),null);
var meth_22546 = cljs.core.nth.call(null,vec__22495_22544,(1),null);
cljs.compiler.emits.call(null,"var ",n_22545," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_22546))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_22546);
} else {
cljs.compiler.emit_fn_method.call(null,meth_22546);
}

cljs.compiler.emitln.call(null,";");


var G__22547 = cljs.core.next.call(null,seq__22488_22538__$1);
var G__22548 = null;
var G__22549 = (0);
var G__22550 = (0);
seq__22488_22526 = G__22547;
chunk__22489_22527 = G__22548;
count__22490_22528 = G__22549;
i__22491_22529 = G__22550;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_22522," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_22523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_22523)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_22523));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__22498_22551 = cljs.core.seq.call(null,ms_22525);
var chunk__22499_22552 = null;
var count__22500_22553 = (0);
var i__22501_22554 = (0);
while(true){
if((i__22501_22554 < count__22500_22553)){
var vec__22502_22555 = cljs.core._nth.call(null,chunk__22499_22552,i__22501_22554);
var n_22556 = cljs.core.nth.call(null,vec__22502_22555,(0),null);
var meth_22557 = cljs.core.nth.call(null,vec__22502_22555,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_22557))){
cljs.compiler.emitln.call(null,"default:");

var restarg_22558 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_22558," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_22559 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_22558," = new cljs.core.IndexedSeq(",a_22559,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_22556,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_22523)),(((cljs.core.count.call(null,maxparams_22523) > (1)))?", ":null),restarg_22558,");");
} else {
var pcnt_22560 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_22557));
cljs.compiler.emitln.call(null,"case ",pcnt_22560,":");

cljs.compiler.emitln.call(null,"return ",n_22556,".call(this",(((pcnt_22560 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_22560,maxparams_22523)),null,(1),null)),(2),null))),");");
}


var G__22561 = seq__22498_22551;
var G__22562 = chunk__22499_22552;
var G__22563 = count__22500_22553;
var G__22564 = (i__22501_22554 + (1));
seq__22498_22551 = G__22561;
chunk__22499_22552 = G__22562;
count__22500_22553 = G__22563;
i__22501_22554 = G__22564;
continue;
} else {
var temp__5735__auto___22565 = cljs.core.seq.call(null,seq__22498_22551);
if(temp__5735__auto___22565){
var seq__22498_22566__$1 = temp__5735__auto___22565;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22498_22566__$1)){
var c__4461__auto___22567 = cljs.core.chunk_first.call(null,seq__22498_22566__$1);
var G__22568 = cljs.core.chunk_rest.call(null,seq__22498_22566__$1);
var G__22569 = c__4461__auto___22567;
var G__22570 = cljs.core.count.call(null,c__4461__auto___22567);
var G__22571 = (0);
seq__22498_22551 = G__22568;
chunk__22499_22552 = G__22569;
count__22500_22553 = G__22570;
i__22501_22554 = G__22571;
continue;
} else {
var vec__22505_22572 = cljs.core.first.call(null,seq__22498_22566__$1);
var n_22573 = cljs.core.nth.call(null,vec__22505_22572,(0),null);
var meth_22574 = cljs.core.nth.call(null,vec__22505_22572,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_22574))){
cljs.compiler.emitln.call(null,"default:");

var restarg_22575 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_22575," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_22576 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_22575," = new cljs.core.IndexedSeq(",a_22576,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_22573,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_22523)),(((cljs.core.count.call(null,maxparams_22523) > (1)))?", ":null),restarg_22575,");");
} else {
var pcnt_22577 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_22574));
cljs.compiler.emitln.call(null,"case ",pcnt_22577,":");

cljs.compiler.emitln.call(null,"return ",n_22573,".call(this",(((pcnt_22577 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_22577,maxparams_22523)),null,(1),null)),(2),null))),");");
}


var G__22578 = cljs.core.next.call(null,seq__22498_22566__$1);
var G__22579 = null;
var G__22580 = (0);
var G__22581 = (0);
seq__22498_22551 = G__22578;
chunk__22499_22552 = G__22579;
count__22500_22553 = G__22580;
i__22501_22554 = G__22581;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_22582 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_22525)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_22582,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_22522,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_22522,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_22521__$1,mname_22522,maxparams_22523,mmap_22524,ms_22525,loop_locals,map__22486,map__22486__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__22484_SHARP_){
var vec__22508 = p1__22484_SHARP_;
var n = cljs.core.nth.call(null,vec__22508,(0),null);
var m = cljs.core.nth.call(null,vec__22508,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_22521__$1,mname_22522,maxparams_22523,mmap_22524,ms_22525,loop_locals,map__22486,map__22486__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_22525),".cljs$lang$applyTo;");
} else {
}

var seq__22511_22583 = cljs.core.seq.call(null,ms_22525);
var chunk__22512_22584 = null;
var count__22513_22585 = (0);
var i__22514_22586 = (0);
while(true){
if((i__22514_22586 < count__22513_22585)){
var vec__22515_22587 = cljs.core._nth.call(null,chunk__22512_22584,i__22514_22586);
var n_22588 = cljs.core.nth.call(null,vec__22515_22587,(0),null);
var meth_22589 = cljs.core.nth.call(null,vec__22515_22587,(1),null);
var c_22590 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_22589));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_22589))){
cljs.compiler.emitln.call(null,mname_22522,".cljs$core$IFn$_invoke$arity$variadic = ",n_22588,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_22522,".cljs$core$IFn$_invoke$arity$",c_22590," = ",n_22588,";");
}


var G__22591 = seq__22511_22583;
var G__22592 = chunk__22512_22584;
var G__22593 = count__22513_22585;
var G__22594 = (i__22514_22586 + (1));
seq__22511_22583 = G__22591;
chunk__22512_22584 = G__22592;
count__22513_22585 = G__22593;
i__22514_22586 = G__22594;
continue;
} else {
var temp__5735__auto___22595 = cljs.core.seq.call(null,seq__22511_22583);
if(temp__5735__auto___22595){
var seq__22511_22596__$1 = temp__5735__auto___22595;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22511_22596__$1)){
var c__4461__auto___22597 = cljs.core.chunk_first.call(null,seq__22511_22596__$1);
var G__22598 = cljs.core.chunk_rest.call(null,seq__22511_22596__$1);
var G__22599 = c__4461__auto___22597;
var G__22600 = cljs.core.count.call(null,c__4461__auto___22597);
var G__22601 = (0);
seq__22511_22583 = G__22598;
chunk__22512_22584 = G__22599;
count__22513_22585 = G__22600;
i__22514_22586 = G__22601;
continue;
} else {
var vec__22518_22602 = cljs.core.first.call(null,seq__22511_22596__$1);
var n_22603 = cljs.core.nth.call(null,vec__22518_22602,(0),null);
var meth_22604 = cljs.core.nth.call(null,vec__22518_22602,(1),null);
var c_22605 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_22604));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_22604))){
cljs.compiler.emitln.call(null,mname_22522,".cljs$core$IFn$_invoke$arity$variadic = ",n_22603,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_22522,".cljs$core$IFn$_invoke$arity$",c_22605," = ",n_22603,";");
}


var G__22606 = cljs.core.next.call(null,seq__22511_22596__$1);
var G__22607 = null;
var G__22608 = (0);
var G__22609 = (0);
seq__22511_22583 = G__22606;
chunk__22512_22584 = G__22607;
count__22513_22585 = G__22608;
i__22514_22586 = G__22609;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_22522,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__22610){
var map__22611 = p__22610;
var map__22611__$1 = (((((!((map__22611 == null))))?(((((map__22611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22611):map__22611);
var statements = cljs.core.get.call(null,map__22611__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__22611__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__22611__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__22613_22617 = cljs.core.seq.call(null,statements);
var chunk__22614_22618 = null;
var count__22615_22619 = (0);
var i__22616_22620 = (0);
while(true){
if((i__22616_22620 < count__22615_22619)){
var s_22621 = cljs.core._nth.call(null,chunk__22614_22618,i__22616_22620);
cljs.compiler.emitln.call(null,s_22621);


var G__22622 = seq__22613_22617;
var G__22623 = chunk__22614_22618;
var G__22624 = count__22615_22619;
var G__22625 = (i__22616_22620 + (1));
seq__22613_22617 = G__22622;
chunk__22614_22618 = G__22623;
count__22615_22619 = G__22624;
i__22616_22620 = G__22625;
continue;
} else {
var temp__5735__auto___22626 = cljs.core.seq.call(null,seq__22613_22617);
if(temp__5735__auto___22626){
var seq__22613_22627__$1 = temp__5735__auto___22626;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22613_22627__$1)){
var c__4461__auto___22628 = cljs.core.chunk_first.call(null,seq__22613_22627__$1);
var G__22629 = cljs.core.chunk_rest.call(null,seq__22613_22627__$1);
var G__22630 = c__4461__auto___22628;
var G__22631 = cljs.core.count.call(null,c__4461__auto___22628);
var G__22632 = (0);
seq__22613_22617 = G__22629;
chunk__22614_22618 = G__22630;
count__22615_22619 = G__22631;
i__22616_22620 = G__22632;
continue;
} else {
var s_22633 = cljs.core.first.call(null,seq__22613_22627__$1);
cljs.compiler.emitln.call(null,s_22633);


var G__22634 = cljs.core.next.call(null,seq__22613_22627__$1);
var G__22635 = null;
var G__22636 = (0);
var G__22637 = (0);
seq__22613_22617 = G__22634;
chunk__22614_22618 = G__22635;
count__22615_22619 = G__22636;
i__22616_22620 = G__22637;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__22638){
var map__22639 = p__22638;
var map__22639__$1 = (((((!((map__22639 == null))))?(((((map__22639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22639):map__22639);
var try$ = cljs.core.get.call(null,map__22639__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__22639__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__22639__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__22639__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__22639__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__22641,is_loop){
var map__22642 = p__22641;
var map__22642__$1 = (((((!((map__22642 == null))))?(((((map__22642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22642):map__22642);
var expr = cljs.core.get.call(null,map__22642__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__22642__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__22642__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__22644_22654 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__22645_22655 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR__orig_val__22644_22654,context,map__22642,map__22642__$1,expr,bindings,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__22644_22654,context,map__22642,map__22642__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__22645_22655;

try{var seq__22646_22656 = cljs.core.seq.call(null,bindings);
var chunk__22647_22657 = null;
var count__22648_22658 = (0);
var i__22649_22659 = (0);
while(true){
if((i__22649_22659 < count__22648_22658)){
var map__22650_22660 = cljs.core._nth.call(null,chunk__22647_22657,i__22649_22659);
var map__22650_22661__$1 = (((((!((map__22650_22660 == null))))?(((((map__22650_22660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22650_22660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22650_22660):map__22650_22660);
var binding_22662 = map__22650_22661__$1;
var init_22663 = cljs.core.get.call(null,map__22650_22661__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_22662);

cljs.compiler.emitln.call(null," = ",init_22663,";");


var G__22664 = seq__22646_22656;
var G__22665 = chunk__22647_22657;
var G__22666 = count__22648_22658;
var G__22667 = (i__22649_22659 + (1));
seq__22646_22656 = G__22664;
chunk__22647_22657 = G__22665;
count__22648_22658 = G__22666;
i__22649_22659 = G__22667;
continue;
} else {
var temp__5735__auto___22668 = cljs.core.seq.call(null,seq__22646_22656);
if(temp__5735__auto___22668){
var seq__22646_22669__$1 = temp__5735__auto___22668;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22646_22669__$1)){
var c__4461__auto___22670 = cljs.core.chunk_first.call(null,seq__22646_22669__$1);
var G__22671 = cljs.core.chunk_rest.call(null,seq__22646_22669__$1);
var G__22672 = c__4461__auto___22670;
var G__22673 = cljs.core.count.call(null,c__4461__auto___22670);
var G__22674 = (0);
seq__22646_22656 = G__22671;
chunk__22647_22657 = G__22672;
count__22648_22658 = G__22673;
i__22649_22659 = G__22674;
continue;
} else {
var map__22652_22675 = cljs.core.first.call(null,seq__22646_22669__$1);
var map__22652_22676__$1 = (((((!((map__22652_22675 == null))))?(((((map__22652_22675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22652_22675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22652_22675):map__22652_22675);
var binding_22677 = map__22652_22676__$1;
var init_22678 = cljs.core.get.call(null,map__22652_22676__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_22677);

cljs.compiler.emitln.call(null," = ",init_22678,";");


var G__22679 = cljs.core.next.call(null,seq__22646_22669__$1);
var G__22680 = null;
var G__22681 = (0);
var G__22682 = (0);
seq__22646_22656 = G__22679;
chunk__22647_22657 = G__22680;
count__22648_22658 = G__22681;
i__22649_22659 = G__22682;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__22644_22654;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__22683){
var map__22684 = p__22683;
var map__22684__$1 = (((((!((map__22684 == null))))?(((((map__22684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22684):map__22684);
var frame = cljs.core.get.call(null,map__22684__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__22684__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__22684__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4518__auto___22686 = cljs.core.count.call(null,exprs);
var i_22687 = (0);
while(true){
if((i_22687 < n__4518__auto___22686)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_22687)," = ",exprs.call(null,i_22687),";");

var G__22688 = (i_22687 + (1));
i_22687 = G__22688;
continue;
} else {
}
break;
}

var n__4518__auto___22689 = cljs.core.count.call(null,exprs);
var i_22690 = (0);
while(true){
if((i_22690 < n__4518__auto___22689)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_22690))," = ",temps.call(null,i_22690),";");

var G__22691 = (i_22690 + (1));
i_22690 = G__22691;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__22692){
var map__22693 = p__22692;
var map__22693__$1 = (((((!((map__22693 == null))))?(((((map__22693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22693):map__22693);
var expr = cljs.core.get.call(null,map__22693__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__22693__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__22693__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__22695_22703 = cljs.core.seq.call(null,bindings);
var chunk__22696_22704 = null;
var count__22697_22705 = (0);
var i__22698_22706 = (0);
while(true){
if((i__22698_22706 < count__22697_22705)){
var map__22699_22707 = cljs.core._nth.call(null,chunk__22696_22704,i__22698_22706);
var map__22699_22708__$1 = (((((!((map__22699_22707 == null))))?(((((map__22699_22707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22699_22707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22699_22707):map__22699_22707);
var binding_22709 = map__22699_22708__$1;
var init_22710 = cljs.core.get.call(null,map__22699_22708__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_22709)," = ",init_22710,";");


var G__22711 = seq__22695_22703;
var G__22712 = chunk__22696_22704;
var G__22713 = count__22697_22705;
var G__22714 = (i__22698_22706 + (1));
seq__22695_22703 = G__22711;
chunk__22696_22704 = G__22712;
count__22697_22705 = G__22713;
i__22698_22706 = G__22714;
continue;
} else {
var temp__5735__auto___22715 = cljs.core.seq.call(null,seq__22695_22703);
if(temp__5735__auto___22715){
var seq__22695_22716__$1 = temp__5735__auto___22715;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22695_22716__$1)){
var c__4461__auto___22717 = cljs.core.chunk_first.call(null,seq__22695_22716__$1);
var G__22718 = cljs.core.chunk_rest.call(null,seq__22695_22716__$1);
var G__22719 = c__4461__auto___22717;
var G__22720 = cljs.core.count.call(null,c__4461__auto___22717);
var G__22721 = (0);
seq__22695_22703 = G__22718;
chunk__22696_22704 = G__22719;
count__22697_22705 = G__22720;
i__22698_22706 = G__22721;
continue;
} else {
var map__22701_22722 = cljs.core.first.call(null,seq__22695_22716__$1);
var map__22701_22723__$1 = (((((!((map__22701_22722 == null))))?(((((map__22701_22722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22701_22722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22701_22722):map__22701_22722);
var binding_22724 = map__22701_22723__$1;
var init_22725 = cljs.core.get.call(null,map__22701_22723__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_22724)," = ",init_22725,";");


var G__22726 = cljs.core.next.call(null,seq__22695_22716__$1);
var G__22727 = null;
var G__22728 = (0);
var G__22729 = (0);
seq__22695_22703 = G__22726;
chunk__22696_22704 = G__22727;
count__22697_22705 = G__22728;
i__22698_22706 = G__22729;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__22732){
var map__22733 = p__22732;
var map__22733__$1 = (((((!((map__22733 == null))))?(((((map__22733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22733):map__22733);
var expr = map__22733__$1;
var f = cljs.core.get.call(null,map__22733__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__22733__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__22733__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__22735 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__22733,map__22733__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__22733,map__22733__$1,expr,f,args,env){
return (function (p1__22730_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__22730_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__22733,map__22733__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__22733,map__22733__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__22733,map__22733__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__22733,map__22733__$1,expr,f,args,env){
return (function (p1__22731_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__22731_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__22733,map__22733__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__22733,map__22733__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__22735,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__22735,(1),null);
var env__20721__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20721__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_22738 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_22738,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_22739 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_22739,args)),(((mfa_22739 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_22739,args)),"], 0))");
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
var fprop_22740 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_22740," ? ",f__$1,fprop_22740,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_22740," ? ",f__$1,fprop_22740,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20721__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__22741){
var map__22742 = p__22741;
var map__22742__$1 = (((((!((map__22742 == null))))?(((((map__22742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22742):map__22742);
var ctor = cljs.core.get.call(null,map__22742__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__22742__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__22742__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__20721__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20721__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20721__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__22744){
var map__22745 = p__22744;
var map__22745__$1 = (((((!((map__22745 == null))))?(((((map__22745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22745):map__22745);
var target = cljs.core.get.call(null,map__22745__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__22745__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__22745__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__20721__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20721__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20721__auto__))){
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
var map__22747 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__22747__$1 = (((((!((map__22747 == null))))?(((((map__22747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22747):map__22747);
var options = cljs.core.get.call(null,map__22747__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__22747__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__22748 = options;
var map__22748__$1 = (((((!((map__22748 == null))))?(((((map__22748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22748):map__22748);
var target = cljs.core.get.call(null,map__22748__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__22748__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__22749 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__22754 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__22754__$1 = (((((!((map__22754 == null))))?(((((map__22754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22754):map__22754);
var node_libs = cljs.core.get.call(null,map__22754__$1,true);
var libs_to_load = cljs.core.get.call(null,map__22754__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__22749,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__22749,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__22756_22772 = cljs.core.seq.call(null,libs_to_load);
var chunk__22757_22773 = null;
var count__22758_22774 = (0);
var i__22759_22775 = (0);
while(true){
if((i__22759_22775 < count__22758_22774)){
var lib_22776 = cljs.core._nth.call(null,chunk__22757_22773,i__22759_22775);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_22776)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_22776),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_22776),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_22776),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_22776),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_22776,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_22776),"');");
}

}
}
}


var G__22777 = seq__22756_22772;
var G__22778 = chunk__22757_22773;
var G__22779 = count__22758_22774;
var G__22780 = (i__22759_22775 + (1));
seq__22756_22772 = G__22777;
chunk__22757_22773 = G__22778;
count__22758_22774 = G__22779;
i__22759_22775 = G__22780;
continue;
} else {
var temp__5735__auto___22781 = cljs.core.seq.call(null,seq__22756_22772);
if(temp__5735__auto___22781){
var seq__22756_22782__$1 = temp__5735__auto___22781;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22756_22782__$1)){
var c__4461__auto___22783 = cljs.core.chunk_first.call(null,seq__22756_22782__$1);
var G__22784 = cljs.core.chunk_rest.call(null,seq__22756_22782__$1);
var G__22785 = c__4461__auto___22783;
var G__22786 = cljs.core.count.call(null,c__4461__auto___22783);
var G__22787 = (0);
seq__22756_22772 = G__22784;
chunk__22757_22773 = G__22785;
count__22758_22774 = G__22786;
i__22759_22775 = G__22787;
continue;
} else {
var lib_22788 = cljs.core.first.call(null,seq__22756_22782__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_22788)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_22788),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_22788),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_22788),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_22788),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_22788,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_22788),"');");
}

}
}
}


var G__22789 = cljs.core.next.call(null,seq__22756_22782__$1);
var G__22790 = null;
var G__22791 = (0);
var G__22792 = (0);
seq__22756_22772 = G__22789;
chunk__22757_22773 = G__22790;
count__22758_22774 = G__22791;
i__22759_22775 = G__22792;
continue;
}
} else {
}
}
break;
}

var seq__22760_22793 = cljs.core.seq.call(null,node_libs);
var chunk__22761_22794 = null;
var count__22762_22795 = (0);
var i__22763_22796 = (0);
while(true){
if((i__22763_22796 < count__22762_22795)){
var lib_22797 = cljs.core._nth.call(null,chunk__22761_22794,i__22763_22796);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_22797)," = require('",lib_22797,"');");


var G__22798 = seq__22760_22793;
var G__22799 = chunk__22761_22794;
var G__22800 = count__22762_22795;
var G__22801 = (i__22763_22796 + (1));
seq__22760_22793 = G__22798;
chunk__22761_22794 = G__22799;
count__22762_22795 = G__22800;
i__22763_22796 = G__22801;
continue;
} else {
var temp__5735__auto___22802 = cljs.core.seq.call(null,seq__22760_22793);
if(temp__5735__auto___22802){
var seq__22760_22803__$1 = temp__5735__auto___22802;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22760_22803__$1)){
var c__4461__auto___22804 = cljs.core.chunk_first.call(null,seq__22760_22803__$1);
var G__22805 = cljs.core.chunk_rest.call(null,seq__22760_22803__$1);
var G__22806 = c__4461__auto___22804;
var G__22807 = cljs.core.count.call(null,c__4461__auto___22804);
var G__22808 = (0);
seq__22760_22793 = G__22805;
chunk__22761_22794 = G__22806;
count__22762_22795 = G__22807;
i__22763_22796 = G__22808;
continue;
} else {
var lib_22809 = cljs.core.first.call(null,seq__22760_22803__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_22809)," = require('",lib_22809,"');");


var G__22810 = cljs.core.next.call(null,seq__22760_22803__$1);
var G__22811 = null;
var G__22812 = (0);
var G__22813 = (0);
seq__22760_22793 = G__22810;
chunk__22761_22794 = G__22811;
count__22762_22795 = G__22812;
i__22763_22796 = G__22813;
continue;
}
} else {
}
}
break;
}

var seq__22764_22814 = cljs.core.seq.call(null,global_exports_libs);
var chunk__22765_22815 = null;
var count__22766_22816 = (0);
var i__22767_22817 = (0);
while(true){
if((i__22767_22817 < count__22766_22816)){
var lib_22818 = cljs.core._nth.call(null,chunk__22765_22815,i__22767_22817);
var map__22768_22819 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_22818));
var map__22768_22820__$1 = (((((!((map__22768_22819 == null))))?(((((map__22768_22819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22768_22819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22768_22819):map__22768_22819);
var global_exports_22821 = cljs.core.get.call(null,map__22768_22820__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_22821,lib_22818);


var G__22822 = seq__22764_22814;
var G__22823 = chunk__22765_22815;
var G__22824 = count__22766_22816;
var G__22825 = (i__22767_22817 + (1));
seq__22764_22814 = G__22822;
chunk__22765_22815 = G__22823;
count__22766_22816 = G__22824;
i__22767_22817 = G__22825;
continue;
} else {
var temp__5735__auto___22826 = cljs.core.seq.call(null,seq__22764_22814);
if(temp__5735__auto___22826){
var seq__22764_22827__$1 = temp__5735__auto___22826;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22764_22827__$1)){
var c__4461__auto___22828 = cljs.core.chunk_first.call(null,seq__22764_22827__$1);
var G__22829 = cljs.core.chunk_rest.call(null,seq__22764_22827__$1);
var G__22830 = c__4461__auto___22828;
var G__22831 = cljs.core.count.call(null,c__4461__auto___22828);
var G__22832 = (0);
seq__22764_22814 = G__22829;
chunk__22765_22815 = G__22830;
count__22766_22816 = G__22831;
i__22767_22817 = G__22832;
continue;
} else {
var lib_22833 = cljs.core.first.call(null,seq__22764_22827__$1);
var map__22770_22834 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_22833));
var map__22770_22835__$1 = (((((!((map__22770_22834 == null))))?(((((map__22770_22834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22770_22834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22770_22834):map__22770_22834);
var global_exports_22836 = cljs.core.get.call(null,map__22770_22835__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_22836,lib_22833);


var G__22837 = cljs.core.next.call(null,seq__22764_22827__$1);
var G__22838 = null;
var G__22839 = (0);
var G__22840 = (0);
seq__22764_22814 = G__22837;
chunk__22765_22815 = G__22838;
count__22766_22816 = G__22839;
i__22767_22817 = G__22840;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__22841){
var map__22842 = p__22841;
var map__22842__$1 = (((((!((map__22842 == null))))?(((((map__22842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22842):map__22842);
var name = cljs.core.get.call(null,map__22842__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__22842__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__22842__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__22842__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__22842__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__22842__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__22842__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__22844){
var map__22845 = p__22844;
var map__22845__$1 = (((((!((map__22845 == null))))?(((((map__22845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22845):map__22845);
var name = cljs.core.get.call(null,map__22845__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__22845__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__22845__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__22845__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__22845__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__22845__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__22845__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__22847){
var map__22848 = p__22847;
var map__22848__$1 = (((((!((map__22848 == null))))?(((((map__22848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22848):map__22848);
var t = cljs.core.get.call(null,map__22848__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__22848__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__22848__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__22848__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__22848__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__22850_22868 = cljs.core.seq.call(null,protocols);
var chunk__22851_22869 = null;
var count__22852_22870 = (0);
var i__22853_22871 = (0);
while(true){
if((i__22853_22871 < count__22852_22870)){
var protocol_22872 = cljs.core._nth.call(null,chunk__22851_22869,i__22853_22871);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_22872)),"}");


var G__22873 = seq__22850_22868;
var G__22874 = chunk__22851_22869;
var G__22875 = count__22852_22870;
var G__22876 = (i__22853_22871 + (1));
seq__22850_22868 = G__22873;
chunk__22851_22869 = G__22874;
count__22852_22870 = G__22875;
i__22853_22871 = G__22876;
continue;
} else {
var temp__5735__auto___22877 = cljs.core.seq.call(null,seq__22850_22868);
if(temp__5735__auto___22877){
var seq__22850_22878__$1 = temp__5735__auto___22877;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22850_22878__$1)){
var c__4461__auto___22879 = cljs.core.chunk_first.call(null,seq__22850_22878__$1);
var G__22880 = cljs.core.chunk_rest.call(null,seq__22850_22878__$1);
var G__22881 = c__4461__auto___22879;
var G__22882 = cljs.core.count.call(null,c__4461__auto___22879);
var G__22883 = (0);
seq__22850_22868 = G__22880;
chunk__22851_22869 = G__22881;
count__22852_22870 = G__22882;
i__22853_22871 = G__22883;
continue;
} else {
var protocol_22884 = cljs.core.first.call(null,seq__22850_22878__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_22884)),"}");


var G__22885 = cljs.core.next.call(null,seq__22850_22878__$1);
var G__22886 = null;
var G__22887 = (0);
var G__22888 = (0);
seq__22850_22868 = G__22885;
chunk__22851_22869 = G__22886;
count__22852_22870 = G__22887;
i__22853_22871 = G__22888;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__22854_22889 = cljs.core.seq.call(null,fields__$1);
var chunk__22855_22890 = null;
var count__22856_22891 = (0);
var i__22857_22892 = (0);
while(true){
if((i__22857_22892 < count__22856_22891)){
var fld_22893 = cljs.core._nth.call(null,chunk__22855_22890,i__22857_22892);
cljs.compiler.emitln.call(null,"this.",fld_22893," = ",fld_22893,";");


var G__22894 = seq__22854_22889;
var G__22895 = chunk__22855_22890;
var G__22896 = count__22856_22891;
var G__22897 = (i__22857_22892 + (1));
seq__22854_22889 = G__22894;
chunk__22855_22890 = G__22895;
count__22856_22891 = G__22896;
i__22857_22892 = G__22897;
continue;
} else {
var temp__5735__auto___22898 = cljs.core.seq.call(null,seq__22854_22889);
if(temp__5735__auto___22898){
var seq__22854_22899__$1 = temp__5735__auto___22898;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22854_22899__$1)){
var c__4461__auto___22900 = cljs.core.chunk_first.call(null,seq__22854_22899__$1);
var G__22901 = cljs.core.chunk_rest.call(null,seq__22854_22899__$1);
var G__22902 = c__4461__auto___22900;
var G__22903 = cljs.core.count.call(null,c__4461__auto___22900);
var G__22904 = (0);
seq__22854_22889 = G__22901;
chunk__22855_22890 = G__22902;
count__22856_22891 = G__22903;
i__22857_22892 = G__22904;
continue;
} else {
var fld_22905 = cljs.core.first.call(null,seq__22854_22899__$1);
cljs.compiler.emitln.call(null,"this.",fld_22905," = ",fld_22905,";");


var G__22906 = cljs.core.next.call(null,seq__22854_22899__$1);
var G__22907 = null;
var G__22908 = (0);
var G__22909 = (0);
seq__22854_22889 = G__22906;
chunk__22855_22890 = G__22907;
count__22856_22891 = G__22908;
i__22857_22892 = G__22909;
continue;
}
} else {
}
}
break;
}

var seq__22858_22910 = cljs.core.seq.call(null,pmasks);
var chunk__22859_22911 = null;
var count__22860_22912 = (0);
var i__22861_22913 = (0);
while(true){
if((i__22861_22913 < count__22860_22912)){
var vec__22862_22914 = cljs.core._nth.call(null,chunk__22859_22911,i__22861_22913);
var pno_22915 = cljs.core.nth.call(null,vec__22862_22914,(0),null);
var pmask_22916 = cljs.core.nth.call(null,vec__22862_22914,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_22915,"$ = ",pmask_22916,";");


var G__22917 = seq__22858_22910;
var G__22918 = chunk__22859_22911;
var G__22919 = count__22860_22912;
var G__22920 = (i__22861_22913 + (1));
seq__22858_22910 = G__22917;
chunk__22859_22911 = G__22918;
count__22860_22912 = G__22919;
i__22861_22913 = G__22920;
continue;
} else {
var temp__5735__auto___22921 = cljs.core.seq.call(null,seq__22858_22910);
if(temp__5735__auto___22921){
var seq__22858_22922__$1 = temp__5735__auto___22921;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22858_22922__$1)){
var c__4461__auto___22923 = cljs.core.chunk_first.call(null,seq__22858_22922__$1);
var G__22924 = cljs.core.chunk_rest.call(null,seq__22858_22922__$1);
var G__22925 = c__4461__auto___22923;
var G__22926 = cljs.core.count.call(null,c__4461__auto___22923);
var G__22927 = (0);
seq__22858_22910 = G__22924;
chunk__22859_22911 = G__22925;
count__22860_22912 = G__22926;
i__22861_22913 = G__22927;
continue;
} else {
var vec__22865_22928 = cljs.core.first.call(null,seq__22858_22922__$1);
var pno_22929 = cljs.core.nth.call(null,vec__22865_22928,(0),null);
var pmask_22930 = cljs.core.nth.call(null,vec__22865_22928,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_22929,"$ = ",pmask_22930,";");


var G__22931 = cljs.core.next.call(null,seq__22858_22922__$1);
var G__22932 = null;
var G__22933 = (0);
var G__22934 = (0);
seq__22858_22910 = G__22931;
chunk__22859_22911 = G__22932;
count__22860_22912 = G__22933;
i__22861_22913 = G__22934;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__22935){
var map__22936 = p__22935;
var map__22936__$1 = (((((!((map__22936 == null))))?(((((map__22936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22936):map__22936);
var t = cljs.core.get.call(null,map__22936__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__22936__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__22936__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__22936__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__22936__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__22938_22956 = cljs.core.seq.call(null,protocols);
var chunk__22939_22957 = null;
var count__22940_22958 = (0);
var i__22941_22959 = (0);
while(true){
if((i__22941_22959 < count__22940_22958)){
var protocol_22960 = cljs.core._nth.call(null,chunk__22939_22957,i__22941_22959);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_22960)),"}");


var G__22961 = seq__22938_22956;
var G__22962 = chunk__22939_22957;
var G__22963 = count__22940_22958;
var G__22964 = (i__22941_22959 + (1));
seq__22938_22956 = G__22961;
chunk__22939_22957 = G__22962;
count__22940_22958 = G__22963;
i__22941_22959 = G__22964;
continue;
} else {
var temp__5735__auto___22965 = cljs.core.seq.call(null,seq__22938_22956);
if(temp__5735__auto___22965){
var seq__22938_22966__$1 = temp__5735__auto___22965;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22938_22966__$1)){
var c__4461__auto___22967 = cljs.core.chunk_first.call(null,seq__22938_22966__$1);
var G__22968 = cljs.core.chunk_rest.call(null,seq__22938_22966__$1);
var G__22969 = c__4461__auto___22967;
var G__22970 = cljs.core.count.call(null,c__4461__auto___22967);
var G__22971 = (0);
seq__22938_22956 = G__22968;
chunk__22939_22957 = G__22969;
count__22940_22958 = G__22970;
i__22941_22959 = G__22971;
continue;
} else {
var protocol_22972 = cljs.core.first.call(null,seq__22938_22966__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_22972)),"}");


var G__22973 = cljs.core.next.call(null,seq__22938_22966__$1);
var G__22974 = null;
var G__22975 = (0);
var G__22976 = (0);
seq__22938_22956 = G__22973;
chunk__22939_22957 = G__22974;
count__22940_22958 = G__22975;
i__22941_22959 = G__22976;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__22942_22977 = cljs.core.seq.call(null,fields__$1);
var chunk__22943_22978 = null;
var count__22944_22979 = (0);
var i__22945_22980 = (0);
while(true){
if((i__22945_22980 < count__22944_22979)){
var fld_22981 = cljs.core._nth.call(null,chunk__22943_22978,i__22945_22980);
cljs.compiler.emitln.call(null,"this.",fld_22981," = ",fld_22981,";");


var G__22982 = seq__22942_22977;
var G__22983 = chunk__22943_22978;
var G__22984 = count__22944_22979;
var G__22985 = (i__22945_22980 + (1));
seq__22942_22977 = G__22982;
chunk__22943_22978 = G__22983;
count__22944_22979 = G__22984;
i__22945_22980 = G__22985;
continue;
} else {
var temp__5735__auto___22986 = cljs.core.seq.call(null,seq__22942_22977);
if(temp__5735__auto___22986){
var seq__22942_22987__$1 = temp__5735__auto___22986;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22942_22987__$1)){
var c__4461__auto___22988 = cljs.core.chunk_first.call(null,seq__22942_22987__$1);
var G__22989 = cljs.core.chunk_rest.call(null,seq__22942_22987__$1);
var G__22990 = c__4461__auto___22988;
var G__22991 = cljs.core.count.call(null,c__4461__auto___22988);
var G__22992 = (0);
seq__22942_22977 = G__22989;
chunk__22943_22978 = G__22990;
count__22944_22979 = G__22991;
i__22945_22980 = G__22992;
continue;
} else {
var fld_22993 = cljs.core.first.call(null,seq__22942_22987__$1);
cljs.compiler.emitln.call(null,"this.",fld_22993," = ",fld_22993,";");


var G__22994 = cljs.core.next.call(null,seq__22942_22987__$1);
var G__22995 = null;
var G__22996 = (0);
var G__22997 = (0);
seq__22942_22977 = G__22994;
chunk__22943_22978 = G__22995;
count__22944_22979 = G__22996;
i__22945_22980 = G__22997;
continue;
}
} else {
}
}
break;
}

var seq__22946_22998 = cljs.core.seq.call(null,pmasks);
var chunk__22947_22999 = null;
var count__22948_23000 = (0);
var i__22949_23001 = (0);
while(true){
if((i__22949_23001 < count__22948_23000)){
var vec__22950_23002 = cljs.core._nth.call(null,chunk__22947_22999,i__22949_23001);
var pno_23003 = cljs.core.nth.call(null,vec__22950_23002,(0),null);
var pmask_23004 = cljs.core.nth.call(null,vec__22950_23002,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_23003,"$ = ",pmask_23004,";");


var G__23005 = seq__22946_22998;
var G__23006 = chunk__22947_22999;
var G__23007 = count__22948_23000;
var G__23008 = (i__22949_23001 + (1));
seq__22946_22998 = G__23005;
chunk__22947_22999 = G__23006;
count__22948_23000 = G__23007;
i__22949_23001 = G__23008;
continue;
} else {
var temp__5735__auto___23009 = cljs.core.seq.call(null,seq__22946_22998);
if(temp__5735__auto___23009){
var seq__22946_23010__$1 = temp__5735__auto___23009;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22946_23010__$1)){
var c__4461__auto___23011 = cljs.core.chunk_first.call(null,seq__22946_23010__$1);
var G__23012 = cljs.core.chunk_rest.call(null,seq__22946_23010__$1);
var G__23013 = c__4461__auto___23011;
var G__23014 = cljs.core.count.call(null,c__4461__auto___23011);
var G__23015 = (0);
seq__22946_22998 = G__23012;
chunk__22947_22999 = G__23013;
count__22948_23000 = G__23014;
i__22949_23001 = G__23015;
continue;
} else {
var vec__22953_23016 = cljs.core.first.call(null,seq__22946_23010__$1);
var pno_23017 = cljs.core.nth.call(null,vec__22953_23016,(0),null);
var pmask_23018 = cljs.core.nth.call(null,vec__22953_23016,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_23017,"$ = ",pmask_23018,";");


var G__23019 = cljs.core.next.call(null,seq__22946_23010__$1);
var G__23020 = null;
var G__23021 = (0);
var G__23022 = (0);
seq__22946_22998 = G__23019;
chunk__22947_22999 = G__23020;
count__22948_23000 = G__23021;
i__22949_23001 = G__23022;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__23023){
var map__23024 = p__23023;
var map__23024__$1 = (((((!((map__23024 == null))))?(((((map__23024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23024):map__23024);
var target = cljs.core.get.call(null,map__23024__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__23024__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__23024__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__23024__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__23024__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__20721__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20721__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20721__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__23026){
var map__23027 = p__23026;
var map__23027__$1 = (((((!((map__23027 == null))))?(((((map__23027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23027):map__23027);
var op = cljs.core.get.call(null,map__23027__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__23027__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__23027__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__23027__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__23027__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4036__auto__ = code;
if(cljs.core.truth_(and__4036__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4036__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__20721__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20721__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20721__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__23033 = cljs.core.seq.call(null,table);
var chunk__23034 = null;
var count__23035 = (0);
var i__23036 = (0);
while(true){
if((i__23036 < count__23035)){
var vec__23037 = cljs.core._nth.call(null,chunk__23034,i__23036);
var sym = cljs.core.nth.call(null,vec__23037,(0),null);
var value = cljs.core.nth.call(null,vec__23037,(1),null);
var ns_23043 = cljs.core.namespace.call(null,sym);
var name_23044 = cljs.core.name.call(null,sym);
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


var G__23045 = seq__23033;
var G__23046 = chunk__23034;
var G__23047 = count__23035;
var G__23048 = (i__23036 + (1));
seq__23033 = G__23045;
chunk__23034 = G__23046;
count__23035 = G__23047;
i__23036 = G__23048;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__23033);
if(temp__5735__auto__){
var seq__23033__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23033__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__23033__$1);
var G__23049 = cljs.core.chunk_rest.call(null,seq__23033__$1);
var G__23050 = c__4461__auto__;
var G__23051 = cljs.core.count.call(null,c__4461__auto__);
var G__23052 = (0);
seq__23033 = G__23049;
chunk__23034 = G__23050;
count__23035 = G__23051;
i__23036 = G__23052;
continue;
} else {
var vec__23040 = cljs.core.first.call(null,seq__23033__$1);
var sym = cljs.core.nth.call(null,vec__23040,(0),null);
var value = cljs.core.nth.call(null,vec__23040,(1),null);
var ns_23053 = cljs.core.namespace.call(null,sym);
var name_23054 = cljs.core.name.call(null,sym);
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


var G__23055 = cljs.core.next.call(null,seq__23033__$1);
var G__23056 = null;
var G__23057 = (0);
var G__23058 = (0);
seq__23033 = G__23055;
chunk__23034 = G__23056;
count__23035 = G__23057;
i__23036 = G__23058;
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
var G__23060 = arguments.length;
switch (G__23060) {
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
var k_23065 = cljs.core.first.call(null,ks);
var vec__23061_23066 = cljs.core.conj.call(null,prefix,k_23065);
var top_23067 = cljs.core.nth.call(null,vec__23061_23066,(0),null);
var prefix_SINGLEQUOTE__23068 = vec__23061_23066;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_23065)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__23068) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_23067)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_23067)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__23068)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_23067);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__23068)),";");
}
} else {
}

var m_23069 = cljs.core.get.call(null,externs,k_23065);
if(cljs.core.empty_QMARK_.call(null,m_23069)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__23068,m_23069,top_level,known_externs);
}

var G__23070 = cljs.core.next.call(null,ks);
ks = G__23070;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map
