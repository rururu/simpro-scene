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
var map__6779 = s;
var map__6779__$1 = cljs.core.__destructure_map.call(null,map__6779);
var name = cljs.core.get.call(null,map__6779__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__6779__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__6781 = info;
var map__6782 = G__6781;
var map__6782__$1 = cljs.core.__destructure_map.call(null,map__6782);
var shadow = cljs.core.get.call(null,map__6782__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__6781__$1 = G__6781;
while(true){
var d__$2 = d__$1;
var map__6784 = G__6781__$1;
var map__6784__$1 = cljs.core.__destructure_map.call(null,map__6784);
var shadow__$1 = cljs.core.get.call(null,map__6784__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__6785 = (d__$2 + (1));
var G__6786 = shadow__$1;
d__$1 = G__6785;
G__6781__$1 = G__6786;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__6787){
var map__6788 = p__6787;
var map__6788__$1 = cljs.core.__destructure_map.call(null,map__6788);
var name_var = map__6788__$1;
var name = cljs.core.get.call(null,map__6788__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__6788__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__6789 = info;
var map__6789__$1 = cljs.core.__destructure_map.call(null,map__6789);
var ns = cljs.core.get.call(null,map__6789__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__6789__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__6791 = arguments.length;
switch (G__6791) {
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
var G__6793 = cp;
switch (G__6793) {
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
var seq__6795_6799 = cljs.core.seq.call(null,s);
var chunk__6796_6800 = null;
var count__6797_6801 = (0);
var i__6798_6802 = (0);
while(true){
if((i__6798_6802 < count__6797_6801)){
var c_6803 = cljs.core._nth.call(null,chunk__6796_6800,i__6798_6802);
sb.append(cljs.compiler.escape_char.call(null,c_6803));


var G__6804 = seq__6795_6799;
var G__6805 = chunk__6796_6800;
var G__6806 = count__6797_6801;
var G__6807 = (i__6798_6802 + (1));
seq__6795_6799 = G__6804;
chunk__6796_6800 = G__6805;
count__6797_6801 = G__6806;
i__6798_6802 = G__6807;
continue;
} else {
var temp__5804__auto___6808 = cljs.core.seq.call(null,seq__6795_6799);
if(temp__5804__auto___6808){
var seq__6795_6809__$1 = temp__5804__auto___6808;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6795_6809__$1)){
var c__5568__auto___6810 = cljs.core.chunk_first.call(null,seq__6795_6809__$1);
var G__6811 = cljs.core.chunk_rest.call(null,seq__6795_6809__$1);
var G__6812 = c__5568__auto___6810;
var G__6813 = cljs.core.count.call(null,c__5568__auto___6810);
var G__6814 = (0);
seq__6795_6799 = G__6811;
chunk__6796_6800 = G__6812;
count__6797_6801 = G__6813;
i__6798_6802 = G__6814;
continue;
} else {
var c_6815 = cljs.core.first.call(null,seq__6795_6809__$1);
sb.append(cljs.compiler.escape_char.call(null,c_6815));


var G__6816 = cljs.core.next.call(null,seq__6795_6809__$1);
var G__6817 = null;
var G__6818 = (0);
var G__6819 = (0);
seq__6795_6799 = G__6816;
chunk__6796_6800 = G__6817;
count__6797_6801 = G__6818;
i__6798_6802 = G__6819;
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
var map__6820_6823 = ast;
var map__6820_6824__$1 = cljs.core.__destructure_map.call(null,map__6820_6823);
var env_6825 = cljs.core.get.call(null,map__6820_6824__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_6825))){
var map__6821_6826 = env_6825;
var map__6821_6827__$1 = cljs.core.__destructure_map.call(null,map__6821_6826);
var line_6828 = cljs.core.get.call(null,map__6821_6827__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_6829 = cljs.core.get.call(null,map__6821_6827__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__6822 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__6822,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__6822;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_6828 - (1))], null),cljs.core.fnil.call(null,(function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_6829)?(column_6829 - (1)):(0))], null),cljs.core.fnil.call(null,(function (column__$1){
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
var G__6838 = arguments.length;
switch (G__6838) {
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
var len__5769__auto___6845 = arguments.length;
var i__5770__auto___6846 = (0);
while(true){
if((i__5770__auto___6846 < len__5769__auto___6845)){
args_arr__5794__auto__.push((arguments[i__5770__auto___6846]));

var G__6847 = (i__5770__auto___6846 + (1));
i__5770__auto___6846 = G__6847;
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
var s_6848 = (function (){var G__6839 = a;
if((!(typeof a === 'string'))){
return G__6839.toString();
} else {
return G__6839;
}
})();
var temp__5808__auto___6849 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5808__auto___6849 == null)){
} else {
var sm_data_6850 = temp__5808__auto___6849;
cljs.core.swap_BANG_.call(null,sm_data_6850,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__6830_SHARP_){
return (p1__6830_SHARP_ + s_6848.length);
}));
}

cljs.core.print.call(null,s_6848);

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

var seq__6840 = cljs.core.seq.call(null,xs);
var chunk__6841 = null;
var count__6842 = (0);
var i__6843 = (0);
while(true){
if((i__6843 < count__6842)){
var x = cljs.core._nth.call(null,chunk__6841,i__6843);
cljs.compiler.emits.call(null,x);


var G__6851 = seq__6840;
var G__6852 = chunk__6841;
var G__6853 = count__6842;
var G__6854 = (i__6843 + (1));
seq__6840 = G__6851;
chunk__6841 = G__6852;
count__6842 = G__6853;
i__6843 = G__6854;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__6840);
if(temp__5804__auto__){
var seq__6840__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6840__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__6840__$1);
var G__6855 = cljs.core.chunk_rest.call(null,seq__6840__$1);
var G__6856 = c__5568__auto__;
var G__6857 = cljs.core.count.call(null,c__5568__auto__);
var G__6858 = (0);
seq__6840 = G__6855;
chunk__6841 = G__6856;
count__6842 = G__6857;
i__6843 = G__6858;
continue;
} else {
var x = cljs.core.first.call(null,seq__6840__$1);
cljs.compiler.emits.call(null,x);


var G__6859 = cljs.core.next.call(null,seq__6840__$1);
var G__6860 = null;
var G__6861 = (0);
var G__6862 = (0);
seq__6840 = G__6859;
chunk__6841 = G__6860;
count__6842 = G__6861;
i__6843 = G__6862;
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
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq6832){
var G__6833 = cljs.core.first.call(null,seq6832);
var seq6832__$1 = cljs.core.next.call(null,seq6832);
var G__6834 = cljs.core.first.call(null,seq6832__$1);
var seq6832__$2 = cljs.core.next.call(null,seq6832__$1);
var G__6835 = cljs.core.first.call(null,seq6832__$2);
var seq6832__$3 = cljs.core.next.call(null,seq6832__$2);
var G__6836 = cljs.core.first.call(null,seq6832__$3);
var seq6832__$4 = cljs.core.next.call(null,seq6832__$3);
var G__6837 = cljs.core.first.call(null,seq6832__$4);
var seq6832__$5 = cljs.core.next.call(null,seq6832__$4);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6833,G__6834,G__6835,G__6836,G__6837,seq6832__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__6863){
var map__6864 = p__6863;
var map__6864__$1 = cljs.core.__destructure_map.call(null,map__6864);
var m = map__6864__$1;
var gen_line = cljs.core.get.call(null,map__6864__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__6872 = arguments.length;
switch (G__6872) {
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
var len__5769__auto___6878 = arguments.length;
var i__5770__auto___6879 = (0);
while(true){
if((i__5770__auto___6879 < len__5769__auto___6878)){
args_arr__5794__auto__.push((arguments[i__5770__auto___6879]));

var G__6880 = (i__5770__auto___6879 + (1));
i__5770__auto___6879 = G__6880;
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

var seq__6873_6881 = cljs.core.seq.call(null,xs);
var chunk__6874_6882 = null;
var count__6875_6883 = (0);
var i__6876_6884 = (0);
while(true){
if((i__6876_6884 < count__6875_6883)){
var x_6885 = cljs.core._nth.call(null,chunk__6874_6882,i__6876_6884);
cljs.compiler.emits.call(null,x_6885);


var G__6886 = seq__6873_6881;
var G__6887 = chunk__6874_6882;
var G__6888 = count__6875_6883;
var G__6889 = (i__6876_6884 + (1));
seq__6873_6881 = G__6886;
chunk__6874_6882 = G__6887;
count__6875_6883 = G__6888;
i__6876_6884 = G__6889;
continue;
} else {
var temp__5804__auto___6890 = cljs.core.seq.call(null,seq__6873_6881);
if(temp__5804__auto___6890){
var seq__6873_6891__$1 = temp__5804__auto___6890;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6873_6891__$1)){
var c__5568__auto___6892 = cljs.core.chunk_first.call(null,seq__6873_6891__$1);
var G__6893 = cljs.core.chunk_rest.call(null,seq__6873_6891__$1);
var G__6894 = c__5568__auto___6892;
var G__6895 = cljs.core.count.call(null,c__5568__auto___6892);
var G__6896 = (0);
seq__6873_6881 = G__6893;
chunk__6874_6882 = G__6894;
count__6875_6883 = G__6895;
i__6876_6884 = G__6896;
continue;
} else {
var x_6897 = cljs.core.first.call(null,seq__6873_6891__$1);
cljs.compiler.emits.call(null,x_6897);


var G__6898 = cljs.core.next.call(null,seq__6873_6891__$1);
var G__6899 = null;
var G__6900 = (0);
var G__6901 = (0);
seq__6873_6881 = G__6898;
chunk__6874_6882 = G__6899;
count__6875_6883 = G__6900;
i__6876_6884 = G__6901;
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
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq6866){
var G__6867 = cljs.core.first.call(null,seq6866);
var seq6866__$1 = cljs.core.next.call(null,seq6866);
var G__6868 = cljs.core.first.call(null,seq6866__$1);
var seq6866__$2 = cljs.core.next.call(null,seq6866__$1);
var G__6869 = cljs.core.first.call(null,seq6866__$2);
var seq6866__$3 = cljs.core.next.call(null,seq6866__$2);
var G__6870 = cljs.core.first.call(null,seq6866__$3);
var seq6866__$4 = cljs.core.next.call(null,seq6866__$3);
var G__6871 = cljs.core.first.call(null,seq6866__$4);
var seq6866__$5 = cljs.core.next.call(null,seq6866__$4);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6867,G__6868,G__6869,G__6870,G__6871,seq6866__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__6902_6906 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__6903_6907 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__6904_6908 = true;
var _STAR_print_fn_STAR__temp_val__6905_6909 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__6904_6908);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__6905_6909);

try{cljs.compiler.emit.call(null,expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__6903_6907);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__6902_6906);
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
var vec__6910 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__6910,(0),null);
var name = cljs.core.nth.call(null,vec__6910,(1),null);
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
var vec__6913 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__6913,(0),null);
var flags = cljs.core.nth.call(null,vec__6913,(1),null);
var pattern = cljs.core.nth.call(null,vec__6913,(2),null);
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
return cljs.compiler.emit_js_object.call(null,items,(function (p1__6916_SHARP_){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__6916_SHARP_);
});
}));
} else {
return cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__6918){
var map__6919 = p__6918;
var map__6919__$1 = cljs.core.__destructure_map.call(null,map__6919);
var ast = map__6919__$1;
var info = cljs.core.get.call(null,map__6919__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__6919__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__6919__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5802__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5802__auto__)){
var const_expr = temp__5802__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__6920 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__6920__$1 = cljs.core.__destructure_map.call(null,map__6920);
var cenv = map__6920__$1;
var options = cljs.core.get.call(null,map__6920__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__6921 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__5043__auto__;
}
})())){
return clojure.set.difference.call(null,G__6921,cljs.analyzer.es5_allowed);
} else {
return G__6921;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__5045__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__6922 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__6922,reserved);
} else {
return G__6922;
}
})();
var env__9256__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__6923_6924 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__6923_6925__$1 = (((G__6923_6924 instanceof cljs.core.Keyword))?G__6923_6924.fqn:null);
switch (G__6923_6925__$1) {
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__6927){
var map__6928 = p__6927;
var map__6928__$1 = cljs.core.__destructure_map.call(null,map__6928);
var arg = map__6928__$1;
var env = cljs.core.get.call(null,map__6928__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__6928__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__6928__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__6928__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__6929 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__6929__$1 = cljs.core.__destructure_map.call(null,map__6929);
var name = cljs.core.get.call(null,map__6929__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__6930){
var map__6931 = p__6930;
var map__6931__$1 = cljs.core.__destructure_map.call(null,map__6931);
var expr = cljs.core.get.call(null,map__6931__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__6931__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__6931__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ((cljs.core.every_QMARK_.call(null,(function (p1__6932_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__6932_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__6933){
var map__6934 = p__6933;
var map__6934__$1 = cljs.core.__destructure_map.call(null,map__6934);
var env = cljs.core.get.call(null,map__6934__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__6934__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__6934__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__6935){
var map__6936 = p__6935;
var map__6936__$1 = cljs.core.__destructure_map.call(null,map__6936);
var items = cljs.core.get.call(null,map__6936__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__6936__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ((cljs.core.every_QMARK_.call(null,(function (p1__6937_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__6937_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__6938){
var map__6939 = p__6938;
var map__6939__$1 = cljs.core.__destructure_map.call(null,map__6939);
var items = cljs.core.get.call(null,map__6939__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__6939__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var temp__5804__auto___6962 = cljs.core.seq.call(null,items);
if(temp__5804__auto___6962){
var items_6963__$1 = temp__5804__auto___6962;
var vec__6940_6964 = items_6963__$1;
var seq__6941_6965 = cljs.core.seq.call(null,vec__6940_6964);
var first__6942_6966 = cljs.core.first.call(null,seq__6941_6965);
var seq__6941_6967__$1 = cljs.core.next.call(null,seq__6941_6965);
var vec__6943_6968 = first__6942_6966;
var k_6969 = cljs.core.nth.call(null,vec__6943_6968,(0),null);
var v_6970 = cljs.core.nth.call(null,vec__6943_6968,(1),null);
var r_6971 = seq__6941_6967__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_6969),"\": ",emit_js_object_val.call(null,v_6970));

var seq__6946_6972 = cljs.core.seq.call(null,r_6971);
var chunk__6947_6973 = null;
var count__6948_6974 = (0);
var i__6949_6975 = (0);
while(true){
if((i__6949_6975 < count__6948_6974)){
var vec__6956_6976 = cljs.core._nth.call(null,chunk__6947_6973,i__6949_6975);
var k_6977__$1 = cljs.core.nth.call(null,vec__6956_6976,(0),null);
var v_6978__$1 = cljs.core.nth.call(null,vec__6956_6976,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_6977__$1),"\": ",emit_js_object_val.call(null,v_6978__$1));


var G__6979 = seq__6946_6972;
var G__6980 = chunk__6947_6973;
var G__6981 = count__6948_6974;
var G__6982 = (i__6949_6975 + (1));
seq__6946_6972 = G__6979;
chunk__6947_6973 = G__6980;
count__6948_6974 = G__6981;
i__6949_6975 = G__6982;
continue;
} else {
var temp__5804__auto___6983__$1 = cljs.core.seq.call(null,seq__6946_6972);
if(temp__5804__auto___6983__$1){
var seq__6946_6984__$1 = temp__5804__auto___6983__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6946_6984__$1)){
var c__5568__auto___6985 = cljs.core.chunk_first.call(null,seq__6946_6984__$1);
var G__6986 = cljs.core.chunk_rest.call(null,seq__6946_6984__$1);
var G__6987 = c__5568__auto___6985;
var G__6988 = cljs.core.count.call(null,c__5568__auto___6985);
var G__6989 = (0);
seq__6946_6972 = G__6986;
chunk__6947_6973 = G__6987;
count__6948_6974 = G__6988;
i__6949_6975 = G__6989;
continue;
} else {
var vec__6959_6990 = cljs.core.first.call(null,seq__6946_6984__$1);
var k_6991__$1 = cljs.core.nth.call(null,vec__6959_6990,(0),null);
var v_6992__$1 = cljs.core.nth.call(null,vec__6959_6990,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_6991__$1),"\": ",emit_js_object_val.call(null,v_6992__$1));


var G__6993 = cljs.core.next.call(null,seq__6946_6984__$1);
var G__6994 = null;
var G__6995 = (0);
var G__6996 = (0);
seq__6946_6972 = G__6993;
chunk__6947_6973 = G__6994;
count__6948_6974 = G__6995;
i__6949_6975 = G__6996;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__6997){
var map__6998 = p__6997;
var map__6998__$1 = cljs.core.__destructure_map.call(null,map__6998);
var keys = cljs.core.get.call(null,map__6998__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__6998__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__6998__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__6999){
var map__7000 = p__6999;
var map__7000__$1 = cljs.core.__destructure_map.call(null,map__7000);
var items = cljs.core.get.call(null,map__7000__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__7000__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__7001){
var map__7002 = p__7001;
var map__7002__$1 = cljs.core.__destructure_map.call(null,map__7002);
var expr = cljs.core.get.call(null,map__7002__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__7003){
var map__7004 = p__7003;
var map__7004__$1 = cljs.core.__destructure_map.call(null,map__7004);
var form = cljs.core.get.call(null,map__7004__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__7004__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var map__7005 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__7005__$1 = cljs.core.__destructure_map.call(null,map__7005);
var op = cljs.core.get.call(null,map__7005__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__7005__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__7005__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__7006 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__7006__$1 = cljs.core.__destructure_map.call(null,map__7006);
var op = cljs.core.get.call(null,map__7006__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__7006__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__7006__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__7007){
var map__7008 = p__7007;
var map__7008__$1 = cljs.core.__destructure_map.call(null,map__7008);
var test__$1 = cljs.core.get.call(null,map__7008__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__7008__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__7008__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__7008__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__7008__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__7009){
var map__7010 = p__7009;
var map__7010__$1 = cljs.core.__destructure_map.call(null,map__7010);
var v = cljs.core.get.call(null,map__7010__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__7010__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__7010__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__7010__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__7011_7039 = cljs.core.seq.call(null,nodes);
var chunk__7012_7040 = null;
var count__7013_7041 = (0);
var i__7014_7042 = (0);
while(true){
if((i__7014_7042 < count__7013_7041)){
var map__7027_7043 = cljs.core._nth.call(null,chunk__7012_7040,i__7014_7042);
var map__7027_7044__$1 = cljs.core.__destructure_map.call(null,map__7027_7043);
var ts_7045 = cljs.core.get.call(null,map__7027_7044__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__7028_7046 = cljs.core.get.call(null,map__7027_7044__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__7028_7047__$1 = cljs.core.__destructure_map.call(null,map__7028_7046);
var then_7048 = cljs.core.get.call(null,map__7028_7047__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__7029_7049 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_7045));
var chunk__7030_7050 = null;
var count__7031_7051 = (0);
var i__7032_7052 = (0);
while(true){
if((i__7032_7052 < count__7031_7051)){
var test_7053__$1 = cljs.core._nth.call(null,chunk__7030_7050,i__7032_7052);
cljs.compiler.emitln.call(null,"case ",test_7053__$1,":");


var G__7054 = seq__7029_7049;
var G__7055 = chunk__7030_7050;
var G__7056 = count__7031_7051;
var G__7057 = (i__7032_7052 + (1));
seq__7029_7049 = G__7054;
chunk__7030_7050 = G__7055;
count__7031_7051 = G__7056;
i__7032_7052 = G__7057;
continue;
} else {
var temp__5804__auto___7058 = cljs.core.seq.call(null,seq__7029_7049);
if(temp__5804__auto___7058){
var seq__7029_7059__$1 = temp__5804__auto___7058;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7029_7059__$1)){
var c__5568__auto___7060 = cljs.core.chunk_first.call(null,seq__7029_7059__$1);
var G__7061 = cljs.core.chunk_rest.call(null,seq__7029_7059__$1);
var G__7062 = c__5568__auto___7060;
var G__7063 = cljs.core.count.call(null,c__5568__auto___7060);
var G__7064 = (0);
seq__7029_7049 = G__7061;
chunk__7030_7050 = G__7062;
count__7031_7051 = G__7063;
i__7032_7052 = G__7064;
continue;
} else {
var test_7065__$1 = cljs.core.first.call(null,seq__7029_7059__$1);
cljs.compiler.emitln.call(null,"case ",test_7065__$1,":");


var G__7066 = cljs.core.next.call(null,seq__7029_7059__$1);
var G__7067 = null;
var G__7068 = (0);
var G__7069 = (0);
seq__7029_7049 = G__7066;
chunk__7030_7050 = G__7067;
count__7031_7051 = G__7068;
i__7032_7052 = G__7069;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_7048);
} else {
cljs.compiler.emitln.call(null,then_7048);
}

cljs.compiler.emitln.call(null,"break;");


var G__7070 = seq__7011_7039;
var G__7071 = chunk__7012_7040;
var G__7072 = count__7013_7041;
var G__7073 = (i__7014_7042 + (1));
seq__7011_7039 = G__7070;
chunk__7012_7040 = G__7071;
count__7013_7041 = G__7072;
i__7014_7042 = G__7073;
continue;
} else {
var temp__5804__auto___7074 = cljs.core.seq.call(null,seq__7011_7039);
if(temp__5804__auto___7074){
var seq__7011_7075__$1 = temp__5804__auto___7074;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7011_7075__$1)){
var c__5568__auto___7076 = cljs.core.chunk_first.call(null,seq__7011_7075__$1);
var G__7077 = cljs.core.chunk_rest.call(null,seq__7011_7075__$1);
var G__7078 = c__5568__auto___7076;
var G__7079 = cljs.core.count.call(null,c__5568__auto___7076);
var G__7080 = (0);
seq__7011_7039 = G__7077;
chunk__7012_7040 = G__7078;
count__7013_7041 = G__7079;
i__7014_7042 = G__7080;
continue;
} else {
var map__7033_7081 = cljs.core.first.call(null,seq__7011_7075__$1);
var map__7033_7082__$1 = cljs.core.__destructure_map.call(null,map__7033_7081);
var ts_7083 = cljs.core.get.call(null,map__7033_7082__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__7034_7084 = cljs.core.get.call(null,map__7033_7082__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__7034_7085__$1 = cljs.core.__destructure_map.call(null,map__7034_7084);
var then_7086 = cljs.core.get.call(null,map__7034_7085__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__7035_7087 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_7083));
var chunk__7036_7088 = null;
var count__7037_7089 = (0);
var i__7038_7090 = (0);
while(true){
if((i__7038_7090 < count__7037_7089)){
var test_7091__$1 = cljs.core._nth.call(null,chunk__7036_7088,i__7038_7090);
cljs.compiler.emitln.call(null,"case ",test_7091__$1,":");


var G__7092 = seq__7035_7087;
var G__7093 = chunk__7036_7088;
var G__7094 = count__7037_7089;
var G__7095 = (i__7038_7090 + (1));
seq__7035_7087 = G__7092;
chunk__7036_7088 = G__7093;
count__7037_7089 = G__7094;
i__7038_7090 = G__7095;
continue;
} else {
var temp__5804__auto___7096__$1 = cljs.core.seq.call(null,seq__7035_7087);
if(temp__5804__auto___7096__$1){
var seq__7035_7097__$1 = temp__5804__auto___7096__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7035_7097__$1)){
var c__5568__auto___7098 = cljs.core.chunk_first.call(null,seq__7035_7097__$1);
var G__7099 = cljs.core.chunk_rest.call(null,seq__7035_7097__$1);
var G__7100 = c__5568__auto___7098;
var G__7101 = cljs.core.count.call(null,c__5568__auto___7098);
var G__7102 = (0);
seq__7035_7087 = G__7099;
chunk__7036_7088 = G__7100;
count__7037_7089 = G__7101;
i__7038_7090 = G__7102;
continue;
} else {
var test_7103__$1 = cljs.core.first.call(null,seq__7035_7097__$1);
cljs.compiler.emitln.call(null,"case ",test_7103__$1,":");


var G__7104 = cljs.core.next.call(null,seq__7035_7097__$1);
var G__7105 = null;
var G__7106 = (0);
var G__7107 = (0);
seq__7035_7087 = G__7104;
chunk__7036_7088 = G__7105;
count__7037_7089 = G__7106;
i__7038_7090 = G__7107;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_7086);
} else {
cljs.compiler.emitln.call(null,then_7086);
}

cljs.compiler.emitln.call(null,"break;");


var G__7108 = cljs.core.next.call(null,seq__7011_7075__$1);
var G__7109 = null;
var G__7110 = (0);
var G__7111 = (0);
seq__7011_7039 = G__7108;
chunk__7012_7040 = G__7109;
count__7013_7041 = G__7110;
i__7014_7042 = G__7111;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__7112){
var map__7113 = p__7112;
var map__7113__$1 = cljs.core.__destructure_map.call(null,map__7113);
var throw$ = cljs.core.get.call(null,map__7113__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__7113__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__7115 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__7115,(0),null);
var rstr = cljs.core.nth.call(null,vec__7115,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,(function (p1__7114_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__7114_SHARP_);
}),clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__7118 = ["function(",clojure.string.join.call(null,",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__7118,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__7118;
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
return ["{",clojure.string.join.call(null,"|",cljs.core.map.call(null,(function (p1__7119_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__7119_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__7120 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__7121 = cljs.core.seq.call(null,vec__7120);
var first__7122 = cljs.core.first.call(null,seq__7121);
var seq__7121__$1 = cljs.core.next.call(null,seq__7121);
var p = first__7122;
var first__7122__$1 = cljs.core.first.call(null,seq__7121__$1);
var seq__7121__$2 = cljs.core.next.call(null,seq__7121__$1);
var ts = first__7122__$1;
var first__7122__$2 = cljs.core.first.call(null,seq__7121__$2);
var seq__7121__$3 = cljs.core.next.call(null,seq__7121__$2);
var n = first__7122__$2;
var xs = seq__7121__$3;
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
var vec__7123 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__7124 = cljs.core.seq.call(null,vec__7123);
var first__7125 = cljs.core.first.call(null,seq__7124);
var seq__7124__$1 = cljs.core.next.call(null,seq__7124);
var p = first__7125;
var first__7125__$1 = cljs.core.first.call(null,seq__7124__$1);
var seq__7124__$2 = cljs.core.next.call(null,seq__7124__$1);
var ts = first__7125__$1;
var xs = seq__7124__$2;
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
var G__7128 = arguments.length;
switch (G__7128) {
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
var vec__7136 = cljs.core.map.call(null,(function (p1__7126_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__7126_SHARP_);
} else {
return p1__7126_SHARP_;
}
}),clojure.string.split_lines.call(null,e));
var seq__7137 = cljs.core.seq.call(null,vec__7136);
var first__7138 = cljs.core.first.call(null,seq__7137);
var seq__7137__$1 = cljs.core.next.call(null,seq__7137);
var x = first__7138;
var ys = seq__7137__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__7139 = cljs.core.seq.call(null,ys);
var chunk__7140 = null;
var count__7141 = (0);
var i__7142 = (0);
while(true){
if((i__7142 < count__7141)){
var next_line = cljs.core._nth.call(null,chunk__7140,i__7142);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__7148 = seq__7139;
var G__7149 = chunk__7140;
var G__7150 = count__7141;
var G__7151 = (i__7142 + (1));
seq__7139 = G__7148;
chunk__7140 = G__7149;
count__7141 = G__7150;
i__7142 = G__7151;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__7139);
if(temp__5804__auto__){
var seq__7139__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7139__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__7139__$1);
var G__7152 = cljs.core.chunk_rest.call(null,seq__7139__$1);
var G__7153 = c__5568__auto__;
var G__7154 = cljs.core.count.call(null,c__5568__auto__);
var G__7155 = (0);
seq__7139 = G__7152;
chunk__7140 = G__7153;
count__7141 = G__7154;
i__7142 = G__7155;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__7139__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__7156 = cljs.core.next.call(null,seq__7139__$1);
var G__7157 = null;
var G__7158 = (0);
var G__7159 = (0);
seq__7139 = G__7156;
chunk__7140 = G__7157;
count__7141 = G__7158;
i__7142 = G__7159;
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

var seq__7143_7160 = cljs.core.seq.call(null,docs__$2);
var chunk__7144_7161 = null;
var count__7145_7162 = (0);
var i__7146_7163 = (0);
while(true){
if((i__7146_7163 < count__7145_7162)){
var e_7164 = cljs.core._nth.call(null,chunk__7144_7161,i__7146_7163);
if(cljs.core.truth_(e_7164)){
print_comment_lines.call(null,e_7164);
} else {
}


var G__7165 = seq__7143_7160;
var G__7166 = chunk__7144_7161;
var G__7167 = count__7145_7162;
var G__7168 = (i__7146_7163 + (1));
seq__7143_7160 = G__7165;
chunk__7144_7161 = G__7166;
count__7145_7162 = G__7167;
i__7146_7163 = G__7168;
continue;
} else {
var temp__5804__auto___7169 = cljs.core.seq.call(null,seq__7143_7160);
if(temp__5804__auto___7169){
var seq__7143_7170__$1 = temp__5804__auto___7169;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7143_7170__$1)){
var c__5568__auto___7171 = cljs.core.chunk_first.call(null,seq__7143_7170__$1);
var G__7172 = cljs.core.chunk_rest.call(null,seq__7143_7170__$1);
var G__7173 = c__5568__auto___7171;
var G__7174 = cljs.core.count.call(null,c__5568__auto___7171);
var G__7175 = (0);
seq__7143_7160 = G__7172;
chunk__7144_7161 = G__7173;
count__7145_7162 = G__7174;
i__7146_7163 = G__7175;
continue;
} else {
var e_7176 = cljs.core.first.call(null,seq__7143_7170__$1);
if(cljs.core.truth_(e_7176)){
print_comment_lines.call(null,e_7176);
} else {
}


var G__7177 = cljs.core.next.call(null,seq__7143_7170__$1);
var G__7178 = null;
var G__7179 = (0);
var G__7180 = (0);
seq__7143_7160 = G__7177;
chunk__7144_7161 = G__7178;
count__7145_7162 = G__7179;
i__7146_7163 = G__7180;
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
var and__5043__auto__ = cljs.core.some.call(null,(function (p1__7182_SHARP_){
return goog.string.startsWith(p1__7182_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__7183){
var map__7184 = p__7183;
var map__7184__$1 = cljs.core.__destructure_map.call(null,map__7184);
var doc = cljs.core.get.call(null,map__7184__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__7184__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test__$1 = cljs.core.get.call(null,map__7184__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.call(null,map__7184__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.call(null,map__7184__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__7184__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__7184__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__7184__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__7184__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__7184__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__7185){
var map__7186 = p__7185;
var map__7186__$1 = cljs.core.__destructure_map.call(null,map__7186);
var name = cljs.core.get.call(null,map__7186__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__7186__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__7186__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__7187_7211 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__7188_7212 = null;
var count__7189_7213 = (0);
var i__7190_7214 = (0);
while(true){
if((i__7190_7214 < count__7189_7213)){
var vec__7197_7215 = cljs.core._nth.call(null,chunk__7188_7212,i__7190_7214);
var i_7216 = cljs.core.nth.call(null,vec__7197_7215,(0),null);
var param_7217 = cljs.core.nth.call(null,vec__7197_7215,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_7217);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__7218 = seq__7187_7211;
var G__7219 = chunk__7188_7212;
var G__7220 = count__7189_7213;
var G__7221 = (i__7190_7214 + (1));
seq__7187_7211 = G__7218;
chunk__7188_7212 = G__7219;
count__7189_7213 = G__7220;
i__7190_7214 = G__7221;
continue;
} else {
var temp__5804__auto___7222 = cljs.core.seq.call(null,seq__7187_7211);
if(temp__5804__auto___7222){
var seq__7187_7223__$1 = temp__5804__auto___7222;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7187_7223__$1)){
var c__5568__auto___7224 = cljs.core.chunk_first.call(null,seq__7187_7223__$1);
var G__7225 = cljs.core.chunk_rest.call(null,seq__7187_7223__$1);
var G__7226 = c__5568__auto___7224;
var G__7227 = cljs.core.count.call(null,c__5568__auto___7224);
var G__7228 = (0);
seq__7187_7211 = G__7225;
chunk__7188_7212 = G__7226;
count__7189_7213 = G__7227;
i__7190_7214 = G__7228;
continue;
} else {
var vec__7200_7229 = cljs.core.first.call(null,seq__7187_7223__$1);
var i_7230 = cljs.core.nth.call(null,vec__7200_7229,(0),null);
var param_7231 = cljs.core.nth.call(null,vec__7200_7229,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_7231);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__7232 = cljs.core.next.call(null,seq__7187_7223__$1);
var G__7233 = null;
var G__7234 = (0);
var G__7235 = (0);
seq__7187_7211 = G__7232;
chunk__7188_7212 = G__7233;
count__7189_7213 = G__7234;
i__7190_7214 = G__7235;
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

var seq__7203_7236 = cljs.core.seq.call(null,params);
var chunk__7204_7237 = null;
var count__7205_7238 = (0);
var i__7206_7239 = (0);
while(true){
if((i__7206_7239 < count__7205_7238)){
var param_7240 = cljs.core._nth.call(null,chunk__7204_7237,i__7206_7239);
cljs.compiler.emit.call(null,param_7240);

if(cljs.core._EQ_.call(null,param_7240,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7241 = seq__7203_7236;
var G__7242 = chunk__7204_7237;
var G__7243 = count__7205_7238;
var G__7244 = (i__7206_7239 + (1));
seq__7203_7236 = G__7241;
chunk__7204_7237 = G__7242;
count__7205_7238 = G__7243;
i__7206_7239 = G__7244;
continue;
} else {
var temp__5804__auto___7245 = cljs.core.seq.call(null,seq__7203_7236);
if(temp__5804__auto___7245){
var seq__7203_7246__$1 = temp__5804__auto___7245;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7203_7246__$1)){
var c__5568__auto___7247 = cljs.core.chunk_first.call(null,seq__7203_7246__$1);
var G__7248 = cljs.core.chunk_rest.call(null,seq__7203_7246__$1);
var G__7249 = c__5568__auto___7247;
var G__7250 = cljs.core.count.call(null,c__5568__auto___7247);
var G__7251 = (0);
seq__7203_7236 = G__7248;
chunk__7204_7237 = G__7249;
count__7205_7238 = G__7250;
i__7206_7239 = G__7251;
continue;
} else {
var param_7252 = cljs.core.first.call(null,seq__7203_7246__$1);
cljs.compiler.emit.call(null,param_7252);

if(cljs.core._EQ_.call(null,param_7252,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7253 = cljs.core.next.call(null,seq__7203_7246__$1);
var G__7254 = null;
var G__7255 = (0);
var G__7256 = (0);
seq__7203_7236 = G__7253;
chunk__7204_7237 = G__7254;
count__7205_7238 = G__7255;
i__7206_7239 = G__7256;
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

var seq__7207_7257 = cljs.core.seq.call(null,params);
var chunk__7208_7258 = null;
var count__7209_7259 = (0);
var i__7210_7260 = (0);
while(true){
if((i__7210_7260 < count__7209_7259)){
var param_7261 = cljs.core._nth.call(null,chunk__7208_7258,i__7210_7260);
cljs.compiler.emit.call(null,param_7261);

if(cljs.core._EQ_.call(null,param_7261,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7262 = seq__7207_7257;
var G__7263 = chunk__7208_7258;
var G__7264 = count__7209_7259;
var G__7265 = (i__7210_7260 + (1));
seq__7207_7257 = G__7262;
chunk__7208_7258 = G__7263;
count__7209_7259 = G__7264;
i__7210_7260 = G__7265;
continue;
} else {
var temp__5804__auto___7266 = cljs.core.seq.call(null,seq__7207_7257);
if(temp__5804__auto___7266){
var seq__7207_7267__$1 = temp__5804__auto___7266;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7207_7267__$1)){
var c__5568__auto___7268 = cljs.core.chunk_first.call(null,seq__7207_7267__$1);
var G__7269 = cljs.core.chunk_rest.call(null,seq__7207_7267__$1);
var G__7270 = c__5568__auto___7268;
var G__7271 = cljs.core.count.call(null,c__5568__auto___7268);
var G__7272 = (0);
seq__7207_7257 = G__7269;
chunk__7208_7258 = G__7270;
count__7209_7259 = G__7271;
i__7210_7260 = G__7272;
continue;
} else {
var param_7273 = cljs.core.first.call(null,seq__7207_7267__$1);
cljs.compiler.emit.call(null,param_7273);

if(cljs.core._EQ_.call(null,param_7273,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7274 = cljs.core.next.call(null,seq__7207_7267__$1);
var G__7275 = null;
var G__7276 = (0);
var G__7277 = (0);
seq__7207_7257 = G__7274;
chunk__7208_7258 = G__7275;
count__7209_7259 = G__7276;
i__7210_7260 = G__7277;
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
var seq__7278 = cljs.core.seq.call(null,params);
var chunk__7279 = null;
var count__7280 = (0);
var i__7281 = (0);
while(true){
if((i__7281 < count__7280)){
var param = cljs.core._nth.call(null,chunk__7279,i__7281);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7282 = seq__7278;
var G__7283 = chunk__7279;
var G__7284 = count__7280;
var G__7285 = (i__7281 + (1));
seq__7278 = G__7282;
chunk__7279 = G__7283;
count__7280 = G__7284;
i__7281 = G__7285;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__7278);
if(temp__5804__auto__){
var seq__7278__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7278__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__7278__$1);
var G__7286 = cljs.core.chunk_rest.call(null,seq__7278__$1);
var G__7287 = c__5568__auto__;
var G__7288 = cljs.core.count.call(null,c__5568__auto__);
var G__7289 = (0);
seq__7278 = G__7286;
chunk__7279 = G__7287;
count__7280 = G__7288;
i__7281 = G__7289;
continue;
} else {
var param = cljs.core.first.call(null,seq__7278__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7290 = cljs.core.next.call(null,seq__7278__$1);
var G__7291 = null;
var G__7292 = (0);
var G__7293 = (0);
seq__7278 = G__7290;
chunk__7279 = G__7291;
count__7280 = G__7292;
i__7281 = G__7293;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__7294){
var map__7295 = p__7294;
var map__7295__$1 = cljs.core.__destructure_map.call(null,map__7295);
var expr = cljs.core.get.call(null,map__7295__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__7295__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__7295__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__7295__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__7295__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__7295__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__7296){
var map__7297 = p__7296;
var map__7297__$1 = cljs.core.__destructure_map.call(null,map__7297);
var f = map__7297__$1;
var expr = cljs.core.get.call(null,map__7297__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__7297__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__7297__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__7297__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__7297__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__7297__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__7297__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__7297__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__9256__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_7306__$1 = (function (){var or__5045__auto__ = name;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_7307 = cljs.compiler.munge.call(null,name_7306__$1);
var delegate_name_7308 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_7307),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_7308," = function (");

var seq__7298_7309 = cljs.core.seq.call(null,params);
var chunk__7299_7310 = null;
var count__7300_7311 = (0);
var i__7301_7312 = (0);
while(true){
if((i__7301_7312 < count__7300_7311)){
var param_7313 = cljs.core._nth.call(null,chunk__7299_7310,i__7301_7312);
cljs.compiler.emit.call(null,param_7313);

if(cljs.core._EQ_.call(null,param_7313,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7314 = seq__7298_7309;
var G__7315 = chunk__7299_7310;
var G__7316 = count__7300_7311;
var G__7317 = (i__7301_7312 + (1));
seq__7298_7309 = G__7314;
chunk__7299_7310 = G__7315;
count__7300_7311 = G__7316;
i__7301_7312 = G__7317;
continue;
} else {
var temp__5804__auto___7318 = cljs.core.seq.call(null,seq__7298_7309);
if(temp__5804__auto___7318){
var seq__7298_7319__$1 = temp__5804__auto___7318;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7298_7319__$1)){
var c__5568__auto___7320 = cljs.core.chunk_first.call(null,seq__7298_7319__$1);
var G__7321 = cljs.core.chunk_rest.call(null,seq__7298_7319__$1);
var G__7322 = c__5568__auto___7320;
var G__7323 = cljs.core.count.call(null,c__5568__auto___7320);
var G__7324 = (0);
seq__7298_7309 = G__7321;
chunk__7299_7310 = G__7322;
count__7300_7311 = G__7323;
i__7301_7312 = G__7324;
continue;
} else {
var param_7325 = cljs.core.first.call(null,seq__7298_7319__$1);
cljs.compiler.emit.call(null,param_7325);

if(cljs.core._EQ_.call(null,param_7325,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7326 = cljs.core.next.call(null,seq__7298_7319__$1);
var G__7327 = null;
var G__7328 = (0);
var G__7329 = (0);
seq__7298_7309 = G__7326;
chunk__7299_7310 = G__7327;
count__7300_7311 = G__7328;
i__7301_7312 = G__7329;
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

cljs.compiler.emitln.call(null,"var ",mname_7307," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_7330 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_7330,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_7308,".call(this,");

var seq__7302_7331 = cljs.core.seq.call(null,params);
var chunk__7303_7332 = null;
var count__7304_7333 = (0);
var i__7305_7334 = (0);
while(true){
if((i__7305_7334 < count__7304_7333)){
var param_7335 = cljs.core._nth.call(null,chunk__7303_7332,i__7305_7334);
cljs.compiler.emit.call(null,param_7335);

if(cljs.core._EQ_.call(null,param_7335,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7336 = seq__7302_7331;
var G__7337 = chunk__7303_7332;
var G__7338 = count__7304_7333;
var G__7339 = (i__7305_7334 + (1));
seq__7302_7331 = G__7336;
chunk__7303_7332 = G__7337;
count__7304_7333 = G__7338;
i__7305_7334 = G__7339;
continue;
} else {
var temp__5804__auto___7340 = cljs.core.seq.call(null,seq__7302_7331);
if(temp__5804__auto___7340){
var seq__7302_7341__$1 = temp__5804__auto___7340;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7302_7341__$1)){
var c__5568__auto___7342 = cljs.core.chunk_first.call(null,seq__7302_7341__$1);
var G__7343 = cljs.core.chunk_rest.call(null,seq__7302_7341__$1);
var G__7344 = c__5568__auto___7342;
var G__7345 = cljs.core.count.call(null,c__5568__auto___7342);
var G__7346 = (0);
seq__7302_7331 = G__7343;
chunk__7303_7332 = G__7344;
count__7304_7333 = G__7345;
i__7305_7334 = G__7346;
continue;
} else {
var param_7347 = cljs.core.first.call(null,seq__7302_7341__$1);
cljs.compiler.emit.call(null,param_7347);

if(cljs.core._EQ_.call(null,param_7347,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7348 = cljs.core.next.call(null,seq__7302_7341__$1);
var G__7349 = null;
var G__7350 = (0);
var G__7351 = (0);
seq__7302_7331 = G__7348;
chunk__7303_7332 = G__7349;
count__7304_7333 = G__7350;
i__7305_7334 = G__7351;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_7307,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_7307,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_7306__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_7307,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_7308,";");

cljs.compiler.emitln.call(null,"return ",mname_7307,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__7355){
var map__7356 = p__7355;
var map__7356__$1 = cljs.core.__destructure_map.call(null,map__7356);
var variadic = cljs.core.get.call(null,map__7356__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__7356__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__7356__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__7356__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__7356__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__7356__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.call(null,map__7356__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.call(null,map__7356__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,(function (p1__7352_SHARP_){
var and__5043__auto__ = p1__7352_SHARP_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__7352_SHARP_));
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
var name_7408__$1 = (function (){var or__5045__auto__ = name;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_7409 = cljs.compiler.munge.call(null,name_7408__$1);
var maxparams_7410 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_7411 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_7409),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_7412 = cljs.core.sort_by.call(null,(function (p1__7353_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__7353_SHARP_)));
}),cljs.core.seq.call(null,mmap_7411));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_7409," = null;");

var seq__7357_7413 = cljs.core.seq.call(null,ms_7412);
var chunk__7358_7414 = null;
var count__7359_7415 = (0);
var i__7360_7416 = (0);
while(true){
if((i__7360_7416 < count__7359_7415)){
var vec__7367_7417 = cljs.core._nth.call(null,chunk__7358_7414,i__7360_7416);
var n_7418 = cljs.core.nth.call(null,vec__7367_7417,(0),null);
var meth_7419 = cljs.core.nth.call(null,vec__7367_7417,(1),null);
cljs.compiler.emits.call(null,"var ",n_7418," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_7419))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_7419);
} else {
cljs.compiler.emit_fn_method.call(null,meth_7419);
}

cljs.compiler.emitln.call(null,";");


var G__7420 = seq__7357_7413;
var G__7421 = chunk__7358_7414;
var G__7422 = count__7359_7415;
var G__7423 = (i__7360_7416 + (1));
seq__7357_7413 = G__7420;
chunk__7358_7414 = G__7421;
count__7359_7415 = G__7422;
i__7360_7416 = G__7423;
continue;
} else {
var temp__5804__auto___7424 = cljs.core.seq.call(null,seq__7357_7413);
if(temp__5804__auto___7424){
var seq__7357_7425__$1 = temp__5804__auto___7424;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7357_7425__$1)){
var c__5568__auto___7426 = cljs.core.chunk_first.call(null,seq__7357_7425__$1);
var G__7427 = cljs.core.chunk_rest.call(null,seq__7357_7425__$1);
var G__7428 = c__5568__auto___7426;
var G__7429 = cljs.core.count.call(null,c__5568__auto___7426);
var G__7430 = (0);
seq__7357_7413 = G__7427;
chunk__7358_7414 = G__7428;
count__7359_7415 = G__7429;
i__7360_7416 = G__7430;
continue;
} else {
var vec__7370_7431 = cljs.core.first.call(null,seq__7357_7425__$1);
var n_7432 = cljs.core.nth.call(null,vec__7370_7431,(0),null);
var meth_7433 = cljs.core.nth.call(null,vec__7370_7431,(1),null);
cljs.compiler.emits.call(null,"var ",n_7432," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_7433))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_7433);
} else {
cljs.compiler.emit_fn_method.call(null,meth_7433);
}

cljs.compiler.emitln.call(null,";");


var G__7434 = cljs.core.next.call(null,seq__7357_7425__$1);
var G__7435 = null;
var G__7436 = (0);
var G__7437 = (0);
seq__7357_7413 = G__7434;
chunk__7358_7414 = G__7435;
count__7359_7415 = G__7436;
i__7360_7416 = G__7437;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_7409," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_7410),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_7410)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_7410));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__7373_7438 = cljs.core.seq.call(null,ms_7412);
var chunk__7374_7439 = null;
var count__7375_7440 = (0);
var i__7376_7441 = (0);
while(true){
if((i__7376_7441 < count__7375_7440)){
var vec__7383_7442 = cljs.core._nth.call(null,chunk__7374_7439,i__7376_7441);
var n_7443 = cljs.core.nth.call(null,vec__7383_7442,(0),null);
var meth_7444 = cljs.core.nth.call(null,vec__7383_7442,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_7444))){
cljs.compiler.emitln.call(null,"default:");

var restarg_7445 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_7445," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_7446 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_7445," = new cljs.core.IndexedSeq(",a_7446,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_7443,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_7410)),(((cljs.core.count.call(null,maxparams_7410) > (1)))?", ":null),restarg_7445,");");
} else {
var pcnt_7447 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_7444));
cljs.compiler.emitln.call(null,"case ",pcnt_7447,":");

cljs.compiler.emitln.call(null,"return ",n_7443,".call(this",(((pcnt_7447 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_7447,maxparams_7410)),null,(1),null)),(2),null))),");");
}


var G__7448 = seq__7373_7438;
var G__7449 = chunk__7374_7439;
var G__7450 = count__7375_7440;
var G__7451 = (i__7376_7441 + (1));
seq__7373_7438 = G__7448;
chunk__7374_7439 = G__7449;
count__7375_7440 = G__7450;
i__7376_7441 = G__7451;
continue;
} else {
var temp__5804__auto___7452 = cljs.core.seq.call(null,seq__7373_7438);
if(temp__5804__auto___7452){
var seq__7373_7453__$1 = temp__5804__auto___7452;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7373_7453__$1)){
var c__5568__auto___7454 = cljs.core.chunk_first.call(null,seq__7373_7453__$1);
var G__7455 = cljs.core.chunk_rest.call(null,seq__7373_7453__$1);
var G__7456 = c__5568__auto___7454;
var G__7457 = cljs.core.count.call(null,c__5568__auto___7454);
var G__7458 = (0);
seq__7373_7438 = G__7455;
chunk__7374_7439 = G__7456;
count__7375_7440 = G__7457;
i__7376_7441 = G__7458;
continue;
} else {
var vec__7386_7459 = cljs.core.first.call(null,seq__7373_7453__$1);
var n_7460 = cljs.core.nth.call(null,vec__7386_7459,(0),null);
var meth_7461 = cljs.core.nth.call(null,vec__7386_7459,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_7461))){
cljs.compiler.emitln.call(null,"default:");

var restarg_7462 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_7462," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_7463 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_7462," = new cljs.core.IndexedSeq(",a_7463,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_7460,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_7410)),(((cljs.core.count.call(null,maxparams_7410) > (1)))?", ":null),restarg_7462,");");
} else {
var pcnt_7464 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_7461));
cljs.compiler.emitln.call(null,"case ",pcnt_7464,":");

cljs.compiler.emitln.call(null,"return ",n_7460,".call(this",(((pcnt_7464 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_7464,maxparams_7410)),null,(1),null)),(2),null))),");");
}


var G__7465 = cljs.core.next.call(null,seq__7373_7453__$1);
var G__7466 = null;
var G__7467 = (0);
var G__7468 = (0);
seq__7373_7438 = G__7465;
chunk__7374_7439 = G__7466;
count__7375_7440 = G__7467;
i__7376_7441 = G__7468;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_7469 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_7412)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_7469,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_7409,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_7409,".cljs$lang$applyTo = ",cljs.core.some.call(null,(function (p1__7354_SHARP_){
var vec__7389 = p1__7354_SHARP_;
var n = cljs.core.nth.call(null,vec__7389,(0),null);
var m = cljs.core.nth.call(null,vec__7389,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_7412),".cljs$lang$applyTo;");
} else {
}

var seq__7392_7470 = cljs.core.seq.call(null,ms_7412);
var chunk__7393_7471 = null;
var count__7394_7472 = (0);
var i__7395_7473 = (0);
while(true){
if((i__7395_7473 < count__7394_7472)){
var vec__7402_7474 = cljs.core._nth.call(null,chunk__7393_7471,i__7395_7473);
var n_7475 = cljs.core.nth.call(null,vec__7402_7474,(0),null);
var meth_7476 = cljs.core.nth.call(null,vec__7402_7474,(1),null);
var c_7477 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_7476));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_7476))){
cljs.compiler.emitln.call(null,mname_7409,".cljs$core$IFn$_invoke$arity$variadic = ",n_7475,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_7409,".cljs$core$IFn$_invoke$arity$",c_7477," = ",n_7475,";");
}


var G__7478 = seq__7392_7470;
var G__7479 = chunk__7393_7471;
var G__7480 = count__7394_7472;
var G__7481 = (i__7395_7473 + (1));
seq__7392_7470 = G__7478;
chunk__7393_7471 = G__7479;
count__7394_7472 = G__7480;
i__7395_7473 = G__7481;
continue;
} else {
var temp__5804__auto___7482 = cljs.core.seq.call(null,seq__7392_7470);
if(temp__5804__auto___7482){
var seq__7392_7483__$1 = temp__5804__auto___7482;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7392_7483__$1)){
var c__5568__auto___7484 = cljs.core.chunk_first.call(null,seq__7392_7483__$1);
var G__7485 = cljs.core.chunk_rest.call(null,seq__7392_7483__$1);
var G__7486 = c__5568__auto___7484;
var G__7487 = cljs.core.count.call(null,c__5568__auto___7484);
var G__7488 = (0);
seq__7392_7470 = G__7485;
chunk__7393_7471 = G__7486;
count__7394_7472 = G__7487;
i__7395_7473 = G__7488;
continue;
} else {
var vec__7405_7489 = cljs.core.first.call(null,seq__7392_7483__$1);
var n_7490 = cljs.core.nth.call(null,vec__7405_7489,(0),null);
var meth_7491 = cljs.core.nth.call(null,vec__7405_7489,(1),null);
var c_7492 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_7491));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_7491))){
cljs.compiler.emitln.call(null,mname_7409,".cljs$core$IFn$_invoke$arity$variadic = ",n_7490,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_7409,".cljs$core$IFn$_invoke$arity$",c_7492," = ",n_7490,";");
}


var G__7493 = cljs.core.next.call(null,seq__7392_7483__$1);
var G__7494 = null;
var G__7495 = (0);
var G__7496 = (0);
seq__7392_7470 = G__7493;
chunk__7393_7471 = G__7494;
count__7394_7472 = G__7495;
i__7395_7473 = G__7496;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_7409,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__7497){
var map__7498 = p__7497;
var map__7498__$1 = cljs.core.__destructure_map.call(null,map__7498);
var statements = cljs.core.get.call(null,map__7498__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__7498__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__7498__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__7499_7503 = cljs.core.seq.call(null,statements);
var chunk__7500_7504 = null;
var count__7501_7505 = (0);
var i__7502_7506 = (0);
while(true){
if((i__7502_7506 < count__7501_7505)){
var s_7507 = cljs.core._nth.call(null,chunk__7500_7504,i__7502_7506);
cljs.compiler.emitln.call(null,s_7507);


var G__7508 = seq__7499_7503;
var G__7509 = chunk__7500_7504;
var G__7510 = count__7501_7505;
var G__7511 = (i__7502_7506 + (1));
seq__7499_7503 = G__7508;
chunk__7500_7504 = G__7509;
count__7501_7505 = G__7510;
i__7502_7506 = G__7511;
continue;
} else {
var temp__5804__auto___7512 = cljs.core.seq.call(null,seq__7499_7503);
if(temp__5804__auto___7512){
var seq__7499_7513__$1 = temp__5804__auto___7512;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7499_7513__$1)){
var c__5568__auto___7514 = cljs.core.chunk_first.call(null,seq__7499_7513__$1);
var G__7515 = cljs.core.chunk_rest.call(null,seq__7499_7513__$1);
var G__7516 = c__5568__auto___7514;
var G__7517 = cljs.core.count.call(null,c__5568__auto___7514);
var G__7518 = (0);
seq__7499_7503 = G__7515;
chunk__7500_7504 = G__7516;
count__7501_7505 = G__7517;
i__7502_7506 = G__7518;
continue;
} else {
var s_7519 = cljs.core.first.call(null,seq__7499_7513__$1);
cljs.compiler.emitln.call(null,s_7519);


var G__7520 = cljs.core.next.call(null,seq__7499_7513__$1);
var G__7521 = null;
var G__7522 = (0);
var G__7523 = (0);
seq__7499_7503 = G__7520;
chunk__7500_7504 = G__7521;
count__7501_7505 = G__7522;
i__7502_7506 = G__7523;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__7524){
var map__7525 = p__7524;
var map__7525__$1 = cljs.core.__destructure_map.call(null,map__7525);
var try$ = cljs.core.get.call(null,map__7525__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__7525__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__7525__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__7525__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__7525__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__7526,is_loop){
var map__7527 = p__7526;
var map__7527__$1 = cljs.core.__destructure_map.call(null,map__7527);
var expr = cljs.core.get.call(null,map__7527__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__7527__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__7527__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__7528_7538 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__7529_7539 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,(function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__7529_7539);

try{var seq__7530_7540 = cljs.core.seq.call(null,bindings);
var chunk__7531_7541 = null;
var count__7532_7542 = (0);
var i__7533_7543 = (0);
while(true){
if((i__7533_7543 < count__7532_7542)){
var map__7536_7544 = cljs.core._nth.call(null,chunk__7531_7541,i__7533_7543);
var map__7536_7545__$1 = cljs.core.__destructure_map.call(null,map__7536_7544);
var binding_7546 = map__7536_7545__$1;
var init_7547 = cljs.core.get.call(null,map__7536_7545__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_7546);

cljs.compiler.emitln.call(null," = ",init_7547,";");


var G__7548 = seq__7530_7540;
var G__7549 = chunk__7531_7541;
var G__7550 = count__7532_7542;
var G__7551 = (i__7533_7543 + (1));
seq__7530_7540 = G__7548;
chunk__7531_7541 = G__7549;
count__7532_7542 = G__7550;
i__7533_7543 = G__7551;
continue;
} else {
var temp__5804__auto___7552 = cljs.core.seq.call(null,seq__7530_7540);
if(temp__5804__auto___7552){
var seq__7530_7553__$1 = temp__5804__auto___7552;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7530_7553__$1)){
var c__5568__auto___7554 = cljs.core.chunk_first.call(null,seq__7530_7553__$1);
var G__7555 = cljs.core.chunk_rest.call(null,seq__7530_7553__$1);
var G__7556 = c__5568__auto___7554;
var G__7557 = cljs.core.count.call(null,c__5568__auto___7554);
var G__7558 = (0);
seq__7530_7540 = G__7555;
chunk__7531_7541 = G__7556;
count__7532_7542 = G__7557;
i__7533_7543 = G__7558;
continue;
} else {
var map__7537_7559 = cljs.core.first.call(null,seq__7530_7553__$1);
var map__7537_7560__$1 = cljs.core.__destructure_map.call(null,map__7537_7559);
var binding_7561 = map__7537_7560__$1;
var init_7562 = cljs.core.get.call(null,map__7537_7560__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_7561);

cljs.compiler.emitln.call(null," = ",init_7562,";");


var G__7563 = cljs.core.next.call(null,seq__7530_7553__$1);
var G__7564 = null;
var G__7565 = (0);
var G__7566 = (0);
seq__7530_7540 = G__7563;
chunk__7531_7541 = G__7564;
count__7532_7542 = G__7565;
i__7533_7543 = G__7566;
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
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__7528_7538);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__7567){
var map__7568 = p__7567;
var map__7568__$1 = cljs.core.__destructure_map.call(null,map__7568);
var frame = cljs.core.get.call(null,map__7568__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__7568__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__7568__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__5636__auto___7569 = cljs.core.count.call(null,exprs);
var i_7570 = (0);
while(true){
if((i_7570 < n__5636__auto___7569)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_7570)," = ",exprs.call(null,i_7570),";");

var G__7571 = (i_7570 + (1));
i_7570 = G__7571;
continue;
} else {
}
break;
}

var n__5636__auto___7572 = cljs.core.count.call(null,exprs);
var i_7573 = (0);
while(true){
if((i_7573 < n__5636__auto___7572)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_7573))," = ",temps.call(null,i_7573),";");

var G__7574 = (i_7573 + (1));
i_7573 = G__7574;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__7575){
var map__7576 = p__7575;
var map__7576__$1 = cljs.core.__destructure_map.call(null,map__7576);
var expr = cljs.core.get.call(null,map__7576__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__7576__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__7576__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__7577_7585 = cljs.core.seq.call(null,bindings);
var chunk__7578_7586 = null;
var count__7579_7587 = (0);
var i__7580_7588 = (0);
while(true){
if((i__7580_7588 < count__7579_7587)){
var map__7583_7589 = cljs.core._nth.call(null,chunk__7578_7586,i__7580_7588);
var map__7583_7590__$1 = cljs.core.__destructure_map.call(null,map__7583_7589);
var binding_7591 = map__7583_7590__$1;
var init_7592 = cljs.core.get.call(null,map__7583_7590__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_7591)," = ",init_7592,";");


var G__7593 = seq__7577_7585;
var G__7594 = chunk__7578_7586;
var G__7595 = count__7579_7587;
var G__7596 = (i__7580_7588 + (1));
seq__7577_7585 = G__7593;
chunk__7578_7586 = G__7594;
count__7579_7587 = G__7595;
i__7580_7588 = G__7596;
continue;
} else {
var temp__5804__auto___7597 = cljs.core.seq.call(null,seq__7577_7585);
if(temp__5804__auto___7597){
var seq__7577_7598__$1 = temp__5804__auto___7597;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7577_7598__$1)){
var c__5568__auto___7599 = cljs.core.chunk_first.call(null,seq__7577_7598__$1);
var G__7600 = cljs.core.chunk_rest.call(null,seq__7577_7598__$1);
var G__7601 = c__5568__auto___7599;
var G__7602 = cljs.core.count.call(null,c__5568__auto___7599);
var G__7603 = (0);
seq__7577_7585 = G__7600;
chunk__7578_7586 = G__7601;
count__7579_7587 = G__7602;
i__7580_7588 = G__7603;
continue;
} else {
var map__7584_7604 = cljs.core.first.call(null,seq__7577_7598__$1);
var map__7584_7605__$1 = cljs.core.__destructure_map.call(null,map__7584_7604);
var binding_7606 = map__7584_7605__$1;
var init_7607 = cljs.core.get.call(null,map__7584_7605__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_7606)," = ",init_7607,";");


var G__7608 = cljs.core.next.call(null,seq__7577_7598__$1);
var G__7609 = null;
var G__7610 = (0);
var G__7611 = (0);
seq__7577_7585 = G__7608;
chunk__7578_7586 = G__7609;
count__7579_7587 = G__7610;
i__7580_7588 = G__7611;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__7614){
var map__7615 = p__7614;
var map__7615__$1 = cljs.core.__destructure_map.call(null,map__7615);
var expr = map__7615__$1;
var f = cljs.core.get.call(null,map__7615__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__7615__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__7615__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__7616 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__7612_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__7612_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__7613_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__7613_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__7616,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__7616,(1),null);
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
var pimpl_7619 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_7619,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_7620 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_7620,args)),(((mfa_7620 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_7620,args)),"], 0))");
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
var fprop_7621 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.call(null,"(",f__$1,fprop_7621," ? ",f__$1,fprop_7621,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_7621," ? ",f__$1,fprop_7621,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__7622){
var map__7623 = p__7622;
var map__7623__$1 = cljs.core.__destructure_map.call(null,map__7623);
var ctor = cljs.core.get.call(null,map__7623__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__7623__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__7623__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__7624){
var map__7625 = p__7624;
var map__7625__$1 = cljs.core.__destructure_map.call(null,map__7625);
var target = cljs.core.get.call(null,map__7625__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__7625__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__7625__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__7626_SHARP_){
return ["['",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__7626_SHARP_),"']"].join('');
}),xs));
} else {
return null;
}
});
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
var vec__7627 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib);
var lib_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__7627,(0),null);
var sublib = cljs.core.nth.call(null,vec__7627,(1),null);
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
var map__7630 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__7630__$1 = cljs.core.__destructure_map.call(null,map__7630);
var options = cljs.core.get.call(null,map__7630__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__7630__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__7631 = options;
var map__7631__$1 = cljs.core.__destructure_map.call(null,map__7631);
var target = cljs.core.get.call(null,map__7631__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.call(null,map__7631__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.call(null,map__7631__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__7632 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__7638 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__7638__$1 = cljs.core.__destructure_map.call(null,map__7638);
var node_libs = cljs.core.get.call(null,map__7638__$1,true);
var libs_to_load = cljs.core.get.call(null,map__7638__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__7632,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__7632,(1),null);
var vec__7635 = (function (){var map__7639 = cljs.core.group_by.call(null,cljs.analyzer.goog_module_dep_QMARK_,libs_to_load);
var map__7639__$1 = cljs.core.__destructure_map.call(null,map__7639);
var goog_modules = cljs.core.get.call(null,map__7639__$1,true);
var libs_to_load__$1 = cljs.core.get.call(null,map__7639__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog_modules,libs_to_load__$1], null);
})();
var goog_modules = cljs.core.nth.call(null,vec__7635,(0),null);
var libs_to_load__$1 = cljs.core.nth.call(null,vec__7635,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__7640_7684 = cljs.core.seq.call(null,libs_to_load__$1);
var chunk__7641_7685 = null;
var count__7642_7686 = (0);
var i__7643_7687 = (0);
while(true){
if((i__7643_7687 < count__7642_7686)){
var lib_7688 = cljs.core._nth.call(null,chunk__7641_7685,i__7643_7687);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_7688)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_7688),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_7688),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_7688),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_7688),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_7688,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_7688),"');");
}

}
}
}


var G__7689 = seq__7640_7684;
var G__7690 = chunk__7641_7685;
var G__7691 = count__7642_7686;
var G__7692 = (i__7643_7687 + (1));
seq__7640_7684 = G__7689;
chunk__7641_7685 = G__7690;
count__7642_7686 = G__7691;
i__7643_7687 = G__7692;
continue;
} else {
var temp__5804__auto___7693 = cljs.core.seq.call(null,seq__7640_7684);
if(temp__5804__auto___7693){
var seq__7640_7694__$1 = temp__5804__auto___7693;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7640_7694__$1)){
var c__5568__auto___7695 = cljs.core.chunk_first.call(null,seq__7640_7694__$1);
var G__7696 = cljs.core.chunk_rest.call(null,seq__7640_7694__$1);
var G__7697 = c__5568__auto___7695;
var G__7698 = cljs.core.count.call(null,c__5568__auto___7695);
var G__7699 = (0);
seq__7640_7684 = G__7696;
chunk__7641_7685 = G__7697;
count__7642_7686 = G__7698;
i__7643_7687 = G__7699;
continue;
} else {
var lib_7700 = cljs.core.first.call(null,seq__7640_7694__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_7700)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_7700),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_7700),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_7700),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_7700),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_7700,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_7700),"');");
}

}
}
}


var G__7701 = cljs.core.next.call(null,seq__7640_7694__$1);
var G__7702 = null;
var G__7703 = (0);
var G__7704 = (0);
seq__7640_7684 = G__7701;
chunk__7641_7685 = G__7702;
count__7642_7686 = G__7703;
i__7643_7687 = G__7704;
continue;
}
} else {
}
}
break;
}

var seq__7644_7705 = cljs.core.seq.call(null,node_libs);
var chunk__7645_7706 = null;
var count__7646_7707 = (0);
var i__7647_7708 = (0);
while(true){
if((i__7647_7708 < count__7646_7707)){
var lib_7709 = cljs.core._nth.call(null,chunk__7645_7706,i__7647_7708);
var vec__7654_7710 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_7709);
var lib_SINGLEQUOTE__7711 = cljs.core.nth.call(null,vec__7654_7710,(0),null);
var sublib_7712 = cljs.core.nth.call(null,vec__7654_7710,(1),null);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_7709)," = require('",lib_SINGLEQUOTE__7711,"')",cljs.compiler.sublib_select.call(null,sublib_7712),";");


var G__7713 = seq__7644_7705;
var G__7714 = chunk__7645_7706;
var G__7715 = count__7646_7707;
var G__7716 = (i__7647_7708 + (1));
seq__7644_7705 = G__7713;
chunk__7645_7706 = G__7714;
count__7646_7707 = G__7715;
i__7647_7708 = G__7716;
continue;
} else {
var temp__5804__auto___7717 = cljs.core.seq.call(null,seq__7644_7705);
if(temp__5804__auto___7717){
var seq__7644_7718__$1 = temp__5804__auto___7717;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7644_7718__$1)){
var c__5568__auto___7719 = cljs.core.chunk_first.call(null,seq__7644_7718__$1);
var G__7720 = cljs.core.chunk_rest.call(null,seq__7644_7718__$1);
var G__7721 = c__5568__auto___7719;
var G__7722 = cljs.core.count.call(null,c__5568__auto___7719);
var G__7723 = (0);
seq__7644_7705 = G__7720;
chunk__7645_7706 = G__7721;
count__7646_7707 = G__7722;
i__7647_7708 = G__7723;
continue;
} else {
var lib_7724 = cljs.core.first.call(null,seq__7644_7718__$1);
var vec__7657_7725 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_7724);
var lib_SINGLEQUOTE__7726 = cljs.core.nth.call(null,vec__7657_7725,(0),null);
var sublib_7727 = cljs.core.nth.call(null,vec__7657_7725,(1),null);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_7724)," = require('",lib_SINGLEQUOTE__7726,"')",cljs.compiler.sublib_select.call(null,sublib_7727),";");


var G__7728 = cljs.core.next.call(null,seq__7644_7718__$1);
var G__7729 = null;
var G__7730 = (0);
var G__7731 = (0);
seq__7644_7705 = G__7728;
chunk__7645_7706 = G__7729;
count__7646_7707 = G__7730;
i__7647_7708 = G__7731;
continue;
}
} else {
}
}
break;
}

var seq__7660_7732 = cljs.core.seq.call(null,goog_modules);
var chunk__7661_7733 = null;
var count__7662_7734 = (0);
var i__7663_7735 = (0);
while(true){
if((i__7663_7735 < count__7662_7734)){
var lib_7736 = cljs.core._nth.call(null,chunk__7661_7733,i__7663_7735);
var vec__7670_7737 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_7736);
var lib_SINGLEQUOTE__7738 = cljs.core.nth.call(null,vec__7670_7737,(0),null);
var sublib_7739 = cljs.core.nth.call(null,vec__7670_7737,(1),null);
cljs.compiler.emitln.call(null,"goog.require('",lib_SINGLEQUOTE__7738,"');");

cljs.compiler.emitln.call(null,"goog.scope(function(){");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_goog_module_lib.call(null,lib_7736)," = goog.module.get('",lib_SINGLEQUOTE__7738,"')",cljs.compiler.sublib_select.call(null,sublib_7739),";");

cljs.compiler.emitln.call(null,"});");


var G__7740 = seq__7660_7732;
var G__7741 = chunk__7661_7733;
var G__7742 = count__7662_7734;
var G__7743 = (i__7663_7735 + (1));
seq__7660_7732 = G__7740;
chunk__7661_7733 = G__7741;
count__7662_7734 = G__7742;
i__7663_7735 = G__7743;
continue;
} else {
var temp__5804__auto___7744 = cljs.core.seq.call(null,seq__7660_7732);
if(temp__5804__auto___7744){
var seq__7660_7745__$1 = temp__5804__auto___7744;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7660_7745__$1)){
var c__5568__auto___7746 = cljs.core.chunk_first.call(null,seq__7660_7745__$1);
var G__7747 = cljs.core.chunk_rest.call(null,seq__7660_7745__$1);
var G__7748 = c__5568__auto___7746;
var G__7749 = cljs.core.count.call(null,c__5568__auto___7746);
var G__7750 = (0);
seq__7660_7732 = G__7747;
chunk__7661_7733 = G__7748;
count__7662_7734 = G__7749;
i__7663_7735 = G__7750;
continue;
} else {
var lib_7751 = cljs.core.first.call(null,seq__7660_7745__$1);
var vec__7673_7752 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_7751);
var lib_SINGLEQUOTE__7753 = cljs.core.nth.call(null,vec__7673_7752,(0),null);
var sublib_7754 = cljs.core.nth.call(null,vec__7673_7752,(1),null);
cljs.compiler.emitln.call(null,"goog.require('",lib_SINGLEQUOTE__7753,"');");

cljs.compiler.emitln.call(null,"goog.scope(function(){");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_goog_module_lib.call(null,lib_7751)," = goog.module.get('",lib_SINGLEQUOTE__7753,"')",cljs.compiler.sublib_select.call(null,sublib_7754),";");

cljs.compiler.emitln.call(null,"});");


var G__7755 = cljs.core.next.call(null,seq__7660_7745__$1);
var G__7756 = null;
var G__7757 = (0);
var G__7758 = (0);
seq__7660_7732 = G__7755;
chunk__7661_7733 = G__7756;
count__7662_7734 = G__7757;
i__7663_7735 = G__7758;
continue;
}
} else {
}
}
break;
}

var seq__7676_7759 = cljs.core.seq.call(null,global_exports_libs);
var chunk__7677_7760 = null;
var count__7678_7761 = (0);
var i__7679_7762 = (0);
while(true){
if((i__7679_7762 < count__7678_7761)){
var lib_7763 = cljs.core._nth.call(null,chunk__7677_7760,i__7679_7762);
var map__7682_7764 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,cljs.core.first.call(null,cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_7763))));
var map__7682_7765__$1 = cljs.core.__destructure_map.call(null,map__7682_7764);
var global_exports_7766 = cljs.core.get.call(null,map__7682_7765__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_7766,lib_7763);


var G__7767 = seq__7676_7759;
var G__7768 = chunk__7677_7760;
var G__7769 = count__7678_7761;
var G__7770 = (i__7679_7762 + (1));
seq__7676_7759 = G__7767;
chunk__7677_7760 = G__7768;
count__7678_7761 = G__7769;
i__7679_7762 = G__7770;
continue;
} else {
var temp__5804__auto___7771 = cljs.core.seq.call(null,seq__7676_7759);
if(temp__5804__auto___7771){
var seq__7676_7772__$1 = temp__5804__auto___7771;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7676_7772__$1)){
var c__5568__auto___7773 = cljs.core.chunk_first.call(null,seq__7676_7772__$1);
var G__7774 = cljs.core.chunk_rest.call(null,seq__7676_7772__$1);
var G__7775 = c__5568__auto___7773;
var G__7776 = cljs.core.count.call(null,c__5568__auto___7773);
var G__7777 = (0);
seq__7676_7759 = G__7774;
chunk__7677_7760 = G__7775;
count__7678_7761 = G__7776;
i__7679_7762 = G__7777;
continue;
} else {
var lib_7778 = cljs.core.first.call(null,seq__7676_7772__$1);
var map__7683_7779 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,cljs.core.first.call(null,cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_7778))));
var map__7683_7780__$1 = cljs.core.__destructure_map.call(null,map__7683_7779);
var global_exports_7781 = cljs.core.get.call(null,map__7683_7780__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_7781,lib_7778);


var G__7782 = cljs.core.next.call(null,seq__7676_7772__$1);
var G__7783 = null;
var G__7784 = (0);
var G__7785 = (0);
seq__7676_7759 = G__7782;
chunk__7677_7760 = G__7783;
count__7678_7761 = G__7784;
i__7679_7762 = G__7785;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__7786){
var map__7787 = p__7786;
var map__7787__$1 = cljs.core.__destructure_map.call(null,map__7787);
var name = cljs.core.get.call(null,map__7787__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__7787__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__7787__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__7787__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__7787__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__7787__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__7787__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__7788){
var map__7789 = p__7788;
var map__7789__$1 = cljs.core.__destructure_map.call(null,map__7789);
var name = cljs.core.get.call(null,map__7789__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__7789__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__7789__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__7789__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__7789__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__7789__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__7789__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__7790){
var map__7791 = p__7790;
var map__7791__$1 = cljs.core.__destructure_map.call(null,map__7791);
var t = cljs.core.get.call(null,map__7791__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__7791__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__7791__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__7791__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__7791__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__7792_7816 = cljs.core.seq.call(null,protocols);
var chunk__7793_7817 = null;
var count__7794_7818 = (0);
var i__7795_7819 = (0);
while(true){
if((i__7795_7819 < count__7794_7818)){
var protocol_7820 = cljs.core._nth.call(null,chunk__7793_7817,i__7795_7819);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_7820)),"}");


var G__7821 = seq__7792_7816;
var G__7822 = chunk__7793_7817;
var G__7823 = count__7794_7818;
var G__7824 = (i__7795_7819 + (1));
seq__7792_7816 = G__7821;
chunk__7793_7817 = G__7822;
count__7794_7818 = G__7823;
i__7795_7819 = G__7824;
continue;
} else {
var temp__5804__auto___7825 = cljs.core.seq.call(null,seq__7792_7816);
if(temp__5804__auto___7825){
var seq__7792_7826__$1 = temp__5804__auto___7825;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7792_7826__$1)){
var c__5568__auto___7827 = cljs.core.chunk_first.call(null,seq__7792_7826__$1);
var G__7828 = cljs.core.chunk_rest.call(null,seq__7792_7826__$1);
var G__7829 = c__5568__auto___7827;
var G__7830 = cljs.core.count.call(null,c__5568__auto___7827);
var G__7831 = (0);
seq__7792_7816 = G__7828;
chunk__7793_7817 = G__7829;
count__7794_7818 = G__7830;
i__7795_7819 = G__7831;
continue;
} else {
var protocol_7832 = cljs.core.first.call(null,seq__7792_7826__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_7832)),"}");


var G__7833 = cljs.core.next.call(null,seq__7792_7826__$1);
var G__7834 = null;
var G__7835 = (0);
var G__7836 = (0);
seq__7792_7816 = G__7833;
chunk__7793_7817 = G__7834;
count__7794_7818 = G__7835;
i__7795_7819 = G__7836;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__7796_7837 = cljs.core.seq.call(null,fields__$1);
var chunk__7797_7838 = null;
var count__7798_7839 = (0);
var i__7799_7840 = (0);
while(true){
if((i__7799_7840 < count__7798_7839)){
var fld_7841 = cljs.core._nth.call(null,chunk__7797_7838,i__7799_7840);
cljs.compiler.emitln.call(null,"this.",fld_7841," = ",fld_7841,";");


var G__7842 = seq__7796_7837;
var G__7843 = chunk__7797_7838;
var G__7844 = count__7798_7839;
var G__7845 = (i__7799_7840 + (1));
seq__7796_7837 = G__7842;
chunk__7797_7838 = G__7843;
count__7798_7839 = G__7844;
i__7799_7840 = G__7845;
continue;
} else {
var temp__5804__auto___7846 = cljs.core.seq.call(null,seq__7796_7837);
if(temp__5804__auto___7846){
var seq__7796_7847__$1 = temp__5804__auto___7846;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7796_7847__$1)){
var c__5568__auto___7848 = cljs.core.chunk_first.call(null,seq__7796_7847__$1);
var G__7849 = cljs.core.chunk_rest.call(null,seq__7796_7847__$1);
var G__7850 = c__5568__auto___7848;
var G__7851 = cljs.core.count.call(null,c__5568__auto___7848);
var G__7852 = (0);
seq__7796_7837 = G__7849;
chunk__7797_7838 = G__7850;
count__7798_7839 = G__7851;
i__7799_7840 = G__7852;
continue;
} else {
var fld_7853 = cljs.core.first.call(null,seq__7796_7847__$1);
cljs.compiler.emitln.call(null,"this.",fld_7853," = ",fld_7853,";");


var G__7854 = cljs.core.next.call(null,seq__7796_7847__$1);
var G__7855 = null;
var G__7856 = (0);
var G__7857 = (0);
seq__7796_7837 = G__7854;
chunk__7797_7838 = G__7855;
count__7798_7839 = G__7856;
i__7799_7840 = G__7857;
continue;
}
} else {
}
}
break;
}

var seq__7800_7858 = cljs.core.seq.call(null,pmasks);
var chunk__7801_7859 = null;
var count__7802_7860 = (0);
var i__7803_7861 = (0);
while(true){
if((i__7803_7861 < count__7802_7860)){
var vec__7810_7862 = cljs.core._nth.call(null,chunk__7801_7859,i__7803_7861);
var pno_7863 = cljs.core.nth.call(null,vec__7810_7862,(0),null);
var pmask_7864 = cljs.core.nth.call(null,vec__7810_7862,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_7863,"$ = ",pmask_7864,";");


var G__7865 = seq__7800_7858;
var G__7866 = chunk__7801_7859;
var G__7867 = count__7802_7860;
var G__7868 = (i__7803_7861 + (1));
seq__7800_7858 = G__7865;
chunk__7801_7859 = G__7866;
count__7802_7860 = G__7867;
i__7803_7861 = G__7868;
continue;
} else {
var temp__5804__auto___7869 = cljs.core.seq.call(null,seq__7800_7858);
if(temp__5804__auto___7869){
var seq__7800_7870__$1 = temp__5804__auto___7869;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7800_7870__$1)){
var c__5568__auto___7871 = cljs.core.chunk_first.call(null,seq__7800_7870__$1);
var G__7872 = cljs.core.chunk_rest.call(null,seq__7800_7870__$1);
var G__7873 = c__5568__auto___7871;
var G__7874 = cljs.core.count.call(null,c__5568__auto___7871);
var G__7875 = (0);
seq__7800_7858 = G__7872;
chunk__7801_7859 = G__7873;
count__7802_7860 = G__7874;
i__7803_7861 = G__7875;
continue;
} else {
var vec__7813_7876 = cljs.core.first.call(null,seq__7800_7870__$1);
var pno_7877 = cljs.core.nth.call(null,vec__7813_7876,(0),null);
var pmask_7878 = cljs.core.nth.call(null,vec__7813_7876,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_7877,"$ = ",pmask_7878,";");


var G__7879 = cljs.core.next.call(null,seq__7800_7870__$1);
var G__7880 = null;
var G__7881 = (0);
var G__7882 = (0);
seq__7800_7858 = G__7879;
chunk__7801_7859 = G__7880;
count__7802_7860 = G__7881;
i__7803_7861 = G__7882;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__7883){
var map__7884 = p__7883;
var map__7884__$1 = cljs.core.__destructure_map.call(null,map__7884);
var t = cljs.core.get.call(null,map__7884__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__7884__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__7884__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__7884__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__7884__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__7885_7909 = cljs.core.seq.call(null,protocols);
var chunk__7886_7910 = null;
var count__7887_7911 = (0);
var i__7888_7912 = (0);
while(true){
if((i__7888_7912 < count__7887_7911)){
var protocol_7913 = cljs.core._nth.call(null,chunk__7886_7910,i__7888_7912);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_7913)),"}");


var G__7914 = seq__7885_7909;
var G__7915 = chunk__7886_7910;
var G__7916 = count__7887_7911;
var G__7917 = (i__7888_7912 + (1));
seq__7885_7909 = G__7914;
chunk__7886_7910 = G__7915;
count__7887_7911 = G__7916;
i__7888_7912 = G__7917;
continue;
} else {
var temp__5804__auto___7918 = cljs.core.seq.call(null,seq__7885_7909);
if(temp__5804__auto___7918){
var seq__7885_7919__$1 = temp__5804__auto___7918;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7885_7919__$1)){
var c__5568__auto___7920 = cljs.core.chunk_first.call(null,seq__7885_7919__$1);
var G__7921 = cljs.core.chunk_rest.call(null,seq__7885_7919__$1);
var G__7922 = c__5568__auto___7920;
var G__7923 = cljs.core.count.call(null,c__5568__auto___7920);
var G__7924 = (0);
seq__7885_7909 = G__7921;
chunk__7886_7910 = G__7922;
count__7887_7911 = G__7923;
i__7888_7912 = G__7924;
continue;
} else {
var protocol_7925 = cljs.core.first.call(null,seq__7885_7919__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_7925)),"}");


var G__7926 = cljs.core.next.call(null,seq__7885_7919__$1);
var G__7927 = null;
var G__7928 = (0);
var G__7929 = (0);
seq__7885_7909 = G__7926;
chunk__7886_7910 = G__7927;
count__7887_7911 = G__7928;
i__7888_7912 = G__7929;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__7889_7930 = cljs.core.seq.call(null,fields__$1);
var chunk__7890_7931 = null;
var count__7891_7932 = (0);
var i__7892_7933 = (0);
while(true){
if((i__7892_7933 < count__7891_7932)){
var fld_7934 = cljs.core._nth.call(null,chunk__7890_7931,i__7892_7933);
cljs.compiler.emitln.call(null,"this.",fld_7934," = ",fld_7934,";");


var G__7935 = seq__7889_7930;
var G__7936 = chunk__7890_7931;
var G__7937 = count__7891_7932;
var G__7938 = (i__7892_7933 + (1));
seq__7889_7930 = G__7935;
chunk__7890_7931 = G__7936;
count__7891_7932 = G__7937;
i__7892_7933 = G__7938;
continue;
} else {
var temp__5804__auto___7939 = cljs.core.seq.call(null,seq__7889_7930);
if(temp__5804__auto___7939){
var seq__7889_7940__$1 = temp__5804__auto___7939;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7889_7940__$1)){
var c__5568__auto___7941 = cljs.core.chunk_first.call(null,seq__7889_7940__$1);
var G__7942 = cljs.core.chunk_rest.call(null,seq__7889_7940__$1);
var G__7943 = c__5568__auto___7941;
var G__7944 = cljs.core.count.call(null,c__5568__auto___7941);
var G__7945 = (0);
seq__7889_7930 = G__7942;
chunk__7890_7931 = G__7943;
count__7891_7932 = G__7944;
i__7892_7933 = G__7945;
continue;
} else {
var fld_7946 = cljs.core.first.call(null,seq__7889_7940__$1);
cljs.compiler.emitln.call(null,"this.",fld_7946," = ",fld_7946,";");


var G__7947 = cljs.core.next.call(null,seq__7889_7940__$1);
var G__7948 = null;
var G__7949 = (0);
var G__7950 = (0);
seq__7889_7930 = G__7947;
chunk__7890_7931 = G__7948;
count__7891_7932 = G__7949;
i__7892_7933 = G__7950;
continue;
}
} else {
}
}
break;
}

var seq__7893_7951 = cljs.core.seq.call(null,pmasks);
var chunk__7894_7952 = null;
var count__7895_7953 = (0);
var i__7896_7954 = (0);
while(true){
if((i__7896_7954 < count__7895_7953)){
var vec__7903_7955 = cljs.core._nth.call(null,chunk__7894_7952,i__7896_7954);
var pno_7956 = cljs.core.nth.call(null,vec__7903_7955,(0),null);
var pmask_7957 = cljs.core.nth.call(null,vec__7903_7955,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_7956,"$ = ",pmask_7957,";");


var G__7958 = seq__7893_7951;
var G__7959 = chunk__7894_7952;
var G__7960 = count__7895_7953;
var G__7961 = (i__7896_7954 + (1));
seq__7893_7951 = G__7958;
chunk__7894_7952 = G__7959;
count__7895_7953 = G__7960;
i__7896_7954 = G__7961;
continue;
} else {
var temp__5804__auto___7962 = cljs.core.seq.call(null,seq__7893_7951);
if(temp__5804__auto___7962){
var seq__7893_7963__$1 = temp__5804__auto___7962;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7893_7963__$1)){
var c__5568__auto___7964 = cljs.core.chunk_first.call(null,seq__7893_7963__$1);
var G__7965 = cljs.core.chunk_rest.call(null,seq__7893_7963__$1);
var G__7966 = c__5568__auto___7964;
var G__7967 = cljs.core.count.call(null,c__5568__auto___7964);
var G__7968 = (0);
seq__7893_7951 = G__7965;
chunk__7894_7952 = G__7966;
count__7895_7953 = G__7967;
i__7896_7954 = G__7968;
continue;
} else {
var vec__7906_7969 = cljs.core.first.call(null,seq__7893_7963__$1);
var pno_7970 = cljs.core.nth.call(null,vec__7906_7969,(0),null);
var pmask_7971 = cljs.core.nth.call(null,vec__7906_7969,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_7970,"$ = ",pmask_7971,";");


var G__7972 = cljs.core.next.call(null,seq__7893_7963__$1);
var G__7973 = null;
var G__7974 = (0);
var G__7975 = (0);
seq__7893_7951 = G__7972;
chunk__7894_7952 = G__7973;
count__7895_7953 = G__7974;
i__7896_7954 = G__7975;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__7976){
var map__7977 = p__7976;
var map__7977__$1 = cljs.core.__destructure_map.call(null,map__7977);
var target = cljs.core.get.call(null,map__7977__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__7977__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__7977__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__7977__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__7977__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__7978){
var map__7979 = p__7978;
var map__7979__$1 = cljs.core.__destructure_map.call(null,map__7979);
var op = cljs.core.get.call(null,map__7979__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__7979__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__7979__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__7979__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__7979__$1,new cljs.core.Keyword(null,"args","args",1315556576));
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

var seq__7984 = cljs.core.seq.call(null,table);
var chunk__7985 = null;
var count__7986 = (0);
var i__7987 = (0);
while(true){
if((i__7987 < count__7986)){
var vec__7994 = cljs.core._nth.call(null,chunk__7985,i__7987);
var sym = cljs.core.nth.call(null,vec__7994,(0),null);
var value = cljs.core.nth.call(null,vec__7994,(1),null);
var ns_8000 = cljs.core.namespace.call(null,sym);
var name_8001 = cljs.core.name.call(null,sym);
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


var G__8002 = seq__7984;
var G__8003 = chunk__7985;
var G__8004 = count__7986;
var G__8005 = (i__7987 + (1));
seq__7984 = G__8002;
chunk__7985 = G__8003;
count__7986 = G__8004;
i__7987 = G__8005;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__7984);
if(temp__5804__auto__){
var seq__7984__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7984__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__7984__$1);
var G__8006 = cljs.core.chunk_rest.call(null,seq__7984__$1);
var G__8007 = c__5568__auto__;
var G__8008 = cljs.core.count.call(null,c__5568__auto__);
var G__8009 = (0);
seq__7984 = G__8006;
chunk__7985 = G__8007;
count__7986 = G__8008;
i__7987 = G__8009;
continue;
} else {
var vec__7997 = cljs.core.first.call(null,seq__7984__$1);
var sym = cljs.core.nth.call(null,vec__7997,(0),null);
var value = cljs.core.nth.call(null,vec__7997,(1),null);
var ns_8010 = cljs.core.namespace.call(null,sym);
var name_8011 = cljs.core.name.call(null,sym);
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


var G__8012 = cljs.core.next.call(null,seq__7984__$1);
var G__8013 = null;
var G__8014 = (0);
var G__8015 = (0);
seq__7984 = G__8012;
chunk__7985 = G__8013;
count__7986 = G__8014;
i__7987 = G__8015;
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
var G__8017 = arguments.length;
switch (G__8017) {
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
var k_8022 = cljs.core.first.call(null,ks);
var vec__8018_8023 = cljs.core.conj.call(null,prefix,k_8022);
var top_8024 = cljs.core.nth.call(null,vec__8018_8023,(0),null);
var prefix_SINGLEQUOTE__8025 = vec__8018_8023;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_8022)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__8025) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_8024)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_8024)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__8025)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_8024);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__8025)),";");
}
} else {
}

var m_8026 = cljs.core.get.call(null,externs,k_8022);
if(cljs.core.empty_QMARK_.call(null,m_8026)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__8025,m_8026,top_level,known_externs);
}

var G__8027 = cljs.core.next.call(null,ks);
ks = G__8027;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=compiler.js.map
