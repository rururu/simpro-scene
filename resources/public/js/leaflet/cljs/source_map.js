// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
goog.require('goog.object');
goog.scope(function(){
cljs.source_map.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__27350){
var vec__27351 = p__27350;
var i = cljs.core.nth.call(null,vec__27351,(0),null);
var v = cljs.core.nth.call(null,vec__27351,(1),null);
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
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__27354 = seg;
var gcol = cljs.core.nth.call(null,vec__27354,(0),null);
var source = cljs.core.nth.call(null,vec__27354,(1),null);
var line = cljs.core.nth.call(null,vec__27354,(2),null);
var col = cljs.core.nth.call(null,vec__27354,(3),null);
var name = cljs.core.nth.call(null,vec__27354,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(cljs.source_map.goog$module$goog$object.get.call(null,source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__5804__auto__)){
var name__$1 = temp__5804__auto__;
return (cljs.source_map.goog$module$goog$object.get.call(null,source_map,"names")[name__$1]);
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
var vec__27357 = seg;
var gcol = cljs.core.nth.call(null,vec__27357,(0),null);
var source = cljs.core.nth.call(null,vec__27357,(1),null);
var line = cljs.core.nth.call(null,vec__27357,(2),null);
var col = cljs.core.nth.call(null,vec__27357,(3),null);
var name = cljs.core.nth.call(null,vec__27357,(4),null);
var vec__27360 = relseg;
var rgcol = cljs.core.nth.call(null,vec__27360,(0),null);
var rsource = cljs.core.nth.call(null,vec__27360,(1),null);
var rline = cljs.core.nth.call(null,vec__27360,(2),null);
var rcol = cljs.core.nth.call(null,vec__27360,(3),null);
var rname = cljs.core.nth.call(null,vec__27360,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__5045__auto__ = col;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__5045__auto__ = name;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
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
var map__27363 = segmap;
var map__27363__$1 = cljs.core.__destructure_map.call(null,map__27363);
var gcol = cljs.core.get.call(null,map__27363__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__27363__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__27363__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__27363__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__27363__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,(function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,(function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,(function (v){
return cljs.core.conj.call(null,v,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map.call(null)));
}),cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__27365 = arguments.length;
switch (G__27365) {
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

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,cljs.source_map.goog$module$goog$object.get.call(null,source_map,"mappings"),source_map);
}));

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = cljs.source_map.goog$module$goog$object.get.call(null,source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__27369 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__27373 = cljs.core.next.call(null,segs__$1);
var G__27374 = nrelseg;
var G__27375 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__27373;
relseg__$1 = G__27374;
result__$1 = G__27375;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__27369,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__27369,(1),null);
var G__27376 = (gline + (1));
var G__27377 = cljs.core.next.call(null,lines__$1);
var G__27378 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__27379 = result__$1;
gline = G__27376;
lines__$1 = G__27377;
relseg = G__27378;
result = G__27379;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2);

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__27381 = segmap;
var map__27381__$1 = cljs.core.__destructure_map.call(null,map__27381);
var gcol = cljs.core.get.call(null,map__27381__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__27381__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__27381__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__27381__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__27381__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,(function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,(function (p1__27380_SHARP_){
return cljs.core.conj.call(null,p1__27380_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__27383 = arguments.length;
switch (G__27383) {
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

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,cljs.source_map.goog$module$goog$object.get.call(null,source_map,"mappings"),source_map);
}));

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = cljs.source_map.goog$module$goog$object.get.call(null,source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__27387 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__27391 = cljs.core.next.call(null,segs__$1);
var G__27392 = nrelseg;
var G__27393 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__27391;
relseg__$1 = G__27392;
result__$1 = G__27393;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__27387,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__27387,(1),null);
var G__27394 = (gline + (1));
var G__27395 = cljs.core.next.call(null,lines__$1);
var G__27396 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__27397 = result__$1;
gline = G__27394;
lines__$1 = G__27395;
relseg = G__27396;
result = G__27397;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode.cljs$lang$maxFixedArity = 2);

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,(function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,(function (p__27398){
var vec__27399 = p__27398;
var _ = cljs.core.nth.call(null,vec__27399,(0),null);
var source = cljs.core.nth.call(null,vec__27399,(1),null);
var line = cljs.core.nth.call(null,vec__27399,(2),null);
var col = cljs.core.nth.call(null,vec__27399,(3),null);
var name = cljs.core.nth.call(null,vec__27399,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,(function (cols__$1,p__27402){
var vec__27403 = p__27402;
var gcol = cljs.core.nth.call(null,vec__27403,(0),null);
var sidx = cljs.core.nth.call(null,vec__27403,(1),null);
var line = cljs.core.nth.call(null,vec__27403,(2),null);
var col = cljs.core.nth.call(null,vec__27403,(3),null);
var name = cljs.core.nth.call(null,vec__27403,(4),null);
var seg = vec__27403;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,(function (p__27406){
var vec__27407 = p__27406;
var _ = cljs.core.nth.call(null,vec__27407,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__27407,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__27407,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__27407,(3),null);
var lname = cljs.core.nth.call(null,vec__27407,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__5045__auto__ = name;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return lname;
}
})()], null);
}));

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
}),cljs.core.PersistentVector.EMPTY,cols));
}),cljs.core.PersistentVector.EMPTY,lines);
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
var preamble_lines = cljs.core.take.call(null,(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5802__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5802__auto__)){
var name = temp__5802__auto__;
var idx = (function (){var temp__5802__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__5802__auto____$1)){
var idx = temp__5802__auto____$1;
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
});
var encode_cols = (function (infos,source_idx,line,col){
var seq__27413 = cljs.core.seq.call(null,infos);
var chunk__27414 = null;
var count__27415 = (0);
var i__27416 = (0);
while(true){
if((i__27416 < count__27415)){
var info = cljs.core._nth.call(null,chunk__27414,i__27416);
var segv_27767 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_27768 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_27769 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_27768 > (lc_27769 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__27413,chunk__27414,count__27415,i__27416,segv_27767,gline_27768,lc_27769,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_27768 - (lc_27769 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_27767], null));
});})(seq__27413,chunk__27414,count__27415,i__27416,segv_27767,gline_27768,lc_27769,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__27413,chunk__27414,count__27415,i__27416,segv_27767,gline_27768,lc_27769,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27768], null),cljs.core.conj,segv_27767);
});})(seq__27413,chunk__27414,count__27415,i__27416,segv_27767,gline_27768,lc_27769,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__27770 = seq__27413;
var G__27771 = chunk__27414;
var G__27772 = count__27415;
var G__27773 = (i__27416 + (1));
seq__27413 = G__27770;
chunk__27414 = G__27771;
count__27415 = G__27772;
i__27416 = G__27773;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__27413);
if(temp__5804__auto__){
var seq__27413__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27413__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__27413__$1);
var G__27774 = cljs.core.chunk_rest.call(null,seq__27413__$1);
var G__27775 = c__5568__auto__;
var G__27776 = cljs.core.count.call(null,c__5568__auto__);
var G__27777 = (0);
seq__27413 = G__27774;
chunk__27414 = G__27775;
count__27415 = G__27776;
i__27416 = G__27777;
continue;
} else {
var info = cljs.core.first.call(null,seq__27413__$1);
var segv_27778 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_27779 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_27780 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_27779 > (lc_27780 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__27413,chunk__27414,count__27415,i__27416,segv_27778,gline_27779,lc_27780,info,seq__27413__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_27779 - (lc_27780 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_27778], null));
});})(seq__27413,chunk__27414,count__27415,i__27416,segv_27778,gline_27779,lc_27780,info,seq__27413__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__27413,chunk__27414,count__27415,i__27416,segv_27778,gline_27779,lc_27780,info,seq__27413__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27779], null),cljs.core.conj,segv_27778);
});})(seq__27413,chunk__27414,count__27415,i__27416,segv_27778,gline_27779,lc_27780,info,seq__27413__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__27781 = cljs.core.next.call(null,seq__27413__$1);
var G__27782 = null;
var G__27783 = (0);
var G__27784 = (0);
seq__27413 = G__27781;
chunk__27414 = G__27782;
count__27415 = G__27783;
i__27416 = G__27784;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__27417_27785 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__27418_27786 = null;
var count__27419_27787 = (0);
var i__27420_27788 = (0);
while(true){
if((i__27420_27788 < count__27419_27787)){
var vec__27593_27789 = cljs.core._nth.call(null,chunk__27418_27786,i__27420_27788);
var source_idx_27790 = cljs.core.nth.call(null,vec__27593_27789,(0),null);
var vec__27596_27791 = cljs.core.nth.call(null,vec__27593_27789,(1),null);
var __27792 = cljs.core.nth.call(null,vec__27596_27791,(0),null);
var lines_27793__$1 = cljs.core.nth.call(null,vec__27596_27791,(1),null);
var seq__27599_27794 = cljs.core.seq.call(null,lines_27793__$1);
var chunk__27600_27795 = null;
var count__27601_27796 = (0);
var i__27602_27797 = (0);
while(true){
if((i__27602_27797 < count__27601_27796)){
var vec__27641_27798 = cljs.core._nth.call(null,chunk__27600_27795,i__27602_27797);
var line_27799 = cljs.core.nth.call(null,vec__27641_27798,(0),null);
var cols_27800 = cljs.core.nth.call(null,vec__27641_27798,(1),null);
var seq__27644_27801 = cljs.core.seq.call(null,cols_27800);
var chunk__27645_27802 = null;
var count__27646_27803 = (0);
var i__27647_27804 = (0);
while(true){
if((i__27647_27804 < count__27646_27803)){
var vec__27654_27805 = cljs.core._nth.call(null,chunk__27645_27802,i__27647_27804);
var col_27806 = cljs.core.nth.call(null,vec__27654_27805,(0),null);
var infos_27807 = cljs.core.nth.call(null,vec__27654_27805,(1),null);
encode_cols.call(null,infos_27807,source_idx_27790,line_27799,col_27806);


var G__27808 = seq__27644_27801;
var G__27809 = chunk__27645_27802;
var G__27810 = count__27646_27803;
var G__27811 = (i__27647_27804 + (1));
seq__27644_27801 = G__27808;
chunk__27645_27802 = G__27809;
count__27646_27803 = G__27810;
i__27647_27804 = G__27811;
continue;
} else {
var temp__5804__auto___27812 = cljs.core.seq.call(null,seq__27644_27801);
if(temp__5804__auto___27812){
var seq__27644_27813__$1 = temp__5804__auto___27812;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27644_27813__$1)){
var c__5568__auto___27814 = cljs.core.chunk_first.call(null,seq__27644_27813__$1);
var G__27815 = cljs.core.chunk_rest.call(null,seq__27644_27813__$1);
var G__27816 = c__5568__auto___27814;
var G__27817 = cljs.core.count.call(null,c__5568__auto___27814);
var G__27818 = (0);
seq__27644_27801 = G__27815;
chunk__27645_27802 = G__27816;
count__27646_27803 = G__27817;
i__27647_27804 = G__27818;
continue;
} else {
var vec__27657_27819 = cljs.core.first.call(null,seq__27644_27813__$1);
var col_27820 = cljs.core.nth.call(null,vec__27657_27819,(0),null);
var infos_27821 = cljs.core.nth.call(null,vec__27657_27819,(1),null);
encode_cols.call(null,infos_27821,source_idx_27790,line_27799,col_27820);


var G__27822 = cljs.core.next.call(null,seq__27644_27813__$1);
var G__27823 = null;
var G__27824 = (0);
var G__27825 = (0);
seq__27644_27801 = G__27822;
chunk__27645_27802 = G__27823;
count__27646_27803 = G__27824;
i__27647_27804 = G__27825;
continue;
}
} else {
}
}
break;
}


var G__27826 = seq__27599_27794;
var G__27827 = chunk__27600_27795;
var G__27828 = count__27601_27796;
var G__27829 = (i__27602_27797 + (1));
seq__27599_27794 = G__27826;
chunk__27600_27795 = G__27827;
count__27601_27796 = G__27828;
i__27602_27797 = G__27829;
continue;
} else {
var temp__5804__auto___27830 = cljs.core.seq.call(null,seq__27599_27794);
if(temp__5804__auto___27830){
var seq__27599_27831__$1 = temp__5804__auto___27830;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27599_27831__$1)){
var c__5568__auto___27832 = cljs.core.chunk_first.call(null,seq__27599_27831__$1);
var G__27833 = cljs.core.chunk_rest.call(null,seq__27599_27831__$1);
var G__27834 = c__5568__auto___27832;
var G__27835 = cljs.core.count.call(null,c__5568__auto___27832);
var G__27836 = (0);
seq__27599_27794 = G__27833;
chunk__27600_27795 = G__27834;
count__27601_27796 = G__27835;
i__27602_27797 = G__27836;
continue;
} else {
var vec__27660_27837 = cljs.core.first.call(null,seq__27599_27831__$1);
var line_27838 = cljs.core.nth.call(null,vec__27660_27837,(0),null);
var cols_27839 = cljs.core.nth.call(null,vec__27660_27837,(1),null);
var seq__27663_27840 = cljs.core.seq.call(null,cols_27839);
var chunk__27664_27841 = null;
var count__27665_27842 = (0);
var i__27666_27843 = (0);
while(true){
if((i__27666_27843 < count__27665_27842)){
var vec__27673_27844 = cljs.core._nth.call(null,chunk__27664_27841,i__27666_27843);
var col_27845 = cljs.core.nth.call(null,vec__27673_27844,(0),null);
var infos_27846 = cljs.core.nth.call(null,vec__27673_27844,(1),null);
encode_cols.call(null,infos_27846,source_idx_27790,line_27838,col_27845);


var G__27847 = seq__27663_27840;
var G__27848 = chunk__27664_27841;
var G__27849 = count__27665_27842;
var G__27850 = (i__27666_27843 + (1));
seq__27663_27840 = G__27847;
chunk__27664_27841 = G__27848;
count__27665_27842 = G__27849;
i__27666_27843 = G__27850;
continue;
} else {
var temp__5804__auto___27851__$1 = cljs.core.seq.call(null,seq__27663_27840);
if(temp__5804__auto___27851__$1){
var seq__27663_27852__$1 = temp__5804__auto___27851__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27663_27852__$1)){
var c__5568__auto___27853 = cljs.core.chunk_first.call(null,seq__27663_27852__$1);
var G__27854 = cljs.core.chunk_rest.call(null,seq__27663_27852__$1);
var G__27855 = c__5568__auto___27853;
var G__27856 = cljs.core.count.call(null,c__5568__auto___27853);
var G__27857 = (0);
seq__27663_27840 = G__27854;
chunk__27664_27841 = G__27855;
count__27665_27842 = G__27856;
i__27666_27843 = G__27857;
continue;
} else {
var vec__27676_27858 = cljs.core.first.call(null,seq__27663_27852__$1);
var col_27859 = cljs.core.nth.call(null,vec__27676_27858,(0),null);
var infos_27860 = cljs.core.nth.call(null,vec__27676_27858,(1),null);
encode_cols.call(null,infos_27860,source_idx_27790,line_27838,col_27859);


var G__27861 = cljs.core.next.call(null,seq__27663_27852__$1);
var G__27862 = null;
var G__27863 = (0);
var G__27864 = (0);
seq__27663_27840 = G__27861;
chunk__27664_27841 = G__27862;
count__27665_27842 = G__27863;
i__27666_27843 = G__27864;
continue;
}
} else {
}
}
break;
}


var G__27865 = cljs.core.next.call(null,seq__27599_27831__$1);
var G__27866 = null;
var G__27867 = (0);
var G__27868 = (0);
seq__27599_27794 = G__27865;
chunk__27600_27795 = G__27866;
count__27601_27796 = G__27867;
i__27602_27797 = G__27868;
continue;
}
} else {
}
}
break;
}


var G__27869 = seq__27417_27785;
var G__27870 = chunk__27418_27786;
var G__27871 = count__27419_27787;
var G__27872 = (i__27420_27788 + (1));
seq__27417_27785 = G__27869;
chunk__27418_27786 = G__27870;
count__27419_27787 = G__27871;
i__27420_27788 = G__27872;
continue;
} else {
var temp__5804__auto___27873 = cljs.core.seq.call(null,seq__27417_27785);
if(temp__5804__auto___27873){
var seq__27417_27874__$1 = temp__5804__auto___27873;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27417_27874__$1)){
var c__5568__auto___27875 = cljs.core.chunk_first.call(null,seq__27417_27874__$1);
var G__27876 = cljs.core.chunk_rest.call(null,seq__27417_27874__$1);
var G__27877 = c__5568__auto___27875;
var G__27878 = cljs.core.count.call(null,c__5568__auto___27875);
var G__27879 = (0);
seq__27417_27785 = G__27876;
chunk__27418_27786 = G__27877;
count__27419_27787 = G__27878;
i__27420_27788 = G__27879;
continue;
} else {
var vec__27679_27880 = cljs.core.first.call(null,seq__27417_27874__$1);
var source_idx_27881 = cljs.core.nth.call(null,vec__27679_27880,(0),null);
var vec__27682_27882 = cljs.core.nth.call(null,vec__27679_27880,(1),null);
var __27883 = cljs.core.nth.call(null,vec__27682_27882,(0),null);
var lines_27884__$1 = cljs.core.nth.call(null,vec__27682_27882,(1),null);
var seq__27685_27885 = cljs.core.seq.call(null,lines_27884__$1);
var chunk__27686_27886 = null;
var count__27687_27887 = (0);
var i__27688_27888 = (0);
while(true){
if((i__27688_27888 < count__27687_27887)){
var vec__27727_27889 = cljs.core._nth.call(null,chunk__27686_27886,i__27688_27888);
var line_27890 = cljs.core.nth.call(null,vec__27727_27889,(0),null);
var cols_27891 = cljs.core.nth.call(null,vec__27727_27889,(1),null);
var seq__27730_27892 = cljs.core.seq.call(null,cols_27891);
var chunk__27731_27893 = null;
var count__27732_27894 = (0);
var i__27733_27895 = (0);
while(true){
if((i__27733_27895 < count__27732_27894)){
var vec__27740_27896 = cljs.core._nth.call(null,chunk__27731_27893,i__27733_27895);
var col_27897 = cljs.core.nth.call(null,vec__27740_27896,(0),null);
var infos_27898 = cljs.core.nth.call(null,vec__27740_27896,(1),null);
encode_cols.call(null,infos_27898,source_idx_27881,line_27890,col_27897);


var G__27899 = seq__27730_27892;
var G__27900 = chunk__27731_27893;
var G__27901 = count__27732_27894;
var G__27902 = (i__27733_27895 + (1));
seq__27730_27892 = G__27899;
chunk__27731_27893 = G__27900;
count__27732_27894 = G__27901;
i__27733_27895 = G__27902;
continue;
} else {
var temp__5804__auto___27903__$1 = cljs.core.seq.call(null,seq__27730_27892);
if(temp__5804__auto___27903__$1){
var seq__27730_27904__$1 = temp__5804__auto___27903__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27730_27904__$1)){
var c__5568__auto___27905 = cljs.core.chunk_first.call(null,seq__27730_27904__$1);
var G__27906 = cljs.core.chunk_rest.call(null,seq__27730_27904__$1);
var G__27907 = c__5568__auto___27905;
var G__27908 = cljs.core.count.call(null,c__5568__auto___27905);
var G__27909 = (0);
seq__27730_27892 = G__27906;
chunk__27731_27893 = G__27907;
count__27732_27894 = G__27908;
i__27733_27895 = G__27909;
continue;
} else {
var vec__27743_27910 = cljs.core.first.call(null,seq__27730_27904__$1);
var col_27911 = cljs.core.nth.call(null,vec__27743_27910,(0),null);
var infos_27912 = cljs.core.nth.call(null,vec__27743_27910,(1),null);
encode_cols.call(null,infos_27912,source_idx_27881,line_27890,col_27911);


var G__27913 = cljs.core.next.call(null,seq__27730_27904__$1);
var G__27914 = null;
var G__27915 = (0);
var G__27916 = (0);
seq__27730_27892 = G__27913;
chunk__27731_27893 = G__27914;
count__27732_27894 = G__27915;
i__27733_27895 = G__27916;
continue;
}
} else {
}
}
break;
}


var G__27917 = seq__27685_27885;
var G__27918 = chunk__27686_27886;
var G__27919 = count__27687_27887;
var G__27920 = (i__27688_27888 + (1));
seq__27685_27885 = G__27917;
chunk__27686_27886 = G__27918;
count__27687_27887 = G__27919;
i__27688_27888 = G__27920;
continue;
} else {
var temp__5804__auto___27921__$1 = cljs.core.seq.call(null,seq__27685_27885);
if(temp__5804__auto___27921__$1){
var seq__27685_27922__$1 = temp__5804__auto___27921__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27685_27922__$1)){
var c__5568__auto___27923 = cljs.core.chunk_first.call(null,seq__27685_27922__$1);
var G__27924 = cljs.core.chunk_rest.call(null,seq__27685_27922__$1);
var G__27925 = c__5568__auto___27923;
var G__27926 = cljs.core.count.call(null,c__5568__auto___27923);
var G__27927 = (0);
seq__27685_27885 = G__27924;
chunk__27686_27886 = G__27925;
count__27687_27887 = G__27926;
i__27688_27888 = G__27927;
continue;
} else {
var vec__27746_27928 = cljs.core.first.call(null,seq__27685_27922__$1);
var line_27929 = cljs.core.nth.call(null,vec__27746_27928,(0),null);
var cols_27930 = cljs.core.nth.call(null,vec__27746_27928,(1),null);
var seq__27749_27931 = cljs.core.seq.call(null,cols_27930);
var chunk__27750_27932 = null;
var count__27751_27933 = (0);
var i__27752_27934 = (0);
while(true){
if((i__27752_27934 < count__27751_27933)){
var vec__27759_27935 = cljs.core._nth.call(null,chunk__27750_27932,i__27752_27934);
var col_27936 = cljs.core.nth.call(null,vec__27759_27935,(0),null);
var infos_27937 = cljs.core.nth.call(null,vec__27759_27935,(1),null);
encode_cols.call(null,infos_27937,source_idx_27881,line_27929,col_27936);


var G__27938 = seq__27749_27931;
var G__27939 = chunk__27750_27932;
var G__27940 = count__27751_27933;
var G__27941 = (i__27752_27934 + (1));
seq__27749_27931 = G__27938;
chunk__27750_27932 = G__27939;
count__27751_27933 = G__27940;
i__27752_27934 = G__27941;
continue;
} else {
var temp__5804__auto___27942__$2 = cljs.core.seq.call(null,seq__27749_27931);
if(temp__5804__auto___27942__$2){
var seq__27749_27943__$1 = temp__5804__auto___27942__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27749_27943__$1)){
var c__5568__auto___27944 = cljs.core.chunk_first.call(null,seq__27749_27943__$1);
var G__27945 = cljs.core.chunk_rest.call(null,seq__27749_27943__$1);
var G__27946 = c__5568__auto___27944;
var G__27947 = cljs.core.count.call(null,c__5568__auto___27944);
var G__27948 = (0);
seq__27749_27931 = G__27945;
chunk__27750_27932 = G__27946;
count__27751_27933 = G__27947;
i__27752_27934 = G__27948;
continue;
} else {
var vec__27762_27949 = cljs.core.first.call(null,seq__27749_27943__$1);
var col_27950 = cljs.core.nth.call(null,vec__27762_27949,(0),null);
var infos_27951 = cljs.core.nth.call(null,vec__27762_27949,(1),null);
encode_cols.call(null,infos_27951,source_idx_27881,line_27929,col_27950);


var G__27952 = cljs.core.next.call(null,seq__27749_27943__$1);
var G__27953 = null;
var G__27954 = (0);
var G__27955 = (0);
seq__27749_27931 = G__27952;
chunk__27750_27932 = G__27953;
count__27751_27933 = G__27954;
i__27752_27934 = G__27955;
continue;
}
} else {
}
}
break;
}


var G__27956 = cljs.core.next.call(null,seq__27685_27922__$1);
var G__27957 = null;
var G__27958 = (0);
var G__27959 = (0);
seq__27685_27885 = G__27956;
chunk__27686_27886 = G__27957;
count__27687_27887 = G__27958;
i__27688_27888 = G__27959;
continue;
}
} else {
}
}
break;
}


var G__27960 = cljs.core.next.call(null,seq__27417_27874__$1);
var G__27961 = null;
var G__27962 = (0);
var G__27963 = (0);
seq__27417_27785 = G__27960;
chunk__27418_27786 = G__27961;
count__27419_27787 = G__27962;
i__27420_27788 = G__27963;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__27765 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__27410_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27410_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__27411_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__27411_SHARP_,/\//));
}));
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,(function (p1__27412_SHARP_){
return clojure.string.join.call(null,",",p1__27412_SHARP_);
}),cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__27766 = G__27765;
cljs.source_map.goog$module$goog$object.set.call(null,G__27766,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__27766;
} else {
return G__27765;
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
var vec__27964 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__27964,(0),null);
var col_map = cljs.core.nth.call(null,vec__27964,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__27967 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__27967,(0),null);
var infos = cljs.core.nth.call(null,vec__27967,(1),null);
var G__27972 = cljs.core.next.call(null,col_map_seq);
var G__27973 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__27967,col,infos,vec__27964,line,col_map){
return (function (v,p__27970){
var map__27971 = p__27970;
var map__27971__$1 = cljs.core.__destructure_map.call(null,map__27971);
var gline = cljs.core.get.call(null,map__27971__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__27971__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__27967,col,infos,vec__27964,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__27972;
new_cols = G__27973;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__27974 = cljs.core.next.call(null,line_map_seq);
var G__27975 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__27974;
new_lines = G__27975;
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
var seq__27976_28184 = cljs.core.seq.call(null,reverse_map);
var chunk__27977_28185 = null;
var count__27978_28186 = (0);
var i__27979_28187 = (0);
while(true){
if((i__27979_28187 < count__27978_28186)){
var vec__28082_28188 = cljs.core._nth.call(null,chunk__27977_28185,i__27979_28187);
var line_28189 = cljs.core.nth.call(null,vec__28082_28188,(0),null);
var columns_28190 = cljs.core.nth.call(null,vec__28082_28188,(1),null);
var seq__28085_28191 = cljs.core.seq.call(null,columns_28190);
var chunk__28086_28192 = null;
var count__28087_28193 = (0);
var i__28088_28194 = (0);
while(true){
if((i__28088_28194 < count__28087_28193)){
var vec__28111_28195 = cljs.core._nth.call(null,chunk__28086_28192,i__28088_28194);
var column_28196 = cljs.core.nth.call(null,vec__28111_28195,(0),null);
var column_info_28197 = cljs.core.nth.call(null,vec__28111_28195,(1),null);
var seq__28114_28198 = cljs.core.seq.call(null,column_info_28197);
var chunk__28115_28199 = null;
var count__28116_28200 = (0);
var i__28117_28201 = (0);
while(true){
if((i__28117_28201 < count__28116_28200)){
var map__28120_28202 = cljs.core._nth.call(null,chunk__28115_28199,i__28117_28201);
var map__28120_28203__$1 = cljs.core.__destructure_map.call(null,map__28120_28202);
var gline_28204 = cljs.core.get.call(null,map__28120_28203__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28205 = cljs.core.get.call(null,map__28120_28203__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28206 = cljs.core.get.call(null,map__28120_28203__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28204], null),cljs.core.fnil.call(null,((function (seq__28114_28198,chunk__28115_28199,count__28116_28200,i__28117_28201,seq__28085_28191,chunk__28086_28192,count__28087_28193,i__28088_28194,seq__27976_28184,chunk__27977_28185,count__27978_28186,i__27979_28187,map__28120_28202,map__28120_28203__$1,gline_28204,gcol_28205,name_28206,vec__28111_28195,column_28196,column_info_28197,vec__28082_28188,line_28189,columns_28190,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28205], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28189,new cljs.core.Keyword(null,"col","col",-1959363084),column_28196,new cljs.core.Keyword(null,"name","name",1843675177),name_28206], null));
});})(seq__28114_28198,chunk__28115_28199,count__28116_28200,i__28117_28201,seq__28085_28191,chunk__28086_28192,count__28087_28193,i__28088_28194,seq__27976_28184,chunk__27977_28185,count__27978_28186,i__27979_28187,map__28120_28202,map__28120_28203__$1,gline_28204,gcol_28205,name_28206,vec__28111_28195,column_28196,column_info_28197,vec__28082_28188,line_28189,columns_28190,inverted))
,cljs.core.sorted_map.call(null)));


var G__28207 = seq__28114_28198;
var G__28208 = chunk__28115_28199;
var G__28209 = count__28116_28200;
var G__28210 = (i__28117_28201 + (1));
seq__28114_28198 = G__28207;
chunk__28115_28199 = G__28208;
count__28116_28200 = G__28209;
i__28117_28201 = G__28210;
continue;
} else {
var temp__5804__auto___28211 = cljs.core.seq.call(null,seq__28114_28198);
if(temp__5804__auto___28211){
var seq__28114_28212__$1 = temp__5804__auto___28211;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28114_28212__$1)){
var c__5568__auto___28213 = cljs.core.chunk_first.call(null,seq__28114_28212__$1);
var G__28214 = cljs.core.chunk_rest.call(null,seq__28114_28212__$1);
var G__28215 = c__5568__auto___28213;
var G__28216 = cljs.core.count.call(null,c__5568__auto___28213);
var G__28217 = (0);
seq__28114_28198 = G__28214;
chunk__28115_28199 = G__28215;
count__28116_28200 = G__28216;
i__28117_28201 = G__28217;
continue;
} else {
var map__28121_28218 = cljs.core.first.call(null,seq__28114_28212__$1);
var map__28121_28219__$1 = cljs.core.__destructure_map.call(null,map__28121_28218);
var gline_28220 = cljs.core.get.call(null,map__28121_28219__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28221 = cljs.core.get.call(null,map__28121_28219__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28222 = cljs.core.get.call(null,map__28121_28219__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28220], null),cljs.core.fnil.call(null,((function (seq__28114_28198,chunk__28115_28199,count__28116_28200,i__28117_28201,seq__28085_28191,chunk__28086_28192,count__28087_28193,i__28088_28194,seq__27976_28184,chunk__27977_28185,count__27978_28186,i__27979_28187,map__28121_28218,map__28121_28219__$1,gline_28220,gcol_28221,name_28222,seq__28114_28212__$1,temp__5804__auto___28211,vec__28111_28195,column_28196,column_info_28197,vec__28082_28188,line_28189,columns_28190,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28221], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28189,new cljs.core.Keyword(null,"col","col",-1959363084),column_28196,new cljs.core.Keyword(null,"name","name",1843675177),name_28222], null));
});})(seq__28114_28198,chunk__28115_28199,count__28116_28200,i__28117_28201,seq__28085_28191,chunk__28086_28192,count__28087_28193,i__28088_28194,seq__27976_28184,chunk__27977_28185,count__27978_28186,i__27979_28187,map__28121_28218,map__28121_28219__$1,gline_28220,gcol_28221,name_28222,seq__28114_28212__$1,temp__5804__auto___28211,vec__28111_28195,column_28196,column_info_28197,vec__28082_28188,line_28189,columns_28190,inverted))
,cljs.core.sorted_map.call(null)));


var G__28223 = cljs.core.next.call(null,seq__28114_28212__$1);
var G__28224 = null;
var G__28225 = (0);
var G__28226 = (0);
seq__28114_28198 = G__28223;
chunk__28115_28199 = G__28224;
count__28116_28200 = G__28225;
i__28117_28201 = G__28226;
continue;
}
} else {
}
}
break;
}


var G__28227 = seq__28085_28191;
var G__28228 = chunk__28086_28192;
var G__28229 = count__28087_28193;
var G__28230 = (i__28088_28194 + (1));
seq__28085_28191 = G__28227;
chunk__28086_28192 = G__28228;
count__28087_28193 = G__28229;
i__28088_28194 = G__28230;
continue;
} else {
var temp__5804__auto___28231 = cljs.core.seq.call(null,seq__28085_28191);
if(temp__5804__auto___28231){
var seq__28085_28232__$1 = temp__5804__auto___28231;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28085_28232__$1)){
var c__5568__auto___28233 = cljs.core.chunk_first.call(null,seq__28085_28232__$1);
var G__28234 = cljs.core.chunk_rest.call(null,seq__28085_28232__$1);
var G__28235 = c__5568__auto___28233;
var G__28236 = cljs.core.count.call(null,c__5568__auto___28233);
var G__28237 = (0);
seq__28085_28191 = G__28234;
chunk__28086_28192 = G__28235;
count__28087_28193 = G__28236;
i__28088_28194 = G__28237;
continue;
} else {
var vec__28122_28238 = cljs.core.first.call(null,seq__28085_28232__$1);
var column_28239 = cljs.core.nth.call(null,vec__28122_28238,(0),null);
var column_info_28240 = cljs.core.nth.call(null,vec__28122_28238,(1),null);
var seq__28125_28241 = cljs.core.seq.call(null,column_info_28240);
var chunk__28126_28242 = null;
var count__28127_28243 = (0);
var i__28128_28244 = (0);
while(true){
if((i__28128_28244 < count__28127_28243)){
var map__28131_28245 = cljs.core._nth.call(null,chunk__28126_28242,i__28128_28244);
var map__28131_28246__$1 = cljs.core.__destructure_map.call(null,map__28131_28245);
var gline_28247 = cljs.core.get.call(null,map__28131_28246__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28248 = cljs.core.get.call(null,map__28131_28246__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28249 = cljs.core.get.call(null,map__28131_28246__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28247], null),cljs.core.fnil.call(null,((function (seq__28125_28241,chunk__28126_28242,count__28127_28243,i__28128_28244,seq__28085_28191,chunk__28086_28192,count__28087_28193,i__28088_28194,seq__27976_28184,chunk__27977_28185,count__27978_28186,i__27979_28187,map__28131_28245,map__28131_28246__$1,gline_28247,gcol_28248,name_28249,vec__28122_28238,column_28239,column_info_28240,seq__28085_28232__$1,temp__5804__auto___28231,vec__28082_28188,line_28189,columns_28190,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28248], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28189,new cljs.core.Keyword(null,"col","col",-1959363084),column_28239,new cljs.core.Keyword(null,"name","name",1843675177),name_28249], null));
});})(seq__28125_28241,chunk__28126_28242,count__28127_28243,i__28128_28244,seq__28085_28191,chunk__28086_28192,count__28087_28193,i__28088_28194,seq__27976_28184,chunk__27977_28185,count__27978_28186,i__27979_28187,map__28131_28245,map__28131_28246__$1,gline_28247,gcol_28248,name_28249,vec__28122_28238,column_28239,column_info_28240,seq__28085_28232__$1,temp__5804__auto___28231,vec__28082_28188,line_28189,columns_28190,inverted))
,cljs.core.sorted_map.call(null)));


var G__28250 = seq__28125_28241;
var G__28251 = chunk__28126_28242;
var G__28252 = count__28127_28243;
var G__28253 = (i__28128_28244 + (1));
seq__28125_28241 = G__28250;
chunk__28126_28242 = G__28251;
count__28127_28243 = G__28252;
i__28128_28244 = G__28253;
continue;
} else {
var temp__5804__auto___28254__$1 = cljs.core.seq.call(null,seq__28125_28241);
if(temp__5804__auto___28254__$1){
var seq__28125_28255__$1 = temp__5804__auto___28254__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28125_28255__$1)){
var c__5568__auto___28256 = cljs.core.chunk_first.call(null,seq__28125_28255__$1);
var G__28257 = cljs.core.chunk_rest.call(null,seq__28125_28255__$1);
var G__28258 = c__5568__auto___28256;
var G__28259 = cljs.core.count.call(null,c__5568__auto___28256);
var G__28260 = (0);
seq__28125_28241 = G__28257;
chunk__28126_28242 = G__28258;
count__28127_28243 = G__28259;
i__28128_28244 = G__28260;
continue;
} else {
var map__28132_28261 = cljs.core.first.call(null,seq__28125_28255__$1);
var map__28132_28262__$1 = cljs.core.__destructure_map.call(null,map__28132_28261);
var gline_28263 = cljs.core.get.call(null,map__28132_28262__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28264 = cljs.core.get.call(null,map__28132_28262__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28265 = cljs.core.get.call(null,map__28132_28262__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28263], null),cljs.core.fnil.call(null,((function (seq__28125_28241,chunk__28126_28242,count__28127_28243,i__28128_28244,seq__28085_28191,chunk__28086_28192,count__28087_28193,i__28088_28194,seq__27976_28184,chunk__27977_28185,count__27978_28186,i__27979_28187,map__28132_28261,map__28132_28262__$1,gline_28263,gcol_28264,name_28265,seq__28125_28255__$1,temp__5804__auto___28254__$1,vec__28122_28238,column_28239,column_info_28240,seq__28085_28232__$1,temp__5804__auto___28231,vec__28082_28188,line_28189,columns_28190,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28264], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28189,new cljs.core.Keyword(null,"col","col",-1959363084),column_28239,new cljs.core.Keyword(null,"name","name",1843675177),name_28265], null));
});})(seq__28125_28241,chunk__28126_28242,count__28127_28243,i__28128_28244,seq__28085_28191,chunk__28086_28192,count__28087_28193,i__28088_28194,seq__27976_28184,chunk__27977_28185,count__27978_28186,i__27979_28187,map__28132_28261,map__28132_28262__$1,gline_28263,gcol_28264,name_28265,seq__28125_28255__$1,temp__5804__auto___28254__$1,vec__28122_28238,column_28239,column_info_28240,seq__28085_28232__$1,temp__5804__auto___28231,vec__28082_28188,line_28189,columns_28190,inverted))
,cljs.core.sorted_map.call(null)));


var G__28266 = cljs.core.next.call(null,seq__28125_28255__$1);
var G__28267 = null;
var G__28268 = (0);
var G__28269 = (0);
seq__28125_28241 = G__28266;
chunk__28126_28242 = G__28267;
count__28127_28243 = G__28268;
i__28128_28244 = G__28269;
continue;
}
} else {
}
}
break;
}


var G__28270 = cljs.core.next.call(null,seq__28085_28232__$1);
var G__28271 = null;
var G__28272 = (0);
var G__28273 = (0);
seq__28085_28191 = G__28270;
chunk__28086_28192 = G__28271;
count__28087_28193 = G__28272;
i__28088_28194 = G__28273;
continue;
}
} else {
}
}
break;
}


var G__28274 = seq__27976_28184;
var G__28275 = chunk__27977_28185;
var G__28276 = count__27978_28186;
var G__28277 = (i__27979_28187 + (1));
seq__27976_28184 = G__28274;
chunk__27977_28185 = G__28275;
count__27978_28186 = G__28276;
i__27979_28187 = G__28277;
continue;
} else {
var temp__5804__auto___28278 = cljs.core.seq.call(null,seq__27976_28184);
if(temp__5804__auto___28278){
var seq__27976_28279__$1 = temp__5804__auto___28278;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27976_28279__$1)){
var c__5568__auto___28280 = cljs.core.chunk_first.call(null,seq__27976_28279__$1);
var G__28281 = cljs.core.chunk_rest.call(null,seq__27976_28279__$1);
var G__28282 = c__5568__auto___28280;
var G__28283 = cljs.core.count.call(null,c__5568__auto___28280);
var G__28284 = (0);
seq__27976_28184 = G__28281;
chunk__27977_28185 = G__28282;
count__27978_28186 = G__28283;
i__27979_28187 = G__28284;
continue;
} else {
var vec__28133_28285 = cljs.core.first.call(null,seq__27976_28279__$1);
var line_28286 = cljs.core.nth.call(null,vec__28133_28285,(0),null);
var columns_28287 = cljs.core.nth.call(null,vec__28133_28285,(1),null);
var seq__28136_28288 = cljs.core.seq.call(null,columns_28287);
var chunk__28137_28289 = null;
var count__28138_28290 = (0);
var i__28139_28291 = (0);
while(true){
if((i__28139_28291 < count__28138_28290)){
var vec__28162_28292 = cljs.core._nth.call(null,chunk__28137_28289,i__28139_28291);
var column_28293 = cljs.core.nth.call(null,vec__28162_28292,(0),null);
var column_info_28294 = cljs.core.nth.call(null,vec__28162_28292,(1),null);
var seq__28165_28295 = cljs.core.seq.call(null,column_info_28294);
var chunk__28166_28296 = null;
var count__28167_28297 = (0);
var i__28168_28298 = (0);
while(true){
if((i__28168_28298 < count__28167_28297)){
var map__28171_28299 = cljs.core._nth.call(null,chunk__28166_28296,i__28168_28298);
var map__28171_28300__$1 = cljs.core.__destructure_map.call(null,map__28171_28299);
var gline_28301 = cljs.core.get.call(null,map__28171_28300__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28302 = cljs.core.get.call(null,map__28171_28300__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28303 = cljs.core.get.call(null,map__28171_28300__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28301], null),cljs.core.fnil.call(null,((function (seq__28165_28295,chunk__28166_28296,count__28167_28297,i__28168_28298,seq__28136_28288,chunk__28137_28289,count__28138_28290,i__28139_28291,seq__27976_28184,chunk__27977_28185,count__27978_28186,i__27979_28187,map__28171_28299,map__28171_28300__$1,gline_28301,gcol_28302,name_28303,vec__28162_28292,column_28293,column_info_28294,vec__28133_28285,line_28286,columns_28287,seq__27976_28279__$1,temp__5804__auto___28278,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28302], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28286,new cljs.core.Keyword(null,"col","col",-1959363084),column_28293,new cljs.core.Keyword(null,"name","name",1843675177),name_28303], null));
});})(seq__28165_28295,chunk__28166_28296,count__28167_28297,i__28168_28298,seq__28136_28288,chunk__28137_28289,count__28138_28290,i__28139_28291,seq__27976_28184,chunk__27977_28185,count__27978_28186,i__27979_28187,map__28171_28299,map__28171_28300__$1,gline_28301,gcol_28302,name_28303,vec__28162_28292,column_28293,column_info_28294,vec__28133_28285,line_28286,columns_28287,seq__27976_28279__$1,temp__5804__auto___28278,inverted))
,cljs.core.sorted_map.call(null)));


var G__28304 = seq__28165_28295;
var G__28305 = chunk__28166_28296;
var G__28306 = count__28167_28297;
var G__28307 = (i__28168_28298 + (1));
seq__28165_28295 = G__28304;
chunk__28166_28296 = G__28305;
count__28167_28297 = G__28306;
i__28168_28298 = G__28307;
continue;
} else {
var temp__5804__auto___28308__$1 = cljs.core.seq.call(null,seq__28165_28295);
if(temp__5804__auto___28308__$1){
var seq__28165_28309__$1 = temp__5804__auto___28308__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28165_28309__$1)){
var c__5568__auto___28310 = cljs.core.chunk_first.call(null,seq__28165_28309__$1);
var G__28311 = cljs.core.chunk_rest.call(null,seq__28165_28309__$1);
var G__28312 = c__5568__auto___28310;
var G__28313 = cljs.core.count.call(null,c__5568__auto___28310);
var G__28314 = (0);
seq__28165_28295 = G__28311;
chunk__28166_28296 = G__28312;
count__28167_28297 = G__28313;
i__28168_28298 = G__28314;
continue;
} else {
var map__28172_28315 = cljs.core.first.call(null,seq__28165_28309__$1);
var map__28172_28316__$1 = cljs.core.__destructure_map.call(null,map__28172_28315);
var gline_28317 = cljs.core.get.call(null,map__28172_28316__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28318 = cljs.core.get.call(null,map__28172_28316__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28319 = cljs.core.get.call(null,map__28172_28316__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28317], null),cljs.core.fnil.call(null,((function (seq__28165_28295,chunk__28166_28296,count__28167_28297,i__28168_28298,seq__28136_28288,chunk__28137_28289,count__28138_28290,i__28139_28291,seq__27976_28184,chunk__27977_28185,count__27978_28186,i__27979_28187,map__28172_28315,map__28172_28316__$1,gline_28317,gcol_28318,name_28319,seq__28165_28309__$1,temp__5804__auto___28308__$1,vec__28162_28292,column_28293,column_info_28294,vec__28133_28285,line_28286,columns_28287,seq__27976_28279__$1,temp__5804__auto___28278,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28318], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28286,new cljs.core.Keyword(null,"col","col",-1959363084),column_28293,new cljs.core.Keyword(null,"name","name",1843675177),name_28319], null));
});})(seq__28165_28295,chunk__28166_28296,count__28167_28297,i__28168_28298,seq__28136_28288,chunk__28137_28289,count__28138_28290,i__28139_28291,seq__27976_28184,chunk__27977_28185,count__27978_28186,i__27979_28187,map__28172_28315,map__28172_28316__$1,gline_28317,gcol_28318,name_28319,seq__28165_28309__$1,temp__5804__auto___28308__$1,vec__28162_28292,column_28293,column_info_28294,vec__28133_28285,line_28286,columns_28287,seq__27976_28279__$1,temp__5804__auto___28278,inverted))
,cljs.core.sorted_map.call(null)));


var G__28320 = cljs.core.next.call(null,seq__28165_28309__$1);
var G__28321 = null;
var G__28322 = (0);
var G__28323 = (0);
seq__28165_28295 = G__28320;
chunk__28166_28296 = G__28321;
count__28167_28297 = G__28322;
i__28168_28298 = G__28323;
continue;
}
} else {
}
}
break;
}


var G__28324 = seq__28136_28288;
var G__28325 = chunk__28137_28289;
var G__28326 = count__28138_28290;
var G__28327 = (i__28139_28291 + (1));
seq__28136_28288 = G__28324;
chunk__28137_28289 = G__28325;
count__28138_28290 = G__28326;
i__28139_28291 = G__28327;
continue;
} else {
var temp__5804__auto___28328__$1 = cljs.core.seq.call(null,seq__28136_28288);
if(temp__5804__auto___28328__$1){
var seq__28136_28329__$1 = temp__5804__auto___28328__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28136_28329__$1)){
var c__5568__auto___28330 = cljs.core.chunk_first.call(null,seq__28136_28329__$1);
var G__28331 = cljs.core.chunk_rest.call(null,seq__28136_28329__$1);
var G__28332 = c__5568__auto___28330;
var G__28333 = cljs.core.count.call(null,c__5568__auto___28330);
var G__28334 = (0);
seq__28136_28288 = G__28331;
chunk__28137_28289 = G__28332;
count__28138_28290 = G__28333;
i__28139_28291 = G__28334;
continue;
} else {
var vec__28173_28335 = cljs.core.first.call(null,seq__28136_28329__$1);
var column_28336 = cljs.core.nth.call(null,vec__28173_28335,(0),null);
var column_info_28337 = cljs.core.nth.call(null,vec__28173_28335,(1),null);
var seq__28176_28338 = cljs.core.seq.call(null,column_info_28337);
var chunk__28177_28339 = null;
var count__28178_28340 = (0);
var i__28179_28341 = (0);
while(true){
if((i__28179_28341 < count__28178_28340)){
var map__28182_28342 = cljs.core._nth.call(null,chunk__28177_28339,i__28179_28341);
var map__28182_28343__$1 = cljs.core.__destructure_map.call(null,map__28182_28342);
var gline_28344 = cljs.core.get.call(null,map__28182_28343__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28345 = cljs.core.get.call(null,map__28182_28343__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28346 = cljs.core.get.call(null,map__28182_28343__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28344], null),cljs.core.fnil.call(null,((function (seq__28176_28338,chunk__28177_28339,count__28178_28340,i__28179_28341,seq__28136_28288,chunk__28137_28289,count__28138_28290,i__28139_28291,seq__27976_28184,chunk__27977_28185,count__27978_28186,i__27979_28187,map__28182_28342,map__28182_28343__$1,gline_28344,gcol_28345,name_28346,vec__28173_28335,column_28336,column_info_28337,seq__28136_28329__$1,temp__5804__auto___28328__$1,vec__28133_28285,line_28286,columns_28287,seq__27976_28279__$1,temp__5804__auto___28278,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28345], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28286,new cljs.core.Keyword(null,"col","col",-1959363084),column_28336,new cljs.core.Keyword(null,"name","name",1843675177),name_28346], null));
});})(seq__28176_28338,chunk__28177_28339,count__28178_28340,i__28179_28341,seq__28136_28288,chunk__28137_28289,count__28138_28290,i__28139_28291,seq__27976_28184,chunk__27977_28185,count__27978_28186,i__27979_28187,map__28182_28342,map__28182_28343__$1,gline_28344,gcol_28345,name_28346,vec__28173_28335,column_28336,column_info_28337,seq__28136_28329__$1,temp__5804__auto___28328__$1,vec__28133_28285,line_28286,columns_28287,seq__27976_28279__$1,temp__5804__auto___28278,inverted))
,cljs.core.sorted_map.call(null)));


var G__28347 = seq__28176_28338;
var G__28348 = chunk__28177_28339;
var G__28349 = count__28178_28340;
var G__28350 = (i__28179_28341 + (1));
seq__28176_28338 = G__28347;
chunk__28177_28339 = G__28348;
count__28178_28340 = G__28349;
i__28179_28341 = G__28350;
continue;
} else {
var temp__5804__auto___28351__$2 = cljs.core.seq.call(null,seq__28176_28338);
if(temp__5804__auto___28351__$2){
var seq__28176_28352__$1 = temp__5804__auto___28351__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28176_28352__$1)){
var c__5568__auto___28353 = cljs.core.chunk_first.call(null,seq__28176_28352__$1);
var G__28354 = cljs.core.chunk_rest.call(null,seq__28176_28352__$1);
var G__28355 = c__5568__auto___28353;
var G__28356 = cljs.core.count.call(null,c__5568__auto___28353);
var G__28357 = (0);
seq__28176_28338 = G__28354;
chunk__28177_28339 = G__28355;
count__28178_28340 = G__28356;
i__28179_28341 = G__28357;
continue;
} else {
var map__28183_28358 = cljs.core.first.call(null,seq__28176_28352__$1);
var map__28183_28359__$1 = cljs.core.__destructure_map.call(null,map__28183_28358);
var gline_28360 = cljs.core.get.call(null,map__28183_28359__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28361 = cljs.core.get.call(null,map__28183_28359__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28362 = cljs.core.get.call(null,map__28183_28359__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28360], null),cljs.core.fnil.call(null,((function (seq__28176_28338,chunk__28177_28339,count__28178_28340,i__28179_28341,seq__28136_28288,chunk__28137_28289,count__28138_28290,i__28139_28291,seq__27976_28184,chunk__27977_28185,count__27978_28186,i__27979_28187,map__28183_28358,map__28183_28359__$1,gline_28360,gcol_28361,name_28362,seq__28176_28352__$1,temp__5804__auto___28351__$2,vec__28173_28335,column_28336,column_info_28337,seq__28136_28329__$1,temp__5804__auto___28328__$1,vec__28133_28285,line_28286,columns_28287,seq__27976_28279__$1,temp__5804__auto___28278,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28361], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28286,new cljs.core.Keyword(null,"col","col",-1959363084),column_28336,new cljs.core.Keyword(null,"name","name",1843675177),name_28362], null));
});})(seq__28176_28338,chunk__28177_28339,count__28178_28340,i__28179_28341,seq__28136_28288,chunk__28137_28289,count__28138_28290,i__28139_28291,seq__27976_28184,chunk__27977_28185,count__27978_28186,i__27979_28187,map__28183_28358,map__28183_28359__$1,gline_28360,gcol_28361,name_28362,seq__28176_28352__$1,temp__5804__auto___28351__$2,vec__28173_28335,column_28336,column_info_28337,seq__28136_28329__$1,temp__5804__auto___28328__$1,vec__28133_28285,line_28286,columns_28287,seq__27976_28279__$1,temp__5804__auto___28278,inverted))
,cljs.core.sorted_map.call(null)));


var G__28363 = cljs.core.next.call(null,seq__28176_28352__$1);
var G__28364 = null;
var G__28365 = (0);
var G__28366 = (0);
seq__28176_28338 = G__28363;
chunk__28177_28339 = G__28364;
count__28178_28340 = G__28365;
i__28179_28341 = G__28366;
continue;
}
} else {
}
}
break;
}


var G__28367 = cljs.core.next.call(null,seq__28136_28329__$1);
var G__28368 = null;
var G__28369 = (0);
var G__28370 = (0);
seq__28136_28288 = G__28367;
chunk__28137_28289 = G__28368;
count__28138_28290 = G__28369;
i__28139_28291 = G__28370;
continue;
}
} else {
}
}
break;
}


var G__28371 = cljs.core.next.call(null,seq__27976_28279__$1);
var G__28372 = null;
var G__28373 = (0);
var G__28374 = (0);
seq__27976_28184 = G__28371;
chunk__27977_28185 = G__28372;
count__27978_28186 = G__28373;
i__27979_28187 = G__28374;
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
