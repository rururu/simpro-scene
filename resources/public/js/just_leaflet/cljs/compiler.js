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
var map__34554 = s;
var map__34554__$1 = cljs.core.__destructure_map.call(null,map__34554);
var name = cljs.core.get.call(null,map__34554__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__34554__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__34556 = info;
var map__34557 = G__34556;
var map__34557__$1 = cljs.core.__destructure_map.call(null,map__34557);
var shadow = cljs.core.get.call(null,map__34557__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__34556__$1 = G__34556;
while(true){
var d__$2 = d__$1;
var map__34559 = G__34556__$1;
var map__34559__$1 = cljs.core.__destructure_map.call(null,map__34559);
var shadow__$1 = cljs.core.get.call(null,map__34559__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__34560 = (d__$2 + (1));
var G__34561 = shadow__$1;
d__$1 = G__34560;
G__34556__$1 = G__34561;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__34562){
var map__34563 = p__34562;
var map__34563__$1 = cljs.core.__destructure_map.call(null,map__34563);
var name_var = map__34563__$1;
var name = cljs.core.get.call(null,map__34563__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__34563__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__34564 = info;
var map__34564__$1 = cljs.core.__destructure_map.call(null,map__34564);
var ns = cljs.core.get.call(null,map__34564__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__34564__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__34566 = arguments.length;
switch (G__34566) {
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
var G__34568 = cp;
switch (G__34568) {
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
var seq__34570_34574 = cljs.core.seq.call(null,s);
var chunk__34571_34575 = null;
var count__34572_34576 = (0);
var i__34573_34577 = (0);
while(true){
if((i__34573_34577 < count__34572_34576)){
var c_34578 = cljs.core._nth.call(null,chunk__34571_34575,i__34573_34577);
sb.append(cljs.compiler.escape_char.call(null,c_34578));


var G__34579 = seq__34570_34574;
var G__34580 = chunk__34571_34575;
var G__34581 = count__34572_34576;
var G__34582 = (i__34573_34577 + (1));
seq__34570_34574 = G__34579;
chunk__34571_34575 = G__34580;
count__34572_34576 = G__34581;
i__34573_34577 = G__34582;
continue;
} else {
var temp__5804__auto___34583 = cljs.core.seq.call(null,seq__34570_34574);
if(temp__5804__auto___34583){
var seq__34570_34584__$1 = temp__5804__auto___34583;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34570_34584__$1)){
var c__5568__auto___34585 = cljs.core.chunk_first.call(null,seq__34570_34584__$1);
var G__34586 = cljs.core.chunk_rest.call(null,seq__34570_34584__$1);
var G__34587 = c__5568__auto___34585;
var G__34588 = cljs.core.count.call(null,c__5568__auto___34585);
var G__34589 = (0);
seq__34570_34574 = G__34586;
chunk__34571_34575 = G__34587;
count__34572_34576 = G__34588;
i__34573_34577 = G__34589;
continue;
} else {
var c_34590 = cljs.core.first.call(null,seq__34570_34584__$1);
sb.append(cljs.compiler.escape_char.call(null,c_34590));


var G__34591 = cljs.core.next.call(null,seq__34570_34584__$1);
var G__34592 = null;
var G__34593 = (0);
var G__34594 = (0);
seq__34570_34574 = G__34591;
chunk__34571_34575 = G__34592;
count__34572_34576 = G__34593;
i__34573_34577 = G__34594;
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
var map__34595_34598 = ast;
var map__34595_34599__$1 = cljs.core.__destructure_map.call(null,map__34595_34598);
var env_34600 = cljs.core.get.call(null,map__34595_34599__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_34600))){
var map__34596_34601 = env_34600;
var map__34596_34602__$1 = cljs.core.__destructure_map.call(null,map__34596_34601);
var line_34603 = cljs.core.get.call(null,map__34596_34602__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_34604 = cljs.core.get.call(null,map__34596_34602__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__34597 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__34597,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__34597;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_34603 - (1))], null),cljs.core.fnil.call(null,(function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_34604)?(column_34604 - (1)):(0))], null),cljs.core.fnil.call(null,(function (column__$1){
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
var G__34613 = arguments.length;
switch (G__34613) {
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
var len__5769__auto___34620 = arguments.length;
var i__5770__auto___34621 = (0);
while(true){
if((i__5770__auto___34621 < len__5769__auto___34620)){
args_arr__5794__auto__.push((arguments[i__5770__auto___34621]));

var G__34622 = (i__5770__auto___34621 + (1));
i__5770__auto___34621 = G__34622;
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
var s_34623 = (function (){var G__34614 = a;
if((!(typeof a === 'string'))){
return G__34614.toString();
} else {
return G__34614;
}
})();
var temp__5808__auto___34624 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5808__auto___34624 == null)){
} else {
var sm_data_34625 = temp__5808__auto___34624;
cljs.core.swap_BANG_.call(null,sm_data_34625,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__34605_SHARP_){
return (p1__34605_SHARP_ + s_34623.length);
}));
}

cljs.core.print.call(null,s_34623);

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

var seq__34615 = cljs.core.seq.call(null,xs);
var chunk__34616 = null;
var count__34617 = (0);
var i__34618 = (0);
while(true){
if((i__34618 < count__34617)){
var x = cljs.core._nth.call(null,chunk__34616,i__34618);
cljs.compiler.emits.call(null,x);


var G__34626 = seq__34615;
var G__34627 = chunk__34616;
var G__34628 = count__34617;
var G__34629 = (i__34618 + (1));
seq__34615 = G__34626;
chunk__34616 = G__34627;
count__34617 = G__34628;
i__34618 = G__34629;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__34615);
if(temp__5804__auto__){
var seq__34615__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34615__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__34615__$1);
var G__34630 = cljs.core.chunk_rest.call(null,seq__34615__$1);
var G__34631 = c__5568__auto__;
var G__34632 = cljs.core.count.call(null,c__5568__auto__);
var G__34633 = (0);
seq__34615 = G__34630;
chunk__34616 = G__34631;
count__34617 = G__34632;
i__34618 = G__34633;
continue;
} else {
var x = cljs.core.first.call(null,seq__34615__$1);
cljs.compiler.emits.call(null,x);


var G__34634 = cljs.core.next.call(null,seq__34615__$1);
var G__34635 = null;
var G__34636 = (0);
var G__34637 = (0);
seq__34615 = G__34634;
chunk__34616 = G__34635;
count__34617 = G__34636;
i__34618 = G__34637;
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
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq34607){
var G__34608 = cljs.core.first.call(null,seq34607);
var seq34607__$1 = cljs.core.next.call(null,seq34607);
var G__34609 = cljs.core.first.call(null,seq34607__$1);
var seq34607__$2 = cljs.core.next.call(null,seq34607__$1);
var G__34610 = cljs.core.first.call(null,seq34607__$2);
var seq34607__$3 = cljs.core.next.call(null,seq34607__$2);
var G__34611 = cljs.core.first.call(null,seq34607__$3);
var seq34607__$4 = cljs.core.next.call(null,seq34607__$3);
var G__34612 = cljs.core.first.call(null,seq34607__$4);
var seq34607__$5 = cljs.core.next.call(null,seq34607__$4);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34608,G__34609,G__34610,G__34611,G__34612,seq34607__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__34638){
var map__34639 = p__34638;
var map__34639__$1 = cljs.core.__destructure_map.call(null,map__34639);
var m = map__34639__$1;
var gen_line = cljs.core.get.call(null,map__34639__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__34647 = arguments.length;
switch (G__34647) {
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
var len__5769__auto___34653 = arguments.length;
var i__5770__auto___34654 = (0);
while(true){
if((i__5770__auto___34654 < len__5769__auto___34653)){
args_arr__5794__auto__.push((arguments[i__5770__auto___34654]));

var G__34655 = (i__5770__auto___34654 + (1));
i__5770__auto___34654 = G__34655;
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

var seq__34648_34656 = cljs.core.seq.call(null,xs);
var chunk__34649_34657 = null;
var count__34650_34658 = (0);
var i__34651_34659 = (0);
while(true){
if((i__34651_34659 < count__34650_34658)){
var x_34660 = cljs.core._nth.call(null,chunk__34649_34657,i__34651_34659);
cljs.compiler.emits.call(null,x_34660);


var G__34661 = seq__34648_34656;
var G__34662 = chunk__34649_34657;
var G__34663 = count__34650_34658;
var G__34664 = (i__34651_34659 + (1));
seq__34648_34656 = G__34661;
chunk__34649_34657 = G__34662;
count__34650_34658 = G__34663;
i__34651_34659 = G__34664;
continue;
} else {
var temp__5804__auto___34665 = cljs.core.seq.call(null,seq__34648_34656);
if(temp__5804__auto___34665){
var seq__34648_34666__$1 = temp__5804__auto___34665;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34648_34666__$1)){
var c__5568__auto___34667 = cljs.core.chunk_first.call(null,seq__34648_34666__$1);
var G__34668 = cljs.core.chunk_rest.call(null,seq__34648_34666__$1);
var G__34669 = c__5568__auto___34667;
var G__34670 = cljs.core.count.call(null,c__5568__auto___34667);
var G__34671 = (0);
seq__34648_34656 = G__34668;
chunk__34649_34657 = G__34669;
count__34650_34658 = G__34670;
i__34651_34659 = G__34671;
continue;
} else {
var x_34672 = cljs.core.first.call(null,seq__34648_34666__$1);
cljs.compiler.emits.call(null,x_34672);


var G__34673 = cljs.core.next.call(null,seq__34648_34666__$1);
var G__34674 = null;
var G__34675 = (0);
var G__34676 = (0);
seq__34648_34656 = G__34673;
chunk__34649_34657 = G__34674;
count__34650_34658 = G__34675;
i__34651_34659 = G__34676;
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
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq34641){
var G__34642 = cljs.core.first.call(null,seq34641);
var seq34641__$1 = cljs.core.next.call(null,seq34641);
var G__34643 = cljs.core.first.call(null,seq34641__$1);
var seq34641__$2 = cljs.core.next.call(null,seq34641__$1);
var G__34644 = cljs.core.first.call(null,seq34641__$2);
var seq34641__$3 = cljs.core.next.call(null,seq34641__$2);
var G__34645 = cljs.core.first.call(null,seq34641__$3);
var seq34641__$4 = cljs.core.next.call(null,seq34641__$3);
var G__34646 = cljs.core.first.call(null,seq34641__$4);
var seq34641__$5 = cljs.core.next.call(null,seq34641__$4);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34642,G__34643,G__34644,G__34645,G__34646,seq34641__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34677_34681 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34678_34682 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34679_34683 = true;
var _STAR_print_fn_STAR__temp_val__34680_34684 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34679_34683);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34680_34684);

try{cljs.compiler.emit.call(null,expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34678_34682);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34677_34681);
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
var vec__34685 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__34685,(0),null);
var name = cljs.core.nth.call(null,vec__34685,(1),null);
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
var vec__34688 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__34688,(0),null);
var flags = cljs.core.nth.call(null,vec__34688,(1),null);
var pattern = cljs.core.nth.call(null,vec__34688,(2),null);
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
return cljs.compiler.emit_js_object.call(null,items,(function (p1__34691_SHARP_){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__34691_SHARP_);
});
}));
} else {
return cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__34693){
var map__34694 = p__34693;
var map__34694__$1 = cljs.core.__destructure_map.call(null,map__34694);
var ast = map__34694__$1;
var info = cljs.core.get.call(null,map__34694__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__34694__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__34694__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5802__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5802__auto__)){
var const_expr = temp__5802__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__34695 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__34695__$1 = cljs.core.__destructure_map.call(null,map__34695);
var cenv = map__34695__$1;
var options = cljs.core.get.call(null,map__34695__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__34696 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__5043__auto__;
}
})())){
return clojure.set.difference.call(null,G__34696,cljs.analyzer.es5_allowed);
} else {
return G__34696;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__5045__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__34697 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__34697,reserved);
} else {
return G__34697;
}
})();
var env__9256__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__34698_34699 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__34698_34700__$1 = (((G__34698_34699 instanceof cljs.core.Keyword))?G__34698_34699.fqn:null);
switch (G__34698_34700__$1) {
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__34702){
var map__34703 = p__34702;
var map__34703__$1 = cljs.core.__destructure_map.call(null,map__34703);
var arg = map__34703__$1;
var env = cljs.core.get.call(null,map__34703__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__34703__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__34703__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__34703__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__34704 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__34704__$1 = cljs.core.__destructure_map.call(null,map__34704);
var name = cljs.core.get.call(null,map__34704__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__34705){
var map__34706 = p__34705;
var map__34706__$1 = cljs.core.__destructure_map.call(null,map__34706);
var expr = cljs.core.get.call(null,map__34706__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__34706__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__34706__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ((cljs.core.every_QMARK_.call(null,(function (p1__34707_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__34707_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__34708){
var map__34709 = p__34708;
var map__34709__$1 = cljs.core.__destructure_map.call(null,map__34709);
var env = cljs.core.get.call(null,map__34709__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__34709__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__34709__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__34710){
var map__34711 = p__34710;
var map__34711__$1 = cljs.core.__destructure_map.call(null,map__34711);
var items = cljs.core.get.call(null,map__34711__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__34711__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ((cljs.core.every_QMARK_.call(null,(function (p1__34712_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__34712_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__34713){
var map__34714 = p__34713;
var map__34714__$1 = cljs.core.__destructure_map.call(null,map__34714);
var items = cljs.core.get.call(null,map__34714__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__34714__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var temp__5804__auto___34737 = cljs.core.seq.call(null,items);
if(temp__5804__auto___34737){
var items_34738__$1 = temp__5804__auto___34737;
var vec__34715_34739 = items_34738__$1;
var seq__34716_34740 = cljs.core.seq.call(null,vec__34715_34739);
var first__34717_34741 = cljs.core.first.call(null,seq__34716_34740);
var seq__34716_34742__$1 = cljs.core.next.call(null,seq__34716_34740);
var vec__34718_34743 = first__34717_34741;
var k_34744 = cljs.core.nth.call(null,vec__34718_34743,(0),null);
var v_34745 = cljs.core.nth.call(null,vec__34718_34743,(1),null);
var r_34746 = seq__34716_34742__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_34744),"\": ",emit_js_object_val.call(null,v_34745));

var seq__34721_34747 = cljs.core.seq.call(null,r_34746);
var chunk__34722_34748 = null;
var count__34723_34749 = (0);
var i__34724_34750 = (0);
while(true){
if((i__34724_34750 < count__34723_34749)){
var vec__34731_34751 = cljs.core._nth.call(null,chunk__34722_34748,i__34724_34750);
var k_34752__$1 = cljs.core.nth.call(null,vec__34731_34751,(0),null);
var v_34753__$1 = cljs.core.nth.call(null,vec__34731_34751,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_34752__$1),"\": ",emit_js_object_val.call(null,v_34753__$1));


var G__34754 = seq__34721_34747;
var G__34755 = chunk__34722_34748;
var G__34756 = count__34723_34749;
var G__34757 = (i__34724_34750 + (1));
seq__34721_34747 = G__34754;
chunk__34722_34748 = G__34755;
count__34723_34749 = G__34756;
i__34724_34750 = G__34757;
continue;
} else {
var temp__5804__auto___34758__$1 = cljs.core.seq.call(null,seq__34721_34747);
if(temp__5804__auto___34758__$1){
var seq__34721_34759__$1 = temp__5804__auto___34758__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34721_34759__$1)){
var c__5568__auto___34760 = cljs.core.chunk_first.call(null,seq__34721_34759__$1);
var G__34761 = cljs.core.chunk_rest.call(null,seq__34721_34759__$1);
var G__34762 = c__5568__auto___34760;
var G__34763 = cljs.core.count.call(null,c__5568__auto___34760);
var G__34764 = (0);
seq__34721_34747 = G__34761;
chunk__34722_34748 = G__34762;
count__34723_34749 = G__34763;
i__34724_34750 = G__34764;
continue;
} else {
var vec__34734_34765 = cljs.core.first.call(null,seq__34721_34759__$1);
var k_34766__$1 = cljs.core.nth.call(null,vec__34734_34765,(0),null);
var v_34767__$1 = cljs.core.nth.call(null,vec__34734_34765,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_34766__$1),"\": ",emit_js_object_val.call(null,v_34767__$1));


var G__34768 = cljs.core.next.call(null,seq__34721_34759__$1);
var G__34769 = null;
var G__34770 = (0);
var G__34771 = (0);
seq__34721_34747 = G__34768;
chunk__34722_34748 = G__34769;
count__34723_34749 = G__34770;
i__34724_34750 = G__34771;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__34772){
var map__34773 = p__34772;
var map__34773__$1 = cljs.core.__destructure_map.call(null,map__34773);
var keys = cljs.core.get.call(null,map__34773__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__34773__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__34773__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__34774){
var map__34775 = p__34774;
var map__34775__$1 = cljs.core.__destructure_map.call(null,map__34775);
var items = cljs.core.get.call(null,map__34775__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__34775__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__34776){
var map__34777 = p__34776;
var map__34777__$1 = cljs.core.__destructure_map.call(null,map__34777);
var expr = cljs.core.get.call(null,map__34777__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__34778){
var map__34779 = p__34778;
var map__34779__$1 = cljs.core.__destructure_map.call(null,map__34779);
var form = cljs.core.get.call(null,map__34779__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__34779__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var map__34780 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__34780__$1 = cljs.core.__destructure_map.call(null,map__34780);
var op = cljs.core.get.call(null,map__34780__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__34780__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__34780__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__34781 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__34781__$1 = cljs.core.__destructure_map.call(null,map__34781);
var op = cljs.core.get.call(null,map__34781__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__34781__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__34781__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__34782){
var map__34783 = p__34782;
var map__34783__$1 = cljs.core.__destructure_map.call(null,map__34783);
var test__$1 = cljs.core.get.call(null,map__34783__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__34783__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__34783__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__34783__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__34783__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__34784){
var map__34785 = p__34784;
var map__34785__$1 = cljs.core.__destructure_map.call(null,map__34785);
var v = cljs.core.get.call(null,map__34785__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__34785__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__34785__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__34785__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__34786_34814 = cljs.core.seq.call(null,nodes);
var chunk__34787_34815 = null;
var count__34788_34816 = (0);
var i__34789_34817 = (0);
while(true){
if((i__34789_34817 < count__34788_34816)){
var map__34802_34818 = cljs.core._nth.call(null,chunk__34787_34815,i__34789_34817);
var map__34802_34819__$1 = cljs.core.__destructure_map.call(null,map__34802_34818);
var ts_34820 = cljs.core.get.call(null,map__34802_34819__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__34803_34821 = cljs.core.get.call(null,map__34802_34819__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__34803_34822__$1 = cljs.core.__destructure_map.call(null,map__34803_34821);
var then_34823 = cljs.core.get.call(null,map__34803_34822__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__34804_34824 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_34820));
var chunk__34805_34825 = null;
var count__34806_34826 = (0);
var i__34807_34827 = (0);
while(true){
if((i__34807_34827 < count__34806_34826)){
var test_34828__$1 = cljs.core._nth.call(null,chunk__34805_34825,i__34807_34827);
cljs.compiler.emitln.call(null,"case ",test_34828__$1,":");


var G__34829 = seq__34804_34824;
var G__34830 = chunk__34805_34825;
var G__34831 = count__34806_34826;
var G__34832 = (i__34807_34827 + (1));
seq__34804_34824 = G__34829;
chunk__34805_34825 = G__34830;
count__34806_34826 = G__34831;
i__34807_34827 = G__34832;
continue;
} else {
var temp__5804__auto___34833 = cljs.core.seq.call(null,seq__34804_34824);
if(temp__5804__auto___34833){
var seq__34804_34834__$1 = temp__5804__auto___34833;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34804_34834__$1)){
var c__5568__auto___34835 = cljs.core.chunk_first.call(null,seq__34804_34834__$1);
var G__34836 = cljs.core.chunk_rest.call(null,seq__34804_34834__$1);
var G__34837 = c__5568__auto___34835;
var G__34838 = cljs.core.count.call(null,c__5568__auto___34835);
var G__34839 = (0);
seq__34804_34824 = G__34836;
chunk__34805_34825 = G__34837;
count__34806_34826 = G__34838;
i__34807_34827 = G__34839;
continue;
} else {
var test_34840__$1 = cljs.core.first.call(null,seq__34804_34834__$1);
cljs.compiler.emitln.call(null,"case ",test_34840__$1,":");


var G__34841 = cljs.core.next.call(null,seq__34804_34834__$1);
var G__34842 = null;
var G__34843 = (0);
var G__34844 = (0);
seq__34804_34824 = G__34841;
chunk__34805_34825 = G__34842;
count__34806_34826 = G__34843;
i__34807_34827 = G__34844;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_34823);
} else {
cljs.compiler.emitln.call(null,then_34823);
}

cljs.compiler.emitln.call(null,"break;");


var G__34845 = seq__34786_34814;
var G__34846 = chunk__34787_34815;
var G__34847 = count__34788_34816;
var G__34848 = (i__34789_34817 + (1));
seq__34786_34814 = G__34845;
chunk__34787_34815 = G__34846;
count__34788_34816 = G__34847;
i__34789_34817 = G__34848;
continue;
} else {
var temp__5804__auto___34849 = cljs.core.seq.call(null,seq__34786_34814);
if(temp__5804__auto___34849){
var seq__34786_34850__$1 = temp__5804__auto___34849;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34786_34850__$1)){
var c__5568__auto___34851 = cljs.core.chunk_first.call(null,seq__34786_34850__$1);
var G__34852 = cljs.core.chunk_rest.call(null,seq__34786_34850__$1);
var G__34853 = c__5568__auto___34851;
var G__34854 = cljs.core.count.call(null,c__5568__auto___34851);
var G__34855 = (0);
seq__34786_34814 = G__34852;
chunk__34787_34815 = G__34853;
count__34788_34816 = G__34854;
i__34789_34817 = G__34855;
continue;
} else {
var map__34808_34856 = cljs.core.first.call(null,seq__34786_34850__$1);
var map__34808_34857__$1 = cljs.core.__destructure_map.call(null,map__34808_34856);
var ts_34858 = cljs.core.get.call(null,map__34808_34857__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__34809_34859 = cljs.core.get.call(null,map__34808_34857__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__34809_34860__$1 = cljs.core.__destructure_map.call(null,map__34809_34859);
var then_34861 = cljs.core.get.call(null,map__34809_34860__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__34810_34862 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_34858));
var chunk__34811_34863 = null;
var count__34812_34864 = (0);
var i__34813_34865 = (0);
while(true){
if((i__34813_34865 < count__34812_34864)){
var test_34866__$1 = cljs.core._nth.call(null,chunk__34811_34863,i__34813_34865);
cljs.compiler.emitln.call(null,"case ",test_34866__$1,":");


var G__34867 = seq__34810_34862;
var G__34868 = chunk__34811_34863;
var G__34869 = count__34812_34864;
var G__34870 = (i__34813_34865 + (1));
seq__34810_34862 = G__34867;
chunk__34811_34863 = G__34868;
count__34812_34864 = G__34869;
i__34813_34865 = G__34870;
continue;
} else {
var temp__5804__auto___34871__$1 = cljs.core.seq.call(null,seq__34810_34862);
if(temp__5804__auto___34871__$1){
var seq__34810_34872__$1 = temp__5804__auto___34871__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34810_34872__$1)){
var c__5568__auto___34873 = cljs.core.chunk_first.call(null,seq__34810_34872__$1);
var G__34874 = cljs.core.chunk_rest.call(null,seq__34810_34872__$1);
var G__34875 = c__5568__auto___34873;
var G__34876 = cljs.core.count.call(null,c__5568__auto___34873);
var G__34877 = (0);
seq__34810_34862 = G__34874;
chunk__34811_34863 = G__34875;
count__34812_34864 = G__34876;
i__34813_34865 = G__34877;
continue;
} else {
var test_34878__$1 = cljs.core.first.call(null,seq__34810_34872__$1);
cljs.compiler.emitln.call(null,"case ",test_34878__$1,":");


var G__34879 = cljs.core.next.call(null,seq__34810_34872__$1);
var G__34880 = null;
var G__34881 = (0);
var G__34882 = (0);
seq__34810_34862 = G__34879;
chunk__34811_34863 = G__34880;
count__34812_34864 = G__34881;
i__34813_34865 = G__34882;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_34861);
} else {
cljs.compiler.emitln.call(null,then_34861);
}

cljs.compiler.emitln.call(null,"break;");


var G__34883 = cljs.core.next.call(null,seq__34786_34850__$1);
var G__34884 = null;
var G__34885 = (0);
var G__34886 = (0);
seq__34786_34814 = G__34883;
chunk__34787_34815 = G__34884;
count__34788_34816 = G__34885;
i__34789_34817 = G__34886;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__34887){
var map__34888 = p__34887;
var map__34888__$1 = cljs.core.__destructure_map.call(null,map__34888);
var throw$ = cljs.core.get.call(null,map__34888__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__34888__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__34890 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__34890,(0),null);
var rstr = cljs.core.nth.call(null,vec__34890,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,(function (p1__34889_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__34889_SHARP_);
}),clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__34893 = ["function(",clojure.string.join.call(null,",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__34893,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__34893;
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
return ["{",clojure.string.join.call(null,"|",cljs.core.map.call(null,(function (p1__34894_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__34894_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__34895 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__34896 = cljs.core.seq.call(null,vec__34895);
var first__34897 = cljs.core.first.call(null,seq__34896);
var seq__34896__$1 = cljs.core.next.call(null,seq__34896);
var p = first__34897;
var first__34897__$1 = cljs.core.first.call(null,seq__34896__$1);
var seq__34896__$2 = cljs.core.next.call(null,seq__34896__$1);
var ts = first__34897__$1;
var first__34897__$2 = cljs.core.first.call(null,seq__34896__$2);
var seq__34896__$3 = cljs.core.next.call(null,seq__34896__$2);
var n = first__34897__$2;
var xs = seq__34896__$3;
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
var vec__34898 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__34899 = cljs.core.seq.call(null,vec__34898);
var first__34900 = cljs.core.first.call(null,seq__34899);
var seq__34899__$1 = cljs.core.next.call(null,seq__34899);
var p = first__34900;
var first__34900__$1 = cljs.core.first.call(null,seq__34899__$1);
var seq__34899__$2 = cljs.core.next.call(null,seq__34899__$1);
var ts = first__34900__$1;
var xs = seq__34899__$2;
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
var G__34903 = arguments.length;
switch (G__34903) {
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
var vec__34911 = cljs.core.map.call(null,(function (p1__34901_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__34901_SHARP_);
} else {
return p1__34901_SHARP_;
}
}),clojure.string.split_lines.call(null,e));
var seq__34912 = cljs.core.seq.call(null,vec__34911);
var first__34913 = cljs.core.first.call(null,seq__34912);
var seq__34912__$1 = cljs.core.next.call(null,seq__34912);
var x = first__34913;
var ys = seq__34912__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__34914 = cljs.core.seq.call(null,ys);
var chunk__34915 = null;
var count__34916 = (0);
var i__34917 = (0);
while(true){
if((i__34917 < count__34916)){
var next_line = cljs.core._nth.call(null,chunk__34915,i__34917);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__34923 = seq__34914;
var G__34924 = chunk__34915;
var G__34925 = count__34916;
var G__34926 = (i__34917 + (1));
seq__34914 = G__34923;
chunk__34915 = G__34924;
count__34916 = G__34925;
i__34917 = G__34926;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__34914);
if(temp__5804__auto__){
var seq__34914__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34914__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__34914__$1);
var G__34927 = cljs.core.chunk_rest.call(null,seq__34914__$1);
var G__34928 = c__5568__auto__;
var G__34929 = cljs.core.count.call(null,c__5568__auto__);
var G__34930 = (0);
seq__34914 = G__34927;
chunk__34915 = G__34928;
count__34916 = G__34929;
i__34917 = G__34930;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__34914__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__34931 = cljs.core.next.call(null,seq__34914__$1);
var G__34932 = null;
var G__34933 = (0);
var G__34934 = (0);
seq__34914 = G__34931;
chunk__34915 = G__34932;
count__34916 = G__34933;
i__34917 = G__34934;
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

var seq__34918_34935 = cljs.core.seq.call(null,docs__$2);
var chunk__34919_34936 = null;
var count__34920_34937 = (0);
var i__34921_34938 = (0);
while(true){
if((i__34921_34938 < count__34920_34937)){
var e_34939 = cljs.core._nth.call(null,chunk__34919_34936,i__34921_34938);
if(cljs.core.truth_(e_34939)){
print_comment_lines.call(null,e_34939);
} else {
}


var G__34940 = seq__34918_34935;
var G__34941 = chunk__34919_34936;
var G__34942 = count__34920_34937;
var G__34943 = (i__34921_34938 + (1));
seq__34918_34935 = G__34940;
chunk__34919_34936 = G__34941;
count__34920_34937 = G__34942;
i__34921_34938 = G__34943;
continue;
} else {
var temp__5804__auto___34944 = cljs.core.seq.call(null,seq__34918_34935);
if(temp__5804__auto___34944){
var seq__34918_34945__$1 = temp__5804__auto___34944;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34918_34945__$1)){
var c__5568__auto___34946 = cljs.core.chunk_first.call(null,seq__34918_34945__$1);
var G__34947 = cljs.core.chunk_rest.call(null,seq__34918_34945__$1);
var G__34948 = c__5568__auto___34946;
var G__34949 = cljs.core.count.call(null,c__5568__auto___34946);
var G__34950 = (0);
seq__34918_34935 = G__34947;
chunk__34919_34936 = G__34948;
count__34920_34937 = G__34949;
i__34921_34938 = G__34950;
continue;
} else {
var e_34951 = cljs.core.first.call(null,seq__34918_34945__$1);
if(cljs.core.truth_(e_34951)){
print_comment_lines.call(null,e_34951);
} else {
}


var G__34952 = cljs.core.next.call(null,seq__34918_34945__$1);
var G__34953 = null;
var G__34954 = (0);
var G__34955 = (0);
seq__34918_34935 = G__34952;
chunk__34919_34936 = G__34953;
count__34920_34937 = G__34954;
i__34921_34938 = G__34955;
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
var and__5043__auto__ = cljs.core.some.call(null,(function (p1__34957_SHARP_){
return goog.string.startsWith(p1__34957_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__34958){
var map__34959 = p__34958;
var map__34959__$1 = cljs.core.__destructure_map.call(null,map__34959);
var doc = cljs.core.get.call(null,map__34959__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__34959__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test__$1 = cljs.core.get.call(null,map__34959__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.call(null,map__34959__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.call(null,map__34959__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__34959__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__34959__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__34959__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__34959__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__34959__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__34960){
var map__34961 = p__34960;
var map__34961__$1 = cljs.core.__destructure_map.call(null,map__34961);
var name = cljs.core.get.call(null,map__34961__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__34961__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__34961__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__34962_34986 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__34963_34987 = null;
var count__34964_34988 = (0);
var i__34965_34989 = (0);
while(true){
if((i__34965_34989 < count__34964_34988)){
var vec__34972_34990 = cljs.core._nth.call(null,chunk__34963_34987,i__34965_34989);
var i_34991 = cljs.core.nth.call(null,vec__34972_34990,(0),null);
var param_34992 = cljs.core.nth.call(null,vec__34972_34990,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_34992);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__34993 = seq__34962_34986;
var G__34994 = chunk__34963_34987;
var G__34995 = count__34964_34988;
var G__34996 = (i__34965_34989 + (1));
seq__34962_34986 = G__34993;
chunk__34963_34987 = G__34994;
count__34964_34988 = G__34995;
i__34965_34989 = G__34996;
continue;
} else {
var temp__5804__auto___34997 = cljs.core.seq.call(null,seq__34962_34986);
if(temp__5804__auto___34997){
var seq__34962_34998__$1 = temp__5804__auto___34997;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34962_34998__$1)){
var c__5568__auto___34999 = cljs.core.chunk_first.call(null,seq__34962_34998__$1);
var G__35000 = cljs.core.chunk_rest.call(null,seq__34962_34998__$1);
var G__35001 = c__5568__auto___34999;
var G__35002 = cljs.core.count.call(null,c__5568__auto___34999);
var G__35003 = (0);
seq__34962_34986 = G__35000;
chunk__34963_34987 = G__35001;
count__34964_34988 = G__35002;
i__34965_34989 = G__35003;
continue;
} else {
var vec__34975_35004 = cljs.core.first.call(null,seq__34962_34998__$1);
var i_35005 = cljs.core.nth.call(null,vec__34975_35004,(0),null);
var param_35006 = cljs.core.nth.call(null,vec__34975_35004,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_35006);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__35007 = cljs.core.next.call(null,seq__34962_34998__$1);
var G__35008 = null;
var G__35009 = (0);
var G__35010 = (0);
seq__34962_34986 = G__35007;
chunk__34963_34987 = G__35008;
count__34964_34988 = G__35009;
i__34965_34989 = G__35010;
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

var seq__34978_35011 = cljs.core.seq.call(null,params);
var chunk__34979_35012 = null;
var count__34980_35013 = (0);
var i__34981_35014 = (0);
while(true){
if((i__34981_35014 < count__34980_35013)){
var param_35015 = cljs.core._nth.call(null,chunk__34979_35012,i__34981_35014);
cljs.compiler.emit.call(null,param_35015);

if(cljs.core._EQ_.call(null,param_35015,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__35016 = seq__34978_35011;
var G__35017 = chunk__34979_35012;
var G__35018 = count__34980_35013;
var G__35019 = (i__34981_35014 + (1));
seq__34978_35011 = G__35016;
chunk__34979_35012 = G__35017;
count__34980_35013 = G__35018;
i__34981_35014 = G__35019;
continue;
} else {
var temp__5804__auto___35020 = cljs.core.seq.call(null,seq__34978_35011);
if(temp__5804__auto___35020){
var seq__34978_35021__$1 = temp__5804__auto___35020;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34978_35021__$1)){
var c__5568__auto___35022 = cljs.core.chunk_first.call(null,seq__34978_35021__$1);
var G__35023 = cljs.core.chunk_rest.call(null,seq__34978_35021__$1);
var G__35024 = c__5568__auto___35022;
var G__35025 = cljs.core.count.call(null,c__5568__auto___35022);
var G__35026 = (0);
seq__34978_35011 = G__35023;
chunk__34979_35012 = G__35024;
count__34980_35013 = G__35025;
i__34981_35014 = G__35026;
continue;
} else {
var param_35027 = cljs.core.first.call(null,seq__34978_35021__$1);
cljs.compiler.emit.call(null,param_35027);

if(cljs.core._EQ_.call(null,param_35027,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__35028 = cljs.core.next.call(null,seq__34978_35021__$1);
var G__35029 = null;
var G__35030 = (0);
var G__35031 = (0);
seq__34978_35011 = G__35028;
chunk__34979_35012 = G__35029;
count__34980_35013 = G__35030;
i__34981_35014 = G__35031;
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

var seq__34982_35032 = cljs.core.seq.call(null,params);
var chunk__34983_35033 = null;
var count__34984_35034 = (0);
var i__34985_35035 = (0);
while(true){
if((i__34985_35035 < count__34984_35034)){
var param_35036 = cljs.core._nth.call(null,chunk__34983_35033,i__34985_35035);
cljs.compiler.emit.call(null,param_35036);

if(cljs.core._EQ_.call(null,param_35036,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__35037 = seq__34982_35032;
var G__35038 = chunk__34983_35033;
var G__35039 = count__34984_35034;
var G__35040 = (i__34985_35035 + (1));
seq__34982_35032 = G__35037;
chunk__34983_35033 = G__35038;
count__34984_35034 = G__35039;
i__34985_35035 = G__35040;
continue;
} else {
var temp__5804__auto___35041 = cljs.core.seq.call(null,seq__34982_35032);
if(temp__5804__auto___35041){
var seq__34982_35042__$1 = temp__5804__auto___35041;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34982_35042__$1)){
var c__5568__auto___35043 = cljs.core.chunk_first.call(null,seq__34982_35042__$1);
var G__35044 = cljs.core.chunk_rest.call(null,seq__34982_35042__$1);
var G__35045 = c__5568__auto___35043;
var G__35046 = cljs.core.count.call(null,c__5568__auto___35043);
var G__35047 = (0);
seq__34982_35032 = G__35044;
chunk__34983_35033 = G__35045;
count__34984_35034 = G__35046;
i__34985_35035 = G__35047;
continue;
} else {
var param_35048 = cljs.core.first.call(null,seq__34982_35042__$1);
cljs.compiler.emit.call(null,param_35048);

if(cljs.core._EQ_.call(null,param_35048,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__35049 = cljs.core.next.call(null,seq__34982_35042__$1);
var G__35050 = null;
var G__35051 = (0);
var G__35052 = (0);
seq__34982_35032 = G__35049;
chunk__34983_35033 = G__35050;
count__34984_35034 = G__35051;
i__34985_35035 = G__35052;
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
var seq__35053 = cljs.core.seq.call(null,params);
var chunk__35054 = null;
var count__35055 = (0);
var i__35056 = (0);
while(true){
if((i__35056 < count__35055)){
var param = cljs.core._nth.call(null,chunk__35054,i__35056);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__35057 = seq__35053;
var G__35058 = chunk__35054;
var G__35059 = count__35055;
var G__35060 = (i__35056 + (1));
seq__35053 = G__35057;
chunk__35054 = G__35058;
count__35055 = G__35059;
i__35056 = G__35060;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__35053);
if(temp__5804__auto__){
var seq__35053__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35053__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__35053__$1);
var G__35061 = cljs.core.chunk_rest.call(null,seq__35053__$1);
var G__35062 = c__5568__auto__;
var G__35063 = cljs.core.count.call(null,c__5568__auto__);
var G__35064 = (0);
seq__35053 = G__35061;
chunk__35054 = G__35062;
count__35055 = G__35063;
i__35056 = G__35064;
continue;
} else {
var param = cljs.core.first.call(null,seq__35053__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__35065 = cljs.core.next.call(null,seq__35053__$1);
var G__35066 = null;
var G__35067 = (0);
var G__35068 = (0);
seq__35053 = G__35065;
chunk__35054 = G__35066;
count__35055 = G__35067;
i__35056 = G__35068;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__35069){
var map__35070 = p__35069;
var map__35070__$1 = cljs.core.__destructure_map.call(null,map__35070);
var expr = cljs.core.get.call(null,map__35070__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__35070__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__35070__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__35070__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__35070__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__35070__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__35071){
var map__35072 = p__35071;
var map__35072__$1 = cljs.core.__destructure_map.call(null,map__35072);
var f = map__35072__$1;
var expr = cljs.core.get.call(null,map__35072__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__35072__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__35072__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__35072__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__35072__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__35072__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__35072__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__35072__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__9256__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_35081__$1 = (function (){var or__5045__auto__ = name;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_35082 = cljs.compiler.munge.call(null,name_35081__$1);
var delegate_name_35083 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_35082),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_35083," = function (");

var seq__35073_35084 = cljs.core.seq.call(null,params);
var chunk__35074_35085 = null;
var count__35075_35086 = (0);
var i__35076_35087 = (0);
while(true){
if((i__35076_35087 < count__35075_35086)){
var param_35088 = cljs.core._nth.call(null,chunk__35074_35085,i__35076_35087);
cljs.compiler.emit.call(null,param_35088);

if(cljs.core._EQ_.call(null,param_35088,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__35089 = seq__35073_35084;
var G__35090 = chunk__35074_35085;
var G__35091 = count__35075_35086;
var G__35092 = (i__35076_35087 + (1));
seq__35073_35084 = G__35089;
chunk__35074_35085 = G__35090;
count__35075_35086 = G__35091;
i__35076_35087 = G__35092;
continue;
} else {
var temp__5804__auto___35093 = cljs.core.seq.call(null,seq__35073_35084);
if(temp__5804__auto___35093){
var seq__35073_35094__$1 = temp__5804__auto___35093;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35073_35094__$1)){
var c__5568__auto___35095 = cljs.core.chunk_first.call(null,seq__35073_35094__$1);
var G__35096 = cljs.core.chunk_rest.call(null,seq__35073_35094__$1);
var G__35097 = c__5568__auto___35095;
var G__35098 = cljs.core.count.call(null,c__5568__auto___35095);
var G__35099 = (0);
seq__35073_35084 = G__35096;
chunk__35074_35085 = G__35097;
count__35075_35086 = G__35098;
i__35076_35087 = G__35099;
continue;
} else {
var param_35100 = cljs.core.first.call(null,seq__35073_35094__$1);
cljs.compiler.emit.call(null,param_35100);

if(cljs.core._EQ_.call(null,param_35100,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__35101 = cljs.core.next.call(null,seq__35073_35094__$1);
var G__35102 = null;
var G__35103 = (0);
var G__35104 = (0);
seq__35073_35084 = G__35101;
chunk__35074_35085 = G__35102;
count__35075_35086 = G__35103;
i__35076_35087 = G__35104;
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

cljs.compiler.emitln.call(null,"var ",mname_35082," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_35105 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_35105,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_35083,".call(this,");

var seq__35077_35106 = cljs.core.seq.call(null,params);
var chunk__35078_35107 = null;
var count__35079_35108 = (0);
var i__35080_35109 = (0);
while(true){
if((i__35080_35109 < count__35079_35108)){
var param_35110 = cljs.core._nth.call(null,chunk__35078_35107,i__35080_35109);
cljs.compiler.emit.call(null,param_35110);

if(cljs.core._EQ_.call(null,param_35110,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__35111 = seq__35077_35106;
var G__35112 = chunk__35078_35107;
var G__35113 = count__35079_35108;
var G__35114 = (i__35080_35109 + (1));
seq__35077_35106 = G__35111;
chunk__35078_35107 = G__35112;
count__35079_35108 = G__35113;
i__35080_35109 = G__35114;
continue;
} else {
var temp__5804__auto___35115 = cljs.core.seq.call(null,seq__35077_35106);
if(temp__5804__auto___35115){
var seq__35077_35116__$1 = temp__5804__auto___35115;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35077_35116__$1)){
var c__5568__auto___35117 = cljs.core.chunk_first.call(null,seq__35077_35116__$1);
var G__35118 = cljs.core.chunk_rest.call(null,seq__35077_35116__$1);
var G__35119 = c__5568__auto___35117;
var G__35120 = cljs.core.count.call(null,c__5568__auto___35117);
var G__35121 = (0);
seq__35077_35106 = G__35118;
chunk__35078_35107 = G__35119;
count__35079_35108 = G__35120;
i__35080_35109 = G__35121;
continue;
} else {
var param_35122 = cljs.core.first.call(null,seq__35077_35116__$1);
cljs.compiler.emit.call(null,param_35122);

if(cljs.core._EQ_.call(null,param_35122,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__35123 = cljs.core.next.call(null,seq__35077_35116__$1);
var G__35124 = null;
var G__35125 = (0);
var G__35126 = (0);
seq__35077_35106 = G__35123;
chunk__35078_35107 = G__35124;
count__35079_35108 = G__35125;
i__35080_35109 = G__35126;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_35082,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_35082,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_35081__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_35082,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_35083,";");

cljs.compiler.emitln.call(null,"return ",mname_35082,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__35130){
var map__35131 = p__35130;
var map__35131__$1 = cljs.core.__destructure_map.call(null,map__35131);
var variadic = cljs.core.get.call(null,map__35131__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__35131__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__35131__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__35131__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__35131__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__35131__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.call(null,map__35131__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.call(null,map__35131__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,(function (p1__35127_SHARP_){
var and__5043__auto__ = p1__35127_SHARP_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__35127_SHARP_));
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
var name_35183__$1 = (function (){var or__5045__auto__ = name;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_35184 = cljs.compiler.munge.call(null,name_35183__$1);
var maxparams_35185 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_35186 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_35184),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_35187 = cljs.core.sort_by.call(null,(function (p1__35128_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__35128_SHARP_)));
}),cljs.core.seq.call(null,mmap_35186));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_35184," = null;");

var seq__35132_35188 = cljs.core.seq.call(null,ms_35187);
var chunk__35133_35189 = null;
var count__35134_35190 = (0);
var i__35135_35191 = (0);
while(true){
if((i__35135_35191 < count__35134_35190)){
var vec__35142_35192 = cljs.core._nth.call(null,chunk__35133_35189,i__35135_35191);
var n_35193 = cljs.core.nth.call(null,vec__35142_35192,(0),null);
var meth_35194 = cljs.core.nth.call(null,vec__35142_35192,(1),null);
cljs.compiler.emits.call(null,"var ",n_35193," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_35194))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_35194);
} else {
cljs.compiler.emit_fn_method.call(null,meth_35194);
}

cljs.compiler.emitln.call(null,";");


var G__35195 = seq__35132_35188;
var G__35196 = chunk__35133_35189;
var G__35197 = count__35134_35190;
var G__35198 = (i__35135_35191 + (1));
seq__35132_35188 = G__35195;
chunk__35133_35189 = G__35196;
count__35134_35190 = G__35197;
i__35135_35191 = G__35198;
continue;
} else {
var temp__5804__auto___35199 = cljs.core.seq.call(null,seq__35132_35188);
if(temp__5804__auto___35199){
var seq__35132_35200__$1 = temp__5804__auto___35199;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35132_35200__$1)){
var c__5568__auto___35201 = cljs.core.chunk_first.call(null,seq__35132_35200__$1);
var G__35202 = cljs.core.chunk_rest.call(null,seq__35132_35200__$1);
var G__35203 = c__5568__auto___35201;
var G__35204 = cljs.core.count.call(null,c__5568__auto___35201);
var G__35205 = (0);
seq__35132_35188 = G__35202;
chunk__35133_35189 = G__35203;
count__35134_35190 = G__35204;
i__35135_35191 = G__35205;
continue;
} else {
var vec__35145_35206 = cljs.core.first.call(null,seq__35132_35200__$1);
var n_35207 = cljs.core.nth.call(null,vec__35145_35206,(0),null);
var meth_35208 = cljs.core.nth.call(null,vec__35145_35206,(1),null);
cljs.compiler.emits.call(null,"var ",n_35207," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_35208))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_35208);
} else {
cljs.compiler.emit_fn_method.call(null,meth_35208);
}

cljs.compiler.emitln.call(null,";");


var G__35209 = cljs.core.next.call(null,seq__35132_35200__$1);
var G__35210 = null;
var G__35211 = (0);
var G__35212 = (0);
seq__35132_35188 = G__35209;
chunk__35133_35189 = G__35210;
count__35134_35190 = G__35211;
i__35135_35191 = G__35212;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_35184," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_35185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_35185)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_35185));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__35148_35213 = cljs.core.seq.call(null,ms_35187);
var chunk__35149_35214 = null;
var count__35150_35215 = (0);
var i__35151_35216 = (0);
while(true){
if((i__35151_35216 < count__35150_35215)){
var vec__35158_35217 = cljs.core._nth.call(null,chunk__35149_35214,i__35151_35216);
var n_35218 = cljs.core.nth.call(null,vec__35158_35217,(0),null);
var meth_35219 = cljs.core.nth.call(null,vec__35158_35217,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_35219))){
cljs.compiler.emitln.call(null,"default:");

var restarg_35220 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_35220," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_35221 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_35220," = new cljs.core.IndexedSeq(",a_35221,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_35218,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_35185)),(((cljs.core.count.call(null,maxparams_35185) > (1)))?", ":null),restarg_35220,");");
} else {
var pcnt_35222 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_35219));
cljs.compiler.emitln.call(null,"case ",pcnt_35222,":");

cljs.compiler.emitln.call(null,"return ",n_35218,".call(this",(((pcnt_35222 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_35222,maxparams_35185)),null,(1),null)),(2),null))),");");
}


var G__35223 = seq__35148_35213;
var G__35224 = chunk__35149_35214;
var G__35225 = count__35150_35215;
var G__35226 = (i__35151_35216 + (1));
seq__35148_35213 = G__35223;
chunk__35149_35214 = G__35224;
count__35150_35215 = G__35225;
i__35151_35216 = G__35226;
continue;
} else {
var temp__5804__auto___35227 = cljs.core.seq.call(null,seq__35148_35213);
if(temp__5804__auto___35227){
var seq__35148_35228__$1 = temp__5804__auto___35227;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35148_35228__$1)){
var c__5568__auto___35229 = cljs.core.chunk_first.call(null,seq__35148_35228__$1);
var G__35230 = cljs.core.chunk_rest.call(null,seq__35148_35228__$1);
var G__35231 = c__5568__auto___35229;
var G__35232 = cljs.core.count.call(null,c__5568__auto___35229);
var G__35233 = (0);
seq__35148_35213 = G__35230;
chunk__35149_35214 = G__35231;
count__35150_35215 = G__35232;
i__35151_35216 = G__35233;
continue;
} else {
var vec__35161_35234 = cljs.core.first.call(null,seq__35148_35228__$1);
var n_35235 = cljs.core.nth.call(null,vec__35161_35234,(0),null);
var meth_35236 = cljs.core.nth.call(null,vec__35161_35234,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_35236))){
cljs.compiler.emitln.call(null,"default:");

var restarg_35237 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_35237," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_35238 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_35237," = new cljs.core.IndexedSeq(",a_35238,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_35235,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_35185)),(((cljs.core.count.call(null,maxparams_35185) > (1)))?", ":null),restarg_35237,");");
} else {
var pcnt_35239 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_35236));
cljs.compiler.emitln.call(null,"case ",pcnt_35239,":");

cljs.compiler.emitln.call(null,"return ",n_35235,".call(this",(((pcnt_35239 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_35239,maxparams_35185)),null,(1),null)),(2),null))),");");
}


var G__35240 = cljs.core.next.call(null,seq__35148_35228__$1);
var G__35241 = null;
var G__35242 = (0);
var G__35243 = (0);
seq__35148_35213 = G__35240;
chunk__35149_35214 = G__35241;
count__35150_35215 = G__35242;
i__35151_35216 = G__35243;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_35244 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_35187)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_35244,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_35184,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_35184,".cljs$lang$applyTo = ",cljs.core.some.call(null,(function (p1__35129_SHARP_){
var vec__35164 = p1__35129_SHARP_;
var n = cljs.core.nth.call(null,vec__35164,(0),null);
var m = cljs.core.nth.call(null,vec__35164,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_35187),".cljs$lang$applyTo;");
} else {
}

var seq__35167_35245 = cljs.core.seq.call(null,ms_35187);
var chunk__35168_35246 = null;
var count__35169_35247 = (0);
var i__35170_35248 = (0);
while(true){
if((i__35170_35248 < count__35169_35247)){
var vec__35177_35249 = cljs.core._nth.call(null,chunk__35168_35246,i__35170_35248);
var n_35250 = cljs.core.nth.call(null,vec__35177_35249,(0),null);
var meth_35251 = cljs.core.nth.call(null,vec__35177_35249,(1),null);
var c_35252 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_35251));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_35251))){
cljs.compiler.emitln.call(null,mname_35184,".cljs$core$IFn$_invoke$arity$variadic = ",n_35250,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_35184,".cljs$core$IFn$_invoke$arity$",c_35252," = ",n_35250,";");
}


var G__35253 = seq__35167_35245;
var G__35254 = chunk__35168_35246;
var G__35255 = count__35169_35247;
var G__35256 = (i__35170_35248 + (1));
seq__35167_35245 = G__35253;
chunk__35168_35246 = G__35254;
count__35169_35247 = G__35255;
i__35170_35248 = G__35256;
continue;
} else {
var temp__5804__auto___35257 = cljs.core.seq.call(null,seq__35167_35245);
if(temp__5804__auto___35257){
var seq__35167_35258__$1 = temp__5804__auto___35257;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35167_35258__$1)){
var c__5568__auto___35259 = cljs.core.chunk_first.call(null,seq__35167_35258__$1);
var G__35260 = cljs.core.chunk_rest.call(null,seq__35167_35258__$1);
var G__35261 = c__5568__auto___35259;
var G__35262 = cljs.core.count.call(null,c__5568__auto___35259);
var G__35263 = (0);
seq__35167_35245 = G__35260;
chunk__35168_35246 = G__35261;
count__35169_35247 = G__35262;
i__35170_35248 = G__35263;
continue;
} else {
var vec__35180_35264 = cljs.core.first.call(null,seq__35167_35258__$1);
var n_35265 = cljs.core.nth.call(null,vec__35180_35264,(0),null);
var meth_35266 = cljs.core.nth.call(null,vec__35180_35264,(1),null);
var c_35267 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_35266));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_35266))){
cljs.compiler.emitln.call(null,mname_35184,".cljs$core$IFn$_invoke$arity$variadic = ",n_35265,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_35184,".cljs$core$IFn$_invoke$arity$",c_35267," = ",n_35265,";");
}


var G__35268 = cljs.core.next.call(null,seq__35167_35258__$1);
var G__35269 = null;
var G__35270 = (0);
var G__35271 = (0);
seq__35167_35245 = G__35268;
chunk__35168_35246 = G__35269;
count__35169_35247 = G__35270;
i__35170_35248 = G__35271;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_35184,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__35272){
var map__35273 = p__35272;
var map__35273__$1 = cljs.core.__destructure_map.call(null,map__35273);
var statements = cljs.core.get.call(null,map__35273__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__35273__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__35273__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__35274_35278 = cljs.core.seq.call(null,statements);
var chunk__35275_35279 = null;
var count__35276_35280 = (0);
var i__35277_35281 = (0);
while(true){
if((i__35277_35281 < count__35276_35280)){
var s_35282 = cljs.core._nth.call(null,chunk__35275_35279,i__35277_35281);
cljs.compiler.emitln.call(null,s_35282);


var G__35283 = seq__35274_35278;
var G__35284 = chunk__35275_35279;
var G__35285 = count__35276_35280;
var G__35286 = (i__35277_35281 + (1));
seq__35274_35278 = G__35283;
chunk__35275_35279 = G__35284;
count__35276_35280 = G__35285;
i__35277_35281 = G__35286;
continue;
} else {
var temp__5804__auto___35287 = cljs.core.seq.call(null,seq__35274_35278);
if(temp__5804__auto___35287){
var seq__35274_35288__$1 = temp__5804__auto___35287;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35274_35288__$1)){
var c__5568__auto___35289 = cljs.core.chunk_first.call(null,seq__35274_35288__$1);
var G__35290 = cljs.core.chunk_rest.call(null,seq__35274_35288__$1);
var G__35291 = c__5568__auto___35289;
var G__35292 = cljs.core.count.call(null,c__5568__auto___35289);
var G__35293 = (0);
seq__35274_35278 = G__35290;
chunk__35275_35279 = G__35291;
count__35276_35280 = G__35292;
i__35277_35281 = G__35293;
continue;
} else {
var s_35294 = cljs.core.first.call(null,seq__35274_35288__$1);
cljs.compiler.emitln.call(null,s_35294);


var G__35295 = cljs.core.next.call(null,seq__35274_35288__$1);
var G__35296 = null;
var G__35297 = (0);
var G__35298 = (0);
seq__35274_35278 = G__35295;
chunk__35275_35279 = G__35296;
count__35276_35280 = G__35297;
i__35277_35281 = G__35298;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__35299){
var map__35300 = p__35299;
var map__35300__$1 = cljs.core.__destructure_map.call(null,map__35300);
var try$ = cljs.core.get.call(null,map__35300__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__35300__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__35300__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__35300__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__35300__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__35301,is_loop){
var map__35302 = p__35301;
var map__35302__$1 = cljs.core.__destructure_map.call(null,map__35302);
var expr = cljs.core.get.call(null,map__35302__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__35302__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__35302__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__35303_35313 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__35304_35314 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,(function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__35304_35314);

try{var seq__35305_35315 = cljs.core.seq.call(null,bindings);
var chunk__35306_35316 = null;
var count__35307_35317 = (0);
var i__35308_35318 = (0);
while(true){
if((i__35308_35318 < count__35307_35317)){
var map__35311_35319 = cljs.core._nth.call(null,chunk__35306_35316,i__35308_35318);
var map__35311_35320__$1 = cljs.core.__destructure_map.call(null,map__35311_35319);
var binding_35321 = map__35311_35320__$1;
var init_35322 = cljs.core.get.call(null,map__35311_35320__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_35321);

cljs.compiler.emitln.call(null," = ",init_35322,";");


var G__35323 = seq__35305_35315;
var G__35324 = chunk__35306_35316;
var G__35325 = count__35307_35317;
var G__35326 = (i__35308_35318 + (1));
seq__35305_35315 = G__35323;
chunk__35306_35316 = G__35324;
count__35307_35317 = G__35325;
i__35308_35318 = G__35326;
continue;
} else {
var temp__5804__auto___35327 = cljs.core.seq.call(null,seq__35305_35315);
if(temp__5804__auto___35327){
var seq__35305_35328__$1 = temp__5804__auto___35327;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35305_35328__$1)){
var c__5568__auto___35329 = cljs.core.chunk_first.call(null,seq__35305_35328__$1);
var G__35330 = cljs.core.chunk_rest.call(null,seq__35305_35328__$1);
var G__35331 = c__5568__auto___35329;
var G__35332 = cljs.core.count.call(null,c__5568__auto___35329);
var G__35333 = (0);
seq__35305_35315 = G__35330;
chunk__35306_35316 = G__35331;
count__35307_35317 = G__35332;
i__35308_35318 = G__35333;
continue;
} else {
var map__35312_35334 = cljs.core.first.call(null,seq__35305_35328__$1);
var map__35312_35335__$1 = cljs.core.__destructure_map.call(null,map__35312_35334);
var binding_35336 = map__35312_35335__$1;
var init_35337 = cljs.core.get.call(null,map__35312_35335__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_35336);

cljs.compiler.emitln.call(null," = ",init_35337,";");


var G__35338 = cljs.core.next.call(null,seq__35305_35328__$1);
var G__35339 = null;
var G__35340 = (0);
var G__35341 = (0);
seq__35305_35315 = G__35338;
chunk__35306_35316 = G__35339;
count__35307_35317 = G__35340;
i__35308_35318 = G__35341;
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
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__35303_35313);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__35342){
var map__35343 = p__35342;
var map__35343__$1 = cljs.core.__destructure_map.call(null,map__35343);
var frame = cljs.core.get.call(null,map__35343__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__35343__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__35343__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__5636__auto___35344 = cljs.core.count.call(null,exprs);
var i_35345 = (0);
while(true){
if((i_35345 < n__5636__auto___35344)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_35345)," = ",exprs.call(null,i_35345),";");

var G__35346 = (i_35345 + (1));
i_35345 = G__35346;
continue;
} else {
}
break;
}

var n__5636__auto___35347 = cljs.core.count.call(null,exprs);
var i_35348 = (0);
while(true){
if((i_35348 < n__5636__auto___35347)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_35348))," = ",temps.call(null,i_35348),";");

var G__35349 = (i_35348 + (1));
i_35348 = G__35349;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__35350){
var map__35351 = p__35350;
var map__35351__$1 = cljs.core.__destructure_map.call(null,map__35351);
var expr = cljs.core.get.call(null,map__35351__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__35351__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__35351__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__35352_35360 = cljs.core.seq.call(null,bindings);
var chunk__35353_35361 = null;
var count__35354_35362 = (0);
var i__35355_35363 = (0);
while(true){
if((i__35355_35363 < count__35354_35362)){
var map__35358_35364 = cljs.core._nth.call(null,chunk__35353_35361,i__35355_35363);
var map__35358_35365__$1 = cljs.core.__destructure_map.call(null,map__35358_35364);
var binding_35366 = map__35358_35365__$1;
var init_35367 = cljs.core.get.call(null,map__35358_35365__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_35366)," = ",init_35367,";");


var G__35368 = seq__35352_35360;
var G__35369 = chunk__35353_35361;
var G__35370 = count__35354_35362;
var G__35371 = (i__35355_35363 + (1));
seq__35352_35360 = G__35368;
chunk__35353_35361 = G__35369;
count__35354_35362 = G__35370;
i__35355_35363 = G__35371;
continue;
} else {
var temp__5804__auto___35372 = cljs.core.seq.call(null,seq__35352_35360);
if(temp__5804__auto___35372){
var seq__35352_35373__$1 = temp__5804__auto___35372;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35352_35373__$1)){
var c__5568__auto___35374 = cljs.core.chunk_first.call(null,seq__35352_35373__$1);
var G__35375 = cljs.core.chunk_rest.call(null,seq__35352_35373__$1);
var G__35376 = c__5568__auto___35374;
var G__35377 = cljs.core.count.call(null,c__5568__auto___35374);
var G__35378 = (0);
seq__35352_35360 = G__35375;
chunk__35353_35361 = G__35376;
count__35354_35362 = G__35377;
i__35355_35363 = G__35378;
continue;
} else {
var map__35359_35379 = cljs.core.first.call(null,seq__35352_35373__$1);
var map__35359_35380__$1 = cljs.core.__destructure_map.call(null,map__35359_35379);
var binding_35381 = map__35359_35380__$1;
var init_35382 = cljs.core.get.call(null,map__35359_35380__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_35381)," = ",init_35382,";");


var G__35383 = cljs.core.next.call(null,seq__35352_35373__$1);
var G__35384 = null;
var G__35385 = (0);
var G__35386 = (0);
seq__35352_35360 = G__35383;
chunk__35353_35361 = G__35384;
count__35354_35362 = G__35385;
i__35355_35363 = G__35386;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__35389){
var map__35390 = p__35389;
var map__35390__$1 = cljs.core.__destructure_map.call(null,map__35390);
var expr = map__35390__$1;
var f = cljs.core.get.call(null,map__35390__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__35390__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__35390__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__35391 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__35387_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__35387_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__35388_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__35388_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__35391,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__35391,(1),null);
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
var pimpl_35394 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_35394,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_35395 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_35395,args)),(((mfa_35395 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_35395,args)),"], 0))");
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
var fprop_35396 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.call(null,"(",f__$1,fprop_35396," ? ",f__$1,fprop_35396,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_35396," ? ",f__$1,fprop_35396,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__35397){
var map__35398 = p__35397;
var map__35398__$1 = cljs.core.__destructure_map.call(null,map__35398);
var ctor = cljs.core.get.call(null,map__35398__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__35398__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__35398__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__35399){
var map__35400 = p__35399;
var map__35400__$1 = cljs.core.__destructure_map.call(null,map__35400);
var target = cljs.core.get.call(null,map__35400__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__35400__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__35400__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__35401_SHARP_){
return ["['",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35401_SHARP_),"']"].join('');
}),xs));
} else {
return null;
}
});
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
var vec__35402 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib);
var lib_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__35402,(0),null);
var sublib = cljs.core.nth.call(null,vec__35402,(1),null);
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
var map__35405 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__35405__$1 = cljs.core.__destructure_map.call(null,map__35405);
var options = cljs.core.get.call(null,map__35405__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__35405__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__35406 = options;
var map__35406__$1 = cljs.core.__destructure_map.call(null,map__35406);
var target = cljs.core.get.call(null,map__35406__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.call(null,map__35406__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.call(null,map__35406__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__35407 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__35413 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__35413__$1 = cljs.core.__destructure_map.call(null,map__35413);
var node_libs = cljs.core.get.call(null,map__35413__$1,true);
var libs_to_load = cljs.core.get.call(null,map__35413__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__35407,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__35407,(1),null);
var vec__35410 = (function (){var map__35414 = cljs.core.group_by.call(null,cljs.analyzer.goog_module_dep_QMARK_,libs_to_load);
var map__35414__$1 = cljs.core.__destructure_map.call(null,map__35414);
var goog_modules = cljs.core.get.call(null,map__35414__$1,true);
var libs_to_load__$1 = cljs.core.get.call(null,map__35414__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog_modules,libs_to_load__$1], null);
})();
var goog_modules = cljs.core.nth.call(null,vec__35410,(0),null);
var libs_to_load__$1 = cljs.core.nth.call(null,vec__35410,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__35415_35459 = cljs.core.seq.call(null,libs_to_load__$1);
var chunk__35416_35460 = null;
var count__35417_35461 = (0);
var i__35418_35462 = (0);
while(true){
if((i__35418_35462 < count__35417_35461)){
var lib_35463 = cljs.core._nth.call(null,chunk__35416_35460,i__35418_35462);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_35463)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_35463),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_35463),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_35463),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_35463),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_35463,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_35463),"');");
}

}
}
}


var G__35464 = seq__35415_35459;
var G__35465 = chunk__35416_35460;
var G__35466 = count__35417_35461;
var G__35467 = (i__35418_35462 + (1));
seq__35415_35459 = G__35464;
chunk__35416_35460 = G__35465;
count__35417_35461 = G__35466;
i__35418_35462 = G__35467;
continue;
} else {
var temp__5804__auto___35468 = cljs.core.seq.call(null,seq__35415_35459);
if(temp__5804__auto___35468){
var seq__35415_35469__$1 = temp__5804__auto___35468;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35415_35469__$1)){
var c__5568__auto___35470 = cljs.core.chunk_first.call(null,seq__35415_35469__$1);
var G__35471 = cljs.core.chunk_rest.call(null,seq__35415_35469__$1);
var G__35472 = c__5568__auto___35470;
var G__35473 = cljs.core.count.call(null,c__5568__auto___35470);
var G__35474 = (0);
seq__35415_35459 = G__35471;
chunk__35416_35460 = G__35472;
count__35417_35461 = G__35473;
i__35418_35462 = G__35474;
continue;
} else {
var lib_35475 = cljs.core.first.call(null,seq__35415_35469__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_35475)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_35475),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_35475),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_35475),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_35475),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_35475,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_35475),"');");
}

}
}
}


var G__35476 = cljs.core.next.call(null,seq__35415_35469__$1);
var G__35477 = null;
var G__35478 = (0);
var G__35479 = (0);
seq__35415_35459 = G__35476;
chunk__35416_35460 = G__35477;
count__35417_35461 = G__35478;
i__35418_35462 = G__35479;
continue;
}
} else {
}
}
break;
}

var seq__35419_35480 = cljs.core.seq.call(null,node_libs);
var chunk__35420_35481 = null;
var count__35421_35482 = (0);
var i__35422_35483 = (0);
while(true){
if((i__35422_35483 < count__35421_35482)){
var lib_35484 = cljs.core._nth.call(null,chunk__35420_35481,i__35422_35483);
var vec__35429_35485 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_35484);
var lib_SINGLEQUOTE__35486 = cljs.core.nth.call(null,vec__35429_35485,(0),null);
var sublib_35487 = cljs.core.nth.call(null,vec__35429_35485,(1),null);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_35484)," = require('",lib_SINGLEQUOTE__35486,"')",cljs.compiler.sublib_select.call(null,sublib_35487),";");


var G__35488 = seq__35419_35480;
var G__35489 = chunk__35420_35481;
var G__35490 = count__35421_35482;
var G__35491 = (i__35422_35483 + (1));
seq__35419_35480 = G__35488;
chunk__35420_35481 = G__35489;
count__35421_35482 = G__35490;
i__35422_35483 = G__35491;
continue;
} else {
var temp__5804__auto___35492 = cljs.core.seq.call(null,seq__35419_35480);
if(temp__5804__auto___35492){
var seq__35419_35493__$1 = temp__5804__auto___35492;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35419_35493__$1)){
var c__5568__auto___35494 = cljs.core.chunk_first.call(null,seq__35419_35493__$1);
var G__35495 = cljs.core.chunk_rest.call(null,seq__35419_35493__$1);
var G__35496 = c__5568__auto___35494;
var G__35497 = cljs.core.count.call(null,c__5568__auto___35494);
var G__35498 = (0);
seq__35419_35480 = G__35495;
chunk__35420_35481 = G__35496;
count__35421_35482 = G__35497;
i__35422_35483 = G__35498;
continue;
} else {
var lib_35499 = cljs.core.first.call(null,seq__35419_35493__$1);
var vec__35432_35500 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_35499);
var lib_SINGLEQUOTE__35501 = cljs.core.nth.call(null,vec__35432_35500,(0),null);
var sublib_35502 = cljs.core.nth.call(null,vec__35432_35500,(1),null);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_35499)," = require('",lib_SINGLEQUOTE__35501,"')",cljs.compiler.sublib_select.call(null,sublib_35502),";");


var G__35503 = cljs.core.next.call(null,seq__35419_35493__$1);
var G__35504 = null;
var G__35505 = (0);
var G__35506 = (0);
seq__35419_35480 = G__35503;
chunk__35420_35481 = G__35504;
count__35421_35482 = G__35505;
i__35422_35483 = G__35506;
continue;
}
} else {
}
}
break;
}

var seq__35435_35507 = cljs.core.seq.call(null,goog_modules);
var chunk__35436_35508 = null;
var count__35437_35509 = (0);
var i__35438_35510 = (0);
while(true){
if((i__35438_35510 < count__35437_35509)){
var lib_35511 = cljs.core._nth.call(null,chunk__35436_35508,i__35438_35510);
var vec__35445_35512 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_35511);
var lib_SINGLEQUOTE__35513 = cljs.core.nth.call(null,vec__35445_35512,(0),null);
var sublib_35514 = cljs.core.nth.call(null,vec__35445_35512,(1),null);
cljs.compiler.emitln.call(null,"goog.require('",lib_SINGLEQUOTE__35513,"');");

cljs.compiler.emitln.call(null,"goog.scope(function(){");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_goog_module_lib.call(null,lib_35511)," = goog.module.get('",lib_SINGLEQUOTE__35513,"')",cljs.compiler.sublib_select.call(null,sublib_35514),";");

cljs.compiler.emitln.call(null,"});");


var G__35515 = seq__35435_35507;
var G__35516 = chunk__35436_35508;
var G__35517 = count__35437_35509;
var G__35518 = (i__35438_35510 + (1));
seq__35435_35507 = G__35515;
chunk__35436_35508 = G__35516;
count__35437_35509 = G__35517;
i__35438_35510 = G__35518;
continue;
} else {
var temp__5804__auto___35519 = cljs.core.seq.call(null,seq__35435_35507);
if(temp__5804__auto___35519){
var seq__35435_35520__$1 = temp__5804__auto___35519;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35435_35520__$1)){
var c__5568__auto___35521 = cljs.core.chunk_first.call(null,seq__35435_35520__$1);
var G__35522 = cljs.core.chunk_rest.call(null,seq__35435_35520__$1);
var G__35523 = c__5568__auto___35521;
var G__35524 = cljs.core.count.call(null,c__5568__auto___35521);
var G__35525 = (0);
seq__35435_35507 = G__35522;
chunk__35436_35508 = G__35523;
count__35437_35509 = G__35524;
i__35438_35510 = G__35525;
continue;
} else {
var lib_35526 = cljs.core.first.call(null,seq__35435_35520__$1);
var vec__35448_35527 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_35526);
var lib_SINGLEQUOTE__35528 = cljs.core.nth.call(null,vec__35448_35527,(0),null);
var sublib_35529 = cljs.core.nth.call(null,vec__35448_35527,(1),null);
cljs.compiler.emitln.call(null,"goog.require('",lib_SINGLEQUOTE__35528,"');");

cljs.compiler.emitln.call(null,"goog.scope(function(){");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_goog_module_lib.call(null,lib_35526)," = goog.module.get('",lib_SINGLEQUOTE__35528,"')",cljs.compiler.sublib_select.call(null,sublib_35529),";");

cljs.compiler.emitln.call(null,"});");


var G__35530 = cljs.core.next.call(null,seq__35435_35520__$1);
var G__35531 = null;
var G__35532 = (0);
var G__35533 = (0);
seq__35435_35507 = G__35530;
chunk__35436_35508 = G__35531;
count__35437_35509 = G__35532;
i__35438_35510 = G__35533;
continue;
}
} else {
}
}
break;
}

var seq__35451_35534 = cljs.core.seq.call(null,global_exports_libs);
var chunk__35452_35535 = null;
var count__35453_35536 = (0);
var i__35454_35537 = (0);
while(true){
if((i__35454_35537 < count__35453_35536)){
var lib_35538 = cljs.core._nth.call(null,chunk__35452_35535,i__35454_35537);
var map__35457_35539 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,cljs.core.first.call(null,cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_35538))));
var map__35457_35540__$1 = cljs.core.__destructure_map.call(null,map__35457_35539);
var global_exports_35541 = cljs.core.get.call(null,map__35457_35540__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_35541,lib_35538);


var G__35542 = seq__35451_35534;
var G__35543 = chunk__35452_35535;
var G__35544 = count__35453_35536;
var G__35545 = (i__35454_35537 + (1));
seq__35451_35534 = G__35542;
chunk__35452_35535 = G__35543;
count__35453_35536 = G__35544;
i__35454_35537 = G__35545;
continue;
} else {
var temp__5804__auto___35546 = cljs.core.seq.call(null,seq__35451_35534);
if(temp__5804__auto___35546){
var seq__35451_35547__$1 = temp__5804__auto___35546;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35451_35547__$1)){
var c__5568__auto___35548 = cljs.core.chunk_first.call(null,seq__35451_35547__$1);
var G__35549 = cljs.core.chunk_rest.call(null,seq__35451_35547__$1);
var G__35550 = c__5568__auto___35548;
var G__35551 = cljs.core.count.call(null,c__5568__auto___35548);
var G__35552 = (0);
seq__35451_35534 = G__35549;
chunk__35452_35535 = G__35550;
count__35453_35536 = G__35551;
i__35454_35537 = G__35552;
continue;
} else {
var lib_35553 = cljs.core.first.call(null,seq__35451_35547__$1);
var map__35458_35554 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,cljs.core.first.call(null,cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_35553))));
var map__35458_35555__$1 = cljs.core.__destructure_map.call(null,map__35458_35554);
var global_exports_35556 = cljs.core.get.call(null,map__35458_35555__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_35556,lib_35553);


var G__35557 = cljs.core.next.call(null,seq__35451_35547__$1);
var G__35558 = null;
var G__35559 = (0);
var G__35560 = (0);
seq__35451_35534 = G__35557;
chunk__35452_35535 = G__35558;
count__35453_35536 = G__35559;
i__35454_35537 = G__35560;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__35561){
var map__35562 = p__35561;
var map__35562__$1 = cljs.core.__destructure_map.call(null,map__35562);
var name = cljs.core.get.call(null,map__35562__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__35562__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__35562__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__35562__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__35562__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__35562__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__35562__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__35563){
var map__35564 = p__35563;
var map__35564__$1 = cljs.core.__destructure_map.call(null,map__35564);
var name = cljs.core.get.call(null,map__35564__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__35564__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__35564__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__35564__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__35564__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__35564__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__35564__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__35565){
var map__35566 = p__35565;
var map__35566__$1 = cljs.core.__destructure_map.call(null,map__35566);
var t = cljs.core.get.call(null,map__35566__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__35566__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__35566__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__35566__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__35566__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__35567_35591 = cljs.core.seq.call(null,protocols);
var chunk__35568_35592 = null;
var count__35569_35593 = (0);
var i__35570_35594 = (0);
while(true){
if((i__35570_35594 < count__35569_35593)){
var protocol_35595 = cljs.core._nth.call(null,chunk__35568_35592,i__35570_35594);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_35595)),"}");


var G__35596 = seq__35567_35591;
var G__35597 = chunk__35568_35592;
var G__35598 = count__35569_35593;
var G__35599 = (i__35570_35594 + (1));
seq__35567_35591 = G__35596;
chunk__35568_35592 = G__35597;
count__35569_35593 = G__35598;
i__35570_35594 = G__35599;
continue;
} else {
var temp__5804__auto___35600 = cljs.core.seq.call(null,seq__35567_35591);
if(temp__5804__auto___35600){
var seq__35567_35601__$1 = temp__5804__auto___35600;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35567_35601__$1)){
var c__5568__auto___35602 = cljs.core.chunk_first.call(null,seq__35567_35601__$1);
var G__35603 = cljs.core.chunk_rest.call(null,seq__35567_35601__$1);
var G__35604 = c__5568__auto___35602;
var G__35605 = cljs.core.count.call(null,c__5568__auto___35602);
var G__35606 = (0);
seq__35567_35591 = G__35603;
chunk__35568_35592 = G__35604;
count__35569_35593 = G__35605;
i__35570_35594 = G__35606;
continue;
} else {
var protocol_35607 = cljs.core.first.call(null,seq__35567_35601__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_35607)),"}");


var G__35608 = cljs.core.next.call(null,seq__35567_35601__$1);
var G__35609 = null;
var G__35610 = (0);
var G__35611 = (0);
seq__35567_35591 = G__35608;
chunk__35568_35592 = G__35609;
count__35569_35593 = G__35610;
i__35570_35594 = G__35611;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__35571_35612 = cljs.core.seq.call(null,fields__$1);
var chunk__35572_35613 = null;
var count__35573_35614 = (0);
var i__35574_35615 = (0);
while(true){
if((i__35574_35615 < count__35573_35614)){
var fld_35616 = cljs.core._nth.call(null,chunk__35572_35613,i__35574_35615);
cljs.compiler.emitln.call(null,"this.",fld_35616," = ",fld_35616,";");


var G__35617 = seq__35571_35612;
var G__35618 = chunk__35572_35613;
var G__35619 = count__35573_35614;
var G__35620 = (i__35574_35615 + (1));
seq__35571_35612 = G__35617;
chunk__35572_35613 = G__35618;
count__35573_35614 = G__35619;
i__35574_35615 = G__35620;
continue;
} else {
var temp__5804__auto___35621 = cljs.core.seq.call(null,seq__35571_35612);
if(temp__5804__auto___35621){
var seq__35571_35622__$1 = temp__5804__auto___35621;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35571_35622__$1)){
var c__5568__auto___35623 = cljs.core.chunk_first.call(null,seq__35571_35622__$1);
var G__35624 = cljs.core.chunk_rest.call(null,seq__35571_35622__$1);
var G__35625 = c__5568__auto___35623;
var G__35626 = cljs.core.count.call(null,c__5568__auto___35623);
var G__35627 = (0);
seq__35571_35612 = G__35624;
chunk__35572_35613 = G__35625;
count__35573_35614 = G__35626;
i__35574_35615 = G__35627;
continue;
} else {
var fld_35628 = cljs.core.first.call(null,seq__35571_35622__$1);
cljs.compiler.emitln.call(null,"this.",fld_35628," = ",fld_35628,";");


var G__35629 = cljs.core.next.call(null,seq__35571_35622__$1);
var G__35630 = null;
var G__35631 = (0);
var G__35632 = (0);
seq__35571_35612 = G__35629;
chunk__35572_35613 = G__35630;
count__35573_35614 = G__35631;
i__35574_35615 = G__35632;
continue;
}
} else {
}
}
break;
}

var seq__35575_35633 = cljs.core.seq.call(null,pmasks);
var chunk__35576_35634 = null;
var count__35577_35635 = (0);
var i__35578_35636 = (0);
while(true){
if((i__35578_35636 < count__35577_35635)){
var vec__35585_35637 = cljs.core._nth.call(null,chunk__35576_35634,i__35578_35636);
var pno_35638 = cljs.core.nth.call(null,vec__35585_35637,(0),null);
var pmask_35639 = cljs.core.nth.call(null,vec__35585_35637,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_35638,"$ = ",pmask_35639,";");


var G__35640 = seq__35575_35633;
var G__35641 = chunk__35576_35634;
var G__35642 = count__35577_35635;
var G__35643 = (i__35578_35636 + (1));
seq__35575_35633 = G__35640;
chunk__35576_35634 = G__35641;
count__35577_35635 = G__35642;
i__35578_35636 = G__35643;
continue;
} else {
var temp__5804__auto___35644 = cljs.core.seq.call(null,seq__35575_35633);
if(temp__5804__auto___35644){
var seq__35575_35645__$1 = temp__5804__auto___35644;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35575_35645__$1)){
var c__5568__auto___35646 = cljs.core.chunk_first.call(null,seq__35575_35645__$1);
var G__35647 = cljs.core.chunk_rest.call(null,seq__35575_35645__$1);
var G__35648 = c__5568__auto___35646;
var G__35649 = cljs.core.count.call(null,c__5568__auto___35646);
var G__35650 = (0);
seq__35575_35633 = G__35647;
chunk__35576_35634 = G__35648;
count__35577_35635 = G__35649;
i__35578_35636 = G__35650;
continue;
} else {
var vec__35588_35651 = cljs.core.first.call(null,seq__35575_35645__$1);
var pno_35652 = cljs.core.nth.call(null,vec__35588_35651,(0),null);
var pmask_35653 = cljs.core.nth.call(null,vec__35588_35651,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_35652,"$ = ",pmask_35653,";");


var G__35654 = cljs.core.next.call(null,seq__35575_35645__$1);
var G__35655 = null;
var G__35656 = (0);
var G__35657 = (0);
seq__35575_35633 = G__35654;
chunk__35576_35634 = G__35655;
count__35577_35635 = G__35656;
i__35578_35636 = G__35657;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__35658){
var map__35659 = p__35658;
var map__35659__$1 = cljs.core.__destructure_map.call(null,map__35659);
var t = cljs.core.get.call(null,map__35659__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__35659__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__35659__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__35659__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__35659__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__35660_35684 = cljs.core.seq.call(null,protocols);
var chunk__35661_35685 = null;
var count__35662_35686 = (0);
var i__35663_35687 = (0);
while(true){
if((i__35663_35687 < count__35662_35686)){
var protocol_35688 = cljs.core._nth.call(null,chunk__35661_35685,i__35663_35687);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_35688)),"}");


var G__35689 = seq__35660_35684;
var G__35690 = chunk__35661_35685;
var G__35691 = count__35662_35686;
var G__35692 = (i__35663_35687 + (1));
seq__35660_35684 = G__35689;
chunk__35661_35685 = G__35690;
count__35662_35686 = G__35691;
i__35663_35687 = G__35692;
continue;
} else {
var temp__5804__auto___35693 = cljs.core.seq.call(null,seq__35660_35684);
if(temp__5804__auto___35693){
var seq__35660_35694__$1 = temp__5804__auto___35693;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35660_35694__$1)){
var c__5568__auto___35695 = cljs.core.chunk_first.call(null,seq__35660_35694__$1);
var G__35696 = cljs.core.chunk_rest.call(null,seq__35660_35694__$1);
var G__35697 = c__5568__auto___35695;
var G__35698 = cljs.core.count.call(null,c__5568__auto___35695);
var G__35699 = (0);
seq__35660_35684 = G__35696;
chunk__35661_35685 = G__35697;
count__35662_35686 = G__35698;
i__35663_35687 = G__35699;
continue;
} else {
var protocol_35700 = cljs.core.first.call(null,seq__35660_35694__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_35700)),"}");


var G__35701 = cljs.core.next.call(null,seq__35660_35694__$1);
var G__35702 = null;
var G__35703 = (0);
var G__35704 = (0);
seq__35660_35684 = G__35701;
chunk__35661_35685 = G__35702;
count__35662_35686 = G__35703;
i__35663_35687 = G__35704;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__35664_35705 = cljs.core.seq.call(null,fields__$1);
var chunk__35665_35706 = null;
var count__35666_35707 = (0);
var i__35667_35708 = (0);
while(true){
if((i__35667_35708 < count__35666_35707)){
var fld_35709 = cljs.core._nth.call(null,chunk__35665_35706,i__35667_35708);
cljs.compiler.emitln.call(null,"this.",fld_35709," = ",fld_35709,";");


var G__35710 = seq__35664_35705;
var G__35711 = chunk__35665_35706;
var G__35712 = count__35666_35707;
var G__35713 = (i__35667_35708 + (1));
seq__35664_35705 = G__35710;
chunk__35665_35706 = G__35711;
count__35666_35707 = G__35712;
i__35667_35708 = G__35713;
continue;
} else {
var temp__5804__auto___35714 = cljs.core.seq.call(null,seq__35664_35705);
if(temp__5804__auto___35714){
var seq__35664_35715__$1 = temp__5804__auto___35714;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35664_35715__$1)){
var c__5568__auto___35716 = cljs.core.chunk_first.call(null,seq__35664_35715__$1);
var G__35717 = cljs.core.chunk_rest.call(null,seq__35664_35715__$1);
var G__35718 = c__5568__auto___35716;
var G__35719 = cljs.core.count.call(null,c__5568__auto___35716);
var G__35720 = (0);
seq__35664_35705 = G__35717;
chunk__35665_35706 = G__35718;
count__35666_35707 = G__35719;
i__35667_35708 = G__35720;
continue;
} else {
var fld_35721 = cljs.core.first.call(null,seq__35664_35715__$1);
cljs.compiler.emitln.call(null,"this.",fld_35721," = ",fld_35721,";");


var G__35722 = cljs.core.next.call(null,seq__35664_35715__$1);
var G__35723 = null;
var G__35724 = (0);
var G__35725 = (0);
seq__35664_35705 = G__35722;
chunk__35665_35706 = G__35723;
count__35666_35707 = G__35724;
i__35667_35708 = G__35725;
continue;
}
} else {
}
}
break;
}

var seq__35668_35726 = cljs.core.seq.call(null,pmasks);
var chunk__35669_35727 = null;
var count__35670_35728 = (0);
var i__35671_35729 = (0);
while(true){
if((i__35671_35729 < count__35670_35728)){
var vec__35678_35730 = cljs.core._nth.call(null,chunk__35669_35727,i__35671_35729);
var pno_35731 = cljs.core.nth.call(null,vec__35678_35730,(0),null);
var pmask_35732 = cljs.core.nth.call(null,vec__35678_35730,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_35731,"$ = ",pmask_35732,";");


var G__35733 = seq__35668_35726;
var G__35734 = chunk__35669_35727;
var G__35735 = count__35670_35728;
var G__35736 = (i__35671_35729 + (1));
seq__35668_35726 = G__35733;
chunk__35669_35727 = G__35734;
count__35670_35728 = G__35735;
i__35671_35729 = G__35736;
continue;
} else {
var temp__5804__auto___35737 = cljs.core.seq.call(null,seq__35668_35726);
if(temp__5804__auto___35737){
var seq__35668_35738__$1 = temp__5804__auto___35737;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35668_35738__$1)){
var c__5568__auto___35739 = cljs.core.chunk_first.call(null,seq__35668_35738__$1);
var G__35740 = cljs.core.chunk_rest.call(null,seq__35668_35738__$1);
var G__35741 = c__5568__auto___35739;
var G__35742 = cljs.core.count.call(null,c__5568__auto___35739);
var G__35743 = (0);
seq__35668_35726 = G__35740;
chunk__35669_35727 = G__35741;
count__35670_35728 = G__35742;
i__35671_35729 = G__35743;
continue;
} else {
var vec__35681_35744 = cljs.core.first.call(null,seq__35668_35738__$1);
var pno_35745 = cljs.core.nth.call(null,vec__35681_35744,(0),null);
var pmask_35746 = cljs.core.nth.call(null,vec__35681_35744,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_35745,"$ = ",pmask_35746,";");


var G__35747 = cljs.core.next.call(null,seq__35668_35738__$1);
var G__35748 = null;
var G__35749 = (0);
var G__35750 = (0);
seq__35668_35726 = G__35747;
chunk__35669_35727 = G__35748;
count__35670_35728 = G__35749;
i__35671_35729 = G__35750;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__35751){
var map__35752 = p__35751;
var map__35752__$1 = cljs.core.__destructure_map.call(null,map__35752);
var target = cljs.core.get.call(null,map__35752__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__35752__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__35752__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__35752__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__35752__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__35753){
var map__35754 = p__35753;
var map__35754__$1 = cljs.core.__destructure_map.call(null,map__35754);
var op = cljs.core.get.call(null,map__35754__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__35754__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__35754__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__35754__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__35754__$1,new cljs.core.Keyword(null,"args","args",1315556576));
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

var seq__35759 = cljs.core.seq.call(null,table);
var chunk__35760 = null;
var count__35761 = (0);
var i__35762 = (0);
while(true){
if((i__35762 < count__35761)){
var vec__35769 = cljs.core._nth.call(null,chunk__35760,i__35762);
var sym = cljs.core.nth.call(null,vec__35769,(0),null);
var value = cljs.core.nth.call(null,vec__35769,(1),null);
var ns_35775 = cljs.core.namespace.call(null,sym);
var name_35776 = cljs.core.name.call(null,sym);
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


var G__35777 = seq__35759;
var G__35778 = chunk__35760;
var G__35779 = count__35761;
var G__35780 = (i__35762 + (1));
seq__35759 = G__35777;
chunk__35760 = G__35778;
count__35761 = G__35779;
i__35762 = G__35780;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__35759);
if(temp__5804__auto__){
var seq__35759__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35759__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__35759__$1);
var G__35781 = cljs.core.chunk_rest.call(null,seq__35759__$1);
var G__35782 = c__5568__auto__;
var G__35783 = cljs.core.count.call(null,c__5568__auto__);
var G__35784 = (0);
seq__35759 = G__35781;
chunk__35760 = G__35782;
count__35761 = G__35783;
i__35762 = G__35784;
continue;
} else {
var vec__35772 = cljs.core.first.call(null,seq__35759__$1);
var sym = cljs.core.nth.call(null,vec__35772,(0),null);
var value = cljs.core.nth.call(null,vec__35772,(1),null);
var ns_35785 = cljs.core.namespace.call(null,sym);
var name_35786 = cljs.core.name.call(null,sym);
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


var G__35787 = cljs.core.next.call(null,seq__35759__$1);
var G__35788 = null;
var G__35789 = (0);
var G__35790 = (0);
seq__35759 = G__35787;
chunk__35760 = G__35788;
count__35761 = G__35789;
i__35762 = G__35790;
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
var G__35792 = arguments.length;
switch (G__35792) {
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
var k_35797 = cljs.core.first.call(null,ks);
var vec__35793_35798 = cljs.core.conj.call(null,prefix,k_35797);
var top_35799 = cljs.core.nth.call(null,vec__35793_35798,(0),null);
var prefix_SINGLEQUOTE__35800 = vec__35793_35798;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_35797)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__35800) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_35799)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_35799)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__35800)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_35799);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__35800)),";");
}
} else {
}

var m_35801 = cljs.core.get.call(null,externs,k_35797);
if(cljs.core.empty_QMARK_.call(null,m_35801)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__35800,m_35801,top_level,known_externs);
}

var G__35802 = cljs.core.next.call(null,ks);
ks = G__35802;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=compiler.js.map
