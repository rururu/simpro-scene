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
var G__25011 = arguments.length;
switch (G__25011) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25012 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25012 = (function (f,blockable,meta25013){
this.f = f;
this.blockable = blockable;
this.meta25013 = meta25013;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25014,meta25013__$1){
var self__ = this;
var _25014__$1 = this;
return (new cljs.core.async.t_cljs$core$async25012(self__.f,self__.blockable,meta25013__$1));
});

cljs.core.async.t_cljs$core$async25012.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25014){
var self__ = this;
var _25014__$1 = this;
return self__.meta25013;
});

cljs.core.async.t_cljs$core$async25012.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25012.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25012.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async25012.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async25012.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta25013","meta25013",848969559,null)], null);
});

cljs.core.async.t_cljs$core$async25012.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25012.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25012";

cljs.core.async.t_cljs$core$async25012.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25012");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25012.
 */
cljs.core.async.__GT_t_cljs$core$async25012 = (function cljs$core$async$__GT_t_cljs$core$async25012(f__$1,blockable__$1,meta25013){
return (new cljs.core.async.t_cljs$core$async25012(f__$1,blockable__$1,meta25013));
});

}

return (new cljs.core.async.t_cljs$core$async25012(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__25018 = arguments.length;
switch (G__25018) {
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
var G__25021 = arguments.length;
switch (G__25021) {
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
var G__25024 = arguments.length;
switch (G__25024) {
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
var val_25026 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25026);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25026,ret){
return (function (){
return fn1.call(null,val_25026);
});})(val_25026,ret))
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
var G__25028 = arguments.length;
switch (G__25028) {
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
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
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
var n__4518__auto___25030 = n;
var x_25031 = (0);
while(true){
if((x_25031 < n__4518__auto___25030)){
(a[x_25031] = (0));

var G__25032 = (x_25031 + (1));
x_25031 = G__25032;
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

var G__25033 = (i + (1));
i = G__25033;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25034 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25034 = (function (flag,meta25035){
this.flag = flag;
this.meta25035 = meta25035;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25036,meta25035__$1){
var self__ = this;
var _25036__$1 = this;
return (new cljs.core.async.t_cljs$core$async25034(self__.flag,meta25035__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async25034.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25036){
var self__ = this;
var _25036__$1 = this;
return self__.meta25035;
});})(flag))
;

cljs.core.async.t_cljs$core$async25034.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25034.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async25034.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25034.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25034.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25035","meta25035",550019094,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async25034.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25034.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25034";

cljs.core.async.t_cljs$core$async25034.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25034");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25034.
 */
cljs.core.async.__GT_t_cljs$core$async25034 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25034(flag__$1,meta25035){
return (new cljs.core.async.t_cljs$core$async25034(flag__$1,meta25035));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async25034(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25037 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25037 = (function (flag,cb,meta25038){
this.flag = flag;
this.cb = cb;
this.meta25038 = meta25038;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25039,meta25038__$1){
var self__ = this;
var _25039__$1 = this;
return (new cljs.core.async.t_cljs$core$async25037(self__.flag,self__.cb,meta25038__$1));
});

cljs.core.async.t_cljs$core$async25037.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25039){
var self__ = this;
var _25039__$1 = this;
return self__.meta25038;
});

cljs.core.async.t_cljs$core$async25037.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25037.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async25037.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25037.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async25037.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25038","meta25038",677366287,null)], null);
});

cljs.core.async.t_cljs$core$async25037.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25037.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25037";

cljs.core.async.t_cljs$core$async25037.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25037");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25037.
 */
cljs.core.async.__GT_t_cljs$core$async25037 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25037(flag__$1,cb__$1,meta25038){
return (new cljs.core.async.t_cljs$core$async25037(flag__$1,cb__$1,meta25038));
});

}

return (new cljs.core.async.t_cljs$core$async25037(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__25040_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25040_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25041_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25041_SHARP_,port], null));
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
var G__25042 = (i + (1));
i = G__25042;
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
var temp__5720__auto__ = (function (){var and__4036__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
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
var len__4641__auto___25048 = arguments.length;
var i__4642__auto___25049 = (0);
while(true){
if((i__4642__auto___25049 < len__4641__auto___25048)){
args__4647__auto__.push((arguments[i__4642__auto___25049]));

var G__25050 = (i__4642__auto___25049 + (1));
i__4642__auto___25049 = G__25050;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25045){
var map__25046 = p__25045;
var map__25046__$1 = (((((!((map__25046 == null))))?(((((map__25046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25046):map__25046);
var opts = map__25046__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25043){
var G__25044 = cljs.core.first.call(null,seq25043);
var seq25043__$1 = cljs.core.next.call(null,seq25043);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25044,seq25043__$1);
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
var G__25052 = arguments.length;
switch (G__25052) {
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
var c__24951__auto___25098 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24951__auto___25098){
return (function (){
var f__24952__auto__ = (function (){var switch__24856__auto__ = ((function (c__24951__auto___25098){
return (function (state_25076){
var state_val_25077 = (state_25076[(1)]);
if((state_val_25077 === (7))){
var inst_25072 = (state_25076[(2)]);
var state_25076__$1 = state_25076;
var statearr_25078_25099 = state_25076__$1;
(statearr_25078_25099[(2)] = inst_25072);

(statearr_25078_25099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25077 === (1))){
var state_25076__$1 = state_25076;
var statearr_25079_25100 = state_25076__$1;
(statearr_25079_25100[(2)] = null);

(statearr_25079_25100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25077 === (4))){
var inst_25055 = (state_25076[(7)]);
var inst_25055__$1 = (state_25076[(2)]);
var inst_25056 = (inst_25055__$1 == null);
var state_25076__$1 = (function (){var statearr_25080 = state_25076;
(statearr_25080[(7)] = inst_25055__$1);

return statearr_25080;
})();
if(cljs.core.truth_(inst_25056)){
var statearr_25081_25101 = state_25076__$1;
(statearr_25081_25101[(1)] = (5));

} else {
var statearr_25082_25102 = state_25076__$1;
(statearr_25082_25102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25077 === (13))){
var state_25076__$1 = state_25076;
var statearr_25083_25103 = state_25076__$1;
(statearr_25083_25103[(2)] = null);

(statearr_25083_25103[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25077 === (6))){
var inst_25055 = (state_25076[(7)]);
var state_25076__$1 = state_25076;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25076__$1,(11),to,inst_25055);
} else {
if((state_val_25077 === (3))){
var inst_25074 = (state_25076[(2)]);
var state_25076__$1 = state_25076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25076__$1,inst_25074);
} else {
if((state_val_25077 === (12))){
var state_25076__$1 = state_25076;
var statearr_25084_25104 = state_25076__$1;
(statearr_25084_25104[(2)] = null);

(statearr_25084_25104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25077 === (2))){
var state_25076__$1 = state_25076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25076__$1,(4),from);
} else {
if((state_val_25077 === (11))){
var inst_25065 = (state_25076[(2)]);
var state_25076__$1 = state_25076;
if(cljs.core.truth_(inst_25065)){
var statearr_25085_25105 = state_25076__$1;
(statearr_25085_25105[(1)] = (12));

} else {
var statearr_25086_25106 = state_25076__$1;
(statearr_25086_25106[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25077 === (9))){
var state_25076__$1 = state_25076;
var statearr_25087_25107 = state_25076__$1;
(statearr_25087_25107[(2)] = null);

(statearr_25087_25107[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25077 === (5))){
var state_25076__$1 = state_25076;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25088_25108 = state_25076__$1;
(statearr_25088_25108[(1)] = (8));

} else {
var statearr_25089_25109 = state_25076__$1;
(statearr_25089_25109[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25077 === (14))){
var inst_25070 = (state_25076[(2)]);
var state_25076__$1 = state_25076;
var statearr_25090_25110 = state_25076__$1;
(statearr_25090_25110[(2)] = inst_25070);

(statearr_25090_25110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25077 === (10))){
var inst_25062 = (state_25076[(2)]);
var state_25076__$1 = state_25076;
var statearr_25091_25111 = state_25076__$1;
(statearr_25091_25111[(2)] = inst_25062);

(statearr_25091_25111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25077 === (8))){
var inst_25059 = cljs.core.async.close_BANG_.call(null,to);
var state_25076__$1 = state_25076;
var statearr_25092_25112 = state_25076__$1;
(statearr_25092_25112[(2)] = inst_25059);

(statearr_25092_25112[(1)] = (10));


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
});})(c__24951__auto___25098))
;
return ((function (switch__24856__auto__,c__24951__auto___25098){
return (function() {
var cljs$core$async$state_machine__24857__auto__ = null;
var cljs$core$async$state_machine__24857__auto____0 = (function (){
var statearr_25093 = [null,null,null,null,null,null,null,null];
(statearr_25093[(0)] = cljs$core$async$state_machine__24857__auto__);

(statearr_25093[(1)] = (1));

return statearr_25093;
});
var cljs$core$async$state_machine__24857__auto____1 = (function (state_25076){
while(true){
var ret_value__24858__auto__ = (function (){try{while(true){
var result__24859__auto__ = switch__24856__auto__.call(null,state_25076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24859__auto__;
}
break;
}
}catch (e25094){if((e25094 instanceof Object)){
var ex__24860__auto__ = e25094;
var statearr_25095_25113 = state_25076;
(statearr_25095_25113[(5)] = ex__24860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25114 = state_25076;
state_25076 = G__25114;
continue;
} else {
return ret_value__24858__auto__;
}
break;
}
});
cljs$core$async$state_machine__24857__auto__ = function(state_25076){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24857__auto____1.call(this,state_25076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24857__auto____0;
cljs$core$async$state_machine__24857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24857__auto____1;
return cljs$core$async$state_machine__24857__auto__;
})()
;})(switch__24856__auto__,c__24951__auto___25098))
})();
var state__24953__auto__ = (function (){var statearr_25096 = f__24952__auto__.call(null);
(statearr_25096[(6)] = c__24951__auto___25098);

return statearr_25096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24953__auto__);
});})(c__24951__auto___25098))
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
return (function (p__25115){
var vec__25116 = p__25115;
var v = cljs.core.nth.call(null,vec__25116,(0),null);
var p = cljs.core.nth.call(null,vec__25116,(1),null);
var job = vec__25116;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24951__auto___25287 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24951__auto___25287,res,vec__25116,v,p,job,jobs,results){
return (function (){
var f__24952__auto__ = (function (){var switch__24856__auto__ = ((function (c__24951__auto___25287,res,vec__25116,v,p,job,jobs,results){
return (function (state_25123){
var state_val_25124 = (state_25123[(1)]);
if((state_val_25124 === (1))){
var state_25123__$1 = state_25123;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25123__$1,(2),res,v);
} else {
if((state_val_25124 === (2))){
var inst_25120 = (state_25123[(2)]);
var inst_25121 = cljs.core.async.close_BANG_.call(null,res);
var state_25123__$1 = (function (){var statearr_25125 = state_25123;
(statearr_25125[(7)] = inst_25120);

return statearr_25125;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25123__$1,inst_25121);
} else {
return null;
}
}
});})(c__24951__auto___25287,res,vec__25116,v,p,job,jobs,results))
;
return ((function (switch__24856__auto__,c__24951__auto___25287,res,vec__25116,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24857__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24857__auto____0 = (function (){
var statearr_25126 = [null,null,null,null,null,null,null,null];
(statearr_25126[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24857__auto__);

(statearr_25126[(1)] = (1));

return statearr_25126;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24857__auto____1 = (function (state_25123){
while(true){
var ret_value__24858__auto__ = (function (){try{while(true){
var result__24859__auto__ = switch__24856__auto__.call(null,state_25123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24859__auto__;
}
break;
}
}catch (e25127){if((e25127 instanceof Object)){
var ex__24860__auto__ = e25127;
var statearr_25128_25288 = state_25123;
(statearr_25128_25288[(5)] = ex__24860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25289 = state_25123;
state_25123 = G__25289;
continue;
} else {
return ret_value__24858__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24857__auto__ = function(state_25123){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24857__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24857__auto____1.call(this,state_25123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24857__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24857__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24857__auto__;
})()
;})(switch__24856__auto__,c__24951__auto___25287,res,vec__25116,v,p,job,jobs,results))
})();
var state__24953__auto__ = (function (){var statearr_25129 = f__24952__auto__.call(null);
(statearr_25129[(6)] = c__24951__auto___25287);

return statearr_25129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24953__auto__);
});})(c__24951__auto___25287,res,vec__25116,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25130){
var vec__25131 = p__25130;
var v = cljs.core.nth.call(null,vec__25131,(0),null);
var p = cljs.core.nth.call(null,vec__25131,(1),null);
var job = vec__25131;
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
var n__4518__auto___25290 = n;
var __25291 = (0);
while(true){
if((__25291 < n__4518__auto___25290)){
var G__25134_25292 = type;
var G__25134_25293__$1 = (((G__25134_25292 instanceof cljs.core.Keyword))?G__25134_25292.fqn:null);
switch (G__25134_25293__$1) {
case "compute":
var c__24951__auto___25295 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25291,c__24951__auto___25295,G__25134_25292,G__25134_25293__$1,n__4518__auto___25290,jobs,results,process,async){
return (function (){
var f__24952__auto__ = (function (){var switch__24856__auto__ = ((function (__25291,c__24951__auto___25295,G__25134_25292,G__25134_25293__$1,n__4518__auto___25290,jobs,results,process,async){
return (function (state_25147){
var state_val_25148 = (state_25147[(1)]);
if((state_val_25148 === (1))){
var state_25147__$1 = state_25147;
var statearr_25149_25296 = state_25147__$1;
(statearr_25149_25296[(2)] = null);

(statearr_25149_25296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25148 === (2))){
var state_25147__$1 = state_25147;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25147__$1,(4),jobs);
} else {
if((state_val_25148 === (3))){
var inst_25145 = (state_25147[(2)]);
var state_25147__$1 = state_25147;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25147__$1,inst_25145);
} else {
if((state_val_25148 === (4))){
var inst_25137 = (state_25147[(2)]);
var inst_25138 = process.call(null,inst_25137);
var state_25147__$1 = state_25147;
if(cljs.core.truth_(inst_25138)){
var statearr_25150_25297 = state_25147__$1;
(statearr_25150_25297[(1)] = (5));

} else {
var statearr_25151_25298 = state_25147__$1;
(statearr_25151_25298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25148 === (5))){
var state_25147__$1 = state_25147;
var statearr_25152_25299 = state_25147__$1;
(statearr_25152_25299[(2)] = null);

(statearr_25152_25299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25148 === (6))){
var state_25147__$1 = state_25147;
var statearr_25153_25300 = state_25147__$1;
(statearr_25153_25300[(2)] = null);

(statearr_25153_25300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25148 === (7))){
var inst_25143 = (state_25147[(2)]);
var state_25147__$1 = state_25147;
var statearr_25154_25301 = state_25147__$1;
(statearr_25154_25301[(2)] = inst_25143);

(statearr_25154_25301[(1)] = (3));


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
});})(__25291,c__24951__auto___25295,G__25134_25292,G__25134_25293__$1,n__4518__auto___25290,jobs,results,process,async))
;
return ((function (__25291,switch__24856__auto__,c__24951__auto___25295,G__25134_25292,G__25134_25293__$1,n__4518__auto___25290,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24857__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24857__auto____0 = (function (){
var statearr_25155 = [null,null,null,null,null,null,null];
(statearr_25155[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24857__auto__);

(statearr_25155[(1)] = (1));

return statearr_25155;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24857__auto____1 = (function (state_25147){
while(true){
var ret_value__24858__auto__ = (function (){try{while(true){
var result__24859__auto__ = switch__24856__auto__.call(null,state_25147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24859__auto__;
}
break;
}
}catch (e25156){if((e25156 instanceof Object)){
var ex__24860__auto__ = e25156;
var statearr_25157_25302 = state_25147;
(statearr_25157_25302[(5)] = ex__24860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25303 = state_25147;
state_25147 = G__25303;
continue;
} else {
return ret_value__24858__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24857__auto__ = function(state_25147){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24857__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24857__auto____1.call(this,state_25147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24857__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24857__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24857__auto__;
})()
;})(__25291,switch__24856__auto__,c__24951__auto___25295,G__25134_25292,G__25134_25293__$1,n__4518__auto___25290,jobs,results,process,async))
})();
var state__24953__auto__ = (function (){var statearr_25158 = f__24952__auto__.call(null);
(statearr_25158[(6)] = c__24951__auto___25295);

return statearr_25158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24953__auto__);
});})(__25291,c__24951__auto___25295,G__25134_25292,G__25134_25293__$1,n__4518__auto___25290,jobs,results,process,async))
);


break;
case "async":
var c__24951__auto___25304 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25291,c__24951__auto___25304,G__25134_25292,G__25134_25293__$1,n__4518__auto___25290,jobs,results,process,async){
return (function (){
var f__24952__auto__ = (function (){var switch__24856__auto__ = ((function (__25291,c__24951__auto___25304,G__25134_25292,G__25134_25293__$1,n__4518__auto___25290,jobs,results,process,async){
return (function (state_25171){
var state_val_25172 = (state_25171[(1)]);
if((state_val_25172 === (1))){
var state_25171__$1 = state_25171;
var statearr_25173_25305 = state_25171__$1;
(statearr_25173_25305[(2)] = null);

(statearr_25173_25305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25172 === (2))){
var state_25171__$1 = state_25171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25171__$1,(4),jobs);
} else {
if((state_val_25172 === (3))){
var inst_25169 = (state_25171[(2)]);
var state_25171__$1 = state_25171;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25171__$1,inst_25169);
} else {
if((state_val_25172 === (4))){
var inst_25161 = (state_25171[(2)]);
var inst_25162 = async.call(null,inst_25161);
var state_25171__$1 = state_25171;
if(cljs.core.truth_(inst_25162)){
var statearr_25174_25306 = state_25171__$1;
(statearr_25174_25306[(1)] = (5));

} else {
var statearr_25175_25307 = state_25171__$1;
(statearr_25175_25307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25172 === (5))){
var state_25171__$1 = state_25171;
var statearr_25176_25308 = state_25171__$1;
(statearr_25176_25308[(2)] = null);

(statearr_25176_25308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25172 === (6))){
var state_25171__$1 = state_25171;
var statearr_25177_25309 = state_25171__$1;
(statearr_25177_25309[(2)] = null);

(statearr_25177_25309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25172 === (7))){
var inst_25167 = (state_25171[(2)]);
var state_25171__$1 = state_25171;
var statearr_25178_25310 = state_25171__$1;
(statearr_25178_25310[(2)] = inst_25167);

(statearr_25178_25310[(1)] = (3));


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
});})(__25291,c__24951__auto___25304,G__25134_25292,G__25134_25293__$1,n__4518__auto___25290,jobs,results,process,async))
;
return ((function (__25291,switch__24856__auto__,c__24951__auto___25304,G__25134_25292,G__25134_25293__$1,n__4518__auto___25290,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24857__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24857__auto____0 = (function (){
var statearr_25179 = [null,null,null,null,null,null,null];
(statearr_25179[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24857__auto__);

(statearr_25179[(1)] = (1));

return statearr_25179;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24857__auto____1 = (function (state_25171){
while(true){
var ret_value__24858__auto__ = (function (){try{while(true){
var result__24859__auto__ = switch__24856__auto__.call(null,state_25171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24859__auto__;
}
break;
}
}catch (e25180){if((e25180 instanceof Object)){
var ex__24860__auto__ = e25180;
var statearr_25181_25311 = state_25171;
(statearr_25181_25311[(5)] = ex__24860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25312 = state_25171;
state_25171 = G__25312;
continue;
} else {
return ret_value__24858__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24857__auto__ = function(state_25171){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24857__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24857__auto____1.call(this,state_25171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24857__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24857__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24857__auto__;
})()
;})(__25291,switch__24856__auto__,c__24951__auto___25304,G__25134_25292,G__25134_25293__$1,n__4518__auto___25290,jobs,results,process,async))
})();
var state__24953__auto__ = (function (){var statearr_25182 = f__24952__auto__.call(null);
(statearr_25182[(6)] = c__24951__auto___25304);

return statearr_25182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24953__auto__);
});})(__25291,c__24951__auto___25304,G__25134_25292,G__25134_25293__$1,n__4518__auto___25290,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25134_25293__$1)].join('')));

}

var G__25313 = (__25291 + (1));
__25291 = G__25313;
continue;
} else {
}
break;
}

var c__24951__auto___25314 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24951__auto___25314,jobs,results,process,async){
return (function (){
var f__24952__auto__ = (function (){var switch__24856__auto__ = ((function (c__24951__auto___25314,jobs,results,process,async){
return (function (state_25204){
var state_val_25205 = (state_25204[(1)]);
if((state_val_25205 === (7))){
var inst_25200 = (state_25204[(2)]);
var state_25204__$1 = state_25204;
var statearr_25206_25315 = state_25204__$1;
(statearr_25206_25315[(2)] = inst_25200);

(statearr_25206_25315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (1))){
var state_25204__$1 = state_25204;
var statearr_25207_25316 = state_25204__$1;
(statearr_25207_25316[(2)] = null);

(statearr_25207_25316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (4))){
var inst_25185 = (state_25204[(7)]);
var inst_25185__$1 = (state_25204[(2)]);
var inst_25186 = (inst_25185__$1 == null);
var state_25204__$1 = (function (){var statearr_25208 = state_25204;
(statearr_25208[(7)] = inst_25185__$1);

return statearr_25208;
})();
if(cljs.core.truth_(inst_25186)){
var statearr_25209_25317 = state_25204__$1;
(statearr_25209_25317[(1)] = (5));

} else {
var statearr_25210_25318 = state_25204__$1;
(statearr_25210_25318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (6))){
var inst_25190 = (state_25204[(8)]);
var inst_25185 = (state_25204[(7)]);
var inst_25190__$1 = cljs.core.async.chan.call(null,(1));
var inst_25191 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25192 = [inst_25185,inst_25190__$1];
var inst_25193 = (new cljs.core.PersistentVector(null,2,(5),inst_25191,inst_25192,null));
var state_25204__$1 = (function (){var statearr_25211 = state_25204;
(statearr_25211[(8)] = inst_25190__$1);

return statearr_25211;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25204__$1,(8),jobs,inst_25193);
} else {
if((state_val_25205 === (3))){
var inst_25202 = (state_25204[(2)]);
var state_25204__$1 = state_25204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25204__$1,inst_25202);
} else {
if((state_val_25205 === (2))){
var state_25204__$1 = state_25204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25204__$1,(4),from);
} else {
if((state_val_25205 === (9))){
var inst_25197 = (state_25204[(2)]);
var state_25204__$1 = (function (){var statearr_25212 = state_25204;
(statearr_25212[(9)] = inst_25197);

return statearr_25212;
})();
var statearr_25213_25319 = state_25204__$1;
(statearr_25213_25319[(2)] = null);

(statearr_25213_25319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (5))){
var inst_25188 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25204__$1 = state_25204;
var statearr_25214_25320 = state_25204__$1;
(statearr_25214_25320[(2)] = inst_25188);

(statearr_25214_25320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (8))){
var inst_25190 = (state_25204[(8)]);
var inst_25195 = (state_25204[(2)]);
var state_25204__$1 = (function (){var statearr_25215 = state_25204;
(statearr_25215[(10)] = inst_25195);

return statearr_25215;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25204__$1,(9),results,inst_25190);
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
});})(c__24951__auto___25314,jobs,results,process,async))
;
return ((function (switch__24856__auto__,c__24951__auto___25314,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24857__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24857__auto____0 = (function (){
var statearr_25216 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25216[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24857__auto__);

(statearr_25216[(1)] = (1));

return statearr_25216;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24857__auto____1 = (function (state_25204){
while(true){
var ret_value__24858__auto__ = (function (){try{while(true){
var result__24859__auto__ = switch__24856__auto__.call(null,state_25204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24859__auto__;
}
break;
}
}catch (e25217){if((e25217 instanceof Object)){
var ex__24860__auto__ = e25217;
var statearr_25218_25321 = state_25204;
(statearr_25218_25321[(5)] = ex__24860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25322 = state_25204;
state_25204 = G__25322;
continue;
} else {
return ret_value__24858__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24857__auto__ = function(state_25204){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24857__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24857__auto____1.call(this,state_25204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24857__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24857__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24857__auto__;
})()
;})(switch__24856__auto__,c__24951__auto___25314,jobs,results,process,async))
})();
var state__24953__auto__ = (function (){var statearr_25219 = f__24952__auto__.call(null);
(statearr_25219[(6)] = c__24951__auto___25314);

return statearr_25219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24953__auto__);
});})(c__24951__auto___25314,jobs,results,process,async))
);


var c__24951__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24951__auto__,jobs,results,process,async){
return (function (){
var f__24952__auto__ = (function (){var switch__24856__auto__ = ((function (c__24951__auto__,jobs,results,process,async){
return (function (state_25257){
var state_val_25258 = (state_25257[(1)]);
if((state_val_25258 === (7))){
var inst_25253 = (state_25257[(2)]);
var state_25257__$1 = state_25257;
var statearr_25259_25323 = state_25257__$1;
(statearr_25259_25323[(2)] = inst_25253);

(statearr_25259_25323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (20))){
var state_25257__$1 = state_25257;
var statearr_25260_25324 = state_25257__$1;
(statearr_25260_25324[(2)] = null);

(statearr_25260_25324[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (1))){
var state_25257__$1 = state_25257;
var statearr_25261_25325 = state_25257__$1;
(statearr_25261_25325[(2)] = null);

(statearr_25261_25325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (4))){
var inst_25222 = (state_25257[(7)]);
var inst_25222__$1 = (state_25257[(2)]);
var inst_25223 = (inst_25222__$1 == null);
var state_25257__$1 = (function (){var statearr_25262 = state_25257;
(statearr_25262[(7)] = inst_25222__$1);

return statearr_25262;
})();
if(cljs.core.truth_(inst_25223)){
var statearr_25263_25326 = state_25257__$1;
(statearr_25263_25326[(1)] = (5));

} else {
var statearr_25264_25327 = state_25257__$1;
(statearr_25264_25327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (15))){
var inst_25235 = (state_25257[(8)]);
var state_25257__$1 = state_25257;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25257__$1,(18),to,inst_25235);
} else {
if((state_val_25258 === (21))){
var inst_25248 = (state_25257[(2)]);
var state_25257__$1 = state_25257;
var statearr_25265_25328 = state_25257__$1;
(statearr_25265_25328[(2)] = inst_25248);

(statearr_25265_25328[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (13))){
var inst_25250 = (state_25257[(2)]);
var state_25257__$1 = (function (){var statearr_25266 = state_25257;
(statearr_25266[(9)] = inst_25250);

return statearr_25266;
})();
var statearr_25267_25329 = state_25257__$1;
(statearr_25267_25329[(2)] = null);

(statearr_25267_25329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (6))){
var inst_25222 = (state_25257[(7)]);
var state_25257__$1 = state_25257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25257__$1,(11),inst_25222);
} else {
if((state_val_25258 === (17))){
var inst_25243 = (state_25257[(2)]);
var state_25257__$1 = state_25257;
if(cljs.core.truth_(inst_25243)){
var statearr_25268_25330 = state_25257__$1;
(statearr_25268_25330[(1)] = (19));

} else {
var statearr_25269_25331 = state_25257__$1;
(statearr_25269_25331[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (3))){
var inst_25255 = (state_25257[(2)]);
var state_25257__$1 = state_25257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25257__$1,inst_25255);
} else {
if((state_val_25258 === (12))){
var inst_25232 = (state_25257[(10)]);
var state_25257__$1 = state_25257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25257__$1,(14),inst_25232);
} else {
if((state_val_25258 === (2))){
var state_25257__$1 = state_25257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25257__$1,(4),results);
} else {
if((state_val_25258 === (19))){
var state_25257__$1 = state_25257;
var statearr_25270_25332 = state_25257__$1;
(statearr_25270_25332[(2)] = null);

(statearr_25270_25332[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (11))){
var inst_25232 = (state_25257[(2)]);
var state_25257__$1 = (function (){var statearr_25271 = state_25257;
(statearr_25271[(10)] = inst_25232);

return statearr_25271;
})();
var statearr_25272_25333 = state_25257__$1;
(statearr_25272_25333[(2)] = null);

(statearr_25272_25333[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (9))){
var state_25257__$1 = state_25257;
var statearr_25273_25334 = state_25257__$1;
(statearr_25273_25334[(2)] = null);

(statearr_25273_25334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (5))){
var state_25257__$1 = state_25257;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25274_25335 = state_25257__$1;
(statearr_25274_25335[(1)] = (8));

} else {
var statearr_25275_25336 = state_25257__$1;
(statearr_25275_25336[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (14))){
var inst_25235 = (state_25257[(8)]);
var inst_25237 = (state_25257[(11)]);
var inst_25235__$1 = (state_25257[(2)]);
var inst_25236 = (inst_25235__$1 == null);
var inst_25237__$1 = cljs.core.not.call(null,inst_25236);
var state_25257__$1 = (function (){var statearr_25276 = state_25257;
(statearr_25276[(8)] = inst_25235__$1);

(statearr_25276[(11)] = inst_25237__$1);

return statearr_25276;
})();
if(inst_25237__$1){
var statearr_25277_25337 = state_25257__$1;
(statearr_25277_25337[(1)] = (15));

} else {
var statearr_25278_25338 = state_25257__$1;
(statearr_25278_25338[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (16))){
var inst_25237 = (state_25257[(11)]);
var state_25257__$1 = state_25257;
var statearr_25279_25339 = state_25257__$1;
(statearr_25279_25339[(2)] = inst_25237);

(statearr_25279_25339[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (10))){
var inst_25229 = (state_25257[(2)]);
var state_25257__$1 = state_25257;
var statearr_25280_25340 = state_25257__$1;
(statearr_25280_25340[(2)] = inst_25229);

(statearr_25280_25340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (18))){
var inst_25240 = (state_25257[(2)]);
var state_25257__$1 = state_25257;
var statearr_25281_25341 = state_25257__$1;
(statearr_25281_25341[(2)] = inst_25240);

(statearr_25281_25341[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25258 === (8))){
var inst_25226 = cljs.core.async.close_BANG_.call(null,to);
var state_25257__$1 = state_25257;
var statearr_25282_25342 = state_25257__$1;
(statearr_25282_25342[(2)] = inst_25226);

(statearr_25282_25342[(1)] = (10));


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
});})(c__24951__auto__,jobs,results,process,async))
;
return ((function (switch__24856__auto__,c__24951__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24857__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24857__auto____0 = (function (){
var statearr_25283 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25283[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24857__auto__);

(statearr_25283[(1)] = (1));

return statearr_25283;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24857__auto____1 = (function (state_25257){
while(true){
var ret_value__24858__auto__ = (function (){try{while(true){
var result__24859__auto__ = switch__24856__auto__.call(null,state_25257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24859__auto__;
}
break;
}
}catch (e25284){if((e25284 instanceof Object)){
var ex__24860__auto__ = e25284;
var statearr_25285_25343 = state_25257;
(statearr_25285_25343[(5)] = ex__24860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25344 = state_25257;
state_25257 = G__25344;
continue;
} else {
return ret_value__24858__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24857__auto__ = function(state_25257){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24857__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24857__auto____1.call(this,state_25257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24857__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24857__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24857__auto__;
})()
;})(switch__24856__auto__,c__24951__auto__,jobs,results,process,async))
})();
var state__24953__auto__ = (function (){var statearr_25286 = f__24952__auto__.call(null);
(statearr_25286[(6)] = c__24951__auto__);

return statearr_25286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24953__auto__);
});})(c__24951__auto__,jobs,results,process,async))
);

return c__24951__auto__;
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
var G__25346 = arguments.length;
switch (G__25346) {
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
var G__25349 = arguments.length;
switch (G__25349) {
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
var G__25352 = arguments.length;
switch (G__25352) {
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
var c__24951__auto___25401 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24951__auto___25401,tc,fc){
return (function (){
var f__24952__auto__ = (function (){var switch__24856__auto__ = ((function (c__24951__auto___25401,tc,fc){
return (function (state_25378){
var state_val_25379 = (state_25378[(1)]);
if((state_val_25379 === (7))){
var inst_25374 = (state_25378[(2)]);
var state_25378__$1 = state_25378;
var statearr_25380_25402 = state_25378__$1;
(statearr_25380_25402[(2)] = inst_25374);

(statearr_25380_25402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25379 === (1))){
var state_25378__$1 = state_25378;
var statearr_25381_25403 = state_25378__$1;
(statearr_25381_25403[(2)] = null);

(statearr_25381_25403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25379 === (4))){
var inst_25355 = (state_25378[(7)]);
var inst_25355__$1 = (state_25378[(2)]);
var inst_25356 = (inst_25355__$1 == null);
var state_25378__$1 = (function (){var statearr_25382 = state_25378;
(statearr_25382[(7)] = inst_25355__$1);

return statearr_25382;
})();
if(cljs.core.truth_(inst_25356)){
var statearr_25383_25404 = state_25378__$1;
(statearr_25383_25404[(1)] = (5));

} else {
var statearr_25384_25405 = state_25378__$1;
(statearr_25384_25405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25379 === (13))){
var state_25378__$1 = state_25378;
var statearr_25385_25406 = state_25378__$1;
(statearr_25385_25406[(2)] = null);

(statearr_25385_25406[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25379 === (6))){
var inst_25355 = (state_25378[(7)]);
var inst_25361 = p.call(null,inst_25355);
var state_25378__$1 = state_25378;
if(cljs.core.truth_(inst_25361)){
var statearr_25386_25407 = state_25378__$1;
(statearr_25386_25407[(1)] = (9));

} else {
var statearr_25387_25408 = state_25378__$1;
(statearr_25387_25408[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25379 === (3))){
var inst_25376 = (state_25378[(2)]);
var state_25378__$1 = state_25378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25378__$1,inst_25376);
} else {
if((state_val_25379 === (12))){
var state_25378__$1 = state_25378;
var statearr_25388_25409 = state_25378__$1;
(statearr_25388_25409[(2)] = null);

(statearr_25388_25409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25379 === (2))){
var state_25378__$1 = state_25378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25378__$1,(4),ch);
} else {
if((state_val_25379 === (11))){
var inst_25355 = (state_25378[(7)]);
var inst_25365 = (state_25378[(2)]);
var state_25378__$1 = state_25378;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25378__$1,(8),inst_25365,inst_25355);
} else {
if((state_val_25379 === (9))){
var state_25378__$1 = state_25378;
var statearr_25389_25410 = state_25378__$1;
(statearr_25389_25410[(2)] = tc);

(statearr_25389_25410[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25379 === (5))){
var inst_25358 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25359 = cljs.core.async.close_BANG_.call(null,fc);
var state_25378__$1 = (function (){var statearr_25390 = state_25378;
(statearr_25390[(8)] = inst_25358);

return statearr_25390;
})();
var statearr_25391_25411 = state_25378__$1;
(statearr_25391_25411[(2)] = inst_25359);

(statearr_25391_25411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25379 === (14))){
var inst_25372 = (state_25378[(2)]);
var state_25378__$1 = state_25378;
var statearr_25392_25412 = state_25378__$1;
(statearr_25392_25412[(2)] = inst_25372);

(statearr_25392_25412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25379 === (10))){
var state_25378__$1 = state_25378;
var statearr_25393_25413 = state_25378__$1;
(statearr_25393_25413[(2)] = fc);

(statearr_25393_25413[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25379 === (8))){
var inst_25367 = (state_25378[(2)]);
var state_25378__$1 = state_25378;
if(cljs.core.truth_(inst_25367)){
var statearr_25394_25414 = state_25378__$1;
(statearr_25394_25414[(1)] = (12));

} else {
var statearr_25395_25415 = state_25378__$1;
(statearr_25395_25415[(1)] = (13));

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
});})(c__24951__auto___25401,tc,fc))
;
return ((function (switch__24856__auto__,c__24951__auto___25401,tc,fc){
return (function() {
var cljs$core$async$state_machine__24857__auto__ = null;
var cljs$core$async$state_machine__24857__auto____0 = (function (){
var statearr_25396 = [null,null,null,null,null,null,null,null,null];
(statearr_25396[(0)] = cljs$core$async$state_machine__24857__auto__);

(statearr_25396[(1)] = (1));

return statearr_25396;
});
var cljs$core$async$state_machine__24857__auto____1 = (function (state_25378){
while(true){
var ret_value__24858__auto__ = (function (){try{while(true){
var result__24859__auto__ = switch__24856__auto__.call(null,state_25378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24859__auto__;
}
break;
}
}catch (e25397){if((e25397 instanceof Object)){
var ex__24860__auto__ = e25397;
var statearr_25398_25416 = state_25378;
(statearr_25398_25416[(5)] = ex__24860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25417 = state_25378;
state_25378 = G__25417;
continue;
} else {
return ret_value__24858__auto__;
}
break;
}
});
cljs$core$async$state_machine__24857__auto__ = function(state_25378){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24857__auto____1.call(this,state_25378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24857__auto____0;
cljs$core$async$state_machine__24857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24857__auto____1;
return cljs$core$async$state_machine__24857__auto__;
})()
;})(switch__24856__auto__,c__24951__auto___25401,tc,fc))
})();
var state__24953__auto__ = (function (){var statearr_25399 = f__24952__auto__.call(null);
(statearr_25399[(6)] = c__24951__auto___25401);

return statearr_25399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24953__auto__);
});})(c__24951__auto___25401,tc,fc))
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
var c__24951__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24951__auto__){
return (function (){
var f__24952__auto__ = (function (){var switch__24856__auto__ = ((function (c__24951__auto__){
return (function (state_25438){
var state_val_25439 = (state_25438[(1)]);
if((state_val_25439 === (7))){
var inst_25434 = (state_25438[(2)]);
var state_25438__$1 = state_25438;
var statearr_25440_25458 = state_25438__$1;
(statearr_25440_25458[(2)] = inst_25434);

(statearr_25440_25458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25439 === (1))){
var inst_25418 = init;
var state_25438__$1 = (function (){var statearr_25441 = state_25438;
(statearr_25441[(7)] = inst_25418);

return statearr_25441;
})();
var statearr_25442_25459 = state_25438__$1;
(statearr_25442_25459[(2)] = null);

(statearr_25442_25459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25439 === (4))){
var inst_25421 = (state_25438[(8)]);
var inst_25421__$1 = (state_25438[(2)]);
var inst_25422 = (inst_25421__$1 == null);
var state_25438__$1 = (function (){var statearr_25443 = state_25438;
(statearr_25443[(8)] = inst_25421__$1);

return statearr_25443;
})();
if(cljs.core.truth_(inst_25422)){
var statearr_25444_25460 = state_25438__$1;
(statearr_25444_25460[(1)] = (5));

} else {
var statearr_25445_25461 = state_25438__$1;
(statearr_25445_25461[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25439 === (6))){
var inst_25425 = (state_25438[(9)]);
var inst_25421 = (state_25438[(8)]);
var inst_25418 = (state_25438[(7)]);
var inst_25425__$1 = f.call(null,inst_25418,inst_25421);
var inst_25426 = cljs.core.reduced_QMARK_.call(null,inst_25425__$1);
var state_25438__$1 = (function (){var statearr_25446 = state_25438;
(statearr_25446[(9)] = inst_25425__$1);

return statearr_25446;
})();
if(inst_25426){
var statearr_25447_25462 = state_25438__$1;
(statearr_25447_25462[(1)] = (8));

} else {
var statearr_25448_25463 = state_25438__$1;
(statearr_25448_25463[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25439 === (3))){
var inst_25436 = (state_25438[(2)]);
var state_25438__$1 = state_25438;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25438__$1,inst_25436);
} else {
if((state_val_25439 === (2))){
var state_25438__$1 = state_25438;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25438__$1,(4),ch);
} else {
if((state_val_25439 === (9))){
var inst_25425 = (state_25438[(9)]);
var inst_25418 = inst_25425;
var state_25438__$1 = (function (){var statearr_25449 = state_25438;
(statearr_25449[(7)] = inst_25418);

return statearr_25449;
})();
var statearr_25450_25464 = state_25438__$1;
(statearr_25450_25464[(2)] = null);

(statearr_25450_25464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25439 === (5))){
var inst_25418 = (state_25438[(7)]);
var state_25438__$1 = state_25438;
var statearr_25451_25465 = state_25438__$1;
(statearr_25451_25465[(2)] = inst_25418);

(statearr_25451_25465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25439 === (10))){
var inst_25432 = (state_25438[(2)]);
var state_25438__$1 = state_25438;
var statearr_25452_25466 = state_25438__$1;
(statearr_25452_25466[(2)] = inst_25432);

(statearr_25452_25466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25439 === (8))){
var inst_25425 = (state_25438[(9)]);
var inst_25428 = cljs.core.deref.call(null,inst_25425);
var state_25438__$1 = state_25438;
var statearr_25453_25467 = state_25438__$1;
(statearr_25453_25467[(2)] = inst_25428);

(statearr_25453_25467[(1)] = (10));


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
});})(c__24951__auto__))
;
return ((function (switch__24856__auto__,c__24951__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24857__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24857__auto____0 = (function (){
var statearr_25454 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25454[(0)] = cljs$core$async$reduce_$_state_machine__24857__auto__);

(statearr_25454[(1)] = (1));

return statearr_25454;
});
var cljs$core$async$reduce_$_state_machine__24857__auto____1 = (function (state_25438){
while(true){
var ret_value__24858__auto__ = (function (){try{while(true){
var result__24859__auto__ = switch__24856__auto__.call(null,state_25438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24859__auto__;
}
break;
}
}catch (e25455){if((e25455 instanceof Object)){
var ex__24860__auto__ = e25455;
var statearr_25456_25468 = state_25438;
(statearr_25456_25468[(5)] = ex__24860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25469 = state_25438;
state_25438 = G__25469;
continue;
} else {
return ret_value__24858__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24857__auto__ = function(state_25438){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24857__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24857__auto____1.call(this,state_25438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24857__auto____0;
cljs$core$async$reduce_$_state_machine__24857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24857__auto____1;
return cljs$core$async$reduce_$_state_machine__24857__auto__;
})()
;})(switch__24856__auto__,c__24951__auto__))
})();
var state__24953__auto__ = (function (){var statearr_25457 = f__24952__auto__.call(null);
(statearr_25457[(6)] = c__24951__auto__);

return statearr_25457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24953__auto__);
});})(c__24951__auto__))
);

return c__24951__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__24951__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24951__auto__,f__$1){
return (function (){
var f__24952__auto__ = (function (){var switch__24856__auto__ = ((function (c__24951__auto__,f__$1){
return (function (state_25475){
var state_val_25476 = (state_25475[(1)]);
if((state_val_25476 === (1))){
var inst_25470 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_25475__$1 = state_25475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25475__$1,(2),inst_25470);
} else {
if((state_val_25476 === (2))){
var inst_25472 = (state_25475[(2)]);
var inst_25473 = f__$1.call(null,inst_25472);
var state_25475__$1 = state_25475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25475__$1,inst_25473);
} else {
return null;
}
}
});})(c__24951__auto__,f__$1))
;
return ((function (switch__24856__auto__,c__24951__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__24857__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24857__auto____0 = (function (){
var statearr_25477 = [null,null,null,null,null,null,null];
(statearr_25477[(0)] = cljs$core$async$transduce_$_state_machine__24857__auto__);

(statearr_25477[(1)] = (1));

return statearr_25477;
});
var cljs$core$async$transduce_$_state_machine__24857__auto____1 = (function (state_25475){
while(true){
var ret_value__24858__auto__ = (function (){try{while(true){
var result__24859__auto__ = switch__24856__auto__.call(null,state_25475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24859__auto__;
}
break;
}
}catch (e25478){if((e25478 instanceof Object)){
var ex__24860__auto__ = e25478;
var statearr_25479_25481 = state_25475;
(statearr_25479_25481[(5)] = ex__24860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25482 = state_25475;
state_25475 = G__25482;
continue;
} else {
return ret_value__24858__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24857__auto__ = function(state_25475){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24857__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24857__auto____1.call(this,state_25475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24857__auto____0;
cljs$core$async$transduce_$_state_machine__24857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24857__auto____1;
return cljs$core$async$transduce_$_state_machine__24857__auto__;
})()
;})(switch__24856__auto__,c__24951__auto__,f__$1))
})();
var state__24953__auto__ = (function (){var statearr_25480 = f__24952__auto__.call(null);
(statearr_25480[(6)] = c__24951__auto__);

return statearr_25480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24953__auto__);
});})(c__24951__auto__,f__$1))
);

return c__24951__auto__;
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
var G__25484 = arguments.length;
switch (G__25484) {
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
var c__24951__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24951__auto__){
return (function (){
var f__24952__auto__ = (function (){var switch__24856__auto__ = ((function (c__24951__auto__){
return (function (state_25509){
var state_val_25510 = (state_25509[(1)]);
if((state_val_25510 === (7))){
var inst_25491 = (state_25509[(2)]);
var state_25509__$1 = state_25509;
var statearr_25511_25532 = state_25509__$1;
(statearr_25511_25532[(2)] = inst_25491);

(statearr_25511_25532[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25510 === (1))){
var inst_25485 = cljs.core.seq.call(null,coll);
var inst_25486 = inst_25485;
var state_25509__$1 = (function (){var statearr_25512 = state_25509;
(statearr_25512[(7)] = inst_25486);

return statearr_25512;
})();
var statearr_25513_25533 = state_25509__$1;
(statearr_25513_25533[(2)] = null);

(statearr_25513_25533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25510 === (4))){
var inst_25486 = (state_25509[(7)]);
var inst_25489 = cljs.core.first.call(null,inst_25486);
var state_25509__$1 = state_25509;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25509__$1,(7),ch,inst_25489);
} else {
if((state_val_25510 === (13))){
var inst_25503 = (state_25509[(2)]);
var state_25509__$1 = state_25509;
var statearr_25514_25534 = state_25509__$1;
(statearr_25514_25534[(2)] = inst_25503);

(statearr_25514_25534[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25510 === (6))){
var inst_25494 = (state_25509[(2)]);
var state_25509__$1 = state_25509;
if(cljs.core.truth_(inst_25494)){
var statearr_25515_25535 = state_25509__$1;
(statearr_25515_25535[(1)] = (8));

} else {
var statearr_25516_25536 = state_25509__$1;
(statearr_25516_25536[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25510 === (3))){
var inst_25507 = (state_25509[(2)]);
var state_25509__$1 = state_25509;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25509__$1,inst_25507);
} else {
if((state_val_25510 === (12))){
var state_25509__$1 = state_25509;
var statearr_25517_25537 = state_25509__$1;
(statearr_25517_25537[(2)] = null);

(statearr_25517_25537[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25510 === (2))){
var inst_25486 = (state_25509[(7)]);
var state_25509__$1 = state_25509;
if(cljs.core.truth_(inst_25486)){
var statearr_25518_25538 = state_25509__$1;
(statearr_25518_25538[(1)] = (4));

} else {
var statearr_25519_25539 = state_25509__$1;
(statearr_25519_25539[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25510 === (11))){
var inst_25500 = cljs.core.async.close_BANG_.call(null,ch);
var state_25509__$1 = state_25509;
var statearr_25520_25540 = state_25509__$1;
(statearr_25520_25540[(2)] = inst_25500);

(statearr_25520_25540[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25510 === (9))){
var state_25509__$1 = state_25509;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25521_25541 = state_25509__$1;
(statearr_25521_25541[(1)] = (11));

} else {
var statearr_25522_25542 = state_25509__$1;
(statearr_25522_25542[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25510 === (5))){
var inst_25486 = (state_25509[(7)]);
var state_25509__$1 = state_25509;
var statearr_25523_25543 = state_25509__$1;
(statearr_25523_25543[(2)] = inst_25486);

(statearr_25523_25543[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25510 === (10))){
var inst_25505 = (state_25509[(2)]);
var state_25509__$1 = state_25509;
var statearr_25524_25544 = state_25509__$1;
(statearr_25524_25544[(2)] = inst_25505);

(statearr_25524_25544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25510 === (8))){
var inst_25486 = (state_25509[(7)]);
var inst_25496 = cljs.core.next.call(null,inst_25486);
var inst_25486__$1 = inst_25496;
var state_25509__$1 = (function (){var statearr_25525 = state_25509;
(statearr_25525[(7)] = inst_25486__$1);

return statearr_25525;
})();
var statearr_25526_25545 = state_25509__$1;
(statearr_25526_25545[(2)] = null);

(statearr_25526_25545[(1)] = (2));


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
});})(c__24951__auto__))
;
return ((function (switch__24856__auto__,c__24951__auto__){
return (function() {
var cljs$core$async$state_machine__24857__auto__ = null;
var cljs$core$async$state_machine__24857__auto____0 = (function (){
var statearr_25527 = [null,null,null,null,null,null,null,null];
(statearr_25527[(0)] = cljs$core$async$state_machine__24857__auto__);

(statearr_25527[(1)] = (1));

return statearr_25527;
});
var cljs$core$async$state_machine__24857__auto____1 = (function (state_25509){
while(true){
var ret_value__24858__auto__ = (function (){try{while(true){
var result__24859__auto__ = switch__24856__auto__.call(null,state_25509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24859__auto__;
}
break;
}
}catch (e25528){if((e25528 instanceof Object)){
var ex__24860__auto__ = e25528;
var statearr_25529_25546 = state_25509;
(statearr_25529_25546[(5)] = ex__24860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25547 = state_25509;
state_25509 = G__25547;
continue;
} else {
return ret_value__24858__auto__;
}
break;
}
});
cljs$core$async$state_machine__24857__auto__ = function(state_25509){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24857__auto____1.call(this,state_25509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24857__auto____0;
cljs$core$async$state_machine__24857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24857__auto____1;
return cljs$core$async$state_machine__24857__auto__;
})()
;})(switch__24856__auto__,c__24951__auto__))
})();
var state__24953__auto__ = (function (){var statearr_25530 = f__24952__auto__.call(null);
(statearr_25530[(6)] = c__24951__auto__);

return statearr_25530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24953__auto__);
});})(c__24951__auto__))
);

return c__24951__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25548 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25548 = (function (ch,cs,meta25549){
this.ch = ch;
this.cs = cs;
this.meta25549 = meta25549;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25550,meta25549__$1){
var self__ = this;
var _25550__$1 = this;
return (new cljs.core.async.t_cljs$core$async25548(self__.ch,self__.cs,meta25549__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25548.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25550){
var self__ = this;
var _25550__$1 = this;
return self__.meta25549;
});})(cs))
;

cljs.core.async.t_cljs$core$async25548.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25548.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25548.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25548.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25548.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25548.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25548.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25549","meta25549",1151107139,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25548.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25548.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25548";

cljs.core.async.t_cljs$core$async25548.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25548");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25548.
 */
cljs.core.async.__GT_t_cljs$core$async25548 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25548(ch__$1,cs__$1,meta25549){
return (new cljs.core.async.t_cljs$core$async25548(ch__$1,cs__$1,meta25549));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25548(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__24951__auto___25770 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24951__auto___25770,cs,m,dchan,dctr,done){
return (function (){
var f__24952__auto__ = (function (){var switch__24856__auto__ = ((function (c__24951__auto___25770,cs,m,dchan,dctr,done){
return (function (state_25685){
var state_val_25686 = (state_25685[(1)]);
if((state_val_25686 === (7))){
var inst_25681 = (state_25685[(2)]);
var state_25685__$1 = state_25685;
var statearr_25687_25771 = state_25685__$1;
(statearr_25687_25771[(2)] = inst_25681);

(statearr_25687_25771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (20))){
var inst_25584 = (state_25685[(7)]);
var inst_25596 = cljs.core.first.call(null,inst_25584);
var inst_25597 = cljs.core.nth.call(null,inst_25596,(0),null);
var inst_25598 = cljs.core.nth.call(null,inst_25596,(1),null);
var state_25685__$1 = (function (){var statearr_25688 = state_25685;
(statearr_25688[(8)] = inst_25597);

return statearr_25688;
})();
if(cljs.core.truth_(inst_25598)){
var statearr_25689_25772 = state_25685__$1;
(statearr_25689_25772[(1)] = (22));

} else {
var statearr_25690_25773 = state_25685__$1;
(statearr_25690_25773[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (27))){
var inst_25628 = (state_25685[(9)]);
var inst_25626 = (state_25685[(10)]);
var inst_25633 = (state_25685[(11)]);
var inst_25553 = (state_25685[(12)]);
var inst_25633__$1 = cljs.core._nth.call(null,inst_25626,inst_25628);
var inst_25634 = cljs.core.async.put_BANG_.call(null,inst_25633__$1,inst_25553,done);
var state_25685__$1 = (function (){var statearr_25691 = state_25685;
(statearr_25691[(11)] = inst_25633__$1);

return statearr_25691;
})();
if(cljs.core.truth_(inst_25634)){
var statearr_25692_25774 = state_25685__$1;
(statearr_25692_25774[(1)] = (30));

} else {
var statearr_25693_25775 = state_25685__$1;
(statearr_25693_25775[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (1))){
var state_25685__$1 = state_25685;
var statearr_25694_25776 = state_25685__$1;
(statearr_25694_25776[(2)] = null);

(statearr_25694_25776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (24))){
var inst_25584 = (state_25685[(7)]);
var inst_25603 = (state_25685[(2)]);
var inst_25604 = cljs.core.next.call(null,inst_25584);
var inst_25562 = inst_25604;
var inst_25563 = null;
var inst_25564 = (0);
var inst_25565 = (0);
var state_25685__$1 = (function (){var statearr_25695 = state_25685;
(statearr_25695[(13)] = inst_25603);

(statearr_25695[(14)] = inst_25562);

(statearr_25695[(15)] = inst_25564);

(statearr_25695[(16)] = inst_25565);

(statearr_25695[(17)] = inst_25563);

return statearr_25695;
})();
var statearr_25696_25777 = state_25685__$1;
(statearr_25696_25777[(2)] = null);

(statearr_25696_25777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (39))){
var state_25685__$1 = state_25685;
var statearr_25700_25778 = state_25685__$1;
(statearr_25700_25778[(2)] = null);

(statearr_25700_25778[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (4))){
var inst_25553 = (state_25685[(12)]);
var inst_25553__$1 = (state_25685[(2)]);
var inst_25554 = (inst_25553__$1 == null);
var state_25685__$1 = (function (){var statearr_25701 = state_25685;
(statearr_25701[(12)] = inst_25553__$1);

return statearr_25701;
})();
if(cljs.core.truth_(inst_25554)){
var statearr_25702_25779 = state_25685__$1;
(statearr_25702_25779[(1)] = (5));

} else {
var statearr_25703_25780 = state_25685__$1;
(statearr_25703_25780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (15))){
var inst_25562 = (state_25685[(14)]);
var inst_25564 = (state_25685[(15)]);
var inst_25565 = (state_25685[(16)]);
var inst_25563 = (state_25685[(17)]);
var inst_25580 = (state_25685[(2)]);
var inst_25581 = (inst_25565 + (1));
var tmp25697 = inst_25562;
var tmp25698 = inst_25564;
var tmp25699 = inst_25563;
var inst_25562__$1 = tmp25697;
var inst_25563__$1 = tmp25699;
var inst_25564__$1 = tmp25698;
var inst_25565__$1 = inst_25581;
var state_25685__$1 = (function (){var statearr_25704 = state_25685;
(statearr_25704[(14)] = inst_25562__$1);

(statearr_25704[(18)] = inst_25580);

(statearr_25704[(15)] = inst_25564__$1);

(statearr_25704[(16)] = inst_25565__$1);

(statearr_25704[(17)] = inst_25563__$1);

return statearr_25704;
})();
var statearr_25705_25781 = state_25685__$1;
(statearr_25705_25781[(2)] = null);

(statearr_25705_25781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (21))){
var inst_25607 = (state_25685[(2)]);
var state_25685__$1 = state_25685;
var statearr_25709_25782 = state_25685__$1;
(statearr_25709_25782[(2)] = inst_25607);

(statearr_25709_25782[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (31))){
var inst_25633 = (state_25685[(11)]);
var inst_25637 = done.call(null,null);
var inst_25638 = cljs.core.async.untap_STAR_.call(null,m,inst_25633);
var state_25685__$1 = (function (){var statearr_25710 = state_25685;
(statearr_25710[(19)] = inst_25637);

return statearr_25710;
})();
var statearr_25711_25783 = state_25685__$1;
(statearr_25711_25783[(2)] = inst_25638);

(statearr_25711_25783[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (32))){
var inst_25628 = (state_25685[(9)]);
var inst_25626 = (state_25685[(10)]);
var inst_25627 = (state_25685[(20)]);
var inst_25625 = (state_25685[(21)]);
var inst_25640 = (state_25685[(2)]);
var inst_25641 = (inst_25628 + (1));
var tmp25706 = inst_25626;
var tmp25707 = inst_25627;
var tmp25708 = inst_25625;
var inst_25625__$1 = tmp25708;
var inst_25626__$1 = tmp25706;
var inst_25627__$1 = tmp25707;
var inst_25628__$1 = inst_25641;
var state_25685__$1 = (function (){var statearr_25712 = state_25685;
(statearr_25712[(22)] = inst_25640);

(statearr_25712[(9)] = inst_25628__$1);

(statearr_25712[(10)] = inst_25626__$1);

(statearr_25712[(20)] = inst_25627__$1);

(statearr_25712[(21)] = inst_25625__$1);

return statearr_25712;
})();
var statearr_25713_25784 = state_25685__$1;
(statearr_25713_25784[(2)] = null);

(statearr_25713_25784[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (40))){
var inst_25653 = (state_25685[(23)]);
var inst_25657 = done.call(null,null);
var inst_25658 = cljs.core.async.untap_STAR_.call(null,m,inst_25653);
var state_25685__$1 = (function (){var statearr_25714 = state_25685;
(statearr_25714[(24)] = inst_25657);

return statearr_25714;
})();
var statearr_25715_25785 = state_25685__$1;
(statearr_25715_25785[(2)] = inst_25658);

(statearr_25715_25785[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (33))){
var inst_25644 = (state_25685[(25)]);
var inst_25646 = cljs.core.chunked_seq_QMARK_.call(null,inst_25644);
var state_25685__$1 = state_25685;
if(inst_25646){
var statearr_25716_25786 = state_25685__$1;
(statearr_25716_25786[(1)] = (36));

} else {
var statearr_25717_25787 = state_25685__$1;
(statearr_25717_25787[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (13))){
var inst_25574 = (state_25685[(26)]);
var inst_25577 = cljs.core.async.close_BANG_.call(null,inst_25574);
var state_25685__$1 = state_25685;
var statearr_25718_25788 = state_25685__$1;
(statearr_25718_25788[(2)] = inst_25577);

(statearr_25718_25788[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (22))){
var inst_25597 = (state_25685[(8)]);
var inst_25600 = cljs.core.async.close_BANG_.call(null,inst_25597);
var state_25685__$1 = state_25685;
var statearr_25719_25789 = state_25685__$1;
(statearr_25719_25789[(2)] = inst_25600);

(statearr_25719_25789[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (36))){
var inst_25644 = (state_25685[(25)]);
var inst_25648 = cljs.core.chunk_first.call(null,inst_25644);
var inst_25649 = cljs.core.chunk_rest.call(null,inst_25644);
var inst_25650 = cljs.core.count.call(null,inst_25648);
var inst_25625 = inst_25649;
var inst_25626 = inst_25648;
var inst_25627 = inst_25650;
var inst_25628 = (0);
var state_25685__$1 = (function (){var statearr_25720 = state_25685;
(statearr_25720[(9)] = inst_25628);

(statearr_25720[(10)] = inst_25626);

(statearr_25720[(20)] = inst_25627);

(statearr_25720[(21)] = inst_25625);

return statearr_25720;
})();
var statearr_25721_25790 = state_25685__$1;
(statearr_25721_25790[(2)] = null);

(statearr_25721_25790[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (41))){
var inst_25644 = (state_25685[(25)]);
var inst_25660 = (state_25685[(2)]);
var inst_25661 = cljs.core.next.call(null,inst_25644);
var inst_25625 = inst_25661;
var inst_25626 = null;
var inst_25627 = (0);
var inst_25628 = (0);
var state_25685__$1 = (function (){var statearr_25722 = state_25685;
(statearr_25722[(9)] = inst_25628);

(statearr_25722[(10)] = inst_25626);

(statearr_25722[(27)] = inst_25660);

(statearr_25722[(20)] = inst_25627);

(statearr_25722[(21)] = inst_25625);

return statearr_25722;
})();
var statearr_25723_25791 = state_25685__$1;
(statearr_25723_25791[(2)] = null);

(statearr_25723_25791[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (43))){
var state_25685__$1 = state_25685;
var statearr_25724_25792 = state_25685__$1;
(statearr_25724_25792[(2)] = null);

(statearr_25724_25792[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (29))){
var inst_25669 = (state_25685[(2)]);
var state_25685__$1 = state_25685;
var statearr_25725_25793 = state_25685__$1;
(statearr_25725_25793[(2)] = inst_25669);

(statearr_25725_25793[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (44))){
var inst_25678 = (state_25685[(2)]);
var state_25685__$1 = (function (){var statearr_25726 = state_25685;
(statearr_25726[(28)] = inst_25678);

return statearr_25726;
})();
var statearr_25727_25794 = state_25685__$1;
(statearr_25727_25794[(2)] = null);

(statearr_25727_25794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (6))){
var inst_25617 = (state_25685[(29)]);
var inst_25616 = cljs.core.deref.call(null,cs);
var inst_25617__$1 = cljs.core.keys.call(null,inst_25616);
var inst_25618 = cljs.core.count.call(null,inst_25617__$1);
var inst_25619 = cljs.core.reset_BANG_.call(null,dctr,inst_25618);
var inst_25624 = cljs.core.seq.call(null,inst_25617__$1);
var inst_25625 = inst_25624;
var inst_25626 = null;
var inst_25627 = (0);
var inst_25628 = (0);
var state_25685__$1 = (function (){var statearr_25728 = state_25685;
(statearr_25728[(9)] = inst_25628);

(statearr_25728[(10)] = inst_25626);

(statearr_25728[(30)] = inst_25619);

(statearr_25728[(20)] = inst_25627);

(statearr_25728[(29)] = inst_25617__$1);

(statearr_25728[(21)] = inst_25625);

return statearr_25728;
})();
var statearr_25729_25795 = state_25685__$1;
(statearr_25729_25795[(2)] = null);

(statearr_25729_25795[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (28))){
var inst_25644 = (state_25685[(25)]);
var inst_25625 = (state_25685[(21)]);
var inst_25644__$1 = cljs.core.seq.call(null,inst_25625);
var state_25685__$1 = (function (){var statearr_25730 = state_25685;
(statearr_25730[(25)] = inst_25644__$1);

return statearr_25730;
})();
if(inst_25644__$1){
var statearr_25731_25796 = state_25685__$1;
(statearr_25731_25796[(1)] = (33));

} else {
var statearr_25732_25797 = state_25685__$1;
(statearr_25732_25797[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (25))){
var inst_25628 = (state_25685[(9)]);
var inst_25627 = (state_25685[(20)]);
var inst_25630 = (inst_25628 < inst_25627);
var inst_25631 = inst_25630;
var state_25685__$1 = state_25685;
if(cljs.core.truth_(inst_25631)){
var statearr_25733_25798 = state_25685__$1;
(statearr_25733_25798[(1)] = (27));

} else {
var statearr_25734_25799 = state_25685__$1;
(statearr_25734_25799[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (34))){
var state_25685__$1 = state_25685;
var statearr_25735_25800 = state_25685__$1;
(statearr_25735_25800[(2)] = null);

(statearr_25735_25800[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (17))){
var state_25685__$1 = state_25685;
var statearr_25736_25801 = state_25685__$1;
(statearr_25736_25801[(2)] = null);

(statearr_25736_25801[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (3))){
var inst_25683 = (state_25685[(2)]);
var state_25685__$1 = state_25685;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25685__$1,inst_25683);
} else {
if((state_val_25686 === (12))){
var inst_25612 = (state_25685[(2)]);
var state_25685__$1 = state_25685;
var statearr_25737_25802 = state_25685__$1;
(statearr_25737_25802[(2)] = inst_25612);

(statearr_25737_25802[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (2))){
var state_25685__$1 = state_25685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25685__$1,(4),ch);
} else {
if((state_val_25686 === (23))){
var state_25685__$1 = state_25685;
var statearr_25738_25803 = state_25685__$1;
(statearr_25738_25803[(2)] = null);

(statearr_25738_25803[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (35))){
var inst_25667 = (state_25685[(2)]);
var state_25685__$1 = state_25685;
var statearr_25739_25804 = state_25685__$1;
(statearr_25739_25804[(2)] = inst_25667);

(statearr_25739_25804[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (19))){
var inst_25584 = (state_25685[(7)]);
var inst_25588 = cljs.core.chunk_first.call(null,inst_25584);
var inst_25589 = cljs.core.chunk_rest.call(null,inst_25584);
var inst_25590 = cljs.core.count.call(null,inst_25588);
var inst_25562 = inst_25589;
var inst_25563 = inst_25588;
var inst_25564 = inst_25590;
var inst_25565 = (0);
var state_25685__$1 = (function (){var statearr_25740 = state_25685;
(statearr_25740[(14)] = inst_25562);

(statearr_25740[(15)] = inst_25564);

(statearr_25740[(16)] = inst_25565);

(statearr_25740[(17)] = inst_25563);

return statearr_25740;
})();
var statearr_25741_25805 = state_25685__$1;
(statearr_25741_25805[(2)] = null);

(statearr_25741_25805[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (11))){
var inst_25584 = (state_25685[(7)]);
var inst_25562 = (state_25685[(14)]);
var inst_25584__$1 = cljs.core.seq.call(null,inst_25562);
var state_25685__$1 = (function (){var statearr_25742 = state_25685;
(statearr_25742[(7)] = inst_25584__$1);

return statearr_25742;
})();
if(inst_25584__$1){
var statearr_25743_25806 = state_25685__$1;
(statearr_25743_25806[(1)] = (16));

} else {
var statearr_25744_25807 = state_25685__$1;
(statearr_25744_25807[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (9))){
var inst_25614 = (state_25685[(2)]);
var state_25685__$1 = state_25685;
var statearr_25745_25808 = state_25685__$1;
(statearr_25745_25808[(2)] = inst_25614);

(statearr_25745_25808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (5))){
var inst_25560 = cljs.core.deref.call(null,cs);
var inst_25561 = cljs.core.seq.call(null,inst_25560);
var inst_25562 = inst_25561;
var inst_25563 = null;
var inst_25564 = (0);
var inst_25565 = (0);
var state_25685__$1 = (function (){var statearr_25746 = state_25685;
(statearr_25746[(14)] = inst_25562);

(statearr_25746[(15)] = inst_25564);

(statearr_25746[(16)] = inst_25565);

(statearr_25746[(17)] = inst_25563);

return statearr_25746;
})();
var statearr_25747_25809 = state_25685__$1;
(statearr_25747_25809[(2)] = null);

(statearr_25747_25809[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (14))){
var state_25685__$1 = state_25685;
var statearr_25748_25810 = state_25685__$1;
(statearr_25748_25810[(2)] = null);

(statearr_25748_25810[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (45))){
var inst_25675 = (state_25685[(2)]);
var state_25685__$1 = state_25685;
var statearr_25749_25811 = state_25685__$1;
(statearr_25749_25811[(2)] = inst_25675);

(statearr_25749_25811[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (26))){
var inst_25617 = (state_25685[(29)]);
var inst_25671 = (state_25685[(2)]);
var inst_25672 = cljs.core.seq.call(null,inst_25617);
var state_25685__$1 = (function (){var statearr_25750 = state_25685;
(statearr_25750[(31)] = inst_25671);

return statearr_25750;
})();
if(inst_25672){
var statearr_25751_25812 = state_25685__$1;
(statearr_25751_25812[(1)] = (42));

} else {
var statearr_25752_25813 = state_25685__$1;
(statearr_25752_25813[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (16))){
var inst_25584 = (state_25685[(7)]);
var inst_25586 = cljs.core.chunked_seq_QMARK_.call(null,inst_25584);
var state_25685__$1 = state_25685;
if(inst_25586){
var statearr_25753_25814 = state_25685__$1;
(statearr_25753_25814[(1)] = (19));

} else {
var statearr_25754_25815 = state_25685__$1;
(statearr_25754_25815[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (38))){
var inst_25664 = (state_25685[(2)]);
var state_25685__$1 = state_25685;
var statearr_25755_25816 = state_25685__$1;
(statearr_25755_25816[(2)] = inst_25664);

(statearr_25755_25816[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (30))){
var state_25685__$1 = state_25685;
var statearr_25756_25817 = state_25685__$1;
(statearr_25756_25817[(2)] = null);

(statearr_25756_25817[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (10))){
var inst_25565 = (state_25685[(16)]);
var inst_25563 = (state_25685[(17)]);
var inst_25573 = cljs.core._nth.call(null,inst_25563,inst_25565);
var inst_25574 = cljs.core.nth.call(null,inst_25573,(0),null);
var inst_25575 = cljs.core.nth.call(null,inst_25573,(1),null);
var state_25685__$1 = (function (){var statearr_25757 = state_25685;
(statearr_25757[(26)] = inst_25574);

return statearr_25757;
})();
if(cljs.core.truth_(inst_25575)){
var statearr_25758_25818 = state_25685__$1;
(statearr_25758_25818[(1)] = (13));

} else {
var statearr_25759_25819 = state_25685__$1;
(statearr_25759_25819[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (18))){
var inst_25610 = (state_25685[(2)]);
var state_25685__$1 = state_25685;
var statearr_25760_25820 = state_25685__$1;
(statearr_25760_25820[(2)] = inst_25610);

(statearr_25760_25820[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (42))){
var state_25685__$1 = state_25685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25685__$1,(45),dchan);
} else {
if((state_val_25686 === (37))){
var inst_25653 = (state_25685[(23)]);
var inst_25644 = (state_25685[(25)]);
var inst_25553 = (state_25685[(12)]);
var inst_25653__$1 = cljs.core.first.call(null,inst_25644);
var inst_25654 = cljs.core.async.put_BANG_.call(null,inst_25653__$1,inst_25553,done);
var state_25685__$1 = (function (){var statearr_25761 = state_25685;
(statearr_25761[(23)] = inst_25653__$1);

return statearr_25761;
})();
if(cljs.core.truth_(inst_25654)){
var statearr_25762_25821 = state_25685__$1;
(statearr_25762_25821[(1)] = (39));

} else {
var statearr_25763_25822 = state_25685__$1;
(statearr_25763_25822[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (8))){
var inst_25564 = (state_25685[(15)]);
var inst_25565 = (state_25685[(16)]);
var inst_25567 = (inst_25565 < inst_25564);
var inst_25568 = inst_25567;
var state_25685__$1 = state_25685;
if(cljs.core.truth_(inst_25568)){
var statearr_25764_25823 = state_25685__$1;
(statearr_25764_25823[(1)] = (10));

} else {
var statearr_25765_25824 = state_25685__$1;
(statearr_25765_25824[(1)] = (11));

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
});})(c__24951__auto___25770,cs,m,dchan,dctr,done))
;
return ((function (switch__24856__auto__,c__24951__auto___25770,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24857__auto__ = null;
var cljs$core$async$mult_$_state_machine__24857__auto____0 = (function (){
var statearr_25766 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25766[(0)] = cljs$core$async$mult_$_state_machine__24857__auto__);

(statearr_25766[(1)] = (1));

return statearr_25766;
});
var cljs$core$async$mult_$_state_machine__24857__auto____1 = (function (state_25685){
while(true){
var ret_value__24858__auto__ = (function (){try{while(true){
var result__24859__auto__ = switch__24856__auto__.call(null,state_25685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24859__auto__;
}
break;
}
}catch (e25767){if((e25767 instanceof Object)){
var ex__24860__auto__ = e25767;
var statearr_25768_25825 = state_25685;
(statearr_25768_25825[(5)] = ex__24860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25826 = state_25685;
state_25685 = G__25826;
continue;
} else {
return ret_value__24858__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24857__auto__ = function(state_25685){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24857__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24857__auto____1.call(this,state_25685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24857__auto____0;
cljs$core$async$mult_$_state_machine__24857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24857__auto____1;
return cljs$core$async$mult_$_state_machine__24857__auto__;
})()
;})(switch__24856__auto__,c__24951__auto___25770,cs,m,dchan,dctr,done))
})();
var state__24953__auto__ = (function (){var statearr_25769 = f__24952__auto__.call(null);
(statearr_25769[(6)] = c__24951__auto___25770);

return statearr_25769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24953__auto__);
});})(c__24951__auto___25770,cs,m,dchan,dctr,done))
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
var G__25828 = arguments.length;
switch (G__25828) {
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
var len__4641__auto___25840 = arguments.length;
var i__4642__auto___25841 = (0);
while(true){
if((i__4642__auto___25841 < len__4641__auto___25840)){
args__4647__auto__.push((arguments[i__4642__auto___25841]));

var G__25842 = (i__4642__auto___25841 + (1));
i__4642__auto___25841 = G__25842;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25834){
var map__25835 = p__25834;
var map__25835__$1 = (((((!((map__25835 == null))))?(((((map__25835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25835):map__25835);
var opts = map__25835__$1;
var statearr_25837_25843 = state;
(statearr_25837_25843[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__25835,map__25835__$1,opts){
return (function (val){
var statearr_25838_25844 = state;
(statearr_25838_25844[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25835,map__25835__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_25839_25845 = state;
(statearr_25839_25845[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25830){
var G__25831 = cljs.core.first.call(null,seq25830);
var seq25830__$1 = cljs.core.next.call(null,seq25830);
var G__25832 = cljs.core.first.call(null,seq25830__$1);
var seq25830__$2 = cljs.core.next.call(null,seq25830__$1);
var G__25833 = cljs.core.first.call(null,seq25830__$2);
var seq25830__$3 = cljs.core.next.call(null,seq25830__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25831,G__25832,G__25833,seq25830__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25846 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25846 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25847){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25847 = meta25847;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25848,meta25847__$1){
var self__ = this;
var _25848__$1 = this;
return (new cljs.core.async.t_cljs$core$async25846(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25847__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25846.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25848){
var self__ = this;
var _25848__$1 = this;
return self__.meta25847;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25846.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25846.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25846.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25846.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25846.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25846.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25846.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25846.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async25846.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25847","meta25847",420713292,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25846.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25846.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25846";

cljs.core.async.t_cljs$core$async25846.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25846");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25846.
 */
cljs.core.async.__GT_t_cljs$core$async25846 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25846(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25847){
return (new cljs.core.async.t_cljs$core$async25846(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25847));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25846(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24951__auto___26010 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24951__auto___26010,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24952__auto__ = (function (){var switch__24856__auto__ = ((function (c__24951__auto___26010,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25950){
var state_val_25951 = (state_25950[(1)]);
if((state_val_25951 === (7))){
var inst_25865 = (state_25950[(2)]);
var state_25950__$1 = state_25950;
var statearr_25952_26011 = state_25950__$1;
(statearr_25952_26011[(2)] = inst_25865);

(statearr_25952_26011[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (20))){
var inst_25877 = (state_25950[(7)]);
var state_25950__$1 = state_25950;
var statearr_25953_26012 = state_25950__$1;
(statearr_25953_26012[(2)] = inst_25877);

(statearr_25953_26012[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (27))){
var state_25950__$1 = state_25950;
var statearr_25954_26013 = state_25950__$1;
(statearr_25954_26013[(2)] = null);

(statearr_25954_26013[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (1))){
var inst_25852 = (state_25950[(8)]);
var inst_25852__$1 = calc_state.call(null);
var inst_25854 = (inst_25852__$1 == null);
var inst_25855 = cljs.core.not.call(null,inst_25854);
var state_25950__$1 = (function (){var statearr_25955 = state_25950;
(statearr_25955[(8)] = inst_25852__$1);

return statearr_25955;
})();
if(inst_25855){
var statearr_25956_26014 = state_25950__$1;
(statearr_25956_26014[(1)] = (2));

} else {
var statearr_25957_26015 = state_25950__$1;
(statearr_25957_26015[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (24))){
var inst_25924 = (state_25950[(9)]);
var inst_25901 = (state_25950[(10)]);
var inst_25910 = (state_25950[(11)]);
var inst_25924__$1 = inst_25901.call(null,inst_25910);
var state_25950__$1 = (function (){var statearr_25958 = state_25950;
(statearr_25958[(9)] = inst_25924__$1);

return statearr_25958;
})();
if(cljs.core.truth_(inst_25924__$1)){
var statearr_25959_26016 = state_25950__$1;
(statearr_25959_26016[(1)] = (29));

} else {
var statearr_25960_26017 = state_25950__$1;
(statearr_25960_26017[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (4))){
var inst_25868 = (state_25950[(2)]);
var state_25950__$1 = state_25950;
if(cljs.core.truth_(inst_25868)){
var statearr_25961_26018 = state_25950__$1;
(statearr_25961_26018[(1)] = (8));

} else {
var statearr_25962_26019 = state_25950__$1;
(statearr_25962_26019[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (15))){
var inst_25895 = (state_25950[(2)]);
var state_25950__$1 = state_25950;
if(cljs.core.truth_(inst_25895)){
var statearr_25963_26020 = state_25950__$1;
(statearr_25963_26020[(1)] = (19));

} else {
var statearr_25964_26021 = state_25950__$1;
(statearr_25964_26021[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (21))){
var inst_25900 = (state_25950[(12)]);
var inst_25900__$1 = (state_25950[(2)]);
var inst_25901 = cljs.core.get.call(null,inst_25900__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25902 = cljs.core.get.call(null,inst_25900__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25903 = cljs.core.get.call(null,inst_25900__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25950__$1 = (function (){var statearr_25965 = state_25950;
(statearr_25965[(13)] = inst_25902);

(statearr_25965[(10)] = inst_25901);

(statearr_25965[(12)] = inst_25900__$1);

return statearr_25965;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25950__$1,(22),inst_25903);
} else {
if((state_val_25951 === (31))){
var inst_25932 = (state_25950[(2)]);
var state_25950__$1 = state_25950;
if(cljs.core.truth_(inst_25932)){
var statearr_25966_26022 = state_25950__$1;
(statearr_25966_26022[(1)] = (32));

} else {
var statearr_25967_26023 = state_25950__$1;
(statearr_25967_26023[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (32))){
var inst_25909 = (state_25950[(14)]);
var state_25950__$1 = state_25950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25950__$1,(35),out,inst_25909);
} else {
if((state_val_25951 === (33))){
var inst_25900 = (state_25950[(12)]);
var inst_25877 = inst_25900;
var state_25950__$1 = (function (){var statearr_25968 = state_25950;
(statearr_25968[(7)] = inst_25877);

return statearr_25968;
})();
var statearr_25969_26024 = state_25950__$1;
(statearr_25969_26024[(2)] = null);

(statearr_25969_26024[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (13))){
var inst_25877 = (state_25950[(7)]);
var inst_25884 = inst_25877.cljs$lang$protocol_mask$partition0$;
var inst_25885 = (inst_25884 & (64));
var inst_25886 = inst_25877.cljs$core$ISeq$;
var inst_25887 = (cljs.core.PROTOCOL_SENTINEL === inst_25886);
var inst_25888 = ((inst_25885) || (inst_25887));
var state_25950__$1 = state_25950;
if(cljs.core.truth_(inst_25888)){
var statearr_25970_26025 = state_25950__$1;
(statearr_25970_26025[(1)] = (16));

} else {
var statearr_25971_26026 = state_25950__$1;
(statearr_25971_26026[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (22))){
var inst_25910 = (state_25950[(11)]);
var inst_25909 = (state_25950[(14)]);
var inst_25908 = (state_25950[(2)]);
var inst_25909__$1 = cljs.core.nth.call(null,inst_25908,(0),null);
var inst_25910__$1 = cljs.core.nth.call(null,inst_25908,(1),null);
var inst_25911 = (inst_25909__$1 == null);
var inst_25912 = cljs.core._EQ_.call(null,inst_25910__$1,change);
var inst_25913 = ((inst_25911) || (inst_25912));
var state_25950__$1 = (function (){var statearr_25972 = state_25950;
(statearr_25972[(11)] = inst_25910__$1);

(statearr_25972[(14)] = inst_25909__$1);

return statearr_25972;
})();
if(cljs.core.truth_(inst_25913)){
var statearr_25973_26027 = state_25950__$1;
(statearr_25973_26027[(1)] = (23));

} else {
var statearr_25974_26028 = state_25950__$1;
(statearr_25974_26028[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (36))){
var inst_25900 = (state_25950[(12)]);
var inst_25877 = inst_25900;
var state_25950__$1 = (function (){var statearr_25975 = state_25950;
(statearr_25975[(7)] = inst_25877);

return statearr_25975;
})();
var statearr_25976_26029 = state_25950__$1;
(statearr_25976_26029[(2)] = null);

(statearr_25976_26029[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (29))){
var inst_25924 = (state_25950[(9)]);
var state_25950__$1 = state_25950;
var statearr_25977_26030 = state_25950__$1;
(statearr_25977_26030[(2)] = inst_25924);

(statearr_25977_26030[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (6))){
var state_25950__$1 = state_25950;
var statearr_25978_26031 = state_25950__$1;
(statearr_25978_26031[(2)] = false);

(statearr_25978_26031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (28))){
var inst_25920 = (state_25950[(2)]);
var inst_25921 = calc_state.call(null);
var inst_25877 = inst_25921;
var state_25950__$1 = (function (){var statearr_25979 = state_25950;
(statearr_25979[(15)] = inst_25920);

(statearr_25979[(7)] = inst_25877);

return statearr_25979;
})();
var statearr_25980_26032 = state_25950__$1;
(statearr_25980_26032[(2)] = null);

(statearr_25980_26032[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (25))){
var inst_25946 = (state_25950[(2)]);
var state_25950__$1 = state_25950;
var statearr_25981_26033 = state_25950__$1;
(statearr_25981_26033[(2)] = inst_25946);

(statearr_25981_26033[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (34))){
var inst_25944 = (state_25950[(2)]);
var state_25950__$1 = state_25950;
var statearr_25982_26034 = state_25950__$1;
(statearr_25982_26034[(2)] = inst_25944);

(statearr_25982_26034[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (17))){
var state_25950__$1 = state_25950;
var statearr_25983_26035 = state_25950__$1;
(statearr_25983_26035[(2)] = false);

(statearr_25983_26035[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (3))){
var state_25950__$1 = state_25950;
var statearr_25984_26036 = state_25950__$1;
(statearr_25984_26036[(2)] = false);

(statearr_25984_26036[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (12))){
var inst_25948 = (state_25950[(2)]);
var state_25950__$1 = state_25950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25950__$1,inst_25948);
} else {
if((state_val_25951 === (2))){
var inst_25852 = (state_25950[(8)]);
var inst_25857 = inst_25852.cljs$lang$protocol_mask$partition0$;
var inst_25858 = (inst_25857 & (64));
var inst_25859 = inst_25852.cljs$core$ISeq$;
var inst_25860 = (cljs.core.PROTOCOL_SENTINEL === inst_25859);
var inst_25861 = ((inst_25858) || (inst_25860));
var state_25950__$1 = state_25950;
if(cljs.core.truth_(inst_25861)){
var statearr_25985_26037 = state_25950__$1;
(statearr_25985_26037[(1)] = (5));

} else {
var statearr_25986_26038 = state_25950__$1;
(statearr_25986_26038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (23))){
var inst_25909 = (state_25950[(14)]);
var inst_25915 = (inst_25909 == null);
var state_25950__$1 = state_25950;
if(cljs.core.truth_(inst_25915)){
var statearr_25987_26039 = state_25950__$1;
(statearr_25987_26039[(1)] = (26));

} else {
var statearr_25988_26040 = state_25950__$1;
(statearr_25988_26040[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (35))){
var inst_25935 = (state_25950[(2)]);
var state_25950__$1 = state_25950;
if(cljs.core.truth_(inst_25935)){
var statearr_25989_26041 = state_25950__$1;
(statearr_25989_26041[(1)] = (36));

} else {
var statearr_25990_26042 = state_25950__$1;
(statearr_25990_26042[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (19))){
var inst_25877 = (state_25950[(7)]);
var inst_25897 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25877);
var state_25950__$1 = state_25950;
var statearr_25991_26043 = state_25950__$1;
(statearr_25991_26043[(2)] = inst_25897);

(statearr_25991_26043[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (11))){
var inst_25877 = (state_25950[(7)]);
var inst_25881 = (inst_25877 == null);
var inst_25882 = cljs.core.not.call(null,inst_25881);
var state_25950__$1 = state_25950;
if(inst_25882){
var statearr_25992_26044 = state_25950__$1;
(statearr_25992_26044[(1)] = (13));

} else {
var statearr_25993_26045 = state_25950__$1;
(statearr_25993_26045[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (9))){
var inst_25852 = (state_25950[(8)]);
var state_25950__$1 = state_25950;
var statearr_25994_26046 = state_25950__$1;
(statearr_25994_26046[(2)] = inst_25852);

(statearr_25994_26046[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (5))){
var state_25950__$1 = state_25950;
var statearr_25995_26047 = state_25950__$1;
(statearr_25995_26047[(2)] = true);

(statearr_25995_26047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (14))){
var state_25950__$1 = state_25950;
var statearr_25996_26048 = state_25950__$1;
(statearr_25996_26048[(2)] = false);

(statearr_25996_26048[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (26))){
var inst_25910 = (state_25950[(11)]);
var inst_25917 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25910);
var state_25950__$1 = state_25950;
var statearr_25997_26049 = state_25950__$1;
(statearr_25997_26049[(2)] = inst_25917);

(statearr_25997_26049[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (16))){
var state_25950__$1 = state_25950;
var statearr_25998_26050 = state_25950__$1;
(statearr_25998_26050[(2)] = true);

(statearr_25998_26050[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (38))){
var inst_25940 = (state_25950[(2)]);
var state_25950__$1 = state_25950;
var statearr_25999_26051 = state_25950__$1;
(statearr_25999_26051[(2)] = inst_25940);

(statearr_25999_26051[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (30))){
var inst_25902 = (state_25950[(13)]);
var inst_25901 = (state_25950[(10)]);
var inst_25910 = (state_25950[(11)]);
var inst_25927 = cljs.core.empty_QMARK_.call(null,inst_25901);
var inst_25928 = inst_25902.call(null,inst_25910);
var inst_25929 = cljs.core.not.call(null,inst_25928);
var inst_25930 = ((inst_25927) && (inst_25929));
var state_25950__$1 = state_25950;
var statearr_26000_26052 = state_25950__$1;
(statearr_26000_26052[(2)] = inst_25930);

(statearr_26000_26052[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (10))){
var inst_25852 = (state_25950[(8)]);
var inst_25873 = (state_25950[(2)]);
var inst_25874 = cljs.core.get.call(null,inst_25873,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25875 = cljs.core.get.call(null,inst_25873,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25876 = cljs.core.get.call(null,inst_25873,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25877 = inst_25852;
var state_25950__$1 = (function (){var statearr_26001 = state_25950;
(statearr_26001[(16)] = inst_25874);

(statearr_26001[(17)] = inst_25875);

(statearr_26001[(18)] = inst_25876);

(statearr_26001[(7)] = inst_25877);

return statearr_26001;
})();
var statearr_26002_26053 = state_25950__$1;
(statearr_26002_26053[(2)] = null);

(statearr_26002_26053[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (18))){
var inst_25892 = (state_25950[(2)]);
var state_25950__$1 = state_25950;
var statearr_26003_26054 = state_25950__$1;
(statearr_26003_26054[(2)] = inst_25892);

(statearr_26003_26054[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (37))){
var state_25950__$1 = state_25950;
var statearr_26004_26055 = state_25950__$1;
(statearr_26004_26055[(2)] = null);

(statearr_26004_26055[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (8))){
var inst_25852 = (state_25950[(8)]);
var inst_25870 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25852);
var state_25950__$1 = state_25950;
var statearr_26005_26056 = state_25950__$1;
(statearr_26005_26056[(2)] = inst_25870);

(statearr_26005_26056[(1)] = (10));


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
});})(c__24951__auto___26010,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24856__auto__,c__24951__auto___26010,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24857__auto__ = null;
var cljs$core$async$mix_$_state_machine__24857__auto____0 = (function (){
var statearr_26006 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26006[(0)] = cljs$core$async$mix_$_state_machine__24857__auto__);

(statearr_26006[(1)] = (1));

return statearr_26006;
});
var cljs$core$async$mix_$_state_machine__24857__auto____1 = (function (state_25950){
while(true){
var ret_value__24858__auto__ = (function (){try{while(true){
var result__24859__auto__ = switch__24856__auto__.call(null,state_25950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24859__auto__;
}
break;
}
}catch (e26007){if((e26007 instanceof Object)){
var ex__24860__auto__ = e26007;
var statearr_26008_26057 = state_25950;
(statearr_26008_26057[(5)] = ex__24860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26058 = state_25950;
state_25950 = G__26058;
continue;
} else {
return ret_value__24858__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24857__auto__ = function(state_25950){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24857__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24857__auto____1.call(this,state_25950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24857__auto____0;
cljs$core$async$mix_$_state_machine__24857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24857__auto____1;
return cljs$core$async$mix_$_state_machine__24857__auto__;
})()
;})(switch__24856__auto__,c__24951__auto___26010,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24953__auto__ = (function (){var statearr_26009 = f__24952__auto__.call(null);
(statearr_26009[(6)] = c__24951__auto___26010);

return statearr_26009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24953__auto__);
});})(c__24951__auto___26010,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__26060 = arguments.length;
switch (G__26060) {
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
var G__26064 = arguments.length;
switch (G__26064) {
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
return (function (p1__26062_SHARP_){
if(cljs.core.truth_(p1__26062_SHARP_.call(null,topic))){
return p1__26062_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26062_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26065 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26065 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26066){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26066 = meta26066;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26067,meta26066__$1){
var self__ = this;
var _26067__$1 = this;
return (new cljs.core.async.t_cljs$core$async26065(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26066__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26065.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26067){
var self__ = this;
var _26067__$1 = this;
return self__.meta26066;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26065.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26065.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26065.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26065.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26065.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26065.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26065.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26065.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26066","meta26066",-810905774,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26065.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26065.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26065";

cljs.core.async.t_cljs$core$async26065.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26065");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26065.
 */
cljs.core.async.__GT_t_cljs$core$async26065 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26065(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26066){
return (new cljs.core.async.t_cljs$core$async26065(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26066));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26065(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24951__auto___26185 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24951__auto___26185,mults,ensure_mult,p){
return (function (){
var f__24952__auto__ = (function (){var switch__24856__auto__ = ((function (c__24951__auto___26185,mults,ensure_mult,p){
return (function (state_26139){
var state_val_26140 = (state_26139[(1)]);
if((state_val_26140 === (7))){
var inst_26135 = (state_26139[(2)]);
var state_26139__$1 = state_26139;
var statearr_26141_26186 = state_26139__$1;
(statearr_26141_26186[(2)] = inst_26135);

(statearr_26141_26186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (20))){
var state_26139__$1 = state_26139;
var statearr_26142_26187 = state_26139__$1;
(statearr_26142_26187[(2)] = null);

(statearr_26142_26187[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (1))){
var state_26139__$1 = state_26139;
var statearr_26143_26188 = state_26139__$1;
(statearr_26143_26188[(2)] = null);

(statearr_26143_26188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (24))){
var inst_26118 = (state_26139[(7)]);
var inst_26127 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26118);
var state_26139__$1 = state_26139;
var statearr_26144_26189 = state_26139__$1;
(statearr_26144_26189[(2)] = inst_26127);

(statearr_26144_26189[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (4))){
var inst_26070 = (state_26139[(8)]);
var inst_26070__$1 = (state_26139[(2)]);
var inst_26071 = (inst_26070__$1 == null);
var state_26139__$1 = (function (){var statearr_26145 = state_26139;
(statearr_26145[(8)] = inst_26070__$1);

return statearr_26145;
})();
if(cljs.core.truth_(inst_26071)){
var statearr_26146_26190 = state_26139__$1;
(statearr_26146_26190[(1)] = (5));

} else {
var statearr_26147_26191 = state_26139__$1;
(statearr_26147_26191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (15))){
var inst_26112 = (state_26139[(2)]);
var state_26139__$1 = state_26139;
var statearr_26148_26192 = state_26139__$1;
(statearr_26148_26192[(2)] = inst_26112);

(statearr_26148_26192[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (21))){
var inst_26132 = (state_26139[(2)]);
var state_26139__$1 = (function (){var statearr_26149 = state_26139;
(statearr_26149[(9)] = inst_26132);

return statearr_26149;
})();
var statearr_26150_26193 = state_26139__$1;
(statearr_26150_26193[(2)] = null);

(statearr_26150_26193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (13))){
var inst_26094 = (state_26139[(10)]);
var inst_26096 = cljs.core.chunked_seq_QMARK_.call(null,inst_26094);
var state_26139__$1 = state_26139;
if(inst_26096){
var statearr_26151_26194 = state_26139__$1;
(statearr_26151_26194[(1)] = (16));

} else {
var statearr_26152_26195 = state_26139__$1;
(statearr_26152_26195[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (22))){
var inst_26124 = (state_26139[(2)]);
var state_26139__$1 = state_26139;
if(cljs.core.truth_(inst_26124)){
var statearr_26153_26196 = state_26139__$1;
(statearr_26153_26196[(1)] = (23));

} else {
var statearr_26154_26197 = state_26139__$1;
(statearr_26154_26197[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (6))){
var inst_26120 = (state_26139[(11)]);
var inst_26118 = (state_26139[(7)]);
var inst_26070 = (state_26139[(8)]);
var inst_26118__$1 = topic_fn.call(null,inst_26070);
var inst_26119 = cljs.core.deref.call(null,mults);
var inst_26120__$1 = cljs.core.get.call(null,inst_26119,inst_26118__$1);
var state_26139__$1 = (function (){var statearr_26155 = state_26139;
(statearr_26155[(11)] = inst_26120__$1);

(statearr_26155[(7)] = inst_26118__$1);

return statearr_26155;
})();
if(cljs.core.truth_(inst_26120__$1)){
var statearr_26156_26198 = state_26139__$1;
(statearr_26156_26198[(1)] = (19));

} else {
var statearr_26157_26199 = state_26139__$1;
(statearr_26157_26199[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (25))){
var inst_26129 = (state_26139[(2)]);
var state_26139__$1 = state_26139;
var statearr_26158_26200 = state_26139__$1;
(statearr_26158_26200[(2)] = inst_26129);

(statearr_26158_26200[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (17))){
var inst_26094 = (state_26139[(10)]);
var inst_26103 = cljs.core.first.call(null,inst_26094);
var inst_26104 = cljs.core.async.muxch_STAR_.call(null,inst_26103);
var inst_26105 = cljs.core.async.close_BANG_.call(null,inst_26104);
var inst_26106 = cljs.core.next.call(null,inst_26094);
var inst_26080 = inst_26106;
var inst_26081 = null;
var inst_26082 = (0);
var inst_26083 = (0);
var state_26139__$1 = (function (){var statearr_26159 = state_26139;
(statearr_26159[(12)] = inst_26105);

(statearr_26159[(13)] = inst_26082);

(statearr_26159[(14)] = inst_26081);

(statearr_26159[(15)] = inst_26083);

(statearr_26159[(16)] = inst_26080);

return statearr_26159;
})();
var statearr_26160_26201 = state_26139__$1;
(statearr_26160_26201[(2)] = null);

(statearr_26160_26201[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (3))){
var inst_26137 = (state_26139[(2)]);
var state_26139__$1 = state_26139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26139__$1,inst_26137);
} else {
if((state_val_26140 === (12))){
var inst_26114 = (state_26139[(2)]);
var state_26139__$1 = state_26139;
var statearr_26161_26202 = state_26139__$1;
(statearr_26161_26202[(2)] = inst_26114);

(statearr_26161_26202[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (2))){
var state_26139__$1 = state_26139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26139__$1,(4),ch);
} else {
if((state_val_26140 === (23))){
var state_26139__$1 = state_26139;
var statearr_26162_26203 = state_26139__$1;
(statearr_26162_26203[(2)] = null);

(statearr_26162_26203[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (19))){
var inst_26120 = (state_26139[(11)]);
var inst_26070 = (state_26139[(8)]);
var inst_26122 = cljs.core.async.muxch_STAR_.call(null,inst_26120);
var state_26139__$1 = state_26139;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26139__$1,(22),inst_26122,inst_26070);
} else {
if((state_val_26140 === (11))){
var inst_26094 = (state_26139[(10)]);
var inst_26080 = (state_26139[(16)]);
var inst_26094__$1 = cljs.core.seq.call(null,inst_26080);
var state_26139__$1 = (function (){var statearr_26163 = state_26139;
(statearr_26163[(10)] = inst_26094__$1);

return statearr_26163;
})();
if(inst_26094__$1){
var statearr_26164_26204 = state_26139__$1;
(statearr_26164_26204[(1)] = (13));

} else {
var statearr_26165_26205 = state_26139__$1;
(statearr_26165_26205[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (9))){
var inst_26116 = (state_26139[(2)]);
var state_26139__$1 = state_26139;
var statearr_26166_26206 = state_26139__$1;
(statearr_26166_26206[(2)] = inst_26116);

(statearr_26166_26206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (5))){
var inst_26077 = cljs.core.deref.call(null,mults);
var inst_26078 = cljs.core.vals.call(null,inst_26077);
var inst_26079 = cljs.core.seq.call(null,inst_26078);
var inst_26080 = inst_26079;
var inst_26081 = null;
var inst_26082 = (0);
var inst_26083 = (0);
var state_26139__$1 = (function (){var statearr_26167 = state_26139;
(statearr_26167[(13)] = inst_26082);

(statearr_26167[(14)] = inst_26081);

(statearr_26167[(15)] = inst_26083);

(statearr_26167[(16)] = inst_26080);

return statearr_26167;
})();
var statearr_26168_26207 = state_26139__$1;
(statearr_26168_26207[(2)] = null);

(statearr_26168_26207[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (14))){
var state_26139__$1 = state_26139;
var statearr_26172_26208 = state_26139__$1;
(statearr_26172_26208[(2)] = null);

(statearr_26172_26208[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (16))){
var inst_26094 = (state_26139[(10)]);
var inst_26098 = cljs.core.chunk_first.call(null,inst_26094);
var inst_26099 = cljs.core.chunk_rest.call(null,inst_26094);
var inst_26100 = cljs.core.count.call(null,inst_26098);
var inst_26080 = inst_26099;
var inst_26081 = inst_26098;
var inst_26082 = inst_26100;
var inst_26083 = (0);
var state_26139__$1 = (function (){var statearr_26173 = state_26139;
(statearr_26173[(13)] = inst_26082);

(statearr_26173[(14)] = inst_26081);

(statearr_26173[(15)] = inst_26083);

(statearr_26173[(16)] = inst_26080);

return statearr_26173;
})();
var statearr_26174_26209 = state_26139__$1;
(statearr_26174_26209[(2)] = null);

(statearr_26174_26209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (10))){
var inst_26082 = (state_26139[(13)]);
var inst_26081 = (state_26139[(14)]);
var inst_26083 = (state_26139[(15)]);
var inst_26080 = (state_26139[(16)]);
var inst_26088 = cljs.core._nth.call(null,inst_26081,inst_26083);
var inst_26089 = cljs.core.async.muxch_STAR_.call(null,inst_26088);
var inst_26090 = cljs.core.async.close_BANG_.call(null,inst_26089);
var inst_26091 = (inst_26083 + (1));
var tmp26169 = inst_26082;
var tmp26170 = inst_26081;
var tmp26171 = inst_26080;
var inst_26080__$1 = tmp26171;
var inst_26081__$1 = tmp26170;
var inst_26082__$1 = tmp26169;
var inst_26083__$1 = inst_26091;
var state_26139__$1 = (function (){var statearr_26175 = state_26139;
(statearr_26175[(17)] = inst_26090);

(statearr_26175[(13)] = inst_26082__$1);

(statearr_26175[(14)] = inst_26081__$1);

(statearr_26175[(15)] = inst_26083__$1);

(statearr_26175[(16)] = inst_26080__$1);

return statearr_26175;
})();
var statearr_26176_26210 = state_26139__$1;
(statearr_26176_26210[(2)] = null);

(statearr_26176_26210[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (18))){
var inst_26109 = (state_26139[(2)]);
var state_26139__$1 = state_26139;
var statearr_26177_26211 = state_26139__$1;
(statearr_26177_26211[(2)] = inst_26109);

(statearr_26177_26211[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (8))){
var inst_26082 = (state_26139[(13)]);
var inst_26083 = (state_26139[(15)]);
var inst_26085 = (inst_26083 < inst_26082);
var inst_26086 = inst_26085;
var state_26139__$1 = state_26139;
if(cljs.core.truth_(inst_26086)){
var statearr_26178_26212 = state_26139__$1;
(statearr_26178_26212[(1)] = (10));

} else {
var statearr_26179_26213 = state_26139__$1;
(statearr_26179_26213[(1)] = (11));

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
});})(c__24951__auto___26185,mults,ensure_mult,p))
;
return ((function (switch__24856__auto__,c__24951__auto___26185,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24857__auto__ = null;
var cljs$core$async$state_machine__24857__auto____0 = (function (){
var statearr_26180 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26180[(0)] = cljs$core$async$state_machine__24857__auto__);

(statearr_26180[(1)] = (1));

return statearr_26180;
});
var cljs$core$async$state_machine__24857__auto____1 = (function (state_26139){
while(true){
var ret_value__24858__auto__ = (function (){try{while(true){
var result__24859__auto__ = switch__24856__auto__.call(null,state_26139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24859__auto__;
}
break;
}
}catch (e26181){if((e26181 instanceof Object)){
var ex__24860__auto__ = e26181;
var statearr_26182_26214 = state_26139;
(statearr_26182_26214[(5)] = ex__24860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26215 = state_26139;
state_26139 = G__26215;
continue;
} else {
return ret_value__24858__auto__;
}
break;
}
});
cljs$core$async$state_machine__24857__auto__ = function(state_26139){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24857__auto____1.call(this,state_26139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24857__auto____0;
cljs$core$async$state_machine__24857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24857__auto____1;
return cljs$core$async$state_machine__24857__auto__;
})()
;})(switch__24856__auto__,c__24951__auto___26185,mults,ensure_mult,p))
})();
var state__24953__auto__ = (function (){var statearr_26183 = f__24952__auto__.call(null);
(statearr_26183[(6)] = c__24951__auto___26185);

return statearr_26183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24953__auto__);
});})(c__24951__auto___26185,mults,ensure_mult,p))
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
var G__26217 = arguments.length;
switch (G__26217) {
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
var G__26220 = arguments.length;
switch (G__26220) {
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
var G__26223 = arguments.length;
switch (G__26223) {
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
var c__24951__auto___26290 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24951__auto___26290,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24952__auto__ = (function (){var switch__24856__auto__ = ((function (c__24951__auto___26290,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26262){
var state_val_26263 = (state_26262[(1)]);
if((state_val_26263 === (7))){
var state_26262__$1 = state_26262;
var statearr_26264_26291 = state_26262__$1;
(statearr_26264_26291[(2)] = null);

(statearr_26264_26291[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26263 === (1))){
var state_26262__$1 = state_26262;
var statearr_26265_26292 = state_26262__$1;
(statearr_26265_26292[(2)] = null);

(statearr_26265_26292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26263 === (4))){
var inst_26226 = (state_26262[(7)]);
var inst_26228 = (inst_26226 < cnt);
var state_26262__$1 = state_26262;
if(cljs.core.truth_(inst_26228)){
var statearr_26266_26293 = state_26262__$1;
(statearr_26266_26293[(1)] = (6));

} else {
var statearr_26267_26294 = state_26262__$1;
(statearr_26267_26294[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26263 === (15))){
var inst_26258 = (state_26262[(2)]);
var state_26262__$1 = state_26262;
var statearr_26268_26295 = state_26262__$1;
(statearr_26268_26295[(2)] = inst_26258);

(statearr_26268_26295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26263 === (13))){
var inst_26251 = cljs.core.async.close_BANG_.call(null,out);
var state_26262__$1 = state_26262;
var statearr_26269_26296 = state_26262__$1;
(statearr_26269_26296[(2)] = inst_26251);

(statearr_26269_26296[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26263 === (6))){
var state_26262__$1 = state_26262;
var statearr_26270_26297 = state_26262__$1;
(statearr_26270_26297[(2)] = null);

(statearr_26270_26297[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26263 === (3))){
var inst_26260 = (state_26262[(2)]);
var state_26262__$1 = state_26262;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26262__$1,inst_26260);
} else {
if((state_val_26263 === (12))){
var inst_26248 = (state_26262[(8)]);
var inst_26248__$1 = (state_26262[(2)]);
var inst_26249 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26248__$1);
var state_26262__$1 = (function (){var statearr_26271 = state_26262;
(statearr_26271[(8)] = inst_26248__$1);

return statearr_26271;
})();
if(cljs.core.truth_(inst_26249)){
var statearr_26272_26298 = state_26262__$1;
(statearr_26272_26298[(1)] = (13));

} else {
var statearr_26273_26299 = state_26262__$1;
(statearr_26273_26299[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26263 === (2))){
var inst_26225 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26226 = (0);
var state_26262__$1 = (function (){var statearr_26274 = state_26262;
(statearr_26274[(9)] = inst_26225);

(statearr_26274[(7)] = inst_26226);

return statearr_26274;
})();
var statearr_26275_26300 = state_26262__$1;
(statearr_26275_26300[(2)] = null);

(statearr_26275_26300[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26263 === (11))){
var inst_26226 = (state_26262[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26262,(10),Object,null,(9));
var inst_26235 = chs__$1.call(null,inst_26226);
var inst_26236 = done.call(null,inst_26226);
var inst_26237 = cljs.core.async.take_BANG_.call(null,inst_26235,inst_26236);
var state_26262__$1 = state_26262;
var statearr_26276_26301 = state_26262__$1;
(statearr_26276_26301[(2)] = inst_26237);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26262__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26263 === (9))){
var inst_26226 = (state_26262[(7)]);
var inst_26239 = (state_26262[(2)]);
var inst_26240 = (inst_26226 + (1));
var inst_26226__$1 = inst_26240;
var state_26262__$1 = (function (){var statearr_26277 = state_26262;
(statearr_26277[(10)] = inst_26239);

(statearr_26277[(7)] = inst_26226__$1);

return statearr_26277;
})();
var statearr_26278_26302 = state_26262__$1;
(statearr_26278_26302[(2)] = null);

(statearr_26278_26302[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26263 === (5))){
var inst_26246 = (state_26262[(2)]);
var state_26262__$1 = (function (){var statearr_26279 = state_26262;
(statearr_26279[(11)] = inst_26246);

return statearr_26279;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26262__$1,(12),dchan);
} else {
if((state_val_26263 === (14))){
var inst_26248 = (state_26262[(8)]);
var inst_26253 = cljs.core.apply.call(null,f,inst_26248);
var state_26262__$1 = state_26262;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26262__$1,(16),out,inst_26253);
} else {
if((state_val_26263 === (16))){
var inst_26255 = (state_26262[(2)]);
var state_26262__$1 = (function (){var statearr_26280 = state_26262;
(statearr_26280[(12)] = inst_26255);

return statearr_26280;
})();
var statearr_26281_26303 = state_26262__$1;
(statearr_26281_26303[(2)] = null);

(statearr_26281_26303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26263 === (10))){
var inst_26230 = (state_26262[(2)]);
var inst_26231 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26262__$1 = (function (){var statearr_26282 = state_26262;
(statearr_26282[(13)] = inst_26230);

return statearr_26282;
})();
var statearr_26283_26304 = state_26262__$1;
(statearr_26283_26304[(2)] = inst_26231);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26262__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26263 === (8))){
var inst_26244 = (state_26262[(2)]);
var state_26262__$1 = state_26262;
var statearr_26284_26305 = state_26262__$1;
(statearr_26284_26305[(2)] = inst_26244);

(statearr_26284_26305[(1)] = (5));


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
});})(c__24951__auto___26290,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24856__auto__,c__24951__auto___26290,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24857__auto__ = null;
var cljs$core$async$state_machine__24857__auto____0 = (function (){
var statearr_26285 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26285[(0)] = cljs$core$async$state_machine__24857__auto__);

(statearr_26285[(1)] = (1));

return statearr_26285;
});
var cljs$core$async$state_machine__24857__auto____1 = (function (state_26262){
while(true){
var ret_value__24858__auto__ = (function (){try{while(true){
var result__24859__auto__ = switch__24856__auto__.call(null,state_26262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24859__auto__;
}
break;
}
}catch (e26286){if((e26286 instanceof Object)){
var ex__24860__auto__ = e26286;
var statearr_26287_26306 = state_26262;
(statearr_26287_26306[(5)] = ex__24860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26286;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26307 = state_26262;
state_26262 = G__26307;
continue;
} else {
return ret_value__24858__auto__;
}
break;
}
});
cljs$core$async$state_machine__24857__auto__ = function(state_26262){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24857__auto____1.call(this,state_26262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24857__auto____0;
cljs$core$async$state_machine__24857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24857__auto____1;
return cljs$core$async$state_machine__24857__auto__;
})()
;})(switch__24856__auto__,c__24951__auto___26290,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24953__auto__ = (function (){var statearr_26288 = f__24952__auto__.call(null);
(statearr_26288[(6)] = c__24951__auto___26290);

return statearr_26288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24953__auto__);
});})(c__24951__auto___26290,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__26310 = arguments.length;
switch (G__26310) {
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
var c__24951__auto___26364 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24951__auto___26364,out){
return (function (){
var f__24952__auto__ = (function (){var switch__24856__auto__ = ((function (c__24951__auto___26364,out){
return (function (state_26342){
var state_val_26343 = (state_26342[(1)]);
if((state_val_26343 === (7))){
var inst_26322 = (state_26342[(7)]);
var inst_26321 = (state_26342[(8)]);
var inst_26321__$1 = (state_26342[(2)]);
var inst_26322__$1 = cljs.core.nth.call(null,inst_26321__$1,(0),null);
var inst_26323 = cljs.core.nth.call(null,inst_26321__$1,(1),null);
var inst_26324 = (inst_26322__$1 == null);
var state_26342__$1 = (function (){var statearr_26344 = state_26342;
(statearr_26344[(9)] = inst_26323);

(statearr_26344[(7)] = inst_26322__$1);

(statearr_26344[(8)] = inst_26321__$1);

return statearr_26344;
})();
if(cljs.core.truth_(inst_26324)){
var statearr_26345_26365 = state_26342__$1;
(statearr_26345_26365[(1)] = (8));

} else {
var statearr_26346_26366 = state_26342__$1;
(statearr_26346_26366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26343 === (1))){
var inst_26311 = cljs.core.vec.call(null,chs);
var inst_26312 = inst_26311;
var state_26342__$1 = (function (){var statearr_26347 = state_26342;
(statearr_26347[(10)] = inst_26312);

return statearr_26347;
})();
var statearr_26348_26367 = state_26342__$1;
(statearr_26348_26367[(2)] = null);

(statearr_26348_26367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26343 === (4))){
var inst_26312 = (state_26342[(10)]);
var state_26342__$1 = state_26342;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26342__$1,(7),inst_26312);
} else {
if((state_val_26343 === (6))){
var inst_26338 = (state_26342[(2)]);
var state_26342__$1 = state_26342;
var statearr_26349_26368 = state_26342__$1;
(statearr_26349_26368[(2)] = inst_26338);

(statearr_26349_26368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26343 === (3))){
var inst_26340 = (state_26342[(2)]);
var state_26342__$1 = state_26342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26342__$1,inst_26340);
} else {
if((state_val_26343 === (2))){
var inst_26312 = (state_26342[(10)]);
var inst_26314 = cljs.core.count.call(null,inst_26312);
var inst_26315 = (inst_26314 > (0));
var state_26342__$1 = state_26342;
if(cljs.core.truth_(inst_26315)){
var statearr_26351_26369 = state_26342__$1;
(statearr_26351_26369[(1)] = (4));

} else {
var statearr_26352_26370 = state_26342__$1;
(statearr_26352_26370[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26343 === (11))){
var inst_26312 = (state_26342[(10)]);
var inst_26331 = (state_26342[(2)]);
var tmp26350 = inst_26312;
var inst_26312__$1 = tmp26350;
var state_26342__$1 = (function (){var statearr_26353 = state_26342;
(statearr_26353[(11)] = inst_26331);

(statearr_26353[(10)] = inst_26312__$1);

return statearr_26353;
})();
var statearr_26354_26371 = state_26342__$1;
(statearr_26354_26371[(2)] = null);

(statearr_26354_26371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26343 === (9))){
var inst_26322 = (state_26342[(7)]);
var state_26342__$1 = state_26342;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26342__$1,(11),out,inst_26322);
} else {
if((state_val_26343 === (5))){
var inst_26336 = cljs.core.async.close_BANG_.call(null,out);
var state_26342__$1 = state_26342;
var statearr_26355_26372 = state_26342__$1;
(statearr_26355_26372[(2)] = inst_26336);

(statearr_26355_26372[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26343 === (10))){
var inst_26334 = (state_26342[(2)]);
var state_26342__$1 = state_26342;
var statearr_26356_26373 = state_26342__$1;
(statearr_26356_26373[(2)] = inst_26334);

(statearr_26356_26373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26343 === (8))){
var inst_26323 = (state_26342[(9)]);
var inst_26322 = (state_26342[(7)]);
var inst_26312 = (state_26342[(10)]);
var inst_26321 = (state_26342[(8)]);
var inst_26326 = (function (){var cs = inst_26312;
var vec__26317 = inst_26321;
var v = inst_26322;
var c = inst_26323;
return ((function (cs,vec__26317,v,c,inst_26323,inst_26322,inst_26312,inst_26321,state_val_26343,c__24951__auto___26364,out){
return (function (p1__26308_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26308_SHARP_);
});
;})(cs,vec__26317,v,c,inst_26323,inst_26322,inst_26312,inst_26321,state_val_26343,c__24951__auto___26364,out))
})();
var inst_26327 = cljs.core.filterv.call(null,inst_26326,inst_26312);
var inst_26312__$1 = inst_26327;
var state_26342__$1 = (function (){var statearr_26357 = state_26342;
(statearr_26357[(10)] = inst_26312__$1);

return statearr_26357;
})();
var statearr_26358_26374 = state_26342__$1;
(statearr_26358_26374[(2)] = null);

(statearr_26358_26374[(1)] = (2));


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
});})(c__24951__auto___26364,out))
;
return ((function (switch__24856__auto__,c__24951__auto___26364,out){
return (function() {
var cljs$core$async$state_machine__24857__auto__ = null;
var cljs$core$async$state_machine__24857__auto____0 = (function (){
var statearr_26359 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26359[(0)] = cljs$core$async$state_machine__24857__auto__);

(statearr_26359[(1)] = (1));

return statearr_26359;
});
var cljs$core$async$state_machine__24857__auto____1 = (function (state_26342){
while(true){
var ret_value__24858__auto__ = (function (){try{while(true){
var result__24859__auto__ = switch__24856__auto__.call(null,state_26342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24859__auto__;
}
break;
}
}catch (e26360){if((e26360 instanceof Object)){
var ex__24860__auto__ = e26360;
var statearr_26361_26375 = state_26342;
(statearr_26361_26375[(5)] = ex__24860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26376 = state_26342;
state_26342 = G__26376;
continue;
} else {
return ret_value__24858__auto__;
}
break;
}
});
cljs$core$async$state_machine__24857__auto__ = function(state_26342){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24857__auto____1.call(this,state_26342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24857__auto____0;
cljs$core$async$state_machine__24857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24857__auto____1;
return cljs$core$async$state_machine__24857__auto__;
})()
;})(switch__24856__auto__,c__24951__auto___26364,out))
})();
var state__24953__auto__ = (function (){var statearr_26362 = f__24952__auto__.call(null);
(statearr_26362[(6)] = c__24951__auto___26364);

return statearr_26362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24953__auto__);
});})(c__24951__auto___26364,out))
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
var G__26378 = arguments.length;
switch (G__26378) {
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
var c__24951__auto___26423 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24951__auto___26423,out){
return (function (){
var f__24952__auto__ = (function (){var switch__24856__auto__ = ((function (c__24951__auto___26423,out){
return (function (state_26402){
var state_val_26403 = (state_26402[(1)]);
if((state_val_26403 === (7))){
var inst_26384 = (state_26402[(7)]);
var inst_26384__$1 = (state_26402[(2)]);
var inst_26385 = (inst_26384__$1 == null);
var inst_26386 = cljs.core.not.call(null,inst_26385);
var state_26402__$1 = (function (){var statearr_26404 = state_26402;
(statearr_26404[(7)] = inst_26384__$1);

return statearr_26404;
})();
if(inst_26386){
var statearr_26405_26424 = state_26402__$1;
(statearr_26405_26424[(1)] = (8));

} else {
var statearr_26406_26425 = state_26402__$1;
(statearr_26406_26425[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26403 === (1))){
var inst_26379 = (0);
var state_26402__$1 = (function (){var statearr_26407 = state_26402;
(statearr_26407[(8)] = inst_26379);

return statearr_26407;
})();
var statearr_26408_26426 = state_26402__$1;
(statearr_26408_26426[(2)] = null);

(statearr_26408_26426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26403 === (4))){
var state_26402__$1 = state_26402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26402__$1,(7),ch);
} else {
if((state_val_26403 === (6))){
var inst_26397 = (state_26402[(2)]);
var state_26402__$1 = state_26402;
var statearr_26409_26427 = state_26402__$1;
(statearr_26409_26427[(2)] = inst_26397);

(statearr_26409_26427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26403 === (3))){
var inst_26399 = (state_26402[(2)]);
var inst_26400 = cljs.core.async.close_BANG_.call(null,out);
var state_26402__$1 = (function (){var statearr_26410 = state_26402;
(statearr_26410[(9)] = inst_26399);

return statearr_26410;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26402__$1,inst_26400);
} else {
if((state_val_26403 === (2))){
var inst_26379 = (state_26402[(8)]);
var inst_26381 = (inst_26379 < n);
var state_26402__$1 = state_26402;
if(cljs.core.truth_(inst_26381)){
var statearr_26411_26428 = state_26402__$1;
(statearr_26411_26428[(1)] = (4));

} else {
var statearr_26412_26429 = state_26402__$1;
(statearr_26412_26429[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26403 === (11))){
var inst_26379 = (state_26402[(8)]);
var inst_26389 = (state_26402[(2)]);
var inst_26390 = (inst_26379 + (1));
var inst_26379__$1 = inst_26390;
var state_26402__$1 = (function (){var statearr_26413 = state_26402;
(statearr_26413[(8)] = inst_26379__$1);

(statearr_26413[(10)] = inst_26389);

return statearr_26413;
})();
var statearr_26414_26430 = state_26402__$1;
(statearr_26414_26430[(2)] = null);

(statearr_26414_26430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26403 === (9))){
var state_26402__$1 = state_26402;
var statearr_26415_26431 = state_26402__$1;
(statearr_26415_26431[(2)] = null);

(statearr_26415_26431[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26403 === (5))){
var state_26402__$1 = state_26402;
var statearr_26416_26432 = state_26402__$1;
(statearr_26416_26432[(2)] = null);

(statearr_26416_26432[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26403 === (10))){
var inst_26394 = (state_26402[(2)]);
var state_26402__$1 = state_26402;
var statearr_26417_26433 = state_26402__$1;
(statearr_26417_26433[(2)] = inst_26394);

(statearr_26417_26433[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26403 === (8))){
var inst_26384 = (state_26402[(7)]);
var state_26402__$1 = state_26402;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26402__$1,(11),out,inst_26384);
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
});})(c__24951__auto___26423,out))
;
return ((function (switch__24856__auto__,c__24951__auto___26423,out){
return (function() {
var cljs$core$async$state_machine__24857__auto__ = null;
var cljs$core$async$state_machine__24857__auto____0 = (function (){
var statearr_26418 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26418[(0)] = cljs$core$async$state_machine__24857__auto__);

(statearr_26418[(1)] = (1));

return statearr_26418;
});
var cljs$core$async$state_machine__24857__auto____1 = (function (state_26402){
while(true){
var ret_value__24858__auto__ = (function (){try{while(true){
var result__24859__auto__ = switch__24856__auto__.call(null,state_26402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24859__auto__;
}
break;
}
}catch (e26419){if((e26419 instanceof Object)){
var ex__24860__auto__ = e26419;
var statearr_26420_26434 = state_26402;
(statearr_26420_26434[(5)] = ex__24860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26435 = state_26402;
state_26402 = G__26435;
continue;
} else {
return ret_value__24858__auto__;
}
break;
}
});
cljs$core$async$state_machine__24857__auto__ = function(state_26402){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24857__auto____1.call(this,state_26402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24857__auto____0;
cljs$core$async$state_machine__24857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24857__auto____1;
return cljs$core$async$state_machine__24857__auto__;
})()
;})(switch__24856__auto__,c__24951__auto___26423,out))
})();
var state__24953__auto__ = (function (){var statearr_26421 = f__24952__auto__.call(null);
(statearr_26421[(6)] = c__24951__auto___26423);

return statearr_26421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24953__auto__);
});})(c__24951__auto___26423,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26437 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26437 = (function (f,ch,meta26438){
this.f = f;
this.ch = ch;
this.meta26438 = meta26438;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26439,meta26438__$1){
var self__ = this;
var _26439__$1 = this;
return (new cljs.core.async.t_cljs$core$async26437(self__.f,self__.ch,meta26438__$1));
});

cljs.core.async.t_cljs$core$async26437.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26439){
var self__ = this;
var _26439__$1 = this;
return self__.meta26438;
});

cljs.core.async.t_cljs$core$async26437.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26437.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26437.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26437.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26437.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26440 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26440 = (function (f,ch,meta26438,_,fn1,meta26441){
this.f = f;
this.ch = ch;
this.meta26438 = meta26438;
this._ = _;
this.fn1 = fn1;
this.meta26441 = meta26441;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26442,meta26441__$1){
var self__ = this;
var _26442__$1 = this;
return (new cljs.core.async.t_cljs$core$async26440(self__.f,self__.ch,self__.meta26438,self__._,self__.fn1,meta26441__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26440.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26442){
var self__ = this;
var _26442__$1 = this;
return self__.meta26441;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26440.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26440.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26440.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26440.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26436_SHARP_){
return f1.call(null,(((p1__26436_SHARP_ == null))?null:self__.f.call(null,p1__26436_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26440.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26438","meta26438",1988999829,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26437","cljs.core.async/t_cljs$core$async26437",-844615081,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26441","meta26441",-1960589470,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26440.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26440.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26440";

cljs.core.async.t_cljs$core$async26440.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26440");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26440.
 */
cljs.core.async.__GT_t_cljs$core$async26440 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26440(f__$1,ch__$1,meta26438__$1,___$2,fn1__$1,meta26441){
return (new cljs.core.async.t_cljs$core$async26440(f__$1,ch__$1,meta26438__$1,___$2,fn1__$1,meta26441));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26440(self__.f,self__.ch,self__.meta26438,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async26437.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26437.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26437.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26438","meta26438",1988999829,null)], null);
});

cljs.core.async.t_cljs$core$async26437.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26437.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26437";

cljs.core.async.t_cljs$core$async26437.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26437");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26437.
 */
cljs.core.async.__GT_t_cljs$core$async26437 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26437(f__$1,ch__$1,meta26438){
return (new cljs.core.async.t_cljs$core$async26437(f__$1,ch__$1,meta26438));
});

}

return (new cljs.core.async.t_cljs$core$async26437(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26443 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26443 = (function (f,ch,meta26444){
this.f = f;
this.ch = ch;
this.meta26444 = meta26444;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26445,meta26444__$1){
var self__ = this;
var _26445__$1 = this;
return (new cljs.core.async.t_cljs$core$async26443(self__.f,self__.ch,meta26444__$1));
});

cljs.core.async.t_cljs$core$async26443.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26445){
var self__ = this;
var _26445__$1 = this;
return self__.meta26444;
});

cljs.core.async.t_cljs$core$async26443.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26443.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26443.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26443.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26443.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26443.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26443.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26444","meta26444",-417838548,null)], null);
});

cljs.core.async.t_cljs$core$async26443.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26443.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26443";

cljs.core.async.t_cljs$core$async26443.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26443");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26443.
 */
cljs.core.async.__GT_t_cljs$core$async26443 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26443(f__$1,ch__$1,meta26444){
return (new cljs.core.async.t_cljs$core$async26443(f__$1,ch__$1,meta26444));
});

}

return (new cljs.core.async.t_cljs$core$async26443(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26446 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26446 = (function (p,ch,meta26447){
this.p = p;
this.ch = ch;
this.meta26447 = meta26447;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26448,meta26447__$1){
var self__ = this;
var _26448__$1 = this;
return (new cljs.core.async.t_cljs$core$async26446(self__.p,self__.ch,meta26447__$1));
});

cljs.core.async.t_cljs$core$async26446.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26448){
var self__ = this;
var _26448__$1 = this;
return self__.meta26447;
});

cljs.core.async.t_cljs$core$async26446.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26446.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26446.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26446.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26446.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26446.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26446.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26446.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26447","meta26447",1641227790,null)], null);
});

cljs.core.async.t_cljs$core$async26446.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26446.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26446";

cljs.core.async.t_cljs$core$async26446.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26446");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26446.
 */
cljs.core.async.__GT_t_cljs$core$async26446 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26446(p__$1,ch__$1,meta26447){
return (new cljs.core.async.t_cljs$core$async26446(p__$1,ch__$1,meta26447));
});

}

return (new cljs.core.async.t_cljs$core$async26446(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__26450 = arguments.length;
switch (G__26450) {
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
var c__24951__auto___26490 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24951__auto___26490,out){
return (function (){
var f__24952__auto__ = (function (){var switch__24856__auto__ = ((function (c__24951__auto___26490,out){
return (function (state_26471){
var state_val_26472 = (state_26471[(1)]);
if((state_val_26472 === (7))){
var inst_26467 = (state_26471[(2)]);
var state_26471__$1 = state_26471;
var statearr_26473_26491 = state_26471__$1;
(statearr_26473_26491[(2)] = inst_26467);

(statearr_26473_26491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (1))){
var state_26471__$1 = state_26471;
var statearr_26474_26492 = state_26471__$1;
(statearr_26474_26492[(2)] = null);

(statearr_26474_26492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (4))){
var inst_26453 = (state_26471[(7)]);
var inst_26453__$1 = (state_26471[(2)]);
var inst_26454 = (inst_26453__$1 == null);
var state_26471__$1 = (function (){var statearr_26475 = state_26471;
(statearr_26475[(7)] = inst_26453__$1);

return statearr_26475;
})();
if(cljs.core.truth_(inst_26454)){
var statearr_26476_26493 = state_26471__$1;
(statearr_26476_26493[(1)] = (5));

} else {
var statearr_26477_26494 = state_26471__$1;
(statearr_26477_26494[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (6))){
var inst_26453 = (state_26471[(7)]);
var inst_26458 = p.call(null,inst_26453);
var state_26471__$1 = state_26471;
if(cljs.core.truth_(inst_26458)){
var statearr_26478_26495 = state_26471__$1;
(statearr_26478_26495[(1)] = (8));

} else {
var statearr_26479_26496 = state_26471__$1;
(statearr_26479_26496[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (3))){
var inst_26469 = (state_26471[(2)]);
var state_26471__$1 = state_26471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26471__$1,inst_26469);
} else {
if((state_val_26472 === (2))){
var state_26471__$1 = state_26471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26471__$1,(4),ch);
} else {
if((state_val_26472 === (11))){
var inst_26461 = (state_26471[(2)]);
var state_26471__$1 = state_26471;
var statearr_26480_26497 = state_26471__$1;
(statearr_26480_26497[(2)] = inst_26461);

(statearr_26480_26497[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (9))){
var state_26471__$1 = state_26471;
var statearr_26481_26498 = state_26471__$1;
(statearr_26481_26498[(2)] = null);

(statearr_26481_26498[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (5))){
var inst_26456 = cljs.core.async.close_BANG_.call(null,out);
var state_26471__$1 = state_26471;
var statearr_26482_26499 = state_26471__$1;
(statearr_26482_26499[(2)] = inst_26456);

(statearr_26482_26499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (10))){
var inst_26464 = (state_26471[(2)]);
var state_26471__$1 = (function (){var statearr_26483 = state_26471;
(statearr_26483[(8)] = inst_26464);

return statearr_26483;
})();
var statearr_26484_26500 = state_26471__$1;
(statearr_26484_26500[(2)] = null);

(statearr_26484_26500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (8))){
var inst_26453 = (state_26471[(7)]);
var state_26471__$1 = state_26471;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26471__$1,(11),out,inst_26453);
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
});})(c__24951__auto___26490,out))
;
return ((function (switch__24856__auto__,c__24951__auto___26490,out){
return (function() {
var cljs$core$async$state_machine__24857__auto__ = null;
var cljs$core$async$state_machine__24857__auto____0 = (function (){
var statearr_26485 = [null,null,null,null,null,null,null,null,null];
(statearr_26485[(0)] = cljs$core$async$state_machine__24857__auto__);

(statearr_26485[(1)] = (1));

return statearr_26485;
});
var cljs$core$async$state_machine__24857__auto____1 = (function (state_26471){
while(true){
var ret_value__24858__auto__ = (function (){try{while(true){
var result__24859__auto__ = switch__24856__auto__.call(null,state_26471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24859__auto__;
}
break;
}
}catch (e26486){if((e26486 instanceof Object)){
var ex__24860__auto__ = e26486;
var statearr_26487_26501 = state_26471;
(statearr_26487_26501[(5)] = ex__24860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26502 = state_26471;
state_26471 = G__26502;
continue;
} else {
return ret_value__24858__auto__;
}
break;
}
});
cljs$core$async$state_machine__24857__auto__ = function(state_26471){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24857__auto____1.call(this,state_26471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24857__auto____0;
cljs$core$async$state_machine__24857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24857__auto____1;
return cljs$core$async$state_machine__24857__auto__;
})()
;})(switch__24856__auto__,c__24951__auto___26490,out))
})();
var state__24953__auto__ = (function (){var statearr_26488 = f__24952__auto__.call(null);
(statearr_26488[(6)] = c__24951__auto___26490);

return statearr_26488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24953__auto__);
});})(c__24951__auto___26490,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__26504 = arguments.length;
switch (G__26504) {
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
var c__24951__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24951__auto__){
return (function (){
var f__24952__auto__ = (function (){var switch__24856__auto__ = ((function (c__24951__auto__){
return (function (state_26567){
var state_val_26568 = (state_26567[(1)]);
if((state_val_26568 === (7))){
var inst_26563 = (state_26567[(2)]);
var state_26567__$1 = state_26567;
var statearr_26569_26607 = state_26567__$1;
(statearr_26569_26607[(2)] = inst_26563);

(statearr_26569_26607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (20))){
var inst_26533 = (state_26567[(7)]);
var inst_26544 = (state_26567[(2)]);
var inst_26545 = cljs.core.next.call(null,inst_26533);
var inst_26519 = inst_26545;
var inst_26520 = null;
var inst_26521 = (0);
var inst_26522 = (0);
var state_26567__$1 = (function (){var statearr_26570 = state_26567;
(statearr_26570[(8)] = inst_26519);

(statearr_26570[(9)] = inst_26544);

(statearr_26570[(10)] = inst_26521);

(statearr_26570[(11)] = inst_26522);

(statearr_26570[(12)] = inst_26520);

return statearr_26570;
})();
var statearr_26571_26608 = state_26567__$1;
(statearr_26571_26608[(2)] = null);

(statearr_26571_26608[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (1))){
var state_26567__$1 = state_26567;
var statearr_26572_26609 = state_26567__$1;
(statearr_26572_26609[(2)] = null);

(statearr_26572_26609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (4))){
var inst_26508 = (state_26567[(13)]);
var inst_26508__$1 = (state_26567[(2)]);
var inst_26509 = (inst_26508__$1 == null);
var state_26567__$1 = (function (){var statearr_26573 = state_26567;
(statearr_26573[(13)] = inst_26508__$1);

return statearr_26573;
})();
if(cljs.core.truth_(inst_26509)){
var statearr_26574_26610 = state_26567__$1;
(statearr_26574_26610[(1)] = (5));

} else {
var statearr_26575_26611 = state_26567__$1;
(statearr_26575_26611[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (15))){
var state_26567__$1 = state_26567;
var statearr_26579_26612 = state_26567__$1;
(statearr_26579_26612[(2)] = null);

(statearr_26579_26612[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (21))){
var state_26567__$1 = state_26567;
var statearr_26580_26613 = state_26567__$1;
(statearr_26580_26613[(2)] = null);

(statearr_26580_26613[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (13))){
var inst_26519 = (state_26567[(8)]);
var inst_26521 = (state_26567[(10)]);
var inst_26522 = (state_26567[(11)]);
var inst_26520 = (state_26567[(12)]);
var inst_26529 = (state_26567[(2)]);
var inst_26530 = (inst_26522 + (1));
var tmp26576 = inst_26519;
var tmp26577 = inst_26521;
var tmp26578 = inst_26520;
var inst_26519__$1 = tmp26576;
var inst_26520__$1 = tmp26578;
var inst_26521__$1 = tmp26577;
var inst_26522__$1 = inst_26530;
var state_26567__$1 = (function (){var statearr_26581 = state_26567;
(statearr_26581[(8)] = inst_26519__$1);

(statearr_26581[(10)] = inst_26521__$1);

(statearr_26581[(11)] = inst_26522__$1);

(statearr_26581[(12)] = inst_26520__$1);

(statearr_26581[(14)] = inst_26529);

return statearr_26581;
})();
var statearr_26582_26614 = state_26567__$1;
(statearr_26582_26614[(2)] = null);

(statearr_26582_26614[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (22))){
var state_26567__$1 = state_26567;
var statearr_26583_26615 = state_26567__$1;
(statearr_26583_26615[(2)] = null);

(statearr_26583_26615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (6))){
var inst_26508 = (state_26567[(13)]);
var inst_26517 = f.call(null,inst_26508);
var inst_26518 = cljs.core.seq.call(null,inst_26517);
var inst_26519 = inst_26518;
var inst_26520 = null;
var inst_26521 = (0);
var inst_26522 = (0);
var state_26567__$1 = (function (){var statearr_26584 = state_26567;
(statearr_26584[(8)] = inst_26519);

(statearr_26584[(10)] = inst_26521);

(statearr_26584[(11)] = inst_26522);

(statearr_26584[(12)] = inst_26520);

return statearr_26584;
})();
var statearr_26585_26616 = state_26567__$1;
(statearr_26585_26616[(2)] = null);

(statearr_26585_26616[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (17))){
var inst_26533 = (state_26567[(7)]);
var inst_26537 = cljs.core.chunk_first.call(null,inst_26533);
var inst_26538 = cljs.core.chunk_rest.call(null,inst_26533);
var inst_26539 = cljs.core.count.call(null,inst_26537);
var inst_26519 = inst_26538;
var inst_26520 = inst_26537;
var inst_26521 = inst_26539;
var inst_26522 = (0);
var state_26567__$1 = (function (){var statearr_26586 = state_26567;
(statearr_26586[(8)] = inst_26519);

(statearr_26586[(10)] = inst_26521);

(statearr_26586[(11)] = inst_26522);

(statearr_26586[(12)] = inst_26520);

return statearr_26586;
})();
var statearr_26587_26617 = state_26567__$1;
(statearr_26587_26617[(2)] = null);

(statearr_26587_26617[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (3))){
var inst_26565 = (state_26567[(2)]);
var state_26567__$1 = state_26567;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26567__$1,inst_26565);
} else {
if((state_val_26568 === (12))){
var inst_26553 = (state_26567[(2)]);
var state_26567__$1 = state_26567;
var statearr_26588_26618 = state_26567__$1;
(statearr_26588_26618[(2)] = inst_26553);

(statearr_26588_26618[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (2))){
var state_26567__$1 = state_26567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26567__$1,(4),in$);
} else {
if((state_val_26568 === (23))){
var inst_26561 = (state_26567[(2)]);
var state_26567__$1 = state_26567;
var statearr_26589_26619 = state_26567__$1;
(statearr_26589_26619[(2)] = inst_26561);

(statearr_26589_26619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (19))){
var inst_26548 = (state_26567[(2)]);
var state_26567__$1 = state_26567;
var statearr_26590_26620 = state_26567__$1;
(statearr_26590_26620[(2)] = inst_26548);

(statearr_26590_26620[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (11))){
var inst_26533 = (state_26567[(7)]);
var inst_26519 = (state_26567[(8)]);
var inst_26533__$1 = cljs.core.seq.call(null,inst_26519);
var state_26567__$1 = (function (){var statearr_26591 = state_26567;
(statearr_26591[(7)] = inst_26533__$1);

return statearr_26591;
})();
if(inst_26533__$1){
var statearr_26592_26621 = state_26567__$1;
(statearr_26592_26621[(1)] = (14));

} else {
var statearr_26593_26622 = state_26567__$1;
(statearr_26593_26622[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (9))){
var inst_26555 = (state_26567[(2)]);
var inst_26556 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26567__$1 = (function (){var statearr_26594 = state_26567;
(statearr_26594[(15)] = inst_26555);

return statearr_26594;
})();
if(cljs.core.truth_(inst_26556)){
var statearr_26595_26623 = state_26567__$1;
(statearr_26595_26623[(1)] = (21));

} else {
var statearr_26596_26624 = state_26567__$1;
(statearr_26596_26624[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (5))){
var inst_26511 = cljs.core.async.close_BANG_.call(null,out);
var state_26567__$1 = state_26567;
var statearr_26597_26625 = state_26567__$1;
(statearr_26597_26625[(2)] = inst_26511);

(statearr_26597_26625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (14))){
var inst_26533 = (state_26567[(7)]);
var inst_26535 = cljs.core.chunked_seq_QMARK_.call(null,inst_26533);
var state_26567__$1 = state_26567;
if(inst_26535){
var statearr_26598_26626 = state_26567__$1;
(statearr_26598_26626[(1)] = (17));

} else {
var statearr_26599_26627 = state_26567__$1;
(statearr_26599_26627[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (16))){
var inst_26551 = (state_26567[(2)]);
var state_26567__$1 = state_26567;
var statearr_26600_26628 = state_26567__$1;
(statearr_26600_26628[(2)] = inst_26551);

(statearr_26600_26628[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (10))){
var inst_26522 = (state_26567[(11)]);
var inst_26520 = (state_26567[(12)]);
var inst_26527 = cljs.core._nth.call(null,inst_26520,inst_26522);
var state_26567__$1 = state_26567;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26567__$1,(13),out,inst_26527);
} else {
if((state_val_26568 === (18))){
var inst_26533 = (state_26567[(7)]);
var inst_26542 = cljs.core.first.call(null,inst_26533);
var state_26567__$1 = state_26567;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26567__$1,(20),out,inst_26542);
} else {
if((state_val_26568 === (8))){
var inst_26521 = (state_26567[(10)]);
var inst_26522 = (state_26567[(11)]);
var inst_26524 = (inst_26522 < inst_26521);
var inst_26525 = inst_26524;
var state_26567__$1 = state_26567;
if(cljs.core.truth_(inst_26525)){
var statearr_26601_26629 = state_26567__$1;
(statearr_26601_26629[(1)] = (10));

} else {
var statearr_26602_26630 = state_26567__$1;
(statearr_26602_26630[(1)] = (11));

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
});})(c__24951__auto__))
;
return ((function (switch__24856__auto__,c__24951__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24857__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24857__auto____0 = (function (){
var statearr_26603 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26603[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24857__auto__);

(statearr_26603[(1)] = (1));

return statearr_26603;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24857__auto____1 = (function (state_26567){
while(true){
var ret_value__24858__auto__ = (function (){try{while(true){
var result__24859__auto__ = switch__24856__auto__.call(null,state_26567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24859__auto__;
}
break;
}
}catch (e26604){if((e26604 instanceof Object)){
var ex__24860__auto__ = e26604;
var statearr_26605_26631 = state_26567;
(statearr_26605_26631[(5)] = ex__24860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26632 = state_26567;
state_26567 = G__26632;
continue;
} else {
return ret_value__24858__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24857__auto__ = function(state_26567){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24857__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24857__auto____1.call(this,state_26567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24857__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24857__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24857__auto__;
})()
;})(switch__24856__auto__,c__24951__auto__))
})();
var state__24953__auto__ = (function (){var statearr_26606 = f__24952__auto__.call(null);
(statearr_26606[(6)] = c__24951__auto__);

return statearr_26606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24953__auto__);
});})(c__24951__auto__))
);

return c__24951__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__26634 = arguments.length;
switch (G__26634) {
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
var G__26637 = arguments.length;
switch (G__26637) {
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
var G__26640 = arguments.length;
switch (G__26640) {
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
var c__24951__auto___26687 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24951__auto___26687,out){
return (function (){
var f__24952__auto__ = (function (){var switch__24856__auto__ = ((function (c__24951__auto___26687,out){
return (function (state_26664){
var state_val_26665 = (state_26664[(1)]);
if((state_val_26665 === (7))){
var inst_26659 = (state_26664[(2)]);
var state_26664__$1 = state_26664;
var statearr_26666_26688 = state_26664__$1;
(statearr_26666_26688[(2)] = inst_26659);

(statearr_26666_26688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26665 === (1))){
var inst_26641 = null;
var state_26664__$1 = (function (){var statearr_26667 = state_26664;
(statearr_26667[(7)] = inst_26641);

return statearr_26667;
})();
var statearr_26668_26689 = state_26664__$1;
(statearr_26668_26689[(2)] = null);

(statearr_26668_26689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26665 === (4))){
var inst_26644 = (state_26664[(8)]);
var inst_26644__$1 = (state_26664[(2)]);
var inst_26645 = (inst_26644__$1 == null);
var inst_26646 = cljs.core.not.call(null,inst_26645);
var state_26664__$1 = (function (){var statearr_26669 = state_26664;
(statearr_26669[(8)] = inst_26644__$1);

return statearr_26669;
})();
if(inst_26646){
var statearr_26670_26690 = state_26664__$1;
(statearr_26670_26690[(1)] = (5));

} else {
var statearr_26671_26691 = state_26664__$1;
(statearr_26671_26691[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26665 === (6))){
var state_26664__$1 = state_26664;
var statearr_26672_26692 = state_26664__$1;
(statearr_26672_26692[(2)] = null);

(statearr_26672_26692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26665 === (3))){
var inst_26661 = (state_26664[(2)]);
var inst_26662 = cljs.core.async.close_BANG_.call(null,out);
var state_26664__$1 = (function (){var statearr_26673 = state_26664;
(statearr_26673[(9)] = inst_26661);

return statearr_26673;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26664__$1,inst_26662);
} else {
if((state_val_26665 === (2))){
var state_26664__$1 = state_26664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26664__$1,(4),ch);
} else {
if((state_val_26665 === (11))){
var inst_26644 = (state_26664[(8)]);
var inst_26653 = (state_26664[(2)]);
var inst_26641 = inst_26644;
var state_26664__$1 = (function (){var statearr_26674 = state_26664;
(statearr_26674[(10)] = inst_26653);

(statearr_26674[(7)] = inst_26641);

return statearr_26674;
})();
var statearr_26675_26693 = state_26664__$1;
(statearr_26675_26693[(2)] = null);

(statearr_26675_26693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26665 === (9))){
var inst_26644 = (state_26664[(8)]);
var state_26664__$1 = state_26664;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26664__$1,(11),out,inst_26644);
} else {
if((state_val_26665 === (5))){
var inst_26644 = (state_26664[(8)]);
var inst_26641 = (state_26664[(7)]);
var inst_26648 = cljs.core._EQ_.call(null,inst_26644,inst_26641);
var state_26664__$1 = state_26664;
if(inst_26648){
var statearr_26677_26694 = state_26664__$1;
(statearr_26677_26694[(1)] = (8));

} else {
var statearr_26678_26695 = state_26664__$1;
(statearr_26678_26695[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26665 === (10))){
var inst_26656 = (state_26664[(2)]);
var state_26664__$1 = state_26664;
var statearr_26679_26696 = state_26664__$1;
(statearr_26679_26696[(2)] = inst_26656);

(statearr_26679_26696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26665 === (8))){
var inst_26641 = (state_26664[(7)]);
var tmp26676 = inst_26641;
var inst_26641__$1 = tmp26676;
var state_26664__$1 = (function (){var statearr_26680 = state_26664;
(statearr_26680[(7)] = inst_26641__$1);

return statearr_26680;
})();
var statearr_26681_26697 = state_26664__$1;
(statearr_26681_26697[(2)] = null);

(statearr_26681_26697[(1)] = (2));


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
});})(c__24951__auto___26687,out))
;
return ((function (switch__24856__auto__,c__24951__auto___26687,out){
return (function() {
var cljs$core$async$state_machine__24857__auto__ = null;
var cljs$core$async$state_machine__24857__auto____0 = (function (){
var statearr_26682 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26682[(0)] = cljs$core$async$state_machine__24857__auto__);

(statearr_26682[(1)] = (1));

return statearr_26682;
});
var cljs$core$async$state_machine__24857__auto____1 = (function (state_26664){
while(true){
var ret_value__24858__auto__ = (function (){try{while(true){
var result__24859__auto__ = switch__24856__auto__.call(null,state_26664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24859__auto__;
}
break;
}
}catch (e26683){if((e26683 instanceof Object)){
var ex__24860__auto__ = e26683;
var statearr_26684_26698 = state_26664;
(statearr_26684_26698[(5)] = ex__24860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26699 = state_26664;
state_26664 = G__26699;
continue;
} else {
return ret_value__24858__auto__;
}
break;
}
});
cljs$core$async$state_machine__24857__auto__ = function(state_26664){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24857__auto____1.call(this,state_26664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24857__auto____0;
cljs$core$async$state_machine__24857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24857__auto____1;
return cljs$core$async$state_machine__24857__auto__;
})()
;})(switch__24856__auto__,c__24951__auto___26687,out))
})();
var state__24953__auto__ = (function (){var statearr_26685 = f__24952__auto__.call(null);
(statearr_26685[(6)] = c__24951__auto___26687);

return statearr_26685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24953__auto__);
});})(c__24951__auto___26687,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__26701 = arguments.length;
switch (G__26701) {
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
var c__24951__auto___26767 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24951__auto___26767,out){
return (function (){
var f__24952__auto__ = (function (){var switch__24856__auto__ = ((function (c__24951__auto___26767,out){
return (function (state_26739){
var state_val_26740 = (state_26739[(1)]);
if((state_val_26740 === (7))){
var inst_26735 = (state_26739[(2)]);
var state_26739__$1 = state_26739;
var statearr_26741_26768 = state_26739__$1;
(statearr_26741_26768[(2)] = inst_26735);

(statearr_26741_26768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (1))){
var inst_26702 = (new Array(n));
var inst_26703 = inst_26702;
var inst_26704 = (0);
var state_26739__$1 = (function (){var statearr_26742 = state_26739;
(statearr_26742[(7)] = inst_26703);

(statearr_26742[(8)] = inst_26704);

return statearr_26742;
})();
var statearr_26743_26769 = state_26739__$1;
(statearr_26743_26769[(2)] = null);

(statearr_26743_26769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (4))){
var inst_26707 = (state_26739[(9)]);
var inst_26707__$1 = (state_26739[(2)]);
var inst_26708 = (inst_26707__$1 == null);
var inst_26709 = cljs.core.not.call(null,inst_26708);
var state_26739__$1 = (function (){var statearr_26744 = state_26739;
(statearr_26744[(9)] = inst_26707__$1);

return statearr_26744;
})();
if(inst_26709){
var statearr_26745_26770 = state_26739__$1;
(statearr_26745_26770[(1)] = (5));

} else {
var statearr_26746_26771 = state_26739__$1;
(statearr_26746_26771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (15))){
var inst_26729 = (state_26739[(2)]);
var state_26739__$1 = state_26739;
var statearr_26747_26772 = state_26739__$1;
(statearr_26747_26772[(2)] = inst_26729);

(statearr_26747_26772[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (13))){
var state_26739__$1 = state_26739;
var statearr_26748_26773 = state_26739__$1;
(statearr_26748_26773[(2)] = null);

(statearr_26748_26773[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (6))){
var inst_26704 = (state_26739[(8)]);
var inst_26725 = (inst_26704 > (0));
var state_26739__$1 = state_26739;
if(cljs.core.truth_(inst_26725)){
var statearr_26749_26774 = state_26739__$1;
(statearr_26749_26774[(1)] = (12));

} else {
var statearr_26750_26775 = state_26739__$1;
(statearr_26750_26775[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (3))){
var inst_26737 = (state_26739[(2)]);
var state_26739__$1 = state_26739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26739__$1,inst_26737);
} else {
if((state_val_26740 === (12))){
var inst_26703 = (state_26739[(7)]);
var inst_26727 = cljs.core.vec.call(null,inst_26703);
var state_26739__$1 = state_26739;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26739__$1,(15),out,inst_26727);
} else {
if((state_val_26740 === (2))){
var state_26739__$1 = state_26739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26739__$1,(4),ch);
} else {
if((state_val_26740 === (11))){
var inst_26719 = (state_26739[(2)]);
var inst_26720 = (new Array(n));
var inst_26703 = inst_26720;
var inst_26704 = (0);
var state_26739__$1 = (function (){var statearr_26751 = state_26739;
(statearr_26751[(10)] = inst_26719);

(statearr_26751[(7)] = inst_26703);

(statearr_26751[(8)] = inst_26704);

return statearr_26751;
})();
var statearr_26752_26776 = state_26739__$1;
(statearr_26752_26776[(2)] = null);

(statearr_26752_26776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (9))){
var inst_26703 = (state_26739[(7)]);
var inst_26717 = cljs.core.vec.call(null,inst_26703);
var state_26739__$1 = state_26739;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26739__$1,(11),out,inst_26717);
} else {
if((state_val_26740 === (5))){
var inst_26712 = (state_26739[(11)]);
var inst_26707 = (state_26739[(9)]);
var inst_26703 = (state_26739[(7)]);
var inst_26704 = (state_26739[(8)]);
var inst_26711 = (inst_26703[inst_26704] = inst_26707);
var inst_26712__$1 = (inst_26704 + (1));
var inst_26713 = (inst_26712__$1 < n);
var state_26739__$1 = (function (){var statearr_26753 = state_26739;
(statearr_26753[(11)] = inst_26712__$1);

(statearr_26753[(12)] = inst_26711);

return statearr_26753;
})();
if(cljs.core.truth_(inst_26713)){
var statearr_26754_26777 = state_26739__$1;
(statearr_26754_26777[(1)] = (8));

} else {
var statearr_26755_26778 = state_26739__$1;
(statearr_26755_26778[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (14))){
var inst_26732 = (state_26739[(2)]);
var inst_26733 = cljs.core.async.close_BANG_.call(null,out);
var state_26739__$1 = (function (){var statearr_26757 = state_26739;
(statearr_26757[(13)] = inst_26732);

return statearr_26757;
})();
var statearr_26758_26779 = state_26739__$1;
(statearr_26758_26779[(2)] = inst_26733);

(statearr_26758_26779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (10))){
var inst_26723 = (state_26739[(2)]);
var state_26739__$1 = state_26739;
var statearr_26759_26780 = state_26739__$1;
(statearr_26759_26780[(2)] = inst_26723);

(statearr_26759_26780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (8))){
var inst_26712 = (state_26739[(11)]);
var inst_26703 = (state_26739[(7)]);
var tmp26756 = inst_26703;
var inst_26703__$1 = tmp26756;
var inst_26704 = inst_26712;
var state_26739__$1 = (function (){var statearr_26760 = state_26739;
(statearr_26760[(7)] = inst_26703__$1);

(statearr_26760[(8)] = inst_26704);

return statearr_26760;
})();
var statearr_26761_26781 = state_26739__$1;
(statearr_26761_26781[(2)] = null);

(statearr_26761_26781[(1)] = (2));


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
});})(c__24951__auto___26767,out))
;
return ((function (switch__24856__auto__,c__24951__auto___26767,out){
return (function() {
var cljs$core$async$state_machine__24857__auto__ = null;
var cljs$core$async$state_machine__24857__auto____0 = (function (){
var statearr_26762 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26762[(0)] = cljs$core$async$state_machine__24857__auto__);

(statearr_26762[(1)] = (1));

return statearr_26762;
});
var cljs$core$async$state_machine__24857__auto____1 = (function (state_26739){
while(true){
var ret_value__24858__auto__ = (function (){try{while(true){
var result__24859__auto__ = switch__24856__auto__.call(null,state_26739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24859__auto__;
}
break;
}
}catch (e26763){if((e26763 instanceof Object)){
var ex__24860__auto__ = e26763;
var statearr_26764_26782 = state_26739;
(statearr_26764_26782[(5)] = ex__24860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26783 = state_26739;
state_26739 = G__26783;
continue;
} else {
return ret_value__24858__auto__;
}
break;
}
});
cljs$core$async$state_machine__24857__auto__ = function(state_26739){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24857__auto____1.call(this,state_26739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24857__auto____0;
cljs$core$async$state_machine__24857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24857__auto____1;
return cljs$core$async$state_machine__24857__auto__;
})()
;})(switch__24856__auto__,c__24951__auto___26767,out))
})();
var state__24953__auto__ = (function (){var statearr_26765 = f__24952__auto__.call(null);
(statearr_26765[(6)] = c__24951__auto___26767);

return statearr_26765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24953__auto__);
});})(c__24951__auto___26767,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__26785 = arguments.length;
switch (G__26785) {
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
var c__24951__auto___26855 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24951__auto___26855,out){
return (function (){
var f__24952__auto__ = (function (){var switch__24856__auto__ = ((function (c__24951__auto___26855,out){
return (function (state_26827){
var state_val_26828 = (state_26827[(1)]);
if((state_val_26828 === (7))){
var inst_26823 = (state_26827[(2)]);
var state_26827__$1 = state_26827;
var statearr_26829_26856 = state_26827__$1;
(statearr_26829_26856[(2)] = inst_26823);

(statearr_26829_26856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (1))){
var inst_26786 = [];
var inst_26787 = inst_26786;
var inst_26788 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26827__$1 = (function (){var statearr_26830 = state_26827;
(statearr_26830[(7)] = inst_26787);

(statearr_26830[(8)] = inst_26788);

return statearr_26830;
})();
var statearr_26831_26857 = state_26827__$1;
(statearr_26831_26857[(2)] = null);

(statearr_26831_26857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (4))){
var inst_26791 = (state_26827[(9)]);
var inst_26791__$1 = (state_26827[(2)]);
var inst_26792 = (inst_26791__$1 == null);
var inst_26793 = cljs.core.not.call(null,inst_26792);
var state_26827__$1 = (function (){var statearr_26832 = state_26827;
(statearr_26832[(9)] = inst_26791__$1);

return statearr_26832;
})();
if(inst_26793){
var statearr_26833_26858 = state_26827__$1;
(statearr_26833_26858[(1)] = (5));

} else {
var statearr_26834_26859 = state_26827__$1;
(statearr_26834_26859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (15))){
var inst_26817 = (state_26827[(2)]);
var state_26827__$1 = state_26827;
var statearr_26835_26860 = state_26827__$1;
(statearr_26835_26860[(2)] = inst_26817);

(statearr_26835_26860[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (13))){
var state_26827__$1 = state_26827;
var statearr_26836_26861 = state_26827__$1;
(statearr_26836_26861[(2)] = null);

(statearr_26836_26861[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (6))){
var inst_26787 = (state_26827[(7)]);
var inst_26812 = inst_26787.length;
var inst_26813 = (inst_26812 > (0));
var state_26827__$1 = state_26827;
if(cljs.core.truth_(inst_26813)){
var statearr_26837_26862 = state_26827__$1;
(statearr_26837_26862[(1)] = (12));

} else {
var statearr_26838_26863 = state_26827__$1;
(statearr_26838_26863[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (3))){
var inst_26825 = (state_26827[(2)]);
var state_26827__$1 = state_26827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26827__$1,inst_26825);
} else {
if((state_val_26828 === (12))){
var inst_26787 = (state_26827[(7)]);
var inst_26815 = cljs.core.vec.call(null,inst_26787);
var state_26827__$1 = state_26827;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26827__$1,(15),out,inst_26815);
} else {
if((state_val_26828 === (2))){
var state_26827__$1 = state_26827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26827__$1,(4),ch);
} else {
if((state_val_26828 === (11))){
var inst_26795 = (state_26827[(10)]);
var inst_26791 = (state_26827[(9)]);
var inst_26805 = (state_26827[(2)]);
var inst_26806 = [];
var inst_26807 = inst_26806.push(inst_26791);
var inst_26787 = inst_26806;
var inst_26788 = inst_26795;
var state_26827__$1 = (function (){var statearr_26839 = state_26827;
(statearr_26839[(7)] = inst_26787);

(statearr_26839[(11)] = inst_26807);

(statearr_26839[(8)] = inst_26788);

(statearr_26839[(12)] = inst_26805);

return statearr_26839;
})();
var statearr_26840_26864 = state_26827__$1;
(statearr_26840_26864[(2)] = null);

(statearr_26840_26864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (9))){
var inst_26787 = (state_26827[(7)]);
var inst_26803 = cljs.core.vec.call(null,inst_26787);
var state_26827__$1 = state_26827;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26827__$1,(11),out,inst_26803);
} else {
if((state_val_26828 === (5))){
var inst_26795 = (state_26827[(10)]);
var inst_26788 = (state_26827[(8)]);
var inst_26791 = (state_26827[(9)]);
var inst_26795__$1 = f.call(null,inst_26791);
var inst_26796 = cljs.core._EQ_.call(null,inst_26795__$1,inst_26788);
var inst_26797 = cljs.core.keyword_identical_QMARK_.call(null,inst_26788,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26798 = ((inst_26796) || (inst_26797));
var state_26827__$1 = (function (){var statearr_26841 = state_26827;
(statearr_26841[(10)] = inst_26795__$1);

return statearr_26841;
})();
if(cljs.core.truth_(inst_26798)){
var statearr_26842_26865 = state_26827__$1;
(statearr_26842_26865[(1)] = (8));

} else {
var statearr_26843_26866 = state_26827__$1;
(statearr_26843_26866[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (14))){
var inst_26820 = (state_26827[(2)]);
var inst_26821 = cljs.core.async.close_BANG_.call(null,out);
var state_26827__$1 = (function (){var statearr_26845 = state_26827;
(statearr_26845[(13)] = inst_26820);

return statearr_26845;
})();
var statearr_26846_26867 = state_26827__$1;
(statearr_26846_26867[(2)] = inst_26821);

(statearr_26846_26867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (10))){
var inst_26810 = (state_26827[(2)]);
var state_26827__$1 = state_26827;
var statearr_26847_26868 = state_26827__$1;
(statearr_26847_26868[(2)] = inst_26810);

(statearr_26847_26868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (8))){
var inst_26787 = (state_26827[(7)]);
var inst_26795 = (state_26827[(10)]);
var inst_26791 = (state_26827[(9)]);
var inst_26800 = inst_26787.push(inst_26791);
var tmp26844 = inst_26787;
var inst_26787__$1 = tmp26844;
var inst_26788 = inst_26795;
var state_26827__$1 = (function (){var statearr_26848 = state_26827;
(statearr_26848[(7)] = inst_26787__$1);

(statearr_26848[(14)] = inst_26800);

(statearr_26848[(8)] = inst_26788);

return statearr_26848;
})();
var statearr_26849_26869 = state_26827__$1;
(statearr_26849_26869[(2)] = null);

(statearr_26849_26869[(1)] = (2));


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
});})(c__24951__auto___26855,out))
;
return ((function (switch__24856__auto__,c__24951__auto___26855,out){
return (function() {
var cljs$core$async$state_machine__24857__auto__ = null;
var cljs$core$async$state_machine__24857__auto____0 = (function (){
var statearr_26850 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26850[(0)] = cljs$core$async$state_machine__24857__auto__);

(statearr_26850[(1)] = (1));

return statearr_26850;
});
var cljs$core$async$state_machine__24857__auto____1 = (function (state_26827){
while(true){
var ret_value__24858__auto__ = (function (){try{while(true){
var result__24859__auto__ = switch__24856__auto__.call(null,state_26827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24859__auto__;
}
break;
}
}catch (e26851){if((e26851 instanceof Object)){
var ex__24860__auto__ = e26851;
var statearr_26852_26870 = state_26827;
(statearr_26852_26870[(5)] = ex__24860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26871 = state_26827;
state_26827 = G__26871;
continue;
} else {
return ret_value__24858__auto__;
}
break;
}
});
cljs$core$async$state_machine__24857__auto__ = function(state_26827){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24857__auto____1.call(this,state_26827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24857__auto____0;
cljs$core$async$state_machine__24857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24857__auto____1;
return cljs$core$async$state_machine__24857__auto__;
})()
;})(switch__24856__auto__,c__24951__auto___26855,out))
})();
var state__24953__auto__ = (function (){var statearr_26853 = f__24952__auto__.call(null);
(statearr_26853[(6)] = c__24951__auto___26855);

return statearr_26853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24953__auto__);
});})(c__24951__auto___26855,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
