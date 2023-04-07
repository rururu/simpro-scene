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
return cljs.core.reduce.call(null,(function (m,p__33527){
var vec__33528 = p__33527;
var i = cljs.core.nth.call(null,vec__33528,(0),null);
var v = cljs.core.nth.call(null,vec__33528,(1),null);
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
var vec__33531 = seg;
var gcol = cljs.core.nth.call(null,vec__33531,(0),null);
var source = cljs.core.nth.call(null,vec__33531,(1),null);
var line = cljs.core.nth.call(null,vec__33531,(2),null);
var col = cljs.core.nth.call(null,vec__33531,(3),null);
var name = cljs.core.nth.call(null,vec__33531,(4),null);
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
var vec__33534 = seg;
var gcol = cljs.core.nth.call(null,vec__33534,(0),null);
var source = cljs.core.nth.call(null,vec__33534,(1),null);
var line = cljs.core.nth.call(null,vec__33534,(2),null);
var col = cljs.core.nth.call(null,vec__33534,(3),null);
var name = cljs.core.nth.call(null,vec__33534,(4),null);
var vec__33537 = relseg;
var rgcol = cljs.core.nth.call(null,vec__33537,(0),null);
var rsource = cljs.core.nth.call(null,vec__33537,(1),null);
var rline = cljs.core.nth.call(null,vec__33537,(2),null);
var rcol = cljs.core.nth.call(null,vec__33537,(3),null);
var rname = cljs.core.nth.call(null,vec__33537,(4),null);
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
var map__33540 = segmap;
var map__33540__$1 = cljs.core.__destructure_map.call(null,map__33540);
var gcol = cljs.core.get.call(null,map__33540__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__33540__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__33540__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__33540__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__33540__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var G__33542 = arguments.length;
switch (G__33542) {
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
var vec__33546 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__33550 = cljs.core.next.call(null,segs__$1);
var G__33551 = nrelseg;
var G__33552 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__33550;
relseg__$1 = G__33551;
result__$1 = G__33552;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__33546,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__33546,(1),null);
var G__33553 = (gline + (1));
var G__33554 = cljs.core.next.call(null,lines__$1);
var G__33555 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__33556 = result__$1;
gline = G__33553;
lines__$1 = G__33554;
relseg = G__33555;
result = G__33556;
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
var map__33558 = segmap;
var map__33558__$1 = cljs.core.__destructure_map.call(null,map__33558);
var gcol = cljs.core.get.call(null,map__33558__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__33558__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__33558__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__33558__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__33558__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,(function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,(function (p1__33557_SHARP_){
return cljs.core.conj.call(null,p1__33557_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__33560 = arguments.length;
switch (G__33560) {
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
var vec__33564 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__33568 = cljs.core.next.call(null,segs__$1);
var G__33569 = nrelseg;
var G__33570 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__33568;
relseg__$1 = G__33569;
result__$1 = G__33570;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__33564,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__33564,(1),null);
var G__33571 = (gline + (1));
var G__33572 = cljs.core.next.call(null,lines__$1);
var G__33573 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__33574 = result__$1;
gline = G__33571;
lines__$1 = G__33572;
relseg = G__33573;
result = G__33574;
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
cljs.core.swap_BANG_.call(null,relseg,(function (p__33575){
var vec__33576 = p__33575;
var _ = cljs.core.nth.call(null,vec__33576,(0),null);
var source = cljs.core.nth.call(null,vec__33576,(1),null);
var line = cljs.core.nth.call(null,vec__33576,(2),null);
var col = cljs.core.nth.call(null,vec__33576,(3),null);
var name = cljs.core.nth.call(null,vec__33576,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,(function (cols__$1,p__33579){
var vec__33580 = p__33579;
var gcol = cljs.core.nth.call(null,vec__33580,(0),null);
var sidx = cljs.core.nth.call(null,vec__33580,(1),null);
var line = cljs.core.nth.call(null,vec__33580,(2),null);
var col = cljs.core.nth.call(null,vec__33580,(3),null);
var name = cljs.core.nth.call(null,vec__33580,(4),null);
var seg = vec__33580;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,(function (p__33583){
var vec__33584 = p__33583;
var _ = cljs.core.nth.call(null,vec__33584,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__33584,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__33584,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__33584,(3),null);
var lname = cljs.core.nth.call(null,vec__33584,(4),null);
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
var seq__33590 = cljs.core.seq.call(null,infos);
var chunk__33591 = null;
var count__33592 = (0);
var i__33593 = (0);
while(true){
if((i__33593 < count__33592)){
var info = cljs.core._nth.call(null,chunk__33591,i__33593);
var segv_33944 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_33945 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_33946 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_33945 > (lc_33946 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__33590,chunk__33591,count__33592,i__33593,segv_33944,gline_33945,lc_33946,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_33945 - (lc_33946 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_33944], null));
});})(seq__33590,chunk__33591,count__33592,i__33593,segv_33944,gline_33945,lc_33946,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__33590,chunk__33591,count__33592,i__33593,segv_33944,gline_33945,lc_33946,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_33945], null),cljs.core.conj,segv_33944);
});})(seq__33590,chunk__33591,count__33592,i__33593,segv_33944,gline_33945,lc_33946,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__33947 = seq__33590;
var G__33948 = chunk__33591;
var G__33949 = count__33592;
var G__33950 = (i__33593 + (1));
seq__33590 = G__33947;
chunk__33591 = G__33948;
count__33592 = G__33949;
i__33593 = G__33950;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__33590);
if(temp__5804__auto__){
var seq__33590__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33590__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__33590__$1);
var G__33951 = cljs.core.chunk_rest.call(null,seq__33590__$1);
var G__33952 = c__5568__auto__;
var G__33953 = cljs.core.count.call(null,c__5568__auto__);
var G__33954 = (0);
seq__33590 = G__33951;
chunk__33591 = G__33952;
count__33592 = G__33953;
i__33593 = G__33954;
continue;
} else {
var info = cljs.core.first.call(null,seq__33590__$1);
var segv_33955 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_33956 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_33957 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_33956 > (lc_33957 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__33590,chunk__33591,count__33592,i__33593,segv_33955,gline_33956,lc_33957,info,seq__33590__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_33956 - (lc_33957 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_33955], null));
});})(seq__33590,chunk__33591,count__33592,i__33593,segv_33955,gline_33956,lc_33957,info,seq__33590__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__33590,chunk__33591,count__33592,i__33593,segv_33955,gline_33956,lc_33957,info,seq__33590__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_33956], null),cljs.core.conj,segv_33955);
});})(seq__33590,chunk__33591,count__33592,i__33593,segv_33955,gline_33956,lc_33957,info,seq__33590__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__33958 = cljs.core.next.call(null,seq__33590__$1);
var G__33959 = null;
var G__33960 = (0);
var G__33961 = (0);
seq__33590 = G__33958;
chunk__33591 = G__33959;
count__33592 = G__33960;
i__33593 = G__33961;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__33594_33962 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__33595_33963 = null;
var count__33596_33964 = (0);
var i__33597_33965 = (0);
while(true){
if((i__33597_33965 < count__33596_33964)){
var vec__33770_33966 = cljs.core._nth.call(null,chunk__33595_33963,i__33597_33965);
var source_idx_33967 = cljs.core.nth.call(null,vec__33770_33966,(0),null);
var vec__33773_33968 = cljs.core.nth.call(null,vec__33770_33966,(1),null);
var __33969 = cljs.core.nth.call(null,vec__33773_33968,(0),null);
var lines_33970__$1 = cljs.core.nth.call(null,vec__33773_33968,(1),null);
var seq__33776_33971 = cljs.core.seq.call(null,lines_33970__$1);
var chunk__33777_33972 = null;
var count__33778_33973 = (0);
var i__33779_33974 = (0);
while(true){
if((i__33779_33974 < count__33778_33973)){
var vec__33818_33975 = cljs.core._nth.call(null,chunk__33777_33972,i__33779_33974);
var line_33976 = cljs.core.nth.call(null,vec__33818_33975,(0),null);
var cols_33977 = cljs.core.nth.call(null,vec__33818_33975,(1),null);
var seq__33821_33978 = cljs.core.seq.call(null,cols_33977);
var chunk__33822_33979 = null;
var count__33823_33980 = (0);
var i__33824_33981 = (0);
while(true){
if((i__33824_33981 < count__33823_33980)){
var vec__33831_33982 = cljs.core._nth.call(null,chunk__33822_33979,i__33824_33981);
var col_33983 = cljs.core.nth.call(null,vec__33831_33982,(0),null);
var infos_33984 = cljs.core.nth.call(null,vec__33831_33982,(1),null);
encode_cols.call(null,infos_33984,source_idx_33967,line_33976,col_33983);


var G__33985 = seq__33821_33978;
var G__33986 = chunk__33822_33979;
var G__33987 = count__33823_33980;
var G__33988 = (i__33824_33981 + (1));
seq__33821_33978 = G__33985;
chunk__33822_33979 = G__33986;
count__33823_33980 = G__33987;
i__33824_33981 = G__33988;
continue;
} else {
var temp__5804__auto___33989 = cljs.core.seq.call(null,seq__33821_33978);
if(temp__5804__auto___33989){
var seq__33821_33990__$1 = temp__5804__auto___33989;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33821_33990__$1)){
var c__5568__auto___33991 = cljs.core.chunk_first.call(null,seq__33821_33990__$1);
var G__33992 = cljs.core.chunk_rest.call(null,seq__33821_33990__$1);
var G__33993 = c__5568__auto___33991;
var G__33994 = cljs.core.count.call(null,c__5568__auto___33991);
var G__33995 = (0);
seq__33821_33978 = G__33992;
chunk__33822_33979 = G__33993;
count__33823_33980 = G__33994;
i__33824_33981 = G__33995;
continue;
} else {
var vec__33834_33996 = cljs.core.first.call(null,seq__33821_33990__$1);
var col_33997 = cljs.core.nth.call(null,vec__33834_33996,(0),null);
var infos_33998 = cljs.core.nth.call(null,vec__33834_33996,(1),null);
encode_cols.call(null,infos_33998,source_idx_33967,line_33976,col_33997);


var G__33999 = cljs.core.next.call(null,seq__33821_33990__$1);
var G__34000 = null;
var G__34001 = (0);
var G__34002 = (0);
seq__33821_33978 = G__33999;
chunk__33822_33979 = G__34000;
count__33823_33980 = G__34001;
i__33824_33981 = G__34002;
continue;
}
} else {
}
}
break;
}


var G__34003 = seq__33776_33971;
var G__34004 = chunk__33777_33972;
var G__34005 = count__33778_33973;
var G__34006 = (i__33779_33974 + (1));
seq__33776_33971 = G__34003;
chunk__33777_33972 = G__34004;
count__33778_33973 = G__34005;
i__33779_33974 = G__34006;
continue;
} else {
var temp__5804__auto___34007 = cljs.core.seq.call(null,seq__33776_33971);
if(temp__5804__auto___34007){
var seq__33776_34008__$1 = temp__5804__auto___34007;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33776_34008__$1)){
var c__5568__auto___34009 = cljs.core.chunk_first.call(null,seq__33776_34008__$1);
var G__34010 = cljs.core.chunk_rest.call(null,seq__33776_34008__$1);
var G__34011 = c__5568__auto___34009;
var G__34012 = cljs.core.count.call(null,c__5568__auto___34009);
var G__34013 = (0);
seq__33776_33971 = G__34010;
chunk__33777_33972 = G__34011;
count__33778_33973 = G__34012;
i__33779_33974 = G__34013;
continue;
} else {
var vec__33837_34014 = cljs.core.first.call(null,seq__33776_34008__$1);
var line_34015 = cljs.core.nth.call(null,vec__33837_34014,(0),null);
var cols_34016 = cljs.core.nth.call(null,vec__33837_34014,(1),null);
var seq__33840_34017 = cljs.core.seq.call(null,cols_34016);
var chunk__33841_34018 = null;
var count__33842_34019 = (0);
var i__33843_34020 = (0);
while(true){
if((i__33843_34020 < count__33842_34019)){
var vec__33850_34021 = cljs.core._nth.call(null,chunk__33841_34018,i__33843_34020);
var col_34022 = cljs.core.nth.call(null,vec__33850_34021,(0),null);
var infos_34023 = cljs.core.nth.call(null,vec__33850_34021,(1),null);
encode_cols.call(null,infos_34023,source_idx_33967,line_34015,col_34022);


var G__34024 = seq__33840_34017;
var G__34025 = chunk__33841_34018;
var G__34026 = count__33842_34019;
var G__34027 = (i__33843_34020 + (1));
seq__33840_34017 = G__34024;
chunk__33841_34018 = G__34025;
count__33842_34019 = G__34026;
i__33843_34020 = G__34027;
continue;
} else {
var temp__5804__auto___34028__$1 = cljs.core.seq.call(null,seq__33840_34017);
if(temp__5804__auto___34028__$1){
var seq__33840_34029__$1 = temp__5804__auto___34028__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33840_34029__$1)){
var c__5568__auto___34030 = cljs.core.chunk_first.call(null,seq__33840_34029__$1);
var G__34031 = cljs.core.chunk_rest.call(null,seq__33840_34029__$1);
var G__34032 = c__5568__auto___34030;
var G__34033 = cljs.core.count.call(null,c__5568__auto___34030);
var G__34034 = (0);
seq__33840_34017 = G__34031;
chunk__33841_34018 = G__34032;
count__33842_34019 = G__34033;
i__33843_34020 = G__34034;
continue;
} else {
var vec__33853_34035 = cljs.core.first.call(null,seq__33840_34029__$1);
var col_34036 = cljs.core.nth.call(null,vec__33853_34035,(0),null);
var infos_34037 = cljs.core.nth.call(null,vec__33853_34035,(1),null);
encode_cols.call(null,infos_34037,source_idx_33967,line_34015,col_34036);


var G__34038 = cljs.core.next.call(null,seq__33840_34029__$1);
var G__34039 = null;
var G__34040 = (0);
var G__34041 = (0);
seq__33840_34017 = G__34038;
chunk__33841_34018 = G__34039;
count__33842_34019 = G__34040;
i__33843_34020 = G__34041;
continue;
}
} else {
}
}
break;
}


var G__34042 = cljs.core.next.call(null,seq__33776_34008__$1);
var G__34043 = null;
var G__34044 = (0);
var G__34045 = (0);
seq__33776_33971 = G__34042;
chunk__33777_33972 = G__34043;
count__33778_33973 = G__34044;
i__33779_33974 = G__34045;
continue;
}
} else {
}
}
break;
}


var G__34046 = seq__33594_33962;
var G__34047 = chunk__33595_33963;
var G__34048 = count__33596_33964;
var G__34049 = (i__33597_33965 + (1));
seq__33594_33962 = G__34046;
chunk__33595_33963 = G__34047;
count__33596_33964 = G__34048;
i__33597_33965 = G__34049;
continue;
} else {
var temp__5804__auto___34050 = cljs.core.seq.call(null,seq__33594_33962);
if(temp__5804__auto___34050){
var seq__33594_34051__$1 = temp__5804__auto___34050;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33594_34051__$1)){
var c__5568__auto___34052 = cljs.core.chunk_first.call(null,seq__33594_34051__$1);
var G__34053 = cljs.core.chunk_rest.call(null,seq__33594_34051__$1);
var G__34054 = c__5568__auto___34052;
var G__34055 = cljs.core.count.call(null,c__5568__auto___34052);
var G__34056 = (0);
seq__33594_33962 = G__34053;
chunk__33595_33963 = G__34054;
count__33596_33964 = G__34055;
i__33597_33965 = G__34056;
continue;
} else {
var vec__33856_34057 = cljs.core.first.call(null,seq__33594_34051__$1);
var source_idx_34058 = cljs.core.nth.call(null,vec__33856_34057,(0),null);
var vec__33859_34059 = cljs.core.nth.call(null,vec__33856_34057,(1),null);
var __34060 = cljs.core.nth.call(null,vec__33859_34059,(0),null);
var lines_34061__$1 = cljs.core.nth.call(null,vec__33859_34059,(1),null);
var seq__33862_34062 = cljs.core.seq.call(null,lines_34061__$1);
var chunk__33863_34063 = null;
var count__33864_34064 = (0);
var i__33865_34065 = (0);
while(true){
if((i__33865_34065 < count__33864_34064)){
var vec__33904_34066 = cljs.core._nth.call(null,chunk__33863_34063,i__33865_34065);
var line_34067 = cljs.core.nth.call(null,vec__33904_34066,(0),null);
var cols_34068 = cljs.core.nth.call(null,vec__33904_34066,(1),null);
var seq__33907_34069 = cljs.core.seq.call(null,cols_34068);
var chunk__33908_34070 = null;
var count__33909_34071 = (0);
var i__33910_34072 = (0);
while(true){
if((i__33910_34072 < count__33909_34071)){
var vec__33917_34073 = cljs.core._nth.call(null,chunk__33908_34070,i__33910_34072);
var col_34074 = cljs.core.nth.call(null,vec__33917_34073,(0),null);
var infos_34075 = cljs.core.nth.call(null,vec__33917_34073,(1),null);
encode_cols.call(null,infos_34075,source_idx_34058,line_34067,col_34074);


var G__34076 = seq__33907_34069;
var G__34077 = chunk__33908_34070;
var G__34078 = count__33909_34071;
var G__34079 = (i__33910_34072 + (1));
seq__33907_34069 = G__34076;
chunk__33908_34070 = G__34077;
count__33909_34071 = G__34078;
i__33910_34072 = G__34079;
continue;
} else {
var temp__5804__auto___34080__$1 = cljs.core.seq.call(null,seq__33907_34069);
if(temp__5804__auto___34080__$1){
var seq__33907_34081__$1 = temp__5804__auto___34080__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33907_34081__$1)){
var c__5568__auto___34082 = cljs.core.chunk_first.call(null,seq__33907_34081__$1);
var G__34083 = cljs.core.chunk_rest.call(null,seq__33907_34081__$1);
var G__34084 = c__5568__auto___34082;
var G__34085 = cljs.core.count.call(null,c__5568__auto___34082);
var G__34086 = (0);
seq__33907_34069 = G__34083;
chunk__33908_34070 = G__34084;
count__33909_34071 = G__34085;
i__33910_34072 = G__34086;
continue;
} else {
var vec__33920_34087 = cljs.core.first.call(null,seq__33907_34081__$1);
var col_34088 = cljs.core.nth.call(null,vec__33920_34087,(0),null);
var infos_34089 = cljs.core.nth.call(null,vec__33920_34087,(1),null);
encode_cols.call(null,infos_34089,source_idx_34058,line_34067,col_34088);


var G__34090 = cljs.core.next.call(null,seq__33907_34081__$1);
var G__34091 = null;
var G__34092 = (0);
var G__34093 = (0);
seq__33907_34069 = G__34090;
chunk__33908_34070 = G__34091;
count__33909_34071 = G__34092;
i__33910_34072 = G__34093;
continue;
}
} else {
}
}
break;
}


var G__34094 = seq__33862_34062;
var G__34095 = chunk__33863_34063;
var G__34096 = count__33864_34064;
var G__34097 = (i__33865_34065 + (1));
seq__33862_34062 = G__34094;
chunk__33863_34063 = G__34095;
count__33864_34064 = G__34096;
i__33865_34065 = G__34097;
continue;
} else {
var temp__5804__auto___34098__$1 = cljs.core.seq.call(null,seq__33862_34062);
if(temp__5804__auto___34098__$1){
var seq__33862_34099__$1 = temp__5804__auto___34098__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33862_34099__$1)){
var c__5568__auto___34100 = cljs.core.chunk_first.call(null,seq__33862_34099__$1);
var G__34101 = cljs.core.chunk_rest.call(null,seq__33862_34099__$1);
var G__34102 = c__5568__auto___34100;
var G__34103 = cljs.core.count.call(null,c__5568__auto___34100);
var G__34104 = (0);
seq__33862_34062 = G__34101;
chunk__33863_34063 = G__34102;
count__33864_34064 = G__34103;
i__33865_34065 = G__34104;
continue;
} else {
var vec__33923_34105 = cljs.core.first.call(null,seq__33862_34099__$1);
var line_34106 = cljs.core.nth.call(null,vec__33923_34105,(0),null);
var cols_34107 = cljs.core.nth.call(null,vec__33923_34105,(1),null);
var seq__33926_34108 = cljs.core.seq.call(null,cols_34107);
var chunk__33927_34109 = null;
var count__33928_34110 = (0);
var i__33929_34111 = (0);
while(true){
if((i__33929_34111 < count__33928_34110)){
var vec__33936_34112 = cljs.core._nth.call(null,chunk__33927_34109,i__33929_34111);
var col_34113 = cljs.core.nth.call(null,vec__33936_34112,(0),null);
var infos_34114 = cljs.core.nth.call(null,vec__33936_34112,(1),null);
encode_cols.call(null,infos_34114,source_idx_34058,line_34106,col_34113);


var G__34115 = seq__33926_34108;
var G__34116 = chunk__33927_34109;
var G__34117 = count__33928_34110;
var G__34118 = (i__33929_34111 + (1));
seq__33926_34108 = G__34115;
chunk__33927_34109 = G__34116;
count__33928_34110 = G__34117;
i__33929_34111 = G__34118;
continue;
} else {
var temp__5804__auto___34119__$2 = cljs.core.seq.call(null,seq__33926_34108);
if(temp__5804__auto___34119__$2){
var seq__33926_34120__$1 = temp__5804__auto___34119__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33926_34120__$1)){
var c__5568__auto___34121 = cljs.core.chunk_first.call(null,seq__33926_34120__$1);
var G__34122 = cljs.core.chunk_rest.call(null,seq__33926_34120__$1);
var G__34123 = c__5568__auto___34121;
var G__34124 = cljs.core.count.call(null,c__5568__auto___34121);
var G__34125 = (0);
seq__33926_34108 = G__34122;
chunk__33927_34109 = G__34123;
count__33928_34110 = G__34124;
i__33929_34111 = G__34125;
continue;
} else {
var vec__33939_34126 = cljs.core.first.call(null,seq__33926_34120__$1);
var col_34127 = cljs.core.nth.call(null,vec__33939_34126,(0),null);
var infos_34128 = cljs.core.nth.call(null,vec__33939_34126,(1),null);
encode_cols.call(null,infos_34128,source_idx_34058,line_34106,col_34127);


var G__34129 = cljs.core.next.call(null,seq__33926_34120__$1);
var G__34130 = null;
var G__34131 = (0);
var G__34132 = (0);
seq__33926_34108 = G__34129;
chunk__33927_34109 = G__34130;
count__33928_34110 = G__34131;
i__33929_34111 = G__34132;
continue;
}
} else {
}
}
break;
}


var G__34133 = cljs.core.next.call(null,seq__33862_34099__$1);
var G__34134 = null;
var G__34135 = (0);
var G__34136 = (0);
seq__33862_34062 = G__34133;
chunk__33863_34063 = G__34134;
count__33864_34064 = G__34135;
i__33865_34065 = G__34136;
continue;
}
} else {
}
}
break;
}


var G__34137 = cljs.core.next.call(null,seq__33594_34051__$1);
var G__34138 = null;
var G__34139 = (0);
var G__34140 = (0);
seq__33594_33962 = G__34137;
chunk__33595_33963 = G__34138;
count__33596_33964 = G__34139;
i__33597_33965 = G__34140;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__33942 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__33587_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__33587_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__33588_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__33588_SHARP_,/\//));
}));
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,(function (p1__33589_SHARP_){
return clojure.string.join.call(null,",",p1__33589_SHARP_);
}),cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__33943 = G__33942;
cljs.source_map.goog$module$goog$object.set.call(null,G__33943,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__33943;
} else {
return G__33942;
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
var vec__34141 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__34141,(0),null);
var col_map = cljs.core.nth.call(null,vec__34141,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__34144 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__34144,(0),null);
var infos = cljs.core.nth.call(null,vec__34144,(1),null);
var G__34149 = cljs.core.next.call(null,col_map_seq);
var G__34150 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__34144,col,infos,vec__34141,line,col_map){
return (function (v,p__34147){
var map__34148 = p__34147;
var map__34148__$1 = cljs.core.__destructure_map.call(null,map__34148);
var gline = cljs.core.get.call(null,map__34148__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__34148__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__34144,col,infos,vec__34141,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__34149;
new_cols = G__34150;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__34151 = cljs.core.next.call(null,line_map_seq);
var G__34152 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__34151;
new_lines = G__34152;
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
var seq__34153_34361 = cljs.core.seq.call(null,reverse_map);
var chunk__34154_34362 = null;
var count__34155_34363 = (0);
var i__34156_34364 = (0);
while(true){
if((i__34156_34364 < count__34155_34363)){
var vec__34259_34365 = cljs.core._nth.call(null,chunk__34154_34362,i__34156_34364);
var line_34366 = cljs.core.nth.call(null,vec__34259_34365,(0),null);
var columns_34367 = cljs.core.nth.call(null,vec__34259_34365,(1),null);
var seq__34262_34368 = cljs.core.seq.call(null,columns_34367);
var chunk__34263_34369 = null;
var count__34264_34370 = (0);
var i__34265_34371 = (0);
while(true){
if((i__34265_34371 < count__34264_34370)){
var vec__34288_34372 = cljs.core._nth.call(null,chunk__34263_34369,i__34265_34371);
var column_34373 = cljs.core.nth.call(null,vec__34288_34372,(0),null);
var column_info_34374 = cljs.core.nth.call(null,vec__34288_34372,(1),null);
var seq__34291_34375 = cljs.core.seq.call(null,column_info_34374);
var chunk__34292_34376 = null;
var count__34293_34377 = (0);
var i__34294_34378 = (0);
while(true){
if((i__34294_34378 < count__34293_34377)){
var map__34297_34379 = cljs.core._nth.call(null,chunk__34292_34376,i__34294_34378);
var map__34297_34380__$1 = cljs.core.__destructure_map.call(null,map__34297_34379);
var gline_34381 = cljs.core.get.call(null,map__34297_34380__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_34382 = cljs.core.get.call(null,map__34297_34380__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_34383 = cljs.core.get.call(null,map__34297_34380__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_34381], null),cljs.core.fnil.call(null,((function (seq__34291_34375,chunk__34292_34376,count__34293_34377,i__34294_34378,seq__34262_34368,chunk__34263_34369,count__34264_34370,i__34265_34371,seq__34153_34361,chunk__34154_34362,count__34155_34363,i__34156_34364,map__34297_34379,map__34297_34380__$1,gline_34381,gcol_34382,name_34383,vec__34288_34372,column_34373,column_info_34374,vec__34259_34365,line_34366,columns_34367,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_34382], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_34366,new cljs.core.Keyword(null,"col","col",-1959363084),column_34373,new cljs.core.Keyword(null,"name","name",1843675177),name_34383], null));
});})(seq__34291_34375,chunk__34292_34376,count__34293_34377,i__34294_34378,seq__34262_34368,chunk__34263_34369,count__34264_34370,i__34265_34371,seq__34153_34361,chunk__34154_34362,count__34155_34363,i__34156_34364,map__34297_34379,map__34297_34380__$1,gline_34381,gcol_34382,name_34383,vec__34288_34372,column_34373,column_info_34374,vec__34259_34365,line_34366,columns_34367,inverted))
,cljs.core.sorted_map.call(null)));


var G__34384 = seq__34291_34375;
var G__34385 = chunk__34292_34376;
var G__34386 = count__34293_34377;
var G__34387 = (i__34294_34378 + (1));
seq__34291_34375 = G__34384;
chunk__34292_34376 = G__34385;
count__34293_34377 = G__34386;
i__34294_34378 = G__34387;
continue;
} else {
var temp__5804__auto___34388 = cljs.core.seq.call(null,seq__34291_34375);
if(temp__5804__auto___34388){
var seq__34291_34389__$1 = temp__5804__auto___34388;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34291_34389__$1)){
var c__5568__auto___34390 = cljs.core.chunk_first.call(null,seq__34291_34389__$1);
var G__34391 = cljs.core.chunk_rest.call(null,seq__34291_34389__$1);
var G__34392 = c__5568__auto___34390;
var G__34393 = cljs.core.count.call(null,c__5568__auto___34390);
var G__34394 = (0);
seq__34291_34375 = G__34391;
chunk__34292_34376 = G__34392;
count__34293_34377 = G__34393;
i__34294_34378 = G__34394;
continue;
} else {
var map__34298_34395 = cljs.core.first.call(null,seq__34291_34389__$1);
var map__34298_34396__$1 = cljs.core.__destructure_map.call(null,map__34298_34395);
var gline_34397 = cljs.core.get.call(null,map__34298_34396__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_34398 = cljs.core.get.call(null,map__34298_34396__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_34399 = cljs.core.get.call(null,map__34298_34396__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_34397], null),cljs.core.fnil.call(null,((function (seq__34291_34375,chunk__34292_34376,count__34293_34377,i__34294_34378,seq__34262_34368,chunk__34263_34369,count__34264_34370,i__34265_34371,seq__34153_34361,chunk__34154_34362,count__34155_34363,i__34156_34364,map__34298_34395,map__34298_34396__$1,gline_34397,gcol_34398,name_34399,seq__34291_34389__$1,temp__5804__auto___34388,vec__34288_34372,column_34373,column_info_34374,vec__34259_34365,line_34366,columns_34367,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_34398], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_34366,new cljs.core.Keyword(null,"col","col",-1959363084),column_34373,new cljs.core.Keyword(null,"name","name",1843675177),name_34399], null));
});})(seq__34291_34375,chunk__34292_34376,count__34293_34377,i__34294_34378,seq__34262_34368,chunk__34263_34369,count__34264_34370,i__34265_34371,seq__34153_34361,chunk__34154_34362,count__34155_34363,i__34156_34364,map__34298_34395,map__34298_34396__$1,gline_34397,gcol_34398,name_34399,seq__34291_34389__$1,temp__5804__auto___34388,vec__34288_34372,column_34373,column_info_34374,vec__34259_34365,line_34366,columns_34367,inverted))
,cljs.core.sorted_map.call(null)));


var G__34400 = cljs.core.next.call(null,seq__34291_34389__$1);
var G__34401 = null;
var G__34402 = (0);
var G__34403 = (0);
seq__34291_34375 = G__34400;
chunk__34292_34376 = G__34401;
count__34293_34377 = G__34402;
i__34294_34378 = G__34403;
continue;
}
} else {
}
}
break;
}


var G__34404 = seq__34262_34368;
var G__34405 = chunk__34263_34369;
var G__34406 = count__34264_34370;
var G__34407 = (i__34265_34371 + (1));
seq__34262_34368 = G__34404;
chunk__34263_34369 = G__34405;
count__34264_34370 = G__34406;
i__34265_34371 = G__34407;
continue;
} else {
var temp__5804__auto___34408 = cljs.core.seq.call(null,seq__34262_34368);
if(temp__5804__auto___34408){
var seq__34262_34409__$1 = temp__5804__auto___34408;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34262_34409__$1)){
var c__5568__auto___34410 = cljs.core.chunk_first.call(null,seq__34262_34409__$1);
var G__34411 = cljs.core.chunk_rest.call(null,seq__34262_34409__$1);
var G__34412 = c__5568__auto___34410;
var G__34413 = cljs.core.count.call(null,c__5568__auto___34410);
var G__34414 = (0);
seq__34262_34368 = G__34411;
chunk__34263_34369 = G__34412;
count__34264_34370 = G__34413;
i__34265_34371 = G__34414;
continue;
} else {
var vec__34299_34415 = cljs.core.first.call(null,seq__34262_34409__$1);
var column_34416 = cljs.core.nth.call(null,vec__34299_34415,(0),null);
var column_info_34417 = cljs.core.nth.call(null,vec__34299_34415,(1),null);
var seq__34302_34418 = cljs.core.seq.call(null,column_info_34417);
var chunk__34303_34419 = null;
var count__34304_34420 = (0);
var i__34305_34421 = (0);
while(true){
if((i__34305_34421 < count__34304_34420)){
var map__34308_34422 = cljs.core._nth.call(null,chunk__34303_34419,i__34305_34421);
var map__34308_34423__$1 = cljs.core.__destructure_map.call(null,map__34308_34422);
var gline_34424 = cljs.core.get.call(null,map__34308_34423__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_34425 = cljs.core.get.call(null,map__34308_34423__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_34426 = cljs.core.get.call(null,map__34308_34423__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_34424], null),cljs.core.fnil.call(null,((function (seq__34302_34418,chunk__34303_34419,count__34304_34420,i__34305_34421,seq__34262_34368,chunk__34263_34369,count__34264_34370,i__34265_34371,seq__34153_34361,chunk__34154_34362,count__34155_34363,i__34156_34364,map__34308_34422,map__34308_34423__$1,gline_34424,gcol_34425,name_34426,vec__34299_34415,column_34416,column_info_34417,seq__34262_34409__$1,temp__5804__auto___34408,vec__34259_34365,line_34366,columns_34367,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_34425], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_34366,new cljs.core.Keyword(null,"col","col",-1959363084),column_34416,new cljs.core.Keyword(null,"name","name",1843675177),name_34426], null));
});})(seq__34302_34418,chunk__34303_34419,count__34304_34420,i__34305_34421,seq__34262_34368,chunk__34263_34369,count__34264_34370,i__34265_34371,seq__34153_34361,chunk__34154_34362,count__34155_34363,i__34156_34364,map__34308_34422,map__34308_34423__$1,gline_34424,gcol_34425,name_34426,vec__34299_34415,column_34416,column_info_34417,seq__34262_34409__$1,temp__5804__auto___34408,vec__34259_34365,line_34366,columns_34367,inverted))
,cljs.core.sorted_map.call(null)));


var G__34427 = seq__34302_34418;
var G__34428 = chunk__34303_34419;
var G__34429 = count__34304_34420;
var G__34430 = (i__34305_34421 + (1));
seq__34302_34418 = G__34427;
chunk__34303_34419 = G__34428;
count__34304_34420 = G__34429;
i__34305_34421 = G__34430;
continue;
} else {
var temp__5804__auto___34431__$1 = cljs.core.seq.call(null,seq__34302_34418);
if(temp__5804__auto___34431__$1){
var seq__34302_34432__$1 = temp__5804__auto___34431__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34302_34432__$1)){
var c__5568__auto___34433 = cljs.core.chunk_first.call(null,seq__34302_34432__$1);
var G__34434 = cljs.core.chunk_rest.call(null,seq__34302_34432__$1);
var G__34435 = c__5568__auto___34433;
var G__34436 = cljs.core.count.call(null,c__5568__auto___34433);
var G__34437 = (0);
seq__34302_34418 = G__34434;
chunk__34303_34419 = G__34435;
count__34304_34420 = G__34436;
i__34305_34421 = G__34437;
continue;
} else {
var map__34309_34438 = cljs.core.first.call(null,seq__34302_34432__$1);
var map__34309_34439__$1 = cljs.core.__destructure_map.call(null,map__34309_34438);
var gline_34440 = cljs.core.get.call(null,map__34309_34439__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_34441 = cljs.core.get.call(null,map__34309_34439__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_34442 = cljs.core.get.call(null,map__34309_34439__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_34440], null),cljs.core.fnil.call(null,((function (seq__34302_34418,chunk__34303_34419,count__34304_34420,i__34305_34421,seq__34262_34368,chunk__34263_34369,count__34264_34370,i__34265_34371,seq__34153_34361,chunk__34154_34362,count__34155_34363,i__34156_34364,map__34309_34438,map__34309_34439__$1,gline_34440,gcol_34441,name_34442,seq__34302_34432__$1,temp__5804__auto___34431__$1,vec__34299_34415,column_34416,column_info_34417,seq__34262_34409__$1,temp__5804__auto___34408,vec__34259_34365,line_34366,columns_34367,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_34441], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_34366,new cljs.core.Keyword(null,"col","col",-1959363084),column_34416,new cljs.core.Keyword(null,"name","name",1843675177),name_34442], null));
});})(seq__34302_34418,chunk__34303_34419,count__34304_34420,i__34305_34421,seq__34262_34368,chunk__34263_34369,count__34264_34370,i__34265_34371,seq__34153_34361,chunk__34154_34362,count__34155_34363,i__34156_34364,map__34309_34438,map__34309_34439__$1,gline_34440,gcol_34441,name_34442,seq__34302_34432__$1,temp__5804__auto___34431__$1,vec__34299_34415,column_34416,column_info_34417,seq__34262_34409__$1,temp__5804__auto___34408,vec__34259_34365,line_34366,columns_34367,inverted))
,cljs.core.sorted_map.call(null)));


var G__34443 = cljs.core.next.call(null,seq__34302_34432__$1);
var G__34444 = null;
var G__34445 = (0);
var G__34446 = (0);
seq__34302_34418 = G__34443;
chunk__34303_34419 = G__34444;
count__34304_34420 = G__34445;
i__34305_34421 = G__34446;
continue;
}
} else {
}
}
break;
}


var G__34447 = cljs.core.next.call(null,seq__34262_34409__$1);
var G__34448 = null;
var G__34449 = (0);
var G__34450 = (0);
seq__34262_34368 = G__34447;
chunk__34263_34369 = G__34448;
count__34264_34370 = G__34449;
i__34265_34371 = G__34450;
continue;
}
} else {
}
}
break;
}


var G__34451 = seq__34153_34361;
var G__34452 = chunk__34154_34362;
var G__34453 = count__34155_34363;
var G__34454 = (i__34156_34364 + (1));
seq__34153_34361 = G__34451;
chunk__34154_34362 = G__34452;
count__34155_34363 = G__34453;
i__34156_34364 = G__34454;
continue;
} else {
var temp__5804__auto___34455 = cljs.core.seq.call(null,seq__34153_34361);
if(temp__5804__auto___34455){
var seq__34153_34456__$1 = temp__5804__auto___34455;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34153_34456__$1)){
var c__5568__auto___34457 = cljs.core.chunk_first.call(null,seq__34153_34456__$1);
var G__34458 = cljs.core.chunk_rest.call(null,seq__34153_34456__$1);
var G__34459 = c__5568__auto___34457;
var G__34460 = cljs.core.count.call(null,c__5568__auto___34457);
var G__34461 = (0);
seq__34153_34361 = G__34458;
chunk__34154_34362 = G__34459;
count__34155_34363 = G__34460;
i__34156_34364 = G__34461;
continue;
} else {
var vec__34310_34462 = cljs.core.first.call(null,seq__34153_34456__$1);
var line_34463 = cljs.core.nth.call(null,vec__34310_34462,(0),null);
var columns_34464 = cljs.core.nth.call(null,vec__34310_34462,(1),null);
var seq__34313_34465 = cljs.core.seq.call(null,columns_34464);
var chunk__34314_34466 = null;
var count__34315_34467 = (0);
var i__34316_34468 = (0);
while(true){
if((i__34316_34468 < count__34315_34467)){
var vec__34339_34469 = cljs.core._nth.call(null,chunk__34314_34466,i__34316_34468);
var column_34470 = cljs.core.nth.call(null,vec__34339_34469,(0),null);
var column_info_34471 = cljs.core.nth.call(null,vec__34339_34469,(1),null);
var seq__34342_34472 = cljs.core.seq.call(null,column_info_34471);
var chunk__34343_34473 = null;
var count__34344_34474 = (0);
var i__34345_34475 = (0);
while(true){
if((i__34345_34475 < count__34344_34474)){
var map__34348_34476 = cljs.core._nth.call(null,chunk__34343_34473,i__34345_34475);
var map__34348_34477__$1 = cljs.core.__destructure_map.call(null,map__34348_34476);
var gline_34478 = cljs.core.get.call(null,map__34348_34477__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_34479 = cljs.core.get.call(null,map__34348_34477__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_34480 = cljs.core.get.call(null,map__34348_34477__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_34478], null),cljs.core.fnil.call(null,((function (seq__34342_34472,chunk__34343_34473,count__34344_34474,i__34345_34475,seq__34313_34465,chunk__34314_34466,count__34315_34467,i__34316_34468,seq__34153_34361,chunk__34154_34362,count__34155_34363,i__34156_34364,map__34348_34476,map__34348_34477__$1,gline_34478,gcol_34479,name_34480,vec__34339_34469,column_34470,column_info_34471,vec__34310_34462,line_34463,columns_34464,seq__34153_34456__$1,temp__5804__auto___34455,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_34479], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_34463,new cljs.core.Keyword(null,"col","col",-1959363084),column_34470,new cljs.core.Keyword(null,"name","name",1843675177),name_34480], null));
});})(seq__34342_34472,chunk__34343_34473,count__34344_34474,i__34345_34475,seq__34313_34465,chunk__34314_34466,count__34315_34467,i__34316_34468,seq__34153_34361,chunk__34154_34362,count__34155_34363,i__34156_34364,map__34348_34476,map__34348_34477__$1,gline_34478,gcol_34479,name_34480,vec__34339_34469,column_34470,column_info_34471,vec__34310_34462,line_34463,columns_34464,seq__34153_34456__$1,temp__5804__auto___34455,inverted))
,cljs.core.sorted_map.call(null)));


var G__34481 = seq__34342_34472;
var G__34482 = chunk__34343_34473;
var G__34483 = count__34344_34474;
var G__34484 = (i__34345_34475 + (1));
seq__34342_34472 = G__34481;
chunk__34343_34473 = G__34482;
count__34344_34474 = G__34483;
i__34345_34475 = G__34484;
continue;
} else {
var temp__5804__auto___34485__$1 = cljs.core.seq.call(null,seq__34342_34472);
if(temp__5804__auto___34485__$1){
var seq__34342_34486__$1 = temp__5804__auto___34485__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34342_34486__$1)){
var c__5568__auto___34487 = cljs.core.chunk_first.call(null,seq__34342_34486__$1);
var G__34488 = cljs.core.chunk_rest.call(null,seq__34342_34486__$1);
var G__34489 = c__5568__auto___34487;
var G__34490 = cljs.core.count.call(null,c__5568__auto___34487);
var G__34491 = (0);
seq__34342_34472 = G__34488;
chunk__34343_34473 = G__34489;
count__34344_34474 = G__34490;
i__34345_34475 = G__34491;
continue;
} else {
var map__34349_34492 = cljs.core.first.call(null,seq__34342_34486__$1);
var map__34349_34493__$1 = cljs.core.__destructure_map.call(null,map__34349_34492);
var gline_34494 = cljs.core.get.call(null,map__34349_34493__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_34495 = cljs.core.get.call(null,map__34349_34493__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_34496 = cljs.core.get.call(null,map__34349_34493__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_34494], null),cljs.core.fnil.call(null,((function (seq__34342_34472,chunk__34343_34473,count__34344_34474,i__34345_34475,seq__34313_34465,chunk__34314_34466,count__34315_34467,i__34316_34468,seq__34153_34361,chunk__34154_34362,count__34155_34363,i__34156_34364,map__34349_34492,map__34349_34493__$1,gline_34494,gcol_34495,name_34496,seq__34342_34486__$1,temp__5804__auto___34485__$1,vec__34339_34469,column_34470,column_info_34471,vec__34310_34462,line_34463,columns_34464,seq__34153_34456__$1,temp__5804__auto___34455,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_34495], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_34463,new cljs.core.Keyword(null,"col","col",-1959363084),column_34470,new cljs.core.Keyword(null,"name","name",1843675177),name_34496], null));
});})(seq__34342_34472,chunk__34343_34473,count__34344_34474,i__34345_34475,seq__34313_34465,chunk__34314_34466,count__34315_34467,i__34316_34468,seq__34153_34361,chunk__34154_34362,count__34155_34363,i__34156_34364,map__34349_34492,map__34349_34493__$1,gline_34494,gcol_34495,name_34496,seq__34342_34486__$1,temp__5804__auto___34485__$1,vec__34339_34469,column_34470,column_info_34471,vec__34310_34462,line_34463,columns_34464,seq__34153_34456__$1,temp__5804__auto___34455,inverted))
,cljs.core.sorted_map.call(null)));


var G__34497 = cljs.core.next.call(null,seq__34342_34486__$1);
var G__34498 = null;
var G__34499 = (0);
var G__34500 = (0);
seq__34342_34472 = G__34497;
chunk__34343_34473 = G__34498;
count__34344_34474 = G__34499;
i__34345_34475 = G__34500;
continue;
}
} else {
}
}
break;
}


var G__34501 = seq__34313_34465;
var G__34502 = chunk__34314_34466;
var G__34503 = count__34315_34467;
var G__34504 = (i__34316_34468 + (1));
seq__34313_34465 = G__34501;
chunk__34314_34466 = G__34502;
count__34315_34467 = G__34503;
i__34316_34468 = G__34504;
continue;
} else {
var temp__5804__auto___34505__$1 = cljs.core.seq.call(null,seq__34313_34465);
if(temp__5804__auto___34505__$1){
var seq__34313_34506__$1 = temp__5804__auto___34505__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34313_34506__$1)){
var c__5568__auto___34507 = cljs.core.chunk_first.call(null,seq__34313_34506__$1);
var G__34508 = cljs.core.chunk_rest.call(null,seq__34313_34506__$1);
var G__34509 = c__5568__auto___34507;
var G__34510 = cljs.core.count.call(null,c__5568__auto___34507);
var G__34511 = (0);
seq__34313_34465 = G__34508;
chunk__34314_34466 = G__34509;
count__34315_34467 = G__34510;
i__34316_34468 = G__34511;
continue;
} else {
var vec__34350_34512 = cljs.core.first.call(null,seq__34313_34506__$1);
var column_34513 = cljs.core.nth.call(null,vec__34350_34512,(0),null);
var column_info_34514 = cljs.core.nth.call(null,vec__34350_34512,(1),null);
var seq__34353_34515 = cljs.core.seq.call(null,column_info_34514);
var chunk__34354_34516 = null;
var count__34355_34517 = (0);
var i__34356_34518 = (0);
while(true){
if((i__34356_34518 < count__34355_34517)){
var map__34359_34519 = cljs.core._nth.call(null,chunk__34354_34516,i__34356_34518);
var map__34359_34520__$1 = cljs.core.__destructure_map.call(null,map__34359_34519);
var gline_34521 = cljs.core.get.call(null,map__34359_34520__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_34522 = cljs.core.get.call(null,map__34359_34520__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_34523 = cljs.core.get.call(null,map__34359_34520__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_34521], null),cljs.core.fnil.call(null,((function (seq__34353_34515,chunk__34354_34516,count__34355_34517,i__34356_34518,seq__34313_34465,chunk__34314_34466,count__34315_34467,i__34316_34468,seq__34153_34361,chunk__34154_34362,count__34155_34363,i__34156_34364,map__34359_34519,map__34359_34520__$1,gline_34521,gcol_34522,name_34523,vec__34350_34512,column_34513,column_info_34514,seq__34313_34506__$1,temp__5804__auto___34505__$1,vec__34310_34462,line_34463,columns_34464,seq__34153_34456__$1,temp__5804__auto___34455,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_34522], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_34463,new cljs.core.Keyword(null,"col","col",-1959363084),column_34513,new cljs.core.Keyword(null,"name","name",1843675177),name_34523], null));
});})(seq__34353_34515,chunk__34354_34516,count__34355_34517,i__34356_34518,seq__34313_34465,chunk__34314_34466,count__34315_34467,i__34316_34468,seq__34153_34361,chunk__34154_34362,count__34155_34363,i__34156_34364,map__34359_34519,map__34359_34520__$1,gline_34521,gcol_34522,name_34523,vec__34350_34512,column_34513,column_info_34514,seq__34313_34506__$1,temp__5804__auto___34505__$1,vec__34310_34462,line_34463,columns_34464,seq__34153_34456__$1,temp__5804__auto___34455,inverted))
,cljs.core.sorted_map.call(null)));


var G__34524 = seq__34353_34515;
var G__34525 = chunk__34354_34516;
var G__34526 = count__34355_34517;
var G__34527 = (i__34356_34518 + (1));
seq__34353_34515 = G__34524;
chunk__34354_34516 = G__34525;
count__34355_34517 = G__34526;
i__34356_34518 = G__34527;
continue;
} else {
var temp__5804__auto___34528__$2 = cljs.core.seq.call(null,seq__34353_34515);
if(temp__5804__auto___34528__$2){
var seq__34353_34529__$1 = temp__5804__auto___34528__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34353_34529__$1)){
var c__5568__auto___34530 = cljs.core.chunk_first.call(null,seq__34353_34529__$1);
var G__34531 = cljs.core.chunk_rest.call(null,seq__34353_34529__$1);
var G__34532 = c__5568__auto___34530;
var G__34533 = cljs.core.count.call(null,c__5568__auto___34530);
var G__34534 = (0);
seq__34353_34515 = G__34531;
chunk__34354_34516 = G__34532;
count__34355_34517 = G__34533;
i__34356_34518 = G__34534;
continue;
} else {
var map__34360_34535 = cljs.core.first.call(null,seq__34353_34529__$1);
var map__34360_34536__$1 = cljs.core.__destructure_map.call(null,map__34360_34535);
var gline_34537 = cljs.core.get.call(null,map__34360_34536__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_34538 = cljs.core.get.call(null,map__34360_34536__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_34539 = cljs.core.get.call(null,map__34360_34536__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_34537], null),cljs.core.fnil.call(null,((function (seq__34353_34515,chunk__34354_34516,count__34355_34517,i__34356_34518,seq__34313_34465,chunk__34314_34466,count__34315_34467,i__34316_34468,seq__34153_34361,chunk__34154_34362,count__34155_34363,i__34156_34364,map__34360_34535,map__34360_34536__$1,gline_34537,gcol_34538,name_34539,seq__34353_34529__$1,temp__5804__auto___34528__$2,vec__34350_34512,column_34513,column_info_34514,seq__34313_34506__$1,temp__5804__auto___34505__$1,vec__34310_34462,line_34463,columns_34464,seq__34153_34456__$1,temp__5804__auto___34455,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_34538], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_34463,new cljs.core.Keyword(null,"col","col",-1959363084),column_34513,new cljs.core.Keyword(null,"name","name",1843675177),name_34539], null));
});})(seq__34353_34515,chunk__34354_34516,count__34355_34517,i__34356_34518,seq__34313_34465,chunk__34314_34466,count__34315_34467,i__34316_34468,seq__34153_34361,chunk__34154_34362,count__34155_34363,i__34156_34364,map__34360_34535,map__34360_34536__$1,gline_34537,gcol_34538,name_34539,seq__34353_34529__$1,temp__5804__auto___34528__$2,vec__34350_34512,column_34513,column_info_34514,seq__34313_34506__$1,temp__5804__auto___34505__$1,vec__34310_34462,line_34463,columns_34464,seq__34153_34456__$1,temp__5804__auto___34455,inverted))
,cljs.core.sorted_map.call(null)));


var G__34540 = cljs.core.next.call(null,seq__34353_34529__$1);
var G__34541 = null;
var G__34542 = (0);
var G__34543 = (0);
seq__34353_34515 = G__34540;
chunk__34354_34516 = G__34541;
count__34355_34517 = G__34542;
i__34356_34518 = G__34543;
continue;
}
} else {
}
}
break;
}


var G__34544 = cljs.core.next.call(null,seq__34313_34506__$1);
var G__34545 = null;
var G__34546 = (0);
var G__34547 = (0);
seq__34313_34465 = G__34544;
chunk__34314_34466 = G__34545;
count__34315_34467 = G__34546;
i__34316_34468 = G__34547;
continue;
}
} else {
}
}
break;
}


var G__34548 = cljs.core.next.call(null,seq__34153_34456__$1);
var G__34549 = null;
var G__34550 = (0);
var G__34551 = (0);
seq__34153_34361 = G__34548;
chunk__34154_34362 = G__34549;
count__34155_34363 = G__34550;
i__34156_34364 = G__34551;
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
