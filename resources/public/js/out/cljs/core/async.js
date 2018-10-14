// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14373 = arguments.length;
switch (G__14373) {
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
if(typeof cljs.core.async.t_cljs$core$async14374 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14374 = (function (f,blockable,meta14375){
this.f = f;
this.blockable = blockable;
this.meta14375 = meta14375;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14376,meta14375__$1){
var self__ = this;
var _14376__$1 = this;
return (new cljs.core.async.t_cljs$core$async14374(self__.f,self__.blockable,meta14375__$1));
});

cljs.core.async.t_cljs$core$async14374.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14376){
var self__ = this;
var _14376__$1 = this;
return self__.meta14375;
});

cljs.core.async.t_cljs$core$async14374.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14374.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14374.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async14374.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async14374.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14375","meta14375",-1945410088,null)], null);
});

cljs.core.async.t_cljs$core$async14374.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14374.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14374";

cljs.core.async.t_cljs$core$async14374.cljs$lang$ctorPrWriter = (function (this__9572__auto__,writer__9573__auto__,opt__9574__auto__){
return cljs.core._write.call(null,writer__9573__auto__,"cljs.core.async/t_cljs$core$async14374");
});

cljs.core.async.__GT_t_cljs$core$async14374 = (function cljs$core$async$__GT_t_cljs$core$async14374(f__$1,blockable__$1,meta14375){
return (new cljs.core.async.t_cljs$core$async14374(f__$1,blockable__$1,meta14375));
});

}

return (new cljs.core.async.t_cljs$core$async14374(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__14380 = arguments.length;
switch (G__14380) {
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
var G__14383 = arguments.length;
switch (G__14383) {
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
var G__14386 = arguments.length;
switch (G__14386) {
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
var val_14388 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_14388);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_14388,ret){
return (function (){
return fn1.call(null,val_14388);
});})(val_14388,ret))
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
var G__14390 = arguments.length;
switch (G__14390) {
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
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
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
var n__9946__auto___14392 = n;
var x_14393 = (0);
while(true){
if((x_14393 < n__9946__auto___14392)){
(a[x_14393] = (0));

var G__14394 = (x_14393 + (1));
x_14393 = G__14394;
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

var G__14395 = (i + (1));
i = G__14395;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async14396 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14396 = (function (flag,meta14397){
this.flag = flag;
this.meta14397 = meta14397;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14398,meta14397__$1){
var self__ = this;
var _14398__$1 = this;
return (new cljs.core.async.t_cljs$core$async14396(self__.flag,meta14397__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async14396.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14398){
var self__ = this;
var _14398__$1 = this;
return self__.meta14397;
});})(flag))
;

cljs.core.async.t_cljs$core$async14396.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14396.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async14396.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async14396.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async14396.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14397","meta14397",1045440440,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async14396.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14396.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14396";

cljs.core.async.t_cljs$core$async14396.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__9572__auto__,writer__9573__auto__,opt__9574__auto__){
return cljs.core._write.call(null,writer__9573__auto__,"cljs.core.async/t_cljs$core$async14396");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async14396 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async14396(flag__$1,meta14397){
return (new cljs.core.async.t_cljs$core$async14396(flag__$1,meta14397));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async14396(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async14399 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14399 = (function (flag,cb,meta14400){
this.flag = flag;
this.cb = cb;
this.meta14400 = meta14400;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14401,meta14400__$1){
var self__ = this;
var _14401__$1 = this;
return (new cljs.core.async.t_cljs$core$async14399(self__.flag,self__.cb,meta14400__$1));
});

cljs.core.async.t_cljs$core$async14399.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14401){
var self__ = this;
var _14401__$1 = this;
return self__.meta14400;
});

cljs.core.async.t_cljs$core$async14399.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14399.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async14399.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14399.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async14399.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14400","meta14400",491250982,null)], null);
});

cljs.core.async.t_cljs$core$async14399.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14399.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14399";

cljs.core.async.t_cljs$core$async14399.cljs$lang$ctorPrWriter = (function (this__9572__auto__,writer__9573__auto__,opt__9574__auto__){
return cljs.core._write.call(null,writer__9573__auto__,"cljs.core.async/t_cljs$core$async14399");
});

cljs.core.async.__GT_t_cljs$core$async14399 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async14399(flag__$1,cb__$1,meta14400){
return (new cljs.core.async.t_cljs$core$async14399(flag__$1,cb__$1,meta14400));
});

}

return (new cljs.core.async.t_cljs$core$async14399(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__14402_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14402_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14403_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14403_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__8901__auto__ = wport;
if(cljs.core.truth_(or__8901__auto__)){
return or__8901__auto__;
} else {
return port;
}
})()], null));
} else {
var G__14404 = (i + (1));
i = G__14404;
continue;
}
} else {
return null;
}
break;
}
})();
var or__8901__auto__ = ret;
if(cljs.core.truth_(or__8901__auto__)){
return or__8901__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__8889__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__8889__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__8889__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
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
var args__10187__auto__ = [];
var len__10180__auto___14410 = arguments.length;
var i__10181__auto___14411 = (0);
while(true){
if((i__10181__auto___14411 < len__10180__auto___14410)){
args__10187__auto__.push((arguments[i__10181__auto___14411]));

var G__14412 = (i__10181__auto___14411 + (1));
i__10181__auto___14411 = G__14412;
continue;
} else {
}
break;
}

var argseq__10188__auto__ = ((((1) < args__10187__auto__.length))?(new cljs.core.IndexedSeq(args__10187__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10188__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14407){
var map__14408 = p__14407;
var map__14408__$1 = ((((!((map__14408 == null)))?((((map__14408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14408.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14408):map__14408);
var opts = map__14408__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14405){
var G__14406 = cljs.core.first.call(null,seq14405);
var seq14405__$1 = cljs.core.next.call(null,seq14405);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14406,seq14405__$1);
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
var G__14414 = arguments.length;
switch (G__14414) {
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
var c__14313__auto___14460 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14313__auto___14460){
return (function (){
var f__14314__auto__ = (function (){var switch__14223__auto__ = ((function (c__14313__auto___14460){
return (function (state_14438){
var state_val_14439 = (state_14438[(1)]);
if((state_val_14439 === (7))){
var inst_14434 = (state_14438[(2)]);
var state_14438__$1 = state_14438;
var statearr_14440_14461 = state_14438__$1;
(statearr_14440_14461[(2)] = inst_14434);

(statearr_14440_14461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (1))){
var state_14438__$1 = state_14438;
var statearr_14441_14462 = state_14438__$1;
(statearr_14441_14462[(2)] = null);

(statearr_14441_14462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (4))){
var inst_14417 = (state_14438[(7)]);
var inst_14417__$1 = (state_14438[(2)]);
var inst_14418 = (inst_14417__$1 == null);
var state_14438__$1 = (function (){var statearr_14442 = state_14438;
(statearr_14442[(7)] = inst_14417__$1);

return statearr_14442;
})();
if(cljs.core.truth_(inst_14418)){
var statearr_14443_14463 = state_14438__$1;
(statearr_14443_14463[(1)] = (5));

} else {
var statearr_14444_14464 = state_14438__$1;
(statearr_14444_14464[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (13))){
var state_14438__$1 = state_14438;
var statearr_14445_14465 = state_14438__$1;
(statearr_14445_14465[(2)] = null);

(statearr_14445_14465[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (6))){
var inst_14417 = (state_14438[(7)]);
var state_14438__$1 = state_14438;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14438__$1,(11),to,inst_14417);
} else {
if((state_val_14439 === (3))){
var inst_14436 = (state_14438[(2)]);
var state_14438__$1 = state_14438;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14438__$1,inst_14436);
} else {
if((state_val_14439 === (12))){
var state_14438__$1 = state_14438;
var statearr_14446_14466 = state_14438__$1;
(statearr_14446_14466[(2)] = null);

(statearr_14446_14466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (2))){
var state_14438__$1 = state_14438;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14438__$1,(4),from);
} else {
if((state_val_14439 === (11))){
var inst_14427 = (state_14438[(2)]);
var state_14438__$1 = state_14438;
if(cljs.core.truth_(inst_14427)){
var statearr_14447_14467 = state_14438__$1;
(statearr_14447_14467[(1)] = (12));

} else {
var statearr_14448_14468 = state_14438__$1;
(statearr_14448_14468[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (9))){
var state_14438__$1 = state_14438;
var statearr_14449_14469 = state_14438__$1;
(statearr_14449_14469[(2)] = null);

(statearr_14449_14469[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (5))){
var state_14438__$1 = state_14438;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14450_14470 = state_14438__$1;
(statearr_14450_14470[(1)] = (8));

} else {
var statearr_14451_14471 = state_14438__$1;
(statearr_14451_14471[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (14))){
var inst_14432 = (state_14438[(2)]);
var state_14438__$1 = state_14438;
var statearr_14452_14472 = state_14438__$1;
(statearr_14452_14472[(2)] = inst_14432);

(statearr_14452_14472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (10))){
var inst_14424 = (state_14438[(2)]);
var state_14438__$1 = state_14438;
var statearr_14453_14473 = state_14438__$1;
(statearr_14453_14473[(2)] = inst_14424);

(statearr_14453_14473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (8))){
var inst_14421 = cljs.core.async.close_BANG_.call(null,to);
var state_14438__$1 = state_14438;
var statearr_14454_14474 = state_14438__$1;
(statearr_14454_14474[(2)] = inst_14421);

(statearr_14454_14474[(1)] = (10));


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
});})(c__14313__auto___14460))
;
return ((function (switch__14223__auto__,c__14313__auto___14460){
return (function() {
var cljs$core$async$state_machine__14224__auto__ = null;
var cljs$core$async$state_machine__14224__auto____0 = (function (){
var statearr_14455 = [null,null,null,null,null,null,null,null];
(statearr_14455[(0)] = cljs$core$async$state_machine__14224__auto__);

(statearr_14455[(1)] = (1));

return statearr_14455;
});
var cljs$core$async$state_machine__14224__auto____1 = (function (state_14438){
while(true){
var ret_value__14225__auto__ = (function (){try{while(true){
var result__14226__auto__ = switch__14223__auto__.call(null,state_14438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14226__auto__;
}
break;
}
}catch (e14456){if((e14456 instanceof Object)){
var ex__14227__auto__ = e14456;
var statearr_14457_14475 = state_14438;
(statearr_14457_14475[(5)] = ex__14227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14476 = state_14438;
state_14438 = G__14476;
continue;
} else {
return ret_value__14225__auto__;
}
break;
}
});
cljs$core$async$state_machine__14224__auto__ = function(state_14438){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14224__auto____1.call(this,state_14438);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14224__auto____0;
cljs$core$async$state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14224__auto____1;
return cljs$core$async$state_machine__14224__auto__;
})()
;})(switch__14223__auto__,c__14313__auto___14460))
})();
var state__14315__auto__ = (function (){var statearr_14458 = f__14314__auto__.call(null);
(statearr_14458[(6)] = c__14313__auto___14460);

return statearr_14458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14315__auto__);
});})(c__14313__auto___14460))
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
return (function (p__14477){
var vec__14478 = p__14477;
var v = cljs.core.nth.call(null,vec__14478,(0),null);
var p = cljs.core.nth.call(null,vec__14478,(1),null);
var job = vec__14478;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__14313__auto___14649 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14313__auto___14649,res,vec__14478,v,p,job,jobs,results){
return (function (){
var f__14314__auto__ = (function (){var switch__14223__auto__ = ((function (c__14313__auto___14649,res,vec__14478,v,p,job,jobs,results){
return (function (state_14485){
var state_val_14486 = (state_14485[(1)]);
if((state_val_14486 === (1))){
var state_14485__$1 = state_14485;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14485__$1,(2),res,v);
} else {
if((state_val_14486 === (2))){
var inst_14482 = (state_14485[(2)]);
var inst_14483 = cljs.core.async.close_BANG_.call(null,res);
var state_14485__$1 = (function (){var statearr_14487 = state_14485;
(statearr_14487[(7)] = inst_14482);

return statearr_14487;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14485__$1,inst_14483);
} else {
return null;
}
}
});})(c__14313__auto___14649,res,vec__14478,v,p,job,jobs,results))
;
return ((function (switch__14223__auto__,c__14313__auto___14649,res,vec__14478,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14224__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14224__auto____0 = (function (){
var statearr_14488 = [null,null,null,null,null,null,null,null];
(statearr_14488[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14224__auto__);

(statearr_14488[(1)] = (1));

return statearr_14488;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14224__auto____1 = (function (state_14485){
while(true){
var ret_value__14225__auto__ = (function (){try{while(true){
var result__14226__auto__ = switch__14223__auto__.call(null,state_14485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14226__auto__;
}
break;
}
}catch (e14489){if((e14489 instanceof Object)){
var ex__14227__auto__ = e14489;
var statearr_14490_14650 = state_14485;
(statearr_14490_14650[(5)] = ex__14227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14651 = state_14485;
state_14485 = G__14651;
continue;
} else {
return ret_value__14225__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14224__auto__ = function(state_14485){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14224__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14224__auto____1.call(this,state_14485);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14224__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14224__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14224__auto__;
})()
;})(switch__14223__auto__,c__14313__auto___14649,res,vec__14478,v,p,job,jobs,results))
})();
var state__14315__auto__ = (function (){var statearr_14491 = f__14314__auto__.call(null);
(statearr_14491[(6)] = c__14313__auto___14649);

return statearr_14491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14315__auto__);
});})(c__14313__auto___14649,res,vec__14478,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__14492){
var vec__14493 = p__14492;
var v = cljs.core.nth.call(null,vec__14493,(0),null);
var p = cljs.core.nth.call(null,vec__14493,(1),null);
var job = vec__14493;
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
var n__9946__auto___14652 = n;
var __14653 = (0);
while(true){
if((__14653 < n__9946__auto___14652)){
var G__14496_14654 = type;
var G__14496_14655__$1 = (((G__14496_14654 instanceof cljs.core.Keyword))?G__14496_14654.fqn:null);
switch (G__14496_14655__$1) {
case "compute":
var c__14313__auto___14657 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14653,c__14313__auto___14657,G__14496_14654,G__14496_14655__$1,n__9946__auto___14652,jobs,results,process,async){
return (function (){
var f__14314__auto__ = (function (){var switch__14223__auto__ = ((function (__14653,c__14313__auto___14657,G__14496_14654,G__14496_14655__$1,n__9946__auto___14652,jobs,results,process,async){
return (function (state_14509){
var state_val_14510 = (state_14509[(1)]);
if((state_val_14510 === (1))){
var state_14509__$1 = state_14509;
var statearr_14511_14658 = state_14509__$1;
(statearr_14511_14658[(2)] = null);

(statearr_14511_14658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14510 === (2))){
var state_14509__$1 = state_14509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14509__$1,(4),jobs);
} else {
if((state_val_14510 === (3))){
var inst_14507 = (state_14509[(2)]);
var state_14509__$1 = state_14509;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14509__$1,inst_14507);
} else {
if((state_val_14510 === (4))){
var inst_14499 = (state_14509[(2)]);
var inst_14500 = process.call(null,inst_14499);
var state_14509__$1 = state_14509;
if(cljs.core.truth_(inst_14500)){
var statearr_14512_14659 = state_14509__$1;
(statearr_14512_14659[(1)] = (5));

} else {
var statearr_14513_14660 = state_14509__$1;
(statearr_14513_14660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14510 === (5))){
var state_14509__$1 = state_14509;
var statearr_14514_14661 = state_14509__$1;
(statearr_14514_14661[(2)] = null);

(statearr_14514_14661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14510 === (6))){
var state_14509__$1 = state_14509;
var statearr_14515_14662 = state_14509__$1;
(statearr_14515_14662[(2)] = null);

(statearr_14515_14662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14510 === (7))){
var inst_14505 = (state_14509[(2)]);
var state_14509__$1 = state_14509;
var statearr_14516_14663 = state_14509__$1;
(statearr_14516_14663[(2)] = inst_14505);

(statearr_14516_14663[(1)] = (3));


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
});})(__14653,c__14313__auto___14657,G__14496_14654,G__14496_14655__$1,n__9946__auto___14652,jobs,results,process,async))
;
return ((function (__14653,switch__14223__auto__,c__14313__auto___14657,G__14496_14654,G__14496_14655__$1,n__9946__auto___14652,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14224__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14224__auto____0 = (function (){
var statearr_14517 = [null,null,null,null,null,null,null];
(statearr_14517[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14224__auto__);

(statearr_14517[(1)] = (1));

return statearr_14517;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14224__auto____1 = (function (state_14509){
while(true){
var ret_value__14225__auto__ = (function (){try{while(true){
var result__14226__auto__ = switch__14223__auto__.call(null,state_14509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14226__auto__;
}
break;
}
}catch (e14518){if((e14518 instanceof Object)){
var ex__14227__auto__ = e14518;
var statearr_14519_14664 = state_14509;
(statearr_14519_14664[(5)] = ex__14227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14665 = state_14509;
state_14509 = G__14665;
continue;
} else {
return ret_value__14225__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14224__auto__ = function(state_14509){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14224__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14224__auto____1.call(this,state_14509);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14224__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14224__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14224__auto__;
})()
;})(__14653,switch__14223__auto__,c__14313__auto___14657,G__14496_14654,G__14496_14655__$1,n__9946__auto___14652,jobs,results,process,async))
})();
var state__14315__auto__ = (function (){var statearr_14520 = f__14314__auto__.call(null);
(statearr_14520[(6)] = c__14313__auto___14657);

return statearr_14520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14315__auto__);
});})(__14653,c__14313__auto___14657,G__14496_14654,G__14496_14655__$1,n__9946__auto___14652,jobs,results,process,async))
);


break;
case "async":
var c__14313__auto___14666 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14653,c__14313__auto___14666,G__14496_14654,G__14496_14655__$1,n__9946__auto___14652,jobs,results,process,async){
return (function (){
var f__14314__auto__ = (function (){var switch__14223__auto__ = ((function (__14653,c__14313__auto___14666,G__14496_14654,G__14496_14655__$1,n__9946__auto___14652,jobs,results,process,async){
return (function (state_14533){
var state_val_14534 = (state_14533[(1)]);
if((state_val_14534 === (1))){
var state_14533__$1 = state_14533;
var statearr_14535_14667 = state_14533__$1;
(statearr_14535_14667[(2)] = null);

(statearr_14535_14667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (2))){
var state_14533__$1 = state_14533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14533__$1,(4),jobs);
} else {
if((state_val_14534 === (3))){
var inst_14531 = (state_14533[(2)]);
var state_14533__$1 = state_14533;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14533__$1,inst_14531);
} else {
if((state_val_14534 === (4))){
var inst_14523 = (state_14533[(2)]);
var inst_14524 = async.call(null,inst_14523);
var state_14533__$1 = state_14533;
if(cljs.core.truth_(inst_14524)){
var statearr_14536_14668 = state_14533__$1;
(statearr_14536_14668[(1)] = (5));

} else {
var statearr_14537_14669 = state_14533__$1;
(statearr_14537_14669[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (5))){
var state_14533__$1 = state_14533;
var statearr_14538_14670 = state_14533__$1;
(statearr_14538_14670[(2)] = null);

(statearr_14538_14670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (6))){
var state_14533__$1 = state_14533;
var statearr_14539_14671 = state_14533__$1;
(statearr_14539_14671[(2)] = null);

(statearr_14539_14671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (7))){
var inst_14529 = (state_14533[(2)]);
var state_14533__$1 = state_14533;
var statearr_14540_14672 = state_14533__$1;
(statearr_14540_14672[(2)] = inst_14529);

(statearr_14540_14672[(1)] = (3));


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
});})(__14653,c__14313__auto___14666,G__14496_14654,G__14496_14655__$1,n__9946__auto___14652,jobs,results,process,async))
;
return ((function (__14653,switch__14223__auto__,c__14313__auto___14666,G__14496_14654,G__14496_14655__$1,n__9946__auto___14652,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14224__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14224__auto____0 = (function (){
var statearr_14541 = [null,null,null,null,null,null,null];
(statearr_14541[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14224__auto__);

(statearr_14541[(1)] = (1));

return statearr_14541;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14224__auto____1 = (function (state_14533){
while(true){
var ret_value__14225__auto__ = (function (){try{while(true){
var result__14226__auto__ = switch__14223__auto__.call(null,state_14533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14226__auto__;
}
break;
}
}catch (e14542){if((e14542 instanceof Object)){
var ex__14227__auto__ = e14542;
var statearr_14543_14673 = state_14533;
(statearr_14543_14673[(5)] = ex__14227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14674 = state_14533;
state_14533 = G__14674;
continue;
} else {
return ret_value__14225__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14224__auto__ = function(state_14533){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14224__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14224__auto____1.call(this,state_14533);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14224__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14224__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14224__auto__;
})()
;})(__14653,switch__14223__auto__,c__14313__auto___14666,G__14496_14654,G__14496_14655__$1,n__9946__auto___14652,jobs,results,process,async))
})();
var state__14315__auto__ = (function (){var statearr_14544 = f__14314__auto__.call(null);
(statearr_14544[(6)] = c__14313__auto___14666);

return statearr_14544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14315__auto__);
});})(__14653,c__14313__auto___14666,G__14496_14654,G__14496_14655__$1,n__9946__auto___14652,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14496_14655__$1)].join('')));

}

var G__14675 = (__14653 + (1));
__14653 = G__14675;
continue;
} else {
}
break;
}

var c__14313__auto___14676 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14313__auto___14676,jobs,results,process,async){
return (function (){
var f__14314__auto__ = (function (){var switch__14223__auto__ = ((function (c__14313__auto___14676,jobs,results,process,async){
return (function (state_14566){
var state_val_14567 = (state_14566[(1)]);
if((state_val_14567 === (1))){
var state_14566__$1 = state_14566;
var statearr_14568_14677 = state_14566__$1;
(statearr_14568_14677[(2)] = null);

(statearr_14568_14677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14567 === (2))){
var state_14566__$1 = state_14566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14566__$1,(4),from);
} else {
if((state_val_14567 === (3))){
var inst_14564 = (state_14566[(2)]);
var state_14566__$1 = state_14566;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14566__$1,inst_14564);
} else {
if((state_val_14567 === (4))){
var inst_14547 = (state_14566[(7)]);
var inst_14547__$1 = (state_14566[(2)]);
var inst_14548 = (inst_14547__$1 == null);
var state_14566__$1 = (function (){var statearr_14569 = state_14566;
(statearr_14569[(7)] = inst_14547__$1);

return statearr_14569;
})();
if(cljs.core.truth_(inst_14548)){
var statearr_14570_14678 = state_14566__$1;
(statearr_14570_14678[(1)] = (5));

} else {
var statearr_14571_14679 = state_14566__$1;
(statearr_14571_14679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14567 === (5))){
var inst_14550 = cljs.core.async.close_BANG_.call(null,jobs);
var state_14566__$1 = state_14566;
var statearr_14572_14680 = state_14566__$1;
(statearr_14572_14680[(2)] = inst_14550);

(statearr_14572_14680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14567 === (6))){
var inst_14552 = (state_14566[(8)]);
var inst_14547 = (state_14566[(7)]);
var inst_14552__$1 = cljs.core.async.chan.call(null,(1));
var inst_14553 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14554 = [inst_14547,inst_14552__$1];
var inst_14555 = (new cljs.core.PersistentVector(null,2,(5),inst_14553,inst_14554,null));
var state_14566__$1 = (function (){var statearr_14573 = state_14566;
(statearr_14573[(8)] = inst_14552__$1);

return statearr_14573;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14566__$1,(8),jobs,inst_14555);
} else {
if((state_val_14567 === (7))){
var inst_14562 = (state_14566[(2)]);
var state_14566__$1 = state_14566;
var statearr_14574_14681 = state_14566__$1;
(statearr_14574_14681[(2)] = inst_14562);

(statearr_14574_14681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14567 === (8))){
var inst_14552 = (state_14566[(8)]);
var inst_14557 = (state_14566[(2)]);
var state_14566__$1 = (function (){var statearr_14575 = state_14566;
(statearr_14575[(9)] = inst_14557);

return statearr_14575;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14566__$1,(9),results,inst_14552);
} else {
if((state_val_14567 === (9))){
var inst_14559 = (state_14566[(2)]);
var state_14566__$1 = (function (){var statearr_14576 = state_14566;
(statearr_14576[(10)] = inst_14559);

return statearr_14576;
})();
var statearr_14577_14682 = state_14566__$1;
(statearr_14577_14682[(2)] = null);

(statearr_14577_14682[(1)] = (2));


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
});})(c__14313__auto___14676,jobs,results,process,async))
;
return ((function (switch__14223__auto__,c__14313__auto___14676,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14224__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14224__auto____0 = (function (){
var statearr_14578 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14578[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14224__auto__);

(statearr_14578[(1)] = (1));

return statearr_14578;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14224__auto____1 = (function (state_14566){
while(true){
var ret_value__14225__auto__ = (function (){try{while(true){
var result__14226__auto__ = switch__14223__auto__.call(null,state_14566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14226__auto__;
}
break;
}
}catch (e14579){if((e14579 instanceof Object)){
var ex__14227__auto__ = e14579;
var statearr_14580_14683 = state_14566;
(statearr_14580_14683[(5)] = ex__14227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14684 = state_14566;
state_14566 = G__14684;
continue;
} else {
return ret_value__14225__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14224__auto__ = function(state_14566){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14224__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14224__auto____1.call(this,state_14566);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14224__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14224__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14224__auto__;
})()
;})(switch__14223__auto__,c__14313__auto___14676,jobs,results,process,async))
})();
var state__14315__auto__ = (function (){var statearr_14581 = f__14314__auto__.call(null);
(statearr_14581[(6)] = c__14313__auto___14676);

return statearr_14581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14315__auto__);
});})(c__14313__auto___14676,jobs,results,process,async))
);


var c__14313__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14313__auto__,jobs,results,process,async){
return (function (){
var f__14314__auto__ = (function (){var switch__14223__auto__ = ((function (c__14313__auto__,jobs,results,process,async){
return (function (state_14619){
var state_val_14620 = (state_14619[(1)]);
if((state_val_14620 === (7))){
var inst_14615 = (state_14619[(2)]);
var state_14619__$1 = state_14619;
var statearr_14621_14685 = state_14619__$1;
(statearr_14621_14685[(2)] = inst_14615);

(statearr_14621_14685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14620 === (20))){
var state_14619__$1 = state_14619;
var statearr_14622_14686 = state_14619__$1;
(statearr_14622_14686[(2)] = null);

(statearr_14622_14686[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14620 === (1))){
var state_14619__$1 = state_14619;
var statearr_14623_14687 = state_14619__$1;
(statearr_14623_14687[(2)] = null);

(statearr_14623_14687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14620 === (4))){
var inst_14584 = (state_14619[(7)]);
var inst_14584__$1 = (state_14619[(2)]);
var inst_14585 = (inst_14584__$1 == null);
var state_14619__$1 = (function (){var statearr_14624 = state_14619;
(statearr_14624[(7)] = inst_14584__$1);

return statearr_14624;
})();
if(cljs.core.truth_(inst_14585)){
var statearr_14625_14688 = state_14619__$1;
(statearr_14625_14688[(1)] = (5));

} else {
var statearr_14626_14689 = state_14619__$1;
(statearr_14626_14689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14620 === (15))){
var inst_14597 = (state_14619[(8)]);
var state_14619__$1 = state_14619;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14619__$1,(18),to,inst_14597);
} else {
if((state_val_14620 === (21))){
var inst_14610 = (state_14619[(2)]);
var state_14619__$1 = state_14619;
var statearr_14627_14690 = state_14619__$1;
(statearr_14627_14690[(2)] = inst_14610);

(statearr_14627_14690[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14620 === (13))){
var inst_14612 = (state_14619[(2)]);
var state_14619__$1 = (function (){var statearr_14628 = state_14619;
(statearr_14628[(9)] = inst_14612);

return statearr_14628;
})();
var statearr_14629_14691 = state_14619__$1;
(statearr_14629_14691[(2)] = null);

(statearr_14629_14691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14620 === (6))){
var inst_14584 = (state_14619[(7)]);
var state_14619__$1 = state_14619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14619__$1,(11),inst_14584);
} else {
if((state_val_14620 === (17))){
var inst_14605 = (state_14619[(2)]);
var state_14619__$1 = state_14619;
if(cljs.core.truth_(inst_14605)){
var statearr_14630_14692 = state_14619__$1;
(statearr_14630_14692[(1)] = (19));

} else {
var statearr_14631_14693 = state_14619__$1;
(statearr_14631_14693[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14620 === (3))){
var inst_14617 = (state_14619[(2)]);
var state_14619__$1 = state_14619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14619__$1,inst_14617);
} else {
if((state_val_14620 === (12))){
var inst_14594 = (state_14619[(10)]);
var state_14619__$1 = state_14619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14619__$1,(14),inst_14594);
} else {
if((state_val_14620 === (2))){
var state_14619__$1 = state_14619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14619__$1,(4),results);
} else {
if((state_val_14620 === (19))){
var state_14619__$1 = state_14619;
var statearr_14632_14694 = state_14619__$1;
(statearr_14632_14694[(2)] = null);

(statearr_14632_14694[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14620 === (11))){
var inst_14594 = (state_14619[(2)]);
var state_14619__$1 = (function (){var statearr_14633 = state_14619;
(statearr_14633[(10)] = inst_14594);

return statearr_14633;
})();
var statearr_14634_14695 = state_14619__$1;
(statearr_14634_14695[(2)] = null);

(statearr_14634_14695[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14620 === (9))){
var state_14619__$1 = state_14619;
var statearr_14635_14696 = state_14619__$1;
(statearr_14635_14696[(2)] = null);

(statearr_14635_14696[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14620 === (5))){
var state_14619__$1 = state_14619;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14636_14697 = state_14619__$1;
(statearr_14636_14697[(1)] = (8));

} else {
var statearr_14637_14698 = state_14619__$1;
(statearr_14637_14698[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14620 === (14))){
var inst_14599 = (state_14619[(11)]);
var inst_14597 = (state_14619[(8)]);
var inst_14597__$1 = (state_14619[(2)]);
var inst_14598 = (inst_14597__$1 == null);
var inst_14599__$1 = cljs.core.not.call(null,inst_14598);
var state_14619__$1 = (function (){var statearr_14638 = state_14619;
(statearr_14638[(11)] = inst_14599__$1);

(statearr_14638[(8)] = inst_14597__$1);

return statearr_14638;
})();
if(inst_14599__$1){
var statearr_14639_14699 = state_14619__$1;
(statearr_14639_14699[(1)] = (15));

} else {
var statearr_14640_14700 = state_14619__$1;
(statearr_14640_14700[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14620 === (16))){
var inst_14599 = (state_14619[(11)]);
var state_14619__$1 = state_14619;
var statearr_14641_14701 = state_14619__$1;
(statearr_14641_14701[(2)] = inst_14599);

(statearr_14641_14701[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14620 === (10))){
var inst_14591 = (state_14619[(2)]);
var state_14619__$1 = state_14619;
var statearr_14642_14702 = state_14619__$1;
(statearr_14642_14702[(2)] = inst_14591);

(statearr_14642_14702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14620 === (18))){
var inst_14602 = (state_14619[(2)]);
var state_14619__$1 = state_14619;
var statearr_14643_14703 = state_14619__$1;
(statearr_14643_14703[(2)] = inst_14602);

(statearr_14643_14703[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14620 === (8))){
var inst_14588 = cljs.core.async.close_BANG_.call(null,to);
var state_14619__$1 = state_14619;
var statearr_14644_14704 = state_14619__$1;
(statearr_14644_14704[(2)] = inst_14588);

(statearr_14644_14704[(1)] = (10));


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
});})(c__14313__auto__,jobs,results,process,async))
;
return ((function (switch__14223__auto__,c__14313__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14224__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14224__auto____0 = (function (){
var statearr_14645 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14645[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14224__auto__);

(statearr_14645[(1)] = (1));

return statearr_14645;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14224__auto____1 = (function (state_14619){
while(true){
var ret_value__14225__auto__ = (function (){try{while(true){
var result__14226__auto__ = switch__14223__auto__.call(null,state_14619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14226__auto__;
}
break;
}
}catch (e14646){if((e14646 instanceof Object)){
var ex__14227__auto__ = e14646;
var statearr_14647_14705 = state_14619;
(statearr_14647_14705[(5)] = ex__14227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14706 = state_14619;
state_14619 = G__14706;
continue;
} else {
return ret_value__14225__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14224__auto__ = function(state_14619){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14224__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14224__auto____1.call(this,state_14619);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14224__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14224__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14224__auto__;
})()
;})(switch__14223__auto__,c__14313__auto__,jobs,results,process,async))
})();
var state__14315__auto__ = (function (){var statearr_14648 = f__14314__auto__.call(null);
(statearr_14648[(6)] = c__14313__auto__);

return statearr_14648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14315__auto__);
});})(c__14313__auto__,jobs,results,process,async))
);

return c__14313__auto__;
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
var G__14708 = arguments.length;
switch (G__14708) {
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
var G__14711 = arguments.length;
switch (G__14711) {
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
var G__14714 = arguments.length;
switch (G__14714) {
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
var c__14313__auto___14763 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14313__auto___14763,tc,fc){
return (function (){
var f__14314__auto__ = (function (){var switch__14223__auto__ = ((function (c__14313__auto___14763,tc,fc){
return (function (state_14740){
var state_val_14741 = (state_14740[(1)]);
if((state_val_14741 === (7))){
var inst_14736 = (state_14740[(2)]);
var state_14740__$1 = state_14740;
var statearr_14742_14764 = state_14740__$1;
(statearr_14742_14764[(2)] = inst_14736);

(statearr_14742_14764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14741 === (1))){
var state_14740__$1 = state_14740;
var statearr_14743_14765 = state_14740__$1;
(statearr_14743_14765[(2)] = null);

(statearr_14743_14765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14741 === (4))){
var inst_14717 = (state_14740[(7)]);
var inst_14717__$1 = (state_14740[(2)]);
var inst_14718 = (inst_14717__$1 == null);
var state_14740__$1 = (function (){var statearr_14744 = state_14740;
(statearr_14744[(7)] = inst_14717__$1);

return statearr_14744;
})();
if(cljs.core.truth_(inst_14718)){
var statearr_14745_14766 = state_14740__$1;
(statearr_14745_14766[(1)] = (5));

} else {
var statearr_14746_14767 = state_14740__$1;
(statearr_14746_14767[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14741 === (13))){
var state_14740__$1 = state_14740;
var statearr_14747_14768 = state_14740__$1;
(statearr_14747_14768[(2)] = null);

(statearr_14747_14768[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14741 === (6))){
var inst_14717 = (state_14740[(7)]);
var inst_14723 = p.call(null,inst_14717);
var state_14740__$1 = state_14740;
if(cljs.core.truth_(inst_14723)){
var statearr_14748_14769 = state_14740__$1;
(statearr_14748_14769[(1)] = (9));

} else {
var statearr_14749_14770 = state_14740__$1;
(statearr_14749_14770[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14741 === (3))){
var inst_14738 = (state_14740[(2)]);
var state_14740__$1 = state_14740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14740__$1,inst_14738);
} else {
if((state_val_14741 === (12))){
var state_14740__$1 = state_14740;
var statearr_14750_14771 = state_14740__$1;
(statearr_14750_14771[(2)] = null);

(statearr_14750_14771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14741 === (2))){
var state_14740__$1 = state_14740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14740__$1,(4),ch);
} else {
if((state_val_14741 === (11))){
var inst_14717 = (state_14740[(7)]);
var inst_14727 = (state_14740[(2)]);
var state_14740__$1 = state_14740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14740__$1,(8),inst_14727,inst_14717);
} else {
if((state_val_14741 === (9))){
var state_14740__$1 = state_14740;
var statearr_14751_14772 = state_14740__$1;
(statearr_14751_14772[(2)] = tc);

(statearr_14751_14772[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14741 === (5))){
var inst_14720 = cljs.core.async.close_BANG_.call(null,tc);
var inst_14721 = cljs.core.async.close_BANG_.call(null,fc);
var state_14740__$1 = (function (){var statearr_14752 = state_14740;
(statearr_14752[(8)] = inst_14720);

return statearr_14752;
})();
var statearr_14753_14773 = state_14740__$1;
(statearr_14753_14773[(2)] = inst_14721);

(statearr_14753_14773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14741 === (14))){
var inst_14734 = (state_14740[(2)]);
var state_14740__$1 = state_14740;
var statearr_14754_14774 = state_14740__$1;
(statearr_14754_14774[(2)] = inst_14734);

(statearr_14754_14774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14741 === (10))){
var state_14740__$1 = state_14740;
var statearr_14755_14775 = state_14740__$1;
(statearr_14755_14775[(2)] = fc);

(statearr_14755_14775[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14741 === (8))){
var inst_14729 = (state_14740[(2)]);
var state_14740__$1 = state_14740;
if(cljs.core.truth_(inst_14729)){
var statearr_14756_14776 = state_14740__$1;
(statearr_14756_14776[(1)] = (12));

} else {
var statearr_14757_14777 = state_14740__$1;
(statearr_14757_14777[(1)] = (13));

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
});})(c__14313__auto___14763,tc,fc))
;
return ((function (switch__14223__auto__,c__14313__auto___14763,tc,fc){
return (function() {
var cljs$core$async$state_machine__14224__auto__ = null;
var cljs$core$async$state_machine__14224__auto____0 = (function (){
var statearr_14758 = [null,null,null,null,null,null,null,null,null];
(statearr_14758[(0)] = cljs$core$async$state_machine__14224__auto__);

(statearr_14758[(1)] = (1));

return statearr_14758;
});
var cljs$core$async$state_machine__14224__auto____1 = (function (state_14740){
while(true){
var ret_value__14225__auto__ = (function (){try{while(true){
var result__14226__auto__ = switch__14223__auto__.call(null,state_14740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14226__auto__;
}
break;
}
}catch (e14759){if((e14759 instanceof Object)){
var ex__14227__auto__ = e14759;
var statearr_14760_14778 = state_14740;
(statearr_14760_14778[(5)] = ex__14227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14779 = state_14740;
state_14740 = G__14779;
continue;
} else {
return ret_value__14225__auto__;
}
break;
}
});
cljs$core$async$state_machine__14224__auto__ = function(state_14740){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14224__auto____1.call(this,state_14740);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14224__auto____0;
cljs$core$async$state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14224__auto____1;
return cljs$core$async$state_machine__14224__auto__;
})()
;})(switch__14223__auto__,c__14313__auto___14763,tc,fc))
})();
var state__14315__auto__ = (function (){var statearr_14761 = f__14314__auto__.call(null);
(statearr_14761[(6)] = c__14313__auto___14763);

return statearr_14761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14315__auto__);
});})(c__14313__auto___14763,tc,fc))
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
var c__14313__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14313__auto__){
return (function (){
var f__14314__auto__ = (function (){var switch__14223__auto__ = ((function (c__14313__auto__){
return (function (state_14800){
var state_val_14801 = (state_14800[(1)]);
if((state_val_14801 === (7))){
var inst_14796 = (state_14800[(2)]);
var state_14800__$1 = state_14800;
var statearr_14802_14820 = state_14800__$1;
(statearr_14802_14820[(2)] = inst_14796);

(statearr_14802_14820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14801 === (1))){
var inst_14780 = init;
var state_14800__$1 = (function (){var statearr_14803 = state_14800;
(statearr_14803[(7)] = inst_14780);

return statearr_14803;
})();
var statearr_14804_14821 = state_14800__$1;
(statearr_14804_14821[(2)] = null);

(statearr_14804_14821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14801 === (4))){
var inst_14783 = (state_14800[(8)]);
var inst_14783__$1 = (state_14800[(2)]);
var inst_14784 = (inst_14783__$1 == null);
var state_14800__$1 = (function (){var statearr_14805 = state_14800;
(statearr_14805[(8)] = inst_14783__$1);

return statearr_14805;
})();
if(cljs.core.truth_(inst_14784)){
var statearr_14806_14822 = state_14800__$1;
(statearr_14806_14822[(1)] = (5));

} else {
var statearr_14807_14823 = state_14800__$1;
(statearr_14807_14823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14801 === (6))){
var inst_14783 = (state_14800[(8)]);
var inst_14787 = (state_14800[(9)]);
var inst_14780 = (state_14800[(7)]);
var inst_14787__$1 = f.call(null,inst_14780,inst_14783);
var inst_14788 = cljs.core.reduced_QMARK_.call(null,inst_14787__$1);
var state_14800__$1 = (function (){var statearr_14808 = state_14800;
(statearr_14808[(9)] = inst_14787__$1);

return statearr_14808;
})();
if(inst_14788){
var statearr_14809_14824 = state_14800__$1;
(statearr_14809_14824[(1)] = (8));

} else {
var statearr_14810_14825 = state_14800__$1;
(statearr_14810_14825[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14801 === (3))){
var inst_14798 = (state_14800[(2)]);
var state_14800__$1 = state_14800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14800__$1,inst_14798);
} else {
if((state_val_14801 === (2))){
var state_14800__$1 = state_14800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14800__$1,(4),ch);
} else {
if((state_val_14801 === (9))){
var inst_14787 = (state_14800[(9)]);
var inst_14780 = inst_14787;
var state_14800__$1 = (function (){var statearr_14811 = state_14800;
(statearr_14811[(7)] = inst_14780);

return statearr_14811;
})();
var statearr_14812_14826 = state_14800__$1;
(statearr_14812_14826[(2)] = null);

(statearr_14812_14826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14801 === (5))){
var inst_14780 = (state_14800[(7)]);
var state_14800__$1 = state_14800;
var statearr_14813_14827 = state_14800__$1;
(statearr_14813_14827[(2)] = inst_14780);

(statearr_14813_14827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14801 === (10))){
var inst_14794 = (state_14800[(2)]);
var state_14800__$1 = state_14800;
var statearr_14814_14828 = state_14800__$1;
(statearr_14814_14828[(2)] = inst_14794);

(statearr_14814_14828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14801 === (8))){
var inst_14787 = (state_14800[(9)]);
var inst_14790 = cljs.core.deref.call(null,inst_14787);
var state_14800__$1 = state_14800;
var statearr_14815_14829 = state_14800__$1;
(statearr_14815_14829[(2)] = inst_14790);

(statearr_14815_14829[(1)] = (10));


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
});})(c__14313__auto__))
;
return ((function (switch__14223__auto__,c__14313__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__14224__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14224__auto____0 = (function (){
var statearr_14816 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14816[(0)] = cljs$core$async$reduce_$_state_machine__14224__auto__);

(statearr_14816[(1)] = (1));

return statearr_14816;
});
var cljs$core$async$reduce_$_state_machine__14224__auto____1 = (function (state_14800){
while(true){
var ret_value__14225__auto__ = (function (){try{while(true){
var result__14226__auto__ = switch__14223__auto__.call(null,state_14800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14226__auto__;
}
break;
}
}catch (e14817){if((e14817 instanceof Object)){
var ex__14227__auto__ = e14817;
var statearr_14818_14830 = state_14800;
(statearr_14818_14830[(5)] = ex__14227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14831 = state_14800;
state_14800 = G__14831;
continue;
} else {
return ret_value__14225__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14224__auto__ = function(state_14800){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14224__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14224__auto____1.call(this,state_14800);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14224__auto____0;
cljs$core$async$reduce_$_state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14224__auto____1;
return cljs$core$async$reduce_$_state_machine__14224__auto__;
})()
;})(switch__14223__auto__,c__14313__auto__))
})();
var state__14315__auto__ = (function (){var statearr_14819 = f__14314__auto__.call(null);
(statearr_14819[(6)] = c__14313__auto__);

return statearr_14819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14315__auto__);
});})(c__14313__auto__))
);

return c__14313__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__14313__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14313__auto__,f__$1){
return (function (){
var f__14314__auto__ = (function (){var switch__14223__auto__ = ((function (c__14313__auto__,f__$1){
return (function (state_14837){
var state_val_14838 = (state_14837[(1)]);
if((state_val_14838 === (1))){
var inst_14832 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_14837__$1 = state_14837;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14837__$1,(2),inst_14832);
} else {
if((state_val_14838 === (2))){
var inst_14834 = (state_14837[(2)]);
var inst_14835 = f__$1.call(null,inst_14834);
var state_14837__$1 = state_14837;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14837__$1,inst_14835);
} else {
return null;
}
}
});})(c__14313__auto__,f__$1))
;
return ((function (switch__14223__auto__,c__14313__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__14224__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14224__auto____0 = (function (){
var statearr_14839 = [null,null,null,null,null,null,null];
(statearr_14839[(0)] = cljs$core$async$transduce_$_state_machine__14224__auto__);

(statearr_14839[(1)] = (1));

return statearr_14839;
});
var cljs$core$async$transduce_$_state_machine__14224__auto____1 = (function (state_14837){
while(true){
var ret_value__14225__auto__ = (function (){try{while(true){
var result__14226__auto__ = switch__14223__auto__.call(null,state_14837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14226__auto__;
}
break;
}
}catch (e14840){if((e14840 instanceof Object)){
var ex__14227__auto__ = e14840;
var statearr_14841_14843 = state_14837;
(statearr_14841_14843[(5)] = ex__14227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14844 = state_14837;
state_14837 = G__14844;
continue;
} else {
return ret_value__14225__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14224__auto__ = function(state_14837){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14224__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14224__auto____1.call(this,state_14837);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14224__auto____0;
cljs$core$async$transduce_$_state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14224__auto____1;
return cljs$core$async$transduce_$_state_machine__14224__auto__;
})()
;})(switch__14223__auto__,c__14313__auto__,f__$1))
})();
var state__14315__auto__ = (function (){var statearr_14842 = f__14314__auto__.call(null);
(statearr_14842[(6)] = c__14313__auto__);

return statearr_14842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14315__auto__);
});})(c__14313__auto__,f__$1))
);

return c__14313__auto__;
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
var G__14846 = arguments.length;
switch (G__14846) {
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
var c__14313__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14313__auto__){
return (function (){
var f__14314__auto__ = (function (){var switch__14223__auto__ = ((function (c__14313__auto__){
return (function (state_14871){
var state_val_14872 = (state_14871[(1)]);
if((state_val_14872 === (7))){
var inst_14853 = (state_14871[(2)]);
var state_14871__$1 = state_14871;
var statearr_14873_14894 = state_14871__$1;
(statearr_14873_14894[(2)] = inst_14853);

(statearr_14873_14894[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (1))){
var inst_14847 = cljs.core.seq.call(null,coll);
var inst_14848 = inst_14847;
var state_14871__$1 = (function (){var statearr_14874 = state_14871;
(statearr_14874[(7)] = inst_14848);

return statearr_14874;
})();
var statearr_14875_14895 = state_14871__$1;
(statearr_14875_14895[(2)] = null);

(statearr_14875_14895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (4))){
var inst_14848 = (state_14871[(7)]);
var inst_14851 = cljs.core.first.call(null,inst_14848);
var state_14871__$1 = state_14871;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14871__$1,(7),ch,inst_14851);
} else {
if((state_val_14872 === (13))){
var inst_14865 = (state_14871[(2)]);
var state_14871__$1 = state_14871;
var statearr_14876_14896 = state_14871__$1;
(statearr_14876_14896[(2)] = inst_14865);

(statearr_14876_14896[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (6))){
var inst_14856 = (state_14871[(2)]);
var state_14871__$1 = state_14871;
if(cljs.core.truth_(inst_14856)){
var statearr_14877_14897 = state_14871__$1;
(statearr_14877_14897[(1)] = (8));

} else {
var statearr_14878_14898 = state_14871__$1;
(statearr_14878_14898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (3))){
var inst_14869 = (state_14871[(2)]);
var state_14871__$1 = state_14871;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14871__$1,inst_14869);
} else {
if((state_val_14872 === (12))){
var state_14871__$1 = state_14871;
var statearr_14879_14899 = state_14871__$1;
(statearr_14879_14899[(2)] = null);

(statearr_14879_14899[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (2))){
var inst_14848 = (state_14871[(7)]);
var state_14871__$1 = state_14871;
if(cljs.core.truth_(inst_14848)){
var statearr_14880_14900 = state_14871__$1;
(statearr_14880_14900[(1)] = (4));

} else {
var statearr_14881_14901 = state_14871__$1;
(statearr_14881_14901[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (11))){
var inst_14862 = cljs.core.async.close_BANG_.call(null,ch);
var state_14871__$1 = state_14871;
var statearr_14882_14902 = state_14871__$1;
(statearr_14882_14902[(2)] = inst_14862);

(statearr_14882_14902[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (9))){
var state_14871__$1 = state_14871;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14883_14903 = state_14871__$1;
(statearr_14883_14903[(1)] = (11));

} else {
var statearr_14884_14904 = state_14871__$1;
(statearr_14884_14904[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (5))){
var inst_14848 = (state_14871[(7)]);
var state_14871__$1 = state_14871;
var statearr_14885_14905 = state_14871__$1;
(statearr_14885_14905[(2)] = inst_14848);

(statearr_14885_14905[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (10))){
var inst_14867 = (state_14871[(2)]);
var state_14871__$1 = state_14871;
var statearr_14886_14906 = state_14871__$1;
(statearr_14886_14906[(2)] = inst_14867);

(statearr_14886_14906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (8))){
var inst_14848 = (state_14871[(7)]);
var inst_14858 = cljs.core.next.call(null,inst_14848);
var inst_14848__$1 = inst_14858;
var state_14871__$1 = (function (){var statearr_14887 = state_14871;
(statearr_14887[(7)] = inst_14848__$1);

return statearr_14887;
})();
var statearr_14888_14907 = state_14871__$1;
(statearr_14888_14907[(2)] = null);

(statearr_14888_14907[(1)] = (2));


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
});})(c__14313__auto__))
;
return ((function (switch__14223__auto__,c__14313__auto__){
return (function() {
var cljs$core$async$state_machine__14224__auto__ = null;
var cljs$core$async$state_machine__14224__auto____0 = (function (){
var statearr_14889 = [null,null,null,null,null,null,null,null];
(statearr_14889[(0)] = cljs$core$async$state_machine__14224__auto__);

(statearr_14889[(1)] = (1));

return statearr_14889;
});
var cljs$core$async$state_machine__14224__auto____1 = (function (state_14871){
while(true){
var ret_value__14225__auto__ = (function (){try{while(true){
var result__14226__auto__ = switch__14223__auto__.call(null,state_14871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14226__auto__;
}
break;
}
}catch (e14890){if((e14890 instanceof Object)){
var ex__14227__auto__ = e14890;
var statearr_14891_14908 = state_14871;
(statearr_14891_14908[(5)] = ex__14227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14909 = state_14871;
state_14871 = G__14909;
continue;
} else {
return ret_value__14225__auto__;
}
break;
}
});
cljs$core$async$state_machine__14224__auto__ = function(state_14871){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14224__auto____1.call(this,state_14871);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14224__auto____0;
cljs$core$async$state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14224__auto____1;
return cljs$core$async$state_machine__14224__auto__;
})()
;})(switch__14223__auto__,c__14313__auto__))
})();
var state__14315__auto__ = (function (){var statearr_14892 = f__14314__auto__.call(null);
(statearr_14892[(6)] = c__14313__auto__);

return statearr_14892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14315__auto__);
});})(c__14313__auto__))
);

return c__14313__auto__;
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
var x__9634__auto__ = (((_ == null))?null:_);
var m__9635__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__9634__auto__)]);
if(!((m__9635__auto__ == null))){
return m__9635__auto__.call(null,_);
} else {
var m__9635__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__9635__auto____$1 == null))){
return m__9635__auto____$1.call(null,_);
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
var x__9634__auto__ = (((m == null))?null:m);
var m__9635__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__9634__auto__)]);
if(!((m__9635__auto__ == null))){
return m__9635__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__9635__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__9635__auto____$1 == null))){
return m__9635__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__9634__auto__ = (((m == null))?null:m);
var m__9635__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__9634__auto__)]);
if(!((m__9635__auto__ == null))){
return m__9635__auto__.call(null,m,ch);
} else {
var m__9635__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__9635__auto____$1 == null))){
return m__9635__auto____$1.call(null,m,ch);
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
var x__9634__auto__ = (((m == null))?null:m);
var m__9635__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__9634__auto__)]);
if(!((m__9635__auto__ == null))){
return m__9635__auto__.call(null,m);
} else {
var m__9635__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__9635__auto____$1 == null))){
return m__9635__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async14910 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14910 = (function (ch,cs,meta14911){
this.ch = ch;
this.cs = cs;
this.meta14911 = meta14911;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14912,meta14911__$1){
var self__ = this;
var _14912__$1 = this;
return (new cljs.core.async.t_cljs$core$async14910(self__.ch,self__.cs,meta14911__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async14910.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14912){
var self__ = this;
var _14912__$1 = this;
return self__.meta14911;
});})(cs))
;

cljs.core.async.t_cljs$core$async14910.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14910.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async14910.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14910.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14910.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14910.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14910.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14911","meta14911",1619611780,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async14910.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14910.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14910";

cljs.core.async.t_cljs$core$async14910.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__9572__auto__,writer__9573__auto__,opt__9574__auto__){
return cljs.core._write.call(null,writer__9573__auto__,"cljs.core.async/t_cljs$core$async14910");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async14910 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async14910(ch__$1,cs__$1,meta14911){
return (new cljs.core.async.t_cljs$core$async14910(ch__$1,cs__$1,meta14911));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async14910(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__14313__auto___15132 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14313__auto___15132,cs,m,dchan,dctr,done){
return (function (){
var f__14314__auto__ = (function (){var switch__14223__auto__ = ((function (c__14313__auto___15132,cs,m,dchan,dctr,done){
return (function (state_15047){
var state_val_15048 = (state_15047[(1)]);
if((state_val_15048 === (7))){
var inst_15043 = (state_15047[(2)]);
var state_15047__$1 = state_15047;
var statearr_15049_15133 = state_15047__$1;
(statearr_15049_15133[(2)] = inst_15043);

(statearr_15049_15133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (20))){
var inst_14946 = (state_15047[(7)]);
var inst_14958 = cljs.core.first.call(null,inst_14946);
var inst_14959 = cljs.core.nth.call(null,inst_14958,(0),null);
var inst_14960 = cljs.core.nth.call(null,inst_14958,(1),null);
var state_15047__$1 = (function (){var statearr_15050 = state_15047;
(statearr_15050[(8)] = inst_14959);

return statearr_15050;
})();
if(cljs.core.truth_(inst_14960)){
var statearr_15051_15134 = state_15047__$1;
(statearr_15051_15134[(1)] = (22));

} else {
var statearr_15052_15135 = state_15047__$1;
(statearr_15052_15135[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (27))){
var inst_14995 = (state_15047[(9)]);
var inst_14990 = (state_15047[(10)]);
var inst_14915 = (state_15047[(11)]);
var inst_14988 = (state_15047[(12)]);
var inst_14995__$1 = cljs.core._nth.call(null,inst_14988,inst_14990);
var inst_14996 = cljs.core.async.put_BANG_.call(null,inst_14995__$1,inst_14915,done);
var state_15047__$1 = (function (){var statearr_15053 = state_15047;
(statearr_15053[(9)] = inst_14995__$1);

return statearr_15053;
})();
if(cljs.core.truth_(inst_14996)){
var statearr_15054_15136 = state_15047__$1;
(statearr_15054_15136[(1)] = (30));

} else {
var statearr_15055_15137 = state_15047__$1;
(statearr_15055_15137[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (1))){
var state_15047__$1 = state_15047;
var statearr_15056_15138 = state_15047__$1;
(statearr_15056_15138[(2)] = null);

(statearr_15056_15138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (24))){
var inst_14946 = (state_15047[(7)]);
var inst_14965 = (state_15047[(2)]);
var inst_14966 = cljs.core.next.call(null,inst_14946);
var inst_14924 = inst_14966;
var inst_14925 = null;
var inst_14926 = (0);
var inst_14927 = (0);
var state_15047__$1 = (function (){var statearr_15057 = state_15047;
(statearr_15057[(13)] = inst_14925);

(statearr_15057[(14)] = inst_14926);

(statearr_15057[(15)] = inst_14924);

(statearr_15057[(16)] = inst_14965);

(statearr_15057[(17)] = inst_14927);

return statearr_15057;
})();
var statearr_15058_15139 = state_15047__$1;
(statearr_15058_15139[(2)] = null);

(statearr_15058_15139[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (39))){
var state_15047__$1 = state_15047;
var statearr_15062_15140 = state_15047__$1;
(statearr_15062_15140[(2)] = null);

(statearr_15062_15140[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (4))){
var inst_14915 = (state_15047[(11)]);
var inst_14915__$1 = (state_15047[(2)]);
var inst_14916 = (inst_14915__$1 == null);
var state_15047__$1 = (function (){var statearr_15063 = state_15047;
(statearr_15063[(11)] = inst_14915__$1);

return statearr_15063;
})();
if(cljs.core.truth_(inst_14916)){
var statearr_15064_15141 = state_15047__$1;
(statearr_15064_15141[(1)] = (5));

} else {
var statearr_15065_15142 = state_15047__$1;
(statearr_15065_15142[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (15))){
var inst_14925 = (state_15047[(13)]);
var inst_14926 = (state_15047[(14)]);
var inst_14924 = (state_15047[(15)]);
var inst_14927 = (state_15047[(17)]);
var inst_14942 = (state_15047[(2)]);
var inst_14943 = (inst_14927 + (1));
var tmp15059 = inst_14925;
var tmp15060 = inst_14926;
var tmp15061 = inst_14924;
var inst_14924__$1 = tmp15061;
var inst_14925__$1 = tmp15059;
var inst_14926__$1 = tmp15060;
var inst_14927__$1 = inst_14943;
var state_15047__$1 = (function (){var statearr_15066 = state_15047;
(statearr_15066[(13)] = inst_14925__$1);

(statearr_15066[(18)] = inst_14942);

(statearr_15066[(14)] = inst_14926__$1);

(statearr_15066[(15)] = inst_14924__$1);

(statearr_15066[(17)] = inst_14927__$1);

return statearr_15066;
})();
var statearr_15067_15143 = state_15047__$1;
(statearr_15067_15143[(2)] = null);

(statearr_15067_15143[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (21))){
var inst_14969 = (state_15047[(2)]);
var state_15047__$1 = state_15047;
var statearr_15071_15144 = state_15047__$1;
(statearr_15071_15144[(2)] = inst_14969);

(statearr_15071_15144[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (31))){
var inst_14995 = (state_15047[(9)]);
var inst_14999 = done.call(null,null);
var inst_15000 = cljs.core.async.untap_STAR_.call(null,m,inst_14995);
var state_15047__$1 = (function (){var statearr_15072 = state_15047;
(statearr_15072[(19)] = inst_14999);

return statearr_15072;
})();
var statearr_15073_15145 = state_15047__$1;
(statearr_15073_15145[(2)] = inst_15000);

(statearr_15073_15145[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (32))){
var inst_14987 = (state_15047[(20)]);
var inst_14990 = (state_15047[(10)]);
var inst_14989 = (state_15047[(21)]);
var inst_14988 = (state_15047[(12)]);
var inst_15002 = (state_15047[(2)]);
var inst_15003 = (inst_14990 + (1));
var tmp15068 = inst_14987;
var tmp15069 = inst_14989;
var tmp15070 = inst_14988;
var inst_14987__$1 = tmp15068;
var inst_14988__$1 = tmp15070;
var inst_14989__$1 = tmp15069;
var inst_14990__$1 = inst_15003;
var state_15047__$1 = (function (){var statearr_15074 = state_15047;
(statearr_15074[(20)] = inst_14987__$1);

(statearr_15074[(10)] = inst_14990__$1);

(statearr_15074[(21)] = inst_14989__$1);

(statearr_15074[(12)] = inst_14988__$1);

(statearr_15074[(22)] = inst_15002);

return statearr_15074;
})();
var statearr_15075_15146 = state_15047__$1;
(statearr_15075_15146[(2)] = null);

(statearr_15075_15146[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (40))){
var inst_15015 = (state_15047[(23)]);
var inst_15019 = done.call(null,null);
var inst_15020 = cljs.core.async.untap_STAR_.call(null,m,inst_15015);
var state_15047__$1 = (function (){var statearr_15076 = state_15047;
(statearr_15076[(24)] = inst_15019);

return statearr_15076;
})();
var statearr_15077_15147 = state_15047__$1;
(statearr_15077_15147[(2)] = inst_15020);

(statearr_15077_15147[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (33))){
var inst_15006 = (state_15047[(25)]);
var inst_15008 = cljs.core.chunked_seq_QMARK_.call(null,inst_15006);
var state_15047__$1 = state_15047;
if(inst_15008){
var statearr_15078_15148 = state_15047__$1;
(statearr_15078_15148[(1)] = (36));

} else {
var statearr_15079_15149 = state_15047__$1;
(statearr_15079_15149[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (13))){
var inst_14936 = (state_15047[(26)]);
var inst_14939 = cljs.core.async.close_BANG_.call(null,inst_14936);
var state_15047__$1 = state_15047;
var statearr_15080_15150 = state_15047__$1;
(statearr_15080_15150[(2)] = inst_14939);

(statearr_15080_15150[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (22))){
var inst_14959 = (state_15047[(8)]);
var inst_14962 = cljs.core.async.close_BANG_.call(null,inst_14959);
var state_15047__$1 = state_15047;
var statearr_15081_15151 = state_15047__$1;
(statearr_15081_15151[(2)] = inst_14962);

(statearr_15081_15151[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (36))){
var inst_15006 = (state_15047[(25)]);
var inst_15010 = cljs.core.chunk_first.call(null,inst_15006);
var inst_15011 = cljs.core.chunk_rest.call(null,inst_15006);
var inst_15012 = cljs.core.count.call(null,inst_15010);
var inst_14987 = inst_15011;
var inst_14988 = inst_15010;
var inst_14989 = inst_15012;
var inst_14990 = (0);
var state_15047__$1 = (function (){var statearr_15082 = state_15047;
(statearr_15082[(20)] = inst_14987);

(statearr_15082[(10)] = inst_14990);

(statearr_15082[(21)] = inst_14989);

(statearr_15082[(12)] = inst_14988);

return statearr_15082;
})();
var statearr_15083_15152 = state_15047__$1;
(statearr_15083_15152[(2)] = null);

(statearr_15083_15152[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (41))){
var inst_15006 = (state_15047[(25)]);
var inst_15022 = (state_15047[(2)]);
var inst_15023 = cljs.core.next.call(null,inst_15006);
var inst_14987 = inst_15023;
var inst_14988 = null;
var inst_14989 = (0);
var inst_14990 = (0);
var state_15047__$1 = (function (){var statearr_15084 = state_15047;
(statearr_15084[(27)] = inst_15022);

(statearr_15084[(20)] = inst_14987);

(statearr_15084[(10)] = inst_14990);

(statearr_15084[(21)] = inst_14989);

(statearr_15084[(12)] = inst_14988);

return statearr_15084;
})();
var statearr_15085_15153 = state_15047__$1;
(statearr_15085_15153[(2)] = null);

(statearr_15085_15153[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (43))){
var state_15047__$1 = state_15047;
var statearr_15086_15154 = state_15047__$1;
(statearr_15086_15154[(2)] = null);

(statearr_15086_15154[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (29))){
var inst_15031 = (state_15047[(2)]);
var state_15047__$1 = state_15047;
var statearr_15087_15155 = state_15047__$1;
(statearr_15087_15155[(2)] = inst_15031);

(statearr_15087_15155[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (44))){
var inst_15040 = (state_15047[(2)]);
var state_15047__$1 = (function (){var statearr_15088 = state_15047;
(statearr_15088[(28)] = inst_15040);

return statearr_15088;
})();
var statearr_15089_15156 = state_15047__$1;
(statearr_15089_15156[(2)] = null);

(statearr_15089_15156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (6))){
var inst_14979 = (state_15047[(29)]);
var inst_14978 = cljs.core.deref.call(null,cs);
var inst_14979__$1 = cljs.core.keys.call(null,inst_14978);
var inst_14980 = cljs.core.count.call(null,inst_14979__$1);
var inst_14981 = cljs.core.reset_BANG_.call(null,dctr,inst_14980);
var inst_14986 = cljs.core.seq.call(null,inst_14979__$1);
var inst_14987 = inst_14986;
var inst_14988 = null;
var inst_14989 = (0);
var inst_14990 = (0);
var state_15047__$1 = (function (){var statearr_15090 = state_15047;
(statearr_15090[(20)] = inst_14987);

(statearr_15090[(10)] = inst_14990);

(statearr_15090[(21)] = inst_14989);

(statearr_15090[(12)] = inst_14988);

(statearr_15090[(29)] = inst_14979__$1);

(statearr_15090[(30)] = inst_14981);

return statearr_15090;
})();
var statearr_15091_15157 = state_15047__$1;
(statearr_15091_15157[(2)] = null);

(statearr_15091_15157[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (28))){
var inst_14987 = (state_15047[(20)]);
var inst_15006 = (state_15047[(25)]);
var inst_15006__$1 = cljs.core.seq.call(null,inst_14987);
var state_15047__$1 = (function (){var statearr_15092 = state_15047;
(statearr_15092[(25)] = inst_15006__$1);

return statearr_15092;
})();
if(inst_15006__$1){
var statearr_15093_15158 = state_15047__$1;
(statearr_15093_15158[(1)] = (33));

} else {
var statearr_15094_15159 = state_15047__$1;
(statearr_15094_15159[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (25))){
var inst_14990 = (state_15047[(10)]);
var inst_14989 = (state_15047[(21)]);
var inst_14992 = (inst_14990 < inst_14989);
var inst_14993 = inst_14992;
var state_15047__$1 = state_15047;
if(cljs.core.truth_(inst_14993)){
var statearr_15095_15160 = state_15047__$1;
(statearr_15095_15160[(1)] = (27));

} else {
var statearr_15096_15161 = state_15047__$1;
(statearr_15096_15161[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (34))){
var state_15047__$1 = state_15047;
var statearr_15097_15162 = state_15047__$1;
(statearr_15097_15162[(2)] = null);

(statearr_15097_15162[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (17))){
var state_15047__$1 = state_15047;
var statearr_15098_15163 = state_15047__$1;
(statearr_15098_15163[(2)] = null);

(statearr_15098_15163[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (3))){
var inst_15045 = (state_15047[(2)]);
var state_15047__$1 = state_15047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15047__$1,inst_15045);
} else {
if((state_val_15048 === (12))){
var inst_14974 = (state_15047[(2)]);
var state_15047__$1 = state_15047;
var statearr_15099_15164 = state_15047__$1;
(statearr_15099_15164[(2)] = inst_14974);

(statearr_15099_15164[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (2))){
var state_15047__$1 = state_15047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15047__$1,(4),ch);
} else {
if((state_val_15048 === (23))){
var state_15047__$1 = state_15047;
var statearr_15100_15165 = state_15047__$1;
(statearr_15100_15165[(2)] = null);

(statearr_15100_15165[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (35))){
var inst_15029 = (state_15047[(2)]);
var state_15047__$1 = state_15047;
var statearr_15101_15166 = state_15047__$1;
(statearr_15101_15166[(2)] = inst_15029);

(statearr_15101_15166[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (19))){
var inst_14946 = (state_15047[(7)]);
var inst_14950 = cljs.core.chunk_first.call(null,inst_14946);
var inst_14951 = cljs.core.chunk_rest.call(null,inst_14946);
var inst_14952 = cljs.core.count.call(null,inst_14950);
var inst_14924 = inst_14951;
var inst_14925 = inst_14950;
var inst_14926 = inst_14952;
var inst_14927 = (0);
var state_15047__$1 = (function (){var statearr_15102 = state_15047;
(statearr_15102[(13)] = inst_14925);

(statearr_15102[(14)] = inst_14926);

(statearr_15102[(15)] = inst_14924);

(statearr_15102[(17)] = inst_14927);

return statearr_15102;
})();
var statearr_15103_15167 = state_15047__$1;
(statearr_15103_15167[(2)] = null);

(statearr_15103_15167[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (11))){
var inst_14946 = (state_15047[(7)]);
var inst_14924 = (state_15047[(15)]);
var inst_14946__$1 = cljs.core.seq.call(null,inst_14924);
var state_15047__$1 = (function (){var statearr_15104 = state_15047;
(statearr_15104[(7)] = inst_14946__$1);

return statearr_15104;
})();
if(inst_14946__$1){
var statearr_15105_15168 = state_15047__$1;
(statearr_15105_15168[(1)] = (16));

} else {
var statearr_15106_15169 = state_15047__$1;
(statearr_15106_15169[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (9))){
var inst_14976 = (state_15047[(2)]);
var state_15047__$1 = state_15047;
var statearr_15107_15170 = state_15047__$1;
(statearr_15107_15170[(2)] = inst_14976);

(statearr_15107_15170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (5))){
var inst_14922 = cljs.core.deref.call(null,cs);
var inst_14923 = cljs.core.seq.call(null,inst_14922);
var inst_14924 = inst_14923;
var inst_14925 = null;
var inst_14926 = (0);
var inst_14927 = (0);
var state_15047__$1 = (function (){var statearr_15108 = state_15047;
(statearr_15108[(13)] = inst_14925);

(statearr_15108[(14)] = inst_14926);

(statearr_15108[(15)] = inst_14924);

(statearr_15108[(17)] = inst_14927);

return statearr_15108;
})();
var statearr_15109_15171 = state_15047__$1;
(statearr_15109_15171[(2)] = null);

(statearr_15109_15171[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (14))){
var state_15047__$1 = state_15047;
var statearr_15110_15172 = state_15047__$1;
(statearr_15110_15172[(2)] = null);

(statearr_15110_15172[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (45))){
var inst_15037 = (state_15047[(2)]);
var state_15047__$1 = state_15047;
var statearr_15111_15173 = state_15047__$1;
(statearr_15111_15173[(2)] = inst_15037);

(statearr_15111_15173[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (26))){
var inst_14979 = (state_15047[(29)]);
var inst_15033 = (state_15047[(2)]);
var inst_15034 = cljs.core.seq.call(null,inst_14979);
var state_15047__$1 = (function (){var statearr_15112 = state_15047;
(statearr_15112[(31)] = inst_15033);

return statearr_15112;
})();
if(inst_15034){
var statearr_15113_15174 = state_15047__$1;
(statearr_15113_15174[(1)] = (42));

} else {
var statearr_15114_15175 = state_15047__$1;
(statearr_15114_15175[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (16))){
var inst_14946 = (state_15047[(7)]);
var inst_14948 = cljs.core.chunked_seq_QMARK_.call(null,inst_14946);
var state_15047__$1 = state_15047;
if(inst_14948){
var statearr_15115_15176 = state_15047__$1;
(statearr_15115_15176[(1)] = (19));

} else {
var statearr_15116_15177 = state_15047__$1;
(statearr_15116_15177[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (38))){
var inst_15026 = (state_15047[(2)]);
var state_15047__$1 = state_15047;
var statearr_15117_15178 = state_15047__$1;
(statearr_15117_15178[(2)] = inst_15026);

(statearr_15117_15178[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (30))){
var state_15047__$1 = state_15047;
var statearr_15118_15179 = state_15047__$1;
(statearr_15118_15179[(2)] = null);

(statearr_15118_15179[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (10))){
var inst_14925 = (state_15047[(13)]);
var inst_14927 = (state_15047[(17)]);
var inst_14935 = cljs.core._nth.call(null,inst_14925,inst_14927);
var inst_14936 = cljs.core.nth.call(null,inst_14935,(0),null);
var inst_14937 = cljs.core.nth.call(null,inst_14935,(1),null);
var state_15047__$1 = (function (){var statearr_15119 = state_15047;
(statearr_15119[(26)] = inst_14936);

return statearr_15119;
})();
if(cljs.core.truth_(inst_14937)){
var statearr_15120_15180 = state_15047__$1;
(statearr_15120_15180[(1)] = (13));

} else {
var statearr_15121_15181 = state_15047__$1;
(statearr_15121_15181[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (18))){
var inst_14972 = (state_15047[(2)]);
var state_15047__$1 = state_15047;
var statearr_15122_15182 = state_15047__$1;
(statearr_15122_15182[(2)] = inst_14972);

(statearr_15122_15182[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (42))){
var state_15047__$1 = state_15047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15047__$1,(45),dchan);
} else {
if((state_val_15048 === (37))){
var inst_15015 = (state_15047[(23)]);
var inst_14915 = (state_15047[(11)]);
var inst_15006 = (state_15047[(25)]);
var inst_15015__$1 = cljs.core.first.call(null,inst_15006);
var inst_15016 = cljs.core.async.put_BANG_.call(null,inst_15015__$1,inst_14915,done);
var state_15047__$1 = (function (){var statearr_15123 = state_15047;
(statearr_15123[(23)] = inst_15015__$1);

return statearr_15123;
})();
if(cljs.core.truth_(inst_15016)){
var statearr_15124_15183 = state_15047__$1;
(statearr_15124_15183[(1)] = (39));

} else {
var statearr_15125_15184 = state_15047__$1;
(statearr_15125_15184[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15048 === (8))){
var inst_14926 = (state_15047[(14)]);
var inst_14927 = (state_15047[(17)]);
var inst_14929 = (inst_14927 < inst_14926);
var inst_14930 = inst_14929;
var state_15047__$1 = state_15047;
if(cljs.core.truth_(inst_14930)){
var statearr_15126_15185 = state_15047__$1;
(statearr_15126_15185[(1)] = (10));

} else {
var statearr_15127_15186 = state_15047__$1;
(statearr_15127_15186[(1)] = (11));

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
});})(c__14313__auto___15132,cs,m,dchan,dctr,done))
;
return ((function (switch__14223__auto__,c__14313__auto___15132,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__14224__auto__ = null;
var cljs$core$async$mult_$_state_machine__14224__auto____0 = (function (){
var statearr_15128 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15128[(0)] = cljs$core$async$mult_$_state_machine__14224__auto__);

(statearr_15128[(1)] = (1));

return statearr_15128;
});
var cljs$core$async$mult_$_state_machine__14224__auto____1 = (function (state_15047){
while(true){
var ret_value__14225__auto__ = (function (){try{while(true){
var result__14226__auto__ = switch__14223__auto__.call(null,state_15047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14226__auto__;
}
break;
}
}catch (e15129){if((e15129 instanceof Object)){
var ex__14227__auto__ = e15129;
var statearr_15130_15187 = state_15047;
(statearr_15130_15187[(5)] = ex__14227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15188 = state_15047;
state_15047 = G__15188;
continue;
} else {
return ret_value__14225__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14224__auto__ = function(state_15047){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14224__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14224__auto____1.call(this,state_15047);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14224__auto____0;
cljs$core$async$mult_$_state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14224__auto____1;
return cljs$core$async$mult_$_state_machine__14224__auto__;
})()
;})(switch__14223__auto__,c__14313__auto___15132,cs,m,dchan,dctr,done))
})();
var state__14315__auto__ = (function (){var statearr_15131 = f__14314__auto__.call(null);
(statearr_15131[(6)] = c__14313__auto___15132);

return statearr_15131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14315__auto__);
});})(c__14313__auto___15132,cs,m,dchan,dctr,done))
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
var G__15190 = arguments.length;
switch (G__15190) {
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
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__9634__auto__ = (((m == null))?null:m);
var m__9635__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__9634__auto__)]);
if(!((m__9635__auto__ == null))){
return m__9635__auto__.call(null,m,ch);
} else {
var m__9635__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__9635__auto____$1 == null))){
return m__9635__auto____$1.call(null,m,ch);
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
var x__9634__auto__ = (((m == null))?null:m);
var m__9635__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__9634__auto__)]);
if(!((m__9635__auto__ == null))){
return m__9635__auto__.call(null,m,ch);
} else {
var m__9635__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__9635__auto____$1 == null))){
return m__9635__auto____$1.call(null,m,ch);
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
var x__9634__auto__ = (((m == null))?null:m);
var m__9635__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__9634__auto__)]);
if(!((m__9635__auto__ == null))){
return m__9635__auto__.call(null,m);
} else {
var m__9635__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__9635__auto____$1 == null))){
return m__9635__auto____$1.call(null,m);
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
var x__9634__auto__ = (((m == null))?null:m);
var m__9635__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__9634__auto__)]);
if(!((m__9635__auto__ == null))){
return m__9635__auto__.call(null,m,state_map);
} else {
var m__9635__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__9635__auto____$1 == null))){
return m__9635__auto____$1.call(null,m,state_map);
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
var x__9634__auto__ = (((m == null))?null:m);
var m__9635__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__9634__auto__)]);
if(!((m__9635__auto__ == null))){
return m__9635__auto__.call(null,m,mode);
} else {
var m__9635__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__9635__auto____$1 == null))){
return m__9635__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__10187__auto__ = [];
var len__10180__auto___15202 = arguments.length;
var i__10181__auto___15203 = (0);
while(true){
if((i__10181__auto___15203 < len__10180__auto___15202)){
args__10187__auto__.push((arguments[i__10181__auto___15203]));

var G__15204 = (i__10181__auto___15203 + (1));
i__10181__auto___15203 = G__15204;
continue;
} else {
}
break;
}

var argseq__10188__auto__ = ((((3) < args__10187__auto__.length))?(new cljs.core.IndexedSeq(args__10187__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10188__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15196){
var map__15197 = p__15196;
var map__15197__$1 = ((((!((map__15197 == null)))?((((map__15197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15197.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15197):map__15197);
var opts = map__15197__$1;
var statearr_15199_15205 = state;
(statearr_15199_15205[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__15197,map__15197__$1,opts){
return (function (val){
var statearr_15200_15206 = state;
(statearr_15200_15206[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__15197,map__15197__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_15201_15207 = state;
(statearr_15201_15207[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15192){
var G__15193 = cljs.core.first.call(null,seq15192);
var seq15192__$1 = cljs.core.next.call(null,seq15192);
var G__15194 = cljs.core.first.call(null,seq15192__$1);
var seq15192__$2 = cljs.core.next.call(null,seq15192__$1);
var G__15195 = cljs.core.first.call(null,seq15192__$2);
var seq15192__$3 = cljs.core.next.call(null,seq15192__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15193,G__15194,G__15195,seq15192__$3);
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
if(typeof cljs.core.async.t_cljs$core$async15208 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15208 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta15209){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta15209 = meta15209;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15210,meta15209__$1){
var self__ = this;
var _15210__$1 = this;
return (new cljs.core.async.t_cljs$core$async15208(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta15209__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15208.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15210){
var self__ = this;
var _15210__$1 = this;
return self__.meta15209;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15208.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15208.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15208.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15208.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15208.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15208.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15208.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15208.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async15208.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta15209","meta15209",2038520041,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15208.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15208.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15208";

cljs.core.async.t_cljs$core$async15208.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__9572__auto__,writer__9573__auto__,opt__9574__auto__){
return cljs.core._write.call(null,writer__9573__auto__,"cljs.core.async/t_cljs$core$async15208");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async15208 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async15208(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta15209){
return (new cljs.core.async.t_cljs$core$async15208(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta15209));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async15208(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14313__auto___15372 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14313__auto___15372,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__14314__auto__ = (function (){var switch__14223__auto__ = ((function (c__14313__auto___15372,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15312){
var state_val_15313 = (state_15312[(1)]);
if((state_val_15313 === (7))){
var inst_15227 = (state_15312[(2)]);
var state_15312__$1 = state_15312;
var statearr_15314_15373 = state_15312__$1;
(statearr_15314_15373[(2)] = inst_15227);

(statearr_15314_15373[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (20))){
var inst_15239 = (state_15312[(7)]);
var state_15312__$1 = state_15312;
var statearr_15315_15374 = state_15312__$1;
(statearr_15315_15374[(2)] = inst_15239);

(statearr_15315_15374[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (27))){
var state_15312__$1 = state_15312;
var statearr_15316_15375 = state_15312__$1;
(statearr_15316_15375[(2)] = null);

(statearr_15316_15375[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (1))){
var inst_15214 = (state_15312[(8)]);
var inst_15214__$1 = calc_state.call(null);
var inst_15216 = (inst_15214__$1 == null);
var inst_15217 = cljs.core.not.call(null,inst_15216);
var state_15312__$1 = (function (){var statearr_15317 = state_15312;
(statearr_15317[(8)] = inst_15214__$1);

return statearr_15317;
})();
if(inst_15217){
var statearr_15318_15376 = state_15312__$1;
(statearr_15318_15376[(1)] = (2));

} else {
var statearr_15319_15377 = state_15312__$1;
(statearr_15319_15377[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (24))){
var inst_15272 = (state_15312[(9)]);
var inst_15286 = (state_15312[(10)]);
var inst_15263 = (state_15312[(11)]);
var inst_15286__$1 = inst_15263.call(null,inst_15272);
var state_15312__$1 = (function (){var statearr_15320 = state_15312;
(statearr_15320[(10)] = inst_15286__$1);

return statearr_15320;
})();
if(cljs.core.truth_(inst_15286__$1)){
var statearr_15321_15378 = state_15312__$1;
(statearr_15321_15378[(1)] = (29));

} else {
var statearr_15322_15379 = state_15312__$1;
(statearr_15322_15379[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (4))){
var inst_15230 = (state_15312[(2)]);
var state_15312__$1 = state_15312;
if(cljs.core.truth_(inst_15230)){
var statearr_15323_15380 = state_15312__$1;
(statearr_15323_15380[(1)] = (8));

} else {
var statearr_15324_15381 = state_15312__$1;
(statearr_15324_15381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (15))){
var inst_15257 = (state_15312[(2)]);
var state_15312__$1 = state_15312;
if(cljs.core.truth_(inst_15257)){
var statearr_15325_15382 = state_15312__$1;
(statearr_15325_15382[(1)] = (19));

} else {
var statearr_15326_15383 = state_15312__$1;
(statearr_15326_15383[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (21))){
var inst_15262 = (state_15312[(12)]);
var inst_15262__$1 = (state_15312[(2)]);
var inst_15263 = cljs.core.get.call(null,inst_15262__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15264 = cljs.core.get.call(null,inst_15262__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15265 = cljs.core.get.call(null,inst_15262__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15312__$1 = (function (){var statearr_15327 = state_15312;
(statearr_15327[(13)] = inst_15264);

(statearr_15327[(11)] = inst_15263);

(statearr_15327[(12)] = inst_15262__$1);

return statearr_15327;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_15312__$1,(22),inst_15265);
} else {
if((state_val_15313 === (31))){
var inst_15294 = (state_15312[(2)]);
var state_15312__$1 = state_15312;
if(cljs.core.truth_(inst_15294)){
var statearr_15328_15384 = state_15312__$1;
(statearr_15328_15384[(1)] = (32));

} else {
var statearr_15329_15385 = state_15312__$1;
(statearr_15329_15385[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (32))){
var inst_15271 = (state_15312[(14)]);
var state_15312__$1 = state_15312;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15312__$1,(35),out,inst_15271);
} else {
if((state_val_15313 === (33))){
var inst_15262 = (state_15312[(12)]);
var inst_15239 = inst_15262;
var state_15312__$1 = (function (){var statearr_15330 = state_15312;
(statearr_15330[(7)] = inst_15239);

return statearr_15330;
})();
var statearr_15331_15386 = state_15312__$1;
(statearr_15331_15386[(2)] = null);

(statearr_15331_15386[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (13))){
var inst_15239 = (state_15312[(7)]);
var inst_15246 = inst_15239.cljs$lang$protocol_mask$partition0$;
var inst_15247 = (inst_15246 & (64));
var inst_15248 = inst_15239.cljs$core$ISeq$;
var inst_15249 = (cljs.core.PROTOCOL_SENTINEL === inst_15248);
var inst_15250 = (inst_15247) || (inst_15249);
var state_15312__$1 = state_15312;
if(cljs.core.truth_(inst_15250)){
var statearr_15332_15387 = state_15312__$1;
(statearr_15332_15387[(1)] = (16));

} else {
var statearr_15333_15388 = state_15312__$1;
(statearr_15333_15388[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (22))){
var inst_15272 = (state_15312[(9)]);
var inst_15271 = (state_15312[(14)]);
var inst_15270 = (state_15312[(2)]);
var inst_15271__$1 = cljs.core.nth.call(null,inst_15270,(0),null);
var inst_15272__$1 = cljs.core.nth.call(null,inst_15270,(1),null);
var inst_15273 = (inst_15271__$1 == null);
var inst_15274 = cljs.core._EQ_.call(null,inst_15272__$1,change);
var inst_15275 = (inst_15273) || (inst_15274);
var state_15312__$1 = (function (){var statearr_15334 = state_15312;
(statearr_15334[(9)] = inst_15272__$1);

(statearr_15334[(14)] = inst_15271__$1);

return statearr_15334;
})();
if(cljs.core.truth_(inst_15275)){
var statearr_15335_15389 = state_15312__$1;
(statearr_15335_15389[(1)] = (23));

} else {
var statearr_15336_15390 = state_15312__$1;
(statearr_15336_15390[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (36))){
var inst_15262 = (state_15312[(12)]);
var inst_15239 = inst_15262;
var state_15312__$1 = (function (){var statearr_15337 = state_15312;
(statearr_15337[(7)] = inst_15239);

return statearr_15337;
})();
var statearr_15338_15391 = state_15312__$1;
(statearr_15338_15391[(2)] = null);

(statearr_15338_15391[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (29))){
var inst_15286 = (state_15312[(10)]);
var state_15312__$1 = state_15312;
var statearr_15339_15392 = state_15312__$1;
(statearr_15339_15392[(2)] = inst_15286);

(statearr_15339_15392[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (6))){
var state_15312__$1 = state_15312;
var statearr_15340_15393 = state_15312__$1;
(statearr_15340_15393[(2)] = false);

(statearr_15340_15393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (28))){
var inst_15282 = (state_15312[(2)]);
var inst_15283 = calc_state.call(null);
var inst_15239 = inst_15283;
var state_15312__$1 = (function (){var statearr_15341 = state_15312;
(statearr_15341[(15)] = inst_15282);

(statearr_15341[(7)] = inst_15239);

return statearr_15341;
})();
var statearr_15342_15394 = state_15312__$1;
(statearr_15342_15394[(2)] = null);

(statearr_15342_15394[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (25))){
var inst_15308 = (state_15312[(2)]);
var state_15312__$1 = state_15312;
var statearr_15343_15395 = state_15312__$1;
(statearr_15343_15395[(2)] = inst_15308);

(statearr_15343_15395[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (34))){
var inst_15306 = (state_15312[(2)]);
var state_15312__$1 = state_15312;
var statearr_15344_15396 = state_15312__$1;
(statearr_15344_15396[(2)] = inst_15306);

(statearr_15344_15396[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (17))){
var state_15312__$1 = state_15312;
var statearr_15345_15397 = state_15312__$1;
(statearr_15345_15397[(2)] = false);

(statearr_15345_15397[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (3))){
var state_15312__$1 = state_15312;
var statearr_15346_15398 = state_15312__$1;
(statearr_15346_15398[(2)] = false);

(statearr_15346_15398[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (12))){
var inst_15310 = (state_15312[(2)]);
var state_15312__$1 = state_15312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15312__$1,inst_15310);
} else {
if((state_val_15313 === (2))){
var inst_15214 = (state_15312[(8)]);
var inst_15219 = inst_15214.cljs$lang$protocol_mask$partition0$;
var inst_15220 = (inst_15219 & (64));
var inst_15221 = inst_15214.cljs$core$ISeq$;
var inst_15222 = (cljs.core.PROTOCOL_SENTINEL === inst_15221);
var inst_15223 = (inst_15220) || (inst_15222);
var state_15312__$1 = state_15312;
if(cljs.core.truth_(inst_15223)){
var statearr_15347_15399 = state_15312__$1;
(statearr_15347_15399[(1)] = (5));

} else {
var statearr_15348_15400 = state_15312__$1;
(statearr_15348_15400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (23))){
var inst_15271 = (state_15312[(14)]);
var inst_15277 = (inst_15271 == null);
var state_15312__$1 = state_15312;
if(cljs.core.truth_(inst_15277)){
var statearr_15349_15401 = state_15312__$1;
(statearr_15349_15401[(1)] = (26));

} else {
var statearr_15350_15402 = state_15312__$1;
(statearr_15350_15402[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (35))){
var inst_15297 = (state_15312[(2)]);
var state_15312__$1 = state_15312;
if(cljs.core.truth_(inst_15297)){
var statearr_15351_15403 = state_15312__$1;
(statearr_15351_15403[(1)] = (36));

} else {
var statearr_15352_15404 = state_15312__$1;
(statearr_15352_15404[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (19))){
var inst_15239 = (state_15312[(7)]);
var inst_15259 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15239);
var state_15312__$1 = state_15312;
var statearr_15353_15405 = state_15312__$1;
(statearr_15353_15405[(2)] = inst_15259);

(statearr_15353_15405[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (11))){
var inst_15239 = (state_15312[(7)]);
var inst_15243 = (inst_15239 == null);
var inst_15244 = cljs.core.not.call(null,inst_15243);
var state_15312__$1 = state_15312;
if(inst_15244){
var statearr_15354_15406 = state_15312__$1;
(statearr_15354_15406[(1)] = (13));

} else {
var statearr_15355_15407 = state_15312__$1;
(statearr_15355_15407[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (9))){
var inst_15214 = (state_15312[(8)]);
var state_15312__$1 = state_15312;
var statearr_15356_15408 = state_15312__$1;
(statearr_15356_15408[(2)] = inst_15214);

(statearr_15356_15408[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (5))){
var state_15312__$1 = state_15312;
var statearr_15357_15409 = state_15312__$1;
(statearr_15357_15409[(2)] = true);

(statearr_15357_15409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (14))){
var state_15312__$1 = state_15312;
var statearr_15358_15410 = state_15312__$1;
(statearr_15358_15410[(2)] = false);

(statearr_15358_15410[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (26))){
var inst_15272 = (state_15312[(9)]);
var inst_15279 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15272);
var state_15312__$1 = state_15312;
var statearr_15359_15411 = state_15312__$1;
(statearr_15359_15411[(2)] = inst_15279);

(statearr_15359_15411[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (16))){
var state_15312__$1 = state_15312;
var statearr_15360_15412 = state_15312__$1;
(statearr_15360_15412[(2)] = true);

(statearr_15360_15412[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (38))){
var inst_15302 = (state_15312[(2)]);
var state_15312__$1 = state_15312;
var statearr_15361_15413 = state_15312__$1;
(statearr_15361_15413[(2)] = inst_15302);

(statearr_15361_15413[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (30))){
var inst_15272 = (state_15312[(9)]);
var inst_15264 = (state_15312[(13)]);
var inst_15263 = (state_15312[(11)]);
var inst_15289 = cljs.core.empty_QMARK_.call(null,inst_15263);
var inst_15290 = inst_15264.call(null,inst_15272);
var inst_15291 = cljs.core.not.call(null,inst_15290);
var inst_15292 = (inst_15289) && (inst_15291);
var state_15312__$1 = state_15312;
var statearr_15362_15414 = state_15312__$1;
(statearr_15362_15414[(2)] = inst_15292);

(statearr_15362_15414[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (10))){
var inst_15214 = (state_15312[(8)]);
var inst_15235 = (state_15312[(2)]);
var inst_15236 = cljs.core.get.call(null,inst_15235,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15237 = cljs.core.get.call(null,inst_15235,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15238 = cljs.core.get.call(null,inst_15235,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15239 = inst_15214;
var state_15312__$1 = (function (){var statearr_15363 = state_15312;
(statearr_15363[(16)] = inst_15238);

(statearr_15363[(17)] = inst_15237);

(statearr_15363[(18)] = inst_15236);

(statearr_15363[(7)] = inst_15239);

return statearr_15363;
})();
var statearr_15364_15415 = state_15312__$1;
(statearr_15364_15415[(2)] = null);

(statearr_15364_15415[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (18))){
var inst_15254 = (state_15312[(2)]);
var state_15312__$1 = state_15312;
var statearr_15365_15416 = state_15312__$1;
(statearr_15365_15416[(2)] = inst_15254);

(statearr_15365_15416[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (37))){
var state_15312__$1 = state_15312;
var statearr_15366_15417 = state_15312__$1;
(statearr_15366_15417[(2)] = null);

(statearr_15366_15417[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15313 === (8))){
var inst_15214 = (state_15312[(8)]);
var inst_15232 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15214);
var state_15312__$1 = state_15312;
var statearr_15367_15418 = state_15312__$1;
(statearr_15367_15418[(2)] = inst_15232);

(statearr_15367_15418[(1)] = (10));


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
});})(c__14313__auto___15372,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__14223__auto__,c__14313__auto___15372,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__14224__auto__ = null;
var cljs$core$async$mix_$_state_machine__14224__auto____0 = (function (){
var statearr_15368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15368[(0)] = cljs$core$async$mix_$_state_machine__14224__auto__);

(statearr_15368[(1)] = (1));

return statearr_15368;
});
var cljs$core$async$mix_$_state_machine__14224__auto____1 = (function (state_15312){
while(true){
var ret_value__14225__auto__ = (function (){try{while(true){
var result__14226__auto__ = switch__14223__auto__.call(null,state_15312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14226__auto__;
}
break;
}
}catch (e15369){if((e15369 instanceof Object)){
var ex__14227__auto__ = e15369;
var statearr_15370_15419 = state_15312;
(statearr_15370_15419[(5)] = ex__14227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15420 = state_15312;
state_15312 = G__15420;
continue;
} else {
return ret_value__14225__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14224__auto__ = function(state_15312){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14224__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14224__auto____1.call(this,state_15312);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14224__auto____0;
cljs$core$async$mix_$_state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14224__auto____1;
return cljs$core$async$mix_$_state_machine__14224__auto__;
})()
;})(switch__14223__auto__,c__14313__auto___15372,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__14315__auto__ = (function (){var statearr_15371 = f__14314__auto__.call(null);
(statearr_15371[(6)] = c__14313__auto___15372);

return statearr_15371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14315__auto__);
});})(c__14313__auto___15372,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__9634__auto__ = (((p == null))?null:p);
var m__9635__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__9634__auto__)]);
if(!((m__9635__auto__ == null))){
return m__9635__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__9635__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__9635__auto____$1 == null))){
return m__9635__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__9634__auto__ = (((p == null))?null:p);
var m__9635__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__9634__auto__)]);
if(!((m__9635__auto__ == null))){
return m__9635__auto__.call(null,p,v,ch);
} else {
var m__9635__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__9635__auto____$1 == null))){
return m__9635__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__15422 = arguments.length;
switch (G__15422) {
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
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__9634__auto__ = (((p == null))?null:p);
var m__9635__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9634__auto__)]);
if(!((m__9635__auto__ == null))){
return m__9635__auto__.call(null,p);
} else {
var m__9635__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__9635__auto____$1 == null))){
return m__9635__auto____$1.call(null,p);
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
var x__9634__auto__ = (((p == null))?null:p);
var m__9635__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9634__auto__)]);
if(!((m__9635__auto__ == null))){
return m__9635__auto__.call(null,p,v);
} else {
var m__9635__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__9635__auto____$1 == null))){
return m__9635__auto____$1.call(null,p,v);
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
var G__15426 = arguments.length;
switch (G__15426) {
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
var or__8901__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__8901__auto__)){
return or__8901__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__8901__auto__,mults){
return (function (p1__15424_SHARP_){
if(cljs.core.truth_(p1__15424_SHARP_.call(null,topic))){
return p1__15424_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__15424_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8901__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async15427 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15427 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15428){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15428 = meta15428;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15429,meta15428__$1){
var self__ = this;
var _15429__$1 = this;
return (new cljs.core.async.t_cljs$core$async15427(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15428__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15427.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15429){
var self__ = this;
var _15429__$1 = this;
return self__.meta15428;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15427.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15427.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15427.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15427.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15427.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15427.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15427.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15427.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15428","meta15428",1409256827,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15427.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15427.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15427";

cljs.core.async.t_cljs$core$async15427.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__9572__auto__,writer__9573__auto__,opt__9574__auto__){
return cljs.core._write.call(null,writer__9573__auto__,"cljs.core.async/t_cljs$core$async15427");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async15427 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async15427(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15428){
return (new cljs.core.async.t_cljs$core$async15427(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15428));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async15427(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14313__auto___15547 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14313__auto___15547,mults,ensure_mult,p){
return (function (){
var f__14314__auto__ = (function (){var switch__14223__auto__ = ((function (c__14313__auto___15547,mults,ensure_mult,p){
return (function (state_15501){
var state_val_15502 = (state_15501[(1)]);
if((state_val_15502 === (7))){
var inst_15497 = (state_15501[(2)]);
var state_15501__$1 = state_15501;
var statearr_15503_15548 = state_15501__$1;
(statearr_15503_15548[(2)] = inst_15497);

(statearr_15503_15548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15502 === (20))){
var state_15501__$1 = state_15501;
var statearr_15504_15549 = state_15501__$1;
(statearr_15504_15549[(2)] = null);

(statearr_15504_15549[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15502 === (1))){
var state_15501__$1 = state_15501;
var statearr_15505_15550 = state_15501__$1;
(statearr_15505_15550[(2)] = null);

(statearr_15505_15550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15502 === (24))){
var inst_15480 = (state_15501[(7)]);
var inst_15489 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15480);
var state_15501__$1 = state_15501;
var statearr_15506_15551 = state_15501__$1;
(statearr_15506_15551[(2)] = inst_15489);

(statearr_15506_15551[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15502 === (4))){
var inst_15432 = (state_15501[(8)]);
var inst_15432__$1 = (state_15501[(2)]);
var inst_15433 = (inst_15432__$1 == null);
var state_15501__$1 = (function (){var statearr_15507 = state_15501;
(statearr_15507[(8)] = inst_15432__$1);

return statearr_15507;
})();
if(cljs.core.truth_(inst_15433)){
var statearr_15508_15552 = state_15501__$1;
(statearr_15508_15552[(1)] = (5));

} else {
var statearr_15509_15553 = state_15501__$1;
(statearr_15509_15553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15502 === (15))){
var inst_15474 = (state_15501[(2)]);
var state_15501__$1 = state_15501;
var statearr_15510_15554 = state_15501__$1;
(statearr_15510_15554[(2)] = inst_15474);

(statearr_15510_15554[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15502 === (21))){
var inst_15494 = (state_15501[(2)]);
var state_15501__$1 = (function (){var statearr_15511 = state_15501;
(statearr_15511[(9)] = inst_15494);

return statearr_15511;
})();
var statearr_15512_15555 = state_15501__$1;
(statearr_15512_15555[(2)] = null);

(statearr_15512_15555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15502 === (13))){
var inst_15456 = (state_15501[(10)]);
var inst_15458 = cljs.core.chunked_seq_QMARK_.call(null,inst_15456);
var state_15501__$1 = state_15501;
if(inst_15458){
var statearr_15513_15556 = state_15501__$1;
(statearr_15513_15556[(1)] = (16));

} else {
var statearr_15514_15557 = state_15501__$1;
(statearr_15514_15557[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15502 === (22))){
var inst_15486 = (state_15501[(2)]);
var state_15501__$1 = state_15501;
if(cljs.core.truth_(inst_15486)){
var statearr_15515_15558 = state_15501__$1;
(statearr_15515_15558[(1)] = (23));

} else {
var statearr_15516_15559 = state_15501__$1;
(statearr_15516_15559[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15502 === (6))){
var inst_15480 = (state_15501[(7)]);
var inst_15432 = (state_15501[(8)]);
var inst_15482 = (state_15501[(11)]);
var inst_15480__$1 = topic_fn.call(null,inst_15432);
var inst_15481 = cljs.core.deref.call(null,mults);
var inst_15482__$1 = cljs.core.get.call(null,inst_15481,inst_15480__$1);
var state_15501__$1 = (function (){var statearr_15517 = state_15501;
(statearr_15517[(7)] = inst_15480__$1);

(statearr_15517[(11)] = inst_15482__$1);

return statearr_15517;
})();
if(cljs.core.truth_(inst_15482__$1)){
var statearr_15518_15560 = state_15501__$1;
(statearr_15518_15560[(1)] = (19));

} else {
var statearr_15519_15561 = state_15501__$1;
(statearr_15519_15561[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15502 === (25))){
var inst_15491 = (state_15501[(2)]);
var state_15501__$1 = state_15501;
var statearr_15520_15562 = state_15501__$1;
(statearr_15520_15562[(2)] = inst_15491);

(statearr_15520_15562[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15502 === (17))){
var inst_15456 = (state_15501[(10)]);
var inst_15465 = cljs.core.first.call(null,inst_15456);
var inst_15466 = cljs.core.async.muxch_STAR_.call(null,inst_15465);
var inst_15467 = cljs.core.async.close_BANG_.call(null,inst_15466);
var inst_15468 = cljs.core.next.call(null,inst_15456);
var inst_15442 = inst_15468;
var inst_15443 = null;
var inst_15444 = (0);
var inst_15445 = (0);
var state_15501__$1 = (function (){var statearr_15521 = state_15501;
(statearr_15521[(12)] = inst_15442);

(statearr_15521[(13)] = inst_15444);

(statearr_15521[(14)] = inst_15467);

(statearr_15521[(15)] = inst_15445);

(statearr_15521[(16)] = inst_15443);

return statearr_15521;
})();
var statearr_15522_15563 = state_15501__$1;
(statearr_15522_15563[(2)] = null);

(statearr_15522_15563[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15502 === (3))){
var inst_15499 = (state_15501[(2)]);
var state_15501__$1 = state_15501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15501__$1,inst_15499);
} else {
if((state_val_15502 === (12))){
var inst_15476 = (state_15501[(2)]);
var state_15501__$1 = state_15501;
var statearr_15523_15564 = state_15501__$1;
(statearr_15523_15564[(2)] = inst_15476);

(statearr_15523_15564[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15502 === (2))){
var state_15501__$1 = state_15501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15501__$1,(4),ch);
} else {
if((state_val_15502 === (23))){
var state_15501__$1 = state_15501;
var statearr_15524_15565 = state_15501__$1;
(statearr_15524_15565[(2)] = null);

(statearr_15524_15565[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15502 === (19))){
var inst_15432 = (state_15501[(8)]);
var inst_15482 = (state_15501[(11)]);
var inst_15484 = cljs.core.async.muxch_STAR_.call(null,inst_15482);
var state_15501__$1 = state_15501;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15501__$1,(22),inst_15484,inst_15432);
} else {
if((state_val_15502 === (11))){
var inst_15442 = (state_15501[(12)]);
var inst_15456 = (state_15501[(10)]);
var inst_15456__$1 = cljs.core.seq.call(null,inst_15442);
var state_15501__$1 = (function (){var statearr_15525 = state_15501;
(statearr_15525[(10)] = inst_15456__$1);

return statearr_15525;
})();
if(inst_15456__$1){
var statearr_15526_15566 = state_15501__$1;
(statearr_15526_15566[(1)] = (13));

} else {
var statearr_15527_15567 = state_15501__$1;
(statearr_15527_15567[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15502 === (9))){
var inst_15478 = (state_15501[(2)]);
var state_15501__$1 = state_15501;
var statearr_15528_15568 = state_15501__$1;
(statearr_15528_15568[(2)] = inst_15478);

(statearr_15528_15568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15502 === (5))){
var inst_15439 = cljs.core.deref.call(null,mults);
var inst_15440 = cljs.core.vals.call(null,inst_15439);
var inst_15441 = cljs.core.seq.call(null,inst_15440);
var inst_15442 = inst_15441;
var inst_15443 = null;
var inst_15444 = (0);
var inst_15445 = (0);
var state_15501__$1 = (function (){var statearr_15529 = state_15501;
(statearr_15529[(12)] = inst_15442);

(statearr_15529[(13)] = inst_15444);

(statearr_15529[(15)] = inst_15445);

(statearr_15529[(16)] = inst_15443);

return statearr_15529;
})();
var statearr_15530_15569 = state_15501__$1;
(statearr_15530_15569[(2)] = null);

(statearr_15530_15569[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15502 === (14))){
var state_15501__$1 = state_15501;
var statearr_15534_15570 = state_15501__$1;
(statearr_15534_15570[(2)] = null);

(statearr_15534_15570[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15502 === (16))){
var inst_15456 = (state_15501[(10)]);
var inst_15460 = cljs.core.chunk_first.call(null,inst_15456);
var inst_15461 = cljs.core.chunk_rest.call(null,inst_15456);
var inst_15462 = cljs.core.count.call(null,inst_15460);
var inst_15442 = inst_15461;
var inst_15443 = inst_15460;
var inst_15444 = inst_15462;
var inst_15445 = (0);
var state_15501__$1 = (function (){var statearr_15535 = state_15501;
(statearr_15535[(12)] = inst_15442);

(statearr_15535[(13)] = inst_15444);

(statearr_15535[(15)] = inst_15445);

(statearr_15535[(16)] = inst_15443);

return statearr_15535;
})();
var statearr_15536_15571 = state_15501__$1;
(statearr_15536_15571[(2)] = null);

(statearr_15536_15571[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15502 === (10))){
var inst_15442 = (state_15501[(12)]);
var inst_15444 = (state_15501[(13)]);
var inst_15445 = (state_15501[(15)]);
var inst_15443 = (state_15501[(16)]);
var inst_15450 = cljs.core._nth.call(null,inst_15443,inst_15445);
var inst_15451 = cljs.core.async.muxch_STAR_.call(null,inst_15450);
var inst_15452 = cljs.core.async.close_BANG_.call(null,inst_15451);
var inst_15453 = (inst_15445 + (1));
var tmp15531 = inst_15442;
var tmp15532 = inst_15444;
var tmp15533 = inst_15443;
var inst_15442__$1 = tmp15531;
var inst_15443__$1 = tmp15533;
var inst_15444__$1 = tmp15532;
var inst_15445__$1 = inst_15453;
var state_15501__$1 = (function (){var statearr_15537 = state_15501;
(statearr_15537[(12)] = inst_15442__$1);

(statearr_15537[(13)] = inst_15444__$1);

(statearr_15537[(15)] = inst_15445__$1);

(statearr_15537[(17)] = inst_15452);

(statearr_15537[(16)] = inst_15443__$1);

return statearr_15537;
})();
var statearr_15538_15572 = state_15501__$1;
(statearr_15538_15572[(2)] = null);

(statearr_15538_15572[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15502 === (18))){
var inst_15471 = (state_15501[(2)]);
var state_15501__$1 = state_15501;
var statearr_15539_15573 = state_15501__$1;
(statearr_15539_15573[(2)] = inst_15471);

(statearr_15539_15573[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15502 === (8))){
var inst_15444 = (state_15501[(13)]);
var inst_15445 = (state_15501[(15)]);
var inst_15447 = (inst_15445 < inst_15444);
var inst_15448 = inst_15447;
var state_15501__$1 = state_15501;
if(cljs.core.truth_(inst_15448)){
var statearr_15540_15574 = state_15501__$1;
(statearr_15540_15574[(1)] = (10));

} else {
var statearr_15541_15575 = state_15501__$1;
(statearr_15541_15575[(1)] = (11));

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
});})(c__14313__auto___15547,mults,ensure_mult,p))
;
return ((function (switch__14223__auto__,c__14313__auto___15547,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__14224__auto__ = null;
var cljs$core$async$state_machine__14224__auto____0 = (function (){
var statearr_15542 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15542[(0)] = cljs$core$async$state_machine__14224__auto__);

(statearr_15542[(1)] = (1));

return statearr_15542;
});
var cljs$core$async$state_machine__14224__auto____1 = (function (state_15501){
while(true){
var ret_value__14225__auto__ = (function (){try{while(true){
var result__14226__auto__ = switch__14223__auto__.call(null,state_15501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14226__auto__;
}
break;
}
}catch (e15543){if((e15543 instanceof Object)){
var ex__14227__auto__ = e15543;
var statearr_15544_15576 = state_15501;
(statearr_15544_15576[(5)] = ex__14227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15543;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15577 = state_15501;
state_15501 = G__15577;
continue;
} else {
return ret_value__14225__auto__;
}
break;
}
});
cljs$core$async$state_machine__14224__auto__ = function(state_15501){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14224__auto____1.call(this,state_15501);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14224__auto____0;
cljs$core$async$state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14224__auto____1;
return cljs$core$async$state_machine__14224__auto__;
})()
;})(switch__14223__auto__,c__14313__auto___15547,mults,ensure_mult,p))
})();
var state__14315__auto__ = (function (){var statearr_15545 = f__14314__auto__.call(null);
(statearr_15545[(6)] = c__14313__auto___15547);

return statearr_15545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14315__auto__);
});})(c__14313__auto___15547,mults,ensure_mult,p))
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
var G__15579 = arguments.length;
switch (G__15579) {
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
var G__15582 = arguments.length;
switch (G__15582) {
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
var G__15585 = arguments.length;
switch (G__15585) {
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
var c__14313__auto___15652 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14313__auto___15652,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__14314__auto__ = (function (){var switch__14223__auto__ = ((function (c__14313__auto___15652,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15624){
var state_val_15625 = (state_15624[(1)]);
if((state_val_15625 === (7))){
var state_15624__$1 = state_15624;
var statearr_15626_15653 = state_15624__$1;
(statearr_15626_15653[(2)] = null);

(statearr_15626_15653[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15625 === (1))){
var state_15624__$1 = state_15624;
var statearr_15627_15654 = state_15624__$1;
(statearr_15627_15654[(2)] = null);

(statearr_15627_15654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15625 === (4))){
var inst_15588 = (state_15624[(7)]);
var inst_15590 = (inst_15588 < cnt);
var state_15624__$1 = state_15624;
if(cljs.core.truth_(inst_15590)){
var statearr_15628_15655 = state_15624__$1;
(statearr_15628_15655[(1)] = (6));

} else {
var statearr_15629_15656 = state_15624__$1;
(statearr_15629_15656[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15625 === (15))){
var inst_15620 = (state_15624[(2)]);
var state_15624__$1 = state_15624;
var statearr_15630_15657 = state_15624__$1;
(statearr_15630_15657[(2)] = inst_15620);

(statearr_15630_15657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15625 === (13))){
var inst_15613 = cljs.core.async.close_BANG_.call(null,out);
var state_15624__$1 = state_15624;
var statearr_15631_15658 = state_15624__$1;
(statearr_15631_15658[(2)] = inst_15613);

(statearr_15631_15658[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15625 === (6))){
var state_15624__$1 = state_15624;
var statearr_15632_15659 = state_15624__$1;
(statearr_15632_15659[(2)] = null);

(statearr_15632_15659[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15625 === (3))){
var inst_15622 = (state_15624[(2)]);
var state_15624__$1 = state_15624;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15624__$1,inst_15622);
} else {
if((state_val_15625 === (12))){
var inst_15610 = (state_15624[(8)]);
var inst_15610__$1 = (state_15624[(2)]);
var inst_15611 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15610__$1);
var state_15624__$1 = (function (){var statearr_15633 = state_15624;
(statearr_15633[(8)] = inst_15610__$1);

return statearr_15633;
})();
if(cljs.core.truth_(inst_15611)){
var statearr_15634_15660 = state_15624__$1;
(statearr_15634_15660[(1)] = (13));

} else {
var statearr_15635_15661 = state_15624__$1;
(statearr_15635_15661[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15625 === (2))){
var inst_15587 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_15588 = (0);
var state_15624__$1 = (function (){var statearr_15636 = state_15624;
(statearr_15636[(7)] = inst_15588);

(statearr_15636[(9)] = inst_15587);

return statearr_15636;
})();
var statearr_15637_15662 = state_15624__$1;
(statearr_15637_15662[(2)] = null);

(statearr_15637_15662[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15625 === (11))){
var inst_15588 = (state_15624[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15624,(10),Object,null,(9));
var inst_15597 = chs__$1.call(null,inst_15588);
var inst_15598 = done.call(null,inst_15588);
var inst_15599 = cljs.core.async.take_BANG_.call(null,inst_15597,inst_15598);
var state_15624__$1 = state_15624;
var statearr_15638_15663 = state_15624__$1;
(statearr_15638_15663[(2)] = inst_15599);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15624__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15625 === (9))){
var inst_15588 = (state_15624[(7)]);
var inst_15601 = (state_15624[(2)]);
var inst_15602 = (inst_15588 + (1));
var inst_15588__$1 = inst_15602;
var state_15624__$1 = (function (){var statearr_15639 = state_15624;
(statearr_15639[(7)] = inst_15588__$1);

(statearr_15639[(10)] = inst_15601);

return statearr_15639;
})();
var statearr_15640_15664 = state_15624__$1;
(statearr_15640_15664[(2)] = null);

(statearr_15640_15664[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15625 === (5))){
var inst_15608 = (state_15624[(2)]);
var state_15624__$1 = (function (){var statearr_15641 = state_15624;
(statearr_15641[(11)] = inst_15608);

return statearr_15641;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15624__$1,(12),dchan);
} else {
if((state_val_15625 === (14))){
var inst_15610 = (state_15624[(8)]);
var inst_15615 = cljs.core.apply.call(null,f,inst_15610);
var state_15624__$1 = state_15624;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15624__$1,(16),out,inst_15615);
} else {
if((state_val_15625 === (16))){
var inst_15617 = (state_15624[(2)]);
var state_15624__$1 = (function (){var statearr_15642 = state_15624;
(statearr_15642[(12)] = inst_15617);

return statearr_15642;
})();
var statearr_15643_15665 = state_15624__$1;
(statearr_15643_15665[(2)] = null);

(statearr_15643_15665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15625 === (10))){
var inst_15592 = (state_15624[(2)]);
var inst_15593 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_15624__$1 = (function (){var statearr_15644 = state_15624;
(statearr_15644[(13)] = inst_15592);

return statearr_15644;
})();
var statearr_15645_15666 = state_15624__$1;
(statearr_15645_15666[(2)] = inst_15593);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15624__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15625 === (8))){
var inst_15606 = (state_15624[(2)]);
var state_15624__$1 = state_15624;
var statearr_15646_15667 = state_15624__$1;
(statearr_15646_15667[(2)] = inst_15606);

(statearr_15646_15667[(1)] = (5));


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
});})(c__14313__auto___15652,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__14223__auto__,c__14313__auto___15652,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__14224__auto__ = null;
var cljs$core$async$state_machine__14224__auto____0 = (function (){
var statearr_15647 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15647[(0)] = cljs$core$async$state_machine__14224__auto__);

(statearr_15647[(1)] = (1));

return statearr_15647;
});
var cljs$core$async$state_machine__14224__auto____1 = (function (state_15624){
while(true){
var ret_value__14225__auto__ = (function (){try{while(true){
var result__14226__auto__ = switch__14223__auto__.call(null,state_15624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14226__auto__;
}
break;
}
}catch (e15648){if((e15648 instanceof Object)){
var ex__14227__auto__ = e15648;
var statearr_15649_15668 = state_15624;
(statearr_15649_15668[(5)] = ex__14227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15669 = state_15624;
state_15624 = G__15669;
continue;
} else {
return ret_value__14225__auto__;
}
break;
}
});
cljs$core$async$state_machine__14224__auto__ = function(state_15624){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14224__auto____1.call(this,state_15624);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14224__auto____0;
cljs$core$async$state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14224__auto____1;
return cljs$core$async$state_machine__14224__auto__;
})()
;})(switch__14223__auto__,c__14313__auto___15652,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__14315__auto__ = (function (){var statearr_15650 = f__14314__auto__.call(null);
(statearr_15650[(6)] = c__14313__auto___15652);

return statearr_15650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14315__auto__);
});})(c__14313__auto___15652,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__15672 = arguments.length;
switch (G__15672) {
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
var c__14313__auto___15726 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14313__auto___15726,out){
return (function (){
var f__14314__auto__ = (function (){var switch__14223__auto__ = ((function (c__14313__auto___15726,out){
return (function (state_15704){
var state_val_15705 = (state_15704[(1)]);
if((state_val_15705 === (7))){
var inst_15683 = (state_15704[(7)]);
var inst_15684 = (state_15704[(8)]);
var inst_15683__$1 = (state_15704[(2)]);
var inst_15684__$1 = cljs.core.nth.call(null,inst_15683__$1,(0),null);
var inst_15685 = cljs.core.nth.call(null,inst_15683__$1,(1),null);
var inst_15686 = (inst_15684__$1 == null);
var state_15704__$1 = (function (){var statearr_15706 = state_15704;
(statearr_15706[(7)] = inst_15683__$1);

(statearr_15706[(9)] = inst_15685);

(statearr_15706[(8)] = inst_15684__$1);

return statearr_15706;
})();
if(cljs.core.truth_(inst_15686)){
var statearr_15707_15727 = state_15704__$1;
(statearr_15707_15727[(1)] = (8));

} else {
var statearr_15708_15728 = state_15704__$1;
(statearr_15708_15728[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15705 === (1))){
var inst_15673 = cljs.core.vec.call(null,chs);
var inst_15674 = inst_15673;
var state_15704__$1 = (function (){var statearr_15709 = state_15704;
(statearr_15709[(10)] = inst_15674);

return statearr_15709;
})();
var statearr_15710_15729 = state_15704__$1;
(statearr_15710_15729[(2)] = null);

(statearr_15710_15729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15705 === (4))){
var inst_15674 = (state_15704[(10)]);
var state_15704__$1 = state_15704;
return cljs.core.async.ioc_alts_BANG_.call(null,state_15704__$1,(7),inst_15674);
} else {
if((state_val_15705 === (6))){
var inst_15700 = (state_15704[(2)]);
var state_15704__$1 = state_15704;
var statearr_15711_15730 = state_15704__$1;
(statearr_15711_15730[(2)] = inst_15700);

(statearr_15711_15730[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15705 === (3))){
var inst_15702 = (state_15704[(2)]);
var state_15704__$1 = state_15704;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15704__$1,inst_15702);
} else {
if((state_val_15705 === (2))){
var inst_15674 = (state_15704[(10)]);
var inst_15676 = cljs.core.count.call(null,inst_15674);
var inst_15677 = (inst_15676 > (0));
var state_15704__$1 = state_15704;
if(cljs.core.truth_(inst_15677)){
var statearr_15713_15731 = state_15704__$1;
(statearr_15713_15731[(1)] = (4));

} else {
var statearr_15714_15732 = state_15704__$1;
(statearr_15714_15732[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15705 === (11))){
var inst_15674 = (state_15704[(10)]);
var inst_15693 = (state_15704[(2)]);
var tmp15712 = inst_15674;
var inst_15674__$1 = tmp15712;
var state_15704__$1 = (function (){var statearr_15715 = state_15704;
(statearr_15715[(10)] = inst_15674__$1);

(statearr_15715[(11)] = inst_15693);

return statearr_15715;
})();
var statearr_15716_15733 = state_15704__$1;
(statearr_15716_15733[(2)] = null);

(statearr_15716_15733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15705 === (9))){
var inst_15684 = (state_15704[(8)]);
var state_15704__$1 = state_15704;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15704__$1,(11),out,inst_15684);
} else {
if((state_val_15705 === (5))){
var inst_15698 = cljs.core.async.close_BANG_.call(null,out);
var state_15704__$1 = state_15704;
var statearr_15717_15734 = state_15704__$1;
(statearr_15717_15734[(2)] = inst_15698);

(statearr_15717_15734[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15705 === (10))){
var inst_15696 = (state_15704[(2)]);
var state_15704__$1 = state_15704;
var statearr_15718_15735 = state_15704__$1;
(statearr_15718_15735[(2)] = inst_15696);

(statearr_15718_15735[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15705 === (8))){
var inst_15683 = (state_15704[(7)]);
var inst_15685 = (state_15704[(9)]);
var inst_15674 = (state_15704[(10)]);
var inst_15684 = (state_15704[(8)]);
var inst_15688 = (function (){var cs = inst_15674;
var vec__15679 = inst_15683;
var v = inst_15684;
var c = inst_15685;
return ((function (cs,vec__15679,v,c,inst_15683,inst_15685,inst_15674,inst_15684,state_val_15705,c__14313__auto___15726,out){
return (function (p1__15670_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__15670_SHARP_);
});
;})(cs,vec__15679,v,c,inst_15683,inst_15685,inst_15674,inst_15684,state_val_15705,c__14313__auto___15726,out))
})();
var inst_15689 = cljs.core.filterv.call(null,inst_15688,inst_15674);
var inst_15674__$1 = inst_15689;
var state_15704__$1 = (function (){var statearr_15719 = state_15704;
(statearr_15719[(10)] = inst_15674__$1);

return statearr_15719;
})();
var statearr_15720_15736 = state_15704__$1;
(statearr_15720_15736[(2)] = null);

(statearr_15720_15736[(1)] = (2));


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
});})(c__14313__auto___15726,out))
;
return ((function (switch__14223__auto__,c__14313__auto___15726,out){
return (function() {
var cljs$core$async$state_machine__14224__auto__ = null;
var cljs$core$async$state_machine__14224__auto____0 = (function (){
var statearr_15721 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15721[(0)] = cljs$core$async$state_machine__14224__auto__);

(statearr_15721[(1)] = (1));

return statearr_15721;
});
var cljs$core$async$state_machine__14224__auto____1 = (function (state_15704){
while(true){
var ret_value__14225__auto__ = (function (){try{while(true){
var result__14226__auto__ = switch__14223__auto__.call(null,state_15704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14226__auto__;
}
break;
}
}catch (e15722){if((e15722 instanceof Object)){
var ex__14227__auto__ = e15722;
var statearr_15723_15737 = state_15704;
(statearr_15723_15737[(5)] = ex__14227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15738 = state_15704;
state_15704 = G__15738;
continue;
} else {
return ret_value__14225__auto__;
}
break;
}
});
cljs$core$async$state_machine__14224__auto__ = function(state_15704){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14224__auto____1.call(this,state_15704);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14224__auto____0;
cljs$core$async$state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14224__auto____1;
return cljs$core$async$state_machine__14224__auto__;
})()
;})(switch__14223__auto__,c__14313__auto___15726,out))
})();
var state__14315__auto__ = (function (){var statearr_15724 = f__14314__auto__.call(null);
(statearr_15724[(6)] = c__14313__auto___15726);

return statearr_15724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14315__auto__);
});})(c__14313__auto___15726,out))
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
var G__15740 = arguments.length;
switch (G__15740) {
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
var c__14313__auto___15785 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14313__auto___15785,out){
return (function (){
var f__14314__auto__ = (function (){var switch__14223__auto__ = ((function (c__14313__auto___15785,out){
return (function (state_15764){
var state_val_15765 = (state_15764[(1)]);
if((state_val_15765 === (7))){
var inst_15746 = (state_15764[(7)]);
var inst_15746__$1 = (state_15764[(2)]);
var inst_15747 = (inst_15746__$1 == null);
var inst_15748 = cljs.core.not.call(null,inst_15747);
var state_15764__$1 = (function (){var statearr_15766 = state_15764;
(statearr_15766[(7)] = inst_15746__$1);

return statearr_15766;
})();
if(inst_15748){
var statearr_15767_15786 = state_15764__$1;
(statearr_15767_15786[(1)] = (8));

} else {
var statearr_15768_15787 = state_15764__$1;
(statearr_15768_15787[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15765 === (1))){
var inst_15741 = (0);
var state_15764__$1 = (function (){var statearr_15769 = state_15764;
(statearr_15769[(8)] = inst_15741);

return statearr_15769;
})();
var statearr_15770_15788 = state_15764__$1;
(statearr_15770_15788[(2)] = null);

(statearr_15770_15788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15765 === (4))){
var state_15764__$1 = state_15764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15764__$1,(7),ch);
} else {
if((state_val_15765 === (6))){
var inst_15759 = (state_15764[(2)]);
var state_15764__$1 = state_15764;
var statearr_15771_15789 = state_15764__$1;
(statearr_15771_15789[(2)] = inst_15759);

(statearr_15771_15789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15765 === (3))){
var inst_15761 = (state_15764[(2)]);
var inst_15762 = cljs.core.async.close_BANG_.call(null,out);
var state_15764__$1 = (function (){var statearr_15772 = state_15764;
(statearr_15772[(9)] = inst_15761);

return statearr_15772;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15764__$1,inst_15762);
} else {
if((state_val_15765 === (2))){
var inst_15741 = (state_15764[(8)]);
var inst_15743 = (inst_15741 < n);
var state_15764__$1 = state_15764;
if(cljs.core.truth_(inst_15743)){
var statearr_15773_15790 = state_15764__$1;
(statearr_15773_15790[(1)] = (4));

} else {
var statearr_15774_15791 = state_15764__$1;
(statearr_15774_15791[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15765 === (11))){
var inst_15741 = (state_15764[(8)]);
var inst_15751 = (state_15764[(2)]);
var inst_15752 = (inst_15741 + (1));
var inst_15741__$1 = inst_15752;
var state_15764__$1 = (function (){var statearr_15775 = state_15764;
(statearr_15775[(8)] = inst_15741__$1);

(statearr_15775[(10)] = inst_15751);

return statearr_15775;
})();
var statearr_15776_15792 = state_15764__$1;
(statearr_15776_15792[(2)] = null);

(statearr_15776_15792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15765 === (9))){
var state_15764__$1 = state_15764;
var statearr_15777_15793 = state_15764__$1;
(statearr_15777_15793[(2)] = null);

(statearr_15777_15793[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15765 === (5))){
var state_15764__$1 = state_15764;
var statearr_15778_15794 = state_15764__$1;
(statearr_15778_15794[(2)] = null);

(statearr_15778_15794[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15765 === (10))){
var inst_15756 = (state_15764[(2)]);
var state_15764__$1 = state_15764;
var statearr_15779_15795 = state_15764__$1;
(statearr_15779_15795[(2)] = inst_15756);

(statearr_15779_15795[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15765 === (8))){
var inst_15746 = (state_15764[(7)]);
var state_15764__$1 = state_15764;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15764__$1,(11),out,inst_15746);
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
});})(c__14313__auto___15785,out))
;
return ((function (switch__14223__auto__,c__14313__auto___15785,out){
return (function() {
var cljs$core$async$state_machine__14224__auto__ = null;
var cljs$core$async$state_machine__14224__auto____0 = (function (){
var statearr_15780 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15780[(0)] = cljs$core$async$state_machine__14224__auto__);

(statearr_15780[(1)] = (1));

return statearr_15780;
});
var cljs$core$async$state_machine__14224__auto____1 = (function (state_15764){
while(true){
var ret_value__14225__auto__ = (function (){try{while(true){
var result__14226__auto__ = switch__14223__auto__.call(null,state_15764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14226__auto__;
}
break;
}
}catch (e15781){if((e15781 instanceof Object)){
var ex__14227__auto__ = e15781;
var statearr_15782_15796 = state_15764;
(statearr_15782_15796[(5)] = ex__14227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15797 = state_15764;
state_15764 = G__15797;
continue;
} else {
return ret_value__14225__auto__;
}
break;
}
});
cljs$core$async$state_machine__14224__auto__ = function(state_15764){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14224__auto____1.call(this,state_15764);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14224__auto____0;
cljs$core$async$state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14224__auto____1;
return cljs$core$async$state_machine__14224__auto__;
})()
;})(switch__14223__auto__,c__14313__auto___15785,out))
})();
var state__14315__auto__ = (function (){var statearr_15783 = f__14314__auto__.call(null);
(statearr_15783[(6)] = c__14313__auto___15785);

return statearr_15783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14315__auto__);
});})(c__14313__auto___15785,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15799 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15799 = (function (f,ch,meta15800){
this.f = f;
this.ch = ch;
this.meta15800 = meta15800;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15801,meta15800__$1){
var self__ = this;
var _15801__$1 = this;
return (new cljs.core.async.t_cljs$core$async15799(self__.f,self__.ch,meta15800__$1));
});

cljs.core.async.t_cljs$core$async15799.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15801){
var self__ = this;
var _15801__$1 = this;
return self__.meta15800;
});

cljs.core.async.t_cljs$core$async15799.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15799.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15799.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15799.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15799.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async15802 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15802 = (function (f,ch,meta15800,_,fn1,meta15803){
this.f = f;
this.ch = ch;
this.meta15800 = meta15800;
this._ = _;
this.fn1 = fn1;
this.meta15803 = meta15803;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15804,meta15803__$1){
var self__ = this;
var _15804__$1 = this;
return (new cljs.core.async.t_cljs$core$async15802(self__.f,self__.ch,self__.meta15800,self__._,self__.fn1,meta15803__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async15802.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15804){
var self__ = this;
var _15804__$1 = this;
return self__.meta15803;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15802.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15802.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15802.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15802.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__15798_SHARP_){
return f1.call(null,(((p1__15798_SHARP_ == null))?null:self__.f.call(null,p1__15798_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async15802.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15800","meta15800",-1427808824,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async15799","cljs.core.async/t_cljs$core$async15799",913998428,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta15803","meta15803",2064549015,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15802.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15802.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15802";

cljs.core.async.t_cljs$core$async15802.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__9572__auto__,writer__9573__auto__,opt__9574__auto__){
return cljs.core._write.call(null,writer__9573__auto__,"cljs.core.async/t_cljs$core$async15802");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async15802 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15802(f__$1,ch__$1,meta15800__$1,___$2,fn1__$1,meta15803){
return (new cljs.core.async.t_cljs$core$async15802(f__$1,ch__$1,meta15800__$1,___$2,fn1__$1,meta15803));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async15802(self__.f,self__.ch,self__.meta15800,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__8889__auto__ = ret;
if(cljs.core.truth_(and__8889__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__8889__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async15799.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15799.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async15799.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15800","meta15800",-1427808824,null)], null);
});

cljs.core.async.t_cljs$core$async15799.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15799.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15799";

cljs.core.async.t_cljs$core$async15799.cljs$lang$ctorPrWriter = (function (this__9572__auto__,writer__9573__auto__,opt__9574__auto__){
return cljs.core._write.call(null,writer__9573__auto__,"cljs.core.async/t_cljs$core$async15799");
});

cljs.core.async.__GT_t_cljs$core$async15799 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15799(f__$1,ch__$1,meta15800){
return (new cljs.core.async.t_cljs$core$async15799(f__$1,ch__$1,meta15800));
});

}

return (new cljs.core.async.t_cljs$core$async15799(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15805 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15805 = (function (f,ch,meta15806){
this.f = f;
this.ch = ch;
this.meta15806 = meta15806;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15807,meta15806__$1){
var self__ = this;
var _15807__$1 = this;
return (new cljs.core.async.t_cljs$core$async15805(self__.f,self__.ch,meta15806__$1));
});

cljs.core.async.t_cljs$core$async15805.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15807){
var self__ = this;
var _15807__$1 = this;
return self__.meta15806;
});

cljs.core.async.t_cljs$core$async15805.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15805.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15805.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15805.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15805.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15805.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async15805.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15806","meta15806",-1696591496,null)], null);
});

cljs.core.async.t_cljs$core$async15805.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15805.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15805";

cljs.core.async.t_cljs$core$async15805.cljs$lang$ctorPrWriter = (function (this__9572__auto__,writer__9573__auto__,opt__9574__auto__){
return cljs.core._write.call(null,writer__9573__auto__,"cljs.core.async/t_cljs$core$async15805");
});

cljs.core.async.__GT_t_cljs$core$async15805 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async15805(f__$1,ch__$1,meta15806){
return (new cljs.core.async.t_cljs$core$async15805(f__$1,ch__$1,meta15806));
});

}

return (new cljs.core.async.t_cljs$core$async15805(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async15808 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15808 = (function (p,ch,meta15809){
this.p = p;
this.ch = ch;
this.meta15809 = meta15809;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15810,meta15809__$1){
var self__ = this;
var _15810__$1 = this;
return (new cljs.core.async.t_cljs$core$async15808(self__.p,self__.ch,meta15809__$1));
});

cljs.core.async.t_cljs$core$async15808.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15810){
var self__ = this;
var _15810__$1 = this;
return self__.meta15809;
});

cljs.core.async.t_cljs$core$async15808.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15808.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15808.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15808.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15808.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15808.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15808.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async15808.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15809","meta15809",-2131766912,null)], null);
});

cljs.core.async.t_cljs$core$async15808.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15808.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15808";

cljs.core.async.t_cljs$core$async15808.cljs$lang$ctorPrWriter = (function (this__9572__auto__,writer__9573__auto__,opt__9574__auto__){
return cljs.core._write.call(null,writer__9573__auto__,"cljs.core.async/t_cljs$core$async15808");
});

cljs.core.async.__GT_t_cljs$core$async15808 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async15808(p__$1,ch__$1,meta15809){
return (new cljs.core.async.t_cljs$core$async15808(p__$1,ch__$1,meta15809));
});

}

return (new cljs.core.async.t_cljs$core$async15808(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__15812 = arguments.length;
switch (G__15812) {
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
var c__14313__auto___15852 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14313__auto___15852,out){
return (function (){
var f__14314__auto__ = (function (){var switch__14223__auto__ = ((function (c__14313__auto___15852,out){
return (function (state_15833){
var state_val_15834 = (state_15833[(1)]);
if((state_val_15834 === (7))){
var inst_15829 = (state_15833[(2)]);
var state_15833__$1 = state_15833;
var statearr_15835_15853 = state_15833__$1;
(statearr_15835_15853[(2)] = inst_15829);

(statearr_15835_15853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15834 === (1))){
var state_15833__$1 = state_15833;
var statearr_15836_15854 = state_15833__$1;
(statearr_15836_15854[(2)] = null);

(statearr_15836_15854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15834 === (4))){
var inst_15815 = (state_15833[(7)]);
var inst_15815__$1 = (state_15833[(2)]);
var inst_15816 = (inst_15815__$1 == null);
var state_15833__$1 = (function (){var statearr_15837 = state_15833;
(statearr_15837[(7)] = inst_15815__$1);

return statearr_15837;
})();
if(cljs.core.truth_(inst_15816)){
var statearr_15838_15855 = state_15833__$1;
(statearr_15838_15855[(1)] = (5));

} else {
var statearr_15839_15856 = state_15833__$1;
(statearr_15839_15856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15834 === (6))){
var inst_15815 = (state_15833[(7)]);
var inst_15820 = p.call(null,inst_15815);
var state_15833__$1 = state_15833;
if(cljs.core.truth_(inst_15820)){
var statearr_15840_15857 = state_15833__$1;
(statearr_15840_15857[(1)] = (8));

} else {
var statearr_15841_15858 = state_15833__$1;
(statearr_15841_15858[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15834 === (3))){
var inst_15831 = (state_15833[(2)]);
var state_15833__$1 = state_15833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15833__$1,inst_15831);
} else {
if((state_val_15834 === (2))){
var state_15833__$1 = state_15833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15833__$1,(4),ch);
} else {
if((state_val_15834 === (11))){
var inst_15823 = (state_15833[(2)]);
var state_15833__$1 = state_15833;
var statearr_15842_15859 = state_15833__$1;
(statearr_15842_15859[(2)] = inst_15823);

(statearr_15842_15859[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15834 === (9))){
var state_15833__$1 = state_15833;
var statearr_15843_15860 = state_15833__$1;
(statearr_15843_15860[(2)] = null);

(statearr_15843_15860[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15834 === (5))){
var inst_15818 = cljs.core.async.close_BANG_.call(null,out);
var state_15833__$1 = state_15833;
var statearr_15844_15861 = state_15833__$1;
(statearr_15844_15861[(2)] = inst_15818);

(statearr_15844_15861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15834 === (10))){
var inst_15826 = (state_15833[(2)]);
var state_15833__$1 = (function (){var statearr_15845 = state_15833;
(statearr_15845[(8)] = inst_15826);

return statearr_15845;
})();
var statearr_15846_15862 = state_15833__$1;
(statearr_15846_15862[(2)] = null);

(statearr_15846_15862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15834 === (8))){
var inst_15815 = (state_15833[(7)]);
var state_15833__$1 = state_15833;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15833__$1,(11),out,inst_15815);
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
});})(c__14313__auto___15852,out))
;
return ((function (switch__14223__auto__,c__14313__auto___15852,out){
return (function() {
var cljs$core$async$state_machine__14224__auto__ = null;
var cljs$core$async$state_machine__14224__auto____0 = (function (){
var statearr_15847 = [null,null,null,null,null,null,null,null,null];
(statearr_15847[(0)] = cljs$core$async$state_machine__14224__auto__);

(statearr_15847[(1)] = (1));

return statearr_15847;
});
var cljs$core$async$state_machine__14224__auto____1 = (function (state_15833){
while(true){
var ret_value__14225__auto__ = (function (){try{while(true){
var result__14226__auto__ = switch__14223__auto__.call(null,state_15833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14226__auto__;
}
break;
}
}catch (e15848){if((e15848 instanceof Object)){
var ex__14227__auto__ = e15848;
var statearr_15849_15863 = state_15833;
(statearr_15849_15863[(5)] = ex__14227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15848;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15864 = state_15833;
state_15833 = G__15864;
continue;
} else {
return ret_value__14225__auto__;
}
break;
}
});
cljs$core$async$state_machine__14224__auto__ = function(state_15833){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14224__auto____1.call(this,state_15833);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14224__auto____0;
cljs$core$async$state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14224__auto____1;
return cljs$core$async$state_machine__14224__auto__;
})()
;})(switch__14223__auto__,c__14313__auto___15852,out))
})();
var state__14315__auto__ = (function (){var statearr_15850 = f__14314__auto__.call(null);
(statearr_15850[(6)] = c__14313__auto___15852);

return statearr_15850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14315__auto__);
});})(c__14313__auto___15852,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__15866 = arguments.length;
switch (G__15866) {
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
var c__14313__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14313__auto__){
return (function (){
var f__14314__auto__ = (function (){var switch__14223__auto__ = ((function (c__14313__auto__){
return (function (state_15929){
var state_val_15930 = (state_15929[(1)]);
if((state_val_15930 === (7))){
var inst_15925 = (state_15929[(2)]);
var state_15929__$1 = state_15929;
var statearr_15931_15969 = state_15929__$1;
(statearr_15931_15969[(2)] = inst_15925);

(statearr_15931_15969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (20))){
var inst_15895 = (state_15929[(7)]);
var inst_15906 = (state_15929[(2)]);
var inst_15907 = cljs.core.next.call(null,inst_15895);
var inst_15881 = inst_15907;
var inst_15882 = null;
var inst_15883 = (0);
var inst_15884 = (0);
var state_15929__$1 = (function (){var statearr_15932 = state_15929;
(statearr_15932[(8)] = inst_15883);

(statearr_15932[(9)] = inst_15881);

(statearr_15932[(10)] = inst_15906);

(statearr_15932[(11)] = inst_15882);

(statearr_15932[(12)] = inst_15884);

return statearr_15932;
})();
var statearr_15933_15970 = state_15929__$1;
(statearr_15933_15970[(2)] = null);

(statearr_15933_15970[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (1))){
var state_15929__$1 = state_15929;
var statearr_15934_15971 = state_15929__$1;
(statearr_15934_15971[(2)] = null);

(statearr_15934_15971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (4))){
var inst_15870 = (state_15929[(13)]);
var inst_15870__$1 = (state_15929[(2)]);
var inst_15871 = (inst_15870__$1 == null);
var state_15929__$1 = (function (){var statearr_15935 = state_15929;
(statearr_15935[(13)] = inst_15870__$1);

return statearr_15935;
})();
if(cljs.core.truth_(inst_15871)){
var statearr_15936_15972 = state_15929__$1;
(statearr_15936_15972[(1)] = (5));

} else {
var statearr_15937_15973 = state_15929__$1;
(statearr_15937_15973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (15))){
var state_15929__$1 = state_15929;
var statearr_15941_15974 = state_15929__$1;
(statearr_15941_15974[(2)] = null);

(statearr_15941_15974[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (21))){
var state_15929__$1 = state_15929;
var statearr_15942_15975 = state_15929__$1;
(statearr_15942_15975[(2)] = null);

(statearr_15942_15975[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (13))){
var inst_15883 = (state_15929[(8)]);
var inst_15881 = (state_15929[(9)]);
var inst_15882 = (state_15929[(11)]);
var inst_15884 = (state_15929[(12)]);
var inst_15891 = (state_15929[(2)]);
var inst_15892 = (inst_15884 + (1));
var tmp15938 = inst_15883;
var tmp15939 = inst_15881;
var tmp15940 = inst_15882;
var inst_15881__$1 = tmp15939;
var inst_15882__$1 = tmp15940;
var inst_15883__$1 = tmp15938;
var inst_15884__$1 = inst_15892;
var state_15929__$1 = (function (){var statearr_15943 = state_15929;
(statearr_15943[(8)] = inst_15883__$1);

(statearr_15943[(9)] = inst_15881__$1);

(statearr_15943[(11)] = inst_15882__$1);

(statearr_15943[(12)] = inst_15884__$1);

(statearr_15943[(14)] = inst_15891);

return statearr_15943;
})();
var statearr_15944_15976 = state_15929__$1;
(statearr_15944_15976[(2)] = null);

(statearr_15944_15976[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (22))){
var state_15929__$1 = state_15929;
var statearr_15945_15977 = state_15929__$1;
(statearr_15945_15977[(2)] = null);

(statearr_15945_15977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (6))){
var inst_15870 = (state_15929[(13)]);
var inst_15879 = f.call(null,inst_15870);
var inst_15880 = cljs.core.seq.call(null,inst_15879);
var inst_15881 = inst_15880;
var inst_15882 = null;
var inst_15883 = (0);
var inst_15884 = (0);
var state_15929__$1 = (function (){var statearr_15946 = state_15929;
(statearr_15946[(8)] = inst_15883);

(statearr_15946[(9)] = inst_15881);

(statearr_15946[(11)] = inst_15882);

(statearr_15946[(12)] = inst_15884);

return statearr_15946;
})();
var statearr_15947_15978 = state_15929__$1;
(statearr_15947_15978[(2)] = null);

(statearr_15947_15978[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (17))){
var inst_15895 = (state_15929[(7)]);
var inst_15899 = cljs.core.chunk_first.call(null,inst_15895);
var inst_15900 = cljs.core.chunk_rest.call(null,inst_15895);
var inst_15901 = cljs.core.count.call(null,inst_15899);
var inst_15881 = inst_15900;
var inst_15882 = inst_15899;
var inst_15883 = inst_15901;
var inst_15884 = (0);
var state_15929__$1 = (function (){var statearr_15948 = state_15929;
(statearr_15948[(8)] = inst_15883);

(statearr_15948[(9)] = inst_15881);

(statearr_15948[(11)] = inst_15882);

(statearr_15948[(12)] = inst_15884);

return statearr_15948;
})();
var statearr_15949_15979 = state_15929__$1;
(statearr_15949_15979[(2)] = null);

(statearr_15949_15979[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (3))){
var inst_15927 = (state_15929[(2)]);
var state_15929__$1 = state_15929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15929__$1,inst_15927);
} else {
if((state_val_15930 === (12))){
var inst_15915 = (state_15929[(2)]);
var state_15929__$1 = state_15929;
var statearr_15950_15980 = state_15929__$1;
(statearr_15950_15980[(2)] = inst_15915);

(statearr_15950_15980[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (2))){
var state_15929__$1 = state_15929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15929__$1,(4),in$);
} else {
if((state_val_15930 === (23))){
var inst_15923 = (state_15929[(2)]);
var state_15929__$1 = state_15929;
var statearr_15951_15981 = state_15929__$1;
(statearr_15951_15981[(2)] = inst_15923);

(statearr_15951_15981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (19))){
var inst_15910 = (state_15929[(2)]);
var state_15929__$1 = state_15929;
var statearr_15952_15982 = state_15929__$1;
(statearr_15952_15982[(2)] = inst_15910);

(statearr_15952_15982[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (11))){
var inst_15881 = (state_15929[(9)]);
var inst_15895 = (state_15929[(7)]);
var inst_15895__$1 = cljs.core.seq.call(null,inst_15881);
var state_15929__$1 = (function (){var statearr_15953 = state_15929;
(statearr_15953[(7)] = inst_15895__$1);

return statearr_15953;
})();
if(inst_15895__$1){
var statearr_15954_15983 = state_15929__$1;
(statearr_15954_15983[(1)] = (14));

} else {
var statearr_15955_15984 = state_15929__$1;
(statearr_15955_15984[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (9))){
var inst_15917 = (state_15929[(2)]);
var inst_15918 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_15929__$1 = (function (){var statearr_15956 = state_15929;
(statearr_15956[(15)] = inst_15917);

return statearr_15956;
})();
if(cljs.core.truth_(inst_15918)){
var statearr_15957_15985 = state_15929__$1;
(statearr_15957_15985[(1)] = (21));

} else {
var statearr_15958_15986 = state_15929__$1;
(statearr_15958_15986[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (5))){
var inst_15873 = cljs.core.async.close_BANG_.call(null,out);
var state_15929__$1 = state_15929;
var statearr_15959_15987 = state_15929__$1;
(statearr_15959_15987[(2)] = inst_15873);

(statearr_15959_15987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (14))){
var inst_15895 = (state_15929[(7)]);
var inst_15897 = cljs.core.chunked_seq_QMARK_.call(null,inst_15895);
var state_15929__$1 = state_15929;
if(inst_15897){
var statearr_15960_15988 = state_15929__$1;
(statearr_15960_15988[(1)] = (17));

} else {
var statearr_15961_15989 = state_15929__$1;
(statearr_15961_15989[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (16))){
var inst_15913 = (state_15929[(2)]);
var state_15929__$1 = state_15929;
var statearr_15962_15990 = state_15929__$1;
(statearr_15962_15990[(2)] = inst_15913);

(statearr_15962_15990[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15930 === (10))){
var inst_15882 = (state_15929[(11)]);
var inst_15884 = (state_15929[(12)]);
var inst_15889 = cljs.core._nth.call(null,inst_15882,inst_15884);
var state_15929__$1 = state_15929;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15929__$1,(13),out,inst_15889);
} else {
if((state_val_15930 === (18))){
var inst_15895 = (state_15929[(7)]);
var inst_15904 = cljs.core.first.call(null,inst_15895);
var state_15929__$1 = state_15929;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15929__$1,(20),out,inst_15904);
} else {
if((state_val_15930 === (8))){
var inst_15883 = (state_15929[(8)]);
var inst_15884 = (state_15929[(12)]);
var inst_15886 = (inst_15884 < inst_15883);
var inst_15887 = inst_15886;
var state_15929__$1 = state_15929;
if(cljs.core.truth_(inst_15887)){
var statearr_15963_15991 = state_15929__$1;
(statearr_15963_15991[(1)] = (10));

} else {
var statearr_15964_15992 = state_15929__$1;
(statearr_15964_15992[(1)] = (11));

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
});})(c__14313__auto__))
;
return ((function (switch__14223__auto__,c__14313__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14224__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14224__auto____0 = (function (){
var statearr_15965 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15965[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14224__auto__);

(statearr_15965[(1)] = (1));

return statearr_15965;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14224__auto____1 = (function (state_15929){
while(true){
var ret_value__14225__auto__ = (function (){try{while(true){
var result__14226__auto__ = switch__14223__auto__.call(null,state_15929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14226__auto__;
}
break;
}
}catch (e15966){if((e15966 instanceof Object)){
var ex__14227__auto__ = e15966;
var statearr_15967_15993 = state_15929;
(statearr_15967_15993[(5)] = ex__14227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15994 = state_15929;
state_15929 = G__15994;
continue;
} else {
return ret_value__14225__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14224__auto__ = function(state_15929){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14224__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14224__auto____1.call(this,state_15929);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14224__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14224__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14224__auto__;
})()
;})(switch__14223__auto__,c__14313__auto__))
})();
var state__14315__auto__ = (function (){var statearr_15968 = f__14314__auto__.call(null);
(statearr_15968[(6)] = c__14313__auto__);

return statearr_15968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14315__auto__);
});})(c__14313__auto__))
);

return c__14313__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__15996 = arguments.length;
switch (G__15996) {
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
var G__15999 = arguments.length;
switch (G__15999) {
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
var G__16002 = arguments.length;
switch (G__16002) {
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
var c__14313__auto___16049 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14313__auto___16049,out){
return (function (){
var f__14314__auto__ = (function (){var switch__14223__auto__ = ((function (c__14313__auto___16049,out){
return (function (state_16026){
var state_val_16027 = (state_16026[(1)]);
if((state_val_16027 === (7))){
var inst_16021 = (state_16026[(2)]);
var state_16026__$1 = state_16026;
var statearr_16028_16050 = state_16026__$1;
(statearr_16028_16050[(2)] = inst_16021);

(statearr_16028_16050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16027 === (1))){
var inst_16003 = null;
var state_16026__$1 = (function (){var statearr_16029 = state_16026;
(statearr_16029[(7)] = inst_16003);

return statearr_16029;
})();
var statearr_16030_16051 = state_16026__$1;
(statearr_16030_16051[(2)] = null);

(statearr_16030_16051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16027 === (4))){
var inst_16006 = (state_16026[(8)]);
var inst_16006__$1 = (state_16026[(2)]);
var inst_16007 = (inst_16006__$1 == null);
var inst_16008 = cljs.core.not.call(null,inst_16007);
var state_16026__$1 = (function (){var statearr_16031 = state_16026;
(statearr_16031[(8)] = inst_16006__$1);

return statearr_16031;
})();
if(inst_16008){
var statearr_16032_16052 = state_16026__$1;
(statearr_16032_16052[(1)] = (5));

} else {
var statearr_16033_16053 = state_16026__$1;
(statearr_16033_16053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16027 === (6))){
var state_16026__$1 = state_16026;
var statearr_16034_16054 = state_16026__$1;
(statearr_16034_16054[(2)] = null);

(statearr_16034_16054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16027 === (3))){
var inst_16023 = (state_16026[(2)]);
var inst_16024 = cljs.core.async.close_BANG_.call(null,out);
var state_16026__$1 = (function (){var statearr_16035 = state_16026;
(statearr_16035[(9)] = inst_16023);

return statearr_16035;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16026__$1,inst_16024);
} else {
if((state_val_16027 === (2))){
var state_16026__$1 = state_16026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16026__$1,(4),ch);
} else {
if((state_val_16027 === (11))){
var inst_16006 = (state_16026[(8)]);
var inst_16015 = (state_16026[(2)]);
var inst_16003 = inst_16006;
var state_16026__$1 = (function (){var statearr_16036 = state_16026;
(statearr_16036[(7)] = inst_16003);

(statearr_16036[(10)] = inst_16015);

return statearr_16036;
})();
var statearr_16037_16055 = state_16026__$1;
(statearr_16037_16055[(2)] = null);

(statearr_16037_16055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16027 === (9))){
var inst_16006 = (state_16026[(8)]);
var state_16026__$1 = state_16026;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16026__$1,(11),out,inst_16006);
} else {
if((state_val_16027 === (5))){
var inst_16003 = (state_16026[(7)]);
var inst_16006 = (state_16026[(8)]);
var inst_16010 = cljs.core._EQ_.call(null,inst_16006,inst_16003);
var state_16026__$1 = state_16026;
if(inst_16010){
var statearr_16039_16056 = state_16026__$1;
(statearr_16039_16056[(1)] = (8));

} else {
var statearr_16040_16057 = state_16026__$1;
(statearr_16040_16057[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16027 === (10))){
var inst_16018 = (state_16026[(2)]);
var state_16026__$1 = state_16026;
var statearr_16041_16058 = state_16026__$1;
(statearr_16041_16058[(2)] = inst_16018);

(statearr_16041_16058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16027 === (8))){
var inst_16003 = (state_16026[(7)]);
var tmp16038 = inst_16003;
var inst_16003__$1 = tmp16038;
var state_16026__$1 = (function (){var statearr_16042 = state_16026;
(statearr_16042[(7)] = inst_16003__$1);

return statearr_16042;
})();
var statearr_16043_16059 = state_16026__$1;
(statearr_16043_16059[(2)] = null);

(statearr_16043_16059[(1)] = (2));


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
});})(c__14313__auto___16049,out))
;
return ((function (switch__14223__auto__,c__14313__auto___16049,out){
return (function() {
var cljs$core$async$state_machine__14224__auto__ = null;
var cljs$core$async$state_machine__14224__auto____0 = (function (){
var statearr_16044 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16044[(0)] = cljs$core$async$state_machine__14224__auto__);

(statearr_16044[(1)] = (1));

return statearr_16044;
});
var cljs$core$async$state_machine__14224__auto____1 = (function (state_16026){
while(true){
var ret_value__14225__auto__ = (function (){try{while(true){
var result__14226__auto__ = switch__14223__auto__.call(null,state_16026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14226__auto__;
}
break;
}
}catch (e16045){if((e16045 instanceof Object)){
var ex__14227__auto__ = e16045;
var statearr_16046_16060 = state_16026;
(statearr_16046_16060[(5)] = ex__14227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16061 = state_16026;
state_16026 = G__16061;
continue;
} else {
return ret_value__14225__auto__;
}
break;
}
});
cljs$core$async$state_machine__14224__auto__ = function(state_16026){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14224__auto____1.call(this,state_16026);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14224__auto____0;
cljs$core$async$state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14224__auto____1;
return cljs$core$async$state_machine__14224__auto__;
})()
;})(switch__14223__auto__,c__14313__auto___16049,out))
})();
var state__14315__auto__ = (function (){var statearr_16047 = f__14314__auto__.call(null);
(statearr_16047[(6)] = c__14313__auto___16049);

return statearr_16047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14315__auto__);
});})(c__14313__auto___16049,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__16063 = arguments.length;
switch (G__16063) {
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
var c__14313__auto___16129 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14313__auto___16129,out){
return (function (){
var f__14314__auto__ = (function (){var switch__14223__auto__ = ((function (c__14313__auto___16129,out){
return (function (state_16101){
var state_val_16102 = (state_16101[(1)]);
if((state_val_16102 === (7))){
var inst_16097 = (state_16101[(2)]);
var state_16101__$1 = state_16101;
var statearr_16103_16130 = state_16101__$1;
(statearr_16103_16130[(2)] = inst_16097);

(statearr_16103_16130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16102 === (1))){
var inst_16064 = (new Array(n));
var inst_16065 = inst_16064;
var inst_16066 = (0);
var state_16101__$1 = (function (){var statearr_16104 = state_16101;
(statearr_16104[(7)] = inst_16066);

(statearr_16104[(8)] = inst_16065);

return statearr_16104;
})();
var statearr_16105_16131 = state_16101__$1;
(statearr_16105_16131[(2)] = null);

(statearr_16105_16131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16102 === (4))){
var inst_16069 = (state_16101[(9)]);
var inst_16069__$1 = (state_16101[(2)]);
var inst_16070 = (inst_16069__$1 == null);
var inst_16071 = cljs.core.not.call(null,inst_16070);
var state_16101__$1 = (function (){var statearr_16106 = state_16101;
(statearr_16106[(9)] = inst_16069__$1);

return statearr_16106;
})();
if(inst_16071){
var statearr_16107_16132 = state_16101__$1;
(statearr_16107_16132[(1)] = (5));

} else {
var statearr_16108_16133 = state_16101__$1;
(statearr_16108_16133[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16102 === (15))){
var inst_16091 = (state_16101[(2)]);
var state_16101__$1 = state_16101;
var statearr_16109_16134 = state_16101__$1;
(statearr_16109_16134[(2)] = inst_16091);

(statearr_16109_16134[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16102 === (13))){
var state_16101__$1 = state_16101;
var statearr_16110_16135 = state_16101__$1;
(statearr_16110_16135[(2)] = null);

(statearr_16110_16135[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16102 === (6))){
var inst_16066 = (state_16101[(7)]);
var inst_16087 = (inst_16066 > (0));
var state_16101__$1 = state_16101;
if(cljs.core.truth_(inst_16087)){
var statearr_16111_16136 = state_16101__$1;
(statearr_16111_16136[(1)] = (12));

} else {
var statearr_16112_16137 = state_16101__$1;
(statearr_16112_16137[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16102 === (3))){
var inst_16099 = (state_16101[(2)]);
var state_16101__$1 = state_16101;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16101__$1,inst_16099);
} else {
if((state_val_16102 === (12))){
var inst_16065 = (state_16101[(8)]);
var inst_16089 = cljs.core.vec.call(null,inst_16065);
var state_16101__$1 = state_16101;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16101__$1,(15),out,inst_16089);
} else {
if((state_val_16102 === (2))){
var state_16101__$1 = state_16101;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16101__$1,(4),ch);
} else {
if((state_val_16102 === (11))){
var inst_16081 = (state_16101[(2)]);
var inst_16082 = (new Array(n));
var inst_16065 = inst_16082;
var inst_16066 = (0);
var state_16101__$1 = (function (){var statearr_16113 = state_16101;
(statearr_16113[(10)] = inst_16081);

(statearr_16113[(7)] = inst_16066);

(statearr_16113[(8)] = inst_16065);

return statearr_16113;
})();
var statearr_16114_16138 = state_16101__$1;
(statearr_16114_16138[(2)] = null);

(statearr_16114_16138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16102 === (9))){
var inst_16065 = (state_16101[(8)]);
var inst_16079 = cljs.core.vec.call(null,inst_16065);
var state_16101__$1 = state_16101;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16101__$1,(11),out,inst_16079);
} else {
if((state_val_16102 === (5))){
var inst_16074 = (state_16101[(11)]);
var inst_16066 = (state_16101[(7)]);
var inst_16065 = (state_16101[(8)]);
var inst_16069 = (state_16101[(9)]);
var inst_16073 = (inst_16065[inst_16066] = inst_16069);
var inst_16074__$1 = (inst_16066 + (1));
var inst_16075 = (inst_16074__$1 < n);
var state_16101__$1 = (function (){var statearr_16115 = state_16101;
(statearr_16115[(11)] = inst_16074__$1);

(statearr_16115[(12)] = inst_16073);

return statearr_16115;
})();
if(cljs.core.truth_(inst_16075)){
var statearr_16116_16139 = state_16101__$1;
(statearr_16116_16139[(1)] = (8));

} else {
var statearr_16117_16140 = state_16101__$1;
(statearr_16117_16140[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16102 === (14))){
var inst_16094 = (state_16101[(2)]);
var inst_16095 = cljs.core.async.close_BANG_.call(null,out);
var state_16101__$1 = (function (){var statearr_16119 = state_16101;
(statearr_16119[(13)] = inst_16094);

return statearr_16119;
})();
var statearr_16120_16141 = state_16101__$1;
(statearr_16120_16141[(2)] = inst_16095);

(statearr_16120_16141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16102 === (10))){
var inst_16085 = (state_16101[(2)]);
var state_16101__$1 = state_16101;
var statearr_16121_16142 = state_16101__$1;
(statearr_16121_16142[(2)] = inst_16085);

(statearr_16121_16142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16102 === (8))){
var inst_16074 = (state_16101[(11)]);
var inst_16065 = (state_16101[(8)]);
var tmp16118 = inst_16065;
var inst_16065__$1 = tmp16118;
var inst_16066 = inst_16074;
var state_16101__$1 = (function (){var statearr_16122 = state_16101;
(statearr_16122[(7)] = inst_16066);

(statearr_16122[(8)] = inst_16065__$1);

return statearr_16122;
})();
var statearr_16123_16143 = state_16101__$1;
(statearr_16123_16143[(2)] = null);

(statearr_16123_16143[(1)] = (2));


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
});})(c__14313__auto___16129,out))
;
return ((function (switch__14223__auto__,c__14313__auto___16129,out){
return (function() {
var cljs$core$async$state_machine__14224__auto__ = null;
var cljs$core$async$state_machine__14224__auto____0 = (function (){
var statearr_16124 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16124[(0)] = cljs$core$async$state_machine__14224__auto__);

(statearr_16124[(1)] = (1));

return statearr_16124;
});
var cljs$core$async$state_machine__14224__auto____1 = (function (state_16101){
while(true){
var ret_value__14225__auto__ = (function (){try{while(true){
var result__14226__auto__ = switch__14223__auto__.call(null,state_16101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14226__auto__;
}
break;
}
}catch (e16125){if((e16125 instanceof Object)){
var ex__14227__auto__ = e16125;
var statearr_16126_16144 = state_16101;
(statearr_16126_16144[(5)] = ex__14227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16145 = state_16101;
state_16101 = G__16145;
continue;
} else {
return ret_value__14225__auto__;
}
break;
}
});
cljs$core$async$state_machine__14224__auto__ = function(state_16101){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14224__auto____1.call(this,state_16101);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14224__auto____0;
cljs$core$async$state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14224__auto____1;
return cljs$core$async$state_machine__14224__auto__;
})()
;})(switch__14223__auto__,c__14313__auto___16129,out))
})();
var state__14315__auto__ = (function (){var statearr_16127 = f__14314__auto__.call(null);
(statearr_16127[(6)] = c__14313__auto___16129);

return statearr_16127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14315__auto__);
});})(c__14313__auto___16129,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__16147 = arguments.length;
switch (G__16147) {
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
var c__14313__auto___16217 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14313__auto___16217,out){
return (function (){
var f__14314__auto__ = (function (){var switch__14223__auto__ = ((function (c__14313__auto___16217,out){
return (function (state_16189){
var state_val_16190 = (state_16189[(1)]);
if((state_val_16190 === (7))){
var inst_16185 = (state_16189[(2)]);
var state_16189__$1 = state_16189;
var statearr_16191_16218 = state_16189__$1;
(statearr_16191_16218[(2)] = inst_16185);

(statearr_16191_16218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16190 === (1))){
var inst_16148 = [];
var inst_16149 = inst_16148;
var inst_16150 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16189__$1 = (function (){var statearr_16192 = state_16189;
(statearr_16192[(7)] = inst_16150);

(statearr_16192[(8)] = inst_16149);

return statearr_16192;
})();
var statearr_16193_16219 = state_16189__$1;
(statearr_16193_16219[(2)] = null);

(statearr_16193_16219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16190 === (4))){
var inst_16153 = (state_16189[(9)]);
var inst_16153__$1 = (state_16189[(2)]);
var inst_16154 = (inst_16153__$1 == null);
var inst_16155 = cljs.core.not.call(null,inst_16154);
var state_16189__$1 = (function (){var statearr_16194 = state_16189;
(statearr_16194[(9)] = inst_16153__$1);

return statearr_16194;
})();
if(inst_16155){
var statearr_16195_16220 = state_16189__$1;
(statearr_16195_16220[(1)] = (5));

} else {
var statearr_16196_16221 = state_16189__$1;
(statearr_16196_16221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16190 === (15))){
var inst_16179 = (state_16189[(2)]);
var state_16189__$1 = state_16189;
var statearr_16197_16222 = state_16189__$1;
(statearr_16197_16222[(2)] = inst_16179);

(statearr_16197_16222[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16190 === (13))){
var state_16189__$1 = state_16189;
var statearr_16198_16223 = state_16189__$1;
(statearr_16198_16223[(2)] = null);

(statearr_16198_16223[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16190 === (6))){
var inst_16149 = (state_16189[(8)]);
var inst_16174 = inst_16149.length;
var inst_16175 = (inst_16174 > (0));
var state_16189__$1 = state_16189;
if(cljs.core.truth_(inst_16175)){
var statearr_16199_16224 = state_16189__$1;
(statearr_16199_16224[(1)] = (12));

} else {
var statearr_16200_16225 = state_16189__$1;
(statearr_16200_16225[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16190 === (3))){
var inst_16187 = (state_16189[(2)]);
var state_16189__$1 = state_16189;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16189__$1,inst_16187);
} else {
if((state_val_16190 === (12))){
var inst_16149 = (state_16189[(8)]);
var inst_16177 = cljs.core.vec.call(null,inst_16149);
var state_16189__$1 = state_16189;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16189__$1,(15),out,inst_16177);
} else {
if((state_val_16190 === (2))){
var state_16189__$1 = state_16189;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16189__$1,(4),ch);
} else {
if((state_val_16190 === (11))){
var inst_16153 = (state_16189[(9)]);
var inst_16157 = (state_16189[(10)]);
var inst_16167 = (state_16189[(2)]);
var inst_16168 = [];
var inst_16169 = inst_16168.push(inst_16153);
var inst_16149 = inst_16168;
var inst_16150 = inst_16157;
var state_16189__$1 = (function (){var statearr_16201 = state_16189;
(statearr_16201[(7)] = inst_16150);

(statearr_16201[(11)] = inst_16169);

(statearr_16201[(8)] = inst_16149);

(statearr_16201[(12)] = inst_16167);

return statearr_16201;
})();
var statearr_16202_16226 = state_16189__$1;
(statearr_16202_16226[(2)] = null);

(statearr_16202_16226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16190 === (9))){
var inst_16149 = (state_16189[(8)]);
var inst_16165 = cljs.core.vec.call(null,inst_16149);
var state_16189__$1 = state_16189;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16189__$1,(11),out,inst_16165);
} else {
if((state_val_16190 === (5))){
var inst_16153 = (state_16189[(9)]);
var inst_16150 = (state_16189[(7)]);
var inst_16157 = (state_16189[(10)]);
var inst_16157__$1 = f.call(null,inst_16153);
var inst_16158 = cljs.core._EQ_.call(null,inst_16157__$1,inst_16150);
var inst_16159 = cljs.core.keyword_identical_QMARK_.call(null,inst_16150,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_16160 = (inst_16158) || (inst_16159);
var state_16189__$1 = (function (){var statearr_16203 = state_16189;
(statearr_16203[(10)] = inst_16157__$1);

return statearr_16203;
})();
if(cljs.core.truth_(inst_16160)){
var statearr_16204_16227 = state_16189__$1;
(statearr_16204_16227[(1)] = (8));

} else {
var statearr_16205_16228 = state_16189__$1;
(statearr_16205_16228[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16190 === (14))){
var inst_16182 = (state_16189[(2)]);
var inst_16183 = cljs.core.async.close_BANG_.call(null,out);
var state_16189__$1 = (function (){var statearr_16207 = state_16189;
(statearr_16207[(13)] = inst_16182);

return statearr_16207;
})();
var statearr_16208_16229 = state_16189__$1;
(statearr_16208_16229[(2)] = inst_16183);

(statearr_16208_16229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16190 === (10))){
var inst_16172 = (state_16189[(2)]);
var state_16189__$1 = state_16189;
var statearr_16209_16230 = state_16189__$1;
(statearr_16209_16230[(2)] = inst_16172);

(statearr_16209_16230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16190 === (8))){
var inst_16153 = (state_16189[(9)]);
var inst_16149 = (state_16189[(8)]);
var inst_16157 = (state_16189[(10)]);
var inst_16162 = inst_16149.push(inst_16153);
var tmp16206 = inst_16149;
var inst_16149__$1 = tmp16206;
var inst_16150 = inst_16157;
var state_16189__$1 = (function (){var statearr_16210 = state_16189;
(statearr_16210[(14)] = inst_16162);

(statearr_16210[(7)] = inst_16150);

(statearr_16210[(8)] = inst_16149__$1);

return statearr_16210;
})();
var statearr_16211_16231 = state_16189__$1;
(statearr_16211_16231[(2)] = null);

(statearr_16211_16231[(1)] = (2));


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
});})(c__14313__auto___16217,out))
;
return ((function (switch__14223__auto__,c__14313__auto___16217,out){
return (function() {
var cljs$core$async$state_machine__14224__auto__ = null;
var cljs$core$async$state_machine__14224__auto____0 = (function (){
var statearr_16212 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16212[(0)] = cljs$core$async$state_machine__14224__auto__);

(statearr_16212[(1)] = (1));

return statearr_16212;
});
var cljs$core$async$state_machine__14224__auto____1 = (function (state_16189){
while(true){
var ret_value__14225__auto__ = (function (){try{while(true){
var result__14226__auto__ = switch__14223__auto__.call(null,state_16189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14226__auto__;
}
break;
}
}catch (e16213){if((e16213 instanceof Object)){
var ex__14227__auto__ = e16213;
var statearr_16214_16232 = state_16189;
(statearr_16214_16232[(5)] = ex__14227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16213;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16233 = state_16189;
state_16189 = G__16233;
continue;
} else {
return ret_value__14225__auto__;
}
break;
}
});
cljs$core$async$state_machine__14224__auto__ = function(state_16189){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14224__auto____1.call(this,state_16189);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14224__auto____0;
cljs$core$async$state_machine__14224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14224__auto____1;
return cljs$core$async$state_machine__14224__auto__;
})()
;})(switch__14223__auto__,c__14313__auto___16217,out))
})();
var state__14315__auto__ = (function (){var statearr_16215 = f__14314__auto__.call(null);
(statearr_16215[(6)] = c__14313__auto___16217);

return statearr_16215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14315__auto__);
});})(c__14313__auto___16217,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
