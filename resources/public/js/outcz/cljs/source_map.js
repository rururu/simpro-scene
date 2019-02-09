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
return cljs.core.reduce.call(null,(function (m,p__18394){
var vec__18395 = p__18394;
var i = cljs.core.nth.call(null,vec__18395,(0),null);
var v = cljs.core.nth.call(null,vec__18395,(1),null);
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
var vec__18398 = seg;
var gcol = cljs.core.nth.call(null,vec__18398,(0),null);
var source = cljs.core.nth.call(null,vec__18398,(1),null);
var line = cljs.core.nth.call(null,vec__18398,(2),null);
var col = cljs.core.nth.call(null,vec__18398,(3),null);
var name = cljs.core.nth.call(null,vec__18398,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__5720__auto__)){
var name__$1 = temp__5720__auto__;
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
var vec__18401 = seg;
var gcol = cljs.core.nth.call(null,vec__18401,(0),null);
var source = cljs.core.nth.call(null,vec__18401,(1),null);
var line = cljs.core.nth.call(null,vec__18401,(2),null);
var col = cljs.core.nth.call(null,vec__18401,(3),null);
var name = cljs.core.nth.call(null,vec__18401,(4),null);
var vec__18404 = relseg;
var rgcol = cljs.core.nth.call(null,vec__18404,(0),null);
var rsource = cljs.core.nth.call(null,vec__18404,(1),null);
var rline = cljs.core.nth.call(null,vec__18404,(2),null);
var rcol = cljs.core.nth.call(null,vec__18404,(3),null);
var rname = cljs.core.nth.call(null,vec__18404,(4),null);
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
var map__18407 = segmap;
var map__18407__$1 = (((((!((map__18407 == null))))?(((((map__18407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18407):map__18407);
var gcol = cljs.core.get.call(null,map__18407__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__18407__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__18407__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__18407__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__18407__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__18407,map__18407__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__18407,map__18407__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__18407,map__18407__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__18407,map__18407__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__18407,map__18407__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__18407,map__18407__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__18410 = arguments.length;
switch (G__18410) {
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
var vec__18411 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__18415 = cljs.core.next.call(null,segs__$1);
var G__18416 = nrelseg;
var G__18417 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__18415;
relseg__$1 = G__18416;
result__$1 = G__18417;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__18411,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__18411,(1),null);
var G__18418 = (gline + (1));
var G__18419 = cljs.core.next.call(null,lines__$1);
var G__18420 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__18421 = result__$1;
gline = G__18418;
lines__$1 = G__18419;
relseg = G__18420;
result = G__18421;
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
var map__18423 = segmap;
var map__18423__$1 = (((((!((map__18423 == null))))?(((((map__18423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18423):map__18423);
var gcol = cljs.core.get.call(null,map__18423__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__18423__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__18423__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__18423__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__18423__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__18423,map__18423__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__18423,map__18423__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__18422_SHARP_){
return cljs.core.conj.call(null,p1__18422_SHARP_,d__$1);
});})(map__18423,map__18423__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__18423,map__18423__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__18426 = arguments.length;
switch (G__18426) {
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
var vec__18427 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__18431 = cljs.core.next.call(null,segs__$1);
var G__18432 = nrelseg;
var G__18433 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__18431;
relseg__$1 = G__18432;
result__$1 = G__18433;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__18427,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__18427,(1),null);
var G__18434 = (gline + (1));
var G__18435 = cljs.core.next.call(null,lines__$1);
var G__18436 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__18437 = result__$1;
gline = G__18434;
lines__$1 = G__18435;
relseg = G__18436;
result = G__18437;
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
return (function (p__18438){
var vec__18439 = p__18438;
var _ = cljs.core.nth.call(null,vec__18439,(0),null);
var source = cljs.core.nth.call(null,vec__18439,(1),null);
var line = cljs.core.nth.call(null,vec__18439,(2),null);
var col = cljs.core.nth.call(null,vec__18439,(3),null);
var name = cljs.core.nth.call(null,vec__18439,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__18442){
var vec__18443 = p__18442;
var gcol = cljs.core.nth.call(null,vec__18443,(0),null);
var sidx = cljs.core.nth.call(null,vec__18443,(1),null);
var line = cljs.core.nth.call(null,vec__18443,(2),null);
var col = cljs.core.nth.call(null,vec__18443,(3),null);
var name = cljs.core.nth.call(null,vec__18443,(4),null);
var seg = vec__18443;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__18443,gcol,sidx,line,col,name,seg,relseg){
return (function (p__18446){
var vec__18447 = p__18446;
var _ = cljs.core.nth.call(null,vec__18447,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__18447,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__18447,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__18447,(3),null);
var lname = cljs.core.nth.call(null,vec__18447,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__18443,gcol,sidx,line,col,name,seg,relseg))
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
var temp__5718__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5718__auto__)){
var name = temp__5718__auto__;
var idx = (function (){var temp__5718__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__5718__auto____$1)){
var idx = temp__5718__auto____$1;
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
var seq__18453 = cljs.core.seq.call(null,infos);
var chunk__18454 = null;
var count__18455 = (0);
var i__18456 = (0);
while(true){
if((i__18456 < count__18455)){
var info = cljs.core._nth.call(null,chunk__18454,i__18456);
var segv_18535 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_18536 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_18537 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_18536 > (lc_18537 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__18453,chunk__18454,count__18455,i__18456,segv_18535,gline_18536,lc_18537,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_18536 - (lc_18537 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_18535], null));
});})(seq__18453,chunk__18454,count__18455,i__18456,segv_18535,gline_18536,lc_18537,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__18453,chunk__18454,count__18455,i__18456,segv_18535,gline_18536,lc_18537,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_18536], null),cljs.core.conj,segv_18535);
});})(seq__18453,chunk__18454,count__18455,i__18456,segv_18535,gline_18536,lc_18537,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__18538 = seq__18453;
var G__18539 = chunk__18454;
var G__18540 = count__18455;
var G__18541 = (i__18456 + (1));
seq__18453 = G__18538;
chunk__18454 = G__18539;
count__18455 = G__18540;
i__18456 = G__18541;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__18453);
if(temp__5720__auto__){
var seq__18453__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18453__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__18453__$1);
var G__18542 = cljs.core.chunk_rest.call(null,seq__18453__$1);
var G__18543 = c__4461__auto__;
var G__18544 = cljs.core.count.call(null,c__4461__auto__);
var G__18545 = (0);
seq__18453 = G__18542;
chunk__18454 = G__18543;
count__18455 = G__18544;
i__18456 = G__18545;
continue;
} else {
var info = cljs.core.first.call(null,seq__18453__$1);
var segv_18546 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_18547 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_18548 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_18547 > (lc_18548 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__18453,chunk__18454,count__18455,i__18456,segv_18546,gline_18547,lc_18548,info,seq__18453__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_18547 - (lc_18548 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_18546], null));
});})(seq__18453,chunk__18454,count__18455,i__18456,segv_18546,gline_18547,lc_18548,info,seq__18453__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__18453,chunk__18454,count__18455,i__18456,segv_18546,gline_18547,lc_18548,info,seq__18453__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_18547], null),cljs.core.conj,segv_18546);
});})(seq__18453,chunk__18454,count__18455,i__18456,segv_18546,gline_18547,lc_18548,info,seq__18453__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__18549 = cljs.core.next.call(null,seq__18453__$1);
var G__18550 = null;
var G__18551 = (0);
var G__18552 = (0);
seq__18453 = G__18549;
chunk__18454 = G__18550;
count__18455 = G__18551;
i__18456 = G__18552;
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
var seq__18457_18553 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__18458_18554 = null;
var count__18459_18555 = (0);
var i__18460_18556 = (0);
while(true){
if((i__18460_18556 < count__18459_18555)){
var vec__18461_18557 = cljs.core._nth.call(null,chunk__18458_18554,i__18460_18556);
var source_idx_18558 = cljs.core.nth.call(null,vec__18461_18557,(0),null);
var vec__18464_18559 = cljs.core.nth.call(null,vec__18461_18557,(1),null);
var __18560 = cljs.core.nth.call(null,vec__18464_18559,(0),null);
var lines_18561__$1 = cljs.core.nth.call(null,vec__18464_18559,(1),null);
var seq__18467_18562 = cljs.core.seq.call(null,lines_18561__$1);
var chunk__18468_18563 = null;
var count__18469_18564 = (0);
var i__18470_18565 = (0);
while(true){
if((i__18470_18565 < count__18469_18564)){
var vec__18471_18566 = cljs.core._nth.call(null,chunk__18468_18563,i__18470_18565);
var line_18567 = cljs.core.nth.call(null,vec__18471_18566,(0),null);
var cols_18568 = cljs.core.nth.call(null,vec__18471_18566,(1),null);
var seq__18474_18569 = cljs.core.seq.call(null,cols_18568);
var chunk__18475_18570 = null;
var count__18476_18571 = (0);
var i__18477_18572 = (0);
while(true){
if((i__18477_18572 < count__18476_18571)){
var vec__18478_18573 = cljs.core._nth.call(null,chunk__18475_18570,i__18477_18572);
var col_18574 = cljs.core.nth.call(null,vec__18478_18573,(0),null);
var infos_18575 = cljs.core.nth.call(null,vec__18478_18573,(1),null);
encode_cols.call(null,infos_18575,source_idx_18558,line_18567,col_18574);


var G__18576 = seq__18474_18569;
var G__18577 = chunk__18475_18570;
var G__18578 = count__18476_18571;
var G__18579 = (i__18477_18572 + (1));
seq__18474_18569 = G__18576;
chunk__18475_18570 = G__18577;
count__18476_18571 = G__18578;
i__18477_18572 = G__18579;
continue;
} else {
var temp__5720__auto___18580 = cljs.core.seq.call(null,seq__18474_18569);
if(temp__5720__auto___18580){
var seq__18474_18581__$1 = temp__5720__auto___18580;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18474_18581__$1)){
var c__4461__auto___18582 = cljs.core.chunk_first.call(null,seq__18474_18581__$1);
var G__18583 = cljs.core.chunk_rest.call(null,seq__18474_18581__$1);
var G__18584 = c__4461__auto___18582;
var G__18585 = cljs.core.count.call(null,c__4461__auto___18582);
var G__18586 = (0);
seq__18474_18569 = G__18583;
chunk__18475_18570 = G__18584;
count__18476_18571 = G__18585;
i__18477_18572 = G__18586;
continue;
} else {
var vec__18481_18587 = cljs.core.first.call(null,seq__18474_18581__$1);
var col_18588 = cljs.core.nth.call(null,vec__18481_18587,(0),null);
var infos_18589 = cljs.core.nth.call(null,vec__18481_18587,(1),null);
encode_cols.call(null,infos_18589,source_idx_18558,line_18567,col_18588);


var G__18590 = cljs.core.next.call(null,seq__18474_18581__$1);
var G__18591 = null;
var G__18592 = (0);
var G__18593 = (0);
seq__18474_18569 = G__18590;
chunk__18475_18570 = G__18591;
count__18476_18571 = G__18592;
i__18477_18572 = G__18593;
continue;
}
} else {
}
}
break;
}


var G__18594 = seq__18467_18562;
var G__18595 = chunk__18468_18563;
var G__18596 = count__18469_18564;
var G__18597 = (i__18470_18565 + (1));
seq__18467_18562 = G__18594;
chunk__18468_18563 = G__18595;
count__18469_18564 = G__18596;
i__18470_18565 = G__18597;
continue;
} else {
var temp__5720__auto___18598 = cljs.core.seq.call(null,seq__18467_18562);
if(temp__5720__auto___18598){
var seq__18467_18599__$1 = temp__5720__auto___18598;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18467_18599__$1)){
var c__4461__auto___18600 = cljs.core.chunk_first.call(null,seq__18467_18599__$1);
var G__18601 = cljs.core.chunk_rest.call(null,seq__18467_18599__$1);
var G__18602 = c__4461__auto___18600;
var G__18603 = cljs.core.count.call(null,c__4461__auto___18600);
var G__18604 = (0);
seq__18467_18562 = G__18601;
chunk__18468_18563 = G__18602;
count__18469_18564 = G__18603;
i__18470_18565 = G__18604;
continue;
} else {
var vec__18484_18605 = cljs.core.first.call(null,seq__18467_18599__$1);
var line_18606 = cljs.core.nth.call(null,vec__18484_18605,(0),null);
var cols_18607 = cljs.core.nth.call(null,vec__18484_18605,(1),null);
var seq__18487_18608 = cljs.core.seq.call(null,cols_18607);
var chunk__18488_18609 = null;
var count__18489_18610 = (0);
var i__18490_18611 = (0);
while(true){
if((i__18490_18611 < count__18489_18610)){
var vec__18491_18612 = cljs.core._nth.call(null,chunk__18488_18609,i__18490_18611);
var col_18613 = cljs.core.nth.call(null,vec__18491_18612,(0),null);
var infos_18614 = cljs.core.nth.call(null,vec__18491_18612,(1),null);
encode_cols.call(null,infos_18614,source_idx_18558,line_18606,col_18613);


var G__18615 = seq__18487_18608;
var G__18616 = chunk__18488_18609;
var G__18617 = count__18489_18610;
var G__18618 = (i__18490_18611 + (1));
seq__18487_18608 = G__18615;
chunk__18488_18609 = G__18616;
count__18489_18610 = G__18617;
i__18490_18611 = G__18618;
continue;
} else {
var temp__5720__auto___18619__$1 = cljs.core.seq.call(null,seq__18487_18608);
if(temp__5720__auto___18619__$1){
var seq__18487_18620__$1 = temp__5720__auto___18619__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18487_18620__$1)){
var c__4461__auto___18621 = cljs.core.chunk_first.call(null,seq__18487_18620__$1);
var G__18622 = cljs.core.chunk_rest.call(null,seq__18487_18620__$1);
var G__18623 = c__4461__auto___18621;
var G__18624 = cljs.core.count.call(null,c__4461__auto___18621);
var G__18625 = (0);
seq__18487_18608 = G__18622;
chunk__18488_18609 = G__18623;
count__18489_18610 = G__18624;
i__18490_18611 = G__18625;
continue;
} else {
var vec__18494_18626 = cljs.core.first.call(null,seq__18487_18620__$1);
var col_18627 = cljs.core.nth.call(null,vec__18494_18626,(0),null);
var infos_18628 = cljs.core.nth.call(null,vec__18494_18626,(1),null);
encode_cols.call(null,infos_18628,source_idx_18558,line_18606,col_18627);


var G__18629 = cljs.core.next.call(null,seq__18487_18620__$1);
var G__18630 = null;
var G__18631 = (0);
var G__18632 = (0);
seq__18487_18608 = G__18629;
chunk__18488_18609 = G__18630;
count__18489_18610 = G__18631;
i__18490_18611 = G__18632;
continue;
}
} else {
}
}
break;
}


var G__18633 = cljs.core.next.call(null,seq__18467_18599__$1);
var G__18634 = null;
var G__18635 = (0);
var G__18636 = (0);
seq__18467_18562 = G__18633;
chunk__18468_18563 = G__18634;
count__18469_18564 = G__18635;
i__18470_18565 = G__18636;
continue;
}
} else {
}
}
break;
}


var G__18637 = seq__18457_18553;
var G__18638 = chunk__18458_18554;
var G__18639 = count__18459_18555;
var G__18640 = (i__18460_18556 + (1));
seq__18457_18553 = G__18637;
chunk__18458_18554 = G__18638;
count__18459_18555 = G__18639;
i__18460_18556 = G__18640;
continue;
} else {
var temp__5720__auto___18641 = cljs.core.seq.call(null,seq__18457_18553);
if(temp__5720__auto___18641){
var seq__18457_18642__$1 = temp__5720__auto___18641;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18457_18642__$1)){
var c__4461__auto___18643 = cljs.core.chunk_first.call(null,seq__18457_18642__$1);
var G__18644 = cljs.core.chunk_rest.call(null,seq__18457_18642__$1);
var G__18645 = c__4461__auto___18643;
var G__18646 = cljs.core.count.call(null,c__4461__auto___18643);
var G__18647 = (0);
seq__18457_18553 = G__18644;
chunk__18458_18554 = G__18645;
count__18459_18555 = G__18646;
i__18460_18556 = G__18647;
continue;
} else {
var vec__18497_18648 = cljs.core.first.call(null,seq__18457_18642__$1);
var source_idx_18649 = cljs.core.nth.call(null,vec__18497_18648,(0),null);
var vec__18500_18650 = cljs.core.nth.call(null,vec__18497_18648,(1),null);
var __18651 = cljs.core.nth.call(null,vec__18500_18650,(0),null);
var lines_18652__$1 = cljs.core.nth.call(null,vec__18500_18650,(1),null);
var seq__18503_18653 = cljs.core.seq.call(null,lines_18652__$1);
var chunk__18504_18654 = null;
var count__18505_18655 = (0);
var i__18506_18656 = (0);
while(true){
if((i__18506_18656 < count__18505_18655)){
var vec__18507_18657 = cljs.core._nth.call(null,chunk__18504_18654,i__18506_18656);
var line_18658 = cljs.core.nth.call(null,vec__18507_18657,(0),null);
var cols_18659 = cljs.core.nth.call(null,vec__18507_18657,(1),null);
var seq__18510_18660 = cljs.core.seq.call(null,cols_18659);
var chunk__18511_18661 = null;
var count__18512_18662 = (0);
var i__18513_18663 = (0);
while(true){
if((i__18513_18663 < count__18512_18662)){
var vec__18514_18664 = cljs.core._nth.call(null,chunk__18511_18661,i__18513_18663);
var col_18665 = cljs.core.nth.call(null,vec__18514_18664,(0),null);
var infos_18666 = cljs.core.nth.call(null,vec__18514_18664,(1),null);
encode_cols.call(null,infos_18666,source_idx_18649,line_18658,col_18665);


var G__18667 = seq__18510_18660;
var G__18668 = chunk__18511_18661;
var G__18669 = count__18512_18662;
var G__18670 = (i__18513_18663 + (1));
seq__18510_18660 = G__18667;
chunk__18511_18661 = G__18668;
count__18512_18662 = G__18669;
i__18513_18663 = G__18670;
continue;
} else {
var temp__5720__auto___18671__$1 = cljs.core.seq.call(null,seq__18510_18660);
if(temp__5720__auto___18671__$1){
var seq__18510_18672__$1 = temp__5720__auto___18671__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18510_18672__$1)){
var c__4461__auto___18673 = cljs.core.chunk_first.call(null,seq__18510_18672__$1);
var G__18674 = cljs.core.chunk_rest.call(null,seq__18510_18672__$1);
var G__18675 = c__4461__auto___18673;
var G__18676 = cljs.core.count.call(null,c__4461__auto___18673);
var G__18677 = (0);
seq__18510_18660 = G__18674;
chunk__18511_18661 = G__18675;
count__18512_18662 = G__18676;
i__18513_18663 = G__18677;
continue;
} else {
var vec__18517_18678 = cljs.core.first.call(null,seq__18510_18672__$1);
var col_18679 = cljs.core.nth.call(null,vec__18517_18678,(0),null);
var infos_18680 = cljs.core.nth.call(null,vec__18517_18678,(1),null);
encode_cols.call(null,infos_18680,source_idx_18649,line_18658,col_18679);


var G__18681 = cljs.core.next.call(null,seq__18510_18672__$1);
var G__18682 = null;
var G__18683 = (0);
var G__18684 = (0);
seq__18510_18660 = G__18681;
chunk__18511_18661 = G__18682;
count__18512_18662 = G__18683;
i__18513_18663 = G__18684;
continue;
}
} else {
}
}
break;
}


var G__18685 = seq__18503_18653;
var G__18686 = chunk__18504_18654;
var G__18687 = count__18505_18655;
var G__18688 = (i__18506_18656 + (1));
seq__18503_18653 = G__18685;
chunk__18504_18654 = G__18686;
count__18505_18655 = G__18687;
i__18506_18656 = G__18688;
continue;
} else {
var temp__5720__auto___18689__$1 = cljs.core.seq.call(null,seq__18503_18653);
if(temp__5720__auto___18689__$1){
var seq__18503_18690__$1 = temp__5720__auto___18689__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18503_18690__$1)){
var c__4461__auto___18691 = cljs.core.chunk_first.call(null,seq__18503_18690__$1);
var G__18692 = cljs.core.chunk_rest.call(null,seq__18503_18690__$1);
var G__18693 = c__4461__auto___18691;
var G__18694 = cljs.core.count.call(null,c__4461__auto___18691);
var G__18695 = (0);
seq__18503_18653 = G__18692;
chunk__18504_18654 = G__18693;
count__18505_18655 = G__18694;
i__18506_18656 = G__18695;
continue;
} else {
var vec__18520_18696 = cljs.core.first.call(null,seq__18503_18690__$1);
var line_18697 = cljs.core.nth.call(null,vec__18520_18696,(0),null);
var cols_18698 = cljs.core.nth.call(null,vec__18520_18696,(1),null);
var seq__18523_18699 = cljs.core.seq.call(null,cols_18698);
var chunk__18524_18700 = null;
var count__18525_18701 = (0);
var i__18526_18702 = (0);
while(true){
if((i__18526_18702 < count__18525_18701)){
var vec__18527_18703 = cljs.core._nth.call(null,chunk__18524_18700,i__18526_18702);
var col_18704 = cljs.core.nth.call(null,vec__18527_18703,(0),null);
var infos_18705 = cljs.core.nth.call(null,vec__18527_18703,(1),null);
encode_cols.call(null,infos_18705,source_idx_18649,line_18697,col_18704);


var G__18706 = seq__18523_18699;
var G__18707 = chunk__18524_18700;
var G__18708 = count__18525_18701;
var G__18709 = (i__18526_18702 + (1));
seq__18523_18699 = G__18706;
chunk__18524_18700 = G__18707;
count__18525_18701 = G__18708;
i__18526_18702 = G__18709;
continue;
} else {
var temp__5720__auto___18710__$2 = cljs.core.seq.call(null,seq__18523_18699);
if(temp__5720__auto___18710__$2){
var seq__18523_18711__$1 = temp__5720__auto___18710__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18523_18711__$1)){
var c__4461__auto___18712 = cljs.core.chunk_first.call(null,seq__18523_18711__$1);
var G__18713 = cljs.core.chunk_rest.call(null,seq__18523_18711__$1);
var G__18714 = c__4461__auto___18712;
var G__18715 = cljs.core.count.call(null,c__4461__auto___18712);
var G__18716 = (0);
seq__18523_18699 = G__18713;
chunk__18524_18700 = G__18714;
count__18525_18701 = G__18715;
i__18526_18702 = G__18716;
continue;
} else {
var vec__18530_18717 = cljs.core.first.call(null,seq__18523_18711__$1);
var col_18718 = cljs.core.nth.call(null,vec__18530_18717,(0),null);
var infos_18719 = cljs.core.nth.call(null,vec__18530_18717,(1),null);
encode_cols.call(null,infos_18719,source_idx_18649,line_18697,col_18718);


var G__18720 = cljs.core.next.call(null,seq__18523_18711__$1);
var G__18721 = null;
var G__18722 = (0);
var G__18723 = (0);
seq__18523_18699 = G__18720;
chunk__18524_18700 = G__18721;
count__18525_18701 = G__18722;
i__18526_18702 = G__18723;
continue;
}
} else {
}
}
break;
}


var G__18724 = cljs.core.next.call(null,seq__18503_18690__$1);
var G__18725 = null;
var G__18726 = (0);
var G__18727 = (0);
seq__18503_18653 = G__18724;
chunk__18504_18654 = G__18725;
count__18505_18655 = G__18726;
i__18506_18656 = G__18727;
continue;
}
} else {
}
}
break;
}


var G__18728 = cljs.core.next.call(null,seq__18457_18642__$1);
var G__18729 = null;
var G__18730 = (0);
var G__18731 = (0);
seq__18457_18553 = G__18728;
chunk__18458_18554 = G__18729;
count__18459_18555 = G__18730;
i__18460_18556 = G__18731;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__18533 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__18450_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18450_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__18451_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__18451_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__18452_SHARP_){
return clojure.string.join.call(null,",",p1__18452_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__18534 = G__18533;
goog.object.set(G__18534,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__18534;
} else {
return G__18533;
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
var vec__18732 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__18732,(0),null);
var col_map = cljs.core.nth.call(null,vec__18732,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__18735 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__18735,(0),null);
var infos = cljs.core.nth.call(null,vec__18735,(1),null);
var G__18741 = cljs.core.next.call(null,col_map_seq);
var G__18742 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__18735,col,infos,vec__18732,line,col_map){
return (function (v,p__18738){
var map__18739 = p__18738;
var map__18739__$1 = (((((!((map__18739 == null))))?(((((map__18739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18739):map__18739);
var gline = cljs.core.get.call(null,map__18739__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__18739__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__18735,col,infos,vec__18732,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__18741;
new_cols = G__18742;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__18743 = cljs.core.next.call(null,line_map_seq);
var G__18744 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__18743;
new_lines = G__18744;
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
var seq__18745_18807 = cljs.core.seq.call(null,reverse_map);
var chunk__18746_18808 = null;
var count__18747_18809 = (0);
var i__18748_18810 = (0);
while(true){
if((i__18748_18810 < count__18747_18809)){
var vec__18749_18811 = cljs.core._nth.call(null,chunk__18746_18808,i__18748_18810);
var line_18812 = cljs.core.nth.call(null,vec__18749_18811,(0),null);
var columns_18813 = cljs.core.nth.call(null,vec__18749_18811,(1),null);
var seq__18752_18814 = cljs.core.seq.call(null,columns_18813);
var chunk__18753_18815 = null;
var count__18754_18816 = (0);
var i__18755_18817 = (0);
while(true){
if((i__18755_18817 < count__18754_18816)){
var vec__18756_18818 = cljs.core._nth.call(null,chunk__18753_18815,i__18755_18817);
var column_18819 = cljs.core.nth.call(null,vec__18756_18818,(0),null);
var column_info_18820 = cljs.core.nth.call(null,vec__18756_18818,(1),null);
var seq__18759_18821 = cljs.core.seq.call(null,column_info_18820);
var chunk__18760_18822 = null;
var count__18761_18823 = (0);
var i__18762_18824 = (0);
while(true){
if((i__18762_18824 < count__18761_18823)){
var map__18763_18825 = cljs.core._nth.call(null,chunk__18760_18822,i__18762_18824);
var map__18763_18826__$1 = (((((!((map__18763_18825 == null))))?(((((map__18763_18825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18763_18825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18763_18825):map__18763_18825);
var gline_18827 = cljs.core.get.call(null,map__18763_18826__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_18828 = cljs.core.get.call(null,map__18763_18826__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_18829 = cljs.core.get.call(null,map__18763_18826__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_18827], null),cljs.core.fnil.call(null,((function (seq__18759_18821,chunk__18760_18822,count__18761_18823,i__18762_18824,seq__18752_18814,chunk__18753_18815,count__18754_18816,i__18755_18817,seq__18745_18807,chunk__18746_18808,count__18747_18809,i__18748_18810,map__18763_18825,map__18763_18826__$1,gline_18827,gcol_18828,name_18829,vec__18756_18818,column_18819,column_info_18820,vec__18749_18811,line_18812,columns_18813,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_18828], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_18812,new cljs.core.Keyword(null,"col","col",-1959363084),column_18819,new cljs.core.Keyword(null,"name","name",1843675177),name_18829], null));
});})(seq__18759_18821,chunk__18760_18822,count__18761_18823,i__18762_18824,seq__18752_18814,chunk__18753_18815,count__18754_18816,i__18755_18817,seq__18745_18807,chunk__18746_18808,count__18747_18809,i__18748_18810,map__18763_18825,map__18763_18826__$1,gline_18827,gcol_18828,name_18829,vec__18756_18818,column_18819,column_info_18820,vec__18749_18811,line_18812,columns_18813,inverted))
,cljs.core.sorted_map.call(null)));


var G__18830 = seq__18759_18821;
var G__18831 = chunk__18760_18822;
var G__18832 = count__18761_18823;
var G__18833 = (i__18762_18824 + (1));
seq__18759_18821 = G__18830;
chunk__18760_18822 = G__18831;
count__18761_18823 = G__18832;
i__18762_18824 = G__18833;
continue;
} else {
var temp__5720__auto___18834 = cljs.core.seq.call(null,seq__18759_18821);
if(temp__5720__auto___18834){
var seq__18759_18835__$1 = temp__5720__auto___18834;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18759_18835__$1)){
var c__4461__auto___18836 = cljs.core.chunk_first.call(null,seq__18759_18835__$1);
var G__18837 = cljs.core.chunk_rest.call(null,seq__18759_18835__$1);
var G__18838 = c__4461__auto___18836;
var G__18839 = cljs.core.count.call(null,c__4461__auto___18836);
var G__18840 = (0);
seq__18759_18821 = G__18837;
chunk__18760_18822 = G__18838;
count__18761_18823 = G__18839;
i__18762_18824 = G__18840;
continue;
} else {
var map__18765_18841 = cljs.core.first.call(null,seq__18759_18835__$1);
var map__18765_18842__$1 = (((((!((map__18765_18841 == null))))?(((((map__18765_18841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18765_18841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18765_18841):map__18765_18841);
var gline_18843 = cljs.core.get.call(null,map__18765_18842__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_18844 = cljs.core.get.call(null,map__18765_18842__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_18845 = cljs.core.get.call(null,map__18765_18842__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_18843], null),cljs.core.fnil.call(null,((function (seq__18759_18821,chunk__18760_18822,count__18761_18823,i__18762_18824,seq__18752_18814,chunk__18753_18815,count__18754_18816,i__18755_18817,seq__18745_18807,chunk__18746_18808,count__18747_18809,i__18748_18810,map__18765_18841,map__18765_18842__$1,gline_18843,gcol_18844,name_18845,seq__18759_18835__$1,temp__5720__auto___18834,vec__18756_18818,column_18819,column_info_18820,vec__18749_18811,line_18812,columns_18813,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_18844], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_18812,new cljs.core.Keyword(null,"col","col",-1959363084),column_18819,new cljs.core.Keyword(null,"name","name",1843675177),name_18845], null));
});})(seq__18759_18821,chunk__18760_18822,count__18761_18823,i__18762_18824,seq__18752_18814,chunk__18753_18815,count__18754_18816,i__18755_18817,seq__18745_18807,chunk__18746_18808,count__18747_18809,i__18748_18810,map__18765_18841,map__18765_18842__$1,gline_18843,gcol_18844,name_18845,seq__18759_18835__$1,temp__5720__auto___18834,vec__18756_18818,column_18819,column_info_18820,vec__18749_18811,line_18812,columns_18813,inverted))
,cljs.core.sorted_map.call(null)));


var G__18846 = cljs.core.next.call(null,seq__18759_18835__$1);
var G__18847 = null;
var G__18848 = (0);
var G__18849 = (0);
seq__18759_18821 = G__18846;
chunk__18760_18822 = G__18847;
count__18761_18823 = G__18848;
i__18762_18824 = G__18849;
continue;
}
} else {
}
}
break;
}


var G__18850 = seq__18752_18814;
var G__18851 = chunk__18753_18815;
var G__18852 = count__18754_18816;
var G__18853 = (i__18755_18817 + (1));
seq__18752_18814 = G__18850;
chunk__18753_18815 = G__18851;
count__18754_18816 = G__18852;
i__18755_18817 = G__18853;
continue;
} else {
var temp__5720__auto___18854 = cljs.core.seq.call(null,seq__18752_18814);
if(temp__5720__auto___18854){
var seq__18752_18855__$1 = temp__5720__auto___18854;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18752_18855__$1)){
var c__4461__auto___18856 = cljs.core.chunk_first.call(null,seq__18752_18855__$1);
var G__18857 = cljs.core.chunk_rest.call(null,seq__18752_18855__$1);
var G__18858 = c__4461__auto___18856;
var G__18859 = cljs.core.count.call(null,c__4461__auto___18856);
var G__18860 = (0);
seq__18752_18814 = G__18857;
chunk__18753_18815 = G__18858;
count__18754_18816 = G__18859;
i__18755_18817 = G__18860;
continue;
} else {
var vec__18767_18861 = cljs.core.first.call(null,seq__18752_18855__$1);
var column_18862 = cljs.core.nth.call(null,vec__18767_18861,(0),null);
var column_info_18863 = cljs.core.nth.call(null,vec__18767_18861,(1),null);
var seq__18770_18864 = cljs.core.seq.call(null,column_info_18863);
var chunk__18771_18865 = null;
var count__18772_18866 = (0);
var i__18773_18867 = (0);
while(true){
if((i__18773_18867 < count__18772_18866)){
var map__18774_18868 = cljs.core._nth.call(null,chunk__18771_18865,i__18773_18867);
var map__18774_18869__$1 = (((((!((map__18774_18868 == null))))?(((((map__18774_18868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18774_18868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18774_18868):map__18774_18868);
var gline_18870 = cljs.core.get.call(null,map__18774_18869__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_18871 = cljs.core.get.call(null,map__18774_18869__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_18872 = cljs.core.get.call(null,map__18774_18869__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_18870], null),cljs.core.fnil.call(null,((function (seq__18770_18864,chunk__18771_18865,count__18772_18866,i__18773_18867,seq__18752_18814,chunk__18753_18815,count__18754_18816,i__18755_18817,seq__18745_18807,chunk__18746_18808,count__18747_18809,i__18748_18810,map__18774_18868,map__18774_18869__$1,gline_18870,gcol_18871,name_18872,vec__18767_18861,column_18862,column_info_18863,seq__18752_18855__$1,temp__5720__auto___18854,vec__18749_18811,line_18812,columns_18813,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_18871], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_18812,new cljs.core.Keyword(null,"col","col",-1959363084),column_18862,new cljs.core.Keyword(null,"name","name",1843675177),name_18872], null));
});})(seq__18770_18864,chunk__18771_18865,count__18772_18866,i__18773_18867,seq__18752_18814,chunk__18753_18815,count__18754_18816,i__18755_18817,seq__18745_18807,chunk__18746_18808,count__18747_18809,i__18748_18810,map__18774_18868,map__18774_18869__$1,gline_18870,gcol_18871,name_18872,vec__18767_18861,column_18862,column_info_18863,seq__18752_18855__$1,temp__5720__auto___18854,vec__18749_18811,line_18812,columns_18813,inverted))
,cljs.core.sorted_map.call(null)));


var G__18873 = seq__18770_18864;
var G__18874 = chunk__18771_18865;
var G__18875 = count__18772_18866;
var G__18876 = (i__18773_18867 + (1));
seq__18770_18864 = G__18873;
chunk__18771_18865 = G__18874;
count__18772_18866 = G__18875;
i__18773_18867 = G__18876;
continue;
} else {
var temp__5720__auto___18877__$1 = cljs.core.seq.call(null,seq__18770_18864);
if(temp__5720__auto___18877__$1){
var seq__18770_18878__$1 = temp__5720__auto___18877__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18770_18878__$1)){
var c__4461__auto___18879 = cljs.core.chunk_first.call(null,seq__18770_18878__$1);
var G__18880 = cljs.core.chunk_rest.call(null,seq__18770_18878__$1);
var G__18881 = c__4461__auto___18879;
var G__18882 = cljs.core.count.call(null,c__4461__auto___18879);
var G__18883 = (0);
seq__18770_18864 = G__18880;
chunk__18771_18865 = G__18881;
count__18772_18866 = G__18882;
i__18773_18867 = G__18883;
continue;
} else {
var map__18776_18884 = cljs.core.first.call(null,seq__18770_18878__$1);
var map__18776_18885__$1 = (((((!((map__18776_18884 == null))))?(((((map__18776_18884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18776_18884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18776_18884):map__18776_18884);
var gline_18886 = cljs.core.get.call(null,map__18776_18885__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_18887 = cljs.core.get.call(null,map__18776_18885__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_18888 = cljs.core.get.call(null,map__18776_18885__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_18886], null),cljs.core.fnil.call(null,((function (seq__18770_18864,chunk__18771_18865,count__18772_18866,i__18773_18867,seq__18752_18814,chunk__18753_18815,count__18754_18816,i__18755_18817,seq__18745_18807,chunk__18746_18808,count__18747_18809,i__18748_18810,map__18776_18884,map__18776_18885__$1,gline_18886,gcol_18887,name_18888,seq__18770_18878__$1,temp__5720__auto___18877__$1,vec__18767_18861,column_18862,column_info_18863,seq__18752_18855__$1,temp__5720__auto___18854,vec__18749_18811,line_18812,columns_18813,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_18887], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_18812,new cljs.core.Keyword(null,"col","col",-1959363084),column_18862,new cljs.core.Keyword(null,"name","name",1843675177),name_18888], null));
});})(seq__18770_18864,chunk__18771_18865,count__18772_18866,i__18773_18867,seq__18752_18814,chunk__18753_18815,count__18754_18816,i__18755_18817,seq__18745_18807,chunk__18746_18808,count__18747_18809,i__18748_18810,map__18776_18884,map__18776_18885__$1,gline_18886,gcol_18887,name_18888,seq__18770_18878__$1,temp__5720__auto___18877__$1,vec__18767_18861,column_18862,column_info_18863,seq__18752_18855__$1,temp__5720__auto___18854,vec__18749_18811,line_18812,columns_18813,inverted))
,cljs.core.sorted_map.call(null)));


var G__18889 = cljs.core.next.call(null,seq__18770_18878__$1);
var G__18890 = null;
var G__18891 = (0);
var G__18892 = (0);
seq__18770_18864 = G__18889;
chunk__18771_18865 = G__18890;
count__18772_18866 = G__18891;
i__18773_18867 = G__18892;
continue;
}
} else {
}
}
break;
}


var G__18893 = cljs.core.next.call(null,seq__18752_18855__$1);
var G__18894 = null;
var G__18895 = (0);
var G__18896 = (0);
seq__18752_18814 = G__18893;
chunk__18753_18815 = G__18894;
count__18754_18816 = G__18895;
i__18755_18817 = G__18896;
continue;
}
} else {
}
}
break;
}


var G__18897 = seq__18745_18807;
var G__18898 = chunk__18746_18808;
var G__18899 = count__18747_18809;
var G__18900 = (i__18748_18810 + (1));
seq__18745_18807 = G__18897;
chunk__18746_18808 = G__18898;
count__18747_18809 = G__18899;
i__18748_18810 = G__18900;
continue;
} else {
var temp__5720__auto___18901 = cljs.core.seq.call(null,seq__18745_18807);
if(temp__5720__auto___18901){
var seq__18745_18902__$1 = temp__5720__auto___18901;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18745_18902__$1)){
var c__4461__auto___18903 = cljs.core.chunk_first.call(null,seq__18745_18902__$1);
var G__18904 = cljs.core.chunk_rest.call(null,seq__18745_18902__$1);
var G__18905 = c__4461__auto___18903;
var G__18906 = cljs.core.count.call(null,c__4461__auto___18903);
var G__18907 = (0);
seq__18745_18807 = G__18904;
chunk__18746_18808 = G__18905;
count__18747_18809 = G__18906;
i__18748_18810 = G__18907;
continue;
} else {
var vec__18778_18908 = cljs.core.first.call(null,seq__18745_18902__$1);
var line_18909 = cljs.core.nth.call(null,vec__18778_18908,(0),null);
var columns_18910 = cljs.core.nth.call(null,vec__18778_18908,(1),null);
var seq__18781_18911 = cljs.core.seq.call(null,columns_18910);
var chunk__18782_18912 = null;
var count__18783_18913 = (0);
var i__18784_18914 = (0);
while(true){
if((i__18784_18914 < count__18783_18913)){
var vec__18785_18915 = cljs.core._nth.call(null,chunk__18782_18912,i__18784_18914);
var column_18916 = cljs.core.nth.call(null,vec__18785_18915,(0),null);
var column_info_18917 = cljs.core.nth.call(null,vec__18785_18915,(1),null);
var seq__18788_18918 = cljs.core.seq.call(null,column_info_18917);
var chunk__18789_18919 = null;
var count__18790_18920 = (0);
var i__18791_18921 = (0);
while(true){
if((i__18791_18921 < count__18790_18920)){
var map__18792_18922 = cljs.core._nth.call(null,chunk__18789_18919,i__18791_18921);
var map__18792_18923__$1 = (((((!((map__18792_18922 == null))))?(((((map__18792_18922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18792_18922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18792_18922):map__18792_18922);
var gline_18924 = cljs.core.get.call(null,map__18792_18923__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_18925 = cljs.core.get.call(null,map__18792_18923__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_18926 = cljs.core.get.call(null,map__18792_18923__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_18924], null),cljs.core.fnil.call(null,((function (seq__18788_18918,chunk__18789_18919,count__18790_18920,i__18791_18921,seq__18781_18911,chunk__18782_18912,count__18783_18913,i__18784_18914,seq__18745_18807,chunk__18746_18808,count__18747_18809,i__18748_18810,map__18792_18922,map__18792_18923__$1,gline_18924,gcol_18925,name_18926,vec__18785_18915,column_18916,column_info_18917,vec__18778_18908,line_18909,columns_18910,seq__18745_18902__$1,temp__5720__auto___18901,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_18925], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_18909,new cljs.core.Keyword(null,"col","col",-1959363084),column_18916,new cljs.core.Keyword(null,"name","name",1843675177),name_18926], null));
});})(seq__18788_18918,chunk__18789_18919,count__18790_18920,i__18791_18921,seq__18781_18911,chunk__18782_18912,count__18783_18913,i__18784_18914,seq__18745_18807,chunk__18746_18808,count__18747_18809,i__18748_18810,map__18792_18922,map__18792_18923__$1,gline_18924,gcol_18925,name_18926,vec__18785_18915,column_18916,column_info_18917,vec__18778_18908,line_18909,columns_18910,seq__18745_18902__$1,temp__5720__auto___18901,inverted))
,cljs.core.sorted_map.call(null)));


var G__18927 = seq__18788_18918;
var G__18928 = chunk__18789_18919;
var G__18929 = count__18790_18920;
var G__18930 = (i__18791_18921 + (1));
seq__18788_18918 = G__18927;
chunk__18789_18919 = G__18928;
count__18790_18920 = G__18929;
i__18791_18921 = G__18930;
continue;
} else {
var temp__5720__auto___18931__$1 = cljs.core.seq.call(null,seq__18788_18918);
if(temp__5720__auto___18931__$1){
var seq__18788_18932__$1 = temp__5720__auto___18931__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18788_18932__$1)){
var c__4461__auto___18933 = cljs.core.chunk_first.call(null,seq__18788_18932__$1);
var G__18934 = cljs.core.chunk_rest.call(null,seq__18788_18932__$1);
var G__18935 = c__4461__auto___18933;
var G__18936 = cljs.core.count.call(null,c__4461__auto___18933);
var G__18937 = (0);
seq__18788_18918 = G__18934;
chunk__18789_18919 = G__18935;
count__18790_18920 = G__18936;
i__18791_18921 = G__18937;
continue;
} else {
var map__18794_18938 = cljs.core.first.call(null,seq__18788_18932__$1);
var map__18794_18939__$1 = (((((!((map__18794_18938 == null))))?(((((map__18794_18938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18794_18938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18794_18938):map__18794_18938);
var gline_18940 = cljs.core.get.call(null,map__18794_18939__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_18941 = cljs.core.get.call(null,map__18794_18939__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_18942 = cljs.core.get.call(null,map__18794_18939__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_18940], null),cljs.core.fnil.call(null,((function (seq__18788_18918,chunk__18789_18919,count__18790_18920,i__18791_18921,seq__18781_18911,chunk__18782_18912,count__18783_18913,i__18784_18914,seq__18745_18807,chunk__18746_18808,count__18747_18809,i__18748_18810,map__18794_18938,map__18794_18939__$1,gline_18940,gcol_18941,name_18942,seq__18788_18932__$1,temp__5720__auto___18931__$1,vec__18785_18915,column_18916,column_info_18917,vec__18778_18908,line_18909,columns_18910,seq__18745_18902__$1,temp__5720__auto___18901,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_18941], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_18909,new cljs.core.Keyword(null,"col","col",-1959363084),column_18916,new cljs.core.Keyword(null,"name","name",1843675177),name_18942], null));
});})(seq__18788_18918,chunk__18789_18919,count__18790_18920,i__18791_18921,seq__18781_18911,chunk__18782_18912,count__18783_18913,i__18784_18914,seq__18745_18807,chunk__18746_18808,count__18747_18809,i__18748_18810,map__18794_18938,map__18794_18939__$1,gline_18940,gcol_18941,name_18942,seq__18788_18932__$1,temp__5720__auto___18931__$1,vec__18785_18915,column_18916,column_info_18917,vec__18778_18908,line_18909,columns_18910,seq__18745_18902__$1,temp__5720__auto___18901,inverted))
,cljs.core.sorted_map.call(null)));


var G__18943 = cljs.core.next.call(null,seq__18788_18932__$1);
var G__18944 = null;
var G__18945 = (0);
var G__18946 = (0);
seq__18788_18918 = G__18943;
chunk__18789_18919 = G__18944;
count__18790_18920 = G__18945;
i__18791_18921 = G__18946;
continue;
}
} else {
}
}
break;
}


var G__18947 = seq__18781_18911;
var G__18948 = chunk__18782_18912;
var G__18949 = count__18783_18913;
var G__18950 = (i__18784_18914 + (1));
seq__18781_18911 = G__18947;
chunk__18782_18912 = G__18948;
count__18783_18913 = G__18949;
i__18784_18914 = G__18950;
continue;
} else {
var temp__5720__auto___18951__$1 = cljs.core.seq.call(null,seq__18781_18911);
if(temp__5720__auto___18951__$1){
var seq__18781_18952__$1 = temp__5720__auto___18951__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18781_18952__$1)){
var c__4461__auto___18953 = cljs.core.chunk_first.call(null,seq__18781_18952__$1);
var G__18954 = cljs.core.chunk_rest.call(null,seq__18781_18952__$1);
var G__18955 = c__4461__auto___18953;
var G__18956 = cljs.core.count.call(null,c__4461__auto___18953);
var G__18957 = (0);
seq__18781_18911 = G__18954;
chunk__18782_18912 = G__18955;
count__18783_18913 = G__18956;
i__18784_18914 = G__18957;
continue;
} else {
var vec__18796_18958 = cljs.core.first.call(null,seq__18781_18952__$1);
var column_18959 = cljs.core.nth.call(null,vec__18796_18958,(0),null);
var column_info_18960 = cljs.core.nth.call(null,vec__18796_18958,(1),null);
var seq__18799_18961 = cljs.core.seq.call(null,column_info_18960);
var chunk__18800_18962 = null;
var count__18801_18963 = (0);
var i__18802_18964 = (0);
while(true){
if((i__18802_18964 < count__18801_18963)){
var map__18803_18965 = cljs.core._nth.call(null,chunk__18800_18962,i__18802_18964);
var map__18803_18966__$1 = (((((!((map__18803_18965 == null))))?(((((map__18803_18965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18803_18965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18803_18965):map__18803_18965);
var gline_18967 = cljs.core.get.call(null,map__18803_18966__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_18968 = cljs.core.get.call(null,map__18803_18966__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_18969 = cljs.core.get.call(null,map__18803_18966__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_18967], null),cljs.core.fnil.call(null,((function (seq__18799_18961,chunk__18800_18962,count__18801_18963,i__18802_18964,seq__18781_18911,chunk__18782_18912,count__18783_18913,i__18784_18914,seq__18745_18807,chunk__18746_18808,count__18747_18809,i__18748_18810,map__18803_18965,map__18803_18966__$1,gline_18967,gcol_18968,name_18969,vec__18796_18958,column_18959,column_info_18960,seq__18781_18952__$1,temp__5720__auto___18951__$1,vec__18778_18908,line_18909,columns_18910,seq__18745_18902__$1,temp__5720__auto___18901,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_18968], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_18909,new cljs.core.Keyword(null,"col","col",-1959363084),column_18959,new cljs.core.Keyword(null,"name","name",1843675177),name_18969], null));
});})(seq__18799_18961,chunk__18800_18962,count__18801_18963,i__18802_18964,seq__18781_18911,chunk__18782_18912,count__18783_18913,i__18784_18914,seq__18745_18807,chunk__18746_18808,count__18747_18809,i__18748_18810,map__18803_18965,map__18803_18966__$1,gline_18967,gcol_18968,name_18969,vec__18796_18958,column_18959,column_info_18960,seq__18781_18952__$1,temp__5720__auto___18951__$1,vec__18778_18908,line_18909,columns_18910,seq__18745_18902__$1,temp__5720__auto___18901,inverted))
,cljs.core.sorted_map.call(null)));


var G__18970 = seq__18799_18961;
var G__18971 = chunk__18800_18962;
var G__18972 = count__18801_18963;
var G__18973 = (i__18802_18964 + (1));
seq__18799_18961 = G__18970;
chunk__18800_18962 = G__18971;
count__18801_18963 = G__18972;
i__18802_18964 = G__18973;
continue;
} else {
var temp__5720__auto___18974__$2 = cljs.core.seq.call(null,seq__18799_18961);
if(temp__5720__auto___18974__$2){
var seq__18799_18975__$1 = temp__5720__auto___18974__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18799_18975__$1)){
var c__4461__auto___18976 = cljs.core.chunk_first.call(null,seq__18799_18975__$1);
var G__18977 = cljs.core.chunk_rest.call(null,seq__18799_18975__$1);
var G__18978 = c__4461__auto___18976;
var G__18979 = cljs.core.count.call(null,c__4461__auto___18976);
var G__18980 = (0);
seq__18799_18961 = G__18977;
chunk__18800_18962 = G__18978;
count__18801_18963 = G__18979;
i__18802_18964 = G__18980;
continue;
} else {
var map__18805_18981 = cljs.core.first.call(null,seq__18799_18975__$1);
var map__18805_18982__$1 = (((((!((map__18805_18981 == null))))?(((((map__18805_18981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18805_18981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18805_18981):map__18805_18981);
var gline_18983 = cljs.core.get.call(null,map__18805_18982__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_18984 = cljs.core.get.call(null,map__18805_18982__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_18985 = cljs.core.get.call(null,map__18805_18982__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_18983], null),cljs.core.fnil.call(null,((function (seq__18799_18961,chunk__18800_18962,count__18801_18963,i__18802_18964,seq__18781_18911,chunk__18782_18912,count__18783_18913,i__18784_18914,seq__18745_18807,chunk__18746_18808,count__18747_18809,i__18748_18810,map__18805_18981,map__18805_18982__$1,gline_18983,gcol_18984,name_18985,seq__18799_18975__$1,temp__5720__auto___18974__$2,vec__18796_18958,column_18959,column_info_18960,seq__18781_18952__$1,temp__5720__auto___18951__$1,vec__18778_18908,line_18909,columns_18910,seq__18745_18902__$1,temp__5720__auto___18901,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_18984], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_18909,new cljs.core.Keyword(null,"col","col",-1959363084),column_18959,new cljs.core.Keyword(null,"name","name",1843675177),name_18985], null));
});})(seq__18799_18961,chunk__18800_18962,count__18801_18963,i__18802_18964,seq__18781_18911,chunk__18782_18912,count__18783_18913,i__18784_18914,seq__18745_18807,chunk__18746_18808,count__18747_18809,i__18748_18810,map__18805_18981,map__18805_18982__$1,gline_18983,gcol_18984,name_18985,seq__18799_18975__$1,temp__5720__auto___18974__$2,vec__18796_18958,column_18959,column_info_18960,seq__18781_18952__$1,temp__5720__auto___18951__$1,vec__18778_18908,line_18909,columns_18910,seq__18745_18902__$1,temp__5720__auto___18901,inverted))
,cljs.core.sorted_map.call(null)));


var G__18986 = cljs.core.next.call(null,seq__18799_18975__$1);
var G__18987 = null;
var G__18988 = (0);
var G__18989 = (0);
seq__18799_18961 = G__18986;
chunk__18800_18962 = G__18987;
count__18801_18963 = G__18988;
i__18802_18964 = G__18989;
continue;
}
} else {
}
}
break;
}


var G__18990 = cljs.core.next.call(null,seq__18781_18952__$1);
var G__18991 = null;
var G__18992 = (0);
var G__18993 = (0);
seq__18781_18911 = G__18990;
chunk__18782_18912 = G__18991;
count__18783_18913 = G__18992;
i__18784_18914 = G__18993;
continue;
}
} else {
}
}
break;
}


var G__18994 = cljs.core.next.call(null,seq__18745_18902__$1);
var G__18995 = null;
var G__18996 = (0);
var G__18997 = (0);
seq__18745_18807 = G__18994;
chunk__18746_18808 = G__18995;
count__18747_18809 = G__18996;
i__18748_18810 = G__18997;
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
