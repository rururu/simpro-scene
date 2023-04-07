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
return cljs.core.reduce.call(null,(function (m,p__5752){
var vec__5753 = p__5752;
var i = cljs.core.nth.call(null,vec__5753,(0),null);
var v = cljs.core.nth.call(null,vec__5753,(1),null);
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
var vec__5756 = seg;
var gcol = cljs.core.nth.call(null,vec__5756,(0),null);
var source = cljs.core.nth.call(null,vec__5756,(1),null);
var line = cljs.core.nth.call(null,vec__5756,(2),null);
var col = cljs.core.nth.call(null,vec__5756,(3),null);
var name = cljs.core.nth.call(null,vec__5756,(4),null);
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
var vec__5759 = seg;
var gcol = cljs.core.nth.call(null,vec__5759,(0),null);
var source = cljs.core.nth.call(null,vec__5759,(1),null);
var line = cljs.core.nth.call(null,vec__5759,(2),null);
var col = cljs.core.nth.call(null,vec__5759,(3),null);
var name = cljs.core.nth.call(null,vec__5759,(4),null);
var vec__5762 = relseg;
var rgcol = cljs.core.nth.call(null,vec__5762,(0),null);
var rsource = cljs.core.nth.call(null,vec__5762,(1),null);
var rline = cljs.core.nth.call(null,vec__5762,(2),null);
var rcol = cljs.core.nth.call(null,vec__5762,(3),null);
var rname = cljs.core.nth.call(null,vec__5762,(4),null);
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
var map__5765 = segmap;
var map__5765__$1 = cljs.core.__destructure_map.call(null,map__5765);
var gcol = cljs.core.get.call(null,map__5765__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__5765__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__5765__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__5765__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__5765__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var G__5767 = arguments.length;
switch (G__5767) {
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
var vec__5771 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__5775 = cljs.core.next.call(null,segs__$1);
var G__5776 = nrelseg;
var G__5777 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__5775;
relseg__$1 = G__5776;
result__$1 = G__5777;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__5771,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__5771,(1),null);
var G__5778 = (gline + (1));
var G__5779 = cljs.core.next.call(null,lines__$1);
var G__5780 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__5781 = result__$1;
gline = G__5778;
lines__$1 = G__5779;
relseg = G__5780;
result = G__5781;
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
var map__5783 = segmap;
var map__5783__$1 = cljs.core.__destructure_map.call(null,map__5783);
var gcol = cljs.core.get.call(null,map__5783__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__5783__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__5783__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__5783__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__5783__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,(function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,(function (p1__5782_SHARP_){
return cljs.core.conj.call(null,p1__5782_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__5785 = arguments.length;
switch (G__5785) {
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
var vec__5789 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__5793 = cljs.core.next.call(null,segs__$1);
var G__5794 = nrelseg;
var G__5795 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__5793;
relseg__$1 = G__5794;
result__$1 = G__5795;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__5789,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__5789,(1),null);
var G__5796 = (gline + (1));
var G__5797 = cljs.core.next.call(null,lines__$1);
var G__5798 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__5799 = result__$1;
gline = G__5796;
lines__$1 = G__5797;
relseg = G__5798;
result = G__5799;
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
cljs.core.swap_BANG_.call(null,relseg,(function (p__5800){
var vec__5801 = p__5800;
var _ = cljs.core.nth.call(null,vec__5801,(0),null);
var source = cljs.core.nth.call(null,vec__5801,(1),null);
var line = cljs.core.nth.call(null,vec__5801,(2),null);
var col = cljs.core.nth.call(null,vec__5801,(3),null);
var name = cljs.core.nth.call(null,vec__5801,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,(function (cols__$1,p__5804){
var vec__5805 = p__5804;
var gcol = cljs.core.nth.call(null,vec__5805,(0),null);
var sidx = cljs.core.nth.call(null,vec__5805,(1),null);
var line = cljs.core.nth.call(null,vec__5805,(2),null);
var col = cljs.core.nth.call(null,vec__5805,(3),null);
var name = cljs.core.nth.call(null,vec__5805,(4),null);
var seg = vec__5805;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,(function (p__5808){
var vec__5809 = p__5808;
var _ = cljs.core.nth.call(null,vec__5809,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__5809,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__5809,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__5809,(3),null);
var lname = cljs.core.nth.call(null,vec__5809,(4),null);
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
var seq__5815 = cljs.core.seq.call(null,infos);
var chunk__5816 = null;
var count__5817 = (0);
var i__5818 = (0);
while(true){
if((i__5818 < count__5817)){
var info = cljs.core._nth.call(null,chunk__5816,i__5818);
var segv_6169 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_6170 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_6171 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_6170 > (lc_6171 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__5815,chunk__5816,count__5817,i__5818,segv_6169,gline_6170,lc_6171,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_6170 - (lc_6171 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_6169], null));
});})(seq__5815,chunk__5816,count__5817,i__5818,segv_6169,gline_6170,lc_6171,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__5815,chunk__5816,count__5817,i__5818,segv_6169,gline_6170,lc_6171,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_6170], null),cljs.core.conj,segv_6169);
});})(seq__5815,chunk__5816,count__5817,i__5818,segv_6169,gline_6170,lc_6171,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__6172 = seq__5815;
var G__6173 = chunk__5816;
var G__6174 = count__5817;
var G__6175 = (i__5818 + (1));
seq__5815 = G__6172;
chunk__5816 = G__6173;
count__5817 = G__6174;
i__5818 = G__6175;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__5815);
if(temp__5804__auto__){
var seq__5815__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5815__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__5815__$1);
var G__6176 = cljs.core.chunk_rest.call(null,seq__5815__$1);
var G__6177 = c__5568__auto__;
var G__6178 = cljs.core.count.call(null,c__5568__auto__);
var G__6179 = (0);
seq__5815 = G__6176;
chunk__5816 = G__6177;
count__5817 = G__6178;
i__5818 = G__6179;
continue;
} else {
var info = cljs.core.first.call(null,seq__5815__$1);
var segv_6180 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_6181 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_6182 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_6181 > (lc_6182 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__5815,chunk__5816,count__5817,i__5818,segv_6180,gline_6181,lc_6182,info,seq__5815__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_6181 - (lc_6182 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_6180], null));
});})(seq__5815,chunk__5816,count__5817,i__5818,segv_6180,gline_6181,lc_6182,info,seq__5815__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__5815,chunk__5816,count__5817,i__5818,segv_6180,gline_6181,lc_6182,info,seq__5815__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_6181], null),cljs.core.conj,segv_6180);
});})(seq__5815,chunk__5816,count__5817,i__5818,segv_6180,gline_6181,lc_6182,info,seq__5815__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__6183 = cljs.core.next.call(null,seq__5815__$1);
var G__6184 = null;
var G__6185 = (0);
var G__6186 = (0);
seq__5815 = G__6183;
chunk__5816 = G__6184;
count__5817 = G__6185;
i__5818 = G__6186;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__5819_6187 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__5820_6188 = null;
var count__5821_6189 = (0);
var i__5822_6190 = (0);
while(true){
if((i__5822_6190 < count__5821_6189)){
var vec__5995_6191 = cljs.core._nth.call(null,chunk__5820_6188,i__5822_6190);
var source_idx_6192 = cljs.core.nth.call(null,vec__5995_6191,(0),null);
var vec__5998_6193 = cljs.core.nth.call(null,vec__5995_6191,(1),null);
var __6194 = cljs.core.nth.call(null,vec__5998_6193,(0),null);
var lines_6195__$1 = cljs.core.nth.call(null,vec__5998_6193,(1),null);
var seq__6001_6196 = cljs.core.seq.call(null,lines_6195__$1);
var chunk__6002_6197 = null;
var count__6003_6198 = (0);
var i__6004_6199 = (0);
while(true){
if((i__6004_6199 < count__6003_6198)){
var vec__6043_6200 = cljs.core._nth.call(null,chunk__6002_6197,i__6004_6199);
var line_6201 = cljs.core.nth.call(null,vec__6043_6200,(0),null);
var cols_6202 = cljs.core.nth.call(null,vec__6043_6200,(1),null);
var seq__6046_6203 = cljs.core.seq.call(null,cols_6202);
var chunk__6047_6204 = null;
var count__6048_6205 = (0);
var i__6049_6206 = (0);
while(true){
if((i__6049_6206 < count__6048_6205)){
var vec__6056_6207 = cljs.core._nth.call(null,chunk__6047_6204,i__6049_6206);
var col_6208 = cljs.core.nth.call(null,vec__6056_6207,(0),null);
var infos_6209 = cljs.core.nth.call(null,vec__6056_6207,(1),null);
encode_cols.call(null,infos_6209,source_idx_6192,line_6201,col_6208);


var G__6210 = seq__6046_6203;
var G__6211 = chunk__6047_6204;
var G__6212 = count__6048_6205;
var G__6213 = (i__6049_6206 + (1));
seq__6046_6203 = G__6210;
chunk__6047_6204 = G__6211;
count__6048_6205 = G__6212;
i__6049_6206 = G__6213;
continue;
} else {
var temp__5804__auto___6214 = cljs.core.seq.call(null,seq__6046_6203);
if(temp__5804__auto___6214){
var seq__6046_6215__$1 = temp__5804__auto___6214;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6046_6215__$1)){
var c__5568__auto___6216 = cljs.core.chunk_first.call(null,seq__6046_6215__$1);
var G__6217 = cljs.core.chunk_rest.call(null,seq__6046_6215__$1);
var G__6218 = c__5568__auto___6216;
var G__6219 = cljs.core.count.call(null,c__5568__auto___6216);
var G__6220 = (0);
seq__6046_6203 = G__6217;
chunk__6047_6204 = G__6218;
count__6048_6205 = G__6219;
i__6049_6206 = G__6220;
continue;
} else {
var vec__6059_6221 = cljs.core.first.call(null,seq__6046_6215__$1);
var col_6222 = cljs.core.nth.call(null,vec__6059_6221,(0),null);
var infos_6223 = cljs.core.nth.call(null,vec__6059_6221,(1),null);
encode_cols.call(null,infos_6223,source_idx_6192,line_6201,col_6222);


var G__6224 = cljs.core.next.call(null,seq__6046_6215__$1);
var G__6225 = null;
var G__6226 = (0);
var G__6227 = (0);
seq__6046_6203 = G__6224;
chunk__6047_6204 = G__6225;
count__6048_6205 = G__6226;
i__6049_6206 = G__6227;
continue;
}
} else {
}
}
break;
}


var G__6228 = seq__6001_6196;
var G__6229 = chunk__6002_6197;
var G__6230 = count__6003_6198;
var G__6231 = (i__6004_6199 + (1));
seq__6001_6196 = G__6228;
chunk__6002_6197 = G__6229;
count__6003_6198 = G__6230;
i__6004_6199 = G__6231;
continue;
} else {
var temp__5804__auto___6232 = cljs.core.seq.call(null,seq__6001_6196);
if(temp__5804__auto___6232){
var seq__6001_6233__$1 = temp__5804__auto___6232;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6001_6233__$1)){
var c__5568__auto___6234 = cljs.core.chunk_first.call(null,seq__6001_6233__$1);
var G__6235 = cljs.core.chunk_rest.call(null,seq__6001_6233__$1);
var G__6236 = c__5568__auto___6234;
var G__6237 = cljs.core.count.call(null,c__5568__auto___6234);
var G__6238 = (0);
seq__6001_6196 = G__6235;
chunk__6002_6197 = G__6236;
count__6003_6198 = G__6237;
i__6004_6199 = G__6238;
continue;
} else {
var vec__6062_6239 = cljs.core.first.call(null,seq__6001_6233__$1);
var line_6240 = cljs.core.nth.call(null,vec__6062_6239,(0),null);
var cols_6241 = cljs.core.nth.call(null,vec__6062_6239,(1),null);
var seq__6065_6242 = cljs.core.seq.call(null,cols_6241);
var chunk__6066_6243 = null;
var count__6067_6244 = (0);
var i__6068_6245 = (0);
while(true){
if((i__6068_6245 < count__6067_6244)){
var vec__6075_6246 = cljs.core._nth.call(null,chunk__6066_6243,i__6068_6245);
var col_6247 = cljs.core.nth.call(null,vec__6075_6246,(0),null);
var infos_6248 = cljs.core.nth.call(null,vec__6075_6246,(1),null);
encode_cols.call(null,infos_6248,source_idx_6192,line_6240,col_6247);


var G__6249 = seq__6065_6242;
var G__6250 = chunk__6066_6243;
var G__6251 = count__6067_6244;
var G__6252 = (i__6068_6245 + (1));
seq__6065_6242 = G__6249;
chunk__6066_6243 = G__6250;
count__6067_6244 = G__6251;
i__6068_6245 = G__6252;
continue;
} else {
var temp__5804__auto___6253__$1 = cljs.core.seq.call(null,seq__6065_6242);
if(temp__5804__auto___6253__$1){
var seq__6065_6254__$1 = temp__5804__auto___6253__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6065_6254__$1)){
var c__5568__auto___6255 = cljs.core.chunk_first.call(null,seq__6065_6254__$1);
var G__6256 = cljs.core.chunk_rest.call(null,seq__6065_6254__$1);
var G__6257 = c__5568__auto___6255;
var G__6258 = cljs.core.count.call(null,c__5568__auto___6255);
var G__6259 = (0);
seq__6065_6242 = G__6256;
chunk__6066_6243 = G__6257;
count__6067_6244 = G__6258;
i__6068_6245 = G__6259;
continue;
} else {
var vec__6078_6260 = cljs.core.first.call(null,seq__6065_6254__$1);
var col_6261 = cljs.core.nth.call(null,vec__6078_6260,(0),null);
var infos_6262 = cljs.core.nth.call(null,vec__6078_6260,(1),null);
encode_cols.call(null,infos_6262,source_idx_6192,line_6240,col_6261);


var G__6263 = cljs.core.next.call(null,seq__6065_6254__$1);
var G__6264 = null;
var G__6265 = (0);
var G__6266 = (0);
seq__6065_6242 = G__6263;
chunk__6066_6243 = G__6264;
count__6067_6244 = G__6265;
i__6068_6245 = G__6266;
continue;
}
} else {
}
}
break;
}


var G__6267 = cljs.core.next.call(null,seq__6001_6233__$1);
var G__6268 = null;
var G__6269 = (0);
var G__6270 = (0);
seq__6001_6196 = G__6267;
chunk__6002_6197 = G__6268;
count__6003_6198 = G__6269;
i__6004_6199 = G__6270;
continue;
}
} else {
}
}
break;
}


var G__6271 = seq__5819_6187;
var G__6272 = chunk__5820_6188;
var G__6273 = count__5821_6189;
var G__6274 = (i__5822_6190 + (1));
seq__5819_6187 = G__6271;
chunk__5820_6188 = G__6272;
count__5821_6189 = G__6273;
i__5822_6190 = G__6274;
continue;
} else {
var temp__5804__auto___6275 = cljs.core.seq.call(null,seq__5819_6187);
if(temp__5804__auto___6275){
var seq__5819_6276__$1 = temp__5804__auto___6275;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5819_6276__$1)){
var c__5568__auto___6277 = cljs.core.chunk_first.call(null,seq__5819_6276__$1);
var G__6278 = cljs.core.chunk_rest.call(null,seq__5819_6276__$1);
var G__6279 = c__5568__auto___6277;
var G__6280 = cljs.core.count.call(null,c__5568__auto___6277);
var G__6281 = (0);
seq__5819_6187 = G__6278;
chunk__5820_6188 = G__6279;
count__5821_6189 = G__6280;
i__5822_6190 = G__6281;
continue;
} else {
var vec__6081_6282 = cljs.core.first.call(null,seq__5819_6276__$1);
var source_idx_6283 = cljs.core.nth.call(null,vec__6081_6282,(0),null);
var vec__6084_6284 = cljs.core.nth.call(null,vec__6081_6282,(1),null);
var __6285 = cljs.core.nth.call(null,vec__6084_6284,(0),null);
var lines_6286__$1 = cljs.core.nth.call(null,vec__6084_6284,(1),null);
var seq__6087_6287 = cljs.core.seq.call(null,lines_6286__$1);
var chunk__6088_6288 = null;
var count__6089_6289 = (0);
var i__6090_6290 = (0);
while(true){
if((i__6090_6290 < count__6089_6289)){
var vec__6129_6291 = cljs.core._nth.call(null,chunk__6088_6288,i__6090_6290);
var line_6292 = cljs.core.nth.call(null,vec__6129_6291,(0),null);
var cols_6293 = cljs.core.nth.call(null,vec__6129_6291,(1),null);
var seq__6132_6294 = cljs.core.seq.call(null,cols_6293);
var chunk__6133_6295 = null;
var count__6134_6296 = (0);
var i__6135_6297 = (0);
while(true){
if((i__6135_6297 < count__6134_6296)){
var vec__6142_6298 = cljs.core._nth.call(null,chunk__6133_6295,i__6135_6297);
var col_6299 = cljs.core.nth.call(null,vec__6142_6298,(0),null);
var infos_6300 = cljs.core.nth.call(null,vec__6142_6298,(1),null);
encode_cols.call(null,infos_6300,source_idx_6283,line_6292,col_6299);


var G__6301 = seq__6132_6294;
var G__6302 = chunk__6133_6295;
var G__6303 = count__6134_6296;
var G__6304 = (i__6135_6297 + (1));
seq__6132_6294 = G__6301;
chunk__6133_6295 = G__6302;
count__6134_6296 = G__6303;
i__6135_6297 = G__6304;
continue;
} else {
var temp__5804__auto___6305__$1 = cljs.core.seq.call(null,seq__6132_6294);
if(temp__5804__auto___6305__$1){
var seq__6132_6306__$1 = temp__5804__auto___6305__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6132_6306__$1)){
var c__5568__auto___6307 = cljs.core.chunk_first.call(null,seq__6132_6306__$1);
var G__6308 = cljs.core.chunk_rest.call(null,seq__6132_6306__$1);
var G__6309 = c__5568__auto___6307;
var G__6310 = cljs.core.count.call(null,c__5568__auto___6307);
var G__6311 = (0);
seq__6132_6294 = G__6308;
chunk__6133_6295 = G__6309;
count__6134_6296 = G__6310;
i__6135_6297 = G__6311;
continue;
} else {
var vec__6145_6312 = cljs.core.first.call(null,seq__6132_6306__$1);
var col_6313 = cljs.core.nth.call(null,vec__6145_6312,(0),null);
var infos_6314 = cljs.core.nth.call(null,vec__6145_6312,(1),null);
encode_cols.call(null,infos_6314,source_idx_6283,line_6292,col_6313);


var G__6315 = cljs.core.next.call(null,seq__6132_6306__$1);
var G__6316 = null;
var G__6317 = (0);
var G__6318 = (0);
seq__6132_6294 = G__6315;
chunk__6133_6295 = G__6316;
count__6134_6296 = G__6317;
i__6135_6297 = G__6318;
continue;
}
} else {
}
}
break;
}


var G__6319 = seq__6087_6287;
var G__6320 = chunk__6088_6288;
var G__6321 = count__6089_6289;
var G__6322 = (i__6090_6290 + (1));
seq__6087_6287 = G__6319;
chunk__6088_6288 = G__6320;
count__6089_6289 = G__6321;
i__6090_6290 = G__6322;
continue;
} else {
var temp__5804__auto___6323__$1 = cljs.core.seq.call(null,seq__6087_6287);
if(temp__5804__auto___6323__$1){
var seq__6087_6324__$1 = temp__5804__auto___6323__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6087_6324__$1)){
var c__5568__auto___6325 = cljs.core.chunk_first.call(null,seq__6087_6324__$1);
var G__6326 = cljs.core.chunk_rest.call(null,seq__6087_6324__$1);
var G__6327 = c__5568__auto___6325;
var G__6328 = cljs.core.count.call(null,c__5568__auto___6325);
var G__6329 = (0);
seq__6087_6287 = G__6326;
chunk__6088_6288 = G__6327;
count__6089_6289 = G__6328;
i__6090_6290 = G__6329;
continue;
} else {
var vec__6148_6330 = cljs.core.first.call(null,seq__6087_6324__$1);
var line_6331 = cljs.core.nth.call(null,vec__6148_6330,(0),null);
var cols_6332 = cljs.core.nth.call(null,vec__6148_6330,(1),null);
var seq__6151_6333 = cljs.core.seq.call(null,cols_6332);
var chunk__6152_6334 = null;
var count__6153_6335 = (0);
var i__6154_6336 = (0);
while(true){
if((i__6154_6336 < count__6153_6335)){
var vec__6161_6337 = cljs.core._nth.call(null,chunk__6152_6334,i__6154_6336);
var col_6338 = cljs.core.nth.call(null,vec__6161_6337,(0),null);
var infos_6339 = cljs.core.nth.call(null,vec__6161_6337,(1),null);
encode_cols.call(null,infos_6339,source_idx_6283,line_6331,col_6338);


var G__6340 = seq__6151_6333;
var G__6341 = chunk__6152_6334;
var G__6342 = count__6153_6335;
var G__6343 = (i__6154_6336 + (1));
seq__6151_6333 = G__6340;
chunk__6152_6334 = G__6341;
count__6153_6335 = G__6342;
i__6154_6336 = G__6343;
continue;
} else {
var temp__5804__auto___6344__$2 = cljs.core.seq.call(null,seq__6151_6333);
if(temp__5804__auto___6344__$2){
var seq__6151_6345__$1 = temp__5804__auto___6344__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6151_6345__$1)){
var c__5568__auto___6346 = cljs.core.chunk_first.call(null,seq__6151_6345__$1);
var G__6347 = cljs.core.chunk_rest.call(null,seq__6151_6345__$1);
var G__6348 = c__5568__auto___6346;
var G__6349 = cljs.core.count.call(null,c__5568__auto___6346);
var G__6350 = (0);
seq__6151_6333 = G__6347;
chunk__6152_6334 = G__6348;
count__6153_6335 = G__6349;
i__6154_6336 = G__6350;
continue;
} else {
var vec__6164_6351 = cljs.core.first.call(null,seq__6151_6345__$1);
var col_6352 = cljs.core.nth.call(null,vec__6164_6351,(0),null);
var infos_6353 = cljs.core.nth.call(null,vec__6164_6351,(1),null);
encode_cols.call(null,infos_6353,source_idx_6283,line_6331,col_6352);


var G__6354 = cljs.core.next.call(null,seq__6151_6345__$1);
var G__6355 = null;
var G__6356 = (0);
var G__6357 = (0);
seq__6151_6333 = G__6354;
chunk__6152_6334 = G__6355;
count__6153_6335 = G__6356;
i__6154_6336 = G__6357;
continue;
}
} else {
}
}
break;
}


var G__6358 = cljs.core.next.call(null,seq__6087_6324__$1);
var G__6359 = null;
var G__6360 = (0);
var G__6361 = (0);
seq__6087_6287 = G__6358;
chunk__6088_6288 = G__6359;
count__6089_6289 = G__6360;
i__6090_6290 = G__6361;
continue;
}
} else {
}
}
break;
}


var G__6362 = cljs.core.next.call(null,seq__5819_6276__$1);
var G__6363 = null;
var G__6364 = (0);
var G__6365 = (0);
seq__5819_6187 = G__6362;
chunk__5820_6188 = G__6363;
count__5821_6189 = G__6364;
i__5822_6190 = G__6365;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__6167 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__5812_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__5812_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__5813_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__5813_SHARP_,/\//));
}));
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,(function (p1__5814_SHARP_){
return clojure.string.join.call(null,",",p1__5814_SHARP_);
}),cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__6168 = G__6167;
cljs.source_map.goog$module$goog$object.set.call(null,G__6168,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__6168;
} else {
return G__6167;
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
var vec__6366 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__6366,(0),null);
var col_map = cljs.core.nth.call(null,vec__6366,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__6369 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__6369,(0),null);
var infos = cljs.core.nth.call(null,vec__6369,(1),null);
var G__6374 = cljs.core.next.call(null,col_map_seq);
var G__6375 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__6369,col,infos,vec__6366,line,col_map){
return (function (v,p__6372){
var map__6373 = p__6372;
var map__6373__$1 = cljs.core.__destructure_map.call(null,map__6373);
var gline = cljs.core.get.call(null,map__6373__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__6373__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__6369,col,infos,vec__6366,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__6374;
new_cols = G__6375;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__6376 = cljs.core.next.call(null,line_map_seq);
var G__6377 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__6376;
new_lines = G__6377;
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
var seq__6378_6586 = cljs.core.seq.call(null,reverse_map);
var chunk__6379_6587 = null;
var count__6380_6588 = (0);
var i__6381_6589 = (0);
while(true){
if((i__6381_6589 < count__6380_6588)){
var vec__6484_6590 = cljs.core._nth.call(null,chunk__6379_6587,i__6381_6589);
var line_6591 = cljs.core.nth.call(null,vec__6484_6590,(0),null);
var columns_6592 = cljs.core.nth.call(null,vec__6484_6590,(1),null);
var seq__6487_6593 = cljs.core.seq.call(null,columns_6592);
var chunk__6488_6594 = null;
var count__6489_6595 = (0);
var i__6490_6596 = (0);
while(true){
if((i__6490_6596 < count__6489_6595)){
var vec__6513_6597 = cljs.core._nth.call(null,chunk__6488_6594,i__6490_6596);
var column_6598 = cljs.core.nth.call(null,vec__6513_6597,(0),null);
var column_info_6599 = cljs.core.nth.call(null,vec__6513_6597,(1),null);
var seq__6516_6600 = cljs.core.seq.call(null,column_info_6599);
var chunk__6517_6601 = null;
var count__6518_6602 = (0);
var i__6519_6603 = (0);
while(true){
if((i__6519_6603 < count__6518_6602)){
var map__6522_6604 = cljs.core._nth.call(null,chunk__6517_6601,i__6519_6603);
var map__6522_6605__$1 = cljs.core.__destructure_map.call(null,map__6522_6604);
var gline_6606 = cljs.core.get.call(null,map__6522_6605__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_6607 = cljs.core.get.call(null,map__6522_6605__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_6608 = cljs.core.get.call(null,map__6522_6605__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_6606], null),cljs.core.fnil.call(null,((function (seq__6516_6600,chunk__6517_6601,count__6518_6602,i__6519_6603,seq__6487_6593,chunk__6488_6594,count__6489_6595,i__6490_6596,seq__6378_6586,chunk__6379_6587,count__6380_6588,i__6381_6589,map__6522_6604,map__6522_6605__$1,gline_6606,gcol_6607,name_6608,vec__6513_6597,column_6598,column_info_6599,vec__6484_6590,line_6591,columns_6592,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_6607], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_6591,new cljs.core.Keyword(null,"col","col",-1959363084),column_6598,new cljs.core.Keyword(null,"name","name",1843675177),name_6608], null));
});})(seq__6516_6600,chunk__6517_6601,count__6518_6602,i__6519_6603,seq__6487_6593,chunk__6488_6594,count__6489_6595,i__6490_6596,seq__6378_6586,chunk__6379_6587,count__6380_6588,i__6381_6589,map__6522_6604,map__6522_6605__$1,gline_6606,gcol_6607,name_6608,vec__6513_6597,column_6598,column_info_6599,vec__6484_6590,line_6591,columns_6592,inverted))
,cljs.core.sorted_map.call(null)));


var G__6609 = seq__6516_6600;
var G__6610 = chunk__6517_6601;
var G__6611 = count__6518_6602;
var G__6612 = (i__6519_6603 + (1));
seq__6516_6600 = G__6609;
chunk__6517_6601 = G__6610;
count__6518_6602 = G__6611;
i__6519_6603 = G__6612;
continue;
} else {
var temp__5804__auto___6613 = cljs.core.seq.call(null,seq__6516_6600);
if(temp__5804__auto___6613){
var seq__6516_6614__$1 = temp__5804__auto___6613;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6516_6614__$1)){
var c__5568__auto___6615 = cljs.core.chunk_first.call(null,seq__6516_6614__$1);
var G__6616 = cljs.core.chunk_rest.call(null,seq__6516_6614__$1);
var G__6617 = c__5568__auto___6615;
var G__6618 = cljs.core.count.call(null,c__5568__auto___6615);
var G__6619 = (0);
seq__6516_6600 = G__6616;
chunk__6517_6601 = G__6617;
count__6518_6602 = G__6618;
i__6519_6603 = G__6619;
continue;
} else {
var map__6523_6620 = cljs.core.first.call(null,seq__6516_6614__$1);
var map__6523_6621__$1 = cljs.core.__destructure_map.call(null,map__6523_6620);
var gline_6622 = cljs.core.get.call(null,map__6523_6621__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_6623 = cljs.core.get.call(null,map__6523_6621__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_6624 = cljs.core.get.call(null,map__6523_6621__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_6622], null),cljs.core.fnil.call(null,((function (seq__6516_6600,chunk__6517_6601,count__6518_6602,i__6519_6603,seq__6487_6593,chunk__6488_6594,count__6489_6595,i__6490_6596,seq__6378_6586,chunk__6379_6587,count__6380_6588,i__6381_6589,map__6523_6620,map__6523_6621__$1,gline_6622,gcol_6623,name_6624,seq__6516_6614__$1,temp__5804__auto___6613,vec__6513_6597,column_6598,column_info_6599,vec__6484_6590,line_6591,columns_6592,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_6623], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_6591,new cljs.core.Keyword(null,"col","col",-1959363084),column_6598,new cljs.core.Keyword(null,"name","name",1843675177),name_6624], null));
});})(seq__6516_6600,chunk__6517_6601,count__6518_6602,i__6519_6603,seq__6487_6593,chunk__6488_6594,count__6489_6595,i__6490_6596,seq__6378_6586,chunk__6379_6587,count__6380_6588,i__6381_6589,map__6523_6620,map__6523_6621__$1,gline_6622,gcol_6623,name_6624,seq__6516_6614__$1,temp__5804__auto___6613,vec__6513_6597,column_6598,column_info_6599,vec__6484_6590,line_6591,columns_6592,inverted))
,cljs.core.sorted_map.call(null)));


var G__6625 = cljs.core.next.call(null,seq__6516_6614__$1);
var G__6626 = null;
var G__6627 = (0);
var G__6628 = (0);
seq__6516_6600 = G__6625;
chunk__6517_6601 = G__6626;
count__6518_6602 = G__6627;
i__6519_6603 = G__6628;
continue;
}
} else {
}
}
break;
}


var G__6629 = seq__6487_6593;
var G__6630 = chunk__6488_6594;
var G__6631 = count__6489_6595;
var G__6632 = (i__6490_6596 + (1));
seq__6487_6593 = G__6629;
chunk__6488_6594 = G__6630;
count__6489_6595 = G__6631;
i__6490_6596 = G__6632;
continue;
} else {
var temp__5804__auto___6633 = cljs.core.seq.call(null,seq__6487_6593);
if(temp__5804__auto___6633){
var seq__6487_6634__$1 = temp__5804__auto___6633;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6487_6634__$1)){
var c__5568__auto___6635 = cljs.core.chunk_first.call(null,seq__6487_6634__$1);
var G__6636 = cljs.core.chunk_rest.call(null,seq__6487_6634__$1);
var G__6637 = c__5568__auto___6635;
var G__6638 = cljs.core.count.call(null,c__5568__auto___6635);
var G__6639 = (0);
seq__6487_6593 = G__6636;
chunk__6488_6594 = G__6637;
count__6489_6595 = G__6638;
i__6490_6596 = G__6639;
continue;
} else {
var vec__6524_6640 = cljs.core.first.call(null,seq__6487_6634__$1);
var column_6641 = cljs.core.nth.call(null,vec__6524_6640,(0),null);
var column_info_6642 = cljs.core.nth.call(null,vec__6524_6640,(1),null);
var seq__6527_6643 = cljs.core.seq.call(null,column_info_6642);
var chunk__6528_6644 = null;
var count__6529_6645 = (0);
var i__6530_6646 = (0);
while(true){
if((i__6530_6646 < count__6529_6645)){
var map__6533_6647 = cljs.core._nth.call(null,chunk__6528_6644,i__6530_6646);
var map__6533_6648__$1 = cljs.core.__destructure_map.call(null,map__6533_6647);
var gline_6649 = cljs.core.get.call(null,map__6533_6648__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_6650 = cljs.core.get.call(null,map__6533_6648__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_6651 = cljs.core.get.call(null,map__6533_6648__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_6649], null),cljs.core.fnil.call(null,((function (seq__6527_6643,chunk__6528_6644,count__6529_6645,i__6530_6646,seq__6487_6593,chunk__6488_6594,count__6489_6595,i__6490_6596,seq__6378_6586,chunk__6379_6587,count__6380_6588,i__6381_6589,map__6533_6647,map__6533_6648__$1,gline_6649,gcol_6650,name_6651,vec__6524_6640,column_6641,column_info_6642,seq__6487_6634__$1,temp__5804__auto___6633,vec__6484_6590,line_6591,columns_6592,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_6650], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_6591,new cljs.core.Keyword(null,"col","col",-1959363084),column_6641,new cljs.core.Keyword(null,"name","name",1843675177),name_6651], null));
});})(seq__6527_6643,chunk__6528_6644,count__6529_6645,i__6530_6646,seq__6487_6593,chunk__6488_6594,count__6489_6595,i__6490_6596,seq__6378_6586,chunk__6379_6587,count__6380_6588,i__6381_6589,map__6533_6647,map__6533_6648__$1,gline_6649,gcol_6650,name_6651,vec__6524_6640,column_6641,column_info_6642,seq__6487_6634__$1,temp__5804__auto___6633,vec__6484_6590,line_6591,columns_6592,inverted))
,cljs.core.sorted_map.call(null)));


var G__6652 = seq__6527_6643;
var G__6653 = chunk__6528_6644;
var G__6654 = count__6529_6645;
var G__6655 = (i__6530_6646 + (1));
seq__6527_6643 = G__6652;
chunk__6528_6644 = G__6653;
count__6529_6645 = G__6654;
i__6530_6646 = G__6655;
continue;
} else {
var temp__5804__auto___6656__$1 = cljs.core.seq.call(null,seq__6527_6643);
if(temp__5804__auto___6656__$1){
var seq__6527_6657__$1 = temp__5804__auto___6656__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6527_6657__$1)){
var c__5568__auto___6658 = cljs.core.chunk_first.call(null,seq__6527_6657__$1);
var G__6659 = cljs.core.chunk_rest.call(null,seq__6527_6657__$1);
var G__6660 = c__5568__auto___6658;
var G__6661 = cljs.core.count.call(null,c__5568__auto___6658);
var G__6662 = (0);
seq__6527_6643 = G__6659;
chunk__6528_6644 = G__6660;
count__6529_6645 = G__6661;
i__6530_6646 = G__6662;
continue;
} else {
var map__6534_6663 = cljs.core.first.call(null,seq__6527_6657__$1);
var map__6534_6664__$1 = cljs.core.__destructure_map.call(null,map__6534_6663);
var gline_6665 = cljs.core.get.call(null,map__6534_6664__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_6666 = cljs.core.get.call(null,map__6534_6664__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_6667 = cljs.core.get.call(null,map__6534_6664__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_6665], null),cljs.core.fnil.call(null,((function (seq__6527_6643,chunk__6528_6644,count__6529_6645,i__6530_6646,seq__6487_6593,chunk__6488_6594,count__6489_6595,i__6490_6596,seq__6378_6586,chunk__6379_6587,count__6380_6588,i__6381_6589,map__6534_6663,map__6534_6664__$1,gline_6665,gcol_6666,name_6667,seq__6527_6657__$1,temp__5804__auto___6656__$1,vec__6524_6640,column_6641,column_info_6642,seq__6487_6634__$1,temp__5804__auto___6633,vec__6484_6590,line_6591,columns_6592,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_6666], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_6591,new cljs.core.Keyword(null,"col","col",-1959363084),column_6641,new cljs.core.Keyword(null,"name","name",1843675177),name_6667], null));
});})(seq__6527_6643,chunk__6528_6644,count__6529_6645,i__6530_6646,seq__6487_6593,chunk__6488_6594,count__6489_6595,i__6490_6596,seq__6378_6586,chunk__6379_6587,count__6380_6588,i__6381_6589,map__6534_6663,map__6534_6664__$1,gline_6665,gcol_6666,name_6667,seq__6527_6657__$1,temp__5804__auto___6656__$1,vec__6524_6640,column_6641,column_info_6642,seq__6487_6634__$1,temp__5804__auto___6633,vec__6484_6590,line_6591,columns_6592,inverted))
,cljs.core.sorted_map.call(null)));


var G__6668 = cljs.core.next.call(null,seq__6527_6657__$1);
var G__6669 = null;
var G__6670 = (0);
var G__6671 = (0);
seq__6527_6643 = G__6668;
chunk__6528_6644 = G__6669;
count__6529_6645 = G__6670;
i__6530_6646 = G__6671;
continue;
}
} else {
}
}
break;
}


var G__6672 = cljs.core.next.call(null,seq__6487_6634__$1);
var G__6673 = null;
var G__6674 = (0);
var G__6675 = (0);
seq__6487_6593 = G__6672;
chunk__6488_6594 = G__6673;
count__6489_6595 = G__6674;
i__6490_6596 = G__6675;
continue;
}
} else {
}
}
break;
}


var G__6676 = seq__6378_6586;
var G__6677 = chunk__6379_6587;
var G__6678 = count__6380_6588;
var G__6679 = (i__6381_6589 + (1));
seq__6378_6586 = G__6676;
chunk__6379_6587 = G__6677;
count__6380_6588 = G__6678;
i__6381_6589 = G__6679;
continue;
} else {
var temp__5804__auto___6680 = cljs.core.seq.call(null,seq__6378_6586);
if(temp__5804__auto___6680){
var seq__6378_6681__$1 = temp__5804__auto___6680;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6378_6681__$1)){
var c__5568__auto___6682 = cljs.core.chunk_first.call(null,seq__6378_6681__$1);
var G__6683 = cljs.core.chunk_rest.call(null,seq__6378_6681__$1);
var G__6684 = c__5568__auto___6682;
var G__6685 = cljs.core.count.call(null,c__5568__auto___6682);
var G__6686 = (0);
seq__6378_6586 = G__6683;
chunk__6379_6587 = G__6684;
count__6380_6588 = G__6685;
i__6381_6589 = G__6686;
continue;
} else {
var vec__6535_6687 = cljs.core.first.call(null,seq__6378_6681__$1);
var line_6688 = cljs.core.nth.call(null,vec__6535_6687,(0),null);
var columns_6689 = cljs.core.nth.call(null,vec__6535_6687,(1),null);
var seq__6538_6690 = cljs.core.seq.call(null,columns_6689);
var chunk__6539_6691 = null;
var count__6540_6692 = (0);
var i__6541_6693 = (0);
while(true){
if((i__6541_6693 < count__6540_6692)){
var vec__6564_6694 = cljs.core._nth.call(null,chunk__6539_6691,i__6541_6693);
var column_6695 = cljs.core.nth.call(null,vec__6564_6694,(0),null);
var column_info_6696 = cljs.core.nth.call(null,vec__6564_6694,(1),null);
var seq__6567_6697 = cljs.core.seq.call(null,column_info_6696);
var chunk__6568_6698 = null;
var count__6569_6699 = (0);
var i__6570_6700 = (0);
while(true){
if((i__6570_6700 < count__6569_6699)){
var map__6573_6701 = cljs.core._nth.call(null,chunk__6568_6698,i__6570_6700);
var map__6573_6702__$1 = cljs.core.__destructure_map.call(null,map__6573_6701);
var gline_6703 = cljs.core.get.call(null,map__6573_6702__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_6704 = cljs.core.get.call(null,map__6573_6702__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_6705 = cljs.core.get.call(null,map__6573_6702__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_6703], null),cljs.core.fnil.call(null,((function (seq__6567_6697,chunk__6568_6698,count__6569_6699,i__6570_6700,seq__6538_6690,chunk__6539_6691,count__6540_6692,i__6541_6693,seq__6378_6586,chunk__6379_6587,count__6380_6588,i__6381_6589,map__6573_6701,map__6573_6702__$1,gline_6703,gcol_6704,name_6705,vec__6564_6694,column_6695,column_info_6696,vec__6535_6687,line_6688,columns_6689,seq__6378_6681__$1,temp__5804__auto___6680,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_6704], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_6688,new cljs.core.Keyword(null,"col","col",-1959363084),column_6695,new cljs.core.Keyword(null,"name","name",1843675177),name_6705], null));
});})(seq__6567_6697,chunk__6568_6698,count__6569_6699,i__6570_6700,seq__6538_6690,chunk__6539_6691,count__6540_6692,i__6541_6693,seq__6378_6586,chunk__6379_6587,count__6380_6588,i__6381_6589,map__6573_6701,map__6573_6702__$1,gline_6703,gcol_6704,name_6705,vec__6564_6694,column_6695,column_info_6696,vec__6535_6687,line_6688,columns_6689,seq__6378_6681__$1,temp__5804__auto___6680,inverted))
,cljs.core.sorted_map.call(null)));


var G__6706 = seq__6567_6697;
var G__6707 = chunk__6568_6698;
var G__6708 = count__6569_6699;
var G__6709 = (i__6570_6700 + (1));
seq__6567_6697 = G__6706;
chunk__6568_6698 = G__6707;
count__6569_6699 = G__6708;
i__6570_6700 = G__6709;
continue;
} else {
var temp__5804__auto___6710__$1 = cljs.core.seq.call(null,seq__6567_6697);
if(temp__5804__auto___6710__$1){
var seq__6567_6711__$1 = temp__5804__auto___6710__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6567_6711__$1)){
var c__5568__auto___6712 = cljs.core.chunk_first.call(null,seq__6567_6711__$1);
var G__6713 = cljs.core.chunk_rest.call(null,seq__6567_6711__$1);
var G__6714 = c__5568__auto___6712;
var G__6715 = cljs.core.count.call(null,c__5568__auto___6712);
var G__6716 = (0);
seq__6567_6697 = G__6713;
chunk__6568_6698 = G__6714;
count__6569_6699 = G__6715;
i__6570_6700 = G__6716;
continue;
} else {
var map__6574_6717 = cljs.core.first.call(null,seq__6567_6711__$1);
var map__6574_6718__$1 = cljs.core.__destructure_map.call(null,map__6574_6717);
var gline_6719 = cljs.core.get.call(null,map__6574_6718__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_6720 = cljs.core.get.call(null,map__6574_6718__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_6721 = cljs.core.get.call(null,map__6574_6718__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_6719], null),cljs.core.fnil.call(null,((function (seq__6567_6697,chunk__6568_6698,count__6569_6699,i__6570_6700,seq__6538_6690,chunk__6539_6691,count__6540_6692,i__6541_6693,seq__6378_6586,chunk__6379_6587,count__6380_6588,i__6381_6589,map__6574_6717,map__6574_6718__$1,gline_6719,gcol_6720,name_6721,seq__6567_6711__$1,temp__5804__auto___6710__$1,vec__6564_6694,column_6695,column_info_6696,vec__6535_6687,line_6688,columns_6689,seq__6378_6681__$1,temp__5804__auto___6680,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_6720], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_6688,new cljs.core.Keyword(null,"col","col",-1959363084),column_6695,new cljs.core.Keyword(null,"name","name",1843675177),name_6721], null));
});})(seq__6567_6697,chunk__6568_6698,count__6569_6699,i__6570_6700,seq__6538_6690,chunk__6539_6691,count__6540_6692,i__6541_6693,seq__6378_6586,chunk__6379_6587,count__6380_6588,i__6381_6589,map__6574_6717,map__6574_6718__$1,gline_6719,gcol_6720,name_6721,seq__6567_6711__$1,temp__5804__auto___6710__$1,vec__6564_6694,column_6695,column_info_6696,vec__6535_6687,line_6688,columns_6689,seq__6378_6681__$1,temp__5804__auto___6680,inverted))
,cljs.core.sorted_map.call(null)));


var G__6722 = cljs.core.next.call(null,seq__6567_6711__$1);
var G__6723 = null;
var G__6724 = (0);
var G__6725 = (0);
seq__6567_6697 = G__6722;
chunk__6568_6698 = G__6723;
count__6569_6699 = G__6724;
i__6570_6700 = G__6725;
continue;
}
} else {
}
}
break;
}


var G__6726 = seq__6538_6690;
var G__6727 = chunk__6539_6691;
var G__6728 = count__6540_6692;
var G__6729 = (i__6541_6693 + (1));
seq__6538_6690 = G__6726;
chunk__6539_6691 = G__6727;
count__6540_6692 = G__6728;
i__6541_6693 = G__6729;
continue;
} else {
var temp__5804__auto___6730__$1 = cljs.core.seq.call(null,seq__6538_6690);
if(temp__5804__auto___6730__$1){
var seq__6538_6731__$1 = temp__5804__auto___6730__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6538_6731__$1)){
var c__5568__auto___6732 = cljs.core.chunk_first.call(null,seq__6538_6731__$1);
var G__6733 = cljs.core.chunk_rest.call(null,seq__6538_6731__$1);
var G__6734 = c__5568__auto___6732;
var G__6735 = cljs.core.count.call(null,c__5568__auto___6732);
var G__6736 = (0);
seq__6538_6690 = G__6733;
chunk__6539_6691 = G__6734;
count__6540_6692 = G__6735;
i__6541_6693 = G__6736;
continue;
} else {
var vec__6575_6737 = cljs.core.first.call(null,seq__6538_6731__$1);
var column_6738 = cljs.core.nth.call(null,vec__6575_6737,(0),null);
var column_info_6739 = cljs.core.nth.call(null,vec__6575_6737,(1),null);
var seq__6578_6740 = cljs.core.seq.call(null,column_info_6739);
var chunk__6579_6741 = null;
var count__6580_6742 = (0);
var i__6581_6743 = (0);
while(true){
if((i__6581_6743 < count__6580_6742)){
var map__6584_6744 = cljs.core._nth.call(null,chunk__6579_6741,i__6581_6743);
var map__6584_6745__$1 = cljs.core.__destructure_map.call(null,map__6584_6744);
var gline_6746 = cljs.core.get.call(null,map__6584_6745__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_6747 = cljs.core.get.call(null,map__6584_6745__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_6748 = cljs.core.get.call(null,map__6584_6745__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_6746], null),cljs.core.fnil.call(null,((function (seq__6578_6740,chunk__6579_6741,count__6580_6742,i__6581_6743,seq__6538_6690,chunk__6539_6691,count__6540_6692,i__6541_6693,seq__6378_6586,chunk__6379_6587,count__6380_6588,i__6381_6589,map__6584_6744,map__6584_6745__$1,gline_6746,gcol_6747,name_6748,vec__6575_6737,column_6738,column_info_6739,seq__6538_6731__$1,temp__5804__auto___6730__$1,vec__6535_6687,line_6688,columns_6689,seq__6378_6681__$1,temp__5804__auto___6680,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_6747], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_6688,new cljs.core.Keyword(null,"col","col",-1959363084),column_6738,new cljs.core.Keyword(null,"name","name",1843675177),name_6748], null));
});})(seq__6578_6740,chunk__6579_6741,count__6580_6742,i__6581_6743,seq__6538_6690,chunk__6539_6691,count__6540_6692,i__6541_6693,seq__6378_6586,chunk__6379_6587,count__6380_6588,i__6381_6589,map__6584_6744,map__6584_6745__$1,gline_6746,gcol_6747,name_6748,vec__6575_6737,column_6738,column_info_6739,seq__6538_6731__$1,temp__5804__auto___6730__$1,vec__6535_6687,line_6688,columns_6689,seq__6378_6681__$1,temp__5804__auto___6680,inverted))
,cljs.core.sorted_map.call(null)));


var G__6749 = seq__6578_6740;
var G__6750 = chunk__6579_6741;
var G__6751 = count__6580_6742;
var G__6752 = (i__6581_6743 + (1));
seq__6578_6740 = G__6749;
chunk__6579_6741 = G__6750;
count__6580_6742 = G__6751;
i__6581_6743 = G__6752;
continue;
} else {
var temp__5804__auto___6753__$2 = cljs.core.seq.call(null,seq__6578_6740);
if(temp__5804__auto___6753__$2){
var seq__6578_6754__$1 = temp__5804__auto___6753__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6578_6754__$1)){
var c__5568__auto___6755 = cljs.core.chunk_first.call(null,seq__6578_6754__$1);
var G__6756 = cljs.core.chunk_rest.call(null,seq__6578_6754__$1);
var G__6757 = c__5568__auto___6755;
var G__6758 = cljs.core.count.call(null,c__5568__auto___6755);
var G__6759 = (0);
seq__6578_6740 = G__6756;
chunk__6579_6741 = G__6757;
count__6580_6742 = G__6758;
i__6581_6743 = G__6759;
continue;
} else {
var map__6585_6760 = cljs.core.first.call(null,seq__6578_6754__$1);
var map__6585_6761__$1 = cljs.core.__destructure_map.call(null,map__6585_6760);
var gline_6762 = cljs.core.get.call(null,map__6585_6761__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_6763 = cljs.core.get.call(null,map__6585_6761__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_6764 = cljs.core.get.call(null,map__6585_6761__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_6762], null),cljs.core.fnil.call(null,((function (seq__6578_6740,chunk__6579_6741,count__6580_6742,i__6581_6743,seq__6538_6690,chunk__6539_6691,count__6540_6692,i__6541_6693,seq__6378_6586,chunk__6379_6587,count__6380_6588,i__6381_6589,map__6585_6760,map__6585_6761__$1,gline_6762,gcol_6763,name_6764,seq__6578_6754__$1,temp__5804__auto___6753__$2,vec__6575_6737,column_6738,column_info_6739,seq__6538_6731__$1,temp__5804__auto___6730__$1,vec__6535_6687,line_6688,columns_6689,seq__6378_6681__$1,temp__5804__auto___6680,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_6763], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_6688,new cljs.core.Keyword(null,"col","col",-1959363084),column_6738,new cljs.core.Keyword(null,"name","name",1843675177),name_6764], null));
});})(seq__6578_6740,chunk__6579_6741,count__6580_6742,i__6581_6743,seq__6538_6690,chunk__6539_6691,count__6540_6692,i__6541_6693,seq__6378_6586,chunk__6379_6587,count__6380_6588,i__6381_6589,map__6585_6760,map__6585_6761__$1,gline_6762,gcol_6763,name_6764,seq__6578_6754__$1,temp__5804__auto___6753__$2,vec__6575_6737,column_6738,column_info_6739,seq__6538_6731__$1,temp__5804__auto___6730__$1,vec__6535_6687,line_6688,columns_6689,seq__6378_6681__$1,temp__5804__auto___6680,inverted))
,cljs.core.sorted_map.call(null)));


var G__6765 = cljs.core.next.call(null,seq__6578_6754__$1);
var G__6766 = null;
var G__6767 = (0);
var G__6768 = (0);
seq__6578_6740 = G__6765;
chunk__6579_6741 = G__6766;
count__6580_6742 = G__6767;
i__6581_6743 = G__6768;
continue;
}
} else {
}
}
break;
}


var G__6769 = cljs.core.next.call(null,seq__6538_6731__$1);
var G__6770 = null;
var G__6771 = (0);
var G__6772 = (0);
seq__6538_6690 = G__6769;
chunk__6539_6691 = G__6770;
count__6540_6692 = G__6771;
i__6541_6693 = G__6772;
continue;
}
} else {
}
}
break;
}


var G__6773 = cljs.core.next.call(null,seq__6378_6681__$1);
var G__6774 = null;
var G__6775 = (0);
var G__6776 = (0);
seq__6378_6586 = G__6773;
chunk__6379_6587 = G__6774;
count__6380_6588 = G__6775;
i__6381_6589 = G__6776;
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
