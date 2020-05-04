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
var G__24501 = arguments.length;
switch (G__24501) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24502 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24502 = (function (f,blockable,meta24503){
this.f = f;
this.blockable = blockable;
this.meta24503 = meta24503;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24504,meta24503__$1){
var self__ = this;
var _24504__$1 = this;
return (new cljs.core.async.t_cljs$core$async24502(self__.f,self__.blockable,meta24503__$1));
});

cljs.core.async.t_cljs$core$async24502.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24504){
var self__ = this;
var _24504__$1 = this;
return self__.meta24503;
});

cljs.core.async.t_cljs$core$async24502.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24502.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24502.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24502.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24502.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24503","meta24503",-1214661586,null)], null);
});

cljs.core.async.t_cljs$core$async24502.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24502.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24502";

cljs.core.async.t_cljs$core$async24502.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async24502");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24502.
 */
cljs.core.async.__GT_t_cljs$core$async24502 = (function cljs$core$async$__GT_t_cljs$core$async24502(f__$1,blockable__$1,meta24503){
return (new cljs.core.async.t_cljs$core$async24502(f__$1,blockable__$1,meta24503));
});

}

return (new cljs.core.async.t_cljs$core$async24502(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__24508 = arguments.length;
switch (G__24508) {
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
var G__24511 = arguments.length;
switch (G__24511) {
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
var G__24514 = arguments.length;
switch (G__24514) {
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
var val_24516 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24516);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24516,ret){
return (function (){
return fn1.call(null,val_24516);
});})(val_24516,ret))
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
var G__24518 = arguments.length;
switch (G__24518) {
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
var n__4518__auto___24520 = n;
var x_24521 = (0);
while(true){
if((x_24521 < n__4518__auto___24520)){
(a[x_24521] = (0));

var G__24522 = (x_24521 + (1));
x_24521 = G__24522;
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

var G__24523 = (i + (1));
i = G__24523;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24524 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24524 = (function (flag,meta24525){
this.flag = flag;
this.meta24525 = meta24525;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24526,meta24525__$1){
var self__ = this;
var _24526__$1 = this;
return (new cljs.core.async.t_cljs$core$async24524(self__.flag,meta24525__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24524.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24526){
var self__ = this;
var _24526__$1 = this;
return self__.meta24525;
});})(flag))
;

cljs.core.async.t_cljs$core$async24524.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24524.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24524.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24524.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24524.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24525","meta24525",500414039,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24524.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24524.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24524";

cljs.core.async.t_cljs$core$async24524.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async24524");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24524.
 */
cljs.core.async.__GT_t_cljs$core$async24524 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24524(flag__$1,meta24525){
return (new cljs.core.async.t_cljs$core$async24524(flag__$1,meta24525));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24524(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24527 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24527 = (function (flag,cb,meta24528){
this.flag = flag;
this.cb = cb;
this.meta24528 = meta24528;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24529,meta24528__$1){
var self__ = this;
var _24529__$1 = this;
return (new cljs.core.async.t_cljs$core$async24527(self__.flag,self__.cb,meta24528__$1));
});

cljs.core.async.t_cljs$core$async24527.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24529){
var self__ = this;
var _24529__$1 = this;
return self__.meta24528;
});

cljs.core.async.t_cljs$core$async24527.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24527.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24527.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24527.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24527.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24528","meta24528",1232506095,null)], null);
});

cljs.core.async.t_cljs$core$async24527.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24527.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24527";

cljs.core.async.t_cljs$core$async24527.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async24527");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24527.
 */
cljs.core.async.__GT_t_cljs$core$async24527 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24527(flag__$1,cb__$1,meta24528){
return (new cljs.core.async.t_cljs$core$async24527(flag__$1,cb__$1,meta24528));
});

}

return (new cljs.core.async.t_cljs$core$async24527(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24530_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24530_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24531_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24531_SHARP_,port], null));
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
var G__24532 = (i + (1));
i = G__24532;
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
var len__4641__auto___24538 = arguments.length;
var i__4642__auto___24539 = (0);
while(true){
if((i__4642__auto___24539 < len__4641__auto___24538)){
args__4647__auto__.push((arguments[i__4642__auto___24539]));

var G__24540 = (i__4642__auto___24539 + (1));
i__4642__auto___24539 = G__24540;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24535){
var map__24536 = p__24535;
var map__24536__$1 = (((((!((map__24536 == null))))?(((((map__24536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24536):map__24536);
var opts = map__24536__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24533){
var G__24534 = cljs.core.first.call(null,seq24533);
var seq24533__$1 = cljs.core.next.call(null,seq24533);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24534,seq24533__$1);
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
var G__24542 = arguments.length;
switch (G__24542) {
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
var c__24441__auto___24588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto___24588){
return (function (){
var f__24442__auto__ = (function (){var switch__24346__auto__ = ((function (c__24441__auto___24588){
return (function (state_24566){
var state_val_24567 = (state_24566[(1)]);
if((state_val_24567 === (7))){
var inst_24562 = (state_24566[(2)]);
var state_24566__$1 = state_24566;
var statearr_24568_24589 = state_24566__$1;
(statearr_24568_24589[(2)] = inst_24562);

(statearr_24568_24589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (1))){
var state_24566__$1 = state_24566;
var statearr_24569_24590 = state_24566__$1;
(statearr_24569_24590[(2)] = null);

(statearr_24569_24590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (4))){
var inst_24545 = (state_24566[(7)]);
var inst_24545__$1 = (state_24566[(2)]);
var inst_24546 = (inst_24545__$1 == null);
var state_24566__$1 = (function (){var statearr_24570 = state_24566;
(statearr_24570[(7)] = inst_24545__$1);

return statearr_24570;
})();
if(cljs.core.truth_(inst_24546)){
var statearr_24571_24591 = state_24566__$1;
(statearr_24571_24591[(1)] = (5));

} else {
var statearr_24572_24592 = state_24566__$1;
(statearr_24572_24592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (13))){
var state_24566__$1 = state_24566;
var statearr_24573_24593 = state_24566__$1;
(statearr_24573_24593[(2)] = null);

(statearr_24573_24593[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (6))){
var inst_24545 = (state_24566[(7)]);
var state_24566__$1 = state_24566;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24566__$1,(11),to,inst_24545);
} else {
if((state_val_24567 === (3))){
var inst_24564 = (state_24566[(2)]);
var state_24566__$1 = state_24566;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24566__$1,inst_24564);
} else {
if((state_val_24567 === (12))){
var state_24566__$1 = state_24566;
var statearr_24574_24594 = state_24566__$1;
(statearr_24574_24594[(2)] = null);

(statearr_24574_24594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (2))){
var state_24566__$1 = state_24566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24566__$1,(4),from);
} else {
if((state_val_24567 === (11))){
var inst_24555 = (state_24566[(2)]);
var state_24566__$1 = state_24566;
if(cljs.core.truth_(inst_24555)){
var statearr_24575_24595 = state_24566__$1;
(statearr_24575_24595[(1)] = (12));

} else {
var statearr_24576_24596 = state_24566__$1;
(statearr_24576_24596[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (9))){
var state_24566__$1 = state_24566;
var statearr_24577_24597 = state_24566__$1;
(statearr_24577_24597[(2)] = null);

(statearr_24577_24597[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (5))){
var state_24566__$1 = state_24566;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24578_24598 = state_24566__$1;
(statearr_24578_24598[(1)] = (8));

} else {
var statearr_24579_24599 = state_24566__$1;
(statearr_24579_24599[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (14))){
var inst_24560 = (state_24566[(2)]);
var state_24566__$1 = state_24566;
var statearr_24580_24600 = state_24566__$1;
(statearr_24580_24600[(2)] = inst_24560);

(statearr_24580_24600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (10))){
var inst_24552 = (state_24566[(2)]);
var state_24566__$1 = state_24566;
var statearr_24581_24601 = state_24566__$1;
(statearr_24581_24601[(2)] = inst_24552);

(statearr_24581_24601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (8))){
var inst_24549 = cljs.core.async.close_BANG_.call(null,to);
var state_24566__$1 = state_24566;
var statearr_24582_24602 = state_24566__$1;
(statearr_24582_24602[(2)] = inst_24549);

(statearr_24582_24602[(1)] = (10));


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
});})(c__24441__auto___24588))
;
return ((function (switch__24346__auto__,c__24441__auto___24588){
return (function() {
var cljs$core$async$state_machine__24347__auto__ = null;
var cljs$core$async$state_machine__24347__auto____0 = (function (){
var statearr_24583 = [null,null,null,null,null,null,null,null];
(statearr_24583[(0)] = cljs$core$async$state_machine__24347__auto__);

(statearr_24583[(1)] = (1));

return statearr_24583;
});
var cljs$core$async$state_machine__24347__auto____1 = (function (state_24566){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_24566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e24584){if((e24584 instanceof Object)){
var ex__24350__auto__ = e24584;
var statearr_24585_24603 = state_24566;
(statearr_24585_24603[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24604 = state_24566;
state_24566 = G__24604;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
cljs$core$async$state_machine__24347__auto__ = function(state_24566){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24347__auto____1.call(this,state_24566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24347__auto____0;
cljs$core$async$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24347__auto____1;
return cljs$core$async$state_machine__24347__auto__;
})()
;})(switch__24346__auto__,c__24441__auto___24588))
})();
var state__24443__auto__ = (function (){var statearr_24586 = f__24442__auto__.call(null);
(statearr_24586[(6)] = c__24441__auto___24588);

return statearr_24586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto___24588))
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
return (function (p__24605){
var vec__24606 = p__24605;
var v = cljs.core.nth.call(null,vec__24606,(0),null);
var p = cljs.core.nth.call(null,vec__24606,(1),null);
var job = vec__24606;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24441__auto___24777 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto___24777,res,vec__24606,v,p,job,jobs,results){
return (function (){
var f__24442__auto__ = (function (){var switch__24346__auto__ = ((function (c__24441__auto___24777,res,vec__24606,v,p,job,jobs,results){
return (function (state_24613){
var state_val_24614 = (state_24613[(1)]);
if((state_val_24614 === (1))){
var state_24613__$1 = state_24613;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24613__$1,(2),res,v);
} else {
if((state_val_24614 === (2))){
var inst_24610 = (state_24613[(2)]);
var inst_24611 = cljs.core.async.close_BANG_.call(null,res);
var state_24613__$1 = (function (){var statearr_24615 = state_24613;
(statearr_24615[(7)] = inst_24610);

return statearr_24615;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24613__$1,inst_24611);
} else {
return null;
}
}
});})(c__24441__auto___24777,res,vec__24606,v,p,job,jobs,results))
;
return ((function (switch__24346__auto__,c__24441__auto___24777,res,vec__24606,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____0 = (function (){
var statearr_24616 = [null,null,null,null,null,null,null,null];
(statearr_24616[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__);

(statearr_24616[(1)] = (1));

return statearr_24616;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____1 = (function (state_24613){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_24613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e24617){if((e24617 instanceof Object)){
var ex__24350__auto__ = e24617;
var statearr_24618_24778 = state_24613;
(statearr_24618_24778[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24779 = state_24613;
state_24613 = G__24779;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__ = function(state_24613){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____1.call(this,state_24613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__;
})()
;})(switch__24346__auto__,c__24441__auto___24777,res,vec__24606,v,p,job,jobs,results))
})();
var state__24443__auto__ = (function (){var statearr_24619 = f__24442__auto__.call(null);
(statearr_24619[(6)] = c__24441__auto___24777);

return statearr_24619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto___24777,res,vec__24606,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24620){
var vec__24621 = p__24620;
var v = cljs.core.nth.call(null,vec__24621,(0),null);
var p = cljs.core.nth.call(null,vec__24621,(1),null);
var job = vec__24621;
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
var n__4518__auto___24780 = n;
var __24781 = (0);
while(true){
if((__24781 < n__4518__auto___24780)){
var G__24624_24782 = type;
var G__24624_24783__$1 = (((G__24624_24782 instanceof cljs.core.Keyword))?G__24624_24782.fqn:null);
switch (G__24624_24783__$1) {
case "compute":
var c__24441__auto___24785 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24781,c__24441__auto___24785,G__24624_24782,G__24624_24783__$1,n__4518__auto___24780,jobs,results,process,async){
return (function (){
var f__24442__auto__ = (function (){var switch__24346__auto__ = ((function (__24781,c__24441__auto___24785,G__24624_24782,G__24624_24783__$1,n__4518__auto___24780,jobs,results,process,async){
return (function (state_24637){
var state_val_24638 = (state_24637[(1)]);
if((state_val_24638 === (1))){
var state_24637__$1 = state_24637;
var statearr_24639_24786 = state_24637__$1;
(statearr_24639_24786[(2)] = null);

(statearr_24639_24786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24638 === (2))){
var state_24637__$1 = state_24637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24637__$1,(4),jobs);
} else {
if((state_val_24638 === (3))){
var inst_24635 = (state_24637[(2)]);
var state_24637__$1 = state_24637;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24637__$1,inst_24635);
} else {
if((state_val_24638 === (4))){
var inst_24627 = (state_24637[(2)]);
var inst_24628 = process.call(null,inst_24627);
var state_24637__$1 = state_24637;
if(cljs.core.truth_(inst_24628)){
var statearr_24640_24787 = state_24637__$1;
(statearr_24640_24787[(1)] = (5));

} else {
var statearr_24641_24788 = state_24637__$1;
(statearr_24641_24788[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24638 === (5))){
var state_24637__$1 = state_24637;
var statearr_24642_24789 = state_24637__$1;
(statearr_24642_24789[(2)] = null);

(statearr_24642_24789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24638 === (6))){
var state_24637__$1 = state_24637;
var statearr_24643_24790 = state_24637__$1;
(statearr_24643_24790[(2)] = null);

(statearr_24643_24790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24638 === (7))){
var inst_24633 = (state_24637[(2)]);
var state_24637__$1 = state_24637;
var statearr_24644_24791 = state_24637__$1;
(statearr_24644_24791[(2)] = inst_24633);

(statearr_24644_24791[(1)] = (3));


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
});})(__24781,c__24441__auto___24785,G__24624_24782,G__24624_24783__$1,n__4518__auto___24780,jobs,results,process,async))
;
return ((function (__24781,switch__24346__auto__,c__24441__auto___24785,G__24624_24782,G__24624_24783__$1,n__4518__auto___24780,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____0 = (function (){
var statearr_24645 = [null,null,null,null,null,null,null];
(statearr_24645[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__);

(statearr_24645[(1)] = (1));

return statearr_24645;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____1 = (function (state_24637){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_24637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e24646){if((e24646 instanceof Object)){
var ex__24350__auto__ = e24646;
var statearr_24647_24792 = state_24637;
(statearr_24647_24792[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24793 = state_24637;
state_24637 = G__24793;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__ = function(state_24637){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____1.call(this,state_24637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__;
})()
;})(__24781,switch__24346__auto__,c__24441__auto___24785,G__24624_24782,G__24624_24783__$1,n__4518__auto___24780,jobs,results,process,async))
})();
var state__24443__auto__ = (function (){var statearr_24648 = f__24442__auto__.call(null);
(statearr_24648[(6)] = c__24441__auto___24785);

return statearr_24648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(__24781,c__24441__auto___24785,G__24624_24782,G__24624_24783__$1,n__4518__auto___24780,jobs,results,process,async))
);


break;
case "async":
var c__24441__auto___24794 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24781,c__24441__auto___24794,G__24624_24782,G__24624_24783__$1,n__4518__auto___24780,jobs,results,process,async){
return (function (){
var f__24442__auto__ = (function (){var switch__24346__auto__ = ((function (__24781,c__24441__auto___24794,G__24624_24782,G__24624_24783__$1,n__4518__auto___24780,jobs,results,process,async){
return (function (state_24661){
var state_val_24662 = (state_24661[(1)]);
if((state_val_24662 === (1))){
var state_24661__$1 = state_24661;
var statearr_24663_24795 = state_24661__$1;
(statearr_24663_24795[(2)] = null);

(statearr_24663_24795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24662 === (2))){
var state_24661__$1 = state_24661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24661__$1,(4),jobs);
} else {
if((state_val_24662 === (3))){
var inst_24659 = (state_24661[(2)]);
var state_24661__$1 = state_24661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24661__$1,inst_24659);
} else {
if((state_val_24662 === (4))){
var inst_24651 = (state_24661[(2)]);
var inst_24652 = async.call(null,inst_24651);
var state_24661__$1 = state_24661;
if(cljs.core.truth_(inst_24652)){
var statearr_24664_24796 = state_24661__$1;
(statearr_24664_24796[(1)] = (5));

} else {
var statearr_24665_24797 = state_24661__$1;
(statearr_24665_24797[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24662 === (5))){
var state_24661__$1 = state_24661;
var statearr_24666_24798 = state_24661__$1;
(statearr_24666_24798[(2)] = null);

(statearr_24666_24798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24662 === (6))){
var state_24661__$1 = state_24661;
var statearr_24667_24799 = state_24661__$1;
(statearr_24667_24799[(2)] = null);

(statearr_24667_24799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24662 === (7))){
var inst_24657 = (state_24661[(2)]);
var state_24661__$1 = state_24661;
var statearr_24668_24800 = state_24661__$1;
(statearr_24668_24800[(2)] = inst_24657);

(statearr_24668_24800[(1)] = (3));


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
});})(__24781,c__24441__auto___24794,G__24624_24782,G__24624_24783__$1,n__4518__auto___24780,jobs,results,process,async))
;
return ((function (__24781,switch__24346__auto__,c__24441__auto___24794,G__24624_24782,G__24624_24783__$1,n__4518__auto___24780,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____0 = (function (){
var statearr_24669 = [null,null,null,null,null,null,null];
(statearr_24669[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__);

(statearr_24669[(1)] = (1));

return statearr_24669;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____1 = (function (state_24661){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_24661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e24670){if((e24670 instanceof Object)){
var ex__24350__auto__ = e24670;
var statearr_24671_24801 = state_24661;
(statearr_24671_24801[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24802 = state_24661;
state_24661 = G__24802;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__ = function(state_24661){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____1.call(this,state_24661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__;
})()
;})(__24781,switch__24346__auto__,c__24441__auto___24794,G__24624_24782,G__24624_24783__$1,n__4518__auto___24780,jobs,results,process,async))
})();
var state__24443__auto__ = (function (){var statearr_24672 = f__24442__auto__.call(null);
(statearr_24672[(6)] = c__24441__auto___24794);

return statearr_24672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(__24781,c__24441__auto___24794,G__24624_24782,G__24624_24783__$1,n__4518__auto___24780,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24624_24783__$1)].join('')));

}

var G__24803 = (__24781 + (1));
__24781 = G__24803;
continue;
} else {
}
break;
}

var c__24441__auto___24804 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto___24804,jobs,results,process,async){
return (function (){
var f__24442__auto__ = (function (){var switch__24346__auto__ = ((function (c__24441__auto___24804,jobs,results,process,async){
return (function (state_24694){
var state_val_24695 = (state_24694[(1)]);
if((state_val_24695 === (7))){
var inst_24690 = (state_24694[(2)]);
var state_24694__$1 = state_24694;
var statearr_24696_24805 = state_24694__$1;
(statearr_24696_24805[(2)] = inst_24690);

(statearr_24696_24805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24695 === (1))){
var state_24694__$1 = state_24694;
var statearr_24697_24806 = state_24694__$1;
(statearr_24697_24806[(2)] = null);

(statearr_24697_24806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24695 === (4))){
var inst_24675 = (state_24694[(7)]);
var inst_24675__$1 = (state_24694[(2)]);
var inst_24676 = (inst_24675__$1 == null);
var state_24694__$1 = (function (){var statearr_24698 = state_24694;
(statearr_24698[(7)] = inst_24675__$1);

return statearr_24698;
})();
if(cljs.core.truth_(inst_24676)){
var statearr_24699_24807 = state_24694__$1;
(statearr_24699_24807[(1)] = (5));

} else {
var statearr_24700_24808 = state_24694__$1;
(statearr_24700_24808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24695 === (6))){
var inst_24675 = (state_24694[(7)]);
var inst_24680 = (state_24694[(8)]);
var inst_24680__$1 = cljs.core.async.chan.call(null,(1));
var inst_24681 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24682 = [inst_24675,inst_24680__$1];
var inst_24683 = (new cljs.core.PersistentVector(null,2,(5),inst_24681,inst_24682,null));
var state_24694__$1 = (function (){var statearr_24701 = state_24694;
(statearr_24701[(8)] = inst_24680__$1);

return statearr_24701;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24694__$1,(8),jobs,inst_24683);
} else {
if((state_val_24695 === (3))){
var inst_24692 = (state_24694[(2)]);
var state_24694__$1 = state_24694;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24694__$1,inst_24692);
} else {
if((state_val_24695 === (2))){
var state_24694__$1 = state_24694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24694__$1,(4),from);
} else {
if((state_val_24695 === (9))){
var inst_24687 = (state_24694[(2)]);
var state_24694__$1 = (function (){var statearr_24702 = state_24694;
(statearr_24702[(9)] = inst_24687);

return statearr_24702;
})();
var statearr_24703_24809 = state_24694__$1;
(statearr_24703_24809[(2)] = null);

(statearr_24703_24809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24695 === (5))){
var inst_24678 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24694__$1 = state_24694;
var statearr_24704_24810 = state_24694__$1;
(statearr_24704_24810[(2)] = inst_24678);

(statearr_24704_24810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24695 === (8))){
var inst_24680 = (state_24694[(8)]);
var inst_24685 = (state_24694[(2)]);
var state_24694__$1 = (function (){var statearr_24705 = state_24694;
(statearr_24705[(10)] = inst_24685);

return statearr_24705;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24694__$1,(9),results,inst_24680);
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
});})(c__24441__auto___24804,jobs,results,process,async))
;
return ((function (switch__24346__auto__,c__24441__auto___24804,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____0 = (function (){
var statearr_24706 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24706[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__);

(statearr_24706[(1)] = (1));

return statearr_24706;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____1 = (function (state_24694){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_24694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e24707){if((e24707 instanceof Object)){
var ex__24350__auto__ = e24707;
var statearr_24708_24811 = state_24694;
(statearr_24708_24811[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24812 = state_24694;
state_24694 = G__24812;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__ = function(state_24694){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____1.call(this,state_24694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__;
})()
;})(switch__24346__auto__,c__24441__auto___24804,jobs,results,process,async))
})();
var state__24443__auto__ = (function (){var statearr_24709 = f__24442__auto__.call(null);
(statearr_24709[(6)] = c__24441__auto___24804);

return statearr_24709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto___24804,jobs,results,process,async))
);


var c__24441__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto__,jobs,results,process,async){
return (function (){
var f__24442__auto__ = (function (){var switch__24346__auto__ = ((function (c__24441__auto__,jobs,results,process,async){
return (function (state_24747){
var state_val_24748 = (state_24747[(1)]);
if((state_val_24748 === (7))){
var inst_24743 = (state_24747[(2)]);
var state_24747__$1 = state_24747;
var statearr_24749_24813 = state_24747__$1;
(statearr_24749_24813[(2)] = inst_24743);

(statearr_24749_24813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (20))){
var state_24747__$1 = state_24747;
var statearr_24750_24814 = state_24747__$1;
(statearr_24750_24814[(2)] = null);

(statearr_24750_24814[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (1))){
var state_24747__$1 = state_24747;
var statearr_24751_24815 = state_24747__$1;
(statearr_24751_24815[(2)] = null);

(statearr_24751_24815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (4))){
var inst_24712 = (state_24747[(7)]);
var inst_24712__$1 = (state_24747[(2)]);
var inst_24713 = (inst_24712__$1 == null);
var state_24747__$1 = (function (){var statearr_24752 = state_24747;
(statearr_24752[(7)] = inst_24712__$1);

return statearr_24752;
})();
if(cljs.core.truth_(inst_24713)){
var statearr_24753_24816 = state_24747__$1;
(statearr_24753_24816[(1)] = (5));

} else {
var statearr_24754_24817 = state_24747__$1;
(statearr_24754_24817[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (15))){
var inst_24725 = (state_24747[(8)]);
var state_24747__$1 = state_24747;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24747__$1,(18),to,inst_24725);
} else {
if((state_val_24748 === (21))){
var inst_24738 = (state_24747[(2)]);
var state_24747__$1 = state_24747;
var statearr_24755_24818 = state_24747__$1;
(statearr_24755_24818[(2)] = inst_24738);

(statearr_24755_24818[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (13))){
var inst_24740 = (state_24747[(2)]);
var state_24747__$1 = (function (){var statearr_24756 = state_24747;
(statearr_24756[(9)] = inst_24740);

return statearr_24756;
})();
var statearr_24757_24819 = state_24747__$1;
(statearr_24757_24819[(2)] = null);

(statearr_24757_24819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (6))){
var inst_24712 = (state_24747[(7)]);
var state_24747__$1 = state_24747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24747__$1,(11),inst_24712);
} else {
if((state_val_24748 === (17))){
var inst_24733 = (state_24747[(2)]);
var state_24747__$1 = state_24747;
if(cljs.core.truth_(inst_24733)){
var statearr_24758_24820 = state_24747__$1;
(statearr_24758_24820[(1)] = (19));

} else {
var statearr_24759_24821 = state_24747__$1;
(statearr_24759_24821[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (3))){
var inst_24745 = (state_24747[(2)]);
var state_24747__$1 = state_24747;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24747__$1,inst_24745);
} else {
if((state_val_24748 === (12))){
var inst_24722 = (state_24747[(10)]);
var state_24747__$1 = state_24747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24747__$1,(14),inst_24722);
} else {
if((state_val_24748 === (2))){
var state_24747__$1 = state_24747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24747__$1,(4),results);
} else {
if((state_val_24748 === (19))){
var state_24747__$1 = state_24747;
var statearr_24760_24822 = state_24747__$1;
(statearr_24760_24822[(2)] = null);

(statearr_24760_24822[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (11))){
var inst_24722 = (state_24747[(2)]);
var state_24747__$1 = (function (){var statearr_24761 = state_24747;
(statearr_24761[(10)] = inst_24722);

return statearr_24761;
})();
var statearr_24762_24823 = state_24747__$1;
(statearr_24762_24823[(2)] = null);

(statearr_24762_24823[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (9))){
var state_24747__$1 = state_24747;
var statearr_24763_24824 = state_24747__$1;
(statearr_24763_24824[(2)] = null);

(statearr_24763_24824[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (5))){
var state_24747__$1 = state_24747;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24764_24825 = state_24747__$1;
(statearr_24764_24825[(1)] = (8));

} else {
var statearr_24765_24826 = state_24747__$1;
(statearr_24765_24826[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (14))){
var inst_24725 = (state_24747[(8)]);
var inst_24727 = (state_24747[(11)]);
var inst_24725__$1 = (state_24747[(2)]);
var inst_24726 = (inst_24725__$1 == null);
var inst_24727__$1 = cljs.core.not.call(null,inst_24726);
var state_24747__$1 = (function (){var statearr_24766 = state_24747;
(statearr_24766[(8)] = inst_24725__$1);

(statearr_24766[(11)] = inst_24727__$1);

return statearr_24766;
})();
if(inst_24727__$1){
var statearr_24767_24827 = state_24747__$1;
(statearr_24767_24827[(1)] = (15));

} else {
var statearr_24768_24828 = state_24747__$1;
(statearr_24768_24828[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (16))){
var inst_24727 = (state_24747[(11)]);
var state_24747__$1 = state_24747;
var statearr_24769_24829 = state_24747__$1;
(statearr_24769_24829[(2)] = inst_24727);

(statearr_24769_24829[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (10))){
var inst_24719 = (state_24747[(2)]);
var state_24747__$1 = state_24747;
var statearr_24770_24830 = state_24747__$1;
(statearr_24770_24830[(2)] = inst_24719);

(statearr_24770_24830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (18))){
var inst_24730 = (state_24747[(2)]);
var state_24747__$1 = state_24747;
var statearr_24771_24831 = state_24747__$1;
(statearr_24771_24831[(2)] = inst_24730);

(statearr_24771_24831[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (8))){
var inst_24716 = cljs.core.async.close_BANG_.call(null,to);
var state_24747__$1 = state_24747;
var statearr_24772_24832 = state_24747__$1;
(statearr_24772_24832[(2)] = inst_24716);

(statearr_24772_24832[(1)] = (10));


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
var statearr_24773 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24773[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__);

(statearr_24773[(1)] = (1));

return statearr_24773;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____1 = (function (state_24747){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_24747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e24774){if((e24774 instanceof Object)){
var ex__24350__auto__ = e24774;
var statearr_24775_24833 = state_24747;
(statearr_24775_24833[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24834 = state_24747;
state_24747 = G__24834;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__ = function(state_24747){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____1.call(this,state_24747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24347__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24347__auto__;
})()
;})(switch__24346__auto__,c__24441__auto__,jobs,results,process,async))
})();
var state__24443__auto__ = (function (){var statearr_24776 = f__24442__auto__.call(null);
(statearr_24776[(6)] = c__24441__auto__);

return statearr_24776;
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
var G__24836 = arguments.length;
switch (G__24836) {
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
var G__24839 = arguments.length;
switch (G__24839) {
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
var G__24842 = arguments.length;
switch (G__24842) {
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
var c__24441__auto___24891 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto___24891,tc,fc){
return (function (){
var f__24442__auto__ = (function (){var switch__24346__auto__ = ((function (c__24441__auto___24891,tc,fc){
return (function (state_24868){
var state_val_24869 = (state_24868[(1)]);
if((state_val_24869 === (7))){
var inst_24864 = (state_24868[(2)]);
var state_24868__$1 = state_24868;
var statearr_24870_24892 = state_24868__$1;
(statearr_24870_24892[(2)] = inst_24864);

(statearr_24870_24892[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (1))){
var state_24868__$1 = state_24868;
var statearr_24871_24893 = state_24868__$1;
(statearr_24871_24893[(2)] = null);

(statearr_24871_24893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (4))){
var inst_24845 = (state_24868[(7)]);
var inst_24845__$1 = (state_24868[(2)]);
var inst_24846 = (inst_24845__$1 == null);
var state_24868__$1 = (function (){var statearr_24872 = state_24868;
(statearr_24872[(7)] = inst_24845__$1);

return statearr_24872;
})();
if(cljs.core.truth_(inst_24846)){
var statearr_24873_24894 = state_24868__$1;
(statearr_24873_24894[(1)] = (5));

} else {
var statearr_24874_24895 = state_24868__$1;
(statearr_24874_24895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (13))){
var state_24868__$1 = state_24868;
var statearr_24875_24896 = state_24868__$1;
(statearr_24875_24896[(2)] = null);

(statearr_24875_24896[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (6))){
var inst_24845 = (state_24868[(7)]);
var inst_24851 = p.call(null,inst_24845);
var state_24868__$1 = state_24868;
if(cljs.core.truth_(inst_24851)){
var statearr_24876_24897 = state_24868__$1;
(statearr_24876_24897[(1)] = (9));

} else {
var statearr_24877_24898 = state_24868__$1;
(statearr_24877_24898[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (3))){
var inst_24866 = (state_24868[(2)]);
var state_24868__$1 = state_24868;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24868__$1,inst_24866);
} else {
if((state_val_24869 === (12))){
var state_24868__$1 = state_24868;
var statearr_24878_24899 = state_24868__$1;
(statearr_24878_24899[(2)] = null);

(statearr_24878_24899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (2))){
var state_24868__$1 = state_24868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24868__$1,(4),ch);
} else {
if((state_val_24869 === (11))){
var inst_24845 = (state_24868[(7)]);
var inst_24855 = (state_24868[(2)]);
var state_24868__$1 = state_24868;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24868__$1,(8),inst_24855,inst_24845);
} else {
if((state_val_24869 === (9))){
var state_24868__$1 = state_24868;
var statearr_24879_24900 = state_24868__$1;
(statearr_24879_24900[(2)] = tc);

(statearr_24879_24900[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (5))){
var inst_24848 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24849 = cljs.core.async.close_BANG_.call(null,fc);
var state_24868__$1 = (function (){var statearr_24880 = state_24868;
(statearr_24880[(8)] = inst_24848);

return statearr_24880;
})();
var statearr_24881_24901 = state_24868__$1;
(statearr_24881_24901[(2)] = inst_24849);

(statearr_24881_24901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (14))){
var inst_24862 = (state_24868[(2)]);
var state_24868__$1 = state_24868;
var statearr_24882_24902 = state_24868__$1;
(statearr_24882_24902[(2)] = inst_24862);

(statearr_24882_24902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (10))){
var state_24868__$1 = state_24868;
var statearr_24883_24903 = state_24868__$1;
(statearr_24883_24903[(2)] = fc);

(statearr_24883_24903[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (8))){
var inst_24857 = (state_24868[(2)]);
var state_24868__$1 = state_24868;
if(cljs.core.truth_(inst_24857)){
var statearr_24884_24904 = state_24868__$1;
(statearr_24884_24904[(1)] = (12));

} else {
var statearr_24885_24905 = state_24868__$1;
(statearr_24885_24905[(1)] = (13));

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
});})(c__24441__auto___24891,tc,fc))
;
return ((function (switch__24346__auto__,c__24441__auto___24891,tc,fc){
return (function() {
var cljs$core$async$state_machine__24347__auto__ = null;
var cljs$core$async$state_machine__24347__auto____0 = (function (){
var statearr_24886 = [null,null,null,null,null,null,null,null,null];
(statearr_24886[(0)] = cljs$core$async$state_machine__24347__auto__);

(statearr_24886[(1)] = (1));

return statearr_24886;
});
var cljs$core$async$state_machine__24347__auto____1 = (function (state_24868){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_24868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e24887){if((e24887 instanceof Object)){
var ex__24350__auto__ = e24887;
var statearr_24888_24906 = state_24868;
(statearr_24888_24906[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24907 = state_24868;
state_24868 = G__24907;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
cljs$core$async$state_machine__24347__auto__ = function(state_24868){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24347__auto____1.call(this,state_24868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24347__auto____0;
cljs$core$async$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24347__auto____1;
return cljs$core$async$state_machine__24347__auto__;
})()
;})(switch__24346__auto__,c__24441__auto___24891,tc,fc))
})();
var state__24443__auto__ = (function (){var statearr_24889 = f__24442__auto__.call(null);
(statearr_24889[(6)] = c__24441__auto___24891);

return statearr_24889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto___24891,tc,fc))
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
return (function (state_24928){
var state_val_24929 = (state_24928[(1)]);
if((state_val_24929 === (7))){
var inst_24924 = (state_24928[(2)]);
var state_24928__$1 = state_24928;
var statearr_24930_24948 = state_24928__$1;
(statearr_24930_24948[(2)] = inst_24924);

(statearr_24930_24948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24929 === (1))){
var inst_24908 = init;
var state_24928__$1 = (function (){var statearr_24931 = state_24928;
(statearr_24931[(7)] = inst_24908);

return statearr_24931;
})();
var statearr_24932_24949 = state_24928__$1;
(statearr_24932_24949[(2)] = null);

(statearr_24932_24949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24929 === (4))){
var inst_24911 = (state_24928[(8)]);
var inst_24911__$1 = (state_24928[(2)]);
var inst_24912 = (inst_24911__$1 == null);
var state_24928__$1 = (function (){var statearr_24933 = state_24928;
(statearr_24933[(8)] = inst_24911__$1);

return statearr_24933;
})();
if(cljs.core.truth_(inst_24912)){
var statearr_24934_24950 = state_24928__$1;
(statearr_24934_24950[(1)] = (5));

} else {
var statearr_24935_24951 = state_24928__$1;
(statearr_24935_24951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24929 === (6))){
var inst_24908 = (state_24928[(7)]);
var inst_24915 = (state_24928[(9)]);
var inst_24911 = (state_24928[(8)]);
var inst_24915__$1 = f.call(null,inst_24908,inst_24911);
var inst_24916 = cljs.core.reduced_QMARK_.call(null,inst_24915__$1);
var state_24928__$1 = (function (){var statearr_24936 = state_24928;
(statearr_24936[(9)] = inst_24915__$1);

return statearr_24936;
})();
if(inst_24916){
var statearr_24937_24952 = state_24928__$1;
(statearr_24937_24952[(1)] = (8));

} else {
var statearr_24938_24953 = state_24928__$1;
(statearr_24938_24953[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24929 === (3))){
var inst_24926 = (state_24928[(2)]);
var state_24928__$1 = state_24928;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24928__$1,inst_24926);
} else {
if((state_val_24929 === (2))){
var state_24928__$1 = state_24928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24928__$1,(4),ch);
} else {
if((state_val_24929 === (9))){
var inst_24915 = (state_24928[(9)]);
var inst_24908 = inst_24915;
var state_24928__$1 = (function (){var statearr_24939 = state_24928;
(statearr_24939[(7)] = inst_24908);

return statearr_24939;
})();
var statearr_24940_24954 = state_24928__$1;
(statearr_24940_24954[(2)] = null);

(statearr_24940_24954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24929 === (5))){
var inst_24908 = (state_24928[(7)]);
var state_24928__$1 = state_24928;
var statearr_24941_24955 = state_24928__$1;
(statearr_24941_24955[(2)] = inst_24908);

(statearr_24941_24955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24929 === (10))){
var inst_24922 = (state_24928[(2)]);
var state_24928__$1 = state_24928;
var statearr_24942_24956 = state_24928__$1;
(statearr_24942_24956[(2)] = inst_24922);

(statearr_24942_24956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24929 === (8))){
var inst_24915 = (state_24928[(9)]);
var inst_24918 = cljs.core.deref.call(null,inst_24915);
var state_24928__$1 = state_24928;
var statearr_24943_24957 = state_24928__$1;
(statearr_24943_24957[(2)] = inst_24918);

(statearr_24943_24957[(1)] = (10));


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
var statearr_24944 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24944[(0)] = cljs$core$async$reduce_$_state_machine__24347__auto__);

(statearr_24944[(1)] = (1));

return statearr_24944;
});
var cljs$core$async$reduce_$_state_machine__24347__auto____1 = (function (state_24928){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_24928);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e24945){if((e24945 instanceof Object)){
var ex__24350__auto__ = e24945;
var statearr_24946_24958 = state_24928;
(statearr_24946_24958[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24959 = state_24928;
state_24928 = G__24959;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24347__auto__ = function(state_24928){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24347__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24347__auto____1.call(this,state_24928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24347__auto____0;
cljs$core$async$reduce_$_state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24347__auto____1;
return cljs$core$async$reduce_$_state_machine__24347__auto__;
})()
;})(switch__24346__auto__,c__24441__auto__))
})();
var state__24443__auto__ = (function (){var statearr_24947 = f__24442__auto__.call(null);
(statearr_24947[(6)] = c__24441__auto__);

return statearr_24947;
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
return (function (state_24965){
var state_val_24966 = (state_24965[(1)]);
if((state_val_24966 === (1))){
var inst_24960 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_24965__$1 = state_24965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24965__$1,(2),inst_24960);
} else {
if((state_val_24966 === (2))){
var inst_24962 = (state_24965[(2)]);
var inst_24963 = f__$1.call(null,inst_24962);
var state_24965__$1 = state_24965;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24965__$1,inst_24963);
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
var statearr_24967 = [null,null,null,null,null,null,null];
(statearr_24967[(0)] = cljs$core$async$transduce_$_state_machine__24347__auto__);

(statearr_24967[(1)] = (1));

return statearr_24967;
});
var cljs$core$async$transduce_$_state_machine__24347__auto____1 = (function (state_24965){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_24965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e24968){if((e24968 instanceof Object)){
var ex__24350__auto__ = e24968;
var statearr_24969_24971 = state_24965;
(statearr_24969_24971[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24972 = state_24965;
state_24965 = G__24972;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24347__auto__ = function(state_24965){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24347__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24347__auto____1.call(this,state_24965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24347__auto____0;
cljs$core$async$transduce_$_state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24347__auto____1;
return cljs$core$async$transduce_$_state_machine__24347__auto__;
})()
;})(switch__24346__auto__,c__24441__auto__,f__$1))
})();
var state__24443__auto__ = (function (){var statearr_24970 = f__24442__auto__.call(null);
(statearr_24970[(6)] = c__24441__auto__);

return statearr_24970;
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
var G__24974 = arguments.length;
switch (G__24974) {
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
return (function (state_24999){
var state_val_25000 = (state_24999[(1)]);
if((state_val_25000 === (7))){
var inst_24981 = (state_24999[(2)]);
var state_24999__$1 = state_24999;
var statearr_25001_25022 = state_24999__$1;
(statearr_25001_25022[(2)] = inst_24981);

(statearr_25001_25022[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25000 === (1))){
var inst_24975 = cljs.core.seq.call(null,coll);
var inst_24976 = inst_24975;
var state_24999__$1 = (function (){var statearr_25002 = state_24999;
(statearr_25002[(7)] = inst_24976);

return statearr_25002;
})();
var statearr_25003_25023 = state_24999__$1;
(statearr_25003_25023[(2)] = null);

(statearr_25003_25023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25000 === (4))){
var inst_24976 = (state_24999[(7)]);
var inst_24979 = cljs.core.first.call(null,inst_24976);
var state_24999__$1 = state_24999;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24999__$1,(7),ch,inst_24979);
} else {
if((state_val_25000 === (13))){
var inst_24993 = (state_24999[(2)]);
var state_24999__$1 = state_24999;
var statearr_25004_25024 = state_24999__$1;
(statearr_25004_25024[(2)] = inst_24993);

(statearr_25004_25024[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25000 === (6))){
var inst_24984 = (state_24999[(2)]);
var state_24999__$1 = state_24999;
if(cljs.core.truth_(inst_24984)){
var statearr_25005_25025 = state_24999__$1;
(statearr_25005_25025[(1)] = (8));

} else {
var statearr_25006_25026 = state_24999__$1;
(statearr_25006_25026[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25000 === (3))){
var inst_24997 = (state_24999[(2)]);
var state_24999__$1 = state_24999;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24999__$1,inst_24997);
} else {
if((state_val_25000 === (12))){
var state_24999__$1 = state_24999;
var statearr_25007_25027 = state_24999__$1;
(statearr_25007_25027[(2)] = null);

(statearr_25007_25027[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25000 === (2))){
var inst_24976 = (state_24999[(7)]);
var state_24999__$1 = state_24999;
if(cljs.core.truth_(inst_24976)){
var statearr_25008_25028 = state_24999__$1;
(statearr_25008_25028[(1)] = (4));

} else {
var statearr_25009_25029 = state_24999__$1;
(statearr_25009_25029[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25000 === (11))){
var inst_24990 = cljs.core.async.close_BANG_.call(null,ch);
var state_24999__$1 = state_24999;
var statearr_25010_25030 = state_24999__$1;
(statearr_25010_25030[(2)] = inst_24990);

(statearr_25010_25030[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25000 === (9))){
var state_24999__$1 = state_24999;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25011_25031 = state_24999__$1;
(statearr_25011_25031[(1)] = (11));

} else {
var statearr_25012_25032 = state_24999__$1;
(statearr_25012_25032[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25000 === (5))){
var inst_24976 = (state_24999[(7)]);
var state_24999__$1 = state_24999;
var statearr_25013_25033 = state_24999__$1;
(statearr_25013_25033[(2)] = inst_24976);

(statearr_25013_25033[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25000 === (10))){
var inst_24995 = (state_24999[(2)]);
var state_24999__$1 = state_24999;
var statearr_25014_25034 = state_24999__$1;
(statearr_25014_25034[(2)] = inst_24995);

(statearr_25014_25034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25000 === (8))){
var inst_24976 = (state_24999[(7)]);
var inst_24986 = cljs.core.next.call(null,inst_24976);
var inst_24976__$1 = inst_24986;
var state_24999__$1 = (function (){var statearr_25015 = state_24999;
(statearr_25015[(7)] = inst_24976__$1);

return statearr_25015;
})();
var statearr_25016_25035 = state_24999__$1;
(statearr_25016_25035[(2)] = null);

(statearr_25016_25035[(1)] = (2));


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
var statearr_25017 = [null,null,null,null,null,null,null,null];
(statearr_25017[(0)] = cljs$core$async$state_machine__24347__auto__);

(statearr_25017[(1)] = (1));

return statearr_25017;
});
var cljs$core$async$state_machine__24347__auto____1 = (function (state_24999){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_24999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e25018){if((e25018 instanceof Object)){
var ex__24350__auto__ = e25018;
var statearr_25019_25036 = state_24999;
(statearr_25019_25036[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25037 = state_24999;
state_24999 = G__25037;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
cljs$core$async$state_machine__24347__auto__ = function(state_24999){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24347__auto____1.call(this,state_24999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24347__auto____0;
cljs$core$async$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24347__auto____1;
return cljs$core$async$state_machine__24347__auto__;
})()
;})(switch__24346__auto__,c__24441__auto__))
})();
var state__24443__auto__ = (function (){var statearr_25020 = f__24442__auto__.call(null);
(statearr_25020[(6)] = c__24441__auto__);

return statearr_25020;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25038 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25038 = (function (ch,cs,meta25039){
this.ch = ch;
this.cs = cs;
this.meta25039 = meta25039;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25040,meta25039__$1){
var self__ = this;
var _25040__$1 = this;
return (new cljs.core.async.t_cljs$core$async25038(self__.ch,self__.cs,meta25039__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25038.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25040){
var self__ = this;
var _25040__$1 = this;
return self__.meta25039;
});})(cs))
;

cljs.core.async.t_cljs$core$async25038.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25038.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25038.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25038.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25038.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25038.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25038.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25039","meta25039",-930669591,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25038.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25038.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25038";

cljs.core.async.t_cljs$core$async25038.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25038");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25038.
 */
cljs.core.async.__GT_t_cljs$core$async25038 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25038(ch__$1,cs__$1,meta25039){
return (new cljs.core.async.t_cljs$core$async25038(ch__$1,cs__$1,meta25039));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25038(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__24441__auto___25260 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto___25260,cs,m,dchan,dctr,done){
return (function (){
var f__24442__auto__ = (function (){var switch__24346__auto__ = ((function (c__24441__auto___25260,cs,m,dchan,dctr,done){
return (function (state_25175){
var state_val_25176 = (state_25175[(1)]);
if((state_val_25176 === (7))){
var inst_25171 = (state_25175[(2)]);
var state_25175__$1 = state_25175;
var statearr_25177_25261 = state_25175__$1;
(statearr_25177_25261[(2)] = inst_25171);

(statearr_25177_25261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25176 === (20))){
var inst_25074 = (state_25175[(7)]);
var inst_25086 = cljs.core.first.call(null,inst_25074);
var inst_25087 = cljs.core.nth.call(null,inst_25086,(0),null);
var inst_25088 = cljs.core.nth.call(null,inst_25086,(1),null);
var state_25175__$1 = (function (){var statearr_25178 = state_25175;
(statearr_25178[(8)] = inst_25087);

return statearr_25178;
})();
if(cljs.core.truth_(inst_25088)){
var statearr_25179_25262 = state_25175__$1;
(statearr_25179_25262[(1)] = (22));

} else {
var statearr_25180_25263 = state_25175__$1;
(statearr_25180_25263[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25176 === (27))){
var inst_25116 = (state_25175[(9)]);
var inst_25118 = (state_25175[(10)]);
var inst_25043 = (state_25175[(11)]);
var inst_25123 = (state_25175[(12)]);
var inst_25123__$1 = cljs.core._nth.call(null,inst_25116,inst_25118);
var inst_25124 = cljs.core.async.put_BANG_.call(null,inst_25123__$1,inst_25043,done);
var state_25175__$1 = (function (){var statearr_25181 = state_25175;
(statearr_25181[(12)] = inst_25123__$1);

return statearr_25181;
})();
if(cljs.core.truth_(inst_25124)){
var statearr_25182_25264 = state_25175__$1;
(statearr_25182_25264[(1)] = (30));

} else {
var statearr_25183_25265 = state_25175__$1;
(statearr_25183_25265[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25176 === (1))){
var state_25175__$1 = state_25175;
var statearr_25184_25266 = state_25175__$1;
(statearr_25184_25266[(2)] = null);

(statearr_25184_25266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25176 === (24))){
var inst_25074 = (state_25175[(7)]);
var inst_25093 = (state_25175[(2)]);
var inst_25094 = cljs.core.next.call(null,inst_25074);
var inst_25052 = inst_25094;
var inst_25053 = null;
var inst_25054 = (0);
var inst_25055 = (0);
var state_25175__$1 = (function (){var statearr_25185 = state_25175;
(statearr_25185[(13)] = inst_25054);

(statearr_25185[(14)] = inst_25053);

(statearr_25185[(15)] = inst_25093);

(statearr_25185[(16)] = inst_25052);

(statearr_25185[(17)] = inst_25055);

return statearr_25185;
})();
var statearr_25186_25267 = state_25175__$1;
(statearr_25186_25267[(2)] = null);

(statearr_25186_25267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25176 === (39))){
var state_25175__$1 = state_25175;
var statearr_25190_25268 = state_25175__$1;
(statearr_25190_25268[(2)] = null);

(statearr_25190_25268[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25176 === (4))){
var inst_25043 = (state_25175[(11)]);
var inst_25043__$1 = (state_25175[(2)]);
var inst_25044 = (inst_25043__$1 == null);
var state_25175__$1 = (function (){var statearr_25191 = state_25175;
(statearr_25191[(11)] = inst_25043__$1);

return statearr_25191;
})();
if(cljs.core.truth_(inst_25044)){
var statearr_25192_25269 = state_25175__$1;
(statearr_25192_25269[(1)] = (5));

} else {
var statearr_25193_25270 = state_25175__$1;
(statearr_25193_25270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25176 === (15))){
var inst_25054 = (state_25175[(13)]);
var inst_25053 = (state_25175[(14)]);
var inst_25052 = (state_25175[(16)]);
var inst_25055 = (state_25175[(17)]);
var inst_25070 = (state_25175[(2)]);
var inst_25071 = (inst_25055 + (1));
var tmp25187 = inst_25054;
var tmp25188 = inst_25053;
var tmp25189 = inst_25052;
var inst_25052__$1 = tmp25189;
var inst_25053__$1 = tmp25188;
var inst_25054__$1 = tmp25187;
var inst_25055__$1 = inst_25071;
var state_25175__$1 = (function (){var statearr_25194 = state_25175;
(statearr_25194[(13)] = inst_25054__$1);

(statearr_25194[(14)] = inst_25053__$1);

(statearr_25194[(16)] = inst_25052__$1);

(statearr_25194[(17)] = inst_25055__$1);

(statearr_25194[(18)] = inst_25070);

return statearr_25194;
})();
var statearr_25195_25271 = state_25175__$1;
(statearr_25195_25271[(2)] = null);

(statearr_25195_25271[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25176 === (21))){
var inst_25097 = (state_25175[(2)]);
var state_25175__$1 = state_25175;
var statearr_25199_25272 = state_25175__$1;
(statearr_25199_25272[(2)] = inst_25097);

(statearr_25199_25272[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25176 === (31))){
var inst_25123 = (state_25175[(12)]);
var inst_25127 = done.call(null,null);
var inst_25128 = cljs.core.async.untap_STAR_.call(null,m,inst_25123);
var state_25175__$1 = (function (){var statearr_25200 = state_25175;
(statearr_25200[(19)] = inst_25127);

return statearr_25200;
})();
var statearr_25201_25273 = state_25175__$1;
(statearr_25201_25273[(2)] = inst_25128);

(statearr_25201_25273[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25176 === (32))){
var inst_25116 = (state_25175[(9)]);
var inst_25117 = (state_25175[(20)]);
var inst_25118 = (state_25175[(10)]);
var inst_25115 = (state_25175[(21)]);
var inst_25130 = (state_25175[(2)]);
var inst_25131 = (inst_25118 + (1));
var tmp25196 = inst_25116;
var tmp25197 = inst_25117;
var tmp25198 = inst_25115;
var inst_25115__$1 = tmp25198;
var inst_25116__$1 = tmp25196;
var inst_25117__$1 = tmp25197;
var inst_25118__$1 = inst_25131;
var state_25175__$1 = (function (){var statearr_25202 = state_25175;
(statearr_25202[(9)] = inst_25116__$1);

(statearr_25202[(20)] = inst_25117__$1);

(statearr_25202[(10)] = inst_25118__$1);

(statearr_25202[(21)] = inst_25115__$1);

(statearr_25202[(22)] = inst_25130);

return statearr_25202;
})();
var statearr_25203_25274 = state_25175__$1;
(statearr_25203_25274[(2)] = null);

(statearr_25203_25274[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25176 === (40))){
var inst_25143 = (state_25175[(23)]);
var inst_25147 = done.call(null,null);
var inst_25148 = cljs.core.async.untap_STAR_.call(null,m,inst_25143);
var state_25175__$1 = (function (){var statearr_25204 = state_25175;
(statearr_25204[(24)] = inst_25147);

return statearr_25204;
})();
var statearr_25205_25275 = state_25175__$1;
(statearr_25205_25275[(2)] = inst_25148);

(statearr_25205_25275[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25176 === (33))){
var inst_25134 = (state_25175[(25)]);
var inst_25136 = cljs.core.chunked_seq_QMARK_.call(null,inst_25134);
var state_25175__$1 = state_25175;
if(inst_25136){
var statearr_25206_25276 = state_25175__$1;
(statearr_25206_25276[(1)] = (36));

} else {
var statearr_25207_25277 = state_25175__$1;
(statearr_25207_25277[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25176 === (13))){
var inst_25064 = (state_25175[(26)]);
var inst_25067 = cljs.core.async.close_BANG_.call(null,inst_25064);
var state_25175__$1 = state_25175;
var statearr_25208_25278 = state_25175__$1;
(statearr_25208_25278[(2)] = inst_25067);

(statearr_25208_25278[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25176 === (22))){
var inst_25087 = (state_25175[(8)]);
var inst_25090 = cljs.core.async.close_BANG_.call(null,inst_25087);
var state_25175__$1 = state_25175;
var statearr_25209_25279 = state_25175__$1;
(statearr_25209_25279[(2)] = inst_25090);

(statearr_25209_25279[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25176 === (36))){
var inst_25134 = (state_25175[(25)]);
var inst_25138 = cljs.core.chunk_first.call(null,inst_25134);
var inst_25139 = cljs.core.chunk_rest.call(null,inst_25134);
var inst_25140 = cljs.core.count.call(null,inst_25138);
var inst_25115 = inst_25139;
var inst_25116 = inst_25138;
var inst_25117 = inst_25140;
var inst_25118 = (0);
var state_25175__$1 = (function (){var statearr_25210 = state_25175;
(statearr_25210[(9)] = inst_25116);

(statearr_25210[(20)] = inst_25117);

(statearr_25210[(10)] = inst_25118);

(statearr_25210[(21)] = inst_25115);

return statearr_25210;
})();
var statearr_25211_25280 = state_25175__$1;
(statearr_25211_25280[(2)] = null);

(statearr_25211_25280[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25176 === (41))){
var inst_25134 = (state_25175[(25)]);
var inst_25150 = (state_25175[(2)]);
var inst_25151 = cljs.core.next.call(null,inst_25134);
var inst_25115 = inst_25151;
var inst_25116 = null;
var inst_25117 = (0);
var inst_25118 = (0);
var state_25175__$1 = (function (){var statearr_25212 = state_25175;
(statearr_25212[(9)] = inst_25116);

(statearr_25212[(20)] = inst_25117);

(statearr_25212[(10)] = inst_25118);

(statearr_25212[(27)] = inst_25150);

(statearr_25212[(21)] = inst_25115);

return statearr_25212;
})();
var statearr_25213_25281 = state_25175__$1;
(statearr_25213_25281[(2)] = null);

(statearr_25213_25281[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25176 === (43))){
var state_25175__$1 = state_25175;
var statearr_25214_25282 = state_25175__$1;
(statearr_25214_25282[(2)] = null);

(statearr_25214_25282[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25176 === (29))){
var inst_25159 = (state_25175[(2)]);
var state_25175__$1 = state_25175;
var statearr_25215_25283 = state_25175__$1;
(statearr_25215_25283[(2)] = inst_25159);

(statearr_25215_25283[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25176 === (44))){
var inst_25168 = (state_25175[(2)]);
var state_25175__$1 = (function (){var statearr_25216 = state_25175;
(statearr_25216[(28)] = inst_25168);

return statearr_25216;
})();
var statearr_25217_25284 = state_25175__$1;
(statearr_25217_25284[(2)] = null);

(statearr_25217_25284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25176 === (6))){
var inst_25107 = (state_25175[(29)]);
var inst_25106 = cljs.core.deref.call(null,cs);
var inst_25107__$1 = cljs.core.keys.call(null,inst_25106);
var inst_25108 = cljs.core.count.call(null,inst_25107__$1);
var inst_25109 = cljs.core.reset_BANG_.call(null,dctr,inst_25108);
var inst_25114 = cljs.core.seq.call(null,inst_25107__$1);
var inst_25115 = inst_25114;
var inst_25116 = null;
var inst_25117 = (0);
var inst_25118 = (0);
var state_25175__$1 = (function (){var statearr_25218 = state_25175;
(statearr_25218[(29)] = inst_25107__$1);

(statearr_25218[(9)] = inst_25116);

(statearr_25218[(20)] = inst_25117);

(statearr_25218[(10)] = inst_25118);

(statearr_25218[(30)] = inst_25109);

(statearr_25218[(21)] = inst_25115);

return statearr_25218;
})();
var statearr_25219_25285 = state_25175__$1;
(statearr_25219_25285[(2)] = null);

(statearr_25219_25285[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25176 === (28))){
var inst_25115 = (state_25175[(21)]);
var inst_25134 = (state_25175[(25)]);
var inst_25134__$1 = cljs.core.seq.call(null,inst_25115);
var state_25175__$1 = (function (){var statearr_25220 = state_25175;
(statearr_25220[(25)] = inst_25134__$1);

return statearr_25220;
})();
if(inst_25134__$1){
var statearr_25221_25286 = state_25175__$1;
(statearr_25221_25286[(1)] = (33));

} else {
var statearr_25222_25287 = state_25175__$1;
(statearr_25222_25287[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25176 === (25))){
var inst_25117 = (state_25175[(20)]);
var inst_25118 = (state_25175[(10)]);
var inst_25120 = (inst_25118 < inst_25117);
var inst_25121 = inst_25120;
var state_25175__$1 = state_25175;
if(cljs.core.truth_(inst_25121)){
var statearr_25223_25288 = state_25175__$1;
(statearr_25223_25288[(1)] = (27));

} else {
var statearr_25224_25289 = state_25175__$1;
(statearr_25224_25289[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25176 === (34))){
var state_25175__$1 = state_25175;
var statearr_25225_25290 = state_25175__$1;
(statearr_25225_25290[(2)] = null);

(statearr_25225_25290[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25176 === (17))){
var state_25175__$1 = state_25175;
var statearr_25226_25291 = state_25175__$1;
(statearr_25226_25291[(2)] = null);

(statearr_25226_25291[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25176 === (3))){
var inst_25173 = (state_25175[(2)]);
var state_25175__$1 = state_25175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25175__$1,inst_25173);
} else {
if((state_val_25176 === (12))){
var inst_25102 = (state_25175[(2)]);
var state_25175__$1 = state_25175;
var statearr_25227_25292 = state_25175__$1;
(statearr_25227_25292[(2)] = inst_25102);

(statearr_25227_25292[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25176 === (2))){
var state_25175__$1 = state_25175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25175__$1,(4),ch);
} else {
if((state_val_25176 === (23))){
var state_25175__$1 = state_25175;
var statearr_25228_25293 = state_25175__$1;
(statearr_25228_25293[(2)] = null);

(statearr_25228_25293[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25176 === (35))){
var inst_25157 = (state_25175[(2)]);
var state_25175__$1 = state_25175;
var statearr_25229_25294 = state_25175__$1;
(statearr_25229_25294[(2)] = inst_25157);

(statearr_25229_25294[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25176 === (19))){
var inst_25074 = (state_25175[(7)]);
var inst_25078 = cljs.core.chunk_first.call(null,inst_25074);
var inst_25079 = cljs.core.chunk_rest.call(null,inst_25074);
var inst_25080 = cljs.core.count.call(null,inst_25078);
var inst_25052 = inst_25079;
var inst_25053 = inst_25078;
var inst_25054 = inst_25080;
var inst_25055 = (0);
var state_25175__$1 = (function (){var statearr_25230 = state_25175;
(statearr_25230[(13)] = inst_25054);

(statearr_25230[(14)] = inst_25053);

(statearr_25230[(16)] = inst_25052);

(statearr_25230[(17)] = inst_25055);

return statearr_25230;
})();
var statearr_25231_25295 = state_25175__$1;
(statearr_25231_25295[(2)] = null);

(statearr_25231_25295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25176 === (11))){
var inst_25074 = (state_25175[(7)]);
var inst_25052 = (state_25175[(16)]);
var inst_25074__$1 = cljs.core.seq.call(null,inst_25052);
var state_25175__$1 = (function (){var statearr_25232 = state_25175;
(statearr_25232[(7)] = inst_25074__$1);

return statearr_25232;
})();
if(inst_25074__$1){
var statearr_25233_25296 = state_25175__$1;
(statearr_25233_25296[(1)] = (16));

} else {
var statearr_25234_25297 = state_25175__$1;
(statearr_25234_25297[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25176 === (9))){
var inst_25104 = (state_25175[(2)]);
var state_25175__$1 = state_25175;
var statearr_25235_25298 = state_25175__$1;
(statearr_25235_25298[(2)] = inst_25104);

(statearr_25235_25298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25176 === (5))){
var inst_25050 = cljs.core.deref.call(null,cs);
var inst_25051 = cljs.core.seq.call(null,inst_25050);
var inst_25052 = inst_25051;
var inst_25053 = null;
var inst_25054 = (0);
var inst_25055 = (0);
var state_25175__$1 = (function (){var statearr_25236 = state_25175;
(statearr_25236[(13)] = inst_25054);

(statearr_25236[(14)] = inst_25053);

(statearr_25236[(16)] = inst_25052);

(statearr_25236[(17)] = inst_25055);

return statearr_25236;
})();
var statearr_25237_25299 = state_25175__$1;
(statearr_25237_25299[(2)] = null);

(statearr_25237_25299[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25176 === (14))){
var state_25175__$1 = state_25175;
var statearr_25238_25300 = state_25175__$1;
(statearr_25238_25300[(2)] = null);

(statearr_25238_25300[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25176 === (45))){
var inst_25165 = (state_25175[(2)]);
var state_25175__$1 = state_25175;
var statearr_25239_25301 = state_25175__$1;
(statearr_25239_25301[(2)] = inst_25165);

(statearr_25239_25301[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25176 === (26))){
var inst_25107 = (state_25175[(29)]);
var inst_25161 = (state_25175[(2)]);
var inst_25162 = cljs.core.seq.call(null,inst_25107);
var state_25175__$1 = (function (){var statearr_25240 = state_25175;
(statearr_25240[(31)] = inst_25161);

return statearr_25240;
})();
if(inst_25162){
var statearr_25241_25302 = state_25175__$1;
(statearr_25241_25302[(1)] = (42));

} else {
var statearr_25242_25303 = state_25175__$1;
(statearr_25242_25303[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25176 === (16))){
var inst_25074 = (state_25175[(7)]);
var inst_25076 = cljs.core.chunked_seq_QMARK_.call(null,inst_25074);
var state_25175__$1 = state_25175;
if(inst_25076){
var statearr_25243_25304 = state_25175__$1;
(statearr_25243_25304[(1)] = (19));

} else {
var statearr_25244_25305 = state_25175__$1;
(statearr_25244_25305[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25176 === (38))){
var inst_25154 = (state_25175[(2)]);
var state_25175__$1 = state_25175;
var statearr_25245_25306 = state_25175__$1;
(statearr_25245_25306[(2)] = inst_25154);

(statearr_25245_25306[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25176 === (30))){
var state_25175__$1 = state_25175;
var statearr_25246_25307 = state_25175__$1;
(statearr_25246_25307[(2)] = null);

(statearr_25246_25307[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25176 === (10))){
var inst_25053 = (state_25175[(14)]);
var inst_25055 = (state_25175[(17)]);
var inst_25063 = cljs.core._nth.call(null,inst_25053,inst_25055);
var inst_25064 = cljs.core.nth.call(null,inst_25063,(0),null);
var inst_25065 = cljs.core.nth.call(null,inst_25063,(1),null);
var state_25175__$1 = (function (){var statearr_25247 = state_25175;
(statearr_25247[(26)] = inst_25064);

return statearr_25247;
})();
if(cljs.core.truth_(inst_25065)){
var statearr_25248_25308 = state_25175__$1;
(statearr_25248_25308[(1)] = (13));

} else {
var statearr_25249_25309 = state_25175__$1;
(statearr_25249_25309[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25176 === (18))){
var inst_25100 = (state_25175[(2)]);
var state_25175__$1 = state_25175;
var statearr_25250_25310 = state_25175__$1;
(statearr_25250_25310[(2)] = inst_25100);

(statearr_25250_25310[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25176 === (42))){
var state_25175__$1 = state_25175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25175__$1,(45),dchan);
} else {
if((state_val_25176 === (37))){
var inst_25143 = (state_25175[(23)]);
var inst_25043 = (state_25175[(11)]);
var inst_25134 = (state_25175[(25)]);
var inst_25143__$1 = cljs.core.first.call(null,inst_25134);
var inst_25144 = cljs.core.async.put_BANG_.call(null,inst_25143__$1,inst_25043,done);
var state_25175__$1 = (function (){var statearr_25251 = state_25175;
(statearr_25251[(23)] = inst_25143__$1);

return statearr_25251;
})();
if(cljs.core.truth_(inst_25144)){
var statearr_25252_25311 = state_25175__$1;
(statearr_25252_25311[(1)] = (39));

} else {
var statearr_25253_25312 = state_25175__$1;
(statearr_25253_25312[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25176 === (8))){
var inst_25054 = (state_25175[(13)]);
var inst_25055 = (state_25175[(17)]);
var inst_25057 = (inst_25055 < inst_25054);
var inst_25058 = inst_25057;
var state_25175__$1 = state_25175;
if(cljs.core.truth_(inst_25058)){
var statearr_25254_25313 = state_25175__$1;
(statearr_25254_25313[(1)] = (10));

} else {
var statearr_25255_25314 = state_25175__$1;
(statearr_25255_25314[(1)] = (11));

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
});})(c__24441__auto___25260,cs,m,dchan,dctr,done))
;
return ((function (switch__24346__auto__,c__24441__auto___25260,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24347__auto__ = null;
var cljs$core$async$mult_$_state_machine__24347__auto____0 = (function (){
var statearr_25256 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25256[(0)] = cljs$core$async$mult_$_state_machine__24347__auto__);

(statearr_25256[(1)] = (1));

return statearr_25256;
});
var cljs$core$async$mult_$_state_machine__24347__auto____1 = (function (state_25175){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_25175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e25257){if((e25257 instanceof Object)){
var ex__24350__auto__ = e25257;
var statearr_25258_25315 = state_25175;
(statearr_25258_25315[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25316 = state_25175;
state_25175 = G__25316;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24347__auto__ = function(state_25175){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24347__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24347__auto____1.call(this,state_25175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24347__auto____0;
cljs$core$async$mult_$_state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24347__auto____1;
return cljs$core$async$mult_$_state_machine__24347__auto__;
})()
;})(switch__24346__auto__,c__24441__auto___25260,cs,m,dchan,dctr,done))
})();
var state__24443__auto__ = (function (){var statearr_25259 = f__24442__auto__.call(null);
(statearr_25259[(6)] = c__24441__auto___25260);

return statearr_25259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto___25260,cs,m,dchan,dctr,done))
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
var G__25318 = arguments.length;
switch (G__25318) {
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
var len__4641__auto___25330 = arguments.length;
var i__4642__auto___25331 = (0);
while(true){
if((i__4642__auto___25331 < len__4641__auto___25330)){
args__4647__auto__.push((arguments[i__4642__auto___25331]));

var G__25332 = (i__4642__auto___25331 + (1));
i__4642__auto___25331 = G__25332;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25324){
var map__25325 = p__25324;
var map__25325__$1 = (((((!((map__25325 == null))))?(((((map__25325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25325):map__25325);
var opts = map__25325__$1;
var statearr_25327_25333 = state;
(statearr_25327_25333[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__25325,map__25325__$1,opts){
return (function (val){
var statearr_25328_25334 = state;
(statearr_25328_25334[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25325,map__25325__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_25329_25335 = state;
(statearr_25329_25335[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25320){
var G__25321 = cljs.core.first.call(null,seq25320);
var seq25320__$1 = cljs.core.next.call(null,seq25320);
var G__25322 = cljs.core.first.call(null,seq25320__$1);
var seq25320__$2 = cljs.core.next.call(null,seq25320__$1);
var G__25323 = cljs.core.first.call(null,seq25320__$2);
var seq25320__$3 = cljs.core.next.call(null,seq25320__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25321,G__25322,G__25323,seq25320__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25336 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25336 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25337){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25337 = meta25337;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25338,meta25337__$1){
var self__ = this;
var _25338__$1 = this;
return (new cljs.core.async.t_cljs$core$async25336(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25337__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25336.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25338){
var self__ = this;
var _25338__$1 = this;
return self__.meta25337;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25336.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25336.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25336.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25336.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25336.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25336.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25336.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25336.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async25336.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25337","meta25337",-1331201933,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25336.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25336.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25336";

cljs.core.async.t_cljs$core$async25336.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25336");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25336.
 */
cljs.core.async.__GT_t_cljs$core$async25336 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25336(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25337){
return (new cljs.core.async.t_cljs$core$async25336(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25337));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25336(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24441__auto___25500 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto___25500,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24442__auto__ = (function (){var switch__24346__auto__ = ((function (c__24441__auto___25500,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25440){
var state_val_25441 = (state_25440[(1)]);
if((state_val_25441 === (7))){
var inst_25355 = (state_25440[(2)]);
var state_25440__$1 = state_25440;
var statearr_25442_25501 = state_25440__$1;
(statearr_25442_25501[(2)] = inst_25355);

(statearr_25442_25501[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (20))){
var inst_25367 = (state_25440[(7)]);
var state_25440__$1 = state_25440;
var statearr_25443_25502 = state_25440__$1;
(statearr_25443_25502[(2)] = inst_25367);

(statearr_25443_25502[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (27))){
var state_25440__$1 = state_25440;
var statearr_25444_25503 = state_25440__$1;
(statearr_25444_25503[(2)] = null);

(statearr_25444_25503[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (1))){
var inst_25342 = (state_25440[(8)]);
var inst_25342__$1 = calc_state.call(null);
var inst_25344 = (inst_25342__$1 == null);
var inst_25345 = cljs.core.not.call(null,inst_25344);
var state_25440__$1 = (function (){var statearr_25445 = state_25440;
(statearr_25445[(8)] = inst_25342__$1);

return statearr_25445;
})();
if(inst_25345){
var statearr_25446_25504 = state_25440__$1;
(statearr_25446_25504[(1)] = (2));

} else {
var statearr_25447_25505 = state_25440__$1;
(statearr_25447_25505[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (24))){
var inst_25400 = (state_25440[(9)]);
var inst_25414 = (state_25440[(10)]);
var inst_25391 = (state_25440[(11)]);
var inst_25414__$1 = inst_25391.call(null,inst_25400);
var state_25440__$1 = (function (){var statearr_25448 = state_25440;
(statearr_25448[(10)] = inst_25414__$1);

return statearr_25448;
})();
if(cljs.core.truth_(inst_25414__$1)){
var statearr_25449_25506 = state_25440__$1;
(statearr_25449_25506[(1)] = (29));

} else {
var statearr_25450_25507 = state_25440__$1;
(statearr_25450_25507[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (4))){
var inst_25358 = (state_25440[(2)]);
var state_25440__$1 = state_25440;
if(cljs.core.truth_(inst_25358)){
var statearr_25451_25508 = state_25440__$1;
(statearr_25451_25508[(1)] = (8));

} else {
var statearr_25452_25509 = state_25440__$1;
(statearr_25452_25509[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (15))){
var inst_25385 = (state_25440[(2)]);
var state_25440__$1 = state_25440;
if(cljs.core.truth_(inst_25385)){
var statearr_25453_25510 = state_25440__$1;
(statearr_25453_25510[(1)] = (19));

} else {
var statearr_25454_25511 = state_25440__$1;
(statearr_25454_25511[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (21))){
var inst_25390 = (state_25440[(12)]);
var inst_25390__$1 = (state_25440[(2)]);
var inst_25391 = cljs.core.get.call(null,inst_25390__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25392 = cljs.core.get.call(null,inst_25390__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25393 = cljs.core.get.call(null,inst_25390__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25440__$1 = (function (){var statearr_25455 = state_25440;
(statearr_25455[(13)] = inst_25392);

(statearr_25455[(12)] = inst_25390__$1);

(statearr_25455[(11)] = inst_25391);

return statearr_25455;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25440__$1,(22),inst_25393);
} else {
if((state_val_25441 === (31))){
var inst_25422 = (state_25440[(2)]);
var state_25440__$1 = state_25440;
if(cljs.core.truth_(inst_25422)){
var statearr_25456_25512 = state_25440__$1;
(statearr_25456_25512[(1)] = (32));

} else {
var statearr_25457_25513 = state_25440__$1;
(statearr_25457_25513[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (32))){
var inst_25399 = (state_25440[(14)]);
var state_25440__$1 = state_25440;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25440__$1,(35),out,inst_25399);
} else {
if((state_val_25441 === (33))){
var inst_25390 = (state_25440[(12)]);
var inst_25367 = inst_25390;
var state_25440__$1 = (function (){var statearr_25458 = state_25440;
(statearr_25458[(7)] = inst_25367);

return statearr_25458;
})();
var statearr_25459_25514 = state_25440__$1;
(statearr_25459_25514[(2)] = null);

(statearr_25459_25514[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (13))){
var inst_25367 = (state_25440[(7)]);
var inst_25374 = inst_25367.cljs$lang$protocol_mask$partition0$;
var inst_25375 = (inst_25374 & (64));
var inst_25376 = inst_25367.cljs$core$ISeq$;
var inst_25377 = (cljs.core.PROTOCOL_SENTINEL === inst_25376);
var inst_25378 = ((inst_25375) || (inst_25377));
var state_25440__$1 = state_25440;
if(cljs.core.truth_(inst_25378)){
var statearr_25460_25515 = state_25440__$1;
(statearr_25460_25515[(1)] = (16));

} else {
var statearr_25461_25516 = state_25440__$1;
(statearr_25461_25516[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (22))){
var inst_25399 = (state_25440[(14)]);
var inst_25400 = (state_25440[(9)]);
var inst_25398 = (state_25440[(2)]);
var inst_25399__$1 = cljs.core.nth.call(null,inst_25398,(0),null);
var inst_25400__$1 = cljs.core.nth.call(null,inst_25398,(1),null);
var inst_25401 = (inst_25399__$1 == null);
var inst_25402 = cljs.core._EQ_.call(null,inst_25400__$1,change);
var inst_25403 = ((inst_25401) || (inst_25402));
var state_25440__$1 = (function (){var statearr_25462 = state_25440;
(statearr_25462[(14)] = inst_25399__$1);

(statearr_25462[(9)] = inst_25400__$1);

return statearr_25462;
})();
if(cljs.core.truth_(inst_25403)){
var statearr_25463_25517 = state_25440__$1;
(statearr_25463_25517[(1)] = (23));

} else {
var statearr_25464_25518 = state_25440__$1;
(statearr_25464_25518[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (36))){
var inst_25390 = (state_25440[(12)]);
var inst_25367 = inst_25390;
var state_25440__$1 = (function (){var statearr_25465 = state_25440;
(statearr_25465[(7)] = inst_25367);

return statearr_25465;
})();
var statearr_25466_25519 = state_25440__$1;
(statearr_25466_25519[(2)] = null);

(statearr_25466_25519[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (29))){
var inst_25414 = (state_25440[(10)]);
var state_25440__$1 = state_25440;
var statearr_25467_25520 = state_25440__$1;
(statearr_25467_25520[(2)] = inst_25414);

(statearr_25467_25520[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (6))){
var state_25440__$1 = state_25440;
var statearr_25468_25521 = state_25440__$1;
(statearr_25468_25521[(2)] = false);

(statearr_25468_25521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (28))){
var inst_25410 = (state_25440[(2)]);
var inst_25411 = calc_state.call(null);
var inst_25367 = inst_25411;
var state_25440__$1 = (function (){var statearr_25469 = state_25440;
(statearr_25469[(7)] = inst_25367);

(statearr_25469[(15)] = inst_25410);

return statearr_25469;
})();
var statearr_25470_25522 = state_25440__$1;
(statearr_25470_25522[(2)] = null);

(statearr_25470_25522[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (25))){
var inst_25436 = (state_25440[(2)]);
var state_25440__$1 = state_25440;
var statearr_25471_25523 = state_25440__$1;
(statearr_25471_25523[(2)] = inst_25436);

(statearr_25471_25523[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (34))){
var inst_25434 = (state_25440[(2)]);
var state_25440__$1 = state_25440;
var statearr_25472_25524 = state_25440__$1;
(statearr_25472_25524[(2)] = inst_25434);

(statearr_25472_25524[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (17))){
var state_25440__$1 = state_25440;
var statearr_25473_25525 = state_25440__$1;
(statearr_25473_25525[(2)] = false);

(statearr_25473_25525[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (3))){
var state_25440__$1 = state_25440;
var statearr_25474_25526 = state_25440__$1;
(statearr_25474_25526[(2)] = false);

(statearr_25474_25526[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (12))){
var inst_25438 = (state_25440[(2)]);
var state_25440__$1 = state_25440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25440__$1,inst_25438);
} else {
if((state_val_25441 === (2))){
var inst_25342 = (state_25440[(8)]);
var inst_25347 = inst_25342.cljs$lang$protocol_mask$partition0$;
var inst_25348 = (inst_25347 & (64));
var inst_25349 = inst_25342.cljs$core$ISeq$;
var inst_25350 = (cljs.core.PROTOCOL_SENTINEL === inst_25349);
var inst_25351 = ((inst_25348) || (inst_25350));
var state_25440__$1 = state_25440;
if(cljs.core.truth_(inst_25351)){
var statearr_25475_25527 = state_25440__$1;
(statearr_25475_25527[(1)] = (5));

} else {
var statearr_25476_25528 = state_25440__$1;
(statearr_25476_25528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (23))){
var inst_25399 = (state_25440[(14)]);
var inst_25405 = (inst_25399 == null);
var state_25440__$1 = state_25440;
if(cljs.core.truth_(inst_25405)){
var statearr_25477_25529 = state_25440__$1;
(statearr_25477_25529[(1)] = (26));

} else {
var statearr_25478_25530 = state_25440__$1;
(statearr_25478_25530[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (35))){
var inst_25425 = (state_25440[(2)]);
var state_25440__$1 = state_25440;
if(cljs.core.truth_(inst_25425)){
var statearr_25479_25531 = state_25440__$1;
(statearr_25479_25531[(1)] = (36));

} else {
var statearr_25480_25532 = state_25440__$1;
(statearr_25480_25532[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (19))){
var inst_25367 = (state_25440[(7)]);
var inst_25387 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25367);
var state_25440__$1 = state_25440;
var statearr_25481_25533 = state_25440__$1;
(statearr_25481_25533[(2)] = inst_25387);

(statearr_25481_25533[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (11))){
var inst_25367 = (state_25440[(7)]);
var inst_25371 = (inst_25367 == null);
var inst_25372 = cljs.core.not.call(null,inst_25371);
var state_25440__$1 = state_25440;
if(inst_25372){
var statearr_25482_25534 = state_25440__$1;
(statearr_25482_25534[(1)] = (13));

} else {
var statearr_25483_25535 = state_25440__$1;
(statearr_25483_25535[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (9))){
var inst_25342 = (state_25440[(8)]);
var state_25440__$1 = state_25440;
var statearr_25484_25536 = state_25440__$1;
(statearr_25484_25536[(2)] = inst_25342);

(statearr_25484_25536[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (5))){
var state_25440__$1 = state_25440;
var statearr_25485_25537 = state_25440__$1;
(statearr_25485_25537[(2)] = true);

(statearr_25485_25537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (14))){
var state_25440__$1 = state_25440;
var statearr_25486_25538 = state_25440__$1;
(statearr_25486_25538[(2)] = false);

(statearr_25486_25538[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (26))){
var inst_25400 = (state_25440[(9)]);
var inst_25407 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25400);
var state_25440__$1 = state_25440;
var statearr_25487_25539 = state_25440__$1;
(statearr_25487_25539[(2)] = inst_25407);

(statearr_25487_25539[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (16))){
var state_25440__$1 = state_25440;
var statearr_25488_25540 = state_25440__$1;
(statearr_25488_25540[(2)] = true);

(statearr_25488_25540[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (38))){
var inst_25430 = (state_25440[(2)]);
var state_25440__$1 = state_25440;
var statearr_25489_25541 = state_25440__$1;
(statearr_25489_25541[(2)] = inst_25430);

(statearr_25489_25541[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (30))){
var inst_25400 = (state_25440[(9)]);
var inst_25392 = (state_25440[(13)]);
var inst_25391 = (state_25440[(11)]);
var inst_25417 = cljs.core.empty_QMARK_.call(null,inst_25391);
var inst_25418 = inst_25392.call(null,inst_25400);
var inst_25419 = cljs.core.not.call(null,inst_25418);
var inst_25420 = ((inst_25417) && (inst_25419));
var state_25440__$1 = state_25440;
var statearr_25490_25542 = state_25440__$1;
(statearr_25490_25542[(2)] = inst_25420);

(statearr_25490_25542[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (10))){
var inst_25342 = (state_25440[(8)]);
var inst_25363 = (state_25440[(2)]);
var inst_25364 = cljs.core.get.call(null,inst_25363,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25365 = cljs.core.get.call(null,inst_25363,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25366 = cljs.core.get.call(null,inst_25363,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25367 = inst_25342;
var state_25440__$1 = (function (){var statearr_25491 = state_25440;
(statearr_25491[(16)] = inst_25364);

(statearr_25491[(17)] = inst_25366);

(statearr_25491[(7)] = inst_25367);

(statearr_25491[(18)] = inst_25365);

return statearr_25491;
})();
var statearr_25492_25543 = state_25440__$1;
(statearr_25492_25543[(2)] = null);

(statearr_25492_25543[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (18))){
var inst_25382 = (state_25440[(2)]);
var state_25440__$1 = state_25440;
var statearr_25493_25544 = state_25440__$1;
(statearr_25493_25544[(2)] = inst_25382);

(statearr_25493_25544[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (37))){
var state_25440__$1 = state_25440;
var statearr_25494_25545 = state_25440__$1;
(statearr_25494_25545[(2)] = null);

(statearr_25494_25545[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (8))){
var inst_25342 = (state_25440[(8)]);
var inst_25360 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25342);
var state_25440__$1 = state_25440;
var statearr_25495_25546 = state_25440__$1;
(statearr_25495_25546[(2)] = inst_25360);

(statearr_25495_25546[(1)] = (10));


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
});})(c__24441__auto___25500,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24346__auto__,c__24441__auto___25500,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24347__auto__ = null;
var cljs$core$async$mix_$_state_machine__24347__auto____0 = (function (){
var statearr_25496 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25496[(0)] = cljs$core$async$mix_$_state_machine__24347__auto__);

(statearr_25496[(1)] = (1));

return statearr_25496;
});
var cljs$core$async$mix_$_state_machine__24347__auto____1 = (function (state_25440){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_25440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e25497){if((e25497 instanceof Object)){
var ex__24350__auto__ = e25497;
var statearr_25498_25547 = state_25440;
(statearr_25498_25547[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25548 = state_25440;
state_25440 = G__25548;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24347__auto__ = function(state_25440){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24347__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24347__auto____1.call(this,state_25440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24347__auto____0;
cljs$core$async$mix_$_state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24347__auto____1;
return cljs$core$async$mix_$_state_machine__24347__auto__;
})()
;})(switch__24346__auto__,c__24441__auto___25500,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24443__auto__ = (function (){var statearr_25499 = f__24442__auto__.call(null);
(statearr_25499[(6)] = c__24441__auto___25500);

return statearr_25499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto___25500,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__25550 = arguments.length;
switch (G__25550) {
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
var G__25554 = arguments.length;
switch (G__25554) {
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
return (function (p1__25552_SHARP_){
if(cljs.core.truth_(p1__25552_SHARP_.call(null,topic))){
return p1__25552_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25552_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25555 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25555 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25556){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25556 = meta25556;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25557,meta25556__$1){
var self__ = this;
var _25557__$1 = this;
return (new cljs.core.async.t_cljs$core$async25555(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25556__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25555.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25557){
var self__ = this;
var _25557__$1 = this;
return self__.meta25556;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25555.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25555.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25555.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25555.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25555.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async25555.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25555.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25555.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25556","meta25556",71436744,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25555.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25555.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25555";

cljs.core.async.t_cljs$core$async25555.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25555");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25555.
 */
cljs.core.async.__GT_t_cljs$core$async25555 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25555(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25556){
return (new cljs.core.async.t_cljs$core$async25555(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25556));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25555(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24441__auto___25675 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto___25675,mults,ensure_mult,p){
return (function (){
var f__24442__auto__ = (function (){var switch__24346__auto__ = ((function (c__24441__auto___25675,mults,ensure_mult,p){
return (function (state_25629){
var state_val_25630 = (state_25629[(1)]);
if((state_val_25630 === (7))){
var inst_25625 = (state_25629[(2)]);
var state_25629__$1 = state_25629;
var statearr_25631_25676 = state_25629__$1;
(statearr_25631_25676[(2)] = inst_25625);

(statearr_25631_25676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25630 === (20))){
var state_25629__$1 = state_25629;
var statearr_25632_25677 = state_25629__$1;
(statearr_25632_25677[(2)] = null);

(statearr_25632_25677[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25630 === (1))){
var state_25629__$1 = state_25629;
var statearr_25633_25678 = state_25629__$1;
(statearr_25633_25678[(2)] = null);

(statearr_25633_25678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25630 === (24))){
var inst_25608 = (state_25629[(7)]);
var inst_25617 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25608);
var state_25629__$1 = state_25629;
var statearr_25634_25679 = state_25629__$1;
(statearr_25634_25679[(2)] = inst_25617);

(statearr_25634_25679[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25630 === (4))){
var inst_25560 = (state_25629[(8)]);
var inst_25560__$1 = (state_25629[(2)]);
var inst_25561 = (inst_25560__$1 == null);
var state_25629__$1 = (function (){var statearr_25635 = state_25629;
(statearr_25635[(8)] = inst_25560__$1);

return statearr_25635;
})();
if(cljs.core.truth_(inst_25561)){
var statearr_25636_25680 = state_25629__$1;
(statearr_25636_25680[(1)] = (5));

} else {
var statearr_25637_25681 = state_25629__$1;
(statearr_25637_25681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25630 === (15))){
var inst_25602 = (state_25629[(2)]);
var state_25629__$1 = state_25629;
var statearr_25638_25682 = state_25629__$1;
(statearr_25638_25682[(2)] = inst_25602);

(statearr_25638_25682[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25630 === (21))){
var inst_25622 = (state_25629[(2)]);
var state_25629__$1 = (function (){var statearr_25639 = state_25629;
(statearr_25639[(9)] = inst_25622);

return statearr_25639;
})();
var statearr_25640_25683 = state_25629__$1;
(statearr_25640_25683[(2)] = null);

(statearr_25640_25683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25630 === (13))){
var inst_25584 = (state_25629[(10)]);
var inst_25586 = cljs.core.chunked_seq_QMARK_.call(null,inst_25584);
var state_25629__$1 = state_25629;
if(inst_25586){
var statearr_25641_25684 = state_25629__$1;
(statearr_25641_25684[(1)] = (16));

} else {
var statearr_25642_25685 = state_25629__$1;
(statearr_25642_25685[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25630 === (22))){
var inst_25614 = (state_25629[(2)]);
var state_25629__$1 = state_25629;
if(cljs.core.truth_(inst_25614)){
var statearr_25643_25686 = state_25629__$1;
(statearr_25643_25686[(1)] = (23));

} else {
var statearr_25644_25687 = state_25629__$1;
(statearr_25644_25687[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25630 === (6))){
var inst_25608 = (state_25629[(7)]);
var inst_25610 = (state_25629[(11)]);
var inst_25560 = (state_25629[(8)]);
var inst_25608__$1 = topic_fn.call(null,inst_25560);
var inst_25609 = cljs.core.deref.call(null,mults);
var inst_25610__$1 = cljs.core.get.call(null,inst_25609,inst_25608__$1);
var state_25629__$1 = (function (){var statearr_25645 = state_25629;
(statearr_25645[(7)] = inst_25608__$1);

(statearr_25645[(11)] = inst_25610__$1);

return statearr_25645;
})();
if(cljs.core.truth_(inst_25610__$1)){
var statearr_25646_25688 = state_25629__$1;
(statearr_25646_25688[(1)] = (19));

} else {
var statearr_25647_25689 = state_25629__$1;
(statearr_25647_25689[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25630 === (25))){
var inst_25619 = (state_25629[(2)]);
var state_25629__$1 = state_25629;
var statearr_25648_25690 = state_25629__$1;
(statearr_25648_25690[(2)] = inst_25619);

(statearr_25648_25690[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25630 === (17))){
var inst_25584 = (state_25629[(10)]);
var inst_25593 = cljs.core.first.call(null,inst_25584);
var inst_25594 = cljs.core.async.muxch_STAR_.call(null,inst_25593);
var inst_25595 = cljs.core.async.close_BANG_.call(null,inst_25594);
var inst_25596 = cljs.core.next.call(null,inst_25584);
var inst_25570 = inst_25596;
var inst_25571 = null;
var inst_25572 = (0);
var inst_25573 = (0);
var state_25629__$1 = (function (){var statearr_25649 = state_25629;
(statearr_25649[(12)] = inst_25571);

(statearr_25649[(13)] = inst_25595);

(statearr_25649[(14)] = inst_25573);

(statearr_25649[(15)] = inst_25570);

(statearr_25649[(16)] = inst_25572);

return statearr_25649;
})();
var statearr_25650_25691 = state_25629__$1;
(statearr_25650_25691[(2)] = null);

(statearr_25650_25691[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25630 === (3))){
var inst_25627 = (state_25629[(2)]);
var state_25629__$1 = state_25629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25629__$1,inst_25627);
} else {
if((state_val_25630 === (12))){
var inst_25604 = (state_25629[(2)]);
var state_25629__$1 = state_25629;
var statearr_25651_25692 = state_25629__$1;
(statearr_25651_25692[(2)] = inst_25604);

(statearr_25651_25692[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25630 === (2))){
var state_25629__$1 = state_25629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25629__$1,(4),ch);
} else {
if((state_val_25630 === (23))){
var state_25629__$1 = state_25629;
var statearr_25652_25693 = state_25629__$1;
(statearr_25652_25693[(2)] = null);

(statearr_25652_25693[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25630 === (19))){
var inst_25610 = (state_25629[(11)]);
var inst_25560 = (state_25629[(8)]);
var inst_25612 = cljs.core.async.muxch_STAR_.call(null,inst_25610);
var state_25629__$1 = state_25629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25629__$1,(22),inst_25612,inst_25560);
} else {
if((state_val_25630 === (11))){
var inst_25584 = (state_25629[(10)]);
var inst_25570 = (state_25629[(15)]);
var inst_25584__$1 = cljs.core.seq.call(null,inst_25570);
var state_25629__$1 = (function (){var statearr_25653 = state_25629;
(statearr_25653[(10)] = inst_25584__$1);

return statearr_25653;
})();
if(inst_25584__$1){
var statearr_25654_25694 = state_25629__$1;
(statearr_25654_25694[(1)] = (13));

} else {
var statearr_25655_25695 = state_25629__$1;
(statearr_25655_25695[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25630 === (9))){
var inst_25606 = (state_25629[(2)]);
var state_25629__$1 = state_25629;
var statearr_25656_25696 = state_25629__$1;
(statearr_25656_25696[(2)] = inst_25606);

(statearr_25656_25696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25630 === (5))){
var inst_25567 = cljs.core.deref.call(null,mults);
var inst_25568 = cljs.core.vals.call(null,inst_25567);
var inst_25569 = cljs.core.seq.call(null,inst_25568);
var inst_25570 = inst_25569;
var inst_25571 = null;
var inst_25572 = (0);
var inst_25573 = (0);
var state_25629__$1 = (function (){var statearr_25657 = state_25629;
(statearr_25657[(12)] = inst_25571);

(statearr_25657[(14)] = inst_25573);

(statearr_25657[(15)] = inst_25570);

(statearr_25657[(16)] = inst_25572);

return statearr_25657;
})();
var statearr_25658_25697 = state_25629__$1;
(statearr_25658_25697[(2)] = null);

(statearr_25658_25697[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25630 === (14))){
var state_25629__$1 = state_25629;
var statearr_25662_25698 = state_25629__$1;
(statearr_25662_25698[(2)] = null);

(statearr_25662_25698[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25630 === (16))){
var inst_25584 = (state_25629[(10)]);
var inst_25588 = cljs.core.chunk_first.call(null,inst_25584);
var inst_25589 = cljs.core.chunk_rest.call(null,inst_25584);
var inst_25590 = cljs.core.count.call(null,inst_25588);
var inst_25570 = inst_25589;
var inst_25571 = inst_25588;
var inst_25572 = inst_25590;
var inst_25573 = (0);
var state_25629__$1 = (function (){var statearr_25663 = state_25629;
(statearr_25663[(12)] = inst_25571);

(statearr_25663[(14)] = inst_25573);

(statearr_25663[(15)] = inst_25570);

(statearr_25663[(16)] = inst_25572);

return statearr_25663;
})();
var statearr_25664_25699 = state_25629__$1;
(statearr_25664_25699[(2)] = null);

(statearr_25664_25699[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25630 === (10))){
var inst_25571 = (state_25629[(12)]);
var inst_25573 = (state_25629[(14)]);
var inst_25570 = (state_25629[(15)]);
var inst_25572 = (state_25629[(16)]);
var inst_25578 = cljs.core._nth.call(null,inst_25571,inst_25573);
var inst_25579 = cljs.core.async.muxch_STAR_.call(null,inst_25578);
var inst_25580 = cljs.core.async.close_BANG_.call(null,inst_25579);
var inst_25581 = (inst_25573 + (1));
var tmp25659 = inst_25571;
var tmp25660 = inst_25570;
var tmp25661 = inst_25572;
var inst_25570__$1 = tmp25660;
var inst_25571__$1 = tmp25659;
var inst_25572__$1 = tmp25661;
var inst_25573__$1 = inst_25581;
var state_25629__$1 = (function (){var statearr_25665 = state_25629;
(statearr_25665[(12)] = inst_25571__$1);

(statearr_25665[(14)] = inst_25573__$1);

(statearr_25665[(17)] = inst_25580);

(statearr_25665[(15)] = inst_25570__$1);

(statearr_25665[(16)] = inst_25572__$1);

return statearr_25665;
})();
var statearr_25666_25700 = state_25629__$1;
(statearr_25666_25700[(2)] = null);

(statearr_25666_25700[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25630 === (18))){
var inst_25599 = (state_25629[(2)]);
var state_25629__$1 = state_25629;
var statearr_25667_25701 = state_25629__$1;
(statearr_25667_25701[(2)] = inst_25599);

(statearr_25667_25701[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25630 === (8))){
var inst_25573 = (state_25629[(14)]);
var inst_25572 = (state_25629[(16)]);
var inst_25575 = (inst_25573 < inst_25572);
var inst_25576 = inst_25575;
var state_25629__$1 = state_25629;
if(cljs.core.truth_(inst_25576)){
var statearr_25668_25702 = state_25629__$1;
(statearr_25668_25702[(1)] = (10));

} else {
var statearr_25669_25703 = state_25629__$1;
(statearr_25669_25703[(1)] = (11));

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
});})(c__24441__auto___25675,mults,ensure_mult,p))
;
return ((function (switch__24346__auto__,c__24441__auto___25675,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24347__auto__ = null;
var cljs$core$async$state_machine__24347__auto____0 = (function (){
var statearr_25670 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25670[(0)] = cljs$core$async$state_machine__24347__auto__);

(statearr_25670[(1)] = (1));

return statearr_25670;
});
var cljs$core$async$state_machine__24347__auto____1 = (function (state_25629){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_25629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e25671){if((e25671 instanceof Object)){
var ex__24350__auto__ = e25671;
var statearr_25672_25704 = state_25629;
(statearr_25672_25704[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25705 = state_25629;
state_25629 = G__25705;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
cljs$core$async$state_machine__24347__auto__ = function(state_25629){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24347__auto____1.call(this,state_25629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24347__auto____0;
cljs$core$async$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24347__auto____1;
return cljs$core$async$state_machine__24347__auto__;
})()
;})(switch__24346__auto__,c__24441__auto___25675,mults,ensure_mult,p))
})();
var state__24443__auto__ = (function (){var statearr_25673 = f__24442__auto__.call(null);
(statearr_25673[(6)] = c__24441__auto___25675);

return statearr_25673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto___25675,mults,ensure_mult,p))
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
var G__25707 = arguments.length;
switch (G__25707) {
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
var G__25710 = arguments.length;
switch (G__25710) {
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
var G__25713 = arguments.length;
switch (G__25713) {
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
var c__24441__auto___25780 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto___25780,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24442__auto__ = (function (){var switch__24346__auto__ = ((function (c__24441__auto___25780,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25752){
var state_val_25753 = (state_25752[(1)]);
if((state_val_25753 === (7))){
var state_25752__$1 = state_25752;
var statearr_25754_25781 = state_25752__$1;
(statearr_25754_25781[(2)] = null);

(statearr_25754_25781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25753 === (1))){
var state_25752__$1 = state_25752;
var statearr_25755_25782 = state_25752__$1;
(statearr_25755_25782[(2)] = null);

(statearr_25755_25782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25753 === (4))){
var inst_25716 = (state_25752[(7)]);
var inst_25718 = (inst_25716 < cnt);
var state_25752__$1 = state_25752;
if(cljs.core.truth_(inst_25718)){
var statearr_25756_25783 = state_25752__$1;
(statearr_25756_25783[(1)] = (6));

} else {
var statearr_25757_25784 = state_25752__$1;
(statearr_25757_25784[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25753 === (15))){
var inst_25748 = (state_25752[(2)]);
var state_25752__$1 = state_25752;
var statearr_25758_25785 = state_25752__$1;
(statearr_25758_25785[(2)] = inst_25748);

(statearr_25758_25785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25753 === (13))){
var inst_25741 = cljs.core.async.close_BANG_.call(null,out);
var state_25752__$1 = state_25752;
var statearr_25759_25786 = state_25752__$1;
(statearr_25759_25786[(2)] = inst_25741);

(statearr_25759_25786[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25753 === (6))){
var state_25752__$1 = state_25752;
var statearr_25760_25787 = state_25752__$1;
(statearr_25760_25787[(2)] = null);

(statearr_25760_25787[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25753 === (3))){
var inst_25750 = (state_25752[(2)]);
var state_25752__$1 = state_25752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25752__$1,inst_25750);
} else {
if((state_val_25753 === (12))){
var inst_25738 = (state_25752[(8)]);
var inst_25738__$1 = (state_25752[(2)]);
var inst_25739 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25738__$1);
var state_25752__$1 = (function (){var statearr_25761 = state_25752;
(statearr_25761[(8)] = inst_25738__$1);

return statearr_25761;
})();
if(cljs.core.truth_(inst_25739)){
var statearr_25762_25788 = state_25752__$1;
(statearr_25762_25788[(1)] = (13));

} else {
var statearr_25763_25789 = state_25752__$1;
(statearr_25763_25789[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25753 === (2))){
var inst_25715 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25716 = (0);
var state_25752__$1 = (function (){var statearr_25764 = state_25752;
(statearr_25764[(7)] = inst_25716);

(statearr_25764[(9)] = inst_25715);

return statearr_25764;
})();
var statearr_25765_25790 = state_25752__$1;
(statearr_25765_25790[(2)] = null);

(statearr_25765_25790[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25753 === (11))){
var inst_25716 = (state_25752[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25752,(10),Object,null,(9));
var inst_25725 = chs__$1.call(null,inst_25716);
var inst_25726 = done.call(null,inst_25716);
var inst_25727 = cljs.core.async.take_BANG_.call(null,inst_25725,inst_25726);
var state_25752__$1 = state_25752;
var statearr_25766_25791 = state_25752__$1;
(statearr_25766_25791[(2)] = inst_25727);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25752__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25753 === (9))){
var inst_25716 = (state_25752[(7)]);
var inst_25729 = (state_25752[(2)]);
var inst_25730 = (inst_25716 + (1));
var inst_25716__$1 = inst_25730;
var state_25752__$1 = (function (){var statearr_25767 = state_25752;
(statearr_25767[(7)] = inst_25716__$1);

(statearr_25767[(10)] = inst_25729);

return statearr_25767;
})();
var statearr_25768_25792 = state_25752__$1;
(statearr_25768_25792[(2)] = null);

(statearr_25768_25792[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25753 === (5))){
var inst_25736 = (state_25752[(2)]);
var state_25752__$1 = (function (){var statearr_25769 = state_25752;
(statearr_25769[(11)] = inst_25736);

return statearr_25769;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25752__$1,(12),dchan);
} else {
if((state_val_25753 === (14))){
var inst_25738 = (state_25752[(8)]);
var inst_25743 = cljs.core.apply.call(null,f,inst_25738);
var state_25752__$1 = state_25752;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25752__$1,(16),out,inst_25743);
} else {
if((state_val_25753 === (16))){
var inst_25745 = (state_25752[(2)]);
var state_25752__$1 = (function (){var statearr_25770 = state_25752;
(statearr_25770[(12)] = inst_25745);

return statearr_25770;
})();
var statearr_25771_25793 = state_25752__$1;
(statearr_25771_25793[(2)] = null);

(statearr_25771_25793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25753 === (10))){
var inst_25720 = (state_25752[(2)]);
var inst_25721 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25752__$1 = (function (){var statearr_25772 = state_25752;
(statearr_25772[(13)] = inst_25720);

return statearr_25772;
})();
var statearr_25773_25794 = state_25752__$1;
(statearr_25773_25794[(2)] = inst_25721);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25752__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25753 === (8))){
var inst_25734 = (state_25752[(2)]);
var state_25752__$1 = state_25752;
var statearr_25774_25795 = state_25752__$1;
(statearr_25774_25795[(2)] = inst_25734);

(statearr_25774_25795[(1)] = (5));


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
});})(c__24441__auto___25780,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24346__auto__,c__24441__auto___25780,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24347__auto__ = null;
var cljs$core$async$state_machine__24347__auto____0 = (function (){
var statearr_25775 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25775[(0)] = cljs$core$async$state_machine__24347__auto__);

(statearr_25775[(1)] = (1));

return statearr_25775;
});
var cljs$core$async$state_machine__24347__auto____1 = (function (state_25752){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_25752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e25776){if((e25776 instanceof Object)){
var ex__24350__auto__ = e25776;
var statearr_25777_25796 = state_25752;
(statearr_25777_25796[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25797 = state_25752;
state_25752 = G__25797;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
cljs$core$async$state_machine__24347__auto__ = function(state_25752){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24347__auto____1.call(this,state_25752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24347__auto____0;
cljs$core$async$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24347__auto____1;
return cljs$core$async$state_machine__24347__auto__;
})()
;})(switch__24346__auto__,c__24441__auto___25780,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24443__auto__ = (function (){var statearr_25778 = f__24442__auto__.call(null);
(statearr_25778[(6)] = c__24441__auto___25780);

return statearr_25778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto___25780,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__25800 = arguments.length;
switch (G__25800) {
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
var c__24441__auto___25854 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto___25854,out){
return (function (){
var f__24442__auto__ = (function (){var switch__24346__auto__ = ((function (c__24441__auto___25854,out){
return (function (state_25832){
var state_val_25833 = (state_25832[(1)]);
if((state_val_25833 === (7))){
var inst_25811 = (state_25832[(7)]);
var inst_25812 = (state_25832[(8)]);
var inst_25811__$1 = (state_25832[(2)]);
var inst_25812__$1 = cljs.core.nth.call(null,inst_25811__$1,(0),null);
var inst_25813 = cljs.core.nth.call(null,inst_25811__$1,(1),null);
var inst_25814 = (inst_25812__$1 == null);
var state_25832__$1 = (function (){var statearr_25834 = state_25832;
(statearr_25834[(7)] = inst_25811__$1);

(statearr_25834[(8)] = inst_25812__$1);

(statearr_25834[(9)] = inst_25813);

return statearr_25834;
})();
if(cljs.core.truth_(inst_25814)){
var statearr_25835_25855 = state_25832__$1;
(statearr_25835_25855[(1)] = (8));

} else {
var statearr_25836_25856 = state_25832__$1;
(statearr_25836_25856[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25833 === (1))){
var inst_25801 = cljs.core.vec.call(null,chs);
var inst_25802 = inst_25801;
var state_25832__$1 = (function (){var statearr_25837 = state_25832;
(statearr_25837[(10)] = inst_25802);

return statearr_25837;
})();
var statearr_25838_25857 = state_25832__$1;
(statearr_25838_25857[(2)] = null);

(statearr_25838_25857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25833 === (4))){
var inst_25802 = (state_25832[(10)]);
var state_25832__$1 = state_25832;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25832__$1,(7),inst_25802);
} else {
if((state_val_25833 === (6))){
var inst_25828 = (state_25832[(2)]);
var state_25832__$1 = state_25832;
var statearr_25839_25858 = state_25832__$1;
(statearr_25839_25858[(2)] = inst_25828);

(statearr_25839_25858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25833 === (3))){
var inst_25830 = (state_25832[(2)]);
var state_25832__$1 = state_25832;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25832__$1,inst_25830);
} else {
if((state_val_25833 === (2))){
var inst_25802 = (state_25832[(10)]);
var inst_25804 = cljs.core.count.call(null,inst_25802);
var inst_25805 = (inst_25804 > (0));
var state_25832__$1 = state_25832;
if(cljs.core.truth_(inst_25805)){
var statearr_25841_25859 = state_25832__$1;
(statearr_25841_25859[(1)] = (4));

} else {
var statearr_25842_25860 = state_25832__$1;
(statearr_25842_25860[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25833 === (11))){
var inst_25802 = (state_25832[(10)]);
var inst_25821 = (state_25832[(2)]);
var tmp25840 = inst_25802;
var inst_25802__$1 = tmp25840;
var state_25832__$1 = (function (){var statearr_25843 = state_25832;
(statearr_25843[(10)] = inst_25802__$1);

(statearr_25843[(11)] = inst_25821);

return statearr_25843;
})();
var statearr_25844_25861 = state_25832__$1;
(statearr_25844_25861[(2)] = null);

(statearr_25844_25861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25833 === (9))){
var inst_25812 = (state_25832[(8)]);
var state_25832__$1 = state_25832;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25832__$1,(11),out,inst_25812);
} else {
if((state_val_25833 === (5))){
var inst_25826 = cljs.core.async.close_BANG_.call(null,out);
var state_25832__$1 = state_25832;
var statearr_25845_25862 = state_25832__$1;
(statearr_25845_25862[(2)] = inst_25826);

(statearr_25845_25862[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25833 === (10))){
var inst_25824 = (state_25832[(2)]);
var state_25832__$1 = state_25832;
var statearr_25846_25863 = state_25832__$1;
(statearr_25846_25863[(2)] = inst_25824);

(statearr_25846_25863[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25833 === (8))){
var inst_25802 = (state_25832[(10)]);
var inst_25811 = (state_25832[(7)]);
var inst_25812 = (state_25832[(8)]);
var inst_25813 = (state_25832[(9)]);
var inst_25816 = (function (){var cs = inst_25802;
var vec__25807 = inst_25811;
var v = inst_25812;
var c = inst_25813;
return ((function (cs,vec__25807,v,c,inst_25802,inst_25811,inst_25812,inst_25813,state_val_25833,c__24441__auto___25854,out){
return (function (p1__25798_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25798_SHARP_);
});
;})(cs,vec__25807,v,c,inst_25802,inst_25811,inst_25812,inst_25813,state_val_25833,c__24441__auto___25854,out))
})();
var inst_25817 = cljs.core.filterv.call(null,inst_25816,inst_25802);
var inst_25802__$1 = inst_25817;
var state_25832__$1 = (function (){var statearr_25847 = state_25832;
(statearr_25847[(10)] = inst_25802__$1);

return statearr_25847;
})();
var statearr_25848_25864 = state_25832__$1;
(statearr_25848_25864[(2)] = null);

(statearr_25848_25864[(1)] = (2));


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
});})(c__24441__auto___25854,out))
;
return ((function (switch__24346__auto__,c__24441__auto___25854,out){
return (function() {
var cljs$core$async$state_machine__24347__auto__ = null;
var cljs$core$async$state_machine__24347__auto____0 = (function (){
var statearr_25849 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25849[(0)] = cljs$core$async$state_machine__24347__auto__);

(statearr_25849[(1)] = (1));

return statearr_25849;
});
var cljs$core$async$state_machine__24347__auto____1 = (function (state_25832){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_25832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e25850){if((e25850 instanceof Object)){
var ex__24350__auto__ = e25850;
var statearr_25851_25865 = state_25832;
(statearr_25851_25865[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25866 = state_25832;
state_25832 = G__25866;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
cljs$core$async$state_machine__24347__auto__ = function(state_25832){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24347__auto____1.call(this,state_25832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24347__auto____0;
cljs$core$async$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24347__auto____1;
return cljs$core$async$state_machine__24347__auto__;
})()
;})(switch__24346__auto__,c__24441__auto___25854,out))
})();
var state__24443__auto__ = (function (){var statearr_25852 = f__24442__auto__.call(null);
(statearr_25852[(6)] = c__24441__auto___25854);

return statearr_25852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto___25854,out))
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
var G__25868 = arguments.length;
switch (G__25868) {
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
var c__24441__auto___25913 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto___25913,out){
return (function (){
var f__24442__auto__ = (function (){var switch__24346__auto__ = ((function (c__24441__auto___25913,out){
return (function (state_25892){
var state_val_25893 = (state_25892[(1)]);
if((state_val_25893 === (7))){
var inst_25874 = (state_25892[(7)]);
var inst_25874__$1 = (state_25892[(2)]);
var inst_25875 = (inst_25874__$1 == null);
var inst_25876 = cljs.core.not.call(null,inst_25875);
var state_25892__$1 = (function (){var statearr_25894 = state_25892;
(statearr_25894[(7)] = inst_25874__$1);

return statearr_25894;
})();
if(inst_25876){
var statearr_25895_25914 = state_25892__$1;
(statearr_25895_25914[(1)] = (8));

} else {
var statearr_25896_25915 = state_25892__$1;
(statearr_25896_25915[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25893 === (1))){
var inst_25869 = (0);
var state_25892__$1 = (function (){var statearr_25897 = state_25892;
(statearr_25897[(8)] = inst_25869);

return statearr_25897;
})();
var statearr_25898_25916 = state_25892__$1;
(statearr_25898_25916[(2)] = null);

(statearr_25898_25916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25893 === (4))){
var state_25892__$1 = state_25892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25892__$1,(7),ch);
} else {
if((state_val_25893 === (6))){
var inst_25887 = (state_25892[(2)]);
var state_25892__$1 = state_25892;
var statearr_25899_25917 = state_25892__$1;
(statearr_25899_25917[(2)] = inst_25887);

(statearr_25899_25917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25893 === (3))){
var inst_25889 = (state_25892[(2)]);
var inst_25890 = cljs.core.async.close_BANG_.call(null,out);
var state_25892__$1 = (function (){var statearr_25900 = state_25892;
(statearr_25900[(9)] = inst_25889);

return statearr_25900;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25892__$1,inst_25890);
} else {
if((state_val_25893 === (2))){
var inst_25869 = (state_25892[(8)]);
var inst_25871 = (inst_25869 < n);
var state_25892__$1 = state_25892;
if(cljs.core.truth_(inst_25871)){
var statearr_25901_25918 = state_25892__$1;
(statearr_25901_25918[(1)] = (4));

} else {
var statearr_25902_25919 = state_25892__$1;
(statearr_25902_25919[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25893 === (11))){
var inst_25869 = (state_25892[(8)]);
var inst_25879 = (state_25892[(2)]);
var inst_25880 = (inst_25869 + (1));
var inst_25869__$1 = inst_25880;
var state_25892__$1 = (function (){var statearr_25903 = state_25892;
(statearr_25903[(8)] = inst_25869__$1);

(statearr_25903[(10)] = inst_25879);

return statearr_25903;
})();
var statearr_25904_25920 = state_25892__$1;
(statearr_25904_25920[(2)] = null);

(statearr_25904_25920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25893 === (9))){
var state_25892__$1 = state_25892;
var statearr_25905_25921 = state_25892__$1;
(statearr_25905_25921[(2)] = null);

(statearr_25905_25921[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25893 === (5))){
var state_25892__$1 = state_25892;
var statearr_25906_25922 = state_25892__$1;
(statearr_25906_25922[(2)] = null);

(statearr_25906_25922[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25893 === (10))){
var inst_25884 = (state_25892[(2)]);
var state_25892__$1 = state_25892;
var statearr_25907_25923 = state_25892__$1;
(statearr_25907_25923[(2)] = inst_25884);

(statearr_25907_25923[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25893 === (8))){
var inst_25874 = (state_25892[(7)]);
var state_25892__$1 = state_25892;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25892__$1,(11),out,inst_25874);
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
});})(c__24441__auto___25913,out))
;
return ((function (switch__24346__auto__,c__24441__auto___25913,out){
return (function() {
var cljs$core$async$state_machine__24347__auto__ = null;
var cljs$core$async$state_machine__24347__auto____0 = (function (){
var statearr_25908 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25908[(0)] = cljs$core$async$state_machine__24347__auto__);

(statearr_25908[(1)] = (1));

return statearr_25908;
});
var cljs$core$async$state_machine__24347__auto____1 = (function (state_25892){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_25892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e25909){if((e25909 instanceof Object)){
var ex__24350__auto__ = e25909;
var statearr_25910_25924 = state_25892;
(statearr_25910_25924[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25925 = state_25892;
state_25892 = G__25925;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
cljs$core$async$state_machine__24347__auto__ = function(state_25892){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24347__auto____1.call(this,state_25892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24347__auto____0;
cljs$core$async$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24347__auto____1;
return cljs$core$async$state_machine__24347__auto__;
})()
;})(switch__24346__auto__,c__24441__auto___25913,out))
})();
var state__24443__auto__ = (function (){var statearr_25911 = f__24442__auto__.call(null);
(statearr_25911[(6)] = c__24441__auto___25913);

return statearr_25911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto___25913,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25927 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25927 = (function (f,ch,meta25928){
this.f = f;
this.ch = ch;
this.meta25928 = meta25928;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25929,meta25928__$1){
var self__ = this;
var _25929__$1 = this;
return (new cljs.core.async.t_cljs$core$async25927(self__.f,self__.ch,meta25928__$1));
});

cljs.core.async.t_cljs$core$async25927.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25929){
var self__ = this;
var _25929__$1 = this;
return self__.meta25928;
});

cljs.core.async.t_cljs$core$async25927.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25927.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25927.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25927.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25927.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25930 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25930 = (function (f,ch,meta25928,_,fn1,meta25931){
this.f = f;
this.ch = ch;
this.meta25928 = meta25928;
this._ = _;
this.fn1 = fn1;
this.meta25931 = meta25931;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25932,meta25931__$1){
var self__ = this;
var _25932__$1 = this;
return (new cljs.core.async.t_cljs$core$async25930(self__.f,self__.ch,self__.meta25928,self__._,self__.fn1,meta25931__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25930.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25932){
var self__ = this;
var _25932__$1 = this;
return self__.meta25931;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25930.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25930.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25930.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25930.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25926_SHARP_){
return f1.call(null,(((p1__25926_SHARP_ == null))?null:self__.f.call(null,p1__25926_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25930.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25928","meta25928",-1368964886,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25927","cljs.core.async/t_cljs$core$async25927",1882421385,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25931","meta25931",-1701640558,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25930.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25930.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25930";

cljs.core.async.t_cljs$core$async25930.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25930");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25930.
 */
cljs.core.async.__GT_t_cljs$core$async25930 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25930(f__$1,ch__$1,meta25928__$1,___$2,fn1__$1,meta25931){
return (new cljs.core.async.t_cljs$core$async25930(f__$1,ch__$1,meta25928__$1,___$2,fn1__$1,meta25931));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25930(self__.f,self__.ch,self__.meta25928,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async25927.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25927.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25927.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25928","meta25928",-1368964886,null)], null);
});

cljs.core.async.t_cljs$core$async25927.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25927.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25927";

cljs.core.async.t_cljs$core$async25927.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25927");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25927.
 */
cljs.core.async.__GT_t_cljs$core$async25927 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25927(f__$1,ch__$1,meta25928){
return (new cljs.core.async.t_cljs$core$async25927(f__$1,ch__$1,meta25928));
});

}

return (new cljs.core.async.t_cljs$core$async25927(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25933 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25933 = (function (f,ch,meta25934){
this.f = f;
this.ch = ch;
this.meta25934 = meta25934;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25935,meta25934__$1){
var self__ = this;
var _25935__$1 = this;
return (new cljs.core.async.t_cljs$core$async25933(self__.f,self__.ch,meta25934__$1));
});

cljs.core.async.t_cljs$core$async25933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25935){
var self__ = this;
var _25935__$1 = this;
return self__.meta25934;
});

cljs.core.async.t_cljs$core$async25933.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25933.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25933.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25933.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25933.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25933.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25933.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25934","meta25934",957806833,null)], null);
});

cljs.core.async.t_cljs$core$async25933.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25933.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25933";

cljs.core.async.t_cljs$core$async25933.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25933");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25933.
 */
cljs.core.async.__GT_t_cljs$core$async25933 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25933(f__$1,ch__$1,meta25934){
return (new cljs.core.async.t_cljs$core$async25933(f__$1,ch__$1,meta25934));
});

}

return (new cljs.core.async.t_cljs$core$async25933(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25936 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25936 = (function (p,ch,meta25937){
this.p = p;
this.ch = ch;
this.meta25937 = meta25937;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25938,meta25937__$1){
var self__ = this;
var _25938__$1 = this;
return (new cljs.core.async.t_cljs$core$async25936(self__.p,self__.ch,meta25937__$1));
});

cljs.core.async.t_cljs$core$async25936.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25938){
var self__ = this;
var _25938__$1 = this;
return self__.meta25937;
});

cljs.core.async.t_cljs$core$async25936.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25936.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25936.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25936.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25936.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25936.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25936.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25936.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25937","meta25937",-1919691209,null)], null);
});

cljs.core.async.t_cljs$core$async25936.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25936.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25936";

cljs.core.async.t_cljs$core$async25936.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25936");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25936.
 */
cljs.core.async.__GT_t_cljs$core$async25936 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25936(p__$1,ch__$1,meta25937){
return (new cljs.core.async.t_cljs$core$async25936(p__$1,ch__$1,meta25937));
});

}

return (new cljs.core.async.t_cljs$core$async25936(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__25940 = arguments.length;
switch (G__25940) {
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
var c__24441__auto___25980 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto___25980,out){
return (function (){
var f__24442__auto__ = (function (){var switch__24346__auto__ = ((function (c__24441__auto___25980,out){
return (function (state_25961){
var state_val_25962 = (state_25961[(1)]);
if((state_val_25962 === (7))){
var inst_25957 = (state_25961[(2)]);
var state_25961__$1 = state_25961;
var statearr_25963_25981 = state_25961__$1;
(statearr_25963_25981[(2)] = inst_25957);

(statearr_25963_25981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25962 === (1))){
var state_25961__$1 = state_25961;
var statearr_25964_25982 = state_25961__$1;
(statearr_25964_25982[(2)] = null);

(statearr_25964_25982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25962 === (4))){
var inst_25943 = (state_25961[(7)]);
var inst_25943__$1 = (state_25961[(2)]);
var inst_25944 = (inst_25943__$1 == null);
var state_25961__$1 = (function (){var statearr_25965 = state_25961;
(statearr_25965[(7)] = inst_25943__$1);

return statearr_25965;
})();
if(cljs.core.truth_(inst_25944)){
var statearr_25966_25983 = state_25961__$1;
(statearr_25966_25983[(1)] = (5));

} else {
var statearr_25967_25984 = state_25961__$1;
(statearr_25967_25984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25962 === (6))){
var inst_25943 = (state_25961[(7)]);
var inst_25948 = p.call(null,inst_25943);
var state_25961__$1 = state_25961;
if(cljs.core.truth_(inst_25948)){
var statearr_25968_25985 = state_25961__$1;
(statearr_25968_25985[(1)] = (8));

} else {
var statearr_25969_25986 = state_25961__$1;
(statearr_25969_25986[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25962 === (3))){
var inst_25959 = (state_25961[(2)]);
var state_25961__$1 = state_25961;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25961__$1,inst_25959);
} else {
if((state_val_25962 === (2))){
var state_25961__$1 = state_25961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25961__$1,(4),ch);
} else {
if((state_val_25962 === (11))){
var inst_25951 = (state_25961[(2)]);
var state_25961__$1 = state_25961;
var statearr_25970_25987 = state_25961__$1;
(statearr_25970_25987[(2)] = inst_25951);

(statearr_25970_25987[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25962 === (9))){
var state_25961__$1 = state_25961;
var statearr_25971_25988 = state_25961__$1;
(statearr_25971_25988[(2)] = null);

(statearr_25971_25988[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25962 === (5))){
var inst_25946 = cljs.core.async.close_BANG_.call(null,out);
var state_25961__$1 = state_25961;
var statearr_25972_25989 = state_25961__$1;
(statearr_25972_25989[(2)] = inst_25946);

(statearr_25972_25989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25962 === (10))){
var inst_25954 = (state_25961[(2)]);
var state_25961__$1 = (function (){var statearr_25973 = state_25961;
(statearr_25973[(8)] = inst_25954);

return statearr_25973;
})();
var statearr_25974_25990 = state_25961__$1;
(statearr_25974_25990[(2)] = null);

(statearr_25974_25990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25962 === (8))){
var inst_25943 = (state_25961[(7)]);
var state_25961__$1 = state_25961;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25961__$1,(11),out,inst_25943);
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
});})(c__24441__auto___25980,out))
;
return ((function (switch__24346__auto__,c__24441__auto___25980,out){
return (function() {
var cljs$core$async$state_machine__24347__auto__ = null;
var cljs$core$async$state_machine__24347__auto____0 = (function (){
var statearr_25975 = [null,null,null,null,null,null,null,null,null];
(statearr_25975[(0)] = cljs$core$async$state_machine__24347__auto__);

(statearr_25975[(1)] = (1));

return statearr_25975;
});
var cljs$core$async$state_machine__24347__auto____1 = (function (state_25961){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_25961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e25976){if((e25976 instanceof Object)){
var ex__24350__auto__ = e25976;
var statearr_25977_25991 = state_25961;
(statearr_25977_25991[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25992 = state_25961;
state_25961 = G__25992;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
cljs$core$async$state_machine__24347__auto__ = function(state_25961){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24347__auto____1.call(this,state_25961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24347__auto____0;
cljs$core$async$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24347__auto____1;
return cljs$core$async$state_machine__24347__auto__;
})()
;})(switch__24346__auto__,c__24441__auto___25980,out))
})();
var state__24443__auto__ = (function (){var statearr_25978 = f__24442__auto__.call(null);
(statearr_25978[(6)] = c__24441__auto___25980);

return statearr_25978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto___25980,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25994 = arguments.length;
switch (G__25994) {
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
return (function (state_26057){
var state_val_26058 = (state_26057[(1)]);
if((state_val_26058 === (7))){
var inst_26053 = (state_26057[(2)]);
var state_26057__$1 = state_26057;
var statearr_26059_26097 = state_26057__$1;
(statearr_26059_26097[(2)] = inst_26053);

(statearr_26059_26097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26058 === (20))){
var inst_26023 = (state_26057[(7)]);
var inst_26034 = (state_26057[(2)]);
var inst_26035 = cljs.core.next.call(null,inst_26023);
var inst_26009 = inst_26035;
var inst_26010 = null;
var inst_26011 = (0);
var inst_26012 = (0);
var state_26057__$1 = (function (){var statearr_26060 = state_26057;
(statearr_26060[(8)] = inst_26012);

(statearr_26060[(9)] = inst_26010);

(statearr_26060[(10)] = inst_26009);

(statearr_26060[(11)] = inst_26034);

(statearr_26060[(12)] = inst_26011);

return statearr_26060;
})();
var statearr_26061_26098 = state_26057__$1;
(statearr_26061_26098[(2)] = null);

(statearr_26061_26098[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26058 === (1))){
var state_26057__$1 = state_26057;
var statearr_26062_26099 = state_26057__$1;
(statearr_26062_26099[(2)] = null);

(statearr_26062_26099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26058 === (4))){
var inst_25998 = (state_26057[(13)]);
var inst_25998__$1 = (state_26057[(2)]);
var inst_25999 = (inst_25998__$1 == null);
var state_26057__$1 = (function (){var statearr_26063 = state_26057;
(statearr_26063[(13)] = inst_25998__$1);

return statearr_26063;
})();
if(cljs.core.truth_(inst_25999)){
var statearr_26064_26100 = state_26057__$1;
(statearr_26064_26100[(1)] = (5));

} else {
var statearr_26065_26101 = state_26057__$1;
(statearr_26065_26101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26058 === (15))){
var state_26057__$1 = state_26057;
var statearr_26069_26102 = state_26057__$1;
(statearr_26069_26102[(2)] = null);

(statearr_26069_26102[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26058 === (21))){
var state_26057__$1 = state_26057;
var statearr_26070_26103 = state_26057__$1;
(statearr_26070_26103[(2)] = null);

(statearr_26070_26103[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26058 === (13))){
var inst_26012 = (state_26057[(8)]);
var inst_26010 = (state_26057[(9)]);
var inst_26009 = (state_26057[(10)]);
var inst_26011 = (state_26057[(12)]);
var inst_26019 = (state_26057[(2)]);
var inst_26020 = (inst_26012 + (1));
var tmp26066 = inst_26010;
var tmp26067 = inst_26009;
var tmp26068 = inst_26011;
var inst_26009__$1 = tmp26067;
var inst_26010__$1 = tmp26066;
var inst_26011__$1 = tmp26068;
var inst_26012__$1 = inst_26020;
var state_26057__$1 = (function (){var statearr_26071 = state_26057;
(statearr_26071[(14)] = inst_26019);

(statearr_26071[(8)] = inst_26012__$1);

(statearr_26071[(9)] = inst_26010__$1);

(statearr_26071[(10)] = inst_26009__$1);

(statearr_26071[(12)] = inst_26011__$1);

return statearr_26071;
})();
var statearr_26072_26104 = state_26057__$1;
(statearr_26072_26104[(2)] = null);

(statearr_26072_26104[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26058 === (22))){
var state_26057__$1 = state_26057;
var statearr_26073_26105 = state_26057__$1;
(statearr_26073_26105[(2)] = null);

(statearr_26073_26105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26058 === (6))){
var inst_25998 = (state_26057[(13)]);
var inst_26007 = f.call(null,inst_25998);
var inst_26008 = cljs.core.seq.call(null,inst_26007);
var inst_26009 = inst_26008;
var inst_26010 = null;
var inst_26011 = (0);
var inst_26012 = (0);
var state_26057__$1 = (function (){var statearr_26074 = state_26057;
(statearr_26074[(8)] = inst_26012);

(statearr_26074[(9)] = inst_26010);

(statearr_26074[(10)] = inst_26009);

(statearr_26074[(12)] = inst_26011);

return statearr_26074;
})();
var statearr_26075_26106 = state_26057__$1;
(statearr_26075_26106[(2)] = null);

(statearr_26075_26106[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26058 === (17))){
var inst_26023 = (state_26057[(7)]);
var inst_26027 = cljs.core.chunk_first.call(null,inst_26023);
var inst_26028 = cljs.core.chunk_rest.call(null,inst_26023);
var inst_26029 = cljs.core.count.call(null,inst_26027);
var inst_26009 = inst_26028;
var inst_26010 = inst_26027;
var inst_26011 = inst_26029;
var inst_26012 = (0);
var state_26057__$1 = (function (){var statearr_26076 = state_26057;
(statearr_26076[(8)] = inst_26012);

(statearr_26076[(9)] = inst_26010);

(statearr_26076[(10)] = inst_26009);

(statearr_26076[(12)] = inst_26011);

return statearr_26076;
})();
var statearr_26077_26107 = state_26057__$1;
(statearr_26077_26107[(2)] = null);

(statearr_26077_26107[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26058 === (3))){
var inst_26055 = (state_26057[(2)]);
var state_26057__$1 = state_26057;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26057__$1,inst_26055);
} else {
if((state_val_26058 === (12))){
var inst_26043 = (state_26057[(2)]);
var state_26057__$1 = state_26057;
var statearr_26078_26108 = state_26057__$1;
(statearr_26078_26108[(2)] = inst_26043);

(statearr_26078_26108[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26058 === (2))){
var state_26057__$1 = state_26057;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26057__$1,(4),in$);
} else {
if((state_val_26058 === (23))){
var inst_26051 = (state_26057[(2)]);
var state_26057__$1 = state_26057;
var statearr_26079_26109 = state_26057__$1;
(statearr_26079_26109[(2)] = inst_26051);

(statearr_26079_26109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26058 === (19))){
var inst_26038 = (state_26057[(2)]);
var state_26057__$1 = state_26057;
var statearr_26080_26110 = state_26057__$1;
(statearr_26080_26110[(2)] = inst_26038);

(statearr_26080_26110[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26058 === (11))){
var inst_26023 = (state_26057[(7)]);
var inst_26009 = (state_26057[(10)]);
var inst_26023__$1 = cljs.core.seq.call(null,inst_26009);
var state_26057__$1 = (function (){var statearr_26081 = state_26057;
(statearr_26081[(7)] = inst_26023__$1);

return statearr_26081;
})();
if(inst_26023__$1){
var statearr_26082_26111 = state_26057__$1;
(statearr_26082_26111[(1)] = (14));

} else {
var statearr_26083_26112 = state_26057__$1;
(statearr_26083_26112[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26058 === (9))){
var inst_26045 = (state_26057[(2)]);
var inst_26046 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26057__$1 = (function (){var statearr_26084 = state_26057;
(statearr_26084[(15)] = inst_26045);

return statearr_26084;
})();
if(cljs.core.truth_(inst_26046)){
var statearr_26085_26113 = state_26057__$1;
(statearr_26085_26113[(1)] = (21));

} else {
var statearr_26086_26114 = state_26057__$1;
(statearr_26086_26114[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26058 === (5))){
var inst_26001 = cljs.core.async.close_BANG_.call(null,out);
var state_26057__$1 = state_26057;
var statearr_26087_26115 = state_26057__$1;
(statearr_26087_26115[(2)] = inst_26001);

(statearr_26087_26115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26058 === (14))){
var inst_26023 = (state_26057[(7)]);
var inst_26025 = cljs.core.chunked_seq_QMARK_.call(null,inst_26023);
var state_26057__$1 = state_26057;
if(inst_26025){
var statearr_26088_26116 = state_26057__$1;
(statearr_26088_26116[(1)] = (17));

} else {
var statearr_26089_26117 = state_26057__$1;
(statearr_26089_26117[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26058 === (16))){
var inst_26041 = (state_26057[(2)]);
var state_26057__$1 = state_26057;
var statearr_26090_26118 = state_26057__$1;
(statearr_26090_26118[(2)] = inst_26041);

(statearr_26090_26118[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26058 === (10))){
var inst_26012 = (state_26057[(8)]);
var inst_26010 = (state_26057[(9)]);
var inst_26017 = cljs.core._nth.call(null,inst_26010,inst_26012);
var state_26057__$1 = state_26057;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26057__$1,(13),out,inst_26017);
} else {
if((state_val_26058 === (18))){
var inst_26023 = (state_26057[(7)]);
var inst_26032 = cljs.core.first.call(null,inst_26023);
var state_26057__$1 = state_26057;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26057__$1,(20),out,inst_26032);
} else {
if((state_val_26058 === (8))){
var inst_26012 = (state_26057[(8)]);
var inst_26011 = (state_26057[(12)]);
var inst_26014 = (inst_26012 < inst_26011);
var inst_26015 = inst_26014;
var state_26057__$1 = state_26057;
if(cljs.core.truth_(inst_26015)){
var statearr_26091_26119 = state_26057__$1;
(statearr_26091_26119[(1)] = (10));

} else {
var statearr_26092_26120 = state_26057__$1;
(statearr_26092_26120[(1)] = (11));

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
var statearr_26093 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26093[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24347__auto__);

(statearr_26093[(1)] = (1));

return statearr_26093;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24347__auto____1 = (function (state_26057){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_26057);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e26094){if((e26094 instanceof Object)){
var ex__24350__auto__ = e26094;
var statearr_26095_26121 = state_26057;
(statearr_26095_26121[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26122 = state_26057;
state_26057 = G__26122;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24347__auto__ = function(state_26057){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24347__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24347__auto____1.call(this,state_26057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24347__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24347__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24347__auto__;
})()
;})(switch__24346__auto__,c__24441__auto__))
})();
var state__24443__auto__ = (function (){var statearr_26096 = f__24442__auto__.call(null);
(statearr_26096[(6)] = c__24441__auto__);

return statearr_26096;
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
var G__26124 = arguments.length;
switch (G__26124) {
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
var G__26127 = arguments.length;
switch (G__26127) {
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
var G__26130 = arguments.length;
switch (G__26130) {
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
var c__24441__auto___26177 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto___26177,out){
return (function (){
var f__24442__auto__ = (function (){var switch__24346__auto__ = ((function (c__24441__auto___26177,out){
return (function (state_26154){
var state_val_26155 = (state_26154[(1)]);
if((state_val_26155 === (7))){
var inst_26149 = (state_26154[(2)]);
var state_26154__$1 = state_26154;
var statearr_26156_26178 = state_26154__$1;
(statearr_26156_26178[(2)] = inst_26149);

(statearr_26156_26178[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (1))){
var inst_26131 = null;
var state_26154__$1 = (function (){var statearr_26157 = state_26154;
(statearr_26157[(7)] = inst_26131);

return statearr_26157;
})();
var statearr_26158_26179 = state_26154__$1;
(statearr_26158_26179[(2)] = null);

(statearr_26158_26179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (4))){
var inst_26134 = (state_26154[(8)]);
var inst_26134__$1 = (state_26154[(2)]);
var inst_26135 = (inst_26134__$1 == null);
var inst_26136 = cljs.core.not.call(null,inst_26135);
var state_26154__$1 = (function (){var statearr_26159 = state_26154;
(statearr_26159[(8)] = inst_26134__$1);

return statearr_26159;
})();
if(inst_26136){
var statearr_26160_26180 = state_26154__$1;
(statearr_26160_26180[(1)] = (5));

} else {
var statearr_26161_26181 = state_26154__$1;
(statearr_26161_26181[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (6))){
var state_26154__$1 = state_26154;
var statearr_26162_26182 = state_26154__$1;
(statearr_26162_26182[(2)] = null);

(statearr_26162_26182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (3))){
var inst_26151 = (state_26154[(2)]);
var inst_26152 = cljs.core.async.close_BANG_.call(null,out);
var state_26154__$1 = (function (){var statearr_26163 = state_26154;
(statearr_26163[(9)] = inst_26151);

return statearr_26163;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26154__$1,inst_26152);
} else {
if((state_val_26155 === (2))){
var state_26154__$1 = state_26154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26154__$1,(4),ch);
} else {
if((state_val_26155 === (11))){
var inst_26134 = (state_26154[(8)]);
var inst_26143 = (state_26154[(2)]);
var inst_26131 = inst_26134;
var state_26154__$1 = (function (){var statearr_26164 = state_26154;
(statearr_26164[(7)] = inst_26131);

(statearr_26164[(10)] = inst_26143);

return statearr_26164;
})();
var statearr_26165_26183 = state_26154__$1;
(statearr_26165_26183[(2)] = null);

(statearr_26165_26183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (9))){
var inst_26134 = (state_26154[(8)]);
var state_26154__$1 = state_26154;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26154__$1,(11),out,inst_26134);
} else {
if((state_val_26155 === (5))){
var inst_26131 = (state_26154[(7)]);
var inst_26134 = (state_26154[(8)]);
var inst_26138 = cljs.core._EQ_.call(null,inst_26134,inst_26131);
var state_26154__$1 = state_26154;
if(inst_26138){
var statearr_26167_26184 = state_26154__$1;
(statearr_26167_26184[(1)] = (8));

} else {
var statearr_26168_26185 = state_26154__$1;
(statearr_26168_26185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (10))){
var inst_26146 = (state_26154[(2)]);
var state_26154__$1 = state_26154;
var statearr_26169_26186 = state_26154__$1;
(statearr_26169_26186[(2)] = inst_26146);

(statearr_26169_26186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (8))){
var inst_26131 = (state_26154[(7)]);
var tmp26166 = inst_26131;
var inst_26131__$1 = tmp26166;
var state_26154__$1 = (function (){var statearr_26170 = state_26154;
(statearr_26170[(7)] = inst_26131__$1);

return statearr_26170;
})();
var statearr_26171_26187 = state_26154__$1;
(statearr_26171_26187[(2)] = null);

(statearr_26171_26187[(1)] = (2));


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
});})(c__24441__auto___26177,out))
;
return ((function (switch__24346__auto__,c__24441__auto___26177,out){
return (function() {
var cljs$core$async$state_machine__24347__auto__ = null;
var cljs$core$async$state_machine__24347__auto____0 = (function (){
var statearr_26172 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26172[(0)] = cljs$core$async$state_machine__24347__auto__);

(statearr_26172[(1)] = (1));

return statearr_26172;
});
var cljs$core$async$state_machine__24347__auto____1 = (function (state_26154){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_26154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e26173){if((e26173 instanceof Object)){
var ex__24350__auto__ = e26173;
var statearr_26174_26188 = state_26154;
(statearr_26174_26188[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26189 = state_26154;
state_26154 = G__26189;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
cljs$core$async$state_machine__24347__auto__ = function(state_26154){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24347__auto____1.call(this,state_26154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24347__auto____0;
cljs$core$async$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24347__auto____1;
return cljs$core$async$state_machine__24347__auto__;
})()
;})(switch__24346__auto__,c__24441__auto___26177,out))
})();
var state__24443__auto__ = (function (){var statearr_26175 = f__24442__auto__.call(null);
(statearr_26175[(6)] = c__24441__auto___26177);

return statearr_26175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto___26177,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__26191 = arguments.length;
switch (G__26191) {
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
var c__24441__auto___26257 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto___26257,out){
return (function (){
var f__24442__auto__ = (function (){var switch__24346__auto__ = ((function (c__24441__auto___26257,out){
return (function (state_26229){
var state_val_26230 = (state_26229[(1)]);
if((state_val_26230 === (7))){
var inst_26225 = (state_26229[(2)]);
var state_26229__$1 = state_26229;
var statearr_26231_26258 = state_26229__$1;
(statearr_26231_26258[(2)] = inst_26225);

(statearr_26231_26258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26230 === (1))){
var inst_26192 = (new Array(n));
var inst_26193 = inst_26192;
var inst_26194 = (0);
var state_26229__$1 = (function (){var statearr_26232 = state_26229;
(statearr_26232[(7)] = inst_26193);

(statearr_26232[(8)] = inst_26194);

return statearr_26232;
})();
var statearr_26233_26259 = state_26229__$1;
(statearr_26233_26259[(2)] = null);

(statearr_26233_26259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26230 === (4))){
var inst_26197 = (state_26229[(9)]);
var inst_26197__$1 = (state_26229[(2)]);
var inst_26198 = (inst_26197__$1 == null);
var inst_26199 = cljs.core.not.call(null,inst_26198);
var state_26229__$1 = (function (){var statearr_26234 = state_26229;
(statearr_26234[(9)] = inst_26197__$1);

return statearr_26234;
})();
if(inst_26199){
var statearr_26235_26260 = state_26229__$1;
(statearr_26235_26260[(1)] = (5));

} else {
var statearr_26236_26261 = state_26229__$1;
(statearr_26236_26261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26230 === (15))){
var inst_26219 = (state_26229[(2)]);
var state_26229__$1 = state_26229;
var statearr_26237_26262 = state_26229__$1;
(statearr_26237_26262[(2)] = inst_26219);

(statearr_26237_26262[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26230 === (13))){
var state_26229__$1 = state_26229;
var statearr_26238_26263 = state_26229__$1;
(statearr_26238_26263[(2)] = null);

(statearr_26238_26263[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26230 === (6))){
var inst_26194 = (state_26229[(8)]);
var inst_26215 = (inst_26194 > (0));
var state_26229__$1 = state_26229;
if(cljs.core.truth_(inst_26215)){
var statearr_26239_26264 = state_26229__$1;
(statearr_26239_26264[(1)] = (12));

} else {
var statearr_26240_26265 = state_26229__$1;
(statearr_26240_26265[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26230 === (3))){
var inst_26227 = (state_26229[(2)]);
var state_26229__$1 = state_26229;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26229__$1,inst_26227);
} else {
if((state_val_26230 === (12))){
var inst_26193 = (state_26229[(7)]);
var inst_26217 = cljs.core.vec.call(null,inst_26193);
var state_26229__$1 = state_26229;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26229__$1,(15),out,inst_26217);
} else {
if((state_val_26230 === (2))){
var state_26229__$1 = state_26229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26229__$1,(4),ch);
} else {
if((state_val_26230 === (11))){
var inst_26209 = (state_26229[(2)]);
var inst_26210 = (new Array(n));
var inst_26193 = inst_26210;
var inst_26194 = (0);
var state_26229__$1 = (function (){var statearr_26241 = state_26229;
(statearr_26241[(7)] = inst_26193);

(statearr_26241[(10)] = inst_26209);

(statearr_26241[(8)] = inst_26194);

return statearr_26241;
})();
var statearr_26242_26266 = state_26229__$1;
(statearr_26242_26266[(2)] = null);

(statearr_26242_26266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26230 === (9))){
var inst_26193 = (state_26229[(7)]);
var inst_26207 = cljs.core.vec.call(null,inst_26193);
var state_26229__$1 = state_26229;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26229__$1,(11),out,inst_26207);
} else {
if((state_val_26230 === (5))){
var inst_26202 = (state_26229[(11)]);
var inst_26193 = (state_26229[(7)]);
var inst_26194 = (state_26229[(8)]);
var inst_26197 = (state_26229[(9)]);
var inst_26201 = (inst_26193[inst_26194] = inst_26197);
var inst_26202__$1 = (inst_26194 + (1));
var inst_26203 = (inst_26202__$1 < n);
var state_26229__$1 = (function (){var statearr_26243 = state_26229;
(statearr_26243[(11)] = inst_26202__$1);

(statearr_26243[(12)] = inst_26201);

return statearr_26243;
})();
if(cljs.core.truth_(inst_26203)){
var statearr_26244_26267 = state_26229__$1;
(statearr_26244_26267[(1)] = (8));

} else {
var statearr_26245_26268 = state_26229__$1;
(statearr_26245_26268[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26230 === (14))){
var inst_26222 = (state_26229[(2)]);
var inst_26223 = cljs.core.async.close_BANG_.call(null,out);
var state_26229__$1 = (function (){var statearr_26247 = state_26229;
(statearr_26247[(13)] = inst_26222);

return statearr_26247;
})();
var statearr_26248_26269 = state_26229__$1;
(statearr_26248_26269[(2)] = inst_26223);

(statearr_26248_26269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26230 === (10))){
var inst_26213 = (state_26229[(2)]);
var state_26229__$1 = state_26229;
var statearr_26249_26270 = state_26229__$1;
(statearr_26249_26270[(2)] = inst_26213);

(statearr_26249_26270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26230 === (8))){
var inst_26202 = (state_26229[(11)]);
var inst_26193 = (state_26229[(7)]);
var tmp26246 = inst_26193;
var inst_26193__$1 = tmp26246;
var inst_26194 = inst_26202;
var state_26229__$1 = (function (){var statearr_26250 = state_26229;
(statearr_26250[(7)] = inst_26193__$1);

(statearr_26250[(8)] = inst_26194);

return statearr_26250;
})();
var statearr_26251_26271 = state_26229__$1;
(statearr_26251_26271[(2)] = null);

(statearr_26251_26271[(1)] = (2));


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
});})(c__24441__auto___26257,out))
;
return ((function (switch__24346__auto__,c__24441__auto___26257,out){
return (function() {
var cljs$core$async$state_machine__24347__auto__ = null;
var cljs$core$async$state_machine__24347__auto____0 = (function (){
var statearr_26252 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26252[(0)] = cljs$core$async$state_machine__24347__auto__);

(statearr_26252[(1)] = (1));

return statearr_26252;
});
var cljs$core$async$state_machine__24347__auto____1 = (function (state_26229){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_26229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e26253){if((e26253 instanceof Object)){
var ex__24350__auto__ = e26253;
var statearr_26254_26272 = state_26229;
(statearr_26254_26272[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26273 = state_26229;
state_26229 = G__26273;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
cljs$core$async$state_machine__24347__auto__ = function(state_26229){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24347__auto____1.call(this,state_26229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24347__auto____0;
cljs$core$async$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24347__auto____1;
return cljs$core$async$state_machine__24347__auto__;
})()
;})(switch__24346__auto__,c__24441__auto___26257,out))
})();
var state__24443__auto__ = (function (){var statearr_26255 = f__24442__auto__.call(null);
(statearr_26255[(6)] = c__24441__auto___26257);

return statearr_26255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto___26257,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__26275 = arguments.length;
switch (G__26275) {
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
var c__24441__auto___26345 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto___26345,out){
return (function (){
var f__24442__auto__ = (function (){var switch__24346__auto__ = ((function (c__24441__auto___26345,out){
return (function (state_26317){
var state_val_26318 = (state_26317[(1)]);
if((state_val_26318 === (7))){
var inst_26313 = (state_26317[(2)]);
var state_26317__$1 = state_26317;
var statearr_26319_26346 = state_26317__$1;
(statearr_26319_26346[(2)] = inst_26313);

(statearr_26319_26346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26318 === (1))){
var inst_26276 = [];
var inst_26277 = inst_26276;
var inst_26278 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26317__$1 = (function (){var statearr_26320 = state_26317;
(statearr_26320[(7)] = inst_26278);

(statearr_26320[(8)] = inst_26277);

return statearr_26320;
})();
var statearr_26321_26347 = state_26317__$1;
(statearr_26321_26347[(2)] = null);

(statearr_26321_26347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26318 === (4))){
var inst_26281 = (state_26317[(9)]);
var inst_26281__$1 = (state_26317[(2)]);
var inst_26282 = (inst_26281__$1 == null);
var inst_26283 = cljs.core.not.call(null,inst_26282);
var state_26317__$1 = (function (){var statearr_26322 = state_26317;
(statearr_26322[(9)] = inst_26281__$1);

return statearr_26322;
})();
if(inst_26283){
var statearr_26323_26348 = state_26317__$1;
(statearr_26323_26348[(1)] = (5));

} else {
var statearr_26324_26349 = state_26317__$1;
(statearr_26324_26349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26318 === (15))){
var inst_26307 = (state_26317[(2)]);
var state_26317__$1 = state_26317;
var statearr_26325_26350 = state_26317__$1;
(statearr_26325_26350[(2)] = inst_26307);

(statearr_26325_26350[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26318 === (13))){
var state_26317__$1 = state_26317;
var statearr_26326_26351 = state_26317__$1;
(statearr_26326_26351[(2)] = null);

(statearr_26326_26351[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26318 === (6))){
var inst_26277 = (state_26317[(8)]);
var inst_26302 = inst_26277.length;
var inst_26303 = (inst_26302 > (0));
var state_26317__$1 = state_26317;
if(cljs.core.truth_(inst_26303)){
var statearr_26327_26352 = state_26317__$1;
(statearr_26327_26352[(1)] = (12));

} else {
var statearr_26328_26353 = state_26317__$1;
(statearr_26328_26353[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26318 === (3))){
var inst_26315 = (state_26317[(2)]);
var state_26317__$1 = state_26317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26317__$1,inst_26315);
} else {
if((state_val_26318 === (12))){
var inst_26277 = (state_26317[(8)]);
var inst_26305 = cljs.core.vec.call(null,inst_26277);
var state_26317__$1 = state_26317;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26317__$1,(15),out,inst_26305);
} else {
if((state_val_26318 === (2))){
var state_26317__$1 = state_26317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26317__$1,(4),ch);
} else {
if((state_val_26318 === (11))){
var inst_26285 = (state_26317[(10)]);
var inst_26281 = (state_26317[(9)]);
var inst_26295 = (state_26317[(2)]);
var inst_26296 = [];
var inst_26297 = inst_26296.push(inst_26281);
var inst_26277 = inst_26296;
var inst_26278 = inst_26285;
var state_26317__$1 = (function (){var statearr_26329 = state_26317;
(statearr_26329[(11)] = inst_26295);

(statearr_26329[(7)] = inst_26278);

(statearr_26329[(12)] = inst_26297);

(statearr_26329[(8)] = inst_26277);

return statearr_26329;
})();
var statearr_26330_26354 = state_26317__$1;
(statearr_26330_26354[(2)] = null);

(statearr_26330_26354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26318 === (9))){
var inst_26277 = (state_26317[(8)]);
var inst_26293 = cljs.core.vec.call(null,inst_26277);
var state_26317__$1 = state_26317;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26317__$1,(11),out,inst_26293);
} else {
if((state_val_26318 === (5))){
var inst_26285 = (state_26317[(10)]);
var inst_26281 = (state_26317[(9)]);
var inst_26278 = (state_26317[(7)]);
var inst_26285__$1 = f.call(null,inst_26281);
var inst_26286 = cljs.core._EQ_.call(null,inst_26285__$1,inst_26278);
var inst_26287 = cljs.core.keyword_identical_QMARK_.call(null,inst_26278,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26288 = ((inst_26286) || (inst_26287));
var state_26317__$1 = (function (){var statearr_26331 = state_26317;
(statearr_26331[(10)] = inst_26285__$1);

return statearr_26331;
})();
if(cljs.core.truth_(inst_26288)){
var statearr_26332_26355 = state_26317__$1;
(statearr_26332_26355[(1)] = (8));

} else {
var statearr_26333_26356 = state_26317__$1;
(statearr_26333_26356[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26318 === (14))){
var inst_26310 = (state_26317[(2)]);
var inst_26311 = cljs.core.async.close_BANG_.call(null,out);
var state_26317__$1 = (function (){var statearr_26335 = state_26317;
(statearr_26335[(13)] = inst_26310);

return statearr_26335;
})();
var statearr_26336_26357 = state_26317__$1;
(statearr_26336_26357[(2)] = inst_26311);

(statearr_26336_26357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26318 === (10))){
var inst_26300 = (state_26317[(2)]);
var state_26317__$1 = state_26317;
var statearr_26337_26358 = state_26317__$1;
(statearr_26337_26358[(2)] = inst_26300);

(statearr_26337_26358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26318 === (8))){
var inst_26285 = (state_26317[(10)]);
var inst_26281 = (state_26317[(9)]);
var inst_26277 = (state_26317[(8)]);
var inst_26290 = inst_26277.push(inst_26281);
var tmp26334 = inst_26277;
var inst_26277__$1 = tmp26334;
var inst_26278 = inst_26285;
var state_26317__$1 = (function (){var statearr_26338 = state_26317;
(statearr_26338[(14)] = inst_26290);

(statearr_26338[(7)] = inst_26278);

(statearr_26338[(8)] = inst_26277__$1);

return statearr_26338;
})();
var statearr_26339_26359 = state_26317__$1;
(statearr_26339_26359[(2)] = null);

(statearr_26339_26359[(1)] = (2));


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
});})(c__24441__auto___26345,out))
;
return ((function (switch__24346__auto__,c__24441__auto___26345,out){
return (function() {
var cljs$core$async$state_machine__24347__auto__ = null;
var cljs$core$async$state_machine__24347__auto____0 = (function (){
var statearr_26340 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26340[(0)] = cljs$core$async$state_machine__24347__auto__);

(statearr_26340[(1)] = (1));

return statearr_26340;
});
var cljs$core$async$state_machine__24347__auto____1 = (function (state_26317){
while(true){
var ret_value__24348__auto__ = (function (){try{while(true){
var result__24349__auto__ = switch__24346__auto__.call(null,state_26317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24349__auto__;
}
break;
}
}catch (e26341){if((e26341 instanceof Object)){
var ex__24350__auto__ = e26341;
var statearr_26342_26360 = state_26317;
(statearr_26342_26360[(5)] = ex__24350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26361 = state_26317;
state_26317 = G__26361;
continue;
} else {
return ret_value__24348__auto__;
}
break;
}
});
cljs$core$async$state_machine__24347__auto__ = function(state_26317){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24347__auto____1.call(this,state_26317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24347__auto____0;
cljs$core$async$state_machine__24347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24347__auto____1;
return cljs$core$async$state_machine__24347__auto__;
})()
;})(switch__24346__auto__,c__24441__auto___26345,out))
})();
var state__24443__auto__ = (function (){var statearr_26343 = f__24442__auto__.call(null);
(statearr_26343[(6)] = c__24441__auto___26345);

return statearr_26343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto___26345,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
