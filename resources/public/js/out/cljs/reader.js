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
var G__25143 = b.append("0");
b = G__25143;
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
var and__18060__auto__ = cljs.reader.divisible_QMARK_.call(null,year,(4));
if(cljs.core.truth_(and__18060__auto__)){
var or__18072__auto__ = cljs.reader.indivisible_QMARK_.call(null,year,(100));
if(cljs.core.truth_(or__18072__auto__)){
return or__18072__auto__;
} else {
return cljs.reader.divisible_QMARK_.call(null,year,(400));
}
} else {
return and__18060__auto__;
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
var vec__25144 = cljs.core.re_matches.call(null,cljs.reader.timestamp_regex,s);
var _ = cljs.core.nth.call(null,vec__25144,(0),null);
var years = cljs.core.nth.call(null,vec__25144,(1),null);
var months = cljs.core.nth.call(null,vec__25144,(2),null);
var days = cljs.core.nth.call(null,vec__25144,(3),null);
var hours = cljs.core.nth.call(null,vec__25144,(4),null);
var minutes = cljs.core.nth.call(null,vec__25144,(5),null);
var seconds = cljs.core.nth.call(null,vec__25144,(6),null);
var fraction = cljs.core.nth.call(null,vec__25144,(7),null);
var offset_sign = cljs.core.nth.call(null,vec__25144,(8),null);
var offset_hours = cljs.core.nth.call(null,vec__25144,(9),null);
var offset_minutes = cljs.core.nth.call(null,vec__25144,(10),null);
var v = vec__25144;
if(cljs.core.not.call(null,v)){
throw (new Error(["Unrecognized date/time syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')));
} else {
var years__$1 = cljs.reader.parse_int.call(null,years);
var months__$1 = (function (){var or__18072__auto__ = cljs.reader.parse_int.call(null,months);
if(cljs.core.truth_(or__18072__auto__)){
return or__18072__auto__;
} else {
return (1);
}
})();
var days__$1 = (function (){var or__18072__auto__ = cljs.reader.parse_int.call(null,days);
if(cljs.core.truth_(or__18072__auto__)){
return or__18072__auto__;
} else {
return (1);
}
})();
var hours__$1 = (function (){var or__18072__auto__ = cljs.reader.parse_int.call(null,hours);
if(cljs.core.truth_(or__18072__auto__)){
return or__18072__auto__;
} else {
return (0);
}
})();
var minutes__$1 = (function (){var or__18072__auto__ = cljs.reader.parse_int.call(null,minutes);
if(cljs.core.truth_(or__18072__auto__)){
return or__18072__auto__;
} else {
return (0);
}
})();
var seconds__$1 = (function (){var or__18072__auto__ = cljs.reader.parse_int.call(null,seconds);
if(cljs.core.truth_(or__18072__auto__)){
return or__18072__auto__;
} else {
return (0);
}
})();
var fraction__$1 = (function (){var or__18072__auto__ = cljs.reader.parse_int.call(null,cljs.reader.zero_fill_right_and_truncate.call(null,fraction,(3)));
if(cljs.core.truth_(or__18072__auto__)){
return or__18072__auto__;
} else {
return (0);
}
})();
var offset_sign__$1 = ((cljs.core._EQ_.call(null,offset_sign,"-"))?(-1):(1));
var offset_hours__$1 = (function (){var or__18072__auto__ = cljs.reader.parse_int.call(null,offset_hours);
if(cljs.core.truth_(or__18072__auto__)){
return or__18072__auto__;
} else {
return (0);
}
})();
var offset_minutes__$1 = (function (){var or__18072__auto__ = cljs.reader.parse_int.call(null,offset_minutes);
if(cljs.core.truth_(or__18072__auto__)){
return or__18072__auto__;
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
var vec__25147 = temp__5455__auto__;
var years = cljs.core.nth.call(null,vec__25147,(0),null);
var months = cljs.core.nth.call(null,vec__25147,(1),null);
var days = cljs.core.nth.call(null,vec__25147,(2),null);
var hours = cljs.core.nth.call(null,vec__25147,(3),null);
var minutes = cljs.core.nth.call(null,vec__25147,(4),null);
var seconds = cljs.core.nth.call(null,vec__25147,(5),null);
var ms = cljs.core.nth.call(null,vec__25147,(6),null);
var offset = cljs.core.nth.call(null,vec__25147,(7),null);
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
var seq__25150_25166 = cljs.core.seq.call(null,form);
var chunk__25151_25167 = null;
var count__25152_25168 = (0);
var i__25153_25169 = (0);
while(true){
if((i__25153_25169 < count__25152_25168)){
var x_25170 = cljs.core._nth.call(null,chunk__25151_25167,i__25153_25169);
arr.push(x_25170);

var G__25171 = seq__25150_25166;
var G__25172 = chunk__25151_25167;
var G__25173 = count__25152_25168;
var G__25174 = (i__25153_25169 + (1));
seq__25150_25166 = G__25171;
chunk__25151_25167 = G__25172;
count__25152_25168 = G__25173;
i__25153_25169 = G__25174;
continue;
} else {
var temp__5457__auto___25175 = cljs.core.seq.call(null,seq__25150_25166);
if(temp__5457__auto___25175){
var seq__25150_25176__$1 = temp__5457__auto___25175;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25150_25176__$1)){
var c__19003__auto___25177 = cljs.core.chunk_first.call(null,seq__25150_25176__$1);
var G__25178 = cljs.core.chunk_rest.call(null,seq__25150_25176__$1);
var G__25179 = c__19003__auto___25177;
var G__25180 = cljs.core.count.call(null,c__19003__auto___25177);
var G__25181 = (0);
seq__25150_25166 = G__25178;
chunk__25151_25167 = G__25179;
count__25152_25168 = G__25180;
i__25153_25169 = G__25181;
continue;
} else {
var x_25182 = cljs.core.first.call(null,seq__25150_25176__$1);
arr.push(x_25182);

var G__25183 = cljs.core.next.call(null,seq__25150_25176__$1);
var G__25184 = null;
var G__25185 = (0);
var G__25186 = (0);
seq__25150_25166 = G__25183;
chunk__25151_25167 = G__25184;
count__25152_25168 = G__25185;
i__25153_25169 = G__25186;
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
var seq__25156_25187 = cljs.core.seq.call(null,form);
var chunk__25157_25188 = null;
var count__25158_25189 = (0);
var i__25159_25190 = (0);
while(true){
if((i__25159_25190 < count__25158_25189)){
var vec__25160_25191 = cljs.core._nth.call(null,chunk__25157_25188,i__25159_25190);
var k_25192 = cljs.core.nth.call(null,vec__25160_25191,(0),null);
var v_25193 = cljs.core.nth.call(null,vec__25160_25191,(1),null);
goog.object.set(obj,cljs.core.name.call(null,k_25192),v_25193);

var G__25194 = seq__25156_25187;
var G__25195 = chunk__25157_25188;
var G__25196 = count__25158_25189;
var G__25197 = (i__25159_25190 + (1));
seq__25156_25187 = G__25194;
chunk__25157_25188 = G__25195;
count__25158_25189 = G__25196;
i__25159_25190 = G__25197;
continue;
} else {
var temp__5457__auto___25198 = cljs.core.seq.call(null,seq__25156_25187);
if(temp__5457__auto___25198){
var seq__25156_25199__$1 = temp__5457__auto___25198;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25156_25199__$1)){
var c__19003__auto___25200 = cljs.core.chunk_first.call(null,seq__25156_25199__$1);
var G__25201 = cljs.core.chunk_rest.call(null,seq__25156_25199__$1);
var G__25202 = c__19003__auto___25200;
var G__25203 = cljs.core.count.call(null,c__19003__auto___25200);
var G__25204 = (0);
seq__25156_25187 = G__25201;
chunk__25157_25188 = G__25202;
count__25158_25189 = G__25203;
i__25159_25190 = G__25204;
continue;
} else {
var vec__25163_25205 = cljs.core.first.call(null,seq__25156_25199__$1);
var k_25206 = cljs.core.nth.call(null,vec__25163_25205,(0),null);
var v_25207 = cljs.core.nth.call(null,vec__25163_25205,(1),null);
goog.object.set(obj,cljs.core.name.call(null,k_25206),v_25207);

var G__25208 = cljs.core.next.call(null,seq__25156_25199__$1);
var G__25209 = null;
var G__25210 = (0);
var G__25211 = (0);
seq__25156_25187 = G__25208;
chunk__25157_25188 = G__25209;
count__25158_25189 = G__25210;
i__25159_25190 = G__25211;
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
var G__25213 = arguments.length;
switch (G__25213) {
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

cljs.reader.read.cljs$core$IFn$_invoke$arity$2 = (function (p__25214,reader){
var map__25215 = p__25214;
var map__25215__$1 = ((((!((map__25215 == null)))?((((map__25215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25215.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25215):map__25215);
var opts = map__25215__$1;
var eof = cljs.core.get.call(null,map__25215__$1,new cljs.core.Keyword(null,"eof","eof",-489063237));
return cljs.tools.reader.edn.read.call(null,cljs.core.update.call(null,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_)], null)),new cljs.core.Keyword(null,"readers","readers",-2118263030),((function (map__25215,map__25215__$1,opts,eof){
return (function (m){
return cljs.core.merge.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),m);
});})(map__25215,map__25215__$1,opts,eof))
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
var G__25219 = arguments.length;
switch (G__25219) {
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
