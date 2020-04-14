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
var G__18599 = arguments.length;
switch (G__18599) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18600 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18600 = (function (f,blockable,meta18601){
this.f = f;
this.blockable = blockable;
this.meta18601 = meta18601;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18602,meta18601__$1){
var self__ = this;
var _18602__$1 = this;
return (new cljs.core.async.t_cljs$core$async18600(self__.f,self__.blockable,meta18601__$1));
});

cljs.core.async.t_cljs$core$async18600.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18602){
var self__ = this;
var _18602__$1 = this;
return self__.meta18601;
});

cljs.core.async.t_cljs$core$async18600.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18600.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async18600.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async18600.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async18600.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta18601","meta18601",-525428027,null)], null);
});

cljs.core.async.t_cljs$core$async18600.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18600.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18600";

cljs.core.async.t_cljs$core$async18600.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async18600");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18600.
 */
cljs.core.async.__GT_t_cljs$core$async18600 = (function cljs$core$async$__GT_t_cljs$core$async18600(f__$1,blockable__$1,meta18601){
return (new cljs.core.async.t_cljs$core$async18600(f__$1,blockable__$1,meta18601));
});

}

return (new cljs.core.async.t_cljs$core$async18600(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__18606 = arguments.length;
switch (G__18606) {
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
var G__18609 = arguments.length;
switch (G__18609) {
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
var G__18612 = arguments.length;
switch (G__18612) {
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
var val_18614 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_18614);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_18614,ret){
return (function (){
return fn1.call(null,val_18614);
});})(val_18614,ret))
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
var G__18616 = arguments.length;
switch (G__18616) {
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
var n__4518__auto___18618 = n;
var x_18619 = (0);
while(true){
if((x_18619 < n__4518__auto___18618)){
(a[x_18619] = (0));

var G__18620 = (x_18619 + (1));
x_18619 = G__18620;
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

var G__18621 = (i + (1));
i = G__18621;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18622 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18622 = (function (flag,meta18623){
this.flag = flag;
this.meta18623 = meta18623;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_18624,meta18623__$1){
var self__ = this;
var _18624__$1 = this;
return (new cljs.core.async.t_cljs$core$async18622(self__.flag,meta18623__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async18622.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_18624){
var self__ = this;
var _18624__$1 = this;
return self__.meta18623;
});})(flag))
;

cljs.core.async.t_cljs$core$async18622.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18622.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async18622.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async18622.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async18622.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18623","meta18623",962359617,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async18622.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18622.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18622";

cljs.core.async.t_cljs$core$async18622.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async18622");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18622.
 */
cljs.core.async.__GT_t_cljs$core$async18622 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async18622(flag__$1,meta18623){
return (new cljs.core.async.t_cljs$core$async18622(flag__$1,meta18623));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async18622(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18625 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18625 = (function (flag,cb,meta18626){
this.flag = flag;
this.cb = cb;
this.meta18626 = meta18626;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18627,meta18626__$1){
var self__ = this;
var _18627__$1 = this;
return (new cljs.core.async.t_cljs$core$async18625(self__.flag,self__.cb,meta18626__$1));
});

cljs.core.async.t_cljs$core$async18625.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18627){
var self__ = this;
var _18627__$1 = this;
return self__.meta18626;
});

cljs.core.async.t_cljs$core$async18625.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18625.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async18625.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async18625.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async18625.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18626","meta18626",-589186422,null)], null);
});

cljs.core.async.t_cljs$core$async18625.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18625.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18625";

cljs.core.async.t_cljs$core$async18625.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async18625");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18625.
 */
cljs.core.async.__GT_t_cljs$core$async18625 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async18625(flag__$1,cb__$1,meta18626){
return (new cljs.core.async.t_cljs$core$async18625(flag__$1,cb__$1,meta18626));
});

}

return (new cljs.core.async.t_cljs$core$async18625(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__18628_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18628_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18629_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18629_SHARP_,port], null));
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
var G__18630 = (i + (1));
i = G__18630;
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
var len__4641__auto___18636 = arguments.length;
var i__4642__auto___18637 = (0);
while(true){
if((i__4642__auto___18637 < len__4641__auto___18636)){
args__4647__auto__.push((arguments[i__4642__auto___18637]));

var G__18638 = (i__4642__auto___18637 + (1));
i__4642__auto___18637 = G__18638;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18633){
var map__18634 = p__18633;
var map__18634__$1 = (((((!((map__18634 == null))))?(((((map__18634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18634):map__18634);
var opts = map__18634__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18631){
var G__18632 = cljs.core.first.call(null,seq18631);
var seq18631__$1 = cljs.core.next.call(null,seq18631);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18632,seq18631__$1);
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
var G__18640 = arguments.length;
switch (G__18640) {
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
var c__16675__auto___18686 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16675__auto___18686){
return (function (){
var f__16676__auto__ = (function (){var switch__16508__auto__ = ((function (c__16675__auto___18686){
return (function (state_18664){
var state_val_18665 = (state_18664[(1)]);
if((state_val_18665 === (7))){
var inst_18660 = (state_18664[(2)]);
var state_18664__$1 = state_18664;
var statearr_18666_18687 = state_18664__$1;
(statearr_18666_18687[(2)] = inst_18660);

(statearr_18666_18687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18665 === (1))){
var state_18664__$1 = state_18664;
var statearr_18667_18688 = state_18664__$1;
(statearr_18667_18688[(2)] = null);

(statearr_18667_18688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18665 === (4))){
var inst_18643 = (state_18664[(7)]);
var inst_18643__$1 = (state_18664[(2)]);
var inst_18644 = (inst_18643__$1 == null);
var state_18664__$1 = (function (){var statearr_18668 = state_18664;
(statearr_18668[(7)] = inst_18643__$1);

return statearr_18668;
})();
if(cljs.core.truth_(inst_18644)){
var statearr_18669_18689 = state_18664__$1;
(statearr_18669_18689[(1)] = (5));

} else {
var statearr_18670_18690 = state_18664__$1;
(statearr_18670_18690[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18665 === (13))){
var state_18664__$1 = state_18664;
var statearr_18671_18691 = state_18664__$1;
(statearr_18671_18691[(2)] = null);

(statearr_18671_18691[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18665 === (6))){
var inst_18643 = (state_18664[(7)]);
var state_18664__$1 = state_18664;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18664__$1,(11),to,inst_18643);
} else {
if((state_val_18665 === (3))){
var inst_18662 = (state_18664[(2)]);
var state_18664__$1 = state_18664;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18664__$1,inst_18662);
} else {
if((state_val_18665 === (12))){
var state_18664__$1 = state_18664;
var statearr_18672_18692 = state_18664__$1;
(statearr_18672_18692[(2)] = null);

(statearr_18672_18692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18665 === (2))){
var state_18664__$1 = state_18664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18664__$1,(4),from);
} else {
if((state_val_18665 === (11))){
var inst_18653 = (state_18664[(2)]);
var state_18664__$1 = state_18664;
if(cljs.core.truth_(inst_18653)){
var statearr_18673_18693 = state_18664__$1;
(statearr_18673_18693[(1)] = (12));

} else {
var statearr_18674_18694 = state_18664__$1;
(statearr_18674_18694[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18665 === (9))){
var state_18664__$1 = state_18664;
var statearr_18675_18695 = state_18664__$1;
(statearr_18675_18695[(2)] = null);

(statearr_18675_18695[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18665 === (5))){
var state_18664__$1 = state_18664;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18676_18696 = state_18664__$1;
(statearr_18676_18696[(1)] = (8));

} else {
var statearr_18677_18697 = state_18664__$1;
(statearr_18677_18697[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18665 === (14))){
var inst_18658 = (state_18664[(2)]);
var state_18664__$1 = state_18664;
var statearr_18678_18698 = state_18664__$1;
(statearr_18678_18698[(2)] = inst_18658);

(statearr_18678_18698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18665 === (10))){
var inst_18650 = (state_18664[(2)]);
var state_18664__$1 = state_18664;
var statearr_18679_18699 = state_18664__$1;
(statearr_18679_18699[(2)] = inst_18650);

(statearr_18679_18699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18665 === (8))){
var inst_18647 = cljs.core.async.close_BANG_.call(null,to);
var state_18664__$1 = state_18664;
var statearr_18680_18700 = state_18664__$1;
(statearr_18680_18700[(2)] = inst_18647);

(statearr_18680_18700[(1)] = (10));


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
});})(c__16675__auto___18686))
;
return ((function (switch__16508__auto__,c__16675__auto___18686){
return (function() {
var cljs$core$async$state_machine__16509__auto__ = null;
var cljs$core$async$state_machine__16509__auto____0 = (function (){
var statearr_18681 = [null,null,null,null,null,null,null,null];
(statearr_18681[(0)] = cljs$core$async$state_machine__16509__auto__);

(statearr_18681[(1)] = (1));

return statearr_18681;
});
var cljs$core$async$state_machine__16509__auto____1 = (function (state_18664){
while(true){
var ret_value__16510__auto__ = (function (){try{while(true){
var result__16511__auto__ = switch__16508__auto__.call(null,state_18664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16511__auto__;
}
break;
}
}catch (e18682){if((e18682 instanceof Object)){
var ex__16512__auto__ = e18682;
var statearr_18683_18701 = state_18664;
(statearr_18683_18701[(5)] = ex__16512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18702 = state_18664;
state_18664 = G__18702;
continue;
} else {
return ret_value__16510__auto__;
}
break;
}
});
cljs$core$async$state_machine__16509__auto__ = function(state_18664){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16509__auto____1.call(this,state_18664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16509__auto____0;
cljs$core$async$state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16509__auto____1;
return cljs$core$async$state_machine__16509__auto__;
})()
;})(switch__16508__auto__,c__16675__auto___18686))
})();
var state__16677__auto__ = (function (){var statearr_18684 = f__16676__auto__.call(null);
(statearr_18684[(6)] = c__16675__auto___18686);

return statearr_18684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16677__auto__);
});})(c__16675__auto___18686))
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
return (function (p__18703){
var vec__18704 = p__18703;
var v = cljs.core.nth.call(null,vec__18704,(0),null);
var p = cljs.core.nth.call(null,vec__18704,(1),null);
var job = vec__18704;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__16675__auto___18875 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16675__auto___18875,res,vec__18704,v,p,job,jobs,results){
return (function (){
var f__16676__auto__ = (function (){var switch__16508__auto__ = ((function (c__16675__auto___18875,res,vec__18704,v,p,job,jobs,results){
return (function (state_18711){
var state_val_18712 = (state_18711[(1)]);
if((state_val_18712 === (1))){
var state_18711__$1 = state_18711;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18711__$1,(2),res,v);
} else {
if((state_val_18712 === (2))){
var inst_18708 = (state_18711[(2)]);
var inst_18709 = cljs.core.async.close_BANG_.call(null,res);
var state_18711__$1 = (function (){var statearr_18713 = state_18711;
(statearr_18713[(7)] = inst_18708);

return statearr_18713;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18711__$1,inst_18709);
} else {
return null;
}
}
});})(c__16675__auto___18875,res,vec__18704,v,p,job,jobs,results))
;
return ((function (switch__16508__auto__,c__16675__auto___18875,res,vec__18704,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16509__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16509__auto____0 = (function (){
var statearr_18714 = [null,null,null,null,null,null,null,null];
(statearr_18714[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16509__auto__);

(statearr_18714[(1)] = (1));

return statearr_18714;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16509__auto____1 = (function (state_18711){
while(true){
var ret_value__16510__auto__ = (function (){try{while(true){
var result__16511__auto__ = switch__16508__auto__.call(null,state_18711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16511__auto__;
}
break;
}
}catch (e18715){if((e18715 instanceof Object)){
var ex__16512__auto__ = e18715;
var statearr_18716_18876 = state_18711;
(statearr_18716_18876[(5)] = ex__16512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18877 = state_18711;
state_18711 = G__18877;
continue;
} else {
return ret_value__16510__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16509__auto__ = function(state_18711){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16509__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16509__auto____1.call(this,state_18711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16509__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16509__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16509__auto__;
})()
;})(switch__16508__auto__,c__16675__auto___18875,res,vec__18704,v,p,job,jobs,results))
})();
var state__16677__auto__ = (function (){var statearr_18717 = f__16676__auto__.call(null);
(statearr_18717[(6)] = c__16675__auto___18875);

return statearr_18717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16677__auto__);
});})(c__16675__auto___18875,res,vec__18704,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__18718){
var vec__18719 = p__18718;
var v = cljs.core.nth.call(null,vec__18719,(0),null);
var p = cljs.core.nth.call(null,vec__18719,(1),null);
var job = vec__18719;
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
var n__4518__auto___18878 = n;
var __18879 = (0);
while(true){
if((__18879 < n__4518__auto___18878)){
var G__18722_18880 = type;
var G__18722_18881__$1 = (((G__18722_18880 instanceof cljs.core.Keyword))?G__18722_18880.fqn:null);
switch (G__18722_18881__$1) {
case "compute":
var c__16675__auto___18883 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18879,c__16675__auto___18883,G__18722_18880,G__18722_18881__$1,n__4518__auto___18878,jobs,results,process,async){
return (function (){
var f__16676__auto__ = (function (){var switch__16508__auto__ = ((function (__18879,c__16675__auto___18883,G__18722_18880,G__18722_18881__$1,n__4518__auto___18878,jobs,results,process,async){
return (function (state_18735){
var state_val_18736 = (state_18735[(1)]);
if((state_val_18736 === (1))){
var state_18735__$1 = state_18735;
var statearr_18737_18884 = state_18735__$1;
(statearr_18737_18884[(2)] = null);

(statearr_18737_18884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18736 === (2))){
var state_18735__$1 = state_18735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18735__$1,(4),jobs);
} else {
if((state_val_18736 === (3))){
var inst_18733 = (state_18735[(2)]);
var state_18735__$1 = state_18735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18735__$1,inst_18733);
} else {
if((state_val_18736 === (4))){
var inst_18725 = (state_18735[(2)]);
var inst_18726 = process.call(null,inst_18725);
var state_18735__$1 = state_18735;
if(cljs.core.truth_(inst_18726)){
var statearr_18738_18885 = state_18735__$1;
(statearr_18738_18885[(1)] = (5));

} else {
var statearr_18739_18886 = state_18735__$1;
(statearr_18739_18886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18736 === (5))){
var state_18735__$1 = state_18735;
var statearr_18740_18887 = state_18735__$1;
(statearr_18740_18887[(2)] = null);

(statearr_18740_18887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18736 === (6))){
var state_18735__$1 = state_18735;
var statearr_18741_18888 = state_18735__$1;
(statearr_18741_18888[(2)] = null);

(statearr_18741_18888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18736 === (7))){
var inst_18731 = (state_18735[(2)]);
var state_18735__$1 = state_18735;
var statearr_18742_18889 = state_18735__$1;
(statearr_18742_18889[(2)] = inst_18731);

(statearr_18742_18889[(1)] = (3));


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
});})(__18879,c__16675__auto___18883,G__18722_18880,G__18722_18881__$1,n__4518__auto___18878,jobs,results,process,async))
;
return ((function (__18879,switch__16508__auto__,c__16675__auto___18883,G__18722_18880,G__18722_18881__$1,n__4518__auto___18878,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16509__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16509__auto____0 = (function (){
var statearr_18743 = [null,null,null,null,null,null,null];
(statearr_18743[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16509__auto__);

(statearr_18743[(1)] = (1));

return statearr_18743;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16509__auto____1 = (function (state_18735){
while(true){
var ret_value__16510__auto__ = (function (){try{while(true){
var result__16511__auto__ = switch__16508__auto__.call(null,state_18735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16511__auto__;
}
break;
}
}catch (e18744){if((e18744 instanceof Object)){
var ex__16512__auto__ = e18744;
var statearr_18745_18890 = state_18735;
(statearr_18745_18890[(5)] = ex__16512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18891 = state_18735;
state_18735 = G__18891;
continue;
} else {
return ret_value__16510__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16509__auto__ = function(state_18735){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16509__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16509__auto____1.call(this,state_18735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16509__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16509__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16509__auto__;
})()
;})(__18879,switch__16508__auto__,c__16675__auto___18883,G__18722_18880,G__18722_18881__$1,n__4518__auto___18878,jobs,results,process,async))
})();
var state__16677__auto__ = (function (){var statearr_18746 = f__16676__auto__.call(null);
(statearr_18746[(6)] = c__16675__auto___18883);

return statearr_18746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16677__auto__);
});})(__18879,c__16675__auto___18883,G__18722_18880,G__18722_18881__$1,n__4518__auto___18878,jobs,results,process,async))
);


break;
case "async":
var c__16675__auto___18892 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18879,c__16675__auto___18892,G__18722_18880,G__18722_18881__$1,n__4518__auto___18878,jobs,results,process,async){
return (function (){
var f__16676__auto__ = (function (){var switch__16508__auto__ = ((function (__18879,c__16675__auto___18892,G__18722_18880,G__18722_18881__$1,n__4518__auto___18878,jobs,results,process,async){
return (function (state_18759){
var state_val_18760 = (state_18759[(1)]);
if((state_val_18760 === (1))){
var state_18759__$1 = state_18759;
var statearr_18761_18893 = state_18759__$1;
(statearr_18761_18893[(2)] = null);

(statearr_18761_18893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18760 === (2))){
var state_18759__$1 = state_18759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18759__$1,(4),jobs);
} else {
if((state_val_18760 === (3))){
var inst_18757 = (state_18759[(2)]);
var state_18759__$1 = state_18759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18759__$1,inst_18757);
} else {
if((state_val_18760 === (4))){
var inst_18749 = (state_18759[(2)]);
var inst_18750 = async.call(null,inst_18749);
var state_18759__$1 = state_18759;
if(cljs.core.truth_(inst_18750)){
var statearr_18762_18894 = state_18759__$1;
(statearr_18762_18894[(1)] = (5));

} else {
var statearr_18763_18895 = state_18759__$1;
(statearr_18763_18895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18760 === (5))){
var state_18759__$1 = state_18759;
var statearr_18764_18896 = state_18759__$1;
(statearr_18764_18896[(2)] = null);

(statearr_18764_18896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18760 === (6))){
var state_18759__$1 = state_18759;
var statearr_18765_18897 = state_18759__$1;
(statearr_18765_18897[(2)] = null);

(statearr_18765_18897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18760 === (7))){
var inst_18755 = (state_18759[(2)]);
var state_18759__$1 = state_18759;
var statearr_18766_18898 = state_18759__$1;
(statearr_18766_18898[(2)] = inst_18755);

(statearr_18766_18898[(1)] = (3));


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
});})(__18879,c__16675__auto___18892,G__18722_18880,G__18722_18881__$1,n__4518__auto___18878,jobs,results,process,async))
;
return ((function (__18879,switch__16508__auto__,c__16675__auto___18892,G__18722_18880,G__18722_18881__$1,n__4518__auto___18878,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16509__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16509__auto____0 = (function (){
var statearr_18767 = [null,null,null,null,null,null,null];
(statearr_18767[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16509__auto__);

(statearr_18767[(1)] = (1));

return statearr_18767;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16509__auto____1 = (function (state_18759){
while(true){
var ret_value__16510__auto__ = (function (){try{while(true){
var result__16511__auto__ = switch__16508__auto__.call(null,state_18759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16511__auto__;
}
break;
}
}catch (e18768){if((e18768 instanceof Object)){
var ex__16512__auto__ = e18768;
var statearr_18769_18899 = state_18759;
(statearr_18769_18899[(5)] = ex__16512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18900 = state_18759;
state_18759 = G__18900;
continue;
} else {
return ret_value__16510__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16509__auto__ = function(state_18759){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16509__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16509__auto____1.call(this,state_18759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16509__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16509__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16509__auto__;
})()
;})(__18879,switch__16508__auto__,c__16675__auto___18892,G__18722_18880,G__18722_18881__$1,n__4518__auto___18878,jobs,results,process,async))
})();
var state__16677__auto__ = (function (){var statearr_18770 = f__16676__auto__.call(null);
(statearr_18770[(6)] = c__16675__auto___18892);

return statearr_18770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16677__auto__);
});})(__18879,c__16675__auto___18892,G__18722_18880,G__18722_18881__$1,n__4518__auto___18878,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18722_18881__$1)].join('')));

}

var G__18901 = (__18879 + (1));
__18879 = G__18901;
continue;
} else {
}
break;
}

var c__16675__auto___18902 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16675__auto___18902,jobs,results,process,async){
return (function (){
var f__16676__auto__ = (function (){var switch__16508__auto__ = ((function (c__16675__auto___18902,jobs,results,process,async){
return (function (state_18792){
var state_val_18793 = (state_18792[(1)]);
if((state_val_18793 === (7))){
var inst_18788 = (state_18792[(2)]);
var state_18792__$1 = state_18792;
var statearr_18794_18903 = state_18792__$1;
(statearr_18794_18903[(2)] = inst_18788);

(statearr_18794_18903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18793 === (1))){
var state_18792__$1 = state_18792;
var statearr_18795_18904 = state_18792__$1;
(statearr_18795_18904[(2)] = null);

(statearr_18795_18904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18793 === (4))){
var inst_18773 = (state_18792[(7)]);
var inst_18773__$1 = (state_18792[(2)]);
var inst_18774 = (inst_18773__$1 == null);
var state_18792__$1 = (function (){var statearr_18796 = state_18792;
(statearr_18796[(7)] = inst_18773__$1);

return statearr_18796;
})();
if(cljs.core.truth_(inst_18774)){
var statearr_18797_18905 = state_18792__$1;
(statearr_18797_18905[(1)] = (5));

} else {
var statearr_18798_18906 = state_18792__$1;
(statearr_18798_18906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18793 === (6))){
var inst_18773 = (state_18792[(7)]);
var inst_18778 = (state_18792[(8)]);
var inst_18778__$1 = cljs.core.async.chan.call(null,(1));
var inst_18779 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18780 = [inst_18773,inst_18778__$1];
var inst_18781 = (new cljs.core.PersistentVector(null,2,(5),inst_18779,inst_18780,null));
var state_18792__$1 = (function (){var statearr_18799 = state_18792;
(statearr_18799[(8)] = inst_18778__$1);

return statearr_18799;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18792__$1,(8),jobs,inst_18781);
} else {
if((state_val_18793 === (3))){
var inst_18790 = (state_18792[(2)]);
var state_18792__$1 = state_18792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18792__$1,inst_18790);
} else {
if((state_val_18793 === (2))){
var state_18792__$1 = state_18792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18792__$1,(4),from);
} else {
if((state_val_18793 === (9))){
var inst_18785 = (state_18792[(2)]);
var state_18792__$1 = (function (){var statearr_18800 = state_18792;
(statearr_18800[(9)] = inst_18785);

return statearr_18800;
})();
var statearr_18801_18907 = state_18792__$1;
(statearr_18801_18907[(2)] = null);

(statearr_18801_18907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18793 === (5))){
var inst_18776 = cljs.core.async.close_BANG_.call(null,jobs);
var state_18792__$1 = state_18792;
var statearr_18802_18908 = state_18792__$1;
(statearr_18802_18908[(2)] = inst_18776);

(statearr_18802_18908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18793 === (8))){
var inst_18778 = (state_18792[(8)]);
var inst_18783 = (state_18792[(2)]);
var state_18792__$1 = (function (){var statearr_18803 = state_18792;
(statearr_18803[(10)] = inst_18783);

return statearr_18803;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18792__$1,(9),results,inst_18778);
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
});})(c__16675__auto___18902,jobs,results,process,async))
;
return ((function (switch__16508__auto__,c__16675__auto___18902,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16509__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16509__auto____0 = (function (){
var statearr_18804 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18804[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16509__auto__);

(statearr_18804[(1)] = (1));

return statearr_18804;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16509__auto____1 = (function (state_18792){
while(true){
var ret_value__16510__auto__ = (function (){try{while(true){
var result__16511__auto__ = switch__16508__auto__.call(null,state_18792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16511__auto__;
}
break;
}
}catch (e18805){if((e18805 instanceof Object)){
var ex__16512__auto__ = e18805;
var statearr_18806_18909 = state_18792;
(statearr_18806_18909[(5)] = ex__16512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18910 = state_18792;
state_18792 = G__18910;
continue;
} else {
return ret_value__16510__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16509__auto__ = function(state_18792){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16509__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16509__auto____1.call(this,state_18792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16509__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16509__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16509__auto__;
})()
;})(switch__16508__auto__,c__16675__auto___18902,jobs,results,process,async))
})();
var state__16677__auto__ = (function (){var statearr_18807 = f__16676__auto__.call(null);
(statearr_18807[(6)] = c__16675__auto___18902);

return statearr_18807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16677__auto__);
});})(c__16675__auto___18902,jobs,results,process,async))
);


var c__16675__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16675__auto__,jobs,results,process,async){
return (function (){
var f__16676__auto__ = (function (){var switch__16508__auto__ = ((function (c__16675__auto__,jobs,results,process,async){
return (function (state_18845){
var state_val_18846 = (state_18845[(1)]);
if((state_val_18846 === (7))){
var inst_18841 = (state_18845[(2)]);
var state_18845__$1 = state_18845;
var statearr_18847_18911 = state_18845__$1;
(statearr_18847_18911[(2)] = inst_18841);

(statearr_18847_18911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18846 === (20))){
var state_18845__$1 = state_18845;
var statearr_18848_18912 = state_18845__$1;
(statearr_18848_18912[(2)] = null);

(statearr_18848_18912[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18846 === (1))){
var state_18845__$1 = state_18845;
var statearr_18849_18913 = state_18845__$1;
(statearr_18849_18913[(2)] = null);

(statearr_18849_18913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18846 === (4))){
var inst_18810 = (state_18845[(7)]);
var inst_18810__$1 = (state_18845[(2)]);
var inst_18811 = (inst_18810__$1 == null);
var state_18845__$1 = (function (){var statearr_18850 = state_18845;
(statearr_18850[(7)] = inst_18810__$1);

return statearr_18850;
})();
if(cljs.core.truth_(inst_18811)){
var statearr_18851_18914 = state_18845__$1;
(statearr_18851_18914[(1)] = (5));

} else {
var statearr_18852_18915 = state_18845__$1;
(statearr_18852_18915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18846 === (15))){
var inst_18823 = (state_18845[(8)]);
var state_18845__$1 = state_18845;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18845__$1,(18),to,inst_18823);
} else {
if((state_val_18846 === (21))){
var inst_18836 = (state_18845[(2)]);
var state_18845__$1 = state_18845;
var statearr_18853_18916 = state_18845__$1;
(statearr_18853_18916[(2)] = inst_18836);

(statearr_18853_18916[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18846 === (13))){
var inst_18838 = (state_18845[(2)]);
var state_18845__$1 = (function (){var statearr_18854 = state_18845;
(statearr_18854[(9)] = inst_18838);

return statearr_18854;
})();
var statearr_18855_18917 = state_18845__$1;
(statearr_18855_18917[(2)] = null);

(statearr_18855_18917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18846 === (6))){
var inst_18810 = (state_18845[(7)]);
var state_18845__$1 = state_18845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18845__$1,(11),inst_18810);
} else {
if((state_val_18846 === (17))){
var inst_18831 = (state_18845[(2)]);
var state_18845__$1 = state_18845;
if(cljs.core.truth_(inst_18831)){
var statearr_18856_18918 = state_18845__$1;
(statearr_18856_18918[(1)] = (19));

} else {
var statearr_18857_18919 = state_18845__$1;
(statearr_18857_18919[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18846 === (3))){
var inst_18843 = (state_18845[(2)]);
var state_18845__$1 = state_18845;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18845__$1,inst_18843);
} else {
if((state_val_18846 === (12))){
var inst_18820 = (state_18845[(10)]);
var state_18845__$1 = state_18845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18845__$1,(14),inst_18820);
} else {
if((state_val_18846 === (2))){
var state_18845__$1 = state_18845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18845__$1,(4),results);
} else {
if((state_val_18846 === (19))){
var state_18845__$1 = state_18845;
var statearr_18858_18920 = state_18845__$1;
(statearr_18858_18920[(2)] = null);

(statearr_18858_18920[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18846 === (11))){
var inst_18820 = (state_18845[(2)]);
var state_18845__$1 = (function (){var statearr_18859 = state_18845;
(statearr_18859[(10)] = inst_18820);

return statearr_18859;
})();
var statearr_18860_18921 = state_18845__$1;
(statearr_18860_18921[(2)] = null);

(statearr_18860_18921[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18846 === (9))){
var state_18845__$1 = state_18845;
var statearr_18861_18922 = state_18845__$1;
(statearr_18861_18922[(2)] = null);

(statearr_18861_18922[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18846 === (5))){
var state_18845__$1 = state_18845;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18862_18923 = state_18845__$1;
(statearr_18862_18923[(1)] = (8));

} else {
var statearr_18863_18924 = state_18845__$1;
(statearr_18863_18924[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18846 === (14))){
var inst_18823 = (state_18845[(8)]);
var inst_18825 = (state_18845[(11)]);
var inst_18823__$1 = (state_18845[(2)]);
var inst_18824 = (inst_18823__$1 == null);
var inst_18825__$1 = cljs.core.not.call(null,inst_18824);
var state_18845__$1 = (function (){var statearr_18864 = state_18845;
(statearr_18864[(8)] = inst_18823__$1);

(statearr_18864[(11)] = inst_18825__$1);

return statearr_18864;
})();
if(inst_18825__$1){
var statearr_18865_18925 = state_18845__$1;
(statearr_18865_18925[(1)] = (15));

} else {
var statearr_18866_18926 = state_18845__$1;
(statearr_18866_18926[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18846 === (16))){
var inst_18825 = (state_18845[(11)]);
var state_18845__$1 = state_18845;
var statearr_18867_18927 = state_18845__$1;
(statearr_18867_18927[(2)] = inst_18825);

(statearr_18867_18927[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18846 === (10))){
var inst_18817 = (state_18845[(2)]);
var state_18845__$1 = state_18845;
var statearr_18868_18928 = state_18845__$1;
(statearr_18868_18928[(2)] = inst_18817);

(statearr_18868_18928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18846 === (18))){
var inst_18828 = (state_18845[(2)]);
var state_18845__$1 = state_18845;
var statearr_18869_18929 = state_18845__$1;
(statearr_18869_18929[(2)] = inst_18828);

(statearr_18869_18929[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18846 === (8))){
var inst_18814 = cljs.core.async.close_BANG_.call(null,to);
var state_18845__$1 = state_18845;
var statearr_18870_18930 = state_18845__$1;
(statearr_18870_18930[(2)] = inst_18814);

(statearr_18870_18930[(1)] = (10));


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
});})(c__16675__auto__,jobs,results,process,async))
;
return ((function (switch__16508__auto__,c__16675__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16509__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16509__auto____0 = (function (){
var statearr_18871 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18871[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16509__auto__);

(statearr_18871[(1)] = (1));

return statearr_18871;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16509__auto____1 = (function (state_18845){
while(true){
var ret_value__16510__auto__ = (function (){try{while(true){
var result__16511__auto__ = switch__16508__auto__.call(null,state_18845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16511__auto__;
}
break;
}
}catch (e18872){if((e18872 instanceof Object)){
var ex__16512__auto__ = e18872;
var statearr_18873_18931 = state_18845;
(statearr_18873_18931[(5)] = ex__16512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18932 = state_18845;
state_18845 = G__18932;
continue;
} else {
return ret_value__16510__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16509__auto__ = function(state_18845){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16509__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16509__auto____1.call(this,state_18845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16509__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16509__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16509__auto__;
})()
;})(switch__16508__auto__,c__16675__auto__,jobs,results,process,async))
})();
var state__16677__auto__ = (function (){var statearr_18874 = f__16676__auto__.call(null);
(statearr_18874[(6)] = c__16675__auto__);

return statearr_18874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16677__auto__);
});})(c__16675__auto__,jobs,results,process,async))
);

return c__16675__auto__;
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
var G__18934 = arguments.length;
switch (G__18934) {
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
var G__18937 = arguments.length;
switch (G__18937) {
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
var G__18940 = arguments.length;
switch (G__18940) {
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
var c__16675__auto___18989 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16675__auto___18989,tc,fc){
return (function (){
var f__16676__auto__ = (function (){var switch__16508__auto__ = ((function (c__16675__auto___18989,tc,fc){
return (function (state_18966){
var state_val_18967 = (state_18966[(1)]);
if((state_val_18967 === (7))){
var inst_18962 = (state_18966[(2)]);
var state_18966__$1 = state_18966;
var statearr_18968_18990 = state_18966__$1;
(statearr_18968_18990[(2)] = inst_18962);

(statearr_18968_18990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (1))){
var state_18966__$1 = state_18966;
var statearr_18969_18991 = state_18966__$1;
(statearr_18969_18991[(2)] = null);

(statearr_18969_18991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (4))){
var inst_18943 = (state_18966[(7)]);
var inst_18943__$1 = (state_18966[(2)]);
var inst_18944 = (inst_18943__$1 == null);
var state_18966__$1 = (function (){var statearr_18970 = state_18966;
(statearr_18970[(7)] = inst_18943__$1);

return statearr_18970;
})();
if(cljs.core.truth_(inst_18944)){
var statearr_18971_18992 = state_18966__$1;
(statearr_18971_18992[(1)] = (5));

} else {
var statearr_18972_18993 = state_18966__$1;
(statearr_18972_18993[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (13))){
var state_18966__$1 = state_18966;
var statearr_18973_18994 = state_18966__$1;
(statearr_18973_18994[(2)] = null);

(statearr_18973_18994[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (6))){
var inst_18943 = (state_18966[(7)]);
var inst_18949 = p.call(null,inst_18943);
var state_18966__$1 = state_18966;
if(cljs.core.truth_(inst_18949)){
var statearr_18974_18995 = state_18966__$1;
(statearr_18974_18995[(1)] = (9));

} else {
var statearr_18975_18996 = state_18966__$1;
(statearr_18975_18996[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (3))){
var inst_18964 = (state_18966[(2)]);
var state_18966__$1 = state_18966;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18966__$1,inst_18964);
} else {
if((state_val_18967 === (12))){
var state_18966__$1 = state_18966;
var statearr_18976_18997 = state_18966__$1;
(statearr_18976_18997[(2)] = null);

(statearr_18976_18997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (2))){
var state_18966__$1 = state_18966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18966__$1,(4),ch);
} else {
if((state_val_18967 === (11))){
var inst_18943 = (state_18966[(7)]);
var inst_18953 = (state_18966[(2)]);
var state_18966__$1 = state_18966;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18966__$1,(8),inst_18953,inst_18943);
} else {
if((state_val_18967 === (9))){
var state_18966__$1 = state_18966;
var statearr_18977_18998 = state_18966__$1;
(statearr_18977_18998[(2)] = tc);

(statearr_18977_18998[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (5))){
var inst_18946 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18947 = cljs.core.async.close_BANG_.call(null,fc);
var state_18966__$1 = (function (){var statearr_18978 = state_18966;
(statearr_18978[(8)] = inst_18946);

return statearr_18978;
})();
var statearr_18979_18999 = state_18966__$1;
(statearr_18979_18999[(2)] = inst_18947);

(statearr_18979_18999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (14))){
var inst_18960 = (state_18966[(2)]);
var state_18966__$1 = state_18966;
var statearr_18980_19000 = state_18966__$1;
(statearr_18980_19000[(2)] = inst_18960);

(statearr_18980_19000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (10))){
var state_18966__$1 = state_18966;
var statearr_18981_19001 = state_18966__$1;
(statearr_18981_19001[(2)] = fc);

(statearr_18981_19001[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (8))){
var inst_18955 = (state_18966[(2)]);
var state_18966__$1 = state_18966;
if(cljs.core.truth_(inst_18955)){
var statearr_18982_19002 = state_18966__$1;
(statearr_18982_19002[(1)] = (12));

} else {
var statearr_18983_19003 = state_18966__$1;
(statearr_18983_19003[(1)] = (13));

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
});})(c__16675__auto___18989,tc,fc))
;
return ((function (switch__16508__auto__,c__16675__auto___18989,tc,fc){
return (function() {
var cljs$core$async$state_machine__16509__auto__ = null;
var cljs$core$async$state_machine__16509__auto____0 = (function (){
var statearr_18984 = [null,null,null,null,null,null,null,null,null];
(statearr_18984[(0)] = cljs$core$async$state_machine__16509__auto__);

(statearr_18984[(1)] = (1));

return statearr_18984;
});
var cljs$core$async$state_machine__16509__auto____1 = (function (state_18966){
while(true){
var ret_value__16510__auto__ = (function (){try{while(true){
var result__16511__auto__ = switch__16508__auto__.call(null,state_18966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16511__auto__;
}
break;
}
}catch (e18985){if((e18985 instanceof Object)){
var ex__16512__auto__ = e18985;
var statearr_18986_19004 = state_18966;
(statearr_18986_19004[(5)] = ex__16512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19005 = state_18966;
state_18966 = G__19005;
continue;
} else {
return ret_value__16510__auto__;
}
break;
}
});
cljs$core$async$state_machine__16509__auto__ = function(state_18966){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16509__auto____1.call(this,state_18966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16509__auto____0;
cljs$core$async$state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16509__auto____1;
return cljs$core$async$state_machine__16509__auto__;
})()
;})(switch__16508__auto__,c__16675__auto___18989,tc,fc))
})();
var state__16677__auto__ = (function (){var statearr_18987 = f__16676__auto__.call(null);
(statearr_18987[(6)] = c__16675__auto___18989);

return statearr_18987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16677__auto__);
});})(c__16675__auto___18989,tc,fc))
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
var c__16675__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16675__auto__){
return (function (){
var f__16676__auto__ = (function (){var switch__16508__auto__ = ((function (c__16675__auto__){
return (function (state_19026){
var state_val_19027 = (state_19026[(1)]);
if((state_val_19027 === (7))){
var inst_19022 = (state_19026[(2)]);
var state_19026__$1 = state_19026;
var statearr_19028_19046 = state_19026__$1;
(statearr_19028_19046[(2)] = inst_19022);

(statearr_19028_19046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19027 === (1))){
var inst_19006 = init;
var state_19026__$1 = (function (){var statearr_19029 = state_19026;
(statearr_19029[(7)] = inst_19006);

return statearr_19029;
})();
var statearr_19030_19047 = state_19026__$1;
(statearr_19030_19047[(2)] = null);

(statearr_19030_19047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19027 === (4))){
var inst_19009 = (state_19026[(8)]);
var inst_19009__$1 = (state_19026[(2)]);
var inst_19010 = (inst_19009__$1 == null);
var state_19026__$1 = (function (){var statearr_19031 = state_19026;
(statearr_19031[(8)] = inst_19009__$1);

return statearr_19031;
})();
if(cljs.core.truth_(inst_19010)){
var statearr_19032_19048 = state_19026__$1;
(statearr_19032_19048[(1)] = (5));

} else {
var statearr_19033_19049 = state_19026__$1;
(statearr_19033_19049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19027 === (6))){
var inst_19009 = (state_19026[(8)]);
var inst_19013 = (state_19026[(9)]);
var inst_19006 = (state_19026[(7)]);
var inst_19013__$1 = f.call(null,inst_19006,inst_19009);
var inst_19014 = cljs.core.reduced_QMARK_.call(null,inst_19013__$1);
var state_19026__$1 = (function (){var statearr_19034 = state_19026;
(statearr_19034[(9)] = inst_19013__$1);

return statearr_19034;
})();
if(inst_19014){
var statearr_19035_19050 = state_19026__$1;
(statearr_19035_19050[(1)] = (8));

} else {
var statearr_19036_19051 = state_19026__$1;
(statearr_19036_19051[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19027 === (3))){
var inst_19024 = (state_19026[(2)]);
var state_19026__$1 = state_19026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19026__$1,inst_19024);
} else {
if((state_val_19027 === (2))){
var state_19026__$1 = state_19026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19026__$1,(4),ch);
} else {
if((state_val_19027 === (9))){
var inst_19013 = (state_19026[(9)]);
var inst_19006 = inst_19013;
var state_19026__$1 = (function (){var statearr_19037 = state_19026;
(statearr_19037[(7)] = inst_19006);

return statearr_19037;
})();
var statearr_19038_19052 = state_19026__$1;
(statearr_19038_19052[(2)] = null);

(statearr_19038_19052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19027 === (5))){
var inst_19006 = (state_19026[(7)]);
var state_19026__$1 = state_19026;
var statearr_19039_19053 = state_19026__$1;
(statearr_19039_19053[(2)] = inst_19006);

(statearr_19039_19053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19027 === (10))){
var inst_19020 = (state_19026[(2)]);
var state_19026__$1 = state_19026;
var statearr_19040_19054 = state_19026__$1;
(statearr_19040_19054[(2)] = inst_19020);

(statearr_19040_19054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19027 === (8))){
var inst_19013 = (state_19026[(9)]);
var inst_19016 = cljs.core.deref.call(null,inst_19013);
var state_19026__$1 = state_19026;
var statearr_19041_19055 = state_19026__$1;
(statearr_19041_19055[(2)] = inst_19016);

(statearr_19041_19055[(1)] = (10));


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
});})(c__16675__auto__))
;
return ((function (switch__16508__auto__,c__16675__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__16509__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16509__auto____0 = (function (){
var statearr_19042 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19042[(0)] = cljs$core$async$reduce_$_state_machine__16509__auto__);

(statearr_19042[(1)] = (1));

return statearr_19042;
});
var cljs$core$async$reduce_$_state_machine__16509__auto____1 = (function (state_19026){
while(true){
var ret_value__16510__auto__ = (function (){try{while(true){
var result__16511__auto__ = switch__16508__auto__.call(null,state_19026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16511__auto__;
}
break;
}
}catch (e19043){if((e19043 instanceof Object)){
var ex__16512__auto__ = e19043;
var statearr_19044_19056 = state_19026;
(statearr_19044_19056[(5)] = ex__16512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19057 = state_19026;
state_19026 = G__19057;
continue;
} else {
return ret_value__16510__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16509__auto__ = function(state_19026){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16509__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16509__auto____1.call(this,state_19026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16509__auto____0;
cljs$core$async$reduce_$_state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16509__auto____1;
return cljs$core$async$reduce_$_state_machine__16509__auto__;
})()
;})(switch__16508__auto__,c__16675__auto__))
})();
var state__16677__auto__ = (function (){var statearr_19045 = f__16676__auto__.call(null);
(statearr_19045[(6)] = c__16675__auto__);

return statearr_19045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16677__auto__);
});})(c__16675__auto__))
);

return c__16675__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__16675__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16675__auto__,f__$1){
return (function (){
var f__16676__auto__ = (function (){var switch__16508__auto__ = ((function (c__16675__auto__,f__$1){
return (function (state_19063){
var state_val_19064 = (state_19063[(1)]);
if((state_val_19064 === (1))){
var inst_19058 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_19063__$1 = state_19063;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19063__$1,(2),inst_19058);
} else {
if((state_val_19064 === (2))){
var inst_19060 = (state_19063[(2)]);
var inst_19061 = f__$1.call(null,inst_19060);
var state_19063__$1 = state_19063;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19063__$1,inst_19061);
} else {
return null;
}
}
});})(c__16675__auto__,f__$1))
;
return ((function (switch__16508__auto__,c__16675__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__16509__auto__ = null;
var cljs$core$async$transduce_$_state_machine__16509__auto____0 = (function (){
var statearr_19065 = [null,null,null,null,null,null,null];
(statearr_19065[(0)] = cljs$core$async$transduce_$_state_machine__16509__auto__);

(statearr_19065[(1)] = (1));

return statearr_19065;
});
var cljs$core$async$transduce_$_state_machine__16509__auto____1 = (function (state_19063){
while(true){
var ret_value__16510__auto__ = (function (){try{while(true){
var result__16511__auto__ = switch__16508__auto__.call(null,state_19063);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16511__auto__;
}
break;
}
}catch (e19066){if((e19066 instanceof Object)){
var ex__16512__auto__ = e19066;
var statearr_19067_19069 = state_19063;
(statearr_19067_19069[(5)] = ex__16512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19070 = state_19063;
state_19063 = G__19070;
continue;
} else {
return ret_value__16510__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__16509__auto__ = function(state_19063){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__16509__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__16509__auto____1.call(this,state_19063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__16509__auto____0;
cljs$core$async$transduce_$_state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__16509__auto____1;
return cljs$core$async$transduce_$_state_machine__16509__auto__;
})()
;})(switch__16508__auto__,c__16675__auto__,f__$1))
})();
var state__16677__auto__ = (function (){var statearr_19068 = f__16676__auto__.call(null);
(statearr_19068[(6)] = c__16675__auto__);

return statearr_19068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16677__auto__);
});})(c__16675__auto__,f__$1))
);

return c__16675__auto__;
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
var G__19072 = arguments.length;
switch (G__19072) {
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
var c__16675__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16675__auto__){
return (function (){
var f__16676__auto__ = (function (){var switch__16508__auto__ = ((function (c__16675__auto__){
return (function (state_19097){
var state_val_19098 = (state_19097[(1)]);
if((state_val_19098 === (7))){
var inst_19079 = (state_19097[(2)]);
var state_19097__$1 = state_19097;
var statearr_19099_19120 = state_19097__$1;
(statearr_19099_19120[(2)] = inst_19079);

(statearr_19099_19120[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (1))){
var inst_19073 = cljs.core.seq.call(null,coll);
var inst_19074 = inst_19073;
var state_19097__$1 = (function (){var statearr_19100 = state_19097;
(statearr_19100[(7)] = inst_19074);

return statearr_19100;
})();
var statearr_19101_19121 = state_19097__$1;
(statearr_19101_19121[(2)] = null);

(statearr_19101_19121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (4))){
var inst_19074 = (state_19097[(7)]);
var inst_19077 = cljs.core.first.call(null,inst_19074);
var state_19097__$1 = state_19097;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19097__$1,(7),ch,inst_19077);
} else {
if((state_val_19098 === (13))){
var inst_19091 = (state_19097[(2)]);
var state_19097__$1 = state_19097;
var statearr_19102_19122 = state_19097__$1;
(statearr_19102_19122[(2)] = inst_19091);

(statearr_19102_19122[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (6))){
var inst_19082 = (state_19097[(2)]);
var state_19097__$1 = state_19097;
if(cljs.core.truth_(inst_19082)){
var statearr_19103_19123 = state_19097__$1;
(statearr_19103_19123[(1)] = (8));

} else {
var statearr_19104_19124 = state_19097__$1;
(statearr_19104_19124[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (3))){
var inst_19095 = (state_19097[(2)]);
var state_19097__$1 = state_19097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19097__$1,inst_19095);
} else {
if((state_val_19098 === (12))){
var state_19097__$1 = state_19097;
var statearr_19105_19125 = state_19097__$1;
(statearr_19105_19125[(2)] = null);

(statearr_19105_19125[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (2))){
var inst_19074 = (state_19097[(7)]);
var state_19097__$1 = state_19097;
if(cljs.core.truth_(inst_19074)){
var statearr_19106_19126 = state_19097__$1;
(statearr_19106_19126[(1)] = (4));

} else {
var statearr_19107_19127 = state_19097__$1;
(statearr_19107_19127[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (11))){
var inst_19088 = cljs.core.async.close_BANG_.call(null,ch);
var state_19097__$1 = state_19097;
var statearr_19108_19128 = state_19097__$1;
(statearr_19108_19128[(2)] = inst_19088);

(statearr_19108_19128[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (9))){
var state_19097__$1 = state_19097;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19109_19129 = state_19097__$1;
(statearr_19109_19129[(1)] = (11));

} else {
var statearr_19110_19130 = state_19097__$1;
(statearr_19110_19130[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (5))){
var inst_19074 = (state_19097[(7)]);
var state_19097__$1 = state_19097;
var statearr_19111_19131 = state_19097__$1;
(statearr_19111_19131[(2)] = inst_19074);

(statearr_19111_19131[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (10))){
var inst_19093 = (state_19097[(2)]);
var state_19097__$1 = state_19097;
var statearr_19112_19132 = state_19097__$1;
(statearr_19112_19132[(2)] = inst_19093);

(statearr_19112_19132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (8))){
var inst_19074 = (state_19097[(7)]);
var inst_19084 = cljs.core.next.call(null,inst_19074);
var inst_19074__$1 = inst_19084;
var state_19097__$1 = (function (){var statearr_19113 = state_19097;
(statearr_19113[(7)] = inst_19074__$1);

return statearr_19113;
})();
var statearr_19114_19133 = state_19097__$1;
(statearr_19114_19133[(2)] = null);

(statearr_19114_19133[(1)] = (2));


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
});})(c__16675__auto__))
;
return ((function (switch__16508__auto__,c__16675__auto__){
return (function() {
var cljs$core$async$state_machine__16509__auto__ = null;
var cljs$core$async$state_machine__16509__auto____0 = (function (){
var statearr_19115 = [null,null,null,null,null,null,null,null];
(statearr_19115[(0)] = cljs$core$async$state_machine__16509__auto__);

(statearr_19115[(1)] = (1));

return statearr_19115;
});
var cljs$core$async$state_machine__16509__auto____1 = (function (state_19097){
while(true){
var ret_value__16510__auto__ = (function (){try{while(true){
var result__16511__auto__ = switch__16508__auto__.call(null,state_19097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16511__auto__;
}
break;
}
}catch (e19116){if((e19116 instanceof Object)){
var ex__16512__auto__ = e19116;
var statearr_19117_19134 = state_19097;
(statearr_19117_19134[(5)] = ex__16512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19135 = state_19097;
state_19097 = G__19135;
continue;
} else {
return ret_value__16510__auto__;
}
break;
}
});
cljs$core$async$state_machine__16509__auto__ = function(state_19097){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16509__auto____1.call(this,state_19097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16509__auto____0;
cljs$core$async$state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16509__auto____1;
return cljs$core$async$state_machine__16509__auto__;
})()
;})(switch__16508__auto__,c__16675__auto__))
})();
var state__16677__auto__ = (function (){var statearr_19118 = f__16676__auto__.call(null);
(statearr_19118[(6)] = c__16675__auto__);

return statearr_19118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16677__auto__);
});})(c__16675__auto__))
);

return c__16675__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19136 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19136 = (function (ch,cs,meta19137){
this.ch = ch;
this.cs = cs;
this.meta19137 = meta19137;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19138,meta19137__$1){
var self__ = this;
var _19138__$1 = this;
return (new cljs.core.async.t_cljs$core$async19136(self__.ch,self__.cs,meta19137__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async19136.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19138){
var self__ = this;
var _19138__$1 = this;
return self__.meta19137;
});})(cs))
;

cljs.core.async.t_cljs$core$async19136.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19136.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async19136.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19136.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19136.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19136.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19136.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta19137","meta19137",-1368486813,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async19136.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19136.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19136";

cljs.core.async.t_cljs$core$async19136.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async19136");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19136.
 */
cljs.core.async.__GT_t_cljs$core$async19136 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async19136(ch__$1,cs__$1,meta19137){
return (new cljs.core.async.t_cljs$core$async19136(ch__$1,cs__$1,meta19137));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async19136(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__16675__auto___19358 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16675__auto___19358,cs,m,dchan,dctr,done){
return (function (){
var f__16676__auto__ = (function (){var switch__16508__auto__ = ((function (c__16675__auto___19358,cs,m,dchan,dctr,done){
return (function (state_19273){
var state_val_19274 = (state_19273[(1)]);
if((state_val_19274 === (7))){
var inst_19269 = (state_19273[(2)]);
var state_19273__$1 = state_19273;
var statearr_19275_19359 = state_19273__$1;
(statearr_19275_19359[(2)] = inst_19269);

(statearr_19275_19359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (20))){
var inst_19172 = (state_19273[(7)]);
var inst_19184 = cljs.core.first.call(null,inst_19172);
var inst_19185 = cljs.core.nth.call(null,inst_19184,(0),null);
var inst_19186 = cljs.core.nth.call(null,inst_19184,(1),null);
var state_19273__$1 = (function (){var statearr_19276 = state_19273;
(statearr_19276[(8)] = inst_19185);

return statearr_19276;
})();
if(cljs.core.truth_(inst_19186)){
var statearr_19277_19360 = state_19273__$1;
(statearr_19277_19360[(1)] = (22));

} else {
var statearr_19278_19361 = state_19273__$1;
(statearr_19278_19361[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (27))){
var inst_19221 = (state_19273[(9)]);
var inst_19214 = (state_19273[(10)]);
var inst_19141 = (state_19273[(11)]);
var inst_19216 = (state_19273[(12)]);
var inst_19221__$1 = cljs.core._nth.call(null,inst_19214,inst_19216);
var inst_19222 = cljs.core.async.put_BANG_.call(null,inst_19221__$1,inst_19141,done);
var state_19273__$1 = (function (){var statearr_19279 = state_19273;
(statearr_19279[(9)] = inst_19221__$1);

return statearr_19279;
})();
if(cljs.core.truth_(inst_19222)){
var statearr_19280_19362 = state_19273__$1;
(statearr_19280_19362[(1)] = (30));

} else {
var statearr_19281_19363 = state_19273__$1;
(statearr_19281_19363[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (1))){
var state_19273__$1 = state_19273;
var statearr_19282_19364 = state_19273__$1;
(statearr_19282_19364[(2)] = null);

(statearr_19282_19364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (24))){
var inst_19172 = (state_19273[(7)]);
var inst_19191 = (state_19273[(2)]);
var inst_19192 = cljs.core.next.call(null,inst_19172);
var inst_19150 = inst_19192;
var inst_19151 = null;
var inst_19152 = (0);
var inst_19153 = (0);
var state_19273__$1 = (function (){var statearr_19283 = state_19273;
(statearr_19283[(13)] = inst_19153);

(statearr_19283[(14)] = inst_19191);

(statearr_19283[(15)] = inst_19150);

(statearr_19283[(16)] = inst_19152);

(statearr_19283[(17)] = inst_19151);

return statearr_19283;
})();
var statearr_19284_19365 = state_19273__$1;
(statearr_19284_19365[(2)] = null);

(statearr_19284_19365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (39))){
var state_19273__$1 = state_19273;
var statearr_19288_19366 = state_19273__$1;
(statearr_19288_19366[(2)] = null);

(statearr_19288_19366[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (4))){
var inst_19141 = (state_19273[(11)]);
var inst_19141__$1 = (state_19273[(2)]);
var inst_19142 = (inst_19141__$1 == null);
var state_19273__$1 = (function (){var statearr_19289 = state_19273;
(statearr_19289[(11)] = inst_19141__$1);

return statearr_19289;
})();
if(cljs.core.truth_(inst_19142)){
var statearr_19290_19367 = state_19273__$1;
(statearr_19290_19367[(1)] = (5));

} else {
var statearr_19291_19368 = state_19273__$1;
(statearr_19291_19368[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (15))){
var inst_19153 = (state_19273[(13)]);
var inst_19150 = (state_19273[(15)]);
var inst_19152 = (state_19273[(16)]);
var inst_19151 = (state_19273[(17)]);
var inst_19168 = (state_19273[(2)]);
var inst_19169 = (inst_19153 + (1));
var tmp19285 = inst_19150;
var tmp19286 = inst_19152;
var tmp19287 = inst_19151;
var inst_19150__$1 = tmp19285;
var inst_19151__$1 = tmp19287;
var inst_19152__$1 = tmp19286;
var inst_19153__$1 = inst_19169;
var state_19273__$1 = (function (){var statearr_19292 = state_19273;
(statearr_19292[(13)] = inst_19153__$1);

(statearr_19292[(15)] = inst_19150__$1);

(statearr_19292[(18)] = inst_19168);

(statearr_19292[(16)] = inst_19152__$1);

(statearr_19292[(17)] = inst_19151__$1);

return statearr_19292;
})();
var statearr_19293_19369 = state_19273__$1;
(statearr_19293_19369[(2)] = null);

(statearr_19293_19369[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (21))){
var inst_19195 = (state_19273[(2)]);
var state_19273__$1 = state_19273;
var statearr_19297_19370 = state_19273__$1;
(statearr_19297_19370[(2)] = inst_19195);

(statearr_19297_19370[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (31))){
var inst_19221 = (state_19273[(9)]);
var inst_19225 = done.call(null,null);
var inst_19226 = cljs.core.async.untap_STAR_.call(null,m,inst_19221);
var state_19273__$1 = (function (){var statearr_19298 = state_19273;
(statearr_19298[(19)] = inst_19225);

return statearr_19298;
})();
var statearr_19299_19371 = state_19273__$1;
(statearr_19299_19371[(2)] = inst_19226);

(statearr_19299_19371[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (32))){
var inst_19214 = (state_19273[(10)]);
var inst_19216 = (state_19273[(12)]);
var inst_19213 = (state_19273[(20)]);
var inst_19215 = (state_19273[(21)]);
var inst_19228 = (state_19273[(2)]);
var inst_19229 = (inst_19216 + (1));
var tmp19294 = inst_19214;
var tmp19295 = inst_19213;
var tmp19296 = inst_19215;
var inst_19213__$1 = tmp19295;
var inst_19214__$1 = tmp19294;
var inst_19215__$1 = tmp19296;
var inst_19216__$1 = inst_19229;
var state_19273__$1 = (function (){var statearr_19300 = state_19273;
(statearr_19300[(10)] = inst_19214__$1);

(statearr_19300[(22)] = inst_19228);

(statearr_19300[(12)] = inst_19216__$1);

(statearr_19300[(20)] = inst_19213__$1);

(statearr_19300[(21)] = inst_19215__$1);

return statearr_19300;
})();
var statearr_19301_19372 = state_19273__$1;
(statearr_19301_19372[(2)] = null);

(statearr_19301_19372[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (40))){
var inst_19241 = (state_19273[(23)]);
var inst_19245 = done.call(null,null);
var inst_19246 = cljs.core.async.untap_STAR_.call(null,m,inst_19241);
var state_19273__$1 = (function (){var statearr_19302 = state_19273;
(statearr_19302[(24)] = inst_19245);

return statearr_19302;
})();
var statearr_19303_19373 = state_19273__$1;
(statearr_19303_19373[(2)] = inst_19246);

(statearr_19303_19373[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (33))){
var inst_19232 = (state_19273[(25)]);
var inst_19234 = cljs.core.chunked_seq_QMARK_.call(null,inst_19232);
var state_19273__$1 = state_19273;
if(inst_19234){
var statearr_19304_19374 = state_19273__$1;
(statearr_19304_19374[(1)] = (36));

} else {
var statearr_19305_19375 = state_19273__$1;
(statearr_19305_19375[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (13))){
var inst_19162 = (state_19273[(26)]);
var inst_19165 = cljs.core.async.close_BANG_.call(null,inst_19162);
var state_19273__$1 = state_19273;
var statearr_19306_19376 = state_19273__$1;
(statearr_19306_19376[(2)] = inst_19165);

(statearr_19306_19376[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (22))){
var inst_19185 = (state_19273[(8)]);
var inst_19188 = cljs.core.async.close_BANG_.call(null,inst_19185);
var state_19273__$1 = state_19273;
var statearr_19307_19377 = state_19273__$1;
(statearr_19307_19377[(2)] = inst_19188);

(statearr_19307_19377[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (36))){
var inst_19232 = (state_19273[(25)]);
var inst_19236 = cljs.core.chunk_first.call(null,inst_19232);
var inst_19237 = cljs.core.chunk_rest.call(null,inst_19232);
var inst_19238 = cljs.core.count.call(null,inst_19236);
var inst_19213 = inst_19237;
var inst_19214 = inst_19236;
var inst_19215 = inst_19238;
var inst_19216 = (0);
var state_19273__$1 = (function (){var statearr_19308 = state_19273;
(statearr_19308[(10)] = inst_19214);

(statearr_19308[(12)] = inst_19216);

(statearr_19308[(20)] = inst_19213);

(statearr_19308[(21)] = inst_19215);

return statearr_19308;
})();
var statearr_19309_19378 = state_19273__$1;
(statearr_19309_19378[(2)] = null);

(statearr_19309_19378[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (41))){
var inst_19232 = (state_19273[(25)]);
var inst_19248 = (state_19273[(2)]);
var inst_19249 = cljs.core.next.call(null,inst_19232);
var inst_19213 = inst_19249;
var inst_19214 = null;
var inst_19215 = (0);
var inst_19216 = (0);
var state_19273__$1 = (function (){var statearr_19310 = state_19273;
(statearr_19310[(10)] = inst_19214);

(statearr_19310[(12)] = inst_19216);

(statearr_19310[(20)] = inst_19213);

(statearr_19310[(21)] = inst_19215);

(statearr_19310[(27)] = inst_19248);

return statearr_19310;
})();
var statearr_19311_19379 = state_19273__$1;
(statearr_19311_19379[(2)] = null);

(statearr_19311_19379[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (43))){
var state_19273__$1 = state_19273;
var statearr_19312_19380 = state_19273__$1;
(statearr_19312_19380[(2)] = null);

(statearr_19312_19380[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (29))){
var inst_19257 = (state_19273[(2)]);
var state_19273__$1 = state_19273;
var statearr_19313_19381 = state_19273__$1;
(statearr_19313_19381[(2)] = inst_19257);

(statearr_19313_19381[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (44))){
var inst_19266 = (state_19273[(2)]);
var state_19273__$1 = (function (){var statearr_19314 = state_19273;
(statearr_19314[(28)] = inst_19266);

return statearr_19314;
})();
var statearr_19315_19382 = state_19273__$1;
(statearr_19315_19382[(2)] = null);

(statearr_19315_19382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (6))){
var inst_19205 = (state_19273[(29)]);
var inst_19204 = cljs.core.deref.call(null,cs);
var inst_19205__$1 = cljs.core.keys.call(null,inst_19204);
var inst_19206 = cljs.core.count.call(null,inst_19205__$1);
var inst_19207 = cljs.core.reset_BANG_.call(null,dctr,inst_19206);
var inst_19212 = cljs.core.seq.call(null,inst_19205__$1);
var inst_19213 = inst_19212;
var inst_19214 = null;
var inst_19215 = (0);
var inst_19216 = (0);
var state_19273__$1 = (function (){var statearr_19316 = state_19273;
(statearr_19316[(10)] = inst_19214);

(statearr_19316[(12)] = inst_19216);

(statearr_19316[(20)] = inst_19213);

(statearr_19316[(30)] = inst_19207);

(statearr_19316[(21)] = inst_19215);

(statearr_19316[(29)] = inst_19205__$1);

return statearr_19316;
})();
var statearr_19317_19383 = state_19273__$1;
(statearr_19317_19383[(2)] = null);

(statearr_19317_19383[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (28))){
var inst_19213 = (state_19273[(20)]);
var inst_19232 = (state_19273[(25)]);
var inst_19232__$1 = cljs.core.seq.call(null,inst_19213);
var state_19273__$1 = (function (){var statearr_19318 = state_19273;
(statearr_19318[(25)] = inst_19232__$1);

return statearr_19318;
})();
if(inst_19232__$1){
var statearr_19319_19384 = state_19273__$1;
(statearr_19319_19384[(1)] = (33));

} else {
var statearr_19320_19385 = state_19273__$1;
(statearr_19320_19385[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (25))){
var inst_19216 = (state_19273[(12)]);
var inst_19215 = (state_19273[(21)]);
var inst_19218 = (inst_19216 < inst_19215);
var inst_19219 = inst_19218;
var state_19273__$1 = state_19273;
if(cljs.core.truth_(inst_19219)){
var statearr_19321_19386 = state_19273__$1;
(statearr_19321_19386[(1)] = (27));

} else {
var statearr_19322_19387 = state_19273__$1;
(statearr_19322_19387[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (34))){
var state_19273__$1 = state_19273;
var statearr_19323_19388 = state_19273__$1;
(statearr_19323_19388[(2)] = null);

(statearr_19323_19388[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (17))){
var state_19273__$1 = state_19273;
var statearr_19324_19389 = state_19273__$1;
(statearr_19324_19389[(2)] = null);

(statearr_19324_19389[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (3))){
var inst_19271 = (state_19273[(2)]);
var state_19273__$1 = state_19273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19273__$1,inst_19271);
} else {
if((state_val_19274 === (12))){
var inst_19200 = (state_19273[(2)]);
var state_19273__$1 = state_19273;
var statearr_19325_19390 = state_19273__$1;
(statearr_19325_19390[(2)] = inst_19200);

(statearr_19325_19390[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (2))){
var state_19273__$1 = state_19273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19273__$1,(4),ch);
} else {
if((state_val_19274 === (23))){
var state_19273__$1 = state_19273;
var statearr_19326_19391 = state_19273__$1;
(statearr_19326_19391[(2)] = null);

(statearr_19326_19391[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (35))){
var inst_19255 = (state_19273[(2)]);
var state_19273__$1 = state_19273;
var statearr_19327_19392 = state_19273__$1;
(statearr_19327_19392[(2)] = inst_19255);

(statearr_19327_19392[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (19))){
var inst_19172 = (state_19273[(7)]);
var inst_19176 = cljs.core.chunk_first.call(null,inst_19172);
var inst_19177 = cljs.core.chunk_rest.call(null,inst_19172);
var inst_19178 = cljs.core.count.call(null,inst_19176);
var inst_19150 = inst_19177;
var inst_19151 = inst_19176;
var inst_19152 = inst_19178;
var inst_19153 = (0);
var state_19273__$1 = (function (){var statearr_19328 = state_19273;
(statearr_19328[(13)] = inst_19153);

(statearr_19328[(15)] = inst_19150);

(statearr_19328[(16)] = inst_19152);

(statearr_19328[(17)] = inst_19151);

return statearr_19328;
})();
var statearr_19329_19393 = state_19273__$1;
(statearr_19329_19393[(2)] = null);

(statearr_19329_19393[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (11))){
var inst_19150 = (state_19273[(15)]);
var inst_19172 = (state_19273[(7)]);
var inst_19172__$1 = cljs.core.seq.call(null,inst_19150);
var state_19273__$1 = (function (){var statearr_19330 = state_19273;
(statearr_19330[(7)] = inst_19172__$1);

return statearr_19330;
})();
if(inst_19172__$1){
var statearr_19331_19394 = state_19273__$1;
(statearr_19331_19394[(1)] = (16));

} else {
var statearr_19332_19395 = state_19273__$1;
(statearr_19332_19395[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (9))){
var inst_19202 = (state_19273[(2)]);
var state_19273__$1 = state_19273;
var statearr_19333_19396 = state_19273__$1;
(statearr_19333_19396[(2)] = inst_19202);

(statearr_19333_19396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (5))){
var inst_19148 = cljs.core.deref.call(null,cs);
var inst_19149 = cljs.core.seq.call(null,inst_19148);
var inst_19150 = inst_19149;
var inst_19151 = null;
var inst_19152 = (0);
var inst_19153 = (0);
var state_19273__$1 = (function (){var statearr_19334 = state_19273;
(statearr_19334[(13)] = inst_19153);

(statearr_19334[(15)] = inst_19150);

(statearr_19334[(16)] = inst_19152);

(statearr_19334[(17)] = inst_19151);

return statearr_19334;
})();
var statearr_19335_19397 = state_19273__$1;
(statearr_19335_19397[(2)] = null);

(statearr_19335_19397[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (14))){
var state_19273__$1 = state_19273;
var statearr_19336_19398 = state_19273__$1;
(statearr_19336_19398[(2)] = null);

(statearr_19336_19398[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (45))){
var inst_19263 = (state_19273[(2)]);
var state_19273__$1 = state_19273;
var statearr_19337_19399 = state_19273__$1;
(statearr_19337_19399[(2)] = inst_19263);

(statearr_19337_19399[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (26))){
var inst_19205 = (state_19273[(29)]);
var inst_19259 = (state_19273[(2)]);
var inst_19260 = cljs.core.seq.call(null,inst_19205);
var state_19273__$1 = (function (){var statearr_19338 = state_19273;
(statearr_19338[(31)] = inst_19259);

return statearr_19338;
})();
if(inst_19260){
var statearr_19339_19400 = state_19273__$1;
(statearr_19339_19400[(1)] = (42));

} else {
var statearr_19340_19401 = state_19273__$1;
(statearr_19340_19401[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (16))){
var inst_19172 = (state_19273[(7)]);
var inst_19174 = cljs.core.chunked_seq_QMARK_.call(null,inst_19172);
var state_19273__$1 = state_19273;
if(inst_19174){
var statearr_19341_19402 = state_19273__$1;
(statearr_19341_19402[(1)] = (19));

} else {
var statearr_19342_19403 = state_19273__$1;
(statearr_19342_19403[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (38))){
var inst_19252 = (state_19273[(2)]);
var state_19273__$1 = state_19273;
var statearr_19343_19404 = state_19273__$1;
(statearr_19343_19404[(2)] = inst_19252);

(statearr_19343_19404[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (30))){
var state_19273__$1 = state_19273;
var statearr_19344_19405 = state_19273__$1;
(statearr_19344_19405[(2)] = null);

(statearr_19344_19405[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (10))){
var inst_19153 = (state_19273[(13)]);
var inst_19151 = (state_19273[(17)]);
var inst_19161 = cljs.core._nth.call(null,inst_19151,inst_19153);
var inst_19162 = cljs.core.nth.call(null,inst_19161,(0),null);
var inst_19163 = cljs.core.nth.call(null,inst_19161,(1),null);
var state_19273__$1 = (function (){var statearr_19345 = state_19273;
(statearr_19345[(26)] = inst_19162);

return statearr_19345;
})();
if(cljs.core.truth_(inst_19163)){
var statearr_19346_19406 = state_19273__$1;
(statearr_19346_19406[(1)] = (13));

} else {
var statearr_19347_19407 = state_19273__$1;
(statearr_19347_19407[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (18))){
var inst_19198 = (state_19273[(2)]);
var state_19273__$1 = state_19273;
var statearr_19348_19408 = state_19273__$1;
(statearr_19348_19408[(2)] = inst_19198);

(statearr_19348_19408[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (42))){
var state_19273__$1 = state_19273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19273__$1,(45),dchan);
} else {
if((state_val_19274 === (37))){
var inst_19141 = (state_19273[(11)]);
var inst_19232 = (state_19273[(25)]);
var inst_19241 = (state_19273[(23)]);
var inst_19241__$1 = cljs.core.first.call(null,inst_19232);
var inst_19242 = cljs.core.async.put_BANG_.call(null,inst_19241__$1,inst_19141,done);
var state_19273__$1 = (function (){var statearr_19349 = state_19273;
(statearr_19349[(23)] = inst_19241__$1);

return statearr_19349;
})();
if(cljs.core.truth_(inst_19242)){
var statearr_19350_19409 = state_19273__$1;
(statearr_19350_19409[(1)] = (39));

} else {
var statearr_19351_19410 = state_19273__$1;
(statearr_19351_19410[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (8))){
var inst_19153 = (state_19273[(13)]);
var inst_19152 = (state_19273[(16)]);
var inst_19155 = (inst_19153 < inst_19152);
var inst_19156 = inst_19155;
var state_19273__$1 = state_19273;
if(cljs.core.truth_(inst_19156)){
var statearr_19352_19411 = state_19273__$1;
(statearr_19352_19411[(1)] = (10));

} else {
var statearr_19353_19412 = state_19273__$1;
(statearr_19353_19412[(1)] = (11));

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
});})(c__16675__auto___19358,cs,m,dchan,dctr,done))
;
return ((function (switch__16508__auto__,c__16675__auto___19358,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__16509__auto__ = null;
var cljs$core$async$mult_$_state_machine__16509__auto____0 = (function (){
var statearr_19354 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19354[(0)] = cljs$core$async$mult_$_state_machine__16509__auto__);

(statearr_19354[(1)] = (1));

return statearr_19354;
});
var cljs$core$async$mult_$_state_machine__16509__auto____1 = (function (state_19273){
while(true){
var ret_value__16510__auto__ = (function (){try{while(true){
var result__16511__auto__ = switch__16508__auto__.call(null,state_19273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16511__auto__;
}
break;
}
}catch (e19355){if((e19355 instanceof Object)){
var ex__16512__auto__ = e19355;
var statearr_19356_19413 = state_19273;
(statearr_19356_19413[(5)] = ex__16512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19414 = state_19273;
state_19273 = G__19414;
continue;
} else {
return ret_value__16510__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16509__auto__ = function(state_19273){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16509__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16509__auto____1.call(this,state_19273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16509__auto____0;
cljs$core$async$mult_$_state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16509__auto____1;
return cljs$core$async$mult_$_state_machine__16509__auto__;
})()
;})(switch__16508__auto__,c__16675__auto___19358,cs,m,dchan,dctr,done))
})();
var state__16677__auto__ = (function (){var statearr_19357 = f__16676__auto__.call(null);
(statearr_19357[(6)] = c__16675__auto___19358);

return statearr_19357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16677__auto__);
});})(c__16675__auto___19358,cs,m,dchan,dctr,done))
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
var G__19416 = arguments.length;
switch (G__19416) {
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
var len__4641__auto___19428 = arguments.length;
var i__4642__auto___19429 = (0);
while(true){
if((i__4642__auto___19429 < len__4641__auto___19428)){
args__4647__auto__.push((arguments[i__4642__auto___19429]));

var G__19430 = (i__4642__auto___19429 + (1));
i__4642__auto___19429 = G__19430;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19422){
var map__19423 = p__19422;
var map__19423__$1 = (((((!((map__19423 == null))))?(((((map__19423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19423):map__19423);
var opts = map__19423__$1;
var statearr_19425_19431 = state;
(statearr_19425_19431[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__19423,map__19423__$1,opts){
return (function (val){
var statearr_19426_19432 = state;
(statearr_19426_19432[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__19423,map__19423__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_19427_19433 = state;
(statearr_19427_19433[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19418){
var G__19419 = cljs.core.first.call(null,seq19418);
var seq19418__$1 = cljs.core.next.call(null,seq19418);
var G__19420 = cljs.core.first.call(null,seq19418__$1);
var seq19418__$2 = cljs.core.next.call(null,seq19418__$1);
var G__19421 = cljs.core.first.call(null,seq19418__$2);
var seq19418__$3 = cljs.core.next.call(null,seq19418__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19419,G__19420,G__19421,seq19418__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19434 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19434 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19435){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta19435 = meta19435;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19436,meta19435__$1){
var self__ = this;
var _19436__$1 = this;
return (new cljs.core.async.t_cljs$core$async19434(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19435__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19434.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19436){
var self__ = this;
var _19436__$1 = this;
return self__.meta19435;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19434.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19434.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19434.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19434.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19434.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19434.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19434.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19434.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async19434.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta19435","meta19435",158260694,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19434.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19434.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19434";

cljs.core.async.t_cljs$core$async19434.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async19434");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19434.
 */
cljs.core.async.__GT_t_cljs$core$async19434 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async19434(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19435){
return (new cljs.core.async.t_cljs$core$async19434(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19435));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async19434(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16675__auto___19598 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16675__auto___19598,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16676__auto__ = (function (){var switch__16508__auto__ = ((function (c__16675__auto___19598,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19538){
var state_val_19539 = (state_19538[(1)]);
if((state_val_19539 === (7))){
var inst_19453 = (state_19538[(2)]);
var state_19538__$1 = state_19538;
var statearr_19540_19599 = state_19538__$1;
(statearr_19540_19599[(2)] = inst_19453);

(statearr_19540_19599[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (20))){
var inst_19465 = (state_19538[(7)]);
var state_19538__$1 = state_19538;
var statearr_19541_19600 = state_19538__$1;
(statearr_19541_19600[(2)] = inst_19465);

(statearr_19541_19600[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (27))){
var state_19538__$1 = state_19538;
var statearr_19542_19601 = state_19538__$1;
(statearr_19542_19601[(2)] = null);

(statearr_19542_19601[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (1))){
var inst_19440 = (state_19538[(8)]);
var inst_19440__$1 = calc_state.call(null);
var inst_19442 = (inst_19440__$1 == null);
var inst_19443 = cljs.core.not.call(null,inst_19442);
var state_19538__$1 = (function (){var statearr_19543 = state_19538;
(statearr_19543[(8)] = inst_19440__$1);

return statearr_19543;
})();
if(inst_19443){
var statearr_19544_19602 = state_19538__$1;
(statearr_19544_19602[(1)] = (2));

} else {
var statearr_19545_19603 = state_19538__$1;
(statearr_19545_19603[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (24))){
var inst_19489 = (state_19538[(9)]);
var inst_19512 = (state_19538[(10)]);
var inst_19498 = (state_19538[(11)]);
var inst_19512__$1 = inst_19489.call(null,inst_19498);
var state_19538__$1 = (function (){var statearr_19546 = state_19538;
(statearr_19546[(10)] = inst_19512__$1);

return statearr_19546;
})();
if(cljs.core.truth_(inst_19512__$1)){
var statearr_19547_19604 = state_19538__$1;
(statearr_19547_19604[(1)] = (29));

} else {
var statearr_19548_19605 = state_19538__$1;
(statearr_19548_19605[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (4))){
var inst_19456 = (state_19538[(2)]);
var state_19538__$1 = state_19538;
if(cljs.core.truth_(inst_19456)){
var statearr_19549_19606 = state_19538__$1;
(statearr_19549_19606[(1)] = (8));

} else {
var statearr_19550_19607 = state_19538__$1;
(statearr_19550_19607[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (15))){
var inst_19483 = (state_19538[(2)]);
var state_19538__$1 = state_19538;
if(cljs.core.truth_(inst_19483)){
var statearr_19551_19608 = state_19538__$1;
(statearr_19551_19608[(1)] = (19));

} else {
var statearr_19552_19609 = state_19538__$1;
(statearr_19552_19609[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (21))){
var inst_19488 = (state_19538[(12)]);
var inst_19488__$1 = (state_19538[(2)]);
var inst_19489 = cljs.core.get.call(null,inst_19488__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19490 = cljs.core.get.call(null,inst_19488__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19491 = cljs.core.get.call(null,inst_19488__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19538__$1 = (function (){var statearr_19553 = state_19538;
(statearr_19553[(9)] = inst_19489);

(statearr_19553[(12)] = inst_19488__$1);

(statearr_19553[(13)] = inst_19490);

return statearr_19553;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19538__$1,(22),inst_19491);
} else {
if((state_val_19539 === (31))){
var inst_19520 = (state_19538[(2)]);
var state_19538__$1 = state_19538;
if(cljs.core.truth_(inst_19520)){
var statearr_19554_19610 = state_19538__$1;
(statearr_19554_19610[(1)] = (32));

} else {
var statearr_19555_19611 = state_19538__$1;
(statearr_19555_19611[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (32))){
var inst_19497 = (state_19538[(14)]);
var state_19538__$1 = state_19538;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19538__$1,(35),out,inst_19497);
} else {
if((state_val_19539 === (33))){
var inst_19488 = (state_19538[(12)]);
var inst_19465 = inst_19488;
var state_19538__$1 = (function (){var statearr_19556 = state_19538;
(statearr_19556[(7)] = inst_19465);

return statearr_19556;
})();
var statearr_19557_19612 = state_19538__$1;
(statearr_19557_19612[(2)] = null);

(statearr_19557_19612[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (13))){
var inst_19465 = (state_19538[(7)]);
var inst_19472 = inst_19465.cljs$lang$protocol_mask$partition0$;
var inst_19473 = (inst_19472 & (64));
var inst_19474 = inst_19465.cljs$core$ISeq$;
var inst_19475 = (cljs.core.PROTOCOL_SENTINEL === inst_19474);
var inst_19476 = ((inst_19473) || (inst_19475));
var state_19538__$1 = state_19538;
if(cljs.core.truth_(inst_19476)){
var statearr_19558_19613 = state_19538__$1;
(statearr_19558_19613[(1)] = (16));

} else {
var statearr_19559_19614 = state_19538__$1;
(statearr_19559_19614[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (22))){
var inst_19497 = (state_19538[(14)]);
var inst_19498 = (state_19538[(11)]);
var inst_19496 = (state_19538[(2)]);
var inst_19497__$1 = cljs.core.nth.call(null,inst_19496,(0),null);
var inst_19498__$1 = cljs.core.nth.call(null,inst_19496,(1),null);
var inst_19499 = (inst_19497__$1 == null);
var inst_19500 = cljs.core._EQ_.call(null,inst_19498__$1,change);
var inst_19501 = ((inst_19499) || (inst_19500));
var state_19538__$1 = (function (){var statearr_19560 = state_19538;
(statearr_19560[(14)] = inst_19497__$1);

(statearr_19560[(11)] = inst_19498__$1);

return statearr_19560;
})();
if(cljs.core.truth_(inst_19501)){
var statearr_19561_19615 = state_19538__$1;
(statearr_19561_19615[(1)] = (23));

} else {
var statearr_19562_19616 = state_19538__$1;
(statearr_19562_19616[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (36))){
var inst_19488 = (state_19538[(12)]);
var inst_19465 = inst_19488;
var state_19538__$1 = (function (){var statearr_19563 = state_19538;
(statearr_19563[(7)] = inst_19465);

return statearr_19563;
})();
var statearr_19564_19617 = state_19538__$1;
(statearr_19564_19617[(2)] = null);

(statearr_19564_19617[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (29))){
var inst_19512 = (state_19538[(10)]);
var state_19538__$1 = state_19538;
var statearr_19565_19618 = state_19538__$1;
(statearr_19565_19618[(2)] = inst_19512);

(statearr_19565_19618[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (6))){
var state_19538__$1 = state_19538;
var statearr_19566_19619 = state_19538__$1;
(statearr_19566_19619[(2)] = false);

(statearr_19566_19619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (28))){
var inst_19508 = (state_19538[(2)]);
var inst_19509 = calc_state.call(null);
var inst_19465 = inst_19509;
var state_19538__$1 = (function (){var statearr_19567 = state_19538;
(statearr_19567[(7)] = inst_19465);

(statearr_19567[(15)] = inst_19508);

return statearr_19567;
})();
var statearr_19568_19620 = state_19538__$1;
(statearr_19568_19620[(2)] = null);

(statearr_19568_19620[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (25))){
var inst_19534 = (state_19538[(2)]);
var state_19538__$1 = state_19538;
var statearr_19569_19621 = state_19538__$1;
(statearr_19569_19621[(2)] = inst_19534);

(statearr_19569_19621[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (34))){
var inst_19532 = (state_19538[(2)]);
var state_19538__$1 = state_19538;
var statearr_19570_19622 = state_19538__$1;
(statearr_19570_19622[(2)] = inst_19532);

(statearr_19570_19622[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (17))){
var state_19538__$1 = state_19538;
var statearr_19571_19623 = state_19538__$1;
(statearr_19571_19623[(2)] = false);

(statearr_19571_19623[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (3))){
var state_19538__$1 = state_19538;
var statearr_19572_19624 = state_19538__$1;
(statearr_19572_19624[(2)] = false);

(statearr_19572_19624[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (12))){
var inst_19536 = (state_19538[(2)]);
var state_19538__$1 = state_19538;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19538__$1,inst_19536);
} else {
if((state_val_19539 === (2))){
var inst_19440 = (state_19538[(8)]);
var inst_19445 = inst_19440.cljs$lang$protocol_mask$partition0$;
var inst_19446 = (inst_19445 & (64));
var inst_19447 = inst_19440.cljs$core$ISeq$;
var inst_19448 = (cljs.core.PROTOCOL_SENTINEL === inst_19447);
var inst_19449 = ((inst_19446) || (inst_19448));
var state_19538__$1 = state_19538;
if(cljs.core.truth_(inst_19449)){
var statearr_19573_19625 = state_19538__$1;
(statearr_19573_19625[(1)] = (5));

} else {
var statearr_19574_19626 = state_19538__$1;
(statearr_19574_19626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (23))){
var inst_19497 = (state_19538[(14)]);
var inst_19503 = (inst_19497 == null);
var state_19538__$1 = state_19538;
if(cljs.core.truth_(inst_19503)){
var statearr_19575_19627 = state_19538__$1;
(statearr_19575_19627[(1)] = (26));

} else {
var statearr_19576_19628 = state_19538__$1;
(statearr_19576_19628[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (35))){
var inst_19523 = (state_19538[(2)]);
var state_19538__$1 = state_19538;
if(cljs.core.truth_(inst_19523)){
var statearr_19577_19629 = state_19538__$1;
(statearr_19577_19629[(1)] = (36));

} else {
var statearr_19578_19630 = state_19538__$1;
(statearr_19578_19630[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (19))){
var inst_19465 = (state_19538[(7)]);
var inst_19485 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19465);
var state_19538__$1 = state_19538;
var statearr_19579_19631 = state_19538__$1;
(statearr_19579_19631[(2)] = inst_19485);

(statearr_19579_19631[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (11))){
var inst_19465 = (state_19538[(7)]);
var inst_19469 = (inst_19465 == null);
var inst_19470 = cljs.core.not.call(null,inst_19469);
var state_19538__$1 = state_19538;
if(inst_19470){
var statearr_19580_19632 = state_19538__$1;
(statearr_19580_19632[(1)] = (13));

} else {
var statearr_19581_19633 = state_19538__$1;
(statearr_19581_19633[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (9))){
var inst_19440 = (state_19538[(8)]);
var state_19538__$1 = state_19538;
var statearr_19582_19634 = state_19538__$1;
(statearr_19582_19634[(2)] = inst_19440);

(statearr_19582_19634[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (5))){
var state_19538__$1 = state_19538;
var statearr_19583_19635 = state_19538__$1;
(statearr_19583_19635[(2)] = true);

(statearr_19583_19635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (14))){
var state_19538__$1 = state_19538;
var statearr_19584_19636 = state_19538__$1;
(statearr_19584_19636[(2)] = false);

(statearr_19584_19636[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (26))){
var inst_19498 = (state_19538[(11)]);
var inst_19505 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19498);
var state_19538__$1 = state_19538;
var statearr_19585_19637 = state_19538__$1;
(statearr_19585_19637[(2)] = inst_19505);

(statearr_19585_19637[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (16))){
var state_19538__$1 = state_19538;
var statearr_19586_19638 = state_19538__$1;
(statearr_19586_19638[(2)] = true);

(statearr_19586_19638[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (38))){
var inst_19528 = (state_19538[(2)]);
var state_19538__$1 = state_19538;
var statearr_19587_19639 = state_19538__$1;
(statearr_19587_19639[(2)] = inst_19528);

(statearr_19587_19639[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (30))){
var inst_19489 = (state_19538[(9)]);
var inst_19490 = (state_19538[(13)]);
var inst_19498 = (state_19538[(11)]);
var inst_19515 = cljs.core.empty_QMARK_.call(null,inst_19489);
var inst_19516 = inst_19490.call(null,inst_19498);
var inst_19517 = cljs.core.not.call(null,inst_19516);
var inst_19518 = ((inst_19515) && (inst_19517));
var state_19538__$1 = state_19538;
var statearr_19588_19640 = state_19538__$1;
(statearr_19588_19640[(2)] = inst_19518);

(statearr_19588_19640[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (10))){
var inst_19440 = (state_19538[(8)]);
var inst_19461 = (state_19538[(2)]);
var inst_19462 = cljs.core.get.call(null,inst_19461,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19463 = cljs.core.get.call(null,inst_19461,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19464 = cljs.core.get.call(null,inst_19461,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19465 = inst_19440;
var state_19538__$1 = (function (){var statearr_19589 = state_19538;
(statearr_19589[(7)] = inst_19465);

(statearr_19589[(16)] = inst_19463);

(statearr_19589[(17)] = inst_19464);

(statearr_19589[(18)] = inst_19462);

return statearr_19589;
})();
var statearr_19590_19641 = state_19538__$1;
(statearr_19590_19641[(2)] = null);

(statearr_19590_19641[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (18))){
var inst_19480 = (state_19538[(2)]);
var state_19538__$1 = state_19538;
var statearr_19591_19642 = state_19538__$1;
(statearr_19591_19642[(2)] = inst_19480);

(statearr_19591_19642[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (37))){
var state_19538__$1 = state_19538;
var statearr_19592_19643 = state_19538__$1;
(statearr_19592_19643[(2)] = null);

(statearr_19592_19643[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (8))){
var inst_19440 = (state_19538[(8)]);
var inst_19458 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19440);
var state_19538__$1 = state_19538;
var statearr_19593_19644 = state_19538__$1;
(statearr_19593_19644[(2)] = inst_19458);

(statearr_19593_19644[(1)] = (10));


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
});})(c__16675__auto___19598,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16508__auto__,c__16675__auto___19598,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__16509__auto__ = null;
var cljs$core$async$mix_$_state_machine__16509__auto____0 = (function (){
var statearr_19594 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19594[(0)] = cljs$core$async$mix_$_state_machine__16509__auto__);

(statearr_19594[(1)] = (1));

return statearr_19594;
});
var cljs$core$async$mix_$_state_machine__16509__auto____1 = (function (state_19538){
while(true){
var ret_value__16510__auto__ = (function (){try{while(true){
var result__16511__auto__ = switch__16508__auto__.call(null,state_19538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16511__auto__;
}
break;
}
}catch (e19595){if((e19595 instanceof Object)){
var ex__16512__auto__ = e19595;
var statearr_19596_19645 = state_19538;
(statearr_19596_19645[(5)] = ex__16512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19646 = state_19538;
state_19538 = G__19646;
continue;
} else {
return ret_value__16510__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16509__auto__ = function(state_19538){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16509__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16509__auto____1.call(this,state_19538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16509__auto____0;
cljs$core$async$mix_$_state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16509__auto____1;
return cljs$core$async$mix_$_state_machine__16509__auto__;
})()
;})(switch__16508__auto__,c__16675__auto___19598,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16677__auto__ = (function (){var statearr_19597 = f__16676__auto__.call(null);
(statearr_19597[(6)] = c__16675__auto___19598);

return statearr_19597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16677__auto__);
});})(c__16675__auto___19598,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__19648 = arguments.length;
switch (G__19648) {
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
var G__19652 = arguments.length;
switch (G__19652) {
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
return (function (p1__19650_SHARP_){
if(cljs.core.truth_(p1__19650_SHARP_.call(null,topic))){
return p1__19650_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19650_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19653 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19653 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19654){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19654 = meta19654;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19655,meta19654__$1){
var self__ = this;
var _19655__$1 = this;
return (new cljs.core.async.t_cljs$core$async19653(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19654__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19653.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19655){
var self__ = this;
var _19655__$1 = this;
return self__.meta19654;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19653.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19653.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19653.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19653.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19653.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async19653.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19653.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19653.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19654","meta19654",-1514820209,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19653.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19653.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19653";

cljs.core.async.t_cljs$core$async19653.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async19653");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19653.
 */
cljs.core.async.__GT_t_cljs$core$async19653 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async19653(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19654){
return (new cljs.core.async.t_cljs$core$async19653(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19654));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async19653(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16675__auto___19773 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16675__auto___19773,mults,ensure_mult,p){
return (function (){
var f__16676__auto__ = (function (){var switch__16508__auto__ = ((function (c__16675__auto___19773,mults,ensure_mult,p){
return (function (state_19727){
var state_val_19728 = (state_19727[(1)]);
if((state_val_19728 === (7))){
var inst_19723 = (state_19727[(2)]);
var state_19727__$1 = state_19727;
var statearr_19729_19774 = state_19727__$1;
(statearr_19729_19774[(2)] = inst_19723);

(statearr_19729_19774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19728 === (20))){
var state_19727__$1 = state_19727;
var statearr_19730_19775 = state_19727__$1;
(statearr_19730_19775[(2)] = null);

(statearr_19730_19775[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19728 === (1))){
var state_19727__$1 = state_19727;
var statearr_19731_19776 = state_19727__$1;
(statearr_19731_19776[(2)] = null);

(statearr_19731_19776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19728 === (24))){
var inst_19706 = (state_19727[(7)]);
var inst_19715 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19706);
var state_19727__$1 = state_19727;
var statearr_19732_19777 = state_19727__$1;
(statearr_19732_19777[(2)] = inst_19715);

(statearr_19732_19777[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19728 === (4))){
var inst_19658 = (state_19727[(8)]);
var inst_19658__$1 = (state_19727[(2)]);
var inst_19659 = (inst_19658__$1 == null);
var state_19727__$1 = (function (){var statearr_19733 = state_19727;
(statearr_19733[(8)] = inst_19658__$1);

return statearr_19733;
})();
if(cljs.core.truth_(inst_19659)){
var statearr_19734_19778 = state_19727__$1;
(statearr_19734_19778[(1)] = (5));

} else {
var statearr_19735_19779 = state_19727__$1;
(statearr_19735_19779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19728 === (15))){
var inst_19700 = (state_19727[(2)]);
var state_19727__$1 = state_19727;
var statearr_19736_19780 = state_19727__$1;
(statearr_19736_19780[(2)] = inst_19700);

(statearr_19736_19780[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19728 === (21))){
var inst_19720 = (state_19727[(2)]);
var state_19727__$1 = (function (){var statearr_19737 = state_19727;
(statearr_19737[(9)] = inst_19720);

return statearr_19737;
})();
var statearr_19738_19781 = state_19727__$1;
(statearr_19738_19781[(2)] = null);

(statearr_19738_19781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19728 === (13))){
var inst_19682 = (state_19727[(10)]);
var inst_19684 = cljs.core.chunked_seq_QMARK_.call(null,inst_19682);
var state_19727__$1 = state_19727;
if(inst_19684){
var statearr_19739_19782 = state_19727__$1;
(statearr_19739_19782[(1)] = (16));

} else {
var statearr_19740_19783 = state_19727__$1;
(statearr_19740_19783[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19728 === (22))){
var inst_19712 = (state_19727[(2)]);
var state_19727__$1 = state_19727;
if(cljs.core.truth_(inst_19712)){
var statearr_19741_19784 = state_19727__$1;
(statearr_19741_19784[(1)] = (23));

} else {
var statearr_19742_19785 = state_19727__$1;
(statearr_19742_19785[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19728 === (6))){
var inst_19706 = (state_19727[(7)]);
var inst_19658 = (state_19727[(8)]);
var inst_19708 = (state_19727[(11)]);
var inst_19706__$1 = topic_fn.call(null,inst_19658);
var inst_19707 = cljs.core.deref.call(null,mults);
var inst_19708__$1 = cljs.core.get.call(null,inst_19707,inst_19706__$1);
var state_19727__$1 = (function (){var statearr_19743 = state_19727;
(statearr_19743[(7)] = inst_19706__$1);

(statearr_19743[(11)] = inst_19708__$1);

return statearr_19743;
})();
if(cljs.core.truth_(inst_19708__$1)){
var statearr_19744_19786 = state_19727__$1;
(statearr_19744_19786[(1)] = (19));

} else {
var statearr_19745_19787 = state_19727__$1;
(statearr_19745_19787[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19728 === (25))){
var inst_19717 = (state_19727[(2)]);
var state_19727__$1 = state_19727;
var statearr_19746_19788 = state_19727__$1;
(statearr_19746_19788[(2)] = inst_19717);

(statearr_19746_19788[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19728 === (17))){
var inst_19682 = (state_19727[(10)]);
var inst_19691 = cljs.core.first.call(null,inst_19682);
var inst_19692 = cljs.core.async.muxch_STAR_.call(null,inst_19691);
var inst_19693 = cljs.core.async.close_BANG_.call(null,inst_19692);
var inst_19694 = cljs.core.next.call(null,inst_19682);
var inst_19668 = inst_19694;
var inst_19669 = null;
var inst_19670 = (0);
var inst_19671 = (0);
var state_19727__$1 = (function (){var statearr_19747 = state_19727;
(statearr_19747[(12)] = inst_19668);

(statearr_19747[(13)] = inst_19671);

(statearr_19747[(14)] = inst_19670);

(statearr_19747[(15)] = inst_19693);

(statearr_19747[(16)] = inst_19669);

return statearr_19747;
})();
var statearr_19748_19789 = state_19727__$1;
(statearr_19748_19789[(2)] = null);

(statearr_19748_19789[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19728 === (3))){
var inst_19725 = (state_19727[(2)]);
var state_19727__$1 = state_19727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19727__$1,inst_19725);
} else {
if((state_val_19728 === (12))){
var inst_19702 = (state_19727[(2)]);
var state_19727__$1 = state_19727;
var statearr_19749_19790 = state_19727__$1;
(statearr_19749_19790[(2)] = inst_19702);

(statearr_19749_19790[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19728 === (2))){
var state_19727__$1 = state_19727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19727__$1,(4),ch);
} else {
if((state_val_19728 === (23))){
var state_19727__$1 = state_19727;
var statearr_19750_19791 = state_19727__$1;
(statearr_19750_19791[(2)] = null);

(statearr_19750_19791[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19728 === (19))){
var inst_19658 = (state_19727[(8)]);
var inst_19708 = (state_19727[(11)]);
var inst_19710 = cljs.core.async.muxch_STAR_.call(null,inst_19708);
var state_19727__$1 = state_19727;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19727__$1,(22),inst_19710,inst_19658);
} else {
if((state_val_19728 === (11))){
var inst_19682 = (state_19727[(10)]);
var inst_19668 = (state_19727[(12)]);
var inst_19682__$1 = cljs.core.seq.call(null,inst_19668);
var state_19727__$1 = (function (){var statearr_19751 = state_19727;
(statearr_19751[(10)] = inst_19682__$1);

return statearr_19751;
})();
if(inst_19682__$1){
var statearr_19752_19792 = state_19727__$1;
(statearr_19752_19792[(1)] = (13));

} else {
var statearr_19753_19793 = state_19727__$1;
(statearr_19753_19793[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19728 === (9))){
var inst_19704 = (state_19727[(2)]);
var state_19727__$1 = state_19727;
var statearr_19754_19794 = state_19727__$1;
(statearr_19754_19794[(2)] = inst_19704);

(statearr_19754_19794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19728 === (5))){
var inst_19665 = cljs.core.deref.call(null,mults);
var inst_19666 = cljs.core.vals.call(null,inst_19665);
var inst_19667 = cljs.core.seq.call(null,inst_19666);
var inst_19668 = inst_19667;
var inst_19669 = null;
var inst_19670 = (0);
var inst_19671 = (0);
var state_19727__$1 = (function (){var statearr_19755 = state_19727;
(statearr_19755[(12)] = inst_19668);

(statearr_19755[(13)] = inst_19671);

(statearr_19755[(14)] = inst_19670);

(statearr_19755[(16)] = inst_19669);

return statearr_19755;
})();
var statearr_19756_19795 = state_19727__$1;
(statearr_19756_19795[(2)] = null);

(statearr_19756_19795[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19728 === (14))){
var state_19727__$1 = state_19727;
var statearr_19760_19796 = state_19727__$1;
(statearr_19760_19796[(2)] = null);

(statearr_19760_19796[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19728 === (16))){
var inst_19682 = (state_19727[(10)]);
var inst_19686 = cljs.core.chunk_first.call(null,inst_19682);
var inst_19687 = cljs.core.chunk_rest.call(null,inst_19682);
var inst_19688 = cljs.core.count.call(null,inst_19686);
var inst_19668 = inst_19687;
var inst_19669 = inst_19686;
var inst_19670 = inst_19688;
var inst_19671 = (0);
var state_19727__$1 = (function (){var statearr_19761 = state_19727;
(statearr_19761[(12)] = inst_19668);

(statearr_19761[(13)] = inst_19671);

(statearr_19761[(14)] = inst_19670);

(statearr_19761[(16)] = inst_19669);

return statearr_19761;
})();
var statearr_19762_19797 = state_19727__$1;
(statearr_19762_19797[(2)] = null);

(statearr_19762_19797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19728 === (10))){
var inst_19668 = (state_19727[(12)]);
var inst_19671 = (state_19727[(13)]);
var inst_19670 = (state_19727[(14)]);
var inst_19669 = (state_19727[(16)]);
var inst_19676 = cljs.core._nth.call(null,inst_19669,inst_19671);
var inst_19677 = cljs.core.async.muxch_STAR_.call(null,inst_19676);
var inst_19678 = cljs.core.async.close_BANG_.call(null,inst_19677);
var inst_19679 = (inst_19671 + (1));
var tmp19757 = inst_19668;
var tmp19758 = inst_19670;
var tmp19759 = inst_19669;
var inst_19668__$1 = tmp19757;
var inst_19669__$1 = tmp19759;
var inst_19670__$1 = tmp19758;
var inst_19671__$1 = inst_19679;
var state_19727__$1 = (function (){var statearr_19763 = state_19727;
(statearr_19763[(12)] = inst_19668__$1);

(statearr_19763[(17)] = inst_19678);

(statearr_19763[(13)] = inst_19671__$1);

(statearr_19763[(14)] = inst_19670__$1);

(statearr_19763[(16)] = inst_19669__$1);

return statearr_19763;
})();
var statearr_19764_19798 = state_19727__$1;
(statearr_19764_19798[(2)] = null);

(statearr_19764_19798[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19728 === (18))){
var inst_19697 = (state_19727[(2)]);
var state_19727__$1 = state_19727;
var statearr_19765_19799 = state_19727__$1;
(statearr_19765_19799[(2)] = inst_19697);

(statearr_19765_19799[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19728 === (8))){
var inst_19671 = (state_19727[(13)]);
var inst_19670 = (state_19727[(14)]);
var inst_19673 = (inst_19671 < inst_19670);
var inst_19674 = inst_19673;
var state_19727__$1 = state_19727;
if(cljs.core.truth_(inst_19674)){
var statearr_19766_19800 = state_19727__$1;
(statearr_19766_19800[(1)] = (10));

} else {
var statearr_19767_19801 = state_19727__$1;
(statearr_19767_19801[(1)] = (11));

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
});})(c__16675__auto___19773,mults,ensure_mult,p))
;
return ((function (switch__16508__auto__,c__16675__auto___19773,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__16509__auto__ = null;
var cljs$core$async$state_machine__16509__auto____0 = (function (){
var statearr_19768 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19768[(0)] = cljs$core$async$state_machine__16509__auto__);

(statearr_19768[(1)] = (1));

return statearr_19768;
});
var cljs$core$async$state_machine__16509__auto____1 = (function (state_19727){
while(true){
var ret_value__16510__auto__ = (function (){try{while(true){
var result__16511__auto__ = switch__16508__auto__.call(null,state_19727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16511__auto__;
}
break;
}
}catch (e19769){if((e19769 instanceof Object)){
var ex__16512__auto__ = e19769;
var statearr_19770_19802 = state_19727;
(statearr_19770_19802[(5)] = ex__16512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19803 = state_19727;
state_19727 = G__19803;
continue;
} else {
return ret_value__16510__auto__;
}
break;
}
});
cljs$core$async$state_machine__16509__auto__ = function(state_19727){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16509__auto____1.call(this,state_19727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16509__auto____0;
cljs$core$async$state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16509__auto____1;
return cljs$core$async$state_machine__16509__auto__;
})()
;})(switch__16508__auto__,c__16675__auto___19773,mults,ensure_mult,p))
})();
var state__16677__auto__ = (function (){var statearr_19771 = f__16676__auto__.call(null);
(statearr_19771[(6)] = c__16675__auto___19773);

return statearr_19771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16677__auto__);
});})(c__16675__auto___19773,mults,ensure_mult,p))
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
var G__19805 = arguments.length;
switch (G__19805) {
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
var G__19808 = arguments.length;
switch (G__19808) {
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
var G__19811 = arguments.length;
switch (G__19811) {
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
var c__16675__auto___19878 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16675__auto___19878,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16676__auto__ = (function (){var switch__16508__auto__ = ((function (c__16675__auto___19878,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19850){
var state_val_19851 = (state_19850[(1)]);
if((state_val_19851 === (7))){
var state_19850__$1 = state_19850;
var statearr_19852_19879 = state_19850__$1;
(statearr_19852_19879[(2)] = null);

(statearr_19852_19879[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19851 === (1))){
var state_19850__$1 = state_19850;
var statearr_19853_19880 = state_19850__$1;
(statearr_19853_19880[(2)] = null);

(statearr_19853_19880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19851 === (4))){
var inst_19814 = (state_19850[(7)]);
var inst_19816 = (inst_19814 < cnt);
var state_19850__$1 = state_19850;
if(cljs.core.truth_(inst_19816)){
var statearr_19854_19881 = state_19850__$1;
(statearr_19854_19881[(1)] = (6));

} else {
var statearr_19855_19882 = state_19850__$1;
(statearr_19855_19882[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19851 === (15))){
var inst_19846 = (state_19850[(2)]);
var state_19850__$1 = state_19850;
var statearr_19856_19883 = state_19850__$1;
(statearr_19856_19883[(2)] = inst_19846);

(statearr_19856_19883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19851 === (13))){
var inst_19839 = cljs.core.async.close_BANG_.call(null,out);
var state_19850__$1 = state_19850;
var statearr_19857_19884 = state_19850__$1;
(statearr_19857_19884[(2)] = inst_19839);

(statearr_19857_19884[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19851 === (6))){
var state_19850__$1 = state_19850;
var statearr_19858_19885 = state_19850__$1;
(statearr_19858_19885[(2)] = null);

(statearr_19858_19885[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19851 === (3))){
var inst_19848 = (state_19850[(2)]);
var state_19850__$1 = state_19850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19850__$1,inst_19848);
} else {
if((state_val_19851 === (12))){
var inst_19836 = (state_19850[(8)]);
var inst_19836__$1 = (state_19850[(2)]);
var inst_19837 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19836__$1);
var state_19850__$1 = (function (){var statearr_19859 = state_19850;
(statearr_19859[(8)] = inst_19836__$1);

return statearr_19859;
})();
if(cljs.core.truth_(inst_19837)){
var statearr_19860_19886 = state_19850__$1;
(statearr_19860_19886[(1)] = (13));

} else {
var statearr_19861_19887 = state_19850__$1;
(statearr_19861_19887[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19851 === (2))){
var inst_19813 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19814 = (0);
var state_19850__$1 = (function (){var statearr_19862 = state_19850;
(statearr_19862[(7)] = inst_19814);

(statearr_19862[(9)] = inst_19813);

return statearr_19862;
})();
var statearr_19863_19888 = state_19850__$1;
(statearr_19863_19888[(2)] = null);

(statearr_19863_19888[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19851 === (11))){
var inst_19814 = (state_19850[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19850,(10),Object,null,(9));
var inst_19823 = chs__$1.call(null,inst_19814);
var inst_19824 = done.call(null,inst_19814);
var inst_19825 = cljs.core.async.take_BANG_.call(null,inst_19823,inst_19824);
var state_19850__$1 = state_19850;
var statearr_19864_19889 = state_19850__$1;
(statearr_19864_19889[(2)] = inst_19825);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19850__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19851 === (9))){
var inst_19814 = (state_19850[(7)]);
var inst_19827 = (state_19850[(2)]);
var inst_19828 = (inst_19814 + (1));
var inst_19814__$1 = inst_19828;
var state_19850__$1 = (function (){var statearr_19865 = state_19850;
(statearr_19865[(7)] = inst_19814__$1);

(statearr_19865[(10)] = inst_19827);

return statearr_19865;
})();
var statearr_19866_19890 = state_19850__$1;
(statearr_19866_19890[(2)] = null);

(statearr_19866_19890[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19851 === (5))){
var inst_19834 = (state_19850[(2)]);
var state_19850__$1 = (function (){var statearr_19867 = state_19850;
(statearr_19867[(11)] = inst_19834);

return statearr_19867;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19850__$1,(12),dchan);
} else {
if((state_val_19851 === (14))){
var inst_19836 = (state_19850[(8)]);
var inst_19841 = cljs.core.apply.call(null,f,inst_19836);
var state_19850__$1 = state_19850;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19850__$1,(16),out,inst_19841);
} else {
if((state_val_19851 === (16))){
var inst_19843 = (state_19850[(2)]);
var state_19850__$1 = (function (){var statearr_19868 = state_19850;
(statearr_19868[(12)] = inst_19843);

return statearr_19868;
})();
var statearr_19869_19891 = state_19850__$1;
(statearr_19869_19891[(2)] = null);

(statearr_19869_19891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19851 === (10))){
var inst_19818 = (state_19850[(2)]);
var inst_19819 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19850__$1 = (function (){var statearr_19870 = state_19850;
(statearr_19870[(13)] = inst_19818);

return statearr_19870;
})();
var statearr_19871_19892 = state_19850__$1;
(statearr_19871_19892[(2)] = inst_19819);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19850__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19851 === (8))){
var inst_19832 = (state_19850[(2)]);
var state_19850__$1 = state_19850;
var statearr_19872_19893 = state_19850__$1;
(statearr_19872_19893[(2)] = inst_19832);

(statearr_19872_19893[(1)] = (5));


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
});})(c__16675__auto___19878,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16508__auto__,c__16675__auto___19878,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__16509__auto__ = null;
var cljs$core$async$state_machine__16509__auto____0 = (function (){
var statearr_19873 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19873[(0)] = cljs$core$async$state_machine__16509__auto__);

(statearr_19873[(1)] = (1));

return statearr_19873;
});
var cljs$core$async$state_machine__16509__auto____1 = (function (state_19850){
while(true){
var ret_value__16510__auto__ = (function (){try{while(true){
var result__16511__auto__ = switch__16508__auto__.call(null,state_19850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16511__auto__;
}
break;
}
}catch (e19874){if((e19874 instanceof Object)){
var ex__16512__auto__ = e19874;
var statearr_19875_19894 = state_19850;
(statearr_19875_19894[(5)] = ex__16512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19895 = state_19850;
state_19850 = G__19895;
continue;
} else {
return ret_value__16510__auto__;
}
break;
}
});
cljs$core$async$state_machine__16509__auto__ = function(state_19850){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16509__auto____1.call(this,state_19850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16509__auto____0;
cljs$core$async$state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16509__auto____1;
return cljs$core$async$state_machine__16509__auto__;
})()
;})(switch__16508__auto__,c__16675__auto___19878,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16677__auto__ = (function (){var statearr_19876 = f__16676__auto__.call(null);
(statearr_19876[(6)] = c__16675__auto___19878);

return statearr_19876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16677__auto__);
});})(c__16675__auto___19878,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__19898 = arguments.length;
switch (G__19898) {
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
var c__16675__auto___19952 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16675__auto___19952,out){
return (function (){
var f__16676__auto__ = (function (){var switch__16508__auto__ = ((function (c__16675__auto___19952,out){
return (function (state_19930){
var state_val_19931 = (state_19930[(1)]);
if((state_val_19931 === (7))){
var inst_19909 = (state_19930[(7)]);
var inst_19910 = (state_19930[(8)]);
var inst_19909__$1 = (state_19930[(2)]);
var inst_19910__$1 = cljs.core.nth.call(null,inst_19909__$1,(0),null);
var inst_19911 = cljs.core.nth.call(null,inst_19909__$1,(1),null);
var inst_19912 = (inst_19910__$1 == null);
var state_19930__$1 = (function (){var statearr_19932 = state_19930;
(statearr_19932[(9)] = inst_19911);

(statearr_19932[(7)] = inst_19909__$1);

(statearr_19932[(8)] = inst_19910__$1);

return statearr_19932;
})();
if(cljs.core.truth_(inst_19912)){
var statearr_19933_19953 = state_19930__$1;
(statearr_19933_19953[(1)] = (8));

} else {
var statearr_19934_19954 = state_19930__$1;
(statearr_19934_19954[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19931 === (1))){
var inst_19899 = cljs.core.vec.call(null,chs);
var inst_19900 = inst_19899;
var state_19930__$1 = (function (){var statearr_19935 = state_19930;
(statearr_19935[(10)] = inst_19900);

return statearr_19935;
})();
var statearr_19936_19955 = state_19930__$1;
(statearr_19936_19955[(2)] = null);

(statearr_19936_19955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19931 === (4))){
var inst_19900 = (state_19930[(10)]);
var state_19930__$1 = state_19930;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19930__$1,(7),inst_19900);
} else {
if((state_val_19931 === (6))){
var inst_19926 = (state_19930[(2)]);
var state_19930__$1 = state_19930;
var statearr_19937_19956 = state_19930__$1;
(statearr_19937_19956[(2)] = inst_19926);

(statearr_19937_19956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19931 === (3))){
var inst_19928 = (state_19930[(2)]);
var state_19930__$1 = state_19930;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19930__$1,inst_19928);
} else {
if((state_val_19931 === (2))){
var inst_19900 = (state_19930[(10)]);
var inst_19902 = cljs.core.count.call(null,inst_19900);
var inst_19903 = (inst_19902 > (0));
var state_19930__$1 = state_19930;
if(cljs.core.truth_(inst_19903)){
var statearr_19939_19957 = state_19930__$1;
(statearr_19939_19957[(1)] = (4));

} else {
var statearr_19940_19958 = state_19930__$1;
(statearr_19940_19958[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19931 === (11))){
var inst_19900 = (state_19930[(10)]);
var inst_19919 = (state_19930[(2)]);
var tmp19938 = inst_19900;
var inst_19900__$1 = tmp19938;
var state_19930__$1 = (function (){var statearr_19941 = state_19930;
(statearr_19941[(11)] = inst_19919);

(statearr_19941[(10)] = inst_19900__$1);

return statearr_19941;
})();
var statearr_19942_19959 = state_19930__$1;
(statearr_19942_19959[(2)] = null);

(statearr_19942_19959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19931 === (9))){
var inst_19910 = (state_19930[(8)]);
var state_19930__$1 = state_19930;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19930__$1,(11),out,inst_19910);
} else {
if((state_val_19931 === (5))){
var inst_19924 = cljs.core.async.close_BANG_.call(null,out);
var state_19930__$1 = state_19930;
var statearr_19943_19960 = state_19930__$1;
(statearr_19943_19960[(2)] = inst_19924);

(statearr_19943_19960[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19931 === (10))){
var inst_19922 = (state_19930[(2)]);
var state_19930__$1 = state_19930;
var statearr_19944_19961 = state_19930__$1;
(statearr_19944_19961[(2)] = inst_19922);

(statearr_19944_19961[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19931 === (8))){
var inst_19911 = (state_19930[(9)]);
var inst_19909 = (state_19930[(7)]);
var inst_19910 = (state_19930[(8)]);
var inst_19900 = (state_19930[(10)]);
var inst_19914 = (function (){var cs = inst_19900;
var vec__19905 = inst_19909;
var v = inst_19910;
var c = inst_19911;
return ((function (cs,vec__19905,v,c,inst_19911,inst_19909,inst_19910,inst_19900,state_val_19931,c__16675__auto___19952,out){
return (function (p1__19896_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19896_SHARP_);
});
;})(cs,vec__19905,v,c,inst_19911,inst_19909,inst_19910,inst_19900,state_val_19931,c__16675__auto___19952,out))
})();
var inst_19915 = cljs.core.filterv.call(null,inst_19914,inst_19900);
var inst_19900__$1 = inst_19915;
var state_19930__$1 = (function (){var statearr_19945 = state_19930;
(statearr_19945[(10)] = inst_19900__$1);

return statearr_19945;
})();
var statearr_19946_19962 = state_19930__$1;
(statearr_19946_19962[(2)] = null);

(statearr_19946_19962[(1)] = (2));


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
});})(c__16675__auto___19952,out))
;
return ((function (switch__16508__auto__,c__16675__auto___19952,out){
return (function() {
var cljs$core$async$state_machine__16509__auto__ = null;
var cljs$core$async$state_machine__16509__auto____0 = (function (){
var statearr_19947 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19947[(0)] = cljs$core$async$state_machine__16509__auto__);

(statearr_19947[(1)] = (1));

return statearr_19947;
});
var cljs$core$async$state_machine__16509__auto____1 = (function (state_19930){
while(true){
var ret_value__16510__auto__ = (function (){try{while(true){
var result__16511__auto__ = switch__16508__auto__.call(null,state_19930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16511__auto__;
}
break;
}
}catch (e19948){if((e19948 instanceof Object)){
var ex__16512__auto__ = e19948;
var statearr_19949_19963 = state_19930;
(statearr_19949_19963[(5)] = ex__16512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19964 = state_19930;
state_19930 = G__19964;
continue;
} else {
return ret_value__16510__auto__;
}
break;
}
});
cljs$core$async$state_machine__16509__auto__ = function(state_19930){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16509__auto____1.call(this,state_19930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16509__auto____0;
cljs$core$async$state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16509__auto____1;
return cljs$core$async$state_machine__16509__auto__;
})()
;})(switch__16508__auto__,c__16675__auto___19952,out))
})();
var state__16677__auto__ = (function (){var statearr_19950 = f__16676__auto__.call(null);
(statearr_19950[(6)] = c__16675__auto___19952);

return statearr_19950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16677__auto__);
});})(c__16675__auto___19952,out))
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
var G__19966 = arguments.length;
switch (G__19966) {
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
var c__16675__auto___20011 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16675__auto___20011,out){
return (function (){
var f__16676__auto__ = (function (){var switch__16508__auto__ = ((function (c__16675__auto___20011,out){
return (function (state_19990){
var state_val_19991 = (state_19990[(1)]);
if((state_val_19991 === (7))){
var inst_19972 = (state_19990[(7)]);
var inst_19972__$1 = (state_19990[(2)]);
var inst_19973 = (inst_19972__$1 == null);
var inst_19974 = cljs.core.not.call(null,inst_19973);
var state_19990__$1 = (function (){var statearr_19992 = state_19990;
(statearr_19992[(7)] = inst_19972__$1);

return statearr_19992;
})();
if(inst_19974){
var statearr_19993_20012 = state_19990__$1;
(statearr_19993_20012[(1)] = (8));

} else {
var statearr_19994_20013 = state_19990__$1;
(statearr_19994_20013[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19991 === (1))){
var inst_19967 = (0);
var state_19990__$1 = (function (){var statearr_19995 = state_19990;
(statearr_19995[(8)] = inst_19967);

return statearr_19995;
})();
var statearr_19996_20014 = state_19990__$1;
(statearr_19996_20014[(2)] = null);

(statearr_19996_20014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19991 === (4))){
var state_19990__$1 = state_19990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19990__$1,(7),ch);
} else {
if((state_val_19991 === (6))){
var inst_19985 = (state_19990[(2)]);
var state_19990__$1 = state_19990;
var statearr_19997_20015 = state_19990__$1;
(statearr_19997_20015[(2)] = inst_19985);

(statearr_19997_20015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19991 === (3))){
var inst_19987 = (state_19990[(2)]);
var inst_19988 = cljs.core.async.close_BANG_.call(null,out);
var state_19990__$1 = (function (){var statearr_19998 = state_19990;
(statearr_19998[(9)] = inst_19987);

return statearr_19998;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19990__$1,inst_19988);
} else {
if((state_val_19991 === (2))){
var inst_19967 = (state_19990[(8)]);
var inst_19969 = (inst_19967 < n);
var state_19990__$1 = state_19990;
if(cljs.core.truth_(inst_19969)){
var statearr_19999_20016 = state_19990__$1;
(statearr_19999_20016[(1)] = (4));

} else {
var statearr_20000_20017 = state_19990__$1;
(statearr_20000_20017[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19991 === (11))){
var inst_19967 = (state_19990[(8)]);
var inst_19977 = (state_19990[(2)]);
var inst_19978 = (inst_19967 + (1));
var inst_19967__$1 = inst_19978;
var state_19990__$1 = (function (){var statearr_20001 = state_19990;
(statearr_20001[(8)] = inst_19967__$1);

(statearr_20001[(10)] = inst_19977);

return statearr_20001;
})();
var statearr_20002_20018 = state_19990__$1;
(statearr_20002_20018[(2)] = null);

(statearr_20002_20018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19991 === (9))){
var state_19990__$1 = state_19990;
var statearr_20003_20019 = state_19990__$1;
(statearr_20003_20019[(2)] = null);

(statearr_20003_20019[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19991 === (5))){
var state_19990__$1 = state_19990;
var statearr_20004_20020 = state_19990__$1;
(statearr_20004_20020[(2)] = null);

(statearr_20004_20020[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19991 === (10))){
var inst_19982 = (state_19990[(2)]);
var state_19990__$1 = state_19990;
var statearr_20005_20021 = state_19990__$1;
(statearr_20005_20021[(2)] = inst_19982);

(statearr_20005_20021[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19991 === (8))){
var inst_19972 = (state_19990[(7)]);
var state_19990__$1 = state_19990;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19990__$1,(11),out,inst_19972);
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
});})(c__16675__auto___20011,out))
;
return ((function (switch__16508__auto__,c__16675__auto___20011,out){
return (function() {
var cljs$core$async$state_machine__16509__auto__ = null;
var cljs$core$async$state_machine__16509__auto____0 = (function (){
var statearr_20006 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20006[(0)] = cljs$core$async$state_machine__16509__auto__);

(statearr_20006[(1)] = (1));

return statearr_20006;
});
var cljs$core$async$state_machine__16509__auto____1 = (function (state_19990){
while(true){
var ret_value__16510__auto__ = (function (){try{while(true){
var result__16511__auto__ = switch__16508__auto__.call(null,state_19990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16511__auto__;
}
break;
}
}catch (e20007){if((e20007 instanceof Object)){
var ex__16512__auto__ = e20007;
var statearr_20008_20022 = state_19990;
(statearr_20008_20022[(5)] = ex__16512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20023 = state_19990;
state_19990 = G__20023;
continue;
} else {
return ret_value__16510__auto__;
}
break;
}
});
cljs$core$async$state_machine__16509__auto__ = function(state_19990){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16509__auto____1.call(this,state_19990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16509__auto____0;
cljs$core$async$state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16509__auto____1;
return cljs$core$async$state_machine__16509__auto__;
})()
;})(switch__16508__auto__,c__16675__auto___20011,out))
})();
var state__16677__auto__ = (function (){var statearr_20009 = f__16676__auto__.call(null);
(statearr_20009[(6)] = c__16675__auto___20011);

return statearr_20009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16677__auto__);
});})(c__16675__auto___20011,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20025 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20025 = (function (f,ch,meta20026){
this.f = f;
this.ch = ch;
this.meta20026 = meta20026;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20027,meta20026__$1){
var self__ = this;
var _20027__$1 = this;
return (new cljs.core.async.t_cljs$core$async20025(self__.f,self__.ch,meta20026__$1));
});

cljs.core.async.t_cljs$core$async20025.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20027){
var self__ = this;
var _20027__$1 = this;
return self__.meta20026;
});

cljs.core.async.t_cljs$core$async20025.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20025.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20025.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20025.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20025.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20028 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20028 = (function (f,ch,meta20026,_,fn1,meta20029){
this.f = f;
this.ch = ch;
this.meta20026 = meta20026;
this._ = _;
this.fn1 = fn1;
this.meta20029 = meta20029;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_20030,meta20029__$1){
var self__ = this;
var _20030__$1 = this;
return (new cljs.core.async.t_cljs$core$async20028(self__.f,self__.ch,self__.meta20026,self__._,self__.fn1,meta20029__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async20028.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_20030){
var self__ = this;
var _20030__$1 = this;
return self__.meta20029;
});})(___$1))
;

cljs.core.async.t_cljs$core$async20028.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20028.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20028.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async20028.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__20024_SHARP_){
return f1.call(null,(((p1__20024_SHARP_ == null))?null:self__.f.call(null,p1__20024_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async20028.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20026","meta20026",1929004183,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async20025","cljs.core.async/t_cljs$core$async20025",-1892310915,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta20029","meta20029",875679944,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20028.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20028.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20028";

cljs.core.async.t_cljs$core$async20028.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async20028");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20028.
 */
cljs.core.async.__GT_t_cljs$core$async20028 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20028(f__$1,ch__$1,meta20026__$1,___$2,fn1__$1,meta20029){
return (new cljs.core.async.t_cljs$core$async20028(f__$1,ch__$1,meta20026__$1,___$2,fn1__$1,meta20029));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async20028(self__.f,self__.ch,self__.meta20026,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async20025.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20025.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async20025.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20026","meta20026",1929004183,null)], null);
});

cljs.core.async.t_cljs$core$async20025.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20025.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20025";

cljs.core.async.t_cljs$core$async20025.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async20025");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20025.
 */
cljs.core.async.__GT_t_cljs$core$async20025 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20025(f__$1,ch__$1,meta20026){
return (new cljs.core.async.t_cljs$core$async20025(f__$1,ch__$1,meta20026));
});

}

return (new cljs.core.async.t_cljs$core$async20025(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20031 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20031 = (function (f,ch,meta20032){
this.f = f;
this.ch = ch;
this.meta20032 = meta20032;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20031.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20033,meta20032__$1){
var self__ = this;
var _20033__$1 = this;
return (new cljs.core.async.t_cljs$core$async20031(self__.f,self__.ch,meta20032__$1));
});

cljs.core.async.t_cljs$core$async20031.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20033){
var self__ = this;
var _20033__$1 = this;
return self__.meta20032;
});

cljs.core.async.t_cljs$core$async20031.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20031.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20031.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20031.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20031.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20031.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async20031.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20032","meta20032",-215092157,null)], null);
});

cljs.core.async.t_cljs$core$async20031.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20031.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20031";

cljs.core.async.t_cljs$core$async20031.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async20031");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20031.
 */
cljs.core.async.__GT_t_cljs$core$async20031 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async20031(f__$1,ch__$1,meta20032){
return (new cljs.core.async.t_cljs$core$async20031(f__$1,ch__$1,meta20032));
});

}

return (new cljs.core.async.t_cljs$core$async20031(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20034 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20034 = (function (p,ch,meta20035){
this.p = p;
this.ch = ch;
this.meta20035 = meta20035;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20036,meta20035__$1){
var self__ = this;
var _20036__$1 = this;
return (new cljs.core.async.t_cljs$core$async20034(self__.p,self__.ch,meta20035__$1));
});

cljs.core.async.t_cljs$core$async20034.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20036){
var self__ = this;
var _20036__$1 = this;
return self__.meta20035;
});

cljs.core.async.t_cljs$core$async20034.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20034.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20034.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20034.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20034.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20034.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20034.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async20034.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20035","meta20035",-218011781,null)], null);
});

cljs.core.async.t_cljs$core$async20034.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20034.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20034";

cljs.core.async.t_cljs$core$async20034.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async20034");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20034.
 */
cljs.core.async.__GT_t_cljs$core$async20034 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async20034(p__$1,ch__$1,meta20035){
return (new cljs.core.async.t_cljs$core$async20034(p__$1,ch__$1,meta20035));
});

}

return (new cljs.core.async.t_cljs$core$async20034(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__20038 = arguments.length;
switch (G__20038) {
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
var c__16675__auto___20078 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16675__auto___20078,out){
return (function (){
var f__16676__auto__ = (function (){var switch__16508__auto__ = ((function (c__16675__auto___20078,out){
return (function (state_20059){
var state_val_20060 = (state_20059[(1)]);
if((state_val_20060 === (7))){
var inst_20055 = (state_20059[(2)]);
var state_20059__$1 = state_20059;
var statearr_20061_20079 = state_20059__$1;
(statearr_20061_20079[(2)] = inst_20055);

(statearr_20061_20079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20060 === (1))){
var state_20059__$1 = state_20059;
var statearr_20062_20080 = state_20059__$1;
(statearr_20062_20080[(2)] = null);

(statearr_20062_20080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20060 === (4))){
var inst_20041 = (state_20059[(7)]);
var inst_20041__$1 = (state_20059[(2)]);
var inst_20042 = (inst_20041__$1 == null);
var state_20059__$1 = (function (){var statearr_20063 = state_20059;
(statearr_20063[(7)] = inst_20041__$1);

return statearr_20063;
})();
if(cljs.core.truth_(inst_20042)){
var statearr_20064_20081 = state_20059__$1;
(statearr_20064_20081[(1)] = (5));

} else {
var statearr_20065_20082 = state_20059__$1;
(statearr_20065_20082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20060 === (6))){
var inst_20041 = (state_20059[(7)]);
var inst_20046 = p.call(null,inst_20041);
var state_20059__$1 = state_20059;
if(cljs.core.truth_(inst_20046)){
var statearr_20066_20083 = state_20059__$1;
(statearr_20066_20083[(1)] = (8));

} else {
var statearr_20067_20084 = state_20059__$1;
(statearr_20067_20084[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20060 === (3))){
var inst_20057 = (state_20059[(2)]);
var state_20059__$1 = state_20059;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20059__$1,inst_20057);
} else {
if((state_val_20060 === (2))){
var state_20059__$1 = state_20059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20059__$1,(4),ch);
} else {
if((state_val_20060 === (11))){
var inst_20049 = (state_20059[(2)]);
var state_20059__$1 = state_20059;
var statearr_20068_20085 = state_20059__$1;
(statearr_20068_20085[(2)] = inst_20049);

(statearr_20068_20085[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20060 === (9))){
var state_20059__$1 = state_20059;
var statearr_20069_20086 = state_20059__$1;
(statearr_20069_20086[(2)] = null);

(statearr_20069_20086[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20060 === (5))){
var inst_20044 = cljs.core.async.close_BANG_.call(null,out);
var state_20059__$1 = state_20059;
var statearr_20070_20087 = state_20059__$1;
(statearr_20070_20087[(2)] = inst_20044);

(statearr_20070_20087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20060 === (10))){
var inst_20052 = (state_20059[(2)]);
var state_20059__$1 = (function (){var statearr_20071 = state_20059;
(statearr_20071[(8)] = inst_20052);

return statearr_20071;
})();
var statearr_20072_20088 = state_20059__$1;
(statearr_20072_20088[(2)] = null);

(statearr_20072_20088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20060 === (8))){
var inst_20041 = (state_20059[(7)]);
var state_20059__$1 = state_20059;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20059__$1,(11),out,inst_20041);
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
});})(c__16675__auto___20078,out))
;
return ((function (switch__16508__auto__,c__16675__auto___20078,out){
return (function() {
var cljs$core$async$state_machine__16509__auto__ = null;
var cljs$core$async$state_machine__16509__auto____0 = (function (){
var statearr_20073 = [null,null,null,null,null,null,null,null,null];
(statearr_20073[(0)] = cljs$core$async$state_machine__16509__auto__);

(statearr_20073[(1)] = (1));

return statearr_20073;
});
var cljs$core$async$state_machine__16509__auto____1 = (function (state_20059){
while(true){
var ret_value__16510__auto__ = (function (){try{while(true){
var result__16511__auto__ = switch__16508__auto__.call(null,state_20059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16511__auto__;
}
break;
}
}catch (e20074){if((e20074 instanceof Object)){
var ex__16512__auto__ = e20074;
var statearr_20075_20089 = state_20059;
(statearr_20075_20089[(5)] = ex__16512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20074;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20090 = state_20059;
state_20059 = G__20090;
continue;
} else {
return ret_value__16510__auto__;
}
break;
}
});
cljs$core$async$state_machine__16509__auto__ = function(state_20059){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16509__auto____1.call(this,state_20059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16509__auto____0;
cljs$core$async$state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16509__auto____1;
return cljs$core$async$state_machine__16509__auto__;
})()
;})(switch__16508__auto__,c__16675__auto___20078,out))
})();
var state__16677__auto__ = (function (){var statearr_20076 = f__16676__auto__.call(null);
(statearr_20076[(6)] = c__16675__auto___20078);

return statearr_20076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16677__auto__);
});})(c__16675__auto___20078,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__20092 = arguments.length;
switch (G__20092) {
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
var c__16675__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16675__auto__){
return (function (){
var f__16676__auto__ = (function (){var switch__16508__auto__ = ((function (c__16675__auto__){
return (function (state_20155){
var state_val_20156 = (state_20155[(1)]);
if((state_val_20156 === (7))){
var inst_20151 = (state_20155[(2)]);
var state_20155__$1 = state_20155;
var statearr_20157_20195 = state_20155__$1;
(statearr_20157_20195[(2)] = inst_20151);

(statearr_20157_20195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20156 === (20))){
var inst_20121 = (state_20155[(7)]);
var inst_20132 = (state_20155[(2)]);
var inst_20133 = cljs.core.next.call(null,inst_20121);
var inst_20107 = inst_20133;
var inst_20108 = null;
var inst_20109 = (0);
var inst_20110 = (0);
var state_20155__$1 = (function (){var statearr_20158 = state_20155;
(statearr_20158[(8)] = inst_20110);

(statearr_20158[(9)] = inst_20108);

(statearr_20158[(10)] = inst_20107);

(statearr_20158[(11)] = inst_20132);

(statearr_20158[(12)] = inst_20109);

return statearr_20158;
})();
var statearr_20159_20196 = state_20155__$1;
(statearr_20159_20196[(2)] = null);

(statearr_20159_20196[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20156 === (1))){
var state_20155__$1 = state_20155;
var statearr_20160_20197 = state_20155__$1;
(statearr_20160_20197[(2)] = null);

(statearr_20160_20197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20156 === (4))){
var inst_20096 = (state_20155[(13)]);
var inst_20096__$1 = (state_20155[(2)]);
var inst_20097 = (inst_20096__$1 == null);
var state_20155__$1 = (function (){var statearr_20161 = state_20155;
(statearr_20161[(13)] = inst_20096__$1);

return statearr_20161;
})();
if(cljs.core.truth_(inst_20097)){
var statearr_20162_20198 = state_20155__$1;
(statearr_20162_20198[(1)] = (5));

} else {
var statearr_20163_20199 = state_20155__$1;
(statearr_20163_20199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20156 === (15))){
var state_20155__$1 = state_20155;
var statearr_20167_20200 = state_20155__$1;
(statearr_20167_20200[(2)] = null);

(statearr_20167_20200[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20156 === (21))){
var state_20155__$1 = state_20155;
var statearr_20168_20201 = state_20155__$1;
(statearr_20168_20201[(2)] = null);

(statearr_20168_20201[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20156 === (13))){
var inst_20110 = (state_20155[(8)]);
var inst_20108 = (state_20155[(9)]);
var inst_20107 = (state_20155[(10)]);
var inst_20109 = (state_20155[(12)]);
var inst_20117 = (state_20155[(2)]);
var inst_20118 = (inst_20110 + (1));
var tmp20164 = inst_20108;
var tmp20165 = inst_20107;
var tmp20166 = inst_20109;
var inst_20107__$1 = tmp20165;
var inst_20108__$1 = tmp20164;
var inst_20109__$1 = tmp20166;
var inst_20110__$1 = inst_20118;
var state_20155__$1 = (function (){var statearr_20169 = state_20155;
(statearr_20169[(8)] = inst_20110__$1);

(statearr_20169[(9)] = inst_20108__$1);

(statearr_20169[(10)] = inst_20107__$1);

(statearr_20169[(12)] = inst_20109__$1);

(statearr_20169[(14)] = inst_20117);

return statearr_20169;
})();
var statearr_20170_20202 = state_20155__$1;
(statearr_20170_20202[(2)] = null);

(statearr_20170_20202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20156 === (22))){
var state_20155__$1 = state_20155;
var statearr_20171_20203 = state_20155__$1;
(statearr_20171_20203[(2)] = null);

(statearr_20171_20203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20156 === (6))){
var inst_20096 = (state_20155[(13)]);
var inst_20105 = f.call(null,inst_20096);
var inst_20106 = cljs.core.seq.call(null,inst_20105);
var inst_20107 = inst_20106;
var inst_20108 = null;
var inst_20109 = (0);
var inst_20110 = (0);
var state_20155__$1 = (function (){var statearr_20172 = state_20155;
(statearr_20172[(8)] = inst_20110);

(statearr_20172[(9)] = inst_20108);

(statearr_20172[(10)] = inst_20107);

(statearr_20172[(12)] = inst_20109);

return statearr_20172;
})();
var statearr_20173_20204 = state_20155__$1;
(statearr_20173_20204[(2)] = null);

(statearr_20173_20204[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20156 === (17))){
var inst_20121 = (state_20155[(7)]);
var inst_20125 = cljs.core.chunk_first.call(null,inst_20121);
var inst_20126 = cljs.core.chunk_rest.call(null,inst_20121);
var inst_20127 = cljs.core.count.call(null,inst_20125);
var inst_20107 = inst_20126;
var inst_20108 = inst_20125;
var inst_20109 = inst_20127;
var inst_20110 = (0);
var state_20155__$1 = (function (){var statearr_20174 = state_20155;
(statearr_20174[(8)] = inst_20110);

(statearr_20174[(9)] = inst_20108);

(statearr_20174[(10)] = inst_20107);

(statearr_20174[(12)] = inst_20109);

return statearr_20174;
})();
var statearr_20175_20205 = state_20155__$1;
(statearr_20175_20205[(2)] = null);

(statearr_20175_20205[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20156 === (3))){
var inst_20153 = (state_20155[(2)]);
var state_20155__$1 = state_20155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20155__$1,inst_20153);
} else {
if((state_val_20156 === (12))){
var inst_20141 = (state_20155[(2)]);
var state_20155__$1 = state_20155;
var statearr_20176_20206 = state_20155__$1;
(statearr_20176_20206[(2)] = inst_20141);

(statearr_20176_20206[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20156 === (2))){
var state_20155__$1 = state_20155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20155__$1,(4),in$);
} else {
if((state_val_20156 === (23))){
var inst_20149 = (state_20155[(2)]);
var state_20155__$1 = state_20155;
var statearr_20177_20207 = state_20155__$1;
(statearr_20177_20207[(2)] = inst_20149);

(statearr_20177_20207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20156 === (19))){
var inst_20136 = (state_20155[(2)]);
var state_20155__$1 = state_20155;
var statearr_20178_20208 = state_20155__$1;
(statearr_20178_20208[(2)] = inst_20136);

(statearr_20178_20208[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20156 === (11))){
var inst_20107 = (state_20155[(10)]);
var inst_20121 = (state_20155[(7)]);
var inst_20121__$1 = cljs.core.seq.call(null,inst_20107);
var state_20155__$1 = (function (){var statearr_20179 = state_20155;
(statearr_20179[(7)] = inst_20121__$1);

return statearr_20179;
})();
if(inst_20121__$1){
var statearr_20180_20209 = state_20155__$1;
(statearr_20180_20209[(1)] = (14));

} else {
var statearr_20181_20210 = state_20155__$1;
(statearr_20181_20210[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20156 === (9))){
var inst_20143 = (state_20155[(2)]);
var inst_20144 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_20155__$1 = (function (){var statearr_20182 = state_20155;
(statearr_20182[(15)] = inst_20143);

return statearr_20182;
})();
if(cljs.core.truth_(inst_20144)){
var statearr_20183_20211 = state_20155__$1;
(statearr_20183_20211[(1)] = (21));

} else {
var statearr_20184_20212 = state_20155__$1;
(statearr_20184_20212[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20156 === (5))){
var inst_20099 = cljs.core.async.close_BANG_.call(null,out);
var state_20155__$1 = state_20155;
var statearr_20185_20213 = state_20155__$1;
(statearr_20185_20213[(2)] = inst_20099);

(statearr_20185_20213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20156 === (14))){
var inst_20121 = (state_20155[(7)]);
var inst_20123 = cljs.core.chunked_seq_QMARK_.call(null,inst_20121);
var state_20155__$1 = state_20155;
if(inst_20123){
var statearr_20186_20214 = state_20155__$1;
(statearr_20186_20214[(1)] = (17));

} else {
var statearr_20187_20215 = state_20155__$1;
(statearr_20187_20215[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20156 === (16))){
var inst_20139 = (state_20155[(2)]);
var state_20155__$1 = state_20155;
var statearr_20188_20216 = state_20155__$1;
(statearr_20188_20216[(2)] = inst_20139);

(statearr_20188_20216[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20156 === (10))){
var inst_20110 = (state_20155[(8)]);
var inst_20108 = (state_20155[(9)]);
var inst_20115 = cljs.core._nth.call(null,inst_20108,inst_20110);
var state_20155__$1 = state_20155;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20155__$1,(13),out,inst_20115);
} else {
if((state_val_20156 === (18))){
var inst_20121 = (state_20155[(7)]);
var inst_20130 = cljs.core.first.call(null,inst_20121);
var state_20155__$1 = state_20155;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20155__$1,(20),out,inst_20130);
} else {
if((state_val_20156 === (8))){
var inst_20110 = (state_20155[(8)]);
var inst_20109 = (state_20155[(12)]);
var inst_20112 = (inst_20110 < inst_20109);
var inst_20113 = inst_20112;
var state_20155__$1 = state_20155;
if(cljs.core.truth_(inst_20113)){
var statearr_20189_20217 = state_20155__$1;
(statearr_20189_20217[(1)] = (10));

} else {
var statearr_20190_20218 = state_20155__$1;
(statearr_20190_20218[(1)] = (11));

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
});})(c__16675__auto__))
;
return ((function (switch__16508__auto__,c__16675__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__16509__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16509__auto____0 = (function (){
var statearr_20191 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20191[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16509__auto__);

(statearr_20191[(1)] = (1));

return statearr_20191;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16509__auto____1 = (function (state_20155){
while(true){
var ret_value__16510__auto__ = (function (){try{while(true){
var result__16511__auto__ = switch__16508__auto__.call(null,state_20155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16511__auto__;
}
break;
}
}catch (e20192){if((e20192 instanceof Object)){
var ex__16512__auto__ = e20192;
var statearr_20193_20219 = state_20155;
(statearr_20193_20219[(5)] = ex__16512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20220 = state_20155;
state_20155 = G__20220;
continue;
} else {
return ret_value__16510__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16509__auto__ = function(state_20155){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16509__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16509__auto____1.call(this,state_20155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16509__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16509__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16509__auto__;
})()
;})(switch__16508__auto__,c__16675__auto__))
})();
var state__16677__auto__ = (function (){var statearr_20194 = f__16676__auto__.call(null);
(statearr_20194[(6)] = c__16675__auto__);

return statearr_20194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16677__auto__);
});})(c__16675__auto__))
);

return c__16675__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__20222 = arguments.length;
switch (G__20222) {
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
var G__20225 = arguments.length;
switch (G__20225) {
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
var G__20228 = arguments.length;
switch (G__20228) {
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
var c__16675__auto___20275 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16675__auto___20275,out){
return (function (){
var f__16676__auto__ = (function (){var switch__16508__auto__ = ((function (c__16675__auto___20275,out){
return (function (state_20252){
var state_val_20253 = (state_20252[(1)]);
if((state_val_20253 === (7))){
var inst_20247 = (state_20252[(2)]);
var state_20252__$1 = state_20252;
var statearr_20254_20276 = state_20252__$1;
(statearr_20254_20276[(2)] = inst_20247);

(statearr_20254_20276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20253 === (1))){
var inst_20229 = null;
var state_20252__$1 = (function (){var statearr_20255 = state_20252;
(statearr_20255[(7)] = inst_20229);

return statearr_20255;
})();
var statearr_20256_20277 = state_20252__$1;
(statearr_20256_20277[(2)] = null);

(statearr_20256_20277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20253 === (4))){
var inst_20232 = (state_20252[(8)]);
var inst_20232__$1 = (state_20252[(2)]);
var inst_20233 = (inst_20232__$1 == null);
var inst_20234 = cljs.core.not.call(null,inst_20233);
var state_20252__$1 = (function (){var statearr_20257 = state_20252;
(statearr_20257[(8)] = inst_20232__$1);

return statearr_20257;
})();
if(inst_20234){
var statearr_20258_20278 = state_20252__$1;
(statearr_20258_20278[(1)] = (5));

} else {
var statearr_20259_20279 = state_20252__$1;
(statearr_20259_20279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20253 === (6))){
var state_20252__$1 = state_20252;
var statearr_20260_20280 = state_20252__$1;
(statearr_20260_20280[(2)] = null);

(statearr_20260_20280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20253 === (3))){
var inst_20249 = (state_20252[(2)]);
var inst_20250 = cljs.core.async.close_BANG_.call(null,out);
var state_20252__$1 = (function (){var statearr_20261 = state_20252;
(statearr_20261[(9)] = inst_20249);

return statearr_20261;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20252__$1,inst_20250);
} else {
if((state_val_20253 === (2))){
var state_20252__$1 = state_20252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20252__$1,(4),ch);
} else {
if((state_val_20253 === (11))){
var inst_20232 = (state_20252[(8)]);
var inst_20241 = (state_20252[(2)]);
var inst_20229 = inst_20232;
var state_20252__$1 = (function (){var statearr_20262 = state_20252;
(statearr_20262[(10)] = inst_20241);

(statearr_20262[(7)] = inst_20229);

return statearr_20262;
})();
var statearr_20263_20281 = state_20252__$1;
(statearr_20263_20281[(2)] = null);

(statearr_20263_20281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20253 === (9))){
var inst_20232 = (state_20252[(8)]);
var state_20252__$1 = state_20252;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20252__$1,(11),out,inst_20232);
} else {
if((state_val_20253 === (5))){
var inst_20232 = (state_20252[(8)]);
var inst_20229 = (state_20252[(7)]);
var inst_20236 = cljs.core._EQ_.call(null,inst_20232,inst_20229);
var state_20252__$1 = state_20252;
if(inst_20236){
var statearr_20265_20282 = state_20252__$1;
(statearr_20265_20282[(1)] = (8));

} else {
var statearr_20266_20283 = state_20252__$1;
(statearr_20266_20283[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20253 === (10))){
var inst_20244 = (state_20252[(2)]);
var state_20252__$1 = state_20252;
var statearr_20267_20284 = state_20252__$1;
(statearr_20267_20284[(2)] = inst_20244);

(statearr_20267_20284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20253 === (8))){
var inst_20229 = (state_20252[(7)]);
var tmp20264 = inst_20229;
var inst_20229__$1 = tmp20264;
var state_20252__$1 = (function (){var statearr_20268 = state_20252;
(statearr_20268[(7)] = inst_20229__$1);

return statearr_20268;
})();
var statearr_20269_20285 = state_20252__$1;
(statearr_20269_20285[(2)] = null);

(statearr_20269_20285[(1)] = (2));


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
});})(c__16675__auto___20275,out))
;
return ((function (switch__16508__auto__,c__16675__auto___20275,out){
return (function() {
var cljs$core$async$state_machine__16509__auto__ = null;
var cljs$core$async$state_machine__16509__auto____0 = (function (){
var statearr_20270 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20270[(0)] = cljs$core$async$state_machine__16509__auto__);

(statearr_20270[(1)] = (1));

return statearr_20270;
});
var cljs$core$async$state_machine__16509__auto____1 = (function (state_20252){
while(true){
var ret_value__16510__auto__ = (function (){try{while(true){
var result__16511__auto__ = switch__16508__auto__.call(null,state_20252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16511__auto__;
}
break;
}
}catch (e20271){if((e20271 instanceof Object)){
var ex__16512__auto__ = e20271;
var statearr_20272_20286 = state_20252;
(statearr_20272_20286[(5)] = ex__16512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20287 = state_20252;
state_20252 = G__20287;
continue;
} else {
return ret_value__16510__auto__;
}
break;
}
});
cljs$core$async$state_machine__16509__auto__ = function(state_20252){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16509__auto____1.call(this,state_20252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16509__auto____0;
cljs$core$async$state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16509__auto____1;
return cljs$core$async$state_machine__16509__auto__;
})()
;})(switch__16508__auto__,c__16675__auto___20275,out))
})();
var state__16677__auto__ = (function (){var statearr_20273 = f__16676__auto__.call(null);
(statearr_20273[(6)] = c__16675__auto___20275);

return statearr_20273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16677__auto__);
});})(c__16675__auto___20275,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__20289 = arguments.length;
switch (G__20289) {
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
var c__16675__auto___20355 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16675__auto___20355,out){
return (function (){
var f__16676__auto__ = (function (){var switch__16508__auto__ = ((function (c__16675__auto___20355,out){
return (function (state_20327){
var state_val_20328 = (state_20327[(1)]);
if((state_val_20328 === (7))){
var inst_20323 = (state_20327[(2)]);
var state_20327__$1 = state_20327;
var statearr_20329_20356 = state_20327__$1;
(statearr_20329_20356[(2)] = inst_20323);

(statearr_20329_20356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20328 === (1))){
var inst_20290 = (new Array(n));
var inst_20291 = inst_20290;
var inst_20292 = (0);
var state_20327__$1 = (function (){var statearr_20330 = state_20327;
(statearr_20330[(7)] = inst_20292);

(statearr_20330[(8)] = inst_20291);

return statearr_20330;
})();
var statearr_20331_20357 = state_20327__$1;
(statearr_20331_20357[(2)] = null);

(statearr_20331_20357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20328 === (4))){
var inst_20295 = (state_20327[(9)]);
var inst_20295__$1 = (state_20327[(2)]);
var inst_20296 = (inst_20295__$1 == null);
var inst_20297 = cljs.core.not.call(null,inst_20296);
var state_20327__$1 = (function (){var statearr_20332 = state_20327;
(statearr_20332[(9)] = inst_20295__$1);

return statearr_20332;
})();
if(inst_20297){
var statearr_20333_20358 = state_20327__$1;
(statearr_20333_20358[(1)] = (5));

} else {
var statearr_20334_20359 = state_20327__$1;
(statearr_20334_20359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20328 === (15))){
var inst_20317 = (state_20327[(2)]);
var state_20327__$1 = state_20327;
var statearr_20335_20360 = state_20327__$1;
(statearr_20335_20360[(2)] = inst_20317);

(statearr_20335_20360[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20328 === (13))){
var state_20327__$1 = state_20327;
var statearr_20336_20361 = state_20327__$1;
(statearr_20336_20361[(2)] = null);

(statearr_20336_20361[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20328 === (6))){
var inst_20292 = (state_20327[(7)]);
var inst_20313 = (inst_20292 > (0));
var state_20327__$1 = state_20327;
if(cljs.core.truth_(inst_20313)){
var statearr_20337_20362 = state_20327__$1;
(statearr_20337_20362[(1)] = (12));

} else {
var statearr_20338_20363 = state_20327__$1;
(statearr_20338_20363[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20328 === (3))){
var inst_20325 = (state_20327[(2)]);
var state_20327__$1 = state_20327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20327__$1,inst_20325);
} else {
if((state_val_20328 === (12))){
var inst_20291 = (state_20327[(8)]);
var inst_20315 = cljs.core.vec.call(null,inst_20291);
var state_20327__$1 = state_20327;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20327__$1,(15),out,inst_20315);
} else {
if((state_val_20328 === (2))){
var state_20327__$1 = state_20327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20327__$1,(4),ch);
} else {
if((state_val_20328 === (11))){
var inst_20307 = (state_20327[(2)]);
var inst_20308 = (new Array(n));
var inst_20291 = inst_20308;
var inst_20292 = (0);
var state_20327__$1 = (function (){var statearr_20339 = state_20327;
(statearr_20339[(7)] = inst_20292);

(statearr_20339[(8)] = inst_20291);

(statearr_20339[(10)] = inst_20307);

return statearr_20339;
})();
var statearr_20340_20364 = state_20327__$1;
(statearr_20340_20364[(2)] = null);

(statearr_20340_20364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20328 === (9))){
var inst_20291 = (state_20327[(8)]);
var inst_20305 = cljs.core.vec.call(null,inst_20291);
var state_20327__$1 = state_20327;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20327__$1,(11),out,inst_20305);
} else {
if((state_val_20328 === (5))){
var inst_20295 = (state_20327[(9)]);
var inst_20292 = (state_20327[(7)]);
var inst_20291 = (state_20327[(8)]);
var inst_20300 = (state_20327[(11)]);
var inst_20299 = (inst_20291[inst_20292] = inst_20295);
var inst_20300__$1 = (inst_20292 + (1));
var inst_20301 = (inst_20300__$1 < n);
var state_20327__$1 = (function (){var statearr_20341 = state_20327;
(statearr_20341[(12)] = inst_20299);

(statearr_20341[(11)] = inst_20300__$1);

return statearr_20341;
})();
if(cljs.core.truth_(inst_20301)){
var statearr_20342_20365 = state_20327__$1;
(statearr_20342_20365[(1)] = (8));

} else {
var statearr_20343_20366 = state_20327__$1;
(statearr_20343_20366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20328 === (14))){
var inst_20320 = (state_20327[(2)]);
var inst_20321 = cljs.core.async.close_BANG_.call(null,out);
var state_20327__$1 = (function (){var statearr_20345 = state_20327;
(statearr_20345[(13)] = inst_20320);

return statearr_20345;
})();
var statearr_20346_20367 = state_20327__$1;
(statearr_20346_20367[(2)] = inst_20321);

(statearr_20346_20367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20328 === (10))){
var inst_20311 = (state_20327[(2)]);
var state_20327__$1 = state_20327;
var statearr_20347_20368 = state_20327__$1;
(statearr_20347_20368[(2)] = inst_20311);

(statearr_20347_20368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20328 === (8))){
var inst_20291 = (state_20327[(8)]);
var inst_20300 = (state_20327[(11)]);
var tmp20344 = inst_20291;
var inst_20291__$1 = tmp20344;
var inst_20292 = inst_20300;
var state_20327__$1 = (function (){var statearr_20348 = state_20327;
(statearr_20348[(7)] = inst_20292);

(statearr_20348[(8)] = inst_20291__$1);

return statearr_20348;
})();
var statearr_20349_20369 = state_20327__$1;
(statearr_20349_20369[(2)] = null);

(statearr_20349_20369[(1)] = (2));


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
});})(c__16675__auto___20355,out))
;
return ((function (switch__16508__auto__,c__16675__auto___20355,out){
return (function() {
var cljs$core$async$state_machine__16509__auto__ = null;
var cljs$core$async$state_machine__16509__auto____0 = (function (){
var statearr_20350 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20350[(0)] = cljs$core$async$state_machine__16509__auto__);

(statearr_20350[(1)] = (1));

return statearr_20350;
});
var cljs$core$async$state_machine__16509__auto____1 = (function (state_20327){
while(true){
var ret_value__16510__auto__ = (function (){try{while(true){
var result__16511__auto__ = switch__16508__auto__.call(null,state_20327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16511__auto__;
}
break;
}
}catch (e20351){if((e20351 instanceof Object)){
var ex__16512__auto__ = e20351;
var statearr_20352_20370 = state_20327;
(statearr_20352_20370[(5)] = ex__16512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20371 = state_20327;
state_20327 = G__20371;
continue;
} else {
return ret_value__16510__auto__;
}
break;
}
});
cljs$core$async$state_machine__16509__auto__ = function(state_20327){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16509__auto____1.call(this,state_20327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16509__auto____0;
cljs$core$async$state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16509__auto____1;
return cljs$core$async$state_machine__16509__auto__;
})()
;})(switch__16508__auto__,c__16675__auto___20355,out))
})();
var state__16677__auto__ = (function (){var statearr_20353 = f__16676__auto__.call(null);
(statearr_20353[(6)] = c__16675__auto___20355);

return statearr_20353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16677__auto__);
});})(c__16675__auto___20355,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__20373 = arguments.length;
switch (G__20373) {
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
var c__16675__auto___20443 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16675__auto___20443,out){
return (function (){
var f__16676__auto__ = (function (){var switch__16508__auto__ = ((function (c__16675__auto___20443,out){
return (function (state_20415){
var state_val_20416 = (state_20415[(1)]);
if((state_val_20416 === (7))){
var inst_20411 = (state_20415[(2)]);
var state_20415__$1 = state_20415;
var statearr_20417_20444 = state_20415__$1;
(statearr_20417_20444[(2)] = inst_20411);

(statearr_20417_20444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20416 === (1))){
var inst_20374 = [];
var inst_20375 = inst_20374;
var inst_20376 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20415__$1 = (function (){var statearr_20418 = state_20415;
(statearr_20418[(7)] = inst_20376);

(statearr_20418[(8)] = inst_20375);

return statearr_20418;
})();
var statearr_20419_20445 = state_20415__$1;
(statearr_20419_20445[(2)] = null);

(statearr_20419_20445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20416 === (4))){
var inst_20379 = (state_20415[(9)]);
var inst_20379__$1 = (state_20415[(2)]);
var inst_20380 = (inst_20379__$1 == null);
var inst_20381 = cljs.core.not.call(null,inst_20380);
var state_20415__$1 = (function (){var statearr_20420 = state_20415;
(statearr_20420[(9)] = inst_20379__$1);

return statearr_20420;
})();
if(inst_20381){
var statearr_20421_20446 = state_20415__$1;
(statearr_20421_20446[(1)] = (5));

} else {
var statearr_20422_20447 = state_20415__$1;
(statearr_20422_20447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20416 === (15))){
var inst_20405 = (state_20415[(2)]);
var state_20415__$1 = state_20415;
var statearr_20423_20448 = state_20415__$1;
(statearr_20423_20448[(2)] = inst_20405);

(statearr_20423_20448[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20416 === (13))){
var state_20415__$1 = state_20415;
var statearr_20424_20449 = state_20415__$1;
(statearr_20424_20449[(2)] = null);

(statearr_20424_20449[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20416 === (6))){
var inst_20375 = (state_20415[(8)]);
var inst_20400 = inst_20375.length;
var inst_20401 = (inst_20400 > (0));
var state_20415__$1 = state_20415;
if(cljs.core.truth_(inst_20401)){
var statearr_20425_20450 = state_20415__$1;
(statearr_20425_20450[(1)] = (12));

} else {
var statearr_20426_20451 = state_20415__$1;
(statearr_20426_20451[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20416 === (3))){
var inst_20413 = (state_20415[(2)]);
var state_20415__$1 = state_20415;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20415__$1,inst_20413);
} else {
if((state_val_20416 === (12))){
var inst_20375 = (state_20415[(8)]);
var inst_20403 = cljs.core.vec.call(null,inst_20375);
var state_20415__$1 = state_20415;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20415__$1,(15),out,inst_20403);
} else {
if((state_val_20416 === (2))){
var state_20415__$1 = state_20415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20415__$1,(4),ch);
} else {
if((state_val_20416 === (11))){
var inst_20379 = (state_20415[(9)]);
var inst_20383 = (state_20415[(10)]);
var inst_20393 = (state_20415[(2)]);
var inst_20394 = [];
var inst_20395 = inst_20394.push(inst_20379);
var inst_20375 = inst_20394;
var inst_20376 = inst_20383;
var state_20415__$1 = (function (){var statearr_20427 = state_20415;
(statearr_20427[(11)] = inst_20393);

(statearr_20427[(7)] = inst_20376);

(statearr_20427[(8)] = inst_20375);

(statearr_20427[(12)] = inst_20395);

return statearr_20427;
})();
var statearr_20428_20452 = state_20415__$1;
(statearr_20428_20452[(2)] = null);

(statearr_20428_20452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20416 === (9))){
var inst_20375 = (state_20415[(8)]);
var inst_20391 = cljs.core.vec.call(null,inst_20375);
var state_20415__$1 = state_20415;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20415__$1,(11),out,inst_20391);
} else {
if((state_val_20416 === (5))){
var inst_20379 = (state_20415[(9)]);
var inst_20376 = (state_20415[(7)]);
var inst_20383 = (state_20415[(10)]);
var inst_20383__$1 = f.call(null,inst_20379);
var inst_20384 = cljs.core._EQ_.call(null,inst_20383__$1,inst_20376);
var inst_20385 = cljs.core.keyword_identical_QMARK_.call(null,inst_20376,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20386 = ((inst_20384) || (inst_20385));
var state_20415__$1 = (function (){var statearr_20429 = state_20415;
(statearr_20429[(10)] = inst_20383__$1);

return statearr_20429;
})();
if(cljs.core.truth_(inst_20386)){
var statearr_20430_20453 = state_20415__$1;
(statearr_20430_20453[(1)] = (8));

} else {
var statearr_20431_20454 = state_20415__$1;
(statearr_20431_20454[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20416 === (14))){
var inst_20408 = (state_20415[(2)]);
var inst_20409 = cljs.core.async.close_BANG_.call(null,out);
var state_20415__$1 = (function (){var statearr_20433 = state_20415;
(statearr_20433[(13)] = inst_20408);

return statearr_20433;
})();
var statearr_20434_20455 = state_20415__$1;
(statearr_20434_20455[(2)] = inst_20409);

(statearr_20434_20455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20416 === (10))){
var inst_20398 = (state_20415[(2)]);
var state_20415__$1 = state_20415;
var statearr_20435_20456 = state_20415__$1;
(statearr_20435_20456[(2)] = inst_20398);

(statearr_20435_20456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20416 === (8))){
var inst_20379 = (state_20415[(9)]);
var inst_20383 = (state_20415[(10)]);
var inst_20375 = (state_20415[(8)]);
var inst_20388 = inst_20375.push(inst_20379);
var tmp20432 = inst_20375;
var inst_20375__$1 = tmp20432;
var inst_20376 = inst_20383;
var state_20415__$1 = (function (){var statearr_20436 = state_20415;
(statearr_20436[(7)] = inst_20376);

(statearr_20436[(8)] = inst_20375__$1);

(statearr_20436[(14)] = inst_20388);

return statearr_20436;
})();
var statearr_20437_20457 = state_20415__$1;
(statearr_20437_20457[(2)] = null);

(statearr_20437_20457[(1)] = (2));


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
});})(c__16675__auto___20443,out))
;
return ((function (switch__16508__auto__,c__16675__auto___20443,out){
return (function() {
var cljs$core$async$state_machine__16509__auto__ = null;
var cljs$core$async$state_machine__16509__auto____0 = (function (){
var statearr_20438 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20438[(0)] = cljs$core$async$state_machine__16509__auto__);

(statearr_20438[(1)] = (1));

return statearr_20438;
});
var cljs$core$async$state_machine__16509__auto____1 = (function (state_20415){
while(true){
var ret_value__16510__auto__ = (function (){try{while(true){
var result__16511__auto__ = switch__16508__auto__.call(null,state_20415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16511__auto__;
}
break;
}
}catch (e20439){if((e20439 instanceof Object)){
var ex__16512__auto__ = e20439;
var statearr_20440_20458 = state_20415;
(statearr_20440_20458[(5)] = ex__16512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20459 = state_20415;
state_20415 = G__20459;
continue;
} else {
return ret_value__16510__auto__;
}
break;
}
});
cljs$core$async$state_machine__16509__auto__ = function(state_20415){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16509__auto____1.call(this,state_20415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16509__auto____0;
cljs$core$async$state_machine__16509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16509__auto____1;
return cljs$core$async$state_machine__16509__auto__;
})()
;})(switch__16508__auto__,c__16675__auto___20443,out))
})();
var state__16677__auto__ = (function (){var statearr_20441 = f__16676__auto__.call(null);
(statearr_20441[(6)] = c__16675__auto___20443);

return statearr_20441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16677__auto__);
});})(c__16675__auto___20443,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
