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
var G__13807 = arguments.length;
switch (G__13807) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13808 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13808 = (function (f,blockable,meta13809){
this.f = f;
this.blockable = blockable;
this.meta13809 = meta13809;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13810,meta13809__$1){
var self__ = this;
var _13810__$1 = this;
return (new cljs.core.async.t_cljs$core$async13808(self__.f,self__.blockable,meta13809__$1));
});

cljs.core.async.t_cljs$core$async13808.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13810){
var self__ = this;
var _13810__$1 = this;
return self__.meta13809;
});

cljs.core.async.t_cljs$core$async13808.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13808.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13808.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async13808.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async13808.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13809","meta13809",-984582610,null)], null);
});

cljs.core.async.t_cljs$core$async13808.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13808.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13808";

cljs.core.async.t_cljs$core$async13808.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async13808");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13808.
 */
cljs.core.async.__GT_t_cljs$core$async13808 = (function cljs$core$async$__GT_t_cljs$core$async13808(f__$1,blockable__$1,meta13809){
return (new cljs.core.async.t_cljs$core$async13808(f__$1,blockable__$1,meta13809));
});

}

return (new cljs.core.async.t_cljs$core$async13808(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__13814 = arguments.length;
switch (G__13814) {
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
var G__13817 = arguments.length;
switch (G__13817) {
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
var G__13820 = arguments.length;
switch (G__13820) {
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
var val_13822 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_13822);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_13822,ret){
return (function (){
return fn1.call(null,val_13822);
});})(val_13822,ret))
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
var G__13824 = arguments.length;
switch (G__13824) {
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
var n__4518__auto___13826 = n;
var x_13827 = (0);
while(true){
if((x_13827 < n__4518__auto___13826)){
(a[x_13827] = (0));

var G__13828 = (x_13827 + (1));
x_13827 = G__13828;
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

var G__13829 = (i + (1));
i = G__13829;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13830 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13830 = (function (flag,meta13831){
this.flag = flag;
this.meta13831 = meta13831;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13832,meta13831__$1){
var self__ = this;
var _13832__$1 = this;
return (new cljs.core.async.t_cljs$core$async13830(self__.flag,meta13831__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async13830.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13832){
var self__ = this;
var _13832__$1 = this;
return self__.meta13831;
});})(flag))
;

cljs.core.async.t_cljs$core$async13830.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13830.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async13830.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13830.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13830.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13831","meta13831",-1337090120,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async13830.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13830.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13830";

cljs.core.async.t_cljs$core$async13830.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async13830");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13830.
 */
cljs.core.async.__GT_t_cljs$core$async13830 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async13830(flag__$1,meta13831){
return (new cljs.core.async.t_cljs$core$async13830(flag__$1,meta13831));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async13830(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13833 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13833 = (function (flag,cb,meta13834){
this.flag = flag;
this.cb = cb;
this.meta13834 = meta13834;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13835,meta13834__$1){
var self__ = this;
var _13835__$1 = this;
return (new cljs.core.async.t_cljs$core$async13833(self__.flag,self__.cb,meta13834__$1));
});

cljs.core.async.t_cljs$core$async13833.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13835){
var self__ = this;
var _13835__$1 = this;
return self__.meta13834;
});

cljs.core.async.t_cljs$core$async13833.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13833.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async13833.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13833.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async13833.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13834","meta13834",1583048836,null)], null);
});

cljs.core.async.t_cljs$core$async13833.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13833.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13833";

cljs.core.async.t_cljs$core$async13833.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async13833");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13833.
 */
cljs.core.async.__GT_t_cljs$core$async13833 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async13833(flag__$1,cb__$1,meta13834){
return (new cljs.core.async.t_cljs$core$async13833(flag__$1,cb__$1,meta13834));
});

}

return (new cljs.core.async.t_cljs$core$async13833(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__13836_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13836_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13837_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13837_SHARP_,port], null));
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
var G__13838 = (i + (1));
i = G__13838;
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
var len__4641__auto___13844 = arguments.length;
var i__4642__auto___13845 = (0);
while(true){
if((i__4642__auto___13845 < len__4641__auto___13844)){
args__4647__auto__.push((arguments[i__4642__auto___13845]));

var G__13846 = (i__4642__auto___13845 + (1));
i__4642__auto___13845 = G__13846;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13841){
var map__13842 = p__13841;
var map__13842__$1 = (((((!((map__13842 == null))))?(((((map__13842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13842):map__13842);
var opts = map__13842__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13839){
var G__13840 = cljs.core.first.call(null,seq13839);
var seq13839__$1 = cljs.core.next.call(null,seq13839);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13840,seq13839__$1);
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
var G__13848 = arguments.length;
switch (G__13848) {
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
var c__13747__auto___13894 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13747__auto___13894){
return (function (){
var f__13748__auto__ = (function (){var switch__13652__auto__ = ((function (c__13747__auto___13894){
return (function (state_13872){
var state_val_13873 = (state_13872[(1)]);
if((state_val_13873 === (7))){
var inst_13868 = (state_13872[(2)]);
var state_13872__$1 = state_13872;
var statearr_13874_13895 = state_13872__$1;
(statearr_13874_13895[(2)] = inst_13868);

(statearr_13874_13895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (1))){
var state_13872__$1 = state_13872;
var statearr_13875_13896 = state_13872__$1;
(statearr_13875_13896[(2)] = null);

(statearr_13875_13896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (4))){
var inst_13851 = (state_13872[(7)]);
var inst_13851__$1 = (state_13872[(2)]);
var inst_13852 = (inst_13851__$1 == null);
var state_13872__$1 = (function (){var statearr_13876 = state_13872;
(statearr_13876[(7)] = inst_13851__$1);

return statearr_13876;
})();
if(cljs.core.truth_(inst_13852)){
var statearr_13877_13897 = state_13872__$1;
(statearr_13877_13897[(1)] = (5));

} else {
var statearr_13878_13898 = state_13872__$1;
(statearr_13878_13898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (13))){
var state_13872__$1 = state_13872;
var statearr_13879_13899 = state_13872__$1;
(statearr_13879_13899[(2)] = null);

(statearr_13879_13899[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (6))){
var inst_13851 = (state_13872[(7)]);
var state_13872__$1 = state_13872;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13872__$1,(11),to,inst_13851);
} else {
if((state_val_13873 === (3))){
var inst_13870 = (state_13872[(2)]);
var state_13872__$1 = state_13872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13872__$1,inst_13870);
} else {
if((state_val_13873 === (12))){
var state_13872__$1 = state_13872;
var statearr_13880_13900 = state_13872__$1;
(statearr_13880_13900[(2)] = null);

(statearr_13880_13900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (2))){
var state_13872__$1 = state_13872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13872__$1,(4),from);
} else {
if((state_val_13873 === (11))){
var inst_13861 = (state_13872[(2)]);
var state_13872__$1 = state_13872;
if(cljs.core.truth_(inst_13861)){
var statearr_13881_13901 = state_13872__$1;
(statearr_13881_13901[(1)] = (12));

} else {
var statearr_13882_13902 = state_13872__$1;
(statearr_13882_13902[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (9))){
var state_13872__$1 = state_13872;
var statearr_13883_13903 = state_13872__$1;
(statearr_13883_13903[(2)] = null);

(statearr_13883_13903[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (5))){
var state_13872__$1 = state_13872;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13884_13904 = state_13872__$1;
(statearr_13884_13904[(1)] = (8));

} else {
var statearr_13885_13905 = state_13872__$1;
(statearr_13885_13905[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (14))){
var inst_13866 = (state_13872[(2)]);
var state_13872__$1 = state_13872;
var statearr_13886_13906 = state_13872__$1;
(statearr_13886_13906[(2)] = inst_13866);

(statearr_13886_13906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (10))){
var inst_13858 = (state_13872[(2)]);
var state_13872__$1 = state_13872;
var statearr_13887_13907 = state_13872__$1;
(statearr_13887_13907[(2)] = inst_13858);

(statearr_13887_13907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (8))){
var inst_13855 = cljs.core.async.close_BANG_.call(null,to);
var state_13872__$1 = state_13872;
var statearr_13888_13908 = state_13872__$1;
(statearr_13888_13908[(2)] = inst_13855);

(statearr_13888_13908[(1)] = (10));


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
});})(c__13747__auto___13894))
;
return ((function (switch__13652__auto__,c__13747__auto___13894){
return (function() {
var cljs$core$async$state_machine__13653__auto__ = null;
var cljs$core$async$state_machine__13653__auto____0 = (function (){
var statearr_13889 = [null,null,null,null,null,null,null,null];
(statearr_13889[(0)] = cljs$core$async$state_machine__13653__auto__);

(statearr_13889[(1)] = (1));

return statearr_13889;
});
var cljs$core$async$state_machine__13653__auto____1 = (function (state_13872){
while(true){
var ret_value__13654__auto__ = (function (){try{while(true){
var result__13655__auto__ = switch__13652__auto__.call(null,state_13872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13655__auto__;
}
break;
}
}catch (e13890){if((e13890 instanceof Object)){
var ex__13656__auto__ = e13890;
var statearr_13891_13909 = state_13872;
(statearr_13891_13909[(5)] = ex__13656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13910 = state_13872;
state_13872 = G__13910;
continue;
} else {
return ret_value__13654__auto__;
}
break;
}
});
cljs$core$async$state_machine__13653__auto__ = function(state_13872){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13653__auto____1.call(this,state_13872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13653__auto____0;
cljs$core$async$state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13653__auto____1;
return cljs$core$async$state_machine__13653__auto__;
})()
;})(switch__13652__auto__,c__13747__auto___13894))
})();
var state__13749__auto__ = (function (){var statearr_13892 = f__13748__auto__.call(null);
(statearr_13892[(6)] = c__13747__auto___13894);

return statearr_13892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13749__auto__);
});})(c__13747__auto___13894))
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
return (function (p__13911){
var vec__13912 = p__13911;
var v = cljs.core.nth.call(null,vec__13912,(0),null);
var p = cljs.core.nth.call(null,vec__13912,(1),null);
var job = vec__13912;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__13747__auto___14083 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13747__auto___14083,res,vec__13912,v,p,job,jobs,results){
return (function (){
var f__13748__auto__ = (function (){var switch__13652__auto__ = ((function (c__13747__auto___14083,res,vec__13912,v,p,job,jobs,results){
return (function (state_13919){
var state_val_13920 = (state_13919[(1)]);
if((state_val_13920 === (1))){
var state_13919__$1 = state_13919;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13919__$1,(2),res,v);
} else {
if((state_val_13920 === (2))){
var inst_13916 = (state_13919[(2)]);
var inst_13917 = cljs.core.async.close_BANG_.call(null,res);
var state_13919__$1 = (function (){var statearr_13921 = state_13919;
(statearr_13921[(7)] = inst_13916);

return statearr_13921;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13919__$1,inst_13917);
} else {
return null;
}
}
});})(c__13747__auto___14083,res,vec__13912,v,p,job,jobs,results))
;
return ((function (switch__13652__auto__,c__13747__auto___14083,res,vec__13912,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13653__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13653__auto____0 = (function (){
var statearr_13922 = [null,null,null,null,null,null,null,null];
(statearr_13922[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13653__auto__);

(statearr_13922[(1)] = (1));

return statearr_13922;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13653__auto____1 = (function (state_13919){
while(true){
var ret_value__13654__auto__ = (function (){try{while(true){
var result__13655__auto__ = switch__13652__auto__.call(null,state_13919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13655__auto__;
}
break;
}
}catch (e13923){if((e13923 instanceof Object)){
var ex__13656__auto__ = e13923;
var statearr_13924_14084 = state_13919;
(statearr_13924_14084[(5)] = ex__13656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14085 = state_13919;
state_13919 = G__14085;
continue;
} else {
return ret_value__13654__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13653__auto__ = function(state_13919){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13653__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13653__auto____1.call(this,state_13919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13653__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13653__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13653__auto__;
})()
;})(switch__13652__auto__,c__13747__auto___14083,res,vec__13912,v,p,job,jobs,results))
})();
var state__13749__auto__ = (function (){var statearr_13925 = f__13748__auto__.call(null);
(statearr_13925[(6)] = c__13747__auto___14083);

return statearr_13925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13749__auto__);
});})(c__13747__auto___14083,res,vec__13912,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__13926){
var vec__13927 = p__13926;
var v = cljs.core.nth.call(null,vec__13927,(0),null);
var p = cljs.core.nth.call(null,vec__13927,(1),null);
var job = vec__13927;
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
var n__4518__auto___14086 = n;
var __14087 = (0);
while(true){
if((__14087 < n__4518__auto___14086)){
var G__13930_14088 = type;
var G__13930_14089__$1 = (((G__13930_14088 instanceof cljs.core.Keyword))?G__13930_14088.fqn:null);
switch (G__13930_14089__$1) {
case "compute":
var c__13747__auto___14091 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14087,c__13747__auto___14091,G__13930_14088,G__13930_14089__$1,n__4518__auto___14086,jobs,results,process,async){
return (function (){
var f__13748__auto__ = (function (){var switch__13652__auto__ = ((function (__14087,c__13747__auto___14091,G__13930_14088,G__13930_14089__$1,n__4518__auto___14086,jobs,results,process,async){
return (function (state_13943){
var state_val_13944 = (state_13943[(1)]);
if((state_val_13944 === (1))){
var state_13943__$1 = state_13943;
var statearr_13945_14092 = state_13943__$1;
(statearr_13945_14092[(2)] = null);

(statearr_13945_14092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13944 === (2))){
var state_13943__$1 = state_13943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13943__$1,(4),jobs);
} else {
if((state_val_13944 === (3))){
var inst_13941 = (state_13943[(2)]);
var state_13943__$1 = state_13943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13943__$1,inst_13941);
} else {
if((state_val_13944 === (4))){
var inst_13933 = (state_13943[(2)]);
var inst_13934 = process.call(null,inst_13933);
var state_13943__$1 = state_13943;
if(cljs.core.truth_(inst_13934)){
var statearr_13946_14093 = state_13943__$1;
(statearr_13946_14093[(1)] = (5));

} else {
var statearr_13947_14094 = state_13943__$1;
(statearr_13947_14094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13944 === (5))){
var state_13943__$1 = state_13943;
var statearr_13948_14095 = state_13943__$1;
(statearr_13948_14095[(2)] = null);

(statearr_13948_14095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13944 === (6))){
var state_13943__$1 = state_13943;
var statearr_13949_14096 = state_13943__$1;
(statearr_13949_14096[(2)] = null);

(statearr_13949_14096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13944 === (7))){
var inst_13939 = (state_13943[(2)]);
var state_13943__$1 = state_13943;
var statearr_13950_14097 = state_13943__$1;
(statearr_13950_14097[(2)] = inst_13939);

(statearr_13950_14097[(1)] = (3));


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
});})(__14087,c__13747__auto___14091,G__13930_14088,G__13930_14089__$1,n__4518__auto___14086,jobs,results,process,async))
;
return ((function (__14087,switch__13652__auto__,c__13747__auto___14091,G__13930_14088,G__13930_14089__$1,n__4518__auto___14086,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13653__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13653__auto____0 = (function (){
var statearr_13951 = [null,null,null,null,null,null,null];
(statearr_13951[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13653__auto__);

(statearr_13951[(1)] = (1));

return statearr_13951;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13653__auto____1 = (function (state_13943){
while(true){
var ret_value__13654__auto__ = (function (){try{while(true){
var result__13655__auto__ = switch__13652__auto__.call(null,state_13943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13655__auto__;
}
break;
}
}catch (e13952){if((e13952 instanceof Object)){
var ex__13656__auto__ = e13952;
var statearr_13953_14098 = state_13943;
(statearr_13953_14098[(5)] = ex__13656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14099 = state_13943;
state_13943 = G__14099;
continue;
} else {
return ret_value__13654__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13653__auto__ = function(state_13943){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13653__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13653__auto____1.call(this,state_13943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13653__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13653__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13653__auto__;
})()
;})(__14087,switch__13652__auto__,c__13747__auto___14091,G__13930_14088,G__13930_14089__$1,n__4518__auto___14086,jobs,results,process,async))
})();
var state__13749__auto__ = (function (){var statearr_13954 = f__13748__auto__.call(null);
(statearr_13954[(6)] = c__13747__auto___14091);

return statearr_13954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13749__auto__);
});})(__14087,c__13747__auto___14091,G__13930_14088,G__13930_14089__$1,n__4518__auto___14086,jobs,results,process,async))
);


break;
case "async":
var c__13747__auto___14100 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14087,c__13747__auto___14100,G__13930_14088,G__13930_14089__$1,n__4518__auto___14086,jobs,results,process,async){
return (function (){
var f__13748__auto__ = (function (){var switch__13652__auto__ = ((function (__14087,c__13747__auto___14100,G__13930_14088,G__13930_14089__$1,n__4518__auto___14086,jobs,results,process,async){
return (function (state_13967){
var state_val_13968 = (state_13967[(1)]);
if((state_val_13968 === (1))){
var state_13967__$1 = state_13967;
var statearr_13969_14101 = state_13967__$1;
(statearr_13969_14101[(2)] = null);

(statearr_13969_14101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13968 === (2))){
var state_13967__$1 = state_13967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13967__$1,(4),jobs);
} else {
if((state_val_13968 === (3))){
var inst_13965 = (state_13967[(2)]);
var state_13967__$1 = state_13967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13967__$1,inst_13965);
} else {
if((state_val_13968 === (4))){
var inst_13957 = (state_13967[(2)]);
var inst_13958 = async.call(null,inst_13957);
var state_13967__$1 = state_13967;
if(cljs.core.truth_(inst_13958)){
var statearr_13970_14102 = state_13967__$1;
(statearr_13970_14102[(1)] = (5));

} else {
var statearr_13971_14103 = state_13967__$1;
(statearr_13971_14103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13968 === (5))){
var state_13967__$1 = state_13967;
var statearr_13972_14104 = state_13967__$1;
(statearr_13972_14104[(2)] = null);

(statearr_13972_14104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13968 === (6))){
var state_13967__$1 = state_13967;
var statearr_13973_14105 = state_13967__$1;
(statearr_13973_14105[(2)] = null);

(statearr_13973_14105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13968 === (7))){
var inst_13963 = (state_13967[(2)]);
var state_13967__$1 = state_13967;
var statearr_13974_14106 = state_13967__$1;
(statearr_13974_14106[(2)] = inst_13963);

(statearr_13974_14106[(1)] = (3));


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
});})(__14087,c__13747__auto___14100,G__13930_14088,G__13930_14089__$1,n__4518__auto___14086,jobs,results,process,async))
;
return ((function (__14087,switch__13652__auto__,c__13747__auto___14100,G__13930_14088,G__13930_14089__$1,n__4518__auto___14086,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13653__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13653__auto____0 = (function (){
var statearr_13975 = [null,null,null,null,null,null,null];
(statearr_13975[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13653__auto__);

(statearr_13975[(1)] = (1));

return statearr_13975;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13653__auto____1 = (function (state_13967){
while(true){
var ret_value__13654__auto__ = (function (){try{while(true){
var result__13655__auto__ = switch__13652__auto__.call(null,state_13967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13655__auto__;
}
break;
}
}catch (e13976){if((e13976 instanceof Object)){
var ex__13656__auto__ = e13976;
var statearr_13977_14107 = state_13967;
(statearr_13977_14107[(5)] = ex__13656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14108 = state_13967;
state_13967 = G__14108;
continue;
} else {
return ret_value__13654__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13653__auto__ = function(state_13967){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13653__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13653__auto____1.call(this,state_13967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13653__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13653__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13653__auto__;
})()
;})(__14087,switch__13652__auto__,c__13747__auto___14100,G__13930_14088,G__13930_14089__$1,n__4518__auto___14086,jobs,results,process,async))
})();
var state__13749__auto__ = (function (){var statearr_13978 = f__13748__auto__.call(null);
(statearr_13978[(6)] = c__13747__auto___14100);

return statearr_13978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13749__auto__);
});})(__14087,c__13747__auto___14100,G__13930_14088,G__13930_14089__$1,n__4518__auto___14086,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13930_14089__$1)].join('')));

}

var G__14109 = (__14087 + (1));
__14087 = G__14109;
continue;
} else {
}
break;
}

var c__13747__auto___14110 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13747__auto___14110,jobs,results,process,async){
return (function (){
var f__13748__auto__ = (function (){var switch__13652__auto__ = ((function (c__13747__auto___14110,jobs,results,process,async){
return (function (state_14000){
var state_val_14001 = (state_14000[(1)]);
if((state_val_14001 === (7))){
var inst_13996 = (state_14000[(2)]);
var state_14000__$1 = state_14000;
var statearr_14002_14111 = state_14000__$1;
(statearr_14002_14111[(2)] = inst_13996);

(statearr_14002_14111[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14001 === (1))){
var state_14000__$1 = state_14000;
var statearr_14003_14112 = state_14000__$1;
(statearr_14003_14112[(2)] = null);

(statearr_14003_14112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14001 === (4))){
var inst_13981 = (state_14000[(7)]);
var inst_13981__$1 = (state_14000[(2)]);
var inst_13982 = (inst_13981__$1 == null);
var state_14000__$1 = (function (){var statearr_14004 = state_14000;
(statearr_14004[(7)] = inst_13981__$1);

return statearr_14004;
})();
if(cljs.core.truth_(inst_13982)){
var statearr_14005_14113 = state_14000__$1;
(statearr_14005_14113[(1)] = (5));

} else {
var statearr_14006_14114 = state_14000__$1;
(statearr_14006_14114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14001 === (6))){
var inst_13981 = (state_14000[(7)]);
var inst_13986 = (state_14000[(8)]);
var inst_13986__$1 = cljs.core.async.chan.call(null,(1));
var inst_13987 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13988 = [inst_13981,inst_13986__$1];
var inst_13989 = (new cljs.core.PersistentVector(null,2,(5),inst_13987,inst_13988,null));
var state_14000__$1 = (function (){var statearr_14007 = state_14000;
(statearr_14007[(8)] = inst_13986__$1);

return statearr_14007;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14000__$1,(8),jobs,inst_13989);
} else {
if((state_val_14001 === (3))){
var inst_13998 = (state_14000[(2)]);
var state_14000__$1 = state_14000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14000__$1,inst_13998);
} else {
if((state_val_14001 === (2))){
var state_14000__$1 = state_14000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14000__$1,(4),from);
} else {
if((state_val_14001 === (9))){
var inst_13993 = (state_14000[(2)]);
var state_14000__$1 = (function (){var statearr_14008 = state_14000;
(statearr_14008[(9)] = inst_13993);

return statearr_14008;
})();
var statearr_14009_14115 = state_14000__$1;
(statearr_14009_14115[(2)] = null);

(statearr_14009_14115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14001 === (5))){
var inst_13984 = cljs.core.async.close_BANG_.call(null,jobs);
var state_14000__$1 = state_14000;
var statearr_14010_14116 = state_14000__$1;
(statearr_14010_14116[(2)] = inst_13984);

(statearr_14010_14116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14001 === (8))){
var inst_13986 = (state_14000[(8)]);
var inst_13991 = (state_14000[(2)]);
var state_14000__$1 = (function (){var statearr_14011 = state_14000;
(statearr_14011[(10)] = inst_13991);

return statearr_14011;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14000__$1,(9),results,inst_13986);
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
});})(c__13747__auto___14110,jobs,results,process,async))
;
return ((function (switch__13652__auto__,c__13747__auto___14110,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13653__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13653__auto____0 = (function (){
var statearr_14012 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14012[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13653__auto__);

(statearr_14012[(1)] = (1));

return statearr_14012;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13653__auto____1 = (function (state_14000){
while(true){
var ret_value__13654__auto__ = (function (){try{while(true){
var result__13655__auto__ = switch__13652__auto__.call(null,state_14000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13655__auto__;
}
break;
}
}catch (e14013){if((e14013 instanceof Object)){
var ex__13656__auto__ = e14013;
var statearr_14014_14117 = state_14000;
(statearr_14014_14117[(5)] = ex__13656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14118 = state_14000;
state_14000 = G__14118;
continue;
} else {
return ret_value__13654__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13653__auto__ = function(state_14000){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13653__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13653__auto____1.call(this,state_14000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13653__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13653__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13653__auto__;
})()
;})(switch__13652__auto__,c__13747__auto___14110,jobs,results,process,async))
})();
var state__13749__auto__ = (function (){var statearr_14015 = f__13748__auto__.call(null);
(statearr_14015[(6)] = c__13747__auto___14110);

return statearr_14015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13749__auto__);
});})(c__13747__auto___14110,jobs,results,process,async))
);


var c__13747__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13747__auto__,jobs,results,process,async){
return (function (){
var f__13748__auto__ = (function (){var switch__13652__auto__ = ((function (c__13747__auto__,jobs,results,process,async){
return (function (state_14053){
var state_val_14054 = (state_14053[(1)]);
if((state_val_14054 === (7))){
var inst_14049 = (state_14053[(2)]);
var state_14053__$1 = state_14053;
var statearr_14055_14119 = state_14053__$1;
(statearr_14055_14119[(2)] = inst_14049);

(statearr_14055_14119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14054 === (20))){
var state_14053__$1 = state_14053;
var statearr_14056_14120 = state_14053__$1;
(statearr_14056_14120[(2)] = null);

(statearr_14056_14120[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14054 === (1))){
var state_14053__$1 = state_14053;
var statearr_14057_14121 = state_14053__$1;
(statearr_14057_14121[(2)] = null);

(statearr_14057_14121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14054 === (4))){
var inst_14018 = (state_14053[(7)]);
var inst_14018__$1 = (state_14053[(2)]);
var inst_14019 = (inst_14018__$1 == null);
var state_14053__$1 = (function (){var statearr_14058 = state_14053;
(statearr_14058[(7)] = inst_14018__$1);

return statearr_14058;
})();
if(cljs.core.truth_(inst_14019)){
var statearr_14059_14122 = state_14053__$1;
(statearr_14059_14122[(1)] = (5));

} else {
var statearr_14060_14123 = state_14053__$1;
(statearr_14060_14123[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14054 === (15))){
var inst_14031 = (state_14053[(8)]);
var state_14053__$1 = state_14053;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14053__$1,(18),to,inst_14031);
} else {
if((state_val_14054 === (21))){
var inst_14044 = (state_14053[(2)]);
var state_14053__$1 = state_14053;
var statearr_14061_14124 = state_14053__$1;
(statearr_14061_14124[(2)] = inst_14044);

(statearr_14061_14124[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14054 === (13))){
var inst_14046 = (state_14053[(2)]);
var state_14053__$1 = (function (){var statearr_14062 = state_14053;
(statearr_14062[(9)] = inst_14046);

return statearr_14062;
})();
var statearr_14063_14125 = state_14053__$1;
(statearr_14063_14125[(2)] = null);

(statearr_14063_14125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14054 === (6))){
var inst_14018 = (state_14053[(7)]);
var state_14053__$1 = state_14053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14053__$1,(11),inst_14018);
} else {
if((state_val_14054 === (17))){
var inst_14039 = (state_14053[(2)]);
var state_14053__$1 = state_14053;
if(cljs.core.truth_(inst_14039)){
var statearr_14064_14126 = state_14053__$1;
(statearr_14064_14126[(1)] = (19));

} else {
var statearr_14065_14127 = state_14053__$1;
(statearr_14065_14127[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14054 === (3))){
var inst_14051 = (state_14053[(2)]);
var state_14053__$1 = state_14053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14053__$1,inst_14051);
} else {
if((state_val_14054 === (12))){
var inst_14028 = (state_14053[(10)]);
var state_14053__$1 = state_14053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14053__$1,(14),inst_14028);
} else {
if((state_val_14054 === (2))){
var state_14053__$1 = state_14053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14053__$1,(4),results);
} else {
if((state_val_14054 === (19))){
var state_14053__$1 = state_14053;
var statearr_14066_14128 = state_14053__$1;
(statearr_14066_14128[(2)] = null);

(statearr_14066_14128[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14054 === (11))){
var inst_14028 = (state_14053[(2)]);
var state_14053__$1 = (function (){var statearr_14067 = state_14053;
(statearr_14067[(10)] = inst_14028);

return statearr_14067;
})();
var statearr_14068_14129 = state_14053__$1;
(statearr_14068_14129[(2)] = null);

(statearr_14068_14129[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14054 === (9))){
var state_14053__$1 = state_14053;
var statearr_14069_14130 = state_14053__$1;
(statearr_14069_14130[(2)] = null);

(statearr_14069_14130[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14054 === (5))){
var state_14053__$1 = state_14053;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14070_14131 = state_14053__$1;
(statearr_14070_14131[(1)] = (8));

} else {
var statearr_14071_14132 = state_14053__$1;
(statearr_14071_14132[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14054 === (14))){
var inst_14031 = (state_14053[(8)]);
var inst_14033 = (state_14053[(11)]);
var inst_14031__$1 = (state_14053[(2)]);
var inst_14032 = (inst_14031__$1 == null);
var inst_14033__$1 = cljs.core.not.call(null,inst_14032);
var state_14053__$1 = (function (){var statearr_14072 = state_14053;
(statearr_14072[(8)] = inst_14031__$1);

(statearr_14072[(11)] = inst_14033__$1);

return statearr_14072;
})();
if(inst_14033__$1){
var statearr_14073_14133 = state_14053__$1;
(statearr_14073_14133[(1)] = (15));

} else {
var statearr_14074_14134 = state_14053__$1;
(statearr_14074_14134[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14054 === (16))){
var inst_14033 = (state_14053[(11)]);
var state_14053__$1 = state_14053;
var statearr_14075_14135 = state_14053__$1;
(statearr_14075_14135[(2)] = inst_14033);

(statearr_14075_14135[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14054 === (10))){
var inst_14025 = (state_14053[(2)]);
var state_14053__$1 = state_14053;
var statearr_14076_14136 = state_14053__$1;
(statearr_14076_14136[(2)] = inst_14025);

(statearr_14076_14136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14054 === (18))){
var inst_14036 = (state_14053[(2)]);
var state_14053__$1 = state_14053;
var statearr_14077_14137 = state_14053__$1;
(statearr_14077_14137[(2)] = inst_14036);

(statearr_14077_14137[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14054 === (8))){
var inst_14022 = cljs.core.async.close_BANG_.call(null,to);
var state_14053__$1 = state_14053;
var statearr_14078_14138 = state_14053__$1;
(statearr_14078_14138[(2)] = inst_14022);

(statearr_14078_14138[(1)] = (10));


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
});})(c__13747__auto__,jobs,results,process,async))
;
return ((function (switch__13652__auto__,c__13747__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13653__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13653__auto____0 = (function (){
var statearr_14079 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14079[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13653__auto__);

(statearr_14079[(1)] = (1));

return statearr_14079;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13653__auto____1 = (function (state_14053){
while(true){
var ret_value__13654__auto__ = (function (){try{while(true){
var result__13655__auto__ = switch__13652__auto__.call(null,state_14053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13655__auto__;
}
break;
}
}catch (e14080){if((e14080 instanceof Object)){
var ex__13656__auto__ = e14080;
var statearr_14081_14139 = state_14053;
(statearr_14081_14139[(5)] = ex__13656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14140 = state_14053;
state_14053 = G__14140;
continue;
} else {
return ret_value__13654__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13653__auto__ = function(state_14053){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13653__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13653__auto____1.call(this,state_14053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13653__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13653__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13653__auto__;
})()
;})(switch__13652__auto__,c__13747__auto__,jobs,results,process,async))
})();
var state__13749__auto__ = (function (){var statearr_14082 = f__13748__auto__.call(null);
(statearr_14082[(6)] = c__13747__auto__);

return statearr_14082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13749__auto__);
});})(c__13747__auto__,jobs,results,process,async))
);

return c__13747__auto__;
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
var G__14142 = arguments.length;
switch (G__14142) {
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
var G__14145 = arguments.length;
switch (G__14145) {
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
var G__14148 = arguments.length;
switch (G__14148) {
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
var c__13747__auto___14197 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13747__auto___14197,tc,fc){
return (function (){
var f__13748__auto__ = (function (){var switch__13652__auto__ = ((function (c__13747__auto___14197,tc,fc){
return (function (state_14174){
var state_val_14175 = (state_14174[(1)]);
if((state_val_14175 === (7))){
var inst_14170 = (state_14174[(2)]);
var state_14174__$1 = state_14174;
var statearr_14176_14198 = state_14174__$1;
(statearr_14176_14198[(2)] = inst_14170);

(statearr_14176_14198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (1))){
var state_14174__$1 = state_14174;
var statearr_14177_14199 = state_14174__$1;
(statearr_14177_14199[(2)] = null);

(statearr_14177_14199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (4))){
var inst_14151 = (state_14174[(7)]);
var inst_14151__$1 = (state_14174[(2)]);
var inst_14152 = (inst_14151__$1 == null);
var state_14174__$1 = (function (){var statearr_14178 = state_14174;
(statearr_14178[(7)] = inst_14151__$1);

return statearr_14178;
})();
if(cljs.core.truth_(inst_14152)){
var statearr_14179_14200 = state_14174__$1;
(statearr_14179_14200[(1)] = (5));

} else {
var statearr_14180_14201 = state_14174__$1;
(statearr_14180_14201[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (13))){
var state_14174__$1 = state_14174;
var statearr_14181_14202 = state_14174__$1;
(statearr_14181_14202[(2)] = null);

(statearr_14181_14202[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (6))){
var inst_14151 = (state_14174[(7)]);
var inst_14157 = p.call(null,inst_14151);
var state_14174__$1 = state_14174;
if(cljs.core.truth_(inst_14157)){
var statearr_14182_14203 = state_14174__$1;
(statearr_14182_14203[(1)] = (9));

} else {
var statearr_14183_14204 = state_14174__$1;
(statearr_14183_14204[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (3))){
var inst_14172 = (state_14174[(2)]);
var state_14174__$1 = state_14174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14174__$1,inst_14172);
} else {
if((state_val_14175 === (12))){
var state_14174__$1 = state_14174;
var statearr_14184_14205 = state_14174__$1;
(statearr_14184_14205[(2)] = null);

(statearr_14184_14205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (2))){
var state_14174__$1 = state_14174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14174__$1,(4),ch);
} else {
if((state_val_14175 === (11))){
var inst_14151 = (state_14174[(7)]);
var inst_14161 = (state_14174[(2)]);
var state_14174__$1 = state_14174;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14174__$1,(8),inst_14161,inst_14151);
} else {
if((state_val_14175 === (9))){
var state_14174__$1 = state_14174;
var statearr_14185_14206 = state_14174__$1;
(statearr_14185_14206[(2)] = tc);

(statearr_14185_14206[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (5))){
var inst_14154 = cljs.core.async.close_BANG_.call(null,tc);
var inst_14155 = cljs.core.async.close_BANG_.call(null,fc);
var state_14174__$1 = (function (){var statearr_14186 = state_14174;
(statearr_14186[(8)] = inst_14154);

return statearr_14186;
})();
var statearr_14187_14207 = state_14174__$1;
(statearr_14187_14207[(2)] = inst_14155);

(statearr_14187_14207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (14))){
var inst_14168 = (state_14174[(2)]);
var state_14174__$1 = state_14174;
var statearr_14188_14208 = state_14174__$1;
(statearr_14188_14208[(2)] = inst_14168);

(statearr_14188_14208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (10))){
var state_14174__$1 = state_14174;
var statearr_14189_14209 = state_14174__$1;
(statearr_14189_14209[(2)] = fc);

(statearr_14189_14209[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (8))){
var inst_14163 = (state_14174[(2)]);
var state_14174__$1 = state_14174;
if(cljs.core.truth_(inst_14163)){
var statearr_14190_14210 = state_14174__$1;
(statearr_14190_14210[(1)] = (12));

} else {
var statearr_14191_14211 = state_14174__$1;
(statearr_14191_14211[(1)] = (13));

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
});})(c__13747__auto___14197,tc,fc))
;
return ((function (switch__13652__auto__,c__13747__auto___14197,tc,fc){
return (function() {
var cljs$core$async$state_machine__13653__auto__ = null;
var cljs$core$async$state_machine__13653__auto____0 = (function (){
var statearr_14192 = [null,null,null,null,null,null,null,null,null];
(statearr_14192[(0)] = cljs$core$async$state_machine__13653__auto__);

(statearr_14192[(1)] = (1));

return statearr_14192;
});
var cljs$core$async$state_machine__13653__auto____1 = (function (state_14174){
while(true){
var ret_value__13654__auto__ = (function (){try{while(true){
var result__13655__auto__ = switch__13652__auto__.call(null,state_14174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13655__auto__;
}
break;
}
}catch (e14193){if((e14193 instanceof Object)){
var ex__13656__auto__ = e14193;
var statearr_14194_14212 = state_14174;
(statearr_14194_14212[(5)] = ex__13656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14213 = state_14174;
state_14174 = G__14213;
continue;
} else {
return ret_value__13654__auto__;
}
break;
}
});
cljs$core$async$state_machine__13653__auto__ = function(state_14174){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13653__auto____1.call(this,state_14174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13653__auto____0;
cljs$core$async$state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13653__auto____1;
return cljs$core$async$state_machine__13653__auto__;
})()
;})(switch__13652__auto__,c__13747__auto___14197,tc,fc))
})();
var state__13749__auto__ = (function (){var statearr_14195 = f__13748__auto__.call(null);
(statearr_14195[(6)] = c__13747__auto___14197);

return statearr_14195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13749__auto__);
});})(c__13747__auto___14197,tc,fc))
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
var c__13747__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13747__auto__){
return (function (){
var f__13748__auto__ = (function (){var switch__13652__auto__ = ((function (c__13747__auto__){
return (function (state_14234){
var state_val_14235 = (state_14234[(1)]);
if((state_val_14235 === (7))){
var inst_14230 = (state_14234[(2)]);
var state_14234__$1 = state_14234;
var statearr_14236_14254 = state_14234__$1;
(statearr_14236_14254[(2)] = inst_14230);

(statearr_14236_14254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14235 === (1))){
var inst_14214 = init;
var state_14234__$1 = (function (){var statearr_14237 = state_14234;
(statearr_14237[(7)] = inst_14214);

return statearr_14237;
})();
var statearr_14238_14255 = state_14234__$1;
(statearr_14238_14255[(2)] = null);

(statearr_14238_14255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14235 === (4))){
var inst_14217 = (state_14234[(8)]);
var inst_14217__$1 = (state_14234[(2)]);
var inst_14218 = (inst_14217__$1 == null);
var state_14234__$1 = (function (){var statearr_14239 = state_14234;
(statearr_14239[(8)] = inst_14217__$1);

return statearr_14239;
})();
if(cljs.core.truth_(inst_14218)){
var statearr_14240_14256 = state_14234__$1;
(statearr_14240_14256[(1)] = (5));

} else {
var statearr_14241_14257 = state_14234__$1;
(statearr_14241_14257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14235 === (6))){
var inst_14217 = (state_14234[(8)]);
var inst_14214 = (state_14234[(7)]);
var inst_14221 = (state_14234[(9)]);
var inst_14221__$1 = f.call(null,inst_14214,inst_14217);
var inst_14222 = cljs.core.reduced_QMARK_.call(null,inst_14221__$1);
var state_14234__$1 = (function (){var statearr_14242 = state_14234;
(statearr_14242[(9)] = inst_14221__$1);

return statearr_14242;
})();
if(inst_14222){
var statearr_14243_14258 = state_14234__$1;
(statearr_14243_14258[(1)] = (8));

} else {
var statearr_14244_14259 = state_14234__$1;
(statearr_14244_14259[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14235 === (3))){
var inst_14232 = (state_14234[(2)]);
var state_14234__$1 = state_14234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14234__$1,inst_14232);
} else {
if((state_val_14235 === (2))){
var state_14234__$1 = state_14234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14234__$1,(4),ch);
} else {
if((state_val_14235 === (9))){
var inst_14221 = (state_14234[(9)]);
var inst_14214 = inst_14221;
var state_14234__$1 = (function (){var statearr_14245 = state_14234;
(statearr_14245[(7)] = inst_14214);

return statearr_14245;
})();
var statearr_14246_14260 = state_14234__$1;
(statearr_14246_14260[(2)] = null);

(statearr_14246_14260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14235 === (5))){
var inst_14214 = (state_14234[(7)]);
var state_14234__$1 = state_14234;
var statearr_14247_14261 = state_14234__$1;
(statearr_14247_14261[(2)] = inst_14214);

(statearr_14247_14261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14235 === (10))){
var inst_14228 = (state_14234[(2)]);
var state_14234__$1 = state_14234;
var statearr_14248_14262 = state_14234__$1;
(statearr_14248_14262[(2)] = inst_14228);

(statearr_14248_14262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14235 === (8))){
var inst_14221 = (state_14234[(9)]);
var inst_14224 = cljs.core.deref.call(null,inst_14221);
var state_14234__$1 = state_14234;
var statearr_14249_14263 = state_14234__$1;
(statearr_14249_14263[(2)] = inst_14224);

(statearr_14249_14263[(1)] = (10));


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
});})(c__13747__auto__))
;
return ((function (switch__13652__auto__,c__13747__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__13653__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13653__auto____0 = (function (){
var statearr_14250 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14250[(0)] = cljs$core$async$reduce_$_state_machine__13653__auto__);

(statearr_14250[(1)] = (1));

return statearr_14250;
});
var cljs$core$async$reduce_$_state_machine__13653__auto____1 = (function (state_14234){
while(true){
var ret_value__13654__auto__ = (function (){try{while(true){
var result__13655__auto__ = switch__13652__auto__.call(null,state_14234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13655__auto__;
}
break;
}
}catch (e14251){if((e14251 instanceof Object)){
var ex__13656__auto__ = e14251;
var statearr_14252_14264 = state_14234;
(statearr_14252_14264[(5)] = ex__13656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14265 = state_14234;
state_14234 = G__14265;
continue;
} else {
return ret_value__13654__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13653__auto__ = function(state_14234){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13653__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13653__auto____1.call(this,state_14234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13653__auto____0;
cljs$core$async$reduce_$_state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13653__auto____1;
return cljs$core$async$reduce_$_state_machine__13653__auto__;
})()
;})(switch__13652__auto__,c__13747__auto__))
})();
var state__13749__auto__ = (function (){var statearr_14253 = f__13748__auto__.call(null);
(statearr_14253[(6)] = c__13747__auto__);

return statearr_14253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13749__auto__);
});})(c__13747__auto__))
);

return c__13747__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__13747__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13747__auto__,f__$1){
return (function (){
var f__13748__auto__ = (function (){var switch__13652__auto__ = ((function (c__13747__auto__,f__$1){
return (function (state_14271){
var state_val_14272 = (state_14271[(1)]);
if((state_val_14272 === (1))){
var inst_14266 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_14271__$1 = state_14271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14271__$1,(2),inst_14266);
} else {
if((state_val_14272 === (2))){
var inst_14268 = (state_14271[(2)]);
var inst_14269 = f__$1.call(null,inst_14268);
var state_14271__$1 = state_14271;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14271__$1,inst_14269);
} else {
return null;
}
}
});})(c__13747__auto__,f__$1))
;
return ((function (switch__13652__auto__,c__13747__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__13653__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13653__auto____0 = (function (){
var statearr_14273 = [null,null,null,null,null,null,null];
(statearr_14273[(0)] = cljs$core$async$transduce_$_state_machine__13653__auto__);

(statearr_14273[(1)] = (1));

return statearr_14273;
});
var cljs$core$async$transduce_$_state_machine__13653__auto____1 = (function (state_14271){
while(true){
var ret_value__13654__auto__ = (function (){try{while(true){
var result__13655__auto__ = switch__13652__auto__.call(null,state_14271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13655__auto__;
}
break;
}
}catch (e14274){if((e14274 instanceof Object)){
var ex__13656__auto__ = e14274;
var statearr_14275_14277 = state_14271;
(statearr_14275_14277[(5)] = ex__13656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14278 = state_14271;
state_14271 = G__14278;
continue;
} else {
return ret_value__13654__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13653__auto__ = function(state_14271){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13653__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13653__auto____1.call(this,state_14271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13653__auto____0;
cljs$core$async$transduce_$_state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13653__auto____1;
return cljs$core$async$transduce_$_state_machine__13653__auto__;
})()
;})(switch__13652__auto__,c__13747__auto__,f__$1))
})();
var state__13749__auto__ = (function (){var statearr_14276 = f__13748__auto__.call(null);
(statearr_14276[(6)] = c__13747__auto__);

return statearr_14276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13749__auto__);
});})(c__13747__auto__,f__$1))
);

return c__13747__auto__;
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
var G__14280 = arguments.length;
switch (G__14280) {
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
var c__13747__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13747__auto__){
return (function (){
var f__13748__auto__ = (function (){var switch__13652__auto__ = ((function (c__13747__auto__){
return (function (state_14305){
var state_val_14306 = (state_14305[(1)]);
if((state_val_14306 === (7))){
var inst_14287 = (state_14305[(2)]);
var state_14305__$1 = state_14305;
var statearr_14307_14328 = state_14305__$1;
(statearr_14307_14328[(2)] = inst_14287);

(statearr_14307_14328[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (1))){
var inst_14281 = cljs.core.seq.call(null,coll);
var inst_14282 = inst_14281;
var state_14305__$1 = (function (){var statearr_14308 = state_14305;
(statearr_14308[(7)] = inst_14282);

return statearr_14308;
})();
var statearr_14309_14329 = state_14305__$1;
(statearr_14309_14329[(2)] = null);

(statearr_14309_14329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (4))){
var inst_14282 = (state_14305[(7)]);
var inst_14285 = cljs.core.first.call(null,inst_14282);
var state_14305__$1 = state_14305;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14305__$1,(7),ch,inst_14285);
} else {
if((state_val_14306 === (13))){
var inst_14299 = (state_14305[(2)]);
var state_14305__$1 = state_14305;
var statearr_14310_14330 = state_14305__$1;
(statearr_14310_14330[(2)] = inst_14299);

(statearr_14310_14330[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (6))){
var inst_14290 = (state_14305[(2)]);
var state_14305__$1 = state_14305;
if(cljs.core.truth_(inst_14290)){
var statearr_14311_14331 = state_14305__$1;
(statearr_14311_14331[(1)] = (8));

} else {
var statearr_14312_14332 = state_14305__$1;
(statearr_14312_14332[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (3))){
var inst_14303 = (state_14305[(2)]);
var state_14305__$1 = state_14305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14305__$1,inst_14303);
} else {
if((state_val_14306 === (12))){
var state_14305__$1 = state_14305;
var statearr_14313_14333 = state_14305__$1;
(statearr_14313_14333[(2)] = null);

(statearr_14313_14333[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (2))){
var inst_14282 = (state_14305[(7)]);
var state_14305__$1 = state_14305;
if(cljs.core.truth_(inst_14282)){
var statearr_14314_14334 = state_14305__$1;
(statearr_14314_14334[(1)] = (4));

} else {
var statearr_14315_14335 = state_14305__$1;
(statearr_14315_14335[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (11))){
var inst_14296 = cljs.core.async.close_BANG_.call(null,ch);
var state_14305__$1 = state_14305;
var statearr_14316_14336 = state_14305__$1;
(statearr_14316_14336[(2)] = inst_14296);

(statearr_14316_14336[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (9))){
var state_14305__$1 = state_14305;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14317_14337 = state_14305__$1;
(statearr_14317_14337[(1)] = (11));

} else {
var statearr_14318_14338 = state_14305__$1;
(statearr_14318_14338[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (5))){
var inst_14282 = (state_14305[(7)]);
var state_14305__$1 = state_14305;
var statearr_14319_14339 = state_14305__$1;
(statearr_14319_14339[(2)] = inst_14282);

(statearr_14319_14339[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (10))){
var inst_14301 = (state_14305[(2)]);
var state_14305__$1 = state_14305;
var statearr_14320_14340 = state_14305__$1;
(statearr_14320_14340[(2)] = inst_14301);

(statearr_14320_14340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (8))){
var inst_14282 = (state_14305[(7)]);
var inst_14292 = cljs.core.next.call(null,inst_14282);
var inst_14282__$1 = inst_14292;
var state_14305__$1 = (function (){var statearr_14321 = state_14305;
(statearr_14321[(7)] = inst_14282__$1);

return statearr_14321;
})();
var statearr_14322_14341 = state_14305__$1;
(statearr_14322_14341[(2)] = null);

(statearr_14322_14341[(1)] = (2));


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
});})(c__13747__auto__))
;
return ((function (switch__13652__auto__,c__13747__auto__){
return (function() {
var cljs$core$async$state_machine__13653__auto__ = null;
var cljs$core$async$state_machine__13653__auto____0 = (function (){
var statearr_14323 = [null,null,null,null,null,null,null,null];
(statearr_14323[(0)] = cljs$core$async$state_machine__13653__auto__);

(statearr_14323[(1)] = (1));

return statearr_14323;
});
var cljs$core$async$state_machine__13653__auto____1 = (function (state_14305){
while(true){
var ret_value__13654__auto__ = (function (){try{while(true){
var result__13655__auto__ = switch__13652__auto__.call(null,state_14305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13655__auto__;
}
break;
}
}catch (e14324){if((e14324 instanceof Object)){
var ex__13656__auto__ = e14324;
var statearr_14325_14342 = state_14305;
(statearr_14325_14342[(5)] = ex__13656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14343 = state_14305;
state_14305 = G__14343;
continue;
} else {
return ret_value__13654__auto__;
}
break;
}
});
cljs$core$async$state_machine__13653__auto__ = function(state_14305){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13653__auto____1.call(this,state_14305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13653__auto____0;
cljs$core$async$state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13653__auto____1;
return cljs$core$async$state_machine__13653__auto__;
})()
;})(switch__13652__auto__,c__13747__auto__))
})();
var state__13749__auto__ = (function (){var statearr_14326 = f__13748__auto__.call(null);
(statearr_14326[(6)] = c__13747__auto__);

return statearr_14326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13749__auto__);
});})(c__13747__auto__))
);

return c__13747__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14344 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14344 = (function (ch,cs,meta14345){
this.ch = ch;
this.cs = cs;
this.meta14345 = meta14345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14346,meta14345__$1){
var self__ = this;
var _14346__$1 = this;
return (new cljs.core.async.t_cljs$core$async14344(self__.ch,self__.cs,meta14345__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async14344.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14346){
var self__ = this;
var _14346__$1 = this;
return self__.meta14345;
});})(cs))
;

cljs.core.async.t_cljs$core$async14344.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14344.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async14344.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14344.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14344.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14344.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14344.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14345","meta14345",-592973992,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async14344.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14344.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14344";

cljs.core.async.t_cljs$core$async14344.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async14344");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14344.
 */
cljs.core.async.__GT_t_cljs$core$async14344 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async14344(ch__$1,cs__$1,meta14345){
return (new cljs.core.async.t_cljs$core$async14344(ch__$1,cs__$1,meta14345));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async14344(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__13747__auto___14566 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13747__auto___14566,cs,m,dchan,dctr,done){
return (function (){
var f__13748__auto__ = (function (){var switch__13652__auto__ = ((function (c__13747__auto___14566,cs,m,dchan,dctr,done){
return (function (state_14481){
var state_val_14482 = (state_14481[(1)]);
if((state_val_14482 === (7))){
var inst_14477 = (state_14481[(2)]);
var state_14481__$1 = state_14481;
var statearr_14483_14567 = state_14481__$1;
(statearr_14483_14567[(2)] = inst_14477);

(statearr_14483_14567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14482 === (20))){
var inst_14380 = (state_14481[(7)]);
var inst_14392 = cljs.core.first.call(null,inst_14380);
var inst_14393 = cljs.core.nth.call(null,inst_14392,(0),null);
var inst_14394 = cljs.core.nth.call(null,inst_14392,(1),null);
var state_14481__$1 = (function (){var statearr_14484 = state_14481;
(statearr_14484[(8)] = inst_14393);

return statearr_14484;
})();
if(cljs.core.truth_(inst_14394)){
var statearr_14485_14568 = state_14481__$1;
(statearr_14485_14568[(1)] = (22));

} else {
var statearr_14486_14569 = state_14481__$1;
(statearr_14486_14569[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14482 === (27))){
var inst_14349 = (state_14481[(9)]);
var inst_14424 = (state_14481[(10)]);
var inst_14422 = (state_14481[(11)]);
var inst_14429 = (state_14481[(12)]);
var inst_14429__$1 = cljs.core._nth.call(null,inst_14422,inst_14424);
var inst_14430 = cljs.core.async.put_BANG_.call(null,inst_14429__$1,inst_14349,done);
var state_14481__$1 = (function (){var statearr_14487 = state_14481;
(statearr_14487[(12)] = inst_14429__$1);

return statearr_14487;
})();
if(cljs.core.truth_(inst_14430)){
var statearr_14488_14570 = state_14481__$1;
(statearr_14488_14570[(1)] = (30));

} else {
var statearr_14489_14571 = state_14481__$1;
(statearr_14489_14571[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14482 === (1))){
var state_14481__$1 = state_14481;
var statearr_14490_14572 = state_14481__$1;
(statearr_14490_14572[(2)] = null);

(statearr_14490_14572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14482 === (24))){
var inst_14380 = (state_14481[(7)]);
var inst_14399 = (state_14481[(2)]);
var inst_14400 = cljs.core.next.call(null,inst_14380);
var inst_14358 = inst_14400;
var inst_14359 = null;
var inst_14360 = (0);
var inst_14361 = (0);
var state_14481__$1 = (function (){var statearr_14491 = state_14481;
(statearr_14491[(13)] = inst_14360);

(statearr_14491[(14)] = inst_14359);

(statearr_14491[(15)] = inst_14399);

(statearr_14491[(16)] = inst_14358);

(statearr_14491[(17)] = inst_14361);

return statearr_14491;
})();
var statearr_14492_14573 = state_14481__$1;
(statearr_14492_14573[(2)] = null);

(statearr_14492_14573[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14482 === (39))){
var state_14481__$1 = state_14481;
var statearr_14496_14574 = state_14481__$1;
(statearr_14496_14574[(2)] = null);

(statearr_14496_14574[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14482 === (4))){
var inst_14349 = (state_14481[(9)]);
var inst_14349__$1 = (state_14481[(2)]);
var inst_14350 = (inst_14349__$1 == null);
var state_14481__$1 = (function (){var statearr_14497 = state_14481;
(statearr_14497[(9)] = inst_14349__$1);

return statearr_14497;
})();
if(cljs.core.truth_(inst_14350)){
var statearr_14498_14575 = state_14481__$1;
(statearr_14498_14575[(1)] = (5));

} else {
var statearr_14499_14576 = state_14481__$1;
(statearr_14499_14576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14482 === (15))){
var inst_14360 = (state_14481[(13)]);
var inst_14359 = (state_14481[(14)]);
var inst_14358 = (state_14481[(16)]);
var inst_14361 = (state_14481[(17)]);
var inst_14376 = (state_14481[(2)]);
var inst_14377 = (inst_14361 + (1));
var tmp14493 = inst_14360;
var tmp14494 = inst_14359;
var tmp14495 = inst_14358;
var inst_14358__$1 = tmp14495;
var inst_14359__$1 = tmp14494;
var inst_14360__$1 = tmp14493;
var inst_14361__$1 = inst_14377;
var state_14481__$1 = (function (){var statearr_14500 = state_14481;
(statearr_14500[(13)] = inst_14360__$1);

(statearr_14500[(14)] = inst_14359__$1);

(statearr_14500[(18)] = inst_14376);

(statearr_14500[(16)] = inst_14358__$1);

(statearr_14500[(17)] = inst_14361__$1);

return statearr_14500;
})();
var statearr_14501_14577 = state_14481__$1;
(statearr_14501_14577[(2)] = null);

(statearr_14501_14577[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14482 === (21))){
var inst_14403 = (state_14481[(2)]);
var state_14481__$1 = state_14481;
var statearr_14505_14578 = state_14481__$1;
(statearr_14505_14578[(2)] = inst_14403);

(statearr_14505_14578[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14482 === (31))){
var inst_14429 = (state_14481[(12)]);
var inst_14433 = done.call(null,null);
var inst_14434 = cljs.core.async.untap_STAR_.call(null,m,inst_14429);
var state_14481__$1 = (function (){var statearr_14506 = state_14481;
(statearr_14506[(19)] = inst_14433);

return statearr_14506;
})();
var statearr_14507_14579 = state_14481__$1;
(statearr_14507_14579[(2)] = inst_14434);

(statearr_14507_14579[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14482 === (32))){
var inst_14423 = (state_14481[(20)]);
var inst_14424 = (state_14481[(10)]);
var inst_14422 = (state_14481[(11)]);
var inst_14421 = (state_14481[(21)]);
var inst_14436 = (state_14481[(2)]);
var inst_14437 = (inst_14424 + (1));
var tmp14502 = inst_14423;
var tmp14503 = inst_14422;
var tmp14504 = inst_14421;
var inst_14421__$1 = tmp14504;
var inst_14422__$1 = tmp14503;
var inst_14423__$1 = tmp14502;
var inst_14424__$1 = inst_14437;
var state_14481__$1 = (function (){var statearr_14508 = state_14481;
(statearr_14508[(22)] = inst_14436);

(statearr_14508[(20)] = inst_14423__$1);

(statearr_14508[(10)] = inst_14424__$1);

(statearr_14508[(11)] = inst_14422__$1);

(statearr_14508[(21)] = inst_14421__$1);

return statearr_14508;
})();
var statearr_14509_14580 = state_14481__$1;
(statearr_14509_14580[(2)] = null);

(statearr_14509_14580[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14482 === (40))){
var inst_14449 = (state_14481[(23)]);
var inst_14453 = done.call(null,null);
var inst_14454 = cljs.core.async.untap_STAR_.call(null,m,inst_14449);
var state_14481__$1 = (function (){var statearr_14510 = state_14481;
(statearr_14510[(24)] = inst_14453);

return statearr_14510;
})();
var statearr_14511_14581 = state_14481__$1;
(statearr_14511_14581[(2)] = inst_14454);

(statearr_14511_14581[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14482 === (33))){
var inst_14440 = (state_14481[(25)]);
var inst_14442 = cljs.core.chunked_seq_QMARK_.call(null,inst_14440);
var state_14481__$1 = state_14481;
if(inst_14442){
var statearr_14512_14582 = state_14481__$1;
(statearr_14512_14582[(1)] = (36));

} else {
var statearr_14513_14583 = state_14481__$1;
(statearr_14513_14583[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14482 === (13))){
var inst_14370 = (state_14481[(26)]);
var inst_14373 = cljs.core.async.close_BANG_.call(null,inst_14370);
var state_14481__$1 = state_14481;
var statearr_14514_14584 = state_14481__$1;
(statearr_14514_14584[(2)] = inst_14373);

(statearr_14514_14584[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14482 === (22))){
var inst_14393 = (state_14481[(8)]);
var inst_14396 = cljs.core.async.close_BANG_.call(null,inst_14393);
var state_14481__$1 = state_14481;
var statearr_14515_14585 = state_14481__$1;
(statearr_14515_14585[(2)] = inst_14396);

(statearr_14515_14585[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14482 === (36))){
var inst_14440 = (state_14481[(25)]);
var inst_14444 = cljs.core.chunk_first.call(null,inst_14440);
var inst_14445 = cljs.core.chunk_rest.call(null,inst_14440);
var inst_14446 = cljs.core.count.call(null,inst_14444);
var inst_14421 = inst_14445;
var inst_14422 = inst_14444;
var inst_14423 = inst_14446;
var inst_14424 = (0);
var state_14481__$1 = (function (){var statearr_14516 = state_14481;
(statearr_14516[(20)] = inst_14423);

(statearr_14516[(10)] = inst_14424);

(statearr_14516[(11)] = inst_14422);

(statearr_14516[(21)] = inst_14421);

return statearr_14516;
})();
var statearr_14517_14586 = state_14481__$1;
(statearr_14517_14586[(2)] = null);

(statearr_14517_14586[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14482 === (41))){
var inst_14440 = (state_14481[(25)]);
var inst_14456 = (state_14481[(2)]);
var inst_14457 = cljs.core.next.call(null,inst_14440);
var inst_14421 = inst_14457;
var inst_14422 = null;
var inst_14423 = (0);
var inst_14424 = (0);
var state_14481__$1 = (function (){var statearr_14518 = state_14481;
(statearr_14518[(20)] = inst_14423);

(statearr_14518[(27)] = inst_14456);

(statearr_14518[(10)] = inst_14424);

(statearr_14518[(11)] = inst_14422);

(statearr_14518[(21)] = inst_14421);

return statearr_14518;
})();
var statearr_14519_14587 = state_14481__$1;
(statearr_14519_14587[(2)] = null);

(statearr_14519_14587[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14482 === (43))){
var state_14481__$1 = state_14481;
var statearr_14520_14588 = state_14481__$1;
(statearr_14520_14588[(2)] = null);

(statearr_14520_14588[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14482 === (29))){
var inst_14465 = (state_14481[(2)]);
var state_14481__$1 = state_14481;
var statearr_14521_14589 = state_14481__$1;
(statearr_14521_14589[(2)] = inst_14465);

(statearr_14521_14589[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14482 === (44))){
var inst_14474 = (state_14481[(2)]);
var state_14481__$1 = (function (){var statearr_14522 = state_14481;
(statearr_14522[(28)] = inst_14474);

return statearr_14522;
})();
var statearr_14523_14590 = state_14481__$1;
(statearr_14523_14590[(2)] = null);

(statearr_14523_14590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14482 === (6))){
var inst_14413 = (state_14481[(29)]);
var inst_14412 = cljs.core.deref.call(null,cs);
var inst_14413__$1 = cljs.core.keys.call(null,inst_14412);
var inst_14414 = cljs.core.count.call(null,inst_14413__$1);
var inst_14415 = cljs.core.reset_BANG_.call(null,dctr,inst_14414);
var inst_14420 = cljs.core.seq.call(null,inst_14413__$1);
var inst_14421 = inst_14420;
var inst_14422 = null;
var inst_14423 = (0);
var inst_14424 = (0);
var state_14481__$1 = (function (){var statearr_14524 = state_14481;
(statearr_14524[(20)] = inst_14423);

(statearr_14524[(10)] = inst_14424);

(statearr_14524[(11)] = inst_14422);

(statearr_14524[(29)] = inst_14413__$1);

(statearr_14524[(21)] = inst_14421);

(statearr_14524[(30)] = inst_14415);

return statearr_14524;
})();
var statearr_14525_14591 = state_14481__$1;
(statearr_14525_14591[(2)] = null);

(statearr_14525_14591[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14482 === (28))){
var inst_14421 = (state_14481[(21)]);
var inst_14440 = (state_14481[(25)]);
var inst_14440__$1 = cljs.core.seq.call(null,inst_14421);
var state_14481__$1 = (function (){var statearr_14526 = state_14481;
(statearr_14526[(25)] = inst_14440__$1);

return statearr_14526;
})();
if(inst_14440__$1){
var statearr_14527_14592 = state_14481__$1;
(statearr_14527_14592[(1)] = (33));

} else {
var statearr_14528_14593 = state_14481__$1;
(statearr_14528_14593[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14482 === (25))){
var inst_14423 = (state_14481[(20)]);
var inst_14424 = (state_14481[(10)]);
var inst_14426 = (inst_14424 < inst_14423);
var inst_14427 = inst_14426;
var state_14481__$1 = state_14481;
if(cljs.core.truth_(inst_14427)){
var statearr_14529_14594 = state_14481__$1;
(statearr_14529_14594[(1)] = (27));

} else {
var statearr_14530_14595 = state_14481__$1;
(statearr_14530_14595[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14482 === (34))){
var state_14481__$1 = state_14481;
var statearr_14531_14596 = state_14481__$1;
(statearr_14531_14596[(2)] = null);

(statearr_14531_14596[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14482 === (17))){
var state_14481__$1 = state_14481;
var statearr_14532_14597 = state_14481__$1;
(statearr_14532_14597[(2)] = null);

(statearr_14532_14597[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14482 === (3))){
var inst_14479 = (state_14481[(2)]);
var state_14481__$1 = state_14481;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14481__$1,inst_14479);
} else {
if((state_val_14482 === (12))){
var inst_14408 = (state_14481[(2)]);
var state_14481__$1 = state_14481;
var statearr_14533_14598 = state_14481__$1;
(statearr_14533_14598[(2)] = inst_14408);

(statearr_14533_14598[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14482 === (2))){
var state_14481__$1 = state_14481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14481__$1,(4),ch);
} else {
if((state_val_14482 === (23))){
var state_14481__$1 = state_14481;
var statearr_14534_14599 = state_14481__$1;
(statearr_14534_14599[(2)] = null);

(statearr_14534_14599[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14482 === (35))){
var inst_14463 = (state_14481[(2)]);
var state_14481__$1 = state_14481;
var statearr_14535_14600 = state_14481__$1;
(statearr_14535_14600[(2)] = inst_14463);

(statearr_14535_14600[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14482 === (19))){
var inst_14380 = (state_14481[(7)]);
var inst_14384 = cljs.core.chunk_first.call(null,inst_14380);
var inst_14385 = cljs.core.chunk_rest.call(null,inst_14380);
var inst_14386 = cljs.core.count.call(null,inst_14384);
var inst_14358 = inst_14385;
var inst_14359 = inst_14384;
var inst_14360 = inst_14386;
var inst_14361 = (0);
var state_14481__$1 = (function (){var statearr_14536 = state_14481;
(statearr_14536[(13)] = inst_14360);

(statearr_14536[(14)] = inst_14359);

(statearr_14536[(16)] = inst_14358);

(statearr_14536[(17)] = inst_14361);

return statearr_14536;
})();
var statearr_14537_14601 = state_14481__$1;
(statearr_14537_14601[(2)] = null);

(statearr_14537_14601[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14482 === (11))){
var inst_14380 = (state_14481[(7)]);
var inst_14358 = (state_14481[(16)]);
var inst_14380__$1 = cljs.core.seq.call(null,inst_14358);
var state_14481__$1 = (function (){var statearr_14538 = state_14481;
(statearr_14538[(7)] = inst_14380__$1);

return statearr_14538;
})();
if(inst_14380__$1){
var statearr_14539_14602 = state_14481__$1;
(statearr_14539_14602[(1)] = (16));

} else {
var statearr_14540_14603 = state_14481__$1;
(statearr_14540_14603[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14482 === (9))){
var inst_14410 = (state_14481[(2)]);
var state_14481__$1 = state_14481;
var statearr_14541_14604 = state_14481__$1;
(statearr_14541_14604[(2)] = inst_14410);

(statearr_14541_14604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14482 === (5))){
var inst_14356 = cljs.core.deref.call(null,cs);
var inst_14357 = cljs.core.seq.call(null,inst_14356);
var inst_14358 = inst_14357;
var inst_14359 = null;
var inst_14360 = (0);
var inst_14361 = (0);
var state_14481__$1 = (function (){var statearr_14542 = state_14481;
(statearr_14542[(13)] = inst_14360);

(statearr_14542[(14)] = inst_14359);

(statearr_14542[(16)] = inst_14358);

(statearr_14542[(17)] = inst_14361);

return statearr_14542;
})();
var statearr_14543_14605 = state_14481__$1;
(statearr_14543_14605[(2)] = null);

(statearr_14543_14605[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14482 === (14))){
var state_14481__$1 = state_14481;
var statearr_14544_14606 = state_14481__$1;
(statearr_14544_14606[(2)] = null);

(statearr_14544_14606[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14482 === (45))){
var inst_14471 = (state_14481[(2)]);
var state_14481__$1 = state_14481;
var statearr_14545_14607 = state_14481__$1;
(statearr_14545_14607[(2)] = inst_14471);

(statearr_14545_14607[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14482 === (26))){
var inst_14413 = (state_14481[(29)]);
var inst_14467 = (state_14481[(2)]);
var inst_14468 = cljs.core.seq.call(null,inst_14413);
var state_14481__$1 = (function (){var statearr_14546 = state_14481;
(statearr_14546[(31)] = inst_14467);

return statearr_14546;
})();
if(inst_14468){
var statearr_14547_14608 = state_14481__$1;
(statearr_14547_14608[(1)] = (42));

} else {
var statearr_14548_14609 = state_14481__$1;
(statearr_14548_14609[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14482 === (16))){
var inst_14380 = (state_14481[(7)]);
var inst_14382 = cljs.core.chunked_seq_QMARK_.call(null,inst_14380);
var state_14481__$1 = state_14481;
if(inst_14382){
var statearr_14549_14610 = state_14481__$1;
(statearr_14549_14610[(1)] = (19));

} else {
var statearr_14550_14611 = state_14481__$1;
(statearr_14550_14611[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14482 === (38))){
var inst_14460 = (state_14481[(2)]);
var state_14481__$1 = state_14481;
var statearr_14551_14612 = state_14481__$1;
(statearr_14551_14612[(2)] = inst_14460);

(statearr_14551_14612[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14482 === (30))){
var state_14481__$1 = state_14481;
var statearr_14552_14613 = state_14481__$1;
(statearr_14552_14613[(2)] = null);

(statearr_14552_14613[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14482 === (10))){
var inst_14359 = (state_14481[(14)]);
var inst_14361 = (state_14481[(17)]);
var inst_14369 = cljs.core._nth.call(null,inst_14359,inst_14361);
var inst_14370 = cljs.core.nth.call(null,inst_14369,(0),null);
var inst_14371 = cljs.core.nth.call(null,inst_14369,(1),null);
var state_14481__$1 = (function (){var statearr_14553 = state_14481;
(statearr_14553[(26)] = inst_14370);

return statearr_14553;
})();
if(cljs.core.truth_(inst_14371)){
var statearr_14554_14614 = state_14481__$1;
(statearr_14554_14614[(1)] = (13));

} else {
var statearr_14555_14615 = state_14481__$1;
(statearr_14555_14615[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14482 === (18))){
var inst_14406 = (state_14481[(2)]);
var state_14481__$1 = state_14481;
var statearr_14556_14616 = state_14481__$1;
(statearr_14556_14616[(2)] = inst_14406);

(statearr_14556_14616[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14482 === (42))){
var state_14481__$1 = state_14481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14481__$1,(45),dchan);
} else {
if((state_val_14482 === (37))){
var inst_14449 = (state_14481[(23)]);
var inst_14349 = (state_14481[(9)]);
var inst_14440 = (state_14481[(25)]);
var inst_14449__$1 = cljs.core.first.call(null,inst_14440);
var inst_14450 = cljs.core.async.put_BANG_.call(null,inst_14449__$1,inst_14349,done);
var state_14481__$1 = (function (){var statearr_14557 = state_14481;
(statearr_14557[(23)] = inst_14449__$1);

return statearr_14557;
})();
if(cljs.core.truth_(inst_14450)){
var statearr_14558_14617 = state_14481__$1;
(statearr_14558_14617[(1)] = (39));

} else {
var statearr_14559_14618 = state_14481__$1;
(statearr_14559_14618[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14482 === (8))){
var inst_14360 = (state_14481[(13)]);
var inst_14361 = (state_14481[(17)]);
var inst_14363 = (inst_14361 < inst_14360);
var inst_14364 = inst_14363;
var state_14481__$1 = state_14481;
if(cljs.core.truth_(inst_14364)){
var statearr_14560_14619 = state_14481__$1;
(statearr_14560_14619[(1)] = (10));

} else {
var statearr_14561_14620 = state_14481__$1;
(statearr_14561_14620[(1)] = (11));

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
});})(c__13747__auto___14566,cs,m,dchan,dctr,done))
;
return ((function (switch__13652__auto__,c__13747__auto___14566,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__13653__auto__ = null;
var cljs$core$async$mult_$_state_machine__13653__auto____0 = (function (){
var statearr_14562 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14562[(0)] = cljs$core$async$mult_$_state_machine__13653__auto__);

(statearr_14562[(1)] = (1));

return statearr_14562;
});
var cljs$core$async$mult_$_state_machine__13653__auto____1 = (function (state_14481){
while(true){
var ret_value__13654__auto__ = (function (){try{while(true){
var result__13655__auto__ = switch__13652__auto__.call(null,state_14481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13655__auto__;
}
break;
}
}catch (e14563){if((e14563 instanceof Object)){
var ex__13656__auto__ = e14563;
var statearr_14564_14621 = state_14481;
(statearr_14564_14621[(5)] = ex__13656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14563;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14622 = state_14481;
state_14481 = G__14622;
continue;
} else {
return ret_value__13654__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13653__auto__ = function(state_14481){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13653__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13653__auto____1.call(this,state_14481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13653__auto____0;
cljs$core$async$mult_$_state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13653__auto____1;
return cljs$core$async$mult_$_state_machine__13653__auto__;
})()
;})(switch__13652__auto__,c__13747__auto___14566,cs,m,dchan,dctr,done))
})();
var state__13749__auto__ = (function (){var statearr_14565 = f__13748__auto__.call(null);
(statearr_14565[(6)] = c__13747__auto___14566);

return statearr_14565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13749__auto__);
});})(c__13747__auto___14566,cs,m,dchan,dctr,done))
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
var G__14624 = arguments.length;
switch (G__14624) {
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
var len__4641__auto___14636 = arguments.length;
var i__4642__auto___14637 = (0);
while(true){
if((i__4642__auto___14637 < len__4641__auto___14636)){
args__4647__auto__.push((arguments[i__4642__auto___14637]));

var G__14638 = (i__4642__auto___14637 + (1));
i__4642__auto___14637 = G__14638;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14630){
var map__14631 = p__14630;
var map__14631__$1 = (((((!((map__14631 == null))))?(((((map__14631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14631):map__14631);
var opts = map__14631__$1;
var statearr_14633_14639 = state;
(statearr_14633_14639[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__14631,map__14631__$1,opts){
return (function (val){
var statearr_14634_14640 = state;
(statearr_14634_14640[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__14631,map__14631__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_14635_14641 = state;
(statearr_14635_14641[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14626){
var G__14627 = cljs.core.first.call(null,seq14626);
var seq14626__$1 = cljs.core.next.call(null,seq14626);
var G__14628 = cljs.core.first.call(null,seq14626__$1);
var seq14626__$2 = cljs.core.next.call(null,seq14626__$1);
var G__14629 = cljs.core.first.call(null,seq14626__$2);
var seq14626__$3 = cljs.core.next.call(null,seq14626__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14627,G__14628,G__14629,seq14626__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14642 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14642 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14643){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta14643 = meta14643;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14644,meta14643__$1){
var self__ = this;
var _14644__$1 = this;
return (new cljs.core.async.t_cljs$core$async14642(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14643__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14642.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14644){
var self__ = this;
var _14644__$1 = this;
return self__.meta14643;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14642.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14642.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14642.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14642.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14642.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14642.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14642.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14642.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async14642.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta14643","meta14643",-1169288893,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14642.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14642.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14642";

cljs.core.async.t_cljs$core$async14642.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async14642");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14642.
 */
cljs.core.async.__GT_t_cljs$core$async14642 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async14642(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14643){
return (new cljs.core.async.t_cljs$core$async14642(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14643));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async14642(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13747__auto___14806 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13747__auto___14806,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__13748__auto__ = (function (){var switch__13652__auto__ = ((function (c__13747__auto___14806,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14746){
var state_val_14747 = (state_14746[(1)]);
if((state_val_14747 === (7))){
var inst_14661 = (state_14746[(2)]);
var state_14746__$1 = state_14746;
var statearr_14748_14807 = state_14746__$1;
(statearr_14748_14807[(2)] = inst_14661);

(statearr_14748_14807[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14747 === (20))){
var inst_14673 = (state_14746[(7)]);
var state_14746__$1 = state_14746;
var statearr_14749_14808 = state_14746__$1;
(statearr_14749_14808[(2)] = inst_14673);

(statearr_14749_14808[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14747 === (27))){
var state_14746__$1 = state_14746;
var statearr_14750_14809 = state_14746__$1;
(statearr_14750_14809[(2)] = null);

(statearr_14750_14809[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14747 === (1))){
var inst_14648 = (state_14746[(8)]);
var inst_14648__$1 = calc_state.call(null);
var inst_14650 = (inst_14648__$1 == null);
var inst_14651 = cljs.core.not.call(null,inst_14650);
var state_14746__$1 = (function (){var statearr_14751 = state_14746;
(statearr_14751[(8)] = inst_14648__$1);

return statearr_14751;
})();
if(inst_14651){
var statearr_14752_14810 = state_14746__$1;
(statearr_14752_14810[(1)] = (2));

} else {
var statearr_14753_14811 = state_14746__$1;
(statearr_14753_14811[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14747 === (24))){
var inst_14697 = (state_14746[(9)]);
var inst_14706 = (state_14746[(10)]);
var inst_14720 = (state_14746[(11)]);
var inst_14720__$1 = inst_14697.call(null,inst_14706);
var state_14746__$1 = (function (){var statearr_14754 = state_14746;
(statearr_14754[(11)] = inst_14720__$1);

return statearr_14754;
})();
if(cljs.core.truth_(inst_14720__$1)){
var statearr_14755_14812 = state_14746__$1;
(statearr_14755_14812[(1)] = (29));

} else {
var statearr_14756_14813 = state_14746__$1;
(statearr_14756_14813[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14747 === (4))){
var inst_14664 = (state_14746[(2)]);
var state_14746__$1 = state_14746;
if(cljs.core.truth_(inst_14664)){
var statearr_14757_14814 = state_14746__$1;
(statearr_14757_14814[(1)] = (8));

} else {
var statearr_14758_14815 = state_14746__$1;
(statearr_14758_14815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14747 === (15))){
var inst_14691 = (state_14746[(2)]);
var state_14746__$1 = state_14746;
if(cljs.core.truth_(inst_14691)){
var statearr_14759_14816 = state_14746__$1;
(statearr_14759_14816[(1)] = (19));

} else {
var statearr_14760_14817 = state_14746__$1;
(statearr_14760_14817[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14747 === (21))){
var inst_14696 = (state_14746[(12)]);
var inst_14696__$1 = (state_14746[(2)]);
var inst_14697 = cljs.core.get.call(null,inst_14696__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14698 = cljs.core.get.call(null,inst_14696__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14699 = cljs.core.get.call(null,inst_14696__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_14746__$1 = (function (){var statearr_14761 = state_14746;
(statearr_14761[(9)] = inst_14697);

(statearr_14761[(12)] = inst_14696__$1);

(statearr_14761[(13)] = inst_14698);

return statearr_14761;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_14746__$1,(22),inst_14699);
} else {
if((state_val_14747 === (31))){
var inst_14728 = (state_14746[(2)]);
var state_14746__$1 = state_14746;
if(cljs.core.truth_(inst_14728)){
var statearr_14762_14818 = state_14746__$1;
(statearr_14762_14818[(1)] = (32));

} else {
var statearr_14763_14819 = state_14746__$1;
(statearr_14763_14819[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14747 === (32))){
var inst_14705 = (state_14746[(14)]);
var state_14746__$1 = state_14746;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14746__$1,(35),out,inst_14705);
} else {
if((state_val_14747 === (33))){
var inst_14696 = (state_14746[(12)]);
var inst_14673 = inst_14696;
var state_14746__$1 = (function (){var statearr_14764 = state_14746;
(statearr_14764[(7)] = inst_14673);

return statearr_14764;
})();
var statearr_14765_14820 = state_14746__$1;
(statearr_14765_14820[(2)] = null);

(statearr_14765_14820[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14747 === (13))){
var inst_14673 = (state_14746[(7)]);
var inst_14680 = inst_14673.cljs$lang$protocol_mask$partition0$;
var inst_14681 = (inst_14680 & (64));
var inst_14682 = inst_14673.cljs$core$ISeq$;
var inst_14683 = (cljs.core.PROTOCOL_SENTINEL === inst_14682);
var inst_14684 = ((inst_14681) || (inst_14683));
var state_14746__$1 = state_14746;
if(cljs.core.truth_(inst_14684)){
var statearr_14766_14821 = state_14746__$1;
(statearr_14766_14821[(1)] = (16));

} else {
var statearr_14767_14822 = state_14746__$1;
(statearr_14767_14822[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14747 === (22))){
var inst_14706 = (state_14746[(10)]);
var inst_14705 = (state_14746[(14)]);
var inst_14704 = (state_14746[(2)]);
var inst_14705__$1 = cljs.core.nth.call(null,inst_14704,(0),null);
var inst_14706__$1 = cljs.core.nth.call(null,inst_14704,(1),null);
var inst_14707 = (inst_14705__$1 == null);
var inst_14708 = cljs.core._EQ_.call(null,inst_14706__$1,change);
var inst_14709 = ((inst_14707) || (inst_14708));
var state_14746__$1 = (function (){var statearr_14768 = state_14746;
(statearr_14768[(10)] = inst_14706__$1);

(statearr_14768[(14)] = inst_14705__$1);

return statearr_14768;
})();
if(cljs.core.truth_(inst_14709)){
var statearr_14769_14823 = state_14746__$1;
(statearr_14769_14823[(1)] = (23));

} else {
var statearr_14770_14824 = state_14746__$1;
(statearr_14770_14824[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14747 === (36))){
var inst_14696 = (state_14746[(12)]);
var inst_14673 = inst_14696;
var state_14746__$1 = (function (){var statearr_14771 = state_14746;
(statearr_14771[(7)] = inst_14673);

return statearr_14771;
})();
var statearr_14772_14825 = state_14746__$1;
(statearr_14772_14825[(2)] = null);

(statearr_14772_14825[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14747 === (29))){
var inst_14720 = (state_14746[(11)]);
var state_14746__$1 = state_14746;
var statearr_14773_14826 = state_14746__$1;
(statearr_14773_14826[(2)] = inst_14720);

(statearr_14773_14826[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14747 === (6))){
var state_14746__$1 = state_14746;
var statearr_14774_14827 = state_14746__$1;
(statearr_14774_14827[(2)] = false);

(statearr_14774_14827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14747 === (28))){
var inst_14716 = (state_14746[(2)]);
var inst_14717 = calc_state.call(null);
var inst_14673 = inst_14717;
var state_14746__$1 = (function (){var statearr_14775 = state_14746;
(statearr_14775[(7)] = inst_14673);

(statearr_14775[(15)] = inst_14716);

return statearr_14775;
})();
var statearr_14776_14828 = state_14746__$1;
(statearr_14776_14828[(2)] = null);

(statearr_14776_14828[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14747 === (25))){
var inst_14742 = (state_14746[(2)]);
var state_14746__$1 = state_14746;
var statearr_14777_14829 = state_14746__$1;
(statearr_14777_14829[(2)] = inst_14742);

(statearr_14777_14829[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14747 === (34))){
var inst_14740 = (state_14746[(2)]);
var state_14746__$1 = state_14746;
var statearr_14778_14830 = state_14746__$1;
(statearr_14778_14830[(2)] = inst_14740);

(statearr_14778_14830[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14747 === (17))){
var state_14746__$1 = state_14746;
var statearr_14779_14831 = state_14746__$1;
(statearr_14779_14831[(2)] = false);

(statearr_14779_14831[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14747 === (3))){
var state_14746__$1 = state_14746;
var statearr_14780_14832 = state_14746__$1;
(statearr_14780_14832[(2)] = false);

(statearr_14780_14832[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14747 === (12))){
var inst_14744 = (state_14746[(2)]);
var state_14746__$1 = state_14746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14746__$1,inst_14744);
} else {
if((state_val_14747 === (2))){
var inst_14648 = (state_14746[(8)]);
var inst_14653 = inst_14648.cljs$lang$protocol_mask$partition0$;
var inst_14654 = (inst_14653 & (64));
var inst_14655 = inst_14648.cljs$core$ISeq$;
var inst_14656 = (cljs.core.PROTOCOL_SENTINEL === inst_14655);
var inst_14657 = ((inst_14654) || (inst_14656));
var state_14746__$1 = state_14746;
if(cljs.core.truth_(inst_14657)){
var statearr_14781_14833 = state_14746__$1;
(statearr_14781_14833[(1)] = (5));

} else {
var statearr_14782_14834 = state_14746__$1;
(statearr_14782_14834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14747 === (23))){
var inst_14705 = (state_14746[(14)]);
var inst_14711 = (inst_14705 == null);
var state_14746__$1 = state_14746;
if(cljs.core.truth_(inst_14711)){
var statearr_14783_14835 = state_14746__$1;
(statearr_14783_14835[(1)] = (26));

} else {
var statearr_14784_14836 = state_14746__$1;
(statearr_14784_14836[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14747 === (35))){
var inst_14731 = (state_14746[(2)]);
var state_14746__$1 = state_14746;
if(cljs.core.truth_(inst_14731)){
var statearr_14785_14837 = state_14746__$1;
(statearr_14785_14837[(1)] = (36));

} else {
var statearr_14786_14838 = state_14746__$1;
(statearr_14786_14838[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14747 === (19))){
var inst_14673 = (state_14746[(7)]);
var inst_14693 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14673);
var state_14746__$1 = state_14746;
var statearr_14787_14839 = state_14746__$1;
(statearr_14787_14839[(2)] = inst_14693);

(statearr_14787_14839[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14747 === (11))){
var inst_14673 = (state_14746[(7)]);
var inst_14677 = (inst_14673 == null);
var inst_14678 = cljs.core.not.call(null,inst_14677);
var state_14746__$1 = state_14746;
if(inst_14678){
var statearr_14788_14840 = state_14746__$1;
(statearr_14788_14840[(1)] = (13));

} else {
var statearr_14789_14841 = state_14746__$1;
(statearr_14789_14841[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14747 === (9))){
var inst_14648 = (state_14746[(8)]);
var state_14746__$1 = state_14746;
var statearr_14790_14842 = state_14746__$1;
(statearr_14790_14842[(2)] = inst_14648);

(statearr_14790_14842[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14747 === (5))){
var state_14746__$1 = state_14746;
var statearr_14791_14843 = state_14746__$1;
(statearr_14791_14843[(2)] = true);

(statearr_14791_14843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14747 === (14))){
var state_14746__$1 = state_14746;
var statearr_14792_14844 = state_14746__$1;
(statearr_14792_14844[(2)] = false);

(statearr_14792_14844[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14747 === (26))){
var inst_14706 = (state_14746[(10)]);
var inst_14713 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14706);
var state_14746__$1 = state_14746;
var statearr_14793_14845 = state_14746__$1;
(statearr_14793_14845[(2)] = inst_14713);

(statearr_14793_14845[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14747 === (16))){
var state_14746__$1 = state_14746;
var statearr_14794_14846 = state_14746__$1;
(statearr_14794_14846[(2)] = true);

(statearr_14794_14846[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14747 === (38))){
var inst_14736 = (state_14746[(2)]);
var state_14746__$1 = state_14746;
var statearr_14795_14847 = state_14746__$1;
(statearr_14795_14847[(2)] = inst_14736);

(statearr_14795_14847[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14747 === (30))){
var inst_14697 = (state_14746[(9)]);
var inst_14706 = (state_14746[(10)]);
var inst_14698 = (state_14746[(13)]);
var inst_14723 = cljs.core.empty_QMARK_.call(null,inst_14697);
var inst_14724 = inst_14698.call(null,inst_14706);
var inst_14725 = cljs.core.not.call(null,inst_14724);
var inst_14726 = ((inst_14723) && (inst_14725));
var state_14746__$1 = state_14746;
var statearr_14796_14848 = state_14746__$1;
(statearr_14796_14848[(2)] = inst_14726);

(statearr_14796_14848[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14747 === (10))){
var inst_14648 = (state_14746[(8)]);
var inst_14669 = (state_14746[(2)]);
var inst_14670 = cljs.core.get.call(null,inst_14669,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14671 = cljs.core.get.call(null,inst_14669,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14672 = cljs.core.get.call(null,inst_14669,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14673 = inst_14648;
var state_14746__$1 = (function (){var statearr_14797 = state_14746;
(statearr_14797[(16)] = inst_14670);

(statearr_14797[(17)] = inst_14672);

(statearr_14797[(7)] = inst_14673);

(statearr_14797[(18)] = inst_14671);

return statearr_14797;
})();
var statearr_14798_14849 = state_14746__$1;
(statearr_14798_14849[(2)] = null);

(statearr_14798_14849[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14747 === (18))){
var inst_14688 = (state_14746[(2)]);
var state_14746__$1 = state_14746;
var statearr_14799_14850 = state_14746__$1;
(statearr_14799_14850[(2)] = inst_14688);

(statearr_14799_14850[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14747 === (37))){
var state_14746__$1 = state_14746;
var statearr_14800_14851 = state_14746__$1;
(statearr_14800_14851[(2)] = null);

(statearr_14800_14851[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14747 === (8))){
var inst_14648 = (state_14746[(8)]);
var inst_14666 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14648);
var state_14746__$1 = state_14746;
var statearr_14801_14852 = state_14746__$1;
(statearr_14801_14852[(2)] = inst_14666);

(statearr_14801_14852[(1)] = (10));


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
});})(c__13747__auto___14806,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__13652__auto__,c__13747__auto___14806,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__13653__auto__ = null;
var cljs$core$async$mix_$_state_machine__13653__auto____0 = (function (){
var statearr_14802 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14802[(0)] = cljs$core$async$mix_$_state_machine__13653__auto__);

(statearr_14802[(1)] = (1));

return statearr_14802;
});
var cljs$core$async$mix_$_state_machine__13653__auto____1 = (function (state_14746){
while(true){
var ret_value__13654__auto__ = (function (){try{while(true){
var result__13655__auto__ = switch__13652__auto__.call(null,state_14746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13655__auto__;
}
break;
}
}catch (e14803){if((e14803 instanceof Object)){
var ex__13656__auto__ = e14803;
var statearr_14804_14853 = state_14746;
(statearr_14804_14853[(5)] = ex__13656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14854 = state_14746;
state_14746 = G__14854;
continue;
} else {
return ret_value__13654__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13653__auto__ = function(state_14746){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13653__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13653__auto____1.call(this,state_14746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13653__auto____0;
cljs$core$async$mix_$_state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13653__auto____1;
return cljs$core$async$mix_$_state_machine__13653__auto__;
})()
;})(switch__13652__auto__,c__13747__auto___14806,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__13749__auto__ = (function (){var statearr_14805 = f__13748__auto__.call(null);
(statearr_14805[(6)] = c__13747__auto___14806);

return statearr_14805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13749__auto__);
});})(c__13747__auto___14806,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__14856 = arguments.length;
switch (G__14856) {
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
var G__14860 = arguments.length;
switch (G__14860) {
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
return (function (p1__14858_SHARP_){
if(cljs.core.truth_(p1__14858_SHARP_.call(null,topic))){
return p1__14858_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__14858_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14861 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14861 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14862){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14862 = meta14862;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14863,meta14862__$1){
var self__ = this;
var _14863__$1 = this;
return (new cljs.core.async.t_cljs$core$async14861(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14862__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14861.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14863){
var self__ = this;
var _14863__$1 = this;
return self__.meta14862;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14861.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14861.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14861.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14861.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14861.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async14861.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14861.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14861.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta14862","meta14862",-2076853571,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14861.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14861.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14861";

cljs.core.async.t_cljs$core$async14861.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async14861");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14861.
 */
cljs.core.async.__GT_t_cljs$core$async14861 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async14861(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14862){
return (new cljs.core.async.t_cljs$core$async14861(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14862));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async14861(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13747__auto___14981 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13747__auto___14981,mults,ensure_mult,p){
return (function (){
var f__13748__auto__ = (function (){var switch__13652__auto__ = ((function (c__13747__auto___14981,mults,ensure_mult,p){
return (function (state_14935){
var state_val_14936 = (state_14935[(1)]);
if((state_val_14936 === (7))){
var inst_14931 = (state_14935[(2)]);
var state_14935__$1 = state_14935;
var statearr_14937_14982 = state_14935__$1;
(statearr_14937_14982[(2)] = inst_14931);

(statearr_14937_14982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (20))){
var state_14935__$1 = state_14935;
var statearr_14938_14983 = state_14935__$1;
(statearr_14938_14983[(2)] = null);

(statearr_14938_14983[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (1))){
var state_14935__$1 = state_14935;
var statearr_14939_14984 = state_14935__$1;
(statearr_14939_14984[(2)] = null);

(statearr_14939_14984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (24))){
var inst_14914 = (state_14935[(7)]);
var inst_14923 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14914);
var state_14935__$1 = state_14935;
var statearr_14940_14985 = state_14935__$1;
(statearr_14940_14985[(2)] = inst_14923);

(statearr_14940_14985[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (4))){
var inst_14866 = (state_14935[(8)]);
var inst_14866__$1 = (state_14935[(2)]);
var inst_14867 = (inst_14866__$1 == null);
var state_14935__$1 = (function (){var statearr_14941 = state_14935;
(statearr_14941[(8)] = inst_14866__$1);

return statearr_14941;
})();
if(cljs.core.truth_(inst_14867)){
var statearr_14942_14986 = state_14935__$1;
(statearr_14942_14986[(1)] = (5));

} else {
var statearr_14943_14987 = state_14935__$1;
(statearr_14943_14987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (15))){
var inst_14908 = (state_14935[(2)]);
var state_14935__$1 = state_14935;
var statearr_14944_14988 = state_14935__$1;
(statearr_14944_14988[(2)] = inst_14908);

(statearr_14944_14988[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (21))){
var inst_14928 = (state_14935[(2)]);
var state_14935__$1 = (function (){var statearr_14945 = state_14935;
(statearr_14945[(9)] = inst_14928);

return statearr_14945;
})();
var statearr_14946_14989 = state_14935__$1;
(statearr_14946_14989[(2)] = null);

(statearr_14946_14989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (13))){
var inst_14890 = (state_14935[(10)]);
var inst_14892 = cljs.core.chunked_seq_QMARK_.call(null,inst_14890);
var state_14935__$1 = state_14935;
if(inst_14892){
var statearr_14947_14990 = state_14935__$1;
(statearr_14947_14990[(1)] = (16));

} else {
var statearr_14948_14991 = state_14935__$1;
(statearr_14948_14991[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (22))){
var inst_14920 = (state_14935[(2)]);
var state_14935__$1 = state_14935;
if(cljs.core.truth_(inst_14920)){
var statearr_14949_14992 = state_14935__$1;
(statearr_14949_14992[(1)] = (23));

} else {
var statearr_14950_14993 = state_14935__$1;
(statearr_14950_14993[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (6))){
var inst_14866 = (state_14935[(8)]);
var inst_14914 = (state_14935[(7)]);
var inst_14916 = (state_14935[(11)]);
var inst_14914__$1 = topic_fn.call(null,inst_14866);
var inst_14915 = cljs.core.deref.call(null,mults);
var inst_14916__$1 = cljs.core.get.call(null,inst_14915,inst_14914__$1);
var state_14935__$1 = (function (){var statearr_14951 = state_14935;
(statearr_14951[(7)] = inst_14914__$1);

(statearr_14951[(11)] = inst_14916__$1);

return statearr_14951;
})();
if(cljs.core.truth_(inst_14916__$1)){
var statearr_14952_14994 = state_14935__$1;
(statearr_14952_14994[(1)] = (19));

} else {
var statearr_14953_14995 = state_14935__$1;
(statearr_14953_14995[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (25))){
var inst_14925 = (state_14935[(2)]);
var state_14935__$1 = state_14935;
var statearr_14954_14996 = state_14935__$1;
(statearr_14954_14996[(2)] = inst_14925);

(statearr_14954_14996[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (17))){
var inst_14890 = (state_14935[(10)]);
var inst_14899 = cljs.core.first.call(null,inst_14890);
var inst_14900 = cljs.core.async.muxch_STAR_.call(null,inst_14899);
var inst_14901 = cljs.core.async.close_BANG_.call(null,inst_14900);
var inst_14902 = cljs.core.next.call(null,inst_14890);
var inst_14876 = inst_14902;
var inst_14877 = null;
var inst_14878 = (0);
var inst_14879 = (0);
var state_14935__$1 = (function (){var statearr_14955 = state_14935;
(statearr_14955[(12)] = inst_14879);

(statearr_14955[(13)] = inst_14901);

(statearr_14955[(14)] = inst_14878);

(statearr_14955[(15)] = inst_14877);

(statearr_14955[(16)] = inst_14876);

return statearr_14955;
})();
var statearr_14956_14997 = state_14935__$1;
(statearr_14956_14997[(2)] = null);

(statearr_14956_14997[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (3))){
var inst_14933 = (state_14935[(2)]);
var state_14935__$1 = state_14935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14935__$1,inst_14933);
} else {
if((state_val_14936 === (12))){
var inst_14910 = (state_14935[(2)]);
var state_14935__$1 = state_14935;
var statearr_14957_14998 = state_14935__$1;
(statearr_14957_14998[(2)] = inst_14910);

(statearr_14957_14998[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (2))){
var state_14935__$1 = state_14935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14935__$1,(4),ch);
} else {
if((state_val_14936 === (23))){
var state_14935__$1 = state_14935;
var statearr_14958_14999 = state_14935__$1;
(statearr_14958_14999[(2)] = null);

(statearr_14958_14999[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (19))){
var inst_14866 = (state_14935[(8)]);
var inst_14916 = (state_14935[(11)]);
var inst_14918 = cljs.core.async.muxch_STAR_.call(null,inst_14916);
var state_14935__$1 = state_14935;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14935__$1,(22),inst_14918,inst_14866);
} else {
if((state_val_14936 === (11))){
var inst_14890 = (state_14935[(10)]);
var inst_14876 = (state_14935[(16)]);
var inst_14890__$1 = cljs.core.seq.call(null,inst_14876);
var state_14935__$1 = (function (){var statearr_14959 = state_14935;
(statearr_14959[(10)] = inst_14890__$1);

return statearr_14959;
})();
if(inst_14890__$1){
var statearr_14960_15000 = state_14935__$1;
(statearr_14960_15000[(1)] = (13));

} else {
var statearr_14961_15001 = state_14935__$1;
(statearr_14961_15001[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (9))){
var inst_14912 = (state_14935[(2)]);
var state_14935__$1 = state_14935;
var statearr_14962_15002 = state_14935__$1;
(statearr_14962_15002[(2)] = inst_14912);

(statearr_14962_15002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (5))){
var inst_14873 = cljs.core.deref.call(null,mults);
var inst_14874 = cljs.core.vals.call(null,inst_14873);
var inst_14875 = cljs.core.seq.call(null,inst_14874);
var inst_14876 = inst_14875;
var inst_14877 = null;
var inst_14878 = (0);
var inst_14879 = (0);
var state_14935__$1 = (function (){var statearr_14963 = state_14935;
(statearr_14963[(12)] = inst_14879);

(statearr_14963[(14)] = inst_14878);

(statearr_14963[(15)] = inst_14877);

(statearr_14963[(16)] = inst_14876);

return statearr_14963;
})();
var statearr_14964_15003 = state_14935__$1;
(statearr_14964_15003[(2)] = null);

(statearr_14964_15003[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (14))){
var state_14935__$1 = state_14935;
var statearr_14968_15004 = state_14935__$1;
(statearr_14968_15004[(2)] = null);

(statearr_14968_15004[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (16))){
var inst_14890 = (state_14935[(10)]);
var inst_14894 = cljs.core.chunk_first.call(null,inst_14890);
var inst_14895 = cljs.core.chunk_rest.call(null,inst_14890);
var inst_14896 = cljs.core.count.call(null,inst_14894);
var inst_14876 = inst_14895;
var inst_14877 = inst_14894;
var inst_14878 = inst_14896;
var inst_14879 = (0);
var state_14935__$1 = (function (){var statearr_14969 = state_14935;
(statearr_14969[(12)] = inst_14879);

(statearr_14969[(14)] = inst_14878);

(statearr_14969[(15)] = inst_14877);

(statearr_14969[(16)] = inst_14876);

return statearr_14969;
})();
var statearr_14970_15005 = state_14935__$1;
(statearr_14970_15005[(2)] = null);

(statearr_14970_15005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (10))){
var inst_14879 = (state_14935[(12)]);
var inst_14878 = (state_14935[(14)]);
var inst_14877 = (state_14935[(15)]);
var inst_14876 = (state_14935[(16)]);
var inst_14884 = cljs.core._nth.call(null,inst_14877,inst_14879);
var inst_14885 = cljs.core.async.muxch_STAR_.call(null,inst_14884);
var inst_14886 = cljs.core.async.close_BANG_.call(null,inst_14885);
var inst_14887 = (inst_14879 + (1));
var tmp14965 = inst_14878;
var tmp14966 = inst_14877;
var tmp14967 = inst_14876;
var inst_14876__$1 = tmp14967;
var inst_14877__$1 = tmp14966;
var inst_14878__$1 = tmp14965;
var inst_14879__$1 = inst_14887;
var state_14935__$1 = (function (){var statearr_14971 = state_14935;
(statearr_14971[(17)] = inst_14886);

(statearr_14971[(12)] = inst_14879__$1);

(statearr_14971[(14)] = inst_14878__$1);

(statearr_14971[(15)] = inst_14877__$1);

(statearr_14971[(16)] = inst_14876__$1);

return statearr_14971;
})();
var statearr_14972_15006 = state_14935__$1;
(statearr_14972_15006[(2)] = null);

(statearr_14972_15006[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (18))){
var inst_14905 = (state_14935[(2)]);
var state_14935__$1 = state_14935;
var statearr_14973_15007 = state_14935__$1;
(statearr_14973_15007[(2)] = inst_14905);

(statearr_14973_15007[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (8))){
var inst_14879 = (state_14935[(12)]);
var inst_14878 = (state_14935[(14)]);
var inst_14881 = (inst_14879 < inst_14878);
var inst_14882 = inst_14881;
var state_14935__$1 = state_14935;
if(cljs.core.truth_(inst_14882)){
var statearr_14974_15008 = state_14935__$1;
(statearr_14974_15008[(1)] = (10));

} else {
var statearr_14975_15009 = state_14935__$1;
(statearr_14975_15009[(1)] = (11));

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
});})(c__13747__auto___14981,mults,ensure_mult,p))
;
return ((function (switch__13652__auto__,c__13747__auto___14981,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__13653__auto__ = null;
var cljs$core$async$state_machine__13653__auto____0 = (function (){
var statearr_14976 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14976[(0)] = cljs$core$async$state_machine__13653__auto__);

(statearr_14976[(1)] = (1));

return statearr_14976;
});
var cljs$core$async$state_machine__13653__auto____1 = (function (state_14935){
while(true){
var ret_value__13654__auto__ = (function (){try{while(true){
var result__13655__auto__ = switch__13652__auto__.call(null,state_14935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13655__auto__;
}
break;
}
}catch (e14977){if((e14977 instanceof Object)){
var ex__13656__auto__ = e14977;
var statearr_14978_15010 = state_14935;
(statearr_14978_15010[(5)] = ex__13656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15011 = state_14935;
state_14935 = G__15011;
continue;
} else {
return ret_value__13654__auto__;
}
break;
}
});
cljs$core$async$state_machine__13653__auto__ = function(state_14935){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13653__auto____1.call(this,state_14935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13653__auto____0;
cljs$core$async$state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13653__auto____1;
return cljs$core$async$state_machine__13653__auto__;
})()
;})(switch__13652__auto__,c__13747__auto___14981,mults,ensure_mult,p))
})();
var state__13749__auto__ = (function (){var statearr_14979 = f__13748__auto__.call(null);
(statearr_14979[(6)] = c__13747__auto___14981);

return statearr_14979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13749__auto__);
});})(c__13747__auto___14981,mults,ensure_mult,p))
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
var G__15013 = arguments.length;
switch (G__15013) {
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
var G__15016 = arguments.length;
switch (G__15016) {
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
var G__15019 = arguments.length;
switch (G__15019) {
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
var c__13747__auto___15086 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13747__auto___15086,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__13748__auto__ = (function (){var switch__13652__auto__ = ((function (c__13747__auto___15086,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15058){
var state_val_15059 = (state_15058[(1)]);
if((state_val_15059 === (7))){
var state_15058__$1 = state_15058;
var statearr_15060_15087 = state_15058__$1;
(statearr_15060_15087[(2)] = null);

(statearr_15060_15087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15059 === (1))){
var state_15058__$1 = state_15058;
var statearr_15061_15088 = state_15058__$1;
(statearr_15061_15088[(2)] = null);

(statearr_15061_15088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15059 === (4))){
var inst_15022 = (state_15058[(7)]);
var inst_15024 = (inst_15022 < cnt);
var state_15058__$1 = state_15058;
if(cljs.core.truth_(inst_15024)){
var statearr_15062_15089 = state_15058__$1;
(statearr_15062_15089[(1)] = (6));

} else {
var statearr_15063_15090 = state_15058__$1;
(statearr_15063_15090[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15059 === (15))){
var inst_15054 = (state_15058[(2)]);
var state_15058__$1 = state_15058;
var statearr_15064_15091 = state_15058__$1;
(statearr_15064_15091[(2)] = inst_15054);

(statearr_15064_15091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15059 === (13))){
var inst_15047 = cljs.core.async.close_BANG_.call(null,out);
var state_15058__$1 = state_15058;
var statearr_15065_15092 = state_15058__$1;
(statearr_15065_15092[(2)] = inst_15047);

(statearr_15065_15092[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15059 === (6))){
var state_15058__$1 = state_15058;
var statearr_15066_15093 = state_15058__$1;
(statearr_15066_15093[(2)] = null);

(statearr_15066_15093[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15059 === (3))){
var inst_15056 = (state_15058[(2)]);
var state_15058__$1 = state_15058;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15058__$1,inst_15056);
} else {
if((state_val_15059 === (12))){
var inst_15044 = (state_15058[(8)]);
var inst_15044__$1 = (state_15058[(2)]);
var inst_15045 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15044__$1);
var state_15058__$1 = (function (){var statearr_15067 = state_15058;
(statearr_15067[(8)] = inst_15044__$1);

return statearr_15067;
})();
if(cljs.core.truth_(inst_15045)){
var statearr_15068_15094 = state_15058__$1;
(statearr_15068_15094[(1)] = (13));

} else {
var statearr_15069_15095 = state_15058__$1;
(statearr_15069_15095[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15059 === (2))){
var inst_15021 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_15022 = (0);
var state_15058__$1 = (function (){var statearr_15070 = state_15058;
(statearr_15070[(7)] = inst_15022);

(statearr_15070[(9)] = inst_15021);

return statearr_15070;
})();
var statearr_15071_15096 = state_15058__$1;
(statearr_15071_15096[(2)] = null);

(statearr_15071_15096[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15059 === (11))){
var inst_15022 = (state_15058[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15058,(10),Object,null,(9));
var inst_15031 = chs__$1.call(null,inst_15022);
var inst_15032 = done.call(null,inst_15022);
var inst_15033 = cljs.core.async.take_BANG_.call(null,inst_15031,inst_15032);
var state_15058__$1 = state_15058;
var statearr_15072_15097 = state_15058__$1;
(statearr_15072_15097[(2)] = inst_15033);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15058__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15059 === (9))){
var inst_15022 = (state_15058[(7)]);
var inst_15035 = (state_15058[(2)]);
var inst_15036 = (inst_15022 + (1));
var inst_15022__$1 = inst_15036;
var state_15058__$1 = (function (){var statearr_15073 = state_15058;
(statearr_15073[(7)] = inst_15022__$1);

(statearr_15073[(10)] = inst_15035);

return statearr_15073;
})();
var statearr_15074_15098 = state_15058__$1;
(statearr_15074_15098[(2)] = null);

(statearr_15074_15098[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15059 === (5))){
var inst_15042 = (state_15058[(2)]);
var state_15058__$1 = (function (){var statearr_15075 = state_15058;
(statearr_15075[(11)] = inst_15042);

return statearr_15075;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15058__$1,(12),dchan);
} else {
if((state_val_15059 === (14))){
var inst_15044 = (state_15058[(8)]);
var inst_15049 = cljs.core.apply.call(null,f,inst_15044);
var state_15058__$1 = state_15058;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15058__$1,(16),out,inst_15049);
} else {
if((state_val_15059 === (16))){
var inst_15051 = (state_15058[(2)]);
var state_15058__$1 = (function (){var statearr_15076 = state_15058;
(statearr_15076[(12)] = inst_15051);

return statearr_15076;
})();
var statearr_15077_15099 = state_15058__$1;
(statearr_15077_15099[(2)] = null);

(statearr_15077_15099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15059 === (10))){
var inst_15026 = (state_15058[(2)]);
var inst_15027 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_15058__$1 = (function (){var statearr_15078 = state_15058;
(statearr_15078[(13)] = inst_15026);

return statearr_15078;
})();
var statearr_15079_15100 = state_15058__$1;
(statearr_15079_15100[(2)] = inst_15027);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15058__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15059 === (8))){
var inst_15040 = (state_15058[(2)]);
var state_15058__$1 = state_15058;
var statearr_15080_15101 = state_15058__$1;
(statearr_15080_15101[(2)] = inst_15040);

(statearr_15080_15101[(1)] = (5));


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
});})(c__13747__auto___15086,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__13652__auto__,c__13747__auto___15086,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__13653__auto__ = null;
var cljs$core$async$state_machine__13653__auto____0 = (function (){
var statearr_15081 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15081[(0)] = cljs$core$async$state_machine__13653__auto__);

(statearr_15081[(1)] = (1));

return statearr_15081;
});
var cljs$core$async$state_machine__13653__auto____1 = (function (state_15058){
while(true){
var ret_value__13654__auto__ = (function (){try{while(true){
var result__13655__auto__ = switch__13652__auto__.call(null,state_15058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13655__auto__;
}
break;
}
}catch (e15082){if((e15082 instanceof Object)){
var ex__13656__auto__ = e15082;
var statearr_15083_15102 = state_15058;
(statearr_15083_15102[(5)] = ex__13656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15103 = state_15058;
state_15058 = G__15103;
continue;
} else {
return ret_value__13654__auto__;
}
break;
}
});
cljs$core$async$state_machine__13653__auto__ = function(state_15058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13653__auto____1.call(this,state_15058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13653__auto____0;
cljs$core$async$state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13653__auto____1;
return cljs$core$async$state_machine__13653__auto__;
})()
;})(switch__13652__auto__,c__13747__auto___15086,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__13749__auto__ = (function (){var statearr_15084 = f__13748__auto__.call(null);
(statearr_15084[(6)] = c__13747__auto___15086);

return statearr_15084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13749__auto__);
});})(c__13747__auto___15086,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__15106 = arguments.length;
switch (G__15106) {
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
var c__13747__auto___15160 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13747__auto___15160,out){
return (function (){
var f__13748__auto__ = (function (){var switch__13652__auto__ = ((function (c__13747__auto___15160,out){
return (function (state_15138){
var state_val_15139 = (state_15138[(1)]);
if((state_val_15139 === (7))){
var inst_15118 = (state_15138[(7)]);
var inst_15117 = (state_15138[(8)]);
var inst_15117__$1 = (state_15138[(2)]);
var inst_15118__$1 = cljs.core.nth.call(null,inst_15117__$1,(0),null);
var inst_15119 = cljs.core.nth.call(null,inst_15117__$1,(1),null);
var inst_15120 = (inst_15118__$1 == null);
var state_15138__$1 = (function (){var statearr_15140 = state_15138;
(statearr_15140[(9)] = inst_15119);

(statearr_15140[(7)] = inst_15118__$1);

(statearr_15140[(8)] = inst_15117__$1);

return statearr_15140;
})();
if(cljs.core.truth_(inst_15120)){
var statearr_15141_15161 = state_15138__$1;
(statearr_15141_15161[(1)] = (8));

} else {
var statearr_15142_15162 = state_15138__$1;
(statearr_15142_15162[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15139 === (1))){
var inst_15107 = cljs.core.vec.call(null,chs);
var inst_15108 = inst_15107;
var state_15138__$1 = (function (){var statearr_15143 = state_15138;
(statearr_15143[(10)] = inst_15108);

return statearr_15143;
})();
var statearr_15144_15163 = state_15138__$1;
(statearr_15144_15163[(2)] = null);

(statearr_15144_15163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15139 === (4))){
var inst_15108 = (state_15138[(10)]);
var state_15138__$1 = state_15138;
return cljs.core.async.ioc_alts_BANG_.call(null,state_15138__$1,(7),inst_15108);
} else {
if((state_val_15139 === (6))){
var inst_15134 = (state_15138[(2)]);
var state_15138__$1 = state_15138;
var statearr_15145_15164 = state_15138__$1;
(statearr_15145_15164[(2)] = inst_15134);

(statearr_15145_15164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15139 === (3))){
var inst_15136 = (state_15138[(2)]);
var state_15138__$1 = state_15138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15138__$1,inst_15136);
} else {
if((state_val_15139 === (2))){
var inst_15108 = (state_15138[(10)]);
var inst_15110 = cljs.core.count.call(null,inst_15108);
var inst_15111 = (inst_15110 > (0));
var state_15138__$1 = state_15138;
if(cljs.core.truth_(inst_15111)){
var statearr_15147_15165 = state_15138__$1;
(statearr_15147_15165[(1)] = (4));

} else {
var statearr_15148_15166 = state_15138__$1;
(statearr_15148_15166[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15139 === (11))){
var inst_15108 = (state_15138[(10)]);
var inst_15127 = (state_15138[(2)]);
var tmp15146 = inst_15108;
var inst_15108__$1 = tmp15146;
var state_15138__$1 = (function (){var statearr_15149 = state_15138;
(statearr_15149[(10)] = inst_15108__$1);

(statearr_15149[(11)] = inst_15127);

return statearr_15149;
})();
var statearr_15150_15167 = state_15138__$1;
(statearr_15150_15167[(2)] = null);

(statearr_15150_15167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15139 === (9))){
var inst_15118 = (state_15138[(7)]);
var state_15138__$1 = state_15138;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15138__$1,(11),out,inst_15118);
} else {
if((state_val_15139 === (5))){
var inst_15132 = cljs.core.async.close_BANG_.call(null,out);
var state_15138__$1 = state_15138;
var statearr_15151_15168 = state_15138__$1;
(statearr_15151_15168[(2)] = inst_15132);

(statearr_15151_15168[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15139 === (10))){
var inst_15130 = (state_15138[(2)]);
var state_15138__$1 = state_15138;
var statearr_15152_15169 = state_15138__$1;
(statearr_15152_15169[(2)] = inst_15130);

(statearr_15152_15169[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15139 === (8))){
var inst_15119 = (state_15138[(9)]);
var inst_15118 = (state_15138[(7)]);
var inst_15108 = (state_15138[(10)]);
var inst_15117 = (state_15138[(8)]);
var inst_15122 = (function (){var cs = inst_15108;
var vec__15113 = inst_15117;
var v = inst_15118;
var c = inst_15119;
return ((function (cs,vec__15113,v,c,inst_15119,inst_15118,inst_15108,inst_15117,state_val_15139,c__13747__auto___15160,out){
return (function (p1__15104_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__15104_SHARP_);
});
;})(cs,vec__15113,v,c,inst_15119,inst_15118,inst_15108,inst_15117,state_val_15139,c__13747__auto___15160,out))
})();
var inst_15123 = cljs.core.filterv.call(null,inst_15122,inst_15108);
var inst_15108__$1 = inst_15123;
var state_15138__$1 = (function (){var statearr_15153 = state_15138;
(statearr_15153[(10)] = inst_15108__$1);

return statearr_15153;
})();
var statearr_15154_15170 = state_15138__$1;
(statearr_15154_15170[(2)] = null);

(statearr_15154_15170[(1)] = (2));


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
});})(c__13747__auto___15160,out))
;
return ((function (switch__13652__auto__,c__13747__auto___15160,out){
return (function() {
var cljs$core$async$state_machine__13653__auto__ = null;
var cljs$core$async$state_machine__13653__auto____0 = (function (){
var statearr_15155 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15155[(0)] = cljs$core$async$state_machine__13653__auto__);

(statearr_15155[(1)] = (1));

return statearr_15155;
});
var cljs$core$async$state_machine__13653__auto____1 = (function (state_15138){
while(true){
var ret_value__13654__auto__ = (function (){try{while(true){
var result__13655__auto__ = switch__13652__auto__.call(null,state_15138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13655__auto__;
}
break;
}
}catch (e15156){if((e15156 instanceof Object)){
var ex__13656__auto__ = e15156;
var statearr_15157_15171 = state_15138;
(statearr_15157_15171[(5)] = ex__13656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15172 = state_15138;
state_15138 = G__15172;
continue;
} else {
return ret_value__13654__auto__;
}
break;
}
});
cljs$core$async$state_machine__13653__auto__ = function(state_15138){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13653__auto____1.call(this,state_15138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13653__auto____0;
cljs$core$async$state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13653__auto____1;
return cljs$core$async$state_machine__13653__auto__;
})()
;})(switch__13652__auto__,c__13747__auto___15160,out))
})();
var state__13749__auto__ = (function (){var statearr_15158 = f__13748__auto__.call(null);
(statearr_15158[(6)] = c__13747__auto___15160);

return statearr_15158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13749__auto__);
});})(c__13747__auto___15160,out))
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
var G__15174 = arguments.length;
switch (G__15174) {
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
var c__13747__auto___15219 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13747__auto___15219,out){
return (function (){
var f__13748__auto__ = (function (){var switch__13652__auto__ = ((function (c__13747__auto___15219,out){
return (function (state_15198){
var state_val_15199 = (state_15198[(1)]);
if((state_val_15199 === (7))){
var inst_15180 = (state_15198[(7)]);
var inst_15180__$1 = (state_15198[(2)]);
var inst_15181 = (inst_15180__$1 == null);
var inst_15182 = cljs.core.not.call(null,inst_15181);
var state_15198__$1 = (function (){var statearr_15200 = state_15198;
(statearr_15200[(7)] = inst_15180__$1);

return statearr_15200;
})();
if(inst_15182){
var statearr_15201_15220 = state_15198__$1;
(statearr_15201_15220[(1)] = (8));

} else {
var statearr_15202_15221 = state_15198__$1;
(statearr_15202_15221[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15199 === (1))){
var inst_15175 = (0);
var state_15198__$1 = (function (){var statearr_15203 = state_15198;
(statearr_15203[(8)] = inst_15175);

return statearr_15203;
})();
var statearr_15204_15222 = state_15198__$1;
(statearr_15204_15222[(2)] = null);

(statearr_15204_15222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15199 === (4))){
var state_15198__$1 = state_15198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15198__$1,(7),ch);
} else {
if((state_val_15199 === (6))){
var inst_15193 = (state_15198[(2)]);
var state_15198__$1 = state_15198;
var statearr_15205_15223 = state_15198__$1;
(statearr_15205_15223[(2)] = inst_15193);

(statearr_15205_15223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15199 === (3))){
var inst_15195 = (state_15198[(2)]);
var inst_15196 = cljs.core.async.close_BANG_.call(null,out);
var state_15198__$1 = (function (){var statearr_15206 = state_15198;
(statearr_15206[(9)] = inst_15195);

return statearr_15206;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15198__$1,inst_15196);
} else {
if((state_val_15199 === (2))){
var inst_15175 = (state_15198[(8)]);
var inst_15177 = (inst_15175 < n);
var state_15198__$1 = state_15198;
if(cljs.core.truth_(inst_15177)){
var statearr_15207_15224 = state_15198__$1;
(statearr_15207_15224[(1)] = (4));

} else {
var statearr_15208_15225 = state_15198__$1;
(statearr_15208_15225[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15199 === (11))){
var inst_15175 = (state_15198[(8)]);
var inst_15185 = (state_15198[(2)]);
var inst_15186 = (inst_15175 + (1));
var inst_15175__$1 = inst_15186;
var state_15198__$1 = (function (){var statearr_15209 = state_15198;
(statearr_15209[(10)] = inst_15185);

(statearr_15209[(8)] = inst_15175__$1);

return statearr_15209;
})();
var statearr_15210_15226 = state_15198__$1;
(statearr_15210_15226[(2)] = null);

(statearr_15210_15226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15199 === (9))){
var state_15198__$1 = state_15198;
var statearr_15211_15227 = state_15198__$1;
(statearr_15211_15227[(2)] = null);

(statearr_15211_15227[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15199 === (5))){
var state_15198__$1 = state_15198;
var statearr_15212_15228 = state_15198__$1;
(statearr_15212_15228[(2)] = null);

(statearr_15212_15228[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15199 === (10))){
var inst_15190 = (state_15198[(2)]);
var state_15198__$1 = state_15198;
var statearr_15213_15229 = state_15198__$1;
(statearr_15213_15229[(2)] = inst_15190);

(statearr_15213_15229[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15199 === (8))){
var inst_15180 = (state_15198[(7)]);
var state_15198__$1 = state_15198;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15198__$1,(11),out,inst_15180);
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
});})(c__13747__auto___15219,out))
;
return ((function (switch__13652__auto__,c__13747__auto___15219,out){
return (function() {
var cljs$core$async$state_machine__13653__auto__ = null;
var cljs$core$async$state_machine__13653__auto____0 = (function (){
var statearr_15214 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15214[(0)] = cljs$core$async$state_machine__13653__auto__);

(statearr_15214[(1)] = (1));

return statearr_15214;
});
var cljs$core$async$state_machine__13653__auto____1 = (function (state_15198){
while(true){
var ret_value__13654__auto__ = (function (){try{while(true){
var result__13655__auto__ = switch__13652__auto__.call(null,state_15198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13655__auto__;
}
break;
}
}catch (e15215){if((e15215 instanceof Object)){
var ex__13656__auto__ = e15215;
var statearr_15216_15230 = state_15198;
(statearr_15216_15230[(5)] = ex__13656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15231 = state_15198;
state_15198 = G__15231;
continue;
} else {
return ret_value__13654__auto__;
}
break;
}
});
cljs$core$async$state_machine__13653__auto__ = function(state_15198){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13653__auto____1.call(this,state_15198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13653__auto____0;
cljs$core$async$state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13653__auto____1;
return cljs$core$async$state_machine__13653__auto__;
})()
;})(switch__13652__auto__,c__13747__auto___15219,out))
})();
var state__13749__auto__ = (function (){var statearr_15217 = f__13748__auto__.call(null);
(statearr_15217[(6)] = c__13747__auto___15219);

return statearr_15217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13749__auto__);
});})(c__13747__auto___15219,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15233 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15233 = (function (f,ch,meta15234){
this.f = f;
this.ch = ch;
this.meta15234 = meta15234;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15235,meta15234__$1){
var self__ = this;
var _15235__$1 = this;
return (new cljs.core.async.t_cljs$core$async15233(self__.f,self__.ch,meta15234__$1));
});

cljs.core.async.t_cljs$core$async15233.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15235){
var self__ = this;
var _15235__$1 = this;
return self__.meta15234;
});

cljs.core.async.t_cljs$core$async15233.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15233.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15233.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15233.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15233.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15236 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15236 = (function (f,ch,meta15234,_,fn1,meta15237){
this.f = f;
this.ch = ch;
this.meta15234 = meta15234;
this._ = _;
this.fn1 = fn1;
this.meta15237 = meta15237;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15238,meta15237__$1){
var self__ = this;
var _15238__$1 = this;
return (new cljs.core.async.t_cljs$core$async15236(self__.f,self__.ch,self__.meta15234,self__._,self__.fn1,meta15237__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async15236.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15238){
var self__ = this;
var _15238__$1 = this;
return self__.meta15237;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15236.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15236.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15236.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15236.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__15232_SHARP_){
return f1.call(null,(((p1__15232_SHARP_ == null))?null:self__.f.call(null,p1__15232_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async15236.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15234","meta15234",-1308794569,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async15233","cljs.core.async/t_cljs$core$async15233",973820093,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta15237","meta15237",-225877325,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15236.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15236.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15236";

cljs.core.async.t_cljs$core$async15236.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async15236");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15236.
 */
cljs.core.async.__GT_t_cljs$core$async15236 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15236(f__$1,ch__$1,meta15234__$1,___$2,fn1__$1,meta15237){
return (new cljs.core.async.t_cljs$core$async15236(f__$1,ch__$1,meta15234__$1,___$2,fn1__$1,meta15237));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async15236(self__.f,self__.ch,self__.meta15234,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async15233.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15233.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async15233.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15234","meta15234",-1308794569,null)], null);
});

cljs.core.async.t_cljs$core$async15233.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15233.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15233";

cljs.core.async.t_cljs$core$async15233.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async15233");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15233.
 */
cljs.core.async.__GT_t_cljs$core$async15233 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15233(f__$1,ch__$1,meta15234){
return (new cljs.core.async.t_cljs$core$async15233(f__$1,ch__$1,meta15234));
});

}

return (new cljs.core.async.t_cljs$core$async15233(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15239 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15239 = (function (f,ch,meta15240){
this.f = f;
this.ch = ch;
this.meta15240 = meta15240;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15241,meta15240__$1){
var self__ = this;
var _15241__$1 = this;
return (new cljs.core.async.t_cljs$core$async15239(self__.f,self__.ch,meta15240__$1));
});

cljs.core.async.t_cljs$core$async15239.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15241){
var self__ = this;
var _15241__$1 = this;
return self__.meta15240;
});

cljs.core.async.t_cljs$core$async15239.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15239.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15239.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15239.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15239.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15239.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async15239.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15240","meta15240",130296678,null)], null);
});

cljs.core.async.t_cljs$core$async15239.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15239.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15239";

cljs.core.async.t_cljs$core$async15239.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async15239");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15239.
 */
cljs.core.async.__GT_t_cljs$core$async15239 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async15239(f__$1,ch__$1,meta15240){
return (new cljs.core.async.t_cljs$core$async15239(f__$1,ch__$1,meta15240));
});

}

return (new cljs.core.async.t_cljs$core$async15239(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15242 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15242 = (function (p,ch,meta15243){
this.p = p;
this.ch = ch;
this.meta15243 = meta15243;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15244,meta15243__$1){
var self__ = this;
var _15244__$1 = this;
return (new cljs.core.async.t_cljs$core$async15242(self__.p,self__.ch,meta15243__$1));
});

cljs.core.async.t_cljs$core$async15242.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15244){
var self__ = this;
var _15244__$1 = this;
return self__.meta15243;
});

cljs.core.async.t_cljs$core$async15242.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15242.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15242.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15242.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15242.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15242.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15242.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async15242.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15243","meta15243",-2114061528,null)], null);
});

cljs.core.async.t_cljs$core$async15242.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15242.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15242";

cljs.core.async.t_cljs$core$async15242.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async15242");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15242.
 */
cljs.core.async.__GT_t_cljs$core$async15242 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async15242(p__$1,ch__$1,meta15243){
return (new cljs.core.async.t_cljs$core$async15242(p__$1,ch__$1,meta15243));
});

}

return (new cljs.core.async.t_cljs$core$async15242(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__15246 = arguments.length;
switch (G__15246) {
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
var c__13747__auto___15286 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13747__auto___15286,out){
return (function (){
var f__13748__auto__ = (function (){var switch__13652__auto__ = ((function (c__13747__auto___15286,out){
return (function (state_15267){
var state_val_15268 = (state_15267[(1)]);
if((state_val_15268 === (7))){
var inst_15263 = (state_15267[(2)]);
var state_15267__$1 = state_15267;
var statearr_15269_15287 = state_15267__$1;
(statearr_15269_15287[(2)] = inst_15263);

(statearr_15269_15287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15268 === (1))){
var state_15267__$1 = state_15267;
var statearr_15270_15288 = state_15267__$1;
(statearr_15270_15288[(2)] = null);

(statearr_15270_15288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15268 === (4))){
var inst_15249 = (state_15267[(7)]);
var inst_15249__$1 = (state_15267[(2)]);
var inst_15250 = (inst_15249__$1 == null);
var state_15267__$1 = (function (){var statearr_15271 = state_15267;
(statearr_15271[(7)] = inst_15249__$1);

return statearr_15271;
})();
if(cljs.core.truth_(inst_15250)){
var statearr_15272_15289 = state_15267__$1;
(statearr_15272_15289[(1)] = (5));

} else {
var statearr_15273_15290 = state_15267__$1;
(statearr_15273_15290[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15268 === (6))){
var inst_15249 = (state_15267[(7)]);
var inst_15254 = p.call(null,inst_15249);
var state_15267__$1 = state_15267;
if(cljs.core.truth_(inst_15254)){
var statearr_15274_15291 = state_15267__$1;
(statearr_15274_15291[(1)] = (8));

} else {
var statearr_15275_15292 = state_15267__$1;
(statearr_15275_15292[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15268 === (3))){
var inst_15265 = (state_15267[(2)]);
var state_15267__$1 = state_15267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15267__$1,inst_15265);
} else {
if((state_val_15268 === (2))){
var state_15267__$1 = state_15267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15267__$1,(4),ch);
} else {
if((state_val_15268 === (11))){
var inst_15257 = (state_15267[(2)]);
var state_15267__$1 = state_15267;
var statearr_15276_15293 = state_15267__$1;
(statearr_15276_15293[(2)] = inst_15257);

(statearr_15276_15293[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15268 === (9))){
var state_15267__$1 = state_15267;
var statearr_15277_15294 = state_15267__$1;
(statearr_15277_15294[(2)] = null);

(statearr_15277_15294[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15268 === (5))){
var inst_15252 = cljs.core.async.close_BANG_.call(null,out);
var state_15267__$1 = state_15267;
var statearr_15278_15295 = state_15267__$1;
(statearr_15278_15295[(2)] = inst_15252);

(statearr_15278_15295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15268 === (10))){
var inst_15260 = (state_15267[(2)]);
var state_15267__$1 = (function (){var statearr_15279 = state_15267;
(statearr_15279[(8)] = inst_15260);

return statearr_15279;
})();
var statearr_15280_15296 = state_15267__$1;
(statearr_15280_15296[(2)] = null);

(statearr_15280_15296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15268 === (8))){
var inst_15249 = (state_15267[(7)]);
var state_15267__$1 = state_15267;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15267__$1,(11),out,inst_15249);
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
});})(c__13747__auto___15286,out))
;
return ((function (switch__13652__auto__,c__13747__auto___15286,out){
return (function() {
var cljs$core$async$state_machine__13653__auto__ = null;
var cljs$core$async$state_machine__13653__auto____0 = (function (){
var statearr_15281 = [null,null,null,null,null,null,null,null,null];
(statearr_15281[(0)] = cljs$core$async$state_machine__13653__auto__);

(statearr_15281[(1)] = (1));

return statearr_15281;
});
var cljs$core$async$state_machine__13653__auto____1 = (function (state_15267){
while(true){
var ret_value__13654__auto__ = (function (){try{while(true){
var result__13655__auto__ = switch__13652__auto__.call(null,state_15267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13655__auto__;
}
break;
}
}catch (e15282){if((e15282 instanceof Object)){
var ex__13656__auto__ = e15282;
var statearr_15283_15297 = state_15267;
(statearr_15283_15297[(5)] = ex__13656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15298 = state_15267;
state_15267 = G__15298;
continue;
} else {
return ret_value__13654__auto__;
}
break;
}
});
cljs$core$async$state_machine__13653__auto__ = function(state_15267){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13653__auto____1.call(this,state_15267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13653__auto____0;
cljs$core$async$state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13653__auto____1;
return cljs$core$async$state_machine__13653__auto__;
})()
;})(switch__13652__auto__,c__13747__auto___15286,out))
})();
var state__13749__auto__ = (function (){var statearr_15284 = f__13748__auto__.call(null);
(statearr_15284[(6)] = c__13747__auto___15286);

return statearr_15284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13749__auto__);
});})(c__13747__auto___15286,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__15300 = arguments.length;
switch (G__15300) {
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
var c__13747__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13747__auto__){
return (function (){
var f__13748__auto__ = (function (){var switch__13652__auto__ = ((function (c__13747__auto__){
return (function (state_15363){
var state_val_15364 = (state_15363[(1)]);
if((state_val_15364 === (7))){
var inst_15359 = (state_15363[(2)]);
var state_15363__$1 = state_15363;
var statearr_15365_15403 = state_15363__$1;
(statearr_15365_15403[(2)] = inst_15359);

(statearr_15365_15403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15364 === (20))){
var inst_15329 = (state_15363[(7)]);
var inst_15340 = (state_15363[(2)]);
var inst_15341 = cljs.core.next.call(null,inst_15329);
var inst_15315 = inst_15341;
var inst_15316 = null;
var inst_15317 = (0);
var inst_15318 = (0);
var state_15363__$1 = (function (){var statearr_15366 = state_15363;
(statearr_15366[(8)] = inst_15315);

(statearr_15366[(9)] = inst_15318);

(statearr_15366[(10)] = inst_15317);

(statearr_15366[(11)] = inst_15316);

(statearr_15366[(12)] = inst_15340);

return statearr_15366;
})();
var statearr_15367_15404 = state_15363__$1;
(statearr_15367_15404[(2)] = null);

(statearr_15367_15404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15364 === (1))){
var state_15363__$1 = state_15363;
var statearr_15368_15405 = state_15363__$1;
(statearr_15368_15405[(2)] = null);

(statearr_15368_15405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15364 === (4))){
var inst_15304 = (state_15363[(13)]);
var inst_15304__$1 = (state_15363[(2)]);
var inst_15305 = (inst_15304__$1 == null);
var state_15363__$1 = (function (){var statearr_15369 = state_15363;
(statearr_15369[(13)] = inst_15304__$1);

return statearr_15369;
})();
if(cljs.core.truth_(inst_15305)){
var statearr_15370_15406 = state_15363__$1;
(statearr_15370_15406[(1)] = (5));

} else {
var statearr_15371_15407 = state_15363__$1;
(statearr_15371_15407[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15364 === (15))){
var state_15363__$1 = state_15363;
var statearr_15375_15408 = state_15363__$1;
(statearr_15375_15408[(2)] = null);

(statearr_15375_15408[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15364 === (21))){
var state_15363__$1 = state_15363;
var statearr_15376_15409 = state_15363__$1;
(statearr_15376_15409[(2)] = null);

(statearr_15376_15409[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15364 === (13))){
var inst_15315 = (state_15363[(8)]);
var inst_15318 = (state_15363[(9)]);
var inst_15317 = (state_15363[(10)]);
var inst_15316 = (state_15363[(11)]);
var inst_15325 = (state_15363[(2)]);
var inst_15326 = (inst_15318 + (1));
var tmp15372 = inst_15315;
var tmp15373 = inst_15317;
var tmp15374 = inst_15316;
var inst_15315__$1 = tmp15372;
var inst_15316__$1 = tmp15374;
var inst_15317__$1 = tmp15373;
var inst_15318__$1 = inst_15326;
var state_15363__$1 = (function (){var statearr_15377 = state_15363;
(statearr_15377[(8)] = inst_15315__$1);

(statearr_15377[(9)] = inst_15318__$1);

(statearr_15377[(10)] = inst_15317__$1);

(statearr_15377[(11)] = inst_15316__$1);

(statearr_15377[(14)] = inst_15325);

return statearr_15377;
})();
var statearr_15378_15410 = state_15363__$1;
(statearr_15378_15410[(2)] = null);

(statearr_15378_15410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15364 === (22))){
var state_15363__$1 = state_15363;
var statearr_15379_15411 = state_15363__$1;
(statearr_15379_15411[(2)] = null);

(statearr_15379_15411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15364 === (6))){
var inst_15304 = (state_15363[(13)]);
var inst_15313 = f.call(null,inst_15304);
var inst_15314 = cljs.core.seq.call(null,inst_15313);
var inst_15315 = inst_15314;
var inst_15316 = null;
var inst_15317 = (0);
var inst_15318 = (0);
var state_15363__$1 = (function (){var statearr_15380 = state_15363;
(statearr_15380[(8)] = inst_15315);

(statearr_15380[(9)] = inst_15318);

(statearr_15380[(10)] = inst_15317);

(statearr_15380[(11)] = inst_15316);

return statearr_15380;
})();
var statearr_15381_15412 = state_15363__$1;
(statearr_15381_15412[(2)] = null);

(statearr_15381_15412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15364 === (17))){
var inst_15329 = (state_15363[(7)]);
var inst_15333 = cljs.core.chunk_first.call(null,inst_15329);
var inst_15334 = cljs.core.chunk_rest.call(null,inst_15329);
var inst_15335 = cljs.core.count.call(null,inst_15333);
var inst_15315 = inst_15334;
var inst_15316 = inst_15333;
var inst_15317 = inst_15335;
var inst_15318 = (0);
var state_15363__$1 = (function (){var statearr_15382 = state_15363;
(statearr_15382[(8)] = inst_15315);

(statearr_15382[(9)] = inst_15318);

(statearr_15382[(10)] = inst_15317);

(statearr_15382[(11)] = inst_15316);

return statearr_15382;
})();
var statearr_15383_15413 = state_15363__$1;
(statearr_15383_15413[(2)] = null);

(statearr_15383_15413[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15364 === (3))){
var inst_15361 = (state_15363[(2)]);
var state_15363__$1 = state_15363;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15363__$1,inst_15361);
} else {
if((state_val_15364 === (12))){
var inst_15349 = (state_15363[(2)]);
var state_15363__$1 = state_15363;
var statearr_15384_15414 = state_15363__$1;
(statearr_15384_15414[(2)] = inst_15349);

(statearr_15384_15414[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15364 === (2))){
var state_15363__$1 = state_15363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15363__$1,(4),in$);
} else {
if((state_val_15364 === (23))){
var inst_15357 = (state_15363[(2)]);
var state_15363__$1 = state_15363;
var statearr_15385_15415 = state_15363__$1;
(statearr_15385_15415[(2)] = inst_15357);

(statearr_15385_15415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15364 === (19))){
var inst_15344 = (state_15363[(2)]);
var state_15363__$1 = state_15363;
var statearr_15386_15416 = state_15363__$1;
(statearr_15386_15416[(2)] = inst_15344);

(statearr_15386_15416[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15364 === (11))){
var inst_15315 = (state_15363[(8)]);
var inst_15329 = (state_15363[(7)]);
var inst_15329__$1 = cljs.core.seq.call(null,inst_15315);
var state_15363__$1 = (function (){var statearr_15387 = state_15363;
(statearr_15387[(7)] = inst_15329__$1);

return statearr_15387;
})();
if(inst_15329__$1){
var statearr_15388_15417 = state_15363__$1;
(statearr_15388_15417[(1)] = (14));

} else {
var statearr_15389_15418 = state_15363__$1;
(statearr_15389_15418[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15364 === (9))){
var inst_15351 = (state_15363[(2)]);
var inst_15352 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_15363__$1 = (function (){var statearr_15390 = state_15363;
(statearr_15390[(15)] = inst_15351);

return statearr_15390;
})();
if(cljs.core.truth_(inst_15352)){
var statearr_15391_15419 = state_15363__$1;
(statearr_15391_15419[(1)] = (21));

} else {
var statearr_15392_15420 = state_15363__$1;
(statearr_15392_15420[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15364 === (5))){
var inst_15307 = cljs.core.async.close_BANG_.call(null,out);
var state_15363__$1 = state_15363;
var statearr_15393_15421 = state_15363__$1;
(statearr_15393_15421[(2)] = inst_15307);

(statearr_15393_15421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15364 === (14))){
var inst_15329 = (state_15363[(7)]);
var inst_15331 = cljs.core.chunked_seq_QMARK_.call(null,inst_15329);
var state_15363__$1 = state_15363;
if(inst_15331){
var statearr_15394_15422 = state_15363__$1;
(statearr_15394_15422[(1)] = (17));

} else {
var statearr_15395_15423 = state_15363__$1;
(statearr_15395_15423[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15364 === (16))){
var inst_15347 = (state_15363[(2)]);
var state_15363__$1 = state_15363;
var statearr_15396_15424 = state_15363__$1;
(statearr_15396_15424[(2)] = inst_15347);

(statearr_15396_15424[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15364 === (10))){
var inst_15318 = (state_15363[(9)]);
var inst_15316 = (state_15363[(11)]);
var inst_15323 = cljs.core._nth.call(null,inst_15316,inst_15318);
var state_15363__$1 = state_15363;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15363__$1,(13),out,inst_15323);
} else {
if((state_val_15364 === (18))){
var inst_15329 = (state_15363[(7)]);
var inst_15338 = cljs.core.first.call(null,inst_15329);
var state_15363__$1 = state_15363;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15363__$1,(20),out,inst_15338);
} else {
if((state_val_15364 === (8))){
var inst_15318 = (state_15363[(9)]);
var inst_15317 = (state_15363[(10)]);
var inst_15320 = (inst_15318 < inst_15317);
var inst_15321 = inst_15320;
var state_15363__$1 = state_15363;
if(cljs.core.truth_(inst_15321)){
var statearr_15397_15425 = state_15363__$1;
(statearr_15397_15425[(1)] = (10));

} else {
var statearr_15398_15426 = state_15363__$1;
(statearr_15398_15426[(1)] = (11));

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
});})(c__13747__auto__))
;
return ((function (switch__13652__auto__,c__13747__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13653__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13653__auto____0 = (function (){
var statearr_15399 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15399[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13653__auto__);

(statearr_15399[(1)] = (1));

return statearr_15399;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13653__auto____1 = (function (state_15363){
while(true){
var ret_value__13654__auto__ = (function (){try{while(true){
var result__13655__auto__ = switch__13652__auto__.call(null,state_15363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13655__auto__;
}
break;
}
}catch (e15400){if((e15400 instanceof Object)){
var ex__13656__auto__ = e15400;
var statearr_15401_15427 = state_15363;
(statearr_15401_15427[(5)] = ex__13656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15400;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15428 = state_15363;
state_15363 = G__15428;
continue;
} else {
return ret_value__13654__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13653__auto__ = function(state_15363){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13653__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13653__auto____1.call(this,state_15363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13653__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13653__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13653__auto__;
})()
;})(switch__13652__auto__,c__13747__auto__))
})();
var state__13749__auto__ = (function (){var statearr_15402 = f__13748__auto__.call(null);
(statearr_15402[(6)] = c__13747__auto__);

return statearr_15402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13749__auto__);
});})(c__13747__auto__))
);

return c__13747__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__15430 = arguments.length;
switch (G__15430) {
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
var G__15433 = arguments.length;
switch (G__15433) {
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
var G__15436 = arguments.length;
switch (G__15436) {
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
var c__13747__auto___15483 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13747__auto___15483,out){
return (function (){
var f__13748__auto__ = (function (){var switch__13652__auto__ = ((function (c__13747__auto___15483,out){
return (function (state_15460){
var state_val_15461 = (state_15460[(1)]);
if((state_val_15461 === (7))){
var inst_15455 = (state_15460[(2)]);
var state_15460__$1 = state_15460;
var statearr_15462_15484 = state_15460__$1;
(statearr_15462_15484[(2)] = inst_15455);

(statearr_15462_15484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15461 === (1))){
var inst_15437 = null;
var state_15460__$1 = (function (){var statearr_15463 = state_15460;
(statearr_15463[(7)] = inst_15437);

return statearr_15463;
})();
var statearr_15464_15485 = state_15460__$1;
(statearr_15464_15485[(2)] = null);

(statearr_15464_15485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15461 === (4))){
var inst_15440 = (state_15460[(8)]);
var inst_15440__$1 = (state_15460[(2)]);
var inst_15441 = (inst_15440__$1 == null);
var inst_15442 = cljs.core.not.call(null,inst_15441);
var state_15460__$1 = (function (){var statearr_15465 = state_15460;
(statearr_15465[(8)] = inst_15440__$1);

return statearr_15465;
})();
if(inst_15442){
var statearr_15466_15486 = state_15460__$1;
(statearr_15466_15486[(1)] = (5));

} else {
var statearr_15467_15487 = state_15460__$1;
(statearr_15467_15487[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15461 === (6))){
var state_15460__$1 = state_15460;
var statearr_15468_15488 = state_15460__$1;
(statearr_15468_15488[(2)] = null);

(statearr_15468_15488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15461 === (3))){
var inst_15457 = (state_15460[(2)]);
var inst_15458 = cljs.core.async.close_BANG_.call(null,out);
var state_15460__$1 = (function (){var statearr_15469 = state_15460;
(statearr_15469[(9)] = inst_15457);

return statearr_15469;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15460__$1,inst_15458);
} else {
if((state_val_15461 === (2))){
var state_15460__$1 = state_15460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15460__$1,(4),ch);
} else {
if((state_val_15461 === (11))){
var inst_15440 = (state_15460[(8)]);
var inst_15449 = (state_15460[(2)]);
var inst_15437 = inst_15440;
var state_15460__$1 = (function (){var statearr_15470 = state_15460;
(statearr_15470[(10)] = inst_15449);

(statearr_15470[(7)] = inst_15437);

return statearr_15470;
})();
var statearr_15471_15489 = state_15460__$1;
(statearr_15471_15489[(2)] = null);

(statearr_15471_15489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15461 === (9))){
var inst_15440 = (state_15460[(8)]);
var state_15460__$1 = state_15460;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15460__$1,(11),out,inst_15440);
} else {
if((state_val_15461 === (5))){
var inst_15440 = (state_15460[(8)]);
var inst_15437 = (state_15460[(7)]);
var inst_15444 = cljs.core._EQ_.call(null,inst_15440,inst_15437);
var state_15460__$1 = state_15460;
if(inst_15444){
var statearr_15473_15490 = state_15460__$1;
(statearr_15473_15490[(1)] = (8));

} else {
var statearr_15474_15491 = state_15460__$1;
(statearr_15474_15491[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15461 === (10))){
var inst_15452 = (state_15460[(2)]);
var state_15460__$1 = state_15460;
var statearr_15475_15492 = state_15460__$1;
(statearr_15475_15492[(2)] = inst_15452);

(statearr_15475_15492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15461 === (8))){
var inst_15437 = (state_15460[(7)]);
var tmp15472 = inst_15437;
var inst_15437__$1 = tmp15472;
var state_15460__$1 = (function (){var statearr_15476 = state_15460;
(statearr_15476[(7)] = inst_15437__$1);

return statearr_15476;
})();
var statearr_15477_15493 = state_15460__$1;
(statearr_15477_15493[(2)] = null);

(statearr_15477_15493[(1)] = (2));


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
});})(c__13747__auto___15483,out))
;
return ((function (switch__13652__auto__,c__13747__auto___15483,out){
return (function() {
var cljs$core$async$state_machine__13653__auto__ = null;
var cljs$core$async$state_machine__13653__auto____0 = (function (){
var statearr_15478 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15478[(0)] = cljs$core$async$state_machine__13653__auto__);

(statearr_15478[(1)] = (1));

return statearr_15478;
});
var cljs$core$async$state_machine__13653__auto____1 = (function (state_15460){
while(true){
var ret_value__13654__auto__ = (function (){try{while(true){
var result__13655__auto__ = switch__13652__auto__.call(null,state_15460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13655__auto__;
}
break;
}
}catch (e15479){if((e15479 instanceof Object)){
var ex__13656__auto__ = e15479;
var statearr_15480_15494 = state_15460;
(statearr_15480_15494[(5)] = ex__13656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15495 = state_15460;
state_15460 = G__15495;
continue;
} else {
return ret_value__13654__auto__;
}
break;
}
});
cljs$core$async$state_machine__13653__auto__ = function(state_15460){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13653__auto____1.call(this,state_15460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13653__auto____0;
cljs$core$async$state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13653__auto____1;
return cljs$core$async$state_machine__13653__auto__;
})()
;})(switch__13652__auto__,c__13747__auto___15483,out))
})();
var state__13749__auto__ = (function (){var statearr_15481 = f__13748__auto__.call(null);
(statearr_15481[(6)] = c__13747__auto___15483);

return statearr_15481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13749__auto__);
});})(c__13747__auto___15483,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__15497 = arguments.length;
switch (G__15497) {
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
var c__13747__auto___15563 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13747__auto___15563,out){
return (function (){
var f__13748__auto__ = (function (){var switch__13652__auto__ = ((function (c__13747__auto___15563,out){
return (function (state_15535){
var state_val_15536 = (state_15535[(1)]);
if((state_val_15536 === (7))){
var inst_15531 = (state_15535[(2)]);
var state_15535__$1 = state_15535;
var statearr_15537_15564 = state_15535__$1;
(statearr_15537_15564[(2)] = inst_15531);

(statearr_15537_15564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15536 === (1))){
var inst_15498 = (new Array(n));
var inst_15499 = inst_15498;
var inst_15500 = (0);
var state_15535__$1 = (function (){var statearr_15538 = state_15535;
(statearr_15538[(7)] = inst_15500);

(statearr_15538[(8)] = inst_15499);

return statearr_15538;
})();
var statearr_15539_15565 = state_15535__$1;
(statearr_15539_15565[(2)] = null);

(statearr_15539_15565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15536 === (4))){
var inst_15503 = (state_15535[(9)]);
var inst_15503__$1 = (state_15535[(2)]);
var inst_15504 = (inst_15503__$1 == null);
var inst_15505 = cljs.core.not.call(null,inst_15504);
var state_15535__$1 = (function (){var statearr_15540 = state_15535;
(statearr_15540[(9)] = inst_15503__$1);

return statearr_15540;
})();
if(inst_15505){
var statearr_15541_15566 = state_15535__$1;
(statearr_15541_15566[(1)] = (5));

} else {
var statearr_15542_15567 = state_15535__$1;
(statearr_15542_15567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15536 === (15))){
var inst_15525 = (state_15535[(2)]);
var state_15535__$1 = state_15535;
var statearr_15543_15568 = state_15535__$1;
(statearr_15543_15568[(2)] = inst_15525);

(statearr_15543_15568[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15536 === (13))){
var state_15535__$1 = state_15535;
var statearr_15544_15569 = state_15535__$1;
(statearr_15544_15569[(2)] = null);

(statearr_15544_15569[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15536 === (6))){
var inst_15500 = (state_15535[(7)]);
var inst_15521 = (inst_15500 > (0));
var state_15535__$1 = state_15535;
if(cljs.core.truth_(inst_15521)){
var statearr_15545_15570 = state_15535__$1;
(statearr_15545_15570[(1)] = (12));

} else {
var statearr_15546_15571 = state_15535__$1;
(statearr_15546_15571[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15536 === (3))){
var inst_15533 = (state_15535[(2)]);
var state_15535__$1 = state_15535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15535__$1,inst_15533);
} else {
if((state_val_15536 === (12))){
var inst_15499 = (state_15535[(8)]);
var inst_15523 = cljs.core.vec.call(null,inst_15499);
var state_15535__$1 = state_15535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15535__$1,(15),out,inst_15523);
} else {
if((state_val_15536 === (2))){
var state_15535__$1 = state_15535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15535__$1,(4),ch);
} else {
if((state_val_15536 === (11))){
var inst_15515 = (state_15535[(2)]);
var inst_15516 = (new Array(n));
var inst_15499 = inst_15516;
var inst_15500 = (0);
var state_15535__$1 = (function (){var statearr_15547 = state_15535;
(statearr_15547[(7)] = inst_15500);

(statearr_15547[(10)] = inst_15515);

(statearr_15547[(8)] = inst_15499);

return statearr_15547;
})();
var statearr_15548_15572 = state_15535__$1;
(statearr_15548_15572[(2)] = null);

(statearr_15548_15572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15536 === (9))){
var inst_15499 = (state_15535[(8)]);
var inst_15513 = cljs.core.vec.call(null,inst_15499);
var state_15535__$1 = state_15535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15535__$1,(11),out,inst_15513);
} else {
if((state_val_15536 === (5))){
var inst_15500 = (state_15535[(7)]);
var inst_15499 = (state_15535[(8)]);
var inst_15508 = (state_15535[(11)]);
var inst_15503 = (state_15535[(9)]);
var inst_15507 = (inst_15499[inst_15500] = inst_15503);
var inst_15508__$1 = (inst_15500 + (1));
var inst_15509 = (inst_15508__$1 < n);
var state_15535__$1 = (function (){var statearr_15549 = state_15535;
(statearr_15549[(11)] = inst_15508__$1);

(statearr_15549[(12)] = inst_15507);

return statearr_15549;
})();
if(cljs.core.truth_(inst_15509)){
var statearr_15550_15573 = state_15535__$1;
(statearr_15550_15573[(1)] = (8));

} else {
var statearr_15551_15574 = state_15535__$1;
(statearr_15551_15574[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15536 === (14))){
var inst_15528 = (state_15535[(2)]);
var inst_15529 = cljs.core.async.close_BANG_.call(null,out);
var state_15535__$1 = (function (){var statearr_15553 = state_15535;
(statearr_15553[(13)] = inst_15528);

return statearr_15553;
})();
var statearr_15554_15575 = state_15535__$1;
(statearr_15554_15575[(2)] = inst_15529);

(statearr_15554_15575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15536 === (10))){
var inst_15519 = (state_15535[(2)]);
var state_15535__$1 = state_15535;
var statearr_15555_15576 = state_15535__$1;
(statearr_15555_15576[(2)] = inst_15519);

(statearr_15555_15576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15536 === (8))){
var inst_15499 = (state_15535[(8)]);
var inst_15508 = (state_15535[(11)]);
var tmp15552 = inst_15499;
var inst_15499__$1 = tmp15552;
var inst_15500 = inst_15508;
var state_15535__$1 = (function (){var statearr_15556 = state_15535;
(statearr_15556[(7)] = inst_15500);

(statearr_15556[(8)] = inst_15499__$1);

return statearr_15556;
})();
var statearr_15557_15577 = state_15535__$1;
(statearr_15557_15577[(2)] = null);

(statearr_15557_15577[(1)] = (2));


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
});})(c__13747__auto___15563,out))
;
return ((function (switch__13652__auto__,c__13747__auto___15563,out){
return (function() {
var cljs$core$async$state_machine__13653__auto__ = null;
var cljs$core$async$state_machine__13653__auto____0 = (function (){
var statearr_15558 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15558[(0)] = cljs$core$async$state_machine__13653__auto__);

(statearr_15558[(1)] = (1));

return statearr_15558;
});
var cljs$core$async$state_machine__13653__auto____1 = (function (state_15535){
while(true){
var ret_value__13654__auto__ = (function (){try{while(true){
var result__13655__auto__ = switch__13652__auto__.call(null,state_15535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13655__auto__;
}
break;
}
}catch (e15559){if((e15559 instanceof Object)){
var ex__13656__auto__ = e15559;
var statearr_15560_15578 = state_15535;
(statearr_15560_15578[(5)] = ex__13656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15579 = state_15535;
state_15535 = G__15579;
continue;
} else {
return ret_value__13654__auto__;
}
break;
}
});
cljs$core$async$state_machine__13653__auto__ = function(state_15535){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13653__auto____1.call(this,state_15535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13653__auto____0;
cljs$core$async$state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13653__auto____1;
return cljs$core$async$state_machine__13653__auto__;
})()
;})(switch__13652__auto__,c__13747__auto___15563,out))
})();
var state__13749__auto__ = (function (){var statearr_15561 = f__13748__auto__.call(null);
(statearr_15561[(6)] = c__13747__auto___15563);

return statearr_15561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13749__auto__);
});})(c__13747__auto___15563,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__15581 = arguments.length;
switch (G__15581) {
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
var c__13747__auto___15651 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13747__auto___15651,out){
return (function (){
var f__13748__auto__ = (function (){var switch__13652__auto__ = ((function (c__13747__auto___15651,out){
return (function (state_15623){
var state_val_15624 = (state_15623[(1)]);
if((state_val_15624 === (7))){
var inst_15619 = (state_15623[(2)]);
var state_15623__$1 = state_15623;
var statearr_15625_15652 = state_15623__$1;
(statearr_15625_15652[(2)] = inst_15619);

(statearr_15625_15652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15624 === (1))){
var inst_15582 = [];
var inst_15583 = inst_15582;
var inst_15584 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15623__$1 = (function (){var statearr_15626 = state_15623;
(statearr_15626[(7)] = inst_15584);

(statearr_15626[(8)] = inst_15583);

return statearr_15626;
})();
var statearr_15627_15653 = state_15623__$1;
(statearr_15627_15653[(2)] = null);

(statearr_15627_15653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15624 === (4))){
var inst_15587 = (state_15623[(9)]);
var inst_15587__$1 = (state_15623[(2)]);
var inst_15588 = (inst_15587__$1 == null);
var inst_15589 = cljs.core.not.call(null,inst_15588);
var state_15623__$1 = (function (){var statearr_15628 = state_15623;
(statearr_15628[(9)] = inst_15587__$1);

return statearr_15628;
})();
if(inst_15589){
var statearr_15629_15654 = state_15623__$1;
(statearr_15629_15654[(1)] = (5));

} else {
var statearr_15630_15655 = state_15623__$1;
(statearr_15630_15655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15624 === (15))){
var inst_15613 = (state_15623[(2)]);
var state_15623__$1 = state_15623;
var statearr_15631_15656 = state_15623__$1;
(statearr_15631_15656[(2)] = inst_15613);

(statearr_15631_15656[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15624 === (13))){
var state_15623__$1 = state_15623;
var statearr_15632_15657 = state_15623__$1;
(statearr_15632_15657[(2)] = null);

(statearr_15632_15657[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15624 === (6))){
var inst_15583 = (state_15623[(8)]);
var inst_15608 = inst_15583.length;
var inst_15609 = (inst_15608 > (0));
var state_15623__$1 = state_15623;
if(cljs.core.truth_(inst_15609)){
var statearr_15633_15658 = state_15623__$1;
(statearr_15633_15658[(1)] = (12));

} else {
var statearr_15634_15659 = state_15623__$1;
(statearr_15634_15659[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15624 === (3))){
var inst_15621 = (state_15623[(2)]);
var state_15623__$1 = state_15623;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15623__$1,inst_15621);
} else {
if((state_val_15624 === (12))){
var inst_15583 = (state_15623[(8)]);
var inst_15611 = cljs.core.vec.call(null,inst_15583);
var state_15623__$1 = state_15623;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15623__$1,(15),out,inst_15611);
} else {
if((state_val_15624 === (2))){
var state_15623__$1 = state_15623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15623__$1,(4),ch);
} else {
if((state_val_15624 === (11))){
var inst_15587 = (state_15623[(9)]);
var inst_15591 = (state_15623[(10)]);
var inst_15601 = (state_15623[(2)]);
var inst_15602 = [];
var inst_15603 = inst_15602.push(inst_15587);
var inst_15583 = inst_15602;
var inst_15584 = inst_15591;
var state_15623__$1 = (function (){var statearr_15635 = state_15623;
(statearr_15635[(7)] = inst_15584);

(statearr_15635[(8)] = inst_15583);

(statearr_15635[(11)] = inst_15603);

(statearr_15635[(12)] = inst_15601);

return statearr_15635;
})();
var statearr_15636_15660 = state_15623__$1;
(statearr_15636_15660[(2)] = null);

(statearr_15636_15660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15624 === (9))){
var inst_15583 = (state_15623[(8)]);
var inst_15599 = cljs.core.vec.call(null,inst_15583);
var state_15623__$1 = state_15623;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15623__$1,(11),out,inst_15599);
} else {
if((state_val_15624 === (5))){
var inst_15587 = (state_15623[(9)]);
var inst_15584 = (state_15623[(7)]);
var inst_15591 = (state_15623[(10)]);
var inst_15591__$1 = f.call(null,inst_15587);
var inst_15592 = cljs.core._EQ_.call(null,inst_15591__$1,inst_15584);
var inst_15593 = cljs.core.keyword_identical_QMARK_.call(null,inst_15584,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_15594 = ((inst_15592) || (inst_15593));
var state_15623__$1 = (function (){var statearr_15637 = state_15623;
(statearr_15637[(10)] = inst_15591__$1);

return statearr_15637;
})();
if(cljs.core.truth_(inst_15594)){
var statearr_15638_15661 = state_15623__$1;
(statearr_15638_15661[(1)] = (8));

} else {
var statearr_15639_15662 = state_15623__$1;
(statearr_15639_15662[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15624 === (14))){
var inst_15616 = (state_15623[(2)]);
var inst_15617 = cljs.core.async.close_BANG_.call(null,out);
var state_15623__$1 = (function (){var statearr_15641 = state_15623;
(statearr_15641[(13)] = inst_15616);

return statearr_15641;
})();
var statearr_15642_15663 = state_15623__$1;
(statearr_15642_15663[(2)] = inst_15617);

(statearr_15642_15663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15624 === (10))){
var inst_15606 = (state_15623[(2)]);
var state_15623__$1 = state_15623;
var statearr_15643_15664 = state_15623__$1;
(statearr_15643_15664[(2)] = inst_15606);

(statearr_15643_15664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15624 === (8))){
var inst_15587 = (state_15623[(9)]);
var inst_15591 = (state_15623[(10)]);
var inst_15583 = (state_15623[(8)]);
var inst_15596 = inst_15583.push(inst_15587);
var tmp15640 = inst_15583;
var inst_15583__$1 = tmp15640;
var inst_15584 = inst_15591;
var state_15623__$1 = (function (){var statearr_15644 = state_15623;
(statearr_15644[(7)] = inst_15584);

(statearr_15644[(8)] = inst_15583__$1);

(statearr_15644[(14)] = inst_15596);

return statearr_15644;
})();
var statearr_15645_15665 = state_15623__$1;
(statearr_15645_15665[(2)] = null);

(statearr_15645_15665[(1)] = (2));


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
});})(c__13747__auto___15651,out))
;
return ((function (switch__13652__auto__,c__13747__auto___15651,out){
return (function() {
var cljs$core$async$state_machine__13653__auto__ = null;
var cljs$core$async$state_machine__13653__auto____0 = (function (){
var statearr_15646 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15646[(0)] = cljs$core$async$state_machine__13653__auto__);

(statearr_15646[(1)] = (1));

return statearr_15646;
});
var cljs$core$async$state_machine__13653__auto____1 = (function (state_15623){
while(true){
var ret_value__13654__auto__ = (function (){try{while(true){
var result__13655__auto__ = switch__13652__auto__.call(null,state_15623);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13655__auto__;
}
break;
}
}catch (e15647){if((e15647 instanceof Object)){
var ex__13656__auto__ = e15647;
var statearr_15648_15666 = state_15623;
(statearr_15648_15666[(5)] = ex__13656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15667 = state_15623;
state_15623 = G__15667;
continue;
} else {
return ret_value__13654__auto__;
}
break;
}
});
cljs$core$async$state_machine__13653__auto__ = function(state_15623){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13653__auto____1.call(this,state_15623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13653__auto____0;
cljs$core$async$state_machine__13653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13653__auto____1;
return cljs$core$async$state_machine__13653__auto__;
})()
;})(switch__13652__auto__,c__13747__auto___15651,out))
})();
var state__13749__auto__ = (function (){var statearr_15649 = f__13748__auto__.call(null);
(statearr_15649[(6)] = c__13747__auto___15651);

return statearr_15649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13749__auto__);
});})(c__13747__auto___15651,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
