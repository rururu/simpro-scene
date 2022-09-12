// Compiled by ClojureScript 1.10.439 {}
goog.provide('reagent.impl.template');
goog.require('cljs.core');
goog.require('react');
goog.require('clojure.string');
goog.require('reagent.impl.util');
goog.require('reagent.impl.component');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.input');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('goog.object');
reagent.impl.template.global$module$react = goog.global["React"];
/**
 * Regular expression that parses a CSS-style id and class
 *           from a tag name.
 */
reagent.impl.template.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;

/**
* @constructor
*/
reagent.impl.template.NativeWrapper = (function (tag,id,className){
this.tag = tag;
this.id = id;
this.className = className;
});

reagent.impl.template.NativeWrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"className","className",-342755530,null)], null);
});

reagent.impl.template.NativeWrapper.cljs$lang$type = true;

reagent.impl.template.NativeWrapper.cljs$lang$ctorStr = "reagent.impl.template/NativeWrapper";

reagent.impl.template.NativeWrapper.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"reagent.impl.template/NativeWrapper");
});

/**
 * Positional factory function for reagent.impl.template/NativeWrapper.
 */
reagent.impl.template.__GT_NativeWrapper = (function reagent$impl$template$__GT_NativeWrapper(tag,id,className){
return (new reagent.impl.template.NativeWrapper(tag,id,className));
});

reagent.impl.template.adapt_react_class = (function reagent$impl$template$adapt_react_class(c){
return reagent.impl.template.__GT_NativeWrapper.call(null,c,null,null);
});
reagent.impl.template.hiccup_tag_QMARK_ = (function reagent$impl$template$hiccup_tag_QMARK_(x){
return ((reagent.impl.util.named_QMARK_.call(null,x)) || (typeof x === 'string'));
});
reagent.impl.template.valid_tag_QMARK_ = (function reagent$impl$template$valid_tag_QMARK_(x){
return ((reagent.impl.template.hiccup_tag_QMARK_.call(null,x)) || (cljs.core.ifn_QMARK_.call(null,x)) || ((x instanceof reagent.impl.template.NativeWrapper)));
});
reagent.impl.template.prop_name_cache = ({"class": "className", "for": "htmlFor", "charset": "charSet"});
reagent.impl.template.cache_get = (function reagent$impl$template$cache_get(o,k){
if(o.hasOwnProperty(k)){
return goog.object.get(o,k);
} else {
return null;
}
});
reagent.impl.template.cached_prop_name = (function reagent$impl$template$cached_prop_name(k){
if(reagent.impl.util.named_QMARK_.call(null,k)){
var temp__5737__auto__ = reagent.impl.template.cache_get.call(null,reagent.impl.template.prop_name_cache,cljs.core.name.call(null,k));
if((temp__5737__auto__ == null)){
var v = reagent.impl.util.dash_to_prop_name.call(null,k);
goog.object.set(reagent.impl.template.prop_name_cache,cljs.core.name.call(null,k),v);

return v;
} else {
var k_SINGLEQUOTE_ = temp__5737__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
reagent.impl.template.kv_conv = (function reagent$impl$template$kv_conv(o,k,v){
var G__27678 = o;
goog.object.set(G__27678,reagent.impl.template.cached_prop_name.call(null,k),reagent.impl.template.convert_prop_value.call(null,v));

return G__27678;
});
reagent.impl.template.convert_prop_value = (function reagent$impl$template$convert_prop_value(x){
if(reagent.impl.util.js_val_QMARK_.call(null,x)){
return x;
} else {
if(reagent.impl.util.named_QMARK_.call(null,x)){
return cljs.core.name.call(null,x);
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.reduce_kv.call(null,reagent.impl.template.kv_conv,({}),x);
} else {
if(cljs.core.coll_QMARK_.call(null,x)){
return cljs.core.clj__GT_js.call(null,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,x)){
return (function() { 
var G__27679__delegate = function (args){
return cljs.core.apply.call(null,x,args);
};
var G__27679 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27680__i = 0, G__27680__a = new Array(arguments.length -  0);
while (G__27680__i < G__27680__a.length) {G__27680__a[G__27680__i] = arguments[G__27680__i + 0]; ++G__27680__i;}
  args = new cljs.core.IndexedSeq(G__27680__a,0,null);
} 
return G__27679__delegate.call(this,args);};
G__27679.cljs$lang$maxFixedArity = 0;
G__27679.cljs$lang$applyTo = (function (arglist__27681){
var args = cljs.core.seq(arglist__27681);
return G__27679__delegate(args);
});
G__27679.cljs$core$IFn$_invoke$arity$variadic = G__27679__delegate;
return G__27679;
})()
;
} else {
return cljs.core.clj__GT_js.call(null,x);

}
}
}
}
}
});
reagent.impl.template.custom_prop_name_cache = ({});
reagent.impl.template.cached_custom_prop_name = (function reagent$impl$template$cached_custom_prop_name(k){
if(reagent.impl.util.named_QMARK_.call(null,k)){
var temp__5737__auto__ = reagent.impl.template.cache_get.call(null,reagent.impl.template.custom_prop_name_cache,cljs.core.name.call(null,k));
if((temp__5737__auto__ == null)){
var v = reagent.impl.util.dash_to_prop_name.call(null,k);
goog.object.set(reagent.impl.template.custom_prop_name_cache,cljs.core.name.call(null,k),v);

return v;
} else {
var k_SINGLEQUOTE_ = temp__5737__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
reagent.impl.template.custom_kv_conv = (function reagent$impl$template$custom_kv_conv(o,k,v){
var G__27682 = o;
goog.object.set(G__27682,reagent.impl.template.cached_custom_prop_name.call(null,k),reagent.impl.template.convert_prop_value.call(null,v));

return G__27682;
});
reagent.impl.template.convert_custom_prop_value = (function reagent$impl$template$convert_custom_prop_value(x){
if(reagent.impl.util.js_val_QMARK_.call(null,x)){
return x;
} else {
if(reagent.impl.util.named_QMARK_.call(null,x)){
return cljs.core.name.call(null,x);
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.reduce_kv.call(null,reagent.impl.template.custom_kv_conv,({}),x);
} else {
if(cljs.core.coll_QMARK_.call(null,x)){
return cljs.core.clj__GT_js.call(null,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,x)){
return (function() { 
var G__27683__delegate = function (args){
return cljs.core.apply.call(null,x,args);
};
var G__27683 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27684__i = 0, G__27684__a = new Array(arguments.length -  0);
while (G__27684__i < G__27684__a.length) {G__27684__a[G__27684__i] = arguments[G__27684__i + 0]; ++G__27684__i;}
  args = new cljs.core.IndexedSeq(G__27684__a,0,null);
} 
return G__27683__delegate.call(this,args);};
G__27683.cljs$lang$maxFixedArity = 0;
G__27683.cljs$lang$applyTo = (function (arglist__27685){
var args = cljs.core.seq(arglist__27685);
return G__27683__delegate(args);
});
G__27683.cljs$core$IFn$_invoke$arity$variadic = G__27683__delegate;
return G__27683;
})()
;
} else {
return cljs.core.clj__GT_js.call(null,x);

}
}
}
}
}
});
/**
 * Takes the id and class from tag keyword, and adds them to the
 *   other props. Parsed tag is JS object with :id and :class properties.
 */
reagent.impl.template.set_id_class = (function reagent$impl$template$set_id_class(props,id_class){
var id = id_class.id;
var class$ = id_class.className;
var G__27686 = props;
var G__27686__$1 = (((((!((id == null)))) && ((new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props) == null))))?cljs.core.assoc.call(null,G__27686,new cljs.core.Keyword(null,"id","id",-1388402092),id):G__27686);
if(cljs.core.truth_(class$)){
return cljs.core.assoc.call(null,G__27686__$1,new cljs.core.Keyword(null,"class","class",-2030961996),reagent.impl.util.class_names.call(null,class$,(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props);
}
})()));
} else {
return G__27686__$1;
}
});
reagent.impl.template.convert_props = (function reagent$impl$template$convert_props(props,id_class){
var class$ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props);
var props__$1 = reagent.impl.template.set_id_class.call(null,(function (){var G__27687 = props;
if(cljs.core.truth_(class$)){
return cljs.core.assoc.call(null,G__27687,new cljs.core.Keyword(null,"class","class",-2030961996),reagent.impl.util.class_names.call(null,class$));
} else {
return G__27687;
}
})(),id_class);
if(cljs.core.truth_(id_class.custom)){
return reagent.impl.template.convert_custom_prop_value.call(null,props__$1);
} else {
return reagent.impl.template.convert_prop_value.call(null,props__$1);
}
});
reagent.impl.template.make_element = (function reagent$impl$template$make_element(this$,argv,component,jsprops,first_child){
var G__27688 = (cljs.core.count.call(null,argv) - first_child);
switch (G__27688) {
case (0):
return reagent.impl.template.global$module$react.createElement.call(null,component,jsprops);

break;
case (1):
return reagent.impl.template.global$module$react.createElement.call(null,component,jsprops,reagent.impl.protocols.as_element.call(null,this$,cljs.core.nth.call(null,argv,first_child,null)));

break;
default:
return reagent.impl.template.global$module$react.createElement.apply(null,cljs.core.reduce_kv.call(null,((function (G__27688){
return (function (a,k,v){
if((k >= first_child)){
a.push(reagent.impl.protocols.as_element.call(null,this$,v));
} else {
}

return a;
});})(G__27688))
,[component,jsprops],argv));

}
});

/**
* @constructor
*/
reagent.impl.template.HiccupTag = (function (tag,id,className,custom){
this.tag = tag;
this.id = id;
this.className = className;
this.custom = custom;
});

reagent.impl.template.HiccupTag.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"className","className",-342755530,null),new cljs.core.Symbol(null,"custom","custom",1980683475,null)], null);
});

reagent.impl.template.HiccupTag.cljs$lang$type = true;

reagent.impl.template.HiccupTag.cljs$lang$ctorStr = "reagent.impl.template/HiccupTag";

reagent.impl.template.HiccupTag.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"reagent.impl.template/HiccupTag");
});

/**
 * Positional factory function for reagent.impl.template/HiccupTag.
 */
reagent.impl.template.__GT_HiccupTag = (function reagent$impl$template$__GT_HiccupTag(tag,id,className,custom){
return (new reagent.impl.template.HiccupTag(tag,id,className,custom));
});

reagent.impl.template.parse_tag = (function reagent$impl$template$parse_tag(hiccup_tag){
var vec__27690 = cljs.core.next.call(null,cljs.core.re_matches.call(null,reagent.impl.template.re_tag,cljs.core.name.call(null,hiccup_tag)));
var tag = cljs.core.nth.call(null,vec__27690,(0),null);
var id = cljs.core.nth.call(null,vec__27690,(1),null);
var className = cljs.core.nth.call(null,vec__27690,(2),null);
var className__$1 = (((className == null))?null:clojure.string.replace.call(null,className,/\./," "));
if(cljs.core.truth_(tag)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Invalid tag: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccup_tag),"'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.component.comp_name.call(null))].join('')),"\n","tag"].join('')));
}

return reagent.impl.template.__GT_HiccupTag.call(null,tag,id,className__$1,cljs.core.not_EQ_.call(null,(-1),tag.indexOf("-")));
});
reagent.impl.template.reag_element = (function reagent$impl$template$reag_element(tag,v,compiler){
var c = reagent.impl.component.as_class.call(null,tag,compiler);
var jsprops = ({});
jsprops.argv = v;

var temp__5739__auto___27693 = reagent.impl.util.react_key_from_vec.call(null,v);
if((temp__5739__auto___27693 == null)){
} else {
var key_27694 = temp__5739__auto___27693;
jsprops.key = key_27694;
}

return reagent.impl.template.global$module$react.createElement.call(null,c,jsprops);
});
reagent.impl.template.function_element = (function reagent$impl$template$function_element(tag,v,first_arg,compiler){
var jsprops = ({});
jsprops.reagentRender = tag;

jsprops.argv = cljs.core.subvec.call(null,v,first_arg);

var temp__5739__auto___27695 = reagent.impl.util.react_key_from_vec.call(null,v);
if((temp__5739__auto___27695 == null)){
} else {
var key_27696 = temp__5739__auto___27695;
jsprops.key = key_27696;
}

return reagent.impl.template.global$module$react.createElement.call(null,reagent.impl.component.functional_render_fn.call(null,compiler,tag),jsprops);
});
/**
 * If given tag is a Class, use it as a class,
 *   else wrap in Reagent function wrapper.
 */
reagent.impl.template.maybe_function_element = (function reagent$impl$template$maybe_function_element(tag,v,compiler){
if(reagent.impl.component.react_class_QMARK_.call(null,tag)){
return reagent.impl.template.reag_element.call(null,tag,v,compiler);
} else {
return reagent.impl.template.function_element.call(null,tag,v,(1),compiler);
}
});
reagent.impl.template.fragment_element = (function reagent$impl$template$fragment_element(argv,compiler){
var props = cljs.core.nth.call(null,argv,(1),null);
var hasprops = (((props == null)) || (cljs.core.map_QMARK_.call(null,props)));
var jsprops = (function (){var or__4047__auto__ = reagent.impl.template.convert_prop_value.call(null,((hasprops)?props:null));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return ({});
}
})();
var first_child = ((1) + ((hasprops)?(1):(0)));
var temp__5739__auto___27697 = reagent.impl.util.react_key_from_vec.call(null,argv);
if((temp__5739__auto___27697 == null)){
} else {
var key_27698 = temp__5739__auto___27697;
jsprops.key = key_27698;
}

return reagent.impl.protocols.make_element.call(null,compiler,argv,reagent.impl.template.global$module$react.Fragment,jsprops,first_child);
});
reagent.impl.template.tag_name_cache = ({});
reagent.impl.template.cached_parse = (function reagent$impl$template$cached_parse(this$,x,_){
var temp__5737__auto__ = reagent.impl.template.cache_get.call(null,reagent.impl.template.tag_name_cache,x);
if((temp__5737__auto__ == null)){
var v = reagent.impl.template.parse_tag.call(null,x);
goog.object.set(reagent.impl.template.tag_name_cache,x,v);

return v;
} else {
var s = temp__5737__auto__;
return s;
}
});
reagent.impl.template.native_element = (function reagent$impl$template$native_element(parsed,argv,first,compiler){
var component = parsed.tag;
var props = cljs.core.nth.call(null,argv,first,null);
var hasprops = (((props == null)) || (cljs.core.map_QMARK_.call(null,props)));
var jsprops = (function (){var or__4047__auto__ = reagent.impl.template.convert_props.call(null,((hasprops)?props:null),parsed);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return ({});
}
})();
var first_child = (first + ((hasprops)?(1):(0)));
if(reagent.impl.input.input_component_QMARK_.call(null,component)){
var react_key = reagent.impl.util.get_react_key.call(null,props);
var input_class = (function (){var or__4047__auto__ = compiler.reagentInput;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var x = reagent.impl.component.create_class.call(null,reagent.impl.input.input_spec,compiler);
compiler.reagentInput = x;

return x;
}
})();
return reagent.impl.protocols.as_element.call(null,compiler,cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_class,argv,component,jsprops,first_child,compiler], null),cljs.core.merge.call(null,(cljs.core.truth_(react_key)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),react_key], null):null),cljs.core.meta.call(null,argv))));
} else {
var temp__5739__auto___27699 = reagent.impl.util.get_react_key.call(null,cljs.core.meta.call(null,argv));
if((temp__5739__auto___27699 == null)){
} else {
var key_27700 = temp__5739__auto___27699;
jsprops.key = key_27700;
}

return reagent.impl.protocols.make_element.call(null,compiler,argv,component,jsprops,first_child);
}
});
reagent.impl.template.raw_element = (function reagent$impl$template$raw_element(comp,argv,compiler){
var props = cljs.core.nth.call(null,argv,(2),null);
var jsprops = (function (){var or__4047__auto__ = props;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return ({});
}
})();
var temp__5739__auto___27701 = reagent.impl.util.get_react_key.call(null,cljs.core.meta.call(null,argv));
if((temp__5739__auto___27701 == null)){
} else {
var key_27702 = temp__5739__auto___27701;
jsprops.key = key_27702;
}

return reagent.impl.protocols.make_element.call(null,compiler,argv,comp,jsprops,(3));
});
reagent.impl.template.expand_seq = (function reagent$impl$template$expand_seq(s,compiler){
return cljs.core.into_array.call(null,cljs.core.map.call(null,(function (p1__27703_SHARP_){
return reagent.impl.protocols.as_element.call(null,compiler,p1__27703_SHARP_);
}),s));
});
reagent.impl.template.expand_seq_dev = (function reagent$impl$template$expand_seq_dev(s,o,compiler){
return cljs.core.into_array.call(null,cljs.core.map.call(null,(function (val){
if(((cljs.core.vector_QMARK_.call(null,val)) && ((reagent.impl.util.react_key_from_vec.call(null,val) == null)))){
o.no_key = true;
} else {
}

return reagent.impl.protocols.as_element.call(null,compiler,val);
}),s));
});
reagent.impl.template.expand_seq_check = (function reagent$impl$template$expand_seq_check(x,compiler){
var ctx = ({});
var vec__27704 = reagent.ratom.check_derefs.call(null,((function (ctx){
return (function (){
return reagent.impl.template.expand_seq_dev.call(null,x,ctx,compiler);
});})(ctx))
);
var res = cljs.core.nth.call(null,vec__27704,(0),null);
var derefed = cljs.core.nth.call(null,vec__27704,(1),null);
if(cljs.core.truth_(derefed)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).warn(["Warning: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.util.hiccup_err.call(null,x,reagent.impl.component.comp_name.call(null),"Reactive deref not supported in lazy seq, ","it should be wrapped in doall"))].join(''));
} else {
}
} else {
}

if(cljs.core.truth_(ctx.no_key)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).warn(["Warning: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.util.hiccup_err.call(null,x,reagent.impl.component.comp_name.call(null),"Every element in a seq should have a unique :key"))].join(''));
} else {
}
} else {
}

return res;
});
reagent.impl.template.hiccup_element = (function reagent$impl$template$hiccup_element(v,compiler){
while(true){
var tag = cljs.core.nth.call(null,v,(0),null);
var n = cljs.core.name.call(null,tag);
var pos = n.indexOf(">");
var G__27707 = pos;
switch (G__27707) {
case (-1):
return reagent.impl.template.native_element.call(null,reagent.impl.protocols.parse_tag.call(null,compiler,n,tag),v,(1),compiler);

break;
case (0):
if(cljs.core._EQ_.call(null,">",n)){
return null;
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.util.hiccup_err.call(null,v,reagent.impl.component.comp_name.call(null),"Invalid Hiccup tag")),"\n","(= \">\" n)"].join('')));
}

break;
default:
var G__27709 = cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,n,(0),pos),cljs.core.assoc.call(null,cljs.core.with_meta.call(null,v,null),(0),cljs.core.subs.call(null,n,(pos + (1))))], null),cljs.core.meta.call(null,v));
var G__27710 = compiler;
v = G__27709;
compiler = G__27710;
continue;

}
break;
}
});
reagent.impl.template.vec_to_elem = (function reagent$impl$template$vec_to_elem(v,compiler,fn_to_element){
if((compiler == null)){
console.error("vec-to-elem",cljs.core.pr_str.call(null,v));
} else {
}

if((cljs.core.count.call(null,v) > (0))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.util.hiccup_err.call(null,v,reagent.impl.component.comp_name.call(null),"Hiccup form should not be empty")),"\n","(pos? (count v))"].join('')));
}

var tag = cljs.core.nth.call(null,v,(0),null);
if(reagent.impl.template.valid_tag_QMARK_.call(null,tag)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.util.hiccup_err.call(null,v,reagent.impl.component.comp_name.call(null),"Invalid Hiccup form")),"\n","(valid-tag? tag)"].join('')));
}

var G__27711 = tag;
var G__27711__$1 = (((G__27711 instanceof cljs.core.Keyword))?G__27711.fqn:null);
switch (G__27711__$1) {
case ">":
return reagent.impl.template.native_element.call(null,reagent.impl.template.__GT_HiccupTag.call(null,cljs.core.nth.call(null,v,(1),null),null,null,null),v,(2),compiler);

break;
case "r>":
return reagent.impl.template.raw_element.call(null,cljs.core.nth.call(null,v,(1),null),v,compiler);

break;
case "f>":
return reagent.impl.template.function_element.call(null,cljs.core.nth.call(null,v,(1),null),v,(2),compiler);

break;
case "<>":
return reagent.impl.template.fragment_element.call(null,v,compiler);

break;
default:
if(reagent.impl.template.hiccup_tag_QMARK_.call(null,tag)){
return reagent.impl.template.hiccup_element.call(null,v,compiler);
} else {
if((tag instanceof reagent.impl.template.NativeWrapper)){
return reagent.impl.template.native_element.call(null,tag,v,(1),compiler);
} else {
return fn_to_element.call(null,tag,v,compiler);

}
}

}
});
reagent.impl.template.as_element = (function reagent$impl$template$as_element(this$,x,fn_to_element){
if(reagent.impl.util.js_val_QMARK_.call(null,x)){
return x;
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return reagent.impl.template.vec_to_elem.call(null,x,this$,fn_to_element);
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return reagent.impl.template.expand_seq_check.call(null,x,this$);

} else {
if(reagent.impl.util.named_QMARK_.call(null,x)){
return cljs.core.name.call(null,x);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (2147483648))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IPrintWithWriter$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPrintWithWriter,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPrintWithWriter,x))){
return cljs.core.pr_str.call(null,x);
} else {
return x;

}
}
}
}
}
});
reagent.impl.template.create_compiler = (function reagent$impl$template$create_compiler(opts){
var id = cljs.core.gensym.call(null);
var fn_to_element = (cljs.core.truth_(new cljs.core.Keyword(null,"function-components","function-components",1492814963).cljs$core$IFn$_invoke$arity$1(opts))?reagent.impl.template.maybe_function_element:reagent.impl.template.reag_element);
var parse_fn = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"parse-tag","parse-tag",1427313738),reagent.impl.template.cached_parse);
if((typeof reagent !== 'undefined') && (typeof reagent.impl !== 'undefined') && (typeof reagent.impl.template !== 'undefined') && (typeof reagent.impl.template.t_reagent$impl$template27714 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reagent.impl.protocols.Compiler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reagent.impl.template.t_reagent$impl$template27714 = (function (opts,id,fn_to_element,parse_fn,meta27715){
this.opts = opts;
this.id = id;
this.fn_to_element = fn_to_element;
this.parse_fn = parse_fn;
this.meta27715 = meta27715;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reagent.impl.template.t_reagent$impl$template27714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,fn_to_element,parse_fn){
return (function (_27716,meta27715__$1){
var self__ = this;
var _27716__$1 = this;
return (new reagent.impl.template.t_reagent$impl$template27714(self__.opts,self__.id,self__.fn_to_element,self__.parse_fn,meta27715__$1));
});})(id,fn_to_element,parse_fn))
;

reagent.impl.template.t_reagent$impl$template27714.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,fn_to_element,parse_fn){
return (function (_27716){
var self__ = this;
var _27716__$1 = this;
return self__.meta27715;
});})(id,fn_to_element,parse_fn))
;

reagent.impl.template.t_reagent$impl$template27714.prototype.reagent$impl$protocols$Compiler$ = cljs.core.PROTOCOL_SENTINEL;

reagent.impl.template.t_reagent$impl$template27714.prototype.reagent$impl$protocols$Compiler$get_id$arity$1 = ((function (id,fn_to_element,parse_fn){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.id;
});})(id,fn_to_element,parse_fn))
;

reagent.impl.template.t_reagent$impl$template27714.prototype.reagent$impl$protocols$Compiler$parse_tag$arity$3 = ((function (id,fn_to_element,parse_fn){
return (function (this$,tag_name,tag_value){
var self__ = this;
var this$__$1 = this;
return self__.parse_fn.call(null,this$__$1,tag_name,tag_value);
});})(id,fn_to_element,parse_fn))
;

reagent.impl.template.t_reagent$impl$template27714.prototype.reagent$impl$protocols$Compiler$as_element$arity$2 = ((function (id,fn_to_element,parse_fn){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
return reagent.impl.template.as_element.call(null,this$__$1,x,self__.fn_to_element);
});})(id,fn_to_element,parse_fn))
;

reagent.impl.template.t_reagent$impl$template27714.prototype.reagent$impl$protocols$Compiler$make_element$arity$5 = ((function (id,fn_to_element,parse_fn){
return (function (this$,argv,component,jsprops,first_child){
var self__ = this;
var this$__$1 = this;
return reagent.impl.template.make_element.call(null,this$__$1,argv,component,jsprops,first_child);
});})(id,fn_to_element,parse_fn))
;

reagent.impl.template.t_reagent$impl$template27714.getBasis = ((function (id,fn_to_element,parse_fn){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"fn-to-element","fn-to-element",-1764467095,null),new cljs.core.Symbol(null,"parse-fn","parse-fn",-836029424,null),new cljs.core.Symbol(null,"meta27715","meta27715",-1493074814,null)], null);
});})(id,fn_to_element,parse_fn))
;

reagent.impl.template.t_reagent$impl$template27714.cljs$lang$type = true;

reagent.impl.template.t_reagent$impl$template27714.cljs$lang$ctorStr = "reagent.impl.template/t_reagent$impl$template27714";

reagent.impl.template.t_reagent$impl$template27714.cljs$lang$ctorPrWriter = ((function (id,fn_to_element,parse_fn){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"reagent.impl.template/t_reagent$impl$template27714");
});})(id,fn_to_element,parse_fn))
;

/**
 * Positional factory function for reagent.impl.template/t_reagent$impl$template27714.
 */
reagent.impl.template.__GT_t_reagent$impl$template27714 = ((function (id,fn_to_element,parse_fn){
return (function reagent$impl$template$create_compiler_$___GT_t_reagent$impl$template27714(opts__$1,id__$1,fn_to_element__$1,parse_fn__$1,meta27715){
return (new reagent.impl.template.t_reagent$impl$template27714(opts__$1,id__$1,fn_to_element__$1,parse_fn__$1,meta27715));
});})(id,fn_to_element,parse_fn))
;

}

return (new reagent.impl.template.t_reagent$impl$template27714(opts,id,fn_to_element,parse_fn,cljs.core.PersistentArrayMap.EMPTY));
});
reagent.impl.template.default_compiler_STAR_ = reagent.impl.template.create_compiler.call(null,cljs.core.PersistentArrayMap.EMPTY);
reagent.impl.template.default_compiler = reagent.impl.template.default_compiler_STAR_;
reagent.impl.template.set_default_compiler_BANG_ = (function reagent$impl$template$set_default_compiler_BANG_(compiler){
return reagent.impl.template.default_compiler = compiler;
});

//# sourceMappingURL=template.js.map
