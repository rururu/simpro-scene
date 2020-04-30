// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__6873){
var vec__6874 = p__6873;
var i = cljs.core.nth.call(null,vec__6874,(0),null);
var v = cljs.core.nth.call(null,vec__6874,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__6877 = seg;
var gcol = cljs.core.nth.call(null,vec__6877,(0),null);
var source = cljs.core.nth.call(null,vec__6877,(1),null);
var line = cljs.core.nth.call(null,vec__6877,(2),null);
var col = cljs.core.nth.call(null,vec__6877,(3),null);
var name = cljs.core.nth.call(null,vec__6877,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__5735__auto__)){
var name__$1 = temp__5735__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__6880 = seg;
var gcol = cljs.core.nth.call(null,vec__6880,(0),null);
var source = cljs.core.nth.call(null,vec__6880,(1),null);
var line = cljs.core.nth.call(null,vec__6880,(2),null);
var col = cljs.core.nth.call(null,vec__6880,(3),null);
var name = cljs.core.nth.call(null,vec__6880,(4),null);
var vec__6883 = relseg;
var rgcol = cljs.core.nth.call(null,vec__6883,(0),null);
var rsource = cljs.core.nth.call(null,vec__6883,(1),null);
var rline = cljs.core.nth.call(null,vec__6883,(2),null);
var rcol = cljs.core.nth.call(null,vec__6883,(3),null);
var rname = cljs.core.nth.call(null,vec__6883,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__4047__auto__ = source;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__4047__auto__ = line;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__4047__auto__ = col;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__6886 = segmap;
var map__6886__$1 = (((((!((map__6886 == null))))?(((((map__6886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6886):map__6886);
var gcol = cljs.core.get.call(null,map__6886__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__6886__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__6886__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__6886__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__6886__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__6886,map__6886__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__6886,map__6886__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__6886,map__6886__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__6886,map__6886__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__6886,map__6886__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__6886,map__6886__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__6889 = arguments.length;
switch (G__6889) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__6890 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__6894 = cljs.core.next.call(null,segs__$1);
var G__6895 = nrelseg;
var G__6896 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__6894;
relseg__$1 = G__6895;
result__$1 = G__6896;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__6890,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__6890,(1),null);
var G__6897 = (gline + (1));
var G__6898 = cljs.core.next.call(null,lines__$1);
var G__6899 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__6900 = result__$1;
gline = G__6897;
lines__$1 = G__6898;
relseg = G__6899;
result = G__6900;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__6902 = segmap;
var map__6902__$1 = (((((!((map__6902 == null))))?(((((map__6902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6902):map__6902);
var gcol = cljs.core.get.call(null,map__6902__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__6902__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__6902__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__6902__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__6902__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__6902,map__6902__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__6902,map__6902__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__6901_SHARP_){
return cljs.core.conj.call(null,p1__6901_SHARP_,d__$1);
});})(map__6902,map__6902__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__6902,map__6902__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__6905 = arguments.length;
switch (G__6905) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__6906 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__6910 = cljs.core.next.call(null,segs__$1);
var G__6911 = nrelseg;
var G__6912 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__6910;
relseg__$1 = G__6911;
result__$1 = G__6912;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__6906,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__6906,(1),null);
var G__6913 = (gline + (1));
var G__6914 = cljs.core.next.call(null,lines__$1);
var G__6915 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__6916 = result__$1;
gline = G__6913;
lines__$1 = G__6914;
relseg = G__6915;
result = G__6916;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,((function (relseg){
return (function (p__6917){
var vec__6918 = p__6917;
var _ = cljs.core.nth.call(null,vec__6918,(0),null);
var source = cljs.core.nth.call(null,vec__6918,(1),null);
var line = cljs.core.nth.call(null,vec__6918,(2),null);
var col = cljs.core.nth.call(null,vec__6918,(3),null);
var name = cljs.core.nth.call(null,vec__6918,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__6921){
var vec__6922 = p__6921;
var gcol = cljs.core.nth.call(null,vec__6922,(0),null);
var sidx = cljs.core.nth.call(null,vec__6922,(1),null);
var line = cljs.core.nth.call(null,vec__6922,(2),null);
var col = cljs.core.nth.call(null,vec__6922,(3),null);
var name = cljs.core.nth.call(null,vec__6922,(4),null);
var seg = vec__6922;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__6922,gcol,sidx,line,col,name,seg,relseg){
return (function (p__6925){
var vec__6926 = p__6925;
var _ = cljs.core.nth.call(null,vec__6926,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__6926,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__6926,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__6926,(3),null);
var lname = cljs.core.nth.call(null,vec__6926,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__6922,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5733__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5733__auto__)){
var name = temp__5733__auto__;
var idx = (function (){var temp__5733__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__5733__auto____$1)){
var idx = temp__5733__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__6932 = cljs.core.seq.call(null,infos);
var chunk__6933 = null;
var count__6934 = (0);
var i__6935 = (0);
while(true){
if((i__6935 < count__6934)){
var info = cljs.core._nth.call(null,chunk__6933,i__6935);
var segv_7014 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_7015 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_7016 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_7015 > (lc_7016 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__6932,chunk__6933,count__6934,i__6935,segv_7014,gline_7015,lc_7016,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_7015 - (lc_7016 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_7014], null));
});})(seq__6932,chunk__6933,count__6934,i__6935,segv_7014,gline_7015,lc_7016,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__6932,chunk__6933,count__6934,i__6935,segv_7014,gline_7015,lc_7016,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_7015], null),cljs.core.conj,segv_7014);
});})(seq__6932,chunk__6933,count__6934,i__6935,segv_7014,gline_7015,lc_7016,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__7017 = seq__6932;
var G__7018 = chunk__6933;
var G__7019 = count__6934;
var G__7020 = (i__6935 + (1));
seq__6932 = G__7017;
chunk__6933 = G__7018;
count__6934 = G__7019;
i__6935 = G__7020;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__6932);
if(temp__5735__auto__){
var seq__6932__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6932__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__6932__$1);
var G__7021 = cljs.core.chunk_rest.call(null,seq__6932__$1);
var G__7022 = c__4461__auto__;
var G__7023 = cljs.core.count.call(null,c__4461__auto__);
var G__7024 = (0);
seq__6932 = G__7021;
chunk__6933 = G__7022;
count__6934 = G__7023;
i__6935 = G__7024;
continue;
} else {
var info = cljs.core.first.call(null,seq__6932__$1);
var segv_7025 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_7026 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_7027 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_7026 > (lc_7027 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__6932,chunk__6933,count__6934,i__6935,segv_7025,gline_7026,lc_7027,info,seq__6932__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_7026 - (lc_7027 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_7025], null));
});})(seq__6932,chunk__6933,count__6934,i__6935,segv_7025,gline_7026,lc_7027,info,seq__6932__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__6932,chunk__6933,count__6934,i__6935,segv_7025,gline_7026,lc_7027,info,seq__6932__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_7026], null),cljs.core.conj,segv_7025);
});})(seq__6932,chunk__6933,count__6934,i__6935,segv_7025,gline_7026,lc_7027,info,seq__6932__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__7028 = cljs.core.next.call(null,seq__6932__$1);
var G__7029 = null;
var G__7030 = (0);
var G__7031 = (0);
seq__6932 = G__7028;
chunk__6933 = G__7029;
count__6934 = G__7030;
i__6935 = G__7031;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__6936_7032 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__6937_7033 = null;
var count__6938_7034 = (0);
var i__6939_7035 = (0);
while(true){
if((i__6939_7035 < count__6938_7034)){
var vec__6940_7036 = cljs.core._nth.call(null,chunk__6937_7033,i__6939_7035);
var source_idx_7037 = cljs.core.nth.call(null,vec__6940_7036,(0),null);
var vec__6943_7038 = cljs.core.nth.call(null,vec__6940_7036,(1),null);
var __7039 = cljs.core.nth.call(null,vec__6943_7038,(0),null);
var lines_7040__$1 = cljs.core.nth.call(null,vec__6943_7038,(1),null);
var seq__6946_7041 = cljs.core.seq.call(null,lines_7040__$1);
var chunk__6947_7042 = null;
var count__6948_7043 = (0);
var i__6949_7044 = (0);
while(true){
if((i__6949_7044 < count__6948_7043)){
var vec__6950_7045 = cljs.core._nth.call(null,chunk__6947_7042,i__6949_7044);
var line_7046 = cljs.core.nth.call(null,vec__6950_7045,(0),null);
var cols_7047 = cljs.core.nth.call(null,vec__6950_7045,(1),null);
var seq__6953_7048 = cljs.core.seq.call(null,cols_7047);
var chunk__6954_7049 = null;
var count__6955_7050 = (0);
var i__6956_7051 = (0);
while(true){
if((i__6956_7051 < count__6955_7050)){
var vec__6957_7052 = cljs.core._nth.call(null,chunk__6954_7049,i__6956_7051);
var col_7053 = cljs.core.nth.call(null,vec__6957_7052,(0),null);
var infos_7054 = cljs.core.nth.call(null,vec__6957_7052,(1),null);
encode_cols.call(null,infos_7054,source_idx_7037,line_7046,col_7053);


var G__7055 = seq__6953_7048;
var G__7056 = chunk__6954_7049;
var G__7057 = count__6955_7050;
var G__7058 = (i__6956_7051 + (1));
seq__6953_7048 = G__7055;
chunk__6954_7049 = G__7056;
count__6955_7050 = G__7057;
i__6956_7051 = G__7058;
continue;
} else {
var temp__5735__auto___7059 = cljs.core.seq.call(null,seq__6953_7048);
if(temp__5735__auto___7059){
var seq__6953_7060__$1 = temp__5735__auto___7059;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6953_7060__$1)){
var c__4461__auto___7061 = cljs.core.chunk_first.call(null,seq__6953_7060__$1);
var G__7062 = cljs.core.chunk_rest.call(null,seq__6953_7060__$1);
var G__7063 = c__4461__auto___7061;
var G__7064 = cljs.core.count.call(null,c__4461__auto___7061);
var G__7065 = (0);
seq__6953_7048 = G__7062;
chunk__6954_7049 = G__7063;
count__6955_7050 = G__7064;
i__6956_7051 = G__7065;
continue;
} else {
var vec__6960_7066 = cljs.core.first.call(null,seq__6953_7060__$1);
var col_7067 = cljs.core.nth.call(null,vec__6960_7066,(0),null);
var infos_7068 = cljs.core.nth.call(null,vec__6960_7066,(1),null);
encode_cols.call(null,infos_7068,source_idx_7037,line_7046,col_7067);


var G__7069 = cljs.core.next.call(null,seq__6953_7060__$1);
var G__7070 = null;
var G__7071 = (0);
var G__7072 = (0);
seq__6953_7048 = G__7069;
chunk__6954_7049 = G__7070;
count__6955_7050 = G__7071;
i__6956_7051 = G__7072;
continue;
}
} else {
}
}
break;
}


var G__7073 = seq__6946_7041;
var G__7074 = chunk__6947_7042;
var G__7075 = count__6948_7043;
var G__7076 = (i__6949_7044 + (1));
seq__6946_7041 = G__7073;
chunk__6947_7042 = G__7074;
count__6948_7043 = G__7075;
i__6949_7044 = G__7076;
continue;
} else {
var temp__5735__auto___7077 = cljs.core.seq.call(null,seq__6946_7041);
if(temp__5735__auto___7077){
var seq__6946_7078__$1 = temp__5735__auto___7077;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6946_7078__$1)){
var c__4461__auto___7079 = cljs.core.chunk_first.call(null,seq__6946_7078__$1);
var G__7080 = cljs.core.chunk_rest.call(null,seq__6946_7078__$1);
var G__7081 = c__4461__auto___7079;
var G__7082 = cljs.core.count.call(null,c__4461__auto___7079);
var G__7083 = (0);
seq__6946_7041 = G__7080;
chunk__6947_7042 = G__7081;
count__6948_7043 = G__7082;
i__6949_7044 = G__7083;
continue;
} else {
var vec__6963_7084 = cljs.core.first.call(null,seq__6946_7078__$1);
var line_7085 = cljs.core.nth.call(null,vec__6963_7084,(0),null);
var cols_7086 = cljs.core.nth.call(null,vec__6963_7084,(1),null);
var seq__6966_7087 = cljs.core.seq.call(null,cols_7086);
var chunk__6967_7088 = null;
var count__6968_7089 = (0);
var i__6969_7090 = (0);
while(true){
if((i__6969_7090 < count__6968_7089)){
var vec__6970_7091 = cljs.core._nth.call(null,chunk__6967_7088,i__6969_7090);
var col_7092 = cljs.core.nth.call(null,vec__6970_7091,(0),null);
var infos_7093 = cljs.core.nth.call(null,vec__6970_7091,(1),null);
encode_cols.call(null,infos_7093,source_idx_7037,line_7085,col_7092);


var G__7094 = seq__6966_7087;
var G__7095 = chunk__6967_7088;
var G__7096 = count__6968_7089;
var G__7097 = (i__6969_7090 + (1));
seq__6966_7087 = G__7094;
chunk__6967_7088 = G__7095;
count__6968_7089 = G__7096;
i__6969_7090 = G__7097;
continue;
} else {
var temp__5735__auto___7098__$1 = cljs.core.seq.call(null,seq__6966_7087);
if(temp__5735__auto___7098__$1){
var seq__6966_7099__$1 = temp__5735__auto___7098__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6966_7099__$1)){
var c__4461__auto___7100 = cljs.core.chunk_first.call(null,seq__6966_7099__$1);
var G__7101 = cljs.core.chunk_rest.call(null,seq__6966_7099__$1);
var G__7102 = c__4461__auto___7100;
var G__7103 = cljs.core.count.call(null,c__4461__auto___7100);
var G__7104 = (0);
seq__6966_7087 = G__7101;
chunk__6967_7088 = G__7102;
count__6968_7089 = G__7103;
i__6969_7090 = G__7104;
continue;
} else {
var vec__6973_7105 = cljs.core.first.call(null,seq__6966_7099__$1);
var col_7106 = cljs.core.nth.call(null,vec__6973_7105,(0),null);
var infos_7107 = cljs.core.nth.call(null,vec__6973_7105,(1),null);
encode_cols.call(null,infos_7107,source_idx_7037,line_7085,col_7106);


var G__7108 = cljs.core.next.call(null,seq__6966_7099__$1);
var G__7109 = null;
var G__7110 = (0);
var G__7111 = (0);
seq__6966_7087 = G__7108;
chunk__6967_7088 = G__7109;
count__6968_7089 = G__7110;
i__6969_7090 = G__7111;
continue;
}
} else {
}
}
break;
}


var G__7112 = cljs.core.next.call(null,seq__6946_7078__$1);
var G__7113 = null;
var G__7114 = (0);
var G__7115 = (0);
seq__6946_7041 = G__7112;
chunk__6947_7042 = G__7113;
count__6948_7043 = G__7114;
i__6949_7044 = G__7115;
continue;
}
} else {
}
}
break;
}


var G__7116 = seq__6936_7032;
var G__7117 = chunk__6937_7033;
var G__7118 = count__6938_7034;
var G__7119 = (i__6939_7035 + (1));
seq__6936_7032 = G__7116;
chunk__6937_7033 = G__7117;
count__6938_7034 = G__7118;
i__6939_7035 = G__7119;
continue;
} else {
var temp__5735__auto___7120 = cljs.core.seq.call(null,seq__6936_7032);
if(temp__5735__auto___7120){
var seq__6936_7121__$1 = temp__5735__auto___7120;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6936_7121__$1)){
var c__4461__auto___7122 = cljs.core.chunk_first.call(null,seq__6936_7121__$1);
var G__7123 = cljs.core.chunk_rest.call(null,seq__6936_7121__$1);
var G__7124 = c__4461__auto___7122;
var G__7125 = cljs.core.count.call(null,c__4461__auto___7122);
var G__7126 = (0);
seq__6936_7032 = G__7123;
chunk__6937_7033 = G__7124;
count__6938_7034 = G__7125;
i__6939_7035 = G__7126;
continue;
} else {
var vec__6976_7127 = cljs.core.first.call(null,seq__6936_7121__$1);
var source_idx_7128 = cljs.core.nth.call(null,vec__6976_7127,(0),null);
var vec__6979_7129 = cljs.core.nth.call(null,vec__6976_7127,(1),null);
var __7130 = cljs.core.nth.call(null,vec__6979_7129,(0),null);
var lines_7131__$1 = cljs.core.nth.call(null,vec__6979_7129,(1),null);
var seq__6982_7132 = cljs.core.seq.call(null,lines_7131__$1);
var chunk__6983_7133 = null;
var count__6984_7134 = (0);
var i__6985_7135 = (0);
while(true){
if((i__6985_7135 < count__6984_7134)){
var vec__6986_7136 = cljs.core._nth.call(null,chunk__6983_7133,i__6985_7135);
var line_7137 = cljs.core.nth.call(null,vec__6986_7136,(0),null);
var cols_7138 = cljs.core.nth.call(null,vec__6986_7136,(1),null);
var seq__6989_7139 = cljs.core.seq.call(null,cols_7138);
var chunk__6990_7140 = null;
var count__6991_7141 = (0);
var i__6992_7142 = (0);
while(true){
if((i__6992_7142 < count__6991_7141)){
var vec__6993_7143 = cljs.core._nth.call(null,chunk__6990_7140,i__6992_7142);
var col_7144 = cljs.core.nth.call(null,vec__6993_7143,(0),null);
var infos_7145 = cljs.core.nth.call(null,vec__6993_7143,(1),null);
encode_cols.call(null,infos_7145,source_idx_7128,line_7137,col_7144);


var G__7146 = seq__6989_7139;
var G__7147 = chunk__6990_7140;
var G__7148 = count__6991_7141;
var G__7149 = (i__6992_7142 + (1));
seq__6989_7139 = G__7146;
chunk__6990_7140 = G__7147;
count__6991_7141 = G__7148;
i__6992_7142 = G__7149;
continue;
} else {
var temp__5735__auto___7150__$1 = cljs.core.seq.call(null,seq__6989_7139);
if(temp__5735__auto___7150__$1){
var seq__6989_7151__$1 = temp__5735__auto___7150__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6989_7151__$1)){
var c__4461__auto___7152 = cljs.core.chunk_first.call(null,seq__6989_7151__$1);
var G__7153 = cljs.core.chunk_rest.call(null,seq__6989_7151__$1);
var G__7154 = c__4461__auto___7152;
var G__7155 = cljs.core.count.call(null,c__4461__auto___7152);
var G__7156 = (0);
seq__6989_7139 = G__7153;
chunk__6990_7140 = G__7154;
count__6991_7141 = G__7155;
i__6992_7142 = G__7156;
continue;
} else {
var vec__6996_7157 = cljs.core.first.call(null,seq__6989_7151__$1);
var col_7158 = cljs.core.nth.call(null,vec__6996_7157,(0),null);
var infos_7159 = cljs.core.nth.call(null,vec__6996_7157,(1),null);
encode_cols.call(null,infos_7159,source_idx_7128,line_7137,col_7158);


var G__7160 = cljs.core.next.call(null,seq__6989_7151__$1);
var G__7161 = null;
var G__7162 = (0);
var G__7163 = (0);
seq__6989_7139 = G__7160;
chunk__6990_7140 = G__7161;
count__6991_7141 = G__7162;
i__6992_7142 = G__7163;
continue;
}
} else {
}
}
break;
}


var G__7164 = seq__6982_7132;
var G__7165 = chunk__6983_7133;
var G__7166 = count__6984_7134;
var G__7167 = (i__6985_7135 + (1));
seq__6982_7132 = G__7164;
chunk__6983_7133 = G__7165;
count__6984_7134 = G__7166;
i__6985_7135 = G__7167;
continue;
} else {
var temp__5735__auto___7168__$1 = cljs.core.seq.call(null,seq__6982_7132);
if(temp__5735__auto___7168__$1){
var seq__6982_7169__$1 = temp__5735__auto___7168__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6982_7169__$1)){
var c__4461__auto___7170 = cljs.core.chunk_first.call(null,seq__6982_7169__$1);
var G__7171 = cljs.core.chunk_rest.call(null,seq__6982_7169__$1);
var G__7172 = c__4461__auto___7170;
var G__7173 = cljs.core.count.call(null,c__4461__auto___7170);
var G__7174 = (0);
seq__6982_7132 = G__7171;
chunk__6983_7133 = G__7172;
count__6984_7134 = G__7173;
i__6985_7135 = G__7174;
continue;
} else {
var vec__6999_7175 = cljs.core.first.call(null,seq__6982_7169__$1);
var line_7176 = cljs.core.nth.call(null,vec__6999_7175,(0),null);
var cols_7177 = cljs.core.nth.call(null,vec__6999_7175,(1),null);
var seq__7002_7178 = cljs.core.seq.call(null,cols_7177);
var chunk__7003_7179 = null;
var count__7004_7180 = (0);
var i__7005_7181 = (0);
while(true){
if((i__7005_7181 < count__7004_7180)){
var vec__7006_7182 = cljs.core._nth.call(null,chunk__7003_7179,i__7005_7181);
var col_7183 = cljs.core.nth.call(null,vec__7006_7182,(0),null);
var infos_7184 = cljs.core.nth.call(null,vec__7006_7182,(1),null);
encode_cols.call(null,infos_7184,source_idx_7128,line_7176,col_7183);


var G__7185 = seq__7002_7178;
var G__7186 = chunk__7003_7179;
var G__7187 = count__7004_7180;
var G__7188 = (i__7005_7181 + (1));
seq__7002_7178 = G__7185;
chunk__7003_7179 = G__7186;
count__7004_7180 = G__7187;
i__7005_7181 = G__7188;
continue;
} else {
var temp__5735__auto___7189__$2 = cljs.core.seq.call(null,seq__7002_7178);
if(temp__5735__auto___7189__$2){
var seq__7002_7190__$1 = temp__5735__auto___7189__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7002_7190__$1)){
var c__4461__auto___7191 = cljs.core.chunk_first.call(null,seq__7002_7190__$1);
var G__7192 = cljs.core.chunk_rest.call(null,seq__7002_7190__$1);
var G__7193 = c__4461__auto___7191;
var G__7194 = cljs.core.count.call(null,c__4461__auto___7191);
var G__7195 = (0);
seq__7002_7178 = G__7192;
chunk__7003_7179 = G__7193;
count__7004_7180 = G__7194;
i__7005_7181 = G__7195;
continue;
} else {
var vec__7009_7196 = cljs.core.first.call(null,seq__7002_7190__$1);
var col_7197 = cljs.core.nth.call(null,vec__7009_7196,(0),null);
var infos_7198 = cljs.core.nth.call(null,vec__7009_7196,(1),null);
encode_cols.call(null,infos_7198,source_idx_7128,line_7176,col_7197);


var G__7199 = cljs.core.next.call(null,seq__7002_7190__$1);
var G__7200 = null;
var G__7201 = (0);
var G__7202 = (0);
seq__7002_7178 = G__7199;
chunk__7003_7179 = G__7200;
count__7004_7180 = G__7201;
i__7005_7181 = G__7202;
continue;
}
} else {
}
}
break;
}


var G__7203 = cljs.core.next.call(null,seq__6982_7169__$1);
var G__7204 = null;
var G__7205 = (0);
var G__7206 = (0);
seq__6982_7132 = G__7203;
chunk__6983_7133 = G__7204;
count__6984_7134 = G__7205;
i__6985_7135 = G__7206;
continue;
}
} else {
}
}
break;
}


var G__7207 = cljs.core.next.call(null,seq__6936_7121__$1);
var G__7208 = null;
var G__7209 = (0);
var G__7210 = (0);
seq__6936_7032 = G__7207;
chunk__6937_7033 = G__7208;
count__6938_7034 = G__7209;
i__6939_7035 = G__7210;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__7012 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__6929_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__6929_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__6930_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__6930_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__6931_SHARP_){
return clojure.string.join.call(null,",",p1__6931_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__7013 = G__7012;
goog.object.set(G__7013,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__7013;
} else {
return G__7012;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__7211 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__7211,(0),null);
var col_map = cljs.core.nth.call(null,vec__7211,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__7214 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__7214,(0),null);
var infos = cljs.core.nth.call(null,vec__7214,(1),null);
var G__7220 = cljs.core.next.call(null,col_map_seq);
var G__7221 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__7214,col,infos,vec__7211,line,col_map){
return (function (v,p__7217){
var map__7218 = p__7217;
var map__7218__$1 = (((((!((map__7218 == null))))?(((((map__7218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7218):map__7218);
var gline = cljs.core.get.call(null,map__7218__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__7218__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__7214,col,infos,vec__7211,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__7220;
new_cols = G__7221;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__7222 = cljs.core.next.call(null,line_map_seq);
var G__7223 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__7222;
new_lines = G__7223;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__7224_7286 = cljs.core.seq.call(null,reverse_map);
var chunk__7225_7287 = null;
var count__7226_7288 = (0);
var i__7227_7289 = (0);
while(true){
if((i__7227_7289 < count__7226_7288)){
var vec__7228_7290 = cljs.core._nth.call(null,chunk__7225_7287,i__7227_7289);
var line_7291 = cljs.core.nth.call(null,vec__7228_7290,(0),null);
var columns_7292 = cljs.core.nth.call(null,vec__7228_7290,(1),null);
var seq__7231_7293 = cljs.core.seq.call(null,columns_7292);
var chunk__7232_7294 = null;
var count__7233_7295 = (0);
var i__7234_7296 = (0);
while(true){
if((i__7234_7296 < count__7233_7295)){
var vec__7235_7297 = cljs.core._nth.call(null,chunk__7232_7294,i__7234_7296);
var column_7298 = cljs.core.nth.call(null,vec__7235_7297,(0),null);
var column_info_7299 = cljs.core.nth.call(null,vec__7235_7297,(1),null);
var seq__7238_7300 = cljs.core.seq.call(null,column_info_7299);
var chunk__7239_7301 = null;
var count__7240_7302 = (0);
var i__7241_7303 = (0);
while(true){
if((i__7241_7303 < count__7240_7302)){
var map__7242_7304 = cljs.core._nth.call(null,chunk__7239_7301,i__7241_7303);
var map__7242_7305__$1 = (((((!((map__7242_7304 == null))))?(((((map__7242_7304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7242_7304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7242_7304):map__7242_7304);
var gline_7306 = cljs.core.get.call(null,map__7242_7305__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_7307 = cljs.core.get.call(null,map__7242_7305__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_7308 = cljs.core.get.call(null,map__7242_7305__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_7306], null),cljs.core.fnil.call(null,((function (seq__7238_7300,chunk__7239_7301,count__7240_7302,i__7241_7303,seq__7231_7293,chunk__7232_7294,count__7233_7295,i__7234_7296,seq__7224_7286,chunk__7225_7287,count__7226_7288,i__7227_7289,map__7242_7304,map__7242_7305__$1,gline_7306,gcol_7307,name_7308,vec__7235_7297,column_7298,column_info_7299,vec__7228_7290,line_7291,columns_7292,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_7307], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_7291,new cljs.core.Keyword(null,"col","col",-1959363084),column_7298,new cljs.core.Keyword(null,"name","name",1843675177),name_7308], null));
});})(seq__7238_7300,chunk__7239_7301,count__7240_7302,i__7241_7303,seq__7231_7293,chunk__7232_7294,count__7233_7295,i__7234_7296,seq__7224_7286,chunk__7225_7287,count__7226_7288,i__7227_7289,map__7242_7304,map__7242_7305__$1,gline_7306,gcol_7307,name_7308,vec__7235_7297,column_7298,column_info_7299,vec__7228_7290,line_7291,columns_7292,inverted))
,cljs.core.sorted_map.call(null)));


var G__7309 = seq__7238_7300;
var G__7310 = chunk__7239_7301;
var G__7311 = count__7240_7302;
var G__7312 = (i__7241_7303 + (1));
seq__7238_7300 = G__7309;
chunk__7239_7301 = G__7310;
count__7240_7302 = G__7311;
i__7241_7303 = G__7312;
continue;
} else {
var temp__5735__auto___7313 = cljs.core.seq.call(null,seq__7238_7300);
if(temp__5735__auto___7313){
var seq__7238_7314__$1 = temp__5735__auto___7313;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7238_7314__$1)){
var c__4461__auto___7315 = cljs.core.chunk_first.call(null,seq__7238_7314__$1);
var G__7316 = cljs.core.chunk_rest.call(null,seq__7238_7314__$1);
var G__7317 = c__4461__auto___7315;
var G__7318 = cljs.core.count.call(null,c__4461__auto___7315);
var G__7319 = (0);
seq__7238_7300 = G__7316;
chunk__7239_7301 = G__7317;
count__7240_7302 = G__7318;
i__7241_7303 = G__7319;
continue;
} else {
var map__7244_7320 = cljs.core.first.call(null,seq__7238_7314__$1);
var map__7244_7321__$1 = (((((!((map__7244_7320 == null))))?(((((map__7244_7320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7244_7320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7244_7320):map__7244_7320);
var gline_7322 = cljs.core.get.call(null,map__7244_7321__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_7323 = cljs.core.get.call(null,map__7244_7321__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_7324 = cljs.core.get.call(null,map__7244_7321__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_7322], null),cljs.core.fnil.call(null,((function (seq__7238_7300,chunk__7239_7301,count__7240_7302,i__7241_7303,seq__7231_7293,chunk__7232_7294,count__7233_7295,i__7234_7296,seq__7224_7286,chunk__7225_7287,count__7226_7288,i__7227_7289,map__7244_7320,map__7244_7321__$1,gline_7322,gcol_7323,name_7324,seq__7238_7314__$1,temp__5735__auto___7313,vec__7235_7297,column_7298,column_info_7299,vec__7228_7290,line_7291,columns_7292,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_7323], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_7291,new cljs.core.Keyword(null,"col","col",-1959363084),column_7298,new cljs.core.Keyword(null,"name","name",1843675177),name_7324], null));
});})(seq__7238_7300,chunk__7239_7301,count__7240_7302,i__7241_7303,seq__7231_7293,chunk__7232_7294,count__7233_7295,i__7234_7296,seq__7224_7286,chunk__7225_7287,count__7226_7288,i__7227_7289,map__7244_7320,map__7244_7321__$1,gline_7322,gcol_7323,name_7324,seq__7238_7314__$1,temp__5735__auto___7313,vec__7235_7297,column_7298,column_info_7299,vec__7228_7290,line_7291,columns_7292,inverted))
,cljs.core.sorted_map.call(null)));


var G__7325 = cljs.core.next.call(null,seq__7238_7314__$1);
var G__7326 = null;
var G__7327 = (0);
var G__7328 = (0);
seq__7238_7300 = G__7325;
chunk__7239_7301 = G__7326;
count__7240_7302 = G__7327;
i__7241_7303 = G__7328;
continue;
}
} else {
}
}
break;
}


var G__7329 = seq__7231_7293;
var G__7330 = chunk__7232_7294;
var G__7331 = count__7233_7295;
var G__7332 = (i__7234_7296 + (1));
seq__7231_7293 = G__7329;
chunk__7232_7294 = G__7330;
count__7233_7295 = G__7331;
i__7234_7296 = G__7332;
continue;
} else {
var temp__5735__auto___7333 = cljs.core.seq.call(null,seq__7231_7293);
if(temp__5735__auto___7333){
var seq__7231_7334__$1 = temp__5735__auto___7333;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7231_7334__$1)){
var c__4461__auto___7335 = cljs.core.chunk_first.call(null,seq__7231_7334__$1);
var G__7336 = cljs.core.chunk_rest.call(null,seq__7231_7334__$1);
var G__7337 = c__4461__auto___7335;
var G__7338 = cljs.core.count.call(null,c__4461__auto___7335);
var G__7339 = (0);
seq__7231_7293 = G__7336;
chunk__7232_7294 = G__7337;
count__7233_7295 = G__7338;
i__7234_7296 = G__7339;
continue;
} else {
var vec__7246_7340 = cljs.core.first.call(null,seq__7231_7334__$1);
var column_7341 = cljs.core.nth.call(null,vec__7246_7340,(0),null);
var column_info_7342 = cljs.core.nth.call(null,vec__7246_7340,(1),null);
var seq__7249_7343 = cljs.core.seq.call(null,column_info_7342);
var chunk__7250_7344 = null;
var count__7251_7345 = (0);
var i__7252_7346 = (0);
while(true){
if((i__7252_7346 < count__7251_7345)){
var map__7253_7347 = cljs.core._nth.call(null,chunk__7250_7344,i__7252_7346);
var map__7253_7348__$1 = (((((!((map__7253_7347 == null))))?(((((map__7253_7347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7253_7347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7253_7347):map__7253_7347);
var gline_7349 = cljs.core.get.call(null,map__7253_7348__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_7350 = cljs.core.get.call(null,map__7253_7348__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_7351 = cljs.core.get.call(null,map__7253_7348__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_7349], null),cljs.core.fnil.call(null,((function (seq__7249_7343,chunk__7250_7344,count__7251_7345,i__7252_7346,seq__7231_7293,chunk__7232_7294,count__7233_7295,i__7234_7296,seq__7224_7286,chunk__7225_7287,count__7226_7288,i__7227_7289,map__7253_7347,map__7253_7348__$1,gline_7349,gcol_7350,name_7351,vec__7246_7340,column_7341,column_info_7342,seq__7231_7334__$1,temp__5735__auto___7333,vec__7228_7290,line_7291,columns_7292,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_7350], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_7291,new cljs.core.Keyword(null,"col","col",-1959363084),column_7341,new cljs.core.Keyword(null,"name","name",1843675177),name_7351], null));
});})(seq__7249_7343,chunk__7250_7344,count__7251_7345,i__7252_7346,seq__7231_7293,chunk__7232_7294,count__7233_7295,i__7234_7296,seq__7224_7286,chunk__7225_7287,count__7226_7288,i__7227_7289,map__7253_7347,map__7253_7348__$1,gline_7349,gcol_7350,name_7351,vec__7246_7340,column_7341,column_info_7342,seq__7231_7334__$1,temp__5735__auto___7333,vec__7228_7290,line_7291,columns_7292,inverted))
,cljs.core.sorted_map.call(null)));


var G__7352 = seq__7249_7343;
var G__7353 = chunk__7250_7344;
var G__7354 = count__7251_7345;
var G__7355 = (i__7252_7346 + (1));
seq__7249_7343 = G__7352;
chunk__7250_7344 = G__7353;
count__7251_7345 = G__7354;
i__7252_7346 = G__7355;
continue;
} else {
var temp__5735__auto___7356__$1 = cljs.core.seq.call(null,seq__7249_7343);
if(temp__5735__auto___7356__$1){
var seq__7249_7357__$1 = temp__5735__auto___7356__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7249_7357__$1)){
var c__4461__auto___7358 = cljs.core.chunk_first.call(null,seq__7249_7357__$1);
var G__7359 = cljs.core.chunk_rest.call(null,seq__7249_7357__$1);
var G__7360 = c__4461__auto___7358;
var G__7361 = cljs.core.count.call(null,c__4461__auto___7358);
var G__7362 = (0);
seq__7249_7343 = G__7359;
chunk__7250_7344 = G__7360;
count__7251_7345 = G__7361;
i__7252_7346 = G__7362;
continue;
} else {
var map__7255_7363 = cljs.core.first.call(null,seq__7249_7357__$1);
var map__7255_7364__$1 = (((((!((map__7255_7363 == null))))?(((((map__7255_7363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7255_7363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7255_7363):map__7255_7363);
var gline_7365 = cljs.core.get.call(null,map__7255_7364__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_7366 = cljs.core.get.call(null,map__7255_7364__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_7367 = cljs.core.get.call(null,map__7255_7364__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_7365], null),cljs.core.fnil.call(null,((function (seq__7249_7343,chunk__7250_7344,count__7251_7345,i__7252_7346,seq__7231_7293,chunk__7232_7294,count__7233_7295,i__7234_7296,seq__7224_7286,chunk__7225_7287,count__7226_7288,i__7227_7289,map__7255_7363,map__7255_7364__$1,gline_7365,gcol_7366,name_7367,seq__7249_7357__$1,temp__5735__auto___7356__$1,vec__7246_7340,column_7341,column_info_7342,seq__7231_7334__$1,temp__5735__auto___7333,vec__7228_7290,line_7291,columns_7292,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_7366], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_7291,new cljs.core.Keyword(null,"col","col",-1959363084),column_7341,new cljs.core.Keyword(null,"name","name",1843675177),name_7367], null));
});})(seq__7249_7343,chunk__7250_7344,count__7251_7345,i__7252_7346,seq__7231_7293,chunk__7232_7294,count__7233_7295,i__7234_7296,seq__7224_7286,chunk__7225_7287,count__7226_7288,i__7227_7289,map__7255_7363,map__7255_7364__$1,gline_7365,gcol_7366,name_7367,seq__7249_7357__$1,temp__5735__auto___7356__$1,vec__7246_7340,column_7341,column_info_7342,seq__7231_7334__$1,temp__5735__auto___7333,vec__7228_7290,line_7291,columns_7292,inverted))
,cljs.core.sorted_map.call(null)));


var G__7368 = cljs.core.next.call(null,seq__7249_7357__$1);
var G__7369 = null;
var G__7370 = (0);
var G__7371 = (0);
seq__7249_7343 = G__7368;
chunk__7250_7344 = G__7369;
count__7251_7345 = G__7370;
i__7252_7346 = G__7371;
continue;
}
} else {
}
}
break;
}


var G__7372 = cljs.core.next.call(null,seq__7231_7334__$1);
var G__7373 = null;
var G__7374 = (0);
var G__7375 = (0);
seq__7231_7293 = G__7372;
chunk__7232_7294 = G__7373;
count__7233_7295 = G__7374;
i__7234_7296 = G__7375;
continue;
}
} else {
}
}
break;
}


var G__7376 = seq__7224_7286;
var G__7377 = chunk__7225_7287;
var G__7378 = count__7226_7288;
var G__7379 = (i__7227_7289 + (1));
seq__7224_7286 = G__7376;
chunk__7225_7287 = G__7377;
count__7226_7288 = G__7378;
i__7227_7289 = G__7379;
continue;
} else {
var temp__5735__auto___7380 = cljs.core.seq.call(null,seq__7224_7286);
if(temp__5735__auto___7380){
var seq__7224_7381__$1 = temp__5735__auto___7380;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7224_7381__$1)){
var c__4461__auto___7382 = cljs.core.chunk_first.call(null,seq__7224_7381__$1);
var G__7383 = cljs.core.chunk_rest.call(null,seq__7224_7381__$1);
var G__7384 = c__4461__auto___7382;
var G__7385 = cljs.core.count.call(null,c__4461__auto___7382);
var G__7386 = (0);
seq__7224_7286 = G__7383;
chunk__7225_7287 = G__7384;
count__7226_7288 = G__7385;
i__7227_7289 = G__7386;
continue;
} else {
var vec__7257_7387 = cljs.core.first.call(null,seq__7224_7381__$1);
var line_7388 = cljs.core.nth.call(null,vec__7257_7387,(0),null);
var columns_7389 = cljs.core.nth.call(null,vec__7257_7387,(1),null);
var seq__7260_7390 = cljs.core.seq.call(null,columns_7389);
var chunk__7261_7391 = null;
var count__7262_7392 = (0);
var i__7263_7393 = (0);
while(true){
if((i__7263_7393 < count__7262_7392)){
var vec__7264_7394 = cljs.core._nth.call(null,chunk__7261_7391,i__7263_7393);
var column_7395 = cljs.core.nth.call(null,vec__7264_7394,(0),null);
var column_info_7396 = cljs.core.nth.call(null,vec__7264_7394,(1),null);
var seq__7267_7397 = cljs.core.seq.call(null,column_info_7396);
var chunk__7268_7398 = null;
var count__7269_7399 = (0);
var i__7270_7400 = (0);
while(true){
if((i__7270_7400 < count__7269_7399)){
var map__7271_7401 = cljs.core._nth.call(null,chunk__7268_7398,i__7270_7400);
var map__7271_7402__$1 = (((((!((map__7271_7401 == null))))?(((((map__7271_7401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7271_7401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7271_7401):map__7271_7401);
var gline_7403 = cljs.core.get.call(null,map__7271_7402__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_7404 = cljs.core.get.call(null,map__7271_7402__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_7405 = cljs.core.get.call(null,map__7271_7402__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_7403], null),cljs.core.fnil.call(null,((function (seq__7267_7397,chunk__7268_7398,count__7269_7399,i__7270_7400,seq__7260_7390,chunk__7261_7391,count__7262_7392,i__7263_7393,seq__7224_7286,chunk__7225_7287,count__7226_7288,i__7227_7289,map__7271_7401,map__7271_7402__$1,gline_7403,gcol_7404,name_7405,vec__7264_7394,column_7395,column_info_7396,vec__7257_7387,line_7388,columns_7389,seq__7224_7381__$1,temp__5735__auto___7380,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_7404], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_7388,new cljs.core.Keyword(null,"col","col",-1959363084),column_7395,new cljs.core.Keyword(null,"name","name",1843675177),name_7405], null));
});})(seq__7267_7397,chunk__7268_7398,count__7269_7399,i__7270_7400,seq__7260_7390,chunk__7261_7391,count__7262_7392,i__7263_7393,seq__7224_7286,chunk__7225_7287,count__7226_7288,i__7227_7289,map__7271_7401,map__7271_7402__$1,gline_7403,gcol_7404,name_7405,vec__7264_7394,column_7395,column_info_7396,vec__7257_7387,line_7388,columns_7389,seq__7224_7381__$1,temp__5735__auto___7380,inverted))
,cljs.core.sorted_map.call(null)));


var G__7406 = seq__7267_7397;
var G__7407 = chunk__7268_7398;
var G__7408 = count__7269_7399;
var G__7409 = (i__7270_7400 + (1));
seq__7267_7397 = G__7406;
chunk__7268_7398 = G__7407;
count__7269_7399 = G__7408;
i__7270_7400 = G__7409;
continue;
} else {
var temp__5735__auto___7410__$1 = cljs.core.seq.call(null,seq__7267_7397);
if(temp__5735__auto___7410__$1){
var seq__7267_7411__$1 = temp__5735__auto___7410__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7267_7411__$1)){
var c__4461__auto___7412 = cljs.core.chunk_first.call(null,seq__7267_7411__$1);
var G__7413 = cljs.core.chunk_rest.call(null,seq__7267_7411__$1);
var G__7414 = c__4461__auto___7412;
var G__7415 = cljs.core.count.call(null,c__4461__auto___7412);
var G__7416 = (0);
seq__7267_7397 = G__7413;
chunk__7268_7398 = G__7414;
count__7269_7399 = G__7415;
i__7270_7400 = G__7416;
continue;
} else {
var map__7273_7417 = cljs.core.first.call(null,seq__7267_7411__$1);
var map__7273_7418__$1 = (((((!((map__7273_7417 == null))))?(((((map__7273_7417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7273_7417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7273_7417):map__7273_7417);
var gline_7419 = cljs.core.get.call(null,map__7273_7418__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_7420 = cljs.core.get.call(null,map__7273_7418__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_7421 = cljs.core.get.call(null,map__7273_7418__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_7419], null),cljs.core.fnil.call(null,((function (seq__7267_7397,chunk__7268_7398,count__7269_7399,i__7270_7400,seq__7260_7390,chunk__7261_7391,count__7262_7392,i__7263_7393,seq__7224_7286,chunk__7225_7287,count__7226_7288,i__7227_7289,map__7273_7417,map__7273_7418__$1,gline_7419,gcol_7420,name_7421,seq__7267_7411__$1,temp__5735__auto___7410__$1,vec__7264_7394,column_7395,column_info_7396,vec__7257_7387,line_7388,columns_7389,seq__7224_7381__$1,temp__5735__auto___7380,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_7420], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_7388,new cljs.core.Keyword(null,"col","col",-1959363084),column_7395,new cljs.core.Keyword(null,"name","name",1843675177),name_7421], null));
});})(seq__7267_7397,chunk__7268_7398,count__7269_7399,i__7270_7400,seq__7260_7390,chunk__7261_7391,count__7262_7392,i__7263_7393,seq__7224_7286,chunk__7225_7287,count__7226_7288,i__7227_7289,map__7273_7417,map__7273_7418__$1,gline_7419,gcol_7420,name_7421,seq__7267_7411__$1,temp__5735__auto___7410__$1,vec__7264_7394,column_7395,column_info_7396,vec__7257_7387,line_7388,columns_7389,seq__7224_7381__$1,temp__5735__auto___7380,inverted))
,cljs.core.sorted_map.call(null)));


var G__7422 = cljs.core.next.call(null,seq__7267_7411__$1);
var G__7423 = null;
var G__7424 = (0);
var G__7425 = (0);
seq__7267_7397 = G__7422;
chunk__7268_7398 = G__7423;
count__7269_7399 = G__7424;
i__7270_7400 = G__7425;
continue;
}
} else {
}
}
break;
}


var G__7426 = seq__7260_7390;
var G__7427 = chunk__7261_7391;
var G__7428 = count__7262_7392;
var G__7429 = (i__7263_7393 + (1));
seq__7260_7390 = G__7426;
chunk__7261_7391 = G__7427;
count__7262_7392 = G__7428;
i__7263_7393 = G__7429;
continue;
} else {
var temp__5735__auto___7430__$1 = cljs.core.seq.call(null,seq__7260_7390);
if(temp__5735__auto___7430__$1){
var seq__7260_7431__$1 = temp__5735__auto___7430__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7260_7431__$1)){
var c__4461__auto___7432 = cljs.core.chunk_first.call(null,seq__7260_7431__$1);
var G__7433 = cljs.core.chunk_rest.call(null,seq__7260_7431__$1);
var G__7434 = c__4461__auto___7432;
var G__7435 = cljs.core.count.call(null,c__4461__auto___7432);
var G__7436 = (0);
seq__7260_7390 = G__7433;
chunk__7261_7391 = G__7434;
count__7262_7392 = G__7435;
i__7263_7393 = G__7436;
continue;
} else {
var vec__7275_7437 = cljs.core.first.call(null,seq__7260_7431__$1);
var column_7438 = cljs.core.nth.call(null,vec__7275_7437,(0),null);
var column_info_7439 = cljs.core.nth.call(null,vec__7275_7437,(1),null);
var seq__7278_7440 = cljs.core.seq.call(null,column_info_7439);
var chunk__7279_7441 = null;
var count__7280_7442 = (0);
var i__7281_7443 = (0);
while(true){
if((i__7281_7443 < count__7280_7442)){
var map__7282_7444 = cljs.core._nth.call(null,chunk__7279_7441,i__7281_7443);
var map__7282_7445__$1 = (((((!((map__7282_7444 == null))))?(((((map__7282_7444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7282_7444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7282_7444):map__7282_7444);
var gline_7446 = cljs.core.get.call(null,map__7282_7445__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_7447 = cljs.core.get.call(null,map__7282_7445__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_7448 = cljs.core.get.call(null,map__7282_7445__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_7446], null),cljs.core.fnil.call(null,((function (seq__7278_7440,chunk__7279_7441,count__7280_7442,i__7281_7443,seq__7260_7390,chunk__7261_7391,count__7262_7392,i__7263_7393,seq__7224_7286,chunk__7225_7287,count__7226_7288,i__7227_7289,map__7282_7444,map__7282_7445__$1,gline_7446,gcol_7447,name_7448,vec__7275_7437,column_7438,column_info_7439,seq__7260_7431__$1,temp__5735__auto___7430__$1,vec__7257_7387,line_7388,columns_7389,seq__7224_7381__$1,temp__5735__auto___7380,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_7447], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_7388,new cljs.core.Keyword(null,"col","col",-1959363084),column_7438,new cljs.core.Keyword(null,"name","name",1843675177),name_7448], null));
});})(seq__7278_7440,chunk__7279_7441,count__7280_7442,i__7281_7443,seq__7260_7390,chunk__7261_7391,count__7262_7392,i__7263_7393,seq__7224_7286,chunk__7225_7287,count__7226_7288,i__7227_7289,map__7282_7444,map__7282_7445__$1,gline_7446,gcol_7447,name_7448,vec__7275_7437,column_7438,column_info_7439,seq__7260_7431__$1,temp__5735__auto___7430__$1,vec__7257_7387,line_7388,columns_7389,seq__7224_7381__$1,temp__5735__auto___7380,inverted))
,cljs.core.sorted_map.call(null)));


var G__7449 = seq__7278_7440;
var G__7450 = chunk__7279_7441;
var G__7451 = count__7280_7442;
var G__7452 = (i__7281_7443 + (1));
seq__7278_7440 = G__7449;
chunk__7279_7441 = G__7450;
count__7280_7442 = G__7451;
i__7281_7443 = G__7452;
continue;
} else {
var temp__5735__auto___7453__$2 = cljs.core.seq.call(null,seq__7278_7440);
if(temp__5735__auto___7453__$2){
var seq__7278_7454__$1 = temp__5735__auto___7453__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7278_7454__$1)){
var c__4461__auto___7455 = cljs.core.chunk_first.call(null,seq__7278_7454__$1);
var G__7456 = cljs.core.chunk_rest.call(null,seq__7278_7454__$1);
var G__7457 = c__4461__auto___7455;
var G__7458 = cljs.core.count.call(null,c__4461__auto___7455);
var G__7459 = (0);
seq__7278_7440 = G__7456;
chunk__7279_7441 = G__7457;
count__7280_7442 = G__7458;
i__7281_7443 = G__7459;
continue;
} else {
var map__7284_7460 = cljs.core.first.call(null,seq__7278_7454__$1);
var map__7284_7461__$1 = (((((!((map__7284_7460 == null))))?(((((map__7284_7460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7284_7460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7284_7460):map__7284_7460);
var gline_7462 = cljs.core.get.call(null,map__7284_7461__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_7463 = cljs.core.get.call(null,map__7284_7461__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_7464 = cljs.core.get.call(null,map__7284_7461__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_7462], null),cljs.core.fnil.call(null,((function (seq__7278_7440,chunk__7279_7441,count__7280_7442,i__7281_7443,seq__7260_7390,chunk__7261_7391,count__7262_7392,i__7263_7393,seq__7224_7286,chunk__7225_7287,count__7226_7288,i__7227_7289,map__7284_7460,map__7284_7461__$1,gline_7462,gcol_7463,name_7464,seq__7278_7454__$1,temp__5735__auto___7453__$2,vec__7275_7437,column_7438,column_info_7439,seq__7260_7431__$1,temp__5735__auto___7430__$1,vec__7257_7387,line_7388,columns_7389,seq__7224_7381__$1,temp__5735__auto___7380,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_7463], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_7388,new cljs.core.Keyword(null,"col","col",-1959363084),column_7438,new cljs.core.Keyword(null,"name","name",1843675177),name_7464], null));
});})(seq__7278_7440,chunk__7279_7441,count__7280_7442,i__7281_7443,seq__7260_7390,chunk__7261_7391,count__7262_7392,i__7263_7393,seq__7224_7286,chunk__7225_7287,count__7226_7288,i__7227_7289,map__7284_7460,map__7284_7461__$1,gline_7462,gcol_7463,name_7464,seq__7278_7454__$1,temp__5735__auto___7453__$2,vec__7275_7437,column_7438,column_info_7439,seq__7260_7431__$1,temp__5735__auto___7430__$1,vec__7257_7387,line_7388,columns_7389,seq__7224_7381__$1,temp__5735__auto___7380,inverted))
,cljs.core.sorted_map.call(null)));


var G__7465 = cljs.core.next.call(null,seq__7278_7454__$1);
var G__7466 = null;
var G__7467 = (0);
var G__7468 = (0);
seq__7278_7440 = G__7465;
chunk__7279_7441 = G__7466;
count__7280_7442 = G__7467;
i__7281_7443 = G__7468;
continue;
}
} else {
}
}
break;
}


var G__7469 = cljs.core.next.call(null,seq__7260_7431__$1);
var G__7470 = null;
var G__7471 = (0);
var G__7472 = (0);
seq__7260_7390 = G__7469;
chunk__7261_7391 = G__7470;
count__7262_7392 = G__7471;
i__7263_7393 = G__7472;
continue;
}
} else {
}
}
break;
}


var G__7473 = cljs.core.next.call(null,seq__7224_7381__$1);
var G__7474 = null;
var G__7475 = (0);
var G__7476 = (0);
seq__7224_7286 = G__7473;
chunk__7225_7287 = G__7474;
count__7226_7288 = G__7475;
i__7227_7289 = G__7476;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map
