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
return cljs.core.reduce.call(null,(function (m,p__29455){
var vec__29456 = p__29455;
var i = cljs.core.nth.call(null,vec__29456,(0),null);
var v = cljs.core.nth.call(null,vec__29456,(1),null);
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
var vec__29459 = seg;
var gcol = cljs.core.nth.call(null,vec__29459,(0),null);
var source = cljs.core.nth.call(null,vec__29459,(1),null);
var line = cljs.core.nth.call(null,vec__29459,(2),null);
var col = cljs.core.nth.call(null,vec__29459,(3),null);
var name = cljs.core.nth.call(null,vec__29459,(4),null);
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
var vec__29462 = seg;
var gcol = cljs.core.nth.call(null,vec__29462,(0),null);
var source = cljs.core.nth.call(null,vec__29462,(1),null);
var line = cljs.core.nth.call(null,vec__29462,(2),null);
var col = cljs.core.nth.call(null,vec__29462,(3),null);
var name = cljs.core.nth.call(null,vec__29462,(4),null);
var vec__29465 = relseg;
var rgcol = cljs.core.nth.call(null,vec__29465,(0),null);
var rsource = cljs.core.nth.call(null,vec__29465,(1),null);
var rline = cljs.core.nth.call(null,vec__29465,(2),null);
var rcol = cljs.core.nth.call(null,vec__29465,(3),null);
var rname = cljs.core.nth.call(null,vec__29465,(4),null);
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
var map__29468 = segmap;
var map__29468__$1 = (((((!((map__29468 == null))))?(((((map__29468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29468):map__29468);
var gcol = cljs.core.get.call(null,map__29468__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__29468__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__29468__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__29468__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__29468__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__29468,map__29468__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__29468,map__29468__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__29468,map__29468__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__29468,map__29468__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__29468,map__29468__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__29468,map__29468__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__29471 = arguments.length;
switch (G__29471) {
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
var vec__29472 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__29476 = cljs.core.next.call(null,segs__$1);
var G__29477 = nrelseg;
var G__29478 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__29476;
relseg__$1 = G__29477;
result__$1 = G__29478;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__29472,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__29472,(1),null);
var G__29479 = (gline + (1));
var G__29480 = cljs.core.next.call(null,lines__$1);
var G__29481 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__29482 = result__$1;
gline = G__29479;
lines__$1 = G__29480;
relseg = G__29481;
result = G__29482;
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
var map__29484 = segmap;
var map__29484__$1 = (((((!((map__29484 == null))))?(((((map__29484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29484):map__29484);
var gcol = cljs.core.get.call(null,map__29484__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__29484__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__29484__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__29484__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__29484__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__29484,map__29484__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__29484,map__29484__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__29483_SHARP_){
return cljs.core.conj.call(null,p1__29483_SHARP_,d__$1);
});})(map__29484,map__29484__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__29484,map__29484__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__29487 = arguments.length;
switch (G__29487) {
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
var vec__29488 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__29492 = cljs.core.next.call(null,segs__$1);
var G__29493 = nrelseg;
var G__29494 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__29492;
relseg__$1 = G__29493;
result__$1 = G__29494;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__29488,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__29488,(1),null);
var G__29495 = (gline + (1));
var G__29496 = cljs.core.next.call(null,lines__$1);
var G__29497 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__29498 = result__$1;
gline = G__29495;
lines__$1 = G__29496;
relseg = G__29497;
result = G__29498;
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
return (function (p__29499){
var vec__29500 = p__29499;
var _ = cljs.core.nth.call(null,vec__29500,(0),null);
var source = cljs.core.nth.call(null,vec__29500,(1),null);
var line = cljs.core.nth.call(null,vec__29500,(2),null);
var col = cljs.core.nth.call(null,vec__29500,(3),null);
var name = cljs.core.nth.call(null,vec__29500,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__29503){
var vec__29504 = p__29503;
var gcol = cljs.core.nth.call(null,vec__29504,(0),null);
var sidx = cljs.core.nth.call(null,vec__29504,(1),null);
var line = cljs.core.nth.call(null,vec__29504,(2),null);
var col = cljs.core.nth.call(null,vec__29504,(3),null);
var name = cljs.core.nth.call(null,vec__29504,(4),null);
var seg = vec__29504;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__29504,gcol,sidx,line,col,name,seg,relseg){
return (function (p__29507){
var vec__29508 = p__29507;
var _ = cljs.core.nth.call(null,vec__29508,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__29508,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__29508,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__29508,(3),null);
var lname = cljs.core.nth.call(null,vec__29508,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__29504,gcol,sidx,line,col,name,seg,relseg))
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
var seq__29514 = cljs.core.seq.call(null,infos);
var chunk__29515 = null;
var count__29516 = (0);
var i__29517 = (0);
while(true){
if((i__29517 < count__29516)){
var info = cljs.core._nth.call(null,chunk__29515,i__29517);
var segv_29596 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_29597 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_29598 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_29597 > (lc_29598 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__29514,chunk__29515,count__29516,i__29517,segv_29596,gline_29597,lc_29598,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_29597 - (lc_29598 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_29596], null));
});})(seq__29514,chunk__29515,count__29516,i__29517,segv_29596,gline_29597,lc_29598,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__29514,chunk__29515,count__29516,i__29517,segv_29596,gline_29597,lc_29598,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29597], null),cljs.core.conj,segv_29596);
});})(seq__29514,chunk__29515,count__29516,i__29517,segv_29596,gline_29597,lc_29598,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__29599 = seq__29514;
var G__29600 = chunk__29515;
var G__29601 = count__29516;
var G__29602 = (i__29517 + (1));
seq__29514 = G__29599;
chunk__29515 = G__29600;
count__29516 = G__29601;
i__29517 = G__29602;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__29514);
if(temp__5735__auto__){
var seq__29514__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29514__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__29514__$1);
var G__29603 = cljs.core.chunk_rest.call(null,seq__29514__$1);
var G__29604 = c__4461__auto__;
var G__29605 = cljs.core.count.call(null,c__4461__auto__);
var G__29606 = (0);
seq__29514 = G__29603;
chunk__29515 = G__29604;
count__29516 = G__29605;
i__29517 = G__29606;
continue;
} else {
var info = cljs.core.first.call(null,seq__29514__$1);
var segv_29607 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_29608 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_29609 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_29608 > (lc_29609 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__29514,chunk__29515,count__29516,i__29517,segv_29607,gline_29608,lc_29609,info,seq__29514__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_29608 - (lc_29609 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_29607], null));
});})(seq__29514,chunk__29515,count__29516,i__29517,segv_29607,gline_29608,lc_29609,info,seq__29514__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__29514,chunk__29515,count__29516,i__29517,segv_29607,gline_29608,lc_29609,info,seq__29514__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29608], null),cljs.core.conj,segv_29607);
});})(seq__29514,chunk__29515,count__29516,i__29517,segv_29607,gline_29608,lc_29609,info,seq__29514__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__29610 = cljs.core.next.call(null,seq__29514__$1);
var G__29611 = null;
var G__29612 = (0);
var G__29613 = (0);
seq__29514 = G__29610;
chunk__29515 = G__29611;
count__29516 = G__29612;
i__29517 = G__29613;
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
var seq__29518_29614 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__29519_29615 = null;
var count__29520_29616 = (0);
var i__29521_29617 = (0);
while(true){
if((i__29521_29617 < count__29520_29616)){
var vec__29522_29618 = cljs.core._nth.call(null,chunk__29519_29615,i__29521_29617);
var source_idx_29619 = cljs.core.nth.call(null,vec__29522_29618,(0),null);
var vec__29525_29620 = cljs.core.nth.call(null,vec__29522_29618,(1),null);
var __29621 = cljs.core.nth.call(null,vec__29525_29620,(0),null);
var lines_29622__$1 = cljs.core.nth.call(null,vec__29525_29620,(1),null);
var seq__29528_29623 = cljs.core.seq.call(null,lines_29622__$1);
var chunk__29529_29624 = null;
var count__29530_29625 = (0);
var i__29531_29626 = (0);
while(true){
if((i__29531_29626 < count__29530_29625)){
var vec__29532_29627 = cljs.core._nth.call(null,chunk__29529_29624,i__29531_29626);
var line_29628 = cljs.core.nth.call(null,vec__29532_29627,(0),null);
var cols_29629 = cljs.core.nth.call(null,vec__29532_29627,(1),null);
var seq__29535_29630 = cljs.core.seq.call(null,cols_29629);
var chunk__29536_29631 = null;
var count__29537_29632 = (0);
var i__29538_29633 = (0);
while(true){
if((i__29538_29633 < count__29537_29632)){
var vec__29539_29634 = cljs.core._nth.call(null,chunk__29536_29631,i__29538_29633);
var col_29635 = cljs.core.nth.call(null,vec__29539_29634,(0),null);
var infos_29636 = cljs.core.nth.call(null,vec__29539_29634,(1),null);
encode_cols.call(null,infos_29636,source_idx_29619,line_29628,col_29635);


var G__29637 = seq__29535_29630;
var G__29638 = chunk__29536_29631;
var G__29639 = count__29537_29632;
var G__29640 = (i__29538_29633 + (1));
seq__29535_29630 = G__29637;
chunk__29536_29631 = G__29638;
count__29537_29632 = G__29639;
i__29538_29633 = G__29640;
continue;
} else {
var temp__5735__auto___29641 = cljs.core.seq.call(null,seq__29535_29630);
if(temp__5735__auto___29641){
var seq__29535_29642__$1 = temp__5735__auto___29641;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29535_29642__$1)){
var c__4461__auto___29643 = cljs.core.chunk_first.call(null,seq__29535_29642__$1);
var G__29644 = cljs.core.chunk_rest.call(null,seq__29535_29642__$1);
var G__29645 = c__4461__auto___29643;
var G__29646 = cljs.core.count.call(null,c__4461__auto___29643);
var G__29647 = (0);
seq__29535_29630 = G__29644;
chunk__29536_29631 = G__29645;
count__29537_29632 = G__29646;
i__29538_29633 = G__29647;
continue;
} else {
var vec__29542_29648 = cljs.core.first.call(null,seq__29535_29642__$1);
var col_29649 = cljs.core.nth.call(null,vec__29542_29648,(0),null);
var infos_29650 = cljs.core.nth.call(null,vec__29542_29648,(1),null);
encode_cols.call(null,infos_29650,source_idx_29619,line_29628,col_29649);


var G__29651 = cljs.core.next.call(null,seq__29535_29642__$1);
var G__29652 = null;
var G__29653 = (0);
var G__29654 = (0);
seq__29535_29630 = G__29651;
chunk__29536_29631 = G__29652;
count__29537_29632 = G__29653;
i__29538_29633 = G__29654;
continue;
}
} else {
}
}
break;
}


var G__29655 = seq__29528_29623;
var G__29656 = chunk__29529_29624;
var G__29657 = count__29530_29625;
var G__29658 = (i__29531_29626 + (1));
seq__29528_29623 = G__29655;
chunk__29529_29624 = G__29656;
count__29530_29625 = G__29657;
i__29531_29626 = G__29658;
continue;
} else {
var temp__5735__auto___29659 = cljs.core.seq.call(null,seq__29528_29623);
if(temp__5735__auto___29659){
var seq__29528_29660__$1 = temp__5735__auto___29659;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29528_29660__$1)){
var c__4461__auto___29661 = cljs.core.chunk_first.call(null,seq__29528_29660__$1);
var G__29662 = cljs.core.chunk_rest.call(null,seq__29528_29660__$1);
var G__29663 = c__4461__auto___29661;
var G__29664 = cljs.core.count.call(null,c__4461__auto___29661);
var G__29665 = (0);
seq__29528_29623 = G__29662;
chunk__29529_29624 = G__29663;
count__29530_29625 = G__29664;
i__29531_29626 = G__29665;
continue;
} else {
var vec__29545_29666 = cljs.core.first.call(null,seq__29528_29660__$1);
var line_29667 = cljs.core.nth.call(null,vec__29545_29666,(0),null);
var cols_29668 = cljs.core.nth.call(null,vec__29545_29666,(1),null);
var seq__29548_29669 = cljs.core.seq.call(null,cols_29668);
var chunk__29549_29670 = null;
var count__29550_29671 = (0);
var i__29551_29672 = (0);
while(true){
if((i__29551_29672 < count__29550_29671)){
var vec__29552_29673 = cljs.core._nth.call(null,chunk__29549_29670,i__29551_29672);
var col_29674 = cljs.core.nth.call(null,vec__29552_29673,(0),null);
var infos_29675 = cljs.core.nth.call(null,vec__29552_29673,(1),null);
encode_cols.call(null,infos_29675,source_idx_29619,line_29667,col_29674);


var G__29676 = seq__29548_29669;
var G__29677 = chunk__29549_29670;
var G__29678 = count__29550_29671;
var G__29679 = (i__29551_29672 + (1));
seq__29548_29669 = G__29676;
chunk__29549_29670 = G__29677;
count__29550_29671 = G__29678;
i__29551_29672 = G__29679;
continue;
} else {
var temp__5735__auto___29680__$1 = cljs.core.seq.call(null,seq__29548_29669);
if(temp__5735__auto___29680__$1){
var seq__29548_29681__$1 = temp__5735__auto___29680__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29548_29681__$1)){
var c__4461__auto___29682 = cljs.core.chunk_first.call(null,seq__29548_29681__$1);
var G__29683 = cljs.core.chunk_rest.call(null,seq__29548_29681__$1);
var G__29684 = c__4461__auto___29682;
var G__29685 = cljs.core.count.call(null,c__4461__auto___29682);
var G__29686 = (0);
seq__29548_29669 = G__29683;
chunk__29549_29670 = G__29684;
count__29550_29671 = G__29685;
i__29551_29672 = G__29686;
continue;
} else {
var vec__29555_29687 = cljs.core.first.call(null,seq__29548_29681__$1);
var col_29688 = cljs.core.nth.call(null,vec__29555_29687,(0),null);
var infos_29689 = cljs.core.nth.call(null,vec__29555_29687,(1),null);
encode_cols.call(null,infos_29689,source_idx_29619,line_29667,col_29688);


var G__29690 = cljs.core.next.call(null,seq__29548_29681__$1);
var G__29691 = null;
var G__29692 = (0);
var G__29693 = (0);
seq__29548_29669 = G__29690;
chunk__29549_29670 = G__29691;
count__29550_29671 = G__29692;
i__29551_29672 = G__29693;
continue;
}
} else {
}
}
break;
}


var G__29694 = cljs.core.next.call(null,seq__29528_29660__$1);
var G__29695 = null;
var G__29696 = (0);
var G__29697 = (0);
seq__29528_29623 = G__29694;
chunk__29529_29624 = G__29695;
count__29530_29625 = G__29696;
i__29531_29626 = G__29697;
continue;
}
} else {
}
}
break;
}


var G__29698 = seq__29518_29614;
var G__29699 = chunk__29519_29615;
var G__29700 = count__29520_29616;
var G__29701 = (i__29521_29617 + (1));
seq__29518_29614 = G__29698;
chunk__29519_29615 = G__29699;
count__29520_29616 = G__29700;
i__29521_29617 = G__29701;
continue;
} else {
var temp__5735__auto___29702 = cljs.core.seq.call(null,seq__29518_29614);
if(temp__5735__auto___29702){
var seq__29518_29703__$1 = temp__5735__auto___29702;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29518_29703__$1)){
var c__4461__auto___29704 = cljs.core.chunk_first.call(null,seq__29518_29703__$1);
var G__29705 = cljs.core.chunk_rest.call(null,seq__29518_29703__$1);
var G__29706 = c__4461__auto___29704;
var G__29707 = cljs.core.count.call(null,c__4461__auto___29704);
var G__29708 = (0);
seq__29518_29614 = G__29705;
chunk__29519_29615 = G__29706;
count__29520_29616 = G__29707;
i__29521_29617 = G__29708;
continue;
} else {
var vec__29558_29709 = cljs.core.first.call(null,seq__29518_29703__$1);
var source_idx_29710 = cljs.core.nth.call(null,vec__29558_29709,(0),null);
var vec__29561_29711 = cljs.core.nth.call(null,vec__29558_29709,(1),null);
var __29712 = cljs.core.nth.call(null,vec__29561_29711,(0),null);
var lines_29713__$1 = cljs.core.nth.call(null,vec__29561_29711,(1),null);
var seq__29564_29714 = cljs.core.seq.call(null,lines_29713__$1);
var chunk__29565_29715 = null;
var count__29566_29716 = (0);
var i__29567_29717 = (0);
while(true){
if((i__29567_29717 < count__29566_29716)){
var vec__29568_29718 = cljs.core._nth.call(null,chunk__29565_29715,i__29567_29717);
var line_29719 = cljs.core.nth.call(null,vec__29568_29718,(0),null);
var cols_29720 = cljs.core.nth.call(null,vec__29568_29718,(1),null);
var seq__29571_29721 = cljs.core.seq.call(null,cols_29720);
var chunk__29572_29722 = null;
var count__29573_29723 = (0);
var i__29574_29724 = (0);
while(true){
if((i__29574_29724 < count__29573_29723)){
var vec__29575_29725 = cljs.core._nth.call(null,chunk__29572_29722,i__29574_29724);
var col_29726 = cljs.core.nth.call(null,vec__29575_29725,(0),null);
var infos_29727 = cljs.core.nth.call(null,vec__29575_29725,(1),null);
encode_cols.call(null,infos_29727,source_idx_29710,line_29719,col_29726);


var G__29728 = seq__29571_29721;
var G__29729 = chunk__29572_29722;
var G__29730 = count__29573_29723;
var G__29731 = (i__29574_29724 + (1));
seq__29571_29721 = G__29728;
chunk__29572_29722 = G__29729;
count__29573_29723 = G__29730;
i__29574_29724 = G__29731;
continue;
} else {
var temp__5735__auto___29732__$1 = cljs.core.seq.call(null,seq__29571_29721);
if(temp__5735__auto___29732__$1){
var seq__29571_29733__$1 = temp__5735__auto___29732__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29571_29733__$1)){
var c__4461__auto___29734 = cljs.core.chunk_first.call(null,seq__29571_29733__$1);
var G__29735 = cljs.core.chunk_rest.call(null,seq__29571_29733__$1);
var G__29736 = c__4461__auto___29734;
var G__29737 = cljs.core.count.call(null,c__4461__auto___29734);
var G__29738 = (0);
seq__29571_29721 = G__29735;
chunk__29572_29722 = G__29736;
count__29573_29723 = G__29737;
i__29574_29724 = G__29738;
continue;
} else {
var vec__29578_29739 = cljs.core.first.call(null,seq__29571_29733__$1);
var col_29740 = cljs.core.nth.call(null,vec__29578_29739,(0),null);
var infos_29741 = cljs.core.nth.call(null,vec__29578_29739,(1),null);
encode_cols.call(null,infos_29741,source_idx_29710,line_29719,col_29740);


var G__29742 = cljs.core.next.call(null,seq__29571_29733__$1);
var G__29743 = null;
var G__29744 = (0);
var G__29745 = (0);
seq__29571_29721 = G__29742;
chunk__29572_29722 = G__29743;
count__29573_29723 = G__29744;
i__29574_29724 = G__29745;
continue;
}
} else {
}
}
break;
}


var G__29746 = seq__29564_29714;
var G__29747 = chunk__29565_29715;
var G__29748 = count__29566_29716;
var G__29749 = (i__29567_29717 + (1));
seq__29564_29714 = G__29746;
chunk__29565_29715 = G__29747;
count__29566_29716 = G__29748;
i__29567_29717 = G__29749;
continue;
} else {
var temp__5735__auto___29750__$1 = cljs.core.seq.call(null,seq__29564_29714);
if(temp__5735__auto___29750__$1){
var seq__29564_29751__$1 = temp__5735__auto___29750__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29564_29751__$1)){
var c__4461__auto___29752 = cljs.core.chunk_first.call(null,seq__29564_29751__$1);
var G__29753 = cljs.core.chunk_rest.call(null,seq__29564_29751__$1);
var G__29754 = c__4461__auto___29752;
var G__29755 = cljs.core.count.call(null,c__4461__auto___29752);
var G__29756 = (0);
seq__29564_29714 = G__29753;
chunk__29565_29715 = G__29754;
count__29566_29716 = G__29755;
i__29567_29717 = G__29756;
continue;
} else {
var vec__29581_29757 = cljs.core.first.call(null,seq__29564_29751__$1);
var line_29758 = cljs.core.nth.call(null,vec__29581_29757,(0),null);
var cols_29759 = cljs.core.nth.call(null,vec__29581_29757,(1),null);
var seq__29584_29760 = cljs.core.seq.call(null,cols_29759);
var chunk__29585_29761 = null;
var count__29586_29762 = (0);
var i__29587_29763 = (0);
while(true){
if((i__29587_29763 < count__29586_29762)){
var vec__29588_29764 = cljs.core._nth.call(null,chunk__29585_29761,i__29587_29763);
var col_29765 = cljs.core.nth.call(null,vec__29588_29764,(0),null);
var infos_29766 = cljs.core.nth.call(null,vec__29588_29764,(1),null);
encode_cols.call(null,infos_29766,source_idx_29710,line_29758,col_29765);


var G__29767 = seq__29584_29760;
var G__29768 = chunk__29585_29761;
var G__29769 = count__29586_29762;
var G__29770 = (i__29587_29763 + (1));
seq__29584_29760 = G__29767;
chunk__29585_29761 = G__29768;
count__29586_29762 = G__29769;
i__29587_29763 = G__29770;
continue;
} else {
var temp__5735__auto___29771__$2 = cljs.core.seq.call(null,seq__29584_29760);
if(temp__5735__auto___29771__$2){
var seq__29584_29772__$1 = temp__5735__auto___29771__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29584_29772__$1)){
var c__4461__auto___29773 = cljs.core.chunk_first.call(null,seq__29584_29772__$1);
var G__29774 = cljs.core.chunk_rest.call(null,seq__29584_29772__$1);
var G__29775 = c__4461__auto___29773;
var G__29776 = cljs.core.count.call(null,c__4461__auto___29773);
var G__29777 = (0);
seq__29584_29760 = G__29774;
chunk__29585_29761 = G__29775;
count__29586_29762 = G__29776;
i__29587_29763 = G__29777;
continue;
} else {
var vec__29591_29778 = cljs.core.first.call(null,seq__29584_29772__$1);
var col_29779 = cljs.core.nth.call(null,vec__29591_29778,(0),null);
var infos_29780 = cljs.core.nth.call(null,vec__29591_29778,(1),null);
encode_cols.call(null,infos_29780,source_idx_29710,line_29758,col_29779);


var G__29781 = cljs.core.next.call(null,seq__29584_29772__$1);
var G__29782 = null;
var G__29783 = (0);
var G__29784 = (0);
seq__29584_29760 = G__29781;
chunk__29585_29761 = G__29782;
count__29586_29762 = G__29783;
i__29587_29763 = G__29784;
continue;
}
} else {
}
}
break;
}


var G__29785 = cljs.core.next.call(null,seq__29564_29751__$1);
var G__29786 = null;
var G__29787 = (0);
var G__29788 = (0);
seq__29564_29714 = G__29785;
chunk__29565_29715 = G__29786;
count__29566_29716 = G__29787;
i__29567_29717 = G__29788;
continue;
}
} else {
}
}
break;
}


var G__29789 = cljs.core.next.call(null,seq__29518_29703__$1);
var G__29790 = null;
var G__29791 = (0);
var G__29792 = (0);
seq__29518_29614 = G__29789;
chunk__29519_29615 = G__29790;
count__29520_29616 = G__29791;
i__29521_29617 = G__29792;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__29594 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__29511_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29511_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__29512_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__29512_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__29513_SHARP_){
return clojure.string.join.call(null,",",p1__29513_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__29595 = G__29594;
goog.object.set(G__29595,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__29595;
} else {
return G__29594;
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
var vec__29793 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__29793,(0),null);
var col_map = cljs.core.nth.call(null,vec__29793,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__29796 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__29796,(0),null);
var infos = cljs.core.nth.call(null,vec__29796,(1),null);
var G__29802 = cljs.core.next.call(null,col_map_seq);
var G__29803 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__29796,col,infos,vec__29793,line,col_map){
return (function (v,p__29799){
var map__29800 = p__29799;
var map__29800__$1 = (((((!((map__29800 == null))))?(((((map__29800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29800):map__29800);
var gline = cljs.core.get.call(null,map__29800__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__29800__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__29796,col,infos,vec__29793,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__29802;
new_cols = G__29803;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__29804 = cljs.core.next.call(null,line_map_seq);
var G__29805 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__29804;
new_lines = G__29805;
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
var seq__29806_29868 = cljs.core.seq.call(null,reverse_map);
var chunk__29807_29869 = null;
var count__29808_29870 = (0);
var i__29809_29871 = (0);
while(true){
if((i__29809_29871 < count__29808_29870)){
var vec__29810_29872 = cljs.core._nth.call(null,chunk__29807_29869,i__29809_29871);
var line_29873 = cljs.core.nth.call(null,vec__29810_29872,(0),null);
var columns_29874 = cljs.core.nth.call(null,vec__29810_29872,(1),null);
var seq__29813_29875 = cljs.core.seq.call(null,columns_29874);
var chunk__29814_29876 = null;
var count__29815_29877 = (0);
var i__29816_29878 = (0);
while(true){
if((i__29816_29878 < count__29815_29877)){
var vec__29817_29879 = cljs.core._nth.call(null,chunk__29814_29876,i__29816_29878);
var column_29880 = cljs.core.nth.call(null,vec__29817_29879,(0),null);
var column_info_29881 = cljs.core.nth.call(null,vec__29817_29879,(1),null);
var seq__29820_29882 = cljs.core.seq.call(null,column_info_29881);
var chunk__29821_29883 = null;
var count__29822_29884 = (0);
var i__29823_29885 = (0);
while(true){
if((i__29823_29885 < count__29822_29884)){
var map__29824_29886 = cljs.core._nth.call(null,chunk__29821_29883,i__29823_29885);
var map__29824_29887__$1 = (((((!((map__29824_29886 == null))))?(((((map__29824_29886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29824_29886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29824_29886):map__29824_29886);
var gline_29888 = cljs.core.get.call(null,map__29824_29887__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29889 = cljs.core.get.call(null,map__29824_29887__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29890 = cljs.core.get.call(null,map__29824_29887__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29888], null),cljs.core.fnil.call(null,((function (seq__29820_29882,chunk__29821_29883,count__29822_29884,i__29823_29885,seq__29813_29875,chunk__29814_29876,count__29815_29877,i__29816_29878,seq__29806_29868,chunk__29807_29869,count__29808_29870,i__29809_29871,map__29824_29886,map__29824_29887__$1,gline_29888,gcol_29889,name_29890,vec__29817_29879,column_29880,column_info_29881,vec__29810_29872,line_29873,columns_29874,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29889], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29873,new cljs.core.Keyword(null,"col","col",-1959363084),column_29880,new cljs.core.Keyword(null,"name","name",1843675177),name_29890], null));
});})(seq__29820_29882,chunk__29821_29883,count__29822_29884,i__29823_29885,seq__29813_29875,chunk__29814_29876,count__29815_29877,i__29816_29878,seq__29806_29868,chunk__29807_29869,count__29808_29870,i__29809_29871,map__29824_29886,map__29824_29887__$1,gline_29888,gcol_29889,name_29890,vec__29817_29879,column_29880,column_info_29881,vec__29810_29872,line_29873,columns_29874,inverted))
,cljs.core.sorted_map.call(null)));


var G__29891 = seq__29820_29882;
var G__29892 = chunk__29821_29883;
var G__29893 = count__29822_29884;
var G__29894 = (i__29823_29885 + (1));
seq__29820_29882 = G__29891;
chunk__29821_29883 = G__29892;
count__29822_29884 = G__29893;
i__29823_29885 = G__29894;
continue;
} else {
var temp__5735__auto___29895 = cljs.core.seq.call(null,seq__29820_29882);
if(temp__5735__auto___29895){
var seq__29820_29896__$1 = temp__5735__auto___29895;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29820_29896__$1)){
var c__4461__auto___29897 = cljs.core.chunk_first.call(null,seq__29820_29896__$1);
var G__29898 = cljs.core.chunk_rest.call(null,seq__29820_29896__$1);
var G__29899 = c__4461__auto___29897;
var G__29900 = cljs.core.count.call(null,c__4461__auto___29897);
var G__29901 = (0);
seq__29820_29882 = G__29898;
chunk__29821_29883 = G__29899;
count__29822_29884 = G__29900;
i__29823_29885 = G__29901;
continue;
} else {
var map__29826_29902 = cljs.core.first.call(null,seq__29820_29896__$1);
var map__29826_29903__$1 = (((((!((map__29826_29902 == null))))?(((((map__29826_29902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29826_29902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29826_29902):map__29826_29902);
var gline_29904 = cljs.core.get.call(null,map__29826_29903__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29905 = cljs.core.get.call(null,map__29826_29903__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29906 = cljs.core.get.call(null,map__29826_29903__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29904], null),cljs.core.fnil.call(null,((function (seq__29820_29882,chunk__29821_29883,count__29822_29884,i__29823_29885,seq__29813_29875,chunk__29814_29876,count__29815_29877,i__29816_29878,seq__29806_29868,chunk__29807_29869,count__29808_29870,i__29809_29871,map__29826_29902,map__29826_29903__$1,gline_29904,gcol_29905,name_29906,seq__29820_29896__$1,temp__5735__auto___29895,vec__29817_29879,column_29880,column_info_29881,vec__29810_29872,line_29873,columns_29874,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29905], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29873,new cljs.core.Keyword(null,"col","col",-1959363084),column_29880,new cljs.core.Keyword(null,"name","name",1843675177),name_29906], null));
});})(seq__29820_29882,chunk__29821_29883,count__29822_29884,i__29823_29885,seq__29813_29875,chunk__29814_29876,count__29815_29877,i__29816_29878,seq__29806_29868,chunk__29807_29869,count__29808_29870,i__29809_29871,map__29826_29902,map__29826_29903__$1,gline_29904,gcol_29905,name_29906,seq__29820_29896__$1,temp__5735__auto___29895,vec__29817_29879,column_29880,column_info_29881,vec__29810_29872,line_29873,columns_29874,inverted))
,cljs.core.sorted_map.call(null)));


var G__29907 = cljs.core.next.call(null,seq__29820_29896__$1);
var G__29908 = null;
var G__29909 = (0);
var G__29910 = (0);
seq__29820_29882 = G__29907;
chunk__29821_29883 = G__29908;
count__29822_29884 = G__29909;
i__29823_29885 = G__29910;
continue;
}
} else {
}
}
break;
}


var G__29911 = seq__29813_29875;
var G__29912 = chunk__29814_29876;
var G__29913 = count__29815_29877;
var G__29914 = (i__29816_29878 + (1));
seq__29813_29875 = G__29911;
chunk__29814_29876 = G__29912;
count__29815_29877 = G__29913;
i__29816_29878 = G__29914;
continue;
} else {
var temp__5735__auto___29915 = cljs.core.seq.call(null,seq__29813_29875);
if(temp__5735__auto___29915){
var seq__29813_29916__$1 = temp__5735__auto___29915;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29813_29916__$1)){
var c__4461__auto___29917 = cljs.core.chunk_first.call(null,seq__29813_29916__$1);
var G__29918 = cljs.core.chunk_rest.call(null,seq__29813_29916__$1);
var G__29919 = c__4461__auto___29917;
var G__29920 = cljs.core.count.call(null,c__4461__auto___29917);
var G__29921 = (0);
seq__29813_29875 = G__29918;
chunk__29814_29876 = G__29919;
count__29815_29877 = G__29920;
i__29816_29878 = G__29921;
continue;
} else {
var vec__29828_29922 = cljs.core.first.call(null,seq__29813_29916__$1);
var column_29923 = cljs.core.nth.call(null,vec__29828_29922,(0),null);
var column_info_29924 = cljs.core.nth.call(null,vec__29828_29922,(1),null);
var seq__29831_29925 = cljs.core.seq.call(null,column_info_29924);
var chunk__29832_29926 = null;
var count__29833_29927 = (0);
var i__29834_29928 = (0);
while(true){
if((i__29834_29928 < count__29833_29927)){
var map__29835_29929 = cljs.core._nth.call(null,chunk__29832_29926,i__29834_29928);
var map__29835_29930__$1 = (((((!((map__29835_29929 == null))))?(((((map__29835_29929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29835_29929.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29835_29929):map__29835_29929);
var gline_29931 = cljs.core.get.call(null,map__29835_29930__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29932 = cljs.core.get.call(null,map__29835_29930__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29933 = cljs.core.get.call(null,map__29835_29930__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29931], null),cljs.core.fnil.call(null,((function (seq__29831_29925,chunk__29832_29926,count__29833_29927,i__29834_29928,seq__29813_29875,chunk__29814_29876,count__29815_29877,i__29816_29878,seq__29806_29868,chunk__29807_29869,count__29808_29870,i__29809_29871,map__29835_29929,map__29835_29930__$1,gline_29931,gcol_29932,name_29933,vec__29828_29922,column_29923,column_info_29924,seq__29813_29916__$1,temp__5735__auto___29915,vec__29810_29872,line_29873,columns_29874,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29932], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29873,new cljs.core.Keyword(null,"col","col",-1959363084),column_29923,new cljs.core.Keyword(null,"name","name",1843675177),name_29933], null));
});})(seq__29831_29925,chunk__29832_29926,count__29833_29927,i__29834_29928,seq__29813_29875,chunk__29814_29876,count__29815_29877,i__29816_29878,seq__29806_29868,chunk__29807_29869,count__29808_29870,i__29809_29871,map__29835_29929,map__29835_29930__$1,gline_29931,gcol_29932,name_29933,vec__29828_29922,column_29923,column_info_29924,seq__29813_29916__$1,temp__5735__auto___29915,vec__29810_29872,line_29873,columns_29874,inverted))
,cljs.core.sorted_map.call(null)));


var G__29934 = seq__29831_29925;
var G__29935 = chunk__29832_29926;
var G__29936 = count__29833_29927;
var G__29937 = (i__29834_29928 + (1));
seq__29831_29925 = G__29934;
chunk__29832_29926 = G__29935;
count__29833_29927 = G__29936;
i__29834_29928 = G__29937;
continue;
} else {
var temp__5735__auto___29938__$1 = cljs.core.seq.call(null,seq__29831_29925);
if(temp__5735__auto___29938__$1){
var seq__29831_29939__$1 = temp__5735__auto___29938__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29831_29939__$1)){
var c__4461__auto___29940 = cljs.core.chunk_first.call(null,seq__29831_29939__$1);
var G__29941 = cljs.core.chunk_rest.call(null,seq__29831_29939__$1);
var G__29942 = c__4461__auto___29940;
var G__29943 = cljs.core.count.call(null,c__4461__auto___29940);
var G__29944 = (0);
seq__29831_29925 = G__29941;
chunk__29832_29926 = G__29942;
count__29833_29927 = G__29943;
i__29834_29928 = G__29944;
continue;
} else {
var map__29837_29945 = cljs.core.first.call(null,seq__29831_29939__$1);
var map__29837_29946__$1 = (((((!((map__29837_29945 == null))))?(((((map__29837_29945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29837_29945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29837_29945):map__29837_29945);
var gline_29947 = cljs.core.get.call(null,map__29837_29946__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29948 = cljs.core.get.call(null,map__29837_29946__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29949 = cljs.core.get.call(null,map__29837_29946__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29947], null),cljs.core.fnil.call(null,((function (seq__29831_29925,chunk__29832_29926,count__29833_29927,i__29834_29928,seq__29813_29875,chunk__29814_29876,count__29815_29877,i__29816_29878,seq__29806_29868,chunk__29807_29869,count__29808_29870,i__29809_29871,map__29837_29945,map__29837_29946__$1,gline_29947,gcol_29948,name_29949,seq__29831_29939__$1,temp__5735__auto___29938__$1,vec__29828_29922,column_29923,column_info_29924,seq__29813_29916__$1,temp__5735__auto___29915,vec__29810_29872,line_29873,columns_29874,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29948], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29873,new cljs.core.Keyword(null,"col","col",-1959363084),column_29923,new cljs.core.Keyword(null,"name","name",1843675177),name_29949], null));
});})(seq__29831_29925,chunk__29832_29926,count__29833_29927,i__29834_29928,seq__29813_29875,chunk__29814_29876,count__29815_29877,i__29816_29878,seq__29806_29868,chunk__29807_29869,count__29808_29870,i__29809_29871,map__29837_29945,map__29837_29946__$1,gline_29947,gcol_29948,name_29949,seq__29831_29939__$1,temp__5735__auto___29938__$1,vec__29828_29922,column_29923,column_info_29924,seq__29813_29916__$1,temp__5735__auto___29915,vec__29810_29872,line_29873,columns_29874,inverted))
,cljs.core.sorted_map.call(null)));


var G__29950 = cljs.core.next.call(null,seq__29831_29939__$1);
var G__29951 = null;
var G__29952 = (0);
var G__29953 = (0);
seq__29831_29925 = G__29950;
chunk__29832_29926 = G__29951;
count__29833_29927 = G__29952;
i__29834_29928 = G__29953;
continue;
}
} else {
}
}
break;
}


var G__29954 = cljs.core.next.call(null,seq__29813_29916__$1);
var G__29955 = null;
var G__29956 = (0);
var G__29957 = (0);
seq__29813_29875 = G__29954;
chunk__29814_29876 = G__29955;
count__29815_29877 = G__29956;
i__29816_29878 = G__29957;
continue;
}
} else {
}
}
break;
}


var G__29958 = seq__29806_29868;
var G__29959 = chunk__29807_29869;
var G__29960 = count__29808_29870;
var G__29961 = (i__29809_29871 + (1));
seq__29806_29868 = G__29958;
chunk__29807_29869 = G__29959;
count__29808_29870 = G__29960;
i__29809_29871 = G__29961;
continue;
} else {
var temp__5735__auto___29962 = cljs.core.seq.call(null,seq__29806_29868);
if(temp__5735__auto___29962){
var seq__29806_29963__$1 = temp__5735__auto___29962;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29806_29963__$1)){
var c__4461__auto___29964 = cljs.core.chunk_first.call(null,seq__29806_29963__$1);
var G__29965 = cljs.core.chunk_rest.call(null,seq__29806_29963__$1);
var G__29966 = c__4461__auto___29964;
var G__29967 = cljs.core.count.call(null,c__4461__auto___29964);
var G__29968 = (0);
seq__29806_29868 = G__29965;
chunk__29807_29869 = G__29966;
count__29808_29870 = G__29967;
i__29809_29871 = G__29968;
continue;
} else {
var vec__29839_29969 = cljs.core.first.call(null,seq__29806_29963__$1);
var line_29970 = cljs.core.nth.call(null,vec__29839_29969,(0),null);
var columns_29971 = cljs.core.nth.call(null,vec__29839_29969,(1),null);
var seq__29842_29972 = cljs.core.seq.call(null,columns_29971);
var chunk__29843_29973 = null;
var count__29844_29974 = (0);
var i__29845_29975 = (0);
while(true){
if((i__29845_29975 < count__29844_29974)){
var vec__29846_29976 = cljs.core._nth.call(null,chunk__29843_29973,i__29845_29975);
var column_29977 = cljs.core.nth.call(null,vec__29846_29976,(0),null);
var column_info_29978 = cljs.core.nth.call(null,vec__29846_29976,(1),null);
var seq__29849_29979 = cljs.core.seq.call(null,column_info_29978);
var chunk__29850_29980 = null;
var count__29851_29981 = (0);
var i__29852_29982 = (0);
while(true){
if((i__29852_29982 < count__29851_29981)){
var map__29853_29983 = cljs.core._nth.call(null,chunk__29850_29980,i__29852_29982);
var map__29853_29984__$1 = (((((!((map__29853_29983 == null))))?(((((map__29853_29983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29853_29983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29853_29983):map__29853_29983);
var gline_29985 = cljs.core.get.call(null,map__29853_29984__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29986 = cljs.core.get.call(null,map__29853_29984__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29987 = cljs.core.get.call(null,map__29853_29984__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29985], null),cljs.core.fnil.call(null,((function (seq__29849_29979,chunk__29850_29980,count__29851_29981,i__29852_29982,seq__29842_29972,chunk__29843_29973,count__29844_29974,i__29845_29975,seq__29806_29868,chunk__29807_29869,count__29808_29870,i__29809_29871,map__29853_29983,map__29853_29984__$1,gline_29985,gcol_29986,name_29987,vec__29846_29976,column_29977,column_info_29978,vec__29839_29969,line_29970,columns_29971,seq__29806_29963__$1,temp__5735__auto___29962,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29986], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29970,new cljs.core.Keyword(null,"col","col",-1959363084),column_29977,new cljs.core.Keyword(null,"name","name",1843675177),name_29987], null));
});})(seq__29849_29979,chunk__29850_29980,count__29851_29981,i__29852_29982,seq__29842_29972,chunk__29843_29973,count__29844_29974,i__29845_29975,seq__29806_29868,chunk__29807_29869,count__29808_29870,i__29809_29871,map__29853_29983,map__29853_29984__$1,gline_29985,gcol_29986,name_29987,vec__29846_29976,column_29977,column_info_29978,vec__29839_29969,line_29970,columns_29971,seq__29806_29963__$1,temp__5735__auto___29962,inverted))
,cljs.core.sorted_map.call(null)));


var G__29988 = seq__29849_29979;
var G__29989 = chunk__29850_29980;
var G__29990 = count__29851_29981;
var G__29991 = (i__29852_29982 + (1));
seq__29849_29979 = G__29988;
chunk__29850_29980 = G__29989;
count__29851_29981 = G__29990;
i__29852_29982 = G__29991;
continue;
} else {
var temp__5735__auto___29992__$1 = cljs.core.seq.call(null,seq__29849_29979);
if(temp__5735__auto___29992__$1){
var seq__29849_29993__$1 = temp__5735__auto___29992__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29849_29993__$1)){
var c__4461__auto___29994 = cljs.core.chunk_first.call(null,seq__29849_29993__$1);
var G__29995 = cljs.core.chunk_rest.call(null,seq__29849_29993__$1);
var G__29996 = c__4461__auto___29994;
var G__29997 = cljs.core.count.call(null,c__4461__auto___29994);
var G__29998 = (0);
seq__29849_29979 = G__29995;
chunk__29850_29980 = G__29996;
count__29851_29981 = G__29997;
i__29852_29982 = G__29998;
continue;
} else {
var map__29855_29999 = cljs.core.first.call(null,seq__29849_29993__$1);
var map__29855_30000__$1 = (((((!((map__29855_29999 == null))))?(((((map__29855_29999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29855_29999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29855_29999):map__29855_29999);
var gline_30001 = cljs.core.get.call(null,map__29855_30000__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_30002 = cljs.core.get.call(null,map__29855_30000__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_30003 = cljs.core.get.call(null,map__29855_30000__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_30001], null),cljs.core.fnil.call(null,((function (seq__29849_29979,chunk__29850_29980,count__29851_29981,i__29852_29982,seq__29842_29972,chunk__29843_29973,count__29844_29974,i__29845_29975,seq__29806_29868,chunk__29807_29869,count__29808_29870,i__29809_29871,map__29855_29999,map__29855_30000__$1,gline_30001,gcol_30002,name_30003,seq__29849_29993__$1,temp__5735__auto___29992__$1,vec__29846_29976,column_29977,column_info_29978,vec__29839_29969,line_29970,columns_29971,seq__29806_29963__$1,temp__5735__auto___29962,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_30002], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29970,new cljs.core.Keyword(null,"col","col",-1959363084),column_29977,new cljs.core.Keyword(null,"name","name",1843675177),name_30003], null));
});})(seq__29849_29979,chunk__29850_29980,count__29851_29981,i__29852_29982,seq__29842_29972,chunk__29843_29973,count__29844_29974,i__29845_29975,seq__29806_29868,chunk__29807_29869,count__29808_29870,i__29809_29871,map__29855_29999,map__29855_30000__$1,gline_30001,gcol_30002,name_30003,seq__29849_29993__$1,temp__5735__auto___29992__$1,vec__29846_29976,column_29977,column_info_29978,vec__29839_29969,line_29970,columns_29971,seq__29806_29963__$1,temp__5735__auto___29962,inverted))
,cljs.core.sorted_map.call(null)));


var G__30004 = cljs.core.next.call(null,seq__29849_29993__$1);
var G__30005 = null;
var G__30006 = (0);
var G__30007 = (0);
seq__29849_29979 = G__30004;
chunk__29850_29980 = G__30005;
count__29851_29981 = G__30006;
i__29852_29982 = G__30007;
continue;
}
} else {
}
}
break;
}


var G__30008 = seq__29842_29972;
var G__30009 = chunk__29843_29973;
var G__30010 = count__29844_29974;
var G__30011 = (i__29845_29975 + (1));
seq__29842_29972 = G__30008;
chunk__29843_29973 = G__30009;
count__29844_29974 = G__30010;
i__29845_29975 = G__30011;
continue;
} else {
var temp__5735__auto___30012__$1 = cljs.core.seq.call(null,seq__29842_29972);
if(temp__5735__auto___30012__$1){
var seq__29842_30013__$1 = temp__5735__auto___30012__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29842_30013__$1)){
var c__4461__auto___30014 = cljs.core.chunk_first.call(null,seq__29842_30013__$1);
var G__30015 = cljs.core.chunk_rest.call(null,seq__29842_30013__$1);
var G__30016 = c__4461__auto___30014;
var G__30017 = cljs.core.count.call(null,c__4461__auto___30014);
var G__30018 = (0);
seq__29842_29972 = G__30015;
chunk__29843_29973 = G__30016;
count__29844_29974 = G__30017;
i__29845_29975 = G__30018;
continue;
} else {
var vec__29857_30019 = cljs.core.first.call(null,seq__29842_30013__$1);
var column_30020 = cljs.core.nth.call(null,vec__29857_30019,(0),null);
var column_info_30021 = cljs.core.nth.call(null,vec__29857_30019,(1),null);
var seq__29860_30022 = cljs.core.seq.call(null,column_info_30021);
var chunk__29861_30023 = null;
var count__29862_30024 = (0);
var i__29863_30025 = (0);
while(true){
if((i__29863_30025 < count__29862_30024)){
var map__29864_30026 = cljs.core._nth.call(null,chunk__29861_30023,i__29863_30025);
var map__29864_30027__$1 = (((((!((map__29864_30026 == null))))?(((((map__29864_30026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29864_30026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29864_30026):map__29864_30026);
var gline_30028 = cljs.core.get.call(null,map__29864_30027__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_30029 = cljs.core.get.call(null,map__29864_30027__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_30030 = cljs.core.get.call(null,map__29864_30027__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_30028], null),cljs.core.fnil.call(null,((function (seq__29860_30022,chunk__29861_30023,count__29862_30024,i__29863_30025,seq__29842_29972,chunk__29843_29973,count__29844_29974,i__29845_29975,seq__29806_29868,chunk__29807_29869,count__29808_29870,i__29809_29871,map__29864_30026,map__29864_30027__$1,gline_30028,gcol_30029,name_30030,vec__29857_30019,column_30020,column_info_30021,seq__29842_30013__$1,temp__5735__auto___30012__$1,vec__29839_29969,line_29970,columns_29971,seq__29806_29963__$1,temp__5735__auto___29962,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_30029], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29970,new cljs.core.Keyword(null,"col","col",-1959363084),column_30020,new cljs.core.Keyword(null,"name","name",1843675177),name_30030], null));
});})(seq__29860_30022,chunk__29861_30023,count__29862_30024,i__29863_30025,seq__29842_29972,chunk__29843_29973,count__29844_29974,i__29845_29975,seq__29806_29868,chunk__29807_29869,count__29808_29870,i__29809_29871,map__29864_30026,map__29864_30027__$1,gline_30028,gcol_30029,name_30030,vec__29857_30019,column_30020,column_info_30021,seq__29842_30013__$1,temp__5735__auto___30012__$1,vec__29839_29969,line_29970,columns_29971,seq__29806_29963__$1,temp__5735__auto___29962,inverted))
,cljs.core.sorted_map.call(null)));


var G__30031 = seq__29860_30022;
var G__30032 = chunk__29861_30023;
var G__30033 = count__29862_30024;
var G__30034 = (i__29863_30025 + (1));
seq__29860_30022 = G__30031;
chunk__29861_30023 = G__30032;
count__29862_30024 = G__30033;
i__29863_30025 = G__30034;
continue;
} else {
var temp__5735__auto___30035__$2 = cljs.core.seq.call(null,seq__29860_30022);
if(temp__5735__auto___30035__$2){
var seq__29860_30036__$1 = temp__5735__auto___30035__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29860_30036__$1)){
var c__4461__auto___30037 = cljs.core.chunk_first.call(null,seq__29860_30036__$1);
var G__30038 = cljs.core.chunk_rest.call(null,seq__29860_30036__$1);
var G__30039 = c__4461__auto___30037;
var G__30040 = cljs.core.count.call(null,c__4461__auto___30037);
var G__30041 = (0);
seq__29860_30022 = G__30038;
chunk__29861_30023 = G__30039;
count__29862_30024 = G__30040;
i__29863_30025 = G__30041;
continue;
} else {
var map__29866_30042 = cljs.core.first.call(null,seq__29860_30036__$1);
var map__29866_30043__$1 = (((((!((map__29866_30042 == null))))?(((((map__29866_30042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29866_30042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29866_30042):map__29866_30042);
var gline_30044 = cljs.core.get.call(null,map__29866_30043__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_30045 = cljs.core.get.call(null,map__29866_30043__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_30046 = cljs.core.get.call(null,map__29866_30043__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_30044], null),cljs.core.fnil.call(null,((function (seq__29860_30022,chunk__29861_30023,count__29862_30024,i__29863_30025,seq__29842_29972,chunk__29843_29973,count__29844_29974,i__29845_29975,seq__29806_29868,chunk__29807_29869,count__29808_29870,i__29809_29871,map__29866_30042,map__29866_30043__$1,gline_30044,gcol_30045,name_30046,seq__29860_30036__$1,temp__5735__auto___30035__$2,vec__29857_30019,column_30020,column_info_30021,seq__29842_30013__$1,temp__5735__auto___30012__$1,vec__29839_29969,line_29970,columns_29971,seq__29806_29963__$1,temp__5735__auto___29962,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_30045], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29970,new cljs.core.Keyword(null,"col","col",-1959363084),column_30020,new cljs.core.Keyword(null,"name","name",1843675177),name_30046], null));
});})(seq__29860_30022,chunk__29861_30023,count__29862_30024,i__29863_30025,seq__29842_29972,chunk__29843_29973,count__29844_29974,i__29845_29975,seq__29806_29868,chunk__29807_29869,count__29808_29870,i__29809_29871,map__29866_30042,map__29866_30043__$1,gline_30044,gcol_30045,name_30046,seq__29860_30036__$1,temp__5735__auto___30035__$2,vec__29857_30019,column_30020,column_info_30021,seq__29842_30013__$1,temp__5735__auto___30012__$1,vec__29839_29969,line_29970,columns_29971,seq__29806_29963__$1,temp__5735__auto___29962,inverted))
,cljs.core.sorted_map.call(null)));


var G__30047 = cljs.core.next.call(null,seq__29860_30036__$1);
var G__30048 = null;
var G__30049 = (0);
var G__30050 = (0);
seq__29860_30022 = G__30047;
chunk__29861_30023 = G__30048;
count__29862_30024 = G__30049;
i__29863_30025 = G__30050;
continue;
}
} else {
}
}
break;
}


var G__30051 = cljs.core.next.call(null,seq__29842_30013__$1);
var G__30052 = null;
var G__30053 = (0);
var G__30054 = (0);
seq__29842_29972 = G__30051;
chunk__29843_29973 = G__30052;
count__29844_29974 = G__30053;
i__29845_29975 = G__30054;
continue;
}
} else {
}
}
break;
}


var G__30055 = cljs.core.next.call(null,seq__29806_29963__$1);
var G__30056 = null;
var G__30057 = (0);
var G__30058 = (0);
seq__29806_29868 = G__30055;
chunk__29807_29869 = G__30056;
count__29808_29870 = G__30057;
i__29809_29871 = G__30058;
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
