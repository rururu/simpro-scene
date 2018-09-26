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
var G__15134 = arguments.length;
switch (G__15134) {
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
if(typeof cljs.core.async.t_cljs$core$async15135 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15135 = (function (f,blockable,meta15136){
this.f = f;
this.blockable = blockable;
this.meta15136 = meta15136;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15137,meta15136__$1){
var self__ = this;
var _15137__$1 = this;
return (new cljs.core.async.t_cljs$core$async15135(self__.f,self__.blockable,meta15136__$1));
});

cljs.core.async.t_cljs$core$async15135.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15137){
var self__ = this;
var _15137__$1 = this;
return self__.meta15136;
});

cljs.core.async.t_cljs$core$async15135.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15135.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15135.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async15135.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async15135.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta15136","meta15136",-1833432729,null)], null);
});

cljs.core.async.t_cljs$core$async15135.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15135.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15135";

cljs.core.async.t_cljs$core$async15135.cljs$lang$ctorPrWriter = (function (this__10333__auto__,writer__10334__auto__,opt__10335__auto__){
return cljs.core._write.call(null,writer__10334__auto__,"cljs.core.async/t_cljs$core$async15135");
});

cljs.core.async.__GT_t_cljs$core$async15135 = (function cljs$core$async$__GT_t_cljs$core$async15135(f__$1,blockable__$1,meta15136){
return (new cljs.core.async.t_cljs$core$async15135(f__$1,blockable__$1,meta15136));
});

}

return (new cljs.core.async.t_cljs$core$async15135(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__15141 = arguments.length;
switch (G__15141) {
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
var G__15144 = arguments.length;
switch (G__15144) {
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
var G__15147 = arguments.length;
switch (G__15147) {
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
var val_15149 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_15149);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_15149,ret){
return (function (){
return fn1.call(null,val_15149);
});})(val_15149,ret))
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
var G__15151 = arguments.length;
switch (G__15151) {
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
var n__10707__auto___15153 = n;
var x_15154 = (0);
while(true){
if((x_15154 < n__10707__auto___15153)){
(a[x_15154] = (0));

var G__15155 = (x_15154 + (1));
x_15154 = G__15155;
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

var G__15156 = (i + (1));
i = G__15156;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async15157 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15157 = (function (flag,meta15158){
this.flag = flag;
this.meta15158 = meta15158;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15159,meta15158__$1){
var self__ = this;
var _15159__$1 = this;
return (new cljs.core.async.t_cljs$core$async15157(self__.flag,meta15158__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async15157.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15159){
var self__ = this;
var _15159__$1 = this;
return self__.meta15158;
});})(flag))
;

cljs.core.async.t_cljs$core$async15157.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15157.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async15157.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15157.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15157.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15158","meta15158",-2012100293,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async15157.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15157.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15157";

cljs.core.async.t_cljs$core$async15157.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__10333__auto__,writer__10334__auto__,opt__10335__auto__){
return cljs.core._write.call(null,writer__10334__auto__,"cljs.core.async/t_cljs$core$async15157");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async15157 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15157(flag__$1,meta15158){
return (new cljs.core.async.t_cljs$core$async15157(flag__$1,meta15158));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async15157(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async15160 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15160 = (function (flag,cb,meta15161){
this.flag = flag;
this.cb = cb;
this.meta15161 = meta15161;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15162,meta15161__$1){
var self__ = this;
var _15162__$1 = this;
return (new cljs.core.async.t_cljs$core$async15160(self__.flag,self__.cb,meta15161__$1));
});

cljs.core.async.t_cljs$core$async15160.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15162){
var self__ = this;
var _15162__$1 = this;
return self__.meta15161;
});

cljs.core.async.t_cljs$core$async15160.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15160.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async15160.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15160.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async15160.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15161","meta15161",2099123674,null)], null);
});

cljs.core.async.t_cljs$core$async15160.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15160.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15160";

cljs.core.async.t_cljs$core$async15160.cljs$lang$ctorPrWriter = (function (this__10333__auto__,writer__10334__auto__,opt__10335__auto__){
return cljs.core._write.call(null,writer__10334__auto__,"cljs.core.async/t_cljs$core$async15160");
});

cljs.core.async.__GT_t_cljs$core$async15160 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15160(flag__$1,cb__$1,meta15161){
return (new cljs.core.async.t_cljs$core$async15160(flag__$1,cb__$1,meta15161));
});

}

return (new cljs.core.async.t_cljs$core$async15160(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__15163_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15163_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15164_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15164_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__9662__auto__ = wport;
if(cljs.core.truth_(or__9662__auto__)){
return or__9662__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15165 = (i + (1));
i = G__15165;
continue;
}
} else {
return null;
}
break;
}
})();
var or__9662__auto__ = ret;
if(cljs.core.truth_(or__9662__auto__)){
return or__9662__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__9650__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__9650__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__9650__auto__;
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
var args__10948__auto__ = [];
var len__10941__auto___15171 = arguments.length;
var i__10942__auto___15172 = (0);
while(true){
if((i__10942__auto___15172 < len__10941__auto___15171)){
args__10948__auto__.push((arguments[i__10942__auto___15172]));

var G__15173 = (i__10942__auto___15172 + (1));
i__10942__auto___15172 = G__15173;
continue;
} else {
}
break;
}

var argseq__10949__auto__ = ((((1) < args__10948__auto__.length))?(new cljs.core.IndexedSeq(args__10948__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10949__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15168){
var map__15169 = p__15168;
var map__15169__$1 = ((((!((map__15169 == null)))?((((map__15169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15169.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15169):map__15169);
var opts = map__15169__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15166){
var G__15167 = cljs.core.first.call(null,seq15166);
var seq15166__$1 = cljs.core.next.call(null,seq15166);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15167,seq15166__$1);
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
var G__15175 = arguments.length;
switch (G__15175) {
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
var c__15074__auto___15221 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15074__auto___15221){
return (function (){
var f__15075__auto__ = (function (){var switch__14984__auto__ = ((function (c__15074__auto___15221){
return (function (state_15199){
var state_val_15200 = (state_15199[(1)]);
if((state_val_15200 === (7))){
var inst_15195 = (state_15199[(2)]);
var state_15199__$1 = state_15199;
var statearr_15201_15222 = state_15199__$1;
(statearr_15201_15222[(2)] = inst_15195);

(statearr_15201_15222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15200 === (1))){
var state_15199__$1 = state_15199;
var statearr_15202_15223 = state_15199__$1;
(statearr_15202_15223[(2)] = null);

(statearr_15202_15223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15200 === (4))){
var inst_15178 = (state_15199[(7)]);
var inst_15178__$1 = (state_15199[(2)]);
var inst_15179 = (inst_15178__$1 == null);
var state_15199__$1 = (function (){var statearr_15203 = state_15199;
(statearr_15203[(7)] = inst_15178__$1);

return statearr_15203;
})();
if(cljs.core.truth_(inst_15179)){
var statearr_15204_15224 = state_15199__$1;
(statearr_15204_15224[(1)] = (5));

} else {
var statearr_15205_15225 = state_15199__$1;
(statearr_15205_15225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15200 === (13))){
var state_15199__$1 = state_15199;
var statearr_15206_15226 = state_15199__$1;
(statearr_15206_15226[(2)] = null);

(statearr_15206_15226[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15200 === (6))){
var inst_15178 = (state_15199[(7)]);
var state_15199__$1 = state_15199;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15199__$1,(11),to,inst_15178);
} else {
if((state_val_15200 === (3))){
var inst_15197 = (state_15199[(2)]);
var state_15199__$1 = state_15199;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15199__$1,inst_15197);
} else {
if((state_val_15200 === (12))){
var state_15199__$1 = state_15199;
var statearr_15207_15227 = state_15199__$1;
(statearr_15207_15227[(2)] = null);

(statearr_15207_15227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15200 === (2))){
var state_15199__$1 = state_15199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15199__$1,(4),from);
} else {
if((state_val_15200 === (11))){
var inst_15188 = (state_15199[(2)]);
var state_15199__$1 = state_15199;
if(cljs.core.truth_(inst_15188)){
var statearr_15208_15228 = state_15199__$1;
(statearr_15208_15228[(1)] = (12));

} else {
var statearr_15209_15229 = state_15199__$1;
(statearr_15209_15229[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15200 === (9))){
var state_15199__$1 = state_15199;
var statearr_15210_15230 = state_15199__$1;
(statearr_15210_15230[(2)] = null);

(statearr_15210_15230[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15200 === (5))){
var state_15199__$1 = state_15199;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15211_15231 = state_15199__$1;
(statearr_15211_15231[(1)] = (8));

} else {
var statearr_15212_15232 = state_15199__$1;
(statearr_15212_15232[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15200 === (14))){
var inst_15193 = (state_15199[(2)]);
var state_15199__$1 = state_15199;
var statearr_15213_15233 = state_15199__$1;
(statearr_15213_15233[(2)] = inst_15193);

(statearr_15213_15233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15200 === (10))){
var inst_15185 = (state_15199[(2)]);
var state_15199__$1 = state_15199;
var statearr_15214_15234 = state_15199__$1;
(statearr_15214_15234[(2)] = inst_15185);

(statearr_15214_15234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15200 === (8))){
var inst_15182 = cljs.core.async.close_BANG_.call(null,to);
var state_15199__$1 = state_15199;
var statearr_15215_15235 = state_15199__$1;
(statearr_15215_15235[(2)] = inst_15182);

(statearr_15215_15235[(1)] = (10));


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
});})(c__15074__auto___15221))
;
return ((function (switch__14984__auto__,c__15074__auto___15221){
return (function() {
var cljs$core$async$state_machine__14985__auto__ = null;
var cljs$core$async$state_machine__14985__auto____0 = (function (){
var statearr_15216 = [null,null,null,null,null,null,null,null];
(statearr_15216[(0)] = cljs$core$async$state_machine__14985__auto__);

(statearr_15216[(1)] = (1));

return statearr_15216;
});
var cljs$core$async$state_machine__14985__auto____1 = (function (state_15199){
while(true){
var ret_value__14986__auto__ = (function (){try{while(true){
var result__14987__auto__ = switch__14984__auto__.call(null,state_15199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14987__auto__;
}
break;
}
}catch (e15217){if((e15217 instanceof Object)){
var ex__14988__auto__ = e15217;
var statearr_15218_15236 = state_15199;
(statearr_15218_15236[(5)] = ex__14988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15237 = state_15199;
state_15199 = G__15237;
continue;
} else {
return ret_value__14986__auto__;
}
break;
}
});
cljs$core$async$state_machine__14985__auto__ = function(state_15199){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14985__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14985__auto____1.call(this,state_15199);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14985__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14985__auto____0;
cljs$core$async$state_machine__14985__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14985__auto____1;
return cljs$core$async$state_machine__14985__auto__;
})()
;})(switch__14984__auto__,c__15074__auto___15221))
})();
var state__15076__auto__ = (function (){var statearr_15219 = f__15075__auto__.call(null);
(statearr_15219[(6)] = c__15074__auto___15221);

return statearr_15219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15076__auto__);
});})(c__15074__auto___15221))
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
return (function (p__15238){
var vec__15239 = p__15238;
var v = cljs.core.nth.call(null,vec__15239,(0),null);
var p = cljs.core.nth.call(null,vec__15239,(1),null);
var job = vec__15239;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__15074__auto___15410 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15074__auto___15410,res,vec__15239,v,p,job,jobs,results){
return (function (){
var f__15075__auto__ = (function (){var switch__14984__auto__ = ((function (c__15074__auto___15410,res,vec__15239,v,p,job,jobs,results){
return (function (state_15246){
var state_val_15247 = (state_15246[(1)]);
if((state_val_15247 === (1))){
var state_15246__$1 = state_15246;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15246__$1,(2),res,v);
} else {
if((state_val_15247 === (2))){
var inst_15243 = (state_15246[(2)]);
var inst_15244 = cljs.core.async.close_BANG_.call(null,res);
var state_15246__$1 = (function (){var statearr_15248 = state_15246;
(statearr_15248[(7)] = inst_15243);

return statearr_15248;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15246__$1,inst_15244);
} else {
return null;
}
}
});})(c__15074__auto___15410,res,vec__15239,v,p,job,jobs,results))
;
return ((function (switch__14984__auto__,c__15074__auto___15410,res,vec__15239,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14985__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14985__auto____0 = (function (){
var statearr_15249 = [null,null,null,null,null,null,null,null];
(statearr_15249[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14985__auto__);

(statearr_15249[(1)] = (1));

return statearr_15249;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14985__auto____1 = (function (state_15246){
while(true){
var ret_value__14986__auto__ = (function (){try{while(true){
var result__14987__auto__ = switch__14984__auto__.call(null,state_15246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14987__auto__;
}
break;
}
}catch (e15250){if((e15250 instanceof Object)){
var ex__14988__auto__ = e15250;
var statearr_15251_15411 = state_15246;
(statearr_15251_15411[(5)] = ex__14988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15412 = state_15246;
state_15246 = G__15412;
continue;
} else {
return ret_value__14986__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14985__auto__ = function(state_15246){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14985__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14985__auto____1.call(this,state_15246);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__14985__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14985__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14985__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14985__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14985__auto__;
})()
;})(switch__14984__auto__,c__15074__auto___15410,res,vec__15239,v,p,job,jobs,results))
})();
var state__15076__auto__ = (function (){var statearr_15252 = f__15075__auto__.call(null);
(statearr_15252[(6)] = c__15074__auto___15410);

return statearr_15252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15076__auto__);
});})(c__15074__auto___15410,res,vec__15239,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__15253){
var vec__15254 = p__15253;
var v = cljs.core.nth.call(null,vec__15254,(0),null);
var p = cljs.core.nth.call(null,vec__15254,(1),null);
var job = vec__15254;
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
var n__10707__auto___15413 = n;
var __15414 = (0);
while(true){
if((__15414 < n__10707__auto___15413)){
var G__15257_15415 = type;
var G__15257_15416__$1 = (((G__15257_15415 instanceof cljs.core.Keyword))?G__15257_15415.fqn:null);
switch (G__15257_15416__$1) {
case "compute":
var c__15074__auto___15418 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15414,c__15074__auto___15418,G__15257_15415,G__15257_15416__$1,n__10707__auto___15413,jobs,results,process,async){
return (function (){
var f__15075__auto__ = (function (){var switch__14984__auto__ = ((function (__15414,c__15074__auto___15418,G__15257_15415,G__15257_15416__$1,n__10707__auto___15413,jobs,results,process,async){
return (function (state_15270){
var state_val_15271 = (state_15270[(1)]);
if((state_val_15271 === (1))){
var state_15270__$1 = state_15270;
var statearr_15272_15419 = state_15270__$1;
(statearr_15272_15419[(2)] = null);

(statearr_15272_15419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15271 === (2))){
var state_15270__$1 = state_15270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15270__$1,(4),jobs);
} else {
if((state_val_15271 === (3))){
var inst_15268 = (state_15270[(2)]);
var state_15270__$1 = state_15270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15270__$1,inst_15268);
} else {
if((state_val_15271 === (4))){
var inst_15260 = (state_15270[(2)]);
var inst_15261 = process.call(null,inst_15260);
var state_15270__$1 = state_15270;
if(cljs.core.truth_(inst_15261)){
var statearr_15273_15420 = state_15270__$1;
(statearr_15273_15420[(1)] = (5));

} else {
var statearr_15274_15421 = state_15270__$1;
(statearr_15274_15421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15271 === (5))){
var state_15270__$1 = state_15270;
var statearr_15275_15422 = state_15270__$1;
(statearr_15275_15422[(2)] = null);

(statearr_15275_15422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15271 === (6))){
var state_15270__$1 = state_15270;
var statearr_15276_15423 = state_15270__$1;
(statearr_15276_15423[(2)] = null);

(statearr_15276_15423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15271 === (7))){
var inst_15266 = (state_15270[(2)]);
var state_15270__$1 = state_15270;
var statearr_15277_15424 = state_15270__$1;
(statearr_15277_15424[(2)] = inst_15266);

(statearr_15277_15424[(1)] = (3));


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
});})(__15414,c__15074__auto___15418,G__15257_15415,G__15257_15416__$1,n__10707__auto___15413,jobs,results,process,async))
;
return ((function (__15414,switch__14984__auto__,c__15074__auto___15418,G__15257_15415,G__15257_15416__$1,n__10707__auto___15413,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14985__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14985__auto____0 = (function (){
var statearr_15278 = [null,null,null,null,null,null,null];
(statearr_15278[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14985__auto__);

(statearr_15278[(1)] = (1));

return statearr_15278;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14985__auto____1 = (function (state_15270){
while(true){
var ret_value__14986__auto__ = (function (){try{while(true){
var result__14987__auto__ = switch__14984__auto__.call(null,state_15270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14987__auto__;
}
break;
}
}catch (e15279){if((e15279 instanceof Object)){
var ex__14988__auto__ = e15279;
var statearr_15280_15425 = state_15270;
(statearr_15280_15425[(5)] = ex__14988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15426 = state_15270;
state_15270 = G__15426;
continue;
} else {
return ret_value__14986__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14985__auto__ = function(state_15270){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14985__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14985__auto____1.call(this,state_15270);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__14985__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14985__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14985__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14985__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14985__auto__;
})()
;})(__15414,switch__14984__auto__,c__15074__auto___15418,G__15257_15415,G__15257_15416__$1,n__10707__auto___15413,jobs,results,process,async))
})();
var state__15076__auto__ = (function (){var statearr_15281 = f__15075__auto__.call(null);
(statearr_15281[(6)] = c__15074__auto___15418);

return statearr_15281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15076__auto__);
});})(__15414,c__15074__auto___15418,G__15257_15415,G__15257_15416__$1,n__10707__auto___15413,jobs,results,process,async))
);


break;
case "async":
var c__15074__auto___15427 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15414,c__15074__auto___15427,G__15257_15415,G__15257_15416__$1,n__10707__auto___15413,jobs,results,process,async){
return (function (){
var f__15075__auto__ = (function (){var switch__14984__auto__ = ((function (__15414,c__15074__auto___15427,G__15257_15415,G__15257_15416__$1,n__10707__auto___15413,jobs,results,process,async){
return (function (state_15294){
var state_val_15295 = (state_15294[(1)]);
if((state_val_15295 === (1))){
var state_15294__$1 = state_15294;
var statearr_15296_15428 = state_15294__$1;
(statearr_15296_15428[(2)] = null);

(statearr_15296_15428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15295 === (2))){
var state_15294__$1 = state_15294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15294__$1,(4),jobs);
} else {
if((state_val_15295 === (3))){
var inst_15292 = (state_15294[(2)]);
var state_15294__$1 = state_15294;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15294__$1,inst_15292);
} else {
if((state_val_15295 === (4))){
var inst_15284 = (state_15294[(2)]);
var inst_15285 = async.call(null,inst_15284);
var state_15294__$1 = state_15294;
if(cljs.core.truth_(inst_15285)){
var statearr_15297_15429 = state_15294__$1;
(statearr_15297_15429[(1)] = (5));

} else {
var statearr_15298_15430 = state_15294__$1;
(statearr_15298_15430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15295 === (5))){
var state_15294__$1 = state_15294;
var statearr_15299_15431 = state_15294__$1;
(statearr_15299_15431[(2)] = null);

(statearr_15299_15431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15295 === (6))){
var state_15294__$1 = state_15294;
var statearr_15300_15432 = state_15294__$1;
(statearr_15300_15432[(2)] = null);

(statearr_15300_15432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15295 === (7))){
var inst_15290 = (state_15294[(2)]);
var state_15294__$1 = state_15294;
var statearr_15301_15433 = state_15294__$1;
(statearr_15301_15433[(2)] = inst_15290);

(statearr_15301_15433[(1)] = (3));


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
});})(__15414,c__15074__auto___15427,G__15257_15415,G__15257_15416__$1,n__10707__auto___15413,jobs,results,process,async))
;
return ((function (__15414,switch__14984__auto__,c__15074__auto___15427,G__15257_15415,G__15257_15416__$1,n__10707__auto___15413,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14985__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14985__auto____0 = (function (){
var statearr_15302 = [null,null,null,null,null,null,null];
(statearr_15302[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14985__auto__);

(statearr_15302[(1)] = (1));

return statearr_15302;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14985__auto____1 = (function (state_15294){
while(true){
var ret_value__14986__auto__ = (function (){try{while(true){
var result__14987__auto__ = switch__14984__auto__.call(null,state_15294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14987__auto__;
}
break;
}
}catch (e15303){if((e15303 instanceof Object)){
var ex__14988__auto__ = e15303;
var statearr_15304_15434 = state_15294;
(statearr_15304_15434[(5)] = ex__14988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15303;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15435 = state_15294;
state_15294 = G__15435;
continue;
} else {
return ret_value__14986__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14985__auto__ = function(state_15294){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14985__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14985__auto____1.call(this,state_15294);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__14985__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14985__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14985__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14985__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14985__auto__;
})()
;})(__15414,switch__14984__auto__,c__15074__auto___15427,G__15257_15415,G__15257_15416__$1,n__10707__auto___15413,jobs,results,process,async))
})();
var state__15076__auto__ = (function (){var statearr_15305 = f__15075__auto__.call(null);
(statearr_15305[(6)] = c__15074__auto___15427);

return statearr_15305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15076__auto__);
});})(__15414,c__15074__auto___15427,G__15257_15415,G__15257_15416__$1,n__10707__auto___15413,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15257_15416__$1)].join('')));

}

var G__15436 = (__15414 + (1));
__15414 = G__15436;
continue;
} else {
}
break;
}

var c__15074__auto___15437 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15074__auto___15437,jobs,results,process,async){
return (function (){
var f__15075__auto__ = (function (){var switch__14984__auto__ = ((function (c__15074__auto___15437,jobs,results,process,async){
return (function (state_15327){
var state_val_15328 = (state_15327[(1)]);
if((state_val_15328 === (1))){
var state_15327__$1 = state_15327;
var statearr_15329_15438 = state_15327__$1;
(statearr_15329_15438[(2)] = null);

(statearr_15329_15438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15328 === (2))){
var state_15327__$1 = state_15327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15327__$1,(4),from);
} else {
if((state_val_15328 === (3))){
var inst_15325 = (state_15327[(2)]);
var state_15327__$1 = state_15327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15327__$1,inst_15325);
} else {
if((state_val_15328 === (4))){
var inst_15308 = (state_15327[(7)]);
var inst_15308__$1 = (state_15327[(2)]);
var inst_15309 = (inst_15308__$1 == null);
var state_15327__$1 = (function (){var statearr_15330 = state_15327;
(statearr_15330[(7)] = inst_15308__$1);

return statearr_15330;
})();
if(cljs.core.truth_(inst_15309)){
var statearr_15331_15439 = state_15327__$1;
(statearr_15331_15439[(1)] = (5));

} else {
var statearr_15332_15440 = state_15327__$1;
(statearr_15332_15440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15328 === (5))){
var inst_15311 = cljs.core.async.close_BANG_.call(null,jobs);
var state_15327__$1 = state_15327;
var statearr_15333_15441 = state_15327__$1;
(statearr_15333_15441[(2)] = inst_15311);

(statearr_15333_15441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15328 === (6))){
var inst_15308 = (state_15327[(7)]);
var inst_15313 = (state_15327[(8)]);
var inst_15313__$1 = cljs.core.async.chan.call(null,(1));
var inst_15314 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15315 = [inst_15308,inst_15313__$1];
var inst_15316 = (new cljs.core.PersistentVector(null,2,(5),inst_15314,inst_15315,null));
var state_15327__$1 = (function (){var statearr_15334 = state_15327;
(statearr_15334[(8)] = inst_15313__$1);

return statearr_15334;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15327__$1,(8),jobs,inst_15316);
} else {
if((state_val_15328 === (7))){
var inst_15323 = (state_15327[(2)]);
var state_15327__$1 = state_15327;
var statearr_15335_15442 = state_15327__$1;
(statearr_15335_15442[(2)] = inst_15323);

(statearr_15335_15442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15328 === (8))){
var inst_15313 = (state_15327[(8)]);
var inst_15318 = (state_15327[(2)]);
var state_15327__$1 = (function (){var statearr_15336 = state_15327;
(statearr_15336[(9)] = inst_15318);

return statearr_15336;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15327__$1,(9),results,inst_15313);
} else {
if((state_val_15328 === (9))){
var inst_15320 = (state_15327[(2)]);
var state_15327__$1 = (function (){var statearr_15337 = state_15327;
(statearr_15337[(10)] = inst_15320);

return statearr_15337;
})();
var statearr_15338_15443 = state_15327__$1;
(statearr_15338_15443[(2)] = null);

(statearr_15338_15443[(1)] = (2));


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
});})(c__15074__auto___15437,jobs,results,process,async))
;
return ((function (switch__14984__auto__,c__15074__auto___15437,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14985__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14985__auto____0 = (function (){
var statearr_15339 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15339[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14985__auto__);

(statearr_15339[(1)] = (1));

return statearr_15339;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14985__auto____1 = (function (state_15327){
while(true){
var ret_value__14986__auto__ = (function (){try{while(true){
var result__14987__auto__ = switch__14984__auto__.call(null,state_15327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14987__auto__;
}
break;
}
}catch (e15340){if((e15340 instanceof Object)){
var ex__14988__auto__ = e15340;
var statearr_15341_15444 = state_15327;
(statearr_15341_15444[(5)] = ex__14988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15445 = state_15327;
state_15327 = G__15445;
continue;
} else {
return ret_value__14986__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14985__auto__ = function(state_15327){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14985__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14985__auto____1.call(this,state_15327);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__14985__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14985__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14985__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14985__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14985__auto__;
})()
;})(switch__14984__auto__,c__15074__auto___15437,jobs,results,process,async))
})();
var state__15076__auto__ = (function (){var statearr_15342 = f__15075__auto__.call(null);
(statearr_15342[(6)] = c__15074__auto___15437);

return statearr_15342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15076__auto__);
});})(c__15074__auto___15437,jobs,results,process,async))
);


var c__15074__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15074__auto__,jobs,results,process,async){
return (function (){
var f__15075__auto__ = (function (){var switch__14984__auto__ = ((function (c__15074__auto__,jobs,results,process,async){
return (function (state_15380){
var state_val_15381 = (state_15380[(1)]);
if((state_val_15381 === (7))){
var inst_15376 = (state_15380[(2)]);
var state_15380__$1 = state_15380;
var statearr_15382_15446 = state_15380__$1;
(statearr_15382_15446[(2)] = inst_15376);

(statearr_15382_15446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15381 === (20))){
var state_15380__$1 = state_15380;
var statearr_15383_15447 = state_15380__$1;
(statearr_15383_15447[(2)] = null);

(statearr_15383_15447[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15381 === (1))){
var state_15380__$1 = state_15380;
var statearr_15384_15448 = state_15380__$1;
(statearr_15384_15448[(2)] = null);

(statearr_15384_15448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15381 === (4))){
var inst_15345 = (state_15380[(7)]);
var inst_15345__$1 = (state_15380[(2)]);
var inst_15346 = (inst_15345__$1 == null);
var state_15380__$1 = (function (){var statearr_15385 = state_15380;
(statearr_15385[(7)] = inst_15345__$1);

return statearr_15385;
})();
if(cljs.core.truth_(inst_15346)){
var statearr_15386_15449 = state_15380__$1;
(statearr_15386_15449[(1)] = (5));

} else {
var statearr_15387_15450 = state_15380__$1;
(statearr_15387_15450[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15381 === (15))){
var inst_15358 = (state_15380[(8)]);
var state_15380__$1 = state_15380;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15380__$1,(18),to,inst_15358);
} else {
if((state_val_15381 === (21))){
var inst_15371 = (state_15380[(2)]);
var state_15380__$1 = state_15380;
var statearr_15388_15451 = state_15380__$1;
(statearr_15388_15451[(2)] = inst_15371);

(statearr_15388_15451[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15381 === (13))){
var inst_15373 = (state_15380[(2)]);
var state_15380__$1 = (function (){var statearr_15389 = state_15380;
(statearr_15389[(9)] = inst_15373);

return statearr_15389;
})();
var statearr_15390_15452 = state_15380__$1;
(statearr_15390_15452[(2)] = null);

(statearr_15390_15452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15381 === (6))){
var inst_15345 = (state_15380[(7)]);
var state_15380__$1 = state_15380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15380__$1,(11),inst_15345);
} else {
if((state_val_15381 === (17))){
var inst_15366 = (state_15380[(2)]);
var state_15380__$1 = state_15380;
if(cljs.core.truth_(inst_15366)){
var statearr_15391_15453 = state_15380__$1;
(statearr_15391_15453[(1)] = (19));

} else {
var statearr_15392_15454 = state_15380__$1;
(statearr_15392_15454[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15381 === (3))){
var inst_15378 = (state_15380[(2)]);
var state_15380__$1 = state_15380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15380__$1,inst_15378);
} else {
if((state_val_15381 === (12))){
var inst_15355 = (state_15380[(10)]);
var state_15380__$1 = state_15380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15380__$1,(14),inst_15355);
} else {
if((state_val_15381 === (2))){
var state_15380__$1 = state_15380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15380__$1,(4),results);
} else {
if((state_val_15381 === (19))){
var state_15380__$1 = state_15380;
var statearr_15393_15455 = state_15380__$1;
(statearr_15393_15455[(2)] = null);

(statearr_15393_15455[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15381 === (11))){
var inst_15355 = (state_15380[(2)]);
var state_15380__$1 = (function (){var statearr_15394 = state_15380;
(statearr_15394[(10)] = inst_15355);

return statearr_15394;
})();
var statearr_15395_15456 = state_15380__$1;
(statearr_15395_15456[(2)] = null);

(statearr_15395_15456[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15381 === (9))){
var state_15380__$1 = state_15380;
var statearr_15396_15457 = state_15380__$1;
(statearr_15396_15457[(2)] = null);

(statearr_15396_15457[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15381 === (5))){
var state_15380__$1 = state_15380;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15397_15458 = state_15380__$1;
(statearr_15397_15458[(1)] = (8));

} else {
var statearr_15398_15459 = state_15380__$1;
(statearr_15398_15459[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15381 === (14))){
var inst_15358 = (state_15380[(8)]);
var inst_15360 = (state_15380[(11)]);
var inst_15358__$1 = (state_15380[(2)]);
var inst_15359 = (inst_15358__$1 == null);
var inst_15360__$1 = cljs.core.not.call(null,inst_15359);
var state_15380__$1 = (function (){var statearr_15399 = state_15380;
(statearr_15399[(8)] = inst_15358__$1);

(statearr_15399[(11)] = inst_15360__$1);

return statearr_15399;
})();
if(inst_15360__$1){
var statearr_15400_15460 = state_15380__$1;
(statearr_15400_15460[(1)] = (15));

} else {
var statearr_15401_15461 = state_15380__$1;
(statearr_15401_15461[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15381 === (16))){
var inst_15360 = (state_15380[(11)]);
var state_15380__$1 = state_15380;
var statearr_15402_15462 = state_15380__$1;
(statearr_15402_15462[(2)] = inst_15360);

(statearr_15402_15462[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15381 === (10))){
var inst_15352 = (state_15380[(2)]);
var state_15380__$1 = state_15380;
var statearr_15403_15463 = state_15380__$1;
(statearr_15403_15463[(2)] = inst_15352);

(statearr_15403_15463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15381 === (18))){
var inst_15363 = (state_15380[(2)]);
var state_15380__$1 = state_15380;
var statearr_15404_15464 = state_15380__$1;
(statearr_15404_15464[(2)] = inst_15363);

(statearr_15404_15464[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15381 === (8))){
var inst_15349 = cljs.core.async.close_BANG_.call(null,to);
var state_15380__$1 = state_15380;
var statearr_15405_15465 = state_15380__$1;
(statearr_15405_15465[(2)] = inst_15349);

(statearr_15405_15465[(1)] = (10));


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
});})(c__15074__auto__,jobs,results,process,async))
;
return ((function (switch__14984__auto__,c__15074__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14985__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14985__auto____0 = (function (){
var statearr_15406 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15406[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14985__auto__);

(statearr_15406[(1)] = (1));

return statearr_15406;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14985__auto____1 = (function (state_15380){
while(true){
var ret_value__14986__auto__ = (function (){try{while(true){
var result__14987__auto__ = switch__14984__auto__.call(null,state_15380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14987__auto__;
}
break;
}
}catch (e15407){if((e15407 instanceof Object)){
var ex__14988__auto__ = e15407;
var statearr_15408_15466 = state_15380;
(statearr_15408_15466[(5)] = ex__14988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15467 = state_15380;
state_15380 = G__15467;
continue;
} else {
return ret_value__14986__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14985__auto__ = function(state_15380){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14985__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14985__auto____1.call(this,state_15380);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__14985__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14985__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14985__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14985__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14985__auto__;
})()
;})(switch__14984__auto__,c__15074__auto__,jobs,results,process,async))
})();
var state__15076__auto__ = (function (){var statearr_15409 = f__15075__auto__.call(null);
(statearr_15409[(6)] = c__15074__auto__);

return statearr_15409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15076__auto__);
});})(c__15074__auto__,jobs,results,process,async))
);

return c__15074__auto__;
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
var G__15469 = arguments.length;
switch (G__15469) {
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
var G__15472 = arguments.length;
switch (G__15472) {
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
var G__15475 = arguments.length;
switch (G__15475) {
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
var c__15074__auto___15524 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15074__auto___15524,tc,fc){
return (function (){
var f__15075__auto__ = (function (){var switch__14984__auto__ = ((function (c__15074__auto___15524,tc,fc){
return (function (state_15501){
var state_val_15502 = (state_15501[(1)]);
if((state_val_15502 === (7))){
var inst_15497 = (state_15501[(2)]);
var state_15501__$1 = state_15501;
var statearr_15503_15525 = state_15501__$1;
(statearr_15503_15525[(2)] = inst_15497);

(statearr_15503_15525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15502 === (1))){
var state_15501__$1 = state_15501;
var statearr_15504_15526 = state_15501__$1;
(statearr_15504_15526[(2)] = null);

(statearr_15504_15526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15502 === (4))){
var inst_15478 = (state_15501[(7)]);
var inst_15478__$1 = (state_15501[(2)]);
var inst_15479 = (inst_15478__$1 == null);
var state_15501__$1 = (function (){var statearr_15505 = state_15501;
(statearr_15505[(7)] = inst_15478__$1);

return statearr_15505;
})();
if(cljs.core.truth_(inst_15479)){
var statearr_15506_15527 = state_15501__$1;
(statearr_15506_15527[(1)] = (5));

} else {
var statearr_15507_15528 = state_15501__$1;
(statearr_15507_15528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15502 === (13))){
var state_15501__$1 = state_15501;
var statearr_15508_15529 = state_15501__$1;
(statearr_15508_15529[(2)] = null);

(statearr_15508_15529[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15502 === (6))){
var inst_15478 = (state_15501[(7)]);
var inst_15484 = p.call(null,inst_15478);
var state_15501__$1 = state_15501;
if(cljs.core.truth_(inst_15484)){
var statearr_15509_15530 = state_15501__$1;
(statearr_15509_15530[(1)] = (9));

} else {
var statearr_15510_15531 = state_15501__$1;
(statearr_15510_15531[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15502 === (3))){
var inst_15499 = (state_15501[(2)]);
var state_15501__$1 = state_15501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15501__$1,inst_15499);
} else {
if((state_val_15502 === (12))){
var state_15501__$1 = state_15501;
var statearr_15511_15532 = state_15501__$1;
(statearr_15511_15532[(2)] = null);

(statearr_15511_15532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15502 === (2))){
var state_15501__$1 = state_15501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15501__$1,(4),ch);
} else {
if((state_val_15502 === (11))){
var inst_15478 = (state_15501[(7)]);
var inst_15488 = (state_15501[(2)]);
var state_15501__$1 = state_15501;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15501__$1,(8),inst_15488,inst_15478);
} else {
if((state_val_15502 === (9))){
var state_15501__$1 = state_15501;
var statearr_15512_15533 = state_15501__$1;
(statearr_15512_15533[(2)] = tc);

(statearr_15512_15533[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15502 === (5))){
var inst_15481 = cljs.core.async.close_BANG_.call(null,tc);
var inst_15482 = cljs.core.async.close_BANG_.call(null,fc);
var state_15501__$1 = (function (){var statearr_15513 = state_15501;
(statearr_15513[(8)] = inst_15481);

return statearr_15513;
})();
var statearr_15514_15534 = state_15501__$1;
(statearr_15514_15534[(2)] = inst_15482);

(statearr_15514_15534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15502 === (14))){
var inst_15495 = (state_15501[(2)]);
var state_15501__$1 = state_15501;
var statearr_15515_15535 = state_15501__$1;
(statearr_15515_15535[(2)] = inst_15495);

(statearr_15515_15535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15502 === (10))){
var state_15501__$1 = state_15501;
var statearr_15516_15536 = state_15501__$1;
(statearr_15516_15536[(2)] = fc);

(statearr_15516_15536[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15502 === (8))){
var inst_15490 = (state_15501[(2)]);
var state_15501__$1 = state_15501;
if(cljs.core.truth_(inst_15490)){
var statearr_15517_15537 = state_15501__$1;
(statearr_15517_15537[(1)] = (12));

} else {
var statearr_15518_15538 = state_15501__$1;
(statearr_15518_15538[(1)] = (13));

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
});})(c__15074__auto___15524,tc,fc))
;
return ((function (switch__14984__auto__,c__15074__auto___15524,tc,fc){
return (function() {
var cljs$core$async$state_machine__14985__auto__ = null;
var cljs$core$async$state_machine__14985__auto____0 = (function (){
var statearr_15519 = [null,null,null,null,null,null,null,null,null];
(statearr_15519[(0)] = cljs$core$async$state_machine__14985__auto__);

(statearr_15519[(1)] = (1));

return statearr_15519;
});
var cljs$core$async$state_machine__14985__auto____1 = (function (state_15501){
while(true){
var ret_value__14986__auto__ = (function (){try{while(true){
var result__14987__auto__ = switch__14984__auto__.call(null,state_15501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14987__auto__;
}
break;
}
}catch (e15520){if((e15520 instanceof Object)){
var ex__14988__auto__ = e15520;
var statearr_15521_15539 = state_15501;
(statearr_15521_15539[(5)] = ex__14988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15540 = state_15501;
state_15501 = G__15540;
continue;
} else {
return ret_value__14986__auto__;
}
break;
}
});
cljs$core$async$state_machine__14985__auto__ = function(state_15501){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14985__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14985__auto____1.call(this,state_15501);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14985__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14985__auto____0;
cljs$core$async$state_machine__14985__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14985__auto____1;
return cljs$core$async$state_machine__14985__auto__;
})()
;})(switch__14984__auto__,c__15074__auto___15524,tc,fc))
})();
var state__15076__auto__ = (function (){var statearr_15522 = f__15075__auto__.call(null);
(statearr_15522[(6)] = c__15074__auto___15524);

return statearr_15522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15076__auto__);
});})(c__15074__auto___15524,tc,fc))
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
var c__15074__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15074__auto__){
return (function (){
var f__15075__auto__ = (function (){var switch__14984__auto__ = ((function (c__15074__auto__){
return (function (state_15561){
var state_val_15562 = (state_15561[(1)]);
if((state_val_15562 === (7))){
var inst_15557 = (state_15561[(2)]);
var state_15561__$1 = state_15561;
var statearr_15563_15581 = state_15561__$1;
(statearr_15563_15581[(2)] = inst_15557);

(statearr_15563_15581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15562 === (1))){
var inst_15541 = init;
var state_15561__$1 = (function (){var statearr_15564 = state_15561;
(statearr_15564[(7)] = inst_15541);

return statearr_15564;
})();
var statearr_15565_15582 = state_15561__$1;
(statearr_15565_15582[(2)] = null);

(statearr_15565_15582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15562 === (4))){
var inst_15544 = (state_15561[(8)]);
var inst_15544__$1 = (state_15561[(2)]);
var inst_15545 = (inst_15544__$1 == null);
var state_15561__$1 = (function (){var statearr_15566 = state_15561;
(statearr_15566[(8)] = inst_15544__$1);

return statearr_15566;
})();
if(cljs.core.truth_(inst_15545)){
var statearr_15567_15583 = state_15561__$1;
(statearr_15567_15583[(1)] = (5));

} else {
var statearr_15568_15584 = state_15561__$1;
(statearr_15568_15584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15562 === (6))){
var inst_15541 = (state_15561[(7)]);
var inst_15548 = (state_15561[(9)]);
var inst_15544 = (state_15561[(8)]);
var inst_15548__$1 = f.call(null,inst_15541,inst_15544);
var inst_15549 = cljs.core.reduced_QMARK_.call(null,inst_15548__$1);
var state_15561__$1 = (function (){var statearr_15569 = state_15561;
(statearr_15569[(9)] = inst_15548__$1);

return statearr_15569;
})();
if(inst_15549){
var statearr_15570_15585 = state_15561__$1;
(statearr_15570_15585[(1)] = (8));

} else {
var statearr_15571_15586 = state_15561__$1;
(statearr_15571_15586[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15562 === (3))){
var inst_15559 = (state_15561[(2)]);
var state_15561__$1 = state_15561;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15561__$1,inst_15559);
} else {
if((state_val_15562 === (2))){
var state_15561__$1 = state_15561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15561__$1,(4),ch);
} else {
if((state_val_15562 === (9))){
var inst_15548 = (state_15561[(9)]);
var inst_15541 = inst_15548;
var state_15561__$1 = (function (){var statearr_15572 = state_15561;
(statearr_15572[(7)] = inst_15541);

return statearr_15572;
})();
var statearr_15573_15587 = state_15561__$1;
(statearr_15573_15587[(2)] = null);

(statearr_15573_15587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15562 === (5))){
var inst_15541 = (state_15561[(7)]);
var state_15561__$1 = state_15561;
var statearr_15574_15588 = state_15561__$1;
(statearr_15574_15588[(2)] = inst_15541);

(statearr_15574_15588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15562 === (10))){
var inst_15555 = (state_15561[(2)]);
var state_15561__$1 = state_15561;
var statearr_15575_15589 = state_15561__$1;
(statearr_15575_15589[(2)] = inst_15555);

(statearr_15575_15589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15562 === (8))){
var inst_15548 = (state_15561[(9)]);
var inst_15551 = cljs.core.deref.call(null,inst_15548);
var state_15561__$1 = state_15561;
var statearr_15576_15590 = state_15561__$1;
(statearr_15576_15590[(2)] = inst_15551);

(statearr_15576_15590[(1)] = (10));


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
});})(c__15074__auto__))
;
return ((function (switch__14984__auto__,c__15074__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__14985__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14985__auto____0 = (function (){
var statearr_15577 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15577[(0)] = cljs$core$async$reduce_$_state_machine__14985__auto__);

(statearr_15577[(1)] = (1));

return statearr_15577;
});
var cljs$core$async$reduce_$_state_machine__14985__auto____1 = (function (state_15561){
while(true){
var ret_value__14986__auto__ = (function (){try{while(true){
var result__14987__auto__ = switch__14984__auto__.call(null,state_15561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14987__auto__;
}
break;
}
}catch (e15578){if((e15578 instanceof Object)){
var ex__14988__auto__ = e15578;
var statearr_15579_15591 = state_15561;
(statearr_15579_15591[(5)] = ex__14988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15592 = state_15561;
state_15561 = G__15592;
continue;
} else {
return ret_value__14986__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14985__auto__ = function(state_15561){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14985__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14985__auto____1.call(this,state_15561);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__14985__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14985__auto____0;
cljs$core$async$reduce_$_state_machine__14985__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14985__auto____1;
return cljs$core$async$reduce_$_state_machine__14985__auto__;
})()
;})(switch__14984__auto__,c__15074__auto__))
})();
var state__15076__auto__ = (function (){var statearr_15580 = f__15075__auto__.call(null);
(statearr_15580[(6)] = c__15074__auto__);

return statearr_15580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15076__auto__);
});})(c__15074__auto__))
);

return c__15074__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__15074__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15074__auto__,f__$1){
return (function (){
var f__15075__auto__ = (function (){var switch__14984__auto__ = ((function (c__15074__auto__,f__$1){
return (function (state_15598){
var state_val_15599 = (state_15598[(1)]);
if((state_val_15599 === (1))){
var inst_15593 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_15598__$1 = state_15598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15598__$1,(2),inst_15593);
} else {
if((state_val_15599 === (2))){
var inst_15595 = (state_15598[(2)]);
var inst_15596 = f__$1.call(null,inst_15595);
var state_15598__$1 = state_15598;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15598__$1,inst_15596);
} else {
return null;
}
}
});})(c__15074__auto__,f__$1))
;
return ((function (switch__14984__auto__,c__15074__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__14985__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14985__auto____0 = (function (){
var statearr_15600 = [null,null,null,null,null,null,null];
(statearr_15600[(0)] = cljs$core$async$transduce_$_state_machine__14985__auto__);

(statearr_15600[(1)] = (1));

return statearr_15600;
});
var cljs$core$async$transduce_$_state_machine__14985__auto____1 = (function (state_15598){
while(true){
var ret_value__14986__auto__ = (function (){try{while(true){
var result__14987__auto__ = switch__14984__auto__.call(null,state_15598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14987__auto__;
}
break;
}
}catch (e15601){if((e15601 instanceof Object)){
var ex__14988__auto__ = e15601;
var statearr_15602_15604 = state_15598;
(statearr_15602_15604[(5)] = ex__14988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15605 = state_15598;
state_15598 = G__15605;
continue;
} else {
return ret_value__14986__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14985__auto__ = function(state_15598){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14985__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14985__auto____1.call(this,state_15598);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__14985__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14985__auto____0;
cljs$core$async$transduce_$_state_machine__14985__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14985__auto____1;
return cljs$core$async$transduce_$_state_machine__14985__auto__;
})()
;})(switch__14984__auto__,c__15074__auto__,f__$1))
})();
var state__15076__auto__ = (function (){var statearr_15603 = f__15075__auto__.call(null);
(statearr_15603[(6)] = c__15074__auto__);

return statearr_15603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15076__auto__);
});})(c__15074__auto__,f__$1))
);

return c__15074__auto__;
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
var G__15607 = arguments.length;
switch (G__15607) {
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
var c__15074__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15074__auto__){
return (function (){
var f__15075__auto__ = (function (){var switch__14984__auto__ = ((function (c__15074__auto__){
return (function (state_15632){
var state_val_15633 = (state_15632[(1)]);
if((state_val_15633 === (7))){
var inst_15614 = (state_15632[(2)]);
var state_15632__$1 = state_15632;
var statearr_15634_15655 = state_15632__$1;
(statearr_15634_15655[(2)] = inst_15614);

(statearr_15634_15655[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15633 === (1))){
var inst_15608 = cljs.core.seq.call(null,coll);
var inst_15609 = inst_15608;
var state_15632__$1 = (function (){var statearr_15635 = state_15632;
(statearr_15635[(7)] = inst_15609);

return statearr_15635;
})();
var statearr_15636_15656 = state_15632__$1;
(statearr_15636_15656[(2)] = null);

(statearr_15636_15656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15633 === (4))){
var inst_15609 = (state_15632[(7)]);
var inst_15612 = cljs.core.first.call(null,inst_15609);
var state_15632__$1 = state_15632;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15632__$1,(7),ch,inst_15612);
} else {
if((state_val_15633 === (13))){
var inst_15626 = (state_15632[(2)]);
var state_15632__$1 = state_15632;
var statearr_15637_15657 = state_15632__$1;
(statearr_15637_15657[(2)] = inst_15626);

(statearr_15637_15657[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15633 === (6))){
var inst_15617 = (state_15632[(2)]);
var state_15632__$1 = state_15632;
if(cljs.core.truth_(inst_15617)){
var statearr_15638_15658 = state_15632__$1;
(statearr_15638_15658[(1)] = (8));

} else {
var statearr_15639_15659 = state_15632__$1;
(statearr_15639_15659[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15633 === (3))){
var inst_15630 = (state_15632[(2)]);
var state_15632__$1 = state_15632;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15632__$1,inst_15630);
} else {
if((state_val_15633 === (12))){
var state_15632__$1 = state_15632;
var statearr_15640_15660 = state_15632__$1;
(statearr_15640_15660[(2)] = null);

(statearr_15640_15660[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15633 === (2))){
var inst_15609 = (state_15632[(7)]);
var state_15632__$1 = state_15632;
if(cljs.core.truth_(inst_15609)){
var statearr_15641_15661 = state_15632__$1;
(statearr_15641_15661[(1)] = (4));

} else {
var statearr_15642_15662 = state_15632__$1;
(statearr_15642_15662[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15633 === (11))){
var inst_15623 = cljs.core.async.close_BANG_.call(null,ch);
var state_15632__$1 = state_15632;
var statearr_15643_15663 = state_15632__$1;
(statearr_15643_15663[(2)] = inst_15623);

(statearr_15643_15663[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15633 === (9))){
var state_15632__$1 = state_15632;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15644_15664 = state_15632__$1;
(statearr_15644_15664[(1)] = (11));

} else {
var statearr_15645_15665 = state_15632__$1;
(statearr_15645_15665[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15633 === (5))){
var inst_15609 = (state_15632[(7)]);
var state_15632__$1 = state_15632;
var statearr_15646_15666 = state_15632__$1;
(statearr_15646_15666[(2)] = inst_15609);

(statearr_15646_15666[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15633 === (10))){
var inst_15628 = (state_15632[(2)]);
var state_15632__$1 = state_15632;
var statearr_15647_15667 = state_15632__$1;
(statearr_15647_15667[(2)] = inst_15628);

(statearr_15647_15667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15633 === (8))){
var inst_15609 = (state_15632[(7)]);
var inst_15619 = cljs.core.next.call(null,inst_15609);
var inst_15609__$1 = inst_15619;
var state_15632__$1 = (function (){var statearr_15648 = state_15632;
(statearr_15648[(7)] = inst_15609__$1);

return statearr_15648;
})();
var statearr_15649_15668 = state_15632__$1;
(statearr_15649_15668[(2)] = null);

(statearr_15649_15668[(1)] = (2));


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
});})(c__15074__auto__))
;
return ((function (switch__14984__auto__,c__15074__auto__){
return (function() {
var cljs$core$async$state_machine__14985__auto__ = null;
var cljs$core$async$state_machine__14985__auto____0 = (function (){
var statearr_15650 = [null,null,null,null,null,null,null,null];
(statearr_15650[(0)] = cljs$core$async$state_machine__14985__auto__);

(statearr_15650[(1)] = (1));

return statearr_15650;
});
var cljs$core$async$state_machine__14985__auto____1 = (function (state_15632){
while(true){
var ret_value__14986__auto__ = (function (){try{while(true){
var result__14987__auto__ = switch__14984__auto__.call(null,state_15632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14987__auto__;
}
break;
}
}catch (e15651){if((e15651 instanceof Object)){
var ex__14988__auto__ = e15651;
var statearr_15652_15669 = state_15632;
(statearr_15652_15669[(5)] = ex__14988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15670 = state_15632;
state_15632 = G__15670;
continue;
} else {
return ret_value__14986__auto__;
}
break;
}
});
cljs$core$async$state_machine__14985__auto__ = function(state_15632){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14985__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14985__auto____1.call(this,state_15632);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14985__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14985__auto____0;
cljs$core$async$state_machine__14985__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14985__auto____1;
return cljs$core$async$state_machine__14985__auto__;
})()
;})(switch__14984__auto__,c__15074__auto__))
})();
var state__15076__auto__ = (function (){var statearr_15653 = f__15075__auto__.call(null);
(statearr_15653[(6)] = c__15074__auto__);

return statearr_15653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15076__auto__);
});})(c__15074__auto__))
);

return c__15074__auto__;
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
var x__10395__auto__ = (((_ == null))?null:_);
var m__10396__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__10395__auto__)]);
if(!((m__10396__auto__ == null))){
return m__10396__auto__.call(null,_);
} else {
var m__10396__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__10396__auto____$1 == null))){
return m__10396__auto____$1.call(null,_);
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
var x__10395__auto__ = (((m == null))?null:m);
var m__10396__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__10395__auto__)]);
if(!((m__10396__auto__ == null))){
return m__10396__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__10396__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__10396__auto____$1 == null))){
return m__10396__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__10395__auto__ = (((m == null))?null:m);
var m__10396__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__10395__auto__)]);
if(!((m__10396__auto__ == null))){
return m__10396__auto__.call(null,m,ch);
} else {
var m__10396__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__10396__auto____$1 == null))){
return m__10396__auto____$1.call(null,m,ch);
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
var x__10395__auto__ = (((m == null))?null:m);
var m__10396__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__10395__auto__)]);
if(!((m__10396__auto__ == null))){
return m__10396__auto__.call(null,m);
} else {
var m__10396__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__10396__auto____$1 == null))){
return m__10396__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async15671 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15671 = (function (ch,cs,meta15672){
this.ch = ch;
this.cs = cs;
this.meta15672 = meta15672;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15673,meta15672__$1){
var self__ = this;
var _15673__$1 = this;
return (new cljs.core.async.t_cljs$core$async15671(self__.ch,self__.cs,meta15672__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async15671.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15673){
var self__ = this;
var _15673__$1 = this;
return self__.meta15672;
});})(cs))
;

cljs.core.async.t_cljs$core$async15671.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15671.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async15671.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15671.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15671.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15671.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15671.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15672","meta15672",-86387791,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async15671.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15671.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15671";

cljs.core.async.t_cljs$core$async15671.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__10333__auto__,writer__10334__auto__,opt__10335__auto__){
return cljs.core._write.call(null,writer__10334__auto__,"cljs.core.async/t_cljs$core$async15671");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async15671 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async15671(ch__$1,cs__$1,meta15672){
return (new cljs.core.async.t_cljs$core$async15671(ch__$1,cs__$1,meta15672));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async15671(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__15074__auto___15893 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15074__auto___15893,cs,m,dchan,dctr,done){
return (function (){
var f__15075__auto__ = (function (){var switch__14984__auto__ = ((function (c__15074__auto___15893,cs,m,dchan,dctr,done){
return (function (state_15808){
var state_val_15809 = (state_15808[(1)]);
if((state_val_15809 === (7))){
var inst_15804 = (state_15808[(2)]);
var state_15808__$1 = state_15808;
var statearr_15810_15894 = state_15808__$1;
(statearr_15810_15894[(2)] = inst_15804);

(statearr_15810_15894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15809 === (20))){
var inst_15707 = (state_15808[(7)]);
var inst_15719 = cljs.core.first.call(null,inst_15707);
var inst_15720 = cljs.core.nth.call(null,inst_15719,(0),null);
var inst_15721 = cljs.core.nth.call(null,inst_15719,(1),null);
var state_15808__$1 = (function (){var statearr_15811 = state_15808;
(statearr_15811[(8)] = inst_15720);

return statearr_15811;
})();
if(cljs.core.truth_(inst_15721)){
var statearr_15812_15895 = state_15808__$1;
(statearr_15812_15895[(1)] = (22));

} else {
var statearr_15813_15896 = state_15808__$1;
(statearr_15813_15896[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15809 === (27))){
var inst_15756 = (state_15808[(9)]);
var inst_15749 = (state_15808[(10)]);
var inst_15676 = (state_15808[(11)]);
var inst_15751 = (state_15808[(12)]);
var inst_15756__$1 = cljs.core._nth.call(null,inst_15749,inst_15751);
var inst_15757 = cljs.core.async.put_BANG_.call(null,inst_15756__$1,inst_15676,done);
var state_15808__$1 = (function (){var statearr_15814 = state_15808;
(statearr_15814[(9)] = inst_15756__$1);

return statearr_15814;
})();
if(cljs.core.truth_(inst_15757)){
var statearr_15815_15897 = state_15808__$1;
(statearr_15815_15897[(1)] = (30));

} else {
var statearr_15816_15898 = state_15808__$1;
(statearr_15816_15898[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15809 === (1))){
var state_15808__$1 = state_15808;
var statearr_15817_15899 = state_15808__$1;
(statearr_15817_15899[(2)] = null);

(statearr_15817_15899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15809 === (24))){
var inst_15707 = (state_15808[(7)]);
var inst_15726 = (state_15808[(2)]);
var inst_15727 = cljs.core.next.call(null,inst_15707);
var inst_15685 = inst_15727;
var inst_15686 = null;
var inst_15687 = (0);
var inst_15688 = (0);
var state_15808__$1 = (function (){var statearr_15818 = state_15808;
(statearr_15818[(13)] = inst_15726);

(statearr_15818[(14)] = inst_15688);

(statearr_15818[(15)] = inst_15685);

(statearr_15818[(16)] = inst_15686);

(statearr_15818[(17)] = inst_15687);

return statearr_15818;
})();
var statearr_15819_15900 = state_15808__$1;
(statearr_15819_15900[(2)] = null);

(statearr_15819_15900[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15809 === (39))){
var state_15808__$1 = state_15808;
var statearr_15823_15901 = state_15808__$1;
(statearr_15823_15901[(2)] = null);

(statearr_15823_15901[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15809 === (4))){
var inst_15676 = (state_15808[(11)]);
var inst_15676__$1 = (state_15808[(2)]);
var inst_15677 = (inst_15676__$1 == null);
var state_15808__$1 = (function (){var statearr_15824 = state_15808;
(statearr_15824[(11)] = inst_15676__$1);

return statearr_15824;
})();
if(cljs.core.truth_(inst_15677)){
var statearr_15825_15902 = state_15808__$1;
(statearr_15825_15902[(1)] = (5));

} else {
var statearr_15826_15903 = state_15808__$1;
(statearr_15826_15903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15809 === (15))){
var inst_15688 = (state_15808[(14)]);
var inst_15685 = (state_15808[(15)]);
var inst_15686 = (state_15808[(16)]);
var inst_15687 = (state_15808[(17)]);
var inst_15703 = (state_15808[(2)]);
var inst_15704 = (inst_15688 + (1));
var tmp15820 = inst_15685;
var tmp15821 = inst_15686;
var tmp15822 = inst_15687;
var inst_15685__$1 = tmp15820;
var inst_15686__$1 = tmp15821;
var inst_15687__$1 = tmp15822;
var inst_15688__$1 = inst_15704;
var state_15808__$1 = (function (){var statearr_15827 = state_15808;
(statearr_15827[(14)] = inst_15688__$1);

(statearr_15827[(15)] = inst_15685__$1);

(statearr_15827[(18)] = inst_15703);

(statearr_15827[(16)] = inst_15686__$1);

(statearr_15827[(17)] = inst_15687__$1);

return statearr_15827;
})();
var statearr_15828_15904 = state_15808__$1;
(statearr_15828_15904[(2)] = null);

(statearr_15828_15904[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15809 === (21))){
var inst_15730 = (state_15808[(2)]);
var state_15808__$1 = state_15808;
var statearr_15832_15905 = state_15808__$1;
(statearr_15832_15905[(2)] = inst_15730);

(statearr_15832_15905[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15809 === (31))){
var inst_15756 = (state_15808[(9)]);
var inst_15760 = done.call(null,null);
var inst_15761 = cljs.core.async.untap_STAR_.call(null,m,inst_15756);
var state_15808__$1 = (function (){var statearr_15833 = state_15808;
(statearr_15833[(19)] = inst_15760);

return statearr_15833;
})();
var statearr_15834_15906 = state_15808__$1;
(statearr_15834_15906[(2)] = inst_15761);

(statearr_15834_15906[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15809 === (32))){
var inst_15748 = (state_15808[(20)]);
var inst_15750 = (state_15808[(21)]);
var inst_15749 = (state_15808[(10)]);
var inst_15751 = (state_15808[(12)]);
var inst_15763 = (state_15808[(2)]);
var inst_15764 = (inst_15751 + (1));
var tmp15829 = inst_15748;
var tmp15830 = inst_15750;
var tmp15831 = inst_15749;
var inst_15748__$1 = tmp15829;
var inst_15749__$1 = tmp15831;
var inst_15750__$1 = tmp15830;
var inst_15751__$1 = inst_15764;
var state_15808__$1 = (function (){var statearr_15835 = state_15808;
(statearr_15835[(20)] = inst_15748__$1);

(statearr_15835[(21)] = inst_15750__$1);

(statearr_15835[(10)] = inst_15749__$1);

(statearr_15835[(12)] = inst_15751__$1);

(statearr_15835[(22)] = inst_15763);

return statearr_15835;
})();
var statearr_15836_15907 = state_15808__$1;
(statearr_15836_15907[(2)] = null);

(statearr_15836_15907[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15809 === (40))){
var inst_15776 = (state_15808[(23)]);
var inst_15780 = done.call(null,null);
var inst_15781 = cljs.core.async.untap_STAR_.call(null,m,inst_15776);
var state_15808__$1 = (function (){var statearr_15837 = state_15808;
(statearr_15837[(24)] = inst_15780);

return statearr_15837;
})();
var statearr_15838_15908 = state_15808__$1;
(statearr_15838_15908[(2)] = inst_15781);

(statearr_15838_15908[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15809 === (33))){
var inst_15767 = (state_15808[(25)]);
var inst_15769 = cljs.core.chunked_seq_QMARK_.call(null,inst_15767);
var state_15808__$1 = state_15808;
if(inst_15769){
var statearr_15839_15909 = state_15808__$1;
(statearr_15839_15909[(1)] = (36));

} else {
var statearr_15840_15910 = state_15808__$1;
(statearr_15840_15910[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15809 === (13))){
var inst_15697 = (state_15808[(26)]);
var inst_15700 = cljs.core.async.close_BANG_.call(null,inst_15697);
var state_15808__$1 = state_15808;
var statearr_15841_15911 = state_15808__$1;
(statearr_15841_15911[(2)] = inst_15700);

(statearr_15841_15911[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15809 === (22))){
var inst_15720 = (state_15808[(8)]);
var inst_15723 = cljs.core.async.close_BANG_.call(null,inst_15720);
var state_15808__$1 = state_15808;
var statearr_15842_15912 = state_15808__$1;
(statearr_15842_15912[(2)] = inst_15723);

(statearr_15842_15912[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15809 === (36))){
var inst_15767 = (state_15808[(25)]);
var inst_15771 = cljs.core.chunk_first.call(null,inst_15767);
var inst_15772 = cljs.core.chunk_rest.call(null,inst_15767);
var inst_15773 = cljs.core.count.call(null,inst_15771);
var inst_15748 = inst_15772;
var inst_15749 = inst_15771;
var inst_15750 = inst_15773;
var inst_15751 = (0);
var state_15808__$1 = (function (){var statearr_15843 = state_15808;
(statearr_15843[(20)] = inst_15748);

(statearr_15843[(21)] = inst_15750);

(statearr_15843[(10)] = inst_15749);

(statearr_15843[(12)] = inst_15751);

return statearr_15843;
})();
var statearr_15844_15913 = state_15808__$1;
(statearr_15844_15913[(2)] = null);

(statearr_15844_15913[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15809 === (41))){
var inst_15767 = (state_15808[(25)]);
var inst_15783 = (state_15808[(2)]);
var inst_15784 = cljs.core.next.call(null,inst_15767);
var inst_15748 = inst_15784;
var inst_15749 = null;
var inst_15750 = (0);
var inst_15751 = (0);
var state_15808__$1 = (function (){var statearr_15845 = state_15808;
(statearr_15845[(20)] = inst_15748);

(statearr_15845[(21)] = inst_15750);

(statearr_15845[(27)] = inst_15783);

(statearr_15845[(10)] = inst_15749);

(statearr_15845[(12)] = inst_15751);

return statearr_15845;
})();
var statearr_15846_15914 = state_15808__$1;
(statearr_15846_15914[(2)] = null);

(statearr_15846_15914[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15809 === (43))){
var state_15808__$1 = state_15808;
var statearr_15847_15915 = state_15808__$1;
(statearr_15847_15915[(2)] = null);

(statearr_15847_15915[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15809 === (29))){
var inst_15792 = (state_15808[(2)]);
var state_15808__$1 = state_15808;
var statearr_15848_15916 = state_15808__$1;
(statearr_15848_15916[(2)] = inst_15792);

(statearr_15848_15916[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15809 === (44))){
var inst_15801 = (state_15808[(2)]);
var state_15808__$1 = (function (){var statearr_15849 = state_15808;
(statearr_15849[(28)] = inst_15801);

return statearr_15849;
})();
var statearr_15850_15917 = state_15808__$1;
(statearr_15850_15917[(2)] = null);

(statearr_15850_15917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15809 === (6))){
var inst_15740 = (state_15808[(29)]);
var inst_15739 = cljs.core.deref.call(null,cs);
var inst_15740__$1 = cljs.core.keys.call(null,inst_15739);
var inst_15741 = cljs.core.count.call(null,inst_15740__$1);
var inst_15742 = cljs.core.reset_BANG_.call(null,dctr,inst_15741);
var inst_15747 = cljs.core.seq.call(null,inst_15740__$1);
var inst_15748 = inst_15747;
var inst_15749 = null;
var inst_15750 = (0);
var inst_15751 = (0);
var state_15808__$1 = (function (){var statearr_15851 = state_15808;
(statearr_15851[(20)] = inst_15748);

(statearr_15851[(21)] = inst_15750);

(statearr_15851[(30)] = inst_15742);

(statearr_15851[(10)] = inst_15749);

(statearr_15851[(29)] = inst_15740__$1);

(statearr_15851[(12)] = inst_15751);

return statearr_15851;
})();
var statearr_15852_15918 = state_15808__$1;
(statearr_15852_15918[(2)] = null);

(statearr_15852_15918[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15809 === (28))){
var inst_15748 = (state_15808[(20)]);
var inst_15767 = (state_15808[(25)]);
var inst_15767__$1 = cljs.core.seq.call(null,inst_15748);
var state_15808__$1 = (function (){var statearr_15853 = state_15808;
(statearr_15853[(25)] = inst_15767__$1);

return statearr_15853;
})();
if(inst_15767__$1){
var statearr_15854_15919 = state_15808__$1;
(statearr_15854_15919[(1)] = (33));

} else {
var statearr_15855_15920 = state_15808__$1;
(statearr_15855_15920[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15809 === (25))){
var inst_15750 = (state_15808[(21)]);
var inst_15751 = (state_15808[(12)]);
var inst_15753 = (inst_15751 < inst_15750);
var inst_15754 = inst_15753;
var state_15808__$1 = state_15808;
if(cljs.core.truth_(inst_15754)){
var statearr_15856_15921 = state_15808__$1;
(statearr_15856_15921[(1)] = (27));

} else {
var statearr_15857_15922 = state_15808__$1;
(statearr_15857_15922[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15809 === (34))){
var state_15808__$1 = state_15808;
var statearr_15858_15923 = state_15808__$1;
(statearr_15858_15923[(2)] = null);

(statearr_15858_15923[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15809 === (17))){
var state_15808__$1 = state_15808;
var statearr_15859_15924 = state_15808__$1;
(statearr_15859_15924[(2)] = null);

(statearr_15859_15924[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15809 === (3))){
var inst_15806 = (state_15808[(2)]);
var state_15808__$1 = state_15808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15808__$1,inst_15806);
} else {
if((state_val_15809 === (12))){
var inst_15735 = (state_15808[(2)]);
var state_15808__$1 = state_15808;
var statearr_15860_15925 = state_15808__$1;
(statearr_15860_15925[(2)] = inst_15735);

(statearr_15860_15925[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15809 === (2))){
var state_15808__$1 = state_15808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15808__$1,(4),ch);
} else {
if((state_val_15809 === (23))){
var state_15808__$1 = state_15808;
var statearr_15861_15926 = state_15808__$1;
(statearr_15861_15926[(2)] = null);

(statearr_15861_15926[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15809 === (35))){
var inst_15790 = (state_15808[(2)]);
var state_15808__$1 = state_15808;
var statearr_15862_15927 = state_15808__$1;
(statearr_15862_15927[(2)] = inst_15790);

(statearr_15862_15927[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15809 === (19))){
var inst_15707 = (state_15808[(7)]);
var inst_15711 = cljs.core.chunk_first.call(null,inst_15707);
var inst_15712 = cljs.core.chunk_rest.call(null,inst_15707);
var inst_15713 = cljs.core.count.call(null,inst_15711);
var inst_15685 = inst_15712;
var inst_15686 = inst_15711;
var inst_15687 = inst_15713;
var inst_15688 = (0);
var state_15808__$1 = (function (){var statearr_15863 = state_15808;
(statearr_15863[(14)] = inst_15688);

(statearr_15863[(15)] = inst_15685);

(statearr_15863[(16)] = inst_15686);

(statearr_15863[(17)] = inst_15687);

return statearr_15863;
})();
var statearr_15864_15928 = state_15808__$1;
(statearr_15864_15928[(2)] = null);

(statearr_15864_15928[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15809 === (11))){
var inst_15707 = (state_15808[(7)]);
var inst_15685 = (state_15808[(15)]);
var inst_15707__$1 = cljs.core.seq.call(null,inst_15685);
var state_15808__$1 = (function (){var statearr_15865 = state_15808;
(statearr_15865[(7)] = inst_15707__$1);

return statearr_15865;
})();
if(inst_15707__$1){
var statearr_15866_15929 = state_15808__$1;
(statearr_15866_15929[(1)] = (16));

} else {
var statearr_15867_15930 = state_15808__$1;
(statearr_15867_15930[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15809 === (9))){
var inst_15737 = (state_15808[(2)]);
var state_15808__$1 = state_15808;
var statearr_15868_15931 = state_15808__$1;
(statearr_15868_15931[(2)] = inst_15737);

(statearr_15868_15931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15809 === (5))){
var inst_15683 = cljs.core.deref.call(null,cs);
var inst_15684 = cljs.core.seq.call(null,inst_15683);
var inst_15685 = inst_15684;
var inst_15686 = null;
var inst_15687 = (0);
var inst_15688 = (0);
var state_15808__$1 = (function (){var statearr_15869 = state_15808;
(statearr_15869[(14)] = inst_15688);

(statearr_15869[(15)] = inst_15685);

(statearr_15869[(16)] = inst_15686);

(statearr_15869[(17)] = inst_15687);

return statearr_15869;
})();
var statearr_15870_15932 = state_15808__$1;
(statearr_15870_15932[(2)] = null);

(statearr_15870_15932[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15809 === (14))){
var state_15808__$1 = state_15808;
var statearr_15871_15933 = state_15808__$1;
(statearr_15871_15933[(2)] = null);

(statearr_15871_15933[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15809 === (45))){
var inst_15798 = (state_15808[(2)]);
var state_15808__$1 = state_15808;
var statearr_15872_15934 = state_15808__$1;
(statearr_15872_15934[(2)] = inst_15798);

(statearr_15872_15934[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15809 === (26))){
var inst_15740 = (state_15808[(29)]);
var inst_15794 = (state_15808[(2)]);
var inst_15795 = cljs.core.seq.call(null,inst_15740);
var state_15808__$1 = (function (){var statearr_15873 = state_15808;
(statearr_15873[(31)] = inst_15794);

return statearr_15873;
})();
if(inst_15795){
var statearr_15874_15935 = state_15808__$1;
(statearr_15874_15935[(1)] = (42));

} else {
var statearr_15875_15936 = state_15808__$1;
(statearr_15875_15936[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15809 === (16))){
var inst_15707 = (state_15808[(7)]);
var inst_15709 = cljs.core.chunked_seq_QMARK_.call(null,inst_15707);
var state_15808__$1 = state_15808;
if(inst_15709){
var statearr_15876_15937 = state_15808__$1;
(statearr_15876_15937[(1)] = (19));

} else {
var statearr_15877_15938 = state_15808__$1;
(statearr_15877_15938[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15809 === (38))){
var inst_15787 = (state_15808[(2)]);
var state_15808__$1 = state_15808;
var statearr_15878_15939 = state_15808__$1;
(statearr_15878_15939[(2)] = inst_15787);

(statearr_15878_15939[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15809 === (30))){
var state_15808__$1 = state_15808;
var statearr_15879_15940 = state_15808__$1;
(statearr_15879_15940[(2)] = null);

(statearr_15879_15940[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15809 === (10))){
var inst_15688 = (state_15808[(14)]);
var inst_15686 = (state_15808[(16)]);
var inst_15696 = cljs.core._nth.call(null,inst_15686,inst_15688);
var inst_15697 = cljs.core.nth.call(null,inst_15696,(0),null);
var inst_15698 = cljs.core.nth.call(null,inst_15696,(1),null);
var state_15808__$1 = (function (){var statearr_15880 = state_15808;
(statearr_15880[(26)] = inst_15697);

return statearr_15880;
})();
if(cljs.core.truth_(inst_15698)){
var statearr_15881_15941 = state_15808__$1;
(statearr_15881_15941[(1)] = (13));

} else {
var statearr_15882_15942 = state_15808__$1;
(statearr_15882_15942[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15809 === (18))){
var inst_15733 = (state_15808[(2)]);
var state_15808__$1 = state_15808;
var statearr_15883_15943 = state_15808__$1;
(statearr_15883_15943[(2)] = inst_15733);

(statearr_15883_15943[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15809 === (42))){
var state_15808__$1 = state_15808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15808__$1,(45),dchan);
} else {
if((state_val_15809 === (37))){
var inst_15776 = (state_15808[(23)]);
var inst_15676 = (state_15808[(11)]);
var inst_15767 = (state_15808[(25)]);
var inst_15776__$1 = cljs.core.first.call(null,inst_15767);
var inst_15777 = cljs.core.async.put_BANG_.call(null,inst_15776__$1,inst_15676,done);
var state_15808__$1 = (function (){var statearr_15884 = state_15808;
(statearr_15884[(23)] = inst_15776__$1);

return statearr_15884;
})();
if(cljs.core.truth_(inst_15777)){
var statearr_15885_15944 = state_15808__$1;
(statearr_15885_15944[(1)] = (39));

} else {
var statearr_15886_15945 = state_15808__$1;
(statearr_15886_15945[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15809 === (8))){
var inst_15688 = (state_15808[(14)]);
var inst_15687 = (state_15808[(17)]);
var inst_15690 = (inst_15688 < inst_15687);
var inst_15691 = inst_15690;
var state_15808__$1 = state_15808;
if(cljs.core.truth_(inst_15691)){
var statearr_15887_15946 = state_15808__$1;
(statearr_15887_15946[(1)] = (10));

} else {
var statearr_15888_15947 = state_15808__$1;
(statearr_15888_15947[(1)] = (11));

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
});})(c__15074__auto___15893,cs,m,dchan,dctr,done))
;
return ((function (switch__14984__auto__,c__15074__auto___15893,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__14985__auto__ = null;
var cljs$core$async$mult_$_state_machine__14985__auto____0 = (function (){
var statearr_15889 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15889[(0)] = cljs$core$async$mult_$_state_machine__14985__auto__);

(statearr_15889[(1)] = (1));

return statearr_15889;
});
var cljs$core$async$mult_$_state_machine__14985__auto____1 = (function (state_15808){
while(true){
var ret_value__14986__auto__ = (function (){try{while(true){
var result__14987__auto__ = switch__14984__auto__.call(null,state_15808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14987__auto__;
}
break;
}
}catch (e15890){if((e15890 instanceof Object)){
var ex__14988__auto__ = e15890;
var statearr_15891_15948 = state_15808;
(statearr_15891_15948[(5)] = ex__14988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15949 = state_15808;
state_15808 = G__15949;
continue;
} else {
return ret_value__14986__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14985__auto__ = function(state_15808){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14985__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14985__auto____1.call(this,state_15808);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__14985__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14985__auto____0;
cljs$core$async$mult_$_state_machine__14985__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14985__auto____1;
return cljs$core$async$mult_$_state_machine__14985__auto__;
})()
;})(switch__14984__auto__,c__15074__auto___15893,cs,m,dchan,dctr,done))
})();
var state__15076__auto__ = (function (){var statearr_15892 = f__15075__auto__.call(null);
(statearr_15892[(6)] = c__15074__auto___15893);

return statearr_15892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15076__auto__);
});})(c__15074__auto___15893,cs,m,dchan,dctr,done))
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
var G__15951 = arguments.length;
switch (G__15951) {
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
var x__10395__auto__ = (((m == null))?null:m);
var m__10396__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__10395__auto__)]);
if(!((m__10396__auto__ == null))){
return m__10396__auto__.call(null,m,ch);
} else {
var m__10396__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__10396__auto____$1 == null))){
return m__10396__auto____$1.call(null,m,ch);
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
var x__10395__auto__ = (((m == null))?null:m);
var m__10396__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__10395__auto__)]);
if(!((m__10396__auto__ == null))){
return m__10396__auto__.call(null,m,ch);
} else {
var m__10396__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__10396__auto____$1 == null))){
return m__10396__auto____$1.call(null,m,ch);
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
var x__10395__auto__ = (((m == null))?null:m);
var m__10396__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__10395__auto__)]);
if(!((m__10396__auto__ == null))){
return m__10396__auto__.call(null,m);
} else {
var m__10396__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__10396__auto____$1 == null))){
return m__10396__auto____$1.call(null,m);
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
var x__10395__auto__ = (((m == null))?null:m);
var m__10396__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__10395__auto__)]);
if(!((m__10396__auto__ == null))){
return m__10396__auto__.call(null,m,state_map);
} else {
var m__10396__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__10396__auto____$1 == null))){
return m__10396__auto____$1.call(null,m,state_map);
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
var x__10395__auto__ = (((m == null))?null:m);
var m__10396__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__10395__auto__)]);
if(!((m__10396__auto__ == null))){
return m__10396__auto__.call(null,m,mode);
} else {
var m__10396__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__10396__auto____$1 == null))){
return m__10396__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__10948__auto__ = [];
var len__10941__auto___15963 = arguments.length;
var i__10942__auto___15964 = (0);
while(true){
if((i__10942__auto___15964 < len__10941__auto___15963)){
args__10948__auto__.push((arguments[i__10942__auto___15964]));

var G__15965 = (i__10942__auto___15964 + (1));
i__10942__auto___15964 = G__15965;
continue;
} else {
}
break;
}

var argseq__10949__auto__ = ((((3) < args__10948__auto__.length))?(new cljs.core.IndexedSeq(args__10948__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10949__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15957){
var map__15958 = p__15957;
var map__15958__$1 = ((((!((map__15958 == null)))?((((map__15958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15958.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15958):map__15958);
var opts = map__15958__$1;
var statearr_15960_15966 = state;
(statearr_15960_15966[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__15958,map__15958__$1,opts){
return (function (val){
var statearr_15961_15967 = state;
(statearr_15961_15967[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__15958,map__15958__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_15962_15968 = state;
(statearr_15962_15968[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15953){
var G__15954 = cljs.core.first.call(null,seq15953);
var seq15953__$1 = cljs.core.next.call(null,seq15953);
var G__15955 = cljs.core.first.call(null,seq15953__$1);
var seq15953__$2 = cljs.core.next.call(null,seq15953__$1);
var G__15956 = cljs.core.first.call(null,seq15953__$2);
var seq15953__$3 = cljs.core.next.call(null,seq15953__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15954,G__15955,G__15956,seq15953__$3);
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
if(typeof cljs.core.async.t_cljs$core$async15969 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15969 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta15970){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta15970 = meta15970;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15971,meta15970__$1){
var self__ = this;
var _15971__$1 = this;
return (new cljs.core.async.t_cljs$core$async15969(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta15970__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15969.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15971){
var self__ = this;
var _15971__$1 = this;
return self__.meta15970;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15969.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15969.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15969.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15969.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15969.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15969.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15969.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15969.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async15969.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta15970","meta15970",-1288718979,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15969.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15969.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15969";

cljs.core.async.t_cljs$core$async15969.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__10333__auto__,writer__10334__auto__,opt__10335__auto__){
return cljs.core._write.call(null,writer__10334__auto__,"cljs.core.async/t_cljs$core$async15969");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async15969 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async15969(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta15970){
return (new cljs.core.async.t_cljs$core$async15969(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta15970));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async15969(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15074__auto___16133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15074__auto___16133,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15075__auto__ = (function (){var switch__14984__auto__ = ((function (c__15074__auto___16133,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16073){
var state_val_16074 = (state_16073[(1)]);
if((state_val_16074 === (7))){
var inst_15988 = (state_16073[(2)]);
var state_16073__$1 = state_16073;
var statearr_16075_16134 = state_16073__$1;
(statearr_16075_16134[(2)] = inst_15988);

(statearr_16075_16134[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16074 === (20))){
var inst_16000 = (state_16073[(7)]);
var state_16073__$1 = state_16073;
var statearr_16076_16135 = state_16073__$1;
(statearr_16076_16135[(2)] = inst_16000);

(statearr_16076_16135[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16074 === (27))){
var state_16073__$1 = state_16073;
var statearr_16077_16136 = state_16073__$1;
(statearr_16077_16136[(2)] = null);

(statearr_16077_16136[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16074 === (1))){
var inst_15975 = (state_16073[(8)]);
var inst_15975__$1 = calc_state.call(null);
var inst_15977 = (inst_15975__$1 == null);
var inst_15978 = cljs.core.not.call(null,inst_15977);
var state_16073__$1 = (function (){var statearr_16078 = state_16073;
(statearr_16078[(8)] = inst_15975__$1);

return statearr_16078;
})();
if(inst_15978){
var statearr_16079_16137 = state_16073__$1;
(statearr_16079_16137[(1)] = (2));

} else {
var statearr_16080_16138 = state_16073__$1;
(statearr_16080_16138[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16074 === (24))){
var inst_16033 = (state_16073[(9)]);
var inst_16024 = (state_16073[(10)]);
var inst_16047 = (state_16073[(11)]);
var inst_16047__$1 = inst_16024.call(null,inst_16033);
var state_16073__$1 = (function (){var statearr_16081 = state_16073;
(statearr_16081[(11)] = inst_16047__$1);

return statearr_16081;
})();
if(cljs.core.truth_(inst_16047__$1)){
var statearr_16082_16139 = state_16073__$1;
(statearr_16082_16139[(1)] = (29));

} else {
var statearr_16083_16140 = state_16073__$1;
(statearr_16083_16140[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16074 === (4))){
var inst_15991 = (state_16073[(2)]);
var state_16073__$1 = state_16073;
if(cljs.core.truth_(inst_15991)){
var statearr_16084_16141 = state_16073__$1;
(statearr_16084_16141[(1)] = (8));

} else {
var statearr_16085_16142 = state_16073__$1;
(statearr_16085_16142[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16074 === (15))){
var inst_16018 = (state_16073[(2)]);
var state_16073__$1 = state_16073;
if(cljs.core.truth_(inst_16018)){
var statearr_16086_16143 = state_16073__$1;
(statearr_16086_16143[(1)] = (19));

} else {
var statearr_16087_16144 = state_16073__$1;
(statearr_16087_16144[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16074 === (21))){
var inst_16023 = (state_16073[(12)]);
var inst_16023__$1 = (state_16073[(2)]);
var inst_16024 = cljs.core.get.call(null,inst_16023__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16025 = cljs.core.get.call(null,inst_16023__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16026 = cljs.core.get.call(null,inst_16023__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16073__$1 = (function (){var statearr_16088 = state_16073;
(statearr_16088[(13)] = inst_16025);

(statearr_16088[(10)] = inst_16024);

(statearr_16088[(12)] = inst_16023__$1);

return statearr_16088;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_16073__$1,(22),inst_16026);
} else {
if((state_val_16074 === (31))){
var inst_16055 = (state_16073[(2)]);
var state_16073__$1 = state_16073;
if(cljs.core.truth_(inst_16055)){
var statearr_16089_16145 = state_16073__$1;
(statearr_16089_16145[(1)] = (32));

} else {
var statearr_16090_16146 = state_16073__$1;
(statearr_16090_16146[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16074 === (32))){
var inst_16032 = (state_16073[(14)]);
var state_16073__$1 = state_16073;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16073__$1,(35),out,inst_16032);
} else {
if((state_val_16074 === (33))){
var inst_16023 = (state_16073[(12)]);
var inst_16000 = inst_16023;
var state_16073__$1 = (function (){var statearr_16091 = state_16073;
(statearr_16091[(7)] = inst_16000);

return statearr_16091;
})();
var statearr_16092_16147 = state_16073__$1;
(statearr_16092_16147[(2)] = null);

(statearr_16092_16147[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16074 === (13))){
var inst_16000 = (state_16073[(7)]);
var inst_16007 = inst_16000.cljs$lang$protocol_mask$partition0$;
var inst_16008 = (inst_16007 & (64));
var inst_16009 = inst_16000.cljs$core$ISeq$;
var inst_16010 = (cljs.core.PROTOCOL_SENTINEL === inst_16009);
var inst_16011 = (inst_16008) || (inst_16010);
var state_16073__$1 = state_16073;
if(cljs.core.truth_(inst_16011)){
var statearr_16093_16148 = state_16073__$1;
(statearr_16093_16148[(1)] = (16));

} else {
var statearr_16094_16149 = state_16073__$1;
(statearr_16094_16149[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16074 === (22))){
var inst_16033 = (state_16073[(9)]);
var inst_16032 = (state_16073[(14)]);
var inst_16031 = (state_16073[(2)]);
var inst_16032__$1 = cljs.core.nth.call(null,inst_16031,(0),null);
var inst_16033__$1 = cljs.core.nth.call(null,inst_16031,(1),null);
var inst_16034 = (inst_16032__$1 == null);
var inst_16035 = cljs.core._EQ_.call(null,inst_16033__$1,change);
var inst_16036 = (inst_16034) || (inst_16035);
var state_16073__$1 = (function (){var statearr_16095 = state_16073;
(statearr_16095[(9)] = inst_16033__$1);

(statearr_16095[(14)] = inst_16032__$1);

return statearr_16095;
})();
if(cljs.core.truth_(inst_16036)){
var statearr_16096_16150 = state_16073__$1;
(statearr_16096_16150[(1)] = (23));

} else {
var statearr_16097_16151 = state_16073__$1;
(statearr_16097_16151[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16074 === (36))){
var inst_16023 = (state_16073[(12)]);
var inst_16000 = inst_16023;
var state_16073__$1 = (function (){var statearr_16098 = state_16073;
(statearr_16098[(7)] = inst_16000);

return statearr_16098;
})();
var statearr_16099_16152 = state_16073__$1;
(statearr_16099_16152[(2)] = null);

(statearr_16099_16152[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16074 === (29))){
var inst_16047 = (state_16073[(11)]);
var state_16073__$1 = state_16073;
var statearr_16100_16153 = state_16073__$1;
(statearr_16100_16153[(2)] = inst_16047);

(statearr_16100_16153[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16074 === (6))){
var state_16073__$1 = state_16073;
var statearr_16101_16154 = state_16073__$1;
(statearr_16101_16154[(2)] = false);

(statearr_16101_16154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16074 === (28))){
var inst_16043 = (state_16073[(2)]);
var inst_16044 = calc_state.call(null);
var inst_16000 = inst_16044;
var state_16073__$1 = (function (){var statearr_16102 = state_16073;
(statearr_16102[(15)] = inst_16043);

(statearr_16102[(7)] = inst_16000);

return statearr_16102;
})();
var statearr_16103_16155 = state_16073__$1;
(statearr_16103_16155[(2)] = null);

(statearr_16103_16155[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16074 === (25))){
var inst_16069 = (state_16073[(2)]);
var state_16073__$1 = state_16073;
var statearr_16104_16156 = state_16073__$1;
(statearr_16104_16156[(2)] = inst_16069);

(statearr_16104_16156[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16074 === (34))){
var inst_16067 = (state_16073[(2)]);
var state_16073__$1 = state_16073;
var statearr_16105_16157 = state_16073__$1;
(statearr_16105_16157[(2)] = inst_16067);

(statearr_16105_16157[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16074 === (17))){
var state_16073__$1 = state_16073;
var statearr_16106_16158 = state_16073__$1;
(statearr_16106_16158[(2)] = false);

(statearr_16106_16158[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16074 === (3))){
var state_16073__$1 = state_16073;
var statearr_16107_16159 = state_16073__$1;
(statearr_16107_16159[(2)] = false);

(statearr_16107_16159[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16074 === (12))){
var inst_16071 = (state_16073[(2)]);
var state_16073__$1 = state_16073;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16073__$1,inst_16071);
} else {
if((state_val_16074 === (2))){
var inst_15975 = (state_16073[(8)]);
var inst_15980 = inst_15975.cljs$lang$protocol_mask$partition0$;
var inst_15981 = (inst_15980 & (64));
var inst_15982 = inst_15975.cljs$core$ISeq$;
var inst_15983 = (cljs.core.PROTOCOL_SENTINEL === inst_15982);
var inst_15984 = (inst_15981) || (inst_15983);
var state_16073__$1 = state_16073;
if(cljs.core.truth_(inst_15984)){
var statearr_16108_16160 = state_16073__$1;
(statearr_16108_16160[(1)] = (5));

} else {
var statearr_16109_16161 = state_16073__$1;
(statearr_16109_16161[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16074 === (23))){
var inst_16032 = (state_16073[(14)]);
var inst_16038 = (inst_16032 == null);
var state_16073__$1 = state_16073;
if(cljs.core.truth_(inst_16038)){
var statearr_16110_16162 = state_16073__$1;
(statearr_16110_16162[(1)] = (26));

} else {
var statearr_16111_16163 = state_16073__$1;
(statearr_16111_16163[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16074 === (35))){
var inst_16058 = (state_16073[(2)]);
var state_16073__$1 = state_16073;
if(cljs.core.truth_(inst_16058)){
var statearr_16112_16164 = state_16073__$1;
(statearr_16112_16164[(1)] = (36));

} else {
var statearr_16113_16165 = state_16073__$1;
(statearr_16113_16165[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16074 === (19))){
var inst_16000 = (state_16073[(7)]);
var inst_16020 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16000);
var state_16073__$1 = state_16073;
var statearr_16114_16166 = state_16073__$1;
(statearr_16114_16166[(2)] = inst_16020);

(statearr_16114_16166[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16074 === (11))){
var inst_16000 = (state_16073[(7)]);
var inst_16004 = (inst_16000 == null);
var inst_16005 = cljs.core.not.call(null,inst_16004);
var state_16073__$1 = state_16073;
if(inst_16005){
var statearr_16115_16167 = state_16073__$1;
(statearr_16115_16167[(1)] = (13));

} else {
var statearr_16116_16168 = state_16073__$1;
(statearr_16116_16168[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16074 === (9))){
var inst_15975 = (state_16073[(8)]);
var state_16073__$1 = state_16073;
var statearr_16117_16169 = state_16073__$1;
(statearr_16117_16169[(2)] = inst_15975);

(statearr_16117_16169[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16074 === (5))){
var state_16073__$1 = state_16073;
var statearr_16118_16170 = state_16073__$1;
(statearr_16118_16170[(2)] = true);

(statearr_16118_16170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16074 === (14))){
var state_16073__$1 = state_16073;
var statearr_16119_16171 = state_16073__$1;
(statearr_16119_16171[(2)] = false);

(statearr_16119_16171[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16074 === (26))){
var inst_16033 = (state_16073[(9)]);
var inst_16040 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16033);
var state_16073__$1 = state_16073;
var statearr_16120_16172 = state_16073__$1;
(statearr_16120_16172[(2)] = inst_16040);

(statearr_16120_16172[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16074 === (16))){
var state_16073__$1 = state_16073;
var statearr_16121_16173 = state_16073__$1;
(statearr_16121_16173[(2)] = true);

(statearr_16121_16173[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16074 === (38))){
var inst_16063 = (state_16073[(2)]);
var state_16073__$1 = state_16073;
var statearr_16122_16174 = state_16073__$1;
(statearr_16122_16174[(2)] = inst_16063);

(statearr_16122_16174[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16074 === (30))){
var inst_16025 = (state_16073[(13)]);
var inst_16033 = (state_16073[(9)]);
var inst_16024 = (state_16073[(10)]);
var inst_16050 = cljs.core.empty_QMARK_.call(null,inst_16024);
var inst_16051 = inst_16025.call(null,inst_16033);
var inst_16052 = cljs.core.not.call(null,inst_16051);
var inst_16053 = (inst_16050) && (inst_16052);
var state_16073__$1 = state_16073;
var statearr_16123_16175 = state_16073__$1;
(statearr_16123_16175[(2)] = inst_16053);

(statearr_16123_16175[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16074 === (10))){
var inst_15975 = (state_16073[(8)]);
var inst_15996 = (state_16073[(2)]);
var inst_15997 = cljs.core.get.call(null,inst_15996,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15998 = cljs.core.get.call(null,inst_15996,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15999 = cljs.core.get.call(null,inst_15996,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16000 = inst_15975;
var state_16073__$1 = (function (){var statearr_16124 = state_16073;
(statearr_16124[(16)] = inst_15999);

(statearr_16124[(7)] = inst_16000);

(statearr_16124[(17)] = inst_15997);

(statearr_16124[(18)] = inst_15998);

return statearr_16124;
})();
var statearr_16125_16176 = state_16073__$1;
(statearr_16125_16176[(2)] = null);

(statearr_16125_16176[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16074 === (18))){
var inst_16015 = (state_16073[(2)]);
var state_16073__$1 = state_16073;
var statearr_16126_16177 = state_16073__$1;
(statearr_16126_16177[(2)] = inst_16015);

(statearr_16126_16177[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16074 === (37))){
var state_16073__$1 = state_16073;
var statearr_16127_16178 = state_16073__$1;
(statearr_16127_16178[(2)] = null);

(statearr_16127_16178[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16074 === (8))){
var inst_15975 = (state_16073[(8)]);
var inst_15993 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15975);
var state_16073__$1 = state_16073;
var statearr_16128_16179 = state_16073__$1;
(statearr_16128_16179[(2)] = inst_15993);

(statearr_16128_16179[(1)] = (10));


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
});})(c__15074__auto___16133,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__14984__auto__,c__15074__auto___16133,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__14985__auto__ = null;
var cljs$core$async$mix_$_state_machine__14985__auto____0 = (function (){
var statearr_16129 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16129[(0)] = cljs$core$async$mix_$_state_machine__14985__auto__);

(statearr_16129[(1)] = (1));

return statearr_16129;
});
var cljs$core$async$mix_$_state_machine__14985__auto____1 = (function (state_16073){
while(true){
var ret_value__14986__auto__ = (function (){try{while(true){
var result__14987__auto__ = switch__14984__auto__.call(null,state_16073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14987__auto__;
}
break;
}
}catch (e16130){if((e16130 instanceof Object)){
var ex__14988__auto__ = e16130;
var statearr_16131_16180 = state_16073;
(statearr_16131_16180[(5)] = ex__14988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16181 = state_16073;
state_16073 = G__16181;
continue;
} else {
return ret_value__14986__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14985__auto__ = function(state_16073){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14985__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14985__auto____1.call(this,state_16073);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__14985__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14985__auto____0;
cljs$core$async$mix_$_state_machine__14985__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14985__auto____1;
return cljs$core$async$mix_$_state_machine__14985__auto__;
})()
;})(switch__14984__auto__,c__15074__auto___16133,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15076__auto__ = (function (){var statearr_16132 = f__15075__auto__.call(null);
(statearr_16132[(6)] = c__15074__auto___16133);

return statearr_16132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15076__auto__);
});})(c__15074__auto___16133,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__10395__auto__ = (((p == null))?null:p);
var m__10396__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__10395__auto__)]);
if(!((m__10396__auto__ == null))){
return m__10396__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__10396__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__10396__auto____$1 == null))){
return m__10396__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__10395__auto__ = (((p == null))?null:p);
var m__10396__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__10395__auto__)]);
if(!((m__10396__auto__ == null))){
return m__10396__auto__.call(null,p,v,ch);
} else {
var m__10396__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__10396__auto____$1 == null))){
return m__10396__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16183 = arguments.length;
switch (G__16183) {
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
var x__10395__auto__ = (((p == null))?null:p);
var m__10396__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__10395__auto__)]);
if(!((m__10396__auto__ == null))){
return m__10396__auto__.call(null,p);
} else {
var m__10396__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__10396__auto____$1 == null))){
return m__10396__auto____$1.call(null,p);
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
var x__10395__auto__ = (((p == null))?null:p);
var m__10396__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__10395__auto__)]);
if(!((m__10396__auto__ == null))){
return m__10396__auto__.call(null,p,v);
} else {
var m__10396__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__10396__auto____$1 == null))){
return m__10396__auto____$1.call(null,p,v);
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
var G__16187 = arguments.length;
switch (G__16187) {
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
var or__9662__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__9662__auto__)){
return or__9662__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__9662__auto__,mults){
return (function (p1__16185_SHARP_){
if(cljs.core.truth_(p1__16185_SHARP_.call(null,topic))){
return p1__16185_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__16185_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__9662__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async16188 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16188 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16189){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16189 = meta16189;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16190,meta16189__$1){
var self__ = this;
var _16190__$1 = this;
return (new cljs.core.async.t_cljs$core$async16188(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16189__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16188.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16190){
var self__ = this;
var _16190__$1 = this;
return self__.meta16189;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16188.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16188.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16188.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16188.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16188.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async16188.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16188.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16188.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16189","meta16189",-30241282,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16188.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16188.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16188";

cljs.core.async.t_cljs$core$async16188.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__10333__auto__,writer__10334__auto__,opt__10335__auto__){
return cljs.core._write.call(null,writer__10334__auto__,"cljs.core.async/t_cljs$core$async16188");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async16188 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async16188(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16189){
return (new cljs.core.async.t_cljs$core$async16188(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16189));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async16188(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15074__auto___16308 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15074__auto___16308,mults,ensure_mult,p){
return (function (){
var f__15075__auto__ = (function (){var switch__14984__auto__ = ((function (c__15074__auto___16308,mults,ensure_mult,p){
return (function (state_16262){
var state_val_16263 = (state_16262[(1)]);
if((state_val_16263 === (7))){
var inst_16258 = (state_16262[(2)]);
var state_16262__$1 = state_16262;
var statearr_16264_16309 = state_16262__$1;
(statearr_16264_16309[(2)] = inst_16258);

(statearr_16264_16309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16263 === (20))){
var state_16262__$1 = state_16262;
var statearr_16265_16310 = state_16262__$1;
(statearr_16265_16310[(2)] = null);

(statearr_16265_16310[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16263 === (1))){
var state_16262__$1 = state_16262;
var statearr_16266_16311 = state_16262__$1;
(statearr_16266_16311[(2)] = null);

(statearr_16266_16311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16263 === (24))){
var inst_16241 = (state_16262[(7)]);
var inst_16250 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16241);
var state_16262__$1 = state_16262;
var statearr_16267_16312 = state_16262__$1;
(statearr_16267_16312[(2)] = inst_16250);

(statearr_16267_16312[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16263 === (4))){
var inst_16193 = (state_16262[(8)]);
var inst_16193__$1 = (state_16262[(2)]);
var inst_16194 = (inst_16193__$1 == null);
var state_16262__$1 = (function (){var statearr_16268 = state_16262;
(statearr_16268[(8)] = inst_16193__$1);

return statearr_16268;
})();
if(cljs.core.truth_(inst_16194)){
var statearr_16269_16313 = state_16262__$1;
(statearr_16269_16313[(1)] = (5));

} else {
var statearr_16270_16314 = state_16262__$1;
(statearr_16270_16314[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16263 === (15))){
var inst_16235 = (state_16262[(2)]);
var state_16262__$1 = state_16262;
var statearr_16271_16315 = state_16262__$1;
(statearr_16271_16315[(2)] = inst_16235);

(statearr_16271_16315[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16263 === (21))){
var inst_16255 = (state_16262[(2)]);
var state_16262__$1 = (function (){var statearr_16272 = state_16262;
(statearr_16272[(9)] = inst_16255);

return statearr_16272;
})();
var statearr_16273_16316 = state_16262__$1;
(statearr_16273_16316[(2)] = null);

(statearr_16273_16316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16263 === (13))){
var inst_16217 = (state_16262[(10)]);
var inst_16219 = cljs.core.chunked_seq_QMARK_.call(null,inst_16217);
var state_16262__$1 = state_16262;
if(inst_16219){
var statearr_16274_16317 = state_16262__$1;
(statearr_16274_16317[(1)] = (16));

} else {
var statearr_16275_16318 = state_16262__$1;
(statearr_16275_16318[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16263 === (22))){
var inst_16247 = (state_16262[(2)]);
var state_16262__$1 = state_16262;
if(cljs.core.truth_(inst_16247)){
var statearr_16276_16319 = state_16262__$1;
(statearr_16276_16319[(1)] = (23));

} else {
var statearr_16277_16320 = state_16262__$1;
(statearr_16277_16320[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16263 === (6))){
var inst_16193 = (state_16262[(8)]);
var inst_16243 = (state_16262[(11)]);
var inst_16241 = (state_16262[(7)]);
var inst_16241__$1 = topic_fn.call(null,inst_16193);
var inst_16242 = cljs.core.deref.call(null,mults);
var inst_16243__$1 = cljs.core.get.call(null,inst_16242,inst_16241__$1);
var state_16262__$1 = (function (){var statearr_16278 = state_16262;
(statearr_16278[(11)] = inst_16243__$1);

(statearr_16278[(7)] = inst_16241__$1);

return statearr_16278;
})();
if(cljs.core.truth_(inst_16243__$1)){
var statearr_16279_16321 = state_16262__$1;
(statearr_16279_16321[(1)] = (19));

} else {
var statearr_16280_16322 = state_16262__$1;
(statearr_16280_16322[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16263 === (25))){
var inst_16252 = (state_16262[(2)]);
var state_16262__$1 = state_16262;
var statearr_16281_16323 = state_16262__$1;
(statearr_16281_16323[(2)] = inst_16252);

(statearr_16281_16323[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16263 === (17))){
var inst_16217 = (state_16262[(10)]);
var inst_16226 = cljs.core.first.call(null,inst_16217);
var inst_16227 = cljs.core.async.muxch_STAR_.call(null,inst_16226);
var inst_16228 = cljs.core.async.close_BANG_.call(null,inst_16227);
var inst_16229 = cljs.core.next.call(null,inst_16217);
var inst_16203 = inst_16229;
var inst_16204 = null;
var inst_16205 = (0);
var inst_16206 = (0);
var state_16262__$1 = (function (){var statearr_16282 = state_16262;
(statearr_16282[(12)] = inst_16204);

(statearr_16282[(13)] = inst_16205);

(statearr_16282[(14)] = inst_16206);

(statearr_16282[(15)] = inst_16228);

(statearr_16282[(16)] = inst_16203);

return statearr_16282;
})();
var statearr_16283_16324 = state_16262__$1;
(statearr_16283_16324[(2)] = null);

(statearr_16283_16324[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16263 === (3))){
var inst_16260 = (state_16262[(2)]);
var state_16262__$1 = state_16262;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16262__$1,inst_16260);
} else {
if((state_val_16263 === (12))){
var inst_16237 = (state_16262[(2)]);
var state_16262__$1 = state_16262;
var statearr_16284_16325 = state_16262__$1;
(statearr_16284_16325[(2)] = inst_16237);

(statearr_16284_16325[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16263 === (2))){
var state_16262__$1 = state_16262;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16262__$1,(4),ch);
} else {
if((state_val_16263 === (23))){
var state_16262__$1 = state_16262;
var statearr_16285_16326 = state_16262__$1;
(statearr_16285_16326[(2)] = null);

(statearr_16285_16326[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16263 === (19))){
var inst_16193 = (state_16262[(8)]);
var inst_16243 = (state_16262[(11)]);
var inst_16245 = cljs.core.async.muxch_STAR_.call(null,inst_16243);
var state_16262__$1 = state_16262;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16262__$1,(22),inst_16245,inst_16193);
} else {
if((state_val_16263 === (11))){
var inst_16217 = (state_16262[(10)]);
var inst_16203 = (state_16262[(16)]);
var inst_16217__$1 = cljs.core.seq.call(null,inst_16203);
var state_16262__$1 = (function (){var statearr_16286 = state_16262;
(statearr_16286[(10)] = inst_16217__$1);

return statearr_16286;
})();
if(inst_16217__$1){
var statearr_16287_16327 = state_16262__$1;
(statearr_16287_16327[(1)] = (13));

} else {
var statearr_16288_16328 = state_16262__$1;
(statearr_16288_16328[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16263 === (9))){
var inst_16239 = (state_16262[(2)]);
var state_16262__$1 = state_16262;
var statearr_16289_16329 = state_16262__$1;
(statearr_16289_16329[(2)] = inst_16239);

(statearr_16289_16329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16263 === (5))){
var inst_16200 = cljs.core.deref.call(null,mults);
var inst_16201 = cljs.core.vals.call(null,inst_16200);
var inst_16202 = cljs.core.seq.call(null,inst_16201);
var inst_16203 = inst_16202;
var inst_16204 = null;
var inst_16205 = (0);
var inst_16206 = (0);
var state_16262__$1 = (function (){var statearr_16290 = state_16262;
(statearr_16290[(12)] = inst_16204);

(statearr_16290[(13)] = inst_16205);

(statearr_16290[(14)] = inst_16206);

(statearr_16290[(16)] = inst_16203);

return statearr_16290;
})();
var statearr_16291_16330 = state_16262__$1;
(statearr_16291_16330[(2)] = null);

(statearr_16291_16330[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16263 === (14))){
var state_16262__$1 = state_16262;
var statearr_16295_16331 = state_16262__$1;
(statearr_16295_16331[(2)] = null);

(statearr_16295_16331[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16263 === (16))){
var inst_16217 = (state_16262[(10)]);
var inst_16221 = cljs.core.chunk_first.call(null,inst_16217);
var inst_16222 = cljs.core.chunk_rest.call(null,inst_16217);
var inst_16223 = cljs.core.count.call(null,inst_16221);
var inst_16203 = inst_16222;
var inst_16204 = inst_16221;
var inst_16205 = inst_16223;
var inst_16206 = (0);
var state_16262__$1 = (function (){var statearr_16296 = state_16262;
(statearr_16296[(12)] = inst_16204);

(statearr_16296[(13)] = inst_16205);

(statearr_16296[(14)] = inst_16206);

(statearr_16296[(16)] = inst_16203);

return statearr_16296;
})();
var statearr_16297_16332 = state_16262__$1;
(statearr_16297_16332[(2)] = null);

(statearr_16297_16332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16263 === (10))){
var inst_16204 = (state_16262[(12)]);
var inst_16205 = (state_16262[(13)]);
var inst_16206 = (state_16262[(14)]);
var inst_16203 = (state_16262[(16)]);
var inst_16211 = cljs.core._nth.call(null,inst_16204,inst_16206);
var inst_16212 = cljs.core.async.muxch_STAR_.call(null,inst_16211);
var inst_16213 = cljs.core.async.close_BANG_.call(null,inst_16212);
var inst_16214 = (inst_16206 + (1));
var tmp16292 = inst_16204;
var tmp16293 = inst_16205;
var tmp16294 = inst_16203;
var inst_16203__$1 = tmp16294;
var inst_16204__$1 = tmp16292;
var inst_16205__$1 = tmp16293;
var inst_16206__$1 = inst_16214;
var state_16262__$1 = (function (){var statearr_16298 = state_16262;
(statearr_16298[(17)] = inst_16213);

(statearr_16298[(12)] = inst_16204__$1);

(statearr_16298[(13)] = inst_16205__$1);

(statearr_16298[(14)] = inst_16206__$1);

(statearr_16298[(16)] = inst_16203__$1);

return statearr_16298;
})();
var statearr_16299_16333 = state_16262__$1;
(statearr_16299_16333[(2)] = null);

(statearr_16299_16333[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16263 === (18))){
var inst_16232 = (state_16262[(2)]);
var state_16262__$1 = state_16262;
var statearr_16300_16334 = state_16262__$1;
(statearr_16300_16334[(2)] = inst_16232);

(statearr_16300_16334[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16263 === (8))){
var inst_16205 = (state_16262[(13)]);
var inst_16206 = (state_16262[(14)]);
var inst_16208 = (inst_16206 < inst_16205);
var inst_16209 = inst_16208;
var state_16262__$1 = state_16262;
if(cljs.core.truth_(inst_16209)){
var statearr_16301_16335 = state_16262__$1;
(statearr_16301_16335[(1)] = (10));

} else {
var statearr_16302_16336 = state_16262__$1;
(statearr_16302_16336[(1)] = (11));

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
});})(c__15074__auto___16308,mults,ensure_mult,p))
;
return ((function (switch__14984__auto__,c__15074__auto___16308,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__14985__auto__ = null;
var cljs$core$async$state_machine__14985__auto____0 = (function (){
var statearr_16303 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16303[(0)] = cljs$core$async$state_machine__14985__auto__);

(statearr_16303[(1)] = (1));

return statearr_16303;
});
var cljs$core$async$state_machine__14985__auto____1 = (function (state_16262){
while(true){
var ret_value__14986__auto__ = (function (){try{while(true){
var result__14987__auto__ = switch__14984__auto__.call(null,state_16262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14987__auto__;
}
break;
}
}catch (e16304){if((e16304 instanceof Object)){
var ex__14988__auto__ = e16304;
var statearr_16305_16337 = state_16262;
(statearr_16305_16337[(5)] = ex__14988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16338 = state_16262;
state_16262 = G__16338;
continue;
} else {
return ret_value__14986__auto__;
}
break;
}
});
cljs$core$async$state_machine__14985__auto__ = function(state_16262){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14985__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14985__auto____1.call(this,state_16262);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14985__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14985__auto____0;
cljs$core$async$state_machine__14985__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14985__auto____1;
return cljs$core$async$state_machine__14985__auto__;
})()
;})(switch__14984__auto__,c__15074__auto___16308,mults,ensure_mult,p))
})();
var state__15076__auto__ = (function (){var statearr_16306 = f__15075__auto__.call(null);
(statearr_16306[(6)] = c__15074__auto___16308);

return statearr_16306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15076__auto__);
});})(c__15074__auto___16308,mults,ensure_mult,p))
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
var G__16340 = arguments.length;
switch (G__16340) {
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
var G__16343 = arguments.length;
switch (G__16343) {
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
var G__16346 = arguments.length;
switch (G__16346) {
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
var c__15074__auto___16413 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15074__auto___16413,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15075__auto__ = (function (){var switch__14984__auto__ = ((function (c__15074__auto___16413,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16385){
var state_val_16386 = (state_16385[(1)]);
if((state_val_16386 === (7))){
var state_16385__$1 = state_16385;
var statearr_16387_16414 = state_16385__$1;
(statearr_16387_16414[(2)] = null);

(statearr_16387_16414[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16386 === (1))){
var state_16385__$1 = state_16385;
var statearr_16388_16415 = state_16385__$1;
(statearr_16388_16415[(2)] = null);

(statearr_16388_16415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16386 === (4))){
var inst_16349 = (state_16385[(7)]);
var inst_16351 = (inst_16349 < cnt);
var state_16385__$1 = state_16385;
if(cljs.core.truth_(inst_16351)){
var statearr_16389_16416 = state_16385__$1;
(statearr_16389_16416[(1)] = (6));

} else {
var statearr_16390_16417 = state_16385__$1;
(statearr_16390_16417[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16386 === (15))){
var inst_16381 = (state_16385[(2)]);
var state_16385__$1 = state_16385;
var statearr_16391_16418 = state_16385__$1;
(statearr_16391_16418[(2)] = inst_16381);

(statearr_16391_16418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16386 === (13))){
var inst_16374 = cljs.core.async.close_BANG_.call(null,out);
var state_16385__$1 = state_16385;
var statearr_16392_16419 = state_16385__$1;
(statearr_16392_16419[(2)] = inst_16374);

(statearr_16392_16419[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16386 === (6))){
var state_16385__$1 = state_16385;
var statearr_16393_16420 = state_16385__$1;
(statearr_16393_16420[(2)] = null);

(statearr_16393_16420[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16386 === (3))){
var inst_16383 = (state_16385[(2)]);
var state_16385__$1 = state_16385;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16385__$1,inst_16383);
} else {
if((state_val_16386 === (12))){
var inst_16371 = (state_16385[(8)]);
var inst_16371__$1 = (state_16385[(2)]);
var inst_16372 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16371__$1);
var state_16385__$1 = (function (){var statearr_16394 = state_16385;
(statearr_16394[(8)] = inst_16371__$1);

return statearr_16394;
})();
if(cljs.core.truth_(inst_16372)){
var statearr_16395_16421 = state_16385__$1;
(statearr_16395_16421[(1)] = (13));

} else {
var statearr_16396_16422 = state_16385__$1;
(statearr_16396_16422[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16386 === (2))){
var inst_16348 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_16349 = (0);
var state_16385__$1 = (function (){var statearr_16397 = state_16385;
(statearr_16397[(7)] = inst_16349);

(statearr_16397[(9)] = inst_16348);

return statearr_16397;
})();
var statearr_16398_16423 = state_16385__$1;
(statearr_16398_16423[(2)] = null);

(statearr_16398_16423[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16386 === (11))){
var inst_16349 = (state_16385[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16385,(10),Object,null,(9));
var inst_16358 = chs__$1.call(null,inst_16349);
var inst_16359 = done.call(null,inst_16349);
var inst_16360 = cljs.core.async.take_BANG_.call(null,inst_16358,inst_16359);
var state_16385__$1 = state_16385;
var statearr_16399_16424 = state_16385__$1;
(statearr_16399_16424[(2)] = inst_16360);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16385__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16386 === (9))){
var inst_16349 = (state_16385[(7)]);
var inst_16362 = (state_16385[(2)]);
var inst_16363 = (inst_16349 + (1));
var inst_16349__$1 = inst_16363;
var state_16385__$1 = (function (){var statearr_16400 = state_16385;
(statearr_16400[(7)] = inst_16349__$1);

(statearr_16400[(10)] = inst_16362);

return statearr_16400;
})();
var statearr_16401_16425 = state_16385__$1;
(statearr_16401_16425[(2)] = null);

(statearr_16401_16425[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16386 === (5))){
var inst_16369 = (state_16385[(2)]);
var state_16385__$1 = (function (){var statearr_16402 = state_16385;
(statearr_16402[(11)] = inst_16369);

return statearr_16402;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16385__$1,(12),dchan);
} else {
if((state_val_16386 === (14))){
var inst_16371 = (state_16385[(8)]);
var inst_16376 = cljs.core.apply.call(null,f,inst_16371);
var state_16385__$1 = state_16385;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16385__$1,(16),out,inst_16376);
} else {
if((state_val_16386 === (16))){
var inst_16378 = (state_16385[(2)]);
var state_16385__$1 = (function (){var statearr_16403 = state_16385;
(statearr_16403[(12)] = inst_16378);

return statearr_16403;
})();
var statearr_16404_16426 = state_16385__$1;
(statearr_16404_16426[(2)] = null);

(statearr_16404_16426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16386 === (10))){
var inst_16353 = (state_16385[(2)]);
var inst_16354 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_16385__$1 = (function (){var statearr_16405 = state_16385;
(statearr_16405[(13)] = inst_16353);

return statearr_16405;
})();
var statearr_16406_16427 = state_16385__$1;
(statearr_16406_16427[(2)] = inst_16354);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16385__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16386 === (8))){
var inst_16367 = (state_16385[(2)]);
var state_16385__$1 = state_16385;
var statearr_16407_16428 = state_16385__$1;
(statearr_16407_16428[(2)] = inst_16367);

(statearr_16407_16428[(1)] = (5));


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
});})(c__15074__auto___16413,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__14984__auto__,c__15074__auto___16413,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__14985__auto__ = null;
var cljs$core$async$state_machine__14985__auto____0 = (function (){
var statearr_16408 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16408[(0)] = cljs$core$async$state_machine__14985__auto__);

(statearr_16408[(1)] = (1));

return statearr_16408;
});
var cljs$core$async$state_machine__14985__auto____1 = (function (state_16385){
while(true){
var ret_value__14986__auto__ = (function (){try{while(true){
var result__14987__auto__ = switch__14984__auto__.call(null,state_16385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14987__auto__;
}
break;
}
}catch (e16409){if((e16409 instanceof Object)){
var ex__14988__auto__ = e16409;
var statearr_16410_16429 = state_16385;
(statearr_16410_16429[(5)] = ex__14988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16430 = state_16385;
state_16385 = G__16430;
continue;
} else {
return ret_value__14986__auto__;
}
break;
}
});
cljs$core$async$state_machine__14985__auto__ = function(state_16385){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14985__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14985__auto____1.call(this,state_16385);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14985__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14985__auto____0;
cljs$core$async$state_machine__14985__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14985__auto____1;
return cljs$core$async$state_machine__14985__auto__;
})()
;})(switch__14984__auto__,c__15074__auto___16413,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15076__auto__ = (function (){var statearr_16411 = f__15075__auto__.call(null);
(statearr_16411[(6)] = c__15074__auto___16413);

return statearr_16411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15076__auto__);
});})(c__15074__auto___16413,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__16433 = arguments.length;
switch (G__16433) {
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
var c__15074__auto___16487 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15074__auto___16487,out){
return (function (){
var f__15075__auto__ = (function (){var switch__14984__auto__ = ((function (c__15074__auto___16487,out){
return (function (state_16465){
var state_val_16466 = (state_16465[(1)]);
if((state_val_16466 === (7))){
var inst_16445 = (state_16465[(7)]);
var inst_16444 = (state_16465[(8)]);
var inst_16444__$1 = (state_16465[(2)]);
var inst_16445__$1 = cljs.core.nth.call(null,inst_16444__$1,(0),null);
var inst_16446 = cljs.core.nth.call(null,inst_16444__$1,(1),null);
var inst_16447 = (inst_16445__$1 == null);
var state_16465__$1 = (function (){var statearr_16467 = state_16465;
(statearr_16467[(9)] = inst_16446);

(statearr_16467[(7)] = inst_16445__$1);

(statearr_16467[(8)] = inst_16444__$1);

return statearr_16467;
})();
if(cljs.core.truth_(inst_16447)){
var statearr_16468_16488 = state_16465__$1;
(statearr_16468_16488[(1)] = (8));

} else {
var statearr_16469_16489 = state_16465__$1;
(statearr_16469_16489[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16466 === (1))){
var inst_16434 = cljs.core.vec.call(null,chs);
var inst_16435 = inst_16434;
var state_16465__$1 = (function (){var statearr_16470 = state_16465;
(statearr_16470[(10)] = inst_16435);

return statearr_16470;
})();
var statearr_16471_16490 = state_16465__$1;
(statearr_16471_16490[(2)] = null);

(statearr_16471_16490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16466 === (4))){
var inst_16435 = (state_16465[(10)]);
var state_16465__$1 = state_16465;
return cljs.core.async.ioc_alts_BANG_.call(null,state_16465__$1,(7),inst_16435);
} else {
if((state_val_16466 === (6))){
var inst_16461 = (state_16465[(2)]);
var state_16465__$1 = state_16465;
var statearr_16472_16491 = state_16465__$1;
(statearr_16472_16491[(2)] = inst_16461);

(statearr_16472_16491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16466 === (3))){
var inst_16463 = (state_16465[(2)]);
var state_16465__$1 = state_16465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16465__$1,inst_16463);
} else {
if((state_val_16466 === (2))){
var inst_16435 = (state_16465[(10)]);
var inst_16437 = cljs.core.count.call(null,inst_16435);
var inst_16438 = (inst_16437 > (0));
var state_16465__$1 = state_16465;
if(cljs.core.truth_(inst_16438)){
var statearr_16474_16492 = state_16465__$1;
(statearr_16474_16492[(1)] = (4));

} else {
var statearr_16475_16493 = state_16465__$1;
(statearr_16475_16493[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16466 === (11))){
var inst_16435 = (state_16465[(10)]);
var inst_16454 = (state_16465[(2)]);
var tmp16473 = inst_16435;
var inst_16435__$1 = tmp16473;
var state_16465__$1 = (function (){var statearr_16476 = state_16465;
(statearr_16476[(10)] = inst_16435__$1);

(statearr_16476[(11)] = inst_16454);

return statearr_16476;
})();
var statearr_16477_16494 = state_16465__$1;
(statearr_16477_16494[(2)] = null);

(statearr_16477_16494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16466 === (9))){
var inst_16445 = (state_16465[(7)]);
var state_16465__$1 = state_16465;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16465__$1,(11),out,inst_16445);
} else {
if((state_val_16466 === (5))){
var inst_16459 = cljs.core.async.close_BANG_.call(null,out);
var state_16465__$1 = state_16465;
var statearr_16478_16495 = state_16465__$1;
(statearr_16478_16495[(2)] = inst_16459);

(statearr_16478_16495[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16466 === (10))){
var inst_16457 = (state_16465[(2)]);
var state_16465__$1 = state_16465;
var statearr_16479_16496 = state_16465__$1;
(statearr_16479_16496[(2)] = inst_16457);

(statearr_16479_16496[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16466 === (8))){
var inst_16435 = (state_16465[(10)]);
var inst_16446 = (state_16465[(9)]);
var inst_16445 = (state_16465[(7)]);
var inst_16444 = (state_16465[(8)]);
var inst_16449 = (function (){var cs = inst_16435;
var vec__16440 = inst_16444;
var v = inst_16445;
var c = inst_16446;
return ((function (cs,vec__16440,v,c,inst_16435,inst_16446,inst_16445,inst_16444,state_val_16466,c__15074__auto___16487,out){
return (function (p1__16431_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__16431_SHARP_);
});
;})(cs,vec__16440,v,c,inst_16435,inst_16446,inst_16445,inst_16444,state_val_16466,c__15074__auto___16487,out))
})();
var inst_16450 = cljs.core.filterv.call(null,inst_16449,inst_16435);
var inst_16435__$1 = inst_16450;
var state_16465__$1 = (function (){var statearr_16480 = state_16465;
(statearr_16480[(10)] = inst_16435__$1);

return statearr_16480;
})();
var statearr_16481_16497 = state_16465__$1;
(statearr_16481_16497[(2)] = null);

(statearr_16481_16497[(1)] = (2));


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
});})(c__15074__auto___16487,out))
;
return ((function (switch__14984__auto__,c__15074__auto___16487,out){
return (function() {
var cljs$core$async$state_machine__14985__auto__ = null;
var cljs$core$async$state_machine__14985__auto____0 = (function (){
var statearr_16482 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16482[(0)] = cljs$core$async$state_machine__14985__auto__);

(statearr_16482[(1)] = (1));

return statearr_16482;
});
var cljs$core$async$state_machine__14985__auto____1 = (function (state_16465){
while(true){
var ret_value__14986__auto__ = (function (){try{while(true){
var result__14987__auto__ = switch__14984__auto__.call(null,state_16465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14987__auto__;
}
break;
}
}catch (e16483){if((e16483 instanceof Object)){
var ex__14988__auto__ = e16483;
var statearr_16484_16498 = state_16465;
(statearr_16484_16498[(5)] = ex__14988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16499 = state_16465;
state_16465 = G__16499;
continue;
} else {
return ret_value__14986__auto__;
}
break;
}
});
cljs$core$async$state_machine__14985__auto__ = function(state_16465){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14985__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14985__auto____1.call(this,state_16465);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14985__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14985__auto____0;
cljs$core$async$state_machine__14985__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14985__auto____1;
return cljs$core$async$state_machine__14985__auto__;
})()
;})(switch__14984__auto__,c__15074__auto___16487,out))
})();
var state__15076__auto__ = (function (){var statearr_16485 = f__15075__auto__.call(null);
(statearr_16485[(6)] = c__15074__auto___16487);

return statearr_16485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15076__auto__);
});})(c__15074__auto___16487,out))
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
var G__16501 = arguments.length;
switch (G__16501) {
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
var c__15074__auto___16546 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15074__auto___16546,out){
return (function (){
var f__15075__auto__ = (function (){var switch__14984__auto__ = ((function (c__15074__auto___16546,out){
return (function (state_16525){
var state_val_16526 = (state_16525[(1)]);
if((state_val_16526 === (7))){
var inst_16507 = (state_16525[(7)]);
var inst_16507__$1 = (state_16525[(2)]);
var inst_16508 = (inst_16507__$1 == null);
var inst_16509 = cljs.core.not.call(null,inst_16508);
var state_16525__$1 = (function (){var statearr_16527 = state_16525;
(statearr_16527[(7)] = inst_16507__$1);

return statearr_16527;
})();
if(inst_16509){
var statearr_16528_16547 = state_16525__$1;
(statearr_16528_16547[(1)] = (8));

} else {
var statearr_16529_16548 = state_16525__$1;
(statearr_16529_16548[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16526 === (1))){
var inst_16502 = (0);
var state_16525__$1 = (function (){var statearr_16530 = state_16525;
(statearr_16530[(8)] = inst_16502);

return statearr_16530;
})();
var statearr_16531_16549 = state_16525__$1;
(statearr_16531_16549[(2)] = null);

(statearr_16531_16549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16526 === (4))){
var state_16525__$1 = state_16525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16525__$1,(7),ch);
} else {
if((state_val_16526 === (6))){
var inst_16520 = (state_16525[(2)]);
var state_16525__$1 = state_16525;
var statearr_16532_16550 = state_16525__$1;
(statearr_16532_16550[(2)] = inst_16520);

(statearr_16532_16550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16526 === (3))){
var inst_16522 = (state_16525[(2)]);
var inst_16523 = cljs.core.async.close_BANG_.call(null,out);
var state_16525__$1 = (function (){var statearr_16533 = state_16525;
(statearr_16533[(9)] = inst_16522);

return statearr_16533;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16525__$1,inst_16523);
} else {
if((state_val_16526 === (2))){
var inst_16502 = (state_16525[(8)]);
var inst_16504 = (inst_16502 < n);
var state_16525__$1 = state_16525;
if(cljs.core.truth_(inst_16504)){
var statearr_16534_16551 = state_16525__$1;
(statearr_16534_16551[(1)] = (4));

} else {
var statearr_16535_16552 = state_16525__$1;
(statearr_16535_16552[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16526 === (11))){
var inst_16502 = (state_16525[(8)]);
var inst_16512 = (state_16525[(2)]);
var inst_16513 = (inst_16502 + (1));
var inst_16502__$1 = inst_16513;
var state_16525__$1 = (function (){var statearr_16536 = state_16525;
(statearr_16536[(10)] = inst_16512);

(statearr_16536[(8)] = inst_16502__$1);

return statearr_16536;
})();
var statearr_16537_16553 = state_16525__$1;
(statearr_16537_16553[(2)] = null);

(statearr_16537_16553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16526 === (9))){
var state_16525__$1 = state_16525;
var statearr_16538_16554 = state_16525__$1;
(statearr_16538_16554[(2)] = null);

(statearr_16538_16554[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16526 === (5))){
var state_16525__$1 = state_16525;
var statearr_16539_16555 = state_16525__$1;
(statearr_16539_16555[(2)] = null);

(statearr_16539_16555[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16526 === (10))){
var inst_16517 = (state_16525[(2)]);
var state_16525__$1 = state_16525;
var statearr_16540_16556 = state_16525__$1;
(statearr_16540_16556[(2)] = inst_16517);

(statearr_16540_16556[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16526 === (8))){
var inst_16507 = (state_16525[(7)]);
var state_16525__$1 = state_16525;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16525__$1,(11),out,inst_16507);
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
});})(c__15074__auto___16546,out))
;
return ((function (switch__14984__auto__,c__15074__auto___16546,out){
return (function() {
var cljs$core$async$state_machine__14985__auto__ = null;
var cljs$core$async$state_machine__14985__auto____0 = (function (){
var statearr_16541 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16541[(0)] = cljs$core$async$state_machine__14985__auto__);

(statearr_16541[(1)] = (1));

return statearr_16541;
});
var cljs$core$async$state_machine__14985__auto____1 = (function (state_16525){
while(true){
var ret_value__14986__auto__ = (function (){try{while(true){
var result__14987__auto__ = switch__14984__auto__.call(null,state_16525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14987__auto__;
}
break;
}
}catch (e16542){if((e16542 instanceof Object)){
var ex__14988__auto__ = e16542;
var statearr_16543_16557 = state_16525;
(statearr_16543_16557[(5)] = ex__14988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16558 = state_16525;
state_16525 = G__16558;
continue;
} else {
return ret_value__14986__auto__;
}
break;
}
});
cljs$core$async$state_machine__14985__auto__ = function(state_16525){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14985__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14985__auto____1.call(this,state_16525);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14985__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14985__auto____0;
cljs$core$async$state_machine__14985__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14985__auto____1;
return cljs$core$async$state_machine__14985__auto__;
})()
;})(switch__14984__auto__,c__15074__auto___16546,out))
})();
var state__15076__auto__ = (function (){var statearr_16544 = f__15075__auto__.call(null);
(statearr_16544[(6)] = c__15074__auto___16546);

return statearr_16544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15076__auto__);
});})(c__15074__auto___16546,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async16560 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16560 = (function (f,ch,meta16561){
this.f = f;
this.ch = ch;
this.meta16561 = meta16561;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16560.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16562,meta16561__$1){
var self__ = this;
var _16562__$1 = this;
return (new cljs.core.async.t_cljs$core$async16560(self__.f,self__.ch,meta16561__$1));
});

cljs.core.async.t_cljs$core$async16560.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16562){
var self__ = this;
var _16562__$1 = this;
return self__.meta16561;
});

cljs.core.async.t_cljs$core$async16560.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16560.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16560.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16560.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16560.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async16563 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16563 = (function (f,ch,meta16561,_,fn1,meta16564){
this.f = f;
this.ch = ch;
this.meta16561 = meta16561;
this._ = _;
this.fn1 = fn1;
this.meta16564 = meta16564;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_16565,meta16564__$1){
var self__ = this;
var _16565__$1 = this;
return (new cljs.core.async.t_cljs$core$async16563(self__.f,self__.ch,self__.meta16561,self__._,self__.fn1,meta16564__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async16563.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_16565){
var self__ = this;
var _16565__$1 = this;
return self__.meta16564;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16563.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16563.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16563.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16563.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__16559_SHARP_){
return f1.call(null,(((p1__16559_SHARP_ == null))?null:self__.f.call(null,p1__16559_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async16563.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16561","meta16561",-1933075423,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16560","cljs.core.async/t_cljs$core$async16560",1859644725,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16564","meta16564",-933527749,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16563.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16563.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16563";

cljs.core.async.t_cljs$core$async16563.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__10333__auto__,writer__10334__auto__,opt__10335__auto__){
return cljs.core._write.call(null,writer__10334__auto__,"cljs.core.async/t_cljs$core$async16563");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async16563 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16563(f__$1,ch__$1,meta16561__$1,___$2,fn1__$1,meta16564){
return (new cljs.core.async.t_cljs$core$async16563(f__$1,ch__$1,meta16561__$1,___$2,fn1__$1,meta16564));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async16563(self__.f,self__.ch,self__.meta16561,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__9650__auto__ = ret;
if(cljs.core.truth_(and__9650__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__9650__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async16560.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16560.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async16560.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16561","meta16561",-1933075423,null)], null);
});

cljs.core.async.t_cljs$core$async16560.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16560.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16560";

cljs.core.async.t_cljs$core$async16560.cljs$lang$ctorPrWriter = (function (this__10333__auto__,writer__10334__auto__,opt__10335__auto__){
return cljs.core._write.call(null,writer__10334__auto__,"cljs.core.async/t_cljs$core$async16560");
});

cljs.core.async.__GT_t_cljs$core$async16560 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16560(f__$1,ch__$1,meta16561){
return (new cljs.core.async.t_cljs$core$async16560(f__$1,ch__$1,meta16561));
});

}

return (new cljs.core.async.t_cljs$core$async16560(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async16566 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16566 = (function (f,ch,meta16567){
this.f = f;
this.ch = ch;
this.meta16567 = meta16567;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16568,meta16567__$1){
var self__ = this;
var _16568__$1 = this;
return (new cljs.core.async.t_cljs$core$async16566(self__.f,self__.ch,meta16567__$1));
});

cljs.core.async.t_cljs$core$async16566.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16568){
var self__ = this;
var _16568__$1 = this;
return self__.meta16567;
});

cljs.core.async.t_cljs$core$async16566.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16566.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16566.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16566.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16566.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16566.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async16566.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16567","meta16567",-273721580,null)], null);
});

cljs.core.async.t_cljs$core$async16566.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16566.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16566";

cljs.core.async.t_cljs$core$async16566.cljs$lang$ctorPrWriter = (function (this__10333__auto__,writer__10334__auto__,opt__10335__auto__){
return cljs.core._write.call(null,writer__10334__auto__,"cljs.core.async/t_cljs$core$async16566");
});

cljs.core.async.__GT_t_cljs$core$async16566 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async16566(f__$1,ch__$1,meta16567){
return (new cljs.core.async.t_cljs$core$async16566(f__$1,ch__$1,meta16567));
});

}

return (new cljs.core.async.t_cljs$core$async16566(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async16569 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16569 = (function (p,ch,meta16570){
this.p = p;
this.ch = ch;
this.meta16570 = meta16570;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16571,meta16570__$1){
var self__ = this;
var _16571__$1 = this;
return (new cljs.core.async.t_cljs$core$async16569(self__.p,self__.ch,meta16570__$1));
});

cljs.core.async.t_cljs$core$async16569.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16571){
var self__ = this;
var _16571__$1 = this;
return self__.meta16570;
});

cljs.core.async.t_cljs$core$async16569.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16569.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16569.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16569.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16569.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16569.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16569.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async16569.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16570","meta16570",-609722772,null)], null);
});

cljs.core.async.t_cljs$core$async16569.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16569.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16569";

cljs.core.async.t_cljs$core$async16569.cljs$lang$ctorPrWriter = (function (this__10333__auto__,writer__10334__auto__,opt__10335__auto__){
return cljs.core._write.call(null,writer__10334__auto__,"cljs.core.async/t_cljs$core$async16569");
});

cljs.core.async.__GT_t_cljs$core$async16569 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async16569(p__$1,ch__$1,meta16570){
return (new cljs.core.async.t_cljs$core$async16569(p__$1,ch__$1,meta16570));
});

}

return (new cljs.core.async.t_cljs$core$async16569(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__16573 = arguments.length;
switch (G__16573) {
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
var c__15074__auto___16613 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15074__auto___16613,out){
return (function (){
var f__15075__auto__ = (function (){var switch__14984__auto__ = ((function (c__15074__auto___16613,out){
return (function (state_16594){
var state_val_16595 = (state_16594[(1)]);
if((state_val_16595 === (7))){
var inst_16590 = (state_16594[(2)]);
var state_16594__$1 = state_16594;
var statearr_16596_16614 = state_16594__$1;
(statearr_16596_16614[(2)] = inst_16590);

(statearr_16596_16614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16595 === (1))){
var state_16594__$1 = state_16594;
var statearr_16597_16615 = state_16594__$1;
(statearr_16597_16615[(2)] = null);

(statearr_16597_16615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16595 === (4))){
var inst_16576 = (state_16594[(7)]);
var inst_16576__$1 = (state_16594[(2)]);
var inst_16577 = (inst_16576__$1 == null);
var state_16594__$1 = (function (){var statearr_16598 = state_16594;
(statearr_16598[(7)] = inst_16576__$1);

return statearr_16598;
})();
if(cljs.core.truth_(inst_16577)){
var statearr_16599_16616 = state_16594__$1;
(statearr_16599_16616[(1)] = (5));

} else {
var statearr_16600_16617 = state_16594__$1;
(statearr_16600_16617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16595 === (6))){
var inst_16576 = (state_16594[(7)]);
var inst_16581 = p.call(null,inst_16576);
var state_16594__$1 = state_16594;
if(cljs.core.truth_(inst_16581)){
var statearr_16601_16618 = state_16594__$1;
(statearr_16601_16618[(1)] = (8));

} else {
var statearr_16602_16619 = state_16594__$1;
(statearr_16602_16619[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16595 === (3))){
var inst_16592 = (state_16594[(2)]);
var state_16594__$1 = state_16594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16594__$1,inst_16592);
} else {
if((state_val_16595 === (2))){
var state_16594__$1 = state_16594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16594__$1,(4),ch);
} else {
if((state_val_16595 === (11))){
var inst_16584 = (state_16594[(2)]);
var state_16594__$1 = state_16594;
var statearr_16603_16620 = state_16594__$1;
(statearr_16603_16620[(2)] = inst_16584);

(statearr_16603_16620[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16595 === (9))){
var state_16594__$1 = state_16594;
var statearr_16604_16621 = state_16594__$1;
(statearr_16604_16621[(2)] = null);

(statearr_16604_16621[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16595 === (5))){
var inst_16579 = cljs.core.async.close_BANG_.call(null,out);
var state_16594__$1 = state_16594;
var statearr_16605_16622 = state_16594__$1;
(statearr_16605_16622[(2)] = inst_16579);

(statearr_16605_16622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16595 === (10))){
var inst_16587 = (state_16594[(2)]);
var state_16594__$1 = (function (){var statearr_16606 = state_16594;
(statearr_16606[(8)] = inst_16587);

return statearr_16606;
})();
var statearr_16607_16623 = state_16594__$1;
(statearr_16607_16623[(2)] = null);

(statearr_16607_16623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16595 === (8))){
var inst_16576 = (state_16594[(7)]);
var state_16594__$1 = state_16594;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16594__$1,(11),out,inst_16576);
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
});})(c__15074__auto___16613,out))
;
return ((function (switch__14984__auto__,c__15074__auto___16613,out){
return (function() {
var cljs$core$async$state_machine__14985__auto__ = null;
var cljs$core$async$state_machine__14985__auto____0 = (function (){
var statearr_16608 = [null,null,null,null,null,null,null,null,null];
(statearr_16608[(0)] = cljs$core$async$state_machine__14985__auto__);

(statearr_16608[(1)] = (1));

return statearr_16608;
});
var cljs$core$async$state_machine__14985__auto____1 = (function (state_16594){
while(true){
var ret_value__14986__auto__ = (function (){try{while(true){
var result__14987__auto__ = switch__14984__auto__.call(null,state_16594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14987__auto__;
}
break;
}
}catch (e16609){if((e16609 instanceof Object)){
var ex__14988__auto__ = e16609;
var statearr_16610_16624 = state_16594;
(statearr_16610_16624[(5)] = ex__14988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16609;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16625 = state_16594;
state_16594 = G__16625;
continue;
} else {
return ret_value__14986__auto__;
}
break;
}
});
cljs$core$async$state_machine__14985__auto__ = function(state_16594){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14985__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14985__auto____1.call(this,state_16594);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14985__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14985__auto____0;
cljs$core$async$state_machine__14985__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14985__auto____1;
return cljs$core$async$state_machine__14985__auto__;
})()
;})(switch__14984__auto__,c__15074__auto___16613,out))
})();
var state__15076__auto__ = (function (){var statearr_16611 = f__15075__auto__.call(null);
(statearr_16611[(6)] = c__15074__auto___16613);

return statearr_16611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15076__auto__);
});})(c__15074__auto___16613,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16627 = arguments.length;
switch (G__16627) {
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
var c__15074__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15074__auto__){
return (function (){
var f__15075__auto__ = (function (){var switch__14984__auto__ = ((function (c__15074__auto__){
return (function (state_16690){
var state_val_16691 = (state_16690[(1)]);
if((state_val_16691 === (7))){
var inst_16686 = (state_16690[(2)]);
var state_16690__$1 = state_16690;
var statearr_16692_16730 = state_16690__$1;
(statearr_16692_16730[(2)] = inst_16686);

(statearr_16692_16730[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16691 === (20))){
var inst_16656 = (state_16690[(7)]);
var inst_16667 = (state_16690[(2)]);
var inst_16668 = cljs.core.next.call(null,inst_16656);
var inst_16642 = inst_16668;
var inst_16643 = null;
var inst_16644 = (0);
var inst_16645 = (0);
var state_16690__$1 = (function (){var statearr_16693 = state_16690;
(statearr_16693[(8)] = inst_16643);

(statearr_16693[(9)] = inst_16642);

(statearr_16693[(10)] = inst_16667);

(statearr_16693[(11)] = inst_16644);

(statearr_16693[(12)] = inst_16645);

return statearr_16693;
})();
var statearr_16694_16731 = state_16690__$1;
(statearr_16694_16731[(2)] = null);

(statearr_16694_16731[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16691 === (1))){
var state_16690__$1 = state_16690;
var statearr_16695_16732 = state_16690__$1;
(statearr_16695_16732[(2)] = null);

(statearr_16695_16732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16691 === (4))){
var inst_16631 = (state_16690[(13)]);
var inst_16631__$1 = (state_16690[(2)]);
var inst_16632 = (inst_16631__$1 == null);
var state_16690__$1 = (function (){var statearr_16696 = state_16690;
(statearr_16696[(13)] = inst_16631__$1);

return statearr_16696;
})();
if(cljs.core.truth_(inst_16632)){
var statearr_16697_16733 = state_16690__$1;
(statearr_16697_16733[(1)] = (5));

} else {
var statearr_16698_16734 = state_16690__$1;
(statearr_16698_16734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16691 === (15))){
var state_16690__$1 = state_16690;
var statearr_16702_16735 = state_16690__$1;
(statearr_16702_16735[(2)] = null);

(statearr_16702_16735[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16691 === (21))){
var state_16690__$1 = state_16690;
var statearr_16703_16736 = state_16690__$1;
(statearr_16703_16736[(2)] = null);

(statearr_16703_16736[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16691 === (13))){
var inst_16643 = (state_16690[(8)]);
var inst_16642 = (state_16690[(9)]);
var inst_16644 = (state_16690[(11)]);
var inst_16645 = (state_16690[(12)]);
var inst_16652 = (state_16690[(2)]);
var inst_16653 = (inst_16645 + (1));
var tmp16699 = inst_16643;
var tmp16700 = inst_16642;
var tmp16701 = inst_16644;
var inst_16642__$1 = tmp16700;
var inst_16643__$1 = tmp16699;
var inst_16644__$1 = tmp16701;
var inst_16645__$1 = inst_16653;
var state_16690__$1 = (function (){var statearr_16704 = state_16690;
(statearr_16704[(8)] = inst_16643__$1);

(statearr_16704[(9)] = inst_16642__$1);

(statearr_16704[(14)] = inst_16652);

(statearr_16704[(11)] = inst_16644__$1);

(statearr_16704[(12)] = inst_16645__$1);

return statearr_16704;
})();
var statearr_16705_16737 = state_16690__$1;
(statearr_16705_16737[(2)] = null);

(statearr_16705_16737[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16691 === (22))){
var state_16690__$1 = state_16690;
var statearr_16706_16738 = state_16690__$1;
(statearr_16706_16738[(2)] = null);

(statearr_16706_16738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16691 === (6))){
var inst_16631 = (state_16690[(13)]);
var inst_16640 = f.call(null,inst_16631);
var inst_16641 = cljs.core.seq.call(null,inst_16640);
var inst_16642 = inst_16641;
var inst_16643 = null;
var inst_16644 = (0);
var inst_16645 = (0);
var state_16690__$1 = (function (){var statearr_16707 = state_16690;
(statearr_16707[(8)] = inst_16643);

(statearr_16707[(9)] = inst_16642);

(statearr_16707[(11)] = inst_16644);

(statearr_16707[(12)] = inst_16645);

return statearr_16707;
})();
var statearr_16708_16739 = state_16690__$1;
(statearr_16708_16739[(2)] = null);

(statearr_16708_16739[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16691 === (17))){
var inst_16656 = (state_16690[(7)]);
var inst_16660 = cljs.core.chunk_first.call(null,inst_16656);
var inst_16661 = cljs.core.chunk_rest.call(null,inst_16656);
var inst_16662 = cljs.core.count.call(null,inst_16660);
var inst_16642 = inst_16661;
var inst_16643 = inst_16660;
var inst_16644 = inst_16662;
var inst_16645 = (0);
var state_16690__$1 = (function (){var statearr_16709 = state_16690;
(statearr_16709[(8)] = inst_16643);

(statearr_16709[(9)] = inst_16642);

(statearr_16709[(11)] = inst_16644);

(statearr_16709[(12)] = inst_16645);

return statearr_16709;
})();
var statearr_16710_16740 = state_16690__$1;
(statearr_16710_16740[(2)] = null);

(statearr_16710_16740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16691 === (3))){
var inst_16688 = (state_16690[(2)]);
var state_16690__$1 = state_16690;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16690__$1,inst_16688);
} else {
if((state_val_16691 === (12))){
var inst_16676 = (state_16690[(2)]);
var state_16690__$1 = state_16690;
var statearr_16711_16741 = state_16690__$1;
(statearr_16711_16741[(2)] = inst_16676);

(statearr_16711_16741[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16691 === (2))){
var state_16690__$1 = state_16690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16690__$1,(4),in$);
} else {
if((state_val_16691 === (23))){
var inst_16684 = (state_16690[(2)]);
var state_16690__$1 = state_16690;
var statearr_16712_16742 = state_16690__$1;
(statearr_16712_16742[(2)] = inst_16684);

(statearr_16712_16742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16691 === (19))){
var inst_16671 = (state_16690[(2)]);
var state_16690__$1 = state_16690;
var statearr_16713_16743 = state_16690__$1;
(statearr_16713_16743[(2)] = inst_16671);

(statearr_16713_16743[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16691 === (11))){
var inst_16642 = (state_16690[(9)]);
var inst_16656 = (state_16690[(7)]);
var inst_16656__$1 = cljs.core.seq.call(null,inst_16642);
var state_16690__$1 = (function (){var statearr_16714 = state_16690;
(statearr_16714[(7)] = inst_16656__$1);

return statearr_16714;
})();
if(inst_16656__$1){
var statearr_16715_16744 = state_16690__$1;
(statearr_16715_16744[(1)] = (14));

} else {
var statearr_16716_16745 = state_16690__$1;
(statearr_16716_16745[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16691 === (9))){
var inst_16678 = (state_16690[(2)]);
var inst_16679 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_16690__$1 = (function (){var statearr_16717 = state_16690;
(statearr_16717[(15)] = inst_16678);

return statearr_16717;
})();
if(cljs.core.truth_(inst_16679)){
var statearr_16718_16746 = state_16690__$1;
(statearr_16718_16746[(1)] = (21));

} else {
var statearr_16719_16747 = state_16690__$1;
(statearr_16719_16747[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16691 === (5))){
var inst_16634 = cljs.core.async.close_BANG_.call(null,out);
var state_16690__$1 = state_16690;
var statearr_16720_16748 = state_16690__$1;
(statearr_16720_16748[(2)] = inst_16634);

(statearr_16720_16748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16691 === (14))){
var inst_16656 = (state_16690[(7)]);
var inst_16658 = cljs.core.chunked_seq_QMARK_.call(null,inst_16656);
var state_16690__$1 = state_16690;
if(inst_16658){
var statearr_16721_16749 = state_16690__$1;
(statearr_16721_16749[(1)] = (17));

} else {
var statearr_16722_16750 = state_16690__$1;
(statearr_16722_16750[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16691 === (16))){
var inst_16674 = (state_16690[(2)]);
var state_16690__$1 = state_16690;
var statearr_16723_16751 = state_16690__$1;
(statearr_16723_16751[(2)] = inst_16674);

(statearr_16723_16751[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16691 === (10))){
var inst_16643 = (state_16690[(8)]);
var inst_16645 = (state_16690[(12)]);
var inst_16650 = cljs.core._nth.call(null,inst_16643,inst_16645);
var state_16690__$1 = state_16690;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16690__$1,(13),out,inst_16650);
} else {
if((state_val_16691 === (18))){
var inst_16656 = (state_16690[(7)]);
var inst_16665 = cljs.core.first.call(null,inst_16656);
var state_16690__$1 = state_16690;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16690__$1,(20),out,inst_16665);
} else {
if((state_val_16691 === (8))){
var inst_16644 = (state_16690[(11)]);
var inst_16645 = (state_16690[(12)]);
var inst_16647 = (inst_16645 < inst_16644);
var inst_16648 = inst_16647;
var state_16690__$1 = state_16690;
if(cljs.core.truth_(inst_16648)){
var statearr_16724_16752 = state_16690__$1;
(statearr_16724_16752[(1)] = (10));

} else {
var statearr_16725_16753 = state_16690__$1;
(statearr_16725_16753[(1)] = (11));

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
});})(c__15074__auto__))
;
return ((function (switch__14984__auto__,c__15074__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14985__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14985__auto____0 = (function (){
var statearr_16726 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16726[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14985__auto__);

(statearr_16726[(1)] = (1));

return statearr_16726;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14985__auto____1 = (function (state_16690){
while(true){
var ret_value__14986__auto__ = (function (){try{while(true){
var result__14987__auto__ = switch__14984__auto__.call(null,state_16690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14987__auto__;
}
break;
}
}catch (e16727){if((e16727 instanceof Object)){
var ex__14988__auto__ = e16727;
var statearr_16728_16754 = state_16690;
(statearr_16728_16754[(5)] = ex__14988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16755 = state_16690;
state_16690 = G__16755;
continue;
} else {
return ret_value__14986__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14985__auto__ = function(state_16690){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14985__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14985__auto____1.call(this,state_16690);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__14985__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14985__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14985__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14985__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14985__auto__;
})()
;})(switch__14984__auto__,c__15074__auto__))
})();
var state__15076__auto__ = (function (){var statearr_16729 = f__15075__auto__.call(null);
(statearr_16729[(6)] = c__15074__auto__);

return statearr_16729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15076__auto__);
});})(c__15074__auto__))
);

return c__15074__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__16757 = arguments.length;
switch (G__16757) {
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
var G__16760 = arguments.length;
switch (G__16760) {
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
var G__16763 = arguments.length;
switch (G__16763) {
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
var c__15074__auto___16810 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15074__auto___16810,out){
return (function (){
var f__15075__auto__ = (function (){var switch__14984__auto__ = ((function (c__15074__auto___16810,out){
return (function (state_16787){
var state_val_16788 = (state_16787[(1)]);
if((state_val_16788 === (7))){
var inst_16782 = (state_16787[(2)]);
var state_16787__$1 = state_16787;
var statearr_16789_16811 = state_16787__$1;
(statearr_16789_16811[(2)] = inst_16782);

(statearr_16789_16811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16788 === (1))){
var inst_16764 = null;
var state_16787__$1 = (function (){var statearr_16790 = state_16787;
(statearr_16790[(7)] = inst_16764);

return statearr_16790;
})();
var statearr_16791_16812 = state_16787__$1;
(statearr_16791_16812[(2)] = null);

(statearr_16791_16812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16788 === (4))){
var inst_16767 = (state_16787[(8)]);
var inst_16767__$1 = (state_16787[(2)]);
var inst_16768 = (inst_16767__$1 == null);
var inst_16769 = cljs.core.not.call(null,inst_16768);
var state_16787__$1 = (function (){var statearr_16792 = state_16787;
(statearr_16792[(8)] = inst_16767__$1);

return statearr_16792;
})();
if(inst_16769){
var statearr_16793_16813 = state_16787__$1;
(statearr_16793_16813[(1)] = (5));

} else {
var statearr_16794_16814 = state_16787__$1;
(statearr_16794_16814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16788 === (6))){
var state_16787__$1 = state_16787;
var statearr_16795_16815 = state_16787__$1;
(statearr_16795_16815[(2)] = null);

(statearr_16795_16815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16788 === (3))){
var inst_16784 = (state_16787[(2)]);
var inst_16785 = cljs.core.async.close_BANG_.call(null,out);
var state_16787__$1 = (function (){var statearr_16796 = state_16787;
(statearr_16796[(9)] = inst_16784);

return statearr_16796;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16787__$1,inst_16785);
} else {
if((state_val_16788 === (2))){
var state_16787__$1 = state_16787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16787__$1,(4),ch);
} else {
if((state_val_16788 === (11))){
var inst_16767 = (state_16787[(8)]);
var inst_16776 = (state_16787[(2)]);
var inst_16764 = inst_16767;
var state_16787__$1 = (function (){var statearr_16797 = state_16787;
(statearr_16797[(7)] = inst_16764);

(statearr_16797[(10)] = inst_16776);

return statearr_16797;
})();
var statearr_16798_16816 = state_16787__$1;
(statearr_16798_16816[(2)] = null);

(statearr_16798_16816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16788 === (9))){
var inst_16767 = (state_16787[(8)]);
var state_16787__$1 = state_16787;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16787__$1,(11),out,inst_16767);
} else {
if((state_val_16788 === (5))){
var inst_16767 = (state_16787[(8)]);
var inst_16764 = (state_16787[(7)]);
var inst_16771 = cljs.core._EQ_.call(null,inst_16767,inst_16764);
var state_16787__$1 = state_16787;
if(inst_16771){
var statearr_16800_16817 = state_16787__$1;
(statearr_16800_16817[(1)] = (8));

} else {
var statearr_16801_16818 = state_16787__$1;
(statearr_16801_16818[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16788 === (10))){
var inst_16779 = (state_16787[(2)]);
var state_16787__$1 = state_16787;
var statearr_16802_16819 = state_16787__$1;
(statearr_16802_16819[(2)] = inst_16779);

(statearr_16802_16819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16788 === (8))){
var inst_16764 = (state_16787[(7)]);
var tmp16799 = inst_16764;
var inst_16764__$1 = tmp16799;
var state_16787__$1 = (function (){var statearr_16803 = state_16787;
(statearr_16803[(7)] = inst_16764__$1);

return statearr_16803;
})();
var statearr_16804_16820 = state_16787__$1;
(statearr_16804_16820[(2)] = null);

(statearr_16804_16820[(1)] = (2));


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
});})(c__15074__auto___16810,out))
;
return ((function (switch__14984__auto__,c__15074__auto___16810,out){
return (function() {
var cljs$core$async$state_machine__14985__auto__ = null;
var cljs$core$async$state_machine__14985__auto____0 = (function (){
var statearr_16805 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16805[(0)] = cljs$core$async$state_machine__14985__auto__);

(statearr_16805[(1)] = (1));

return statearr_16805;
});
var cljs$core$async$state_machine__14985__auto____1 = (function (state_16787){
while(true){
var ret_value__14986__auto__ = (function (){try{while(true){
var result__14987__auto__ = switch__14984__auto__.call(null,state_16787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14987__auto__;
}
break;
}
}catch (e16806){if((e16806 instanceof Object)){
var ex__14988__auto__ = e16806;
var statearr_16807_16821 = state_16787;
(statearr_16807_16821[(5)] = ex__14988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16822 = state_16787;
state_16787 = G__16822;
continue;
} else {
return ret_value__14986__auto__;
}
break;
}
});
cljs$core$async$state_machine__14985__auto__ = function(state_16787){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14985__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14985__auto____1.call(this,state_16787);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14985__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14985__auto____0;
cljs$core$async$state_machine__14985__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14985__auto____1;
return cljs$core$async$state_machine__14985__auto__;
})()
;})(switch__14984__auto__,c__15074__auto___16810,out))
})();
var state__15076__auto__ = (function (){var statearr_16808 = f__15075__auto__.call(null);
(statearr_16808[(6)] = c__15074__auto___16810);

return statearr_16808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15076__auto__);
});})(c__15074__auto___16810,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__16824 = arguments.length;
switch (G__16824) {
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
var c__15074__auto___16890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15074__auto___16890,out){
return (function (){
var f__15075__auto__ = (function (){var switch__14984__auto__ = ((function (c__15074__auto___16890,out){
return (function (state_16862){
var state_val_16863 = (state_16862[(1)]);
if((state_val_16863 === (7))){
var inst_16858 = (state_16862[(2)]);
var state_16862__$1 = state_16862;
var statearr_16864_16891 = state_16862__$1;
(statearr_16864_16891[(2)] = inst_16858);

(statearr_16864_16891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16863 === (1))){
var inst_16825 = (new Array(n));
var inst_16826 = inst_16825;
var inst_16827 = (0);
var state_16862__$1 = (function (){var statearr_16865 = state_16862;
(statearr_16865[(7)] = inst_16826);

(statearr_16865[(8)] = inst_16827);

return statearr_16865;
})();
var statearr_16866_16892 = state_16862__$1;
(statearr_16866_16892[(2)] = null);

(statearr_16866_16892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16863 === (4))){
var inst_16830 = (state_16862[(9)]);
var inst_16830__$1 = (state_16862[(2)]);
var inst_16831 = (inst_16830__$1 == null);
var inst_16832 = cljs.core.not.call(null,inst_16831);
var state_16862__$1 = (function (){var statearr_16867 = state_16862;
(statearr_16867[(9)] = inst_16830__$1);

return statearr_16867;
})();
if(inst_16832){
var statearr_16868_16893 = state_16862__$1;
(statearr_16868_16893[(1)] = (5));

} else {
var statearr_16869_16894 = state_16862__$1;
(statearr_16869_16894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16863 === (15))){
var inst_16852 = (state_16862[(2)]);
var state_16862__$1 = state_16862;
var statearr_16870_16895 = state_16862__$1;
(statearr_16870_16895[(2)] = inst_16852);

(statearr_16870_16895[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16863 === (13))){
var state_16862__$1 = state_16862;
var statearr_16871_16896 = state_16862__$1;
(statearr_16871_16896[(2)] = null);

(statearr_16871_16896[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16863 === (6))){
var inst_16827 = (state_16862[(8)]);
var inst_16848 = (inst_16827 > (0));
var state_16862__$1 = state_16862;
if(cljs.core.truth_(inst_16848)){
var statearr_16872_16897 = state_16862__$1;
(statearr_16872_16897[(1)] = (12));

} else {
var statearr_16873_16898 = state_16862__$1;
(statearr_16873_16898[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16863 === (3))){
var inst_16860 = (state_16862[(2)]);
var state_16862__$1 = state_16862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16862__$1,inst_16860);
} else {
if((state_val_16863 === (12))){
var inst_16826 = (state_16862[(7)]);
var inst_16850 = cljs.core.vec.call(null,inst_16826);
var state_16862__$1 = state_16862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16862__$1,(15),out,inst_16850);
} else {
if((state_val_16863 === (2))){
var state_16862__$1 = state_16862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16862__$1,(4),ch);
} else {
if((state_val_16863 === (11))){
var inst_16842 = (state_16862[(2)]);
var inst_16843 = (new Array(n));
var inst_16826 = inst_16843;
var inst_16827 = (0);
var state_16862__$1 = (function (){var statearr_16874 = state_16862;
(statearr_16874[(10)] = inst_16842);

(statearr_16874[(7)] = inst_16826);

(statearr_16874[(8)] = inst_16827);

return statearr_16874;
})();
var statearr_16875_16899 = state_16862__$1;
(statearr_16875_16899[(2)] = null);

(statearr_16875_16899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16863 === (9))){
var inst_16826 = (state_16862[(7)]);
var inst_16840 = cljs.core.vec.call(null,inst_16826);
var state_16862__$1 = state_16862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16862__$1,(11),out,inst_16840);
} else {
if((state_val_16863 === (5))){
var inst_16830 = (state_16862[(9)]);
var inst_16835 = (state_16862[(11)]);
var inst_16826 = (state_16862[(7)]);
var inst_16827 = (state_16862[(8)]);
var inst_16834 = (inst_16826[inst_16827] = inst_16830);
var inst_16835__$1 = (inst_16827 + (1));
var inst_16836 = (inst_16835__$1 < n);
var state_16862__$1 = (function (){var statearr_16876 = state_16862;
(statearr_16876[(11)] = inst_16835__$1);

(statearr_16876[(12)] = inst_16834);

return statearr_16876;
})();
if(cljs.core.truth_(inst_16836)){
var statearr_16877_16900 = state_16862__$1;
(statearr_16877_16900[(1)] = (8));

} else {
var statearr_16878_16901 = state_16862__$1;
(statearr_16878_16901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16863 === (14))){
var inst_16855 = (state_16862[(2)]);
var inst_16856 = cljs.core.async.close_BANG_.call(null,out);
var state_16862__$1 = (function (){var statearr_16880 = state_16862;
(statearr_16880[(13)] = inst_16855);

return statearr_16880;
})();
var statearr_16881_16902 = state_16862__$1;
(statearr_16881_16902[(2)] = inst_16856);

(statearr_16881_16902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16863 === (10))){
var inst_16846 = (state_16862[(2)]);
var state_16862__$1 = state_16862;
var statearr_16882_16903 = state_16862__$1;
(statearr_16882_16903[(2)] = inst_16846);

(statearr_16882_16903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16863 === (8))){
var inst_16835 = (state_16862[(11)]);
var inst_16826 = (state_16862[(7)]);
var tmp16879 = inst_16826;
var inst_16826__$1 = tmp16879;
var inst_16827 = inst_16835;
var state_16862__$1 = (function (){var statearr_16883 = state_16862;
(statearr_16883[(7)] = inst_16826__$1);

(statearr_16883[(8)] = inst_16827);

return statearr_16883;
})();
var statearr_16884_16904 = state_16862__$1;
(statearr_16884_16904[(2)] = null);

(statearr_16884_16904[(1)] = (2));


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
});})(c__15074__auto___16890,out))
;
return ((function (switch__14984__auto__,c__15074__auto___16890,out){
return (function() {
var cljs$core$async$state_machine__14985__auto__ = null;
var cljs$core$async$state_machine__14985__auto____0 = (function (){
var statearr_16885 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16885[(0)] = cljs$core$async$state_machine__14985__auto__);

(statearr_16885[(1)] = (1));

return statearr_16885;
});
var cljs$core$async$state_machine__14985__auto____1 = (function (state_16862){
while(true){
var ret_value__14986__auto__ = (function (){try{while(true){
var result__14987__auto__ = switch__14984__auto__.call(null,state_16862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14987__auto__;
}
break;
}
}catch (e16886){if((e16886 instanceof Object)){
var ex__14988__auto__ = e16886;
var statearr_16887_16905 = state_16862;
(statearr_16887_16905[(5)] = ex__14988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16906 = state_16862;
state_16862 = G__16906;
continue;
} else {
return ret_value__14986__auto__;
}
break;
}
});
cljs$core$async$state_machine__14985__auto__ = function(state_16862){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14985__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14985__auto____1.call(this,state_16862);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14985__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14985__auto____0;
cljs$core$async$state_machine__14985__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14985__auto____1;
return cljs$core$async$state_machine__14985__auto__;
})()
;})(switch__14984__auto__,c__15074__auto___16890,out))
})();
var state__15076__auto__ = (function (){var statearr_16888 = f__15075__auto__.call(null);
(statearr_16888[(6)] = c__15074__auto___16890);

return statearr_16888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15076__auto__);
});})(c__15074__auto___16890,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__16908 = arguments.length;
switch (G__16908) {
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
var c__15074__auto___16978 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15074__auto___16978,out){
return (function (){
var f__15075__auto__ = (function (){var switch__14984__auto__ = ((function (c__15074__auto___16978,out){
return (function (state_16950){
var state_val_16951 = (state_16950[(1)]);
if((state_val_16951 === (7))){
var inst_16946 = (state_16950[(2)]);
var state_16950__$1 = state_16950;
var statearr_16952_16979 = state_16950__$1;
(statearr_16952_16979[(2)] = inst_16946);

(statearr_16952_16979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16951 === (1))){
var inst_16909 = [];
var inst_16910 = inst_16909;
var inst_16911 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16950__$1 = (function (){var statearr_16953 = state_16950;
(statearr_16953[(7)] = inst_16911);

(statearr_16953[(8)] = inst_16910);

return statearr_16953;
})();
var statearr_16954_16980 = state_16950__$1;
(statearr_16954_16980[(2)] = null);

(statearr_16954_16980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16951 === (4))){
var inst_16914 = (state_16950[(9)]);
var inst_16914__$1 = (state_16950[(2)]);
var inst_16915 = (inst_16914__$1 == null);
var inst_16916 = cljs.core.not.call(null,inst_16915);
var state_16950__$1 = (function (){var statearr_16955 = state_16950;
(statearr_16955[(9)] = inst_16914__$1);

return statearr_16955;
})();
if(inst_16916){
var statearr_16956_16981 = state_16950__$1;
(statearr_16956_16981[(1)] = (5));

} else {
var statearr_16957_16982 = state_16950__$1;
(statearr_16957_16982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16951 === (15))){
var inst_16940 = (state_16950[(2)]);
var state_16950__$1 = state_16950;
var statearr_16958_16983 = state_16950__$1;
(statearr_16958_16983[(2)] = inst_16940);

(statearr_16958_16983[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16951 === (13))){
var state_16950__$1 = state_16950;
var statearr_16959_16984 = state_16950__$1;
(statearr_16959_16984[(2)] = null);

(statearr_16959_16984[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16951 === (6))){
var inst_16910 = (state_16950[(8)]);
var inst_16935 = inst_16910.length;
var inst_16936 = (inst_16935 > (0));
var state_16950__$1 = state_16950;
if(cljs.core.truth_(inst_16936)){
var statearr_16960_16985 = state_16950__$1;
(statearr_16960_16985[(1)] = (12));

} else {
var statearr_16961_16986 = state_16950__$1;
(statearr_16961_16986[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16951 === (3))){
var inst_16948 = (state_16950[(2)]);
var state_16950__$1 = state_16950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16950__$1,inst_16948);
} else {
if((state_val_16951 === (12))){
var inst_16910 = (state_16950[(8)]);
var inst_16938 = cljs.core.vec.call(null,inst_16910);
var state_16950__$1 = state_16950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16950__$1,(15),out,inst_16938);
} else {
if((state_val_16951 === (2))){
var state_16950__$1 = state_16950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16950__$1,(4),ch);
} else {
if((state_val_16951 === (11))){
var inst_16918 = (state_16950[(10)]);
var inst_16914 = (state_16950[(9)]);
var inst_16928 = (state_16950[(2)]);
var inst_16929 = [];
var inst_16930 = inst_16929.push(inst_16914);
var inst_16910 = inst_16929;
var inst_16911 = inst_16918;
var state_16950__$1 = (function (){var statearr_16962 = state_16950;
(statearr_16962[(11)] = inst_16928);

(statearr_16962[(12)] = inst_16930);

(statearr_16962[(7)] = inst_16911);

(statearr_16962[(8)] = inst_16910);

return statearr_16962;
})();
var statearr_16963_16987 = state_16950__$1;
(statearr_16963_16987[(2)] = null);

(statearr_16963_16987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16951 === (9))){
var inst_16910 = (state_16950[(8)]);
var inst_16926 = cljs.core.vec.call(null,inst_16910);
var state_16950__$1 = state_16950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16950__$1,(11),out,inst_16926);
} else {
if((state_val_16951 === (5))){
var inst_16911 = (state_16950[(7)]);
var inst_16918 = (state_16950[(10)]);
var inst_16914 = (state_16950[(9)]);
var inst_16918__$1 = f.call(null,inst_16914);
var inst_16919 = cljs.core._EQ_.call(null,inst_16918__$1,inst_16911);
var inst_16920 = cljs.core.keyword_identical_QMARK_.call(null,inst_16911,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_16921 = (inst_16919) || (inst_16920);
var state_16950__$1 = (function (){var statearr_16964 = state_16950;
(statearr_16964[(10)] = inst_16918__$1);

return statearr_16964;
})();
if(cljs.core.truth_(inst_16921)){
var statearr_16965_16988 = state_16950__$1;
(statearr_16965_16988[(1)] = (8));

} else {
var statearr_16966_16989 = state_16950__$1;
(statearr_16966_16989[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16951 === (14))){
var inst_16943 = (state_16950[(2)]);
var inst_16944 = cljs.core.async.close_BANG_.call(null,out);
var state_16950__$1 = (function (){var statearr_16968 = state_16950;
(statearr_16968[(13)] = inst_16943);

return statearr_16968;
})();
var statearr_16969_16990 = state_16950__$1;
(statearr_16969_16990[(2)] = inst_16944);

(statearr_16969_16990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16951 === (10))){
var inst_16933 = (state_16950[(2)]);
var state_16950__$1 = state_16950;
var statearr_16970_16991 = state_16950__$1;
(statearr_16970_16991[(2)] = inst_16933);

(statearr_16970_16991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16951 === (8))){
var inst_16910 = (state_16950[(8)]);
var inst_16918 = (state_16950[(10)]);
var inst_16914 = (state_16950[(9)]);
var inst_16923 = inst_16910.push(inst_16914);
var tmp16967 = inst_16910;
var inst_16910__$1 = tmp16967;
var inst_16911 = inst_16918;
var state_16950__$1 = (function (){var statearr_16971 = state_16950;
(statearr_16971[(14)] = inst_16923);

(statearr_16971[(7)] = inst_16911);

(statearr_16971[(8)] = inst_16910__$1);

return statearr_16971;
})();
var statearr_16972_16992 = state_16950__$1;
(statearr_16972_16992[(2)] = null);

(statearr_16972_16992[(1)] = (2));


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
});})(c__15074__auto___16978,out))
;
return ((function (switch__14984__auto__,c__15074__auto___16978,out){
return (function() {
var cljs$core$async$state_machine__14985__auto__ = null;
var cljs$core$async$state_machine__14985__auto____0 = (function (){
var statearr_16973 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16973[(0)] = cljs$core$async$state_machine__14985__auto__);

(statearr_16973[(1)] = (1));

return statearr_16973;
});
var cljs$core$async$state_machine__14985__auto____1 = (function (state_16950){
while(true){
var ret_value__14986__auto__ = (function (){try{while(true){
var result__14987__auto__ = switch__14984__auto__.call(null,state_16950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14987__auto__;
}
break;
}
}catch (e16974){if((e16974 instanceof Object)){
var ex__14988__auto__ = e16974;
var statearr_16975_16993 = state_16950;
(statearr_16975_16993[(5)] = ex__14988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16994 = state_16950;
state_16950 = G__16994;
continue;
} else {
return ret_value__14986__auto__;
}
break;
}
});
cljs$core$async$state_machine__14985__auto__ = function(state_16950){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14985__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14985__auto____1.call(this,state_16950);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14985__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14985__auto____0;
cljs$core$async$state_machine__14985__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14985__auto____1;
return cljs$core$async$state_machine__14985__auto__;
})()
;})(switch__14984__auto__,c__15074__auto___16978,out))
})();
var state__15076__auto__ = (function (){var statearr_16976 = f__15075__auto__.call(null);
(statearr_16976[(6)] = c__15074__auto___16978);

return statearr_16976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15076__auto__);
});})(c__15074__auto___16978,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
