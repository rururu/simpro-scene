// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('camel_snake_kebab.internals.alter_name');
goog.require('cljs.core');

/**
 * @interface
 */
camel_snake_kebab.internals.alter_name.AlterName = function(){};

var camel_snake_kebab$internals$alter_name$AlterName$alter_name$dyn_3355 = (function (this$,f){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (camel_snake_kebab.internals.alter_name.alter_name[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,f);
} else {
var m__5392__auto__ = (camel_snake_kebab.internals.alter_name.alter_name["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,f);
} else {
throw cljs.core.missing_protocol.call(null,"AlterName.alter-name",this$);
}
}
});
/**
 * Alters the name of this with f.
 */
camel_snake_kebab.internals.alter_name.alter_name = (function camel_snake_kebab$internals$alter_name$alter_name(this$,f){
if((((!((this$ == null)))) && ((!((this$.camel_snake_kebab$internals$alter_name$AlterName$alter_name$arity$2 == null)))))){
return this$.camel_snake_kebab$internals$alter_name$AlterName$alter_name$arity$2(this$,f);
} else {
return camel_snake_kebab$internals$alter_name$AlterName$alter_name$dyn_3355.call(null,this$,f);
}
});

(camel_snake_kebab.internals.alter_name.AlterName["string"] = true);

(camel_snake_kebab.internals.alter_name.alter_name["string"] = (function (this$,f){
return f.call(null,this$);
}));

(cljs.core.Keyword.prototype.camel_snake_kebab$internals$alter_name$AlterName$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.camel_snake_kebab$internals$alter_name$AlterName$alter_name$arity$2 = (function (this$,f){
var this$__$1 = this;
if(cljs.core.truth_(cljs.core.namespace.call(null,this$__$1))){
throw cljs.core.ex_info.call(null,"Namespaced keywords are not supported",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),this$__$1], null));
} else {
return cljs.core.keyword.call(null,f.call(null,cljs.core.name.call(null,this$__$1)));
}
}));

(cljs.core.Symbol.prototype.camel_snake_kebab$internals$alter_name$AlterName$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Symbol.prototype.camel_snake_kebab$internals$alter_name$AlterName$alter_name$arity$2 = (function (this$,f){
var this$__$1 = this;
if(cljs.core.truth_(cljs.core.namespace.call(null,this$__$1))){
throw cljs.core.ex_info.call(null,"Namespaced symbols are not supported",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),this$__$1], null));
} else {
return cljs.core.symbol.call(null,f.call(null,cljs.core.name.call(null,this$__$1)));
}
}));

//# sourceMappingURL=alter_name.js.map
