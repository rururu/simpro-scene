// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__34687 = arguments.length;
switch (G__34687) {
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

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34688 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34688 = (function (f,blockable,meta34689){
this.f = f;
this.blockable = blockable;
this.meta34689 = meta34689;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34688.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34690,meta34689__$1){
var self__ = this;
var _34690__$1 = this;
return (new cljs.core.async.t_cljs$core$async34688(self__.f,self__.blockable,meta34689__$1));
});

cljs.core.async.t_cljs$core$async34688.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34690){
var self__ = this;
var _34690__$1 = this;
return self__.meta34689;
});

cljs.core.async.t_cljs$core$async34688.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34688.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34688.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async34688.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async34688.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34689","meta34689",-1828872425,null)], null);
});

cljs.core.async.t_cljs$core$async34688.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34688.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34688";

cljs.core.async.t_cljs$core$async34688.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async34688");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34688.
 */
cljs.core.async.__GT_t_cljs$core$async34688 = (function cljs$core$async$__GT_t_cljs$core$async34688(f__$1,blockable__$1,meta34689){
return (new cljs.core.async.t_cljs$core$async34688(f__$1,blockable__$1,meta34689));
});

}

return (new cljs.core.async.t_cljs$core$async34688(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

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
var G__34694 = arguments.length;
switch (G__34694) {
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

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__34697 = arguments.length;
switch (G__34697) {
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

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

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
var G__34700 = arguments.length;
switch (G__34700) {
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

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_34702 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_34702);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_34702,ret){
return (function (){
return fn1.call(null,val_34702);
});})(val_34702,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

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
var G__34704 = arguments.length;
switch (G__34704) {
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

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5733__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4518__auto___34706 = n;
var x_34707 = (0);
while(true){
if((x_34707 < n__4518__auto___34706)){
(a[x_34707] = (0));

var G__34708 = (x_34707 + (1));
x_34707 = G__34708;
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

var G__34709 = (i + (1));
i = G__34709;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34710 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34710 = (function (flag,meta34711){
this.flag = flag;
this.meta34711 = meta34711;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34712,meta34711__$1){
var self__ = this;
var _34712__$1 = this;
return (new cljs.core.async.t_cljs$core$async34710(self__.flag,meta34711__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async34710.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34712){
var self__ = this;
var _34712__$1 = this;
return self__.meta34711;
});})(flag))
;

cljs.core.async.t_cljs$core$async34710.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34710.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async34710.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34710.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34710.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34711","meta34711",752099536,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async34710.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34710.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34710";

cljs.core.async.t_cljs$core$async34710.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async34710");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34710.
 */
cljs.core.async.__GT_t_cljs$core$async34710 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34710(flag__$1,meta34711){
return (new cljs.core.async.t_cljs$core$async34710(flag__$1,meta34711));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async34710(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34713 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34713 = (function (flag,cb,meta34714){
this.flag = flag;
this.cb = cb;
this.meta34714 = meta34714;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34715,meta34714__$1){
var self__ = this;
var _34715__$1 = this;
return (new cljs.core.async.t_cljs$core$async34713(self__.flag,self__.cb,meta34714__$1));
});

cljs.core.async.t_cljs$core$async34713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34715){
var self__ = this;
var _34715__$1 = this;
return self__.meta34714;
});

cljs.core.async.t_cljs$core$async34713.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34713.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async34713.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34713.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async34713.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34714","meta34714",83683884,null)], null);
});

cljs.core.async.t_cljs$core$async34713.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34713.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34713";

cljs.core.async.t_cljs$core$async34713.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async34713");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34713.
 */
cljs.core.async.__GT_t_cljs$core$async34713 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34713(flag__$1,cb__$1,meta34714){
return (new cljs.core.async.t_cljs$core$async34713(flag__$1,cb__$1,meta34714));
});

}

return (new cljs.core.async.t_cljs$core$async34713(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34716_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34716_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34717_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34717_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4047__auto__ = wport;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34718 = (i + (1));
i = G__34718;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4047__auto__ = ret;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4036__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
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
var args__4647__auto__ = [];
var len__4641__auto___34724 = arguments.length;
var i__4642__auto___34725 = (0);
while(true){
if((i__4642__auto___34725 < len__4641__auto___34724)){
args__4647__auto__.push((arguments[i__4642__auto___34725]));

var G__34726 = (i__4642__auto___34725 + (1));
i__4642__auto___34725 = G__34726;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34721){
var map__34722 = p__34721;
var map__34722__$1 = (((((!((map__34722 == null))))?(((((map__34722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34722):map__34722);
var opts = map__34722__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34719){
var G__34720 = cljs.core.first.call(null,seq34719);
var seq34719__$1 = cljs.core.next.call(null,seq34719);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34720,seq34719__$1);
});

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
var G__34728 = arguments.length;
switch (G__34728) {
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

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24441__auto___34774 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto___34774){
return (function (){
var f__24442__auto__ = (function (){var switch__24346__auto__ = ((function (c__24441__auto___34774){
return (function (state_34752){
var state_val_34753 = (state_34752[(1)]);
if((state_val_34753 === (7))){
var inst_34748 = (state_34752[(2)]);
var state_34752__$1 = state_34752;
var statearr_34754_34775 = state_34752__$1;
(statearr_34754_34775[(2)] = inst_34748);

(statearr_34754_34775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (1))){
var state_34752__$1 = state_34752;
var statearr_34755_34776 = state_34752__$1;
(statearr_34755_34776[(2)] = null);

(statearr_34755_34776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (4))){
var inst_34731 = (state_34752[(7)]);
var inst_34731__$1 = (state_34752[(2)]);
var inst_34732 = (inst_34731__$1 == null);
var state_34752__$1 = (function (){var statearr_34756 = state_34752;
(statearr_34756[(7)] = inst_34731__$1);

return statearr_34756;
})();
if(cljs.core.truth_(inst_34732)){
var statearr_34757_34777 = state_34752__$1;
(statearr_34757_34777[(1)] = (5));

} else {
var statearr_34758_34778 = state_34752__$1;
(statearr_34758_34778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (13))){
var state_34752__$1 = state_34752;
var statearr_34759_34779 = state_34752__$1;
(statearr_34759_34779[(2)] = null);

(statearr_34759_34779[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (6))){
var inst_34731 = (state_34752[(7)]);
var state_34752__$1 = state_34752;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34752__$1,(11),to,inst_34731);
} else {
if((state_val_34753 === (3))){
var inst_34750 = (state_34752[(2)]);
var state_34752__$1 = state_34752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34752__$1,inst_34750);
} else {
if((state_val_34753 === (12))){
var state_34752__$1 = state_34752;
var statearr_34760_34780 = state_34752__$1;
(statearr_34760_34780[(2)] = null);

(statearr_34760_34780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (2))){
var state_34752__$1 = state_34752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34752__$1,(4),from);
} else {
if((state_val_34753 === (11))){
var inst_34741 = (state_34752[(2)]);
var state_34752__$1 = state_34752;
if(cljs.core.truth_(inst_34741)){
var statearr_34761_34781 = state_34752__$1;
(statearr_34761_34781[(1)] = (12));

} else {
var statearr_34762_34782 = state_34752__$1;
(statearr_34762_34782[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (9))){
var state_34752__$1 = state_34752;
var statearr_34763_34783 = state_34752__$1;
(statearr_34763_34783[(2)] = null);

(statearr_34763_34783[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (5))){
var state_34752__$1 = state_34752;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34764_34784 = state_34752__$1;
(statearr_34764_34784[(1)] = (8));

} else {
var statearr_34765_34785 = state_34752__$1;
(statearr_34765_34785[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (14))){
var inst_34746 = (state_34752[(2)]);
var state_34752__$1 = state_34752;
var statearr_34766_34786 = state_34752__$1;
(statearr_34766_34786[(2)] = inst_34746);

(statearr_34766_34786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (10))){
var inst_34738 = (state_34752[(2)]);
var state_34752__$1 = state_34752;
var statearr_34767_34787 = state_34752__$1;
(statearr_34767_34787[(2)] = inst_34738);

(statearr_34767_34787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (8))){
var inst_34735 = cljs.core.async.close_BANG_.call(null,to);
var state_34752__$1 = state_34752;
var statearr_34768_34788 = state_34752__$1;
(statearr_34768_34788[(2)] = inst_34735);

(statearr_34768_34788[(1)] = (10));


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
});})(c__24441__auto___34774))
;
return ((function (switch__24346__auto__,c__24441__auto___34774){
return (function() {
var cljs$core$async$state_machine__24347__auto__ = null;
var cljs$core$async$state_machine__24347__auto____0 = (function (){
var statearr_34769 = [null,null,null,null,null,null,null,null];
(statearr_34769[(0)] = cljs$core$async$state_machine__24347__auto__);

(statearr_34769[(1)] = (1));

return statearr_34769;
});
var cljs$core$async$state_machine__24347__auto____1 = (function (state_34752){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_34752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e34770){if((e34770 instanceof Object)){
var ex__24350__auto__ = e34770;
var statearr_34771_34789 = state_34752;
(statearr_34771_34789[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34790 = state_34752;
state_34752 = G__34790;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
cljs$core$async$state_machine__24347__auto__ = function(state_34752){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24347__auto____1.call(this,state_34752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24347__auto____0;
cljs$core$async$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24347__auto____1;
return cljs$core$async$state_machine__24347__auto__;
})()
;})(switch__24346__auto__,c__24441__auto___34774))
})();
var state__24443__auto__ = (function (){var statearr_34772 = f__24442__auto__.call(null);
(statearr_34772[(6)] = c__24441__auto___34774);

return statearr_34772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto___34774))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__34791){
var vec__34792 = p__34791;
var v = cljs.core.nth.call(null,vec__34792,(0),null);
var p = cljs.core.nth.call(null,vec__34792,(1),null);
var job = vec__34792;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24441__auto___34963 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto___34963,res,vec__34792,v,p,job,jobs,results){
return (function (){
var f__24442__auto__ = (function (){var switch__24346__auto__ = ((function (c__24441__auto___34963,res,vec__34792,v,p,job,jobs,results){
return (function (state_34799){
var state_val_34800 = (state_34799[(1)]);
if((state_val_34800 === (1))){
var state_34799__$1 = state_34799;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34799__$1,(2),res,v);
} else {
if((state_val_34800 === (2))){
var inst_34796 = (state_34799[(2)]);
var inst_34797 = cljs.core.async.close_BANG_.call(null,res);
var state_34799__$1 = (function (){var statearr_34801 = state_34799;
(statearr_34801[(7)] = inst_34796);

return statearr_34801;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34799__$1,inst_34797);
} else {
return null;
}
}
});})(c__24441__auto___34963,res,vec__34792,v,p,job,jobs,results))
;
return ((function (switch__24346__auto__,c__24441__auto___34963,res,vec__34792,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____0 = (function (){
var statearr_34802 = [null,null,null,null,null,null,null,null];
(statearr_34802[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__);

(statearr_34802[(1)] = (1));

return statearr_34802;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____1 = (function (state_34799){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_34799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e34803){if((e34803 instanceof Object)){
var ex__24350__auto__ = e34803;
var statearr_34804_34964 = state_34799;
(statearr_34804_34964[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34965 = state_34799;
state_34799 = G__34965;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__ = function(state_34799){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____1.call(this,state_34799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__;
})()
;})(switch__24346__auto__,c__24441__auto___34963,res,vec__34792,v,p,job,jobs,results))
})();
var state__24443__auto__ = (function (){var statearr_34805 = f__24442__auto__.call(null);
(statearr_34805[(6)] = c__24441__auto___34963);

return statearr_34805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto___34963,res,vec__34792,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34806){
var vec__34807 = p__34806;
var v = cljs.core.nth.call(null,vec__34807,(0),null);
var p = cljs.core.nth.call(null,vec__34807,(1),null);
var job = vec__34807;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4518__auto___34966 = n;
var __34967 = (0);
while(true){
if((__34967 < n__4518__auto___34966)){
var G__34810_34968 = type;
var G__34810_34969__$1 = (((G__34810_34968 instanceof cljs.core.Keyword))?G__34810_34968.fqn:null);
switch (G__34810_34969__$1) {
case "compute":
var c__24441__auto___34971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34967,c__24441__auto___34971,G__34810_34968,G__34810_34969__$1,n__4518__auto___34966,jobs,results,process,async){
return (function (){
var f__24442__auto__ = (function (){var switch__24346__auto__ = ((function (__34967,c__24441__auto___34971,G__34810_34968,G__34810_34969__$1,n__4518__auto___34966,jobs,results,process,async){
return (function (state_34823){
var state_val_34824 = (state_34823[(1)]);
if((state_val_34824 === (1))){
var state_34823__$1 = state_34823;
var statearr_34825_34972 = state_34823__$1;
(statearr_34825_34972[(2)] = null);

(statearr_34825_34972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34824 === (2))){
var state_34823__$1 = state_34823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34823__$1,(4),jobs);
} else {
if((state_val_34824 === (3))){
var inst_34821 = (state_34823[(2)]);
var state_34823__$1 = state_34823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34823__$1,inst_34821);
} else {
if((state_val_34824 === (4))){
var inst_34813 = (state_34823[(2)]);
var inst_34814 = process.call(null,inst_34813);
var state_34823__$1 = state_34823;
if(cljs.core.truth_(inst_34814)){
var statearr_34826_34973 = state_34823__$1;
(statearr_34826_34973[(1)] = (5));

} else {
var statearr_34827_34974 = state_34823__$1;
(statearr_34827_34974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34824 === (5))){
var state_34823__$1 = state_34823;
var statearr_34828_34975 = state_34823__$1;
(statearr_34828_34975[(2)] = null);

(statearr_34828_34975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34824 === (6))){
var state_34823__$1 = state_34823;
var statearr_34829_34976 = state_34823__$1;
(statearr_34829_34976[(2)] = null);

(statearr_34829_34976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34824 === (7))){
var inst_34819 = (state_34823[(2)]);
var state_34823__$1 = state_34823;
var statearr_34830_34977 = state_34823__$1;
(statearr_34830_34977[(2)] = inst_34819);

(statearr_34830_34977[(1)] = (3));


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
});})(__34967,c__24441__auto___34971,G__34810_34968,G__34810_34969__$1,n__4518__auto___34966,jobs,results,process,async))
;
return ((function (__34967,switch__24346__auto__,c__24441__auto___34971,G__34810_34968,G__34810_34969__$1,n__4518__auto___34966,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____0 = (function (){
var statearr_34831 = [null,null,null,null,null,null,null];
(statearr_34831[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__);

(statearr_34831[(1)] = (1));

return statearr_34831;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____1 = (function (state_34823){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_34823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e34832){if((e34832 instanceof Object)){
var ex__24350__auto__ = e34832;
var statearr_34833_34978 = state_34823;
(statearr_34833_34978[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34979 = state_34823;
state_34823 = G__34979;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__ = function(state_34823){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____1.call(this,state_34823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__;
})()
;})(__34967,switch__24346__auto__,c__24441__auto___34971,G__34810_34968,G__34810_34969__$1,n__4518__auto___34966,jobs,results,process,async))
})();
var state__24443__auto__ = (function (){var statearr_34834 = f__24442__auto__.call(null);
(statearr_34834[(6)] = c__24441__auto___34971);

return statearr_34834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(__34967,c__24441__auto___34971,G__34810_34968,G__34810_34969__$1,n__4518__auto___34966,jobs,results,process,async))
);


break;
case "async":
var c__24441__auto___34980 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34967,c__24441__auto___34980,G__34810_34968,G__34810_34969__$1,n__4518__auto___34966,jobs,results,process,async){
return (function (){
var f__24442__auto__ = (function (){var switch__24346__auto__ = ((function (__34967,c__24441__auto___34980,G__34810_34968,G__34810_34969__$1,n__4518__auto___34966,jobs,results,process,async){
return (function (state_34847){
var state_val_34848 = (state_34847[(1)]);
if((state_val_34848 === (1))){
var state_34847__$1 = state_34847;
var statearr_34849_34981 = state_34847__$1;
(statearr_34849_34981[(2)] = null);

(statearr_34849_34981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34848 === (2))){
var state_34847__$1 = state_34847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34847__$1,(4),jobs);
} else {
if((state_val_34848 === (3))){
var inst_34845 = (state_34847[(2)]);
var state_34847__$1 = state_34847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34847__$1,inst_34845);
} else {
if((state_val_34848 === (4))){
var inst_34837 = (state_34847[(2)]);
var inst_34838 = async.call(null,inst_34837);
var state_34847__$1 = state_34847;
if(cljs.core.truth_(inst_34838)){
var statearr_34850_34982 = state_34847__$1;
(statearr_34850_34982[(1)] = (5));

} else {
var statearr_34851_34983 = state_34847__$1;
(statearr_34851_34983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34848 === (5))){
var state_34847__$1 = state_34847;
var statearr_34852_34984 = state_34847__$1;
(statearr_34852_34984[(2)] = null);

(statearr_34852_34984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34848 === (6))){
var state_34847__$1 = state_34847;
var statearr_34853_34985 = state_34847__$1;
(statearr_34853_34985[(2)] = null);

(statearr_34853_34985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34848 === (7))){
var inst_34843 = (state_34847[(2)]);
var state_34847__$1 = state_34847;
var statearr_34854_34986 = state_34847__$1;
(statearr_34854_34986[(2)] = inst_34843);

(statearr_34854_34986[(1)] = (3));


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
});})(__34967,c__24441__auto___34980,G__34810_34968,G__34810_34969__$1,n__4518__auto___34966,jobs,results,process,async))
;
return ((function (__34967,switch__24346__auto__,c__24441__auto___34980,G__34810_34968,G__34810_34969__$1,n__4518__auto___34966,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____0 = (function (){
var statearr_34855 = [null,null,null,null,null,null,null];
(statearr_34855[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__);

(statearr_34855[(1)] = (1));

return statearr_34855;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____1 = (function (state_34847){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_34847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e34856){if((e34856 instanceof Object)){
var ex__24350__auto__ = e34856;
var statearr_34857_34987 = state_34847;
(statearr_34857_34987[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34988 = state_34847;
state_34847 = G__34988;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__ = function(state_34847){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____1.call(this,state_34847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__;
})()
;})(__34967,switch__24346__auto__,c__24441__auto___34980,G__34810_34968,G__34810_34969__$1,n__4518__auto___34966,jobs,results,process,async))
})();
var state__24443__auto__ = (function (){var statearr_34858 = f__24442__auto__.call(null);
(statearr_34858[(6)] = c__24441__auto___34980);

return statearr_34858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(__34967,c__24441__auto___34980,G__34810_34968,G__34810_34969__$1,n__4518__auto___34966,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34810_34969__$1)].join('')));

}

var G__34989 = (__34967 + (1));
__34967 = G__34989;
continue;
} else {
}
break;
}

var c__24441__auto___34990 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto___34990,jobs,results,process,async){
return (function (){
var f__24442__auto__ = (function (){var switch__24346__auto__ = ((function (c__24441__auto___34990,jobs,results,process,async){
return (function (state_34880){
var state_val_34881 = (state_34880[(1)]);
if((state_val_34881 === (7))){
var inst_34876 = (state_34880[(2)]);
var state_34880__$1 = state_34880;
var statearr_34882_34991 = state_34880__$1;
(statearr_34882_34991[(2)] = inst_34876);

(statearr_34882_34991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34881 === (1))){
var state_34880__$1 = state_34880;
var statearr_34883_34992 = state_34880__$1;
(statearr_34883_34992[(2)] = null);

(statearr_34883_34992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34881 === (4))){
var inst_34861 = (state_34880[(7)]);
var inst_34861__$1 = (state_34880[(2)]);
var inst_34862 = (inst_34861__$1 == null);
var state_34880__$1 = (function (){var statearr_34884 = state_34880;
(statearr_34884[(7)] = inst_34861__$1);

return statearr_34884;
})();
if(cljs.core.truth_(inst_34862)){
var statearr_34885_34993 = state_34880__$1;
(statearr_34885_34993[(1)] = (5));

} else {
var statearr_34886_34994 = state_34880__$1;
(statearr_34886_34994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34881 === (6))){
var inst_34866 = (state_34880[(8)]);
var inst_34861 = (state_34880[(7)]);
var inst_34866__$1 = cljs.core.async.chan.call(null,(1));
var inst_34867 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34868 = [inst_34861,inst_34866__$1];
var inst_34869 = (new cljs.core.PersistentVector(null,2,(5),inst_34867,inst_34868,null));
var state_34880__$1 = (function (){var statearr_34887 = state_34880;
(statearr_34887[(8)] = inst_34866__$1);

return statearr_34887;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34880__$1,(8),jobs,inst_34869);
} else {
if((state_val_34881 === (3))){
var inst_34878 = (state_34880[(2)]);
var state_34880__$1 = state_34880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34880__$1,inst_34878);
} else {
if((state_val_34881 === (2))){
var state_34880__$1 = state_34880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34880__$1,(4),from);
} else {
if((state_val_34881 === (9))){
var inst_34873 = (state_34880[(2)]);
var state_34880__$1 = (function (){var statearr_34888 = state_34880;
(statearr_34888[(9)] = inst_34873);

return statearr_34888;
})();
var statearr_34889_34995 = state_34880__$1;
(statearr_34889_34995[(2)] = null);

(statearr_34889_34995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34881 === (5))){
var inst_34864 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34880__$1 = state_34880;
var statearr_34890_34996 = state_34880__$1;
(statearr_34890_34996[(2)] = inst_34864);

(statearr_34890_34996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34881 === (8))){
var inst_34866 = (state_34880[(8)]);
var inst_34871 = (state_34880[(2)]);
var state_34880__$1 = (function (){var statearr_34891 = state_34880;
(statearr_34891[(10)] = inst_34871);

return statearr_34891;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34880__$1,(9),results,inst_34866);
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
});})(c__24441__auto___34990,jobs,results,process,async))
;
return ((function (switch__24346__auto__,c__24441__auto___34990,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____0 = (function (){
var statearr_34892 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34892[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__);

(statearr_34892[(1)] = (1));

return statearr_34892;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____1 = (function (state_34880){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_34880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e34893){if((e34893 instanceof Object)){
var ex__24350__auto__ = e34893;
var statearr_34894_34997 = state_34880;
(statearr_34894_34997[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34998 = state_34880;
state_34880 = G__34998;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__ = function(state_34880){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____1.call(this,state_34880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__;
})()
;})(switch__24346__auto__,c__24441__auto___34990,jobs,results,process,async))
})();
var state__24443__auto__ = (function (){var statearr_34895 = f__24442__auto__.call(null);
(statearr_34895[(6)] = c__24441__auto___34990);

return statearr_34895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto___34990,jobs,results,process,async))
);


var c__24441__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto__,jobs,results,process,async){
return (function (){
var f__24442__auto__ = (function (){var switch__24346__auto__ = ((function (c__24441__auto__,jobs,results,process,async){
return (function (state_34933){
var state_val_34934 = (state_34933[(1)]);
if((state_val_34934 === (7))){
var inst_34929 = (state_34933[(2)]);
var state_34933__$1 = state_34933;
var statearr_34935_34999 = state_34933__$1;
(statearr_34935_34999[(2)] = inst_34929);

(statearr_34935_34999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (20))){
var state_34933__$1 = state_34933;
var statearr_34936_35000 = state_34933__$1;
(statearr_34936_35000[(2)] = null);

(statearr_34936_35000[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (1))){
var state_34933__$1 = state_34933;
var statearr_34937_35001 = state_34933__$1;
(statearr_34937_35001[(2)] = null);

(statearr_34937_35001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (4))){
var inst_34898 = (state_34933[(7)]);
var inst_34898__$1 = (state_34933[(2)]);
var inst_34899 = (inst_34898__$1 == null);
var state_34933__$1 = (function (){var statearr_34938 = state_34933;
(statearr_34938[(7)] = inst_34898__$1);

return statearr_34938;
})();
if(cljs.core.truth_(inst_34899)){
var statearr_34939_35002 = state_34933__$1;
(statearr_34939_35002[(1)] = (5));

} else {
var statearr_34940_35003 = state_34933__$1;
(statearr_34940_35003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (15))){
var inst_34911 = (state_34933[(8)]);
var state_34933__$1 = state_34933;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34933__$1,(18),to,inst_34911);
} else {
if((state_val_34934 === (21))){
var inst_34924 = (state_34933[(2)]);
var state_34933__$1 = state_34933;
var statearr_34941_35004 = state_34933__$1;
(statearr_34941_35004[(2)] = inst_34924);

(statearr_34941_35004[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (13))){
var inst_34926 = (state_34933[(2)]);
var state_34933__$1 = (function (){var statearr_34942 = state_34933;
(statearr_34942[(9)] = inst_34926);

return statearr_34942;
})();
var statearr_34943_35005 = state_34933__$1;
(statearr_34943_35005[(2)] = null);

(statearr_34943_35005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (6))){
var inst_34898 = (state_34933[(7)]);
var state_34933__$1 = state_34933;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34933__$1,(11),inst_34898);
} else {
if((state_val_34934 === (17))){
var inst_34919 = (state_34933[(2)]);
var state_34933__$1 = state_34933;
if(cljs.core.truth_(inst_34919)){
var statearr_34944_35006 = state_34933__$1;
(statearr_34944_35006[(1)] = (19));

} else {
var statearr_34945_35007 = state_34933__$1;
(statearr_34945_35007[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (3))){
var inst_34931 = (state_34933[(2)]);
var state_34933__$1 = state_34933;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34933__$1,inst_34931);
} else {
if((state_val_34934 === (12))){
var inst_34908 = (state_34933[(10)]);
var state_34933__$1 = state_34933;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34933__$1,(14),inst_34908);
} else {
if((state_val_34934 === (2))){
var state_34933__$1 = state_34933;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34933__$1,(4),results);
} else {
if((state_val_34934 === (19))){
var state_34933__$1 = state_34933;
var statearr_34946_35008 = state_34933__$1;
(statearr_34946_35008[(2)] = null);

(statearr_34946_35008[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (11))){
var inst_34908 = (state_34933[(2)]);
var state_34933__$1 = (function (){var statearr_34947 = state_34933;
(statearr_34947[(10)] = inst_34908);

return statearr_34947;
})();
var statearr_34948_35009 = state_34933__$1;
(statearr_34948_35009[(2)] = null);

(statearr_34948_35009[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (9))){
var state_34933__$1 = state_34933;
var statearr_34949_35010 = state_34933__$1;
(statearr_34949_35010[(2)] = null);

(statearr_34949_35010[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (5))){
var state_34933__$1 = state_34933;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34950_35011 = state_34933__$1;
(statearr_34950_35011[(1)] = (8));

} else {
var statearr_34951_35012 = state_34933__$1;
(statearr_34951_35012[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (14))){
var inst_34913 = (state_34933[(11)]);
var inst_34911 = (state_34933[(8)]);
var inst_34911__$1 = (state_34933[(2)]);
var inst_34912 = (inst_34911__$1 == null);
var inst_34913__$1 = cljs.core.not.call(null,inst_34912);
var state_34933__$1 = (function (){var statearr_34952 = state_34933;
(statearr_34952[(11)] = inst_34913__$1);

(statearr_34952[(8)] = inst_34911__$1);

return statearr_34952;
})();
if(inst_34913__$1){
var statearr_34953_35013 = state_34933__$1;
(statearr_34953_35013[(1)] = (15));

} else {
var statearr_34954_35014 = state_34933__$1;
(statearr_34954_35014[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (16))){
var inst_34913 = (state_34933[(11)]);
var state_34933__$1 = state_34933;
var statearr_34955_35015 = state_34933__$1;
(statearr_34955_35015[(2)] = inst_34913);

(statearr_34955_35015[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (10))){
var inst_34905 = (state_34933[(2)]);
var state_34933__$1 = state_34933;
var statearr_34956_35016 = state_34933__$1;
(statearr_34956_35016[(2)] = inst_34905);

(statearr_34956_35016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (18))){
var inst_34916 = (state_34933[(2)]);
var state_34933__$1 = state_34933;
var statearr_34957_35017 = state_34933__$1;
(statearr_34957_35017[(2)] = inst_34916);

(statearr_34957_35017[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (8))){
var inst_34902 = cljs.core.async.close_BANG_.call(null,to);
var state_34933__$1 = state_34933;
var statearr_34958_35018 = state_34933__$1;
(statearr_34958_35018[(2)] = inst_34902);

(statearr_34958_35018[(1)] = (10));


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
});})(c__24441__auto__,jobs,results,process,async))
;
return ((function (switch__24346__auto__,c__24441__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____0 = (function (){
var statearr_34959 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34959[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__);

(statearr_34959[(1)] = (1));

return statearr_34959;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____1 = (function (state_34933){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_34933);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e34960){if((e34960 instanceof Object)){
var ex__24350__auto__ = e34960;
var statearr_34961_35019 = state_34933;
(statearr_34961_35019[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34960;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35020 = state_34933;
state_34933 = G__35020;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__ = function(state_34933){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____1.call(this,state_34933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__;
})()
;})(switch__24346__auto__,c__24441__auto__,jobs,results,process,async))
})();
var state__24443__auto__ = (function (){var statearr_34962 = f__24442__auto__.call(null);
(statearr_34962[(6)] = c__24441__auto__);

return statearr_34962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto__,jobs,results,process,async))
);

return c__24441__auto__;
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
var G__35022 = arguments.length;
switch (G__35022) {
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

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var G__35025 = arguments.length;
switch (G__35025) {
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

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var G__35028 = arguments.length;
switch (G__35028) {
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

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24441__auto___35077 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto___35077,tc,fc){
return (function (){
var f__24442__auto__ = (function (){var switch__24346__auto__ = ((function (c__24441__auto___35077,tc,fc){
return (function (state_35054){
var state_val_35055 = (state_35054[(1)]);
if((state_val_35055 === (7))){
var inst_35050 = (state_35054[(2)]);
var state_35054__$1 = state_35054;
var statearr_35056_35078 = state_35054__$1;
(statearr_35056_35078[(2)] = inst_35050);

(statearr_35056_35078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (1))){
var state_35054__$1 = state_35054;
var statearr_35057_35079 = state_35054__$1;
(statearr_35057_35079[(2)] = null);

(statearr_35057_35079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (4))){
var inst_35031 = (state_35054[(7)]);
var inst_35031__$1 = (state_35054[(2)]);
var inst_35032 = (inst_35031__$1 == null);
var state_35054__$1 = (function (){var statearr_35058 = state_35054;
(statearr_35058[(7)] = inst_35031__$1);

return statearr_35058;
})();
if(cljs.core.truth_(inst_35032)){
var statearr_35059_35080 = state_35054__$1;
(statearr_35059_35080[(1)] = (5));

} else {
var statearr_35060_35081 = state_35054__$1;
(statearr_35060_35081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (13))){
var state_35054__$1 = state_35054;
var statearr_35061_35082 = state_35054__$1;
(statearr_35061_35082[(2)] = null);

(statearr_35061_35082[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (6))){
var inst_35031 = (state_35054[(7)]);
var inst_35037 = p.call(null,inst_35031);
var state_35054__$1 = state_35054;
if(cljs.core.truth_(inst_35037)){
var statearr_35062_35083 = state_35054__$1;
(statearr_35062_35083[(1)] = (9));

} else {
var statearr_35063_35084 = state_35054__$1;
(statearr_35063_35084[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (3))){
var inst_35052 = (state_35054[(2)]);
var state_35054__$1 = state_35054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35054__$1,inst_35052);
} else {
if((state_val_35055 === (12))){
var state_35054__$1 = state_35054;
var statearr_35064_35085 = state_35054__$1;
(statearr_35064_35085[(2)] = null);

(statearr_35064_35085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (2))){
var state_35054__$1 = state_35054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35054__$1,(4),ch);
} else {
if((state_val_35055 === (11))){
var inst_35031 = (state_35054[(7)]);
var inst_35041 = (state_35054[(2)]);
var state_35054__$1 = state_35054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35054__$1,(8),inst_35041,inst_35031);
} else {
if((state_val_35055 === (9))){
var state_35054__$1 = state_35054;
var statearr_35065_35086 = state_35054__$1;
(statearr_35065_35086[(2)] = tc);

(statearr_35065_35086[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (5))){
var inst_35034 = cljs.core.async.close_BANG_.call(null,tc);
var inst_35035 = cljs.core.async.close_BANG_.call(null,fc);
var state_35054__$1 = (function (){var statearr_35066 = state_35054;
(statearr_35066[(8)] = inst_35034);

return statearr_35066;
})();
var statearr_35067_35087 = state_35054__$1;
(statearr_35067_35087[(2)] = inst_35035);

(statearr_35067_35087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (14))){
var inst_35048 = (state_35054[(2)]);
var state_35054__$1 = state_35054;
var statearr_35068_35088 = state_35054__$1;
(statearr_35068_35088[(2)] = inst_35048);

(statearr_35068_35088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (10))){
var state_35054__$1 = state_35054;
var statearr_35069_35089 = state_35054__$1;
(statearr_35069_35089[(2)] = fc);

(statearr_35069_35089[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (8))){
var inst_35043 = (state_35054[(2)]);
var state_35054__$1 = state_35054;
if(cljs.core.truth_(inst_35043)){
var statearr_35070_35090 = state_35054__$1;
(statearr_35070_35090[(1)] = (12));

} else {
var statearr_35071_35091 = state_35054__$1;
(statearr_35071_35091[(1)] = (13));

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
});})(c__24441__auto___35077,tc,fc))
;
return ((function (switch__24346__auto__,c__24441__auto___35077,tc,fc){
return (function() {
var cljs$core$async$state_machine__24347__auto__ = null;
var cljs$core$async$state_machine__24347__auto____0 = (function (){
var statearr_35072 = [null,null,null,null,null,null,null,null,null];
(statearr_35072[(0)] = cljs$core$async$state_machine__24347__auto__);

(statearr_35072[(1)] = (1));

return statearr_35072;
});
var cljs$core$async$state_machine__24347__auto____1 = (function (state_35054){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_35054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e35073){if((e35073 instanceof Object)){
var ex__24350__auto__ = e35073;
var statearr_35074_35092 = state_35054;
(statearr_35074_35092[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35093 = state_35054;
state_35054 = G__35093;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
cljs$core$async$state_machine__24347__auto__ = function(state_35054){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24347__auto____1.call(this,state_35054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24347__auto____0;
cljs$core$async$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24347__auto____1;
return cljs$core$async$state_machine__24347__auto__;
})()
;})(switch__24346__auto__,c__24441__auto___35077,tc,fc))
})();
var state__24443__auto__ = (function (){var statearr_35075 = f__24442__auto__.call(null);
(statearr_35075[(6)] = c__24441__auto___35077);

return statearr_35075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto___35077,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__24441__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto__){
return (function (){
var f__24442__auto__ = (function (){var switch__24346__auto__ = ((function (c__24441__auto__){
return (function (state_35114){
var state_val_35115 = (state_35114[(1)]);
if((state_val_35115 === (7))){
var inst_35110 = (state_35114[(2)]);
var state_35114__$1 = state_35114;
var statearr_35116_35134 = state_35114__$1;
(statearr_35116_35134[(2)] = inst_35110);

(statearr_35116_35134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35115 === (1))){
var inst_35094 = init;
var state_35114__$1 = (function (){var statearr_35117 = state_35114;
(statearr_35117[(7)] = inst_35094);

return statearr_35117;
})();
var statearr_35118_35135 = state_35114__$1;
(statearr_35118_35135[(2)] = null);

(statearr_35118_35135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35115 === (4))){
var inst_35097 = (state_35114[(8)]);
var inst_35097__$1 = (state_35114[(2)]);
var inst_35098 = (inst_35097__$1 == null);
var state_35114__$1 = (function (){var statearr_35119 = state_35114;
(statearr_35119[(8)] = inst_35097__$1);

return statearr_35119;
})();
if(cljs.core.truth_(inst_35098)){
var statearr_35120_35136 = state_35114__$1;
(statearr_35120_35136[(1)] = (5));

} else {
var statearr_35121_35137 = state_35114__$1;
(statearr_35121_35137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35115 === (6))){
var inst_35097 = (state_35114[(8)]);
var inst_35101 = (state_35114[(9)]);
var inst_35094 = (state_35114[(7)]);
var inst_35101__$1 = f.call(null,inst_35094,inst_35097);
var inst_35102 = cljs.core.reduced_QMARK_.call(null,inst_35101__$1);
var state_35114__$1 = (function (){var statearr_35122 = state_35114;
(statearr_35122[(9)] = inst_35101__$1);

return statearr_35122;
})();
if(inst_35102){
var statearr_35123_35138 = state_35114__$1;
(statearr_35123_35138[(1)] = (8));

} else {
var statearr_35124_35139 = state_35114__$1;
(statearr_35124_35139[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35115 === (3))){
var inst_35112 = (state_35114[(2)]);
var state_35114__$1 = state_35114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35114__$1,inst_35112);
} else {
if((state_val_35115 === (2))){
var state_35114__$1 = state_35114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35114__$1,(4),ch);
} else {
if((state_val_35115 === (9))){
var inst_35101 = (state_35114[(9)]);
var inst_35094 = inst_35101;
var state_35114__$1 = (function (){var statearr_35125 = state_35114;
(statearr_35125[(7)] = inst_35094);

return statearr_35125;
})();
var statearr_35126_35140 = state_35114__$1;
(statearr_35126_35140[(2)] = null);

(statearr_35126_35140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35115 === (5))){
var inst_35094 = (state_35114[(7)]);
var state_35114__$1 = state_35114;
var statearr_35127_35141 = state_35114__$1;
(statearr_35127_35141[(2)] = inst_35094);

(statearr_35127_35141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35115 === (10))){
var inst_35108 = (state_35114[(2)]);
var state_35114__$1 = state_35114;
var statearr_35128_35142 = state_35114__$1;
(statearr_35128_35142[(2)] = inst_35108);

(statearr_35128_35142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35115 === (8))){
var inst_35101 = (state_35114[(9)]);
var inst_35104 = cljs.core.deref.call(null,inst_35101);
var state_35114__$1 = state_35114;
var statearr_35129_35143 = state_35114__$1;
(statearr_35129_35143[(2)] = inst_35104);

(statearr_35129_35143[(1)] = (10));


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
});})(c__24441__auto__))
;
return ((function (switch__24346__auto__,c__24441__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24347__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24347__auto____0 = (function (){
var statearr_35130 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35130[(0)] = cljs$core$async$reduce_$_state_machine__24347__auto__);

(statearr_35130[(1)] = (1));

return statearr_35130;
});
var cljs$core$async$reduce_$_state_machine__24347__auto____1 = (function (state_35114){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_35114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e35131){if((e35131 instanceof Object)){
var ex__24350__auto__ = e35131;
var statearr_35132_35144 = state_35114;
(statearr_35132_35144[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35145 = state_35114;
state_35114 = G__35145;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24347__auto__ = function(state_35114){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24347__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24347__auto____1.call(this,state_35114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24347__auto____0;
cljs$core$async$reduce_$_state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24347__auto____1;
return cljs$core$async$reduce_$_state_machine__24347__auto__;
})()
;})(switch__24346__auto__,c__24441__auto__))
})();
var state__24443__auto__ = (function (){var statearr_35133 = f__24442__auto__.call(null);
(statearr_35133[(6)] = c__24441__auto__);

return statearr_35133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto__))
);

return c__24441__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__24441__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto__,f__$1){
return (function (){
var f__24442__auto__ = (function (){var switch__24346__auto__ = ((function (c__24441__auto__,f__$1){
return (function (state_35151){
var state_val_35152 = (state_35151[(1)]);
if((state_val_35152 === (1))){
var inst_35146 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_35151__$1 = state_35151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35151__$1,(2),inst_35146);
} else {
if((state_val_35152 === (2))){
var inst_35148 = (state_35151[(2)]);
var inst_35149 = f__$1.call(null,inst_35148);
var state_35151__$1 = state_35151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35151__$1,inst_35149);
} else {
return null;
}
}
});})(c__24441__auto__,f__$1))
;
return ((function (switch__24346__auto__,c__24441__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__24347__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24347__auto____0 = (function (){
var statearr_35153 = [null,null,null,null,null,null,null];
(statearr_35153[(0)] = cljs$core$async$transduce_$_state_machine__24347__auto__);

(statearr_35153[(1)] = (1));

return statearr_35153;
});
var cljs$core$async$transduce_$_state_machine__24347__auto____1 = (function (state_35151){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_35151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e35154){if((e35154 instanceof Object)){
var ex__24350__auto__ = e35154;
var statearr_35155_35157 = state_35151;
(statearr_35155_35157[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35154;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35158 = state_35151;
state_35151 = G__35158;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24347__auto__ = function(state_35151){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24347__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24347__auto____1.call(this,state_35151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24347__auto____0;
cljs$core$async$transduce_$_state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24347__auto____1;
return cljs$core$async$transduce_$_state_machine__24347__auto__;
})()
;})(switch__24346__auto__,c__24441__auto__,f__$1))
})();
var state__24443__auto__ = (function (){var statearr_35156 = f__24442__auto__.call(null);
(statearr_35156[(6)] = c__24441__auto__);

return statearr_35156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto__,f__$1))
);

return c__24441__auto__;
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
var G__35160 = arguments.length;
switch (G__35160) {
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

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24441__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto__){
return (function (){
var f__24442__auto__ = (function (){var switch__24346__auto__ = ((function (c__24441__auto__){
return (function (state_35185){
var state_val_35186 = (state_35185[(1)]);
if((state_val_35186 === (7))){
var inst_35167 = (state_35185[(2)]);
var state_35185__$1 = state_35185;
var statearr_35187_35208 = state_35185__$1;
(statearr_35187_35208[(2)] = inst_35167);

(statearr_35187_35208[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35186 === (1))){
var inst_35161 = cljs.core.seq.call(null,coll);
var inst_35162 = inst_35161;
var state_35185__$1 = (function (){var statearr_35188 = state_35185;
(statearr_35188[(7)] = inst_35162);

return statearr_35188;
})();
var statearr_35189_35209 = state_35185__$1;
(statearr_35189_35209[(2)] = null);

(statearr_35189_35209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35186 === (4))){
var inst_35162 = (state_35185[(7)]);
var inst_35165 = cljs.core.first.call(null,inst_35162);
var state_35185__$1 = state_35185;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35185__$1,(7),ch,inst_35165);
} else {
if((state_val_35186 === (13))){
var inst_35179 = (state_35185[(2)]);
var state_35185__$1 = state_35185;
var statearr_35190_35210 = state_35185__$1;
(statearr_35190_35210[(2)] = inst_35179);

(statearr_35190_35210[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35186 === (6))){
var inst_35170 = (state_35185[(2)]);
var state_35185__$1 = state_35185;
if(cljs.core.truth_(inst_35170)){
var statearr_35191_35211 = state_35185__$1;
(statearr_35191_35211[(1)] = (8));

} else {
var statearr_35192_35212 = state_35185__$1;
(statearr_35192_35212[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35186 === (3))){
var inst_35183 = (state_35185[(2)]);
var state_35185__$1 = state_35185;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35185__$1,inst_35183);
} else {
if((state_val_35186 === (12))){
var state_35185__$1 = state_35185;
var statearr_35193_35213 = state_35185__$1;
(statearr_35193_35213[(2)] = null);

(statearr_35193_35213[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35186 === (2))){
var inst_35162 = (state_35185[(7)]);
var state_35185__$1 = state_35185;
if(cljs.core.truth_(inst_35162)){
var statearr_35194_35214 = state_35185__$1;
(statearr_35194_35214[(1)] = (4));

} else {
var statearr_35195_35215 = state_35185__$1;
(statearr_35195_35215[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35186 === (11))){
var inst_35176 = cljs.core.async.close_BANG_.call(null,ch);
var state_35185__$1 = state_35185;
var statearr_35196_35216 = state_35185__$1;
(statearr_35196_35216[(2)] = inst_35176);

(statearr_35196_35216[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35186 === (9))){
var state_35185__$1 = state_35185;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35197_35217 = state_35185__$1;
(statearr_35197_35217[(1)] = (11));

} else {
var statearr_35198_35218 = state_35185__$1;
(statearr_35198_35218[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35186 === (5))){
var inst_35162 = (state_35185[(7)]);
var state_35185__$1 = state_35185;
var statearr_35199_35219 = state_35185__$1;
(statearr_35199_35219[(2)] = inst_35162);

(statearr_35199_35219[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35186 === (10))){
var inst_35181 = (state_35185[(2)]);
var state_35185__$1 = state_35185;
var statearr_35200_35220 = state_35185__$1;
(statearr_35200_35220[(2)] = inst_35181);

(statearr_35200_35220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35186 === (8))){
var inst_35162 = (state_35185[(7)]);
var inst_35172 = cljs.core.next.call(null,inst_35162);
var inst_35162__$1 = inst_35172;
var state_35185__$1 = (function (){var statearr_35201 = state_35185;
(statearr_35201[(7)] = inst_35162__$1);

return statearr_35201;
})();
var statearr_35202_35221 = state_35185__$1;
(statearr_35202_35221[(2)] = null);

(statearr_35202_35221[(1)] = (2));


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
});})(c__24441__auto__))
;
return ((function (switch__24346__auto__,c__24441__auto__){
return (function() {
var cljs$core$async$state_machine__24347__auto__ = null;
var cljs$core$async$state_machine__24347__auto____0 = (function (){
var statearr_35203 = [null,null,null,null,null,null,null,null];
(statearr_35203[(0)] = cljs$core$async$state_machine__24347__auto__);

(statearr_35203[(1)] = (1));

return statearr_35203;
});
var cljs$core$async$state_machine__24347__auto____1 = (function (state_35185){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_35185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e35204){if((e35204 instanceof Object)){
var ex__24350__auto__ = e35204;
var statearr_35205_35222 = state_35185;
(statearr_35205_35222[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35223 = state_35185;
state_35185 = G__35223;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
cljs$core$async$state_machine__24347__auto__ = function(state_35185){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24347__auto____1.call(this,state_35185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24347__auto____0;
cljs$core$async$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24347__auto____1;
return cljs$core$async$state_machine__24347__auto__;
})()
;})(switch__24346__auto__,c__24441__auto__))
})();
var state__24443__auto__ = (function (){var statearr_35206 = f__24442__auto__.call(null);
(statearr_35206[(6)] = c__24441__auto__);

return statearr_35206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto__))
);

return c__24441__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

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

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4347__auto__ = (((_ == null))?null:_);
var m__4348__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,_);
} else {
var m__4348__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35224 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35224 = (function (ch,cs,meta35225){
this.ch = ch;
this.cs = cs;
this.meta35225 = meta35225;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35226,meta35225__$1){
var self__ = this;
var _35226__$1 = this;
return (new cljs.core.async.t_cljs$core$async35224(self__.ch,self__.cs,meta35225__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async35224.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35226){
var self__ = this;
var _35226__$1 = this;
return self__.meta35225;
});})(cs))
;

cljs.core.async.t_cljs$core$async35224.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35224.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async35224.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35224.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35224.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35224.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35224.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35225","meta35225",-1324955502,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async35224.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35224.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35224";

cljs.core.async.t_cljs$core$async35224.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async35224");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35224.
 */
cljs.core.async.__GT_t_cljs$core$async35224 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async35224(ch__$1,cs__$1,meta35225){
return (new cljs.core.async.t_cljs$core$async35224(ch__$1,cs__$1,meta35225));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async35224(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__24441__auto___35446 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto___35446,cs,m,dchan,dctr,done){
return (function (){
var f__24442__auto__ = (function (){var switch__24346__auto__ = ((function (c__24441__auto___35446,cs,m,dchan,dctr,done){
return (function (state_35361){
var state_val_35362 = (state_35361[(1)]);
if((state_val_35362 === (7))){
var inst_35357 = (state_35361[(2)]);
var state_35361__$1 = state_35361;
var statearr_35363_35447 = state_35361__$1;
(statearr_35363_35447[(2)] = inst_35357);

(statearr_35363_35447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (20))){
var inst_35260 = (state_35361[(7)]);
var inst_35272 = cljs.core.first.call(null,inst_35260);
var inst_35273 = cljs.core.nth.call(null,inst_35272,(0),null);
var inst_35274 = cljs.core.nth.call(null,inst_35272,(1),null);
var state_35361__$1 = (function (){var statearr_35364 = state_35361;
(statearr_35364[(8)] = inst_35273);

return statearr_35364;
})();
if(cljs.core.truth_(inst_35274)){
var statearr_35365_35448 = state_35361__$1;
(statearr_35365_35448[(1)] = (22));

} else {
var statearr_35366_35449 = state_35361__$1;
(statearr_35366_35449[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (27))){
var inst_35309 = (state_35361[(9)]);
var inst_35302 = (state_35361[(10)]);
var inst_35229 = (state_35361[(11)]);
var inst_35304 = (state_35361[(12)]);
var inst_35309__$1 = cljs.core._nth.call(null,inst_35302,inst_35304);
var inst_35310 = cljs.core.async.put_BANG_.call(null,inst_35309__$1,inst_35229,done);
var state_35361__$1 = (function (){var statearr_35367 = state_35361;
(statearr_35367[(9)] = inst_35309__$1);

return statearr_35367;
})();
if(cljs.core.truth_(inst_35310)){
var statearr_35368_35450 = state_35361__$1;
(statearr_35368_35450[(1)] = (30));

} else {
var statearr_35369_35451 = state_35361__$1;
(statearr_35369_35451[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (1))){
var state_35361__$1 = state_35361;
var statearr_35370_35452 = state_35361__$1;
(statearr_35370_35452[(2)] = null);

(statearr_35370_35452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (24))){
var inst_35260 = (state_35361[(7)]);
var inst_35279 = (state_35361[(2)]);
var inst_35280 = cljs.core.next.call(null,inst_35260);
var inst_35238 = inst_35280;
var inst_35239 = null;
var inst_35240 = (0);
var inst_35241 = (0);
var state_35361__$1 = (function (){var statearr_35371 = state_35361;
(statearr_35371[(13)] = inst_35239);

(statearr_35371[(14)] = inst_35238);

(statearr_35371[(15)] = inst_35241);

(statearr_35371[(16)] = inst_35279);

(statearr_35371[(17)] = inst_35240);

return statearr_35371;
})();
var statearr_35372_35453 = state_35361__$1;
(statearr_35372_35453[(2)] = null);

(statearr_35372_35453[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (39))){
var state_35361__$1 = state_35361;
var statearr_35376_35454 = state_35361__$1;
(statearr_35376_35454[(2)] = null);

(statearr_35376_35454[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (4))){
var inst_35229 = (state_35361[(11)]);
var inst_35229__$1 = (state_35361[(2)]);
var inst_35230 = (inst_35229__$1 == null);
var state_35361__$1 = (function (){var statearr_35377 = state_35361;
(statearr_35377[(11)] = inst_35229__$1);

return statearr_35377;
})();
if(cljs.core.truth_(inst_35230)){
var statearr_35378_35455 = state_35361__$1;
(statearr_35378_35455[(1)] = (5));

} else {
var statearr_35379_35456 = state_35361__$1;
(statearr_35379_35456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (15))){
var inst_35239 = (state_35361[(13)]);
var inst_35238 = (state_35361[(14)]);
var inst_35241 = (state_35361[(15)]);
var inst_35240 = (state_35361[(17)]);
var inst_35256 = (state_35361[(2)]);
var inst_35257 = (inst_35241 + (1));
var tmp35373 = inst_35239;
var tmp35374 = inst_35238;
var tmp35375 = inst_35240;
var inst_35238__$1 = tmp35374;
var inst_35239__$1 = tmp35373;
var inst_35240__$1 = tmp35375;
var inst_35241__$1 = inst_35257;
var state_35361__$1 = (function (){var statearr_35380 = state_35361;
(statearr_35380[(13)] = inst_35239__$1);

(statearr_35380[(14)] = inst_35238__$1);

(statearr_35380[(15)] = inst_35241__$1);

(statearr_35380[(18)] = inst_35256);

(statearr_35380[(17)] = inst_35240__$1);

return statearr_35380;
})();
var statearr_35381_35457 = state_35361__$1;
(statearr_35381_35457[(2)] = null);

(statearr_35381_35457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (21))){
var inst_35283 = (state_35361[(2)]);
var state_35361__$1 = state_35361;
var statearr_35385_35458 = state_35361__$1;
(statearr_35385_35458[(2)] = inst_35283);

(statearr_35385_35458[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (31))){
var inst_35309 = (state_35361[(9)]);
var inst_35313 = done.call(null,null);
var inst_35314 = cljs.core.async.untap_STAR_.call(null,m,inst_35309);
var state_35361__$1 = (function (){var statearr_35386 = state_35361;
(statearr_35386[(19)] = inst_35313);

return statearr_35386;
})();
var statearr_35387_35459 = state_35361__$1;
(statearr_35387_35459[(2)] = inst_35314);

(statearr_35387_35459[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (32))){
var inst_35303 = (state_35361[(20)]);
var inst_35301 = (state_35361[(21)]);
var inst_35302 = (state_35361[(10)]);
var inst_35304 = (state_35361[(12)]);
var inst_35316 = (state_35361[(2)]);
var inst_35317 = (inst_35304 + (1));
var tmp35382 = inst_35303;
var tmp35383 = inst_35301;
var tmp35384 = inst_35302;
var inst_35301__$1 = tmp35383;
var inst_35302__$1 = tmp35384;
var inst_35303__$1 = tmp35382;
var inst_35304__$1 = inst_35317;
var state_35361__$1 = (function (){var statearr_35388 = state_35361;
(statearr_35388[(20)] = inst_35303__$1);

(statearr_35388[(21)] = inst_35301__$1);

(statearr_35388[(10)] = inst_35302__$1);

(statearr_35388[(12)] = inst_35304__$1);

(statearr_35388[(22)] = inst_35316);

return statearr_35388;
})();
var statearr_35389_35460 = state_35361__$1;
(statearr_35389_35460[(2)] = null);

(statearr_35389_35460[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (40))){
var inst_35329 = (state_35361[(23)]);
var inst_35333 = done.call(null,null);
var inst_35334 = cljs.core.async.untap_STAR_.call(null,m,inst_35329);
var state_35361__$1 = (function (){var statearr_35390 = state_35361;
(statearr_35390[(24)] = inst_35333);

return statearr_35390;
})();
var statearr_35391_35461 = state_35361__$1;
(statearr_35391_35461[(2)] = inst_35334);

(statearr_35391_35461[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (33))){
var inst_35320 = (state_35361[(25)]);
var inst_35322 = cljs.core.chunked_seq_QMARK_.call(null,inst_35320);
var state_35361__$1 = state_35361;
if(inst_35322){
var statearr_35392_35462 = state_35361__$1;
(statearr_35392_35462[(1)] = (36));

} else {
var statearr_35393_35463 = state_35361__$1;
(statearr_35393_35463[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (13))){
var inst_35250 = (state_35361[(26)]);
var inst_35253 = cljs.core.async.close_BANG_.call(null,inst_35250);
var state_35361__$1 = state_35361;
var statearr_35394_35464 = state_35361__$1;
(statearr_35394_35464[(2)] = inst_35253);

(statearr_35394_35464[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (22))){
var inst_35273 = (state_35361[(8)]);
var inst_35276 = cljs.core.async.close_BANG_.call(null,inst_35273);
var state_35361__$1 = state_35361;
var statearr_35395_35465 = state_35361__$1;
(statearr_35395_35465[(2)] = inst_35276);

(statearr_35395_35465[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (36))){
var inst_35320 = (state_35361[(25)]);
var inst_35324 = cljs.core.chunk_first.call(null,inst_35320);
var inst_35325 = cljs.core.chunk_rest.call(null,inst_35320);
var inst_35326 = cljs.core.count.call(null,inst_35324);
var inst_35301 = inst_35325;
var inst_35302 = inst_35324;
var inst_35303 = inst_35326;
var inst_35304 = (0);
var state_35361__$1 = (function (){var statearr_35396 = state_35361;
(statearr_35396[(20)] = inst_35303);

(statearr_35396[(21)] = inst_35301);

(statearr_35396[(10)] = inst_35302);

(statearr_35396[(12)] = inst_35304);

return statearr_35396;
})();
var statearr_35397_35466 = state_35361__$1;
(statearr_35397_35466[(2)] = null);

(statearr_35397_35466[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (41))){
var inst_35320 = (state_35361[(25)]);
var inst_35336 = (state_35361[(2)]);
var inst_35337 = cljs.core.next.call(null,inst_35320);
var inst_35301 = inst_35337;
var inst_35302 = null;
var inst_35303 = (0);
var inst_35304 = (0);
var state_35361__$1 = (function (){var statearr_35398 = state_35361;
(statearr_35398[(20)] = inst_35303);

(statearr_35398[(21)] = inst_35301);

(statearr_35398[(10)] = inst_35302);

(statearr_35398[(27)] = inst_35336);

(statearr_35398[(12)] = inst_35304);

return statearr_35398;
})();
var statearr_35399_35467 = state_35361__$1;
(statearr_35399_35467[(2)] = null);

(statearr_35399_35467[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (43))){
var state_35361__$1 = state_35361;
var statearr_35400_35468 = state_35361__$1;
(statearr_35400_35468[(2)] = null);

(statearr_35400_35468[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (29))){
var inst_35345 = (state_35361[(2)]);
var state_35361__$1 = state_35361;
var statearr_35401_35469 = state_35361__$1;
(statearr_35401_35469[(2)] = inst_35345);

(statearr_35401_35469[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (44))){
var inst_35354 = (state_35361[(2)]);
var state_35361__$1 = (function (){var statearr_35402 = state_35361;
(statearr_35402[(28)] = inst_35354);

return statearr_35402;
})();
var statearr_35403_35470 = state_35361__$1;
(statearr_35403_35470[(2)] = null);

(statearr_35403_35470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (6))){
var inst_35293 = (state_35361[(29)]);
var inst_35292 = cljs.core.deref.call(null,cs);
var inst_35293__$1 = cljs.core.keys.call(null,inst_35292);
var inst_35294 = cljs.core.count.call(null,inst_35293__$1);
var inst_35295 = cljs.core.reset_BANG_.call(null,dctr,inst_35294);
var inst_35300 = cljs.core.seq.call(null,inst_35293__$1);
var inst_35301 = inst_35300;
var inst_35302 = null;
var inst_35303 = (0);
var inst_35304 = (0);
var state_35361__$1 = (function (){var statearr_35404 = state_35361;
(statearr_35404[(29)] = inst_35293__$1);

(statearr_35404[(20)] = inst_35303);

(statearr_35404[(21)] = inst_35301);

(statearr_35404[(30)] = inst_35295);

(statearr_35404[(10)] = inst_35302);

(statearr_35404[(12)] = inst_35304);

return statearr_35404;
})();
var statearr_35405_35471 = state_35361__$1;
(statearr_35405_35471[(2)] = null);

(statearr_35405_35471[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (28))){
var inst_35301 = (state_35361[(21)]);
var inst_35320 = (state_35361[(25)]);
var inst_35320__$1 = cljs.core.seq.call(null,inst_35301);
var state_35361__$1 = (function (){var statearr_35406 = state_35361;
(statearr_35406[(25)] = inst_35320__$1);

return statearr_35406;
})();
if(inst_35320__$1){
var statearr_35407_35472 = state_35361__$1;
(statearr_35407_35472[(1)] = (33));

} else {
var statearr_35408_35473 = state_35361__$1;
(statearr_35408_35473[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (25))){
var inst_35303 = (state_35361[(20)]);
var inst_35304 = (state_35361[(12)]);
var inst_35306 = (inst_35304 < inst_35303);
var inst_35307 = inst_35306;
var state_35361__$1 = state_35361;
if(cljs.core.truth_(inst_35307)){
var statearr_35409_35474 = state_35361__$1;
(statearr_35409_35474[(1)] = (27));

} else {
var statearr_35410_35475 = state_35361__$1;
(statearr_35410_35475[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (34))){
var state_35361__$1 = state_35361;
var statearr_35411_35476 = state_35361__$1;
(statearr_35411_35476[(2)] = null);

(statearr_35411_35476[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (17))){
var state_35361__$1 = state_35361;
var statearr_35412_35477 = state_35361__$1;
(statearr_35412_35477[(2)] = null);

(statearr_35412_35477[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (3))){
var inst_35359 = (state_35361[(2)]);
var state_35361__$1 = state_35361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35361__$1,inst_35359);
} else {
if((state_val_35362 === (12))){
var inst_35288 = (state_35361[(2)]);
var state_35361__$1 = state_35361;
var statearr_35413_35478 = state_35361__$1;
(statearr_35413_35478[(2)] = inst_35288);

(statearr_35413_35478[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (2))){
var state_35361__$1 = state_35361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35361__$1,(4),ch);
} else {
if((state_val_35362 === (23))){
var state_35361__$1 = state_35361;
var statearr_35414_35479 = state_35361__$1;
(statearr_35414_35479[(2)] = null);

(statearr_35414_35479[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (35))){
var inst_35343 = (state_35361[(2)]);
var state_35361__$1 = state_35361;
var statearr_35415_35480 = state_35361__$1;
(statearr_35415_35480[(2)] = inst_35343);

(statearr_35415_35480[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (19))){
var inst_35260 = (state_35361[(7)]);
var inst_35264 = cljs.core.chunk_first.call(null,inst_35260);
var inst_35265 = cljs.core.chunk_rest.call(null,inst_35260);
var inst_35266 = cljs.core.count.call(null,inst_35264);
var inst_35238 = inst_35265;
var inst_35239 = inst_35264;
var inst_35240 = inst_35266;
var inst_35241 = (0);
var state_35361__$1 = (function (){var statearr_35416 = state_35361;
(statearr_35416[(13)] = inst_35239);

(statearr_35416[(14)] = inst_35238);

(statearr_35416[(15)] = inst_35241);

(statearr_35416[(17)] = inst_35240);

return statearr_35416;
})();
var statearr_35417_35481 = state_35361__$1;
(statearr_35417_35481[(2)] = null);

(statearr_35417_35481[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (11))){
var inst_35238 = (state_35361[(14)]);
var inst_35260 = (state_35361[(7)]);
var inst_35260__$1 = cljs.core.seq.call(null,inst_35238);
var state_35361__$1 = (function (){var statearr_35418 = state_35361;
(statearr_35418[(7)] = inst_35260__$1);

return statearr_35418;
})();
if(inst_35260__$1){
var statearr_35419_35482 = state_35361__$1;
(statearr_35419_35482[(1)] = (16));

} else {
var statearr_35420_35483 = state_35361__$1;
(statearr_35420_35483[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (9))){
var inst_35290 = (state_35361[(2)]);
var state_35361__$1 = state_35361;
var statearr_35421_35484 = state_35361__$1;
(statearr_35421_35484[(2)] = inst_35290);

(statearr_35421_35484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (5))){
var inst_35236 = cljs.core.deref.call(null,cs);
var inst_35237 = cljs.core.seq.call(null,inst_35236);
var inst_35238 = inst_35237;
var inst_35239 = null;
var inst_35240 = (0);
var inst_35241 = (0);
var state_35361__$1 = (function (){var statearr_35422 = state_35361;
(statearr_35422[(13)] = inst_35239);

(statearr_35422[(14)] = inst_35238);

(statearr_35422[(15)] = inst_35241);

(statearr_35422[(17)] = inst_35240);

return statearr_35422;
})();
var statearr_35423_35485 = state_35361__$1;
(statearr_35423_35485[(2)] = null);

(statearr_35423_35485[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (14))){
var state_35361__$1 = state_35361;
var statearr_35424_35486 = state_35361__$1;
(statearr_35424_35486[(2)] = null);

(statearr_35424_35486[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (45))){
var inst_35351 = (state_35361[(2)]);
var state_35361__$1 = state_35361;
var statearr_35425_35487 = state_35361__$1;
(statearr_35425_35487[(2)] = inst_35351);

(statearr_35425_35487[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (26))){
var inst_35293 = (state_35361[(29)]);
var inst_35347 = (state_35361[(2)]);
var inst_35348 = cljs.core.seq.call(null,inst_35293);
var state_35361__$1 = (function (){var statearr_35426 = state_35361;
(statearr_35426[(31)] = inst_35347);

return statearr_35426;
})();
if(inst_35348){
var statearr_35427_35488 = state_35361__$1;
(statearr_35427_35488[(1)] = (42));

} else {
var statearr_35428_35489 = state_35361__$1;
(statearr_35428_35489[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (16))){
var inst_35260 = (state_35361[(7)]);
var inst_35262 = cljs.core.chunked_seq_QMARK_.call(null,inst_35260);
var state_35361__$1 = state_35361;
if(inst_35262){
var statearr_35429_35490 = state_35361__$1;
(statearr_35429_35490[(1)] = (19));

} else {
var statearr_35430_35491 = state_35361__$1;
(statearr_35430_35491[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (38))){
var inst_35340 = (state_35361[(2)]);
var state_35361__$1 = state_35361;
var statearr_35431_35492 = state_35361__$1;
(statearr_35431_35492[(2)] = inst_35340);

(statearr_35431_35492[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (30))){
var state_35361__$1 = state_35361;
var statearr_35432_35493 = state_35361__$1;
(statearr_35432_35493[(2)] = null);

(statearr_35432_35493[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (10))){
var inst_35239 = (state_35361[(13)]);
var inst_35241 = (state_35361[(15)]);
var inst_35249 = cljs.core._nth.call(null,inst_35239,inst_35241);
var inst_35250 = cljs.core.nth.call(null,inst_35249,(0),null);
var inst_35251 = cljs.core.nth.call(null,inst_35249,(1),null);
var state_35361__$1 = (function (){var statearr_35433 = state_35361;
(statearr_35433[(26)] = inst_35250);

return statearr_35433;
})();
if(cljs.core.truth_(inst_35251)){
var statearr_35434_35494 = state_35361__$1;
(statearr_35434_35494[(1)] = (13));

} else {
var statearr_35435_35495 = state_35361__$1;
(statearr_35435_35495[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (18))){
var inst_35286 = (state_35361[(2)]);
var state_35361__$1 = state_35361;
var statearr_35436_35496 = state_35361__$1;
(statearr_35436_35496[(2)] = inst_35286);

(statearr_35436_35496[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (42))){
var state_35361__$1 = state_35361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35361__$1,(45),dchan);
} else {
if((state_val_35362 === (37))){
var inst_35320 = (state_35361[(25)]);
var inst_35329 = (state_35361[(23)]);
var inst_35229 = (state_35361[(11)]);
var inst_35329__$1 = cljs.core.first.call(null,inst_35320);
var inst_35330 = cljs.core.async.put_BANG_.call(null,inst_35329__$1,inst_35229,done);
var state_35361__$1 = (function (){var statearr_35437 = state_35361;
(statearr_35437[(23)] = inst_35329__$1);

return statearr_35437;
})();
if(cljs.core.truth_(inst_35330)){
var statearr_35438_35497 = state_35361__$1;
(statearr_35438_35497[(1)] = (39));

} else {
var statearr_35439_35498 = state_35361__$1;
(statearr_35439_35498[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (8))){
var inst_35241 = (state_35361[(15)]);
var inst_35240 = (state_35361[(17)]);
var inst_35243 = (inst_35241 < inst_35240);
var inst_35244 = inst_35243;
var state_35361__$1 = state_35361;
if(cljs.core.truth_(inst_35244)){
var statearr_35440_35499 = state_35361__$1;
(statearr_35440_35499[(1)] = (10));

} else {
var statearr_35441_35500 = state_35361__$1;
(statearr_35441_35500[(1)] = (11));

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
});})(c__24441__auto___35446,cs,m,dchan,dctr,done))
;
return ((function (switch__24346__auto__,c__24441__auto___35446,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24347__auto__ = null;
var cljs$core$async$mult_$_state_machine__24347__auto____0 = (function (){
var statearr_35442 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35442[(0)] = cljs$core$async$mult_$_state_machine__24347__auto__);

(statearr_35442[(1)] = (1));

return statearr_35442;
});
var cljs$core$async$mult_$_state_machine__24347__auto____1 = (function (state_35361){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_35361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e35443){if((e35443 instanceof Object)){
var ex__24350__auto__ = e35443;
var statearr_35444_35501 = state_35361;
(statearr_35444_35501[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35443;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35502 = state_35361;
state_35361 = G__35502;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24347__auto__ = function(state_35361){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24347__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24347__auto____1.call(this,state_35361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24347__auto____0;
cljs$core$async$mult_$_state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24347__auto____1;
return cljs$core$async$mult_$_state_machine__24347__auto__;
})()
;})(switch__24346__auto__,c__24441__auto___35446,cs,m,dchan,dctr,done))
})();
var state__24443__auto__ = (function (){var statearr_35445 = f__24442__auto__.call(null);
(statearr_35445[(6)] = c__24441__auto___35446);

return statearr_35445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto___35446,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__35504 = arguments.length;
switch (G__35504) {
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

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

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

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,state_map);
} else {
var m__4348__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,mode);
} else {
var m__4348__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___35516 = arguments.length;
var i__4642__auto___35517 = (0);
while(true){
if((i__4642__auto___35517 < len__4641__auto___35516)){
args__4647__auto__.push((arguments[i__4642__auto___35517]));

var G__35518 = (i__4642__auto___35517 + (1));
i__4642__auto___35517 = G__35518;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35510){
var map__35511 = p__35510;
var map__35511__$1 = (((((!((map__35511 == null))))?(((((map__35511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35511):map__35511);
var opts = map__35511__$1;
var statearr_35513_35519 = state;
(statearr_35513_35519[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__35511,map__35511__$1,opts){
return (function (val){
var statearr_35514_35520 = state;
(statearr_35514_35520[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__35511,map__35511__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35515_35521 = state;
(statearr_35515_35521[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35506){
var G__35507 = cljs.core.first.call(null,seq35506);
var seq35506__$1 = cljs.core.next.call(null,seq35506);
var G__35508 = cljs.core.first.call(null,seq35506__$1);
var seq35506__$2 = cljs.core.next.call(null,seq35506__$1);
var G__35509 = cljs.core.first.call(null,seq35506__$2);
var seq35506__$3 = cljs.core.next.call(null,seq35506__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35507,G__35508,G__35509,seq35506__$3);
});

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
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35522 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35522 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35523){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35523 = meta35523;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35524,meta35523__$1){
var self__ = this;
var _35524__$1 = this;
return (new cljs.core.async.t_cljs$core$async35522(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35523__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35522.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35524){
var self__ = this;
var _35524__$1 = this;
return self__.meta35523;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35522.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35522.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35522.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35522.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35522.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35522.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35522.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35522.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35522.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35523","meta35523",1110997776,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35522.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35522.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35522";

cljs.core.async.t_cljs$core$async35522.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async35522");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35522.
 */
cljs.core.async.__GT_t_cljs$core$async35522 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async35522(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35523){
return (new cljs.core.async.t_cljs$core$async35522(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35523));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async35522(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24441__auto___35686 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto___35686,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24442__auto__ = (function (){var switch__24346__auto__ = ((function (c__24441__auto___35686,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35626){
var state_val_35627 = (state_35626[(1)]);
if((state_val_35627 === (7))){
var inst_35541 = (state_35626[(2)]);
var state_35626__$1 = state_35626;
var statearr_35628_35687 = state_35626__$1;
(statearr_35628_35687[(2)] = inst_35541);

(statearr_35628_35687[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (20))){
var inst_35553 = (state_35626[(7)]);
var state_35626__$1 = state_35626;
var statearr_35629_35688 = state_35626__$1;
(statearr_35629_35688[(2)] = inst_35553);

(statearr_35629_35688[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (27))){
var state_35626__$1 = state_35626;
var statearr_35630_35689 = state_35626__$1;
(statearr_35630_35689[(2)] = null);

(statearr_35630_35689[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (1))){
var inst_35528 = (state_35626[(8)]);
var inst_35528__$1 = calc_state.call(null);
var inst_35530 = (inst_35528__$1 == null);
var inst_35531 = cljs.core.not.call(null,inst_35530);
var state_35626__$1 = (function (){var statearr_35631 = state_35626;
(statearr_35631[(8)] = inst_35528__$1);

return statearr_35631;
})();
if(inst_35531){
var statearr_35632_35690 = state_35626__$1;
(statearr_35632_35690[(1)] = (2));

} else {
var statearr_35633_35691 = state_35626__$1;
(statearr_35633_35691[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (24))){
var inst_35586 = (state_35626[(9)]);
var inst_35600 = (state_35626[(10)]);
var inst_35577 = (state_35626[(11)]);
var inst_35600__$1 = inst_35577.call(null,inst_35586);
var state_35626__$1 = (function (){var statearr_35634 = state_35626;
(statearr_35634[(10)] = inst_35600__$1);

return statearr_35634;
})();
if(cljs.core.truth_(inst_35600__$1)){
var statearr_35635_35692 = state_35626__$1;
(statearr_35635_35692[(1)] = (29));

} else {
var statearr_35636_35693 = state_35626__$1;
(statearr_35636_35693[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (4))){
var inst_35544 = (state_35626[(2)]);
var state_35626__$1 = state_35626;
if(cljs.core.truth_(inst_35544)){
var statearr_35637_35694 = state_35626__$1;
(statearr_35637_35694[(1)] = (8));

} else {
var statearr_35638_35695 = state_35626__$1;
(statearr_35638_35695[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (15))){
var inst_35571 = (state_35626[(2)]);
var state_35626__$1 = state_35626;
if(cljs.core.truth_(inst_35571)){
var statearr_35639_35696 = state_35626__$1;
(statearr_35639_35696[(1)] = (19));

} else {
var statearr_35640_35697 = state_35626__$1;
(statearr_35640_35697[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (21))){
var inst_35576 = (state_35626[(12)]);
var inst_35576__$1 = (state_35626[(2)]);
var inst_35577 = cljs.core.get.call(null,inst_35576__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35578 = cljs.core.get.call(null,inst_35576__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35579 = cljs.core.get.call(null,inst_35576__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35626__$1 = (function (){var statearr_35641 = state_35626;
(statearr_35641[(13)] = inst_35578);

(statearr_35641[(12)] = inst_35576__$1);

(statearr_35641[(11)] = inst_35577);

return statearr_35641;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_35626__$1,(22),inst_35579);
} else {
if((state_val_35627 === (31))){
var inst_35608 = (state_35626[(2)]);
var state_35626__$1 = state_35626;
if(cljs.core.truth_(inst_35608)){
var statearr_35642_35698 = state_35626__$1;
(statearr_35642_35698[(1)] = (32));

} else {
var statearr_35643_35699 = state_35626__$1;
(statearr_35643_35699[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (32))){
var inst_35585 = (state_35626[(14)]);
var state_35626__$1 = state_35626;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35626__$1,(35),out,inst_35585);
} else {
if((state_val_35627 === (33))){
var inst_35576 = (state_35626[(12)]);
var inst_35553 = inst_35576;
var state_35626__$1 = (function (){var statearr_35644 = state_35626;
(statearr_35644[(7)] = inst_35553);

return statearr_35644;
})();
var statearr_35645_35700 = state_35626__$1;
(statearr_35645_35700[(2)] = null);

(statearr_35645_35700[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (13))){
var inst_35553 = (state_35626[(7)]);
var inst_35560 = inst_35553.cljs$lang$protocol_mask$partition0$;
var inst_35561 = (inst_35560 & (64));
var inst_35562 = inst_35553.cljs$core$ISeq$;
var inst_35563 = (cljs.core.PROTOCOL_SENTINEL === inst_35562);
var inst_35564 = ((inst_35561) || (inst_35563));
var state_35626__$1 = state_35626;
if(cljs.core.truth_(inst_35564)){
var statearr_35646_35701 = state_35626__$1;
(statearr_35646_35701[(1)] = (16));

} else {
var statearr_35647_35702 = state_35626__$1;
(statearr_35647_35702[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (22))){
var inst_35586 = (state_35626[(9)]);
var inst_35585 = (state_35626[(14)]);
var inst_35584 = (state_35626[(2)]);
var inst_35585__$1 = cljs.core.nth.call(null,inst_35584,(0),null);
var inst_35586__$1 = cljs.core.nth.call(null,inst_35584,(1),null);
var inst_35587 = (inst_35585__$1 == null);
var inst_35588 = cljs.core._EQ_.call(null,inst_35586__$1,change);
var inst_35589 = ((inst_35587) || (inst_35588));
var state_35626__$1 = (function (){var statearr_35648 = state_35626;
(statearr_35648[(9)] = inst_35586__$1);

(statearr_35648[(14)] = inst_35585__$1);

return statearr_35648;
})();
if(cljs.core.truth_(inst_35589)){
var statearr_35649_35703 = state_35626__$1;
(statearr_35649_35703[(1)] = (23));

} else {
var statearr_35650_35704 = state_35626__$1;
(statearr_35650_35704[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (36))){
var inst_35576 = (state_35626[(12)]);
var inst_35553 = inst_35576;
var state_35626__$1 = (function (){var statearr_35651 = state_35626;
(statearr_35651[(7)] = inst_35553);

return statearr_35651;
})();
var statearr_35652_35705 = state_35626__$1;
(statearr_35652_35705[(2)] = null);

(statearr_35652_35705[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (29))){
var inst_35600 = (state_35626[(10)]);
var state_35626__$1 = state_35626;
var statearr_35653_35706 = state_35626__$1;
(statearr_35653_35706[(2)] = inst_35600);

(statearr_35653_35706[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (6))){
var state_35626__$1 = state_35626;
var statearr_35654_35707 = state_35626__$1;
(statearr_35654_35707[(2)] = false);

(statearr_35654_35707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (28))){
var inst_35596 = (state_35626[(2)]);
var inst_35597 = calc_state.call(null);
var inst_35553 = inst_35597;
var state_35626__$1 = (function (){var statearr_35655 = state_35626;
(statearr_35655[(15)] = inst_35596);

(statearr_35655[(7)] = inst_35553);

return statearr_35655;
})();
var statearr_35656_35708 = state_35626__$1;
(statearr_35656_35708[(2)] = null);

(statearr_35656_35708[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (25))){
var inst_35622 = (state_35626[(2)]);
var state_35626__$1 = state_35626;
var statearr_35657_35709 = state_35626__$1;
(statearr_35657_35709[(2)] = inst_35622);

(statearr_35657_35709[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (34))){
var inst_35620 = (state_35626[(2)]);
var state_35626__$1 = state_35626;
var statearr_35658_35710 = state_35626__$1;
(statearr_35658_35710[(2)] = inst_35620);

(statearr_35658_35710[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (17))){
var state_35626__$1 = state_35626;
var statearr_35659_35711 = state_35626__$1;
(statearr_35659_35711[(2)] = false);

(statearr_35659_35711[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (3))){
var state_35626__$1 = state_35626;
var statearr_35660_35712 = state_35626__$1;
(statearr_35660_35712[(2)] = false);

(statearr_35660_35712[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (12))){
var inst_35624 = (state_35626[(2)]);
var state_35626__$1 = state_35626;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35626__$1,inst_35624);
} else {
if((state_val_35627 === (2))){
var inst_35528 = (state_35626[(8)]);
var inst_35533 = inst_35528.cljs$lang$protocol_mask$partition0$;
var inst_35534 = (inst_35533 & (64));
var inst_35535 = inst_35528.cljs$core$ISeq$;
var inst_35536 = (cljs.core.PROTOCOL_SENTINEL === inst_35535);
var inst_35537 = ((inst_35534) || (inst_35536));
var state_35626__$1 = state_35626;
if(cljs.core.truth_(inst_35537)){
var statearr_35661_35713 = state_35626__$1;
(statearr_35661_35713[(1)] = (5));

} else {
var statearr_35662_35714 = state_35626__$1;
(statearr_35662_35714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (23))){
var inst_35585 = (state_35626[(14)]);
var inst_35591 = (inst_35585 == null);
var state_35626__$1 = state_35626;
if(cljs.core.truth_(inst_35591)){
var statearr_35663_35715 = state_35626__$1;
(statearr_35663_35715[(1)] = (26));

} else {
var statearr_35664_35716 = state_35626__$1;
(statearr_35664_35716[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (35))){
var inst_35611 = (state_35626[(2)]);
var state_35626__$1 = state_35626;
if(cljs.core.truth_(inst_35611)){
var statearr_35665_35717 = state_35626__$1;
(statearr_35665_35717[(1)] = (36));

} else {
var statearr_35666_35718 = state_35626__$1;
(statearr_35666_35718[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (19))){
var inst_35553 = (state_35626[(7)]);
var inst_35573 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35553);
var state_35626__$1 = state_35626;
var statearr_35667_35719 = state_35626__$1;
(statearr_35667_35719[(2)] = inst_35573);

(statearr_35667_35719[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (11))){
var inst_35553 = (state_35626[(7)]);
var inst_35557 = (inst_35553 == null);
var inst_35558 = cljs.core.not.call(null,inst_35557);
var state_35626__$1 = state_35626;
if(inst_35558){
var statearr_35668_35720 = state_35626__$1;
(statearr_35668_35720[(1)] = (13));

} else {
var statearr_35669_35721 = state_35626__$1;
(statearr_35669_35721[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (9))){
var inst_35528 = (state_35626[(8)]);
var state_35626__$1 = state_35626;
var statearr_35670_35722 = state_35626__$1;
(statearr_35670_35722[(2)] = inst_35528);

(statearr_35670_35722[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (5))){
var state_35626__$1 = state_35626;
var statearr_35671_35723 = state_35626__$1;
(statearr_35671_35723[(2)] = true);

(statearr_35671_35723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (14))){
var state_35626__$1 = state_35626;
var statearr_35672_35724 = state_35626__$1;
(statearr_35672_35724[(2)] = false);

(statearr_35672_35724[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (26))){
var inst_35586 = (state_35626[(9)]);
var inst_35593 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35586);
var state_35626__$1 = state_35626;
var statearr_35673_35725 = state_35626__$1;
(statearr_35673_35725[(2)] = inst_35593);

(statearr_35673_35725[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (16))){
var state_35626__$1 = state_35626;
var statearr_35674_35726 = state_35626__$1;
(statearr_35674_35726[(2)] = true);

(statearr_35674_35726[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (38))){
var inst_35616 = (state_35626[(2)]);
var state_35626__$1 = state_35626;
var statearr_35675_35727 = state_35626__$1;
(statearr_35675_35727[(2)] = inst_35616);

(statearr_35675_35727[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (30))){
var inst_35586 = (state_35626[(9)]);
var inst_35578 = (state_35626[(13)]);
var inst_35577 = (state_35626[(11)]);
var inst_35603 = cljs.core.empty_QMARK_.call(null,inst_35577);
var inst_35604 = inst_35578.call(null,inst_35586);
var inst_35605 = cljs.core.not.call(null,inst_35604);
var inst_35606 = ((inst_35603) && (inst_35605));
var state_35626__$1 = state_35626;
var statearr_35676_35728 = state_35626__$1;
(statearr_35676_35728[(2)] = inst_35606);

(statearr_35676_35728[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (10))){
var inst_35528 = (state_35626[(8)]);
var inst_35549 = (state_35626[(2)]);
var inst_35550 = cljs.core.get.call(null,inst_35549,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35551 = cljs.core.get.call(null,inst_35549,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35552 = cljs.core.get.call(null,inst_35549,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35553 = inst_35528;
var state_35626__$1 = (function (){var statearr_35677 = state_35626;
(statearr_35677[(16)] = inst_35552);

(statearr_35677[(7)] = inst_35553);

(statearr_35677[(17)] = inst_35550);

(statearr_35677[(18)] = inst_35551);

return statearr_35677;
})();
var statearr_35678_35729 = state_35626__$1;
(statearr_35678_35729[(2)] = null);

(statearr_35678_35729[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (18))){
var inst_35568 = (state_35626[(2)]);
var state_35626__$1 = state_35626;
var statearr_35679_35730 = state_35626__$1;
(statearr_35679_35730[(2)] = inst_35568);

(statearr_35679_35730[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (37))){
var state_35626__$1 = state_35626;
var statearr_35680_35731 = state_35626__$1;
(statearr_35680_35731[(2)] = null);

(statearr_35680_35731[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (8))){
var inst_35528 = (state_35626[(8)]);
var inst_35546 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35528);
var state_35626__$1 = state_35626;
var statearr_35681_35732 = state_35626__$1;
(statearr_35681_35732[(2)] = inst_35546);

(statearr_35681_35732[(1)] = (10));


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
});})(c__24441__auto___35686,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24346__auto__,c__24441__auto___35686,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24347__auto__ = null;
var cljs$core$async$mix_$_state_machine__24347__auto____0 = (function (){
var statearr_35682 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35682[(0)] = cljs$core$async$mix_$_state_machine__24347__auto__);

(statearr_35682[(1)] = (1));

return statearr_35682;
});
var cljs$core$async$mix_$_state_machine__24347__auto____1 = (function (state_35626){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_35626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e35683){if((e35683 instanceof Object)){
var ex__24350__auto__ = e35683;
var statearr_35684_35733 = state_35626;
(statearr_35684_35733[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35734 = state_35626;
state_35626 = G__35734;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24347__auto__ = function(state_35626){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24347__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24347__auto____1.call(this,state_35626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24347__auto____0;
cljs$core$async$mix_$_state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24347__auto____1;
return cljs$core$async$mix_$_state_machine__24347__auto__;
})()
;})(switch__24346__auto__,c__24441__auto___35686,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24443__auto__ = (function (){var statearr_35685 = f__24442__auto__.call(null);
(statearr_35685[(6)] = c__24441__auto___35686);

return statearr_35685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto___35686,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


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

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__35736 = arguments.length;
switch (G__35736) {
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

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var G__35740 = arguments.length;
switch (G__35740) {
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

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4047__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4047__auto__,mults){
return (function (p1__35738_SHARP_){
if(cljs.core.truth_(p1__35738_SHARP_.call(null,topic))){
return p1__35738_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35738_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35741 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35741 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35742){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35742 = meta35742;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35743,meta35742__$1){
var self__ = this;
var _35743__$1 = this;
return (new cljs.core.async.t_cljs$core$async35741(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35742__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35741.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35743){
var self__ = this;
var _35743__$1 = this;
return self__.meta35742;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35741.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35741.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35741.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35741.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35741.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35741.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35741.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35741.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35742","meta35742",-929981694,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35741.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35741.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35741";

cljs.core.async.t_cljs$core$async35741.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async35741");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35741.
 */
cljs.core.async.__GT_t_cljs$core$async35741 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async35741(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35742){
return (new cljs.core.async.t_cljs$core$async35741(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35742));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async35741(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24441__auto___35861 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto___35861,mults,ensure_mult,p){
return (function (){
var f__24442__auto__ = (function (){var switch__24346__auto__ = ((function (c__24441__auto___35861,mults,ensure_mult,p){
return (function (state_35815){
var state_val_35816 = (state_35815[(1)]);
if((state_val_35816 === (7))){
var inst_35811 = (state_35815[(2)]);
var state_35815__$1 = state_35815;
var statearr_35817_35862 = state_35815__$1;
(statearr_35817_35862[(2)] = inst_35811);

(statearr_35817_35862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (20))){
var state_35815__$1 = state_35815;
var statearr_35818_35863 = state_35815__$1;
(statearr_35818_35863[(2)] = null);

(statearr_35818_35863[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (1))){
var state_35815__$1 = state_35815;
var statearr_35819_35864 = state_35815__$1;
(statearr_35819_35864[(2)] = null);

(statearr_35819_35864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (24))){
var inst_35794 = (state_35815[(7)]);
var inst_35803 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35794);
var state_35815__$1 = state_35815;
var statearr_35820_35865 = state_35815__$1;
(statearr_35820_35865[(2)] = inst_35803);

(statearr_35820_35865[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (4))){
var inst_35746 = (state_35815[(8)]);
var inst_35746__$1 = (state_35815[(2)]);
var inst_35747 = (inst_35746__$1 == null);
var state_35815__$1 = (function (){var statearr_35821 = state_35815;
(statearr_35821[(8)] = inst_35746__$1);

return statearr_35821;
})();
if(cljs.core.truth_(inst_35747)){
var statearr_35822_35866 = state_35815__$1;
(statearr_35822_35866[(1)] = (5));

} else {
var statearr_35823_35867 = state_35815__$1;
(statearr_35823_35867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (15))){
var inst_35788 = (state_35815[(2)]);
var state_35815__$1 = state_35815;
var statearr_35824_35868 = state_35815__$1;
(statearr_35824_35868[(2)] = inst_35788);

(statearr_35824_35868[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (21))){
var inst_35808 = (state_35815[(2)]);
var state_35815__$1 = (function (){var statearr_35825 = state_35815;
(statearr_35825[(9)] = inst_35808);

return statearr_35825;
})();
var statearr_35826_35869 = state_35815__$1;
(statearr_35826_35869[(2)] = null);

(statearr_35826_35869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (13))){
var inst_35770 = (state_35815[(10)]);
var inst_35772 = cljs.core.chunked_seq_QMARK_.call(null,inst_35770);
var state_35815__$1 = state_35815;
if(inst_35772){
var statearr_35827_35870 = state_35815__$1;
(statearr_35827_35870[(1)] = (16));

} else {
var statearr_35828_35871 = state_35815__$1;
(statearr_35828_35871[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (22))){
var inst_35800 = (state_35815[(2)]);
var state_35815__$1 = state_35815;
if(cljs.core.truth_(inst_35800)){
var statearr_35829_35872 = state_35815__$1;
(statearr_35829_35872[(1)] = (23));

} else {
var statearr_35830_35873 = state_35815__$1;
(statearr_35830_35873[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (6))){
var inst_35794 = (state_35815[(7)]);
var inst_35746 = (state_35815[(8)]);
var inst_35796 = (state_35815[(11)]);
var inst_35794__$1 = topic_fn.call(null,inst_35746);
var inst_35795 = cljs.core.deref.call(null,mults);
var inst_35796__$1 = cljs.core.get.call(null,inst_35795,inst_35794__$1);
var state_35815__$1 = (function (){var statearr_35831 = state_35815;
(statearr_35831[(7)] = inst_35794__$1);

(statearr_35831[(11)] = inst_35796__$1);

return statearr_35831;
})();
if(cljs.core.truth_(inst_35796__$1)){
var statearr_35832_35874 = state_35815__$1;
(statearr_35832_35874[(1)] = (19));

} else {
var statearr_35833_35875 = state_35815__$1;
(statearr_35833_35875[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (25))){
var inst_35805 = (state_35815[(2)]);
var state_35815__$1 = state_35815;
var statearr_35834_35876 = state_35815__$1;
(statearr_35834_35876[(2)] = inst_35805);

(statearr_35834_35876[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (17))){
var inst_35770 = (state_35815[(10)]);
var inst_35779 = cljs.core.first.call(null,inst_35770);
var inst_35780 = cljs.core.async.muxch_STAR_.call(null,inst_35779);
var inst_35781 = cljs.core.async.close_BANG_.call(null,inst_35780);
var inst_35782 = cljs.core.next.call(null,inst_35770);
var inst_35756 = inst_35782;
var inst_35757 = null;
var inst_35758 = (0);
var inst_35759 = (0);
var state_35815__$1 = (function (){var statearr_35835 = state_35815;
(statearr_35835[(12)] = inst_35781);

(statearr_35835[(13)] = inst_35759);

(statearr_35835[(14)] = inst_35757);

(statearr_35835[(15)] = inst_35756);

(statearr_35835[(16)] = inst_35758);

return statearr_35835;
})();
var statearr_35836_35877 = state_35815__$1;
(statearr_35836_35877[(2)] = null);

(statearr_35836_35877[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (3))){
var inst_35813 = (state_35815[(2)]);
var state_35815__$1 = state_35815;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35815__$1,inst_35813);
} else {
if((state_val_35816 === (12))){
var inst_35790 = (state_35815[(2)]);
var state_35815__$1 = state_35815;
var statearr_35837_35878 = state_35815__$1;
(statearr_35837_35878[(2)] = inst_35790);

(statearr_35837_35878[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (2))){
var state_35815__$1 = state_35815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35815__$1,(4),ch);
} else {
if((state_val_35816 === (23))){
var state_35815__$1 = state_35815;
var statearr_35838_35879 = state_35815__$1;
(statearr_35838_35879[(2)] = null);

(statearr_35838_35879[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (19))){
var inst_35746 = (state_35815[(8)]);
var inst_35796 = (state_35815[(11)]);
var inst_35798 = cljs.core.async.muxch_STAR_.call(null,inst_35796);
var state_35815__$1 = state_35815;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35815__$1,(22),inst_35798,inst_35746);
} else {
if((state_val_35816 === (11))){
var inst_35756 = (state_35815[(15)]);
var inst_35770 = (state_35815[(10)]);
var inst_35770__$1 = cljs.core.seq.call(null,inst_35756);
var state_35815__$1 = (function (){var statearr_35839 = state_35815;
(statearr_35839[(10)] = inst_35770__$1);

return statearr_35839;
})();
if(inst_35770__$1){
var statearr_35840_35880 = state_35815__$1;
(statearr_35840_35880[(1)] = (13));

} else {
var statearr_35841_35881 = state_35815__$1;
(statearr_35841_35881[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (9))){
var inst_35792 = (state_35815[(2)]);
var state_35815__$1 = state_35815;
var statearr_35842_35882 = state_35815__$1;
(statearr_35842_35882[(2)] = inst_35792);

(statearr_35842_35882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (5))){
var inst_35753 = cljs.core.deref.call(null,mults);
var inst_35754 = cljs.core.vals.call(null,inst_35753);
var inst_35755 = cljs.core.seq.call(null,inst_35754);
var inst_35756 = inst_35755;
var inst_35757 = null;
var inst_35758 = (0);
var inst_35759 = (0);
var state_35815__$1 = (function (){var statearr_35843 = state_35815;
(statearr_35843[(13)] = inst_35759);

(statearr_35843[(14)] = inst_35757);

(statearr_35843[(15)] = inst_35756);

(statearr_35843[(16)] = inst_35758);

return statearr_35843;
})();
var statearr_35844_35883 = state_35815__$1;
(statearr_35844_35883[(2)] = null);

(statearr_35844_35883[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (14))){
var state_35815__$1 = state_35815;
var statearr_35848_35884 = state_35815__$1;
(statearr_35848_35884[(2)] = null);

(statearr_35848_35884[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (16))){
var inst_35770 = (state_35815[(10)]);
var inst_35774 = cljs.core.chunk_first.call(null,inst_35770);
var inst_35775 = cljs.core.chunk_rest.call(null,inst_35770);
var inst_35776 = cljs.core.count.call(null,inst_35774);
var inst_35756 = inst_35775;
var inst_35757 = inst_35774;
var inst_35758 = inst_35776;
var inst_35759 = (0);
var state_35815__$1 = (function (){var statearr_35849 = state_35815;
(statearr_35849[(13)] = inst_35759);

(statearr_35849[(14)] = inst_35757);

(statearr_35849[(15)] = inst_35756);

(statearr_35849[(16)] = inst_35758);

return statearr_35849;
})();
var statearr_35850_35885 = state_35815__$1;
(statearr_35850_35885[(2)] = null);

(statearr_35850_35885[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (10))){
var inst_35759 = (state_35815[(13)]);
var inst_35757 = (state_35815[(14)]);
var inst_35756 = (state_35815[(15)]);
var inst_35758 = (state_35815[(16)]);
var inst_35764 = cljs.core._nth.call(null,inst_35757,inst_35759);
var inst_35765 = cljs.core.async.muxch_STAR_.call(null,inst_35764);
var inst_35766 = cljs.core.async.close_BANG_.call(null,inst_35765);
var inst_35767 = (inst_35759 + (1));
var tmp35845 = inst_35757;
var tmp35846 = inst_35756;
var tmp35847 = inst_35758;
var inst_35756__$1 = tmp35846;
var inst_35757__$1 = tmp35845;
var inst_35758__$1 = tmp35847;
var inst_35759__$1 = inst_35767;
var state_35815__$1 = (function (){var statearr_35851 = state_35815;
(statearr_35851[(13)] = inst_35759__$1);

(statearr_35851[(14)] = inst_35757__$1);

(statearr_35851[(17)] = inst_35766);

(statearr_35851[(15)] = inst_35756__$1);

(statearr_35851[(16)] = inst_35758__$1);

return statearr_35851;
})();
var statearr_35852_35886 = state_35815__$1;
(statearr_35852_35886[(2)] = null);

(statearr_35852_35886[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (18))){
var inst_35785 = (state_35815[(2)]);
var state_35815__$1 = state_35815;
var statearr_35853_35887 = state_35815__$1;
(statearr_35853_35887[(2)] = inst_35785);

(statearr_35853_35887[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35816 === (8))){
var inst_35759 = (state_35815[(13)]);
var inst_35758 = (state_35815[(16)]);
var inst_35761 = (inst_35759 < inst_35758);
var inst_35762 = inst_35761;
var state_35815__$1 = state_35815;
if(cljs.core.truth_(inst_35762)){
var statearr_35854_35888 = state_35815__$1;
(statearr_35854_35888[(1)] = (10));

} else {
var statearr_35855_35889 = state_35815__$1;
(statearr_35855_35889[(1)] = (11));

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
});})(c__24441__auto___35861,mults,ensure_mult,p))
;
return ((function (switch__24346__auto__,c__24441__auto___35861,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24347__auto__ = null;
var cljs$core$async$state_machine__24347__auto____0 = (function (){
var statearr_35856 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35856[(0)] = cljs$core$async$state_machine__24347__auto__);

(statearr_35856[(1)] = (1));

return statearr_35856;
});
var cljs$core$async$state_machine__24347__auto____1 = (function (state_35815){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_35815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e35857){if((e35857 instanceof Object)){
var ex__24350__auto__ = e35857;
var statearr_35858_35890 = state_35815;
(statearr_35858_35890[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35891 = state_35815;
state_35815 = G__35891;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
cljs$core$async$state_machine__24347__auto__ = function(state_35815){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24347__auto____1.call(this,state_35815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24347__auto____0;
cljs$core$async$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24347__auto____1;
return cljs$core$async$state_machine__24347__auto__;
})()
;})(switch__24346__auto__,c__24441__auto___35861,mults,ensure_mult,p))
})();
var state__24443__auto__ = (function (){var statearr_35859 = f__24442__auto__.call(null);
(statearr_35859[(6)] = c__24441__auto___35861);

return statearr_35859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto___35861,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__35893 = arguments.length;
switch (G__35893) {
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

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

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
var G__35896 = arguments.length;
switch (G__35896) {
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

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var G__35899 = arguments.length;
switch (G__35899) {
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

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__24441__auto___35966 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto___35966,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24442__auto__ = (function (){var switch__24346__auto__ = ((function (c__24441__auto___35966,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35938){
var state_val_35939 = (state_35938[(1)]);
if((state_val_35939 === (7))){
var state_35938__$1 = state_35938;
var statearr_35940_35967 = state_35938__$1;
(statearr_35940_35967[(2)] = null);

(statearr_35940_35967[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (1))){
var state_35938__$1 = state_35938;
var statearr_35941_35968 = state_35938__$1;
(statearr_35941_35968[(2)] = null);

(statearr_35941_35968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (4))){
var inst_35902 = (state_35938[(7)]);
var inst_35904 = (inst_35902 < cnt);
var state_35938__$1 = state_35938;
if(cljs.core.truth_(inst_35904)){
var statearr_35942_35969 = state_35938__$1;
(statearr_35942_35969[(1)] = (6));

} else {
var statearr_35943_35970 = state_35938__$1;
(statearr_35943_35970[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (15))){
var inst_35934 = (state_35938[(2)]);
var state_35938__$1 = state_35938;
var statearr_35944_35971 = state_35938__$1;
(statearr_35944_35971[(2)] = inst_35934);

(statearr_35944_35971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (13))){
var inst_35927 = cljs.core.async.close_BANG_.call(null,out);
var state_35938__$1 = state_35938;
var statearr_35945_35972 = state_35938__$1;
(statearr_35945_35972[(2)] = inst_35927);

(statearr_35945_35972[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (6))){
var state_35938__$1 = state_35938;
var statearr_35946_35973 = state_35938__$1;
(statearr_35946_35973[(2)] = null);

(statearr_35946_35973[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (3))){
var inst_35936 = (state_35938[(2)]);
var state_35938__$1 = state_35938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35938__$1,inst_35936);
} else {
if((state_val_35939 === (12))){
var inst_35924 = (state_35938[(8)]);
var inst_35924__$1 = (state_35938[(2)]);
var inst_35925 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35924__$1);
var state_35938__$1 = (function (){var statearr_35947 = state_35938;
(statearr_35947[(8)] = inst_35924__$1);

return statearr_35947;
})();
if(cljs.core.truth_(inst_35925)){
var statearr_35948_35974 = state_35938__$1;
(statearr_35948_35974[(1)] = (13));

} else {
var statearr_35949_35975 = state_35938__$1;
(statearr_35949_35975[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (2))){
var inst_35901 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35902 = (0);
var state_35938__$1 = (function (){var statearr_35950 = state_35938;
(statearr_35950[(9)] = inst_35901);

(statearr_35950[(7)] = inst_35902);

return statearr_35950;
})();
var statearr_35951_35976 = state_35938__$1;
(statearr_35951_35976[(2)] = null);

(statearr_35951_35976[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (11))){
var inst_35902 = (state_35938[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35938,(10),Object,null,(9));
var inst_35911 = chs__$1.call(null,inst_35902);
var inst_35912 = done.call(null,inst_35902);
var inst_35913 = cljs.core.async.take_BANG_.call(null,inst_35911,inst_35912);
var state_35938__$1 = state_35938;
var statearr_35952_35977 = state_35938__$1;
(statearr_35952_35977[(2)] = inst_35913);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35938__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (9))){
var inst_35902 = (state_35938[(7)]);
var inst_35915 = (state_35938[(2)]);
var inst_35916 = (inst_35902 + (1));
var inst_35902__$1 = inst_35916;
var state_35938__$1 = (function (){var statearr_35953 = state_35938;
(statearr_35953[(10)] = inst_35915);

(statearr_35953[(7)] = inst_35902__$1);

return statearr_35953;
})();
var statearr_35954_35978 = state_35938__$1;
(statearr_35954_35978[(2)] = null);

(statearr_35954_35978[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (5))){
var inst_35922 = (state_35938[(2)]);
var state_35938__$1 = (function (){var statearr_35955 = state_35938;
(statearr_35955[(11)] = inst_35922);

return statearr_35955;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35938__$1,(12),dchan);
} else {
if((state_val_35939 === (14))){
var inst_35924 = (state_35938[(8)]);
var inst_35929 = cljs.core.apply.call(null,f,inst_35924);
var state_35938__$1 = state_35938;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35938__$1,(16),out,inst_35929);
} else {
if((state_val_35939 === (16))){
var inst_35931 = (state_35938[(2)]);
var state_35938__$1 = (function (){var statearr_35956 = state_35938;
(statearr_35956[(12)] = inst_35931);

return statearr_35956;
})();
var statearr_35957_35979 = state_35938__$1;
(statearr_35957_35979[(2)] = null);

(statearr_35957_35979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (10))){
var inst_35906 = (state_35938[(2)]);
var inst_35907 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35938__$1 = (function (){var statearr_35958 = state_35938;
(statearr_35958[(13)] = inst_35906);

return statearr_35958;
})();
var statearr_35959_35980 = state_35938__$1;
(statearr_35959_35980[(2)] = inst_35907);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35938__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (8))){
var inst_35920 = (state_35938[(2)]);
var state_35938__$1 = state_35938;
var statearr_35960_35981 = state_35938__$1;
(statearr_35960_35981[(2)] = inst_35920);

(statearr_35960_35981[(1)] = (5));


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
});})(c__24441__auto___35966,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24346__auto__,c__24441__auto___35966,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24347__auto__ = null;
var cljs$core$async$state_machine__24347__auto____0 = (function (){
var statearr_35961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35961[(0)] = cljs$core$async$state_machine__24347__auto__);

(statearr_35961[(1)] = (1));

return statearr_35961;
});
var cljs$core$async$state_machine__24347__auto____1 = (function (state_35938){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_35938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e35962){if((e35962 instanceof Object)){
var ex__24350__auto__ = e35962;
var statearr_35963_35982 = state_35938;
(statearr_35963_35982[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35983 = state_35938;
state_35938 = G__35983;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
cljs$core$async$state_machine__24347__auto__ = function(state_35938){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24347__auto____1.call(this,state_35938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24347__auto____0;
cljs$core$async$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24347__auto____1;
return cljs$core$async$state_machine__24347__auto__;
})()
;})(switch__24346__auto__,c__24441__auto___35966,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24443__auto__ = (function (){var statearr_35964 = f__24442__auto__.call(null);
(statearr_35964[(6)] = c__24441__auto___35966);

return statearr_35964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto___35966,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__35986 = arguments.length;
switch (G__35986) {
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

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24441__auto___36040 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto___36040,out){
return (function (){
var f__24442__auto__ = (function (){var switch__24346__auto__ = ((function (c__24441__auto___36040,out){
return (function (state_36018){
var state_val_36019 = (state_36018[(1)]);
if((state_val_36019 === (7))){
var inst_35998 = (state_36018[(7)]);
var inst_35997 = (state_36018[(8)]);
var inst_35997__$1 = (state_36018[(2)]);
var inst_35998__$1 = cljs.core.nth.call(null,inst_35997__$1,(0),null);
var inst_35999 = cljs.core.nth.call(null,inst_35997__$1,(1),null);
var inst_36000 = (inst_35998__$1 == null);
var state_36018__$1 = (function (){var statearr_36020 = state_36018;
(statearr_36020[(7)] = inst_35998__$1);

(statearr_36020[(8)] = inst_35997__$1);

(statearr_36020[(9)] = inst_35999);

return statearr_36020;
})();
if(cljs.core.truth_(inst_36000)){
var statearr_36021_36041 = state_36018__$1;
(statearr_36021_36041[(1)] = (8));

} else {
var statearr_36022_36042 = state_36018__$1;
(statearr_36022_36042[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36019 === (1))){
var inst_35987 = cljs.core.vec.call(null,chs);
var inst_35988 = inst_35987;
var state_36018__$1 = (function (){var statearr_36023 = state_36018;
(statearr_36023[(10)] = inst_35988);

return statearr_36023;
})();
var statearr_36024_36043 = state_36018__$1;
(statearr_36024_36043[(2)] = null);

(statearr_36024_36043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36019 === (4))){
var inst_35988 = (state_36018[(10)]);
var state_36018__$1 = state_36018;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36018__$1,(7),inst_35988);
} else {
if((state_val_36019 === (6))){
var inst_36014 = (state_36018[(2)]);
var state_36018__$1 = state_36018;
var statearr_36025_36044 = state_36018__$1;
(statearr_36025_36044[(2)] = inst_36014);

(statearr_36025_36044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36019 === (3))){
var inst_36016 = (state_36018[(2)]);
var state_36018__$1 = state_36018;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36018__$1,inst_36016);
} else {
if((state_val_36019 === (2))){
var inst_35988 = (state_36018[(10)]);
var inst_35990 = cljs.core.count.call(null,inst_35988);
var inst_35991 = (inst_35990 > (0));
var state_36018__$1 = state_36018;
if(cljs.core.truth_(inst_35991)){
var statearr_36027_36045 = state_36018__$1;
(statearr_36027_36045[(1)] = (4));

} else {
var statearr_36028_36046 = state_36018__$1;
(statearr_36028_36046[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36019 === (11))){
var inst_35988 = (state_36018[(10)]);
var inst_36007 = (state_36018[(2)]);
var tmp36026 = inst_35988;
var inst_35988__$1 = tmp36026;
var state_36018__$1 = (function (){var statearr_36029 = state_36018;
(statearr_36029[(11)] = inst_36007);

(statearr_36029[(10)] = inst_35988__$1);

return statearr_36029;
})();
var statearr_36030_36047 = state_36018__$1;
(statearr_36030_36047[(2)] = null);

(statearr_36030_36047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36019 === (9))){
var inst_35998 = (state_36018[(7)]);
var state_36018__$1 = state_36018;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36018__$1,(11),out,inst_35998);
} else {
if((state_val_36019 === (5))){
var inst_36012 = cljs.core.async.close_BANG_.call(null,out);
var state_36018__$1 = state_36018;
var statearr_36031_36048 = state_36018__$1;
(statearr_36031_36048[(2)] = inst_36012);

(statearr_36031_36048[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36019 === (10))){
var inst_36010 = (state_36018[(2)]);
var state_36018__$1 = state_36018;
var statearr_36032_36049 = state_36018__$1;
(statearr_36032_36049[(2)] = inst_36010);

(statearr_36032_36049[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36019 === (8))){
var inst_35998 = (state_36018[(7)]);
var inst_35997 = (state_36018[(8)]);
var inst_35999 = (state_36018[(9)]);
var inst_35988 = (state_36018[(10)]);
var inst_36002 = (function (){var cs = inst_35988;
var vec__35993 = inst_35997;
var v = inst_35998;
var c = inst_35999;
return ((function (cs,vec__35993,v,c,inst_35998,inst_35997,inst_35999,inst_35988,state_val_36019,c__24441__auto___36040,out){
return (function (p1__35984_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35984_SHARP_);
});
;})(cs,vec__35993,v,c,inst_35998,inst_35997,inst_35999,inst_35988,state_val_36019,c__24441__auto___36040,out))
})();
var inst_36003 = cljs.core.filterv.call(null,inst_36002,inst_35988);
var inst_35988__$1 = inst_36003;
var state_36018__$1 = (function (){var statearr_36033 = state_36018;
(statearr_36033[(10)] = inst_35988__$1);

return statearr_36033;
})();
var statearr_36034_36050 = state_36018__$1;
(statearr_36034_36050[(2)] = null);

(statearr_36034_36050[(1)] = (2));


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
});})(c__24441__auto___36040,out))
;
return ((function (switch__24346__auto__,c__24441__auto___36040,out){
return (function() {
var cljs$core$async$state_machine__24347__auto__ = null;
var cljs$core$async$state_machine__24347__auto____0 = (function (){
var statearr_36035 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36035[(0)] = cljs$core$async$state_machine__24347__auto__);

(statearr_36035[(1)] = (1));

return statearr_36035;
});
var cljs$core$async$state_machine__24347__auto____1 = (function (state_36018){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_36018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e36036){if((e36036 instanceof Object)){
var ex__24350__auto__ = e36036;
var statearr_36037_36051 = state_36018;
(statearr_36037_36051[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36052 = state_36018;
state_36018 = G__36052;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
cljs$core$async$state_machine__24347__auto__ = function(state_36018){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24347__auto____1.call(this,state_36018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24347__auto____0;
cljs$core$async$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24347__auto____1;
return cljs$core$async$state_machine__24347__auto__;
})()
;})(switch__24346__auto__,c__24441__auto___36040,out))
})();
var state__24443__auto__ = (function (){var statearr_36038 = f__24442__auto__.call(null);
(statearr_36038[(6)] = c__24441__auto___36040);

return statearr_36038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto___36040,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

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
var G__36054 = arguments.length;
switch (G__36054) {
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

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24441__auto___36099 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto___36099,out){
return (function (){
var f__24442__auto__ = (function (){var switch__24346__auto__ = ((function (c__24441__auto___36099,out){
return (function (state_36078){
var state_val_36079 = (state_36078[(1)]);
if((state_val_36079 === (7))){
var inst_36060 = (state_36078[(7)]);
var inst_36060__$1 = (state_36078[(2)]);
var inst_36061 = (inst_36060__$1 == null);
var inst_36062 = cljs.core.not.call(null,inst_36061);
var state_36078__$1 = (function (){var statearr_36080 = state_36078;
(statearr_36080[(7)] = inst_36060__$1);

return statearr_36080;
})();
if(inst_36062){
var statearr_36081_36100 = state_36078__$1;
(statearr_36081_36100[(1)] = (8));

} else {
var statearr_36082_36101 = state_36078__$1;
(statearr_36082_36101[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36079 === (1))){
var inst_36055 = (0);
var state_36078__$1 = (function (){var statearr_36083 = state_36078;
(statearr_36083[(8)] = inst_36055);

return statearr_36083;
})();
var statearr_36084_36102 = state_36078__$1;
(statearr_36084_36102[(2)] = null);

(statearr_36084_36102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36079 === (4))){
var state_36078__$1 = state_36078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36078__$1,(7),ch);
} else {
if((state_val_36079 === (6))){
var inst_36073 = (state_36078[(2)]);
var state_36078__$1 = state_36078;
var statearr_36085_36103 = state_36078__$1;
(statearr_36085_36103[(2)] = inst_36073);

(statearr_36085_36103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36079 === (3))){
var inst_36075 = (state_36078[(2)]);
var inst_36076 = cljs.core.async.close_BANG_.call(null,out);
var state_36078__$1 = (function (){var statearr_36086 = state_36078;
(statearr_36086[(9)] = inst_36075);

return statearr_36086;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36078__$1,inst_36076);
} else {
if((state_val_36079 === (2))){
var inst_36055 = (state_36078[(8)]);
var inst_36057 = (inst_36055 < n);
var state_36078__$1 = state_36078;
if(cljs.core.truth_(inst_36057)){
var statearr_36087_36104 = state_36078__$1;
(statearr_36087_36104[(1)] = (4));

} else {
var statearr_36088_36105 = state_36078__$1;
(statearr_36088_36105[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36079 === (11))){
var inst_36055 = (state_36078[(8)]);
var inst_36065 = (state_36078[(2)]);
var inst_36066 = (inst_36055 + (1));
var inst_36055__$1 = inst_36066;
var state_36078__$1 = (function (){var statearr_36089 = state_36078;
(statearr_36089[(8)] = inst_36055__$1);

(statearr_36089[(10)] = inst_36065);

return statearr_36089;
})();
var statearr_36090_36106 = state_36078__$1;
(statearr_36090_36106[(2)] = null);

(statearr_36090_36106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36079 === (9))){
var state_36078__$1 = state_36078;
var statearr_36091_36107 = state_36078__$1;
(statearr_36091_36107[(2)] = null);

(statearr_36091_36107[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36079 === (5))){
var state_36078__$1 = state_36078;
var statearr_36092_36108 = state_36078__$1;
(statearr_36092_36108[(2)] = null);

(statearr_36092_36108[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36079 === (10))){
var inst_36070 = (state_36078[(2)]);
var state_36078__$1 = state_36078;
var statearr_36093_36109 = state_36078__$1;
(statearr_36093_36109[(2)] = inst_36070);

(statearr_36093_36109[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36079 === (8))){
var inst_36060 = (state_36078[(7)]);
var state_36078__$1 = state_36078;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36078__$1,(11),out,inst_36060);
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
});})(c__24441__auto___36099,out))
;
return ((function (switch__24346__auto__,c__24441__auto___36099,out){
return (function() {
var cljs$core$async$state_machine__24347__auto__ = null;
var cljs$core$async$state_machine__24347__auto____0 = (function (){
var statearr_36094 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36094[(0)] = cljs$core$async$state_machine__24347__auto__);

(statearr_36094[(1)] = (1));

return statearr_36094;
});
var cljs$core$async$state_machine__24347__auto____1 = (function (state_36078){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_36078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e36095){if((e36095 instanceof Object)){
var ex__24350__auto__ = e36095;
var statearr_36096_36110 = state_36078;
(statearr_36096_36110[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36111 = state_36078;
state_36078 = G__36111;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
cljs$core$async$state_machine__24347__auto__ = function(state_36078){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24347__auto____1.call(this,state_36078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24347__auto____0;
cljs$core$async$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24347__auto____1;
return cljs$core$async$state_machine__24347__auto__;
})()
;})(switch__24346__auto__,c__24441__auto___36099,out))
})();
var state__24443__auto__ = (function (){var statearr_36097 = f__24442__auto__.call(null);
(statearr_36097[(6)] = c__24441__auto___36099);

return statearr_36097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto___36099,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36113 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36113 = (function (f,ch,meta36114){
this.f = f;
this.ch = ch;
this.meta36114 = meta36114;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36115,meta36114__$1){
var self__ = this;
var _36115__$1 = this;
return (new cljs.core.async.t_cljs$core$async36113(self__.f,self__.ch,meta36114__$1));
});

cljs.core.async.t_cljs$core$async36113.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36115){
var self__ = this;
var _36115__$1 = this;
return self__.meta36114;
});

cljs.core.async.t_cljs$core$async36113.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36113.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36113.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36113.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36113.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36116 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36116 = (function (f,ch,meta36114,_,fn1,meta36117){
this.f = f;
this.ch = ch;
this.meta36114 = meta36114;
this._ = _;
this.fn1 = fn1;
this.meta36117 = meta36117;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_36118,meta36117__$1){
var self__ = this;
var _36118__$1 = this;
return (new cljs.core.async.t_cljs$core$async36116(self__.f,self__.ch,self__.meta36114,self__._,self__.fn1,meta36117__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async36116.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_36118){
var self__ = this;
var _36118__$1 = this;
return self__.meta36117;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36116.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36116.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36116.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36116.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__36112_SHARP_){
return f1.call(null,(((p1__36112_SHARP_ == null))?null:self__.f.call(null,p1__36112_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async36116.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36114","meta36114",-536763547,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36113","cljs.core.async/t_cljs$core$async36113",-1852337108,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36117","meta36117",-358111939,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36116.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36116.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36116";

cljs.core.async.t_cljs$core$async36116.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async36116");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36116.
 */
cljs.core.async.__GT_t_cljs$core$async36116 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36116(f__$1,ch__$1,meta36114__$1,___$2,fn1__$1,meta36117){
return (new cljs.core.async.t_cljs$core$async36116(f__$1,ch__$1,meta36114__$1,___$2,fn1__$1,meta36117));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async36116(self__.f,self__.ch,self__.meta36114,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4036__auto__ = ret;
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async36113.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36113.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async36113.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36114","meta36114",-536763547,null)], null);
});

cljs.core.async.t_cljs$core$async36113.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36113.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36113";

cljs.core.async.t_cljs$core$async36113.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async36113");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36113.
 */
cljs.core.async.__GT_t_cljs$core$async36113 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36113(f__$1,ch__$1,meta36114){
return (new cljs.core.async.t_cljs$core$async36113(f__$1,ch__$1,meta36114));
});

}

return (new cljs.core.async.t_cljs$core$async36113(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36119 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36119 = (function (f,ch,meta36120){
this.f = f;
this.ch = ch;
this.meta36120 = meta36120;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36121,meta36120__$1){
var self__ = this;
var _36121__$1 = this;
return (new cljs.core.async.t_cljs$core$async36119(self__.f,self__.ch,meta36120__$1));
});

cljs.core.async.t_cljs$core$async36119.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36121){
var self__ = this;
var _36121__$1 = this;
return self__.meta36120;
});

cljs.core.async.t_cljs$core$async36119.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36119.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36119.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36119.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36119.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36119.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async36119.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36120","meta36120",-533505213,null)], null);
});

cljs.core.async.t_cljs$core$async36119.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36119.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36119";

cljs.core.async.t_cljs$core$async36119.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async36119");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36119.
 */
cljs.core.async.__GT_t_cljs$core$async36119 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36119(f__$1,ch__$1,meta36120){
return (new cljs.core.async.t_cljs$core$async36119(f__$1,ch__$1,meta36120));
});

}

return (new cljs.core.async.t_cljs$core$async36119(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36122 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36122 = (function (p,ch,meta36123){
this.p = p;
this.ch = ch;
this.meta36123 = meta36123;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36124,meta36123__$1){
var self__ = this;
var _36124__$1 = this;
return (new cljs.core.async.t_cljs$core$async36122(self__.p,self__.ch,meta36123__$1));
});

cljs.core.async.t_cljs$core$async36122.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36124){
var self__ = this;
var _36124__$1 = this;
return self__.meta36123;
});

cljs.core.async.t_cljs$core$async36122.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36122.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36122.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36122.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36122.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36122.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36122.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async36122.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36123","meta36123",-1526402551,null)], null);
});

cljs.core.async.t_cljs$core$async36122.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36122.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36122";

cljs.core.async.t_cljs$core$async36122.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async36122");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36122.
 */
cljs.core.async.__GT_t_cljs$core$async36122 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36122(p__$1,ch__$1,meta36123){
return (new cljs.core.async.t_cljs$core$async36122(p__$1,ch__$1,meta36123));
});

}

return (new cljs.core.async.t_cljs$core$async36122(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36126 = arguments.length;
switch (G__36126) {
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

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24441__auto___36166 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto___36166,out){
return (function (){
var f__24442__auto__ = (function (){var switch__24346__auto__ = ((function (c__24441__auto___36166,out){
return (function (state_36147){
var state_val_36148 = (state_36147[(1)]);
if((state_val_36148 === (7))){
var inst_36143 = (state_36147[(2)]);
var state_36147__$1 = state_36147;
var statearr_36149_36167 = state_36147__$1;
(statearr_36149_36167[(2)] = inst_36143);

(statearr_36149_36167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (1))){
var state_36147__$1 = state_36147;
var statearr_36150_36168 = state_36147__$1;
(statearr_36150_36168[(2)] = null);

(statearr_36150_36168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (4))){
var inst_36129 = (state_36147[(7)]);
var inst_36129__$1 = (state_36147[(2)]);
var inst_36130 = (inst_36129__$1 == null);
var state_36147__$1 = (function (){var statearr_36151 = state_36147;
(statearr_36151[(7)] = inst_36129__$1);

return statearr_36151;
})();
if(cljs.core.truth_(inst_36130)){
var statearr_36152_36169 = state_36147__$1;
(statearr_36152_36169[(1)] = (5));

} else {
var statearr_36153_36170 = state_36147__$1;
(statearr_36153_36170[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (6))){
var inst_36129 = (state_36147[(7)]);
var inst_36134 = p.call(null,inst_36129);
var state_36147__$1 = state_36147;
if(cljs.core.truth_(inst_36134)){
var statearr_36154_36171 = state_36147__$1;
(statearr_36154_36171[(1)] = (8));

} else {
var statearr_36155_36172 = state_36147__$1;
(statearr_36155_36172[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (3))){
var inst_36145 = (state_36147[(2)]);
var state_36147__$1 = state_36147;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36147__$1,inst_36145);
} else {
if((state_val_36148 === (2))){
var state_36147__$1 = state_36147;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36147__$1,(4),ch);
} else {
if((state_val_36148 === (11))){
var inst_36137 = (state_36147[(2)]);
var state_36147__$1 = state_36147;
var statearr_36156_36173 = state_36147__$1;
(statearr_36156_36173[(2)] = inst_36137);

(statearr_36156_36173[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (9))){
var state_36147__$1 = state_36147;
var statearr_36157_36174 = state_36147__$1;
(statearr_36157_36174[(2)] = null);

(statearr_36157_36174[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (5))){
var inst_36132 = cljs.core.async.close_BANG_.call(null,out);
var state_36147__$1 = state_36147;
var statearr_36158_36175 = state_36147__$1;
(statearr_36158_36175[(2)] = inst_36132);

(statearr_36158_36175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (10))){
var inst_36140 = (state_36147[(2)]);
var state_36147__$1 = (function (){var statearr_36159 = state_36147;
(statearr_36159[(8)] = inst_36140);

return statearr_36159;
})();
var statearr_36160_36176 = state_36147__$1;
(statearr_36160_36176[(2)] = null);

(statearr_36160_36176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (8))){
var inst_36129 = (state_36147[(7)]);
var state_36147__$1 = state_36147;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36147__$1,(11),out,inst_36129);
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
});})(c__24441__auto___36166,out))
;
return ((function (switch__24346__auto__,c__24441__auto___36166,out){
return (function() {
var cljs$core$async$state_machine__24347__auto__ = null;
var cljs$core$async$state_machine__24347__auto____0 = (function (){
var statearr_36161 = [null,null,null,null,null,null,null,null,null];
(statearr_36161[(0)] = cljs$core$async$state_machine__24347__auto__);

(statearr_36161[(1)] = (1));

return statearr_36161;
});
var cljs$core$async$state_machine__24347__auto____1 = (function (state_36147){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_36147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e36162){if((e36162 instanceof Object)){
var ex__24350__auto__ = e36162;
var statearr_36163_36177 = state_36147;
(statearr_36163_36177[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36178 = state_36147;
state_36147 = G__36178;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
cljs$core$async$state_machine__24347__auto__ = function(state_36147){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24347__auto____1.call(this,state_36147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24347__auto____0;
cljs$core$async$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24347__auto____1;
return cljs$core$async$state_machine__24347__auto__;
})()
;})(switch__24346__auto__,c__24441__auto___36166,out))
})();
var state__24443__auto__ = (function (){var statearr_36164 = f__24442__auto__.call(null);
(statearr_36164[(6)] = c__24441__auto___36166);

return statearr_36164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto___36166,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36180 = arguments.length;
switch (G__36180) {
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

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__24441__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto__){
return (function (){
var f__24442__auto__ = (function (){var switch__24346__auto__ = ((function (c__24441__auto__){
return (function (state_36243){
var state_val_36244 = (state_36243[(1)]);
if((state_val_36244 === (7))){
var inst_36239 = (state_36243[(2)]);
var state_36243__$1 = state_36243;
var statearr_36245_36283 = state_36243__$1;
(statearr_36245_36283[(2)] = inst_36239);

(statearr_36245_36283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (20))){
var inst_36209 = (state_36243[(7)]);
var inst_36220 = (state_36243[(2)]);
var inst_36221 = cljs.core.next.call(null,inst_36209);
var inst_36195 = inst_36221;
var inst_36196 = null;
var inst_36197 = (0);
var inst_36198 = (0);
var state_36243__$1 = (function (){var statearr_36246 = state_36243;
(statearr_36246[(8)] = inst_36196);

(statearr_36246[(9)] = inst_36195);

(statearr_36246[(10)] = inst_36220);

(statearr_36246[(11)] = inst_36197);

(statearr_36246[(12)] = inst_36198);

return statearr_36246;
})();
var statearr_36247_36284 = state_36243__$1;
(statearr_36247_36284[(2)] = null);

(statearr_36247_36284[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (1))){
var state_36243__$1 = state_36243;
var statearr_36248_36285 = state_36243__$1;
(statearr_36248_36285[(2)] = null);

(statearr_36248_36285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (4))){
var inst_36184 = (state_36243[(13)]);
var inst_36184__$1 = (state_36243[(2)]);
var inst_36185 = (inst_36184__$1 == null);
var state_36243__$1 = (function (){var statearr_36249 = state_36243;
(statearr_36249[(13)] = inst_36184__$1);

return statearr_36249;
})();
if(cljs.core.truth_(inst_36185)){
var statearr_36250_36286 = state_36243__$1;
(statearr_36250_36286[(1)] = (5));

} else {
var statearr_36251_36287 = state_36243__$1;
(statearr_36251_36287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (15))){
var state_36243__$1 = state_36243;
var statearr_36255_36288 = state_36243__$1;
(statearr_36255_36288[(2)] = null);

(statearr_36255_36288[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (21))){
var state_36243__$1 = state_36243;
var statearr_36256_36289 = state_36243__$1;
(statearr_36256_36289[(2)] = null);

(statearr_36256_36289[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (13))){
var inst_36196 = (state_36243[(8)]);
var inst_36195 = (state_36243[(9)]);
var inst_36197 = (state_36243[(11)]);
var inst_36198 = (state_36243[(12)]);
var inst_36205 = (state_36243[(2)]);
var inst_36206 = (inst_36198 + (1));
var tmp36252 = inst_36196;
var tmp36253 = inst_36195;
var tmp36254 = inst_36197;
var inst_36195__$1 = tmp36253;
var inst_36196__$1 = tmp36252;
var inst_36197__$1 = tmp36254;
var inst_36198__$1 = inst_36206;
var state_36243__$1 = (function (){var statearr_36257 = state_36243;
(statearr_36257[(8)] = inst_36196__$1);

(statearr_36257[(9)] = inst_36195__$1);

(statearr_36257[(14)] = inst_36205);

(statearr_36257[(11)] = inst_36197__$1);

(statearr_36257[(12)] = inst_36198__$1);

return statearr_36257;
})();
var statearr_36258_36290 = state_36243__$1;
(statearr_36258_36290[(2)] = null);

(statearr_36258_36290[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (22))){
var state_36243__$1 = state_36243;
var statearr_36259_36291 = state_36243__$1;
(statearr_36259_36291[(2)] = null);

(statearr_36259_36291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (6))){
var inst_36184 = (state_36243[(13)]);
var inst_36193 = f.call(null,inst_36184);
var inst_36194 = cljs.core.seq.call(null,inst_36193);
var inst_36195 = inst_36194;
var inst_36196 = null;
var inst_36197 = (0);
var inst_36198 = (0);
var state_36243__$1 = (function (){var statearr_36260 = state_36243;
(statearr_36260[(8)] = inst_36196);

(statearr_36260[(9)] = inst_36195);

(statearr_36260[(11)] = inst_36197);

(statearr_36260[(12)] = inst_36198);

return statearr_36260;
})();
var statearr_36261_36292 = state_36243__$1;
(statearr_36261_36292[(2)] = null);

(statearr_36261_36292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (17))){
var inst_36209 = (state_36243[(7)]);
var inst_36213 = cljs.core.chunk_first.call(null,inst_36209);
var inst_36214 = cljs.core.chunk_rest.call(null,inst_36209);
var inst_36215 = cljs.core.count.call(null,inst_36213);
var inst_36195 = inst_36214;
var inst_36196 = inst_36213;
var inst_36197 = inst_36215;
var inst_36198 = (0);
var state_36243__$1 = (function (){var statearr_36262 = state_36243;
(statearr_36262[(8)] = inst_36196);

(statearr_36262[(9)] = inst_36195);

(statearr_36262[(11)] = inst_36197);

(statearr_36262[(12)] = inst_36198);

return statearr_36262;
})();
var statearr_36263_36293 = state_36243__$1;
(statearr_36263_36293[(2)] = null);

(statearr_36263_36293[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (3))){
var inst_36241 = (state_36243[(2)]);
var state_36243__$1 = state_36243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36243__$1,inst_36241);
} else {
if((state_val_36244 === (12))){
var inst_36229 = (state_36243[(2)]);
var state_36243__$1 = state_36243;
var statearr_36264_36294 = state_36243__$1;
(statearr_36264_36294[(2)] = inst_36229);

(statearr_36264_36294[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (2))){
var state_36243__$1 = state_36243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36243__$1,(4),in$);
} else {
if((state_val_36244 === (23))){
var inst_36237 = (state_36243[(2)]);
var state_36243__$1 = state_36243;
var statearr_36265_36295 = state_36243__$1;
(statearr_36265_36295[(2)] = inst_36237);

(statearr_36265_36295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (19))){
var inst_36224 = (state_36243[(2)]);
var state_36243__$1 = state_36243;
var statearr_36266_36296 = state_36243__$1;
(statearr_36266_36296[(2)] = inst_36224);

(statearr_36266_36296[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (11))){
var inst_36195 = (state_36243[(9)]);
var inst_36209 = (state_36243[(7)]);
var inst_36209__$1 = cljs.core.seq.call(null,inst_36195);
var state_36243__$1 = (function (){var statearr_36267 = state_36243;
(statearr_36267[(7)] = inst_36209__$1);

return statearr_36267;
})();
if(inst_36209__$1){
var statearr_36268_36297 = state_36243__$1;
(statearr_36268_36297[(1)] = (14));

} else {
var statearr_36269_36298 = state_36243__$1;
(statearr_36269_36298[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (9))){
var inst_36231 = (state_36243[(2)]);
var inst_36232 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_36243__$1 = (function (){var statearr_36270 = state_36243;
(statearr_36270[(15)] = inst_36231);

return statearr_36270;
})();
if(cljs.core.truth_(inst_36232)){
var statearr_36271_36299 = state_36243__$1;
(statearr_36271_36299[(1)] = (21));

} else {
var statearr_36272_36300 = state_36243__$1;
(statearr_36272_36300[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (5))){
var inst_36187 = cljs.core.async.close_BANG_.call(null,out);
var state_36243__$1 = state_36243;
var statearr_36273_36301 = state_36243__$1;
(statearr_36273_36301[(2)] = inst_36187);

(statearr_36273_36301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (14))){
var inst_36209 = (state_36243[(7)]);
var inst_36211 = cljs.core.chunked_seq_QMARK_.call(null,inst_36209);
var state_36243__$1 = state_36243;
if(inst_36211){
var statearr_36274_36302 = state_36243__$1;
(statearr_36274_36302[(1)] = (17));

} else {
var statearr_36275_36303 = state_36243__$1;
(statearr_36275_36303[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (16))){
var inst_36227 = (state_36243[(2)]);
var state_36243__$1 = state_36243;
var statearr_36276_36304 = state_36243__$1;
(statearr_36276_36304[(2)] = inst_36227);

(statearr_36276_36304[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (10))){
var inst_36196 = (state_36243[(8)]);
var inst_36198 = (state_36243[(12)]);
var inst_36203 = cljs.core._nth.call(null,inst_36196,inst_36198);
var state_36243__$1 = state_36243;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36243__$1,(13),out,inst_36203);
} else {
if((state_val_36244 === (18))){
var inst_36209 = (state_36243[(7)]);
var inst_36218 = cljs.core.first.call(null,inst_36209);
var state_36243__$1 = state_36243;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36243__$1,(20),out,inst_36218);
} else {
if((state_val_36244 === (8))){
var inst_36197 = (state_36243[(11)]);
var inst_36198 = (state_36243[(12)]);
var inst_36200 = (inst_36198 < inst_36197);
var inst_36201 = inst_36200;
var state_36243__$1 = state_36243;
if(cljs.core.truth_(inst_36201)){
var statearr_36277_36305 = state_36243__$1;
(statearr_36277_36305[(1)] = (10));

} else {
var statearr_36278_36306 = state_36243__$1;
(statearr_36278_36306[(1)] = (11));

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
});})(c__24441__auto__))
;
return ((function (switch__24346__auto__,c__24441__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24347__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24347__auto____0 = (function (){
var statearr_36279 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36279[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24347__auto__);

(statearr_36279[(1)] = (1));

return statearr_36279;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24347__auto____1 = (function (state_36243){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_36243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e36280){if((e36280 instanceof Object)){
var ex__24350__auto__ = e36280;
var statearr_36281_36307 = state_36243;
(statearr_36281_36307[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36308 = state_36243;
state_36243 = G__36308;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24347__auto__ = function(state_36243){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24347__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24347__auto____1.call(this,state_36243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24347__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24347__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24347__auto__;
})()
;})(switch__24346__auto__,c__24441__auto__))
})();
var state__24443__auto__ = (function (){var statearr_36282 = f__24442__auto__.call(null);
(statearr_36282[(6)] = c__24441__auto__);

return statearr_36282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto__))
);

return c__24441__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36310 = arguments.length;
switch (G__36310) {
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

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__36313 = arguments.length;
switch (G__36313) {
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

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__36316 = arguments.length;
switch (G__36316) {
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

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24441__auto___36363 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto___36363,out){
return (function (){
var f__24442__auto__ = (function (){var switch__24346__auto__ = ((function (c__24441__auto___36363,out){
return (function (state_36340){
var state_val_36341 = (state_36340[(1)]);
if((state_val_36341 === (7))){
var inst_36335 = (state_36340[(2)]);
var state_36340__$1 = state_36340;
var statearr_36342_36364 = state_36340__$1;
(statearr_36342_36364[(2)] = inst_36335);

(statearr_36342_36364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (1))){
var inst_36317 = null;
var state_36340__$1 = (function (){var statearr_36343 = state_36340;
(statearr_36343[(7)] = inst_36317);

return statearr_36343;
})();
var statearr_36344_36365 = state_36340__$1;
(statearr_36344_36365[(2)] = null);

(statearr_36344_36365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (4))){
var inst_36320 = (state_36340[(8)]);
var inst_36320__$1 = (state_36340[(2)]);
var inst_36321 = (inst_36320__$1 == null);
var inst_36322 = cljs.core.not.call(null,inst_36321);
var state_36340__$1 = (function (){var statearr_36345 = state_36340;
(statearr_36345[(8)] = inst_36320__$1);

return statearr_36345;
})();
if(inst_36322){
var statearr_36346_36366 = state_36340__$1;
(statearr_36346_36366[(1)] = (5));

} else {
var statearr_36347_36367 = state_36340__$1;
(statearr_36347_36367[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (6))){
var state_36340__$1 = state_36340;
var statearr_36348_36368 = state_36340__$1;
(statearr_36348_36368[(2)] = null);

(statearr_36348_36368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (3))){
var inst_36337 = (state_36340[(2)]);
var inst_36338 = cljs.core.async.close_BANG_.call(null,out);
var state_36340__$1 = (function (){var statearr_36349 = state_36340;
(statearr_36349[(9)] = inst_36337);

return statearr_36349;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36340__$1,inst_36338);
} else {
if((state_val_36341 === (2))){
var state_36340__$1 = state_36340;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36340__$1,(4),ch);
} else {
if((state_val_36341 === (11))){
var inst_36320 = (state_36340[(8)]);
var inst_36329 = (state_36340[(2)]);
var inst_36317 = inst_36320;
var state_36340__$1 = (function (){var statearr_36350 = state_36340;
(statearr_36350[(10)] = inst_36329);

(statearr_36350[(7)] = inst_36317);

return statearr_36350;
})();
var statearr_36351_36369 = state_36340__$1;
(statearr_36351_36369[(2)] = null);

(statearr_36351_36369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (9))){
var inst_36320 = (state_36340[(8)]);
var state_36340__$1 = state_36340;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36340__$1,(11),out,inst_36320);
} else {
if((state_val_36341 === (5))){
var inst_36320 = (state_36340[(8)]);
var inst_36317 = (state_36340[(7)]);
var inst_36324 = cljs.core._EQ_.call(null,inst_36320,inst_36317);
var state_36340__$1 = state_36340;
if(inst_36324){
var statearr_36353_36370 = state_36340__$1;
(statearr_36353_36370[(1)] = (8));

} else {
var statearr_36354_36371 = state_36340__$1;
(statearr_36354_36371[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (10))){
var inst_36332 = (state_36340[(2)]);
var state_36340__$1 = state_36340;
var statearr_36355_36372 = state_36340__$1;
(statearr_36355_36372[(2)] = inst_36332);

(statearr_36355_36372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (8))){
var inst_36317 = (state_36340[(7)]);
var tmp36352 = inst_36317;
var inst_36317__$1 = tmp36352;
var state_36340__$1 = (function (){var statearr_36356 = state_36340;
(statearr_36356[(7)] = inst_36317__$1);

return statearr_36356;
})();
var statearr_36357_36373 = state_36340__$1;
(statearr_36357_36373[(2)] = null);

(statearr_36357_36373[(1)] = (2));


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
});})(c__24441__auto___36363,out))
;
return ((function (switch__24346__auto__,c__24441__auto___36363,out){
return (function() {
var cljs$core$async$state_machine__24347__auto__ = null;
var cljs$core$async$state_machine__24347__auto____0 = (function (){
var statearr_36358 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36358[(0)] = cljs$core$async$state_machine__24347__auto__);

(statearr_36358[(1)] = (1));

return statearr_36358;
});
var cljs$core$async$state_machine__24347__auto____1 = (function (state_36340){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_36340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e36359){if((e36359 instanceof Object)){
var ex__24350__auto__ = e36359;
var statearr_36360_36374 = state_36340;
(statearr_36360_36374[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36375 = state_36340;
state_36340 = G__36375;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
cljs$core$async$state_machine__24347__auto__ = function(state_36340){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24347__auto____1.call(this,state_36340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24347__auto____0;
cljs$core$async$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24347__auto____1;
return cljs$core$async$state_machine__24347__auto__;
})()
;})(switch__24346__auto__,c__24441__auto___36363,out))
})();
var state__24443__auto__ = (function (){var statearr_36361 = f__24442__auto__.call(null);
(statearr_36361[(6)] = c__24441__auto___36363);

return statearr_36361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto___36363,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36377 = arguments.length;
switch (G__36377) {
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

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24441__auto___36443 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto___36443,out){
return (function (){
var f__24442__auto__ = (function (){var switch__24346__auto__ = ((function (c__24441__auto___36443,out){
return (function (state_36415){
var state_val_36416 = (state_36415[(1)]);
if((state_val_36416 === (7))){
var inst_36411 = (state_36415[(2)]);
var state_36415__$1 = state_36415;
var statearr_36417_36444 = state_36415__$1;
(statearr_36417_36444[(2)] = inst_36411);

(statearr_36417_36444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36416 === (1))){
var inst_36378 = (new Array(n));
var inst_36379 = inst_36378;
var inst_36380 = (0);
var state_36415__$1 = (function (){var statearr_36418 = state_36415;
(statearr_36418[(7)] = inst_36380);

(statearr_36418[(8)] = inst_36379);

return statearr_36418;
})();
var statearr_36419_36445 = state_36415__$1;
(statearr_36419_36445[(2)] = null);

(statearr_36419_36445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36416 === (4))){
var inst_36383 = (state_36415[(9)]);
var inst_36383__$1 = (state_36415[(2)]);
var inst_36384 = (inst_36383__$1 == null);
var inst_36385 = cljs.core.not.call(null,inst_36384);
var state_36415__$1 = (function (){var statearr_36420 = state_36415;
(statearr_36420[(9)] = inst_36383__$1);

return statearr_36420;
})();
if(inst_36385){
var statearr_36421_36446 = state_36415__$1;
(statearr_36421_36446[(1)] = (5));

} else {
var statearr_36422_36447 = state_36415__$1;
(statearr_36422_36447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36416 === (15))){
var inst_36405 = (state_36415[(2)]);
var state_36415__$1 = state_36415;
var statearr_36423_36448 = state_36415__$1;
(statearr_36423_36448[(2)] = inst_36405);

(statearr_36423_36448[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36416 === (13))){
var state_36415__$1 = state_36415;
var statearr_36424_36449 = state_36415__$1;
(statearr_36424_36449[(2)] = null);

(statearr_36424_36449[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36416 === (6))){
var inst_36380 = (state_36415[(7)]);
var inst_36401 = (inst_36380 > (0));
var state_36415__$1 = state_36415;
if(cljs.core.truth_(inst_36401)){
var statearr_36425_36450 = state_36415__$1;
(statearr_36425_36450[(1)] = (12));

} else {
var statearr_36426_36451 = state_36415__$1;
(statearr_36426_36451[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36416 === (3))){
var inst_36413 = (state_36415[(2)]);
var state_36415__$1 = state_36415;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36415__$1,inst_36413);
} else {
if((state_val_36416 === (12))){
var inst_36379 = (state_36415[(8)]);
var inst_36403 = cljs.core.vec.call(null,inst_36379);
var state_36415__$1 = state_36415;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36415__$1,(15),out,inst_36403);
} else {
if((state_val_36416 === (2))){
var state_36415__$1 = state_36415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36415__$1,(4),ch);
} else {
if((state_val_36416 === (11))){
var inst_36395 = (state_36415[(2)]);
var inst_36396 = (new Array(n));
var inst_36379 = inst_36396;
var inst_36380 = (0);
var state_36415__$1 = (function (){var statearr_36427 = state_36415;
(statearr_36427[(10)] = inst_36395);

(statearr_36427[(7)] = inst_36380);

(statearr_36427[(8)] = inst_36379);

return statearr_36427;
})();
var statearr_36428_36452 = state_36415__$1;
(statearr_36428_36452[(2)] = null);

(statearr_36428_36452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36416 === (9))){
var inst_36379 = (state_36415[(8)]);
var inst_36393 = cljs.core.vec.call(null,inst_36379);
var state_36415__$1 = state_36415;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36415__$1,(11),out,inst_36393);
} else {
if((state_val_36416 === (5))){
var inst_36380 = (state_36415[(7)]);
var inst_36388 = (state_36415[(11)]);
var inst_36379 = (state_36415[(8)]);
var inst_36383 = (state_36415[(9)]);
var inst_36387 = (inst_36379[inst_36380] = inst_36383);
var inst_36388__$1 = (inst_36380 + (1));
var inst_36389 = (inst_36388__$1 < n);
var state_36415__$1 = (function (){var statearr_36429 = state_36415;
(statearr_36429[(11)] = inst_36388__$1);

(statearr_36429[(12)] = inst_36387);

return statearr_36429;
})();
if(cljs.core.truth_(inst_36389)){
var statearr_36430_36453 = state_36415__$1;
(statearr_36430_36453[(1)] = (8));

} else {
var statearr_36431_36454 = state_36415__$1;
(statearr_36431_36454[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36416 === (14))){
var inst_36408 = (state_36415[(2)]);
var inst_36409 = cljs.core.async.close_BANG_.call(null,out);
var state_36415__$1 = (function (){var statearr_36433 = state_36415;
(statearr_36433[(13)] = inst_36408);

return statearr_36433;
})();
var statearr_36434_36455 = state_36415__$1;
(statearr_36434_36455[(2)] = inst_36409);

(statearr_36434_36455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36416 === (10))){
var inst_36399 = (state_36415[(2)]);
var state_36415__$1 = state_36415;
var statearr_36435_36456 = state_36415__$1;
(statearr_36435_36456[(2)] = inst_36399);

(statearr_36435_36456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36416 === (8))){
var inst_36388 = (state_36415[(11)]);
var inst_36379 = (state_36415[(8)]);
var tmp36432 = inst_36379;
var inst_36379__$1 = tmp36432;
var inst_36380 = inst_36388;
var state_36415__$1 = (function (){var statearr_36436 = state_36415;
(statearr_36436[(7)] = inst_36380);

(statearr_36436[(8)] = inst_36379__$1);

return statearr_36436;
})();
var statearr_36437_36457 = state_36415__$1;
(statearr_36437_36457[(2)] = null);

(statearr_36437_36457[(1)] = (2));


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
});})(c__24441__auto___36443,out))
;
return ((function (switch__24346__auto__,c__24441__auto___36443,out){
return (function() {
var cljs$core$async$state_machine__24347__auto__ = null;
var cljs$core$async$state_machine__24347__auto____0 = (function (){
var statearr_36438 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36438[(0)] = cljs$core$async$state_machine__24347__auto__);

(statearr_36438[(1)] = (1));

return statearr_36438;
});
var cljs$core$async$state_machine__24347__auto____1 = (function (state_36415){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_36415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e36439){if((e36439 instanceof Object)){
var ex__24350__auto__ = e36439;
var statearr_36440_36458 = state_36415;
(statearr_36440_36458[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36459 = state_36415;
state_36415 = G__36459;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
cljs$core$async$state_machine__24347__auto__ = function(state_36415){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24347__auto____1.call(this,state_36415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24347__auto____0;
cljs$core$async$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24347__auto____1;
return cljs$core$async$state_machine__24347__auto__;
})()
;})(switch__24346__auto__,c__24441__auto___36443,out))
})();
var state__24443__auto__ = (function (){var statearr_36441 = f__24442__auto__.call(null);
(statearr_36441[(6)] = c__24441__auto___36443);

return statearr_36441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto___36443,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36461 = arguments.length;
switch (G__36461) {
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

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24441__auto___36531 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto___36531,out){
return (function (){
var f__24442__auto__ = (function (){var switch__24346__auto__ = ((function (c__24441__auto___36531,out){
return (function (state_36503){
var state_val_36504 = (state_36503[(1)]);
if((state_val_36504 === (7))){
var inst_36499 = (state_36503[(2)]);
var state_36503__$1 = state_36503;
var statearr_36505_36532 = state_36503__$1;
(statearr_36505_36532[(2)] = inst_36499);

(statearr_36505_36532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36504 === (1))){
var inst_36462 = [];
var inst_36463 = inst_36462;
var inst_36464 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36503__$1 = (function (){var statearr_36506 = state_36503;
(statearr_36506[(7)] = inst_36463);

(statearr_36506[(8)] = inst_36464);

return statearr_36506;
})();
var statearr_36507_36533 = state_36503__$1;
(statearr_36507_36533[(2)] = null);

(statearr_36507_36533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36504 === (4))){
var inst_36467 = (state_36503[(9)]);
var inst_36467__$1 = (state_36503[(2)]);
var inst_36468 = (inst_36467__$1 == null);
var inst_36469 = cljs.core.not.call(null,inst_36468);
var state_36503__$1 = (function (){var statearr_36508 = state_36503;
(statearr_36508[(9)] = inst_36467__$1);

return statearr_36508;
})();
if(inst_36469){
var statearr_36509_36534 = state_36503__$1;
(statearr_36509_36534[(1)] = (5));

} else {
var statearr_36510_36535 = state_36503__$1;
(statearr_36510_36535[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36504 === (15))){
var inst_36493 = (state_36503[(2)]);
var state_36503__$1 = state_36503;
var statearr_36511_36536 = state_36503__$1;
(statearr_36511_36536[(2)] = inst_36493);

(statearr_36511_36536[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36504 === (13))){
var state_36503__$1 = state_36503;
var statearr_36512_36537 = state_36503__$1;
(statearr_36512_36537[(2)] = null);

(statearr_36512_36537[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36504 === (6))){
var inst_36463 = (state_36503[(7)]);
var inst_36488 = inst_36463.length;
var inst_36489 = (inst_36488 > (0));
var state_36503__$1 = state_36503;
if(cljs.core.truth_(inst_36489)){
var statearr_36513_36538 = state_36503__$1;
(statearr_36513_36538[(1)] = (12));

} else {
var statearr_36514_36539 = state_36503__$1;
(statearr_36514_36539[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36504 === (3))){
var inst_36501 = (state_36503[(2)]);
var state_36503__$1 = state_36503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36503__$1,inst_36501);
} else {
if((state_val_36504 === (12))){
var inst_36463 = (state_36503[(7)]);
var inst_36491 = cljs.core.vec.call(null,inst_36463);
var state_36503__$1 = state_36503;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36503__$1,(15),out,inst_36491);
} else {
if((state_val_36504 === (2))){
var state_36503__$1 = state_36503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36503__$1,(4),ch);
} else {
if((state_val_36504 === (11))){
var inst_36467 = (state_36503[(9)]);
var inst_36471 = (state_36503[(10)]);
var inst_36481 = (state_36503[(2)]);
var inst_36482 = [];
var inst_36483 = inst_36482.push(inst_36467);
var inst_36463 = inst_36482;
var inst_36464 = inst_36471;
var state_36503__$1 = (function (){var statearr_36515 = state_36503;
(statearr_36515[(11)] = inst_36481);

(statearr_36515[(7)] = inst_36463);

(statearr_36515[(12)] = inst_36483);

(statearr_36515[(8)] = inst_36464);

return statearr_36515;
})();
var statearr_36516_36540 = state_36503__$1;
(statearr_36516_36540[(2)] = null);

(statearr_36516_36540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36504 === (9))){
var inst_36463 = (state_36503[(7)]);
var inst_36479 = cljs.core.vec.call(null,inst_36463);
var state_36503__$1 = state_36503;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36503__$1,(11),out,inst_36479);
} else {
if((state_val_36504 === (5))){
var inst_36467 = (state_36503[(9)]);
var inst_36471 = (state_36503[(10)]);
var inst_36464 = (state_36503[(8)]);
var inst_36471__$1 = f.call(null,inst_36467);
var inst_36472 = cljs.core._EQ_.call(null,inst_36471__$1,inst_36464);
var inst_36473 = cljs.core.keyword_identical_QMARK_.call(null,inst_36464,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36474 = ((inst_36472) || (inst_36473));
var state_36503__$1 = (function (){var statearr_36517 = state_36503;
(statearr_36517[(10)] = inst_36471__$1);

return statearr_36517;
})();
if(cljs.core.truth_(inst_36474)){
var statearr_36518_36541 = state_36503__$1;
(statearr_36518_36541[(1)] = (8));

} else {
var statearr_36519_36542 = state_36503__$1;
(statearr_36519_36542[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36504 === (14))){
var inst_36496 = (state_36503[(2)]);
var inst_36497 = cljs.core.async.close_BANG_.call(null,out);
var state_36503__$1 = (function (){var statearr_36521 = state_36503;
(statearr_36521[(13)] = inst_36496);

return statearr_36521;
})();
var statearr_36522_36543 = state_36503__$1;
(statearr_36522_36543[(2)] = inst_36497);

(statearr_36522_36543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36504 === (10))){
var inst_36486 = (state_36503[(2)]);
var state_36503__$1 = state_36503;
var statearr_36523_36544 = state_36503__$1;
(statearr_36523_36544[(2)] = inst_36486);

(statearr_36523_36544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36504 === (8))){
var inst_36467 = (state_36503[(9)]);
var inst_36471 = (state_36503[(10)]);
var inst_36463 = (state_36503[(7)]);
var inst_36476 = inst_36463.push(inst_36467);
var tmp36520 = inst_36463;
var inst_36463__$1 = tmp36520;
var inst_36464 = inst_36471;
var state_36503__$1 = (function (){var statearr_36524 = state_36503;
(statearr_36524[(14)] = inst_36476);

(statearr_36524[(7)] = inst_36463__$1);

(statearr_36524[(8)] = inst_36464);

return statearr_36524;
})();
var statearr_36525_36545 = state_36503__$1;
(statearr_36525_36545[(2)] = null);

(statearr_36525_36545[(1)] = (2));


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
});})(c__24441__auto___36531,out))
;
return ((function (switch__24346__auto__,c__24441__auto___36531,out){
return (function() {
var cljs$core$async$state_machine__24347__auto__ = null;
var cljs$core$async$state_machine__24347__auto____0 = (function (){
var statearr_36526 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36526[(0)] = cljs$core$async$state_machine__24347__auto__);

(statearr_36526[(1)] = (1));

return statearr_36526;
});
var cljs$core$async$state_machine__24347__auto____1 = (function (state_36503){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_36503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e36527){if((e36527 instanceof Object)){
var ex__24350__auto__ = e36527;
var statearr_36528_36546 = state_36503;
(statearr_36528_36546[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36547 = state_36503;
state_36503 = G__36547;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
cljs$core$async$state_machine__24347__auto__ = function(state_36503){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24347__auto____1.call(this,state_36503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24347__auto____0;
cljs$core$async$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24347__auto____1;
return cljs$core$async$state_machine__24347__auto__;
})()
;})(switch__24346__auto__,c__24441__auto___36531,out))
})();
var state__24443__auto__ = (function (){var statearr_36529 = f__24442__auto__.call(null);
(statearr_36529[(6)] = c__24441__auto___36531);

return statearr_36529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto___36531,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
