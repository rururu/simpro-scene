// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('reagent.impl.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('reagent.debug');
goog.require('goog.object');
goog.scope(function(){
reagent.impl.util.goog$module$goog$object = goog.module.get('goog.object');
});
reagent.impl.util.is_client = (((typeof window !== 'undefined')) && ((!((window.document == null)))));
reagent.impl.util._STAR_non_reactive_STAR_ = false;
reagent.impl.util.memoize_1 = (function reagent$impl$util$memoize_1(f){
var mem = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return (function (arg){
var v = cljs.core.get.call(null,cljs.core.deref.call(null,mem),arg);
if((!((v == null)))){
return v;
} else {
var ret = f.call(null,arg);
cljs.core.swap_BANG_.call(null,mem,cljs.core.assoc,arg,ret);

return ret;
}
});
});
reagent.impl.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
reagent.impl.util.capitalize = (function reagent$impl$util$capitalize(s){
if((cljs.core.count.call(null,s) < (2))){
return clojure.string.upper_case.call(null,s);
} else {
return [clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,(0),(1))),cljs.core.subs.call(null,s,(1))].join('');
}
});
reagent.impl.util.dash_to_prop_name = (function reagent$impl$util$dash_to_prop_name(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name.call(null,dashed);
var vec__3526 = clojure.string.split.call(null,name_str,/-/);
var seq__3527 = cljs.core.seq.call(null,vec__3526);
var first__3528 = cljs.core.first.call(null,seq__3527);
var seq__3527__$1 = cljs.core.next.call(null,seq__3527);
var start = first__3528;
var parts = seq__3527__$1;
if(cljs.core.truth_(reagent.impl.util.dont_camel_case.call(null,start))){
return name_str;
} else {
return cljs.core.apply.call(null,cljs.core.str,start,cljs.core.map.call(null,reagent.impl.util.capitalize,parts));
}
}
});
reagent.impl.util.dash_to_method_name = (function reagent$impl$util$dash_to_method_name(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name.call(null,dashed);
var name_str__$1 = clojure.string.replace.call(null,name_str,/(unsafe|UNSAFE)[-_]/,"UNSAFE_");
var vec__3529 = clojure.string.split.call(null,name_str__$1,/-/);
var seq__3530 = cljs.core.seq.call(null,vec__3529);
var first__3531 = cljs.core.first.call(null,seq__3530);
var seq__3530__$1 = cljs.core.next.call(null,seq__3530);
var start = first__3531;
var parts = seq__3530__$1;
return cljs.core.apply.call(null,cljs.core.str,start,cljs.core.map.call(null,reagent.impl.util.capitalize,parts));
}
});
reagent.impl.util.fun_name = (function reagent$impl$util$fun_name(f){
var n = (function (){var or__5045__auto__ = (function (){var and__5043__auto__ = cljs.core.fn_QMARK_.call(null,f);
if(and__5043__auto__){
var or__5045__auto__ = f.displayName;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var n = f.name;
if(((typeof n === 'string') && (cljs.core.seq.call(null,n)))){
return n;
} else {
return null;
}
}
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (function (){var and__5043__auto__ = (((!((f == null))))?(((((f.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === f.cljs$core$INamed$))))?true:false):false);
if(and__5043__auto__){
return cljs.core.name.call(null,f);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var m = cljs.core.meta.call(null,f);
if(cljs.core.map_QMARK_.call(null,m)){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(n)){
return clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"$",".");
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.Fn}
*/
reagent.impl.util.PartialFn = (function (pfn,f,args){
this.pfn = pfn;
this.f = f;
this.args = args;
this.cljs$lang$protocol_mask$partition0$ = 6291457;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reagent.impl.util.PartialFn.prototype.cljs$core$Fn$ = cljs.core.PROTOCOL_SENTINEL);

(reagent.impl.util.PartialFn.prototype.call = (function() {
var G__3535 = null;
var G__3535__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null);
});
var G__3535__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a);
});
var G__3535__3 = (function (self__,a,b){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b);
});
var G__3535__4 = (function (self__,a,b,c){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c);
});
var G__3535__5 = (function (self__,a,b,c,d){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d);
});
var G__3535__6 = (function (self__,a,b,c,d,e){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e);
});
var G__3535__7 = (function (self__,a,b,c,d,e,f__$1){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1);
});
var G__3535__8 = (function (self__,a,b,c,d,e,f__$1,g){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g);
});
var G__3535__9 = (function (self__,a,b,c,d,e,f__$1,g,h){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h);
});
var G__3535__10 = (function (self__,a,b,c,d,e,f__$1,g,h,i){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i);
});
var G__3535__11 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j);
});
var G__3535__12 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k);
});
var G__3535__13 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l);
});
var G__3535__14 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m);
});
var G__3535__15 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n);
});
var G__3535__16 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o);
});
var G__3535__17 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p);
});
var G__3535__18 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q);
});
var G__3535__19 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r);
});
var G__3535__20 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s);
});
var G__3535__21 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
});
var G__3535__22 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return cljs.core.apply.call(null,self__.pfn,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
});
G__3535 = function(self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__3535__1.call(this,self__);
case 2:
return G__3535__2.call(this,self__,a);
case 3:
return G__3535__3.call(this,self__,a,b);
case 4:
return G__3535__4.call(this,self__,a,b,c);
case 5:
return G__3535__5.call(this,self__,a,b,c,d);
case 6:
return G__3535__6.call(this,self__,a,b,c,d,e);
case 7:
return G__3535__7.call(this,self__,a,b,c,d,e,f__$1);
case 8:
return G__3535__8.call(this,self__,a,b,c,d,e,f__$1,g);
case 9:
return G__3535__9.call(this,self__,a,b,c,d,e,f__$1,g,h);
case 10:
return G__3535__10.call(this,self__,a,b,c,d,e,f__$1,g,h,i);
case 11:
return G__3535__11.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j);
case 12:
return G__3535__12.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k);
case 13:
return G__3535__13.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l);
case 14:
return G__3535__14.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m);
case 15:
return G__3535__15.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n);
case 16:
return G__3535__16.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o);
case 17:
return G__3535__17.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__3535__18.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__3535__19.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__3535__20.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__3535__21.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__3535__22.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__3535.cljs$core$IFn$_invoke$arity$1 = G__3535__1;
G__3535.cljs$core$IFn$_invoke$arity$2 = G__3535__2;
G__3535.cljs$core$IFn$_invoke$arity$3 = G__3535__3;
G__3535.cljs$core$IFn$_invoke$arity$4 = G__3535__4;
G__3535.cljs$core$IFn$_invoke$arity$5 = G__3535__5;
G__3535.cljs$core$IFn$_invoke$arity$6 = G__3535__6;
G__3535.cljs$core$IFn$_invoke$arity$7 = G__3535__7;
G__3535.cljs$core$IFn$_invoke$arity$8 = G__3535__8;
G__3535.cljs$core$IFn$_invoke$arity$9 = G__3535__9;
G__3535.cljs$core$IFn$_invoke$arity$10 = G__3535__10;
G__3535.cljs$core$IFn$_invoke$arity$11 = G__3535__11;
G__3535.cljs$core$IFn$_invoke$arity$12 = G__3535__12;
G__3535.cljs$core$IFn$_invoke$arity$13 = G__3535__13;
G__3535.cljs$core$IFn$_invoke$arity$14 = G__3535__14;
G__3535.cljs$core$IFn$_invoke$arity$15 = G__3535__15;
G__3535.cljs$core$IFn$_invoke$arity$16 = G__3535__16;
G__3535.cljs$core$IFn$_invoke$arity$17 = G__3535__17;
G__3535.cljs$core$IFn$_invoke$arity$18 = G__3535__18;
G__3535.cljs$core$IFn$_invoke$arity$19 = G__3535__19;
G__3535.cljs$core$IFn$_invoke$arity$20 = G__3535__20;
G__3535.cljs$core$IFn$_invoke$arity$21 = G__3535__21;
G__3535.cljs$core$IFn$_invoke$arity$22 = G__3535__22;
return G__3535;
})()
);

(reagent.impl.util.PartialFn.prototype.apply = (function (self__,args3533){
var self__ = this;
var self____$1 = this;
var args__5260__auto__ = cljs.core.aclone.call(null,args3533);
return self____$1.call.apply(self____$1,[self____$1].concat((((args__5260__auto__.length > (20)))?(function (){var G__3534 = args__5260__auto__.slice((0),(20));
G__3534.push(args__5260__auto__.slice((20)));

return G__3534;
})():args__5260__auto__)));
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return self__.pfn.call(null);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f__$1){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f__$1,g){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f__$1,g,h){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f__$1,g,h,i){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f__$1,g,h,i,j){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f__$1,g,h,i,j,k){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var _ = this;
return cljs.core.apply.call(null,self__.pfn,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof reagent.impl.util.PartialFn)) && (((cljs.core._EQ_.call(null,self__.f,other.f)) && (cljs.core._EQ_.call(null,self__.args,other.args)))));
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
}));

(reagent.impl.util.PartialFn.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pfn","pfn",-513383568,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
}));

(reagent.impl.util.PartialFn.cljs$lang$type = true);

(reagent.impl.util.PartialFn.cljs$lang$ctorStr = "reagent.impl.util/PartialFn");

(reagent.impl.util.PartialFn.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"reagent.impl.util/PartialFn");
}));

/**
 * Positional factory function for reagent.impl.util/PartialFn.
 */
reagent.impl.util.__GT_PartialFn = (function reagent$impl$util$__GT_PartialFn(pfn,f,args){
return (new reagent.impl.util.PartialFn(pfn,f,args));
});

reagent.impl.util.make_partial_fn = (function reagent$impl$util$make_partial_fn(f,args){
return reagent.impl.util.__GT_PartialFn.call(null,cljs.core.apply.call(null,cljs.core.partial,f,args),f,args);
});
reagent.impl.util.named_QMARK_ = (function reagent$impl$util$named_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)));
});
reagent.impl.util.class_names = (function reagent$impl$util$class_names(var_args){
var G__3540 = arguments.length;
switch (G__3540) {
case 0:
return reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___3542 = arguments.length;
var i__5770__auto___3543 = (0);
while(true){
if((i__5770__auto___3543 < len__5769__auto___3542)){
args_arr__5794__auto__.push((arguments[i__5770__auto___3543]));

var G__3544 = (i__5770__auto___3543 + (1));
i__5770__auto___3543 = G__3544;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$1 = (function (class$){
if(cljs.core.coll_QMARK_.call(null,class$)){
var classes = cljs.core.keep.call(null,(function (c){
if(cljs.core.truth_(c)){
if(reagent.impl.util.named_QMARK_.call(null,c)){
return cljs.core.name.call(null,c);
} else {
return c;
}
} else {
return null;
}
}),class$);
if(cljs.core.seq.call(null,classes)){
return clojure.string.join.call(null," ",classes);
} else {
return null;
}
} else {
if(reagent.impl.util.named_QMARK_.call(null,class$)){
return cljs.core.name.call(null,class$);
} else {
return class$;
}
}
}));

(reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if(cljs.core.truth_(a)){
if(cljs.core.truth_(b)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.util.class_names.call(null,a))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.util.class_names.call(null,b))].join('');
} else {
return reagent.impl.util.class_names.call(null,a);
}
} else {
return reagent.impl.util.class_names.call(null,b);
}
}));

(reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,rst){
return cljs.core.reduce.call(null,reagent.impl.util.class_names,reagent.impl.util.class_names.call(null,a,b),rst);
}));

/** @this {Function} */
(reagent.impl.util.class_names.cljs$lang$applyTo = (function (seq3537){
var G__3538 = cljs.core.first.call(null,seq3537);
var seq3537__$1 = cljs.core.next.call(null,seq3537);
var G__3539 = cljs.core.first.call(null,seq3537__$1);
var seq3537__$2 = cljs.core.next.call(null,seq3537__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3538,G__3539,seq3537__$2);
}));

(reagent.impl.util.class_names.cljs$lang$maxFixedArity = (2));

reagent.impl.util.merge_class = (function reagent$impl$util$merge_class(p1,p2){
if(((cljs.core.contains_QMARK_.call(null,p1,new cljs.core.Keyword(null,"class","class",-2030961996))) || (cljs.core.contains_QMARK_.call(null,p2,new cljs.core.Keyword(null,"class","class",-2030961996))))){
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"class","class",-2030961996),reagent.impl.util.class_names.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p2)));
} else {
return p2;
}
});
reagent.impl.util.merge_style = (function reagent$impl$util$merge_style(p1,p2){
var style = (function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__5804__auto__)){
var s1 = temp__5804__auto__;
var temp__5804__auto____$1 = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__5804__auto____$1)){
var s2 = temp__5804__auto____$1;
return cljs.core.merge.call(null,s1,s2);
} else {
return null;
}
} else {
return null;
}
})();
if((style == null)){
return p2;
} else {
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"style","style",-496642736),style);
}
});
reagent.impl.util.merge_props = (function reagent$impl$util$merge_props(var_args){
var G__3549 = arguments.length;
switch (G__3549) {
case 0:
return reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___3551 = arguments.length;
var i__5770__auto___3552 = (0);
while(true){
if((i__5770__auto___3552 < len__5769__auto___3551)){
args_arr__5794__auto__.push((arguments[i__5770__auto___3552]));

var G__3553 = (i__5770__auto___3552 + (1));
i__5770__auto___3552 = G__3553;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$1 = (function (p){
var temp__5802__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p);
if(cljs.core.truth_(temp__5802__auto__)){
var c = temp__5802__auto__;
return cljs.core.assoc.call(null,p,new cljs.core.Keyword(null,"class","class",-2030961996),reagent.impl.util.class_names.call(null,c));
} else {
return p;
}
}));

(reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$2 = (function (p1,p2){
if((p1 == null)){
var temp__5802__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__5802__auto__)){
var c = temp__5802__auto__;
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"class","class",-2030961996),reagent.impl.util.class_names.call(null,c));
} else {
return p2;
}
} else {
if(cljs.core.map_QMARK_.call(null,p1)){
} else {
throw (new Error(["Assert failed: ",["Property must be a map, not ",cljs.core.pr_str.call(null,p1)].join(''),"\n","(map? p1)"].join('')));
}

return cljs.core.merge.call(null,p1,reagent.impl.util.merge_style.call(null,p1,reagent.impl.util.merge_class.call(null,p1,p2)));
}
}));

(reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$variadic = (function (p1,p2,ps){
return cljs.core.reduce.call(null,reagent.impl.util.merge_props,reagent.impl.util.merge_props.call(null,p1,p2),ps);
}));

/** @this {Function} */
(reagent.impl.util.merge_props.cljs$lang$applyTo = (function (seq3546){
var G__3547 = cljs.core.first.call(null,seq3546);
var seq3546__$1 = cljs.core.next.call(null,seq3546);
var G__3548 = cljs.core.first.call(null,seq3546__$1);
var seq3546__$2 = cljs.core.next.call(null,seq3546__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3547,G__3548,seq3546__$2);
}));

(reagent.impl.util.merge_props.cljs$lang$maxFixedArity = (2));

reagent.impl.util._STAR_always_update_STAR_ = false;
reagent.impl.util.force_update = (function reagent$impl$util$force_update(comp,deep){
if(cljs.core.truth_(deep)){
var _STAR_always_update_STAR__orig_val__3554 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__3555 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__3555);

try{return comp.forceUpdate();
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__3554);
}} else {
return comp.forceUpdate();
}
});
reagent.impl.util.shallow_obj_to_map = (function reagent$impl$util$shallow_obj_to_map(o){
var ks = cljs.core.js_keys.call(null,o);
var len = ks.length;
var m = cljs.core.PersistentArrayMap.EMPTY;
var i = (0);
while(true){
if((i < len)){
var k = (ks[i]);
var G__3556 = cljs.core.assoc.call(null,m,cljs.core.keyword.call(null,k),reagent.impl.util.goog$module$goog$object.get.call(null,o,k));
var G__3557 = (i + (1));
m = G__3556;
i = G__3557;
continue;
} else {
return m;
}
break;
}
});
reagent.impl.util.js_val_QMARK_ = (function reagent$impl$util$js_val_QMARK_(x){
return (!(("object" === goog.typeOf(x))));
});
reagent.impl.util.try_get_react_key = (function reagent$impl$util$try_get_react_key(x){
try{return cljs.core.get.call(null,x,new cljs.core.Keyword(null,"key","key",-1516042587));
}catch (e3558){var e = e3558;
return null;
}});
reagent.impl.util.get_react_key = (function reagent$impl$util$get_react_key(x){
if(cljs.core.map_QMARK_.call(null,x)){
return reagent.impl.util.try_get_react_key.call(null,x);
} else {
return null;
}
});
reagent.impl.util.react_key_from_vec = (function reagent$impl$util$react_key_from_vec(v){
var or__5045__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = reagent.impl.util.get_react_key.call(null,cljs.core.nth.call(null,v,(1),null));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var G__3559 = cljs.core.nth.call(null,v,(0),null);
var G__3559__$1 = (((G__3559 instanceof cljs.core.Keyword))?G__3559.fqn:null);
switch (G__3559__$1) {
case ">":
case "f>":
return reagent.impl.util.get_react_key.call(null,cljs.core.nth.call(null,v,(2),null));

break;
case "r>":
var G__3560 = cljs.core.nth.call(null,v,(2),null);
if((G__3560 == null)){
return null;
} else {
return G__3560.key;
}

break;
default:
return null;

}
}
}
});
reagent.impl.util.str_coll = (function reagent$impl$util$str_coll(coll){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.walk.prewalk.call(null,(function (x){
if(cljs.core.fn_QMARK_.call(null,x)){
var n = reagent.impl.util.fun_name.call(null,x);
var G__3563 = n;
if(cljs.core._EQ_.call(null,"",G__3563)){
return x;
} else {
if(cljs.core._EQ_.call(null,null,G__3563)){
return x;
} else {
return cljs.core.symbol.call(null,n);

}
}
} else {
return x;
}
}),coll));

});
reagent.impl.util.hiccup_err = (function reagent$impl$util$hiccup_err(var_args){
var args__5775__auto__ = [];
var len__5769__auto___3567 = arguments.length;
var i__5770__auto___3568 = (0);
while(true){
if((i__5770__auto___3568 < len__5769__auto___3567)){
args__5775__auto__.push((arguments[i__5770__auto___3568]));

var G__3569 = (i__5770__auto___3568 + (1));
i__5770__auto___3568 = G__3569;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return reagent.impl.util.hiccup_err.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(reagent.impl.util.hiccup_err.cljs$core$IFn$_invoke$arity$variadic = (function (v,comp_name,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,msg)),": ",reagent.impl.util.str_coll.call(null,v),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(comp_name)].join('');
}));

(reagent.impl.util.hiccup_err.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent.impl.util.hiccup_err.cljs$lang$applyTo = (function (seq3564){
var G__3565 = cljs.core.first.call(null,seq3564);
var seq3564__$1 = cljs.core.next.call(null,seq3564);
var G__3566 = cljs.core.first.call(null,seq3564__$1);
var seq3564__$2 = cljs.core.next.call(null,seq3564__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3565,G__3566,seq3564__$2);
}));


//# sourceMappingURL=util.js.map
