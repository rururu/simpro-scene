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
var G__23203 = arguments.length;
switch (G__23203) {
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
if(typeof cljs.core.async.t_cljs$core$async23204 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23204 = (function (f,blockable,meta23205){
this.f = f;
this.blockable = blockable;
this.meta23205 = meta23205;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23204.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23206,meta23205__$1){
var self__ = this;
var _23206__$1 = this;
return (new cljs.core.async.t_cljs$core$async23204(self__.f,self__.blockable,meta23205__$1));
});

cljs.core.async.t_cljs$core$async23204.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23206){
var self__ = this;
var _23206__$1 = this;
return self__.meta23205;
});

cljs.core.async.t_cljs$core$async23204.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23204.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23204.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23204.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23204.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23205","meta23205",-511105207,null)], null);
});

cljs.core.async.t_cljs$core$async23204.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23204.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23204";

cljs.core.async.t_cljs$core$async23204.cljs$lang$ctorPrWriter = (function (this__18743__auto__,writer__18744__auto__,opt__18745__auto__){
return cljs.core._write.call(null,writer__18744__auto__,"cljs.core.async/t_cljs$core$async23204");
});

cljs.core.async.__GT_t_cljs$core$async23204 = (function cljs$core$async$__GT_t_cljs$core$async23204(f__$1,blockable__$1,meta23205){
return (new cljs.core.async.t_cljs$core$async23204(f__$1,blockable__$1,meta23205));
});

}

return (new cljs.core.async.t_cljs$core$async23204(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__23210 = arguments.length;
switch (G__23210) {
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
var G__23213 = arguments.length;
switch (G__23213) {
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
var G__23216 = arguments.length;
switch (G__23216) {
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
var val_23218 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23218);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23218,ret){
return (function (){
return fn1.call(null,val_23218);
});})(val_23218,ret))
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
var G__23220 = arguments.length;
switch (G__23220) {
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
var n__19117__auto___23222 = n;
var x_23223 = (0);
while(true){
if((x_23223 < n__19117__auto___23222)){
(a[x_23223] = (0));

var G__23224 = (x_23223 + (1));
x_23223 = G__23224;
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

var G__23225 = (i + (1));
i = G__23225;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async23226 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23226 = (function (flag,meta23227){
this.flag = flag;
this.meta23227 = meta23227;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23228,meta23227__$1){
var self__ = this;
var _23228__$1 = this;
return (new cljs.core.async.t_cljs$core$async23226(self__.flag,meta23227__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23226.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23228){
var self__ = this;
var _23228__$1 = this;
return self__.meta23227;
});})(flag))
;

cljs.core.async.t_cljs$core$async23226.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23226.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23226.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23226.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23226.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23227","meta23227",2114996209,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23226.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23226.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23226";

cljs.core.async.t_cljs$core$async23226.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18743__auto__,writer__18744__auto__,opt__18745__auto__){
return cljs.core._write.call(null,writer__18744__auto__,"cljs.core.async/t_cljs$core$async23226");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async23226 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23226(flag__$1,meta23227){
return (new cljs.core.async.t_cljs$core$async23226(flag__$1,meta23227));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23226(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async23229 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23229 = (function (flag,cb,meta23230){
this.flag = flag;
this.cb = cb;
this.meta23230 = meta23230;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23231,meta23230__$1){
var self__ = this;
var _23231__$1 = this;
return (new cljs.core.async.t_cljs$core$async23229(self__.flag,self__.cb,meta23230__$1));
});

cljs.core.async.t_cljs$core$async23229.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23231){
var self__ = this;
var _23231__$1 = this;
return self__.meta23230;
});

cljs.core.async.t_cljs$core$async23229.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23229.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23229.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23229.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23229.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23230","meta23230",1942296776,null)], null);
});

cljs.core.async.t_cljs$core$async23229.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23229.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23229";

cljs.core.async.t_cljs$core$async23229.cljs$lang$ctorPrWriter = (function (this__18743__auto__,writer__18744__auto__,opt__18745__auto__){
return cljs.core._write.call(null,writer__18744__auto__,"cljs.core.async/t_cljs$core$async23229");
});

cljs.core.async.__GT_t_cljs$core$async23229 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23229(flag__$1,cb__$1,meta23230){
return (new cljs.core.async.t_cljs$core$async23229(flag__$1,cb__$1,meta23230));
});

}

return (new cljs.core.async.t_cljs$core$async23229(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__23232_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23232_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23233_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23233_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18072__auto__ = wport;
if(cljs.core.truth_(or__18072__auto__)){
return or__18072__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23234 = (i + (1));
i = G__23234;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18072__auto__ = ret;
if(cljs.core.truth_(or__18072__auto__)){
return or__18072__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__18060__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18060__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18060__auto__;
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
var args__19358__auto__ = [];
var len__19351__auto___23240 = arguments.length;
var i__19352__auto___23241 = (0);
while(true){
if((i__19352__auto___23241 < len__19351__auto___23240)){
args__19358__auto__.push((arguments[i__19352__auto___23241]));

var G__23242 = (i__19352__auto___23241 + (1));
i__19352__auto___23241 = G__23242;
continue;
} else {
}
break;
}

var argseq__19359__auto__ = ((((1) < args__19358__auto__.length))?(new cljs.core.IndexedSeq(args__19358__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19359__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23237){
var map__23238 = p__23237;
var map__23238__$1 = ((((!((map__23238 == null)))?((((map__23238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23238.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23238):map__23238);
var opts = map__23238__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23235){
var G__23236 = cljs.core.first.call(null,seq23235);
var seq23235__$1 = cljs.core.next.call(null,seq23235);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23236,seq23235__$1);
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
var G__23244 = arguments.length;
switch (G__23244) {
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
var c__23143__auto___23290 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto___23290){
return (function (){
var f__23144__auto__ = (function (){var switch__23053__auto__ = ((function (c__23143__auto___23290){
return (function (state_23268){
var state_val_23269 = (state_23268[(1)]);
if((state_val_23269 === (7))){
var inst_23264 = (state_23268[(2)]);
var state_23268__$1 = state_23268;
var statearr_23270_23291 = state_23268__$1;
(statearr_23270_23291[(2)] = inst_23264);

(statearr_23270_23291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23269 === (1))){
var state_23268__$1 = state_23268;
var statearr_23271_23292 = state_23268__$1;
(statearr_23271_23292[(2)] = null);

(statearr_23271_23292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23269 === (4))){
var inst_23247 = (state_23268[(7)]);
var inst_23247__$1 = (state_23268[(2)]);
var inst_23248 = (inst_23247__$1 == null);
var state_23268__$1 = (function (){var statearr_23272 = state_23268;
(statearr_23272[(7)] = inst_23247__$1);

return statearr_23272;
})();
if(cljs.core.truth_(inst_23248)){
var statearr_23273_23293 = state_23268__$1;
(statearr_23273_23293[(1)] = (5));

} else {
var statearr_23274_23294 = state_23268__$1;
(statearr_23274_23294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23269 === (13))){
var state_23268__$1 = state_23268;
var statearr_23275_23295 = state_23268__$1;
(statearr_23275_23295[(2)] = null);

(statearr_23275_23295[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23269 === (6))){
var inst_23247 = (state_23268[(7)]);
var state_23268__$1 = state_23268;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23268__$1,(11),to,inst_23247);
} else {
if((state_val_23269 === (3))){
var inst_23266 = (state_23268[(2)]);
var state_23268__$1 = state_23268;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23268__$1,inst_23266);
} else {
if((state_val_23269 === (12))){
var state_23268__$1 = state_23268;
var statearr_23276_23296 = state_23268__$1;
(statearr_23276_23296[(2)] = null);

(statearr_23276_23296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23269 === (2))){
var state_23268__$1 = state_23268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23268__$1,(4),from);
} else {
if((state_val_23269 === (11))){
var inst_23257 = (state_23268[(2)]);
var state_23268__$1 = state_23268;
if(cljs.core.truth_(inst_23257)){
var statearr_23277_23297 = state_23268__$1;
(statearr_23277_23297[(1)] = (12));

} else {
var statearr_23278_23298 = state_23268__$1;
(statearr_23278_23298[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23269 === (9))){
var state_23268__$1 = state_23268;
var statearr_23279_23299 = state_23268__$1;
(statearr_23279_23299[(2)] = null);

(statearr_23279_23299[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23269 === (5))){
var state_23268__$1 = state_23268;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23280_23300 = state_23268__$1;
(statearr_23280_23300[(1)] = (8));

} else {
var statearr_23281_23301 = state_23268__$1;
(statearr_23281_23301[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23269 === (14))){
var inst_23262 = (state_23268[(2)]);
var state_23268__$1 = state_23268;
var statearr_23282_23302 = state_23268__$1;
(statearr_23282_23302[(2)] = inst_23262);

(statearr_23282_23302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23269 === (10))){
var inst_23254 = (state_23268[(2)]);
var state_23268__$1 = state_23268;
var statearr_23283_23303 = state_23268__$1;
(statearr_23283_23303[(2)] = inst_23254);

(statearr_23283_23303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23269 === (8))){
var inst_23251 = cljs.core.async.close_BANG_.call(null,to);
var state_23268__$1 = state_23268;
var statearr_23284_23304 = state_23268__$1;
(statearr_23284_23304[(2)] = inst_23251);

(statearr_23284_23304[(1)] = (10));


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
});})(c__23143__auto___23290))
;
return ((function (switch__23053__auto__,c__23143__auto___23290){
return (function() {
var cljs$core$async$state_machine__23054__auto__ = null;
var cljs$core$async$state_machine__23054__auto____0 = (function (){
var statearr_23285 = [null,null,null,null,null,null,null,null];
(statearr_23285[(0)] = cljs$core$async$state_machine__23054__auto__);

(statearr_23285[(1)] = (1));

return statearr_23285;
});
var cljs$core$async$state_machine__23054__auto____1 = (function (state_23268){
while(true){
var ret_value__23055__auto__ = (function (){try{while(true){
var result__23056__auto__ = switch__23053__auto__.call(null,state_23268);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23056__auto__;
}
break;
}
}catch (e23286){if((e23286 instanceof Object)){
var ex__23057__auto__ = e23286;
var statearr_23287_23305 = state_23268;
(statearr_23287_23305[(5)] = ex__23057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23286;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23306 = state_23268;
state_23268 = G__23306;
continue;
} else {
return ret_value__23055__auto__;
}
break;
}
});
cljs$core$async$state_machine__23054__auto__ = function(state_23268){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23054__auto____1.call(this,state_23268);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23054__auto____0;
cljs$core$async$state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23054__auto____1;
return cljs$core$async$state_machine__23054__auto__;
})()
;})(switch__23053__auto__,c__23143__auto___23290))
})();
var state__23145__auto__ = (function (){var statearr_23288 = f__23144__auto__.call(null);
(statearr_23288[(6)] = c__23143__auto___23290);

return statearr_23288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto___23290))
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
return (function (p__23307){
var vec__23308 = p__23307;
var v = cljs.core.nth.call(null,vec__23308,(0),null);
var p = cljs.core.nth.call(null,vec__23308,(1),null);
var job = vec__23308;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23143__auto___23479 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto___23479,res,vec__23308,v,p,job,jobs,results){
return (function (){
var f__23144__auto__ = (function (){var switch__23053__auto__ = ((function (c__23143__auto___23479,res,vec__23308,v,p,job,jobs,results){
return (function (state_23315){
var state_val_23316 = (state_23315[(1)]);
if((state_val_23316 === (1))){
var state_23315__$1 = state_23315;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23315__$1,(2),res,v);
} else {
if((state_val_23316 === (2))){
var inst_23312 = (state_23315[(2)]);
var inst_23313 = cljs.core.async.close_BANG_.call(null,res);
var state_23315__$1 = (function (){var statearr_23317 = state_23315;
(statearr_23317[(7)] = inst_23312);

return statearr_23317;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23315__$1,inst_23313);
} else {
return null;
}
}
});})(c__23143__auto___23479,res,vec__23308,v,p,job,jobs,results))
;
return ((function (switch__23053__auto__,c__23143__auto___23479,res,vec__23308,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23054__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23054__auto____0 = (function (){
var statearr_23318 = [null,null,null,null,null,null,null,null];
(statearr_23318[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23054__auto__);

(statearr_23318[(1)] = (1));

return statearr_23318;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23054__auto____1 = (function (state_23315){
while(true){
var ret_value__23055__auto__ = (function (){try{while(true){
var result__23056__auto__ = switch__23053__auto__.call(null,state_23315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23056__auto__;
}
break;
}
}catch (e23319){if((e23319 instanceof Object)){
var ex__23057__auto__ = e23319;
var statearr_23320_23480 = state_23315;
(statearr_23320_23480[(5)] = ex__23057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23481 = state_23315;
state_23315 = G__23481;
continue;
} else {
return ret_value__23055__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23054__auto__ = function(state_23315){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23054__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23054__auto____1.call(this,state_23315);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23054__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23054__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23054__auto__;
})()
;})(switch__23053__auto__,c__23143__auto___23479,res,vec__23308,v,p,job,jobs,results))
})();
var state__23145__auto__ = (function (){var statearr_23321 = f__23144__auto__.call(null);
(statearr_23321[(6)] = c__23143__auto___23479);

return statearr_23321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto___23479,res,vec__23308,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23322){
var vec__23323 = p__23322;
var v = cljs.core.nth.call(null,vec__23323,(0),null);
var p = cljs.core.nth.call(null,vec__23323,(1),null);
var job = vec__23323;
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
var n__19117__auto___23482 = n;
var __23483 = (0);
while(true){
if((__23483 < n__19117__auto___23482)){
var G__23326_23484 = type;
var G__23326_23485__$1 = (((G__23326_23484 instanceof cljs.core.Keyword))?G__23326_23484.fqn:null);
switch (G__23326_23485__$1) {
case "compute":
var c__23143__auto___23487 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23483,c__23143__auto___23487,G__23326_23484,G__23326_23485__$1,n__19117__auto___23482,jobs,results,process,async){
return (function (){
var f__23144__auto__ = (function (){var switch__23053__auto__ = ((function (__23483,c__23143__auto___23487,G__23326_23484,G__23326_23485__$1,n__19117__auto___23482,jobs,results,process,async){
return (function (state_23339){
var state_val_23340 = (state_23339[(1)]);
if((state_val_23340 === (1))){
var state_23339__$1 = state_23339;
var statearr_23341_23488 = state_23339__$1;
(statearr_23341_23488[(2)] = null);

(statearr_23341_23488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23340 === (2))){
var state_23339__$1 = state_23339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23339__$1,(4),jobs);
} else {
if((state_val_23340 === (3))){
var inst_23337 = (state_23339[(2)]);
var state_23339__$1 = state_23339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23339__$1,inst_23337);
} else {
if((state_val_23340 === (4))){
var inst_23329 = (state_23339[(2)]);
var inst_23330 = process.call(null,inst_23329);
var state_23339__$1 = state_23339;
if(cljs.core.truth_(inst_23330)){
var statearr_23342_23489 = state_23339__$1;
(statearr_23342_23489[(1)] = (5));

} else {
var statearr_23343_23490 = state_23339__$1;
(statearr_23343_23490[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23340 === (5))){
var state_23339__$1 = state_23339;
var statearr_23344_23491 = state_23339__$1;
(statearr_23344_23491[(2)] = null);

(statearr_23344_23491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23340 === (6))){
var state_23339__$1 = state_23339;
var statearr_23345_23492 = state_23339__$1;
(statearr_23345_23492[(2)] = null);

(statearr_23345_23492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23340 === (7))){
var inst_23335 = (state_23339[(2)]);
var state_23339__$1 = state_23339;
var statearr_23346_23493 = state_23339__$1;
(statearr_23346_23493[(2)] = inst_23335);

(statearr_23346_23493[(1)] = (3));


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
});})(__23483,c__23143__auto___23487,G__23326_23484,G__23326_23485__$1,n__19117__auto___23482,jobs,results,process,async))
;
return ((function (__23483,switch__23053__auto__,c__23143__auto___23487,G__23326_23484,G__23326_23485__$1,n__19117__auto___23482,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23054__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23054__auto____0 = (function (){
var statearr_23347 = [null,null,null,null,null,null,null];
(statearr_23347[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23054__auto__);

(statearr_23347[(1)] = (1));

return statearr_23347;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23054__auto____1 = (function (state_23339){
while(true){
var ret_value__23055__auto__ = (function (){try{while(true){
var result__23056__auto__ = switch__23053__auto__.call(null,state_23339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23056__auto__;
}
break;
}
}catch (e23348){if((e23348 instanceof Object)){
var ex__23057__auto__ = e23348;
var statearr_23349_23494 = state_23339;
(statearr_23349_23494[(5)] = ex__23057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23495 = state_23339;
state_23339 = G__23495;
continue;
} else {
return ret_value__23055__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23054__auto__ = function(state_23339){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23054__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23054__auto____1.call(this,state_23339);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23054__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23054__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23054__auto__;
})()
;})(__23483,switch__23053__auto__,c__23143__auto___23487,G__23326_23484,G__23326_23485__$1,n__19117__auto___23482,jobs,results,process,async))
})();
var state__23145__auto__ = (function (){var statearr_23350 = f__23144__auto__.call(null);
(statearr_23350[(6)] = c__23143__auto___23487);

return statearr_23350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(__23483,c__23143__auto___23487,G__23326_23484,G__23326_23485__$1,n__19117__auto___23482,jobs,results,process,async))
);


break;
case "async":
var c__23143__auto___23496 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23483,c__23143__auto___23496,G__23326_23484,G__23326_23485__$1,n__19117__auto___23482,jobs,results,process,async){
return (function (){
var f__23144__auto__ = (function (){var switch__23053__auto__ = ((function (__23483,c__23143__auto___23496,G__23326_23484,G__23326_23485__$1,n__19117__auto___23482,jobs,results,process,async){
return (function (state_23363){
var state_val_23364 = (state_23363[(1)]);
if((state_val_23364 === (1))){
var state_23363__$1 = state_23363;
var statearr_23365_23497 = state_23363__$1;
(statearr_23365_23497[(2)] = null);

(statearr_23365_23497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23364 === (2))){
var state_23363__$1 = state_23363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23363__$1,(4),jobs);
} else {
if((state_val_23364 === (3))){
var inst_23361 = (state_23363[(2)]);
var state_23363__$1 = state_23363;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23363__$1,inst_23361);
} else {
if((state_val_23364 === (4))){
var inst_23353 = (state_23363[(2)]);
var inst_23354 = async.call(null,inst_23353);
var state_23363__$1 = state_23363;
if(cljs.core.truth_(inst_23354)){
var statearr_23366_23498 = state_23363__$1;
(statearr_23366_23498[(1)] = (5));

} else {
var statearr_23367_23499 = state_23363__$1;
(statearr_23367_23499[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23364 === (5))){
var state_23363__$1 = state_23363;
var statearr_23368_23500 = state_23363__$1;
(statearr_23368_23500[(2)] = null);

(statearr_23368_23500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23364 === (6))){
var state_23363__$1 = state_23363;
var statearr_23369_23501 = state_23363__$1;
(statearr_23369_23501[(2)] = null);

(statearr_23369_23501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23364 === (7))){
var inst_23359 = (state_23363[(2)]);
var state_23363__$1 = state_23363;
var statearr_23370_23502 = state_23363__$1;
(statearr_23370_23502[(2)] = inst_23359);

(statearr_23370_23502[(1)] = (3));


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
});})(__23483,c__23143__auto___23496,G__23326_23484,G__23326_23485__$1,n__19117__auto___23482,jobs,results,process,async))
;
return ((function (__23483,switch__23053__auto__,c__23143__auto___23496,G__23326_23484,G__23326_23485__$1,n__19117__auto___23482,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23054__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23054__auto____0 = (function (){
var statearr_23371 = [null,null,null,null,null,null,null];
(statearr_23371[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23054__auto__);

(statearr_23371[(1)] = (1));

return statearr_23371;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23054__auto____1 = (function (state_23363){
while(true){
var ret_value__23055__auto__ = (function (){try{while(true){
var result__23056__auto__ = switch__23053__auto__.call(null,state_23363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23056__auto__;
}
break;
}
}catch (e23372){if((e23372 instanceof Object)){
var ex__23057__auto__ = e23372;
var statearr_23373_23503 = state_23363;
(statearr_23373_23503[(5)] = ex__23057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23504 = state_23363;
state_23363 = G__23504;
continue;
} else {
return ret_value__23055__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23054__auto__ = function(state_23363){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23054__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23054__auto____1.call(this,state_23363);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23054__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23054__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23054__auto__;
})()
;})(__23483,switch__23053__auto__,c__23143__auto___23496,G__23326_23484,G__23326_23485__$1,n__19117__auto___23482,jobs,results,process,async))
})();
var state__23145__auto__ = (function (){var statearr_23374 = f__23144__auto__.call(null);
(statearr_23374[(6)] = c__23143__auto___23496);

return statearr_23374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(__23483,c__23143__auto___23496,G__23326_23484,G__23326_23485__$1,n__19117__auto___23482,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23326_23485__$1)].join('')));

}

var G__23505 = (__23483 + (1));
__23483 = G__23505;
continue;
} else {
}
break;
}

var c__23143__auto___23506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto___23506,jobs,results,process,async){
return (function (){
var f__23144__auto__ = (function (){var switch__23053__auto__ = ((function (c__23143__auto___23506,jobs,results,process,async){
return (function (state_23396){
var state_val_23397 = (state_23396[(1)]);
if((state_val_23397 === (1))){
var state_23396__$1 = state_23396;
var statearr_23398_23507 = state_23396__$1;
(statearr_23398_23507[(2)] = null);

(statearr_23398_23507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23397 === (2))){
var state_23396__$1 = state_23396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23396__$1,(4),from);
} else {
if((state_val_23397 === (3))){
var inst_23394 = (state_23396[(2)]);
var state_23396__$1 = state_23396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23396__$1,inst_23394);
} else {
if((state_val_23397 === (4))){
var inst_23377 = (state_23396[(7)]);
var inst_23377__$1 = (state_23396[(2)]);
var inst_23378 = (inst_23377__$1 == null);
var state_23396__$1 = (function (){var statearr_23399 = state_23396;
(statearr_23399[(7)] = inst_23377__$1);

return statearr_23399;
})();
if(cljs.core.truth_(inst_23378)){
var statearr_23400_23508 = state_23396__$1;
(statearr_23400_23508[(1)] = (5));

} else {
var statearr_23401_23509 = state_23396__$1;
(statearr_23401_23509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23397 === (5))){
var inst_23380 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23396__$1 = state_23396;
var statearr_23402_23510 = state_23396__$1;
(statearr_23402_23510[(2)] = inst_23380);

(statearr_23402_23510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23397 === (6))){
var inst_23382 = (state_23396[(8)]);
var inst_23377 = (state_23396[(7)]);
var inst_23382__$1 = cljs.core.async.chan.call(null,(1));
var inst_23383 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23384 = [inst_23377,inst_23382__$1];
var inst_23385 = (new cljs.core.PersistentVector(null,2,(5),inst_23383,inst_23384,null));
var state_23396__$1 = (function (){var statearr_23403 = state_23396;
(statearr_23403[(8)] = inst_23382__$1);

return statearr_23403;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23396__$1,(8),jobs,inst_23385);
} else {
if((state_val_23397 === (7))){
var inst_23392 = (state_23396[(2)]);
var state_23396__$1 = state_23396;
var statearr_23404_23511 = state_23396__$1;
(statearr_23404_23511[(2)] = inst_23392);

(statearr_23404_23511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23397 === (8))){
var inst_23382 = (state_23396[(8)]);
var inst_23387 = (state_23396[(2)]);
var state_23396__$1 = (function (){var statearr_23405 = state_23396;
(statearr_23405[(9)] = inst_23387);

return statearr_23405;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23396__$1,(9),results,inst_23382);
} else {
if((state_val_23397 === (9))){
var inst_23389 = (state_23396[(2)]);
var state_23396__$1 = (function (){var statearr_23406 = state_23396;
(statearr_23406[(10)] = inst_23389);

return statearr_23406;
})();
var statearr_23407_23512 = state_23396__$1;
(statearr_23407_23512[(2)] = null);

(statearr_23407_23512[(1)] = (2));


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
});})(c__23143__auto___23506,jobs,results,process,async))
;
return ((function (switch__23053__auto__,c__23143__auto___23506,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23054__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23054__auto____0 = (function (){
var statearr_23408 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23408[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23054__auto__);

(statearr_23408[(1)] = (1));

return statearr_23408;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23054__auto____1 = (function (state_23396){
while(true){
var ret_value__23055__auto__ = (function (){try{while(true){
var result__23056__auto__ = switch__23053__auto__.call(null,state_23396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23056__auto__;
}
break;
}
}catch (e23409){if((e23409 instanceof Object)){
var ex__23057__auto__ = e23409;
var statearr_23410_23513 = state_23396;
(statearr_23410_23513[(5)] = ex__23057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23514 = state_23396;
state_23396 = G__23514;
continue;
} else {
return ret_value__23055__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23054__auto__ = function(state_23396){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23054__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23054__auto____1.call(this,state_23396);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23054__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23054__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23054__auto__;
})()
;})(switch__23053__auto__,c__23143__auto___23506,jobs,results,process,async))
})();
var state__23145__auto__ = (function (){var statearr_23411 = f__23144__auto__.call(null);
(statearr_23411[(6)] = c__23143__auto___23506);

return statearr_23411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto___23506,jobs,results,process,async))
);


var c__23143__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto__,jobs,results,process,async){
return (function (){
var f__23144__auto__ = (function (){var switch__23053__auto__ = ((function (c__23143__auto__,jobs,results,process,async){
return (function (state_23449){
var state_val_23450 = (state_23449[(1)]);
if((state_val_23450 === (7))){
var inst_23445 = (state_23449[(2)]);
var state_23449__$1 = state_23449;
var statearr_23451_23515 = state_23449__$1;
(statearr_23451_23515[(2)] = inst_23445);

(statearr_23451_23515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (20))){
var state_23449__$1 = state_23449;
var statearr_23452_23516 = state_23449__$1;
(statearr_23452_23516[(2)] = null);

(statearr_23452_23516[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (1))){
var state_23449__$1 = state_23449;
var statearr_23453_23517 = state_23449__$1;
(statearr_23453_23517[(2)] = null);

(statearr_23453_23517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (4))){
var inst_23414 = (state_23449[(7)]);
var inst_23414__$1 = (state_23449[(2)]);
var inst_23415 = (inst_23414__$1 == null);
var state_23449__$1 = (function (){var statearr_23454 = state_23449;
(statearr_23454[(7)] = inst_23414__$1);

return statearr_23454;
})();
if(cljs.core.truth_(inst_23415)){
var statearr_23455_23518 = state_23449__$1;
(statearr_23455_23518[(1)] = (5));

} else {
var statearr_23456_23519 = state_23449__$1;
(statearr_23456_23519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (15))){
var inst_23427 = (state_23449[(8)]);
var state_23449__$1 = state_23449;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23449__$1,(18),to,inst_23427);
} else {
if((state_val_23450 === (21))){
var inst_23440 = (state_23449[(2)]);
var state_23449__$1 = state_23449;
var statearr_23457_23520 = state_23449__$1;
(statearr_23457_23520[(2)] = inst_23440);

(statearr_23457_23520[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (13))){
var inst_23442 = (state_23449[(2)]);
var state_23449__$1 = (function (){var statearr_23458 = state_23449;
(statearr_23458[(9)] = inst_23442);

return statearr_23458;
})();
var statearr_23459_23521 = state_23449__$1;
(statearr_23459_23521[(2)] = null);

(statearr_23459_23521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (6))){
var inst_23414 = (state_23449[(7)]);
var state_23449__$1 = state_23449;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23449__$1,(11),inst_23414);
} else {
if((state_val_23450 === (17))){
var inst_23435 = (state_23449[(2)]);
var state_23449__$1 = state_23449;
if(cljs.core.truth_(inst_23435)){
var statearr_23460_23522 = state_23449__$1;
(statearr_23460_23522[(1)] = (19));

} else {
var statearr_23461_23523 = state_23449__$1;
(statearr_23461_23523[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (3))){
var inst_23447 = (state_23449[(2)]);
var state_23449__$1 = state_23449;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23449__$1,inst_23447);
} else {
if((state_val_23450 === (12))){
var inst_23424 = (state_23449[(10)]);
var state_23449__$1 = state_23449;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23449__$1,(14),inst_23424);
} else {
if((state_val_23450 === (2))){
var state_23449__$1 = state_23449;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23449__$1,(4),results);
} else {
if((state_val_23450 === (19))){
var state_23449__$1 = state_23449;
var statearr_23462_23524 = state_23449__$1;
(statearr_23462_23524[(2)] = null);

(statearr_23462_23524[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (11))){
var inst_23424 = (state_23449[(2)]);
var state_23449__$1 = (function (){var statearr_23463 = state_23449;
(statearr_23463[(10)] = inst_23424);

return statearr_23463;
})();
var statearr_23464_23525 = state_23449__$1;
(statearr_23464_23525[(2)] = null);

(statearr_23464_23525[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (9))){
var state_23449__$1 = state_23449;
var statearr_23465_23526 = state_23449__$1;
(statearr_23465_23526[(2)] = null);

(statearr_23465_23526[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (5))){
var state_23449__$1 = state_23449;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23466_23527 = state_23449__$1;
(statearr_23466_23527[(1)] = (8));

} else {
var statearr_23467_23528 = state_23449__$1;
(statearr_23467_23528[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (14))){
var inst_23429 = (state_23449[(11)]);
var inst_23427 = (state_23449[(8)]);
var inst_23427__$1 = (state_23449[(2)]);
var inst_23428 = (inst_23427__$1 == null);
var inst_23429__$1 = cljs.core.not.call(null,inst_23428);
var state_23449__$1 = (function (){var statearr_23468 = state_23449;
(statearr_23468[(11)] = inst_23429__$1);

(statearr_23468[(8)] = inst_23427__$1);

return statearr_23468;
})();
if(inst_23429__$1){
var statearr_23469_23529 = state_23449__$1;
(statearr_23469_23529[(1)] = (15));

} else {
var statearr_23470_23530 = state_23449__$1;
(statearr_23470_23530[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (16))){
var inst_23429 = (state_23449[(11)]);
var state_23449__$1 = state_23449;
var statearr_23471_23531 = state_23449__$1;
(statearr_23471_23531[(2)] = inst_23429);

(statearr_23471_23531[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (10))){
var inst_23421 = (state_23449[(2)]);
var state_23449__$1 = state_23449;
var statearr_23472_23532 = state_23449__$1;
(statearr_23472_23532[(2)] = inst_23421);

(statearr_23472_23532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (18))){
var inst_23432 = (state_23449[(2)]);
var state_23449__$1 = state_23449;
var statearr_23473_23533 = state_23449__$1;
(statearr_23473_23533[(2)] = inst_23432);

(statearr_23473_23533[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (8))){
var inst_23418 = cljs.core.async.close_BANG_.call(null,to);
var state_23449__$1 = state_23449;
var statearr_23474_23534 = state_23449__$1;
(statearr_23474_23534[(2)] = inst_23418);

(statearr_23474_23534[(1)] = (10));


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
});})(c__23143__auto__,jobs,results,process,async))
;
return ((function (switch__23053__auto__,c__23143__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23054__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23054__auto____0 = (function (){
var statearr_23475 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23475[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23054__auto__);

(statearr_23475[(1)] = (1));

return statearr_23475;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23054__auto____1 = (function (state_23449){
while(true){
var ret_value__23055__auto__ = (function (){try{while(true){
var result__23056__auto__ = switch__23053__auto__.call(null,state_23449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23056__auto__;
}
break;
}
}catch (e23476){if((e23476 instanceof Object)){
var ex__23057__auto__ = e23476;
var statearr_23477_23535 = state_23449;
(statearr_23477_23535[(5)] = ex__23057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23536 = state_23449;
state_23449 = G__23536;
continue;
} else {
return ret_value__23055__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23054__auto__ = function(state_23449){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23054__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23054__auto____1.call(this,state_23449);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23054__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23054__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23054__auto__;
})()
;})(switch__23053__auto__,c__23143__auto__,jobs,results,process,async))
})();
var state__23145__auto__ = (function (){var statearr_23478 = f__23144__auto__.call(null);
(statearr_23478[(6)] = c__23143__auto__);

return statearr_23478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto__,jobs,results,process,async))
);

return c__23143__auto__;
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
var G__23538 = arguments.length;
switch (G__23538) {
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
var G__23541 = arguments.length;
switch (G__23541) {
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
var G__23544 = arguments.length;
switch (G__23544) {
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
var c__23143__auto___23593 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto___23593,tc,fc){
return (function (){
var f__23144__auto__ = (function (){var switch__23053__auto__ = ((function (c__23143__auto___23593,tc,fc){
return (function (state_23570){
var state_val_23571 = (state_23570[(1)]);
if((state_val_23571 === (7))){
var inst_23566 = (state_23570[(2)]);
var state_23570__$1 = state_23570;
var statearr_23572_23594 = state_23570__$1;
(statearr_23572_23594[(2)] = inst_23566);

(statearr_23572_23594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23571 === (1))){
var state_23570__$1 = state_23570;
var statearr_23573_23595 = state_23570__$1;
(statearr_23573_23595[(2)] = null);

(statearr_23573_23595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23571 === (4))){
var inst_23547 = (state_23570[(7)]);
var inst_23547__$1 = (state_23570[(2)]);
var inst_23548 = (inst_23547__$1 == null);
var state_23570__$1 = (function (){var statearr_23574 = state_23570;
(statearr_23574[(7)] = inst_23547__$1);

return statearr_23574;
})();
if(cljs.core.truth_(inst_23548)){
var statearr_23575_23596 = state_23570__$1;
(statearr_23575_23596[(1)] = (5));

} else {
var statearr_23576_23597 = state_23570__$1;
(statearr_23576_23597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23571 === (13))){
var state_23570__$1 = state_23570;
var statearr_23577_23598 = state_23570__$1;
(statearr_23577_23598[(2)] = null);

(statearr_23577_23598[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23571 === (6))){
var inst_23547 = (state_23570[(7)]);
var inst_23553 = p.call(null,inst_23547);
var state_23570__$1 = state_23570;
if(cljs.core.truth_(inst_23553)){
var statearr_23578_23599 = state_23570__$1;
(statearr_23578_23599[(1)] = (9));

} else {
var statearr_23579_23600 = state_23570__$1;
(statearr_23579_23600[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23571 === (3))){
var inst_23568 = (state_23570[(2)]);
var state_23570__$1 = state_23570;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23570__$1,inst_23568);
} else {
if((state_val_23571 === (12))){
var state_23570__$1 = state_23570;
var statearr_23580_23601 = state_23570__$1;
(statearr_23580_23601[(2)] = null);

(statearr_23580_23601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23571 === (2))){
var state_23570__$1 = state_23570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23570__$1,(4),ch);
} else {
if((state_val_23571 === (11))){
var inst_23547 = (state_23570[(7)]);
var inst_23557 = (state_23570[(2)]);
var state_23570__$1 = state_23570;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23570__$1,(8),inst_23557,inst_23547);
} else {
if((state_val_23571 === (9))){
var state_23570__$1 = state_23570;
var statearr_23581_23602 = state_23570__$1;
(statearr_23581_23602[(2)] = tc);

(statearr_23581_23602[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23571 === (5))){
var inst_23550 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23551 = cljs.core.async.close_BANG_.call(null,fc);
var state_23570__$1 = (function (){var statearr_23582 = state_23570;
(statearr_23582[(8)] = inst_23550);

return statearr_23582;
})();
var statearr_23583_23603 = state_23570__$1;
(statearr_23583_23603[(2)] = inst_23551);

(statearr_23583_23603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23571 === (14))){
var inst_23564 = (state_23570[(2)]);
var state_23570__$1 = state_23570;
var statearr_23584_23604 = state_23570__$1;
(statearr_23584_23604[(2)] = inst_23564);

(statearr_23584_23604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23571 === (10))){
var state_23570__$1 = state_23570;
var statearr_23585_23605 = state_23570__$1;
(statearr_23585_23605[(2)] = fc);

(statearr_23585_23605[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23571 === (8))){
var inst_23559 = (state_23570[(2)]);
var state_23570__$1 = state_23570;
if(cljs.core.truth_(inst_23559)){
var statearr_23586_23606 = state_23570__$1;
(statearr_23586_23606[(1)] = (12));

} else {
var statearr_23587_23607 = state_23570__$1;
(statearr_23587_23607[(1)] = (13));

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
});})(c__23143__auto___23593,tc,fc))
;
return ((function (switch__23053__auto__,c__23143__auto___23593,tc,fc){
return (function() {
var cljs$core$async$state_machine__23054__auto__ = null;
var cljs$core$async$state_machine__23054__auto____0 = (function (){
var statearr_23588 = [null,null,null,null,null,null,null,null,null];
(statearr_23588[(0)] = cljs$core$async$state_machine__23054__auto__);

(statearr_23588[(1)] = (1));

return statearr_23588;
});
var cljs$core$async$state_machine__23054__auto____1 = (function (state_23570){
while(true){
var ret_value__23055__auto__ = (function (){try{while(true){
var result__23056__auto__ = switch__23053__auto__.call(null,state_23570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23056__auto__;
}
break;
}
}catch (e23589){if((e23589 instanceof Object)){
var ex__23057__auto__ = e23589;
var statearr_23590_23608 = state_23570;
(statearr_23590_23608[(5)] = ex__23057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23609 = state_23570;
state_23570 = G__23609;
continue;
} else {
return ret_value__23055__auto__;
}
break;
}
});
cljs$core$async$state_machine__23054__auto__ = function(state_23570){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23054__auto____1.call(this,state_23570);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23054__auto____0;
cljs$core$async$state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23054__auto____1;
return cljs$core$async$state_machine__23054__auto__;
})()
;})(switch__23053__auto__,c__23143__auto___23593,tc,fc))
})();
var state__23145__auto__ = (function (){var statearr_23591 = f__23144__auto__.call(null);
(statearr_23591[(6)] = c__23143__auto___23593);

return statearr_23591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto___23593,tc,fc))
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
var c__23143__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto__){
return (function (){
var f__23144__auto__ = (function (){var switch__23053__auto__ = ((function (c__23143__auto__){
return (function (state_23630){
var state_val_23631 = (state_23630[(1)]);
if((state_val_23631 === (7))){
var inst_23626 = (state_23630[(2)]);
var state_23630__$1 = state_23630;
var statearr_23632_23650 = state_23630__$1;
(statearr_23632_23650[(2)] = inst_23626);

(statearr_23632_23650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23631 === (1))){
var inst_23610 = init;
var state_23630__$1 = (function (){var statearr_23633 = state_23630;
(statearr_23633[(7)] = inst_23610);

return statearr_23633;
})();
var statearr_23634_23651 = state_23630__$1;
(statearr_23634_23651[(2)] = null);

(statearr_23634_23651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23631 === (4))){
var inst_23613 = (state_23630[(8)]);
var inst_23613__$1 = (state_23630[(2)]);
var inst_23614 = (inst_23613__$1 == null);
var state_23630__$1 = (function (){var statearr_23635 = state_23630;
(statearr_23635[(8)] = inst_23613__$1);

return statearr_23635;
})();
if(cljs.core.truth_(inst_23614)){
var statearr_23636_23652 = state_23630__$1;
(statearr_23636_23652[(1)] = (5));

} else {
var statearr_23637_23653 = state_23630__$1;
(statearr_23637_23653[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23631 === (6))){
var inst_23613 = (state_23630[(8)]);
var inst_23610 = (state_23630[(7)]);
var inst_23617 = (state_23630[(9)]);
var inst_23617__$1 = f.call(null,inst_23610,inst_23613);
var inst_23618 = cljs.core.reduced_QMARK_.call(null,inst_23617__$1);
var state_23630__$1 = (function (){var statearr_23638 = state_23630;
(statearr_23638[(9)] = inst_23617__$1);

return statearr_23638;
})();
if(inst_23618){
var statearr_23639_23654 = state_23630__$1;
(statearr_23639_23654[(1)] = (8));

} else {
var statearr_23640_23655 = state_23630__$1;
(statearr_23640_23655[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23631 === (3))){
var inst_23628 = (state_23630[(2)]);
var state_23630__$1 = state_23630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23630__$1,inst_23628);
} else {
if((state_val_23631 === (2))){
var state_23630__$1 = state_23630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23630__$1,(4),ch);
} else {
if((state_val_23631 === (9))){
var inst_23617 = (state_23630[(9)]);
var inst_23610 = inst_23617;
var state_23630__$1 = (function (){var statearr_23641 = state_23630;
(statearr_23641[(7)] = inst_23610);

return statearr_23641;
})();
var statearr_23642_23656 = state_23630__$1;
(statearr_23642_23656[(2)] = null);

(statearr_23642_23656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23631 === (5))){
var inst_23610 = (state_23630[(7)]);
var state_23630__$1 = state_23630;
var statearr_23643_23657 = state_23630__$1;
(statearr_23643_23657[(2)] = inst_23610);

(statearr_23643_23657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23631 === (10))){
var inst_23624 = (state_23630[(2)]);
var state_23630__$1 = state_23630;
var statearr_23644_23658 = state_23630__$1;
(statearr_23644_23658[(2)] = inst_23624);

(statearr_23644_23658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23631 === (8))){
var inst_23617 = (state_23630[(9)]);
var inst_23620 = cljs.core.deref.call(null,inst_23617);
var state_23630__$1 = state_23630;
var statearr_23645_23659 = state_23630__$1;
(statearr_23645_23659[(2)] = inst_23620);

(statearr_23645_23659[(1)] = (10));


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
});})(c__23143__auto__))
;
return ((function (switch__23053__auto__,c__23143__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23054__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23054__auto____0 = (function (){
var statearr_23646 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23646[(0)] = cljs$core$async$reduce_$_state_machine__23054__auto__);

(statearr_23646[(1)] = (1));

return statearr_23646;
});
var cljs$core$async$reduce_$_state_machine__23054__auto____1 = (function (state_23630){
while(true){
var ret_value__23055__auto__ = (function (){try{while(true){
var result__23056__auto__ = switch__23053__auto__.call(null,state_23630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23056__auto__;
}
break;
}
}catch (e23647){if((e23647 instanceof Object)){
var ex__23057__auto__ = e23647;
var statearr_23648_23660 = state_23630;
(statearr_23648_23660[(5)] = ex__23057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23661 = state_23630;
state_23630 = G__23661;
continue;
} else {
return ret_value__23055__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23054__auto__ = function(state_23630){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23054__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23054__auto____1.call(this,state_23630);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23054__auto____0;
cljs$core$async$reduce_$_state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23054__auto____1;
return cljs$core$async$reduce_$_state_machine__23054__auto__;
})()
;})(switch__23053__auto__,c__23143__auto__))
})();
var state__23145__auto__ = (function (){var statearr_23649 = f__23144__auto__.call(null);
(statearr_23649[(6)] = c__23143__auto__);

return statearr_23649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto__))
);

return c__23143__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__23143__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto__,f__$1){
return (function (){
var f__23144__auto__ = (function (){var switch__23053__auto__ = ((function (c__23143__auto__,f__$1){
return (function (state_23667){
var state_val_23668 = (state_23667[(1)]);
if((state_val_23668 === (1))){
var inst_23662 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_23667__$1 = state_23667;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23667__$1,(2),inst_23662);
} else {
if((state_val_23668 === (2))){
var inst_23664 = (state_23667[(2)]);
var inst_23665 = f__$1.call(null,inst_23664);
var state_23667__$1 = state_23667;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23667__$1,inst_23665);
} else {
return null;
}
}
});})(c__23143__auto__,f__$1))
;
return ((function (switch__23053__auto__,c__23143__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23054__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23054__auto____0 = (function (){
var statearr_23669 = [null,null,null,null,null,null,null];
(statearr_23669[(0)] = cljs$core$async$transduce_$_state_machine__23054__auto__);

(statearr_23669[(1)] = (1));

return statearr_23669;
});
var cljs$core$async$transduce_$_state_machine__23054__auto____1 = (function (state_23667){
while(true){
var ret_value__23055__auto__ = (function (){try{while(true){
var result__23056__auto__ = switch__23053__auto__.call(null,state_23667);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23056__auto__;
}
break;
}
}catch (e23670){if((e23670 instanceof Object)){
var ex__23057__auto__ = e23670;
var statearr_23671_23673 = state_23667;
(statearr_23671_23673[(5)] = ex__23057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23674 = state_23667;
state_23667 = G__23674;
continue;
} else {
return ret_value__23055__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23054__auto__ = function(state_23667){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23054__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23054__auto____1.call(this,state_23667);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23054__auto____0;
cljs$core$async$transduce_$_state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23054__auto____1;
return cljs$core$async$transduce_$_state_machine__23054__auto__;
})()
;})(switch__23053__auto__,c__23143__auto__,f__$1))
})();
var state__23145__auto__ = (function (){var statearr_23672 = f__23144__auto__.call(null);
(statearr_23672[(6)] = c__23143__auto__);

return statearr_23672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto__,f__$1))
);

return c__23143__auto__;
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
var G__23676 = arguments.length;
switch (G__23676) {
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
var c__23143__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto__){
return (function (){
var f__23144__auto__ = (function (){var switch__23053__auto__ = ((function (c__23143__auto__){
return (function (state_23701){
var state_val_23702 = (state_23701[(1)]);
if((state_val_23702 === (7))){
var inst_23683 = (state_23701[(2)]);
var state_23701__$1 = state_23701;
var statearr_23703_23724 = state_23701__$1;
(statearr_23703_23724[(2)] = inst_23683);

(statearr_23703_23724[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23702 === (1))){
var inst_23677 = cljs.core.seq.call(null,coll);
var inst_23678 = inst_23677;
var state_23701__$1 = (function (){var statearr_23704 = state_23701;
(statearr_23704[(7)] = inst_23678);

return statearr_23704;
})();
var statearr_23705_23725 = state_23701__$1;
(statearr_23705_23725[(2)] = null);

(statearr_23705_23725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23702 === (4))){
var inst_23678 = (state_23701[(7)]);
var inst_23681 = cljs.core.first.call(null,inst_23678);
var state_23701__$1 = state_23701;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23701__$1,(7),ch,inst_23681);
} else {
if((state_val_23702 === (13))){
var inst_23695 = (state_23701[(2)]);
var state_23701__$1 = state_23701;
var statearr_23706_23726 = state_23701__$1;
(statearr_23706_23726[(2)] = inst_23695);

(statearr_23706_23726[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23702 === (6))){
var inst_23686 = (state_23701[(2)]);
var state_23701__$1 = state_23701;
if(cljs.core.truth_(inst_23686)){
var statearr_23707_23727 = state_23701__$1;
(statearr_23707_23727[(1)] = (8));

} else {
var statearr_23708_23728 = state_23701__$1;
(statearr_23708_23728[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23702 === (3))){
var inst_23699 = (state_23701[(2)]);
var state_23701__$1 = state_23701;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23701__$1,inst_23699);
} else {
if((state_val_23702 === (12))){
var state_23701__$1 = state_23701;
var statearr_23709_23729 = state_23701__$1;
(statearr_23709_23729[(2)] = null);

(statearr_23709_23729[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23702 === (2))){
var inst_23678 = (state_23701[(7)]);
var state_23701__$1 = state_23701;
if(cljs.core.truth_(inst_23678)){
var statearr_23710_23730 = state_23701__$1;
(statearr_23710_23730[(1)] = (4));

} else {
var statearr_23711_23731 = state_23701__$1;
(statearr_23711_23731[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23702 === (11))){
var inst_23692 = cljs.core.async.close_BANG_.call(null,ch);
var state_23701__$1 = state_23701;
var statearr_23712_23732 = state_23701__$1;
(statearr_23712_23732[(2)] = inst_23692);

(statearr_23712_23732[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23702 === (9))){
var state_23701__$1 = state_23701;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23713_23733 = state_23701__$1;
(statearr_23713_23733[(1)] = (11));

} else {
var statearr_23714_23734 = state_23701__$1;
(statearr_23714_23734[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23702 === (5))){
var inst_23678 = (state_23701[(7)]);
var state_23701__$1 = state_23701;
var statearr_23715_23735 = state_23701__$1;
(statearr_23715_23735[(2)] = inst_23678);

(statearr_23715_23735[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23702 === (10))){
var inst_23697 = (state_23701[(2)]);
var state_23701__$1 = state_23701;
var statearr_23716_23736 = state_23701__$1;
(statearr_23716_23736[(2)] = inst_23697);

(statearr_23716_23736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23702 === (8))){
var inst_23678 = (state_23701[(7)]);
var inst_23688 = cljs.core.next.call(null,inst_23678);
var inst_23678__$1 = inst_23688;
var state_23701__$1 = (function (){var statearr_23717 = state_23701;
(statearr_23717[(7)] = inst_23678__$1);

return statearr_23717;
})();
var statearr_23718_23737 = state_23701__$1;
(statearr_23718_23737[(2)] = null);

(statearr_23718_23737[(1)] = (2));


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
});})(c__23143__auto__))
;
return ((function (switch__23053__auto__,c__23143__auto__){
return (function() {
var cljs$core$async$state_machine__23054__auto__ = null;
var cljs$core$async$state_machine__23054__auto____0 = (function (){
var statearr_23719 = [null,null,null,null,null,null,null,null];
(statearr_23719[(0)] = cljs$core$async$state_machine__23054__auto__);

(statearr_23719[(1)] = (1));

return statearr_23719;
});
var cljs$core$async$state_machine__23054__auto____1 = (function (state_23701){
while(true){
var ret_value__23055__auto__ = (function (){try{while(true){
var result__23056__auto__ = switch__23053__auto__.call(null,state_23701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23056__auto__;
}
break;
}
}catch (e23720){if((e23720 instanceof Object)){
var ex__23057__auto__ = e23720;
var statearr_23721_23738 = state_23701;
(statearr_23721_23738[(5)] = ex__23057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23739 = state_23701;
state_23701 = G__23739;
continue;
} else {
return ret_value__23055__auto__;
}
break;
}
});
cljs$core$async$state_machine__23054__auto__ = function(state_23701){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23054__auto____1.call(this,state_23701);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23054__auto____0;
cljs$core$async$state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23054__auto____1;
return cljs$core$async$state_machine__23054__auto__;
})()
;})(switch__23053__auto__,c__23143__auto__))
})();
var state__23145__auto__ = (function (){var statearr_23722 = f__23144__auto__.call(null);
(statearr_23722[(6)] = c__23143__auto__);

return statearr_23722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto__))
);

return c__23143__auto__;
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
var x__18805__auto__ = (((_ == null))?null:_);
var m__18806__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18805__auto__)]);
if(!((m__18806__auto__ == null))){
return m__18806__auto__.call(null,_);
} else {
var m__18806__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__18806__auto____$1 == null))){
return m__18806__auto____$1.call(null,_);
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
var x__18805__auto__ = (((m == null))?null:m);
var m__18806__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18805__auto__)]);
if(!((m__18806__auto__ == null))){
return m__18806__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__18806__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__18806__auto____$1 == null))){
return m__18806__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__18805__auto__ = (((m == null))?null:m);
var m__18806__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18805__auto__)]);
if(!((m__18806__auto__ == null))){
return m__18806__auto__.call(null,m,ch);
} else {
var m__18806__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__18806__auto____$1 == null))){
return m__18806__auto____$1.call(null,m,ch);
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
var x__18805__auto__ = (((m == null))?null:m);
var m__18806__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18805__auto__)]);
if(!((m__18806__auto__ == null))){
return m__18806__auto__.call(null,m);
} else {
var m__18806__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__18806__auto____$1 == null))){
return m__18806__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async23740 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23740 = (function (ch,cs,meta23741){
this.ch = ch;
this.cs = cs;
this.meta23741 = meta23741;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23740.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23742,meta23741__$1){
var self__ = this;
var _23742__$1 = this;
return (new cljs.core.async.t_cljs$core$async23740(self__.ch,self__.cs,meta23741__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23740.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23742){
var self__ = this;
var _23742__$1 = this;
return self__.meta23741;
});})(cs))
;

cljs.core.async.t_cljs$core$async23740.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23740.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23740.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23740.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23740.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23740.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23740.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23741","meta23741",1883577062,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23740.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23740.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23740";

cljs.core.async.t_cljs$core$async23740.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18743__auto__,writer__18744__auto__,opt__18745__auto__){
return cljs.core._write.call(null,writer__18744__auto__,"cljs.core.async/t_cljs$core$async23740");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23740 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23740(ch__$1,cs__$1,meta23741){
return (new cljs.core.async.t_cljs$core$async23740(ch__$1,cs__$1,meta23741));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23740(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__23143__auto___23962 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto___23962,cs,m,dchan,dctr,done){
return (function (){
var f__23144__auto__ = (function (){var switch__23053__auto__ = ((function (c__23143__auto___23962,cs,m,dchan,dctr,done){
return (function (state_23877){
var state_val_23878 = (state_23877[(1)]);
if((state_val_23878 === (7))){
var inst_23873 = (state_23877[(2)]);
var state_23877__$1 = state_23877;
var statearr_23879_23963 = state_23877__$1;
(statearr_23879_23963[(2)] = inst_23873);

(statearr_23879_23963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23878 === (20))){
var inst_23776 = (state_23877[(7)]);
var inst_23788 = cljs.core.first.call(null,inst_23776);
var inst_23789 = cljs.core.nth.call(null,inst_23788,(0),null);
var inst_23790 = cljs.core.nth.call(null,inst_23788,(1),null);
var state_23877__$1 = (function (){var statearr_23880 = state_23877;
(statearr_23880[(8)] = inst_23789);

return statearr_23880;
})();
if(cljs.core.truth_(inst_23790)){
var statearr_23881_23964 = state_23877__$1;
(statearr_23881_23964[(1)] = (22));

} else {
var statearr_23882_23965 = state_23877__$1;
(statearr_23882_23965[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23878 === (27))){
var inst_23820 = (state_23877[(9)]);
var inst_23825 = (state_23877[(10)]);
var inst_23745 = (state_23877[(11)]);
var inst_23818 = (state_23877[(12)]);
var inst_23825__$1 = cljs.core._nth.call(null,inst_23818,inst_23820);
var inst_23826 = cljs.core.async.put_BANG_.call(null,inst_23825__$1,inst_23745,done);
var state_23877__$1 = (function (){var statearr_23883 = state_23877;
(statearr_23883[(10)] = inst_23825__$1);

return statearr_23883;
})();
if(cljs.core.truth_(inst_23826)){
var statearr_23884_23966 = state_23877__$1;
(statearr_23884_23966[(1)] = (30));

} else {
var statearr_23885_23967 = state_23877__$1;
(statearr_23885_23967[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23878 === (1))){
var state_23877__$1 = state_23877;
var statearr_23886_23968 = state_23877__$1;
(statearr_23886_23968[(2)] = null);

(statearr_23886_23968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23878 === (24))){
var inst_23776 = (state_23877[(7)]);
var inst_23795 = (state_23877[(2)]);
var inst_23796 = cljs.core.next.call(null,inst_23776);
var inst_23754 = inst_23796;
var inst_23755 = null;
var inst_23756 = (0);
var inst_23757 = (0);
var state_23877__$1 = (function (){var statearr_23887 = state_23877;
(statearr_23887[(13)] = inst_23756);

(statearr_23887[(14)] = inst_23755);

(statearr_23887[(15)] = inst_23795);

(statearr_23887[(16)] = inst_23754);

(statearr_23887[(17)] = inst_23757);

return statearr_23887;
})();
var statearr_23888_23969 = state_23877__$1;
(statearr_23888_23969[(2)] = null);

(statearr_23888_23969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23878 === (39))){
var state_23877__$1 = state_23877;
var statearr_23892_23970 = state_23877__$1;
(statearr_23892_23970[(2)] = null);

(statearr_23892_23970[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23878 === (4))){
var inst_23745 = (state_23877[(11)]);
var inst_23745__$1 = (state_23877[(2)]);
var inst_23746 = (inst_23745__$1 == null);
var state_23877__$1 = (function (){var statearr_23893 = state_23877;
(statearr_23893[(11)] = inst_23745__$1);

return statearr_23893;
})();
if(cljs.core.truth_(inst_23746)){
var statearr_23894_23971 = state_23877__$1;
(statearr_23894_23971[(1)] = (5));

} else {
var statearr_23895_23972 = state_23877__$1;
(statearr_23895_23972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23878 === (15))){
var inst_23756 = (state_23877[(13)]);
var inst_23755 = (state_23877[(14)]);
var inst_23754 = (state_23877[(16)]);
var inst_23757 = (state_23877[(17)]);
var inst_23772 = (state_23877[(2)]);
var inst_23773 = (inst_23757 + (1));
var tmp23889 = inst_23756;
var tmp23890 = inst_23755;
var tmp23891 = inst_23754;
var inst_23754__$1 = tmp23891;
var inst_23755__$1 = tmp23890;
var inst_23756__$1 = tmp23889;
var inst_23757__$1 = inst_23773;
var state_23877__$1 = (function (){var statearr_23896 = state_23877;
(statearr_23896[(13)] = inst_23756__$1);

(statearr_23896[(14)] = inst_23755__$1);

(statearr_23896[(16)] = inst_23754__$1);

(statearr_23896[(17)] = inst_23757__$1);

(statearr_23896[(18)] = inst_23772);

return statearr_23896;
})();
var statearr_23897_23973 = state_23877__$1;
(statearr_23897_23973[(2)] = null);

(statearr_23897_23973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23878 === (21))){
var inst_23799 = (state_23877[(2)]);
var state_23877__$1 = state_23877;
var statearr_23901_23974 = state_23877__$1;
(statearr_23901_23974[(2)] = inst_23799);

(statearr_23901_23974[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23878 === (31))){
var inst_23825 = (state_23877[(10)]);
var inst_23829 = done.call(null,null);
var inst_23830 = cljs.core.async.untap_STAR_.call(null,m,inst_23825);
var state_23877__$1 = (function (){var statearr_23902 = state_23877;
(statearr_23902[(19)] = inst_23829);

return statearr_23902;
})();
var statearr_23903_23975 = state_23877__$1;
(statearr_23903_23975[(2)] = inst_23830);

(statearr_23903_23975[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23878 === (32))){
var inst_23820 = (state_23877[(9)]);
var inst_23819 = (state_23877[(20)]);
var inst_23818 = (state_23877[(12)]);
var inst_23817 = (state_23877[(21)]);
var inst_23832 = (state_23877[(2)]);
var inst_23833 = (inst_23820 + (1));
var tmp23898 = inst_23819;
var tmp23899 = inst_23818;
var tmp23900 = inst_23817;
var inst_23817__$1 = tmp23900;
var inst_23818__$1 = tmp23899;
var inst_23819__$1 = tmp23898;
var inst_23820__$1 = inst_23833;
var state_23877__$1 = (function (){var statearr_23904 = state_23877;
(statearr_23904[(22)] = inst_23832);

(statearr_23904[(9)] = inst_23820__$1);

(statearr_23904[(20)] = inst_23819__$1);

(statearr_23904[(12)] = inst_23818__$1);

(statearr_23904[(21)] = inst_23817__$1);

return statearr_23904;
})();
var statearr_23905_23976 = state_23877__$1;
(statearr_23905_23976[(2)] = null);

(statearr_23905_23976[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23878 === (40))){
var inst_23845 = (state_23877[(23)]);
var inst_23849 = done.call(null,null);
var inst_23850 = cljs.core.async.untap_STAR_.call(null,m,inst_23845);
var state_23877__$1 = (function (){var statearr_23906 = state_23877;
(statearr_23906[(24)] = inst_23849);

return statearr_23906;
})();
var statearr_23907_23977 = state_23877__$1;
(statearr_23907_23977[(2)] = inst_23850);

(statearr_23907_23977[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23878 === (33))){
var inst_23836 = (state_23877[(25)]);
var inst_23838 = cljs.core.chunked_seq_QMARK_.call(null,inst_23836);
var state_23877__$1 = state_23877;
if(inst_23838){
var statearr_23908_23978 = state_23877__$1;
(statearr_23908_23978[(1)] = (36));

} else {
var statearr_23909_23979 = state_23877__$1;
(statearr_23909_23979[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23878 === (13))){
var inst_23766 = (state_23877[(26)]);
var inst_23769 = cljs.core.async.close_BANG_.call(null,inst_23766);
var state_23877__$1 = state_23877;
var statearr_23910_23980 = state_23877__$1;
(statearr_23910_23980[(2)] = inst_23769);

(statearr_23910_23980[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23878 === (22))){
var inst_23789 = (state_23877[(8)]);
var inst_23792 = cljs.core.async.close_BANG_.call(null,inst_23789);
var state_23877__$1 = state_23877;
var statearr_23911_23981 = state_23877__$1;
(statearr_23911_23981[(2)] = inst_23792);

(statearr_23911_23981[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23878 === (36))){
var inst_23836 = (state_23877[(25)]);
var inst_23840 = cljs.core.chunk_first.call(null,inst_23836);
var inst_23841 = cljs.core.chunk_rest.call(null,inst_23836);
var inst_23842 = cljs.core.count.call(null,inst_23840);
var inst_23817 = inst_23841;
var inst_23818 = inst_23840;
var inst_23819 = inst_23842;
var inst_23820 = (0);
var state_23877__$1 = (function (){var statearr_23912 = state_23877;
(statearr_23912[(9)] = inst_23820);

(statearr_23912[(20)] = inst_23819);

(statearr_23912[(12)] = inst_23818);

(statearr_23912[(21)] = inst_23817);

return statearr_23912;
})();
var statearr_23913_23982 = state_23877__$1;
(statearr_23913_23982[(2)] = null);

(statearr_23913_23982[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23878 === (41))){
var inst_23836 = (state_23877[(25)]);
var inst_23852 = (state_23877[(2)]);
var inst_23853 = cljs.core.next.call(null,inst_23836);
var inst_23817 = inst_23853;
var inst_23818 = null;
var inst_23819 = (0);
var inst_23820 = (0);
var state_23877__$1 = (function (){var statearr_23914 = state_23877;
(statearr_23914[(9)] = inst_23820);

(statearr_23914[(27)] = inst_23852);

(statearr_23914[(20)] = inst_23819);

(statearr_23914[(12)] = inst_23818);

(statearr_23914[(21)] = inst_23817);

return statearr_23914;
})();
var statearr_23915_23983 = state_23877__$1;
(statearr_23915_23983[(2)] = null);

(statearr_23915_23983[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23878 === (43))){
var state_23877__$1 = state_23877;
var statearr_23916_23984 = state_23877__$1;
(statearr_23916_23984[(2)] = null);

(statearr_23916_23984[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23878 === (29))){
var inst_23861 = (state_23877[(2)]);
var state_23877__$1 = state_23877;
var statearr_23917_23985 = state_23877__$1;
(statearr_23917_23985[(2)] = inst_23861);

(statearr_23917_23985[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23878 === (44))){
var inst_23870 = (state_23877[(2)]);
var state_23877__$1 = (function (){var statearr_23918 = state_23877;
(statearr_23918[(28)] = inst_23870);

return statearr_23918;
})();
var statearr_23919_23986 = state_23877__$1;
(statearr_23919_23986[(2)] = null);

(statearr_23919_23986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23878 === (6))){
var inst_23809 = (state_23877[(29)]);
var inst_23808 = cljs.core.deref.call(null,cs);
var inst_23809__$1 = cljs.core.keys.call(null,inst_23808);
var inst_23810 = cljs.core.count.call(null,inst_23809__$1);
var inst_23811 = cljs.core.reset_BANG_.call(null,dctr,inst_23810);
var inst_23816 = cljs.core.seq.call(null,inst_23809__$1);
var inst_23817 = inst_23816;
var inst_23818 = null;
var inst_23819 = (0);
var inst_23820 = (0);
var state_23877__$1 = (function (){var statearr_23920 = state_23877;
(statearr_23920[(9)] = inst_23820);

(statearr_23920[(20)] = inst_23819);

(statearr_23920[(12)] = inst_23818);

(statearr_23920[(30)] = inst_23811);

(statearr_23920[(21)] = inst_23817);

(statearr_23920[(29)] = inst_23809__$1);

return statearr_23920;
})();
var statearr_23921_23987 = state_23877__$1;
(statearr_23921_23987[(2)] = null);

(statearr_23921_23987[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23878 === (28))){
var inst_23836 = (state_23877[(25)]);
var inst_23817 = (state_23877[(21)]);
var inst_23836__$1 = cljs.core.seq.call(null,inst_23817);
var state_23877__$1 = (function (){var statearr_23922 = state_23877;
(statearr_23922[(25)] = inst_23836__$1);

return statearr_23922;
})();
if(inst_23836__$1){
var statearr_23923_23988 = state_23877__$1;
(statearr_23923_23988[(1)] = (33));

} else {
var statearr_23924_23989 = state_23877__$1;
(statearr_23924_23989[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23878 === (25))){
var inst_23820 = (state_23877[(9)]);
var inst_23819 = (state_23877[(20)]);
var inst_23822 = (inst_23820 < inst_23819);
var inst_23823 = inst_23822;
var state_23877__$1 = state_23877;
if(cljs.core.truth_(inst_23823)){
var statearr_23925_23990 = state_23877__$1;
(statearr_23925_23990[(1)] = (27));

} else {
var statearr_23926_23991 = state_23877__$1;
(statearr_23926_23991[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23878 === (34))){
var state_23877__$1 = state_23877;
var statearr_23927_23992 = state_23877__$1;
(statearr_23927_23992[(2)] = null);

(statearr_23927_23992[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23878 === (17))){
var state_23877__$1 = state_23877;
var statearr_23928_23993 = state_23877__$1;
(statearr_23928_23993[(2)] = null);

(statearr_23928_23993[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23878 === (3))){
var inst_23875 = (state_23877[(2)]);
var state_23877__$1 = state_23877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23877__$1,inst_23875);
} else {
if((state_val_23878 === (12))){
var inst_23804 = (state_23877[(2)]);
var state_23877__$1 = state_23877;
var statearr_23929_23994 = state_23877__$1;
(statearr_23929_23994[(2)] = inst_23804);

(statearr_23929_23994[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23878 === (2))){
var state_23877__$1 = state_23877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23877__$1,(4),ch);
} else {
if((state_val_23878 === (23))){
var state_23877__$1 = state_23877;
var statearr_23930_23995 = state_23877__$1;
(statearr_23930_23995[(2)] = null);

(statearr_23930_23995[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23878 === (35))){
var inst_23859 = (state_23877[(2)]);
var state_23877__$1 = state_23877;
var statearr_23931_23996 = state_23877__$1;
(statearr_23931_23996[(2)] = inst_23859);

(statearr_23931_23996[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23878 === (19))){
var inst_23776 = (state_23877[(7)]);
var inst_23780 = cljs.core.chunk_first.call(null,inst_23776);
var inst_23781 = cljs.core.chunk_rest.call(null,inst_23776);
var inst_23782 = cljs.core.count.call(null,inst_23780);
var inst_23754 = inst_23781;
var inst_23755 = inst_23780;
var inst_23756 = inst_23782;
var inst_23757 = (0);
var state_23877__$1 = (function (){var statearr_23932 = state_23877;
(statearr_23932[(13)] = inst_23756);

(statearr_23932[(14)] = inst_23755);

(statearr_23932[(16)] = inst_23754);

(statearr_23932[(17)] = inst_23757);

return statearr_23932;
})();
var statearr_23933_23997 = state_23877__$1;
(statearr_23933_23997[(2)] = null);

(statearr_23933_23997[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23878 === (11))){
var inst_23754 = (state_23877[(16)]);
var inst_23776 = (state_23877[(7)]);
var inst_23776__$1 = cljs.core.seq.call(null,inst_23754);
var state_23877__$1 = (function (){var statearr_23934 = state_23877;
(statearr_23934[(7)] = inst_23776__$1);

return statearr_23934;
})();
if(inst_23776__$1){
var statearr_23935_23998 = state_23877__$1;
(statearr_23935_23998[(1)] = (16));

} else {
var statearr_23936_23999 = state_23877__$1;
(statearr_23936_23999[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23878 === (9))){
var inst_23806 = (state_23877[(2)]);
var state_23877__$1 = state_23877;
var statearr_23937_24000 = state_23877__$1;
(statearr_23937_24000[(2)] = inst_23806);

(statearr_23937_24000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23878 === (5))){
var inst_23752 = cljs.core.deref.call(null,cs);
var inst_23753 = cljs.core.seq.call(null,inst_23752);
var inst_23754 = inst_23753;
var inst_23755 = null;
var inst_23756 = (0);
var inst_23757 = (0);
var state_23877__$1 = (function (){var statearr_23938 = state_23877;
(statearr_23938[(13)] = inst_23756);

(statearr_23938[(14)] = inst_23755);

(statearr_23938[(16)] = inst_23754);

(statearr_23938[(17)] = inst_23757);

return statearr_23938;
})();
var statearr_23939_24001 = state_23877__$1;
(statearr_23939_24001[(2)] = null);

(statearr_23939_24001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23878 === (14))){
var state_23877__$1 = state_23877;
var statearr_23940_24002 = state_23877__$1;
(statearr_23940_24002[(2)] = null);

(statearr_23940_24002[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23878 === (45))){
var inst_23867 = (state_23877[(2)]);
var state_23877__$1 = state_23877;
var statearr_23941_24003 = state_23877__$1;
(statearr_23941_24003[(2)] = inst_23867);

(statearr_23941_24003[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23878 === (26))){
var inst_23809 = (state_23877[(29)]);
var inst_23863 = (state_23877[(2)]);
var inst_23864 = cljs.core.seq.call(null,inst_23809);
var state_23877__$1 = (function (){var statearr_23942 = state_23877;
(statearr_23942[(31)] = inst_23863);

return statearr_23942;
})();
if(inst_23864){
var statearr_23943_24004 = state_23877__$1;
(statearr_23943_24004[(1)] = (42));

} else {
var statearr_23944_24005 = state_23877__$1;
(statearr_23944_24005[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23878 === (16))){
var inst_23776 = (state_23877[(7)]);
var inst_23778 = cljs.core.chunked_seq_QMARK_.call(null,inst_23776);
var state_23877__$1 = state_23877;
if(inst_23778){
var statearr_23945_24006 = state_23877__$1;
(statearr_23945_24006[(1)] = (19));

} else {
var statearr_23946_24007 = state_23877__$1;
(statearr_23946_24007[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23878 === (38))){
var inst_23856 = (state_23877[(2)]);
var state_23877__$1 = state_23877;
var statearr_23947_24008 = state_23877__$1;
(statearr_23947_24008[(2)] = inst_23856);

(statearr_23947_24008[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23878 === (30))){
var state_23877__$1 = state_23877;
var statearr_23948_24009 = state_23877__$1;
(statearr_23948_24009[(2)] = null);

(statearr_23948_24009[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23878 === (10))){
var inst_23755 = (state_23877[(14)]);
var inst_23757 = (state_23877[(17)]);
var inst_23765 = cljs.core._nth.call(null,inst_23755,inst_23757);
var inst_23766 = cljs.core.nth.call(null,inst_23765,(0),null);
var inst_23767 = cljs.core.nth.call(null,inst_23765,(1),null);
var state_23877__$1 = (function (){var statearr_23949 = state_23877;
(statearr_23949[(26)] = inst_23766);

return statearr_23949;
})();
if(cljs.core.truth_(inst_23767)){
var statearr_23950_24010 = state_23877__$1;
(statearr_23950_24010[(1)] = (13));

} else {
var statearr_23951_24011 = state_23877__$1;
(statearr_23951_24011[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23878 === (18))){
var inst_23802 = (state_23877[(2)]);
var state_23877__$1 = state_23877;
var statearr_23952_24012 = state_23877__$1;
(statearr_23952_24012[(2)] = inst_23802);

(statearr_23952_24012[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23878 === (42))){
var state_23877__$1 = state_23877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23877__$1,(45),dchan);
} else {
if((state_val_23878 === (37))){
var inst_23836 = (state_23877[(25)]);
var inst_23845 = (state_23877[(23)]);
var inst_23745 = (state_23877[(11)]);
var inst_23845__$1 = cljs.core.first.call(null,inst_23836);
var inst_23846 = cljs.core.async.put_BANG_.call(null,inst_23845__$1,inst_23745,done);
var state_23877__$1 = (function (){var statearr_23953 = state_23877;
(statearr_23953[(23)] = inst_23845__$1);

return statearr_23953;
})();
if(cljs.core.truth_(inst_23846)){
var statearr_23954_24013 = state_23877__$1;
(statearr_23954_24013[(1)] = (39));

} else {
var statearr_23955_24014 = state_23877__$1;
(statearr_23955_24014[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23878 === (8))){
var inst_23756 = (state_23877[(13)]);
var inst_23757 = (state_23877[(17)]);
var inst_23759 = (inst_23757 < inst_23756);
var inst_23760 = inst_23759;
var state_23877__$1 = state_23877;
if(cljs.core.truth_(inst_23760)){
var statearr_23956_24015 = state_23877__$1;
(statearr_23956_24015[(1)] = (10));

} else {
var statearr_23957_24016 = state_23877__$1;
(statearr_23957_24016[(1)] = (11));

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
});})(c__23143__auto___23962,cs,m,dchan,dctr,done))
;
return ((function (switch__23053__auto__,c__23143__auto___23962,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23054__auto__ = null;
var cljs$core$async$mult_$_state_machine__23054__auto____0 = (function (){
var statearr_23958 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23958[(0)] = cljs$core$async$mult_$_state_machine__23054__auto__);

(statearr_23958[(1)] = (1));

return statearr_23958;
});
var cljs$core$async$mult_$_state_machine__23054__auto____1 = (function (state_23877){
while(true){
var ret_value__23055__auto__ = (function (){try{while(true){
var result__23056__auto__ = switch__23053__auto__.call(null,state_23877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23056__auto__;
}
break;
}
}catch (e23959){if((e23959 instanceof Object)){
var ex__23057__auto__ = e23959;
var statearr_23960_24017 = state_23877;
(statearr_23960_24017[(5)] = ex__23057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24018 = state_23877;
state_23877 = G__24018;
continue;
} else {
return ret_value__23055__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23054__auto__ = function(state_23877){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23054__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23054__auto____1.call(this,state_23877);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23054__auto____0;
cljs$core$async$mult_$_state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23054__auto____1;
return cljs$core$async$mult_$_state_machine__23054__auto__;
})()
;})(switch__23053__auto__,c__23143__auto___23962,cs,m,dchan,dctr,done))
})();
var state__23145__auto__ = (function (){var statearr_23961 = f__23144__auto__.call(null);
(statearr_23961[(6)] = c__23143__auto___23962);

return statearr_23961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto___23962,cs,m,dchan,dctr,done))
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
var G__24020 = arguments.length;
switch (G__24020) {
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
var x__18805__auto__ = (((m == null))?null:m);
var m__18806__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18805__auto__)]);
if(!((m__18806__auto__ == null))){
return m__18806__auto__.call(null,m,ch);
} else {
var m__18806__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__18806__auto____$1 == null))){
return m__18806__auto____$1.call(null,m,ch);
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
var x__18805__auto__ = (((m == null))?null:m);
var m__18806__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18805__auto__)]);
if(!((m__18806__auto__ == null))){
return m__18806__auto__.call(null,m,ch);
} else {
var m__18806__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__18806__auto____$1 == null))){
return m__18806__auto____$1.call(null,m,ch);
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
var x__18805__auto__ = (((m == null))?null:m);
var m__18806__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18805__auto__)]);
if(!((m__18806__auto__ == null))){
return m__18806__auto__.call(null,m);
} else {
var m__18806__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__18806__auto____$1 == null))){
return m__18806__auto____$1.call(null,m);
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
var x__18805__auto__ = (((m == null))?null:m);
var m__18806__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18805__auto__)]);
if(!((m__18806__auto__ == null))){
return m__18806__auto__.call(null,m,state_map);
} else {
var m__18806__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__18806__auto____$1 == null))){
return m__18806__auto____$1.call(null,m,state_map);
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
var x__18805__auto__ = (((m == null))?null:m);
var m__18806__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18805__auto__)]);
if(!((m__18806__auto__ == null))){
return m__18806__auto__.call(null,m,mode);
} else {
var m__18806__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__18806__auto____$1 == null))){
return m__18806__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19358__auto__ = [];
var len__19351__auto___24032 = arguments.length;
var i__19352__auto___24033 = (0);
while(true){
if((i__19352__auto___24033 < len__19351__auto___24032)){
args__19358__auto__.push((arguments[i__19352__auto___24033]));

var G__24034 = (i__19352__auto___24033 + (1));
i__19352__auto___24033 = G__24034;
continue;
} else {
}
break;
}

var argseq__19359__auto__ = ((((3) < args__19358__auto__.length))?(new cljs.core.IndexedSeq(args__19358__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19359__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24026){
var map__24027 = p__24026;
var map__24027__$1 = ((((!((map__24027 == null)))?((((map__24027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24027.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24027):map__24027);
var opts = map__24027__$1;
var statearr_24029_24035 = state;
(statearr_24029_24035[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__24027,map__24027__$1,opts){
return (function (val){
var statearr_24030_24036 = state;
(statearr_24030_24036[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24027,map__24027__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_24031_24037 = state;
(statearr_24031_24037[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24022){
var G__24023 = cljs.core.first.call(null,seq24022);
var seq24022__$1 = cljs.core.next.call(null,seq24022);
var G__24024 = cljs.core.first.call(null,seq24022__$1);
var seq24022__$2 = cljs.core.next.call(null,seq24022__$1);
var G__24025 = cljs.core.first.call(null,seq24022__$2);
var seq24022__$3 = cljs.core.next.call(null,seq24022__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24023,G__24024,G__24025,seq24022__$3);
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
if(typeof cljs.core.async.t_cljs$core$async24038 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24038 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta24039){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta24039 = meta24039;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24040,meta24039__$1){
var self__ = this;
var _24040__$1 = this;
return (new cljs.core.async.t_cljs$core$async24038(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta24039__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24038.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24040){
var self__ = this;
var _24040__$1 = this;
return self__.meta24039;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24038.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24038.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24038.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24038.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24038.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24038.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24038.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24038.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async24038.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta24039","meta24039",498964506,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24038.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24038.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24038";

cljs.core.async.t_cljs$core$async24038.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18743__auto__,writer__18744__auto__,opt__18745__auto__){
return cljs.core._write.call(null,writer__18744__auto__,"cljs.core.async/t_cljs$core$async24038");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async24038 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24038(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta24039){
return (new cljs.core.async.t_cljs$core$async24038(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta24039));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24038(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23143__auto___24202 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto___24202,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23144__auto__ = (function (){var switch__23053__auto__ = ((function (c__23143__auto___24202,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24142){
var state_val_24143 = (state_24142[(1)]);
if((state_val_24143 === (7))){
var inst_24057 = (state_24142[(2)]);
var state_24142__$1 = state_24142;
var statearr_24144_24203 = state_24142__$1;
(statearr_24144_24203[(2)] = inst_24057);

(statearr_24144_24203[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (20))){
var inst_24069 = (state_24142[(7)]);
var state_24142__$1 = state_24142;
var statearr_24145_24204 = state_24142__$1;
(statearr_24145_24204[(2)] = inst_24069);

(statearr_24145_24204[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (27))){
var state_24142__$1 = state_24142;
var statearr_24146_24205 = state_24142__$1;
(statearr_24146_24205[(2)] = null);

(statearr_24146_24205[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (1))){
var inst_24044 = (state_24142[(8)]);
var inst_24044__$1 = calc_state.call(null);
var inst_24046 = (inst_24044__$1 == null);
var inst_24047 = cljs.core.not.call(null,inst_24046);
var state_24142__$1 = (function (){var statearr_24147 = state_24142;
(statearr_24147[(8)] = inst_24044__$1);

return statearr_24147;
})();
if(inst_24047){
var statearr_24148_24206 = state_24142__$1;
(statearr_24148_24206[(1)] = (2));

} else {
var statearr_24149_24207 = state_24142__$1;
(statearr_24149_24207[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (24))){
var inst_24093 = (state_24142[(9)]);
var inst_24102 = (state_24142[(10)]);
var inst_24116 = (state_24142[(11)]);
var inst_24116__$1 = inst_24093.call(null,inst_24102);
var state_24142__$1 = (function (){var statearr_24150 = state_24142;
(statearr_24150[(11)] = inst_24116__$1);

return statearr_24150;
})();
if(cljs.core.truth_(inst_24116__$1)){
var statearr_24151_24208 = state_24142__$1;
(statearr_24151_24208[(1)] = (29));

} else {
var statearr_24152_24209 = state_24142__$1;
(statearr_24152_24209[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (4))){
var inst_24060 = (state_24142[(2)]);
var state_24142__$1 = state_24142;
if(cljs.core.truth_(inst_24060)){
var statearr_24153_24210 = state_24142__$1;
(statearr_24153_24210[(1)] = (8));

} else {
var statearr_24154_24211 = state_24142__$1;
(statearr_24154_24211[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (15))){
var inst_24087 = (state_24142[(2)]);
var state_24142__$1 = state_24142;
if(cljs.core.truth_(inst_24087)){
var statearr_24155_24212 = state_24142__$1;
(statearr_24155_24212[(1)] = (19));

} else {
var statearr_24156_24213 = state_24142__$1;
(statearr_24156_24213[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (21))){
var inst_24092 = (state_24142[(12)]);
var inst_24092__$1 = (state_24142[(2)]);
var inst_24093 = cljs.core.get.call(null,inst_24092__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24094 = cljs.core.get.call(null,inst_24092__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24095 = cljs.core.get.call(null,inst_24092__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24142__$1 = (function (){var statearr_24157 = state_24142;
(statearr_24157[(9)] = inst_24093);

(statearr_24157[(13)] = inst_24094);

(statearr_24157[(12)] = inst_24092__$1);

return statearr_24157;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24142__$1,(22),inst_24095);
} else {
if((state_val_24143 === (31))){
var inst_24124 = (state_24142[(2)]);
var state_24142__$1 = state_24142;
if(cljs.core.truth_(inst_24124)){
var statearr_24158_24214 = state_24142__$1;
(statearr_24158_24214[(1)] = (32));

} else {
var statearr_24159_24215 = state_24142__$1;
(statearr_24159_24215[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (32))){
var inst_24101 = (state_24142[(14)]);
var state_24142__$1 = state_24142;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24142__$1,(35),out,inst_24101);
} else {
if((state_val_24143 === (33))){
var inst_24092 = (state_24142[(12)]);
var inst_24069 = inst_24092;
var state_24142__$1 = (function (){var statearr_24160 = state_24142;
(statearr_24160[(7)] = inst_24069);

return statearr_24160;
})();
var statearr_24161_24216 = state_24142__$1;
(statearr_24161_24216[(2)] = null);

(statearr_24161_24216[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (13))){
var inst_24069 = (state_24142[(7)]);
var inst_24076 = inst_24069.cljs$lang$protocol_mask$partition0$;
var inst_24077 = (inst_24076 & (64));
var inst_24078 = inst_24069.cljs$core$ISeq$;
var inst_24079 = (cljs.core.PROTOCOL_SENTINEL === inst_24078);
var inst_24080 = (inst_24077) || (inst_24079);
var state_24142__$1 = state_24142;
if(cljs.core.truth_(inst_24080)){
var statearr_24162_24217 = state_24142__$1;
(statearr_24162_24217[(1)] = (16));

} else {
var statearr_24163_24218 = state_24142__$1;
(statearr_24163_24218[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (22))){
var inst_24101 = (state_24142[(14)]);
var inst_24102 = (state_24142[(10)]);
var inst_24100 = (state_24142[(2)]);
var inst_24101__$1 = cljs.core.nth.call(null,inst_24100,(0),null);
var inst_24102__$1 = cljs.core.nth.call(null,inst_24100,(1),null);
var inst_24103 = (inst_24101__$1 == null);
var inst_24104 = cljs.core._EQ_.call(null,inst_24102__$1,change);
var inst_24105 = (inst_24103) || (inst_24104);
var state_24142__$1 = (function (){var statearr_24164 = state_24142;
(statearr_24164[(14)] = inst_24101__$1);

(statearr_24164[(10)] = inst_24102__$1);

return statearr_24164;
})();
if(cljs.core.truth_(inst_24105)){
var statearr_24165_24219 = state_24142__$1;
(statearr_24165_24219[(1)] = (23));

} else {
var statearr_24166_24220 = state_24142__$1;
(statearr_24166_24220[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (36))){
var inst_24092 = (state_24142[(12)]);
var inst_24069 = inst_24092;
var state_24142__$1 = (function (){var statearr_24167 = state_24142;
(statearr_24167[(7)] = inst_24069);

return statearr_24167;
})();
var statearr_24168_24221 = state_24142__$1;
(statearr_24168_24221[(2)] = null);

(statearr_24168_24221[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (29))){
var inst_24116 = (state_24142[(11)]);
var state_24142__$1 = state_24142;
var statearr_24169_24222 = state_24142__$1;
(statearr_24169_24222[(2)] = inst_24116);

(statearr_24169_24222[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (6))){
var state_24142__$1 = state_24142;
var statearr_24170_24223 = state_24142__$1;
(statearr_24170_24223[(2)] = false);

(statearr_24170_24223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (28))){
var inst_24112 = (state_24142[(2)]);
var inst_24113 = calc_state.call(null);
var inst_24069 = inst_24113;
var state_24142__$1 = (function (){var statearr_24171 = state_24142;
(statearr_24171[(7)] = inst_24069);

(statearr_24171[(15)] = inst_24112);

return statearr_24171;
})();
var statearr_24172_24224 = state_24142__$1;
(statearr_24172_24224[(2)] = null);

(statearr_24172_24224[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (25))){
var inst_24138 = (state_24142[(2)]);
var state_24142__$1 = state_24142;
var statearr_24173_24225 = state_24142__$1;
(statearr_24173_24225[(2)] = inst_24138);

(statearr_24173_24225[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (34))){
var inst_24136 = (state_24142[(2)]);
var state_24142__$1 = state_24142;
var statearr_24174_24226 = state_24142__$1;
(statearr_24174_24226[(2)] = inst_24136);

(statearr_24174_24226[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (17))){
var state_24142__$1 = state_24142;
var statearr_24175_24227 = state_24142__$1;
(statearr_24175_24227[(2)] = false);

(statearr_24175_24227[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (3))){
var state_24142__$1 = state_24142;
var statearr_24176_24228 = state_24142__$1;
(statearr_24176_24228[(2)] = false);

(statearr_24176_24228[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (12))){
var inst_24140 = (state_24142[(2)]);
var state_24142__$1 = state_24142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24142__$1,inst_24140);
} else {
if((state_val_24143 === (2))){
var inst_24044 = (state_24142[(8)]);
var inst_24049 = inst_24044.cljs$lang$protocol_mask$partition0$;
var inst_24050 = (inst_24049 & (64));
var inst_24051 = inst_24044.cljs$core$ISeq$;
var inst_24052 = (cljs.core.PROTOCOL_SENTINEL === inst_24051);
var inst_24053 = (inst_24050) || (inst_24052);
var state_24142__$1 = state_24142;
if(cljs.core.truth_(inst_24053)){
var statearr_24177_24229 = state_24142__$1;
(statearr_24177_24229[(1)] = (5));

} else {
var statearr_24178_24230 = state_24142__$1;
(statearr_24178_24230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (23))){
var inst_24101 = (state_24142[(14)]);
var inst_24107 = (inst_24101 == null);
var state_24142__$1 = state_24142;
if(cljs.core.truth_(inst_24107)){
var statearr_24179_24231 = state_24142__$1;
(statearr_24179_24231[(1)] = (26));

} else {
var statearr_24180_24232 = state_24142__$1;
(statearr_24180_24232[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (35))){
var inst_24127 = (state_24142[(2)]);
var state_24142__$1 = state_24142;
if(cljs.core.truth_(inst_24127)){
var statearr_24181_24233 = state_24142__$1;
(statearr_24181_24233[(1)] = (36));

} else {
var statearr_24182_24234 = state_24142__$1;
(statearr_24182_24234[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (19))){
var inst_24069 = (state_24142[(7)]);
var inst_24089 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24069);
var state_24142__$1 = state_24142;
var statearr_24183_24235 = state_24142__$1;
(statearr_24183_24235[(2)] = inst_24089);

(statearr_24183_24235[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (11))){
var inst_24069 = (state_24142[(7)]);
var inst_24073 = (inst_24069 == null);
var inst_24074 = cljs.core.not.call(null,inst_24073);
var state_24142__$1 = state_24142;
if(inst_24074){
var statearr_24184_24236 = state_24142__$1;
(statearr_24184_24236[(1)] = (13));

} else {
var statearr_24185_24237 = state_24142__$1;
(statearr_24185_24237[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (9))){
var inst_24044 = (state_24142[(8)]);
var state_24142__$1 = state_24142;
var statearr_24186_24238 = state_24142__$1;
(statearr_24186_24238[(2)] = inst_24044);

(statearr_24186_24238[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (5))){
var state_24142__$1 = state_24142;
var statearr_24187_24239 = state_24142__$1;
(statearr_24187_24239[(2)] = true);

(statearr_24187_24239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (14))){
var state_24142__$1 = state_24142;
var statearr_24188_24240 = state_24142__$1;
(statearr_24188_24240[(2)] = false);

(statearr_24188_24240[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (26))){
var inst_24102 = (state_24142[(10)]);
var inst_24109 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24102);
var state_24142__$1 = state_24142;
var statearr_24189_24241 = state_24142__$1;
(statearr_24189_24241[(2)] = inst_24109);

(statearr_24189_24241[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (16))){
var state_24142__$1 = state_24142;
var statearr_24190_24242 = state_24142__$1;
(statearr_24190_24242[(2)] = true);

(statearr_24190_24242[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (38))){
var inst_24132 = (state_24142[(2)]);
var state_24142__$1 = state_24142;
var statearr_24191_24243 = state_24142__$1;
(statearr_24191_24243[(2)] = inst_24132);

(statearr_24191_24243[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (30))){
var inst_24093 = (state_24142[(9)]);
var inst_24094 = (state_24142[(13)]);
var inst_24102 = (state_24142[(10)]);
var inst_24119 = cljs.core.empty_QMARK_.call(null,inst_24093);
var inst_24120 = inst_24094.call(null,inst_24102);
var inst_24121 = cljs.core.not.call(null,inst_24120);
var inst_24122 = (inst_24119) && (inst_24121);
var state_24142__$1 = state_24142;
var statearr_24192_24244 = state_24142__$1;
(statearr_24192_24244[(2)] = inst_24122);

(statearr_24192_24244[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (10))){
var inst_24044 = (state_24142[(8)]);
var inst_24065 = (state_24142[(2)]);
var inst_24066 = cljs.core.get.call(null,inst_24065,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24067 = cljs.core.get.call(null,inst_24065,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24068 = cljs.core.get.call(null,inst_24065,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24069 = inst_24044;
var state_24142__$1 = (function (){var statearr_24193 = state_24142;
(statearr_24193[(16)] = inst_24068);

(statearr_24193[(7)] = inst_24069);

(statearr_24193[(17)] = inst_24066);

(statearr_24193[(18)] = inst_24067);

return statearr_24193;
})();
var statearr_24194_24245 = state_24142__$1;
(statearr_24194_24245[(2)] = null);

(statearr_24194_24245[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (18))){
var inst_24084 = (state_24142[(2)]);
var state_24142__$1 = state_24142;
var statearr_24195_24246 = state_24142__$1;
(statearr_24195_24246[(2)] = inst_24084);

(statearr_24195_24246[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (37))){
var state_24142__$1 = state_24142;
var statearr_24196_24247 = state_24142__$1;
(statearr_24196_24247[(2)] = null);

(statearr_24196_24247[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24143 === (8))){
var inst_24044 = (state_24142[(8)]);
var inst_24062 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24044);
var state_24142__$1 = state_24142;
var statearr_24197_24248 = state_24142__$1;
(statearr_24197_24248[(2)] = inst_24062);

(statearr_24197_24248[(1)] = (10));


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
});})(c__23143__auto___24202,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23053__auto__,c__23143__auto___24202,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23054__auto__ = null;
var cljs$core$async$mix_$_state_machine__23054__auto____0 = (function (){
var statearr_24198 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24198[(0)] = cljs$core$async$mix_$_state_machine__23054__auto__);

(statearr_24198[(1)] = (1));

return statearr_24198;
});
var cljs$core$async$mix_$_state_machine__23054__auto____1 = (function (state_24142){
while(true){
var ret_value__23055__auto__ = (function (){try{while(true){
var result__23056__auto__ = switch__23053__auto__.call(null,state_24142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23056__auto__;
}
break;
}
}catch (e24199){if((e24199 instanceof Object)){
var ex__23057__auto__ = e24199;
var statearr_24200_24249 = state_24142;
(statearr_24200_24249[(5)] = ex__23057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24199;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24250 = state_24142;
state_24142 = G__24250;
continue;
} else {
return ret_value__23055__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23054__auto__ = function(state_24142){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23054__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23054__auto____1.call(this,state_24142);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23054__auto____0;
cljs$core$async$mix_$_state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23054__auto____1;
return cljs$core$async$mix_$_state_machine__23054__auto__;
})()
;})(switch__23053__auto__,c__23143__auto___24202,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23145__auto__ = (function (){var statearr_24201 = f__23144__auto__.call(null);
(statearr_24201[(6)] = c__23143__auto___24202);

return statearr_24201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto___24202,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__18805__auto__ = (((p == null))?null:p);
var m__18806__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18805__auto__)]);
if(!((m__18806__auto__ == null))){
return m__18806__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__18806__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__18806__auto____$1 == null))){
return m__18806__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__18805__auto__ = (((p == null))?null:p);
var m__18806__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18805__auto__)]);
if(!((m__18806__auto__ == null))){
return m__18806__auto__.call(null,p,v,ch);
} else {
var m__18806__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__18806__auto____$1 == null))){
return m__18806__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__24252 = arguments.length;
switch (G__24252) {
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
var x__18805__auto__ = (((p == null))?null:p);
var m__18806__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18805__auto__)]);
if(!((m__18806__auto__ == null))){
return m__18806__auto__.call(null,p);
} else {
var m__18806__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__18806__auto____$1 == null))){
return m__18806__auto____$1.call(null,p);
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
var x__18805__auto__ = (((p == null))?null:p);
var m__18806__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18805__auto__)]);
if(!((m__18806__auto__ == null))){
return m__18806__auto__.call(null,p,v);
} else {
var m__18806__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__18806__auto____$1 == null))){
return m__18806__auto____$1.call(null,p,v);
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
var G__24256 = arguments.length;
switch (G__24256) {
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
var or__18072__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18072__auto__)){
return or__18072__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18072__auto__,mults){
return (function (p1__24254_SHARP_){
if(cljs.core.truth_(p1__24254_SHARP_.call(null,topic))){
return p1__24254_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24254_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18072__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async24257 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24257 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24258){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24258 = meta24258;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24259,meta24258__$1){
var self__ = this;
var _24259__$1 = this;
return (new cljs.core.async.t_cljs$core$async24257(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24258__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24257.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24259){
var self__ = this;
var _24259__$1 = this;
return self__.meta24258;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24257.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24257.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24257.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24257.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24257.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async24257.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24257.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24257.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24258","meta24258",-1332409135,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24257.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24257.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24257";

cljs.core.async.t_cljs$core$async24257.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18743__auto__,writer__18744__auto__,opt__18745__auto__){
return cljs.core._write.call(null,writer__18744__auto__,"cljs.core.async/t_cljs$core$async24257");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async24257 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24257(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24258){
return (new cljs.core.async.t_cljs$core$async24257(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24258));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24257(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23143__auto___24377 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto___24377,mults,ensure_mult,p){
return (function (){
var f__23144__auto__ = (function (){var switch__23053__auto__ = ((function (c__23143__auto___24377,mults,ensure_mult,p){
return (function (state_24331){
var state_val_24332 = (state_24331[(1)]);
if((state_val_24332 === (7))){
var inst_24327 = (state_24331[(2)]);
var state_24331__$1 = state_24331;
var statearr_24333_24378 = state_24331__$1;
(statearr_24333_24378[(2)] = inst_24327);

(statearr_24333_24378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24332 === (20))){
var state_24331__$1 = state_24331;
var statearr_24334_24379 = state_24331__$1;
(statearr_24334_24379[(2)] = null);

(statearr_24334_24379[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24332 === (1))){
var state_24331__$1 = state_24331;
var statearr_24335_24380 = state_24331__$1;
(statearr_24335_24380[(2)] = null);

(statearr_24335_24380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24332 === (24))){
var inst_24310 = (state_24331[(7)]);
var inst_24319 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24310);
var state_24331__$1 = state_24331;
var statearr_24336_24381 = state_24331__$1;
(statearr_24336_24381[(2)] = inst_24319);

(statearr_24336_24381[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24332 === (4))){
var inst_24262 = (state_24331[(8)]);
var inst_24262__$1 = (state_24331[(2)]);
var inst_24263 = (inst_24262__$1 == null);
var state_24331__$1 = (function (){var statearr_24337 = state_24331;
(statearr_24337[(8)] = inst_24262__$1);

return statearr_24337;
})();
if(cljs.core.truth_(inst_24263)){
var statearr_24338_24382 = state_24331__$1;
(statearr_24338_24382[(1)] = (5));

} else {
var statearr_24339_24383 = state_24331__$1;
(statearr_24339_24383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24332 === (15))){
var inst_24304 = (state_24331[(2)]);
var state_24331__$1 = state_24331;
var statearr_24340_24384 = state_24331__$1;
(statearr_24340_24384[(2)] = inst_24304);

(statearr_24340_24384[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24332 === (21))){
var inst_24324 = (state_24331[(2)]);
var state_24331__$1 = (function (){var statearr_24341 = state_24331;
(statearr_24341[(9)] = inst_24324);

return statearr_24341;
})();
var statearr_24342_24385 = state_24331__$1;
(statearr_24342_24385[(2)] = null);

(statearr_24342_24385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24332 === (13))){
var inst_24286 = (state_24331[(10)]);
var inst_24288 = cljs.core.chunked_seq_QMARK_.call(null,inst_24286);
var state_24331__$1 = state_24331;
if(inst_24288){
var statearr_24343_24386 = state_24331__$1;
(statearr_24343_24386[(1)] = (16));

} else {
var statearr_24344_24387 = state_24331__$1;
(statearr_24344_24387[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24332 === (22))){
var inst_24316 = (state_24331[(2)]);
var state_24331__$1 = state_24331;
if(cljs.core.truth_(inst_24316)){
var statearr_24345_24388 = state_24331__$1;
(statearr_24345_24388[(1)] = (23));

} else {
var statearr_24346_24389 = state_24331__$1;
(statearr_24346_24389[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24332 === (6))){
var inst_24262 = (state_24331[(8)]);
var inst_24312 = (state_24331[(11)]);
var inst_24310 = (state_24331[(7)]);
var inst_24310__$1 = topic_fn.call(null,inst_24262);
var inst_24311 = cljs.core.deref.call(null,mults);
var inst_24312__$1 = cljs.core.get.call(null,inst_24311,inst_24310__$1);
var state_24331__$1 = (function (){var statearr_24347 = state_24331;
(statearr_24347[(11)] = inst_24312__$1);

(statearr_24347[(7)] = inst_24310__$1);

return statearr_24347;
})();
if(cljs.core.truth_(inst_24312__$1)){
var statearr_24348_24390 = state_24331__$1;
(statearr_24348_24390[(1)] = (19));

} else {
var statearr_24349_24391 = state_24331__$1;
(statearr_24349_24391[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24332 === (25))){
var inst_24321 = (state_24331[(2)]);
var state_24331__$1 = state_24331;
var statearr_24350_24392 = state_24331__$1;
(statearr_24350_24392[(2)] = inst_24321);

(statearr_24350_24392[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24332 === (17))){
var inst_24286 = (state_24331[(10)]);
var inst_24295 = cljs.core.first.call(null,inst_24286);
var inst_24296 = cljs.core.async.muxch_STAR_.call(null,inst_24295);
var inst_24297 = cljs.core.async.close_BANG_.call(null,inst_24296);
var inst_24298 = cljs.core.next.call(null,inst_24286);
var inst_24272 = inst_24298;
var inst_24273 = null;
var inst_24274 = (0);
var inst_24275 = (0);
var state_24331__$1 = (function (){var statearr_24351 = state_24331;
(statearr_24351[(12)] = inst_24275);

(statearr_24351[(13)] = inst_24274);

(statearr_24351[(14)] = inst_24297);

(statearr_24351[(15)] = inst_24272);

(statearr_24351[(16)] = inst_24273);

return statearr_24351;
})();
var statearr_24352_24393 = state_24331__$1;
(statearr_24352_24393[(2)] = null);

(statearr_24352_24393[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24332 === (3))){
var inst_24329 = (state_24331[(2)]);
var state_24331__$1 = state_24331;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24331__$1,inst_24329);
} else {
if((state_val_24332 === (12))){
var inst_24306 = (state_24331[(2)]);
var state_24331__$1 = state_24331;
var statearr_24353_24394 = state_24331__$1;
(statearr_24353_24394[(2)] = inst_24306);

(statearr_24353_24394[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24332 === (2))){
var state_24331__$1 = state_24331;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24331__$1,(4),ch);
} else {
if((state_val_24332 === (23))){
var state_24331__$1 = state_24331;
var statearr_24354_24395 = state_24331__$1;
(statearr_24354_24395[(2)] = null);

(statearr_24354_24395[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24332 === (19))){
var inst_24262 = (state_24331[(8)]);
var inst_24312 = (state_24331[(11)]);
var inst_24314 = cljs.core.async.muxch_STAR_.call(null,inst_24312);
var state_24331__$1 = state_24331;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24331__$1,(22),inst_24314,inst_24262);
} else {
if((state_val_24332 === (11))){
var inst_24286 = (state_24331[(10)]);
var inst_24272 = (state_24331[(15)]);
var inst_24286__$1 = cljs.core.seq.call(null,inst_24272);
var state_24331__$1 = (function (){var statearr_24355 = state_24331;
(statearr_24355[(10)] = inst_24286__$1);

return statearr_24355;
})();
if(inst_24286__$1){
var statearr_24356_24396 = state_24331__$1;
(statearr_24356_24396[(1)] = (13));

} else {
var statearr_24357_24397 = state_24331__$1;
(statearr_24357_24397[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24332 === (9))){
var inst_24308 = (state_24331[(2)]);
var state_24331__$1 = state_24331;
var statearr_24358_24398 = state_24331__$1;
(statearr_24358_24398[(2)] = inst_24308);

(statearr_24358_24398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24332 === (5))){
var inst_24269 = cljs.core.deref.call(null,mults);
var inst_24270 = cljs.core.vals.call(null,inst_24269);
var inst_24271 = cljs.core.seq.call(null,inst_24270);
var inst_24272 = inst_24271;
var inst_24273 = null;
var inst_24274 = (0);
var inst_24275 = (0);
var state_24331__$1 = (function (){var statearr_24359 = state_24331;
(statearr_24359[(12)] = inst_24275);

(statearr_24359[(13)] = inst_24274);

(statearr_24359[(15)] = inst_24272);

(statearr_24359[(16)] = inst_24273);

return statearr_24359;
})();
var statearr_24360_24399 = state_24331__$1;
(statearr_24360_24399[(2)] = null);

(statearr_24360_24399[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24332 === (14))){
var state_24331__$1 = state_24331;
var statearr_24364_24400 = state_24331__$1;
(statearr_24364_24400[(2)] = null);

(statearr_24364_24400[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24332 === (16))){
var inst_24286 = (state_24331[(10)]);
var inst_24290 = cljs.core.chunk_first.call(null,inst_24286);
var inst_24291 = cljs.core.chunk_rest.call(null,inst_24286);
var inst_24292 = cljs.core.count.call(null,inst_24290);
var inst_24272 = inst_24291;
var inst_24273 = inst_24290;
var inst_24274 = inst_24292;
var inst_24275 = (0);
var state_24331__$1 = (function (){var statearr_24365 = state_24331;
(statearr_24365[(12)] = inst_24275);

(statearr_24365[(13)] = inst_24274);

(statearr_24365[(15)] = inst_24272);

(statearr_24365[(16)] = inst_24273);

return statearr_24365;
})();
var statearr_24366_24401 = state_24331__$1;
(statearr_24366_24401[(2)] = null);

(statearr_24366_24401[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24332 === (10))){
var inst_24275 = (state_24331[(12)]);
var inst_24274 = (state_24331[(13)]);
var inst_24272 = (state_24331[(15)]);
var inst_24273 = (state_24331[(16)]);
var inst_24280 = cljs.core._nth.call(null,inst_24273,inst_24275);
var inst_24281 = cljs.core.async.muxch_STAR_.call(null,inst_24280);
var inst_24282 = cljs.core.async.close_BANG_.call(null,inst_24281);
var inst_24283 = (inst_24275 + (1));
var tmp24361 = inst_24274;
var tmp24362 = inst_24272;
var tmp24363 = inst_24273;
var inst_24272__$1 = tmp24362;
var inst_24273__$1 = tmp24363;
var inst_24274__$1 = tmp24361;
var inst_24275__$1 = inst_24283;
var state_24331__$1 = (function (){var statearr_24367 = state_24331;
(statearr_24367[(12)] = inst_24275__$1);

(statearr_24367[(13)] = inst_24274__$1);

(statearr_24367[(17)] = inst_24282);

(statearr_24367[(15)] = inst_24272__$1);

(statearr_24367[(16)] = inst_24273__$1);

return statearr_24367;
})();
var statearr_24368_24402 = state_24331__$1;
(statearr_24368_24402[(2)] = null);

(statearr_24368_24402[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24332 === (18))){
var inst_24301 = (state_24331[(2)]);
var state_24331__$1 = state_24331;
var statearr_24369_24403 = state_24331__$1;
(statearr_24369_24403[(2)] = inst_24301);

(statearr_24369_24403[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24332 === (8))){
var inst_24275 = (state_24331[(12)]);
var inst_24274 = (state_24331[(13)]);
var inst_24277 = (inst_24275 < inst_24274);
var inst_24278 = inst_24277;
var state_24331__$1 = state_24331;
if(cljs.core.truth_(inst_24278)){
var statearr_24370_24404 = state_24331__$1;
(statearr_24370_24404[(1)] = (10));

} else {
var statearr_24371_24405 = state_24331__$1;
(statearr_24371_24405[(1)] = (11));

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
});})(c__23143__auto___24377,mults,ensure_mult,p))
;
return ((function (switch__23053__auto__,c__23143__auto___24377,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23054__auto__ = null;
var cljs$core$async$state_machine__23054__auto____0 = (function (){
var statearr_24372 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24372[(0)] = cljs$core$async$state_machine__23054__auto__);

(statearr_24372[(1)] = (1));

return statearr_24372;
});
var cljs$core$async$state_machine__23054__auto____1 = (function (state_24331){
while(true){
var ret_value__23055__auto__ = (function (){try{while(true){
var result__23056__auto__ = switch__23053__auto__.call(null,state_24331);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23056__auto__;
}
break;
}
}catch (e24373){if((e24373 instanceof Object)){
var ex__23057__auto__ = e24373;
var statearr_24374_24406 = state_24331;
(statearr_24374_24406[(5)] = ex__23057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24407 = state_24331;
state_24331 = G__24407;
continue;
} else {
return ret_value__23055__auto__;
}
break;
}
});
cljs$core$async$state_machine__23054__auto__ = function(state_24331){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23054__auto____1.call(this,state_24331);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23054__auto____0;
cljs$core$async$state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23054__auto____1;
return cljs$core$async$state_machine__23054__auto__;
})()
;})(switch__23053__auto__,c__23143__auto___24377,mults,ensure_mult,p))
})();
var state__23145__auto__ = (function (){var statearr_24375 = f__23144__auto__.call(null);
(statearr_24375[(6)] = c__23143__auto___24377);

return statearr_24375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto___24377,mults,ensure_mult,p))
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
var G__24409 = arguments.length;
switch (G__24409) {
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
var G__24412 = arguments.length;
switch (G__24412) {
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
var G__24415 = arguments.length;
switch (G__24415) {
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
var c__23143__auto___24482 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto___24482,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23144__auto__ = (function (){var switch__23053__auto__ = ((function (c__23143__auto___24482,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24454){
var state_val_24455 = (state_24454[(1)]);
if((state_val_24455 === (7))){
var state_24454__$1 = state_24454;
var statearr_24456_24483 = state_24454__$1;
(statearr_24456_24483[(2)] = null);

(statearr_24456_24483[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24455 === (1))){
var state_24454__$1 = state_24454;
var statearr_24457_24484 = state_24454__$1;
(statearr_24457_24484[(2)] = null);

(statearr_24457_24484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24455 === (4))){
var inst_24418 = (state_24454[(7)]);
var inst_24420 = (inst_24418 < cnt);
var state_24454__$1 = state_24454;
if(cljs.core.truth_(inst_24420)){
var statearr_24458_24485 = state_24454__$1;
(statearr_24458_24485[(1)] = (6));

} else {
var statearr_24459_24486 = state_24454__$1;
(statearr_24459_24486[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24455 === (15))){
var inst_24450 = (state_24454[(2)]);
var state_24454__$1 = state_24454;
var statearr_24460_24487 = state_24454__$1;
(statearr_24460_24487[(2)] = inst_24450);

(statearr_24460_24487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24455 === (13))){
var inst_24443 = cljs.core.async.close_BANG_.call(null,out);
var state_24454__$1 = state_24454;
var statearr_24461_24488 = state_24454__$1;
(statearr_24461_24488[(2)] = inst_24443);

(statearr_24461_24488[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24455 === (6))){
var state_24454__$1 = state_24454;
var statearr_24462_24489 = state_24454__$1;
(statearr_24462_24489[(2)] = null);

(statearr_24462_24489[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24455 === (3))){
var inst_24452 = (state_24454[(2)]);
var state_24454__$1 = state_24454;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24454__$1,inst_24452);
} else {
if((state_val_24455 === (12))){
var inst_24440 = (state_24454[(8)]);
var inst_24440__$1 = (state_24454[(2)]);
var inst_24441 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24440__$1);
var state_24454__$1 = (function (){var statearr_24463 = state_24454;
(statearr_24463[(8)] = inst_24440__$1);

return statearr_24463;
})();
if(cljs.core.truth_(inst_24441)){
var statearr_24464_24490 = state_24454__$1;
(statearr_24464_24490[(1)] = (13));

} else {
var statearr_24465_24491 = state_24454__$1;
(statearr_24465_24491[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24455 === (2))){
var inst_24417 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24418 = (0);
var state_24454__$1 = (function (){var statearr_24466 = state_24454;
(statearr_24466[(9)] = inst_24417);

(statearr_24466[(7)] = inst_24418);

return statearr_24466;
})();
var statearr_24467_24492 = state_24454__$1;
(statearr_24467_24492[(2)] = null);

(statearr_24467_24492[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24455 === (11))){
var inst_24418 = (state_24454[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24454,(10),Object,null,(9));
var inst_24427 = chs__$1.call(null,inst_24418);
var inst_24428 = done.call(null,inst_24418);
var inst_24429 = cljs.core.async.take_BANG_.call(null,inst_24427,inst_24428);
var state_24454__$1 = state_24454;
var statearr_24468_24493 = state_24454__$1;
(statearr_24468_24493[(2)] = inst_24429);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24454__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24455 === (9))){
var inst_24418 = (state_24454[(7)]);
var inst_24431 = (state_24454[(2)]);
var inst_24432 = (inst_24418 + (1));
var inst_24418__$1 = inst_24432;
var state_24454__$1 = (function (){var statearr_24469 = state_24454;
(statearr_24469[(7)] = inst_24418__$1);

(statearr_24469[(10)] = inst_24431);

return statearr_24469;
})();
var statearr_24470_24494 = state_24454__$1;
(statearr_24470_24494[(2)] = null);

(statearr_24470_24494[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24455 === (5))){
var inst_24438 = (state_24454[(2)]);
var state_24454__$1 = (function (){var statearr_24471 = state_24454;
(statearr_24471[(11)] = inst_24438);

return statearr_24471;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24454__$1,(12),dchan);
} else {
if((state_val_24455 === (14))){
var inst_24440 = (state_24454[(8)]);
var inst_24445 = cljs.core.apply.call(null,f,inst_24440);
var state_24454__$1 = state_24454;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24454__$1,(16),out,inst_24445);
} else {
if((state_val_24455 === (16))){
var inst_24447 = (state_24454[(2)]);
var state_24454__$1 = (function (){var statearr_24472 = state_24454;
(statearr_24472[(12)] = inst_24447);

return statearr_24472;
})();
var statearr_24473_24495 = state_24454__$1;
(statearr_24473_24495[(2)] = null);

(statearr_24473_24495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24455 === (10))){
var inst_24422 = (state_24454[(2)]);
var inst_24423 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24454__$1 = (function (){var statearr_24474 = state_24454;
(statearr_24474[(13)] = inst_24422);

return statearr_24474;
})();
var statearr_24475_24496 = state_24454__$1;
(statearr_24475_24496[(2)] = inst_24423);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24454__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24455 === (8))){
var inst_24436 = (state_24454[(2)]);
var state_24454__$1 = state_24454;
var statearr_24476_24497 = state_24454__$1;
(statearr_24476_24497[(2)] = inst_24436);

(statearr_24476_24497[(1)] = (5));


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
});})(c__23143__auto___24482,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23053__auto__,c__23143__auto___24482,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23054__auto__ = null;
var cljs$core$async$state_machine__23054__auto____0 = (function (){
var statearr_24477 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24477[(0)] = cljs$core$async$state_machine__23054__auto__);

(statearr_24477[(1)] = (1));

return statearr_24477;
});
var cljs$core$async$state_machine__23054__auto____1 = (function (state_24454){
while(true){
var ret_value__23055__auto__ = (function (){try{while(true){
var result__23056__auto__ = switch__23053__auto__.call(null,state_24454);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23056__auto__;
}
break;
}
}catch (e24478){if((e24478 instanceof Object)){
var ex__23057__auto__ = e24478;
var statearr_24479_24498 = state_24454;
(statearr_24479_24498[(5)] = ex__23057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24499 = state_24454;
state_24454 = G__24499;
continue;
} else {
return ret_value__23055__auto__;
}
break;
}
});
cljs$core$async$state_machine__23054__auto__ = function(state_24454){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23054__auto____1.call(this,state_24454);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23054__auto____0;
cljs$core$async$state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23054__auto____1;
return cljs$core$async$state_machine__23054__auto__;
})()
;})(switch__23053__auto__,c__23143__auto___24482,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23145__auto__ = (function (){var statearr_24480 = f__23144__auto__.call(null);
(statearr_24480[(6)] = c__23143__auto___24482);

return statearr_24480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto___24482,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__24502 = arguments.length;
switch (G__24502) {
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
var c__23143__auto___24556 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto___24556,out){
return (function (){
var f__23144__auto__ = (function (){var switch__23053__auto__ = ((function (c__23143__auto___24556,out){
return (function (state_24534){
var state_val_24535 = (state_24534[(1)]);
if((state_val_24535 === (7))){
var inst_24514 = (state_24534[(7)]);
var inst_24513 = (state_24534[(8)]);
var inst_24513__$1 = (state_24534[(2)]);
var inst_24514__$1 = cljs.core.nth.call(null,inst_24513__$1,(0),null);
var inst_24515 = cljs.core.nth.call(null,inst_24513__$1,(1),null);
var inst_24516 = (inst_24514__$1 == null);
var state_24534__$1 = (function (){var statearr_24536 = state_24534;
(statearr_24536[(9)] = inst_24515);

(statearr_24536[(7)] = inst_24514__$1);

(statearr_24536[(8)] = inst_24513__$1);

return statearr_24536;
})();
if(cljs.core.truth_(inst_24516)){
var statearr_24537_24557 = state_24534__$1;
(statearr_24537_24557[(1)] = (8));

} else {
var statearr_24538_24558 = state_24534__$1;
(statearr_24538_24558[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (1))){
var inst_24503 = cljs.core.vec.call(null,chs);
var inst_24504 = inst_24503;
var state_24534__$1 = (function (){var statearr_24539 = state_24534;
(statearr_24539[(10)] = inst_24504);

return statearr_24539;
})();
var statearr_24540_24559 = state_24534__$1;
(statearr_24540_24559[(2)] = null);

(statearr_24540_24559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (4))){
var inst_24504 = (state_24534[(10)]);
var state_24534__$1 = state_24534;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24534__$1,(7),inst_24504);
} else {
if((state_val_24535 === (6))){
var inst_24530 = (state_24534[(2)]);
var state_24534__$1 = state_24534;
var statearr_24541_24560 = state_24534__$1;
(statearr_24541_24560[(2)] = inst_24530);

(statearr_24541_24560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (3))){
var inst_24532 = (state_24534[(2)]);
var state_24534__$1 = state_24534;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24534__$1,inst_24532);
} else {
if((state_val_24535 === (2))){
var inst_24504 = (state_24534[(10)]);
var inst_24506 = cljs.core.count.call(null,inst_24504);
var inst_24507 = (inst_24506 > (0));
var state_24534__$1 = state_24534;
if(cljs.core.truth_(inst_24507)){
var statearr_24543_24561 = state_24534__$1;
(statearr_24543_24561[(1)] = (4));

} else {
var statearr_24544_24562 = state_24534__$1;
(statearr_24544_24562[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (11))){
var inst_24504 = (state_24534[(10)]);
var inst_24523 = (state_24534[(2)]);
var tmp24542 = inst_24504;
var inst_24504__$1 = tmp24542;
var state_24534__$1 = (function (){var statearr_24545 = state_24534;
(statearr_24545[(11)] = inst_24523);

(statearr_24545[(10)] = inst_24504__$1);

return statearr_24545;
})();
var statearr_24546_24563 = state_24534__$1;
(statearr_24546_24563[(2)] = null);

(statearr_24546_24563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (9))){
var inst_24514 = (state_24534[(7)]);
var state_24534__$1 = state_24534;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24534__$1,(11),out,inst_24514);
} else {
if((state_val_24535 === (5))){
var inst_24528 = cljs.core.async.close_BANG_.call(null,out);
var state_24534__$1 = state_24534;
var statearr_24547_24564 = state_24534__$1;
(statearr_24547_24564[(2)] = inst_24528);

(statearr_24547_24564[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (10))){
var inst_24526 = (state_24534[(2)]);
var state_24534__$1 = state_24534;
var statearr_24548_24565 = state_24534__$1;
(statearr_24548_24565[(2)] = inst_24526);

(statearr_24548_24565[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (8))){
var inst_24515 = (state_24534[(9)]);
var inst_24514 = (state_24534[(7)]);
var inst_24504 = (state_24534[(10)]);
var inst_24513 = (state_24534[(8)]);
var inst_24518 = (function (){var cs = inst_24504;
var vec__24509 = inst_24513;
var v = inst_24514;
var c = inst_24515;
return ((function (cs,vec__24509,v,c,inst_24515,inst_24514,inst_24504,inst_24513,state_val_24535,c__23143__auto___24556,out){
return (function (p1__24500_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24500_SHARP_);
});
;})(cs,vec__24509,v,c,inst_24515,inst_24514,inst_24504,inst_24513,state_val_24535,c__23143__auto___24556,out))
})();
var inst_24519 = cljs.core.filterv.call(null,inst_24518,inst_24504);
var inst_24504__$1 = inst_24519;
var state_24534__$1 = (function (){var statearr_24549 = state_24534;
(statearr_24549[(10)] = inst_24504__$1);

return statearr_24549;
})();
var statearr_24550_24566 = state_24534__$1;
(statearr_24550_24566[(2)] = null);

(statearr_24550_24566[(1)] = (2));


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
});})(c__23143__auto___24556,out))
;
return ((function (switch__23053__auto__,c__23143__auto___24556,out){
return (function() {
var cljs$core$async$state_machine__23054__auto__ = null;
var cljs$core$async$state_machine__23054__auto____0 = (function (){
var statearr_24551 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24551[(0)] = cljs$core$async$state_machine__23054__auto__);

(statearr_24551[(1)] = (1));

return statearr_24551;
});
var cljs$core$async$state_machine__23054__auto____1 = (function (state_24534){
while(true){
var ret_value__23055__auto__ = (function (){try{while(true){
var result__23056__auto__ = switch__23053__auto__.call(null,state_24534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23056__auto__;
}
break;
}
}catch (e24552){if((e24552 instanceof Object)){
var ex__23057__auto__ = e24552;
var statearr_24553_24567 = state_24534;
(statearr_24553_24567[(5)] = ex__23057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24568 = state_24534;
state_24534 = G__24568;
continue;
} else {
return ret_value__23055__auto__;
}
break;
}
});
cljs$core$async$state_machine__23054__auto__ = function(state_24534){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23054__auto____1.call(this,state_24534);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23054__auto____0;
cljs$core$async$state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23054__auto____1;
return cljs$core$async$state_machine__23054__auto__;
})()
;})(switch__23053__auto__,c__23143__auto___24556,out))
})();
var state__23145__auto__ = (function (){var statearr_24554 = f__23144__auto__.call(null);
(statearr_24554[(6)] = c__23143__auto___24556);

return statearr_24554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto___24556,out))
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
var G__24570 = arguments.length;
switch (G__24570) {
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
var c__23143__auto___24615 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto___24615,out){
return (function (){
var f__23144__auto__ = (function (){var switch__23053__auto__ = ((function (c__23143__auto___24615,out){
return (function (state_24594){
var state_val_24595 = (state_24594[(1)]);
if((state_val_24595 === (7))){
var inst_24576 = (state_24594[(7)]);
var inst_24576__$1 = (state_24594[(2)]);
var inst_24577 = (inst_24576__$1 == null);
var inst_24578 = cljs.core.not.call(null,inst_24577);
var state_24594__$1 = (function (){var statearr_24596 = state_24594;
(statearr_24596[(7)] = inst_24576__$1);

return statearr_24596;
})();
if(inst_24578){
var statearr_24597_24616 = state_24594__$1;
(statearr_24597_24616[(1)] = (8));

} else {
var statearr_24598_24617 = state_24594__$1;
(statearr_24598_24617[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24595 === (1))){
var inst_24571 = (0);
var state_24594__$1 = (function (){var statearr_24599 = state_24594;
(statearr_24599[(8)] = inst_24571);

return statearr_24599;
})();
var statearr_24600_24618 = state_24594__$1;
(statearr_24600_24618[(2)] = null);

(statearr_24600_24618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24595 === (4))){
var state_24594__$1 = state_24594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24594__$1,(7),ch);
} else {
if((state_val_24595 === (6))){
var inst_24589 = (state_24594[(2)]);
var state_24594__$1 = state_24594;
var statearr_24601_24619 = state_24594__$1;
(statearr_24601_24619[(2)] = inst_24589);

(statearr_24601_24619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24595 === (3))){
var inst_24591 = (state_24594[(2)]);
var inst_24592 = cljs.core.async.close_BANG_.call(null,out);
var state_24594__$1 = (function (){var statearr_24602 = state_24594;
(statearr_24602[(9)] = inst_24591);

return statearr_24602;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24594__$1,inst_24592);
} else {
if((state_val_24595 === (2))){
var inst_24571 = (state_24594[(8)]);
var inst_24573 = (inst_24571 < n);
var state_24594__$1 = state_24594;
if(cljs.core.truth_(inst_24573)){
var statearr_24603_24620 = state_24594__$1;
(statearr_24603_24620[(1)] = (4));

} else {
var statearr_24604_24621 = state_24594__$1;
(statearr_24604_24621[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24595 === (11))){
var inst_24571 = (state_24594[(8)]);
var inst_24581 = (state_24594[(2)]);
var inst_24582 = (inst_24571 + (1));
var inst_24571__$1 = inst_24582;
var state_24594__$1 = (function (){var statearr_24605 = state_24594;
(statearr_24605[(10)] = inst_24581);

(statearr_24605[(8)] = inst_24571__$1);

return statearr_24605;
})();
var statearr_24606_24622 = state_24594__$1;
(statearr_24606_24622[(2)] = null);

(statearr_24606_24622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24595 === (9))){
var state_24594__$1 = state_24594;
var statearr_24607_24623 = state_24594__$1;
(statearr_24607_24623[(2)] = null);

(statearr_24607_24623[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24595 === (5))){
var state_24594__$1 = state_24594;
var statearr_24608_24624 = state_24594__$1;
(statearr_24608_24624[(2)] = null);

(statearr_24608_24624[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24595 === (10))){
var inst_24586 = (state_24594[(2)]);
var state_24594__$1 = state_24594;
var statearr_24609_24625 = state_24594__$1;
(statearr_24609_24625[(2)] = inst_24586);

(statearr_24609_24625[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24595 === (8))){
var inst_24576 = (state_24594[(7)]);
var state_24594__$1 = state_24594;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24594__$1,(11),out,inst_24576);
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
});})(c__23143__auto___24615,out))
;
return ((function (switch__23053__auto__,c__23143__auto___24615,out){
return (function() {
var cljs$core$async$state_machine__23054__auto__ = null;
var cljs$core$async$state_machine__23054__auto____0 = (function (){
var statearr_24610 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24610[(0)] = cljs$core$async$state_machine__23054__auto__);

(statearr_24610[(1)] = (1));

return statearr_24610;
});
var cljs$core$async$state_machine__23054__auto____1 = (function (state_24594){
while(true){
var ret_value__23055__auto__ = (function (){try{while(true){
var result__23056__auto__ = switch__23053__auto__.call(null,state_24594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23056__auto__;
}
break;
}
}catch (e24611){if((e24611 instanceof Object)){
var ex__23057__auto__ = e24611;
var statearr_24612_24626 = state_24594;
(statearr_24612_24626[(5)] = ex__23057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24627 = state_24594;
state_24594 = G__24627;
continue;
} else {
return ret_value__23055__auto__;
}
break;
}
});
cljs$core$async$state_machine__23054__auto__ = function(state_24594){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23054__auto____1.call(this,state_24594);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23054__auto____0;
cljs$core$async$state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23054__auto____1;
return cljs$core$async$state_machine__23054__auto__;
})()
;})(switch__23053__auto__,c__23143__auto___24615,out))
})();
var state__23145__auto__ = (function (){var statearr_24613 = f__23144__auto__.call(null);
(statearr_24613[(6)] = c__23143__auto___24615);

return statearr_24613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto___24615,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24629 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24629 = (function (f,ch,meta24630){
this.f = f;
this.ch = ch;
this.meta24630 = meta24630;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24631,meta24630__$1){
var self__ = this;
var _24631__$1 = this;
return (new cljs.core.async.t_cljs$core$async24629(self__.f,self__.ch,meta24630__$1));
});

cljs.core.async.t_cljs$core$async24629.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24631){
var self__ = this;
var _24631__$1 = this;
return self__.meta24630;
});

cljs.core.async.t_cljs$core$async24629.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24629.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24629.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24629.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24629.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24632 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24632 = (function (f,ch,meta24630,_,fn1,meta24633){
this.f = f;
this.ch = ch;
this.meta24630 = meta24630;
this._ = _;
this.fn1 = fn1;
this.meta24633 = meta24633;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24634,meta24633__$1){
var self__ = this;
var _24634__$1 = this;
return (new cljs.core.async.t_cljs$core$async24632(self__.f,self__.ch,self__.meta24630,self__._,self__.fn1,meta24633__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24632.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24634){
var self__ = this;
var _24634__$1 = this;
return self__.meta24633;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24632.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24632.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24632.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24632.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24628_SHARP_){
return f1.call(null,(((p1__24628_SHARP_ == null))?null:self__.f.call(null,p1__24628_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24632.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24630","meta24630",-1432358078,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24629","cljs.core.async/t_cljs$core$async24629",1950960167,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24633","meta24633",-601352932,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24632.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24632.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24632";

cljs.core.async.t_cljs$core$async24632.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18743__auto__,writer__18744__auto__,opt__18745__auto__){
return cljs.core._write.call(null,writer__18744__auto__,"cljs.core.async/t_cljs$core$async24632");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async24632 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24632(f__$1,ch__$1,meta24630__$1,___$2,fn1__$1,meta24633){
return (new cljs.core.async.t_cljs$core$async24632(f__$1,ch__$1,meta24630__$1,___$2,fn1__$1,meta24633));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24632(self__.f,self__.ch,self__.meta24630,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18060__auto__ = ret;
if(cljs.core.truth_(and__18060__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18060__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24629.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24629.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24629.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24630","meta24630",-1432358078,null)], null);
});

cljs.core.async.t_cljs$core$async24629.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24629.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24629";

cljs.core.async.t_cljs$core$async24629.cljs$lang$ctorPrWriter = (function (this__18743__auto__,writer__18744__auto__,opt__18745__auto__){
return cljs.core._write.call(null,writer__18744__auto__,"cljs.core.async/t_cljs$core$async24629");
});

cljs.core.async.__GT_t_cljs$core$async24629 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24629(f__$1,ch__$1,meta24630){
return (new cljs.core.async.t_cljs$core$async24629(f__$1,ch__$1,meta24630));
});

}

return (new cljs.core.async.t_cljs$core$async24629(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24635 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24635 = (function (f,ch,meta24636){
this.f = f;
this.ch = ch;
this.meta24636 = meta24636;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24637,meta24636__$1){
var self__ = this;
var _24637__$1 = this;
return (new cljs.core.async.t_cljs$core$async24635(self__.f,self__.ch,meta24636__$1));
});

cljs.core.async.t_cljs$core$async24635.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24637){
var self__ = this;
var _24637__$1 = this;
return self__.meta24636;
});

cljs.core.async.t_cljs$core$async24635.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24635.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24635.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24635.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24635.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24635.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24635.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24636","meta24636",-234787347,null)], null);
});

cljs.core.async.t_cljs$core$async24635.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24635.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24635";

cljs.core.async.t_cljs$core$async24635.cljs$lang$ctorPrWriter = (function (this__18743__auto__,writer__18744__auto__,opt__18745__auto__){
return cljs.core._write.call(null,writer__18744__auto__,"cljs.core.async/t_cljs$core$async24635");
});

cljs.core.async.__GT_t_cljs$core$async24635 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24635(f__$1,ch__$1,meta24636){
return (new cljs.core.async.t_cljs$core$async24635(f__$1,ch__$1,meta24636));
});

}

return (new cljs.core.async.t_cljs$core$async24635(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24638 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24638 = (function (p,ch,meta24639){
this.p = p;
this.ch = ch;
this.meta24639 = meta24639;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24640,meta24639__$1){
var self__ = this;
var _24640__$1 = this;
return (new cljs.core.async.t_cljs$core$async24638(self__.p,self__.ch,meta24639__$1));
});

cljs.core.async.t_cljs$core$async24638.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24640){
var self__ = this;
var _24640__$1 = this;
return self__.meta24639;
});

cljs.core.async.t_cljs$core$async24638.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24638.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24638.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24638.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24638.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24638.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24638.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24638.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24639","meta24639",-1845139209,null)], null);
});

cljs.core.async.t_cljs$core$async24638.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24638.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24638";

cljs.core.async.t_cljs$core$async24638.cljs$lang$ctorPrWriter = (function (this__18743__auto__,writer__18744__auto__,opt__18745__auto__){
return cljs.core._write.call(null,writer__18744__auto__,"cljs.core.async/t_cljs$core$async24638");
});

cljs.core.async.__GT_t_cljs$core$async24638 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24638(p__$1,ch__$1,meta24639){
return (new cljs.core.async.t_cljs$core$async24638(p__$1,ch__$1,meta24639));
});

}

return (new cljs.core.async.t_cljs$core$async24638(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__24642 = arguments.length;
switch (G__24642) {
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
var c__23143__auto___24682 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto___24682,out){
return (function (){
var f__23144__auto__ = (function (){var switch__23053__auto__ = ((function (c__23143__auto___24682,out){
return (function (state_24663){
var state_val_24664 = (state_24663[(1)]);
if((state_val_24664 === (7))){
var inst_24659 = (state_24663[(2)]);
var state_24663__$1 = state_24663;
var statearr_24665_24683 = state_24663__$1;
(statearr_24665_24683[(2)] = inst_24659);

(statearr_24665_24683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24664 === (1))){
var state_24663__$1 = state_24663;
var statearr_24666_24684 = state_24663__$1;
(statearr_24666_24684[(2)] = null);

(statearr_24666_24684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24664 === (4))){
var inst_24645 = (state_24663[(7)]);
var inst_24645__$1 = (state_24663[(2)]);
var inst_24646 = (inst_24645__$1 == null);
var state_24663__$1 = (function (){var statearr_24667 = state_24663;
(statearr_24667[(7)] = inst_24645__$1);

return statearr_24667;
})();
if(cljs.core.truth_(inst_24646)){
var statearr_24668_24685 = state_24663__$1;
(statearr_24668_24685[(1)] = (5));

} else {
var statearr_24669_24686 = state_24663__$1;
(statearr_24669_24686[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24664 === (6))){
var inst_24645 = (state_24663[(7)]);
var inst_24650 = p.call(null,inst_24645);
var state_24663__$1 = state_24663;
if(cljs.core.truth_(inst_24650)){
var statearr_24670_24687 = state_24663__$1;
(statearr_24670_24687[(1)] = (8));

} else {
var statearr_24671_24688 = state_24663__$1;
(statearr_24671_24688[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24664 === (3))){
var inst_24661 = (state_24663[(2)]);
var state_24663__$1 = state_24663;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24663__$1,inst_24661);
} else {
if((state_val_24664 === (2))){
var state_24663__$1 = state_24663;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24663__$1,(4),ch);
} else {
if((state_val_24664 === (11))){
var inst_24653 = (state_24663[(2)]);
var state_24663__$1 = state_24663;
var statearr_24672_24689 = state_24663__$1;
(statearr_24672_24689[(2)] = inst_24653);

(statearr_24672_24689[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24664 === (9))){
var state_24663__$1 = state_24663;
var statearr_24673_24690 = state_24663__$1;
(statearr_24673_24690[(2)] = null);

(statearr_24673_24690[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24664 === (5))){
var inst_24648 = cljs.core.async.close_BANG_.call(null,out);
var state_24663__$1 = state_24663;
var statearr_24674_24691 = state_24663__$1;
(statearr_24674_24691[(2)] = inst_24648);

(statearr_24674_24691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24664 === (10))){
var inst_24656 = (state_24663[(2)]);
var state_24663__$1 = (function (){var statearr_24675 = state_24663;
(statearr_24675[(8)] = inst_24656);

return statearr_24675;
})();
var statearr_24676_24692 = state_24663__$1;
(statearr_24676_24692[(2)] = null);

(statearr_24676_24692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24664 === (8))){
var inst_24645 = (state_24663[(7)]);
var state_24663__$1 = state_24663;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24663__$1,(11),out,inst_24645);
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
});})(c__23143__auto___24682,out))
;
return ((function (switch__23053__auto__,c__23143__auto___24682,out){
return (function() {
var cljs$core$async$state_machine__23054__auto__ = null;
var cljs$core$async$state_machine__23054__auto____0 = (function (){
var statearr_24677 = [null,null,null,null,null,null,null,null,null];
(statearr_24677[(0)] = cljs$core$async$state_machine__23054__auto__);

(statearr_24677[(1)] = (1));

return statearr_24677;
});
var cljs$core$async$state_machine__23054__auto____1 = (function (state_24663){
while(true){
var ret_value__23055__auto__ = (function (){try{while(true){
var result__23056__auto__ = switch__23053__auto__.call(null,state_24663);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23056__auto__;
}
break;
}
}catch (e24678){if((e24678 instanceof Object)){
var ex__23057__auto__ = e24678;
var statearr_24679_24693 = state_24663;
(statearr_24679_24693[(5)] = ex__23057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24663);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24694 = state_24663;
state_24663 = G__24694;
continue;
} else {
return ret_value__23055__auto__;
}
break;
}
});
cljs$core$async$state_machine__23054__auto__ = function(state_24663){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23054__auto____1.call(this,state_24663);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23054__auto____0;
cljs$core$async$state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23054__auto____1;
return cljs$core$async$state_machine__23054__auto__;
})()
;})(switch__23053__auto__,c__23143__auto___24682,out))
})();
var state__23145__auto__ = (function (){var statearr_24680 = f__23144__auto__.call(null);
(statearr_24680[(6)] = c__23143__auto___24682);

return statearr_24680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto___24682,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__24696 = arguments.length;
switch (G__24696) {
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
var c__23143__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto__){
return (function (){
var f__23144__auto__ = (function (){var switch__23053__auto__ = ((function (c__23143__auto__){
return (function (state_24759){
var state_val_24760 = (state_24759[(1)]);
if((state_val_24760 === (7))){
var inst_24755 = (state_24759[(2)]);
var state_24759__$1 = state_24759;
var statearr_24761_24799 = state_24759__$1;
(statearr_24761_24799[(2)] = inst_24755);

(statearr_24761_24799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24760 === (20))){
var inst_24725 = (state_24759[(7)]);
var inst_24736 = (state_24759[(2)]);
var inst_24737 = cljs.core.next.call(null,inst_24725);
var inst_24711 = inst_24737;
var inst_24712 = null;
var inst_24713 = (0);
var inst_24714 = (0);
var state_24759__$1 = (function (){var statearr_24762 = state_24759;
(statearr_24762[(8)] = inst_24711);

(statearr_24762[(9)] = inst_24713);

(statearr_24762[(10)] = inst_24712);

(statearr_24762[(11)] = inst_24736);

(statearr_24762[(12)] = inst_24714);

return statearr_24762;
})();
var statearr_24763_24800 = state_24759__$1;
(statearr_24763_24800[(2)] = null);

(statearr_24763_24800[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24760 === (1))){
var state_24759__$1 = state_24759;
var statearr_24764_24801 = state_24759__$1;
(statearr_24764_24801[(2)] = null);

(statearr_24764_24801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24760 === (4))){
var inst_24700 = (state_24759[(13)]);
var inst_24700__$1 = (state_24759[(2)]);
var inst_24701 = (inst_24700__$1 == null);
var state_24759__$1 = (function (){var statearr_24765 = state_24759;
(statearr_24765[(13)] = inst_24700__$1);

return statearr_24765;
})();
if(cljs.core.truth_(inst_24701)){
var statearr_24766_24802 = state_24759__$1;
(statearr_24766_24802[(1)] = (5));

} else {
var statearr_24767_24803 = state_24759__$1;
(statearr_24767_24803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24760 === (15))){
var state_24759__$1 = state_24759;
var statearr_24771_24804 = state_24759__$1;
(statearr_24771_24804[(2)] = null);

(statearr_24771_24804[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24760 === (21))){
var state_24759__$1 = state_24759;
var statearr_24772_24805 = state_24759__$1;
(statearr_24772_24805[(2)] = null);

(statearr_24772_24805[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24760 === (13))){
var inst_24711 = (state_24759[(8)]);
var inst_24713 = (state_24759[(9)]);
var inst_24712 = (state_24759[(10)]);
var inst_24714 = (state_24759[(12)]);
var inst_24721 = (state_24759[(2)]);
var inst_24722 = (inst_24714 + (1));
var tmp24768 = inst_24711;
var tmp24769 = inst_24713;
var tmp24770 = inst_24712;
var inst_24711__$1 = tmp24768;
var inst_24712__$1 = tmp24770;
var inst_24713__$1 = tmp24769;
var inst_24714__$1 = inst_24722;
var state_24759__$1 = (function (){var statearr_24773 = state_24759;
(statearr_24773[(8)] = inst_24711__$1);

(statearr_24773[(9)] = inst_24713__$1);

(statearr_24773[(10)] = inst_24712__$1);

(statearr_24773[(14)] = inst_24721);

(statearr_24773[(12)] = inst_24714__$1);

return statearr_24773;
})();
var statearr_24774_24806 = state_24759__$1;
(statearr_24774_24806[(2)] = null);

(statearr_24774_24806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24760 === (22))){
var state_24759__$1 = state_24759;
var statearr_24775_24807 = state_24759__$1;
(statearr_24775_24807[(2)] = null);

(statearr_24775_24807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24760 === (6))){
var inst_24700 = (state_24759[(13)]);
var inst_24709 = f.call(null,inst_24700);
var inst_24710 = cljs.core.seq.call(null,inst_24709);
var inst_24711 = inst_24710;
var inst_24712 = null;
var inst_24713 = (0);
var inst_24714 = (0);
var state_24759__$1 = (function (){var statearr_24776 = state_24759;
(statearr_24776[(8)] = inst_24711);

(statearr_24776[(9)] = inst_24713);

(statearr_24776[(10)] = inst_24712);

(statearr_24776[(12)] = inst_24714);

return statearr_24776;
})();
var statearr_24777_24808 = state_24759__$1;
(statearr_24777_24808[(2)] = null);

(statearr_24777_24808[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24760 === (17))){
var inst_24725 = (state_24759[(7)]);
var inst_24729 = cljs.core.chunk_first.call(null,inst_24725);
var inst_24730 = cljs.core.chunk_rest.call(null,inst_24725);
var inst_24731 = cljs.core.count.call(null,inst_24729);
var inst_24711 = inst_24730;
var inst_24712 = inst_24729;
var inst_24713 = inst_24731;
var inst_24714 = (0);
var state_24759__$1 = (function (){var statearr_24778 = state_24759;
(statearr_24778[(8)] = inst_24711);

(statearr_24778[(9)] = inst_24713);

(statearr_24778[(10)] = inst_24712);

(statearr_24778[(12)] = inst_24714);

return statearr_24778;
})();
var statearr_24779_24809 = state_24759__$1;
(statearr_24779_24809[(2)] = null);

(statearr_24779_24809[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24760 === (3))){
var inst_24757 = (state_24759[(2)]);
var state_24759__$1 = state_24759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24759__$1,inst_24757);
} else {
if((state_val_24760 === (12))){
var inst_24745 = (state_24759[(2)]);
var state_24759__$1 = state_24759;
var statearr_24780_24810 = state_24759__$1;
(statearr_24780_24810[(2)] = inst_24745);

(statearr_24780_24810[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24760 === (2))){
var state_24759__$1 = state_24759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24759__$1,(4),in$);
} else {
if((state_val_24760 === (23))){
var inst_24753 = (state_24759[(2)]);
var state_24759__$1 = state_24759;
var statearr_24781_24811 = state_24759__$1;
(statearr_24781_24811[(2)] = inst_24753);

(statearr_24781_24811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24760 === (19))){
var inst_24740 = (state_24759[(2)]);
var state_24759__$1 = state_24759;
var statearr_24782_24812 = state_24759__$1;
(statearr_24782_24812[(2)] = inst_24740);

(statearr_24782_24812[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24760 === (11))){
var inst_24711 = (state_24759[(8)]);
var inst_24725 = (state_24759[(7)]);
var inst_24725__$1 = cljs.core.seq.call(null,inst_24711);
var state_24759__$1 = (function (){var statearr_24783 = state_24759;
(statearr_24783[(7)] = inst_24725__$1);

return statearr_24783;
})();
if(inst_24725__$1){
var statearr_24784_24813 = state_24759__$1;
(statearr_24784_24813[(1)] = (14));

} else {
var statearr_24785_24814 = state_24759__$1;
(statearr_24785_24814[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24760 === (9))){
var inst_24747 = (state_24759[(2)]);
var inst_24748 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24759__$1 = (function (){var statearr_24786 = state_24759;
(statearr_24786[(15)] = inst_24747);

return statearr_24786;
})();
if(cljs.core.truth_(inst_24748)){
var statearr_24787_24815 = state_24759__$1;
(statearr_24787_24815[(1)] = (21));

} else {
var statearr_24788_24816 = state_24759__$1;
(statearr_24788_24816[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24760 === (5))){
var inst_24703 = cljs.core.async.close_BANG_.call(null,out);
var state_24759__$1 = state_24759;
var statearr_24789_24817 = state_24759__$1;
(statearr_24789_24817[(2)] = inst_24703);

(statearr_24789_24817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24760 === (14))){
var inst_24725 = (state_24759[(7)]);
var inst_24727 = cljs.core.chunked_seq_QMARK_.call(null,inst_24725);
var state_24759__$1 = state_24759;
if(inst_24727){
var statearr_24790_24818 = state_24759__$1;
(statearr_24790_24818[(1)] = (17));

} else {
var statearr_24791_24819 = state_24759__$1;
(statearr_24791_24819[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24760 === (16))){
var inst_24743 = (state_24759[(2)]);
var state_24759__$1 = state_24759;
var statearr_24792_24820 = state_24759__$1;
(statearr_24792_24820[(2)] = inst_24743);

(statearr_24792_24820[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24760 === (10))){
var inst_24712 = (state_24759[(10)]);
var inst_24714 = (state_24759[(12)]);
var inst_24719 = cljs.core._nth.call(null,inst_24712,inst_24714);
var state_24759__$1 = state_24759;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24759__$1,(13),out,inst_24719);
} else {
if((state_val_24760 === (18))){
var inst_24725 = (state_24759[(7)]);
var inst_24734 = cljs.core.first.call(null,inst_24725);
var state_24759__$1 = state_24759;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24759__$1,(20),out,inst_24734);
} else {
if((state_val_24760 === (8))){
var inst_24713 = (state_24759[(9)]);
var inst_24714 = (state_24759[(12)]);
var inst_24716 = (inst_24714 < inst_24713);
var inst_24717 = inst_24716;
var state_24759__$1 = state_24759;
if(cljs.core.truth_(inst_24717)){
var statearr_24793_24821 = state_24759__$1;
(statearr_24793_24821[(1)] = (10));

} else {
var statearr_24794_24822 = state_24759__$1;
(statearr_24794_24822[(1)] = (11));

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
});})(c__23143__auto__))
;
return ((function (switch__23053__auto__,c__23143__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23054__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23054__auto____0 = (function (){
var statearr_24795 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24795[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23054__auto__);

(statearr_24795[(1)] = (1));

return statearr_24795;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23054__auto____1 = (function (state_24759){
while(true){
var ret_value__23055__auto__ = (function (){try{while(true){
var result__23056__auto__ = switch__23053__auto__.call(null,state_24759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23056__auto__;
}
break;
}
}catch (e24796){if((e24796 instanceof Object)){
var ex__23057__auto__ = e24796;
var statearr_24797_24823 = state_24759;
(statearr_24797_24823[(5)] = ex__23057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24824 = state_24759;
state_24759 = G__24824;
continue;
} else {
return ret_value__23055__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23054__auto__ = function(state_24759){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23054__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23054__auto____1.call(this,state_24759);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23054__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23054__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23054__auto__;
})()
;})(switch__23053__auto__,c__23143__auto__))
})();
var state__23145__auto__ = (function (){var statearr_24798 = f__23144__auto__.call(null);
(statearr_24798[(6)] = c__23143__auto__);

return statearr_24798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto__))
);

return c__23143__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__24826 = arguments.length;
switch (G__24826) {
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
var G__24829 = arguments.length;
switch (G__24829) {
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
var G__24832 = arguments.length;
switch (G__24832) {
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
var c__23143__auto___24879 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto___24879,out){
return (function (){
var f__23144__auto__ = (function (){var switch__23053__auto__ = ((function (c__23143__auto___24879,out){
return (function (state_24856){
var state_val_24857 = (state_24856[(1)]);
if((state_val_24857 === (7))){
var inst_24851 = (state_24856[(2)]);
var state_24856__$1 = state_24856;
var statearr_24858_24880 = state_24856__$1;
(statearr_24858_24880[(2)] = inst_24851);

(statearr_24858_24880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24857 === (1))){
var inst_24833 = null;
var state_24856__$1 = (function (){var statearr_24859 = state_24856;
(statearr_24859[(7)] = inst_24833);

return statearr_24859;
})();
var statearr_24860_24881 = state_24856__$1;
(statearr_24860_24881[(2)] = null);

(statearr_24860_24881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24857 === (4))){
var inst_24836 = (state_24856[(8)]);
var inst_24836__$1 = (state_24856[(2)]);
var inst_24837 = (inst_24836__$1 == null);
var inst_24838 = cljs.core.not.call(null,inst_24837);
var state_24856__$1 = (function (){var statearr_24861 = state_24856;
(statearr_24861[(8)] = inst_24836__$1);

return statearr_24861;
})();
if(inst_24838){
var statearr_24862_24882 = state_24856__$1;
(statearr_24862_24882[(1)] = (5));

} else {
var statearr_24863_24883 = state_24856__$1;
(statearr_24863_24883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24857 === (6))){
var state_24856__$1 = state_24856;
var statearr_24864_24884 = state_24856__$1;
(statearr_24864_24884[(2)] = null);

(statearr_24864_24884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24857 === (3))){
var inst_24853 = (state_24856[(2)]);
var inst_24854 = cljs.core.async.close_BANG_.call(null,out);
var state_24856__$1 = (function (){var statearr_24865 = state_24856;
(statearr_24865[(9)] = inst_24853);

return statearr_24865;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24856__$1,inst_24854);
} else {
if((state_val_24857 === (2))){
var state_24856__$1 = state_24856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24856__$1,(4),ch);
} else {
if((state_val_24857 === (11))){
var inst_24836 = (state_24856[(8)]);
var inst_24845 = (state_24856[(2)]);
var inst_24833 = inst_24836;
var state_24856__$1 = (function (){var statearr_24866 = state_24856;
(statearr_24866[(7)] = inst_24833);

(statearr_24866[(10)] = inst_24845);

return statearr_24866;
})();
var statearr_24867_24885 = state_24856__$1;
(statearr_24867_24885[(2)] = null);

(statearr_24867_24885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24857 === (9))){
var inst_24836 = (state_24856[(8)]);
var state_24856__$1 = state_24856;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24856__$1,(11),out,inst_24836);
} else {
if((state_val_24857 === (5))){
var inst_24833 = (state_24856[(7)]);
var inst_24836 = (state_24856[(8)]);
var inst_24840 = cljs.core._EQ_.call(null,inst_24836,inst_24833);
var state_24856__$1 = state_24856;
if(inst_24840){
var statearr_24869_24886 = state_24856__$1;
(statearr_24869_24886[(1)] = (8));

} else {
var statearr_24870_24887 = state_24856__$1;
(statearr_24870_24887[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24857 === (10))){
var inst_24848 = (state_24856[(2)]);
var state_24856__$1 = state_24856;
var statearr_24871_24888 = state_24856__$1;
(statearr_24871_24888[(2)] = inst_24848);

(statearr_24871_24888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24857 === (8))){
var inst_24833 = (state_24856[(7)]);
var tmp24868 = inst_24833;
var inst_24833__$1 = tmp24868;
var state_24856__$1 = (function (){var statearr_24872 = state_24856;
(statearr_24872[(7)] = inst_24833__$1);

return statearr_24872;
})();
var statearr_24873_24889 = state_24856__$1;
(statearr_24873_24889[(2)] = null);

(statearr_24873_24889[(1)] = (2));


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
});})(c__23143__auto___24879,out))
;
return ((function (switch__23053__auto__,c__23143__auto___24879,out){
return (function() {
var cljs$core$async$state_machine__23054__auto__ = null;
var cljs$core$async$state_machine__23054__auto____0 = (function (){
var statearr_24874 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24874[(0)] = cljs$core$async$state_machine__23054__auto__);

(statearr_24874[(1)] = (1));

return statearr_24874;
});
var cljs$core$async$state_machine__23054__auto____1 = (function (state_24856){
while(true){
var ret_value__23055__auto__ = (function (){try{while(true){
var result__23056__auto__ = switch__23053__auto__.call(null,state_24856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23056__auto__;
}
break;
}
}catch (e24875){if((e24875 instanceof Object)){
var ex__23057__auto__ = e24875;
var statearr_24876_24890 = state_24856;
(statearr_24876_24890[(5)] = ex__23057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24891 = state_24856;
state_24856 = G__24891;
continue;
} else {
return ret_value__23055__auto__;
}
break;
}
});
cljs$core$async$state_machine__23054__auto__ = function(state_24856){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23054__auto____1.call(this,state_24856);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23054__auto____0;
cljs$core$async$state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23054__auto____1;
return cljs$core$async$state_machine__23054__auto__;
})()
;})(switch__23053__auto__,c__23143__auto___24879,out))
})();
var state__23145__auto__ = (function (){var statearr_24877 = f__23144__auto__.call(null);
(statearr_24877[(6)] = c__23143__auto___24879);

return statearr_24877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto___24879,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__24893 = arguments.length;
switch (G__24893) {
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
var c__23143__auto___24959 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto___24959,out){
return (function (){
var f__23144__auto__ = (function (){var switch__23053__auto__ = ((function (c__23143__auto___24959,out){
return (function (state_24931){
var state_val_24932 = (state_24931[(1)]);
if((state_val_24932 === (7))){
var inst_24927 = (state_24931[(2)]);
var state_24931__$1 = state_24931;
var statearr_24933_24960 = state_24931__$1;
(statearr_24933_24960[(2)] = inst_24927);

(statearr_24933_24960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (1))){
var inst_24894 = (new Array(n));
var inst_24895 = inst_24894;
var inst_24896 = (0);
var state_24931__$1 = (function (){var statearr_24934 = state_24931;
(statearr_24934[(7)] = inst_24896);

(statearr_24934[(8)] = inst_24895);

return statearr_24934;
})();
var statearr_24935_24961 = state_24931__$1;
(statearr_24935_24961[(2)] = null);

(statearr_24935_24961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (4))){
var inst_24899 = (state_24931[(9)]);
var inst_24899__$1 = (state_24931[(2)]);
var inst_24900 = (inst_24899__$1 == null);
var inst_24901 = cljs.core.not.call(null,inst_24900);
var state_24931__$1 = (function (){var statearr_24936 = state_24931;
(statearr_24936[(9)] = inst_24899__$1);

return statearr_24936;
})();
if(inst_24901){
var statearr_24937_24962 = state_24931__$1;
(statearr_24937_24962[(1)] = (5));

} else {
var statearr_24938_24963 = state_24931__$1;
(statearr_24938_24963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (15))){
var inst_24921 = (state_24931[(2)]);
var state_24931__$1 = state_24931;
var statearr_24939_24964 = state_24931__$1;
(statearr_24939_24964[(2)] = inst_24921);

(statearr_24939_24964[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (13))){
var state_24931__$1 = state_24931;
var statearr_24940_24965 = state_24931__$1;
(statearr_24940_24965[(2)] = null);

(statearr_24940_24965[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (6))){
var inst_24896 = (state_24931[(7)]);
var inst_24917 = (inst_24896 > (0));
var state_24931__$1 = state_24931;
if(cljs.core.truth_(inst_24917)){
var statearr_24941_24966 = state_24931__$1;
(statearr_24941_24966[(1)] = (12));

} else {
var statearr_24942_24967 = state_24931__$1;
(statearr_24942_24967[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (3))){
var inst_24929 = (state_24931[(2)]);
var state_24931__$1 = state_24931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24931__$1,inst_24929);
} else {
if((state_val_24932 === (12))){
var inst_24895 = (state_24931[(8)]);
var inst_24919 = cljs.core.vec.call(null,inst_24895);
var state_24931__$1 = state_24931;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24931__$1,(15),out,inst_24919);
} else {
if((state_val_24932 === (2))){
var state_24931__$1 = state_24931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24931__$1,(4),ch);
} else {
if((state_val_24932 === (11))){
var inst_24911 = (state_24931[(2)]);
var inst_24912 = (new Array(n));
var inst_24895 = inst_24912;
var inst_24896 = (0);
var state_24931__$1 = (function (){var statearr_24943 = state_24931;
(statearr_24943[(7)] = inst_24896);

(statearr_24943[(8)] = inst_24895);

(statearr_24943[(10)] = inst_24911);

return statearr_24943;
})();
var statearr_24944_24968 = state_24931__$1;
(statearr_24944_24968[(2)] = null);

(statearr_24944_24968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (9))){
var inst_24895 = (state_24931[(8)]);
var inst_24909 = cljs.core.vec.call(null,inst_24895);
var state_24931__$1 = state_24931;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24931__$1,(11),out,inst_24909);
} else {
if((state_val_24932 === (5))){
var inst_24896 = (state_24931[(7)]);
var inst_24895 = (state_24931[(8)]);
var inst_24899 = (state_24931[(9)]);
var inst_24904 = (state_24931[(11)]);
var inst_24903 = (inst_24895[inst_24896] = inst_24899);
var inst_24904__$1 = (inst_24896 + (1));
var inst_24905 = (inst_24904__$1 < n);
var state_24931__$1 = (function (){var statearr_24945 = state_24931;
(statearr_24945[(12)] = inst_24903);

(statearr_24945[(11)] = inst_24904__$1);

return statearr_24945;
})();
if(cljs.core.truth_(inst_24905)){
var statearr_24946_24969 = state_24931__$1;
(statearr_24946_24969[(1)] = (8));

} else {
var statearr_24947_24970 = state_24931__$1;
(statearr_24947_24970[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (14))){
var inst_24924 = (state_24931[(2)]);
var inst_24925 = cljs.core.async.close_BANG_.call(null,out);
var state_24931__$1 = (function (){var statearr_24949 = state_24931;
(statearr_24949[(13)] = inst_24924);

return statearr_24949;
})();
var statearr_24950_24971 = state_24931__$1;
(statearr_24950_24971[(2)] = inst_24925);

(statearr_24950_24971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (10))){
var inst_24915 = (state_24931[(2)]);
var state_24931__$1 = state_24931;
var statearr_24951_24972 = state_24931__$1;
(statearr_24951_24972[(2)] = inst_24915);

(statearr_24951_24972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (8))){
var inst_24895 = (state_24931[(8)]);
var inst_24904 = (state_24931[(11)]);
var tmp24948 = inst_24895;
var inst_24895__$1 = tmp24948;
var inst_24896 = inst_24904;
var state_24931__$1 = (function (){var statearr_24952 = state_24931;
(statearr_24952[(7)] = inst_24896);

(statearr_24952[(8)] = inst_24895__$1);

return statearr_24952;
})();
var statearr_24953_24973 = state_24931__$1;
(statearr_24953_24973[(2)] = null);

(statearr_24953_24973[(1)] = (2));


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
});})(c__23143__auto___24959,out))
;
return ((function (switch__23053__auto__,c__23143__auto___24959,out){
return (function() {
var cljs$core$async$state_machine__23054__auto__ = null;
var cljs$core$async$state_machine__23054__auto____0 = (function (){
var statearr_24954 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24954[(0)] = cljs$core$async$state_machine__23054__auto__);

(statearr_24954[(1)] = (1));

return statearr_24954;
});
var cljs$core$async$state_machine__23054__auto____1 = (function (state_24931){
while(true){
var ret_value__23055__auto__ = (function (){try{while(true){
var result__23056__auto__ = switch__23053__auto__.call(null,state_24931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23056__auto__;
}
break;
}
}catch (e24955){if((e24955 instanceof Object)){
var ex__23057__auto__ = e24955;
var statearr_24956_24974 = state_24931;
(statearr_24956_24974[(5)] = ex__23057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24955;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24975 = state_24931;
state_24931 = G__24975;
continue;
} else {
return ret_value__23055__auto__;
}
break;
}
});
cljs$core$async$state_machine__23054__auto__ = function(state_24931){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23054__auto____1.call(this,state_24931);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23054__auto____0;
cljs$core$async$state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23054__auto____1;
return cljs$core$async$state_machine__23054__auto__;
})()
;})(switch__23053__auto__,c__23143__auto___24959,out))
})();
var state__23145__auto__ = (function (){var statearr_24957 = f__23144__auto__.call(null);
(statearr_24957[(6)] = c__23143__auto___24959);

return statearr_24957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto___24959,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__24977 = arguments.length;
switch (G__24977) {
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
var c__23143__auto___25047 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto___25047,out){
return (function (){
var f__23144__auto__ = (function (){var switch__23053__auto__ = ((function (c__23143__auto___25047,out){
return (function (state_25019){
var state_val_25020 = (state_25019[(1)]);
if((state_val_25020 === (7))){
var inst_25015 = (state_25019[(2)]);
var state_25019__$1 = state_25019;
var statearr_25021_25048 = state_25019__$1;
(statearr_25021_25048[(2)] = inst_25015);

(statearr_25021_25048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25020 === (1))){
var inst_24978 = [];
var inst_24979 = inst_24978;
var inst_24980 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25019__$1 = (function (){var statearr_25022 = state_25019;
(statearr_25022[(7)] = inst_24979);

(statearr_25022[(8)] = inst_24980);

return statearr_25022;
})();
var statearr_25023_25049 = state_25019__$1;
(statearr_25023_25049[(2)] = null);

(statearr_25023_25049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25020 === (4))){
var inst_24983 = (state_25019[(9)]);
var inst_24983__$1 = (state_25019[(2)]);
var inst_24984 = (inst_24983__$1 == null);
var inst_24985 = cljs.core.not.call(null,inst_24984);
var state_25019__$1 = (function (){var statearr_25024 = state_25019;
(statearr_25024[(9)] = inst_24983__$1);

return statearr_25024;
})();
if(inst_24985){
var statearr_25025_25050 = state_25019__$1;
(statearr_25025_25050[(1)] = (5));

} else {
var statearr_25026_25051 = state_25019__$1;
(statearr_25026_25051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25020 === (15))){
var inst_25009 = (state_25019[(2)]);
var state_25019__$1 = state_25019;
var statearr_25027_25052 = state_25019__$1;
(statearr_25027_25052[(2)] = inst_25009);

(statearr_25027_25052[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25020 === (13))){
var state_25019__$1 = state_25019;
var statearr_25028_25053 = state_25019__$1;
(statearr_25028_25053[(2)] = null);

(statearr_25028_25053[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25020 === (6))){
var inst_24979 = (state_25019[(7)]);
var inst_25004 = inst_24979.length;
var inst_25005 = (inst_25004 > (0));
var state_25019__$1 = state_25019;
if(cljs.core.truth_(inst_25005)){
var statearr_25029_25054 = state_25019__$1;
(statearr_25029_25054[(1)] = (12));

} else {
var statearr_25030_25055 = state_25019__$1;
(statearr_25030_25055[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25020 === (3))){
var inst_25017 = (state_25019[(2)]);
var state_25019__$1 = state_25019;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25019__$1,inst_25017);
} else {
if((state_val_25020 === (12))){
var inst_24979 = (state_25019[(7)]);
var inst_25007 = cljs.core.vec.call(null,inst_24979);
var state_25019__$1 = state_25019;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25019__$1,(15),out,inst_25007);
} else {
if((state_val_25020 === (2))){
var state_25019__$1 = state_25019;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25019__$1,(4),ch);
} else {
if((state_val_25020 === (11))){
var inst_24987 = (state_25019[(10)]);
var inst_24983 = (state_25019[(9)]);
var inst_24997 = (state_25019[(2)]);
var inst_24998 = [];
var inst_24999 = inst_24998.push(inst_24983);
var inst_24979 = inst_24998;
var inst_24980 = inst_24987;
var state_25019__$1 = (function (){var statearr_25031 = state_25019;
(statearr_25031[(11)] = inst_24997);

(statearr_25031[(7)] = inst_24979);

(statearr_25031[(12)] = inst_24999);

(statearr_25031[(8)] = inst_24980);

return statearr_25031;
})();
var statearr_25032_25056 = state_25019__$1;
(statearr_25032_25056[(2)] = null);

(statearr_25032_25056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25020 === (9))){
var inst_24979 = (state_25019[(7)]);
var inst_24995 = cljs.core.vec.call(null,inst_24979);
var state_25019__$1 = state_25019;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25019__$1,(11),out,inst_24995);
} else {
if((state_val_25020 === (5))){
var inst_24987 = (state_25019[(10)]);
var inst_24980 = (state_25019[(8)]);
var inst_24983 = (state_25019[(9)]);
var inst_24987__$1 = f.call(null,inst_24983);
var inst_24988 = cljs.core._EQ_.call(null,inst_24987__$1,inst_24980);
var inst_24989 = cljs.core.keyword_identical_QMARK_.call(null,inst_24980,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24990 = (inst_24988) || (inst_24989);
var state_25019__$1 = (function (){var statearr_25033 = state_25019;
(statearr_25033[(10)] = inst_24987__$1);

return statearr_25033;
})();
if(cljs.core.truth_(inst_24990)){
var statearr_25034_25057 = state_25019__$1;
(statearr_25034_25057[(1)] = (8));

} else {
var statearr_25035_25058 = state_25019__$1;
(statearr_25035_25058[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25020 === (14))){
var inst_25012 = (state_25019[(2)]);
var inst_25013 = cljs.core.async.close_BANG_.call(null,out);
var state_25019__$1 = (function (){var statearr_25037 = state_25019;
(statearr_25037[(13)] = inst_25012);

return statearr_25037;
})();
var statearr_25038_25059 = state_25019__$1;
(statearr_25038_25059[(2)] = inst_25013);

(statearr_25038_25059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25020 === (10))){
var inst_25002 = (state_25019[(2)]);
var state_25019__$1 = state_25019;
var statearr_25039_25060 = state_25019__$1;
(statearr_25039_25060[(2)] = inst_25002);

(statearr_25039_25060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25020 === (8))){
var inst_24987 = (state_25019[(10)]);
var inst_24979 = (state_25019[(7)]);
var inst_24983 = (state_25019[(9)]);
var inst_24992 = inst_24979.push(inst_24983);
var tmp25036 = inst_24979;
var inst_24979__$1 = tmp25036;
var inst_24980 = inst_24987;
var state_25019__$1 = (function (){var statearr_25040 = state_25019;
(statearr_25040[(7)] = inst_24979__$1);

(statearr_25040[(14)] = inst_24992);

(statearr_25040[(8)] = inst_24980);

return statearr_25040;
})();
var statearr_25041_25061 = state_25019__$1;
(statearr_25041_25061[(2)] = null);

(statearr_25041_25061[(1)] = (2));


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
});})(c__23143__auto___25047,out))
;
return ((function (switch__23053__auto__,c__23143__auto___25047,out){
return (function() {
var cljs$core$async$state_machine__23054__auto__ = null;
var cljs$core$async$state_machine__23054__auto____0 = (function (){
var statearr_25042 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25042[(0)] = cljs$core$async$state_machine__23054__auto__);

(statearr_25042[(1)] = (1));

return statearr_25042;
});
var cljs$core$async$state_machine__23054__auto____1 = (function (state_25019){
while(true){
var ret_value__23055__auto__ = (function (){try{while(true){
var result__23056__auto__ = switch__23053__auto__.call(null,state_25019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23056__auto__;
}
break;
}
}catch (e25043){if((e25043 instanceof Object)){
var ex__23057__auto__ = e25043;
var statearr_25044_25062 = state_25019;
(statearr_25044_25062[(5)] = ex__23057__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25019);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25063 = state_25019;
state_25019 = G__25063;
continue;
} else {
return ret_value__23055__auto__;
}
break;
}
});
cljs$core$async$state_machine__23054__auto__ = function(state_25019){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23054__auto____1.call(this,state_25019);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23054__auto____0;
cljs$core$async$state_machine__23054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23054__auto____1;
return cljs$core$async$state_machine__23054__auto__;
})()
;})(switch__23053__auto__,c__23143__auto___25047,out))
})();
var state__23145__auto__ = (function (){var statearr_25045 = f__23144__auto__.call(null);
(statearr_25045[(6)] = c__23143__auto___25047);

return statearr_25045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto___25047,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
