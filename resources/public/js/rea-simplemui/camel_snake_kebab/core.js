// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('camel_snake_kebab.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('camel_snake_kebab.internals.misc');
goog.require('camel_snake_kebab.internals.alter_name');



























/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___1943 = arguments.length;
var i__5770__auto___1944 = (0);
while(true){
if((i__5770__auto___1944 < len__5769__auto___1943)){
args__5775__auto__.push((arguments[i__5770__auto___1944]));

var G__1945 = (i__5770__auto___1944 + (1));
i__5770__auto___1944 = G__1945;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,rest);
}));

(camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq1938){
var G__1939 = cljs.core.first.call(null,seq1938);
var seq1938__$1 = cljs.core.next.call(null,seq1938);
var G__1940 = cljs.core.first.call(null,seq1938__$1);
var seq1938__$2 = cljs.core.next.call(null,seq1938__$1);
var G__1941 = cljs.core.first.call(null,seq1938__$2);
var seq1938__$3 = cljs.core.next.call(null,seq1938__$2);
var G__1942 = cljs.core.first.call(null,seq1938__$3);
var seq1938__$4 = cljs.core.next.call(null,seq1938__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1939,G__1940,G__1941,G__1942,seq1938__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__5775__auto__ = [];
var len__5769__auto___1954 = arguments.length;
var i__5770__auto___1955 = (0);
while(true){
if((i__5770__auto___1955 < len__5769__auto___1954)){
args__5775__auto__.push((arguments[i__5770__auto___1955]));

var G__1956 = (i__5770__auto___1955 + (1));
i__5770__auto___1955 = G__1956;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__1901__auto__,rest__1902__auto__){
var convert_case__1903__auto__ = (function (p1__1900__1904__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__1900__1904__auto__,rest__1902__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__1901__auto__,convert_case__1903__auto__);
}));

(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq1946){
var G__1947 = cljs.core.first.call(null,seq1946);
var seq1946__$1 = cljs.core.next.call(null,seq1946);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1947,seq1946__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__5775__auto__ = [];
var len__5769__auto___1957 = arguments.length;
var i__5770__auto___1958 = (0);
while(true){
if((i__5770__auto___1958 < len__5769__auto___1957)){
args__5775__auto__.push((arguments[i__5770__auto___1958]));

var G__1959 = (i__5770__auto___1958 + (1));
i__5770__auto___1958 = G__1959;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__1906__auto__,rest__1907__auto__){
return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__1906__auto__),rest__1907__auto__));
}));

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq1948){
var G__1949 = cljs.core.first.call(null,seq1948);
var seq1948__$1 = cljs.core.next.call(null,seq1948);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1949,seq1948__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___1960 = arguments.length;
var i__5770__auto___1961 = (0);
while(true){
if((i__5770__auto___1961 < len__5769__auto___1960)){
args__5775__auto__.push((arguments[i__5770__auto___1961]));

var G__1962 = (i__5770__auto___1961 + (1));
i__5770__auto___1961 = G__1962;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__1906__auto__,rest__1907__auto__){
return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__1906__auto__),rest__1907__auto__));
}));

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq1950){
var G__1951 = cljs.core.first.call(null,seq1950);
var seq1950__$1 = cljs.core.next.call(null,seq1950);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1951,seq1950__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___1963 = arguments.length;
var i__5770__auto___1964 = (0);
while(true){
if((i__5770__auto___1964 < len__5769__auto___1963)){
args__5775__auto__.push((arguments[i__5770__auto___1964]));

var G__1965 = (i__5770__auto___1964 + (1));
i__5770__auto___1964 = G__1965;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__1906__auto__,rest__1907__auto__){
return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__1906__auto__),rest__1907__auto__));
}));

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq1952){
var G__1953 = cljs.core.first.call(null,seq1952);
var seq1952__$1 = cljs.core.next.call(null,seq1952);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1953,seq1952__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___1974 = arguments.length;
var i__5770__auto___1975 = (0);
while(true){
if((i__5770__auto___1975 < len__5769__auto___1974)){
args__5775__auto__.push((arguments[i__5770__auto___1975]));

var G__1976 = (i__5770__auto___1975 + (1));
i__5770__auto___1975 = G__1976;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__1901__auto__,rest__1902__auto__){
var convert_case__1903__auto__ = (function (p1__1900__1904__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__1900__1904__auto__,rest__1902__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__1901__auto__,convert_case__1903__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq1966){
var G__1967 = cljs.core.first.call(null,seq1966);
var seq1966__$1 = cljs.core.next.call(null,seq1966);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1967,seq1966__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__5775__auto__ = [];
var len__5769__auto___1977 = arguments.length;
var i__5770__auto___1978 = (0);
while(true){
if((i__5770__auto___1978 < len__5769__auto___1977)){
args__5775__auto__.push((arguments[i__5770__auto___1978]));

var G__1979 = (i__5770__auto___1978 + (1));
i__5770__auto___1978 = G__1979;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__1906__auto__,rest__1907__auto__){
return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__1906__auto__),rest__1907__auto__));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq1968){
var G__1969 = cljs.core.first.call(null,seq1968);
var seq1968__$1 = cljs.core.next.call(null,seq1968);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1969,seq1968__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___1980 = arguments.length;
var i__5770__auto___1981 = (0);
while(true){
if((i__5770__auto___1981 < len__5769__auto___1980)){
args__5775__auto__.push((arguments[i__5770__auto___1981]));

var G__1982 = (i__5770__auto___1981 + (1));
i__5770__auto___1981 = G__1982;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__1906__auto__,rest__1907__auto__){
return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__1906__auto__),rest__1907__auto__));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq1970){
var G__1971 = cljs.core.first.call(null,seq1970);
var seq1970__$1 = cljs.core.next.call(null,seq1970);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1971,seq1970__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___1983 = arguments.length;
var i__5770__auto___1984 = (0);
while(true){
if((i__5770__auto___1984 < len__5769__auto___1983)){
args__5775__auto__.push((arguments[i__5770__auto___1984]));

var G__1985 = (i__5770__auto___1984 + (1));
i__5770__auto___1984 = G__1985;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__1906__auto__,rest__1907__auto__){
return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__1906__auto__),rest__1907__auto__));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq1972){
var G__1973 = cljs.core.first.call(null,seq1972);
var seq1972__$1 = cljs.core.next.call(null,seq1972);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1973,seq1972__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__5775__auto__ = [];
var len__5769__auto___1994 = arguments.length;
var i__5770__auto___1995 = (0);
while(true){
if((i__5770__auto___1995 < len__5769__auto___1994)){
args__5775__auto__.push((arguments[i__5770__auto___1995]));

var G__1996 = (i__5770__auto___1995 + (1));
i__5770__auto___1995 = G__1996;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__1901__auto__,rest__1902__auto__){
var convert_case__1903__auto__ = (function (p1__1900__1904__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__1900__1904__auto__,rest__1902__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__1901__auto__,convert_case__1903__auto__);
}));

(camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq1986){
var G__1987 = cljs.core.first.call(null,seq1986);
var seq1986__$1 = cljs.core.next.call(null,seq1986);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1987,seq1986__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__5775__auto__ = [];
var len__5769__auto___1997 = arguments.length;
var i__5770__auto___1998 = (0);
while(true){
if((i__5770__auto___1998 < len__5769__auto___1997)){
args__5775__auto__.push((arguments[i__5770__auto___1998]));

var G__1999 = (i__5770__auto___1998 + (1));
i__5770__auto___1998 = G__1999;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__1906__auto__,rest__1907__auto__){
return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__1906__auto__),rest__1907__auto__));
}));

(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq1988){
var G__1989 = cljs.core.first.call(null,seq1988);
var seq1988__$1 = cljs.core.next.call(null,seq1988);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1989,seq1988__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___2000 = arguments.length;
var i__5770__auto___2001 = (0);
while(true){
if((i__5770__auto___2001 < len__5769__auto___2000)){
args__5775__auto__.push((arguments[i__5770__auto___2001]));

var G__2002 = (i__5770__auto___2001 + (1));
i__5770__auto___2001 = G__2002;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__1906__auto__,rest__1907__auto__){
return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__1906__auto__),rest__1907__auto__));
}));

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq1990){
var G__1991 = cljs.core.first.call(null,seq1990);
var seq1990__$1 = cljs.core.next.call(null,seq1990);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1991,seq1990__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___2003 = arguments.length;
var i__5770__auto___2004 = (0);
while(true){
if((i__5770__auto___2004 < len__5769__auto___2003)){
args__5775__auto__.push((arguments[i__5770__auto___2004]));

var G__2005 = (i__5770__auto___2004 + (1));
i__5770__auto___2004 = G__2005;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__1906__auto__,rest__1907__auto__){
return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__1906__auto__),rest__1907__auto__));
}));

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq1992){
var G__1993 = cljs.core.first.call(null,seq1992);
var seq1992__$1 = cljs.core.next.call(null,seq1992);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1993,seq1992__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__5775__auto__ = [];
var len__5769__auto___2014 = arguments.length;
var i__5770__auto___2015 = (0);
while(true){
if((i__5770__auto___2015 < len__5769__auto___2014)){
args__5775__auto__.push((arguments[i__5770__auto___2015]));

var G__2016 = (i__5770__auto___2015 + (1));
i__5770__auto___2015 = G__2016;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__1901__auto__,rest__1902__auto__){
var convert_case__1903__auto__ = (function (p1__1900__1904__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__1900__1904__auto__,rest__1902__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__1901__auto__,convert_case__1903__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq2006){
var G__2007 = cljs.core.first.call(null,seq2006);
var seq2006__$1 = cljs.core.next.call(null,seq2006);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2007,seq2006__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__5775__auto__ = [];
var len__5769__auto___2017 = arguments.length;
var i__5770__auto___2018 = (0);
while(true){
if((i__5770__auto___2018 < len__5769__auto___2017)){
args__5775__auto__.push((arguments[i__5770__auto___2018]));

var G__2019 = (i__5770__auto___2018 + (1));
i__5770__auto___2018 = G__2019;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__1906__auto__,rest__1907__auto__){
return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__1906__auto__),rest__1907__auto__));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq2008){
var G__2009 = cljs.core.first.call(null,seq2008);
var seq2008__$1 = cljs.core.next.call(null,seq2008);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2009,seq2008__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__5775__auto__ = [];
var len__5769__auto___2020 = arguments.length;
var i__5770__auto___2021 = (0);
while(true){
if((i__5770__auto___2021 < len__5769__auto___2020)){
args__5775__auto__.push((arguments[i__5770__auto___2021]));

var G__2022 = (i__5770__auto___2021 + (1));
i__5770__auto___2021 = G__2022;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__1906__auto__,rest__1907__auto__){
return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__1906__auto__),rest__1907__auto__));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq2010){
var G__2011 = cljs.core.first.call(null,seq2010);
var seq2010__$1 = cljs.core.next.call(null,seq2010);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2011,seq2010__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__5775__auto__ = [];
var len__5769__auto___2023 = arguments.length;
var i__5770__auto___2024 = (0);
while(true){
if((i__5770__auto___2024 < len__5769__auto___2023)){
args__5775__auto__.push((arguments[i__5770__auto___2024]));

var G__2025 = (i__5770__auto___2024 + (1));
i__5770__auto___2024 = G__2025;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__1906__auto__,rest__1907__auto__){
return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__1906__auto__),rest__1907__auto__));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq2012){
var G__2013 = cljs.core.first.call(null,seq2012);
var seq2012__$1 = cljs.core.next.call(null,seq2012);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2013,seq2012__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___2034 = arguments.length;
var i__5770__auto___2035 = (0);
while(true){
if((i__5770__auto___2035 < len__5769__auto___2034)){
args__5775__auto__.push((arguments[i__5770__auto___2035]));

var G__2036 = (i__5770__auto___2035 + (1));
i__5770__auto___2035 = G__2036;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__1901__auto__,rest__1902__auto__){
var convert_case__1903__auto__ = (function (p1__1900__1904__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__1900__1904__auto__,rest__1902__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__1901__auto__,convert_case__1903__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq2026){
var G__2027 = cljs.core.first.call(null,seq2026);
var seq2026__$1 = cljs.core.next.call(null,seq2026);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2027,seq2026__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__5775__auto__ = [];
var len__5769__auto___2037 = arguments.length;
var i__5770__auto___2038 = (0);
while(true){
if((i__5770__auto___2038 < len__5769__auto___2037)){
args__5775__auto__.push((arguments[i__5770__auto___2038]));

var G__2039 = (i__5770__auto___2038 + (1));
i__5770__auto___2038 = G__2039;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__1906__auto__,rest__1907__auto__){
return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__1906__auto__),rest__1907__auto__));
}));

(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq2028){
var G__2029 = cljs.core.first.call(null,seq2028);
var seq2028__$1 = cljs.core.next.call(null,seq2028);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2029,seq2028__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___2040 = arguments.length;
var i__5770__auto___2041 = (0);
while(true){
if((i__5770__auto___2041 < len__5769__auto___2040)){
args__5775__auto__.push((arguments[i__5770__auto___2041]));

var G__2042 = (i__5770__auto___2041 + (1));
i__5770__auto___2041 = G__2042;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__1906__auto__,rest__1907__auto__){
return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__1906__auto__),rest__1907__auto__));
}));

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq2030){
var G__2031 = cljs.core.first.call(null,seq2030);
var seq2030__$1 = cljs.core.next.call(null,seq2030);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2031,seq2030__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___2043 = arguments.length;
var i__5770__auto___2044 = (0);
while(true){
if((i__5770__auto___2044 < len__5769__auto___2043)){
args__5775__auto__.push((arguments[i__5770__auto___2044]));

var G__2045 = (i__5770__auto___2044 + (1));
i__5770__auto___2044 = G__2045;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__1906__auto__,rest__1907__auto__){
return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__1906__auto__),rest__1907__auto__));
}));

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq2032){
var G__2033 = cljs.core.first.call(null,seq2032);
var seq2032__$1 = cljs.core.next.call(null,seq2032);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2033,seq2032__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___2054 = arguments.length;
var i__5770__auto___2055 = (0);
while(true){
if((i__5770__auto___2055 < len__5769__auto___2054)){
args__5775__auto__.push((arguments[i__5770__auto___2055]));

var G__2056 = (i__5770__auto___2055 + (1));
i__5770__auto___2055 = G__2056;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__1901__auto__,rest__1902__auto__){
var convert_case__1903__auto__ = (function (p1__1900__1904__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__1900__1904__auto__,rest__1902__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__1901__auto__,convert_case__1903__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq2046){
var G__2047 = cljs.core.first.call(null,seq2046);
var seq2046__$1 = cljs.core.next.call(null,seq2046);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2047,seq2046__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__5775__auto__ = [];
var len__5769__auto___2057 = arguments.length;
var i__5770__auto___2058 = (0);
while(true){
if((i__5770__auto___2058 < len__5769__auto___2057)){
args__5775__auto__.push((arguments[i__5770__auto___2058]));

var G__2059 = (i__5770__auto___2058 + (1));
i__5770__auto___2058 = G__2059;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__1906__auto__,rest__1907__auto__){
return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__1906__auto__),rest__1907__auto__));
}));

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq2048){
var G__2049 = cljs.core.first.call(null,seq2048);
var seq2048__$1 = cljs.core.next.call(null,seq2048);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2049,seq2048__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___2060 = arguments.length;
var i__5770__auto___2061 = (0);
while(true){
if((i__5770__auto___2061 < len__5769__auto___2060)){
args__5775__auto__.push((arguments[i__5770__auto___2061]));

var G__2062 = (i__5770__auto___2061 + (1));
i__5770__auto___2061 = G__2062;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__1906__auto__,rest__1907__auto__){
return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__1906__auto__),rest__1907__auto__));
}));

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq2050){
var G__2051 = cljs.core.first.call(null,seq2050);
var seq2050__$1 = cljs.core.next.call(null,seq2050);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2051,seq2050__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___2063 = arguments.length;
var i__5770__auto___2064 = (0);
while(true){
if((i__5770__auto___2064 < len__5769__auto___2063)){
args__5775__auto__.push((arguments[i__5770__auto___2064]));

var G__2065 = (i__5770__auto___2064 + (1));
i__5770__auto___2064 = G__2065;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__1906__auto__,rest__1907__auto__){
return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__1906__auto__),rest__1907__auto__));
}));

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq2052){
var G__2053 = cljs.core.first.call(null,seq2052);
var seq2052__$1 = cljs.core.next.call(null,seq2052);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2053,seq2052__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___2074 = arguments.length;
var i__5770__auto___2075 = (0);
while(true){
if((i__5770__auto___2075 < len__5769__auto___2074)){
args__5775__auto__.push((arguments[i__5770__auto___2075]));

var G__2076 = (i__5770__auto___2075 + (1));
i__5770__auto___2075 = G__2076;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__1901__auto__,rest__1902__auto__){
var convert_case__1903__auto__ = (function (p1__1900__1904__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__1900__1904__auto__,rest__1902__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__1901__auto__,convert_case__1903__auto__);
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq2066){
var G__2067 = cljs.core.first.call(null,seq2066);
var seq2066__$1 = cljs.core.next.call(null,seq2066);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2067,seq2066__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__5775__auto__ = [];
var len__5769__auto___2077 = arguments.length;
var i__5770__auto___2078 = (0);
while(true){
if((i__5770__auto___2078 < len__5769__auto___2077)){
args__5775__auto__.push((arguments[i__5770__auto___2078]));

var G__2079 = (i__5770__auto___2078 + (1));
i__5770__auto___2078 = G__2079;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__1906__auto__,rest__1907__auto__){
return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__1906__auto__),rest__1907__auto__));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq2068){
var G__2069 = cljs.core.first.call(null,seq2068);
var seq2068__$1 = cljs.core.next.call(null,seq2068);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2069,seq2068__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___2080 = arguments.length;
var i__5770__auto___2081 = (0);
while(true){
if((i__5770__auto___2081 < len__5769__auto___2080)){
args__5775__auto__.push((arguments[i__5770__auto___2081]));

var G__2082 = (i__5770__auto___2081 + (1));
i__5770__auto___2081 = G__2082;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__1906__auto__,rest__1907__auto__){
return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__1906__auto__),rest__1907__auto__));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq2070){
var G__2071 = cljs.core.first.call(null,seq2070);
var seq2070__$1 = cljs.core.next.call(null,seq2070);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2071,seq2070__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___2083 = arguments.length;
var i__5770__auto___2084 = (0);
while(true){
if((i__5770__auto___2084 < len__5769__auto___2083)){
args__5775__auto__.push((arguments[i__5770__auto___2084]));

var G__2085 = (i__5770__auto___2084 + (1));
i__5770__auto___2084 = G__2085;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__1906__auto__,rest__1907__auto__){
return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__1906__auto__),rest__1907__auto__));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq2072){
var G__2073 = cljs.core.first.call(null,seq2072);
var seq2072__$1 = cljs.core.next.call(null,seq2072);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2073,seq2072__$1);
}));


//# sourceMappingURL=core.js.map
