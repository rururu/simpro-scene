// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.edn');
goog.require('goog.string.StringBuffer');
cljs.reader.zero_fill_right_and_truncate = (function cljs$reader$zero_fill_right_and_truncate(s,width){
if(cljs.core._EQ_.call(null,width,cljs.core.count.call(null,s))){
return s;
} else {
if((width < cljs.core.count.call(null,s))){
return cljs.core.subs.call(null,s,(0),width);
} else {
var b = (new goog.string.StringBuffer(s));
while(true){
if((b.getLength() < width)){
var G__16313 = b.append("0");
b = G__16313;
continue;
} else {
return b.toString();
}
break;
}

}
}
});
cljs.reader.divisible_QMARK_ = (function cljs$reader$divisible_QMARK_(num,div){
return (cljs.core.mod.call(null,num,div) === (0));
});
cljs.reader.indivisible_QMARK_ = (function cljs$reader$indivisible_QMARK_(num,div){
return cljs.core.not.call(null,cljs.reader.divisible_QMARK_.call(null,num,div));
});
cljs.reader.leap_year_QMARK_ = (function cljs$reader$leap_year_QMARK_(year){
var and__8889__auto__ = cljs.reader.divisible_QMARK_.call(null,year,(4));
if(cljs.core.truth_(and__8889__auto__)){
var or__8901__auto__ = cljs.reader.indivisible_QMARK_.call(null,year,(100));
if(cljs.core.truth_(or__8901__auto__)){
return or__8901__auto__;
} else {
return cljs.reader.divisible_QMARK_.call(null,year,(400));
}
} else {
return and__8889__auto__;
}
});
cljs.reader.days_in_month = (function (){var dim_norm = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(28),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
var dim_leap = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(29),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
return ((function (dim_norm,dim_leap){
return (function (month,leap_year_QMARK_){
return cljs.core.get.call(null,(cljs.core.truth_(leap_year_QMARK_)?dim_leap:dim_norm),month);
});
;})(dim_norm,dim_leap))
})();
cljs.reader.timestamp_regex = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
cljs.reader.parse_int = (function cljs$reader$parse_int(s){
var n = parseInt(s,(10));
if(cljs.core.not.call(null,isNaN(n))){
return n;
} else {
return null;
}
});
cljs.reader.check = (function cljs$reader$check(low,n,high,msg){
if(((low <= n)) && ((n <= high))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)," Failed:  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(low),"<=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"<=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(high)].join('')));
}

return n;
});
cljs.reader.parse_and_validate_timestamp = (function cljs$reader$parse_and_validate_timestamp(s){
var vec__16314 = cljs.core.re_matches.call(null,cljs.reader.timestamp_regex,s);
var _ = cljs.core.nth.call(null,vec__16314,(0),null);
var years = cljs.core.nth.call(null,vec__16314,(1),null);
var months = cljs.core.nth.call(null,vec__16314,(2),null);
var days = cljs.core.nth.call(null,vec__16314,(3),null);
var hours = cljs.core.nth.call(null,vec__16314,(4),null);
var minutes = cljs.core.nth.call(null,vec__16314,(5),null);
var seconds = cljs.core.nth.call(null,vec__16314,(6),null);
var fraction = cljs.core.nth.call(null,vec__16314,(7),null);
var offset_sign = cljs.core.nth.call(null,vec__16314,(8),null);
var offset_hours = cljs.core.nth.call(null,vec__16314,(9),null);
var offset_minutes = cljs.core.nth.call(null,vec__16314,(10),null);
var v = vec__16314;
if(cljs.core.not.call(null,v)){
throw (new Error(["Unrecognized date/time syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')));
} else {
var years__$1 = cljs.reader.parse_int.call(null,years);
var months__$1 = (function (){var or__8901__auto__ = cljs.reader.parse_int.call(null,months);
if(cljs.core.truth_(or__8901__auto__)){
return or__8901__auto__;
} else {
return (1);
}
})();
var days__$1 = (function (){var or__8901__auto__ = cljs.reader.parse_int.call(null,days);
if(cljs.core.truth_(or__8901__auto__)){
return or__8901__auto__;
} else {
return (1);
}
})();
var hours__$1 = (function (){var or__8901__auto__ = cljs.reader.parse_int.call(null,hours);
if(cljs.core.truth_(or__8901__auto__)){
return or__8901__auto__;
} else {
return (0);
}
})();
var minutes__$1 = (function (){var or__8901__auto__ = cljs.reader.parse_int.call(null,minutes);
if(cljs.core.truth_(or__8901__auto__)){
return or__8901__auto__;
} else {
return (0);
}
})();
var seconds__$1 = (function (){var or__8901__auto__ = cljs.reader.parse_int.call(null,seconds);
if(cljs.core.truth_(or__8901__auto__)){
return or__8901__auto__;
} else {
return (0);
}
})();
var fraction__$1 = (function (){var or__8901__auto__ = cljs.reader.parse_int.call(null,cljs.reader.zero_fill_right_and_truncate.call(null,fraction,(3)));
if(cljs.core.truth_(or__8901__auto__)){
return or__8901__auto__;
} else {
return (0);
}
})();
var offset_sign__$1 = ((cljs.core._EQ_.call(null,offset_sign,"-"))?(-1):(1));
var offset_hours__$1 = (function (){var or__8901__auto__ = cljs.reader.parse_int.call(null,offset_hours);
if(cljs.core.truth_(or__8901__auto__)){
return or__8901__auto__;
} else {
return (0);
}
})();
var offset_minutes__$1 = (function (){var or__8901__auto__ = cljs.reader.parse_int.call(null,offset_minutes);
if(cljs.core.truth_(or__8901__auto__)){
return or__8901__auto__;
} else {
return (0);
}
})();
var offset = (offset_sign__$1 * ((offset_hours__$1 * (60)) + offset_minutes__$1));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [years__$1,cljs.reader.check.call(null,(1),months__$1,(12),"timestamp month field must be in range 1..12"),cljs.reader.check.call(null,(1),days__$1,cljs.reader.days_in_month.call(null,months__$1,cljs.reader.leap_year_QMARK_.call(null,years__$1)),"timestamp day field must be in range 1..last day in month"),cljs.reader.check.call(null,(0),hours__$1,(23),"timestamp hour field must be in range 0..23"),cljs.reader.check.call(null,(0),minutes__$1,(59),"timestamp minute field must be in range 0..59"),cljs.reader.check.call(null,(0),seconds__$1,((cljs.core._EQ_.call(null,minutes__$1,(59)))?(60):(59)),"timestamp second field must be in range 0..60"),cljs.reader.check.call(null,(0),fraction__$1,(999),"timestamp millisecond field must be in range 0..999"),offset], null);
}
});
cljs.reader.parse_timestamp = (function cljs$reader$parse_timestamp(ts){
var temp__5455__auto__ = cljs.reader.parse_and_validate_timestamp.call(null,ts);
if(cljs.core.truth_(temp__5455__auto__)){
var vec__16317 = temp__5455__auto__;
var years = cljs.core.nth.call(null,vec__16317,(0),null);
var months = cljs.core.nth.call(null,vec__16317,(1),null);
var days = cljs.core.nth.call(null,vec__16317,(2),null);
var hours = cljs.core.nth.call(null,vec__16317,(3),null);
var minutes = cljs.core.nth.call(null,vec__16317,(4),null);
var seconds = cljs.core.nth.call(null,vec__16317,(5),null);
var ms = cljs.core.nth.call(null,vec__16317,(6),null);
var offset = cljs.core.nth.call(null,vec__16317,(7),null);
return (new Date((Date.UTC(years,(months - (1)),days,hours,minutes,seconds,ms) - ((offset * (60)) * (1000)))));
} else {
throw (new Error(["Unrecognized date/time syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join('')));
}
});
cljs.reader.read_date = (function cljs$reader$read_date(s){
if(typeof s === 'string'){
return cljs.reader.parse_timestamp.call(null,s);
} else {
throw (new Error("Instance literal expects a string for its timestamp."));
}
});
cljs.reader.read_queue = (function cljs$reader$read_queue(elems){
if(cljs.core.vector_QMARK_.call(null,elems)){
return cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,elems);
} else {
throw (new Error("Queue literal expects a vector for its elements."));
}
});
cljs.reader.read_js = (function cljs$reader$read_js(form){
if(cljs.core.vector_QMARK_.call(null,form)){
var arr = [];
var seq__16320_16336 = cljs.core.seq.call(null,form);
var chunk__16321_16337 = null;
var count__16322_16338 = (0);
var i__16323_16339 = (0);
while(true){
if((i__16323_16339 < count__16322_16338)){
var x_16340 = cljs.core._nth.call(null,chunk__16321_16337,i__16323_16339);
arr.push(x_16340);

var G__16341 = seq__16320_16336;
var G__16342 = chunk__16321_16337;
var G__16343 = count__16322_16338;
var G__16344 = (i__16323_16339 + (1));
seq__16320_16336 = G__16341;
chunk__16321_16337 = G__16342;
count__16322_16338 = G__16343;
i__16323_16339 = G__16344;
continue;
} else {
var temp__5457__auto___16345 = cljs.core.seq.call(null,seq__16320_16336);
if(temp__5457__auto___16345){
var seq__16320_16346__$1 = temp__5457__auto___16345;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16320_16346__$1)){
var c__9832__auto___16347 = cljs.core.chunk_first.call(null,seq__16320_16346__$1);
var G__16348 = cljs.core.chunk_rest.call(null,seq__16320_16346__$1);
var G__16349 = c__9832__auto___16347;
var G__16350 = cljs.core.count.call(null,c__9832__auto___16347);
var G__16351 = (0);
seq__16320_16336 = G__16348;
chunk__16321_16337 = G__16349;
count__16322_16338 = G__16350;
i__16323_16339 = G__16351;
continue;
} else {
var x_16352 = cljs.core.first.call(null,seq__16320_16346__$1);
arr.push(x_16352);

var G__16353 = cljs.core.next.call(null,seq__16320_16346__$1);
var G__16354 = null;
var G__16355 = (0);
var G__16356 = (0);
seq__16320_16336 = G__16353;
chunk__16321_16337 = G__16354;
count__16322_16338 = G__16355;
i__16323_16339 = G__16356;
continue;
}
} else {
}
}
break;
}

return arr;
} else {
if(cljs.core.map_QMARK_.call(null,form)){
var obj = {};
var seq__16326_16357 = cljs.core.seq.call(null,form);
var chunk__16327_16358 = null;
var count__16328_16359 = (0);
var i__16329_16360 = (0);
while(true){
if((i__16329_16360 < count__16328_16359)){
var vec__16330_16361 = cljs.core._nth.call(null,chunk__16327_16358,i__16329_16360);
var k_16362 = cljs.core.nth.call(null,vec__16330_16361,(0),null);
var v_16363 = cljs.core.nth.call(null,vec__16330_16361,(1),null);
goog.object.set(obj,cljs.core.name.call(null,k_16362),v_16363);

var G__16364 = seq__16326_16357;
var G__16365 = chunk__16327_16358;
var G__16366 = count__16328_16359;
var G__16367 = (i__16329_16360 + (1));
seq__16326_16357 = G__16364;
chunk__16327_16358 = G__16365;
count__16328_16359 = G__16366;
i__16329_16360 = G__16367;
continue;
} else {
var temp__5457__auto___16368 = cljs.core.seq.call(null,seq__16326_16357);
if(temp__5457__auto___16368){
var seq__16326_16369__$1 = temp__5457__auto___16368;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16326_16369__$1)){
var c__9832__auto___16370 = cljs.core.chunk_first.call(null,seq__16326_16369__$1);
var G__16371 = cljs.core.chunk_rest.call(null,seq__16326_16369__$1);
var G__16372 = c__9832__auto___16370;
var G__16373 = cljs.core.count.call(null,c__9832__auto___16370);
var G__16374 = (0);
seq__16326_16357 = G__16371;
chunk__16327_16358 = G__16372;
count__16328_16359 = G__16373;
i__16329_16360 = G__16374;
continue;
} else {
var vec__16333_16375 = cljs.core.first.call(null,seq__16326_16369__$1);
var k_16376 = cljs.core.nth.call(null,vec__16333_16375,(0),null);
var v_16377 = cljs.core.nth.call(null,vec__16333_16375,(1),null);
goog.object.set(obj,cljs.core.name.call(null,k_16376),v_16377);

var G__16378 = cljs.core.next.call(null,seq__16326_16369__$1);
var G__16379 = null;
var G__16380 = (0);
var G__16381 = (0);
seq__16326_16357 = G__16378;
chunk__16327_16358 = G__16379;
count__16328_16359 = G__16380;
i__16329_16360 = G__16381;
continue;
}
} else {
}
}
break;
}

return obj;
} else {
throw (new Error(["JS literal expects a vector or map containing ","only string or unqualified keyword keys"].join('')));

}
}
});
cljs.reader.read_uuid = (function cljs$reader$read_uuid(uuid){
if(typeof uuid === 'string'){
return cljs.core.uuid.call(null,uuid);
} else {
throw (new Error("UUID literal expects a string as its representation."));
}
});
cljs.reader._STAR_default_data_reader_fn_STAR_ = cljs.core.atom.call(null,null);
cljs.reader._STAR_tag_table_STAR_ = cljs.core.atom.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"inst","inst",-2008473268,null),cljs.reader.read_date,new cljs.core.Symbol(null,"uuid","uuid",-504564192,null),cljs.reader.read_uuid,new cljs.core.Symbol(null,"queue","queue",-1198599890,null),cljs.reader.read_queue,new cljs.core.Symbol(null,"js","js",-886355190,null),cljs.reader.read_js], null),cljs.core.PersistentArrayMap.EMPTY));
/**
 * Reads the first object from an cljs.tools.reader.reader-types/IPushbackReader.
 * Returns the object read. If EOF, throws if eof-error? is true otherwise returns eof.
 * If no reader is provided, *in* will be used.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * cljs.tools.reader.edn/read doesn't depend on dynamic Vars, all configuration
 * is done by passing an opt map.
 * 
 * opts is a map that can include the following keys:
 * :eof - value to return on end-of-file. When not supplied, eof throws an exception.
 * :readers  - a map of tag symbols to data-reader functions to be considered before default-data-readers.
 *            When not supplied, only the default-data-readers will be used.
 * :default - A function of two args, that will, if present and no reader is found for a tag,
 *            be called with the tag and the value.
 */
cljs.reader.read = (function cljs$reader$read(var_args){
var G__16383 = arguments.length;
switch (G__16383) {
case 1:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.reader.read.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return cljs.tools.reader.edn.read.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"readers","readers",-2118263030),cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_),new cljs.core.Keyword(null,"eof","eof",-489063237),null], null),reader);
});

cljs.reader.read.cljs$core$IFn$_invoke$arity$2 = (function (p__16384,reader){
var map__16385 = p__16384;
var map__16385__$1 = ((((!((map__16385 == null)))?((((map__16385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16385.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16385):map__16385);
var opts = map__16385__$1;
var eof = cljs.core.get.call(null,map__16385__$1,new cljs.core.Keyword(null,"eof","eof",-489063237));
return cljs.tools.reader.edn.read.call(null,cljs.core.update.call(null,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_)], null)),new cljs.core.Keyword(null,"readers","readers",-2118263030),((function (map__16385,map__16385__$1,opts,eof){
return (function (m){
return cljs.core.merge.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),m);
});})(map__16385,map__16385__$1,opts,eof))
),reader);
});

cljs.reader.read.cljs$core$IFn$_invoke$arity$4 = (function (reader,eof_error_QMARK_,eof,opts){
return cljs.tools.reader.edn.read.call(null,reader,eof_error_QMARK_,eof,cljs.core.update.call(null,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_)], null)),new cljs.core.Keyword(null,"readers","readers",-2118263030),(function (m){
return cljs.core.merge.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),m);
})));
});

cljs.reader.read.cljs$lang$maxFixedArity = 4;

/**
 * Reads one object from the string s.
 * Returns nil when s is nil or empty.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * opts is a map as per cljs.tools.reader.edn/read
 */
cljs.reader.read_string = (function cljs$reader$read_string(var_args){
var G__16389 = arguments.length;
switch (G__16389) {
case 1:
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.tools.reader.edn.read_string.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"readers","readers",-2118263030),cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_),new cljs.core.Keyword(null,"eof","eof",-489063237),null], null),s);
});

cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
return cljs.tools.reader.edn.read_string.call(null,cljs.core.update.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_)], null),opts),new cljs.core.Keyword(null,"readers","readers",-2118263030),(function (m){
return cljs.core.merge.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),m);
})),s);
});

cljs.reader.read_string.cljs$lang$maxFixedArity = 2;

cljs.reader.register_tag_parser_BANG_ = (function cljs$reader$register_tag_parser_BANG_(tag,f){
var old_parser = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag,f);

return old_parser;
});
cljs.reader.deregister_tag_parser_BANG_ = (function cljs$reader$deregister_tag_parser_BANG_(tag){
var old_parser = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag);

return old_parser;
});
cljs.reader.register_default_tag_parser_BANG_ = (function cljs$reader$register_default_tag_parser_BANG_(f){
var old_parser = cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){
return f;
});})(old_parser))
);

return old_parser;
});
cljs.reader.deregister_default_tag_parser_BANG_ = (function cljs$reader$deregister_default_tag_parser_BANG_(){
var old_parser = cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){
return null;
});})(old_parser))
);

return old_parser;
});

//# sourceMappingURL=reader.js.map
