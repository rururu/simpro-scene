// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('reagent_mui.util');
goog.require('cljs.core');
goog.require('react');
goog.require('reagent.core');
goog.require('reagent.impl.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('camel_snake_kebab.core');
goog.require('_CIRCA_mui.material.SvgIcon');
goog.require('goog.object');
goog.scope(function(){
reagent_mui.util.goog$module$goog$object = goog.module.get('goog.object');
});
reagent_mui.util.global$module$react = goog.global["React"];
reagent_mui.util.global$module$_CIRCA_mui$material$SvgIcon = goog.global["MuiMaterialSvgIcon"];
reagent_mui.util.adapt_react_class = (function reagent_mui$util$adapt_react_class(var_args){
var G__2740 = arguments.length;
switch (G__2740) {
case 1:
return reagent_mui.util.adapt_react_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent_mui.util.adapt_react_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent_mui.util.adapt_react_class.cljs$core$IFn$_invoke$arity$1 = (function (c){
return reagent_mui.util.adapt_react_class.call(null,c,reagent.impl.util.fun_name.call(null,c));
}));

(reagent_mui.util.adapt_react_class.cljs$core$IFn$_invoke$arity$2 = (function (c,display_name){
var adapted = reagent.core.adapt_react_class.call(null,c);
(adapted.displayName = display_name);

return adapted;
}));

(reagent_mui.util.adapt_react_class.cljs$lang$maxFixedArity = 2);

reagent_mui.util.color_key_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, ["A700",null,"A200",null,new cljs.core.Keyword(null,"A200","A200",-116883354),null,new cljs.core.Keyword(null,"A400","A400",1881009576),null,new cljs.core.Keyword(null,"A700","A700",-181053111),null,"A400",null,new cljs.core.Keyword(null,"A100","A100",-1657389641),null,"A100",null], null), null);
reagent_mui.util.numeric_string_QMARK_ = (function reagent_mui$util$numeric_string_QMARK_(s){
return ((typeof s === 'string') && ((!((cljs.core.re_matches.call(null,/[0-9]+/,s) == null)))));
});
reagent_mui.util.pascal_case_QMARK_ = (function reagent_mui$util$pascal_case_QMARK_(s){
return ((typeof s === 'string') && (cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 26, ["A",null,"B",null,"C",null,"D",null,"E",null,"F",null,"G",null,"H",null,"I",null,"J",null,"K",null,"L",null,"M",null,"N",null,"O",null,"P",null,"Q",null,"R",null,"S",null,"T",null,"U",null,"V",null,"W",null,"X",null,"Y",null,"Z",null], null), null),cljs.core.first.call(null,s))));
});
reagent_mui.util.keyword_safe_QMARK_ = (function reagent_mui$util$keyword_safe_QMARK_(s){
return (!((cljs.core.re_matches.call(null,/[-*+!?<>='&$%#|\w]+/,s) == null)));
});
reagent_mui.util.key__GT_str = (function reagent_mui$util$key__GT_str(k){
var n = cljs.core.name.call(null,k);
if(cljs.core.truth_(reagent_mui.util.color_key_QMARK_.call(null,k))){
return n;
} else {
if(clojure.string.starts_with_QMARK_.call(null,n,"data-")){
return n;
} else {
if(clojure.string.starts_with_QMARK_.call(null,n,"aria-")){
return n;
} else {
if(reagent_mui.util.pascal_case_QMARK_.call(null,n)){
return n;
} else {
return camel_snake_kebab.core.__GT_camelCaseString.call(null,k);

}
}
}
}
});
reagent_mui.util.convert_map_keys = (function reagent_mui$util$convert_map_keys(m,f){
return clojure.walk.postwalk.call(null,(function (x){
if(cljs.core.map_entry_QMARK_.call(null,x)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,cljs.core.key.call(null,x)),cljs.core.val.call(null,x)], null);
} else {
return x;
}
}),m);
});
reagent_mui.util.clj__GT_js_SINGLEQUOTE_ = (function reagent_mui$util$clj__GT_js_SINGLEQUOTE_(obj){
return cljs.core.clj__GT_js.call(null,reagent_mui.util.convert_map_keys.call(null,obj,(function (k){
if((k instanceof cljs.core.Keyword)){
return reagent_mui.util.key__GT_str.call(null,k);
} else {
return k;
}
})));
});
reagent_mui.util.js_key__GT_clj = (function reagent_mui$util$js_key__GT_clj(k){
if((k instanceof cljs.core.Keyword)){
return k;
} else {
if(cljs.core.truth_(reagent_mui.util.color_key_QMARK_.call(null,k))){
return cljs.core.keyword.call(null,k);
} else {
if(reagent_mui.util.numeric_string_QMARK_.call(null,k)){
return parseInt(k);
} else {
if(reagent_mui.util.keyword_safe_QMARK_.call(null,k)){
if(reagent_mui.util.pascal_case_QMARK_.call(null,k)){
return cljs.core.keyword.call(null,k);
} else {
return camel_snake_kebab.core.__GT_kebab_case_keyword.call(null,k);
}
} else {
return k;

}
}
}
}
});
reagent_mui.util.js__GT_clj_SINGLEQUOTE_ = (function reagent_mui$util$js__GT_clj_SINGLEQUOTE_(obj){
var convert = (function reagent_mui$util$js__GT_clj_SINGLEQUOTE__$_convert(x){
if(cljs.core.seq_QMARK_.call(null,x)){
return cljs.core.doall.call(null,cljs.core.map.call(null,reagent_mui$util$js__GT_clj_SINGLEQUOTE__$_convert,x));
} else {
if(cljs.core.map_entry_QMARK_.call(null,x)){
return (new cljs.core.MapEntry(reagent_mui$util$js__GT_clj_SINGLEQUOTE__$_convert.call(null,cljs.core.key.call(null,x)),reagent_mui$util$js__GT_clj_SINGLEQUOTE__$_convert.call(null,cljs.core.val.call(null,x)),null));
} else {
if(cljs.core.coll_QMARK_.call(null,x)){
return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,reagent_mui$util$js__GT_clj_SINGLEQUOTE__$_convert),x);
} else {
if(cljs.core.array_QMARK_.call(null,x)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (p1__2742_SHARP_,p2__2743_SHARP_){
return cljs.core.conj_BANG_.call(null,p1__2742_SHARP_,reagent_mui$util$js__GT_clj_SINGLEQUOTE__$_convert.call(null,p2__2743_SHARP_));
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),x));
} else {
if(cljs.core.truth_(reagent_mui.util.global$module$react.isValidElement(x))){
return x;
} else {
if((cljs.core.type.call(null,x) === Object)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (r,k){
if(cljs.core._EQ_.call(null,"ref",k)){
return cljs.core.assoc_BANG_.call(null,r,new cljs.core.Keyword(null,"ref","ref",1289896967),reagent_mui.util.goog$module$goog$object.get.call(null,x,k));
} else {
return cljs.core.assoc_BANG_.call(null,r,reagent_mui.util.js_key__GT_clj.call(null,k),reagent_mui$util$js__GT_clj_SINGLEQUOTE__$_convert.call(null,reagent_mui.util.goog$module$goog$object.get.call(null,x,k)));
}
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.js_keys.call(null,x)));
} else {
return x;

}
}
}
}
}
}
});
return convert.call(null,obj);
});
reagent_mui.util.wrap_clj_function = (function reagent_mui$util$wrap_clj_function(f){
return (function() { 
var G__2744__delegate = function (args){
return reagent_mui.util.clj__GT_js_SINGLEQUOTE_.call(null,cljs.core.apply.call(null,f,cljs.core.map.call(null,reagent_mui.util.js__GT_clj_SINGLEQUOTE_,args)));
};
var G__2744 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2745__i = 0, G__2745__a = new Array(arguments.length -  0);
while (G__2745__i < G__2745__a.length) {G__2745__a[G__2745__i] = arguments[G__2745__i + 0]; ++G__2745__i;}
  args = new cljs.core.IndexedSeq(G__2745__a,0,null);
} 
return G__2744__delegate.call(this,args);};
G__2744.cljs$lang$maxFixedArity = 0;
G__2744.cljs$lang$applyTo = (function (arglist__2746){
var args = cljs.core.seq(arglist__2746);
return G__2744__delegate(args);
});
G__2744.cljs$core$IFn$_invoke$arity$variadic = G__2744__delegate;
return G__2744;
})()
;
});
reagent_mui.util.wrap_js_function = (function reagent_mui$util$wrap_js_function(f){
return (function() { 
var G__2747__delegate = function (args){
return reagent_mui.util.js__GT_clj_SINGLEQUOTE_.call(null,cljs.core.apply.call(null,f,cljs.core.map.call(null,reagent_mui.util.clj__GT_js_SINGLEQUOTE_,args)));
};
var G__2747 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2748__i = 0, G__2748__a = new Array(arguments.length -  0);
while (G__2748__i < G__2748__a.length) {G__2748__a[G__2748__i] = arguments[G__2748__i + 0]; ++G__2748__i;}
  args = new cljs.core.IndexedSeq(G__2748__a,0,null);
} 
return G__2747__delegate.call(this,args);};
G__2747.cljs$lang$maxFixedArity = 0;
G__2747.cljs$lang$applyTo = (function (arglist__2749){
var args = cljs.core.seq(arglist__2749);
return G__2747__delegate(args);
});
G__2747.cljs$core$IFn$_invoke$arity$variadic = G__2747__delegate;
return G__2747;
})()
;
});
reagent_mui.util.wrap_all_clj_functions = (function reagent_mui$util$wrap_all_clj_functions(m){
return clojure.walk.postwalk.call(null,(function (x){
if(cljs.core.fn_QMARK_.call(null,x)){
return reagent_mui.util.wrap_clj_function.call(null,x);
} else {
return x;
}
}),m);
});
reagent_mui.util.wrap_all_js_functions = (function reagent_mui$util$wrap_all_js_functions(m){
return clojure.walk.postwalk.call(null,(function (x){
if(cljs.core.fn_QMARK_.call(null,x)){
return reagent_mui.util.wrap_js_function.call(null,x);
} else {
return x;
}
}),m);
});
reagent_mui.util.reactify_component = (function reagent_mui$util$reactify_component(component){
var reactified = reagent_mui.util.global$module$react.forwardRef((function (props,ref){
var clj_props = cljs.core.assoc.call(null,reagent_mui.util.js__GT_clj_SINGLEQUOTE_.call(null,props),new cljs.core.Keyword(null,"ref","ref",1289896967),ref);
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,clj_props], null));
}));
(reactified.displayName = reagent.impl.util.fun_name.call(null,component));

return reactified;
});
reagent_mui.util.wrap_styles = (function reagent_mui$util$wrap_styles(styles){
if(cljs.core.fn_QMARK_.call(null,styles)){
return (function (theme){
return reagent_mui.util.clj__GT_js_SINGLEQUOTE_.call(null,reagent_mui.util.wrap_all_clj_functions.call(null,styles.call(null,reagent_mui.util.js__GT_clj_SINGLEQUOTE_.call(null,theme))));
});
} else {
return reagent_mui.util.clj__GT_js_SINGLEQUOTE_.call(null,reagent_mui.util.wrap_all_clj_functions.call(null,styles));
}
});
reagent_mui.util.apply_hoc = (function reagent_mui$util$apply_hoc(hoc,component){
return reagent_mui.util.adapt_react_class.call(null,hoc.call(null,reagent_mui.util.reactify_component.call(null,component)));
});
reagent_mui.util.get_anycase = (function reagent_mui$util$get_anycase(var_args){
var G__2751 = arguments.length;
switch (G__2751) {
case 2:
return reagent_mui.util.get_anycase.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent_mui.util.get_anycase.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent_mui.util.get_anycase.cljs$core$IFn$_invoke$arity$2 = (function (m,k){
return reagent_mui.util.get_anycase.call(null,m,k,null);
}));

(reagent_mui.util.get_anycase.cljs$core$IFn$_invoke$arity$3 = (function (m,k,default$){
var temp__5802__auto__ = (function (){var or__5045__auto__ = cljs.core.find.call(null,m,camel_snake_kebab.core.__GT_kebab_case_keyword.call(null,k));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.find.call(null,m,camel_snake_kebab.core.__GT_camelCaseKeyword.call(null,k));
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var entry = temp__5802__auto__;
return cljs.core.val.call(null,entry);
} else {
return default$;
}
}));

(reagent_mui.util.get_anycase.cljs$lang$maxFixedArity = 3);

reagent_mui.util.assoc_anycase = (function reagent_mui$util$assoc_anycase(var_args){
var G__2758 = arguments.length;
switch (G__2758) {
case 3:
return reagent_mui.util.assoc_anycase.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___2760 = arguments.length;
var i__5770__auto___2761 = (0);
while(true){
if((i__5770__auto___2761 < len__5769__auto___2760)){
args_arr__5794__auto__.push((arguments[i__5770__auto___2761]));

var G__2762 = (i__5770__auto___2761 + (1));
i__5770__auto___2761 = G__2762;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((3)),(0),null));
return reagent_mui.util.assoc_anycase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5795__auto__);

}
});

(reagent_mui.util.assoc_anycase.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,m,camel_snake_kebab.core.__GT_camelCaseKeyword.call(null,k)),camel_snake_kebab.core.__GT_kebab_case_keyword.call(null,k),v);
}));

(reagent_mui.util.assoc_anycase.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
while(true){
var ret = reagent_mui.util.assoc_anycase.call(null,m,k,v);
if(cljs.core.truth_(kvs)){
var G__2763 = ret;
var G__2764 = cljs.core.first.call(null,kvs);
var G__2765 = cljs.core.second.call(null,kvs);
var G__2766 = cljs.core.nnext.call(null,kvs);
m = G__2763;
k = G__2764;
v = G__2765;
kvs = G__2766;
continue;
} else {
return ret;
}
break;
}
}));

/** @this {Function} */
(reagent_mui.util.assoc_anycase.cljs$lang$applyTo = (function (seq2754){
var G__2755 = cljs.core.first.call(null,seq2754);
var seq2754__$1 = cljs.core.next.call(null,seq2754);
var G__2756 = cljs.core.first.call(null,seq2754__$1);
var seq2754__$2 = cljs.core.next.call(null,seq2754__$1);
var G__2757 = cljs.core.first.call(null,seq2754__$2);
var seq2754__$3 = cljs.core.next.call(null,seq2754__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2755,G__2756,G__2757,seq2754__$3);
}));

(reagent_mui.util.assoc_anycase.cljs$lang$maxFixedArity = (3));

reagent_mui.util.remove_undefined_vals = (function reagent_mui$util$remove_undefined_vals(m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (acc,k,v){
if((void 0 === v)){
return cljs.core.dissoc_BANG_.call(null,acc,k);
} else {
return acc;
}
}),cljs.core.transient$.call(null,m),m));
});
reagent_mui.util.set_ref = (function reagent_mui$util$set_ref(ref,value){
if(cljs.core.fn_QMARK_.call(null,ref)){
ref.call(null,value);
} else {
if(cljs.core.truth_(ref)){
(ref.current = value);
} else {
}
}

return undefined;
});
reagent_mui.util.swap_ref = (function reagent_mui$util$swap_ref(var_args){
var args__5775__auto__ = [];
var len__5769__auto___2770 = arguments.length;
var i__5770__auto___2771 = (0);
while(true){
if((i__5770__auto___2771 < len__5769__auto___2770)){
args__5775__auto__.push((arguments[i__5770__auto___2771]));

var G__2772 = (i__5770__auto___2771 + (1));
i__5770__auto___2771 = G__2772;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return reagent_mui.util.swap_ref.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(reagent_mui.util.swap_ref.cljs$core$IFn$_invoke$arity$variadic = (function (ref,f,args){
return (ref.current = cljs.core.apply.call(null,f,ref.current,args));
}));

(reagent_mui.util.swap_ref.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent_mui.util.swap_ref.cljs$lang$applyTo = (function (seq2767){
var G__2768 = cljs.core.first.call(null,seq2767);
var seq2767__$1 = cljs.core.next.call(null,seq2767);
var G__2769 = cljs.core.first.call(null,seq2767__$1);
var seq2767__$2 = cljs.core.next.call(null,seq2767__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2768,G__2769,seq2767__$2);
}));

reagent_mui.util.use_fork_ref = (function reagent_mui$util$use_fork_ref(var_args){
var args__5775__auto__ = [];
var len__5769__auto___2778 = arguments.length;
var i__5770__auto___2779 = (0);
while(true){
if((i__5770__auto___2779 < len__5769__auto___2778)){
args__5775__auto__.push((arguments[i__5770__auto___2779]));

var G__2780 = (i__5770__auto___2779 + (1));
i__5770__auto___2779 = G__2780;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return reagent_mui.util.use_fork_ref.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(reagent_mui.util.use_fork_ref.cljs$core$IFn$_invoke$arity$variadic = (function (refs){
return reagent_mui.util.global$module$react.useMemo((function (){
if(cljs.core.not_every_QMARK_.call(null,cljs.core.nil_QMARK_,refs)){
return (function (value){
var seq__2774 = cljs.core.seq.call(null,refs);
var chunk__2775 = null;
var count__2776 = (0);
var i__2777 = (0);
while(true){
if((i__2777 < count__2776)){
var ref = cljs.core._nth.call(null,chunk__2775,i__2777);
reagent_mui.util.set_ref.call(null,ref,value);


var G__2781 = seq__2774;
var G__2782 = chunk__2775;
var G__2783 = count__2776;
var G__2784 = (i__2777 + (1));
seq__2774 = G__2781;
chunk__2775 = G__2782;
count__2776 = G__2783;
i__2777 = G__2784;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__2774);
if(temp__5804__auto__){
var seq__2774__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2774__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__2774__$1);
var G__2785 = cljs.core.chunk_rest.call(null,seq__2774__$1);
var G__2786 = c__5568__auto__;
var G__2787 = cljs.core.count.call(null,c__5568__auto__);
var G__2788 = (0);
seq__2774 = G__2785;
chunk__2775 = G__2786;
count__2776 = G__2787;
i__2777 = G__2788;
continue;
} else {
var ref = cljs.core.first.call(null,seq__2774__$1);
reagent_mui.util.set_ref.call(null,ref,value);


var G__2789 = cljs.core.next.call(null,seq__2774__$1);
var G__2790 = null;
var G__2791 = (0);
var G__2792 = (0);
seq__2774 = G__2789;
chunk__2775 = G__2790;
count__2776 = G__2791;
i__2777 = G__2792;
continue;
}
} else {
return null;
}
}
break;
}
});
} else {
return null;
}
}),cljs.core.apply.call(null,cljs.core.array,refs));
}));

(reagent_mui.util.use_fork_ref.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(reagent_mui.util.use_fork_ref.cljs$lang$applyTo = (function (seq2773){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2773));
}));

reagent_mui.util.use_callback = (function reagent_mui$util$use_callback(callback,props){
return reagent_mui.util.global$module$react.useCallback(callback,props);
});
reagent_mui.util.use_effect = (function reagent_mui$util$use_effect(effect,props){
return reagent_mui.util.global$module$react.useEffect(effect,props);
});
reagent_mui.util.use_layout_effect = (function reagent_mui$util$use_layout_effect(effect){
return reagent_mui.util.global$module$react.useLayoutEffect(effect);
});
reagent_mui.util.use_ref = (function reagent_mui$util$use_ref(value){
return reagent_mui.util.global$module$react.useRef(value);
});
reagent_mui.util.use_state = (function reagent_mui$util$use_state(initial_state){
return reagent_mui.util.global$module$react.useState(initial_state);
});

//# sourceMappingURL=util.js.map
