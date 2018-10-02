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
var G__31752 = arguments.length;
switch (G__31752) {
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
if(typeof cljs.core.async.t_cljs$core$async31753 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31753 = (function (f,blockable,meta31754){
this.f = f;
this.blockable = blockable;
this.meta31754 = meta31754;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31755,meta31754__$1){
var self__ = this;
var _31755__$1 = this;
return (new cljs.core.async.t_cljs$core$async31753(self__.f,self__.blockable,meta31754__$1));
});

cljs.core.async.t_cljs$core$async31753.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31755){
var self__ = this;
var _31755__$1 = this;
return self__.meta31754;
});

cljs.core.async.t_cljs$core$async31753.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31753.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31753.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31753.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31753.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31754","meta31754",-1047010549,null)], null);
});

cljs.core.async.t_cljs$core$async31753.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31753.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31753";

cljs.core.async.t_cljs$core$async31753.cljs$lang$ctorPrWriter = (function (this__26903__auto__,writer__26904__auto__,opt__26905__auto__){
return cljs.core._write.call(null,writer__26904__auto__,"cljs.core.async/t_cljs$core$async31753");
});

cljs.core.async.__GT_t_cljs$core$async31753 = (function cljs$core$async$__GT_t_cljs$core$async31753(f__$1,blockable__$1,meta31754){
return (new cljs.core.async.t_cljs$core$async31753(f__$1,blockable__$1,meta31754));
});

}

return (new cljs.core.async.t_cljs$core$async31753(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31759 = arguments.length;
switch (G__31759) {
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
var G__31762 = arguments.length;
switch (G__31762) {
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
var G__31765 = arguments.length;
switch (G__31765) {
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
var val_31767 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31767);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31767,ret){
return (function (){
return fn1.call(null,val_31767);
});})(val_31767,ret))
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
var G__31769 = arguments.length;
switch (G__31769) {
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
var n__27277__auto___31771 = n;
var x_31772 = (0);
while(true){
if((x_31772 < n__27277__auto___31771)){
(a[x_31772] = (0));

var G__31773 = (x_31772 + (1));
x_31772 = G__31773;
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

var G__31774 = (i + (1));
i = G__31774;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async31775 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31775 = (function (flag,meta31776){
this.flag = flag;
this.meta31776 = meta31776;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31775.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31777,meta31776__$1){
var self__ = this;
var _31777__$1 = this;
return (new cljs.core.async.t_cljs$core$async31775(self__.flag,meta31776__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31775.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31777){
var self__ = this;
var _31777__$1 = this;
return self__.meta31776;
});})(flag))
;

cljs.core.async.t_cljs$core$async31775.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31775.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31775.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31775.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31775.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31776","meta31776",-152264658,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31775.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31775.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31775";

cljs.core.async.t_cljs$core$async31775.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__26903__auto__,writer__26904__auto__,opt__26905__auto__){
return cljs.core._write.call(null,writer__26904__auto__,"cljs.core.async/t_cljs$core$async31775");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async31775 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31775(flag__$1,meta31776){
return (new cljs.core.async.t_cljs$core$async31775(flag__$1,meta31776));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31775(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async31778 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31778 = (function (flag,cb,meta31779){
this.flag = flag;
this.cb = cb;
this.meta31779 = meta31779;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31780,meta31779__$1){
var self__ = this;
var _31780__$1 = this;
return (new cljs.core.async.t_cljs$core$async31778(self__.flag,self__.cb,meta31779__$1));
});

cljs.core.async.t_cljs$core$async31778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31780){
var self__ = this;
var _31780__$1 = this;
return self__.meta31779;
});

cljs.core.async.t_cljs$core$async31778.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31778.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async31778.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31778.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31778.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31779","meta31779",-2142983788,null)], null);
});

cljs.core.async.t_cljs$core$async31778.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31778.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31778";

cljs.core.async.t_cljs$core$async31778.cljs$lang$ctorPrWriter = (function (this__26903__auto__,writer__26904__auto__,opt__26905__auto__){
return cljs.core._write.call(null,writer__26904__auto__,"cljs.core.async/t_cljs$core$async31778");
});

cljs.core.async.__GT_t_cljs$core$async31778 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31778(flag__$1,cb__$1,meta31779){
return (new cljs.core.async.t_cljs$core$async31778(flag__$1,cb__$1,meta31779));
});

}

return (new cljs.core.async.t_cljs$core$async31778(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31781_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31781_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31782_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31782_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__26232__auto__ = wport;
if(cljs.core.truth_(or__26232__auto__)){
return or__26232__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31783 = (i + (1));
i = G__31783;
continue;
}
} else {
return null;
}
break;
}
})();
var or__26232__auto__ = ret;
if(cljs.core.truth_(or__26232__auto__)){
return or__26232__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__26220__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__26220__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__26220__auto__;
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
var args__27518__auto__ = [];
var len__27511__auto___31789 = arguments.length;
var i__27512__auto___31790 = (0);
while(true){
if((i__27512__auto___31790 < len__27511__auto___31789)){
args__27518__auto__.push((arguments[i__27512__auto___31790]));

var G__31791 = (i__27512__auto___31790 + (1));
i__27512__auto___31790 = G__31791;
continue;
} else {
}
break;
}

var argseq__27519__auto__ = ((((1) < args__27518__auto__.length))?(new cljs.core.IndexedSeq(args__27518__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27519__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31786){
var map__31787 = p__31786;
var map__31787__$1 = ((((!((map__31787 == null)))?((((map__31787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31787.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31787):map__31787);
var opts = map__31787__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31784){
var G__31785 = cljs.core.first.call(null,seq31784);
var seq31784__$1 = cljs.core.next.call(null,seq31784);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31785,seq31784__$1);
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
var G__31793 = arguments.length;
switch (G__31793) {
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
var c__31692__auto___31839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31692__auto___31839){
return (function (){
var f__31693__auto__ = (function (){var switch__31602__auto__ = ((function (c__31692__auto___31839){
return (function (state_31817){
var state_val_31818 = (state_31817[(1)]);
if((state_val_31818 === (7))){
var inst_31813 = (state_31817[(2)]);
var state_31817__$1 = state_31817;
var statearr_31819_31840 = state_31817__$1;
(statearr_31819_31840[(2)] = inst_31813);

(statearr_31819_31840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31818 === (1))){
var state_31817__$1 = state_31817;
var statearr_31820_31841 = state_31817__$1;
(statearr_31820_31841[(2)] = null);

(statearr_31820_31841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31818 === (4))){
var inst_31796 = (state_31817[(7)]);
var inst_31796__$1 = (state_31817[(2)]);
var inst_31797 = (inst_31796__$1 == null);
var state_31817__$1 = (function (){var statearr_31821 = state_31817;
(statearr_31821[(7)] = inst_31796__$1);

return statearr_31821;
})();
if(cljs.core.truth_(inst_31797)){
var statearr_31822_31842 = state_31817__$1;
(statearr_31822_31842[(1)] = (5));

} else {
var statearr_31823_31843 = state_31817__$1;
(statearr_31823_31843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31818 === (13))){
var state_31817__$1 = state_31817;
var statearr_31824_31844 = state_31817__$1;
(statearr_31824_31844[(2)] = null);

(statearr_31824_31844[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31818 === (6))){
var inst_31796 = (state_31817[(7)]);
var state_31817__$1 = state_31817;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31817__$1,(11),to,inst_31796);
} else {
if((state_val_31818 === (3))){
var inst_31815 = (state_31817[(2)]);
var state_31817__$1 = state_31817;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31817__$1,inst_31815);
} else {
if((state_val_31818 === (12))){
var state_31817__$1 = state_31817;
var statearr_31825_31845 = state_31817__$1;
(statearr_31825_31845[(2)] = null);

(statearr_31825_31845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31818 === (2))){
var state_31817__$1 = state_31817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31817__$1,(4),from);
} else {
if((state_val_31818 === (11))){
var inst_31806 = (state_31817[(2)]);
var state_31817__$1 = state_31817;
if(cljs.core.truth_(inst_31806)){
var statearr_31826_31846 = state_31817__$1;
(statearr_31826_31846[(1)] = (12));

} else {
var statearr_31827_31847 = state_31817__$1;
(statearr_31827_31847[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31818 === (9))){
var state_31817__$1 = state_31817;
var statearr_31828_31848 = state_31817__$1;
(statearr_31828_31848[(2)] = null);

(statearr_31828_31848[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31818 === (5))){
var state_31817__$1 = state_31817;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31829_31849 = state_31817__$1;
(statearr_31829_31849[(1)] = (8));

} else {
var statearr_31830_31850 = state_31817__$1;
(statearr_31830_31850[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31818 === (14))){
var inst_31811 = (state_31817[(2)]);
var state_31817__$1 = state_31817;
var statearr_31831_31851 = state_31817__$1;
(statearr_31831_31851[(2)] = inst_31811);

(statearr_31831_31851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31818 === (10))){
var inst_31803 = (state_31817[(2)]);
var state_31817__$1 = state_31817;
var statearr_31832_31852 = state_31817__$1;
(statearr_31832_31852[(2)] = inst_31803);

(statearr_31832_31852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31818 === (8))){
var inst_31800 = cljs.core.async.close_BANG_.call(null,to);
var state_31817__$1 = state_31817;
var statearr_31833_31853 = state_31817__$1;
(statearr_31833_31853[(2)] = inst_31800);

(statearr_31833_31853[(1)] = (10));


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
});})(c__31692__auto___31839))
;
return ((function (switch__31602__auto__,c__31692__auto___31839){
return (function() {
var cljs$core$async$state_machine__31603__auto__ = null;
var cljs$core$async$state_machine__31603__auto____0 = (function (){
var statearr_31834 = [null,null,null,null,null,null,null,null];
(statearr_31834[(0)] = cljs$core$async$state_machine__31603__auto__);

(statearr_31834[(1)] = (1));

return statearr_31834;
});
var cljs$core$async$state_machine__31603__auto____1 = (function (state_31817){
while(true){
var ret_value__31604__auto__ = (function (){try{while(true){
var result__31605__auto__ = switch__31602__auto__.call(null,state_31817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31605__auto__;
}
break;
}
}catch (e31835){if((e31835 instanceof Object)){
var ex__31606__auto__ = e31835;
var statearr_31836_31854 = state_31817;
(statearr_31836_31854[(5)] = ex__31606__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31855 = state_31817;
state_31817 = G__31855;
continue;
} else {
return ret_value__31604__auto__;
}
break;
}
});
cljs$core$async$state_machine__31603__auto__ = function(state_31817){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31603__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31603__auto____1.call(this,state_31817);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31603__auto____0;
cljs$core$async$state_machine__31603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31603__auto____1;
return cljs$core$async$state_machine__31603__auto__;
})()
;})(switch__31602__auto__,c__31692__auto___31839))
})();
var state__31694__auto__ = (function (){var statearr_31837 = f__31693__auto__.call(null);
(statearr_31837[(6)] = c__31692__auto___31839);

return statearr_31837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31694__auto__);
});})(c__31692__auto___31839))
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
return (function (p__31856){
var vec__31857 = p__31856;
var v = cljs.core.nth.call(null,vec__31857,(0),null);
var p = cljs.core.nth.call(null,vec__31857,(1),null);
var job = vec__31857;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__31692__auto___32028 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31692__auto___32028,res,vec__31857,v,p,job,jobs,results){
return (function (){
var f__31693__auto__ = (function (){var switch__31602__auto__ = ((function (c__31692__auto___32028,res,vec__31857,v,p,job,jobs,results){
return (function (state_31864){
var state_val_31865 = (state_31864[(1)]);
if((state_val_31865 === (1))){
var state_31864__$1 = state_31864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31864__$1,(2),res,v);
} else {
if((state_val_31865 === (2))){
var inst_31861 = (state_31864[(2)]);
var inst_31862 = cljs.core.async.close_BANG_.call(null,res);
var state_31864__$1 = (function (){var statearr_31866 = state_31864;
(statearr_31866[(7)] = inst_31861);

return statearr_31866;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31864__$1,inst_31862);
} else {
return null;
}
}
});})(c__31692__auto___32028,res,vec__31857,v,p,job,jobs,results))
;
return ((function (switch__31602__auto__,c__31692__auto___32028,res,vec__31857,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31603__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31603__auto____0 = (function (){
var statearr_31867 = [null,null,null,null,null,null,null,null];
(statearr_31867[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31603__auto__);

(statearr_31867[(1)] = (1));

return statearr_31867;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31603__auto____1 = (function (state_31864){
while(true){
var ret_value__31604__auto__ = (function (){try{while(true){
var result__31605__auto__ = switch__31602__auto__.call(null,state_31864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31605__auto__;
}
break;
}
}catch (e31868){if((e31868 instanceof Object)){
var ex__31606__auto__ = e31868;
var statearr_31869_32029 = state_31864;
(statearr_31869_32029[(5)] = ex__31606__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32030 = state_31864;
state_31864 = G__32030;
continue;
} else {
return ret_value__31604__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31603__auto__ = function(state_31864){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31603__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31603__auto____1.call(this,state_31864);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31603__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31603__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31603__auto__;
})()
;})(switch__31602__auto__,c__31692__auto___32028,res,vec__31857,v,p,job,jobs,results))
})();
var state__31694__auto__ = (function (){var statearr_31870 = f__31693__auto__.call(null);
(statearr_31870[(6)] = c__31692__auto___32028);

return statearr_31870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31694__auto__);
});})(c__31692__auto___32028,res,vec__31857,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31871){
var vec__31872 = p__31871;
var v = cljs.core.nth.call(null,vec__31872,(0),null);
var p = cljs.core.nth.call(null,vec__31872,(1),null);
var job = vec__31872;
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
var n__27277__auto___32031 = n;
var __32032 = (0);
while(true){
if((__32032 < n__27277__auto___32031)){
var G__31875_32033 = type;
var G__31875_32034__$1 = (((G__31875_32033 instanceof cljs.core.Keyword))?G__31875_32033.fqn:null);
switch (G__31875_32034__$1) {
case "compute":
var c__31692__auto___32036 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32032,c__31692__auto___32036,G__31875_32033,G__31875_32034__$1,n__27277__auto___32031,jobs,results,process,async){
return (function (){
var f__31693__auto__ = (function (){var switch__31602__auto__ = ((function (__32032,c__31692__auto___32036,G__31875_32033,G__31875_32034__$1,n__27277__auto___32031,jobs,results,process,async){
return (function (state_31888){
var state_val_31889 = (state_31888[(1)]);
if((state_val_31889 === (1))){
var state_31888__$1 = state_31888;
var statearr_31890_32037 = state_31888__$1;
(statearr_31890_32037[(2)] = null);

(statearr_31890_32037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (2))){
var state_31888__$1 = state_31888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31888__$1,(4),jobs);
} else {
if((state_val_31889 === (3))){
var inst_31886 = (state_31888[(2)]);
var state_31888__$1 = state_31888;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31888__$1,inst_31886);
} else {
if((state_val_31889 === (4))){
var inst_31878 = (state_31888[(2)]);
var inst_31879 = process.call(null,inst_31878);
var state_31888__$1 = state_31888;
if(cljs.core.truth_(inst_31879)){
var statearr_31891_32038 = state_31888__$1;
(statearr_31891_32038[(1)] = (5));

} else {
var statearr_31892_32039 = state_31888__$1;
(statearr_31892_32039[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (5))){
var state_31888__$1 = state_31888;
var statearr_31893_32040 = state_31888__$1;
(statearr_31893_32040[(2)] = null);

(statearr_31893_32040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (6))){
var state_31888__$1 = state_31888;
var statearr_31894_32041 = state_31888__$1;
(statearr_31894_32041[(2)] = null);

(statearr_31894_32041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (7))){
var inst_31884 = (state_31888[(2)]);
var state_31888__$1 = state_31888;
var statearr_31895_32042 = state_31888__$1;
(statearr_31895_32042[(2)] = inst_31884);

(statearr_31895_32042[(1)] = (3));


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
});})(__32032,c__31692__auto___32036,G__31875_32033,G__31875_32034__$1,n__27277__auto___32031,jobs,results,process,async))
;
return ((function (__32032,switch__31602__auto__,c__31692__auto___32036,G__31875_32033,G__31875_32034__$1,n__27277__auto___32031,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31603__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31603__auto____0 = (function (){
var statearr_31896 = [null,null,null,null,null,null,null];
(statearr_31896[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31603__auto__);

(statearr_31896[(1)] = (1));

return statearr_31896;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31603__auto____1 = (function (state_31888){
while(true){
var ret_value__31604__auto__ = (function (){try{while(true){
var result__31605__auto__ = switch__31602__auto__.call(null,state_31888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31605__auto__;
}
break;
}
}catch (e31897){if((e31897 instanceof Object)){
var ex__31606__auto__ = e31897;
var statearr_31898_32043 = state_31888;
(statearr_31898_32043[(5)] = ex__31606__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32044 = state_31888;
state_31888 = G__32044;
continue;
} else {
return ret_value__31604__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31603__auto__ = function(state_31888){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31603__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31603__auto____1.call(this,state_31888);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31603__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31603__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31603__auto__;
})()
;})(__32032,switch__31602__auto__,c__31692__auto___32036,G__31875_32033,G__31875_32034__$1,n__27277__auto___32031,jobs,results,process,async))
})();
var state__31694__auto__ = (function (){var statearr_31899 = f__31693__auto__.call(null);
(statearr_31899[(6)] = c__31692__auto___32036);

return statearr_31899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31694__auto__);
});})(__32032,c__31692__auto___32036,G__31875_32033,G__31875_32034__$1,n__27277__auto___32031,jobs,results,process,async))
);


break;
case "async":
var c__31692__auto___32045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32032,c__31692__auto___32045,G__31875_32033,G__31875_32034__$1,n__27277__auto___32031,jobs,results,process,async){
return (function (){
var f__31693__auto__ = (function (){var switch__31602__auto__ = ((function (__32032,c__31692__auto___32045,G__31875_32033,G__31875_32034__$1,n__27277__auto___32031,jobs,results,process,async){
return (function (state_31912){
var state_val_31913 = (state_31912[(1)]);
if((state_val_31913 === (1))){
var state_31912__$1 = state_31912;
var statearr_31914_32046 = state_31912__$1;
(statearr_31914_32046[(2)] = null);

(statearr_31914_32046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (2))){
var state_31912__$1 = state_31912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31912__$1,(4),jobs);
} else {
if((state_val_31913 === (3))){
var inst_31910 = (state_31912[(2)]);
var state_31912__$1 = state_31912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31912__$1,inst_31910);
} else {
if((state_val_31913 === (4))){
var inst_31902 = (state_31912[(2)]);
var inst_31903 = async.call(null,inst_31902);
var state_31912__$1 = state_31912;
if(cljs.core.truth_(inst_31903)){
var statearr_31915_32047 = state_31912__$1;
(statearr_31915_32047[(1)] = (5));

} else {
var statearr_31916_32048 = state_31912__$1;
(statearr_31916_32048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (5))){
var state_31912__$1 = state_31912;
var statearr_31917_32049 = state_31912__$1;
(statearr_31917_32049[(2)] = null);

(statearr_31917_32049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (6))){
var state_31912__$1 = state_31912;
var statearr_31918_32050 = state_31912__$1;
(statearr_31918_32050[(2)] = null);

(statearr_31918_32050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (7))){
var inst_31908 = (state_31912[(2)]);
var state_31912__$1 = state_31912;
var statearr_31919_32051 = state_31912__$1;
(statearr_31919_32051[(2)] = inst_31908);

(statearr_31919_32051[(1)] = (3));


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
});})(__32032,c__31692__auto___32045,G__31875_32033,G__31875_32034__$1,n__27277__auto___32031,jobs,results,process,async))
;
return ((function (__32032,switch__31602__auto__,c__31692__auto___32045,G__31875_32033,G__31875_32034__$1,n__27277__auto___32031,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31603__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31603__auto____0 = (function (){
var statearr_31920 = [null,null,null,null,null,null,null];
(statearr_31920[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31603__auto__);

(statearr_31920[(1)] = (1));

return statearr_31920;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31603__auto____1 = (function (state_31912){
while(true){
var ret_value__31604__auto__ = (function (){try{while(true){
var result__31605__auto__ = switch__31602__auto__.call(null,state_31912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31605__auto__;
}
break;
}
}catch (e31921){if((e31921 instanceof Object)){
var ex__31606__auto__ = e31921;
var statearr_31922_32052 = state_31912;
(statearr_31922_32052[(5)] = ex__31606__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32053 = state_31912;
state_31912 = G__32053;
continue;
} else {
return ret_value__31604__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31603__auto__ = function(state_31912){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31603__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31603__auto____1.call(this,state_31912);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31603__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31603__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31603__auto__;
})()
;})(__32032,switch__31602__auto__,c__31692__auto___32045,G__31875_32033,G__31875_32034__$1,n__27277__auto___32031,jobs,results,process,async))
})();
var state__31694__auto__ = (function (){var statearr_31923 = f__31693__auto__.call(null);
(statearr_31923[(6)] = c__31692__auto___32045);

return statearr_31923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31694__auto__);
});})(__32032,c__31692__auto___32045,G__31875_32033,G__31875_32034__$1,n__27277__auto___32031,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31875_32034__$1)].join('')));

}

var G__32054 = (__32032 + (1));
__32032 = G__32054;
continue;
} else {
}
break;
}

var c__31692__auto___32055 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31692__auto___32055,jobs,results,process,async){
return (function (){
var f__31693__auto__ = (function (){var switch__31602__auto__ = ((function (c__31692__auto___32055,jobs,results,process,async){
return (function (state_31945){
var state_val_31946 = (state_31945[(1)]);
if((state_val_31946 === (1))){
var state_31945__$1 = state_31945;
var statearr_31947_32056 = state_31945__$1;
(statearr_31947_32056[(2)] = null);

(statearr_31947_32056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31946 === (2))){
var state_31945__$1 = state_31945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31945__$1,(4),from);
} else {
if((state_val_31946 === (3))){
var inst_31943 = (state_31945[(2)]);
var state_31945__$1 = state_31945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31945__$1,inst_31943);
} else {
if((state_val_31946 === (4))){
var inst_31926 = (state_31945[(7)]);
var inst_31926__$1 = (state_31945[(2)]);
var inst_31927 = (inst_31926__$1 == null);
var state_31945__$1 = (function (){var statearr_31948 = state_31945;
(statearr_31948[(7)] = inst_31926__$1);

return statearr_31948;
})();
if(cljs.core.truth_(inst_31927)){
var statearr_31949_32057 = state_31945__$1;
(statearr_31949_32057[(1)] = (5));

} else {
var statearr_31950_32058 = state_31945__$1;
(statearr_31950_32058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31946 === (5))){
var inst_31929 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31945__$1 = state_31945;
var statearr_31951_32059 = state_31945__$1;
(statearr_31951_32059[(2)] = inst_31929);

(statearr_31951_32059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31946 === (6))){
var inst_31926 = (state_31945[(7)]);
var inst_31931 = (state_31945[(8)]);
var inst_31931__$1 = cljs.core.async.chan.call(null,(1));
var inst_31932 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31933 = [inst_31926,inst_31931__$1];
var inst_31934 = (new cljs.core.PersistentVector(null,2,(5),inst_31932,inst_31933,null));
var state_31945__$1 = (function (){var statearr_31952 = state_31945;
(statearr_31952[(8)] = inst_31931__$1);

return statearr_31952;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31945__$1,(8),jobs,inst_31934);
} else {
if((state_val_31946 === (7))){
var inst_31941 = (state_31945[(2)]);
var state_31945__$1 = state_31945;
var statearr_31953_32060 = state_31945__$1;
(statearr_31953_32060[(2)] = inst_31941);

(statearr_31953_32060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31946 === (8))){
var inst_31931 = (state_31945[(8)]);
var inst_31936 = (state_31945[(2)]);
var state_31945__$1 = (function (){var statearr_31954 = state_31945;
(statearr_31954[(9)] = inst_31936);

return statearr_31954;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31945__$1,(9),results,inst_31931);
} else {
if((state_val_31946 === (9))){
var inst_31938 = (state_31945[(2)]);
var state_31945__$1 = (function (){var statearr_31955 = state_31945;
(statearr_31955[(10)] = inst_31938);

return statearr_31955;
})();
var statearr_31956_32061 = state_31945__$1;
(statearr_31956_32061[(2)] = null);

(statearr_31956_32061[(1)] = (2));


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
});})(c__31692__auto___32055,jobs,results,process,async))
;
return ((function (switch__31602__auto__,c__31692__auto___32055,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31603__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31603__auto____0 = (function (){
var statearr_31957 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31957[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31603__auto__);

(statearr_31957[(1)] = (1));

return statearr_31957;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31603__auto____1 = (function (state_31945){
while(true){
var ret_value__31604__auto__ = (function (){try{while(true){
var result__31605__auto__ = switch__31602__auto__.call(null,state_31945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31605__auto__;
}
break;
}
}catch (e31958){if((e31958 instanceof Object)){
var ex__31606__auto__ = e31958;
var statearr_31959_32062 = state_31945;
(statearr_31959_32062[(5)] = ex__31606__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32063 = state_31945;
state_31945 = G__32063;
continue;
} else {
return ret_value__31604__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31603__auto__ = function(state_31945){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31603__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31603__auto____1.call(this,state_31945);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31603__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31603__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31603__auto__;
})()
;})(switch__31602__auto__,c__31692__auto___32055,jobs,results,process,async))
})();
var state__31694__auto__ = (function (){var statearr_31960 = f__31693__auto__.call(null);
(statearr_31960[(6)] = c__31692__auto___32055);

return statearr_31960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31694__auto__);
});})(c__31692__auto___32055,jobs,results,process,async))
);


var c__31692__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31692__auto__,jobs,results,process,async){
return (function (){
var f__31693__auto__ = (function (){var switch__31602__auto__ = ((function (c__31692__auto__,jobs,results,process,async){
return (function (state_31998){
var state_val_31999 = (state_31998[(1)]);
if((state_val_31999 === (7))){
var inst_31994 = (state_31998[(2)]);
var state_31998__$1 = state_31998;
var statearr_32000_32064 = state_31998__$1;
(statearr_32000_32064[(2)] = inst_31994);

(statearr_32000_32064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (20))){
var state_31998__$1 = state_31998;
var statearr_32001_32065 = state_31998__$1;
(statearr_32001_32065[(2)] = null);

(statearr_32001_32065[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (1))){
var state_31998__$1 = state_31998;
var statearr_32002_32066 = state_31998__$1;
(statearr_32002_32066[(2)] = null);

(statearr_32002_32066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (4))){
var inst_31963 = (state_31998[(7)]);
var inst_31963__$1 = (state_31998[(2)]);
var inst_31964 = (inst_31963__$1 == null);
var state_31998__$1 = (function (){var statearr_32003 = state_31998;
(statearr_32003[(7)] = inst_31963__$1);

return statearr_32003;
})();
if(cljs.core.truth_(inst_31964)){
var statearr_32004_32067 = state_31998__$1;
(statearr_32004_32067[(1)] = (5));

} else {
var statearr_32005_32068 = state_31998__$1;
(statearr_32005_32068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (15))){
var inst_31976 = (state_31998[(8)]);
var state_31998__$1 = state_31998;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31998__$1,(18),to,inst_31976);
} else {
if((state_val_31999 === (21))){
var inst_31989 = (state_31998[(2)]);
var state_31998__$1 = state_31998;
var statearr_32006_32069 = state_31998__$1;
(statearr_32006_32069[(2)] = inst_31989);

(statearr_32006_32069[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (13))){
var inst_31991 = (state_31998[(2)]);
var state_31998__$1 = (function (){var statearr_32007 = state_31998;
(statearr_32007[(9)] = inst_31991);

return statearr_32007;
})();
var statearr_32008_32070 = state_31998__$1;
(statearr_32008_32070[(2)] = null);

(statearr_32008_32070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (6))){
var inst_31963 = (state_31998[(7)]);
var state_31998__$1 = state_31998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31998__$1,(11),inst_31963);
} else {
if((state_val_31999 === (17))){
var inst_31984 = (state_31998[(2)]);
var state_31998__$1 = state_31998;
if(cljs.core.truth_(inst_31984)){
var statearr_32009_32071 = state_31998__$1;
(statearr_32009_32071[(1)] = (19));

} else {
var statearr_32010_32072 = state_31998__$1;
(statearr_32010_32072[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (3))){
var inst_31996 = (state_31998[(2)]);
var state_31998__$1 = state_31998;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31998__$1,inst_31996);
} else {
if((state_val_31999 === (12))){
var inst_31973 = (state_31998[(10)]);
var state_31998__$1 = state_31998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31998__$1,(14),inst_31973);
} else {
if((state_val_31999 === (2))){
var state_31998__$1 = state_31998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31998__$1,(4),results);
} else {
if((state_val_31999 === (19))){
var state_31998__$1 = state_31998;
var statearr_32011_32073 = state_31998__$1;
(statearr_32011_32073[(2)] = null);

(statearr_32011_32073[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (11))){
var inst_31973 = (state_31998[(2)]);
var state_31998__$1 = (function (){var statearr_32012 = state_31998;
(statearr_32012[(10)] = inst_31973);

return statearr_32012;
})();
var statearr_32013_32074 = state_31998__$1;
(statearr_32013_32074[(2)] = null);

(statearr_32013_32074[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (9))){
var state_31998__$1 = state_31998;
var statearr_32014_32075 = state_31998__$1;
(statearr_32014_32075[(2)] = null);

(statearr_32014_32075[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (5))){
var state_31998__$1 = state_31998;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32015_32076 = state_31998__$1;
(statearr_32015_32076[(1)] = (8));

} else {
var statearr_32016_32077 = state_31998__$1;
(statearr_32016_32077[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (14))){
var inst_31976 = (state_31998[(8)]);
var inst_31978 = (state_31998[(11)]);
var inst_31976__$1 = (state_31998[(2)]);
var inst_31977 = (inst_31976__$1 == null);
var inst_31978__$1 = cljs.core.not.call(null,inst_31977);
var state_31998__$1 = (function (){var statearr_32017 = state_31998;
(statearr_32017[(8)] = inst_31976__$1);

(statearr_32017[(11)] = inst_31978__$1);

return statearr_32017;
})();
if(inst_31978__$1){
var statearr_32018_32078 = state_31998__$1;
(statearr_32018_32078[(1)] = (15));

} else {
var statearr_32019_32079 = state_31998__$1;
(statearr_32019_32079[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (16))){
var inst_31978 = (state_31998[(11)]);
var state_31998__$1 = state_31998;
var statearr_32020_32080 = state_31998__$1;
(statearr_32020_32080[(2)] = inst_31978);

(statearr_32020_32080[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (10))){
var inst_31970 = (state_31998[(2)]);
var state_31998__$1 = state_31998;
var statearr_32021_32081 = state_31998__$1;
(statearr_32021_32081[(2)] = inst_31970);

(statearr_32021_32081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (18))){
var inst_31981 = (state_31998[(2)]);
var state_31998__$1 = state_31998;
var statearr_32022_32082 = state_31998__$1;
(statearr_32022_32082[(2)] = inst_31981);

(statearr_32022_32082[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (8))){
var inst_31967 = cljs.core.async.close_BANG_.call(null,to);
var state_31998__$1 = state_31998;
var statearr_32023_32083 = state_31998__$1;
(statearr_32023_32083[(2)] = inst_31967);

(statearr_32023_32083[(1)] = (10));


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
});})(c__31692__auto__,jobs,results,process,async))
;
return ((function (switch__31602__auto__,c__31692__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31603__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31603__auto____0 = (function (){
var statearr_32024 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32024[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31603__auto__);

(statearr_32024[(1)] = (1));

return statearr_32024;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31603__auto____1 = (function (state_31998){
while(true){
var ret_value__31604__auto__ = (function (){try{while(true){
var result__31605__auto__ = switch__31602__auto__.call(null,state_31998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31605__auto__;
}
break;
}
}catch (e32025){if((e32025 instanceof Object)){
var ex__31606__auto__ = e32025;
var statearr_32026_32084 = state_31998;
(statearr_32026_32084[(5)] = ex__31606__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32085 = state_31998;
state_31998 = G__32085;
continue;
} else {
return ret_value__31604__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31603__auto__ = function(state_31998){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31603__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31603__auto____1.call(this,state_31998);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31603__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31603__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31603__auto__;
})()
;})(switch__31602__auto__,c__31692__auto__,jobs,results,process,async))
})();
var state__31694__auto__ = (function (){var statearr_32027 = f__31693__auto__.call(null);
(statearr_32027[(6)] = c__31692__auto__);

return statearr_32027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31694__auto__);
});})(c__31692__auto__,jobs,results,process,async))
);

return c__31692__auto__;
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
var G__32087 = arguments.length;
switch (G__32087) {
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
var G__32090 = arguments.length;
switch (G__32090) {
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
var G__32093 = arguments.length;
switch (G__32093) {
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
var c__31692__auto___32142 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31692__auto___32142,tc,fc){
return (function (){
var f__31693__auto__ = (function (){var switch__31602__auto__ = ((function (c__31692__auto___32142,tc,fc){
return (function (state_32119){
var state_val_32120 = (state_32119[(1)]);
if((state_val_32120 === (7))){
var inst_32115 = (state_32119[(2)]);
var state_32119__$1 = state_32119;
var statearr_32121_32143 = state_32119__$1;
(statearr_32121_32143[(2)] = inst_32115);

(statearr_32121_32143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32120 === (1))){
var state_32119__$1 = state_32119;
var statearr_32122_32144 = state_32119__$1;
(statearr_32122_32144[(2)] = null);

(statearr_32122_32144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32120 === (4))){
var inst_32096 = (state_32119[(7)]);
var inst_32096__$1 = (state_32119[(2)]);
var inst_32097 = (inst_32096__$1 == null);
var state_32119__$1 = (function (){var statearr_32123 = state_32119;
(statearr_32123[(7)] = inst_32096__$1);

return statearr_32123;
})();
if(cljs.core.truth_(inst_32097)){
var statearr_32124_32145 = state_32119__$1;
(statearr_32124_32145[(1)] = (5));

} else {
var statearr_32125_32146 = state_32119__$1;
(statearr_32125_32146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32120 === (13))){
var state_32119__$1 = state_32119;
var statearr_32126_32147 = state_32119__$1;
(statearr_32126_32147[(2)] = null);

(statearr_32126_32147[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32120 === (6))){
var inst_32096 = (state_32119[(7)]);
var inst_32102 = p.call(null,inst_32096);
var state_32119__$1 = state_32119;
if(cljs.core.truth_(inst_32102)){
var statearr_32127_32148 = state_32119__$1;
(statearr_32127_32148[(1)] = (9));

} else {
var statearr_32128_32149 = state_32119__$1;
(statearr_32128_32149[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32120 === (3))){
var inst_32117 = (state_32119[(2)]);
var state_32119__$1 = state_32119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32119__$1,inst_32117);
} else {
if((state_val_32120 === (12))){
var state_32119__$1 = state_32119;
var statearr_32129_32150 = state_32119__$1;
(statearr_32129_32150[(2)] = null);

(statearr_32129_32150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32120 === (2))){
var state_32119__$1 = state_32119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32119__$1,(4),ch);
} else {
if((state_val_32120 === (11))){
var inst_32096 = (state_32119[(7)]);
var inst_32106 = (state_32119[(2)]);
var state_32119__$1 = state_32119;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32119__$1,(8),inst_32106,inst_32096);
} else {
if((state_val_32120 === (9))){
var state_32119__$1 = state_32119;
var statearr_32130_32151 = state_32119__$1;
(statearr_32130_32151[(2)] = tc);

(statearr_32130_32151[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32120 === (5))){
var inst_32099 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32100 = cljs.core.async.close_BANG_.call(null,fc);
var state_32119__$1 = (function (){var statearr_32131 = state_32119;
(statearr_32131[(8)] = inst_32099);

return statearr_32131;
})();
var statearr_32132_32152 = state_32119__$1;
(statearr_32132_32152[(2)] = inst_32100);

(statearr_32132_32152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32120 === (14))){
var inst_32113 = (state_32119[(2)]);
var state_32119__$1 = state_32119;
var statearr_32133_32153 = state_32119__$1;
(statearr_32133_32153[(2)] = inst_32113);

(statearr_32133_32153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32120 === (10))){
var state_32119__$1 = state_32119;
var statearr_32134_32154 = state_32119__$1;
(statearr_32134_32154[(2)] = fc);

(statearr_32134_32154[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32120 === (8))){
var inst_32108 = (state_32119[(2)]);
var state_32119__$1 = state_32119;
if(cljs.core.truth_(inst_32108)){
var statearr_32135_32155 = state_32119__$1;
(statearr_32135_32155[(1)] = (12));

} else {
var statearr_32136_32156 = state_32119__$1;
(statearr_32136_32156[(1)] = (13));

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
});})(c__31692__auto___32142,tc,fc))
;
return ((function (switch__31602__auto__,c__31692__auto___32142,tc,fc){
return (function() {
var cljs$core$async$state_machine__31603__auto__ = null;
var cljs$core$async$state_machine__31603__auto____0 = (function (){
var statearr_32137 = [null,null,null,null,null,null,null,null,null];
(statearr_32137[(0)] = cljs$core$async$state_machine__31603__auto__);

(statearr_32137[(1)] = (1));

return statearr_32137;
});
var cljs$core$async$state_machine__31603__auto____1 = (function (state_32119){
while(true){
var ret_value__31604__auto__ = (function (){try{while(true){
var result__31605__auto__ = switch__31602__auto__.call(null,state_32119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31605__auto__;
}
break;
}
}catch (e32138){if((e32138 instanceof Object)){
var ex__31606__auto__ = e32138;
var statearr_32139_32157 = state_32119;
(statearr_32139_32157[(5)] = ex__31606__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32158 = state_32119;
state_32119 = G__32158;
continue;
} else {
return ret_value__31604__auto__;
}
break;
}
});
cljs$core$async$state_machine__31603__auto__ = function(state_32119){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31603__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31603__auto____1.call(this,state_32119);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31603__auto____0;
cljs$core$async$state_machine__31603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31603__auto____1;
return cljs$core$async$state_machine__31603__auto__;
})()
;})(switch__31602__auto__,c__31692__auto___32142,tc,fc))
})();
var state__31694__auto__ = (function (){var statearr_32140 = f__31693__auto__.call(null);
(statearr_32140[(6)] = c__31692__auto___32142);

return statearr_32140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31694__auto__);
});})(c__31692__auto___32142,tc,fc))
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
var c__31692__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31692__auto__){
return (function (){
var f__31693__auto__ = (function (){var switch__31602__auto__ = ((function (c__31692__auto__){
return (function (state_32179){
var state_val_32180 = (state_32179[(1)]);
if((state_val_32180 === (7))){
var inst_32175 = (state_32179[(2)]);
var state_32179__$1 = state_32179;
var statearr_32181_32199 = state_32179__$1;
(statearr_32181_32199[(2)] = inst_32175);

(statearr_32181_32199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32180 === (1))){
var inst_32159 = init;
var state_32179__$1 = (function (){var statearr_32182 = state_32179;
(statearr_32182[(7)] = inst_32159);

return statearr_32182;
})();
var statearr_32183_32200 = state_32179__$1;
(statearr_32183_32200[(2)] = null);

(statearr_32183_32200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32180 === (4))){
var inst_32162 = (state_32179[(8)]);
var inst_32162__$1 = (state_32179[(2)]);
var inst_32163 = (inst_32162__$1 == null);
var state_32179__$1 = (function (){var statearr_32184 = state_32179;
(statearr_32184[(8)] = inst_32162__$1);

return statearr_32184;
})();
if(cljs.core.truth_(inst_32163)){
var statearr_32185_32201 = state_32179__$1;
(statearr_32185_32201[(1)] = (5));

} else {
var statearr_32186_32202 = state_32179__$1;
(statearr_32186_32202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32180 === (6))){
var inst_32162 = (state_32179[(8)]);
var inst_32159 = (state_32179[(7)]);
var inst_32166 = (state_32179[(9)]);
var inst_32166__$1 = f.call(null,inst_32159,inst_32162);
var inst_32167 = cljs.core.reduced_QMARK_.call(null,inst_32166__$1);
var state_32179__$1 = (function (){var statearr_32187 = state_32179;
(statearr_32187[(9)] = inst_32166__$1);

return statearr_32187;
})();
if(inst_32167){
var statearr_32188_32203 = state_32179__$1;
(statearr_32188_32203[(1)] = (8));

} else {
var statearr_32189_32204 = state_32179__$1;
(statearr_32189_32204[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32180 === (3))){
var inst_32177 = (state_32179[(2)]);
var state_32179__$1 = state_32179;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32179__$1,inst_32177);
} else {
if((state_val_32180 === (2))){
var state_32179__$1 = state_32179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32179__$1,(4),ch);
} else {
if((state_val_32180 === (9))){
var inst_32166 = (state_32179[(9)]);
var inst_32159 = inst_32166;
var state_32179__$1 = (function (){var statearr_32190 = state_32179;
(statearr_32190[(7)] = inst_32159);

return statearr_32190;
})();
var statearr_32191_32205 = state_32179__$1;
(statearr_32191_32205[(2)] = null);

(statearr_32191_32205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32180 === (5))){
var inst_32159 = (state_32179[(7)]);
var state_32179__$1 = state_32179;
var statearr_32192_32206 = state_32179__$1;
(statearr_32192_32206[(2)] = inst_32159);

(statearr_32192_32206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32180 === (10))){
var inst_32173 = (state_32179[(2)]);
var state_32179__$1 = state_32179;
var statearr_32193_32207 = state_32179__$1;
(statearr_32193_32207[(2)] = inst_32173);

(statearr_32193_32207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32180 === (8))){
var inst_32166 = (state_32179[(9)]);
var inst_32169 = cljs.core.deref.call(null,inst_32166);
var state_32179__$1 = state_32179;
var statearr_32194_32208 = state_32179__$1;
(statearr_32194_32208[(2)] = inst_32169);

(statearr_32194_32208[(1)] = (10));


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
});})(c__31692__auto__))
;
return ((function (switch__31602__auto__,c__31692__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__31603__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31603__auto____0 = (function (){
var statearr_32195 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32195[(0)] = cljs$core$async$reduce_$_state_machine__31603__auto__);

(statearr_32195[(1)] = (1));

return statearr_32195;
});
var cljs$core$async$reduce_$_state_machine__31603__auto____1 = (function (state_32179){
while(true){
var ret_value__31604__auto__ = (function (){try{while(true){
var result__31605__auto__ = switch__31602__auto__.call(null,state_32179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31605__auto__;
}
break;
}
}catch (e32196){if((e32196 instanceof Object)){
var ex__31606__auto__ = e32196;
var statearr_32197_32209 = state_32179;
(statearr_32197_32209[(5)] = ex__31606__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32210 = state_32179;
state_32179 = G__32210;
continue;
} else {
return ret_value__31604__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31603__auto__ = function(state_32179){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31603__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31603__auto____1.call(this,state_32179);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__31603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31603__auto____0;
cljs$core$async$reduce_$_state_machine__31603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31603__auto____1;
return cljs$core$async$reduce_$_state_machine__31603__auto__;
})()
;})(switch__31602__auto__,c__31692__auto__))
})();
var state__31694__auto__ = (function (){var statearr_32198 = f__31693__auto__.call(null);
(statearr_32198[(6)] = c__31692__auto__);

return statearr_32198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31694__auto__);
});})(c__31692__auto__))
);

return c__31692__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__31692__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31692__auto__,f__$1){
return (function (){
var f__31693__auto__ = (function (){var switch__31602__auto__ = ((function (c__31692__auto__,f__$1){
return (function (state_32216){
var state_val_32217 = (state_32216[(1)]);
if((state_val_32217 === (1))){
var inst_32211 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_32216__$1 = state_32216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32216__$1,(2),inst_32211);
} else {
if((state_val_32217 === (2))){
var inst_32213 = (state_32216[(2)]);
var inst_32214 = f__$1.call(null,inst_32213);
var state_32216__$1 = state_32216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32216__$1,inst_32214);
} else {
return null;
}
}
});})(c__31692__auto__,f__$1))
;
return ((function (switch__31602__auto__,c__31692__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__31603__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31603__auto____0 = (function (){
var statearr_32218 = [null,null,null,null,null,null,null];
(statearr_32218[(0)] = cljs$core$async$transduce_$_state_machine__31603__auto__);

(statearr_32218[(1)] = (1));

return statearr_32218;
});
var cljs$core$async$transduce_$_state_machine__31603__auto____1 = (function (state_32216){
while(true){
var ret_value__31604__auto__ = (function (){try{while(true){
var result__31605__auto__ = switch__31602__auto__.call(null,state_32216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31605__auto__;
}
break;
}
}catch (e32219){if((e32219 instanceof Object)){
var ex__31606__auto__ = e32219;
var statearr_32220_32222 = state_32216;
(statearr_32220_32222[(5)] = ex__31606__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32223 = state_32216;
state_32216 = G__32223;
continue;
} else {
return ret_value__31604__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31603__auto__ = function(state_32216){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31603__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31603__auto____1.call(this,state_32216);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__31603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31603__auto____0;
cljs$core$async$transduce_$_state_machine__31603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31603__auto____1;
return cljs$core$async$transduce_$_state_machine__31603__auto__;
})()
;})(switch__31602__auto__,c__31692__auto__,f__$1))
})();
var state__31694__auto__ = (function (){var statearr_32221 = f__31693__auto__.call(null);
(statearr_32221[(6)] = c__31692__auto__);

return statearr_32221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31694__auto__);
});})(c__31692__auto__,f__$1))
);

return c__31692__auto__;
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
var G__32225 = arguments.length;
switch (G__32225) {
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
var c__31692__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31692__auto__){
return (function (){
var f__31693__auto__ = (function (){var switch__31602__auto__ = ((function (c__31692__auto__){
return (function (state_32250){
var state_val_32251 = (state_32250[(1)]);
if((state_val_32251 === (7))){
var inst_32232 = (state_32250[(2)]);
var state_32250__$1 = state_32250;
var statearr_32252_32273 = state_32250__$1;
(statearr_32252_32273[(2)] = inst_32232);

(statearr_32252_32273[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32251 === (1))){
var inst_32226 = cljs.core.seq.call(null,coll);
var inst_32227 = inst_32226;
var state_32250__$1 = (function (){var statearr_32253 = state_32250;
(statearr_32253[(7)] = inst_32227);

return statearr_32253;
})();
var statearr_32254_32274 = state_32250__$1;
(statearr_32254_32274[(2)] = null);

(statearr_32254_32274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32251 === (4))){
var inst_32227 = (state_32250[(7)]);
var inst_32230 = cljs.core.first.call(null,inst_32227);
var state_32250__$1 = state_32250;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32250__$1,(7),ch,inst_32230);
} else {
if((state_val_32251 === (13))){
var inst_32244 = (state_32250[(2)]);
var state_32250__$1 = state_32250;
var statearr_32255_32275 = state_32250__$1;
(statearr_32255_32275[(2)] = inst_32244);

(statearr_32255_32275[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32251 === (6))){
var inst_32235 = (state_32250[(2)]);
var state_32250__$1 = state_32250;
if(cljs.core.truth_(inst_32235)){
var statearr_32256_32276 = state_32250__$1;
(statearr_32256_32276[(1)] = (8));

} else {
var statearr_32257_32277 = state_32250__$1;
(statearr_32257_32277[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32251 === (3))){
var inst_32248 = (state_32250[(2)]);
var state_32250__$1 = state_32250;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32250__$1,inst_32248);
} else {
if((state_val_32251 === (12))){
var state_32250__$1 = state_32250;
var statearr_32258_32278 = state_32250__$1;
(statearr_32258_32278[(2)] = null);

(statearr_32258_32278[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32251 === (2))){
var inst_32227 = (state_32250[(7)]);
var state_32250__$1 = state_32250;
if(cljs.core.truth_(inst_32227)){
var statearr_32259_32279 = state_32250__$1;
(statearr_32259_32279[(1)] = (4));

} else {
var statearr_32260_32280 = state_32250__$1;
(statearr_32260_32280[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32251 === (11))){
var inst_32241 = cljs.core.async.close_BANG_.call(null,ch);
var state_32250__$1 = state_32250;
var statearr_32261_32281 = state_32250__$1;
(statearr_32261_32281[(2)] = inst_32241);

(statearr_32261_32281[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32251 === (9))){
var state_32250__$1 = state_32250;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32262_32282 = state_32250__$1;
(statearr_32262_32282[(1)] = (11));

} else {
var statearr_32263_32283 = state_32250__$1;
(statearr_32263_32283[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32251 === (5))){
var inst_32227 = (state_32250[(7)]);
var state_32250__$1 = state_32250;
var statearr_32264_32284 = state_32250__$1;
(statearr_32264_32284[(2)] = inst_32227);

(statearr_32264_32284[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32251 === (10))){
var inst_32246 = (state_32250[(2)]);
var state_32250__$1 = state_32250;
var statearr_32265_32285 = state_32250__$1;
(statearr_32265_32285[(2)] = inst_32246);

(statearr_32265_32285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32251 === (8))){
var inst_32227 = (state_32250[(7)]);
var inst_32237 = cljs.core.next.call(null,inst_32227);
var inst_32227__$1 = inst_32237;
var state_32250__$1 = (function (){var statearr_32266 = state_32250;
(statearr_32266[(7)] = inst_32227__$1);

return statearr_32266;
})();
var statearr_32267_32286 = state_32250__$1;
(statearr_32267_32286[(2)] = null);

(statearr_32267_32286[(1)] = (2));


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
});})(c__31692__auto__))
;
return ((function (switch__31602__auto__,c__31692__auto__){
return (function() {
var cljs$core$async$state_machine__31603__auto__ = null;
var cljs$core$async$state_machine__31603__auto____0 = (function (){
var statearr_32268 = [null,null,null,null,null,null,null,null];
(statearr_32268[(0)] = cljs$core$async$state_machine__31603__auto__);

(statearr_32268[(1)] = (1));

return statearr_32268;
});
var cljs$core$async$state_machine__31603__auto____1 = (function (state_32250){
while(true){
var ret_value__31604__auto__ = (function (){try{while(true){
var result__31605__auto__ = switch__31602__auto__.call(null,state_32250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31605__auto__;
}
break;
}
}catch (e32269){if((e32269 instanceof Object)){
var ex__31606__auto__ = e32269;
var statearr_32270_32287 = state_32250;
(statearr_32270_32287[(5)] = ex__31606__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32288 = state_32250;
state_32250 = G__32288;
continue;
} else {
return ret_value__31604__auto__;
}
break;
}
});
cljs$core$async$state_machine__31603__auto__ = function(state_32250){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31603__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31603__auto____1.call(this,state_32250);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31603__auto____0;
cljs$core$async$state_machine__31603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31603__auto____1;
return cljs$core$async$state_machine__31603__auto__;
})()
;})(switch__31602__auto__,c__31692__auto__))
})();
var state__31694__auto__ = (function (){var statearr_32271 = f__31693__auto__.call(null);
(statearr_32271[(6)] = c__31692__auto__);

return statearr_32271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31694__auto__);
});})(c__31692__auto__))
);

return c__31692__auto__;
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
var x__26965__auto__ = (((_ == null))?null:_);
var m__26966__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__26965__auto__)]);
if(!((m__26966__auto__ == null))){
return m__26966__auto__.call(null,_);
} else {
var m__26966__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__26966__auto____$1 == null))){
return m__26966__auto____$1.call(null,_);
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
var x__26965__auto__ = (((m == null))?null:m);
var m__26966__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__26965__auto__)]);
if(!((m__26966__auto__ == null))){
return m__26966__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__26966__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__26966__auto____$1 == null))){
return m__26966__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__26965__auto__ = (((m == null))?null:m);
var m__26966__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__26965__auto__)]);
if(!((m__26966__auto__ == null))){
return m__26966__auto__.call(null,m,ch);
} else {
var m__26966__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__26966__auto____$1 == null))){
return m__26966__auto____$1.call(null,m,ch);
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
var x__26965__auto__ = (((m == null))?null:m);
var m__26966__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__26965__auto__)]);
if(!((m__26966__auto__ == null))){
return m__26966__auto__.call(null,m);
} else {
var m__26966__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__26966__auto____$1 == null))){
return m__26966__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async32289 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32289 = (function (ch,cs,meta32290){
this.ch = ch;
this.cs = cs;
this.meta32290 = meta32290;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32291,meta32290__$1){
var self__ = this;
var _32291__$1 = this;
return (new cljs.core.async.t_cljs$core$async32289(self__.ch,self__.cs,meta32290__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async32289.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32291){
var self__ = this;
var _32291__$1 = this;
return self__.meta32290;
});})(cs))
;

cljs.core.async.t_cljs$core$async32289.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32289.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async32289.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32289.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32289.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32289.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32289.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32290","meta32290",277682022,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async32289.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32289.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32289";

cljs.core.async.t_cljs$core$async32289.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__26903__auto__,writer__26904__auto__,opt__26905__auto__){
return cljs.core._write.call(null,writer__26904__auto__,"cljs.core.async/t_cljs$core$async32289");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async32289 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async32289(ch__$1,cs__$1,meta32290){
return (new cljs.core.async.t_cljs$core$async32289(ch__$1,cs__$1,meta32290));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async32289(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__31692__auto___32511 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31692__auto___32511,cs,m,dchan,dctr,done){
return (function (){
var f__31693__auto__ = (function (){var switch__31602__auto__ = ((function (c__31692__auto___32511,cs,m,dchan,dctr,done){
return (function (state_32426){
var state_val_32427 = (state_32426[(1)]);
if((state_val_32427 === (7))){
var inst_32422 = (state_32426[(2)]);
var state_32426__$1 = state_32426;
var statearr_32428_32512 = state_32426__$1;
(statearr_32428_32512[(2)] = inst_32422);

(statearr_32428_32512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (20))){
var inst_32325 = (state_32426[(7)]);
var inst_32337 = cljs.core.first.call(null,inst_32325);
var inst_32338 = cljs.core.nth.call(null,inst_32337,(0),null);
var inst_32339 = cljs.core.nth.call(null,inst_32337,(1),null);
var state_32426__$1 = (function (){var statearr_32429 = state_32426;
(statearr_32429[(8)] = inst_32338);

return statearr_32429;
})();
if(cljs.core.truth_(inst_32339)){
var statearr_32430_32513 = state_32426__$1;
(statearr_32430_32513[(1)] = (22));

} else {
var statearr_32431_32514 = state_32426__$1;
(statearr_32431_32514[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (27))){
var inst_32369 = (state_32426[(9)]);
var inst_32374 = (state_32426[(10)]);
var inst_32294 = (state_32426[(11)]);
var inst_32367 = (state_32426[(12)]);
var inst_32374__$1 = cljs.core._nth.call(null,inst_32367,inst_32369);
var inst_32375 = cljs.core.async.put_BANG_.call(null,inst_32374__$1,inst_32294,done);
var state_32426__$1 = (function (){var statearr_32432 = state_32426;
(statearr_32432[(10)] = inst_32374__$1);

return statearr_32432;
})();
if(cljs.core.truth_(inst_32375)){
var statearr_32433_32515 = state_32426__$1;
(statearr_32433_32515[(1)] = (30));

} else {
var statearr_32434_32516 = state_32426__$1;
(statearr_32434_32516[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (1))){
var state_32426__$1 = state_32426;
var statearr_32435_32517 = state_32426__$1;
(statearr_32435_32517[(2)] = null);

(statearr_32435_32517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (24))){
var inst_32325 = (state_32426[(7)]);
var inst_32344 = (state_32426[(2)]);
var inst_32345 = cljs.core.next.call(null,inst_32325);
var inst_32303 = inst_32345;
var inst_32304 = null;
var inst_32305 = (0);
var inst_32306 = (0);
var state_32426__$1 = (function (){var statearr_32436 = state_32426;
(statearr_32436[(13)] = inst_32344);

(statearr_32436[(14)] = inst_32306);

(statearr_32436[(15)] = inst_32303);

(statearr_32436[(16)] = inst_32304);

(statearr_32436[(17)] = inst_32305);

return statearr_32436;
})();
var statearr_32437_32518 = state_32426__$1;
(statearr_32437_32518[(2)] = null);

(statearr_32437_32518[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (39))){
var state_32426__$1 = state_32426;
var statearr_32441_32519 = state_32426__$1;
(statearr_32441_32519[(2)] = null);

(statearr_32441_32519[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (4))){
var inst_32294 = (state_32426[(11)]);
var inst_32294__$1 = (state_32426[(2)]);
var inst_32295 = (inst_32294__$1 == null);
var state_32426__$1 = (function (){var statearr_32442 = state_32426;
(statearr_32442[(11)] = inst_32294__$1);

return statearr_32442;
})();
if(cljs.core.truth_(inst_32295)){
var statearr_32443_32520 = state_32426__$1;
(statearr_32443_32520[(1)] = (5));

} else {
var statearr_32444_32521 = state_32426__$1;
(statearr_32444_32521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (15))){
var inst_32306 = (state_32426[(14)]);
var inst_32303 = (state_32426[(15)]);
var inst_32304 = (state_32426[(16)]);
var inst_32305 = (state_32426[(17)]);
var inst_32321 = (state_32426[(2)]);
var inst_32322 = (inst_32306 + (1));
var tmp32438 = inst_32303;
var tmp32439 = inst_32304;
var tmp32440 = inst_32305;
var inst_32303__$1 = tmp32438;
var inst_32304__$1 = tmp32439;
var inst_32305__$1 = tmp32440;
var inst_32306__$1 = inst_32322;
var state_32426__$1 = (function (){var statearr_32445 = state_32426;
(statearr_32445[(14)] = inst_32306__$1);

(statearr_32445[(15)] = inst_32303__$1);

(statearr_32445[(18)] = inst_32321);

(statearr_32445[(16)] = inst_32304__$1);

(statearr_32445[(17)] = inst_32305__$1);

return statearr_32445;
})();
var statearr_32446_32522 = state_32426__$1;
(statearr_32446_32522[(2)] = null);

(statearr_32446_32522[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (21))){
var inst_32348 = (state_32426[(2)]);
var state_32426__$1 = state_32426;
var statearr_32450_32523 = state_32426__$1;
(statearr_32450_32523[(2)] = inst_32348);

(statearr_32450_32523[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (31))){
var inst_32374 = (state_32426[(10)]);
var inst_32378 = done.call(null,null);
var inst_32379 = cljs.core.async.untap_STAR_.call(null,m,inst_32374);
var state_32426__$1 = (function (){var statearr_32451 = state_32426;
(statearr_32451[(19)] = inst_32378);

return statearr_32451;
})();
var statearr_32452_32524 = state_32426__$1;
(statearr_32452_32524[(2)] = inst_32379);

(statearr_32452_32524[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (32))){
var inst_32369 = (state_32426[(9)]);
var inst_32368 = (state_32426[(20)]);
var inst_32367 = (state_32426[(12)]);
var inst_32366 = (state_32426[(21)]);
var inst_32381 = (state_32426[(2)]);
var inst_32382 = (inst_32369 + (1));
var tmp32447 = inst_32368;
var tmp32448 = inst_32367;
var tmp32449 = inst_32366;
var inst_32366__$1 = tmp32449;
var inst_32367__$1 = tmp32448;
var inst_32368__$1 = tmp32447;
var inst_32369__$1 = inst_32382;
var state_32426__$1 = (function (){var statearr_32453 = state_32426;
(statearr_32453[(9)] = inst_32369__$1);

(statearr_32453[(20)] = inst_32368__$1);

(statearr_32453[(12)] = inst_32367__$1);

(statearr_32453[(22)] = inst_32381);

(statearr_32453[(21)] = inst_32366__$1);

return statearr_32453;
})();
var statearr_32454_32525 = state_32426__$1;
(statearr_32454_32525[(2)] = null);

(statearr_32454_32525[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (40))){
var inst_32394 = (state_32426[(23)]);
var inst_32398 = done.call(null,null);
var inst_32399 = cljs.core.async.untap_STAR_.call(null,m,inst_32394);
var state_32426__$1 = (function (){var statearr_32455 = state_32426;
(statearr_32455[(24)] = inst_32398);

return statearr_32455;
})();
var statearr_32456_32526 = state_32426__$1;
(statearr_32456_32526[(2)] = inst_32399);

(statearr_32456_32526[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (33))){
var inst_32385 = (state_32426[(25)]);
var inst_32387 = cljs.core.chunked_seq_QMARK_.call(null,inst_32385);
var state_32426__$1 = state_32426;
if(inst_32387){
var statearr_32457_32527 = state_32426__$1;
(statearr_32457_32527[(1)] = (36));

} else {
var statearr_32458_32528 = state_32426__$1;
(statearr_32458_32528[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (13))){
var inst_32315 = (state_32426[(26)]);
var inst_32318 = cljs.core.async.close_BANG_.call(null,inst_32315);
var state_32426__$1 = state_32426;
var statearr_32459_32529 = state_32426__$1;
(statearr_32459_32529[(2)] = inst_32318);

(statearr_32459_32529[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (22))){
var inst_32338 = (state_32426[(8)]);
var inst_32341 = cljs.core.async.close_BANG_.call(null,inst_32338);
var state_32426__$1 = state_32426;
var statearr_32460_32530 = state_32426__$1;
(statearr_32460_32530[(2)] = inst_32341);

(statearr_32460_32530[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (36))){
var inst_32385 = (state_32426[(25)]);
var inst_32389 = cljs.core.chunk_first.call(null,inst_32385);
var inst_32390 = cljs.core.chunk_rest.call(null,inst_32385);
var inst_32391 = cljs.core.count.call(null,inst_32389);
var inst_32366 = inst_32390;
var inst_32367 = inst_32389;
var inst_32368 = inst_32391;
var inst_32369 = (0);
var state_32426__$1 = (function (){var statearr_32461 = state_32426;
(statearr_32461[(9)] = inst_32369);

(statearr_32461[(20)] = inst_32368);

(statearr_32461[(12)] = inst_32367);

(statearr_32461[(21)] = inst_32366);

return statearr_32461;
})();
var statearr_32462_32531 = state_32426__$1;
(statearr_32462_32531[(2)] = null);

(statearr_32462_32531[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (41))){
var inst_32385 = (state_32426[(25)]);
var inst_32401 = (state_32426[(2)]);
var inst_32402 = cljs.core.next.call(null,inst_32385);
var inst_32366 = inst_32402;
var inst_32367 = null;
var inst_32368 = (0);
var inst_32369 = (0);
var state_32426__$1 = (function (){var statearr_32463 = state_32426;
(statearr_32463[(9)] = inst_32369);

(statearr_32463[(27)] = inst_32401);

(statearr_32463[(20)] = inst_32368);

(statearr_32463[(12)] = inst_32367);

(statearr_32463[(21)] = inst_32366);

return statearr_32463;
})();
var statearr_32464_32532 = state_32426__$1;
(statearr_32464_32532[(2)] = null);

(statearr_32464_32532[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (43))){
var state_32426__$1 = state_32426;
var statearr_32465_32533 = state_32426__$1;
(statearr_32465_32533[(2)] = null);

(statearr_32465_32533[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (29))){
var inst_32410 = (state_32426[(2)]);
var state_32426__$1 = state_32426;
var statearr_32466_32534 = state_32426__$1;
(statearr_32466_32534[(2)] = inst_32410);

(statearr_32466_32534[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (44))){
var inst_32419 = (state_32426[(2)]);
var state_32426__$1 = (function (){var statearr_32467 = state_32426;
(statearr_32467[(28)] = inst_32419);

return statearr_32467;
})();
var statearr_32468_32535 = state_32426__$1;
(statearr_32468_32535[(2)] = null);

(statearr_32468_32535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (6))){
var inst_32358 = (state_32426[(29)]);
var inst_32357 = cljs.core.deref.call(null,cs);
var inst_32358__$1 = cljs.core.keys.call(null,inst_32357);
var inst_32359 = cljs.core.count.call(null,inst_32358__$1);
var inst_32360 = cljs.core.reset_BANG_.call(null,dctr,inst_32359);
var inst_32365 = cljs.core.seq.call(null,inst_32358__$1);
var inst_32366 = inst_32365;
var inst_32367 = null;
var inst_32368 = (0);
var inst_32369 = (0);
var state_32426__$1 = (function (){var statearr_32469 = state_32426;
(statearr_32469[(9)] = inst_32369);

(statearr_32469[(20)] = inst_32368);

(statearr_32469[(29)] = inst_32358__$1);

(statearr_32469[(12)] = inst_32367);

(statearr_32469[(30)] = inst_32360);

(statearr_32469[(21)] = inst_32366);

return statearr_32469;
})();
var statearr_32470_32536 = state_32426__$1;
(statearr_32470_32536[(2)] = null);

(statearr_32470_32536[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (28))){
var inst_32385 = (state_32426[(25)]);
var inst_32366 = (state_32426[(21)]);
var inst_32385__$1 = cljs.core.seq.call(null,inst_32366);
var state_32426__$1 = (function (){var statearr_32471 = state_32426;
(statearr_32471[(25)] = inst_32385__$1);

return statearr_32471;
})();
if(inst_32385__$1){
var statearr_32472_32537 = state_32426__$1;
(statearr_32472_32537[(1)] = (33));

} else {
var statearr_32473_32538 = state_32426__$1;
(statearr_32473_32538[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (25))){
var inst_32369 = (state_32426[(9)]);
var inst_32368 = (state_32426[(20)]);
var inst_32371 = (inst_32369 < inst_32368);
var inst_32372 = inst_32371;
var state_32426__$1 = state_32426;
if(cljs.core.truth_(inst_32372)){
var statearr_32474_32539 = state_32426__$1;
(statearr_32474_32539[(1)] = (27));

} else {
var statearr_32475_32540 = state_32426__$1;
(statearr_32475_32540[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (34))){
var state_32426__$1 = state_32426;
var statearr_32476_32541 = state_32426__$1;
(statearr_32476_32541[(2)] = null);

(statearr_32476_32541[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (17))){
var state_32426__$1 = state_32426;
var statearr_32477_32542 = state_32426__$1;
(statearr_32477_32542[(2)] = null);

(statearr_32477_32542[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (3))){
var inst_32424 = (state_32426[(2)]);
var state_32426__$1 = state_32426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32426__$1,inst_32424);
} else {
if((state_val_32427 === (12))){
var inst_32353 = (state_32426[(2)]);
var state_32426__$1 = state_32426;
var statearr_32478_32543 = state_32426__$1;
(statearr_32478_32543[(2)] = inst_32353);

(statearr_32478_32543[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (2))){
var state_32426__$1 = state_32426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32426__$1,(4),ch);
} else {
if((state_val_32427 === (23))){
var state_32426__$1 = state_32426;
var statearr_32479_32544 = state_32426__$1;
(statearr_32479_32544[(2)] = null);

(statearr_32479_32544[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (35))){
var inst_32408 = (state_32426[(2)]);
var state_32426__$1 = state_32426;
var statearr_32480_32545 = state_32426__$1;
(statearr_32480_32545[(2)] = inst_32408);

(statearr_32480_32545[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (19))){
var inst_32325 = (state_32426[(7)]);
var inst_32329 = cljs.core.chunk_first.call(null,inst_32325);
var inst_32330 = cljs.core.chunk_rest.call(null,inst_32325);
var inst_32331 = cljs.core.count.call(null,inst_32329);
var inst_32303 = inst_32330;
var inst_32304 = inst_32329;
var inst_32305 = inst_32331;
var inst_32306 = (0);
var state_32426__$1 = (function (){var statearr_32481 = state_32426;
(statearr_32481[(14)] = inst_32306);

(statearr_32481[(15)] = inst_32303);

(statearr_32481[(16)] = inst_32304);

(statearr_32481[(17)] = inst_32305);

return statearr_32481;
})();
var statearr_32482_32546 = state_32426__$1;
(statearr_32482_32546[(2)] = null);

(statearr_32482_32546[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (11))){
var inst_32325 = (state_32426[(7)]);
var inst_32303 = (state_32426[(15)]);
var inst_32325__$1 = cljs.core.seq.call(null,inst_32303);
var state_32426__$1 = (function (){var statearr_32483 = state_32426;
(statearr_32483[(7)] = inst_32325__$1);

return statearr_32483;
})();
if(inst_32325__$1){
var statearr_32484_32547 = state_32426__$1;
(statearr_32484_32547[(1)] = (16));

} else {
var statearr_32485_32548 = state_32426__$1;
(statearr_32485_32548[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (9))){
var inst_32355 = (state_32426[(2)]);
var state_32426__$1 = state_32426;
var statearr_32486_32549 = state_32426__$1;
(statearr_32486_32549[(2)] = inst_32355);

(statearr_32486_32549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (5))){
var inst_32301 = cljs.core.deref.call(null,cs);
var inst_32302 = cljs.core.seq.call(null,inst_32301);
var inst_32303 = inst_32302;
var inst_32304 = null;
var inst_32305 = (0);
var inst_32306 = (0);
var state_32426__$1 = (function (){var statearr_32487 = state_32426;
(statearr_32487[(14)] = inst_32306);

(statearr_32487[(15)] = inst_32303);

(statearr_32487[(16)] = inst_32304);

(statearr_32487[(17)] = inst_32305);

return statearr_32487;
})();
var statearr_32488_32550 = state_32426__$1;
(statearr_32488_32550[(2)] = null);

(statearr_32488_32550[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (14))){
var state_32426__$1 = state_32426;
var statearr_32489_32551 = state_32426__$1;
(statearr_32489_32551[(2)] = null);

(statearr_32489_32551[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (45))){
var inst_32416 = (state_32426[(2)]);
var state_32426__$1 = state_32426;
var statearr_32490_32552 = state_32426__$1;
(statearr_32490_32552[(2)] = inst_32416);

(statearr_32490_32552[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (26))){
var inst_32358 = (state_32426[(29)]);
var inst_32412 = (state_32426[(2)]);
var inst_32413 = cljs.core.seq.call(null,inst_32358);
var state_32426__$1 = (function (){var statearr_32491 = state_32426;
(statearr_32491[(31)] = inst_32412);

return statearr_32491;
})();
if(inst_32413){
var statearr_32492_32553 = state_32426__$1;
(statearr_32492_32553[(1)] = (42));

} else {
var statearr_32493_32554 = state_32426__$1;
(statearr_32493_32554[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (16))){
var inst_32325 = (state_32426[(7)]);
var inst_32327 = cljs.core.chunked_seq_QMARK_.call(null,inst_32325);
var state_32426__$1 = state_32426;
if(inst_32327){
var statearr_32494_32555 = state_32426__$1;
(statearr_32494_32555[(1)] = (19));

} else {
var statearr_32495_32556 = state_32426__$1;
(statearr_32495_32556[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (38))){
var inst_32405 = (state_32426[(2)]);
var state_32426__$1 = state_32426;
var statearr_32496_32557 = state_32426__$1;
(statearr_32496_32557[(2)] = inst_32405);

(statearr_32496_32557[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (30))){
var state_32426__$1 = state_32426;
var statearr_32497_32558 = state_32426__$1;
(statearr_32497_32558[(2)] = null);

(statearr_32497_32558[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (10))){
var inst_32306 = (state_32426[(14)]);
var inst_32304 = (state_32426[(16)]);
var inst_32314 = cljs.core._nth.call(null,inst_32304,inst_32306);
var inst_32315 = cljs.core.nth.call(null,inst_32314,(0),null);
var inst_32316 = cljs.core.nth.call(null,inst_32314,(1),null);
var state_32426__$1 = (function (){var statearr_32498 = state_32426;
(statearr_32498[(26)] = inst_32315);

return statearr_32498;
})();
if(cljs.core.truth_(inst_32316)){
var statearr_32499_32559 = state_32426__$1;
(statearr_32499_32559[(1)] = (13));

} else {
var statearr_32500_32560 = state_32426__$1;
(statearr_32500_32560[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (18))){
var inst_32351 = (state_32426[(2)]);
var state_32426__$1 = state_32426;
var statearr_32501_32561 = state_32426__$1;
(statearr_32501_32561[(2)] = inst_32351);

(statearr_32501_32561[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (42))){
var state_32426__$1 = state_32426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32426__$1,(45),dchan);
} else {
if((state_val_32427 === (37))){
var inst_32294 = (state_32426[(11)]);
var inst_32385 = (state_32426[(25)]);
var inst_32394 = (state_32426[(23)]);
var inst_32394__$1 = cljs.core.first.call(null,inst_32385);
var inst_32395 = cljs.core.async.put_BANG_.call(null,inst_32394__$1,inst_32294,done);
var state_32426__$1 = (function (){var statearr_32502 = state_32426;
(statearr_32502[(23)] = inst_32394__$1);

return statearr_32502;
})();
if(cljs.core.truth_(inst_32395)){
var statearr_32503_32562 = state_32426__$1;
(statearr_32503_32562[(1)] = (39));

} else {
var statearr_32504_32563 = state_32426__$1;
(statearr_32504_32563[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (8))){
var inst_32306 = (state_32426[(14)]);
var inst_32305 = (state_32426[(17)]);
var inst_32308 = (inst_32306 < inst_32305);
var inst_32309 = inst_32308;
var state_32426__$1 = state_32426;
if(cljs.core.truth_(inst_32309)){
var statearr_32505_32564 = state_32426__$1;
(statearr_32505_32564[(1)] = (10));

} else {
var statearr_32506_32565 = state_32426__$1;
(statearr_32506_32565[(1)] = (11));

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
});})(c__31692__auto___32511,cs,m,dchan,dctr,done))
;
return ((function (switch__31602__auto__,c__31692__auto___32511,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31603__auto__ = null;
var cljs$core$async$mult_$_state_machine__31603__auto____0 = (function (){
var statearr_32507 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32507[(0)] = cljs$core$async$mult_$_state_machine__31603__auto__);

(statearr_32507[(1)] = (1));

return statearr_32507;
});
var cljs$core$async$mult_$_state_machine__31603__auto____1 = (function (state_32426){
while(true){
var ret_value__31604__auto__ = (function (){try{while(true){
var result__31605__auto__ = switch__31602__auto__.call(null,state_32426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31605__auto__;
}
break;
}
}catch (e32508){if((e32508 instanceof Object)){
var ex__31606__auto__ = e32508;
var statearr_32509_32566 = state_32426;
(statearr_32509_32566[(5)] = ex__31606__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32567 = state_32426;
state_32426 = G__32567;
continue;
} else {
return ret_value__31604__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31603__auto__ = function(state_32426){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31603__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31603__auto____1.call(this,state_32426);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__31603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31603__auto____0;
cljs$core$async$mult_$_state_machine__31603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31603__auto____1;
return cljs$core$async$mult_$_state_machine__31603__auto__;
})()
;})(switch__31602__auto__,c__31692__auto___32511,cs,m,dchan,dctr,done))
})();
var state__31694__auto__ = (function (){var statearr_32510 = f__31693__auto__.call(null);
(statearr_32510[(6)] = c__31692__auto___32511);

return statearr_32510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31694__auto__);
});})(c__31692__auto___32511,cs,m,dchan,dctr,done))
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
var G__32569 = arguments.length;
switch (G__32569) {
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
var x__26965__auto__ = (((m == null))?null:m);
var m__26966__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__26965__auto__)]);
if(!((m__26966__auto__ == null))){
return m__26966__auto__.call(null,m,ch);
} else {
var m__26966__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__26966__auto____$1 == null))){
return m__26966__auto____$1.call(null,m,ch);
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
var x__26965__auto__ = (((m == null))?null:m);
var m__26966__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__26965__auto__)]);
if(!((m__26966__auto__ == null))){
return m__26966__auto__.call(null,m,ch);
} else {
var m__26966__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__26966__auto____$1 == null))){
return m__26966__auto____$1.call(null,m,ch);
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
var x__26965__auto__ = (((m == null))?null:m);
var m__26966__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__26965__auto__)]);
if(!((m__26966__auto__ == null))){
return m__26966__auto__.call(null,m);
} else {
var m__26966__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__26966__auto____$1 == null))){
return m__26966__auto____$1.call(null,m);
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
var x__26965__auto__ = (((m == null))?null:m);
var m__26966__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__26965__auto__)]);
if(!((m__26966__auto__ == null))){
return m__26966__auto__.call(null,m,state_map);
} else {
var m__26966__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__26966__auto____$1 == null))){
return m__26966__auto____$1.call(null,m,state_map);
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
var x__26965__auto__ = (((m == null))?null:m);
var m__26966__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__26965__auto__)]);
if(!((m__26966__auto__ == null))){
return m__26966__auto__.call(null,m,mode);
} else {
var m__26966__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__26966__auto____$1 == null))){
return m__26966__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__27518__auto__ = [];
var len__27511__auto___32581 = arguments.length;
var i__27512__auto___32582 = (0);
while(true){
if((i__27512__auto___32582 < len__27511__auto___32581)){
args__27518__auto__.push((arguments[i__27512__auto___32582]));

var G__32583 = (i__27512__auto___32582 + (1));
i__27512__auto___32582 = G__32583;
continue;
} else {
}
break;
}

var argseq__27519__auto__ = ((((3) < args__27518__auto__.length))?(new cljs.core.IndexedSeq(args__27518__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27519__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32575){
var map__32576 = p__32575;
var map__32576__$1 = ((((!((map__32576 == null)))?((((map__32576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32576.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32576):map__32576);
var opts = map__32576__$1;
var statearr_32578_32584 = state;
(statearr_32578_32584[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__32576,map__32576__$1,opts){
return (function (val){
var statearr_32579_32585 = state;
(statearr_32579_32585[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32576,map__32576__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_32580_32586 = state;
(statearr_32580_32586[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32571){
var G__32572 = cljs.core.first.call(null,seq32571);
var seq32571__$1 = cljs.core.next.call(null,seq32571);
var G__32573 = cljs.core.first.call(null,seq32571__$1);
var seq32571__$2 = cljs.core.next.call(null,seq32571__$1);
var G__32574 = cljs.core.first.call(null,seq32571__$2);
var seq32571__$3 = cljs.core.next.call(null,seq32571__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32572,G__32573,G__32574,seq32571__$3);
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
if(typeof cljs.core.async.t_cljs$core$async32587 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32587 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta32588){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta32588 = meta32588;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32589,meta32588__$1){
var self__ = this;
var _32589__$1 = this;
return (new cljs.core.async.t_cljs$core$async32587(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta32588__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32587.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32589){
var self__ = this;
var _32589__$1 = this;
return self__.meta32588;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32587.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32587.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32587.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32587.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32587.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32587.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32587.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32587.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async32587.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta32588","meta32588",-1751436326,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32587.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32587.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32587";

cljs.core.async.t_cljs$core$async32587.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__26903__auto__,writer__26904__auto__,opt__26905__auto__){
return cljs.core._write.call(null,writer__26904__auto__,"cljs.core.async/t_cljs$core$async32587");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async32587 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32587(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta32588){
return (new cljs.core.async.t_cljs$core$async32587(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta32588));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32587(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31692__auto___32751 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31692__auto___32751,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31693__auto__ = (function (){var switch__31602__auto__ = ((function (c__31692__auto___32751,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32691){
var state_val_32692 = (state_32691[(1)]);
if((state_val_32692 === (7))){
var inst_32606 = (state_32691[(2)]);
var state_32691__$1 = state_32691;
var statearr_32693_32752 = state_32691__$1;
(statearr_32693_32752[(2)] = inst_32606);

(statearr_32693_32752[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (20))){
var inst_32618 = (state_32691[(7)]);
var state_32691__$1 = state_32691;
var statearr_32694_32753 = state_32691__$1;
(statearr_32694_32753[(2)] = inst_32618);

(statearr_32694_32753[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (27))){
var state_32691__$1 = state_32691;
var statearr_32695_32754 = state_32691__$1;
(statearr_32695_32754[(2)] = null);

(statearr_32695_32754[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (1))){
var inst_32593 = (state_32691[(8)]);
var inst_32593__$1 = calc_state.call(null);
var inst_32595 = (inst_32593__$1 == null);
var inst_32596 = cljs.core.not.call(null,inst_32595);
var state_32691__$1 = (function (){var statearr_32696 = state_32691;
(statearr_32696[(8)] = inst_32593__$1);

return statearr_32696;
})();
if(inst_32596){
var statearr_32697_32755 = state_32691__$1;
(statearr_32697_32755[(1)] = (2));

} else {
var statearr_32698_32756 = state_32691__$1;
(statearr_32698_32756[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (24))){
var inst_32642 = (state_32691[(9)]);
var inst_32665 = (state_32691[(10)]);
var inst_32651 = (state_32691[(11)]);
var inst_32665__$1 = inst_32642.call(null,inst_32651);
var state_32691__$1 = (function (){var statearr_32699 = state_32691;
(statearr_32699[(10)] = inst_32665__$1);

return statearr_32699;
})();
if(cljs.core.truth_(inst_32665__$1)){
var statearr_32700_32757 = state_32691__$1;
(statearr_32700_32757[(1)] = (29));

} else {
var statearr_32701_32758 = state_32691__$1;
(statearr_32701_32758[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (4))){
var inst_32609 = (state_32691[(2)]);
var state_32691__$1 = state_32691;
if(cljs.core.truth_(inst_32609)){
var statearr_32702_32759 = state_32691__$1;
(statearr_32702_32759[(1)] = (8));

} else {
var statearr_32703_32760 = state_32691__$1;
(statearr_32703_32760[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (15))){
var inst_32636 = (state_32691[(2)]);
var state_32691__$1 = state_32691;
if(cljs.core.truth_(inst_32636)){
var statearr_32704_32761 = state_32691__$1;
(statearr_32704_32761[(1)] = (19));

} else {
var statearr_32705_32762 = state_32691__$1;
(statearr_32705_32762[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (21))){
var inst_32641 = (state_32691[(12)]);
var inst_32641__$1 = (state_32691[(2)]);
var inst_32642 = cljs.core.get.call(null,inst_32641__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32643 = cljs.core.get.call(null,inst_32641__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32644 = cljs.core.get.call(null,inst_32641__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32691__$1 = (function (){var statearr_32706 = state_32691;
(statearr_32706[(12)] = inst_32641__$1);

(statearr_32706[(9)] = inst_32642);

(statearr_32706[(13)] = inst_32643);

return statearr_32706;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32691__$1,(22),inst_32644);
} else {
if((state_val_32692 === (31))){
var inst_32673 = (state_32691[(2)]);
var state_32691__$1 = state_32691;
if(cljs.core.truth_(inst_32673)){
var statearr_32707_32763 = state_32691__$1;
(statearr_32707_32763[(1)] = (32));

} else {
var statearr_32708_32764 = state_32691__$1;
(statearr_32708_32764[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (32))){
var inst_32650 = (state_32691[(14)]);
var state_32691__$1 = state_32691;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32691__$1,(35),out,inst_32650);
} else {
if((state_val_32692 === (33))){
var inst_32641 = (state_32691[(12)]);
var inst_32618 = inst_32641;
var state_32691__$1 = (function (){var statearr_32709 = state_32691;
(statearr_32709[(7)] = inst_32618);

return statearr_32709;
})();
var statearr_32710_32765 = state_32691__$1;
(statearr_32710_32765[(2)] = null);

(statearr_32710_32765[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (13))){
var inst_32618 = (state_32691[(7)]);
var inst_32625 = inst_32618.cljs$lang$protocol_mask$partition0$;
var inst_32626 = (inst_32625 & (64));
var inst_32627 = inst_32618.cljs$core$ISeq$;
var inst_32628 = (cljs.core.PROTOCOL_SENTINEL === inst_32627);
var inst_32629 = (inst_32626) || (inst_32628);
var state_32691__$1 = state_32691;
if(cljs.core.truth_(inst_32629)){
var statearr_32711_32766 = state_32691__$1;
(statearr_32711_32766[(1)] = (16));

} else {
var statearr_32712_32767 = state_32691__$1;
(statearr_32712_32767[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (22))){
var inst_32650 = (state_32691[(14)]);
var inst_32651 = (state_32691[(11)]);
var inst_32649 = (state_32691[(2)]);
var inst_32650__$1 = cljs.core.nth.call(null,inst_32649,(0),null);
var inst_32651__$1 = cljs.core.nth.call(null,inst_32649,(1),null);
var inst_32652 = (inst_32650__$1 == null);
var inst_32653 = cljs.core._EQ_.call(null,inst_32651__$1,change);
var inst_32654 = (inst_32652) || (inst_32653);
var state_32691__$1 = (function (){var statearr_32713 = state_32691;
(statearr_32713[(14)] = inst_32650__$1);

(statearr_32713[(11)] = inst_32651__$1);

return statearr_32713;
})();
if(cljs.core.truth_(inst_32654)){
var statearr_32714_32768 = state_32691__$1;
(statearr_32714_32768[(1)] = (23));

} else {
var statearr_32715_32769 = state_32691__$1;
(statearr_32715_32769[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (36))){
var inst_32641 = (state_32691[(12)]);
var inst_32618 = inst_32641;
var state_32691__$1 = (function (){var statearr_32716 = state_32691;
(statearr_32716[(7)] = inst_32618);

return statearr_32716;
})();
var statearr_32717_32770 = state_32691__$1;
(statearr_32717_32770[(2)] = null);

(statearr_32717_32770[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (29))){
var inst_32665 = (state_32691[(10)]);
var state_32691__$1 = state_32691;
var statearr_32718_32771 = state_32691__$1;
(statearr_32718_32771[(2)] = inst_32665);

(statearr_32718_32771[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (6))){
var state_32691__$1 = state_32691;
var statearr_32719_32772 = state_32691__$1;
(statearr_32719_32772[(2)] = false);

(statearr_32719_32772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (28))){
var inst_32661 = (state_32691[(2)]);
var inst_32662 = calc_state.call(null);
var inst_32618 = inst_32662;
var state_32691__$1 = (function (){var statearr_32720 = state_32691;
(statearr_32720[(7)] = inst_32618);

(statearr_32720[(15)] = inst_32661);

return statearr_32720;
})();
var statearr_32721_32773 = state_32691__$1;
(statearr_32721_32773[(2)] = null);

(statearr_32721_32773[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (25))){
var inst_32687 = (state_32691[(2)]);
var state_32691__$1 = state_32691;
var statearr_32722_32774 = state_32691__$1;
(statearr_32722_32774[(2)] = inst_32687);

(statearr_32722_32774[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (34))){
var inst_32685 = (state_32691[(2)]);
var state_32691__$1 = state_32691;
var statearr_32723_32775 = state_32691__$1;
(statearr_32723_32775[(2)] = inst_32685);

(statearr_32723_32775[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (17))){
var state_32691__$1 = state_32691;
var statearr_32724_32776 = state_32691__$1;
(statearr_32724_32776[(2)] = false);

(statearr_32724_32776[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (3))){
var state_32691__$1 = state_32691;
var statearr_32725_32777 = state_32691__$1;
(statearr_32725_32777[(2)] = false);

(statearr_32725_32777[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (12))){
var inst_32689 = (state_32691[(2)]);
var state_32691__$1 = state_32691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32691__$1,inst_32689);
} else {
if((state_val_32692 === (2))){
var inst_32593 = (state_32691[(8)]);
var inst_32598 = inst_32593.cljs$lang$protocol_mask$partition0$;
var inst_32599 = (inst_32598 & (64));
var inst_32600 = inst_32593.cljs$core$ISeq$;
var inst_32601 = (cljs.core.PROTOCOL_SENTINEL === inst_32600);
var inst_32602 = (inst_32599) || (inst_32601);
var state_32691__$1 = state_32691;
if(cljs.core.truth_(inst_32602)){
var statearr_32726_32778 = state_32691__$1;
(statearr_32726_32778[(1)] = (5));

} else {
var statearr_32727_32779 = state_32691__$1;
(statearr_32727_32779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (23))){
var inst_32650 = (state_32691[(14)]);
var inst_32656 = (inst_32650 == null);
var state_32691__$1 = state_32691;
if(cljs.core.truth_(inst_32656)){
var statearr_32728_32780 = state_32691__$1;
(statearr_32728_32780[(1)] = (26));

} else {
var statearr_32729_32781 = state_32691__$1;
(statearr_32729_32781[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (35))){
var inst_32676 = (state_32691[(2)]);
var state_32691__$1 = state_32691;
if(cljs.core.truth_(inst_32676)){
var statearr_32730_32782 = state_32691__$1;
(statearr_32730_32782[(1)] = (36));

} else {
var statearr_32731_32783 = state_32691__$1;
(statearr_32731_32783[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (19))){
var inst_32618 = (state_32691[(7)]);
var inst_32638 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32618);
var state_32691__$1 = state_32691;
var statearr_32732_32784 = state_32691__$1;
(statearr_32732_32784[(2)] = inst_32638);

(statearr_32732_32784[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (11))){
var inst_32618 = (state_32691[(7)]);
var inst_32622 = (inst_32618 == null);
var inst_32623 = cljs.core.not.call(null,inst_32622);
var state_32691__$1 = state_32691;
if(inst_32623){
var statearr_32733_32785 = state_32691__$1;
(statearr_32733_32785[(1)] = (13));

} else {
var statearr_32734_32786 = state_32691__$1;
(statearr_32734_32786[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (9))){
var inst_32593 = (state_32691[(8)]);
var state_32691__$1 = state_32691;
var statearr_32735_32787 = state_32691__$1;
(statearr_32735_32787[(2)] = inst_32593);

(statearr_32735_32787[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (5))){
var state_32691__$1 = state_32691;
var statearr_32736_32788 = state_32691__$1;
(statearr_32736_32788[(2)] = true);

(statearr_32736_32788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (14))){
var state_32691__$1 = state_32691;
var statearr_32737_32789 = state_32691__$1;
(statearr_32737_32789[(2)] = false);

(statearr_32737_32789[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (26))){
var inst_32651 = (state_32691[(11)]);
var inst_32658 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32651);
var state_32691__$1 = state_32691;
var statearr_32738_32790 = state_32691__$1;
(statearr_32738_32790[(2)] = inst_32658);

(statearr_32738_32790[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (16))){
var state_32691__$1 = state_32691;
var statearr_32739_32791 = state_32691__$1;
(statearr_32739_32791[(2)] = true);

(statearr_32739_32791[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (38))){
var inst_32681 = (state_32691[(2)]);
var state_32691__$1 = state_32691;
var statearr_32740_32792 = state_32691__$1;
(statearr_32740_32792[(2)] = inst_32681);

(statearr_32740_32792[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (30))){
var inst_32642 = (state_32691[(9)]);
var inst_32643 = (state_32691[(13)]);
var inst_32651 = (state_32691[(11)]);
var inst_32668 = cljs.core.empty_QMARK_.call(null,inst_32642);
var inst_32669 = inst_32643.call(null,inst_32651);
var inst_32670 = cljs.core.not.call(null,inst_32669);
var inst_32671 = (inst_32668) && (inst_32670);
var state_32691__$1 = state_32691;
var statearr_32741_32793 = state_32691__$1;
(statearr_32741_32793[(2)] = inst_32671);

(statearr_32741_32793[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (10))){
var inst_32593 = (state_32691[(8)]);
var inst_32614 = (state_32691[(2)]);
var inst_32615 = cljs.core.get.call(null,inst_32614,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32616 = cljs.core.get.call(null,inst_32614,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32617 = cljs.core.get.call(null,inst_32614,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32618 = inst_32593;
var state_32691__$1 = (function (){var statearr_32742 = state_32691;
(statearr_32742[(16)] = inst_32616);

(statearr_32742[(17)] = inst_32615);

(statearr_32742[(7)] = inst_32618);

(statearr_32742[(18)] = inst_32617);

return statearr_32742;
})();
var statearr_32743_32794 = state_32691__$1;
(statearr_32743_32794[(2)] = null);

(statearr_32743_32794[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (18))){
var inst_32633 = (state_32691[(2)]);
var state_32691__$1 = state_32691;
var statearr_32744_32795 = state_32691__$1;
(statearr_32744_32795[(2)] = inst_32633);

(statearr_32744_32795[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (37))){
var state_32691__$1 = state_32691;
var statearr_32745_32796 = state_32691__$1;
(statearr_32745_32796[(2)] = null);

(statearr_32745_32796[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (8))){
var inst_32593 = (state_32691[(8)]);
var inst_32611 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32593);
var state_32691__$1 = state_32691;
var statearr_32746_32797 = state_32691__$1;
(statearr_32746_32797[(2)] = inst_32611);

(statearr_32746_32797[(1)] = (10));


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
});})(c__31692__auto___32751,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31602__auto__,c__31692__auto___32751,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31603__auto__ = null;
var cljs$core$async$mix_$_state_machine__31603__auto____0 = (function (){
var statearr_32747 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32747[(0)] = cljs$core$async$mix_$_state_machine__31603__auto__);

(statearr_32747[(1)] = (1));

return statearr_32747;
});
var cljs$core$async$mix_$_state_machine__31603__auto____1 = (function (state_32691){
while(true){
var ret_value__31604__auto__ = (function (){try{while(true){
var result__31605__auto__ = switch__31602__auto__.call(null,state_32691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31605__auto__;
}
break;
}
}catch (e32748){if((e32748 instanceof Object)){
var ex__31606__auto__ = e32748;
var statearr_32749_32798 = state_32691;
(statearr_32749_32798[(5)] = ex__31606__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32799 = state_32691;
state_32691 = G__32799;
continue;
} else {
return ret_value__31604__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31603__auto__ = function(state_32691){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31603__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31603__auto____1.call(this,state_32691);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__31603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31603__auto____0;
cljs$core$async$mix_$_state_machine__31603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31603__auto____1;
return cljs$core$async$mix_$_state_machine__31603__auto__;
})()
;})(switch__31602__auto__,c__31692__auto___32751,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31694__auto__ = (function (){var statearr_32750 = f__31693__auto__.call(null);
(statearr_32750[(6)] = c__31692__auto___32751);

return statearr_32750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31694__auto__);
});})(c__31692__auto___32751,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__26965__auto__ = (((p == null))?null:p);
var m__26966__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__26965__auto__)]);
if(!((m__26966__auto__ == null))){
return m__26966__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__26966__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__26966__auto____$1 == null))){
return m__26966__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__26965__auto__ = (((p == null))?null:p);
var m__26966__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__26965__auto__)]);
if(!((m__26966__auto__ == null))){
return m__26966__auto__.call(null,p,v,ch);
} else {
var m__26966__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__26966__auto____$1 == null))){
return m__26966__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32801 = arguments.length;
switch (G__32801) {
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
var x__26965__auto__ = (((p == null))?null:p);
var m__26966__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26965__auto__)]);
if(!((m__26966__auto__ == null))){
return m__26966__auto__.call(null,p);
} else {
var m__26966__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26966__auto____$1 == null))){
return m__26966__auto____$1.call(null,p);
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
var x__26965__auto__ = (((p == null))?null:p);
var m__26966__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26965__auto__)]);
if(!((m__26966__auto__ == null))){
return m__26966__auto__.call(null,p,v);
} else {
var m__26966__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26966__auto____$1 == null))){
return m__26966__auto____$1.call(null,p,v);
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
var G__32805 = arguments.length;
switch (G__32805) {
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
var or__26232__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__26232__auto__)){
return or__26232__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__26232__auto__,mults){
return (function (p1__32803_SHARP_){
if(cljs.core.truth_(p1__32803_SHARP_.call(null,topic))){
return p1__32803_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32803_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__26232__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async32806 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32806 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32807){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32807 = meta32807;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32806.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32808,meta32807__$1){
var self__ = this;
var _32808__$1 = this;
return (new cljs.core.async.t_cljs$core$async32806(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32807__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32806.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32808){
var self__ = this;
var _32808__$1 = this;
return self__.meta32807;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32806.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32806.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32806.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32806.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32806.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async32806.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32806.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32806.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32807","meta32807",1456055208,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32806.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32806.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32806";

cljs.core.async.t_cljs$core$async32806.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__26903__auto__,writer__26904__auto__,opt__26905__auto__){
return cljs.core._write.call(null,writer__26904__auto__,"cljs.core.async/t_cljs$core$async32806");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async32806 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32806(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32807){
return (new cljs.core.async.t_cljs$core$async32806(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32807));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32806(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31692__auto___32926 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31692__auto___32926,mults,ensure_mult,p){
return (function (){
var f__31693__auto__ = (function (){var switch__31602__auto__ = ((function (c__31692__auto___32926,mults,ensure_mult,p){
return (function (state_32880){
var state_val_32881 = (state_32880[(1)]);
if((state_val_32881 === (7))){
var inst_32876 = (state_32880[(2)]);
var state_32880__$1 = state_32880;
var statearr_32882_32927 = state_32880__$1;
(statearr_32882_32927[(2)] = inst_32876);

(statearr_32882_32927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (20))){
var state_32880__$1 = state_32880;
var statearr_32883_32928 = state_32880__$1;
(statearr_32883_32928[(2)] = null);

(statearr_32883_32928[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (1))){
var state_32880__$1 = state_32880;
var statearr_32884_32929 = state_32880__$1;
(statearr_32884_32929[(2)] = null);

(statearr_32884_32929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (24))){
var inst_32859 = (state_32880[(7)]);
var inst_32868 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32859);
var state_32880__$1 = state_32880;
var statearr_32885_32930 = state_32880__$1;
(statearr_32885_32930[(2)] = inst_32868);

(statearr_32885_32930[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (4))){
var inst_32811 = (state_32880[(8)]);
var inst_32811__$1 = (state_32880[(2)]);
var inst_32812 = (inst_32811__$1 == null);
var state_32880__$1 = (function (){var statearr_32886 = state_32880;
(statearr_32886[(8)] = inst_32811__$1);

return statearr_32886;
})();
if(cljs.core.truth_(inst_32812)){
var statearr_32887_32931 = state_32880__$1;
(statearr_32887_32931[(1)] = (5));

} else {
var statearr_32888_32932 = state_32880__$1;
(statearr_32888_32932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (15))){
var inst_32853 = (state_32880[(2)]);
var state_32880__$1 = state_32880;
var statearr_32889_32933 = state_32880__$1;
(statearr_32889_32933[(2)] = inst_32853);

(statearr_32889_32933[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (21))){
var inst_32873 = (state_32880[(2)]);
var state_32880__$1 = (function (){var statearr_32890 = state_32880;
(statearr_32890[(9)] = inst_32873);

return statearr_32890;
})();
var statearr_32891_32934 = state_32880__$1;
(statearr_32891_32934[(2)] = null);

(statearr_32891_32934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (13))){
var inst_32835 = (state_32880[(10)]);
var inst_32837 = cljs.core.chunked_seq_QMARK_.call(null,inst_32835);
var state_32880__$1 = state_32880;
if(inst_32837){
var statearr_32892_32935 = state_32880__$1;
(statearr_32892_32935[(1)] = (16));

} else {
var statearr_32893_32936 = state_32880__$1;
(statearr_32893_32936[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (22))){
var inst_32865 = (state_32880[(2)]);
var state_32880__$1 = state_32880;
if(cljs.core.truth_(inst_32865)){
var statearr_32894_32937 = state_32880__$1;
(statearr_32894_32937[(1)] = (23));

} else {
var statearr_32895_32938 = state_32880__$1;
(statearr_32895_32938[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (6))){
var inst_32859 = (state_32880[(7)]);
var inst_32811 = (state_32880[(8)]);
var inst_32861 = (state_32880[(11)]);
var inst_32859__$1 = topic_fn.call(null,inst_32811);
var inst_32860 = cljs.core.deref.call(null,mults);
var inst_32861__$1 = cljs.core.get.call(null,inst_32860,inst_32859__$1);
var state_32880__$1 = (function (){var statearr_32896 = state_32880;
(statearr_32896[(7)] = inst_32859__$1);

(statearr_32896[(11)] = inst_32861__$1);

return statearr_32896;
})();
if(cljs.core.truth_(inst_32861__$1)){
var statearr_32897_32939 = state_32880__$1;
(statearr_32897_32939[(1)] = (19));

} else {
var statearr_32898_32940 = state_32880__$1;
(statearr_32898_32940[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (25))){
var inst_32870 = (state_32880[(2)]);
var state_32880__$1 = state_32880;
var statearr_32899_32941 = state_32880__$1;
(statearr_32899_32941[(2)] = inst_32870);

(statearr_32899_32941[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (17))){
var inst_32835 = (state_32880[(10)]);
var inst_32844 = cljs.core.first.call(null,inst_32835);
var inst_32845 = cljs.core.async.muxch_STAR_.call(null,inst_32844);
var inst_32846 = cljs.core.async.close_BANG_.call(null,inst_32845);
var inst_32847 = cljs.core.next.call(null,inst_32835);
var inst_32821 = inst_32847;
var inst_32822 = null;
var inst_32823 = (0);
var inst_32824 = (0);
var state_32880__$1 = (function (){var statearr_32900 = state_32880;
(statearr_32900[(12)] = inst_32846);

(statearr_32900[(13)] = inst_32821);

(statearr_32900[(14)] = inst_32824);

(statearr_32900[(15)] = inst_32823);

(statearr_32900[(16)] = inst_32822);

return statearr_32900;
})();
var statearr_32901_32942 = state_32880__$1;
(statearr_32901_32942[(2)] = null);

(statearr_32901_32942[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (3))){
var inst_32878 = (state_32880[(2)]);
var state_32880__$1 = state_32880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32880__$1,inst_32878);
} else {
if((state_val_32881 === (12))){
var inst_32855 = (state_32880[(2)]);
var state_32880__$1 = state_32880;
var statearr_32902_32943 = state_32880__$1;
(statearr_32902_32943[(2)] = inst_32855);

(statearr_32902_32943[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (2))){
var state_32880__$1 = state_32880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32880__$1,(4),ch);
} else {
if((state_val_32881 === (23))){
var state_32880__$1 = state_32880;
var statearr_32903_32944 = state_32880__$1;
(statearr_32903_32944[(2)] = null);

(statearr_32903_32944[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (19))){
var inst_32811 = (state_32880[(8)]);
var inst_32861 = (state_32880[(11)]);
var inst_32863 = cljs.core.async.muxch_STAR_.call(null,inst_32861);
var state_32880__$1 = state_32880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32880__$1,(22),inst_32863,inst_32811);
} else {
if((state_val_32881 === (11))){
var inst_32821 = (state_32880[(13)]);
var inst_32835 = (state_32880[(10)]);
var inst_32835__$1 = cljs.core.seq.call(null,inst_32821);
var state_32880__$1 = (function (){var statearr_32904 = state_32880;
(statearr_32904[(10)] = inst_32835__$1);

return statearr_32904;
})();
if(inst_32835__$1){
var statearr_32905_32945 = state_32880__$1;
(statearr_32905_32945[(1)] = (13));

} else {
var statearr_32906_32946 = state_32880__$1;
(statearr_32906_32946[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (9))){
var inst_32857 = (state_32880[(2)]);
var state_32880__$1 = state_32880;
var statearr_32907_32947 = state_32880__$1;
(statearr_32907_32947[(2)] = inst_32857);

(statearr_32907_32947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (5))){
var inst_32818 = cljs.core.deref.call(null,mults);
var inst_32819 = cljs.core.vals.call(null,inst_32818);
var inst_32820 = cljs.core.seq.call(null,inst_32819);
var inst_32821 = inst_32820;
var inst_32822 = null;
var inst_32823 = (0);
var inst_32824 = (0);
var state_32880__$1 = (function (){var statearr_32908 = state_32880;
(statearr_32908[(13)] = inst_32821);

(statearr_32908[(14)] = inst_32824);

(statearr_32908[(15)] = inst_32823);

(statearr_32908[(16)] = inst_32822);

return statearr_32908;
})();
var statearr_32909_32948 = state_32880__$1;
(statearr_32909_32948[(2)] = null);

(statearr_32909_32948[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (14))){
var state_32880__$1 = state_32880;
var statearr_32913_32949 = state_32880__$1;
(statearr_32913_32949[(2)] = null);

(statearr_32913_32949[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (16))){
var inst_32835 = (state_32880[(10)]);
var inst_32839 = cljs.core.chunk_first.call(null,inst_32835);
var inst_32840 = cljs.core.chunk_rest.call(null,inst_32835);
var inst_32841 = cljs.core.count.call(null,inst_32839);
var inst_32821 = inst_32840;
var inst_32822 = inst_32839;
var inst_32823 = inst_32841;
var inst_32824 = (0);
var state_32880__$1 = (function (){var statearr_32914 = state_32880;
(statearr_32914[(13)] = inst_32821);

(statearr_32914[(14)] = inst_32824);

(statearr_32914[(15)] = inst_32823);

(statearr_32914[(16)] = inst_32822);

return statearr_32914;
})();
var statearr_32915_32950 = state_32880__$1;
(statearr_32915_32950[(2)] = null);

(statearr_32915_32950[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (10))){
var inst_32821 = (state_32880[(13)]);
var inst_32824 = (state_32880[(14)]);
var inst_32823 = (state_32880[(15)]);
var inst_32822 = (state_32880[(16)]);
var inst_32829 = cljs.core._nth.call(null,inst_32822,inst_32824);
var inst_32830 = cljs.core.async.muxch_STAR_.call(null,inst_32829);
var inst_32831 = cljs.core.async.close_BANG_.call(null,inst_32830);
var inst_32832 = (inst_32824 + (1));
var tmp32910 = inst_32821;
var tmp32911 = inst_32823;
var tmp32912 = inst_32822;
var inst_32821__$1 = tmp32910;
var inst_32822__$1 = tmp32912;
var inst_32823__$1 = tmp32911;
var inst_32824__$1 = inst_32832;
var state_32880__$1 = (function (){var statearr_32916 = state_32880;
(statearr_32916[(13)] = inst_32821__$1);

(statearr_32916[(17)] = inst_32831);

(statearr_32916[(14)] = inst_32824__$1);

(statearr_32916[(15)] = inst_32823__$1);

(statearr_32916[(16)] = inst_32822__$1);

return statearr_32916;
})();
var statearr_32917_32951 = state_32880__$1;
(statearr_32917_32951[(2)] = null);

(statearr_32917_32951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (18))){
var inst_32850 = (state_32880[(2)]);
var state_32880__$1 = state_32880;
var statearr_32918_32952 = state_32880__$1;
(statearr_32918_32952[(2)] = inst_32850);

(statearr_32918_32952[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (8))){
var inst_32824 = (state_32880[(14)]);
var inst_32823 = (state_32880[(15)]);
var inst_32826 = (inst_32824 < inst_32823);
var inst_32827 = inst_32826;
var state_32880__$1 = state_32880;
if(cljs.core.truth_(inst_32827)){
var statearr_32919_32953 = state_32880__$1;
(statearr_32919_32953[(1)] = (10));

} else {
var statearr_32920_32954 = state_32880__$1;
(statearr_32920_32954[(1)] = (11));

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
});})(c__31692__auto___32926,mults,ensure_mult,p))
;
return ((function (switch__31602__auto__,c__31692__auto___32926,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31603__auto__ = null;
var cljs$core$async$state_machine__31603__auto____0 = (function (){
var statearr_32921 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32921[(0)] = cljs$core$async$state_machine__31603__auto__);

(statearr_32921[(1)] = (1));

return statearr_32921;
});
var cljs$core$async$state_machine__31603__auto____1 = (function (state_32880){
while(true){
var ret_value__31604__auto__ = (function (){try{while(true){
var result__31605__auto__ = switch__31602__auto__.call(null,state_32880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31605__auto__;
}
break;
}
}catch (e32922){if((e32922 instanceof Object)){
var ex__31606__auto__ = e32922;
var statearr_32923_32955 = state_32880;
(statearr_32923_32955[(5)] = ex__31606__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32956 = state_32880;
state_32880 = G__32956;
continue;
} else {
return ret_value__31604__auto__;
}
break;
}
});
cljs$core$async$state_machine__31603__auto__ = function(state_32880){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31603__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31603__auto____1.call(this,state_32880);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31603__auto____0;
cljs$core$async$state_machine__31603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31603__auto____1;
return cljs$core$async$state_machine__31603__auto__;
})()
;})(switch__31602__auto__,c__31692__auto___32926,mults,ensure_mult,p))
})();
var state__31694__auto__ = (function (){var statearr_32924 = f__31693__auto__.call(null);
(statearr_32924[(6)] = c__31692__auto___32926);

return statearr_32924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31694__auto__);
});})(c__31692__auto___32926,mults,ensure_mult,p))
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
var G__32958 = arguments.length;
switch (G__32958) {
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
var G__32961 = arguments.length;
switch (G__32961) {
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
var G__32964 = arguments.length;
switch (G__32964) {
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
var c__31692__auto___33031 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31692__auto___33031,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31693__auto__ = (function (){var switch__31602__auto__ = ((function (c__31692__auto___33031,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33003){
var state_val_33004 = (state_33003[(1)]);
if((state_val_33004 === (7))){
var state_33003__$1 = state_33003;
var statearr_33005_33032 = state_33003__$1;
(statearr_33005_33032[(2)] = null);

(statearr_33005_33032[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33004 === (1))){
var state_33003__$1 = state_33003;
var statearr_33006_33033 = state_33003__$1;
(statearr_33006_33033[(2)] = null);

(statearr_33006_33033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33004 === (4))){
var inst_32967 = (state_33003[(7)]);
var inst_32969 = (inst_32967 < cnt);
var state_33003__$1 = state_33003;
if(cljs.core.truth_(inst_32969)){
var statearr_33007_33034 = state_33003__$1;
(statearr_33007_33034[(1)] = (6));

} else {
var statearr_33008_33035 = state_33003__$1;
(statearr_33008_33035[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33004 === (15))){
var inst_32999 = (state_33003[(2)]);
var state_33003__$1 = state_33003;
var statearr_33009_33036 = state_33003__$1;
(statearr_33009_33036[(2)] = inst_32999);

(statearr_33009_33036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33004 === (13))){
var inst_32992 = cljs.core.async.close_BANG_.call(null,out);
var state_33003__$1 = state_33003;
var statearr_33010_33037 = state_33003__$1;
(statearr_33010_33037[(2)] = inst_32992);

(statearr_33010_33037[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33004 === (6))){
var state_33003__$1 = state_33003;
var statearr_33011_33038 = state_33003__$1;
(statearr_33011_33038[(2)] = null);

(statearr_33011_33038[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33004 === (3))){
var inst_33001 = (state_33003[(2)]);
var state_33003__$1 = state_33003;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33003__$1,inst_33001);
} else {
if((state_val_33004 === (12))){
var inst_32989 = (state_33003[(8)]);
var inst_32989__$1 = (state_33003[(2)]);
var inst_32990 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32989__$1);
var state_33003__$1 = (function (){var statearr_33012 = state_33003;
(statearr_33012[(8)] = inst_32989__$1);

return statearr_33012;
})();
if(cljs.core.truth_(inst_32990)){
var statearr_33013_33039 = state_33003__$1;
(statearr_33013_33039[(1)] = (13));

} else {
var statearr_33014_33040 = state_33003__$1;
(statearr_33014_33040[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33004 === (2))){
var inst_32966 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32967 = (0);
var state_33003__$1 = (function (){var statearr_33015 = state_33003;
(statearr_33015[(7)] = inst_32967);

(statearr_33015[(9)] = inst_32966);

return statearr_33015;
})();
var statearr_33016_33041 = state_33003__$1;
(statearr_33016_33041[(2)] = null);

(statearr_33016_33041[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33004 === (11))){
var inst_32967 = (state_33003[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33003,(10),Object,null,(9));
var inst_32976 = chs__$1.call(null,inst_32967);
var inst_32977 = done.call(null,inst_32967);
var inst_32978 = cljs.core.async.take_BANG_.call(null,inst_32976,inst_32977);
var state_33003__$1 = state_33003;
var statearr_33017_33042 = state_33003__$1;
(statearr_33017_33042[(2)] = inst_32978);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33003__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33004 === (9))){
var inst_32967 = (state_33003[(7)]);
var inst_32980 = (state_33003[(2)]);
var inst_32981 = (inst_32967 + (1));
var inst_32967__$1 = inst_32981;
var state_33003__$1 = (function (){var statearr_33018 = state_33003;
(statearr_33018[(7)] = inst_32967__$1);

(statearr_33018[(10)] = inst_32980);

return statearr_33018;
})();
var statearr_33019_33043 = state_33003__$1;
(statearr_33019_33043[(2)] = null);

(statearr_33019_33043[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33004 === (5))){
var inst_32987 = (state_33003[(2)]);
var state_33003__$1 = (function (){var statearr_33020 = state_33003;
(statearr_33020[(11)] = inst_32987);

return statearr_33020;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33003__$1,(12),dchan);
} else {
if((state_val_33004 === (14))){
var inst_32989 = (state_33003[(8)]);
var inst_32994 = cljs.core.apply.call(null,f,inst_32989);
var state_33003__$1 = state_33003;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33003__$1,(16),out,inst_32994);
} else {
if((state_val_33004 === (16))){
var inst_32996 = (state_33003[(2)]);
var state_33003__$1 = (function (){var statearr_33021 = state_33003;
(statearr_33021[(12)] = inst_32996);

return statearr_33021;
})();
var statearr_33022_33044 = state_33003__$1;
(statearr_33022_33044[(2)] = null);

(statearr_33022_33044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33004 === (10))){
var inst_32971 = (state_33003[(2)]);
var inst_32972 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33003__$1 = (function (){var statearr_33023 = state_33003;
(statearr_33023[(13)] = inst_32971);

return statearr_33023;
})();
var statearr_33024_33045 = state_33003__$1;
(statearr_33024_33045[(2)] = inst_32972);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33003__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33004 === (8))){
var inst_32985 = (state_33003[(2)]);
var state_33003__$1 = state_33003;
var statearr_33025_33046 = state_33003__$1;
(statearr_33025_33046[(2)] = inst_32985);

(statearr_33025_33046[(1)] = (5));


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
});})(c__31692__auto___33031,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31602__auto__,c__31692__auto___33031,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31603__auto__ = null;
var cljs$core$async$state_machine__31603__auto____0 = (function (){
var statearr_33026 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33026[(0)] = cljs$core$async$state_machine__31603__auto__);

(statearr_33026[(1)] = (1));

return statearr_33026;
});
var cljs$core$async$state_machine__31603__auto____1 = (function (state_33003){
while(true){
var ret_value__31604__auto__ = (function (){try{while(true){
var result__31605__auto__ = switch__31602__auto__.call(null,state_33003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31605__auto__;
}
break;
}
}catch (e33027){if((e33027 instanceof Object)){
var ex__31606__auto__ = e33027;
var statearr_33028_33047 = state_33003;
(statearr_33028_33047[(5)] = ex__31606__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33048 = state_33003;
state_33003 = G__33048;
continue;
} else {
return ret_value__31604__auto__;
}
break;
}
});
cljs$core$async$state_machine__31603__auto__ = function(state_33003){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31603__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31603__auto____1.call(this,state_33003);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31603__auto____0;
cljs$core$async$state_machine__31603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31603__auto____1;
return cljs$core$async$state_machine__31603__auto__;
})()
;})(switch__31602__auto__,c__31692__auto___33031,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31694__auto__ = (function (){var statearr_33029 = f__31693__auto__.call(null);
(statearr_33029[(6)] = c__31692__auto___33031);

return statearr_33029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31694__auto__);
});})(c__31692__auto___33031,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__33051 = arguments.length;
switch (G__33051) {
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
var c__31692__auto___33105 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31692__auto___33105,out){
return (function (){
var f__31693__auto__ = (function (){var switch__31602__auto__ = ((function (c__31692__auto___33105,out){
return (function (state_33083){
var state_val_33084 = (state_33083[(1)]);
if((state_val_33084 === (7))){
var inst_33063 = (state_33083[(7)]);
var inst_33062 = (state_33083[(8)]);
var inst_33062__$1 = (state_33083[(2)]);
var inst_33063__$1 = cljs.core.nth.call(null,inst_33062__$1,(0),null);
var inst_33064 = cljs.core.nth.call(null,inst_33062__$1,(1),null);
var inst_33065 = (inst_33063__$1 == null);
var state_33083__$1 = (function (){var statearr_33085 = state_33083;
(statearr_33085[(7)] = inst_33063__$1);

(statearr_33085[(9)] = inst_33064);

(statearr_33085[(8)] = inst_33062__$1);

return statearr_33085;
})();
if(cljs.core.truth_(inst_33065)){
var statearr_33086_33106 = state_33083__$1;
(statearr_33086_33106[(1)] = (8));

} else {
var statearr_33087_33107 = state_33083__$1;
(statearr_33087_33107[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33084 === (1))){
var inst_33052 = cljs.core.vec.call(null,chs);
var inst_33053 = inst_33052;
var state_33083__$1 = (function (){var statearr_33088 = state_33083;
(statearr_33088[(10)] = inst_33053);

return statearr_33088;
})();
var statearr_33089_33108 = state_33083__$1;
(statearr_33089_33108[(2)] = null);

(statearr_33089_33108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33084 === (4))){
var inst_33053 = (state_33083[(10)]);
var state_33083__$1 = state_33083;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33083__$1,(7),inst_33053);
} else {
if((state_val_33084 === (6))){
var inst_33079 = (state_33083[(2)]);
var state_33083__$1 = state_33083;
var statearr_33090_33109 = state_33083__$1;
(statearr_33090_33109[(2)] = inst_33079);

(statearr_33090_33109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33084 === (3))){
var inst_33081 = (state_33083[(2)]);
var state_33083__$1 = state_33083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33083__$1,inst_33081);
} else {
if((state_val_33084 === (2))){
var inst_33053 = (state_33083[(10)]);
var inst_33055 = cljs.core.count.call(null,inst_33053);
var inst_33056 = (inst_33055 > (0));
var state_33083__$1 = state_33083;
if(cljs.core.truth_(inst_33056)){
var statearr_33092_33110 = state_33083__$1;
(statearr_33092_33110[(1)] = (4));

} else {
var statearr_33093_33111 = state_33083__$1;
(statearr_33093_33111[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33084 === (11))){
var inst_33053 = (state_33083[(10)]);
var inst_33072 = (state_33083[(2)]);
var tmp33091 = inst_33053;
var inst_33053__$1 = tmp33091;
var state_33083__$1 = (function (){var statearr_33094 = state_33083;
(statearr_33094[(11)] = inst_33072);

(statearr_33094[(10)] = inst_33053__$1);

return statearr_33094;
})();
var statearr_33095_33112 = state_33083__$1;
(statearr_33095_33112[(2)] = null);

(statearr_33095_33112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33084 === (9))){
var inst_33063 = (state_33083[(7)]);
var state_33083__$1 = state_33083;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33083__$1,(11),out,inst_33063);
} else {
if((state_val_33084 === (5))){
var inst_33077 = cljs.core.async.close_BANG_.call(null,out);
var state_33083__$1 = state_33083;
var statearr_33096_33113 = state_33083__$1;
(statearr_33096_33113[(2)] = inst_33077);

(statearr_33096_33113[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33084 === (10))){
var inst_33075 = (state_33083[(2)]);
var state_33083__$1 = state_33083;
var statearr_33097_33114 = state_33083__$1;
(statearr_33097_33114[(2)] = inst_33075);

(statearr_33097_33114[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33084 === (8))){
var inst_33063 = (state_33083[(7)]);
var inst_33064 = (state_33083[(9)]);
var inst_33053 = (state_33083[(10)]);
var inst_33062 = (state_33083[(8)]);
var inst_33067 = (function (){var cs = inst_33053;
var vec__33058 = inst_33062;
var v = inst_33063;
var c = inst_33064;
return ((function (cs,vec__33058,v,c,inst_33063,inst_33064,inst_33053,inst_33062,state_val_33084,c__31692__auto___33105,out){
return (function (p1__33049_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33049_SHARP_);
});
;})(cs,vec__33058,v,c,inst_33063,inst_33064,inst_33053,inst_33062,state_val_33084,c__31692__auto___33105,out))
})();
var inst_33068 = cljs.core.filterv.call(null,inst_33067,inst_33053);
var inst_33053__$1 = inst_33068;
var state_33083__$1 = (function (){var statearr_33098 = state_33083;
(statearr_33098[(10)] = inst_33053__$1);

return statearr_33098;
})();
var statearr_33099_33115 = state_33083__$1;
(statearr_33099_33115[(2)] = null);

(statearr_33099_33115[(1)] = (2));


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
});})(c__31692__auto___33105,out))
;
return ((function (switch__31602__auto__,c__31692__auto___33105,out){
return (function() {
var cljs$core$async$state_machine__31603__auto__ = null;
var cljs$core$async$state_machine__31603__auto____0 = (function (){
var statearr_33100 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33100[(0)] = cljs$core$async$state_machine__31603__auto__);

(statearr_33100[(1)] = (1));

return statearr_33100;
});
var cljs$core$async$state_machine__31603__auto____1 = (function (state_33083){
while(true){
var ret_value__31604__auto__ = (function (){try{while(true){
var result__31605__auto__ = switch__31602__auto__.call(null,state_33083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31605__auto__;
}
break;
}
}catch (e33101){if((e33101 instanceof Object)){
var ex__31606__auto__ = e33101;
var statearr_33102_33116 = state_33083;
(statearr_33102_33116[(5)] = ex__31606__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33117 = state_33083;
state_33083 = G__33117;
continue;
} else {
return ret_value__31604__auto__;
}
break;
}
});
cljs$core$async$state_machine__31603__auto__ = function(state_33083){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31603__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31603__auto____1.call(this,state_33083);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31603__auto____0;
cljs$core$async$state_machine__31603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31603__auto____1;
return cljs$core$async$state_machine__31603__auto__;
})()
;})(switch__31602__auto__,c__31692__auto___33105,out))
})();
var state__31694__auto__ = (function (){var statearr_33103 = f__31693__auto__.call(null);
(statearr_33103[(6)] = c__31692__auto___33105);

return statearr_33103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31694__auto__);
});})(c__31692__auto___33105,out))
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
var G__33119 = arguments.length;
switch (G__33119) {
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
var c__31692__auto___33164 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31692__auto___33164,out){
return (function (){
var f__31693__auto__ = (function (){var switch__31602__auto__ = ((function (c__31692__auto___33164,out){
return (function (state_33143){
var state_val_33144 = (state_33143[(1)]);
if((state_val_33144 === (7))){
var inst_33125 = (state_33143[(7)]);
var inst_33125__$1 = (state_33143[(2)]);
var inst_33126 = (inst_33125__$1 == null);
var inst_33127 = cljs.core.not.call(null,inst_33126);
var state_33143__$1 = (function (){var statearr_33145 = state_33143;
(statearr_33145[(7)] = inst_33125__$1);

return statearr_33145;
})();
if(inst_33127){
var statearr_33146_33165 = state_33143__$1;
(statearr_33146_33165[(1)] = (8));

} else {
var statearr_33147_33166 = state_33143__$1;
(statearr_33147_33166[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33144 === (1))){
var inst_33120 = (0);
var state_33143__$1 = (function (){var statearr_33148 = state_33143;
(statearr_33148[(8)] = inst_33120);

return statearr_33148;
})();
var statearr_33149_33167 = state_33143__$1;
(statearr_33149_33167[(2)] = null);

(statearr_33149_33167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33144 === (4))){
var state_33143__$1 = state_33143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33143__$1,(7),ch);
} else {
if((state_val_33144 === (6))){
var inst_33138 = (state_33143[(2)]);
var state_33143__$1 = state_33143;
var statearr_33150_33168 = state_33143__$1;
(statearr_33150_33168[(2)] = inst_33138);

(statearr_33150_33168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33144 === (3))){
var inst_33140 = (state_33143[(2)]);
var inst_33141 = cljs.core.async.close_BANG_.call(null,out);
var state_33143__$1 = (function (){var statearr_33151 = state_33143;
(statearr_33151[(9)] = inst_33140);

return statearr_33151;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33143__$1,inst_33141);
} else {
if((state_val_33144 === (2))){
var inst_33120 = (state_33143[(8)]);
var inst_33122 = (inst_33120 < n);
var state_33143__$1 = state_33143;
if(cljs.core.truth_(inst_33122)){
var statearr_33152_33169 = state_33143__$1;
(statearr_33152_33169[(1)] = (4));

} else {
var statearr_33153_33170 = state_33143__$1;
(statearr_33153_33170[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33144 === (11))){
var inst_33120 = (state_33143[(8)]);
var inst_33130 = (state_33143[(2)]);
var inst_33131 = (inst_33120 + (1));
var inst_33120__$1 = inst_33131;
var state_33143__$1 = (function (){var statearr_33154 = state_33143;
(statearr_33154[(8)] = inst_33120__$1);

(statearr_33154[(10)] = inst_33130);

return statearr_33154;
})();
var statearr_33155_33171 = state_33143__$1;
(statearr_33155_33171[(2)] = null);

(statearr_33155_33171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33144 === (9))){
var state_33143__$1 = state_33143;
var statearr_33156_33172 = state_33143__$1;
(statearr_33156_33172[(2)] = null);

(statearr_33156_33172[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33144 === (5))){
var state_33143__$1 = state_33143;
var statearr_33157_33173 = state_33143__$1;
(statearr_33157_33173[(2)] = null);

(statearr_33157_33173[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33144 === (10))){
var inst_33135 = (state_33143[(2)]);
var state_33143__$1 = state_33143;
var statearr_33158_33174 = state_33143__$1;
(statearr_33158_33174[(2)] = inst_33135);

(statearr_33158_33174[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33144 === (8))){
var inst_33125 = (state_33143[(7)]);
var state_33143__$1 = state_33143;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33143__$1,(11),out,inst_33125);
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
});})(c__31692__auto___33164,out))
;
return ((function (switch__31602__auto__,c__31692__auto___33164,out){
return (function() {
var cljs$core$async$state_machine__31603__auto__ = null;
var cljs$core$async$state_machine__31603__auto____0 = (function (){
var statearr_33159 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33159[(0)] = cljs$core$async$state_machine__31603__auto__);

(statearr_33159[(1)] = (1));

return statearr_33159;
});
var cljs$core$async$state_machine__31603__auto____1 = (function (state_33143){
while(true){
var ret_value__31604__auto__ = (function (){try{while(true){
var result__31605__auto__ = switch__31602__auto__.call(null,state_33143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31605__auto__;
}
break;
}
}catch (e33160){if((e33160 instanceof Object)){
var ex__31606__auto__ = e33160;
var statearr_33161_33175 = state_33143;
(statearr_33161_33175[(5)] = ex__31606__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33176 = state_33143;
state_33143 = G__33176;
continue;
} else {
return ret_value__31604__auto__;
}
break;
}
});
cljs$core$async$state_machine__31603__auto__ = function(state_33143){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31603__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31603__auto____1.call(this,state_33143);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31603__auto____0;
cljs$core$async$state_machine__31603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31603__auto____1;
return cljs$core$async$state_machine__31603__auto__;
})()
;})(switch__31602__auto__,c__31692__auto___33164,out))
})();
var state__31694__auto__ = (function (){var statearr_33162 = f__31693__auto__.call(null);
(statearr_33162[(6)] = c__31692__auto___33164);

return statearr_33162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31694__auto__);
});})(c__31692__auto___33164,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33178 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33178 = (function (f,ch,meta33179){
this.f = f;
this.ch = ch;
this.meta33179 = meta33179;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33180,meta33179__$1){
var self__ = this;
var _33180__$1 = this;
return (new cljs.core.async.t_cljs$core$async33178(self__.f,self__.ch,meta33179__$1));
});

cljs.core.async.t_cljs$core$async33178.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33180){
var self__ = this;
var _33180__$1 = this;
return self__.meta33179;
});

cljs.core.async.t_cljs$core$async33178.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33178.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33178.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33178.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33178.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async33181 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33181 = (function (f,ch,meta33179,_,fn1,meta33182){
this.f = f;
this.ch = ch;
this.meta33179 = meta33179;
this._ = _;
this.fn1 = fn1;
this.meta33182 = meta33182;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33183,meta33182__$1){
var self__ = this;
var _33183__$1 = this;
return (new cljs.core.async.t_cljs$core$async33181(self__.f,self__.ch,self__.meta33179,self__._,self__.fn1,meta33182__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async33181.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33183){
var self__ = this;
var _33183__$1 = this;
return self__.meta33182;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33181.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33181.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33181.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33181.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33177_SHARP_){
return f1.call(null,(((p1__33177_SHARP_ == null))?null:self__.f.call(null,p1__33177_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async33181.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33179","meta33179",1304241979,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33178","cljs.core.async/t_cljs$core$async33178",490488652,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33182","meta33182",537992333,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33181.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33181.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33181";

cljs.core.async.t_cljs$core$async33181.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__26903__auto__,writer__26904__auto__,opt__26905__auto__){
return cljs.core._write.call(null,writer__26904__auto__,"cljs.core.async/t_cljs$core$async33181");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async33181 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33181(f__$1,ch__$1,meta33179__$1,___$2,fn1__$1,meta33182){
return (new cljs.core.async.t_cljs$core$async33181(f__$1,ch__$1,meta33179__$1,___$2,fn1__$1,meta33182));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async33181(self__.f,self__.ch,self__.meta33179,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__26220__auto__ = ret;
if(cljs.core.truth_(and__26220__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__26220__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async33178.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33178.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async33178.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33179","meta33179",1304241979,null)], null);
});

cljs.core.async.t_cljs$core$async33178.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33178.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33178";

cljs.core.async.t_cljs$core$async33178.cljs$lang$ctorPrWriter = (function (this__26903__auto__,writer__26904__auto__,opt__26905__auto__){
return cljs.core._write.call(null,writer__26904__auto__,"cljs.core.async/t_cljs$core$async33178");
});

cljs.core.async.__GT_t_cljs$core$async33178 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33178(f__$1,ch__$1,meta33179){
return (new cljs.core.async.t_cljs$core$async33178(f__$1,ch__$1,meta33179));
});

}

return (new cljs.core.async.t_cljs$core$async33178(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33184 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33184 = (function (f,ch,meta33185){
this.f = f;
this.ch = ch;
this.meta33185 = meta33185;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33186,meta33185__$1){
var self__ = this;
var _33186__$1 = this;
return (new cljs.core.async.t_cljs$core$async33184(self__.f,self__.ch,meta33185__$1));
});

cljs.core.async.t_cljs$core$async33184.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33186){
var self__ = this;
var _33186__$1 = this;
return self__.meta33185;
});

cljs.core.async.t_cljs$core$async33184.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33184.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33184.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33184.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33184.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33184.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async33184.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33185","meta33185",-526695059,null)], null);
});

cljs.core.async.t_cljs$core$async33184.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33184.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33184";

cljs.core.async.t_cljs$core$async33184.cljs$lang$ctorPrWriter = (function (this__26903__auto__,writer__26904__auto__,opt__26905__auto__){
return cljs.core._write.call(null,writer__26904__auto__,"cljs.core.async/t_cljs$core$async33184");
});

cljs.core.async.__GT_t_cljs$core$async33184 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33184(f__$1,ch__$1,meta33185){
return (new cljs.core.async.t_cljs$core$async33184(f__$1,ch__$1,meta33185));
});

}

return (new cljs.core.async.t_cljs$core$async33184(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async33187 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33187 = (function (p,ch,meta33188){
this.p = p;
this.ch = ch;
this.meta33188 = meta33188;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33189,meta33188__$1){
var self__ = this;
var _33189__$1 = this;
return (new cljs.core.async.t_cljs$core$async33187(self__.p,self__.ch,meta33188__$1));
});

cljs.core.async.t_cljs$core$async33187.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33189){
var self__ = this;
var _33189__$1 = this;
return self__.meta33188;
});

cljs.core.async.t_cljs$core$async33187.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33187.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33187.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33187.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33187.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33187.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33187.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async33187.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33188","meta33188",-906149714,null)], null);
});

cljs.core.async.t_cljs$core$async33187.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33187.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33187";

cljs.core.async.t_cljs$core$async33187.cljs$lang$ctorPrWriter = (function (this__26903__auto__,writer__26904__auto__,opt__26905__auto__){
return cljs.core._write.call(null,writer__26904__auto__,"cljs.core.async/t_cljs$core$async33187");
});

cljs.core.async.__GT_t_cljs$core$async33187 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33187(p__$1,ch__$1,meta33188){
return (new cljs.core.async.t_cljs$core$async33187(p__$1,ch__$1,meta33188));
});

}

return (new cljs.core.async.t_cljs$core$async33187(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33191 = arguments.length;
switch (G__33191) {
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
var c__31692__auto___33231 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31692__auto___33231,out){
return (function (){
var f__31693__auto__ = (function (){var switch__31602__auto__ = ((function (c__31692__auto___33231,out){
return (function (state_33212){
var state_val_33213 = (state_33212[(1)]);
if((state_val_33213 === (7))){
var inst_33208 = (state_33212[(2)]);
var state_33212__$1 = state_33212;
var statearr_33214_33232 = state_33212__$1;
(statearr_33214_33232[(2)] = inst_33208);

(statearr_33214_33232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (1))){
var state_33212__$1 = state_33212;
var statearr_33215_33233 = state_33212__$1;
(statearr_33215_33233[(2)] = null);

(statearr_33215_33233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (4))){
var inst_33194 = (state_33212[(7)]);
var inst_33194__$1 = (state_33212[(2)]);
var inst_33195 = (inst_33194__$1 == null);
var state_33212__$1 = (function (){var statearr_33216 = state_33212;
(statearr_33216[(7)] = inst_33194__$1);

return statearr_33216;
})();
if(cljs.core.truth_(inst_33195)){
var statearr_33217_33234 = state_33212__$1;
(statearr_33217_33234[(1)] = (5));

} else {
var statearr_33218_33235 = state_33212__$1;
(statearr_33218_33235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (6))){
var inst_33194 = (state_33212[(7)]);
var inst_33199 = p.call(null,inst_33194);
var state_33212__$1 = state_33212;
if(cljs.core.truth_(inst_33199)){
var statearr_33219_33236 = state_33212__$1;
(statearr_33219_33236[(1)] = (8));

} else {
var statearr_33220_33237 = state_33212__$1;
(statearr_33220_33237[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (3))){
var inst_33210 = (state_33212[(2)]);
var state_33212__$1 = state_33212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33212__$1,inst_33210);
} else {
if((state_val_33213 === (2))){
var state_33212__$1 = state_33212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33212__$1,(4),ch);
} else {
if((state_val_33213 === (11))){
var inst_33202 = (state_33212[(2)]);
var state_33212__$1 = state_33212;
var statearr_33221_33238 = state_33212__$1;
(statearr_33221_33238[(2)] = inst_33202);

(statearr_33221_33238[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (9))){
var state_33212__$1 = state_33212;
var statearr_33222_33239 = state_33212__$1;
(statearr_33222_33239[(2)] = null);

(statearr_33222_33239[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (5))){
var inst_33197 = cljs.core.async.close_BANG_.call(null,out);
var state_33212__$1 = state_33212;
var statearr_33223_33240 = state_33212__$1;
(statearr_33223_33240[(2)] = inst_33197);

(statearr_33223_33240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (10))){
var inst_33205 = (state_33212[(2)]);
var state_33212__$1 = (function (){var statearr_33224 = state_33212;
(statearr_33224[(8)] = inst_33205);

return statearr_33224;
})();
var statearr_33225_33241 = state_33212__$1;
(statearr_33225_33241[(2)] = null);

(statearr_33225_33241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (8))){
var inst_33194 = (state_33212[(7)]);
var state_33212__$1 = state_33212;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33212__$1,(11),out,inst_33194);
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
});})(c__31692__auto___33231,out))
;
return ((function (switch__31602__auto__,c__31692__auto___33231,out){
return (function() {
var cljs$core$async$state_machine__31603__auto__ = null;
var cljs$core$async$state_machine__31603__auto____0 = (function (){
var statearr_33226 = [null,null,null,null,null,null,null,null,null];
(statearr_33226[(0)] = cljs$core$async$state_machine__31603__auto__);

(statearr_33226[(1)] = (1));

return statearr_33226;
});
var cljs$core$async$state_machine__31603__auto____1 = (function (state_33212){
while(true){
var ret_value__31604__auto__ = (function (){try{while(true){
var result__31605__auto__ = switch__31602__auto__.call(null,state_33212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31605__auto__;
}
break;
}
}catch (e33227){if((e33227 instanceof Object)){
var ex__31606__auto__ = e33227;
var statearr_33228_33242 = state_33212;
(statearr_33228_33242[(5)] = ex__31606__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33243 = state_33212;
state_33212 = G__33243;
continue;
} else {
return ret_value__31604__auto__;
}
break;
}
});
cljs$core$async$state_machine__31603__auto__ = function(state_33212){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31603__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31603__auto____1.call(this,state_33212);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31603__auto____0;
cljs$core$async$state_machine__31603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31603__auto____1;
return cljs$core$async$state_machine__31603__auto__;
})()
;})(switch__31602__auto__,c__31692__auto___33231,out))
})();
var state__31694__auto__ = (function (){var statearr_33229 = f__31693__auto__.call(null);
(statearr_33229[(6)] = c__31692__auto___33231);

return statearr_33229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31694__auto__);
});})(c__31692__auto___33231,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33245 = arguments.length;
switch (G__33245) {
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
var c__31692__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31692__auto__){
return (function (){
var f__31693__auto__ = (function (){var switch__31602__auto__ = ((function (c__31692__auto__){
return (function (state_33308){
var state_val_33309 = (state_33308[(1)]);
if((state_val_33309 === (7))){
var inst_33304 = (state_33308[(2)]);
var state_33308__$1 = state_33308;
var statearr_33310_33348 = state_33308__$1;
(statearr_33310_33348[(2)] = inst_33304);

(statearr_33310_33348[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33309 === (20))){
var inst_33274 = (state_33308[(7)]);
var inst_33285 = (state_33308[(2)]);
var inst_33286 = cljs.core.next.call(null,inst_33274);
var inst_33260 = inst_33286;
var inst_33261 = null;
var inst_33262 = (0);
var inst_33263 = (0);
var state_33308__$1 = (function (){var statearr_33311 = state_33308;
(statearr_33311[(8)] = inst_33263);

(statearr_33311[(9)] = inst_33285);

(statearr_33311[(10)] = inst_33260);

(statearr_33311[(11)] = inst_33262);

(statearr_33311[(12)] = inst_33261);

return statearr_33311;
})();
var statearr_33312_33349 = state_33308__$1;
(statearr_33312_33349[(2)] = null);

(statearr_33312_33349[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33309 === (1))){
var state_33308__$1 = state_33308;
var statearr_33313_33350 = state_33308__$1;
(statearr_33313_33350[(2)] = null);

(statearr_33313_33350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33309 === (4))){
var inst_33249 = (state_33308[(13)]);
var inst_33249__$1 = (state_33308[(2)]);
var inst_33250 = (inst_33249__$1 == null);
var state_33308__$1 = (function (){var statearr_33314 = state_33308;
(statearr_33314[(13)] = inst_33249__$1);

return statearr_33314;
})();
if(cljs.core.truth_(inst_33250)){
var statearr_33315_33351 = state_33308__$1;
(statearr_33315_33351[(1)] = (5));

} else {
var statearr_33316_33352 = state_33308__$1;
(statearr_33316_33352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33309 === (15))){
var state_33308__$1 = state_33308;
var statearr_33320_33353 = state_33308__$1;
(statearr_33320_33353[(2)] = null);

(statearr_33320_33353[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33309 === (21))){
var state_33308__$1 = state_33308;
var statearr_33321_33354 = state_33308__$1;
(statearr_33321_33354[(2)] = null);

(statearr_33321_33354[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33309 === (13))){
var inst_33263 = (state_33308[(8)]);
var inst_33260 = (state_33308[(10)]);
var inst_33262 = (state_33308[(11)]);
var inst_33261 = (state_33308[(12)]);
var inst_33270 = (state_33308[(2)]);
var inst_33271 = (inst_33263 + (1));
var tmp33317 = inst_33260;
var tmp33318 = inst_33262;
var tmp33319 = inst_33261;
var inst_33260__$1 = tmp33317;
var inst_33261__$1 = tmp33319;
var inst_33262__$1 = tmp33318;
var inst_33263__$1 = inst_33271;
var state_33308__$1 = (function (){var statearr_33322 = state_33308;
(statearr_33322[(8)] = inst_33263__$1);

(statearr_33322[(14)] = inst_33270);

(statearr_33322[(10)] = inst_33260__$1);

(statearr_33322[(11)] = inst_33262__$1);

(statearr_33322[(12)] = inst_33261__$1);

return statearr_33322;
})();
var statearr_33323_33355 = state_33308__$1;
(statearr_33323_33355[(2)] = null);

(statearr_33323_33355[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33309 === (22))){
var state_33308__$1 = state_33308;
var statearr_33324_33356 = state_33308__$1;
(statearr_33324_33356[(2)] = null);

(statearr_33324_33356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33309 === (6))){
var inst_33249 = (state_33308[(13)]);
var inst_33258 = f.call(null,inst_33249);
var inst_33259 = cljs.core.seq.call(null,inst_33258);
var inst_33260 = inst_33259;
var inst_33261 = null;
var inst_33262 = (0);
var inst_33263 = (0);
var state_33308__$1 = (function (){var statearr_33325 = state_33308;
(statearr_33325[(8)] = inst_33263);

(statearr_33325[(10)] = inst_33260);

(statearr_33325[(11)] = inst_33262);

(statearr_33325[(12)] = inst_33261);

return statearr_33325;
})();
var statearr_33326_33357 = state_33308__$1;
(statearr_33326_33357[(2)] = null);

(statearr_33326_33357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33309 === (17))){
var inst_33274 = (state_33308[(7)]);
var inst_33278 = cljs.core.chunk_first.call(null,inst_33274);
var inst_33279 = cljs.core.chunk_rest.call(null,inst_33274);
var inst_33280 = cljs.core.count.call(null,inst_33278);
var inst_33260 = inst_33279;
var inst_33261 = inst_33278;
var inst_33262 = inst_33280;
var inst_33263 = (0);
var state_33308__$1 = (function (){var statearr_33327 = state_33308;
(statearr_33327[(8)] = inst_33263);

(statearr_33327[(10)] = inst_33260);

(statearr_33327[(11)] = inst_33262);

(statearr_33327[(12)] = inst_33261);

return statearr_33327;
})();
var statearr_33328_33358 = state_33308__$1;
(statearr_33328_33358[(2)] = null);

(statearr_33328_33358[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33309 === (3))){
var inst_33306 = (state_33308[(2)]);
var state_33308__$1 = state_33308;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33308__$1,inst_33306);
} else {
if((state_val_33309 === (12))){
var inst_33294 = (state_33308[(2)]);
var state_33308__$1 = state_33308;
var statearr_33329_33359 = state_33308__$1;
(statearr_33329_33359[(2)] = inst_33294);

(statearr_33329_33359[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33309 === (2))){
var state_33308__$1 = state_33308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33308__$1,(4),in$);
} else {
if((state_val_33309 === (23))){
var inst_33302 = (state_33308[(2)]);
var state_33308__$1 = state_33308;
var statearr_33330_33360 = state_33308__$1;
(statearr_33330_33360[(2)] = inst_33302);

(statearr_33330_33360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33309 === (19))){
var inst_33289 = (state_33308[(2)]);
var state_33308__$1 = state_33308;
var statearr_33331_33361 = state_33308__$1;
(statearr_33331_33361[(2)] = inst_33289);

(statearr_33331_33361[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33309 === (11))){
var inst_33274 = (state_33308[(7)]);
var inst_33260 = (state_33308[(10)]);
var inst_33274__$1 = cljs.core.seq.call(null,inst_33260);
var state_33308__$1 = (function (){var statearr_33332 = state_33308;
(statearr_33332[(7)] = inst_33274__$1);

return statearr_33332;
})();
if(inst_33274__$1){
var statearr_33333_33362 = state_33308__$1;
(statearr_33333_33362[(1)] = (14));

} else {
var statearr_33334_33363 = state_33308__$1;
(statearr_33334_33363[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33309 === (9))){
var inst_33296 = (state_33308[(2)]);
var inst_33297 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33308__$1 = (function (){var statearr_33335 = state_33308;
(statearr_33335[(15)] = inst_33296);

return statearr_33335;
})();
if(cljs.core.truth_(inst_33297)){
var statearr_33336_33364 = state_33308__$1;
(statearr_33336_33364[(1)] = (21));

} else {
var statearr_33337_33365 = state_33308__$1;
(statearr_33337_33365[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33309 === (5))){
var inst_33252 = cljs.core.async.close_BANG_.call(null,out);
var state_33308__$1 = state_33308;
var statearr_33338_33366 = state_33308__$1;
(statearr_33338_33366[(2)] = inst_33252);

(statearr_33338_33366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33309 === (14))){
var inst_33274 = (state_33308[(7)]);
var inst_33276 = cljs.core.chunked_seq_QMARK_.call(null,inst_33274);
var state_33308__$1 = state_33308;
if(inst_33276){
var statearr_33339_33367 = state_33308__$1;
(statearr_33339_33367[(1)] = (17));

} else {
var statearr_33340_33368 = state_33308__$1;
(statearr_33340_33368[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33309 === (16))){
var inst_33292 = (state_33308[(2)]);
var state_33308__$1 = state_33308;
var statearr_33341_33369 = state_33308__$1;
(statearr_33341_33369[(2)] = inst_33292);

(statearr_33341_33369[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33309 === (10))){
var inst_33263 = (state_33308[(8)]);
var inst_33261 = (state_33308[(12)]);
var inst_33268 = cljs.core._nth.call(null,inst_33261,inst_33263);
var state_33308__$1 = state_33308;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33308__$1,(13),out,inst_33268);
} else {
if((state_val_33309 === (18))){
var inst_33274 = (state_33308[(7)]);
var inst_33283 = cljs.core.first.call(null,inst_33274);
var state_33308__$1 = state_33308;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33308__$1,(20),out,inst_33283);
} else {
if((state_val_33309 === (8))){
var inst_33263 = (state_33308[(8)]);
var inst_33262 = (state_33308[(11)]);
var inst_33265 = (inst_33263 < inst_33262);
var inst_33266 = inst_33265;
var state_33308__$1 = state_33308;
if(cljs.core.truth_(inst_33266)){
var statearr_33342_33370 = state_33308__$1;
(statearr_33342_33370[(1)] = (10));

} else {
var statearr_33343_33371 = state_33308__$1;
(statearr_33343_33371[(1)] = (11));

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
});})(c__31692__auto__))
;
return ((function (switch__31602__auto__,c__31692__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31603__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31603__auto____0 = (function (){
var statearr_33344 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33344[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31603__auto__);

(statearr_33344[(1)] = (1));

return statearr_33344;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31603__auto____1 = (function (state_33308){
while(true){
var ret_value__31604__auto__ = (function (){try{while(true){
var result__31605__auto__ = switch__31602__auto__.call(null,state_33308);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31605__auto__;
}
break;
}
}catch (e33345){if((e33345 instanceof Object)){
var ex__31606__auto__ = e33345;
var statearr_33346_33372 = state_33308;
(statearr_33346_33372[(5)] = ex__31606__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33373 = state_33308;
state_33308 = G__33373;
continue;
} else {
return ret_value__31604__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31603__auto__ = function(state_33308){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31603__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31603__auto____1.call(this,state_33308);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__31603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31603__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31603__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31603__auto__;
})()
;})(switch__31602__auto__,c__31692__auto__))
})();
var state__31694__auto__ = (function (){var statearr_33347 = f__31693__auto__.call(null);
(statearr_33347[(6)] = c__31692__auto__);

return statearr_33347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31694__auto__);
});})(c__31692__auto__))
);

return c__31692__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33375 = arguments.length;
switch (G__33375) {
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
var G__33378 = arguments.length;
switch (G__33378) {
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
var G__33381 = arguments.length;
switch (G__33381) {
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
var c__31692__auto___33428 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31692__auto___33428,out){
return (function (){
var f__31693__auto__ = (function (){var switch__31602__auto__ = ((function (c__31692__auto___33428,out){
return (function (state_33405){
var state_val_33406 = (state_33405[(1)]);
if((state_val_33406 === (7))){
var inst_33400 = (state_33405[(2)]);
var state_33405__$1 = state_33405;
var statearr_33407_33429 = state_33405__$1;
(statearr_33407_33429[(2)] = inst_33400);

(statearr_33407_33429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33406 === (1))){
var inst_33382 = null;
var state_33405__$1 = (function (){var statearr_33408 = state_33405;
(statearr_33408[(7)] = inst_33382);

return statearr_33408;
})();
var statearr_33409_33430 = state_33405__$1;
(statearr_33409_33430[(2)] = null);

(statearr_33409_33430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33406 === (4))){
var inst_33385 = (state_33405[(8)]);
var inst_33385__$1 = (state_33405[(2)]);
var inst_33386 = (inst_33385__$1 == null);
var inst_33387 = cljs.core.not.call(null,inst_33386);
var state_33405__$1 = (function (){var statearr_33410 = state_33405;
(statearr_33410[(8)] = inst_33385__$1);

return statearr_33410;
})();
if(inst_33387){
var statearr_33411_33431 = state_33405__$1;
(statearr_33411_33431[(1)] = (5));

} else {
var statearr_33412_33432 = state_33405__$1;
(statearr_33412_33432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33406 === (6))){
var state_33405__$1 = state_33405;
var statearr_33413_33433 = state_33405__$1;
(statearr_33413_33433[(2)] = null);

(statearr_33413_33433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33406 === (3))){
var inst_33402 = (state_33405[(2)]);
var inst_33403 = cljs.core.async.close_BANG_.call(null,out);
var state_33405__$1 = (function (){var statearr_33414 = state_33405;
(statearr_33414[(9)] = inst_33402);

return statearr_33414;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33405__$1,inst_33403);
} else {
if((state_val_33406 === (2))){
var state_33405__$1 = state_33405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33405__$1,(4),ch);
} else {
if((state_val_33406 === (11))){
var inst_33385 = (state_33405[(8)]);
var inst_33394 = (state_33405[(2)]);
var inst_33382 = inst_33385;
var state_33405__$1 = (function (){var statearr_33415 = state_33405;
(statearr_33415[(7)] = inst_33382);

(statearr_33415[(10)] = inst_33394);

return statearr_33415;
})();
var statearr_33416_33434 = state_33405__$1;
(statearr_33416_33434[(2)] = null);

(statearr_33416_33434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33406 === (9))){
var inst_33385 = (state_33405[(8)]);
var state_33405__$1 = state_33405;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33405__$1,(11),out,inst_33385);
} else {
if((state_val_33406 === (5))){
var inst_33385 = (state_33405[(8)]);
var inst_33382 = (state_33405[(7)]);
var inst_33389 = cljs.core._EQ_.call(null,inst_33385,inst_33382);
var state_33405__$1 = state_33405;
if(inst_33389){
var statearr_33418_33435 = state_33405__$1;
(statearr_33418_33435[(1)] = (8));

} else {
var statearr_33419_33436 = state_33405__$1;
(statearr_33419_33436[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33406 === (10))){
var inst_33397 = (state_33405[(2)]);
var state_33405__$1 = state_33405;
var statearr_33420_33437 = state_33405__$1;
(statearr_33420_33437[(2)] = inst_33397);

(statearr_33420_33437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33406 === (8))){
var inst_33382 = (state_33405[(7)]);
var tmp33417 = inst_33382;
var inst_33382__$1 = tmp33417;
var state_33405__$1 = (function (){var statearr_33421 = state_33405;
(statearr_33421[(7)] = inst_33382__$1);

return statearr_33421;
})();
var statearr_33422_33438 = state_33405__$1;
(statearr_33422_33438[(2)] = null);

(statearr_33422_33438[(1)] = (2));


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
});})(c__31692__auto___33428,out))
;
return ((function (switch__31602__auto__,c__31692__auto___33428,out){
return (function() {
var cljs$core$async$state_machine__31603__auto__ = null;
var cljs$core$async$state_machine__31603__auto____0 = (function (){
var statearr_33423 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33423[(0)] = cljs$core$async$state_machine__31603__auto__);

(statearr_33423[(1)] = (1));

return statearr_33423;
});
var cljs$core$async$state_machine__31603__auto____1 = (function (state_33405){
while(true){
var ret_value__31604__auto__ = (function (){try{while(true){
var result__31605__auto__ = switch__31602__auto__.call(null,state_33405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31605__auto__;
}
break;
}
}catch (e33424){if((e33424 instanceof Object)){
var ex__31606__auto__ = e33424;
var statearr_33425_33439 = state_33405;
(statearr_33425_33439[(5)] = ex__31606__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33440 = state_33405;
state_33405 = G__33440;
continue;
} else {
return ret_value__31604__auto__;
}
break;
}
});
cljs$core$async$state_machine__31603__auto__ = function(state_33405){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31603__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31603__auto____1.call(this,state_33405);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31603__auto____0;
cljs$core$async$state_machine__31603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31603__auto____1;
return cljs$core$async$state_machine__31603__auto__;
})()
;})(switch__31602__auto__,c__31692__auto___33428,out))
})();
var state__31694__auto__ = (function (){var statearr_33426 = f__31693__auto__.call(null);
(statearr_33426[(6)] = c__31692__auto___33428);

return statearr_33426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31694__auto__);
});})(c__31692__auto___33428,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33442 = arguments.length;
switch (G__33442) {
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
var c__31692__auto___33508 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31692__auto___33508,out){
return (function (){
var f__31693__auto__ = (function (){var switch__31602__auto__ = ((function (c__31692__auto___33508,out){
return (function (state_33480){
var state_val_33481 = (state_33480[(1)]);
if((state_val_33481 === (7))){
var inst_33476 = (state_33480[(2)]);
var state_33480__$1 = state_33480;
var statearr_33482_33509 = state_33480__$1;
(statearr_33482_33509[(2)] = inst_33476);

(statearr_33482_33509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33481 === (1))){
var inst_33443 = (new Array(n));
var inst_33444 = inst_33443;
var inst_33445 = (0);
var state_33480__$1 = (function (){var statearr_33483 = state_33480;
(statearr_33483[(7)] = inst_33445);

(statearr_33483[(8)] = inst_33444);

return statearr_33483;
})();
var statearr_33484_33510 = state_33480__$1;
(statearr_33484_33510[(2)] = null);

(statearr_33484_33510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33481 === (4))){
var inst_33448 = (state_33480[(9)]);
var inst_33448__$1 = (state_33480[(2)]);
var inst_33449 = (inst_33448__$1 == null);
var inst_33450 = cljs.core.not.call(null,inst_33449);
var state_33480__$1 = (function (){var statearr_33485 = state_33480;
(statearr_33485[(9)] = inst_33448__$1);

return statearr_33485;
})();
if(inst_33450){
var statearr_33486_33511 = state_33480__$1;
(statearr_33486_33511[(1)] = (5));

} else {
var statearr_33487_33512 = state_33480__$1;
(statearr_33487_33512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33481 === (15))){
var inst_33470 = (state_33480[(2)]);
var state_33480__$1 = state_33480;
var statearr_33488_33513 = state_33480__$1;
(statearr_33488_33513[(2)] = inst_33470);

(statearr_33488_33513[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33481 === (13))){
var state_33480__$1 = state_33480;
var statearr_33489_33514 = state_33480__$1;
(statearr_33489_33514[(2)] = null);

(statearr_33489_33514[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33481 === (6))){
var inst_33445 = (state_33480[(7)]);
var inst_33466 = (inst_33445 > (0));
var state_33480__$1 = state_33480;
if(cljs.core.truth_(inst_33466)){
var statearr_33490_33515 = state_33480__$1;
(statearr_33490_33515[(1)] = (12));

} else {
var statearr_33491_33516 = state_33480__$1;
(statearr_33491_33516[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33481 === (3))){
var inst_33478 = (state_33480[(2)]);
var state_33480__$1 = state_33480;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33480__$1,inst_33478);
} else {
if((state_val_33481 === (12))){
var inst_33444 = (state_33480[(8)]);
var inst_33468 = cljs.core.vec.call(null,inst_33444);
var state_33480__$1 = state_33480;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33480__$1,(15),out,inst_33468);
} else {
if((state_val_33481 === (2))){
var state_33480__$1 = state_33480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33480__$1,(4),ch);
} else {
if((state_val_33481 === (11))){
var inst_33460 = (state_33480[(2)]);
var inst_33461 = (new Array(n));
var inst_33444 = inst_33461;
var inst_33445 = (0);
var state_33480__$1 = (function (){var statearr_33492 = state_33480;
(statearr_33492[(10)] = inst_33460);

(statearr_33492[(7)] = inst_33445);

(statearr_33492[(8)] = inst_33444);

return statearr_33492;
})();
var statearr_33493_33517 = state_33480__$1;
(statearr_33493_33517[(2)] = null);

(statearr_33493_33517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33481 === (9))){
var inst_33444 = (state_33480[(8)]);
var inst_33458 = cljs.core.vec.call(null,inst_33444);
var state_33480__$1 = state_33480;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33480__$1,(11),out,inst_33458);
} else {
if((state_val_33481 === (5))){
var inst_33448 = (state_33480[(9)]);
var inst_33445 = (state_33480[(7)]);
var inst_33444 = (state_33480[(8)]);
var inst_33453 = (state_33480[(11)]);
var inst_33452 = (inst_33444[inst_33445] = inst_33448);
var inst_33453__$1 = (inst_33445 + (1));
var inst_33454 = (inst_33453__$1 < n);
var state_33480__$1 = (function (){var statearr_33494 = state_33480;
(statearr_33494[(11)] = inst_33453__$1);

(statearr_33494[(12)] = inst_33452);

return statearr_33494;
})();
if(cljs.core.truth_(inst_33454)){
var statearr_33495_33518 = state_33480__$1;
(statearr_33495_33518[(1)] = (8));

} else {
var statearr_33496_33519 = state_33480__$1;
(statearr_33496_33519[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33481 === (14))){
var inst_33473 = (state_33480[(2)]);
var inst_33474 = cljs.core.async.close_BANG_.call(null,out);
var state_33480__$1 = (function (){var statearr_33498 = state_33480;
(statearr_33498[(13)] = inst_33473);

return statearr_33498;
})();
var statearr_33499_33520 = state_33480__$1;
(statearr_33499_33520[(2)] = inst_33474);

(statearr_33499_33520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33481 === (10))){
var inst_33464 = (state_33480[(2)]);
var state_33480__$1 = state_33480;
var statearr_33500_33521 = state_33480__$1;
(statearr_33500_33521[(2)] = inst_33464);

(statearr_33500_33521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33481 === (8))){
var inst_33444 = (state_33480[(8)]);
var inst_33453 = (state_33480[(11)]);
var tmp33497 = inst_33444;
var inst_33444__$1 = tmp33497;
var inst_33445 = inst_33453;
var state_33480__$1 = (function (){var statearr_33501 = state_33480;
(statearr_33501[(7)] = inst_33445);

(statearr_33501[(8)] = inst_33444__$1);

return statearr_33501;
})();
var statearr_33502_33522 = state_33480__$1;
(statearr_33502_33522[(2)] = null);

(statearr_33502_33522[(1)] = (2));


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
});})(c__31692__auto___33508,out))
;
return ((function (switch__31602__auto__,c__31692__auto___33508,out){
return (function() {
var cljs$core$async$state_machine__31603__auto__ = null;
var cljs$core$async$state_machine__31603__auto____0 = (function (){
var statearr_33503 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33503[(0)] = cljs$core$async$state_machine__31603__auto__);

(statearr_33503[(1)] = (1));

return statearr_33503;
});
var cljs$core$async$state_machine__31603__auto____1 = (function (state_33480){
while(true){
var ret_value__31604__auto__ = (function (){try{while(true){
var result__31605__auto__ = switch__31602__auto__.call(null,state_33480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31605__auto__;
}
break;
}
}catch (e33504){if((e33504 instanceof Object)){
var ex__31606__auto__ = e33504;
var statearr_33505_33523 = state_33480;
(statearr_33505_33523[(5)] = ex__31606__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33524 = state_33480;
state_33480 = G__33524;
continue;
} else {
return ret_value__31604__auto__;
}
break;
}
});
cljs$core$async$state_machine__31603__auto__ = function(state_33480){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31603__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31603__auto____1.call(this,state_33480);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31603__auto____0;
cljs$core$async$state_machine__31603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31603__auto____1;
return cljs$core$async$state_machine__31603__auto__;
})()
;})(switch__31602__auto__,c__31692__auto___33508,out))
})();
var state__31694__auto__ = (function (){var statearr_33506 = f__31693__auto__.call(null);
(statearr_33506[(6)] = c__31692__auto___33508);

return statearr_33506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31694__auto__);
});})(c__31692__auto___33508,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33526 = arguments.length;
switch (G__33526) {
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
var c__31692__auto___33596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31692__auto___33596,out){
return (function (){
var f__31693__auto__ = (function (){var switch__31602__auto__ = ((function (c__31692__auto___33596,out){
return (function (state_33568){
var state_val_33569 = (state_33568[(1)]);
if((state_val_33569 === (7))){
var inst_33564 = (state_33568[(2)]);
var state_33568__$1 = state_33568;
var statearr_33570_33597 = state_33568__$1;
(statearr_33570_33597[(2)] = inst_33564);

(statearr_33570_33597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (1))){
var inst_33527 = [];
var inst_33528 = inst_33527;
var inst_33529 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33568__$1 = (function (){var statearr_33571 = state_33568;
(statearr_33571[(7)] = inst_33528);

(statearr_33571[(8)] = inst_33529);

return statearr_33571;
})();
var statearr_33572_33598 = state_33568__$1;
(statearr_33572_33598[(2)] = null);

(statearr_33572_33598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (4))){
var inst_33532 = (state_33568[(9)]);
var inst_33532__$1 = (state_33568[(2)]);
var inst_33533 = (inst_33532__$1 == null);
var inst_33534 = cljs.core.not.call(null,inst_33533);
var state_33568__$1 = (function (){var statearr_33573 = state_33568;
(statearr_33573[(9)] = inst_33532__$1);

return statearr_33573;
})();
if(inst_33534){
var statearr_33574_33599 = state_33568__$1;
(statearr_33574_33599[(1)] = (5));

} else {
var statearr_33575_33600 = state_33568__$1;
(statearr_33575_33600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (15))){
var inst_33558 = (state_33568[(2)]);
var state_33568__$1 = state_33568;
var statearr_33576_33601 = state_33568__$1;
(statearr_33576_33601[(2)] = inst_33558);

(statearr_33576_33601[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (13))){
var state_33568__$1 = state_33568;
var statearr_33577_33602 = state_33568__$1;
(statearr_33577_33602[(2)] = null);

(statearr_33577_33602[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (6))){
var inst_33528 = (state_33568[(7)]);
var inst_33553 = inst_33528.length;
var inst_33554 = (inst_33553 > (0));
var state_33568__$1 = state_33568;
if(cljs.core.truth_(inst_33554)){
var statearr_33578_33603 = state_33568__$1;
(statearr_33578_33603[(1)] = (12));

} else {
var statearr_33579_33604 = state_33568__$1;
(statearr_33579_33604[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (3))){
var inst_33566 = (state_33568[(2)]);
var state_33568__$1 = state_33568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33568__$1,inst_33566);
} else {
if((state_val_33569 === (12))){
var inst_33528 = (state_33568[(7)]);
var inst_33556 = cljs.core.vec.call(null,inst_33528);
var state_33568__$1 = state_33568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33568__$1,(15),out,inst_33556);
} else {
if((state_val_33569 === (2))){
var state_33568__$1 = state_33568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33568__$1,(4),ch);
} else {
if((state_val_33569 === (11))){
var inst_33536 = (state_33568[(10)]);
var inst_33532 = (state_33568[(9)]);
var inst_33546 = (state_33568[(2)]);
var inst_33547 = [];
var inst_33548 = inst_33547.push(inst_33532);
var inst_33528 = inst_33547;
var inst_33529 = inst_33536;
var state_33568__$1 = (function (){var statearr_33580 = state_33568;
(statearr_33580[(11)] = inst_33548);

(statearr_33580[(7)] = inst_33528);

(statearr_33580[(8)] = inst_33529);

(statearr_33580[(12)] = inst_33546);

return statearr_33580;
})();
var statearr_33581_33605 = state_33568__$1;
(statearr_33581_33605[(2)] = null);

(statearr_33581_33605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (9))){
var inst_33528 = (state_33568[(7)]);
var inst_33544 = cljs.core.vec.call(null,inst_33528);
var state_33568__$1 = state_33568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33568__$1,(11),out,inst_33544);
} else {
if((state_val_33569 === (5))){
var inst_33536 = (state_33568[(10)]);
var inst_33529 = (state_33568[(8)]);
var inst_33532 = (state_33568[(9)]);
var inst_33536__$1 = f.call(null,inst_33532);
var inst_33537 = cljs.core._EQ_.call(null,inst_33536__$1,inst_33529);
var inst_33538 = cljs.core.keyword_identical_QMARK_.call(null,inst_33529,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33539 = (inst_33537) || (inst_33538);
var state_33568__$1 = (function (){var statearr_33582 = state_33568;
(statearr_33582[(10)] = inst_33536__$1);

return statearr_33582;
})();
if(cljs.core.truth_(inst_33539)){
var statearr_33583_33606 = state_33568__$1;
(statearr_33583_33606[(1)] = (8));

} else {
var statearr_33584_33607 = state_33568__$1;
(statearr_33584_33607[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (14))){
var inst_33561 = (state_33568[(2)]);
var inst_33562 = cljs.core.async.close_BANG_.call(null,out);
var state_33568__$1 = (function (){var statearr_33586 = state_33568;
(statearr_33586[(13)] = inst_33561);

return statearr_33586;
})();
var statearr_33587_33608 = state_33568__$1;
(statearr_33587_33608[(2)] = inst_33562);

(statearr_33587_33608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (10))){
var inst_33551 = (state_33568[(2)]);
var state_33568__$1 = state_33568;
var statearr_33588_33609 = state_33568__$1;
(statearr_33588_33609[(2)] = inst_33551);

(statearr_33588_33609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (8))){
var inst_33536 = (state_33568[(10)]);
var inst_33528 = (state_33568[(7)]);
var inst_33532 = (state_33568[(9)]);
var inst_33541 = inst_33528.push(inst_33532);
var tmp33585 = inst_33528;
var inst_33528__$1 = tmp33585;
var inst_33529 = inst_33536;
var state_33568__$1 = (function (){var statearr_33589 = state_33568;
(statearr_33589[(14)] = inst_33541);

(statearr_33589[(7)] = inst_33528__$1);

(statearr_33589[(8)] = inst_33529);

return statearr_33589;
})();
var statearr_33590_33610 = state_33568__$1;
(statearr_33590_33610[(2)] = null);

(statearr_33590_33610[(1)] = (2));


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
});})(c__31692__auto___33596,out))
;
return ((function (switch__31602__auto__,c__31692__auto___33596,out){
return (function() {
var cljs$core$async$state_machine__31603__auto__ = null;
var cljs$core$async$state_machine__31603__auto____0 = (function (){
var statearr_33591 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33591[(0)] = cljs$core$async$state_machine__31603__auto__);

(statearr_33591[(1)] = (1));

return statearr_33591;
});
var cljs$core$async$state_machine__31603__auto____1 = (function (state_33568){
while(true){
var ret_value__31604__auto__ = (function (){try{while(true){
var result__31605__auto__ = switch__31602__auto__.call(null,state_33568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31605__auto__;
}
break;
}
}catch (e33592){if((e33592 instanceof Object)){
var ex__31606__auto__ = e33592;
var statearr_33593_33611 = state_33568;
(statearr_33593_33611[(5)] = ex__31606__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33612 = state_33568;
state_33568 = G__33612;
continue;
} else {
return ret_value__31604__auto__;
}
break;
}
});
cljs$core$async$state_machine__31603__auto__ = function(state_33568){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31603__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31603__auto____1.call(this,state_33568);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31603__auto____0;
cljs$core$async$state_machine__31603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31603__auto____1;
return cljs$core$async$state_machine__31603__auto__;
})()
;})(switch__31602__auto__,c__31692__auto___33596,out))
})();
var state__31694__auto__ = (function (){var statearr_33594 = f__31693__auto__.call(null);
(statearr_33594[(6)] = c__31692__auto___33596);

return statearr_33594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31694__auto__);
});})(c__31692__auto___33596,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
