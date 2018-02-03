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
var G__28358 = arguments.length;
switch (G__28358) {
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
if(typeof cljs.core.async.t_cljs$core$async28359 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28359 = (function (f,blockable,meta28360){
this.f = f;
this.blockable = blockable;
this.meta28360 = meta28360;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28361,meta28360__$1){
var self__ = this;
var _28361__$1 = this;
return (new cljs.core.async.t_cljs$core$async28359(self__.f,self__.blockable,meta28360__$1));
});

cljs.core.async.t_cljs$core$async28359.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28361){
var self__ = this;
var _28361__$1 = this;
return self__.meta28360;
});

cljs.core.async.t_cljs$core$async28359.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28359.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28359.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28359.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28359.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28360","meta28360",1506755565,null)], null);
});

cljs.core.async.t_cljs$core$async28359.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28359.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28359";

cljs.core.async.t_cljs$core$async28359.cljs$lang$ctorPrWriter = (function (this__23910__auto__,writer__23911__auto__,opt__23912__auto__){
return cljs.core._write.call(null,writer__23911__auto__,"cljs.core.async/t_cljs$core$async28359");
});

cljs.core.async.__GT_t_cljs$core$async28359 = (function cljs$core$async$__GT_t_cljs$core$async28359(f__$1,blockable__$1,meta28360){
return (new cljs.core.async.t_cljs$core$async28359(f__$1,blockable__$1,meta28360));
});

}

return (new cljs.core.async.t_cljs$core$async28359(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__28365 = arguments.length;
switch (G__28365) {
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
var G__28368 = arguments.length;
switch (G__28368) {
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
var G__28371 = arguments.length;
switch (G__28371) {
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
var val_28373 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28373);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28373,ret){
return (function (){
return fn1.call(null,val_28373);
});})(val_28373,ret))
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
var G__28375 = arguments.length;
switch (G__28375) {
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
var n__24284__auto___28377 = n;
var x_28378 = (0);
while(true){
if((x_28378 < n__24284__auto___28377)){
(a[x_28378] = (0));

var G__28379 = (x_28378 + (1));
x_28378 = G__28379;
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

var G__28380 = (i + (1));
i = G__28380;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28381 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28381 = (function (flag,meta28382){
this.flag = flag;
this.meta28382 = meta28382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28383,meta28382__$1){
var self__ = this;
var _28383__$1 = this;
return (new cljs.core.async.t_cljs$core$async28381(self__.flag,meta28382__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28381.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28383){
var self__ = this;
var _28383__$1 = this;
return self__.meta28382;
});})(flag))
;

cljs.core.async.t_cljs$core$async28381.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28381.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28381.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28381.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28381.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28382","meta28382",1002029291,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28381.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28381.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28381";

cljs.core.async.t_cljs$core$async28381.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__23910__auto__,writer__23911__auto__,opt__23912__auto__){
return cljs.core._write.call(null,writer__23911__auto__,"cljs.core.async/t_cljs$core$async28381");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async28381 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28381(flag__$1,meta28382){
return (new cljs.core.async.t_cljs$core$async28381(flag__$1,meta28382));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28381(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28384 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28384 = (function (flag,cb,meta28385){
this.flag = flag;
this.cb = cb;
this.meta28385 = meta28385;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28386,meta28385__$1){
var self__ = this;
var _28386__$1 = this;
return (new cljs.core.async.t_cljs$core$async28384(self__.flag,self__.cb,meta28385__$1));
});

cljs.core.async.t_cljs$core$async28384.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28386){
var self__ = this;
var _28386__$1 = this;
return self__.meta28385;
});

cljs.core.async.t_cljs$core$async28384.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28384.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28384.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28384.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28384.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28385","meta28385",-67056209,null)], null);
});

cljs.core.async.t_cljs$core$async28384.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28384.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28384";

cljs.core.async.t_cljs$core$async28384.cljs$lang$ctorPrWriter = (function (this__23910__auto__,writer__23911__auto__,opt__23912__auto__){
return cljs.core._write.call(null,writer__23911__auto__,"cljs.core.async/t_cljs$core$async28384");
});

cljs.core.async.__GT_t_cljs$core$async28384 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28384(flag__$1,cb__$1,meta28385){
return (new cljs.core.async.t_cljs$core$async28384(flag__$1,cb__$1,meta28385));
});

}

return (new cljs.core.async.t_cljs$core$async28384(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__28387_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28387_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28388_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28388_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__23239__auto__ = wport;
if(cljs.core.truth_(or__23239__auto__)){
return or__23239__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28389 = (i + (1));
i = G__28389;
continue;
}
} else {
return null;
}
break;
}
})();
var or__23239__auto__ = ret;
if(cljs.core.truth_(or__23239__auto__)){
return or__23239__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__23227__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__23227__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__23227__auto__;
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
var args__24525__auto__ = [];
var len__24518__auto___28395 = arguments.length;
var i__24519__auto___28396 = (0);
while(true){
if((i__24519__auto___28396 < len__24518__auto___28395)){
args__24525__auto__.push((arguments[i__24519__auto___28396]));

var G__28397 = (i__24519__auto___28396 + (1));
i__24519__auto___28396 = G__28397;
continue;
} else {
}
break;
}

var argseq__24526__auto__ = ((((1) < args__24525__auto__.length))?(new cljs.core.IndexedSeq(args__24525__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24526__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28392){
var map__28393 = p__28392;
var map__28393__$1 = ((((!((map__28393 == null)))?((((map__28393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28393.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28393):map__28393);
var opts = map__28393__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28390){
var G__28391 = cljs.core.first.call(null,seq28390);
var seq28390__$1 = cljs.core.next.call(null,seq28390);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28391,seq28390__$1);
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
var G__28399 = arguments.length;
switch (G__28399) {
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
var c__28298__auto___28445 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28298__auto___28445){
return (function (){
var f__28299__auto__ = (function (){var switch__28208__auto__ = ((function (c__28298__auto___28445){
return (function (state_28423){
var state_val_28424 = (state_28423[(1)]);
if((state_val_28424 === (7))){
var inst_28419 = (state_28423[(2)]);
var state_28423__$1 = state_28423;
var statearr_28425_28446 = state_28423__$1;
(statearr_28425_28446[(2)] = inst_28419);

(statearr_28425_28446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28424 === (1))){
var state_28423__$1 = state_28423;
var statearr_28426_28447 = state_28423__$1;
(statearr_28426_28447[(2)] = null);

(statearr_28426_28447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28424 === (4))){
var inst_28402 = (state_28423[(7)]);
var inst_28402__$1 = (state_28423[(2)]);
var inst_28403 = (inst_28402__$1 == null);
var state_28423__$1 = (function (){var statearr_28427 = state_28423;
(statearr_28427[(7)] = inst_28402__$1);

return statearr_28427;
})();
if(cljs.core.truth_(inst_28403)){
var statearr_28428_28448 = state_28423__$1;
(statearr_28428_28448[(1)] = (5));

} else {
var statearr_28429_28449 = state_28423__$1;
(statearr_28429_28449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28424 === (13))){
var state_28423__$1 = state_28423;
var statearr_28430_28450 = state_28423__$1;
(statearr_28430_28450[(2)] = null);

(statearr_28430_28450[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28424 === (6))){
var inst_28402 = (state_28423[(7)]);
var state_28423__$1 = state_28423;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28423__$1,(11),to,inst_28402);
} else {
if((state_val_28424 === (3))){
var inst_28421 = (state_28423[(2)]);
var state_28423__$1 = state_28423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28423__$1,inst_28421);
} else {
if((state_val_28424 === (12))){
var state_28423__$1 = state_28423;
var statearr_28431_28451 = state_28423__$1;
(statearr_28431_28451[(2)] = null);

(statearr_28431_28451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28424 === (2))){
var state_28423__$1 = state_28423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28423__$1,(4),from);
} else {
if((state_val_28424 === (11))){
var inst_28412 = (state_28423[(2)]);
var state_28423__$1 = state_28423;
if(cljs.core.truth_(inst_28412)){
var statearr_28432_28452 = state_28423__$1;
(statearr_28432_28452[(1)] = (12));

} else {
var statearr_28433_28453 = state_28423__$1;
(statearr_28433_28453[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28424 === (9))){
var state_28423__$1 = state_28423;
var statearr_28434_28454 = state_28423__$1;
(statearr_28434_28454[(2)] = null);

(statearr_28434_28454[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28424 === (5))){
var state_28423__$1 = state_28423;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28435_28455 = state_28423__$1;
(statearr_28435_28455[(1)] = (8));

} else {
var statearr_28436_28456 = state_28423__$1;
(statearr_28436_28456[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28424 === (14))){
var inst_28417 = (state_28423[(2)]);
var state_28423__$1 = state_28423;
var statearr_28437_28457 = state_28423__$1;
(statearr_28437_28457[(2)] = inst_28417);

(statearr_28437_28457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28424 === (10))){
var inst_28409 = (state_28423[(2)]);
var state_28423__$1 = state_28423;
var statearr_28438_28458 = state_28423__$1;
(statearr_28438_28458[(2)] = inst_28409);

(statearr_28438_28458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28424 === (8))){
var inst_28406 = cljs.core.async.close_BANG_.call(null,to);
var state_28423__$1 = state_28423;
var statearr_28439_28459 = state_28423__$1;
(statearr_28439_28459[(2)] = inst_28406);

(statearr_28439_28459[(1)] = (10));


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
});})(c__28298__auto___28445))
;
return ((function (switch__28208__auto__,c__28298__auto___28445){
return (function() {
var cljs$core$async$state_machine__28209__auto__ = null;
var cljs$core$async$state_machine__28209__auto____0 = (function (){
var statearr_28440 = [null,null,null,null,null,null,null,null];
(statearr_28440[(0)] = cljs$core$async$state_machine__28209__auto__);

(statearr_28440[(1)] = (1));

return statearr_28440;
});
var cljs$core$async$state_machine__28209__auto____1 = (function (state_28423){
while(true){
var ret_value__28210__auto__ = (function (){try{while(true){
var result__28211__auto__ = switch__28208__auto__.call(null,state_28423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28211__auto__;
}
break;
}
}catch (e28441){if((e28441 instanceof Object)){
var ex__28212__auto__ = e28441;
var statearr_28442_28460 = state_28423;
(statearr_28442_28460[(5)] = ex__28212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28461 = state_28423;
state_28423 = G__28461;
continue;
} else {
return ret_value__28210__auto__;
}
break;
}
});
cljs$core$async$state_machine__28209__auto__ = function(state_28423){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28209__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28209__auto____1.call(this,state_28423);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28209__auto____0;
cljs$core$async$state_machine__28209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28209__auto____1;
return cljs$core$async$state_machine__28209__auto__;
})()
;})(switch__28208__auto__,c__28298__auto___28445))
})();
var state__28300__auto__ = (function (){var statearr_28443 = f__28299__auto__.call(null);
(statearr_28443[(6)] = c__28298__auto___28445);

return statearr_28443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28300__auto__);
});})(c__28298__auto___28445))
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
return (function (p__28462){
var vec__28463 = p__28462;
var v = cljs.core.nth.call(null,vec__28463,(0),null);
var p = cljs.core.nth.call(null,vec__28463,(1),null);
var job = vec__28463;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28298__auto___28634 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28298__auto___28634,res,vec__28463,v,p,job,jobs,results){
return (function (){
var f__28299__auto__ = (function (){var switch__28208__auto__ = ((function (c__28298__auto___28634,res,vec__28463,v,p,job,jobs,results){
return (function (state_28470){
var state_val_28471 = (state_28470[(1)]);
if((state_val_28471 === (1))){
var state_28470__$1 = state_28470;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28470__$1,(2),res,v);
} else {
if((state_val_28471 === (2))){
var inst_28467 = (state_28470[(2)]);
var inst_28468 = cljs.core.async.close_BANG_.call(null,res);
var state_28470__$1 = (function (){var statearr_28472 = state_28470;
(statearr_28472[(7)] = inst_28467);

return statearr_28472;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28470__$1,inst_28468);
} else {
return null;
}
}
});})(c__28298__auto___28634,res,vec__28463,v,p,job,jobs,results))
;
return ((function (switch__28208__auto__,c__28298__auto___28634,res,vec__28463,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28209__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28209__auto____0 = (function (){
var statearr_28473 = [null,null,null,null,null,null,null,null];
(statearr_28473[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28209__auto__);

(statearr_28473[(1)] = (1));

return statearr_28473;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28209__auto____1 = (function (state_28470){
while(true){
var ret_value__28210__auto__ = (function (){try{while(true){
var result__28211__auto__ = switch__28208__auto__.call(null,state_28470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28211__auto__;
}
break;
}
}catch (e28474){if((e28474 instanceof Object)){
var ex__28212__auto__ = e28474;
var statearr_28475_28635 = state_28470;
(statearr_28475_28635[(5)] = ex__28212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28636 = state_28470;
state_28470 = G__28636;
continue;
} else {
return ret_value__28210__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28209__auto__ = function(state_28470){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28209__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28209__auto____1.call(this,state_28470);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__28209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28209__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28209__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28209__auto__;
})()
;})(switch__28208__auto__,c__28298__auto___28634,res,vec__28463,v,p,job,jobs,results))
})();
var state__28300__auto__ = (function (){var statearr_28476 = f__28299__auto__.call(null);
(statearr_28476[(6)] = c__28298__auto___28634);

return statearr_28476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28300__auto__);
});})(c__28298__auto___28634,res,vec__28463,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28477){
var vec__28478 = p__28477;
var v = cljs.core.nth.call(null,vec__28478,(0),null);
var p = cljs.core.nth.call(null,vec__28478,(1),null);
var job = vec__28478;
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
var n__24284__auto___28637 = n;
var __28638 = (0);
while(true){
if((__28638 < n__24284__auto___28637)){
var G__28481_28639 = type;
var G__28481_28640__$1 = (((G__28481_28639 instanceof cljs.core.Keyword))?G__28481_28639.fqn:null);
switch (G__28481_28640__$1) {
case "compute":
var c__28298__auto___28642 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28638,c__28298__auto___28642,G__28481_28639,G__28481_28640__$1,n__24284__auto___28637,jobs,results,process,async){
return (function (){
var f__28299__auto__ = (function (){var switch__28208__auto__ = ((function (__28638,c__28298__auto___28642,G__28481_28639,G__28481_28640__$1,n__24284__auto___28637,jobs,results,process,async){
return (function (state_28494){
var state_val_28495 = (state_28494[(1)]);
if((state_val_28495 === (1))){
var state_28494__$1 = state_28494;
var statearr_28496_28643 = state_28494__$1;
(statearr_28496_28643[(2)] = null);

(statearr_28496_28643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28495 === (2))){
var state_28494__$1 = state_28494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28494__$1,(4),jobs);
} else {
if((state_val_28495 === (3))){
var inst_28492 = (state_28494[(2)]);
var state_28494__$1 = state_28494;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28494__$1,inst_28492);
} else {
if((state_val_28495 === (4))){
var inst_28484 = (state_28494[(2)]);
var inst_28485 = process.call(null,inst_28484);
var state_28494__$1 = state_28494;
if(cljs.core.truth_(inst_28485)){
var statearr_28497_28644 = state_28494__$1;
(statearr_28497_28644[(1)] = (5));

} else {
var statearr_28498_28645 = state_28494__$1;
(statearr_28498_28645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28495 === (5))){
var state_28494__$1 = state_28494;
var statearr_28499_28646 = state_28494__$1;
(statearr_28499_28646[(2)] = null);

(statearr_28499_28646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28495 === (6))){
var state_28494__$1 = state_28494;
var statearr_28500_28647 = state_28494__$1;
(statearr_28500_28647[(2)] = null);

(statearr_28500_28647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28495 === (7))){
var inst_28490 = (state_28494[(2)]);
var state_28494__$1 = state_28494;
var statearr_28501_28648 = state_28494__$1;
(statearr_28501_28648[(2)] = inst_28490);

(statearr_28501_28648[(1)] = (3));


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
});})(__28638,c__28298__auto___28642,G__28481_28639,G__28481_28640__$1,n__24284__auto___28637,jobs,results,process,async))
;
return ((function (__28638,switch__28208__auto__,c__28298__auto___28642,G__28481_28639,G__28481_28640__$1,n__24284__auto___28637,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28209__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28209__auto____0 = (function (){
var statearr_28502 = [null,null,null,null,null,null,null];
(statearr_28502[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28209__auto__);

(statearr_28502[(1)] = (1));

return statearr_28502;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28209__auto____1 = (function (state_28494){
while(true){
var ret_value__28210__auto__ = (function (){try{while(true){
var result__28211__auto__ = switch__28208__auto__.call(null,state_28494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28211__auto__;
}
break;
}
}catch (e28503){if((e28503 instanceof Object)){
var ex__28212__auto__ = e28503;
var statearr_28504_28649 = state_28494;
(statearr_28504_28649[(5)] = ex__28212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28650 = state_28494;
state_28494 = G__28650;
continue;
} else {
return ret_value__28210__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28209__auto__ = function(state_28494){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28209__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28209__auto____1.call(this,state_28494);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__28209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28209__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28209__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28209__auto__;
})()
;})(__28638,switch__28208__auto__,c__28298__auto___28642,G__28481_28639,G__28481_28640__$1,n__24284__auto___28637,jobs,results,process,async))
})();
var state__28300__auto__ = (function (){var statearr_28505 = f__28299__auto__.call(null);
(statearr_28505[(6)] = c__28298__auto___28642);

return statearr_28505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28300__auto__);
});})(__28638,c__28298__auto___28642,G__28481_28639,G__28481_28640__$1,n__24284__auto___28637,jobs,results,process,async))
);


break;
case "async":
var c__28298__auto___28651 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28638,c__28298__auto___28651,G__28481_28639,G__28481_28640__$1,n__24284__auto___28637,jobs,results,process,async){
return (function (){
var f__28299__auto__ = (function (){var switch__28208__auto__ = ((function (__28638,c__28298__auto___28651,G__28481_28639,G__28481_28640__$1,n__24284__auto___28637,jobs,results,process,async){
return (function (state_28518){
var state_val_28519 = (state_28518[(1)]);
if((state_val_28519 === (1))){
var state_28518__$1 = state_28518;
var statearr_28520_28652 = state_28518__$1;
(statearr_28520_28652[(2)] = null);

(statearr_28520_28652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28519 === (2))){
var state_28518__$1 = state_28518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28518__$1,(4),jobs);
} else {
if((state_val_28519 === (3))){
var inst_28516 = (state_28518[(2)]);
var state_28518__$1 = state_28518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28518__$1,inst_28516);
} else {
if((state_val_28519 === (4))){
var inst_28508 = (state_28518[(2)]);
var inst_28509 = async.call(null,inst_28508);
var state_28518__$1 = state_28518;
if(cljs.core.truth_(inst_28509)){
var statearr_28521_28653 = state_28518__$1;
(statearr_28521_28653[(1)] = (5));

} else {
var statearr_28522_28654 = state_28518__$1;
(statearr_28522_28654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28519 === (5))){
var state_28518__$1 = state_28518;
var statearr_28523_28655 = state_28518__$1;
(statearr_28523_28655[(2)] = null);

(statearr_28523_28655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28519 === (6))){
var state_28518__$1 = state_28518;
var statearr_28524_28656 = state_28518__$1;
(statearr_28524_28656[(2)] = null);

(statearr_28524_28656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28519 === (7))){
var inst_28514 = (state_28518[(2)]);
var state_28518__$1 = state_28518;
var statearr_28525_28657 = state_28518__$1;
(statearr_28525_28657[(2)] = inst_28514);

(statearr_28525_28657[(1)] = (3));


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
});})(__28638,c__28298__auto___28651,G__28481_28639,G__28481_28640__$1,n__24284__auto___28637,jobs,results,process,async))
;
return ((function (__28638,switch__28208__auto__,c__28298__auto___28651,G__28481_28639,G__28481_28640__$1,n__24284__auto___28637,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28209__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28209__auto____0 = (function (){
var statearr_28526 = [null,null,null,null,null,null,null];
(statearr_28526[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28209__auto__);

(statearr_28526[(1)] = (1));

return statearr_28526;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28209__auto____1 = (function (state_28518){
while(true){
var ret_value__28210__auto__ = (function (){try{while(true){
var result__28211__auto__ = switch__28208__auto__.call(null,state_28518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28211__auto__;
}
break;
}
}catch (e28527){if((e28527 instanceof Object)){
var ex__28212__auto__ = e28527;
var statearr_28528_28658 = state_28518;
(statearr_28528_28658[(5)] = ex__28212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28659 = state_28518;
state_28518 = G__28659;
continue;
} else {
return ret_value__28210__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28209__auto__ = function(state_28518){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28209__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28209__auto____1.call(this,state_28518);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__28209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28209__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28209__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28209__auto__;
})()
;})(__28638,switch__28208__auto__,c__28298__auto___28651,G__28481_28639,G__28481_28640__$1,n__24284__auto___28637,jobs,results,process,async))
})();
var state__28300__auto__ = (function (){var statearr_28529 = f__28299__auto__.call(null);
(statearr_28529[(6)] = c__28298__auto___28651);

return statearr_28529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28300__auto__);
});})(__28638,c__28298__auto___28651,G__28481_28639,G__28481_28640__$1,n__24284__auto___28637,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28481_28640__$1)].join('')));

}

var G__28660 = (__28638 + (1));
__28638 = G__28660;
continue;
} else {
}
break;
}

var c__28298__auto___28661 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28298__auto___28661,jobs,results,process,async){
return (function (){
var f__28299__auto__ = (function (){var switch__28208__auto__ = ((function (c__28298__auto___28661,jobs,results,process,async){
return (function (state_28551){
var state_val_28552 = (state_28551[(1)]);
if((state_val_28552 === (1))){
var state_28551__$1 = state_28551;
var statearr_28553_28662 = state_28551__$1;
(statearr_28553_28662[(2)] = null);

(statearr_28553_28662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28552 === (2))){
var state_28551__$1 = state_28551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28551__$1,(4),from);
} else {
if((state_val_28552 === (3))){
var inst_28549 = (state_28551[(2)]);
var state_28551__$1 = state_28551;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28551__$1,inst_28549);
} else {
if((state_val_28552 === (4))){
var inst_28532 = (state_28551[(7)]);
var inst_28532__$1 = (state_28551[(2)]);
var inst_28533 = (inst_28532__$1 == null);
var state_28551__$1 = (function (){var statearr_28554 = state_28551;
(statearr_28554[(7)] = inst_28532__$1);

return statearr_28554;
})();
if(cljs.core.truth_(inst_28533)){
var statearr_28555_28663 = state_28551__$1;
(statearr_28555_28663[(1)] = (5));

} else {
var statearr_28556_28664 = state_28551__$1;
(statearr_28556_28664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28552 === (5))){
var inst_28535 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28551__$1 = state_28551;
var statearr_28557_28665 = state_28551__$1;
(statearr_28557_28665[(2)] = inst_28535);

(statearr_28557_28665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28552 === (6))){
var inst_28532 = (state_28551[(7)]);
var inst_28537 = (state_28551[(8)]);
var inst_28537__$1 = cljs.core.async.chan.call(null,(1));
var inst_28538 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28539 = [inst_28532,inst_28537__$1];
var inst_28540 = (new cljs.core.PersistentVector(null,2,(5),inst_28538,inst_28539,null));
var state_28551__$1 = (function (){var statearr_28558 = state_28551;
(statearr_28558[(8)] = inst_28537__$1);

return statearr_28558;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28551__$1,(8),jobs,inst_28540);
} else {
if((state_val_28552 === (7))){
var inst_28547 = (state_28551[(2)]);
var state_28551__$1 = state_28551;
var statearr_28559_28666 = state_28551__$1;
(statearr_28559_28666[(2)] = inst_28547);

(statearr_28559_28666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28552 === (8))){
var inst_28537 = (state_28551[(8)]);
var inst_28542 = (state_28551[(2)]);
var state_28551__$1 = (function (){var statearr_28560 = state_28551;
(statearr_28560[(9)] = inst_28542);

return statearr_28560;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28551__$1,(9),results,inst_28537);
} else {
if((state_val_28552 === (9))){
var inst_28544 = (state_28551[(2)]);
var state_28551__$1 = (function (){var statearr_28561 = state_28551;
(statearr_28561[(10)] = inst_28544);

return statearr_28561;
})();
var statearr_28562_28667 = state_28551__$1;
(statearr_28562_28667[(2)] = null);

(statearr_28562_28667[(1)] = (2));


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
});})(c__28298__auto___28661,jobs,results,process,async))
;
return ((function (switch__28208__auto__,c__28298__auto___28661,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28209__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28209__auto____0 = (function (){
var statearr_28563 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28563[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28209__auto__);

(statearr_28563[(1)] = (1));

return statearr_28563;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28209__auto____1 = (function (state_28551){
while(true){
var ret_value__28210__auto__ = (function (){try{while(true){
var result__28211__auto__ = switch__28208__auto__.call(null,state_28551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28211__auto__;
}
break;
}
}catch (e28564){if((e28564 instanceof Object)){
var ex__28212__auto__ = e28564;
var statearr_28565_28668 = state_28551;
(statearr_28565_28668[(5)] = ex__28212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28669 = state_28551;
state_28551 = G__28669;
continue;
} else {
return ret_value__28210__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28209__auto__ = function(state_28551){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28209__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28209__auto____1.call(this,state_28551);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__28209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28209__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28209__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28209__auto__;
})()
;})(switch__28208__auto__,c__28298__auto___28661,jobs,results,process,async))
})();
var state__28300__auto__ = (function (){var statearr_28566 = f__28299__auto__.call(null);
(statearr_28566[(6)] = c__28298__auto___28661);

return statearr_28566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28300__auto__);
});})(c__28298__auto___28661,jobs,results,process,async))
);


var c__28298__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28298__auto__,jobs,results,process,async){
return (function (){
var f__28299__auto__ = (function (){var switch__28208__auto__ = ((function (c__28298__auto__,jobs,results,process,async){
return (function (state_28604){
var state_val_28605 = (state_28604[(1)]);
if((state_val_28605 === (7))){
var inst_28600 = (state_28604[(2)]);
var state_28604__$1 = state_28604;
var statearr_28606_28670 = state_28604__$1;
(statearr_28606_28670[(2)] = inst_28600);

(statearr_28606_28670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (20))){
var state_28604__$1 = state_28604;
var statearr_28607_28671 = state_28604__$1;
(statearr_28607_28671[(2)] = null);

(statearr_28607_28671[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (1))){
var state_28604__$1 = state_28604;
var statearr_28608_28672 = state_28604__$1;
(statearr_28608_28672[(2)] = null);

(statearr_28608_28672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (4))){
var inst_28569 = (state_28604[(7)]);
var inst_28569__$1 = (state_28604[(2)]);
var inst_28570 = (inst_28569__$1 == null);
var state_28604__$1 = (function (){var statearr_28609 = state_28604;
(statearr_28609[(7)] = inst_28569__$1);

return statearr_28609;
})();
if(cljs.core.truth_(inst_28570)){
var statearr_28610_28673 = state_28604__$1;
(statearr_28610_28673[(1)] = (5));

} else {
var statearr_28611_28674 = state_28604__$1;
(statearr_28611_28674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (15))){
var inst_28582 = (state_28604[(8)]);
var state_28604__$1 = state_28604;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28604__$1,(18),to,inst_28582);
} else {
if((state_val_28605 === (21))){
var inst_28595 = (state_28604[(2)]);
var state_28604__$1 = state_28604;
var statearr_28612_28675 = state_28604__$1;
(statearr_28612_28675[(2)] = inst_28595);

(statearr_28612_28675[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (13))){
var inst_28597 = (state_28604[(2)]);
var state_28604__$1 = (function (){var statearr_28613 = state_28604;
(statearr_28613[(9)] = inst_28597);

return statearr_28613;
})();
var statearr_28614_28676 = state_28604__$1;
(statearr_28614_28676[(2)] = null);

(statearr_28614_28676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (6))){
var inst_28569 = (state_28604[(7)]);
var state_28604__$1 = state_28604;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28604__$1,(11),inst_28569);
} else {
if((state_val_28605 === (17))){
var inst_28590 = (state_28604[(2)]);
var state_28604__$1 = state_28604;
if(cljs.core.truth_(inst_28590)){
var statearr_28615_28677 = state_28604__$1;
(statearr_28615_28677[(1)] = (19));

} else {
var statearr_28616_28678 = state_28604__$1;
(statearr_28616_28678[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (3))){
var inst_28602 = (state_28604[(2)]);
var state_28604__$1 = state_28604;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28604__$1,inst_28602);
} else {
if((state_val_28605 === (12))){
var inst_28579 = (state_28604[(10)]);
var state_28604__$1 = state_28604;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28604__$1,(14),inst_28579);
} else {
if((state_val_28605 === (2))){
var state_28604__$1 = state_28604;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28604__$1,(4),results);
} else {
if((state_val_28605 === (19))){
var state_28604__$1 = state_28604;
var statearr_28617_28679 = state_28604__$1;
(statearr_28617_28679[(2)] = null);

(statearr_28617_28679[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (11))){
var inst_28579 = (state_28604[(2)]);
var state_28604__$1 = (function (){var statearr_28618 = state_28604;
(statearr_28618[(10)] = inst_28579);

return statearr_28618;
})();
var statearr_28619_28680 = state_28604__$1;
(statearr_28619_28680[(2)] = null);

(statearr_28619_28680[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (9))){
var state_28604__$1 = state_28604;
var statearr_28620_28681 = state_28604__$1;
(statearr_28620_28681[(2)] = null);

(statearr_28620_28681[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (5))){
var state_28604__$1 = state_28604;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28621_28682 = state_28604__$1;
(statearr_28621_28682[(1)] = (8));

} else {
var statearr_28622_28683 = state_28604__$1;
(statearr_28622_28683[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (14))){
var inst_28582 = (state_28604[(8)]);
var inst_28584 = (state_28604[(11)]);
var inst_28582__$1 = (state_28604[(2)]);
var inst_28583 = (inst_28582__$1 == null);
var inst_28584__$1 = cljs.core.not.call(null,inst_28583);
var state_28604__$1 = (function (){var statearr_28623 = state_28604;
(statearr_28623[(8)] = inst_28582__$1);

(statearr_28623[(11)] = inst_28584__$1);

return statearr_28623;
})();
if(inst_28584__$1){
var statearr_28624_28684 = state_28604__$1;
(statearr_28624_28684[(1)] = (15));

} else {
var statearr_28625_28685 = state_28604__$1;
(statearr_28625_28685[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (16))){
var inst_28584 = (state_28604[(11)]);
var state_28604__$1 = state_28604;
var statearr_28626_28686 = state_28604__$1;
(statearr_28626_28686[(2)] = inst_28584);

(statearr_28626_28686[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (10))){
var inst_28576 = (state_28604[(2)]);
var state_28604__$1 = state_28604;
var statearr_28627_28687 = state_28604__$1;
(statearr_28627_28687[(2)] = inst_28576);

(statearr_28627_28687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (18))){
var inst_28587 = (state_28604[(2)]);
var state_28604__$1 = state_28604;
var statearr_28628_28688 = state_28604__$1;
(statearr_28628_28688[(2)] = inst_28587);

(statearr_28628_28688[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (8))){
var inst_28573 = cljs.core.async.close_BANG_.call(null,to);
var state_28604__$1 = state_28604;
var statearr_28629_28689 = state_28604__$1;
(statearr_28629_28689[(2)] = inst_28573);

(statearr_28629_28689[(1)] = (10));


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
});})(c__28298__auto__,jobs,results,process,async))
;
return ((function (switch__28208__auto__,c__28298__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28209__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28209__auto____0 = (function (){
var statearr_28630 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28630[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28209__auto__);

(statearr_28630[(1)] = (1));

return statearr_28630;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28209__auto____1 = (function (state_28604){
while(true){
var ret_value__28210__auto__ = (function (){try{while(true){
var result__28211__auto__ = switch__28208__auto__.call(null,state_28604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28211__auto__;
}
break;
}
}catch (e28631){if((e28631 instanceof Object)){
var ex__28212__auto__ = e28631;
var statearr_28632_28690 = state_28604;
(statearr_28632_28690[(5)] = ex__28212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28691 = state_28604;
state_28604 = G__28691;
continue;
} else {
return ret_value__28210__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28209__auto__ = function(state_28604){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28209__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28209__auto____1.call(this,state_28604);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__28209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28209__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28209__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28209__auto__;
})()
;})(switch__28208__auto__,c__28298__auto__,jobs,results,process,async))
})();
var state__28300__auto__ = (function (){var statearr_28633 = f__28299__auto__.call(null);
(statearr_28633[(6)] = c__28298__auto__);

return statearr_28633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28300__auto__);
});})(c__28298__auto__,jobs,results,process,async))
);

return c__28298__auto__;
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
var G__28693 = arguments.length;
switch (G__28693) {
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
var G__28696 = arguments.length;
switch (G__28696) {
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
var G__28699 = arguments.length;
switch (G__28699) {
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
var c__28298__auto___28748 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28298__auto___28748,tc,fc){
return (function (){
var f__28299__auto__ = (function (){var switch__28208__auto__ = ((function (c__28298__auto___28748,tc,fc){
return (function (state_28725){
var state_val_28726 = (state_28725[(1)]);
if((state_val_28726 === (7))){
var inst_28721 = (state_28725[(2)]);
var state_28725__$1 = state_28725;
var statearr_28727_28749 = state_28725__$1;
(statearr_28727_28749[(2)] = inst_28721);

(statearr_28727_28749[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (1))){
var state_28725__$1 = state_28725;
var statearr_28728_28750 = state_28725__$1;
(statearr_28728_28750[(2)] = null);

(statearr_28728_28750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (4))){
var inst_28702 = (state_28725[(7)]);
var inst_28702__$1 = (state_28725[(2)]);
var inst_28703 = (inst_28702__$1 == null);
var state_28725__$1 = (function (){var statearr_28729 = state_28725;
(statearr_28729[(7)] = inst_28702__$1);

return statearr_28729;
})();
if(cljs.core.truth_(inst_28703)){
var statearr_28730_28751 = state_28725__$1;
(statearr_28730_28751[(1)] = (5));

} else {
var statearr_28731_28752 = state_28725__$1;
(statearr_28731_28752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (13))){
var state_28725__$1 = state_28725;
var statearr_28732_28753 = state_28725__$1;
(statearr_28732_28753[(2)] = null);

(statearr_28732_28753[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (6))){
var inst_28702 = (state_28725[(7)]);
var inst_28708 = p.call(null,inst_28702);
var state_28725__$1 = state_28725;
if(cljs.core.truth_(inst_28708)){
var statearr_28733_28754 = state_28725__$1;
(statearr_28733_28754[(1)] = (9));

} else {
var statearr_28734_28755 = state_28725__$1;
(statearr_28734_28755[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (3))){
var inst_28723 = (state_28725[(2)]);
var state_28725__$1 = state_28725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28725__$1,inst_28723);
} else {
if((state_val_28726 === (12))){
var state_28725__$1 = state_28725;
var statearr_28735_28756 = state_28725__$1;
(statearr_28735_28756[(2)] = null);

(statearr_28735_28756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (2))){
var state_28725__$1 = state_28725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28725__$1,(4),ch);
} else {
if((state_val_28726 === (11))){
var inst_28702 = (state_28725[(7)]);
var inst_28712 = (state_28725[(2)]);
var state_28725__$1 = state_28725;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28725__$1,(8),inst_28712,inst_28702);
} else {
if((state_val_28726 === (9))){
var state_28725__$1 = state_28725;
var statearr_28736_28757 = state_28725__$1;
(statearr_28736_28757[(2)] = tc);

(statearr_28736_28757[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (5))){
var inst_28705 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28706 = cljs.core.async.close_BANG_.call(null,fc);
var state_28725__$1 = (function (){var statearr_28737 = state_28725;
(statearr_28737[(8)] = inst_28705);

return statearr_28737;
})();
var statearr_28738_28758 = state_28725__$1;
(statearr_28738_28758[(2)] = inst_28706);

(statearr_28738_28758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (14))){
var inst_28719 = (state_28725[(2)]);
var state_28725__$1 = state_28725;
var statearr_28739_28759 = state_28725__$1;
(statearr_28739_28759[(2)] = inst_28719);

(statearr_28739_28759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (10))){
var state_28725__$1 = state_28725;
var statearr_28740_28760 = state_28725__$1;
(statearr_28740_28760[(2)] = fc);

(statearr_28740_28760[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (8))){
var inst_28714 = (state_28725[(2)]);
var state_28725__$1 = state_28725;
if(cljs.core.truth_(inst_28714)){
var statearr_28741_28761 = state_28725__$1;
(statearr_28741_28761[(1)] = (12));

} else {
var statearr_28742_28762 = state_28725__$1;
(statearr_28742_28762[(1)] = (13));

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
});})(c__28298__auto___28748,tc,fc))
;
return ((function (switch__28208__auto__,c__28298__auto___28748,tc,fc){
return (function() {
var cljs$core$async$state_machine__28209__auto__ = null;
var cljs$core$async$state_machine__28209__auto____0 = (function (){
var statearr_28743 = [null,null,null,null,null,null,null,null,null];
(statearr_28743[(0)] = cljs$core$async$state_machine__28209__auto__);

(statearr_28743[(1)] = (1));

return statearr_28743;
});
var cljs$core$async$state_machine__28209__auto____1 = (function (state_28725){
while(true){
var ret_value__28210__auto__ = (function (){try{while(true){
var result__28211__auto__ = switch__28208__auto__.call(null,state_28725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28211__auto__;
}
break;
}
}catch (e28744){if((e28744 instanceof Object)){
var ex__28212__auto__ = e28744;
var statearr_28745_28763 = state_28725;
(statearr_28745_28763[(5)] = ex__28212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28764 = state_28725;
state_28725 = G__28764;
continue;
} else {
return ret_value__28210__auto__;
}
break;
}
});
cljs$core$async$state_machine__28209__auto__ = function(state_28725){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28209__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28209__auto____1.call(this,state_28725);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28209__auto____0;
cljs$core$async$state_machine__28209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28209__auto____1;
return cljs$core$async$state_machine__28209__auto__;
})()
;})(switch__28208__auto__,c__28298__auto___28748,tc,fc))
})();
var state__28300__auto__ = (function (){var statearr_28746 = f__28299__auto__.call(null);
(statearr_28746[(6)] = c__28298__auto___28748);

return statearr_28746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28300__auto__);
});})(c__28298__auto___28748,tc,fc))
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
var c__28298__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28298__auto__){
return (function (){
var f__28299__auto__ = (function (){var switch__28208__auto__ = ((function (c__28298__auto__){
return (function (state_28785){
var state_val_28786 = (state_28785[(1)]);
if((state_val_28786 === (7))){
var inst_28781 = (state_28785[(2)]);
var state_28785__$1 = state_28785;
var statearr_28787_28805 = state_28785__$1;
(statearr_28787_28805[(2)] = inst_28781);

(statearr_28787_28805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (1))){
var inst_28765 = init;
var state_28785__$1 = (function (){var statearr_28788 = state_28785;
(statearr_28788[(7)] = inst_28765);

return statearr_28788;
})();
var statearr_28789_28806 = state_28785__$1;
(statearr_28789_28806[(2)] = null);

(statearr_28789_28806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (4))){
var inst_28768 = (state_28785[(8)]);
var inst_28768__$1 = (state_28785[(2)]);
var inst_28769 = (inst_28768__$1 == null);
var state_28785__$1 = (function (){var statearr_28790 = state_28785;
(statearr_28790[(8)] = inst_28768__$1);

return statearr_28790;
})();
if(cljs.core.truth_(inst_28769)){
var statearr_28791_28807 = state_28785__$1;
(statearr_28791_28807[(1)] = (5));

} else {
var statearr_28792_28808 = state_28785__$1;
(statearr_28792_28808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (6))){
var inst_28765 = (state_28785[(7)]);
var inst_28768 = (state_28785[(8)]);
var inst_28772 = (state_28785[(9)]);
var inst_28772__$1 = f.call(null,inst_28765,inst_28768);
var inst_28773 = cljs.core.reduced_QMARK_.call(null,inst_28772__$1);
var state_28785__$1 = (function (){var statearr_28793 = state_28785;
(statearr_28793[(9)] = inst_28772__$1);

return statearr_28793;
})();
if(inst_28773){
var statearr_28794_28809 = state_28785__$1;
(statearr_28794_28809[(1)] = (8));

} else {
var statearr_28795_28810 = state_28785__$1;
(statearr_28795_28810[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (3))){
var inst_28783 = (state_28785[(2)]);
var state_28785__$1 = state_28785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28785__$1,inst_28783);
} else {
if((state_val_28786 === (2))){
var state_28785__$1 = state_28785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28785__$1,(4),ch);
} else {
if((state_val_28786 === (9))){
var inst_28772 = (state_28785[(9)]);
var inst_28765 = inst_28772;
var state_28785__$1 = (function (){var statearr_28796 = state_28785;
(statearr_28796[(7)] = inst_28765);

return statearr_28796;
})();
var statearr_28797_28811 = state_28785__$1;
(statearr_28797_28811[(2)] = null);

(statearr_28797_28811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (5))){
var inst_28765 = (state_28785[(7)]);
var state_28785__$1 = state_28785;
var statearr_28798_28812 = state_28785__$1;
(statearr_28798_28812[(2)] = inst_28765);

(statearr_28798_28812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (10))){
var inst_28779 = (state_28785[(2)]);
var state_28785__$1 = state_28785;
var statearr_28799_28813 = state_28785__$1;
(statearr_28799_28813[(2)] = inst_28779);

(statearr_28799_28813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (8))){
var inst_28772 = (state_28785[(9)]);
var inst_28775 = cljs.core.deref.call(null,inst_28772);
var state_28785__$1 = state_28785;
var statearr_28800_28814 = state_28785__$1;
(statearr_28800_28814[(2)] = inst_28775);

(statearr_28800_28814[(1)] = (10));


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
});})(c__28298__auto__))
;
return ((function (switch__28208__auto__,c__28298__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28209__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28209__auto____0 = (function (){
var statearr_28801 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28801[(0)] = cljs$core$async$reduce_$_state_machine__28209__auto__);

(statearr_28801[(1)] = (1));

return statearr_28801;
});
var cljs$core$async$reduce_$_state_machine__28209__auto____1 = (function (state_28785){
while(true){
var ret_value__28210__auto__ = (function (){try{while(true){
var result__28211__auto__ = switch__28208__auto__.call(null,state_28785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28211__auto__;
}
break;
}
}catch (e28802){if((e28802 instanceof Object)){
var ex__28212__auto__ = e28802;
var statearr_28803_28815 = state_28785;
(statearr_28803_28815[(5)] = ex__28212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28816 = state_28785;
state_28785 = G__28816;
continue;
} else {
return ret_value__28210__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28209__auto__ = function(state_28785){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28209__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28209__auto____1.call(this,state_28785);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__28209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28209__auto____0;
cljs$core$async$reduce_$_state_machine__28209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28209__auto____1;
return cljs$core$async$reduce_$_state_machine__28209__auto__;
})()
;})(switch__28208__auto__,c__28298__auto__))
})();
var state__28300__auto__ = (function (){var statearr_28804 = f__28299__auto__.call(null);
(statearr_28804[(6)] = c__28298__auto__);

return statearr_28804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28300__auto__);
});})(c__28298__auto__))
);

return c__28298__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__28298__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28298__auto__,f__$1){
return (function (){
var f__28299__auto__ = (function (){var switch__28208__auto__ = ((function (c__28298__auto__,f__$1){
return (function (state_28822){
var state_val_28823 = (state_28822[(1)]);
if((state_val_28823 === (1))){
var inst_28817 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_28822__$1 = state_28822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28822__$1,(2),inst_28817);
} else {
if((state_val_28823 === (2))){
var inst_28819 = (state_28822[(2)]);
var inst_28820 = f__$1.call(null,inst_28819);
var state_28822__$1 = state_28822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28822__$1,inst_28820);
} else {
return null;
}
}
});})(c__28298__auto__,f__$1))
;
return ((function (switch__28208__auto__,c__28298__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__28209__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28209__auto____0 = (function (){
var statearr_28824 = [null,null,null,null,null,null,null];
(statearr_28824[(0)] = cljs$core$async$transduce_$_state_machine__28209__auto__);

(statearr_28824[(1)] = (1));

return statearr_28824;
});
var cljs$core$async$transduce_$_state_machine__28209__auto____1 = (function (state_28822){
while(true){
var ret_value__28210__auto__ = (function (){try{while(true){
var result__28211__auto__ = switch__28208__auto__.call(null,state_28822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28211__auto__;
}
break;
}
}catch (e28825){if((e28825 instanceof Object)){
var ex__28212__auto__ = e28825;
var statearr_28826_28828 = state_28822;
(statearr_28826_28828[(5)] = ex__28212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28829 = state_28822;
state_28822 = G__28829;
continue;
} else {
return ret_value__28210__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28209__auto__ = function(state_28822){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28209__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28209__auto____1.call(this,state_28822);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__28209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28209__auto____0;
cljs$core$async$transduce_$_state_machine__28209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28209__auto____1;
return cljs$core$async$transduce_$_state_machine__28209__auto__;
})()
;})(switch__28208__auto__,c__28298__auto__,f__$1))
})();
var state__28300__auto__ = (function (){var statearr_28827 = f__28299__auto__.call(null);
(statearr_28827[(6)] = c__28298__auto__);

return statearr_28827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28300__auto__);
});})(c__28298__auto__,f__$1))
);

return c__28298__auto__;
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
var G__28831 = arguments.length;
switch (G__28831) {
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
var c__28298__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28298__auto__){
return (function (){
var f__28299__auto__ = (function (){var switch__28208__auto__ = ((function (c__28298__auto__){
return (function (state_28856){
var state_val_28857 = (state_28856[(1)]);
if((state_val_28857 === (7))){
var inst_28838 = (state_28856[(2)]);
var state_28856__$1 = state_28856;
var statearr_28858_28879 = state_28856__$1;
(statearr_28858_28879[(2)] = inst_28838);

(statearr_28858_28879[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28857 === (1))){
var inst_28832 = cljs.core.seq.call(null,coll);
var inst_28833 = inst_28832;
var state_28856__$1 = (function (){var statearr_28859 = state_28856;
(statearr_28859[(7)] = inst_28833);

return statearr_28859;
})();
var statearr_28860_28880 = state_28856__$1;
(statearr_28860_28880[(2)] = null);

(statearr_28860_28880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28857 === (4))){
var inst_28833 = (state_28856[(7)]);
var inst_28836 = cljs.core.first.call(null,inst_28833);
var state_28856__$1 = state_28856;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28856__$1,(7),ch,inst_28836);
} else {
if((state_val_28857 === (13))){
var inst_28850 = (state_28856[(2)]);
var state_28856__$1 = state_28856;
var statearr_28861_28881 = state_28856__$1;
(statearr_28861_28881[(2)] = inst_28850);

(statearr_28861_28881[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28857 === (6))){
var inst_28841 = (state_28856[(2)]);
var state_28856__$1 = state_28856;
if(cljs.core.truth_(inst_28841)){
var statearr_28862_28882 = state_28856__$1;
(statearr_28862_28882[(1)] = (8));

} else {
var statearr_28863_28883 = state_28856__$1;
(statearr_28863_28883[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28857 === (3))){
var inst_28854 = (state_28856[(2)]);
var state_28856__$1 = state_28856;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28856__$1,inst_28854);
} else {
if((state_val_28857 === (12))){
var state_28856__$1 = state_28856;
var statearr_28864_28884 = state_28856__$1;
(statearr_28864_28884[(2)] = null);

(statearr_28864_28884[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28857 === (2))){
var inst_28833 = (state_28856[(7)]);
var state_28856__$1 = state_28856;
if(cljs.core.truth_(inst_28833)){
var statearr_28865_28885 = state_28856__$1;
(statearr_28865_28885[(1)] = (4));

} else {
var statearr_28866_28886 = state_28856__$1;
(statearr_28866_28886[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28857 === (11))){
var inst_28847 = cljs.core.async.close_BANG_.call(null,ch);
var state_28856__$1 = state_28856;
var statearr_28867_28887 = state_28856__$1;
(statearr_28867_28887[(2)] = inst_28847);

(statearr_28867_28887[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28857 === (9))){
var state_28856__$1 = state_28856;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28868_28888 = state_28856__$1;
(statearr_28868_28888[(1)] = (11));

} else {
var statearr_28869_28889 = state_28856__$1;
(statearr_28869_28889[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28857 === (5))){
var inst_28833 = (state_28856[(7)]);
var state_28856__$1 = state_28856;
var statearr_28870_28890 = state_28856__$1;
(statearr_28870_28890[(2)] = inst_28833);

(statearr_28870_28890[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28857 === (10))){
var inst_28852 = (state_28856[(2)]);
var state_28856__$1 = state_28856;
var statearr_28871_28891 = state_28856__$1;
(statearr_28871_28891[(2)] = inst_28852);

(statearr_28871_28891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28857 === (8))){
var inst_28833 = (state_28856[(7)]);
var inst_28843 = cljs.core.next.call(null,inst_28833);
var inst_28833__$1 = inst_28843;
var state_28856__$1 = (function (){var statearr_28872 = state_28856;
(statearr_28872[(7)] = inst_28833__$1);

return statearr_28872;
})();
var statearr_28873_28892 = state_28856__$1;
(statearr_28873_28892[(2)] = null);

(statearr_28873_28892[(1)] = (2));


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
});})(c__28298__auto__))
;
return ((function (switch__28208__auto__,c__28298__auto__){
return (function() {
var cljs$core$async$state_machine__28209__auto__ = null;
var cljs$core$async$state_machine__28209__auto____0 = (function (){
var statearr_28874 = [null,null,null,null,null,null,null,null];
(statearr_28874[(0)] = cljs$core$async$state_machine__28209__auto__);

(statearr_28874[(1)] = (1));

return statearr_28874;
});
var cljs$core$async$state_machine__28209__auto____1 = (function (state_28856){
while(true){
var ret_value__28210__auto__ = (function (){try{while(true){
var result__28211__auto__ = switch__28208__auto__.call(null,state_28856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28211__auto__;
}
break;
}
}catch (e28875){if((e28875 instanceof Object)){
var ex__28212__auto__ = e28875;
var statearr_28876_28893 = state_28856;
(statearr_28876_28893[(5)] = ex__28212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28894 = state_28856;
state_28856 = G__28894;
continue;
} else {
return ret_value__28210__auto__;
}
break;
}
});
cljs$core$async$state_machine__28209__auto__ = function(state_28856){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28209__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28209__auto____1.call(this,state_28856);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28209__auto____0;
cljs$core$async$state_machine__28209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28209__auto____1;
return cljs$core$async$state_machine__28209__auto__;
})()
;})(switch__28208__auto__,c__28298__auto__))
})();
var state__28300__auto__ = (function (){var statearr_28877 = f__28299__auto__.call(null);
(statearr_28877[(6)] = c__28298__auto__);

return statearr_28877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28300__auto__);
});})(c__28298__auto__))
);

return c__28298__auto__;
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
var x__23972__auto__ = (((_ == null))?null:_);
var m__23973__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__23972__auto__)]);
if(!((m__23973__auto__ == null))){
return m__23973__auto__.call(null,_);
} else {
var m__23973__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__23973__auto____$1 == null))){
return m__23973__auto____$1.call(null,_);
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
var x__23972__auto__ = (((m == null))?null:m);
var m__23973__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__23972__auto__)]);
if(!((m__23973__auto__ == null))){
return m__23973__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__23973__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__23973__auto____$1 == null))){
return m__23973__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__23972__auto__ = (((m == null))?null:m);
var m__23973__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__23972__auto__)]);
if(!((m__23973__auto__ == null))){
return m__23973__auto__.call(null,m,ch);
} else {
var m__23973__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__23973__auto____$1 == null))){
return m__23973__auto____$1.call(null,m,ch);
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
var x__23972__auto__ = (((m == null))?null:m);
var m__23973__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__23972__auto__)]);
if(!((m__23973__auto__ == null))){
return m__23973__auto__.call(null,m);
} else {
var m__23973__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__23973__auto____$1 == null))){
return m__23973__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async28895 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28895 = (function (ch,cs,meta28896){
this.ch = ch;
this.cs = cs;
this.meta28896 = meta28896;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28895.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28897,meta28896__$1){
var self__ = this;
var _28897__$1 = this;
return (new cljs.core.async.t_cljs$core$async28895(self__.ch,self__.cs,meta28896__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28895.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28897){
var self__ = this;
var _28897__$1 = this;
return self__.meta28896;
});})(cs))
;

cljs.core.async.t_cljs$core$async28895.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28895.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28895.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28895.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28895.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28895.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28895.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28896","meta28896",-856168570,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28895.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28895.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28895";

cljs.core.async.t_cljs$core$async28895.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__23910__auto__,writer__23911__auto__,opt__23912__auto__){
return cljs.core._write.call(null,writer__23911__auto__,"cljs.core.async/t_cljs$core$async28895");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28895 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28895(ch__$1,cs__$1,meta28896){
return (new cljs.core.async.t_cljs$core$async28895(ch__$1,cs__$1,meta28896));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28895(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28298__auto___29117 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28298__auto___29117,cs,m,dchan,dctr,done){
return (function (){
var f__28299__auto__ = (function (){var switch__28208__auto__ = ((function (c__28298__auto___29117,cs,m,dchan,dctr,done){
return (function (state_29032){
var state_val_29033 = (state_29032[(1)]);
if((state_val_29033 === (7))){
var inst_29028 = (state_29032[(2)]);
var state_29032__$1 = state_29032;
var statearr_29034_29118 = state_29032__$1;
(statearr_29034_29118[(2)] = inst_29028);

(statearr_29034_29118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29033 === (20))){
var inst_28931 = (state_29032[(7)]);
var inst_28943 = cljs.core.first.call(null,inst_28931);
var inst_28944 = cljs.core.nth.call(null,inst_28943,(0),null);
var inst_28945 = cljs.core.nth.call(null,inst_28943,(1),null);
var state_29032__$1 = (function (){var statearr_29035 = state_29032;
(statearr_29035[(8)] = inst_28944);

return statearr_29035;
})();
if(cljs.core.truth_(inst_28945)){
var statearr_29036_29119 = state_29032__$1;
(statearr_29036_29119[(1)] = (22));

} else {
var statearr_29037_29120 = state_29032__$1;
(statearr_29037_29120[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29033 === (27))){
var inst_28973 = (state_29032[(9)]);
var inst_28900 = (state_29032[(10)]);
var inst_28975 = (state_29032[(11)]);
var inst_28980 = (state_29032[(12)]);
var inst_28980__$1 = cljs.core._nth.call(null,inst_28973,inst_28975);
var inst_28981 = cljs.core.async.put_BANG_.call(null,inst_28980__$1,inst_28900,done);
var state_29032__$1 = (function (){var statearr_29038 = state_29032;
(statearr_29038[(12)] = inst_28980__$1);

return statearr_29038;
})();
if(cljs.core.truth_(inst_28981)){
var statearr_29039_29121 = state_29032__$1;
(statearr_29039_29121[(1)] = (30));

} else {
var statearr_29040_29122 = state_29032__$1;
(statearr_29040_29122[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29033 === (1))){
var state_29032__$1 = state_29032;
var statearr_29041_29123 = state_29032__$1;
(statearr_29041_29123[(2)] = null);

(statearr_29041_29123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29033 === (24))){
var inst_28931 = (state_29032[(7)]);
var inst_28950 = (state_29032[(2)]);
var inst_28951 = cljs.core.next.call(null,inst_28931);
var inst_28909 = inst_28951;
var inst_28910 = null;
var inst_28911 = (0);
var inst_28912 = (0);
var state_29032__$1 = (function (){var statearr_29042 = state_29032;
(statearr_29042[(13)] = inst_28911);

(statearr_29042[(14)] = inst_28912);

(statearr_29042[(15)] = inst_28950);

(statearr_29042[(16)] = inst_28910);

(statearr_29042[(17)] = inst_28909);

return statearr_29042;
})();
var statearr_29043_29124 = state_29032__$1;
(statearr_29043_29124[(2)] = null);

(statearr_29043_29124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29033 === (39))){
var state_29032__$1 = state_29032;
var statearr_29047_29125 = state_29032__$1;
(statearr_29047_29125[(2)] = null);

(statearr_29047_29125[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29033 === (4))){
var inst_28900 = (state_29032[(10)]);
var inst_28900__$1 = (state_29032[(2)]);
var inst_28901 = (inst_28900__$1 == null);
var state_29032__$1 = (function (){var statearr_29048 = state_29032;
(statearr_29048[(10)] = inst_28900__$1);

return statearr_29048;
})();
if(cljs.core.truth_(inst_28901)){
var statearr_29049_29126 = state_29032__$1;
(statearr_29049_29126[(1)] = (5));

} else {
var statearr_29050_29127 = state_29032__$1;
(statearr_29050_29127[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29033 === (15))){
var inst_28911 = (state_29032[(13)]);
var inst_28912 = (state_29032[(14)]);
var inst_28910 = (state_29032[(16)]);
var inst_28909 = (state_29032[(17)]);
var inst_28927 = (state_29032[(2)]);
var inst_28928 = (inst_28912 + (1));
var tmp29044 = inst_28911;
var tmp29045 = inst_28910;
var tmp29046 = inst_28909;
var inst_28909__$1 = tmp29046;
var inst_28910__$1 = tmp29045;
var inst_28911__$1 = tmp29044;
var inst_28912__$1 = inst_28928;
var state_29032__$1 = (function (){var statearr_29051 = state_29032;
(statearr_29051[(13)] = inst_28911__$1);

(statearr_29051[(14)] = inst_28912__$1);

(statearr_29051[(18)] = inst_28927);

(statearr_29051[(16)] = inst_28910__$1);

(statearr_29051[(17)] = inst_28909__$1);

return statearr_29051;
})();
var statearr_29052_29128 = state_29032__$1;
(statearr_29052_29128[(2)] = null);

(statearr_29052_29128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29033 === (21))){
var inst_28954 = (state_29032[(2)]);
var state_29032__$1 = state_29032;
var statearr_29056_29129 = state_29032__$1;
(statearr_29056_29129[(2)] = inst_28954);

(statearr_29056_29129[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29033 === (31))){
var inst_28980 = (state_29032[(12)]);
var inst_28984 = done.call(null,null);
var inst_28985 = cljs.core.async.untap_STAR_.call(null,m,inst_28980);
var state_29032__$1 = (function (){var statearr_29057 = state_29032;
(statearr_29057[(19)] = inst_28984);

return statearr_29057;
})();
var statearr_29058_29130 = state_29032__$1;
(statearr_29058_29130[(2)] = inst_28985);

(statearr_29058_29130[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29033 === (32))){
var inst_28973 = (state_29032[(9)]);
var inst_28975 = (state_29032[(11)]);
var inst_28974 = (state_29032[(20)]);
var inst_28972 = (state_29032[(21)]);
var inst_28987 = (state_29032[(2)]);
var inst_28988 = (inst_28975 + (1));
var tmp29053 = inst_28973;
var tmp29054 = inst_28974;
var tmp29055 = inst_28972;
var inst_28972__$1 = tmp29055;
var inst_28973__$1 = tmp29053;
var inst_28974__$1 = tmp29054;
var inst_28975__$1 = inst_28988;
var state_29032__$1 = (function (){var statearr_29059 = state_29032;
(statearr_29059[(9)] = inst_28973__$1);

(statearr_29059[(11)] = inst_28975__$1);

(statearr_29059[(20)] = inst_28974__$1);

(statearr_29059[(21)] = inst_28972__$1);

(statearr_29059[(22)] = inst_28987);

return statearr_29059;
})();
var statearr_29060_29131 = state_29032__$1;
(statearr_29060_29131[(2)] = null);

(statearr_29060_29131[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29033 === (40))){
var inst_29000 = (state_29032[(23)]);
var inst_29004 = done.call(null,null);
var inst_29005 = cljs.core.async.untap_STAR_.call(null,m,inst_29000);
var state_29032__$1 = (function (){var statearr_29061 = state_29032;
(statearr_29061[(24)] = inst_29004);

return statearr_29061;
})();
var statearr_29062_29132 = state_29032__$1;
(statearr_29062_29132[(2)] = inst_29005);

(statearr_29062_29132[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29033 === (33))){
var inst_28991 = (state_29032[(25)]);
var inst_28993 = cljs.core.chunked_seq_QMARK_.call(null,inst_28991);
var state_29032__$1 = state_29032;
if(inst_28993){
var statearr_29063_29133 = state_29032__$1;
(statearr_29063_29133[(1)] = (36));

} else {
var statearr_29064_29134 = state_29032__$1;
(statearr_29064_29134[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29033 === (13))){
var inst_28921 = (state_29032[(26)]);
var inst_28924 = cljs.core.async.close_BANG_.call(null,inst_28921);
var state_29032__$1 = state_29032;
var statearr_29065_29135 = state_29032__$1;
(statearr_29065_29135[(2)] = inst_28924);

(statearr_29065_29135[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29033 === (22))){
var inst_28944 = (state_29032[(8)]);
var inst_28947 = cljs.core.async.close_BANG_.call(null,inst_28944);
var state_29032__$1 = state_29032;
var statearr_29066_29136 = state_29032__$1;
(statearr_29066_29136[(2)] = inst_28947);

(statearr_29066_29136[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29033 === (36))){
var inst_28991 = (state_29032[(25)]);
var inst_28995 = cljs.core.chunk_first.call(null,inst_28991);
var inst_28996 = cljs.core.chunk_rest.call(null,inst_28991);
var inst_28997 = cljs.core.count.call(null,inst_28995);
var inst_28972 = inst_28996;
var inst_28973 = inst_28995;
var inst_28974 = inst_28997;
var inst_28975 = (0);
var state_29032__$1 = (function (){var statearr_29067 = state_29032;
(statearr_29067[(9)] = inst_28973);

(statearr_29067[(11)] = inst_28975);

(statearr_29067[(20)] = inst_28974);

(statearr_29067[(21)] = inst_28972);

return statearr_29067;
})();
var statearr_29068_29137 = state_29032__$1;
(statearr_29068_29137[(2)] = null);

(statearr_29068_29137[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29033 === (41))){
var inst_28991 = (state_29032[(25)]);
var inst_29007 = (state_29032[(2)]);
var inst_29008 = cljs.core.next.call(null,inst_28991);
var inst_28972 = inst_29008;
var inst_28973 = null;
var inst_28974 = (0);
var inst_28975 = (0);
var state_29032__$1 = (function (){var statearr_29069 = state_29032;
(statearr_29069[(9)] = inst_28973);

(statearr_29069[(27)] = inst_29007);

(statearr_29069[(11)] = inst_28975);

(statearr_29069[(20)] = inst_28974);

(statearr_29069[(21)] = inst_28972);

return statearr_29069;
})();
var statearr_29070_29138 = state_29032__$1;
(statearr_29070_29138[(2)] = null);

(statearr_29070_29138[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29033 === (43))){
var state_29032__$1 = state_29032;
var statearr_29071_29139 = state_29032__$1;
(statearr_29071_29139[(2)] = null);

(statearr_29071_29139[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29033 === (29))){
var inst_29016 = (state_29032[(2)]);
var state_29032__$1 = state_29032;
var statearr_29072_29140 = state_29032__$1;
(statearr_29072_29140[(2)] = inst_29016);

(statearr_29072_29140[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29033 === (44))){
var inst_29025 = (state_29032[(2)]);
var state_29032__$1 = (function (){var statearr_29073 = state_29032;
(statearr_29073[(28)] = inst_29025);

return statearr_29073;
})();
var statearr_29074_29141 = state_29032__$1;
(statearr_29074_29141[(2)] = null);

(statearr_29074_29141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29033 === (6))){
var inst_28964 = (state_29032[(29)]);
var inst_28963 = cljs.core.deref.call(null,cs);
var inst_28964__$1 = cljs.core.keys.call(null,inst_28963);
var inst_28965 = cljs.core.count.call(null,inst_28964__$1);
var inst_28966 = cljs.core.reset_BANG_.call(null,dctr,inst_28965);
var inst_28971 = cljs.core.seq.call(null,inst_28964__$1);
var inst_28972 = inst_28971;
var inst_28973 = null;
var inst_28974 = (0);
var inst_28975 = (0);
var state_29032__$1 = (function (){var statearr_29075 = state_29032;
(statearr_29075[(9)] = inst_28973);

(statearr_29075[(29)] = inst_28964__$1);

(statearr_29075[(11)] = inst_28975);

(statearr_29075[(20)] = inst_28974);

(statearr_29075[(21)] = inst_28972);

(statearr_29075[(30)] = inst_28966);

return statearr_29075;
})();
var statearr_29076_29142 = state_29032__$1;
(statearr_29076_29142[(2)] = null);

(statearr_29076_29142[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29033 === (28))){
var inst_28991 = (state_29032[(25)]);
var inst_28972 = (state_29032[(21)]);
var inst_28991__$1 = cljs.core.seq.call(null,inst_28972);
var state_29032__$1 = (function (){var statearr_29077 = state_29032;
(statearr_29077[(25)] = inst_28991__$1);

return statearr_29077;
})();
if(inst_28991__$1){
var statearr_29078_29143 = state_29032__$1;
(statearr_29078_29143[(1)] = (33));

} else {
var statearr_29079_29144 = state_29032__$1;
(statearr_29079_29144[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29033 === (25))){
var inst_28975 = (state_29032[(11)]);
var inst_28974 = (state_29032[(20)]);
var inst_28977 = (inst_28975 < inst_28974);
var inst_28978 = inst_28977;
var state_29032__$1 = state_29032;
if(cljs.core.truth_(inst_28978)){
var statearr_29080_29145 = state_29032__$1;
(statearr_29080_29145[(1)] = (27));

} else {
var statearr_29081_29146 = state_29032__$1;
(statearr_29081_29146[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29033 === (34))){
var state_29032__$1 = state_29032;
var statearr_29082_29147 = state_29032__$1;
(statearr_29082_29147[(2)] = null);

(statearr_29082_29147[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29033 === (17))){
var state_29032__$1 = state_29032;
var statearr_29083_29148 = state_29032__$1;
(statearr_29083_29148[(2)] = null);

(statearr_29083_29148[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29033 === (3))){
var inst_29030 = (state_29032[(2)]);
var state_29032__$1 = state_29032;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29032__$1,inst_29030);
} else {
if((state_val_29033 === (12))){
var inst_28959 = (state_29032[(2)]);
var state_29032__$1 = state_29032;
var statearr_29084_29149 = state_29032__$1;
(statearr_29084_29149[(2)] = inst_28959);

(statearr_29084_29149[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29033 === (2))){
var state_29032__$1 = state_29032;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29032__$1,(4),ch);
} else {
if((state_val_29033 === (23))){
var state_29032__$1 = state_29032;
var statearr_29085_29150 = state_29032__$1;
(statearr_29085_29150[(2)] = null);

(statearr_29085_29150[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29033 === (35))){
var inst_29014 = (state_29032[(2)]);
var state_29032__$1 = state_29032;
var statearr_29086_29151 = state_29032__$1;
(statearr_29086_29151[(2)] = inst_29014);

(statearr_29086_29151[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29033 === (19))){
var inst_28931 = (state_29032[(7)]);
var inst_28935 = cljs.core.chunk_first.call(null,inst_28931);
var inst_28936 = cljs.core.chunk_rest.call(null,inst_28931);
var inst_28937 = cljs.core.count.call(null,inst_28935);
var inst_28909 = inst_28936;
var inst_28910 = inst_28935;
var inst_28911 = inst_28937;
var inst_28912 = (0);
var state_29032__$1 = (function (){var statearr_29087 = state_29032;
(statearr_29087[(13)] = inst_28911);

(statearr_29087[(14)] = inst_28912);

(statearr_29087[(16)] = inst_28910);

(statearr_29087[(17)] = inst_28909);

return statearr_29087;
})();
var statearr_29088_29152 = state_29032__$1;
(statearr_29088_29152[(2)] = null);

(statearr_29088_29152[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29033 === (11))){
var inst_28931 = (state_29032[(7)]);
var inst_28909 = (state_29032[(17)]);
var inst_28931__$1 = cljs.core.seq.call(null,inst_28909);
var state_29032__$1 = (function (){var statearr_29089 = state_29032;
(statearr_29089[(7)] = inst_28931__$1);

return statearr_29089;
})();
if(inst_28931__$1){
var statearr_29090_29153 = state_29032__$1;
(statearr_29090_29153[(1)] = (16));

} else {
var statearr_29091_29154 = state_29032__$1;
(statearr_29091_29154[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29033 === (9))){
var inst_28961 = (state_29032[(2)]);
var state_29032__$1 = state_29032;
var statearr_29092_29155 = state_29032__$1;
(statearr_29092_29155[(2)] = inst_28961);

(statearr_29092_29155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29033 === (5))){
var inst_28907 = cljs.core.deref.call(null,cs);
var inst_28908 = cljs.core.seq.call(null,inst_28907);
var inst_28909 = inst_28908;
var inst_28910 = null;
var inst_28911 = (0);
var inst_28912 = (0);
var state_29032__$1 = (function (){var statearr_29093 = state_29032;
(statearr_29093[(13)] = inst_28911);

(statearr_29093[(14)] = inst_28912);

(statearr_29093[(16)] = inst_28910);

(statearr_29093[(17)] = inst_28909);

return statearr_29093;
})();
var statearr_29094_29156 = state_29032__$1;
(statearr_29094_29156[(2)] = null);

(statearr_29094_29156[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29033 === (14))){
var state_29032__$1 = state_29032;
var statearr_29095_29157 = state_29032__$1;
(statearr_29095_29157[(2)] = null);

(statearr_29095_29157[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29033 === (45))){
var inst_29022 = (state_29032[(2)]);
var state_29032__$1 = state_29032;
var statearr_29096_29158 = state_29032__$1;
(statearr_29096_29158[(2)] = inst_29022);

(statearr_29096_29158[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29033 === (26))){
var inst_28964 = (state_29032[(29)]);
var inst_29018 = (state_29032[(2)]);
var inst_29019 = cljs.core.seq.call(null,inst_28964);
var state_29032__$1 = (function (){var statearr_29097 = state_29032;
(statearr_29097[(31)] = inst_29018);

return statearr_29097;
})();
if(inst_29019){
var statearr_29098_29159 = state_29032__$1;
(statearr_29098_29159[(1)] = (42));

} else {
var statearr_29099_29160 = state_29032__$1;
(statearr_29099_29160[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29033 === (16))){
var inst_28931 = (state_29032[(7)]);
var inst_28933 = cljs.core.chunked_seq_QMARK_.call(null,inst_28931);
var state_29032__$1 = state_29032;
if(inst_28933){
var statearr_29100_29161 = state_29032__$1;
(statearr_29100_29161[(1)] = (19));

} else {
var statearr_29101_29162 = state_29032__$1;
(statearr_29101_29162[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29033 === (38))){
var inst_29011 = (state_29032[(2)]);
var state_29032__$1 = state_29032;
var statearr_29102_29163 = state_29032__$1;
(statearr_29102_29163[(2)] = inst_29011);

(statearr_29102_29163[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29033 === (30))){
var state_29032__$1 = state_29032;
var statearr_29103_29164 = state_29032__$1;
(statearr_29103_29164[(2)] = null);

(statearr_29103_29164[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29033 === (10))){
var inst_28912 = (state_29032[(14)]);
var inst_28910 = (state_29032[(16)]);
var inst_28920 = cljs.core._nth.call(null,inst_28910,inst_28912);
var inst_28921 = cljs.core.nth.call(null,inst_28920,(0),null);
var inst_28922 = cljs.core.nth.call(null,inst_28920,(1),null);
var state_29032__$1 = (function (){var statearr_29104 = state_29032;
(statearr_29104[(26)] = inst_28921);

return statearr_29104;
})();
if(cljs.core.truth_(inst_28922)){
var statearr_29105_29165 = state_29032__$1;
(statearr_29105_29165[(1)] = (13));

} else {
var statearr_29106_29166 = state_29032__$1;
(statearr_29106_29166[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29033 === (18))){
var inst_28957 = (state_29032[(2)]);
var state_29032__$1 = state_29032;
var statearr_29107_29167 = state_29032__$1;
(statearr_29107_29167[(2)] = inst_28957);

(statearr_29107_29167[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29033 === (42))){
var state_29032__$1 = state_29032;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29032__$1,(45),dchan);
} else {
if((state_val_29033 === (37))){
var inst_29000 = (state_29032[(23)]);
var inst_28900 = (state_29032[(10)]);
var inst_28991 = (state_29032[(25)]);
var inst_29000__$1 = cljs.core.first.call(null,inst_28991);
var inst_29001 = cljs.core.async.put_BANG_.call(null,inst_29000__$1,inst_28900,done);
var state_29032__$1 = (function (){var statearr_29108 = state_29032;
(statearr_29108[(23)] = inst_29000__$1);

return statearr_29108;
})();
if(cljs.core.truth_(inst_29001)){
var statearr_29109_29168 = state_29032__$1;
(statearr_29109_29168[(1)] = (39));

} else {
var statearr_29110_29169 = state_29032__$1;
(statearr_29110_29169[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29033 === (8))){
var inst_28911 = (state_29032[(13)]);
var inst_28912 = (state_29032[(14)]);
var inst_28914 = (inst_28912 < inst_28911);
var inst_28915 = inst_28914;
var state_29032__$1 = state_29032;
if(cljs.core.truth_(inst_28915)){
var statearr_29111_29170 = state_29032__$1;
(statearr_29111_29170[(1)] = (10));

} else {
var statearr_29112_29171 = state_29032__$1;
(statearr_29112_29171[(1)] = (11));

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
});})(c__28298__auto___29117,cs,m,dchan,dctr,done))
;
return ((function (switch__28208__auto__,c__28298__auto___29117,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28209__auto__ = null;
var cljs$core$async$mult_$_state_machine__28209__auto____0 = (function (){
var statearr_29113 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29113[(0)] = cljs$core$async$mult_$_state_machine__28209__auto__);

(statearr_29113[(1)] = (1));

return statearr_29113;
});
var cljs$core$async$mult_$_state_machine__28209__auto____1 = (function (state_29032){
while(true){
var ret_value__28210__auto__ = (function (){try{while(true){
var result__28211__auto__ = switch__28208__auto__.call(null,state_29032);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28211__auto__;
}
break;
}
}catch (e29114){if((e29114 instanceof Object)){
var ex__28212__auto__ = e29114;
var statearr_29115_29172 = state_29032;
(statearr_29115_29172[(5)] = ex__28212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29173 = state_29032;
state_29032 = G__29173;
continue;
} else {
return ret_value__28210__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28209__auto__ = function(state_29032){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28209__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28209__auto____1.call(this,state_29032);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__28209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28209__auto____0;
cljs$core$async$mult_$_state_machine__28209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28209__auto____1;
return cljs$core$async$mult_$_state_machine__28209__auto__;
})()
;})(switch__28208__auto__,c__28298__auto___29117,cs,m,dchan,dctr,done))
})();
var state__28300__auto__ = (function (){var statearr_29116 = f__28299__auto__.call(null);
(statearr_29116[(6)] = c__28298__auto___29117);

return statearr_29116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28300__auto__);
});})(c__28298__auto___29117,cs,m,dchan,dctr,done))
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
var G__29175 = arguments.length;
switch (G__29175) {
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
var x__23972__auto__ = (((m == null))?null:m);
var m__23973__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__23972__auto__)]);
if(!((m__23973__auto__ == null))){
return m__23973__auto__.call(null,m,ch);
} else {
var m__23973__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__23973__auto____$1 == null))){
return m__23973__auto____$1.call(null,m,ch);
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
var x__23972__auto__ = (((m == null))?null:m);
var m__23973__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__23972__auto__)]);
if(!((m__23973__auto__ == null))){
return m__23973__auto__.call(null,m,ch);
} else {
var m__23973__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__23973__auto____$1 == null))){
return m__23973__auto____$1.call(null,m,ch);
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
var x__23972__auto__ = (((m == null))?null:m);
var m__23973__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__23972__auto__)]);
if(!((m__23973__auto__ == null))){
return m__23973__auto__.call(null,m);
} else {
var m__23973__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__23973__auto____$1 == null))){
return m__23973__auto____$1.call(null,m);
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
var x__23972__auto__ = (((m == null))?null:m);
var m__23973__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__23972__auto__)]);
if(!((m__23973__auto__ == null))){
return m__23973__auto__.call(null,m,state_map);
} else {
var m__23973__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__23973__auto____$1 == null))){
return m__23973__auto____$1.call(null,m,state_map);
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
var x__23972__auto__ = (((m == null))?null:m);
var m__23973__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__23972__auto__)]);
if(!((m__23973__auto__ == null))){
return m__23973__auto__.call(null,m,mode);
} else {
var m__23973__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__23973__auto____$1 == null))){
return m__23973__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__24525__auto__ = [];
var len__24518__auto___29187 = arguments.length;
var i__24519__auto___29188 = (0);
while(true){
if((i__24519__auto___29188 < len__24518__auto___29187)){
args__24525__auto__.push((arguments[i__24519__auto___29188]));

var G__29189 = (i__24519__auto___29188 + (1));
i__24519__auto___29188 = G__29189;
continue;
} else {
}
break;
}

var argseq__24526__auto__ = ((((3) < args__24525__auto__.length))?(new cljs.core.IndexedSeq(args__24525__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__24526__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29181){
var map__29182 = p__29181;
var map__29182__$1 = ((((!((map__29182 == null)))?((((map__29182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29182.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29182):map__29182);
var opts = map__29182__$1;
var statearr_29184_29190 = state;
(statearr_29184_29190[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__29182,map__29182__$1,opts){
return (function (val){
var statearr_29185_29191 = state;
(statearr_29185_29191[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29182,map__29182__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_29186_29192 = state;
(statearr_29186_29192[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29177){
var G__29178 = cljs.core.first.call(null,seq29177);
var seq29177__$1 = cljs.core.next.call(null,seq29177);
var G__29179 = cljs.core.first.call(null,seq29177__$1);
var seq29177__$2 = cljs.core.next.call(null,seq29177__$1);
var G__29180 = cljs.core.first.call(null,seq29177__$2);
var seq29177__$3 = cljs.core.next.call(null,seq29177__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29178,G__29179,G__29180,seq29177__$3);
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
if(typeof cljs.core.async.t_cljs$core$async29193 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29193 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta29194){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta29194 = meta29194;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29195,meta29194__$1){
var self__ = this;
var _29195__$1 = this;
return (new cljs.core.async.t_cljs$core$async29193(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta29194__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29193.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29195){
var self__ = this;
var _29195__$1 = this;
return self__.meta29194;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29193.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29193.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29193.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29193.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29193.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29193.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29193.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29193.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async29193.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta29194","meta29194",-941426372,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29193.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29193.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29193";

cljs.core.async.t_cljs$core$async29193.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__23910__auto__,writer__23911__auto__,opt__23912__auto__){
return cljs.core._write.call(null,writer__23911__auto__,"cljs.core.async/t_cljs$core$async29193");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29193 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29193(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta29194){
return (new cljs.core.async.t_cljs$core$async29193(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta29194));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29193(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28298__auto___29357 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28298__auto___29357,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28299__auto__ = (function (){var switch__28208__auto__ = ((function (c__28298__auto___29357,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29297){
var state_val_29298 = (state_29297[(1)]);
if((state_val_29298 === (7))){
var inst_29212 = (state_29297[(2)]);
var state_29297__$1 = state_29297;
var statearr_29299_29358 = state_29297__$1;
(statearr_29299_29358[(2)] = inst_29212);

(statearr_29299_29358[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29298 === (20))){
var inst_29224 = (state_29297[(7)]);
var state_29297__$1 = state_29297;
var statearr_29300_29359 = state_29297__$1;
(statearr_29300_29359[(2)] = inst_29224);

(statearr_29300_29359[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29298 === (27))){
var state_29297__$1 = state_29297;
var statearr_29301_29360 = state_29297__$1;
(statearr_29301_29360[(2)] = null);

(statearr_29301_29360[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29298 === (1))){
var inst_29199 = (state_29297[(8)]);
var inst_29199__$1 = calc_state.call(null);
var inst_29201 = (inst_29199__$1 == null);
var inst_29202 = cljs.core.not.call(null,inst_29201);
var state_29297__$1 = (function (){var statearr_29302 = state_29297;
(statearr_29302[(8)] = inst_29199__$1);

return statearr_29302;
})();
if(inst_29202){
var statearr_29303_29361 = state_29297__$1;
(statearr_29303_29361[(1)] = (2));

} else {
var statearr_29304_29362 = state_29297__$1;
(statearr_29304_29362[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29298 === (24))){
var inst_29257 = (state_29297[(9)]);
var inst_29248 = (state_29297[(10)]);
var inst_29271 = (state_29297[(11)]);
var inst_29271__$1 = inst_29248.call(null,inst_29257);
var state_29297__$1 = (function (){var statearr_29305 = state_29297;
(statearr_29305[(11)] = inst_29271__$1);

return statearr_29305;
})();
if(cljs.core.truth_(inst_29271__$1)){
var statearr_29306_29363 = state_29297__$1;
(statearr_29306_29363[(1)] = (29));

} else {
var statearr_29307_29364 = state_29297__$1;
(statearr_29307_29364[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29298 === (4))){
var inst_29215 = (state_29297[(2)]);
var state_29297__$1 = state_29297;
if(cljs.core.truth_(inst_29215)){
var statearr_29308_29365 = state_29297__$1;
(statearr_29308_29365[(1)] = (8));

} else {
var statearr_29309_29366 = state_29297__$1;
(statearr_29309_29366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29298 === (15))){
var inst_29242 = (state_29297[(2)]);
var state_29297__$1 = state_29297;
if(cljs.core.truth_(inst_29242)){
var statearr_29310_29367 = state_29297__$1;
(statearr_29310_29367[(1)] = (19));

} else {
var statearr_29311_29368 = state_29297__$1;
(statearr_29311_29368[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29298 === (21))){
var inst_29247 = (state_29297[(12)]);
var inst_29247__$1 = (state_29297[(2)]);
var inst_29248 = cljs.core.get.call(null,inst_29247__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29249 = cljs.core.get.call(null,inst_29247__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29250 = cljs.core.get.call(null,inst_29247__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29297__$1 = (function (){var statearr_29312 = state_29297;
(statearr_29312[(10)] = inst_29248);

(statearr_29312[(13)] = inst_29249);

(statearr_29312[(12)] = inst_29247__$1);

return statearr_29312;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29297__$1,(22),inst_29250);
} else {
if((state_val_29298 === (31))){
var inst_29279 = (state_29297[(2)]);
var state_29297__$1 = state_29297;
if(cljs.core.truth_(inst_29279)){
var statearr_29313_29369 = state_29297__$1;
(statearr_29313_29369[(1)] = (32));

} else {
var statearr_29314_29370 = state_29297__$1;
(statearr_29314_29370[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29298 === (32))){
var inst_29256 = (state_29297[(14)]);
var state_29297__$1 = state_29297;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29297__$1,(35),out,inst_29256);
} else {
if((state_val_29298 === (33))){
var inst_29247 = (state_29297[(12)]);
var inst_29224 = inst_29247;
var state_29297__$1 = (function (){var statearr_29315 = state_29297;
(statearr_29315[(7)] = inst_29224);

return statearr_29315;
})();
var statearr_29316_29371 = state_29297__$1;
(statearr_29316_29371[(2)] = null);

(statearr_29316_29371[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29298 === (13))){
var inst_29224 = (state_29297[(7)]);
var inst_29231 = inst_29224.cljs$lang$protocol_mask$partition0$;
var inst_29232 = (inst_29231 & (64));
var inst_29233 = inst_29224.cljs$core$ISeq$;
var inst_29234 = (cljs.core.PROTOCOL_SENTINEL === inst_29233);
var inst_29235 = (inst_29232) || (inst_29234);
var state_29297__$1 = state_29297;
if(cljs.core.truth_(inst_29235)){
var statearr_29317_29372 = state_29297__$1;
(statearr_29317_29372[(1)] = (16));

} else {
var statearr_29318_29373 = state_29297__$1;
(statearr_29318_29373[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29298 === (22))){
var inst_29257 = (state_29297[(9)]);
var inst_29256 = (state_29297[(14)]);
var inst_29255 = (state_29297[(2)]);
var inst_29256__$1 = cljs.core.nth.call(null,inst_29255,(0),null);
var inst_29257__$1 = cljs.core.nth.call(null,inst_29255,(1),null);
var inst_29258 = (inst_29256__$1 == null);
var inst_29259 = cljs.core._EQ_.call(null,inst_29257__$1,change);
var inst_29260 = (inst_29258) || (inst_29259);
var state_29297__$1 = (function (){var statearr_29319 = state_29297;
(statearr_29319[(9)] = inst_29257__$1);

(statearr_29319[(14)] = inst_29256__$1);

return statearr_29319;
})();
if(cljs.core.truth_(inst_29260)){
var statearr_29320_29374 = state_29297__$1;
(statearr_29320_29374[(1)] = (23));

} else {
var statearr_29321_29375 = state_29297__$1;
(statearr_29321_29375[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29298 === (36))){
var inst_29247 = (state_29297[(12)]);
var inst_29224 = inst_29247;
var state_29297__$1 = (function (){var statearr_29322 = state_29297;
(statearr_29322[(7)] = inst_29224);

return statearr_29322;
})();
var statearr_29323_29376 = state_29297__$1;
(statearr_29323_29376[(2)] = null);

(statearr_29323_29376[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29298 === (29))){
var inst_29271 = (state_29297[(11)]);
var state_29297__$1 = state_29297;
var statearr_29324_29377 = state_29297__$1;
(statearr_29324_29377[(2)] = inst_29271);

(statearr_29324_29377[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29298 === (6))){
var state_29297__$1 = state_29297;
var statearr_29325_29378 = state_29297__$1;
(statearr_29325_29378[(2)] = false);

(statearr_29325_29378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29298 === (28))){
var inst_29267 = (state_29297[(2)]);
var inst_29268 = calc_state.call(null);
var inst_29224 = inst_29268;
var state_29297__$1 = (function (){var statearr_29326 = state_29297;
(statearr_29326[(15)] = inst_29267);

(statearr_29326[(7)] = inst_29224);

return statearr_29326;
})();
var statearr_29327_29379 = state_29297__$1;
(statearr_29327_29379[(2)] = null);

(statearr_29327_29379[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29298 === (25))){
var inst_29293 = (state_29297[(2)]);
var state_29297__$1 = state_29297;
var statearr_29328_29380 = state_29297__$1;
(statearr_29328_29380[(2)] = inst_29293);

(statearr_29328_29380[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29298 === (34))){
var inst_29291 = (state_29297[(2)]);
var state_29297__$1 = state_29297;
var statearr_29329_29381 = state_29297__$1;
(statearr_29329_29381[(2)] = inst_29291);

(statearr_29329_29381[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29298 === (17))){
var state_29297__$1 = state_29297;
var statearr_29330_29382 = state_29297__$1;
(statearr_29330_29382[(2)] = false);

(statearr_29330_29382[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29298 === (3))){
var state_29297__$1 = state_29297;
var statearr_29331_29383 = state_29297__$1;
(statearr_29331_29383[(2)] = false);

(statearr_29331_29383[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29298 === (12))){
var inst_29295 = (state_29297[(2)]);
var state_29297__$1 = state_29297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29297__$1,inst_29295);
} else {
if((state_val_29298 === (2))){
var inst_29199 = (state_29297[(8)]);
var inst_29204 = inst_29199.cljs$lang$protocol_mask$partition0$;
var inst_29205 = (inst_29204 & (64));
var inst_29206 = inst_29199.cljs$core$ISeq$;
var inst_29207 = (cljs.core.PROTOCOL_SENTINEL === inst_29206);
var inst_29208 = (inst_29205) || (inst_29207);
var state_29297__$1 = state_29297;
if(cljs.core.truth_(inst_29208)){
var statearr_29332_29384 = state_29297__$1;
(statearr_29332_29384[(1)] = (5));

} else {
var statearr_29333_29385 = state_29297__$1;
(statearr_29333_29385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29298 === (23))){
var inst_29256 = (state_29297[(14)]);
var inst_29262 = (inst_29256 == null);
var state_29297__$1 = state_29297;
if(cljs.core.truth_(inst_29262)){
var statearr_29334_29386 = state_29297__$1;
(statearr_29334_29386[(1)] = (26));

} else {
var statearr_29335_29387 = state_29297__$1;
(statearr_29335_29387[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29298 === (35))){
var inst_29282 = (state_29297[(2)]);
var state_29297__$1 = state_29297;
if(cljs.core.truth_(inst_29282)){
var statearr_29336_29388 = state_29297__$1;
(statearr_29336_29388[(1)] = (36));

} else {
var statearr_29337_29389 = state_29297__$1;
(statearr_29337_29389[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29298 === (19))){
var inst_29224 = (state_29297[(7)]);
var inst_29244 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29224);
var state_29297__$1 = state_29297;
var statearr_29338_29390 = state_29297__$1;
(statearr_29338_29390[(2)] = inst_29244);

(statearr_29338_29390[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29298 === (11))){
var inst_29224 = (state_29297[(7)]);
var inst_29228 = (inst_29224 == null);
var inst_29229 = cljs.core.not.call(null,inst_29228);
var state_29297__$1 = state_29297;
if(inst_29229){
var statearr_29339_29391 = state_29297__$1;
(statearr_29339_29391[(1)] = (13));

} else {
var statearr_29340_29392 = state_29297__$1;
(statearr_29340_29392[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29298 === (9))){
var inst_29199 = (state_29297[(8)]);
var state_29297__$1 = state_29297;
var statearr_29341_29393 = state_29297__$1;
(statearr_29341_29393[(2)] = inst_29199);

(statearr_29341_29393[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29298 === (5))){
var state_29297__$1 = state_29297;
var statearr_29342_29394 = state_29297__$1;
(statearr_29342_29394[(2)] = true);

(statearr_29342_29394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29298 === (14))){
var state_29297__$1 = state_29297;
var statearr_29343_29395 = state_29297__$1;
(statearr_29343_29395[(2)] = false);

(statearr_29343_29395[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29298 === (26))){
var inst_29257 = (state_29297[(9)]);
var inst_29264 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29257);
var state_29297__$1 = state_29297;
var statearr_29344_29396 = state_29297__$1;
(statearr_29344_29396[(2)] = inst_29264);

(statearr_29344_29396[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29298 === (16))){
var state_29297__$1 = state_29297;
var statearr_29345_29397 = state_29297__$1;
(statearr_29345_29397[(2)] = true);

(statearr_29345_29397[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29298 === (38))){
var inst_29287 = (state_29297[(2)]);
var state_29297__$1 = state_29297;
var statearr_29346_29398 = state_29297__$1;
(statearr_29346_29398[(2)] = inst_29287);

(statearr_29346_29398[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29298 === (30))){
var inst_29257 = (state_29297[(9)]);
var inst_29248 = (state_29297[(10)]);
var inst_29249 = (state_29297[(13)]);
var inst_29274 = cljs.core.empty_QMARK_.call(null,inst_29248);
var inst_29275 = inst_29249.call(null,inst_29257);
var inst_29276 = cljs.core.not.call(null,inst_29275);
var inst_29277 = (inst_29274) && (inst_29276);
var state_29297__$1 = state_29297;
var statearr_29347_29399 = state_29297__$1;
(statearr_29347_29399[(2)] = inst_29277);

(statearr_29347_29399[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29298 === (10))){
var inst_29199 = (state_29297[(8)]);
var inst_29220 = (state_29297[(2)]);
var inst_29221 = cljs.core.get.call(null,inst_29220,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29222 = cljs.core.get.call(null,inst_29220,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29223 = cljs.core.get.call(null,inst_29220,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29224 = inst_29199;
var state_29297__$1 = (function (){var statearr_29348 = state_29297;
(statearr_29348[(16)] = inst_29223);

(statearr_29348[(7)] = inst_29224);

(statearr_29348[(17)] = inst_29222);

(statearr_29348[(18)] = inst_29221);

return statearr_29348;
})();
var statearr_29349_29400 = state_29297__$1;
(statearr_29349_29400[(2)] = null);

(statearr_29349_29400[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29298 === (18))){
var inst_29239 = (state_29297[(2)]);
var state_29297__$1 = state_29297;
var statearr_29350_29401 = state_29297__$1;
(statearr_29350_29401[(2)] = inst_29239);

(statearr_29350_29401[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29298 === (37))){
var state_29297__$1 = state_29297;
var statearr_29351_29402 = state_29297__$1;
(statearr_29351_29402[(2)] = null);

(statearr_29351_29402[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29298 === (8))){
var inst_29199 = (state_29297[(8)]);
var inst_29217 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29199);
var state_29297__$1 = state_29297;
var statearr_29352_29403 = state_29297__$1;
(statearr_29352_29403[(2)] = inst_29217);

(statearr_29352_29403[(1)] = (10));


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
});})(c__28298__auto___29357,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28208__auto__,c__28298__auto___29357,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28209__auto__ = null;
var cljs$core$async$mix_$_state_machine__28209__auto____0 = (function (){
var statearr_29353 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29353[(0)] = cljs$core$async$mix_$_state_machine__28209__auto__);

(statearr_29353[(1)] = (1));

return statearr_29353;
});
var cljs$core$async$mix_$_state_machine__28209__auto____1 = (function (state_29297){
while(true){
var ret_value__28210__auto__ = (function (){try{while(true){
var result__28211__auto__ = switch__28208__auto__.call(null,state_29297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28211__auto__;
}
break;
}
}catch (e29354){if((e29354 instanceof Object)){
var ex__28212__auto__ = e29354;
var statearr_29355_29404 = state_29297;
(statearr_29355_29404[(5)] = ex__28212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29405 = state_29297;
state_29297 = G__29405;
continue;
} else {
return ret_value__28210__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28209__auto__ = function(state_29297){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28209__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28209__auto____1.call(this,state_29297);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__28209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28209__auto____0;
cljs$core$async$mix_$_state_machine__28209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28209__auto____1;
return cljs$core$async$mix_$_state_machine__28209__auto__;
})()
;})(switch__28208__auto__,c__28298__auto___29357,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28300__auto__ = (function (){var statearr_29356 = f__28299__auto__.call(null);
(statearr_29356[(6)] = c__28298__auto___29357);

return statearr_29356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28300__auto__);
});})(c__28298__auto___29357,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__23972__auto__ = (((p == null))?null:p);
var m__23973__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__23972__auto__)]);
if(!((m__23973__auto__ == null))){
return m__23973__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__23973__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__23973__auto____$1 == null))){
return m__23973__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__23972__auto__ = (((p == null))?null:p);
var m__23973__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__23972__auto__)]);
if(!((m__23973__auto__ == null))){
return m__23973__auto__.call(null,p,v,ch);
} else {
var m__23973__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__23973__auto____$1 == null))){
return m__23973__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__29407 = arguments.length;
switch (G__29407) {
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
var x__23972__auto__ = (((p == null))?null:p);
var m__23973__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__23972__auto__)]);
if(!((m__23973__auto__ == null))){
return m__23973__auto__.call(null,p);
} else {
var m__23973__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__23973__auto____$1 == null))){
return m__23973__auto____$1.call(null,p);
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
var x__23972__auto__ = (((p == null))?null:p);
var m__23973__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__23972__auto__)]);
if(!((m__23973__auto__ == null))){
return m__23973__auto__.call(null,p,v);
} else {
var m__23973__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__23973__auto____$1 == null))){
return m__23973__auto____$1.call(null,p,v);
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
var G__29411 = arguments.length;
switch (G__29411) {
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
var or__23239__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__23239__auto__)){
return or__23239__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__23239__auto__,mults){
return (function (p1__29409_SHARP_){
if(cljs.core.truth_(p1__29409_SHARP_.call(null,topic))){
return p1__29409_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29409_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__23239__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29412 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29412 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29413){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29413 = meta29413;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29414,meta29413__$1){
var self__ = this;
var _29414__$1 = this;
return (new cljs.core.async.t_cljs$core$async29412(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29413__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29412.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29414){
var self__ = this;
var _29414__$1 = this;
return self__.meta29413;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29412.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29412.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29412.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29412.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29412.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async29412.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29412.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29412.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29413","meta29413",872370276,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29412.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29412.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29412";

cljs.core.async.t_cljs$core$async29412.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__23910__auto__,writer__23911__auto__,opt__23912__auto__){
return cljs.core._write.call(null,writer__23911__auto__,"cljs.core.async/t_cljs$core$async29412");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async29412 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29412(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29413){
return (new cljs.core.async.t_cljs$core$async29412(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29413));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29412(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28298__auto___29532 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28298__auto___29532,mults,ensure_mult,p){
return (function (){
var f__28299__auto__ = (function (){var switch__28208__auto__ = ((function (c__28298__auto___29532,mults,ensure_mult,p){
return (function (state_29486){
var state_val_29487 = (state_29486[(1)]);
if((state_val_29487 === (7))){
var inst_29482 = (state_29486[(2)]);
var state_29486__$1 = state_29486;
var statearr_29488_29533 = state_29486__$1;
(statearr_29488_29533[(2)] = inst_29482);

(statearr_29488_29533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29487 === (20))){
var state_29486__$1 = state_29486;
var statearr_29489_29534 = state_29486__$1;
(statearr_29489_29534[(2)] = null);

(statearr_29489_29534[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29487 === (1))){
var state_29486__$1 = state_29486;
var statearr_29490_29535 = state_29486__$1;
(statearr_29490_29535[(2)] = null);

(statearr_29490_29535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29487 === (24))){
var inst_29465 = (state_29486[(7)]);
var inst_29474 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29465);
var state_29486__$1 = state_29486;
var statearr_29491_29536 = state_29486__$1;
(statearr_29491_29536[(2)] = inst_29474);

(statearr_29491_29536[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29487 === (4))){
var inst_29417 = (state_29486[(8)]);
var inst_29417__$1 = (state_29486[(2)]);
var inst_29418 = (inst_29417__$1 == null);
var state_29486__$1 = (function (){var statearr_29492 = state_29486;
(statearr_29492[(8)] = inst_29417__$1);

return statearr_29492;
})();
if(cljs.core.truth_(inst_29418)){
var statearr_29493_29537 = state_29486__$1;
(statearr_29493_29537[(1)] = (5));

} else {
var statearr_29494_29538 = state_29486__$1;
(statearr_29494_29538[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29487 === (15))){
var inst_29459 = (state_29486[(2)]);
var state_29486__$1 = state_29486;
var statearr_29495_29539 = state_29486__$1;
(statearr_29495_29539[(2)] = inst_29459);

(statearr_29495_29539[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29487 === (21))){
var inst_29479 = (state_29486[(2)]);
var state_29486__$1 = (function (){var statearr_29496 = state_29486;
(statearr_29496[(9)] = inst_29479);

return statearr_29496;
})();
var statearr_29497_29540 = state_29486__$1;
(statearr_29497_29540[(2)] = null);

(statearr_29497_29540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29487 === (13))){
var inst_29441 = (state_29486[(10)]);
var inst_29443 = cljs.core.chunked_seq_QMARK_.call(null,inst_29441);
var state_29486__$1 = state_29486;
if(inst_29443){
var statearr_29498_29541 = state_29486__$1;
(statearr_29498_29541[(1)] = (16));

} else {
var statearr_29499_29542 = state_29486__$1;
(statearr_29499_29542[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29487 === (22))){
var inst_29471 = (state_29486[(2)]);
var state_29486__$1 = state_29486;
if(cljs.core.truth_(inst_29471)){
var statearr_29500_29543 = state_29486__$1;
(statearr_29500_29543[(1)] = (23));

} else {
var statearr_29501_29544 = state_29486__$1;
(statearr_29501_29544[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29487 === (6))){
var inst_29467 = (state_29486[(11)]);
var inst_29465 = (state_29486[(7)]);
var inst_29417 = (state_29486[(8)]);
var inst_29465__$1 = topic_fn.call(null,inst_29417);
var inst_29466 = cljs.core.deref.call(null,mults);
var inst_29467__$1 = cljs.core.get.call(null,inst_29466,inst_29465__$1);
var state_29486__$1 = (function (){var statearr_29502 = state_29486;
(statearr_29502[(11)] = inst_29467__$1);

(statearr_29502[(7)] = inst_29465__$1);

return statearr_29502;
})();
if(cljs.core.truth_(inst_29467__$1)){
var statearr_29503_29545 = state_29486__$1;
(statearr_29503_29545[(1)] = (19));

} else {
var statearr_29504_29546 = state_29486__$1;
(statearr_29504_29546[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29487 === (25))){
var inst_29476 = (state_29486[(2)]);
var state_29486__$1 = state_29486;
var statearr_29505_29547 = state_29486__$1;
(statearr_29505_29547[(2)] = inst_29476);

(statearr_29505_29547[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29487 === (17))){
var inst_29441 = (state_29486[(10)]);
var inst_29450 = cljs.core.first.call(null,inst_29441);
var inst_29451 = cljs.core.async.muxch_STAR_.call(null,inst_29450);
var inst_29452 = cljs.core.async.close_BANG_.call(null,inst_29451);
var inst_29453 = cljs.core.next.call(null,inst_29441);
var inst_29427 = inst_29453;
var inst_29428 = null;
var inst_29429 = (0);
var inst_29430 = (0);
var state_29486__$1 = (function (){var statearr_29506 = state_29486;
(statearr_29506[(12)] = inst_29427);

(statearr_29506[(13)] = inst_29430);

(statearr_29506[(14)] = inst_29429);

(statearr_29506[(15)] = inst_29428);

(statearr_29506[(16)] = inst_29452);

return statearr_29506;
})();
var statearr_29507_29548 = state_29486__$1;
(statearr_29507_29548[(2)] = null);

(statearr_29507_29548[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29487 === (3))){
var inst_29484 = (state_29486[(2)]);
var state_29486__$1 = state_29486;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29486__$1,inst_29484);
} else {
if((state_val_29487 === (12))){
var inst_29461 = (state_29486[(2)]);
var state_29486__$1 = state_29486;
var statearr_29508_29549 = state_29486__$1;
(statearr_29508_29549[(2)] = inst_29461);

(statearr_29508_29549[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29487 === (2))){
var state_29486__$1 = state_29486;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29486__$1,(4),ch);
} else {
if((state_val_29487 === (23))){
var state_29486__$1 = state_29486;
var statearr_29509_29550 = state_29486__$1;
(statearr_29509_29550[(2)] = null);

(statearr_29509_29550[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29487 === (19))){
var inst_29467 = (state_29486[(11)]);
var inst_29417 = (state_29486[(8)]);
var inst_29469 = cljs.core.async.muxch_STAR_.call(null,inst_29467);
var state_29486__$1 = state_29486;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29486__$1,(22),inst_29469,inst_29417);
} else {
if((state_val_29487 === (11))){
var inst_29441 = (state_29486[(10)]);
var inst_29427 = (state_29486[(12)]);
var inst_29441__$1 = cljs.core.seq.call(null,inst_29427);
var state_29486__$1 = (function (){var statearr_29510 = state_29486;
(statearr_29510[(10)] = inst_29441__$1);

return statearr_29510;
})();
if(inst_29441__$1){
var statearr_29511_29551 = state_29486__$1;
(statearr_29511_29551[(1)] = (13));

} else {
var statearr_29512_29552 = state_29486__$1;
(statearr_29512_29552[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29487 === (9))){
var inst_29463 = (state_29486[(2)]);
var state_29486__$1 = state_29486;
var statearr_29513_29553 = state_29486__$1;
(statearr_29513_29553[(2)] = inst_29463);

(statearr_29513_29553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29487 === (5))){
var inst_29424 = cljs.core.deref.call(null,mults);
var inst_29425 = cljs.core.vals.call(null,inst_29424);
var inst_29426 = cljs.core.seq.call(null,inst_29425);
var inst_29427 = inst_29426;
var inst_29428 = null;
var inst_29429 = (0);
var inst_29430 = (0);
var state_29486__$1 = (function (){var statearr_29514 = state_29486;
(statearr_29514[(12)] = inst_29427);

(statearr_29514[(13)] = inst_29430);

(statearr_29514[(14)] = inst_29429);

(statearr_29514[(15)] = inst_29428);

return statearr_29514;
})();
var statearr_29515_29554 = state_29486__$1;
(statearr_29515_29554[(2)] = null);

(statearr_29515_29554[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29487 === (14))){
var state_29486__$1 = state_29486;
var statearr_29519_29555 = state_29486__$1;
(statearr_29519_29555[(2)] = null);

(statearr_29519_29555[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29487 === (16))){
var inst_29441 = (state_29486[(10)]);
var inst_29445 = cljs.core.chunk_first.call(null,inst_29441);
var inst_29446 = cljs.core.chunk_rest.call(null,inst_29441);
var inst_29447 = cljs.core.count.call(null,inst_29445);
var inst_29427 = inst_29446;
var inst_29428 = inst_29445;
var inst_29429 = inst_29447;
var inst_29430 = (0);
var state_29486__$1 = (function (){var statearr_29520 = state_29486;
(statearr_29520[(12)] = inst_29427);

(statearr_29520[(13)] = inst_29430);

(statearr_29520[(14)] = inst_29429);

(statearr_29520[(15)] = inst_29428);

return statearr_29520;
})();
var statearr_29521_29556 = state_29486__$1;
(statearr_29521_29556[(2)] = null);

(statearr_29521_29556[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29487 === (10))){
var inst_29427 = (state_29486[(12)]);
var inst_29430 = (state_29486[(13)]);
var inst_29429 = (state_29486[(14)]);
var inst_29428 = (state_29486[(15)]);
var inst_29435 = cljs.core._nth.call(null,inst_29428,inst_29430);
var inst_29436 = cljs.core.async.muxch_STAR_.call(null,inst_29435);
var inst_29437 = cljs.core.async.close_BANG_.call(null,inst_29436);
var inst_29438 = (inst_29430 + (1));
var tmp29516 = inst_29427;
var tmp29517 = inst_29429;
var tmp29518 = inst_29428;
var inst_29427__$1 = tmp29516;
var inst_29428__$1 = tmp29518;
var inst_29429__$1 = tmp29517;
var inst_29430__$1 = inst_29438;
var state_29486__$1 = (function (){var statearr_29522 = state_29486;
(statearr_29522[(12)] = inst_29427__$1);

(statearr_29522[(13)] = inst_29430__$1);

(statearr_29522[(14)] = inst_29429__$1);

(statearr_29522[(15)] = inst_29428__$1);

(statearr_29522[(17)] = inst_29437);

return statearr_29522;
})();
var statearr_29523_29557 = state_29486__$1;
(statearr_29523_29557[(2)] = null);

(statearr_29523_29557[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29487 === (18))){
var inst_29456 = (state_29486[(2)]);
var state_29486__$1 = state_29486;
var statearr_29524_29558 = state_29486__$1;
(statearr_29524_29558[(2)] = inst_29456);

(statearr_29524_29558[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29487 === (8))){
var inst_29430 = (state_29486[(13)]);
var inst_29429 = (state_29486[(14)]);
var inst_29432 = (inst_29430 < inst_29429);
var inst_29433 = inst_29432;
var state_29486__$1 = state_29486;
if(cljs.core.truth_(inst_29433)){
var statearr_29525_29559 = state_29486__$1;
(statearr_29525_29559[(1)] = (10));

} else {
var statearr_29526_29560 = state_29486__$1;
(statearr_29526_29560[(1)] = (11));

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
});})(c__28298__auto___29532,mults,ensure_mult,p))
;
return ((function (switch__28208__auto__,c__28298__auto___29532,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28209__auto__ = null;
var cljs$core$async$state_machine__28209__auto____0 = (function (){
var statearr_29527 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29527[(0)] = cljs$core$async$state_machine__28209__auto__);

(statearr_29527[(1)] = (1));

return statearr_29527;
});
var cljs$core$async$state_machine__28209__auto____1 = (function (state_29486){
while(true){
var ret_value__28210__auto__ = (function (){try{while(true){
var result__28211__auto__ = switch__28208__auto__.call(null,state_29486);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28211__auto__;
}
break;
}
}catch (e29528){if((e29528 instanceof Object)){
var ex__28212__auto__ = e29528;
var statearr_29529_29561 = state_29486;
(statearr_29529_29561[(5)] = ex__28212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29562 = state_29486;
state_29486 = G__29562;
continue;
} else {
return ret_value__28210__auto__;
}
break;
}
});
cljs$core$async$state_machine__28209__auto__ = function(state_29486){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28209__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28209__auto____1.call(this,state_29486);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28209__auto____0;
cljs$core$async$state_machine__28209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28209__auto____1;
return cljs$core$async$state_machine__28209__auto__;
})()
;})(switch__28208__auto__,c__28298__auto___29532,mults,ensure_mult,p))
})();
var state__28300__auto__ = (function (){var statearr_29530 = f__28299__auto__.call(null);
(statearr_29530[(6)] = c__28298__auto___29532);

return statearr_29530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28300__auto__);
});})(c__28298__auto___29532,mults,ensure_mult,p))
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
var G__29564 = arguments.length;
switch (G__29564) {
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
var G__29567 = arguments.length;
switch (G__29567) {
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
var G__29570 = arguments.length;
switch (G__29570) {
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
var c__28298__auto___29637 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28298__auto___29637,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28299__auto__ = (function (){var switch__28208__auto__ = ((function (c__28298__auto___29637,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29609){
var state_val_29610 = (state_29609[(1)]);
if((state_val_29610 === (7))){
var state_29609__$1 = state_29609;
var statearr_29611_29638 = state_29609__$1;
(statearr_29611_29638[(2)] = null);

(statearr_29611_29638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29610 === (1))){
var state_29609__$1 = state_29609;
var statearr_29612_29639 = state_29609__$1;
(statearr_29612_29639[(2)] = null);

(statearr_29612_29639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29610 === (4))){
var inst_29573 = (state_29609[(7)]);
var inst_29575 = (inst_29573 < cnt);
var state_29609__$1 = state_29609;
if(cljs.core.truth_(inst_29575)){
var statearr_29613_29640 = state_29609__$1;
(statearr_29613_29640[(1)] = (6));

} else {
var statearr_29614_29641 = state_29609__$1;
(statearr_29614_29641[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29610 === (15))){
var inst_29605 = (state_29609[(2)]);
var state_29609__$1 = state_29609;
var statearr_29615_29642 = state_29609__$1;
(statearr_29615_29642[(2)] = inst_29605);

(statearr_29615_29642[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29610 === (13))){
var inst_29598 = cljs.core.async.close_BANG_.call(null,out);
var state_29609__$1 = state_29609;
var statearr_29616_29643 = state_29609__$1;
(statearr_29616_29643[(2)] = inst_29598);

(statearr_29616_29643[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29610 === (6))){
var state_29609__$1 = state_29609;
var statearr_29617_29644 = state_29609__$1;
(statearr_29617_29644[(2)] = null);

(statearr_29617_29644[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29610 === (3))){
var inst_29607 = (state_29609[(2)]);
var state_29609__$1 = state_29609;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29609__$1,inst_29607);
} else {
if((state_val_29610 === (12))){
var inst_29595 = (state_29609[(8)]);
var inst_29595__$1 = (state_29609[(2)]);
var inst_29596 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29595__$1);
var state_29609__$1 = (function (){var statearr_29618 = state_29609;
(statearr_29618[(8)] = inst_29595__$1);

return statearr_29618;
})();
if(cljs.core.truth_(inst_29596)){
var statearr_29619_29645 = state_29609__$1;
(statearr_29619_29645[(1)] = (13));

} else {
var statearr_29620_29646 = state_29609__$1;
(statearr_29620_29646[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29610 === (2))){
var inst_29572 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29573 = (0);
var state_29609__$1 = (function (){var statearr_29621 = state_29609;
(statearr_29621[(9)] = inst_29572);

(statearr_29621[(7)] = inst_29573);

return statearr_29621;
})();
var statearr_29622_29647 = state_29609__$1;
(statearr_29622_29647[(2)] = null);

(statearr_29622_29647[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29610 === (11))){
var inst_29573 = (state_29609[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29609,(10),Object,null,(9));
var inst_29582 = chs__$1.call(null,inst_29573);
var inst_29583 = done.call(null,inst_29573);
var inst_29584 = cljs.core.async.take_BANG_.call(null,inst_29582,inst_29583);
var state_29609__$1 = state_29609;
var statearr_29623_29648 = state_29609__$1;
(statearr_29623_29648[(2)] = inst_29584);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29609__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29610 === (9))){
var inst_29573 = (state_29609[(7)]);
var inst_29586 = (state_29609[(2)]);
var inst_29587 = (inst_29573 + (1));
var inst_29573__$1 = inst_29587;
var state_29609__$1 = (function (){var statearr_29624 = state_29609;
(statearr_29624[(10)] = inst_29586);

(statearr_29624[(7)] = inst_29573__$1);

return statearr_29624;
})();
var statearr_29625_29649 = state_29609__$1;
(statearr_29625_29649[(2)] = null);

(statearr_29625_29649[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29610 === (5))){
var inst_29593 = (state_29609[(2)]);
var state_29609__$1 = (function (){var statearr_29626 = state_29609;
(statearr_29626[(11)] = inst_29593);

return statearr_29626;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29609__$1,(12),dchan);
} else {
if((state_val_29610 === (14))){
var inst_29595 = (state_29609[(8)]);
var inst_29600 = cljs.core.apply.call(null,f,inst_29595);
var state_29609__$1 = state_29609;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29609__$1,(16),out,inst_29600);
} else {
if((state_val_29610 === (16))){
var inst_29602 = (state_29609[(2)]);
var state_29609__$1 = (function (){var statearr_29627 = state_29609;
(statearr_29627[(12)] = inst_29602);

return statearr_29627;
})();
var statearr_29628_29650 = state_29609__$1;
(statearr_29628_29650[(2)] = null);

(statearr_29628_29650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29610 === (10))){
var inst_29577 = (state_29609[(2)]);
var inst_29578 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29609__$1 = (function (){var statearr_29629 = state_29609;
(statearr_29629[(13)] = inst_29577);

return statearr_29629;
})();
var statearr_29630_29651 = state_29609__$1;
(statearr_29630_29651[(2)] = inst_29578);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29609__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29610 === (8))){
var inst_29591 = (state_29609[(2)]);
var state_29609__$1 = state_29609;
var statearr_29631_29652 = state_29609__$1;
(statearr_29631_29652[(2)] = inst_29591);

(statearr_29631_29652[(1)] = (5));


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
});})(c__28298__auto___29637,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28208__auto__,c__28298__auto___29637,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28209__auto__ = null;
var cljs$core$async$state_machine__28209__auto____0 = (function (){
var statearr_29632 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29632[(0)] = cljs$core$async$state_machine__28209__auto__);

(statearr_29632[(1)] = (1));

return statearr_29632;
});
var cljs$core$async$state_machine__28209__auto____1 = (function (state_29609){
while(true){
var ret_value__28210__auto__ = (function (){try{while(true){
var result__28211__auto__ = switch__28208__auto__.call(null,state_29609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28211__auto__;
}
break;
}
}catch (e29633){if((e29633 instanceof Object)){
var ex__28212__auto__ = e29633;
var statearr_29634_29653 = state_29609;
(statearr_29634_29653[(5)] = ex__28212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29654 = state_29609;
state_29609 = G__29654;
continue;
} else {
return ret_value__28210__auto__;
}
break;
}
});
cljs$core$async$state_machine__28209__auto__ = function(state_29609){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28209__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28209__auto____1.call(this,state_29609);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28209__auto____0;
cljs$core$async$state_machine__28209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28209__auto____1;
return cljs$core$async$state_machine__28209__auto__;
})()
;})(switch__28208__auto__,c__28298__auto___29637,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28300__auto__ = (function (){var statearr_29635 = f__28299__auto__.call(null);
(statearr_29635[(6)] = c__28298__auto___29637);

return statearr_29635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28300__auto__);
});})(c__28298__auto___29637,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__29657 = arguments.length;
switch (G__29657) {
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
var c__28298__auto___29711 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28298__auto___29711,out){
return (function (){
var f__28299__auto__ = (function (){var switch__28208__auto__ = ((function (c__28298__auto___29711,out){
return (function (state_29689){
var state_val_29690 = (state_29689[(1)]);
if((state_val_29690 === (7))){
var inst_29669 = (state_29689[(7)]);
var inst_29668 = (state_29689[(8)]);
var inst_29668__$1 = (state_29689[(2)]);
var inst_29669__$1 = cljs.core.nth.call(null,inst_29668__$1,(0),null);
var inst_29670 = cljs.core.nth.call(null,inst_29668__$1,(1),null);
var inst_29671 = (inst_29669__$1 == null);
var state_29689__$1 = (function (){var statearr_29691 = state_29689;
(statearr_29691[(7)] = inst_29669__$1);

(statearr_29691[(8)] = inst_29668__$1);

(statearr_29691[(9)] = inst_29670);

return statearr_29691;
})();
if(cljs.core.truth_(inst_29671)){
var statearr_29692_29712 = state_29689__$1;
(statearr_29692_29712[(1)] = (8));

} else {
var statearr_29693_29713 = state_29689__$1;
(statearr_29693_29713[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29690 === (1))){
var inst_29658 = cljs.core.vec.call(null,chs);
var inst_29659 = inst_29658;
var state_29689__$1 = (function (){var statearr_29694 = state_29689;
(statearr_29694[(10)] = inst_29659);

return statearr_29694;
})();
var statearr_29695_29714 = state_29689__$1;
(statearr_29695_29714[(2)] = null);

(statearr_29695_29714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29690 === (4))){
var inst_29659 = (state_29689[(10)]);
var state_29689__$1 = state_29689;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29689__$1,(7),inst_29659);
} else {
if((state_val_29690 === (6))){
var inst_29685 = (state_29689[(2)]);
var state_29689__$1 = state_29689;
var statearr_29696_29715 = state_29689__$1;
(statearr_29696_29715[(2)] = inst_29685);

(statearr_29696_29715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29690 === (3))){
var inst_29687 = (state_29689[(2)]);
var state_29689__$1 = state_29689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29689__$1,inst_29687);
} else {
if((state_val_29690 === (2))){
var inst_29659 = (state_29689[(10)]);
var inst_29661 = cljs.core.count.call(null,inst_29659);
var inst_29662 = (inst_29661 > (0));
var state_29689__$1 = state_29689;
if(cljs.core.truth_(inst_29662)){
var statearr_29698_29716 = state_29689__$1;
(statearr_29698_29716[(1)] = (4));

} else {
var statearr_29699_29717 = state_29689__$1;
(statearr_29699_29717[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29690 === (11))){
var inst_29659 = (state_29689[(10)]);
var inst_29678 = (state_29689[(2)]);
var tmp29697 = inst_29659;
var inst_29659__$1 = tmp29697;
var state_29689__$1 = (function (){var statearr_29700 = state_29689;
(statearr_29700[(11)] = inst_29678);

(statearr_29700[(10)] = inst_29659__$1);

return statearr_29700;
})();
var statearr_29701_29718 = state_29689__$1;
(statearr_29701_29718[(2)] = null);

(statearr_29701_29718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29690 === (9))){
var inst_29669 = (state_29689[(7)]);
var state_29689__$1 = state_29689;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29689__$1,(11),out,inst_29669);
} else {
if((state_val_29690 === (5))){
var inst_29683 = cljs.core.async.close_BANG_.call(null,out);
var state_29689__$1 = state_29689;
var statearr_29702_29719 = state_29689__$1;
(statearr_29702_29719[(2)] = inst_29683);

(statearr_29702_29719[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29690 === (10))){
var inst_29681 = (state_29689[(2)]);
var state_29689__$1 = state_29689;
var statearr_29703_29720 = state_29689__$1;
(statearr_29703_29720[(2)] = inst_29681);

(statearr_29703_29720[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29690 === (8))){
var inst_29669 = (state_29689[(7)]);
var inst_29668 = (state_29689[(8)]);
var inst_29659 = (state_29689[(10)]);
var inst_29670 = (state_29689[(9)]);
var inst_29673 = (function (){var cs = inst_29659;
var vec__29664 = inst_29668;
var v = inst_29669;
var c = inst_29670;
return ((function (cs,vec__29664,v,c,inst_29669,inst_29668,inst_29659,inst_29670,state_val_29690,c__28298__auto___29711,out){
return (function (p1__29655_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29655_SHARP_);
});
;})(cs,vec__29664,v,c,inst_29669,inst_29668,inst_29659,inst_29670,state_val_29690,c__28298__auto___29711,out))
})();
var inst_29674 = cljs.core.filterv.call(null,inst_29673,inst_29659);
var inst_29659__$1 = inst_29674;
var state_29689__$1 = (function (){var statearr_29704 = state_29689;
(statearr_29704[(10)] = inst_29659__$1);

return statearr_29704;
})();
var statearr_29705_29721 = state_29689__$1;
(statearr_29705_29721[(2)] = null);

(statearr_29705_29721[(1)] = (2));


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
});})(c__28298__auto___29711,out))
;
return ((function (switch__28208__auto__,c__28298__auto___29711,out){
return (function() {
var cljs$core$async$state_machine__28209__auto__ = null;
var cljs$core$async$state_machine__28209__auto____0 = (function (){
var statearr_29706 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29706[(0)] = cljs$core$async$state_machine__28209__auto__);

(statearr_29706[(1)] = (1));

return statearr_29706;
});
var cljs$core$async$state_machine__28209__auto____1 = (function (state_29689){
while(true){
var ret_value__28210__auto__ = (function (){try{while(true){
var result__28211__auto__ = switch__28208__auto__.call(null,state_29689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28211__auto__;
}
break;
}
}catch (e29707){if((e29707 instanceof Object)){
var ex__28212__auto__ = e29707;
var statearr_29708_29722 = state_29689;
(statearr_29708_29722[(5)] = ex__28212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29723 = state_29689;
state_29689 = G__29723;
continue;
} else {
return ret_value__28210__auto__;
}
break;
}
});
cljs$core$async$state_machine__28209__auto__ = function(state_29689){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28209__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28209__auto____1.call(this,state_29689);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28209__auto____0;
cljs$core$async$state_machine__28209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28209__auto____1;
return cljs$core$async$state_machine__28209__auto__;
})()
;})(switch__28208__auto__,c__28298__auto___29711,out))
})();
var state__28300__auto__ = (function (){var statearr_29709 = f__28299__auto__.call(null);
(statearr_29709[(6)] = c__28298__auto___29711);

return statearr_29709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28300__auto__);
});})(c__28298__auto___29711,out))
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
var G__29725 = arguments.length;
switch (G__29725) {
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
var c__28298__auto___29770 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28298__auto___29770,out){
return (function (){
var f__28299__auto__ = (function (){var switch__28208__auto__ = ((function (c__28298__auto___29770,out){
return (function (state_29749){
var state_val_29750 = (state_29749[(1)]);
if((state_val_29750 === (7))){
var inst_29731 = (state_29749[(7)]);
var inst_29731__$1 = (state_29749[(2)]);
var inst_29732 = (inst_29731__$1 == null);
var inst_29733 = cljs.core.not.call(null,inst_29732);
var state_29749__$1 = (function (){var statearr_29751 = state_29749;
(statearr_29751[(7)] = inst_29731__$1);

return statearr_29751;
})();
if(inst_29733){
var statearr_29752_29771 = state_29749__$1;
(statearr_29752_29771[(1)] = (8));

} else {
var statearr_29753_29772 = state_29749__$1;
(statearr_29753_29772[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29750 === (1))){
var inst_29726 = (0);
var state_29749__$1 = (function (){var statearr_29754 = state_29749;
(statearr_29754[(8)] = inst_29726);

return statearr_29754;
})();
var statearr_29755_29773 = state_29749__$1;
(statearr_29755_29773[(2)] = null);

(statearr_29755_29773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29750 === (4))){
var state_29749__$1 = state_29749;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29749__$1,(7),ch);
} else {
if((state_val_29750 === (6))){
var inst_29744 = (state_29749[(2)]);
var state_29749__$1 = state_29749;
var statearr_29756_29774 = state_29749__$1;
(statearr_29756_29774[(2)] = inst_29744);

(statearr_29756_29774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29750 === (3))){
var inst_29746 = (state_29749[(2)]);
var inst_29747 = cljs.core.async.close_BANG_.call(null,out);
var state_29749__$1 = (function (){var statearr_29757 = state_29749;
(statearr_29757[(9)] = inst_29746);

return statearr_29757;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29749__$1,inst_29747);
} else {
if((state_val_29750 === (2))){
var inst_29726 = (state_29749[(8)]);
var inst_29728 = (inst_29726 < n);
var state_29749__$1 = state_29749;
if(cljs.core.truth_(inst_29728)){
var statearr_29758_29775 = state_29749__$1;
(statearr_29758_29775[(1)] = (4));

} else {
var statearr_29759_29776 = state_29749__$1;
(statearr_29759_29776[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29750 === (11))){
var inst_29726 = (state_29749[(8)]);
var inst_29736 = (state_29749[(2)]);
var inst_29737 = (inst_29726 + (1));
var inst_29726__$1 = inst_29737;
var state_29749__$1 = (function (){var statearr_29760 = state_29749;
(statearr_29760[(8)] = inst_29726__$1);

(statearr_29760[(10)] = inst_29736);

return statearr_29760;
})();
var statearr_29761_29777 = state_29749__$1;
(statearr_29761_29777[(2)] = null);

(statearr_29761_29777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29750 === (9))){
var state_29749__$1 = state_29749;
var statearr_29762_29778 = state_29749__$1;
(statearr_29762_29778[(2)] = null);

(statearr_29762_29778[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29750 === (5))){
var state_29749__$1 = state_29749;
var statearr_29763_29779 = state_29749__$1;
(statearr_29763_29779[(2)] = null);

(statearr_29763_29779[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29750 === (10))){
var inst_29741 = (state_29749[(2)]);
var state_29749__$1 = state_29749;
var statearr_29764_29780 = state_29749__$1;
(statearr_29764_29780[(2)] = inst_29741);

(statearr_29764_29780[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29750 === (8))){
var inst_29731 = (state_29749[(7)]);
var state_29749__$1 = state_29749;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29749__$1,(11),out,inst_29731);
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
});})(c__28298__auto___29770,out))
;
return ((function (switch__28208__auto__,c__28298__auto___29770,out){
return (function() {
var cljs$core$async$state_machine__28209__auto__ = null;
var cljs$core$async$state_machine__28209__auto____0 = (function (){
var statearr_29765 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29765[(0)] = cljs$core$async$state_machine__28209__auto__);

(statearr_29765[(1)] = (1));

return statearr_29765;
});
var cljs$core$async$state_machine__28209__auto____1 = (function (state_29749){
while(true){
var ret_value__28210__auto__ = (function (){try{while(true){
var result__28211__auto__ = switch__28208__auto__.call(null,state_29749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28211__auto__;
}
break;
}
}catch (e29766){if((e29766 instanceof Object)){
var ex__28212__auto__ = e29766;
var statearr_29767_29781 = state_29749;
(statearr_29767_29781[(5)] = ex__28212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29782 = state_29749;
state_29749 = G__29782;
continue;
} else {
return ret_value__28210__auto__;
}
break;
}
});
cljs$core$async$state_machine__28209__auto__ = function(state_29749){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28209__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28209__auto____1.call(this,state_29749);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28209__auto____0;
cljs$core$async$state_machine__28209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28209__auto____1;
return cljs$core$async$state_machine__28209__auto__;
})()
;})(switch__28208__auto__,c__28298__auto___29770,out))
})();
var state__28300__auto__ = (function (){var statearr_29768 = f__28299__auto__.call(null);
(statearr_29768[(6)] = c__28298__auto___29770);

return statearr_29768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28300__auto__);
});})(c__28298__auto___29770,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29784 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29784 = (function (f,ch,meta29785){
this.f = f;
this.ch = ch;
this.meta29785 = meta29785;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29786,meta29785__$1){
var self__ = this;
var _29786__$1 = this;
return (new cljs.core.async.t_cljs$core$async29784(self__.f,self__.ch,meta29785__$1));
});

cljs.core.async.t_cljs$core$async29784.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29786){
var self__ = this;
var _29786__$1 = this;
return self__.meta29785;
});

cljs.core.async.t_cljs$core$async29784.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29784.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29784.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29784.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29784.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29787 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29787 = (function (f,ch,meta29785,_,fn1,meta29788){
this.f = f;
this.ch = ch;
this.meta29785 = meta29785;
this._ = _;
this.fn1 = fn1;
this.meta29788 = meta29788;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29789,meta29788__$1){
var self__ = this;
var _29789__$1 = this;
return (new cljs.core.async.t_cljs$core$async29787(self__.f,self__.ch,self__.meta29785,self__._,self__.fn1,meta29788__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29787.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29789){
var self__ = this;
var _29789__$1 = this;
return self__.meta29788;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29787.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29787.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29787.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29787.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29783_SHARP_){
return f1.call(null,(((p1__29783_SHARP_ == null))?null:self__.f.call(null,p1__29783_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29787.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29785","meta29785",-2107813117,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29784","cljs.core.async/t_cljs$core$async29784",-1287839542,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29788","meta29788",1381326310,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29787.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29787.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29787";

cljs.core.async.t_cljs$core$async29787.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__23910__auto__,writer__23911__auto__,opt__23912__auto__){
return cljs.core._write.call(null,writer__23911__auto__,"cljs.core.async/t_cljs$core$async29787");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29787 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29787(f__$1,ch__$1,meta29785__$1,___$2,fn1__$1,meta29788){
return (new cljs.core.async.t_cljs$core$async29787(f__$1,ch__$1,meta29785__$1,___$2,fn1__$1,meta29788));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29787(self__.f,self__.ch,self__.meta29785,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__23227__auto__ = ret;
if(cljs.core.truth_(and__23227__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__23227__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29784.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29784.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29784.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29785","meta29785",-2107813117,null)], null);
});

cljs.core.async.t_cljs$core$async29784.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29784.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29784";

cljs.core.async.t_cljs$core$async29784.cljs$lang$ctorPrWriter = (function (this__23910__auto__,writer__23911__auto__,opt__23912__auto__){
return cljs.core._write.call(null,writer__23911__auto__,"cljs.core.async/t_cljs$core$async29784");
});

cljs.core.async.__GT_t_cljs$core$async29784 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29784(f__$1,ch__$1,meta29785){
return (new cljs.core.async.t_cljs$core$async29784(f__$1,ch__$1,meta29785));
});

}

return (new cljs.core.async.t_cljs$core$async29784(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29790 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29790 = (function (f,ch,meta29791){
this.f = f;
this.ch = ch;
this.meta29791 = meta29791;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29792,meta29791__$1){
var self__ = this;
var _29792__$1 = this;
return (new cljs.core.async.t_cljs$core$async29790(self__.f,self__.ch,meta29791__$1));
});

cljs.core.async.t_cljs$core$async29790.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29792){
var self__ = this;
var _29792__$1 = this;
return self__.meta29791;
});

cljs.core.async.t_cljs$core$async29790.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29790.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29790.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29790.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29790.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29790.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29790.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29791","meta29791",-1328897608,null)], null);
});

cljs.core.async.t_cljs$core$async29790.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29790.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29790";

cljs.core.async.t_cljs$core$async29790.cljs$lang$ctorPrWriter = (function (this__23910__auto__,writer__23911__auto__,opt__23912__auto__){
return cljs.core._write.call(null,writer__23911__auto__,"cljs.core.async/t_cljs$core$async29790");
});

cljs.core.async.__GT_t_cljs$core$async29790 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29790(f__$1,ch__$1,meta29791){
return (new cljs.core.async.t_cljs$core$async29790(f__$1,ch__$1,meta29791));
});

}

return (new cljs.core.async.t_cljs$core$async29790(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29793 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29793 = (function (p,ch,meta29794){
this.p = p;
this.ch = ch;
this.meta29794 = meta29794;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29795,meta29794__$1){
var self__ = this;
var _29795__$1 = this;
return (new cljs.core.async.t_cljs$core$async29793(self__.p,self__.ch,meta29794__$1));
});

cljs.core.async.t_cljs$core$async29793.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29795){
var self__ = this;
var _29795__$1 = this;
return self__.meta29794;
});

cljs.core.async.t_cljs$core$async29793.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29793.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29793.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29793.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29793.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29793.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29793.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29793.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29794","meta29794",-1558328607,null)], null);
});

cljs.core.async.t_cljs$core$async29793.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29793.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29793";

cljs.core.async.t_cljs$core$async29793.cljs$lang$ctorPrWriter = (function (this__23910__auto__,writer__23911__auto__,opt__23912__auto__){
return cljs.core._write.call(null,writer__23911__auto__,"cljs.core.async/t_cljs$core$async29793");
});

cljs.core.async.__GT_t_cljs$core$async29793 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29793(p__$1,ch__$1,meta29794){
return (new cljs.core.async.t_cljs$core$async29793(p__$1,ch__$1,meta29794));
});

}

return (new cljs.core.async.t_cljs$core$async29793(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__29797 = arguments.length;
switch (G__29797) {
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
var c__28298__auto___29837 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28298__auto___29837,out){
return (function (){
var f__28299__auto__ = (function (){var switch__28208__auto__ = ((function (c__28298__auto___29837,out){
return (function (state_29818){
var state_val_29819 = (state_29818[(1)]);
if((state_val_29819 === (7))){
var inst_29814 = (state_29818[(2)]);
var state_29818__$1 = state_29818;
var statearr_29820_29838 = state_29818__$1;
(statearr_29820_29838[(2)] = inst_29814);

(statearr_29820_29838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (1))){
var state_29818__$1 = state_29818;
var statearr_29821_29839 = state_29818__$1;
(statearr_29821_29839[(2)] = null);

(statearr_29821_29839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (4))){
var inst_29800 = (state_29818[(7)]);
var inst_29800__$1 = (state_29818[(2)]);
var inst_29801 = (inst_29800__$1 == null);
var state_29818__$1 = (function (){var statearr_29822 = state_29818;
(statearr_29822[(7)] = inst_29800__$1);

return statearr_29822;
})();
if(cljs.core.truth_(inst_29801)){
var statearr_29823_29840 = state_29818__$1;
(statearr_29823_29840[(1)] = (5));

} else {
var statearr_29824_29841 = state_29818__$1;
(statearr_29824_29841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (6))){
var inst_29800 = (state_29818[(7)]);
var inst_29805 = p.call(null,inst_29800);
var state_29818__$1 = state_29818;
if(cljs.core.truth_(inst_29805)){
var statearr_29825_29842 = state_29818__$1;
(statearr_29825_29842[(1)] = (8));

} else {
var statearr_29826_29843 = state_29818__$1;
(statearr_29826_29843[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (3))){
var inst_29816 = (state_29818[(2)]);
var state_29818__$1 = state_29818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29818__$1,inst_29816);
} else {
if((state_val_29819 === (2))){
var state_29818__$1 = state_29818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29818__$1,(4),ch);
} else {
if((state_val_29819 === (11))){
var inst_29808 = (state_29818[(2)]);
var state_29818__$1 = state_29818;
var statearr_29827_29844 = state_29818__$1;
(statearr_29827_29844[(2)] = inst_29808);

(statearr_29827_29844[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (9))){
var state_29818__$1 = state_29818;
var statearr_29828_29845 = state_29818__$1;
(statearr_29828_29845[(2)] = null);

(statearr_29828_29845[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (5))){
var inst_29803 = cljs.core.async.close_BANG_.call(null,out);
var state_29818__$1 = state_29818;
var statearr_29829_29846 = state_29818__$1;
(statearr_29829_29846[(2)] = inst_29803);

(statearr_29829_29846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (10))){
var inst_29811 = (state_29818[(2)]);
var state_29818__$1 = (function (){var statearr_29830 = state_29818;
(statearr_29830[(8)] = inst_29811);

return statearr_29830;
})();
var statearr_29831_29847 = state_29818__$1;
(statearr_29831_29847[(2)] = null);

(statearr_29831_29847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (8))){
var inst_29800 = (state_29818[(7)]);
var state_29818__$1 = state_29818;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29818__$1,(11),out,inst_29800);
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
});})(c__28298__auto___29837,out))
;
return ((function (switch__28208__auto__,c__28298__auto___29837,out){
return (function() {
var cljs$core$async$state_machine__28209__auto__ = null;
var cljs$core$async$state_machine__28209__auto____0 = (function (){
var statearr_29832 = [null,null,null,null,null,null,null,null,null];
(statearr_29832[(0)] = cljs$core$async$state_machine__28209__auto__);

(statearr_29832[(1)] = (1));

return statearr_29832;
});
var cljs$core$async$state_machine__28209__auto____1 = (function (state_29818){
while(true){
var ret_value__28210__auto__ = (function (){try{while(true){
var result__28211__auto__ = switch__28208__auto__.call(null,state_29818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28211__auto__;
}
break;
}
}catch (e29833){if((e29833 instanceof Object)){
var ex__28212__auto__ = e29833;
var statearr_29834_29848 = state_29818;
(statearr_29834_29848[(5)] = ex__28212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29849 = state_29818;
state_29818 = G__29849;
continue;
} else {
return ret_value__28210__auto__;
}
break;
}
});
cljs$core$async$state_machine__28209__auto__ = function(state_29818){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28209__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28209__auto____1.call(this,state_29818);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28209__auto____0;
cljs$core$async$state_machine__28209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28209__auto____1;
return cljs$core$async$state_machine__28209__auto__;
})()
;})(switch__28208__auto__,c__28298__auto___29837,out))
})();
var state__28300__auto__ = (function (){var statearr_29835 = f__28299__auto__.call(null);
(statearr_29835[(6)] = c__28298__auto___29837);

return statearr_29835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28300__auto__);
});})(c__28298__auto___29837,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__29851 = arguments.length;
switch (G__29851) {
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
var c__28298__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28298__auto__){
return (function (){
var f__28299__auto__ = (function (){var switch__28208__auto__ = ((function (c__28298__auto__){
return (function (state_29914){
var state_val_29915 = (state_29914[(1)]);
if((state_val_29915 === (7))){
var inst_29910 = (state_29914[(2)]);
var state_29914__$1 = state_29914;
var statearr_29916_29954 = state_29914__$1;
(statearr_29916_29954[(2)] = inst_29910);

(statearr_29916_29954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (20))){
var inst_29880 = (state_29914[(7)]);
var inst_29891 = (state_29914[(2)]);
var inst_29892 = cljs.core.next.call(null,inst_29880);
var inst_29866 = inst_29892;
var inst_29867 = null;
var inst_29868 = (0);
var inst_29869 = (0);
var state_29914__$1 = (function (){var statearr_29917 = state_29914;
(statearr_29917[(8)] = inst_29891);

(statearr_29917[(9)] = inst_29869);

(statearr_29917[(10)] = inst_29867);

(statearr_29917[(11)] = inst_29866);

(statearr_29917[(12)] = inst_29868);

return statearr_29917;
})();
var statearr_29918_29955 = state_29914__$1;
(statearr_29918_29955[(2)] = null);

(statearr_29918_29955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (1))){
var state_29914__$1 = state_29914;
var statearr_29919_29956 = state_29914__$1;
(statearr_29919_29956[(2)] = null);

(statearr_29919_29956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (4))){
var inst_29855 = (state_29914[(13)]);
var inst_29855__$1 = (state_29914[(2)]);
var inst_29856 = (inst_29855__$1 == null);
var state_29914__$1 = (function (){var statearr_29920 = state_29914;
(statearr_29920[(13)] = inst_29855__$1);

return statearr_29920;
})();
if(cljs.core.truth_(inst_29856)){
var statearr_29921_29957 = state_29914__$1;
(statearr_29921_29957[(1)] = (5));

} else {
var statearr_29922_29958 = state_29914__$1;
(statearr_29922_29958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (15))){
var state_29914__$1 = state_29914;
var statearr_29926_29959 = state_29914__$1;
(statearr_29926_29959[(2)] = null);

(statearr_29926_29959[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (21))){
var state_29914__$1 = state_29914;
var statearr_29927_29960 = state_29914__$1;
(statearr_29927_29960[(2)] = null);

(statearr_29927_29960[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (13))){
var inst_29869 = (state_29914[(9)]);
var inst_29867 = (state_29914[(10)]);
var inst_29866 = (state_29914[(11)]);
var inst_29868 = (state_29914[(12)]);
var inst_29876 = (state_29914[(2)]);
var inst_29877 = (inst_29869 + (1));
var tmp29923 = inst_29867;
var tmp29924 = inst_29866;
var tmp29925 = inst_29868;
var inst_29866__$1 = tmp29924;
var inst_29867__$1 = tmp29923;
var inst_29868__$1 = tmp29925;
var inst_29869__$1 = inst_29877;
var state_29914__$1 = (function (){var statearr_29928 = state_29914;
(statearr_29928[(14)] = inst_29876);

(statearr_29928[(9)] = inst_29869__$1);

(statearr_29928[(10)] = inst_29867__$1);

(statearr_29928[(11)] = inst_29866__$1);

(statearr_29928[(12)] = inst_29868__$1);

return statearr_29928;
})();
var statearr_29929_29961 = state_29914__$1;
(statearr_29929_29961[(2)] = null);

(statearr_29929_29961[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (22))){
var state_29914__$1 = state_29914;
var statearr_29930_29962 = state_29914__$1;
(statearr_29930_29962[(2)] = null);

(statearr_29930_29962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (6))){
var inst_29855 = (state_29914[(13)]);
var inst_29864 = f.call(null,inst_29855);
var inst_29865 = cljs.core.seq.call(null,inst_29864);
var inst_29866 = inst_29865;
var inst_29867 = null;
var inst_29868 = (0);
var inst_29869 = (0);
var state_29914__$1 = (function (){var statearr_29931 = state_29914;
(statearr_29931[(9)] = inst_29869);

(statearr_29931[(10)] = inst_29867);

(statearr_29931[(11)] = inst_29866);

(statearr_29931[(12)] = inst_29868);

return statearr_29931;
})();
var statearr_29932_29963 = state_29914__$1;
(statearr_29932_29963[(2)] = null);

(statearr_29932_29963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (17))){
var inst_29880 = (state_29914[(7)]);
var inst_29884 = cljs.core.chunk_first.call(null,inst_29880);
var inst_29885 = cljs.core.chunk_rest.call(null,inst_29880);
var inst_29886 = cljs.core.count.call(null,inst_29884);
var inst_29866 = inst_29885;
var inst_29867 = inst_29884;
var inst_29868 = inst_29886;
var inst_29869 = (0);
var state_29914__$1 = (function (){var statearr_29933 = state_29914;
(statearr_29933[(9)] = inst_29869);

(statearr_29933[(10)] = inst_29867);

(statearr_29933[(11)] = inst_29866);

(statearr_29933[(12)] = inst_29868);

return statearr_29933;
})();
var statearr_29934_29964 = state_29914__$1;
(statearr_29934_29964[(2)] = null);

(statearr_29934_29964[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (3))){
var inst_29912 = (state_29914[(2)]);
var state_29914__$1 = state_29914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29914__$1,inst_29912);
} else {
if((state_val_29915 === (12))){
var inst_29900 = (state_29914[(2)]);
var state_29914__$1 = state_29914;
var statearr_29935_29965 = state_29914__$1;
(statearr_29935_29965[(2)] = inst_29900);

(statearr_29935_29965[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (2))){
var state_29914__$1 = state_29914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29914__$1,(4),in$);
} else {
if((state_val_29915 === (23))){
var inst_29908 = (state_29914[(2)]);
var state_29914__$1 = state_29914;
var statearr_29936_29966 = state_29914__$1;
(statearr_29936_29966[(2)] = inst_29908);

(statearr_29936_29966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (19))){
var inst_29895 = (state_29914[(2)]);
var state_29914__$1 = state_29914;
var statearr_29937_29967 = state_29914__$1;
(statearr_29937_29967[(2)] = inst_29895);

(statearr_29937_29967[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (11))){
var inst_29880 = (state_29914[(7)]);
var inst_29866 = (state_29914[(11)]);
var inst_29880__$1 = cljs.core.seq.call(null,inst_29866);
var state_29914__$1 = (function (){var statearr_29938 = state_29914;
(statearr_29938[(7)] = inst_29880__$1);

return statearr_29938;
})();
if(inst_29880__$1){
var statearr_29939_29968 = state_29914__$1;
(statearr_29939_29968[(1)] = (14));

} else {
var statearr_29940_29969 = state_29914__$1;
(statearr_29940_29969[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (9))){
var inst_29902 = (state_29914[(2)]);
var inst_29903 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29914__$1 = (function (){var statearr_29941 = state_29914;
(statearr_29941[(15)] = inst_29902);

return statearr_29941;
})();
if(cljs.core.truth_(inst_29903)){
var statearr_29942_29970 = state_29914__$1;
(statearr_29942_29970[(1)] = (21));

} else {
var statearr_29943_29971 = state_29914__$1;
(statearr_29943_29971[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (5))){
var inst_29858 = cljs.core.async.close_BANG_.call(null,out);
var state_29914__$1 = state_29914;
var statearr_29944_29972 = state_29914__$1;
(statearr_29944_29972[(2)] = inst_29858);

(statearr_29944_29972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (14))){
var inst_29880 = (state_29914[(7)]);
var inst_29882 = cljs.core.chunked_seq_QMARK_.call(null,inst_29880);
var state_29914__$1 = state_29914;
if(inst_29882){
var statearr_29945_29973 = state_29914__$1;
(statearr_29945_29973[(1)] = (17));

} else {
var statearr_29946_29974 = state_29914__$1;
(statearr_29946_29974[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (16))){
var inst_29898 = (state_29914[(2)]);
var state_29914__$1 = state_29914;
var statearr_29947_29975 = state_29914__$1;
(statearr_29947_29975[(2)] = inst_29898);

(statearr_29947_29975[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (10))){
var inst_29869 = (state_29914[(9)]);
var inst_29867 = (state_29914[(10)]);
var inst_29874 = cljs.core._nth.call(null,inst_29867,inst_29869);
var state_29914__$1 = state_29914;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29914__$1,(13),out,inst_29874);
} else {
if((state_val_29915 === (18))){
var inst_29880 = (state_29914[(7)]);
var inst_29889 = cljs.core.first.call(null,inst_29880);
var state_29914__$1 = state_29914;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29914__$1,(20),out,inst_29889);
} else {
if((state_val_29915 === (8))){
var inst_29869 = (state_29914[(9)]);
var inst_29868 = (state_29914[(12)]);
var inst_29871 = (inst_29869 < inst_29868);
var inst_29872 = inst_29871;
var state_29914__$1 = state_29914;
if(cljs.core.truth_(inst_29872)){
var statearr_29948_29976 = state_29914__$1;
(statearr_29948_29976[(1)] = (10));

} else {
var statearr_29949_29977 = state_29914__$1;
(statearr_29949_29977[(1)] = (11));

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
});})(c__28298__auto__))
;
return ((function (switch__28208__auto__,c__28298__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28209__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28209__auto____0 = (function (){
var statearr_29950 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29950[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28209__auto__);

(statearr_29950[(1)] = (1));

return statearr_29950;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28209__auto____1 = (function (state_29914){
while(true){
var ret_value__28210__auto__ = (function (){try{while(true){
var result__28211__auto__ = switch__28208__auto__.call(null,state_29914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28211__auto__;
}
break;
}
}catch (e29951){if((e29951 instanceof Object)){
var ex__28212__auto__ = e29951;
var statearr_29952_29978 = state_29914;
(statearr_29952_29978[(5)] = ex__28212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29979 = state_29914;
state_29914 = G__29979;
continue;
} else {
return ret_value__28210__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28209__auto__ = function(state_29914){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28209__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28209__auto____1.call(this,state_29914);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__28209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28209__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28209__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28209__auto__;
})()
;})(switch__28208__auto__,c__28298__auto__))
})();
var state__28300__auto__ = (function (){var statearr_29953 = f__28299__auto__.call(null);
(statearr_29953[(6)] = c__28298__auto__);

return statearr_29953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28300__auto__);
});})(c__28298__auto__))
);

return c__28298__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__29981 = arguments.length;
switch (G__29981) {
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
var G__29984 = arguments.length;
switch (G__29984) {
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
var G__29987 = arguments.length;
switch (G__29987) {
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
var c__28298__auto___30034 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28298__auto___30034,out){
return (function (){
var f__28299__auto__ = (function (){var switch__28208__auto__ = ((function (c__28298__auto___30034,out){
return (function (state_30011){
var state_val_30012 = (state_30011[(1)]);
if((state_val_30012 === (7))){
var inst_30006 = (state_30011[(2)]);
var state_30011__$1 = state_30011;
var statearr_30013_30035 = state_30011__$1;
(statearr_30013_30035[(2)] = inst_30006);

(statearr_30013_30035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30012 === (1))){
var inst_29988 = null;
var state_30011__$1 = (function (){var statearr_30014 = state_30011;
(statearr_30014[(7)] = inst_29988);

return statearr_30014;
})();
var statearr_30015_30036 = state_30011__$1;
(statearr_30015_30036[(2)] = null);

(statearr_30015_30036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30012 === (4))){
var inst_29991 = (state_30011[(8)]);
var inst_29991__$1 = (state_30011[(2)]);
var inst_29992 = (inst_29991__$1 == null);
var inst_29993 = cljs.core.not.call(null,inst_29992);
var state_30011__$1 = (function (){var statearr_30016 = state_30011;
(statearr_30016[(8)] = inst_29991__$1);

return statearr_30016;
})();
if(inst_29993){
var statearr_30017_30037 = state_30011__$1;
(statearr_30017_30037[(1)] = (5));

} else {
var statearr_30018_30038 = state_30011__$1;
(statearr_30018_30038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30012 === (6))){
var state_30011__$1 = state_30011;
var statearr_30019_30039 = state_30011__$1;
(statearr_30019_30039[(2)] = null);

(statearr_30019_30039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30012 === (3))){
var inst_30008 = (state_30011[(2)]);
var inst_30009 = cljs.core.async.close_BANG_.call(null,out);
var state_30011__$1 = (function (){var statearr_30020 = state_30011;
(statearr_30020[(9)] = inst_30008);

return statearr_30020;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30011__$1,inst_30009);
} else {
if((state_val_30012 === (2))){
var state_30011__$1 = state_30011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30011__$1,(4),ch);
} else {
if((state_val_30012 === (11))){
var inst_29991 = (state_30011[(8)]);
var inst_30000 = (state_30011[(2)]);
var inst_29988 = inst_29991;
var state_30011__$1 = (function (){var statearr_30021 = state_30011;
(statearr_30021[(7)] = inst_29988);

(statearr_30021[(10)] = inst_30000);

return statearr_30021;
})();
var statearr_30022_30040 = state_30011__$1;
(statearr_30022_30040[(2)] = null);

(statearr_30022_30040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30012 === (9))){
var inst_29991 = (state_30011[(8)]);
var state_30011__$1 = state_30011;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30011__$1,(11),out,inst_29991);
} else {
if((state_val_30012 === (5))){
var inst_29991 = (state_30011[(8)]);
var inst_29988 = (state_30011[(7)]);
var inst_29995 = cljs.core._EQ_.call(null,inst_29991,inst_29988);
var state_30011__$1 = state_30011;
if(inst_29995){
var statearr_30024_30041 = state_30011__$1;
(statearr_30024_30041[(1)] = (8));

} else {
var statearr_30025_30042 = state_30011__$1;
(statearr_30025_30042[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30012 === (10))){
var inst_30003 = (state_30011[(2)]);
var state_30011__$1 = state_30011;
var statearr_30026_30043 = state_30011__$1;
(statearr_30026_30043[(2)] = inst_30003);

(statearr_30026_30043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30012 === (8))){
var inst_29988 = (state_30011[(7)]);
var tmp30023 = inst_29988;
var inst_29988__$1 = tmp30023;
var state_30011__$1 = (function (){var statearr_30027 = state_30011;
(statearr_30027[(7)] = inst_29988__$1);

return statearr_30027;
})();
var statearr_30028_30044 = state_30011__$1;
(statearr_30028_30044[(2)] = null);

(statearr_30028_30044[(1)] = (2));


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
});})(c__28298__auto___30034,out))
;
return ((function (switch__28208__auto__,c__28298__auto___30034,out){
return (function() {
var cljs$core$async$state_machine__28209__auto__ = null;
var cljs$core$async$state_machine__28209__auto____0 = (function (){
var statearr_30029 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30029[(0)] = cljs$core$async$state_machine__28209__auto__);

(statearr_30029[(1)] = (1));

return statearr_30029;
});
var cljs$core$async$state_machine__28209__auto____1 = (function (state_30011){
while(true){
var ret_value__28210__auto__ = (function (){try{while(true){
var result__28211__auto__ = switch__28208__auto__.call(null,state_30011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28211__auto__;
}
break;
}
}catch (e30030){if((e30030 instanceof Object)){
var ex__28212__auto__ = e30030;
var statearr_30031_30045 = state_30011;
(statearr_30031_30045[(5)] = ex__28212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30046 = state_30011;
state_30011 = G__30046;
continue;
} else {
return ret_value__28210__auto__;
}
break;
}
});
cljs$core$async$state_machine__28209__auto__ = function(state_30011){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28209__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28209__auto____1.call(this,state_30011);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28209__auto____0;
cljs$core$async$state_machine__28209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28209__auto____1;
return cljs$core$async$state_machine__28209__auto__;
})()
;})(switch__28208__auto__,c__28298__auto___30034,out))
})();
var state__28300__auto__ = (function (){var statearr_30032 = f__28299__auto__.call(null);
(statearr_30032[(6)] = c__28298__auto___30034);

return statearr_30032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28300__auto__);
});})(c__28298__auto___30034,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__30048 = arguments.length;
switch (G__30048) {
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
var c__28298__auto___30114 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28298__auto___30114,out){
return (function (){
var f__28299__auto__ = (function (){var switch__28208__auto__ = ((function (c__28298__auto___30114,out){
return (function (state_30086){
var state_val_30087 = (state_30086[(1)]);
if((state_val_30087 === (7))){
var inst_30082 = (state_30086[(2)]);
var state_30086__$1 = state_30086;
var statearr_30088_30115 = state_30086__$1;
(statearr_30088_30115[(2)] = inst_30082);

(statearr_30088_30115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30087 === (1))){
var inst_30049 = (new Array(n));
var inst_30050 = inst_30049;
var inst_30051 = (0);
var state_30086__$1 = (function (){var statearr_30089 = state_30086;
(statearr_30089[(7)] = inst_30050);

(statearr_30089[(8)] = inst_30051);

return statearr_30089;
})();
var statearr_30090_30116 = state_30086__$1;
(statearr_30090_30116[(2)] = null);

(statearr_30090_30116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30087 === (4))){
var inst_30054 = (state_30086[(9)]);
var inst_30054__$1 = (state_30086[(2)]);
var inst_30055 = (inst_30054__$1 == null);
var inst_30056 = cljs.core.not.call(null,inst_30055);
var state_30086__$1 = (function (){var statearr_30091 = state_30086;
(statearr_30091[(9)] = inst_30054__$1);

return statearr_30091;
})();
if(inst_30056){
var statearr_30092_30117 = state_30086__$1;
(statearr_30092_30117[(1)] = (5));

} else {
var statearr_30093_30118 = state_30086__$1;
(statearr_30093_30118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30087 === (15))){
var inst_30076 = (state_30086[(2)]);
var state_30086__$1 = state_30086;
var statearr_30094_30119 = state_30086__$1;
(statearr_30094_30119[(2)] = inst_30076);

(statearr_30094_30119[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30087 === (13))){
var state_30086__$1 = state_30086;
var statearr_30095_30120 = state_30086__$1;
(statearr_30095_30120[(2)] = null);

(statearr_30095_30120[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30087 === (6))){
var inst_30051 = (state_30086[(8)]);
var inst_30072 = (inst_30051 > (0));
var state_30086__$1 = state_30086;
if(cljs.core.truth_(inst_30072)){
var statearr_30096_30121 = state_30086__$1;
(statearr_30096_30121[(1)] = (12));

} else {
var statearr_30097_30122 = state_30086__$1;
(statearr_30097_30122[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30087 === (3))){
var inst_30084 = (state_30086[(2)]);
var state_30086__$1 = state_30086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30086__$1,inst_30084);
} else {
if((state_val_30087 === (12))){
var inst_30050 = (state_30086[(7)]);
var inst_30074 = cljs.core.vec.call(null,inst_30050);
var state_30086__$1 = state_30086;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30086__$1,(15),out,inst_30074);
} else {
if((state_val_30087 === (2))){
var state_30086__$1 = state_30086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30086__$1,(4),ch);
} else {
if((state_val_30087 === (11))){
var inst_30066 = (state_30086[(2)]);
var inst_30067 = (new Array(n));
var inst_30050 = inst_30067;
var inst_30051 = (0);
var state_30086__$1 = (function (){var statearr_30098 = state_30086;
(statearr_30098[(10)] = inst_30066);

(statearr_30098[(7)] = inst_30050);

(statearr_30098[(8)] = inst_30051);

return statearr_30098;
})();
var statearr_30099_30123 = state_30086__$1;
(statearr_30099_30123[(2)] = null);

(statearr_30099_30123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30087 === (9))){
var inst_30050 = (state_30086[(7)]);
var inst_30064 = cljs.core.vec.call(null,inst_30050);
var state_30086__$1 = state_30086;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30086__$1,(11),out,inst_30064);
} else {
if((state_val_30087 === (5))){
var inst_30050 = (state_30086[(7)]);
var inst_30051 = (state_30086[(8)]);
var inst_30059 = (state_30086[(11)]);
var inst_30054 = (state_30086[(9)]);
var inst_30058 = (inst_30050[inst_30051] = inst_30054);
var inst_30059__$1 = (inst_30051 + (1));
var inst_30060 = (inst_30059__$1 < n);
var state_30086__$1 = (function (){var statearr_30100 = state_30086;
(statearr_30100[(12)] = inst_30058);

(statearr_30100[(11)] = inst_30059__$1);

return statearr_30100;
})();
if(cljs.core.truth_(inst_30060)){
var statearr_30101_30124 = state_30086__$1;
(statearr_30101_30124[(1)] = (8));

} else {
var statearr_30102_30125 = state_30086__$1;
(statearr_30102_30125[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30087 === (14))){
var inst_30079 = (state_30086[(2)]);
var inst_30080 = cljs.core.async.close_BANG_.call(null,out);
var state_30086__$1 = (function (){var statearr_30104 = state_30086;
(statearr_30104[(13)] = inst_30079);

return statearr_30104;
})();
var statearr_30105_30126 = state_30086__$1;
(statearr_30105_30126[(2)] = inst_30080);

(statearr_30105_30126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30087 === (10))){
var inst_30070 = (state_30086[(2)]);
var state_30086__$1 = state_30086;
var statearr_30106_30127 = state_30086__$1;
(statearr_30106_30127[(2)] = inst_30070);

(statearr_30106_30127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30087 === (8))){
var inst_30050 = (state_30086[(7)]);
var inst_30059 = (state_30086[(11)]);
var tmp30103 = inst_30050;
var inst_30050__$1 = tmp30103;
var inst_30051 = inst_30059;
var state_30086__$1 = (function (){var statearr_30107 = state_30086;
(statearr_30107[(7)] = inst_30050__$1);

(statearr_30107[(8)] = inst_30051);

return statearr_30107;
})();
var statearr_30108_30128 = state_30086__$1;
(statearr_30108_30128[(2)] = null);

(statearr_30108_30128[(1)] = (2));


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
});})(c__28298__auto___30114,out))
;
return ((function (switch__28208__auto__,c__28298__auto___30114,out){
return (function() {
var cljs$core$async$state_machine__28209__auto__ = null;
var cljs$core$async$state_machine__28209__auto____0 = (function (){
var statearr_30109 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30109[(0)] = cljs$core$async$state_machine__28209__auto__);

(statearr_30109[(1)] = (1));

return statearr_30109;
});
var cljs$core$async$state_machine__28209__auto____1 = (function (state_30086){
while(true){
var ret_value__28210__auto__ = (function (){try{while(true){
var result__28211__auto__ = switch__28208__auto__.call(null,state_30086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28211__auto__;
}
break;
}
}catch (e30110){if((e30110 instanceof Object)){
var ex__28212__auto__ = e30110;
var statearr_30111_30129 = state_30086;
(statearr_30111_30129[(5)] = ex__28212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30130 = state_30086;
state_30086 = G__30130;
continue;
} else {
return ret_value__28210__auto__;
}
break;
}
});
cljs$core$async$state_machine__28209__auto__ = function(state_30086){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28209__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28209__auto____1.call(this,state_30086);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28209__auto____0;
cljs$core$async$state_machine__28209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28209__auto____1;
return cljs$core$async$state_machine__28209__auto__;
})()
;})(switch__28208__auto__,c__28298__auto___30114,out))
})();
var state__28300__auto__ = (function (){var statearr_30112 = f__28299__auto__.call(null);
(statearr_30112[(6)] = c__28298__auto___30114);

return statearr_30112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28300__auto__);
});})(c__28298__auto___30114,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__30132 = arguments.length;
switch (G__30132) {
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
var c__28298__auto___30202 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28298__auto___30202,out){
return (function (){
var f__28299__auto__ = (function (){var switch__28208__auto__ = ((function (c__28298__auto___30202,out){
return (function (state_30174){
var state_val_30175 = (state_30174[(1)]);
if((state_val_30175 === (7))){
var inst_30170 = (state_30174[(2)]);
var state_30174__$1 = state_30174;
var statearr_30176_30203 = state_30174__$1;
(statearr_30176_30203[(2)] = inst_30170);

(statearr_30176_30203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (1))){
var inst_30133 = [];
var inst_30134 = inst_30133;
var inst_30135 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30174__$1 = (function (){var statearr_30177 = state_30174;
(statearr_30177[(7)] = inst_30134);

(statearr_30177[(8)] = inst_30135);

return statearr_30177;
})();
var statearr_30178_30204 = state_30174__$1;
(statearr_30178_30204[(2)] = null);

(statearr_30178_30204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (4))){
var inst_30138 = (state_30174[(9)]);
var inst_30138__$1 = (state_30174[(2)]);
var inst_30139 = (inst_30138__$1 == null);
var inst_30140 = cljs.core.not.call(null,inst_30139);
var state_30174__$1 = (function (){var statearr_30179 = state_30174;
(statearr_30179[(9)] = inst_30138__$1);

return statearr_30179;
})();
if(inst_30140){
var statearr_30180_30205 = state_30174__$1;
(statearr_30180_30205[(1)] = (5));

} else {
var statearr_30181_30206 = state_30174__$1;
(statearr_30181_30206[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (15))){
var inst_30164 = (state_30174[(2)]);
var state_30174__$1 = state_30174;
var statearr_30182_30207 = state_30174__$1;
(statearr_30182_30207[(2)] = inst_30164);

(statearr_30182_30207[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (13))){
var state_30174__$1 = state_30174;
var statearr_30183_30208 = state_30174__$1;
(statearr_30183_30208[(2)] = null);

(statearr_30183_30208[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (6))){
var inst_30134 = (state_30174[(7)]);
var inst_30159 = inst_30134.length;
var inst_30160 = (inst_30159 > (0));
var state_30174__$1 = state_30174;
if(cljs.core.truth_(inst_30160)){
var statearr_30184_30209 = state_30174__$1;
(statearr_30184_30209[(1)] = (12));

} else {
var statearr_30185_30210 = state_30174__$1;
(statearr_30185_30210[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (3))){
var inst_30172 = (state_30174[(2)]);
var state_30174__$1 = state_30174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30174__$1,inst_30172);
} else {
if((state_val_30175 === (12))){
var inst_30134 = (state_30174[(7)]);
var inst_30162 = cljs.core.vec.call(null,inst_30134);
var state_30174__$1 = state_30174;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30174__$1,(15),out,inst_30162);
} else {
if((state_val_30175 === (2))){
var state_30174__$1 = state_30174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30174__$1,(4),ch);
} else {
if((state_val_30175 === (11))){
var inst_30138 = (state_30174[(9)]);
var inst_30142 = (state_30174[(10)]);
var inst_30152 = (state_30174[(2)]);
var inst_30153 = [];
var inst_30154 = inst_30153.push(inst_30138);
var inst_30134 = inst_30153;
var inst_30135 = inst_30142;
var state_30174__$1 = (function (){var statearr_30186 = state_30174;
(statearr_30186[(11)] = inst_30154);

(statearr_30186[(7)] = inst_30134);

(statearr_30186[(12)] = inst_30152);

(statearr_30186[(8)] = inst_30135);

return statearr_30186;
})();
var statearr_30187_30211 = state_30174__$1;
(statearr_30187_30211[(2)] = null);

(statearr_30187_30211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (9))){
var inst_30134 = (state_30174[(7)]);
var inst_30150 = cljs.core.vec.call(null,inst_30134);
var state_30174__$1 = state_30174;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30174__$1,(11),out,inst_30150);
} else {
if((state_val_30175 === (5))){
var inst_30138 = (state_30174[(9)]);
var inst_30142 = (state_30174[(10)]);
var inst_30135 = (state_30174[(8)]);
var inst_30142__$1 = f.call(null,inst_30138);
var inst_30143 = cljs.core._EQ_.call(null,inst_30142__$1,inst_30135);
var inst_30144 = cljs.core.keyword_identical_QMARK_.call(null,inst_30135,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30145 = (inst_30143) || (inst_30144);
var state_30174__$1 = (function (){var statearr_30188 = state_30174;
(statearr_30188[(10)] = inst_30142__$1);

return statearr_30188;
})();
if(cljs.core.truth_(inst_30145)){
var statearr_30189_30212 = state_30174__$1;
(statearr_30189_30212[(1)] = (8));

} else {
var statearr_30190_30213 = state_30174__$1;
(statearr_30190_30213[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (14))){
var inst_30167 = (state_30174[(2)]);
var inst_30168 = cljs.core.async.close_BANG_.call(null,out);
var state_30174__$1 = (function (){var statearr_30192 = state_30174;
(statearr_30192[(13)] = inst_30167);

return statearr_30192;
})();
var statearr_30193_30214 = state_30174__$1;
(statearr_30193_30214[(2)] = inst_30168);

(statearr_30193_30214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (10))){
var inst_30157 = (state_30174[(2)]);
var state_30174__$1 = state_30174;
var statearr_30194_30215 = state_30174__$1;
(statearr_30194_30215[(2)] = inst_30157);

(statearr_30194_30215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (8))){
var inst_30138 = (state_30174[(9)]);
var inst_30142 = (state_30174[(10)]);
var inst_30134 = (state_30174[(7)]);
var inst_30147 = inst_30134.push(inst_30138);
var tmp30191 = inst_30134;
var inst_30134__$1 = tmp30191;
var inst_30135 = inst_30142;
var state_30174__$1 = (function (){var statearr_30195 = state_30174;
(statearr_30195[(14)] = inst_30147);

(statearr_30195[(7)] = inst_30134__$1);

(statearr_30195[(8)] = inst_30135);

return statearr_30195;
})();
var statearr_30196_30216 = state_30174__$1;
(statearr_30196_30216[(2)] = null);

(statearr_30196_30216[(1)] = (2));


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
});})(c__28298__auto___30202,out))
;
return ((function (switch__28208__auto__,c__28298__auto___30202,out){
return (function() {
var cljs$core$async$state_machine__28209__auto__ = null;
var cljs$core$async$state_machine__28209__auto____0 = (function (){
var statearr_30197 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30197[(0)] = cljs$core$async$state_machine__28209__auto__);

(statearr_30197[(1)] = (1));

return statearr_30197;
});
var cljs$core$async$state_machine__28209__auto____1 = (function (state_30174){
while(true){
var ret_value__28210__auto__ = (function (){try{while(true){
var result__28211__auto__ = switch__28208__auto__.call(null,state_30174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28211__auto__;
}
break;
}
}catch (e30198){if((e30198 instanceof Object)){
var ex__28212__auto__ = e30198;
var statearr_30199_30217 = state_30174;
(statearr_30199_30217[(5)] = ex__28212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30218 = state_30174;
state_30174 = G__30218;
continue;
} else {
return ret_value__28210__auto__;
}
break;
}
});
cljs$core$async$state_machine__28209__auto__ = function(state_30174){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28209__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28209__auto____1.call(this,state_30174);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28209__auto____0;
cljs$core$async$state_machine__28209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28209__auto____1;
return cljs$core$async$state_machine__28209__auto__;
})()
;})(switch__28208__auto__,c__28298__auto___30202,out))
})();
var state__28300__auto__ = (function (){var statearr_30200 = f__28299__auto__.call(null);
(statearr_30200[(6)] = c__28298__auto___30202);

return statearr_30200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28300__auto__);
});})(c__28298__auto___30202,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
