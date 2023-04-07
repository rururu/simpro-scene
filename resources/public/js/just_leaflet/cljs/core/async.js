// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__40744 = arguments.length;
switch (G__40744) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40745 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40745 = (function (f,blockable,meta40746){
this.f = f;
this.blockable = blockable;
this.meta40746 = meta40746;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40747,meta40746__$1){
var self__ = this;
var _40747__$1 = this;
return (new cljs.core.async.t_cljs$core$async40745(self__.f,self__.blockable,meta40746__$1));
}));

(cljs.core.async.t_cljs$core$async40745.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40747){
var self__ = this;
var _40747__$1 = this;
return self__.meta40746;
}));

(cljs.core.async.t_cljs$core$async40745.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40745.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async40745.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async40745.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async40745.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta40746","meta40746",-1266067965,null)], null);
}));

(cljs.core.async.t_cljs$core$async40745.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40745.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40745");

(cljs.core.async.t_cljs$core$async40745.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async40745");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40745.
 */
cljs.core.async.__GT_t_cljs$core$async40745 = (function cljs$core$async$__GT_t_cljs$core$async40745(f__$1,blockable__$1,meta40746){
return (new cljs.core.async.t_cljs$core$async40745(f__$1,blockable__$1,meta40746));
});

}

return (new cljs.core.async.t_cljs$core$async40745(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__40751 = arguments.length;
switch (G__40751) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__40754 = arguments.length;
switch (G__40754) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__40757 = arguments.length;
switch (G__40757) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_40759 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_40759);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_40759);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__40761 = arguments.length;
switch (G__40761) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___40763 = n;
var x_40764 = (0);
while(true){
if((x_40764 < n__5636__auto___40763)){
(a[x_40764] = (0));

var G__40765 = (x_40764 + (1));
x_40764 = G__40765;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__40766 = (i + (1));
i = G__40766;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40767 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40767 = (function (flag,meta40768){
this.flag = flag;
this.meta40768 = meta40768;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40769,meta40768__$1){
var self__ = this;
var _40769__$1 = this;
return (new cljs.core.async.t_cljs$core$async40767(self__.flag,meta40768__$1));
}));

(cljs.core.async.t_cljs$core$async40767.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40769){
var self__ = this;
var _40769__$1 = this;
return self__.meta40768;
}));

(cljs.core.async.t_cljs$core$async40767.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40767.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async40767.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async40767.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async40767.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta40768","meta40768",-108923163,null)], null);
}));

(cljs.core.async.t_cljs$core$async40767.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40767.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40767");

(cljs.core.async.t_cljs$core$async40767.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async40767");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40767.
 */
cljs.core.async.__GT_t_cljs$core$async40767 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async40767(flag__$1,meta40768){
return (new cljs.core.async.t_cljs$core$async40767(flag__$1,meta40768));
});

}

return (new cljs.core.async.t_cljs$core$async40767(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40770 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40770 = (function (flag,cb,meta40771){
this.flag = flag;
this.cb = cb;
this.meta40771 = meta40771;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40772,meta40771__$1){
var self__ = this;
var _40772__$1 = this;
return (new cljs.core.async.t_cljs$core$async40770(self__.flag,self__.cb,meta40771__$1));
}));

(cljs.core.async.t_cljs$core$async40770.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40772){
var self__ = this;
var _40772__$1 = this;
return self__.meta40771;
}));

(cljs.core.async.t_cljs$core$async40770.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40770.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async40770.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async40770.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async40770.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta40771","meta40771",-927384936,null)], null);
}));

(cljs.core.async.t_cljs$core$async40770.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40770.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40770");

(cljs.core.async.t_cljs$core$async40770.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async40770");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40770.
 */
cljs.core.async.__GT_t_cljs$core$async40770 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async40770(flag__$1,cb__$1,meta40771){
return (new cljs.core.async.t_cljs$core$async40770(flag__$1,cb__$1,meta40771));
});

}

return (new cljs.core.async.t_cljs$core$async40770(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40773_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40773_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40774_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40774_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__40775 = (i + (1));
i = G__40775;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___40780 = arguments.length;
var i__5770__auto___40781 = (0);
while(true){
if((i__5770__auto___40781 < len__5769__auto___40780)){
args__5775__auto__.push((arguments[i__5770__auto___40781]));

var G__40782 = (i__5770__auto___40781 + (1));
i__5770__auto___40781 = G__40782;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__40778){
var map__40779 = p__40778;
var map__40779__$1 = cljs.core.__destructure_map.call(null,map__40779);
var opts = map__40779__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq40776){
var G__40777 = cljs.core.first.call(null,seq40776);
var seq40776__$1 = cljs.core.next.call(null,seq40776);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40777,seq40776__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__40784 = arguments.length;
switch (G__40784) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__40684__auto___40830 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__40685__auto__ = (function (){var switch__40587__auto__ = (function (state_40808){
var state_val_40809 = (state_40808[(1)]);
if((state_val_40809 === (7))){
var inst_40804 = (state_40808[(2)]);
var state_40808__$1 = state_40808;
var statearr_40810_40831 = state_40808__$1;
(statearr_40810_40831[(2)] = inst_40804);

(statearr_40810_40831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40809 === (1))){
var state_40808__$1 = state_40808;
var statearr_40811_40832 = state_40808__$1;
(statearr_40811_40832[(2)] = null);

(statearr_40811_40832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40809 === (4))){
var inst_40787 = (state_40808[(7)]);
var inst_40787__$1 = (state_40808[(2)]);
var inst_40788 = (inst_40787__$1 == null);
var state_40808__$1 = (function (){var statearr_40812 = state_40808;
(statearr_40812[(7)] = inst_40787__$1);

return statearr_40812;
})();
if(cljs.core.truth_(inst_40788)){
var statearr_40813_40833 = state_40808__$1;
(statearr_40813_40833[(1)] = (5));

} else {
var statearr_40814_40834 = state_40808__$1;
(statearr_40814_40834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40809 === (13))){
var state_40808__$1 = state_40808;
var statearr_40815_40835 = state_40808__$1;
(statearr_40815_40835[(2)] = null);

(statearr_40815_40835[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40809 === (6))){
var inst_40787 = (state_40808[(7)]);
var state_40808__$1 = state_40808;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40808__$1,(11),to,inst_40787);
} else {
if((state_val_40809 === (3))){
var inst_40806 = (state_40808[(2)]);
var state_40808__$1 = state_40808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40808__$1,inst_40806);
} else {
if((state_val_40809 === (12))){
var state_40808__$1 = state_40808;
var statearr_40816_40836 = state_40808__$1;
(statearr_40816_40836[(2)] = null);

(statearr_40816_40836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40809 === (2))){
var state_40808__$1 = state_40808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40808__$1,(4),from);
} else {
if((state_val_40809 === (11))){
var inst_40797 = (state_40808[(2)]);
var state_40808__$1 = state_40808;
if(cljs.core.truth_(inst_40797)){
var statearr_40817_40837 = state_40808__$1;
(statearr_40817_40837[(1)] = (12));

} else {
var statearr_40818_40838 = state_40808__$1;
(statearr_40818_40838[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40809 === (9))){
var state_40808__$1 = state_40808;
var statearr_40819_40839 = state_40808__$1;
(statearr_40819_40839[(2)] = null);

(statearr_40819_40839[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40809 === (5))){
var state_40808__$1 = state_40808;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40820_40840 = state_40808__$1;
(statearr_40820_40840[(1)] = (8));

} else {
var statearr_40821_40841 = state_40808__$1;
(statearr_40821_40841[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40809 === (14))){
var inst_40802 = (state_40808[(2)]);
var state_40808__$1 = state_40808;
var statearr_40822_40842 = state_40808__$1;
(statearr_40822_40842[(2)] = inst_40802);

(statearr_40822_40842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40809 === (10))){
var inst_40794 = (state_40808[(2)]);
var state_40808__$1 = state_40808;
var statearr_40823_40843 = state_40808__$1;
(statearr_40823_40843[(2)] = inst_40794);

(statearr_40823_40843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40809 === (8))){
var inst_40791 = cljs.core.async.close_BANG_.call(null,to);
var state_40808__$1 = state_40808;
var statearr_40824_40844 = state_40808__$1;
(statearr_40824_40844[(2)] = inst_40791);

(statearr_40824_40844[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__40588__auto__ = null;
var cljs$core$async$state_machine__40588__auto____0 = (function (){
var statearr_40825 = [null,null,null,null,null,null,null,null];
(statearr_40825[(0)] = cljs$core$async$state_machine__40588__auto__);

(statearr_40825[(1)] = (1));

return statearr_40825;
});
var cljs$core$async$state_machine__40588__auto____1 = (function (state_40808){
while(true){
var ret_value__40589__auto__ = (function (){try{while(true){
var result__40590__auto__ = switch__40587__auto__.call(null,state_40808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40590__auto__;
}
break;
}
}catch (e40826){if((e40826 instanceof Object)){
var ex__40591__auto__ = e40826;
var statearr_40827_40845 = state_40808;
(statearr_40827_40845[(5)] = ex__40591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40846 = state_40808;
state_40808 = G__40846;
continue;
} else {
return ret_value__40589__auto__;
}
break;
}
});
cljs$core$async$state_machine__40588__auto__ = function(state_40808){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40588__auto____1.call(this,state_40808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40588__auto____0;
cljs$core$async$state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40588__auto____1;
return cljs$core$async$state_machine__40588__auto__;
})()
})();
var state__40686__auto__ = (function (){var statearr_40828 = f__40685__auto__.call(null);
(statearr_40828[(6)] = c__40684__auto___40830);

return statearr_40828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40686__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process__$1 = (function (p__40847){
var vec__40848 = p__40847;
var v = cljs.core.nth.call(null,vec__40848,(0),null);
var p = cljs.core.nth.call(null,vec__40848,(1),null);
var job = vec__40848;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__40684__auto___41019 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__40685__auto__ = (function (){var switch__40587__auto__ = (function (state_40855){
var state_val_40856 = (state_40855[(1)]);
if((state_val_40856 === (1))){
var state_40855__$1 = state_40855;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40855__$1,(2),res,v);
} else {
if((state_val_40856 === (2))){
var inst_40852 = (state_40855[(2)]);
var inst_40853 = cljs.core.async.close_BANG_.call(null,res);
var state_40855__$1 = (function (){var statearr_40857 = state_40855;
(statearr_40857[(7)] = inst_40852);

return statearr_40857;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40855__$1,inst_40853);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40588__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40588__auto____0 = (function (){
var statearr_40858 = [null,null,null,null,null,null,null,null];
(statearr_40858[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40588__auto__);

(statearr_40858[(1)] = (1));

return statearr_40858;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40588__auto____1 = (function (state_40855){
while(true){
var ret_value__40589__auto__ = (function (){try{while(true){
var result__40590__auto__ = switch__40587__auto__.call(null,state_40855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40590__auto__;
}
break;
}
}catch (e40859){if((e40859 instanceof Object)){
var ex__40591__auto__ = e40859;
var statearr_40860_41020 = state_40855;
(statearr_40860_41020[(5)] = ex__40591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41021 = state_40855;
state_40855 = G__41021;
continue;
} else {
return ret_value__40589__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40588__auto__ = function(state_40855){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40588__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40588__auto____1.call(this,state_40855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40588__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40588__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40588__auto__;
})()
})();
var state__40686__auto__ = (function (){var statearr_40861 = f__40685__auto__.call(null);
(statearr_40861[(6)] = c__40684__auto___41019);

return statearr_40861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40686__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__40862){
var vec__40863 = p__40862;
var v = cljs.core.nth.call(null,vec__40863,(0),null);
var p = cljs.core.nth.call(null,vec__40863,(1),null);
var job = vec__40863;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__5636__auto___41022 = n;
var __41023 = (0);
while(true){
if((__41023 < n__5636__auto___41022)){
var G__40866_41024 = type;
var G__40866_41025__$1 = (((G__40866_41024 instanceof cljs.core.Keyword))?G__40866_41024.fqn:null);
switch (G__40866_41025__$1) {
case "compute":
var c__40684__auto___41027 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__41023,c__40684__auto___41027,G__40866_41024,G__40866_41025__$1,n__5636__auto___41022,jobs,results,process__$1,async){
return (function (){
var f__40685__auto__ = (function (){var switch__40587__auto__ = ((function (__41023,c__40684__auto___41027,G__40866_41024,G__40866_41025__$1,n__5636__auto___41022,jobs,results,process__$1,async){
return (function (state_40879){
var state_val_40880 = (state_40879[(1)]);
if((state_val_40880 === (1))){
var state_40879__$1 = state_40879;
var statearr_40881_41028 = state_40879__$1;
(statearr_40881_41028[(2)] = null);

(statearr_40881_41028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40880 === (2))){
var state_40879__$1 = state_40879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40879__$1,(4),jobs);
} else {
if((state_val_40880 === (3))){
var inst_40877 = (state_40879[(2)]);
var state_40879__$1 = state_40879;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40879__$1,inst_40877);
} else {
if((state_val_40880 === (4))){
var inst_40869 = (state_40879[(2)]);
var inst_40870 = process__$1.call(null,inst_40869);
var state_40879__$1 = state_40879;
if(cljs.core.truth_(inst_40870)){
var statearr_40882_41029 = state_40879__$1;
(statearr_40882_41029[(1)] = (5));

} else {
var statearr_40883_41030 = state_40879__$1;
(statearr_40883_41030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40880 === (5))){
var state_40879__$1 = state_40879;
var statearr_40884_41031 = state_40879__$1;
(statearr_40884_41031[(2)] = null);

(statearr_40884_41031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40880 === (6))){
var state_40879__$1 = state_40879;
var statearr_40885_41032 = state_40879__$1;
(statearr_40885_41032[(2)] = null);

(statearr_40885_41032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40880 === (7))){
var inst_40875 = (state_40879[(2)]);
var state_40879__$1 = state_40879;
var statearr_40886_41033 = state_40879__$1;
(statearr_40886_41033[(2)] = inst_40875);

(statearr_40886_41033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__41023,c__40684__auto___41027,G__40866_41024,G__40866_41025__$1,n__5636__auto___41022,jobs,results,process__$1,async))
;
return ((function (__41023,switch__40587__auto__,c__40684__auto___41027,G__40866_41024,G__40866_41025__$1,n__5636__auto___41022,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40588__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40588__auto____0 = (function (){
var statearr_40887 = [null,null,null,null,null,null,null];
(statearr_40887[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40588__auto__);

(statearr_40887[(1)] = (1));

return statearr_40887;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40588__auto____1 = (function (state_40879){
while(true){
var ret_value__40589__auto__ = (function (){try{while(true){
var result__40590__auto__ = switch__40587__auto__.call(null,state_40879);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40590__auto__;
}
break;
}
}catch (e40888){if((e40888 instanceof Object)){
var ex__40591__auto__ = e40888;
var statearr_40889_41034 = state_40879;
(statearr_40889_41034[(5)] = ex__40591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40879);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41035 = state_40879;
state_40879 = G__41035;
continue;
} else {
return ret_value__40589__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40588__auto__ = function(state_40879){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40588__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40588__auto____1.call(this,state_40879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40588__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40588__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40588__auto__;
})()
;})(__41023,switch__40587__auto__,c__40684__auto___41027,G__40866_41024,G__40866_41025__$1,n__5636__auto___41022,jobs,results,process__$1,async))
})();
var state__40686__auto__ = (function (){var statearr_40890 = f__40685__auto__.call(null);
(statearr_40890[(6)] = c__40684__auto___41027);

return statearr_40890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40686__auto__);
});})(__41023,c__40684__auto___41027,G__40866_41024,G__40866_41025__$1,n__5636__auto___41022,jobs,results,process__$1,async))
);


break;
case "async":
var c__40684__auto___41036 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__41023,c__40684__auto___41036,G__40866_41024,G__40866_41025__$1,n__5636__auto___41022,jobs,results,process__$1,async){
return (function (){
var f__40685__auto__ = (function (){var switch__40587__auto__ = ((function (__41023,c__40684__auto___41036,G__40866_41024,G__40866_41025__$1,n__5636__auto___41022,jobs,results,process__$1,async){
return (function (state_40903){
var state_val_40904 = (state_40903[(1)]);
if((state_val_40904 === (1))){
var state_40903__$1 = state_40903;
var statearr_40905_41037 = state_40903__$1;
(statearr_40905_41037[(2)] = null);

(statearr_40905_41037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40904 === (2))){
var state_40903__$1 = state_40903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40903__$1,(4),jobs);
} else {
if((state_val_40904 === (3))){
var inst_40901 = (state_40903[(2)]);
var state_40903__$1 = state_40903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40903__$1,inst_40901);
} else {
if((state_val_40904 === (4))){
var inst_40893 = (state_40903[(2)]);
var inst_40894 = async.call(null,inst_40893);
var state_40903__$1 = state_40903;
if(cljs.core.truth_(inst_40894)){
var statearr_40906_41038 = state_40903__$1;
(statearr_40906_41038[(1)] = (5));

} else {
var statearr_40907_41039 = state_40903__$1;
(statearr_40907_41039[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40904 === (5))){
var state_40903__$1 = state_40903;
var statearr_40908_41040 = state_40903__$1;
(statearr_40908_41040[(2)] = null);

(statearr_40908_41040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40904 === (6))){
var state_40903__$1 = state_40903;
var statearr_40909_41041 = state_40903__$1;
(statearr_40909_41041[(2)] = null);

(statearr_40909_41041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40904 === (7))){
var inst_40899 = (state_40903[(2)]);
var state_40903__$1 = state_40903;
var statearr_40910_41042 = state_40903__$1;
(statearr_40910_41042[(2)] = inst_40899);

(statearr_40910_41042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__41023,c__40684__auto___41036,G__40866_41024,G__40866_41025__$1,n__5636__auto___41022,jobs,results,process__$1,async))
;
return ((function (__41023,switch__40587__auto__,c__40684__auto___41036,G__40866_41024,G__40866_41025__$1,n__5636__auto___41022,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40588__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40588__auto____0 = (function (){
var statearr_40911 = [null,null,null,null,null,null,null];
(statearr_40911[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40588__auto__);

(statearr_40911[(1)] = (1));

return statearr_40911;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40588__auto____1 = (function (state_40903){
while(true){
var ret_value__40589__auto__ = (function (){try{while(true){
var result__40590__auto__ = switch__40587__auto__.call(null,state_40903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40590__auto__;
}
break;
}
}catch (e40912){if((e40912 instanceof Object)){
var ex__40591__auto__ = e40912;
var statearr_40913_41043 = state_40903;
(statearr_40913_41043[(5)] = ex__40591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40912;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41044 = state_40903;
state_40903 = G__41044;
continue;
} else {
return ret_value__40589__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40588__auto__ = function(state_40903){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40588__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40588__auto____1.call(this,state_40903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40588__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40588__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40588__auto__;
})()
;})(__41023,switch__40587__auto__,c__40684__auto___41036,G__40866_41024,G__40866_41025__$1,n__5636__auto___41022,jobs,results,process__$1,async))
})();
var state__40686__auto__ = (function (){var statearr_40914 = f__40685__auto__.call(null);
(statearr_40914[(6)] = c__40684__auto___41036);

return statearr_40914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40686__auto__);
});})(__41023,c__40684__auto___41036,G__40866_41024,G__40866_41025__$1,n__5636__auto___41022,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40866_41025__$1)].join('')));

}

var G__41045 = (__41023 + (1));
__41023 = G__41045;
continue;
} else {
}
break;
}

var c__40684__auto___41046 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__40685__auto__ = (function (){var switch__40587__auto__ = (function (state_40936){
var state_val_40937 = (state_40936[(1)]);
if((state_val_40937 === (7))){
var inst_40932 = (state_40936[(2)]);
var state_40936__$1 = state_40936;
var statearr_40938_41047 = state_40936__$1;
(statearr_40938_41047[(2)] = inst_40932);

(statearr_40938_41047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40937 === (1))){
var state_40936__$1 = state_40936;
var statearr_40939_41048 = state_40936__$1;
(statearr_40939_41048[(2)] = null);

(statearr_40939_41048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40937 === (4))){
var inst_40917 = (state_40936[(7)]);
var inst_40917__$1 = (state_40936[(2)]);
var inst_40918 = (inst_40917__$1 == null);
var state_40936__$1 = (function (){var statearr_40940 = state_40936;
(statearr_40940[(7)] = inst_40917__$1);

return statearr_40940;
})();
if(cljs.core.truth_(inst_40918)){
var statearr_40941_41049 = state_40936__$1;
(statearr_40941_41049[(1)] = (5));

} else {
var statearr_40942_41050 = state_40936__$1;
(statearr_40942_41050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40937 === (6))){
var inst_40922 = (state_40936[(8)]);
var inst_40917 = (state_40936[(7)]);
var inst_40922__$1 = cljs.core.async.chan.call(null,(1));
var inst_40923 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40924 = [inst_40917,inst_40922__$1];
var inst_40925 = (new cljs.core.PersistentVector(null,2,(5),inst_40923,inst_40924,null));
var state_40936__$1 = (function (){var statearr_40943 = state_40936;
(statearr_40943[(8)] = inst_40922__$1);

return statearr_40943;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40936__$1,(8),jobs,inst_40925);
} else {
if((state_val_40937 === (3))){
var inst_40934 = (state_40936[(2)]);
var state_40936__$1 = state_40936;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40936__$1,inst_40934);
} else {
if((state_val_40937 === (2))){
var state_40936__$1 = state_40936;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40936__$1,(4),from);
} else {
if((state_val_40937 === (9))){
var inst_40929 = (state_40936[(2)]);
var state_40936__$1 = (function (){var statearr_40944 = state_40936;
(statearr_40944[(9)] = inst_40929);

return statearr_40944;
})();
var statearr_40945_41051 = state_40936__$1;
(statearr_40945_41051[(2)] = null);

(statearr_40945_41051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40937 === (5))){
var inst_40920 = cljs.core.async.close_BANG_.call(null,jobs);
var state_40936__$1 = state_40936;
var statearr_40946_41052 = state_40936__$1;
(statearr_40946_41052[(2)] = inst_40920);

(statearr_40946_41052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40937 === (8))){
var inst_40922 = (state_40936[(8)]);
var inst_40927 = (state_40936[(2)]);
var state_40936__$1 = (function (){var statearr_40947 = state_40936;
(statearr_40947[(10)] = inst_40927);

return statearr_40947;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40936__$1,(9),results,inst_40922);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40588__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40588__auto____0 = (function (){
var statearr_40948 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40948[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40588__auto__);

(statearr_40948[(1)] = (1));

return statearr_40948;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40588__auto____1 = (function (state_40936){
while(true){
var ret_value__40589__auto__ = (function (){try{while(true){
var result__40590__auto__ = switch__40587__auto__.call(null,state_40936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40590__auto__;
}
break;
}
}catch (e40949){if((e40949 instanceof Object)){
var ex__40591__auto__ = e40949;
var statearr_40950_41053 = state_40936;
(statearr_40950_41053[(5)] = ex__40591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41054 = state_40936;
state_40936 = G__41054;
continue;
} else {
return ret_value__40589__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40588__auto__ = function(state_40936){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40588__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40588__auto____1.call(this,state_40936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40588__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40588__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40588__auto__;
})()
})();
var state__40686__auto__ = (function (){var statearr_40951 = f__40685__auto__.call(null);
(statearr_40951[(6)] = c__40684__auto___41046);

return statearr_40951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40686__auto__);
}));


var c__40684__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__40685__auto__ = (function (){var switch__40587__auto__ = (function (state_40989){
var state_val_40990 = (state_40989[(1)]);
if((state_val_40990 === (7))){
var inst_40985 = (state_40989[(2)]);
var state_40989__$1 = state_40989;
var statearr_40991_41055 = state_40989__$1;
(statearr_40991_41055[(2)] = inst_40985);

(statearr_40991_41055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (20))){
var state_40989__$1 = state_40989;
var statearr_40992_41056 = state_40989__$1;
(statearr_40992_41056[(2)] = null);

(statearr_40992_41056[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (1))){
var state_40989__$1 = state_40989;
var statearr_40993_41057 = state_40989__$1;
(statearr_40993_41057[(2)] = null);

(statearr_40993_41057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (4))){
var inst_40954 = (state_40989[(7)]);
var inst_40954__$1 = (state_40989[(2)]);
var inst_40955 = (inst_40954__$1 == null);
var state_40989__$1 = (function (){var statearr_40994 = state_40989;
(statearr_40994[(7)] = inst_40954__$1);

return statearr_40994;
})();
if(cljs.core.truth_(inst_40955)){
var statearr_40995_41058 = state_40989__$1;
(statearr_40995_41058[(1)] = (5));

} else {
var statearr_40996_41059 = state_40989__$1;
(statearr_40996_41059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (15))){
var inst_40967 = (state_40989[(8)]);
var state_40989__$1 = state_40989;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40989__$1,(18),to,inst_40967);
} else {
if((state_val_40990 === (21))){
var inst_40980 = (state_40989[(2)]);
var state_40989__$1 = state_40989;
var statearr_40997_41060 = state_40989__$1;
(statearr_40997_41060[(2)] = inst_40980);

(statearr_40997_41060[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (13))){
var inst_40982 = (state_40989[(2)]);
var state_40989__$1 = (function (){var statearr_40998 = state_40989;
(statearr_40998[(9)] = inst_40982);

return statearr_40998;
})();
var statearr_40999_41061 = state_40989__$1;
(statearr_40999_41061[(2)] = null);

(statearr_40999_41061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (6))){
var inst_40954 = (state_40989[(7)]);
var state_40989__$1 = state_40989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40989__$1,(11),inst_40954);
} else {
if((state_val_40990 === (17))){
var inst_40975 = (state_40989[(2)]);
var state_40989__$1 = state_40989;
if(cljs.core.truth_(inst_40975)){
var statearr_41000_41062 = state_40989__$1;
(statearr_41000_41062[(1)] = (19));

} else {
var statearr_41001_41063 = state_40989__$1;
(statearr_41001_41063[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (3))){
var inst_40987 = (state_40989[(2)]);
var state_40989__$1 = state_40989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40989__$1,inst_40987);
} else {
if((state_val_40990 === (12))){
var inst_40964 = (state_40989[(10)]);
var state_40989__$1 = state_40989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40989__$1,(14),inst_40964);
} else {
if((state_val_40990 === (2))){
var state_40989__$1 = state_40989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40989__$1,(4),results);
} else {
if((state_val_40990 === (19))){
var state_40989__$1 = state_40989;
var statearr_41002_41064 = state_40989__$1;
(statearr_41002_41064[(2)] = null);

(statearr_41002_41064[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (11))){
var inst_40964 = (state_40989[(2)]);
var state_40989__$1 = (function (){var statearr_41003 = state_40989;
(statearr_41003[(10)] = inst_40964);

return statearr_41003;
})();
var statearr_41004_41065 = state_40989__$1;
(statearr_41004_41065[(2)] = null);

(statearr_41004_41065[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (9))){
var state_40989__$1 = state_40989;
var statearr_41005_41066 = state_40989__$1;
(statearr_41005_41066[(2)] = null);

(statearr_41005_41066[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (5))){
var state_40989__$1 = state_40989;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41006_41067 = state_40989__$1;
(statearr_41006_41067[(1)] = (8));

} else {
var statearr_41007_41068 = state_40989__$1;
(statearr_41007_41068[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (14))){
var inst_40969 = (state_40989[(11)]);
var inst_40967 = (state_40989[(8)]);
var inst_40967__$1 = (state_40989[(2)]);
var inst_40968 = (inst_40967__$1 == null);
var inst_40969__$1 = cljs.core.not.call(null,inst_40968);
var state_40989__$1 = (function (){var statearr_41008 = state_40989;
(statearr_41008[(11)] = inst_40969__$1);

(statearr_41008[(8)] = inst_40967__$1);

return statearr_41008;
})();
if(inst_40969__$1){
var statearr_41009_41069 = state_40989__$1;
(statearr_41009_41069[(1)] = (15));

} else {
var statearr_41010_41070 = state_40989__$1;
(statearr_41010_41070[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (16))){
var inst_40969 = (state_40989[(11)]);
var state_40989__$1 = state_40989;
var statearr_41011_41071 = state_40989__$1;
(statearr_41011_41071[(2)] = inst_40969);

(statearr_41011_41071[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (10))){
var inst_40961 = (state_40989[(2)]);
var state_40989__$1 = state_40989;
var statearr_41012_41072 = state_40989__$1;
(statearr_41012_41072[(2)] = inst_40961);

(statearr_41012_41072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (18))){
var inst_40972 = (state_40989[(2)]);
var state_40989__$1 = state_40989;
var statearr_41013_41073 = state_40989__$1;
(statearr_41013_41073[(2)] = inst_40972);

(statearr_41013_41073[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (8))){
var inst_40958 = cljs.core.async.close_BANG_.call(null,to);
var state_40989__$1 = state_40989;
var statearr_41014_41074 = state_40989__$1;
(statearr_41014_41074[(2)] = inst_40958);

(statearr_41014_41074[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40588__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40588__auto____0 = (function (){
var statearr_41015 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41015[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40588__auto__);

(statearr_41015[(1)] = (1));

return statearr_41015;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40588__auto____1 = (function (state_40989){
while(true){
var ret_value__40589__auto__ = (function (){try{while(true){
var result__40590__auto__ = switch__40587__auto__.call(null,state_40989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40590__auto__;
}
break;
}
}catch (e41016){if((e41016 instanceof Object)){
var ex__40591__auto__ = e41016;
var statearr_41017_41075 = state_40989;
(statearr_41017_41075[(5)] = ex__40591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41076 = state_40989;
state_40989 = G__41076;
continue;
} else {
return ret_value__40589__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40588__auto__ = function(state_40989){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40588__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40588__auto____1.call(this,state_40989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40588__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40588__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40588__auto__;
})()
})();
var state__40686__auto__ = (function (){var statearr_41018 = f__40685__auto__.call(null);
(statearr_41018[(6)] = c__40684__auto__);

return statearr_41018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40686__auto__);
}));

return c__40684__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__41078 = arguments.length;
switch (G__41078) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__41081 = arguments.length;
switch (G__41081) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__41084 = arguments.length;
switch (G__41084) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__40684__auto___41133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__40685__auto__ = (function (){var switch__40587__auto__ = (function (state_41110){
var state_val_41111 = (state_41110[(1)]);
if((state_val_41111 === (7))){
var inst_41106 = (state_41110[(2)]);
var state_41110__$1 = state_41110;
var statearr_41112_41134 = state_41110__$1;
(statearr_41112_41134[(2)] = inst_41106);

(statearr_41112_41134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41111 === (1))){
var state_41110__$1 = state_41110;
var statearr_41113_41135 = state_41110__$1;
(statearr_41113_41135[(2)] = null);

(statearr_41113_41135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41111 === (4))){
var inst_41087 = (state_41110[(7)]);
var inst_41087__$1 = (state_41110[(2)]);
var inst_41088 = (inst_41087__$1 == null);
var state_41110__$1 = (function (){var statearr_41114 = state_41110;
(statearr_41114[(7)] = inst_41087__$1);

return statearr_41114;
})();
if(cljs.core.truth_(inst_41088)){
var statearr_41115_41136 = state_41110__$1;
(statearr_41115_41136[(1)] = (5));

} else {
var statearr_41116_41137 = state_41110__$1;
(statearr_41116_41137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41111 === (13))){
var state_41110__$1 = state_41110;
var statearr_41117_41138 = state_41110__$1;
(statearr_41117_41138[(2)] = null);

(statearr_41117_41138[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41111 === (6))){
var inst_41087 = (state_41110[(7)]);
var inst_41093 = p.call(null,inst_41087);
var state_41110__$1 = state_41110;
if(cljs.core.truth_(inst_41093)){
var statearr_41118_41139 = state_41110__$1;
(statearr_41118_41139[(1)] = (9));

} else {
var statearr_41119_41140 = state_41110__$1;
(statearr_41119_41140[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41111 === (3))){
var inst_41108 = (state_41110[(2)]);
var state_41110__$1 = state_41110;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41110__$1,inst_41108);
} else {
if((state_val_41111 === (12))){
var state_41110__$1 = state_41110;
var statearr_41120_41141 = state_41110__$1;
(statearr_41120_41141[(2)] = null);

(statearr_41120_41141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41111 === (2))){
var state_41110__$1 = state_41110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41110__$1,(4),ch);
} else {
if((state_val_41111 === (11))){
var inst_41087 = (state_41110[(7)]);
var inst_41097 = (state_41110[(2)]);
var state_41110__$1 = state_41110;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41110__$1,(8),inst_41097,inst_41087);
} else {
if((state_val_41111 === (9))){
var state_41110__$1 = state_41110;
var statearr_41121_41142 = state_41110__$1;
(statearr_41121_41142[(2)] = tc);

(statearr_41121_41142[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41111 === (5))){
var inst_41090 = cljs.core.async.close_BANG_.call(null,tc);
var inst_41091 = cljs.core.async.close_BANG_.call(null,fc);
var state_41110__$1 = (function (){var statearr_41122 = state_41110;
(statearr_41122[(8)] = inst_41090);

return statearr_41122;
})();
var statearr_41123_41143 = state_41110__$1;
(statearr_41123_41143[(2)] = inst_41091);

(statearr_41123_41143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41111 === (14))){
var inst_41104 = (state_41110[(2)]);
var state_41110__$1 = state_41110;
var statearr_41124_41144 = state_41110__$1;
(statearr_41124_41144[(2)] = inst_41104);

(statearr_41124_41144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41111 === (10))){
var state_41110__$1 = state_41110;
var statearr_41125_41145 = state_41110__$1;
(statearr_41125_41145[(2)] = fc);

(statearr_41125_41145[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41111 === (8))){
var inst_41099 = (state_41110[(2)]);
var state_41110__$1 = state_41110;
if(cljs.core.truth_(inst_41099)){
var statearr_41126_41146 = state_41110__$1;
(statearr_41126_41146[(1)] = (12));

} else {
var statearr_41127_41147 = state_41110__$1;
(statearr_41127_41147[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__40588__auto__ = null;
var cljs$core$async$state_machine__40588__auto____0 = (function (){
var statearr_41128 = [null,null,null,null,null,null,null,null,null];
(statearr_41128[(0)] = cljs$core$async$state_machine__40588__auto__);

(statearr_41128[(1)] = (1));

return statearr_41128;
});
var cljs$core$async$state_machine__40588__auto____1 = (function (state_41110){
while(true){
var ret_value__40589__auto__ = (function (){try{while(true){
var result__40590__auto__ = switch__40587__auto__.call(null,state_41110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40590__auto__;
}
break;
}
}catch (e41129){if((e41129 instanceof Object)){
var ex__40591__auto__ = e41129;
var statearr_41130_41148 = state_41110;
(statearr_41130_41148[(5)] = ex__40591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41149 = state_41110;
state_41110 = G__41149;
continue;
} else {
return ret_value__40589__auto__;
}
break;
}
});
cljs$core$async$state_machine__40588__auto__ = function(state_41110){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40588__auto____1.call(this,state_41110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40588__auto____0;
cljs$core$async$state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40588__auto____1;
return cljs$core$async$state_machine__40588__auto__;
})()
})();
var state__40686__auto__ = (function (){var statearr_41131 = f__40685__auto__.call(null);
(statearr_41131[(6)] = c__40684__auto___41133);

return statearr_41131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40686__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__40684__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__40685__auto__ = (function (){var switch__40587__auto__ = (function (state_41170){
var state_val_41171 = (state_41170[(1)]);
if((state_val_41171 === (7))){
var inst_41166 = (state_41170[(2)]);
var state_41170__$1 = state_41170;
var statearr_41172_41190 = state_41170__$1;
(statearr_41172_41190[(2)] = inst_41166);

(statearr_41172_41190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41171 === (1))){
var inst_41150 = init;
var state_41170__$1 = (function (){var statearr_41173 = state_41170;
(statearr_41173[(7)] = inst_41150);

return statearr_41173;
})();
var statearr_41174_41191 = state_41170__$1;
(statearr_41174_41191[(2)] = null);

(statearr_41174_41191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41171 === (4))){
var inst_41153 = (state_41170[(8)]);
var inst_41153__$1 = (state_41170[(2)]);
var inst_41154 = (inst_41153__$1 == null);
var state_41170__$1 = (function (){var statearr_41175 = state_41170;
(statearr_41175[(8)] = inst_41153__$1);

return statearr_41175;
})();
if(cljs.core.truth_(inst_41154)){
var statearr_41176_41192 = state_41170__$1;
(statearr_41176_41192[(1)] = (5));

} else {
var statearr_41177_41193 = state_41170__$1;
(statearr_41177_41193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41171 === (6))){
var inst_41150 = (state_41170[(7)]);
var inst_41153 = (state_41170[(8)]);
var inst_41157 = (state_41170[(9)]);
var inst_41157__$1 = f.call(null,inst_41150,inst_41153);
var inst_41158 = cljs.core.reduced_QMARK_.call(null,inst_41157__$1);
var state_41170__$1 = (function (){var statearr_41178 = state_41170;
(statearr_41178[(9)] = inst_41157__$1);

return statearr_41178;
})();
if(inst_41158){
var statearr_41179_41194 = state_41170__$1;
(statearr_41179_41194[(1)] = (8));

} else {
var statearr_41180_41195 = state_41170__$1;
(statearr_41180_41195[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41171 === (3))){
var inst_41168 = (state_41170[(2)]);
var state_41170__$1 = state_41170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41170__$1,inst_41168);
} else {
if((state_val_41171 === (2))){
var state_41170__$1 = state_41170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41170__$1,(4),ch);
} else {
if((state_val_41171 === (9))){
var inst_41157 = (state_41170[(9)]);
var inst_41150 = inst_41157;
var state_41170__$1 = (function (){var statearr_41181 = state_41170;
(statearr_41181[(7)] = inst_41150);

return statearr_41181;
})();
var statearr_41182_41196 = state_41170__$1;
(statearr_41182_41196[(2)] = null);

(statearr_41182_41196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41171 === (5))){
var inst_41150 = (state_41170[(7)]);
var state_41170__$1 = state_41170;
var statearr_41183_41197 = state_41170__$1;
(statearr_41183_41197[(2)] = inst_41150);

(statearr_41183_41197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41171 === (10))){
var inst_41164 = (state_41170[(2)]);
var state_41170__$1 = state_41170;
var statearr_41184_41198 = state_41170__$1;
(statearr_41184_41198[(2)] = inst_41164);

(statearr_41184_41198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41171 === (8))){
var inst_41157 = (state_41170[(9)]);
var inst_41160 = cljs.core.deref.call(null,inst_41157);
var state_41170__$1 = state_41170;
var statearr_41185_41199 = state_41170__$1;
(statearr_41185_41199[(2)] = inst_41160);

(statearr_41185_41199[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__40588__auto__ = null;
var cljs$core$async$reduce_$_state_machine__40588__auto____0 = (function (){
var statearr_41186 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41186[(0)] = cljs$core$async$reduce_$_state_machine__40588__auto__);

(statearr_41186[(1)] = (1));

return statearr_41186;
});
var cljs$core$async$reduce_$_state_machine__40588__auto____1 = (function (state_41170){
while(true){
var ret_value__40589__auto__ = (function (){try{while(true){
var result__40590__auto__ = switch__40587__auto__.call(null,state_41170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40590__auto__;
}
break;
}
}catch (e41187){if((e41187 instanceof Object)){
var ex__40591__auto__ = e41187;
var statearr_41188_41200 = state_41170;
(statearr_41188_41200[(5)] = ex__40591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41187;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41201 = state_41170;
state_41170 = G__41201;
continue;
} else {
return ret_value__40589__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__40588__auto__ = function(state_41170){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__40588__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__40588__auto____1.call(this,state_41170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__40588__auto____0;
cljs$core$async$reduce_$_state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__40588__auto____1;
return cljs$core$async$reduce_$_state_machine__40588__auto__;
})()
})();
var state__40686__auto__ = (function (){var statearr_41189 = f__40685__auto__.call(null);
(statearr_41189[(6)] = c__40684__auto__);

return statearr_41189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40686__auto__);
}));

return c__40684__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__40684__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__40685__auto__ = (function (){var switch__40587__auto__ = (function (state_41207){
var state_val_41208 = (state_41207[(1)]);
if((state_val_41208 === (1))){
var inst_41202 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_41207__$1 = state_41207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41207__$1,(2),inst_41202);
} else {
if((state_val_41208 === (2))){
var inst_41204 = (state_41207[(2)]);
var inst_41205 = f__$1.call(null,inst_41204);
var state_41207__$1 = state_41207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41207__$1,inst_41205);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__40588__auto__ = null;
var cljs$core$async$transduce_$_state_machine__40588__auto____0 = (function (){
var statearr_41209 = [null,null,null,null,null,null,null];
(statearr_41209[(0)] = cljs$core$async$transduce_$_state_machine__40588__auto__);

(statearr_41209[(1)] = (1));

return statearr_41209;
});
var cljs$core$async$transduce_$_state_machine__40588__auto____1 = (function (state_41207){
while(true){
var ret_value__40589__auto__ = (function (){try{while(true){
var result__40590__auto__ = switch__40587__auto__.call(null,state_41207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40590__auto__;
}
break;
}
}catch (e41210){if((e41210 instanceof Object)){
var ex__40591__auto__ = e41210;
var statearr_41211_41213 = state_41207;
(statearr_41211_41213[(5)] = ex__40591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41214 = state_41207;
state_41207 = G__41214;
continue;
} else {
return ret_value__40589__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__40588__auto__ = function(state_41207){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__40588__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__40588__auto____1.call(this,state_41207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__40588__auto____0;
cljs$core$async$transduce_$_state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__40588__auto____1;
return cljs$core$async$transduce_$_state_machine__40588__auto__;
})()
})();
var state__40686__auto__ = (function (){var statearr_41212 = f__40685__auto__.call(null);
(statearr_41212[(6)] = c__40684__auto__);

return statearr_41212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40686__auto__);
}));

return c__40684__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__41216 = arguments.length;
switch (G__41216) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__40684__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__40685__auto__ = (function (){var switch__40587__auto__ = (function (state_41241){
var state_val_41242 = (state_41241[(1)]);
if((state_val_41242 === (7))){
var inst_41223 = (state_41241[(2)]);
var state_41241__$1 = state_41241;
var statearr_41243_41264 = state_41241__$1;
(statearr_41243_41264[(2)] = inst_41223);

(statearr_41243_41264[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41242 === (1))){
var inst_41217 = cljs.core.seq.call(null,coll);
var inst_41218 = inst_41217;
var state_41241__$1 = (function (){var statearr_41244 = state_41241;
(statearr_41244[(7)] = inst_41218);

return statearr_41244;
})();
var statearr_41245_41265 = state_41241__$1;
(statearr_41245_41265[(2)] = null);

(statearr_41245_41265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41242 === (4))){
var inst_41218 = (state_41241[(7)]);
var inst_41221 = cljs.core.first.call(null,inst_41218);
var state_41241__$1 = state_41241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41241__$1,(7),ch,inst_41221);
} else {
if((state_val_41242 === (13))){
var inst_41235 = (state_41241[(2)]);
var state_41241__$1 = state_41241;
var statearr_41246_41266 = state_41241__$1;
(statearr_41246_41266[(2)] = inst_41235);

(statearr_41246_41266[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41242 === (6))){
var inst_41226 = (state_41241[(2)]);
var state_41241__$1 = state_41241;
if(cljs.core.truth_(inst_41226)){
var statearr_41247_41267 = state_41241__$1;
(statearr_41247_41267[(1)] = (8));

} else {
var statearr_41248_41268 = state_41241__$1;
(statearr_41248_41268[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41242 === (3))){
var inst_41239 = (state_41241[(2)]);
var state_41241__$1 = state_41241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41241__$1,inst_41239);
} else {
if((state_val_41242 === (12))){
var state_41241__$1 = state_41241;
var statearr_41249_41269 = state_41241__$1;
(statearr_41249_41269[(2)] = null);

(statearr_41249_41269[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41242 === (2))){
var inst_41218 = (state_41241[(7)]);
var state_41241__$1 = state_41241;
if(cljs.core.truth_(inst_41218)){
var statearr_41250_41270 = state_41241__$1;
(statearr_41250_41270[(1)] = (4));

} else {
var statearr_41251_41271 = state_41241__$1;
(statearr_41251_41271[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41242 === (11))){
var inst_41232 = cljs.core.async.close_BANG_.call(null,ch);
var state_41241__$1 = state_41241;
var statearr_41252_41272 = state_41241__$1;
(statearr_41252_41272[(2)] = inst_41232);

(statearr_41252_41272[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41242 === (9))){
var state_41241__$1 = state_41241;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41253_41273 = state_41241__$1;
(statearr_41253_41273[(1)] = (11));

} else {
var statearr_41254_41274 = state_41241__$1;
(statearr_41254_41274[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41242 === (5))){
var inst_41218 = (state_41241[(7)]);
var state_41241__$1 = state_41241;
var statearr_41255_41275 = state_41241__$1;
(statearr_41255_41275[(2)] = inst_41218);

(statearr_41255_41275[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41242 === (10))){
var inst_41237 = (state_41241[(2)]);
var state_41241__$1 = state_41241;
var statearr_41256_41276 = state_41241__$1;
(statearr_41256_41276[(2)] = inst_41237);

(statearr_41256_41276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41242 === (8))){
var inst_41218 = (state_41241[(7)]);
var inst_41228 = cljs.core.next.call(null,inst_41218);
var inst_41218__$1 = inst_41228;
var state_41241__$1 = (function (){var statearr_41257 = state_41241;
(statearr_41257[(7)] = inst_41218__$1);

return statearr_41257;
})();
var statearr_41258_41277 = state_41241__$1;
(statearr_41258_41277[(2)] = null);

(statearr_41258_41277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__40588__auto__ = null;
var cljs$core$async$state_machine__40588__auto____0 = (function (){
var statearr_41259 = [null,null,null,null,null,null,null,null];
(statearr_41259[(0)] = cljs$core$async$state_machine__40588__auto__);

(statearr_41259[(1)] = (1));

return statearr_41259;
});
var cljs$core$async$state_machine__40588__auto____1 = (function (state_41241){
while(true){
var ret_value__40589__auto__ = (function (){try{while(true){
var result__40590__auto__ = switch__40587__auto__.call(null,state_41241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40590__auto__;
}
break;
}
}catch (e41260){if((e41260 instanceof Object)){
var ex__40591__auto__ = e41260;
var statearr_41261_41278 = state_41241;
(statearr_41261_41278[(5)] = ex__40591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41279 = state_41241;
state_41241 = G__41279;
continue;
} else {
return ret_value__40589__auto__;
}
break;
}
});
cljs$core$async$state_machine__40588__auto__ = function(state_41241){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40588__auto____1.call(this,state_41241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40588__auto____0;
cljs$core$async$state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40588__auto____1;
return cljs$core$async$state_machine__40588__auto__;
})()
})();
var state__40686__auto__ = (function (){var statearr_41262 = f__40685__auto__.call(null);
(statearr_41262[(6)] = c__40684__auto__);

return statearr_41262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40686__auto__);
}));

return c__40684__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_41280 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,_);
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_41280.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_41281 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_41281.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_41282 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m,ch);
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_41282.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_41283 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m);
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_41283.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41284 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41284 = (function (ch,cs,meta41285){
this.ch = ch;
this.cs = cs;
this.meta41285 = meta41285;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41286,meta41285__$1){
var self__ = this;
var _41286__$1 = this;
return (new cljs.core.async.t_cljs$core$async41284(self__.ch,self__.cs,meta41285__$1));
}));

(cljs.core.async.t_cljs$core$async41284.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41286){
var self__ = this;
var _41286__$1 = this;
return self__.meta41285;
}));

(cljs.core.async.t_cljs$core$async41284.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41284.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async41284.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41284.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async41284.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async41284.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async41284.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta41285","meta41285",823063484,null)], null);
}));

(cljs.core.async.t_cljs$core$async41284.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41284.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41284");

(cljs.core.async.t_cljs$core$async41284.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async41284");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41284.
 */
cljs.core.async.__GT_t_cljs$core$async41284 = (function cljs$core$async$mult_$___GT_t_cljs$core$async41284(ch__$1,cs__$1,meta41285){
return (new cljs.core.async.t_cljs$core$async41284(ch__$1,cs__$1,meta41285));
});

}

return (new cljs.core.async.t_cljs$core$async41284(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__40684__auto___41506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__40685__auto__ = (function (){var switch__40587__auto__ = (function (state_41421){
var state_val_41422 = (state_41421[(1)]);
if((state_val_41422 === (7))){
var inst_41417 = (state_41421[(2)]);
var state_41421__$1 = state_41421;
var statearr_41423_41507 = state_41421__$1;
(statearr_41423_41507[(2)] = inst_41417);

(statearr_41423_41507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41422 === (20))){
var inst_41320 = (state_41421[(7)]);
var inst_41332 = cljs.core.first.call(null,inst_41320);
var inst_41333 = cljs.core.nth.call(null,inst_41332,(0),null);
var inst_41334 = cljs.core.nth.call(null,inst_41332,(1),null);
var state_41421__$1 = (function (){var statearr_41424 = state_41421;
(statearr_41424[(8)] = inst_41333);

return statearr_41424;
})();
if(cljs.core.truth_(inst_41334)){
var statearr_41425_41508 = state_41421__$1;
(statearr_41425_41508[(1)] = (22));

} else {
var statearr_41426_41509 = state_41421__$1;
(statearr_41426_41509[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41422 === (27))){
var inst_41369 = (state_41421[(9)]);
var inst_41362 = (state_41421[(10)]);
var inst_41289 = (state_41421[(11)]);
var inst_41364 = (state_41421[(12)]);
var inst_41369__$1 = cljs.core._nth.call(null,inst_41362,inst_41364);
var inst_41370 = cljs.core.async.put_BANG_.call(null,inst_41369__$1,inst_41289,done);
var state_41421__$1 = (function (){var statearr_41427 = state_41421;
(statearr_41427[(9)] = inst_41369__$1);

return statearr_41427;
})();
if(cljs.core.truth_(inst_41370)){
var statearr_41428_41510 = state_41421__$1;
(statearr_41428_41510[(1)] = (30));

} else {
var statearr_41429_41511 = state_41421__$1;
(statearr_41429_41511[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41422 === (1))){
var state_41421__$1 = state_41421;
var statearr_41430_41512 = state_41421__$1;
(statearr_41430_41512[(2)] = null);

(statearr_41430_41512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41422 === (24))){
var inst_41320 = (state_41421[(7)]);
var inst_41339 = (state_41421[(2)]);
var inst_41340 = cljs.core.next.call(null,inst_41320);
var inst_41298 = inst_41340;
var inst_41299 = null;
var inst_41300 = (0);
var inst_41301 = (0);
var state_41421__$1 = (function (){var statearr_41431 = state_41421;
(statearr_41431[(13)] = inst_41299);

(statearr_41431[(14)] = inst_41298);

(statearr_41431[(15)] = inst_41339);

(statearr_41431[(16)] = inst_41300);

(statearr_41431[(17)] = inst_41301);

return statearr_41431;
})();
var statearr_41432_41513 = state_41421__$1;
(statearr_41432_41513[(2)] = null);

(statearr_41432_41513[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41422 === (39))){
var state_41421__$1 = state_41421;
var statearr_41436_41514 = state_41421__$1;
(statearr_41436_41514[(2)] = null);

(statearr_41436_41514[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41422 === (4))){
var inst_41289 = (state_41421[(11)]);
var inst_41289__$1 = (state_41421[(2)]);
var inst_41290 = (inst_41289__$1 == null);
var state_41421__$1 = (function (){var statearr_41437 = state_41421;
(statearr_41437[(11)] = inst_41289__$1);

return statearr_41437;
})();
if(cljs.core.truth_(inst_41290)){
var statearr_41438_41515 = state_41421__$1;
(statearr_41438_41515[(1)] = (5));

} else {
var statearr_41439_41516 = state_41421__$1;
(statearr_41439_41516[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41422 === (15))){
var inst_41299 = (state_41421[(13)]);
var inst_41298 = (state_41421[(14)]);
var inst_41300 = (state_41421[(16)]);
var inst_41301 = (state_41421[(17)]);
var inst_41316 = (state_41421[(2)]);
var inst_41317 = (inst_41301 + (1));
var tmp41433 = inst_41299;
var tmp41434 = inst_41298;
var tmp41435 = inst_41300;
var inst_41298__$1 = tmp41434;
var inst_41299__$1 = tmp41433;
var inst_41300__$1 = tmp41435;
var inst_41301__$1 = inst_41317;
var state_41421__$1 = (function (){var statearr_41440 = state_41421;
(statearr_41440[(13)] = inst_41299__$1);

(statearr_41440[(14)] = inst_41298__$1);

(statearr_41440[(18)] = inst_41316);

(statearr_41440[(16)] = inst_41300__$1);

(statearr_41440[(17)] = inst_41301__$1);

return statearr_41440;
})();
var statearr_41441_41517 = state_41421__$1;
(statearr_41441_41517[(2)] = null);

(statearr_41441_41517[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41422 === (21))){
var inst_41343 = (state_41421[(2)]);
var state_41421__$1 = state_41421;
var statearr_41445_41518 = state_41421__$1;
(statearr_41445_41518[(2)] = inst_41343);

(statearr_41445_41518[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41422 === (31))){
var inst_41369 = (state_41421[(9)]);
var inst_41373 = done.call(null,null);
var inst_41374 = cljs.core.async.untap_STAR_.call(null,m,inst_41369);
var state_41421__$1 = (function (){var statearr_41446 = state_41421;
(statearr_41446[(19)] = inst_41373);

return statearr_41446;
})();
var statearr_41447_41519 = state_41421__$1;
(statearr_41447_41519[(2)] = inst_41374);

(statearr_41447_41519[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41422 === (32))){
var inst_41363 = (state_41421[(20)]);
var inst_41362 = (state_41421[(10)]);
var inst_41361 = (state_41421[(21)]);
var inst_41364 = (state_41421[(12)]);
var inst_41376 = (state_41421[(2)]);
var inst_41377 = (inst_41364 + (1));
var tmp41442 = inst_41363;
var tmp41443 = inst_41362;
var tmp41444 = inst_41361;
var inst_41361__$1 = tmp41444;
var inst_41362__$1 = tmp41443;
var inst_41363__$1 = tmp41442;
var inst_41364__$1 = inst_41377;
var state_41421__$1 = (function (){var statearr_41448 = state_41421;
(statearr_41448[(20)] = inst_41363__$1);

(statearr_41448[(10)] = inst_41362__$1);

(statearr_41448[(21)] = inst_41361__$1);

(statearr_41448[(12)] = inst_41364__$1);

(statearr_41448[(22)] = inst_41376);

return statearr_41448;
})();
var statearr_41449_41520 = state_41421__$1;
(statearr_41449_41520[(2)] = null);

(statearr_41449_41520[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41422 === (40))){
var inst_41389 = (state_41421[(23)]);
var inst_41393 = done.call(null,null);
var inst_41394 = cljs.core.async.untap_STAR_.call(null,m,inst_41389);
var state_41421__$1 = (function (){var statearr_41450 = state_41421;
(statearr_41450[(24)] = inst_41393);

return statearr_41450;
})();
var statearr_41451_41521 = state_41421__$1;
(statearr_41451_41521[(2)] = inst_41394);

(statearr_41451_41521[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41422 === (33))){
var inst_41380 = (state_41421[(25)]);
var inst_41382 = cljs.core.chunked_seq_QMARK_.call(null,inst_41380);
var state_41421__$1 = state_41421;
if(inst_41382){
var statearr_41452_41522 = state_41421__$1;
(statearr_41452_41522[(1)] = (36));

} else {
var statearr_41453_41523 = state_41421__$1;
(statearr_41453_41523[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41422 === (13))){
var inst_41310 = (state_41421[(26)]);
var inst_41313 = cljs.core.async.close_BANG_.call(null,inst_41310);
var state_41421__$1 = state_41421;
var statearr_41454_41524 = state_41421__$1;
(statearr_41454_41524[(2)] = inst_41313);

(statearr_41454_41524[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41422 === (22))){
var inst_41333 = (state_41421[(8)]);
var inst_41336 = cljs.core.async.close_BANG_.call(null,inst_41333);
var state_41421__$1 = state_41421;
var statearr_41455_41525 = state_41421__$1;
(statearr_41455_41525[(2)] = inst_41336);

(statearr_41455_41525[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41422 === (36))){
var inst_41380 = (state_41421[(25)]);
var inst_41384 = cljs.core.chunk_first.call(null,inst_41380);
var inst_41385 = cljs.core.chunk_rest.call(null,inst_41380);
var inst_41386 = cljs.core.count.call(null,inst_41384);
var inst_41361 = inst_41385;
var inst_41362 = inst_41384;
var inst_41363 = inst_41386;
var inst_41364 = (0);
var state_41421__$1 = (function (){var statearr_41456 = state_41421;
(statearr_41456[(20)] = inst_41363);

(statearr_41456[(10)] = inst_41362);

(statearr_41456[(21)] = inst_41361);

(statearr_41456[(12)] = inst_41364);

return statearr_41456;
})();
var statearr_41457_41526 = state_41421__$1;
(statearr_41457_41526[(2)] = null);

(statearr_41457_41526[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41422 === (41))){
var inst_41380 = (state_41421[(25)]);
var inst_41396 = (state_41421[(2)]);
var inst_41397 = cljs.core.next.call(null,inst_41380);
var inst_41361 = inst_41397;
var inst_41362 = null;
var inst_41363 = (0);
var inst_41364 = (0);
var state_41421__$1 = (function (){var statearr_41458 = state_41421;
(statearr_41458[(20)] = inst_41363);

(statearr_41458[(10)] = inst_41362);

(statearr_41458[(27)] = inst_41396);

(statearr_41458[(21)] = inst_41361);

(statearr_41458[(12)] = inst_41364);

return statearr_41458;
})();
var statearr_41459_41527 = state_41421__$1;
(statearr_41459_41527[(2)] = null);

(statearr_41459_41527[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41422 === (43))){
var state_41421__$1 = state_41421;
var statearr_41460_41528 = state_41421__$1;
(statearr_41460_41528[(2)] = null);

(statearr_41460_41528[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41422 === (29))){
var inst_41405 = (state_41421[(2)]);
var state_41421__$1 = state_41421;
var statearr_41461_41529 = state_41421__$1;
(statearr_41461_41529[(2)] = inst_41405);

(statearr_41461_41529[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41422 === (44))){
var inst_41414 = (state_41421[(2)]);
var state_41421__$1 = (function (){var statearr_41462 = state_41421;
(statearr_41462[(28)] = inst_41414);

return statearr_41462;
})();
var statearr_41463_41530 = state_41421__$1;
(statearr_41463_41530[(2)] = null);

(statearr_41463_41530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41422 === (6))){
var inst_41353 = (state_41421[(29)]);
var inst_41352 = cljs.core.deref.call(null,cs);
var inst_41353__$1 = cljs.core.keys.call(null,inst_41352);
var inst_41354 = cljs.core.count.call(null,inst_41353__$1);
var inst_41355 = cljs.core.reset_BANG_.call(null,dctr,inst_41354);
var inst_41360 = cljs.core.seq.call(null,inst_41353__$1);
var inst_41361 = inst_41360;
var inst_41362 = null;
var inst_41363 = (0);
var inst_41364 = (0);
var state_41421__$1 = (function (){var statearr_41464 = state_41421;
(statearr_41464[(30)] = inst_41355);

(statearr_41464[(20)] = inst_41363);

(statearr_41464[(10)] = inst_41362);

(statearr_41464[(21)] = inst_41361);

(statearr_41464[(29)] = inst_41353__$1);

(statearr_41464[(12)] = inst_41364);

return statearr_41464;
})();
var statearr_41465_41531 = state_41421__$1;
(statearr_41465_41531[(2)] = null);

(statearr_41465_41531[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41422 === (28))){
var inst_41380 = (state_41421[(25)]);
var inst_41361 = (state_41421[(21)]);
var inst_41380__$1 = cljs.core.seq.call(null,inst_41361);
var state_41421__$1 = (function (){var statearr_41466 = state_41421;
(statearr_41466[(25)] = inst_41380__$1);

return statearr_41466;
})();
if(inst_41380__$1){
var statearr_41467_41532 = state_41421__$1;
(statearr_41467_41532[(1)] = (33));

} else {
var statearr_41468_41533 = state_41421__$1;
(statearr_41468_41533[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41422 === (25))){
var inst_41363 = (state_41421[(20)]);
var inst_41364 = (state_41421[(12)]);
var inst_41366 = (inst_41364 < inst_41363);
var inst_41367 = inst_41366;
var state_41421__$1 = state_41421;
if(cljs.core.truth_(inst_41367)){
var statearr_41469_41534 = state_41421__$1;
(statearr_41469_41534[(1)] = (27));

} else {
var statearr_41470_41535 = state_41421__$1;
(statearr_41470_41535[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41422 === (34))){
var state_41421__$1 = state_41421;
var statearr_41471_41536 = state_41421__$1;
(statearr_41471_41536[(2)] = null);

(statearr_41471_41536[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41422 === (17))){
var state_41421__$1 = state_41421;
var statearr_41472_41537 = state_41421__$1;
(statearr_41472_41537[(2)] = null);

(statearr_41472_41537[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41422 === (3))){
var inst_41419 = (state_41421[(2)]);
var state_41421__$1 = state_41421;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41421__$1,inst_41419);
} else {
if((state_val_41422 === (12))){
var inst_41348 = (state_41421[(2)]);
var state_41421__$1 = state_41421;
var statearr_41473_41538 = state_41421__$1;
(statearr_41473_41538[(2)] = inst_41348);

(statearr_41473_41538[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41422 === (2))){
var state_41421__$1 = state_41421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41421__$1,(4),ch);
} else {
if((state_val_41422 === (23))){
var state_41421__$1 = state_41421;
var statearr_41474_41539 = state_41421__$1;
(statearr_41474_41539[(2)] = null);

(statearr_41474_41539[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41422 === (35))){
var inst_41403 = (state_41421[(2)]);
var state_41421__$1 = state_41421;
var statearr_41475_41540 = state_41421__$1;
(statearr_41475_41540[(2)] = inst_41403);

(statearr_41475_41540[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41422 === (19))){
var inst_41320 = (state_41421[(7)]);
var inst_41324 = cljs.core.chunk_first.call(null,inst_41320);
var inst_41325 = cljs.core.chunk_rest.call(null,inst_41320);
var inst_41326 = cljs.core.count.call(null,inst_41324);
var inst_41298 = inst_41325;
var inst_41299 = inst_41324;
var inst_41300 = inst_41326;
var inst_41301 = (0);
var state_41421__$1 = (function (){var statearr_41476 = state_41421;
(statearr_41476[(13)] = inst_41299);

(statearr_41476[(14)] = inst_41298);

(statearr_41476[(16)] = inst_41300);

(statearr_41476[(17)] = inst_41301);

return statearr_41476;
})();
var statearr_41477_41541 = state_41421__$1;
(statearr_41477_41541[(2)] = null);

(statearr_41477_41541[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41422 === (11))){
var inst_41298 = (state_41421[(14)]);
var inst_41320 = (state_41421[(7)]);
var inst_41320__$1 = cljs.core.seq.call(null,inst_41298);
var state_41421__$1 = (function (){var statearr_41478 = state_41421;
(statearr_41478[(7)] = inst_41320__$1);

return statearr_41478;
})();
if(inst_41320__$1){
var statearr_41479_41542 = state_41421__$1;
(statearr_41479_41542[(1)] = (16));

} else {
var statearr_41480_41543 = state_41421__$1;
(statearr_41480_41543[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41422 === (9))){
var inst_41350 = (state_41421[(2)]);
var state_41421__$1 = state_41421;
var statearr_41481_41544 = state_41421__$1;
(statearr_41481_41544[(2)] = inst_41350);

(statearr_41481_41544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41422 === (5))){
var inst_41296 = cljs.core.deref.call(null,cs);
var inst_41297 = cljs.core.seq.call(null,inst_41296);
var inst_41298 = inst_41297;
var inst_41299 = null;
var inst_41300 = (0);
var inst_41301 = (0);
var state_41421__$1 = (function (){var statearr_41482 = state_41421;
(statearr_41482[(13)] = inst_41299);

(statearr_41482[(14)] = inst_41298);

(statearr_41482[(16)] = inst_41300);

(statearr_41482[(17)] = inst_41301);

return statearr_41482;
})();
var statearr_41483_41545 = state_41421__$1;
(statearr_41483_41545[(2)] = null);

(statearr_41483_41545[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41422 === (14))){
var state_41421__$1 = state_41421;
var statearr_41484_41546 = state_41421__$1;
(statearr_41484_41546[(2)] = null);

(statearr_41484_41546[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41422 === (45))){
var inst_41411 = (state_41421[(2)]);
var state_41421__$1 = state_41421;
var statearr_41485_41547 = state_41421__$1;
(statearr_41485_41547[(2)] = inst_41411);

(statearr_41485_41547[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41422 === (26))){
var inst_41353 = (state_41421[(29)]);
var inst_41407 = (state_41421[(2)]);
var inst_41408 = cljs.core.seq.call(null,inst_41353);
var state_41421__$1 = (function (){var statearr_41486 = state_41421;
(statearr_41486[(31)] = inst_41407);

return statearr_41486;
})();
if(inst_41408){
var statearr_41487_41548 = state_41421__$1;
(statearr_41487_41548[(1)] = (42));

} else {
var statearr_41488_41549 = state_41421__$1;
(statearr_41488_41549[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41422 === (16))){
var inst_41320 = (state_41421[(7)]);
var inst_41322 = cljs.core.chunked_seq_QMARK_.call(null,inst_41320);
var state_41421__$1 = state_41421;
if(inst_41322){
var statearr_41489_41550 = state_41421__$1;
(statearr_41489_41550[(1)] = (19));

} else {
var statearr_41490_41551 = state_41421__$1;
(statearr_41490_41551[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41422 === (38))){
var inst_41400 = (state_41421[(2)]);
var state_41421__$1 = state_41421;
var statearr_41491_41552 = state_41421__$1;
(statearr_41491_41552[(2)] = inst_41400);

(statearr_41491_41552[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41422 === (30))){
var state_41421__$1 = state_41421;
var statearr_41492_41553 = state_41421__$1;
(statearr_41492_41553[(2)] = null);

(statearr_41492_41553[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41422 === (10))){
var inst_41299 = (state_41421[(13)]);
var inst_41301 = (state_41421[(17)]);
var inst_41309 = cljs.core._nth.call(null,inst_41299,inst_41301);
var inst_41310 = cljs.core.nth.call(null,inst_41309,(0),null);
var inst_41311 = cljs.core.nth.call(null,inst_41309,(1),null);
var state_41421__$1 = (function (){var statearr_41493 = state_41421;
(statearr_41493[(26)] = inst_41310);

return statearr_41493;
})();
if(cljs.core.truth_(inst_41311)){
var statearr_41494_41554 = state_41421__$1;
(statearr_41494_41554[(1)] = (13));

} else {
var statearr_41495_41555 = state_41421__$1;
(statearr_41495_41555[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41422 === (18))){
var inst_41346 = (state_41421[(2)]);
var state_41421__$1 = state_41421;
var statearr_41496_41556 = state_41421__$1;
(statearr_41496_41556[(2)] = inst_41346);

(statearr_41496_41556[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41422 === (42))){
var state_41421__$1 = state_41421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41421__$1,(45),dchan);
} else {
if((state_val_41422 === (37))){
var inst_41389 = (state_41421[(23)]);
var inst_41380 = (state_41421[(25)]);
var inst_41289 = (state_41421[(11)]);
var inst_41389__$1 = cljs.core.first.call(null,inst_41380);
var inst_41390 = cljs.core.async.put_BANG_.call(null,inst_41389__$1,inst_41289,done);
var state_41421__$1 = (function (){var statearr_41497 = state_41421;
(statearr_41497[(23)] = inst_41389__$1);

return statearr_41497;
})();
if(cljs.core.truth_(inst_41390)){
var statearr_41498_41557 = state_41421__$1;
(statearr_41498_41557[(1)] = (39));

} else {
var statearr_41499_41558 = state_41421__$1;
(statearr_41499_41558[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41422 === (8))){
var inst_41300 = (state_41421[(16)]);
var inst_41301 = (state_41421[(17)]);
var inst_41303 = (inst_41301 < inst_41300);
var inst_41304 = inst_41303;
var state_41421__$1 = state_41421;
if(cljs.core.truth_(inst_41304)){
var statearr_41500_41559 = state_41421__$1;
(statearr_41500_41559[(1)] = (10));

} else {
var statearr_41501_41560 = state_41421__$1;
(statearr_41501_41560[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__40588__auto__ = null;
var cljs$core$async$mult_$_state_machine__40588__auto____0 = (function (){
var statearr_41502 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41502[(0)] = cljs$core$async$mult_$_state_machine__40588__auto__);

(statearr_41502[(1)] = (1));

return statearr_41502;
});
var cljs$core$async$mult_$_state_machine__40588__auto____1 = (function (state_41421){
while(true){
var ret_value__40589__auto__ = (function (){try{while(true){
var result__40590__auto__ = switch__40587__auto__.call(null,state_41421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40590__auto__;
}
break;
}
}catch (e41503){if((e41503 instanceof Object)){
var ex__40591__auto__ = e41503;
var statearr_41504_41561 = state_41421;
(statearr_41504_41561[(5)] = ex__40591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41562 = state_41421;
state_41421 = G__41562;
continue;
} else {
return ret_value__40589__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__40588__auto__ = function(state_41421){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__40588__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__40588__auto____1.call(this,state_41421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__40588__auto____0;
cljs$core$async$mult_$_state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__40588__auto____1;
return cljs$core$async$mult_$_state_machine__40588__auto__;
})()
})();
var state__40686__auto__ = (function (){var statearr_41505 = f__40685__auto__.call(null);
(statearr_41505[(6)] = c__40684__auto___41506);

return statearr_41505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40686__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__41564 = arguments.length;
switch (G__41564) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_41566 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m,ch);
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_41566.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_41567 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m,ch);
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_41567.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_41568 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m);
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_41568.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_41569 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m,state_map);
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_41569.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_41570 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m,mode);
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_41570.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___41580 = arguments.length;
var i__5770__auto___41581 = (0);
while(true){
if((i__5770__auto___41581 < len__5769__auto___41580)){
args__5775__auto__.push((arguments[i__5770__auto___41581]));

var G__41582 = (i__5770__auto___41581 + (1));
i__5770__auto___41581 = G__41582;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__41575){
var map__41576 = p__41575;
var map__41576__$1 = cljs.core.__destructure_map.call(null,map__41576);
var opts = map__41576__$1;
var statearr_41577_41583 = state;
(statearr_41577_41583[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_41578_41584 = state;
(statearr_41578_41584[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_41579_41585 = state;
(statearr_41579_41585[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq41571){
var G__41572 = cljs.core.first.call(null,seq41571);
var seq41571__$1 = cljs.core.next.call(null,seq41571);
var G__41573 = cljs.core.first.call(null,seq41571__$1);
var seq41571__$2 = cljs.core.next.call(null,seq41571__$1);
var G__41574 = cljs.core.first.call(null,seq41571__$2);
var seq41571__$3 = cljs.core.next.call(null,seq41571__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41572,G__41573,G__41574,seq41571__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41586 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41586 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta41587){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta41587 = meta41587;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41588,meta41587__$1){
var self__ = this;
var _41588__$1 = this;
return (new cljs.core.async.t_cljs$core$async41586(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta41587__$1));
}));

(cljs.core.async.t_cljs$core$async41586.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41588){
var self__ = this;
var _41588__$1 = this;
return self__.meta41587;
}));

(cljs.core.async.t_cljs$core$async41586.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41586.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async41586.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41586.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async41586.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async41586.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async41586.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async41586.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async41586.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta41587","meta41587",845633930,null)], null);
}));

(cljs.core.async.t_cljs$core$async41586.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41586.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41586");

(cljs.core.async.t_cljs$core$async41586.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async41586");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41586.
 */
cljs.core.async.__GT_t_cljs$core$async41586 = (function cljs$core$async$mix_$___GT_t_cljs$core$async41586(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41587){
return (new cljs.core.async.t_cljs$core$async41586(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41587));
});

}

return (new cljs.core.async.t_cljs$core$async41586(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40684__auto___41700 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__40685__auto__ = (function (){var switch__40587__auto__ = (function (state_41656){
var state_val_41657 = (state_41656[(1)]);
if((state_val_41657 === (7))){
var inst_41616 = (state_41656[(2)]);
var state_41656__$1 = state_41656;
if(cljs.core.truth_(inst_41616)){
var statearr_41658_41701 = state_41656__$1;
(statearr_41658_41701[(1)] = (8));

} else {
var statearr_41659_41702 = state_41656__$1;
(statearr_41659_41702[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41657 === (20))){
var inst_41609 = (state_41656[(7)]);
var state_41656__$1 = state_41656;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41656__$1,(23),out,inst_41609);
} else {
if((state_val_41657 === (1))){
var inst_41592 = calc_state.call(null);
var inst_41593 = cljs.core.__destructure_map.call(null,inst_41592);
var inst_41594 = cljs.core.get.call(null,inst_41593,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41595 = cljs.core.get.call(null,inst_41593,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41596 = cljs.core.get.call(null,inst_41593,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_41597 = inst_41592;
var state_41656__$1 = (function (){var statearr_41660 = state_41656;
(statearr_41660[(8)] = inst_41596);

(statearr_41660[(9)] = inst_41595);

(statearr_41660[(10)] = inst_41594);

(statearr_41660[(11)] = inst_41597);

return statearr_41660;
})();
var statearr_41661_41703 = state_41656__$1;
(statearr_41661_41703[(2)] = null);

(statearr_41661_41703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41657 === (24))){
var inst_41600 = (state_41656[(12)]);
var inst_41597 = inst_41600;
var state_41656__$1 = (function (){var statearr_41662 = state_41656;
(statearr_41662[(11)] = inst_41597);

return statearr_41662;
})();
var statearr_41663_41704 = state_41656__$1;
(statearr_41663_41704[(2)] = null);

(statearr_41663_41704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41657 === (4))){
var inst_41609 = (state_41656[(7)]);
var inst_41611 = (state_41656[(13)]);
var inst_41608 = (state_41656[(2)]);
var inst_41609__$1 = cljs.core.nth.call(null,inst_41608,(0),null);
var inst_41610 = cljs.core.nth.call(null,inst_41608,(1),null);
var inst_41611__$1 = (inst_41609__$1 == null);
var state_41656__$1 = (function (){var statearr_41664 = state_41656;
(statearr_41664[(7)] = inst_41609__$1);

(statearr_41664[(14)] = inst_41610);

(statearr_41664[(13)] = inst_41611__$1);

return statearr_41664;
})();
if(cljs.core.truth_(inst_41611__$1)){
var statearr_41665_41705 = state_41656__$1;
(statearr_41665_41705[(1)] = (5));

} else {
var statearr_41666_41706 = state_41656__$1;
(statearr_41666_41706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41657 === (15))){
var inst_41630 = (state_41656[(15)]);
var inst_41601 = (state_41656[(16)]);
var inst_41630__$1 = cljs.core.empty_QMARK_.call(null,inst_41601);
var state_41656__$1 = (function (){var statearr_41667 = state_41656;
(statearr_41667[(15)] = inst_41630__$1);

return statearr_41667;
})();
if(inst_41630__$1){
var statearr_41668_41707 = state_41656__$1;
(statearr_41668_41707[(1)] = (17));

} else {
var statearr_41669_41708 = state_41656__$1;
(statearr_41669_41708[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41657 === (21))){
var inst_41600 = (state_41656[(12)]);
var inst_41597 = inst_41600;
var state_41656__$1 = (function (){var statearr_41670 = state_41656;
(statearr_41670[(11)] = inst_41597);

return statearr_41670;
})();
var statearr_41671_41709 = state_41656__$1;
(statearr_41671_41709[(2)] = null);

(statearr_41671_41709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41657 === (13))){
var inst_41623 = (state_41656[(2)]);
var inst_41624 = calc_state.call(null);
var inst_41597 = inst_41624;
var state_41656__$1 = (function (){var statearr_41672 = state_41656;
(statearr_41672[(17)] = inst_41623);

(statearr_41672[(11)] = inst_41597);

return statearr_41672;
})();
var statearr_41673_41710 = state_41656__$1;
(statearr_41673_41710[(2)] = null);

(statearr_41673_41710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41657 === (22))){
var inst_41650 = (state_41656[(2)]);
var state_41656__$1 = state_41656;
var statearr_41674_41711 = state_41656__$1;
(statearr_41674_41711[(2)] = inst_41650);

(statearr_41674_41711[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41657 === (6))){
var inst_41610 = (state_41656[(14)]);
var inst_41614 = cljs.core._EQ_.call(null,inst_41610,change);
var state_41656__$1 = state_41656;
var statearr_41675_41712 = state_41656__$1;
(statearr_41675_41712[(2)] = inst_41614);

(statearr_41675_41712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41657 === (25))){
var state_41656__$1 = state_41656;
var statearr_41676_41713 = state_41656__$1;
(statearr_41676_41713[(2)] = null);

(statearr_41676_41713[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41657 === (17))){
var inst_41602 = (state_41656[(18)]);
var inst_41610 = (state_41656[(14)]);
var inst_41632 = inst_41602.call(null,inst_41610);
var inst_41633 = cljs.core.not.call(null,inst_41632);
var state_41656__$1 = state_41656;
var statearr_41677_41714 = state_41656__$1;
(statearr_41677_41714[(2)] = inst_41633);

(statearr_41677_41714[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41657 === (3))){
var inst_41654 = (state_41656[(2)]);
var state_41656__$1 = state_41656;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41656__$1,inst_41654);
} else {
if((state_val_41657 === (12))){
var state_41656__$1 = state_41656;
var statearr_41678_41715 = state_41656__$1;
(statearr_41678_41715[(2)] = null);

(statearr_41678_41715[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41657 === (2))){
var inst_41600 = (state_41656[(12)]);
var inst_41597 = (state_41656[(11)]);
var inst_41600__$1 = cljs.core.__destructure_map.call(null,inst_41597);
var inst_41601 = cljs.core.get.call(null,inst_41600__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41602 = cljs.core.get.call(null,inst_41600__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41603 = cljs.core.get.call(null,inst_41600__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_41656__$1 = (function (){var statearr_41679 = state_41656;
(statearr_41679[(18)] = inst_41602);

(statearr_41679[(16)] = inst_41601);

(statearr_41679[(12)] = inst_41600__$1);

return statearr_41679;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_41656__$1,(4),inst_41603);
} else {
if((state_val_41657 === (23))){
var inst_41641 = (state_41656[(2)]);
var state_41656__$1 = state_41656;
if(cljs.core.truth_(inst_41641)){
var statearr_41680_41716 = state_41656__$1;
(statearr_41680_41716[(1)] = (24));

} else {
var statearr_41681_41717 = state_41656__$1;
(statearr_41681_41717[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41657 === (19))){
var inst_41636 = (state_41656[(2)]);
var state_41656__$1 = state_41656;
var statearr_41682_41718 = state_41656__$1;
(statearr_41682_41718[(2)] = inst_41636);

(statearr_41682_41718[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41657 === (11))){
var inst_41610 = (state_41656[(14)]);
var inst_41620 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_41610);
var state_41656__$1 = state_41656;
var statearr_41683_41719 = state_41656__$1;
(statearr_41683_41719[(2)] = inst_41620);

(statearr_41683_41719[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41657 === (9))){
var inst_41627 = (state_41656[(19)]);
var inst_41610 = (state_41656[(14)]);
var inst_41601 = (state_41656[(16)]);
var inst_41627__$1 = inst_41601.call(null,inst_41610);
var state_41656__$1 = (function (){var statearr_41684 = state_41656;
(statearr_41684[(19)] = inst_41627__$1);

return statearr_41684;
})();
if(cljs.core.truth_(inst_41627__$1)){
var statearr_41685_41720 = state_41656__$1;
(statearr_41685_41720[(1)] = (14));

} else {
var statearr_41686_41721 = state_41656__$1;
(statearr_41686_41721[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41657 === (5))){
var inst_41611 = (state_41656[(13)]);
var state_41656__$1 = state_41656;
var statearr_41687_41722 = state_41656__$1;
(statearr_41687_41722[(2)] = inst_41611);

(statearr_41687_41722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41657 === (14))){
var inst_41627 = (state_41656[(19)]);
var state_41656__$1 = state_41656;
var statearr_41688_41723 = state_41656__$1;
(statearr_41688_41723[(2)] = inst_41627);

(statearr_41688_41723[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41657 === (26))){
var inst_41646 = (state_41656[(2)]);
var state_41656__$1 = state_41656;
var statearr_41689_41724 = state_41656__$1;
(statearr_41689_41724[(2)] = inst_41646);

(statearr_41689_41724[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41657 === (16))){
var inst_41638 = (state_41656[(2)]);
var state_41656__$1 = state_41656;
if(cljs.core.truth_(inst_41638)){
var statearr_41690_41725 = state_41656__$1;
(statearr_41690_41725[(1)] = (20));

} else {
var statearr_41691_41726 = state_41656__$1;
(statearr_41691_41726[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41657 === (10))){
var inst_41652 = (state_41656[(2)]);
var state_41656__$1 = state_41656;
var statearr_41692_41727 = state_41656__$1;
(statearr_41692_41727[(2)] = inst_41652);

(statearr_41692_41727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41657 === (18))){
var inst_41630 = (state_41656[(15)]);
var state_41656__$1 = state_41656;
var statearr_41693_41728 = state_41656__$1;
(statearr_41693_41728[(2)] = inst_41630);

(statearr_41693_41728[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41657 === (8))){
var inst_41609 = (state_41656[(7)]);
var inst_41618 = (inst_41609 == null);
var state_41656__$1 = state_41656;
if(cljs.core.truth_(inst_41618)){
var statearr_41694_41729 = state_41656__$1;
(statearr_41694_41729[(1)] = (11));

} else {
var statearr_41695_41730 = state_41656__$1;
(statearr_41695_41730[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__40588__auto__ = null;
var cljs$core$async$mix_$_state_machine__40588__auto____0 = (function (){
var statearr_41696 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41696[(0)] = cljs$core$async$mix_$_state_machine__40588__auto__);

(statearr_41696[(1)] = (1));

return statearr_41696;
});
var cljs$core$async$mix_$_state_machine__40588__auto____1 = (function (state_41656){
while(true){
var ret_value__40589__auto__ = (function (){try{while(true){
var result__40590__auto__ = switch__40587__auto__.call(null,state_41656);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40590__auto__;
}
break;
}
}catch (e41697){if((e41697 instanceof Object)){
var ex__40591__auto__ = e41697;
var statearr_41698_41731 = state_41656;
(statearr_41698_41731[(5)] = ex__40591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41732 = state_41656;
state_41656 = G__41732;
continue;
} else {
return ret_value__40589__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__40588__auto__ = function(state_41656){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__40588__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__40588__auto____1.call(this,state_41656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__40588__auto____0;
cljs$core$async$mix_$_state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__40588__auto____1;
return cljs$core$async$mix_$_state_machine__40588__auto__;
})()
})();
var state__40686__auto__ = (function (){var statearr_41699 = f__40685__auto__.call(null);
(statearr_41699[(6)] = c__40684__auto___41700);

return statearr_41699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40686__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_41735 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_41735.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_41736 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,p,v,ch);
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_41736.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_41737 = (function() {
var G__41738 = null;
var G__41738__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,p);
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__41738__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,p,v);
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__41738 = function(p,v){
switch(arguments.length){
case 1:
return G__41738__1.call(this,p);
case 2:
return G__41738__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__41738.cljs$core$IFn$_invoke$arity$1 = G__41738__1;
G__41738.cljs$core$IFn$_invoke$arity$2 = G__41738__2;
return G__41738;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__41734 = arguments.length;
switch (G__41734) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_41737.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_41737.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__41742 = arguments.length;
switch (G__41742) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__41740_SHARP_){
if(cljs.core.truth_(p1__41740_SHARP_.call(null,topic))){
return p1__41740_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__41740_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41743 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41743 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta41744){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta41744 = meta41744;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41745,meta41744__$1){
var self__ = this;
var _41745__$1 = this;
return (new cljs.core.async.t_cljs$core$async41743(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta41744__$1));
}));

(cljs.core.async.t_cljs$core$async41743.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41745){
var self__ = this;
var _41745__$1 = this;
return self__.meta41744;
}));

(cljs.core.async.t_cljs$core$async41743.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41743.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async41743.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41743.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async41743.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async41743.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async41743.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async41743.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta41744","meta41744",394737592,null)], null);
}));

(cljs.core.async.t_cljs$core$async41743.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41743.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41743");

(cljs.core.async.t_cljs$core$async41743.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async41743");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41743.
 */
cljs.core.async.__GT_t_cljs$core$async41743 = (function cljs$core$async$__GT_t_cljs$core$async41743(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41744){
return (new cljs.core.async.t_cljs$core$async41743(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41744));
});

}

return (new cljs.core.async.t_cljs$core$async41743(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40684__auto___41863 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__40685__auto__ = (function (){var switch__40587__auto__ = (function (state_41817){
var state_val_41818 = (state_41817[(1)]);
if((state_val_41818 === (7))){
var inst_41813 = (state_41817[(2)]);
var state_41817__$1 = state_41817;
var statearr_41819_41864 = state_41817__$1;
(statearr_41819_41864[(2)] = inst_41813);

(statearr_41819_41864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (20))){
var state_41817__$1 = state_41817;
var statearr_41820_41865 = state_41817__$1;
(statearr_41820_41865[(2)] = null);

(statearr_41820_41865[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (1))){
var state_41817__$1 = state_41817;
var statearr_41821_41866 = state_41817__$1;
(statearr_41821_41866[(2)] = null);

(statearr_41821_41866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (24))){
var inst_41796 = (state_41817[(7)]);
var inst_41805 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_41796);
var state_41817__$1 = state_41817;
var statearr_41822_41867 = state_41817__$1;
(statearr_41822_41867[(2)] = inst_41805);

(statearr_41822_41867[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (4))){
var inst_41748 = (state_41817[(8)]);
var inst_41748__$1 = (state_41817[(2)]);
var inst_41749 = (inst_41748__$1 == null);
var state_41817__$1 = (function (){var statearr_41823 = state_41817;
(statearr_41823[(8)] = inst_41748__$1);

return statearr_41823;
})();
if(cljs.core.truth_(inst_41749)){
var statearr_41824_41868 = state_41817__$1;
(statearr_41824_41868[(1)] = (5));

} else {
var statearr_41825_41869 = state_41817__$1;
(statearr_41825_41869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (15))){
var inst_41790 = (state_41817[(2)]);
var state_41817__$1 = state_41817;
var statearr_41826_41870 = state_41817__$1;
(statearr_41826_41870[(2)] = inst_41790);

(statearr_41826_41870[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (21))){
var inst_41810 = (state_41817[(2)]);
var state_41817__$1 = (function (){var statearr_41827 = state_41817;
(statearr_41827[(9)] = inst_41810);

return statearr_41827;
})();
var statearr_41828_41871 = state_41817__$1;
(statearr_41828_41871[(2)] = null);

(statearr_41828_41871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (13))){
var inst_41772 = (state_41817[(10)]);
var inst_41774 = cljs.core.chunked_seq_QMARK_.call(null,inst_41772);
var state_41817__$1 = state_41817;
if(inst_41774){
var statearr_41829_41872 = state_41817__$1;
(statearr_41829_41872[(1)] = (16));

} else {
var statearr_41830_41873 = state_41817__$1;
(statearr_41830_41873[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (22))){
var inst_41802 = (state_41817[(2)]);
var state_41817__$1 = state_41817;
if(cljs.core.truth_(inst_41802)){
var statearr_41831_41874 = state_41817__$1;
(statearr_41831_41874[(1)] = (23));

} else {
var statearr_41832_41875 = state_41817__$1;
(statearr_41832_41875[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (6))){
var inst_41748 = (state_41817[(8)]);
var inst_41798 = (state_41817[(11)]);
var inst_41796 = (state_41817[(7)]);
var inst_41796__$1 = topic_fn.call(null,inst_41748);
var inst_41797 = cljs.core.deref.call(null,mults);
var inst_41798__$1 = cljs.core.get.call(null,inst_41797,inst_41796__$1);
var state_41817__$1 = (function (){var statearr_41833 = state_41817;
(statearr_41833[(11)] = inst_41798__$1);

(statearr_41833[(7)] = inst_41796__$1);

return statearr_41833;
})();
if(cljs.core.truth_(inst_41798__$1)){
var statearr_41834_41876 = state_41817__$1;
(statearr_41834_41876[(1)] = (19));

} else {
var statearr_41835_41877 = state_41817__$1;
(statearr_41835_41877[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (25))){
var inst_41807 = (state_41817[(2)]);
var state_41817__$1 = state_41817;
var statearr_41836_41878 = state_41817__$1;
(statearr_41836_41878[(2)] = inst_41807);

(statearr_41836_41878[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (17))){
var inst_41772 = (state_41817[(10)]);
var inst_41781 = cljs.core.first.call(null,inst_41772);
var inst_41782 = cljs.core.async.muxch_STAR_.call(null,inst_41781);
var inst_41783 = cljs.core.async.close_BANG_.call(null,inst_41782);
var inst_41784 = cljs.core.next.call(null,inst_41772);
var inst_41758 = inst_41784;
var inst_41759 = null;
var inst_41760 = (0);
var inst_41761 = (0);
var state_41817__$1 = (function (){var statearr_41837 = state_41817;
(statearr_41837[(12)] = inst_41759);

(statearr_41837[(13)] = inst_41761);

(statearr_41837[(14)] = inst_41760);

(statearr_41837[(15)] = inst_41758);

(statearr_41837[(16)] = inst_41783);

return statearr_41837;
})();
var statearr_41838_41879 = state_41817__$1;
(statearr_41838_41879[(2)] = null);

(statearr_41838_41879[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (3))){
var inst_41815 = (state_41817[(2)]);
var state_41817__$1 = state_41817;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41817__$1,inst_41815);
} else {
if((state_val_41818 === (12))){
var inst_41792 = (state_41817[(2)]);
var state_41817__$1 = state_41817;
var statearr_41839_41880 = state_41817__$1;
(statearr_41839_41880[(2)] = inst_41792);

(statearr_41839_41880[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (2))){
var state_41817__$1 = state_41817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41817__$1,(4),ch);
} else {
if((state_val_41818 === (23))){
var state_41817__$1 = state_41817;
var statearr_41840_41881 = state_41817__$1;
(statearr_41840_41881[(2)] = null);

(statearr_41840_41881[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (19))){
var inst_41748 = (state_41817[(8)]);
var inst_41798 = (state_41817[(11)]);
var inst_41800 = cljs.core.async.muxch_STAR_.call(null,inst_41798);
var state_41817__$1 = state_41817;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41817__$1,(22),inst_41800,inst_41748);
} else {
if((state_val_41818 === (11))){
var inst_41772 = (state_41817[(10)]);
var inst_41758 = (state_41817[(15)]);
var inst_41772__$1 = cljs.core.seq.call(null,inst_41758);
var state_41817__$1 = (function (){var statearr_41841 = state_41817;
(statearr_41841[(10)] = inst_41772__$1);

return statearr_41841;
})();
if(inst_41772__$1){
var statearr_41842_41882 = state_41817__$1;
(statearr_41842_41882[(1)] = (13));

} else {
var statearr_41843_41883 = state_41817__$1;
(statearr_41843_41883[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (9))){
var inst_41794 = (state_41817[(2)]);
var state_41817__$1 = state_41817;
var statearr_41844_41884 = state_41817__$1;
(statearr_41844_41884[(2)] = inst_41794);

(statearr_41844_41884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (5))){
var inst_41755 = cljs.core.deref.call(null,mults);
var inst_41756 = cljs.core.vals.call(null,inst_41755);
var inst_41757 = cljs.core.seq.call(null,inst_41756);
var inst_41758 = inst_41757;
var inst_41759 = null;
var inst_41760 = (0);
var inst_41761 = (0);
var state_41817__$1 = (function (){var statearr_41845 = state_41817;
(statearr_41845[(12)] = inst_41759);

(statearr_41845[(13)] = inst_41761);

(statearr_41845[(14)] = inst_41760);

(statearr_41845[(15)] = inst_41758);

return statearr_41845;
})();
var statearr_41846_41885 = state_41817__$1;
(statearr_41846_41885[(2)] = null);

(statearr_41846_41885[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (14))){
var state_41817__$1 = state_41817;
var statearr_41850_41886 = state_41817__$1;
(statearr_41850_41886[(2)] = null);

(statearr_41850_41886[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (16))){
var inst_41772 = (state_41817[(10)]);
var inst_41776 = cljs.core.chunk_first.call(null,inst_41772);
var inst_41777 = cljs.core.chunk_rest.call(null,inst_41772);
var inst_41778 = cljs.core.count.call(null,inst_41776);
var inst_41758 = inst_41777;
var inst_41759 = inst_41776;
var inst_41760 = inst_41778;
var inst_41761 = (0);
var state_41817__$1 = (function (){var statearr_41851 = state_41817;
(statearr_41851[(12)] = inst_41759);

(statearr_41851[(13)] = inst_41761);

(statearr_41851[(14)] = inst_41760);

(statearr_41851[(15)] = inst_41758);

return statearr_41851;
})();
var statearr_41852_41887 = state_41817__$1;
(statearr_41852_41887[(2)] = null);

(statearr_41852_41887[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (10))){
var inst_41759 = (state_41817[(12)]);
var inst_41761 = (state_41817[(13)]);
var inst_41760 = (state_41817[(14)]);
var inst_41758 = (state_41817[(15)]);
var inst_41766 = cljs.core._nth.call(null,inst_41759,inst_41761);
var inst_41767 = cljs.core.async.muxch_STAR_.call(null,inst_41766);
var inst_41768 = cljs.core.async.close_BANG_.call(null,inst_41767);
var inst_41769 = (inst_41761 + (1));
var tmp41847 = inst_41759;
var tmp41848 = inst_41760;
var tmp41849 = inst_41758;
var inst_41758__$1 = tmp41849;
var inst_41759__$1 = tmp41847;
var inst_41760__$1 = tmp41848;
var inst_41761__$1 = inst_41769;
var state_41817__$1 = (function (){var statearr_41853 = state_41817;
(statearr_41853[(12)] = inst_41759__$1);

(statearr_41853[(17)] = inst_41768);

(statearr_41853[(13)] = inst_41761__$1);

(statearr_41853[(14)] = inst_41760__$1);

(statearr_41853[(15)] = inst_41758__$1);

return statearr_41853;
})();
var statearr_41854_41888 = state_41817__$1;
(statearr_41854_41888[(2)] = null);

(statearr_41854_41888[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (18))){
var inst_41787 = (state_41817[(2)]);
var state_41817__$1 = state_41817;
var statearr_41855_41889 = state_41817__$1;
(statearr_41855_41889[(2)] = inst_41787);

(statearr_41855_41889[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (8))){
var inst_41761 = (state_41817[(13)]);
var inst_41760 = (state_41817[(14)]);
var inst_41763 = (inst_41761 < inst_41760);
var inst_41764 = inst_41763;
var state_41817__$1 = state_41817;
if(cljs.core.truth_(inst_41764)){
var statearr_41856_41890 = state_41817__$1;
(statearr_41856_41890[(1)] = (10));

} else {
var statearr_41857_41891 = state_41817__$1;
(statearr_41857_41891[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__40588__auto__ = null;
var cljs$core$async$state_machine__40588__auto____0 = (function (){
var statearr_41858 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41858[(0)] = cljs$core$async$state_machine__40588__auto__);

(statearr_41858[(1)] = (1));

return statearr_41858;
});
var cljs$core$async$state_machine__40588__auto____1 = (function (state_41817){
while(true){
var ret_value__40589__auto__ = (function (){try{while(true){
var result__40590__auto__ = switch__40587__auto__.call(null,state_41817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40590__auto__;
}
break;
}
}catch (e41859){if((e41859 instanceof Object)){
var ex__40591__auto__ = e41859;
var statearr_41860_41892 = state_41817;
(statearr_41860_41892[(5)] = ex__40591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41893 = state_41817;
state_41817 = G__41893;
continue;
} else {
return ret_value__40589__auto__;
}
break;
}
});
cljs$core$async$state_machine__40588__auto__ = function(state_41817){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40588__auto____1.call(this,state_41817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40588__auto____0;
cljs$core$async$state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40588__auto____1;
return cljs$core$async$state_machine__40588__auto__;
})()
})();
var state__40686__auto__ = (function (){var statearr_41861 = f__40685__auto__.call(null);
(statearr_41861[(6)] = c__40684__auto___41863);

return statearr_41861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40686__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__41895 = arguments.length;
switch (G__41895) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__41898 = arguments.length;
switch (G__41898) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__41901 = arguments.length;
switch (G__41901) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__40684__auto___41968 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__40685__auto__ = (function (){var switch__40587__auto__ = (function (state_41940){
var state_val_41941 = (state_41940[(1)]);
if((state_val_41941 === (7))){
var state_41940__$1 = state_41940;
var statearr_41942_41969 = state_41940__$1;
(statearr_41942_41969[(2)] = null);

(statearr_41942_41969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41941 === (1))){
var state_41940__$1 = state_41940;
var statearr_41943_41970 = state_41940__$1;
(statearr_41943_41970[(2)] = null);

(statearr_41943_41970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41941 === (4))){
var inst_41904 = (state_41940[(7)]);
var inst_41906 = (inst_41904 < cnt);
var state_41940__$1 = state_41940;
if(cljs.core.truth_(inst_41906)){
var statearr_41944_41971 = state_41940__$1;
(statearr_41944_41971[(1)] = (6));

} else {
var statearr_41945_41972 = state_41940__$1;
(statearr_41945_41972[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41941 === (15))){
var inst_41936 = (state_41940[(2)]);
var state_41940__$1 = state_41940;
var statearr_41946_41973 = state_41940__$1;
(statearr_41946_41973[(2)] = inst_41936);

(statearr_41946_41973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41941 === (13))){
var inst_41929 = cljs.core.async.close_BANG_.call(null,out);
var state_41940__$1 = state_41940;
var statearr_41947_41974 = state_41940__$1;
(statearr_41947_41974[(2)] = inst_41929);

(statearr_41947_41974[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41941 === (6))){
var state_41940__$1 = state_41940;
var statearr_41948_41975 = state_41940__$1;
(statearr_41948_41975[(2)] = null);

(statearr_41948_41975[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41941 === (3))){
var inst_41938 = (state_41940[(2)]);
var state_41940__$1 = state_41940;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41940__$1,inst_41938);
} else {
if((state_val_41941 === (12))){
var inst_41926 = (state_41940[(8)]);
var inst_41926__$1 = (state_41940[(2)]);
var inst_41927 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_41926__$1);
var state_41940__$1 = (function (){var statearr_41949 = state_41940;
(statearr_41949[(8)] = inst_41926__$1);

return statearr_41949;
})();
if(cljs.core.truth_(inst_41927)){
var statearr_41950_41976 = state_41940__$1;
(statearr_41950_41976[(1)] = (13));

} else {
var statearr_41951_41977 = state_41940__$1;
(statearr_41951_41977[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41941 === (2))){
var inst_41903 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_41904 = (0);
var state_41940__$1 = (function (){var statearr_41952 = state_41940;
(statearr_41952[(9)] = inst_41903);

(statearr_41952[(7)] = inst_41904);

return statearr_41952;
})();
var statearr_41953_41978 = state_41940__$1;
(statearr_41953_41978[(2)] = null);

(statearr_41953_41978[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41941 === (11))){
var inst_41904 = (state_41940[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41940,(10),Object,null,(9));
var inst_41913 = chs__$1.call(null,inst_41904);
var inst_41914 = done.call(null,inst_41904);
var inst_41915 = cljs.core.async.take_BANG_.call(null,inst_41913,inst_41914);
var state_41940__$1 = state_41940;
var statearr_41954_41979 = state_41940__$1;
(statearr_41954_41979[(2)] = inst_41915);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41940__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41941 === (9))){
var inst_41904 = (state_41940[(7)]);
var inst_41917 = (state_41940[(2)]);
var inst_41918 = (inst_41904 + (1));
var inst_41904__$1 = inst_41918;
var state_41940__$1 = (function (){var statearr_41955 = state_41940;
(statearr_41955[(10)] = inst_41917);

(statearr_41955[(7)] = inst_41904__$1);

return statearr_41955;
})();
var statearr_41956_41980 = state_41940__$1;
(statearr_41956_41980[(2)] = null);

(statearr_41956_41980[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41941 === (5))){
var inst_41924 = (state_41940[(2)]);
var state_41940__$1 = (function (){var statearr_41957 = state_41940;
(statearr_41957[(11)] = inst_41924);

return statearr_41957;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41940__$1,(12),dchan);
} else {
if((state_val_41941 === (14))){
var inst_41926 = (state_41940[(8)]);
var inst_41931 = cljs.core.apply.call(null,f,inst_41926);
var state_41940__$1 = state_41940;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41940__$1,(16),out,inst_41931);
} else {
if((state_val_41941 === (16))){
var inst_41933 = (state_41940[(2)]);
var state_41940__$1 = (function (){var statearr_41958 = state_41940;
(statearr_41958[(12)] = inst_41933);

return statearr_41958;
})();
var statearr_41959_41981 = state_41940__$1;
(statearr_41959_41981[(2)] = null);

(statearr_41959_41981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41941 === (10))){
var inst_41908 = (state_41940[(2)]);
var inst_41909 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_41940__$1 = (function (){var statearr_41960 = state_41940;
(statearr_41960[(13)] = inst_41908);

return statearr_41960;
})();
var statearr_41961_41982 = state_41940__$1;
(statearr_41961_41982[(2)] = inst_41909);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41940__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41941 === (8))){
var inst_41922 = (state_41940[(2)]);
var state_41940__$1 = state_41940;
var statearr_41962_41983 = state_41940__$1;
(statearr_41962_41983[(2)] = inst_41922);

(statearr_41962_41983[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__40588__auto__ = null;
var cljs$core$async$state_machine__40588__auto____0 = (function (){
var statearr_41963 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41963[(0)] = cljs$core$async$state_machine__40588__auto__);

(statearr_41963[(1)] = (1));

return statearr_41963;
});
var cljs$core$async$state_machine__40588__auto____1 = (function (state_41940){
while(true){
var ret_value__40589__auto__ = (function (){try{while(true){
var result__40590__auto__ = switch__40587__auto__.call(null,state_41940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40590__auto__;
}
break;
}
}catch (e41964){if((e41964 instanceof Object)){
var ex__40591__auto__ = e41964;
var statearr_41965_41984 = state_41940;
(statearr_41965_41984[(5)] = ex__40591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41985 = state_41940;
state_41940 = G__41985;
continue;
} else {
return ret_value__40589__auto__;
}
break;
}
});
cljs$core$async$state_machine__40588__auto__ = function(state_41940){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40588__auto____1.call(this,state_41940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40588__auto____0;
cljs$core$async$state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40588__auto____1;
return cljs$core$async$state_machine__40588__auto__;
})()
})();
var state__40686__auto__ = (function (){var statearr_41966 = f__40685__auto__.call(null);
(statearr_41966[(6)] = c__40684__auto___41968);

return statearr_41966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40686__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__41988 = arguments.length;
switch (G__41988) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40684__auto___42042 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__40685__auto__ = (function (){var switch__40587__auto__ = (function (state_42020){
var state_val_42021 = (state_42020[(1)]);
if((state_val_42021 === (7))){
var inst_42000 = (state_42020[(7)]);
var inst_41999 = (state_42020[(8)]);
var inst_41999__$1 = (state_42020[(2)]);
var inst_42000__$1 = cljs.core.nth.call(null,inst_41999__$1,(0),null);
var inst_42001 = cljs.core.nth.call(null,inst_41999__$1,(1),null);
var inst_42002 = (inst_42000__$1 == null);
var state_42020__$1 = (function (){var statearr_42022 = state_42020;
(statearr_42022[(7)] = inst_42000__$1);

(statearr_42022[(8)] = inst_41999__$1);

(statearr_42022[(9)] = inst_42001);

return statearr_42022;
})();
if(cljs.core.truth_(inst_42002)){
var statearr_42023_42043 = state_42020__$1;
(statearr_42023_42043[(1)] = (8));

} else {
var statearr_42024_42044 = state_42020__$1;
(statearr_42024_42044[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42021 === (1))){
var inst_41989 = cljs.core.vec.call(null,chs);
var inst_41990 = inst_41989;
var state_42020__$1 = (function (){var statearr_42025 = state_42020;
(statearr_42025[(10)] = inst_41990);

return statearr_42025;
})();
var statearr_42026_42045 = state_42020__$1;
(statearr_42026_42045[(2)] = null);

(statearr_42026_42045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42021 === (4))){
var inst_41990 = (state_42020[(10)]);
var state_42020__$1 = state_42020;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42020__$1,(7),inst_41990);
} else {
if((state_val_42021 === (6))){
var inst_42016 = (state_42020[(2)]);
var state_42020__$1 = state_42020;
var statearr_42027_42046 = state_42020__$1;
(statearr_42027_42046[(2)] = inst_42016);

(statearr_42027_42046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42021 === (3))){
var inst_42018 = (state_42020[(2)]);
var state_42020__$1 = state_42020;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42020__$1,inst_42018);
} else {
if((state_val_42021 === (2))){
var inst_41990 = (state_42020[(10)]);
var inst_41992 = cljs.core.count.call(null,inst_41990);
var inst_41993 = (inst_41992 > (0));
var state_42020__$1 = state_42020;
if(cljs.core.truth_(inst_41993)){
var statearr_42029_42047 = state_42020__$1;
(statearr_42029_42047[(1)] = (4));

} else {
var statearr_42030_42048 = state_42020__$1;
(statearr_42030_42048[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42021 === (11))){
var inst_41990 = (state_42020[(10)]);
var inst_42009 = (state_42020[(2)]);
var tmp42028 = inst_41990;
var inst_41990__$1 = tmp42028;
var state_42020__$1 = (function (){var statearr_42031 = state_42020;
(statearr_42031[(10)] = inst_41990__$1);

(statearr_42031[(11)] = inst_42009);

return statearr_42031;
})();
var statearr_42032_42049 = state_42020__$1;
(statearr_42032_42049[(2)] = null);

(statearr_42032_42049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42021 === (9))){
var inst_42000 = (state_42020[(7)]);
var state_42020__$1 = state_42020;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42020__$1,(11),out,inst_42000);
} else {
if((state_val_42021 === (5))){
var inst_42014 = cljs.core.async.close_BANG_.call(null,out);
var state_42020__$1 = state_42020;
var statearr_42033_42050 = state_42020__$1;
(statearr_42033_42050[(2)] = inst_42014);

(statearr_42033_42050[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42021 === (10))){
var inst_42012 = (state_42020[(2)]);
var state_42020__$1 = state_42020;
var statearr_42034_42051 = state_42020__$1;
(statearr_42034_42051[(2)] = inst_42012);

(statearr_42034_42051[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42021 === (8))){
var inst_42000 = (state_42020[(7)]);
var inst_41990 = (state_42020[(10)]);
var inst_41999 = (state_42020[(8)]);
var inst_42001 = (state_42020[(9)]);
var inst_42004 = (function (){var cs = inst_41990;
var vec__41995 = inst_41999;
var v = inst_42000;
var c = inst_42001;
return (function (p1__41986_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__41986_SHARP_);
});
})();
var inst_42005 = cljs.core.filterv.call(null,inst_42004,inst_41990);
var inst_41990__$1 = inst_42005;
var state_42020__$1 = (function (){var statearr_42035 = state_42020;
(statearr_42035[(10)] = inst_41990__$1);

return statearr_42035;
})();
var statearr_42036_42052 = state_42020__$1;
(statearr_42036_42052[(2)] = null);

(statearr_42036_42052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__40588__auto__ = null;
var cljs$core$async$state_machine__40588__auto____0 = (function (){
var statearr_42037 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42037[(0)] = cljs$core$async$state_machine__40588__auto__);

(statearr_42037[(1)] = (1));

return statearr_42037;
});
var cljs$core$async$state_machine__40588__auto____1 = (function (state_42020){
while(true){
var ret_value__40589__auto__ = (function (){try{while(true){
var result__40590__auto__ = switch__40587__auto__.call(null,state_42020);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40590__auto__;
}
break;
}
}catch (e42038){if((e42038 instanceof Object)){
var ex__40591__auto__ = e42038;
var statearr_42039_42053 = state_42020;
(statearr_42039_42053[(5)] = ex__40591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42054 = state_42020;
state_42020 = G__42054;
continue;
} else {
return ret_value__40589__auto__;
}
break;
}
});
cljs$core$async$state_machine__40588__auto__ = function(state_42020){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40588__auto____1.call(this,state_42020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40588__auto____0;
cljs$core$async$state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40588__auto____1;
return cljs$core$async$state_machine__40588__auto__;
})()
})();
var state__40686__auto__ = (function (){var statearr_42040 = f__40685__auto__.call(null);
(statearr_42040[(6)] = c__40684__auto___42042);

return statearr_42040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40686__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__42056 = arguments.length;
switch (G__42056) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40684__auto___42101 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__40685__auto__ = (function (){var switch__40587__auto__ = (function (state_42080){
var state_val_42081 = (state_42080[(1)]);
if((state_val_42081 === (7))){
var inst_42062 = (state_42080[(7)]);
var inst_42062__$1 = (state_42080[(2)]);
var inst_42063 = (inst_42062__$1 == null);
var inst_42064 = cljs.core.not.call(null,inst_42063);
var state_42080__$1 = (function (){var statearr_42082 = state_42080;
(statearr_42082[(7)] = inst_42062__$1);

return statearr_42082;
})();
if(inst_42064){
var statearr_42083_42102 = state_42080__$1;
(statearr_42083_42102[(1)] = (8));

} else {
var statearr_42084_42103 = state_42080__$1;
(statearr_42084_42103[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42081 === (1))){
var inst_42057 = (0);
var state_42080__$1 = (function (){var statearr_42085 = state_42080;
(statearr_42085[(8)] = inst_42057);

return statearr_42085;
})();
var statearr_42086_42104 = state_42080__$1;
(statearr_42086_42104[(2)] = null);

(statearr_42086_42104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42081 === (4))){
var state_42080__$1 = state_42080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42080__$1,(7),ch);
} else {
if((state_val_42081 === (6))){
var inst_42075 = (state_42080[(2)]);
var state_42080__$1 = state_42080;
var statearr_42087_42105 = state_42080__$1;
(statearr_42087_42105[(2)] = inst_42075);

(statearr_42087_42105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42081 === (3))){
var inst_42077 = (state_42080[(2)]);
var inst_42078 = cljs.core.async.close_BANG_.call(null,out);
var state_42080__$1 = (function (){var statearr_42088 = state_42080;
(statearr_42088[(9)] = inst_42077);

return statearr_42088;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42080__$1,inst_42078);
} else {
if((state_val_42081 === (2))){
var inst_42057 = (state_42080[(8)]);
var inst_42059 = (inst_42057 < n);
var state_42080__$1 = state_42080;
if(cljs.core.truth_(inst_42059)){
var statearr_42089_42106 = state_42080__$1;
(statearr_42089_42106[(1)] = (4));

} else {
var statearr_42090_42107 = state_42080__$1;
(statearr_42090_42107[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42081 === (11))){
var inst_42057 = (state_42080[(8)]);
var inst_42067 = (state_42080[(2)]);
var inst_42068 = (inst_42057 + (1));
var inst_42057__$1 = inst_42068;
var state_42080__$1 = (function (){var statearr_42091 = state_42080;
(statearr_42091[(8)] = inst_42057__$1);

(statearr_42091[(10)] = inst_42067);

return statearr_42091;
})();
var statearr_42092_42108 = state_42080__$1;
(statearr_42092_42108[(2)] = null);

(statearr_42092_42108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42081 === (9))){
var state_42080__$1 = state_42080;
var statearr_42093_42109 = state_42080__$1;
(statearr_42093_42109[(2)] = null);

(statearr_42093_42109[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42081 === (5))){
var state_42080__$1 = state_42080;
var statearr_42094_42110 = state_42080__$1;
(statearr_42094_42110[(2)] = null);

(statearr_42094_42110[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42081 === (10))){
var inst_42072 = (state_42080[(2)]);
var state_42080__$1 = state_42080;
var statearr_42095_42111 = state_42080__$1;
(statearr_42095_42111[(2)] = inst_42072);

(statearr_42095_42111[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42081 === (8))){
var inst_42062 = (state_42080[(7)]);
var state_42080__$1 = state_42080;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42080__$1,(11),out,inst_42062);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__40588__auto__ = null;
var cljs$core$async$state_machine__40588__auto____0 = (function (){
var statearr_42096 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42096[(0)] = cljs$core$async$state_machine__40588__auto__);

(statearr_42096[(1)] = (1));

return statearr_42096;
});
var cljs$core$async$state_machine__40588__auto____1 = (function (state_42080){
while(true){
var ret_value__40589__auto__ = (function (){try{while(true){
var result__40590__auto__ = switch__40587__auto__.call(null,state_42080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40590__auto__;
}
break;
}
}catch (e42097){if((e42097 instanceof Object)){
var ex__40591__auto__ = e42097;
var statearr_42098_42112 = state_42080;
(statearr_42098_42112[(5)] = ex__40591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42113 = state_42080;
state_42080 = G__42113;
continue;
} else {
return ret_value__40589__auto__;
}
break;
}
});
cljs$core$async$state_machine__40588__auto__ = function(state_42080){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40588__auto____1.call(this,state_42080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40588__auto____0;
cljs$core$async$state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40588__auto____1;
return cljs$core$async$state_machine__40588__auto__;
})()
})();
var state__40686__auto__ = (function (){var statearr_42099 = f__40685__auto__.call(null);
(statearr_42099[(6)] = c__40684__auto___42101);

return statearr_42099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40686__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42115 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42115 = (function (f,ch,meta42116){
this.f = f;
this.ch = ch;
this.meta42116 = meta42116;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42117,meta42116__$1){
var self__ = this;
var _42117__$1 = this;
return (new cljs.core.async.t_cljs$core$async42115(self__.f,self__.ch,meta42116__$1));
}));

(cljs.core.async.t_cljs$core$async42115.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42117){
var self__ = this;
var _42117__$1 = this;
return self__.meta42116;
}));

(cljs.core.async.t_cljs$core$async42115.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42115.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async42115.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async42115.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42115.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42118 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42118 = (function (f,ch,meta42116,_,fn1,meta42119){
this.f = f;
this.ch = ch;
this.meta42116 = meta42116;
this._ = _;
this.fn1 = fn1;
this.meta42119 = meta42119;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42120,meta42119__$1){
var self__ = this;
var _42120__$1 = this;
return (new cljs.core.async.t_cljs$core$async42118(self__.f,self__.ch,self__.meta42116,self__._,self__.fn1,meta42119__$1));
}));

(cljs.core.async.t_cljs$core$async42118.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42120){
var self__ = this;
var _42120__$1 = this;
return self__.meta42119;
}));

(cljs.core.async.t_cljs$core$async42118.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42118.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async42118.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42118.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__42114_SHARP_){
return f1.call(null,(((p1__42114_SHARP_ == null))?null:self__.f.call(null,p1__42114_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async42118.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42116","meta42116",1460361566,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async42115","cljs.core.async/t_cljs$core$async42115",-187026180,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta42119","meta42119",1125471295,null)], null);
}));

(cljs.core.async.t_cljs$core$async42118.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42118.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42118");

(cljs.core.async.t_cljs$core$async42118.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async42118");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42118.
 */
cljs.core.async.__GT_t_cljs$core$async42118 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42118(f__$1,ch__$1,meta42116__$1,___$2,fn1__$1,meta42119){
return (new cljs.core.async.t_cljs$core$async42118(f__$1,ch__$1,meta42116__$1,___$2,fn1__$1,meta42119));
});

}

return (new cljs.core.async.t_cljs$core$async42118(self__.f,self__.ch,self__.meta42116,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async42115.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42115.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async42115.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42116","meta42116",1460361566,null)], null);
}));

(cljs.core.async.t_cljs$core$async42115.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42115.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42115");

(cljs.core.async.t_cljs$core$async42115.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async42115");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42115.
 */
cljs.core.async.__GT_t_cljs$core$async42115 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42115(f__$1,ch__$1,meta42116){
return (new cljs.core.async.t_cljs$core$async42115(f__$1,ch__$1,meta42116));
});

}

return (new cljs.core.async.t_cljs$core$async42115(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42121 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42121 = (function (f,ch,meta42122){
this.f = f;
this.ch = ch;
this.meta42122 = meta42122;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42123,meta42122__$1){
var self__ = this;
var _42123__$1 = this;
return (new cljs.core.async.t_cljs$core$async42121(self__.f,self__.ch,meta42122__$1));
}));

(cljs.core.async.t_cljs$core$async42121.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42123){
var self__ = this;
var _42123__$1 = this;
return self__.meta42122;
}));

(cljs.core.async.t_cljs$core$async42121.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42121.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async42121.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42121.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async42121.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42121.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async42121.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42122","meta42122",-1520173393,null)], null);
}));

(cljs.core.async.t_cljs$core$async42121.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42121.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42121");

(cljs.core.async.t_cljs$core$async42121.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async42121");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42121.
 */
cljs.core.async.__GT_t_cljs$core$async42121 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async42121(f__$1,ch__$1,meta42122){
return (new cljs.core.async.t_cljs$core$async42121(f__$1,ch__$1,meta42122));
});

}

return (new cljs.core.async.t_cljs$core$async42121(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42124 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42124 = (function (p,ch,meta42125){
this.p = p;
this.ch = ch;
this.meta42125 = meta42125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42126,meta42125__$1){
var self__ = this;
var _42126__$1 = this;
return (new cljs.core.async.t_cljs$core$async42124(self__.p,self__.ch,meta42125__$1));
}));

(cljs.core.async.t_cljs$core$async42124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42126){
var self__ = this;
var _42126__$1 = this;
return self__.meta42125;
}));

(cljs.core.async.t_cljs$core$async42124.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42124.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async42124.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async42124.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42124.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async42124.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42124.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async42124.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42125","meta42125",1269431825,null)], null);
}));

(cljs.core.async.t_cljs$core$async42124.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42124.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42124");

(cljs.core.async.t_cljs$core$async42124.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async42124");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42124.
 */
cljs.core.async.__GT_t_cljs$core$async42124 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async42124(p__$1,ch__$1,meta42125){
return (new cljs.core.async.t_cljs$core$async42124(p__$1,ch__$1,meta42125));
});

}

return (new cljs.core.async.t_cljs$core$async42124(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__42128 = arguments.length;
switch (G__42128) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40684__auto___42168 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__40685__auto__ = (function (){var switch__40587__auto__ = (function (state_42149){
var state_val_42150 = (state_42149[(1)]);
if((state_val_42150 === (7))){
var inst_42145 = (state_42149[(2)]);
var state_42149__$1 = state_42149;
var statearr_42151_42169 = state_42149__$1;
(statearr_42151_42169[(2)] = inst_42145);

(statearr_42151_42169[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42150 === (1))){
var state_42149__$1 = state_42149;
var statearr_42152_42170 = state_42149__$1;
(statearr_42152_42170[(2)] = null);

(statearr_42152_42170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42150 === (4))){
var inst_42131 = (state_42149[(7)]);
var inst_42131__$1 = (state_42149[(2)]);
var inst_42132 = (inst_42131__$1 == null);
var state_42149__$1 = (function (){var statearr_42153 = state_42149;
(statearr_42153[(7)] = inst_42131__$1);

return statearr_42153;
})();
if(cljs.core.truth_(inst_42132)){
var statearr_42154_42171 = state_42149__$1;
(statearr_42154_42171[(1)] = (5));

} else {
var statearr_42155_42172 = state_42149__$1;
(statearr_42155_42172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42150 === (6))){
var inst_42131 = (state_42149[(7)]);
var inst_42136 = p.call(null,inst_42131);
var state_42149__$1 = state_42149;
if(cljs.core.truth_(inst_42136)){
var statearr_42156_42173 = state_42149__$1;
(statearr_42156_42173[(1)] = (8));

} else {
var statearr_42157_42174 = state_42149__$1;
(statearr_42157_42174[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42150 === (3))){
var inst_42147 = (state_42149[(2)]);
var state_42149__$1 = state_42149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42149__$1,inst_42147);
} else {
if((state_val_42150 === (2))){
var state_42149__$1 = state_42149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42149__$1,(4),ch);
} else {
if((state_val_42150 === (11))){
var inst_42139 = (state_42149[(2)]);
var state_42149__$1 = state_42149;
var statearr_42158_42175 = state_42149__$1;
(statearr_42158_42175[(2)] = inst_42139);

(statearr_42158_42175[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42150 === (9))){
var state_42149__$1 = state_42149;
var statearr_42159_42176 = state_42149__$1;
(statearr_42159_42176[(2)] = null);

(statearr_42159_42176[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42150 === (5))){
var inst_42134 = cljs.core.async.close_BANG_.call(null,out);
var state_42149__$1 = state_42149;
var statearr_42160_42177 = state_42149__$1;
(statearr_42160_42177[(2)] = inst_42134);

(statearr_42160_42177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42150 === (10))){
var inst_42142 = (state_42149[(2)]);
var state_42149__$1 = (function (){var statearr_42161 = state_42149;
(statearr_42161[(8)] = inst_42142);

return statearr_42161;
})();
var statearr_42162_42178 = state_42149__$1;
(statearr_42162_42178[(2)] = null);

(statearr_42162_42178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42150 === (8))){
var inst_42131 = (state_42149[(7)]);
var state_42149__$1 = state_42149;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42149__$1,(11),out,inst_42131);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__40588__auto__ = null;
var cljs$core$async$state_machine__40588__auto____0 = (function (){
var statearr_42163 = [null,null,null,null,null,null,null,null,null];
(statearr_42163[(0)] = cljs$core$async$state_machine__40588__auto__);

(statearr_42163[(1)] = (1));

return statearr_42163;
});
var cljs$core$async$state_machine__40588__auto____1 = (function (state_42149){
while(true){
var ret_value__40589__auto__ = (function (){try{while(true){
var result__40590__auto__ = switch__40587__auto__.call(null,state_42149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40590__auto__;
}
break;
}
}catch (e42164){if((e42164 instanceof Object)){
var ex__40591__auto__ = e42164;
var statearr_42165_42179 = state_42149;
(statearr_42165_42179[(5)] = ex__40591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42180 = state_42149;
state_42149 = G__42180;
continue;
} else {
return ret_value__40589__auto__;
}
break;
}
});
cljs$core$async$state_machine__40588__auto__ = function(state_42149){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40588__auto____1.call(this,state_42149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40588__auto____0;
cljs$core$async$state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40588__auto____1;
return cljs$core$async$state_machine__40588__auto__;
})()
})();
var state__40686__auto__ = (function (){var statearr_42166 = f__40685__auto__.call(null);
(statearr_42166[(6)] = c__40684__auto___42168);

return statearr_42166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40686__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__42182 = arguments.length;
switch (G__42182) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__40684__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__40685__auto__ = (function (){var switch__40587__auto__ = (function (state_42245){
var state_val_42246 = (state_42245[(1)]);
if((state_val_42246 === (7))){
var inst_42241 = (state_42245[(2)]);
var state_42245__$1 = state_42245;
var statearr_42247_42285 = state_42245__$1;
(statearr_42247_42285[(2)] = inst_42241);

(statearr_42247_42285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42246 === (20))){
var inst_42211 = (state_42245[(7)]);
var inst_42222 = (state_42245[(2)]);
var inst_42223 = cljs.core.next.call(null,inst_42211);
var inst_42197 = inst_42223;
var inst_42198 = null;
var inst_42199 = (0);
var inst_42200 = (0);
var state_42245__$1 = (function (){var statearr_42248 = state_42245;
(statearr_42248[(8)] = inst_42199);

(statearr_42248[(9)] = inst_42198);

(statearr_42248[(10)] = inst_42222);

(statearr_42248[(11)] = inst_42197);

(statearr_42248[(12)] = inst_42200);

return statearr_42248;
})();
var statearr_42249_42286 = state_42245__$1;
(statearr_42249_42286[(2)] = null);

(statearr_42249_42286[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42246 === (1))){
var state_42245__$1 = state_42245;
var statearr_42250_42287 = state_42245__$1;
(statearr_42250_42287[(2)] = null);

(statearr_42250_42287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42246 === (4))){
var inst_42186 = (state_42245[(13)]);
var inst_42186__$1 = (state_42245[(2)]);
var inst_42187 = (inst_42186__$1 == null);
var state_42245__$1 = (function (){var statearr_42251 = state_42245;
(statearr_42251[(13)] = inst_42186__$1);

return statearr_42251;
})();
if(cljs.core.truth_(inst_42187)){
var statearr_42252_42288 = state_42245__$1;
(statearr_42252_42288[(1)] = (5));

} else {
var statearr_42253_42289 = state_42245__$1;
(statearr_42253_42289[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42246 === (15))){
var state_42245__$1 = state_42245;
var statearr_42257_42290 = state_42245__$1;
(statearr_42257_42290[(2)] = null);

(statearr_42257_42290[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42246 === (21))){
var state_42245__$1 = state_42245;
var statearr_42258_42291 = state_42245__$1;
(statearr_42258_42291[(2)] = null);

(statearr_42258_42291[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42246 === (13))){
var inst_42199 = (state_42245[(8)]);
var inst_42198 = (state_42245[(9)]);
var inst_42197 = (state_42245[(11)]);
var inst_42200 = (state_42245[(12)]);
var inst_42207 = (state_42245[(2)]);
var inst_42208 = (inst_42200 + (1));
var tmp42254 = inst_42199;
var tmp42255 = inst_42198;
var tmp42256 = inst_42197;
var inst_42197__$1 = tmp42256;
var inst_42198__$1 = tmp42255;
var inst_42199__$1 = tmp42254;
var inst_42200__$1 = inst_42208;
var state_42245__$1 = (function (){var statearr_42259 = state_42245;
(statearr_42259[(8)] = inst_42199__$1);

(statearr_42259[(9)] = inst_42198__$1);

(statearr_42259[(14)] = inst_42207);

(statearr_42259[(11)] = inst_42197__$1);

(statearr_42259[(12)] = inst_42200__$1);

return statearr_42259;
})();
var statearr_42260_42292 = state_42245__$1;
(statearr_42260_42292[(2)] = null);

(statearr_42260_42292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42246 === (22))){
var state_42245__$1 = state_42245;
var statearr_42261_42293 = state_42245__$1;
(statearr_42261_42293[(2)] = null);

(statearr_42261_42293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42246 === (6))){
var inst_42186 = (state_42245[(13)]);
var inst_42195 = f.call(null,inst_42186);
var inst_42196 = cljs.core.seq.call(null,inst_42195);
var inst_42197 = inst_42196;
var inst_42198 = null;
var inst_42199 = (0);
var inst_42200 = (0);
var state_42245__$1 = (function (){var statearr_42262 = state_42245;
(statearr_42262[(8)] = inst_42199);

(statearr_42262[(9)] = inst_42198);

(statearr_42262[(11)] = inst_42197);

(statearr_42262[(12)] = inst_42200);

return statearr_42262;
})();
var statearr_42263_42294 = state_42245__$1;
(statearr_42263_42294[(2)] = null);

(statearr_42263_42294[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42246 === (17))){
var inst_42211 = (state_42245[(7)]);
var inst_42215 = cljs.core.chunk_first.call(null,inst_42211);
var inst_42216 = cljs.core.chunk_rest.call(null,inst_42211);
var inst_42217 = cljs.core.count.call(null,inst_42215);
var inst_42197 = inst_42216;
var inst_42198 = inst_42215;
var inst_42199 = inst_42217;
var inst_42200 = (0);
var state_42245__$1 = (function (){var statearr_42264 = state_42245;
(statearr_42264[(8)] = inst_42199);

(statearr_42264[(9)] = inst_42198);

(statearr_42264[(11)] = inst_42197);

(statearr_42264[(12)] = inst_42200);

return statearr_42264;
})();
var statearr_42265_42295 = state_42245__$1;
(statearr_42265_42295[(2)] = null);

(statearr_42265_42295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42246 === (3))){
var inst_42243 = (state_42245[(2)]);
var state_42245__$1 = state_42245;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42245__$1,inst_42243);
} else {
if((state_val_42246 === (12))){
var inst_42231 = (state_42245[(2)]);
var state_42245__$1 = state_42245;
var statearr_42266_42296 = state_42245__$1;
(statearr_42266_42296[(2)] = inst_42231);

(statearr_42266_42296[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42246 === (2))){
var state_42245__$1 = state_42245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42245__$1,(4),in$);
} else {
if((state_val_42246 === (23))){
var inst_42239 = (state_42245[(2)]);
var state_42245__$1 = state_42245;
var statearr_42267_42297 = state_42245__$1;
(statearr_42267_42297[(2)] = inst_42239);

(statearr_42267_42297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42246 === (19))){
var inst_42226 = (state_42245[(2)]);
var state_42245__$1 = state_42245;
var statearr_42268_42298 = state_42245__$1;
(statearr_42268_42298[(2)] = inst_42226);

(statearr_42268_42298[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42246 === (11))){
var inst_42211 = (state_42245[(7)]);
var inst_42197 = (state_42245[(11)]);
var inst_42211__$1 = cljs.core.seq.call(null,inst_42197);
var state_42245__$1 = (function (){var statearr_42269 = state_42245;
(statearr_42269[(7)] = inst_42211__$1);

return statearr_42269;
})();
if(inst_42211__$1){
var statearr_42270_42299 = state_42245__$1;
(statearr_42270_42299[(1)] = (14));

} else {
var statearr_42271_42300 = state_42245__$1;
(statearr_42271_42300[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42246 === (9))){
var inst_42233 = (state_42245[(2)]);
var inst_42234 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_42245__$1 = (function (){var statearr_42272 = state_42245;
(statearr_42272[(15)] = inst_42233);

return statearr_42272;
})();
if(cljs.core.truth_(inst_42234)){
var statearr_42273_42301 = state_42245__$1;
(statearr_42273_42301[(1)] = (21));

} else {
var statearr_42274_42302 = state_42245__$1;
(statearr_42274_42302[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42246 === (5))){
var inst_42189 = cljs.core.async.close_BANG_.call(null,out);
var state_42245__$1 = state_42245;
var statearr_42275_42303 = state_42245__$1;
(statearr_42275_42303[(2)] = inst_42189);

(statearr_42275_42303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42246 === (14))){
var inst_42211 = (state_42245[(7)]);
var inst_42213 = cljs.core.chunked_seq_QMARK_.call(null,inst_42211);
var state_42245__$1 = state_42245;
if(inst_42213){
var statearr_42276_42304 = state_42245__$1;
(statearr_42276_42304[(1)] = (17));

} else {
var statearr_42277_42305 = state_42245__$1;
(statearr_42277_42305[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42246 === (16))){
var inst_42229 = (state_42245[(2)]);
var state_42245__$1 = state_42245;
var statearr_42278_42306 = state_42245__$1;
(statearr_42278_42306[(2)] = inst_42229);

(statearr_42278_42306[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42246 === (10))){
var inst_42198 = (state_42245[(9)]);
var inst_42200 = (state_42245[(12)]);
var inst_42205 = cljs.core._nth.call(null,inst_42198,inst_42200);
var state_42245__$1 = state_42245;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42245__$1,(13),out,inst_42205);
} else {
if((state_val_42246 === (18))){
var inst_42211 = (state_42245[(7)]);
var inst_42220 = cljs.core.first.call(null,inst_42211);
var state_42245__$1 = state_42245;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42245__$1,(20),out,inst_42220);
} else {
if((state_val_42246 === (8))){
var inst_42199 = (state_42245[(8)]);
var inst_42200 = (state_42245[(12)]);
var inst_42202 = (inst_42200 < inst_42199);
var inst_42203 = inst_42202;
var state_42245__$1 = state_42245;
if(cljs.core.truth_(inst_42203)){
var statearr_42279_42307 = state_42245__$1;
(statearr_42279_42307[(1)] = (10));

} else {
var statearr_42280_42308 = state_42245__$1;
(statearr_42280_42308[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__40588__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__40588__auto____0 = (function (){
var statearr_42281 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42281[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__40588__auto__);

(statearr_42281[(1)] = (1));

return statearr_42281;
});
var cljs$core$async$mapcat_STAR__$_state_machine__40588__auto____1 = (function (state_42245){
while(true){
var ret_value__40589__auto__ = (function (){try{while(true){
var result__40590__auto__ = switch__40587__auto__.call(null,state_42245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40590__auto__;
}
break;
}
}catch (e42282){if((e42282 instanceof Object)){
var ex__40591__auto__ = e42282;
var statearr_42283_42309 = state_42245;
(statearr_42283_42309[(5)] = ex__40591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42310 = state_42245;
state_42245 = G__42310;
continue;
} else {
return ret_value__40589__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__40588__auto__ = function(state_42245){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__40588__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__40588__auto____1.call(this,state_42245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__40588__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__40588__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__40588__auto__;
})()
})();
var state__40686__auto__ = (function (){var statearr_42284 = f__40685__auto__.call(null);
(statearr_42284[(6)] = c__40684__auto__);

return statearr_42284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40686__auto__);
}));

return c__40684__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__42312 = arguments.length;
switch (G__42312) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__42315 = arguments.length;
switch (G__42315) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__42318 = arguments.length;
switch (G__42318) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40684__auto___42365 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__40685__auto__ = (function (){var switch__40587__auto__ = (function (state_42342){
var state_val_42343 = (state_42342[(1)]);
if((state_val_42343 === (7))){
var inst_42337 = (state_42342[(2)]);
var state_42342__$1 = state_42342;
var statearr_42344_42366 = state_42342__$1;
(statearr_42344_42366[(2)] = inst_42337);

(statearr_42344_42366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42343 === (1))){
var inst_42319 = null;
var state_42342__$1 = (function (){var statearr_42345 = state_42342;
(statearr_42345[(7)] = inst_42319);

return statearr_42345;
})();
var statearr_42346_42367 = state_42342__$1;
(statearr_42346_42367[(2)] = null);

(statearr_42346_42367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42343 === (4))){
var inst_42322 = (state_42342[(8)]);
var inst_42322__$1 = (state_42342[(2)]);
var inst_42323 = (inst_42322__$1 == null);
var inst_42324 = cljs.core.not.call(null,inst_42323);
var state_42342__$1 = (function (){var statearr_42347 = state_42342;
(statearr_42347[(8)] = inst_42322__$1);

return statearr_42347;
})();
if(inst_42324){
var statearr_42348_42368 = state_42342__$1;
(statearr_42348_42368[(1)] = (5));

} else {
var statearr_42349_42369 = state_42342__$1;
(statearr_42349_42369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42343 === (6))){
var state_42342__$1 = state_42342;
var statearr_42350_42370 = state_42342__$1;
(statearr_42350_42370[(2)] = null);

(statearr_42350_42370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42343 === (3))){
var inst_42339 = (state_42342[(2)]);
var inst_42340 = cljs.core.async.close_BANG_.call(null,out);
var state_42342__$1 = (function (){var statearr_42351 = state_42342;
(statearr_42351[(9)] = inst_42339);

return statearr_42351;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42342__$1,inst_42340);
} else {
if((state_val_42343 === (2))){
var state_42342__$1 = state_42342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42342__$1,(4),ch);
} else {
if((state_val_42343 === (11))){
var inst_42322 = (state_42342[(8)]);
var inst_42331 = (state_42342[(2)]);
var inst_42319 = inst_42322;
var state_42342__$1 = (function (){var statearr_42352 = state_42342;
(statearr_42352[(10)] = inst_42331);

(statearr_42352[(7)] = inst_42319);

return statearr_42352;
})();
var statearr_42353_42371 = state_42342__$1;
(statearr_42353_42371[(2)] = null);

(statearr_42353_42371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42343 === (9))){
var inst_42322 = (state_42342[(8)]);
var state_42342__$1 = state_42342;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42342__$1,(11),out,inst_42322);
} else {
if((state_val_42343 === (5))){
var inst_42322 = (state_42342[(8)]);
var inst_42319 = (state_42342[(7)]);
var inst_42326 = cljs.core._EQ_.call(null,inst_42322,inst_42319);
var state_42342__$1 = state_42342;
if(inst_42326){
var statearr_42355_42372 = state_42342__$1;
(statearr_42355_42372[(1)] = (8));

} else {
var statearr_42356_42373 = state_42342__$1;
(statearr_42356_42373[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42343 === (10))){
var inst_42334 = (state_42342[(2)]);
var state_42342__$1 = state_42342;
var statearr_42357_42374 = state_42342__$1;
(statearr_42357_42374[(2)] = inst_42334);

(statearr_42357_42374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42343 === (8))){
var inst_42319 = (state_42342[(7)]);
var tmp42354 = inst_42319;
var inst_42319__$1 = tmp42354;
var state_42342__$1 = (function (){var statearr_42358 = state_42342;
(statearr_42358[(7)] = inst_42319__$1);

return statearr_42358;
})();
var statearr_42359_42375 = state_42342__$1;
(statearr_42359_42375[(2)] = null);

(statearr_42359_42375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__40588__auto__ = null;
var cljs$core$async$state_machine__40588__auto____0 = (function (){
var statearr_42360 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42360[(0)] = cljs$core$async$state_machine__40588__auto__);

(statearr_42360[(1)] = (1));

return statearr_42360;
});
var cljs$core$async$state_machine__40588__auto____1 = (function (state_42342){
while(true){
var ret_value__40589__auto__ = (function (){try{while(true){
var result__40590__auto__ = switch__40587__auto__.call(null,state_42342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40590__auto__;
}
break;
}
}catch (e42361){if((e42361 instanceof Object)){
var ex__40591__auto__ = e42361;
var statearr_42362_42376 = state_42342;
(statearr_42362_42376[(5)] = ex__40591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42377 = state_42342;
state_42342 = G__42377;
continue;
} else {
return ret_value__40589__auto__;
}
break;
}
});
cljs$core$async$state_machine__40588__auto__ = function(state_42342){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40588__auto____1.call(this,state_42342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40588__auto____0;
cljs$core$async$state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40588__auto____1;
return cljs$core$async$state_machine__40588__auto__;
})()
})();
var state__40686__auto__ = (function (){var statearr_42363 = f__40685__auto__.call(null);
(statearr_42363[(6)] = c__40684__auto___42365);

return statearr_42363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40686__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__42379 = arguments.length;
switch (G__42379) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40684__auto___42445 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__40685__auto__ = (function (){var switch__40587__auto__ = (function (state_42417){
var state_val_42418 = (state_42417[(1)]);
if((state_val_42418 === (7))){
var inst_42413 = (state_42417[(2)]);
var state_42417__$1 = state_42417;
var statearr_42419_42446 = state_42417__$1;
(statearr_42419_42446[(2)] = inst_42413);

(statearr_42419_42446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42418 === (1))){
var inst_42380 = (new Array(n));
var inst_42381 = inst_42380;
var inst_42382 = (0);
var state_42417__$1 = (function (){var statearr_42420 = state_42417;
(statearr_42420[(7)] = inst_42382);

(statearr_42420[(8)] = inst_42381);

return statearr_42420;
})();
var statearr_42421_42447 = state_42417__$1;
(statearr_42421_42447[(2)] = null);

(statearr_42421_42447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42418 === (4))){
var inst_42385 = (state_42417[(9)]);
var inst_42385__$1 = (state_42417[(2)]);
var inst_42386 = (inst_42385__$1 == null);
var inst_42387 = cljs.core.not.call(null,inst_42386);
var state_42417__$1 = (function (){var statearr_42422 = state_42417;
(statearr_42422[(9)] = inst_42385__$1);

return statearr_42422;
})();
if(inst_42387){
var statearr_42423_42448 = state_42417__$1;
(statearr_42423_42448[(1)] = (5));

} else {
var statearr_42424_42449 = state_42417__$1;
(statearr_42424_42449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42418 === (15))){
var inst_42407 = (state_42417[(2)]);
var state_42417__$1 = state_42417;
var statearr_42425_42450 = state_42417__$1;
(statearr_42425_42450[(2)] = inst_42407);

(statearr_42425_42450[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42418 === (13))){
var state_42417__$1 = state_42417;
var statearr_42426_42451 = state_42417__$1;
(statearr_42426_42451[(2)] = null);

(statearr_42426_42451[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42418 === (6))){
var inst_42382 = (state_42417[(7)]);
var inst_42403 = (inst_42382 > (0));
var state_42417__$1 = state_42417;
if(cljs.core.truth_(inst_42403)){
var statearr_42427_42452 = state_42417__$1;
(statearr_42427_42452[(1)] = (12));

} else {
var statearr_42428_42453 = state_42417__$1;
(statearr_42428_42453[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42418 === (3))){
var inst_42415 = (state_42417[(2)]);
var state_42417__$1 = state_42417;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42417__$1,inst_42415);
} else {
if((state_val_42418 === (12))){
var inst_42381 = (state_42417[(8)]);
var inst_42405 = cljs.core.vec.call(null,inst_42381);
var state_42417__$1 = state_42417;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42417__$1,(15),out,inst_42405);
} else {
if((state_val_42418 === (2))){
var state_42417__$1 = state_42417;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42417__$1,(4),ch);
} else {
if((state_val_42418 === (11))){
var inst_42397 = (state_42417[(2)]);
var inst_42398 = (new Array(n));
var inst_42381 = inst_42398;
var inst_42382 = (0);
var state_42417__$1 = (function (){var statearr_42429 = state_42417;
(statearr_42429[(7)] = inst_42382);

(statearr_42429[(8)] = inst_42381);

(statearr_42429[(10)] = inst_42397);

return statearr_42429;
})();
var statearr_42430_42454 = state_42417__$1;
(statearr_42430_42454[(2)] = null);

(statearr_42430_42454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42418 === (9))){
var inst_42381 = (state_42417[(8)]);
var inst_42395 = cljs.core.vec.call(null,inst_42381);
var state_42417__$1 = state_42417;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42417__$1,(11),out,inst_42395);
} else {
if((state_val_42418 === (5))){
var inst_42385 = (state_42417[(9)]);
var inst_42382 = (state_42417[(7)]);
var inst_42381 = (state_42417[(8)]);
var inst_42390 = (state_42417[(11)]);
var inst_42389 = (inst_42381[inst_42382] = inst_42385);
var inst_42390__$1 = (inst_42382 + (1));
var inst_42391 = (inst_42390__$1 < n);
var state_42417__$1 = (function (){var statearr_42431 = state_42417;
(statearr_42431[(12)] = inst_42389);

(statearr_42431[(11)] = inst_42390__$1);

return statearr_42431;
})();
if(cljs.core.truth_(inst_42391)){
var statearr_42432_42455 = state_42417__$1;
(statearr_42432_42455[(1)] = (8));

} else {
var statearr_42433_42456 = state_42417__$1;
(statearr_42433_42456[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42418 === (14))){
var inst_42410 = (state_42417[(2)]);
var inst_42411 = cljs.core.async.close_BANG_.call(null,out);
var state_42417__$1 = (function (){var statearr_42435 = state_42417;
(statearr_42435[(13)] = inst_42410);

return statearr_42435;
})();
var statearr_42436_42457 = state_42417__$1;
(statearr_42436_42457[(2)] = inst_42411);

(statearr_42436_42457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42418 === (10))){
var inst_42401 = (state_42417[(2)]);
var state_42417__$1 = state_42417;
var statearr_42437_42458 = state_42417__$1;
(statearr_42437_42458[(2)] = inst_42401);

(statearr_42437_42458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42418 === (8))){
var inst_42381 = (state_42417[(8)]);
var inst_42390 = (state_42417[(11)]);
var tmp42434 = inst_42381;
var inst_42381__$1 = tmp42434;
var inst_42382 = inst_42390;
var state_42417__$1 = (function (){var statearr_42438 = state_42417;
(statearr_42438[(7)] = inst_42382);

(statearr_42438[(8)] = inst_42381__$1);

return statearr_42438;
})();
var statearr_42439_42459 = state_42417__$1;
(statearr_42439_42459[(2)] = null);

(statearr_42439_42459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__40588__auto__ = null;
var cljs$core$async$state_machine__40588__auto____0 = (function (){
var statearr_42440 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42440[(0)] = cljs$core$async$state_machine__40588__auto__);

(statearr_42440[(1)] = (1));

return statearr_42440;
});
var cljs$core$async$state_machine__40588__auto____1 = (function (state_42417){
while(true){
var ret_value__40589__auto__ = (function (){try{while(true){
var result__40590__auto__ = switch__40587__auto__.call(null,state_42417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40590__auto__;
}
break;
}
}catch (e42441){if((e42441 instanceof Object)){
var ex__40591__auto__ = e42441;
var statearr_42442_42460 = state_42417;
(statearr_42442_42460[(5)] = ex__40591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42461 = state_42417;
state_42417 = G__42461;
continue;
} else {
return ret_value__40589__auto__;
}
break;
}
});
cljs$core$async$state_machine__40588__auto__ = function(state_42417){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40588__auto____1.call(this,state_42417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40588__auto____0;
cljs$core$async$state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40588__auto____1;
return cljs$core$async$state_machine__40588__auto__;
})()
})();
var state__40686__auto__ = (function (){var statearr_42443 = f__40685__auto__.call(null);
(statearr_42443[(6)] = c__40684__auto___42445);

return statearr_42443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40686__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__42463 = arguments.length;
switch (G__42463) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40684__auto___42540 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__40685__auto__ = (function (){var switch__40587__auto__ = (function (state_42508){
var state_val_42509 = (state_42508[(1)]);
if((state_val_42509 === (7))){
var inst_42504 = (state_42508[(2)]);
var state_42508__$1 = state_42508;
var statearr_42510_42541 = state_42508__$1;
(statearr_42510_42541[(2)] = inst_42504);

(statearr_42510_42541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42509 === (1))){
var inst_42464 = [];
var inst_42465 = inst_42464;
var inst_42466 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_42508__$1 = (function (){var statearr_42511 = state_42508;
(statearr_42511[(7)] = inst_42466);

(statearr_42511[(8)] = inst_42465);

return statearr_42511;
})();
var statearr_42512_42542 = state_42508__$1;
(statearr_42512_42542[(2)] = null);

(statearr_42512_42542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42509 === (4))){
var inst_42469 = (state_42508[(9)]);
var inst_42469__$1 = (state_42508[(2)]);
var inst_42470 = (inst_42469__$1 == null);
var inst_42471 = cljs.core.not.call(null,inst_42470);
var state_42508__$1 = (function (){var statearr_42513 = state_42508;
(statearr_42513[(9)] = inst_42469__$1);

return statearr_42513;
})();
if(inst_42471){
var statearr_42514_42543 = state_42508__$1;
(statearr_42514_42543[(1)] = (5));

} else {
var statearr_42515_42544 = state_42508__$1;
(statearr_42515_42544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42509 === (15))){
var inst_42465 = (state_42508[(8)]);
var inst_42496 = cljs.core.vec.call(null,inst_42465);
var state_42508__$1 = state_42508;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42508__$1,(18),out,inst_42496);
} else {
if((state_val_42509 === (13))){
var inst_42491 = (state_42508[(2)]);
var state_42508__$1 = state_42508;
var statearr_42516_42545 = state_42508__$1;
(statearr_42516_42545[(2)] = inst_42491);

(statearr_42516_42545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42509 === (6))){
var inst_42465 = (state_42508[(8)]);
var inst_42493 = inst_42465.length;
var inst_42494 = (inst_42493 > (0));
var state_42508__$1 = state_42508;
if(cljs.core.truth_(inst_42494)){
var statearr_42517_42546 = state_42508__$1;
(statearr_42517_42546[(1)] = (15));

} else {
var statearr_42518_42547 = state_42508__$1;
(statearr_42518_42547[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42509 === (17))){
var inst_42501 = (state_42508[(2)]);
var inst_42502 = cljs.core.async.close_BANG_.call(null,out);
var state_42508__$1 = (function (){var statearr_42519 = state_42508;
(statearr_42519[(10)] = inst_42501);

return statearr_42519;
})();
var statearr_42520_42548 = state_42508__$1;
(statearr_42520_42548[(2)] = inst_42502);

(statearr_42520_42548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42509 === (3))){
var inst_42506 = (state_42508[(2)]);
var state_42508__$1 = state_42508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42508__$1,inst_42506);
} else {
if((state_val_42509 === (12))){
var inst_42465 = (state_42508[(8)]);
var inst_42484 = cljs.core.vec.call(null,inst_42465);
var state_42508__$1 = state_42508;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42508__$1,(14),out,inst_42484);
} else {
if((state_val_42509 === (2))){
var state_42508__$1 = state_42508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42508__$1,(4),ch);
} else {
if((state_val_42509 === (11))){
var inst_42465 = (state_42508[(8)]);
var inst_42469 = (state_42508[(9)]);
var inst_42473 = (state_42508[(11)]);
var inst_42481 = inst_42465.push(inst_42469);
var tmp42521 = inst_42465;
var inst_42465__$1 = tmp42521;
var inst_42466 = inst_42473;
var state_42508__$1 = (function (){var statearr_42522 = state_42508;
(statearr_42522[(7)] = inst_42466);

(statearr_42522[(12)] = inst_42481);

(statearr_42522[(8)] = inst_42465__$1);

return statearr_42522;
})();
var statearr_42523_42549 = state_42508__$1;
(statearr_42523_42549[(2)] = null);

(statearr_42523_42549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42509 === (9))){
var inst_42466 = (state_42508[(7)]);
var inst_42477 = cljs.core.keyword_identical_QMARK_.call(null,inst_42466,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_42508__$1 = state_42508;
var statearr_42524_42550 = state_42508__$1;
(statearr_42524_42550[(2)] = inst_42477);

(statearr_42524_42550[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42509 === (5))){
var inst_42466 = (state_42508[(7)]);
var inst_42474 = (state_42508[(13)]);
var inst_42469 = (state_42508[(9)]);
var inst_42473 = (state_42508[(11)]);
var inst_42473__$1 = f.call(null,inst_42469);
var inst_42474__$1 = cljs.core._EQ_.call(null,inst_42473__$1,inst_42466);
var state_42508__$1 = (function (){var statearr_42525 = state_42508;
(statearr_42525[(13)] = inst_42474__$1);

(statearr_42525[(11)] = inst_42473__$1);

return statearr_42525;
})();
if(inst_42474__$1){
var statearr_42526_42551 = state_42508__$1;
(statearr_42526_42551[(1)] = (8));

} else {
var statearr_42527_42552 = state_42508__$1;
(statearr_42527_42552[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42509 === (14))){
var inst_42469 = (state_42508[(9)]);
var inst_42473 = (state_42508[(11)]);
var inst_42486 = (state_42508[(2)]);
var inst_42487 = [];
var inst_42488 = inst_42487.push(inst_42469);
var inst_42465 = inst_42487;
var inst_42466 = inst_42473;
var state_42508__$1 = (function (){var statearr_42528 = state_42508;
(statearr_42528[(7)] = inst_42466);

(statearr_42528[(8)] = inst_42465);

(statearr_42528[(14)] = inst_42488);

(statearr_42528[(15)] = inst_42486);

return statearr_42528;
})();
var statearr_42529_42553 = state_42508__$1;
(statearr_42529_42553[(2)] = null);

(statearr_42529_42553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42509 === (16))){
var state_42508__$1 = state_42508;
var statearr_42530_42554 = state_42508__$1;
(statearr_42530_42554[(2)] = null);

(statearr_42530_42554[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42509 === (10))){
var inst_42479 = (state_42508[(2)]);
var state_42508__$1 = state_42508;
if(cljs.core.truth_(inst_42479)){
var statearr_42531_42555 = state_42508__$1;
(statearr_42531_42555[(1)] = (11));

} else {
var statearr_42532_42556 = state_42508__$1;
(statearr_42532_42556[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42509 === (18))){
var inst_42498 = (state_42508[(2)]);
var state_42508__$1 = state_42508;
var statearr_42533_42557 = state_42508__$1;
(statearr_42533_42557[(2)] = inst_42498);

(statearr_42533_42557[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42509 === (8))){
var inst_42474 = (state_42508[(13)]);
var state_42508__$1 = state_42508;
var statearr_42534_42558 = state_42508__$1;
(statearr_42534_42558[(2)] = inst_42474);

(statearr_42534_42558[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__40588__auto__ = null;
var cljs$core$async$state_machine__40588__auto____0 = (function (){
var statearr_42535 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42535[(0)] = cljs$core$async$state_machine__40588__auto__);

(statearr_42535[(1)] = (1));

return statearr_42535;
});
var cljs$core$async$state_machine__40588__auto____1 = (function (state_42508){
while(true){
var ret_value__40589__auto__ = (function (){try{while(true){
var result__40590__auto__ = switch__40587__auto__.call(null,state_42508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40590__auto__;
}
break;
}
}catch (e42536){if((e42536 instanceof Object)){
var ex__40591__auto__ = e42536;
var statearr_42537_42559 = state_42508;
(statearr_42537_42559[(5)] = ex__40591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42560 = state_42508;
state_42508 = G__42560;
continue;
} else {
return ret_value__40589__auto__;
}
break;
}
});
cljs$core$async$state_machine__40588__auto__ = function(state_42508){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40588__auto____1.call(this,state_42508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40588__auto____0;
cljs$core$async$state_machine__40588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40588__auto____1;
return cljs$core$async$state_machine__40588__auto__;
})()
})();
var state__40686__auto__ = (function (){var statearr_42538 = f__40685__auto__.call(null);
(statearr_42538[(6)] = c__40684__auto___42540);

return statearr_42538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40686__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
