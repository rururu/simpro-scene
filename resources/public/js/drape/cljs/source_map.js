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
return cljs.core.reduce.call(null,(function (m,p__17859){
var vec__17860 = p__17859;
var i = cljs.core.nth.call(null,vec__17860,(0),null);
var v = cljs.core.nth.call(null,vec__17860,(1),null);
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
var vec__17863 = seg;
var gcol = cljs.core.nth.call(null,vec__17863,(0),null);
var source = cljs.core.nth.call(null,vec__17863,(1),null);
var line = cljs.core.nth.call(null,vec__17863,(2),null);
var col = cljs.core.nth.call(null,vec__17863,(3),null);
var name = cljs.core.nth.call(null,vec__17863,(4),null);
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
var vec__17866 = seg;
var gcol = cljs.core.nth.call(null,vec__17866,(0),null);
var source = cljs.core.nth.call(null,vec__17866,(1),null);
var line = cljs.core.nth.call(null,vec__17866,(2),null);
var col = cljs.core.nth.call(null,vec__17866,(3),null);
var name = cljs.core.nth.call(null,vec__17866,(4),null);
var vec__17869 = relseg;
var rgcol = cljs.core.nth.call(null,vec__17869,(0),null);
var rsource = cljs.core.nth.call(null,vec__17869,(1),null);
var rline = cljs.core.nth.call(null,vec__17869,(2),null);
var rcol = cljs.core.nth.call(null,vec__17869,(3),null);
var rname = cljs.core.nth.call(null,vec__17869,(4),null);
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
var map__17872 = segmap;
var map__17872__$1 = (((((!((map__17872 == null))))?(((((map__17872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17872):map__17872);
var gcol = cljs.core.get.call(null,map__17872__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__17872__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__17872__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__17872__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__17872__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__17872,map__17872__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__17872,map__17872__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__17872,map__17872__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__17872,map__17872__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__17872,map__17872__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__17872,map__17872__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__17875 = arguments.length;
switch (G__17875) {
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
var vec__17876 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__17880 = cljs.core.next.call(null,segs__$1);
var G__17881 = nrelseg;
var G__17882 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__17880;
relseg__$1 = G__17881;
result__$1 = G__17882;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__17876,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__17876,(1),null);
var G__17883 = (gline + (1));
var G__17884 = cljs.core.next.call(null,lines__$1);
var G__17885 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__17886 = result__$1;
gline = G__17883;
lines__$1 = G__17884;
relseg = G__17885;
result = G__17886;
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
var map__17888 = segmap;
var map__17888__$1 = (((((!((map__17888 == null))))?(((((map__17888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17888):map__17888);
var gcol = cljs.core.get.call(null,map__17888__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__17888__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__17888__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__17888__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__17888__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__17888,map__17888__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__17888,map__17888__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__17887_SHARP_){
return cljs.core.conj.call(null,p1__17887_SHARP_,d__$1);
});})(map__17888,map__17888__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__17888,map__17888__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__17891 = arguments.length;
switch (G__17891) {
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
var vec__17892 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__17896 = cljs.core.next.call(null,segs__$1);
var G__17897 = nrelseg;
var G__17898 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__17896;
relseg__$1 = G__17897;
result__$1 = G__17898;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__17892,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__17892,(1),null);
var G__17899 = (gline + (1));
var G__17900 = cljs.core.next.call(null,lines__$1);
var G__17901 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__17902 = result__$1;
gline = G__17899;
lines__$1 = G__17900;
relseg = G__17901;
result = G__17902;
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
return (function (p__17903){
var vec__17904 = p__17903;
var _ = cljs.core.nth.call(null,vec__17904,(0),null);
var source = cljs.core.nth.call(null,vec__17904,(1),null);
var line = cljs.core.nth.call(null,vec__17904,(2),null);
var col = cljs.core.nth.call(null,vec__17904,(3),null);
var name = cljs.core.nth.call(null,vec__17904,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__17907){
var vec__17908 = p__17907;
var gcol = cljs.core.nth.call(null,vec__17908,(0),null);
var sidx = cljs.core.nth.call(null,vec__17908,(1),null);
var line = cljs.core.nth.call(null,vec__17908,(2),null);
var col = cljs.core.nth.call(null,vec__17908,(3),null);
var name = cljs.core.nth.call(null,vec__17908,(4),null);
var seg = vec__17908;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__17908,gcol,sidx,line,col,name,seg,relseg){
return (function (p__17911){
var vec__17912 = p__17911;
var _ = cljs.core.nth.call(null,vec__17912,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__17912,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__17912,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__17912,(3),null);
var lname = cljs.core.nth.call(null,vec__17912,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__17908,gcol,sidx,line,col,name,seg,relseg))
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
var seq__17918 = cljs.core.seq.call(null,infos);
var chunk__17919 = null;
var count__17920 = (0);
var i__17921 = (0);
while(true){
if((i__17921 < count__17920)){
var info = cljs.core._nth.call(null,chunk__17919,i__17921);
var segv_18000 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_18001 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_18002 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_18001 > (lc_18002 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__17918,chunk__17919,count__17920,i__17921,segv_18000,gline_18001,lc_18002,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_18001 - (lc_18002 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_18000], null));
});})(seq__17918,chunk__17919,count__17920,i__17921,segv_18000,gline_18001,lc_18002,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__17918,chunk__17919,count__17920,i__17921,segv_18000,gline_18001,lc_18002,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_18001], null),cljs.core.conj,segv_18000);
});})(seq__17918,chunk__17919,count__17920,i__17921,segv_18000,gline_18001,lc_18002,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__18003 = seq__17918;
var G__18004 = chunk__17919;
var G__18005 = count__17920;
var G__18006 = (i__17921 + (1));
seq__17918 = G__18003;
chunk__17919 = G__18004;
count__17920 = G__18005;
i__17921 = G__18006;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__17918);
if(temp__5735__auto__){
var seq__17918__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17918__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__17918__$1);
var G__18007 = cljs.core.chunk_rest.call(null,seq__17918__$1);
var G__18008 = c__4461__auto__;
var G__18009 = cljs.core.count.call(null,c__4461__auto__);
var G__18010 = (0);
seq__17918 = G__18007;
chunk__17919 = G__18008;
count__17920 = G__18009;
i__17921 = G__18010;
continue;
} else {
var info = cljs.core.first.call(null,seq__17918__$1);
var segv_18011 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_18012 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_18013 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_18012 > (lc_18013 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__17918,chunk__17919,count__17920,i__17921,segv_18011,gline_18012,lc_18013,info,seq__17918__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_18012 - (lc_18013 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_18011], null));
});})(seq__17918,chunk__17919,count__17920,i__17921,segv_18011,gline_18012,lc_18013,info,seq__17918__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__17918,chunk__17919,count__17920,i__17921,segv_18011,gline_18012,lc_18013,info,seq__17918__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_18012], null),cljs.core.conj,segv_18011);
});})(seq__17918,chunk__17919,count__17920,i__17921,segv_18011,gline_18012,lc_18013,info,seq__17918__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__18014 = cljs.core.next.call(null,seq__17918__$1);
var G__18015 = null;
var G__18016 = (0);
var G__18017 = (0);
seq__17918 = G__18014;
chunk__17919 = G__18015;
count__17920 = G__18016;
i__17921 = G__18017;
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
var seq__17922_18018 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__17923_18019 = null;
var count__17924_18020 = (0);
var i__17925_18021 = (0);
while(true){
if((i__17925_18021 < count__17924_18020)){
var vec__17926_18022 = cljs.core._nth.call(null,chunk__17923_18019,i__17925_18021);
var source_idx_18023 = cljs.core.nth.call(null,vec__17926_18022,(0),null);
var vec__17929_18024 = cljs.core.nth.call(null,vec__17926_18022,(1),null);
var __18025 = cljs.core.nth.call(null,vec__17929_18024,(0),null);
var lines_18026__$1 = cljs.core.nth.call(null,vec__17929_18024,(1),null);
var seq__17932_18027 = cljs.core.seq.call(null,lines_18026__$1);
var chunk__17933_18028 = null;
var count__17934_18029 = (0);
var i__17935_18030 = (0);
while(true){
if((i__17935_18030 < count__17934_18029)){
var vec__17936_18031 = cljs.core._nth.call(null,chunk__17933_18028,i__17935_18030);
var line_18032 = cljs.core.nth.call(null,vec__17936_18031,(0),null);
var cols_18033 = cljs.core.nth.call(null,vec__17936_18031,(1),null);
var seq__17939_18034 = cljs.core.seq.call(null,cols_18033);
var chunk__17940_18035 = null;
var count__17941_18036 = (0);
var i__17942_18037 = (0);
while(true){
if((i__17942_18037 < count__17941_18036)){
var vec__17943_18038 = cljs.core._nth.call(null,chunk__17940_18035,i__17942_18037);
var col_18039 = cljs.core.nth.call(null,vec__17943_18038,(0),null);
var infos_18040 = cljs.core.nth.call(null,vec__17943_18038,(1),null);
encode_cols.call(null,infos_18040,source_idx_18023,line_18032,col_18039);


var G__18041 = seq__17939_18034;
var G__18042 = chunk__17940_18035;
var G__18043 = count__17941_18036;
var G__18044 = (i__17942_18037 + (1));
seq__17939_18034 = G__18041;
chunk__17940_18035 = G__18042;
count__17941_18036 = G__18043;
i__17942_18037 = G__18044;
continue;
} else {
var temp__5735__auto___18045 = cljs.core.seq.call(null,seq__17939_18034);
if(temp__5735__auto___18045){
var seq__17939_18046__$1 = temp__5735__auto___18045;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17939_18046__$1)){
var c__4461__auto___18047 = cljs.core.chunk_first.call(null,seq__17939_18046__$1);
var G__18048 = cljs.core.chunk_rest.call(null,seq__17939_18046__$1);
var G__18049 = c__4461__auto___18047;
var G__18050 = cljs.core.count.call(null,c__4461__auto___18047);
var G__18051 = (0);
seq__17939_18034 = G__18048;
chunk__17940_18035 = G__18049;
count__17941_18036 = G__18050;
i__17942_18037 = G__18051;
continue;
} else {
var vec__17946_18052 = cljs.core.first.call(null,seq__17939_18046__$1);
var col_18053 = cljs.core.nth.call(null,vec__17946_18052,(0),null);
var infos_18054 = cljs.core.nth.call(null,vec__17946_18052,(1),null);
encode_cols.call(null,infos_18054,source_idx_18023,line_18032,col_18053);


var G__18055 = cljs.core.next.call(null,seq__17939_18046__$1);
var G__18056 = null;
var G__18057 = (0);
var G__18058 = (0);
seq__17939_18034 = G__18055;
chunk__17940_18035 = G__18056;
count__17941_18036 = G__18057;
i__17942_18037 = G__18058;
continue;
}
} else {
}
}
break;
}


var G__18059 = seq__17932_18027;
var G__18060 = chunk__17933_18028;
var G__18061 = count__17934_18029;
var G__18062 = (i__17935_18030 + (1));
seq__17932_18027 = G__18059;
chunk__17933_18028 = G__18060;
count__17934_18029 = G__18061;
i__17935_18030 = G__18062;
continue;
} else {
var temp__5735__auto___18063 = cljs.core.seq.call(null,seq__17932_18027);
if(temp__5735__auto___18063){
var seq__17932_18064__$1 = temp__5735__auto___18063;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17932_18064__$1)){
var c__4461__auto___18065 = cljs.core.chunk_first.call(null,seq__17932_18064__$1);
var G__18066 = cljs.core.chunk_rest.call(null,seq__17932_18064__$1);
var G__18067 = c__4461__auto___18065;
var G__18068 = cljs.core.count.call(null,c__4461__auto___18065);
var G__18069 = (0);
seq__17932_18027 = G__18066;
chunk__17933_18028 = G__18067;
count__17934_18029 = G__18068;
i__17935_18030 = G__18069;
continue;
} else {
var vec__17949_18070 = cljs.core.first.call(null,seq__17932_18064__$1);
var line_18071 = cljs.core.nth.call(null,vec__17949_18070,(0),null);
var cols_18072 = cljs.core.nth.call(null,vec__17949_18070,(1),null);
var seq__17952_18073 = cljs.core.seq.call(null,cols_18072);
var chunk__17953_18074 = null;
var count__17954_18075 = (0);
var i__17955_18076 = (0);
while(true){
if((i__17955_18076 < count__17954_18075)){
var vec__17956_18077 = cljs.core._nth.call(null,chunk__17953_18074,i__17955_18076);
var col_18078 = cljs.core.nth.call(null,vec__17956_18077,(0),null);
var infos_18079 = cljs.core.nth.call(null,vec__17956_18077,(1),null);
encode_cols.call(null,infos_18079,source_idx_18023,line_18071,col_18078);


var G__18080 = seq__17952_18073;
var G__18081 = chunk__17953_18074;
var G__18082 = count__17954_18075;
var G__18083 = (i__17955_18076 + (1));
seq__17952_18073 = G__18080;
chunk__17953_18074 = G__18081;
count__17954_18075 = G__18082;
i__17955_18076 = G__18083;
continue;
} else {
var temp__5735__auto___18084__$1 = cljs.core.seq.call(null,seq__17952_18073);
if(temp__5735__auto___18084__$1){
var seq__17952_18085__$1 = temp__5735__auto___18084__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17952_18085__$1)){
var c__4461__auto___18086 = cljs.core.chunk_first.call(null,seq__17952_18085__$1);
var G__18087 = cljs.core.chunk_rest.call(null,seq__17952_18085__$1);
var G__18088 = c__4461__auto___18086;
var G__18089 = cljs.core.count.call(null,c__4461__auto___18086);
var G__18090 = (0);
seq__17952_18073 = G__18087;
chunk__17953_18074 = G__18088;
count__17954_18075 = G__18089;
i__17955_18076 = G__18090;
continue;
} else {
var vec__17959_18091 = cljs.core.first.call(null,seq__17952_18085__$1);
var col_18092 = cljs.core.nth.call(null,vec__17959_18091,(0),null);
var infos_18093 = cljs.core.nth.call(null,vec__17959_18091,(1),null);
encode_cols.call(null,infos_18093,source_idx_18023,line_18071,col_18092);


var G__18094 = cljs.core.next.call(null,seq__17952_18085__$1);
var G__18095 = null;
var G__18096 = (0);
var G__18097 = (0);
seq__17952_18073 = G__18094;
chunk__17953_18074 = G__18095;
count__17954_18075 = G__18096;
i__17955_18076 = G__18097;
continue;
}
} else {
}
}
break;
}


var G__18098 = cljs.core.next.call(null,seq__17932_18064__$1);
var G__18099 = null;
var G__18100 = (0);
var G__18101 = (0);
seq__17932_18027 = G__18098;
chunk__17933_18028 = G__18099;
count__17934_18029 = G__18100;
i__17935_18030 = G__18101;
continue;
}
} else {
}
}
break;
}


var G__18102 = seq__17922_18018;
var G__18103 = chunk__17923_18019;
var G__18104 = count__17924_18020;
var G__18105 = (i__17925_18021 + (1));
seq__17922_18018 = G__18102;
chunk__17923_18019 = G__18103;
count__17924_18020 = G__18104;
i__17925_18021 = G__18105;
continue;
} else {
var temp__5735__auto___18106 = cljs.core.seq.call(null,seq__17922_18018);
if(temp__5735__auto___18106){
var seq__17922_18107__$1 = temp__5735__auto___18106;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17922_18107__$1)){
var c__4461__auto___18108 = cljs.core.chunk_first.call(null,seq__17922_18107__$1);
var G__18109 = cljs.core.chunk_rest.call(null,seq__17922_18107__$1);
var G__18110 = c__4461__auto___18108;
var G__18111 = cljs.core.count.call(null,c__4461__auto___18108);
var G__18112 = (0);
seq__17922_18018 = G__18109;
chunk__17923_18019 = G__18110;
count__17924_18020 = G__18111;
i__17925_18021 = G__18112;
continue;
} else {
var vec__17962_18113 = cljs.core.first.call(null,seq__17922_18107__$1);
var source_idx_18114 = cljs.core.nth.call(null,vec__17962_18113,(0),null);
var vec__17965_18115 = cljs.core.nth.call(null,vec__17962_18113,(1),null);
var __18116 = cljs.core.nth.call(null,vec__17965_18115,(0),null);
var lines_18117__$1 = cljs.core.nth.call(null,vec__17965_18115,(1),null);
var seq__17968_18118 = cljs.core.seq.call(null,lines_18117__$1);
var chunk__17969_18119 = null;
var count__17970_18120 = (0);
var i__17971_18121 = (0);
while(true){
if((i__17971_18121 < count__17970_18120)){
var vec__17972_18122 = cljs.core._nth.call(null,chunk__17969_18119,i__17971_18121);
var line_18123 = cljs.core.nth.call(null,vec__17972_18122,(0),null);
var cols_18124 = cljs.core.nth.call(null,vec__17972_18122,(1),null);
var seq__17975_18125 = cljs.core.seq.call(null,cols_18124);
var chunk__17976_18126 = null;
var count__17977_18127 = (0);
var i__17978_18128 = (0);
while(true){
if((i__17978_18128 < count__17977_18127)){
var vec__17979_18129 = cljs.core._nth.call(null,chunk__17976_18126,i__17978_18128);
var col_18130 = cljs.core.nth.call(null,vec__17979_18129,(0),null);
var infos_18131 = cljs.core.nth.call(null,vec__17979_18129,(1),null);
encode_cols.call(null,infos_18131,source_idx_18114,line_18123,col_18130);


var G__18132 = seq__17975_18125;
var G__18133 = chunk__17976_18126;
var G__18134 = count__17977_18127;
var G__18135 = (i__17978_18128 + (1));
seq__17975_18125 = G__18132;
chunk__17976_18126 = G__18133;
count__17977_18127 = G__18134;
i__17978_18128 = G__18135;
continue;
} else {
var temp__5735__auto___18136__$1 = cljs.core.seq.call(null,seq__17975_18125);
if(temp__5735__auto___18136__$1){
var seq__17975_18137__$1 = temp__5735__auto___18136__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17975_18137__$1)){
var c__4461__auto___18138 = cljs.core.chunk_first.call(null,seq__17975_18137__$1);
var G__18139 = cljs.core.chunk_rest.call(null,seq__17975_18137__$1);
var G__18140 = c__4461__auto___18138;
var G__18141 = cljs.core.count.call(null,c__4461__auto___18138);
var G__18142 = (0);
seq__17975_18125 = G__18139;
chunk__17976_18126 = G__18140;
count__17977_18127 = G__18141;
i__17978_18128 = G__18142;
continue;
} else {
var vec__17982_18143 = cljs.core.first.call(null,seq__17975_18137__$1);
var col_18144 = cljs.core.nth.call(null,vec__17982_18143,(0),null);
var infos_18145 = cljs.core.nth.call(null,vec__17982_18143,(1),null);
encode_cols.call(null,infos_18145,source_idx_18114,line_18123,col_18144);


var G__18146 = cljs.core.next.call(null,seq__17975_18137__$1);
var G__18147 = null;
var G__18148 = (0);
var G__18149 = (0);
seq__17975_18125 = G__18146;
chunk__17976_18126 = G__18147;
count__17977_18127 = G__18148;
i__17978_18128 = G__18149;
continue;
}
} else {
}
}
break;
}


var G__18150 = seq__17968_18118;
var G__18151 = chunk__17969_18119;
var G__18152 = count__17970_18120;
var G__18153 = (i__17971_18121 + (1));
seq__17968_18118 = G__18150;
chunk__17969_18119 = G__18151;
count__17970_18120 = G__18152;
i__17971_18121 = G__18153;
continue;
} else {
var temp__5735__auto___18154__$1 = cljs.core.seq.call(null,seq__17968_18118);
if(temp__5735__auto___18154__$1){
var seq__17968_18155__$1 = temp__5735__auto___18154__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17968_18155__$1)){
var c__4461__auto___18156 = cljs.core.chunk_first.call(null,seq__17968_18155__$1);
var G__18157 = cljs.core.chunk_rest.call(null,seq__17968_18155__$1);
var G__18158 = c__4461__auto___18156;
var G__18159 = cljs.core.count.call(null,c__4461__auto___18156);
var G__18160 = (0);
seq__17968_18118 = G__18157;
chunk__17969_18119 = G__18158;
count__17970_18120 = G__18159;
i__17971_18121 = G__18160;
continue;
} else {
var vec__17985_18161 = cljs.core.first.call(null,seq__17968_18155__$1);
var line_18162 = cljs.core.nth.call(null,vec__17985_18161,(0),null);
var cols_18163 = cljs.core.nth.call(null,vec__17985_18161,(1),null);
var seq__17988_18164 = cljs.core.seq.call(null,cols_18163);
var chunk__17989_18165 = null;
var count__17990_18166 = (0);
var i__17991_18167 = (0);
while(true){
if((i__17991_18167 < count__17990_18166)){
var vec__17992_18168 = cljs.core._nth.call(null,chunk__17989_18165,i__17991_18167);
var col_18169 = cljs.core.nth.call(null,vec__17992_18168,(0),null);
var infos_18170 = cljs.core.nth.call(null,vec__17992_18168,(1),null);
encode_cols.call(null,infos_18170,source_idx_18114,line_18162,col_18169);


var G__18171 = seq__17988_18164;
var G__18172 = chunk__17989_18165;
var G__18173 = count__17990_18166;
var G__18174 = (i__17991_18167 + (1));
seq__17988_18164 = G__18171;
chunk__17989_18165 = G__18172;
count__17990_18166 = G__18173;
i__17991_18167 = G__18174;
continue;
} else {
var temp__5735__auto___18175__$2 = cljs.core.seq.call(null,seq__17988_18164);
if(temp__5735__auto___18175__$2){
var seq__17988_18176__$1 = temp__5735__auto___18175__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17988_18176__$1)){
var c__4461__auto___18177 = cljs.core.chunk_first.call(null,seq__17988_18176__$1);
var G__18178 = cljs.core.chunk_rest.call(null,seq__17988_18176__$1);
var G__18179 = c__4461__auto___18177;
var G__18180 = cljs.core.count.call(null,c__4461__auto___18177);
var G__18181 = (0);
seq__17988_18164 = G__18178;
chunk__17989_18165 = G__18179;
count__17990_18166 = G__18180;
i__17991_18167 = G__18181;
continue;
} else {
var vec__17995_18182 = cljs.core.first.call(null,seq__17988_18176__$1);
var col_18183 = cljs.core.nth.call(null,vec__17995_18182,(0),null);
var infos_18184 = cljs.core.nth.call(null,vec__17995_18182,(1),null);
encode_cols.call(null,infos_18184,source_idx_18114,line_18162,col_18183);


var G__18185 = cljs.core.next.call(null,seq__17988_18176__$1);
var G__18186 = null;
var G__18187 = (0);
var G__18188 = (0);
seq__17988_18164 = G__18185;
chunk__17989_18165 = G__18186;
count__17990_18166 = G__18187;
i__17991_18167 = G__18188;
continue;
}
} else {
}
}
break;
}


var G__18189 = cljs.core.next.call(null,seq__17968_18155__$1);
var G__18190 = null;
var G__18191 = (0);
var G__18192 = (0);
seq__17968_18118 = G__18189;
chunk__17969_18119 = G__18190;
count__17970_18120 = G__18191;
i__17971_18121 = G__18192;
continue;
}
} else {
}
}
break;
}


var G__18193 = cljs.core.next.call(null,seq__17922_18107__$1);
var G__18194 = null;
var G__18195 = (0);
var G__18196 = (0);
seq__17922_18018 = G__18193;
chunk__17923_18019 = G__18194;
count__17924_18020 = G__18195;
i__17925_18021 = G__18196;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__17998 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__17915_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__17915_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__17916_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__17916_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__17917_SHARP_){
return clojure.string.join.call(null,",",p1__17917_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__17999 = G__17998;
goog.object.set(G__17999,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__17999;
} else {
return G__17998;
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
var vec__18197 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__18197,(0),null);
var col_map = cljs.core.nth.call(null,vec__18197,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__18200 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__18200,(0),null);
var infos = cljs.core.nth.call(null,vec__18200,(1),null);
var G__18206 = cljs.core.next.call(null,col_map_seq);
var G__18207 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__18200,col,infos,vec__18197,line,col_map){
return (function (v,p__18203){
var map__18204 = p__18203;
var map__18204__$1 = (((((!((map__18204 == null))))?(((((map__18204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18204):map__18204);
var gline = cljs.core.get.call(null,map__18204__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__18204__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__18200,col,infos,vec__18197,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__18206;
new_cols = G__18207;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__18208 = cljs.core.next.call(null,line_map_seq);
var G__18209 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__18208;
new_lines = G__18209;
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
var seq__18210_18272 = cljs.core.seq.call(null,reverse_map);
var chunk__18211_18273 = null;
var count__18212_18274 = (0);
var i__18213_18275 = (0);
while(true){
if((i__18213_18275 < count__18212_18274)){
var vec__18214_18276 = cljs.core._nth.call(null,chunk__18211_18273,i__18213_18275);
var line_18277 = cljs.core.nth.call(null,vec__18214_18276,(0),null);
var columns_18278 = cljs.core.nth.call(null,vec__18214_18276,(1),null);
var seq__18217_18279 = cljs.core.seq.call(null,columns_18278);
var chunk__18218_18280 = null;
var count__18219_18281 = (0);
var i__18220_18282 = (0);
while(true){
if((i__18220_18282 < count__18219_18281)){
var vec__18221_18283 = cljs.core._nth.call(null,chunk__18218_18280,i__18220_18282);
var column_18284 = cljs.core.nth.call(null,vec__18221_18283,(0),null);
var column_info_18285 = cljs.core.nth.call(null,vec__18221_18283,(1),null);
var seq__18224_18286 = cljs.core.seq.call(null,column_info_18285);
var chunk__18225_18287 = null;
var count__18226_18288 = (0);
var i__18227_18289 = (0);
while(true){
if((i__18227_18289 < count__18226_18288)){
var map__18228_18290 = cljs.core._nth.call(null,chunk__18225_18287,i__18227_18289);
var map__18228_18291__$1 = (((((!((map__18228_18290 == null))))?(((((map__18228_18290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18228_18290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18228_18290):map__18228_18290);
var gline_18292 = cljs.core.get.call(null,map__18228_18291__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_18293 = cljs.core.get.call(null,map__18228_18291__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_18294 = cljs.core.get.call(null,map__18228_18291__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_18292], null),cljs.core.fnil.call(null,((function (seq__18224_18286,chunk__18225_18287,count__18226_18288,i__18227_18289,seq__18217_18279,chunk__18218_18280,count__18219_18281,i__18220_18282,seq__18210_18272,chunk__18211_18273,count__18212_18274,i__18213_18275,map__18228_18290,map__18228_18291__$1,gline_18292,gcol_18293,name_18294,vec__18221_18283,column_18284,column_info_18285,vec__18214_18276,line_18277,columns_18278,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_18293], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_18277,new cljs.core.Keyword(null,"col","col",-1959363084),column_18284,new cljs.core.Keyword(null,"name","name",1843675177),name_18294], null));
});})(seq__18224_18286,chunk__18225_18287,count__18226_18288,i__18227_18289,seq__18217_18279,chunk__18218_18280,count__18219_18281,i__18220_18282,seq__18210_18272,chunk__18211_18273,count__18212_18274,i__18213_18275,map__18228_18290,map__18228_18291__$1,gline_18292,gcol_18293,name_18294,vec__18221_18283,column_18284,column_info_18285,vec__18214_18276,line_18277,columns_18278,inverted))
,cljs.core.sorted_map.call(null)));


var G__18295 = seq__18224_18286;
var G__18296 = chunk__18225_18287;
var G__18297 = count__18226_18288;
var G__18298 = (i__18227_18289 + (1));
seq__18224_18286 = G__18295;
chunk__18225_18287 = G__18296;
count__18226_18288 = G__18297;
i__18227_18289 = G__18298;
continue;
} else {
var temp__5735__auto___18299 = cljs.core.seq.call(null,seq__18224_18286);
if(temp__5735__auto___18299){
var seq__18224_18300__$1 = temp__5735__auto___18299;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18224_18300__$1)){
var c__4461__auto___18301 = cljs.core.chunk_first.call(null,seq__18224_18300__$1);
var G__18302 = cljs.core.chunk_rest.call(null,seq__18224_18300__$1);
var G__18303 = c__4461__auto___18301;
var G__18304 = cljs.core.count.call(null,c__4461__auto___18301);
var G__18305 = (0);
seq__18224_18286 = G__18302;
chunk__18225_18287 = G__18303;
count__18226_18288 = G__18304;
i__18227_18289 = G__18305;
continue;
} else {
var map__18230_18306 = cljs.core.first.call(null,seq__18224_18300__$1);
var map__18230_18307__$1 = (((((!((map__18230_18306 == null))))?(((((map__18230_18306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18230_18306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18230_18306):map__18230_18306);
var gline_18308 = cljs.core.get.call(null,map__18230_18307__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_18309 = cljs.core.get.call(null,map__18230_18307__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_18310 = cljs.core.get.call(null,map__18230_18307__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_18308], null),cljs.core.fnil.call(null,((function (seq__18224_18286,chunk__18225_18287,count__18226_18288,i__18227_18289,seq__18217_18279,chunk__18218_18280,count__18219_18281,i__18220_18282,seq__18210_18272,chunk__18211_18273,count__18212_18274,i__18213_18275,map__18230_18306,map__18230_18307__$1,gline_18308,gcol_18309,name_18310,seq__18224_18300__$1,temp__5735__auto___18299,vec__18221_18283,column_18284,column_info_18285,vec__18214_18276,line_18277,columns_18278,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_18309], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_18277,new cljs.core.Keyword(null,"col","col",-1959363084),column_18284,new cljs.core.Keyword(null,"name","name",1843675177),name_18310], null));
});})(seq__18224_18286,chunk__18225_18287,count__18226_18288,i__18227_18289,seq__18217_18279,chunk__18218_18280,count__18219_18281,i__18220_18282,seq__18210_18272,chunk__18211_18273,count__18212_18274,i__18213_18275,map__18230_18306,map__18230_18307__$1,gline_18308,gcol_18309,name_18310,seq__18224_18300__$1,temp__5735__auto___18299,vec__18221_18283,column_18284,column_info_18285,vec__18214_18276,line_18277,columns_18278,inverted))
,cljs.core.sorted_map.call(null)));


var G__18311 = cljs.core.next.call(null,seq__18224_18300__$1);
var G__18312 = null;
var G__18313 = (0);
var G__18314 = (0);
seq__18224_18286 = G__18311;
chunk__18225_18287 = G__18312;
count__18226_18288 = G__18313;
i__18227_18289 = G__18314;
continue;
}
} else {
}
}
break;
}


var G__18315 = seq__18217_18279;
var G__18316 = chunk__18218_18280;
var G__18317 = count__18219_18281;
var G__18318 = (i__18220_18282 + (1));
seq__18217_18279 = G__18315;
chunk__18218_18280 = G__18316;
count__18219_18281 = G__18317;
i__18220_18282 = G__18318;
continue;
} else {
var temp__5735__auto___18319 = cljs.core.seq.call(null,seq__18217_18279);
if(temp__5735__auto___18319){
var seq__18217_18320__$1 = temp__5735__auto___18319;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18217_18320__$1)){
var c__4461__auto___18321 = cljs.core.chunk_first.call(null,seq__18217_18320__$1);
var G__18322 = cljs.core.chunk_rest.call(null,seq__18217_18320__$1);
var G__18323 = c__4461__auto___18321;
var G__18324 = cljs.core.count.call(null,c__4461__auto___18321);
var G__18325 = (0);
seq__18217_18279 = G__18322;
chunk__18218_18280 = G__18323;
count__18219_18281 = G__18324;
i__18220_18282 = G__18325;
continue;
} else {
var vec__18232_18326 = cljs.core.first.call(null,seq__18217_18320__$1);
var column_18327 = cljs.core.nth.call(null,vec__18232_18326,(0),null);
var column_info_18328 = cljs.core.nth.call(null,vec__18232_18326,(1),null);
var seq__18235_18329 = cljs.core.seq.call(null,column_info_18328);
var chunk__18236_18330 = null;
var count__18237_18331 = (0);
var i__18238_18332 = (0);
while(true){
if((i__18238_18332 < count__18237_18331)){
var map__18239_18333 = cljs.core._nth.call(null,chunk__18236_18330,i__18238_18332);
var map__18239_18334__$1 = (((((!((map__18239_18333 == null))))?(((((map__18239_18333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18239_18333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18239_18333):map__18239_18333);
var gline_18335 = cljs.core.get.call(null,map__18239_18334__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_18336 = cljs.core.get.call(null,map__18239_18334__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_18337 = cljs.core.get.call(null,map__18239_18334__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_18335], null),cljs.core.fnil.call(null,((function (seq__18235_18329,chunk__18236_18330,count__18237_18331,i__18238_18332,seq__18217_18279,chunk__18218_18280,count__18219_18281,i__18220_18282,seq__18210_18272,chunk__18211_18273,count__18212_18274,i__18213_18275,map__18239_18333,map__18239_18334__$1,gline_18335,gcol_18336,name_18337,vec__18232_18326,column_18327,column_info_18328,seq__18217_18320__$1,temp__5735__auto___18319,vec__18214_18276,line_18277,columns_18278,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_18336], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_18277,new cljs.core.Keyword(null,"col","col",-1959363084),column_18327,new cljs.core.Keyword(null,"name","name",1843675177),name_18337], null));
});})(seq__18235_18329,chunk__18236_18330,count__18237_18331,i__18238_18332,seq__18217_18279,chunk__18218_18280,count__18219_18281,i__18220_18282,seq__18210_18272,chunk__18211_18273,count__18212_18274,i__18213_18275,map__18239_18333,map__18239_18334__$1,gline_18335,gcol_18336,name_18337,vec__18232_18326,column_18327,column_info_18328,seq__18217_18320__$1,temp__5735__auto___18319,vec__18214_18276,line_18277,columns_18278,inverted))
,cljs.core.sorted_map.call(null)));


var G__18338 = seq__18235_18329;
var G__18339 = chunk__18236_18330;
var G__18340 = count__18237_18331;
var G__18341 = (i__18238_18332 + (1));
seq__18235_18329 = G__18338;
chunk__18236_18330 = G__18339;
count__18237_18331 = G__18340;
i__18238_18332 = G__18341;
continue;
} else {
var temp__5735__auto___18342__$1 = cljs.core.seq.call(null,seq__18235_18329);
if(temp__5735__auto___18342__$1){
var seq__18235_18343__$1 = temp__5735__auto___18342__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18235_18343__$1)){
var c__4461__auto___18344 = cljs.core.chunk_first.call(null,seq__18235_18343__$1);
var G__18345 = cljs.core.chunk_rest.call(null,seq__18235_18343__$1);
var G__18346 = c__4461__auto___18344;
var G__18347 = cljs.core.count.call(null,c__4461__auto___18344);
var G__18348 = (0);
seq__18235_18329 = G__18345;
chunk__18236_18330 = G__18346;
count__18237_18331 = G__18347;
i__18238_18332 = G__18348;
continue;
} else {
var map__18241_18349 = cljs.core.first.call(null,seq__18235_18343__$1);
var map__18241_18350__$1 = (((((!((map__18241_18349 == null))))?(((((map__18241_18349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18241_18349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18241_18349):map__18241_18349);
var gline_18351 = cljs.core.get.call(null,map__18241_18350__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_18352 = cljs.core.get.call(null,map__18241_18350__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_18353 = cljs.core.get.call(null,map__18241_18350__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_18351], null),cljs.core.fnil.call(null,((function (seq__18235_18329,chunk__18236_18330,count__18237_18331,i__18238_18332,seq__18217_18279,chunk__18218_18280,count__18219_18281,i__18220_18282,seq__18210_18272,chunk__18211_18273,count__18212_18274,i__18213_18275,map__18241_18349,map__18241_18350__$1,gline_18351,gcol_18352,name_18353,seq__18235_18343__$1,temp__5735__auto___18342__$1,vec__18232_18326,column_18327,column_info_18328,seq__18217_18320__$1,temp__5735__auto___18319,vec__18214_18276,line_18277,columns_18278,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_18352], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_18277,new cljs.core.Keyword(null,"col","col",-1959363084),column_18327,new cljs.core.Keyword(null,"name","name",1843675177),name_18353], null));
});})(seq__18235_18329,chunk__18236_18330,count__18237_18331,i__18238_18332,seq__18217_18279,chunk__18218_18280,count__18219_18281,i__18220_18282,seq__18210_18272,chunk__18211_18273,count__18212_18274,i__18213_18275,map__18241_18349,map__18241_18350__$1,gline_18351,gcol_18352,name_18353,seq__18235_18343__$1,temp__5735__auto___18342__$1,vec__18232_18326,column_18327,column_info_18328,seq__18217_18320__$1,temp__5735__auto___18319,vec__18214_18276,line_18277,columns_18278,inverted))
,cljs.core.sorted_map.call(null)));


var G__18354 = cljs.core.next.call(null,seq__18235_18343__$1);
var G__18355 = null;
var G__18356 = (0);
var G__18357 = (0);
seq__18235_18329 = G__18354;
chunk__18236_18330 = G__18355;
count__18237_18331 = G__18356;
i__18238_18332 = G__18357;
continue;
}
} else {
}
}
break;
}


var G__18358 = cljs.core.next.call(null,seq__18217_18320__$1);
var G__18359 = null;
var G__18360 = (0);
var G__18361 = (0);
seq__18217_18279 = G__18358;
chunk__18218_18280 = G__18359;
count__18219_18281 = G__18360;
i__18220_18282 = G__18361;
continue;
}
} else {
}
}
break;
}


var G__18362 = seq__18210_18272;
var G__18363 = chunk__18211_18273;
var G__18364 = count__18212_18274;
var G__18365 = (i__18213_18275 + (1));
seq__18210_18272 = G__18362;
chunk__18211_18273 = G__18363;
count__18212_18274 = G__18364;
i__18213_18275 = G__18365;
continue;
} else {
var temp__5735__auto___18366 = cljs.core.seq.call(null,seq__18210_18272);
if(temp__5735__auto___18366){
var seq__18210_18367__$1 = temp__5735__auto___18366;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18210_18367__$1)){
var c__4461__auto___18368 = cljs.core.chunk_first.call(null,seq__18210_18367__$1);
var G__18369 = cljs.core.chunk_rest.call(null,seq__18210_18367__$1);
var G__18370 = c__4461__auto___18368;
var G__18371 = cljs.core.count.call(null,c__4461__auto___18368);
var G__18372 = (0);
seq__18210_18272 = G__18369;
chunk__18211_18273 = G__18370;
count__18212_18274 = G__18371;
i__18213_18275 = G__18372;
continue;
} else {
var vec__18243_18373 = cljs.core.first.call(null,seq__18210_18367__$1);
var line_18374 = cljs.core.nth.call(null,vec__18243_18373,(0),null);
var columns_18375 = cljs.core.nth.call(null,vec__18243_18373,(1),null);
var seq__18246_18376 = cljs.core.seq.call(null,columns_18375);
var chunk__18247_18377 = null;
var count__18248_18378 = (0);
var i__18249_18379 = (0);
while(true){
if((i__18249_18379 < count__18248_18378)){
var vec__18250_18380 = cljs.core._nth.call(null,chunk__18247_18377,i__18249_18379);
var column_18381 = cljs.core.nth.call(null,vec__18250_18380,(0),null);
var column_info_18382 = cljs.core.nth.call(null,vec__18250_18380,(1),null);
var seq__18253_18383 = cljs.core.seq.call(null,column_info_18382);
var chunk__18254_18384 = null;
var count__18255_18385 = (0);
var i__18256_18386 = (0);
while(true){
if((i__18256_18386 < count__18255_18385)){
var map__18257_18387 = cljs.core._nth.call(null,chunk__18254_18384,i__18256_18386);
var map__18257_18388__$1 = (((((!((map__18257_18387 == null))))?(((((map__18257_18387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18257_18387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18257_18387):map__18257_18387);
var gline_18389 = cljs.core.get.call(null,map__18257_18388__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_18390 = cljs.core.get.call(null,map__18257_18388__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_18391 = cljs.core.get.call(null,map__18257_18388__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_18389], null),cljs.core.fnil.call(null,((function (seq__18253_18383,chunk__18254_18384,count__18255_18385,i__18256_18386,seq__18246_18376,chunk__18247_18377,count__18248_18378,i__18249_18379,seq__18210_18272,chunk__18211_18273,count__18212_18274,i__18213_18275,map__18257_18387,map__18257_18388__$1,gline_18389,gcol_18390,name_18391,vec__18250_18380,column_18381,column_info_18382,vec__18243_18373,line_18374,columns_18375,seq__18210_18367__$1,temp__5735__auto___18366,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_18390], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_18374,new cljs.core.Keyword(null,"col","col",-1959363084),column_18381,new cljs.core.Keyword(null,"name","name",1843675177),name_18391], null));
});})(seq__18253_18383,chunk__18254_18384,count__18255_18385,i__18256_18386,seq__18246_18376,chunk__18247_18377,count__18248_18378,i__18249_18379,seq__18210_18272,chunk__18211_18273,count__18212_18274,i__18213_18275,map__18257_18387,map__18257_18388__$1,gline_18389,gcol_18390,name_18391,vec__18250_18380,column_18381,column_info_18382,vec__18243_18373,line_18374,columns_18375,seq__18210_18367__$1,temp__5735__auto___18366,inverted))
,cljs.core.sorted_map.call(null)));


var G__18392 = seq__18253_18383;
var G__18393 = chunk__18254_18384;
var G__18394 = count__18255_18385;
var G__18395 = (i__18256_18386 + (1));
seq__18253_18383 = G__18392;
chunk__18254_18384 = G__18393;
count__18255_18385 = G__18394;
i__18256_18386 = G__18395;
continue;
} else {
var temp__5735__auto___18396__$1 = cljs.core.seq.call(null,seq__18253_18383);
if(temp__5735__auto___18396__$1){
var seq__18253_18397__$1 = temp__5735__auto___18396__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18253_18397__$1)){
var c__4461__auto___18398 = cljs.core.chunk_first.call(null,seq__18253_18397__$1);
var G__18399 = cljs.core.chunk_rest.call(null,seq__18253_18397__$1);
var G__18400 = c__4461__auto___18398;
var G__18401 = cljs.core.count.call(null,c__4461__auto___18398);
var G__18402 = (0);
seq__18253_18383 = G__18399;
chunk__18254_18384 = G__18400;
count__18255_18385 = G__18401;
i__18256_18386 = G__18402;
continue;
} else {
var map__18259_18403 = cljs.core.first.call(null,seq__18253_18397__$1);
var map__18259_18404__$1 = (((((!((map__18259_18403 == null))))?(((((map__18259_18403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18259_18403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18259_18403):map__18259_18403);
var gline_18405 = cljs.core.get.call(null,map__18259_18404__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_18406 = cljs.core.get.call(null,map__18259_18404__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_18407 = cljs.core.get.call(null,map__18259_18404__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_18405], null),cljs.core.fnil.call(null,((function (seq__18253_18383,chunk__18254_18384,count__18255_18385,i__18256_18386,seq__18246_18376,chunk__18247_18377,count__18248_18378,i__18249_18379,seq__18210_18272,chunk__18211_18273,count__18212_18274,i__18213_18275,map__18259_18403,map__18259_18404__$1,gline_18405,gcol_18406,name_18407,seq__18253_18397__$1,temp__5735__auto___18396__$1,vec__18250_18380,column_18381,column_info_18382,vec__18243_18373,line_18374,columns_18375,seq__18210_18367__$1,temp__5735__auto___18366,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_18406], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_18374,new cljs.core.Keyword(null,"col","col",-1959363084),column_18381,new cljs.core.Keyword(null,"name","name",1843675177),name_18407], null));
});})(seq__18253_18383,chunk__18254_18384,count__18255_18385,i__18256_18386,seq__18246_18376,chunk__18247_18377,count__18248_18378,i__18249_18379,seq__18210_18272,chunk__18211_18273,count__18212_18274,i__18213_18275,map__18259_18403,map__18259_18404__$1,gline_18405,gcol_18406,name_18407,seq__18253_18397__$1,temp__5735__auto___18396__$1,vec__18250_18380,column_18381,column_info_18382,vec__18243_18373,line_18374,columns_18375,seq__18210_18367__$1,temp__5735__auto___18366,inverted))
,cljs.core.sorted_map.call(null)));


var G__18408 = cljs.core.next.call(null,seq__18253_18397__$1);
var G__18409 = null;
var G__18410 = (0);
var G__18411 = (0);
seq__18253_18383 = G__18408;
chunk__18254_18384 = G__18409;
count__18255_18385 = G__18410;
i__18256_18386 = G__18411;
continue;
}
} else {
}
}
break;
}


var G__18412 = seq__18246_18376;
var G__18413 = chunk__18247_18377;
var G__18414 = count__18248_18378;
var G__18415 = (i__18249_18379 + (1));
seq__18246_18376 = G__18412;
chunk__18247_18377 = G__18413;
count__18248_18378 = G__18414;
i__18249_18379 = G__18415;
continue;
} else {
var temp__5735__auto___18416__$1 = cljs.core.seq.call(null,seq__18246_18376);
if(temp__5735__auto___18416__$1){
var seq__18246_18417__$1 = temp__5735__auto___18416__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18246_18417__$1)){
var c__4461__auto___18418 = cljs.core.chunk_first.call(null,seq__18246_18417__$1);
var G__18419 = cljs.core.chunk_rest.call(null,seq__18246_18417__$1);
var G__18420 = c__4461__auto___18418;
var G__18421 = cljs.core.count.call(null,c__4461__auto___18418);
var G__18422 = (0);
seq__18246_18376 = G__18419;
chunk__18247_18377 = G__18420;
count__18248_18378 = G__18421;
i__18249_18379 = G__18422;
continue;
} else {
var vec__18261_18423 = cljs.core.first.call(null,seq__18246_18417__$1);
var column_18424 = cljs.core.nth.call(null,vec__18261_18423,(0),null);
var column_info_18425 = cljs.core.nth.call(null,vec__18261_18423,(1),null);
var seq__18264_18426 = cljs.core.seq.call(null,column_info_18425);
var chunk__18265_18427 = null;
var count__18266_18428 = (0);
var i__18267_18429 = (0);
while(true){
if((i__18267_18429 < count__18266_18428)){
var map__18268_18430 = cljs.core._nth.call(null,chunk__18265_18427,i__18267_18429);
var map__18268_18431__$1 = (((((!((map__18268_18430 == null))))?(((((map__18268_18430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18268_18430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18268_18430):map__18268_18430);
var gline_18432 = cljs.core.get.call(null,map__18268_18431__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_18433 = cljs.core.get.call(null,map__18268_18431__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_18434 = cljs.core.get.call(null,map__18268_18431__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_18432], null),cljs.core.fnil.call(null,((function (seq__18264_18426,chunk__18265_18427,count__18266_18428,i__18267_18429,seq__18246_18376,chunk__18247_18377,count__18248_18378,i__18249_18379,seq__18210_18272,chunk__18211_18273,count__18212_18274,i__18213_18275,map__18268_18430,map__18268_18431__$1,gline_18432,gcol_18433,name_18434,vec__18261_18423,column_18424,column_info_18425,seq__18246_18417__$1,temp__5735__auto___18416__$1,vec__18243_18373,line_18374,columns_18375,seq__18210_18367__$1,temp__5735__auto___18366,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_18433], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_18374,new cljs.core.Keyword(null,"col","col",-1959363084),column_18424,new cljs.core.Keyword(null,"name","name",1843675177),name_18434], null));
});})(seq__18264_18426,chunk__18265_18427,count__18266_18428,i__18267_18429,seq__18246_18376,chunk__18247_18377,count__18248_18378,i__18249_18379,seq__18210_18272,chunk__18211_18273,count__18212_18274,i__18213_18275,map__18268_18430,map__18268_18431__$1,gline_18432,gcol_18433,name_18434,vec__18261_18423,column_18424,column_info_18425,seq__18246_18417__$1,temp__5735__auto___18416__$1,vec__18243_18373,line_18374,columns_18375,seq__18210_18367__$1,temp__5735__auto___18366,inverted))
,cljs.core.sorted_map.call(null)));


var G__18435 = seq__18264_18426;
var G__18436 = chunk__18265_18427;
var G__18437 = count__18266_18428;
var G__18438 = (i__18267_18429 + (1));
seq__18264_18426 = G__18435;
chunk__18265_18427 = G__18436;
count__18266_18428 = G__18437;
i__18267_18429 = G__18438;
continue;
} else {
var temp__5735__auto___18439__$2 = cljs.core.seq.call(null,seq__18264_18426);
if(temp__5735__auto___18439__$2){
var seq__18264_18440__$1 = temp__5735__auto___18439__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18264_18440__$1)){
var c__4461__auto___18441 = cljs.core.chunk_first.call(null,seq__18264_18440__$1);
var G__18442 = cljs.core.chunk_rest.call(null,seq__18264_18440__$1);
var G__18443 = c__4461__auto___18441;
var G__18444 = cljs.core.count.call(null,c__4461__auto___18441);
var G__18445 = (0);
seq__18264_18426 = G__18442;
chunk__18265_18427 = G__18443;
count__18266_18428 = G__18444;
i__18267_18429 = G__18445;
continue;
} else {
var map__18270_18446 = cljs.core.first.call(null,seq__18264_18440__$1);
var map__18270_18447__$1 = (((((!((map__18270_18446 == null))))?(((((map__18270_18446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18270_18446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18270_18446):map__18270_18446);
var gline_18448 = cljs.core.get.call(null,map__18270_18447__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_18449 = cljs.core.get.call(null,map__18270_18447__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_18450 = cljs.core.get.call(null,map__18270_18447__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_18448], null),cljs.core.fnil.call(null,((function (seq__18264_18426,chunk__18265_18427,count__18266_18428,i__18267_18429,seq__18246_18376,chunk__18247_18377,count__18248_18378,i__18249_18379,seq__18210_18272,chunk__18211_18273,count__18212_18274,i__18213_18275,map__18270_18446,map__18270_18447__$1,gline_18448,gcol_18449,name_18450,seq__18264_18440__$1,temp__5735__auto___18439__$2,vec__18261_18423,column_18424,column_info_18425,seq__18246_18417__$1,temp__5735__auto___18416__$1,vec__18243_18373,line_18374,columns_18375,seq__18210_18367__$1,temp__5735__auto___18366,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_18449], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_18374,new cljs.core.Keyword(null,"col","col",-1959363084),column_18424,new cljs.core.Keyword(null,"name","name",1843675177),name_18450], null));
});})(seq__18264_18426,chunk__18265_18427,count__18266_18428,i__18267_18429,seq__18246_18376,chunk__18247_18377,count__18248_18378,i__18249_18379,seq__18210_18272,chunk__18211_18273,count__18212_18274,i__18213_18275,map__18270_18446,map__18270_18447__$1,gline_18448,gcol_18449,name_18450,seq__18264_18440__$1,temp__5735__auto___18439__$2,vec__18261_18423,column_18424,column_info_18425,seq__18246_18417__$1,temp__5735__auto___18416__$1,vec__18243_18373,line_18374,columns_18375,seq__18210_18367__$1,temp__5735__auto___18366,inverted))
,cljs.core.sorted_map.call(null)));


var G__18451 = cljs.core.next.call(null,seq__18264_18440__$1);
var G__18452 = null;
var G__18453 = (0);
var G__18454 = (0);
seq__18264_18426 = G__18451;
chunk__18265_18427 = G__18452;
count__18266_18428 = G__18453;
i__18267_18429 = G__18454;
continue;
}
} else {
}
}
break;
}


var G__18455 = cljs.core.next.call(null,seq__18246_18417__$1);
var G__18456 = null;
var G__18457 = (0);
var G__18458 = (0);
seq__18246_18376 = G__18455;
chunk__18247_18377 = G__18456;
count__18248_18378 = G__18457;
i__18249_18379 = G__18458;
continue;
}
} else {
}
}
break;
}


var G__18459 = cljs.core.next.call(null,seq__18210_18367__$1);
var G__18460 = null;
var G__18461 = (0);
var G__18462 = (0);
seq__18210_18272 = G__18459;
chunk__18211_18273 = G__18460;
count__18212_18274 = G__18461;
i__18213_18275 = G__18462;
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
