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
return cljs.core.reduce.call(null,(function (m,p__20107){
var vec__20108 = p__20107;
var i = cljs.core.nth.call(null,vec__20108,(0),null);
var v = cljs.core.nth.call(null,vec__20108,(1),null);
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
var vec__20111 = seg;
var gcol = cljs.core.nth.call(null,vec__20111,(0),null);
var source = cljs.core.nth.call(null,vec__20111,(1),null);
var line = cljs.core.nth.call(null,vec__20111,(2),null);
var col = cljs.core.nth.call(null,vec__20111,(3),null);
var name = cljs.core.nth.call(null,vec__20111,(4),null);
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
var vec__20114 = seg;
var gcol = cljs.core.nth.call(null,vec__20114,(0),null);
var source = cljs.core.nth.call(null,vec__20114,(1),null);
var line = cljs.core.nth.call(null,vec__20114,(2),null);
var col = cljs.core.nth.call(null,vec__20114,(3),null);
var name = cljs.core.nth.call(null,vec__20114,(4),null);
var vec__20117 = relseg;
var rgcol = cljs.core.nth.call(null,vec__20117,(0),null);
var rsource = cljs.core.nth.call(null,vec__20117,(1),null);
var rline = cljs.core.nth.call(null,vec__20117,(2),null);
var rcol = cljs.core.nth.call(null,vec__20117,(3),null);
var rname = cljs.core.nth.call(null,vec__20117,(4),null);
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
var map__20120 = segmap;
var map__20120__$1 = (((((!((map__20120 == null))))?(((((map__20120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20120):map__20120);
var gcol = cljs.core.get.call(null,map__20120__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__20120__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__20120__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__20120__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__20120__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__20120,map__20120__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__20120,map__20120__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__20120,map__20120__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__20120,map__20120__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__20120,map__20120__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__20120,map__20120__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__20123 = arguments.length;
switch (G__20123) {
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
var vec__20124 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__20128 = cljs.core.next.call(null,segs__$1);
var G__20129 = nrelseg;
var G__20130 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__20128;
relseg__$1 = G__20129;
result__$1 = G__20130;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__20124,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__20124,(1),null);
var G__20131 = (gline + (1));
var G__20132 = cljs.core.next.call(null,lines__$1);
var G__20133 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__20134 = result__$1;
gline = G__20131;
lines__$1 = G__20132;
relseg = G__20133;
result = G__20134;
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
var map__20136 = segmap;
var map__20136__$1 = (((((!((map__20136 == null))))?(((((map__20136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20136):map__20136);
var gcol = cljs.core.get.call(null,map__20136__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__20136__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__20136__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__20136__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__20136__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__20136,map__20136__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__20136,map__20136__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__20135_SHARP_){
return cljs.core.conj.call(null,p1__20135_SHARP_,d__$1);
});})(map__20136,map__20136__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__20136,map__20136__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__20139 = arguments.length;
switch (G__20139) {
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
var vec__20140 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__20144 = cljs.core.next.call(null,segs__$1);
var G__20145 = nrelseg;
var G__20146 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__20144;
relseg__$1 = G__20145;
result__$1 = G__20146;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__20140,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__20140,(1),null);
var G__20147 = (gline + (1));
var G__20148 = cljs.core.next.call(null,lines__$1);
var G__20149 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__20150 = result__$1;
gline = G__20147;
lines__$1 = G__20148;
relseg = G__20149;
result = G__20150;
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
return (function (p__20151){
var vec__20152 = p__20151;
var _ = cljs.core.nth.call(null,vec__20152,(0),null);
var source = cljs.core.nth.call(null,vec__20152,(1),null);
var line = cljs.core.nth.call(null,vec__20152,(2),null);
var col = cljs.core.nth.call(null,vec__20152,(3),null);
var name = cljs.core.nth.call(null,vec__20152,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__20155){
var vec__20156 = p__20155;
var gcol = cljs.core.nth.call(null,vec__20156,(0),null);
var sidx = cljs.core.nth.call(null,vec__20156,(1),null);
var line = cljs.core.nth.call(null,vec__20156,(2),null);
var col = cljs.core.nth.call(null,vec__20156,(3),null);
var name = cljs.core.nth.call(null,vec__20156,(4),null);
var seg = vec__20156;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__20156,gcol,sidx,line,col,name,seg,relseg){
return (function (p__20159){
var vec__20160 = p__20159;
var _ = cljs.core.nth.call(null,vec__20160,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__20160,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__20160,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__20160,(3),null);
var lname = cljs.core.nth.call(null,vec__20160,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__20156,gcol,sidx,line,col,name,seg,relseg))
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
var seq__20166 = cljs.core.seq.call(null,infos);
var chunk__20167 = null;
var count__20168 = (0);
var i__20169 = (0);
while(true){
if((i__20169 < count__20168)){
var info = cljs.core._nth.call(null,chunk__20167,i__20169);
var segv_20248 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_20249 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_20250 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_20249 > (lc_20250 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__20166,chunk__20167,count__20168,i__20169,segv_20248,gline_20249,lc_20250,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_20249 - (lc_20250 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_20248], null));
});})(seq__20166,chunk__20167,count__20168,i__20169,segv_20248,gline_20249,lc_20250,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__20166,chunk__20167,count__20168,i__20169,segv_20248,gline_20249,lc_20250,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20249], null),cljs.core.conj,segv_20248);
});})(seq__20166,chunk__20167,count__20168,i__20169,segv_20248,gline_20249,lc_20250,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__20251 = seq__20166;
var G__20252 = chunk__20167;
var G__20253 = count__20168;
var G__20254 = (i__20169 + (1));
seq__20166 = G__20251;
chunk__20167 = G__20252;
count__20168 = G__20253;
i__20169 = G__20254;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__20166);
if(temp__5735__auto__){
var seq__20166__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20166__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__20166__$1);
var G__20255 = cljs.core.chunk_rest.call(null,seq__20166__$1);
var G__20256 = c__4461__auto__;
var G__20257 = cljs.core.count.call(null,c__4461__auto__);
var G__20258 = (0);
seq__20166 = G__20255;
chunk__20167 = G__20256;
count__20168 = G__20257;
i__20169 = G__20258;
continue;
} else {
var info = cljs.core.first.call(null,seq__20166__$1);
var segv_20259 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_20260 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_20261 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_20260 > (lc_20261 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__20166,chunk__20167,count__20168,i__20169,segv_20259,gline_20260,lc_20261,info,seq__20166__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_20260 - (lc_20261 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_20259], null));
});})(seq__20166,chunk__20167,count__20168,i__20169,segv_20259,gline_20260,lc_20261,info,seq__20166__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__20166,chunk__20167,count__20168,i__20169,segv_20259,gline_20260,lc_20261,info,seq__20166__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20260], null),cljs.core.conj,segv_20259);
});})(seq__20166,chunk__20167,count__20168,i__20169,segv_20259,gline_20260,lc_20261,info,seq__20166__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__20262 = cljs.core.next.call(null,seq__20166__$1);
var G__20263 = null;
var G__20264 = (0);
var G__20265 = (0);
seq__20166 = G__20262;
chunk__20167 = G__20263;
count__20168 = G__20264;
i__20169 = G__20265;
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
var seq__20170_20266 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__20171_20267 = null;
var count__20172_20268 = (0);
var i__20173_20269 = (0);
while(true){
if((i__20173_20269 < count__20172_20268)){
var vec__20174_20270 = cljs.core._nth.call(null,chunk__20171_20267,i__20173_20269);
var source_idx_20271 = cljs.core.nth.call(null,vec__20174_20270,(0),null);
var vec__20177_20272 = cljs.core.nth.call(null,vec__20174_20270,(1),null);
var __20273 = cljs.core.nth.call(null,vec__20177_20272,(0),null);
var lines_20274__$1 = cljs.core.nth.call(null,vec__20177_20272,(1),null);
var seq__20180_20275 = cljs.core.seq.call(null,lines_20274__$1);
var chunk__20181_20276 = null;
var count__20182_20277 = (0);
var i__20183_20278 = (0);
while(true){
if((i__20183_20278 < count__20182_20277)){
var vec__20184_20279 = cljs.core._nth.call(null,chunk__20181_20276,i__20183_20278);
var line_20280 = cljs.core.nth.call(null,vec__20184_20279,(0),null);
var cols_20281 = cljs.core.nth.call(null,vec__20184_20279,(1),null);
var seq__20187_20282 = cljs.core.seq.call(null,cols_20281);
var chunk__20188_20283 = null;
var count__20189_20284 = (0);
var i__20190_20285 = (0);
while(true){
if((i__20190_20285 < count__20189_20284)){
var vec__20191_20286 = cljs.core._nth.call(null,chunk__20188_20283,i__20190_20285);
var col_20287 = cljs.core.nth.call(null,vec__20191_20286,(0),null);
var infos_20288 = cljs.core.nth.call(null,vec__20191_20286,(1),null);
encode_cols.call(null,infos_20288,source_idx_20271,line_20280,col_20287);


var G__20289 = seq__20187_20282;
var G__20290 = chunk__20188_20283;
var G__20291 = count__20189_20284;
var G__20292 = (i__20190_20285 + (1));
seq__20187_20282 = G__20289;
chunk__20188_20283 = G__20290;
count__20189_20284 = G__20291;
i__20190_20285 = G__20292;
continue;
} else {
var temp__5735__auto___20293 = cljs.core.seq.call(null,seq__20187_20282);
if(temp__5735__auto___20293){
var seq__20187_20294__$1 = temp__5735__auto___20293;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20187_20294__$1)){
var c__4461__auto___20295 = cljs.core.chunk_first.call(null,seq__20187_20294__$1);
var G__20296 = cljs.core.chunk_rest.call(null,seq__20187_20294__$1);
var G__20297 = c__4461__auto___20295;
var G__20298 = cljs.core.count.call(null,c__4461__auto___20295);
var G__20299 = (0);
seq__20187_20282 = G__20296;
chunk__20188_20283 = G__20297;
count__20189_20284 = G__20298;
i__20190_20285 = G__20299;
continue;
} else {
var vec__20194_20300 = cljs.core.first.call(null,seq__20187_20294__$1);
var col_20301 = cljs.core.nth.call(null,vec__20194_20300,(0),null);
var infos_20302 = cljs.core.nth.call(null,vec__20194_20300,(1),null);
encode_cols.call(null,infos_20302,source_idx_20271,line_20280,col_20301);


var G__20303 = cljs.core.next.call(null,seq__20187_20294__$1);
var G__20304 = null;
var G__20305 = (0);
var G__20306 = (0);
seq__20187_20282 = G__20303;
chunk__20188_20283 = G__20304;
count__20189_20284 = G__20305;
i__20190_20285 = G__20306;
continue;
}
} else {
}
}
break;
}


var G__20307 = seq__20180_20275;
var G__20308 = chunk__20181_20276;
var G__20309 = count__20182_20277;
var G__20310 = (i__20183_20278 + (1));
seq__20180_20275 = G__20307;
chunk__20181_20276 = G__20308;
count__20182_20277 = G__20309;
i__20183_20278 = G__20310;
continue;
} else {
var temp__5735__auto___20311 = cljs.core.seq.call(null,seq__20180_20275);
if(temp__5735__auto___20311){
var seq__20180_20312__$1 = temp__5735__auto___20311;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20180_20312__$1)){
var c__4461__auto___20313 = cljs.core.chunk_first.call(null,seq__20180_20312__$1);
var G__20314 = cljs.core.chunk_rest.call(null,seq__20180_20312__$1);
var G__20315 = c__4461__auto___20313;
var G__20316 = cljs.core.count.call(null,c__4461__auto___20313);
var G__20317 = (0);
seq__20180_20275 = G__20314;
chunk__20181_20276 = G__20315;
count__20182_20277 = G__20316;
i__20183_20278 = G__20317;
continue;
} else {
var vec__20197_20318 = cljs.core.first.call(null,seq__20180_20312__$1);
var line_20319 = cljs.core.nth.call(null,vec__20197_20318,(0),null);
var cols_20320 = cljs.core.nth.call(null,vec__20197_20318,(1),null);
var seq__20200_20321 = cljs.core.seq.call(null,cols_20320);
var chunk__20201_20322 = null;
var count__20202_20323 = (0);
var i__20203_20324 = (0);
while(true){
if((i__20203_20324 < count__20202_20323)){
var vec__20204_20325 = cljs.core._nth.call(null,chunk__20201_20322,i__20203_20324);
var col_20326 = cljs.core.nth.call(null,vec__20204_20325,(0),null);
var infos_20327 = cljs.core.nth.call(null,vec__20204_20325,(1),null);
encode_cols.call(null,infos_20327,source_idx_20271,line_20319,col_20326);


var G__20328 = seq__20200_20321;
var G__20329 = chunk__20201_20322;
var G__20330 = count__20202_20323;
var G__20331 = (i__20203_20324 + (1));
seq__20200_20321 = G__20328;
chunk__20201_20322 = G__20329;
count__20202_20323 = G__20330;
i__20203_20324 = G__20331;
continue;
} else {
var temp__5735__auto___20332__$1 = cljs.core.seq.call(null,seq__20200_20321);
if(temp__5735__auto___20332__$1){
var seq__20200_20333__$1 = temp__5735__auto___20332__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20200_20333__$1)){
var c__4461__auto___20334 = cljs.core.chunk_first.call(null,seq__20200_20333__$1);
var G__20335 = cljs.core.chunk_rest.call(null,seq__20200_20333__$1);
var G__20336 = c__4461__auto___20334;
var G__20337 = cljs.core.count.call(null,c__4461__auto___20334);
var G__20338 = (0);
seq__20200_20321 = G__20335;
chunk__20201_20322 = G__20336;
count__20202_20323 = G__20337;
i__20203_20324 = G__20338;
continue;
} else {
var vec__20207_20339 = cljs.core.first.call(null,seq__20200_20333__$1);
var col_20340 = cljs.core.nth.call(null,vec__20207_20339,(0),null);
var infos_20341 = cljs.core.nth.call(null,vec__20207_20339,(1),null);
encode_cols.call(null,infos_20341,source_idx_20271,line_20319,col_20340);


var G__20342 = cljs.core.next.call(null,seq__20200_20333__$1);
var G__20343 = null;
var G__20344 = (0);
var G__20345 = (0);
seq__20200_20321 = G__20342;
chunk__20201_20322 = G__20343;
count__20202_20323 = G__20344;
i__20203_20324 = G__20345;
continue;
}
} else {
}
}
break;
}


var G__20346 = cljs.core.next.call(null,seq__20180_20312__$1);
var G__20347 = null;
var G__20348 = (0);
var G__20349 = (0);
seq__20180_20275 = G__20346;
chunk__20181_20276 = G__20347;
count__20182_20277 = G__20348;
i__20183_20278 = G__20349;
continue;
}
} else {
}
}
break;
}


var G__20350 = seq__20170_20266;
var G__20351 = chunk__20171_20267;
var G__20352 = count__20172_20268;
var G__20353 = (i__20173_20269 + (1));
seq__20170_20266 = G__20350;
chunk__20171_20267 = G__20351;
count__20172_20268 = G__20352;
i__20173_20269 = G__20353;
continue;
} else {
var temp__5735__auto___20354 = cljs.core.seq.call(null,seq__20170_20266);
if(temp__5735__auto___20354){
var seq__20170_20355__$1 = temp__5735__auto___20354;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20170_20355__$1)){
var c__4461__auto___20356 = cljs.core.chunk_first.call(null,seq__20170_20355__$1);
var G__20357 = cljs.core.chunk_rest.call(null,seq__20170_20355__$1);
var G__20358 = c__4461__auto___20356;
var G__20359 = cljs.core.count.call(null,c__4461__auto___20356);
var G__20360 = (0);
seq__20170_20266 = G__20357;
chunk__20171_20267 = G__20358;
count__20172_20268 = G__20359;
i__20173_20269 = G__20360;
continue;
} else {
var vec__20210_20361 = cljs.core.first.call(null,seq__20170_20355__$1);
var source_idx_20362 = cljs.core.nth.call(null,vec__20210_20361,(0),null);
var vec__20213_20363 = cljs.core.nth.call(null,vec__20210_20361,(1),null);
var __20364 = cljs.core.nth.call(null,vec__20213_20363,(0),null);
var lines_20365__$1 = cljs.core.nth.call(null,vec__20213_20363,(1),null);
var seq__20216_20366 = cljs.core.seq.call(null,lines_20365__$1);
var chunk__20217_20367 = null;
var count__20218_20368 = (0);
var i__20219_20369 = (0);
while(true){
if((i__20219_20369 < count__20218_20368)){
var vec__20220_20370 = cljs.core._nth.call(null,chunk__20217_20367,i__20219_20369);
var line_20371 = cljs.core.nth.call(null,vec__20220_20370,(0),null);
var cols_20372 = cljs.core.nth.call(null,vec__20220_20370,(1),null);
var seq__20223_20373 = cljs.core.seq.call(null,cols_20372);
var chunk__20224_20374 = null;
var count__20225_20375 = (0);
var i__20226_20376 = (0);
while(true){
if((i__20226_20376 < count__20225_20375)){
var vec__20227_20377 = cljs.core._nth.call(null,chunk__20224_20374,i__20226_20376);
var col_20378 = cljs.core.nth.call(null,vec__20227_20377,(0),null);
var infos_20379 = cljs.core.nth.call(null,vec__20227_20377,(1),null);
encode_cols.call(null,infos_20379,source_idx_20362,line_20371,col_20378);


var G__20380 = seq__20223_20373;
var G__20381 = chunk__20224_20374;
var G__20382 = count__20225_20375;
var G__20383 = (i__20226_20376 + (1));
seq__20223_20373 = G__20380;
chunk__20224_20374 = G__20381;
count__20225_20375 = G__20382;
i__20226_20376 = G__20383;
continue;
} else {
var temp__5735__auto___20384__$1 = cljs.core.seq.call(null,seq__20223_20373);
if(temp__5735__auto___20384__$1){
var seq__20223_20385__$1 = temp__5735__auto___20384__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20223_20385__$1)){
var c__4461__auto___20386 = cljs.core.chunk_first.call(null,seq__20223_20385__$1);
var G__20387 = cljs.core.chunk_rest.call(null,seq__20223_20385__$1);
var G__20388 = c__4461__auto___20386;
var G__20389 = cljs.core.count.call(null,c__4461__auto___20386);
var G__20390 = (0);
seq__20223_20373 = G__20387;
chunk__20224_20374 = G__20388;
count__20225_20375 = G__20389;
i__20226_20376 = G__20390;
continue;
} else {
var vec__20230_20391 = cljs.core.first.call(null,seq__20223_20385__$1);
var col_20392 = cljs.core.nth.call(null,vec__20230_20391,(0),null);
var infos_20393 = cljs.core.nth.call(null,vec__20230_20391,(1),null);
encode_cols.call(null,infos_20393,source_idx_20362,line_20371,col_20392);


var G__20394 = cljs.core.next.call(null,seq__20223_20385__$1);
var G__20395 = null;
var G__20396 = (0);
var G__20397 = (0);
seq__20223_20373 = G__20394;
chunk__20224_20374 = G__20395;
count__20225_20375 = G__20396;
i__20226_20376 = G__20397;
continue;
}
} else {
}
}
break;
}


var G__20398 = seq__20216_20366;
var G__20399 = chunk__20217_20367;
var G__20400 = count__20218_20368;
var G__20401 = (i__20219_20369 + (1));
seq__20216_20366 = G__20398;
chunk__20217_20367 = G__20399;
count__20218_20368 = G__20400;
i__20219_20369 = G__20401;
continue;
} else {
var temp__5735__auto___20402__$1 = cljs.core.seq.call(null,seq__20216_20366);
if(temp__5735__auto___20402__$1){
var seq__20216_20403__$1 = temp__5735__auto___20402__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20216_20403__$1)){
var c__4461__auto___20404 = cljs.core.chunk_first.call(null,seq__20216_20403__$1);
var G__20405 = cljs.core.chunk_rest.call(null,seq__20216_20403__$1);
var G__20406 = c__4461__auto___20404;
var G__20407 = cljs.core.count.call(null,c__4461__auto___20404);
var G__20408 = (0);
seq__20216_20366 = G__20405;
chunk__20217_20367 = G__20406;
count__20218_20368 = G__20407;
i__20219_20369 = G__20408;
continue;
} else {
var vec__20233_20409 = cljs.core.first.call(null,seq__20216_20403__$1);
var line_20410 = cljs.core.nth.call(null,vec__20233_20409,(0),null);
var cols_20411 = cljs.core.nth.call(null,vec__20233_20409,(1),null);
var seq__20236_20412 = cljs.core.seq.call(null,cols_20411);
var chunk__20237_20413 = null;
var count__20238_20414 = (0);
var i__20239_20415 = (0);
while(true){
if((i__20239_20415 < count__20238_20414)){
var vec__20240_20416 = cljs.core._nth.call(null,chunk__20237_20413,i__20239_20415);
var col_20417 = cljs.core.nth.call(null,vec__20240_20416,(0),null);
var infos_20418 = cljs.core.nth.call(null,vec__20240_20416,(1),null);
encode_cols.call(null,infos_20418,source_idx_20362,line_20410,col_20417);


var G__20419 = seq__20236_20412;
var G__20420 = chunk__20237_20413;
var G__20421 = count__20238_20414;
var G__20422 = (i__20239_20415 + (1));
seq__20236_20412 = G__20419;
chunk__20237_20413 = G__20420;
count__20238_20414 = G__20421;
i__20239_20415 = G__20422;
continue;
} else {
var temp__5735__auto___20423__$2 = cljs.core.seq.call(null,seq__20236_20412);
if(temp__5735__auto___20423__$2){
var seq__20236_20424__$1 = temp__5735__auto___20423__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20236_20424__$1)){
var c__4461__auto___20425 = cljs.core.chunk_first.call(null,seq__20236_20424__$1);
var G__20426 = cljs.core.chunk_rest.call(null,seq__20236_20424__$1);
var G__20427 = c__4461__auto___20425;
var G__20428 = cljs.core.count.call(null,c__4461__auto___20425);
var G__20429 = (0);
seq__20236_20412 = G__20426;
chunk__20237_20413 = G__20427;
count__20238_20414 = G__20428;
i__20239_20415 = G__20429;
continue;
} else {
var vec__20243_20430 = cljs.core.first.call(null,seq__20236_20424__$1);
var col_20431 = cljs.core.nth.call(null,vec__20243_20430,(0),null);
var infos_20432 = cljs.core.nth.call(null,vec__20243_20430,(1),null);
encode_cols.call(null,infos_20432,source_idx_20362,line_20410,col_20431);


var G__20433 = cljs.core.next.call(null,seq__20236_20424__$1);
var G__20434 = null;
var G__20435 = (0);
var G__20436 = (0);
seq__20236_20412 = G__20433;
chunk__20237_20413 = G__20434;
count__20238_20414 = G__20435;
i__20239_20415 = G__20436;
continue;
}
} else {
}
}
break;
}


var G__20437 = cljs.core.next.call(null,seq__20216_20403__$1);
var G__20438 = null;
var G__20439 = (0);
var G__20440 = (0);
seq__20216_20366 = G__20437;
chunk__20217_20367 = G__20438;
count__20218_20368 = G__20439;
i__20219_20369 = G__20440;
continue;
}
} else {
}
}
break;
}


var G__20441 = cljs.core.next.call(null,seq__20170_20355__$1);
var G__20442 = null;
var G__20443 = (0);
var G__20444 = (0);
seq__20170_20266 = G__20441;
chunk__20171_20267 = G__20442;
count__20172_20268 = G__20443;
i__20173_20269 = G__20444;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__20246 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__20163_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20163_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__20164_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__20164_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__20165_SHARP_){
return clojure.string.join.call(null,",",p1__20165_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__20247 = G__20246;
goog.object.set(G__20247,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__20247;
} else {
return G__20246;
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
var vec__20445 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__20445,(0),null);
var col_map = cljs.core.nth.call(null,vec__20445,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__20448 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__20448,(0),null);
var infos = cljs.core.nth.call(null,vec__20448,(1),null);
var G__20454 = cljs.core.next.call(null,col_map_seq);
var G__20455 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__20448,col,infos,vec__20445,line,col_map){
return (function (v,p__20451){
var map__20452 = p__20451;
var map__20452__$1 = (((((!((map__20452 == null))))?(((((map__20452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20452):map__20452);
var gline = cljs.core.get.call(null,map__20452__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__20452__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__20448,col,infos,vec__20445,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__20454;
new_cols = G__20455;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__20456 = cljs.core.next.call(null,line_map_seq);
var G__20457 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__20456;
new_lines = G__20457;
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
var seq__20458_20520 = cljs.core.seq.call(null,reverse_map);
var chunk__20459_20521 = null;
var count__20460_20522 = (0);
var i__20461_20523 = (0);
while(true){
if((i__20461_20523 < count__20460_20522)){
var vec__20462_20524 = cljs.core._nth.call(null,chunk__20459_20521,i__20461_20523);
var line_20525 = cljs.core.nth.call(null,vec__20462_20524,(0),null);
var columns_20526 = cljs.core.nth.call(null,vec__20462_20524,(1),null);
var seq__20465_20527 = cljs.core.seq.call(null,columns_20526);
var chunk__20466_20528 = null;
var count__20467_20529 = (0);
var i__20468_20530 = (0);
while(true){
if((i__20468_20530 < count__20467_20529)){
var vec__20469_20531 = cljs.core._nth.call(null,chunk__20466_20528,i__20468_20530);
var column_20532 = cljs.core.nth.call(null,vec__20469_20531,(0),null);
var column_info_20533 = cljs.core.nth.call(null,vec__20469_20531,(1),null);
var seq__20472_20534 = cljs.core.seq.call(null,column_info_20533);
var chunk__20473_20535 = null;
var count__20474_20536 = (0);
var i__20475_20537 = (0);
while(true){
if((i__20475_20537 < count__20474_20536)){
var map__20476_20538 = cljs.core._nth.call(null,chunk__20473_20535,i__20475_20537);
var map__20476_20539__$1 = (((((!((map__20476_20538 == null))))?(((((map__20476_20538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20476_20538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20476_20538):map__20476_20538);
var gline_20540 = cljs.core.get.call(null,map__20476_20539__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_20541 = cljs.core.get.call(null,map__20476_20539__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_20542 = cljs.core.get.call(null,map__20476_20539__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20540], null),cljs.core.fnil.call(null,((function (seq__20472_20534,chunk__20473_20535,count__20474_20536,i__20475_20537,seq__20465_20527,chunk__20466_20528,count__20467_20529,i__20468_20530,seq__20458_20520,chunk__20459_20521,count__20460_20522,i__20461_20523,map__20476_20538,map__20476_20539__$1,gline_20540,gcol_20541,name_20542,vec__20469_20531,column_20532,column_info_20533,vec__20462_20524,line_20525,columns_20526,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_20541], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_20525,new cljs.core.Keyword(null,"col","col",-1959363084),column_20532,new cljs.core.Keyword(null,"name","name",1843675177),name_20542], null));
});})(seq__20472_20534,chunk__20473_20535,count__20474_20536,i__20475_20537,seq__20465_20527,chunk__20466_20528,count__20467_20529,i__20468_20530,seq__20458_20520,chunk__20459_20521,count__20460_20522,i__20461_20523,map__20476_20538,map__20476_20539__$1,gline_20540,gcol_20541,name_20542,vec__20469_20531,column_20532,column_info_20533,vec__20462_20524,line_20525,columns_20526,inverted))
,cljs.core.sorted_map.call(null)));


var G__20543 = seq__20472_20534;
var G__20544 = chunk__20473_20535;
var G__20545 = count__20474_20536;
var G__20546 = (i__20475_20537 + (1));
seq__20472_20534 = G__20543;
chunk__20473_20535 = G__20544;
count__20474_20536 = G__20545;
i__20475_20537 = G__20546;
continue;
} else {
var temp__5735__auto___20547 = cljs.core.seq.call(null,seq__20472_20534);
if(temp__5735__auto___20547){
var seq__20472_20548__$1 = temp__5735__auto___20547;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20472_20548__$1)){
var c__4461__auto___20549 = cljs.core.chunk_first.call(null,seq__20472_20548__$1);
var G__20550 = cljs.core.chunk_rest.call(null,seq__20472_20548__$1);
var G__20551 = c__4461__auto___20549;
var G__20552 = cljs.core.count.call(null,c__4461__auto___20549);
var G__20553 = (0);
seq__20472_20534 = G__20550;
chunk__20473_20535 = G__20551;
count__20474_20536 = G__20552;
i__20475_20537 = G__20553;
continue;
} else {
var map__20478_20554 = cljs.core.first.call(null,seq__20472_20548__$1);
var map__20478_20555__$1 = (((((!((map__20478_20554 == null))))?(((((map__20478_20554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20478_20554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20478_20554):map__20478_20554);
var gline_20556 = cljs.core.get.call(null,map__20478_20555__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_20557 = cljs.core.get.call(null,map__20478_20555__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_20558 = cljs.core.get.call(null,map__20478_20555__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20556], null),cljs.core.fnil.call(null,((function (seq__20472_20534,chunk__20473_20535,count__20474_20536,i__20475_20537,seq__20465_20527,chunk__20466_20528,count__20467_20529,i__20468_20530,seq__20458_20520,chunk__20459_20521,count__20460_20522,i__20461_20523,map__20478_20554,map__20478_20555__$1,gline_20556,gcol_20557,name_20558,seq__20472_20548__$1,temp__5735__auto___20547,vec__20469_20531,column_20532,column_info_20533,vec__20462_20524,line_20525,columns_20526,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_20557], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_20525,new cljs.core.Keyword(null,"col","col",-1959363084),column_20532,new cljs.core.Keyword(null,"name","name",1843675177),name_20558], null));
});})(seq__20472_20534,chunk__20473_20535,count__20474_20536,i__20475_20537,seq__20465_20527,chunk__20466_20528,count__20467_20529,i__20468_20530,seq__20458_20520,chunk__20459_20521,count__20460_20522,i__20461_20523,map__20478_20554,map__20478_20555__$1,gline_20556,gcol_20557,name_20558,seq__20472_20548__$1,temp__5735__auto___20547,vec__20469_20531,column_20532,column_info_20533,vec__20462_20524,line_20525,columns_20526,inverted))
,cljs.core.sorted_map.call(null)));


var G__20559 = cljs.core.next.call(null,seq__20472_20548__$1);
var G__20560 = null;
var G__20561 = (0);
var G__20562 = (0);
seq__20472_20534 = G__20559;
chunk__20473_20535 = G__20560;
count__20474_20536 = G__20561;
i__20475_20537 = G__20562;
continue;
}
} else {
}
}
break;
}


var G__20563 = seq__20465_20527;
var G__20564 = chunk__20466_20528;
var G__20565 = count__20467_20529;
var G__20566 = (i__20468_20530 + (1));
seq__20465_20527 = G__20563;
chunk__20466_20528 = G__20564;
count__20467_20529 = G__20565;
i__20468_20530 = G__20566;
continue;
} else {
var temp__5735__auto___20567 = cljs.core.seq.call(null,seq__20465_20527);
if(temp__5735__auto___20567){
var seq__20465_20568__$1 = temp__5735__auto___20567;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20465_20568__$1)){
var c__4461__auto___20569 = cljs.core.chunk_first.call(null,seq__20465_20568__$1);
var G__20570 = cljs.core.chunk_rest.call(null,seq__20465_20568__$1);
var G__20571 = c__4461__auto___20569;
var G__20572 = cljs.core.count.call(null,c__4461__auto___20569);
var G__20573 = (0);
seq__20465_20527 = G__20570;
chunk__20466_20528 = G__20571;
count__20467_20529 = G__20572;
i__20468_20530 = G__20573;
continue;
} else {
var vec__20480_20574 = cljs.core.first.call(null,seq__20465_20568__$1);
var column_20575 = cljs.core.nth.call(null,vec__20480_20574,(0),null);
var column_info_20576 = cljs.core.nth.call(null,vec__20480_20574,(1),null);
var seq__20483_20577 = cljs.core.seq.call(null,column_info_20576);
var chunk__20484_20578 = null;
var count__20485_20579 = (0);
var i__20486_20580 = (0);
while(true){
if((i__20486_20580 < count__20485_20579)){
var map__20487_20581 = cljs.core._nth.call(null,chunk__20484_20578,i__20486_20580);
var map__20487_20582__$1 = (((((!((map__20487_20581 == null))))?(((((map__20487_20581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20487_20581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20487_20581):map__20487_20581);
var gline_20583 = cljs.core.get.call(null,map__20487_20582__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_20584 = cljs.core.get.call(null,map__20487_20582__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_20585 = cljs.core.get.call(null,map__20487_20582__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20583], null),cljs.core.fnil.call(null,((function (seq__20483_20577,chunk__20484_20578,count__20485_20579,i__20486_20580,seq__20465_20527,chunk__20466_20528,count__20467_20529,i__20468_20530,seq__20458_20520,chunk__20459_20521,count__20460_20522,i__20461_20523,map__20487_20581,map__20487_20582__$1,gline_20583,gcol_20584,name_20585,vec__20480_20574,column_20575,column_info_20576,seq__20465_20568__$1,temp__5735__auto___20567,vec__20462_20524,line_20525,columns_20526,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_20584], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_20525,new cljs.core.Keyword(null,"col","col",-1959363084),column_20575,new cljs.core.Keyword(null,"name","name",1843675177),name_20585], null));
});})(seq__20483_20577,chunk__20484_20578,count__20485_20579,i__20486_20580,seq__20465_20527,chunk__20466_20528,count__20467_20529,i__20468_20530,seq__20458_20520,chunk__20459_20521,count__20460_20522,i__20461_20523,map__20487_20581,map__20487_20582__$1,gline_20583,gcol_20584,name_20585,vec__20480_20574,column_20575,column_info_20576,seq__20465_20568__$1,temp__5735__auto___20567,vec__20462_20524,line_20525,columns_20526,inverted))
,cljs.core.sorted_map.call(null)));


var G__20586 = seq__20483_20577;
var G__20587 = chunk__20484_20578;
var G__20588 = count__20485_20579;
var G__20589 = (i__20486_20580 + (1));
seq__20483_20577 = G__20586;
chunk__20484_20578 = G__20587;
count__20485_20579 = G__20588;
i__20486_20580 = G__20589;
continue;
} else {
var temp__5735__auto___20590__$1 = cljs.core.seq.call(null,seq__20483_20577);
if(temp__5735__auto___20590__$1){
var seq__20483_20591__$1 = temp__5735__auto___20590__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20483_20591__$1)){
var c__4461__auto___20592 = cljs.core.chunk_first.call(null,seq__20483_20591__$1);
var G__20593 = cljs.core.chunk_rest.call(null,seq__20483_20591__$1);
var G__20594 = c__4461__auto___20592;
var G__20595 = cljs.core.count.call(null,c__4461__auto___20592);
var G__20596 = (0);
seq__20483_20577 = G__20593;
chunk__20484_20578 = G__20594;
count__20485_20579 = G__20595;
i__20486_20580 = G__20596;
continue;
} else {
var map__20489_20597 = cljs.core.first.call(null,seq__20483_20591__$1);
var map__20489_20598__$1 = (((((!((map__20489_20597 == null))))?(((((map__20489_20597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20489_20597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20489_20597):map__20489_20597);
var gline_20599 = cljs.core.get.call(null,map__20489_20598__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_20600 = cljs.core.get.call(null,map__20489_20598__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_20601 = cljs.core.get.call(null,map__20489_20598__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20599], null),cljs.core.fnil.call(null,((function (seq__20483_20577,chunk__20484_20578,count__20485_20579,i__20486_20580,seq__20465_20527,chunk__20466_20528,count__20467_20529,i__20468_20530,seq__20458_20520,chunk__20459_20521,count__20460_20522,i__20461_20523,map__20489_20597,map__20489_20598__$1,gline_20599,gcol_20600,name_20601,seq__20483_20591__$1,temp__5735__auto___20590__$1,vec__20480_20574,column_20575,column_info_20576,seq__20465_20568__$1,temp__5735__auto___20567,vec__20462_20524,line_20525,columns_20526,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_20600], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_20525,new cljs.core.Keyword(null,"col","col",-1959363084),column_20575,new cljs.core.Keyword(null,"name","name",1843675177),name_20601], null));
});})(seq__20483_20577,chunk__20484_20578,count__20485_20579,i__20486_20580,seq__20465_20527,chunk__20466_20528,count__20467_20529,i__20468_20530,seq__20458_20520,chunk__20459_20521,count__20460_20522,i__20461_20523,map__20489_20597,map__20489_20598__$1,gline_20599,gcol_20600,name_20601,seq__20483_20591__$1,temp__5735__auto___20590__$1,vec__20480_20574,column_20575,column_info_20576,seq__20465_20568__$1,temp__5735__auto___20567,vec__20462_20524,line_20525,columns_20526,inverted))
,cljs.core.sorted_map.call(null)));


var G__20602 = cljs.core.next.call(null,seq__20483_20591__$1);
var G__20603 = null;
var G__20604 = (0);
var G__20605 = (0);
seq__20483_20577 = G__20602;
chunk__20484_20578 = G__20603;
count__20485_20579 = G__20604;
i__20486_20580 = G__20605;
continue;
}
} else {
}
}
break;
}


var G__20606 = cljs.core.next.call(null,seq__20465_20568__$1);
var G__20607 = null;
var G__20608 = (0);
var G__20609 = (0);
seq__20465_20527 = G__20606;
chunk__20466_20528 = G__20607;
count__20467_20529 = G__20608;
i__20468_20530 = G__20609;
continue;
}
} else {
}
}
break;
}


var G__20610 = seq__20458_20520;
var G__20611 = chunk__20459_20521;
var G__20612 = count__20460_20522;
var G__20613 = (i__20461_20523 + (1));
seq__20458_20520 = G__20610;
chunk__20459_20521 = G__20611;
count__20460_20522 = G__20612;
i__20461_20523 = G__20613;
continue;
} else {
var temp__5735__auto___20614 = cljs.core.seq.call(null,seq__20458_20520);
if(temp__5735__auto___20614){
var seq__20458_20615__$1 = temp__5735__auto___20614;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20458_20615__$1)){
var c__4461__auto___20616 = cljs.core.chunk_first.call(null,seq__20458_20615__$1);
var G__20617 = cljs.core.chunk_rest.call(null,seq__20458_20615__$1);
var G__20618 = c__4461__auto___20616;
var G__20619 = cljs.core.count.call(null,c__4461__auto___20616);
var G__20620 = (0);
seq__20458_20520 = G__20617;
chunk__20459_20521 = G__20618;
count__20460_20522 = G__20619;
i__20461_20523 = G__20620;
continue;
} else {
var vec__20491_20621 = cljs.core.first.call(null,seq__20458_20615__$1);
var line_20622 = cljs.core.nth.call(null,vec__20491_20621,(0),null);
var columns_20623 = cljs.core.nth.call(null,vec__20491_20621,(1),null);
var seq__20494_20624 = cljs.core.seq.call(null,columns_20623);
var chunk__20495_20625 = null;
var count__20496_20626 = (0);
var i__20497_20627 = (0);
while(true){
if((i__20497_20627 < count__20496_20626)){
var vec__20498_20628 = cljs.core._nth.call(null,chunk__20495_20625,i__20497_20627);
var column_20629 = cljs.core.nth.call(null,vec__20498_20628,(0),null);
var column_info_20630 = cljs.core.nth.call(null,vec__20498_20628,(1),null);
var seq__20501_20631 = cljs.core.seq.call(null,column_info_20630);
var chunk__20502_20632 = null;
var count__20503_20633 = (0);
var i__20504_20634 = (0);
while(true){
if((i__20504_20634 < count__20503_20633)){
var map__20505_20635 = cljs.core._nth.call(null,chunk__20502_20632,i__20504_20634);
var map__20505_20636__$1 = (((((!((map__20505_20635 == null))))?(((((map__20505_20635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20505_20635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20505_20635):map__20505_20635);
var gline_20637 = cljs.core.get.call(null,map__20505_20636__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_20638 = cljs.core.get.call(null,map__20505_20636__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_20639 = cljs.core.get.call(null,map__20505_20636__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20637], null),cljs.core.fnil.call(null,((function (seq__20501_20631,chunk__20502_20632,count__20503_20633,i__20504_20634,seq__20494_20624,chunk__20495_20625,count__20496_20626,i__20497_20627,seq__20458_20520,chunk__20459_20521,count__20460_20522,i__20461_20523,map__20505_20635,map__20505_20636__$1,gline_20637,gcol_20638,name_20639,vec__20498_20628,column_20629,column_info_20630,vec__20491_20621,line_20622,columns_20623,seq__20458_20615__$1,temp__5735__auto___20614,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_20638], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_20622,new cljs.core.Keyword(null,"col","col",-1959363084),column_20629,new cljs.core.Keyword(null,"name","name",1843675177),name_20639], null));
});})(seq__20501_20631,chunk__20502_20632,count__20503_20633,i__20504_20634,seq__20494_20624,chunk__20495_20625,count__20496_20626,i__20497_20627,seq__20458_20520,chunk__20459_20521,count__20460_20522,i__20461_20523,map__20505_20635,map__20505_20636__$1,gline_20637,gcol_20638,name_20639,vec__20498_20628,column_20629,column_info_20630,vec__20491_20621,line_20622,columns_20623,seq__20458_20615__$1,temp__5735__auto___20614,inverted))
,cljs.core.sorted_map.call(null)));


var G__20640 = seq__20501_20631;
var G__20641 = chunk__20502_20632;
var G__20642 = count__20503_20633;
var G__20643 = (i__20504_20634 + (1));
seq__20501_20631 = G__20640;
chunk__20502_20632 = G__20641;
count__20503_20633 = G__20642;
i__20504_20634 = G__20643;
continue;
} else {
var temp__5735__auto___20644__$1 = cljs.core.seq.call(null,seq__20501_20631);
if(temp__5735__auto___20644__$1){
var seq__20501_20645__$1 = temp__5735__auto___20644__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20501_20645__$1)){
var c__4461__auto___20646 = cljs.core.chunk_first.call(null,seq__20501_20645__$1);
var G__20647 = cljs.core.chunk_rest.call(null,seq__20501_20645__$1);
var G__20648 = c__4461__auto___20646;
var G__20649 = cljs.core.count.call(null,c__4461__auto___20646);
var G__20650 = (0);
seq__20501_20631 = G__20647;
chunk__20502_20632 = G__20648;
count__20503_20633 = G__20649;
i__20504_20634 = G__20650;
continue;
} else {
var map__20507_20651 = cljs.core.first.call(null,seq__20501_20645__$1);
var map__20507_20652__$1 = (((((!((map__20507_20651 == null))))?(((((map__20507_20651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20507_20651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20507_20651):map__20507_20651);
var gline_20653 = cljs.core.get.call(null,map__20507_20652__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_20654 = cljs.core.get.call(null,map__20507_20652__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_20655 = cljs.core.get.call(null,map__20507_20652__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20653], null),cljs.core.fnil.call(null,((function (seq__20501_20631,chunk__20502_20632,count__20503_20633,i__20504_20634,seq__20494_20624,chunk__20495_20625,count__20496_20626,i__20497_20627,seq__20458_20520,chunk__20459_20521,count__20460_20522,i__20461_20523,map__20507_20651,map__20507_20652__$1,gline_20653,gcol_20654,name_20655,seq__20501_20645__$1,temp__5735__auto___20644__$1,vec__20498_20628,column_20629,column_info_20630,vec__20491_20621,line_20622,columns_20623,seq__20458_20615__$1,temp__5735__auto___20614,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_20654], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_20622,new cljs.core.Keyword(null,"col","col",-1959363084),column_20629,new cljs.core.Keyword(null,"name","name",1843675177),name_20655], null));
});})(seq__20501_20631,chunk__20502_20632,count__20503_20633,i__20504_20634,seq__20494_20624,chunk__20495_20625,count__20496_20626,i__20497_20627,seq__20458_20520,chunk__20459_20521,count__20460_20522,i__20461_20523,map__20507_20651,map__20507_20652__$1,gline_20653,gcol_20654,name_20655,seq__20501_20645__$1,temp__5735__auto___20644__$1,vec__20498_20628,column_20629,column_info_20630,vec__20491_20621,line_20622,columns_20623,seq__20458_20615__$1,temp__5735__auto___20614,inverted))
,cljs.core.sorted_map.call(null)));


var G__20656 = cljs.core.next.call(null,seq__20501_20645__$1);
var G__20657 = null;
var G__20658 = (0);
var G__20659 = (0);
seq__20501_20631 = G__20656;
chunk__20502_20632 = G__20657;
count__20503_20633 = G__20658;
i__20504_20634 = G__20659;
continue;
}
} else {
}
}
break;
}


var G__20660 = seq__20494_20624;
var G__20661 = chunk__20495_20625;
var G__20662 = count__20496_20626;
var G__20663 = (i__20497_20627 + (1));
seq__20494_20624 = G__20660;
chunk__20495_20625 = G__20661;
count__20496_20626 = G__20662;
i__20497_20627 = G__20663;
continue;
} else {
var temp__5735__auto___20664__$1 = cljs.core.seq.call(null,seq__20494_20624);
if(temp__5735__auto___20664__$1){
var seq__20494_20665__$1 = temp__5735__auto___20664__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20494_20665__$1)){
var c__4461__auto___20666 = cljs.core.chunk_first.call(null,seq__20494_20665__$1);
var G__20667 = cljs.core.chunk_rest.call(null,seq__20494_20665__$1);
var G__20668 = c__4461__auto___20666;
var G__20669 = cljs.core.count.call(null,c__4461__auto___20666);
var G__20670 = (0);
seq__20494_20624 = G__20667;
chunk__20495_20625 = G__20668;
count__20496_20626 = G__20669;
i__20497_20627 = G__20670;
continue;
} else {
var vec__20509_20671 = cljs.core.first.call(null,seq__20494_20665__$1);
var column_20672 = cljs.core.nth.call(null,vec__20509_20671,(0),null);
var column_info_20673 = cljs.core.nth.call(null,vec__20509_20671,(1),null);
var seq__20512_20674 = cljs.core.seq.call(null,column_info_20673);
var chunk__20513_20675 = null;
var count__20514_20676 = (0);
var i__20515_20677 = (0);
while(true){
if((i__20515_20677 < count__20514_20676)){
var map__20516_20678 = cljs.core._nth.call(null,chunk__20513_20675,i__20515_20677);
var map__20516_20679__$1 = (((((!((map__20516_20678 == null))))?(((((map__20516_20678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20516_20678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20516_20678):map__20516_20678);
var gline_20680 = cljs.core.get.call(null,map__20516_20679__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_20681 = cljs.core.get.call(null,map__20516_20679__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_20682 = cljs.core.get.call(null,map__20516_20679__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20680], null),cljs.core.fnil.call(null,((function (seq__20512_20674,chunk__20513_20675,count__20514_20676,i__20515_20677,seq__20494_20624,chunk__20495_20625,count__20496_20626,i__20497_20627,seq__20458_20520,chunk__20459_20521,count__20460_20522,i__20461_20523,map__20516_20678,map__20516_20679__$1,gline_20680,gcol_20681,name_20682,vec__20509_20671,column_20672,column_info_20673,seq__20494_20665__$1,temp__5735__auto___20664__$1,vec__20491_20621,line_20622,columns_20623,seq__20458_20615__$1,temp__5735__auto___20614,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_20681], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_20622,new cljs.core.Keyword(null,"col","col",-1959363084),column_20672,new cljs.core.Keyword(null,"name","name",1843675177),name_20682], null));
});})(seq__20512_20674,chunk__20513_20675,count__20514_20676,i__20515_20677,seq__20494_20624,chunk__20495_20625,count__20496_20626,i__20497_20627,seq__20458_20520,chunk__20459_20521,count__20460_20522,i__20461_20523,map__20516_20678,map__20516_20679__$1,gline_20680,gcol_20681,name_20682,vec__20509_20671,column_20672,column_info_20673,seq__20494_20665__$1,temp__5735__auto___20664__$1,vec__20491_20621,line_20622,columns_20623,seq__20458_20615__$1,temp__5735__auto___20614,inverted))
,cljs.core.sorted_map.call(null)));


var G__20683 = seq__20512_20674;
var G__20684 = chunk__20513_20675;
var G__20685 = count__20514_20676;
var G__20686 = (i__20515_20677 + (1));
seq__20512_20674 = G__20683;
chunk__20513_20675 = G__20684;
count__20514_20676 = G__20685;
i__20515_20677 = G__20686;
continue;
} else {
var temp__5735__auto___20687__$2 = cljs.core.seq.call(null,seq__20512_20674);
if(temp__5735__auto___20687__$2){
var seq__20512_20688__$1 = temp__5735__auto___20687__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20512_20688__$1)){
var c__4461__auto___20689 = cljs.core.chunk_first.call(null,seq__20512_20688__$1);
var G__20690 = cljs.core.chunk_rest.call(null,seq__20512_20688__$1);
var G__20691 = c__4461__auto___20689;
var G__20692 = cljs.core.count.call(null,c__4461__auto___20689);
var G__20693 = (0);
seq__20512_20674 = G__20690;
chunk__20513_20675 = G__20691;
count__20514_20676 = G__20692;
i__20515_20677 = G__20693;
continue;
} else {
var map__20518_20694 = cljs.core.first.call(null,seq__20512_20688__$1);
var map__20518_20695__$1 = (((((!((map__20518_20694 == null))))?(((((map__20518_20694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20518_20694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20518_20694):map__20518_20694);
var gline_20696 = cljs.core.get.call(null,map__20518_20695__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_20697 = cljs.core.get.call(null,map__20518_20695__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_20698 = cljs.core.get.call(null,map__20518_20695__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20696], null),cljs.core.fnil.call(null,((function (seq__20512_20674,chunk__20513_20675,count__20514_20676,i__20515_20677,seq__20494_20624,chunk__20495_20625,count__20496_20626,i__20497_20627,seq__20458_20520,chunk__20459_20521,count__20460_20522,i__20461_20523,map__20518_20694,map__20518_20695__$1,gline_20696,gcol_20697,name_20698,seq__20512_20688__$1,temp__5735__auto___20687__$2,vec__20509_20671,column_20672,column_info_20673,seq__20494_20665__$1,temp__5735__auto___20664__$1,vec__20491_20621,line_20622,columns_20623,seq__20458_20615__$1,temp__5735__auto___20614,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_20697], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_20622,new cljs.core.Keyword(null,"col","col",-1959363084),column_20672,new cljs.core.Keyword(null,"name","name",1843675177),name_20698], null));
});})(seq__20512_20674,chunk__20513_20675,count__20514_20676,i__20515_20677,seq__20494_20624,chunk__20495_20625,count__20496_20626,i__20497_20627,seq__20458_20520,chunk__20459_20521,count__20460_20522,i__20461_20523,map__20518_20694,map__20518_20695__$1,gline_20696,gcol_20697,name_20698,seq__20512_20688__$1,temp__5735__auto___20687__$2,vec__20509_20671,column_20672,column_info_20673,seq__20494_20665__$1,temp__5735__auto___20664__$1,vec__20491_20621,line_20622,columns_20623,seq__20458_20615__$1,temp__5735__auto___20614,inverted))
,cljs.core.sorted_map.call(null)));


var G__20699 = cljs.core.next.call(null,seq__20512_20688__$1);
var G__20700 = null;
var G__20701 = (0);
var G__20702 = (0);
seq__20512_20674 = G__20699;
chunk__20513_20675 = G__20700;
count__20514_20676 = G__20701;
i__20515_20677 = G__20702;
continue;
}
} else {
}
}
break;
}


var G__20703 = cljs.core.next.call(null,seq__20494_20665__$1);
var G__20704 = null;
var G__20705 = (0);
var G__20706 = (0);
seq__20494_20624 = G__20703;
chunk__20495_20625 = G__20704;
count__20496_20626 = G__20705;
i__20497_20627 = G__20706;
continue;
}
} else {
}
}
break;
}


var G__20707 = cljs.core.next.call(null,seq__20458_20615__$1);
var G__20708 = null;
var G__20709 = (0);
var G__20710 = (0);
seq__20458_20520 = G__20707;
chunk__20459_20521 = G__20708;
count__20460_20522 = G__20709;
i__20461_20523 = G__20710;
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
