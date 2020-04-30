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
return cljs.core.reduce.call(null,(function (m,p__5637){
var vec__5638 = p__5637;
var i = cljs.core.nth.call(null,vec__5638,(0),null);
var v = cljs.core.nth.call(null,vec__5638,(1),null);
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
var vec__5641 = seg;
var gcol = cljs.core.nth.call(null,vec__5641,(0),null);
var source = cljs.core.nth.call(null,vec__5641,(1),null);
var line = cljs.core.nth.call(null,vec__5641,(2),null);
var col = cljs.core.nth.call(null,vec__5641,(3),null);
var name = cljs.core.nth.call(null,vec__5641,(4),null);
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
var vec__5644 = seg;
var gcol = cljs.core.nth.call(null,vec__5644,(0),null);
var source = cljs.core.nth.call(null,vec__5644,(1),null);
var line = cljs.core.nth.call(null,vec__5644,(2),null);
var col = cljs.core.nth.call(null,vec__5644,(3),null);
var name = cljs.core.nth.call(null,vec__5644,(4),null);
var vec__5647 = relseg;
var rgcol = cljs.core.nth.call(null,vec__5647,(0),null);
var rsource = cljs.core.nth.call(null,vec__5647,(1),null);
var rline = cljs.core.nth.call(null,vec__5647,(2),null);
var rcol = cljs.core.nth.call(null,vec__5647,(3),null);
var rname = cljs.core.nth.call(null,vec__5647,(4),null);
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
var map__5650 = segmap;
var map__5650__$1 = (((((!((map__5650 == null))))?(((((map__5650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5650):map__5650);
var gcol = cljs.core.get.call(null,map__5650__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__5650__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__5650__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__5650__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__5650__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__5650,map__5650__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__5650,map__5650__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__5650,map__5650__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__5650,map__5650__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__5650,map__5650__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__5650,map__5650__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__5653 = arguments.length;
switch (G__5653) {
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
var vec__5654 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__5658 = cljs.core.next.call(null,segs__$1);
var G__5659 = nrelseg;
var G__5660 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__5658;
relseg__$1 = G__5659;
result__$1 = G__5660;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__5654,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__5654,(1),null);
var G__5661 = (gline + (1));
var G__5662 = cljs.core.next.call(null,lines__$1);
var G__5663 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__5664 = result__$1;
gline = G__5661;
lines__$1 = G__5662;
relseg = G__5663;
result = G__5664;
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
var map__5666 = segmap;
var map__5666__$1 = (((((!((map__5666 == null))))?(((((map__5666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5666):map__5666);
var gcol = cljs.core.get.call(null,map__5666__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__5666__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__5666__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__5666__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__5666__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__5666,map__5666__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__5666,map__5666__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__5665_SHARP_){
return cljs.core.conj.call(null,p1__5665_SHARP_,d__$1);
});})(map__5666,map__5666__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__5666,map__5666__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__5669 = arguments.length;
switch (G__5669) {
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
var vec__5670 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__5674 = cljs.core.next.call(null,segs__$1);
var G__5675 = nrelseg;
var G__5676 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__5674;
relseg__$1 = G__5675;
result__$1 = G__5676;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__5670,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__5670,(1),null);
var G__5677 = (gline + (1));
var G__5678 = cljs.core.next.call(null,lines__$1);
var G__5679 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__5680 = result__$1;
gline = G__5677;
lines__$1 = G__5678;
relseg = G__5679;
result = G__5680;
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
return (function (p__5681){
var vec__5682 = p__5681;
var _ = cljs.core.nth.call(null,vec__5682,(0),null);
var source = cljs.core.nth.call(null,vec__5682,(1),null);
var line = cljs.core.nth.call(null,vec__5682,(2),null);
var col = cljs.core.nth.call(null,vec__5682,(3),null);
var name = cljs.core.nth.call(null,vec__5682,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__5685){
var vec__5686 = p__5685;
var gcol = cljs.core.nth.call(null,vec__5686,(0),null);
var sidx = cljs.core.nth.call(null,vec__5686,(1),null);
var line = cljs.core.nth.call(null,vec__5686,(2),null);
var col = cljs.core.nth.call(null,vec__5686,(3),null);
var name = cljs.core.nth.call(null,vec__5686,(4),null);
var seg = vec__5686;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__5686,gcol,sidx,line,col,name,seg,relseg){
return (function (p__5689){
var vec__5690 = p__5689;
var _ = cljs.core.nth.call(null,vec__5690,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__5690,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__5690,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__5690,(3),null);
var lname = cljs.core.nth.call(null,vec__5690,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__5686,gcol,sidx,line,col,name,seg,relseg))
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
var seq__5696 = cljs.core.seq.call(null,infos);
var chunk__5697 = null;
var count__5698 = (0);
var i__5699 = (0);
while(true){
if((i__5699 < count__5698)){
var info = cljs.core._nth.call(null,chunk__5697,i__5699);
var segv_5778 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_5779 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_5780 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_5779 > (lc_5780 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__5696,chunk__5697,count__5698,i__5699,segv_5778,gline_5779,lc_5780,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_5779 - (lc_5780 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_5778], null));
});})(seq__5696,chunk__5697,count__5698,i__5699,segv_5778,gline_5779,lc_5780,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__5696,chunk__5697,count__5698,i__5699,segv_5778,gline_5779,lc_5780,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5779], null),cljs.core.conj,segv_5778);
});})(seq__5696,chunk__5697,count__5698,i__5699,segv_5778,gline_5779,lc_5780,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__5781 = seq__5696;
var G__5782 = chunk__5697;
var G__5783 = count__5698;
var G__5784 = (i__5699 + (1));
seq__5696 = G__5781;
chunk__5697 = G__5782;
count__5698 = G__5783;
i__5699 = G__5784;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__5696);
if(temp__5735__auto__){
var seq__5696__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5696__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__5696__$1);
var G__5785 = cljs.core.chunk_rest.call(null,seq__5696__$1);
var G__5786 = c__4461__auto__;
var G__5787 = cljs.core.count.call(null,c__4461__auto__);
var G__5788 = (0);
seq__5696 = G__5785;
chunk__5697 = G__5786;
count__5698 = G__5787;
i__5699 = G__5788;
continue;
} else {
var info = cljs.core.first.call(null,seq__5696__$1);
var segv_5789 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_5790 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_5791 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_5790 > (lc_5791 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__5696,chunk__5697,count__5698,i__5699,segv_5789,gline_5790,lc_5791,info,seq__5696__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_5790 - (lc_5791 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_5789], null));
});})(seq__5696,chunk__5697,count__5698,i__5699,segv_5789,gline_5790,lc_5791,info,seq__5696__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__5696,chunk__5697,count__5698,i__5699,segv_5789,gline_5790,lc_5791,info,seq__5696__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5790], null),cljs.core.conj,segv_5789);
});})(seq__5696,chunk__5697,count__5698,i__5699,segv_5789,gline_5790,lc_5791,info,seq__5696__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__5792 = cljs.core.next.call(null,seq__5696__$1);
var G__5793 = null;
var G__5794 = (0);
var G__5795 = (0);
seq__5696 = G__5792;
chunk__5697 = G__5793;
count__5698 = G__5794;
i__5699 = G__5795;
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
var seq__5700_5796 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__5701_5797 = null;
var count__5702_5798 = (0);
var i__5703_5799 = (0);
while(true){
if((i__5703_5799 < count__5702_5798)){
var vec__5704_5800 = cljs.core._nth.call(null,chunk__5701_5797,i__5703_5799);
var source_idx_5801 = cljs.core.nth.call(null,vec__5704_5800,(0),null);
var vec__5707_5802 = cljs.core.nth.call(null,vec__5704_5800,(1),null);
var __5803 = cljs.core.nth.call(null,vec__5707_5802,(0),null);
var lines_5804__$1 = cljs.core.nth.call(null,vec__5707_5802,(1),null);
var seq__5710_5805 = cljs.core.seq.call(null,lines_5804__$1);
var chunk__5711_5806 = null;
var count__5712_5807 = (0);
var i__5713_5808 = (0);
while(true){
if((i__5713_5808 < count__5712_5807)){
var vec__5714_5809 = cljs.core._nth.call(null,chunk__5711_5806,i__5713_5808);
var line_5810 = cljs.core.nth.call(null,vec__5714_5809,(0),null);
var cols_5811 = cljs.core.nth.call(null,vec__5714_5809,(1),null);
var seq__5717_5812 = cljs.core.seq.call(null,cols_5811);
var chunk__5718_5813 = null;
var count__5719_5814 = (0);
var i__5720_5815 = (0);
while(true){
if((i__5720_5815 < count__5719_5814)){
var vec__5721_5816 = cljs.core._nth.call(null,chunk__5718_5813,i__5720_5815);
var col_5817 = cljs.core.nth.call(null,vec__5721_5816,(0),null);
var infos_5818 = cljs.core.nth.call(null,vec__5721_5816,(1),null);
encode_cols.call(null,infos_5818,source_idx_5801,line_5810,col_5817);


var G__5819 = seq__5717_5812;
var G__5820 = chunk__5718_5813;
var G__5821 = count__5719_5814;
var G__5822 = (i__5720_5815 + (1));
seq__5717_5812 = G__5819;
chunk__5718_5813 = G__5820;
count__5719_5814 = G__5821;
i__5720_5815 = G__5822;
continue;
} else {
var temp__5735__auto___5823 = cljs.core.seq.call(null,seq__5717_5812);
if(temp__5735__auto___5823){
var seq__5717_5824__$1 = temp__5735__auto___5823;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5717_5824__$1)){
var c__4461__auto___5825 = cljs.core.chunk_first.call(null,seq__5717_5824__$1);
var G__5826 = cljs.core.chunk_rest.call(null,seq__5717_5824__$1);
var G__5827 = c__4461__auto___5825;
var G__5828 = cljs.core.count.call(null,c__4461__auto___5825);
var G__5829 = (0);
seq__5717_5812 = G__5826;
chunk__5718_5813 = G__5827;
count__5719_5814 = G__5828;
i__5720_5815 = G__5829;
continue;
} else {
var vec__5724_5830 = cljs.core.first.call(null,seq__5717_5824__$1);
var col_5831 = cljs.core.nth.call(null,vec__5724_5830,(0),null);
var infos_5832 = cljs.core.nth.call(null,vec__5724_5830,(1),null);
encode_cols.call(null,infos_5832,source_idx_5801,line_5810,col_5831);


var G__5833 = cljs.core.next.call(null,seq__5717_5824__$1);
var G__5834 = null;
var G__5835 = (0);
var G__5836 = (0);
seq__5717_5812 = G__5833;
chunk__5718_5813 = G__5834;
count__5719_5814 = G__5835;
i__5720_5815 = G__5836;
continue;
}
} else {
}
}
break;
}


var G__5837 = seq__5710_5805;
var G__5838 = chunk__5711_5806;
var G__5839 = count__5712_5807;
var G__5840 = (i__5713_5808 + (1));
seq__5710_5805 = G__5837;
chunk__5711_5806 = G__5838;
count__5712_5807 = G__5839;
i__5713_5808 = G__5840;
continue;
} else {
var temp__5735__auto___5841 = cljs.core.seq.call(null,seq__5710_5805);
if(temp__5735__auto___5841){
var seq__5710_5842__$1 = temp__5735__auto___5841;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5710_5842__$1)){
var c__4461__auto___5843 = cljs.core.chunk_first.call(null,seq__5710_5842__$1);
var G__5844 = cljs.core.chunk_rest.call(null,seq__5710_5842__$1);
var G__5845 = c__4461__auto___5843;
var G__5846 = cljs.core.count.call(null,c__4461__auto___5843);
var G__5847 = (0);
seq__5710_5805 = G__5844;
chunk__5711_5806 = G__5845;
count__5712_5807 = G__5846;
i__5713_5808 = G__5847;
continue;
} else {
var vec__5727_5848 = cljs.core.first.call(null,seq__5710_5842__$1);
var line_5849 = cljs.core.nth.call(null,vec__5727_5848,(0),null);
var cols_5850 = cljs.core.nth.call(null,vec__5727_5848,(1),null);
var seq__5730_5851 = cljs.core.seq.call(null,cols_5850);
var chunk__5731_5852 = null;
var count__5732_5853 = (0);
var i__5733_5854 = (0);
while(true){
if((i__5733_5854 < count__5732_5853)){
var vec__5734_5855 = cljs.core._nth.call(null,chunk__5731_5852,i__5733_5854);
var col_5856 = cljs.core.nth.call(null,vec__5734_5855,(0),null);
var infos_5857 = cljs.core.nth.call(null,vec__5734_5855,(1),null);
encode_cols.call(null,infos_5857,source_idx_5801,line_5849,col_5856);


var G__5858 = seq__5730_5851;
var G__5859 = chunk__5731_5852;
var G__5860 = count__5732_5853;
var G__5861 = (i__5733_5854 + (1));
seq__5730_5851 = G__5858;
chunk__5731_5852 = G__5859;
count__5732_5853 = G__5860;
i__5733_5854 = G__5861;
continue;
} else {
var temp__5735__auto___5862__$1 = cljs.core.seq.call(null,seq__5730_5851);
if(temp__5735__auto___5862__$1){
var seq__5730_5863__$1 = temp__5735__auto___5862__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5730_5863__$1)){
var c__4461__auto___5864 = cljs.core.chunk_first.call(null,seq__5730_5863__$1);
var G__5865 = cljs.core.chunk_rest.call(null,seq__5730_5863__$1);
var G__5866 = c__4461__auto___5864;
var G__5867 = cljs.core.count.call(null,c__4461__auto___5864);
var G__5868 = (0);
seq__5730_5851 = G__5865;
chunk__5731_5852 = G__5866;
count__5732_5853 = G__5867;
i__5733_5854 = G__5868;
continue;
} else {
var vec__5737_5869 = cljs.core.first.call(null,seq__5730_5863__$1);
var col_5870 = cljs.core.nth.call(null,vec__5737_5869,(0),null);
var infos_5871 = cljs.core.nth.call(null,vec__5737_5869,(1),null);
encode_cols.call(null,infos_5871,source_idx_5801,line_5849,col_5870);


var G__5872 = cljs.core.next.call(null,seq__5730_5863__$1);
var G__5873 = null;
var G__5874 = (0);
var G__5875 = (0);
seq__5730_5851 = G__5872;
chunk__5731_5852 = G__5873;
count__5732_5853 = G__5874;
i__5733_5854 = G__5875;
continue;
}
} else {
}
}
break;
}


var G__5876 = cljs.core.next.call(null,seq__5710_5842__$1);
var G__5877 = null;
var G__5878 = (0);
var G__5879 = (0);
seq__5710_5805 = G__5876;
chunk__5711_5806 = G__5877;
count__5712_5807 = G__5878;
i__5713_5808 = G__5879;
continue;
}
} else {
}
}
break;
}


var G__5880 = seq__5700_5796;
var G__5881 = chunk__5701_5797;
var G__5882 = count__5702_5798;
var G__5883 = (i__5703_5799 + (1));
seq__5700_5796 = G__5880;
chunk__5701_5797 = G__5881;
count__5702_5798 = G__5882;
i__5703_5799 = G__5883;
continue;
} else {
var temp__5735__auto___5884 = cljs.core.seq.call(null,seq__5700_5796);
if(temp__5735__auto___5884){
var seq__5700_5885__$1 = temp__5735__auto___5884;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5700_5885__$1)){
var c__4461__auto___5886 = cljs.core.chunk_first.call(null,seq__5700_5885__$1);
var G__5887 = cljs.core.chunk_rest.call(null,seq__5700_5885__$1);
var G__5888 = c__4461__auto___5886;
var G__5889 = cljs.core.count.call(null,c__4461__auto___5886);
var G__5890 = (0);
seq__5700_5796 = G__5887;
chunk__5701_5797 = G__5888;
count__5702_5798 = G__5889;
i__5703_5799 = G__5890;
continue;
} else {
var vec__5740_5891 = cljs.core.first.call(null,seq__5700_5885__$1);
var source_idx_5892 = cljs.core.nth.call(null,vec__5740_5891,(0),null);
var vec__5743_5893 = cljs.core.nth.call(null,vec__5740_5891,(1),null);
var __5894 = cljs.core.nth.call(null,vec__5743_5893,(0),null);
var lines_5895__$1 = cljs.core.nth.call(null,vec__5743_5893,(1),null);
var seq__5746_5896 = cljs.core.seq.call(null,lines_5895__$1);
var chunk__5747_5897 = null;
var count__5748_5898 = (0);
var i__5749_5899 = (0);
while(true){
if((i__5749_5899 < count__5748_5898)){
var vec__5750_5900 = cljs.core._nth.call(null,chunk__5747_5897,i__5749_5899);
var line_5901 = cljs.core.nth.call(null,vec__5750_5900,(0),null);
var cols_5902 = cljs.core.nth.call(null,vec__5750_5900,(1),null);
var seq__5753_5903 = cljs.core.seq.call(null,cols_5902);
var chunk__5754_5904 = null;
var count__5755_5905 = (0);
var i__5756_5906 = (0);
while(true){
if((i__5756_5906 < count__5755_5905)){
var vec__5757_5907 = cljs.core._nth.call(null,chunk__5754_5904,i__5756_5906);
var col_5908 = cljs.core.nth.call(null,vec__5757_5907,(0),null);
var infos_5909 = cljs.core.nth.call(null,vec__5757_5907,(1),null);
encode_cols.call(null,infos_5909,source_idx_5892,line_5901,col_5908);


var G__5910 = seq__5753_5903;
var G__5911 = chunk__5754_5904;
var G__5912 = count__5755_5905;
var G__5913 = (i__5756_5906 + (1));
seq__5753_5903 = G__5910;
chunk__5754_5904 = G__5911;
count__5755_5905 = G__5912;
i__5756_5906 = G__5913;
continue;
} else {
var temp__5735__auto___5914__$1 = cljs.core.seq.call(null,seq__5753_5903);
if(temp__5735__auto___5914__$1){
var seq__5753_5915__$1 = temp__5735__auto___5914__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5753_5915__$1)){
var c__4461__auto___5916 = cljs.core.chunk_first.call(null,seq__5753_5915__$1);
var G__5917 = cljs.core.chunk_rest.call(null,seq__5753_5915__$1);
var G__5918 = c__4461__auto___5916;
var G__5919 = cljs.core.count.call(null,c__4461__auto___5916);
var G__5920 = (0);
seq__5753_5903 = G__5917;
chunk__5754_5904 = G__5918;
count__5755_5905 = G__5919;
i__5756_5906 = G__5920;
continue;
} else {
var vec__5760_5921 = cljs.core.first.call(null,seq__5753_5915__$1);
var col_5922 = cljs.core.nth.call(null,vec__5760_5921,(0),null);
var infos_5923 = cljs.core.nth.call(null,vec__5760_5921,(1),null);
encode_cols.call(null,infos_5923,source_idx_5892,line_5901,col_5922);


var G__5924 = cljs.core.next.call(null,seq__5753_5915__$1);
var G__5925 = null;
var G__5926 = (0);
var G__5927 = (0);
seq__5753_5903 = G__5924;
chunk__5754_5904 = G__5925;
count__5755_5905 = G__5926;
i__5756_5906 = G__5927;
continue;
}
} else {
}
}
break;
}


var G__5928 = seq__5746_5896;
var G__5929 = chunk__5747_5897;
var G__5930 = count__5748_5898;
var G__5931 = (i__5749_5899 + (1));
seq__5746_5896 = G__5928;
chunk__5747_5897 = G__5929;
count__5748_5898 = G__5930;
i__5749_5899 = G__5931;
continue;
} else {
var temp__5735__auto___5932__$1 = cljs.core.seq.call(null,seq__5746_5896);
if(temp__5735__auto___5932__$1){
var seq__5746_5933__$1 = temp__5735__auto___5932__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5746_5933__$1)){
var c__4461__auto___5934 = cljs.core.chunk_first.call(null,seq__5746_5933__$1);
var G__5935 = cljs.core.chunk_rest.call(null,seq__5746_5933__$1);
var G__5936 = c__4461__auto___5934;
var G__5937 = cljs.core.count.call(null,c__4461__auto___5934);
var G__5938 = (0);
seq__5746_5896 = G__5935;
chunk__5747_5897 = G__5936;
count__5748_5898 = G__5937;
i__5749_5899 = G__5938;
continue;
} else {
var vec__5763_5939 = cljs.core.first.call(null,seq__5746_5933__$1);
var line_5940 = cljs.core.nth.call(null,vec__5763_5939,(0),null);
var cols_5941 = cljs.core.nth.call(null,vec__5763_5939,(1),null);
var seq__5766_5942 = cljs.core.seq.call(null,cols_5941);
var chunk__5767_5943 = null;
var count__5768_5944 = (0);
var i__5769_5945 = (0);
while(true){
if((i__5769_5945 < count__5768_5944)){
var vec__5770_5946 = cljs.core._nth.call(null,chunk__5767_5943,i__5769_5945);
var col_5947 = cljs.core.nth.call(null,vec__5770_5946,(0),null);
var infos_5948 = cljs.core.nth.call(null,vec__5770_5946,(1),null);
encode_cols.call(null,infos_5948,source_idx_5892,line_5940,col_5947);


var G__5949 = seq__5766_5942;
var G__5950 = chunk__5767_5943;
var G__5951 = count__5768_5944;
var G__5952 = (i__5769_5945 + (1));
seq__5766_5942 = G__5949;
chunk__5767_5943 = G__5950;
count__5768_5944 = G__5951;
i__5769_5945 = G__5952;
continue;
} else {
var temp__5735__auto___5953__$2 = cljs.core.seq.call(null,seq__5766_5942);
if(temp__5735__auto___5953__$2){
var seq__5766_5954__$1 = temp__5735__auto___5953__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5766_5954__$1)){
var c__4461__auto___5955 = cljs.core.chunk_first.call(null,seq__5766_5954__$1);
var G__5956 = cljs.core.chunk_rest.call(null,seq__5766_5954__$1);
var G__5957 = c__4461__auto___5955;
var G__5958 = cljs.core.count.call(null,c__4461__auto___5955);
var G__5959 = (0);
seq__5766_5942 = G__5956;
chunk__5767_5943 = G__5957;
count__5768_5944 = G__5958;
i__5769_5945 = G__5959;
continue;
} else {
var vec__5773_5960 = cljs.core.first.call(null,seq__5766_5954__$1);
var col_5961 = cljs.core.nth.call(null,vec__5773_5960,(0),null);
var infos_5962 = cljs.core.nth.call(null,vec__5773_5960,(1),null);
encode_cols.call(null,infos_5962,source_idx_5892,line_5940,col_5961);


var G__5963 = cljs.core.next.call(null,seq__5766_5954__$1);
var G__5964 = null;
var G__5965 = (0);
var G__5966 = (0);
seq__5766_5942 = G__5963;
chunk__5767_5943 = G__5964;
count__5768_5944 = G__5965;
i__5769_5945 = G__5966;
continue;
}
} else {
}
}
break;
}


var G__5967 = cljs.core.next.call(null,seq__5746_5933__$1);
var G__5968 = null;
var G__5969 = (0);
var G__5970 = (0);
seq__5746_5896 = G__5967;
chunk__5747_5897 = G__5968;
count__5748_5898 = G__5969;
i__5749_5899 = G__5970;
continue;
}
} else {
}
}
break;
}


var G__5971 = cljs.core.next.call(null,seq__5700_5885__$1);
var G__5972 = null;
var G__5973 = (0);
var G__5974 = (0);
seq__5700_5796 = G__5971;
chunk__5701_5797 = G__5972;
count__5702_5798 = G__5973;
i__5703_5799 = G__5974;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__5776 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__5693_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__5693_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__5694_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__5694_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__5695_SHARP_){
return clojure.string.join.call(null,",",p1__5695_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__5777 = G__5776;
goog.object.set(G__5777,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__5777;
} else {
return G__5776;
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
var vec__5975 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__5975,(0),null);
var col_map = cljs.core.nth.call(null,vec__5975,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__5978 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__5978,(0),null);
var infos = cljs.core.nth.call(null,vec__5978,(1),null);
var G__5984 = cljs.core.next.call(null,col_map_seq);
var G__5985 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__5978,col,infos,vec__5975,line,col_map){
return (function (v,p__5981){
var map__5982 = p__5981;
var map__5982__$1 = (((((!((map__5982 == null))))?(((((map__5982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5982):map__5982);
var gline = cljs.core.get.call(null,map__5982__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__5982__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__5978,col,infos,vec__5975,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__5984;
new_cols = G__5985;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__5986 = cljs.core.next.call(null,line_map_seq);
var G__5987 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__5986;
new_lines = G__5987;
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
var seq__5988_6050 = cljs.core.seq.call(null,reverse_map);
var chunk__5989_6051 = null;
var count__5990_6052 = (0);
var i__5991_6053 = (0);
while(true){
if((i__5991_6053 < count__5990_6052)){
var vec__5992_6054 = cljs.core._nth.call(null,chunk__5989_6051,i__5991_6053);
var line_6055 = cljs.core.nth.call(null,vec__5992_6054,(0),null);
var columns_6056 = cljs.core.nth.call(null,vec__5992_6054,(1),null);
var seq__5995_6057 = cljs.core.seq.call(null,columns_6056);
var chunk__5996_6058 = null;
var count__5997_6059 = (0);
var i__5998_6060 = (0);
while(true){
if((i__5998_6060 < count__5997_6059)){
var vec__5999_6061 = cljs.core._nth.call(null,chunk__5996_6058,i__5998_6060);
var column_6062 = cljs.core.nth.call(null,vec__5999_6061,(0),null);
var column_info_6063 = cljs.core.nth.call(null,vec__5999_6061,(1),null);
var seq__6002_6064 = cljs.core.seq.call(null,column_info_6063);
var chunk__6003_6065 = null;
var count__6004_6066 = (0);
var i__6005_6067 = (0);
while(true){
if((i__6005_6067 < count__6004_6066)){
var map__6006_6068 = cljs.core._nth.call(null,chunk__6003_6065,i__6005_6067);
var map__6006_6069__$1 = (((((!((map__6006_6068 == null))))?(((((map__6006_6068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6006_6068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6006_6068):map__6006_6068);
var gline_6070 = cljs.core.get.call(null,map__6006_6069__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_6071 = cljs.core.get.call(null,map__6006_6069__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_6072 = cljs.core.get.call(null,map__6006_6069__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_6070], null),cljs.core.fnil.call(null,((function (seq__6002_6064,chunk__6003_6065,count__6004_6066,i__6005_6067,seq__5995_6057,chunk__5996_6058,count__5997_6059,i__5998_6060,seq__5988_6050,chunk__5989_6051,count__5990_6052,i__5991_6053,map__6006_6068,map__6006_6069__$1,gline_6070,gcol_6071,name_6072,vec__5999_6061,column_6062,column_info_6063,vec__5992_6054,line_6055,columns_6056,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_6071], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_6055,new cljs.core.Keyword(null,"col","col",-1959363084),column_6062,new cljs.core.Keyword(null,"name","name",1843675177),name_6072], null));
});})(seq__6002_6064,chunk__6003_6065,count__6004_6066,i__6005_6067,seq__5995_6057,chunk__5996_6058,count__5997_6059,i__5998_6060,seq__5988_6050,chunk__5989_6051,count__5990_6052,i__5991_6053,map__6006_6068,map__6006_6069__$1,gline_6070,gcol_6071,name_6072,vec__5999_6061,column_6062,column_info_6063,vec__5992_6054,line_6055,columns_6056,inverted))
,cljs.core.sorted_map.call(null)));


var G__6073 = seq__6002_6064;
var G__6074 = chunk__6003_6065;
var G__6075 = count__6004_6066;
var G__6076 = (i__6005_6067 + (1));
seq__6002_6064 = G__6073;
chunk__6003_6065 = G__6074;
count__6004_6066 = G__6075;
i__6005_6067 = G__6076;
continue;
} else {
var temp__5735__auto___6077 = cljs.core.seq.call(null,seq__6002_6064);
if(temp__5735__auto___6077){
var seq__6002_6078__$1 = temp__5735__auto___6077;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6002_6078__$1)){
var c__4461__auto___6079 = cljs.core.chunk_first.call(null,seq__6002_6078__$1);
var G__6080 = cljs.core.chunk_rest.call(null,seq__6002_6078__$1);
var G__6081 = c__4461__auto___6079;
var G__6082 = cljs.core.count.call(null,c__4461__auto___6079);
var G__6083 = (0);
seq__6002_6064 = G__6080;
chunk__6003_6065 = G__6081;
count__6004_6066 = G__6082;
i__6005_6067 = G__6083;
continue;
} else {
var map__6008_6084 = cljs.core.first.call(null,seq__6002_6078__$1);
var map__6008_6085__$1 = (((((!((map__6008_6084 == null))))?(((((map__6008_6084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6008_6084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6008_6084):map__6008_6084);
var gline_6086 = cljs.core.get.call(null,map__6008_6085__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_6087 = cljs.core.get.call(null,map__6008_6085__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_6088 = cljs.core.get.call(null,map__6008_6085__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_6086], null),cljs.core.fnil.call(null,((function (seq__6002_6064,chunk__6003_6065,count__6004_6066,i__6005_6067,seq__5995_6057,chunk__5996_6058,count__5997_6059,i__5998_6060,seq__5988_6050,chunk__5989_6051,count__5990_6052,i__5991_6053,map__6008_6084,map__6008_6085__$1,gline_6086,gcol_6087,name_6088,seq__6002_6078__$1,temp__5735__auto___6077,vec__5999_6061,column_6062,column_info_6063,vec__5992_6054,line_6055,columns_6056,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_6087], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_6055,new cljs.core.Keyword(null,"col","col",-1959363084),column_6062,new cljs.core.Keyword(null,"name","name",1843675177),name_6088], null));
});})(seq__6002_6064,chunk__6003_6065,count__6004_6066,i__6005_6067,seq__5995_6057,chunk__5996_6058,count__5997_6059,i__5998_6060,seq__5988_6050,chunk__5989_6051,count__5990_6052,i__5991_6053,map__6008_6084,map__6008_6085__$1,gline_6086,gcol_6087,name_6088,seq__6002_6078__$1,temp__5735__auto___6077,vec__5999_6061,column_6062,column_info_6063,vec__5992_6054,line_6055,columns_6056,inverted))
,cljs.core.sorted_map.call(null)));


var G__6089 = cljs.core.next.call(null,seq__6002_6078__$1);
var G__6090 = null;
var G__6091 = (0);
var G__6092 = (0);
seq__6002_6064 = G__6089;
chunk__6003_6065 = G__6090;
count__6004_6066 = G__6091;
i__6005_6067 = G__6092;
continue;
}
} else {
}
}
break;
}


var G__6093 = seq__5995_6057;
var G__6094 = chunk__5996_6058;
var G__6095 = count__5997_6059;
var G__6096 = (i__5998_6060 + (1));
seq__5995_6057 = G__6093;
chunk__5996_6058 = G__6094;
count__5997_6059 = G__6095;
i__5998_6060 = G__6096;
continue;
} else {
var temp__5735__auto___6097 = cljs.core.seq.call(null,seq__5995_6057);
if(temp__5735__auto___6097){
var seq__5995_6098__$1 = temp__5735__auto___6097;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5995_6098__$1)){
var c__4461__auto___6099 = cljs.core.chunk_first.call(null,seq__5995_6098__$1);
var G__6100 = cljs.core.chunk_rest.call(null,seq__5995_6098__$1);
var G__6101 = c__4461__auto___6099;
var G__6102 = cljs.core.count.call(null,c__4461__auto___6099);
var G__6103 = (0);
seq__5995_6057 = G__6100;
chunk__5996_6058 = G__6101;
count__5997_6059 = G__6102;
i__5998_6060 = G__6103;
continue;
} else {
var vec__6010_6104 = cljs.core.first.call(null,seq__5995_6098__$1);
var column_6105 = cljs.core.nth.call(null,vec__6010_6104,(0),null);
var column_info_6106 = cljs.core.nth.call(null,vec__6010_6104,(1),null);
var seq__6013_6107 = cljs.core.seq.call(null,column_info_6106);
var chunk__6014_6108 = null;
var count__6015_6109 = (0);
var i__6016_6110 = (0);
while(true){
if((i__6016_6110 < count__6015_6109)){
var map__6017_6111 = cljs.core._nth.call(null,chunk__6014_6108,i__6016_6110);
var map__6017_6112__$1 = (((((!((map__6017_6111 == null))))?(((((map__6017_6111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6017_6111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6017_6111):map__6017_6111);
var gline_6113 = cljs.core.get.call(null,map__6017_6112__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_6114 = cljs.core.get.call(null,map__6017_6112__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_6115 = cljs.core.get.call(null,map__6017_6112__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_6113], null),cljs.core.fnil.call(null,((function (seq__6013_6107,chunk__6014_6108,count__6015_6109,i__6016_6110,seq__5995_6057,chunk__5996_6058,count__5997_6059,i__5998_6060,seq__5988_6050,chunk__5989_6051,count__5990_6052,i__5991_6053,map__6017_6111,map__6017_6112__$1,gline_6113,gcol_6114,name_6115,vec__6010_6104,column_6105,column_info_6106,seq__5995_6098__$1,temp__5735__auto___6097,vec__5992_6054,line_6055,columns_6056,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_6114], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_6055,new cljs.core.Keyword(null,"col","col",-1959363084),column_6105,new cljs.core.Keyword(null,"name","name",1843675177),name_6115], null));
});})(seq__6013_6107,chunk__6014_6108,count__6015_6109,i__6016_6110,seq__5995_6057,chunk__5996_6058,count__5997_6059,i__5998_6060,seq__5988_6050,chunk__5989_6051,count__5990_6052,i__5991_6053,map__6017_6111,map__6017_6112__$1,gline_6113,gcol_6114,name_6115,vec__6010_6104,column_6105,column_info_6106,seq__5995_6098__$1,temp__5735__auto___6097,vec__5992_6054,line_6055,columns_6056,inverted))
,cljs.core.sorted_map.call(null)));


var G__6116 = seq__6013_6107;
var G__6117 = chunk__6014_6108;
var G__6118 = count__6015_6109;
var G__6119 = (i__6016_6110 + (1));
seq__6013_6107 = G__6116;
chunk__6014_6108 = G__6117;
count__6015_6109 = G__6118;
i__6016_6110 = G__6119;
continue;
} else {
var temp__5735__auto___6120__$1 = cljs.core.seq.call(null,seq__6013_6107);
if(temp__5735__auto___6120__$1){
var seq__6013_6121__$1 = temp__5735__auto___6120__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6013_6121__$1)){
var c__4461__auto___6122 = cljs.core.chunk_first.call(null,seq__6013_6121__$1);
var G__6123 = cljs.core.chunk_rest.call(null,seq__6013_6121__$1);
var G__6124 = c__4461__auto___6122;
var G__6125 = cljs.core.count.call(null,c__4461__auto___6122);
var G__6126 = (0);
seq__6013_6107 = G__6123;
chunk__6014_6108 = G__6124;
count__6015_6109 = G__6125;
i__6016_6110 = G__6126;
continue;
} else {
var map__6019_6127 = cljs.core.first.call(null,seq__6013_6121__$1);
var map__6019_6128__$1 = (((((!((map__6019_6127 == null))))?(((((map__6019_6127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6019_6127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6019_6127):map__6019_6127);
var gline_6129 = cljs.core.get.call(null,map__6019_6128__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_6130 = cljs.core.get.call(null,map__6019_6128__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_6131 = cljs.core.get.call(null,map__6019_6128__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_6129], null),cljs.core.fnil.call(null,((function (seq__6013_6107,chunk__6014_6108,count__6015_6109,i__6016_6110,seq__5995_6057,chunk__5996_6058,count__5997_6059,i__5998_6060,seq__5988_6050,chunk__5989_6051,count__5990_6052,i__5991_6053,map__6019_6127,map__6019_6128__$1,gline_6129,gcol_6130,name_6131,seq__6013_6121__$1,temp__5735__auto___6120__$1,vec__6010_6104,column_6105,column_info_6106,seq__5995_6098__$1,temp__5735__auto___6097,vec__5992_6054,line_6055,columns_6056,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_6130], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_6055,new cljs.core.Keyword(null,"col","col",-1959363084),column_6105,new cljs.core.Keyword(null,"name","name",1843675177),name_6131], null));
});})(seq__6013_6107,chunk__6014_6108,count__6015_6109,i__6016_6110,seq__5995_6057,chunk__5996_6058,count__5997_6059,i__5998_6060,seq__5988_6050,chunk__5989_6051,count__5990_6052,i__5991_6053,map__6019_6127,map__6019_6128__$1,gline_6129,gcol_6130,name_6131,seq__6013_6121__$1,temp__5735__auto___6120__$1,vec__6010_6104,column_6105,column_info_6106,seq__5995_6098__$1,temp__5735__auto___6097,vec__5992_6054,line_6055,columns_6056,inverted))
,cljs.core.sorted_map.call(null)));


var G__6132 = cljs.core.next.call(null,seq__6013_6121__$1);
var G__6133 = null;
var G__6134 = (0);
var G__6135 = (0);
seq__6013_6107 = G__6132;
chunk__6014_6108 = G__6133;
count__6015_6109 = G__6134;
i__6016_6110 = G__6135;
continue;
}
} else {
}
}
break;
}


var G__6136 = cljs.core.next.call(null,seq__5995_6098__$1);
var G__6137 = null;
var G__6138 = (0);
var G__6139 = (0);
seq__5995_6057 = G__6136;
chunk__5996_6058 = G__6137;
count__5997_6059 = G__6138;
i__5998_6060 = G__6139;
continue;
}
} else {
}
}
break;
}


var G__6140 = seq__5988_6050;
var G__6141 = chunk__5989_6051;
var G__6142 = count__5990_6052;
var G__6143 = (i__5991_6053 + (1));
seq__5988_6050 = G__6140;
chunk__5989_6051 = G__6141;
count__5990_6052 = G__6142;
i__5991_6053 = G__6143;
continue;
} else {
var temp__5735__auto___6144 = cljs.core.seq.call(null,seq__5988_6050);
if(temp__5735__auto___6144){
var seq__5988_6145__$1 = temp__5735__auto___6144;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5988_6145__$1)){
var c__4461__auto___6146 = cljs.core.chunk_first.call(null,seq__5988_6145__$1);
var G__6147 = cljs.core.chunk_rest.call(null,seq__5988_6145__$1);
var G__6148 = c__4461__auto___6146;
var G__6149 = cljs.core.count.call(null,c__4461__auto___6146);
var G__6150 = (0);
seq__5988_6050 = G__6147;
chunk__5989_6051 = G__6148;
count__5990_6052 = G__6149;
i__5991_6053 = G__6150;
continue;
} else {
var vec__6021_6151 = cljs.core.first.call(null,seq__5988_6145__$1);
var line_6152 = cljs.core.nth.call(null,vec__6021_6151,(0),null);
var columns_6153 = cljs.core.nth.call(null,vec__6021_6151,(1),null);
var seq__6024_6154 = cljs.core.seq.call(null,columns_6153);
var chunk__6025_6155 = null;
var count__6026_6156 = (0);
var i__6027_6157 = (0);
while(true){
if((i__6027_6157 < count__6026_6156)){
var vec__6028_6158 = cljs.core._nth.call(null,chunk__6025_6155,i__6027_6157);
var column_6159 = cljs.core.nth.call(null,vec__6028_6158,(0),null);
var column_info_6160 = cljs.core.nth.call(null,vec__6028_6158,(1),null);
var seq__6031_6161 = cljs.core.seq.call(null,column_info_6160);
var chunk__6032_6162 = null;
var count__6033_6163 = (0);
var i__6034_6164 = (0);
while(true){
if((i__6034_6164 < count__6033_6163)){
var map__6035_6165 = cljs.core._nth.call(null,chunk__6032_6162,i__6034_6164);
var map__6035_6166__$1 = (((((!((map__6035_6165 == null))))?(((((map__6035_6165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6035_6165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6035_6165):map__6035_6165);
var gline_6167 = cljs.core.get.call(null,map__6035_6166__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_6168 = cljs.core.get.call(null,map__6035_6166__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_6169 = cljs.core.get.call(null,map__6035_6166__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_6167], null),cljs.core.fnil.call(null,((function (seq__6031_6161,chunk__6032_6162,count__6033_6163,i__6034_6164,seq__6024_6154,chunk__6025_6155,count__6026_6156,i__6027_6157,seq__5988_6050,chunk__5989_6051,count__5990_6052,i__5991_6053,map__6035_6165,map__6035_6166__$1,gline_6167,gcol_6168,name_6169,vec__6028_6158,column_6159,column_info_6160,vec__6021_6151,line_6152,columns_6153,seq__5988_6145__$1,temp__5735__auto___6144,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_6168], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_6152,new cljs.core.Keyword(null,"col","col",-1959363084),column_6159,new cljs.core.Keyword(null,"name","name",1843675177),name_6169], null));
});})(seq__6031_6161,chunk__6032_6162,count__6033_6163,i__6034_6164,seq__6024_6154,chunk__6025_6155,count__6026_6156,i__6027_6157,seq__5988_6050,chunk__5989_6051,count__5990_6052,i__5991_6053,map__6035_6165,map__6035_6166__$1,gline_6167,gcol_6168,name_6169,vec__6028_6158,column_6159,column_info_6160,vec__6021_6151,line_6152,columns_6153,seq__5988_6145__$1,temp__5735__auto___6144,inverted))
,cljs.core.sorted_map.call(null)));


var G__6170 = seq__6031_6161;
var G__6171 = chunk__6032_6162;
var G__6172 = count__6033_6163;
var G__6173 = (i__6034_6164 + (1));
seq__6031_6161 = G__6170;
chunk__6032_6162 = G__6171;
count__6033_6163 = G__6172;
i__6034_6164 = G__6173;
continue;
} else {
var temp__5735__auto___6174__$1 = cljs.core.seq.call(null,seq__6031_6161);
if(temp__5735__auto___6174__$1){
var seq__6031_6175__$1 = temp__5735__auto___6174__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6031_6175__$1)){
var c__4461__auto___6176 = cljs.core.chunk_first.call(null,seq__6031_6175__$1);
var G__6177 = cljs.core.chunk_rest.call(null,seq__6031_6175__$1);
var G__6178 = c__4461__auto___6176;
var G__6179 = cljs.core.count.call(null,c__4461__auto___6176);
var G__6180 = (0);
seq__6031_6161 = G__6177;
chunk__6032_6162 = G__6178;
count__6033_6163 = G__6179;
i__6034_6164 = G__6180;
continue;
} else {
var map__6037_6181 = cljs.core.first.call(null,seq__6031_6175__$1);
var map__6037_6182__$1 = (((((!((map__6037_6181 == null))))?(((((map__6037_6181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6037_6181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6037_6181):map__6037_6181);
var gline_6183 = cljs.core.get.call(null,map__6037_6182__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_6184 = cljs.core.get.call(null,map__6037_6182__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_6185 = cljs.core.get.call(null,map__6037_6182__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_6183], null),cljs.core.fnil.call(null,((function (seq__6031_6161,chunk__6032_6162,count__6033_6163,i__6034_6164,seq__6024_6154,chunk__6025_6155,count__6026_6156,i__6027_6157,seq__5988_6050,chunk__5989_6051,count__5990_6052,i__5991_6053,map__6037_6181,map__6037_6182__$1,gline_6183,gcol_6184,name_6185,seq__6031_6175__$1,temp__5735__auto___6174__$1,vec__6028_6158,column_6159,column_info_6160,vec__6021_6151,line_6152,columns_6153,seq__5988_6145__$1,temp__5735__auto___6144,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_6184], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_6152,new cljs.core.Keyword(null,"col","col",-1959363084),column_6159,new cljs.core.Keyword(null,"name","name",1843675177),name_6185], null));
});})(seq__6031_6161,chunk__6032_6162,count__6033_6163,i__6034_6164,seq__6024_6154,chunk__6025_6155,count__6026_6156,i__6027_6157,seq__5988_6050,chunk__5989_6051,count__5990_6052,i__5991_6053,map__6037_6181,map__6037_6182__$1,gline_6183,gcol_6184,name_6185,seq__6031_6175__$1,temp__5735__auto___6174__$1,vec__6028_6158,column_6159,column_info_6160,vec__6021_6151,line_6152,columns_6153,seq__5988_6145__$1,temp__5735__auto___6144,inverted))
,cljs.core.sorted_map.call(null)));


var G__6186 = cljs.core.next.call(null,seq__6031_6175__$1);
var G__6187 = null;
var G__6188 = (0);
var G__6189 = (0);
seq__6031_6161 = G__6186;
chunk__6032_6162 = G__6187;
count__6033_6163 = G__6188;
i__6034_6164 = G__6189;
continue;
}
} else {
}
}
break;
}


var G__6190 = seq__6024_6154;
var G__6191 = chunk__6025_6155;
var G__6192 = count__6026_6156;
var G__6193 = (i__6027_6157 + (1));
seq__6024_6154 = G__6190;
chunk__6025_6155 = G__6191;
count__6026_6156 = G__6192;
i__6027_6157 = G__6193;
continue;
} else {
var temp__5735__auto___6194__$1 = cljs.core.seq.call(null,seq__6024_6154);
if(temp__5735__auto___6194__$1){
var seq__6024_6195__$1 = temp__5735__auto___6194__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6024_6195__$1)){
var c__4461__auto___6196 = cljs.core.chunk_first.call(null,seq__6024_6195__$1);
var G__6197 = cljs.core.chunk_rest.call(null,seq__6024_6195__$1);
var G__6198 = c__4461__auto___6196;
var G__6199 = cljs.core.count.call(null,c__4461__auto___6196);
var G__6200 = (0);
seq__6024_6154 = G__6197;
chunk__6025_6155 = G__6198;
count__6026_6156 = G__6199;
i__6027_6157 = G__6200;
continue;
} else {
var vec__6039_6201 = cljs.core.first.call(null,seq__6024_6195__$1);
var column_6202 = cljs.core.nth.call(null,vec__6039_6201,(0),null);
var column_info_6203 = cljs.core.nth.call(null,vec__6039_6201,(1),null);
var seq__6042_6204 = cljs.core.seq.call(null,column_info_6203);
var chunk__6043_6205 = null;
var count__6044_6206 = (0);
var i__6045_6207 = (0);
while(true){
if((i__6045_6207 < count__6044_6206)){
var map__6046_6208 = cljs.core._nth.call(null,chunk__6043_6205,i__6045_6207);
var map__6046_6209__$1 = (((((!((map__6046_6208 == null))))?(((((map__6046_6208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6046_6208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6046_6208):map__6046_6208);
var gline_6210 = cljs.core.get.call(null,map__6046_6209__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_6211 = cljs.core.get.call(null,map__6046_6209__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_6212 = cljs.core.get.call(null,map__6046_6209__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_6210], null),cljs.core.fnil.call(null,((function (seq__6042_6204,chunk__6043_6205,count__6044_6206,i__6045_6207,seq__6024_6154,chunk__6025_6155,count__6026_6156,i__6027_6157,seq__5988_6050,chunk__5989_6051,count__5990_6052,i__5991_6053,map__6046_6208,map__6046_6209__$1,gline_6210,gcol_6211,name_6212,vec__6039_6201,column_6202,column_info_6203,seq__6024_6195__$1,temp__5735__auto___6194__$1,vec__6021_6151,line_6152,columns_6153,seq__5988_6145__$1,temp__5735__auto___6144,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_6211], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_6152,new cljs.core.Keyword(null,"col","col",-1959363084),column_6202,new cljs.core.Keyword(null,"name","name",1843675177),name_6212], null));
});})(seq__6042_6204,chunk__6043_6205,count__6044_6206,i__6045_6207,seq__6024_6154,chunk__6025_6155,count__6026_6156,i__6027_6157,seq__5988_6050,chunk__5989_6051,count__5990_6052,i__5991_6053,map__6046_6208,map__6046_6209__$1,gline_6210,gcol_6211,name_6212,vec__6039_6201,column_6202,column_info_6203,seq__6024_6195__$1,temp__5735__auto___6194__$1,vec__6021_6151,line_6152,columns_6153,seq__5988_6145__$1,temp__5735__auto___6144,inverted))
,cljs.core.sorted_map.call(null)));


var G__6213 = seq__6042_6204;
var G__6214 = chunk__6043_6205;
var G__6215 = count__6044_6206;
var G__6216 = (i__6045_6207 + (1));
seq__6042_6204 = G__6213;
chunk__6043_6205 = G__6214;
count__6044_6206 = G__6215;
i__6045_6207 = G__6216;
continue;
} else {
var temp__5735__auto___6217__$2 = cljs.core.seq.call(null,seq__6042_6204);
if(temp__5735__auto___6217__$2){
var seq__6042_6218__$1 = temp__5735__auto___6217__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6042_6218__$1)){
var c__4461__auto___6219 = cljs.core.chunk_first.call(null,seq__6042_6218__$1);
var G__6220 = cljs.core.chunk_rest.call(null,seq__6042_6218__$1);
var G__6221 = c__4461__auto___6219;
var G__6222 = cljs.core.count.call(null,c__4461__auto___6219);
var G__6223 = (0);
seq__6042_6204 = G__6220;
chunk__6043_6205 = G__6221;
count__6044_6206 = G__6222;
i__6045_6207 = G__6223;
continue;
} else {
var map__6048_6224 = cljs.core.first.call(null,seq__6042_6218__$1);
var map__6048_6225__$1 = (((((!((map__6048_6224 == null))))?(((((map__6048_6224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6048_6224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6048_6224):map__6048_6224);
var gline_6226 = cljs.core.get.call(null,map__6048_6225__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_6227 = cljs.core.get.call(null,map__6048_6225__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_6228 = cljs.core.get.call(null,map__6048_6225__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_6226], null),cljs.core.fnil.call(null,((function (seq__6042_6204,chunk__6043_6205,count__6044_6206,i__6045_6207,seq__6024_6154,chunk__6025_6155,count__6026_6156,i__6027_6157,seq__5988_6050,chunk__5989_6051,count__5990_6052,i__5991_6053,map__6048_6224,map__6048_6225__$1,gline_6226,gcol_6227,name_6228,seq__6042_6218__$1,temp__5735__auto___6217__$2,vec__6039_6201,column_6202,column_info_6203,seq__6024_6195__$1,temp__5735__auto___6194__$1,vec__6021_6151,line_6152,columns_6153,seq__5988_6145__$1,temp__5735__auto___6144,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_6227], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_6152,new cljs.core.Keyword(null,"col","col",-1959363084),column_6202,new cljs.core.Keyword(null,"name","name",1843675177),name_6228], null));
});})(seq__6042_6204,chunk__6043_6205,count__6044_6206,i__6045_6207,seq__6024_6154,chunk__6025_6155,count__6026_6156,i__6027_6157,seq__5988_6050,chunk__5989_6051,count__5990_6052,i__5991_6053,map__6048_6224,map__6048_6225__$1,gline_6226,gcol_6227,name_6228,seq__6042_6218__$1,temp__5735__auto___6217__$2,vec__6039_6201,column_6202,column_info_6203,seq__6024_6195__$1,temp__5735__auto___6194__$1,vec__6021_6151,line_6152,columns_6153,seq__5988_6145__$1,temp__5735__auto___6144,inverted))
,cljs.core.sorted_map.call(null)));


var G__6229 = cljs.core.next.call(null,seq__6042_6218__$1);
var G__6230 = null;
var G__6231 = (0);
var G__6232 = (0);
seq__6042_6204 = G__6229;
chunk__6043_6205 = G__6230;
count__6044_6206 = G__6231;
i__6045_6207 = G__6232;
continue;
}
} else {
}
}
break;
}


var G__6233 = cljs.core.next.call(null,seq__6024_6195__$1);
var G__6234 = null;
var G__6235 = (0);
var G__6236 = (0);
seq__6024_6154 = G__6233;
chunk__6025_6155 = G__6234;
count__6026_6156 = G__6235;
i__6027_6157 = G__6236;
continue;
}
} else {
}
}
break;
}


var G__6237 = cljs.core.next.call(null,seq__5988_6145__$1);
var G__6238 = null;
var G__6239 = (0);
var G__6240 = (0);
seq__5988_6050 = G__6237;
chunk__5989_6051 = G__6238;
count__5990_6052 = G__6239;
i__5991_6053 = G__6240;
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
