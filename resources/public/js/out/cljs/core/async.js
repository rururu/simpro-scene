// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args9332 = [];
var len__7774__auto___9338 = arguments.length;
var i__7775__auto___9339 = (0);
while(true){
if((i__7775__auto___9339 < len__7774__auto___9338)){
args9332.push((arguments[i__7775__auto___9339]));

var G__9340 = (i__7775__auto___9339 + (1));
i__7775__auto___9339 = G__9340;
continue;
} else {
}
break;
}

var G__9334 = args9332.length;
switch (G__9334) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9332.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async9335 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9335 = (function (f,blockable,meta9336){
this.f = f;
this.blockable = blockable;
this.meta9336 = meta9336;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9337,meta9336__$1){
var self__ = this;
var _9337__$1 = this;
return (new cljs.core.async.t_cljs$core$async9335(self__.f,self__.blockable,meta9336__$1));
});

cljs.core.async.t_cljs$core$async9335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9337){
var self__ = this;
var _9337__$1 = this;
return self__.meta9336;
});

cljs.core.async.t_cljs$core$async9335.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9335.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async9335.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async9335.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async9335.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta9336","meta9336",34165209,null)], null);
});

cljs.core.async.t_cljs$core$async9335.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9335.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9335";

cljs.core.async.t_cljs$core$async9335.cljs$lang$ctorPrWriter = (function (this__7272__auto__,writer__7273__auto__,opt__7274__auto__){
return cljs.core._write.call(null,writer__7273__auto__,"cljs.core.async/t_cljs$core$async9335");
});

cljs.core.async.__GT_t_cljs$core$async9335 = (function cljs$core$async$__GT_t_cljs$core$async9335(f__$1,blockable__$1,meta9336){
return (new cljs.core.async.t_cljs$core$async9335(f__$1,blockable__$1,meta9336));
});

}

return (new cljs.core.async.t_cljs$core$async9335(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
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
var args9344 = [];
var len__7774__auto___9347 = arguments.length;
var i__7775__auto___9348 = (0);
while(true){
if((i__7775__auto___9348 < len__7774__auto___9347)){
args9344.push((arguments[i__7775__auto___9348]));

var G__9349 = (i__7775__auto___9348 + (1));
i__7775__auto___9348 = G__9349;
continue;
} else {
}
break;
}

var G__9346 = args9344.length;
switch (G__9346) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9344.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
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
var args9351 = [];
var len__7774__auto___9354 = arguments.length;
var i__7775__auto___9355 = (0);
while(true){
if((i__7775__auto___9355 < len__7774__auto___9354)){
args9351.push((arguments[i__7775__auto___9355]));

var G__9356 = (i__7775__auto___9355 + (1));
i__7775__auto___9355 = G__9356;
continue;
} else {
}
break;
}

var G__9353 = args9351.length;
switch (G__9353) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9351.length)].join('')));

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
var args9358 = [];
var len__7774__auto___9361 = arguments.length;
var i__7775__auto___9362 = (0);
while(true){
if((i__7775__auto___9362 < len__7774__auto___9361)){
args9358.push((arguments[i__7775__auto___9362]));

var G__9363 = (i__7775__auto___9362 + (1));
i__7775__auto___9362 = G__9363;
continue;
} else {
}
break;
}

var G__9360 = args9358.length;
switch (G__9360) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9358.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_9365 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_9365);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_9365,ret){
return (function (){
return fn1.call(null,val_9365);
});})(val_9365,ret))
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
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args9366 = [];
var len__7774__auto___9369 = arguments.length;
var i__7775__auto___9370 = (0);
while(true){
if((i__7775__auto___9370 < len__7774__auto___9369)){
args9366.push((arguments[i__7775__auto___9370]));

var G__9371 = (i__7775__auto___9370 + (1));
i__7775__auto___9370 = G__9371;
continue;
} else {
}
break;
}

var G__9368 = args9366.length;
switch (G__9368) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9366.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
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
var n__7584__auto___9373 = n;
var x_9374 = (0);
while(true){
if((x_9374 < n__7584__auto___9373)){
(a[x_9374] = (0));

var G__9375 = (x_9374 + (1));
x_9374 = G__9375;
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

var G__9376 = (i + (1));
i = G__9376;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async9380 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9380 = (function (flag,meta9381){
this.flag = flag;
this.meta9381 = meta9381;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_9382,meta9381__$1){
var self__ = this;
var _9382__$1 = this;
return (new cljs.core.async.t_cljs$core$async9380(self__.flag,meta9381__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async9380.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_9382){
var self__ = this;
var _9382__$1 = this;
return self__.meta9381;
});})(flag))
;

cljs.core.async.t_cljs$core$async9380.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9380.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async9380.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async9380.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async9380.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta9381","meta9381",-1402300001,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async9380.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9380.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9380";

cljs.core.async.t_cljs$core$async9380.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7272__auto__,writer__7273__auto__,opt__7274__auto__){
return cljs.core._write.call(null,writer__7273__auto__,"cljs.core.async/t_cljs$core$async9380");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async9380 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async9380(flag__$1,meta9381){
return (new cljs.core.async.t_cljs$core$async9380(flag__$1,meta9381));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async9380(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async9386 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9386 = (function (flag,cb,meta9387){
this.flag = flag;
this.cb = cb;
this.meta9387 = meta9387;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9388,meta9387__$1){
var self__ = this;
var _9388__$1 = this;
return (new cljs.core.async.t_cljs$core$async9386(self__.flag,self__.cb,meta9387__$1));
});

cljs.core.async.t_cljs$core$async9386.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9388){
var self__ = this;
var _9388__$1 = this;
return self__.meta9387;
});

cljs.core.async.t_cljs$core$async9386.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9386.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async9386.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async9386.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async9386.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta9387","meta9387",-57776123,null)], null);
});

cljs.core.async.t_cljs$core$async9386.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9386.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9386";

cljs.core.async.t_cljs$core$async9386.cljs$lang$ctorPrWriter = (function (this__7272__auto__,writer__7273__auto__,opt__7274__auto__){
return cljs.core._write.call(null,writer__7273__auto__,"cljs.core.async/t_cljs$core$async9386");
});

cljs.core.async.__GT_t_cljs$core$async9386 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async9386(flag__$1,cb__$1,meta9387){
return (new cljs.core.async.t_cljs$core$async9386(flag__$1,cb__$1,meta9387));
});

}

return (new cljs.core.async.t_cljs$core$async9386(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__9389_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9389_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9390_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9390_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6666__auto__ = wport;
if(cljs.core.truth_(or__6666__auto__)){
return or__6666__auto__;
} else {
return port;
}
})()], null));
} else {
var G__9391 = (i + (1));
i = G__9391;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6666__auto__ = ret;
if(cljs.core.truth_(or__6666__auto__)){
return or__6666__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__6654__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6654__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6654__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
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
var args__7781__auto__ = [];
var len__7774__auto___9397 = arguments.length;
var i__7775__auto___9398 = (0);
while(true){
if((i__7775__auto___9398 < len__7774__auto___9397)){
args__7781__auto__.push((arguments[i__7775__auto___9398]));

var G__9399 = (i__7775__auto___9398 + (1));
i__7775__auto___9398 = G__9399;
continue;
} else {
}
break;
}

var argseq__7782__auto__ = ((((1) < args__7781__auto__.length))?(new cljs.core.IndexedSeq(args__7781__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7782__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__9394){
var map__9395 = p__9394;
var map__9395__$1 = ((((!((map__9395 == null)))?((((map__9395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9395.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9395):map__9395);
var opts = map__9395__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq9392){
var G__9393 = cljs.core.first.call(null,seq9392);
var seq9392__$1 = cljs.core.next.call(null,seq9392);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9393,seq9392__$1);
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
var args9400 = [];
var len__7774__auto___9450 = arguments.length;
var i__7775__auto___9451 = (0);
while(true){
if((i__7775__auto___9451 < len__7774__auto___9450)){
args9400.push((arguments[i__7775__auto___9451]));

var G__9452 = (i__7775__auto___9451 + (1));
i__7775__auto___9451 = G__9452;
continue;
} else {
}
break;
}

var G__9402 = args9400.length;
switch (G__9402) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9400.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__9287__auto___9454 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9287__auto___9454){
return (function (){
var f__9288__auto__ = (function (){var switch__9175__auto__ = ((function (c__9287__auto___9454){
return (function (state_9426){
var state_val_9427 = (state_9426[(1)]);
if((state_val_9427 === (7))){
var inst_9422 = (state_9426[(2)]);
var state_9426__$1 = state_9426;
var statearr_9428_9455 = state_9426__$1;
(statearr_9428_9455[(2)] = inst_9422);

(statearr_9428_9455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9427 === (1))){
var state_9426__$1 = state_9426;
var statearr_9429_9456 = state_9426__$1;
(statearr_9429_9456[(2)] = null);

(statearr_9429_9456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9427 === (4))){
var inst_9405 = (state_9426[(7)]);
var inst_9405__$1 = (state_9426[(2)]);
var inst_9406 = (inst_9405__$1 == null);
var state_9426__$1 = (function (){var statearr_9430 = state_9426;
(statearr_9430[(7)] = inst_9405__$1);

return statearr_9430;
})();
if(cljs.core.truth_(inst_9406)){
var statearr_9431_9457 = state_9426__$1;
(statearr_9431_9457[(1)] = (5));

} else {
var statearr_9432_9458 = state_9426__$1;
(statearr_9432_9458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9427 === (13))){
var state_9426__$1 = state_9426;
var statearr_9433_9459 = state_9426__$1;
(statearr_9433_9459[(2)] = null);

(statearr_9433_9459[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9427 === (6))){
var inst_9405 = (state_9426[(7)]);
var state_9426__$1 = state_9426;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9426__$1,(11),to,inst_9405);
} else {
if((state_val_9427 === (3))){
var inst_9424 = (state_9426[(2)]);
var state_9426__$1 = state_9426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9426__$1,inst_9424);
} else {
if((state_val_9427 === (12))){
var state_9426__$1 = state_9426;
var statearr_9434_9460 = state_9426__$1;
(statearr_9434_9460[(2)] = null);

(statearr_9434_9460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9427 === (2))){
var state_9426__$1 = state_9426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9426__$1,(4),from);
} else {
if((state_val_9427 === (11))){
var inst_9415 = (state_9426[(2)]);
var state_9426__$1 = state_9426;
if(cljs.core.truth_(inst_9415)){
var statearr_9435_9461 = state_9426__$1;
(statearr_9435_9461[(1)] = (12));

} else {
var statearr_9436_9462 = state_9426__$1;
(statearr_9436_9462[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9427 === (9))){
var state_9426__$1 = state_9426;
var statearr_9437_9463 = state_9426__$1;
(statearr_9437_9463[(2)] = null);

(statearr_9437_9463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9427 === (5))){
var state_9426__$1 = state_9426;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9438_9464 = state_9426__$1;
(statearr_9438_9464[(1)] = (8));

} else {
var statearr_9439_9465 = state_9426__$1;
(statearr_9439_9465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9427 === (14))){
var inst_9420 = (state_9426[(2)]);
var state_9426__$1 = state_9426;
var statearr_9440_9466 = state_9426__$1;
(statearr_9440_9466[(2)] = inst_9420);

(statearr_9440_9466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9427 === (10))){
var inst_9412 = (state_9426[(2)]);
var state_9426__$1 = state_9426;
var statearr_9441_9467 = state_9426__$1;
(statearr_9441_9467[(2)] = inst_9412);

(statearr_9441_9467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9427 === (8))){
var inst_9409 = cljs.core.async.close_BANG_.call(null,to);
var state_9426__$1 = state_9426;
var statearr_9442_9468 = state_9426__$1;
(statearr_9442_9468[(2)] = inst_9409);

(statearr_9442_9468[(1)] = (10));


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
});})(c__9287__auto___9454))
;
return ((function (switch__9175__auto__,c__9287__auto___9454){
return (function() {
var cljs$core$async$state_machine__9176__auto__ = null;
var cljs$core$async$state_machine__9176__auto____0 = (function (){
var statearr_9446 = [null,null,null,null,null,null,null,null];
(statearr_9446[(0)] = cljs$core$async$state_machine__9176__auto__);

(statearr_9446[(1)] = (1));

return statearr_9446;
});
var cljs$core$async$state_machine__9176__auto____1 = (function (state_9426){
while(true){
var ret_value__9177__auto__ = (function (){try{while(true){
var result__9178__auto__ = switch__9175__auto__.call(null,state_9426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9178__auto__;
}
break;
}
}catch (e9447){if((e9447 instanceof Object)){
var ex__9179__auto__ = e9447;
var statearr_9448_9469 = state_9426;
(statearr_9448_9469[(5)] = ex__9179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9470 = state_9426;
state_9426 = G__9470;
continue;
} else {
return ret_value__9177__auto__;
}
break;
}
});
cljs$core$async$state_machine__9176__auto__ = function(state_9426){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9176__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9176__auto____1.call(this,state_9426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9176__auto____0;
cljs$core$async$state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9176__auto____1;
return cljs$core$async$state_machine__9176__auto__;
})()
;})(switch__9175__auto__,c__9287__auto___9454))
})();
var state__9289__auto__ = (function (){var statearr_9449 = f__9288__auto__.call(null);
(statearr_9449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9287__auto___9454);

return statearr_9449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9289__auto__);
});})(c__9287__auto___9454))
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
return (function (p__9658){
var vec__9659 = p__9658;
var v = cljs.core.nth.call(null,vec__9659,(0),null);
var p = cljs.core.nth.call(null,vec__9659,(1),null);
var job = vec__9659;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__9287__auto___9845 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9287__auto___9845,res,vec__9659,v,p,job,jobs,results){
return (function (){
var f__9288__auto__ = (function (){var switch__9175__auto__ = ((function (c__9287__auto___9845,res,vec__9659,v,p,job,jobs,results){
return (function (state_9666){
var state_val_9667 = (state_9666[(1)]);
if((state_val_9667 === (1))){
var state_9666__$1 = state_9666;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9666__$1,(2),res,v);
} else {
if((state_val_9667 === (2))){
var inst_9663 = (state_9666[(2)]);
var inst_9664 = cljs.core.async.close_BANG_.call(null,res);
var state_9666__$1 = (function (){var statearr_9668 = state_9666;
(statearr_9668[(7)] = inst_9663);

return statearr_9668;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9666__$1,inst_9664);
} else {
return null;
}
}
});})(c__9287__auto___9845,res,vec__9659,v,p,job,jobs,results))
;
return ((function (switch__9175__auto__,c__9287__auto___9845,res,vec__9659,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9176__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9176__auto____0 = (function (){
var statearr_9672 = [null,null,null,null,null,null,null,null];
(statearr_9672[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9176__auto__);

(statearr_9672[(1)] = (1));

return statearr_9672;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9176__auto____1 = (function (state_9666){
while(true){
var ret_value__9177__auto__ = (function (){try{while(true){
var result__9178__auto__ = switch__9175__auto__.call(null,state_9666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9178__auto__;
}
break;
}
}catch (e9673){if((e9673 instanceof Object)){
var ex__9179__auto__ = e9673;
var statearr_9674_9846 = state_9666;
(statearr_9674_9846[(5)] = ex__9179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9847 = state_9666;
state_9666 = G__9847;
continue;
} else {
return ret_value__9177__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9176__auto__ = function(state_9666){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9176__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9176__auto____1.call(this,state_9666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9176__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9176__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9176__auto__;
})()
;})(switch__9175__auto__,c__9287__auto___9845,res,vec__9659,v,p,job,jobs,results))
})();
var state__9289__auto__ = (function (){var statearr_9675 = f__9288__auto__.call(null);
(statearr_9675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9287__auto___9845);

return statearr_9675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9289__auto__);
});})(c__9287__auto___9845,res,vec__9659,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__9676){
var vec__9677 = p__9676;
var v = cljs.core.nth.call(null,vec__9677,(0),null);
var p = cljs.core.nth.call(null,vec__9677,(1),null);
var job = vec__9677;
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
var n__7584__auto___9848 = n;
var __9849 = (0);
while(true){
if((__9849 < n__7584__auto___9848)){
var G__9680_9850 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__9680_9850) {
case "compute":
var c__9287__auto___9852 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9849,c__9287__auto___9852,G__9680_9850,n__7584__auto___9848,jobs,results,process,async){
return (function (){
var f__9288__auto__ = (function (){var switch__9175__auto__ = ((function (__9849,c__9287__auto___9852,G__9680_9850,n__7584__auto___9848,jobs,results,process,async){
return (function (state_9693){
var state_val_9694 = (state_9693[(1)]);
if((state_val_9694 === (1))){
var state_9693__$1 = state_9693;
var statearr_9695_9853 = state_9693__$1;
(statearr_9695_9853[(2)] = null);

(statearr_9695_9853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9694 === (2))){
var state_9693__$1 = state_9693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9693__$1,(4),jobs);
} else {
if((state_val_9694 === (3))){
var inst_9691 = (state_9693[(2)]);
var state_9693__$1 = state_9693;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9693__$1,inst_9691);
} else {
if((state_val_9694 === (4))){
var inst_9683 = (state_9693[(2)]);
var inst_9684 = process.call(null,inst_9683);
var state_9693__$1 = state_9693;
if(cljs.core.truth_(inst_9684)){
var statearr_9696_9854 = state_9693__$1;
(statearr_9696_9854[(1)] = (5));

} else {
var statearr_9697_9855 = state_9693__$1;
(statearr_9697_9855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9694 === (5))){
var state_9693__$1 = state_9693;
var statearr_9698_9856 = state_9693__$1;
(statearr_9698_9856[(2)] = null);

(statearr_9698_9856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9694 === (6))){
var state_9693__$1 = state_9693;
var statearr_9699_9857 = state_9693__$1;
(statearr_9699_9857[(2)] = null);

(statearr_9699_9857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9694 === (7))){
var inst_9689 = (state_9693[(2)]);
var state_9693__$1 = state_9693;
var statearr_9700_9858 = state_9693__$1;
(statearr_9700_9858[(2)] = inst_9689);

(statearr_9700_9858[(1)] = (3));


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
});})(__9849,c__9287__auto___9852,G__9680_9850,n__7584__auto___9848,jobs,results,process,async))
;
return ((function (__9849,switch__9175__auto__,c__9287__auto___9852,G__9680_9850,n__7584__auto___9848,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9176__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9176__auto____0 = (function (){
var statearr_9704 = [null,null,null,null,null,null,null];
(statearr_9704[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9176__auto__);

(statearr_9704[(1)] = (1));

return statearr_9704;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9176__auto____1 = (function (state_9693){
while(true){
var ret_value__9177__auto__ = (function (){try{while(true){
var result__9178__auto__ = switch__9175__auto__.call(null,state_9693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9178__auto__;
}
break;
}
}catch (e9705){if((e9705 instanceof Object)){
var ex__9179__auto__ = e9705;
var statearr_9706_9859 = state_9693;
(statearr_9706_9859[(5)] = ex__9179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9860 = state_9693;
state_9693 = G__9860;
continue;
} else {
return ret_value__9177__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9176__auto__ = function(state_9693){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9176__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9176__auto____1.call(this,state_9693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9176__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9176__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9176__auto__;
})()
;})(__9849,switch__9175__auto__,c__9287__auto___9852,G__9680_9850,n__7584__auto___9848,jobs,results,process,async))
})();
var state__9289__auto__ = (function (){var statearr_9707 = f__9288__auto__.call(null);
(statearr_9707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9287__auto___9852);

return statearr_9707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9289__auto__);
});})(__9849,c__9287__auto___9852,G__9680_9850,n__7584__auto___9848,jobs,results,process,async))
);


break;
case "async":
var c__9287__auto___9861 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9849,c__9287__auto___9861,G__9680_9850,n__7584__auto___9848,jobs,results,process,async){
return (function (){
var f__9288__auto__ = (function (){var switch__9175__auto__ = ((function (__9849,c__9287__auto___9861,G__9680_9850,n__7584__auto___9848,jobs,results,process,async){
return (function (state_9720){
var state_val_9721 = (state_9720[(1)]);
if((state_val_9721 === (1))){
var state_9720__$1 = state_9720;
var statearr_9722_9862 = state_9720__$1;
(statearr_9722_9862[(2)] = null);

(statearr_9722_9862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9721 === (2))){
var state_9720__$1 = state_9720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9720__$1,(4),jobs);
} else {
if((state_val_9721 === (3))){
var inst_9718 = (state_9720[(2)]);
var state_9720__$1 = state_9720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9720__$1,inst_9718);
} else {
if((state_val_9721 === (4))){
var inst_9710 = (state_9720[(2)]);
var inst_9711 = async.call(null,inst_9710);
var state_9720__$1 = state_9720;
if(cljs.core.truth_(inst_9711)){
var statearr_9723_9863 = state_9720__$1;
(statearr_9723_9863[(1)] = (5));

} else {
var statearr_9724_9864 = state_9720__$1;
(statearr_9724_9864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9721 === (5))){
var state_9720__$1 = state_9720;
var statearr_9725_9865 = state_9720__$1;
(statearr_9725_9865[(2)] = null);

(statearr_9725_9865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9721 === (6))){
var state_9720__$1 = state_9720;
var statearr_9726_9866 = state_9720__$1;
(statearr_9726_9866[(2)] = null);

(statearr_9726_9866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9721 === (7))){
var inst_9716 = (state_9720[(2)]);
var state_9720__$1 = state_9720;
var statearr_9727_9867 = state_9720__$1;
(statearr_9727_9867[(2)] = inst_9716);

(statearr_9727_9867[(1)] = (3));


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
});})(__9849,c__9287__auto___9861,G__9680_9850,n__7584__auto___9848,jobs,results,process,async))
;
return ((function (__9849,switch__9175__auto__,c__9287__auto___9861,G__9680_9850,n__7584__auto___9848,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9176__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9176__auto____0 = (function (){
var statearr_9731 = [null,null,null,null,null,null,null];
(statearr_9731[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9176__auto__);

(statearr_9731[(1)] = (1));

return statearr_9731;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9176__auto____1 = (function (state_9720){
while(true){
var ret_value__9177__auto__ = (function (){try{while(true){
var result__9178__auto__ = switch__9175__auto__.call(null,state_9720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9178__auto__;
}
break;
}
}catch (e9732){if((e9732 instanceof Object)){
var ex__9179__auto__ = e9732;
var statearr_9733_9868 = state_9720;
(statearr_9733_9868[(5)] = ex__9179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9732;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9869 = state_9720;
state_9720 = G__9869;
continue;
} else {
return ret_value__9177__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9176__auto__ = function(state_9720){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9176__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9176__auto____1.call(this,state_9720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9176__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9176__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9176__auto__;
})()
;})(__9849,switch__9175__auto__,c__9287__auto___9861,G__9680_9850,n__7584__auto___9848,jobs,results,process,async))
})();
var state__9289__auto__ = (function (){var statearr_9734 = f__9288__auto__.call(null);
(statearr_9734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9287__auto___9861);

return statearr_9734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9289__auto__);
});})(__9849,c__9287__auto___9861,G__9680_9850,n__7584__auto___9848,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__9870 = (__9849 + (1));
__9849 = G__9870;
continue;
} else {
}
break;
}

var c__9287__auto___9871 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9287__auto___9871,jobs,results,process,async){
return (function (){
var f__9288__auto__ = (function (){var switch__9175__auto__ = ((function (c__9287__auto___9871,jobs,results,process,async){
return (function (state_9756){
var state_val_9757 = (state_9756[(1)]);
if((state_val_9757 === (1))){
var state_9756__$1 = state_9756;
var statearr_9758_9872 = state_9756__$1;
(statearr_9758_9872[(2)] = null);

(statearr_9758_9872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9757 === (2))){
var state_9756__$1 = state_9756;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9756__$1,(4),from);
} else {
if((state_val_9757 === (3))){
var inst_9754 = (state_9756[(2)]);
var state_9756__$1 = state_9756;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9756__$1,inst_9754);
} else {
if((state_val_9757 === (4))){
var inst_9737 = (state_9756[(7)]);
var inst_9737__$1 = (state_9756[(2)]);
var inst_9738 = (inst_9737__$1 == null);
var state_9756__$1 = (function (){var statearr_9759 = state_9756;
(statearr_9759[(7)] = inst_9737__$1);

return statearr_9759;
})();
if(cljs.core.truth_(inst_9738)){
var statearr_9760_9873 = state_9756__$1;
(statearr_9760_9873[(1)] = (5));

} else {
var statearr_9761_9874 = state_9756__$1;
(statearr_9761_9874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9757 === (5))){
var inst_9740 = cljs.core.async.close_BANG_.call(null,jobs);
var state_9756__$1 = state_9756;
var statearr_9762_9875 = state_9756__$1;
(statearr_9762_9875[(2)] = inst_9740);

(statearr_9762_9875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9757 === (6))){
var inst_9742 = (state_9756[(8)]);
var inst_9737 = (state_9756[(7)]);
var inst_9742__$1 = cljs.core.async.chan.call(null,(1));
var inst_9743 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9744 = [inst_9737,inst_9742__$1];
var inst_9745 = (new cljs.core.PersistentVector(null,2,(5),inst_9743,inst_9744,null));
var state_9756__$1 = (function (){var statearr_9763 = state_9756;
(statearr_9763[(8)] = inst_9742__$1);

return statearr_9763;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9756__$1,(8),jobs,inst_9745);
} else {
if((state_val_9757 === (7))){
var inst_9752 = (state_9756[(2)]);
var state_9756__$1 = state_9756;
var statearr_9764_9876 = state_9756__$1;
(statearr_9764_9876[(2)] = inst_9752);

(statearr_9764_9876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9757 === (8))){
var inst_9742 = (state_9756[(8)]);
var inst_9747 = (state_9756[(2)]);
var state_9756__$1 = (function (){var statearr_9765 = state_9756;
(statearr_9765[(9)] = inst_9747);

return statearr_9765;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9756__$1,(9),results,inst_9742);
} else {
if((state_val_9757 === (9))){
var inst_9749 = (state_9756[(2)]);
var state_9756__$1 = (function (){var statearr_9766 = state_9756;
(statearr_9766[(10)] = inst_9749);

return statearr_9766;
})();
var statearr_9767_9877 = state_9756__$1;
(statearr_9767_9877[(2)] = null);

(statearr_9767_9877[(1)] = (2));


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
});})(c__9287__auto___9871,jobs,results,process,async))
;
return ((function (switch__9175__auto__,c__9287__auto___9871,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9176__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9176__auto____0 = (function (){
var statearr_9771 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9771[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9176__auto__);

(statearr_9771[(1)] = (1));

return statearr_9771;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9176__auto____1 = (function (state_9756){
while(true){
var ret_value__9177__auto__ = (function (){try{while(true){
var result__9178__auto__ = switch__9175__auto__.call(null,state_9756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9178__auto__;
}
break;
}
}catch (e9772){if((e9772 instanceof Object)){
var ex__9179__auto__ = e9772;
var statearr_9773_9878 = state_9756;
(statearr_9773_9878[(5)] = ex__9179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9879 = state_9756;
state_9756 = G__9879;
continue;
} else {
return ret_value__9177__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9176__auto__ = function(state_9756){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9176__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9176__auto____1.call(this,state_9756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9176__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9176__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9176__auto__;
})()
;})(switch__9175__auto__,c__9287__auto___9871,jobs,results,process,async))
})();
var state__9289__auto__ = (function (){var statearr_9774 = f__9288__auto__.call(null);
(statearr_9774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9287__auto___9871);

return statearr_9774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9289__auto__);
});})(c__9287__auto___9871,jobs,results,process,async))
);


var c__9287__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9287__auto__,jobs,results,process,async){
return (function (){
var f__9288__auto__ = (function (){var switch__9175__auto__ = ((function (c__9287__auto__,jobs,results,process,async){
return (function (state_9812){
var state_val_9813 = (state_9812[(1)]);
if((state_val_9813 === (7))){
var inst_9808 = (state_9812[(2)]);
var state_9812__$1 = state_9812;
var statearr_9814_9880 = state_9812__$1;
(statearr_9814_9880[(2)] = inst_9808);

(statearr_9814_9880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9813 === (20))){
var state_9812__$1 = state_9812;
var statearr_9815_9881 = state_9812__$1;
(statearr_9815_9881[(2)] = null);

(statearr_9815_9881[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9813 === (1))){
var state_9812__$1 = state_9812;
var statearr_9816_9882 = state_9812__$1;
(statearr_9816_9882[(2)] = null);

(statearr_9816_9882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9813 === (4))){
var inst_9777 = (state_9812[(7)]);
var inst_9777__$1 = (state_9812[(2)]);
var inst_9778 = (inst_9777__$1 == null);
var state_9812__$1 = (function (){var statearr_9817 = state_9812;
(statearr_9817[(7)] = inst_9777__$1);

return statearr_9817;
})();
if(cljs.core.truth_(inst_9778)){
var statearr_9818_9883 = state_9812__$1;
(statearr_9818_9883[(1)] = (5));

} else {
var statearr_9819_9884 = state_9812__$1;
(statearr_9819_9884[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9813 === (15))){
var inst_9790 = (state_9812[(8)]);
var state_9812__$1 = state_9812;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9812__$1,(18),to,inst_9790);
} else {
if((state_val_9813 === (21))){
var inst_9803 = (state_9812[(2)]);
var state_9812__$1 = state_9812;
var statearr_9820_9885 = state_9812__$1;
(statearr_9820_9885[(2)] = inst_9803);

(statearr_9820_9885[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9813 === (13))){
var inst_9805 = (state_9812[(2)]);
var state_9812__$1 = (function (){var statearr_9821 = state_9812;
(statearr_9821[(9)] = inst_9805);

return statearr_9821;
})();
var statearr_9822_9886 = state_9812__$1;
(statearr_9822_9886[(2)] = null);

(statearr_9822_9886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9813 === (6))){
var inst_9777 = (state_9812[(7)]);
var state_9812__$1 = state_9812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9812__$1,(11),inst_9777);
} else {
if((state_val_9813 === (17))){
var inst_9798 = (state_9812[(2)]);
var state_9812__$1 = state_9812;
if(cljs.core.truth_(inst_9798)){
var statearr_9823_9887 = state_9812__$1;
(statearr_9823_9887[(1)] = (19));

} else {
var statearr_9824_9888 = state_9812__$1;
(statearr_9824_9888[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9813 === (3))){
var inst_9810 = (state_9812[(2)]);
var state_9812__$1 = state_9812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9812__$1,inst_9810);
} else {
if((state_val_9813 === (12))){
var inst_9787 = (state_9812[(10)]);
var state_9812__$1 = state_9812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9812__$1,(14),inst_9787);
} else {
if((state_val_9813 === (2))){
var state_9812__$1 = state_9812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9812__$1,(4),results);
} else {
if((state_val_9813 === (19))){
var state_9812__$1 = state_9812;
var statearr_9825_9889 = state_9812__$1;
(statearr_9825_9889[(2)] = null);

(statearr_9825_9889[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9813 === (11))){
var inst_9787 = (state_9812[(2)]);
var state_9812__$1 = (function (){var statearr_9826 = state_9812;
(statearr_9826[(10)] = inst_9787);

return statearr_9826;
})();
var statearr_9827_9890 = state_9812__$1;
(statearr_9827_9890[(2)] = null);

(statearr_9827_9890[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9813 === (9))){
var state_9812__$1 = state_9812;
var statearr_9828_9891 = state_9812__$1;
(statearr_9828_9891[(2)] = null);

(statearr_9828_9891[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9813 === (5))){
var state_9812__$1 = state_9812;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9829_9892 = state_9812__$1;
(statearr_9829_9892[(1)] = (8));

} else {
var statearr_9830_9893 = state_9812__$1;
(statearr_9830_9893[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9813 === (14))){
var inst_9790 = (state_9812[(8)]);
var inst_9792 = (state_9812[(11)]);
var inst_9790__$1 = (state_9812[(2)]);
var inst_9791 = (inst_9790__$1 == null);
var inst_9792__$1 = cljs.core.not.call(null,inst_9791);
var state_9812__$1 = (function (){var statearr_9831 = state_9812;
(statearr_9831[(8)] = inst_9790__$1);

(statearr_9831[(11)] = inst_9792__$1);

return statearr_9831;
})();
if(inst_9792__$1){
var statearr_9832_9894 = state_9812__$1;
(statearr_9832_9894[(1)] = (15));

} else {
var statearr_9833_9895 = state_9812__$1;
(statearr_9833_9895[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9813 === (16))){
var inst_9792 = (state_9812[(11)]);
var state_9812__$1 = state_9812;
var statearr_9834_9896 = state_9812__$1;
(statearr_9834_9896[(2)] = inst_9792);

(statearr_9834_9896[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9813 === (10))){
var inst_9784 = (state_9812[(2)]);
var state_9812__$1 = state_9812;
var statearr_9835_9897 = state_9812__$1;
(statearr_9835_9897[(2)] = inst_9784);

(statearr_9835_9897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9813 === (18))){
var inst_9795 = (state_9812[(2)]);
var state_9812__$1 = state_9812;
var statearr_9836_9898 = state_9812__$1;
(statearr_9836_9898[(2)] = inst_9795);

(statearr_9836_9898[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9813 === (8))){
var inst_9781 = cljs.core.async.close_BANG_.call(null,to);
var state_9812__$1 = state_9812;
var statearr_9837_9899 = state_9812__$1;
(statearr_9837_9899[(2)] = inst_9781);

(statearr_9837_9899[(1)] = (10));


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
});})(c__9287__auto__,jobs,results,process,async))
;
return ((function (switch__9175__auto__,c__9287__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9176__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9176__auto____0 = (function (){
var statearr_9841 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9841[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9176__auto__);

(statearr_9841[(1)] = (1));

return statearr_9841;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9176__auto____1 = (function (state_9812){
while(true){
var ret_value__9177__auto__ = (function (){try{while(true){
var result__9178__auto__ = switch__9175__auto__.call(null,state_9812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9178__auto__;
}
break;
}
}catch (e9842){if((e9842 instanceof Object)){
var ex__9179__auto__ = e9842;
var statearr_9843_9900 = state_9812;
(statearr_9843_9900[(5)] = ex__9179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9901 = state_9812;
state_9812 = G__9901;
continue;
} else {
return ret_value__9177__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9176__auto__ = function(state_9812){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9176__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9176__auto____1.call(this,state_9812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9176__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9176__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9176__auto__;
})()
;})(switch__9175__auto__,c__9287__auto__,jobs,results,process,async))
})();
var state__9289__auto__ = (function (){var statearr_9844 = f__9288__auto__.call(null);
(statearr_9844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9287__auto__);

return statearr_9844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9289__auto__);
});})(c__9287__auto__,jobs,results,process,async))
);

return c__9287__auto__;
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
var args9902 = [];
var len__7774__auto___9905 = arguments.length;
var i__7775__auto___9906 = (0);
while(true){
if((i__7775__auto___9906 < len__7774__auto___9905)){
args9902.push((arguments[i__7775__auto___9906]));

var G__9907 = (i__7775__auto___9906 + (1));
i__7775__auto___9906 = G__9907;
continue;
} else {
}
break;
}

var G__9904 = args9902.length;
switch (G__9904) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9902.length)].join('')));

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
var args9909 = [];
var len__7774__auto___9912 = arguments.length;
var i__7775__auto___9913 = (0);
while(true){
if((i__7775__auto___9913 < len__7774__auto___9912)){
args9909.push((arguments[i__7775__auto___9913]));

var G__9914 = (i__7775__auto___9913 + (1));
i__7775__auto___9913 = G__9914;
continue;
} else {
}
break;
}

var G__9911 = args9909.length;
switch (G__9911) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9909.length)].join('')));

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
var args9916 = [];
var len__7774__auto___9969 = arguments.length;
var i__7775__auto___9970 = (0);
while(true){
if((i__7775__auto___9970 < len__7774__auto___9969)){
args9916.push((arguments[i__7775__auto___9970]));

var G__9971 = (i__7775__auto___9970 + (1));
i__7775__auto___9970 = G__9971;
continue;
} else {
}
break;
}

var G__9918 = args9916.length;
switch (G__9918) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9916.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__9287__auto___9973 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9287__auto___9973,tc,fc){
return (function (){
var f__9288__auto__ = (function (){var switch__9175__auto__ = ((function (c__9287__auto___9973,tc,fc){
return (function (state_9944){
var state_val_9945 = (state_9944[(1)]);
if((state_val_9945 === (7))){
var inst_9940 = (state_9944[(2)]);
var state_9944__$1 = state_9944;
var statearr_9946_9974 = state_9944__$1;
(statearr_9946_9974[(2)] = inst_9940);

(statearr_9946_9974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9945 === (1))){
var state_9944__$1 = state_9944;
var statearr_9947_9975 = state_9944__$1;
(statearr_9947_9975[(2)] = null);

(statearr_9947_9975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9945 === (4))){
var inst_9921 = (state_9944[(7)]);
var inst_9921__$1 = (state_9944[(2)]);
var inst_9922 = (inst_9921__$1 == null);
var state_9944__$1 = (function (){var statearr_9948 = state_9944;
(statearr_9948[(7)] = inst_9921__$1);

return statearr_9948;
})();
if(cljs.core.truth_(inst_9922)){
var statearr_9949_9976 = state_9944__$1;
(statearr_9949_9976[(1)] = (5));

} else {
var statearr_9950_9977 = state_9944__$1;
(statearr_9950_9977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9945 === (13))){
var state_9944__$1 = state_9944;
var statearr_9951_9978 = state_9944__$1;
(statearr_9951_9978[(2)] = null);

(statearr_9951_9978[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9945 === (6))){
var inst_9921 = (state_9944[(7)]);
var inst_9927 = p.call(null,inst_9921);
var state_9944__$1 = state_9944;
if(cljs.core.truth_(inst_9927)){
var statearr_9952_9979 = state_9944__$1;
(statearr_9952_9979[(1)] = (9));

} else {
var statearr_9953_9980 = state_9944__$1;
(statearr_9953_9980[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9945 === (3))){
var inst_9942 = (state_9944[(2)]);
var state_9944__$1 = state_9944;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9944__$1,inst_9942);
} else {
if((state_val_9945 === (12))){
var state_9944__$1 = state_9944;
var statearr_9954_9981 = state_9944__$1;
(statearr_9954_9981[(2)] = null);

(statearr_9954_9981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9945 === (2))){
var state_9944__$1 = state_9944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9944__$1,(4),ch);
} else {
if((state_val_9945 === (11))){
var inst_9921 = (state_9944[(7)]);
var inst_9931 = (state_9944[(2)]);
var state_9944__$1 = state_9944;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9944__$1,(8),inst_9931,inst_9921);
} else {
if((state_val_9945 === (9))){
var state_9944__$1 = state_9944;
var statearr_9955_9982 = state_9944__$1;
(statearr_9955_9982[(2)] = tc);

(statearr_9955_9982[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9945 === (5))){
var inst_9924 = cljs.core.async.close_BANG_.call(null,tc);
var inst_9925 = cljs.core.async.close_BANG_.call(null,fc);
var state_9944__$1 = (function (){var statearr_9956 = state_9944;
(statearr_9956[(8)] = inst_9924);

return statearr_9956;
})();
var statearr_9957_9983 = state_9944__$1;
(statearr_9957_9983[(2)] = inst_9925);

(statearr_9957_9983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9945 === (14))){
var inst_9938 = (state_9944[(2)]);
var state_9944__$1 = state_9944;
var statearr_9958_9984 = state_9944__$1;
(statearr_9958_9984[(2)] = inst_9938);

(statearr_9958_9984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9945 === (10))){
var state_9944__$1 = state_9944;
var statearr_9959_9985 = state_9944__$1;
(statearr_9959_9985[(2)] = fc);

(statearr_9959_9985[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9945 === (8))){
var inst_9933 = (state_9944[(2)]);
var state_9944__$1 = state_9944;
if(cljs.core.truth_(inst_9933)){
var statearr_9960_9986 = state_9944__$1;
(statearr_9960_9986[(1)] = (12));

} else {
var statearr_9961_9987 = state_9944__$1;
(statearr_9961_9987[(1)] = (13));

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
});})(c__9287__auto___9973,tc,fc))
;
return ((function (switch__9175__auto__,c__9287__auto___9973,tc,fc){
return (function() {
var cljs$core$async$state_machine__9176__auto__ = null;
var cljs$core$async$state_machine__9176__auto____0 = (function (){
var statearr_9965 = [null,null,null,null,null,null,null,null,null];
(statearr_9965[(0)] = cljs$core$async$state_machine__9176__auto__);

(statearr_9965[(1)] = (1));

return statearr_9965;
});
var cljs$core$async$state_machine__9176__auto____1 = (function (state_9944){
while(true){
var ret_value__9177__auto__ = (function (){try{while(true){
var result__9178__auto__ = switch__9175__auto__.call(null,state_9944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9178__auto__;
}
break;
}
}catch (e9966){if((e9966 instanceof Object)){
var ex__9179__auto__ = e9966;
var statearr_9967_9988 = state_9944;
(statearr_9967_9988[(5)] = ex__9179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9989 = state_9944;
state_9944 = G__9989;
continue;
} else {
return ret_value__9177__auto__;
}
break;
}
});
cljs$core$async$state_machine__9176__auto__ = function(state_9944){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9176__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9176__auto____1.call(this,state_9944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9176__auto____0;
cljs$core$async$state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9176__auto____1;
return cljs$core$async$state_machine__9176__auto__;
})()
;})(switch__9175__auto__,c__9287__auto___9973,tc,fc))
})();
var state__9289__auto__ = (function (){var statearr_9968 = f__9288__auto__.call(null);
(statearr_9968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9287__auto___9973);

return statearr_9968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9289__auto__);
});})(c__9287__auto___9973,tc,fc))
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
var c__9287__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9287__auto__){
return (function (){
var f__9288__auto__ = (function (){var switch__9175__auto__ = ((function (c__9287__auto__){
return (function (state_10053){
var state_val_10054 = (state_10053[(1)]);
if((state_val_10054 === (7))){
var inst_10049 = (state_10053[(2)]);
var state_10053__$1 = state_10053;
var statearr_10055_10076 = state_10053__$1;
(statearr_10055_10076[(2)] = inst_10049);

(statearr_10055_10076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10054 === (1))){
var inst_10033 = init;
var state_10053__$1 = (function (){var statearr_10056 = state_10053;
(statearr_10056[(7)] = inst_10033);

return statearr_10056;
})();
var statearr_10057_10077 = state_10053__$1;
(statearr_10057_10077[(2)] = null);

(statearr_10057_10077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10054 === (4))){
var inst_10036 = (state_10053[(8)]);
var inst_10036__$1 = (state_10053[(2)]);
var inst_10037 = (inst_10036__$1 == null);
var state_10053__$1 = (function (){var statearr_10058 = state_10053;
(statearr_10058[(8)] = inst_10036__$1);

return statearr_10058;
})();
if(cljs.core.truth_(inst_10037)){
var statearr_10059_10078 = state_10053__$1;
(statearr_10059_10078[(1)] = (5));

} else {
var statearr_10060_10079 = state_10053__$1;
(statearr_10060_10079[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10054 === (6))){
var inst_10040 = (state_10053[(9)]);
var inst_10033 = (state_10053[(7)]);
var inst_10036 = (state_10053[(8)]);
var inst_10040__$1 = f.call(null,inst_10033,inst_10036);
var inst_10041 = cljs.core.reduced_QMARK_.call(null,inst_10040__$1);
var state_10053__$1 = (function (){var statearr_10061 = state_10053;
(statearr_10061[(9)] = inst_10040__$1);

return statearr_10061;
})();
if(inst_10041){
var statearr_10062_10080 = state_10053__$1;
(statearr_10062_10080[(1)] = (8));

} else {
var statearr_10063_10081 = state_10053__$1;
(statearr_10063_10081[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10054 === (3))){
var inst_10051 = (state_10053[(2)]);
var state_10053__$1 = state_10053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10053__$1,inst_10051);
} else {
if((state_val_10054 === (2))){
var state_10053__$1 = state_10053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10053__$1,(4),ch);
} else {
if((state_val_10054 === (9))){
var inst_10040 = (state_10053[(9)]);
var inst_10033 = inst_10040;
var state_10053__$1 = (function (){var statearr_10064 = state_10053;
(statearr_10064[(7)] = inst_10033);

return statearr_10064;
})();
var statearr_10065_10082 = state_10053__$1;
(statearr_10065_10082[(2)] = null);

(statearr_10065_10082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10054 === (5))){
var inst_10033 = (state_10053[(7)]);
var state_10053__$1 = state_10053;
var statearr_10066_10083 = state_10053__$1;
(statearr_10066_10083[(2)] = inst_10033);

(statearr_10066_10083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10054 === (10))){
var inst_10047 = (state_10053[(2)]);
var state_10053__$1 = state_10053;
var statearr_10067_10084 = state_10053__$1;
(statearr_10067_10084[(2)] = inst_10047);

(statearr_10067_10084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10054 === (8))){
var inst_10040 = (state_10053[(9)]);
var inst_10043 = cljs.core.deref.call(null,inst_10040);
var state_10053__$1 = state_10053;
var statearr_10068_10085 = state_10053__$1;
(statearr_10068_10085[(2)] = inst_10043);

(statearr_10068_10085[(1)] = (10));


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
});})(c__9287__auto__))
;
return ((function (switch__9175__auto__,c__9287__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__9176__auto__ = null;
var cljs$core$async$reduce_$_state_machine__9176__auto____0 = (function (){
var statearr_10072 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10072[(0)] = cljs$core$async$reduce_$_state_machine__9176__auto__);

(statearr_10072[(1)] = (1));

return statearr_10072;
});
var cljs$core$async$reduce_$_state_machine__9176__auto____1 = (function (state_10053){
while(true){
var ret_value__9177__auto__ = (function (){try{while(true){
var result__9178__auto__ = switch__9175__auto__.call(null,state_10053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9178__auto__;
}
break;
}
}catch (e10073){if((e10073 instanceof Object)){
var ex__9179__auto__ = e10073;
var statearr_10074_10086 = state_10053;
(statearr_10074_10086[(5)] = ex__9179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10087 = state_10053;
state_10053 = G__10087;
continue;
} else {
return ret_value__9177__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__9176__auto__ = function(state_10053){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__9176__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__9176__auto____1.call(this,state_10053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__9176__auto____0;
cljs$core$async$reduce_$_state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__9176__auto____1;
return cljs$core$async$reduce_$_state_machine__9176__auto__;
})()
;})(switch__9175__auto__,c__9287__auto__))
})();
var state__9289__auto__ = (function (){var statearr_10075 = f__9288__auto__.call(null);
(statearr_10075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9287__auto__);

return statearr_10075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9289__auto__);
});})(c__9287__auto__))
);

return c__9287__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__9287__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9287__auto__,f__$1){
return (function (){
var f__9288__auto__ = (function (){var switch__9175__auto__ = ((function (c__9287__auto__,f__$1){
return (function (state_10107){
var state_val_10108 = (state_10107[(1)]);
if((state_val_10108 === (1))){
var inst_10102 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_10107__$1 = state_10107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10107__$1,(2),inst_10102);
} else {
if((state_val_10108 === (2))){
var inst_10104 = (state_10107[(2)]);
var inst_10105 = f__$1.call(null,inst_10104);
var state_10107__$1 = state_10107;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10107__$1,inst_10105);
} else {
return null;
}
}
});})(c__9287__auto__,f__$1))
;
return ((function (switch__9175__auto__,c__9287__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__9176__auto__ = null;
var cljs$core$async$transduce_$_state_machine__9176__auto____0 = (function (){
var statearr_10112 = [null,null,null,null,null,null,null];
(statearr_10112[(0)] = cljs$core$async$transduce_$_state_machine__9176__auto__);

(statearr_10112[(1)] = (1));

return statearr_10112;
});
var cljs$core$async$transduce_$_state_machine__9176__auto____1 = (function (state_10107){
while(true){
var ret_value__9177__auto__ = (function (){try{while(true){
var result__9178__auto__ = switch__9175__auto__.call(null,state_10107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9178__auto__;
}
break;
}
}catch (e10113){if((e10113 instanceof Object)){
var ex__9179__auto__ = e10113;
var statearr_10114_10116 = state_10107;
(statearr_10114_10116[(5)] = ex__9179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10117 = state_10107;
state_10107 = G__10117;
continue;
} else {
return ret_value__9177__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__9176__auto__ = function(state_10107){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__9176__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__9176__auto____1.call(this,state_10107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__9176__auto____0;
cljs$core$async$transduce_$_state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__9176__auto____1;
return cljs$core$async$transduce_$_state_machine__9176__auto__;
})()
;})(switch__9175__auto__,c__9287__auto__,f__$1))
})();
var state__9289__auto__ = (function (){var statearr_10115 = f__9288__auto__.call(null);
(statearr_10115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9287__auto__);

return statearr_10115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9289__auto__);
});})(c__9287__auto__,f__$1))
);

return c__9287__auto__;
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
var args10118 = [];
var len__7774__auto___10170 = arguments.length;
var i__7775__auto___10171 = (0);
while(true){
if((i__7775__auto___10171 < len__7774__auto___10170)){
args10118.push((arguments[i__7775__auto___10171]));

var G__10172 = (i__7775__auto___10171 + (1));
i__7775__auto___10171 = G__10172;
continue;
} else {
}
break;
}

var G__10120 = args10118.length;
switch (G__10120) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10118.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__9287__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9287__auto__){
return (function (){
var f__9288__auto__ = (function (){var switch__9175__auto__ = ((function (c__9287__auto__){
return (function (state_10145){
var state_val_10146 = (state_10145[(1)]);
if((state_val_10146 === (7))){
var inst_10127 = (state_10145[(2)]);
var state_10145__$1 = state_10145;
var statearr_10147_10174 = state_10145__$1;
(statearr_10147_10174[(2)] = inst_10127);

(statearr_10147_10174[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10146 === (1))){
var inst_10121 = cljs.core.seq.call(null,coll);
var inst_10122 = inst_10121;
var state_10145__$1 = (function (){var statearr_10148 = state_10145;
(statearr_10148[(7)] = inst_10122);

return statearr_10148;
})();
var statearr_10149_10175 = state_10145__$1;
(statearr_10149_10175[(2)] = null);

(statearr_10149_10175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10146 === (4))){
var inst_10122 = (state_10145[(7)]);
var inst_10125 = cljs.core.first.call(null,inst_10122);
var state_10145__$1 = state_10145;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10145__$1,(7),ch,inst_10125);
} else {
if((state_val_10146 === (13))){
var inst_10139 = (state_10145[(2)]);
var state_10145__$1 = state_10145;
var statearr_10150_10176 = state_10145__$1;
(statearr_10150_10176[(2)] = inst_10139);

(statearr_10150_10176[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10146 === (6))){
var inst_10130 = (state_10145[(2)]);
var state_10145__$1 = state_10145;
if(cljs.core.truth_(inst_10130)){
var statearr_10151_10177 = state_10145__$1;
(statearr_10151_10177[(1)] = (8));

} else {
var statearr_10152_10178 = state_10145__$1;
(statearr_10152_10178[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10146 === (3))){
var inst_10143 = (state_10145[(2)]);
var state_10145__$1 = state_10145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10145__$1,inst_10143);
} else {
if((state_val_10146 === (12))){
var state_10145__$1 = state_10145;
var statearr_10153_10179 = state_10145__$1;
(statearr_10153_10179[(2)] = null);

(statearr_10153_10179[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10146 === (2))){
var inst_10122 = (state_10145[(7)]);
var state_10145__$1 = state_10145;
if(cljs.core.truth_(inst_10122)){
var statearr_10154_10180 = state_10145__$1;
(statearr_10154_10180[(1)] = (4));

} else {
var statearr_10155_10181 = state_10145__$1;
(statearr_10155_10181[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10146 === (11))){
var inst_10136 = cljs.core.async.close_BANG_.call(null,ch);
var state_10145__$1 = state_10145;
var statearr_10156_10182 = state_10145__$1;
(statearr_10156_10182[(2)] = inst_10136);

(statearr_10156_10182[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10146 === (9))){
var state_10145__$1 = state_10145;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10157_10183 = state_10145__$1;
(statearr_10157_10183[(1)] = (11));

} else {
var statearr_10158_10184 = state_10145__$1;
(statearr_10158_10184[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10146 === (5))){
var inst_10122 = (state_10145[(7)]);
var state_10145__$1 = state_10145;
var statearr_10159_10185 = state_10145__$1;
(statearr_10159_10185[(2)] = inst_10122);

(statearr_10159_10185[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10146 === (10))){
var inst_10141 = (state_10145[(2)]);
var state_10145__$1 = state_10145;
var statearr_10160_10186 = state_10145__$1;
(statearr_10160_10186[(2)] = inst_10141);

(statearr_10160_10186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10146 === (8))){
var inst_10122 = (state_10145[(7)]);
var inst_10132 = cljs.core.next.call(null,inst_10122);
var inst_10122__$1 = inst_10132;
var state_10145__$1 = (function (){var statearr_10161 = state_10145;
(statearr_10161[(7)] = inst_10122__$1);

return statearr_10161;
})();
var statearr_10162_10187 = state_10145__$1;
(statearr_10162_10187[(2)] = null);

(statearr_10162_10187[(1)] = (2));


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
});})(c__9287__auto__))
;
return ((function (switch__9175__auto__,c__9287__auto__){
return (function() {
var cljs$core$async$state_machine__9176__auto__ = null;
var cljs$core$async$state_machine__9176__auto____0 = (function (){
var statearr_10166 = [null,null,null,null,null,null,null,null];
(statearr_10166[(0)] = cljs$core$async$state_machine__9176__auto__);

(statearr_10166[(1)] = (1));

return statearr_10166;
});
var cljs$core$async$state_machine__9176__auto____1 = (function (state_10145){
while(true){
var ret_value__9177__auto__ = (function (){try{while(true){
var result__9178__auto__ = switch__9175__auto__.call(null,state_10145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9178__auto__;
}
break;
}
}catch (e10167){if((e10167 instanceof Object)){
var ex__9179__auto__ = e10167;
var statearr_10168_10188 = state_10145;
(statearr_10168_10188[(5)] = ex__9179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10189 = state_10145;
state_10145 = G__10189;
continue;
} else {
return ret_value__9177__auto__;
}
break;
}
});
cljs$core$async$state_machine__9176__auto__ = function(state_10145){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9176__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9176__auto____1.call(this,state_10145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9176__auto____0;
cljs$core$async$state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9176__auto____1;
return cljs$core$async$state_machine__9176__auto__;
})()
;})(switch__9175__auto__,c__9287__auto__))
})();
var state__9289__auto__ = (function (){var statearr_10169 = f__9288__auto__.call(null);
(statearr_10169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9287__auto__);

return statearr_10169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9289__auto__);
});})(c__9287__auto__))
);

return c__9287__auto__;
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
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__7329__auto__ = (((_ == null))?null:_);
var m__7330__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7329__auto__)]);
if(!((m__7330__auto__ == null))){
return m__7330__auto__.call(null,_);
} else {
var m__7330__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7330__auto____$1 == null))){
return m__7330__auto____$1.call(null,_);
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
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__7329__auto__ = (((m == null))?null:m);
var m__7330__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7329__auto__)]);
if(!((m__7330__auto__ == null))){
return m__7330__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__7330__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7330__auto____$1 == null))){
return m__7330__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__7329__auto__ = (((m == null))?null:m);
var m__7330__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7329__auto__)]);
if(!((m__7330__auto__ == null))){
return m__7330__auto__.call(null,m,ch);
} else {
var m__7330__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7330__auto____$1 == null))){
return m__7330__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__7329__auto__ = (((m == null))?null:m);
var m__7330__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7329__auto__)]);
if(!((m__7330__auto__ == null))){
return m__7330__auto__.call(null,m);
} else {
var m__7330__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7330__auto____$1 == null))){
return m__7330__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async10415 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10415 = (function (ch,cs,meta10416){
this.ch = ch;
this.cs = cs;
this.meta10416 = meta10416;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10415.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10417,meta10416__$1){
var self__ = this;
var _10417__$1 = this;
return (new cljs.core.async.t_cljs$core$async10415(self__.ch,self__.cs,meta10416__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async10415.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10417){
var self__ = this;
var _10417__$1 = this;
return self__.meta10416;
});})(cs))
;

cljs.core.async.t_cljs$core$async10415.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10415.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async10415.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10415.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10415.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10415.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10415.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta10416","meta10416",-159727013,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async10415.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10415.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10415";

cljs.core.async.t_cljs$core$async10415.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7272__auto__,writer__7273__auto__,opt__7274__auto__){
return cljs.core._write.call(null,writer__7273__auto__,"cljs.core.async/t_cljs$core$async10415");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async10415 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async10415(ch__$1,cs__$1,meta10416){
return (new cljs.core.async.t_cljs$core$async10415(ch__$1,cs__$1,meta10416));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async10415(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__9287__auto___10640 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9287__auto___10640,cs,m,dchan,dctr,done){
return (function (){
var f__9288__auto__ = (function (){var switch__9175__auto__ = ((function (c__9287__auto___10640,cs,m,dchan,dctr,done){
return (function (state_10552){
var state_val_10553 = (state_10552[(1)]);
if((state_val_10553 === (7))){
var inst_10548 = (state_10552[(2)]);
var state_10552__$1 = state_10552;
var statearr_10554_10641 = state_10552__$1;
(statearr_10554_10641[(2)] = inst_10548);

(statearr_10554_10641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (20))){
var inst_10451 = (state_10552[(7)]);
var inst_10463 = cljs.core.first.call(null,inst_10451);
var inst_10464 = cljs.core.nth.call(null,inst_10463,(0),null);
var inst_10465 = cljs.core.nth.call(null,inst_10463,(1),null);
var state_10552__$1 = (function (){var statearr_10555 = state_10552;
(statearr_10555[(8)] = inst_10464);

return statearr_10555;
})();
if(cljs.core.truth_(inst_10465)){
var statearr_10556_10642 = state_10552__$1;
(statearr_10556_10642[(1)] = (22));

} else {
var statearr_10557_10643 = state_10552__$1;
(statearr_10557_10643[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (27))){
var inst_10500 = (state_10552[(9)]);
var inst_10420 = (state_10552[(10)]);
var inst_10495 = (state_10552[(11)]);
var inst_10493 = (state_10552[(12)]);
var inst_10500__$1 = cljs.core._nth.call(null,inst_10493,inst_10495);
var inst_10501 = cljs.core.async.put_BANG_.call(null,inst_10500__$1,inst_10420,done);
var state_10552__$1 = (function (){var statearr_10558 = state_10552;
(statearr_10558[(9)] = inst_10500__$1);

return statearr_10558;
})();
if(cljs.core.truth_(inst_10501)){
var statearr_10559_10644 = state_10552__$1;
(statearr_10559_10644[(1)] = (30));

} else {
var statearr_10560_10645 = state_10552__$1;
(statearr_10560_10645[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (1))){
var state_10552__$1 = state_10552;
var statearr_10561_10646 = state_10552__$1;
(statearr_10561_10646[(2)] = null);

(statearr_10561_10646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (24))){
var inst_10451 = (state_10552[(7)]);
var inst_10470 = (state_10552[(2)]);
var inst_10471 = cljs.core.next.call(null,inst_10451);
var inst_10429 = inst_10471;
var inst_10430 = null;
var inst_10431 = (0);
var inst_10432 = (0);
var state_10552__$1 = (function (){var statearr_10562 = state_10552;
(statearr_10562[(13)] = inst_10470);

(statearr_10562[(14)] = inst_10429);

(statearr_10562[(15)] = inst_10431);

(statearr_10562[(16)] = inst_10432);

(statearr_10562[(17)] = inst_10430);

return statearr_10562;
})();
var statearr_10563_10647 = state_10552__$1;
(statearr_10563_10647[(2)] = null);

(statearr_10563_10647[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (39))){
var state_10552__$1 = state_10552;
var statearr_10567_10648 = state_10552__$1;
(statearr_10567_10648[(2)] = null);

(statearr_10567_10648[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (4))){
var inst_10420 = (state_10552[(10)]);
var inst_10420__$1 = (state_10552[(2)]);
var inst_10421 = (inst_10420__$1 == null);
var state_10552__$1 = (function (){var statearr_10568 = state_10552;
(statearr_10568[(10)] = inst_10420__$1);

return statearr_10568;
})();
if(cljs.core.truth_(inst_10421)){
var statearr_10569_10649 = state_10552__$1;
(statearr_10569_10649[(1)] = (5));

} else {
var statearr_10570_10650 = state_10552__$1;
(statearr_10570_10650[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (15))){
var inst_10429 = (state_10552[(14)]);
var inst_10431 = (state_10552[(15)]);
var inst_10432 = (state_10552[(16)]);
var inst_10430 = (state_10552[(17)]);
var inst_10447 = (state_10552[(2)]);
var inst_10448 = (inst_10432 + (1));
var tmp10564 = inst_10429;
var tmp10565 = inst_10431;
var tmp10566 = inst_10430;
var inst_10429__$1 = tmp10564;
var inst_10430__$1 = tmp10566;
var inst_10431__$1 = tmp10565;
var inst_10432__$1 = inst_10448;
var state_10552__$1 = (function (){var statearr_10571 = state_10552;
(statearr_10571[(14)] = inst_10429__$1);

(statearr_10571[(18)] = inst_10447);

(statearr_10571[(15)] = inst_10431__$1);

(statearr_10571[(16)] = inst_10432__$1);

(statearr_10571[(17)] = inst_10430__$1);

return statearr_10571;
})();
var statearr_10572_10651 = state_10552__$1;
(statearr_10572_10651[(2)] = null);

(statearr_10572_10651[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (21))){
var inst_10474 = (state_10552[(2)]);
var state_10552__$1 = state_10552;
var statearr_10576_10652 = state_10552__$1;
(statearr_10576_10652[(2)] = inst_10474);

(statearr_10576_10652[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (31))){
var inst_10500 = (state_10552[(9)]);
var inst_10504 = done.call(null,null);
var inst_10505 = cljs.core.async.untap_STAR_.call(null,m,inst_10500);
var state_10552__$1 = (function (){var statearr_10577 = state_10552;
(statearr_10577[(19)] = inst_10504);

return statearr_10577;
})();
var statearr_10578_10653 = state_10552__$1;
(statearr_10578_10653[(2)] = inst_10505);

(statearr_10578_10653[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (32))){
var inst_10494 = (state_10552[(20)]);
var inst_10495 = (state_10552[(11)]);
var inst_10493 = (state_10552[(12)]);
var inst_10492 = (state_10552[(21)]);
var inst_10507 = (state_10552[(2)]);
var inst_10508 = (inst_10495 + (1));
var tmp10573 = inst_10494;
var tmp10574 = inst_10493;
var tmp10575 = inst_10492;
var inst_10492__$1 = tmp10575;
var inst_10493__$1 = tmp10574;
var inst_10494__$1 = tmp10573;
var inst_10495__$1 = inst_10508;
var state_10552__$1 = (function (){var statearr_10579 = state_10552;
(statearr_10579[(20)] = inst_10494__$1);

(statearr_10579[(22)] = inst_10507);

(statearr_10579[(11)] = inst_10495__$1);

(statearr_10579[(12)] = inst_10493__$1);

(statearr_10579[(21)] = inst_10492__$1);

return statearr_10579;
})();
var statearr_10580_10654 = state_10552__$1;
(statearr_10580_10654[(2)] = null);

(statearr_10580_10654[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (40))){
var inst_10520 = (state_10552[(23)]);
var inst_10524 = done.call(null,null);
var inst_10525 = cljs.core.async.untap_STAR_.call(null,m,inst_10520);
var state_10552__$1 = (function (){var statearr_10581 = state_10552;
(statearr_10581[(24)] = inst_10524);

return statearr_10581;
})();
var statearr_10582_10655 = state_10552__$1;
(statearr_10582_10655[(2)] = inst_10525);

(statearr_10582_10655[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (33))){
var inst_10511 = (state_10552[(25)]);
var inst_10513 = cljs.core.chunked_seq_QMARK_.call(null,inst_10511);
var state_10552__$1 = state_10552;
if(inst_10513){
var statearr_10583_10656 = state_10552__$1;
(statearr_10583_10656[(1)] = (36));

} else {
var statearr_10584_10657 = state_10552__$1;
(statearr_10584_10657[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (13))){
var inst_10441 = (state_10552[(26)]);
var inst_10444 = cljs.core.async.close_BANG_.call(null,inst_10441);
var state_10552__$1 = state_10552;
var statearr_10585_10658 = state_10552__$1;
(statearr_10585_10658[(2)] = inst_10444);

(statearr_10585_10658[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (22))){
var inst_10464 = (state_10552[(8)]);
var inst_10467 = cljs.core.async.close_BANG_.call(null,inst_10464);
var state_10552__$1 = state_10552;
var statearr_10586_10659 = state_10552__$1;
(statearr_10586_10659[(2)] = inst_10467);

(statearr_10586_10659[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (36))){
var inst_10511 = (state_10552[(25)]);
var inst_10515 = cljs.core.chunk_first.call(null,inst_10511);
var inst_10516 = cljs.core.chunk_rest.call(null,inst_10511);
var inst_10517 = cljs.core.count.call(null,inst_10515);
var inst_10492 = inst_10516;
var inst_10493 = inst_10515;
var inst_10494 = inst_10517;
var inst_10495 = (0);
var state_10552__$1 = (function (){var statearr_10587 = state_10552;
(statearr_10587[(20)] = inst_10494);

(statearr_10587[(11)] = inst_10495);

(statearr_10587[(12)] = inst_10493);

(statearr_10587[(21)] = inst_10492);

return statearr_10587;
})();
var statearr_10588_10660 = state_10552__$1;
(statearr_10588_10660[(2)] = null);

(statearr_10588_10660[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (41))){
var inst_10511 = (state_10552[(25)]);
var inst_10527 = (state_10552[(2)]);
var inst_10528 = cljs.core.next.call(null,inst_10511);
var inst_10492 = inst_10528;
var inst_10493 = null;
var inst_10494 = (0);
var inst_10495 = (0);
var state_10552__$1 = (function (){var statearr_10589 = state_10552;
(statearr_10589[(20)] = inst_10494);

(statearr_10589[(11)] = inst_10495);

(statearr_10589[(12)] = inst_10493);

(statearr_10589[(21)] = inst_10492);

(statearr_10589[(27)] = inst_10527);

return statearr_10589;
})();
var statearr_10590_10661 = state_10552__$1;
(statearr_10590_10661[(2)] = null);

(statearr_10590_10661[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (43))){
var state_10552__$1 = state_10552;
var statearr_10591_10662 = state_10552__$1;
(statearr_10591_10662[(2)] = null);

(statearr_10591_10662[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (29))){
var inst_10536 = (state_10552[(2)]);
var state_10552__$1 = state_10552;
var statearr_10592_10663 = state_10552__$1;
(statearr_10592_10663[(2)] = inst_10536);

(statearr_10592_10663[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (44))){
var inst_10545 = (state_10552[(2)]);
var state_10552__$1 = (function (){var statearr_10593 = state_10552;
(statearr_10593[(28)] = inst_10545);

return statearr_10593;
})();
var statearr_10594_10664 = state_10552__$1;
(statearr_10594_10664[(2)] = null);

(statearr_10594_10664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (6))){
var inst_10484 = (state_10552[(29)]);
var inst_10483 = cljs.core.deref.call(null,cs);
var inst_10484__$1 = cljs.core.keys.call(null,inst_10483);
var inst_10485 = cljs.core.count.call(null,inst_10484__$1);
var inst_10486 = cljs.core.reset_BANG_.call(null,dctr,inst_10485);
var inst_10491 = cljs.core.seq.call(null,inst_10484__$1);
var inst_10492 = inst_10491;
var inst_10493 = null;
var inst_10494 = (0);
var inst_10495 = (0);
var state_10552__$1 = (function (){var statearr_10595 = state_10552;
(statearr_10595[(20)] = inst_10494);

(statearr_10595[(11)] = inst_10495);

(statearr_10595[(12)] = inst_10493);

(statearr_10595[(21)] = inst_10492);

(statearr_10595[(29)] = inst_10484__$1);

(statearr_10595[(30)] = inst_10486);

return statearr_10595;
})();
var statearr_10596_10665 = state_10552__$1;
(statearr_10596_10665[(2)] = null);

(statearr_10596_10665[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (28))){
var inst_10492 = (state_10552[(21)]);
var inst_10511 = (state_10552[(25)]);
var inst_10511__$1 = cljs.core.seq.call(null,inst_10492);
var state_10552__$1 = (function (){var statearr_10597 = state_10552;
(statearr_10597[(25)] = inst_10511__$1);

return statearr_10597;
})();
if(inst_10511__$1){
var statearr_10598_10666 = state_10552__$1;
(statearr_10598_10666[(1)] = (33));

} else {
var statearr_10599_10667 = state_10552__$1;
(statearr_10599_10667[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (25))){
var inst_10494 = (state_10552[(20)]);
var inst_10495 = (state_10552[(11)]);
var inst_10497 = (inst_10495 < inst_10494);
var inst_10498 = inst_10497;
var state_10552__$1 = state_10552;
if(cljs.core.truth_(inst_10498)){
var statearr_10600_10668 = state_10552__$1;
(statearr_10600_10668[(1)] = (27));

} else {
var statearr_10601_10669 = state_10552__$1;
(statearr_10601_10669[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (34))){
var state_10552__$1 = state_10552;
var statearr_10602_10670 = state_10552__$1;
(statearr_10602_10670[(2)] = null);

(statearr_10602_10670[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (17))){
var state_10552__$1 = state_10552;
var statearr_10603_10671 = state_10552__$1;
(statearr_10603_10671[(2)] = null);

(statearr_10603_10671[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (3))){
var inst_10550 = (state_10552[(2)]);
var state_10552__$1 = state_10552;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10552__$1,inst_10550);
} else {
if((state_val_10553 === (12))){
var inst_10479 = (state_10552[(2)]);
var state_10552__$1 = state_10552;
var statearr_10604_10672 = state_10552__$1;
(statearr_10604_10672[(2)] = inst_10479);

(statearr_10604_10672[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (2))){
var state_10552__$1 = state_10552;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10552__$1,(4),ch);
} else {
if((state_val_10553 === (23))){
var state_10552__$1 = state_10552;
var statearr_10605_10673 = state_10552__$1;
(statearr_10605_10673[(2)] = null);

(statearr_10605_10673[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (35))){
var inst_10534 = (state_10552[(2)]);
var state_10552__$1 = state_10552;
var statearr_10606_10674 = state_10552__$1;
(statearr_10606_10674[(2)] = inst_10534);

(statearr_10606_10674[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (19))){
var inst_10451 = (state_10552[(7)]);
var inst_10455 = cljs.core.chunk_first.call(null,inst_10451);
var inst_10456 = cljs.core.chunk_rest.call(null,inst_10451);
var inst_10457 = cljs.core.count.call(null,inst_10455);
var inst_10429 = inst_10456;
var inst_10430 = inst_10455;
var inst_10431 = inst_10457;
var inst_10432 = (0);
var state_10552__$1 = (function (){var statearr_10607 = state_10552;
(statearr_10607[(14)] = inst_10429);

(statearr_10607[(15)] = inst_10431);

(statearr_10607[(16)] = inst_10432);

(statearr_10607[(17)] = inst_10430);

return statearr_10607;
})();
var statearr_10608_10675 = state_10552__$1;
(statearr_10608_10675[(2)] = null);

(statearr_10608_10675[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (11))){
var inst_10429 = (state_10552[(14)]);
var inst_10451 = (state_10552[(7)]);
var inst_10451__$1 = cljs.core.seq.call(null,inst_10429);
var state_10552__$1 = (function (){var statearr_10609 = state_10552;
(statearr_10609[(7)] = inst_10451__$1);

return statearr_10609;
})();
if(inst_10451__$1){
var statearr_10610_10676 = state_10552__$1;
(statearr_10610_10676[(1)] = (16));

} else {
var statearr_10611_10677 = state_10552__$1;
(statearr_10611_10677[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (9))){
var inst_10481 = (state_10552[(2)]);
var state_10552__$1 = state_10552;
var statearr_10612_10678 = state_10552__$1;
(statearr_10612_10678[(2)] = inst_10481);

(statearr_10612_10678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (5))){
var inst_10427 = cljs.core.deref.call(null,cs);
var inst_10428 = cljs.core.seq.call(null,inst_10427);
var inst_10429 = inst_10428;
var inst_10430 = null;
var inst_10431 = (0);
var inst_10432 = (0);
var state_10552__$1 = (function (){var statearr_10613 = state_10552;
(statearr_10613[(14)] = inst_10429);

(statearr_10613[(15)] = inst_10431);

(statearr_10613[(16)] = inst_10432);

(statearr_10613[(17)] = inst_10430);

return statearr_10613;
})();
var statearr_10614_10679 = state_10552__$1;
(statearr_10614_10679[(2)] = null);

(statearr_10614_10679[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (14))){
var state_10552__$1 = state_10552;
var statearr_10615_10680 = state_10552__$1;
(statearr_10615_10680[(2)] = null);

(statearr_10615_10680[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (45))){
var inst_10542 = (state_10552[(2)]);
var state_10552__$1 = state_10552;
var statearr_10616_10681 = state_10552__$1;
(statearr_10616_10681[(2)] = inst_10542);

(statearr_10616_10681[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (26))){
var inst_10484 = (state_10552[(29)]);
var inst_10538 = (state_10552[(2)]);
var inst_10539 = cljs.core.seq.call(null,inst_10484);
var state_10552__$1 = (function (){var statearr_10617 = state_10552;
(statearr_10617[(31)] = inst_10538);

return statearr_10617;
})();
if(inst_10539){
var statearr_10618_10682 = state_10552__$1;
(statearr_10618_10682[(1)] = (42));

} else {
var statearr_10619_10683 = state_10552__$1;
(statearr_10619_10683[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (16))){
var inst_10451 = (state_10552[(7)]);
var inst_10453 = cljs.core.chunked_seq_QMARK_.call(null,inst_10451);
var state_10552__$1 = state_10552;
if(inst_10453){
var statearr_10620_10684 = state_10552__$1;
(statearr_10620_10684[(1)] = (19));

} else {
var statearr_10621_10685 = state_10552__$1;
(statearr_10621_10685[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (38))){
var inst_10531 = (state_10552[(2)]);
var state_10552__$1 = state_10552;
var statearr_10622_10686 = state_10552__$1;
(statearr_10622_10686[(2)] = inst_10531);

(statearr_10622_10686[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (30))){
var state_10552__$1 = state_10552;
var statearr_10623_10687 = state_10552__$1;
(statearr_10623_10687[(2)] = null);

(statearr_10623_10687[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (10))){
var inst_10432 = (state_10552[(16)]);
var inst_10430 = (state_10552[(17)]);
var inst_10440 = cljs.core._nth.call(null,inst_10430,inst_10432);
var inst_10441 = cljs.core.nth.call(null,inst_10440,(0),null);
var inst_10442 = cljs.core.nth.call(null,inst_10440,(1),null);
var state_10552__$1 = (function (){var statearr_10624 = state_10552;
(statearr_10624[(26)] = inst_10441);

return statearr_10624;
})();
if(cljs.core.truth_(inst_10442)){
var statearr_10625_10688 = state_10552__$1;
(statearr_10625_10688[(1)] = (13));

} else {
var statearr_10626_10689 = state_10552__$1;
(statearr_10626_10689[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (18))){
var inst_10477 = (state_10552[(2)]);
var state_10552__$1 = state_10552;
var statearr_10627_10690 = state_10552__$1;
(statearr_10627_10690[(2)] = inst_10477);

(statearr_10627_10690[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (42))){
var state_10552__$1 = state_10552;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10552__$1,(45),dchan);
} else {
if((state_val_10553 === (37))){
var inst_10520 = (state_10552[(23)]);
var inst_10420 = (state_10552[(10)]);
var inst_10511 = (state_10552[(25)]);
var inst_10520__$1 = cljs.core.first.call(null,inst_10511);
var inst_10521 = cljs.core.async.put_BANG_.call(null,inst_10520__$1,inst_10420,done);
var state_10552__$1 = (function (){var statearr_10628 = state_10552;
(statearr_10628[(23)] = inst_10520__$1);

return statearr_10628;
})();
if(cljs.core.truth_(inst_10521)){
var statearr_10629_10691 = state_10552__$1;
(statearr_10629_10691[(1)] = (39));

} else {
var statearr_10630_10692 = state_10552__$1;
(statearr_10630_10692[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (8))){
var inst_10431 = (state_10552[(15)]);
var inst_10432 = (state_10552[(16)]);
var inst_10434 = (inst_10432 < inst_10431);
var inst_10435 = inst_10434;
var state_10552__$1 = state_10552;
if(cljs.core.truth_(inst_10435)){
var statearr_10631_10693 = state_10552__$1;
(statearr_10631_10693[(1)] = (10));

} else {
var statearr_10632_10694 = state_10552__$1;
(statearr_10632_10694[(1)] = (11));

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
});})(c__9287__auto___10640,cs,m,dchan,dctr,done))
;
return ((function (switch__9175__auto__,c__9287__auto___10640,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__9176__auto__ = null;
var cljs$core$async$mult_$_state_machine__9176__auto____0 = (function (){
var statearr_10636 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10636[(0)] = cljs$core$async$mult_$_state_machine__9176__auto__);

(statearr_10636[(1)] = (1));

return statearr_10636;
});
var cljs$core$async$mult_$_state_machine__9176__auto____1 = (function (state_10552){
while(true){
var ret_value__9177__auto__ = (function (){try{while(true){
var result__9178__auto__ = switch__9175__auto__.call(null,state_10552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9178__auto__;
}
break;
}
}catch (e10637){if((e10637 instanceof Object)){
var ex__9179__auto__ = e10637;
var statearr_10638_10695 = state_10552;
(statearr_10638_10695[(5)] = ex__9179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10696 = state_10552;
state_10552 = G__10696;
continue;
} else {
return ret_value__9177__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__9176__auto__ = function(state_10552){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__9176__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__9176__auto____1.call(this,state_10552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__9176__auto____0;
cljs$core$async$mult_$_state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__9176__auto____1;
return cljs$core$async$mult_$_state_machine__9176__auto__;
})()
;})(switch__9175__auto__,c__9287__auto___10640,cs,m,dchan,dctr,done))
})();
var state__9289__auto__ = (function (){var statearr_10639 = f__9288__auto__.call(null);
(statearr_10639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9287__auto___10640);

return statearr_10639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9289__auto__);
});})(c__9287__auto___10640,cs,m,dchan,dctr,done))
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
var args10697 = [];
var len__7774__auto___10700 = arguments.length;
var i__7775__auto___10701 = (0);
while(true){
if((i__7775__auto___10701 < len__7774__auto___10700)){
args10697.push((arguments[i__7775__auto___10701]));

var G__10702 = (i__7775__auto___10701 + (1));
i__7775__auto___10701 = G__10702;
continue;
} else {
}
break;
}

var G__10699 = args10697.length;
switch (G__10699) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10697.length)].join('')));

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
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__7329__auto__ = (((m == null))?null:m);
var m__7330__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7329__auto__)]);
if(!((m__7330__auto__ == null))){
return m__7330__auto__.call(null,m,ch);
} else {
var m__7330__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7330__auto____$1 == null))){
return m__7330__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__7329__auto__ = (((m == null))?null:m);
var m__7330__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7329__auto__)]);
if(!((m__7330__auto__ == null))){
return m__7330__auto__.call(null,m,ch);
} else {
var m__7330__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7330__auto____$1 == null))){
return m__7330__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__7329__auto__ = (((m == null))?null:m);
var m__7330__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7329__auto__)]);
if(!((m__7330__auto__ == null))){
return m__7330__auto__.call(null,m);
} else {
var m__7330__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7330__auto____$1 == null))){
return m__7330__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__7329__auto__ = (((m == null))?null:m);
var m__7330__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7329__auto__)]);
if(!((m__7330__auto__ == null))){
return m__7330__auto__.call(null,m,state_map);
} else {
var m__7330__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7330__auto____$1 == null))){
return m__7330__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__7329__auto__ = (((m == null))?null:m);
var m__7330__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7329__auto__)]);
if(!((m__7330__auto__ == null))){
return m__7330__auto__.call(null,m,mode);
} else {
var m__7330__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7330__auto____$1 == null))){
return m__7330__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7781__auto__ = [];
var len__7774__auto___10714 = arguments.length;
var i__7775__auto___10715 = (0);
while(true){
if((i__7775__auto___10715 < len__7774__auto___10714)){
args__7781__auto__.push((arguments[i__7775__auto___10715]));

var G__10716 = (i__7775__auto___10715 + (1));
i__7775__auto___10715 = G__10716;
continue;
} else {
}
break;
}

var argseq__7782__auto__ = ((((3) < args__7781__auto__.length))?(new cljs.core.IndexedSeq(args__7781__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7782__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__10708){
var map__10709 = p__10708;
var map__10709__$1 = ((((!((map__10709 == null)))?((((map__10709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10709.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10709):map__10709);
var opts = map__10709__$1;
var statearr_10711_10717 = state;
(statearr_10711_10717[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__10709,map__10709__$1,opts){
return (function (val){
var statearr_10712_10718 = state;
(statearr_10712_10718[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__10709,map__10709__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_10713_10719 = state;
(statearr_10713_10719[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq10704){
var G__10705 = cljs.core.first.call(null,seq10704);
var seq10704__$1 = cljs.core.next.call(null,seq10704);
var G__10706 = cljs.core.first.call(null,seq10704__$1);
var seq10704__$2 = cljs.core.next.call(null,seq10704__$1);
var G__10707 = cljs.core.first.call(null,seq10704__$2);
var seq10704__$3 = cljs.core.next.call(null,seq10704__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10705,G__10706,G__10707,seq10704__$3);
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async10887 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10887 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta10888){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta10888 = meta10888;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10889,meta10888__$1){
var self__ = this;
var _10889__$1 = this;
return (new cljs.core.async.t_cljs$core$async10887(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta10888__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10887.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10889){
var self__ = this;
var _10889__$1 = this;
return self__.meta10888;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10887.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10887.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10887.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10887.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10887.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10887.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10887.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10887.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10887.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta10888","meta10888",-58254485,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10887.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10887.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10887";

cljs.core.async.t_cljs$core$async10887.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7272__auto__,writer__7273__auto__,opt__7274__auto__){
return cljs.core._write.call(null,writer__7273__auto__,"cljs.core.async/t_cljs$core$async10887");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async10887 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async10887(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta10888){
return (new cljs.core.async.t_cljs$core$async10887(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta10888));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async10887(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9287__auto___11054 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9287__auto___11054,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__9288__auto__ = (function (){var switch__9175__auto__ = ((function (c__9287__auto___11054,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_10991){
var state_val_10992 = (state_10991[(1)]);
if((state_val_10992 === (7))){
var inst_10906 = (state_10991[(2)]);
var state_10991__$1 = state_10991;
var statearr_10993_11055 = state_10991__$1;
(statearr_10993_11055[(2)] = inst_10906);

(statearr_10993_11055[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (20))){
var inst_10918 = (state_10991[(7)]);
var state_10991__$1 = state_10991;
var statearr_10994_11056 = state_10991__$1;
(statearr_10994_11056[(2)] = inst_10918);

(statearr_10994_11056[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (27))){
var state_10991__$1 = state_10991;
var statearr_10995_11057 = state_10991__$1;
(statearr_10995_11057[(2)] = null);

(statearr_10995_11057[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (1))){
var inst_10893 = (state_10991[(8)]);
var inst_10893__$1 = calc_state.call(null);
var inst_10895 = (inst_10893__$1 == null);
var inst_10896 = cljs.core.not.call(null,inst_10895);
var state_10991__$1 = (function (){var statearr_10996 = state_10991;
(statearr_10996[(8)] = inst_10893__$1);

return statearr_10996;
})();
if(inst_10896){
var statearr_10997_11058 = state_10991__$1;
(statearr_10997_11058[(1)] = (2));

} else {
var statearr_10998_11059 = state_10991__$1;
(statearr_10998_11059[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (24))){
var inst_10942 = (state_10991[(9)]);
var inst_10951 = (state_10991[(10)]);
var inst_10965 = (state_10991[(11)]);
var inst_10965__$1 = inst_10942.call(null,inst_10951);
var state_10991__$1 = (function (){var statearr_10999 = state_10991;
(statearr_10999[(11)] = inst_10965__$1);

return statearr_10999;
})();
if(cljs.core.truth_(inst_10965__$1)){
var statearr_11000_11060 = state_10991__$1;
(statearr_11000_11060[(1)] = (29));

} else {
var statearr_11001_11061 = state_10991__$1;
(statearr_11001_11061[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (4))){
var inst_10909 = (state_10991[(2)]);
var state_10991__$1 = state_10991;
if(cljs.core.truth_(inst_10909)){
var statearr_11002_11062 = state_10991__$1;
(statearr_11002_11062[(1)] = (8));

} else {
var statearr_11003_11063 = state_10991__$1;
(statearr_11003_11063[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (15))){
var inst_10936 = (state_10991[(2)]);
var state_10991__$1 = state_10991;
if(cljs.core.truth_(inst_10936)){
var statearr_11004_11064 = state_10991__$1;
(statearr_11004_11064[(1)] = (19));

} else {
var statearr_11005_11065 = state_10991__$1;
(statearr_11005_11065[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (21))){
var inst_10941 = (state_10991[(12)]);
var inst_10941__$1 = (state_10991[(2)]);
var inst_10942 = cljs.core.get.call(null,inst_10941__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10943 = cljs.core.get.call(null,inst_10941__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10944 = cljs.core.get.call(null,inst_10941__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_10991__$1 = (function (){var statearr_11006 = state_10991;
(statearr_11006[(9)] = inst_10942);

(statearr_11006[(13)] = inst_10943);

(statearr_11006[(12)] = inst_10941__$1);

return statearr_11006;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_10991__$1,(22),inst_10944);
} else {
if((state_val_10992 === (31))){
var inst_10973 = (state_10991[(2)]);
var state_10991__$1 = state_10991;
if(cljs.core.truth_(inst_10973)){
var statearr_11007_11066 = state_10991__$1;
(statearr_11007_11066[(1)] = (32));

} else {
var statearr_11008_11067 = state_10991__$1;
(statearr_11008_11067[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (32))){
var inst_10950 = (state_10991[(14)]);
var state_10991__$1 = state_10991;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10991__$1,(35),out,inst_10950);
} else {
if((state_val_10992 === (33))){
var inst_10941 = (state_10991[(12)]);
var inst_10918 = inst_10941;
var state_10991__$1 = (function (){var statearr_11009 = state_10991;
(statearr_11009[(7)] = inst_10918);

return statearr_11009;
})();
var statearr_11010_11068 = state_10991__$1;
(statearr_11010_11068[(2)] = null);

(statearr_11010_11068[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (13))){
var inst_10918 = (state_10991[(7)]);
var inst_10925 = inst_10918.cljs$lang$protocol_mask$partition0$;
var inst_10926 = (inst_10925 & (64));
var inst_10927 = inst_10918.cljs$core$ISeq$;
var inst_10928 = (cljs.core.PROTOCOL_SENTINEL === inst_10927);
var inst_10929 = (inst_10926) || (inst_10928);
var state_10991__$1 = state_10991;
if(cljs.core.truth_(inst_10929)){
var statearr_11011_11069 = state_10991__$1;
(statearr_11011_11069[(1)] = (16));

} else {
var statearr_11012_11070 = state_10991__$1;
(statearr_11012_11070[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (22))){
var inst_10951 = (state_10991[(10)]);
var inst_10950 = (state_10991[(14)]);
var inst_10949 = (state_10991[(2)]);
var inst_10950__$1 = cljs.core.nth.call(null,inst_10949,(0),null);
var inst_10951__$1 = cljs.core.nth.call(null,inst_10949,(1),null);
var inst_10952 = (inst_10950__$1 == null);
var inst_10953 = cljs.core._EQ_.call(null,inst_10951__$1,change);
var inst_10954 = (inst_10952) || (inst_10953);
var state_10991__$1 = (function (){var statearr_11013 = state_10991;
(statearr_11013[(10)] = inst_10951__$1);

(statearr_11013[(14)] = inst_10950__$1);

return statearr_11013;
})();
if(cljs.core.truth_(inst_10954)){
var statearr_11014_11071 = state_10991__$1;
(statearr_11014_11071[(1)] = (23));

} else {
var statearr_11015_11072 = state_10991__$1;
(statearr_11015_11072[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (36))){
var inst_10941 = (state_10991[(12)]);
var inst_10918 = inst_10941;
var state_10991__$1 = (function (){var statearr_11016 = state_10991;
(statearr_11016[(7)] = inst_10918);

return statearr_11016;
})();
var statearr_11017_11073 = state_10991__$1;
(statearr_11017_11073[(2)] = null);

(statearr_11017_11073[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (29))){
var inst_10965 = (state_10991[(11)]);
var state_10991__$1 = state_10991;
var statearr_11018_11074 = state_10991__$1;
(statearr_11018_11074[(2)] = inst_10965);

(statearr_11018_11074[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (6))){
var state_10991__$1 = state_10991;
var statearr_11019_11075 = state_10991__$1;
(statearr_11019_11075[(2)] = false);

(statearr_11019_11075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (28))){
var inst_10961 = (state_10991[(2)]);
var inst_10962 = calc_state.call(null);
var inst_10918 = inst_10962;
var state_10991__$1 = (function (){var statearr_11020 = state_10991;
(statearr_11020[(15)] = inst_10961);

(statearr_11020[(7)] = inst_10918);

return statearr_11020;
})();
var statearr_11021_11076 = state_10991__$1;
(statearr_11021_11076[(2)] = null);

(statearr_11021_11076[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (25))){
var inst_10987 = (state_10991[(2)]);
var state_10991__$1 = state_10991;
var statearr_11022_11077 = state_10991__$1;
(statearr_11022_11077[(2)] = inst_10987);

(statearr_11022_11077[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (34))){
var inst_10985 = (state_10991[(2)]);
var state_10991__$1 = state_10991;
var statearr_11023_11078 = state_10991__$1;
(statearr_11023_11078[(2)] = inst_10985);

(statearr_11023_11078[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (17))){
var state_10991__$1 = state_10991;
var statearr_11024_11079 = state_10991__$1;
(statearr_11024_11079[(2)] = false);

(statearr_11024_11079[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (3))){
var state_10991__$1 = state_10991;
var statearr_11025_11080 = state_10991__$1;
(statearr_11025_11080[(2)] = false);

(statearr_11025_11080[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (12))){
var inst_10989 = (state_10991[(2)]);
var state_10991__$1 = state_10991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10991__$1,inst_10989);
} else {
if((state_val_10992 === (2))){
var inst_10893 = (state_10991[(8)]);
var inst_10898 = inst_10893.cljs$lang$protocol_mask$partition0$;
var inst_10899 = (inst_10898 & (64));
var inst_10900 = inst_10893.cljs$core$ISeq$;
var inst_10901 = (cljs.core.PROTOCOL_SENTINEL === inst_10900);
var inst_10902 = (inst_10899) || (inst_10901);
var state_10991__$1 = state_10991;
if(cljs.core.truth_(inst_10902)){
var statearr_11026_11081 = state_10991__$1;
(statearr_11026_11081[(1)] = (5));

} else {
var statearr_11027_11082 = state_10991__$1;
(statearr_11027_11082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (23))){
var inst_10950 = (state_10991[(14)]);
var inst_10956 = (inst_10950 == null);
var state_10991__$1 = state_10991;
if(cljs.core.truth_(inst_10956)){
var statearr_11028_11083 = state_10991__$1;
(statearr_11028_11083[(1)] = (26));

} else {
var statearr_11029_11084 = state_10991__$1;
(statearr_11029_11084[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (35))){
var inst_10976 = (state_10991[(2)]);
var state_10991__$1 = state_10991;
if(cljs.core.truth_(inst_10976)){
var statearr_11030_11085 = state_10991__$1;
(statearr_11030_11085[(1)] = (36));

} else {
var statearr_11031_11086 = state_10991__$1;
(statearr_11031_11086[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (19))){
var inst_10918 = (state_10991[(7)]);
var inst_10938 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10918);
var state_10991__$1 = state_10991;
var statearr_11032_11087 = state_10991__$1;
(statearr_11032_11087[(2)] = inst_10938);

(statearr_11032_11087[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (11))){
var inst_10918 = (state_10991[(7)]);
var inst_10922 = (inst_10918 == null);
var inst_10923 = cljs.core.not.call(null,inst_10922);
var state_10991__$1 = state_10991;
if(inst_10923){
var statearr_11033_11088 = state_10991__$1;
(statearr_11033_11088[(1)] = (13));

} else {
var statearr_11034_11089 = state_10991__$1;
(statearr_11034_11089[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (9))){
var inst_10893 = (state_10991[(8)]);
var state_10991__$1 = state_10991;
var statearr_11035_11090 = state_10991__$1;
(statearr_11035_11090[(2)] = inst_10893);

(statearr_11035_11090[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (5))){
var state_10991__$1 = state_10991;
var statearr_11036_11091 = state_10991__$1;
(statearr_11036_11091[(2)] = true);

(statearr_11036_11091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (14))){
var state_10991__$1 = state_10991;
var statearr_11037_11092 = state_10991__$1;
(statearr_11037_11092[(2)] = false);

(statearr_11037_11092[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (26))){
var inst_10951 = (state_10991[(10)]);
var inst_10958 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10951);
var state_10991__$1 = state_10991;
var statearr_11038_11093 = state_10991__$1;
(statearr_11038_11093[(2)] = inst_10958);

(statearr_11038_11093[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (16))){
var state_10991__$1 = state_10991;
var statearr_11039_11094 = state_10991__$1;
(statearr_11039_11094[(2)] = true);

(statearr_11039_11094[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (38))){
var inst_10981 = (state_10991[(2)]);
var state_10991__$1 = state_10991;
var statearr_11040_11095 = state_10991__$1;
(statearr_11040_11095[(2)] = inst_10981);

(statearr_11040_11095[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (30))){
var inst_10942 = (state_10991[(9)]);
var inst_10951 = (state_10991[(10)]);
var inst_10943 = (state_10991[(13)]);
var inst_10968 = cljs.core.empty_QMARK_.call(null,inst_10942);
var inst_10969 = inst_10943.call(null,inst_10951);
var inst_10970 = cljs.core.not.call(null,inst_10969);
var inst_10971 = (inst_10968) && (inst_10970);
var state_10991__$1 = state_10991;
var statearr_11041_11096 = state_10991__$1;
(statearr_11041_11096[(2)] = inst_10971);

(statearr_11041_11096[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (10))){
var inst_10893 = (state_10991[(8)]);
var inst_10914 = (state_10991[(2)]);
var inst_10915 = cljs.core.get.call(null,inst_10914,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10916 = cljs.core.get.call(null,inst_10914,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10917 = cljs.core.get.call(null,inst_10914,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_10918 = inst_10893;
var state_10991__$1 = (function (){var statearr_11042 = state_10991;
(statearr_11042[(16)] = inst_10917);

(statearr_11042[(17)] = inst_10916);

(statearr_11042[(7)] = inst_10918);

(statearr_11042[(18)] = inst_10915);

return statearr_11042;
})();
var statearr_11043_11097 = state_10991__$1;
(statearr_11043_11097[(2)] = null);

(statearr_11043_11097[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (18))){
var inst_10933 = (state_10991[(2)]);
var state_10991__$1 = state_10991;
var statearr_11044_11098 = state_10991__$1;
(statearr_11044_11098[(2)] = inst_10933);

(statearr_11044_11098[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (37))){
var state_10991__$1 = state_10991;
var statearr_11045_11099 = state_10991__$1;
(statearr_11045_11099[(2)] = null);

(statearr_11045_11099[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10992 === (8))){
var inst_10893 = (state_10991[(8)]);
var inst_10911 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10893);
var state_10991__$1 = state_10991;
var statearr_11046_11100 = state_10991__$1;
(statearr_11046_11100[(2)] = inst_10911);

(statearr_11046_11100[(1)] = (10));


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
});})(c__9287__auto___11054,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__9175__auto__,c__9287__auto___11054,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__9176__auto__ = null;
var cljs$core$async$mix_$_state_machine__9176__auto____0 = (function (){
var statearr_11050 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11050[(0)] = cljs$core$async$mix_$_state_machine__9176__auto__);

(statearr_11050[(1)] = (1));

return statearr_11050;
});
var cljs$core$async$mix_$_state_machine__9176__auto____1 = (function (state_10991){
while(true){
var ret_value__9177__auto__ = (function (){try{while(true){
var result__9178__auto__ = switch__9175__auto__.call(null,state_10991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9178__auto__;
}
break;
}
}catch (e11051){if((e11051 instanceof Object)){
var ex__9179__auto__ = e11051;
var statearr_11052_11101 = state_10991;
(statearr_11052_11101[(5)] = ex__9179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11051;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11102 = state_10991;
state_10991 = G__11102;
continue;
} else {
return ret_value__9177__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__9176__auto__ = function(state_10991){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__9176__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__9176__auto____1.call(this,state_10991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__9176__auto____0;
cljs$core$async$mix_$_state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__9176__auto____1;
return cljs$core$async$mix_$_state_machine__9176__auto__;
})()
;})(switch__9175__auto__,c__9287__auto___11054,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__9289__auto__ = (function (){var statearr_11053 = f__9288__auto__.call(null);
(statearr_11053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9287__auto___11054);

return statearr_11053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9289__auto__);
});})(c__9287__auto___11054,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__7329__auto__ = (((p == null))?null:p);
var m__7330__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7329__auto__)]);
if(!((m__7330__auto__ == null))){
return m__7330__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__7330__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7330__auto____$1 == null))){
return m__7330__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__7329__auto__ = (((p == null))?null:p);
var m__7330__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7329__auto__)]);
if(!((m__7330__auto__ == null))){
return m__7330__auto__.call(null,p,v,ch);
} else {
var m__7330__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7330__auto____$1 == null))){
return m__7330__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args11103 = [];
var len__7774__auto___11106 = arguments.length;
var i__7775__auto___11107 = (0);
while(true){
if((i__7775__auto___11107 < len__7774__auto___11106)){
args11103.push((arguments[i__7775__auto___11107]));

var G__11108 = (i__7775__auto___11107 + (1));
i__7775__auto___11107 = G__11108;
continue;
} else {
}
break;
}

var G__11105 = args11103.length;
switch (G__11105) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11103.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7329__auto__ = (((p == null))?null:p);
var m__7330__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7329__auto__)]);
if(!((m__7330__auto__ == null))){
return m__7330__auto__.call(null,p);
} else {
var m__7330__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7330__auto____$1 == null))){
return m__7330__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__7329__auto__ = (((p == null))?null:p);
var m__7330__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7329__auto__)]);
if(!((m__7330__auto__ == null))){
return m__7330__auto__.call(null,p,v);
} else {
var m__7330__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7330__auto____$1 == null))){
return m__7330__auto____$1.call(null,p,v);
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
var args11111 = [];
var len__7774__auto___11236 = arguments.length;
var i__7775__auto___11237 = (0);
while(true){
if((i__7775__auto___11237 < len__7774__auto___11236)){
args11111.push((arguments[i__7775__auto___11237]));

var G__11238 = (i__7775__auto___11237 + (1));
i__7775__auto___11237 = G__11238;
continue;
} else {
}
break;
}

var G__11113 = args11111.length;
switch (G__11113) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11111.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6666__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6666__auto__)){
return or__6666__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6666__auto__,mults){
return (function (p1__11110_SHARP_){
if(cljs.core.truth_(p1__11110_SHARP_.call(null,topic))){
return p1__11110_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__11110_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6666__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async11114 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11114 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11115){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11115 = meta11115;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11116,meta11115__$1){
var self__ = this;
var _11116__$1 = this;
return (new cljs.core.async.t_cljs$core$async11114(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11115__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11114.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11116){
var self__ = this;
var _11116__$1 = this;
return self__.meta11115;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11114.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11114.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11114.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11114.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11114.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11114.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11114.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11114.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11115","meta11115",428223918,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11114.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11114.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11114";

cljs.core.async.t_cljs$core$async11114.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7272__auto__,writer__7273__auto__,opt__7274__auto__){
return cljs.core._write.call(null,writer__7273__auto__,"cljs.core.async/t_cljs$core$async11114");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async11114 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async11114(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11115){
return (new cljs.core.async.t_cljs$core$async11114(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11115));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async11114(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9287__auto___11240 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9287__auto___11240,mults,ensure_mult,p){
return (function (){
var f__9288__auto__ = (function (){var switch__9175__auto__ = ((function (c__9287__auto___11240,mults,ensure_mult,p){
return (function (state_11188){
var state_val_11189 = (state_11188[(1)]);
if((state_val_11189 === (7))){
var inst_11184 = (state_11188[(2)]);
var state_11188__$1 = state_11188;
var statearr_11190_11241 = state_11188__$1;
(statearr_11190_11241[(2)] = inst_11184);

(statearr_11190_11241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (20))){
var state_11188__$1 = state_11188;
var statearr_11191_11242 = state_11188__$1;
(statearr_11191_11242[(2)] = null);

(statearr_11191_11242[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (1))){
var state_11188__$1 = state_11188;
var statearr_11192_11243 = state_11188__$1;
(statearr_11192_11243[(2)] = null);

(statearr_11192_11243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (24))){
var inst_11167 = (state_11188[(7)]);
var inst_11176 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11167);
var state_11188__$1 = state_11188;
var statearr_11193_11244 = state_11188__$1;
(statearr_11193_11244[(2)] = inst_11176);

(statearr_11193_11244[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (4))){
var inst_11119 = (state_11188[(8)]);
var inst_11119__$1 = (state_11188[(2)]);
var inst_11120 = (inst_11119__$1 == null);
var state_11188__$1 = (function (){var statearr_11194 = state_11188;
(statearr_11194[(8)] = inst_11119__$1);

return statearr_11194;
})();
if(cljs.core.truth_(inst_11120)){
var statearr_11195_11245 = state_11188__$1;
(statearr_11195_11245[(1)] = (5));

} else {
var statearr_11196_11246 = state_11188__$1;
(statearr_11196_11246[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (15))){
var inst_11161 = (state_11188[(2)]);
var state_11188__$1 = state_11188;
var statearr_11197_11247 = state_11188__$1;
(statearr_11197_11247[(2)] = inst_11161);

(statearr_11197_11247[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (21))){
var inst_11181 = (state_11188[(2)]);
var state_11188__$1 = (function (){var statearr_11198 = state_11188;
(statearr_11198[(9)] = inst_11181);

return statearr_11198;
})();
var statearr_11199_11248 = state_11188__$1;
(statearr_11199_11248[(2)] = null);

(statearr_11199_11248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (13))){
var inst_11143 = (state_11188[(10)]);
var inst_11145 = cljs.core.chunked_seq_QMARK_.call(null,inst_11143);
var state_11188__$1 = state_11188;
if(inst_11145){
var statearr_11200_11249 = state_11188__$1;
(statearr_11200_11249[(1)] = (16));

} else {
var statearr_11201_11250 = state_11188__$1;
(statearr_11201_11250[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (22))){
var inst_11173 = (state_11188[(2)]);
var state_11188__$1 = state_11188;
if(cljs.core.truth_(inst_11173)){
var statearr_11202_11251 = state_11188__$1;
(statearr_11202_11251[(1)] = (23));

} else {
var statearr_11203_11252 = state_11188__$1;
(statearr_11203_11252[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (6))){
var inst_11167 = (state_11188[(7)]);
var inst_11119 = (state_11188[(8)]);
var inst_11169 = (state_11188[(11)]);
var inst_11167__$1 = topic_fn.call(null,inst_11119);
var inst_11168 = cljs.core.deref.call(null,mults);
var inst_11169__$1 = cljs.core.get.call(null,inst_11168,inst_11167__$1);
var state_11188__$1 = (function (){var statearr_11204 = state_11188;
(statearr_11204[(7)] = inst_11167__$1);

(statearr_11204[(11)] = inst_11169__$1);

return statearr_11204;
})();
if(cljs.core.truth_(inst_11169__$1)){
var statearr_11205_11253 = state_11188__$1;
(statearr_11205_11253[(1)] = (19));

} else {
var statearr_11206_11254 = state_11188__$1;
(statearr_11206_11254[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (25))){
var inst_11178 = (state_11188[(2)]);
var state_11188__$1 = state_11188;
var statearr_11207_11255 = state_11188__$1;
(statearr_11207_11255[(2)] = inst_11178);

(statearr_11207_11255[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (17))){
var inst_11143 = (state_11188[(10)]);
var inst_11152 = cljs.core.first.call(null,inst_11143);
var inst_11153 = cljs.core.async.muxch_STAR_.call(null,inst_11152);
var inst_11154 = cljs.core.async.close_BANG_.call(null,inst_11153);
var inst_11155 = cljs.core.next.call(null,inst_11143);
var inst_11129 = inst_11155;
var inst_11130 = null;
var inst_11131 = (0);
var inst_11132 = (0);
var state_11188__$1 = (function (){var statearr_11208 = state_11188;
(statearr_11208[(12)] = inst_11129);

(statearr_11208[(13)] = inst_11130);

(statearr_11208[(14)] = inst_11154);

(statearr_11208[(15)] = inst_11131);

(statearr_11208[(16)] = inst_11132);

return statearr_11208;
})();
var statearr_11209_11256 = state_11188__$1;
(statearr_11209_11256[(2)] = null);

(statearr_11209_11256[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (3))){
var inst_11186 = (state_11188[(2)]);
var state_11188__$1 = state_11188;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11188__$1,inst_11186);
} else {
if((state_val_11189 === (12))){
var inst_11163 = (state_11188[(2)]);
var state_11188__$1 = state_11188;
var statearr_11210_11257 = state_11188__$1;
(statearr_11210_11257[(2)] = inst_11163);

(statearr_11210_11257[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (2))){
var state_11188__$1 = state_11188;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11188__$1,(4),ch);
} else {
if((state_val_11189 === (23))){
var state_11188__$1 = state_11188;
var statearr_11211_11258 = state_11188__$1;
(statearr_11211_11258[(2)] = null);

(statearr_11211_11258[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (19))){
var inst_11119 = (state_11188[(8)]);
var inst_11169 = (state_11188[(11)]);
var inst_11171 = cljs.core.async.muxch_STAR_.call(null,inst_11169);
var state_11188__$1 = state_11188;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11188__$1,(22),inst_11171,inst_11119);
} else {
if((state_val_11189 === (11))){
var inst_11129 = (state_11188[(12)]);
var inst_11143 = (state_11188[(10)]);
var inst_11143__$1 = cljs.core.seq.call(null,inst_11129);
var state_11188__$1 = (function (){var statearr_11212 = state_11188;
(statearr_11212[(10)] = inst_11143__$1);

return statearr_11212;
})();
if(inst_11143__$1){
var statearr_11213_11259 = state_11188__$1;
(statearr_11213_11259[(1)] = (13));

} else {
var statearr_11214_11260 = state_11188__$1;
(statearr_11214_11260[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (9))){
var inst_11165 = (state_11188[(2)]);
var state_11188__$1 = state_11188;
var statearr_11215_11261 = state_11188__$1;
(statearr_11215_11261[(2)] = inst_11165);

(statearr_11215_11261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (5))){
var inst_11126 = cljs.core.deref.call(null,mults);
var inst_11127 = cljs.core.vals.call(null,inst_11126);
var inst_11128 = cljs.core.seq.call(null,inst_11127);
var inst_11129 = inst_11128;
var inst_11130 = null;
var inst_11131 = (0);
var inst_11132 = (0);
var state_11188__$1 = (function (){var statearr_11216 = state_11188;
(statearr_11216[(12)] = inst_11129);

(statearr_11216[(13)] = inst_11130);

(statearr_11216[(15)] = inst_11131);

(statearr_11216[(16)] = inst_11132);

return statearr_11216;
})();
var statearr_11217_11262 = state_11188__$1;
(statearr_11217_11262[(2)] = null);

(statearr_11217_11262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (14))){
var state_11188__$1 = state_11188;
var statearr_11221_11263 = state_11188__$1;
(statearr_11221_11263[(2)] = null);

(statearr_11221_11263[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (16))){
var inst_11143 = (state_11188[(10)]);
var inst_11147 = cljs.core.chunk_first.call(null,inst_11143);
var inst_11148 = cljs.core.chunk_rest.call(null,inst_11143);
var inst_11149 = cljs.core.count.call(null,inst_11147);
var inst_11129 = inst_11148;
var inst_11130 = inst_11147;
var inst_11131 = inst_11149;
var inst_11132 = (0);
var state_11188__$1 = (function (){var statearr_11222 = state_11188;
(statearr_11222[(12)] = inst_11129);

(statearr_11222[(13)] = inst_11130);

(statearr_11222[(15)] = inst_11131);

(statearr_11222[(16)] = inst_11132);

return statearr_11222;
})();
var statearr_11223_11264 = state_11188__$1;
(statearr_11223_11264[(2)] = null);

(statearr_11223_11264[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (10))){
var inst_11129 = (state_11188[(12)]);
var inst_11130 = (state_11188[(13)]);
var inst_11131 = (state_11188[(15)]);
var inst_11132 = (state_11188[(16)]);
var inst_11137 = cljs.core._nth.call(null,inst_11130,inst_11132);
var inst_11138 = cljs.core.async.muxch_STAR_.call(null,inst_11137);
var inst_11139 = cljs.core.async.close_BANG_.call(null,inst_11138);
var inst_11140 = (inst_11132 + (1));
var tmp11218 = inst_11129;
var tmp11219 = inst_11130;
var tmp11220 = inst_11131;
var inst_11129__$1 = tmp11218;
var inst_11130__$1 = tmp11219;
var inst_11131__$1 = tmp11220;
var inst_11132__$1 = inst_11140;
var state_11188__$1 = (function (){var statearr_11224 = state_11188;
(statearr_11224[(17)] = inst_11139);

(statearr_11224[(12)] = inst_11129__$1);

(statearr_11224[(13)] = inst_11130__$1);

(statearr_11224[(15)] = inst_11131__$1);

(statearr_11224[(16)] = inst_11132__$1);

return statearr_11224;
})();
var statearr_11225_11265 = state_11188__$1;
(statearr_11225_11265[(2)] = null);

(statearr_11225_11265[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (18))){
var inst_11158 = (state_11188[(2)]);
var state_11188__$1 = state_11188;
var statearr_11226_11266 = state_11188__$1;
(statearr_11226_11266[(2)] = inst_11158);

(statearr_11226_11266[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (8))){
var inst_11131 = (state_11188[(15)]);
var inst_11132 = (state_11188[(16)]);
var inst_11134 = (inst_11132 < inst_11131);
var inst_11135 = inst_11134;
var state_11188__$1 = state_11188;
if(cljs.core.truth_(inst_11135)){
var statearr_11227_11267 = state_11188__$1;
(statearr_11227_11267[(1)] = (10));

} else {
var statearr_11228_11268 = state_11188__$1;
(statearr_11228_11268[(1)] = (11));

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
});})(c__9287__auto___11240,mults,ensure_mult,p))
;
return ((function (switch__9175__auto__,c__9287__auto___11240,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__9176__auto__ = null;
var cljs$core$async$state_machine__9176__auto____0 = (function (){
var statearr_11232 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11232[(0)] = cljs$core$async$state_machine__9176__auto__);

(statearr_11232[(1)] = (1));

return statearr_11232;
});
var cljs$core$async$state_machine__9176__auto____1 = (function (state_11188){
while(true){
var ret_value__9177__auto__ = (function (){try{while(true){
var result__9178__auto__ = switch__9175__auto__.call(null,state_11188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9178__auto__;
}
break;
}
}catch (e11233){if((e11233 instanceof Object)){
var ex__9179__auto__ = e11233;
var statearr_11234_11269 = state_11188;
(statearr_11234_11269[(5)] = ex__9179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11270 = state_11188;
state_11188 = G__11270;
continue;
} else {
return ret_value__9177__auto__;
}
break;
}
});
cljs$core$async$state_machine__9176__auto__ = function(state_11188){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9176__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9176__auto____1.call(this,state_11188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9176__auto____0;
cljs$core$async$state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9176__auto____1;
return cljs$core$async$state_machine__9176__auto__;
})()
;})(switch__9175__auto__,c__9287__auto___11240,mults,ensure_mult,p))
})();
var state__9289__auto__ = (function (){var statearr_11235 = f__9288__auto__.call(null);
(statearr_11235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9287__auto___11240);

return statearr_11235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9289__auto__);
});})(c__9287__auto___11240,mults,ensure_mult,p))
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
var args11271 = [];
var len__7774__auto___11274 = arguments.length;
var i__7775__auto___11275 = (0);
while(true){
if((i__7775__auto___11275 < len__7774__auto___11274)){
args11271.push((arguments[i__7775__auto___11275]));

var G__11276 = (i__7775__auto___11275 + (1));
i__7775__auto___11275 = G__11276;
continue;
} else {
}
break;
}

var G__11273 = args11271.length;
switch (G__11273) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11271.length)].join('')));

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
var args11278 = [];
var len__7774__auto___11281 = arguments.length;
var i__7775__auto___11282 = (0);
while(true){
if((i__7775__auto___11282 < len__7774__auto___11281)){
args11278.push((arguments[i__7775__auto___11282]));

var G__11283 = (i__7775__auto___11282 + (1));
i__7775__auto___11282 = G__11283;
continue;
} else {
}
break;
}

var G__11280 = args11278.length;
switch (G__11280) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11278.length)].join('')));

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
var args11285 = [];
var len__7774__auto___11356 = arguments.length;
var i__7775__auto___11357 = (0);
while(true){
if((i__7775__auto___11357 < len__7774__auto___11356)){
args11285.push((arguments[i__7775__auto___11357]));

var G__11358 = (i__7775__auto___11357 + (1));
i__7775__auto___11357 = G__11358;
continue;
} else {
}
break;
}

var G__11287 = args11285.length;
switch (G__11287) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11285.length)].join('')));

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
var c__9287__auto___11360 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9287__auto___11360,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__9288__auto__ = (function (){var switch__9175__auto__ = ((function (c__9287__auto___11360,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_11326){
var state_val_11327 = (state_11326[(1)]);
if((state_val_11327 === (7))){
var state_11326__$1 = state_11326;
var statearr_11328_11361 = state_11326__$1;
(statearr_11328_11361[(2)] = null);

(statearr_11328_11361[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11327 === (1))){
var state_11326__$1 = state_11326;
var statearr_11329_11362 = state_11326__$1;
(statearr_11329_11362[(2)] = null);

(statearr_11329_11362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11327 === (4))){
var inst_11290 = (state_11326[(7)]);
var inst_11292 = (inst_11290 < cnt);
var state_11326__$1 = state_11326;
if(cljs.core.truth_(inst_11292)){
var statearr_11330_11363 = state_11326__$1;
(statearr_11330_11363[(1)] = (6));

} else {
var statearr_11331_11364 = state_11326__$1;
(statearr_11331_11364[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11327 === (15))){
var inst_11322 = (state_11326[(2)]);
var state_11326__$1 = state_11326;
var statearr_11332_11365 = state_11326__$1;
(statearr_11332_11365[(2)] = inst_11322);

(statearr_11332_11365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11327 === (13))){
var inst_11315 = cljs.core.async.close_BANG_.call(null,out);
var state_11326__$1 = state_11326;
var statearr_11333_11366 = state_11326__$1;
(statearr_11333_11366[(2)] = inst_11315);

(statearr_11333_11366[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11327 === (6))){
var state_11326__$1 = state_11326;
var statearr_11334_11367 = state_11326__$1;
(statearr_11334_11367[(2)] = null);

(statearr_11334_11367[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11327 === (3))){
var inst_11324 = (state_11326[(2)]);
var state_11326__$1 = state_11326;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11326__$1,inst_11324);
} else {
if((state_val_11327 === (12))){
var inst_11312 = (state_11326[(8)]);
var inst_11312__$1 = (state_11326[(2)]);
var inst_11313 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11312__$1);
var state_11326__$1 = (function (){var statearr_11335 = state_11326;
(statearr_11335[(8)] = inst_11312__$1);

return statearr_11335;
})();
if(cljs.core.truth_(inst_11313)){
var statearr_11336_11368 = state_11326__$1;
(statearr_11336_11368[(1)] = (13));

} else {
var statearr_11337_11369 = state_11326__$1;
(statearr_11337_11369[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11327 === (2))){
var inst_11289 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_11290 = (0);
var state_11326__$1 = (function (){var statearr_11338 = state_11326;
(statearr_11338[(7)] = inst_11290);

(statearr_11338[(9)] = inst_11289);

return statearr_11338;
})();
var statearr_11339_11370 = state_11326__$1;
(statearr_11339_11370[(2)] = null);

(statearr_11339_11370[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11327 === (11))){
var inst_11290 = (state_11326[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11326,(10),Object,null,(9));
var inst_11299 = chs__$1.call(null,inst_11290);
var inst_11300 = done.call(null,inst_11290);
var inst_11301 = cljs.core.async.take_BANG_.call(null,inst_11299,inst_11300);
var state_11326__$1 = state_11326;
var statearr_11340_11371 = state_11326__$1;
(statearr_11340_11371[(2)] = inst_11301);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11326__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11327 === (9))){
var inst_11290 = (state_11326[(7)]);
var inst_11303 = (state_11326[(2)]);
var inst_11304 = (inst_11290 + (1));
var inst_11290__$1 = inst_11304;
var state_11326__$1 = (function (){var statearr_11341 = state_11326;
(statearr_11341[(7)] = inst_11290__$1);

(statearr_11341[(10)] = inst_11303);

return statearr_11341;
})();
var statearr_11342_11372 = state_11326__$1;
(statearr_11342_11372[(2)] = null);

(statearr_11342_11372[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11327 === (5))){
var inst_11310 = (state_11326[(2)]);
var state_11326__$1 = (function (){var statearr_11343 = state_11326;
(statearr_11343[(11)] = inst_11310);

return statearr_11343;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11326__$1,(12),dchan);
} else {
if((state_val_11327 === (14))){
var inst_11312 = (state_11326[(8)]);
var inst_11317 = cljs.core.apply.call(null,f,inst_11312);
var state_11326__$1 = state_11326;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11326__$1,(16),out,inst_11317);
} else {
if((state_val_11327 === (16))){
var inst_11319 = (state_11326[(2)]);
var state_11326__$1 = (function (){var statearr_11344 = state_11326;
(statearr_11344[(12)] = inst_11319);

return statearr_11344;
})();
var statearr_11345_11373 = state_11326__$1;
(statearr_11345_11373[(2)] = null);

(statearr_11345_11373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11327 === (10))){
var inst_11294 = (state_11326[(2)]);
var inst_11295 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_11326__$1 = (function (){var statearr_11346 = state_11326;
(statearr_11346[(13)] = inst_11294);

return statearr_11346;
})();
var statearr_11347_11374 = state_11326__$1;
(statearr_11347_11374[(2)] = inst_11295);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11326__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11327 === (8))){
var inst_11308 = (state_11326[(2)]);
var state_11326__$1 = state_11326;
var statearr_11348_11375 = state_11326__$1;
(statearr_11348_11375[(2)] = inst_11308);

(statearr_11348_11375[(1)] = (5));


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
});})(c__9287__auto___11360,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__9175__auto__,c__9287__auto___11360,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__9176__auto__ = null;
var cljs$core$async$state_machine__9176__auto____0 = (function (){
var statearr_11352 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11352[(0)] = cljs$core$async$state_machine__9176__auto__);

(statearr_11352[(1)] = (1));

return statearr_11352;
});
var cljs$core$async$state_machine__9176__auto____1 = (function (state_11326){
while(true){
var ret_value__9177__auto__ = (function (){try{while(true){
var result__9178__auto__ = switch__9175__auto__.call(null,state_11326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9178__auto__;
}
break;
}
}catch (e11353){if((e11353 instanceof Object)){
var ex__9179__auto__ = e11353;
var statearr_11354_11376 = state_11326;
(statearr_11354_11376[(5)] = ex__9179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11377 = state_11326;
state_11326 = G__11377;
continue;
} else {
return ret_value__9177__auto__;
}
break;
}
});
cljs$core$async$state_machine__9176__auto__ = function(state_11326){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9176__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9176__auto____1.call(this,state_11326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9176__auto____0;
cljs$core$async$state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9176__auto____1;
return cljs$core$async$state_machine__9176__auto__;
})()
;})(switch__9175__auto__,c__9287__auto___11360,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__9289__auto__ = (function (){var statearr_11355 = f__9288__auto__.call(null);
(statearr_11355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9287__auto___11360);

return statearr_11355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9289__auto__);
});})(c__9287__auto___11360,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args11379 = [];
var len__7774__auto___11437 = arguments.length;
var i__7775__auto___11438 = (0);
while(true){
if((i__7775__auto___11438 < len__7774__auto___11437)){
args11379.push((arguments[i__7775__auto___11438]));

var G__11439 = (i__7775__auto___11438 + (1));
i__7775__auto___11438 = G__11439;
continue;
} else {
}
break;
}

var G__11381 = args11379.length;
switch (G__11381) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11379.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9287__auto___11441 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9287__auto___11441,out){
return (function (){
var f__9288__auto__ = (function (){var switch__9175__auto__ = ((function (c__9287__auto___11441,out){
return (function (state_11413){
var state_val_11414 = (state_11413[(1)]);
if((state_val_11414 === (7))){
var inst_11392 = (state_11413[(7)]);
var inst_11393 = (state_11413[(8)]);
var inst_11392__$1 = (state_11413[(2)]);
var inst_11393__$1 = cljs.core.nth.call(null,inst_11392__$1,(0),null);
var inst_11394 = cljs.core.nth.call(null,inst_11392__$1,(1),null);
var inst_11395 = (inst_11393__$1 == null);
var state_11413__$1 = (function (){var statearr_11415 = state_11413;
(statearr_11415[(7)] = inst_11392__$1);

(statearr_11415[(9)] = inst_11394);

(statearr_11415[(8)] = inst_11393__$1);

return statearr_11415;
})();
if(cljs.core.truth_(inst_11395)){
var statearr_11416_11442 = state_11413__$1;
(statearr_11416_11442[(1)] = (8));

} else {
var statearr_11417_11443 = state_11413__$1;
(statearr_11417_11443[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11414 === (1))){
var inst_11382 = cljs.core.vec.call(null,chs);
var inst_11383 = inst_11382;
var state_11413__$1 = (function (){var statearr_11418 = state_11413;
(statearr_11418[(10)] = inst_11383);

return statearr_11418;
})();
var statearr_11419_11444 = state_11413__$1;
(statearr_11419_11444[(2)] = null);

(statearr_11419_11444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11414 === (4))){
var inst_11383 = (state_11413[(10)]);
var state_11413__$1 = state_11413;
return cljs.core.async.ioc_alts_BANG_.call(null,state_11413__$1,(7),inst_11383);
} else {
if((state_val_11414 === (6))){
var inst_11409 = (state_11413[(2)]);
var state_11413__$1 = state_11413;
var statearr_11420_11445 = state_11413__$1;
(statearr_11420_11445[(2)] = inst_11409);

(statearr_11420_11445[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11414 === (3))){
var inst_11411 = (state_11413[(2)]);
var state_11413__$1 = state_11413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11413__$1,inst_11411);
} else {
if((state_val_11414 === (2))){
var inst_11383 = (state_11413[(10)]);
var inst_11385 = cljs.core.count.call(null,inst_11383);
var inst_11386 = (inst_11385 > (0));
var state_11413__$1 = state_11413;
if(cljs.core.truth_(inst_11386)){
var statearr_11422_11446 = state_11413__$1;
(statearr_11422_11446[(1)] = (4));

} else {
var statearr_11423_11447 = state_11413__$1;
(statearr_11423_11447[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11414 === (11))){
var inst_11383 = (state_11413[(10)]);
var inst_11402 = (state_11413[(2)]);
var tmp11421 = inst_11383;
var inst_11383__$1 = tmp11421;
var state_11413__$1 = (function (){var statearr_11424 = state_11413;
(statearr_11424[(11)] = inst_11402);

(statearr_11424[(10)] = inst_11383__$1);

return statearr_11424;
})();
var statearr_11425_11448 = state_11413__$1;
(statearr_11425_11448[(2)] = null);

(statearr_11425_11448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11414 === (9))){
var inst_11393 = (state_11413[(8)]);
var state_11413__$1 = state_11413;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11413__$1,(11),out,inst_11393);
} else {
if((state_val_11414 === (5))){
var inst_11407 = cljs.core.async.close_BANG_.call(null,out);
var state_11413__$1 = state_11413;
var statearr_11426_11449 = state_11413__$1;
(statearr_11426_11449[(2)] = inst_11407);

(statearr_11426_11449[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11414 === (10))){
var inst_11405 = (state_11413[(2)]);
var state_11413__$1 = state_11413;
var statearr_11427_11450 = state_11413__$1;
(statearr_11427_11450[(2)] = inst_11405);

(statearr_11427_11450[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11414 === (8))){
var inst_11392 = (state_11413[(7)]);
var inst_11383 = (state_11413[(10)]);
var inst_11394 = (state_11413[(9)]);
var inst_11393 = (state_11413[(8)]);
var inst_11397 = (function (){var cs = inst_11383;
var vec__11388 = inst_11392;
var v = inst_11393;
var c = inst_11394;
return ((function (cs,vec__11388,v,c,inst_11392,inst_11383,inst_11394,inst_11393,state_val_11414,c__9287__auto___11441,out){
return (function (p1__11378_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__11378_SHARP_);
});
;})(cs,vec__11388,v,c,inst_11392,inst_11383,inst_11394,inst_11393,state_val_11414,c__9287__auto___11441,out))
})();
var inst_11398 = cljs.core.filterv.call(null,inst_11397,inst_11383);
var inst_11383__$1 = inst_11398;
var state_11413__$1 = (function (){var statearr_11428 = state_11413;
(statearr_11428[(10)] = inst_11383__$1);

return statearr_11428;
})();
var statearr_11429_11451 = state_11413__$1;
(statearr_11429_11451[(2)] = null);

(statearr_11429_11451[(1)] = (2));


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
});})(c__9287__auto___11441,out))
;
return ((function (switch__9175__auto__,c__9287__auto___11441,out){
return (function() {
var cljs$core$async$state_machine__9176__auto__ = null;
var cljs$core$async$state_machine__9176__auto____0 = (function (){
var statearr_11433 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11433[(0)] = cljs$core$async$state_machine__9176__auto__);

(statearr_11433[(1)] = (1));

return statearr_11433;
});
var cljs$core$async$state_machine__9176__auto____1 = (function (state_11413){
while(true){
var ret_value__9177__auto__ = (function (){try{while(true){
var result__9178__auto__ = switch__9175__auto__.call(null,state_11413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9178__auto__;
}
break;
}
}catch (e11434){if((e11434 instanceof Object)){
var ex__9179__auto__ = e11434;
var statearr_11435_11452 = state_11413;
(statearr_11435_11452[(5)] = ex__9179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11453 = state_11413;
state_11413 = G__11453;
continue;
} else {
return ret_value__9177__auto__;
}
break;
}
});
cljs$core$async$state_machine__9176__auto__ = function(state_11413){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9176__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9176__auto____1.call(this,state_11413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9176__auto____0;
cljs$core$async$state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9176__auto____1;
return cljs$core$async$state_machine__9176__auto__;
})()
;})(switch__9175__auto__,c__9287__auto___11441,out))
})();
var state__9289__auto__ = (function (){var statearr_11436 = f__9288__auto__.call(null);
(statearr_11436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9287__auto___11441);

return statearr_11436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9289__auto__);
});})(c__9287__auto___11441,out))
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
var args11454 = [];
var len__7774__auto___11503 = arguments.length;
var i__7775__auto___11504 = (0);
while(true){
if((i__7775__auto___11504 < len__7774__auto___11503)){
args11454.push((arguments[i__7775__auto___11504]));

var G__11505 = (i__7775__auto___11504 + (1));
i__7775__auto___11504 = G__11505;
continue;
} else {
}
break;
}

var G__11456 = args11454.length;
switch (G__11456) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11454.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9287__auto___11507 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9287__auto___11507,out){
return (function (){
var f__9288__auto__ = (function (){var switch__9175__auto__ = ((function (c__9287__auto___11507,out){
return (function (state_11480){
var state_val_11481 = (state_11480[(1)]);
if((state_val_11481 === (7))){
var inst_11462 = (state_11480[(7)]);
var inst_11462__$1 = (state_11480[(2)]);
var inst_11463 = (inst_11462__$1 == null);
var inst_11464 = cljs.core.not.call(null,inst_11463);
var state_11480__$1 = (function (){var statearr_11482 = state_11480;
(statearr_11482[(7)] = inst_11462__$1);

return statearr_11482;
})();
if(inst_11464){
var statearr_11483_11508 = state_11480__$1;
(statearr_11483_11508[(1)] = (8));

} else {
var statearr_11484_11509 = state_11480__$1;
(statearr_11484_11509[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11481 === (1))){
var inst_11457 = (0);
var state_11480__$1 = (function (){var statearr_11485 = state_11480;
(statearr_11485[(8)] = inst_11457);

return statearr_11485;
})();
var statearr_11486_11510 = state_11480__$1;
(statearr_11486_11510[(2)] = null);

(statearr_11486_11510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11481 === (4))){
var state_11480__$1 = state_11480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11480__$1,(7),ch);
} else {
if((state_val_11481 === (6))){
var inst_11475 = (state_11480[(2)]);
var state_11480__$1 = state_11480;
var statearr_11487_11511 = state_11480__$1;
(statearr_11487_11511[(2)] = inst_11475);

(statearr_11487_11511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11481 === (3))){
var inst_11477 = (state_11480[(2)]);
var inst_11478 = cljs.core.async.close_BANG_.call(null,out);
var state_11480__$1 = (function (){var statearr_11488 = state_11480;
(statearr_11488[(9)] = inst_11477);

return statearr_11488;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11480__$1,inst_11478);
} else {
if((state_val_11481 === (2))){
var inst_11457 = (state_11480[(8)]);
var inst_11459 = (inst_11457 < n);
var state_11480__$1 = state_11480;
if(cljs.core.truth_(inst_11459)){
var statearr_11489_11512 = state_11480__$1;
(statearr_11489_11512[(1)] = (4));

} else {
var statearr_11490_11513 = state_11480__$1;
(statearr_11490_11513[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11481 === (11))){
var inst_11457 = (state_11480[(8)]);
var inst_11467 = (state_11480[(2)]);
var inst_11468 = (inst_11457 + (1));
var inst_11457__$1 = inst_11468;
var state_11480__$1 = (function (){var statearr_11491 = state_11480;
(statearr_11491[(8)] = inst_11457__$1);

(statearr_11491[(10)] = inst_11467);

return statearr_11491;
})();
var statearr_11492_11514 = state_11480__$1;
(statearr_11492_11514[(2)] = null);

(statearr_11492_11514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11481 === (9))){
var state_11480__$1 = state_11480;
var statearr_11493_11515 = state_11480__$1;
(statearr_11493_11515[(2)] = null);

(statearr_11493_11515[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11481 === (5))){
var state_11480__$1 = state_11480;
var statearr_11494_11516 = state_11480__$1;
(statearr_11494_11516[(2)] = null);

(statearr_11494_11516[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11481 === (10))){
var inst_11472 = (state_11480[(2)]);
var state_11480__$1 = state_11480;
var statearr_11495_11517 = state_11480__$1;
(statearr_11495_11517[(2)] = inst_11472);

(statearr_11495_11517[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11481 === (8))){
var inst_11462 = (state_11480[(7)]);
var state_11480__$1 = state_11480;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11480__$1,(11),out,inst_11462);
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
});})(c__9287__auto___11507,out))
;
return ((function (switch__9175__auto__,c__9287__auto___11507,out){
return (function() {
var cljs$core$async$state_machine__9176__auto__ = null;
var cljs$core$async$state_machine__9176__auto____0 = (function (){
var statearr_11499 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11499[(0)] = cljs$core$async$state_machine__9176__auto__);

(statearr_11499[(1)] = (1));

return statearr_11499;
});
var cljs$core$async$state_machine__9176__auto____1 = (function (state_11480){
while(true){
var ret_value__9177__auto__ = (function (){try{while(true){
var result__9178__auto__ = switch__9175__auto__.call(null,state_11480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9178__auto__;
}
break;
}
}catch (e11500){if((e11500 instanceof Object)){
var ex__9179__auto__ = e11500;
var statearr_11501_11518 = state_11480;
(statearr_11501_11518[(5)] = ex__9179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11519 = state_11480;
state_11480 = G__11519;
continue;
} else {
return ret_value__9177__auto__;
}
break;
}
});
cljs$core$async$state_machine__9176__auto__ = function(state_11480){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9176__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9176__auto____1.call(this,state_11480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9176__auto____0;
cljs$core$async$state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9176__auto____1;
return cljs$core$async$state_machine__9176__auto__;
})()
;})(switch__9175__auto__,c__9287__auto___11507,out))
})();
var state__9289__auto__ = (function (){var statearr_11502 = f__9288__auto__.call(null);
(statearr_11502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9287__auto___11507);

return statearr_11502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9289__auto__);
});})(c__9287__auto___11507,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async11527 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11527 = (function (f,ch,meta11528){
this.f = f;
this.ch = ch;
this.meta11528 = meta11528;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11529,meta11528__$1){
var self__ = this;
var _11529__$1 = this;
return (new cljs.core.async.t_cljs$core$async11527(self__.f,self__.ch,meta11528__$1));
});

cljs.core.async.t_cljs$core$async11527.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11529){
var self__ = this;
var _11529__$1 = this;
return self__.meta11528;
});

cljs.core.async.t_cljs$core$async11527.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11527.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11527.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11527.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11527.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async11530 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11530 = (function (f,ch,meta11528,_,fn1,meta11531){
this.f = f;
this.ch = ch;
this.meta11528 = meta11528;
this._ = _;
this.fn1 = fn1;
this.meta11531 = meta11531;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11532,meta11531__$1){
var self__ = this;
var _11532__$1 = this;
return (new cljs.core.async.t_cljs$core$async11530(self__.f,self__.ch,self__.meta11528,self__._,self__.fn1,meta11531__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async11530.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11532){
var self__ = this;
var _11532__$1 = this;
return self__.meta11531;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11530.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11530.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11530.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11530.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__11520_SHARP_){
return f1.call(null,(((p1__11520_SHARP_ == null))?null:self__.f.call(null,p1__11520_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async11530.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11528","meta11528",1315082172,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async11527","cljs.core.async/t_cljs$core$async11527",-39211234,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta11531","meta11531",856556692,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11530.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11530.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11530";

cljs.core.async.t_cljs$core$async11530.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7272__auto__,writer__7273__auto__,opt__7274__auto__){
return cljs.core._write.call(null,writer__7273__auto__,"cljs.core.async/t_cljs$core$async11530");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async11530 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11530(f__$1,ch__$1,meta11528__$1,___$2,fn1__$1,meta11531){
return (new cljs.core.async.t_cljs$core$async11530(f__$1,ch__$1,meta11528__$1,___$2,fn1__$1,meta11531));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async11530(self__.f,self__.ch,self__.meta11528,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6654__auto__ = ret;
if(cljs.core.truth_(and__6654__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6654__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async11527.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11527.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async11527.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11528","meta11528",1315082172,null)], null);
});

cljs.core.async.t_cljs$core$async11527.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11527.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11527";

cljs.core.async.t_cljs$core$async11527.cljs$lang$ctorPrWriter = (function (this__7272__auto__,writer__7273__auto__,opt__7274__auto__){
return cljs.core._write.call(null,writer__7273__auto__,"cljs.core.async/t_cljs$core$async11527");
});

cljs.core.async.__GT_t_cljs$core$async11527 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11527(f__$1,ch__$1,meta11528){
return (new cljs.core.async.t_cljs$core$async11527(f__$1,ch__$1,meta11528));
});

}

return (new cljs.core.async.t_cljs$core$async11527(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async11536 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11536 = (function (f,ch,meta11537){
this.f = f;
this.ch = ch;
this.meta11537 = meta11537;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11538,meta11537__$1){
var self__ = this;
var _11538__$1 = this;
return (new cljs.core.async.t_cljs$core$async11536(self__.f,self__.ch,meta11537__$1));
});

cljs.core.async.t_cljs$core$async11536.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11538){
var self__ = this;
var _11538__$1 = this;
return self__.meta11537;
});

cljs.core.async.t_cljs$core$async11536.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11536.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11536.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11536.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11536.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11536.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async11536.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11537","meta11537",-217105377,null)], null);
});

cljs.core.async.t_cljs$core$async11536.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11536.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11536";

cljs.core.async.t_cljs$core$async11536.cljs$lang$ctorPrWriter = (function (this__7272__auto__,writer__7273__auto__,opt__7274__auto__){
return cljs.core._write.call(null,writer__7273__auto__,"cljs.core.async/t_cljs$core$async11536");
});

cljs.core.async.__GT_t_cljs$core$async11536 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async11536(f__$1,ch__$1,meta11537){
return (new cljs.core.async.t_cljs$core$async11536(f__$1,ch__$1,meta11537));
});

}

return (new cljs.core.async.t_cljs$core$async11536(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async11542 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11542 = (function (p,ch,meta11543){
this.p = p;
this.ch = ch;
this.meta11543 = meta11543;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11542.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11544,meta11543__$1){
var self__ = this;
var _11544__$1 = this;
return (new cljs.core.async.t_cljs$core$async11542(self__.p,self__.ch,meta11543__$1));
});

cljs.core.async.t_cljs$core$async11542.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11544){
var self__ = this;
var _11544__$1 = this;
return self__.meta11543;
});

cljs.core.async.t_cljs$core$async11542.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11542.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11542.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11542.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11542.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11542.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11542.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async11542.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11543","meta11543",977844198,null)], null);
});

cljs.core.async.t_cljs$core$async11542.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11542.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11542";

cljs.core.async.t_cljs$core$async11542.cljs$lang$ctorPrWriter = (function (this__7272__auto__,writer__7273__auto__,opt__7274__auto__){
return cljs.core._write.call(null,writer__7273__auto__,"cljs.core.async/t_cljs$core$async11542");
});

cljs.core.async.__GT_t_cljs$core$async11542 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async11542(p__$1,ch__$1,meta11543){
return (new cljs.core.async.t_cljs$core$async11542(p__$1,ch__$1,meta11543));
});

}

return (new cljs.core.async.t_cljs$core$async11542(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args11545 = [];
var len__7774__auto___11589 = arguments.length;
var i__7775__auto___11590 = (0);
while(true){
if((i__7775__auto___11590 < len__7774__auto___11589)){
args11545.push((arguments[i__7775__auto___11590]));

var G__11591 = (i__7775__auto___11590 + (1));
i__7775__auto___11590 = G__11591;
continue;
} else {
}
break;
}

var G__11547 = args11545.length;
switch (G__11547) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11545.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9287__auto___11593 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9287__auto___11593,out){
return (function (){
var f__9288__auto__ = (function (){var switch__9175__auto__ = ((function (c__9287__auto___11593,out){
return (function (state_11568){
var state_val_11569 = (state_11568[(1)]);
if((state_val_11569 === (7))){
var inst_11564 = (state_11568[(2)]);
var state_11568__$1 = state_11568;
var statearr_11570_11594 = state_11568__$1;
(statearr_11570_11594[(2)] = inst_11564);

(statearr_11570_11594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11569 === (1))){
var state_11568__$1 = state_11568;
var statearr_11571_11595 = state_11568__$1;
(statearr_11571_11595[(2)] = null);

(statearr_11571_11595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11569 === (4))){
var inst_11550 = (state_11568[(7)]);
var inst_11550__$1 = (state_11568[(2)]);
var inst_11551 = (inst_11550__$1 == null);
var state_11568__$1 = (function (){var statearr_11572 = state_11568;
(statearr_11572[(7)] = inst_11550__$1);

return statearr_11572;
})();
if(cljs.core.truth_(inst_11551)){
var statearr_11573_11596 = state_11568__$1;
(statearr_11573_11596[(1)] = (5));

} else {
var statearr_11574_11597 = state_11568__$1;
(statearr_11574_11597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11569 === (6))){
var inst_11550 = (state_11568[(7)]);
var inst_11555 = p.call(null,inst_11550);
var state_11568__$1 = state_11568;
if(cljs.core.truth_(inst_11555)){
var statearr_11575_11598 = state_11568__$1;
(statearr_11575_11598[(1)] = (8));

} else {
var statearr_11576_11599 = state_11568__$1;
(statearr_11576_11599[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11569 === (3))){
var inst_11566 = (state_11568[(2)]);
var state_11568__$1 = state_11568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11568__$1,inst_11566);
} else {
if((state_val_11569 === (2))){
var state_11568__$1 = state_11568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11568__$1,(4),ch);
} else {
if((state_val_11569 === (11))){
var inst_11558 = (state_11568[(2)]);
var state_11568__$1 = state_11568;
var statearr_11577_11600 = state_11568__$1;
(statearr_11577_11600[(2)] = inst_11558);

(statearr_11577_11600[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11569 === (9))){
var state_11568__$1 = state_11568;
var statearr_11578_11601 = state_11568__$1;
(statearr_11578_11601[(2)] = null);

(statearr_11578_11601[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11569 === (5))){
var inst_11553 = cljs.core.async.close_BANG_.call(null,out);
var state_11568__$1 = state_11568;
var statearr_11579_11602 = state_11568__$1;
(statearr_11579_11602[(2)] = inst_11553);

(statearr_11579_11602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11569 === (10))){
var inst_11561 = (state_11568[(2)]);
var state_11568__$1 = (function (){var statearr_11580 = state_11568;
(statearr_11580[(8)] = inst_11561);

return statearr_11580;
})();
var statearr_11581_11603 = state_11568__$1;
(statearr_11581_11603[(2)] = null);

(statearr_11581_11603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11569 === (8))){
var inst_11550 = (state_11568[(7)]);
var state_11568__$1 = state_11568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11568__$1,(11),out,inst_11550);
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
});})(c__9287__auto___11593,out))
;
return ((function (switch__9175__auto__,c__9287__auto___11593,out){
return (function() {
var cljs$core$async$state_machine__9176__auto__ = null;
var cljs$core$async$state_machine__9176__auto____0 = (function (){
var statearr_11585 = [null,null,null,null,null,null,null,null,null];
(statearr_11585[(0)] = cljs$core$async$state_machine__9176__auto__);

(statearr_11585[(1)] = (1));

return statearr_11585;
});
var cljs$core$async$state_machine__9176__auto____1 = (function (state_11568){
while(true){
var ret_value__9177__auto__ = (function (){try{while(true){
var result__9178__auto__ = switch__9175__auto__.call(null,state_11568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9178__auto__;
}
break;
}
}catch (e11586){if((e11586 instanceof Object)){
var ex__9179__auto__ = e11586;
var statearr_11587_11604 = state_11568;
(statearr_11587_11604[(5)] = ex__9179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11605 = state_11568;
state_11568 = G__11605;
continue;
} else {
return ret_value__9177__auto__;
}
break;
}
});
cljs$core$async$state_machine__9176__auto__ = function(state_11568){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9176__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9176__auto____1.call(this,state_11568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9176__auto____0;
cljs$core$async$state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9176__auto____1;
return cljs$core$async$state_machine__9176__auto__;
})()
;})(switch__9175__auto__,c__9287__auto___11593,out))
})();
var state__9289__auto__ = (function (){var statearr_11588 = f__9288__auto__.call(null);
(statearr_11588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9287__auto___11593);

return statearr_11588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9289__auto__);
});})(c__9287__auto___11593,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args11606 = [];
var len__7774__auto___11609 = arguments.length;
var i__7775__auto___11610 = (0);
while(true){
if((i__7775__auto___11610 < len__7774__auto___11609)){
args11606.push((arguments[i__7775__auto___11610]));

var G__11611 = (i__7775__auto___11610 + (1));
i__7775__auto___11610 = G__11611;
continue;
} else {
}
break;
}

var G__11608 = args11606.length;
switch (G__11608) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11606.length)].join('')));

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
var c__9287__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9287__auto__){
return (function (){
var f__9288__auto__ = (function (){var switch__9175__auto__ = ((function (c__9287__auto__){
return (function (state_11778){
var state_val_11779 = (state_11778[(1)]);
if((state_val_11779 === (7))){
var inst_11774 = (state_11778[(2)]);
var state_11778__$1 = state_11778;
var statearr_11780_11821 = state_11778__$1;
(statearr_11780_11821[(2)] = inst_11774);

(statearr_11780_11821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11779 === (20))){
var inst_11744 = (state_11778[(7)]);
var inst_11755 = (state_11778[(2)]);
var inst_11756 = cljs.core.next.call(null,inst_11744);
var inst_11730 = inst_11756;
var inst_11731 = null;
var inst_11732 = (0);
var inst_11733 = (0);
var state_11778__$1 = (function (){var statearr_11781 = state_11778;
(statearr_11781[(8)] = inst_11755);

(statearr_11781[(9)] = inst_11732);

(statearr_11781[(10)] = inst_11730);

(statearr_11781[(11)] = inst_11731);

(statearr_11781[(12)] = inst_11733);

return statearr_11781;
})();
var statearr_11782_11822 = state_11778__$1;
(statearr_11782_11822[(2)] = null);

(statearr_11782_11822[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11779 === (1))){
var state_11778__$1 = state_11778;
var statearr_11783_11823 = state_11778__$1;
(statearr_11783_11823[(2)] = null);

(statearr_11783_11823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11779 === (4))){
var inst_11719 = (state_11778[(13)]);
var inst_11719__$1 = (state_11778[(2)]);
var inst_11720 = (inst_11719__$1 == null);
var state_11778__$1 = (function (){var statearr_11784 = state_11778;
(statearr_11784[(13)] = inst_11719__$1);

return statearr_11784;
})();
if(cljs.core.truth_(inst_11720)){
var statearr_11785_11824 = state_11778__$1;
(statearr_11785_11824[(1)] = (5));

} else {
var statearr_11786_11825 = state_11778__$1;
(statearr_11786_11825[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11779 === (15))){
var state_11778__$1 = state_11778;
var statearr_11790_11826 = state_11778__$1;
(statearr_11790_11826[(2)] = null);

(statearr_11790_11826[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11779 === (21))){
var state_11778__$1 = state_11778;
var statearr_11791_11827 = state_11778__$1;
(statearr_11791_11827[(2)] = null);

(statearr_11791_11827[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11779 === (13))){
var inst_11732 = (state_11778[(9)]);
var inst_11730 = (state_11778[(10)]);
var inst_11731 = (state_11778[(11)]);
var inst_11733 = (state_11778[(12)]);
var inst_11740 = (state_11778[(2)]);
var inst_11741 = (inst_11733 + (1));
var tmp11787 = inst_11732;
var tmp11788 = inst_11730;
var tmp11789 = inst_11731;
var inst_11730__$1 = tmp11788;
var inst_11731__$1 = tmp11789;
var inst_11732__$1 = tmp11787;
var inst_11733__$1 = inst_11741;
var state_11778__$1 = (function (){var statearr_11792 = state_11778;
(statearr_11792[(9)] = inst_11732__$1);

(statearr_11792[(10)] = inst_11730__$1);

(statearr_11792[(14)] = inst_11740);

(statearr_11792[(11)] = inst_11731__$1);

(statearr_11792[(12)] = inst_11733__$1);

return statearr_11792;
})();
var statearr_11793_11828 = state_11778__$1;
(statearr_11793_11828[(2)] = null);

(statearr_11793_11828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11779 === (22))){
var state_11778__$1 = state_11778;
var statearr_11794_11829 = state_11778__$1;
(statearr_11794_11829[(2)] = null);

(statearr_11794_11829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11779 === (6))){
var inst_11719 = (state_11778[(13)]);
var inst_11728 = f.call(null,inst_11719);
var inst_11729 = cljs.core.seq.call(null,inst_11728);
var inst_11730 = inst_11729;
var inst_11731 = null;
var inst_11732 = (0);
var inst_11733 = (0);
var state_11778__$1 = (function (){var statearr_11795 = state_11778;
(statearr_11795[(9)] = inst_11732);

(statearr_11795[(10)] = inst_11730);

(statearr_11795[(11)] = inst_11731);

(statearr_11795[(12)] = inst_11733);

return statearr_11795;
})();
var statearr_11796_11830 = state_11778__$1;
(statearr_11796_11830[(2)] = null);

(statearr_11796_11830[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11779 === (17))){
var inst_11744 = (state_11778[(7)]);
var inst_11748 = cljs.core.chunk_first.call(null,inst_11744);
var inst_11749 = cljs.core.chunk_rest.call(null,inst_11744);
var inst_11750 = cljs.core.count.call(null,inst_11748);
var inst_11730 = inst_11749;
var inst_11731 = inst_11748;
var inst_11732 = inst_11750;
var inst_11733 = (0);
var state_11778__$1 = (function (){var statearr_11797 = state_11778;
(statearr_11797[(9)] = inst_11732);

(statearr_11797[(10)] = inst_11730);

(statearr_11797[(11)] = inst_11731);

(statearr_11797[(12)] = inst_11733);

return statearr_11797;
})();
var statearr_11798_11831 = state_11778__$1;
(statearr_11798_11831[(2)] = null);

(statearr_11798_11831[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11779 === (3))){
var inst_11776 = (state_11778[(2)]);
var state_11778__$1 = state_11778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11778__$1,inst_11776);
} else {
if((state_val_11779 === (12))){
var inst_11764 = (state_11778[(2)]);
var state_11778__$1 = state_11778;
var statearr_11799_11832 = state_11778__$1;
(statearr_11799_11832[(2)] = inst_11764);

(statearr_11799_11832[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11779 === (2))){
var state_11778__$1 = state_11778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11778__$1,(4),in$);
} else {
if((state_val_11779 === (23))){
var inst_11772 = (state_11778[(2)]);
var state_11778__$1 = state_11778;
var statearr_11800_11833 = state_11778__$1;
(statearr_11800_11833[(2)] = inst_11772);

(statearr_11800_11833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11779 === (19))){
var inst_11759 = (state_11778[(2)]);
var state_11778__$1 = state_11778;
var statearr_11801_11834 = state_11778__$1;
(statearr_11801_11834[(2)] = inst_11759);

(statearr_11801_11834[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11779 === (11))){
var inst_11744 = (state_11778[(7)]);
var inst_11730 = (state_11778[(10)]);
var inst_11744__$1 = cljs.core.seq.call(null,inst_11730);
var state_11778__$1 = (function (){var statearr_11802 = state_11778;
(statearr_11802[(7)] = inst_11744__$1);

return statearr_11802;
})();
if(inst_11744__$1){
var statearr_11803_11835 = state_11778__$1;
(statearr_11803_11835[(1)] = (14));

} else {
var statearr_11804_11836 = state_11778__$1;
(statearr_11804_11836[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11779 === (9))){
var inst_11766 = (state_11778[(2)]);
var inst_11767 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_11778__$1 = (function (){var statearr_11805 = state_11778;
(statearr_11805[(15)] = inst_11766);

return statearr_11805;
})();
if(cljs.core.truth_(inst_11767)){
var statearr_11806_11837 = state_11778__$1;
(statearr_11806_11837[(1)] = (21));

} else {
var statearr_11807_11838 = state_11778__$1;
(statearr_11807_11838[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11779 === (5))){
var inst_11722 = cljs.core.async.close_BANG_.call(null,out);
var state_11778__$1 = state_11778;
var statearr_11808_11839 = state_11778__$1;
(statearr_11808_11839[(2)] = inst_11722);

(statearr_11808_11839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11779 === (14))){
var inst_11744 = (state_11778[(7)]);
var inst_11746 = cljs.core.chunked_seq_QMARK_.call(null,inst_11744);
var state_11778__$1 = state_11778;
if(inst_11746){
var statearr_11809_11840 = state_11778__$1;
(statearr_11809_11840[(1)] = (17));

} else {
var statearr_11810_11841 = state_11778__$1;
(statearr_11810_11841[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11779 === (16))){
var inst_11762 = (state_11778[(2)]);
var state_11778__$1 = state_11778;
var statearr_11811_11842 = state_11778__$1;
(statearr_11811_11842[(2)] = inst_11762);

(statearr_11811_11842[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11779 === (10))){
var inst_11731 = (state_11778[(11)]);
var inst_11733 = (state_11778[(12)]);
var inst_11738 = cljs.core._nth.call(null,inst_11731,inst_11733);
var state_11778__$1 = state_11778;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11778__$1,(13),out,inst_11738);
} else {
if((state_val_11779 === (18))){
var inst_11744 = (state_11778[(7)]);
var inst_11753 = cljs.core.first.call(null,inst_11744);
var state_11778__$1 = state_11778;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11778__$1,(20),out,inst_11753);
} else {
if((state_val_11779 === (8))){
var inst_11732 = (state_11778[(9)]);
var inst_11733 = (state_11778[(12)]);
var inst_11735 = (inst_11733 < inst_11732);
var inst_11736 = inst_11735;
var state_11778__$1 = state_11778;
if(cljs.core.truth_(inst_11736)){
var statearr_11812_11843 = state_11778__$1;
(statearr_11812_11843[(1)] = (10));

} else {
var statearr_11813_11844 = state_11778__$1;
(statearr_11813_11844[(1)] = (11));

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
});})(c__9287__auto__))
;
return ((function (switch__9175__auto__,c__9287__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__9176__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__9176__auto____0 = (function (){
var statearr_11817 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11817[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__9176__auto__);

(statearr_11817[(1)] = (1));

return statearr_11817;
});
var cljs$core$async$mapcat_STAR__$_state_machine__9176__auto____1 = (function (state_11778){
while(true){
var ret_value__9177__auto__ = (function (){try{while(true){
var result__9178__auto__ = switch__9175__auto__.call(null,state_11778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9178__auto__;
}
break;
}
}catch (e11818){if((e11818 instanceof Object)){
var ex__9179__auto__ = e11818;
var statearr_11819_11845 = state_11778;
(statearr_11819_11845[(5)] = ex__9179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11846 = state_11778;
state_11778 = G__11846;
continue;
} else {
return ret_value__9177__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__9176__auto__ = function(state_11778){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__9176__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__9176__auto____1.call(this,state_11778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__9176__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__9176__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__9176__auto__;
})()
;})(switch__9175__auto__,c__9287__auto__))
})();
var state__9289__auto__ = (function (){var statearr_11820 = f__9288__auto__.call(null);
(statearr_11820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9287__auto__);

return statearr_11820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9289__auto__);
});})(c__9287__auto__))
);

return c__9287__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args11847 = [];
var len__7774__auto___11850 = arguments.length;
var i__7775__auto___11851 = (0);
while(true){
if((i__7775__auto___11851 < len__7774__auto___11850)){
args11847.push((arguments[i__7775__auto___11851]));

var G__11852 = (i__7775__auto___11851 + (1));
i__7775__auto___11851 = G__11852;
continue;
} else {
}
break;
}

var G__11849 = args11847.length;
switch (G__11849) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11847.length)].join('')));

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
var args11854 = [];
var len__7774__auto___11857 = arguments.length;
var i__7775__auto___11858 = (0);
while(true){
if((i__7775__auto___11858 < len__7774__auto___11857)){
args11854.push((arguments[i__7775__auto___11858]));

var G__11859 = (i__7775__auto___11858 + (1));
i__7775__auto___11858 = G__11859;
continue;
} else {
}
break;
}

var G__11856 = args11854.length;
switch (G__11856) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11854.length)].join('')));

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
var args11861 = [];
var len__7774__auto___11912 = arguments.length;
var i__7775__auto___11913 = (0);
while(true){
if((i__7775__auto___11913 < len__7774__auto___11912)){
args11861.push((arguments[i__7775__auto___11913]));

var G__11914 = (i__7775__auto___11913 + (1));
i__7775__auto___11913 = G__11914;
continue;
} else {
}
break;
}

var G__11863 = args11861.length;
switch (G__11863) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11861.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9287__auto___11916 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9287__auto___11916,out){
return (function (){
var f__9288__auto__ = (function (){var switch__9175__auto__ = ((function (c__9287__auto___11916,out){
return (function (state_11887){
var state_val_11888 = (state_11887[(1)]);
if((state_val_11888 === (7))){
var inst_11882 = (state_11887[(2)]);
var state_11887__$1 = state_11887;
var statearr_11889_11917 = state_11887__$1;
(statearr_11889_11917[(2)] = inst_11882);

(statearr_11889_11917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (1))){
var inst_11864 = null;
var state_11887__$1 = (function (){var statearr_11890 = state_11887;
(statearr_11890[(7)] = inst_11864);

return statearr_11890;
})();
var statearr_11891_11918 = state_11887__$1;
(statearr_11891_11918[(2)] = null);

(statearr_11891_11918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (4))){
var inst_11867 = (state_11887[(8)]);
var inst_11867__$1 = (state_11887[(2)]);
var inst_11868 = (inst_11867__$1 == null);
var inst_11869 = cljs.core.not.call(null,inst_11868);
var state_11887__$1 = (function (){var statearr_11892 = state_11887;
(statearr_11892[(8)] = inst_11867__$1);

return statearr_11892;
})();
if(inst_11869){
var statearr_11893_11919 = state_11887__$1;
(statearr_11893_11919[(1)] = (5));

} else {
var statearr_11894_11920 = state_11887__$1;
(statearr_11894_11920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (6))){
var state_11887__$1 = state_11887;
var statearr_11895_11921 = state_11887__$1;
(statearr_11895_11921[(2)] = null);

(statearr_11895_11921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (3))){
var inst_11884 = (state_11887[(2)]);
var inst_11885 = cljs.core.async.close_BANG_.call(null,out);
var state_11887__$1 = (function (){var statearr_11896 = state_11887;
(statearr_11896[(9)] = inst_11884);

return statearr_11896;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11887__$1,inst_11885);
} else {
if((state_val_11888 === (2))){
var state_11887__$1 = state_11887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11887__$1,(4),ch);
} else {
if((state_val_11888 === (11))){
var inst_11867 = (state_11887[(8)]);
var inst_11876 = (state_11887[(2)]);
var inst_11864 = inst_11867;
var state_11887__$1 = (function (){var statearr_11897 = state_11887;
(statearr_11897[(7)] = inst_11864);

(statearr_11897[(10)] = inst_11876);

return statearr_11897;
})();
var statearr_11898_11922 = state_11887__$1;
(statearr_11898_11922[(2)] = null);

(statearr_11898_11922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (9))){
var inst_11867 = (state_11887[(8)]);
var state_11887__$1 = state_11887;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11887__$1,(11),out,inst_11867);
} else {
if((state_val_11888 === (5))){
var inst_11864 = (state_11887[(7)]);
var inst_11867 = (state_11887[(8)]);
var inst_11871 = cljs.core._EQ_.call(null,inst_11867,inst_11864);
var state_11887__$1 = state_11887;
if(inst_11871){
var statearr_11900_11923 = state_11887__$1;
(statearr_11900_11923[(1)] = (8));

} else {
var statearr_11901_11924 = state_11887__$1;
(statearr_11901_11924[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (10))){
var inst_11879 = (state_11887[(2)]);
var state_11887__$1 = state_11887;
var statearr_11902_11925 = state_11887__$1;
(statearr_11902_11925[(2)] = inst_11879);

(statearr_11902_11925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (8))){
var inst_11864 = (state_11887[(7)]);
var tmp11899 = inst_11864;
var inst_11864__$1 = tmp11899;
var state_11887__$1 = (function (){var statearr_11903 = state_11887;
(statearr_11903[(7)] = inst_11864__$1);

return statearr_11903;
})();
var statearr_11904_11926 = state_11887__$1;
(statearr_11904_11926[(2)] = null);

(statearr_11904_11926[(1)] = (2));


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
});})(c__9287__auto___11916,out))
;
return ((function (switch__9175__auto__,c__9287__auto___11916,out){
return (function() {
var cljs$core$async$state_machine__9176__auto__ = null;
var cljs$core$async$state_machine__9176__auto____0 = (function (){
var statearr_11908 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11908[(0)] = cljs$core$async$state_machine__9176__auto__);

(statearr_11908[(1)] = (1));

return statearr_11908;
});
var cljs$core$async$state_machine__9176__auto____1 = (function (state_11887){
while(true){
var ret_value__9177__auto__ = (function (){try{while(true){
var result__9178__auto__ = switch__9175__auto__.call(null,state_11887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9178__auto__;
}
break;
}
}catch (e11909){if((e11909 instanceof Object)){
var ex__9179__auto__ = e11909;
var statearr_11910_11927 = state_11887;
(statearr_11910_11927[(5)] = ex__9179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11928 = state_11887;
state_11887 = G__11928;
continue;
} else {
return ret_value__9177__auto__;
}
break;
}
});
cljs$core$async$state_machine__9176__auto__ = function(state_11887){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9176__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9176__auto____1.call(this,state_11887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9176__auto____0;
cljs$core$async$state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9176__auto____1;
return cljs$core$async$state_machine__9176__auto__;
})()
;})(switch__9175__auto__,c__9287__auto___11916,out))
})();
var state__9289__auto__ = (function (){var statearr_11911 = f__9288__auto__.call(null);
(statearr_11911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9287__auto___11916);

return statearr_11911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9289__auto__);
});})(c__9287__auto___11916,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args11929 = [];
var len__7774__auto___11999 = arguments.length;
var i__7775__auto___12000 = (0);
while(true){
if((i__7775__auto___12000 < len__7774__auto___11999)){
args11929.push((arguments[i__7775__auto___12000]));

var G__12001 = (i__7775__auto___12000 + (1));
i__7775__auto___12000 = G__12001;
continue;
} else {
}
break;
}

var G__11931 = args11929.length;
switch (G__11931) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11929.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9287__auto___12003 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9287__auto___12003,out){
return (function (){
var f__9288__auto__ = (function (){var switch__9175__auto__ = ((function (c__9287__auto___12003,out){
return (function (state_11969){
var state_val_11970 = (state_11969[(1)]);
if((state_val_11970 === (7))){
var inst_11965 = (state_11969[(2)]);
var state_11969__$1 = state_11969;
var statearr_11971_12004 = state_11969__$1;
(statearr_11971_12004[(2)] = inst_11965);

(statearr_11971_12004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11970 === (1))){
var inst_11932 = (new Array(n));
var inst_11933 = inst_11932;
var inst_11934 = (0);
var state_11969__$1 = (function (){var statearr_11972 = state_11969;
(statearr_11972[(7)] = inst_11934);

(statearr_11972[(8)] = inst_11933);

return statearr_11972;
})();
var statearr_11973_12005 = state_11969__$1;
(statearr_11973_12005[(2)] = null);

(statearr_11973_12005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11970 === (4))){
var inst_11937 = (state_11969[(9)]);
var inst_11937__$1 = (state_11969[(2)]);
var inst_11938 = (inst_11937__$1 == null);
var inst_11939 = cljs.core.not.call(null,inst_11938);
var state_11969__$1 = (function (){var statearr_11974 = state_11969;
(statearr_11974[(9)] = inst_11937__$1);

return statearr_11974;
})();
if(inst_11939){
var statearr_11975_12006 = state_11969__$1;
(statearr_11975_12006[(1)] = (5));

} else {
var statearr_11976_12007 = state_11969__$1;
(statearr_11976_12007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11970 === (15))){
var inst_11959 = (state_11969[(2)]);
var state_11969__$1 = state_11969;
var statearr_11977_12008 = state_11969__$1;
(statearr_11977_12008[(2)] = inst_11959);

(statearr_11977_12008[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11970 === (13))){
var state_11969__$1 = state_11969;
var statearr_11978_12009 = state_11969__$1;
(statearr_11978_12009[(2)] = null);

(statearr_11978_12009[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11970 === (6))){
var inst_11934 = (state_11969[(7)]);
var inst_11955 = (inst_11934 > (0));
var state_11969__$1 = state_11969;
if(cljs.core.truth_(inst_11955)){
var statearr_11979_12010 = state_11969__$1;
(statearr_11979_12010[(1)] = (12));

} else {
var statearr_11980_12011 = state_11969__$1;
(statearr_11980_12011[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11970 === (3))){
var inst_11967 = (state_11969[(2)]);
var state_11969__$1 = state_11969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11969__$1,inst_11967);
} else {
if((state_val_11970 === (12))){
var inst_11933 = (state_11969[(8)]);
var inst_11957 = cljs.core.vec.call(null,inst_11933);
var state_11969__$1 = state_11969;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11969__$1,(15),out,inst_11957);
} else {
if((state_val_11970 === (2))){
var state_11969__$1 = state_11969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11969__$1,(4),ch);
} else {
if((state_val_11970 === (11))){
var inst_11949 = (state_11969[(2)]);
var inst_11950 = (new Array(n));
var inst_11933 = inst_11950;
var inst_11934 = (0);
var state_11969__$1 = (function (){var statearr_11981 = state_11969;
(statearr_11981[(10)] = inst_11949);

(statearr_11981[(7)] = inst_11934);

(statearr_11981[(8)] = inst_11933);

return statearr_11981;
})();
var statearr_11982_12012 = state_11969__$1;
(statearr_11982_12012[(2)] = null);

(statearr_11982_12012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11970 === (9))){
var inst_11933 = (state_11969[(8)]);
var inst_11947 = cljs.core.vec.call(null,inst_11933);
var state_11969__$1 = state_11969;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11969__$1,(11),out,inst_11947);
} else {
if((state_val_11970 === (5))){
var inst_11934 = (state_11969[(7)]);
var inst_11937 = (state_11969[(9)]);
var inst_11933 = (state_11969[(8)]);
var inst_11942 = (state_11969[(11)]);
var inst_11941 = (inst_11933[inst_11934] = inst_11937);
var inst_11942__$1 = (inst_11934 + (1));
var inst_11943 = (inst_11942__$1 < n);
var state_11969__$1 = (function (){var statearr_11983 = state_11969;
(statearr_11983[(12)] = inst_11941);

(statearr_11983[(11)] = inst_11942__$1);

return statearr_11983;
})();
if(cljs.core.truth_(inst_11943)){
var statearr_11984_12013 = state_11969__$1;
(statearr_11984_12013[(1)] = (8));

} else {
var statearr_11985_12014 = state_11969__$1;
(statearr_11985_12014[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11970 === (14))){
var inst_11962 = (state_11969[(2)]);
var inst_11963 = cljs.core.async.close_BANG_.call(null,out);
var state_11969__$1 = (function (){var statearr_11987 = state_11969;
(statearr_11987[(13)] = inst_11962);

return statearr_11987;
})();
var statearr_11988_12015 = state_11969__$1;
(statearr_11988_12015[(2)] = inst_11963);

(statearr_11988_12015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11970 === (10))){
var inst_11953 = (state_11969[(2)]);
var state_11969__$1 = state_11969;
var statearr_11989_12016 = state_11969__$1;
(statearr_11989_12016[(2)] = inst_11953);

(statearr_11989_12016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11970 === (8))){
var inst_11933 = (state_11969[(8)]);
var inst_11942 = (state_11969[(11)]);
var tmp11986 = inst_11933;
var inst_11933__$1 = tmp11986;
var inst_11934 = inst_11942;
var state_11969__$1 = (function (){var statearr_11990 = state_11969;
(statearr_11990[(7)] = inst_11934);

(statearr_11990[(8)] = inst_11933__$1);

return statearr_11990;
})();
var statearr_11991_12017 = state_11969__$1;
(statearr_11991_12017[(2)] = null);

(statearr_11991_12017[(1)] = (2));


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
});})(c__9287__auto___12003,out))
;
return ((function (switch__9175__auto__,c__9287__auto___12003,out){
return (function() {
var cljs$core$async$state_machine__9176__auto__ = null;
var cljs$core$async$state_machine__9176__auto____0 = (function (){
var statearr_11995 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11995[(0)] = cljs$core$async$state_machine__9176__auto__);

(statearr_11995[(1)] = (1));

return statearr_11995;
});
var cljs$core$async$state_machine__9176__auto____1 = (function (state_11969){
while(true){
var ret_value__9177__auto__ = (function (){try{while(true){
var result__9178__auto__ = switch__9175__auto__.call(null,state_11969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9178__auto__;
}
break;
}
}catch (e11996){if((e11996 instanceof Object)){
var ex__9179__auto__ = e11996;
var statearr_11997_12018 = state_11969;
(statearr_11997_12018[(5)] = ex__9179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12019 = state_11969;
state_11969 = G__12019;
continue;
} else {
return ret_value__9177__auto__;
}
break;
}
});
cljs$core$async$state_machine__9176__auto__ = function(state_11969){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9176__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9176__auto____1.call(this,state_11969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9176__auto____0;
cljs$core$async$state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9176__auto____1;
return cljs$core$async$state_machine__9176__auto__;
})()
;})(switch__9175__auto__,c__9287__auto___12003,out))
})();
var state__9289__auto__ = (function (){var statearr_11998 = f__9288__auto__.call(null);
(statearr_11998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9287__auto___12003);

return statearr_11998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9289__auto__);
});})(c__9287__auto___12003,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args12020 = [];
var len__7774__auto___12094 = arguments.length;
var i__7775__auto___12095 = (0);
while(true){
if((i__7775__auto___12095 < len__7774__auto___12094)){
args12020.push((arguments[i__7775__auto___12095]));

var G__12096 = (i__7775__auto___12095 + (1));
i__7775__auto___12095 = G__12096;
continue;
} else {
}
break;
}

var G__12022 = args12020.length;
switch (G__12022) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12020.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9287__auto___12098 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9287__auto___12098,out){
return (function (){
var f__9288__auto__ = (function (){var switch__9175__auto__ = ((function (c__9287__auto___12098,out){
return (function (state_12064){
var state_val_12065 = (state_12064[(1)]);
if((state_val_12065 === (7))){
var inst_12060 = (state_12064[(2)]);
var state_12064__$1 = state_12064;
var statearr_12066_12099 = state_12064__$1;
(statearr_12066_12099[(2)] = inst_12060);

(statearr_12066_12099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12065 === (1))){
var inst_12023 = [];
var inst_12024 = inst_12023;
var inst_12025 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12064__$1 = (function (){var statearr_12067 = state_12064;
(statearr_12067[(7)] = inst_12025);

(statearr_12067[(8)] = inst_12024);

return statearr_12067;
})();
var statearr_12068_12100 = state_12064__$1;
(statearr_12068_12100[(2)] = null);

(statearr_12068_12100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12065 === (4))){
var inst_12028 = (state_12064[(9)]);
var inst_12028__$1 = (state_12064[(2)]);
var inst_12029 = (inst_12028__$1 == null);
var inst_12030 = cljs.core.not.call(null,inst_12029);
var state_12064__$1 = (function (){var statearr_12069 = state_12064;
(statearr_12069[(9)] = inst_12028__$1);

return statearr_12069;
})();
if(inst_12030){
var statearr_12070_12101 = state_12064__$1;
(statearr_12070_12101[(1)] = (5));

} else {
var statearr_12071_12102 = state_12064__$1;
(statearr_12071_12102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12065 === (15))){
var inst_12054 = (state_12064[(2)]);
var state_12064__$1 = state_12064;
var statearr_12072_12103 = state_12064__$1;
(statearr_12072_12103[(2)] = inst_12054);

(statearr_12072_12103[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12065 === (13))){
var state_12064__$1 = state_12064;
var statearr_12073_12104 = state_12064__$1;
(statearr_12073_12104[(2)] = null);

(statearr_12073_12104[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12065 === (6))){
var inst_12024 = (state_12064[(8)]);
var inst_12049 = inst_12024.length;
var inst_12050 = (inst_12049 > (0));
var state_12064__$1 = state_12064;
if(cljs.core.truth_(inst_12050)){
var statearr_12074_12105 = state_12064__$1;
(statearr_12074_12105[(1)] = (12));

} else {
var statearr_12075_12106 = state_12064__$1;
(statearr_12075_12106[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12065 === (3))){
var inst_12062 = (state_12064[(2)]);
var state_12064__$1 = state_12064;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12064__$1,inst_12062);
} else {
if((state_val_12065 === (12))){
var inst_12024 = (state_12064[(8)]);
var inst_12052 = cljs.core.vec.call(null,inst_12024);
var state_12064__$1 = state_12064;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12064__$1,(15),out,inst_12052);
} else {
if((state_val_12065 === (2))){
var state_12064__$1 = state_12064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12064__$1,(4),ch);
} else {
if((state_val_12065 === (11))){
var inst_12032 = (state_12064[(10)]);
var inst_12028 = (state_12064[(9)]);
var inst_12042 = (state_12064[(2)]);
var inst_12043 = [];
var inst_12044 = inst_12043.push(inst_12028);
var inst_12024 = inst_12043;
var inst_12025 = inst_12032;
var state_12064__$1 = (function (){var statearr_12076 = state_12064;
(statearr_12076[(11)] = inst_12042);

(statearr_12076[(12)] = inst_12044);

(statearr_12076[(7)] = inst_12025);

(statearr_12076[(8)] = inst_12024);

return statearr_12076;
})();
var statearr_12077_12107 = state_12064__$1;
(statearr_12077_12107[(2)] = null);

(statearr_12077_12107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12065 === (9))){
var inst_12024 = (state_12064[(8)]);
var inst_12040 = cljs.core.vec.call(null,inst_12024);
var state_12064__$1 = state_12064;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12064__$1,(11),out,inst_12040);
} else {
if((state_val_12065 === (5))){
var inst_12032 = (state_12064[(10)]);
var inst_12025 = (state_12064[(7)]);
var inst_12028 = (state_12064[(9)]);
var inst_12032__$1 = f.call(null,inst_12028);
var inst_12033 = cljs.core._EQ_.call(null,inst_12032__$1,inst_12025);
var inst_12034 = cljs.core.keyword_identical_QMARK_.call(null,inst_12025,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12035 = (inst_12033) || (inst_12034);
var state_12064__$1 = (function (){var statearr_12078 = state_12064;
(statearr_12078[(10)] = inst_12032__$1);

return statearr_12078;
})();
if(cljs.core.truth_(inst_12035)){
var statearr_12079_12108 = state_12064__$1;
(statearr_12079_12108[(1)] = (8));

} else {
var statearr_12080_12109 = state_12064__$1;
(statearr_12080_12109[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12065 === (14))){
var inst_12057 = (state_12064[(2)]);
var inst_12058 = cljs.core.async.close_BANG_.call(null,out);
var state_12064__$1 = (function (){var statearr_12082 = state_12064;
(statearr_12082[(13)] = inst_12057);

return statearr_12082;
})();
var statearr_12083_12110 = state_12064__$1;
(statearr_12083_12110[(2)] = inst_12058);

(statearr_12083_12110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12065 === (10))){
var inst_12047 = (state_12064[(2)]);
var state_12064__$1 = state_12064;
var statearr_12084_12111 = state_12064__$1;
(statearr_12084_12111[(2)] = inst_12047);

(statearr_12084_12111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12065 === (8))){
var inst_12032 = (state_12064[(10)]);
var inst_12024 = (state_12064[(8)]);
var inst_12028 = (state_12064[(9)]);
var inst_12037 = inst_12024.push(inst_12028);
var tmp12081 = inst_12024;
var inst_12024__$1 = tmp12081;
var inst_12025 = inst_12032;
var state_12064__$1 = (function (){var statearr_12085 = state_12064;
(statearr_12085[(7)] = inst_12025);

(statearr_12085[(8)] = inst_12024__$1);

(statearr_12085[(14)] = inst_12037);

return statearr_12085;
})();
var statearr_12086_12112 = state_12064__$1;
(statearr_12086_12112[(2)] = null);

(statearr_12086_12112[(1)] = (2));


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
});})(c__9287__auto___12098,out))
;
return ((function (switch__9175__auto__,c__9287__auto___12098,out){
return (function() {
var cljs$core$async$state_machine__9176__auto__ = null;
var cljs$core$async$state_machine__9176__auto____0 = (function (){
var statearr_12090 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12090[(0)] = cljs$core$async$state_machine__9176__auto__);

(statearr_12090[(1)] = (1));

return statearr_12090;
});
var cljs$core$async$state_machine__9176__auto____1 = (function (state_12064){
while(true){
var ret_value__9177__auto__ = (function (){try{while(true){
var result__9178__auto__ = switch__9175__auto__.call(null,state_12064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9178__auto__;
}
break;
}
}catch (e12091){if((e12091 instanceof Object)){
var ex__9179__auto__ = e12091;
var statearr_12092_12113 = state_12064;
(statearr_12092_12113[(5)] = ex__9179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12114 = state_12064;
state_12064 = G__12114;
continue;
} else {
return ret_value__9177__auto__;
}
break;
}
});
cljs$core$async$state_machine__9176__auto__ = function(state_12064){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9176__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9176__auto____1.call(this,state_12064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9176__auto____0;
cljs$core$async$state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9176__auto____1;
return cljs$core$async$state_machine__9176__auto__;
})()
;})(switch__9175__auto__,c__9287__auto___12098,out))
})();
var state__9289__auto__ = (function (){var statearr_12093 = f__9288__auto__.call(null);
(statearr_12093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9287__auto___12098);

return statearr_12093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9289__auto__);
});})(c__9287__auto___12098,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map